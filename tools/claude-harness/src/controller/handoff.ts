import type { Brief } from "../brief.js";
import type { Limits } from "../config.js";
import type { HandoffData } from "../protocol/envelope.js";
import type { Counters } from "../store.js";
import { remainingLimits } from "../protocol/prompts.js";

export interface HandoffInput {
  runId: string;
  cycleId: number;
  brief: Brief;
  data: HandoffData;
  reason: string;
  evidenceSoFar: string[];
  docChangesDetected: string[];
  sessions: Array<{ opencode_session_id: string; reason: string; created_at: string }>;
  counters: Counters;
  limits: Limits;
  activeMs: number;
  failures: Array<{ kind: string; detail: string; at: string }>;
  /** The previous task's report, for harness-initiated fresh sessions (the coordinator wrote no handoff). */
  latestReport?: { task: string; text: string };
}

const list = (xs: string[]) => (xs.length ? xs.map((x) => `- ${x}`).join("\n") : "- (none recorded)");

/** The durable handoff given to a fresh OpenCode session. Saved to disk + DB BEFORE the session is created. */
export function renderHandoff(h: HandoffInput): string {
  const b = h.brief;
  return [
    `# Harness handoff — ${b.experiment_id} (run ${h.runId}, cycle ${h.cycleId})`,
    ``,
    `You are continuing experiment ${b.experiment_id} in a FRESH OpenCode conversation. This is the same`,
    `experiment, not a new one. Usage limits and failure history carry over. Reason for the new session: ${h.reason}`,
    ``,
    `IMPORTANT: a fresh conversation does NOT reset the Mongoose browser, the Web Designer, or any`,
    `server-side cache. Inspect the current browser/Designer state before acting (AGENTS.md "Recovery").`,
    ``,
    `## Experiment objective and scope`,
    `Objective: ${b.objective}`,
    `Record: ${b.record_path}`,
    `In scope:\n${list(b.scope.in_scope)}`,
    `Out of scope:\n${list(b.scope.out_of_scope)}`,
    ``,
    `## Prohibited actions`,
    list(b.prohibited_actions),
    ``,
    `## Environment and editing scope`,
    `Environment record: ${b.environment.record}`,
    `Editing scope: ${b.environment.editing_scope}${b.environment.notes ? ` — ${b.environment.notes}` : ""}`,
    ``,
    `## Target form and artifacts`,
    list([b.target.form, ...b.target.artifacts, ...h.data.target_artifacts].filter((x): x is string => !!x)),
    ``,
    `## Completed steps`,
    list(h.data.completed_steps),
    ``,
    `## Evidence collected so far`,
    list(h.evidenceSoFar),
    ``,
    `## Observed facts`,
    list(h.data.observed_facts),
    ``,
    `## Unverified hypotheses`,
    list(h.data.unverified_hypotheses),
    ``,
    `## Unresolved questions`,
    list(h.data.unresolved_questions),
    ``,
    `## Documentation changes`,
    `Reported by coordinator:\n${list(h.data.documentation_changes)}`,
    `Detected by harness:\n${list(h.docChangesDetected)}`,
    ``,
    `## Exact next permitted action`,
    h.data.next_permitted_action,
    ``,
    `## Session history`,
    list(h.sessions.map((s) => `${s.opencode_session_id} (${s.reason}, ${s.created_at})`)),
    ``,
    `## Remaining limits`,
    remainingLimits(h.counters, h.limits, h.activeMs),
    `Failures so far: ${h.counters.totalFailures}${h.failures.length ? `\n${list(h.failures.slice(-5).map((f) => `${f.at} ${f.kind}: ${f.detail.slice(0, 160)}`))}` : ""}`,
    ...(h.latestReport
      ? [``, `## Latest worker report (${h.latestReport.task}; verbatim, may be clipped)`, h.latestReport.text]
      : []),
  ].join("\n");
}
