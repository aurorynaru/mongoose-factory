import { mkdirSync } from "node:fs";
import { join } from "node:path";
import type { Locator, Page } from "playwright";
import type { LogSink } from "../../util/log.js";
import type { ChatPort, ChatProblem, ChatRole, ReadyStatus, ReplyOutcome, SubmissionCheck, SubmitOutcome } from "../types.js";
import { htmlToMarkdown } from "./extract.js";
import { SELECTORS, pageSnapshot, parseConversationUrl, snapshotArgs, type DomMessage, type DomSnapshot } from "./selectors.js";

export interface RoleBinding {
  url: string;
  conversationId: string;
  gptId: string | null;
}

export interface ChatGptAdapterOptions {
  pages: () => Page[];
  newPage: () => Promise<Page>;
  roles: (role: ChatRole) => RoleBinding | null;
  log: LogSink;
  submitConfirmMs: number;
  stableMs: number;
  navigationTimeoutMs: number;
  pollMs?: number;
  artifactDir?: () => string | null;
  expectedModelLabel?: (role: ChatRole) => string | null;
  desiredModel?: (role: ChatRole) => { model: string | null; effort: string | null };
  autoSelectModel?: boolean;
}

export function assistantRepliesAfter(messages: DomMessage[], nonce: string): { userIndex: number; replies: DomMessage[] } {
  const userIndex = messages.findIndex((m) => m.role === "user" && m.text.includes(nonce));
  if (userIndex < 0) return { userIndex, replies: [] };
  const replies: DomMessage[] = [];
  for (let i = userIndex + 1; i < messages.length; i++) {
    if (messages[i].role === "user") break;
    if (messages[i].role === "assistant") replies.push(messages[i]);
  }
  return { userIndex, replies };
}

export function blockerOf(s: DomSnapshot): { problem: ChatProblem; detail: string } | null {
  if (s.challengeVisible) return { problem: "human_verification", detail: "A human-verification challenge is shown. Complete it manually; the harness will not bypass it." };
  if (s.loginVisible) return { problem: "login_required", detail: "ChatGPT is showing a login screen. Sign in manually in the harness browser." };
  if (s.rateLimited) return { problem: "rate_limited", detail: s.rateLimited };
  if (s.pageErrors.length) return { problem: "visible_error", detail: s.pageErrors.join(" | ") };
  return null;
}

export class ChatGptAdapter implements ChatPort {
  private readonly pollMs: number;
  constructor(private readonly o: ChatGptAdapterOptions) {
    this.pollMs = o.pollMs ?? 750;
  }

  private sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async snapshot(page: Page): Promise<DomSnapshot> {
    return page.evaluate(pageSnapshot, snapshotArgs());
  }

  /** Resolve the page for a role by conversation identity (never by tab index); open it if needed. */
  async pageFor(role: ChatRole, opts: { reload?: boolean } = {}): Promise<{ page: Page } | { problem: ChatProblem; detail: string }> {
    const binding = this.o.roles(role);
    if (!binding) return { problem: "not_configured", detail: `No ${role} conversation configured. Run: harness setup` };
    let page = this.o.pages().find((p) => parseConversationUrl(p.url())?.conversationId === binding.conversationId);
    try {
      if (!page) {
        page = await this.o.newPage();
        await page.goto(binding.url, { waitUntil: "domcontentloaded", timeout: this.o.navigationTimeoutMs });
      } else if (opts.reload) {
        await page.reload({ waitUntil: "domcontentloaded", timeout: this.o.navigationTimeoutMs });
      }
      // Wait for the conversation to render (a stored conversation always has messages), or a blocker.
      await page
        .waitForFunction(
          (sel) => document.querySelector(sel.message) || document.querySelector(sel.login) || /just a moment/i.test(document.title),
          { message: SELECTORS.message, login: SELECTORS.login.join(",") },
          { timeout: this.o.navigationTimeoutMs },
        )
        .catch(() => undefined);
    } catch (e) {
      return { problem: "browser_unavailable", detail: (e as Error).message };
    }
    const parsed = parseConversationUrl(page.url());
    if (!parsed || parsed.conversationId !== binding.conversationId) {
      const s = await this.snapshot(page).catch(() => null);
      const b = s ? blockerOf(s) : null;
      if (b) return b;
      return { problem: "conversation_missing", detail: `Expected conversation ${binding.conversationId}, page is at ${page.url()}` };
    }
    if (binding.gptId && parsed.gptId !== binding.gptId) {
      return { problem: "role_mismatch", detail: `Specialist conversation is no longer under GPT ${binding.gptId} (${page.url()})` };
    }
    return { page };
  }

