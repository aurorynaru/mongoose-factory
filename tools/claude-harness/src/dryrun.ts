import { rmSync } from "node:fs";
import { loadScenarios, runScenario } from "./testing/scenario.js";

/**
 * Exercise routing end-to-end with fixtures and fakes. No browser is opened, no OpenCode
 * server is contacted, no ChatGPT message is sent and nothing under the real factory changes
 * (each scenario runs on a temporary copy of fixtures/factory).
 */
export async function dryRun(filter?: string, keep = false): Promise<boolean> {
  const scenarios = loadScenarios().filter((s) => !filter || s.name.includes(filter));
  if (!scenarios.length) {
    console.log(`No scenario matches '${filter}'.`);
    return false;
  }
  let allOk = true;
  console.log(`Dry-run: ${scenarios.length} scenario(s) against fakes (no live submissions).\n`);
  for (const s of scenarios) {
    const r = await runScenario(s);
    const ok = r.checks.every((c) => c.ok);
    allOk &&= ok;
    const trail = r.h.store
      .transitions(r.run.id, 200)
      .filter((t) => t.event === "state_change")
      .map((t) => (t.to_status === "paused" ? `PAUSED` : t.to_status === "completed" ? "COMPLETED" : t.to_state))
      .filter((x, i, a) => x !== a[i - 1])
      .join(" > ");
    console.log(`${ok ? "PASS" : "FAIL"}  ${s.name}`);
    console.log(`      ${s.description}`);
    console.log(`      path: ${trail}`);
    console.log(`      final: status=${r.run.status}${r.run.outcome ? ` outcome=${r.run.outcome}` : ""}${r.run.pause_reason ? ` pause=${r.run.pause_reason}` : ""}`);
    for (const c of r.checks.filter((c) => !c.ok)) console.log(`      ✗ ${c.name}: ${c.detail}`);
    if (!ok || keep) console.log(`      artifacts: ${r.h.dir}`);
    r.h.store.close();
    if (ok && !keep) rmSync(r.h.dir, { recursive: true, force: true });
  }
  console.log(`\n${allOk ? "All scenarios passed." : "Some scenarios FAILED."}`);
  return allOk;
}
