# EXP-014 — Form Variable Definition Recovery Across Ordinary Designer Close/Reopen (FX_FormVariableLab04)

Status: **T1 preflight COMPLETE — AC-1 FULLY PROVEN.** A supported live Mongoose/Web Client session was established/confirmed without exposing credential values. Server-backed liveness was proven by the Web Client **Select Form** loading the full **650-form** inventory. The Designer editing scope was **confirmed live as User** (the "Identify Your Editing Scope" dialog shows **Scope: User** and the status bar reads `[ ScopeType: User / ScopeName: <username> ]`). The target `FX_FormVariableLab04` was **proven absent** (exact + case-insensitive) via the live Select Form inventory: **0 exact, 0 case-insensitive Name matches, 0 matches in any string field, 0 Caption collisions** across the full 650-record store, with a positive control (`UsersMaint` → 2 rows) confirming the Name filter works. **No Form or variable was created; no Mongoose artifact was created, modified, or deleted.** `FX_FormVariableLab04` was **NOT created** in T1.
Date: 2026-10-03
Mode: LEARNING MODE — T1 preflight (session establishment permitted; strictly read-only; no mutation).
Run: cycle 2, task T1 (preflight / AC-1).

## Objective

Using one new User-scope classic BuildFromScratch Form `FX_FormVariableLab04`, establish all preconditions, create exactly one Form variable named `FX_CloseReopenRetentionVar` with `Global=False`, `Persistent=True`, and `Value=Seed-Close-D`, record every visible design-time definition field, perform exactly one ordinary Designer Save, verify the definition immediately after Save, then close the clean Form through the ordinary Designer Form-tab close control and reopen the same User-scoped Form through the supported recent-forms path. Compare every recorded visible variable-definition field after reopen to the saved baseline. This experiment tests only UI-level recovery of the design-time variable definition across that ordinary Form-tab close/reopen boundary.

In scope (T1 only): inspect browser/environment state; if the inherited session is not demonstrably live, establish it via the documented supported sign-in flow (no credential exposure); prove server-backed liveness; confirm Designer editing scope is User; prove `FX_FormVariableLab04` is absent (exact + case-insensitive) via the live Select Form/inventory surface; record any Caption collision separately (not as a Name match); capture a repository/worktree baseline; create this record.

Out of scope (all tasks): replaying/repairing EXP-004, EXP-011, EXP-012, or EXP-013, or treating EXP-014 as a replay of EXP-013; creating the Form or variable (T1 is read-only); testing runtime value initialization/mutation/retrieval or runtime persistent-variable semantics; testing `Persistent=False`, `Global=True`, temporary variables, or a second comparison variable; testing explicit global-object/metadata unloading, cache-clearing, or preference-dependent cache behavior; testing logout/login, session replacement, browser restart, or a newly launched Designer client as the lifecycle boundary; testing any save path other than one ordinary Designer Save; testing Caption/Description/components/collections/bindings/validators/handlers/scripts/data sources/IDOs/localized Strings/portals/Runtime Builder/Responsive Form Builder/FormSync; Site/Group/Vendor Default editing scope; modification of any existing `FX_` artifact; physical Forms-store provenance, direct database inspection/mutation, undocumented APIs, or internal session manipulation; any claim that close/reopen recovery proves database durability, cache eviction, runtime-value persistence, storage provenance, or behavior across another session or client.

## Starting state / preflight facts (2026-10-03, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Mongoose host `mgapse1ap.mtmgf.se1.mongoosepaas.io`; portal app `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`; Web Client iframe name `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`. Designer tab URL carries `inforSessionId=…~4909ea8d-8f55-4d58-94eb-11b574f3a28d`.
- Browser state at preflight start (inspected first): a single tab (Tab 0) at the portal Mongoose Web Client app. The Web Client UI shell was loaded (user badge + toolbar + Explorer). A **Select Form** dialog was open with the filter textbox showing `FX_FormVariableLab04` but the grid still reflecting a prior `UsersMaint` filter (2 rows) — the filter textbox value and the live grid were out of sync, so the inventory was re-run cleanly (see method).
- Repository/worktree baseline: branch `exp/EXP-014`, HEAD `fb6c318` (`harness: context/briefs update`), worktree clean apart from the new `evidence/EXP-014/` directory (evidence `05`).

