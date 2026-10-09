import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { summarizeRecord } from "./brief.js";
import { listExperiments } from "./proposal.js";
import { header } from "./protocol/prompts.js";

/**
 * Long-term memory for coordinator chats comes from DISK, not from chat history:
 *  - the experiment records (status + Result section) and recipe statuses, read on every kickoff;
 *  - an operator-reviewed coordinator context file (decisions, lessons, rules), created once from the
 *    old long chat with `harness context save`, corrected by the operator, then `harness context approve`.
 */

const MARKER = /^<!-- harness-context reviewed: (true|false) -->\r?\n?/;

export function experimentsDigest(factoryRoot: string, maxChars: number, focus?: string): string {
  const exps = listExperiments(factoryRoot);
  if (!exps.length) return "(no experiment records yet)";
  // Most recent first; the focus experiment (and what it replays) always included in full.
  const ordered = [...exps].reverse();
  const parts: string[] = [];
  let used = 0;
  for (const e of ordered) {
    let result = "";
    try {
      result = (summarizeRecord(factoryRoot, e.file).result ?? "").replace(/\n{3,}/g, "\n\n");
    } catch {
      /* unreadable record: listed without result */
    }
    const isFocus = !!focus && (e.id === focus || focus.startsWith(`${e.id}-R`));
    const cap = isFocus ? 3500 : 1200;
    const excerpt = result.length > cap ? `${result.slice(0, cap)} […]` : result;
    const block = `### ${e.id} — ${e.title.replace(/^EXP-[\dR-]+\s*[—-]\s*/, "")}\nStatus: ${e.status}\nRecord: ${e.file}${excerpt ? `\nResult (from the record):\n${excerpt}` : ""}`;
    if (used + block.length > maxChars && !isFocus) {
      parts.push(`### ${e.id} — status: ${e.status} (details omitted for length; see ${e.file})`);
      continue;
    }
    parts.push(block);
    used += block.length;
  }
  return parts.join("\n\n");
}

export function recipesDigest(factoryRoot: string): string {
  const root = join(factoryRoot, "recipes");
  if (!existsSync(root)) return "(no recipes)";
  const lines: string[] = [];
  for (const d of readdirSync(root, { withFileTypes: true }).filter((x) => x.isDirectory())) {
    for (const f of readdirSync(join(root, d.name)).filter((x) => x.endsWith(".md"))) {
      const text = readFileSync(join(root, d.name, f), "utf8");
      const status = (text.match(/^Status:\s*(.+)$/m)?.[1] ?? "unknown").replace(/\*\*/g, "").replace(/\s*\(.*$/, "").trim();
      lines.push(`- recipes/${d.name}/${f} — ${status}`);
    }
  }
  return lines.length ? lines.join("\n") : "(no recipes)";
}

export interface CoordinatorContext {
  path: string;
  exists: boolean;
  reviewed: boolean;
  text: string;
}

export function loadCoordinatorContext(path: string): CoordinatorContext {
  if (!existsSync(path)) return { path, exists: false, reviewed: false, text: "" };
  const raw = readFileSync(path, "utf8");
  const m = raw.match(MARKER);
  return { path, exists: true, reviewed: m?.[1] === "true", text: raw.replace(MARKER, "").trim() };
}

export function writeCoordinatorContext(path: string, body: string, reviewed: boolean): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `<!-- harness-context reviewed: ${reviewed} -->\n${body.trim()}\n`);
}

export function approveCoordinatorContext(path: string): void {
  const c = loadCoordinatorContext(path);
  if (!c.exists) throw new Error(`No context file at ${path}. Create it with: harness context save`);
  writeCoordinatorContext(path, c.text, true);
}

/** Block included in kickoffs / proposal requests. Unreviewed context is never sent. */
export function contextBlock(factoryRoot: string, contextPath: string, maxDigest: number, maxContext: number, focus?: string): string {
  const ctx = loadCoordinatorContext(contextPath);
  const out: string[] = [];
  if (ctx.reviewed && ctx.text) {
    const t = ctx.text.length > maxContext ? `${ctx.text.slice(0, maxContext)} […]` : ctx.text;
    out.push("PROJECT CONTEXT (written by an earlier coordinator chat, reviewed by the operator):", t, "");
  }
  out.push(
    "EXPERIMENT RECORDS (read from experiments/*.md on disk — these are authoritative; prefer them over any memory):",
    experimentsDigest(factoryRoot, maxDigest, focus),
    "",
    "RECIPES (status from recipes/**/*.md):",
    recipesDigest(factoryRoot),
  );
  return out.join("\n");
}

export function contextRequestText(nonce: string): string {
  return [
    header({ nonce, runId: "none", experimentId: "none", cycleId: 1, kind: "CONTEXT_HANDOFF" }),
    "HARNESS CONTEXT HANDOFF. Future coordination will continue in FRESH ChatGPT conversations that cannot see",
    "this chat. Write the handoff those fresh chats should read first. The experiment records on disk (statuses and",
    "results) will be supplied to them separately, so focus on what is NOT obvious from the records:",
    "",
    "1. Project and workflow: what the factory is, roles (you, Claude worker, Claude Opus Mongoose specialist; optional unverified Tab 2 second opinion), how you work.",
    "2. Environment facts that matter (versions, scope, quirks) — only ones you are confident about.",
    "3. Decisions and rules established so far (conventions, what to avoid, how evidence must be produced).",
    "4. Lessons learned and pitfalls per experiment (cite experiment IDs).",
    "5. Negative findings / blocked topics and why.",
    "6. Open questions and sensible next directions.",
    "",
    "Rules: plain Markdown with those six headings; at most ~1500 words; no JSON block; state only what you are",
    "confident about and mark anything uncertain with (unverified). Do not invent details to fill gaps.",
  ].join("\n");
}

export function contextPath(harnessDir: string, rel: string): string {
  return join(harnessDir, rel);
}