  async checkReady(role: ChatRole): Promise<ReadyStatus> {
    const r = await this.pageFor(role);
    if ("problem" in r) return { ok: false, problem: r.problem, detail: r.detail };
    const s = await this.snapshot(r.page);
    const b = blockerOf(s);
    if (b) return { ok: false, ...b, url: s.url };
    if (!s.composerPresent) return { ok: false, problem: "composer_missing", detail: "Message composer not found (selector drift?)", url: s.url };
    if (!s.messages.length) return { ok: false, problem: "conversation_missing", detail: "Conversation shows no messages", url: s.url, modelLabel: s.modelLabel };
    const mp = this.modelProblem(role, s.modelLabel);
    if (mp) return { ok: false, ...mp, url: s.url, modelLabel: s.modelLabel };
    return { ok: true, url: s.url, modelLabel: s.modelLabel };
  }

  async findSubmission(role: ChatRole, nonce: string): Promise<SubmissionCheck> {
    const r = await this.pageFor(role, { reload: true });
    if ("problem" in r) return { reliable: false, found: false, detail: `${r.problem}: ${r.detail}` };
    const deadline = Date.now() + Math.min(8000, this.o.submitConfirmMs);
    let s: DomSnapshot;
    do {
      s = await this.snapshot(r.page);
      const b = blockerOf(s);
      if (b) return { reliable: false, found: false, detail: `${b.problem}: ${b.detail}` };
      const hit = s.messages.find((m) => m.role === "user" && m.text.includes(nonce));
      if (hit) return { reliable: true, found: true, userMessageId: hit.id ?? undefined };
      if (s.messages.length === 0) {
        await this.sleep(this.pollMs);
        continue;
      }
      await this.sleep(this.pollMs);
    } while (Date.now() < deadline);
    if (s.messages.length === 0) return { reliable: false, found: false, detail: "conversation rendered no messages" };
    return { reliable: true, found: false };
  }

  private async resolve(page: Page, target: { roleNames?: readonly RegExp[]; css: readonly string[] }, role: "textbox" | "button"): Promise<Locator | null> {
    // First VISIBLE match (ChatGPT can keep hidden duplicate composers/buttons in the page).
    const firstVisible = async (loc: Locator): Promise<Locator | null> => {
      const n = await loc.count().catch(() => 0);
      for (let i = 0; i < n; i++) if (await loc.nth(i).isVisible().catch(() => false)) return loc.nth(i);
      return null;
    };
    for (const name of target.roleNames ?? []) {
      const hit = await firstVisible(page.getByRole(role, { name }));
      if (hit) return hit;
    }
    for (const css of target.css) {
      const hit = await firstVisible(page.locator(css));
      if (hit) return hit;
    }
    return null;
  }

  /** Model/effort label check (configured text must appear in the visible selector label). */
  private modelProblem(role: ChatRole, label: string | null): { problem: ChatProblem; detail: string } | null {
    const want = this.o.expectedModelLabel?.(role) ?? null;
    if (!want) return null;
    if (label && label.toLowerCase().includes(want.toLowerCase())) return null;
    return {
      problem: "model_mismatch",
      detail: `${role}: the model selector shows "${label ?? "(not found)"}", expected it to contain "${want}". In the harness Chrome tab for this ${role} chat (for a new chat: the open new-chat page), select the right model and effort, leave the tab open, then: harness resume`,
    };
  }

  async submit(role: ChatRole, text: string, nonce: string): Promise<SubmitOutcome> {
    const r = await this.pageFor(role);
    if ("problem" in r) return { status: "blocked", problem: r.problem, detail: r.detail };
    return this.typeAndSend(role, r.page, text, nonce);
  }

