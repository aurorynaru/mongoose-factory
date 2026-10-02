# Mongoose Factory

A learning factory for **Infor Mongoose**: AI agents run small, controlled browser experiments
against a Mongoose environment, record what actually happens, and turn successful, replayed
procedures into reusable recipes. The long-term goal is to build Mongoose forms and portals reliably
from a natural-language request.

The factory is in **learning mode**: one small experiment at a time, only `FX_`-prefixed test
artifacts, evidence for every claim. The rules for the agents are in [AGENTS.md](AGENTS.md).

## How it works

```
                 ┌──────────── learning harness (tools/learning-harness) ────────────┐
 OpenCode worker │  bounded task ─► browser work in Mongoose ─► report + evidence     │
 (local model,   │        ▲                                        │                  │
  Playwright)    │        │ decision (JSON envelope)               ▼                  │
                 │  ChatGPT coordinator ◄──── question / answer ──► Mongoose GPT      │
                 │  (plans the next step)                          (domain specialist)│
                 └────────────────────────────────────────────────────────────────────┘
```

- **OpenCode worker:** a local model (Qwen via TabbyAPI) drives the Mongoose browser through
  Playwright MCP, writes experiment records and evidence, and follows the experiment's scope.
- **Coordinator:** a ChatGPT chat that decides the next bounded step and when an experiment is done.
- **Mongoose specialist:** a custom GPT that answers product questions and reviews findings and plans.
- **Learning harness** ([tools/learning-harness](tools/learning-harness)): relays between them
  automatically, validates every decision, enforces scope and limits, and keeps durable state.
  - With **autopilot** it updates the project context, gets the specialist to review it, proposes and
    specialist-checks the next experiment, and starts it, using fresh chats each time.
  - With **git integration** each experiment runs on its own branch and is committed and merged into
    `main` when it completes.

## Repository layout

| Path | Contents |
|---|---|
| [AGENTS.md](AGENTS.md) | Rules for the worker: learning mode, safety, evidence, knowledge states |
| [experiments/](experiments) | One record per experiment (`EXP-NNN-…md`): objective, method, observations, verification, result |
| [evidence/](evidence) | Screenshots and captured responses per experiment (`evidence/EXP-NNN/`) |
| [recipes/](recipes) | Reusable procedures, with their knowledge state (observed / verified) |
| [environments/](environments) | What is known about the target Mongoose environment |
| [claims/](claims) | Reserved for knowledge claims |
| [opencode.json](opencode.json) | OpenCode worker config: local model provider, Playwright MCP, permissions |
| [tools/learning-harness/](tools/learning-harness) | The harness (TypeScript), its protocols, experiment briefs and coordinator context |

Knowledge states follow AGENTS.md:
- **observed:** one successful execution.
- **verified:** a clean replay (`EXP-NNN-R2`) in a fresh worker session.
- Blocked experiments keep their negative findings; they are knowledge too.

## Requirements

| Component | Used for | Notes |
|---|---|---|
| Windows 10/11 | Everything | PowerShell 7 or Windows PowerShell 5.1 |
| Node.js ≥ 20 | Harness, OpenCode, Playwright MCP | Developed with 24.x |
| Git | Repository, per-experiment branches | Git Credential Manager handles GitHub sign-in |
| [OpenCode](https://opencode.ai) | Worker agent | Tested with 1.18.33 (`opencode serve` HTTP API) |
| TabbyAPI + a local model | Worker's model | `opencode.json` expects `http://127.0.0.1:5000/v1` and `TABBY_API_KEY` in the environment; a 24 GB GPU (e.g. RTX 3090) for the 27B EXL3 model |
| Google Chrome | Harness browser (ChatGPT) and Playwright | |
| ChatGPT account | Coordinator chat and the custom Mongoose GPT | Uses your normal plan's usage limits (no API credits) |
| Access to an Infor Mongoose environment | The thing being learned | Credentials stay in a secrets file **outside** this repo, used only by Playwright MCP |

Optional: a DeepSeek API key, for interpreting coordinator replies that miss their JSON block (off by default).

## How to run

Full guide: [tools/learning-harness/README.md](tools/learning-harness/README.md). Troubleshooting:
[tools/learning-harness/TROUBLESHOOTING.md](tools/learning-harness/TROUBLESHOOTING.md).

### First time

```powershell
cd C:\AI\mongoose-factory\tools\learning-harness
npm ci
npm run build
Copy-Item harness.config.example.json harness.config.json   # then adjust paths/settings

# ChatGPT in a dedicated Chrome you start yourself (sign in manually there)
.\scripts\Start-HarnessChrome.ps1 -Port 9223 -UserDataDir C:\AI\learning-harness-chatgpt-profile
#   set "browser": {"mode": "cdp"} in harness.config.json

.\harness.ps1 setup      # pick the coordinator chat and the Mongoose GPT chat
.\harness.ps1 doctor     # everything should be OK
```

### Every session

```powershell
# 1. start TabbyAPI (your usual way)
# 2. in the harness folder:
$env:TABBY_API_KEY = '<your TabbyAPI key>'
.\scripts\Start-HarnessChrome.ps1 -Port 9223 -UserDataDir C:\AI\learning-harness-chatgpt-profile
.\harness.ps1 doctor
```

### Run experiments

```powershell
# one experiment, reviewed by you
.\harness.ps1 next                           # coordinator proposes the next experiment (draft brief)
.\harness.ps1 brief approve EXP-NNN --start  # review, type yes, it runs

# or several, unattended
.\harness.ps1 autopilot on --experiments 3
.\harness.ps1 autopilot next

# watch / control (second window)
.\harness.ps1 status
.\harness.ps1 pause | resume | stop
```

Don't run your own OpenCode against the Mongoose browser while the harness runs; both need the same
Playwright browser profile.

## Git workflow

Each experiment gets its own branch, `exp/EXP-NNN`.
- **When it completes**, the harness commits that experiment's record and evidence, any recipe and
  environment updates, and the harness context/briefs. It pushes the branch, merges it into `main`
  with a merge commit, and pushes `main`. Blocked experiments are merged as well.
- **Stopped or paused runs** stay on their branch, unmerged.
- **Changes outside the experiment's allowed paths** (e.g. `AGENTS.md`, another experiment's files)
  stop the merge for manual review.
- **Harness code changes** (`tools/learning-harness/src` etc.) are never auto-committed; commit those
  yourself.

```powershell
.\harness.ps1 git status
.\harness.ps1 git finalize     # retry commit/merge after fixing a problem
```

This repository is **private**. It contains environment details (tenant, user, screenshots of the
portal). Never commit credentials; the `.gitignore` excludes the harness runtime data, local config
and Playwright snapshots.
