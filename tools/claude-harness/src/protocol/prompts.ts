import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Brief } from "../brief.js";
import type { Counters } from "../store.js";
import type { Limits } from "../config.js";
import { workerPolicyForBrief } from "../adapters/claude/tool-policy.js";

export function protocolBlock(protocolDir: string, file: string, marker = "PROTOCOL"): string {
  const text = readFileSync(join(protocolDir, file), "utf8");
  const m = text.match(new RegExp(`<!-- BEGIN ${marker} -->\\r?\\n([\\s\\S]*?)\\r?\\n<!-- END ${marker} -->`));
  if (!m) throw new Error(`${file} is missing the BEGIN/END ${marker} markers`);
  return m[1].trim();
}

export interface HeaderFields {
  nonce: string;
  runId: string;
  experimentId: string;
  cycleId: number;
  kind: string;
  extra?: Record<string, string | number>;
}

export function header(h: HeaderFields): string {
  const extra = Object.entries(h.extra ?? {})
    .map(([k, v]) => ` ${k}=${v}`)
    .join("");
  return `[HARNESS nonce=${h.nonce} run_id=${h.runId} experiment_id=${h.experimentId} cycle_id=${h.cycleId} kind=${h.kind}${extra}]`;
}

/** Parse our own header back out of a message (used by fakes and reconciliation). */
export function parseHeader(text: string): Record<string, string> | null {
  const m = text.match(/\[HARNESS ([^\]\n]+)\]/);
  if (!m) return null;
  const out: Record<string, string> = {};
  for (const kv of m[1].split(/\s+/)) {
    const i = kv.indexOf("=");
    if (i > 0) out[kv.slice(0, i)] = kv.slice(i + 1);
  }
  return out;
}

export function remainingLimits(c: Counters, l: Limits, activeMs: number): string {
  const mins = Math.max(0, Math.round(l.maxDurationMinutes - activeMs / 60000));
  return [
    `cycles ${c.cycles}/${l.maxCycles}`,
    `worker tasks ${c.workerTasks}/${l.maxWorkerTasks}`,
    `specialist consultations ${c.specialistConsultations}/${l.maxSpecialistConsultations}`,
    `consecutive failures ${c.consecutiveFailures}/${l.maxConsecutiveFailures}`,
    `~${mins} active minutes left`,
  ].join("; ");
}

/** Keep messages under the chat limit without silently dropping context. */
export function clip(text: string, max: number, fullPathNote: string): string {
  if (text.length <= max) return text;
  const note=`\n\n[... characters omitted by the harness to fit the chat limit; full text preserved at ${fullPathNote} ...]\n\n`;
  if(max<=note.length)return text.slice(0,Math.max(0,max));
  const keep = max-note.length;
  const head = text.slice(0, Math.floor(keep * 0.6));
  const tail = text.slice(text.length - Math.floor(keep * 0.4));
  return `${head}${note}${tail}`;
}

export function briefForCoordinator(b: Brief): string {
  const list = (xs: string[]) => (xs.length ? xs.map((x) => `  - ${x}`).join("\n") : "  - (none)");
  return [
    `Experiment: ${b.experiment_id} — ${b.title}`,
    `Record: ${b.record_path}`,
    `Objective: ${b.objective}`,
    `In scope:\n${list(b.scope.in_scope)}`,
    `Out of scope:\n${list(b.scope.out_of_scope)}`,
    `Prohibited actions:\n${list(b.prohibited_actions)}`,
    `Prohibited pattern rules:\n${list(b.prohibited_patterns)}`,
    `Exact values (case and spelling): ${JSON.stringify(b.exact_values??[])}`,
    `Enforced worker tools: doom-loop permission denied; browser JavaScript ${workerPolicyForBrief(b).denyBrowserJavaScript ? "denied (evaluate/run-code tools)" : "not additionally restricted"}.`,
    `Editing scope: ${b.environment.editing_scope}${b.environment.notes ? ` (${b.environment.notes})` : ""}`,
    `Target form: ${b.target.form ?? "(none)"}; artifacts: ${b.target.artifacts.join(", ") || "(none)"}`,
    `Evidence directory: ${b.evidence_dir}`,
    `Replay of: ${b.replay_of ?? "(not a replay — replay_verified findings are not allowed)"}`,
    `Acceptance checks (all must be passed with evidence for outcome "accepted"):\n${b.acceptance_checks.map((c) => `  - ${c.id}: ${c.description}`).join("\n")}`,
  ].join("\n");
}

export function fillWorkerPreamble(template: string, b: Brief, runId: string, cycleId: number, taskId: string): string {
  const vals: Record<string, string> = {
    run_id: runId,
    experiment_id: b.experiment_id,
    cycle_id: String(cycleId),
    task_id: taskId,
    title: b.title,
    record_path: b.record_path,
    objective: b.objective,
    in_scope: b.scope.in_scope.join("; "),
    out_of_scope: b.scope.out_of_scope.join("; ") || "(see record)",
    prohibited: b.prohibited_actions.join("; "),
    worker_tool_policy: workerPolicyForBrief(b).denyBrowserJavaScript
      ? "Browser evaluate/run-code tools are denied. Use only permitted rendered UI and accessibility tools; report a blocker rather than finding a script or shell workaround."
      : "Doom-loop permission is denied. All textual experiment restrictions still apply.",
    editing_scope: b.environment.editing_scope,
    target: [b.target.form, ...b.target.artifacts].filter(Boolean).join(", ") || "(none)",
    evidence_dir: b.evidence_dir,
  };
  return template.replace(/\{\{(\w+)\}\}/g, (_, k: string) => vals[k] ?? `{{${k}}}`);
}
