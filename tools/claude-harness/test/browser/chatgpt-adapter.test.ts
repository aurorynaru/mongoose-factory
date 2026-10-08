import { readFileSync } from "node:fs";
import { join } from "node:path";
import { chromium, type Browser, type BrowserContext } from "playwright";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { ChatGptAdapter } from "../../src/adapters/chatgpt/adapter.js";
import type { ChatRole } from "../../src/adapters/types.js";
import { extractEnvelope } from "../../src/protocol/envelope.js";
import { MemoryLogger } from "../../src/util/log.js";

/**
 * Exercises the real Playwright adapter against fixtures/html/chatgpt-fixture.html, served for
 * https://chatgpt.com/** via request routing (no network). This validates the adapter's logic
 * (locators, completion waiting, scoping, reconciliation, blocker detection) — NOT that the
 * selectors match today's live ChatGPT DOM; that needs `harness doctor` with your session.
 */
const FIXTURE = readFileSync(join(__dirname, "..", "..", "fixtures", "html", "chatgpt-fixture.html"), "utf8");
let browser: Browser;
let context: BrowserContext;

beforeAll(async () => {
  browser = await chromium.launch({ channel: process.env.HARNESS_TEST_CHANNEL ?? "chrome", headless: true });
});
afterAll(async () => browser?.close());
beforeEach(async () => {
  context = await browser.newContext();
  await context.route("https://chatgpt.com/**", async (route) => {
    const url = new URL(route.request().url());
    // a deleted/unknown conversation: the app navigates back to the home page client-side
    if (url.pathname.startsWith("/c/missing")) return route.fulfill({ status: 200, contentType: "text/html", body: "<script>location.replace('https://chatgpt.com/')</script>" });
    return route.fulfill({ status: 200, contentType: "text/html", body: FIXTURE });
  });
});
afterEach(async () => context?.close());

function makeAdapter(mode: string, confirmMs = 3000, conv: Partial<Record<ChatRole, string>> = {}) {
  return new ChatGptAdapter({
    pages: () => context.pages(),
    newPage: () => context.newPage(),
    roles: (role) => {
      const id = conv[role] ?? `fixture-${role}-0001`;
      return { url: `https://chatgpt.com/c/${id}?mode=${mode}`, conversationId: id, gptId: null };
    },
    log: new MemoryLogger(),
    submitConfirmMs: confirmMs,
    stableMs: 400,
    navigationTimeoutMs: 10_000,
    pollMs: 100,
  });
}

const msg = (nonce: string) => `[HARNESS nonce=${nonce} run_id=R-T experiment_id=EXP-900 cycle_id=1 kind=TEST]\nline one\n\nline three with <angle> & "quotes"`;
const never = () => false;

const USER_MSG = "[data-message-author-role=user], [data-content-search-unit-key$=':user']";

