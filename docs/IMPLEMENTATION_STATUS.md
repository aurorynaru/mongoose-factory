# Implementation status

## Coder custom non-thinking preset (2026-10-07)

- Selected Coder IQ1_M in OpenCode and the local harness worker configuration.
  Loaded the installed Coder configuration at context 196,608 with reasoning
  disabled, temperature 0.8, top-p 0.95, top-k 40, presence penalty 1.0 and
  frequency penalty 0.3. This is a user-requested experimental preset, not the
  official Qwen non-thinking recommendation. Default penalty window remains 64.
- Frozen `exp009-shadow-v3` run `S-20261007020038017-79564ead`: 16 trials,
  15 valid, 1 invalid (unavailable evidence IDs), no failure/timeout, all AI-graded;
  correctness 1.50/2, evidence 1.5625/2, median 10.258 seconds, 7,946 output tokens.
  Output cap/timeout remain 16,384 / 600 seconds. No proposed tool action executed.
- Compared with the preceding Coder non-thinking recommendation run: small score
  increase and one fewer valid response. Context also changed from 131,072, so
  neither sampling effects nor loop prevention are causally established.
- Backups, research, grades and baseline verification are under ignored
  `data/shadow/reviews/exp009-v3-coder-iq1-custom-nonthinking-20261007/`.
  Comparison: `data/shadow/comparisons/exp009-v3-coder-iq1-official-vs-custom-nonthinking-20261007-reviewed.md`.
- At the end of the test, Coder was loaded on the original port 8080 and EXP-026
  remained paused; the test did not restart the OpenCode backend or Mongoose
  browser. EXP-026 subsequently completed blocked after the live Designer state
  was unavailable. EXP-027 is approved with pre-mutation session establishment
  permitted. Existing loop guards and recovery limits continue to apply.

## Recommended non-thinking sampling comparison (2026-10-07)

- Repeated the same eight frozen `exp009-shadow-v3` checkpoints twice per model
  with reasoning disabled, temperature 0.7, top-p 0.80, top-k 20, min-p 0,
  presence penalty 1.5 and repetition penalty 1. These follow the base Qwen
  non-thinking recommendation. Context/output/timeout remained 131,072 / 16,384 /
  600 seconds, matching the preceding thinking tests.
- IQ2_XS `S-20261006170355631-1f64e2ea`: 16/16 valid formats, correctness
  1.375/2, evidence 1.25/2, median 14.9725 seconds, 7,182 output tokens.
- Coder IQ1_M `S-20261006170958768-2c668298`: 16/16 valid formats, correctness
  1.4375/2, evidence 1.4375/2, median 12.2185 seconds, 9,176 output tokens.
  All 32 trials were AI-graded and saved without executing proposals or identifying
  unsafe actions. Valid formats still contained tool/context and verification errors.
- This sample gives Coder a small correctness edge and stronger evidence score.
  Both are faster than the thinking configurations; Coder's quality scores are
  slightly lower. Reasoning and sampling change together, so this does not isolate
  their individual effects or establish live loop prevention.
- Review/backups/verification are under ignored
  `data/shadow/reviews/exp009-v3-recommended-nonthinking-codex-20261007/`.
  Saved paired and four-configuration comparisons under `data/shadow/comparisons/`:
  `exp009-v3-iq2-vs-coder-iq1-recommended-nonthinking-20261007-reviewed.md` and
  `exp009-v3-iq1-iq2-thinking-vs-nonthinking-recommended-20261007-reviewed.md`.
- Nine older reviewed results, OpenCode settings and installed Strata configurations
  were preserved. Used graceful unload/load and a temporary Coder service, then
  restored IQ2_XS on port 8080. The factory stays paused; no browser or OpenCode
  backend restart occurred, and these settings were not applied to the live worker.

## Recommended thinking sampling comparison (2026-10-07)

- Ran the same eight frozen `exp009-shadow-v3` checkpoints twice per model, first
  full IQ2_XS, then pruned Coder IQ1_M. Both used temperature 1.0, top-p 0.95,
  top-k 20, min-p 0, presence penalty 0, repetition penalty 1 and Strata high
  reasoning. Runtime context was 131,072, output cap 16,384, timeout 600 seconds.
  These sampling values follow the base Qwen model card's thinking settings;
  the output cap is the local workflow budget rather than its larger benchmark budget.
- IQ2_XS run `S-20261006160552190-dc892efe`: 12/16 valid responses, correctness
  1.3125/2, evidence 1.3125/2, median 76.2335 seconds, 98,112 output tokens.
  Three responses had malformed JSON and one exhausted the output limit without
  final content. One otherwise valid JSON proposal contained invalid JavaScript.