## Session establishment / confirmation (T1 — permitted before first mutation)

The T1 instruction permits establishing/confirming the session before any mutation. The documented supported flow (EXP-006 T8 / EXP-012 T1 / EXP-013 T1) was used; no credential value was read, printed, logged, or screenshotted (the `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD` / `SECRET_MONGOOSE_TENANT` placeholders were used; Playwright MCP substituted the real values).

**Establishment ordering (AC-9 anchor) — every step occurred during the T1 preflight, i.e., before any Mongoose artifact mutation (T1 performs none):**

1. **Portal SSO login.** The portal CloudIdentities sign-in form was completed via the secret placeholders; **Sign in** clicked. Portal loaded; a portal-notification banner dismissed.
2. **Web Client config-group Sign In.** The Web Client config-group Sign In dialog (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) was presented; **OK** clicked. The Web Client UI shell loaded (user badge + toolbar + Explorer) (evidence `01`).
3. **Designer opened via the supported split-button path.** From the Web Client toolbar, the **Designer** split button was clicked, opening a fresh Designer tab (Tab 1, new `inforSessionId` `4909ea8d-…`). The Designer session was **live**: the **"Identify Your Editing Scope"** dialog appeared with **Scope: User** and the status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `04`). The dialog was **left open** (not clicked OK) — no mutation, no scope switch.

**Net result:** a live Mongoose session was established/confirmed (Designer live with scope=User; Web Client Select Form loading the full 650-form inventory). No credential value was exposed at any step. All session-establishment steps occurred **before** any mutation (T1 has none).

## Preflight method (T1)

1. Inspected repository state and references (read-only, not modified): `AGENTS.md`, `tools/learning-harness/briefs/EXP-014.brief.json` (the authoritative brief), `experiments/EXP-013-*.md` (closest prior — established the pre-Save variable workflow), `recipes/forms/create-basic-form.md` (verified recipe for T2+), `environments/current-environment.md`.
2. Inspected current browser state (single Web Client tab; Select Form dialog open with out-of-sync filter). Screenshots: Web Client signed-in (evidence `01`), Select Form positive control (evidence `02`).
3. **Server-backed liveness check:** cleared the Select Form filter textbox and re-applied the filter, loading the **full 650-form inventory** store (`grid-1136`, `remoteTotal = 0`) — an observable, server-backed confirmation that the Web Client session is live (the form-store round-trip succeeded).
4. **Designer scope confirmation:** the Designer **"Identify Your Editing Scope"** dialog showed **Scope: User** and the status bar `[ ScopeType: User / ScopeName: <username> ]` (evidence `04`). The Designer was clean (Save/Regenerate/Undo/Redo all disabled; no form open).
5. **Target absence proof (live Select Form / inventory surface):**
   - **Positive control:** filter `UsersMaint` (Name, case-insensitive, contains) → grid correctly showed `UsersMaintQuery` and `UsersMaint`; store count after filter = **2** (evidence `02`).
   - **Full-store scan (read-only):** inspected the Select Form grid's ExtJS store (`grid-1136`, client-side, `remoteTotal = 0`) — it holds **650** records (the full inventory). A case-insensitive scan of **every string field of every record** for `fx_formvariablelab04` returned **0 matches**. A prefix probe for `fx_formvariablelab` returned exactly **two** unique forms — `FX_FormVariableLab03` (EXP-013 leftover) and `FX_FormVariableLab02` (EXP-012 leftover). A separate Caption-collision check (`it.data.text`) for `fx_formvariablelab04` returned **0** (evidence `06`).
   - **Target search (live UI filter):** cleared the filter, typed `FX_FormVariableLab04` (slowly, to trigger the live filter) → the grid was **empty** (0 rows); store count after filter = **0** (evidence `03`).
   - **Conclusion:** `FX_FormVariableLab04` is **absent** (exact + case-insensitive) from the full 650-form inventory, with **0 Caption collisions**.
6. Audited the worktree starting state (git status/log; evidence `05`).

