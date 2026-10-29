import { afterEach, describe, expect, it } from "vitest";
import type { ChatRole } from "../src/adapters/types.js";
import { FakeChat, type ReplySpec, type WorkerSpec } from "../src/testing/fakes.js";
import { fixtureBrief, harness, type Harnessed } from "../src/testing/scenario.js";

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

const SEND = (message: string): ReplySpec => ({ envelope: { action: "SEND_TO_OPENCODE", reason: "next", message } });
const PAUSE: ReplySpec = { envelope: { action: "PAUSE", reason: "stop here" } };
const ASK = (message: string): ReplySpec => ({ envelope: { action: "ASK_SPECIALIST", reason: "q", message } });
const ANSWER = (marker: string) => `${marker}\n\n\`\`\`json\n{"protocol": "mongoose-harness/specialist-v1", "consultation_id": "{{consultation_id}}", "verdict": "insufficient_evidence", "required_verifications": ["reload"]}\n\`\`\``;

/** A completed task whose stream-json transcript ends at `context` tokens. */
const task = (text: string, context: number): WorkerSpec => ({
  status: "completed",
  text,
  transcript: JSON.stringify({ type: "assistant", message: { id: `m-${text}`, content: [], usage: { input_tokens: 1, cache_creation_input_tokens: 0, cache_read_input_tokens: context - 1, output_tokens: 5 } } }),
});

/** The Claude role transport opens new specialist sessions without a registered GPT page. */
class ClaudeRoleChat extends FakeChat {
  transport(_role: ChatRole) {
    return "claude" as const;
  }
}

describe("worker.freshSessionAboveTokens", () => {
  it("keeps one worker session per run by default", async () => {
    const h = track(harness({ coordinator: [SEND("t1"), SEND("t2"), PAUSE], worker: [task("R1", 900_000), task("R2", 950_000)] }));
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.sessions).toEqual(["ses_fake1"]);
    expect(h.worker.submissions.map((s) => s.sessionId)).toEqual(["ses_fake1", "ses_fake1"]);
  });

  it("starts a fresh session with a harness handoff only after a task crossed the threshold", async () => {
    const h = track(
      harness({
        coordinator: [SEND("t1"), SEND("t2"), SEND("t3"), PAUSE],
        worker: [task("REPORT-ONE marker-abc", 5000), task("REPORT-TWO", 500), task("REPORT-THREE", 700)],
        config: { worker: { freshSessionAboveTokens: 1000 } },
      }),
    );
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.sessions).toEqual(["ses_fake1", "ses_fake2"]);
    expect(h.worker.submissions.map((s) => s.sessionId)).toEqual(["ses_fake1", "ses_fake2", "ses_fake2"]);
    const handoff = h.worker.submissions[1].text;
    expect(handoff).toContain("does NOT reset the Mongoose browser");
    expect(handoff).toContain("## Completed steps\n- T1: completed");
    expect(handoff).toContain("## Latest worker report (T1; verbatim, may be clipped)\nREPORT-ONE marker-abc");
    expect(handoff).toContain("previous task T1 ended with 5000 context tokens");
    expect(handoff.trimEnd().endsWith("t2")).toBe(true);
    expect(h.worker.submissions[2].text).not.toContain("Harness handoff");
    expect(h.store.sessions(run.id).map((s) => s.reason)).toEqual(["initial", "auto: previous task T1 ended with 5000 context tokens (worker.freshSessionAboveTokens=1000)"]);
    expect(run.counters.workerTasks).toBe(3);
    expect(h.store.opsForRun(run.id).filter((o) => o.kind === "worker").map((o) => (o.meta.usage as { contextTokens: number }).contextTokens)).toEqual([5000, 500, 700]);
  });

  it("starts every task in a fresh session at 0, and never refreshes without usage data above 0", async () => {
    const every = track(harness({ coordinator: [SEND("t1"), SEND("t2"), PAUSE], worker: [{ status: "completed", text: "a" }, { status: "completed", text: "b" }], config: { worker: { freshSessionAboveTokens: 0 } } }));
    await every.controller.run(every.controller.createRun(fixtureBrief()).id);
    expect(every.worker.sessions).toEqual(["ses_fake1", "ses_fake2"]);

    const unknown = track(harness({ coordinator: [SEND("t1"), SEND("t2"), PAUSE], worker: [{ status: "completed", text: "a" }, { status: "completed", text: "b" }], config: { worker: { freshSessionAboveTokens: 1 } } }));
    await unknown.controller.run(unknown.controller.createRun(fixtureBrief()).id);
    expect(unknown.worker.sessions).toEqual(["ses_fake1"]);
  });
});

describe("chats.specialistSession", () => {
  const consultTwice = (specialistSession?: string) => {
    const coordinator = [ASK("First question?"), ASK("Second question?"), PAUSE];
    const specialist = [ANSWER("ANSWER-ONE"), ANSWER("ANSWER-TWO")];
    return track(harness({ coordinator, chat: new ClaudeRoleChat({ coordinator, specialist }), config: specialistSession ? { chats: { newCoordinatorPerRun: false, specialistSession } } : {} }));
  };
  const specialistTexts = (h: Harnessed) => h.chat.submissions.filter((s) => s.role === "specialist").map((s) => s.text);

  it("continues the existing specialist session by default", async () => {
    const h = consultTwice();
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(specialistTexts(h)).toHaveLength(2);
    expect(h.chat.newChats).toHaveLength(0);
  });

  it("opens a new session only for the first consultation of a run with per-run", async () => {
    const h = consultTwice("per-run");
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.chat.newChats.map((c) => c.role)).toEqual(["specialist"]);
    expect(specialistTexts(h)[1]).not.toContain("EARLIER CONSULTATIONS");
  });

  it("opens a new session per consultation and carries the run's earlier consultations inline", async () => {
    const h = consultTwice("per-consultation");
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
    expect(h.chat.newChats.map((c) => c.homeUrl)).toEqual(["claude-role:specialist", "claude-role:specialist"]);
    const [first, second] = specialistTexts(h);
    expect(first).not.toContain("EARLIER CONSULTATIONS");
    expect(second).toContain("EARLIER CONSULTATIONS IN THIS RUN");
    expect(second).toContain("question: First question?");
    expect(second).toContain("ANSWER-ONE");
    expect(second).toContain("Second question?");
  });
});
