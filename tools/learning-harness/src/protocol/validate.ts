import { existsSync, statSync } from "node:fs";
import { isAbsolute, relative, resolve } from "node:path";
import type { Brief } from "../brief.js";
import type { Envelope } from "./envelope.js";

/**
 * Semantic validation of a decision envelope. Outcomes:
 *  - ok:      route it
 *  - reject:  malformed / wrong identifiers — the response is invalid
 *  - review:  well-formed but needs the operator (scope, completion evidence, disagreement, attachments)
 */
export type Validation =
  | { ok: true; envelope: Envelope; warnings: string[] }
  | { ok: false; disposition: "reject" | "review"; reasons: string[]; envelope: Envelope };

export interface ValidationContext {
  runId: string;
  expectedCycleId: number;
  brief: Brief;
  factoryRoot: string;
  maxMessageChars: number;
  completedWorkerReports: number;
  /** Most recent specialist verdict in this run, or null if none/unknown. */
  latestSpecialistVerdict: string | null;
  approvals: { scope?: boolean; attachment?: boolean };
}

export function normalizeExperimentId(id: string): string {
  return id.trim().toUpperCase();
}

/** Deterministic scope-expansion detection for worker-bound text. */
export function scopeViolations(text: string, brief: Brief): string[] {
  const out: string[] = [];
  const allowed = new Set([brief.experiment_id, ...brief.related_experiments, brief.replay_of ?? ""].map((x) => x.toUpperCase()).filter(Boolean));
  const mentioned = new Set((text.match(/\bEXP-\d{3,}(?:-R\d+)?\b/gi) ?? []).map((x) => x.toUpperCase()));
  for (const id of mentioned) if (!allowed.has(id)) out.push(`foreign_experiment:${id}`);
  for (const p of brief.prohibited_patterns) {
    const re = new RegExp(p, "gi");
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
      if (!negated(text, m.index)) {
        out.push(`prohibited_pattern:${p}`);
        break;
      }
      if (m[0].length === 0) re.lastIndex++;
    }
  }
  return out;
}

/** The concrete non-negated pattern matches (pattern + matched text), for an exact rephrase request. */
export function scopeMatches(text: string, brief: Brief): Array<{ pattern: string; matched: string }> {
  const out: Array<{ pattern: string; matched: string }> = [];
  for (const p of brief.prohibited_patterns) {
    const re = new RegExp(p, "gi");
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
      if (!negated(text, m.index)) out.push({ pattern: p, matched: m[0] });
      if (m[0].length === 0) re.lastIndex++;
    }
  }
  return out;
}

/**
 * True when the match sits in a negated clause, e.g. "Do not add components, variables, bindings":
 * the text between the start of the clause (sentence start, line start, ";" or ":") and the match
 * contains a negation. Coordinators routinely write such guardrails; they are not scope expansion.
 */
