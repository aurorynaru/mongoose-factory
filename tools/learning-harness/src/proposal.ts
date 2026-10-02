import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { z } from "zod";
import type { ChatPort } from "./adapters/types.js";
import { BriefSchema, findRecord, type Brief } from "./brief.js";
import { fencedBlocks } from "./protocol/envelope.js";
import { header, protocolBlock } from "./protocol/prompts.js";
import type { RunRow } from "./store.js";
import { newNonce } from "./util/ids.js";
import type { LogSink } from "./util/log.js";

export const PROPOSAL_ID = "mongoose-harness/proposal-v1";

export const ProposalSchema = z.object({
  protocol: z.literal(PROPOSAL_ID),
  experiment_id: z.string().regex(/^EXP-\d{3,}(-R\d+)?$/, "experiment_id must look like EXP-005 or EXP-003-R2"),
  title: z.string().min(3),
  rationale: z.string().min(1),
  objective: z.string().min(1),
  in_scope: z.array(z.string().min(1)).min(1),
  out_of_scope: z.array(z.string()).default([]),
  prohibited_actions: z.array(z.string()).default([]),
  prohibited_patterns: z.array(z.string()).default([]),
  related_experiments: z.array(z.string()).default([]),
  editing_scope: z.string().min(1).default("User"),
  target_form: z.string().nullable().default(null),
  target_artifacts: z.array(z.string()).default([]),
  acceptance_checks: z.array(z.object({ id: z.string().min(1), description: z.string().min(1) })).min(1),
  replay_of: z.string().nullable().default(null),
  initial_instruction: z.string().nullable().default(null),
});
export type Proposal = z.infer<typeof ProposalSchema>;

/** Always part of every proposed brief, whatever the coordinator suggests. */
export const BASE_PROHIBITED = [
  "Creating, modifying or deleting any non-FX_ artifact",
  "Starting any other experiment or replay",
  "Modifying production data or disabling security",
  "Reading or printing credential values",
];

export interface ExperimentInfo {
  id: string;
  file: string;
  title: string;
  status: string;
}