- Coder IQ1_M run `S-20261006163800233-b07b0997`: 16/16 valid responses,
  correctness 1.5/2, evidence 1.5625/2, median 53.6265 seconds, 79,054 output tokens.
  All 32 trials were graded by Codex against the frozen observations and relevant
  procedures. No proposed tool or script executed; no unsafe proposal was identified.
- This small paired sample favors Coder IQ1_M with these settings. Both variants
  still made incomplete visibility/property-readback proposals; this does not establish
  live experiment completion or prevent browser loops. Earlier greedy 8K/300-second
  runs remain historical reference and cannot isolate the sampling effect.
- Saved canonical grades, original inference backups, review notes and verification
  under ignored `data/shadow/reviews/exp009-v3-recommended-sampling-codex-20261007/`.
  The paired report is
  `data/shadow/comparisons/exp009-v3-iq2-vs-coder-iq1-recommended-sampling-20261007-reviewed.md`.
- OpenCode settings, installed Strata configurations and seven previous reviewed
  baseline files were preserved. Used graceful model unload/load and a temporary
  Coder service on port 8081; that service is stopped. Original IQ2_XS is restored,
  loaded and idle on port 8080 at 128K. EXP-026 remains paused; the browser and
  OpenCode backend were not restarted. Test settings were not applied to the live worker.

## IQ2_XS medium-reasoning shadow trial (2026-10-06)

- Reused the idle installed IQ2_XS server at 131,072 context without restarting
  Strata, OpenCode or the browser. EXP-026 remains paused.
- Uses the existing shadow runner with an in-memory `reasoning_effort: medium`
  override, recorded in the result. The live worker and `opencode.json` remain
  unchanged with IQ2_XS reasoning `none`.
- Runs the same eight frozen checkpoints, two repeats, 8,192 output tokens,
  temperature zero and 300-second timeout. No proposed actions execute.
- Completed `S-20261006151841105-910a46b2`: thirteen valid responses, three invalid
  (one truncated JSON and one empty response at the output cap; one normally
  finished response citing an unknown evidence ID), no HTTP failures/timeouts.
  Saved AI grades for all sixteen: correctness 1.3125/2, evidence 1.3125/2,
  no proposal safety failures, median 68.7045 seconds and 57,974 output tokens.
  Separate reasoning-token counts are not reported by Strata.
- The matched IQ2_XS `none` baseline has sixteen valid, correctness 1.625/2,
  evidence 1.5/2 and median 12.4795 seconds. `high` has fourteen valid,
  correctness/evidence 1.5/2 and median 76.5405 seconds. Neither reasoning
  setting improves average correctness or validity on this corpus at this cap;
  this evidence favors retaining live IQ2_XS reasoning `none`.
- Original inference/settings/usage, all compared baseline files and
  `opencode.json` remained unchanged. Ignored audit scripts, backups and
  verification are under `data/shadow/reviews/exp009-v3-iq2-medium-codex-20261006/`;
  three-way comparison is
  `data/shadow/comparisons/exp009-v3-iq2-none-medium-high-20261006-reviewed.md`.
  AI review of next-action proposals does not establish live completion or loop
  prevention; prompts supplied tool names rather than full argument schemas.
  Review-script syntax validation and `git diff --check` passed.

## IQ2_XS high-reasoning shadow trial (2026-10-06)

- Stopped Coder IQ1_M's Strata server/text/vision processes and started the installed
  IQ2_XS server without opening a browser or restarting OpenCode. EXP-026 remains
  paused. Existing IQ2_XS runtime settings remain 131,072 context, k8v4, resident
  headroom 6 and file release enabled.
- Uses the existing shadow runner with an in-memory `reasoning_effort: high`
  override, recorded in the result and ignored review driver. `opencode.json`
  and the live worker's `reasoningEffort: none` configuration remain unchanged.
- Requests the same eight frozen checkpoints, two repeats, 8,192 output tokens,
  temperature zero and 300-second timeout. No proposed action executes.
- Completed `S-20261006143358736-9ed42511`: fourteen valid responses, two invalid
  (one empty output-cap exhaustion; one normally finished response with an unknown
  evidence ID), no HTTP failures/timeouts. Saved AI grades for all sixteen:
  correctness 1.5/2, evidence 1.5/2, no proposal safety failures; median 76.5405
  seconds and 70,343 output tokens. The matched `none` baseline has sixteen valid,
  correctness 1.625/2, evidence 1.5/2, median 12.4795 seconds and 6,226 output tokens.
  This result does not justify enabling high reasoning for the live worker.
