import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/** Token usage of one Claude task, reconstructed from its stream-json event log. */
export interface TaskUsage {
  turns: number;
  input: number;
  cacheCreation: number;
  cacheRead: number;
  output: number;
  /** Context (input + cache creation + cache read) of the first and last assistant turn; null without usage data. */
  firstContextTokens: number | null;
  contextTokens: number | null;
}

export interface ToolTotals { calls: number; chars: number; images: number }

interface ParsedTask { usage: TaskUsage; contexts: number[]; tools: Record<string, ToolTotals> }

type Usage = { input_tokens?: number; cache_creation_input_tokens?: number; cache_read_input_tokens?: number; output_tokens?: number };
const n = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : 0);
const contextOf = (u: Usage) => n(u.input_tokens) + n(u.cache_creation_input_tokens) + n(u.cache_read_input_tokens);

function resultSize(content: unknown): { chars: number; images: number } {
  if (typeof content === "string") return { chars: content.length, images: 0 };
  let chars = 0, images = 0;
  for (const part of Array.isArray(content) ? content : []) {
    if (part?.type === "text" && typeof part.text === "string") chars += part.text.length;
    else if (part?.type === "image") images++;
  }
  return { chars, images };
}

function parseTask(transcript: string): ParsedTask {
  // Stream-json repeats an assistant message once per content block; the last copy carries its final usage.
  const perMessage = new Map<string, Usage>();
  const names = new Map<string, string>(), tools: Record<string, ToolTotals> = {};
  let result: Usage | null = null;
  for (const line of transcript.split("\n")) {
    if (!line.startsWith("{")) continue;
    let e: Record<string, any>;
    try { e = JSON.parse(line); } catch { continue; }
    if (e.type === "assistant" && e.message) {
      for (const b of e.message.content ?? []) if (b?.type === "tool_use") {
        names.set(b.id, b.name);
        (tools[b.name] ??= { calls: 0, chars: 0, images: 0 }).calls++;
      }
      const id = e.message.id ?? e.uuid;
      if (typeof id === "string" && e.message.usage) perMessage.set(id, e.message.usage);
    } else if (e.type === "user" && Array.isArray(e.message?.content)) {
      for (const b of e.message.content) if (b?.type === "tool_result") {
        const t = (tools[names.get(b.tool_use_id) ?? "?"] ??= { calls: 0, chars: 0, images: 0 }), s = resultSize(b.content);
        t.chars += s.chars; t.images += s.images;
      }
    } else if (e.type === "result" && e.usage) result = e.usage;
  }
  const rows = [...perMessage.values()], contexts = rows.map(contextOf);
  const sum = (k: keyof Usage) => rows.reduce((total, u) => total + n(u[k]), 0);
  // The terminal result's totals are authoritative; per-message sums cover interrupted tasks.
  const totals = result ?? { input_tokens: sum("input_tokens"), cache_creation_input_tokens: sum("cache_creation_input_tokens"), cache_read_input_tokens: sum("cache_read_input_tokens"), output_tokens: sum("output_tokens") };
  return {
    usage: {
      turns: rows.length,
      input: n(totals.input_tokens),
      cacheCreation: n(totals.cache_creation_input_tokens),
      cacheRead: n(totals.cache_read_input_tokens),
      output: n(totals.output_tokens),
      firstContextTokens: contexts.length ? contexts[0] : null,
      contextTokens: contexts.length ? contexts[contexts.length - 1] : null,
    },
    contexts,
    tools,
  };
}

export function taskUsage(transcript: string): TaskUsage {
  return parseTask(transcript).usage;
}

export interface UsageRow { role: string; session: string; task: string; mtime: number; usage: TaskUsage; carriedContext: number }
export interface UsageReport { rows: UsageRow[]; tools: Record<string, ToolTotals> }

