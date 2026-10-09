import type { Command } from "commander";
import { join, resolve, sep } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { BriefSchema, briefProblems, loadBrief } from "../../brief.js";
import { loadConfig, resolvePaths, type HarnessConfig, type ResolvedPaths } from "../../config.js";
import { diffSnapshots, snapshotDirs, watchedDirs } from "../../controller/evidence.js";
import { briefForCoordinator, fillWorkerPreamble, protocolBlock } from "../../protocol/prompts.js";
import { scopeViolations } from "../../protocol/validate.js";
import { ClaudeWorker, type TaskJournal } from "./worker.js";
import { read, save } from "./files.js";
import { workerPolicyForBrief } from "./tool-policy.js";
import { actionAudit, auditHeadline, persistAudit, type ActionAudit } from "../../controller/action-audit.js";
import { prepareWorkerWindow } from "../../controller/window-preflight.js";

export interface TaskOptions { model?:string;effort?:string;session?:string;continueFrom?:string }
export function taskExitCode(result:import("../types.js").WorkerResult):0|2|3 {
  return result.status!=="completed"?2:result.permissionDenials?.length?3:0;
}
export function taskOutput(task:{sessionId:string;messageId:string;manifest:string;result:import("../types.js").WorkerResult},journal:TaskJournal,manifest:Record<string,any>) {
  return {sessionId:task.sessionId,messageId:task.messageId,status:task.result.status,manifest:task.manifest,eventTranscript:journal.eventFile,nativeTranscript:journal.nativeTranscript,
    assistantTurns:journal.metrics?.assistantTurns??null,wallTimeSeconds:journal.metrics?.wallTimeSeconds??null,guardDenials:journal.metrics?.guardDenials??null,guardDenialsFile:journal.guardDenialsFile??null,
    evidenceDiff:manifest.evidenceDiff,windowState:manifest.windowState??null,bounds:manifest.bounds??null,exitCode:taskExitCode(task.result),
    auditHeadline:manifest.actionAudit?auditHeadline(manifest.actionAudit as ActionAudit):null,auditFiles:manifest.auditFiles??null,windowRestore:manifest.windowRestore??null,
    ...("permissionDenials" in task.result?{permissionDenials:task.result.permissionDenials}:{}),
    ...("warning" in task.result?{outcome:"completed_with_denials",warning:task.result.warning}:{}),
    ...("touchedFiles" in task.result?{touchedFiles:task.result.touchedFiles}:{}),...("text" in task.result?{report:task.result.text.slice(0,4000)}:{}),...("detail" in task.result?{detail:task.result.detail}:{})};
}
export async function boundedTask(cfg:HarnessConfig,paths:ResolvedPaths,experimentId:string,instruction:string,opts:TaskOptions={},worker?:ClaudeWorker) {
  if(!/^EXP-\d{3,}(?:-R\d+)?$/.test(experimentId)||!instruction.trim())throw Error("Task needs an experiment ID and nonempty instruction");
  const loaded=loadBrief(experimentId,paths.briefsDir),brief=BriefSchema.parse(loaded.brief);
  const problems=[...briefProblems(brief,paths.factoryRoot),...scopeViolations(instruction,brief)];
  if(brief.experiment_id!==experimentId)problems.push("Brief experiment ID mismatch");
  const evidence=resolve(paths.factoryRoot,brief.evidence_dir),expected=resolve(paths.factoryRoot,"evidence",experimentId);
  if(evidence!==expected&&!evidence.startsWith(expected+sep))problems.push("Evidence directory is outside selected experiment");
  if(problems.length)throw Error(`Task blocked before model submission: ${problems.join("; ")}`);
  if(brief.worker)cfg.claude.models.worker={...brief.worker};
  if(opts.model)cfg.claude.models.worker.model=opts.model;
  if(opts.effort){if(!["low","medium","high","xhigh","max"].includes(opts.effort))throw Error("Invalid effort");cfg.claude.models.worker.effort=opts.effort as "high";}
  worker??=new ClaudeWorker({config:cfg,paths});
  const ready=await worker.health();if(!ready.ok)throw Error(ready.detail??"Worker is not ready");
  const window=await prepareWorkerWindow(worker,cfg);
  const sid=opts.session??await worker.createSession(`${experimentId} standalone task`);
  if(opts.session&&!read<{title:string}>(worker.sessionFile(sid)).title.startsWith(experimentId+" "))throw Error("Session belongs to a different experiment");
  if(opts.continueFrom){if(!opts.session)throw Error("--continue-from requires --session and a new explicit instruction");await worker.releaseUsagePause(sid,opts.continueFrom);}
  const mid=worker.newMessageId(),runId=`worker-task-${randomUUID()}`;
  const preamble=fillWorkerPreamble(protocolBlock(paths.protocolDir,"worker-preamble.md"),brief,runId,1,mid);
  await worker.configureSession(sid,{...workerPolicyForBrief(brief),preamble});
  const before=snapshotDirs(paths.factoryRoot,watchedDirs(brief.evidence_dir));
  const manifest=join(paths.dataDir,"worker-tasks",`${mid}.json`);
  save(manifest,{sessionId:sid,messageId:mid,runId,experimentId,briefPath:loaded.path,briefHash:loaded.hash,brief, instruction,model:cfg.claude.models.worker,preamble,...window,evidenceBefore:before,state:"planned"});
  let interrupted=false;const onInterrupt=()=>{interrupted=true;};process.on("SIGINT",onInterrupt);
  try {
    const submission=await worker.submit(sid,mid,`REVIEWED BRIEF:\n${briefForCoordinator(brief)}\n\nOPERATOR INSTRUCTION:\n${instruction}`);
    save(manifest,{...read<Record<string,unknown>>(manifest),submission});
    if(submission.status==="rejected")throw Error(submission.detail??"Task rejected");
    const result=await worker.waitForCompletion(sid,mid,{timeoutMs:cfg.worker.taskTimeoutMinutes*60_000,shouldStop:()=>interrupted});
    const after=snapshotDirs(paths.factoryRoot,watchedDirs(brief.evidence_dir));
    const journal=read<TaskJournal>(worker.taskFile(sid,mid));
    const audit=actionAudit(await worker.taskTranscript(sid,mid),mid,result.status,brief.exact_values);
    const auditFiles=persistAudit(paths.factoryRoot,brief.evidence_dir,join(paths.runsDir,runId),audit);
    save(manifest,{...read<Record<string,unknown>>(manifest),state:result.status==="usage_limit"?"paused":"finished",pauseReason:result.status==="usage_limit"?"usage_limit":null,result,metrics:journal.metrics??null,actionAudit:audit,auditFiles,evidenceAfter:after,evidenceDiff:diffSnapshots(before,after)});
    return {sessionId:sid,messageId:mid,manifest,result};
  }finally{process.off("SIGINT",onInterrupt);}
}