  async submitNew(role: ChatRole, homeUrl: string, text: string, nonce: string): Promise<SubmitOutcome & { conversationUrl?: string }> {
    // A tab already showing this new-chat page is reused WITHOUT reloading, so a model/effort the
    // operator selected there (after a model_mismatch pause) is kept.
    const samePage = (u: string) => {
      try {
        const x = new URL(u);
        const h = new URL(homeUrl);
        return x.origin === h.origin && x.pathname.replace(/\/$/, "") === h.pathname.replace(/\/$/, "");
      } catch {
        return false;
      }
    };
    let page = this.o.pages().find((p) => samePage(p.url()));
    const prepared = !!page;
    const binding = this.o.roles(role);
    page ??= binding ? this.o.pages().find((p) => parseConversationUrl(p.url())?.conversationId === binding.conversationId) : undefined;
    try {
      page ??= await this.o.newPage();
      if (!prepared) await page.goto(homeUrl, { waitUntil: "domcontentloaded", timeout: this.o.navigationTimeoutMs });
      await page
        .waitForFunction((sel) => !!document.querySelector(sel), SELECTORS.composer.css.join(","), { timeout: this.o.navigationTimeoutMs })
        .catch(() => undefined);
    } catch (e) {
      return { status: "blocked", problem: "browser_unavailable", detail: (e as Error).message };
    }
    if (parseConversationUrl(page.url())) return { status: "blocked", problem: "conversation_missing", detail: `expected a new-chat page at ${homeUrl}, got ${page.url()}` };
    const out = await this.typeAndSend(role, page, text, nonce, true);
    if (out.status !== "accepted") return out;
    // The conversation id appears in the URL once ChatGPT has created the chat.
    // The real id can arrive late (after the temporary local-… id, sometimes only once thinking ends).
    const deadline = Date.now() + Math.max(300_000, this.o.submitConfirmMs);
    while (Date.now() < deadline) {
      const parsed = parseConversationUrl(page.url());
      if (parsed) return { ...out, conversationUrl: parsed.canonical };
      await this.sleep(this.pollMs);
    }
    return { status: "uncertain", detail: `the first message was sent from ${homeUrl} but no conversation URL appeared; look for the new chat in the ChatGPT sidebar` };
  }