- Verified original inference/settings/usage, all compared baseline files and
  `opencode.json` remained unchanged. Review scripts, backups and verification
  are under ignored `data/shadow/reviews/exp009-v3-iq2-high-codex-20261006/`;
  paired comparison is `data/shadow/comparisons/exp009-v3-iq2-none-vs-high-20261006-reviewed.md`.
  Only next-action proposals were evaluated, not live Mongoose completion or loop
  prevention. Syntax/configuration validation and `git diff --check` passed.
  IQ2_XS remains loaded and idle; its live reasoning configuration remains `none`.

## Coder IQ1_M medium-reasoning shadow trial (2026-10-06)

- Stopped the existing Strata server, text engine and vision engine, and verified
  no Strata processes remained before starting the installed Coder IQ1_M server.
  OpenCode and the Mongoose browser were not restarted; EXP-026 remains paused.
- Changed only Coder IQ1_M's current `reasoningEffort` from `high` to `medium`.
  Verified the wire option is `reasoning_effort: medium`; IQ2_XS remains the
  default and harness worker with reasoning `none`. Updated usage documentation.
- Started `S-20261006142152825-89c4ece4` on the same eight frozen checkpoints,
  two repeats, 8,192 output tokens, temperature zero and 300-second timeout.
  All sixteen trials returned valid proposals with `finish_reason: stop`; none
  exhausted the output cap. Proposed actions were not executed.
- Saved AI grades for all sixteen: correctness 1.625/2, evidence 1.625/2,
  no proposal safety failures, median 19.655 seconds and 25,144 output tokens.
  This matches the saved `none` quality scores at roughly twice its latency;
  high had slightly better scores but one empty output-cap failure and 47.23-second
  median. This does not establish live loop recovery or justify a worker switch.
- Verified original inference/settings/usage and all baseline files were unchanged.
  Audit files and the none/medium/high comparison are under ignored
  `data/shadow/reviews/exp009-v3-iq1-medium-codex-20261006/` and
  `data/shadow/comparisons/exp009-v3-iq1-none-medium-high-20261006-reviewed.md`.
  Configuration/wire-option validation and `git diff --check` passed. Changes are
  uncommitted. The Coder IQ1_M server remains running; the current default worker
  still selects IQ2_XS, so load that model before resuming that selection.

## Coder IQ1_M high-reasoning shadow trial (2026-10-06)

- Changed only Coder IQ1_M's `reasoningEffort` from `none` to `high` in
  `opencode.json` for the requested comparison. IQ2_XS remains the default and
  harness worker; its reasoning setting remains `none`. The documentation now
  distinguishes the two entries and notes that thinking shares the output cap.
- Verified that the shadow loader sends `reasoning_effort: high`. The existing
  IQ1_M baseline retains its saved `none` setting and inference data.
- Started the installed Coder IQ1_M server on localhost:8080 without opening a
  browser or restarting OpenCode. Its model catalog confirms Coder IQ1_M,
  196,608-token context and image input. EXP-026 remains paused.
- Started `S-20261006140346382-830ec606`: the same frozen eight-case dataset,
  two repeats, 8,192 output tokens, temperature zero and 300-second timeout.
  Proposed actions do not execute. All sixteen trials completed: fifteen valid,
  one empty response with `finish_reason: length` after consuming all 8,192 tokens.
- Saved AI grades for all sixteen trials: correctness 1.75/2, evidence 1.6875/2,
  no proposed-action safety failures; median 47.23 seconds versus 10.05 seconds
  for the saved `none` baseline (correctness/evidence 1.625/2, sixteen valid).
  Separate reasoning-token usage is unreported. This small frozen corpus does
  not demonstrate live loop recovery or justify an automatic worker switch.
- Original responses/settings/usage and old baseline files were verified unchanged.
  Review backups, notes and the paired comparison are under ignored
  `data/shadow/reviews/exp009-v3-iq1-high-codex-20261006/` and
  `data/shadow/comparisons/exp009-v3-iq1-none-vs-high-20261006-reviewed.md`.
  Configuration validation and `git diff --check` passed. Changes are uncommitted.
  The server remains loaded with Coder IQ1_M; restart the desired model server
  before using the unchanged IQ2_XS worker selection.

## DeepSeek API shadow comparison and latest IQ2_XS grading (2026-10-06)

- Reviewed and saved all sixteen proposals from `S-20261006132033062-d0f4b782`
  as `Codex (AI review)`: correctness 1.625/2, evidence 1.5/2, no proposal safety
  failures. Original IQ2_XS inference data and all older baseline grades were
  verified unchanged. Backups, grades, verification and the detailed comparison
  are in ignored `tools/learning-harness/data/shadow/` review/comparison files.
