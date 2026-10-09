# Phase 4 — hybrid Claude worker controller

Date: 2026-10-09 (Asia/Singapore). Branch: `claude-harness`.
Status: implemented; fake-only validation passed. STOP after this phase's commit.
No Phase 5/6 or live run is authorized by this implementation.

Read PLAN.md, the operator's R3/R4 scorecard, PHASE-1/2/3 and the preparation,
T1, rendering, parallel-guard and comparison-fix notes before implementing.

## Result

- Coordinator defaults to the existing ChatGPT browser adapter (Tab 1). Config
  coordinator.transport selects chatgpt or the implemented Claude sonnet/high
  alternative. Browser submissions confirm the exact visible menu model 6 and
  effort High, including existing chats; missing/unconfirmed selection retains
  browser:model_mismatch. No live label verification was performed.
- Full controller WorkerPort is Claude haiku/high, with per-brief worker.model
  override (model-only overrides default to high effort). Reused sessions enforce
  their model identity. Labelled worker_session_id/task_message_id, explicit
  AGENTS.md, bounded preamble, native permissions, transcript/Git/evidence diffs,
  sequential browser actions, parallel reads and existing recovery guards remain.
- A run-specific explicit --confirm-preconditions attests manual Mongoose login,
  configuration selected/OK and the normal Web Client. Before each new worker
  task, check owned Chrome/MCP health and read-only browser-level CDP window state;
  reject minimized/ambiguous/unreadable state before worker creation/submission,
  and record bounds/model. The loop has no owned service start/restart path.
  Workers must never authenticate or select the login configuration.
- Expected permission-denial completion pauses completed_with_denials (CLI exit
  3), saves the denial list/report and withholds forwarding until item-bound
  resume --approve denials. Cached completion forwards once with no repeat call.
  Unexpected denials remain blocked.
- usage_limit preserves terminal request, partial output, native transcript and
  lease; no automatic resubmission/model switch/restart. Plain resume reconciles
  the cached pause. After reset, explicit --continue-after-usage creates a new
  bounded same-session worker message; --continue-chat-after-usage explicitly
  continues the pending Claude coordinator/specialist response. Old requests stay.
- Primary specialist is Claude Opus/high: separate empty workspace, read-only
  recipes/experiments/environments/claims/docs/mongoose (guides and raw transcripts
  included), strict empty MCP, no mutations/shell/delegation/other web tools.
  sources.md and guides/INDEX.md are supplied first, relevant guides precede
  WebFetch, each relied-on guide page cites its Source URL, version 2026.09.08 is
  preferred, and raw transcripts supply exact spellings. Every answer labels the
  approved verified > observed > documentation/transcripts > model-knowledge
  ranking; guide conversions and the last two ranks remain unverified.