  /**
   * Select the configured model and effort through the visible model menu, then verify both before
   * closing it. Uses only the menu's semantic roles (menuitemradio / slider with arrow keys).
   */
  async ensureModel(role: ChatRole, page: Page): Promise<{ ok: true; model: string | null; effort: string | null } | { ok: false; detail: string }> {
    const want = this.o.desiredModel?.(role) ?? { model: null, effort: null };
    if (!want.model && !want.effort) return { ok: true, model: null, effort: null };
    const norm = (x: string) => x.toLowerCase().replace(/[\s-]+/g, "");
    // The model button renders after the composer (observed live on a custom GPT's new-chat page).
    let btn: Locator | null = null;
    const btnDeadline = Date.now() + Math.min(20_000, this.o.navigationTimeoutMs);
    while (!btn && Date.now() < btnDeadline) {
      btn = await this.resolve(page, { css: SELECTORS.modelButton }, "button");
      if (!btn) await this.sleep(this.pollMs);
    }
    if (!btn) return { ok: false, detail: "model selector button not found" };
    const menu = page.locator(SELECTORS.modelMenu).first();
    const open = async () => {
      if (await menu.isVisible().catch(() => false)) return true;
      await btn.click();
      return menu.waitFor({ state: "visible", timeout: 5000 }).then(() => true, () => false);
    };
    const read = () =>
      page.evaluate(
        (sel) => {
          const m = document.querySelector(sel.menu);
          if (!m) return null;
          const radios = Array.from(m.querySelectorAll(sel.model)).map((r) => ({ text: ((r as HTMLElement).innerText ?? "").trim().split("\n")[0], checked: r.getAttribute("aria-checked") === "true" }));
          return { effort: ((m.querySelector(sel.label) as HTMLElement | null)?.innerText ?? "").trim(), models: radios };
        },
        { menu: SELECTORS.modelMenu, model: SELECTORS.modelMenuModel, label: SELECTORS.modelMenuEffortLabel },
      );
    const waitFor = async (pred: (m: NonNullable<Awaited<ReturnType<typeof read>>>) => boolean) => {
      const end = Date.now() + 3000;
      while (Date.now() < end) {
        const m = await read();
        if (m && pred(m)) return m;
        await this.sleep(100);
      }
      return read();
    };
    try {
      if (!(await open())) return { ok: false, detail: "model menu did not open" };
      let m = await read();
      if (!m) return { ok: false, detail: "model menu not readable" };
      if (want.model && !m.models.some((x) => x.checked && norm(x.text).startsWith(norm(want.model!)))) {
        const target = page.locator(`${SELECTORS.modelMenu} ${SELECTORS.modelMenuModel}`).filter({ hasText: want.model }).first();
        if ((await target.count()) === 0) return { ok: false, detail: `model "${want.model}" is not offered (menu shows: ${m.models.map((x) => x.text).join(", ")})` };
        await target.click();
        if (!(await open())) return { ok: false, detail: "model menu did not reopen after selecting the model" };
        m = await waitFor((x) => x.models.some((y) => y.checked && norm(y.text).startsWith(norm(want.model!))));
        if (!m || !m.models.some((x) => x.checked && norm(x.text).startsWith(norm(want.model!)))) return { ok: false, detail: `could not select model "${want.model}"` };
      }
      if (want.effort && norm(m.effort) !== norm(want.effort)) {
        const power = page.locator(`${SELECTORS.modelMenu} :is(${SELECTORS.modelMenuPower})`).first();
        if ((await power.count()) === 0) return { ok: false, detail: "effort control not found in the model menu" };
        await power.focus();
        for (const key of ["ArrowRight", "ArrowLeft"]) {
          for (let i = 0; i < 4 && m && norm(m.effort) !== norm(want.effort); i++) {
            const before = m.effort;
            await page.keyboard.press(key);
            m = await waitFor((x) => x.effort !== before);
            if (m && m.effort === before) break; // end of the scale in this direction
          }
          if (m && norm(m.effort) === norm(want.effort)) break;
        }
        if (!m || norm(m.effort) !== norm(want.effort)) return { ok: false, detail: `could not set effort "${want.effort}" (menu shows "${m?.effort ?? "?"}")` };
      }
      const model = m.models.find((x) => x.checked)?.text ?? null;
      this.o.log.log("info", "browser.model_selected", { role, model, effort: m.effort });
      return { ok: true, model, effort: m.effort };
    } finally {
      if (await menu.isVisible().catch(() => false)) await page.keyboard.press("Escape").catch(() => undefined);
    }
  }

  private async typeAndSend(role: ChatRole, page: Page, text: string, nonce: string, isNewChat = false): Promise<SubmitOutcome> {
    let pre = await this.snapshot(page);
    const b = blockerOf(pre);
    if (b) return { status: "blocked", ...b };
    if (pre.streaming) return { status: "blocked", problem: "visible_error", detail: "A response is still streaming in this conversation; not submitting." };
    // New chats always get the configured model/effort; existing chats only when the label is off.
    if (this.o.autoSelectModel && (isNewChat || this.modelProblem(role, pre.modelLabel))) {
      const sel = await this.ensureModel(role, page);
      if (!sel.ok) return { status: "blocked", problem: "model_mismatch", detail: `${role}: ${sel.detail}` };
      pre = await this.snapshot(page);
    }
    const mp = this.modelProblem(role, pre.modelLabel);
    if (mp) return { status: "blocked", ...mp };
    await page.bringToFront();

    const composer = await this.resolve(page, SELECTORS.composer, "textbox");
    if (!composer) return { status: "blocked", problem: "composer_missing", detail: "composer not found" };

    // Clear any stale draft, then insert via a paste event (keeps newlines, fast); fall back to fill().
    await composer.click();
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Delete");
    await composer.evaluate((el, t) => {
      const dt = new DataTransfer();
      dt.setData("text/plain", t);
      el.dispatchEvent(new ClipboardEvent("paste", { clipboardData: dt, bubbles: true, cancelable: true }));
    }, text);
    let typed = (await this.snapshot(page)).composerText;
    if (!typed.includes(nonce)) {
      await composer.fill(text);
      typed = (await this.snapshot(page)).composerText;
    }
    if (!typed.includes(nonce)) return { status: "not_submitted", detail: "composer did not accept the text" };
    if (Math.abs(typed.replace(/\s+/g, "").length - text.replace(/\s+/g, "").length) > 50) {
      return { status: "not_submitted", detail: `composer text length mismatch (${typed.length} vs ${text.length})` };
    }

    const send = await this.resolve(page, SELECTORS.sendButton, "button");
    if (!send) return { status: "not_submitted", detail: "send button not found" };
    await send.click();

    const deadline = Date.now() + this.o.submitConfirmMs;
    while (Date.now() < deadline) {
      const s = await this.snapshot(page);
      const hit = s.messages.find((m) => m.role === "user" && m.text.includes(nonce));
      if (hit) return { status: "accepted", userMessageId: hit.id ?? undefined };
      const blk = blockerOf(s);
      if (blk && !s.composerText.includes(nonce)) return { status: "uncertain", detail: `${blk.problem} after send: ${blk.detail}` };
      await this.sleep(this.pollMs);
    }
    const after = await this.snapshot(page);
    await this.capture(page, `submit-timeout-${role}`);
    if (after.composerText.includes(nonce) && !after.streaming) {
      return { status: "not_submitted", detail: "text still in composer after send; nothing was sent" };
    }
    return { status: "uncertain", detail: "message left the composer but did not appear in the conversation before the timeout" };
  }

