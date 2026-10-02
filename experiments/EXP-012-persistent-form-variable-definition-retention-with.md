# EXP-012 — Persistent Form Variable Definition Retention With Approved Session Establishment (FX_FormVariableLab02)

Status: **T1 preflight COMPLETE; T1 continuation (cycle 3/4) re-confirmation COMPLETE.** The inherited Mongoose session was **expired** (Designer `GetSessionInfo` → "Your session has expired.") and the Web Client was **logged out** (Tab 0 = "Logout Successful"). Per the T1 instruction, the session was **established via the previously documented supported Web Client/Mongoose sign-in flow** (portal SSO login → config-group Sign In), without reading/printing/logging/screenshotting credential values. After establishment, the Web Client AppApi session was initially reported expired, but **recovered** once the Designer session was established through the supported split-button path; the Web Client **Select Form** dialog then loaded the **full 648-form inventory**. The Designer editing scope was **confirmed live as User** (scope dialog + status bar). The target `FX_FormVariableLab02` was **proven absent** (exact + case-insensitive) via the live Select Form Name filter: **0 matches** in the 648-form inventory, with a positive control (`UsersMaint`) confirming the filter works. **No Form or variable was created; no Mongoose artifact was created, modified, or deleted.** `FX_FormVariableLab02` was **NOT created** in T1. **T2 (cycle 5) then created the target Form** `FX_FormVariableLab02` (User scope, classic BuildFromScratch) and proved **exactly one** case-insensitive inventory target exists (live Select Form store: **649**-form inventory, **1** match; visual filtered grid = 1 row). The Form is left **open and clean** in the Designer (Save disabled, no unsaved changes). **No variable was created and no Save/Regenerate was performed in T2.** A **T2 reconciliation (cycle 6, read-only)** then **confirmed** the Form was created **exactly once** via the classic BuildFromScratch recipe (Save Template unchecked), is **open and clean** in **User** scope, appears **exactly once** (case-insensitive) in the live **649-form** inventory, and that **no login / Sign In-OK / reauthentication / logout / browser restart / session replacement** occurred after creation began.

A **T1 continuation (cycle 3/4)** was then executed (still strictly pre-mutation): from the carried-over browser state, one supported Web Client→Designer launch attempt was made; the existing live classic Designer (scope **User**) was confirmed, the Web Client **Select Form** again loaded the **full 648-form inventory** (server-backed), and `FX_FormVariableLab02` was **re-proven absent** (0/648, case-insensitive, full-store scan). A new UI finding was recorded: the Web Client toolbar has **two** "Designer" buttons — the **first** launches the **out-of-scope Runtime Builder** flow ("Identify Your Editing Scope" → "Runtime Builder Selection"), while the **second** ("Open designer in a new window") is the **classic Designer** launcher. **No Form or variable was created; no Mongoose artifact was created, modified, or deleted.**
Date: 2026-10-03
Mode: LEARNING MODE — T1 preflight only (session establishment permitted; no mutation performed).
Run: `R-20261003-025358-Ts8m` (cycle 2, task T1).

## Objective

On one new User-scope classic BuildFromScratch Form `FX_FormVariableLab02`, create exactly one Form variable (`FX_PersistentRetentionVar`, `Global=False`, `Persistent=True`, design-time `Value=Seed-Persist-A`) using the previously observed Details > Variables surface, record its exact design-time definition, perform exactly one ordinary Designer Save to a clean state, verify the definition still exists immediately after Save, then close only the target Form tab and reopen the exact same User-scoped Form through a previously verified supported Designer reopen path. Verify the same variable definition is still present after reopen. This experiment concerns **design-time variable-definition retention only**; it makes no claim about runtime variable values, value persistence across executions, temporary-variable semantics, IDO-cache behavior, or durable storage provenance.

In scope (T1 only): inspect browser/environment state; if the inherited session is not demonstrably live, establish it via the documented supported sign-in flow (no credential exposure); prove session readiness with an observable server-backed Web Client check; confirm Designer editing scope is User; prove `FX_FormVariableLab02` is absent (exact + case-insensitive) via the live Select Form/inventory surface; capture screenshots/diagnostics under `evidence/EXP-012/`; capture a repository/worktree baseline; create this record.

Out of scope (all tasks): replaying/repairing EXP-004/EXP-011; testing `Persistent=False` behavior; any runtime variable-value persistence test (close/reopen, logout/login, execution); Regenerate Form or any second save mechanism; Unload All Global Form Objects / IDO-metadata unloading / cache-clearing / User Preferences; Caption/Description/component/collection/binding/validator/event/script/data-source/IDO/localized-String/FormSync experiments; Site/Group/Vendor Default scope; modification of any existing `FX_` artifact; creation/modification of recipes, AGENTS.md, environment files, or other experiment records; physical Forms-database provenance, direct database inspection/mutation, undocumented APIs, internal session manipulation.

## Starting state / preflight facts (2026-10-03, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Designer page title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Mongoose host `mgapse1ap.mtmgf.se1.mongoosepaas.io`; portal app `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`; Web Client iframe name `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`.
- Browser state at preflight start (inspected first): three tabs:
  - **Tab 0: "Logout Successful"** at the portal SLO sign-out page — the portal / Mongoose **Web Client** tab had been **logged out**. (evidence `02`.)
  - **Tab 1: stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — the long-standing EXP-006 T8 leftover; unchanged; not touched.
  - **Tab 2 (current): Web Designer** at `WSWebClient/designer/default.aspx?…&MGForm=FX_FormPropertyLab12` — `FX_FormPropertyLab12` (the EXP-010-R2 target, left open by that run) is **rendered** but is **stale client-side state** (see session finding below). (evidence `01`.)
- **Inherited session: EXPIRED.** A read-only in-page same-origin `fetch` to the Designer's own `AppApi/GetSessionInfo` endpoint returned HTTP 200 with `Message: "Your session has expired."` (evidence `03`). The rendered form and status-bar scope text are stale artifacts of the expired session, **not** evidence of a live session.

## Session establishment (T1 — permitted before first mutation)

The T1 instruction permits establishing the session (unlike EXP-011, which was prohibited from doing so). The documented supported flow (EXP-006 T8) was used; no credential value was read, printed, logged, or screenshotted (the `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD` placeholders were used; Playwright MCP substituted the real values).

1. **Portal SSO login.** Tab 0 was navigated to the tenant-scoped portal app URL (tenant extracted programmatically from the logout page `tenantId` param, not printed). The CloudIdentities sign-in form loaded (evidence `04`); credentials were filled via the secret placeholders and **Sign in** was clicked. The portal loaded; a portal-notification banner was dismissed.
2. **Web Client config-group Sign In.** The Web Client presented the config-group Sign In dialog (evidence `05`); **OK** was clicked. The Web Client UI shell loaded (user badge + toolbar + Explorer) (evidence `06`).
3. **Initial AppApi session check: EXPIRED.** Despite the UI shell rendering a signed-in state, server-backed checks failed: `GetSessionInfo` and `PingServer` both returned "Your session has expired.", and the **Select Form** dialog showed a **"Session Expired"** alert with an **empty grid** (evidence `07`). The `AppApi/SignIn` request uses `useWorkstationLogon: true` with empty userID/password (delegating to portal SSO); the portal SSO was alive, yet the Mongoose AppApi session remained expired.
4. **Designer session established (supported split-button path).** From the Web Client toolbar, the **Designer** split button was clicked, opening a fresh Designer tab (new `inforSessionId`). The Designer session was **live**: the **"Identify Your Editing Scope"** dialog appeared with **Scope: User** and the status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `08`). **OK** was clicked (safe; no mutation).
5. **Web Client session recovered.** After the Designer session was established, the Web Client **Select Form** dialog (re-opened via **Open**) **loaded the full form inventory** (evidence `10`) — the earlier "Session Expired" state was transient and had cleared.

**Net result:** a live Mongoose session was established (Designer live with scope=User; Web Client Select Form loading the full inventory). No credential value was exposed at any step.

## Preflight method (T1)

