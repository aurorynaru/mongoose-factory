import { execFileSync, spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { existsSync, mkdtempSync, readFileSync, readdirSync, unlinkSync, utimesSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { HARNESS_DIR } from "../src/config.js";
import { hash } from "../src/adapters/claude/files.js";
import { canonical, type GuardConfig } from "../src/hooks/pre-tool-use.js";
import { LOCK_WAIT_MS, STALE_LOCK_MS } from "../src/hooks/guard-lock.js";

function fixture() {
  const dir=mkdtempSync(join(tmpdir(),"parallel-hook-")),sessionId=randomUUID();
  const cfg:GuardConfig={sessionId,stateFile:join(dir,"state.json"),denialFile:join(dir,"audit.jsonl"),threshold:6,allowLiteralKeyText:false,exactValues:[]};
  const file=join(dir,"config.json");writeFileSync(file,JSON.stringify(cfg));
  const event=(tool_name="Read",tool_input:Record<string,unknown>={file_path:"docs/FX_fixture.md"})=>({session_id:sessionId,tool_name,tool_input});
  return {dir,cfg,file,event,lock:cfg.stateFile+".lock",audit:()=>readFileSync(cfg.denialFile!,"utf8").trim().split("\n").map(line=>JSON.parse(line))};
}
function hook(h:ReturnType<typeof fixture>,event:ReturnType<typeof h.event>) {
  const child=spawn(process.execPath,[join(HARNESS_DIR,"dist/hooks/pre-tool-use.js"),"--config",h.file],{stdio:"pipe",windowsHide:true});
  let stdout="",stderr="";child.stdout.on("data",chunk=>stdout+=chunk);child.stderr.on("data",chunk=>stderr+=chunk);
  const finished=new Promise<{pid:number;stdout:string;stderr:string;code:number|null}>( (resolve,reject)=>{
    child.once("error",reject);child.once("close",code=>resolve({pid:child.pid!,stdout,stderr,code}));
  });child.stdin.end(JSON.stringify(event));return {pid:child.pid!,finished};
}
function owner(timestamp=Date.now(),pid=process.pid) { return {pid,timestamp,token:randomUUID()}; }
function noLeftovers(h:ReturnType<typeof fixture>) {
  expect(existsSync(h.lock)).toBe(false);expect(existsSync(h.lock+".reclaim")).toBe(false);
  expect(readdirSync(h.dir).filter(name=>name.endsWith(".tmp"))).toEqual([]);
}

describe("parallel PreToolUse hook processes",()=>{
  it("serializes eight mixed calls in acquisition order with no false denials or lost updates",async()=>{
    const h=fixture(),a=h.event("Read",{file_path:"docs/FX_A.md",limit:200}),b=h.event("Grep",{path:"recipes",pattern:"FX_B"}),c=h.event("Read",{file_path:"docs/FX_C.md"});
    const events=[a,b,a,c,a,b,c,{...a,tool_input:{limit:200,file_path:"docs/FX_A.md"}}];
    writeFileSync(h.lock,JSON.stringify(owner()));
    const children=events.map(event=>hook(h,event));
    // Keep all child hooks contending initially. This is a test-only lock owned by this process.
    await new Promise(r=>setTimeout(r,400));unlinkSync(h.lock);
    const results=await Promise.all(children.map(child=>child.finished));
    for(const result of results)expect(result).toMatchObject({stdout:"",stderr:"",code:0});
    const byPid=new Map(children.map((child,i)=>[child.pid,events[i]])),calls=h.audit().filter(row=>row.event==="call");
    expect(calls).toHaveLength(8);expect(h.audit().filter(row=>row.event==="denial")).toEqual([]);
    let key="",count=0;
    for(const [i,call] of calls.entries()) {
      const event=byPid.get(call.pid)!;expect(event).toBeDefined();
      const next=hash(canonical([event.tool_name,event.tool_input]));count=next===key?count+1:1;key=next;
      expect(call).toMatchObject({sequence:i+1,count,tool:event.tool_name});
    }
    expect(JSON.parse(readFileSync(h.cfg.stateFile,"utf8"))).toEqual({key,count,sequence:8});
    expect(readFileSync(h.cfg.denialFile!,"utf8")).not.toContain("FX_A");noLeftovers(h);
  });
  it("counts eight simultaneous identical calls once each and denies exactly calls six through eight",async()=>{
    const h=fixture(),children=Array.from({length:8},()=>hook(h,h.event()));
    const results=await Promise.all(children.map(child=>child.finished)),calls=h.audit().filter(row=>row.event==="call");
    expect(calls.map(row=>row.count)).toEqual([1,2,3,4,5,6,7,8]);expect(calls.map(row=>row.sequence)).toEqual([1,2,3,4,5,6,7,8]);
    const order=new Map(calls.map(row=>[row.pid,row.count]));
    for(const result of results) {
      expect(result.code).toBe(0);expect(result.stderr).toBe("");
      if(order.get(result.pid)!<6)expect(result.stdout).toBe("");
      else expect(JSON.parse(result.stdout).hookSpecificOutput.permissionDecisionReason).toContain(`call ${order.get(result.pid)} denied`);
    }
    expect(h.audit().filter(row=>row.event==="denial").map(row=>row.guard)).toEqual(["identical_calls","identical_calls","identical_calls"]);noLeftovers(h);
  });
  it("recovers a dead owner's lock under eight concurrent hooks without resetting previous counts",async()=>{
    const h=fixture();
    const gonePid=Number(execFileSync(process.execPath,["-e","process.stdout.write(String(process.pid))"],{encoding:"utf8",windowsHide:true}));
    const event=h.event(),key=hash(canonical([event.tool_name,event.tool_input]));
    writeFileSync(h.cfg.stateFile,JSON.stringify({key,count:2}));writeFileSync(h.lock,JSON.stringify(owner(Date.now(),gonePid)));
    h.cfg.threshold=0;writeFileSync(h.file,JSON.stringify(h.cfg));
    const results=await Promise.all(Array.from({length:8},()=>hook(h,event).finished));
    for(const result of results)expect(result.stdout).toBe("");
    const rows=h.audit();expect(rows.filter(row=>row.event==="stale_lock_recovered")).toMatchObject([{reason:"owner_gone",ownerPid:gonePid,lock:"state"}]);
    expect(rows.filter(row=>row.event==="call").map(row=>row.count)).toEqual([3,4,5,6,7,8,9,10]);noLeftovers(h);
  });
  it.each(["expired","legacy empty"])("recovers an %s lock and records the reason",async kind=>{
    const h=fixture(),old=Date.now()-STALE_LOCK_MS-10_000;
    writeFileSync(h.lock,kind==="expired"?JSON.stringify(owner(old)):"");utimesSync(h.lock,old/1000,old/1000);
    const result=await hook(h,h.event()).finished;expect(result.stdout).toBe("");
    expect(h.audit().find(row=>row.event==="stale_lock_recovered")).toMatchObject({reason:"expired",lock:"state"});noLeftovers(h);
  });
  it("fails closed on genuine lock timeout, audits it distinctly and preserves another owner's live lock/state",async()=>{
    const h=fixture(),lock=JSON.stringify(owner()),state=JSON.stringify({key:"a".repeat(64),count:2});
    writeFileSync(h.lock,lock);writeFileSync(h.cfg.stateFile,state);
    const start=performance.now(),result=await hook(h,h.event()).finished,elapsed=performance.now()-start;
    expect(elapsed).toBeGreaterThanOrEqual(LOCK_WAIT_MS);expect(elapsed).toBeLessThan(LOCK_WAIT_MS+2500);
    expect(JSON.parse(result.stdout).hookSpecificOutput.permissionDecisionReason).toContain("Guard lock timeout");
    expect(h.audit()).toMatchObject([{event:"denial",guard:"lock_timeout"}]);
    expect(readFileSync(h.lock,"utf8")).toBe(lock);expect(readFileSync(h.cfg.stateFile,"utf8")).toBe(state);
    unlinkSync(h.lock);noLeftovers(h);
  });
  it.each(["{broken",JSON.stringify({key:"bad",count:1}),JSON.stringify({key:"a".repeat(64),count:-1})])("fails closed on corrupt state without overwriting it (%s)",async state=>{
    const h=fixture();writeFileSync(h.cfg.stateFile,state);const result=await hook(h,h.event()).finished;
    expect(JSON.parse(result.stdout).hookSpecificOutput.permissionDecisionReason).toContain("Guard state corrupt");
    expect(h.audit()).toMatchObject([{event:"denial",guard:"state_corrupt"}]);
    expect(readFileSync(h.cfg.stateFile,"utf8")).toBe(state);noLeftovers(h);
  });
});
