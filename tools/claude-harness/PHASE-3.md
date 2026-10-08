# Phase 3: bounded Claude worker

Date: 2026-10-09 (Asia/Singapore). Branch: `claude-harness`.
Phase 3 implementation and fake regression validation complete. **STOP before
Phase 4.** The operator's next step is the live Haiku-versus-Sonnet comparison.
No real model call, Mongoose operation, secrets-file read, push or main merge
was performed. Phase 2's single authorized scratch launch is the only browser
launch in Phases 2–3; its exact output and cleanup exception are in
[PHASE-2.md](PHASE-2.md).

## Result and implementation

`claude-harness worker task <EXP-ID> "<instruction>"` runs one bounded worker
without the coordinator. It requires a valid reviewed brief and experiment
record, checks instruction boundaries and the selected evidence directory,
and saves the full brief, instruction, policy, preamble and before/after evidence
manifest. Default sessions are fresh; `--model sonnet --effort high` makes a
separate operator-directed replay possible. Existing sessions retain their
configured model and experiment scope. See [README.md](README.md) for commands.

- [src/adapters/claude/worker.ts](src/adapters/claude/worker.ts): durable UUID
  sessions/tasks, exclusive worker lease, child lifecycle, explicit native
  transcript receipt, safe-boundary monitoring and owned abort. First request
  uses `--session-id`; subsequent explicit tasks use `--resume`. No automatic
  resubmission or model switching, including missing/unknown receipts.
- [src/adapters/claude/cli.ts](src/adapters/claude/cli.ts): standalone bounded
  task, `worker reconcile` and `worker abort`; full manifest/report retained,
  console excerpt capped at 4,000 characters. Reconcile launches no process;
  abort targets only the identified worker tree, leaving MCP/Chrome alive.
- [src/adapters/claude/events.ts](src/adapters/claude/events.ts): buffered JSONL
  parsing, init/model checks, assistant turn IDs, tool/result joins, terminal
  result validation, usage/permission errors and existing result-aware loop
  detectors. Split UTF-8 is decoded incrementally. Compaction is not completion;
  malformed output, incomplete tools and missing terminal events preserve
  partial output without claiming success.
- [src/adapters/claude/transcripts.ts](src/adapters/claude/transcripts.ts): only
  the selected session's expected native project transcript is inspected. A
  complete user event must match cwd, session UUID and the exact harness message
  marker. Missing/truncated/foreign-cwd data is unknown, never proof of absence.
  Crash recovery additionally requires a complete terminal stream and evidence
  that the original identified process no longer lives; it never resubmits.
- [src/adapters/claude/git-state.ts](src/adapters/claude/git-state.ts): porcelain
  status, index identities and working-file hashes detect edits to already dirty
  files, untracked files, renames and deletions. Task attribution uses the
  before/after difference, not the assumption that Git began clean.
- [src/adapters/claude/process.ts](src/adapters/claude/process.ts) and
  [scripts/ClaudeTaskProcess.ps1](scripts/ClaudeTaskProcess.ps1): shell-free
  hidden child launches; PID/executable/start-time/command-hash ownership checks
  before tree termination. Subscription child environments remove API key/token
  variables and reject alternate provider routing without modifying the parent
  environment. API billing remains an explicit configuration choice.

Readiness checks CLI version/auth status and already-owned Chrome/MCP health;
they never start services or ask a model to verify its own identity. Models are
configurable: worker haiku/high, coordinator sonnet/high, specialist opus/high.
Only the worker transport is implemented here; coordinator/specialist transports
remain inherited code pending Phase 4. The standalone command bypasses them.

## Instructions, permissions and guards

Every worker task explicitly appends current AGENTS.md and journals its hash,
alongside the brief preamble. `--setting-sources ""` excludes user, project and
local settings; explicit settings/CLI flags and managed policy still apply.
This does not establish CLAUDE.md discovery behavior. See the source references
and limitations in [PLAN.md](PLAN.md).

The preamble requires a fresh snapshot of the visible tab and verified Form/
editing scope at task start. At task end it requires a stable page without open
dialogs or unsaved prompts: CDP disconnect dismisses beforeunload dialogs
(accepted installed-source reference `coreBundle.js:40014`). If stabilizing
would discard work or exceed scope, preserve a checkpoint and report the blocker.
No browser recovery, save, navigation or reset is authorized by a new session.

