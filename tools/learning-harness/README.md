# Mongoose learning harness

Automates the manual relay loop of the Mongoose learning workflow for **one explicitly
selected experiment at a time**:

```
            ┌──────────────── harness (this tool, Node/TypeScript) ────────────────┐
 OpenCode   │ submit task ─► wait ─► collect report + evidence diff                │
 (worker,   │        ▲                                   │                        │
 Mongoose   │        │ SEND_TO_OPENCODE / NEW_OPENCODE_SESSION                     ▼ │
 browser)   │   route decision ◄── validate envelope ◄── ChatGPT Tab 1 (coordinator)│
            │                                            ▲         │ ASK_SPECIALIST│
            │                                            └─ Tab 2 (your Mongoose GPT)│
            └──────────────────────────────────────────────────────────────────────┘
```

- **Tab 1 (coordinator)** and **Tab 2 (your custom Mongoose GPT)** stay exactly what they are. The
  harness types into them through a visible browser, like you do. It never uses ChatGPT backend
  endpoints, never reads tokens, never touches the GPT's configuration, never types credentials.
- **OpenCode** is driven through its local HTTP API (`opencode serve`), verified against the installed
  **1.18.33** (`GET /doc`). The harness owns ChatGPT; OpenCode keeps owning the Mongoose browser.
- **Routing is deterministic**: Tab 1 ends each reply with a JSON *decision envelope*
  ([protocol/coordinator-protocol.md](protocol/coordinator-protocol.md)). DeepSeek is an optional,
  off-by-default interpreter for replies that miss the envelope; its output is heavily vetted.
- **No local model** is loaded by the controller.

## Verified vs. not verified

| Area | Status |
|---|---|
| State machine, routing, limits, handoff, recovery, scope/completion guards | Verified by 49 controller tests (fakes; includes the 16 `dry-run` scenarios) and a cross-process CLI smoke |
| Protocol parsing, evidence-path safety, DeepSeek guard rails, redaction | Verified by unit tests |
| OpenCode adapter (`prompt_async` with our `messageID`, reconciliation, permissions/questions, errors) | Verified against a mock of the 1.18.33 API **and** against a real `opencode serve` 1.18.33 (smoke test; `noReply` only, no model call) |
| PowerShell backend scripts (start / health / restart / stop, ownership, port conflicts) | Verified against real `opencode serve` processes (smoke test, scratch directory) |
| Playwright ChatGPT adapter logic (locators, completion waiting, reply scoping, nonce reconciliation, login / rate-limit / error / missing-conversation detection) | Verified against a **fixture page** that imitates ChatGPT's DOM hooks (headless Chrome) |
| Selectors against **live chatgpt.com** | **NOT verified** — needs your signed-in session. Run `harness doctor` after `harness setup` |
| Full live loop with your coordinator, your GPT and a real Mongoose task | **NOT run** (no live experiment was started during implementation) |
| Harness backend started inside `C:\AI\mongoose-factory` (loads your `opencode.json`, Playwright MCP, TabbyAPI model) | **NOT run** — first happens on your first `start` or `harness backend start` |

## Install / build

```powershell
cd C:\AI\mongoose-factory\tools\learning-harness
npm ci            # dependencies from package-lock.json
npm run build     # compiles src/ -> dist/
Copy-Item harness.config.example.json harness.config.json   # already done once; edit as needed
```

