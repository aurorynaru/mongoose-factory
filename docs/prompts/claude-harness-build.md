# Task: build `tools/claude-harness`, an all-Claude version of the learning harness

You are a coding agent working in the repository `C:\AI\mongoose-factory`.
Read `AGENTS.md` first and follow it. That file governs Mongoose experiments; this
task is harness engineering, and you must **not** run any Mongoose experiment.

## Background

`tools/learning-harness` is a working Node/TypeScript controller for a
Mongoose learning workflow. It routes one experiment at a time between:

- a **coordinator** (today: ChatGPT Tab 1, driven by Playwright typing into the web UI),
- a **specialist** (today: a custom Mongoose GPT in ChatGPT Tab 2),
- a **worker** (today: OpenCode + a local Strata model + Playwright MCP, which operates the
  Mongoose browser and writes evidence/records).

The controller talks to these through two interfaces in
`tools/learning-harness/src/adapters/types.ts`: `ChatPort` (coordinator and specialist) and
`WorkerPort` (worker). The state machine (`src/controller/machine.ts`), brief validation,
envelope protocol, completion gate, SQLite store and Git finalize flow are good and must be kept.

**Goal:** a new harness at `tools/claude-harness` in which all three roles run on the
**Claude Code CLI** (`claude`, installed version 2.1.289) using the operator's **Claude
subscription login**, with no API key:

| Role | Default model | Notes |
|---|---|---|
| Worker | `haiku` (Haiku 5.5), configurable to `sonnet` | Playwright MCP + file tools only |
| Coordinator | `sonnet` (Sonnet 5.5) | No tools; returns prose + the JSON envelope |
| Specialist | `opus` (Opus 5.5), configurable to `sonnet` | Read-only access to the knowledge folders |

Model names and effort per role must be configurable.

## Hard rules

1. **Do not modify** `tools/learning-harness/`, `experiments/`, `evidence/`, `recipes/`,
   `environments/`, `claims/` or `AGENTS.md`. You may read them.
2. Never read, print or copy the Playwright secrets file. Refer to its path only through config.
3. Do not start the Mongoose browser, log in to Mongoose, or run any experiment.
4. Do not run `claude` against a real model except the single opt-in smoke test in Phase 6,
   and only after the operator says yes. Use a fake `claude` executable for all other tests.
5. Child processes running `claude` must **remove `ANTHROPIC_API_KEY` and
   `ANTHROPIC_AUTH_TOKEN` from their environment** unless config explicitly sets
   `"billing": "api"`. Otherwise the CLI bills the API instead of the subscription.
6. Work on a branch named `claude-harness`. Commit at the end of each phase. Do not push and do
   not merge into `main`.
7. **Verify every CLI flag before using it.** Run `claude --help` and
   `npx -y @playwright/mcp@latest --help` and record the flags you rely on in `PLAN.md`.
   Flags confirmed present in 2.1.289: `-p/--print`, `--output-format` (text/json/stream-json),
   `--verbose`, `--input-format`, `--model`, `--effort`, `-r/--resume`, `--session-id`,
   `--mcp-config`, `--strict-mcp-config`, `--tools`, `--allowedTools`, `--disallowedTools`,
   `--permission-mode`, `--system-prompt`, `--append-system-prompt`, `--settings`,
   `--setting-sources`, `--json-schema`, `--add-dir`. **`--max-turns` was not listed**, so
   enforce turn and time limits in the harness instead. Check exact semantics (for example,
   how unapproved tools behave in `--print` mode) and record them; do not guess.

## Phase 0: inspect and plan (stop for approval)

Read `tools/learning-harness/README.md`, `TROUBLESHOOTING.md`, `src/adapters/types.ts`,
`src/adapters/opencode/*`, `src/adapters/chatgpt/*`, `src/controller/*`, `src/git.ts`,
`src/config.ts`, `src/cli.ts`, `src/doctor.ts`, `protocol/*.md` and the test folder.
Also read `opencode.json` (the Playwright MCP arguments are there). Then write
`tools/claude-harness/PLAN.md` covering:

- which files are copied unchanged, adapted or dropped;
- the exact `claude` command lines for each role;
- how each `WorkerPort` and `ChatPort` method maps to the CLI (see Phases 3 and 4);
- the verified flag list and anything you could not confirm.

**Stop after Phase 0 and wait for the operator's approval.**

## Phase 1: fork

- Copy `tools/learning-harness` to `tools/claude-harness`. Exclude `node_modules/`, `dist/` and
  `data/`. Rename the package, CLI script (`claude-harness.ps1`) and data directory.
- Update every hard-coded path, including `DEV_PREFIX` and `DEV_ALLOWED` in `src/git.ts`,
  which currently point at `tools/learning-harness/`.
- Keep the fakes and all controller tests. `npm test` must pass before you change any adapter.

## Phase 2: persistent Playwright MCP server

Each `claude -p` call starts and stops its own MCP servers, which would close the Mongoose
browser after every task. Browser and Designer state must survive between tasks, so:

- Run Playwright MCP as one long-lived, harness-owned process on `127.0.0.1` using its network
  transport (verify the flag, likely `--port`), with the same `--user-data-dir`, `--secrets`
  path and `--output-dir` as `opencode.json`. Never bind to `0.0.0.0`.
- Port the backend scripts (start/health/stop/restart, with PID + executable + start-time + port
  ownership checks) from the OpenCode backend scripts to this server.