export function registerWorkerCommands(program:Command) {
  const group=program.command("worker").description("One bounded Claude worker task; no coordinator");
  group.command("task <experimentId> <instruction>").option("--model <model>","Explicit worker model override for a fresh replay session")
    .option("--effort <effort>","Worker effort override").option("--session <uuid>","Explicit existing owned session")
    .option("--continue-from <messageId>","Operator continuation after an expected usage pause; does not replay the old task")
    .action(async(id,instruction,opts)=>{const {config}=loadConfig(program.opts().config);const task=await boundedTask(config,resolvePaths(config),id,instruction,opts);
      const manifest=read<Record<string,any>>(task.manifest),journal=read<TaskJournal>(new ClaudeWorker({config,paths:resolvePaths(config)}).taskFile(task.sessionId,task.messageId));
      console.log(JSON.stringify(taskOutput(task,journal,manifest),null,2));
      process.exitCode=taskExitCode(task.result);});
  group.command("reconcile <sessionId> <messageId>").description("Inspect marker and durable task journal; never launches Claude/browser")
    .action(async(sid,mid)=>{const {config}=loadConfig(program.opts().config),paths=resolvePaths(config),worker=new ClaudeWorker({config,paths});
      const presence=await worker.findMessage(sid,mid),file=worker.taskFile(sid,mid),journal=existsSync(file)?read<TaskJournal>(file):null;
      console.log(JSON.stringify({presence,journalPath:file,state:journal?.state,result:journal?.result??null},null,2));});
  group.command("abort <sessionId>").description("Stop only the owned Claude task tree; leaves MCP/Chrome alive")
    .action(async sid=>{const {config}=loadConfig(program.opts().config);const aborted=await new ClaudeWorker({config,paths:resolvePaths(config)}).abort(sid);console.log(JSON.stringify({aborted}));if(!aborted)process.exitCode=2;});
}
