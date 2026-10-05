import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import type { ChatPort, ChatRole, InterpreterPort, WorkerPort } from "../adapters/types.js";
import { briefProblems, summarizeRecord, type Brief, type LoadedBrief } from "../brief.js";
import type { HarnessConfig } from "../config.js";
import { extractEnvelope, extractSpecialistEnvelope, type Envelope, type Extraction } from "../protocol/envelope.js";
import { vetCandidate } from "../protocol/interpreter.js";
import { briefForCoordinator, clip, fillWorkerPreamble, header, protocolBlock, remainingLimits } from "../protocol/prompts.js";
import { asksForUpload, scopeMatches, validateEnvelope, type ValidationContext } from "../protocol/validate.js";
import { pidAlive, type Approvals, type InboundRow, type OpRow, type RunRow, type Store } from "../store.js";
import { newNonce, newRunId } from "../util/ids.js";
import type { LogSink } from "../util/log.js";
import { diffSnapshots, snapshotDirs, watchedDirs, type DirSnapshot } from "./evidence.js";
import { renderHandoff } from "./handoff.js";
import { contextBlock } from "../context.js";
import { parseConversationUrl } from "../adapters/chatgpt/selectors.js";

export interface ControllerDeps {
  store: Store;
  config: HarnessConfig;
  factoryRoot: string;
  runsDir: string;
  protocolDir: string;
  /** Operator-reviewed coordinator context file (optional). */
  contextFile?: string;
  chat: ChatPort;
  worker: WorkerPort;
  interpreter: InterpreterPort | null;
  log: LogSink;
  now?: () => number;
  pid?: number;
  isAlive?: (pid: number) => boolean;
}

interface OpReview {
  code: keyof Approvals;
  itemId: number;
  detail: string;
}

const MAX_BACKEND_RESTARTS = 3;

export class Controller {
  private segStart = 0;
  private readonly now: () => number;
  private readonly pid: number;

  constructor(private readonly d: ControllerDeps) {
    this.now = d.now ?? Date.now;
    this.pid = d.pid ?? process.pid;
  }

  // ------------------------------------------------------------------ lifecycle

  createRun(loaded: LoadedBrief): RunRow {
    const { store, config, factoryRoot } = this.d;
    const active = store.activeRuns();
    if (active.length) {
      throw new Error(`Run ${active[0].id} (${active[0].experiment_id}) is ${active[0].status}. Resume or stop it first; runs never overlap.`);
    }
    const problems = briefProblems(loaded.brief, factoryRoot);
    if (problems.length) throw new Error(`Brief is not ready:\n - ${problems.join("\n - ")}`);
    const id = newRunId();
    mkdirSync(join(this.d.runsDir, id), { recursive: true });
    const run = store.createRun({
      id,
      experimentId: loaded.brief.experiment_id,
      briefPath: loaded.path,
      briefHash: loaded.hash,
      briefJson: JSON.stringify(loaded.brief),
      limits: { ...config.limits },
    });
    this.write(run.id, "brief.json", JSON.stringify(loaded.brief, null, 2));
    this.d.log.log("info", "run.created", { run_id: id, experiment_id: loaded.brief.experiment_id });
    return run;
  }

  /**
   * Operator options applied before resuming. Approvals are bound to the specific pending item
   * (never blanket), limit changes and brief reloads are recorded as transitions.
   */
  applyResumeOptions(
    runId: string,
    o: { approve?: string[]; limits?: Record<string, number>; brief?: LoadedBrief; reask?: string | boolean },
  ): string[] {
    const { store } = this.d;
    let run = store.getRun(runId);
    if (!run) throw new Error(`Unknown run ${runId}`);
    if (run.status === "completed" || run.status === "stopped") throw new Error(`Run ${runId} is ${run.status}; it cannot be resumed.`);
    const notes: string[] = [];
    const approvals: Approvals = { ...run.approvals };
    const op = run.pending_op_id ? store.getOp(run.pending_op_id) : null;
    for (const code of o.approve ?? []) {
      let itemId: number | null = null;
      if (code === "resubmit") itemId = op && op.status === "uncertain" ? op.id : null;
      else if (code === "attachment") itemId = (op?.meta.review as OpReview | undefined)?.code === "attachment" ? (op!.meta.review as OpReview).itemId : run.pending_inbound_id;
      else if (code === "scope" || code === "candidate") itemId = run.state === "DECISION_PENDING" ? run.pending_inbound_id : null;
      else throw new Error(`Unknown approval '${code}'. Use: scope | candidate | attachment | resubmit`);
      if (itemId == null) throw new Error(`Nothing pending that '${code}' could approve (state ${run.state}, pause ${run.pause_reason ?? "-"}).`);
      approvals[code as keyof Approvals] = itemId;
      notes.push(`approved ${code} for item ${itemId}`);
    }
    const limits = { ...run.limits };
    for (const [k, v] of Object.entries(o.limits ?? {})) {
      if (!(k in limits)) throw new Error(`Unknown limit '${k}'. Known: ${Object.keys(limits).join(", ")}`);
      if (!Number.isFinite(v) || v < 0) throw new Error(`Invalid value for ${k}: ${v}`);
      (limits as Record<string, number>)[k] = v;
      notes.push(`limit ${k} = ${v}`);
    }
    let briefPatch: Partial<RunRow> = {};
    if (o.brief) {
      if (o.brief.brief.experiment_id !== run.experiment_id) throw new Error(`Brief is for ${o.brief.brief.experiment_id}, run is ${run.experiment_id}. A run never switches experiments.`);
      const probs = briefProblems(o.brief.brief, this.d.factoryRoot);
      if (probs.length) throw new Error(`Brief is not ready:\n - ${probs.join("\n - ")}`);
      briefPatch = { brief_json: JSON.stringify(o.brief.brief), brief_hash: o.brief.hash } as Partial<RunRow>;
      this.write(runId, `brief-reloaded-${Date.now()}.json`, JSON.stringify(o.brief.brief, null, 2));
      notes.push(`brief reloaded (${o.brief.hash.slice(0, 12)})`);
    }
    run = store.updateRun(runId, { approvals, limits });
    if (briefPatch.brief_json) {
      store.db.prepare(`UPDATE runs SET brief_json=?, brief_hash=? WHERE id=?`).run(briefPatch.brief_json, briefPatch.brief_hash, runId);
    }
    if (o.reask) {
      const reasonable = run.state === "DECISION_PENDING" || (run.state === "WORKER_PENDING" && op && (op.status === "failed" || op.status === "completed"));
      if (!reasonable) throw new Error(`--reask is only possible while a coordinator decision is pending (state ${run.state}).`);
      const note = typeof o.reask === "string" ? `\nOperator note: ${o.reask}` : "";
      this.planCoordinator(store.getRun(runId)!, "RECONSIDER", `The controller could not act on your last reply.\nReason: ${run.pause_reason ?? "-"}\nDetail: ${run.pause_detail ?? "-"}${note}\n\nPlease reconsider and reply with one valid envelope for this cycle.`);
      notes.push("planned RECONSIDER message to coordinator");
    }
    store.addTransition(runId, run.state, run.state, run.status, run.status, "operator_resume_options", { notes });
    return notes;
  }

