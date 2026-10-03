# EXP-013 — Immediate Form Variable Definition Retention Across One Ordinary Save (FX_FormVariableLab03)

Status: **T1 preflight COMPLETE.** The inherited Mongoose session was **EXPIRED** (Designer `GetSessionInfo` → "Your session has expired.") and the Web Client was **logged out** (Tab 0 = "Logout Successful"). Per the T1 instruction, the session was **established via the supported Web Client/Mongoose sign-in flow** (portal SSO login → config-group Sign In → Designer split-button scope=User → second config-group Sign In), without reading/printing/logging/screenshotting credential values. After establishment, the Web Client **Select Form** loaded the **full 649-form inventory** (server-backed liveness) and the Designer editing scope was **confirmed live as User** (scope dialog + status bar). The target `FX_FormVariableLab03` was **proven absent** (exact + case-insensitive) via the live Select Form inventory: **0 matches** in the 649-form inventory (full-store scan + visual Name filter), with a positive control (`UsersMaint`) confirming the filter works. A **new finding**: `GetSessionInfo` (AppApi) **still reports "expired"** from both the Designer and the Web Client even while the form workflow is fully live — it is **not** a reliable liveness gate (the Select Form inventory load is). **No Form or variable was created; no Mongoose artifact was created, modified, or deleted.** `FX_FormVariableLab03` was **NOT created** in T1.

**T2 COMPLETE.** After T1, the Designer was re-verified live (scope=User; evidence `15`) and the target re-confirmed absent. The first **New** attempt hit a `GetFormWizard` **HTTP 400** (stale `rvtoken`; evidence `16`); a **page reload** — which **preserved the same `inforSessionId`** `df74110f-…` (**not** a session replacement; no reauth, no Sign In) — resolved it, after which the standard Designer **"Identify Your Editing Scope"** dialog (Scope: User) was confirmed (a non-prohibited load dialog, not a login). The Form `FX_FormVariableLab03` was then created via the classic **BuildFromScratch** wizard (Save Template **unchecked**), and exactly one variable `FX_ImmediateSaveRetentionVar` was added with `Global=False`, `Persistent=True`, `Value=Seed-Save-C` (created in the **Form - Persistent** group). A PRE-SAVE baseline was captured, **exactly one ordinary Designer Save** was performed (Save button → **disabled** = clean; Undo → disabled), and the variable definition was **re-read immediately and compared field-by-field: every field unchanged** (group, Name, Description, Value, Persistent, Global, Version all match). The Form was **left open and clean** (Save disabled). No second save, no form-regeneration, no deliberate unload/cache-clear, no preference change, no close/reopen, no scope switch, no credential re-entry. The immediate post-Save retention of the `Global=False`/`Persistent=True` variable definition is now **observed** (single execution, single ordinary Save, immediate comparison; **no** close/reopen lifecycle test).
Date: 2026-10-03
Mode: LEARNING MODE — T1 preflight (session establishment permitted; no mutation) + T2 single controlled mutation (one Form + one variable + one ordinary Save).
Run: cycle 1, tasks T1 (preflight), T2 (create + single Save + immediate post-Save comparison), T3 (read-only reconciliation), T5 (final read-only audit).

## Objective

Using one new User-scope classic BuildFromScratch Form `FX_FormVariableLab03`, establish or confirm a live Mongoose session before any mutation, prove the new target is absent, create exactly one Form variable named `FX_ImmediateSaveRetentionVar` with `Global=False`, `Persistent=True`, and `Value=Seed-Save-C`, record every visible definition field, perform exactly one ordinary Designer Save, and immediately verify whether the same design-time definition remains unchanged after Save. The experiment ends after the immediate post-Save comparison; it does **not** test Form close/reopen, execution-time value behavior, cache behavior, session replacement, or data provenance.

In scope (T1 only): inspect browser/environment state; if the inherited session is not demonstrably live, establish it via the documented supported sign-in flow (no credential exposure); prove session readiness with an observable server-backed Web Client check; confirm Designer editing scope is User; prove `FX_FormVariableLab03` is absent (exact + case-insensitive) via the live Select Form/inventory surface; capture screenshots/diagnostics under `evidence/EXP-013/`; capture a repository/worktree baseline; create this record.

Out of scope (all tasks): replaying/repairing/promoting EXP-004, EXP-011, or EXP-012, or treating EXP-013 as a replay of EXP-012; closing or reopening the target Form after Save; testing whether the variable definition survives a Form-tab close/reopen, a new Designer client, a credential re-entry, session replacement, a cache unload, or any other lifecycle boundary; running Form logic to read, set, or otherwise observe the execution-time value of the variable; testing execution-time persistent-variable value semantics; testing the non-persistent setting or creating a comparison variable; testing temporary-variable behavior; using the form-regeneration command or any second save mechanism; the deliberate global-object unload command, deliberate IDO-metadata unloading, cache-clearing experiments, or preference settings; Caption/Description/component/collection/binding/validator/event-handler/script/data-source/IDO-definition/localized-String/portal/Runtime-Builder/FormSync experiments; Site/Group/Vendor Default editing scope; modification of any existing `FX_` artifact; creation/modification of reusable recipes, AGENTS.md, environment files, or other experiment records; physical Forms-store provenance, direct store inspection or mutation, undocumented APIs, or internal session manipulation; any claim that immediate post-Save retention proves durable storage, close/reopen persistence, cache eviction, execution-time value persistence, or data provenance.

## Starting state / preflight facts (2026-10-03, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and the Designer page title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Mongoose host `mgapse1ap.mtmgf.se1.mongoosepaas.io`; portal app `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`; Web Client iframe name `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`.
- Browser state at preflight start (inspected first): four tabs:
  - **Tab 0: "Logout Successful"** at the portal SLO sign-out page — the portal / Mongoose **Web Client** tab had been **logged out**. (evidence `02`.)
  - **Tab 1: stray dead tab** at the bare portal root `https://mingle-portal.se1.inforcloudsuite.com/` (empty title) — a long-standing leftover; unchanged; not touched.
  - **Tab 2: stale Designer** at `WSWebClient/designer/default.aspx?…&MGForm=FX_FormPropertyLab12` — `FX_FormPropertyLab12` (an EXP-010-R2 leftover) rendered as **stale client-side state**. (evidence `01` context.)
  - **Tab 3 (current): classic Designer** at `…&MGForm=FX_FormVariableLab02` — the **EXP-012 leftover** `FX_FormVariableLab02`, left **open and dirty** (unsaved `FX_PersistentRetentionVar`) by the EXP-012 T4 blocker. **Not touched** by this preflight. (evidence `01`.)
- **Inherited session: EXPIRED.** A read-only in-page same-origin `fetch` to the Designer's own `AppApi/GetSessionInfo` endpoint returned HTTP 200 with `Message: "Your session has expired."` (evidence `03`). The rendered form and status-bar scope text are stale artifacts of the expired session, **not** evidence of a live session.

## Session establishment (T1 — permitted before first mutation)

The T1 instruction permits establishing the session before any mutation. The documented supported flow (EXP-006 T8 / EXP-012 T1) was used; no credential value was read, printed, logged, or screenshotted (the `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD` placeholders were used; Playwright MCP substituted the real values).

**Establishment ordering (AC-7) — every step occurred during the T1 preflight, i.e., before any Mongoose artifact mutation (T1 performs no mutation):**

1. **Portal SSO login.** Tab 0 was navigated to the tenant-scoped portal app URL. The CloudIdentities sign-in form loaded (evidence `05`); credentials were filled via the secret placeholders and **Sign in** was clicked. The portal loaded; a portal-notification banner was dismissed.
2. **Web Client config-group Sign In (first).** The Web Client presented the config-group Sign In dialog (evidence `06`); **OK** was clicked. The Web Client UI shell loaded (user badge + toolbar + Explorer) (evidence `07`).
3. **Designer session established (supported split-button path).** From the Web Client toolbar, the **Designer** split button was clicked, opening a fresh Designer tab (Tab 4, new `inforSessionId`). The Designer session was **live**: the **"Identify Your Editing Scope"** dialog appeared with **Scope: User** and the status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `08`). **OK** was clicked (safe; no mutation).
4. **Web Client config-group Sign In (second).** A transient "Session Expired" state was still present on the Web Client AppApi side; the config-group Sign In dialog was presented again and **OK** was clicked.

