import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HARNESS_DIR,resolvePaths,ConfigSchema } from "../src/config.js";
import { Controller } from "../src/controller/machine.js";
import { ClaudeWorker,type TaskJournal } from "../src/adapters/claude/worker.js";
import { ClaudeChat,ExternalSecondOpinion,RoutedChat,EXTERNAL_LABEL } from "../src/adapters/claude/chat.js";
import { fixtureBrief,harness } from "../src/testing/scenario.js";
import { FakeChat,type ReplySpec } from "../src/testing/fakes.js";
import { read,save } from "../src/adapters/claude/files.js";
import { rolePolicy,inforDomains } from "../src/adapters/claude/role-policy.js";
import { guard } from "../src/hooks/pre-tool-use.js";
import { checkEvidenceRef } from "../src/protocol/validate.js";
import { parseHeader } from "../src/protocol/prompts.js";
import { BriefSchema } from "../src/brief.js";
import type { ChatPort } from "../src/adapters/types.js";
import { AUDIT_LABEL } from "../src/controller/action-audit.js";
const shared=JSON.parse(readFileSync(join(HARNESS_DIR,"fixtures/scenarios/scenarios.json"),"utf8")).shared;
function externalBroker(config:ReturnType<typeof ConfigSchema.parse>,paths:ReturnType<typeof resolvePaths>,chat:ChatPort|null){return new ExternalSecondOpinion(config,paths,chat,{registeredUrl:()=>"https://chatgpt.com/g/g-fakegpt-mongoose/c/registered-chat",chatForUrl:()=>chat!});}
const SEND:ReplySpec={envelope:{action:"SEND_TO_OPENCODE",reason:"next",message:"Inspect FX_FixtureForm01"}};
const COMPLETE:ReplySpec={envelope:shared.complete};
const disposables:Array<()=>void>=[];afterEach(()=>{disposables.splice(0).forEach(close=>close());vi.restoreAllMocks();});
function fixture(transport:"chatgpt"|"claude"="chatgpt",spec:Record<string,unknown>={}) {
  const h=harness({coordinator:[SEND,COMPLETE]});disposables.push(()=>h.store.close());
  for(const folder of ["recipes","experiments","environments","claims","docs/mongoose/guides"])mkdirSync(join(h.factoryRoot,folder),{recursive:true});
  save(join(h.factoryRoot,"docs/mongoose/sources.md"),"operator index fixture");save(join(h.factoryRoot,"docs/mongoose/guides/INDEX.md"),"guide index fixture");
  const git=(args:string[])=>execFileSync("git",args,{cwd:h.factoryRoot,stdio:"ignore"});git(["init"]);git(["config","user.email","fixture@example.invalid"]);git(["config","user.name","Fixture"]);git(["add","."]);git(["commit","-m","fixture"]);
  const file=join(h.dir,"fake.json"),capture=join(h.dir,"capture.json"),scriptState=join(h.dir,"script.json");
  save(file,{scriptState,capture,script:{coordinator:[{reply:SEND},{reply:COMPLETE}],specialist:[{reply:{prose:"Documentation (unverified): fixture",envelope:{protocol:"mongoose-harness/specialist-v1",consultation_id:"{{consultation_id}}",verdict:"informational",required_verifications:[]}}}],worker:[{write:shared.workerOk.files}]},...spec});
  const config=ConfigSchema.parse({factoryRoot:h.factoryRoot,dataDir:join(h.dir,"data"),coordinator:{transport},claude:{executable:process.execPath,argvPrefix:[join(HARNESS_DIR,"fixtures/fake-claude.mjs"),"--fixture",file],configDir:join(h.dir,"fake-auth")},chats:{newCoordinatorPerRun:true}});
  const paths=resolvePaths(config),window={targetId:"fake",windowId:1,windowState:"maximized" as const,bounds:{windowState:"maximized",width:1920,height:1080},checkedAt:new Date().toISOString()};
  const worker=new ClaudeWorker({config:structuredClone(config),paths,healthCheck:async()=>({ok:true}),windowCheck:async()=>window,restartOwned:async()=>{throw Error("No lifecycle calls allowed in a run");}});
  const externalChat=new FakeChat({coordinator:[],specialist:[]});
  const claude=new ClaudeChat({config,paths,external:externalBroker(config,paths,externalChat),workerFactory:options=>new ClaudeWorker({...options,healthCheck:async()=>({ok:true})})});
  const chat=new RoutedChat(config,h.chat,claude);
  const create=(confirmed=true,overrideChat:ChatPort=chat)=>new Controller({store:h.store,config,factoryRoot:h.factoryRoot,runsDir:paths.runsDir,protocolDir:paths.protocolDir,chat:overrideChat,worker,interpreter:null,log:h.log,preconditionsConfirmed:confirmed});
  return {...h,config,paths,worker,claude,chat,externalChat,file,capture,scriptState,window,create};
}
describe("Phase 4 controller loop with fake Claude processes",()=>{
  it("defaults to ChatGPT 6/High, Claude haiku/high and Opus/high with two external opinions",()=>{
    const cfg=ConfigSchema.parse({});expect(cfg.coordinator.transport).toBe("chatgpt");expect(cfg.externalSecondOpinion).toEqual({enabled:true,maxPerRun:2,newChatPerRun:true});
    expect(cfg.chats.desiredModel).toEqual({coordinator:{model:"6",effort:"High"},specialist:{model:"6",effort:"High"}});
    expect(cfg.claude.models).toEqual({worker:{model:"haiku",effort:"high"},coordinator:{model:"sonnet",effort:"high"},specialist:{model:"opus",effort:"high"}});
  });
  it.each(["chatgpt","claude"] as const)("full fake kickoff -> Claude worker -> EXPERIMENT_COMPLETE with %s coordinator",async transport=>{
    const h=fixture(transport),controller=h.create(),run=await controller.run(controller.createRun(fixtureBrief()).id);
    expect(run.status,`${run.pause_reason}: ${run.pause_detail}`).toBe("completed");expect(run.outcome).toBe("accepted");expect(run.counters.workerTasks).toBe(1);expect(run.counters.backendRestarts).toBe(0);
    expect(h.chat.transport("coordinator")).toBe(transport);expect(h.chat.transport("specialist")).toBe("claude");
    const op=h.store.opsForRun(run.id).find(o=>o.kind==="worker")!,j=read<TaskJournal>(h.worker.taskFile(op.session_id!,op.message_id!));
    expect(j.argv[j.argv.indexOf("--model")+1]).toBe("haiku");expect(j.preamble).toContain(`worker_session_id: ${op.session_id}`);expect(j.preamble).toContain("Never authenticate");
    expect(op.meta).toMatchObject({windowState:"maximized",bounds:{width:1920,height:1080}});
    if(transport==="claude")expect(h.store.getSetting("claude:conversation:coordinator")).toMatch(/^claude-session:/);
    expect(h.externalChat.submissions).toEqual([]);
  });
  it("uses a per-brief sonnet model with inherited high effort throughout the Claude worker session",async()=>{
    const h=fixture(),controller=h.create(),brief=fixtureBrief();brief.brief=BriefSchema.parse({...brief.brief,worker:{model:"sonnet"}});
    const run=await controller.run(controller.createRun(brief).id),op=h.store.opsForRun(run.id).find(o=>o.kind==="worker")!;
    const j=read<TaskJournal>(h.worker.taskFile(op.session_id!,op.message_id!));expect(j.argv[j.argv.indexOf("--model")+1]).toBe("sonnet");expect(j.argv[j.argv.indexOf("--effort")+1]).toBe("high");expect(h.config.claude.models.worker.model).toBe("haiku");
  });
  it("checks the window before each task and retains the same Claude session",async()=>{
    const h=fixture("claude",{script:{coordinator:[{reply:SEND},{reply:SEND},{reply:COMPLETE}],worker:[{write:shared.workerOk.files},{write:shared.workerOk.files}]}}),controller=h.create();
    const window=vi.spyOn(h.worker,"windowState");
    const run=await controller.run(controller.createRun(fixtureBrief()).id);expect(run.status).toBe("completed");expect(window).toHaveBeenCalledTimes(2);
    const ops=h.store.opsForRun(run.id).filter(o=>o.kind==="worker");expect(ops).toHaveLength(2);expect(ops[0].session_id).toBe(ops[1].session_id);expect(ops[0].message_id).not.toBe(ops[1].message_id);
    expect(h.store.inboundForRun(run.id,"worker")).toHaveLength(2);expect(run.counters.backendRestarts).toBe(0);
  });
  it("restores a minimized window and logs its manifest before submitting a fake worker",async()=>{
    const h=fixture();vi.spyOn(h.worker,"windowState").mockResolvedValue({...h.window,windowState:"minimized",bounds:{...h.window.bounds,windowState:"minimized"}});
    const restore=vi.spyOn(h.worker,"restoreWindow").mockResolvedValue(h.window),controller=h.create();
    const run=await controller.run(controller.createRun(fixtureBrief()).id);expect(run.status).toBe("completed");expect(restore).toHaveBeenCalledTimes(1);
    expect(h.store.opsForRun(run.id).find(o=>o.kind==="worker")?.meta).toMatchObject({windowRestore:{status:"restored",before:{windowState:"minimized"},after:{windowState:"maximized"}},windowState:"maximized"});
  });
  it("generates audit evidence and reserves coordinator message space even with long worker prose",async()=>{
    const h=fixture("chatgpt",{script:{worker:[{write:shared.workerOk.files,calls:2,tool:"mcp__playwright__browser_press_key",toolInput:{key:"X"},reply:"Long prose ".repeat(5000)}]}}),controller=h.create();
    h.config.browser.maxMessageChars=3500;
    const loaded=fixtureBrief();loaded.brief=BriefSchema.parse({...loaded.brief,exact_values:["XX"]});
    const run=await controller.run(controller.createRun(loaded).id);expect(run.status,`${run.pause_reason}: ${run.pause_detail}`).toBe("completed");
    const worker=h.store.opsForRun(run.id).find(o=>o.kind==="worker")!,report=h.store.opsForRun(run.id).find(o=>o.purpose==="WORKER_REPORT")!;
    expect(worker.meta.actionAudit).toMatchObject({actions:2,turns:3,spelledStrings:[{text:"XX",exactMatch:true,allOk:true}],errors:[]});
    const files=worker.meta.auditFiles as {markdown:string;json:string};expect(existsSync(files.markdown)).toBe(true);expect(existsSync(files.json)).toBe(true);
    expect(report.payload_text.length).toBeLessThanOrEqual(3500);expect(report.payload_text).toContain(AUDIT_LABEL);expect(report.payload_text).toContain('"XX" [exact match]');
    const inbound=h.store.inboundForRun(run.id,"worker")[0];expect(inbound.meta.changedFiles).not.toContain("evidence/EXP-900/harness-audit-T1.md");
  });
  it.each(["confirmation","minimized","unhealthy"])("blocks before worker creation/submission for missing %s precondition",async kind=>{
    const h=fixture(),controller=h.create(kind!=="confirmation");
    if(kind==="minimized"){h.config.chrome.autoRestoreMinimized=false;vi.spyOn(h.worker,"windowState").mockResolvedValue({...h.window,windowState:"minimized"});}
    if(kind==="unhealthy")vi.spyOn(h.worker,"health").mockResolvedValue({ok:false,detail:"Owned MCP unhealthy"});
    const created=controller.createRun(fixtureBrief()),run=await controller.run(created.id);
    expect(run.pause_reason).toBe(kind==="confirmation"?"operator_preconditions":"worker_preflight");expect(run.counters.workerTasks).toBe(0);expect(run.current_session_id).toBeNull();expect(existsSync(h.capture)).toBe(false);
    if(kind==="confirmation"){controller.applyResumeOptions(run.id,{confirmPreconditions:true});expect((await controller.run(run.id)).status).toBe("completed");}
  });
  it("exit 3 pauses for item-bound operator review, then forwards once without another model call",async()=>{
    const h=fixture("chatgpt",{script:{worker:[{write:shared.workerOk.files,permissionDenials:[{tool_name:"Bash",tool_input:{command:"git status"}}]}]}}),controller=h.create();
    let run=await controller.run(controller.createRun(fixtureBrief()).id);expect(run.pause_reason).toBe("completed_with_denials");expect(run.counters.totalFailures).toBe(0);
    expect(h.store.getOp(run.pending_op_id!)?.meta.actionAudit).toMatchObject({status:"completed"});
    const pending=run.pending_op_id!,stateBefore=read(h.scriptState);expect(h.store.inboundForRun(run.id,"worker")).toHaveLength(0);
    run=await controller.run(run.id);expect(run.pause_reason).toBe("completed_with_denials");expect(read(h.scriptState)).toEqual(stateBefore);
    controller.applyResumeOptions(run.id,{approve:["denials"]});run=await controller.run(run.id);expect(run.status).toBe("completed");expect(read(h.scriptState)).toEqual(stateBefore);expect(h.store.getRun(run.id)?.approvals.denials).toBe(pending);expect(h.store.inboundForRun(run.id,"worker")).toHaveLength(1);
  });
  it("usage_limit preserves the task and only an explicit new bounded continuation can proceed after reset",async()=>{
    const h=fixture("chatgpt",{script:{worker:[{mode:"usage"},{write:shared.workerOk.files}]}}),controller=h.create();
    let run=await controller.run(controller.createRun(fixtureBrief()).id),old=h.store.getOp(run.pending_op_id!)!;expect(run.pause_reason).toBe("usage_limit");expect(run.pause_detail).toContain("--continue-after-usage");expect(run.counters.totalFailures).toBe(0);
    expect(old.meta.actionAudit).toMatchObject({status:"usage_limit",turns:1,errors:expect.any(Array)});
    run=await controller.run(run.id);expect(run.pause_reason).toBe("usage_limit");expect(read<Record<string,number>>(h.scriptState).worker).toBe(1);
    controller.applyResumeOptions(run.id,{continueAfterUsage:"Inspect current FX_FixtureForm01 state, then continue the permitted task."});
    run=await controller.run(run.id);expect(run.status).toBe("completed");const ops=h.store.opsForRun(run.id).filter(o=>o.kind==="worker");expect(ops).toHaveLength(2);expect(ops[1].message_id).not.toBe(old.message_id);expect(ops[1].session_id).toBe(old.session_id);expect(run.counters.backendRestarts).toBe(0);
    expect(read<TaskJournal>(h.worker.taskFile(old.session_id!,old.message_id!)).result?.status).toBe("usage_limit");
  });
  it("Claude coordinator usage pauses preserve the native request and require explicit continuation",async()=>{
    const h=fixture("claude",{script:{coordinator:[{mode:"usage"},{reply:SEND},{reply:COMPLETE}],worker:[{write:shared.workerOk.files}]}}),controller=h.create();
    let run=await controller.run(controller.createRun(fixtureBrief()).id);expect(run.pause_reason).toBe("usage_limit");expect(run.pause_detail).toContain("--continue-chat-after-usage coordinator");
    const op=h.store.getOp(run.pending_op_id!)!,before=read(h.scriptState);run=await controller.run(run.id);expect(run.pause_reason).toBe("usage_limit");expect(read(h.scriptState)).toEqual(before);
    const saved=read<{sid:string;mid:string}>(join(h.paths.dataDir,"claude-roles/coordinator/operations",`${op.nonce}.json`));
    expect((await h.claude.continueUsage("coordinator",op.nonce!)).status).toBe("accepted");run=await controller.run(run.id);expect(run.status).toBe("completed");
    expect(read<TaskJournal>(h.claude.workers.coordinator.taskFile(saved.sid,saved.mid)).result?.status).toBe("usage_limit");expect(run.counters.totalFailures).toBe(0);
  });
  it("uses Opus as primary specialist and keeps external replies out of controller inbound",async()=>{
    const request={markdown:'```json\n{"protocol":"mongoose-harness/external-second-opinion-v1","question":"What does Select Form do?"}\n```'};
    const specialist={prose:"Source rank: model knowledge (unverified). Local fixture read first; external claim is unverified.",envelope:{protocol:"mongoose-harness/specialist-v1",consultation_id:"{{consultation_id}}",verdict:"informational",required_verifications:[]}};
    const h=fixture("chatgpt",{script:{specialist:[{reply:request},{reply:specialist}],worker:[{write:shared.workerOk.files}]}});
    const browser=new FakeChat({coordinator:[{envelope:{action:"ASK_SPECIALIST",reason:"question",message:"Explain Select Form."}},SEND,COMPLETE],specialist:[]});
    const external=new FakeChat({coordinator:[],specialist:["external-secret-sentinel"]});h.claude.o.external=externalBroker(h.config,h.paths,external);
    h.store.setRole("specialist",{url:"https://chatgpt.com/g/g-fixture/c/external",conversationId:"external",gptId:"g-fixture",title:"Infor CloudSuite Assistant"});h.store.setSetting("new_chat:specialist","1");
    const controller=h.create(true,new RoutedChat(h.config,browser,h.claude)),run=await controller.run(controller.createRun(fixtureBrief()).id);expect(run.status).toBe("completed");expect(external.submissions).toHaveLength(1);
    const inbound=h.store.inboundForRun(run.id,"specialist");expect(inbound).toHaveLength(1);expect(inbound[0].content).not.toContain("external-secret-sentinel");
    const requests=browser.submissions;expect(requests.filter(s=>s.role==="specialist")).toHaveLength(0);expect(requests.every(s=>!s.text.includes("external-secret-sentinel"))).toBe(true);
    const op=h.store.opsForRun(run.id).find(o=>o.kind==="specialist")!,chatOp=read<{sid:string;mid:string}>(join(h.paths.dataDir,"claude-roles/specialist/operations",`${op.nonce}.json`));
    const j=read<TaskJournal>(h.claude.workers.specialist.taskFile(chatOp.sid,chatOp.mid));expect(j.argv[j.argv.indexOf("--model")+1]).toBe("opus");expect(j.argv[j.argv.indexOf("--effort")+1]).toBe("high");expect(j.payload).toContain(`KNOWLEDGE ROOT: ${h.factoryRoot}`);expect(j.payload).toContain("operator index fixture");expect(j.payload).toContain("guide index fixture");expect(j.preamble).toContain("Source URL");expect(j.preamble).toContain("2026.09.08");
    expect(existsSync(join(h.paths.runsDir,run.id,"external-second-opinion/ledger.json"))).toBe(true);
    expect(h.store.getRole("specialist")?.conversation_id).toBe("external");expect(h.store.getSetting("claude:conversation:specialist")).toMatch(/^claude-session:/);
  });
});