1. Inspected repository state and references (read-only, not modified): `AGENTS.md`, `experiments/EXP-011-*.md` (closest prior — BLOCKED at T1 on the same expired-session state), `experiments/EXP-006-*.md` (documented sign-in flow + Designer recovery), `recipes/forms/create-basic-form.md` (verified recipe for T2+), `environments/current-environment.md`.
2. Inspected current browser state (3 tabs as above). Screenshots: Designer tab (evidence `01`), Web Client "Logout Successful" tab (evidence `02`).
3. **Inherited-session test:** read-only in-page `GetSessionInfo` from the Designer tab → "Your session has expired." (evidence `03`).
4. **Session establishment** via the documented supported flow (steps above; evidence `04`–`08`).
5. **Server-backed readiness check:** the Web Client **Select Form** dialog loaded the **full 648-form inventory** (evidence `10`) — an observable, server-backed confirmation that the Web Client session is live (the `FormsApi`/form store round-trip succeeded).
6. **Designer scope confirmation:** the Designer **"Identify Your Editing Scope"** dialog showed **Scope: User** and the status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `08`).
7. **Target absence proof (live Select Form / inventory surface):**
   - Opened the Web Client **Select Form** dialog (via **Open**).
   - Set **Filter By = Name**; **Case Sensitive** unchecked (case-insensitive); **Starts With** unchecked (contains).
   - **Positive control:** typed `UsersMaint` (slowly, to trigger the live filter) → the grid correctly showed `UsersMaintQuery` and `UsersMaint` (filter works by Name).
   - **Target search:** cleared the filter, typed `FX_FormVariableLab02` (slowly) → the grid was **empty** (0 rows) (evidence `11`).
   - **Inventory completeness check:** inspected the Select Form grid's ExtJS store — with the filter cleared it holds **648** records (the full inventory); with the target filter applied it holds **0** records. A case-insensitive scan of all store records for `fx_formvariablelab02` returned **no matches**.
   - **Conclusion:** `FX_FormVariableLab02` is **absent** (exact + case-insensitive) from the full 648-form inventory.
8. Audited the worktree starting state (git status/log; evidence `09`).

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect references (AGENTS.md, EXP-011, EXP-006, recipe, environment) — no modification | **DONE** — all read; none modified | this file |
| 2 | Inspect current browser/page state; record existing tabs/instances | **RECORDED** — 3 tabs (Web Client **logged out**; stray dead portal-root tab; Designer tab rendering stale `FX_FormPropertyLab12`) | tab list; evidence `01`, `02` |
| 3 | If session not demonstrably live, establish it via the documented supported flow (no credential exposure) | **DONE** — portal SSO login + config-group Sign In + Designer split-button; no credential value read/printed/logged/screenshotted | evidence `03`–`08` |
| 4 | Prove session readiness with an observable server-backed Web Client check | **DONE** — Web Client Select Form loaded the full **648-form** inventory (server-backed form-store round-trip succeeded) | evidence `10`; store count 648 |
| 5 | Confirm active Designer editing scope is User (supported UI / read-only) | **DONE (live)** — Designer "Identify Your Editing Scope" dialog **Scope: User** + status bar `[ ScopeType: User / ScopeName: <username> ]` | evidence `08` |
| 6 | Prove `FX_FormVariableLab02` absent (exact + case-insensitive) via the live Select Form/inventory surface; record total counts | **DONE** — Select Form Name filter (case-insensitive, contains) → **0 matches** in the **648-form** inventory; positive control `UsersMaint` confirmed the filter works | evidence `11`; store counts 648 / 0 |
| 7 | Capture initial repository/worktree baseline | **CAPTURED** — git branch `exp/EXP-012`, HEAD `c806882`, clean worktree at start (only `?? evidence/EXP-012/` after preflight) | evidence `09` |
| 8 | Create `evidence/EXP-012/` and the EXP-012 record; do NOT create the Form or variable | **DONE** — screenshots `01`–`11` + diagnostics `03`, `09`; this record; target **NOT** created | this file; `evidence/EXP-012/` |

## Repository / worktree starting state (T1)

- Worktree **is** a git repository: branch **`exp/EXP-012`**, HEAD **`c806882`** (`harness: context/briefs update`); recent history: `6cf61c5 Merge EXP-011 (blocked)`, `ef579f4 EXP-011: blocked`, `6cef206 Merge EXP-010-R2 (blocked)`, `a7acbc6 EXP-010-R2: blocked`.
- **Run boundary:** this run (`R-20261003-025358-Ts8m`) started at **2026-10-03**.
- **Worktree status at preflight start:** **clean** — `git status --porcelain` empty before this preflight wrote anything; after the preflight the only entry is `?? evidence/EXP-012/` (created by this preflight). No modified tracked files.
- **New in this preflight (T1 window):** only `evidence/EXP-012/01…11` (9 screenshots + 2 diagnostics) and this record file.
- **NOT modified by this preflight (all predate the run):** `AGENTS.md`, `opencode.json`, `README.md`, `environments/current-environment.md`, every file under `recipes/`, and all other `experiments/EXP-00x-*.md`.
- **Conclusion:** worktree starting state is clean for EXP-012 purposes; no recipe, environment, AGENTS.md, or prior experiment file was modified by this preflight. EXP-012-attributable changes are confined to this record and `evidence/EXP-012/`.

## Observations

- **The inherited session had expired before this run** (idle gap since the EXP-011 run). The Designer tab still *renders* `FX_FormPropertyLab12` with a User-scope status bar, but a live `GetSessionInfo` call reports the session as expired. **A rendered Designer is not proof of a live session.**
- **The Web Client (Tab 0) was logged out** (SLO "Logout Successful" page) at preflight start.
- **Session establishment succeeded via the documented supported flow**, but the Web Client AppApi session was **initially reported expired** even after the config-group Sign In (UI shell rendered signed-in, yet `GetSessionInfo`/`PingServer`/Select Form all reported "Session Expired"). The session **recovered** once the **Designer** session was established through the supported split-button path; afterward the Web Client Select Form loaded the full 648-form inventory. **The transient "expired" state after sign-in is a notable environmental behavior** — a UI shell rendering signed-in is not, by itself, proof of a live AppApi session; a server-backed check (e.g., the Select Form inventory load) is required.
- **The Designer session and the Web Client AppApi session are separate.** The Designer established a live session (scope dialog) while the Web Client AppApi session was still reporting expired; they are not the same session.
- **The Select Form Name filter is a live, case-insensitive, contains filter** over the full 648-form inventory store (confirmed by the `UsersMaint` positive control and the store record counts 648/0). It is a valid exact + case-insensitive absence surface.
- **No Mongoose artifact was created, modified, or deleted; no User Preference was opened/changed/saved; no unload was invoked; no Form was opened/created/saved; no scope switch was performed; no Regenerate Form; no second save.**

## Evidence (under `evidence/EXP-012/`)

