# EXP-131 - First FX_ Web User Control to Form Script Bridge

**Status (after T11):** Evidence reconciliation complete. Final manifest: `evidence/EXP-131/T11-final-evidence-manifest.md`. **Recommended closure: BLOCKED / UNSUCCESSFUL** (AC-6 failed: one activation displayed `0`, not `FX_ECHO:bridge-probe`). AC-1 to AC-5 and AC-7 are supported within a weak same-session scope; AC-8 is qualified pending operator disposition (section T11). Not accepted and not functionally successful.

Status history: **after T10:** T1 to T9 complete as bounded (preflight; one User-scoped `FX_BridgeTest` Form; `FX_Bridge/index.html` asset; `FX_BridgeControl` bound to the asset; C# `FX_Echo` method; one ordinary Designer Save; one close and one reopen; read-only readbacks). **T10 complete as bounded:** one runtime open, one `FX_BridgeButton` activation and one runtime close without saving. After that single activation the output showed `0`, **not** `FX_ECHO:bridge-probe`. The bridge outcome is **unsuccessful at the observed level**; its root cause is unresolved. No retry was made. FX_BridgeTest remains open in the Designer, clean (Save disabled). Awaiting coordinator or operator disposition (see the T10 section).

Earlier status (superseded, after T4): T1 preflight complete (all four gates passed). T2 created **one** User-scoped classic BuildFromScratch Form, `FX_BridgeTest` (Save Template unchecked, Finish, Process Completed Successfully, OK). T3 read its Script Language (`Visual Basic`; options `Visual Basic` and `Visual C#`) without a change. T4 changed Script Language to `Visual C#` by one option click and one Tab commit. The Form now shows an **intentional unsaved change**: Script Language `Visual C#`, Save and Undo enabled. Designer Save has NOT been invoked. The Form is open, with no components, no Form Script edit, no asset and no bridge attempt. **NOT STARTED:** the Web User Control Asset `FX_Bridge/index.html`, the `FX_BridgeControl` UserControl, the C# `FX_Echo` method, the Save/close/reopen cycle and the runtime round-trip. EXP-131 is not accepted and no bridge outcome exists yet.

Record note: the brief named `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` as the record. It did not exist when T1 began (the repository held only the approved brief commit `e8b6a0c`). It was created by this T1 task; later tasks append to it.

## Scope (brief summary)
- Build one bridge probe in the operator's own account: one User-scoped Form `FX_BridgeTest`, one Web User Control Asset `FX_Bridge/index.html` (loads `../$app/scripts/UserControl.js`, one button `FX_BridgeButton`, one output `FX_BridgeOutput`), one UserControl `FX_BridgeControl` with Web User Control Asset reference, one C# Form Script method `public string FX_Echo(string s)` returning `FX_ECHO:` + `s`, one runtime activation expecting `FX_ECHO:bridge-probe`.
- Candidate contract, **unverified**: the button calls `WSForm.invoke("FX_Echo", "bridge-probe", callback)`. Not verified against any product documentation or observed behaviour.
- Out of scope and prohibited: any non-FX_ artifact; Mock application Forms, IDOs, scripts, records, assets or configuration; FX_InventoryPrototype01; the shared `$app/scripts/UserControl.js` (not opened or changed); browser JavaScript or run-code tools; alternative invoke signatures after a failed test; more than one Form, asset, UserControl or method; deletion or cleanup; Check In/Out; database operations.

## Sources read before T1
- `AGENTS.md` in full (258 lines), including the 2026-10-10 Hello World extension and the 2026-10-25 Mock reproduction extension (FX_ Web User Control Assets permitted in the operator's own account only).
- `recipes/forms/create-basic-form.md` (verified; Designer Save disabled after Finish; Web Client Select Form via toolbar Open; Select Form OK activates a row; use Cancel for read-only inspection).
- `experiments/EXP-094-hello-world-part-6-section-2-fx-orders-form-script-calcordertotal.md` (grep only: Form Script language is set in the Form's Behavior group, Save and close/reopen readback precedent). EXP-093, EXP-095 and EXP-096 were **not** read in full in T1; their relevant precedent will be re-checked before T2.
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (grep only): Designer has no Select Form entry (P-1), so the Web Client toolbar was used; Edit > Web User Control Assets opens a read-only Global Objects dialog. EXP-128 Web User Control evidence files were **not** re-read in full in T1.
- `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md` lines 1 to 381 (T1 to T5 and the start of the rebuild specification). Lines 382 to 588 (the remainder of the rebuild specification, including the bridge-relevant items) were **not** read in T1 and must be read before T2.
- `evidence/EXP-128/` and `evidence/EXP-130/` were used only through their file listings and record citations.

## Repository baseline (conversation-start snapshot, not re-run)
- Branch `claude-harness`; HEAD `e8b6a0c EXP-131: approved brief`.
- Pre-existing modified and untracked files under `tools/claude-harness/` (not touched by T1).
- The harness computes repository confinement from before/after Git state.

## T1 - preflight (2026-10-25)

Harness header: `task=T1`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=0`. Bounded instruction: T1 preflight only. Summary: `evidence/EXP-131/T1-preflight-summary.md`.

### Gates and acceptance (AC-1)
- **Account identity:** Web Client header button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`evidence/EXP-131/t1-05-web-client-fresh-snapshot.md`). Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (`evidence/EXP-131/t1-15-designer-final-clean-snapshot.md`; `evidence/EXP-131/t1-16-designer-clean-user-scope.png`).
- **Editing scope:** User.
- **Clean Designer:** no Form open (empty design surface and Properties in `t1-16` screenshot), Save and Regenerate Form disabled, no dialog or menu open at the end (`t1-15`).
- **Console baseline:** Web Client 3 errors / 10 warnings; Designer 2 errors / 0 warnings. No rise at any reading in T1.
- **Positive control (present):** `FX_CustomerPortal` listed in the Select Form dialog (`evidence/EXP-131/t1-08-select-form-filter-fx-customerportal-after-key.md`, two gridcell nodes).
- **Negative check (absent):** `MockLoginPortal` (`evidence/EXP-131/t1-09-select-form-filter-mockloginportal.md`); `FX_InventoryPrototype01` (`evidence/EXP-131/t1-10-select-form-filter-fx-inventoryprototype01.md`). Neither listed.
- **Target Form absence (absent):** `FX_BridgeTest`, checked with filter `FX_Bridge` (`evidence/EXP-131/t1-11-select-form-filter-fx-bridge-absence.md`). No row.
- **Target asset absence (absent):** Edit > Web User Control Assets > Global Objects > Web Assets top level shows `$app`, `mongoose`, `sohoComponents`, `sohoxi`. No `FX_` folder, so `FX_Bridge/index.html` is absent (`evidence/EXP-131/t1-14-web-user-control-assets-global-objects-dialog.md`).
- **Gate verdict:** all four gates passed. The brief's mutation gates are therefore satisfied for T2, but T1 is preflight only and did not start T2.

### Observed UI route notes (not a verified recipe)
- The Designer Form menu offers only recent entries and `Definition`; it has no Select Form entry (same as EXP-128 P-1). The Select Form dialog was therefore opened from the Web Client toolbar `Open`.
- The Select Form filter textbox already held `fx_item` from an earlier session. Replacing it with the gate strings and pressing End triggered the filter. A fill alone did not refresh the grid (`t1-07` still showed `FX_Items` rows before End).
- Designer Edit menu items appeared only on the second Edit click, after the first click left the menu state unrendered. The first attempt was followed by an Escape press.
- The Designer showed an "Identify Your Editing Scope" dialog on load (Scope = User, User = the same account, preselected). OK was clicked once, as the recipe prescribes. The status bar was already User before the click.

### Limitations (T1)
- **Account ownership is not established by the worker.** The gate evidence matches the brief's definition: Hello World `FX_` Forms are present and the Mock and FX_InventoryPrototype01 markers are absent. The EXP-130 Mock-owner account listed MockLoginPortal in its recent menu, which this account's Form menu does not. The operator should confirm that this is the operator's own account before T2.
- Absence reads come from filtered inventory views. The positive control used the same filter mechanism, which supports "absent in this view", not an exhaustive scan of every record.
- The Web User Control Assets check covered top-level folders only. A top-level `FX_` folder would be present if the asset existed, so no sub-folder check was needed for `FX_Bridge`.
- No screenshot of the Select Form list or of the Web Client header was taken in T1. Those facts rest on accessibility-snapshot text.

### Browser-action accounting (T1, exact)
- **Browser actions attempted: 21. Returned ok: 21. Errors: 0.**
  - Tab selections: 4 (tab 1, tab 0, tab 1, tab 0). Tab list: 1 (before the first selection).
  - Clicks: 8 (Designer scope-dialog OK; Designer Form menu; Designer Edit (1st); Web Client toolbar Open; Select Form Cancel; Designer Edit (2nd); Edit > Web User Control Assets; Global Objects Cancel).
  - Type actions: 4 (`FX_CustomerPortal`, `MockLoginPortal`, `FX_InventoryPrototype01`, `FX_Bridge`; filter text only).
  - Key presses: 5 (Escape once; End four times on the filter textbox).
  - Save, Regenerate, New, Delete, Check In/Out, Finish, Filter in Place, Select Form OK, dialog handling other than Cancel, navigation, reload: **0**.
  - Coordinate clicks: 0. Drags, wheel, mouse moves: 0.
- **Browser reads: 18.** Tab list 1; untargeted or targeted snapshots 16; find 1 ("Global Objects"). One wait (2 seconds) is not counted as an action.
- **Screenshots: 1** (`t1-16-designer-clean-user-scope.png`).
- **Fresh-snapshot recovery allowance: 0 of 1 used.** No "Ref not found" error occurred.
- **Browser JavaScript / evaluate / run-code: 0.** The "Ran Playwright code" blocks in tool outputs are generated by the MCP tool for each action and were not written by the worker.
- **Credentials read, typed, copied or recorded: 0.** Tenant and session values appear only as `<secret>` placeholders in the URLs.

### Console and state checks (T1)
- Web Client: 3 errors / 10 warnings at t1-01, t1-05, t1-06 to t1-11 and after the Select Form cancel. No rise.
- Designer: 2 errors / 0 warnings at t1-00, t1-02, t1-03, t1-04, t1-12, t1-14 and t1-15. No rise.
- Final: Designer Save and Regenerate disabled; no Form tab open; no dialog or menu open in either tab (the Select Form and Global Objects dialogs were closed with Cancel). The Web Client Select Form dialog was confirmed closed from the Cancel result snapshot (`evidence/playwright/page-2026-10-25T12-35-04-541Z.yml`).
- No stop rule was triggered. No portal banner, session-expiry modal or sign-in page appeared.

### Worker-written files (T1)
- **Created (repository):**
  - `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` (this record).
  - `evidence/EXP-131/T1-preflight-summary.md`.
  - `evidence/EXP-131/t1-00-designer-preflight-snapshot.md` through `evidence/EXP-131/t1-15-designer-final-clean-snapshot.md` (16 snapshot files; `t1-06` shows the Select Form dialog before filtering).
  - `evidence/EXP-131/t1-16-designer-clean-user-scope.png`.
- **Tool-written (outside `evidence/EXP-131/`, disclosed for the confinement audit):** one action-result snapshot per browser action under `evidence/playwright/page-2026-10-25T12-*` (including `page-2026-10-25T12-33-32-419Z.yml`, `page-2026-10-25T12-35-04-541Z.yml`, `page-2026-10-25T12-35-20-242Z.yml`), console logs `evidence/playwright/console-2026-10-25T12-*.log`.
- **Modified:** none. No existing recipe, experiment record, asset, Form or unrelated file was changed.

### Acceptance (T1 view)
- **AC-1 (preflight):** **met.** Account identity, User scope, clean Designer, console baseline, positive control, isolation-marker absence, and target Form and asset absence are recorded with evidence. Ownership of the account is recorded as a limitation for the operator.
- **AC-2 to AC-8:** not started (T1 scope).

### Knowledge state (T1)
- **Observed (one execution):** the Select Form filter shows `FX_CustomerPortal`, and does not show `MockLoginPortal`, `FX_InventoryPrototype01` or any `FX_Bridge*` Form, in this account. The Web User Control Assets top level has no `FX_` folder. The Designer's Form menu has no Select Form entry.
- **Candidate procedure only:** the Web Client toolbar `Open` route for read-only Select Form filtering (End keypress needed to refresh). One execution, not replayed.
- **Unverified:** the `WSForm.invoke` contract and callback shape. No bridge behaviour has been observed.

### Status (T1)
- **T1 complete.** The worker has stopped at the T1 boundary. No Form, asset, UserControl or script was created or changed. T2 (Form creation and asset authoring) requires coordinator authorization, and the operator should first confirm account ownership (see Limitations).

## Open questions for the coordinator / operator (after T1)
1. Confirm that the signed-in account `anton.ramos@3mworks.com.ph` (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT) is the operator's own account and not the read-only Mock-owner account.
2. Authorize T2 (Form creation and asset authoring) explicitly. The T2 step's brief must also confirm which `WSForm.invoke` contract the test should attempt (currently candidate only).
3. Confirm whether the Designer's scope-dialog OK click on load needs to be recorded as an operator-visible preference change (not visible to the worker).
4. The EXP-130 rebuild specification (lines 382 to 588) was not read in T1. It must be read before T2.
   - **Resolved in T2:** read (section 8 and sections 10 to 16 of EXP-130). See the T2 section below.

## T2 - source review and FX_BridgeTest Form creation (2026-10-25)

Harness header: `task=T2`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=2`. Bounded instruction: source review, then one Form. Summaries: `evidence/EXP-131/T2-source-review.md` (source review) and `evidence/EXP-131/T2-form-creation-summary.md` (creation readbacks, accounting, limitations).

### Source review (before any browser action)
- Read: `AGENTS.md` (full); `recipes/forms/create-basic-form.md` (verified); EXP-130 lines 382 to 588 (T5 rebuild specification: sections 7-23); `evidence/EXP-128/assets/mocklogin_index.html.txt` and `mocklogin_script_app.js.txt` (text-equivalent copies); `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (C# copy); EXP-093, EXP-094, EXP-095 and EXP-096 (procedure and state sections, targeted reads); EXP-128 Web User Control sections (T2, T6, T7, T8; T-1 pattern).
- **Disagreement D-1 (path):** the brief's C# evidence path `evidence/EXP-128/assets/MockLoginPortal-form-script.cs.txt` does not exist. The file is `evidence/EXP-128/MockLoginPortal-form-script.cs.txt`.
- **Disagreement D-2 (Script Language):** the brief requires the Form Script language to be C#. Every FX_ Form observed so far is Visual Basic (EXP-093, EXP-094, EXP-095, EXP-102, EXP-052). C# has only been observed on Mock Forms (EXP-128). No observed procedure here changes a Form's Script Language. Candidate for T3, not verified.
- **Disagreement D-3 (Designer-generated variables):** the UserControl pattern (EXP-128 T-1; EXP-130 section 8) implies Form variables `<var>Asm` (`ASSEMBLY(UNIFIED)`) and `<var>Url` (`URL(METADATA()<asset path>)`) when Edit User Control References is configured. The brief names only one UserControl component. T3 must record any such Form variable that appears; it is treated as a Designer side effect and not created by hand.
- **Disagreement D-4 (invoke arity):** the brief's candidate `WSForm.invoke("FX_Echo", "bridge-probe", callback)` has one argument. The Mock source (EXP-128 copy, `invokeAsync`) uses `WSForm.invoke(name, arg1, arg2, cb)` with two arguments. EXP-130 records the bridge contract as UNK. The one-argument candidate is **unverified**. No alternative signature will be tried.
- **Disagreement D-5 (ownership):** this record's T1 section said ownership was unresolved; the coordinator handoff records operator confirmation. This review uses the handoff disposition.
- EXP-093 precedent: a Script Editor open plus Cancel on an empty script left the Designer dirty (cause not isolated); EXP-094: Cancel on a saved script left it clean. No Script Editor action was taken in T2.

### Pre-mutation gates (re-checked at T2 start)
- Designer: no Form open (URL without `MGForm`), Save, Regenerate Form, Undo and Redo disabled; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; console 2 errors / 0 warnings.
- Web Client: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; console 3 errors / 10 warnings.
- Select Form (Web Client toolbar Open), Filter `FX_Bridge`, after End: no rows. Cancel; dialog confirmed closed. Target Form absent in this filtered view (same method as T1).
- Target asset absence is not re-checked in T2 (no asset action in T2); it will be re-checked before any asset creation in T3.

### Creation (basic-Form recipe, Steps 1-5)
- Designer toolbar `New` → Form Wizard Selection: New Form radio (`aria-checked="true"`); Category `Classic`; Wizard `BuildFromScratch` (listed as `Build from Scratch`); OK.
- Page 1: Name `FX_BridgeTest`; Form Type `BuildFromScratch`; Form Layout `GridLeft`; Device Type `Default`; Data Source, Query Form and Comments empty. Next.
- Page 2: `Save Template` checked on arrival; unchecked (screenshot `t2-03`). Finish.
- Response: `alertdialog` `Process Completed Successfully`, button `OK`; OK clicked once. The Designer then showed `FX_BridgeTest` (`MGForm=FX_BridgeTest` in the URL).
- Post-creation readback: Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Save and Regenerate Form disabled; status bar `ScopeType: User`; Components grid shows only the root `Pane (00)`. Console 2 errors / 0 warnings.
- Designer Save invocations: **0** (Finish persisted the Form, per the recipe). No Form Save, no component, no script, no asset.

### Anomalies and recovery
- **A-1:** the New Form radio click timed out (`outside of the viewport`). The locator resolved to `aria-checked="true"`; screenshot `t2-01` shows the radio selected. Not repeated.
- **A-2:** the Save Template checkbox click timed out (intercepted by its own `displayEl` span). Recovery: one fresh untargeted snapshot (checkbox still checked, refs unchanged), then one corrected attempt: a click on the label text `Save Template`, which unchecked it (`find` and `t2-03` confirm).
- Recovery allowance: fresh snapshot 1/1; corrected attempt 1/1. No `Ref not found`.

### Browser-action accounting (T2, exact)
- **Browser actions attempted: 21. Returned ok: 19. Timed out with no effect: 2 (A-1, A-2).**
  - Tab selects: 3 (tab 0, tab 1, tab 0). Tab list: 1 read (before the first selection).
  - Clicks that returned ok: 14 (Open; Select Form Cancel; Designer New; Category arrow; Classic; Wizard arrow; Build from Scratch; wizard OK; Next; Save Template label; Finish; Process Completed OK; Details Expand Panel; Components tab). Clicks timed out: 2 (A-1, A-2).
  - Key presses: 1 (End in the Select Form filter). Type: 1 (Name `FX_BridgeTest`).
  - Save, Regenerate, Delete, Check In/Out, Undo, Redo, Form Script edit, asset action, close, reopen, runtime navigation: **0**.
- **Browser reads: 30.** Tab list 1; snapshots 12; finds 13; screenshots 4.
- **Browser JavaScript / evaluate / run-code written by the worker: 0.** The `### Ran Playwright code` blocks are generated by the MCP tool for each action.
- **Recovery allowance:** fresh snapshot 1 of 1; corrected attempt 1 of 1.

### Console comparison
- Designer 2 errors / 0 warnings at T2 start, after creation and at the end. Web Client 3 errors / 10 warnings at T2 start, during the Select Form re-check and after Cancel. No rise. Stop rule not triggered.

### Save and creation accounting
- Forms created: **1** (`FX_BridgeTest`, User scope, classic BuildFromScratch, Save Template unchecked).
- Components added: 0. Form Script edited: 0. Assets created: 0. UserControl components: 0. Global objects: 0. Designer Save invocations: 0 (creation by wizard Finish only). Close/reopen: 0.

### Evidence (T2)
- `evidence/EXP-131/T2-source-review.md`; `evidence/EXP-131/T2-form-creation-summary.md`.
- `evidence/EXP-131/t2-01-form-wizard-selection-before-category.png`: dialog inside the viewport, New Form radio filled, Category and Wizard empty. Does not prove the later wizard values.
- `evidence/EXP-131/t2-02-form-wizard-category-classic-wizard-dropdown.png`: Category `Classic`; Wizard list open with `Build from Scratch`. Does not prove the chosen value (readback: `BuildFromScratch`).
- `evidence/EXP-131/t2-03-wizard-page2-save-template-unchecked.png`: page 2 with Save Template empty; Next disabled; Finish enabled. Does not prove that no template was created.
- `evidence/EXP-131/t2-04-designer-form-created-clean-components.png`: Designer `FX_BridgeTest` tab; Name, Device Type Default, Form Type Normal, Is Master True; Components grid with only `Pane (00)`; Save and Undo greyed; `ScopeType: User`. Proves identity, User scope and clean save state; does not prove persistence after close/reopen or the full Version text.
- Tool-written, outside `evidence/EXP-131/`: `evidence/playwright/page-2026-10-25T12-*.yml` and `evidence/playwright/console-2026-10-25T12-*.log`.

### Limitations (T2)
- Save Template unchecked is observed in the wizard (screenshot and find); whether a template artifact was created was not checked.
- The Form's Script Language was **not read** (Behavior group not expanded to avoid a view-induced dirty state; EXP-093 recorded an unisolated dirty state). First item for T3, with a Save-state check after each step.
- Absence checks rest on the filtered Select Form view (same method as T1).
- No reload, close or reopen in T2; no durability claim.

### Acceptance (T2 view)
- **AC-1:** re-established at T2 start (see gates). Ownership: operator handoff disposition.
- **AC-2 (partial):** met for the creation readback (`t2-04`): exactly one new Form `FX_BridgeTest`, Name, Device Type, Form Type, Is Master, User scope, clean Save state. Full version text from the accessibility readback only.
- **AC-3 to AC-8:** not started.

### Knowledge state (T2)
- Creation route (Designer New > Form Wizard Selection > Classic / Build from Scratch > Page 1 > Page 2 > Finish > OK): **observed** (one execution; recipe verified in EXP-002 and EXP-002-R2).
- Radio and checkbox click timeouts; label click success: **observed** (one execution each).
- Form Script language of FX_BridgeTest: **unresolved** (not read). C# change procedure: **unresolved** (D-2).
- `WSForm.invoke` contract and callback: **unresolved** (D-4; not reached).

### Status (T2)
- **T2 complete.** `FX_BridgeTest` exists in User scope and is open in the Designer, clean. No other object was created. The next permitted step is T3: create the Web User Control Asset `FX_Bridge/index.html` (re-check its absence first) and author it per the brief. T3 must first read the Script Language and record any Designer-generated Form variables (D-2, D-3).

## T3 - read-only Script Language inspection of FX_BridgeTest (2026-10-25)

Harness header: `task=T3`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=4`. Bounded instruction: read-only inspection of the existing `FX_BridgeTest` Script Language; no selection change, no Form Script, no asset, no component, no Designer Save, no close or reopen. Full summary: `evidence/EXP-131/T3-script-language-inspection-summary.md`.

### Observations
- Start (fresh snapshot, tab 0 selected after a tab list): Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (accessibility text); Device Type Default; Form Type Normal; Is Master True; Save, Regenerate Form, Undo, Redo disabled; `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; console Designer 2 errors / 0 warnings. Components: `Pane (00)` only.
- Behavior group expanded (view-only): Initial Command (empty); **Script Language = `Visual Basic`**; Close Box `True`; Minimize/Maximize Box `True`; Filter Form (empty); Enable Advanced Filter `False`.
- Script Language drop-list opened (one trigger click): current value `Visual Basic` (selected); visible options **`Visual Basic`** and **`Visual C#`**. Closed with one Escape press; value unchanged.
- Save and Undo were checked at every step (8 checks): disabled throughout. Final: FX_BridgeTest open, Save and Undo greyed, no dialog open.
- Console: Designer 2 errors / 0 warnings at every reading. The tool-written log for this tab (`evidence/playwright/console-2026-10-25T12-53-18-124Z.log`) holds the two existing Designer baseline `unload` permissions-policy errors. Web Client not read in T3.

### Procedure observations (not a verified recipe)
- A Behavior treeitem click selected the row but did not expand it. ArrowRight moved focus into the value cell and did not expand it. A single click on the Behavior disclosure chevron expanded the group. Each step left the Designer clean.
- The Script Language selector lists `Visual C#` as an option for this FX_ Form. Selecting it, the resulting dirty state, and the Save sequence were **not** tested (out of T3 scope).

### Actions and reads (T3, exact)
- Browser actions: **6**, all returned ok, none timed out (tab select 1; clicks 3: Behavior row, chevron by coordinates, drop-list trigger; key presses 2: ArrowRight, Escape).
- Browser reads: **15** (tab list 1; snapshot 1; finds 7; screenshots 6).
- Recovery allowance: not used (none needed).
- Browser JavaScript / evaluate / run-code written by the worker: 0.
- Designer Save: 0. Undo: 0. Form Script, asset, component, close, reopen, navigation: 0.

### Evidence (T3)
- `evidence/EXP-131/T3-script-language-inspection-summary.md`.
- `evidence/EXP-131/t3-00-designer-before-behavior-inspection.png`: pre-action baseline (identity, clean state). Does not show the expanded group.
- `evidence/EXP-131/t3-01-designer-after-behavior-row-select.png`: Behavior selected but collapsed; Save greyed.
- `evidence/EXP-131/t3-02-designer-after-arrowright-check.png`: focus in the Behavior value cell after ArrowRight; Save and Undo greyed.
- `evidence/EXP-131/t3-03-behavior-expanded-script-language-visual-basic.png`: Script Language `Visual Basic` in the expanded group; Save greyed. Proves the current value; does not prove the Version text in full.
- `evidence/EXP-131/t3-04-script-language-dropdown-open-unchanged.png`: open selector with `Visual Basic` selected and `Visual C#` listed; Save greyed. Proves the option labels; does not prove selection.
- `evidence/EXP-131/t3-05-designer-final-clean-after-script-language-inspection.png`: final clean state after Escape; value still `Visual Basic`; no dialog.

### Knowledge state (T3)
- Script Language of FX_BridgeTest = `Visual Basic`, options `Visual Basic` and `Visual C#`: **observed** (one execution).
- Opening and closing the selector without a selection leaves the Designer clean: **observed** (one execution).
- Selecting `Visual C#`, the resulting dirty state, the Save sequence and the generated C# scaffolding: **unresolved** (not tested; D-2 remains open).
- Designer-generated Form variables on UserControl configuration (D-3) and the `WSForm.invoke` contract (D-4): **unresolved**, not reached.

### Open questions for the coordinator
1. D-2 is narrowed: `Visual C#` is an available option, so the blocker is no longer whether C# exists. The question is whether T3-next may select `Visual C#` from this drop-list, and then which ordinary Save and Form Script step the brief permits. The brief allows one ordinary Designer Form Save after Form configuration, but EXP-093 recorded an unexplained dirty state after the Script Language and Script Editor path.
2. The asset creation route (Edit > Web User Control Assets > New) is still unobserved. If the Global Objects dialog offers no New control in the next task, that task must stop.
3. D-1, D-3 and D-4 are unchanged from T2.
4. Whether a Save Template artifact was created at T2 is still not checked.

### Status (T3)
- **T3 complete.** Read-only inspection done; `FX_BridgeTest` open and clean; no selection made; no further action taken. T3 stops here as bounded.

## T4 - Script Language changed to Visual C# (unsaved) (2026-10-25)

Harness header: `task=T4`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=5`. Bounded instruction: change only Script Language from `Visual Basic` to `Visual C#`; leave the unsaved change; no Designer Save, no Form Script editor, no asset, no component, no close or reopen, no runtime test. Full summary: `evidence/EXP-131/T4-script-language-csharp-change-summary.md`.

### Preconditions (fresh start snapshot)
- FX_BridgeTest open (URL `MGForm=FX_BridgeTest`); Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (accessibility text); Device Type Default; Form Type Normal; Is Master True; Components `Pane (00)` only.
- Scope `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Save, Regenerate Form, Undo, Redo disabled. Script Language `Visual Basic`. Console Designer 2 errors / 0 warnings.

### Change
- Drop-list arrow click (list open: `Visual Basic` selected, `Visual C#` listed); Save disabled before selection.
- `Visual C#` option click: combobox read `Visual C#`, list closed, but **Save and Undo stayed disabled** (`t4-01`). The change had not committed.
- One Tab key press (the brief's permitted commit): **Save and Undo became enabled**; Script Language `Visual C#`; no dialog. This is the expected unsaved state.
- Targeted Properties snapshot: Script Language `Visual C#`; Version full text as above; Close Box True; Minimize/Maximize Box True; Enable Advanced Filter False; console 2/0.
- Designer Save: **not invoked**. Undo: **not invoked**. Enter: 0.

### Actions and reads (T4, exact)
- Browser actions: **4**, all returned ok (tab select 1; clicks 2: drop-list arrow, Visual C# option; key press 1: Tab). No timeouts.
- Browser reads: **8** (tab list 1; snapshots 2; finds 3; screenshots 2). Recovery allowance not used.
- Browser JavaScript / evaluate / run-code written by the worker: 0. Shared UserControl.js reads: 0.

### Console
- Designer 2 errors / 0 warnings at every reading. The tool-written log `evidence/playwright/console-2026-10-25T12-57-30-734Z.log` (read) holds the same two baseline `unload` permissions-policy errors. No increase. Web Client not read in T4.

### Evidence (T4)
- `evidence/EXP-131/T4-script-language-csharp-change-summary.md`.
- `evidence/EXP-131/t4-01-script-language-visual-csharp-selected-before-commit.png`: `Visual C#` in the editor with focus; Save and Undo greyed. Proves the selection in the editor; does not prove the commit.
- `evidence/EXP-131/t4-02-designer-script-language-visual-csharp-committed-save-enabled.png`: `Visual C#`; Save and Undo enabled (blue); Name `FX_BridgeTest`; `ScopeType: User`; no dialog. Proves the Form identity, User scope and the unsaved change. Does not prove the Save, the database state or any Form Script effect.

### Knowledge state (T4)
- Script Language change to `Visual C#` via the Properties drop-list (option click + Tab commit) produces an unsaved state with Save and Undo enabled: **observed** (one execution). The option click alone did not enable Save; the Tab commit did. **observed** (one execution), not a verified procedure.
- Form Script scaffolding after the change, the Save step, and persistence after reopen: **unresolved** (not reached; Form Script editor not opened).
- `WSForm.invoke` contract (D-4), Designer-generated Form variables (D-3), asset route (Global Objects New), D-1 evidence path: **unresolved**, unchanged from T3.

### Open questions for the coordinator
1. Authorize the next step: the single ordinary Designer Save to commit `Visual C#` (the brief's one Form Save). The record needs the exact Save response (toast or dialog) and the post-Save Designer state.
2. Whether the Save of the Script Language change alters existing Form Script scaffolding. The Form Script editor has not been opened; it must be read before the `FX_Echo` method is added.
3. The asset creation route (Global Objects > New) is still unobserved. If absent, the task must stop.
4. Whether a Save Template artifact was created at T2 remains unchecked.

### Status (T4)
- **T4 complete.** FX_BridgeTest is open with an intentional unsaved Script Language change to `Visual C#`. No Save, no Undo, no further action. T4 stops here as bounded.

## T5 - FX_Echo added to the FX_BridgeTest Form Script (editor OK, no Designer Save) (2026-10-25)

Harness header: `task=T5`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=6`. Bounded instruction: confirm User scope, Visual C#, unsaved Save/Undo and a clean console; open the Form Script editor without a Designer Save; if the scaffold is valid C# inside the FX_BridgeTest class, insert exactly one `FX_Echo` method, read back, commit through OK; no Designer Save, asset, component, close/reopen or runtime. Full summary: `evidence/EXP-131/T5-form-script-fx-echo-summary.md`.

### Pre-edit gate (fresh snapshot)
- FX_BridgeTest at `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Version `User version for user anton.ramos@3mworks.com.ph`; Script Language `Visual C#`; Save and Undo enabled (the intended unsaved change); Components `Pane (00)` only; console 2 errors / 0 warnings; no dialog.

### Scaffold (inspected before any edit)
- Script Editor opened once with the blue pencil (`#btnEditDownload`). Generated 16-line C# scaffold: `using System;`, `using Mongoose.IDO.Protocol;`, `using Mongoose.Scripting;`, `namespace Mongoose.FormScripts`, `public class FX_BridgeTest : FormScript`, a comment block `// Methods go here`, no existing methods. Valid C#; the insertion point is inside the class. Gate passed.
- Observed: the first editor open after the unsaved Visual C# change produced a C# scaffold (the FX_Orders script in EXP-093/094 was Visual Basic). Single run; cause not isolated.

### Edit and commit
- Click `Editor content` textbox, Control+A, one full-text fill: original scaffold kept, plus one `public string FX_Echo(string s) { return "FX_ECHO:" + s; }` inside the class (with `using`, namespace and class declaration unchanged). Corrections: 0.
- Read-back before OK: screenshot `t5-02` shows 19 lines with the method and balanced braces; accessibility find shows exactly one `FX_Echo` method node.
- **Cosmetic deviation (not repaired):** the editor auto-indented on top of the filled leading whitespace; lines 8-18 are progressively indented. Structure is valid; C# does not depend on whitespace.
- OK clicked once. Response: the Script Editor closed; no message, toast, alert or error dialog visible; Compile Result (collapsed) not expanded. Designer afterwards: Script Language `Visual C#`; Save and Undo enabled; no dialog; console 2 / 0.
- Designer Save: **not invoked**. Undo: 0. Compile Result expand: 0. Editor reopen: 0.

### Actions and reads (T5, exact)
- Browser actions: **6**, all returned ok, no timeouts: tab select 1; clicks 3 (pencil `e371`, editor textbox `e721`, OK `e734`); key press 1 (Control+A); text fill 1.
- Browser reads: **9**: tab list 1; snapshot 1; screenshots 4 (`t5-00`..`t5-03`); finds 3 (`Script Editor`, `FX_Echo`, `OK`). Recovery allowance not used.
- Browser JavaScript / evaluate / run-code written by the worker: 0. Shared UserControl.js: not read.
- File reads (not browser): T4 summary; EXP-128 MockLoginPortal script; targeted greps of EXP-093 to EXP-096 (EXP-095 and EXP-096 were not read end to end; disclosed in the summary).

### Console
- Designer 2 errors / 0 warnings at every reading. `evidence/playwright/console-2026-10-25T13-00-01-795Z.log` (read): the two baseline `unload` permissions-policy errors only. No increase.

### Evidence (T5)
- `evidence/EXP-131/t5-00-designer-before-form-script-open.png`: Designer before the editor; identity, `ScopeType: User`, Script Language `Visual C#`, Save and Undo enabled. Proves the unsaved precondition; does not prove the full Version text (truncated) or script content.
- `evidence/EXP-131/t5-01-form-script-editor-opened-before-edit.png`: the 16-line C# scaffold in the Script Editor, footer OK/Cancel/Help/Download, Compile Result collapsed. Proves the original scaffold; does not prove compile status.
- `evidence/EXP-131/t5-02-form-script-after-fx-echo-entry-before-ok.png`: 19-line edited script before OK, one `FX_Echo` method, balanced braces, indentation drift. Proves the entered text as displayed; does not prove compile or commit.
- `evidence/EXP-131/t5-03-designer-after-form-script-ok-before-save.png`: editor closed after OK, no dialog, Save and Undo enabled, Script Language `Visual C#`. Proves the closed editor and unsaved state; does not prove the script is stored or compiles.
- Tool-written snapshots: `evidence/playwright/page-2026-10-25T13-00-31-080Z.yml`, `page-2026-10-25T13-00-57-316Z.yml`, `page-2026-10-25T13-01-20-523Z.yml`.

### Knowledge state (T5)
- Script Editor opens with a C# scaffold for FX_BridgeTest after an unsaved Script Language change to Visual C#: **observed** (one execution).
- Full-text fill replacement inside the class, with editor auto-indent drift: **observed** (one execution). Not a verified procedure.
- OK closes the editor without a visible response; compile success: **unresolved** (Compile Result not expanded).
- `FX_Echo` persisted in the Form Script after Save and reopen: **unresolved** (no Save yet).
- `WSForm.invoke` contract, the callback return delivery, the asset route (Global Objects > New), the UserControl reference and the runtime behavior: **unresolved** (not reached).

### Open questions for the coordinator
1. Compile status: needs a read-only Compile Result check (an editor reopen, which T5 did not authorize). Decide whether to do that before the Save.
2. Authorize the single ordinary Designer Save only after the asset and UserControl steps, per the brief's "one ordinary Form Save after the Form configuration"; or authorize an earlier Save of the Script Language and FX_Echo change.
3. Whitespace drift in the script: accept as cosmetic, or authorize a normalizing edit.
4. Asset creation route (Global Objects > New) remains unobserved (carried from T4).

### Status (T5)
- **T5 complete.** FX_BridgeTest's Form Script now contains one `FX_Echo` method in the existing C# class (committed through the editor's OK). The Designer is dirty (Save and Undo enabled) with no Save performed. The editor is closed; no dialog open. T5 stops here as bounded.

## T6 - Web User Control Asset FX_Bridge/index.html created and authored (no Form Save) (2026-10-25)

Harness header: `task=T6`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=7`. Bounded instruction: create exactly one asset FX_Bridge/index.html via Edit > Web User Control Assets, author the candidate HTML (UserControl.js include, FX_BridgeButton, FX_BridgeOutput, one WSForm.invoke('FX_Echo','bridge-probe', callback)), commit through asset-editor OK only, and stop: no Form Save, no UserControl, no runtime, no close/reopen. Full summary: `evidence/EXP-131/T6-web-user-control-asset-summary.md`.

### Gates (before mutation)
- FX_BridgeTest at `ScopeType: User`; Script Language `Visual C#`; Save and Undo enabled (intended unsaved); `Pane (00)` only; console 2 errors / 0 warnings; no dialog.
- Global Objects Web Assets top level: `$app`, `mongoose`, `sohoComponents`, `sohoxi`; no `FX_Bridge`. Absence established.

### Creation and authoring
- New prompt (leftmost `+` in the Web Assets pane) inspected before entry: one `Name:` field, OK, Cancel. Typed `FX_Bridge/index.html`; Tab; New OK. A top-level `FX_Bridge` folder appeared with one child `index.html` (not a root file, not a doubled extension). Properties: Name `FX_Bridge/index.html`, Content `text/html`.
- Edit Browser File opened (Content row "Open Edit Property Dialog"); the initial content was the Mongoose template with the `../$app/scripts/UserControl.js` include and an empty body. Replaced by one full-text fill with the candidate HTML (one button `FX_BridgeButton`, one `div` `FX_BridgeOutput`, one click listener calling `WSForm.invoke("FX_Echo", "bridge-probe", function (result) { ... textContent = result; })`). Readback before OK matched.
- Edit Browser File OK: dialog closed; Global Objects stayed open. Global Objects OK: dialog closed; no message, toast, alert or error dialog visible.
- Same-session read-only check: reopened Edit > Web User Control Assets > FX_Bridge > index.html > Open Edit Property Dialog; the content was identical; closed with Cancel (Edit Browser File) and Cancel (Global Objects). No change.

### Save and dirty state
- **Ordinary Designer Form Save: not performed.** Save remains enabled (the earlier Script Language and FX_Echo edits plus the asset change are unsaved).
- Main toolbar Undo: enabled after the Edit Browser File OK; **disabled after the Global Objects OK** (observed; cause not isolated).
- Whether the asset needs an ordinary Form Save to persist: **unresolved**; the coordinator should decide before any Save.

### Actions and reads (T6, exact)
- Browser actions: **24** (tab select 1; clicks 17; key presses 4; text entries 2), all ok, none timed out. Reconciliation: 1 + 17 + 4 + 2 = 24.
- Browser reads: **21** (tab lists 2; snapshots 2; finds 7; screenshots 10).
- Recovery allowance: not used (exhausted from T2).
- Browser JavaScript written by the worker: 0. Shared UserControl.js: not read.

### Console
- Designer 2 errors / 0 warnings at every reading. The tool-written log `evidence/playwright/console-2026-10-25T13-05-20-878Z.log` (read at T6 start) is cumulative for the Web Client session: 5 `[ERROR]` unload permissions-policy lines (the same class as the baseline) and 1 portal origin-trial `[WARNING]`. The Designer counter and this log are not like-for-like. No new error type; the end-of-task tab listing reported no new console entries.

### Evidence (T6)
- `evidence/EXP-131/T6-web-user-control-asset-summary.md`.
- `t6-01` (absence gate, Web Assets top level, no FX_Bridge); `t6-02` (New prompt before entry); `t6-03` (Name typed); `t6-04` (FX_Bridge folder after New OK); `t6-05` (folder expanded, child `index.html`); `t6-06` (template before entry); `t6-07` (candidate HTML before OK); `t6-08` (after Global Objects OK; Designer dirty); `t6-09` (same-session read-only retention); `t6-10` (final Designer, no dialog).
- Each image's proof and limits are in the summary. None proves runtime behavior, the WSForm.invoke contract, or database durability.
- Deviation: two snapshot files, `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml` and `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml`, were written by the worker outside `evidence/EXP-131/` (named via the snapshot `filename` parameter). They are read-only accessibility text; the operator may remove them.

### Knowledge state (T6)
- Web User Control Assets > Global Objects > `+` New > Name `FX_Bridge/index.html` > OK creates a top-level folder `FX_Bridge` with child `index.html`: **observed** (one execution).
- Edit Browser File full-text fill plus its OK, and Global Objects OK, commit the content for same-session retention: **observed** (one execution). Not a verified procedure.
- Asset persistence without an ordinary Form Save: **unresolved**.
- `WSForm.invoke('FX_Echo', 'bridge-probe', callback)` signature, callback return delivery and runtime behavior: **unresolved** (candidate only).
- Shared `UserControl.js` behavior: not inspected (excluded).

### Created-artifact inventory (for possible later operator-authorized cleanup)
1. Form `FX_BridgeTest` (User scope, T2), open with unsaved changes.
2. Form Script method `FX_Echo` in the `FX_BridgeTest` C# class (T5), committed in the editor.
3. Web User Control Asset `FX_Bridge/index.html` with folder `FX_Bridge` (T6), committed through the asset-editor OKs; persistence not confirmed.
- Not created: UserControl `FX_BridgeControl`; runtime; SQL, IDO or global objects. Unchecked: whether a Save Template artifact was created at T2.

### Open questions for the coordinator
1. Authorize the next step. The brief's ordinary Designer Form Save is still held. Should the Save follow the UserControl addition (T7), or happen now?
2. Whether the asset commit persists without a Form Save. A Save and a close/reopen readback would settle this, but it is not authorized in T6.
3. The Undo-state change after Global Objects OK: accept as observed, or require a check before the Save?
4. The UserControl component (`FX_BridgeControl`) and its Edit User Control References configuration are the next step; they were not started.

### Status (T6)
- **T6 complete.** Asset `FX_Bridge/index.html` exists with the candidate HTML, committed through the asset-editor OKs and retained in the same session. FX_BridgeTest remains open with the intended unsaved changes; no Form Save, no UserControl, no runtime, no close/reopen. T6 stops here as bounded.

## T7 - UserControl FX_BridgeControl added and bound to FX_Bridge/index.html (no Form Save) (2026-10-25)

Harness header: `task=T7`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=8`. Bounded instruction: add exactly one UserControl component, name it FX_BridgeControl, configure Edit User Control References (Use Web Control; Web User Control Asset; `FX_Bridge/index.html`), and stop: no ordinary Form Save, no Form Script reopen, no asset edit, no runtime, no close/reopen. Full summary: `evidence/EXP-131/T7-user-control-component-summary.md`.

### Gates (before mutation)
- FX_BridgeTest selected; User scope in the status bar; Script Language `Visual C#`; Save enabled (pending); no dialog; `Pane (00)` only; console 2 errors / 0 warnings. All passed.

### Creation and binding
- Toolbox `UserControl` row selected, then one canvas click. One component created, auto-named `userControl1_USER` (Type `UserControl`).
- Renamed through the Properties Name value cell (double-click, Ctrl+A, type, Enter) to `FX_BridgeControl`. Components grid shows `Pane (00)` > `FX_BridgeControl` (UserControl). The Designer header still showed the old name (known lag); not relied on.
- Properties > Miscellaneous > Specific Attributes > `User Control Name` ellipsis opened `Edit User Control References`. Pre-commit: Use Web Control checked; Web Control URL blank; `Web User Control Asset` radio dot (disabled in the accessibility tree).
- Control URL dropdown listed built-in `mongoose/controls/*.html` entries; the dialog-scoped find located exactly one `FX_Bridge/index.html` option. Selected; readback before OK showed `FX_Bridge/index.html`.
- OK: dialog closed and a Mongoose information alert appeared: "You will need to regen this form (save the form definition and re-open it) to see the effect of this change." Alert dismissed with its OK. No Save clicked.
- Post-commit readback: reopened the dialog read-only (Control URL `FX_Bridge/index.html`, Use Web Control checked) and closed with Cancel.

### Generated variables
- Details > Variables shows only `Global - Persistent` and `Global - Temporary` categories. No Form-level `UserCtrl_*` variable is visible before a Save. The `User Control Name` value still reads `V(UserCtrl_userControl1_USER)`, using the pre-rename name. Not edited. Whether a Save regenerates or re-keys it: **unresolved**.

### Actions and reads (T7, exact)
- Browser actions: **23** (tab select 1; clicks 14; key presses 6; text entries 2), all ok, none timed out. Reconciliation: 1 + 14 + 6 + 2 = 23.
- Browser reads: **33** (tab list 1; snapshots 7; finds 12; screenshots 13). Reconciliation: 1 + 7 + 12 + 13 = 33.
- Recovery allowance: not used (exhausted from T2). Browser JavaScript written by the worker: 0. Shared `UserControl.js`: not read.
- Designer Save: 0. Undo/Redo: 0. Delete: 0. Regenerate: 0. Check In/Out: 0.

### Console
- Designer 2 errors / 0 warnings at every reading (start, after placement, after rename, after reference OK, after alert OK, final).
- Tool-written log `evidence/playwright/console-2026-10-25T13-12-29-219Z.log` (created at the T7 tab listing; cumulative for the Web Client session): 5 `[ERROR]` unload permissions-policy lines (baseline class) and 10 `[WARNING]` lines (one origin-trial feature; nine portal widget-deprecation warnings). Not like-for-like with the Designer counter. No new error class in the Designer counter; stop rule not triggered.

### Evidence (T7)
- `evidence/EXP-131/T7-user-control-component-summary.md` (full readbacks and per-image limits).
- `t7-00` (preflight Designer, `Pane (00)` only); `t7-01` (component `FX_BridgeControl` under Pane (00)); `t7-02`/`t7-03` (view-only; no effect); `t7-04`/`t7-05` (Miscellaneous and Specific Attributes expanded); `t7-06` (dialog before commit); `t7-07` (Control URL list); `t7-08` (`FX_Bridge/index.html` selected before OK); `t7-09` (after OK, regen alert); `t7-10` (alert dismissed; Components grid; Save active); `t7-11` (Variables tab: no Form category rows); `t7-12` (final, no dialog).
- Limits: the images prove the identity, the dialog values and the dirty state. They do not prove a stored Form definition, a Save, a generated variable, the `WSForm.invoke` contract or runtime behavior.
- Not written: no worker-named snapshot file was created in T7. Tool-generated per-action snapshots and the console log are automatic artifacts. The two T6 snapshots under `evidence/playwright/` were not touched.

### Knowledge state (T7)
- Toolbox UserControl row select plus one canvas click creates one UserControl named `userControl1_USER`: **observed** (one execution; the recipe was verified for Static/Edit/Button only).
- Properties Name rename to `FX_BridgeControl` via double-click, Ctrl+A, type, Enter: **observed** (one execution).
- Edit User Control References: Use Web Control checked; Control URL set to `FX_Bridge/index.html` and committed with OK: **observed** (one execution). The Web User Control Asset radio's checked state is not exposed in the accessibility tree.
- The Designer requires a Form Save and reopen to show the effect of the reference change: **observed** (alert text). Effect on the saved definition: **unresolved**.
- Generated `UserCtrl_*` variables: not visible before Save: **observed**. Their names after Save: **unresolved**.
- `WSForm.invoke('FX_Echo', 'bridge-probe', callback)` contract, callback delivery and runtime behavior: **unresolved** (candidate only).

### Created-artifact inventory (update to T6)
1. Form `FX_BridgeTest` (User scope, T2). Open, unsaved.
2. Form Script method `FX_Echo` in the `FX_BridgeTest` C# class (T5). Committed in the editor; part of the unsaved Form.
3. Web User Control Asset `FX_Bridge/index.html` with folder `FX_Bridge` (T6). Committed through asset-editor OKs; persistence not confirmed.
4. UserControl component `FX_BridgeControl` on `FX_BridgeTest` (T7). Unsaved. Its `User Control Name` reference is Designer-generated (not edited).
- Not created: runtime Form; any SQL, IDO, global or other non-FX_ object. Unchecked: whether a Save Template artifact was created at T2.

### Open questions for the coordinator
1. The next task should be the authorized ordinary Designer Form Save and close/reopen readback (Form identity, User version, UserControl reference, FX_Echo method, generated variables). Authorize it, and say whether the T6 same-session asset persistence question is to be settled by the same Save and reopen.
2. The Undo-state change after the Global Objects OK (T6) remains unexplained; accept as observed or check before the Save.
3. Two T6 snapshots under `evidence/playwright/` (outside the brief's evidence directory) await operator disposition.
4. Whether the generated `UserCtrl_userControl1_USER` variables are re-keyed to `FX_BridgeControl` after the Save.

### Status (T7)
- **T7 complete as bounded.** `FX_BridgeControl` (UserControl) exists on FX_BridgeTest and is bound to `FX_Bridge/index.html` in the Designer (unsaved). No ordinary Form Save, no Form Script change, no asset change, no runtime, no close/reopen. The Designer is dirty by design (Save enabled); no dialog is open; the console is 2 errors / 0 warnings. T7 stops here.

## T8 - One ordinary Designer Form Save of FX_BridgeTest (2026-10-25)

Harness header: `task=T8`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=9`. Bounded instruction: preflight the T7 state, activate the ordinary top-toolbar Save exactly once, read back, and stop with FX_BridgeTest open. Full summary: `evidence/EXP-131/T8-ordinary-form-save-summary.md`.

### Preflight (before Save)
- Tab 0 selected (tab list first); heading `FX_BridgeTest`; Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar `ScopeType: User`; Script Language `Visual C#` (Form tab find); Components `Pane (00)` > one `FX_BridgeControl` (UserControl); Save enabled; Undo enabled; no dialog; console 2 errors / 0 warnings. All passed.

### Save
- Designer top-toolbar **Save** clicked **once** (tool `ok`). Recipe source: `recipes/components/configure-basic-component.md` (Save = `mgtoolbarbutton-1085`, POST `DesignerSession/SaveChanges` with `{ formId }`). The brief's `recipes/forms/*save*` path does not exist.
- Response: no toast, alert, error or dialog visible. After Save: Save, Undo and Redo disabled; Regenerate Form changed from enabled to disabled (observed; cause not established; not invoked).
- Post-Save readbacks: tab and Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; `ScopeType: User`; Script Language `Visual C#`; Components `Pane (00)` > `FX_BridgeControl` (UserControl); no dialog; console 2 errors / 0 warnings.

### Actions and reads (T8, exact)
- Browser actions: **4** (tab select 1; clicks 3: Components tab 1, Form tab 1, Save 1). Reconciliation: 1 + 3 = 4. All ok.
- Browser reads: **10** (tab list 1; snapshots 2; finds 6; screenshots 1). Reconciliation: 1 + 2 + 6 + 1 = 10.
- Designer Save: **1**. Undo/Redo, Delete, Regenerate Form, Check In/Out, close/reopen, runtime, Form Script reopen, asset reopen: 0 each.
- Recovery allowance: not used (exhausted from T2). Browser JavaScript written by the worker: 0. Shared `UserControl.js`: not read.

### Console
- Designer 2 errors / 0 warnings at every reading (start, after tab clicks, after Save, final). Tool log `evidence/playwright/console-2026-10-25T13-19-15-482Z.log` is cumulative for the Web Client session and not like-for-like. No increase; stop rule not triggered.

### Evidence (T8)
- `evidence/EXP-131/T8-ordinary-form-save-summary.md` (full readbacks and limits).
- `evidence/EXP-131/t8-00-designer-fresh-preflight-snapshot.md` (fresh snapshot before Save; Save enabled; identity and scope).
- `evidence/EXP-131/t8-01-after-save-snapshot.md` (fresh snapshot after Save; Save/Undo/Redo disabled; no dialog text).
- `evidence/EXP-131/t8-02-designer-after-save-clean.png` (post-Save screenshot: FX_BridgeTest, Visual C#, Pane (00) > FX_BridgeControl (UserControl), User scope, Save/Undo greyed, no dialog). Proves the post-Save clean Designer state; does not prove compilation, storage of the asset or persistence across reopen.
- Tool-generated (not worker-named): `evidence/playwright/page-2026-10-25T13-19-34-130Z.yml`, `page-2026-10-25T13-19-40-859Z.yml`, `page-2026-10-25T13-19-49-040Z.yml`, `console-2026-10-25T13-19-15-482Z.log`.

### Knowledge state (T8)
- Ordinary toolbar Save of the pending FX_BridgeTest changes, one click: returned `ok` with Save disabled afterward and no visible error: **observed** (one execution).
- FX_Echo compilation: **unresolved** (no compile output read).
- UserControl `User Control Name` expression re-keying after Save: **unresolved** (`V(UserCtrl_userControl1_USER)` still the last read in T7; not re-read in T8).
- Asset persistence and Form close/reopen durability: **unresolved** (next task).
- `WSForm.invoke('FX_Echo', 'bridge-probe', callback)` contract and runtime: **unresolved** (candidate only).

### Status (T8)
- **T8 complete as bounded.** One ordinary Designer Save was performed and read back as clean (Save disabled, no visible error). FX_BridgeTest is open with no dialog and no unsaved changes. No close/reopen, Form Script or asset reopen, runtime, or Regenerate. The two T6 worker-named snapshots under `evidence/playwright/` were not touched; their disposition remains with the operator.

## T9 - One Form close, one reopen, read-only readbacks (no mutation) (2026-10-25)

Harness header: `task=T9`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=10`. Bounded instruction: preflight the post-Save state; close FX_BridgeTest once from its Form tab; reopen once; verify identity, User version, Visual C#, Components, reference, variables, asset and Form Script read-only; close each read-only editor with Cancel; leave FX_BridgeTest open. Full summary: `evidence/EXP-131/T9-close-reopen-readback-summary.md`.

### Preflight
- Tab 0 selected; heading `FX_BridgeTest`; Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; `ScopeType: User`; Save, Undo, Redo disabled; Visual C#; Components `Pane (00)` > `FX_BridgeControl` (UserControl); no dialog; console 2 errors / 0 warnings. Passed.

### Close and reopen (one each)
- **Close:** Form-tab close control clicked once. Tab list empty; no save prompt; no dialog. (`t9-01`, `t9-02`)
- **Reopen:** Form menu, then the recent-list item `FX_BridgeTest` (the Select Form dialog was not used; a find for `Select Form` returned no match). URL gained `MGForm=FX_BridgeTest`; tab reappeared; console 2/0. (`t9-03`)

### Readbacks after reopen
- Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; Script Language `Visual C#`; Save, Undo, Redo disabled. (`t9-03`, `t9-04`)
- Components: `Pane (00)` > one `FX_BridgeControl` (UserControl, Pane 0, Tab 0). (expanded inventory readback; `t9-10`)
- `FX_BridgeControl` User Control Name expression: **`V(UserCtrl_FX_BridgeControl)`**. T7 had `V(UserCtrl_userControl1_USER)`; the expression re-keyed to the renamed component after Save and reopen. Not edited.
- Edit User Control References (read-only, Cancel): Use Web Control checked; Control URL `FX_Bridge/index.html`; Web User Control Asset radio shows a dot (disabled; visual only). (`t9-09`, `t9-10`)
- Variables: after Save, a `Form - Persistent` category exists (absent in T7). It lists `UserCtrl_FX_BridgeControl`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlUrl_FX_BridgeControl` **and the stale** `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`. Nothing was edited or deleted. (`t9-11`, `t9-12`, `t9-15`)
- Web User Control Asset `FX_Bridge/index.html` (Global Objects, read-only; Cancel on both dialogs): exists; `text/html`; `../$app/scripts/UserControl.js` present once; `FX_BridgeButton` (one button); `FX_BridgeOutput` (one output element); candidate `WSForm.invoke("FX_Echo", "bridge-probe", ...)` callback writing `textContent`. The call is candidate only. (`t9-13`, `t9-14`, `t9-15`)
- Form Script (read-only, Cancel): scaffold preserved (namespace, `public class FX_BridgeTest : FormScript`, the comment block); exactly one `public string FX_Echo(string s)` returning `"FX_ECHO:" + s`. Compile Result: Output empty; Errors grid no rows. No compile error displayed; compilation not confirmed. (`t9-17`, `t9-18`, `t9-19`)

### Actions and reads (T9, exact)
- Browser actions: **27** (tab select 1; clicks 24; key presses 2; text entries 0). Reconciliation: 1 + 24 + 2 = 27.
- Browser reads: **43** (tab list 1; snapshots 13; finds 21; screenshots 8). Reconciliation: 1 + 13 + 21 + 8 = 43.
- Designer Save 0; Undo/Redo 0; Regenerate 0; Delete 0; Check In/Out 0; runtime 0; button activation 0. Form close 1; Form reopen 1.
- Recovery allowance: not used (exhausted from T2). Browser JavaScript written by the worker: 0. `UserControl.js`: not read.
- Cancel note: the Edit Browser File dialog's Cancel was clicked by ref e1733 (OK was e1731). The tool's resolved selector ID does not itself show the label; the visible result (dialog closed, Global Objects still open) is consistent with Cancel. No text was typed. Recorded for transparency.

### Console
- Designer 2 errors / 0 warnings at every T9 reading. Tool log `evidence/playwright/console-2026-10-25T13-23-10-862Z.log` is cumulative for the session and not like-for-like. No increase; stop rule not triggered.

### Evidence (T9)
- `evidence/EXP-131/T9-close-reopen-readback-summary.md` (full readbacks, per-image limits).
- Worker-named snapshots: `t9-00` (preflight), `t9-01` (after close), `t9-03` (reopened), `t9-05` (Details expanded), `t9-07` (Components collapsed), `t9-08` (component selected), `t9-09` (reference dialog), `t9-12` (Form - Persistent variables), `t9-13` (Web Assets tree), `t9-14` (stored asset content), `t9-16` (Form properties), `t9-17` (Script Editor), `t9-20` (final).
- Screenshots: `t9-02` (closed, no dialog), `t9-04` (reopened: Name, Version, Visual C#, Save disabled), `t9-06` (Components, Pane collapsed), `t9-10` (reference dialog; component row visible behind), `t9-11` (Variables tab), `t9-15` (stored asset HTML), `t9-18` (script with Compile Result Output empty), `t9-19` (Errors grid, no rows).
- Limits: all readbacks are same-session UI evidence after one reopen, not database durability. Compilation of FX_Echo is not confirmed. The WSForm.invoke contract and runtime behaviour are unverified.

### Knowledge state (T9)
- Form-tab close then recent-list reopen returned the Form with identity, User scope, Visual C#, and one UserControl: **observed** (one run; same-session).
- UserControl reference retained (Use Web Control; `FX_Bridge/index.html`): **observed** (one run; same-session).
- User Control Name re-keyed to `V(UserCtrl_FX_BridgeControl)` after Save: **observed** (one run). Stale `UserCtrl*_userControl1_USER` variables also present: **observed**.
- Asset content retained in a read-only reopen: **observed** (one run; same-session).
- FX_Echo compiled: **unresolved** (no error rows, no success output).
- `WSForm.invoke('FX_Echo', 'bridge-probe', callback)` contract and runtime behavior: **unresolved** (candidate only).

### Status (T9)
- **T9 complete as bounded.** One Form close and one recent-list reopen; readbacks match the T8 Save. FX_BridgeTest is open with Save, Undo and Redo disabled and no dialog. No mutation, no runtime. The two T6 snapshots under `evidence/playwright/` were not touched.

## T10 - One runtime round trip of FX_BridgeTest; one activation; runtime close without saving (2026-10-25)

Harness header: `task=T10`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=11`. Bounded instruction: review T9; preserve the clean Designer; Web Client console and session baseline; record inherited runtime Forms; open one runtime FX_BridgeTest through Web Client Select Form; inspect rendering; activate `FX_BridgeButton` exactly once; close only the experiment-opened runtime Form without saving; leave the Designer clean. Full summary: `evidence/EXP-131/T10-runtime-round-trip-summary.md`.

### Preflight (Web Client, before mutation)
- Tab 1 (`Mongoose` portal tab, Web Client) selected after a tab list. Header account `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No session-expiry dialog, no sign-in node, no portal banner.
- Inherited runtime Forms: **none** open (empty main region; no runtime tab).
- Console: Web Client `3 errors, 10 warnings` (equal to the T1 baseline). Designer `2 errors, 0 warnings` (T9 end state). Error list: three `Permissions policy violation: unload` messages. Passed.

### Runtime open (one instance)
- Web Client **Open** clicked once. Select Form dialog showed one row `FX_BridgeTest` under a carried-over filter `FX_Bridge` (not typed in T10).
- Row double-clicked once. URL gained `favoriteContext=FX_BridgeTest`; runtime tab `FX_BridgeTest` opened. Identity by tab heading and URL. Help → About This Form was not opened.
- Pre-activation (`t10-03`): button `FX Bridge Test` rendered, not obscured; output area empty; Save greyed. Console 3/10 (unchanged).

### Activation (exactly one) and observed output
- **Activation count: 1.** One ordinary click on `FX Bridge Test`.
- Post-activation (`t10-04`, `t10-05`): button present; no dialog; visible output text **`0`** beneath the button. The literal `FX_ECHO:bridge-probe` was **not** displayed. Output changed from empty to `0`.
- Console after the activation: 3/10; error-level list unchanged; tool total 40 before and after. No new console entries.
- **Classification: unsuccessful at the observed level.** Root cause unresolved (the candidate `WSForm.invoke("FX_Echo", "bridge-probe", callback)` contract, the callback value path, and an unrelated default `0` cannot be distinguished from this evidence). `UserControl.js` was not inspected; no retry, alternate signature or reload was made.

### Runtime close (one), without saving
- `Close Panel FX_BridgeTest` clicked once. No save prompt, no dialog. Runtime tablist empty; Save disabled (`t10-06`). Web Client back to the empty shell (`t10-07`). Inherited runtime Forms: none before, none after (preserved).

### Designer check after runtime close (read-only)
- FX_BridgeTest open in tab 0. Save, Undo, Redo disabled. Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; Visual C#; `ScopeType: User`; console 2/0; no dialog (`t10-08`, `t10-09`). Designer unchanged in T10.

### Actions and reads (T10, exact)
- Browser actions: **6** (tab select 2; clicks 4: Open, Select Form row double-click, `FX Bridge Test` activation, runtime tab close). Reconciliation: 2 + 4 = 6.
- Browser reads: **13** (tab list 1; snapshots 6; screenshots 4; console reads 2). Reconciliation: 1 + 6 + 4 + 2 = 13.
- Button activations 1; runtime opens 1; runtime closes 1. Designer Save 0; Undo/Redo 0; Regenerate 0; Delete 0; Check In/Out 0; asset, Form Script and component edits 0; reloads/navigations 0. Recovery allowance not used. Browser JavaScript written by the worker: 0. `UserControl.js` not opened.

### Console
- Web Client: 3/10 at every reading (before open, after open, after double-click, before activation, after activation, after close). Designer: 2/0 at its T10 reading. Tool log files are cumulative and not like-for-like. No unexplained increase; stop rule not triggered.

### Evidence (T10)
- Worker-named under `evidence/EXP-131/`: `t10-00-web-client-fresh-preflight-snapshot.md`, `t10-01-select-form-dialog-snapshot.md`, `t10-02-runtime-open-after-dblclick-snapshot.md`, `t10-03-runtime-form-before-activation.png`, `t10-04-after-single-activation-snapshot.md`, `t10-05-runtime-form-after-single-activation.png` (decisive: output `0`), `t10-06-after-runtime-close-snapshot.md`, `t10-07-web-client-after-runtime-close.png`, `t10-08-designer-after-runtime-close-snapshot.md`, `t10-09-designer-after-runtime-close.png`, `T10-runtime-round-trip-summary.md`.
- Tool-generated (not worker-named): `evidence/playwright/page-2026-10-25T13-30-10-503Z.yml`, `page-2026-10-25T13-30-21-457Z.yml`, `page-2026-10-25T13-30-37-631Z.yml`, `page-2026-10-25T13-30-51-621Z.yml`; `evidence/playwright/console-2026-10-25T13-29-49-582Z.log`, `console-2026-10-25T13-29-49-583Z.log`.
- Not touched: the two T6 snapshots under `evidence/playwright/` (operator disposition pending).

### Created-artifact inventory (for possible later operator-authorized cleanup; none removed)
- Form `FX_BridgeTest` (User scope; Save Template unchecked at T2; a Save Template artifact is still unverified).
- Web User Control Asset `FX_Bridge/index.html`.
- UserControl component `FX_BridgeControl` on `FX_BridgeTest` (Use Web Control; `FX_Bridge/index.html`).
- Form Script method `FX_Echo(string s)` in the `FX_BridgeTest` C# script.
- Generated Form-persistent variables: `UserCtrl_FX_BridgeControl`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlUrl_FX_BridgeControl`, plus stale `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER` (runtime significance unknown; not edited).

### Acceptance (T10 view)
- **AC-1:** T10 preflight established the account header, usable shell, no session dialog, console baseline and no inherited runtime Forms. The T1 account gate was not re-run.
- **AC-2:** supported by T9 and T10 Designer readbacks (identity, User version, User scope, Save disabled).
- **AC-3, AC-4:** supported by T9 readbacks; not re-read in T10.
- **AC-5:** unchanged from T9 (same-session UI boundary only).
- **AC-6:** identity, the button and the output area are visible in `t10-03` and `t10-05`. After exactly one activation the output is `0`, not `FX_ECHO:bridge-probe`. Outcome **unsuccessful at the observed level**; root cause unresolved.
- **AC-7:** runtime Form closed without saving; no unexpected dialog; inherited Forms preserved; Designer Save disabled; no worker-attributable unsaved change.
- **AC-8:** this section plus the summary file, with the inventory above.

### Knowledge state (T10)
- Web Client Select Form double-click opened one runtime `FX_BridgeTest` and the button rendered: **observed** (one run).
- The single activation produced visible output `0`, not `FX_ECHO:bridge-probe`: **observed** (one run).
- The bridge round trip (`WSForm.invoke("FX_Echo", "bridge-probe", callback)` → `FX_Echo` → callback writes `FX_BridgeOutput`): **unsuccessful at the observed level; mechanism unresolved**. Candidate contract, not verified.
- Runtime close without saving left the Designer clean: **observed** (one run).
- FX_Echo compilation: **unresolved** (unchanged from T9).

### Open questions for the coordinator / operator
1. The output `0` has no determined cause. Any follow-up diagnosis is outside this bounded step. The brief forbids further invocation attempts here, and the recovery allowance is exhausted.
2. Whether the stale `UserCtrl*_userControl1_USER` variables matter is still unknown.
3. The two T6 snapshots under `evidence/playwright/` still need a confinement disposition.
4. Whether a Save Template artifact was created at T2 is still unverified.
5. Help → About This Form was not used for identity. The tab heading and URL were used instead.

### Status (T10)
- **T10 complete as bounded.** One runtime open, one activation, one runtime close without saving. The Designer remains open and clean. Bridge outcome: unsuccessful at the observed level, root cause unresolved. Stopped at the T10 boundary; no further runtime or Designer action taken.

## T11 - Evidence reconciliation and closure preparation (documentation only, 2026-10-25)

Harness header: `task=T11`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=12`. Bounded instruction: no browser tool, no Mongoose mutation, no runtime, no Form, asset, script, component or variable change; reconcile T1 to T10 against the controller audits; write the manifest; update only this record. Full manifest: `evidence/EXP-131/T11-final-evidence-manifest.md`.

### Acceptance (final, qualified)
- **AC-1 supported** (preflight T1, gate re-check T2, Web Client preflight T10). Account ownership rests on the operator's T1 confirmation.
- **AC-2 supported** (`t2-04`, `t8-02`, `t9-04`, `t10-09`). Full User version from accessibility readback; the screenshot truncates it.
- **AC-3 supported** as stored content only (`t9-14`, `t9-15`). The `WSForm.invoke` call is candidate, not verified.
- **AC-4 supported** (`t9-08`, `t9-10`, `t9-17`, `t9-18`). The Web User Control Asset radio state is visual only.
- **AC-5 supported within a weak same-session boundary.** One Save (T8), one close and one reopen (T9), readbacks and an asset readback. Not database durability.
- **AC-6 FAILED.** Worker-reported visible observation, supported by `t10-05`: one activation displayed `0`, not `FX_ECHO:bridge-probe`. The root cause is unresolved. No claim that `WSForm.invoke` returned `0`, that the callback ran or failed, or that `FX_Echo` compiled or failed.
- **AC-7 supported** (`t10-06` to `t10-09`): runtime Form closed without saving; no dialog; no inherited runtime Form affected; Designer clean with Save disabled.
- **AC-8 qualified** (manifest sections 3 to 10).

### Reconciliation (controller audits authoritative)
- **Actions:** 142 total in both controller and worker reports (T1 21, T2 21, T3 6, T4 4, T5 6, T6 24, T7 23, T8 4, T9 27, T10 6). Agree in every task.
- **Reads:** controller 202, worker 201. Explained: T1 controller includes one `wait_for` (+1); T2 worker reported 12 snapshots, controller shows 11 (-1, worker overcount); T6 worker reported 2 snapshots, controller shows 3 (+1, the untargeted row 13 was not counted). Not forced to agree.
- **Single Designer Save:** T8 row 18. **Single close and reopen:** T9 rows 6 and 14. **Single runtime open, activation and close:** T10 rows 17, 23 and 29.
- **Console:** Web Client 3 errors / 10 warnings at every reading; Designer 2 / 0 at every reading. The same three "unload" permissions-policy errors throughout. Stop rule not triggered.
- **Prohibited-tool hits (controller "flagged"):** `browser_type` 10 (filter, name, asset and script-editor text entries). No browser evaluate, run-code or other JavaScript call in any task. No read of `UserControl.js`.

### Deviations and disclosures found in reconciliation
- **T1 guard-hook event, not previously reported.** Controller T1 row 9 (a Glob) returned "Guard state unavailable: atomic update/audit I/O failed; preserve state and stop instead of bypassing the hook." The worker did not stop; rows 10 to 80 continued. The controller audit recorded the calls, but the guard-state I/O failure needs operator review.
- **T7 coordinate clicks not disclosed.** The controller shows five `mouse_click_xy` calls in T7 (rows 20, 47, 50, 54, 78). The T7 summary discloses only row 20. Rows 47, 50, 54 and 78 need operator review. T3 row 19 is disclosed.
- **T1 filter strings:** `MockLoginPortal` (row 46) and `FX_InventoryPrototype01` (row 50) were typed into the Select Form filter. Neither object was opened or selected. Flagged because `FX_InventoryPrototype01` is out of scope.
- **T8 failed Edits:** two repository Edit calls to the T8 summary failed with no write. Later Edits succeeded.
- **T2 recovery:** one click timeout (A-1) was not followed by a snapshot; the Save Template timeout (A-2) used the fresh snapshot and one corrected label click. Allowance exhausted from T2.

### Created-artifact inventory (none removed; cleanup needs separate operator authorization)
1. Form `FX_BridgeTest` (T2). 2. Form Script `FX_Echo(string s)` (T5). 3. Web User Control Asset `FX_Bridge/index.html` with folder `FX_Bridge` (T6). 4. UserControl `FX_BridgeControl` (T7). 5. Designer-generated Form variables `UserCtrl*_FX_BridgeControl` and stale `UserCtrl*_userControl1_USER` (appeared at T8; not edited). 6. Script Language change to `Visual C#` (T4). 7. A possible Save Template artifact from T2 is **unverified**.

### Unresolved (not claimed as settled)
- Root cause of the `0` output. Candidate `WSForm.invoke` contract unverified.
- `FX_Echo` compilation (empty Compile Result is not success).
- Callback delivery and runtime behaviour.
- Possible Save Template artifact.
- Backend durability and cross-session persistence (not tested).
- Runtime significance of the stale generated variables.
- Cause of the Regenerate Form state change at T8 and of the Undo state change at T6.

### Confinement and disposition items for the operator
- Two worker-named T6 snapshots remain outside `evidence/EXP-131/`: `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml` and `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml`. Not moved or reclassified.
- Tool-generated `evidence/playwright/*2026-10-25T*` snapshots and console logs are not worker-named.
- The T1 guard-hook event and the T7 undisclosed coordinate clicks (above).

### Recommendation
Record EXP-131 as **BLOCKED / UNSUCCESSFUL** for the runtime bridge round trip. Any diagnosis of the `0` output needs a new, separately authorized experiment. Do not record a functional success.

### Files written in T11
- `evidence/EXP-131/T11-final-evidence-manifest.md` (new).
- `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` (header status updated; this section appended). No other file was written.

### Status (T11)
- **T11 complete as bounded.** Manifest written; record updated; no browser tool used; no Mongoose object changed. Stopped at the T11 boundary.
