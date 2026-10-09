# Live T1 harness corrections

Implemented after operator-run EXP-033-R3 T1, session `60cc08ec-01c4-41cc-9294-26f32bee888e`, task message `9df12bc5-fa57-4422-a583-4c2688ad0052`.

- Every submitted worker payload and appended system prompt now explicitly label the actual worker session UUID and task message UUID. Resumed tasks retain the session UUID and receive a new labelled task message UUID.
- Successful native results with only permission denials matching that task's generated deny rules return `status: completed`, `permissionDenials`, and a review warning. The CLI prints `outcome: completed_with_denials` and exits 3. Clean completion exits 0. Unexpected, mixed, unknown or unsuccessful denials remain blocked and exit 2. Existing usage-limit, loop, timeout and model checks retain precedence.
- Each new task saves its generated deny-rule snapshot in the journal, so later settings/config changes cannot change classification during reconciliation. Matching covers generated literal file/directory boundaries and whole-tool denies. Unsupported or missing classification data remains blocked. Earlier completed journals, including live T1, are not retroactively rewritten.
- The preamble states the brief's scope/prohibitions are supplied, tools/ (including briefs/) is intentionally unreadable, and disabled Bash must not be attempted. It reports the effective Bash policy.
- Both replay scripts add the configuration-selected/normal-Web-Client-page precondition and deliberately throw a review message on exit 3. After review, continue manually only when the report, evidence and next task permit it. Completion of the native invocation does not prove experiment or acceptance-check success.

Files changed: README.md; protocol/worker-preamble.md; replays/EXP-033-R3.tasks.md; replays/EXP-033-R4.tasks.md; src/adapters/types.ts; src/adapters/claude/{cli,events,permissions,worker}.ts; fixtures/fake-claude.mjs; test/{claude-worker,claude-permissions,replay-instructions}.test.ts; this report.

No live worker/model calls, browser launch, Mongoose access, secrets-file read, push or main merge. Tests use fake processes and temporary factory/ Git fixtures; the Git output below belongs to those local test fixtures. No experiments/, evidence/, old-harness files or operator brief edits were changed or staged. All requested changes were completed.

## Verification

Exact final output, from `tools/claude-harness` (all exit 0):

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
To C:\Users\juara\AppData\Local\Temp\harness-git-biXrnn\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-D9tjya\origin.git
 * [new branch]      main -> main
Switched to branch 'main'
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-OfuDYw\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-YuYMUJ\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-x82Sy4\origin.git
 * [new branch]      main -> main

 Test Files  15 passed (15)
      Tests  244 passed (244)
   Start at  15:45:01
   Duration  21.98s (tests 91%, import 5%, transform 4%)
```

Read-only preservation checks (exit 0):

```text
R3: all five worker instructions byte-identical to HEAD (line-ending normalized)
R4: all five worker instructions byte-identical to HEAD (line-ending normalized)
Protected files unchanged: 1271
```

The initial test run caught an overly broad unsupported root pattern in the new classifier and an incorrect normalization in the new replay comparison test. Both were corrected before the successful final checks above. Exact initial test output (exit 1):

```text

> mongoose-claude-harness@0.1.0 test
> vitest run


 RUN  v5.0.3 C:/AI/mongoose-factory/tools/claude-harness

 ❯ test/claude-permissions.test.ts (12 tests | 1 failed) 12ms
   ❯ intentional permission-denial classification (12)
     × matches only explicit whole-tool denies and rejects missing/unknown inputs and rules 5ms
 ❯ test/replay-instructions.test.ts (1 test | 1 failed) 9ms
   ❯ operator replay preparation (1)
     × keeps R3/R4 identical except run IDs/models and pauses for review on exit 3 in every step 8ms
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-xyQOGz\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-IAhlqH\origin.git
 * [new branch]      main -> main
Switched to branch 'main'
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-vsX2tN\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-5CTHF6\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-GtnrPM\origin.git
 * [new branch]      main -> main

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/claude-permissions.test.ts > intentional permission-denial classification > matches only explicit whole-tool denies and rejects missing/unknown inputs and rules
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ test/claude-permissions.test.ts:23:118
     21|     expect(intentionallyDenied({tool_name:"unknown"},rules,cwd)).toBe(…
     22|     expect(intentionallyDenied({tool_name:"mcp__playwright__browser_ty…
     23|     expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path…
       |                                                                                                                      ^
     24|     expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path…
     25|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  test/replay-instructions.test.ts > operator replay preparation > keeps R3/R4 identical except run IDs/models and pauses for review on exit 3 in every step
AssertionError: expected '# EXP-033-REPLAY: five bounded replay…' to be '# EXP-033-REPLAY: five bounded replay…' // Object.is equality

- Expected
+ Received

@@ -9,11 +9,11 @@
    clicked) and the Web Client is loaded, showing the normal Web Client page,
    not a sign-in or configuration screen.
  - Select Form is closed.
  - There are no unsaved Designer changes.
  - The old harness and OpenCode are not running.
- - Use the same starting state for R3 and REPLAY; record it if it differs.
+ - Use the same starting state for REPLAY and R4; record it if it differs.

  Instructions below are only the coordinator text after the old run's marker,
  with experiment IDs/paths and OpenCode worker wording adapted. Source run:
  `tools/learning-harness/data/runs/R-20261007-220054-xlTM`.
  No old preamble or harness-added boundaries are included. Commands run from

 ❯ test/replay-instructions.test.ts:9:78


⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯


 Test Files  2 failed | 13 passed (15)
      Tests  2 failed | 242 passed (244)
   Start at  15:43:43
   Duration  21.73s (tests 91%, import 5%, transform 4%)
```
