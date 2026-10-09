import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { save } from "../adapters/claude/files.js";
import { browserAction } from "../hooks/pre-tool-use.js";

export const AUDIT_LABEL="controller-generated audit (not worker prose)";
export interface AuditCall {order:number;id:string;tool:string;argument:string;key?:string;kind:"action"|"read"|"other";result:"ok"|"error"|"unknown";error?:string}
export interface SpelledString {text:string;orders:number[];allOk:boolean;exactMatch:boolean|null;matchingValues:string[]}
export interface ActionAudit {
  task:string;status:string;calls:AuditCall[];keySequence:Array<{order:number;key:string;result:AuditCall["result"]}>;
  spelledStrings:SpelledString[];exactValues:string[];actions:number;reads:number;turns:number;
  toolUsage:Record<string,number>;prohibitedToolHits:number;errors:string[];issues:string[];
}
const flagged=/^(?:browser_)?(?:type|fill_form|press_sequentially|evaluate|run_code(?:_unsafe)?)$/;
function briefText(value:unknown,max=180):string {
  const text=typeof value==="string"?value:JSON.stringify(value)??"";
  return text.length<=max?text:`${text.slice(0,max)}… (${text.length} chars)`;
}
function resultError(block:Record<string,any>):string|null {
  const content=block.content;
  if(block.is_error)return briefText(content,500);
  if(content&&typeof content==="object"&&content.isError===true)return briefText(content,500);
  // Some MCP failures are carried inside the tool result rather than is_error.
  for(const text of typeof content==="string"?[content]:Array.isArray(content)?content.map(b=>b.text).filter(t=>typeof t==="string"):[]) {
    try {const value=JSON.parse(text);if(value.isError===true)return briefText(value,500);}catch{/* ordinary rendered text */}
    if(/^### (?:Error|Result)\s*\n(?:Error:|TimeoutError:)|^(?:Error|TimeoutError):/.test(text))return briefText(text,500);
  }
  return null;
}
/** Deterministic parse of saved native events. Never infer success from missing results or worker prose. */
export function actionAudit(transcript:string,task:string,status:string,exactValues:string[]=[]):ActionAudit {
  const calls:AuditCall[]=[],byId=new Map<string,AuditCall>(),turns=new Set<string>(),issues:string[]=[],errors:string[]=[],toolUsage:Record<string,number>={};
  let terminal=false;
  for(const [index,line] of transcript.split(/\r?\n/).entries()) {
    if(!line.trim())continue;
    let event:Record<string,any>;
    try{event=JSON.parse(line);}catch{issues.push(`Malformed/truncated event at line ${index+1}`);continue;}
    if(!event||typeof event!=="object"||Array.isArray(event)){issues.push(`Invalid event at line ${index+1}`);continue;}
    if(event.type==="assistant") {
      const id=event.message?.id??event.uuid;if(typeof id==="string")turns.add(id);
      for(const block of event.message?.content??[])if(block.type==="tool_use") {
        if(typeof block.id!=="string"||typeof block.name!=="string"){issues.push(`Invalid tool call at line ${index+1}`);continue;}
        if(byId.has(block.id))continue;
        const input=block.input??{},tool=block.name,short=tool.split("__").at(-1)!,browser=short.startsWith("browser_");
        const args=["key","element","filename","file_path","ref","url","action"].filter(k=>input[k]!==undefined).map(k=>`${k}=${briefText(input[k])}`);
        const call:AuditCall={order:calls.length+1,id:block.id,tool,argument:args.join("; ")||"(no key/element/filename argument)",...(typeof input.key==="string"?{key:input.key}:{}),kind:browser?(browserAction(tool,input)?"action":"read"):"other",result:"unknown"};
        calls.push(call);byId.set(call.id,call);
        if(flagged.test(short))toolUsage[short]=(toolUsage[short]??0)+1;
      }
    }
    if(event.type==="user")for(const block of event.message?.content??[])if(block.type==="tool_result") {
      const call=byId.get(block.tool_use_id);
      if(!call){issues.push(`Result has no recorded call: ${block.tool_use_id}`);continue;}
      const error=resultError(block);call.result=error!==null?"error":"ok";
      if(error!==null){call.error=error;errors.push(`#${call.order} ${call.tool}: ${error}`);}
    }
    if(event.type==="result") {
      terminal=true;
      if(event.is_error||event.subtype!=="success")errors.push(`Terminal ${event.subtype??"error"}: ${briefText(event.errors??event.result,500)}`);
    }
  }
  if(!transcript.trim())issues.push("No saved event transcript available");
  if(!terminal)issues.push("No terminal event; audit may be partial");
  for(const call of calls)if(call.result==="unknown")issues.push(`#${call.order} result missing; success unproven`);
  const spelledStrings:SpelledString[]=[],keySequence:ActionAudit["keySequence"]=[];
  let current:SpelledString|null=null;
  const flush=()=>{if(current){current.matchingValues=exactValues.filter(v=>v===current!.text);const sameIgnoringCase=exactValues.some(v=>v.toLowerCase()===current!.text.toLowerCase());current.exactMatch=current.matchingValues.length?true:sameIgnoringCase?false:null;spelledStrings.push(current);current=null;}};
  for(const call of calls) {
    if(/(?:^|__)browser_press_key$/.test(call.tool)) {
      const key=call.key??"(missing key)";keySequence.push({order:call.order,key,result:call.result});
      const printable=[...key].length===1?key:key==="Space"?" ":null;
      if(printable!==null) {
        current??={text:"",orders:[],allOk:true,exactMatch:null,matchingValues:[]};
        current.text+=printable;current.orders.push(call.order);current.allOk&&=call.result==="ok";
      }else flush();
    }else if(call.kind==="action")flush();
  }
  flush();
  return {task,status,calls,keySequence,spelledStrings,exactValues,actions:calls.filter(c=>c.kind==="action").length,reads:calls.filter(c=>c.kind==="read").length,turns:turns.size,toolUsage,prohibitedToolHits:Object.values(toolUsage).reduce((n,v)=>n+v,0),errors,issues};
}
function shortString(text:string,max=100) {
  if(text.length<=max)return JSON.stringify(text);
  return `${JSON.stringify(text.slice(0,max/2))}…${JSON.stringify(text.slice(-max/2))} (${[...text].length} chars, sha256=${createHash("sha256").update(text).digest("hex")})`;
}
function caseMismatch(s:SpelledString,a:ActionAudit) {return !a.exactValues.includes(s.text)&&a.exactValues.some(v=>v.toLowerCase()===s.text.toLowerCase());}
export function auditHeadline(a:ActionAudit):string {
  const strings=a.spelledStrings.slice(0,3).map(s=>`${shortString(s.text)}${a.exactValues.includes(s.text)?" [exact match]":caseMismatch(s,a)?" [EXACT MISMATCH]":" [not an exact_value (informational)]"}${s.allOk?"":" [not all keys succeeded]"}`).join(" / ")||"(none)";
  return `${a.actions} actions, ${a.reads} reads; prohibited-tool hits=${a.prohibitedToolHits}; errors=${a.errors.length}; turns=${a.turns}${a.issues.length?`; audit issues=${a.issues.length}`:""}; key string ${strings}${a.spelledStrings.length>3?` (${a.spelledStrings.length-3} more printable runs)`:""}${a.exactValues.length?`; exact mismatches=${a.spelledStrings.filter(s=>caseMismatch(s,a)).length}`:""}`;
}
/** Budget the audit independently so worker prose cannot push it out of the chat message. */
export function compactAudit(a:ActionAudit,max=6000):string {
  const lines=[AUDIT_LABEL,`${a.task}: ${auditHeadline(a)}`,`Flagged tool usage: ${JSON.stringify(a.toolUsage)} (flags require interpretation against this brief; not automatic acceptance failures).`];
  const keys=a.keySequence.length<=60?a.keySequence.map(k=>`${k.order}:${JSON.stringify(k.key)}=${k.result}`).join(" "):`${a.keySequence.length} key calls; first ${a.keySequence.slice(0,3).map(k=>JSON.stringify(k.key)).join(", ")}; last ${a.keySequence.slice(-3).map(k=>JSON.stringify(k.key)).join(", ")}; printable runs summarised above`;
  lines.push(`Native key sequence: ${keys||"(none)"}`);
  if(a.exactValues.length)lines.push(`Exact values: ${a.exactValues.slice(0,3).map(v=>shortString(v)).join(", ")}; successful matching printable runs=${a.spelledStrings.filter(s=>s.exactMatch&&s.allOk).length}`);
  lines.push(`Errors: ${a.errors.slice(0,3).join(" | ")||"(none)"}${a.errors.length>3?` (${a.errors.length-3} more)`:""}`);
  if(a.issues.length)lines.push(`Audit limitations: ${a.issues.slice(0,3).join(" | ")}`);
  const other=a.calls.filter(c=>!/(?:^|__)browser_press_key$/.test(c.tool));
  lines.push(`Other calls in invocation order: ${other.slice(0,20).map(c=>`#${c.order} ${c.tool} ${c.argument} -> ${c.result}`).join(" | ")||"(none)"}${other.length>20?` (${other.length-20} more calls summarised; full audit saved)`:""}`);
  const text=lines.join("\n");
  return text.length<=max?text:`${text.slice(0,Math.max(0,max-65))}\n[Audit detail summarised to fit; full audit saved on disk.]`.slice(0,max);
}
export function persistAudit(factoryRoot:string,evidenceDir:string,runDir:string,audit:ActionAudit) {
  if(!/^[\w-]+$/.test(audit.task))throw Error("Invalid audit task name");
  const markdown=join(factoryRoot,evidenceDir,`harness-audit-${audit.task}.md`),json=join(runDir,"worker",`harness-audit-${audit.task}.json`);
  const rows=audit.calls.map(c=>`| ${c.order} | ${c.tool} | ${c.argument.replaceAll("|","\\|").replaceAll("\n"," ")} | ${c.result}${c.error?`: ${c.error.replaceAll("|","\\|").replaceAll("\n"," ")}`:""} |`);
  const text=[`# ${AUDIT_LABEL}`,auditHeadline(audit),"This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.",`Exact values: ${JSON.stringify(audit.exactValues)}`,`Key sequence: ${JSON.stringify(audit.keySequence)}`,`Spelled strings: ${JSON.stringify(audit.spelledStrings)}`,`Flagged tool usage: ${JSON.stringify(audit.toolUsage)}`,`Errors: ${JSON.stringify(audit.errors)}`,`Audit limitations: ${JSON.stringify(audit.issues)}`,["| Order | Tool | Key argument | Result |","| --- | --- | --- | --- |",...rows].join("\n")].join("\n\n");
  mkdirSync(dirname(markdown),{recursive:true});writeFileSync(markdown,text);save(json,audit);
  return {markdown,json};
}