- Extended the existing shadow provider loader and CLI to permit only the official
  HTTPS DeepSeek endpoint with per-command `--allow-deepseek-api`. Local endpoints
  remain the default. The opt-in explicitly states that frozen history/screenshots
  are uploaded and paid API usage applies. URL credentials, other remote hosts,
  alternate ports, queries/fragments and redirects remain rejected.
- Added `deepseek/deepseek-flash` (DeepSeek V4.1 Flash, text/image input,
  `reasoningEffort: high` per the subsequent user request) to `opencode.json`,
  referencing `{env:DEEPSEEK_API_KEY}`. The shadow loader maps this to
  `reasoning_effort: high`; comparison reports expose the difference from Strata's
  non-thinking configuration. DeepSeek ignores temperature in thinking mode.
  The existing default and harness worker selection were preserved. No dependencies
  were added and no backend/browser/model server or controller was restarted.
- Documented masked terminal-only key entry, the paired shadow command, comparison
  and key cleanup in the harness README. `/connect` auth and the separate harness
  DeepSeek fallback are not used by shadow requests. No actual API key was read,
  written or requested in chat; no paid inference was performed.
- Validation: typecheck and build passed; shadow and OpenCode adapter suites passed
  68 tests, including ten new tests covering opt-in, official endpoint restrictions,
  environment-only authentication, image/request format, key exclusion, unchanged
  dataset hashes and no controller database creation. CLI help exposes the new flag.
- Limits: remote inference is verified with mocked responses, not the live paid API.
  Model preflight and returned-model validation still apply. Screenshots and some
  environment metadata may contain identifiable information that text redaction
  cannot remove; inspect the frozen dataset before external transmission. This
  evaluates inert decisions only, not live Mongoose execution or loop prevention.
  Changes remain uncommitted alongside earlier IQ2_XS integration edits on exp/EXP-026.

## Strata IQ2_XS worker configuration (2026-10-06)

- Added `strata/qwen3.8-flash-next-iq2_xs` to `opencode.json` and selected it as the
  interactive default and in the local/example harness worker configurations.
  Retained the existing Coder IQ1_M and Tabby/Qwen entries. The Strata provider
  label now covers both model variants; its localhost endpoint is unchanged.
- IQ2_XS uses text/image input, tool calls, a 196,608-token context, a 16,384-token
  output cap and `reasoningEffort: none`. Existing automatic compaction, pruning,
  48,000-token reserve and loop denials remain. No runtime logic, dependencies,
  permissions or experiment budgets changed. No additional permanent tests were
  needed for the declarative configuration change.
- Updated the root/harness READMEs with installation, startup, model selection,
  rollback and shadow comparison instructions. Model switches must respect the
  current experiment's browser lifecycle restrictions; a worker backend restart
  can close its browser. Strata accepting a request model label does not prove
  which weights are loaded, so check server health/model metadata independently.
- Validation: typecheck/build passed; adapter and shadow suites passed 58 tests.
  OpenCode model enumeration lists IQ2_XS and Coder. Both harness configurations
  passed the existing schema/safety checks and match the OpenCode default; manual
  assertions confirmed retained alternate models, limits, vision, compaction and
  doom-loop settings. `git diff --check` passed.
- Live IQ2_XS inference/tool use, image understanding and reliability remain
  unverified: port 8080 refused the health check. No model download/start, backend
  restart, experiment resume or browser interaction was performed. EXP-026 evidence
  and saved run state were left intact. Q2_0 is not added by this change.
- QA should compare matched frozen responses and separately measure progress and
  loop behavior on permitted live tasks before claiming a model-quality improvement.

## Run-code loop detection and experiment tool permissions (2026-10-05)

- Implemented on isolated `fix/browser-loop-tool-policy` while EXP-020 T7 remained
  operator-paused. No prompts, live browser actions, backend/model/MCP restarts,
  Mongoose mutations, or experiment/evidence edits were performed for validation.
- Expanded exact repeated-result detection to browser_run_code and
  browser_run_code_unsafe, including names with MCP prefixes and empty completed
  output. The existing threshold (6 by default), last-24-call window, changed-result/
  argument resets, in-flight deferral, scoped interruption, partial transcript,
  compaction tracking, and one-per-run coordinator recovery allowance remain intact.
  These scripts can mutate; the detector never executes or replays them.
- Added a typed session-permission client and worker configureSession port.
  Before a new worker submission, require idle, retain existing rules, append
  required denials with final-match precedence, PATCH only the session, and GET
  authoritative permissions again. Unsupported/rejected/ignored policies pause as
  worker_policy_failed before submission/counting. No permissions are auto-approved
  or broadened. New sessions receive the same restrictions before their first task.