export function negated(text: string, index: number): boolean {
  const before = text.slice(0, index);
  const clauseStart = Math.max(before.lastIndexOf("."), before.lastIndexOf("\n"), before.lastIndexOf(";"), before.lastIndexOf(":"), before.lastIndexOf("!"), before.lastIndexOf("?"));
  const clause = before.slice(clauseStart + 1);
  return /\b(do not|don't|dont|never|must not|mustn't|should not|shouldn't|without|avoid|no|not|nor)\b/i.test(clause);
}

export type RefCheck = { ref: string; ok: boolean; problem?: "unsafe_path" | "missing" };

export function checkEvidenceRef(ref: string, factoryRoot: string): RefCheck {
  const clean = ref.trim().replace(/^`|`$/g, "").replace(/\\/g, "/").replace(/^\.\//, "");
  if (!clean || isAbsolute(clean) || /^[a-z]+:/i.test(clean)) return { ref, ok: false, problem: "unsafe_path" };
  const abs = resolve(factoryRoot, clean);
  const rel = relative(resolve(factoryRoot), abs);
  if (rel.startsWith("..") || isAbsolute(rel)) return { ref, ok: false, problem: "unsafe_path" };
  if (!existsSync(abs)) return { ref, ok: false, problem: "missing" };
  const st = statSync(abs);
  if (st.isFile() && st.size === 0) return { ref, ok: false, problem: "missing" };
  return { ref, ok: true };
}

export function validateEnvelope(env: Envelope, ctx: ValidationContext): Validation {
  const reject: string[] = [];
  const review: string[] = [];
  const warnings: string[] = [];

  if (env.run_id !== ctx.runId) reject.push(`run_id_mismatch:${env.run_id}`);
  if (normalizeExperimentId(env.experiment_id) !== normalizeExperimentId(ctx.brief.experiment_id)) {
    reject.push(`experiment_id_mismatch:${env.experiment_id}`);
  }
  if (env.cycle_id !== ctx.expectedCycleId) reject.push(`cycle_id_mismatch:expected_${ctx.expectedCycleId}_got_${env.cycle_id}`);
  if (env.message && env.message.length > ctx.maxMessageChars) reject.push("message_too_long");

  if (env.requires_attachments.length > 0 && !ctx.approvals.attachment) {
    review.push(`attachment_required:${env.requires_attachments.join("|")}`);
  }

  // Worker-bound text is checked for scope expansion.
  if (env.action === "SEND_TO_OPENCODE" || env.action === "NEW_OPENCODE_SESSION") {
    const text = [env.message ?? "", env.handoff?.next_permitted_action ?? ""].join("\n");
    const v = scopeViolations(text, ctx.brief);
    if (v.length && !ctx.approvals.scope) review.push(...v.map((x) => `scope:${x}`));
  }

  // Knowledge classification: replay_verified needs a replay experiment and existing evidence.
  for (const f of env.findings) {
    if (f.classification !== "replay_verified") continue;
    const refs = f.evidence_refs.map((r) => checkEvidenceRef(r, ctx.factoryRoot));
    if (!ctx.brief.replay_of) review.push(`replay_verified_outside_replay_experiment:${f.statement.slice(0, 60)}`);
    else if (refs.length === 0 || refs.some((r) => !r.ok)) review.push(`replay_verified_without_replay_evidence:${f.statement.slice(0, 60)}`);
  }

  if (env.action === "EXPERIMENT_COMPLETE") review.push(...completionProblems(env, ctx));

  if (reject.length) return { ok: false, disposition: "reject", reasons: [...reject, ...review], envelope: env };
  if (review.length) return { ok: false, disposition: "review", reasons: review, envelope: env };
  return { ok: true, envelope: env, warnings };
}

/**
 * Completion is never inferred from wording. It requires a validated envelope whose
 * acceptance checks cover every check in the brief, backed by evidence files that exist.
 */
export function completionProblems(env: Envelope, ctx: ValidationContext): string[] {
  const out: string[] = [];
  const briefChecks = ctx.brief.acceptance_checks;
  if (briefChecks.length === 0) out.push("brief_has_no_acceptance_checks");
  if (ctx.completedWorkerReports === 0) out.push("no_completed_worker_report_in_run");
  // An objection must prevent acceptance, but it can be the reason a run is
  // honestly completed as blocked with a failed check and evidence.
  if (env.outcome === "accepted" && (ctx.latestSpecialistVerdict === "objects" || ctx.latestSpecialistVerdict === "insufficient_evidence")) {
    out.push(`specialist_disagreement:${ctx.latestSpecialistVerdict}`);
  }

  const allRefs = new Set<string>([...env.evidence_refs, ...env.acceptance_checks.flatMap((c) => c.evidence_refs)]);
  for (const ref of allRefs) {
    const r = checkEvidenceRef(ref, ctx.factoryRoot);
    if (!r.ok) out.push(`evidence_${r.problem}:${ref}`);
  }

  const byId = new Map(env.acceptance_checks.map((c) => [c.id, c]));
  if (env.outcome === "accepted") {
    for (const bc of briefChecks) {
      const c = byId.get(bc.id);
      if (!c) out.push(`acceptance_check_missing:${bc.id}`);
      else if (c.status !== "passed") out.push(`acceptance_check_not_passed:${bc.id}:${c.status}`);
      else if (c.evidence_refs.length === 0) out.push(`acceptance_check_without_evidence:${bc.id}`);
    }
  } else if (env.outcome === "blocked") {
    const failedWithEvidence = env.acceptance_checks.some((c) => c.status === "failed" && c.evidence_refs.length > 0);
    if (!failedWithEvidence) out.push("blocked_outcome_requires_failed_check_with_evidence");
  }
  return out;
}

/** Heuristic: the specialist asks the operator to upload something the controller cannot supply. */
export function asksForUpload(text: string): boolean {
  return /\b(please|could you|can you|kindly)\b[^.\n]{0,40}\b(upload|attach|share|send|paste|provide)\b[^.\n]{0,60}\b(screenshot|screen ?shot|image|file|export|xml|har|log|recording)s?\b/i.test(
    text,
  );
}
