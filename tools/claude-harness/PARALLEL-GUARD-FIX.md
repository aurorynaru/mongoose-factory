# Concurrent PreToolUse guard correction

Operator-reported R4 T1: session `66e4d74e-ce8b-4646-b9f9-01fbca90a469`, task message `31e86f3c-e71c-4412-9119-28ff2d39e3b7`. No replay or retroactive journal edit.

## Changes

- Parallel tool calls are expected from Sonnet and Opus. Hook processes retry exclusive state-lock acquisition every 20ms for up to 3000ms, rather than denying the first EEXIST.
- Locks record PID, timestamp and a unique ownership token. Recover a gone owner or a lock older than 60 seconds; legacy empty locks use filesystem age. The age limit exceeds the generated hook's 10-second timeout. A separate reclaim gate serializes stale-state-lock cleanup and is also cleaned up/recovered. Recovery is audited.
- State updates remain atomic: write a unique temporary file, check lock ownership, then rename. Only the current owner's token is eligible for lock release. Temporary files and normal locks are cleaned up.
- Canonical tool-name/input identity is compared under the lock. Consecutive counts and an acquisition sequence advance in lock-acquisition order. Different calls reset the count to one. Existing state/counts remain valid without the new sequence field; recovery never resets them.
- Corrupt JSON, invalid counter schemas and counter overflow return a `Guard state corrupt` message with audit label `state_corrupt`. A genuinely unavailable lock returns `Guard lock timeout` with audit label `lock_timeout`. Original state and another live owner's lock are preserved on these failures. Unrecoverable atomic-write/audit I/O failures still fail closed.
- Audit rows distinguish `call`, `stale_lock_recovered`, and `denial`. Successful calls log PID/sequence/count, with no raw input, file path, text or secret value. Worker guard-denial totals exclude successful calls/recovery and accept historical denial rows without an event field.
- README/PLAN explain parallel calls, lock timing, recovery and ordered counting. Key-text, exact-value and identical-call guard policies/thresholds remain in force.

Files changed under tools/claude-harness: README.md; PLAN.md; src/hooks/pre-tool-use.ts; src/hooks/guard-lock.ts; src/adapters/claude/worker.ts; test/claude-hook.test.ts; test/claude-hook-concurrency.test.ts; this report.

## Tests and preservation

Process tests run the actual compiled hook against temporary session files:
- Eight concurrent mixed Read/Grep calls, with a test-owned lock held initially: no false denials; all eight sequence/count updates verified against the actual PID/acquisition order; final state matches; no lock/reclaim/temp leftovers.
- Eight concurrent identical calls: counts 1..8 exactly once, exactly calls 6..8 denied.
- Eight concurrent hooks after a dead owner: one recorded stale-state-lock recovery, original count 2 preserved and advanced to 10.
- Expired and legacy empty lock recovery.
- Genuine live-lock timeout lasting at least the 3-second bound, with distinct audit and unchanged original state/lock.
- Corrupt JSON and invalid counter schemas: distinct corruption audit, unchanged state and released lock.
- Existing worker integration verifies correct denial metrics with the new audit entries.

No live task/model call, browser tool, Mongoose access, or connection/start/stop/restart of the running owned Chrome/MCP. Existing experiments, evidence, old-harness edits, operator briefs/scorecard, scratch script, saved service state and live task journals/manifests remain unchanged. No secrets-file read, push or main merge. All requested changes completed; applies to subsequent hook invocations without a browser restart.

## Exact final validation output

Commands run from tools/claude-harness. All exited 0.

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
To C:\Users\juara\AppData\Local\Temp\harness-git-BkdFs0\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-9QQDYt\origin.git
 * [new branch]      main -> main
Switched to branch 'main'
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-8iLaXF\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-ornNcb\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-kdqD4K\origin.git
 * [new branch]      main -> main

 Test Files  17 passed (17)
      Tests  270 passed (270)
   Start at  17:02:30
   Duration  22.28s (tests 91%, import 6%, transform 3%)
```

The Git messages above belong to existing local temporary Git fixtures; no workspace push/merge occurred.

Preservation check (exit 0):

```text
Protected files unchanged: 1381
```