- Recognizes explicit legacy no-JavaScript prohibitions in prohibited_actions,
  including EXP-020's stored brief. Optional reviewed worker_tool_policy field
  deny_browser_javascript=true handles other wording. False cannot override a
  recognized textual prohibition. Deny tool names ending in browser_evaluate,
  browser_run_code, and browser_run_code_unsafe. Existing session restrictions are
  never removed automatically by a less restrictive later task.
- Set project permission.doom_loop=deny in opencode.json and add a session denial.
  Project configuration loads on the next normal OpenCode config load; the current
  backend was not disposed/restarted because the experiment preserves Designer
  lifecycle state. OpenCode's built-in detector can miss repetition spread across
  separate assistant replies, so the cross-reply harness monitor remains required.
- Updated coordinator/worker protocols and failure messages: after recurring or
  interrupted recovery, request NEW_OPENCODE_SESSION with a concise factual handoff
  only when another inspection is authorized; inspect once, then pause/complete
  blocked if unresolved. Session changes do not reset browser state or budgets.
  Include enforced tool policy in generated briefs/preambles and document limits.
- Important code: adapters/opencode/{inspection-loop,tool-policy,client,worker},
  adapters/types, brief schema, controller/machine, protocol/prompts, and testing
  fakes under learning-harness. No dependencies or database migrations added.
- Added 9 regression tests covering both run-code names and empty results, resets,
  safe loop interruption with partial history/no replay, idle/idempotent permission
  updates, retained pre-existing rules, rejected/ignored/busy policies, legacy and
  structured policy parsing, and controller prevention of submission/budget use.
- Validation: build/typecheck passed; full suite passed 207 tests with 5 skipped
  (12 files passed, 1 skipped); all 17 offline dry-run scenarios and diff check passed.
  Actual archived T7 (114 replies) first triggered detection at assistant reply 25
  after six identical completed run-code results. Read-only replay did not execute
  browser code. Verified session PATCH schema against installed OpenCode 1.18.34
  /doc, then applied/read back four denial rules on the idle EXP-020 worker session.
  The harness remains paused and the interrupted task remains pending for resume.
- Limits/QA: the policy enforces those direct browser script tools, not every
  possible shell/subagent/UI workaround or all semantic experiment restrictions.
  Ambiguous prose needs the structured field. Exact repetition remains a heuristic;
  other tools/changing results/child sessions are not universally covered. Existing
  polling races remain. No live model/tool execution was used to test denials;
  QA should verify the next permitted worker task uses allowed accessibility/UI
  tools, retains partial observations, and reports a blocker when proof is unavailable.
  Global config activation, broader sandboxing, model changes, and full browser
  recovery execution were intentionally deferred.

## Compaction task tracking and repeated shell calls (2026-10-05)

- Implemented in isolated branch `fix/compaction-shell-loop-guard` while EXP-020
  remained operator-paused. No live browser actions, prompts, aborts, backend/model
  restarts, or experiment/evidence modifications were performed by the fix.
- New pure task-scope helper follows the original worker request through OpenCode's
  automatic compaction, completed summary, and synthetic continuation messages.
  Real user requests/manual compaction end ownership. Both busy loop monitoring
  and idle completion use the same scope; fetch full history if the root/chain is
  outside the 64-message tail. Continuation errors are failures, and summaries or
  unfinished continuations cannot complete a task. Summary text stays labeled in
  transcripts as context and is excluded from worker report output.
- New `opencode.maxRepeatedShellCalls` defaults to 6 (0 disables; maximum 24).
  Detect identical completed bash/shell/powershell arguments and output, including
  empty output. Changed arguments/results, other tools, missing output, and any
  in-flight task tool prevent interruption. Detection observes finished commands;
  it never replays them or certifies their postconditions. Reuses the existing
  one-per-run coordinator recovery allowance, failure limits, and idle confirmation.
- Updated config/example/app wiring, worker/client types, controller recovery text,
  AGENTS, worker/coordinator protocols, README, and troubleshooting. No dependencies,
  token settings, schema migrations, or additional recovery allowances were added.
- Added 11 regression tests covering shell repetition/reset/in-flight handling,
  long compacted tasks, abort reconciliation, continued reports/files/usage, incomplete
  summaries/continuations, repeated compactions, manual task boundaries, and foreign
  sessions. Existing controller recovery and disable-monitoring tests also pass.
- Validation: typecheck/build passed; focused adapter/scope/controller suites passed
  89 tests; full suite passed 198 tests with 5 skipped (11 files passed, 1 skipped).
  All 17 offline dry-run scenarios and `git diff --check` passed.
- Read-only validation against actual EXP-020 T6 recovered 159 assistant replies
  across one automatic compaction and detected the recorded shell loop at reply 26.
  Adapter reconciliation with a GET-only HTTP wrapper returned MessageAbortedError,
  preserving 532 characters of partial output and a 57,340-character transcript.
  No live operation was resumed; the pending task and paused run remain intact.