export function listExperiments(factoryRoot: string): ExperimentInfo[] {
  const dir = join(factoryRoot, "experiments");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /^EXP-\d+.*\.md$/.test(f))
    .sort()
    .map((f) => {
      const text = readFileSync(join(dir, f), "utf8");
      return {
        id: (f.match(/^(EXP-\d+(?:-R\d+)?)/) ?? [])[1] ?? f,
        file: `experiments/${f}`,
        title: (text.match(/^#\s+(.+)$/m)?.[1] ?? f).trim(),
        status: (text.match(/^Status:\s*(.+)$/m)?.[1] ?? "unknown").replace(/\*\*/g, "").trim(),
      };
    });
}

export function extractProposal(markdown: string): { ok: true; proposal: Proposal } | { ok: false; problems: string[] } {
  const blocks = fencedBlocks(markdown).filter((b) => b.body.includes(PROPOSAL_ID));
  if (blocks.length === 0) return { ok: false, problems: ["no ```json block containing mongoose-harness/proposal-v1"] };
  if (blocks.length > 1) return { ok: false, problems: [`${blocks.length} proposal blocks; exactly one is required`] };
  let obj: unknown;
  try {
    obj = JSON.parse(blocks[0].body);
  } catch (e) {
    return { ok: false, problems: [`invalid JSON: ${(e as Error).message}`] };
  }
  const p = ProposalSchema.safeParse(obj);
  if (!p.success) return { ok: false, problems: p.error.issues.map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`) };
  return { ok: true, proposal: p.data };
}

/** Deterministic checks before a proposal may become a draft brief. */
export function proposalProblems(p: Proposal, factoryRoot: string, briefsDir: string, force = false): string[] {
  const out: string[] = [];
  const existing = listExperiments(factoryRoot).find((e) => e.id === p.experiment_id);
  if (existing) out.push(`${p.experiment_id} already exists (${existing.file}, status: ${existing.status}); propose a new ID`);
  if (!force && existsSync(join(briefsDir, `${p.experiment_id}.brief.json`))) out.push(`briefs/${p.experiment_id}.brief.json already exists (use --force to overwrite)`);
  if (p.replay_of) {
    if (!new RegExp(`^${p.replay_of}-R\\d+$`).test(p.experiment_id)) out.push(`a replay of ${p.replay_of} must be named ${p.replay_of}-R<n>`);
    if (!findRecord(factoryRoot, p.replay_of)) out.push(`replay_of ${p.replay_of} has no experiment record`);
  } else if (/-R\d+$/.test(p.experiment_id)) out.push("replay IDs (-R<n>) require replay_of");
  if (p.target_form && !p.target_form.startsWith("FX_")) out.push(`target_form ${p.target_form} is not FX_-prefixed (AGENTS.md: only factory-owned artifacts)`);
  for (const a of p.target_artifacts) if (/^[A-Za-z]/.test(a) && !a.startsWith("FX_") && !a.includes("/")) out.push(`target artifact ${a} is not FX_-prefixed`);
  for (const r of p.prohibited_patterns) {
    try {
      new RegExp(r, "i");
    } catch {
      out.push(`invalid prohibited_pattern regex: ${r}`);
    }
  }
  const ids = p.acceptance_checks.map((c) => c.id);
  if (new Set(ids).size !== ids.length) out.push("acceptance check ids must be unique");
  if (JSON.stringify(p).includes("TODO")) out.push("proposal contains TODO placeholders");
  return out;
}

function slug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50);
}

export function proposalToBrief(p: Proposal, factoryRoot: string, previousRunId: string | null): Brief {
  const existingRecord = findRecord(factoryRoot, p.experiment_id);
  const brief: Brief = {
    experiment_id: p.experiment_id,
    title: `${p.experiment_id} — ${p.title}`,
    record_path: existingRecord ? existingRecord.replace(/\\/g, "/") : `experiments/${p.experiment_id}-${slug(p.title)}.md`,
    new_record: !existingRecord,
    reviewed: false,
    objective: p.objective,
    scope: { in_scope: p.in_scope, out_of_scope: p.out_of_scope },
    prohibited_actions: [...new Set([...BASE_PROHIBITED, ...p.prohibited_actions])],
    prohibited_patterns: p.prohibited_patterns,
    related_experiments: p.related_experiments,
    environment: { record: "environments/current-environment.md", editing_scope: p.editing_scope, notes: "" },
    target: { form: p.target_form, artifacts: p.target_artifacts },
    acceptance_checks: p.acceptance_checks,
    evidence_dir: `evidence/${p.experiment_id}`,
    replay_of: p.replay_of,
    initial_instruction: p.initial_instruction,
    notes: `Proposed by the coordinator${previousRunId ? ` after run ${previousRunId}` : ""}. Rationale: ${p.rationale}`,
  };
  return BriefSchema.parse(brief);
}

export function proposalRequestText(protocolDir: string, factoryRoot: string, previous: RunRow | null, nonce: string, contextText?: string): string {
  const exps = listExperiments(factoryRoot);
  const recipes = existsSync(join(factoryRoot, "recipes"))
    ? readdirSync(join(factoryRoot, "recipes"), { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .flatMap((d) => readdirSync(join(factoryRoot, "recipes", d.name)).map((f) => `recipes/${d.name}/${f}`))
    : [];
  return [
    header({ nonce, runId: previous?.id ?? "none", experimentId: previous?.experiment_id ?? "none", cycleId: (previous?.cycle_id ?? 0) + 1, kind: "NEXT_EXPERIMENT_PROPOSAL" }),
    protocolBlock(protocolDir, "proposal-protocol.md"),
    "",
    previous ? `Previous run: ${previous.id} for ${previous.experiment_id}, outcome: ${previous.outcome ?? previous.status}.` : "No previous run in this harness.",
    "",
    "Existing experiments (ID — title — status):",
    ...exps.map((e) => `- ${e.id} — ${e.title.replace(/^EXP-[\d-R]+\s*[—-]\s*/, "")} — ${e.status}`),
    "",
    `Existing recipes: ${recipes.length ? recipes.join(", ") : "(none)"}`,
    ...(contextText ? ["", contextText] : []),
  ].join("\n");
}

export interface ProposalDeps {
  chat: ChatPort;
  factoryRoot: string;
  briefsDir: string;
  protocolDir: string;
  proposalsDir: string;
  log: LogSink;
  replyTimeoutMs: number;
  /** Reviewed context + records digest (from disk) appended to the request. */
  contextText?: string;
  /** When set, the request opens a NEW coordinator chat at this URL (ChatGPT home). */
  newChatHome?: string;
  /** Called with the new conversation URL so the caller can register it for the coordinator role. */
  onNewConversation?: (url: string) => void;
}

export type ProposalOutcome = { ok: true; briefPath: string; brief: Brief } | { ok: false; reason: string; rawPath?: string };

/**
 * Ask Tab 1 for ONE next experiment and save it as an unreviewed draft brief. Never starts a run.
 * One automatic correction request if the reply is unusable; otherwise reports why.
 */
export async function requestProposal(d: ProposalDeps, previous: RunRow | null, opts: { force?: boolean; firstText?: string } = {}): Promise<ProposalOutcome> {
  mkdirSync(d.proposalsDir, { recursive: true });
  if (!d.newChatHome) {
    const ready = await d.chat.checkReady("coordinator");
    if (!ready.ok) return { ok: false, reason: `coordinator not ready: ${ready.problem} — ${ready.detail ?? ""}` };
  }

  // firstText: a custom first message (e.g. a revision request carrying the specialist's objection).
  let text = opts.firstText ?? proposalRequestText(d.protocolDir, d.factoryRoot, previous, newNonce(), d.contextText);
  for (let attempt = 1; attempt <= 2; attempt++) {
    const nonce = text.match(/nonce=(H-[A-Za-z0-9]+)/)![1];
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    writeFileSync(join(d.proposalsDir, `${stamp}-request.md`), text);

    if (attempt === 1 && d.newChatHome) {
      // Opens a fresh coordinator chat (the operator asked for one with `harness chat new coordinator`).
      const out = await d.chat.submitNew("coordinator", d.newChatHome, text, nonce);
      if (out.status !== "accepted" || !out.conversationUrl) {
        return { ok: false, reason: `could not open a new coordinator chat (${out.status}${"detail" in out ? `: ${out.detail}` : ""}). Look for it in the ChatGPT sidebar; register it with 'harness chat use coordinator <url>' or retry 'harness next'.` };
      }
      d.onNewConversation?.(out.conversationUrl);
    } else {
      let sent = await d.chat.submit("coordinator", text, nonce);
      if (sent.status === "uncertain" || sent.status === "not_submitted") {
        const chk = await d.chat.findSubmission("coordinator", nonce);
        if (chk.found) sent = { status: "accepted" };
      }
      if (sent.status !== "accepted") return { ok: false, reason: `proposal request not delivered (${sent.status}): ${"detail" in sent ? sent.detail : ""}. Check Tab 1, then run: harness next` };
    }

    const reply = await d.chat.waitForReply("coordinator", nonce, { timeoutMs: d.replyTimeoutMs, shouldStop: () => false });
    if (reply.status !== "complete") return { ok: false, reason: `no proposal reply (${reply.status}${"detail" in reply ? `: ${reply.detail}` : ""}). Run: harness next` };
    const rawPath = join(d.proposalsDir, `${stamp}-reply.md`);
    writeFileSync(rawPath, reply.markdown);
    const ex = extractProposal(reply.markdown);
    const problems = ex.ok ? proposalProblems(ex.proposal, d.factoryRoot, d.briefsDir, opts.force) : ex.problems;
    if (ex.ok && problems.length === 0) {
      const brief = proposalToBrief(ex.proposal, d.factoryRoot, previous?.id ?? null);
      mkdirSync(d.briefsDir, { recursive: true });
      const briefPath = resolve(d.briefsDir, `${brief.experiment_id}.brief.json`);
      writeFileSync(briefPath, JSON.stringify(brief, null, 2) + "\n");
      d.log.log("info", "proposal.saved", { experiment_id: brief.experiment_id, brief: briefPath });
      return { ok: true, briefPath, brief };
    }
    d.log.log("warn", "proposal.invalid", { attempt, problems: problems.join("; ") });
    if (attempt === 2) return { ok: false, reason: `proposal unusable: ${problems.join("; ")}`, rawPath };
    text = [
      header({ nonce: newNonce(), runId: previous?.id ?? "none", experimentId: previous?.experiment_id ?? "none", cycleId: (previous?.cycle_id ?? 0) + 2, kind: "PROPOSAL_CORRECTION" }),
      "Your proposal could not be used:",
      ...problems.map((p) => `- ${p}`),
      "",
      "Please send a corrected proposal: exactly one ```json block with protocol mongoose-harness/proposal-v1, as described in my previous message.",
    ].join("\n");
  }
  return { ok: false, reason: "unreachable" };
}