  /** Drive a run until it pauses, completes or stops. Resume = call again on a paused run. */
  async run(runId: string): Promise<RunRow> {
    const { store } = this.d;
    const lease = store.acquireLease(runId, this.pid, this.d.isAlive ?? pidAlive);
    if (!lease.ok) throw new Error(`Another controller (pid ${lease.holder.pid}) is driving run ${lease.holder.run_id}.`);
    let run = store.getRun(runId);
    if (!run) throw new Error(`Unknown run ${runId}`);
    if (run.status === "paused") {
      store.clearControl(runId);
      run = store.updateRun(runId, { status: "running", pause_reason: null, pause_detail: null });
      this.d.log.log("info", "run.resumed", { run_id: runId, state: run.state });
    }
    this.segStart = this.now();
    try {
      while (true) {
        run = store.getRun(runId)!;
        if (run.status !== "running") break;
        const ctl = store.getControl(runId);
        if (ctl.stop_requested) {
          store.clearControl(runId);
          store.updateRun(runId, { status: "stopped", pause_reason: "operator_stop", pause_detail: ctl.reason });
          break;
        }
        if (ctl.pause_requested) {
          this.pause(run, "operator_pause", ctl.reason ?? "pause requested by operator");
          break;
        }
        await this.step(run);
        this.flushActive(runId);
        store.heartbeat(this.pid);
      }
    } catch (e) {
      const err = e as Error;
      this.d.log.log("error", "controller.error", { run_id: runId, error: err.message, stack: err.stack });
      const cur = store.getRun(runId);
      if (cur && cur.status === "running") this.pause(cur, "controller_error", err.message);
    } finally {
      this.flushActive(runId);
      store.releaseLease(this.pid);
    }
    return store.getRun(runId)!;
  }

  private flushActive(runId: string): void {
    const t = this.now();
    const run = this.d.store.getRun(runId);
    if (run && run.status === "running") this.d.store.updateRun(runId, { active_ms: run.active_ms + (t - this.segStart) });
    this.segStart = t;
  }

  private activeMs(run: RunRow): number {
    return run.active_ms + (this.now() - this.segStart);
  }

  private shouldStop = (runId: string) => () => {
    this.d.store.heartbeat(this.pid);
    const c = this.d.store.getControl(runId);
    return !!(c.pause_requested || c.stop_requested);
  };

  private pause(run: RunRow, reason: string, detail: string): void {
    this.d.store.updateRun(run.id, { status: "paused", pause_reason: reason, pause_detail: detail.slice(0, 4000) });
    this.d.store.clearControl(run.id);
    this.d.log.log("warn", "run.paused", { run_id: run.id, reason, detail: detail.slice(0, 500) });
  }

  private brief(run: RunRow): Brief {
    return JSON.parse(run.brief_json) as Brief;
  }