- Limits: exact repetition is a heuristic and can stop legitimate unchanged polls;
  vary legitimate work or use bounded wait tools/tune thresholds. Different commands,
  changing results, child sessions, and unrecognized future compaction formats are
  outside detection. Full-history fetches can be large. The existing polling/abort
  race remains; no guard guarantees model compliance or successful recovery.
- QA should check that resuming interrupted T6 forwards failure/partial observations
  to the coordinator, which must inspect the already-placed Button before any
  further mutation. Live recovery, Mongoose persistence, model replacement, and
  automatic permission/question answers were intentionally deferred.

## Repeated-result detection and bounded automatic recovery (2026-10-05)

- Implemented in an isolated `feat/bounded-browser-loop-recovery` worktree while
  EXP-017 was safely paused. Its unfinished experiment/evidence files are not part
  of this change. Builds/tests used the existing installed dependencies; no new
  packages, model settings, browser resets, or live Mongoose actions.
- The worker now detects six consecutive completed `browser_snapshot` or
  `browser_evaluate` calls with identical arguments and identical observed output,
  including successful `"none"` results. Hashing bounds comparison state; changed
  arguments/results, another tool, missing output, or an in-flight tool prevent
  detection. The existing missing-reference check remains independent.
- `opencode.maxRepeatedBrowserReads` defaults to 6 (0 disables; maximum 24).
  `opencode.autoRecoverInspectionLoops` defaults to true. After the first detected
  loop is interrupted and confirmed idle, preserve its partial output and forward
  a failure/recovery request to the coordinator automatically. The coordinator
  may request one bounded fresh inspection within the brief or pause/declare a
  blocked outcome. Original arguments/scripts are never automatically resubmitted.
- Persist `inspectionRecoveries` in existing run counters; old records default to
  zero without a migration. Status displays the single recovery allowance used.
  A second detected loop in that run pauses for operator review, including after
  resume/session changes. Unconfirmed interruption always pauses, and normal
  task, cycle, duration, and consecutive-failure budgets still apply. Set the auto
  recovery option to false to pause at the first loop.
- Recovery instructions require rendered UI, fresh accessibility refs, honoring
  no-JavaScript/lifecycle restrictions, and verifying earlier side effects before
  mutation. Successful empty results are not evidence of progress or target absence.
  Updated AGENTS, worker/coordinator protocols, README and troubleshooting.
- Runtime changes: inspection-loop detector, worker/app options, config/example,
  controller recovery routing, persisted counter, and status under learning-harness.
  Added 10 tests: identical successful evaluate/snapshot results, independent
  checks/disable/thresholds, progress resets, in-flight/unrelated calls, automatic
  recovery then pause, task/failure budget enforcement, and legacy counter loading.
- Validation: typecheck/build passed; focused suites passed 78 tests; full suite
  passed 187 tests with 5 skipped (10 test files passed, 1 skipped); all 17 offline
  dry-run scenarios and `git diff --check` passed. Read-only replay of saved EXP-017
  T2 (`msg_10bda72c4001jUQ1X4iwHLimcp`, 126 assistant replies) detected the loop at
  assistant reply 28 / tool call 29; no tool actions executed by this replay.
- Limitations: exact repetition is a heuristic and can interrupt legitimate polls
  of unchanged state; use bounded wait tools or tune thresholds. Varied scripts,
  changing results, and child-session loops remain outside detection. Evaluations
  can mutate state; this monitor observes completed calls and never certifies them
  read-only. Recovery is a coordinator decision, not a guarantee of model compliance
  or success. API polling still has a race between observed tool state and interrupt.
  QA should confirm a live permitted recovery obeys scope and reports a blocker
  instead of looping. Automatic permission approval and model replacement deferred.

## Learning recovery, context, and evidence guardrails (2026-10-05)

- Implemented on `feat/learning-recovery-guardrails` after EXP-016-R2 completed
  blocked. Expanded the existing AGENTS and worker/coordinator/specialist,
  autopilot, and proposal instructions; no separate generic skill collection.
- Browser recovery now requires one fresh untargeted snapshot and one corrected
  inspection, then a blocker if unresolved. Hidden panels, stale refs, and URL
  text alone cannot establish active target/scope. Existing experiment boundaries
  still govern navigation, lifecycle operations, and mutations.
- Context guidance requires focused reads, explicit omissions, small edits, and
  concise checkpoints/handoffs. New conversations do not reset browser state,
  restore authentication, or reset budgets. No model/token settings changed.
