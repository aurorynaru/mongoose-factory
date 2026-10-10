import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { Controller } from "../src/controller/machine.js";
import { FakeChat, FakeInterpreter, FakeWorker, type ReplySpec } from "../src/testing/fakes.js";
import { fixtureBrief, harness, loadScenarios, runScenario, type Harnessed } from "../src/testing/scenario.js";
import { Store } from "../src/store.js";
import { HARNESS_DIR } from "../src/config.js";
import { parseHeader } from "../src/protocol/prompts.js";
import { AUDIT_LABEL } from "../src/controller/action-audit.js";

const open: Harnessed[] = [];
afterEach(() => {
  for (const h of open.splice(0)) {
    try {
      h.store.close();
    } catch {
      /* already closed */
    }
  }
});
const track = (h: Harnessed) => (open.push(h), h);

const kindOf = (text: string) => parseHeader(text)?.kind;
const SEND = (message: string): ReplySpec => ({ envelope: { action: "SEND_TO_OPENCODE", reason: "next", message } });
const shared = JSON.parse(readFileSync(join(__dirname, "..", "fixtures", "scenarios", "scenarios.json"), "utf8")).shared;
const COMPLETE: ReplySpec = { envelope: shared.complete };
const WORKER_OK = shared.workerOk;

describe("fixture scenarios (same set as `harness dry-run`)", () => {
  for (const s of loadScenarios()) {
    it(`${s.name}: ${s.description}`, async () => {
      const r = await runScenario(s);
      open.push(r.h);
      for (const c of r.checks) expect(c.ok, `${c.name}: ${c.detail}`).toBe(true);
    });
  }
});

describe("direct worker routing", () => {
  it("preserves a usage-limit pause without failure counts, model switch, restart or resubmission", async () => {
    const h = track(harness({ coordinator: [SEND("Inspect FX_FixtureForm01")], worker: [{ status: "usage_limit", detail: "weekly usage limit" }] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("usage_limit");
    expect(run.counters.totalFailures).toBe(0);expect(h.worker.restarts).toBe(0);expect(h.worker.submissions).toHaveLength(1);
    expect(h.store.getOp(run.pending_op_id!)?.status).toBe("accepted");
    run = await h.controller.run(run.id);
    expect(run.pause_reason).toBe("usage_limit");expect(h.worker.submissions).toHaveLength(1);expect(h.worker.restarts).toBe(0);
  });
  it("enforces brief tool restrictions before submitting a task", async () => {
    const h = track(harness({ coordinator: [SEND("Inspect FX_FixtureForm01"), { envelope: { action: "PAUSE", reason: "done" } }], worker: [WORKER_OK] }));
    const brief = fixtureBrief();
    brief.brief.prohibited_actions.push("No JavaScript");
    const run = await h.controller.run(h.controller.createRun(brief).id);
    expect(h.worker.policies).toEqual([{ sessionId: run.current_session_id, policy: { denyBrowserJavaScript: true } }]);
    expect(h.worker.submissions).toHaveLength(1);
  });

  it("pauses without submitting or consuming a worker task if permissions cannot be enforced", async () => {
    const h = track(harness({ coordinator: [SEND("Inspect FX_FixtureForm01")] }));
    h.worker.configureSession = async () => { throw new Error("permission PATCH unavailable"); };
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("worker_policy_failed");
    expect(h.worker.submissions).toHaveLength(0);
    expect(run.counters.workerTasks).toBe(0);
    expect(h.store.getOp(run.pending_op_id!)?.status).toBe("planned");
  });

  it("wraps the coordinator instruction in the bounded worker preamble and reports back with evidence refs", async () => {
    const h = track(harness({ coordinator: [SEND("Create FX_FixtureVar and save."), COMPLETE], worker: [WORKER_OK] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.status).toBe("completed");
    const task = h.worker.submissions[0].text;
    expect(task).toContain("[HARNESS WORKER TASK");
    expect(task).toContain("Out of scope: bindings; IDOs; events; scripts; portals; EXP-901");
    expect(task.trim().endsWith("Create FX_FixtureVar and save.")).toBe(true);
    const report = h.chat.submissions.find((s) => kindOf(s.text) === "WORKER_REPORT")!.text;
    expect(report).toContain("evidence/EXP-900/after-save.png");
    expect(report).toContain("BEGIN WORKER REPORT");
    expect(existsSync(join(h.runsDir, run.id, "completion.json"))).toBe(true);
  });
});

describe("brief initial_instruction", () => {
  it("starts with the worker and still gives Tab 1 the full protocol and brief in its first message", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }], worker: [WORKER_OK] }));
    const b = fixtureBrief();
    b.brief.initial_instruction = "Inspect FX_FixtureForm01 and report its current Variables list.";
    const run = await h.controller.run(h.controller.createRun(b).id);
    expect(h.worker.submissions[0].text.trim().endsWith(b.brief.initial_instruction)).toBe(true);
    const first = h.chat.submissions[0].text;
    expect(kindOf(first)).toBe("WORKER_REPORT");
    expect(first).toContain("HARNESS PROTOCOL mongoose-harness/v1");
    expect(first).toContain("AC-2: Variable present after close/reopen");
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });
});

