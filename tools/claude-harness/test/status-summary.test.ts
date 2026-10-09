import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { renderSummary, resumeCommand } from "../src/status.js";
import { fixtureBrief, harness } from "../src/testing/scenario.js";
import { actionAudit } from "../src/controller/action-audit.js";
import { HARNESS_DIR, ConfigSchema, resolvePaths } from "../src/config.js";
import { Store } from "../src/store.js";

const close:Array<()=>void>=[];afterEach(()=>close.splice(0).forEach(fn=>fn()));
function fixture() {
  const h=harness({coordinator:[]});close.push(()=>h.store.close());
  const run=h.controller.createRun(fixtureBrief());
  const op=h.store.createOp({runId:run.id,kind:"worker",purpose:"T1",cycleId:1,messageId:"fake-message",payloadText:"fixture",payloadPath:"fixture.md",meta:{actionAudit:actionAudit("","T1","blocked")}});
  h.store.updateRun(run.id,{status:"paused",state:"WORKER_PENDING",pending_op_id:op.id});
  return {...h,run,op};
}
describe("local operator summary (fakes only)",()=>{
  it("lists task headlines, latest coordinator action/reason, pending item and denial resume command",()=>{
    const h=fixture();h.store.addDecision({run_id:h.run.id,cycle_id:1,inbound_id:1,action:"SEND_TO_OPENCODE",method:"deterministic",status:"accepted",envelope:{reason:"Inspect FX form"},reasons:[]});
    const run=h.store.updateRun(h.run.id,{pause_reason:"completed_with_denials"});
    const summary=renderSummary(h.store,run);
    expect(summary).toContain("T1 [planned]: 0 actions, 0 reads");expect(summary).toContain("prohibited-tool hits=0; errors=0; turns=0");
    expect(summary).toContain("Latest coordinator action: SEND_TO_OPENCODE; reason: Inspect FX form");expect(summary).toContain(`Pending: #${h.op.id} worker/T1`);
    expect(summary).toContain(`claude-harness resume --run ${run.id} --approve denials`);
  });
  it.each([
    ["operator_preconditions"," --confirm-preconditions"],
    ["review:scope"," --approve scope"],
    ["review:attachment_required"," --approve attachment"],
    ["review:candidate"," --approve candidate"],
    ["invalid_coordinator_response"," --reask"],
    ["worker_timeout",""],["submission_uncertain",""],
  ])("shows the exact %s resume option without approving an uncertain replay",(pause_reason,suffix)=>{
    const h=fixture(),run=h.store.updateRun(h.run.id,{pause_reason});expect(resumeCommand(h.store,run)).toBe(`claude-harness resume --run ${run.id}${suffix}`);
  });
  it("shows usage continuation only after reset and leaves completed runs without a resume",()=>{
    const h=fixture(),run=h.store.updateRun(h.run.id,{pause_reason:"usage_limit"});
    expect(renderSummary(h.store,run)).toContain("After the usage-limit reset:");expect(resumeCommand(h.store,run)).toContain("--continue-after-usage");
    const opinion=h.store.createOp({runId:run.id,kind:"specialist",purpose:"CONSULTATION",cycleId:2,payloadText:"fixture",payloadPath:"fixture.md"});
    expect(resumeCommand(h.store,h.store.updateRun(run.id,{pending_op_id:opinion.id}))).toContain("--continue-chat-after-usage specialist");
    expect(resumeCommand(h.store,h.store.updateRun(run.id,{status:"completed"}))).toBeNull();
  });
  it("provides an executable increase for a pending limit",()=>{
    const h=fixture(),run=h.store.updateRun(h.run.id,{pause_reason:"limit:maxWorkerTasks"});expect(resumeCommand(h.store,run)).toBe(`claude-harness resume --run ${run.id} --limit maxWorkerTasks=${run.limits.maxWorkerTasks*2}`);
  });
  it("status --summary reads the latest local run without browser or model adapters",()=>{
    const folder=mkdtempSync(join(tmpdir(),"status-cli-")),cfg=ConfigSchema.parse({dataDir:folder}),paths=resolvePaths(cfg),store=new Store(paths.dbFile);
    const brief=fixtureBrief();
    const create=(id:string)=>store.createRun({id,experimentId:"EXP-900",briefPath:brief.path,briefHash:brief.hash,briefJson:JSON.stringify(brief.brief),limits:cfg.limits});
    create("R-older");const run=create("R-latest");
    const op=store.createOp({runId:run.id,kind:"worker",purpose:"T1",cycleId:1,payloadText:"fixture",payloadPath:"fixture.md",meta:{actionAudit:actionAudit("","T1","blocked")}});
    store.updateRun(run.id,{status:"paused",pause_reason:"completed_with_denials",pending_op_id:op.id});
    store.close();const file=join(folder,"config.json");writeFileSync(file,JSON.stringify(cfg));
    const output=execFileSync(process.execPath,[join(HARNESS_DIR,"dist/cli.js"),"--config",file,"status","--summary"],{encoding:"utf8",timeout:10000,windowsHide:true});
    expect(output).toContain("R-latest / EXP-900");expect(output).not.toContain("R-older");expect(output).toContain("T1 [planned]: 0 actions");
    expect(output).toContain("claude-harness resume --run R-latest --approve denials");
  });
});