  async waitForReply(role: ChatRole, nonce: string, opts: { timeoutMs: number; shouldStop: () => boolean }): Promise<ReplyOutcome> {
    const r = await this.pageFor(role);
    if ("problem" in r) return { status: "blocked", problem: r.problem, detail: r.detail };
    const page = r.page;
    const start = Date.now();
    let lastText = "";
    let stableSince = Date.now();
    let missingSince: number | null = null;
    while (true) {
      if (opts.shouldStop()) return { status: "interrupted" };
      if (Date.now() - start > opts.timeoutMs) {
        await this.capture(page, `reply-timeout-${role}`);
        return { status: "timeout", detail: `no completed reply within ${Math.round(opts.timeoutMs / 60000)} min` };
      }
      if (page.isClosed()) return { status: "blocked", problem: "browser_unavailable", detail: "the conversation tab was closed" };
      const s = await this.snapshot(page);
      const b = blockerOf(s);
      if (b) {
        await this.capture(page, `blocked-${role}`);
        return { status: "blocked", ...b };
      }
      const { userIndex, replies } = assistantRepliesAfter(s.messages, nonce);
      if (userIndex < 0) {
        missingSince ??= Date.now();
        if (Date.now() - missingSince > 30_000) return { status: "blocked", problem: "conversation_missing", detail: "our submitted message is no longer visible in the conversation" };
      } else missingSince = null;
      const last = replies[replies.length - 1];
      const text = replies.map((m) => m.text).join("\n");
      if (text !== lastText) {
        lastText = text;
        stableSince = Date.now();
      }
      if (last && !s.streaming) {
        if (last.errorText) {
          await this.capture(page, `reply-error-${role}`);
          return { status: "blocked", problem: "visible_error", detail: last.errorText };
        }
        const stableFor = Date.now() - stableSince;
        if ((last.done && stableFor >= this.o.stableMs) || stableFor >= this.o.stableMs * 4) {
          const markdown = replies.map((m) => htmlToMarkdown(m.html)).join("\n\n");
          const id = replies.map((m) => m.id ?? "").join("+") || `nonce:${nonce}`;
          return { status: "complete", messageId: id, markdown };
        }
      }
      await this.sleep(this.pollMs);
    }
  }

  private async capture(page: Page, name: string): Promise<void> {
    const dir = this.o.artifactDir?.();
    if (!dir || page.isClosed()) return;
    try {
      mkdirSync(dir, { recursive: true });
      const file = join(dir, `${new Date().toISOString().replace(/[:.]/g, "-")}-${name}.png`);
      await page.screenshot({ path: file });
      this.o.log.log("info", "browser.screenshot", { file });
    } catch {
      /* best effort */
    }
  }

  async close(): Promise<void> {
    /* the BrowserSession owner closes the browser */
  }
}