describe("operator note after a coordinator PAUSE", () => {
  it("adds the operator's decision to the pending resume message and sends it once", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "needs operator decision" } }, { envelope: { action: "PAUSE", reason: "ack" } }] }));
    const first = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(first.pause_reason).toBe("coordinator_requested_pause");
    const notes = h.controller.applyResumeOptions(first.id, { note: "Waive the ordering rule for this run only." });
    expect(notes).toContain("operator decision added to the pending resume message");
    await h.controller.run(first.id);
    const resumed = h.chat.submissions.filter((s) => s.role === "coordinator" && kindOf(s.text) === "RESUMED_AFTER_PAUSE");
    expect(resumed).toHaveLength(1);
    expect(resumed[0].text).toContain("Operator decision: Waive the ordering rule for this run only.");
  });

  it("refuses an empty note", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(() => h.controller.applyResumeOptions(run.id, { note: "  " })).toThrow(/non-empty/);
  });
});

describe("worker turn limit", () => {
  it("pauses first, then on resume forwards the stop to the coordinator without resubmitting the task", async () => {
    const h = track(harness({
      coordinator: [SEND("Do the bounded step."), { envelope: { action: "PAUSE", reason: "got the failure" } }],
      worker: [{ status: "turn_limit", detail: "Agent turn limit 40 exceeded at safe completed-tool boundary", text: "partial-marker-77" }],
    }));
    const first = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(first.pause_reason).toBe("worker_turn_limit");
    const submitted = h.worker.submissions.length;
    const second = await h.controller.run(first.id);
    expect(h.worker.submissions.length).toBe(submitted);
    const report = h.chat.submissions.filter((s) => s.role === "coordinator").map((s) => s.text).find((t) => t.includes("agent turn limit"));
    expect(report).toBeDefined();
    expect(report).toContain("Do not replay the original task");
    expect(report).toContain(AUDIT_LABEL);
    expect(second.pause_reason).toBe("coordinator_requested_pause");
  });
});