- `01-preflight-designer-state.png` — Designer tab at preflight start: `?MGForm=FX_FormPropertyLab12` (EXP-010-R2 leftover, rendered, stale), status bar `[ ScopeType: User / ScopeName: <username> ]`, toolbar clean.
- `02-preflight-webclient-logout-successful.png` — Web Client tab (Tab 0) showing the portal **"Logout Successful"** SLO page — the Web Client is logged out.
- `03-preflight-getsessioninfo-session-expired.md` — read-only `GetSessionInfo` diagnostic: HTTP 200, `Message = "Your session has expired."` → inherited session expired / not usable.
- `04-cloudidentities-signin-form-empty.png` — CloudIdentities sign-in form before credential entry (no credential value visible).
- `05-webclient-config-group-signin-dialog.png` — Web Client config-group Sign In dialog (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
- `06-webclient-signed-in-clean.png` — Web Client UI shell after config-group Sign In (user badge + toolbar + Explorer).
- `07-webclient-session-expired-alert.png` — Web Client **Select Form** showing the **"Session Expired"** alert + empty grid (transient expired AppApi state after sign-in).
- `08-designer-scope-dialog-user.png` — Designer **"Identify Your Editing Scope"** dialog: **Scope: User**, User `<username>`; status bar `[ ScopeType: User / ScopeName: <username> ]`.
- `09-git-baseline.md` — repository/worktree baseline (branch `exp/EXP-012`, HEAD `c806882`, clean worktree).
- `10-select-form-loads-forms.png` — Web Client **Select Form** dialog loading the full form inventory (session recovered; server-backed readiness confirmed).
- `11-select-form-filter-target-absent.png` — Web Client **Select Form** with **Filter By = Name**, filter `FX_FormVariableLab02`, **empty grid** (0 matches) — target absent.
- (T1 continuation, cycle 3/4) — see the **"T1-continuation evidence"** section below for `12`–`17`.

## Knowledge state (as of T1)

- The inherited Mongoose session is **expired / not usable** at T1 start (`GetSessionInfo` → "Your session has expired."): **observed** (T1, live read-only server round-trip).
- The Web Client (Tab 0) is **logged out** (SLO "Logout Successful" page) at T1 start: **observed** (T1).
- The documented supported sign-in flow (portal SSO login → config-group Sign In) **establishes a session**, but the Web Client AppApi session can be **transiently reported expired** immediately after sign-in (UI shell renders signed-in while `GetSessionInfo`/`PingServer`/Select Form report "Session Expired"); it **recovers** once the Designer session is established via the supported split-button path: **observed** (T1).
- A UI shell rendering a signed-in state is **not** proof of a live AppApi session; a server-backed check (Select Form inventory load) is required: **observed** (T1).
- The **Designer session and the Web Client AppApi session are separate** sessions: **observed** (T1).
- The Designer editing scope is **User** (live confirmation via the scope dialog + status bar): **observed** (T1).
- The Web Client **Select Form Name filter** is a live, case-insensitive, contains filter over the full **648-form** inventory store: **observed** (T1).
- `FX_FormVariableLab02` is **absent** (exact + case-insensitive) from the full 648-form inventory: **observed** (T1, live Select Form store, 0 matches; positive control confirmed).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure is **unverified** (T1 preflight complete; T2 creation not yet performed).

## Open questions / blockers

- **No blocker for T2.** A live session is established (Designer scope=User; Web Client Select Form loading the full 648-form inventory), the scope is confirmed User, and the target is proven absent. T2 may proceed to create `FX_FormVariableLab02` + `FX_PersistentRetentionVar`.
- **Note for T2 (session stability):** the Web Client AppApi session was transiently reported expired immediately after sign-in and recovered after the Designer session was established. If the session lapses again during T2 (idle expiry), re-establish it via the same documented supported flow **before** any mutation, and re-run the preflight guards (scope = User **live**, target absent **exact + case-insensitive** via the live Select Form store) before creation.
- **Constraint reminder for T2:** once `FX_FormVariableLab02` creation begins, no re-login/reauth is permitted; the Designer reopen must use a previously verified supported path (Form-menu recent forms or Select Form), not a direct cold `?MGForm=` navigation; no Regenerate Form, no second Designer Save, no Unload All Global Form Objects, no User Preferences.
- Context for the eventual variable experiment: EXP-004 (blocked) found that form variables created via Details → Variables did **not** persist across close/reopen on either documented save path, in the `Persistent=False` case. EXP-011 (blocked at preflight) was to test the `Persistent=True` (default) case on `FX_FormVariableLab01`. EXP-012 re-runs the `Persistent=True` case on a fresh form `FX_FormVariableLab02` with an approved session-establishment step. These are distinct hypotheses and must not be assumed equivalent to the EXP-004 negative result.

## T1 — Stopped here (per instruction, after the preflight)

Did **not** create `FX_FormVariableLab02` or `FX_PersistentRetentionVar` or any other Form/variable; did **not** edit any Form property; did **not** perform any Designer Save or Regenerate; did **not** invoke `Unload All Global Form Objects` or any other unload; did **not** open, change, or Save any User Preference; did **not** modify any existing `FX_` Form or non-`FX_` artifact; did **not** switch scope. Session establishment (portal SSO login + config-group Sign In + Designer split-button) **was** performed, as explicitly permitted by the T1 instruction, with no credential value exposed. **Next task (T2) is UNBLOCKED** and may proceed to creation.

## T1 continuation (cycle 3/4) — session re-confirmation (still strictly pre-mutation)

The coordinator issued a **T1 continuation** (cycle 3, then re-issued as cycle 4): remain strictly pre-mutation; make **one** supported attempt to establish/confirm a live Mongoose/Web Designer session through the normal Web Client→Designer launch path; confirm scope = User; perform an observable server-backed readiness check; if live, re-prove `FX_FormVariableLab02` absent (exact + case-insensitive) via the live Select Form/inventory surface; capture evidence; update only this record. **No artifact creation, no Save/Regenerate, no unload/cache-clear, no User Preferences.**

### Starting state (carried over; inspected first)

A fresh conversation does **not** reset browser/Designer state. On inspection the browser still held four tabs from the T1 preflight:
- **Tab 0 (current): Web Client** — signed-in (Explorer showing My/Master/Public/User Folders; no form open; `Open` enabled, `Save`/`New`/`Delete` disabled). (evidence `12`.)
- **Tab 1:** stray dead portal-root tab (unchanged).
- **Tab 2:** stale Designer rendering `FX_FormPropertyLab12` (unchanged).
- **Tab 3:** the **live classic Designer** established in the T1 preflight (fresh `inforSessionId`), no form open.

### One supported Web Client→Designer launch attempt

1. Baseline screenshot of the signed-in Web Client (evidence `12`).
2. Clicked the **first** "Designer" button in the Web Client toolbar. This opened the **"Identify Your Editing Scope"** dialog (**Scope: User**, User `<username>`) (evidence `13`); **OK** was clicked.
3. That then opened a **"Runtime Builder Selection"** dialog (Category / Runtime Builder, `[ Scope Type: User / Scope Name: <username> ]`). **This is the Runtime Builder flow — explicitly out of scope** per AGENTS.md (Responsive Form Builder / Runtime Builder). It was **cancelled** (no Runtime Builder selected, no mutation).
4. Clicked the **second** "Designer" button (tooltip **"Open designer in a new window"**). No new tab/window was surfaced to the automation (the classic Designer from the T1 preflight, Tab 3, remained the live instance).
5. Switched to **Tab 3** (the existing live classic Designer) to confirm the session: the Designer was **live** and its status bar read **`[ ScopeType: User / ScopeName: <username> ]`** (evidence `14`). The **Form** menu listed **recent forms** (`FX_FormPropertyLab12…04`) — a server-backed signal the Designer session is live (evidence `15`).

**Finding (new):** the Web Client toolbar exposes **two** "Designer" buttons. The **first** launches the **out-of-scope Runtime Builder** flow (scope dialog → "Runtime Builder Selection"); the **second** ("Open designer in a new window") is the **classic Designer** launcher. For EXP-012 (classic BuildFromScratch Form) the classic Designer is the in-scope surface; the Runtime Builder path must be avoided.

### Server-backed readiness check + target absence re-proof (live Select Form / inventory surface)

1. Opened the Web Client **Select Form** dialog (via **Open**). It **loaded the full form inventory** (evidence `16`) — an observable, server-backed confirmation the Web Client session is live.
2. **Positive control:** typed `UsersMaint` (live filter) → the grid correctly showed `UsersMaintQuery` and `UsersMaint` (filter works by Name, case-insensitive, contains).
3. **Target search:** cleared the filter, typed `FX_FormVariableLab02` → the grid was **empty** (0 rows) (evidence `17`). **Case Sensitive** was **unchecked** (case-insensitive), so this covers all case variations.
4. **Full-store scan (read-only):** accessed the Select Form grid's ExtJS store — **648** records total; a case-insensitive scan of **every field of every record** for `fx_formvariablelab02` returned **0 matches**.

**Conclusion:** the session is **live** (Designer scope=User; Web Client Select Form loading the full 648-form inventory), the editing scope is **User**, and `FX_FormVariableLab02` is **absent** (exact + case-insensitive, 0/648). The Select Form dialog was **cancelled** to leave a clean state. **No Form or variable was created; no Mongoose artifact was created, modified, or deleted.**

### T1-continuation requirement-to-evidence mapping

| # | Requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect current browser state first (fresh conversation does not reset state) | **DONE** — 4 tabs carried over (Web Client signed-in; stray dead tab; stale Designer; live classic Designer) | tab list; evidence `12` |
| 2 | One supported Web Client→Designer launch attempt (no cold `?MGForm=`, no credential exposure) | **DONE** — first "Designer" button → scope dialog (User) → out-of-scope Runtime Builder dialog (cancelled); second "Designer" button ("Open designer in a new window"); existing live classic Designer (Tab 3) confirmed | evidence `13`, `14` |
| 3 | Confirm editing scope is User | **DONE (live)** — scope dialog **Scope: User** + Designer status bar `[ ScopeType: User / ScopeName: <username> ]` | evidence `13`, `14` |
| 4 | Observable server-backed readiness check | **DONE** — Designer Form menu listed recent forms (live); Web Client Select Form loaded the full **648-form** inventory | evidence `15`, `16`; store count 648 |
| 5 | Prove `FX_FormVariableLab02` absent (exact + case-insensitive) via the live Select Form/inventory surface | **DONE** — Select Form Name filter (case-insensitive, contains) → **0 rows**; full-store case-insensitive scan of all 648 records → **0 matches**; positive control `UsersMaint` confirmed the filter works | evidence `17`; store counts 648 / 0 |
| 6 | Capture evidence under `evidence/EXP-012/`; update only this record | **DONE** — screenshots `12`–`17`; this record updated; no other file modified | `evidence/EXP-012/`; this file |
| 7 | No artifact creation / Save / Regenerate / unload / User Preferences | **HONORED** — none performed | — |

### T1-continuation evidence (under `evidence/EXP-012/`)

- `12-webclient-signed-in-current.png` — Web Client (Tab 0) signed-in baseline before the launch attempt (Explorer folders; no form open).
- `13-scope-dialog-user.png` — **"Identify Your Editing Scope"** dialog from the first "Designer" button: **Scope: User**, User `<username>`.
- `14-designer-live-scope-user.png` — live classic Designer (Tab 3): status bar **`[ ScopeType: User / ScopeName: <username> ]`**, clean toolbar (no form open).
- `15-designer-form-menu-recent-forms.png` — Designer **Form** menu listing recent forms (`FX_FormPropertyLab12…04`) — server-backed liveness signal.
- `16-select-form-loads-inventory.png` — Web Client **Select Form** dialog loading the full form inventory (server-backed readiness confirmed).
- `17-select-form-filter-target-absent.png` — Web Client **Select Form** with filter `FX_FormVariableLab02`, **empty grid** (0 matches) — target absent (case-insensitive).

### T1-continuation knowledge state

- The Web Client toolbar exposes **two** "Designer" buttons: the **first** launches the **out-of-scope Runtime Builder** flow (scope dialog → "Runtime Builder Selection"); the **second** ("Open designer in a new window") is the **classic Designer** launcher: **observed** (T1 continuation, live).
- The existing classic Designer (Tab 3) from the T1 preflight **remained live** across the conversation boundary, with scope **User** (status bar) and a populated recent-forms menu: **observed** (T1 continuation, live).
- The Web Client **Select Form** again loaded the **full 648-form inventory** (server-backed), and `FX_FormVariableLab02` is **absent** (exact + case-insensitive; 0/648 full-store scan): **observed** (T1 continuation, live).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure remains **unverified** (T2 creation not yet performed).

### T1-continuation open questions / blockers

- **No blocker for T2.** Session live (Designer scope=User; Web Client Select Form loading the full 648-form inventory), scope confirmed User, target re-proven absent (0/648, case-insensitive). T2 may proceed to create `FX_FormVariableLab02` + `FX_PersistentRetentionVar`.
- **UI navigation note for T2:** use the **second** "Designer" button ("Open designer in a new window") / the existing classic Designer for the classic BuildFromScratch Form; **avoid the first "Designer" button** (it opens the out-of-scope Runtime Builder flow). Reopen the target after close via a previously verified supported path (Form-menu recent forms or Select Form), **not** a direct cold `?MGForm=` navigation.
- **Constraint reminder for T2:** once `FX_FormVariableLab02` creation begins, no re-login/reauth is permitted; no Regenerate Form, no second Designer Save, no Unload All Global Form Objects, no User Preferences.

## T2 — Create target Form only (cycle 5)

The coordinator issued **T2** (task header `cycle_id=5 task=T4`, but the explicit instruction was **T2 — create only the target Form**): create **only** `FX_FormVariableLab02` (User scope, classic BuildFromScratch), prove **exactly one** case-insensitive inventory target exists, and stop with the Form open and clean. **Do NOT** create `FX_PersistentRetentionVar`, do **NOT** open `Details > Variables`, do **NOT** Save/Regenerate, and make **no** other property/artifact change. The verified recipe `recipes/forms/create-basic-form.md` was followed.

### Pre-mutation guard (carried-over state inspected first)

- A fresh conversation does **not** reset browser/Designer state. On inspection the browser held four tabs: **Tab 0** Web Client (signed-in), **Tab 1** stray dead portal-root tab, **Tab 2** stale Designer (`FX_FormPropertyLab12`), **Tab 3** the **live classic Designer** (no form open).
- Switched to **Tab 3** (live classic Designer). Confirmed the status bar read **`[ ScopeType: User / ScopeName: <username> ]`** and **no** session-establishment dialog was present (evidence `18`). No additional login / Sign In / OK was performed.
- A leftover open **Form** menu intercepted the first click; it was dismissed by clicking the neutral canvas area (no menu item selected, no mutation).

### Form creation (single controlled mutation)

1. **New → Form Wizard Selection** dialog opened (evidence `19`).
2. Selected **Category = Classic**, **Wizard = BuildFromScratch** (evidence `20`); **OK**.
3. **Wizard page 1:** filled **Name = `FX_FormVariableLab02`**; Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source / Query Form / Comments left empty (evidence `21`); **Next**.
4. **Wizard page 2:** **Save Template** was **checked by default** and was **explicitly unchecked** via the ExtJS component `ext-comp-1526` (`setValue(false)`; `checkedBefore=true`, `checkedAfter=false`) so no template artifact is created (evidence `22`); **Finish**.
5. **`Process Completed Successfully`** dialog appeared; **OK** closed it (evidence `23`).
6. The created Form opened in the Designer (Tab 3); URL now includes **`MGForm=FX_FormVariableLab02`** (evidence `24`).

### Created-Form confirmation (Designer, User scope)

- Designer tab heading: **`FX_FormVariableLab02`** (selected).
- Properties panel: **Name = `FX_FormVariableLab02`**, **Version = `User version for user <username>`**, **Device Type = `Default`**, **Form Type = `Normal`**, **Is Master = `True`**.
- Status bar: **`[ ScopeType: User / ScopeName: <username> ]`**.
- **Save** and **Regenerate Form** toolbar buttons are **disabled** → the Form is in a **clean** state (no unsaved changes). No dialogs present.

### Inventory proof — exactly one case-insensitive target

Performed in the Web Client (Tab 0) **Select Form** dialog (read-only; the dialog was **cancelled** afterward, leaving a clean state):

- **Full-store scan (read-only, via the Web Client frame's ExtJS store):** the Select Form grid store (`grid-1136`) holds **649** records (was **648** before creation → exactly one new form added). A case-insensitive scan of **every string field of every record** for `fx_formvariablelab02` returned **exactly 1 match**: `FX_FormVariableLab02` (`mgdata`/`text` = `FX_FormVariableLab02`, `id` = `extModel214-1320`).
- **Visual confirmation:** with **Filter By = Name**, **Case Sensitive** unchecked, filter text `FX_FormVariableLab02`, the grid rendered **exactly one row** (Caption `FX_FormVariableLab02`, Name `FX_FormVariableLab02`) (evidence `25`).
- **Conclusion:** `FX_FormVariableLab02` exists **exactly once** (case-insensitive) in the live **649-form** inventory.

> UI note: pressing **Enter** in the Select Form filter box triggers the grid's default "open first row" action (it attempted to open `WSFormWizardNewDataXmlToIdo` and raised a **non-destructive** "Unable to load form … not defined as Runtime Builder" error, which was dismissed with **OK**). No mutation resulted. The filter itself applies on the retained filter text; the store scan is the authoritative count.

### T2 requirement-to-evidence mapping

| # | T2 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect carried-over browser state first; confirm live classic Designer + scope = User (no re-login) | **DONE** — Tab 3 live Designer, status bar `[ ScopeType: User / ScopeName: <username> ]`, no session dialog | evidence `18` |
| 2 | Create **only** `FX_FormVariableLab02` (User scope, classic BuildFromScratch) via the verified recipe | **DONE** — wizard Classic/BuildFromScratch, Name filled, Save Template unchecked, `Process Completed Successfully` | evidence `19`–`24` |
| 3 | Confirm the created Form is open in the Designer, User scope, clean | **DONE** — tab `FX_FormVariableLab02`; Properties Name/Version(Device/Type/Master) correct; scope User; Save+Regenerate disabled (clean) | evidence `24`; post-creation snapshot |
| 4 | Prove **exactly one** case-insensitive inventory target exists | **DONE** — full-store scan: **649** records, **1** case-insensitive match; visual filtered grid = 1 row | evidence `25`; store count 649 / 1 |
| 5 | Capture evidence under `evidence/EXP-012/`; update only this record | **DONE** — screenshots `18`–`25`; this record updated; no other file modified | `evidence/EXP-012/`; this file |
| 6 | Do **NOT** create the variable / open Details>Variables / Save / Regenerate / change properties / touch User Preferences / modify other `FX_` | **HONORED** — none performed | — |

### T2 evidence (under `evidence/EXP-012/`)

- `18-guard-designer-live-scope-user.png` — pre-mutation guard: live classic Designer (Tab 3), status bar `[ ScopeType: User / ScopeName: <username> ]`, no session-establishment dialog.
- `19-form-wizard-selection.png` — **New Form** wizard selection dialog.
- `20-build-from-scratch-selected.png` — Category **Classic** + Wizard **BuildFromScratch** selected.
- `21-wizard-page1-name-filled.png` — wizard page 1 with Name `FX_FormVariableLab02` and default attributes.
- `22-wizard-page2-save-template-unchecked.png` — wizard page 2 with **Save Template** explicitly unchecked.
- `23-process-completed.png` — **`Process Completed Successfully`** dialog after Finish.
- `24-form-created-in-designer.png` — created Form open in the Designer (User scope, `MGForm=FX_FormVariableLab02`).
- `25-select-form-inventory-one-target.png` — Web Client **Select Form** filtered to `FX_FormVariableLab02`: **exactly one row** (Caption + Name).

### T2 knowledge state

- A new User-scope classic **BuildFromScratch** Form can be created via the verified recipe (New → Form Wizard Selection → Classic/BuildFromScratch → Name → uncheck Save Template → Finish → `Process Completed Successfully`), landing in the Designer with `MGForm=<name>` and a clean (Save-disabled) state: **observed** (T2, live, single execution).
- The wizard's **Save Template** checkbox is **checked by default** and must be explicitly unchecked to avoid creating a template artifact: **observed** (T2).
- Creating the Form increased the live Select Form inventory from **648 → 649**, and the target appears **exactly once** (case-insensitive): **observed** (T2, live full-store scan + visual filter).
- Pressing **Enter** in the Select Form filter box triggers the grid's default "open first row" action (not a filter-apply); a non-matching/ non-Builder form raises a non-destructive load error: **observed** (T2).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure remains **unverified** (T2 Form creation complete; the variable + Save + close/reopen retention steps are **not** yet performed).

### T2 — Stopped here (per instruction)

Stopped with `FX_FormVariableLab02` **open and clean** in the Designer (Tab 3), User scope, no unsaved changes. **Did NOT** create `FX_PersistentRetentionVar`; did **NOT** open `Details > Variables`; did **NOT** Save or Regenerate; did **NOT** change any property; did **NOT** open User Preferences; did **NOT** modify any other `FX_` or non-`FX_` artifact. **Next task (T3)** may proceed to create the single variable `FX_PersistentRetentionVar` on this open Form.

## T2 reconciliation (cycle 6) — READ-ONLY verification only

The coordinator issued a **T2 reconciliation**: **read-only** verification only — do **not** create another Form, do **not** create the variable, do **not** Save/Regenerate, do **not** open `Details > Variables`, do **not** open User Preferences, do **not** unload/cache-clear, and do **not** modify any Mongoose artifact. The goal was to confirm that `FX_FormVariableLab02` was in fact created **exactly once** through the verified classic BuildFromScratch recipe (Save Template unchecked), that the loaded target is the right User-scoped Form in a clean Designer, that **exactly one** case-insensitive inventory target exists, and that **no login / Sign In-OK / reauthentication / logout / browser restart / session replacement** occurred after creation began.

### Actions (all read-only)

1. **Inspected carried-over browser state first** (a fresh conversation does not reset state): Tab 0 Web Client (signed-in), Tab 1 stray dead portal-root tab, Tab 2 stale Designer (`FX_FormPropertyLab12`), **Tab 3 live classic Designer** (current).
2. **Verified the loaded target identity + scope + cleanliness (Tab 3):** URL `…&MGForm=FX_FormVariableLab02`; Designer tab heading **`FX_FormVariableLab02`**; Properties **Name = `FX_FormVariableLab02`**, **Version = `User version for user <user>`**, **Device Type = `Default`**, **Form Type = `Normal`**, **Is Master = `True`**; status bar **`[ ScopeType: User / ScopeName: <user> ]`**; **Save** and **Regenerate Form** both **disabled** → **clean** (no unsaved changes); no dialogs. (evidence `26`.)
3. **Live inventory proof (Web Client Tab 0 → Select Form):** opened **Select Form**; ran a **read-only full-store scan** of the Select Form grid store (`grid-1136`): after clearing the client-side filter, **totalCount = 649**; a case-insensitive scan of every string field of every record for `fx_formvariablelab02` returned **exactly 1 match** (`FX_FormVariableLab02`, `id` = `extModel214-1320`). Re-applied the filter → the grid rendered **exactly one row** (Caption + Name = `FX_FormVariableLab02`). (evidence `27`.) The dialog was **cancelled** (no form opened).
4. **Re-confirmed the Designer (Tab 3) remained open and clean** after the Web Client activity (Save + Regenerate still disabled; same target/scope).
5. **Reviewed the record + evidence `18`–`25`** for the post-creation session-integrity check (below).

### Findings

- **Created exactly once via the verified recipe:** the T2 record + evidence `19`–`24` show a single New → Form Wizard Selection → **Classic / BuildFromScratch** → Name `FX_FormVariableLab02` → **Save Template unchecked** (`ext-comp-1526`) → Finish → **`Process Completed Successfully`** sequence, landing in the Designer with `MGForm=FX_FormVariableLab02`. The live inventory went **648 → 649** (exactly +1) and shows **exactly one** case-insensitive target. **Confirmed.**
- **Loaded target identity + User scope + clean:** confirmed live (step 2; evidence `26`).
- **Exactly one case-insensitive target:** confirmed live (step 3; 649 total / 1 match; evidence `27`).
- **No post-creation session disruption:** the T2 record documents that the pre-mutation guard performed **no** login / Sign In / OK (the Designer was already live, scope User, no session-establishment dialog), and every action after creation began (wizard → Finish → confirmation → Select Form open/filter/cancel) occurred within the **same** live session. **No** login, Sign In/OK, deliberate reauthentication, logout, browser restart, or session replacement occurred after creation began. **Confirmed from the record + evidence.**

### T2-reconciliation requirement-to-evidence mapping

| # | Requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect current classic Designer + evidence `18`–`25` + record first | **DONE** — carried-over state inspected; record + `18`–`25` reviewed | this file; `evidence/EXP-012/18`–`25` |
| 2 | Determine the Form was created exactly once via the verified BuildFromScratch recipe (Save Template unchecked) | **CONFIRMED** — single wizard sequence; 648→649 (+1); Save Template unchecked (`ext-comp-1526`) | record T2; evidence `19`–`24` |
| 3 | Verify loaded target identity + User scope | **CONFIRMED (live)** — `MGForm=FX_FormVariableLab02`; Name/Version/Device/Type/Master correct; `[ ScopeType: User / ScopeName: <user> ]` | evidence `26` |
| 4 | Verify the Designer is clean | **CONFIRMED (live)** — Save + Regenerate Form disabled; no unsaved changes; no dialogs | evidence `26` |
| 5 | Prove exactly one case-insensitive `FX_FormVariableLab02` via the live Select Form/inventory surface | **CONFIRMED (live)** — full-store scan **649** total / **1** match; filtered grid = 1 row | evidence `27`; store 649 / 1 |
| 6 | Confirm no login / Sign In-OK / reauth / logout / restart / session replacement after creation began | **CONFIRMED** — record + evidence show all post-creation actions within the same live session; no session-establishment action after the pre-mutation guard | record T2; evidence `18`–`25` |
| 7 | No Save / Regenerate / Details>Variables / User Preferences / unload / artifact modification during reconciliation | **HONORED** — none performed (read-only) | — |

### T2-reconciliation evidence (under `evidence/EXP-012/`)

- `26-recon-designer-live-scope-user-clean.png` — live classic Designer (Tab 3): `FX_FormVariableLab02` open, `[ ScopeType: User / ScopeName: <user> ]`, Save + Regenerate disabled (clean).
- `27-recon-select-form-inventory-one-target.png` — Web Client **Select Form** filtered to `FX_FormVariableLab02`: **exactly one row** (Caption + Name); full-store scan 649 total / 1 case-insensitive match.

### T2-reconciliation knowledge state

- `FX_FormVariableLab02` was created **exactly once** via the verified classic BuildFromScratch recipe (Save Template unchecked) and is the **sole** (case-insensitive) instance in the live 649-form inventory: **observed** (T2 + T2 reconciliation, live).
- The loaded Designer target is the correct **User**-scoped `FX_FormVariableLab02` in a **clean** state: **observed** (T2 reconciliation, live).
- No post-creation session disruption (login/reauth/logout/restart/session-replacement) occurred: **observed** (T2 reconciliation, from record + evidence).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure remains **unverified** (T2 Form creation + reconciliation complete; the variable + Save + close/reopen retention steps are **not** yet performed).

### T2 reconciliation — Stopped here (per instruction)

Stopped with `FX_FormVariableLab02` **open and clean** in the Designer (Tab 3), User scope, no unsaved changes, ready for the variable step. **Did NOT** create another Form; did **NOT** create the variable; did **NOT** Save or Regenerate; did **NOT** open `Details > Variables`; did **NOT** open User Preferences; did **NOT** unload/cache-clear; did **NOT** modify any Mongoose artifact. **Next task (T3)** may proceed to create the single variable `FX_PersistentRetentionVar` on this open Form.

## T3 — Create the variable + capture PRE-SAVE baseline only (cycle 7)

The coordinator issued **T3** (cycle 7): on the already-created `FX_FormVariableLab02`, open `Details > Variables`, create **exactly one** Form variable `FX_PersistentRetentionVar` with `Global=False`, `Persistent=True`, `Value=Seed-Persist-B`, record **every visible definition field** as the PRE-SAVE baseline, capture screenshots, and **stop before Save** (the Form will be dirty). **Do NOT** Save, Regenerate, close/reopen, execute logic, open User Preferences, unload/cache-clear, create components/handlers/scripts/bindings/data sources, or modify any existing artifact.

> **Value note:** the earlier Objective text (line 12) read `Value=Seed-Persist-A`; the **T3 instruction** specified **`Value=Seed-Persist-B`**, which is the value actually entered (the current bounded step is authoritative). Recorded here as `Seed-Persist-B`.

### Pre-mutation guard (carried-over state inspected first)

- A fresh conversation does **not** reset browser/Designer state. On inspection the browser held four tabs: **Tab 0** Web Client (signed-in), **Tab 1** stray dead portal-root tab, **Tab 2** stale Designer (`FX_FormPropertyLab12`), **Tab 3** the **live classic Designer** (current) showing **`FX_FormVariableLab02`**.
- Confirmed the loaded target: Designer tab heading **`FX_FormVariableLab02`**; status bar **`[ ScopeType: User / ScopeName: <user> ]`**; **Save** and **Regenerate Form** both **disabled** → **clean** (no unsaved changes); **no** session-establishment dialog present. (evidence `28`.) No login / Sign In / OK was performed.

### Variable creation (single controlled mutation)

1. Opened the **Details** panel (**Expand Panel**, e652) and selected the **Variables** tab (e781). The Variables grid initially showed **two empty category groups**: **"Global - Persistent"** and **"Global - Temporary"** (no variables). (evidence `29`.)
2. Identified the Variables toolbar icon buttons via their ExtJS `tooltip` config: **New** (`button-1786`, e875), **Copy** (`button-1787`, e876), **Delete** (`button-1788`, e877).
3. Clicked **New** (e875) → a **"Form Variable"** dialog opened with a single **Name** textbox + **OK**/**Cancel**.
4. Typed **Name = `FX_PersistentRetentionVar`** (e916) and clicked **OK** (e919). The variable was created and appeared under a **new "Form - Persistent"** group (Global=False → "Form"; Persistent=True → "Persistent"). (evidence `30`.)
5. The variable's **Properties** grid (right side) then showed its definition fields. **Persistent** defaulted to **`True`** and **Global** defaulted to **`False`** (both already correct; no change needed).
6. Set **Value**: double-clicked the **Value** cell to open its inline editor, typed **`Seed-Persist-B`**, and committed with **Tab**. The Value cell now displays **`Seed-Persist-B`**. (evidence `31`.)

### PRE-SAVE baseline — every visible definition field for `FX_PersistentRetentionVar`

Recorded exactly as displayed in the Variables **Properties** grid (User scope), before any Save:

| Field | Value (as displayed) |
|---|---|
| **Name** | `FX_PersistentRetentionVar` |
| **Description** | *(empty)* |
| **Value** | `Seed-Persist-B` |
| **Persistent** | `True` |
| **Global** | `False` |
| **Version** | `User version for user <user>` |

- The variable is grouped under **"Form - Persistent"** in the Variables grid (consistent with Global=False, Persistent=True). The **"Global - Persistent"** and **"Global - Temporary"** groups remain **empty** → **exactly one** experiment-created variable exists.
- **Dirty-state confirmation:** after the value edit, the **Save** and **Regenerate Form** toolbar buttons became **enabled** and **Undo** became **enabled** → the Form is **dirty** (unsaved changes present). This is the expected PRE-SAVE state. **No Save was performed.**

### T3 requirement-to-evidence mapping

| # | T3 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect carried-over browser state first; confirm live classic Designer + scope = User + clean (no re-login) | **DONE** — Tab 3 live Designer, `FX_FormVariableLab02`, `[ ScopeType: User / ScopeName: <user> ]`, Save+Regenerate disabled (clean), no session dialog | evidence `28` |
| 2 | Open `Details > Variables` | **DONE** — Details panel expanded; Variables tab selected; two empty groups shown before creation | evidence `29` |
| 3 | Create **exactly one** variable `FX_PersistentRetentionVar` (Global=False, Persistent=True) | **DONE** — New → Form Variable dialog → Name → OK; created under "Form - Persistent"; Persistent=True + Global=False (defaults, correct) | evidence `30` |
| 4 | Set `Value=Seed-Persist-B` | **DONE** — Value cell inline editor → `Seed-Persist-B` committed | evidence `31` |
| 5 | Record **every visible definition field** as the PRE-SAVE baseline (incl. defaults/blanks) | **DONE** — Name / Description(empty) / Value / Persistent / Global / Version all recorded (table above) | evidence `30`, `31`; snapshot |
| 6 | Capture screenshots proving exactly one experiment-created variable + the full baseline | **DONE** — `28`–`31` (guard; empty panel; created-with-defaults; full baseline) | `evidence/EXP-012/28`–`31` |
| 7 | Confirm the Form is dirty (Save enabled) but do **NOT** Save | **DONE** — Save + Regenerate + Undo enabled after the edit; **no Save performed** | evidence `31`; post-edit snapshot |
| 8 | Do **NOT** Save / Regenerate / close-reopen / execute logic / open User Preferences / unload-cache-clear / create components-handlers-scripts-bindings-data-sources / modify any existing artifact | **HONORED** — none performed | — |

### T3 evidence (under `evidence/EXP-012/`)

- `28-t3-guard-designer-live-scope-user-clean.png` — pre-mutation guard: live classic Designer (Tab 3), `FX_FormVariableLab02`, `[ ScopeType: User / ScopeName: <user> ]`, Save + Regenerate disabled (clean), no session dialog.
- `29-t3-variables-panel-empty-before.png` — Details > Variables panel open, **empty** (groups "Global - Persistent" + "Global - Temporary", no variables) before creation.
- `30-t3-variable-created-defaults.png` — after New → OK: `FX_PersistentRetentionVar` created under a new **"Form - Persistent"** group; Properties show Name / Description(empty) / Value(empty) / **Persistent=True** / **Global=False** / Version.
- `31-t3-variable-baseline-presave.png` — **PRE-SAVE baseline**: Value = `Seed-Persist-B` committed; full definition visible; Save + Regenerate + Undo enabled (Form dirty); **not saved**.

### T3 knowledge state

- The classic Designer **Details > Variables** surface creates a Form variable via the **New** toolbar button → **"Form Variable"** dialog (single **Name** field) → **OK**; the new variable is grouped by its Global/Persistent flags (Global=False + Persistent=True → **"Form - Persistent"**): **observed** (T3, live, single execution).
- A newly created Form variable **defaults to `Persistent=True` and `Global=False`**; the **Value** defaults to **empty** and is editable via the inline grid editor (double-click cell → type → Tab/Enter to commit): **observed** (T3, live).
- Creating/editing a variable makes the Form **dirty** (Save + Regenerate + Undo become enabled) **without** any Save: **observed** (T3, live).
- The full design-time definition of `FX_PersistentRetentionVar` (PRE-SAVE) is: Name=`FX_PersistentRetentionVar`, Description=*(empty)*, Value=`Seed-Persist-B`, Persistent=`True`, Global=`False`, Version=`User version for user <user>`: **observed** (T3, live).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure remains **unverified** (T3 variable creation + PRE-SAVE baseline complete; the **Save**, **immediately-after-Save existence check**, and **close/reopen retention** steps are **not** yet performed).

### T3 — Stopped here (per instruction)

Stopped with `FX_FormVariableLab02` **open and DIRTY** in the Designer (Tab 3), User scope, with exactly one variable `FX_PersistentRetentionVar` (Global=False, Persistent=True, Value=`Seed-Persist-B`) committed in the Variables UI. **Did NOT** Save or Regenerate; did **NOT** close or reopen the Form; did **NOT** execute any Form logic; did **NOT** open User Preferences; did **NOT** unload/cache-clear; did **NOT** create any component/handler/script/binding/data source; did **NOT** modify any existing `FX_` or non-`FX_` artifact. **Next task (T4)** may proceed to perform the single ordinary Designer Save and the immediately-after-Save existence check.

## T3 reconciliation (cycle 8) — READ-ONLY verification only

The coordinator issued a **T3 reconciliation**: **READ-ONLY** — do **not** Save and do **not** create or edit anything **unless** the current state proves the Value edit was never committed. Inspect the current Designer state, evidence `30`/`31`, and this record; determine whether `FX_PersistentRetentionVar` already exists **exactly once** with `Global=False`, `Persistent=True`, `Value` exactly `Seed-Persist-B`, and whether every visible definition field has been recorded as the pre-Save baseline; verify the target remains `FX_FormVariableLab02` in **User** scope and that the Form is **dirty** as expected. If the value + baseline are already complete, make **no** further UI edit — capture any needed reconciliation evidence, update only this record if necessary, and stop before Save. Commit the single pending Value edit **only if** the Value editor is still active and `Seed-Persist-B` has not yet been committed.

### Actions (all read-only)

1. **Inspected carried-over browser state first** (a fresh conversation does not reset state): Tab 0 Web Client (signed-in), Tab 1 stray dead portal-root tab, Tab 2 stale Designer (`FX_FormPropertyLab12`), **Tab 3 live classic Designer** (current) showing `FX_FormVariableLab02` with the Details > Variables panel already open.
2. **Verified the loaded target + scope + dirty state (Tab 3, live snapshot):** Designer tab heading **`FX_FormVariableLab02`**; status bar **`[ ScopeType: User / ScopeName: <user> ]`**; **Save**, **Regenerate Form**, and **Undo** all **enabled** → **dirty** (unsaved changes present); no session-establishment dialog.
3. **Verified the variable exists exactly once (live Variables grid):** the grid shows exactly one variable — `FX_PersistentRetentionVar` under the **"Form - Persistent"** group; the **"Global - Persistent"** and **"Global - Temporary"** groups are **empty**.
4. **Verified the committed definition (live Properties grid + evidence `30`/`31`):** the **Value** cell renders as a **committed gridcell** = **`Seed-Persist-B`** (NOT an active inline editor — no `textbox [active]` present in the Variables tree). Full definition: Name=`FX_PersistentRetentionVar`, Description=*(empty)*, Value=`Seed-Persist-B`, Persistent=`True`, Global=`False`, Version=`User version for user <user>`.
5. **Confirmed the pre-Save baseline is already recorded** in the T3 section of this record (the field-by-field table).
6. **Captured one reconciliation screenshot** (evidence `32`) proving the state is stable across the conversation boundary. **No UI edit was made** (the Value was already committed, so the "commit pending edit" branch did not apply).

### Findings

- **Variable exists exactly once:** CONFIRMED (live) — sole entry under "Form - Persistent"; other two groups empty.
- **Global=False, Persistent=True, Value=`Seed-Persist-B`:** CONFIRMED (live) — all three match exactly; Value is a committed gridcell, not a pending editor.
- **Value editor NOT still active:** CONFIRMED — no active inline editor; `Seed-Persist-B` is committed. Therefore **no commit action was required** and **no UI edit was performed**.
- **Every visible definition field recorded as pre-Save baseline:** CONFIRMED — the T3 section table lists Name / Description(empty) / Value / Persistent / Global / Version.
- **Target identity + User scope + dirty:** CONFIRMED (live) — `FX_FormVariableLab02`, `[ ScopeType: User / ScopeName: <user> ]`, Save+Regenerate+Undo enabled (dirty).
- **No Save / Regenerate / create / edit / close-reopen / logic / User Preferences / unload / session action performed:** HONORED (read-only).

### T3-reconciliation requirement-to-evidence mapping

| # | Requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect current Designer state + evidence `30`/`31` + record first | **DONE** — carried-over state inspected; `30`/`31` reviewed; T3 section reviewed | this file; `evidence/EXP-012/30`, `31` |
| 2 | Determine `FX_PersistentRetentionVar` exists exactly once | **CONFIRMED (live)** — sole entry under "Form - Persistent"; other groups empty | live snapshot; evidence `32` |
| 3 | Determine Global=False, Persistent=True, Value exactly `Seed-Persist-B` | **CONFIRMED (live)** — all three match; Value is a committed gridcell | live snapshot; evidence `31`, `32` |
| 4 | Determine every visible definition field recorded as pre-Save baseline | **CONFIRMED** — T3 section field table complete (Name/Description/Value/Persistent/Global/Version) | this file (T3 section) |
| 5 | Verify target remains `FX_FormVariableLab02` in User scope | **CONFIRMED (live)** — tab heading + `[ ScopeType: User / ScopeName: <user> ]` | live snapshot; evidence `32` |
| 6 | Verify the Form is dirty as expected | **CONFIRMED (live)** — Save + Regenerate + Undo enabled | live snapshot; evidence `32` |
| 7 | Make no further UI edit (value + baseline already complete); commit pending Value edit ONLY if still uncommitted | **HONORED** — Value already committed (no active editor) → **no edit made** | live snapshot |
| 8 | No Save / Regenerate / create / edit / close-reopen / logic / User Preferences / unload / session action | **HONORED** — none performed (read-only) | — |

### T3-reconciliation evidence (under `evidence/EXP-012/`)

- `32-t3-recon-variable-baseline-presave-confirmed.png` — live classic Designer (Tab 3): `FX_FormVariableLab02`, Details > Variables showing `FX_PersistentRetentionVar` (sole variable, "Form - Persistent"), Properties Name / Description(empty) / **Value=`Seed-Persist-B`** / Persistent=True / Global=False; `[ ScopeType: User / ScopeName: <user> ]`; Save+Regenerate+Undo enabled (dirty); **not saved**.

### T3-reconciliation knowledge state

- The T3-created variable `FX_PersistentRetentionVar` **persisted stably in the live Designer across the conversation boundary** with its committed definition (Global=False, Persistent=True, Value=`Seed-Persist-B`) and the Form remaining **dirty** (unsaved): **observed** (T3 reconciliation, live).
- A committed inline-grid edit is reflected as a **gridcell value** (not an active editor) in a subsequent snapshot, which is the reliable read-only signal that the edit was committed: **observed** (T3 reconciliation, live).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure remains **unverified** (T3 variable creation + PRE-SAVE baseline + reconciliation complete; the **Save**, **immediately-after-Save existence check**, and **close/reopen retention** steps are **not** yet performed).

### T3 reconciliation — Stopped here (per instruction)

Stopped with `FX_FormVariableLab02` **open and DIRTY** in the Designer (Tab 3), User scope, with exactly one variable `FX_PersistentRetentionVar` (Global=False, Persistent=True, Value=`Seed-Persist-B`) committed in the Variables UI and the full pre-Save baseline recorded. **Did NOT** Save or Regenerate; did **NOT** create or edit any variable/field; did **NOT** close or reopen the Form; did **NOT** execute any Form logic; did **NOT** open User Preferences; did **NOT** unload/cache-clear; did **NOT** login/reauthenticate/logout/restart/replace the session; did **NOT** modify any existing `FX_` or non-`FX_` artifact. **Next task (T4)** may proceed to perform the single ordinary Designer Save and the immediately-after-Save existence check.

## T4 — ONE ordinary Designer Save + immediate post-Save AC-4/AC-5 check (cycle 9) — **BLOCKED at the pre-Save guard (session expired)**

The coordinator issued **T4**: perform **exactly one** ordinary Designer Save, then immediately verify **AC-4** (Designer returns to a clean state) and **AC-5** (the variable definition is intact immediately after Save, matching the AC-3 pre-Save baseline). First make a **read-only guard**: `FX_FormVariableLab02` is still the loaded User-scope target, `FX_PersistentRetentionVar` still exactly matches the pre-Save baseline, the Form is dirty, and no session-establishment dialog is present. **If any guard fails or the session has expired, STOP without Save and record the blocker.** Do NOT Regenerate; do NOT Save a second time; do NOT close/reopen; do NOT execute logic; do NOT login/reauth/logout/restart/replace the session; do NOT open User Preferences; do NOT unload/cache-clear; do NOT modify any other field/artifact.

### Pre-Save read-only guard (cycle 9)

1. **Inspected carried-over browser state first** (a fresh conversation does not reset state): Tab 0 Web Client (signed-in), Tab 1 stray dead portal-root tab, Tab 2 stale Designer (`FX_FormPropertyLab12`), **Tab 3 live classic Designer** (current) showing `FX_FormVariableLab02` with Details > Variables open.
2. **Guard condition 1 — target identity + User scope: PASS.** Designer tab heading **`FX_FormVariableLab02`**; status bar **`[ ScopeType: User / ScopeName: <user> ]`**; Form Properties **Name = `FX_FormVariableLab02`**, **Version = `User version for user <user>`**.
3. **Guard condition 2 — variable matches pre-Save baseline: PASS.** Exactly one variable `FX_PersistentRetentionVar` under **"Form - Persistent"** (other two groups empty); Properties: **Name = `FX_PersistentRetentionVar`**, **Description = (empty)**, **Value = `Seed-Persist-B`**, **Persistent = `True`**, **Global = `False`**, **Version = `User version for user <user>`** — an exact match to the AC-3 baseline.
4. **Guard condition 3 — Form is dirty: PASS.** **Save**, **Regenerate Form**, and **Undo** toolbar buttons all **enabled** (unsaved changes present).
5. **Guard condition 4 — no session-establishment dialog: PASS.** No scope / Sign In / "Session Expired" dialog present in the UI.
6. **Session-liveness check (read-only): FAILED — session EXPIRED.** A read-only in-page same-origin `GET` to the Designer tab's own `AppApi/GetSessionInfo` endpoint (the same canonical check used in T1) returned **HTTP 200** with **`Message = "Your session has expired."`** (evidence `34`). Per the T1 finding, a rendered Designer + status-bar scope text are **not** proof of a live session; the `GetSessionInfo` result is authoritative. The rendered form + User-scope status bar (evidence `33`) are **stale artifacts** of the expired session.

### Guard outcome: **STOP without Save (blocker recorded)**

All four explicit guard conditions **passed**, but the **session-liveness check failed** (session expired). Per the T4 instruction ("If any guard fails **or the session has expired**, STOP without Save and record the blocker") and AGENTS.md / the task Prohibited list ("if the session expires **after mutation begins**, stop and record the blocker"; session establishment is allowed **only before** the first mutation), the correct action was to **STOP without performing the Save** and **not** re-establish the session.

- **The single ordinary Designer Save was NOT performed.** No Regenerate, no second Save, no close/reopen, no Form logic, no User Preferences, no unload/cache-clear, no login/reauth/logout/restart/session-replacement, and no modification of any field or artifact.
- **Why the session expired:** the Form was created in T2 and the variable in T3 (mutation began in T2). The session then went idle across the T3-reconciliation and T4 conversation boundaries and **expired by idle timeout** before T4's Save. Because mutation had already begun, the session **cannot** be re-established under the task rules (session establishment is permitted only before the first mutation).

### T4 requirement-to-evidence mapping

| # | T4 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect carried-over browser state first | **DONE** — 4 tabs; Tab 3 live classic Designer on `FX_FormVariableLab02` | this file; evidence `33` |
| 2 | Guard: target is the loaded User-scope `FX_FormVariableLab02` | **PASS** — tab heading + `[ ScopeType: User / ScopeName: <user> ]` + Form Properties Name/Version | live snapshot; evidence `33` |
| 3 | Guard: `FX_PersistentRetentionVar` exactly matches the pre-Save baseline | **PASS** — Name/Description(empty)/Value=`Seed-Persist-B`/Persistent=True/Global=False/Version all match; exactly one variable | live snapshot; evidence `33` |
| 4 | Guard: the Form is dirty | **PASS** — Save + Regenerate + Undo enabled | live snapshot; evidence `33` |
| 5 | Guard: no session-establishment dialog present | **PASS** — no dialog in the UI | live snapshot; evidence `33` |
| 6 | Guard: session not expired (read-only liveness check) | **FAIL** — `GetSessionInfo` → `"Your session has expired."` | evidence `34` |
| 7 | If any guard fails or session expired → STOP without Save + record blocker | **DONE** — STOPPED without Save; blocker recorded below | this file; evidence `33`, `34` |
| 8 | Perform exactly one ordinary Designer Save; prove clean state (AC-4) | **NOT PERFORMED** — blocked at the guard (session expired) | — |
| 9 | Immediately re-read Details > Variables; compare to AC-3 baseline (AC-5) | **NOT PERFORMED** — blocked at the guard (session expired) | — |
| 10 | No Regenerate / second Save / close-reopen / logic / User Preferences / unload / session action / other-field change | **HONORED** — none performed | — |

### T4 evidence (under `evidence/EXP-012/`)

- `33-t4-guard-designer-stale-render-dirty.png` — live classic Designer (Tab 3) at the T4 guard: `FX_FormVariableLab02` rendered (stale), Details > Variables showing `FX_PersistentRetentionVar` (Value=`Seed-Persist-B`, Persistent=True, Global=False), `[ ScopeType: User / ScopeName: <user> ]`, Save+Regenerate+Undo enabled (dirty) — the rendered state that the `GetSessionInfo` check proved to be stale.
- `34-t4-guard-getsessioninfo-session-expired.md` — read-only `GetSessionInfo` diagnostic: HTTP 200, `Message = "Your session has expired."` → session expired after mutation began.

### T4 knowledge state

- The Mongoose session **expires by idle timeout across conversation boundaries even while the Designer still renders the form with a User-scope status bar**; the rendered state is **stale** and the `GetSessionInfo` check is the authoritative liveness signal: **observed** (T4, live read-only check).
- Because mutation had already begun (T2/T3), an expired session **cannot be re-established** under the task rules (session establishment is permitted only before the first mutation); the correct response is to **stop and record the blocker**: **observed** (T4, per AGENTS.md / task Prohibited).
- The EXP-012 **persistent-form-variable-definition-retention-with-approved-session-establishment** procedure remains **unverified / BLOCKED**: the **single ordinary Designer Save**, the **immediately-after-Save existence check (AC-5)**, and the **close/reopen retention** steps were **not** performed because the session expired at the T4 pre-Save guard.

### T4 — Stopped here (BLOCKED — session expired at the pre-Save guard)

**BLOCKER:** the Mongoose session **expired** (idle timeout) after mutation began and before the T4 Save. The pre-Save guard's four explicit conditions all passed (correct User-scope target, variable exactly matching the pre-Save baseline, Form dirty, no session dialog), but the read-only `GetSessionInfo` liveness check returned **"Your session has expired."** Per the T4 instruction and AGENTS.md, the Save was **NOT** performed and the session was **NOT** re-established (prohibited after mutation began). `FX_FormVariableLab02` is left **open and DIRTY** in the Designer (Tab 3) with the unsaved variable `FX_PersistentRetentionVar` (Global=False, Persistent=True, Value=`Seed-Persist-B`) still present in the (now stale) rendered state. **No Save, no Regenerate, no close/reopen, no Form logic, no User Preferences, no unload/cache-clear, no session re-establishment, and no modification of any field or artifact occurred in T4.**

**Resolution path for a future cycle (requires coordinator decision):** the unsaved variable definition exists only in the (now expired) Designer client state and was **never saved**, so it is **not durable**. To complete T4 the session must be re-established — but that is only permitted **before the first mutation**, which has already occurred. Options for the coordinator: (a) treat the expired-session-after-mutation as a terminal blocker for this run and close EXP-012 as blocked at T4; or (b) explicitly authorize a one-time session re-establishment as a documented exception (deviating from the "session establishment only before first mutation" rule) so the single Save + AC-4/AC-5 + close/reopen retention can be completed. **No such exception was taken in T4.**