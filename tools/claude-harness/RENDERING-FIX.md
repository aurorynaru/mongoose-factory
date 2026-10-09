# Rendering and window-state preparation after R3 T3

Date: 2026-10-09. Operator-reported R3 T3: session `60cc08ec-01c4-41cc-9294-26f32bee888e`, task `74f80c23-9e48-482d-acf5-a03b860ad663`. This implements preparation for future launches; it does not reclassify/replay T3 or independently establish the cause of its timeouts.

## Changes

- Production Chrome always gets `--disable-backgrounding-occluded-windows`, `--disable-renderer-backgrounding`, and `--disable-background-timer-throttling`.
- Config `chromeWindowSize` defaults to `"1920,1080"` and supplies `--window-size`. `chromeStartMaximized` defaults to true and supplies `--start-maximized` when true. Existing config files inherit the schema defaults; the active local config was not edited.
- New owned-service state records `effectiveArguments` and a launch-scope hash. The full request hash includes the new arguments. The actual process command hash still verifies the executable/start time/command identity. Option-only changes and recognized legacy launch hashes warn `running with outdated launch options` without failing health or rewriting the old identity. Other configuration/ownership mismatches remain failures. The operator can stop that proven-owned process normally after R3.
- Each future `worker task`, including resumption, reads owned Chrome's window state before submission and records `chromeWindow`, `windowState`, and `bounds` in its manifest. JSON output includes windowState/bounds. Minimized windows refuse with `restore the Chrome window first`; unknown/ambiguous state refuses too.
- The window reader uses only `GET /json/version` and a loopback **browser-level** WebSocket with `Target.getTargets` and `Browser.getWindowForTarget` for the single page target. It ignores iframe targets, never attaches to/evaluates a page, never uses MCP for the read, and never restores/focuses/closes a browser window or page. It closes only its own CDP socket. The method/response schema was checked against installed Playwright's `node_modules/playwright-core/types/protocol.d.ts` (Browser.getWindowForTarget, lines 2281–2296).
- `mcp health` includes windowState/bounds and nested Chrome effectiveArguments/launch-option warnings. It preserves ownership checks before CDP access.
- Worker prompts identify locator-resolved stability timeouts as suspected environment blockers, preserve the exact error, and retain the brief's retry limits. They say the harness computes repository confinement using before/after Git state and evidence diffs; workers need no git status and state only which files they wrote.
- Both replay scripts require an uncovered, visible window throughout, no minimizing, and the same window size. Both document an operator-only `chrome stop` / `chrome start` after R3 finishes and before R4 preconditions. The five instructions in each file are unchanged.
- README and PLAN document these changes. Node.js 22+ is now required for the built-in WebSocket reader; package and lockfile engine declarations agree. No new dependencies.

## Limits and preservation

No live task/model run, browser tool, Mongoose access or connection to the running owned Chrome/MCP occurred. No start/stop/restart of those services. Production launch arguments take effect only at the next operator-controlled Chrome start after R3. Tests use local fake endpoints/processes and mocked PowerShell process/launch functions; the mocked Chrome launch starts no process.

CDP windowState does not detect whether another window covers Chrome. Keep the operator visibility/uncovered-window precondition. Maximization can yield actual bounds different from the requested launch size; compare the recorded bounds. Live rendering improvement remains for the operator to verify after R3.

Protected files were hash-checked: experiments/, evidence/, tools/learning-harness/, operator brief edits, Phase 2 scratch script, saved owned-service state and worker journals/manifests. Live service logs were excluded from hashing. No secrets-file reads, push or main merge. All requested changes completed.

Files changed (under tools/claude-harness):
README.md; PLAN.md; harness.config.example.json; package.json; package-lock.json;
protocol/worker-preamble.md; replays/EXP-033-R3.tasks.md; replays/EXP-033-R4.tasks.md;
scripts/OwnedService.ps1; src/config.ts; src/backend/mcp-service.ts;
src/backend/chrome-window.ts; src/adapters/claude/cli.ts; src/adapters/claude/worker.ts;
test/claude-worker.test.ts; test/mcp-service.test.ts; test/replay-instructions.test.ts;
test/chrome-window.test.ts; test/fake-cdp.ts; this report.

## Final validation

Commands run from tools/claude-harness; all exited 0. Exact final output:

### npm run build

```text

> mongoose-claude-harness@0.1.0 build
> tsc -p tsconfig.json
```

### npm run typecheck

```text

> mongoose-claude-harness@0.1.0 typecheck
> tsc -p tsconfig.json --noEmit
```

### npm test

```text

> mongoose-claude-harness@0.1.0 test
> vitest run


 RUN  v5.0.3 C:/AI/mongoose-factory/tools/claude-harness

warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-c1dGFL\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-Fnodvz\origin.git
 * [new branch]      main -> main
Switched to branch 'main'
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-sIfpdf\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-juC3tD\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-falaCT\origin.git
 * [new branch]      main -> main

 Test Files  16 passed (16)
      Tests  261 passed (261)
   Start at  16:24:25
   Duration  22.55s (tests 91%, import 6%, transform 3%)
```

The Git messages above are from existing local temporary Git fixtures; they do not describe any push/merge in this workspace.

Preservation check (exit 0):

```text
R3: all five worker instructions unchanged
R4: all five worker instructions unchanged
Protected files unchanged: 1328
```

During development, build caught a result-variable name collision; targeted tests caught fake-fixture SSE handling, PowerShell exit-code propagation, and mock-variable scoping. Those were corrected before the successful full validation. No real browser/model was involved.