/** Ask the coordinator to revise its proposal so that it addresses the specialist's objection. */
export function revisionRequestText(previous: RunRow | null, experimentId: string, objection: string): string {
  return [
    header({ nonce: newNonce(), runId: previous?.id ?? "none", experimentId: previous?.experiment_id ?? "none", cycleId: (previous?.cycle_id ?? 0) + 3, kind: "PROPOSAL_REVISION" }),
    `The Mongoose specialist did not support your proposal ${experimentId} (review below). Revise it so that it`,
    "addresses EVERY required verification, keeping the experiment as small as possible. Keep the same",
    "experiment_id unless the change makes it a different experiment. Reply with exactly one json code block,",
    "protocol mongoose-harness/proposal-v1, as before. If you disagree with a point, still address it in the",
    "acceptance checks or prohibited actions, and explain your view in the rationale.",
    "",
    "SPECIALIST REVIEW:",
    objection,
  ].join("\n");
}

export function briefSummary(b: Brief): string {
  const list = (xs: string[]) => (xs.length ? xs.map((x) => `    - ${x}`).join("\n") : "    - (none)");
  return [
    `${b.title}   [${b.reviewed ? "REVIEWED" : "NOT reviewed"}]`,
    `  Record:      ${b.record_path}${b.new_record ? "  (new — the worker will create it)" : ""}`,
    `  Objective:   ${b.objective}`,
    `  In scope:\n${list(b.scope.in_scope)}`,
    `  Out of scope:\n${list(b.scope.out_of_scope)}`,
    `  Prohibited:\n${list(b.prohibited_actions)}`,
    `  Auto-review patterns:\n${list(b.prohibited_patterns)}`,
    `  Target:      ${[b.target.form, ...b.target.artifacts].filter(Boolean).join(", ") || "(none)"}   scope: ${b.environment.editing_scope}`,
    `  Acceptance checks:\n${list(b.acceptance_checks.map((c) => `${c.id}: ${c.description}`))}`,
    `  Replay of:   ${b.replay_of ?? "-"}`,
    b.initial_instruction ? `  First worker instruction: ${b.initial_instruction}` : null,
    b.notes ? `  Notes:       ${b.notes}` : null,
  ]
    .filter((x) => x !== null)
    .join("\n");
}