- Specialist WebFetch has native allow rules only for docs.infor.com,
  developer.infor.com, support.infor.com, plus a specialist-only domain guard.
  Native WebFetch can preapprove documentation sites, so allow rules alone are
  not sufficient to promise the three-domain restriction. The guard never grants
  access; file confinement remains in native permission settings. See the official
  [permissions reference](https://code.claude.com/docs/en/permissions).
- External second opinions default enabled, maxPerRun 2. Only Opus requests the
  existing Tab 2 Infor CloudSuite Assistant GPT (6/High). A durable per-run broker
  logs actual requests/receipts/replies under external-second-opinion/, persists
  the allowance across restarts and reconciles uncertain sends without replaying.
  Raw replies go only to Opus, labelled external model knowledge, unverified;
  they never enter controller inbound/worker messages directly or qualify as
  evidence/acceptance proof. External log paths fail evidence validation.
- Claude role journals/session references stay separate from ChatGPT bindings;
  opening a new Opus session preserves the external GPT conversation. Proposal,
  handoff and autopilot consultation paths use the same role transports. Each
  next experiment still requires manual precondition confirmation.
- Protocol prose describes a Claude worker; SEND_TO_OPENCODE and
  NEW_OPENCODE_SESSION remain compatible action tokens. OpenCode code and explicit
  backend commands are retained for existing regression/legacy tests, never as
  the default controller transport. Doctor and setup descriptions reflect the
  new role/service boundaries. README and example config give the full procedure.

## Changed files

All changes are under tools/claude-harness/:

- New adapters/claude/chat.ts (role transport and second-opinion broker),
  adapters/claude/role-policy.ts (read-only specialist policy), and
  adapters/conversation.ts (transport-neutral references).
- app.ts, controller/machine.ts, cli.ts, config.ts, brief.ts, store.ts and
  adapters/types.ts; worker.ts reuses the durable Claude task engine for roles;
  chatgpt/adapter.ts verifies exact menu model/effort; hooks/pre-tool-use.ts adds
  only the specialist WebFetch domain check.
- protocol texts, protocol/prompts.ts, protocol/validate.ts, context.ts,
  autopilot.ts, doctor.ts and setup.ts.
- fixtures/fake-claude.mjs, testing/fakes.ts, testing/scenario.ts,
  test/controller.test.ts and test/browser-action-guard.test.ts; new test/phase4-loop.test.ts and test/chat-model.test.ts.
- README.md, PLAN.md, harness.config.example.json, package.json description,
  and this report. No dependencies changed; no local machine config overwritten.

## Fake validation

New regression coverage includes both coordinator transports, exact menu 6/High
and mismatch blocking with semantic menu fakes (no browser), full kickoff through
EXPERIMENT_COMPLETE using real ClaudeWorker code with a fake Node CLI, two tasks
in one session with a window check for each, brief Sonnet override, operator/
health/minimized gates, exit-3 review/dedup, worker and Claude-chat usage pauses
and explicit continuations, Opus model/prompt/policy, external reply isolation,
fresh-role binding preservation, durable second-opinion limit, labels/logging,
blocked/disabled opinions and uncertain-send non-replay. Existing guard/process/
CDP/protocol/controller tests remain included. A final rerun exposed an existing
flaky raw-input assertion: random tool UUIDs can contain e1. The test now checks
that only the allowed state fields are stored and no raw ref field exists;
production action-guard behaviour is unchanged.

Final commands executed from tools/claude-harness. Exact combined stdout/stderr
and exit codes follow; the Git messages are from isolated test repositories and
local bare remotes under Temp, not the factory repository or its remote.

```text
COMMAND: npm run build

> mongoose-claude-harness@0.1.0 build
> tsc -p tsconfig.json

EXIT: 0
COMMAND: npm run typecheck

> mongoose-claude-harness@0.1.0 typecheck
> tsc -p tsconfig.json --noEmit

EXIT: 0
COMMAND: npm test (HARNESS_BROWSER_TESTS=0; HARNESS_SMOKE=0)

> mongoose-claude-harness@0.1.0 test
> vitest run


 RUN  v5.0.3 C:/AI/mongoose-factory/tools/claude-harness

warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-IM0HZs\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-Mlcvwm\origin.git
 * [new branch]      main -> main
Switched to branch 'main'
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-BwlEPR\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-FMRhfB\origin.git
 * [new branch]      main -> main
warning: in the working copy of 'AGENTS.md', LF will be replaced by CRLF the next time Git touches it
To C:\Users\juara\AppData\Local\Temp\harness-git-5At1Hd\origin.git
 * [new branch]      main -> main

 Test Files  20 passed (20)
      Tests  333 passed (333)
   Start at  18:45:26
   Duration  26.18s (tests 93%, import 5%, transform 3%)

EXIT: 0
```

Additional final checks:

```text
Protected files checked: 1421; mismatches: 0
git diff --check -- tools/claude-harness: exit 0, no output
```

The protected hash snapshot includes AGENTS.md, experiments/, evidence/, operator
briefs/replays/scorecard, docs/, all old learning-harness files and the Phase 2
scratch script. The six pre-existing old-harness edits remain untouched and
uncommitted. Evidence/playwright logs remain excluded/ignored; none were staged.
No live ChatGPT/Claude/Chrome/MCP/Mongoose interaction, browser launch, secrets-file
read, factory push or merge occurred. Only fake processes/endpoints and scratch
repositories were used in tests.

## Limits and next gate

Fakes verify harness routing, policy generation and pause/ownership logic. They
cannot verify live ChatGPT selectors or the requested 6 menu label, native Claude
permissions/model resolution/event schema, cross-host WebFetch redirect behaviour,
or a real Mongoose task. Those remain for separately approved operator validation.
Existing machine config is preserved; before a live run review/update it using
README's Phase 4 procedure and the example. Retain loopback-only CDP: a reachable
local process controls the logged-in session; keep Chrome visible/uncovered,
worker Bash denied, and stop owned Chrome when use ends.

Commit this Phase 4 implementation, then STOP. Do not begin Phase 5 or live work.
