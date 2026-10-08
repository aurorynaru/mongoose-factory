import { describe, expect, it } from "vitest";
import type { OcMessage } from "../src/adapters/opencode/client.js";
import { taskScope } from "../src/adapters/opencode/task-scope.js";

const user = (id: string, parts: OcMessage["parts"] = [{ id: "p", type: "text", text: "task" }]): OcMessage => ({
  info: { id, sessionID: "s", role: "user", time: { created: 1 } }, parts,
});
const reply = (id: string, parentID: string, summary = false): OcMessage => ({
  info: { id, sessionID: "s", role: "assistant", parentID, time: { created: 2, completed: 3 }, summary, finish: "stop" }, parts: [],
});
const compact = (id: string) => user(id, [{ id: "p", type: "compaction", auto: true }]);
const continuation = (id: string) => user(id, [{ id: "p", type: "text", text: "continue", synthetic: true }]);

describe("task ownership through automatic compaction", () => {
  it("follows repeated compactions and excludes previous tasks/unrelated parents", () => {
    const messages = [user("old"), reply("old-report", "old"), user("task"), reply("initial", "task"),
      compact("c1"), reply("s1", "c1", true), continuation("u1"), reply("a1", "u1"),
      reply("unrelated", "other"), compact("c2"), reply("s2", "c2", true), continuation("u2"), reply("final", "u2")];
    const result = taskScope(messages, "task");
    expect(result.replies.map((m) => m.info.id)).toEqual(["initial", "s1", "a1", "s2", "final"]);
    expect(result.terminal?.info.id).toBe("final");
    expect(result.superseded).toBe(false);
    expect(taskScope(messages.slice(-4), "task").found).toBe(false);
  });

  it("ends at real prompts, manual compaction, and synthetic prompts without a completed summary", () => {
    for (const boundary of [user("manual"), user("manual", [{ id: "p", type: "compaction", auto: false }]), continuation("unrelated-synthetic")]) {
      const result = taskScope([user("task"), reply("a", "task"), boundary, compact("c"), reply("s", "c", true), continuation("u"), reply("later", "u")], "task");
      expect(result.superseded).toBe(true);
      expect(result.replies.map((m) => m.info.id)).toEqual(["a"]);
    }
  });

  it("does not infer a terminal reply from a summary or older completed response", () => {
    for (const tail of [[compact("c")], [compact("c"), reply("s", "c", true)], [compact("c"), reply("s", "c", true), continuation("u")]]) {
      expect(taskScope([user("task"), reply("prefix", "task"), ...tail], "task").terminal).toBeUndefined();
    }
  });

  it("rejects mixed real/synthetic continuation parts and messages from another session", () => {
    const foreign = compact("foreign");
    foreign.info.sessionID = "other-session";
    const result = taskScope([user("task"), foreign, reply("a", "task"), compact("c"), reply("s", "c", true),
      user("mixed", [{ id: "p", type: "text", synthetic: true }, { id: "real", type: "text", text: "another request" }]), reply("later", "mixed")], "task");
    expect(result.history.some((m) => m.info.id === "foreign")).toBe(false);
    expect(result.superseded).toBe(true);
    expect(result.replies.map((m) => m.info.id)).toEqual(["a", "s"]);
  });
});
