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