describe("specialist consultation", () => {
  it("sends the question plus the latest worker observations to Tab 2 and returns the full reply to Tab 1", async () => {
    const h = track(
      harness({
        coordinator: [SEND("Create FX_FixtureVar."), { envelope: { action: "ASK_SPECIALIST", reason: "why", message: "Why does the variable vanish after reopen?" } }, { envelope: { action: "PAUSE", reason: "thinking" } }],
        specialist: ["OBSERVATION: save succeeded. ASSUMPTION: needs regenerate.\n\n```json\n{\"protocol\": \"mongoose-harness/specialist-v1\", \"consultation_id\": \"{{consultation_id}}\", \"verdict\": \"insufficient_evidence\", \"required_verifications\": [\"reload\"]}\n```"],
        worker: [{ status: "completed", text: "HARNESS REPORT: variable absent after reopen (unique-marker-123)" }],
      }),
    );
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    const toSpec = h.chat.submissions.filter((s) => s.role === "specialist");
    expect(toSpec).toHaveLength(1);
    expect(toSpec[0].text).toContain("Why does the variable vanish after reopen?");
    expect(toSpec[0].text).toContain("unique-marker-123");
    expect(toSpec[0].text).toContain("OBSERVATIONS");
    const back = h.chat.submissions.filter((s) => s.role === "coordinator").find((s) => kindOf(s.text) === "SPECIALIST_ANSWER")!;
    expect(back.text).toContain("verdict: insufficient_evidence");
    expect(back.text).toContain("ASSUMPTION: needs regenerate.");
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("pauses when the specialist asks for a file the controller cannot upload, and continues after approval", async () => {
    const h = track(
      harness({
        coordinator: [{ envelope: { action: "ASK_SPECIALIST", reason: "q", message: "What is this dialog?" } }, { envelope: { action: "PAUSE", reason: "ok" } }],
        specialist: ["Could you please upload the screenshot of the dialog? I can't tell from text."],
      }),
    );
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("review:attachment");
    expect(h.chat.submissions.filter((s) => s.role === "coordinator")).toHaveLength(1);
    h.controller.applyResumeOptions(run.id, { approve: ["attachment"] });
    run = await h.controller.run(run.id);
    expect(h.chat.submissions.filter((s) => s.role === "coordinator")).toHaveLength(2);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });
});

describe("invalid response handling", () => {
  it("preserves the raw reply and never routes it", async () => {
    const raw = "I'd suggest OpenCode now creates the variable. Done.";
    const h = track(harness({ coordinator: [raw, raw], config: { protocol: { reaskOnInvalid: 0 } } }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("invalid_coordinator_response");
    expect(h.worker.submissions).toHaveLength(0);
    const inbound = h.store.inboundForRun(run.id, "coordinator");
    expect(readFileSync(inbound[0].content_path, "utf8")).toBe(raw);
  });

  it("rejects malformed JSON and multiple envelopes", async () => {
    const bad = "```json\n{\"protocol\": \"mongoose-harness/v1\", \"action\": \"PAUSE\",}\n```";
    const two = "```json\n{\"protocol\":\"mongoose-harness/v1\"}\n```\n```json\n{\"protocol\":\"mongoose-harness/v1\"}\n```";
    const h = track(harness({ coordinator: [bad, two] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("invalid_coordinator_response");
    const reasons = h.store.decisions(run.id).flatMap((d) => d.reasons);
    expect(reasons.some((r) => r.startsWith("invalid_json"))).toBe(true);
    expect(reasons.some((r) => r.startsWith("multiple_envelopes"))).toBe(true);
  });

  it("uses a DeepSeek candidate only when it quotes the reply verbatim, and never for completion", async () => {
    const raw = "Next, SEND_TO_OPENCODE: Create FX_FixtureVar on FX_FixtureForm01 and save.";
    const good = new FakeInterpreter({ found: true, confidence: "high", unresolved: [], candidate: { action: "SEND_TO_OPENCODE", reason: "explicit", message: "Create FX_FixtureVar on FX_FixtureForm01 and save." } });
    const h = track(harness({ coordinator: [raw, { envelope: { action: "PAUSE", reason: "x" } }], worker: [WORKER_OK], interpreter: good }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.submissions).toHaveLength(1);
    expect(h.store.decisions(run.id).find((d) => d.status === "accepted")?.method).toBe("deepseek");
    expect(run.counters.deepseekCalls).toBe(1);

    const invented = new FakeInterpreter({ found: true, confidence: "high", unresolved: [], candidate: { action: "SEND_TO_OPENCODE", reason: "r", message: "Create FX_FixtureVar and also bind it to an IDO." } });
    const h2 = track(harness({ coordinator: [raw], interpreter: invented, config: { protocol: { reaskOnInvalid: 0 } } }));
    const run2 = await h2.controller.run(h2.controller.createRun(fixtureBrief()).id);
    expect(h2.worker.submissions).toHaveLength(0);
    expect(run2.pause_reason).toBe("invalid_coordinator_response");
    expect(h2.store.decisions(run2.id).flatMap((d) => d.reasons)).toContain("invented_or_rephrased_message");

    const complete = new FakeInterpreter({ found: true, confidence: "high", unresolved: [], candidate: { action: "EXPERIMENT_COMPLETE", reason: "EXPERIMENT_COMPLETE all done" } });
    const h3 = track(harness({ coordinator: ["EXPERIMENT_COMPLETE all done"], interpreter: complete, config: { protocol: { reaskOnInvalid: 0 } } }));
    const run3 = await h3.controller.run(h3.controller.createRun(fixtureBrief()).id);
    expect(run3.status).toBe("paused");
    expect(run3.outcome).toBeNull();
  });

  it("pauses when the DeepSeek usage limit is reached", async () => {
    const i = new FakeInterpreter({ found: false, confidence: "low", unresolved: ["nothing explicit"], candidate: null });
    const h = track(harness({ coordinator: ["hmm", "hmm again"], interpreter: i, limits: { maxDeepseekCalls: 1 } }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(i.calls).toBe(1);
    expect(run.pause_reason).toBe("limit:deepseek");
  });
});

describe("duplicate submission prevention", () => {
  it("does not resubmit after a crash that happened right after the browser accepted the message", async () => {
    const h = track(harness({ coordinator: [{ submit: "crash_after_accept", envelope: { action: "PAUSE", reason: "p" } }] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("controller_error");
    expect(h.store.getOp(run.pending_op_id!)!.status).toBe("submitting");
    run = await h.controller.run(run.id);
    expect(h.chat.submissions).toHaveLength(1); // reconciled by nonce, not resent
    expect(run.pause_reason).toBe("coordinator_requested_pause");
    expect(h.store.transitions(run.id, 100).some((t) => t.event === "submission_reconciled_found")).toBe(true);
  });

  it("refuses to forward the same assistant message twice", async () => {
    const h = track(
      harness({
        coordinator: [
          { messageId: "dup-1", envelope: { action: "ASK_SPECIALIST", reason: "q", message: "Q?" } },
          { messageId: "dup-1", envelope: { action: "PAUSE", reason: "same message id delivered again" } },
        ],
        specialist: ["A."],
      }),
    );
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("duplicate_reply");
    expect(h.store.inboundForRun(run.id, "coordinator")).toHaveLength(1);
  });
});

describe("ambiguous browser submission timeout", () => {
  it("pauses, then on resume finds the message already accepted and continues without resending", async () => {
    const h = track(harness({ coordinator: [{ submit: "uncertain_accepted", envelope: { action: "PAUSE", reason: "p" } }] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("submission_uncertain");
    run = await h.controller.run(run.id);
    expect(h.chat.submissions).toHaveLength(1);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("stays paused when the message is not visible, and resends only after explicit operator approval", async () => {
    const h = track(harness({ coordinator: [{ submit: "uncertain_lost", envelope: { action: "PAUSE", reason: "never" } }, { envelope: { action: "PAUSE", reason: "second try" } }] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("submission_uncertain");
    run = await h.controller.run(run.id);
    expect(run.pause_reason).toBe("submission_uncertain");
    expect(h.chat.submissions).toHaveLength(1);
    h.controller.applyResumeOptions(run.id, { approve: ["resubmit"] });
    run = await h.controller.run(run.id);
    expect(h.chat.submissions).toHaveLength(2);
    expect(h.chat.submissions[0].nonce).toBe(h.chat.submissions[1].nonce);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("retries once when the text verifiably never left the composer", async () => {
    const h = track(harness({ coordinator: [{ submit: "not_submitted_once", envelope: { action: "PAUSE", reason: "ok" } }] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.chat.submissions).toHaveLength(2);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("pauses on a login screen / rate limit without sending", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "x" } }] }));
    h.chat.notReady.coordinator = { ok: false, problem: "login_required", detail: "login screen" };
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("browser:login_required");
    expect(h.chat.submissions).toHaveLength(0);
  });
});

describe("OpenCode task failure", () => {
  it("recovers once through the coordinator, then pauses on a second loop without replaying either task", async () => {
    const h = track(harness({ coordinator: [SEND("Inspect rendered UI only; no JavaScript"), SEND("Capture one fresh snapshot; report a blocker if unclear"), { envelope: { action: "PAUSE", reason: "stop" } }], worker: [
      { status: "stalled", aborted: true, detail: "Same evaluate result six times", text: "Scope unclear", transcript: "initial loop" },
      { status: "stalled", aborted: true, detail: "Recovery looped again", transcript: "recovery loop" },
    ] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("worker_inspection_loop");
    expect(run.counters.inspectionRecoveries).toBe(1);
    expect(run.counters.totalFailures).toBe(2);
    expect(h.worker.submissions).toHaveLength(2);
    expect(h.worker.submissions[0].messageId).not.toBe(h.worker.submissions[1].messageId);
    const recovery = h.chat.submissions.find((s) => kindOf(s.text) === "WORKER_FAILURE")!.text;
    expect(recovery).toContain("Automatic inspection recovery 1/1");
    expect(recovery).toContain("Do not replay the original arguments/scripts");
    expect(recovery).toContain("no JavaScript");
    expect(recovery).toContain("remaining budgets");
    expect(h.chat.submissions).toHaveLength(2); // Second loop is saved but not forwarded until resume.
    run = await h.controller.run(run.id);
    expect(run.counters.inspectionRecoveries).toBe(1);
    expect(h.worker.submissions).toHaveLength(2);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("respects task budgets during automatic recovery", async () => {
    const h = track(harness({ coordinator: [SEND("inspect"), SEND("fresh snapshot")], limits: { maxWorkerTasks: 1 }, worker: [
      { status: "stalled", aborted: true, detail: "loop" },
    ] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("limit:maxWorkerTasks");
    expect(run.counters.inspectionRecoveries).toBe(1);
    expect(h.worker.submissions).toHaveLength(1);
  });

  it("does not bypass the consecutive-failure budget to recover", async () => {
    const h = track(harness({ coordinator: [SEND("inspect")], limits: { maxConsecutiveFailures: 1 }, worker: [
      { status: "stalled", aborted: true, detail: "loop" },
    ] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("limit:maxConsecutiveFailures");
    expect(h.chat.submissions).toHaveLength(1);
    expect(h.worker.submissions).toHaveLength(1);
  });

  it("reads old run counters with a zero recovery allowance used", () => {
    const h = track(harness({ coordinator: [] }));
    const run = h.controller.createRun(fixtureBrief());
    const { inspectionRecoveries: omitted, ...oldCounters } = run.counters;
    h.store.db.prepare("UPDATE runs SET counters_json=? WHERE id=?").run(JSON.stringify(oldCounters), run.id);
    expect(h.store.getRun(run.id)!.counters.inspectionRecoveries).toBe(0);
  });

  it("saves an interrupted inspection loop, pauses, and forwards its failure only on resume", async () => {
    const h = track(harness({ config: { opencode: { autoRecoverInspectionLoops: false } }, coordinator: [SEND("inspect target"), { envelope: { action: "PAUSE", reason: "reviewed blocker" } }], worker: [
      { status: "stalled", aborted: true, detail: "Repeated missing snapshot refs", text: "Scope unresolved", transcript: "snapshot ERROR: Ref stale not found" },
    ] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("worker_inspection_loop");
    expect(run.state).toBe("COORDINATOR_PENDING");
    expect(run.counters.totalFailures).toBe(1);
    expect(h.chat.submissions).toHaveLength(1);
    expect(readFileSync(join(h.runsDir, run.id, "worker/T1-transcript.md"), "utf8")).toContain("Ref stale");
    run = await h.controller.run(run.id);
    expect(h.worker.submissions).toHaveLength(1);
    const failure = h.chat.submissions.find((s) => kindOf(s.text) === "WORKER_FAILURE")!;
    expect(failure.text).toContain("Repeated missing snapshot refs");
    expect(failure.text).toContain("Scope unresolved");
    expect(failure.text).toContain(AUDIT_LABEL);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("retains the accepted operation and evidence when interruption could not be confirmed", async () => {
    const h = track(harness({ coordinator: [SEND("inspect target"), { envelope: { action: "PAUSE", reason: "reviewed" } }], worker: [
      { status: "stalled", aborted: false, detail: "Snapshot loop", transcript: "partial inspection transcript" }, WORKER_OK,
    ] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("worker_inspection_loop");
    expect(run.pause_detail).toContain("could not confirm");
    expect(run.state).toBe("WORKER_PENDING");
    expect(h.store.getOp(run.pending_op_id!)!.status).toBe("accepted");
    expect(run.counters.totalFailures).toBe(0);
    expect(readFileSync(join(h.runsDir, run.id, "worker/T1-loop-transcript.md"), "utf8")).toContain("partial inspection");
    run = await h.controller.run(run.id);
    expect(h.worker.submissions).toHaveLength(1);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("reports failure to the coordinator, counts it, and resets the streak after a success", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), SEND("t2"), { envelope: { action: "PAUSE", reason: "p" } }], worker: [{ status: "failed", error: "APIError: boom" }, WORKER_OK] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    const failMsg = h.chat.submissions.find((s) => kindOf(s.text) === "WORKER_FAILURE")!.text;
    expect(failMsg).toContain("APIError: boom");
    expect(failMsg).toContain(AUDIT_LABEL);
    expect(failMsg).toContain("Do not assume any part of the task took effect");
    expect(run.counters.totalFailures).toBe(1);
    expect(run.counters.consecutiveFailures).toBe(0);
    expect(h.store.failures(run.id)[0].kind).toBe("worker_task_failed");
  });

  it("reconciles an uncertain worker submission by messageID instead of resubmitting", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: { action: "PAUSE", reason: "p" } }], worker: [{ submit: "uncertain_stored", then: WORKER_OK }] }));
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.submissions).toHaveLength(1);
  });

  it("requires item-bound approval before resubmitting a worker task whose marker is absent", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: { action: "PAUSE", reason: "p" } }], worker: [{ submit: "uncertain_lost", then: WORKER_OK }] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("submission_uncertain");
    expect(h.worker.submissions).toHaveLength(1);
    run = await h.controller.run(run.id);
    expect(run.pause_reason).toBe("submission_uncertain");
    expect(h.worker.submissions).toHaveLength(1);
    h.controller.applyResumeOptions(run.id, { approve: ["resubmit"] });
    await h.controller.run(run.id);
    expect(h.worker.submissions).toHaveLength(2);
    expect(h.worker.submissions[0].messageId).toBe(h.worker.submissions[1].messageId);
  });

  it("pauses on a pending OpenCode permission/question and resumes waiting afterwards", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: { action: "PAUSE", reason: "p" } }], worker: [{ status: "blocked", kind: "permission", detail: "bash rm -rf" }] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("worker_blocked:permission");
    run = await h.controller.run(run.id);
    expect(h.worker.submissions).toHaveLength(1);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("pauses without restarting services when the backend becomes unavailable mid-task", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: { action: "PAUSE", reason: "p" } }], worker: [{ status: "backend_unavailable", detail: "ECONNREFUSED" }] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.restarts).toBe(0);
    expect(h.chat.submissions.some((s) => kindOf(s.text) === "WORKER_FAILURE")).toBe(false);
    expect(run.counters.backendRestarts).toBe(0);expect(run.pause_reason).toBe("backend_unavailable");
  });
});

describe("fresh-session handoff", () => {
  it("saves the handoff before creating the session, keeps experiment and counters, and sends the handoff", async () => {
    const handoff = {
      completed_steps: ["created"],
      observed_facts: ["save ok"],
      unverified_hypotheses: ["persists"],
      unresolved_questions: ["reopen?"],
      documentation_changes: ["experiments/EXP-900-fixture-experiment.md"],
      next_permitted_action: "Reopen FX_FixtureForm01 and inspect Variables.",
    };
    const h = track(
      harness({
        coordinator: [SEND("t1"), { envelope: { action: "NEW_OPENCODE_SESSION", reason: "context long", message: "Reopen and verify.", handoff } }, { envelope: { action: "PAUSE", reason: "p" } }],
        worker: [{ status: "failed", error: "APIError: x" }, WORKER_OK],
      }),
    );
    const created = h.controller.createRun(fixtureBrief());
    const handoffsAtSecondCreate: number[] = [];
    h.worker.onCreateSession.push((n) => {
      if (n === 2) handoffsAtSecondCreate.push((h.store.db.prepare("SELECT COUNT(*) c FROM handoffs WHERE run_id=?").get(created.id) as { c: number }).c);
    });
    const run = await h.controller.run(created.id);
    expect(handoffsAtSecondCreate).toEqual([1]);
    expect(existsSync(h.store.getHandoff(1)!.path)).toBe(true);
    expect(h.worker.sessions).toEqual(["ses_fake1", "ses_fake2"]);
    expect(run.experiment_id).toBe("EXP-900");
    expect(run.counters.workerTasks).toBe(2); // not reset
    expect(run.counters.totalFailures).toBe(1); // failure history kept
    const text = h.worker.submissions[1].text;
    for (const heading of ["Experiment objective and scope", "Prohibited actions", "Environment and editing scope", "Target form and artifacts", "Completed steps", "Evidence collected so far", "Observed facts", "Unverified hypotheses", "Unresolved questions", "Documentation changes", "Exact next permitted action", "Session history", "Remaining limits"]) {
      expect(text).toContain(`## ${heading}`);
    }
    expect(text).toContain("does NOT reset the Mongoose browser");
    expect(text).toContain("ses_fake1");
    expect(h.worker.submissions[1].sessionId).toBe("ses_fake2");
  });

  it("never accepts a handoff from an interpreted (non-envelope) reply", async () => {
    const i = new FakeInterpreter({ found: true, confidence: "high", unresolved: [], candidate: { action: "NEW_OPENCODE_SESSION", reason: "new session", message: "go" } });
    const h = track(harness({ coordinator: ["NEW_OPENCODE_SESSION please, message: go"], interpreter: i, config: { protocol: { reaskOnInvalid: 0 } } }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.sessions).toHaveLength(0);
    expect(run.status).toBe("paused");
  });
});

describe("interrupted-run recovery", () => {
  it("a new controller process recovers a run whose previous controller died (stale lease)", async () => {
    const h = track(harness({ coordinator: [{ submit: "crash_after_accept", envelope: { action: "PAUSE", reason: "p" } }], pid: 999_001, isAlive: () => false }));
    const run0 = h.controller.createRun(fixtureBrief());
    await h.controller.run(run0.id);
    // simulate a hard kill: status still 'running', lease left behind by a dead pid
    h.store.updateRun(run0.id, { status: "running", pause_reason: null });
    h.store.acquireLease(run0.id, 999_001, () => true);
    h.store.close();

    const store2 = new Store(join(h.dir, "harness.sqlite"));
    const h2 = harness({ coordinator: [], dir: h.dir, store: store2, chat: h.chat, workerFake: h.worker, pid: 999_002, isAlive: (p) => p === 999_002 });
    open.push(h2);
    const run = await h2.controller.run(run0.id);
    expect(h.chat.submissions).toHaveLength(1);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("refuses to run the same run from two live controllers", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }], pid: 1, isAlive: () => true }));
    const r = h.controller.createRun(fixtureBrief());
    h.store.acquireLease(r.id, 2, () => true);
    await expect(h.controller.run(r.id)).rejects.toThrow(/Another controller/);
  });

  it("refuses to start a second run while one is active (no concurrent experiments)", () => {
    const h = track(harness({ coordinator: [] }));
    h.controller.createRun(fixtureBrief());
    expect(() => h.controller.createRun(fixtureBrief())).toThrow(/runs never overlap/);
  });

  it("operator pause preserves the planned operation and resume continues it", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }] }));
    const r = h.controller.createRun(fixtureBrief());
    h.store.requestControl(r.id, "pause", "test");
    let run = await h.controller.run(r.id);
    expect(run.pause_reason).toBe("operator_pause");
    expect(h.chat.submissions).toHaveLength(0);
    run = await h.controller.run(r.id);
    expect(h.chat.submissions).toHaveLength(1);
  });
});

describe("limit enforcement", () => {
  it("saves the payload, pauses at the limit, and continues after the operator raises it", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), SEND("t2"), { envelope: { action: "PAUSE", reason: "p" } }], worker: [WORKER_OK, WORKER_OK], limits: { maxWorkerTasks: 1 } }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("limit:maxWorkerTasks");
    const op = h.store.getOp(run.pending_op_id!)!;
    expect(op.status).toBe("planned");
    expect(existsSync(op.payload_path)).toBe(true);
    run = await h.controller.run(run.id);
    expect(run.pause_reason).toBe("limit:maxWorkerTasks"); // resume alone does not bypass it
    h.controller.applyResumeOptions(run.id, { limits: { maxWorkerTasks: 2 } });
    run = await h.controller.run(run.id);
    expect(h.worker.submissions).toHaveLength(2);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
  });

  it("enforces cycles, specialist consultations and active duration", async () => {
    const h1 = track(harness({ coordinator: [SEND("t1")], worker: [WORKER_OK], limits: { maxCycles: 1 } }));
    expect((await h1.controller.run(h1.controller.createRun(fixtureBrief()).id)).pause_reason).toBe("limit:maxCycles");

    const h2 = track(harness({ coordinator: [{ envelope: { action: "ASK_SPECIALIST", reason: "q", message: "Q?" } }], limits: { maxSpecialistConsultations: 0 } }));
    expect((await h2.controller.run(h2.controller.createRun(fixtureBrief()).id)).pause_reason).toBe("limit:maxSpecialistConsultations");

    let t = 0;
    const chat = new FakeChat({ coordinator: [SEND("t1")], specialist: [] });
    const h3 = track(harness({ coordinator: [], chat, limits: { maxDurationMinutes: 1 } }));
    const c3 = new Controller({ store: h3.store, config: h3.config, factoryRoot: h3.factoryRoot, runsDir: h3.runsDir, protocolDir: join(HARNESS_DIR, "protocol"), chat, worker: h3.worker, interpreter: null, log: h3.log, now: () => (t += 20_000) });
    const r3 = await c3.run(c3.createRun(fixtureBrief()).id);
    expect(r3.pause_reason).toBe("limit:maxDurationMinutes");
  });
});

describe("optional acceptance checks", () => {
  const withNA = () => ({ ...shared.complete, acceptance_checks: shared.complete.acceptance_checks.map((c: { id: string }) => (c.id === "AC-2" ? { ...c, status: "not_applicable" } : c)) });
  it("accepts not_applicable only for a check the brief marks optional", async () => {
    const strict = track(harness({ coordinator: [SEND("t1"), { envelope: withNA() }], worker: [WORKER_OK] }));
    const r1 = await strict.controller.run(strict.controller.createRun(fixtureBrief()).id);
    expect(r1.pause_detail).toContain("acceptance_check_not_passed:AC-2:not_applicable");

    const b = fixtureBrief();
    b.brief.acceptance_checks = b.brief.acceptance_checks.map((c) => (c.id === "AC-2" ? { ...c, optional: true } : c));
    const lenient = track(harness({ coordinator: [SEND("t1"), { envelope: withNA() }], worker: [WORKER_OK] }));
    const r2 = await lenient.controller.run(lenient.controller.createRun(b).id);
    expect(r2.status).toBe("completed");
    expect(r2.outcome).toBe("accepted");
  });
});

describe("completion requires acceptance evidence", () => {
  it("rejects completion with a check not passed, a missing check, or no worker report", async () => {
    const partial = { ...shared.complete, acceptance_checks: [shared.complete.acceptance_checks[0]] };
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: partial }], worker: [WORKER_OK] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.status).toBe("paused");
    expect(run.pause_detail).toContain("acceptance_check_missing:AC-2");

    const h2 = track(harness({ coordinator: [COMPLETE] }));
    const run2 = await h2.controller.run(h2.controller.createRun(fixtureBrief()).id);
    expect(run2.pause_detail).toContain("no_completed_worker_report_in_run");
  });

  it("rejects evidence paths outside the factory", async () => {
    const env = { ...shared.complete, evidence_refs: ["../../Windows/win.ini"] };
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: env }], worker: [WORKER_OK] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_detail).toContain("evidence_unsafe_path");
  });

  it("accepts a blocked outcome only with a failed check backed by evidence", async () => {
    const blocked = { action: "EXPERIMENT_COMPLETE", outcome: "blocked", reason: "does not persist", evidence_refs: ["evidence/EXP-900/reopened.png"], acceptance_checks: [{ id: "AC-2", status: "failed", evidence_refs: ["evidence/EXP-900/reopened.png"] }] };
    const h = track(harness({ coordinator: [SEND("t1"), { envelope: blocked }], worker: [WORKER_OK] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.status).toBe("completed");
    expect(run.outcome).toBe("blocked");
  });
});

describe("scope expansion prevention", () => {
  it("never auto-advances: a completed run does not start anything else", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), COMPLETE, SEND("start EXP-901")], worker: [WORKER_OK, WORKER_OK] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.status).toBe("completed");
    expect(h.chat.submissions).toHaveLength(2);
    expect(h.worker.submissions).toHaveLength(1);
  });

  it("routes a scope-flagged instruction only after explicit operator approval of that item", async () => {
    const h = track(harness({ coordinator: [SEND("Check whether EXP-901 notes mention this."), { envelope: { action: "PAUSE", reason: "p" } }], worker: [WORKER_OK] }));
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("review:scope");
    expect(h.worker.submissions).toHaveLength(0);
    h.controller.applyResumeOptions(run.id, { approve: ["scope"] });
    run = await h.controller.run(run.id);
    expect(h.worker.submissions).toHaveLength(1);
    expect(run.approvals.scope).toBeUndefined(); // approval consumed, not blanket
  });

  it("refuses to reload a brief for a different experiment", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }] }));
    const r = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    const other = fixtureBrief();
    other.brief.experiment_id = "EXP-901";
    expect(() => h.controller.applyResumeOptions(r.id, { brief: other })).toThrow(/never switches experiments/);
  });
});