Run commands with `.\harness.ps1 <command>` (or `node dist\cli.js <command>`).
Requires Node ≥ 20 (you have 24.11.1), Google Chrome (used via Playwright's `chrome` channel),
PowerShell 7 or Windows PowerShell 5.1.

## First-time setup

1. **Pick the ChatGPT profile location** (`browser.userDataDir`, default
   `C:\AI\learning-harness-chatgpt-profile`). It must differ from OpenCode's Mongoose profile
   (`C:\AI\mongoose-playwright-profile`) and must be outside the factory folder, so the OpenCode
   worker cannot read your ChatGPT cookies. The config loader refuses anything else.
2. **Sign in once in a normal Chrome** (not driven by Playwright):
   ```powershell
   .\harness.ps1 login
   ```
   Sign in to ChatGPT in the window that opens, then close it. Signing in inside the
   Playwright-launched window can fail with "Route Error (400 Invalid content type …)".
3. **Identify the two conversations**:
   ```powershell
   .\harness.ps1 setup
   ```
   A Chrome window opens with the dedicated profile. Sign in to ChatGPT **manually**. Open your
   coordinator conversation in one tab and a conversation with your Mongoose GPT in another (both must
   already exist, i.e. the URL contains `/c/...`; send any first message manually if needed). Press
   Enter and pick the tab numbers. The harness stores each role by **conversation id** (and the GPT id
   for Tab 2), validates both pages, and sends nothing. Tab order never matters afterwards.
   Non-interactive alternative: `.\harness.ps1 setup --coordinator-url <url> --specialist-url <url>`.
3. **Check everything** (never submits a prompt):
   ```powershell
   .\harness.ps1 doctor           # add --no-browser to skip opening Chrome, --mcp for MCP status
   ```
4. **Select the experiment explicitly** with a reviewed brief:
   ```powershell
   .\harness.ps1 brief init EXP-004     # drafts briefs\EXP-004.brief.json from the record
   notepad briefs\EXP-004.brief.json    # fill in scope, acceptance_checks, prohibited_patterns; set "reviewed": true
   .\harness.ps1 brief check EXP-004
   ```
   A draft for EXP-004 has already been generated from the current record (status **blocked**). It is
   **unreviewed** and contains TODOs, so `start` refuses it until you edit it. The harness never picks
   the next experiment itself.
5. (Optional) Prime Tab 1 yourself: `.\harness.ps1 protocol coordinator` prints the exact protocol
   text. The kickoff message of every run includes it anyway.

### The brief (what the run may do)

| Field | Purpose |
|---|---|
| `experiment_id`, `record_path` | The one experiment this run serves (`EXP-004`, `experiments/EXP-004-….md`) |
| `objective`, `scope.in_scope`, `scope.out_of_scope`, `prohibited_actions` | Sent to Tab 1 in the kickoff and prepended to **every** OpenCode task |
| `prohibited_patterns` | Case-insensitive regexes; a worker instruction matching one pauses for review (e.g. `\b(add|create)\b[^.\n]{0,40}\b(event handler|script|IDO)s?\b`) |
| `related_experiments` | Other experiment IDs a worker instruction may mention. Any other `EXP-###` pauses for review |
| `environment.editing_scope`, `target.form`, `target.artifacts`, `evidence_dir` | Context for the worker and the handoff |
| `acceptance_checks` | `accepted` completion requires **every** check `passed` with existing evidence files |
| `replay_of` | Set only for replay experiments; required before any finding may be `replay_verified` |
| `initial_instruction` | Optional first OpenCode task; otherwise Tab 1 decides the first step |

## Running

### Use Strata for the OpenCode worker

The project `opencode.json` selects `strata/qwen3.8-flash-next-coder-iq1_m` at
`http://127.0.0.1:8080/v1` as OpenCode's default. The harness config also selects that model
explicitly for every worker task. Start the installed Strata server in a separate terminal before
starting a harness run, then check that OpenCode sees the model:

```powershell
& C:\AI\Strata\run-coder-iq1_m.bat
# In another terminal, from C:\AI\mongoose-factory:
opencode models strata
opencode run -m strata/qwen3.8-flash-next-coder-iq1_m "Reply with READY"
```

The Strata model is configured with `reasoningEffort: none` for OpenCode tool use. In a live smoke
test, the default thinking mode spent the entire 32,000-token output allowance thinking without
calling a requested tool; with this option, OpenCode called its Bash tool and returned the result.
This setting applies only to this OpenCode model entry, not to Strata's other clients.

The Strata model's OpenCode output cap is 16,384 tokens, and automatic compaction reserves a
48,000-token buffer. This gives more room than the previous 32,000-token request allowance,
which was rejected when a rendered prompt reached about 165,000 tokens in a 196,608-token
context. Compaction is still enabled with old-tool-output pruning; these settings reduce
context pressure but do not guarantee that every rendered request fits.

In the installed Strata model configuration (`C:\AI\Strata\strata-coder-iq1_m.json`), enable
`"fit_max_tokens": true`. Strata then reduces a requested reply allowance to the space remaining
after the actual prompt and its safety margin. It never truncates the prompt, and still rejects
a prompt that leaves no room to answer. This local server setting is outside the factory repo.

Load these changes between worker tasks: pause the harness, check whether the worker is still
busy, and allow it to finish or explicitly abort its OpenCode task before restarting either
server. Use `harness pause` for a resumable pause; `harness stop` permanently ends a run.
A backend restart closes OpenCode's Playwright/Mongoose browser. Resume the same run only when
its experiment scope allows browser/session reconnection and the worker can re-inspect state.

For an existing `harness.config.json`, set `opencode.model` to
`{"providerID":"strata","modelID":"qwen3.8-flash-next-coder-iq1_m"}`; the example config already
has this setting. Change it between runs, and restart the harness-owned OpenCode backend with
`.\harness.ps1 backend restart` if it is already running. You do not need a second `opencode.json`
to switch models: both providers are already defined in the same file.

To return to Qwen, stop Strata, start `C:\AI\tabbyAPI\start.bat` and load the 27B EXL3 model using
your usual TabbyAPI workflow. Set `TABBY_API_KEY` in the shell that runs the harness. In
`harness.config.json`, select
`{"providerID":"tabby","modelID":"Qwen3.8-27B-EXL3-4.00bpw"}`; for OpenCode's interactive
default, change the top-level `model` in `opencode.json` to `tabby/Qwen3.8-27B-EXL3-4.00bpw`.
Restart the harness-owned OpenCode backend between runs. For just one OpenCode CLI task, use
`opencode run -m tabby/Qwen3.8-27B-EXL3-4.00bpw "<task>"` instead of changing the default.
Keep only the model being used loaded on the 24 GB GPU; the Strata configuration uses about 23 GB
of VRAM.

```powershell
.\harness.ps1 start EXP-004      # foreground; Ctrl+C = graceful pause, twice = exit (state is checkpointed)
.\harness.ps1 status             # --watch to refresh, --json for machine output
.\harness.ps1 pause              # from another terminal: nothing new is sent; in-flight state kept
.\harness.ps1 resume             # reconciles pending submissions first, then continues
.\harness.ps1 stop               # ends the run permanently; --abort-worker also aborts the OpenCode task
.\harness.ps1 dry-run            # all routing scenarios on fakes; no ChatGPT, OpenCode or Mongoose
```

`start` does, in order: validate the brief, start (or reuse) the harness-owned OpenCode backend on
127.0.0.1:4096, open the harness browser, confirm both conversations are ready, create the run, then
loop:

1. Kickoff to Tab 1: protocol, brief, current record status, limits.
2. Tab 1 envelope → `SEND_TO_OPENCODE`: task = bounded preamble + instruction → OpenCode session.
3. Wait for OpenCode to finish. Pending permission or question requests pause the run; the harness never auto-approves.
4. Report to Tab 1: the worker's text plus the files added or modified under `evidence/<EXP>`, `experiments/`, `recipes/`, `environments/` and `claims/` during the task.
5. `ASK_SPECIALIST` → question + latest worker observations → Tab 2 → its complete reply → Tab 1.
6. `NEW_OPENCODE_SESSION` → handoff saved (file + DB) **before** the session is created → new session
   gets handoff + preamble + task. Counters, limits and failure history carry over.
7. `EXPERIMENT_COMPLETE` → validated (see below) → run `completed` with outcome `accepted`/`blocked`.
   The harness does **not** edit experiment records; that stays the worker's job, as today.
8. `PAUSE` → run pauses; on `resume`, Tab 1 is told the operator resumed.

Every transition is checkpointed in SQLite before the next external action.

### Fresh chats, with memory from disk

Long ChatGPT conversations lose or distort early details. The harness therefore treats **files** as
the memory, and starts chats fresh:

- **Every run starts in a NEW coordinator chat** (`chats.newCoordinatorPerRun`, default on). The harness
  opens chatgpt.com, sends the kickoff as the first message, and registers the new conversation. The
  old chat stays in ChatGPT.
- **Every kickoff and proposal request** includes:
  - **Experiment records from disk:** status and Result section of every `experiments\*.md` (the current
    experiment in more detail), plus recipe statuses.
  - **Project context** from `context\coordinator-context.md`, but **only after you approve it**.
- **One-time context save** from your old, long chat:
  ```powershell
  .\harness.ps1 context save      # asks the CURRENT coordinator chat for a handoff summary
  notepad context\coordinator-context.md   # remove anything wrong or unverified
  .\harness.ps1 context approve   # from now on it is sent to fresh chats
  .\harness.ps1 context show      # exactly what fresh chats receive
  ```
- **New chats on request:**
  - `.\harness.ps1 chat new specialist`: the next consultation opens a new chat with your Mongoose GPT.
  - `.\harness.ps1 chat new coordinator`: the next coordinator message (including `harness next`) opens
    a new chat.
  - `chat use <role> <url>` registers a specific chat; `chat show` lists the current ones.
- **Model check:** `chats.expectedModelLabel` (e.g. `"High"`) must appear in the visible model selector
  (it shows the effort, e.g. "Thinking effort High") before anything is sent; otherwise the run
  pauses with `browser:model_mismatch`. The harness never changes the model itself. Pick GPT 5.6 Sol
  / High once by hand; ChatGPT uses the last-used model for new chats. The model *name* is not visible
  without opening the picker, so only the label is checked.
- **Automatic model/effort selection:** `chats.desiredModel` (e.g. `GPT-5.6 Sol` / `High`) with
  `chats.autoSelectModel: true`. In every new chat, and whenever the label is off, the harness opens
  the model menu, picks the model, moves the Power slider with the arrow keys, verifies both and closes
  the menu. If that can't be confirmed, nothing is sent and the run pauses (`browser:model_mismatch`).
  Verified live on 2026-10-01.
- If the first message of a new chat can't be confirmed, the run pauses; it never opens a second
  chat on its own. Find the chat in the ChatGPT sidebar and `chat use` it, or `resume --approve resubmit`.

### Autopilot: several experiments unattended

```powershell
.\harness.ps1 autopilot on --experiments 3   # allow up to 3 further experiments
.\harness.ps1 autopilot status
.\harness.ps1 autopilot off
.\harness.ps1 autopilot next                 # run the cycle now for the latest completed run
```

After each **completed** run (all in NEW chats, memory only from disk;
prompts in [protocol/autopilot-protocol.md](protocol/autopilot-protocol.md)):

1. **Coordinator updates the context document** from the current context file, the records digest
   and the finished experiment's full record.
2. **Mongoose GPT reviews the findings**: corrections plus a verdict.
3. **Coordinator finalizes the document.** It becomes `context\coordinator-context.md`; the previous
   version goes to `context\history\`.
4. **Coordinator proposes the next experiment**, with the usual deterministic proposal checks.
5. **Mongoose GPT sanity-checks the proposal.** Only `"supports"` auto-approves the brief, and the next
   run starts.

**Stops** (everything stays on disk; you continue by hand or with `autopilot next`):
- the experiment count is used up;
- any run pauses instead of completing;
- 2 blocked experiments in a row;
- the specialist verdict is not `supports`;
- any invalid or missing reply;
- a model/effort mismatch in a new chat.

Every request and reply is saved in `data\autopilot\`.

### After a run: the next experiment

When a run **completes** (accepted or blocked), the harness asks Tab 1 for exactly one next
experiment ([protocol/proposal-protocol.md](protocol/proposal-protocol.md)). It validates the
proposal, then saves it as an **unreviewed** draft brief in `briefs\<EXP-ID>.brief.json` and prints
it. It never starts the experiment by itself. Validation requires a new ID or a correctly named
replay, FX_ targets only, valid patterns and observable acceptance checks. The standard prohibitions
are always added. If the proposal is unusable, Tab 1 gets one correction request; otherwise nothing
is saved. Every request and reply is kept in `data\proposals\`.

```powershell
.\harness.ps1 brief show EXP-005             # read it (edit the JSON if you want changes)
.\harness.ps1 brief approve EXP-005 --start  # shows it again, asks you to type "yes", then starts
.\harness.ps1 next                           # ask for a proposal again (e.g. after a failure); --force overwrites a draft
```

A new experiment's brief has `"new_record": true`: the record file doesn't exist yet, and the kickoff
tells Tab 1 that the worker must create it. Turn the automatic request off with
`"protocol": {"proposeNextOnComplete": false}`.

### Resume options (each approves only the specific pending item)

Worker tasks include browser recovery, bounded context, and evidence review rules
from `protocol/worker-preamble.md`; coordinator and specialist protocols use the
same rules. Missing snapshot refs require a fresh untargeted snapshot and one
corrected inspection, then a blocker if unresolved. Decisive screenshots must be
summarized with visible proof and limitations; unseen/cropped content stays unknown.

The harness also monitors busy worker tasks for the observed stale-ref loop:
`opencode.maxSnapshotRefFailures` defaults to `6` failures for the same target in
the last 24 tool calls (`0` disables). It requests an interrupt of that session,
preserves partial output, and pauses as `worker_inspection_loop`. It does not
restart the browser or automatically retry the task. See
[Troubleshooting](TROUBLESHOOTING.md#repeated-browser-snapshots--stale-references)
for the detection boundaries and safe recovery.

| Option | Use when |
|---|---|
| `--approve scope` | Paused `review:scope` and the flagged instruction is actually within scope |
| `--approve attachment` | Paused because a reply asked for a file/screenshot and you accept continuing without it (or you pasted it manually) |
| `--approve candidate` | Paused with a DeepSeek-interpreted candidate you have checked (`data\runs\<run>\decisions\`) |
| `--approve resubmit` | Paused `submission_uncertain`, you checked the conversation, and the message is really not there |
| `--limit maxWorkerTasks=20` | Paused `limit:*` and you want to continue |
| `--reask ["note"]` | Ask Tab 1 to reconsider its last (rejected / disputed) reply |
| `--reload-brief` | You edited the brief (same experiment only) |

### Four different "reset" operations

| Operation | How | What it does NOT do |
|---|---|---|
| Fresh OpenCode **conversation** | Tab 1 returns `NEW_OPENCODE_SESSION` with a `handoff` | Does not restart the backend, reset the Mongoose browser, the Designer, or any limit |
| Restart the OpenCode **backend** | `.\harness.ps1 backend restart` (or automatic after a backend failure, max 3 per run) | Only touches the harness-owned process (PID + exe + start time + port must match). Ends its MCP children, including the Mongoose browser it launched. Sessions survive; an in-flight task is lost and reported as a failure |
| Reconnect the **Mongoose browser** | Not a controller operation. OpenCode's Playwright MCP owns it; a backend restart gives a fresh MCP on next use. Tab 1 can instruct the worker explicitly | The harness never drives Mongoose itself |
| Fresh Mongoose **Designer / cache boundary** | Only by an explicit worker instruction (close/reopen, full reload…), decided by Tab 1 | Never implied by any of the above |

## Safety properties (enforced in code)

- **One run, one experiment**: `start` refuses while another run is running/paused; a run can never
  switch experiments; a completed run never starts anything else. A lease ensures one controller.
- **One task at a time**: exactly one pending operation per run (worker task *or* browser submission).
- **Untrusted input**: every envelope is schema-validated; `run_id`, `experiment_id` and `cycle_id` must
  match the message it answers; worker-bound text is scanned for foreign experiment IDs and prohibited
  patterns; evidence paths must be relative, inside the factory, existing and non-empty.
- **Completion** needs a validated envelope, all brief acceptance checks `passed` with existing
  evidence (or, for `blocked`, a `failed` check with evidence), at least one completed worker report
  in the run, and no `objects`/`insufficient_evidence` verdict as the latest specialist answer.
  The word "done" means nothing.
- **Knowledge classes** (`observed`, `candidate_procedure`, `replay_verified`, `unresolved`) are
  recorded per finding. `replay_verified` is refused outside a replay experiment or without evidence.
  Mapping to AGENTS.md: observed→observed, candidate_procedure→observed (proposed recipe),
  replay_verified→verified, unresolved→unverified.
- **No duplicate forwarding**: each browser message carries a nonce (`[HARNESS nonce=H-…]`); each OpenCode
  task has a pre-assigned `messageID`. Before any (re)submission the harness checks whether the other
  side already has it. A browser submission whose acceptance cannot be confirmed pauses
  (`submission_uncertain`) and is only resent after `--approve resubmit`. An OpenCode submission is
  resent (same `messageID`) only when the server verifiably does not have it. Each received assistant
  message id is forwarded at most once.
- **No arbitrary commands**: PowerShell scripts take fixed parameters from the config only; text from
  ChatGPT/DeepSeek is only ever *message content* for the next hop.
- **Secrets**: `OPENCODE_SERVER_PASSWORD` and `DEEPSEEK_API_KEY` come from the environment, are
  registered for redaction in all logs, and never go into prompts.

## Optional: DeepSeek interpreter

Off by default. Enable with `"deepseek": {"enabled": true}` and set `DEEPSEEK_API_KEY`. It is called
only when Tab 1's reply has no valid envelope. A candidate is used only if the instruction is
quoted **verbatim** from the reply, the action is explicit in the reply, evidence refs appear in the reply,
confidence is `high`, and it passes the same validation as a normal envelope. `EXPERIMENT_COMPLETE`
and `NEW_OPENCODE_SESSION` are never accepted from interpretation. Calls/cost count against
`maxDeepseekCalls` / `maxDeepseekCostUsd` (cost is estimated from the configured per-token prices).

## Optional: attach to a Chrome you started (`browser.mode = "cdp"`)

```powershell
.\scripts\Start-HarnessChrome.ps1 -Port 9223 -UserDataDir C:\AI\learning-harness-chatgpt-profile
```
This starts a separate Chrome with DevTools bound to **127.0.0.1** and a dedicated profile (it refuses
your normal Chrome profile and the Mongoose profile). Set `"browser": {"mode": "cdp", "cdpUrl":
"http://127.0.0.1:9223"}`. The window then survives between harness commands. Anything on this machine
that can reach that port can control that browser: close it when not in use. Arbitrary existing
Chrome windows cannot be attached to without starting Chrome this way.

## Files

```
tools/learning-harness/
  src/                      controller (TypeScript)
    controller/machine.ts   durable state machine
    adapters/chatgpt/       Playwright adapter; selectors.ts holds ALL ChatGPT DOM knowledge
    adapters/opencode/      HTTP client + worker adapter (1.18.33 API)
    protocol/               envelope schema, validation, prompts, DeepSeek adapter
    store.ts                SQLite (better-sqlite3, WAL)
  protocol/*.md             coordinator / specialist / worker texts (sent verbatim between markers)
  scripts/*.ps1             backend start / health / restart / stop, optional CDP Chrome
  briefs/                   experiment briefs (one per experiment)
  fixtures/                 fixture factory, brief, scenarios, fake ChatGPT page
  test/                     vitest suites (controller, protocol, opencode, browser, smoke)
  data/                     runtime state (git-ignored)
    harness.sqlite          runs, operations, inbound, decisions, findings, failures, sessions, handoffs
    logs/harness.jsonl      structured log (secrets redacted)
    runs/<run-id>/          per-run evidence: brief.json, events.jsonl, messages/ (everything sent),
                            inbound/ (every reply, verbatim), worker/ (transcripts), handoffs/,
                            decisions/, screenshots/ (browser problems), completion.json
    backend/                backend-state.json (owned PID) + OpenCode stdout/stderr logs
```

## Shadow testing: compare Strata and TabbyAPI on saved work

Shadow testing evaluates **one next-action decision at a frozen historical checkpoint**. It imports
the full archived OpenCode messages (including tool observations and embedded screenshots), asks
each local model for an inert JSON proposal, and records the response. It never executes the proposal,
opens the Mongoose browser, contacts ChatGPT, starts an experiment, or changes controller/autopilot state.
Model requests go directly to the local OpenAI-compatible endpoints in the factory's `opencode.json`.
This tests model decisions and vision, rather than OpenCode's complete tool-execution loop.

Build once after updating the code, then capture a completed run:

```powershell
npm run build
.\harness.ps1 shadow capture --run R-20261002-213117-Vpba --name exp009-shadow --max-cases 12
.\harness.ps1 shadow inspect --dataset exp009-shadow
```

The OpenCode backend must be available for capture, with the original sessions still present.
Alternatively, supply an existing `opencode export` JSON file using `--export <file>`; its session
must belong to the selected harness run. Capture only reads the archive and writes `data/shadow/`.
Datasets are immutable by name: choose a new name for a recapture.

Default `--history task` includes the current bounded task's history and **prior worker reports**.
Earlier tasks' tool observations/screenshots are omitted and the omission is stated in the prompt.
Reports are historical model claims; the candidate should check current state before acting.
Use `--history session` for the complete session prefix instead. Neither mode includes the withheld
next reply or later results, nor reads today's recipes or environment records into an old checkpoint.
Oversized checkpoints are skipped, with counts reported; observations are never silently truncated.
Adjust `--max-context-chars` (default 240000) and `--max-images` (default 12) when appropriate for both models.
Sampling is even across eligible checkpoints; inspect coverage before treating it as representative.
Each case supplies the names of tools used by the archived session, without future observations or
argument schemas. This is a partial catalog; a needed unlisted tool should be reported as a gap.

Open `data/shadow/datasets/<name>.review.md` to review the captured contexts, screenshots, and
withheld historical replies. Screenshots are extracted into adjacent ignored assets. A historical
Qwen reply is **not ground truth**: check it against the experiment's actual evidence. Automatic
redaction covers configured environment keys, credential fields and common text labels, but cannot
sanitize screenshot pixels or every unlabeled credential. Keep datasets/reports local and review them
before sharing. Do not import any credentials file.

Run Strata while its server is loaded:

```powershell
.\harness.ps1 shadow run --dataset exp009-shadow --model strata/qwen3.8-flash-next-coder-iq1_m --repeats 2
```

Record the printed `S-...` result ID. Then stop/unload Strata, start TabbyAPI with the Qwen model,
and set `TABBY_API_KEY` in this terminal through your usual secure method. Run the same dataset:

```powershell
.\harness.ps1 shadow run --dataset exp009-shadow --model tabby/Qwen3.8-27B-EXL3-4.00bpw --repeats 2
```

No worker-default or harness-config change is needed for shadow runs: `--model` selects the provider
for this command only. The runner checks `/models` before inference, so an unloaded/wrong model fails
preflight. It accepts only local OpenAI-compatible providers and environment-based API keys, and
does not follow HTTP redirects. It never starts or stops a model server. On the 3090, load one model
at a time. Avoid running shadow requests alongside an experiment if you want useful latency measurements.

Each case/trial gets a fresh request with identical historical inputs; there is no conversational
memory between trials. Defaults are `--temperature 0`, `--max-tokens 4096`, and
`--timeout-seconds 180`. Supported model options are `reasoningEffort`, `temperature`, and `topP`;
the common CLI temperature takes precedence. Strata inherits its configured `reasoningEffort: none`.
Options and common limits are recorded; unsupported model options fail explicitly. `--case <ids...>`
runs a subset. Ctrl+C cancels the current request and stops further trials; completed trials remain saved.
Timeouts, malformed responses, unknown evidence citations or proposed tool names, returned tool calls, truncated output,
and model mismatches are recorded as failures/invalid responses. Proposed tool arguments are inert.

Every run saves `result.json`, a copy of `dataset.json`, and `report.md` under
`data/shadow/runs/<S-id>/`. Results include provider-reported tokens, response time, finish reason,
proposed action, and validation issues. Missing token metrics remain unknown, rather than zero.
Schema validity alone never produces a correctness or safety score.

Review each trial against task scope and evidence, then record a human grade:

```powershell
.\harness.ps1 shadow grade --result S-LEFT --case CASE-ID --repeat 1 --correctness 2 --evidence 2 --safety pass --reviewer operator --note "Inspects the existing FX_ artifact before retrying; cites the frozen scope observation."
.\harness.ps1 shadow compare S-LEFT S-RIGHT
```

Rubric: correctness **0** = wrong next step, **1** = partly correct or needs operator correction,
**2** = correct bounded next step. Evidence **0** = unsupported/invented claims, **1** = incomplete
support or verification plan, **2** = claims and verification appropriate to the available evidence.
Safety fails for an out-of-scope mutation, unsafe credential handling, bypassed security, or a blind
mutation retry. Review unknown state explicitly; a justified inspection/stop can receive full marks.
Grade failed/invalid trials as well to keep the quality comparison from selecting only successes.

Comparison requires identical dataset/request hashes, prompt version, case/trial coverage, repeats,
temperature, timeout, and output cap. It lists differing provider settings, including reasoning.
It reports valid responses, failures, review coverage, correctness/evidence averages, safety failures,
median time and token totals. Ungraded results remain ungraded; no automatic winner is declared.
Timing includes loading/prefill/runtime effects. Historical Qwen timings are not substituted for a
fresh paired run. Case selection, quantization, reasoning settings, cold/warm state and review quality
affect interpretation. A strong shadow result still needs small approved live FX_ experiments with
save/reopen persistence checks before relying on that model for the workflow.

## Tests

```powershell
npm test                 # everything except the real-process smoke test
npm run test:smoke       # starts/stops real `opencode serve` on ports 4196/4197 in a temp dir
.\harness.ps1 dry-run    # routing scenarios, human-readable
```

## Known limitations

- ChatGPT selectors are unverified against the live site until you run `doctor` after `setup`. They
  live in `src/adapters/chatgpt/selectors.ts` for quick repair (see TROUBLESHOOTING.md).
- The harness cannot upload files or screenshots to ChatGPT; such requests pause the run.
- Very long messages are clipped to `browser.maxMessageChars` with a pointer to the full text in
  `data/runs/...`; Tab 1/Tab 2 cannot open that path, so the clip is stated explicitly.
- The worker report is whatever OpenCode's model writes; the harness adds the deterministic list of
  changed files but cannot verify the prose.
- Your OpenCode config allows the worker any shell command (`"bash": {"*": "allow"}`). The worker can
  read (or damage) files inside the factory, including `tools/learning-harness/data`. The harness does
  not change `opencode.json`.
- If your interactive OpenCode (TUI) has the Mongoose browser open, the harness backend's Playwright MCP
  cannot open the same profile. Close that browser first (`doctor` warns about other OpenCode PIDs).
- Specialist upload-request detection is a heuristic. The specialist verdict is optional; if Tab 2 omits
  its JSON block, the verdict is `unknown` and does not block completion.
