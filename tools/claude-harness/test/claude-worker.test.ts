import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ConfigSchema, HARNESS_DIR, resolvePaths } from "../src/config.js";
import { ClaudeWorker, type TaskJournal } from "../src/adapters/claude/worker.js";
import { boundedTask, taskExitCode, taskOutput } from "../src/adapters/claude/cli.js";
import { childEnvironment, diagnostic } from "../src/adapters/claude/process.js";
import { read, save } from "../src/adapters/claude/files.js";
import { findMarker, marker, transcriptPath } from "../src/adapters/claude/transcripts.js";
import { generatedPolicy, absolutePattern } from "../src/adapters/claude/tool-policy.js";
import { TaskEvents } from "../src/adapters/claude/events.js";
import { McpService } from "../src/backend/mcp-service.js";
import { createServer } from "node:net";
import { readChromeWindow } from "../src/backend/chrome-window.js";
import { fakeCdp } from "./fake-cdp.js";

function fixture(spec:Record<string,unknown>={}) {
  const dir=mkdtempSync(join(tmpdir(),"claude-worker-")),root=join(dir,"factory"),briefs=join(dir,"briefs");
  cpSync(join(HARNESS_DIR,"fixtures/factory"),root,{recursive:true});mkdirSync(briefs);
  cpSync(join(HARNESS_DIR,"fixtures/briefs/EXP-900.brief.json"),join(briefs,"EXP-900.brief.json"));
  const git=(args:string[])=>execFileSync("git",args,{cwd:root,stdio:"ignore"});
  git(["init"]);git(["config","user.email","fixture@example.invalid"]);git(["config","user.name","Fixture"]);git(["add","."]);git(["commit","-m","fixture"]);
  const file=join(dir,"fake.json"),capture=join(dir,"capture.json");writeFileSync(file,JSON.stringify({...spec,capture}));
  const cfg=ConfigSchema.parse({factoryRoot:root,dataDir:join(dir,"data"),claude:{executable:process.execPath,argvPrefix:[join(HARNESS_DIR,"fixtures/fake-claude.mjs"),"--fixture",file],configDir:join(dir,"fake-auth")},worker:{taskTimeoutMinutes:0.2}});
  const paths=resolvePaths(cfg);paths.briefsDir=briefs;
  const worker=new ClaudeWorker({config:cfg,paths,healthCheck:async()=>({ok:true,version:"fake"}),
    windowCheck:async()=>({targetId:"fake-page",windowId:1,windowState:"normal",bounds:{windowState:"normal",width:1920,height:1080},checkedAt:new Date().toISOString()})});
  return {dir,root,file,capture,cfg,paths,worker};
}
async function task(h:ReturnType<typeof fixture>,policy={denyBrowserJavaScript:true,preamble:"One reviewed bounded task only."}) {
  const sid=await h.worker.createSession("EXP-900 test"),mid=h.worker.newMessageId();await h.worker.configureSession(sid,policy);
  const submission=await h.worker.submit(sid,mid,"Inspect the permitted test artifact.");
  const result=await h.worker.waitForCompletion(sid,mid,{timeoutMs:10_000,shouldStop:()=>false});
  return {sid,mid,submission,result,journal:read<TaskJournal>(h.worker.taskFile(sid,mid))};
}
describe("Claude worker fake-process integration",()=>{
  it("checks browser-level window state before each task/resume and records it; minimized never submits",async()=>{
    const h=fixture(),cdp=await fakeCdp();
    const worker=new ClaudeWorker({config:h.cfg,paths:h.paths,healthCheck:async()=>({ok:true}),windowCheck:()=>readChromeWindow(cdp.port)});
    try {
      cdp.state.windowState="minimized";
      await expect(boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{},worker)).rejects.toThrow("restore the Chrome window first");
      expect(existsSync(h.capture)).toBe(false);expect(existsSync(join(h.paths.dataDir,"workers"))).toBe(false);
      cdp.state.windowState="maximized";
      const first=await boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{},worker);
      expect(read<Record<string,any>>(first.manifest)).toMatchObject({windowState:"maximized",bounds:{width:1920,height:1080},chromeWindow:{targetId:"page-1",windowId:7}});
      const before=readFileSync(h.capture,"utf8");cdp.state.windowState="minimized";
      await expect(boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{session:first.sessionId},worker)).rejects.toThrow("restore the Chrome window first");
      expect(readFileSync(h.capture,"utf8")).toBe(before);
      cdp.state.windowState="normal";
      const next=await boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{session:first.sessionId},worker);
      expect(read<Record<string,any>>(next.manifest).windowState).toBe("normal");
      expect(cdp.commands.map(c=>c.method)).toEqual(Array.from({length:4},()=>["Target.getTargets","Browser.getWindowForTarget"]).flat());
    }finally{await cdp.close();}
  });
  it.each(["brief Read","disabled Bash","denied JavaScript"])("completes with a review warning and exit 3 for intentional %s",async kind=>{
    const h=fixture();
    const denial=kind==="brief Read"?{tool_name:"Read",tool_use_id:"tool-0",tool_input:{file_path:join(h.root,"tools/claude-harness/briefs/EXP-900.brief.json")}}:
      {tool_name:kind==="disabled Bash"?"Bash":"mcp__playwright__browser_evaluate",tool_use_id:"tool-0",tool_input:{}};
    save(h.file,{capture:h.capture,calls:1,tool:denial.tool_name,toolInput:denial.tool_input,toolError:"Permission denied by configured policy",permissionDenials:[denial]});
    const r=await task(h);expect(r.result.status).toBe("completed");
    expect(taskExitCode(r.result)).toBe(3);
    if(r.result.status!=="completed")throw Error("Expected completed");
    expect(r.result.permissionDenials).toEqual([denial]);expect(r.result.warning).toContain("before continuing manually");
    const output=taskOutput({sessionId:r.sid,messageId:r.mid,manifest:"fake",result:r.result},r.journal,{evidenceDiff:{}});
    expect(output).toMatchObject({status:"completed",outcome:"completed_with_denials",exitCode:3,permissionDenials:[denial],warning:r.result.warning});
    expect(r.journal.permissionDenyRules).toContain(denial.tool_name==="Read"?`Read(${absolutePattern(join(h.root,"tools"))}/**)`:denial.tool_name);
    // Reconciliation uses the task's captured policy, not a subsequently overwritten settings file.
    const j=read<TaskJournal>(h.worker.taskFile(r.sid,r.mid));delete j.result;j.state="running";
    j.process={pid:2147483000,exe:process.execPath,startTicks:"1",commandHash:"different",kind:"worker"};save(h.worker.taskFile(r.sid,r.mid),j);
    save(j.permissionSettings,{permissions:{deny:[]}});
    const fresh=new ClaudeWorker({config:h.cfg,paths:h.paths});
    const recovered=await fresh.waitForCompletion(r.sid,r.mid,{timeoutMs:10,shouldStop:()=>false});
    expect(recovered.status).toBe("completed");expect(taskExitCode(recovered)).toBe(3);
  });
  it.each(["mixed","unknown Read","allowed Read","failed result","nonzero exit","Bash enabled"])("keeps %s denials blocked",async kind=>{
    const h=fixture();if(kind==="Bash enabled")h.cfg.worker.allowBash=true;
    const expected={tool_name:"Read",tool_input:{file_path:join(h.root,"tools/brief.json")}};
    const denials=kind==="mixed"?[expected,{tool_name:"mcp__playwright__browser_type",tool_input:{text:"Ctrl+A"}}]:
      kind==="unknown Read"?[{tool_name:"Read"}]:kind==="allowed Read"?[{tool_name:"Read",tool_input:{file_path:join(h.root,"evidence/EXP-900/allowed.txt")}}]:
      kind==="Bash enabled"?[{tool_name:"Bash"}]:[expected];
    save(h.file,{capture:h.capture,permissionDenials:denials,resultError:kind==="failed result",exitCode:kind==="nonzero exit"?1:0});
    const r=await task(h,{denyBrowserJavaScript:kind!=="Bash enabled",preamble:"Bounded fake task"});
    expect(r.result.status).toBe("blocked");expect(taskExitCode(r.result)).toBe(2);
    expect(r.result).toMatchObject({permissionDenials:denials});
  });
  it("reports task-local guard counts, turns and wall time across resumed tasks",async()=>{
    const h=fixture({calls:1,tool:"mcp__playwright__browser_type",toolInput:{text:"Ctrl+A"},invokeHook:true});
    const briefFile=join(h.paths.briefsDir,"EXP-900.brief.json"),brief=read<Record<string,unknown>>(briefFile);
    save(briefFile,{...brief,worker:{model:"sonnet",effort:"high"}});
    const first=await boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{},h.worker);
    const j=read<TaskJournal>(h.worker.taskFile(first.sessionId,first.messageId)),manifest=read<Record<string,any>>(first.manifest),output=taskOutput(first,j,manifest);
    expect(first.result.status).toBe("blocked");expect(output.assistantTurns).toBe(2);expect(output.wallTimeSeconds).toBeGreaterThan(0);
    expect(output.guardDenials).toEqual({total:1,byGuard:{key_text:1}});expect(manifest.metrics).toEqual(j.metrics);
    expect(read<{argv:string[]}>(h.capture).argv).toContain("sonnet");
    expect(readFileSync(j.guardDenialsFile!,"utf8")).not.toContain("Ctrl+A");
    writeFileSync(h.file,JSON.stringify({capture:h.capture}));
    const next=await boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{session:first.sessionId},h.worker);
    const nextJournal=read<TaskJournal>(h.worker.taskFile(next.sessionId,next.messageId));
    expect(nextJournal.metrics?.guardDenials).toEqual({total:0,byGuard:{}});
    expect(read<{argv:string[]}>(h.capture).argv).toContain("--resume");
    expect(j.guardDenialsFile).not.toBe(nextJournal.guardDenialsFile);
  });
  it.runIf(process.platform==="win32")("owned task abort preserves a sibling fake MCP process and recovers its durable checkpoint",async()=>{
    const h=fixture({mode:"hang"}),listener=createServer();await new Promise<void>(r=>listener.listen(0,"127.0.0.1",r));
    h.cfg.mcp.port=(listener.address() as {port:number}).port;await new Promise<void>(r=>listener.close(()=>r()));
    h.cfg.mcp.entrypoint=join(HARNESS_DIR,"fixtures/fake-mcp.mjs");h.cfg.mcp.secretsFile=null;
    const service=new McpService(h.cfg,h.paths);expect((await service.command("mcp","start")).ok).toBe(true);
    const sid=await h.worker.createSession("EXP-900 abort"),mid=h.worker.newMessageId();
    try {
      await h.worker.configureSession(sid,{denyBrowserJavaScript:true,preamble:"bounded"});await h.worker.submit(sid,mid,"Inspect permitted artifact");
      await expect.poll(()=>read<TaskJournal>(h.worker.taskFile(sid,mid)).process?.kind,{timeout:5000}).toBe("worker");
      const fresh=new ClaudeWorker({config:h.cfg,paths:h.paths});
      expect(await fresh.abort(sid)).toBe(true);
      expect((await service.command("mcp","health")).ok).toBe(true);
      const recovered=await fresh.waitForCompletion(sid,mid,{timeoutMs:100,shouldStop:()=>false});
      expect(recovered.status).toBe("interrupted");
    }finally{await h.worker.waitForCompletion(sid,mid,{timeoutMs:100,shouldStop:()=>true});await service.command("mcp","stop");}
  },20_000);
  it("recovers a complete terminal stream only with marker and proof the original process is gone",async()=>{
    const h=fixture(),r=await task(h),j=read<TaskJournal>(h.worker.taskFile(r.sid,r.mid));
    delete j.result;j.state="running";j.process={pid:2147483000,exe:process.execPath,startTicks:"1",commandHash:"different",kind:"worker"};save(h.worker.taskFile(r.sid,r.mid),j);
    const fresh=new ClaudeWorker({config:h.cfg,paths:h.paths});
    expect((await fresh.waitForCompletion(r.sid,r.mid,{timeoutMs:10,shouldStop:()=>false})).status).toBe("completed");
    expect(read<TaskJournal>(fresh.taskFile(r.sid,r.mid)).recoveryEvidence?.resubmitted).toBe(false);
    const broken=read<TaskJournal>(fresh.taskFile(r.sid,r.mid));delete broken.result;delete broken.process;broken.state="unknown";save(fresh.taskFile(r.sid,r.mid),broken);
    expect((await fresh.waitForCompletion(r.sid,r.mid,{timeoutMs:10,shouldStop:()=>false})).status).toBe("stalled");
  });
  it("uses UUID/stream argv, explicit AGENTS, marker, high effort, and fingerprints already dirty files",async()=>{
    const h=fixture({split:true,write:{"experiments/EXP-900-fixture-experiment.md":"changed by fake"}});
    writeFileSync(join(h.root,"experiments/EXP-900-fixture-experiment.md"),"already dirty before task");
    const r=await task(h);expect(r.result.status).toBe("completed");
    if(r.result.status==="completed")expect(r.result.touchedFiles).toContain("experiments/EXP-900-fixture-experiment.md");
    expect(r.journal.agentsHash).toMatch(/^[\da-f]{64}$/);expect(r.journal.preamble).toContain(readFileSync(join(h.root,"AGENTS.md"),"utf8"));
    expect(r.journal.preamble).toContain("fresh snapshot");expect(r.journal.preamble).toContain("stable page state");
    const protocol=readFileSync(join(HARNESS_DIR,"protocol/worker-preamble.md"),"utf8").replace(/\s+/g," ");
    for(const required of ['no browser-native dialogs (alert, confirm, prompt, or beforeunload "leave page") and no unsaved-change prompts',
      'CDP disconnect dismisses beforeunload dialogs',
      'In-page Mongoose dialogs (such as Select Form) may remain open only when the current task instruction explicitly says to leave them open; otherwise end without open in-page dialogs',
      'Never discard unsaved work or take an out-of-scope lifecycle action to achieve stability; checkpoint and report a blocker instead']) {
      expect(r.journal.preamble).toContain(required);expect(protocol).toContain(required);
    }
    expect(r.journal.preamble).not.toContain("no open dialogs or unsaved prompts");
    const identity=`worker_session_id: ${r.sid} (this is your worker session UUID for identity/freshness checks); task_message_id: ${r.mid}`;
    expect(r.journal.payload.split("\n")[1]).toBe(identity);expect(r.journal.preamble.split("\n")[0]).toBe(identity);
    for(const required of ["The brief's scope and prohibitions are already included in this task", "(including briefs/) is intentionally unreadable; do not try to read these files", "Bash is disabled unless explicitly enabled by the generated tool policy"]) {
      expect(r.journal.preamble).toContain(required);expect(protocol).toContain(required);
    }
    expect(r.journal.preamble).toContain("Bash is disabled for this task; do not try to use it");
    for(const required of ['If an action times out at "visible, enabled and stable" while the locator resolves, treat it as a possible rendering or environment problem',
      'Do not repeat the same action more than the brief allows; record the exact error and report a suspected environment blocker',
      'The harness computes repository confinement itself from before/after Git state and the evidence diff. You do not need git status; state only which files you wrote']) {
      expect(r.journal.preamble).toContain(required);expect(protocol).toContain(required);
    }
    expect(read<{input:string}>(h.capture).input).toBe(r.journal.payload);
    expect(taskExitCode(r.result)).toBe(0);
    const argv=read<{argv:string[]}>(h.capture).argv;
    expect(argv[argv.indexOf("--setting-sources")+1]).toBe("");expect(argv[argv.indexOf("--effort")+1]).toBe("high");
    expect(argv).toContain("--strict-mcp-config");expect(argv).toContain("--session-id");expect(argv).not.toContain("--max-turns");
    expect(await h.worker.findMessage(r.sid,r.mid)).toBe("present");
    const transcript=readFileSync(r.journal.nativeTranscript,"utf8");expect(transcript).toContain(marker(r.mid));
    expect((await h.worker.submit(r.sid,r.mid,"same task")).status).toBe("uncertain");
    expect(readFileSync(r.journal.nativeTranscript,"utf8")).toBe(transcript);
    const mid=h.worker.newMessageId();await h.worker.configureSession(r.sid,{denyBrowserJavaScript:false});await h.worker.submit(r.sid,mid,"Next explicit bounded task");
    expect((await h.worker.waitForCompletion(r.sid,mid,{timeoutMs:10_000,shouldStop:()=>false})).status).toBe("completed");
    const resumed=read<{argv:string[]}>(h.capture).argv;expect(resumed).toContain("--resume");expect(resumed).not.toContain("--session-id");
    const resumedIdentity=`worker_session_id: ${r.sid} (this is your worker session UUID for identity/freshness checks); task_message_id: ${mid}`;
    expect(read<{input:string}>(h.capture).input.split("\n")[1]).toBe(resumedIdentity);
    expect(resumed[resumed.indexOf("--append-system-prompt")+1].split("\n")[0]).toBe(resumedIdentity);
    expect(resumed[resumed.indexOf("--disallowedTools")+1]).toContain("browser_evaluate");
  });
  it("pauses normally on usage limit, preserves output/lease, reconciles without launch, and continues only explicitly",async()=>{
    const h=fixture({mode:"usage"}),r=await task(h);expect(r.result.status).toBe("usage_limit");
    if(r.result.status==="usage_limit")expect(r.result.text).toContain("Partial observations");
    expect(existsSync(join(h.paths.dataDir,"workers/active-task.json"))).toBe(true);
    const before=readFileSync(h.capture,"utf8"),fresh=new ClaudeWorker({config:h.cfg,paths:h.paths});
    expect(await fresh.waitForCompletion(r.sid,r.mid,{timeoutMs:1,shouldStop:()=>false})).toEqual(r.result);
    expect(readFileSync(h.capture,"utf8")).toBe(before);
    await fresh.releaseUsagePause(r.sid,r.mid);
    expect(existsSync(join(h.paths.dataDir,"workers/active-task.json"))).toBe(false);
    expect(read<TaskJournal>(fresh.taskFile(r.sid,r.mid)).result).toEqual(r.result);
  });
  it.each(["crash","malformed"])("preserves partial output and does not invent completion for %s",async mode=>{
    const h=fixture({mode}),r=await task(h);expect(r.result.status).toBe("failed");expect(existsSync(r.journal.eventFile)).toBe(true);
    expect((await h.worker.submit(r.sid,r.mid,"retry")).status).toBe("uncertain");
  });
  it("reports missing transcripts as unknown even when fake output completed",async()=>{
    const h=fixture({missingTranscript:true}),r=await task(h);expect(r.result.status).toBe("completed");expect(await h.worker.findMessage(r.sid,r.mid)).toBe("unknown");
  });
  it("pauses on model mismatch and tool permission denial",async()=>{
    expect((await task(fixture({model:"claude-opus-5-5"}))).result.status).toBe("model_mismatch");
    const r=await task(fixture({calls:1,tool:"mcp__playwright__browser_type",toolInput:{text:"Control+A"},invokeHook:true}));
    expect(r.result.status).toBe("blocked");expect(readFileSync(r.journal.eventFile,"utf8")).toContain("browser_press_key");
  });
  it("ports completed-read and missing-ref loop monitors",async()=>{
    expect((await task(fixture({calls:6}))).result.status).toBe("stalled");
    expect((await task(fixture({calls:6,toolInput:{target:"e1"},toolError:"Ref e1 not found in the current page snapshot"}))).result.status).toBe("stalled");
  });
  it("enforces turn and wall budgets with owned abort",async()=>{
    const turns=fixture({calls:3});turns.cfg.worker.maxTurns=1;
    expect((await task(turns)).result.status).toBe("turn_limit");
    const hang=fixture({mode:"hang"});hang.cfg.worker.taskTimeoutMinutes=0.05;
    expect((await task(hang)).result.status).toBe("timeout");
  },20_000);
  it("bounded task bypasses coordinator and retains brief/evidence/transcript manifest",async()=>{
    const h=fixture({write:{"evidence/EXP-900/new.txt":"fake evidence"}});
    const r=await boundedTask(h.cfg,h.paths,"EXP-900","Inspect FX_FixtureForm01",{},h.worker);
    expect(r.result.status).toBe("completed");const manifest=read<Record<string,any>>(r.manifest);
    expect(manifest.brief.experiment_id).toBe("EXP-900");expect(manifest.evidenceDiff.added).toContain("evidence/EXP-900/new.txt");
    expect(manifest.instruction).toBe("Inspect FX_FixtureForm01");expect(manifest.result.transcript).toContain('"type":"result"');
    await expect(boundedTask(h.cfg,h.paths,"EXP-900","Start EXP-901",{},h.worker)).rejects.toThrow("foreign_experiment");
  });
  it("only one task can hold the shared browser lease",async()=>{
    const h=fixture({mode:"hang"});const sid=await h.worker.createSession("EXP-900 busy"),mid=h.worker.newMessageId();
    await h.worker.configureSession(sid,{denyBrowserJavaScript:true,preamble:"bounded"});await h.worker.submit(sid,mid,"first");
    try{const other=await h.worker.createSession("EXP-900 other");await h.worker.configureSession(other,{denyBrowserJavaScript:true,preamble:"bounded"});
      expect((await h.worker.submit(other,h.worker.newMessageId(),"second")).status).toBe("rejected");
    }finally{await h.worker.waitForCompletion(sid,mid,{timeoutMs:5000,shouldStop:()=>true});}
  },15_000);
});
describe("metadata, billing and permission policy",()=>{
  it("strips both billing keys case-insensitively without modifying the parent",async()=>{
    const h=fixture(),parent={ANTHROPIC_API_KEY:"private",anthropic_auth_token:"private",KEEP:"yes"};
    expect(childEnvironment(h.cfg,parent)).toMatchObject({KEEP:"yes"});expect(childEnvironment(h.cfg,parent)).not.toHaveProperty("ANTHROPIC_API_KEY");
    expect(parent.ANTHROPIC_API_KEY).toBe("private");h.cfg.claude.billing="api";expect(childEnvironment(h.cfg,parent)).toMatchObject(parent);
    h.cfg.claude.billing="subscription";expect(()=>childEnvironment(h.cfg,{ANTHROPIC_BASE_URL:"https://example.invalid"})).toThrow("routing");
    expect((await diagnostic(h.cfg,["--version"])).stdout).toContain("fake Claude");
    expect(await h.worker.restartOwnedBackend()).toBe(false);
  });
  it("generates native Read/Edit denies using normalized Windows drive paths and only the three-purpose hook",()=>{
    const h=fixture(),sid=randomUUID(),p=generatedPolicy(h.cfg,h.paths,sid,{denyBrowserJavaScript:true});
    expect(absolutePattern("C:/AI/mongoose-secrets")).toBe("//c/AI/mongoose-secrets");
    expect(p.settings.permissions.deny).toContain("Read(//c/AI/mongoose-secrets/**)");
    expect(p.settings.permissions.deny).toContain("Bash");expect(p.settings.hooks.PreToolUse).toHaveLength(1);
    expect(p.tools).toEqual(["Read","Write","Edit","Glob","Grep"]);
    expect(()=>generatedPolicy(h.cfg,h.paths,sid,{denyBrowserJavaScript:true,exactValues:["Keyboard","keyboard"]})).toThrow("Conflicting");
  });
  it("rejects malformed/truncated/foreign native transcripts and checks exact marker lines",()=>{
    const h=fixture(),sid=randomUUID(),mid=randomUUID(),file=transcriptPath(h.cfg.claude.configDir!,h.root,sid);
    mkdirSync(join(file,".."),{recursive:true});
    const event={type:"user",sessionId:sid,cwd:h.root,message:{content:[{type:"text",text:marker(mid)}]}};
    writeFileSync(file,JSON.stringify(event)+"\n");expect(findMarker(file,h.root,sid,mid)).toBe("present");
    expect(findMarker(file,h.root,sid,randomUUID())).toBe("absent");
    writeFileSync(file,JSON.stringify(event));expect(findMarker(file,h.root,sid,mid)).toBe("unknown");
    writeFileSync(file,JSON.stringify({...event,cwd:tmpdir()})+"\n");expect(findMarker(file,h.root,sid,mid)).toBe("unknown");
  });
  it("does not let compaction or startup alone prove completion and defers loop decisions while tools run",()=>{
    const sid=randomUUID(),e=new TaskEvents(sid);e.add({type:"system",subtype:"compact_boundary",session_id:sid});expect(e.terminal).toBeNull();
    e.add({type:"assistant",message:{id:"a",content:[{type:"tool_use",id:"t",name:"mcp__playwright__browser_snapshot",input:{}}]}});
    expect(e.loop(1,1,1)).toBeNull();e.feed('{"type":"result"');e.finish();expect(e.invalid).toContain("Truncated");
  });
});
