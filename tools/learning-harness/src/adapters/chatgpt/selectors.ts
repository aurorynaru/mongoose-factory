/**
 * ChatGPT DOM knowledge, isolated so it can be repaired without touching routing logic.
 *
 * STATUS: two DOM generations are supported.
 *  - "v2" (observed on live chatgpt.com, 2026-10-01, read-only inspection of the operator's session):
 *    turns = [data-turn-key]; message units = [data-content-search-unit-key="<turn>:<n>:user|assistant"];
 *    assistant id = [data-chatgpt-selection-message-id]; assistant body =
 *    [data-markdown-text-style=assistant-message]; code blocks = [data-markdown-copy=code-block] with a
 *    [data-markdown-copy=exclude] header; composer = role=textbox "Ask ChatGPT"; a finished reply shows
 *    "Rate response" / "Regenerate response" buttons. Only recent turns are in the DOM (virtualised).
 *    NOT yet observed live: the send and stop buttons (they only appear while typing / streaming).
 *  - "v1" (older public markup: data-message-author-role, data-message-id, #prompt-textarea).
 * Both are exercised against fixtures/html/chatgpt-fixture.html (?dom=v1|v2).
 *
 * Interaction targets (composer / send) are resolved semantic-first (ARIA role + accessible
 * name), then by stable test ids. Message discovery uses the message-role data attributes,
 * which is the only stable per-message hook ChatGPT exposes.
 */
