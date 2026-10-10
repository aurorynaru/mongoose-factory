import type { ChildProcessWithoutNullStreams } from "node:child_process";
import { randomUUID } from "node:crypto";
import { appendFileSync, existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { StringDecoder } from "node:string_decoder";
import type { HarnessConfig, ResolvedPaths } from "../../config.js";
import { McpService } from "../../backend/mcp-service.js";
import type { ChromeWindow } from "../../backend/chrome-window.js";
import type { WorkerPort, WorkerResult, WorkerToolPolicy } from "../types.js";
import { TaskEvents, modelMatches } from "./events.js";
import { hash, read, save } from "./files.js";
import { gitState, touched, type GitState } from "./git-state.js";
import { childEnvironment, diagnostic, launch, taskProcess } from "./process.js";
import { findMarker, marker, transcriptPath } from "./transcripts.js";
import { generatedPolicy } from "./tool-policy.js";
import { intentionallyDenied } from "./permissions.js";
import { browserAction, finishAction, type GuardConfig } from "../../hooks/pre-tool-use.js";
import { rolePolicy } from "./role-policy.js";
import type { ChatRole } from "../types.js";

export interface SessionState { id:string; title:string; cwd:string; started:boolean; model:string; policy:WorkerToolPolicy; active:string|null }
export interface TaskJournal {
  sessionId:string; messageId:string; payload:string; preamble:string; agentsHash:string;
  before:GitState; after?:GitState; state:"planned"|"launching"|"running"|"terminal"|"unknown";
  argv:string[]; createdAt:string; result?:WorkerResult; process?:Record<string,unknown>;
  permissionSettings:string; eventFile:string; stderrFile:string; nativeTranscript:string;
  permissionDenyRules?:string[];
  guardConfig?:GuardConfig;
  recoveryEvidence?:Record<string,unknown>;
  finishedAt?:string; guardDenialsFile?:string;
  metrics?:{assistantTurns:number;wallTimeSeconds:number|null;guardDenials:{total:number;byGuard:Record<string,number>;auditError?:string}};
}
interface Active { child:ChildProcessWithoutNullStreams; events:TaskEvents; journal:TaskJournal; finished:Promise<void>; resolve:()=>void; stopReason?:"timeout"|"interrupted"|"turn_limit"|"loop"|"model_mismatch"|"invalid"; detail?:string; exit:number|null; timer:ReturnType<typeof setTimeout>; monitor:ReturnType<typeof setInterval>; stopping:boolean; identityReady:Promise<void>; stopPromise?:Promise<void> }
export interface WorkerOptions { config:HarnessConfig; paths:ResolvedPaths; role?:ChatRole; workingDirectory?:string; healthCheck?:()=>Promise<{ok:boolean;version?:string;detail?:string}>; windowCheck?:()=>Promise<ChromeWindow>; windowRestore?:()=>Promise<ChromeWindow>; restartOwned?:()=>Promise<boolean> }
export class ClaudeWorker implements WorkerPort {
  private readonly active = new Map<string,Active>();
  private readonly service: McpService;
  constructor(readonly o:WorkerOptions) { this.service=new McpService(o.config,o.paths); }
  private get cwd(){return this.o.workingDirectory??this.o.paths.factoryRoot;}
  selectModel(model:HarnessConfig["claude"]["models"]["worker"]) {if(this.active.size)throw Error("Cannot change model while a task is active");this.o.config.claude.models.worker={...model};}
  private policy(sid:string,policy:WorkerToolPolicy,mid?:string){return this.o.role?rolePolicy(this.o.config,this.o.paths,sid,this.o.role,this.cwd,mid):generatedPolicy(this.o.config,this.o.paths,sid,policy,mid);}
  sessionFile(id:string) { this.validateId(id);return join(this.o.paths.dataDir,"workers",id,"session.json"); }
  taskFile(sid:string,mid:string) { this.validateId(mid);return join(this.o.paths.dataDir,"workers",sid,"tasks",`${mid}.json`); }
  private validateId(id:string) { if(!/^[\da-f]{8}-(?:[\da-f]{4}-){3}[\da-f]{12}$/i.test(id))throw Error("Invalid owned UUID"); }
  private session(id:string) { const s=read<SessionState>(this.sessionFile(id));if(s.id!==id||s.cwd!==this.cwd)throw Error("Worker session scope mismatch");return s; }
  async health() {
    if(this.o.healthCheck)return this.o.healthCheck();
    try {
      const version=await diagnostic(this.o.config,["--version"]),auth=await diagnostic(this.o.config,["auth","status"]);
      if(version.code||auth.code)return {ok:false,detail:"Claude diagnostic failed"};
      const status=JSON.parse(auth.stdout);
      if(!status.loggedIn||(this.o.config.claude.billing==="subscription"&&status.authMethod!=="claude.ai"))return {ok:false,detail:"Required Claude subscription login unavailable"};
      if(!this.o.role&&!(await this.service.health(false)).ok)return {ok:false,detail:"Owned Chrome/MCP must already be healthy; worker health does not start them"};
      return {ok:true,version:version.stdout.trim()};
    }catch{return {ok:false,detail:"Claude/auth/owned MCP health failed"};}
  }
  async createSession(title:string) {
    const id=randomUUID();save(this.sessionFile(id),{id,title,cwd:this.cwd,started:false,model:this.o.config.claude.models.worker.model,policy:{denyBrowserJavaScript:false},active:null} satisfies SessionState);return id;
  }
  async windowState() { return this.o.windowCheck?this.o.windowCheck():this.service.windowState(); }
  async restoreWindow() { return this.o.windowRestore?this.o.windowRestore():this.service.restoreWindow(); }
  async taskTranscript(sid:string,mid:string) {
    const j=read<TaskJournal>(this.taskFile(sid,mid));
    return existsSync(j.eventFile)?readFileSync(j.eventFile,"utf8"):"";
  }
  async setTaskPreamble(id:string,preamble:string) { const s=this.session(id);if(this.active.has(id))throw Error("Worker session is busy");s.policy.preamble=preamble;save(this.sessionFile(id),s); }
  async configureSession(id:string,policy:WorkerToolPolicy) {
    const s=this.session(id);if(this.active.has(id))throw Error("Worker session is busy");
    if(s.active){const previous=read<TaskJournal>(this.taskFile(id,s.active));if(!previous.result)throw Error("Previous worker task needs reconciliation");}
    s.policy={...s.policy,...policy,denyBrowserJavaScript:s.policy.denyBrowserJavaScript||policy.denyBrowserJavaScript};
    if(!existsSync(join(this.o.paths.harnessDir,"dist/hooks/pre-tool-use.js")))throw Error("Compiled guard hook missing; build before submission");
    this.policy(id,s.policy);save(this.sessionFile(id),s);
  }
  newMessageId() { return randomUUID(); }
  async findMessage(sid:string,mid:string) {
    this.session(sid);this.validateId(mid);
    return findMarker(transcriptPath(this.o.config.claude.configDir??join(homedir(),".claude"),this.cwd,sid),this.cwd,sid,mid);
  }
  async submit(sid:string,mid:string,text:string):Promise<{status:"accepted"|"uncertain"|"rejected";detail?:string}> {
    const s=this.session(sid);this.validateId(mid);
    if(this.active.has(sid))return {status:"rejected",detail:"Another task is active"};
    if(existsSync(this.taskFile(sid,mid)))return {status:"uncertain",detail:"Task already journaled; reconcile it, never automatically resubmit"};
    if(s.active&&!read<TaskJournal>(this.taskFile(sid,s.active)).result)return {status:"uncertain",detail:"Prior task may be active; reconcile first"};
    if(s.model!==this.o.config.claude.models.worker.model)return {status:"rejected",detail:"Session model differs; choose a fresh session explicitly for replay"};
    const cfg=this.o.config,paths=this.o.paths;
    try { childEnvironment(cfg); }catch {return {status:"rejected",detail:"Subscription billing environment failed validation"};}
    const agents=readFileSync(join(paths.factoryRoot,"AGENTS.md"),"utf8");
    if(!s.policy.preamble)return {status:"rejected",detail:"Bounded task preamble is required"};
    const identity=`worker_session_id: ${sid} (this is your worker session UUID for identity/freshness checks); task_message_id: ${mid}`;
    const policy=this.policy(sid,s.policy,mid),mcp=this.o.role?(policy as ReturnType<typeof rolePolicy>).mcp:this.service.generateWorkerConfig();
    const preamble=this.o.role?[`Claude role: ${this.o.role}; session_id: ${sid}`,s.policy.preamble,"AGENTS.md (explicit authoritative instructions):",agents].join("\n"):[identity,s.policy.preamble,
      "The brief's scope and prohibitions are already included in this task. tools/ (including briefs/) is intentionally unreadable; do not try to read these files.",
      policy.tools.includes("Bash")?"Bash is explicitly enabled for this task; use it only within the supplied scope and prohibitions.":"Bash is disabled for this task; do not try to use it. Bash is disabled unless explicitly enabled by the generated tool policy.",
      'If an action times out at "visible, enabled and stable" while the locator resolves, treat it as a possible rendering or environment problem. Do not repeat the same action more than the brief allows; record the exact error and report a suspected environment blocker.',
      "The harness computes repository confinement itself from before/after Git state and the evidence diff. You do not need git status; state only which files you wrote.",
      "Never issue browser ACTIONS in parallel (click, press_key, type, select_option, navigate, drag, file upload, dialog handling, or other browser mutations). Send one action, wait for its result, then send the next. Parallel read-only calls (snapshot, find, screenshot, tabs listing, console, Read/Grep/Glob) are allowed.",
      'After a "Ref ... not found" error, take one fresh untargeted snapshot, counted against the fresh-snapshot recovery allowance, before using any new ref. A targeted find is not a substitute. If that allowance is exhausted, preserve state and report a blocker; do not use new refs.',
      "\nAGENTS.md (explicit authoritative instructions):",agents,
      "Start each task with a fresh snapshot of the visible tab; verify Form identity and editing scope before acting. Never reuse old accessibility refs.",
      'End each task in a stable page state with no browser-native dialogs (alert, confirm, prompt, or beforeunload "leave page") and no unsaved-change prompts. CDP disconnect dismisses beforeunload dialogs. In-page Mongoose dialogs (such as Select Form) may remain open only when the current task instruction explicitly says to leave them open; otherwise end without open in-page dialogs. Never discard unsaved work or take an out-of-scope lifecycle action to achieve stability; checkpoint and report a blocker instead.',
      "Only this bounded task is authorized. Tools, a fresh session and usage-limit resets never expand scope. On a limit preserve state and report; never resubmit or switch models."].join("\n");
    // The system prompt goes through a file: with AGENTS.md and a long brief it exceeds the Windows 32,767-character command line.
    const dir=join(paths.dataDir,"workers",sid,"tasks");mkdirSync(dir,{recursive:true});
    const promptFile=join(dir,`${mid}.system-prompt.md`);writeFileSync(promptFile,preamble,"utf8");
    const args=["-p",s.started?"--resume":"--session-id",sid,"--output-format","stream-json","--verbose","--input-format","text","--model",s.model,
      ...(cfg.claude.models.worker.effort?["--effort",cfg.claude.models.worker.effort]:[]),"--append-system-prompt-file",promptFile,"--system-prompt-snapshot","off",
      "--mcp-config",mcp,"--strict-mcp-config","--tools",policy.tools.join(","),"--allowedTools",(this.o.role?policy.settings.permissions.allow:[...policy.tools,"mcp__playwright__*"]).join(","),
      "--disallowedTools",policy.deny.filter(r=>!r.includes("(")).join(","),"--permission-mode","dontAsk","--permission-prompts","none","--settings",policy.settingsFile,"--setting-sources","","--disable-slash-commands"];
    const payload=marker(mid)+"\n"+identity+"\n"+text;
    const journal:TaskJournal={sessionId:sid,messageId:mid,payload,preamble,agentsHash:hash(agents),before:gitState(paths.factoryRoot),state:"planned",argv:args,createdAt:new Date().toISOString(),permissionSettings:policy.settingsFile,eventFile:join(dir,`${mid}.events.jsonl`),stderrFile:join(dir,`${mid}.stderr.txt`),nativeTranscript:transcriptPath(cfg.claude.configDir??join(homedir(),".claude"),this.cwd,sid)};
    journal.guardDenialsFile=policy.denialFile;
    journal.permissionDenyRules=[...policy.deny];
    journal.guardConfig=read<GuardConfig>(policy.guardConfig);
    writeFileSync(policy.denialFile,"");
    const lease=join(paths.dataDir,"workers","active-task.json");
    try{writeFileSync(lease,JSON.stringify({sessionId:sid,messageId:mid}),{flag:"wx"});}
    catch{return {status:"rejected",detail:"Another task or expected usage-limit pause holds the worker lease. Reconcile it; do not start a concurrent browser task."};}
    save(this.taskFile(sid,mid),journal);s.active=mid;save(this.sessionFile(sid),s);
    journal.state="launching";save(this.taskFile(sid,mid),journal);
    const guardConfig=journal.guardConfig;
    let child:ReturnType<typeof launch>;
    try{child=launch(cfg,this.cwd,args);}
    catch(err) {
      // A synchronous spawn failure (e.g. ENAMETOOLONG) starts no process: release the lease and record it.
      journal.state="terminal";journal.result={status:"failed",error:`Claude process could not be started (no process ran): ${(err as Error).message}`,text:"",transcript:"",assistantMessageIds:[]};
      save(this.taskFile(sid,mid),journal);s.active=null;save(this.sessionFile(sid),s);unlinkSync(lease);
      return {status:"rejected",detail:journal.result.error};
    }
    const events=new TaskEvents(sid,(id,name)=>{
      // Read results cannot release an action. The exact action ID is checked under lock.
      if(browserAction(name,{}))finishAction({session_id:sid,tool_name:name,tool_use_id:id},guardConfig);
    });
    let resolveFinish!:()=>void;const finished=new Promise<void>(resolve=>{resolveFinish=resolve;});
    const a:Active={child,events,journal,finished,resolve:resolveFinish,exit:null,stopping:false,identityReady:Promise.resolve(),timer:setTimeout(()=>{},1),monitor:setInterval(()=>{},60_000)};
    clearTimeout(a.timer);clearInterval(a.monitor);this.active.set(sid,a);
    const stdoutDecoder=new StringDecoder("utf8"),stderrDecoder=new StringDecoder("utf8");
    child.stdout.on("data",chunk=>{const decoded=stdoutDecoder.write(chunk);appendFileSync(journal.eventFile,decoded);events.feed(decoded);void this.inspect(a);});
    child.stderr.on("data",chunk=>appendFileSync(journal.stderrFile,stderrDecoder.write(chunk)));
    child.stdin.on("error",()=>{journal.state="unknown";save(this.taskFile(sid,mid),journal);});
    child.on("error",()=>{events.invalid="Claude process spawn failed";});
    child.on("close",code=>{a.exit=code;events.feed(stdoutDecoder.end());events.finish();clearTimeout(a.timer);clearInterval(a.monitor);void this.complete(a).catch(()=>{
      a.journal.result={status:"failed",error:"Task exited but result/evidence journal failed; inspect artifacts before continuing",text:events.text,transcript:"",assistantMessageIds:events.ids};
      try{save(this.taskFile(sid,mid),a.journal);}catch{/* preserve existing on-disk checkpoint */}
    }).finally(()=>resolveFinish());});
    a.identityReady=new Promise<void>(resolve=>{child.once("error",()=>resolve());child.once("spawn",()=>{void (async()=>{
      s.started=true;save(this.sessionFile(sid),s);journal.state="running";save(this.taskFile(sid,mid),journal);
      const identity=await taskProcess(paths,["-Action","inspect","-ProcessId",String(child.pid)]);
      if(identity.kind==="worker"){journal.process=identity;save(join(dir,`${mid}.process.json`),identity);save(this.taskFile(sid,mid),journal);}resolve();
    })().catch(()=>resolve());});});
    child.once("error",()=>resolveFinish());
    a.timer=setTimeout(()=>{void this.stopActive(a,"timeout","Worker wall-time budget reached; preserve partial state");},cfg.worker.taskTimeoutMinutes*60_000);
    a.monitor=setInterval(()=>{void this.inspect(a);},250);
    child.stdin.end(payload);
    // Receipt is established only by a native transcript marker, not local stdin.
    const receiptDeadline=Date.now()+Math.min(5000,cfg.worker.taskTimeoutMinutes*60_000);
    while(Date.now()<receiptDeadline) {
      if(await this.findMessage(sid,mid)==="present")return {status:"accepted"};
      if(child.exitCode!==null)break;
      await new Promise(r=>setTimeout(r,50));
    }
    return {status:"uncertain",detail:"Payload journaled and process launched; acceptance awaits native transcript marker"};
  }
  private async inspect(a:Active) {
    if(a.stopping||a.child.exitCode!==null)return;
    const e=a.events,c=this.o.config;
    if(e.pending.size)return;
    if(e.invalid)return this.stopActive(a,"invalid",e.invalid);
    if(e.model&&!modelMatches(c.claude.models.worker.model,e.model))return this.stopActive(a,"model_mismatch",`Configured ${c.claude.models.worker.model}; observed ${e.model}`);
    const loop=e.loop(c.worker.maxSnapshotRefFailures,c.worker.maxRepeatedBrowserReads,c.worker.maxRepeatedShellCalls);
    if(loop)return this.stopActive(a,"loop",loop);
    if(e.turns.size>c.worker.maxTurns)return this.stopActive(a,"turn_limit",`Agent turn limit ${c.worker.maxTurns} exceeded at safe completed-tool boundary`);
  }
  private stopActive(a:Active,reason:Active["stopReason"],detail:string):Promise<void> {
    if(a.stopPromise)return a.stopPromise;a.stopping=true;a.stopReason=reason;a.detail=detail;
    a.stopPromise=(async()=>{
      await a.identityReady;
      const stopped=await this.abort(a.journal.sessionId);
      if(!stopped){a.detail+="; could not confirm owned task stopped";a.resolve();}
    })();
    return a.stopPromise;
  }
  private async complete(a:Pick<Active,"events"|"journal"|"exit"|"stopReason"|"detail">&{child:Pick<ChildProcessWithoutNullStreams,"exitCode">;recovered?:boolean}) {
    const e=a.events,j=a.journal,base={text:e.text,transcript:existsSync(j.eventFile)?readFileSync(j.eventFile,"utf8"):"",assistantMessageIds:e.ids};
    j.after=gitState(this.o.paths.factoryRoot);
    let result:WorkerResult;
    if(a.stopReason==="model_mismatch")result={status:"model_mismatch",detail:a.detail!};
    else if(a.stopReason==="loop")result={status:"stalled",detail:a.detail!,aborted:a.child.exitCode!==null,...base};
    else if(a.stopReason==="turn_limit")result={status:"turn_limit",detail:a.detail!,...base};
    else if(a.stopReason==="timeout")result={status:"timeout",detail:a.detail!};
    else if(a.stopReason==="interrupted")result={status:"interrupted"};
    else if(e.usageLimit)result={status:"usage_limit",detail:e.usageLimit,...base};
    else if(e.invalid||!e.terminal||!e.model||!modelMatches(this.o.config.claude.models.worker.model,e.model)||e.pending.size)
      result={status:"failed",error:e.invalid||"Missing terminal/init event or unfinished tools; completion unproven",...base};
    else if(e.permissionDenied&&((a.exit!==0&&!a.recovered)||e.terminal.is_error||e.terminal.subtype!=="success"||!e.permissionDenials.length||
      !e.permissionDenials.every(d=>intentionallyDenied(d,j.permissionDenyRules??[],this.o.paths.factoryRoot))))
      result={status:"blocked",kind:"permission",detail:"Claude reported unexpected/unclassified denied tool permissions or no successful terminal result; task completion is not established",permissionDenials:e.permissionDenials};
    else if((a.exit!==0&&!a.recovered)||e.terminal.is_error||e.terminal.subtype!=="success")result={status:"failed",error:String(e.terminal.result??e.terminal.errors??"Claude failed"),...base};
    else {j.after=gitState(this.o.paths.factoryRoot);result={status:"completed",...base,text:typeof e.terminal.result==="string"?e.terminal.result:e.text,touchedFiles:touched(j.before,j.after),cost:Number(e.terminal.total_cost_usd??0),tokens:Number(e.terminal.usage?.input_tokens??0)+Number(e.terminal.usage?.output_tokens??0),
      ...(e.permissionDenied?{permissionDenials:e.permissionDenials,warning:"completed_with_denials: native task succeeded, but intentionally denied tools/paths were attempted. Review permissionDenials, the full report and evidence before continuing manually. Completed does not mean the experiment or acceptance checks passed."}:{})};}
    j.finishedAt=new Date().toISOString();
    const byGuard:Record<string,number>={};let auditError:string|undefined;
    try {
      if(!j.guardDenialsFile)throw Error("missing guard audit path");
      const raw=readFileSync(j.guardDenialsFile,"utf8");
      if(raw&&!raw.endsWith("\n"))throw Error("incomplete guard audit");
      for(const line of raw.split("\n").filter(Boolean)) {
        const item=JSON.parse(line);
        if(item.sessionId!==j.sessionId)throw Error("guard audit scope mismatch");
        if(item.event==="call"||item.event==="stale_lock_recovered"||item.event==="action_completed")continue;
        if((item.event!==undefined&&item.event!=="denial")||typeof item.guard!=="string")throw Error("guard audit entry invalid");
        byGuard[item.guard]=(byGuard[item.guard]??0)+1;
      }
    }catch{auditError="Guard denial audit unavailable/incomplete; inspect native transcript. Count is a lower bound.";}
    j.metrics={assistantTurns:e.turns.size,wallTimeSeconds:a.recovered?null:(Date.parse(j.finishedAt)-Date.parse(j.createdAt))/1000,
      guardDenials:{total:Object.values(byGuard).reduce((n,v)=>n+v,0),byGuard,...(auditError?{auditError}:{})}};
    j.result=result;j.state="terminal";save(this.taskFile(j.sessionId,j.messageId),j);
    if(result.status!=="usage_limit") {
      const lease=join(this.o.paths.dataDir,"workers","active-task.json");
      if(existsSync(lease)) { const owner=read<{sessionId:string;messageId:string}>(lease);
        if(owner.sessionId===j.sessionId&&owner.messageId===j.messageId)unlinkSync(lease); }
    }
    // Keep the session's task reference: the next operation must inspect the terminal journal.
  }
  async waitForCompletion(sid:string,mid:string,opts:{timeoutMs:number;shouldStop:()=>boolean}):Promise<WorkerResult> {
    this.session(sid);const file=this.taskFile(sid,mid);
    const a=this.active.get(sid);
    if(a&&a.journal.messageId===mid){
      const start=Date.now();while(!a.journal.result){
        if(opts.shouldStop())await this.stopActive(a,"interrupted","Operator interrupted task; no backend/browser restart");
        if(Date.now()-start>=opts.timeoutMs)await this.stopActive(a,"timeout","Worker wait budget reached");
        if(a.stopping&&!a.journal.result){await a.stopPromise;await a.finished;if(a.child.exitCode===null)return {status:"stalled",detail:a.detail??"Task stop unconfirmed",aborted:false,text:a.events.text,transcript:existsSync(a.journal.eventFile)?readFileSync(a.journal.eventFile,"utf8"):"",assistantMessageIds:a.events.ids};}
        await new Promise(r=>setTimeout(r,50));
      }
      await a.finished;this.active.delete(sid);return a.journal.result!;
    }
    if(!existsSync(file))return {status:"failed",error:"No owned task journal; do not infer absence or resubmit",text:"",transcript:"",assistantMessageIds:[]};
    const j=read<TaskJournal>(file);
    if(j.result)return j.result;
    if(j.process&&typeof j.process.pid==="number"&&await this.findMessage(sid,mid)==="present") {
      const now=await taskProcess(this.o.paths,["-Action","inspect","-ProcessId",String(j.process.pid)]);
      const originalDead=now.error==="task_not_alive"||(now.kind==="worker"&&["exe","startTicks","commandHash"].some(k=>now[k]!==j.process![k]));
      if(originalDead&&existsSync(j.eventFile)) {
        const raw=readFileSync(j.eventFile,"utf8");const events=new TaskEvents(sid);events.feed(raw);events.finish();
        if(raw.endsWith("\n")&&events.terminal&&!events.invalid&&!events.pending.size) {
          // Reconcile a completion missed when the harness exited. Require native
          // results plus proof the original worker is gone; never expire an action.
          if(j.guardConfig)for(const result of events.history)for(const part of result.parts??[]) {
            if(part.type==="tool"&&browserAction(part.tool??"",{})) {
              try{finishAction({session_id:sid,tool_name:part.tool!,tool_use_id:part.id},j.guardConfig);}
              catch{events.invalid="Guard action completion failed during reconciliation; preserve state and stop";}
            }
          }
          j.recoveryEvidence={marker:"present",originalProcess:"not_alive",source:"complete native stream terminal result",processExitCode:"unavailable",resubmitted:false};
          await this.complete({events,journal:j,exit:null,child:{exitCode:0},recovered:true});return j.result!;
        }
      }
    }
    return {status:"stalled",detail:"Interrupted task has no reliable terminal journal. Inspect its native transcript/process/evidence; never resubmit automatically.",aborted:false,text:"",transcript:existsSync(j.eventFile)?readFileSync(j.eventFile,"utf8"):"",assistantMessageIds:[]};
  }
  async abort(sid:string):Promise<boolean> {
    const s=this.session(sid);if(!s.active)return false;
    const a=this.active.get(sid);
    if(a?.child.exitCode!==null&&a?.child.exitCode!==undefined)return true;
    const file=join(this.o.paths.dataDir,"workers",sid,"tasks",`${s.active}.process.json`);
    if(!existsSync(file))return false;
    const stopped=(await taskProcess(this.o.paths,["-Action","stop","-StateFile",file])).ok===true;
    if(stopped&&!a){const j=read<TaskJournal>(this.taskFile(sid,s.active)),events=new TaskEvents(sid);
      if(existsSync(j.eventFile))events.feed(readFileSync(j.eventFile,"utf8"));events.finish();
      await this.complete({events,journal:j,exit:0,child:{exitCode:0},stopReason:"interrupted",detail:"Explicit operator abort of owned task tree"});}
    return stopped;
  }
  async releaseUsagePause(sid:string,mid:string) {
    this.session(sid);const j=read<TaskJournal>(this.taskFile(sid,mid));
    if(j.state!=="terminal"||j.result?.status!=="usage_limit")throw Error("Only an owned terminal usage-limit pause can be continued");
    const presence=await this.findMessage(sid,mid);
    if(presence!=="present")throw Error(`Paused marker ${presence}; reconcile native transcript before continuing`);
    const lease=join(this.o.paths.dataDir,"workers","active-task.json");
    const owner=read<{sessionId:string;messageId:string}>(lease);
    if(owner.sessionId!==sid||owner.messageId!==mid)throw Error("Worker lease belongs to another task");
    save(join(this.o.paths.dataDir,"workers",sid,"tasks",`${mid}.continue-approved.json`),{sessionId:sid,messageId:mid,at:new Date().toISOString(),presence});
    unlinkSync(lease);
  }
  async restartOwnedBackend() {
    if(this.o.restartOwned)return this.o.restartOwned();
    if(!this.o.config.worker.allowBackendRestart)return false;
    return this.service.restartOwnedBackend();
  }
}
