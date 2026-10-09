import type { Store, RunRow } from "./store.js";
import { pidAlive } from "./store.js";
import { auditHeadline, type ActionAudit } from "./controller/action-audit.js";

export function resumeCommand(store:Store,run:RunRow):string|null {
  if(run.status==="completed"||run.status==="stopped")return null;
  const base=`claude-harness resume --run ${run.id}`,reason=run.pause_reason??"";
  const op=run.pending_op_id?store.getOp(run.pending_op_id):null;
  if(reason==="operator_preconditions")return `${base} --confirm-preconditions`;
  if(reason==="completed_with_denials")return `${base} --approve denials`;
  if(reason==="usage_limit")return op?.kind==="worker"?`${base} --continue-after-usage "Inspect current state and continue the saved bounded task; do not replay prior actions."`:
    op?.kind==="coordinator"||op?.kind==="specialist"?`${base} --continue-chat-after-usage ${op.kind}`:base;
  if(reason==="review:scope")return `${base} --approve scope`;
  if(reason==="review:attachment"||reason==="review:attachment_required")return `${base} --approve attachment`;
  if(reason==="review:candidate")return `${base} --approve candidate`;
  if(reason==="invalid_coordinator_response"||reason.startsWith("review:"))return `${base} --reask`;
  if(reason.startsWith("limit:")) {
    const key=reason.slice(6),max=run.limits[key as keyof typeof run.limits];
    if(typeof max==="number")return `${base} --limit ${key}=${Math.max(1,Math.ceil(max*2))}`;
  }
  // Uncertain submissions are reconciled first, never implicitly approved for replay.
  return base;
}

export function renderSummary(store:Store,run:RunRow|null):string {
  if(!run)return "No runs yet. Start one with: claude-harness start <EXP-ID> --confirm-preconditions";
  const tasks=store.opsForRun(run.id).filter(op=>op.kind==="worker");
  const decision=store.decisions(run.id).at(-1),envelope=decision?.envelope as {reason?:string}|undefined;
  const pending=run.pending_op_id?store.getOp(run.pending_op_id):null,command=resumeCommand(store,run);
  return [
    `${run.id} / ${run.experiment_id}: ${run.status}${run.outcome?` (${run.outcome})`:""}`,
    ...tasks.map(op=>`${op.purpose} [${op.status}]: ${op.meta.actionAudit?auditHeadline(op.meta.actionAudit as ActionAudit):"audit pending/unavailable"}`),
    `Latest coordinator action: ${decision?.action??"(none)"}; reason: ${envelope?.reason??"(none)"}`,
    `Pending: ${pending?`#${pending.id} ${pending.kind}/${pending.purpose} [${pending.status}]`:run.pending_inbound_id?`coordinator decision for inbound #${run.pending_inbound_id}`:"(none)"}${run.pause_reason?`; ${run.pause_reason}`:""}`,
    ...(run.pause_detail?[run.pause_detail]:[]),
    ...(command?[run.pause_reason==="usage_limit"?"After the usage-limit reset:":run.pause_reason?.startsWith("review:")||run.pause_reason==="completed_with_denials"?"After reviewing the pending item:":"Resume (reconciles saved state):",command]:["No resume command: run is finished."]),
  ].join("\n");
}

function bar(used: number, max: number): string {
  const pct = max > 0 ? Math.min(1, used / max) : 1;
  const n = Math.round(pct * 10);
  return `${"#".repeat(n)}${".".repeat(10 - n)} ${used}/${max}`;
}

export function controllerAlive(store: Store, runId: string): { alive: boolean; pid?: number } {
  const l = store.getLease();
  if (!l || l.run_id !== runId) return { alive: false };
  return { alive: Date.now() - l.heartbeat_at < 90_000 && pidAlive(l.pid), pid: l.pid };
}

export function renderStatus(store: Store, run: RunRow | null): string {
  if (!run) return "No runs yet. Start one with: harness start <EXP-ID>";
  const c = run.counters;
  const l = run.limits;
  const op = run.pending_op_id ? store.getOp(run.pending_op_id) : null;
  const ctl = controllerAlive(store, run.id);
  const mins = Math.round(run.active_ms / 60000);
  const recent = store
    .transitions(run.id, 8)
    .map((t) => `  ${t.at.slice(11, 19)}  ${t.event.padEnd(28)} ${t.to_status ?? ""}/${t.to_state ?? ""}`)
    .join("\n");
  const lines = [
    `Run          ${run.id}`,
    `Experiment   ${run.experiment_id}`,
    `Status       ${run.status.toUpperCase()}${run.outcome ? ` (${run.outcome})` : ""}   controller: ${ctl.alive ? `running (pid ${ctl.pid})` : "not running"}`,
    `State        ${run.state}   cycle ${run.cycle_id}`,
    `Last action  ${run.last_action ?? "-"}`,
    `Pending op   ${op ? `#${op.id} ${op.kind}/${op.purpose} [${op.status}]${op.nonce ? ` nonce=${op.nonce}` : ""}${op.message_id ? ` msg=${op.message_id}` : ""}` : "-"}`,
    `Session      ${run.current_session_id ?? "-"}   (sessions created: ${c.sessionsCreated})`,
    `Recovery     inspection ${c.inspectionRecoveries}/1 used${c.inspectionRecoveries ? " (automatic allowance exhausted)" : ""}`,
    `Pause reason ${run.pause_reason ?? "-"}`,
    run.pause_detail ? `             ${run.pause_detail.replace(/\n/g, "\n             ")}` : null,
    ``,
    `Limits`,
    `  cycles                ${bar(c.cycles, l.maxCycles)}`,
    `  worker tasks          ${bar(c.workerTasks, l.maxWorkerTasks)}`,
    `  specialist consults   ${bar(c.specialistConsultations, l.maxSpecialistConsultations)}`,
    `  consecutive failures  ${bar(c.consecutiveFailures, l.maxConsecutiveFailures)}   (total ${c.totalFailures})`,
    `  active minutes        ${bar(mins, l.maxDurationMinutes)}`,
    `  deepseek              ${c.deepseekCalls}/${l.maxDeepseekCalls} calls, $${c.deepseekCostUsd.toFixed(4)}/$${l.maxDeepseekCostUsd}`,
    ``,
    `Recent transitions`,
    recent,
  ];
  return lines.filter((x) => x !== null).join("\n");
}