  private write(runId: string, rel: string, content: string): string {
    const abs = join(this.d.runsDir, runId, rel);
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, content, "utf8");
    return abs;
  }

  private refOf(abs: string): string {
    return relative(this.d.factoryRoot, abs).replace(/\\/g, "/");
  }

  private failure(run: RunRow, kind: string, detail: string): RunRow {
    this.d.store.addFailure(run.id, kind, detail);
    this.d.log.log("warn", "run.failure", { run_id: run.id, kind, detail: detail.slice(0, 300) });
    const c = run.counters;
    return this.d.store.updateRun(run.id, { counters: { ...c, consecutiveFailures: c.consecutiveFailures + 1, totalFailures: c.totalFailures + 1 } });
  }

  private limitHit(run: RunRow, kind: OpRow["kind"]): string | null {
    const c = run.counters;
    const l = run.limits;
    if (this.activeMs(run) >= l.maxDurationMinutes * 60_000) return "maxDurationMinutes";
    if (c.consecutiveFailures >= l.maxConsecutiveFailures) return "maxConsecutiveFailures";
    if (kind === "coordinator" && c.cycles >= l.maxCycles) return "maxCycles";
    if (kind === "worker" && c.workerTasks >= l.maxWorkerTasks) return "maxWorkerTasks";
    if (kind === "specialist" && c.specialistConsultations >= l.maxSpecialistConsultations) return "maxSpecialistConsultations";
    return null;
  }

  // ------------------------------------------------------------------ state machine

  private async step(run: RunRow): Promise<void> {
    switch (run.state) {
      case "READY":
        return this.kickoff(run);
      case "COORDINATOR_PENDING":
      case "SPECIALIST_PENDING":
        return this.driveChatOp(run);
      case "DECISION_PENDING":
        return this.decide(run);
      case "WORKER_PENDING":
        return this.driveWorkerOp(run);
      case "DONE":
        this.d.store.updateRun(run.id, { status: "completed" });
        return;
    }
  }

  private kickoff(run: RunRow): void {
    const b = this.brief(run);
    if (b.initial_instruction) {
      this.planWorker(run, b.initial_instruction, { newSession: true, reason: "initial (brief.initial_instruction)" });
      return;
    }
    let record = "";
    try {
      const s = summarizeRecord(this.d.factoryRoot, b.record_path);
      record = `Current record status of ${b.experiment_id}: ${s.status ?? "unknown"} (its Result section is in the records below).`;
    } catch {
      record = b.new_record
        ? `This is a NEW experiment: ${b.record_path} does not exist yet. The worker must create it, following the format of the existing experiment records (objective, starting state, method, observations, verification, evidence, result).`
        : "(experiment record could not be read)";
    }
    const body = [
      protocolBlock(this.d.protocolDir, "coordinator-protocol.md"),
      "",
      "EXPERIMENT BRIEF (reviewed by the operator; this is the complete scope for this run):",
      briefForCoordinator(b),
      "",
      record,
      "",
      this.projectContext(run),
      "",
      `Remaining limits: ${remainingLimits(run.counters, run.limits, this.activeMs(run))}`,
      "",
      "IMPORTANT: from now on the worker is a NEW OpenCode session started by this controller. It has none of the",
      "context of earlier, manually run OpenCode chats, and its Mongoose browser may be freshly opened (no form open,",
      "possibly a login needed). Make the first instruction self-contained and start by inspecting the current state.",
      "",
      "Decide the first step. Usually that is SEND_TO_OPENCODE with one bounded instruction.",
    ].join("\n");
    this.planCoordinator(run, "KICKOFF", body, { fullProtocol: true });
  }

  /** Durable context for (fresh) coordinator chats: reviewed context file + records digest from disk. */
  private projectContext(run: RunRow): string {
    const b = this.brief(run);
    const ch = this.d.config.chats;
    return contextBlock(this.d.factoryRoot, this.d.contextFile ?? "", ch.maxDigestChars, ch.maxContextChars, b.replay_of ?? b.experiment_id);
  }

  // ---------- planning (payload saved + state checkpointed BEFORE any submission)

  private planCoordinator(run: RunRow, kind: string, body: string, opts: { fullProtocol?: boolean; review?: OpReview; extra?: Record<string, string | number> } = {}): OpRow {
    const cycle = run.cycle_id + 1;
    const nonce = newNonce();
    // Whatever reaches Tab 1 first in a run (normally KICKOFF; a WORKER_REPORT when the brief has an
    // initial_instruction) must carry the full protocol and the brief.
    const first = !this.d.store.opsForRun(run.id).some((o) => o.kind === "coordinator");
    if (!opts.fullProtocol && first) {
      body = [protocolBlock(this.d.protocolDir, "coordinator-protocol.md"), "", "EXPERIMENT BRIEF (reviewed by the operator; this is the complete scope for this run):", briefForCoordinator(this.brief(run)), "", this.projectContext(run), "", body].join("\n");
      opts = { ...opts, fullProtocol: true };
    }
    // A fresh coordinator chat: at the start of every run (config) or when the operator asked for one.
    const pendingNew = this.d.store.getSetting("new_chat:coordinator") === "1";
    const newConversation = (first && this.d.config.chats.newCoordinatorPerRun) || pendingNew;
    const head = header({ nonce, runId: run.id, experimentId: run.experiment_id, cycleId: cycle, kind, extra: opts.extra });
    const tail = opts.fullProtocol ? "" : `\n\n${protocolBlock(this.d.protocolDir, "coordinator-protocol.md", "REMINDER")}`;
    const fullText = `${head}\n${body}${tail}`;
    const file = this.write(run.id, `messages/${String(cycle).padStart(3, "0")}-to-coordinator-${kind}.md`, fullText);
    const text = clip(fullText, this.d.config.browser.maxMessageChars, this.refOf(file));
    return this.d.store.tx(() => {
      const meta: Record<string, unknown> = opts.review ? { review: opts.review } : {};
      if (newConversation) meta.newConversation = true;
      if (pendingNew) this.d.store.setSetting("new_chat:coordinator", null);
      const op = this.d.store.createOp({ runId: run.id, kind: "coordinator", purpose: kind, cycleId: cycle, nonce, payloadPath: file, payloadText: text, meta });
      this.d.store.updateRun(run.id, { state: "COORDINATOR_PENDING", pending_op_id: op.id, pending_inbound_id: null, cycle_id: cycle, last_action: `plan:coordinator:${kind}` });
      return op;
    });
  }

  private planSpecialist(run: RunRow, question: string, env: Envelope): OpRow {
    const n = run.counters.specialistConsultations + 1;
    const consultationId = `${run.id}-C${n}`;
    const nonce = newNonce();
    const lastWorker = this.d.store.inboundForRun(run.id, "worker").pop();
    const observations = lastWorker ? clip(lastWorker.content, Math.floor(this.d.config.browser.maxMessageChars * 0.6), this.refOf(lastWorker.content_path)) : "(no worker report yet in this run)";
    const refs = [...new Set([...(env.evidence_refs ?? []), ...((lastWorker?.meta.changedFiles as string[]) ?? [])])];
    const fullText = [
      header({ nonce, runId: run.id, experimentId: run.experiment_id, cycleId: run.cycle_id, kind: "CONSULTATION", extra: { consultation_id: consultationId } }),
      protocolBlock(this.d.protocolDir, "specialist-protocol.md"),
      "",
      `Experiment: ${run.experiment_id} — ${this.brief(run).title}`,
      "QUESTION FROM THE COORDINATOR:",
      question,
      "",
      "LATEST WORKER OBSERVATIONS (verbatim; may be clipped):",
      "BEGIN WORKER REPORT",
      observations,
      "END WORKER REPORT",
      "",
      `Evidence file references (the files themselves are not attached): ${refs.length ? refs.join(", ") : "(none)"}`,
    ].join("\n");
    const file = this.write(run.id, `messages/${String(run.cycle_id).padStart(3, "0")}-to-specialist-${consultationId}.md`, fullText);
    const text = clip(fullText, this.d.config.browser.maxMessageChars, this.refOf(file));
    return this.d.store.tx(() => {
      const pendingNew = this.d.store.getSetting("new_chat:specialist") === "1";
      if (pendingNew) this.d.store.setSetting("new_chat:specialist", null);
      const op = this.d.store.createOp({ runId: run.id, kind: "specialist", purpose: "CONSULTATION", cycleId: run.cycle_id, nonce, payloadPath: file, payloadText: text, meta: { consultationId, question, ...(pendingNew ? { newConversation: true } : {}) } });
      this.d.store.updateRun(run.id, { state: "SPECIALIST_PENDING", pending_op_id: op.id, pending_inbound_id: null, last_action: `plan:specialist:${consultationId}` });
      return op;
    });
  }

  private planWorker(run: RunRow, message: string, o: { newSession: boolean; reason: string; handoffText?: string; handoffData?: unknown }): OpRow {
    const b = this.brief(run);
    const taskId = `T${this.d.store.opsForRun(run.id).filter((x) => x.kind === "worker").length + 1}`;
    const preamble = fillWorkerPreamble(protocolBlock(this.d.protocolDir, "worker-preamble.md"), b, run.id, run.cycle_id, taskId);
    const text = [o.handoffText ? `${o.handoffText}\n\n---\n` : "", preamble, message].join("\n");
    const file = this.write(run.id, `messages/${String(run.cycle_id).padStart(3, "0")}-to-worker-${taskId}.md`, text);
    const messageId = this.d.worker.newMessageId();
    return this.d.store.tx(() => {
      let handoffId: number | null = null;
      if (o.handoffText) {
        const hf = this.write(run.id, `handoffs/handoff-${taskId}.md`, o.handoffText);
        handoffId = this.d.store.addHandoff(run.id, run.cycle_id, hf, o.handoffText, o.handoffData ?? null);
      }
      const op = this.d.store.createOp({
        runId: run.id,
        kind: "worker",
        purpose: taskId,
        cycleId: run.cycle_id,
        messageId,
        newSession: o.newSession,
        handoffId,
        payloadPath: file,
        payloadText: text,
        meta: { reason: o.reason },
      });
      this.d.store.updateRun(run.id, { state: "WORKER_PENDING", pending_op_id: op.id, pending_inbound_id: null, last_action: `plan:worker:${taskId}${o.newSession ? ":new-session" : ""}` });
      return op;
    });
  }

  // ---------- browser operations

  private async driveChatOp(run: RunRow): Promise<void> {
    const { store, chat } = this.d;
    let op = store.getOp(run.pending_op_id!)!;
    const role = op.kind as ChatRole;

    if (op.status === "planned" || op.status === "submitting" || op.status === "uncertain") {
      const review = op.meta.review as OpReview | undefined;
      if (review && run.approvals[review.code] !== review.itemId) {
        return this.pause(run, `review:${review.code}`, review.detail);
      }
      if (!op.counted) {
        const lim = this.limitHit(run, op.kind);
        if (lim) return this.pause(run, `limit:${lim}`, `Limit ${lim} reached before sending ${op.kind} message ${op.purpose}. Payload saved at ${op.payload_path}. Raise it with: harness resume --limit ${lim}=<n>`);
      }
      // A first message that opens a NEW chat cannot be looked up in the old conversation.
      const openingNewChat = !!op.meta.newConversation && !op.meta.conversationUrl;
      if (openingNewChat && op.status !== "planned" && run.approvals.resubmit !== op.id) {
        return this.pause(run, "submission_uncertain", `The first message of a NEW ${role} chat (nonce ${op.nonce}) may or may not have been sent. Look in the ChatGPT sidebar for a new chat containing it. If it is there, register it with 'harness chat use ${role} <url>' and resume; if not, run 'harness resume --approve resubmit'.`);
      }
      // Reconcile before any (re)submission: was this nonce already accepted?
      if (!openingNewChat && (op.attempts > 0 || op.status !== "planned")) {
        const chk = await chat.findSubmission(role, op.nonce!);
        if (chk.found) {
          store.updateOp(op.id, { status: "accepted", external_ref: chk.userMessageId ?? null });
          store.addTransition(run.id, run.state, run.state, run.status, run.status, "submission_reconciled_found", { op: op.id, role });
          return;
        }
        if (!chk.reliable) return this.pause(run, "submission_unverifiable", `Could not inspect the ${role} conversation to check nonce ${op.nonce}: ${chk.detail ?? ""}`);
        if (op.status === "uncertain" && run.approvals.resubmit !== op.id) {
          return this.pause(run, "submission_uncertain", `The ${role} message (nonce ${op.nonce}) may or may not have been accepted and is not visible now. Check the conversation manually, then run 'harness resume --approve resubmit' to send it again.`);
        }
      }
      let homeUrl: string | null = null;
      if (openingNewChat) {
        homeUrl = role === "coordinator" ? this.d.config.browser.baseUrl.replace(/\/$/, "") + "/" : (store.getRole("specialist")?.url.replace(/\/c\/.*$/, "") ?? null);
        if (!homeUrl) return this.pause(run, "browser:not_configured", "No specialist GPT conversation is registered, so its GPT page is unknown. Run: harness setup");
      } else {
        const ready = await chat.checkReady(role);
        if (!ready.ok) return this.pause(run, `browser:${ready.problem}`, `${role}: ${ready.detail ?? ""}`);
      }

      run = store.getRun(run.id)!;
      store.tx(() => {
        if (!op.counted) {
          const c = run.counters;
          const counters = role === "coordinator" ? { ...c, cycles: c.cycles + 1 } : { ...c, specialistConsultations: c.specialistConsultations + 1 };
          store.updateRun(run.id, { counters, last_action: `submit:${role}:${op.purpose}` });
        }
        op = store.updateOp(op.id, { status: "submitting", attempts: op.attempts + 1, counted: 1 });
      });
      const out = homeUrl ? await chat.submitNew(role, homeUrl, op.payload_text, op.nonce!) : await chat.submit(role, op.payload_text, op.nonce!);
      this.d.log.log("info", "chat.submit", { run_id: run.id, role, op: op.id, outcome: out.status, new_chat: !!homeUrl });
      switch (out.status) {
        case "accepted": {
          const newUrl = (out as { conversationUrl?: string }).conversationUrl;
          if (homeUrl && newUrl) {
            const parsed = parseConversationUrl(newUrl);
            const prev = store.getRole(role)?.url ?? null;
            store.tx(() => {
              store.setRole(role, { url: parsed!.canonical, conversationId: parsed!.conversationId, gptId: parsed!.gptId ?? (role === "specialist" ? store.getRole("specialist")?.gpt_id ?? null : null), title: null });
              op = store.updateOp(op.id, { meta: { ...op.meta, conversationUrl: parsed!.canonical, previousConversationUrl: prev } });
              store.addTransition(run.id, run.state, run.state, run.status, run.status, "new_conversation", { role, url: parsed!.canonical, previous: prev });
            });
            this.d.log.log("info", "chat.new_conversation", { run_id: run.id, role, url: parsed!.canonical, previous: prev });
          }
          store.updateOp(op.id, { status: "accepted", external_ref: out.userMessageId ?? null });
          const cur = store.getRun(run.id)!;
          if (cur.approvals.resubmit === op.id) store.updateRun(run.id, { approvals: { ...cur.approvals, resubmit: undefined } });
          return;
        }
        case "not_submitted":
          store.updateOp(op.id, { status: "planned", error: out.detail });
          if (op.attempts >= 2) {
            this.failure(store.getRun(run.id)!, "browser_submit_failed", out.detail);
            return this.pause(store.getRun(run.id)!, "submission_failed", `${role}: ${out.detail}`);
          }
          return; // loop retries after reconciling
        case "uncertain":
          store.updateOp(op.id, { status: "uncertain", error: out.detail });
          return this.pause(store.getRun(run.id)!, "submission_uncertain", `${role}: ${out.detail}. Nothing will be resent automatically.`);
        case "blocked":
          // Blocked outcomes are detected before the send click, so nothing was sent in this attempt.
          store.updateOp(op.id, { status: "planned", error: out.detail });
          return this.pause(store.getRun(run.id)!, `browser:${out.problem}`, `${role}: ${out.detail}`);
      }
    }

    if (op.status === "accepted") {
      const reply = await chat.waitForReply(role, op.nonce!, {
        timeoutMs: this.d.config.browser.replyTimeoutMinutes * 60_000,
        shouldStop: this.shouldStop(run.id),
      });
      run = store.getRun(run.id)!;
      if (reply.status === "interrupted") return;
      if (reply.status === "timeout") return this.pause(run, "reply_timeout", `${role}: ${reply.detail}`);
      if (reply.status === "blocked") {
        if (reply.problem === "visible_error") run = this.failure(run, `browser_reply_error_${role}`, reply.detail);
        return this.pause(run, `browser:${reply.problem}`, `${role}: ${reply.detail}`);
      }
      const existing = store.findInbound(role, reply.messageId);
      if (existing && existing.op_id !== op.id) {
        return this.pause(run, "duplicate_reply", `The ${role} reply ${reply.messageId} was already received for operation ${existing.op_id}; it will not be forwarded twice.`);
      }
      let inbound = existing;
      if (!inbound) {
        const meta: Record<string, unknown> = { cycle: op.cycle_id };
        if (role === "specialist") {
          const sx = extractSpecialistEnvelope(reply.markdown);
          meta.verdict = sx.status === "found" ? sx.value.verdict : "unknown";
          meta.consultationId = op.meta.consultationId;
          meta.asksForUpload = asksForUpload(reply.markdown);
        }
        const file = this.write(run.id, `inbound/${String(op.cycle_id).padStart(3, "0")}-from-${role}-op${op.id}.md`, reply.markdown);
        inbound = store.insertInbound({ runId: run.id, source: role, opId: op.id, externalId: reply.messageId, contentPath: file, content: reply.markdown, meta });
      }
      this.d.log.log("info", "chat.reply", { run_id: run.id, role, op: op.id, inbound: inbound.id, chars: inbound.content.length });
      const inb = inbound;
      if (role === "coordinator") {
        store.tx(() => {
          store.updateOp(op.id, { status: "completed", result_inbound_id: inb.id });
          store.updateRun(run.id, { state: "DECISION_PENDING", pending_inbound_id: inb.id, pending_op_id: null, last_action: "received:coordinator" });
        });
        return;
      }
      store.tx(() => {
        store.updateOp(op.id, { status: "completed", result_inbound_id: inb.id });
        this.forwardSpecialist(store.getRun(run.id)!, op, inb);
      });
    }
  }

  private forwardSpecialist(run: RunRow, op: OpRow, inbound: InboundRow): void {
    const verdict = String(inbound.meta.verdict ?? "unknown");
    const body = [
      `The specialist answered consultation ${String(op.meta.consultationId)} (verdict: ${verdict}).`,
      `Question that was asked:\n${String(op.meta.question ?? "")}`,
      "",
      "BEGIN SPECIALIST REPLY",
      clip(inbound.content, Math.floor(this.d.config.browser.maxMessageChars * 0.8), this.refOf(inbound.content_path)),
      "END SPECIALIST REPLY",
      "",
      `Remaining limits: ${remainingLimits(run.counters, run.limits, this.activeMs(run))}`,
    ].join("\n");
    const review: OpReview | undefined =
      inbound.meta.asksForUpload && this.d.config.protocol.pauseOnSpecialistAttachmentRequest
        ? { code: "attachment", itemId: inbound.id, detail: `The specialist asked for a file/screenshot the controller cannot upload (see ${inbound.content_path}). Provide it manually in the conversation or approve forwarding without it: harness resume --approve attachment` }
        : undefined;
    this.planCoordinator(run, "SPECIALIST_ANSWER", body, { review, extra: { consultation_id: String(op.meta.consultationId) } });
  }

  // ---------- decisions

  private validationContext(run: RunRow, inbound: InboundRow): ValidationContext {
    const workers = this.d.store.inboundForRun(run.id, "worker");
    const specs = this.d.store.inboundForRun(run.id, "specialist");
    const lastSpec = specs[specs.length - 1];
    return {
      runId: run.id,
      expectedCycleId: run.cycle_id,
      brief: this.brief(run),
      factoryRoot: this.d.factoryRoot,
      maxMessageChars: this.d.config.browser.maxMessageChars,
      completedWorkerReports: workers.filter((w) => w.meta.status === "completed").length,
      latestSpecialistVerdict: lastSpec ? String(lastSpec.meta.verdict ?? "unknown") : null,
      approvals: { scope: run.approvals.scope === inbound.id, attachment: run.approvals.attachment === inbound.id },
    };
  }

  private async decide(run: RunRow): Promise<void> {
    const { store } = this.d;
    const inbound = store.getInbound(run.pending_inbound_id!)!;
    const raw = inbound.content;
    const ctx = this.validationContext(run, inbound);
    const expected = { runId: run.id, experimentId: run.experiment_id, cycleId: run.cycle_id };

    // Operator-approved interpreted candidate from an earlier pause.
    const prior = store.decisions(run.id).filter((x) => x.inbound_id === inbound.id && x.status === "review" && x.method === "deepseek" && x.envelope);
    if (prior.length && run.approvals.candidate === inbound.id) {
      const v = validateEnvelope(prior[prior.length - 1].envelope as Envelope, ctx);
      if (v.ok) return this.route(run, v.envelope, inbound, "deepseek");
      return this.reviewPause(run, inbound, v.reasons, "deepseek", v.envelope);
    }

    const ex = extractEnvelope(raw);
    if (ex.status === "found") {
      const v = validateEnvelope(ex.value, ctx);
      if (v.ok) return this.route(run, v.envelope, inbound, "deterministic");
      if (v.disposition === "review") {
        if (this.tryScopeRephrase(run, inbound, v.reasons, v.envelope)) return;
        return this.reviewPause(run, inbound, v.reasons, "deterministic", v.envelope);
      }
      store.addDecision({ run_id: run.id, cycle_id: run.cycle_id, inbound_id: inbound.id, action: ex.value.action, method: "deterministic", status: "rejected", envelope: ex.value, reasons: v.reasons });
      return this.invalidResponse(run, inbound, v.reasons);
    }

    const reasons = [describeExtraction(ex)];
    if (this.d.interpreter) {
      const l = run.limits;
      const c = run.counters;
      if (c.deepseekCalls >= l.maxDeepseekCalls || c.deepseekCostUsd >= l.maxDeepseekCostUsd) {
        return this.pause(run, "limit:deepseek", `DeepSeek usage limit reached (${c.deepseekCalls} calls, $${c.deepseekCostUsd.toFixed(4)}). Unparseable coordinator reply preserved at ${inbound.content_path}.`);
      }
      try {
        const res = await this.d.interpreter.interpret(raw, expected);
        run = store.updateRun(run.id, {
          counters: { ...c, deepseekCalls: c.deepseekCalls + 1, deepseekCostUsd: c.deepseekCostUsd + res.usage.costUsd, deepseekTokens: c.deepseekTokens + res.usage.promptTokens + res.usage.completionTokens },
        });
        const vet = vetCandidate(res, raw, expected);
        if (vet.accept && this.d.config.deepseek.autoAcceptValidated) {
          const v = validateEnvelope(vet.envelope, ctx);
          if (v.ok) return this.route(run, v.envelope, inbound, "deepseek");
          reasons.push(...v.reasons);
        } else if (!vet.accept) reasons.push(...vet.reasons);
        if (vet.envelope) {
          store.addDecision({ run_id: run.id, cycle_id: run.cycle_id, inbound_id: inbound.id, action: vet.envelope.action, method: "deepseek", status: "review", envelope: vet.envelope, reasons });
          this.write(run.id, `decisions/candidate-inbound${inbound.id}.json`, JSON.stringify({ reasons, candidate: vet.envelope }, null, 2));
        }
      } catch (e) {
        reasons.push(`interpreter_error:${(e as Error).message}`);
      }
    }
    store.addDecision({ run_id: run.id, cycle_id: run.cycle_id, inbound_id: inbound.id, action: null, method: "none", status: "rejected", envelope: null, reasons });
    return this.invalidResponse(store.getRun(run.id)!, inbound, reasons);
  }

  /**
   * When an instruction ONLY trips the brief's auto-review patterns (no foreign experiment IDs, no
   * other review reason), ask the coordinator once to reword it without the matched phrases. The
   * reworded instruction goes through the same deterministic check; a second hit pauses as usual.
   */
  private tryScopeRephrase(run: RunRow, inbound: InboundRow, reasons: string[], env: Envelope): boolean {
    if (!reasons.length || !reasons.every((r) => r.startsWith("scope:prohibited_pattern:"))) return false;
    const source = this.d.store.getOp(inbound.op_id);
    if (source?.purpose === "SCOPE_REPHRASE") return false; // already asked once for this decision
    const text = [env.message ?? "", env.handoff?.next_permitted_action ?? ""].join("\n");
    const hits = scopeMatches(text, this.brief(run));
    if (!hits.length) return false;
    this.d.store.addDecision({ run_id: run.id, cycle_id: run.cycle_id, inbound_id: inbound.id, action: env.action, method: "deterministic", status: "rejected", envelope: env, reasons: [...reasons, "scope_rephrase_requested"] });
    const body = [
      "Your instruction contains wording that matches this experiment's automatic scope-review patterns:",
      ...hits.map((h) => `- "${h.matched}"  (pattern: ${h.pattern})`),
      "",
      "The controller cannot tell whether this asks the worker to do something out of scope.",
      "- If it does NOT (e.g. 'edit method' meaning 'how you edited'), restate the SAME decision using wording that avoids these phrases.",
      "- If it does, change the instruction so it stays within the experiment scope.",
      "Negated guardrails ('do not …') are fine and need no change. Reply with one valid envelope for THIS message's header.",
    ].join("\n");
    this.planCoordinator(run, "SCOPE_REPHRASE", body);
    this.d.log.log("info", "decision.scope_rephrase_requested", { run_id: run.id, hits: hits.map((h) => h.matched).join(" | ") });
    return true;
  }

  private reviewPause(run: RunRow, inbound: InboundRow, reasons: string[], method: "deterministic" | "deepseek", env: Envelope): void {
    this.d.store.addDecision({ run_id: run.id, cycle_id: run.cycle_id, inbound_id: inbound.id, action: env.action, method, status: "review", envelope: env, reasons });
    const code = reasons[0].split(":")[0];
    const specs = this.d.store.inboundForRun(run.id, "specialist");
    const both = env.action === "EXPERIMENT_COMPLETE" && specs.length ? ` Latest specialist reply: ${specs[specs.length - 1].content_path}.` : "";
    const hint =
      code === "scope" ? " If the scope is actually fine, approve with: harness resume --approve scope" : code === "attachment_required" ? " Approve continuing without it: harness resume --approve attachment" : " Ask the coordinator to reconsider with: harness resume --reask";
    this.pause(run, `review:${code}`, `${env.action} needs operator review: ${reasons.join("; ")}. Coordinator reply: ${inbound.content_path}.${both}${hint}`);
  }

  private invalidResponse(run: RunRow, inbound: InboundRow, reasons: string[]): void {
    run = this.failure(run, "invalid_coordinator_response", reasons.join("; "));
    const allowed = this.d.config.protocol.reaskOnInvalid;
    if (run.counters.reasks < allowed && !this.limitHit(run, "coordinator")) {
      run = this.d.store.updateRun(run.id, { counters: { ...run.counters, reasks: run.counters.reasks + 1 } });
      const body = [
        `Your previous reply (cycle ${run.cycle_id}) could not be routed by the controller:`,
        ...reasons.map((r) => `- ${r}`),
        "",
        "Please restate the SAME decision (do not change it) with exactly one valid ```json envelope using the header values of THIS message.",
      ].join("\n");
      this.planCoordinator(run, "PROTOCOL_CORRECTION", body);
      return;
    }
    this.pause(run, "invalid_coordinator_response", `Coordinator reply could not be routed: ${reasons.join("; ")}. Preserved at ${inbound.content_path}. Options: harness resume --reask, or fix the conversation manually.`);
  }

  private route(run: RunRow, env: Envelope, inbound: InboundRow, method: "deterministic" | "deepseek"): void {
    const { store } = this.d;
    store.addDecision({ run_id: run.id, cycle_id: run.cycle_id, inbound_id: inbound.id, action: env.action, method, status: "accepted", envelope: env, reasons: [] });
    for (const f of env.findings) store.addFinding(run.id, run.cycle_id, f.statement, f.classification, f.evidence_refs);
    const approvals: Approvals = { ...run.approvals };
    delete approvals.scope;
    delete approvals.candidate;
    delete approvals.attachment;
    run = store.updateRun(run.id, { counters: { ...run.counters, reasks: 0 }, approvals, last_action: `decision:${env.action}` });
    this.d.log.log("info", "decision.routed", { run_id: run.id, cycle: run.cycle_id, action: env.action, method });

    switch (env.action) {
      case "SEND_TO_OPENCODE":
        this.planWorker(run, env.message!, { newSession: !run.current_session_id, reason: run.current_session_id ? "continue" : "initial" });
        return;
      case "NEW_OPENCODE_SESSION": {
        const workers = store.inboundForRun(run.id, "worker");
        const detected = [...new Set(workers.flatMap((w) => (w.meta.changedFiles as string[]) ?? []))];
        const evidence = [...new Set([...detected.filter((f) => f.startsWith(this.brief(run).evidence_dir)), ...store.decisions(run.id).flatMap((d) => ((d.envelope as Envelope | null)?.evidence_refs ?? []))])];
        const text = renderHandoff({
          runId: run.id,
          cycleId: run.cycle_id,
          brief: this.brief(run),
          data: env.handoff!,
          reason: env.reason,
          evidenceSoFar: evidence,
          docChangesDetected: detected.filter((f) => /^(experiments|recipes|environments|claims)\//.test(f)),
          sessions: store.sessions(run.id),
          counters: run.counters,
          limits: run.limits,
          activeMs: this.activeMs(run),
          failures: store.failures(run.id),
        });
        this.planWorker(run, env.message!, { newSession: true, reason: `handoff: ${env.reason}`, handoffText: text, handoffData: env.handoff });
        return;
      }
      case "ASK_SPECIALIST":
        this.planSpecialist(run, env.message!, env);
        return;
      case "EXPERIMENT_COMPLETE": {
        const file = this.write(run.id, "completion.json", JSON.stringify({ outcome: env.outcome, envelope: env, coordinatorReply: inbound.content_path, at: new Date(this.now()).toISOString() }, null, 2));
        store.updateRun(run.id, { status: "completed", state: "DONE", outcome: env.outcome ?? null, pending_op_id: null, pending_inbound_id: null, last_action: `complete:${env.outcome}` });
        this.d.log.log("info", "run.completed", { run_id: run.id, outcome: env.outcome, record: file });
        return;
      }
      case "PAUSE": {
        const body = `The operator resumed the run after your PAUSE (reason: ${env.reason}). Decide the next step for ${run.experiment_id}.`;
        this.planCoordinator(run, "RESUMED_AFTER_PAUSE", body);
        this.pause(store.getRun(run.id)!, "coordinator_requested_pause", env.reason);
        return;
      }
    }
  }

  // ---------- worker operations

  private async driveWorkerOp(run: RunRow): Promise<void> {
    const { store, worker } = this.d;
    let op = store.getOp(run.pending_op_id!)!;

    if (op.status === "planned" || op.status === "submitting" || op.status === "uncertain") {
      if (!op.counted) {
        const lim = this.limitHit(run, "worker");
        if (lim) return this.pause(run, `limit:${lim}`, `Limit ${lim} reached before worker task ${op.purpose}. Task saved at ${op.payload_path}. Raise it with: harness resume --limit ${lim}=<n>`);
      }
      if (!op.session_id) {
        let sid = op.new_session || !run.current_session_id ? null : run.current_session_id;
        if (!sid) {
          try {
            sid = await worker.createSession(`${run.experiment_id} ${run.id} ${op.purpose}`);
          } catch (e) {
            return this.backendTrouble(run, `create session failed: ${(e as Error).message}`);
          }
          const s = sid;
          store.tx(() => {
            store.addSession(run.id, s, op.handoff_id, String(op.meta.reason ?? ""));
            const cur = store.getRun(run.id)!;
            store.updateRun(run.id, { current_session_id: s, counters: { ...cur.counters, sessionsCreated: cur.counters.sessionsCreated + 1 } });
          });
          this.d.log.log("info", "worker.session_created", { run_id: run.id, session: s, handoff: op.handoff_id });
        }
        op = store.updateOp(op.id, { session_id: sid });
        run = store.getRun(run.id)!;
      }
      const sid = op.session_id!;
      if (op.attempts > 0 || op.status !== "planned") {
        const pres = await worker.findMessage(sid, op.message_id!);
        if (pres === "present") {
          store.updateOp(op.id, { status: "accepted" });
          store.addTransition(run.id, run.state, run.state, run.status, run.status, "submission_reconciled_found", { op: op.id, role: "worker" });
          return;
        }
        if (pres === "unknown") return this.backendTrouble(run, "cannot verify whether the worker task was accepted");
        // absent: OpenCode never stored it; resubmitting with the same messageID is safe.
      }
      if (!op.meta.before) {
        const before = snapshotDirs(this.d.factoryRoot, watchedDirs(this.brief(run).evidence_dir));
        op = store.updateOp(op.id, { meta: { ...op.meta, before } });
      }
      store.tx(() => {
        if (!op.counted) {
          const c = store.getRun(run.id)!.counters;
          store.updateRun(run.id, { counters: { ...c, workerTasks: c.workerTasks + 1 }, last_action: `submit:worker:${op.purpose}` });
        }
        op = store.updateOp(op.id, { status: "submitting", attempts: op.attempts + 1, counted: 1 });
      });
      const out = await worker.submit(sid, op.message_id!, op.payload_text);
      this.d.log.log("info", "worker.submit", { run_id: run.id, op: op.id, session: sid, message: op.message_id, outcome: out.status });
      if (out.status === "accepted") {
        store.updateOp(op.id, { status: "accepted" });
        return;
      }
      if (out.status === "rejected") {
        store.updateOp(op.id, { status: "failed", error: out.detail ?? "rejected" });
        return this.workerFailed(store.getRun(run.id)!, op, `OpenCode rejected the task: ${out.detail ?? ""}`, "", "");
      }
      const pres = await worker.findMessage(sid, op.message_id!);
      if (pres === "present") {
        store.updateOp(op.id, { status: "accepted" });
        return;
      }
      if (pres === "absent" && op.attempts < 2) {
        store.updateOp(op.id, { status: "planned", error: out.detail ?? null });
        return;
      }
      store.updateOp(op.id, { status: "uncertain", error: out.detail ?? null });
      return this.backendTrouble(store.getRun(run.id)!, `worker submission uncertain: ${out.detail ?? ""}`);
    }

    if (op.status === "accepted") {
      const res = await worker.waitForCompletion(op.session_id!, op.message_id!, {
        timeoutMs: this.d.config.opencode.taskTimeoutMinutes * 60_000,
        shouldStop: this.shouldStop(run.id),
      });
      run = store.getRun(run.id)!;
      switch (res.status) {
        case "interrupted":
          return;
        case "blocked":
          return this.pause(run, `worker_blocked:${res.kind}`, `OpenCode is waiting for a ${res.kind} answer: ${res.detail}. Answer it with 'opencode attach ${this.d.config.opencode.baseUrl}' (session ${op.session_id}), then run 'harness resume'. The harness never auto-approves.`);
        case "timeout":
          return this.pause(run, "worker_timeout", `${res.detail}. The task may still be running in session ${op.session_id}. 'harness resume' keeps waiting; 'harness stop --abort-worker' aborts it.`);
        case "stalled": {
          if (!res.aborted) {
            const transcript = this.write(run.id, `worker/${op.purpose}-loop-transcript.md`, res.transcript);
            store.updateOp(op.id, { meta: { ...op.meta, inspectionLoop: res.detail, transcript } });
            return this.pause(run, "worker_inspection_loop", `${res.detail} The harness could not confirm the worker stopped. Attach with 'opencode attach ${this.d.config.opencode.baseUrl} -s ${op.session_id}', interrupt it and wait until idle, then 'harness resume'. Partial transcript: ${transcript}.`);
          }
          store.tx(() => {
            store.updateOp(op.id, { status: "failed", error: res.detail });
            this.workerFailed(run, op, `Browser inspection loop interrupted: ${res.detail}`, res.text, res.transcript, res.assistantMessageIds);
          });
          return this.pause(store.getRun(run.id)!, "worker_inspection_loop", `${res.detail} The worker session was interrupted and confirmed idle; its partial output is saved. Review it, then 'harness resume' forwards the failure to the coordinator without resubmitting the old task. The browser and backend were not restarted.`);
        }
        case "backend_unavailable": {
          await this.tryRestart(run, res.detail);
          const cur = store.getRun(run.id)!;
          store.tx(() => {
            store.updateOp(op.id, { status: "failed", error: res.detail });
            this.workerFailed(cur, op, `OpenCode backend became unavailable during the task: ${res.detail}. The in-flight task was lost.`, "", "");
          });
          return;
        }
        case "failed":
          store.tx(() => {
            store.updateOp(op.id, { status: "failed", error: res.error });
            this.workerFailed(run, op, res.error, res.text, res.transcript, res.assistantMessageIds);
          });
          return;
        case "completed": {
          const after = snapshotDirs(this.d.factoryRoot, watchedDirs(this.brief(run).evidence_dir));
          const diff = diffSnapshots((op.meta.before as DirSnapshot) ?? {}, after);
          const changed = [...diff.added, ...diff.modified];
          const tfile = this.write(run.id, `worker/${op.purpose}-transcript.md`, res.transcript);
          const externalId = res.assistantMessageIds[res.assistantMessageIds.length - 1];
          const existing = this.d.store.findInbound("worker", externalId);
          if (existing && existing.op_id !== op.id) return this.pause(run, "duplicate_reply", `Worker reply ${externalId} was already forwarded for operation ${existing.op_id}.`);
          const file = this.write(run.id, `inbound/${String(op.cycle_id).padStart(3, "0")}-from-worker-${op.purpose}.md`, res.text);
          const r0 = run;
          store.tx(() => {
            const inbound =
              existing ??
              store.insertInbound({ runId: r0.id, source: "worker", opId: op.id, externalId, contentPath: file, content: res.text, meta: { status: "completed", changedFiles: changed, diff, transcript: tfile, touchedFiles: res.touchedFiles, cost: res.cost, tokens: res.tokens } });
            store.updateOp(op.id, { status: "completed", result_inbound_id: inbound.id });
            const r1 = store.updateRun(r0.id, { counters: { ...r0.counters, consecutiveFailures: 0 } });
            this.planWorkerReport(r1, op, diff, res.text, file);
          });
          return;
        }
      }
    }
    if (op.status === "failed" || op.status === "completed") {
      // Only reachable if state was edited by hand: finished op but nothing planned.
      return this.pause(run, "controller_error", `Worker op ${op.id} is ${op.status} but no follow-up was planned; resume with --reask.`);
    }
  }

  private planWorkerReport(run: RunRow, op: OpRow, diff: { added: string[]; modified: string[]; removed: string[] }, text: string, file: string): void {
    const body = [
      `Worker task ${op.purpose} completed (OpenCode session ${op.session_id}, message ${op.message_id}).`,
      `Files added during the task: ${diff.added.join(", ") || "(none)"}`,
      `Files modified during the task: ${diff.modified.join(", ") || "(none)"}`,
      diff.removed.length ? `Files REMOVED during the task: ${diff.removed.join(", ")}` : "",
      "",
      "BEGIN WORKER REPORT",
      clip(text || "(the worker produced no text)", Math.floor(this.d.config.browser.maxMessageChars * 0.8), this.refOf(file)),
      "END WORKER REPORT",
      "",
      `Remaining limits: ${remainingLimits(run.counters, run.limits, this.activeMs(run))}`,
    ]
      .filter((x) => x !== "")
      .join("\n");
    this.planCoordinator(run, "WORKER_REPORT", body, { extra: { task: op.purpose } });
  }

  private workerFailed(run: RunRow, op: OpRow, error: string, text: string, transcript: string, ids: string[] = []): void {
    run = this.failure(run, "worker_task_failed", error);
    const tfile = transcript ? this.write(run.id, `worker/${op.purpose}-transcript.md`, transcript) : null;
    const externalId = ids[ids.length - 1] ?? `failed:${op.message_id}`;
    const file = this.write(run.id, `inbound/${String(op.cycle_id).padStart(3, "0")}-from-worker-${op.purpose}-FAILED.md`, `${error}\n\n${text}`);
    if (!this.d.store.findInbound("worker", externalId)) {
      this.d.store.insertInbound({ runId: run.id, source: "worker", opId: op.id, externalId, contentPath: file, content: `${error}\n\n${text}`, meta: { status: "failed", transcript: tfile } });
    }
    const body = [
      `Worker task ${op.purpose} FAILED (session ${op.session_id ?? "?"}).`,
      `Error: ${error}`,
      `Consecutive failures: ${run.counters.consecutiveFailures}/${run.limits.maxConsecutiveFailures}.`,
      text ? `\nBEGIN PARTIAL WORKER OUTPUT\n${clip(text, Math.floor(this.d.config.browser.maxMessageChars * 0.6), this.refOf(file))}\nEND PARTIAL WORKER OUTPUT` : "",
      "",
      "Decide the next step. Do not assume any part of the task took effect; ask the worker to inspect state first.",
    ].join("\n");
    this.planCoordinator(run, "WORKER_FAILURE", body, { extra: { task: op.purpose } });
  }

  private async tryRestart(run: RunRow, why: string): Promise<boolean> {
    const cfg = this.d.config.opencode;
    if (!cfg.manageBackend || !cfg.autoRestartOnFailure) return false;
    if (run.counters.backendRestarts >= MAX_BACKEND_RESTARTS) return false;
    const h = await this.d.worker.health();
    if (h.ok) return true;
    this.d.log.log("warn", "backend.restart", { run_id: run.id, why });
    const ok = await this.d.worker.restartOwnedBackend();
    const cur = this.d.store.getRun(run.id)!;
    this.d.store.updateRun(run.id, { counters: { ...cur.counters, backendRestarts: cur.counters.backendRestarts + 1 } });
    return ok;
  }

  private async backendTrouble(run: RunRow, detail: string): Promise<void> {
    run = this.failure(run, "backend_unavailable", detail);
    if (run.counters.consecutiveFailures >= run.limits.maxConsecutiveFailures) {
      return this.pause(run, "limit:maxConsecutiveFailures", `${detail}. Consecutive failure limit reached.`);
    }
    const restarted = await this.tryRestart(run, detail);
    if (!restarted) return this.pause(this.d.store.getRun(run.id)!, "backend_unavailable", `${detail}. Check with 'harness backend health'; restart with 'harness backend restart'; then 'harness resume'.`);
    // restarted: the loop reconciles (findMessage) before anything is resubmitted
  }
}

function describeExtraction(ex: Extraction<Envelope>): string {
  switch (ex.status) {
    case "none":
      return "no_envelope: no ```json block containing mongoose-harness/v1";
    case "multiple":
      return `multiple_envelopes:${ex.count}`;
    case "invalid_json":
      return `invalid_json:${ex.error}`;
    case "invalid_schema":
      return `invalid_schema:${ex.issues.join(" | ")}`;
    default:
      return "unexpected";
  }
}
