import { closeSync, existsSync, openSync, readFileSync, unlinkSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { hash, read, save } from "../adapters/claude/files.js";
export interface GuardConfig { sessionId: string; stateFile: string; threshold: number; allowLiteralKeyText: boolean; exactValues: string[] }
export function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.entries(value).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>JSON.stringify(k)+":"+canonical(v)).join(",")}}`;
  return JSON.stringify(value) ?? "null";
}
export function entryTexts(name: string, input: Record<string, unknown>): string[] {
  if (/(?:^|__)browser_(?:type|press_sequentially)$/.test(name)) return typeof input.text === "string" ? [input.text] : [];
  if (/(?:^|__)browser_fill_form$/.test(name) && Array.isArray(input.fields)) return input.fields.flatMap(f=>typeof f?.value==="string"?[f.value]:[]);
  return [];
}
export function textDenial(name: string, input: Record<string, unknown>, cfg: Pick<GuardConfig,"allowLiteralKeyText"|"exactValues">): string | null {
  for (const text of entryTexts(name, input)) {
    if (!cfg.allowLiteralKeyText && (/^(?:Enter|Tab|Escape|Backspace|Delete|F(?:[1-9]|1[0-2]))$/i.test(text.trim()) || /\b(?:Control|Ctrl|Shift|Alt|Meta)\s*\+\s*\S+/i.test(text)))
      return "Key-like text denied. Use browser_press_key to send a key/chord; do not type it into a textbox.";
    for (const exact of cfg.exactValues) {
      const escaped = exact.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
      for (const match of text.matchAll(new RegExp(escaped,"gi"))) if (match[0] !== exact)
        return `Exact value required: ${exact}. Preserve its spelling and case.`;
    }
  }
  return null;
}
export function guard(event: { session_id: string; tool_name: string; tool_input: Record<string, unknown> }, cfg: GuardConfig): string | null {
  if (event.session_id !== cfg.sessionId || !event.tool_name || !event.tool_input) return "Guard session/input mismatch; task cannot proceed.";
  const lockFile = cfg.stateFile + ".lock";
  let fd: number | undefined;
  try {
    fd = openSync(lockFile, "wx");
    const key = hash(canonical([event.tool_name,event.tool_input]));
    const before = existsSync(cfg.stateFile) ? read<{key:string;count:number}>(cfg.stateFile) : null;
    const count = before?.key === key ? before.count + 1 : 1;
    save(cfg.stateFile, { key, count });
    return textDenial(event.tool_name,event.tool_input,cfg) ?? (cfg.threshold > 0 && count >= cfg.threshold
      ? `Identical consecutive tool call ${count} denied (threshold ${cfg.threshold}). Inspect once with a different permitted call and report a blocker; do not repeat a possibly effective mutation.` : null);
  } catch { return "Guard state unavailable/corrupt/locked; preserve state and stop instead of bypassing the hook."; }
  finally { if (fd !== undefined) { closeSync(fd); unlinkSync(lockFile); } }
}
export function decision(reason: string) { return { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: reason } }; }
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const cfg = read<GuardConfig>(process.argv[process.argv.indexOf("--config")+1]);
    let input=""; for await (const chunk of process.stdin) { input += chunk; if(input.length>16_000_000)throw Error("input too large"); }
    const reason = guard(JSON.parse(input),cfg); if(reason)process.stdout.write(JSON.stringify(decision(reason)));
  } catch { process.stdout.write(JSON.stringify(decision("Guard invocation/config/input failed; stop and preserve partial results."))); }
}
