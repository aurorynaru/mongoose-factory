# Troubleshooting

Start with `.\harness.ps1 status`. The **Pause reason** tells you which row below applies. Every
message sent and every reply received is in `data\runs\<run-id>\messages\` and `inbound\`, and the
structured log is `data\runs\<run-id>\events.jsonl`.

## Pause reasons

| Pause reason | Meaning | What to do |
|---|---|---|
| `operator_pause` | You (or Ctrl+C) paused | `resume` |
| `coordinator_requested_pause` | Tab 1 chose `PAUSE` | Read its reason in `status`; `resume` tells Tab 1 you resumed |
| `limit:<name>` | A limit was reached before sending the next message/task (payload already saved) | `resume --limit <name>=<n>` or `stop` |
| `limit:deepseek` | DeepSeek call/cost budget used up | Fix Tab 1's reply manually or `resume --reask` |
| `invalid_coordinator_response` | No valid envelope after the correction request | Read `inbound\…-from-coordinator-…md`; `resume --reask "note"` |
| `review:scope` | Worker instruction mentions another experiment ID or matches a prohibited pattern | If it is really in scope: `resume --approve scope`; else `resume --reask` |
| `review:attachment_required` / `review:attachment` | Tab 1 or Tab 2 needs a file/screenshot the harness cannot upload | Paste it into the conversation yourself, then `resume --approve attachment`; or `--reask` |
| `review:evidence_missing` / `review:evidence_unsafe_path` | Completion cites evidence that does not exist / is outside the factory | Check the paths; have the worker produce the evidence (`--reask`) |
| `review:acceptance_check_missing` / `…_not_passed` / `…_without_evidence` | Completion does not cover every brief acceptance check | `--reask`, or fix the brief (`--reload-brief`) if the checks were wrong |
| `review:specialist_disagreement` | Latest Tab 2 verdict is `objects`/`insufficient_evidence` but Tab 1 declared completion | Read both replies (paths in the detail); decide; `--reask "..."` |
| `review:replay_verified_*` | `replay_verified` claimed outside a replay experiment or without evidence | `--reask`; replays need their own brief with `replay_of` |
| `review:no_completed_worker_report_in_run` | Completion before any successful worker task | `--reask` |
| `submission_uncertain` | A ChatGPT message left the composer but was not seen in the conversation | Open that conversation. If your message **is** there, just `resume` (it reconciles). If it is **not**, `resume --approve resubmit` |
| `submission_unverifiable` | The conversation could not be inspected to check | Fix the browser (login, network), then `resume` |
| `submission_failed` | Text never left the composer twice | Check the composer/send button (selector drift?), then `resume` |
| `browser:login_required` | ChatGPT shows a login screen | Sign in manually in the harness browser, then `resume` |
| `browser:human_verification` | A verification challenge is shown | Complete it manually; the harness never bypasses it |
| `browser:rate_limited` | ChatGPT usage limit banner | Wait, then `resume` |
| `browser:visible_error` | Error banner, or an error inside the generated reply | Regenerate manually if needed, then `resume` (if you regenerated, the new reply is picked up) |
| `browser:conversation_missing` / `role_mismatch` | Stored conversation not found / not under the GPT any more | `setup` again |
| `browser:composer_missing` | Composer not found | Probably selector drift, see below |
| `reply_timeout` | No completed reply within `browser.replyTimeoutMinutes` | `resume` keeps waiting on the same message |
| `duplicate_reply` | The same assistant message would be forwarded twice | Inspect; usually the reply was not regenerated. `--reask` |
| `worker_blocked:permission` / `worker_blocked:question` | OpenCode waits for a permission/question answer | `opencode attach http://127.0.0.1:4096`, answer it, then `resume` |
| `worker_timeout` | OpenCode task still running after `opencode.taskTimeoutMinutes` | `resume` keeps waiting; `stop --abort-worker` aborts |
| `worker_inspection_loop` | Repeated missing snapshot refs; partial output saved | Read the pause detail. If interrupted and confirmed idle, `resume` forwards the failure to the coordinator. Otherwise attach, interrupt, wait until idle, then `resume` |
| `worker_policy_failed` | Session tool denials could not be applied or verified | No new task was submitted. Keep the run paused, inspect the OpenCode error/version/session status, fix policy support, then resume; do not remove the brief's restriction to bypass it |
| `backend_unavailable` | OpenCode backend not reachable and could not be restarted | `backend health`, check `data\backend\logs\`, `backend restart`, `resume` |
| `controller_error` | Unexpected exception (details in the log) | Fix the cause; `resume` reconciles before sending anything |

## Cannot sign in ("Oops, an error occurred! Route Error (400 Invalid content type …)")

ChatGPT's sign-in can fail inside a Chrome that Playwright launched. Close every harness browser
window, run `.\harness.ps1 login`, sign in in that ordinary Chrome window, close it, then run
`.\harness.ps1 setup`. If the Playwright-launched window still shows errors or the login screen
after that, use CDP mode (README, "attach to a Chrome you started"). Chrome is then started
normally by `scripts\Start-HarnessChrome.ps1`, and the harness only attaches to it.

## ChatGPT selector drift

All ChatGPT DOM knowledge is in `src/adapters/chatgpt/selectors.ts`:

- `composer` / `sendButton`: semantic (role + accessible name) first, CSS fallbacks second
- `message` + `authorAttr` + `idAttr`: `[data-message-author-role]`, `data-message-id`
- `stopButton`: streaming indicator; `turnDone`: the per-turn copy button (completion signal)
- `login`, `challenge`, `rateLimitText`, `errorText`, `errorCss`

Workflow to repair: open the conversation in the harness browser → DevTools → inspect the element →
update the selector → `npm run build` → `npm run test:browser` (fixture) → `.\harness.ps1 doctor`
(live, no submission). If you change the fixture assumptions, also update
`fixtures/html/chatgpt-fixture.html`.

## OpenCode backend

- `.\harness.ps1 backend health` shows `owned`, the PID, the port owner and other OpenCode PIDs.
- `port_in_use_by_unowned_process`: something else listens on 4096 (for example `opencode serve` you
  started yourself). Stop it yourself or change `opencode.port`/`baseUrl`. The harness never kills it.
- `owned_backend_running_on_other_port`: the owned backend is on a different port than configured;
  `backend stop`, then `backend start`.
- `did_not_become_healthy`: read the `stdout`/`stderr` log paths in the output (`data\backend\logs\`).
- If you set `OPENCODE_SERVER_PASSWORD`, set it in the environment of **both** the harness and any
  `opencode attach` you use; the harness sends Basic auth with user `opencode`.
- A Playwright MCP failure inside OpenCode (Mongoose browser won't open) is usually the profile
  `C:\AI\mongoose-playwright-profile` being in use by another OpenCode's browser. Close it.

## Repeated browser snapshots / stale references

`Ref ... not found in the current page snapshot` means that reference cannot be
used with the current snapshot. The worker should capture one fresh page snapshot
without `target`, use the resulting refs, and make one corrected inspection. If
the required identity/scope remains ambiguous, it must finish with a blocker.
A successful cell-only read does not prove that neighboring refs remain valid.

The harness monitors the current task's busy-session history. By default, six
missing-reference failures for the same snapshot target among the last 24 tool
calls trigger an interrupt of that session and `worker_inspection_loop`. A fresh
untargeted snapshot or another successful tool resets the count. Repeated valid
reads with changing results, other error types, previous tasks, and histories
with pending/running tools do not trigger that missing-reference check.

A second check detects six consecutive completed `browser_snapshot`,
`browser_evaluate`, `browser_run_code`, or `browser_run_code_unsafe` calls with
identical arguments AND identical results, including successful "none" or empty
results. It checks the last 24 tool calls and resets on changed
arguments/results, missing output, or another tool such as an explicit bounded
wait. It does not infer that evaluate scripts are read-only or replay them; any
earlier side effects must be inspected before further mutations. Accessing iframe
contents from the top page can fail or return nothing; retrying the same script
does not establish the target's absence. Use current frame-aware accessibility
refs and honor any no-JavaScript restriction instead.

A third check detects six identical completed `bash`, `shell`, or `powershell`
calls with identical results, including empty output. Changed commands/results,
missing output, other tools, and pending/running calls prevent detection. A command
printing "done" does not prove OCR or module loading succeeded. Do not replay it
or install modules as recovery; inspect the allowed postcondition and report the
blocker. Shell calls may already have changed files or application state.

Automatic OpenCode compaction can move replies under new user message IDs. The
harness follows the automatic compaction/summary/synthetic-continuation chain to
retain tool calls, partial output, final reports, and errors. A finished summary
is not task completion and is not included as verified worker report text. Manual
prompts/compaction end tracking ownership. An interrupted continuation is forwarded
as a task failure on `resume`; the original task is not resubmitted.

Partial text and the tool transcript are saved under `data/runs/<run>/`. After
an interrupt confirmed idle, the failure counts against the normal failure budget.
By default the first loop in a run is forwarded to the coordinator automatically
with recovery allowance 1/1: one fresh untargeted snapshot and at most one corrected
inspection using permitted rendered UI, or a pause/blocked outcome. It still
consumes normal worker tasks, cycles, failures, and active-time budgets. The
coordinator chooses the new task; the harness does not replay the old script,
restart a browser, restore authentication, or relax the brief. Another detected
loop in the same run pauses for operator review; `resume` then forwards its saved
failure. The recovery count persists across resume and fresh worker sessions.
If interruption fails or idle cannot be confirmed,
the operation remains pending. Follow the attach command in the pause detail,
press Esc, wait until idle, then resume. No backend/browser restart or automatic
permission/question answer is performed.

`opencode.maxSnapshotRefFailures` in `harness.config.json` defaults to `6`; allowed
values are `0` through `24`, with `0` disabling this monitor. Polling uses a bounded
64-message tail; full task history is fetched when the original message/compaction
chain is outside that tail, a loop is suspected, or the task finishes. The monitor
applies only while a harness controller is running.

`opencode.maxRepeatedBrowserReads` has the same range and default, independently
controlling identical-result monitoring. `opencode.maxRepeatedShellCalls` has the
same range/default and controls shell monitoring. Set all three thresholds to `0`
to disable loop monitoring. `opencode.autoRecoverInspectionLoops` defaults to `true`; set it to
`false` for manual review on the first loop. Exact repetition detection is a
heuristic: a legitimate poll can return an unchanged value repeatedly. Use a
bounded wait or choose an appropriate threshold for such workflows. Varied
scripts, changed results, and child-session loops are not covered by these checks;
no detector guarantees that a model will always make useful progress.

For no-JavaScript experiments, the harness applies session denials for evaluate and
both run-code tools before each new task, including in a fresh worker conversation.
EXP-020's existing prohibition is recognized without reloading its brief. Denials
are read back; a failed/ignored update pauses instead of submitting. No global
configuration API update or backend/MCP/browser restart is needed for these denials.
The project `doom_loop: deny` setting is supplemental and needs OpenCode to load
the updated project config. Its built-in check is not a substitute for the harness's
cross-reply monitor; repeated calls in separate assistant replies can escape it.

After another loop, pause the harness, interrupt the worker, and wait until idle.
`resume` forwards the failure; it does not replay the interrupted task. For recurring
or interrupted recovery, the coordinator should request NEW_OPENCODE_SESSION with
an accurate concise handoff only if another inspection is authorized, or pause/
complete blocked. Do not manually create a session and continue mutations outside
the harness. Fresh conversation history does not reset browser state or limits.

## Context growth and interrupted output

The output limit is per model response; context capacity must fit both input and
output. OpenCode compaction helps manage history, but it does not guarantee a
particular prompt fits. Strata's `fit_max_tokens` can reduce the output allowance;
it does not truncate an oversized prompt or raise the configured output limit.

Keep browser reads focused, save large permitted results to evidence files, and
checkpoint the target/scope, visible state, completed steps, evidence paths,
blockers, and next permitted action. The coordinator can use
`NEW_OPENCODE_SESSION` with that handoff. It does not restart the browser, restore
authentication, or reset task limits. Inspect any partially completed edit/action
before retrying; split large edits rather than assuming truncated calls succeeded.

## Requested images and incomplete evidence

The controller does not upload images. Before attaching an image, check that it
shows the claimed result and necessary identity/scope. A heading-only crop or a
filename is insufficient. Worker reports should summarize each decisive capture's
visible contents and limitations before the task ends; omitted/cropped/hidden
contents remain unresolved.

For `review:attachment_required`, open the registered coordinator chat (Tab 1),
attach the exact requested files, and use:

```powershell
.\harness.ps1 resume --reask "The requested evidence was attached manually. Review visible contents against the acceptance checks; do not infer hidden content."
```

This requests a fresh decision. `resume --approve attachment` allows routing the
existing decision without the attachments and does not prove any acceptance
check. If that decision is `PAUSE`, it still pauses. For a specialist attachment
request, provide the files in the specialist conversation (Tab 2) and follow the
specific pause detail. Neither model sees files merely because they exist locally.

When worker tasks are exhausted, review existing evidence or pause for operator
review. Increasing `maxWorkerTasks` is an explicit operator choice, not a way for
the coordinator to evade the brief. After two blocked experiments, review both
completion records before re-enabling autopilot; address the blocker or choose
a different scoped experiment instead of blindly repeating it.

## Recovery after a crash / power loss

Just run `.\harness.ps1 resume`. The run is found as "interrupted" (status running, no live
controller). Before sending anything the harness:

1. For a browser message: reloads the conversation and looks for the message nonce (polling for a few
   seconds). Found → waits for its reply, nothing is resent. Verifiably not found after the reload →
   the message was not accepted and is sent again with the same nonce. If an earlier attempt had
   already been reported as `submission_uncertain`, it pauses for `--approve resubmit` instead. If the
   conversation cannot be inspected (login, network) → pauses (`submission_unverifiable`).
2. For an OpenCode task: asks the server for the pre-assigned `messageID`. Present → waits for
   completion. Absent → resubmits with the same `messageID`. Unknown (server down) → restarts only the
   owned backend or pauses.

## Resetting harness state

Stop the run first (`stop`). Runs are history; there is normally no need to delete them. To start
completely fresh, delete `data\harness.sqlite*` (also forgets the two conversation roles). Never
delete anything under the factory's `experiments\`, `evidence\` or `recipes\` for this.
