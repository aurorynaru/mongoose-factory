import { readFileSync } from "node:fs";
import { join } from "node:path";
import { chromium, type Browser, type BrowserContext } from "playwright";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { ChatGptAdapter, type RoleBinding } from "../../src/adapters/chatgpt/adapter.js";
import { parseConversationUrl } from "../../src/adapters/chatgpt/selectors.js";
import type { ChatRole } from "../../src/adapters/types.js";
import { MemoryLogger } from "../../src/util/log.js";

/** New-chat creation and the model-label check, against the v2 fixture page (no network). */
const FIXTURE = readFileSync(join(__dirname, "..", "..", "fixtures", "html", "chatgpt-fixture.html"), "utf8");
let browser: Browser;
let context: BrowserContext;

beforeAll(async () => {
  browser = await chromium.launch({ channel: process.env.HARNESS_TEST_CHANNEL ?? "chrome", headless: true });
});
afterAll(async () => browser?.close());
beforeEach(async () => {
  context = await browser.newContext();
  await context.route("https://chatgpt.com/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: FIXTURE }));
});
afterEach(async () => context?.close());

function adapter(bindings: Partial<Record<ChatRole, RoleBinding>>, expected: string | null = null) {
  return new ChatGptAdapter({
    pages: () => context.pages(),
    newPage: () => context.newPage(),
    roles: (r) => bindings[r] ?? null,
    log: new MemoryLogger(),
    submitConfirmMs: 3000,
    stableMs: 400,
    navigationTimeoutMs: 10_000,
    pollMs: 100,
    expectedModelLabel: () => expected,
  });
}
const msg = (nonce: string) => `[HARNESS nonce=${nonce} run_id=R-T experiment_id=EXP-900 cycle_id=1 kind=KICKOFF]\nfirst message`;

describe("new conversations (fixture v2)", () => {
  it("starts a new coordinator chat from the home page and returns its URL; the reply is then readable", async () => {
    const bindings: Partial<Record<ChatRole, RoleBinding>> = {};
    const a = adapter(bindings, "High");
    const out = await a.submitNew("coordinator", "https://chatgpt.com/?dom=v2", msg("H-new111"), "H-new111");
    expect(out.status).toBe("accepted");
    const p = parseConversationUrl(out.conversationUrl!);
    expect(p?.conversationId).toMatch(/^fixture-new-/);
    bindings.coordinator = { url: `${p!.canonical}?dom=v2`, conversationId: p!.conversationId, gptId: null };
    const r = await a.waitForReply("coordinator", "H-new111", { timeoutMs: 20_000, shouldStop: () => false });
    expect(r.status).toBe("complete");
    if (r.status === "complete") expect(r.markdown).not.toContain("older answer");
  });

  it("starts a new chat under the custom GPT's page", async () => {
    const out = await adapter({}).submitNew("specialist", "https://chatgpt.com/g/g-fakegpt-mongoose?dom=v2", msg("H-new222"), "H-new222");
    expect(out.status).toBe("accepted");
    expect(parseConversationUrl(out.conversationUrl!)?.gptId).toBe("g-fakegpt");
  });

  it("reuses an already open new-chat tab without reloading it (keeps the operator's model choice)", async () => {
    const prepared = await context.newPage();
    await prepared.goto("https://chatgpt.com/?dom=v2&effort=High"); // operator fixed the effort in this tab
    const a = adapter({}, "High");
    // the harness's own home URL would load with effort=Low if it navigated
    const out = await a.submitNew("coordinator", "https://chatgpt.com/?dom=v2&effort=Low", msg("H-new555"), "H-new555");
    expect(out.status).toBe("accepted");
    expect(context.pages()).toHaveLength(1);
  });

  const auto = (bindings: Partial<Record<ChatRole, RoleBinding>>, model = "GPT-5.6 Sol", effort = "High") =>
    new ChatGptAdapter({
      pages: () => context.pages(),
      newPage: () => context.newPage(),
      roles: (r) => bindings[r] ?? null,
      log: new MemoryLogger(),
      submitConfirmMs: 3000,
      stableMs: 400,
      navigationTimeoutMs: 10_000,
      pollMs: 100,
      expectedModelLabel: () => effort,
      desiredModel: () => ({ model, effort }),
      autoSelectModel: true,
    });

  it("selects the configured model and effort in a new chat before sending", async () => {
    const a = auto({});
    const out = await a.submitNew("coordinator", "https://chatgpt.com/?dom=v2&effort=Low&model=GPT-5.5", msg("H-sel111"), "H-sel111");
    expect(out.status).toBe("accepted");
    const page = context.pages()[0];
    expect(await page.locator("button[aria-label='Select ChatGPT model']").innerText()).toContain("High");
    const again = await a.ensureModel("coordinator", page);
    expect(again).toEqual({ ok: true, model: "GPT-5.6 Sol", effort: "High" });
    expect(await page.locator("[role=menu][data-state=open]").count()).toBe(0); // menu closed again
  });

  it("waits for a model button that renders after the composer (custom GPT page)", async () => {
    const out = await auto({}).submitNew("specialist", "https://chatgpt.com/g/g-fakegpt-mongoose?dom=v2&effort=Medium&latemodel=1", msg("H-late11"), "H-late11");
    expect(out.status).toBe("accepted");
  });

  it("fixes the effort in an existing chat when the label does not match", async () => {
    const binding: Partial<Record<ChatRole, RoleBinding>> = { coordinator: { url: "https://chatgpt.com/c/fixture-coordinator-0001?dom=v2&effort=Medium", conversationId: "fixture-coordinator-0001", gptId: null } };
    const out = await auto(binding).submit("coordinator", msg("H-sel222"), "H-sel222");
    expect(out.status).toBe("accepted");
  });

  it("refuses to send when the configured model is not offered", async () => {
    const out = await auto({}, "GPT-9 Imaginary").submitNew("coordinator", "https://chatgpt.com/?dom=v2", msg("H-sel333"), "H-sel333");
    expect(out).toMatchObject({ status: "blocked", problem: "model_mismatch" });
    if (out.status === "blocked") expect(out.detail).toContain("not offered");
    expect(await context.pages()[0].locator("[data-message-author-role=user], [data-content-search-unit-key$=':user']").count()).toBe(0);
  });

  it("reads the model selector label and refuses to send when it does not match", async () => {
    const binding = (effort: string): Partial<Record<ChatRole, RoleBinding>> => ({ coordinator: { url: `https://chatgpt.com/c/fixture-coordinator-0001?dom=v2&effort=${effort}`, conversationId: "fixture-coordinator-0001", gptId: null } });
    const ok = await adapter(binding("High"), "High").checkReady("coordinator");
    expect(ok).toMatchObject({ ok: true, modelLabel: "Thinking effort High" });
    await context.close();
    context = await browser.newContext();
    await context.route("https://chatgpt.com/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: FIXTURE }));
    const bad = adapter(binding("Low"), "High");
    expect(await bad.checkReady("coordinator")).toMatchObject({ ok: false, problem: "model_mismatch" });
    expect(await bad.submit("coordinator", msg("H-new333"), "H-new333")).toMatchObject({ status: "blocked", problem: "model_mismatch" });
    expect(await bad.submitNew("coordinator", "https://chatgpt.com/?dom=v2&effort=Low", msg("H-new444"), "H-new444")).toMatchObject({ status: "blocked", problem: "model_mismatch" });
  });
});