describe("specialist permissions and external broker",()=>{
  it("generates read-only folders, an empty MCP and native WebFetch domain rules with fail-closed domain checks",()=>{
    const h=fixture(),sid="00000000-0000-4000-8000-000000000000",cwd=join(h.paths.dataDir,"knowledge-workspace");mkdirSync(cwd,{recursive:true});
    const p=rolePolicy(h.config,h.paths,sid,"specialist",cwd),cfg=read<any>(p.guardConfig);
    expect(p.tools).toEqual(["Read","Glob","Grep","WebFetch"]);expect(read(p.mcp)).toEqual({mcpServers:{}});expect(p.settings.permissions.blockReadsOutsideWorkingDirectories).toBe(true);
    expect(p.directories.map(d=>d.replaceAll("\\","/"))).toContain(join(h.factoryRoot,"docs/mongoose").replaceAll("\\","/"));expect(p.deny).toContain("Write");expect(p.deny).toContain("WebSearch");expect(p.deny).toContain("Bash");
    for(const domain of inforDomains){expect(p.settings.permissions.allow).toContain(`WebFetch(domain:${domain})`);expect(guard({session_id:sid,tool_name:"WebFetch",tool_input:{url:`https://${domain}/page`}},cfg)).toBeNull();}
    for(const url of ["https://docs.infor.com.evil.invalid/","https://example.invalid/","https://docs.python.org/","https://attacker@docs.infor.com/","javascript:alert(1)"])expect(guard({session_id:sid,tool_name:"WebFetch",tool_input:{url}},cfg)).toContain("domain denied");
  });
  it("logs and labels every external request/reply, persists the limit through restart and never treats logs as evidence",async()=>{
    const h=fixture(),chat=new FakeChat({coordinator:[],specialist:["opinion one","opinion two"]}),broker=externalBroker(h.config,h.paths,chat),opts={timeoutMs:100,shouldStop:()=>false};
    const one=await broker.ask("R-fixture","one","Question one",opts);expect(one).toMatchObject({status:"complete",markdown:expect.stringContaining(EXTERNAL_LABEL)});
    expect(await broker.ask("R-fixture","one","Question one",opts)).toEqual(one);expect(chat.submissions).toHaveLength(1);
    await externalBroker(h.config,h.paths,chat).ask("R-fixture","two","Question two",opts);
    const limit=await externalBroker(h.config,h.paths,chat).ask("R-fixture","three","Question three",opts);expect(limit).toMatchObject({status:"complete",markdown:expect.stringContaining("per-run limit reached")});expect(chat.submissions).toHaveLength(2);
    const ledger=read<Record<string,{nonce:string}>>(join(h.paths.runsDir,"R-fixture/external-second-opinion/ledger.json"));expect(Object.keys(ledger)).toHaveLength(2);
    for(const e of Object.values(ledger))for(const side of ["request","reply"])expect(read<Record<string,unknown>>(join(h.paths.runsDir,"R-fixture/external-second-opinion",`${e.nonce}-${side}.json`))).toMatchObject({label:EXTERNAL_LABEL,evidence:false});
    expect(checkEvidenceRef("tools/claude-harness/claude-data/runs/R-fixture/external-second-opinion/ledger.json",h.factoryRoot).ok).toBe(false);
  });
  it("disabled opinions make no browser calls; uncertain submissions never replay",async()=>{
    const h=fixture(),chat=new FakeChat({coordinator:[],specialist:[{submit:"uncertain_lost",prose:"unknown"}]}),opts={timeoutMs:100,shouldStop:()=>false};
    h.config.externalSecondOpinion.enabled=false;expect(await externalBroker(h.config,h.paths,null).ask("R-fixture","one","Q",opts)).toMatchObject({status:"complete",markdown:expect.stringContaining("disabled")});expect(chat.submissions).toHaveLength(0);
    h.config.externalSecondOpinion.enabled=true;const broker=externalBroker(h.config,h.paths,chat);expect((await broker.ask("R-fixture","one","Q",opts)).status).toBe("blocked");expect((await broker.ask("R-fixture","one","Q",opts)).status).toBe("blocked");expect(chat.submissions).toHaveLength(1);
  });
});
