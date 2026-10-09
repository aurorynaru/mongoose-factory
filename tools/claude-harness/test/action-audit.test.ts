import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { actionAudit, auditHeadline, compactAudit, persistAudit, AUDIT_LABEL } from "../src/controller/action-audit.js";
import { clip } from "../src/protocol/prompts.js";
const native=(events:unknown[])=>events.map(e=>JSON.stringify(e)).join("\n")+"\n";
const call=(id:string,name:string,input:unknown)=>({type:"assistant",message:{id:`turn-${id}`,content:[{type:"tool_use",id,name,input}]}});
const result=(id:string,is_error=false,content="ok")=>({type:"user",message:{content:[{type:"tool_result",tool_use_id:id,is_error,content}]}});
const key=(id:string,value:string)=>[call(id,"mcp__playwright__browser_press_key",{key:value}),result(id)];
const terminal={type:"result",subtype:"success",is_error:false};

describe("deterministic saved-event action audit",()=>{
  it("audits a 25-key positive control, lifecycle calls, screenshot and exact match",()=>{
    const value="FX_ComponentRecoveryLab02";
    const events=[call("open","mcp__playwright__browser_click",{element:"Open",ref:"e1"}),result("open"),...key("clear","Control+a"),...key("back","Backspace"),...[...value].flatMap((v,i)=>key(`k${i}`,v)),call("shot","mcp__playwright__browser_take_screenshot",{filename:"positive.png"}),result("shot"),call("cancel","mcp__playwright__browser_click",{element:"Cancel"}),result("cancel"),terminal];
    const audit=actionAudit(native(events),"T1","completed",[value]);
    expect(audit.actions).toBe(29);expect(audit.reads).toBe(1);expect(audit.turns).toBe(30);expect(audit.keySequence).toHaveLength(27);
    expect(audit.keySequence.slice(0,2).map(k=>k.key)).toEqual(["Control+a","Backspace"]);
    expect(audit.spelledStrings).toEqual([{text:value,orders:Array.from({length:25},(_,i)=>i+4),allOk:true,exactMatch:true,matchingValues:[value]}]);
    expect(audit.errors).toEqual([]);expect(audit.issues).toEqual([]);expect(audit.prohibitedToolHits).toBe(0);
    const folder=mkdtempSync(join(tmpdir(),"audit-")),files=persistAudit(folder,"evidence/EXP-900",join(folder,"run"),audit);
    expect(JSON.parse(readFileSync(files.json,"utf8"))).toEqual(audit);
    expect(readFileSync(files.markdown,"utf8")).toContain("element=Cancel");expect(readFileSync(files.markdown,"utf8")).toContain("filename=positive.png");
    expect(compactAudit(audit)).toContain(AUDIT_LABEL);expect(compactAudit(audit)).toContain(value);
  });
  it("keeps invocation order under parallel reads, deduplicates repeated events and binds results by tool ID",()=>{
    const a=call("a","Read",{file_path:"a.md"}),b=call("b","Grep",{filename:"b.md"});
    const audit=actionAudit(native([a,b,a,result("b",true,"denied"),result("a"),terminal]),"T2","completed");
    expect(audit.calls.map(c=>[c.id,c.result])).toEqual([["a","ok"],["b","error"]]);expect(audit.turns).toBe(2);expect(audit.errors).toHaveLength(1);
  });
  it("flags all alternate input/code tools, matches case exactly, and never claims failed keys succeeded",()=>{
    const tools=["type","fill_form","press_sequentially","evaluate","run_code","run_code_unsafe"];
    const events=[...tools.flatMap((t,i)=>[call(`f${i}`,`mcp__playwright__browser_${t}`,{element:"Name"}),result(`f${i}`)]),...key("x","f"),call("y","browser_press_key",{key:"X"}),result("y",true,"timeout"),...key("clear","Backspace"),...key("z","FX"),terminal];
    const audit=actionAudit(native(events),"T1","completed",["FX"]);
    expect(audit.prohibitedToolHits).toBe(6);expect(Object.keys(audit.toolUsage)).toHaveLength(6);
    expect(audit.spelledStrings).toMatchObject([{text:"fX",allOk:false,exactMatch:false}]);
    expect(audit.errors).toHaveLength(1); // multi-character key is not misread as native printable input.
  });
  it("preserves missing results, malformed events and terminal/MCP errors as incomplete evidence",()=>{
    const text=native([call("a","browser_click",{element:"Open"}),call("b","browser_snapshot",{}),result("b",false,JSON.stringify({isError:true,content:[{text:"timeout"}]})),{type:"result",subtype:"error",is_error:true,result:"usage_limit"}])+"{broken";
    const audit=actionAudit(text,"T3","usage_limit");
    expect(audit.calls[0].result).toBe("unknown");expect(audit.errors).toHaveLength(2);expect(audit.issues).toHaveLength(2);
    expect(actionAudit("","T0","blocked").issues).toContain("No saved event transcript available");
  });
  it("flags only case-equivalent misspellings and treats unrelated input as informational",()=>{
    const events=[...key("a","F"),...key("b","X"),...key("clear1","Backspace"),...key("c","f"),...key("d","x"),...key("clear2","Backspace"),...key("e","Y"),terminal];
    const audit=actionAudit(native(events),"T1","completed",["FX"]);
    expect(audit.spelledStrings.map(s=>s.exactMatch)).toEqual([true,false,null]);
    expect(auditHeadline(audit)).toContain('"FX" [exact match]');expect(auditHeadline(audit)).toContain('"fx" [EXACT MISMATCH]');
    expect(auditHeadline(audit)).toContain('"Y" [not an exact_value (informational)]');expect(auditHeadline(audit)).toContain("exact mismatches=1");
    // Headlines of cached audits also apply the new classification without rewriting old evidence.
    audit.spelledStrings[2].exactMatch=false;expect(auditHeadline(audit)).toContain('"Y" [not an exact_value (informational)]');
  });
  it("summarises long sequences within the budget and keeps hashes/length instead of attaching files",()=>{
    const value="X".repeat(300),audit=actionAudit(native([...Array.from({length:300},(_,i)=>key(`k${i}`,"X")).flat(),terminal]),"T4","completed",[value]);
    const compact=compactAudit(audit,1600);
    expect(compact.length).toBeLessThanOrEqual(1600);expect(compact).toContain("300 key calls");expect(compact).toContain("sha256=");expect(compact).toContain("exact match");
    for(const max of [50,300,1000,30000])expect(clip("a".repeat(50000),max,"full.md").length).toBeLessThanOrEqual(max);
  });
});
