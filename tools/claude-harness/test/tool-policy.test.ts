import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { BriefSchema } from "../src/brief.js";
import { fixtureBrief } from "../src/testing/scenario.js";
import { workerPolicyForBrief, restrictToolRules } from "../src/adapters/opencode/tool-policy.js";

describe("experiment worker permissions", () => {
  it("enforces EXP-020's existing prohibition without requiring a brief reload", () => {
    const brief = BriefSchema.parse(JSON.parse(readFileSync(resolve(__dirname, "../briefs/EXP-020.brief.json"), "utf8")));
    expect(workerPolicyForBrief(brief)).toEqual({ denyBrowserJavaScript: true });
  });

  it("supports structured policies and explicit legacy wording, without treating Form scripts as JavaScript tool prohibition", () => {
    for (const text of ["No JavaScript", "No-JavaScript even for read-only reads", "Do not use hidden controls, JavaScript evaluation, or internal APIs", "Never use JavaScript evaluation", "JavaScript evaluation"]) {
      expect(workerPolicyForBrief({ prohibited_actions: [text] }).denyBrowserJavaScript).toBe(true);
    }
    expect(workerPolicyForBrief({ prohibited_actions: ["Do not modify Form scripts", "Read verified JavaScript examples"] }).denyBrowserJavaScript).toBe(false);
    const b = fixtureBrief().brief;
    b.worker_tool_policy = { deny_browser_javascript: true };
    expect(workerPolicyForBrief(BriefSchema.parse(b)).denyBrowserJavaScript).toBe(true);
    expect(workerPolicyForBrief({ prohibited_actions: ["No JavaScript"], worker_tool_policy: { deny_browser_javascript: false } }).denyBrowserJavaScript).toBe(true);
  });

  it("adds only denials, preserves existing restrictions, and places them after broad allows", () => {
    const existing = [{ permission: "*", pattern: "*", action: "allow" as const }, { permission: "bash", pattern: "git push *", action: "deny" as const }];
    const restricted = restrictToolRules(existing, { denyBrowserJavaScript: true });
    expect(restricted.slice(0, 2)).toEqual(existing);
    expect(restricted.slice(2).every((r) => r.action === "deny")).toBe(true);
    expect(restrictToolRules(restricted, { denyBrowserJavaScript: true })).toEqual(restricted);
    const lessRestrictive = restrictToolRules(restricted, { denyBrowserJavaScript: false });
    expect(lessRestrictive).toContainEqual({ permission: "*browser_evaluate", pattern: "*", action: "deny" });
    expect(lessRestrictive).toContainEqual({ permission: "*browser_run_code", pattern: "*", action: "deny" });
  });

});