/** Task event logs of the worker and the Claude roles under dataDir, oldest first. Reads only. */
export function collectUsage(dataDir: string, sinceMs = 0): UsageReport {
  const roots: Array<[string, string]> = [["worker", join(dataDir, "workers")]];
  const rolesDir = join(dataDir, "claude-roles");
  if (existsSync(rolesDir)) for (const role of readdirSync(rolesDir)) roots.push([role, join(rolesDir, role, "workers")]);
  const files: Array<{ role: string; session: string; task: string; path: string; mtime: number }> = [];
  for (const [role, root] of roots) {
    if (!existsSync(root)) continue;
    for (const session of readdirSync(root)) {
      const tasks = join(root, session, "tasks");
      if (!existsSync(tasks)) continue;
      for (const f of readdirSync(tasks)) {
        if (!f.endsWith(".events.jsonl")) continue;
        const path = join(tasks, f), mtime = statSync(path).mtimeMs;
        if (mtime >= sinceMs) files.push({ role, session, task: f.replace(/\.events\.jsonl$/, ""), path, mtime });
      }
    }
  }
  files.sort((a, b) => a.mtime - b.mtime);
  const rows: UsageRow[] = [], tools: Record<string, ToolTotals> = {}, base = new Map<string, number>();
  for (const f of files) {
    const p = parseTask(readFileSync(f.path, "utf8")), key = `${f.role}/${f.session}`;
    // Context inherited from earlier tasks of the same session, re-read on every turn of this one.
    const first = p.usage.firstContextTokens ?? 0;
    if (!base.has(key)) base.set(key, first);
    const carry = Math.max(0, first - base.get(key)!);
    rows.push({ role: f.role, session: f.session, task: f.task, mtime: f.mtime, usage: p.usage, carriedContext: p.contexts.reduce((s, c) => s + Math.min(carry, c), 0) });
    for (const [name, t] of Object.entries(p.tools)) {
      const g = (tools[name] ??= { calls: 0, chars: 0, images: 0 });
      g.calls += t.calls; g.chars += t.chars; g.images += t.images;
    }
  }
  return { rows, tools };
}

export function renderUsage(r: UsageReport, opts: { tasks?: boolean } = {}): string {
  const out: string[] = [];
  const pad = (v: unknown, w: number) => String(v).padStart(w);
  for (const role of [...new Set(r.rows.map((x) => x.role))]) {
    const rows = r.rows.filter((x) => x.role === role);
    const t = rows.reduce((a, x) => ({ input: a.input + x.usage.input, create: a.create + x.usage.cacheCreation, read: a.read + x.usage.cacheRead, output: a.output + x.usage.output, turns: a.turns + x.usage.turns, carried: a.carried + x.carriedContext }), { input: 0, create: 0, read: 0, output: 0, turns: 0, carried: 0 });
    const peak = Math.max(0, ...rows.map((x) => x.usage.contextTokens ?? 0));
    out.push(`${role}: ${rows.length} task(s), ${new Set(rows.map((x) => x.session)).size} session(s), ${t.turns} assistant turns`);
    out.push(`  input ${t.input}  cache_creation ${t.create}  cache_read ${t.read}  output ${t.output}  peak context ${peak}`);
    if (t.read) out.push(`  context carried over from earlier tasks of the same session (upper bound of what fresh sessions avoid): ${t.carried} cache-read tokens (${Math.round((100 * t.carried) / t.read)}% of cache reads)`);
    if (opts.tasks) {
      out.push(`  ${"session".padEnd(8)} ${"task".padEnd(8)} ${pad("turns", 5)} ${pad("c_create", 9)} ${pad("c_read", 11)} ${pad("output", 7)} ${pad("ctx_first", 9)} ${pad("ctx_last", 9)}`);
      for (const x of rows) out.push(`  ${x.session.slice(0, 8).padEnd(8)} ${x.task.slice(0, 8).padEnd(8)} ${pad(x.usage.turns, 5)} ${pad(x.usage.cacheCreation, 9)} ${pad(x.usage.cacheRead, 11)} ${pad(x.usage.output, 7)} ${pad(x.usage.firstContextTokens ?? "-", 9)} ${pad(x.usage.contextTokens ?? "-", 9)}`);
    }
    out.push("");
  }
  const tools = Object.entries(r.tools).sort((a, b) => b[1].chars - a[1].chars);
  if (tools.length) {
    const total = tools.reduce((s, [, t]) => s + t.chars, 0) || 1;
    out.push(`Tool results (characters returned into context, all roles):`);
    for (const [name, t] of tools.slice(0, 15)) out.push(`  ${name.padEnd(48)} ${pad(t.calls, 6)} calls ${pad(t.chars, 11)} chars ${pad(Math.round((100 * t.chars) / total), 3)}%${t.images ? `  ${t.images} image(s)` : ""}`);
  }
  if (!r.rows.length) out.push("No task event logs found.");
  return out.join("\n");
}
