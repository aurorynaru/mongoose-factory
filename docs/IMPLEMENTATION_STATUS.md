# Shadow testing implementation

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