for (const dom of ["v1", "v2"])
describe(`ChatGPT adapter against the fixture DOM (${dom})`, () => {
  const adapter = (mode: string, confirmMs = 3000, conv: Partial<Record<ChatRole, string>> = {}) => makeAdapter(`${mode}&dom=${dom}`, confirmMs, conv);

  it("submits via the composer, waits for streaming to finish, and extracts only the new reply as markdown", async () => {
    const a = adapter("normal");
    expect((await a.checkReady("coordinator")).ok).toBe(true);
    const out = await a.submit("coordinator", msg("H-aaa111"), "H-aaa111");
    expect(out.status).toBe("accepted");
    const r = await a.waitForReply("coordinator", "H-aaa111", { timeoutMs: 20_000, shouldStop: never });
    expect(r.status).toBe("complete");
    if (r.status !== "complete") return;
    expect(r.markdown).toContain("Decision for `H-aaa111` follows.");
    expect(r.markdown).not.toContain("older answer"); // scoped to the new turn
    expect(r.markdown).not.toContain("thinking"); // not a mid-stream snapshot
    expect(r.markdown).toMatch(/-\s+second \*\*point\*\*/);
    expect(r.markdown).toContain("| AC-1 | passed |");
    expect(r.markdown).toContain('```json\n{\n  "protocol": "mongoose-harness/v1",\n  "nonce_seen": "H-aaa111",');
    expect(r.markdown).not.toContain("Copy code");
    const env = extractEnvelope(r.markdown);
    expect(env.status).toBe("invalid_schema"); // parsed as JSON; fixture omits run_id etc.
    // preserved newlines and special characters in the submitted user message
    const user = await context.pages()[0].locator(USER_MSG).last().innerText();
    expect(user).toContain('line three with <angle> & "quotes"');
  });

  it("finds a submission by nonce after a reload and reports a definitive not-found", async () => {
    const a = adapter("normal");
    await a.submit("coordinator", msg("H-bbb222"), "H-bbb222");
    await a.waitForReply("coordinator", "H-bbb222", { timeoutMs: 20_000, shouldStop: never });
    expect(await a.findSubmission("coordinator", "H-bbb222")).toMatchObject({ reliable: true, found: true });
    expect(await a.findSubmission("coordinator", "H-zzz999")).toMatchObject({ reliable: true, found: false });
  });

  it("reads and submits the chat composer when a document editor is visible first", async () => {
    const a = adapter("normal");
    await a.checkReady("coordinator");
    const page = context.pages()[0];
    await page.evaluate(() => {
      const editor = document.createElement("div");
      editor.contentEditable = "true";
      editor.setAttribute("role", "textbox");
      editor.setAttribute("aria-label", "Start writing");
      editor.textContent = "Context document must remain unchanged";
      document.body.prepend(editor);
    });
    const text = msg("H-editor123") + "\n" + "Long proposal content\n".repeat(2500);
    const composer = page.getByRole("textbox", { name: dom === "v2" ? "Ask ChatGPT" : "Message the fixture", exact: true });
    await composer.fill(text);
    expect((await a.snapshot(page)).composerText.replace(/\s+/g, "")).toBe(text.replace(/\s+/g, ""));
    expect((await a.submit("coordinator", text, "H-editor123")).status).toBe("accepted");
    expect(await page.getByRole("textbox", { name: "Start writing", exact: true }).innerText()).toBe("Context document must remain unchanged");
    expect((await a.snapshot(page)).composerText).toBe("");
  });

  it("does not treat a document editor alone as a chat composer", async () => {
    const a = adapter("normal");
    await a.checkReady("coordinator");
    const page = context.pages()[0];
    await page.evaluate(() => {
      document.getElementById("composer-wrap")!.remove();
      const editor = document.createElement("div");
      editor.contentEditable = "true";
      editor.setAttribute("role", "textbox");
      editor.setAttribute("aria-label", "Start writing");
      editor.textContent = "Context document";
      document.body.prepend(editor);
    });
    expect(await a.checkReady("coordinator")).toMatchObject({ ok: false, problem: "composer_missing" });
    expect((await a.snapshot(page)).composerText).toBe("");
  });

  it("resolves roles by conversation identity, not tab order", async () => {
    const a = adapter("normal");
    await a.checkReady("specialist"); // opened first
    await a.checkReady("coordinator");
    await a.submit("coordinator", msg("H-ccc333"), "H-ccc333");
    const pages = context.pages();
    const coordPage = pages.find((p) => p.url().includes("fixture-coordinator"))!;
    const specPage = pages.find((p) => p.url().includes("fixture-specialist"))!;
    await expect.poll(() => coordPage.locator(USER_MSG, { hasText: "H-ccc333" }).count()).toBe(1);
    expect(await specPage.locator(USER_MSG, { hasText: "H-ccc333" }).count()).toBe(0);
  });

  it("accepts a delayed acknowledgement within the confirmation window", async () => {
    expect((await adapter("delayed").submit("coordinator", msg("H-ddd444"), "H-ddd444")).status).toBe("accepted");
  });

  it("reports not_submitted when the text never leaves the composer", async () => {
    const r = await adapter("deadsend", 1500).submit("coordinator", msg("H-eee555"), "H-eee555");
    expect(r.status).toBe("not_submitted");
  });

  it("reports uncertain when the text left the composer but never appeared", async () => {
    const r = await adapter("swallow", 1500).submit("coordinator", msg("H-fff666"), "H-fff666");
    expect(r.status).toBe("uncertain");
  });

  it("reconciles a late acceptance after reload instead of resubmitting", async () => {
    const a = adapter("lateaccept", 1500);
    expect((await a.submit("coordinator", msg("H-ggg777"), "H-ggg777")).status).toBe("uncertain");
    expect(await a.findSubmission("coordinator", "H-ggg777")).toMatchObject({ reliable: true, found: true });
  });

  it("detects the login screen and never types anything", async () => {
    const a = adapter("login");
    expect(await a.checkReady("coordinator")).toMatchObject({ ok: false, problem: "login_required" });
    expect(await a.submit("coordinator", msg("H-hhh888"), "H-hhh888")).toMatchObject({ status: "blocked", problem: "login_required" });
  });

  it("detects a rate-limit banner", async () => {
    const a = adapter("ratelimit", 1500);
    const r = await a.submit("coordinator", msg("H-iii999"), "H-iii999");
    expect(r.status).toBe("uncertain");
    expect(await a.checkReady("coordinator")).toMatchObject({ ok: false, problem: "rate_limited" });
  });

  it("detects a visible error in the generated reply", async () => {
    const a = adapter("error");
    await a.submit("coordinator", msg("H-jjj000"), "H-jjj000");
    const r = await a.waitForReply("coordinator", "H-jjj000", { timeoutMs: 20_000, shouldStop: never });
    expect(r).toMatchObject({ status: "blocked", problem: "visible_error" });
  });

  it("detects a missing conversation (redirected away from the stored id)", async () => {
    const a = adapter("normal", 1500, { coordinator: "missing-conv-0001" });
    expect(await a.checkReady("coordinator")).toMatchObject({ ok: false, problem: "conversation_missing" });
  });

  it("stops waiting when a pause is requested", async () => {
    const a = adapter("normal");
    await a.submit("coordinator", msg("H-kkk111"), "H-kkk111");
    expect((await a.waitForReply("coordinator", "H-kkk111", { timeoutMs: 20_000, shouldStop: () => true })).status).toBe("interrupted");
  });
});