**Net result:** a live Mongoose session was established (Designer live with scope=User; Web Client Select Form loading the full inventory). No credential value was exposed at any step. All four session-establishment steps occurred **before** any mutation (T1 has none).

## Preflight method (T1)

1. Inspected repository state and references (read-only, not modified): `AGENTS.md`, `tools/learning-harness/briefs/EXP-013.brief.json` (the authoritative brief), `experiments/EXP-012-*.md` (closest prior — established the pre-Save variable workflow; blocked before its first Save), `recipes/forms/create-basic-form.md` (verified recipe for T2+), `environments/current-environment.md`.
2. Inspected current browser state (4 tabs as above). Screenshots: Designer tab (evidence `01`), Web Client "Logout Successful" tab (evidence `02`).
3. **Inherited-session test:** read-only in-page `GetSessionInfo` from the Designer tab → "Your session has expired." (evidence `03`).
4. **Session establishment** via the documented supported flow (steps above; evidence `05`–`08`).
5. **Server-backed readiness check:** the Web Client **Select Form** dialog loaded the **full 649-form inventory** (evidence `09`) — an observable, server-backed confirmation that the Web Client session is live (the form-store round-trip succeeded).
6. **Designer scope confirmation:** the Designer **"Identify Your Editing Scope"** dialog showed **Scope: User** and the status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `08`, `12`).
7. **Target absence proof (live Select Form / inventory surface):**
   - Opened the Web Client **Select Form** dialog (via **Open**).
   - Verified **Filter By = Name** (`combo-1145` value `mgdata`); **Case Sensitive** unchecked (`mgDlgCbx-1146` = `false`, case-insensitive); **Starts With** unchecked (`mgDlgCbx-1147` = `false`, contains).
   - **Positive control:** typed `UsersMaint` (slowly, to trigger the live filter) → the grid correctly showed `UsersMaintQuery` and `UsersMaint` (filter works by Name); store count after filter = **2** (evidence `10`).
   - **Target search:** cleared the filter, typed `FX_FormVariableLab03` (slowly) → the grid was **empty** (0 rows); store count after filter = **0** (evidence `11`).
   - **Full-store scan (read-only):** inspected the Select Form grid's ExtJS store (`grid-1136`, client-side, `remoteTotal = 0`) — it holds **649** records (the full inventory). A case-insensitive scan of **every string field of every record** for `fx_formvariablelab03` returned **0 matches**. A prefix probe for `fx_formvariablelab` returned exactly **one** unique form — `FX_FormVariableLab02` (the EXP-012 leftover). (evidence `13`.)
   - **Conclusion:** `FX_FormVariableLab03` is **absent** (exact + case-insensitive) from the full 649-form inventory.
8. **GetSessionInfo re-check (read-only):** after the Select Form had loaded the full inventory, `GetSessionInfo` was re-run from **both** the Designer tab and the Web Client iframe; **both** still returned "Your session has expired." despite the live form workflow (evidence `14`).
9. Audited the worktree starting state (git status/log; evidence `04`).

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect references (brief, AGENTS.md, EXP-012, recipe, environment) — no modification | **DONE** — all read; none modified | this file |
| 2 | Inspect current browser/page state; record existing tabs/instances | **RECORDED** — 4 tabs (Web Client **logged out**; stray dead portal-root tab; stale Designer `FX_FormPropertyLab12`; classic Designer rendering dirty EXP-012 leftover `FX_FormVariableLab02`) | tab list; evidence `01`, `02` |
| 3 | If session not demonstrably live, establish it via the documented supported flow (no credential exposure) | **DONE** — portal SSO login + config-group Sign In (×2) + Designer split-button; no credential value read/printed/logged/screenshotted | evidence `03`–`08` |
| 4 | Prove session readiness with an observable server-backed Web Client check | **DONE** — Web Client Select Form loaded the full **649-form** inventory (server-backed form-store round-trip succeeded) | evidence `09`; store count 649 |
| 5 | Confirm active Designer editing scope is User (supported UI / read-only) | **DONE (live)** — Designer "Identify Your Editing Scope" dialog **Scope: User** + status bar `[ ScopeType: User / ScopeName: <username> ]` | evidence `08`, `12` |
| 6 | Prove `FX_FormVariableLab03` absent (exact + case-insensitive) via the live Select Form/inventory surface; record total counts | **DONE** — Select Form Name filter (case-insensitive, contains) → **0 rows**; full-store case-insensitive scan of all **649** records → **0 matches**; positive control `UsersMaint` confirmed the filter works | evidence `10`, `11`, `13`; store counts 649 / 0 |
| 7 | Capture initial repository/worktree baseline | **CAPTURED** — git branch `exp/EXP-013`, HEAD `b945dc1`, clean worktree at start | evidence `04` |
| 8 | Create `evidence/EXP-013/` and the EXP-013 record; do NOT create the Form or variable | **DONE** — screenshots `01`–`12` + diagnostics `03`, `04`, `13`, `14`; this record; target **NOT** created | this file; `evidence/EXP-013/` |

## Repository / worktree starting state (T1)

- Worktree **is** a git repository: branch **`exp/EXP-013`**, HEAD **`b945dc1`** (`harness: context/briefs update`); recent history: `95d4cd5 Merge EXP-012 (blocked)`, `536bacc EXP-012: blocked`, `c806882 harness: context/briefs update`, `6cf61c5 Merge EXP-011 (blocked)`, `ef579f4 EXP-011: blocked`.
- **Worktree status at preflight start:** **clean** — `git status --porcelain` empty before this preflight wrote anything.
- **New in this preflight (T1 window):** only `evidence/EXP-013/*` (screenshots + diagnostics) and this record file.
- **NOT modified by this preflight (all predate the run):** `AGENTS.md`, `opencode.json`, `README.md`, `.gitignore`, `environments/current-environment.md`, every file under `recipes/`, `tools/`, and all other `experiments/EXP-00x-*.md` / `evidence/EXP-00x*/` files.
- **Conclusion:** worktree starting state is clean for EXP-013 purposes; no recipe, environment, AGENTS.md, or prior experiment file was modified by this preflight. EXP-013-attributable changes are confined to this record and `evidence/EXP-013/`.

## Observations

- **The inherited session had expired before this run** (idle gap since the EXP-012 run). The Designer tab (Tab 3) still *renders* `FX_FormVariableLab02` (dirty, with its unsaved `FX_PersistentRetentionVar`) with a User-scope status bar, but a live `GetSessionInfo` call reports the session as expired. **A rendered Designer is not proof of a live session.**
- **The Web Client (Tab 0) was logged out** (SLO "Logout Successful" page) at preflight start.
- **Session establishment succeeded via the documented supported flow**, but the Web Client AppApi side showed a **transient "Session Expired"** state that cleared only after the **second** config-group Sign In (step 4); afterward the Web Client Select Form loaded the full 649-form inventory. A UI shell rendering signed-in is not, by itself, proof of a live AppApi session; a server-backed check (the Select Form inventory load) is required.
- **NEW FINDING — `GetSessionInfo` is not a reliable liveness gate.** After the form workflow was demonstrably live (Select Form loaded the full 649-form inventory; Designer scope dialog returned Scope: User), `GetSessionInfo` **still reported "Your session has expired."** from **both** the Designer tab and the Web Client iframe (evidence `14`). This refines the EXP-012 finding: EXP-012's "recovery" was measured by the Select Form loading the inventory, not by `GetSessionInfo`. `GetSessionInfo` is reliable in the **"definitely dead"** direction (a genuinely expired session + logged-out Web Client, as at this preflight's start) but is **not** a valid **"definitely live"** gate. The **authoritative liveness check is a server-backed form operation** (the Select Form inventory load; for the Designer, the scope dialog / recent-forms menu). A `GetSessionInfo` "expired" response **must not** be treated as proof that a live, working session is unusable.
- **The Select Form Name filter is a live, case-insensitive, contains filter** over the full 649-form inventory store (confirmed by the `UsersMaint` positive control and the store record counts 649/0). It is a valid exact + case-insensitive absence surface.
- **No Mongoose artifact was created, modified, or deleted; no preference setting was opened/changed/saved; no deliberate unload or cache-clearing command was invoked; no Form was opened/created/saved; no scope switch was performed; no second save mechanism was used.**

## Evidence (under `evidence/EXP-013/`)