## T1 requirement-to-evidence mapping (AC-1)

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Inspect references (brief, AGENTS.md, EXP-013, recipe, environment) — no modification | **DONE** — all read; none modified | this file |
| 2 | Inspect current browser/page state; record existing tabs/instances | **RECORDED** — single Web Client tab; Select Form dialog open with out-of-sync filter | tab list; evidence `01`, `02` |
| 3 | Establish/confirm a supported live session (no credential exposure) | **DONE** — portal SSO login + config-group Sign In + Designer split-button; no credential value read/printed/logged/screenshotted | evidence `01`, `04` |
| 4 | Prove server-backed liveness (observable Web Client check) | **DONE** — Web Client Select Form loaded the full **650-form** inventory (server-backed form-store round-trip succeeded) | evidence `03`, `06`; store count 650 |
| 5 | Prove current Designer editing scope is User (read-only visible indicator / supported inspection; no preferences) | **DONE (live)** — Designer "Identify Your Editing Scope" dialog **Scope: User** + status bar `[ ScopeType: User / ScopeName: <username> ]` | evidence `04` |
| 6 | Prove `FX_FormVariableLab04` absent (exact + case-insensitive) via live Select Form inventory; record counts; record Caption collisions separately | **DONE** — Select Form Name filter (case-insensitive, contains) → **0 rows**; full-store case-insensitive scan of all **650** records → **0 matches** in any field; **0 Caption collisions**; positive control `UsersMaint` = 2 confirms the filter works | evidence `02`, `03`, `06`; store counts 650 / 0 |
| 7 | Capture initial repository/worktree baseline (for AC-11) | **CAPTURED** — branch `exp/EXP-014`, HEAD `fb6c318`, clean worktree at start | evidence `05` |
| 8 | Create `evidence/EXP-014/` and this record; do NOT create the Form or variable | **DONE** — screenshots `01`–`04` + diagnostics `05`, `06`; this record; target **NOT** created | this file; `evidence/EXP-014/` |

## Repository / worktree starting state (T1)

- Worktree **is** a git repository: branch **`exp/EXP-014`**, HEAD **`fb6c318`** (`harness: context/briefs update`); recent history: `9e519d9 Record EXP-009 shadow grading evidence`, `166c9af Add frozen worker shadow tests…`, `d4ed81f Document switching between Strata and TabbyAPI`, `8e570a5 Select Strata as the factory OpenCode worker`.
- **Worktree status at preflight start:** clean — `git status --porcelain` showed only `?? evidence/EXP-014/` (the new evidence dir) before this preflight wrote anything.
- **New in this preflight (T1 window):** only `evidence/EXP-014/*` (screenshots + diagnostics) and this record file.
- **NOT modified by this preflight (all predate the run):** `AGENTS.md`, `opencode.json`, `README.md`, `.gitignore`, `environments/current-environment.md`, every file under `recipes/`, `tools/`, and all other `experiments/EXP-00x-*.md` / `evidence/EXP-00x*/` files.
- **Conclusion:** worktree starting state is clean for EXP-014 purposes; no recipe, environment, AGENTS.md, or prior experiment file was modified by this preflight. EXP-014-attributable changes are confined to this record and `evidence/EXP-014/`.

## Observations

