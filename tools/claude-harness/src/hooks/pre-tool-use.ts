import { appendFileSync, existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { hash, read } from "../adapters/claude/files.js";
import { acquireGuardLock, LockTimeout } from "./guard-lock.js";
export interface GuardConfig { sessionId: string; stateFile: string; denialFile?: string; threshold: number; allowLiteralKeyText: boolean; exactValues: string[]; allowedWebDomains?:string[] }
interface GuardState {key:string;count:number;sequence?:number;action?:{id:string;tool:string}}
export interface HookEvent {session_id:string;tool_name:string;tool_input:Record<string,unknown>;tool_use_id?:string;hook_event_name?:string}
/** Tabs listing is a read; tab creation/selection/closure and unknown browser tools are actions. */
export function browserAction(name:string,input:Record<string,unknown>):boolean {
  const tool=name.match(/(?:^|__)(browser_\w+)$/)?.[1];
  if(!tool)return false;
  if(tool==="browser_tabs")return input.action!=="list";
  return !["browser_snapshot","browser_find","browser_take_screenshot","browser_console_messages","browser_network_requests","browser_wait_for"].includes(tool);
}
function state(cfg:GuardConfig):GuardState|null {
  if(!existsSync(cfg.stateFile))return null;
  const raw=readFileSync(cfg.stateFile,"utf8");
  try {
    const value=JSON.parse(raw.replace(/^\uFEFF/,""));
    if(!value||typeof value.key!=="string"||!/^[a-f\d]{64}$/.test(value.key)||!Number.isSafeInteger(value.count)||value.count<1||
      (value.sequence!==undefined&&(!Number.isSafeInteger(value.sequence)||value.sequence<1))||
      (value.action!==undefined&&(!value.action||typeof value.action.id!=="string"||!value.action.id||typeof value.action.tool!=="string"||!value.action.tool)))throw Error("schema");
    return value;
  }catch{throw Error("Guard state corrupt: invalid JSON or counter/action schema; preserve state and stop instead of resetting or bypassing the hook.");}
}
function update(cfg:GuardConfig,value:GuardState,lock:ReturnType<typeof acquireGuardLock>) {
  const temp=`${cfg.stateFile}.${lock.token}.tmp`;
  try {
    writeFileSync(temp,JSON.stringify(value,null,2));
    if(!lock.owns())throw new LockTimeout("Guard lock timeout: lock ownership expired before the atomic update; preserve state and stop.");
    renameSync(temp,cfg.stateFile);
  }finally{if(existsSync(temp))unlinkSync(temp);}
}
/** Match the exact native tool ID. Hook processes exit before the browser action finishes. */
export function finishAction(event:Pick<HookEvent,"session_id"|"tool_name"|"tool_use_id">,cfg:GuardConfig):void {
  if(event.session_id!==cfg.sessionId||!event.tool_use_id)throw Error("Guard completion session/input mismatch");
  const lock=acquireGuardLock(cfg.stateFile,recovery=>audit(cfg,event.tool_name,{event:"stale_lock_recovered",...recovery}));
  try {
    const before=state(cfg);
    if(before?.action?.id===event.tool_use_id&&before.action.tool===event.tool_name) {
      delete before.action;update(cfg,before,lock);audit(cfg,event.tool_name,{event:"action_completed"});
    }
  }finally{lock.release();}
}
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
export function guard(event:HookEvent, cfg: GuardConfig): string | null {
  if (event.session_id !== cfg.sessionId || !event.tool_name || !event.tool_input) return "Guard session/input mismatch; task cannot proceed.";
  let lock:ReturnType<typeof acquireGuardLock>|undefined;
  try {
    lock=acquireGuardLock(cfg.stateFile,recovery=>audit(cfg,event.tool_name,{event:"stale_lock_recovered",...recovery}));
    const key = hash(canonical([event.tool_name,event.tool_input]));
    const before=state(cfg),action=browserAction(event.tool_name,event.tool_input);
    const count = before?.key === key ? before.count + 1 : 1;
    const sequence=(before?.sequence??0)+1;
    if(!Number.isSafeInteger(count)||!Number.isSafeInteger(sequence))return "Guard state corrupt: counter overflow; preserve state and stop.";
    let webReason:string|null=null;
    if(event.tool_name==="WebFetch"&&cfg.allowedWebDomains) {
      try{const url=new URL(String(event.tool_input.url));if(!["https:","http:"].includes(url.protocol)||url.username||url.password||!cfg.allowedWebDomains.includes(url.hostname.toLowerCase().replace(/\.$/,"")))webReason="Specialist WebFetch domain denied: only the three configured Infor documentation domains are permitted.";}
      catch{webReason="Specialist WebFetch domain denied: invalid URL.";}
    }
    const reason=webReason??textDenial(event.tool_name,event.tool_input,cfg) ?? (action&&before?.action
      ? "Parallel browser action denied: another browser action from this session is still in flight. Wait for its result before sending the next action; do not repeat a possibly effective mutation."
      : action&&!event.tool_use_id ? "Guard action identity missing: browser action requires a native tool_use_id; preserve state and stop."
      : cfg.threshold>0&&count>=cfg.threshold ? `Identical consecutive tool call ${count} denied (threshold ${cfg.threshold}). Inspect once with a different permitted call and report a blocker; do not repeat a possibly effective mutation.` : null);
    update(cfg,{key,count,sequence,...(before?.action?{action:before.action}:action&&!reason?{action:{id:event.tool_use_id!,tool:event.tool_name}}:{})},lock);
    audit(cfg,event.tool_name,{event:"call",sequence,count});
    return reason;
  } catch(error) { return error instanceof LockTimeout||error instanceof Error&&error.message.startsWith("Guard state corrupt")?error.message:"Guard state unavailable: atomic update/audit I/O failed; preserve state and stop instead of bypassing the hook."; }
  finally { if(lock)lock.release(); }
}
export function decision(reason: string) { return { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: reason } }; }
export function guardName(reason: string) {
  if(reason.startsWith("Key-like text"))return "key_text";
  if(reason.startsWith("Exact value required"))return "exact_values";
  if(reason.startsWith("Identical consecutive"))return "identical_calls";
  if(reason.startsWith("Parallel browser action"))return "parallel_browser_actions";
  if(reason.startsWith("Specialist WebFetch domain"))return "web_domain";
  if(reason.startsWith("Guard lock timeout"))return "lock_timeout";
  if(reason.startsWith("Guard state corrupt"))return "state_corrupt";
  return "guard_state";
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  let completion=false;
  try {
    let input=""; for await (const chunk of process.stdin) { input += chunk; if(input.length>16_000_000)throw Error("input too large"); }
    const event=JSON.parse(input);
    completion=["PostToolUse","PostToolUseFailure"].includes(event.hook_event_name);
    const cfg = read<GuardConfig>(process.argv[process.argv.indexOf("--config")+1]);
    if(completion) {
      try{finishAction(event,cfg);}catch(error){audit(cfg,event.tool_name,{event:"denial",guard:guardName(error instanceof Error?error.message:"")});process.stderr.write("Guard completion failed; preserve the action reservation and stop.\n");process.exitCode=2;}
    }else {
      const reason = guard(event,cfg);
      if(reason) {
        // Audit only guard identity/time/tool; never persist text or secret values.
        audit(cfg,event.tool_name,{event:"denial",guard:guardName(reason)});
        process.stdout.write(JSON.stringify(decision(reason)));
      }
    }
  } catch {
    if(completion){process.stderr.write("Guard completion invocation/config/input failed; preserve the action reservation and stop.\n");process.exitCode=2;}
    else process.stdout.write(JSON.stringify(decision("Guard invocation/config/input failed; stop and preserve partial results.")));
  }
}