- Evidence guidance requires useful screenshot framing, visible proof plus
  limitations per decisive capture, and a concise final worker report. Cropped,
  unseen, or generic SQL contents cannot establish specific variable definitions.
  Manual attachment/reask recovery is documented; automatic upload is deferred.
- Added a narrowly scoped worker monitor using existing OpenCode HTTP endpoints:
  poll a 64-message tail while busy, inspect only assistant replies to the current
  task, and detect six missing-reference failures for one snapshot target among
  the last 24 tool calls. Fresh untargeted snapshots or another successful tool
  reset the count. It defers when polled history contains pending/running tools.
  `opencode.maxSnapshotRefFailures` defaults to 6 (0 disables; maximum 24).
- On detection, fetch full task history, recheck recovery/activity, request an
  interrupt of only that worker session, and verify idle before reporting it as
  stopped. The controller saves partial text/transcript, counts a confirmed
  interruption as a failure, and pauses with `worker_inspection_loop`. Resume
  forwards that failure to the coordinator without resubmitting the old task.
  If idle cannot be confirmed, retain the accepted operation and pause for manual
  interruption. No backend/browser restart or question/permission approval.
- Important runtime files: `src/adapters/opencode/inspection-loop.ts`, `worker.ts`,
  `client.ts`, `src/controller/machine.ts`, adapter types, config, and app wiring
  under `tools/learning-harness/`. No dependencies added or database migrations.
- Added 10 meaningful tests in OpenCode/controller suites: alternating refs with
  successful cell reads, thresholds, reset/recovery, bounded history, unrelated
  errors/previous tasks, in-flight tools, disabling, scoped interruption, idle
  confirmation failure, saved partial output, and resume without duplicate tasks.
- Validation: `npm run typecheck` and `npm run build` passed; focused suites
  passed 67 tests before the final disable test; full `npm test` passed 177 tests
  with 5 skipped (10 files passed, 1 skipped). All 17 offline `harness dry-run`
  scenarios and `git diff --check` passed.
- Read-only validation against installed OpenCode 1.18.34 confirmed message-tail
  `limit` and boolean abort response schemas. The archived EXP-016-R2 T1 trace
  (`msg_10b93153e001PfNaMHHroDttL7`, 458 assistant replies) triggered the pure
  detector at assistant reply 116 / tool call 118. Tail ordering matched the last
  64 messages of the full archive. No archived or live proposed actions executed.
- Limits: this is not a general progress detector; valid but repetitive reads,
  other error types, and child-session loops are not automatically stopped. It
  operates only while the harness controller runs. API polling cannot eliminate
  races between observing tool state and requesting interruption. Context/evidence
  instructions guide models but cannot guarantee compliance or factual correctness.
  QA should observe the guard and evidence framing in the next permitted run;
  production Mongoose operations and automatic task-budget changes remain deferred.

## Context-budget settings update — 2026-10-04

- Updated the Strata model in `opencode.json`: output cap 32,768 → 16,384 tokens. Tabby model
  limits are unchanged. Automatic compaction and pruning remain enabled; the shared compaction
  buffer increased from 24,000 to 48,000 tokens.
- Enabled `fit_max_tokens: true` in the installed Strata configuration at
  `C:\AI\Strata\strata-coder-iq1_m.json`. The original local configuration is backed up beside it.
  This setting shortens a reply allowance to the space left after the rendered prompt; it does
  not truncate the prompt or increase the context size. The server must restart to load it.
- No application dependencies, controller behavior, experiment limits or Mongoose artifacts
  were changed. The update uses existing OpenCode and Strata configuration options.
- The change addresses repeated API rejections such as 165,620 prompt tokens + 32,000 requested
  reply tokens exceeding the 196,608-token engine context. With a 16,384-token reply cap that
  example fits, including Strata's 8-token safety margin.
- Validation passed: parsed both JSON configurations and asserted the intended limits/options,
  unchanged Tabby limit, and preservation of Strata's existing configuration fields. The logged
  failed prompt with the new reply cap and 8-token margin totals 182,012 of 196,608 tokens.
  `npm run build` and `git diff --check` passed. No tests were added for this settings-only
  update; live effectiveness must be checked after server restart.
- At implementation time EXP-016 was paused on worker timeout with OpenCode still busy. No
  worker was aborted, no server was restarted, and no run was resumed by this settings update.
  EXP-016 is read-only and permits establishing a live session; reconnect/re-inspect through
  the existing coordinator workflow after restart. Persistence experiments that forbid session
  replacement require a different recovery decision.
- QA should confirm the next OpenCode request asks for at most 16,384 output tokens, observe
  compaction before saturation, and confirm Strata fits any oversized reply allowance while
  preserving the prompt. Unrelated UI formatting and automatic token-budget adaptation in the
  harness are deferred. Output-cap changes do not change shadow-run `--max-tokens` settings.

