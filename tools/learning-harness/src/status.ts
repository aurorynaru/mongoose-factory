import type { Store, RunRow } from "./store.js";
import { pidAlive } from "./store.js";

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
