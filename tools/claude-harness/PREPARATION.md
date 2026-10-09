# EXP-033 replay preparation

Date: 2026-10-09 (Asia/Singapore). Preparation only; stopped before live runs
and Phase 4. No browser launch, model call, Mongoose operation or secrets read.
No push or merge. Operator documentation committed separately, as-is:
`51ffe52 docs(mongoose): preserve operator converted guides and index`.

## Changes

- `src/config.ts`, `harness.config.example.json`, `src/backend/mcp-service.ts`,
  `scripts/OwnedService.ps1`: production Chrome window style is configurable
  normal/minimized/hidden, default normal; MCP remains hidden. The request passes
  style to Start-Process and includes it in its ownership scope hash. No Chrome
  was launched to test visibility; request/config tests and PowerShell parsing
  passed. The Phase 2 scratch-check script's content is unchanged.
- `briefs/EXP-033-R3.brief.json`, `EXP-033-R4.brief.json`: copied from R2 with
  requested IDs/paths/title, related experiments, fresh Claude UUID identity,
  haiku/high or sonnet/high, exact values and no-JavaScript tool policy. Both
  remain `reviewed: false`. Inherited Select Form state is recorded, not reset.
  All other scope/prohibitions/acceptance checks retain their source text.
- `src/brief.ts` and worker CLI: optional brief `worker` model/effort defaults
  are honored; explicit CLI flags still override them.
- `replays/EXP-033-R3.tasks.md`, `EXP-033-R4.tasks.md`: five coordinator-only
  instructions from old run R-20261007-220054-xlTM messages 001, 002, 003, 005,
  006. Only IDs/paths/OpenCode identity wording adapted. Literal PowerShell
  here-strings preserve backticks. T1 starts fresh; T2–T5 use its UUID. Old
  messages were only read, not modified.
- `replays/scorecard.md`: ten task rows, requested columns, two AC-1..AC-8
  tables, reviewer notes and session/inherited-state/recovery fields. No results
  pre-filled and coordinator-error cells left blank.
- Worker journal/manifest/JSON output now include `assistantTurns`,
  `wallTimeSeconds`, and task-local `guardDenials` (total and byGuard), plus
  the audit path. Hook audit records only timestamp/session/tool/guard identity;
  no entered values or secret text. It adds no fourth policy check. A resumed
  task has its own denial log, while the consecutive-call guard state persists.
  Missing/incomplete audits are explicitly lower-bound counts; wall time after
  crash recovery is unknown. Native permission denials are separate from custom
  key_text/exact_values/identical_calls/guard_state denials.
- `README.md`: exact staged operator procedure, manual login before workers,
  task-by-task review, retained UUID, scorecard/evidence review and owned shutdown.
- `PLAN.md`: Phase 4 reads the local guides index/relevant pages before WebFetch,
  cites each page's Source URL and retains unverified trust/source ranking.
  No specialist code was changed.
- `test/mcp-service.test.ts`, `test/claude-hook.test.ts`,
  `test/claude-worker.test.ts` cover production Chrome style configuration,
  denial labels, actual fake
  hook audit/CLI JSON metrics, and isolation of counts across resumed tasks.

## Validation: actual commands and output

The final build/typecheck/test commands ran in `tools/claude-harness`, with
browser fixtures and real smoke excluded. Exit code zero:

```text
> mongoose-claude-harness@0.1.0 build
> tsc -p tsconfig.json

> mongoose-claude-harness@0.1.0 typecheck
> tsc -p tsconfig.json --noEmit

> mongoose-claude-harness@0.1.0 test
> vitest run

 Test Files  13 passed (13)
      Tests  222 passed (222)
   Start at  14:38:42
   Duration  19.57s (tests 68%, import 28%, transform 3%, worker 1%)
```

Shell invocation: `npm run build`, then `npm run typecheck`, then
`$env:HARNESS_BROWSER_TESTS='0'; $env:HARNESS_SMOKE='0'; npm test`.
Git-test output includes pushes only to temporary local bare remotes, never the
factory's remote. No live fixture or model was used.

Read-only static verification from the factory root, exit zero:

```text
node tools/claude-harness/claude-data/verify-preparation.mjs
EXP-033-R3: brief/schema/boundaries PASS; 5 exact adapted instructions PASS; 5 static scope checks PASS; fresh T1 / resumed T2–T5 commands PASS
EXP-033-R4: brief/schema/boundaries PASS; 5 exact adapted instructions PASS; 5 static scope checks PASS; fresh T1 / resumed T2–T5 commands PASS
Scorecard: 10 task rows and 16 acceptance rows PASS
tools/claude-harness/scripts/OwnedService.ps1 : 1 PowerShell blocks parse PASS (not executed)
tools/claude-harness/replays/EXP-033-R3.tasks.md : 5 PowerShell blocks parse PASS (not executed)
tools/claude-harness/replays/EXP-033-R4.tasks.md : 5 PowerShell blocks parse PASS (not executed)
```

The local verification script is ignored preparation scratch state, not a live
replay command. It verifies brief schema, review gate, scope/AC preservation,
exact instruction extraction and command models/session flags. PowerShell's AST
parser checks syntax without invoking the command blocks.

SHA-256 protection checks passed: all 153 old-harness baseline files were
unchanged, and all 44 additionally protected files were unchanged (38 operator
documentation files, five old task messages and the Phase 2 scratch script).
The old harness's six pre-existing uncommitted edits remain outside these commits.

## Items requiring operator review before live comparison

The faithfully extracted instructions contain historical state assumptions:
T2 expects Select Form closed; T2–T5 assume T1 used the corrected inspection;
T5 expects exactly one initial Open. Neither new run has established these facts.
They must not be fabricated or reset into place. Stop if actual preconditions
differ; changes beyond IDs/paths/OpenCode wording were not authorized here.

T2–T4 explicitly leave Select Form open, conflicting with the existing global
worker instruction to finish without open dialogs. These preparation changes
preserve the requested old instructions and current policy. A live run cannot
reliably obey both until the operator resolves that conflict. No policy exception
or live workaround was introduced.

Native Claude execution, actual visible Chrome behavior and Mongoose evidence
remain unverified, intentionally outside this preparation authorization. Phase 4
has not started. Prior scratch-profile cleanup remains pending from Phase 2;
no deletion or repeat scratch launch was attempted in this turn.