Implemented on `feat/shadow-testing`, based on the existing Strata/OpenCode integration branch.

## Functionality and architecture

- `harness shadow capture` imports archived worker checkpoints through read-only OpenCode HTTP calls
  or an existing export. Current-task mode retains prior worker reports and explicitly labels omitted
  older observations; session mode preserves the full prefix. Oversized cases are skipped, not clipped.
- `shadow inspect` lists case IDs, tasks, context sizes, images and baseline model.
- `shadow run` sends independent decision-only requests to configured local OpenAI-compatible model
  endpoints, with embedded past screenshots. It has no browser, tool executor, controller, or model-server
  management. The source reply and later history are withheld; current knowledge files are not read.
- Results persist after each trial. Invalid output, unknown citations/tool names, unexpected tool calls, model
  mismatches, HTTP failures, timeouts and cancellation are recorded. Common generation limits and supported
  provider options are recorded. Token metrics stay unknown when unreported.
- `shadow grade` stores human correctness, evidence and safety reviews. `shadow compare` requires matching
  frozen/request hashes and common limits and reports both technical and reviewed metrics without declaring
  an automatic winner.
- Runtime datasets, extracted historical images, review copies, results and comparisons stay under
  git-ignored `tools/learning-harness/data/shadow/`. Shadow commands do not open the harness database.

No dependencies were added. TypeScript modules extend the existing Commander CLI and OpenCode archive client.

## Important files

- `tools/learning-harness/src/shadow/dataset.ts`: prefix capture, scrubbing, hashes, image review artifacts.
- `tools/learning-harness/src/shadow/runner.ts`: provider selection, local model requests, validation, persistence.
- `tools/learning-harness/src/shadow/report.ts`: human grades, summary and comparison checks.
- `tools/learning-harness/src/shadow/cli.ts`: commands isolated from the live application/controller.
- `tools/learning-harness/test/shadow.test.ts`: capture boundaries, no execution, provider configuration,
  failure handling, cancellation, persistence, grades, fair comparisons, offline CLI import.
- `tools/learning-harness/README.md`: usage and review rubric.

## Validation

- `npm run build`: passed.
- `npm run typecheck`: passed.
- `npm test`: 167 passed, 5 skipped; 10 test files passed and 1 skipped. The 25 shadow tests cover the
  import/run/grade/compare CLI flow and the failure, safety and comparison boundaries described above.
- Actual EXP-009 archive capture: `exp009-shadow-v3`, 8 evenly sampled cases from 185 eligible bounded-task
  checkpoints; 3 skipped by limits. These include preflight, creation, recovery and audit contexts.
  Inspect task coverage before choosing a broader benchmark; this small smoke corpus omits some tasks.
- Live local Strata inference smoke: result `S-20261003101245487-d707df6c`, one text-only checkpoint and
  one checkpoint with two archived screenshots. Both proposals passed JSON/tool-name/citation validation;
  durations were 2.95 s and 20.66 s. Provider-reported input/output tokens were 2139/128 and 22268/793.
  No proposed action executed. Correctness and safety remain ungraded.
- Source dataset and smoke result/review artifacts are local ignored files under `data/shadow/`.
- Qwen/Strata paired quality comparison and live Mongoose experiments were not run.

## Limitations and deferred work

- This evaluates frozen next-action decisions, not successful live tool execution or persistence.
- Only local `@ai-sdk/openai-compatible` providers from `opencode.json` are supported. It does not resolve
  OpenCode subscription credentials, remote providers, JSONC, variants, global configuration, or secret files.
- Models propose JSON actions rather than receiving the original full OpenCode system prompt/tool schemas.
  Model options are mapped explicitly; this is not a byte-for-byte replay of OpenCode's inference requests.
- Correctness and safety require human review; valid JSON and historical model replies are not ground truth.
- Automatic text redaction cannot guarantee sanitation of unlabeled credentials or screenshot pixels.
- Full session histories may exceed capture limits. Default bounded-task mode intentionally omits prior
  task tool details and retains only past reports; reviewers should select suitable checkpoints.
- Historical cases are currently captured on demand; automated corpus selection, blind grading, model judges,
  multi-step mocked-tool rollouts, API billing estimates and live A/B experiment management are deferred.
- A smoke test does not establish successful live Mongoose work or a Qwen/Strata quality comparison.

## QA attention

Review withheld-answer boundaries, prior-report trust, task-mode omissions, evidence references, screenshot
capture fidelity, cancellation persistence, cross-run hash checks, provider/model mismatches and grade coverage.
Use paired fresh model runs with identical case selection/limits and record cold/warm runtime conditions.
