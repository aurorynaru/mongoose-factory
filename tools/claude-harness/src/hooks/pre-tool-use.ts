import { appendFileSync, existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { hash, read } from "../adapters/claude/files.js";
import { acquireGuardLock, LockTimeout } from "./guard-lock.js";
export interface GuardConfig { sessionId: string; stateFile: string; denialFile?: string; threshold: number; allowLiteralKeyText: boolean; exactValues: string[] }
interface GuardState {key:string;count:number;sequence?:number}
function audit(cfg:GuardConfig,tool:string,event:Record<string,unknown>) {
  // Never persist tool inputs, text, paths, or secret values.
  if(cfg.denialFile)appendFileSync(cfg.denialFile,JSON.stringify({at:new Date().toISOString(),sessionId:cfg.sessionId,tool,pid:process.pid,...event})+"\n");
}
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
  let lock:ReturnType<typeof acquireGuardLock>|undefined,temp:string|undefined;
  try {
    lock=acquireGuardLock(cfg.stateFile,recovery=>audit(cfg,event.tool_name,{event:"stale_lock_recovered",...recovery}));
    const key = hash(canonical([event.tool_name,event.tool_input]));
    let before:GuardState|null=null;
    if(existsSync(cfg.stateFile)) {
      const raw=readFileSync(cfg.stateFile,"utf8");
      try {
        before=JSON.parse(raw.replace(/^\uFEFF/,""));
        if(!before||typeof before.key!=="string"||!/^[a-f\d]{64}$/.test(before.key)||!Number.isSafeInteger(before.count)||before.count<1||
          (before.sequence!==undefined&&(!Number.isSafeInteger(before.sequence)||before.sequence<1)))throw Error("schema");
      }catch{return "Guard state corrupt: invalid JSON or counter schema; preserve state and stop instead of resetting or bypassing the hook.";}
    }
    const count = before?.key === key ? before.count + 1 : 1;
    const sequence=(before?.sequence??0)+1;
    if(!Number.isSafeInteger(count)||!Number.isSafeInteger(sequence))return "Guard state corrupt: counter overflow; preserve state and stop.";
    temp=`${cfg.stateFile}.${lock.token}.tmp`;
    writeFileSync(temp,JSON.stringify({key,count,sequence},null,2));
    if(!lock.owns())throw new LockTimeout("Guard lock timeout: lock ownership expired before the atomic update; preserve state and stop.");
    renameSync(temp,cfg.stateFile);temp=undefined;
    audit(cfg,event.tool_name,{event:"call",sequence,count});
    return textDenial(event.tool_name,event.tool_input,cfg) ?? (cfg.threshold > 0 && count >= cfg.threshold
      ? `Identical consecutive tool call ${count} denied (threshold ${cfg.threshold}). Inspect once with a different permitted call and report a blocker; do not repeat a possibly effective mutation.` : null);
  } catch(error) { return error instanceof LockTimeout?error.message:"Guard state unavailable: atomic update/audit I/O failed; preserve state and stop instead of bypassing the hook."; }
  finally { try{if(temp&&existsSync(temp))unlinkSync(temp);}finally{if(lock)lock.release();} }
}
export function decision(reason: string) { return { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: reason } }; }
export function guardName(reason: string) {
  if(reason.startsWith("Key-like text"))return "key_text";
  if(reason.startsWith("Exact value required"))return "exact_values";
  if(reason.startsWith("Identical consecutive"))return "identical_calls";
  if(reason.startsWith("Guard lock timeout"))return "lock_timeout";
  if(reason.startsWith("Guard state corrupt"))return "state_corrupt";
  return "guard_state";
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const cfg = read<GuardConfig>(process.argv[process.argv.indexOf("--config")+1]);
    let input=""; for await (const chunk of process.stdin) { input += chunk; if(input.length>16_000_000)throw Error("input too large"); }
    const event=JSON.parse(input),reason = guard(event,cfg);
    if(reason) {
      // Audit only guard identity/time/tool; never persist text or secret values.
      audit(cfg,event.tool_name,{event:"denial",guard:guardName(reason)});
      process.stdout.write(JSON.stringify(decision(reason)));
    }
  } catch { process.stdout.write(JSON.stringify(decision("Guard invocation/config/input failed; stop and preserve partial results."))); }
}