- Generate an MCP config file pointing `claude` at that server URL, and pass it with
  `--mcp-config <file> --strict-mcp-config`.
- `WorkerPort.restartOwnedBackend()` restarts only this owned MCP server.

## Phase 3: `ClaudeWorker` implementing `WorkerPort`

- `createSession`: generate a UUID and use `--session-id` on the first call and `--resume` after.
- `submit`: spawn `claude -p --output-format stream-json --verbose --model <worker model>`, with
  the worker preamble through `--append-system-prompt`. Embed the task's `messageId` as a
  visible marker line in the prompt.
- `findMessage`: look for that marker in the session's transcript file under the Claude
  projects directory. Verify the real location and format; report `unknown` when the file can't
  be read reliably.
- `waitForCompletion`: parse stream-json events live. Map the final result event to
  `completed`, `failed` or `timeout`. Compute `touchedFiles` deterministically from Git status
  before and after the task, not from the model's words.
- `abort`: kill the `claude` process tree (on Windows, `taskkill /T /F`). This must not kill
  the Playwright MCP server.
- **Tools**: allow only the Playwright MCP tools plus `Read`, `Write`, `Edit`, `Glob` and `Grep`.
  Deny `Bash` by default; make it a config option. When the brief forbids JavaScript, also deny
  `browser_evaluate`, `browser_run_code` and `browser_run_code_unsafe`, using the same brief
  parsing as today.
- **Loop monitor**: port `src/adapters/opencode/inspection-loop.ts` to stream-json tool-use and
  tool-result events. Keep the same thresholds and the same one-recovery-per-run behaviour.
- **Usage limits**: detect the subscription usage-limit or rate-limit result and map it to a new
  pause reason, `usage_limit`. Never resubmit automatically; on resume, check the transcript
  for the marker first.
- **Guard hook** (`PreToolUse`, a small Node script passed via `--settings`), with unit tests:
  - Deny text-entry tools (`browser_type`, `browser_fill_form` and any similar tools you verify)
    when the text looks like a key name or chord, such as `Control+A`, `Ctrl+A`, `Shift+Tab`,
    `Alt+…`, `Meta+…`, `Enter`, `Tab`, `Escape`, `Backspace`, `Delete` or `F1`–`F12`. The
    message must tell the model to use the key-press tool. Add a brief field
    `allow_literal_key_text: true` to disable this check.
  - Add a brief field `exact_values: ["Keyboard", …]`. Deny a text entry that matches one of
    these values case-insensitively but not exactly, and name the required value in the message.
  - Deny the Nth identical consecutive tool call. Use the same threshold as the loop monitor,
    with state in a per-session file under the harness data directory.

## Phase 4: `ClaudeChat` implementing `ChatPort`

- One persistent session per role (coordinator, specialist), stored in the database the same
  way conversation URLs are today. `submitNew` creates a new session ID.
- `submit` / `waitForReply`: spawn `claude -p --resume <id> --output-format json --model <role
  model>`. The protocol text goes into the first message, as the kickoff does today.
- `findSubmission`: search the role's transcript for the nonce, as in Phase 3.
- `checkReady`: confirm the CLI exists and is logged in. Treat the model reported in the
  output's init or system event as the model check, and map a mismatch to `model_mismatch`.
- **Coordinator**: no tools at all. Keep the existing envelope parser. Using `--json-schema`
  is optional and must not replace the prose plus envelope format.
- **Specialist**: read-only tools (`Read`, `Glob`, `Grep`) limited to `recipes/`,
  `experiments/`, `environments/`, `claims/` and `docs/mongoose/` (create that folder empty for
  the operator to fill). Write `protocol/specialist-knowledge.md` explaining that recipes and
  experiment records come first, and that documentation and model knowledge count as
  unverified unless a record verifies them.
- Drop the ChatGPT browser adapter, `login`, the ChatGPT parts of `setup`, model-label browser
  checks and the DeepSeek interpreter. Leave shadow testing out of the new harness.

## Phase 5: config, CLI and docs

- `harness.config.example.json`: per-role `model` and `effort`, `billing`
  (`"subscription"` by default), MCP server port and paths, timeouts, loop thresholds,
  `worker.allowBash`.
- `doctor`: check the CLI version, login, owned MCP server health, the generated MCP config,
  that the hook script runs, that `ANTHROPIC_API_KEY` is absent from the child environment, and
  the Git state. It must not call a model.
- Add a root `CLAUDE.md` containing only `@AGENTS.md`, so Claude Code loads the same rules.
- Rewrite `README.md` for the new harness, keeping the "Verified vs. not verified" table honest:
  anything not run against the real CLI or real browser is **not verified**.

## Phase 6: tests

- A fake `claude` executable (a Node script selected by config) that emits scripted
  stream-json and json for: success, tool loop, hook denial, usage limit, crash mid-task,
  missing transcript, and model mismatch.
- All ported controller tests pass, plus new tests for `ClaudeWorker`, `ClaudeChat`, the hook
  and the MCP server ownership checks.
- **Opt-in live smoke test (ask the operator first):** one
  `claude -p --model haiku "Reply with READY"` with the stripped environment, and one call that
  only lists the MCP tools from the owned server, without navigating. Report the exact output.

## What to report after each phase

What changed (file list), test results with the real command output, flags or behaviours you
verified versus assumed, and open questions. Do not describe anything as working unless a test
or command you ran shows it.
