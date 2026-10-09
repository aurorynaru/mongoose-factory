import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import type { Page } from "playwright";
import { BrowserSession } from "./adapters/chatgpt/browser.js";
import { parseConversationUrl } from "./adapters/chatgpt/selectors.js";
import type { ChatRole } from "./adapters/types.js";
import { chatAdapter, type App } from "./app.js";

interface Candidate {
  page: Page;
  url: string;
  title: string;
  parsed: NonNullable<ReturnType<typeof parseConversationUrl>>;
}

async function candidates(session: BrowserSession): Promise<Candidate[]> {
  const out: Candidate[] = [];
  for (const page of session.pages()) {
    const parsed = parseConversationUrl(page.url());
    if (parsed) out.push({ page, url: page.url(), title: await page.title().catch(() => ""), parsed });
  }
  return out;
}

function validatePair(coord: Candidate["parsed"], spec: Candidate["parsed"]): string[] {
  const p: string[] = [];
  if (coord.conversationId === spec.conversationId) p.push("Coordinator and specialist must be different conversations.");
  if (coord.gptId && coord.gptId === spec.gptId) p.push("The coordinator conversation is under the same custom GPT as the specialist; the coordinator should be your general ChatGPT conversation.");
  return p;
}

/**
 * Identify the two conversations. The harness never types credentials: you sign in manually in the
 * harness browser. Roles are stored by conversation identity (URL ids), not by tab order.
 */
export async function setup(app: App, opts: { coordinatorUrl?: string; specialistUrl?: string; allowPlainSpecialist?: boolean }): Promise<boolean> {
  const session = await BrowserSession.open(app.config.browser);
  const rl = createInterface({ input: stdin, output: stdout });
  try {
    let coord: Candidate["parsed"] | null = null;
    let spec: Candidate["parsed"] | null = null;
    let coordTitle: string | null = null;
    let specTitle: string | null = null;

    if (opts.coordinatorUrl && opts.specialistUrl) {
      coord = parseConversationUrl(opts.coordinatorUrl);
      spec = parseConversationUrl(opts.specialistUrl);
      if (!coord || !spec) throw new Error("Both URLs must be ChatGPT conversation URLs (https://chatgpt.com/.../c/<id>).");
    } else {
      if (!session.pages().length) await session.context.newPage();
      const first = session.pages()[0];
      if (!parseConversationUrl(first.url())) await first.goto(app.config.browser.baseUrl, { waitUntil: "domcontentloaded" }).catch(() => undefined);
      console.log(`
Harness browser is open (profile: ${app.config.browser.mode === "cdp" ? app.config.browser.cdpUrl : app.config.browser.userDataDir}).

 1. If ChatGPT asks you to log in, sign in MANUALLY in that window. The harness never handles credentials.
 2. Open your COORDINATOR conversation (ChatGPT Tab 1) in one tab.
 3. Open Infor CloudSuite Assistant for EXTERNAL SECOND OPINIONS (ChatGPT Tab 2) in another tab.
    Both must be existing conversations (URL contains /c/...). Send any first message manually if needed.
`);
      await rl.question("Press Enter when both conversations are open... ");
      let list = await candidates(session);
      while (list.length < 2) {
        console.log(`Found ${list.length} conversation tab(s). Open both conversations, then press Enter.`);
        await rl.question("");
        list = await candidates(session);
      }
      list.forEach((c, i) => console.log(`  [${i + 1}] ${c.title || "(untitled)"}\n      ${c.url}${c.parsed.gptId ? `   (custom GPT ${c.parsed.gptId})` : c.parsed.isProject ? "   (project)" : ""}`));
      const pick = async (label: string) => {
        while (true) {
          const n = Number((await rl.question(`Number of the ${label} tab: `)).trim());
          if (n >= 1 && n <= list.length) return list[n - 1];
          console.log("Invalid number.");
        }
      };
      const c = await pick("COORDINATOR (Tab 1)");
      const s = await pick("EXTERNAL SECOND OPINION / Infor CloudSuite Assistant (Tab 2)");
      coord = c.parsed;
      spec = s.parsed;
      coordTitle = c.title;
      specTitle = s.title;
    }

    const problems = validatePair(coord!, spec!);
    if (problems.length) {
      problems.forEach((p) => console.log(`FAIL  ${p}`));
      return false;
    }
    if (!spec!.gptId) {
      console.log(`
WARN  The specialist tab is a plain conversation URL (${spec!.canonical}), not the usual
      custom-GPT form chatgpt.com/g/g-<id>-<name>/c/<id>. Usually this means the wrong tab was
      picked: open your Mongoose GPT (sidebar or Explore GPTs), start/continue a chat with IT,
      and pick that tab. Only continue if you are sure this conversation is with your Mongoose GPT.`);
      if (opts.coordinatorUrl && opts.specialistUrl && !opts.allowPlainSpecialist) {
        console.log("FAIL  Re-run with --allow-plain-specialist if this is really the Mongoose GPT conversation.");
        return false;
      }
      if (!opts.allowPlainSpecialist) {
        const ans = (await rl.question('Type "yes" to use it anyway: ')).trim().toLowerCase();
        if (ans !== "yes") return false;
      }
    }
    // Store, then validate each role through the same adapter the controller uses.
    app.store.setRole("coordinator", { url: coord!.canonical, conversationId: coord!.conversationId, gptId: null, title: coordTitle });
    app.store.setRole("specialist", { url: spec!.canonical, conversationId: spec!.conversationId, gptId: spec!.gptId, title: specTitle });
    const chat = chatAdapter(app, session, () => null);
    let ok = true;
    for (const role of ["coordinator", "specialist"] as ChatRole[]) {
      const r = await chat.checkReady(role);
      console.log(`${r.ok ? "OK  " : "FAIL"}  ${role}: ${r.ok ? r.url : `${r.problem} — ${r.detail ?? ""}`}`);
      ok &&= r.ok;
    }
    if (ok) {
      console.log(`
Roles saved. Nothing was sent to either conversation.
Optional: paste the coordinator protocol into Tab 1 yourself first (harness protocol show coordinator);
the harness also sends it in the kickoff message of every run.
Tab 2 replies go only to the primary Claude Opus specialist; they are unverified.
Next: harness doctor, prepare owned Chrome/MCP, then harness start <EXP-ID> --confirm-preconditions.`);
    }
    return ok;
  } finally {
    rl.close();
    await session.close().catch(() => undefined);
  }
}