- `01-preflight-designer-tab3-exp012-leftover.png` — Designer tab (Tab 3) at preflight start: `?MGForm=FX_FormVariableLab02` (EXP-012 leftover, rendered, dirty with unsaved `FX_PersistentRetentionVar`), status bar `[ ScopeType: User / ScopeName: <username> ]`.
- `02-preflight-webclient-logout-successful.png` — Web Client tab (Tab 0) showing the portal **"Logout Successful"** SLO page — the Web Client is logged out.
- `03-preflight-getsessioninfo-session-expired.md` — read-only `GetSessionInfo` diagnostic: HTTP 200, `Message = "Your session has expired."` → inherited session expired / not usable.
- `04-git-baseline.md` — repository/worktree baseline (branch `exp/EXP-013`, HEAD `b945dc1`, clean worktree).
- `05-cloudidentities-signin-form-empty.png` — CloudIdentities sign-in form before credential entry (no credential value visible).
- `06-webclient-config-group-signin-dialog.png` — Web Client config-group Sign In dialog (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
- `07-webclient-signed-in-clean.png` — Web Client UI shell after the first config-group Sign In (user badge + toolbar + Explorer).
- `08-designer-scope-dialog-user.png` — Designer **"Identify Your Editing Scope"** dialog: **Scope: User**, User `<username>`; status bar `[ ScopeType: User / ScopeName: <username> ]`.
- `09-select-form-loads-inventory.png` — Web Client **Select Form** dialog loading the full **649-form** inventory (server-backed readiness confirmed).
- `10-select-form-positive-control-usersmaint.png` — Web Client **Select Form** with filter `UsersMaint`: **2 rows** (`UsersMaintQuery`, `UsersMaint`) — positive control confirming the Name filter works.
- `11-select-form-filter-target-absent.png` — Web Client **Select Form** with **Filter By = Name**, filter `FX_FormVariableLab03`, **empty grid** (0 rows) — target absent.
- `12-designer-clean-scope-user.png` — live classic Designer (Tab 4): clean (no form open), full Toolbox loaded, status bar **`[ ScopeType: User / ScopeName: <username> ]`**.
- `13-store-scan-target-absent.md` — read-only full-store absence scan: **649** records, **0** case-insensitive matches for `fx_formvariablelab03`; positive control `usersmaint` = 2; prefix `fx_formvariablelab` = only `FX_FormVariableLab02`.
- `14-getsessioninfo-still-expired-while-live.md` — read-only `GetSessionInfo` re-check from **both** the Designer tab and the Web Client iframe: both report "Your session has expired." **while** the Select Form had loaded the full 649-form inventory → `GetSessionInfo` is not a reliable liveness gate.
- `15-guard-designer-live-scope-user.png` — T2 pre-mutation guard: live Designer, no form open, status bar `[ ScopeType: User / ScopeName: <username> ]`.
- `16-new-error-dialog.png` — first **New** attempt: `GetFormWizard` **HTTP 400** (stale `rvtoken`); no Form created.
- `17-form-wizard-selection.png` — **Form Wizard Selection** dialog (Category / Wizard / New Form).
- `18-wizard-category-dropdown.png` — Category dropdown opened.
- `19-wizard-category-open.png` — Category options (Classic / ExtDataSource / Flex / Form Builder / IDS); **Classic** selected.
- `20-wizard-wizard-open.png` — Wizard options (Build from Scratch / Detail-Only / Grid-Only / Multi-View / Query); **Build from Scratch** selected.
- `21-wizard-page1-name.png` — wizard page 1: **Name = `FX_FormVariableLab03`**, other fields default.
- `22-wizard-page2-save-template.png` — wizard page 2: **Save Template checked by default**.
- `23-wizard-page2-save-template-unchecked.png` — wizard page 2: **Save Template unchecked**.
- `24-process-completed.png` — **"Process Completed Successfully"** dialog after Finish.
- `25-form-created-in-designer.png` — `FX_FormVariableLab03` open in the Designer, **Save disabled** (clean); form properties (Name / Version / Device Type / Form Type / Is Master).
- `26-variables-tab-empty.png` — Details → **Variables** tab: two empty groups (Global - Persistent, Global - Temporary), Add/Edit/Delete toolbar.
- `27-variable-created-properties.png` — `FX_ImmediateSaveRetentionVar` created in the **Form - Persistent** group; properties Persistent=True, Global=False, Value=(empty).
- `28-presave-baseline-variables.png` — **PRE-SAVE baseline**: group=Form - Persistent, Name=`FX_ImmediateSaveRetentionVar`, Value=`Seed-Save-C`, Persistent=True, Global=False.
- `29-postsave-clean-variable-intact.png` — **POST-SAVE** (after exactly one ordinary Save): Save/Regenerate **disabled** (clean), variable intact with identical properties.
- `30-t5-designer-state-clean.png` — T5 read-only Designer state: Form `FX_FormVariableLab03` open, clean (Save/Regenerate/Undo/Redo disabled), User scope, variable `FX_ImmediateSaveRetentionVar` intact (Value=`Seed-Save-C`, Persistent=True, Global=False).
- `31-t5-network-save-verification.md` — T5 read-only network diagnostic: exactly one POST `SaveChanges` (request #211, HTTP 200, `Success: true`, `Form [FX_FormVariableLab03] and global object(s) were saved.`); no Regenerate or second Save in retained history.

## Knowledge state (as of T1)

- The inherited Mongoose session is **expired / not usable** at T1 start (`GetSessionInfo` → "Your session has expired."; Web Client logged out): **observed** (T1, live read-only server round-trip).
- The documented supported sign-in flow (portal SSO login → config-group Sign In → Designer split-button → second config-group Sign In) **establishes a live session**, with a **transient "Session Expired"** state on the Web Client AppApi side that clears after the second Sign In: **observed** (T1).
- **`GetSessionInfo` (AppApi) is not a reliable liveness gate for the form-designer workflow:** it can report "expired" from both the Designer and the Web Client even while the Select Form loads the full inventory and the Designer scope dialog works; it is reliable only in the "definitely dead" direction. The authoritative liveness check is a server-backed form operation (Select Form inventory load): **observed** (T1, live).
- The **Designer session and the Web Client AppApi session are separate** sessions: **observed** (T1).
- The Designer editing scope is **User** (live confirmation via the scope dialog + status bar): **observed** (T1).
- The Web Client **Select Form Name filter** is a live, case-insensitive, contains filter over the full **649-form** inventory store: **observed** (T1).
- `FX_FormVariableLab03` is **absent** (exact + case-insensitive) from the full 649-form inventory (0/649 full-store scan; positive control confirmed): **observed** (T1, live Select Form store).
- The only `FX_FormVariableLab*` form present is `FX_FormVariableLab02` (EXP-012 leftover): **observed** (T1).
- **A newly added Form variable defaults to `Global=False`, `Persistent=True`** (it lands in the **"Form - Persistent"** group); the Variables grid groups by *Form/Global* × *Persistent/Temporary*. The **Add** button opens a "Form Variable" dialog that collects **only the Name**; Global/Persistent/Value are set afterward in the property grid (Value defaults empty). **observed** (T2).
- **The `GetFormWizard` HTTP 400 (stale `rvtoken`) is recovered by a same-`inforSessionId` page reload** with **no** reauthentication; the standard scope dialog then reappears and is safe to confirm (not a session-establishment action). **observed** (T2).
- **One ordinary Designer Save preserves a `Global=False` / `Persistent=True` Form-variable definition exactly** — group, Name, Description, Value (`Seed-Save-C`), Persistent, Global, and Version were all identical immediately before and after a single Save. **observed** (T2, single execution, single ordinary Save, immediate post-Save comparison). This is the **immediate post-Save** result only; it does **not** by itself establish close/reopen persistence, execution-time value retention, cache behavior, or durable storage.
- The EXP-013 **immediate-form-variable-definition-retention-across-one-ordinary-save** procedure is now **observed** (T2: Form + variable created, exactly one ordinary Save, immediate field-by-field post-Save comparison = all fields unchanged). It is **not yet `verified`** (requires repeatable execution + persistence verification), and it is explicitly **scoped to the immediate post-Save moment** — no close/reopen lifecycle test was performed.

## Open questions / blockers

- **T2 is COMPLETE (no blocker).** `FX_FormVariableLab03` was created (classic BuildFromScratch, Save Template unchecked), the variable `FX_ImmediateSaveRetentionVar` was added (`Global=False`, `Persistent=True`, `Value=Seed-Save-C`), exactly **one** ordinary Save was performed, and the immediate post-Save field-by-field comparison showed **all fields unchanged**. The Form is **left open and clean** (Save disabled).
- **Not yet `verified` (per the knowledge-trust rules):** the immediate post-Save retention result is **observed** from a single execution. To reach `verified` it would need repeatable execution + persistence verification — **but** a close/reopen or second-client persistence test is **out of scope** for EXP-013 (see Objective). The EXP-013 question — *does the definition survive the immediate moment after one ordinary Save?* — is answered **yes (observed)**.
- **Liveness-gate note for T2:** do **not** use `GetSessionInfo` as the liveness gate — it can report "expired" while the workflow is live. Use the **Select Form inventory load** (and the Designer scope dialog / recent-forms menu) as the authoritative server-backed liveness check. If the session lapses during T2 (idle expiry), re-establish it via the same documented supported flow **before** any mutation, and re-run the preflight guards (scope = User **live**, target absent **exact + case-insensitive** via the live Select Form store) before creation.
- **Constraint reminder for T2:** once `FX_FormVariableLab03` creation begins, no credential re-entry / Sign In-OK / deliberate reauthentication / credential re-entry / browser restart / deliberate session replacement is permitted; if the session expires after the first mutation, stop and record the blocker. No second save mechanism, no form-regeneration command, no deliberate global-object unload or cache-clearing command, no preference-setting change.
- Context for the eventual variable experiment: EXP-004 (blocked) found that form variables created via Details → Variables did **not** persist across close/reopen on either documented save path, in the non-persistent case. EXP-011 (blocked at preflight) was to test the persistent case on `FX_FormVariableLab01`. EXP-012 established the pre-Save variable-definition workflow on `FX_FormVariableLab02` but was blocked before its first Save (session expiry across coordinator/worker boundaries). **EXP-013 isolates the first unresolved semantic boundary: whether one `Global=False`, `Persistent=True` Form-variable definition survives exactly one ordinary Designer Save** — a narrower, distinct experiment with **no** close/reopen lifecycle test. These are distinct hypotheses and must not be assumed equivalent to the EXP-004 negative result.

## T1 — Stopped here (per instruction, after the preflight)

Did **not** create `FX_FormVariableLab03` or `FX_ImmediateSaveRetentionVar` or any other Form/variable; did **not** edit any Form property; did **not** perform any Designer Save or use any second save mechanism; did **not** invoke any deliberate global-object unload or cache-clearing command; did **not** open, change, or save any preference setting; did **not** modify any existing `FX_` Form or non-`FX_` artifact; did **not** switch scope. Session establishment (portal SSO login + config-group Sign In ×2 + Designer split-button) **was** performed, as explicitly permitted by the T1 instruction, with no credential value exposed, and **all** of it occurred **before** any mutation (T1 performs none). **Next task (T2) is UNBLOCKED** and may proceed to create `FX_FormVariableLab03`.

## T2 — Form + variable creation, one ordinary Save, immediate post-Save comparison (2026-10-03)

### T2 pre-mutation guards (re-verified before any mutation)

- The Designer tab (Tab 4) was re-inspected: **live**, full Toolbox loaded, status bar **`[ ScopeType: User / ScopeName: <username> ]`** (evidence `15`). No form was open.
- The `inforSessionId` on the live Designer tab was **`df74110f-4b39-492d-abac-ddeabf14eb35`** (URL `…inforSessionId=~df74110f-…`). This value is the anchor for proving the later reload was **not** a session replacement.

### T2 step 0 — first `New` attempt failed (stale `rvtoken`), fixed by a same-session reload

1. **New** was clicked. The `GetFormWizard` request returned **HTTP 400** (stale `rvtoken` from the idle gap); no Form was created (evidence `16`).
2. **Recovery (per the recovery rule: inspect postcondition first, do not blindly repeat):** the failed `New` created nothing, so a **page reload** of the same Designer tab was performed. The reload **preserved the identical `inforSessionId`** `df74110f-…` (URL normalized `…/designer/Default.aspx` → `…/Default.aspx?…&mode=designer`) and **no Sign In / login dialog appeared** — the session was **not** replaced and no reauthentication occurred.
3. After reload, the standard Designer **"Identify Your Editing Scope"** dialog appeared (Scope: **User**). **OK** was clicked. This is the ordinary Designer **load** dialog (not a login/Sign In dialog): same `inforSessionId`, no credential entry, no session replacement — therefore **not** a prohibited session-establishment action.
4. The Designer was clean (no form open), scope **User**, and the `inforSessionId` was still `df74110f-…`.

> **Constraint note:** the reload occurred **before** any successful mutation (the first `New` had failed and created nothing). It was a same-`inforSessionId` reload with **no** reauthentication — **not** a login, Sign In-OK, browser restart, or deliberate session replacement. No prohibited pattern is triggered.

### T2 step 1 — create the Form (classic BuildFromScratch)

Following the verified recipe `recipes/forms/create-basic-form.md`:

1. **New** → **Form Wizard Selection** dialog (evidence `17`).
2. **Category** = **Classic** ("WinStudio classic form wizards") (evidence `18`, `19`).
3. **Wizard** = **Build from Scratch** (evidence `20`).
4. **OK** → wizard page 1.
5. Page 1: **Name** = `FX_FormVariableLab03`; all other fields default (Form Type = BuildFromScratch, Form Layout = GridLeft, Device Type = Default; Data Source / Query Form / Comments empty) (evidence `21`).
6. **Next** → page 2. **Save Template** was **checked by default** (evidence `22`); it was **unchecked** (via the checkbox display element) (evidence `23`).
7. **Finish** → **"Process Completed Successfully"** dialog (evidence `24`) → **OK**.
8. The Form `FX_FormVariableLab03` opened in the Designer (URL `…&MGForm=FX_FormVariableLab03`); **Save was disabled** (clean) (evidence `25`). Form properties confirmed: Name = `FX_FormVariableLab03`, Version = *User version for user …*, Device Type = Default, Form Type = Normal, Is Master = True.

### T2 step 2 — create the variable

1. **Details → Variables** tab (evidence `26`). The Variables grid showed two empty groups: **Global - Persistent** and **Global - Temporary**.
2. **Add** (+) → a **"Form Variable"** dialog opened with a single **Name** field.
3. **Name** = `FX_ImmediateSaveRetentionVar` → **OK**.
4. The variable was created in a **new "Form - Persistent" group** with these **default** properties (evidence `27`):
   - **Persistent = True**, **Global = False** (i.e., a *local persistent* variable — exactly the target setting), **Value = (empty)**.
5. **Value** was set to **`Seed-Save-C`** (property-grid cell editor; committed with Enter).
6. **PRE-SAVE baseline** captured (evidence `28`): group = *Form - Persistent*; Name = `FX_ImmediateSaveRetentionVar`; Description = (empty); **Value = `Seed-Save-C`**; **Persistent = True**; **Global = False**; Version = *User version for user …*.

### T2 step 3 — exactly ONE ordinary Designer Save

- The **Save** toolbar button was clicked **exactly once** (no Regenerate, no second save, no other save mechanism).
- Immediately after, the **Save** button became **`[disabled]`** (form is **clean**) and **Undo** became **`[disabled]`** (save committed; undo stack cleared) — the observable postcondition of a successful ordinary Save.

### T2 step 4 — immediate post-Save re-read + field-by-field comparison

The **Details → Variables** panel was re-read **immediately** after the Save (no close/reopen, no navigation away) and compared to the PRE-SAVE baseline (evidence `29`):

| Property | PRE-SAVE (evidence `28`) | POST-SAVE (evidence `29`) | Match |
|---|---|---|---|
| Group | Form - Persistent | Form - Persistent | ✅ |
| Name | FX_ImmediateSaveRetentionVar | FX_ImmediateSaveRetentionVar | ✅ |
| Description | (empty) | (empty) | ✅ |
| Value | Seed-Save-C | Seed-Save-C | ✅ |
| Persistent | True | True | ✅ |
| Global | False | False | ✅ |
| Version | User version for user … | User version for user … | ✅ |

**Result: all fields unchanged.** The `Global=False` / `Persistent=True` variable definition (including its `Value=Seed-Save-C`) was **retained across exactly one ordinary Designer Save**. The Form was **left open and clean** (Save disabled).

### T2 requirement-to-evidence mapping

| # | T2 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Re-verify Designer live + scope=User before mutation | **DONE** — status bar `[ ScopeType: User / ScopeName: <username> ]` | evidence `15` |
| 2 | Create exactly one User-scope classic BuildFromScratch Form `FX_FormVariableLab03` (Save Template unchecked) | **DONE** — wizard Classic/BuildFromScratch, Save Template unchecked, "Process Completed Successfully" | evidence `17`–`25` |
| 3 | Create exactly one variable `FX_ImmediateSaveRetentionVar` with Global=False, Persistent=True, Value=Seed-Save-C | **DONE** — created in *Form - Persistent* group (default Persistent=True/Global=False); Value set to `Seed-Save-C` | evidence `26`–`27` |
| 4 | Record every visible definition field (PRE-SAVE baseline) | **DONE** — group/Name/Description/Value/Persistent/Global/Version recorded | evidence `28` |
| 5 | Perform exactly ONE ordinary Designer Save | **DONE** — one Save click; Save→disabled (clean), Undo→disabled | evidence `29` |
| 6 | Immediately re-read + compare field-by-field | **DONE** — all 7 fields unchanged | evidence `28` vs `29` |
| 7 | Leave the Form open and clean | **DONE** — Form tab open, Save disabled | evidence `29` |

### T2 constraint compliance

- **Exactly one** ordinary Designer Save; **no** second save, **no** form-regeneration command, **no** other save mechanism.
- **No** deliberate global-object unload, IDO-metadata unload, cache-clearing, or preference-setting change.
- **No** Form close/reopen, **no** new Designer client, **no** execution-time value read/set, **no** scope switch.
- **No** credential re-entry / Sign In-OK / reauthentication / browser restart / deliberate session replacement. The single page reload (step 0) preserved the **same** `inforSessionId` (`df74110f-…`) and triggered **no** login dialog — it is **not** a session-establishment action.
- **No** existing `FX_` artifact or non-`FX_` artifact was modified or deleted (Tab 3's dirty `FX_FormVariableLab02` and Tab 2's `FX_FormPropertyLab12` were **not** touched).
- **No** component/collection/script/event-handler/data-source was added; the only mutation was the one Form + one variable.

### T2 observations

- **A new Form variable's default scope is `Global=False`, `Persistent=True`** (it lands in the **"Form - Persistent"** group). The Variables grid groups variables by the two booleans: *Form/Global* × *Persistent/Temporary*; a freshly added variable defaults to the **Form - Persistent** cell. (evidence `27`.)
- **The `Add` (+) button opens a "Form Variable" dialog that collects only the Name**; the Global/Persistent/Value are set afterward in the property grid (Global/Persistent default as above; Value defaults empty). (evidence `26`–`27`.)
- **The `GetFormWizard` 400 (stale `rvtoken`) is recovered by a same-`inforSessionId` page reload** with no reauthentication; the standard scope dialog then reappears and is safe to confirm. (evidence `16`.)
- **One ordinary Save preserves the `Global=False`/`Persistent=True` variable definition exactly** (all fields identical pre/post). This is the **immediate post-Save** result only — it does **not** by itself prove close/reopen persistence, execution-time value retention, cache behavior, or durable storage. (evidence `28` vs `29`.)
- **Exactly-one-target evidence (AC-2):** the created Form is the loaded Designer target — tab `FX_FormVariableLab03`, URL `…&MGForm=FX_FormVariableLab03`, property Name = `FX_FormVariableLab03` (evidence `25`) — and T1 proved the target **absent (0/649)** immediately before creation (evidence `11`, `13`). Exactly one Form was created via the wizard, so exactly one case-insensitive target now exists. A separate post-creation **Select Form** re-count was **not** run: the user's T2 instruction ends at the immediate post-Save comparison and requires leaving the Form open and clean, so no further Web Client inventory navigation was performed after the Save.

## T2 — Stopped here (per instruction, after the immediate post-Save comparison)

- Created **exactly one** Form (`FX_FormVariableLab03`) and **exactly one** variable (`FX_ImmediateSaveRetentionVar`, `Global=False` / `Persistent=True` / `Value=Seed-Save-C`).
- Performed **exactly one** ordinary Designer Save; did **not** use any second save mechanism or the form-regeneration command.
- **Did not** close or reopen the Form, open a new Designer client, run Form logic, read/set the execution-time value, change any preference setting, invoke any deliberate unload/cache-clear command, or switch scope.
- **Did not** modify or delete any existing `FX_` artifact or non-`FX_` artifact (Tabs 2 and 3 untouched).
- The Form `FX_FormVariableLab03` is **left open and clean** (Save disabled) in the Designer, scope **User**.
- **EXP-013 question answered (observed):** a `Global=False` / `Persistent=True` Form-variable definition **does survive the immediate moment after exactly one ordinary Designer Save** — every visible definition field was identical before and after. This is an **immediate post-Save** observation only and is **not** a close/reopen, execution-time, cache, or durable-storage claim.

## T3 — READ-ONLY reconciliation (2026-10-03)

T3 is a **strictly read-only** reconciliation. No mutation, Save, close/reopen, login, reload, or session replacement was performed. The current browser state was inspected, evidence files 16–29 were re-read in detail, and the T2 sequence was reconstructed from the evidence.

### T3 current browser state (read-only snapshot)

- **Tab 4 (current):** Designer, `inforSessionId=df74110f-4b39-492d-abac-ddeabf14eb35` (identical to T2 — session **not** replaced).
- **Form tab:** `FX_FormVariableLab03` (selected). Properties panel: Name = `FX_FormVariableLab03`, Version = *User version for user …*, Device Type = Default, Form Type = Normal, Is Master = True.
- **Toolbar:** Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, Redo `[disabled]` — **clean** (no pending changes).
- **Variables tab (selected):** one variable in **Form - Persistent**: `FX_ImmediateSaveRetentionVar`. Global - Persistent and Global - Temporary groups are empty.
- **Variable properties:** Name = `FX_ImmediateSaveRetentionVar`, Description = (empty), Value = `Seed-Save-C`, Persistent = True, Global = False, Version = *User version for user …*.
- **Status bar:** `[ ScopeType: User / ScopeName: <username> ]`.
- **Other tabs:** Tab 0 (Web Client, portal app), Tab 1 (stray dead portal root), Tab 2 (stale `FX_FormPropertyLab12`), Tab 3 (EXP-012 leftover `FX_FormVariableLab02`) — all **untouched**.

### T3 — Detailed evidence 28 / 29 inspection

**Evidence `28` (PRE-SAVE baseline) — cropped screenshot (Details panel only):**

The screenshot shows only the Details panel (Variables tab + property grid). The Designer toolbar is **not visible** in this crop. The visible content:

- **Variables grid (left):**
  - **Form - Persistent:** `FX_ImmediateSaveRetentionVar` (selected, highlighted blue) — **1 entry**
  - **Global - Persistent:** (empty) — **0 entries**
  - **Global - Temporary:** (empty) — **0 entries**
- **Property grid (right), General section:**
  - **Name:** `FX_ImmediateSaveRetentionVar`
  - **Description:** (empty)
  - **Value:** `Seed-Save-C` (highlighted/selected)
  - **Persistent:** `True` (with dropdown arrow)
  - **Global:** `False`
- **Property grid, Value section:**
  - **Value:** (empty text field)
- **NOT visible in this screenshot:** Version (below Global, not scrolled into view); Designer toolbar (Save button state); Form tab; Properties panel; status bar.

**Evidence `29` (POST-SAVE) — full Designer view:**

The screenshot shows the full Designer window. The visible content:

- **Form tab:** `FX_FormVariableLab03` (selected).
- **Properties panel (right):** Name = `FX_FormVariableLa…` (truncated), Description = (empty), Caption = (with dropdown), Version = `User version for us…` (truncated), Device Type = `Default`, Form Type = `Normal`, Is Master = `True`.
- **Variables grid (left, Details panel):**
  - **Form - Persistent:** `FX_ImmediateSaveRetentionVar` (selected, highlighted blue) — **1 entry**
  - **Global - Persistent:** (empty) — **0 entries**
  - **Global - Temporary:** (empty) — **0 entries**
- **Property grid (right, Details panel), General section:**
  - **Name:** `FX_ImmediateSaveRetentionVar`
  - **Description:** (empty)
  - **Value:** `Seed-Save-C` (highlighted/selected)
  - **Persistent:** `True` (with dropdown arrow)
  - **Global:** `False`
- **Property grid, Value section:**
  - **Value:** (empty)
- **Status bar:** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- **Toolbar:** visible but the individual button enabled/disabled states are **not clearly resolvable** at this image resolution. The Save button state cannot be definitively confirmed from the screenshot alone.
- **NOT visible in the variable property grid:** Version (below Global, not scrolled into view).

**Field-by-field comparison (fields visible in BOTH screenshots):**

| Field | Evidence `28` (PRE-SAVE) | Evidence `29` (POST-SAVE) | Match |
|---|---|---|---|
| Group | Form - Persistent | Form - Persistent | ✅ |
| Entry count (Form-Persistent) | 1 | 1 | ✅ |
| Entry count (Global-Persistent) | 0 | 0 | ✅ |
| Entry count (Global-Temporary) | 0 | 0 | ✅ |
| Name | FX_ImmediateSaveRetentionVar | FX_ImmediateSaveRetentionVar | ✅ |
| Description | (empty) | (empty) | ✅ |
| Value | Seed-Save-C | Seed-Save-C | ✅ |
| Persistent | True | True | ✅ |
| Global | False | False | ✅ |

**All 6 visible property fields + entry counts match.** The variable remained **exactly one entry** in Form - Persistent with no duplicate, rename, or second entry.

**Fields NOT visible in either screenshot:**
- **Version** (variable property): below Global in the property grid, not scrolled into view in either screenshot. The T2 record lists Version = *User version for user …* for both PRE-SAVE and POST-SAVE, but this value is **not captured in the saved screenshots**. The T3 live browser snapshot (taken after T2) independently shows Version = *User version for user …*, but this is a later observation, not a saved pre/post-Save pair.
- **Save button state** (evidence `28`): toolbar not visible in the crop.
- **Save button state** (evidence `29`): toolbar visible but button states not clearly resolvable at image resolution.

### T3 — T2 sequence reconciliation

The full T2 sequence, reconstructed from the record and evidence:

| Step | Action | Evidence |
|---|---|---|
| 0a | Pre-mutation guard: Designer live, scope=User, `inforSessionId=df74110f-…` | `15` |
| 0b | First **New** → `GetFormWizard` HTTP 400 (stale `rvtoken`); no Form created | `16` |
| 0c | Page reload (same `inforSessionId`); scope dialog (Scope: User) → OK | record narrative; no separate screenshot |
| 1 | **New** → Form Wizard Selection | `17` |
| 2 | Category = Classic | `18`, `19` |
| 3 | Wizard = Build from Scratch | `20` |
| 4 | Name = `FX_FormVariableLab03` | `21` |
| 5 | Save Template checked by default → **unchecked** | `22`, `23` |
| 6 | Finish → "Process Completed Successfully" → OK | `24` |
| 7 | Form open in Designer; Save disabled (clean) | `25` |
| 8 | Details → Variables tab (two empty Global groups) | `26` |
| 9 | Add → Name = `FX_ImmediateSaveRetentionVar` → OK | `27` |
| 10 | Set Value = `Seed-Save-C` | record narrative |
| 11 | PRE-SAVE baseline captured | `28` |
| 12 | **One ordinary Designer Save** | record narrative |
| 13 | POST-SAVE state captured | `29` |

**Exactly one ordinary Save** is attested by: (a) the record's explicit statement that the Save button was clicked exactly once; (b) evidence `29` showing the post-Save state; (c) the T3 live snapshot confirming Save/Regenerate/Undo/Redo all `[disabled]`. **No saved diagnostic** (network capture, button-state screenshot at sufficient resolution) independently proves the single Save click or excludes a second Save. The absence of a second Save is supported by the absence of any record of one and the clean post-Save state, but is not independently instrumented.

**No alternate or second save action** (Regenerate, second Save, or other save mechanism) is recorded or evidenced.

### T3 — Eight-question reconciliation

**Q1: Was exactly one Form created, and was Save Template unchecked?**

**Yes (per record + evidence).** Evidence `17`–`25` show a single wizard invocation: Form Wizard Selection → Category = Classic → Wizard = Build from Scratch → Name = `FX_FormVariableLab03` → Save Template **checked by default** (evidence `22`) → **unchecked** (evidence `23`) → Finish → "Process Completed Successfully" (evidence `24`) → Form open in Designer (evidence `25`). No second wizard invocation or second Form creation is recorded. The T1 preflight proved the target **absent (0/649)** before creation (evidence `11`, `13`).

**Q2: Was exactly one variable created?**

**Yes.** Evidence `26` shows the Variables tab with two empty groups (Global - Persistent, Global - Temporary) **before** the Add. Evidence `27` shows exactly one variable `FX_ImmediateSaveRetentionVar` in a new **Form - Persistent** group **after** the Add. Evidence `28` and `29` each show exactly one entry in Form - Persistent and zero in both Global groups. The T3 live snapshot confirms the same. No second Add is recorded.

**Q3: What were all visible definition fields and values before Save?**

From evidence `28` (PRE-SAVE baseline) — **only fields visible in the screenshot**:

| Property | Value |
|---|---|
| Group | Form - Persistent |
| Name | FX_ImmediateSaveRetentionVar |
| Description | (empty) |
| Value | Seed-Save-C |
| Persistent | True |
| Global | False |

**Version is NOT visible** in evidence `28` (below the scroll area). The T2 record lists Version = *User version for user …*, but this is not captured in the saved screenshot.

**Q4: Was exactly one ordinary Save performed, and what proved it was clean afterward?**

**Per the record, yes.** The record (T2 step 3) states the Save toolbar button was clicked exactly once. The post-Save clean state is attested by: (a) the record's statement that Save became `[disabled]` and Undo became `[disabled]`; (b) the T3 live snapshot independently confirming Save/Regenerate/Undo/Redo all `[disabled]`. **Limitation:** evidence `28` does not show the toolbar (cropped); evidence `29` shows the toolbar but the Save button state is not clearly resolvable at image resolution. No network diagnostic or high-resolution button-state screenshot independently proves the single Save click.

**Q5: What were all visible definition fields and values immediately after Save, and how did they compare?**

From evidence `29` (POST-SAVE) — **only fields visible in the screenshot**:

| Property | PRE-SAVE (evidence `28`) | POST-SAVE (evidence `29`) | Match |
|---|---|---|---|
| Group | Form - Persistent | Form - Persistent | ✅ |
| Name | FX_ImmediateSaveRetentionVar | FX_ImmediateSaveRetentionVar | ✅ |
| Description | (empty) | (empty) | ✅ |
| Value | Seed-Save-C | Seed-Save-C | ✅ |
| Persistent | True | True | ✅ |
| Global | False | False | ✅ |

**All 6 visible property fields match.** Entry counts also match (1/0/0). **Version is not visible in either screenshot** and cannot be compared from the saved evidence. The T3 live snapshot (post-T2) shows Version = *User version for user …*, but this is a single later observation, not a saved pre/post pair.

**Q6: Did the variable remain exactly one entry, with no duplicate or renamed entry?**

**Yes.** Evidence `27` (post-creation), `28` (PRE-SAVE), and `29` (POST-SAVE) each show exactly one entry in Form - Persistent (`FX_ImmediateSaveRetentionVar`) and zero entries in Global - Persistent and Global - Temporary. The T3 live snapshot confirms the same. No duplicate, rename, or second entry is visible in any saved evidence.

**Q7: Were any prohibited actions performed after the Form-creation step began?**

**No prohibited action is recorded or evidenced.** The T2 constraint-compliance section and the T2 "Stopped here" section enumerate all constraints. The T3 reconciliation confirms:
- No second Save, no Regenerate, no other save mechanism.
- No Form close/reopen, no new Designer client.
- No execution-time value read/set, no Form logic run.
- No scope switch, no preference-setting change.
- No deliberate global-object unload, IDO-metadata unload, or cache-clearing.
- No credential re-entry, Sign In-OK, reauthentication, browser restart, or deliberate session replacement.
- No modification or deletion of any existing `FX_` or non-`FX_` artifact.
- The single page reload (T2 step 0) occurred **before** any successful mutation (the first New had failed), preserved the same `inforSessionId`, and triggered no login dialog — it is not a prohibited session-establishment action.

**Q8: Was the same `inforSessionId` retained across the pre-creation reload?**

**Yes.** The T2 pre-mutation guard recorded `inforSessionId=df74110f-4b39-492d-abac-ddeabf14eb35` (evidence `15` context). After the failed New (evidence `16`) and the page reload, the URL still carried `inforSessionId=df74110f-4b39-492d-abac-ddeabf14eb35`. The current T3 snapshot confirms the same `inforSessionId` is still in the URL. No session replacement occurred at any point.

### T3 — AC-2 through AC-9 assessment (per brief definitions)

| AC | Brief description (abridged) | Status | Evidence / Missing evidence |
|---|---|---|---|
| AC-2 | Exactly one new User-scope classic BuildFromScratch Form `FX_FormVariableLab03` exists; **live inventory evidence proves exactly one case-insensitive target**; Save Template unchecked | **PENDING** | **Present:** T1 absence proof (0/649, evidence `11`, `13`); exactly one wizard creation (evidence `17`–`25`); Save Template unchecked (evidence `22`→`23`); Designer tab/URL/Properties show the target (evidence `25`, T3 snapshot). **Missing:** the AC requires "live inventory evidence proves exactly one case-insensitive target" — a **post-creation Select Form inventory re-count** showing exactly 1 match for `FX_FormVariableLab03` (case-insensitive). No such re-count was performed. The T1 pre-creation absence (0/649) + one wizard creation is a sound inference but is **not** the live inventory proof the AC requires. |
| AC-3 | Before Save, Details > Variables visibly contains exactly one `FX_ImmediateSaveRetentionVar` with Global=False, Persistent=True, Value=Seed-Save-C; every visible definition field recorded as baseline | **PASS** | Evidence `28` shows: Form-Persistent group with exactly 1 entry (`FX_ImmediateSaveRetentionVar`); Global-Persistent and Global-Temporary empty; property grid: Name=`FX_ImmediateSaveRetentionVar`, Description=(empty), Value=`Seed-Save-C`, Persistent=True, Global=False. All visible fields recorded. (Version not visible in screenshot; not required by AC since it is not a "visible" field in the saved evidence.) |
| AC-4 | Exactly one ordinary Designer Save after variable creation; no Regenerate or second Save; evidence proves clean state | **PASS (with limitation)** | Record states exactly one Save click. T3 live snapshot confirms Save/Regenerate/Undo/Redo all `[disabled]` (clean). **Limitation:** evidence `28` does not show the toolbar (cropped); evidence `29` shows the toolbar but Save button state is not clearly resolvable at image resolution. No network diagnostic independently proves the single Save click. The clean state is confirmed by the T3 live snapshot (independent, later observation) and the record narrative. |
| AC-5 | Immediately after Save, Details > Variables contains exactly one `FX_ImmediateSaveRetentionVar` and every recorded visible design-time definition field equals the AC-3 baseline | **PASS** | Evidence `29` shows: Form-Persistent with exactly 1 entry; property grid: Name, Description, Value, Persistent, Global all identical to evidence `28`. All 6 visible fields match. Entry counts match (1/0/0). |
| AC-6 | No Form close/reopen, explicit unload/cache-clear, User Preferences action, runtime Form execution, or second save mechanism | **PASS** | Record T2 constraint-compliance section + T2 "Stopped here" section explicitly document the absence of all listed actions. No evidence contradicts. T3 Q7 analysis confirms. |
| AC-7 | Session-establishment only before first mutation; no login/Sign In/reauth/logout/restart/session-replacement after creation began | **PASS** | All session-establishment steps (evidence `05`–`08`) occurred during T1, before any mutation. T2's page reload (step 0) was pre-mutation (first New had failed), same `inforSessionId`, no login dialog. No session-establishment action after creation began. |
| AC-8 | Record classifies only observed immediate design-time retention; no close/reopen, runtime, cache, database-durability, or storage-provenance claim | **PASS** | Record classifies the result as **observed** (not verified, not replay_verified). The T2 "Stopped here" section and the knowledge-state section explicitly disclaim close/reopen, runtime, cache, and durable-storage claims. No over-claim is present. |
| AC-9 | Worktree changes confined to EXP-013 record + `evidence/EXP-013/`; no recipe, AGENTS.md, environment, other experiment, or non-FX_ artifact modified | **PASS** | `git status --porcelain` shows only: `?? evidence/EXP-013/` and `?? experiments/EXP-013-immediate-form-variable-definition-retention-acros.md` (both untracked). `git diff --stat` is empty (no tracked files modified). No other file was touched. |

### T3 — Evidence gaps

1. **Post-creation Select Form inventory re-count (AC-2):** No post-creation inventory re-count was performed. The AC-2 requirement for "live inventory evidence proves exactly one case-insensitive target" is **not met** by the saved evidence. The T1 pre-creation absence (0/649) + one wizard creation is a sound inference but is not the direct inventory proof the AC requires. **Exact missing evidence:** a post-creation Select Form dialog screenshot (or store scan) showing exactly 1 match for `FX_FormVariableLab03` (case-insensitive) in the live inventory.
2. **Version field not captured in screenshots:** The variable's Version property is not visible in either evidence `28` or `29` (below the scroll area in the property grid). The T2 record lists Version = *User version for user …* for both PRE-SAVE and POST-SAVE, but this is not captured in the saved screenshots. The T3 live snapshot (post-T2) shows the same Version value, but this is a single later observation, not a saved pre/post pair. **Exact missing evidence:** a screenshot of the variable property grid scrolled to show the Version field, taken both before and after the Save.
3. **Save button state not clearly resolvable in evidence `29`:** The toolbar is visible in evidence `29` but the individual button enabled/disabled states are not clearly resolvable at the image resolution. The clean state is confirmed by the T3 live snapshot and the record narrative, but not by the saved screenshot alone. **Exact missing evidence:** a high-resolution screenshot of the toolbar showing Save `[disabled]` immediately after the Save.
4. **`GetFormWizard` 400 / stale `rvtoken` attribution (evidence `16`):** The screenshot shows a generic "Error" dialog with an empty body and an OK button. The "HTTP 400 (stale `rvtoken`)" attribution was observed live during T2 via Playwright network inspection but is **not** captured in a separate saved diagnostic file. **Exact missing evidence:** a saved network diagnostic (`.md` or `.json`) capturing the `GetFormWizard` request/response showing HTTP 400 and the `rvtoken` parameter.
5. **No T2 network diagnostic files:** Evidence 16–29 are all `.png` screenshots. No `.md`/`.json` network captures were saved for T2 (unlike T1, which saved `03`, `04`, `13`, `14` as `.md`). The T2 narrative in the record is the sole record of the network-level observations (400/rvtoken).

### T3 — Record corrections

The T2 narrative is accurate as written. The following corrections/clarifications are made to the T3 section (replacing the initial T3 draft):

1. **AC numbering corrected** to match the brief definitions (the initial T3 draft had shifted AC numbers).
2. **AC-2 status changed from "PASS (inferred)" to PENDING** — the AC requires "live inventory evidence proves exactly one case-insensitive target," which is not met by the saved evidence. The exact missing evidence is stated.
3. **Version field removed from the screenshot-based comparison tables** — Version is not visible in either evidence `28` or `29`. The T2 record's Version values are retained in the T2 narrative but are not supported by the saved screenshots.
4. **Evidence `28` identified as a cropped screenshot** (Details panel only; toolbar not visible).
5. **Evidence `29` Save button state noted as not clearly resolvable** at image resolution.
6. **AC-9 assessment added** (was not in the initial T3 draft).

### T3 — Repository / worktree status (read-only)

- `git status --porcelain`: `?? evidence/EXP-013/` and `?? experiments/EXP-013-immediate-form-variable-definition-retention-acros.md` (both untracked).
- `git diff --stat`: empty (no tracked files modified).
- **AC-9 is satisfied:** experiment-attributable changes are confined to the EXP-013 record and `evidence/EXP-013/`. No recipe, AGENTS.md, environment, other experiment, existing FX_ artifact, or non-FX_ artifact was modified.
- **Nothing further is needed for AC-9.** The worktree is clean for EXP-013 purposes.

### T3 — Knowledge state

- The immediate post-Save retention of the `Global=False` / `Persistent=True` Form-variable definition is **observed** (single execution, single ordinary Save, immediate field-by-field comparison of all 6 visible fields = all unchanged). It is **not** `verified` (requires repeatable execution + persistence verification) and is **not** `replay_verified`.
- This is an **immediate post-Save** observation only. It does **not** establish close/reopen persistence, execution-time value retention, cache behavior, durable storage, or data provenance.

### T3 — Stopped here (per instruction, read-only reconciliation complete)

No mutation, Save, close/reopen, login, reload, or session replacement was performed during T3. The Form `FX_FormVariableLab03` remains **open and clean** (Save disabled) in the Designer, scope **User**, `inforSessionId=df74110f-…`. The T2 results stand as recorded. No new semantic Mongoose evidence was created. The only file modified is the EXP-013 record (this T3 section).

## T5 — FINAL READ-ONLY AUDIT (2026-10-03)

T5 is a **strictly read-only** final audit. No mutation, Save, close/reopen, login, Sign In/OK, logout, reload/restart, or session replacement was performed. The following read-only inspections were conducted:

### T5 — AC-2 post-creation inventory check: BLOCKED

The Web Client (Tab 0) session had **expired** by the time T5 began. When the Select Form dialog was opened, a **"Session Expired"** alert appeared. Dismissing the alert triggered the **config-group Sign In dialog** (config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`). Per the T5 instruction, **Sign In/OK is prohibited** (session establishment is allowed only before the first Mongoose artifact mutation; `FX_FormVariableLab03` creation has already occurred). The Sign In dialog could not be dismissed (Escape had no effect). **The AC-2 post-creation inventory re-count cannot be completed in this task.**

**AC-2 remains PENDING.** The exact missing evidence is unchanged: a post-creation Select Form dialog screenshot (or store scan) showing exactly 1 match for `FX_FormVariableLab03` (case-insensitive) in the live inventory. This requires a live Web Client session, which cannot be re-established under the T5 constraints.

### T5 — Designer state verification (read-only)

The Designer (Tab 4) was inspected read-only:

- **`inforSessionId`:** `df74110f-4b39-492d-abac-ddeabf14eb35` (identical to T2 — session **not** replaced).
- **Form tab:** `FX_FormVariableLab03` (selected).
- **Toolbar:** Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, Redo `[disabled]` — **clean**.
- **Variables tab (selected):** one variable in **Form - Persistent**: `FX_ImmediateSaveRetentionVar`. Global - Persistent and Global - Temporary groups are empty.
- **Variable properties:** Name = `FX_ImmediateSaveRetentionVar`, Description = (empty), Value = `Seed-Save-C`, Persistent = True, Global = False, Version = *User version for user …*.
- **Properties panel:** Name = `FX_FormVariableLab03`, Version = *User version for user …*, Device Type = Default, Form Type = Normal, Is Master = True.
- **Status bar:** `[ ScopeType: User / ScopeName: <username> ]`.

**Screenshot captured:** evidence `30` (`30-t5-designer-state-clean.png`).

**Result:** `FX_FormVariableLab03` remains **open, clean, User scope**, with exactly one `FX_ImmediateSaveRetentionVar` showing the immediate post-Save values. No selection or definition was changed.

### T5 — Network history inspection (read-only)

The browser's retained network request history was inspected read-only for save-related requests associated with the T2 mutation window.

**Findings:**

- **Exactly ONE** save-related request was found: request #211, **POST** `DesignerSession/SaveChanges`, **HTTP 200**.
- **Response body:** `{"Success":true,"Message":"Form [FX_FormVariableLab03] and global object(s) were saved.","Payload":[]}`
- **Response timestamp:** Sat, 03 Oct 2026 04:05:14 GMT.
- **`inforSessionId` in referer:** `df74110f-4b39-492d-abac-ddeabf14eb35` (identical to T2).
- **No Regenerate Form request, no second SaveChanges request, and no other save-mechanism request** was found in the retained history.

**Diagnostic file written:** evidence `31` (`31-t5-network-save-verification.md`).

**Result:** The retained network history **proves exactly one ordinary Designer Save** was performed for `FX_FormVariableLab03` during the T2 mutation window, and it succeeded. No Regenerate or second Save exists in the history. **AC-4 is now fully supported by independent network evidence** (in addition to the record narrative and clean-state observation).

### T5 — Git / worktree audit (read-only)

- `git status --porcelain`: `?? evidence/EXP-013/` and `?? experiments/EXP-013-immediate-form-variable-definition-retention-acros.md` (both untracked).
- `git diff --stat`: empty (no tracked files modified).
- `git ls-files --others --exclude-standard`: 31 evidence files under `evidence/EXP-013/` + the record file.
- **Baseline comparison** (against `evidence/EXP-013/04-git-baseline.md`): HEAD is still `b945dc1` (unchanged). The worktree was clean at baseline; the only additions are the EXP-013 record and `evidence/EXP-013/`.
- **AC-9 is satisfied:** experiment-attributable changes are confined to the EXP-013 record and `evidence/EXP-013/`. No recipe, AGENTS.md, environment, other experiment, existing FX_ artifact, or non-FX_ artifact was modified.

### T5 — Final AC-1 through AC-9 status

| AC | Status | Evidence |
|---|---|---|
| AC-1 | **PASS** | T1: session established (evidence `05`–`08`); server-backed liveness (Select Form loaded 649-form inventory, evidence `09`); scope=User (evidence `08`, `12`); target absent 0/649 (evidence `11`, `13`). |
| AC-2 | **PENDING** | T1 absence (0/649) + one wizard creation + Save Template unchecked (evidence `17`–`25`). **Missing:** post-creation Select Form inventory re-count showing exactly 1 case-insensitive match. **Blocked in T5:** Web Client session expired; Sign In/OK prohibited. |
| AC-3 | **PASS** | Evidence `28`: exactly 1 variable in Form-Persistent; Name, Description, Value, Persistent, Global all visible and recorded. |
| AC-4 | **PASS** | Evidence `31` (network diagnostic): exactly one POST `SaveChanges` (request #211), HTTP 200, `Success: true`, no Regenerate or second Save. T5 live snapshot: Save/Regenerate/Undo/Redo all `[disabled]` (clean). |
| AC-5 | **PASS** | Evidence `29`: exactly 1 variable; all 6 visible fields identical to evidence `28`. T5 live snapshot confirms. |
| AC-6 | **PASS** | Record T2 constraint-compliance + T2 "Stopped here" + T3 Q7: no close/reopen, no unload/cache-clear, no preferences, no runtime execution, no second save. |
| AC-7 | **PASS** | All session-establishment actions (evidence `05`–`08`) occurred in T1, before any mutation. T2 page reload was pre-mutation, same `inforSessionId`, no login. No session action after creation began. |
| AC-8 | **PASS** | Record classifies the result as **observed** only. Explicit disclaimers for close/reopen, runtime, cache, durable storage, and storage provenance. No `replay_verified` classification. |
| AC-9 | **PASS** | `git status --porcelain`: only `?? evidence/EXP-013/` + `?? experiments/EXP-013-…md`. `git diff --stat`: empty. HEAD unchanged (`b945dc1`). |

### T5 — Final observed finding

**Immediate design-time variable-definition retention across one ordinary Save: OBSERVED.** A `Global=False` / `Persistent=True` Form-variable definition (`FX_ImmediateSaveRetentionVar`, `Value=Seed-Save-C`) retained all six visible design-time fields (Group, Name, Description, Value, Persistent, Global) immediately after exactly one ordinary Designer Save. This is an **immediate post-Save** observation only. It does **not** establish close/reopen persistence, execution-time value retention, cache behavior, durable database storage, or storage provenance.

### T5 — Remaining acceptance gap

**AC-2 is the only remaining gap.** It requires "live inventory evidence proves exactly one case-insensitive target." The T1 pre-creation absence (0/649) + exactly one wizard creation is a sound inference, but the AC specifically requires a **post-creation live inventory re-count**. This was attempted in T5 but **blocked** by the Web Client session expiry (Sign In/OK is prohibited post-mutation). The exact missing evidence: a post-creation Select Form dialog screenshot or store scan showing exactly 1 match for `FX_FormVariableLab03` (case-insensitive).

### T5 — Evidence files written

- `evidence/EXP-013/30-t5-designer-state-clean.png` — T5 read-only Designer state: Form `FX_FormVariableLab03` open, clean, User scope, variable intact.
- `evidence/EXP-013/31-t5-network-save-verification.md` — T5 read-only network diagnostic: exactly one `SaveChanges` request (POST, 200, `Success: true`), no Regenerate or second Save.

### T5 — Stopped here (per instruction, final read-only audit complete)

No mutation, Save, close/reopen, login, Sign In/OK, logout, reload/restart, or session replacement was performed during T5. The Form `FX_FormVariableLab03` remains **open and clean** (Save disabled) in the Designer, scope **User**, `inforSessionId=df74110f-…`. The T2 results stand as recorded. The only files written are evidence `30`, evidence `31`, and this T5 section of the EXP-013 record.