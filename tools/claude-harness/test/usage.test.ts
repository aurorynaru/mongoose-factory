import { mkdirSync, mkdtempSync, utimesSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { collectUsage, renderUsage, taskUsage } from "../src/usage.js";

const line = (e: unknown) => JSON.stringify(e);
const assistant = (id: string, context: number, output: number, content: unknown[] = []) =>
  line({ type: "assistant", message: { id, content, usage: { input_tokens: 2, cache_creation_input_tokens: 100, cache_read_input_tokens: context - 102, output_tokens: output } } });

describe("task usage from stream-json", () => {
  it("counts each assistant message once with its last usage, and takes the context of the first and last turn", () => {
    const transcript = [
      line({ type: "system", subtype: "init", model: "claude-haiku" }),
      assistant("m1", 1000, 1),
      assistant("m1", 1000, 40), // same message, next content block
      assistant("m2", 3000, 60),
      "not json",
    ].join("\n");
    const u = taskUsage(transcript);
    expect(u).toMatchObject({ turns: 2, input: 4, cacheCreation: 200, cacheRead: 3796, output: 100, firstContextTokens: 1000, contextTokens: 3000 });
  });

  it("prefers the terminal result totals and reports no context without usage", () => {
    const withResult = [assistant("m1", 500, 5), line({ type: "result", subtype: "success", usage: { input_tokens: 7, cache_creation_input_tokens: 8, cache_read_input_tokens: 9, output_tokens: 10 } })].join("\n");
    expect(taskUsage(withResult)).toMatchObject({ input: 7, cacheCreation: 8, cacheRead: 9, output: 10, contextTokens: 500 });
    expect(taskUsage("### assistant\nplain text transcript")).toMatchObject({ turns: 0, contextTokens: null });
  });
});

describe("usage report", () => {
  it("groups roles, estimates context carried over within a session and attributes tool results", () => {
    const data = mkdtempSync(join(tmpdir(), "harness-usage-"));
    const write = (dir: string, task: string, body: string, mtime: number) => {
      mkdirSync(dir, { recursive: true });
      const file = join(dir, `${task}.events.jsonl`);
      writeFileSync(file, body);
      utimesSync(file, mtime, mtime);
    };
    const worker = join(data, "workers", "11111111-1111-1111-1111-111111111111", "tasks");
    write(worker, "task-one", [
      assistant("a1", 1000, 10, [{ type: "tool_use", id: "t1", name: "mcp__playwright__browser_snapshot" }]),
      line({ type: "user", message: { content: [{ type: "tool_result", tool_use_id: "t1", content: [{ type: "text", text: "x".repeat(300) }, { type: "image" }] }] } }),
      assistant("a2", 2000, 10),
    ].join("\n"), 1_000);
    // Second task in the same session starts with the first task's context.
    write(worker, "task-two", [assistant("b1", 5000, 10), assistant("b2", 6000, 10)].join("\n"), 2_000);
    write(join(data, "claude-roles", "specialist", "workers", "22222222-2222-2222-2222-222222222222", "tasks"), "consult", assistant("c1", 800, 5), 3_000);

    const report = collectUsage(data);
    expect(report.rows.map((r) => `${r.role}:${r.task}`)).toEqual(["worker:task-one", "worker:task-two", "specialist:consult"]);
    expect(report.rows[0].carriedContext).toBe(0);
    expect(report.rows[1].carriedContext).toBe(8000); // carry 4000 (5000 - 1000) on each of two turns
    expect(report.tools["mcp__playwright__browser_snapshot"]).toEqual({ calls: 1, chars: 300, images: 1 });
    expect(collectUsage(data, 2_500_000).rows.map((r) => r.task)).toEqual(["consult"]);

    const text = renderUsage(report, { tasks: true });
    expect(text).toContain("worker: 2 task(s), 1 session(s), 4 assistant turns");
    expect(text).toContain("specialist: 1 task(s)");
    expect(text).toContain("context carried over");
    expect(text).toContain("mcp__playwright__browser_snapshot");
  });
});