- **The Web Client session is live** (Select Form loaded the full 650-form inventory; user badge + config-group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` present).
- **The Designer session is live and scope=User** (the "Identify Your Editing Scope" dialog returned Scope: User; status bar `[ ScopeType: User / ScopeName: <username> ]`). The Designer opened via the supported Web Client split-button path with a fresh `inforSessionId` (`4909ea8d-…`).
- **The Select Form Name filter is a live, case-insensitive, contains filter** over the full 650-form inventory store (confirmed by the `UsersMaint` positive control and the store record counts 650/0). It is a valid exact + case-insensitive absence surface.
- **The Select Form filter textbox and the live grid can be out of sync** when the filter value is set programmatically without re-triggering the filter; the inventory must be re-run (clear + re-apply, or type slowly) to get a trustworthy live count. This run re-ran it cleanly.
- **No Mongoose artifact was created, modified, or deleted; no preference setting was opened/changed/saved; no deliberate unload or cache-clearing command was invoked; no Form was opened/created/saved; no scope switch was performed; no second save mechanism was used.**

## Evidence (under `evidence/EXP-014/`)

- `01-preflight-webclient-signed-in.png` — Web Client UI shell after config-group Sign In (user badge + toolbar + Explorer).
- `02-select-form-positive-control-usersmaint.png` — Web Client **Select Form** with filter `UsersMaint`: **2 rows** (`UsersMaintQuery`, `UsersMaint`) — positive control confirming the Name filter works.
- `03-select-form-target-filter-empty.png` — Web Client **Select Form** with **Filter By = Name**, filter `FX_FormVariableLab04`, **empty grid** (0 rows) — target absent.
- `04-designer-scope-dialog-user.png` — Designer **"Identify Your Editing Scope"** dialog: **Scope: User**, User `<username>`; status bar `[ ScopeType: User / ScopeName: <username> ]`; Designer clean (Save/Regenerate/Undo/Redo disabled).
- `05-git-baseline.md` — repository/worktree baseline (branch `exp/EXP-014`, HEAD `fb6c318`, clean worktree).
- `06-select-form-full-store-scan-target-absent.md` — read-only full-store absence scan: **650** records, **0** exact / **0** case-insensitive Name matches, **0** matches in any string field, **0** Caption collisions; positive control `usersmaint` = 2; prefix `fx_formvariablelab` = only `FX_FormVariableLab03` and `FX_FormVariableLab02`.

## Knowledge state (as of T1)

- The Web Client session is **live** (Select Form loaded the full 650-form inventory): **observed** (T1, live read-only server round-trip).
- The Designer editing scope is **User** (live confirmation via the scope dialog + status bar): **observed** (T1).
- The Web Client **Select Form Name filter** is a live, case-insensitive, contains filter over the full **650-form** inventory store: **observed** (T1).
- `FX_FormVariableLab04` is **absent** (exact + case-insensitive) from the full 650-form inventory (0/650 full-store scan; 0 Caption collisions; positive control confirmed): **observed** (T1, live Select Form store).
- The only `FX_FormVariableLab*` forms present are `FX_FormVariableLab03` (EXP-013 leftover) and `FX_FormVariableLab02` (EXP-012 leftover): **observed** (T1).
- **The Select Form filter textbox and live grid can be out of sync** when the filter value is set programmatically without re-triggering the filter; re-run the filter (clear + re-apply / type slowly) for a trustworthy live count: **observed** (T1).

## Open questions / blockers

- **AC-1 is FULLY PROVEN (no blocker).** A supported live session is established/confirmed; server-backed liveness is proven (650-form Select Form inventory load); Designer editing scope is proven live as **User**; `FX_FormVariableLab04` is proven **absent** (0 exact, 0 case-insensitive Name matches, 0 matches in any field, 0 Caption collisions) across the full 650-record live inventory, with a positive control confirming the filter works.
- **Not yet `verified` (per the knowledge-trust rules):** the absence/scope/liveness results are **observed** from a single preflight execution. Promotion to `verified` requires repeatable execution + persistence verification, which is out of scope for T1.
- **Constraint reminder for T2:** once `FX_FormVariableLab04` creation begins, no credential re-entry / Sign In-OK / deliberate reauthentication / logout / browser restart / deliberate session replacement is permitted; if the session expires after the first mutation, stop and record the blocker. No second save mechanism, no form-regeneration command, no deliberate global-object/metadata unload or cache-clearing command, no preference-setting change. Prove the exactly-one inventory state **immediately after Form creation while the Web Client is live**, before variable mutation (per the brief's evidence-ordering note).
- Context: EXP-013 (observed, non-accepted) proved a `Global=False`/`Persistent=True` Form-variable definition survived the **immediate moment after one ordinary Save**, but its post-creation inventory requirement became unprovable after the Web Client session expired. EXP-014 tests the **next distinct lifecycle boundary** — whether the saved design-time variable definition is recovered after one ordinary Designer Form-tab **close/reopen** — and must prove the exactly-one inventory state immediately after creation while the Web Client is live. These are distinct hypotheses and must not be assumed equivalent to the EXP-004 negative result.

## T1 — Stopped here (per instruction, after the preflight / AC-1)

Did **not** create `FX_FormVariableLab04` or `FX_CloseReopenRetentionVar` or any other Form/variable; did **not** edit any Form property; did **not** perform any Designer Save or use any second save mechanism; did **not** invoke any deliberate global-object/metadata unload or cache-clearing command; did **not** open, change, or save any preference setting; did **not** modify any existing `FX_` Form or non-`FX_` artifact; did **not** switch scope. Session establishment (portal SSO login + config-group Sign In + Designer split-button) **was** performed, as explicitly permitted by the T1 instruction, with no credential value exposed, and **all** of it occurred **before** any mutation (T1 performs none). **Next task (T2) is UNBLOCKED** and may proceed to create `FX_FormVariableLab04`.

## T3 — partial execution then context-limit failure (observed via T4 reconciliation)

T3 (worker task) began the creation sequence and failed with `APIError: prompt + max tokens exceeds context` at 2026-10-03T14:22:20Z. Its partial output plus evidence files `07`–`14` show it reached: wizard selection (classic BuildFromScratch), wizard page 1 (Name `FX_FormVariableLab04`), page 2 with **Save Template unchecked**, process completed successfully, Form created in Designer, Select Form **exactly-one** after creation while Web Client live, Variables tab empty, then variable creation. It did **not** reach setting `Value=Seed-Close-D`, the ordinary Save, close, or reopen.

## T4 — Reconciliation (cycle 4, strictly read-only; no Mongoose mutation)

Because T3 failed mid-sequence, T4 first reconciled the preserved browser/Mongoose/repository state before any further action (full detail: evidence `16-reconciliation-state.md`; screenshot `15-reconcile-designer-variables-tab.png`):

- **Designer (Tab 1, same session `4909ea8d-…`) is live** with **`FX_FormVariableLab04` OPEN** (Form-tab close control present). Status bar `[ ScopeType: User / ScopeName: <username> ]`; Form Properties Version = `User version for user <username>` → intended User-scoped Form.
- **Exactly one variable** `FX_CloseReopenRetentionVar` exists under `Form - Persistent` (`Global - Persistent`/`Global - Temporary` groups empty). Visible fields: Name=`FX_CloseReopenRetentionVar`, Description=empty, **Value=EMPTY**, Persistent=`True`, Global=`False`, Version=`User version for user <username>`.
- **Designer dirty:** toolbar `Save` enabled (unsaved in-session variable change pending).
- **No ordinary Designer Save has occurred:** Designer request history contains `FormWizard/GetFormWizard`, `FormsApi/GetForm` (wizard creation, body `runFormSpec=WSFormWizardClassicBuildFromScratch`), `Designer/Form/GetFormDesigner`, `Designer/FormObject/GetObjectDesigner` — **no save endpoint**; Web Client history shows only `GetExplorerFolder`/`GetAllForms` loads.
- **Session not expired** (both tabs live; badge + inventory loads current).
- **Evidence audit:** 15 files present with real byte sizes — T1 `01`–`06`, T3 `07`–`14`, T4 `15`–`16`. Repository: only `?? evidence/EXP-014/` + the EXP-014 record; HEAD `fb6c318` unchanged.
- **Reconciled resumable position:** Form creation DONE; post-creation exactly-one inventory DONE (evidence `13`); variable creation DONE; **Value NOT set**; Save NOT done; close/reopen NOT done.
- **No recreation performed** (Form and variable already exist); no Save/close/reopen/reauthentication/preferences/unload/runtime logic performed during reconciliation.

**Knowledge state (T4 reconciliation):** the above live-state facts are **observed** (T4, read-only inspection of preserved state).

**Next permitted action (T4+):** set `FX_CloseReopenRetentionVar` `Value=Seed-Close-D` in the open Variables tab, record the full pre-Save baseline, then exactly one ordinary Designer Save and immediate post-Save verification.

## T5 — Value set, AC-3 baseline, one ordinary Save, post-Save verification (cycle 5)

**T5 re-inspection (before mutation):** all T4 reconciliation facts re-confirmed live — Form open, User scope (`[ ScopeType: User / ScopeName: <username> ]`), exactly one variable, Value empty, Persistent=True, Global=False, Designer dirty (Save enabled), no `SaveChanges` request yet.

**Value edit:** selected the `Value` property row cell (`mg-underEdit`), typed `Seed-Close-D` into the row edit textbox, committed with Enter; cell committed (`x-grid-item-focused`, text `Seed-Close-D`). Evidence `17`, `18`.

**AC-3 pre-Save baseline (every visible field):** Name=`FX_CloseReopenRetentionVar`; Description=empty; Value=`Seed-Close-D`; Persistent=`True`; Global=`False`; Version=`User version for user <username>`. Exactly one variable under `Form - Persistent`; `Global - Persistent`/`Global - Temporary` empty (evidence `19`).

**Ordinary Designer Save (exactly one):** clicked the Designer toolbar **Save** button. Network evidence (evidence `23`): exactly **one** save request — `POST /Designer/DesignerSession/SaveChanges` → **HTTP 200**, body `{"formId":159}`, response `{"Success":true,"Message":"Form [FX_FormVariableLab04] and global object(s) were saved."}`. No Regenerate Form, no alternate save, no second Save.

**Designer returned clean:** post-Save toolbar `Save`/`Regenerate Form`/`Undo`/`Redo` all **disabled**.

**Immediate post-Save verification (before any close):** re-read the Variables property tree — exactly one `FX_CloseReopenRetentionVar` remains; **every field matches the AC-3 baseline exactly** (Name/Description/Value/Persistent/Global/Version; evidence `20`, `21`, `22`).

**AC-2 evidence (T3 files):** `07`–`13` prove wizard selection → creation → **exactly-one** Select Form inventory state while Web Client live; network `FormsApi/GetForm` (`runFormSpec=WSFormWizardClassicBuildFromScratch`) corroborates creation-not-save.

**Prohibited-action audit (T5):** no login/reauthentication/logout/session replacement/browser restart; no preferences; no unload/cache action; no runtime Form execution; no alternate save; no second Save; **no close/reopen performed**.

**Knowledge state (T5):** Value commit, one successful ordinary Save (`Success:true`), Designer-clean return, and exact post-Save field match: **observed** (T5, single execution).

**Stopped per instruction:** Form remains **open and clean**; close/reopen NOT performed yet. **Next permitted action:** close `FX_FormVariableLab04` once via its ordinary Form-tab close control, then reopen once via the supported Designer Form-menu recent-forms path and compare all fields to the saved baseline.

## T6 — Close / reopen boundary: OBSERVED NEGATIVE (cycle 6)

**Pre-close re-inspection (all T5 facts re-confirmed):** Form open, User scope, clean, exactly one variable with every field equal to the AC-3 baseline (evidence `24`), exactly one `SaveChanges` in history (no second Save). Evidence `25`.

**Close (exactly once):** clicked the ordinary Form-tab `closable FX_FormVariableLab04` control while clean. **No unsaved-change prompt appeared** (as expected). Form-tab tablist empty — Form no longer open (evidence `26`).

**Reopen (exactly once, supported recent-forms path):** Designer **Form** menu recent-forms list showed `FX_FormVariableLab04` first (evidence `27`); clicked it once; URL gained `&MGForm=FX_FormVariableLab04`; load request `POST /Designer/Form/GetFormDesigner` `{"form":"FX_FormVariableLab04"}` → 200.

**Identity proof after reopen:** Form-tab heading `FX_FormVariableLab04`; status bar `[ ScopeType: User / ScopeName: <username> ]`; Form Properties Name=`FX_FormVariableLab04`, Version=`User version for user <username>`, Form Type=Normal, Is Master=True (evidence `28`); response payload `scopeType:3`, `uaFormName:"Custom_form"` (evidence `32`) → intended User-scoped customized version.

**Variable comparison — NEGATIVE:** after expanding Details and opening Variables, the group tree shows only the three group headers with **zero variable rows** (evidence `29`); the property tree is **empty** (evidence `30`); the reopen load response contains **no variable payload and no mention of `FX_CloseReopenRetentionVar`** (evidence `32`). **`FX_CloseReopenRetentionVar` is MISSING after reopen** — every AC-3 field comparison fails (variable absent). Screenshot `31`. Designer remained clean (Save/Regenerate/Undo/Redo disabled); 0 console errors. **No repair attempted; no second reopen; no Save.**

**Prohibited-action audit (since Form creation began, through T6):** no login / Sign In-OK / deliberate reauthentication / logout / browser restart / session replacement; no preferences action; no metadata/global-object/cache operation; no runtime Form execution; no alternate save path; exactly one ordinary Save total (`SaveChanges` #111).

**AC-2 evidence (exact T3 files):** `07-wizard-selection-classic-buildfromscratch.png`, `08-wizard-page1-name.png`, `09-wizard-page2-save-template-checked.png`, `10-wizard-page2-save-template-unchecked.png`, `11-process-completed-successfully.png`, `12-form-created-in-designer.png`, `13-select-form-exactly-one-after-creation.png`.

**Provisional AC statuses:** AC-2 **PROVEN**; AC-6 (ordinary close while clean, no prompt) **PROVEN**; AC-7 (reopen via recent-forms path; Name/ScopeType/ScopeName identity) **PROVEN**; AC-8 (post-reopen field comparison) **FAILED — observed negative result**; AC-9 (no prohibited actions) **PROVEN**.

**Knowledge state (T6):** the design-time Form-variable definition (`Global=False`, `Persistent=True`, `Value=Seed-Close-D`) was **NOT recovered** at the UI level across one ordinary Designer Form-tab close/reopen in the same live session — the reopened Form shows zero variables, and the reopen load response carried no variable payload: **observed** (single execution; original experiment, not replay-verified). This is a UI-level recovery observation only; it does not prove database durability, cache eviction, storage provenance, or runtime-value persistence.

**Experiment sequence complete:** no further mutation permitted or needed.

## T7 — Final read-only audit + acceptance table (cycle 7)

**Final live-state re-inspection (read-only):** intended `FX_FormVariableLab04` User-scoped version still OPEN and CLEAN (Save/Regenerate/Undo/Redo disabled); Details > Variables shows **zero variable rows** (evidence `34-final-audit-variables-groups.md`, `34-final-audit-variables-empty.png`); page-wide search for `FX_CloseReopenRetentionVar` → no matches. Post-reopen negative persists; no repair attempted.

**T3 evidence mapping (07–14):** `07` classic BuildFromScratch wizard selection; `08` wizard page 1 Name; `09` Save Template checkbox before unchecking (contrast); `10` **Save Template unchecked**; `11` process completed successfully; `12` clean created Form open in Designer; `13` **immediate live Select Form exactly-one** case-insensitive target while Web Client live, before variable mutation; `14` empty Variables state before variable creation.

**Final prohibited-action audit (since creation began):** no login / Sign In-OK / deliberate reauthentication / logout / browser restart / session replacement; no preferences action; no metadata/global-object/cache operation; no runtime Form execution; no alternate save; exactly one ordinary Save total; one close; one reopen. Prohibited-pattern matches in the record are scope statements/negative audits only. **AC-9 clean.**

**Final repository audit (AC-11):** `git status --porcelain` shows only `?? evidence/EXP-014/` and `?? experiments/EXP-014-form-variable-definition-recovery-across-ordinary-.md`; `git diff --stat` empty; HEAD unchanged `fb6c318`. No recipe/AGENTS.md/environment/other-experiment/FX_/non-FX_ artifact modified.

**Knowledge-state audit:** every EXP-014 finding is classified **observed** only; nothing `verified` or `replay_verified`.

### FINAL ACCEPTANCE TABLE (detail: evidence/EXP-014/35-final-acceptance-audit.md)

| AC | Result | Evidence |
|---|---|---|
| AC-1 | PASS | evidence/EXP-014/01,02,03,04,06 |
| AC-2 | PASS | evidence/EXP-014/07,08,09,10,11,12,13 |
| AC-3 | PASS | evidence/EXP-014/17,18,19 |
| AC-4 | PASS | evidence/EXP-014/23 (SaveChanges #111 → 200 Success:true) |
| AC-5 | PASS | evidence/EXP-014/20,21,22 |
| AC-6 | PASS | evidence/EXP-014/25,26 |
| AC-7 | PASS | evidence/EXP-014/27,28,32 |
| AC-8 | **FAIL** | evidence/EXP-014/29,30,31,32,33,34 — zero variables after reopen |
| AC-9 | PASS | audits in evidence/EXP-014/23,33,35 |
| AC-10 | PASS | T6 Knowledge-state paragraph (observed UI-level non-recovery only; explicit disclaimers) |
| AC-11 | PASS | git audit above + evidence/EXP-014/35 |

**FINAL OUTCOME: BLOCKED — AC-8 failed (observed negative result), not an execution-procedure failure.** The experiment procedure executed correctly end-to-end; the tested hypothesis (design-time variable definition recovers across one ordinary Designer Form-tab close/reopen) is **observed NOT to hold** at the UI level in this environment.
