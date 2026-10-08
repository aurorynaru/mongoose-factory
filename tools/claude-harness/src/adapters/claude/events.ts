import type { OcMessage } from "../opencode/client.js";
import { inspectionLoop, repeatedBrowserReads, repeatedShellCalls } from "../opencode/inspection-loop.js";
export type Event = Record<string, any>;
export class TaskEvents {
  text = ""; model: string | null = null; terminal: Event | null = null;
  usageLimit: string | null = null; permissionDenied = false; invalid = "";
  readonly turns = new Set<string>(); readonly pending = new Map<string, {name:string;input:Record<string,unknown>}>();
  readonly history: OcMessage[] = []; readonly ids: string[] = [];
  private buffer = "";
  constructor(readonly sessionId: string) {}
  feed(chunk: string) {
    this.buffer += chunk;
    if(this.buffer.length>32_000_000){this.invalid="Oversized JSON event";this.buffer="";return;}
    const lines=this.buffer.split("\n");this.buffer=lines.pop()!;
    for(const line of lines)if(line.trim())try{this.add(JSON.parse(line));}catch{this.invalid="Malformed stream JSON";}
  }
  finish() { if(this.buffer.trim())try{this.add(JSON.parse(this.buffer));}catch{this.invalid="Truncated stream JSON";}this.buffer=""; }
  add(e: Event) {
    if(e.session_id && e.session_id!==this.sessionId){this.invalid="Stream session mismatch";return;}
    if(e.type==="system"&&e.subtype==="init"&&typeof e.model==="string")this.model=e.model;
    if(e.type==="result"){if(this.terminal)this.invalid="Multiple terminal results";this.terminal=e;if(Array.isArray(e.permission_denials)&&e.permission_denials.length)this.permissionDenied=true;}
    const rate = e.type==="rate_limit_event" && ["rejected","denied"].includes(e.rate_limit_info?.status);
    const errorText=[e.type==="result"&&e.is_error?e.result:null,...(Array.isArray(e.errors)?e.errors:[]),e.error?.message,e.error?.type].filter(x=>typeof x==="string").join("\n");
    if(rate||/usage[_ -]?limit|rate[_ -]?limit|you(?:'ve| have) hit your limit|weekly limit|5.hour limit|too many requests/i.test(errorText))this.usageLimit=errorText||"Subscription usage limit rejected the request";
    if(e.type==="assistant"&&e.message){
      const id=e.message.id??e.uuid;if(typeof id!=="string"){this.invalid="Assistant turn has no identity";return;}
      const fresh=!this.turns.has(id);this.turns.add(id);if(fresh)this.ids.push(id);
      for(const b of e.message.content??[]){
        if(b.type==="text"&&typeof b.text==="string"&&fresh)this.text+=(this.text?"\n":"")+b.text;
        if(b.type==="tool_use")this.pending.set(b.id,{name:b.name,input:b.input??{}});
      }
    }
    if(e.type==="user"&&Array.isArray(e.message?.content))for(const b of e.message.content){
      if(b.type!=="tool_result")continue;const p=this.pending.get(b.tool_use_id);if(!p)continue;
      const body=typeof b.content==="string"?b.content:JSON.stringify(b.content);
      this.history.push({info:{id:b.tool_use_id,role:"assistant",sessionID:this.sessionId,time:{created:Date.now(),completed:Date.now()}},parts:[{id:b.tool_use_id,type:"tool",tool:p.name,state:{status:b.is_error?"error":"completed",input:p.input,output:body,...(b.is_error?{error:body}:{})}}]});
      this.pending.delete(b.tool_use_id);
      if(b.is_error&&/permission|denied|not allowed|rejected by.*hook/i.test(body))this.permissionDenied=true;
    }
  }
  loop(maxRefs:number,maxReads:number,maxShell:number): string | null {
    if(this.pending.size)return null;
    return inspectionLoop(this.history,maxRefs)??repeatedBrowserReads(this.history,maxReads)??repeatedShellCalls(this.history,maxShell);
  }
}
export function modelMatches(configured: string, resolved: string) {
  if(["haiku","sonnet","opus"].includes(configured))return new RegExp(`(?:^|[-_ ])${configured}(?:$|[-_ ])`,"i").test(resolved);
  return configured===resolved;
}
