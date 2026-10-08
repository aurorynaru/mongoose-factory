import type { HarnessConfig } from "../config.js";
import type { InterpreterPort, InterpreterResult } from "../adapters/types.js";
import { ACTIONS, EnvelopeSchema, PROTOCOL_ID, type Envelope } from "./envelope.js";

const SYSTEM = `You extract a routing decision from a coordinator's chat reply. You are NOT the coordinator.
Rules:
- Only extract what the reply explicitly states. Never invent, complete, rephrase or improve instructions.
- "message" must be copied VERBATIM (character for character) from the reply; if no explicit instruction/question exists, set found=false.
- Allowed actions: ${ACTIONS.join(", ")}. If the reply does not clearly choose one, set found=false.
- Never output EXPERIMENT_COMPLETE unless the reply explicitly declares the experiment complete.
Return JSON only: {"found": boolean, "confidence": "high"|"medium"|"low", "unresolved": [string],
"envelope": {"action": string, "reason": string, "message": string|null, "evidence_refs": [string]}}`;

/** Optional OpenAI-compatible DeepSeek chat-completions adapter. Used only when the envelope is missing/invalid. */
export class DeepSeekInterpreter implements InterpreterPort {
  constructor(
    private readonly cfg: HarnessConfig["deepseek"],
    private readonly apiKey: string,
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async interpret(raw: string, expected: { runId: string; experimentId: string; cycleId: number }): Promise<InterpreterResult> {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), this.cfg.timeoutSeconds * 1000);
    try {
      const res = await this.fetchImpl(`${this.cfg.baseUrl.replace(/\/$/, "")}/chat/completions`, {
        method: "POST",
        signal: ctl.signal,
        headers: { "content-type": "application/json", authorization: `Bearer ${this.apiKey}` },
        body: JSON.stringify({
          model: this.cfg.model,
          temperature: 0,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM },
            { role: "user", content: `Expected experiment: ${expected.experimentId}\nCoordinator reply:\n<<<\n${raw}\n>>>` },
          ],
        }),
      });
      if (!res.ok) throw new Error(`DeepSeek HTTP ${res.status}`);
      const body = (await res.json()) as { choices?: Array<{ message?: { content?: string } }>; usage?: { prompt_tokens?: number; completion_tokens?: number } };
      const pt = body.usage?.prompt_tokens ?? 0;
      const ct = body.usage?.completion_tokens ?? 0;
      const usage = { promptTokens: pt, completionTokens: ct, costUsd: (pt * this.cfg.inputCostPerMTok + ct * this.cfg.outputCostPerMTok) / 1e6 };
      let parsed: { found?: boolean; confidence?: string; unresolved?: string[]; envelope?: Record<string, unknown> } = {};
      try {
        parsed = JSON.parse(body.choices?.[0]?.message?.content ?? "{}");
      } catch {
        return { found: false, confidence: "low", candidate: null, unresolved: ["interpreter_returned_non_json"], usage };
      }
      const conf = parsed.confidence === "high" || parsed.confidence === "medium" ? parsed.confidence : "low";
      return { found: !!parsed.found, confidence: conf, candidate: parsed.envelope ?? null, unresolved: parsed.unresolved ?? [], usage };
    } finally {
      clearTimeout(timer);
    }
  }
}

const norm = (s: string) => s.replace(/\s+/g, " ").trim().toLowerCase();

const ACTION_CUES: Record<string, RegExp> = {
  SEND_TO_OPENCODE: /SEND_TO_OPENCODE|opencode|worker|next instruction/i,
  ASK_SPECIALIST: /ASK_SPECIALIST|specialist|tab 2|mongoose gpt|custom gpt/i,
  NEW_OPENCODE_SESSION: /NEW_OPENCODE_SESSION|new (opencode )?session|fresh (opencode )?session/i,
  PAUSE: /\bPAUSE\b|pause|wait for|operator|blocked/i,
  EXPERIMENT_COMPLETE: /EXPERIMENT_COMPLETE/,
};

/**
 * Guard rails for an interpreted candidate. Identifiers are filled from the controller's own
 * context (they are not instructions); everything else must be explicitly present in the reply.
 */
export function vetCandidate(
  result: InterpreterResult,
  raw: string,
  expected: { runId: string; experimentId: string; cycleId: number },
): { accept: true; envelope: Envelope } | { accept: false; reasons: string[]; envelope: Envelope | null } {
  const reasons: string[] = [];
  if (!result.found || !result.candidate) return { accept: false, reasons: ["interpreter_found_no_decision", ...result.unresolved], envelope: null };
  const c = result.candidate;
  const candidate = {
    protocol: PROTOCOL_ID,
    run_id: expected.runId,
    experiment_id: expected.experimentId,
    cycle_id: expected.cycleId,
    action: c.action,
    reason: c.reason,
    message: typeof c.message === "string" && c.message.trim() ? c.message : undefined,
    evidence_refs: Array.isArray(c.evidence_refs) ? c.evidence_refs : [],
  };
  const parsed = EnvelopeSchema.safeParse(candidate);
  if (!parsed.success) {
    return { accept: false, reasons: parsed.error.issues.map((i) => `candidate_missing_field:${i.path.join(".")}`), envelope: null };
  }
  const env = parsed.data;
  if (env.action === "EXPERIMENT_COMPLETE") reasons.push("completion_never_accepted_from_interpretation");
  if (env.action === "NEW_OPENCODE_SESSION") reasons.push("handoff_never_accepted_from_interpretation");
  if (env.message && !norm(raw).includes(norm(env.message))) reasons.push("invented_or_rephrased_message");
  if (!ACTION_CUES[env.action]?.test(raw)) reasons.push("action_not_explicit_in_reply");
  for (const ref of env.evidence_refs) if (!raw.includes(ref)) reasons.push(`invented_evidence_ref:${ref}`);
  if (result.confidence !== "high") reasons.push(`low_confidence:${result.confidence}`);
  if (result.unresolved.length) reasons.push(...result.unresolved.map((u) => `unresolved:${u}`));
  return reasons.length ? { accept: false, reasons, envelope: env } : { accept: true, envelope: env };
}
