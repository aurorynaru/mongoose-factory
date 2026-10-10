import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { writeCoordinatorContext, approveCoordinatorContext, experimentsDigest } from "../src/context.js";
import { parseHeader } from "../src/protocol/prompts.js";
import { fixtureBrief, harness } from "../src/testing/scenario.js";

const kind = (t: string) => parseHeader(t)?.kind;

describe("fresh coordinator chat per run", () => {
  it("opens a new chat for the kickoff, registers it, and continues in it", async () => {
    const h = harness({ coordinator: [{ envelope: { action: "ASK_SPECIALIST", reason: "q", message: "Q?" } }, { envelope: { action: "PAUSE", reason: "p" } }], specialist: ["A."], config: { chats: { newCoordinatorPerRun: true } } });
    h.store.setRole("coordinator", { url: "https://chatgpt.com/c/old-coord", conversationId: "old-coord", gptId: null, title: null });
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.chat.newChats).toHaveLength(1);
    expect(h.chat.newChats[0]).toMatchObject({ role: "coordinator", homeUrl: "https://chatgpt.com/" });
    expect(kind(h.chat.submissions[0].text)).toBe("KICKOFF");
    expect(h.store.getRole("coordinator")!.url).toBe("https://chatgpt.com/c/fake-new-coordinator-1");
    const t = h.store.transitions(run.id, 100).find((x) => x.event === "new_conversation");
    expect(t?.detail).toMatchObject({ role: "coordinator", previous: "https://chatgpt.com/c/old-coord" });
    expect(h.chat.submissions.filter((s) => s.role === "coordinator")).toHaveLength(2); // 2nd went to the same (new) chat
    h.store.close();
  });

  it("pauses (never auto-resends) when the first message of a new chat is uncertain; resends only after approval", async () => {
    const h = harness({ coordinator: [{ submit: "uncertain_lost", envelope: { action: "PAUSE", reason: "p" } }], config: { chats: { newCoordinatorPerRun: true } } });
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("submission_uncertain");
    run = await h.controller.run(run.id);
    expect(run.pause_reason).toBe("submission_uncertain");
    expect(run.pause_detail).toContain("sidebar");
    expect(h.chat.submissions).toHaveLength(1);
    h.controller.applyResumeOptions(run.id, { approve: ["resubmit"] });
    run = await h.controller.run(run.id);
    expect(h.chat.submissions).toHaveLength(2);
    expect(h.chat.newChats).toHaveLength(1);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
    h.store.close();
  });

  it("accepts the resubmit approval when the first message of a new chat was interrupted while still submitting", async () => {
    const h = harness({ coordinator: [{ submit: "uncertain_lost", envelope: { action: "PAUSE", reason: "p" } }], config: { chats: { newCoordinatorPerRun: true } } });
    let run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    h.store.updateOp(run.pending_op_id!, { status: "submitting" }); // e.g. a controller error before the text was typed
    run = await h.controller.run(run.id);
    expect(run.pause_detail).toContain("approve resubmit");
    expect(() => h.controller.applyResumeOptions(run.id, { approve: ["resubmit"] })).not.toThrow();
    run = await h.controller.run(run.id);
    expect(h.chat.submissions).toHaveLength(2);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
    h.store.close();
  });
});

describe("new specialist chat on request", () => {
  it("uses the GPT page of the registered specialist for the next consultation only", async () => {
    const h = harness({
      coordinator: [{ envelope: { action: "ASK_SPECIALIST", reason: "q", message: "Q1?" } }, { envelope: { action: "ASK_SPECIALIST", reason: "q", message: "Q2?" } }, { envelope: { action: "PAUSE", reason: "p" } }],
      specialist: ["A1.", "A2."],
    });
    h.store.setRole("specialist", { url: "https://chatgpt.com/g/g-2jEigwbfm-infor-cloudsuite-assistant/c/6abb3aee", conversationId: "6abb3aee", gptId: "g-2jEigwbfm", title: null });
    h.store.setSetting("new_chat:specialist", "1");
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.chat.newChats).toEqual([expect.objectContaining({ role: "specialist", homeUrl: "https://chatgpt.com/g/g-2jEigwbfm-infor-cloudsuite-assistant" })]);
    expect(h.store.getSetting("new_chat:specialist")).toBeNull();
    expect(h.store.getRole("specialist")!.gpt_id).toBe("g-fakegpt");
    expect(h.chat.submissions.filter((s) => s.role === "specialist")).toHaveLength(2);
    h.store.close();
  });
});

describe("context from disk", () => {
  it("kickoff carries the records digest; the context file only after operator approval", async () => {
    const run1 = harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }] });
    const ctxFile = join(run1.dir, "context", "coordinator-context.md");
    writeCoordinatorContext(ctxFile, "## Decisions\nUNIQUE-CONTEXT-MARKER", false);
    await run1.controller.run(run1.controller.createRun(fixtureBrief()).id);
    const k1 = run1.chat.submissions[0].text;
    expect(k1).toContain("EXPERIMENT RECORDS (read from experiments/*.md on disk");
    expect(k1).toContain("### EXP-900");
    expect(k1).toContain("Not yet run.");
    expect(k1).not.toContain("UNIQUE-CONTEXT-MARKER");
    const first = run1.store.latestRun()!;
    run1.store.updateRun(first.id, { status: "stopped" });
    run1.store.close();

    approveCoordinatorContext(ctxFile);
    const run2 = harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }], dir: run1.dir });
    await run2.controller.run(run2.controller.createRun(fixtureBrief()).id);
    const k2 = run2.chat.submissions[0].text;
    expect(k2).toContain("PROJECT CONTEXT (written by an earlier coordinator chat, reviewed by the operator)");
    expect(k2).toContain("UNIQUE-CONTEXT-MARKER");
    run2.store.close();
  });

  it("digest lists every record and truncates long results", () => {
    const d = experimentsDigest(join(__dirname, "..", "fixtures", "factory"), 9000, "EXP-900");
    expect(d).toContain("Status: in progress");
    expect(d).toContain("Record: experiments/EXP-900-fixture-experiment.md");
  });
});
