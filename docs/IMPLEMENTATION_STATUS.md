# Implementation status

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