[src/adapters/claude/tool-policy.ts](src/adapters/claude/tool-policy.ts) generates
strict HTTP MCP configuration, a limited built-in tool inventory, deny rules
for secrets-directory/.git/tools/Claude-auth/browser-profile paths, and an
AGENTS.md edit denial. Worker web/delegation tools are denied. Bash defaults to
denied; brief no-JavaScript also denies Bash and browser evaluation/code tools.
Native Read/Edit patterns use Windows absolute paths in the documented POSIX
form. These permissions remain native CLI controls, not an OS sandbox.
[Native permission reference](https://code.claude.com/docs/en/permissions).

The custom [PreToolUse hook](src/hooks/pre-tool-use.ts) has exactly three
purposes: key-like text in entry tools, `exact_values` spelling/case, and identical
consecutive calls. It persists canonical hashes/counts atomically, denies the
sixth identical call by default, and never grants additional permission. Literal
key-text exemption does not exempt exact values. Hook-state/config/input failure
returns a denial. The compiled entry point is required before submission.
[Native hook reference](https://code.claude.com/docs/en/hooks#pretooluse).

The independent result-aware stale-reference/browser-read/shell-call detectors
remain, with a 24-call window. Loop and turn-limit interruption waits for tools
to finish; the wall-time budget can interrupt and preserve partial state. This
does not prove the interrupted browser is stable. Automatic backend restart
defaults to off and never serves as usage-limit recovery.

## Expected usage-limit pause and evidence

Claude Pro five-hour/weekly limits are an expected `usage_limit` pause. The
worker retains the lease, session, journal, native/event transcripts, partial
report and evidence; controller handling does not charge a failure or submit
again. Reconciliation of a paused task returns the cached result.

After the operator waits for reset, a new bounded instruction may use
`--session <UUID> --continue-from <MESSAGE-ID>`. This requires an owned terminal
usage pause, matching native transcript marker and matching lease. Continuation
approval is journaled, and a new message ID resumes the same session/model.
The prior payload/result remains intact; it is never replayed automatically.

Ignored runtime artifacts:

- `claude-data/worker-tasks/<message-id>.json`: full brief/instruction, evidence
  snapshots/diff and result.
- `claude-data/workers/<session-id>/session.json`, `settings.json`, `guard.json`,
  `guard-state.json`: session identity, native policy and guard configuration.
- `claude-data/workers/<session-id>/tasks/<message-id>.*`: task journal, event
  JSONL, stderr, identified process metadata and explicit continuation audit.
- `claude-data/workers/active-task.json`: exclusive task/usage-pause lease.
- Native transcript path is reported and journaled; only that session's file
  is used for receipt checks. Full streams are not repeatedly printed to console.

## Validation

Final commands ran in `tools/claude-harness`; all exited zero:

```text
npm run build
tsc -p tsconfig.json
npm run typecheck
tsc -p tsconfig.json --noEmit
$env:HARNESS_BROWSER_TESTS='0'; $env:HARNESS_SMOKE='0'; npm test
Test Files  13 passed (13)
     Tests  219 passed (219)
  Start at  00:11:13
  Duration  24.67s (tests 90%, import 6%, transform 3%)
npm run dry-run
Dry-run: 17 scenario(s) against fakes (no live submissions).
All scenarios passed.
```

The command listing above summarizes commands actually run; browser fixture and
real OpenCode smoke suites were excluded. Local Git test pushes target only
temporary local bare remotes. CLI help confirmed worker/service command flags.

New worker/hook coverage uses fake Node CLI processes and real generated hook
execution: session/resume argv, empty setting sources, explicit AGENTS, marker
receipt, unknown/truncated transcripts, usage pause/explicit continuation,
deduplication, model mismatch, permission errors, split/malformed streams,
dirty-file attribution, stale-ref/read loops, turn/wall limits, worker lease,
owned abort preserving a sibling fake MCP process, and conservative crash
recovery. Controller coverage preserves the normal usage pause and requires
explicit approval instead of replaying an uncertain submission.

Failures corrected before the final pass: the old automatic uncertain-worker
retry expectation was replaced with explicit approval; the fake CLI's absent
resume-flag parser was fixed; wall-time completion now awaits the owned-stop
promise instead of racing it and returning an unconfirmed stop.

## Practical limits and stop gate

Fixtures verify harness behavior against their schemas, not native Claude
behavior. No real model task was run. Native stream/usage signatures, print-mode
transcript durability/resume, high effort support for each model, generated
hook invocation and Windows permission enforcement remain live-unverified.
The operator replay is the next opportunity to observe them. Native permissions
and model aliases can change across CLI versions; the installed diagnostic
baseline was 2.1.294. A completed worker report alone does not verify a Mongoose
procedure or save/reopen persistence.

Any local process reaching CDP controls the logged-in session. Loopback-only
binding, Bash denied by default, and stopping owned Chrome when unused remain
required. The production Mongoose profile was never launched or inspected.
The authorized scratch browser and MCP were confirmed stopped, but automatic
approval review rejected deletion of its scratch profile (`blocked by policy`).
`claude-data/phase2-scratch/profile` remains for manual cleanup; no bypass or
second browser check was attempted.

Phase 4 has not started. Operator docs and the pre-existing dirty old harness
remain unchanged; phase commits are scoped to the new harness. Replay command
instructions are in [README.md](README.md). Do not start chat-role migration,
final live smoke, push or merge without subsequent authorization.

Final protection check compared the Phase 1 SHA-256 snapshot: all 153 old-harness
files and all 18 operator-doc files were unchanged. Git diff whitespace checks
passed. Read-only process/port checks again found neither scratch process nor a
listener on ports 56003/56004; the scratch profile remains a normal directory.