export const SELECTORS = {
  composer: {
    roleNames: [/^(ask chatgpt|message|chat with|ask anything|send a message)/i],
    css: ["#prompt-textarea", "div[contenteditable='true'][role='textbox']", "textarea[name='prompt-textarea']"],
  },
  sendButton: {
    roleNames: [/^send( prompt| message)?$/i],
    css: ["[data-testid='send-button']", "button[aria-label^='Send']"],
  },
  stopButton: {
    css: ["[data-testid='stop-button']", "button[aria-label^='Stop']"],
  },
  message: "[data-message-author-role], [data-content-search-unit-key]",
  authorAttr: "data-message-author-role",
  unitAttr: "data-content-search-unit-key",
  idAttr: "data-message-id",
  innerIdAttr: "data-chatgpt-selection-message-id",
  turnKeyAttr: "data-turn-key",
  content: ["[data-markdown-text-style='assistant-message']", ".markdown", "[data-message-content]", ".whitespace-pre-wrap"],
  turn: "[data-turn-key], article, [data-testid^='conversation-turn-']",
  turnDone: ["button[aria-label='Regenerate response']", "button[aria-label='Rate response']", "[data-testid='copy-turn-action-button']"],
  codeBlock: "pre, [data-markdown-copy='code-block']",
  codeHeader: "[data-markdown-copy='exclude']",
  /** Model/effort selector. Live (2026-10-01) its visible text is the effort, e.g. "Thinking effort High". */
  modelButton: ["button[aria-label='Select ChatGPT model']", "[data-testid='model-switcher-dropdown-button']"],
  /** Open model menu (observed live 2026-10-01): effort label item, "Power" slider item, model radios. */
  modelMenu: "[role='menu'][data-state='open']",
  modelMenuEffortLabel: "[role='menuitem'][aria-label='Select model']",
  modelMenuPower: "[data-reasoning-slider], [role='menuitem'][aria-label='Power']",
  modelMenuSlider: "[role='slider']",
  modelMenuModel: "[role='menuitemradio']",
  login: ["[data-testid='login-button']", "[data-testid='signup-button']"],
  loginText: /^(log in|sign in|sign up)$/i,
  challenge: ["iframe[src*='challenges.cloudflare.com']", "#challenge-form", "#cf-challenge-running"],
  challengeTitle: /just a moment|verify you are human|attention required/i,
  rateLimitText: /(you've|you have) (hit|reached) (our|the|your) (limit|usage (cap|limit))|too many requests|usage cap|rate limit/i,
  errorText: /something went wrong|an error occurred|there was an error generating|network error|unable to load conversation|conversation not found|message stream error/i,
  errorCss: [".text-token-text-error", "[data-testid='error-message']", "div[role='alert']"],
} as const;

export interface DomMessage {
  role: string;
  id: string | null;
  text: string;
  html: string;
  done: boolean;
  errorText: string | null;
}

export interface DomSnapshot {
  url: string;
  title: string;
  messages: DomMessage[];
  streaming: boolean;
  composerPresent: boolean;
  composerText: string;
  loginVisible: boolean;
  challengeVisible: boolean;
  rateLimited: string | null;
  pageErrors: string[];
  modelLabel: string | null;
}

/** Serializable selector config passed into the page. */
export function snapshotArgs() {
  return {
    message: SELECTORS.message,
    authorAttr: SELECTORS.authorAttr,
    unitAttr: SELECTORS.unitAttr,
    idAttr: SELECTORS.idAttr,
    innerIdAttr: SELECTORS.innerIdAttr,
    turnKeyAttr: SELECTORS.turnKeyAttr,
    codeBlock: SELECTORS.codeBlock,
    codeHeader: SELECTORS.codeHeader,
    modelButton: [...SELECTORS.modelButton],
    content: [...SELECTORS.content],
    turn: SELECTORS.turn,
    turnDone: [...SELECTORS.turnDone],
    stop: [...SELECTORS.stopButton.css],
    composer: [...SELECTORS.composer.css],
    login: [...SELECTORS.login],
    loginText: SELECTORS.loginText.source,
    challenge: [...SELECTORS.challenge],
    challengeTitle: SELECTORS.challengeTitle.source,
    rateLimitText: SELECTORS.rateLimitText.source,
    errorText: SELECTORS.errorText.source,
    errorCss: [...SELECTORS.errorCss],
  };
}

type Args = ReturnType<typeof snapshotArgs>;

/**
 * Runs INSIDE the page (must be self-contained). Returns every message in document order, with
 * assistant HTML normalised so code blocks become <pre data-lang><code>text</code></pre> using the
 * rendered innerText (preserves line breaks even for highlighted/virtualised code views).
 */
export function pageSnapshot(a: Args): DomSnapshot {
  const visible = (el: Element | null): boolean => {
    if (!el) return false;
    const r = (el as HTMLElement).getBoundingClientRect();
    const st = getComputedStyle(el as HTMLElement);
    return r.width > 0 && r.height > 0 && st.visibility !== "hidden" && st.display !== "none";
  };
  // First VISIBLE match across all selectors (pages can hold hidden duplicate composers).
  const any = (sels: string[], root: ParentNode = document): Element | null => {
    for (const s of sels) for (const e of Array.from(root.querySelectorAll(s))) if (visible(e)) return e;
    return null;
  };
  const errRe = new RegExp(a.errorText, "i");

  const normaliseHtml = (src: Element): string => {
    const clone = src.cloneNode(true) as Element;
    const outermost = (root: Element) => {
      const all = Array.from(root.querySelectorAll(a.codeBlock));
      return all.filter((e) => !all.some((o) => o !== e && o.contains(e)));
    };
    const origPres = outermost(src);
    const clonePres = outermost(clone);
    origPres.forEach((pre, i) => {
      const code = pre.querySelector("code");
      const cls = (code?.getAttribute("class") ?? "") + " " + (pre.getAttribute("class") ?? "");
      let lang = (cls.match(/language-([\w+#.-]+)/) ?? [])[1] ?? "";
      if (!lang) {
        const scope = pre.querySelector(a.codeHeader) ?? pre;
        const label = Array.from(scope.querySelectorAll("div, span")).find((d) => d.children.length === 0 && /^[\w+#. -]{1,24}$/.test((d.textContent ?? "").trim()));
        if (label && !/copy|wrap/i.test(label.textContent ?? "")) lang = (label.textContent ?? "").trim().toLowerCase().replace(/^plain text$/, "text").replace(/\s+/g, "");
      }
      // innerText follows rendering (keeps breaks from block/line elements); textContent keeps literal
      // newline characters even when CSS would collapse them. Take whichever preserves more line breaks.
      const srcEl = (code ?? pre) as HTMLElement;
      const rendered = srcEl.innerText ?? "";
      const literal = srcEl.textContent ?? "";
      const nl = (t: string) => (t.match(/\n/g) ?? []).length;
      const text = (nl(literal) > nl(rendered) ? literal : rendered).replace(/\u00a0/g, " ");
      const repl = document.createElement("pre");
      repl.setAttribute("data-lang", lang);
      const c = document.createElement("code");
      c.textContent = text;
      repl.appendChild(c);
      clonePres[i]?.replaceWith(repl);
    });
    clone.querySelectorAll(`button, svg, [aria-hidden='true'], ${a.codeHeader}`).forEach((e) => e.remove());
    return clone.innerHTML;
  };

  // Outermost message elements only (v1 and v2 markers could nest).
  const allMsgEls = Array.from(document.querySelectorAll(a.message));
  const msgEls = allMsgEls.filter((e) => !allMsgEls.some((o) => o !== e && o.contains(e)));
  const messages: DomMessage[] = msgEls.map((el) => {
    const role = el.getAttribute(a.authorAttr) ?? (el.getAttribute(a.unitAttr) ?? "").split(":").pop() ?? "";
    const turnKey = el.closest(`[${a.turnKeyAttr}]`)?.getAttribute(a.turnKeyAttr) ?? null;
    const id = el.getAttribute(a.idAttr) ?? el.querySelector(`[${a.innerIdAttr}]`)?.getAttribute(a.innerIdAttr) ?? (turnKey ? `${turnKey}:${role}` : null);
    const content = a.content.map((s) => el.querySelector(s)).find(Boolean) ?? el;
    const turn = el.closest(a.turn) ?? el.parentElement ?? el;
    const done = a.turnDone.some((s) => turn.querySelector(s));
    const errEl = a.errorCss.map((s) => turn.querySelector(s)).find(Boolean);
    const text = ((el as HTMLElement).innerText ?? el.textContent ?? "").trim();
    return {
      role,
      id,
      text,
      html: role === "assistant" ? normaliseHtml(content) : "",
      done,
      errorText: errEl ? (errEl.textContent ?? "").trim().slice(0, 300) : role === "assistant" && errRe.test(text) && text.length < 400 ? text : null,
    };
  });

  const composer = any(a.composer);
  // Only text OUTSIDE conversation messages counts for page-level banners (a reply quoting
  // "you've reached our limit" must not look like a rate limit).
  let bodyText = document.body?.innerText ?? "";
  for (const m of messages) if (m.text) bodyText = bodyText.split(m.text).join(" ");
  bodyText = bodyText.slice(-20000);
  const loginVisible =
    !!any(a.login) ||
    (!composer && Array.from(document.querySelectorAll("button, a")).some((b) => new RegExp(a.loginText, "i").test((b.textContent ?? "").trim()) && visible(b)));
  const challengeVisible = !!a.challenge.map((s) => document.querySelector(s)).find(Boolean) || new RegExp(a.challengeTitle, "i").test(document.title);
  const rl = bodyText.match(new RegExp(a.rateLimitText, "i"));
  const pageErrors = a.errorCss
    .flatMap((s) => Array.from(document.querySelectorAll(s)))
    .filter((e) => visible(e) && !e.closest(a.message))
    .map((e) => (e.textContent ?? "").trim())
    .filter((t) => t && errRe.test(t))
    .slice(0, 5);
  return {
    url: location.href,
    title: document.title,
    messages,
    streaming: !!any(a.stop),
    composerPresent: !!composer,
    composerText: composer ? ((composer as HTMLElement).innerText ?? (composer as HTMLTextAreaElement).value ?? "") : "",
    loginVisible,
    challengeVisible,
    rateLimited: rl ? rl[0] : null,
    pageErrors,
    modelLabel: (() => {
      const m = any(a.modelButton);
      // "Thinking effortHigh" -> "Thinking effort High" (label text nodes are adjacent without spaces)
      const parts = m ? Array.from(m.querySelectorAll("*")).filter((e) => e.children.length === 0).map((e) => (e.textContent ?? "").trim()).filter(Boolean) : [];
      return m ? (parts.length ? parts.join(" ") : (m.textContent ?? "").trim()) || null : null;
    })(),
  };
}

/** Parse a ChatGPT conversation URL. Custom GPT conversations live under /g/g-<id>-<slug>/c/<conversation>. */
export function parseConversationUrl(url: string): { conversationId: string; gptId: string | null; isProject: boolean; canonical: string } | null {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return null;
  }
  if (!["chatgpt.com", "chat.openai.com"].includes(u.hostname)) return null;
  // Right after the first message of a new chat, ChatGPT shows a TEMPORARY client-side id
  // (/c/local-chatgpt:<uuid>, observed live 2026-10-01) before the server assigns the real one.
  // Temporary ids are not conversations and are rejected.
  const raw = u.pathname.match(/\/c\/([^/?#]+)/)?.[1];
  if (!raw) return null;
  const id = decodeURIComponent(raw);
  if (id.includes(":") || /^local/i.test(id)) return null;
  const c = id.match(/^([0-9a-zA-Z-]{8,})$/);
  if (!c) return null;
  const g = u.pathname.match(/\/g\/(g-[A-Za-z0-9]+)/);
  const isProject = !!u.pathname.match(/\/g\/g-p-/);
  return { conversationId: c[1], gptId: g && !isProject ? g[1] : null, isProject, canonical: `${u.origin}${u.pathname}` };
}
