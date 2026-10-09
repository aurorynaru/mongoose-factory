import { spawn, execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { HARNESS_DIR } from "../src/config.js";
import { browserAction, finishAction, guard, type GuardConfig, type HookEvent } from "../src/hooks/pre-tool-use.js";
import { TaskEvents } from "../src/adapters/claude/events.js";

function fixture() {
  const dir=mkdtempSync(join(tmpdir(),"action-guard-"));
  const cfg:GuardConfig={sessionId:randomUUID(),stateFile:join(dir,"state.json"),denialFile:join(dir,"audit.jsonl"),threshold:6,exactValues:[],allowLiteralKeyText:false};
  const file=join(dir,"config.json");writeFileSync(file,JSON.stringify(cfg));
  const event=(id=randomUUID(),tool="browser_click",input:Record<string,unknown>={ref:"e1"}):HookEvent=>({session_id:cfg.sessionId,tool_name:`mcp__playwright__${tool}`,tool_input:input,tool_use_id:id,hook_event_name:"PreToolUse"});
  return {cfg,file,event,read:()=>JSON.parse(readFileSync(cfg.stateFile,"utf8")),args:[join(HARNESS_DIR,"dist/hooks/pre-tool-use.js"),"--config",file]};
}
describe("session browser action serialization",()=>{
  it.each(["click","press_key","type","select_option","navigate","drag","file_upload","handle_dialog","fill_form","close","resize","run_code","new_tool"])("classifies browser_%s as an action",tool=>{
    expect(browserAction(`mcp__playwright__browser_${tool}`,{})).toBe(true);
  });
  it.each(["snapshot","find","take_screenshot","console_messages","network_requests","wait_for"])("allows browser_%s reads while an action is in flight",tool=>{
    const h=fixture(),a=h.event();expect(guard(a,h.cfg)).toBeNull();
    expect(guard(h.event(randomUUID(),`browser_${tool}`,{}),h.cfg)).toBeNull();
    expect(h.read().action.id).toBe(a.tool_use_id);
  });
  it("allows file reads and tabs listing but serializes tab changes and all action types",()=>{
    const h=fixture(),a=h.event();expect(guard(a,h.cfg)).toBeNull();
    for(const tool of ["Read","Grep","Glob"])expect(guard({...h.event(),tool_name:tool,tool_input:{}},h.cfg)).toBeNull();
    expect(guard(h.event(randomUUID(),"browser_tabs",{action:"list"}),h.cfg)).toBeNull();
    for(const action of ["new","close","select"])expect(guard(h.event(randomUUID(),"browser_tabs",{action}),h.cfg)).toContain("still in flight");
    expect(guard(h.event(randomUUID(),"browser_press_key",{key:"X"}),h.cfg)).toContain("Wait for its result");
    expect(h.read().action.id).toBe(a.tool_use_id);
  });
  it("releases only a matching completion; denied calls and another session cannot clear an action",()=>{
    const h=fixture(),a=h.event(),b=h.event();expect(guard(a,h.cfg)).toBeNull();
    expect(guard(b,h.cfg)).toContain("Parallel browser action");
    finishAction(b,h.cfg);finishAction({...a,tool_name:"Read"},h.cfg);
    expect(()=>finishAction({...a,session_id:randomUUID()},h.cfg)).toThrow("mismatch");
    expect(h.read().action.id).toBe(a.tool_use_id);
    finishAction(a,h.cfg);finishAction(a,h.cfg);expect(h.read().action).toBeUndefined();
    expect(guard(b,h.cfg)).toBeNull();
    expect(readFileSync(h.cfg.stateFile,"utf8")).not.toContain("e1");
  });
  it("does not reserve rejected key text/exact values or identity-less actions",()=>{
    const h=fixture();h.cfg.exactValues=["FX_Exact"];
    for(const text of ["Ctrl+A","fx_exact"]) {
      expect(guard(h.event(randomUUID(),"browser_type",{text}),h.cfg)).not.toBeNull();expect(h.read().action).toBeUndefined();
    }
    expect(guard({...h.event(),tool_use_id:undefined},h.cfg)).toContain("identity missing");
    expect(h.read().action).toBeUndefined();expect(guard(h.event(),h.cfg)).toBeNull();
  });
  it.each(["PostToolUse","PostToolUseFailure"])("generated CLI releases on %s without counting a new call",event=>{
    const h=fixture(),a=h.event();
    const invoke=(input:HookEvent)=>execFileSync(process.execPath,h.args,{input:JSON.stringify(input),encoding:"utf8",windowsHide:true});
    expect(invoke(a)).toBe("");const before=h.read();
    expect(invoke({...a,hook_event_name:event})).toBe("");expect(h.read()).toEqual({key:before.key,count:1,sequence:1});
    expect(invoke(h.event())).toBe("");
  });
  it("counts completed identical actions across resumes without reserving the sixth denial",()=>{
    const h=fixture();
    for(let i=0;i<5;i++){const a=h.event();expect(guard(a,{...h.cfg})).toBeNull();finishAction(a,h.cfg);}
    expect(guard(h.event(),h.cfg)).toContain("call 6 denied");expect(h.read().action).toBeUndefined();
    expect(guard(h.event(randomUUID(),"browser_press_key",{key:"X"}),h.cfg)).toBeNull();
  });
  it("native results release cancellations/permission-denied actions without completion hooks",()=>{
    const h=fixture(),a=h.event(),events=new TaskEvents(h.cfg.sessionId,(id,name)=>finishAction({session_id:h.cfg.sessionId,tool_name:name,tool_use_id:id},h.cfg));
    expect(guard(a,h.cfg)).toBeNull();
    events.add({type:"assistant",message:{id:"turn",content:[{type:"tool_use",id:a.tool_use_id,name:a.tool_name,input:a.tool_input}]}});
    events.add({type:"user",message:{content:[{type:"tool_result",tool_use_id:a.tool_use_id,is_error:true,content:"Permission denied / interrupted"}]}});
    expect(events.invalid).toBe("");expect(h.read().action).toBeUndefined();expect(guard(h.event(),h.cfg)).toBeNull();
  });
  it("never expires an action on hook process exit and keeps independent sessions separate",()=>{
    const h=fixture(),other=fixture();expect(guard(h.event(),h.cfg)).toBeNull();
    expect(guard(other.event(),other.cfg)).toBeNull();expect(guard(h.event(),{...h.cfg})).toContain("still in flight");
  });
  it("completion fails closed on genuinely corrupt state, preserves it, and audits state_corrupt",()=>{
    const h=fixture(),a=h.event();expect(guard(a,h.cfg)).toBeNull();
    const corrupt="{broken";writeFileSync(h.cfg.stateFile,corrupt);
    let result:unknown;
    try{execFileSync(process.execPath,h.args,{input:JSON.stringify({...a,hook_event_name:"PostToolUseFailure"}),encoding:"utf8",windowsHide:true,stdio:"pipe"});}catch(error){result=error;}
    expect(result).toMatchObject({status:2,stdout:"",stderr:expect.stringContaining("preserve the action reservation")});
    expect(readFileSync(h.cfg.stateFile,"utf8")).toBe(corrupt);expect(readFileSync(h.cfg.denialFile!,"utf8")).toContain('"guard":"state_corrupt"');
    expect(existsSync(h.cfg.stateFile+".lock")).toBe(false);
  });
  it("eight simultaneous action hooks admit exactly one, deny seven, and leave no state lock",async()=>{
    const h=fixture(),events=Array.from({length:8},()=>h.event(randomUUID(),"browser_press_key",{key:randomUUID()}));
    const results=await Promise.all(events.map(event=>new Promise<string>((resolve,reject)=>{
      const child=spawn(process.execPath,h.args,{stdio:"pipe",windowsHide:true});let out="",err="";
      child.stdout.on("data",data=>out+=data);child.stderr.on("data",data=>err+=data);
      child.on("error",reject);child.on("close",code=>code===0&&!err?resolve(out):reject(Error(err||String(code))));child.stdin.end(JSON.stringify(event));
    })));
    expect(results.filter(out=>out==="")).toHaveLength(1);
    for(const out of results.filter(Boolean))expect(JSON.parse(out).hookSpecificOutput.permissionDecisionReason).toContain("Parallel browser action denied");
    const winner=events[results.indexOf("")];expect(h.read()).toMatchObject({count:1,sequence:8,action:{id:winner.tool_use_id}});
    expect(existsSync(h.cfg.stateFile+".lock")).toBe(false);
    finishAction(winner,h.cfg);expect(h.read().action).toBeUndefined();expect(existsSync(h.cfg.stateFile+".lock")).toBe(false);
    const audit=readFileSync(h.cfg.denialFile!,"utf8").trim().split("\n").map(line=>JSON.parse(line));
    expect(audit.filter(e=>e.event==="denial").map(e=>e.guard)).toEqual(Array(7).fill("parallel_browser_actions"));
  });
});
