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
  006. Initially only IDs/paths/OpenCode identity wording adapted; approved
  state/recovery changes are enumerated below. Literal PowerShell
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

## Initial preparation validation: actual commands and output

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

## Conflicts resolved: approved changes

Both conflicts are resolved under the operator's subsequent instruction. The
briefs remain unreviewed. No scope, prohibition, key sequence or acceptance
check was changed. T1's instruction and all command/model/session flags are
unchanged. The same 13 clause replacements were applied to R3 and R4, verified
against commit `96dc0c5` with no other instruction-word changes.

`protocol/worker-preamble.md` and the matching appended system text in
`src/adapters/claude/worker.ts` now require no browser-native dialogs (alert,
confirm, prompt, beforeunload "leave page") and no unsaved-change prompts at task
end. In-page Mongoose dialogs may stay open only when the current task explicitly
says to leave them open; otherwise finish without them. CDP disconnect dismisses
beforeunload dialogs. Never discard unsaved work or exceed scope to stabilize;
checkpoint and report a blocker. The fake-process integration test checks that
both prompt sources contain each part of this rule.

Common replacement recovery rule, used verbatim in T2–T5:

> Recovery accounting: read the used/remaining recovery counts recorded in the experiment record by earlier tasks and continue from them. The whole experiment allows at most one extra fresh untargeted snapshot plus one corrected visible inspection in total; use a component only if the record shows it is still unused, and record any use.

Every instruction change (identical in both scripts):

1. T2's opening read-only check no longer asserts "and Select Form is still
   closed"; Web Client usability is still required.
2. T2's "If still closed, use the supported rendered Web Client controls to
   perform exactly one ordinary Open solely to open Select Form" becomes:
   "Check whether Select Form is open, consistent with what T1 recorded. If it
   is closed, perform exactly one ordinary Open. If T1 recorded it already open,
   do not Open; use it as-is and record that the initial Open was not consumed.
   If the current state contradicts T1's record, stop and report."
3. T2's fixed corrected-inspection 1/1, snapshot 0/1 and prohibition on consuming
   the snapshot in this planned task become the common recovery rule above.
4. T3's "Because T1 already consumed the single corrected-visible-inspection
   component, do not perform any corrected visible inspection" becomes "Use a
   corrected visible inspection only if the record shows it is still unused,
   and record any use."
5. T3's "The extra fresh untargeted recovery snapshot remains available 0/1; if"
   becomes the common recovery rule followed by "If"; the settled-capture
   ambiguity condition is retained.
6. T3's "without another corrected inspection" becomes "using a corrected
   visible inspection only if the record shows it is still unused".
7. T3's "you may consume that single remaining snapshot once" becomes "you may
   consume that snapshot once only if the record shows it is still unused".
8. T4's fixed corrected-inspection exhaustion and available snapshot counts
   become the common recovery rule followed by "Consume it"; the genuine
   ambiguity condition and at-most-once limit remain.
9. T4's "without any corrected inspection" becomes "using a corrected visible
   inspection only if the record shows it is still unused".
10. T5's "the existing `FX_ComponentRecoveryLab03` Web Client/Designer Form
    context" becomes "the inherited Web Client/Designer Form context recorded
    in T1".
11. T5's "initial ordinary Open exactly 1/1" becomes "initial ordinary Open 0
    or 1, as recorded in T2".
12. T5's fixed recovery reconciliation becomes "Reconcile recovery use exactly
    as recorded" followed by the common recovery rule.
13. T5's "the remaining one fresh untargeted recovery snapshot may be used
    once, but no corrected visible inspection remains" becomes "a fresh
    untargeted recovery snapshot may be used once only if the record shows it
    is still unused, and a corrected visible inspection may be used only if
    the record shows it is still unused". The condition that the final planned
    audit is materially ambiguous and the ban on recovery for extra confirmation
    remain.

Both script headers now say the review blockers are resolved and list operator
preconditions: owned Chrome visible and logged in to the Web Client; Select Form
closed; no unsaved Designer changes; old harness/OpenCode not running; same
starting state for R3/R4 (record it if it differs). README and PLAN now reflect
the resolved rules. No records, briefs, acceptance checks, old run files or
operator documentation were edited during this resolution.

## Conflict-resolution validation: actual output

Build and typecheck exited zero. Non-browser tests ran with
`HARNESS_BROWSER_TESTS=0` and `HARNESS_SMOKE=0`; exit zero:

```text
> mongoose-claude-harness@0.1.0 build
> tsc -p tsconfig.json

> mongoose-claude-harness@0.1.0 typecheck
> tsc -p tsconfig.json --noEmit

> mongoose-claude-harness@0.1.0 test
> vitest run

 Test Files  13 passed (13)
      Tests  222 passed (222)
   Start at  15:06:33
   Duration  17.19s (tests 91%, import 5%, transform 3%)
```

The shell invocation was `npm run build`, `npm run typecheck`, then
`$env:HARNESS_BROWSER_TESTS='0'; $env:HARNESS_SMOKE='0'; npm test`.
The strengthened fake-process test checks both prompt sources for the native
dialog prohibition, explicit in-page exception, unsaved-work protection and
blocker rule. Browser fixtures and real smoke remain excluded.

Static checks and protection checks, exit zero:

```text
node tools/claude-harness/claude-data/verify-resolved-conflicts.mjs
EXP-033-R3: 13 approved replacements only; 5 static scope checks PASS; brief/acceptance checks unchanged and unreviewed PASS
EXP-033-R4: 13 approved replacements only; 5 static scope checks PASS; brief/acceptance checks unchanged and unreviewed PASS
R3/R4 normalized instruction parity PASS
tools/claude-harness/replays/EXP-033-R3.tasks.md : 5 PowerShell blocks parse PASS (not executed)
tools/claude-harness/replays/EXP-033-R4.tasks.md : 5 PowerShell blocks parse PASS (not executed)
Preparation protected files: 44 unchanged
Old harness: 153 unchanged
```

The ignored static checker compares every instruction against `96dc0c5` with
only the approved replacement list applied, checks static scope and unchanged
brief/AC content, and compares R3/R4 with IDs normalized. PowerShell AST parsing
does not execute task blocks. No live runs, model calls, browser launches,
Mongoose operations, push or merge occurred. Commit scope is the two prompts,
one test file, two replay scripts, PREPARATION.md, README.md and PLAN.md.

Native Claude execution, actual visible Chrome behavior and Mongoose evidence
remain unverified, intentionally outside this preparation authorization. Phase 4
has not started. Prior scratch-profile cleanup remains pending from Phase 2;
no deletion or repeat scratch launch was attempted in this turn.
