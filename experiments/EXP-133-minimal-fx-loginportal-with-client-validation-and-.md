# EXP-133 - Minimal FX_LoginPortal With Client Validation and Form Script Bridge

**Status (latest: T16 documentation continuation, 2026-10-26): the T15 fresh-Designer readback and runtime close are reconstructed in `evidence/EXP-133/T15-fresh-designer-readback-and-runtime-close-summary.md` (the T15 worker stopped at the agent turn limit before its report); the final manifest is `evidence/EXP-133/T16-final-evidence-manifest.md`. Observed: one ordinary Designer Save (T8); one runtime open, one Sign in with `received` (T14); one runtime close (T15, `t15-24`); a fresh Designer window with Save disabled, Visual C#, both assets, Global `FX_vLoginResult` and the `FX_LoginControl` reference (T15). **AC-8 is not met as specified:** the required ordinary Designer close and reopen did not complete (T9 close failed; no close completed). **Open for operator disposition:** three stale non-FX_ generated variables `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER` and `UserCtrlUrl_userControl1_USER` (six Form-level UserCtrl variables in total; the three FX_LoginControl ones fall under the 2026-10-26 disposition); the timing of the `User Control Name` re-key (T8 stale, T15 FX_ name); the state of the stale Designer tab and of `FX_BridgeTest`; the content of audit order 160 (a record edit reported ok by T15 whose content is not determinable). Compile success, Global-variable resolution, replay, durability and real authentication are not claimed. Sections below are the per-task history; the T2 Visual Basic wording and the T9 status text are historical.**

Harness header (T1): `run_id=R-20261025-234739-gn7q`, `experiment_id=EXP-133`, `cycle_id=0`, `task=T1`, `worker_session_id=232b1097-e642-49d0-8ef9-212d4c7767a1`, `task_message_id=834560e5-334d-4f16-8f68-7726631a50c1`. Approved brief commit `95bb0da`. This record was created by T1 because it did not exist at T1 start (same pattern as EXP-131 and EXP-132).

## Objective (brief summary)

In the operator's own User scope, reproduce a minimal MockLoginPortal-style login page on FX_ objects using the Classic BuildFromScratch Form route (Flex deliberately not recreated):

- one User-scoped Form `FX_LoginPortal` (Visual C# Form Script);
- two Web User Control assets, `FX_Login/index.html` and `FX_Login/script/app.js` (no CSS or third asset);
- one Global persistent variable `FX_vLoginResult`;
- one UserControl component `FX_LoginControl` (Use Web Control; Control URL `FX_Login/index.html`);
- one C# Form Script method `public string FX_ProcessLogin(string username, string password)` that sets `FX_vLoginResult` to `missing`, `empty` or `received` and returns the same literal;
- client validation in `app.js` (trimmed username of at least 3 characters; password of at least 6 characters), with `WSForm.invoke("FX_ProcessLogin", username, password, callback)` for valid input and `WSForm.getVarValue("FX_vLoginResult", ...)` in the callback;
- one ordinary Designer Form Save, one close/reopen, and one runtime round trip with the fixed fake test pair (username `fx_probe`; password redacted from this record, value per the approved brief).

Out of scope: real authentication, credential verification, sessions, cookies, tokens, IDOs, SQL, any non-FX_ artifact, Mock objects, `FX_InventoryPrototype01`, `FX_CustomerPortal`, `$app/scripts/UserControl.js`, invalid-input runtime tests, a second Sign in, investigation of the Global-variable storage path, and replay verification.

## Sources read before any browser action (T1)

- `AGENTS.md` (full).
- `recipes/forms/create-basic-form.md` (verified recipe; Save Template unchecked; Finish persists the Form).
- `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md`: section 13 (dependency map), section 14 (readiness), section 15 (plan steps P5 at line 498 and P6 at line 499), section 16 (proposed FX_ identities).
- `experiments/EXP-131-...md` (lines 1-427 of 644) and `experiments/EXP-132-...md` (full).
- `docs/mongoose/guides/user-control.md`: UserControl creation steps (lines 30-75); `WSForm.invoke(methodName, [parameter1[,...]], callbackFn)` (lines 247-269); `WSForm.getVarValue(variableName, callbackFn)` (lines 200-212).
- `docs/mongoose/guides/scripts.md` lines 70-96 (global versus form variable access).

Full T1 source review, gate table and accounting: `evidence/EXP-133/T1-preflight-summary.md`.

## Approved-source findings (T1)

- **Two-argument invocation (AC-4 precondition): established by the approved guidance.** `WSForm.invoke(methodName, [parameter1[,...]], callbackFn)`, with `parameter<n>` described as a list of parameters matching the Form Script method. The brief's `WSForm.invoke("FX_ProcessLogin", username, password, cb)` pattern is therefore documented. It is not runtime-verified. The EXP-131 one-argument candidate and the EXP-132 Mock no-argument variant are not used.
- **Design concern (unresolved; for coordinator decision before T2).** `docs/mongoose/guides/scripts.md` lines 76-96 document global variables through `Application.Variables("...")` and form variables through `ThisForm.Variables("...")`. The brief places `FX_vLoginResult` in Global scope and has `FX_ProcessLogin` write `ThisForm.Variables("FX_vLoginResult").Value`. This is the same qualification EXP-132 recorded (EXP-130 U-1). If `ThisForm.Variables` does not resolve a Global variable at runtime, the round trip may fail or show a blank result. The brief places this investigation out of scope, so the worker will not investigate it. AC-9 can support only an observed single-run round trip.

## Account gate and existing state (T1, observed)

- Web Client header: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`evidence/EXP-133/t1-15-web-client-account-header-and-console.png`).
- Designer status bar: `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (`evidence/EXP-133/t1-14-designer-final-clean-user-scope.png`).
- Positive control: `FX_CustomerPortal` visible in the filtered Select Form (`evidence/EXP-133/t1-17-select-form-positive-control-fx-customerportal.png`).
- Excluded Forms: `MockLoginPortal` and `FX_InventoryPrototype01` absent from the Select Form view (filtered; not opened).
- `FX_LoginPortal` absent (filter; `t1-06`). Login-substring check (`t1-07`): only non-FX Forms `MPLogin` and `Users Login Report` / `UserLoginReport`; no `FX_Login*` Form.
- Web User Control Assets top level: `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`; no `FX_Login` folder, so `FX_Login/index.html` and `FX_Login/script/app.js` are absent (`evidence/EXP-133/t1-09-web-user-control-assets-top-level-no-fx-login.png`).
- Global `FX_vLoginResult` absent from the rendered, sorted Global Objects list (`FX_vEcho` then `gbgc_bg` with nothing between) and from filters `LoginResult` and `vloginresult` (`t1-10`, `t1-11`, `t1-13`); the positive control `FX_vEcho` in the same dialog returned its row (`t1-12`). Tenant-wide absence is **not** proven: the Global list may be a rendered window or scoped, and EXP-132 saw `vInventoryJson` absent from the same list.
- Residual state: `FX_BridgeTest` (EXP-132) is open in the Designer, clean, User scope, Save disabled. Not part of EXP-133 and not touched.
- Console: Web Client 3 errors / 10 warnings; Designer 2 errors / 0 warnings; no rise during T1.

## Actions performed (T1)

- Browser actions: 32 (tab selects 4; clicks 10; text fills 9; End key presses 9); all ok; no timeout; no error.
- Browser reads: 29 (tab list 1; snapshots 15; screenshots 4; finds 9).
- Recovery allowance: fresh snapshot 0 of 1; corrected inspection 0 of 1.
- Browser JavaScript: 0. Credentials touched: 0.
- Mutations: Forms created 0; Global objects created 0; asset edits 0; Saves 0; close/reopen 0; runtime 0; OK committed 0 (all dialogs closed with Cancel).

## Repository writes (T1)

- Created: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (this record).
- Created: `evidence/EXP-133/T1-preflight-summary.md`; snapshot files `evidence/EXP-133/t1-00-...md` through `t1-13-...md` and `t1-16-...md`; screenshots `evidence/EXP-133/t1-09-...png`, `t1-14-...png`, `t1-15-...png`, `t1-17-...png`.
- Tool-written (outside `evidence/EXP-133/`, disclosed): per-action snapshots `evidence/playwright/page-2026-10-25T15-*.yml`; console log `evidence/playwright/console-2026-10-25T15-48-06-543Z.log`.
- Modified: none.

## Acceptance (T1 view)

- **AC-1:** supported with the limits in the T1 summary (scoped inventory, not tenant-wide; the Global list may be a window; Global absence rests on the rendered list plus filters).
- **AC-2 to AC-10:** not started (T1 scope).

## Deviations and disclosures (T1)

- Screenshot `t1-15-web-client-account-header-and-console.png`: the filename says "console", but the console is not visible in the frame. The Web Client console reading (3/10) rests on the snapshot footer. The worker cannot rename or delete the file.
- Filter inputs and End presses were used for the Select Form and Global Objects views, as in EXP-131 and EXP-132. "Exact-name" means a full-name contains match with case-insensitive default; this is not a strict equality check.
- Account ownership is confirmed only by the header text in this T1. The EXP-131 record (D-5) states the operator confirmed ownership at handoff.

## Knowledge state (T1)

- Web Client account header and Designer `ScopeType: User`: **observed**.
- Absence of `FX_LoginPortal`, `MockLoginPortal`, `FX_InventoryPrototype01`, `FX_Login` assets and `FX_vLoginResult` in the visible views: **observed** (one execution per filter; scoped, not tenant-wide).
- `WSForm.invoke` two-argument pattern: **candidate_procedure** (documented in the approved guidance; not runtime-verified).
- `ThisForm.Variables` and `WSForm.getVarValue` resolution of a Global variable: **unresolved** (EXP-130 U-1; design concern above).
- Replay verification: **not claimed**.

## Open questions for the coordinator (before T2)

1. **Design concern (Global versus `ThisForm.Variables`).** Proceed as briefed, accepting an observed round trip only; or amend the design (for example, to a Form-level variable) before the Form is created.
2. Authorize T2 (Form creation through the verified recipe, Save Template unchecked, Script Language Visual C#). The EXP-131 Script Language path (Behavior > Script Language > Visual C# option, then Tab commit) is observed but not verified as a procedure.
3. `FX_BridgeTest` (EXP-132 residual, clean) is open in the Designer. Coordinator to say whether it stays open during T2.
4. Confirm the `deny_browser_javascript=true` tool-policy flag, which the worker cannot inspect.
5. Designer Edit menu contains `Revert Global Object Definition`; it must not be clicked in any EXP-133 task.

## T2 — Form creation (2026-10-25)

Summary and full evidence: `evidence/EXP-133/T2-creation-summary.md`.

### What was created

- One User-scoped Form `FX_LoginPortal` via the Designer Form Wizard: New Form → Category `Classic` → Wizard `BuildFromScratch` (option label "Build from Scratch"). Page 1: Name `FX_LoginPortal`, Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source / Query Form / Comments empty. Page 2: Save Template unchecked. Finish → `Process Completed Successfully` (`evidence/EXP-133/t2-05-wizard-process-completed-successfully.png`). This Finish is the wizard's creation persistence, not the experiment's ordinary Designer Save.
- Designer readback after creation (`t2-06`, `t2-07`, `t2-08`): ScopeType `User / anton.ramos@3mworks.com.ph`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Caption empty; Components `Pane (00)` only (no components); Save `[disabled]` (clean). `FX_BridgeTest` remained open as a second Form tab, clean and untouched.
- Web Client Select Form (`t2-10`), same session, after one Cancel and one reopen: one row `FX_LoginPortal` for the filter `FX_LoginPortal` (the first open, `t2-09`, showed no rows and was treated as a stale client store).

### Deviation: Script Language is Visual Basic (AC-2 not fully met)

- The Designer Form Properties show **Script Language = Visual Basic** (`t2-07`). The wizard has no Script Language option.
- The brief requires Visual C#. Changing it is a Designer property change that dirties the Form; the only Save this task may perform is not authorized in T2. It was therefore **not applied**. The Form remains clean with Visual Basic.
- Operator options: (a) authorize a Script Language change to Visual C# in the next task, before the single ordinary Designer Save (this keeps the change inside the one authorized Save); (b) accept Visual Basic and amend the method language in the brief. Recommendation: (a), because AC-2 and AC-7 both specify Visual C#, and the next task's Save already covers all approved definition changes. Watch for any generated script artifact on the change.

### Recovery and console

- Save Template checkbox click (ref e930) failed with a timeout: the Ext `displayEl` span intercepted pointer events (5 s). A fresh untargeted snapshot confirmed no change; a corrected click on the visible label "Save Template" unchecked it (`t2-04`). Recovery allowance used: fresh snapshot 1/1, corrected attempt 1/1.
- Designer console 2 errors / 0 warnings before and after; Web Client console 3 errors / 10 warnings before and after. No increase.

### Action ledger (T2)

- Browser actions 22 (tab selects 2; clicks 17 including the timed-out click; text entries 2; End key 1). Reads 33 (tab list 1, snapshots 7, screenshots 11, finds 14). JavaScript 0. Destructive commands 0. Top-toolbar Delete not activated.
- Mutations: 1 Form created (wizard Finish). Ordinary Designer Save 0. Assets 0. Global objects 0. Components 0. Script methods 0. Close/reopen 0. Runtime 0. Sign In 0.

### Evidence files (T2)

`evidence/EXP-133/t2-00` … `t2-10` (PNG), plus `evidence/EXP-133/T2-creation-summary.md`. Tool-written snapshot/console files appear outside this directory under `evidence/playwright/` (disclosed).

### Status

T2 complete as bounded. Form created and readback clean; AC-2 partly satisfied (User scope, Classic BuildFromScratch, name, clean state) and the Visual C# requirement remains open pending operator disposition. No asset, variable, component, Form Script method or ordinary Save exists yet. The Global-variable design concern (ThisForm.Variables / Global FX_vLoginResult) remains open and was not investigated. The worker stopped at the T2 boundary; the Designer is on `FX_LoginPortal` (clean) with `FX_BridgeTest` also open, and the Web Client is on Explorer with no dialog.

## T3 — Script Language correction (2026-10-25)

Summary and full evidence: `evidence/EXP-133/T3-script-language-summary.md`.

- Active Form confirmed before acting: `FX_LoginPortal` tab selected in the Designer; `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Version `User version for user anton.ramos@3mworks.com.ph`; Script Language `Visual Basic` (`t3-00`).
- Dropdown offered `Visual Basic` and `Visual C#` (`t3-01`). Selected `Visual C#` (`t3-02`): Script Language now reads `Visual C#`; Components `Pane (00)` only.
- Dirty state: Save was reported disabled immediately after the option click. After the Details panel was clicked (Event Handlers), Save and Undo became enabled and the Form is dirty (`t3-03`). The commit appears to occur on focus loss; single observation. No Save clicked.
- Read-only inspection: Event Handlers empty (`t3-03`); Variables root shows only the collapsed `Global - Persistent` and `Global - Temporary` groups, no Form-level entries (`t3-04`); Components `Pane (00)` only. No generated script artifact was visible; the Form Script editor was not opened.
- Console: Designer footer 2 errors / 0 warnings before and after (no increase). The Web Client was not read in T3.
- Browser actions: tab select 1; clicks 4 (dropdown arrow, Visual C# option, Event Handlers tab, Variables tab). Reads: tab list 1, snapshot 1, screenshots 5, finds 5. JavaScript 0. Recovery 0. Mutations: Script Language property change 1 (dirties the Form). Ordinary Designer Save 0. Close/reopen 0. Runtime 0. Sign In 0. Assets, variables, components, script methods 0. Top-toolbar Delete, Regenerate Form and Revert Global Object Definition not activated.
- Evidence files (T3): `evidence/EXP-133/t3-00` … `t3-04` (PNG) and `evidence/EXP-133/T3-script-language-summary.md`. Tool-written snapshot/console files appear under `evidence/playwright/` (disclosed).
- Acceptance: AC-2 Visual C# requirement now observed in the Designer readback, but the Form is not yet saved, so AC-2 is not closed. AC-7 and AC-8 not started. Global-variable resolution remains unresolved and was not investigated.
- Stopped at the T3 boundary with the Form dirty (Save enabled), `FX_LoginPortal` on the active tab, and `FX_BridgeTest` still open and untouched. Next step (T4, not authorized here): the single ordinary Designer Save.

## T4 — Web User Control assets (2026-10-25)

Summary and full source: `evidence/EXP-133/T4-web-user-control-assets-summary.md`.

- Pre-mutation: `FX_LoginPortal` active, User scope, Script Language Visual C#, dirty (Save enabled). Web Assets top level `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`; no `FX_Login` folder (`t4-00`).
- Approved guidance re-read (`docs/mongoose/guides/user-control.md` 200–221, 247–269): `WSForm.getVarValue(variableName, callbackFn)` with a one-parameter callback; `WSForm.invoke(methodName, [parameter1[,...]], callbackFn)`. The two-string-argument call is consistent with the documented pattern; runtime not verified.
- Created via Edit > Web User Control Assets > Global Objects `+` New:
  - `FX_Login/index.html` (name path, OK). Template read (`t4-06`); full content replaced and read back before commit (`t4-07`); Edit Browser File OK (one commit). Content: unchanged `../$app/scripts/UserControl.js`; inline `<style>`; `FX_LoginUsername` text input; `FX_LoginPassword` password input; `FX_LoginSignIn` button "Sign in"; `FX_LoginResult` div; `<script src="script/app.js">`.
  - `FX_Login/script/app.js` (name path, OK; created nested `script` folder). Initial content was the Mongoose HTML scaffold with content type `text/javascript`; replaced in full and read back before commit (`t4-12`, `t4-13`); Edit Browser File OK (one commit). Source and line-level behaviour are in the summary file (AC-4 source structure; invalid submissions not exercised).
- Parent Global Objects OK (one, dialog-level commit of staged asset edits, per the EXP-131/EXP-132 precedent; no Form Save).
- Post-commit read-only readbacks (same session): reopened Web Assets; `index.html` and `app.js` source matched; both closed with Cancel; Global Objects closed with Cancel (`t4-16`, `t4-17`).
- Asset inventory after T4: `FX_Login/index.html` and `FX_Login/script/app.js` only (with `script` and `FX_Login` as folder nodes). No stylesheet, third asset, variable, component or Form Script edit. `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi` not opened or changed.
- Designer state at end (`t4-18`): FX_LoginPortal, User scope, Script Language Visual C#, Variables root shows only the Global groups, Save enabled (dirty, not clicked).
- Observed side effect: the page URL lost `&MGForm=FX_LoginPortal` after the first asset commit; the Designer tab still showed FX_LoginPortal in every later capture. Recorded; not a Form identity change.
- Console: Designer footer 2 errors / 0 warnings on every snapshot in T4. The tool's "new console entries" pointer at tab-list time referenced the start of the cumulative console log (`evidence/playwright/console-2026-10-25T16-03-09-777Z.log`, lines 1–2: pre-existing `Permissions policy violation: unload` error and an origin-trial warning); not treated as a new increase.
- Browser actions (approximate counts, enumerated in the session): tab select 1; clicks 27; text entries 4 (two asset names, two full-content fills); keyboard ArrowRight 5 (tree expansion). Reads: tab list 1, snapshots 10, screenshots 19, finds about 20. JavaScript 0. Recovery 0.
- Mutations: asset creations 2 (`FX_Login/index.html`, `FX_Login/script/app.js`, each with its implicit folder node); Edit Browser File commits 2; parent Global Objects OK 1 (dialog-level). Ordinary Designer Save 0; close/reopen 0; runtime 0; Sign In 0; variables 0; components 0; Form Script methods 0. Top-toolbar Delete, Regenerate Form, Revert Global Object Definition, Unload and FormSync not activated.
- Evidence (T4): `evidence/EXP-133/t4-00` … `t4-18` (PNG) and `evidence/EXP-133/T4-web-user-control-assets-summary.md`. Tool-written snapshot/console files appear under `evidence/playwright/` (disclosed).
- Acceptance: AC-3 source and inventory observed at the same-session UI level (two files, relative references, card, `FX_LoginResult`, one username input, one password input type=password, one Sign in button; no CSS). AC-4 source-structure observed (not runtime). AC-2 still open: Visual C# is set but not saved (Save pending for T5). AC-6, AC-7, AC-8, AC-9 and AC-10 not started.
- Unresolved (unchanged): `ThisForm.Variables` / `WSForm.getVarValue` resolution of the Global `FX_vLoginResult` (EXP-130 U-1); whether the Visual C# change generated a Form Script scaffold (Form Script editor not opened); compile success; cross-session durability; replay verification (not claimed).
- Stopped at the T4 boundary. Form dirty; `FX_LoginPortal` active; `FX_BridgeTest` open and untouched. Next (not authorized here): create `FX_vLoginResult`, insert `FX_LoginControl`, then the single ordinary Designer Save.

## T5 — Global persistent variable FX_vLoginResult (2026-10-25/26)

Summary and screenshot descriptions: `evidence/EXP-133/T5-global-variable-summary.md`.

- Pre-mutation: `FX_LoginPortal` active tab; User scope `anton.ramos@3mworks.com.ph`; Script Language Visual C#; Save enabled (dirty); console 2 errors / 0 warnings (`t5-00`).
- Pre-creation absence (scoped, sorted Global Objects list): `FX_vEcho` is followed directly by `gbgc_bg`, with no `FX_vLoginResult` (`t5-01`). Filter `LoginResult` typed but did not refresh the list (same limitation as EXP-132; `t5-02`). Tenant-wide absence not proven.
- Creation route: Edit > Variable (opens Global Objects) > blue "+" > `New` dialog (Name field only) > OK; then parent Global Objects OK (dialog-level commit). Name typed exactly `FX_vLoginResult` (`t5-03`, `t5-04`).
- Pre-commit / post-New-OK properties (`t5-05`): Name `FX_vLoginResult`; Description blank; Value blank; Persistent `True`; Global `True`; Version `User version for user anton.ramos@3mworks.com.ph`.
- Read-only reopen (`t5-07`, `t5-08`): one `FX_vLoginResult` in the sorted list, same properties; closed with Cancel (no commit).
- Designer Details > Variables > `Global - Persistent` (view expansion, `t5-09`): `FX_vLoginResult` not listed in the visible window (`ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FX_vEcho`, `gbgc_bg`). Matches EXP-132's post-commit delay; no second variable created.
- Final: `FX_LoginPortal` active, User scope, Visual C#; Save enabled (not clicked); no dialog open; console 2 / 0.
- Actions: tab list 1, tab select 1, snapshots 3, clicks 10, text entries 2, finds about 16, screenshots 10. Browser JavaScript 0. Recovery 0.
- Mutations: Global Objects created 1 (`FX_vLoginResult`); dialog commits 2 (New OK, parent OK). Designer Form Save 0; close/reopen 0; runtime 0; components 0; Form Script edits 0; asset edits 0; generated variables touched 0.
- Evidence (T5): `evidence/EXP-133/t5-00` … `t5-09` (PNG) and `evidence/EXP-133/T5-global-variable-summary.md`. Tool-written snapshot files appear under `evidence/playwright/` (disclosed).
- Acceptance: AC-5 observed in-session (Name, Global, Persistent, blank Value, User version; one list entry). AC-10 partial. AC-2 still open until the ordinary Save (T6). AC-6 to AC-9 not started.
- Knowledge state: Global Objects `New`-then-parent-OK creation with readback: **observed** (one execution). Designer tree visibility after commit: **observed absent** (cause unresolved). Filter refresh failure: **observed** (repeat). Blue text colour in the list: **unresolved** (not interpreted). Persistence after ordinary Save: **unresolved**. Global versus `ThisForm.Variables` / `WSForm.getVarValue` resolution (EXP-130 U-1): **unresolved**, out of scope. Replay, real authentication, compile success, cross-session durability: **not claimed**.
- Stopped at the T5 boundary. Next (not authorized here): insert `FX_LoginControl`, edit the Form Script, then the single ordinary Designer Save.

## T6 — UserControl component FX_LoginControl (2026-10-26)

Summary and screenshot descriptions: `evidence/EXP-133/T6-usercontrol-component-summary.md`.

- Pre-mutation: `FX_LoginPortal` active tab; User scope `anton.ramos@3mworks.com.ph`; Visual C#; Save enabled (dirty); console 2 errors / 0 warnings. Components tree `Pane (00)` only; Variables tree root groups `Global - Persistent` and `Global - Temporary` only. `FX_BridgeTest` left open and untouched.
- Creation route (EXP-131 T7 precedent): Toolbox `UserControl` row, then one canvas click inside Pane (00) at (340, 220). One component created, auto-named `userControl1_USER` (Type UserControl, Pane 0).
- Rename before the reference: Properties Name value cell double-click, one fill `FX_LoginControl`, Enter. Components grid and Name show `FX_LoginControl`. The Properties header still shows `userControl1_USER (ActivexControl)` (display lag, EXP-131 precedent).
- Edit User Control References (via Specific Attributes > User Control Name ellipsis): Use Web Control checked (already set); Control URL `FX_Login/index.html` selected from the list; one OK. A Mongoose information notice appeared ("You will need to regen this form (save the form definition and re-open it) to see the effect of this change"); dismissed once with its own OK. This is the EXP-131 T7 notice; it is an in-page Mongoose message, not a browser-native dialog.
- Read-only reopen of the reference dialog: Use Web Control checked; Control URL `FX_Login/index.html`; closed with Cancel (`t6-09`).
- Post-insertion inventory (pre-Save): Components `Pane (00)` > `FX_LoginControl` only (one component; no duplicate). Variables root categories: `Global - Persistent`, `Global - Temporary` only; no Form-level category, so no `UserCtrl*` variable is visible before the Save. The `User Control Name` expression still reads `V(UserCtrl_userControl1_USER)`.
- Final: `FX_LoginPortal` active, User scope, Visual C# (read at task start; Form Properties not re-read at end), Save enabled (not clicked), no dialog open, console 2 / 0.
- Actions: tab select 1; clicks 13 (incl. one coordinate click); text entry 1 (Name); key press 1 (Enter); total 16. Reads: tab list 1; fresh snapshot 1; finds 15; screenshots 11. Browser JavaScript 0. Recovery 0. Session expiry none.
- Mutations: UserControl component created 1 (renamed `FX_LoginControl`); User Control reference committed 1 (OK). Global objects 0; variables 0; assets 0; Form Script edits 0; ordinary Designer Save 0; close/reopen 0; runtime 0; Sign In 0.
- Evidence (T6): `evidence/EXP-133/t6-00` … `t6-10` (PNG) and `evidence/EXP-133/T6-usercontrol-component-summary.md`. Tool-written snapshot/console files appear under `evidence/playwright/` (disclosed).
- Acceptance: AC-6 partially observed pre-Save (one component; Use Web Control checked; Control URL `FX_Login/index.html`; no generated variable visible). AC-2 still open until the ordinary Save. AC-7 to AC-10 not started.
- **Flag for operator disposition before the T7 Save:** EXP-131 T9 (observed after its Save) showed the Save re-keys the expression to the renamed component and also produces stale non-FX_ Form variables `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`, alongside the renamed set. If the same happens here, the Form would hold three non-FX_ Mongoose-generated variables. The brief requires a stop for operator disposition in that case. Not verified in EXP-133 (no Save performed).
- Knowledge state: UserControl placement, rename before reference, and Edit User Control References set and readback: **observed** (one execution, pre-Save, same session). Generated variables after the Save: **unresolved** (T7). Stale expression after rename: **observed** (EXP-131) and unchanged here. Runtime behaviour, Global resolution, compile success, persistence after close: **not claimed**.
- Stopped at the T6 boundary. Form dirty (Save enabled); `FX_LoginPortal` active; `FX_BridgeTest` open and untouched. Next (not authorized here): FX_ProcessLogin Visual C# method, then the single ordinary Designer Save; operator disposition on the stale-generated-variable flag is needed before that Save.

## T7 — FX_ProcessLogin Visual C# method (2026-10-26)

Summary and screenshot descriptions: `evidence/EXP-133/T7-process-login-method-summary.md`.

- Pre-mutation: `FX_LoginPortal` active tab; User scope `anton.ramos@3mworks.com.ph`; Visual C#; Save enabled (dirty); console 2 errors / 0 warnings; no dialog open; `FX_BridgeTest` left open and untouched. Pre-edit scaffold captured (16 lines, class `FX_LoginPortal : FormScript`, comment-only body, no existing method) (`t7-01`).
- Route: Edit > Form Script (Script Editor); one insertion after the comment block; no other scaffold change.
- Added (committed by Script Editor OK, once): one public method `string FX_ProcessLogin(string username, string password)`. Body: `string code = "received";`; `if (username == null || password == null) { code = "missing"; }`; `else if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password)) { code = "empty"; }`; `ThisForm.Variables("FX_vLoginResult").Value = code;`; `return code;`. Neither argument is assigned, persisted, returned or logged.
- Readback: the reopened Script Editor (read-only, Cancel) shows the same 24-line source as before OK, with the method and unchanged scaffold (`t7-06`, `t7-07`). Compile Result Output blank; Errors grid column headers only, no rows (`t7-08`, `t7-09`). The empty grid is recorded as an empty grid only, not as compile proof.
- Designer after the commit: Save enabled (not clicked); no new UserCtrl variable (`find "UserCtrl"` shows only the existing `User Control Name` expression); no Form-level variable category; Script Language Visual C#; canvas shows one UserControl placeholder (`t7-10`). Components grid not re-read in T7.
- Actions: tab list 1; tab select 1; clicks 10; key presses 8 (End 1, Enter 7); typed text 6; snapshots 3; finds 11; screenshots 10. Browser JavaScript 0. Recovery 0. No "Ref not found" error.
- Mutations: Script Editor OK 1 (method committed in-session). Designer Form Save 0; Form close/reopen 0; runtime 0; Sign in 0; Global objects 0; assets 0; components 0; generated variables touched 0. Script Editor reopened read-only once (Cancel).
- Evidence (T7): `evidence/EXP-133/t7-01` … `t7-10` (PNG) and `evidence/EXP-133/T7-process-login-method-summary.md`. Tool-written snapshot/console files under `evidence/playwright/` (disclosed).
- Acceptance: AC-7 source readback met in-session (method; assignments limited to missing/empty/received; empty Errors grid recorded only as empty). AC-4 partly (method-side assignment and return committed; `app.js` unchanged in T7). AC-2, AC-3, AC-5, AC-6 not re-verified in T7 beyond the reads above. AC-8 to AC-10 not started.
- Knowledge state: Script Editor OK commit without Designer Save: **observed** (second execution; first EXP-132 T5). Typing a balanced method with auto-close and Enter: **observed**, **candidate_procedure**. Compile success: **unresolved**. Generated UserCtrl variables after the Save: **unresolved**. Persistence after the Save and close/reopen: **unresolved**. Global `FX_vLoginResult` resolution by `ThisForm.Variables` / `WSForm.getVarValue`: **unresolved**, out of scope. Runtime, replay, real authentication: **not claimed**.
- **Operator disposition still required before the T8 ordinary Save:** the stale UserCtrl variables (`UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`) may be generated by the Save (EXP-131 T9 precedent). Not granted by T7; not evaluated because no Save was performed.
- Stopped at the T7 boundary. Form dirty (Save enabled, not clicked); `FX_LoginPortal` active; no dialog open; `FX_BridgeTest` open and untouched.

## T8 — Single ordinary Designer Form Save (2026-10-26)

Summary and screenshot descriptions: `evidence/EXP-133/T8-ordinary-save-summary.md`.

- Pre-Save (observed): `FX_LoginPortal` active; User scope `anton.ramos@3mworks.com.ph`; Script Language Visual C#; Save enabled; console 2 errors / 0 warnings; Components `Pane (00)` > `FX_LoginControl` (one UserControl); Variables root groups `Global - Persistent` and `Global - Temporary` only (`t8-00`, `t8-01`). Operator disposition of 2026-10-26 (bounded instruction) authorized Designer-generated Form-level UserCtrl variables for FX_LoginControl only.
- The save: one click on the top-toolbar ordinary Designer Save (not Delete Form Definition, not Regenerate Form). Immediate result: in-page notification `Form [FX_LoginPortal] and global object(s) were saved.` (read from the accessibility snapshot `evidence/playwright/page-2026-10-25T16-27-42-179Z.yml`; the toast had faded in the screenshot `t8-02`). Save disabled in every later read. No browser-native or error dialog; console 2 / 0 throughout.
- Post-Save variables (observed, same session, no reopen): root groups still `Global - Persistent` and `Global - Temporary` only; no `Form -` category; `find` and grep for `UserCtrl` no match after Expand-all (`t8-03`). Generated variables observed: **none** (`UserCtrl_FX_LoginControl`, `UserCtrlAsm_FX_LoginControl`, `UserCtrlUrl_FX_LoginControl`, and the stale `UserCtrl*_userControl1_USER` set were all not observed). `FX_vLoginResult` is not in the visible window of `Global - Persistent`, consistent with T5 (`t5-09`); the window is virtualised and is not a full inventory.
- Post-Save component (observed): `FX_LoginControl` UserControl, Pane 0, Tab 0, still one component. Properties > Specific Attributes > `User Control Name` = `V(UserCtrl_userControl1_USER)` — **not re-keyed** to `FX_LoginControl` by this Save (observation; not edited). Edit User Control References (read-only open, Cancel): Use Web Control checked; Control URL `FX_Login/index.html`; Web User Control Asset selected (`t8-04`, `t8-05`). Save still disabled after Cancel.
- Actions: tab list 1; tab select 1; fresh snapshot 1; clicks 9 (Components tab 2, toolbar Save 1, Variables tab 1, Expand-all 1, FX_LoginControl row 1, Component tab 1, User Control Name dialog open 1, dialog Cancel 1 — the Save is the only mutation); finds 2; screenshots 6. Typed 0; key presses 0; browser JavaScript 0; recovery 0; `Ref not found` 0.
- Mutations: ordinary Designer Form Save 1; close/reopen 0; runtime open 0; Sign in 0; runtime close 0; Form Script edits 0; assets 0; Global objects 0; variables 0; components 0; Regenerate Form 0; Delete Form Definition 0.
- Evidence (T8): `evidence/EXP-133/t8-00` … `t8-05` (PNG), `evidence/EXP-133/T8-ordinary-save-summary.md`. Tool-written snapshot/console files under `evidence/playwright/` (disclosed).
- Acceptance: AC-8 partly (one ordinary Save with immediate notification and Save disabled observed; same-session retention after close/reopen **not yet** tested, which is T9). AC-6 post-Save readback met for component identity, Use Web Control and Control URL; the stale expression is recorded, not corrected. AC-3, AC-5, AC-7 unchanged from T7/T5/T4 readbacks (no new asset/variable/source readback in T8). AC-9 and AC-10 not started.
- Knowledge state: ordinary Designer Save notification and Save-disabled state after the Save: **observed** (one execution). Generated Form-level UserCtrl variables after the Save in the same session: **not observed** (one execution; EXP-131 showed a Form-level category after its Save, timing unrecorded) — **unresolved** pending T9 reopen readback. `User Control Name` re-keying after Save: **not observed** (stale expression retained) — **observed** for this run. Persistence after close/reopen, runtime round-trip, compile success, Global resolution, replay, cross-session durability: **not claimed**.
- Open for the operator / T9: (a) whether the generated variables appear only after a close/reopen; (b) the stale `V(UserCtrl_userControl1_USER)` expression is still present and will remain unless the operator decides otherwise; (c) the Form is clean and ready for the separately authorized close/reopen task.
- Stopped at the T8 boundary. `FX_LoginPortal` open, User scope, Visual C#, clean (Save disabled), Components tab selected, FX_LoginControl selected, no dialog open. `FX_BridgeTest` open and untouched.

## T9 — Designer close attempt; stopped (2026-10-26)

Summary: `evidence/EXP-133/T9-close-reopen-summary.md`.

- Pre-close (observed): `FX_LoginPortal` active; User scope `anton.ramos@3mworks.com.ph`; Visual C#; Save disabled; Components `Pane (00)` > `FX_LoginControl` (one); console 2 errors / 0 warnings; no dialog (`t9-00`).
- Close attempt: one click on the ordinary Form-tab close control. **Not completed.** The tab stayed open and an in-page Mongoose `Error` dialog appeared ("The server event processing returned an error. If this persists, contact your system administrator."; `OK` not clicked). Console rose from **2 to 3 errors** (new entry: HTTP 400 on `Designer/Form/GenerateServerEvent`). Screenshot `t9-01`.
- Stop per the bounded instruction (unexpected dialog and console increase). Not done: OK on the Error dialog, a second close, a Save, the reopen, the read-only readbacks (components/references, Form Script, assets, Global variable, generated variables) and any runtime step.
- Actions: tab list 1; tab select 1; fresh snapshots 2; clicks 2 (Form properties tab view 1; close attempt 1); screenshots 2; greps/reads on saved files 9. Typed 0; key presses 0; browser JavaScript 0; recovery 0.
- Mutations: Designer Save 0; close completed 0 (attempted 1); reopen 0; runtime 0; Sign in 0; variables, assets, components, Form Script 0 each.
- Evidence (T9): `evidence/EXP-133/t9-00`, `t9-01` (PNG); `evidence/EXP-133/T9-close-reopen-summary.md`. Tool-written under `evidence/playwright/` (disclosed): `page-2026-10-25T16-32-21-847Z.yml`, `page-2026-10-25T16-32-36-667Z.yml`, `console-2026-10-25T16-32-14-643Z.log`.
- Acceptance: AC-8 **not met** (no close/reopen retention yet). AC-6 and AC-7 remain as read in T7/T8. AC-9 and AC-10 not started.
- Knowledge state: the Form-tab close control raised an in-page server-event Error and a 400 on `GenerateServerEvent` in this run: **observed** (one execution). Cause: **unresolved**. Close completion: **not observed**. Reopen retention, generated variables after reopen, runtime round-trip: **not claimed**.
- Open for the operator: (a) disposition of the open Error dialog (not clicked); (b) whether the Form is still open and dirty server-side, or closed, must be checked before any further task; (c) whether to retry the close is an operator decision, not a worker step.
- Stopped at the T9 boundary. `FX_LoginPortal` tab still open and selected; Error dialog open; Save disabled; `FX_BridgeTest` open and untouched.

## T10 — Operator-authorized recovery: acknowledgment, then stop at Step 2 (2026-10-26)

Summary: `evidence/EXP-133/T10-recovery-diagnostics-stop.md`.

- Step 1 (observed): one OK click on the T9 Error dialog (acknowledgment, not a close retry). Post-OK fresh snapshot: no dialog; `FX_LoginPortal` selected; Save disabled; scope User / anton.ramos@3mworks.com.ph; console 3 errors / 0 warnings (`t10-01`).
- Step 2 (observed stop): one click on the `Edit` menu (ref `e5` from the fresh pre-OK snapshot; not re-verified after the OK click). Console rose **3 → 4** (new HTTP 400 on `Designer/DesignerSession/GetEditMenuState`). A new in-page `Error` dialog appeared with the same generic text as T9 ("The server event processing returned an error. ..."). The Edit menu did not open. Form Script, Output/Errors diagnostics and the Script Editor were **not** reached. The new dialog was **not** clicked and remains open (`t10-02`).
- Steps 3, 4A, 4B and 5-runtime: **not performed** (no second close, no reopen, no retained-definition readbacks, no generated-variable inventory after reopen, no runtime open, no Sign in, no runtime close). Close attempts across EXP-133: 1 (T9), completed 0.
- Actions: tab list 1; tab select 1; fresh snapshots 2; clicks 2 (OK 1, Edit 1); screenshots 2; reads/greps on saved files. Typed 0; key presses 0; browser JavaScript 0; recovery 0; Ref-not-found 0. Mutations: Designer Save 0; close 0; reopen 0; runtime 0; Sign in 0; variables, assets, components, Form Script 0 each.
- Evidence (T10): `evidence/EXP-133/t10-01-post-error-ok-designer-save-disabled-console-3.png`, `evidence/EXP-133/t10-02-edit-menu-click-new-error-dialog-console-4-stop.png`, `evidence/EXP-133/T10-recovery-diagnostics-stop.md`, `evidence/playwright/t10-step1-post-ok-snapshot.yml` (worker-named). Tool-written and disclosed under `evidence/playwright/`: `page-2026-10-25T16-37-09-203Z.yml`, `page-2026-10-25T16-37-21-799Z.yml`, `console-2026-10-25T16-37-01-471Z.log`.
- Acceptance: AC-8 **not met** (no close completed, no reopen). AC-7 diagnostics not re-read in T10; T7 readback stands. AC-6 stands from T8. AC-9 and AC-10 not started.
- Knowledge state: the T9 close-time server-event failure and the T10 Edit-menu server-event failure (`GetEditMenuState` HTTP 400, generic Error dialog) are **observed** (one run each). Cause **unresolved**; any relation between them is **unverified**. Close completion, reopen retention, generated variables after reopen, runtime round-trip, compilation success, Global-variable resolution, durability, replay and real authentication: **not claimed**.
- Open for the operator: (a) disposition of the open Error dialog from the Edit click (not clicked; in-page dialog left open against the end-state rule, pending operator decision); (b) server-side Form state, which the Designer client view cannot establish, to be checked before any further task; (c) how to obtain the Form Script diagnostics (AC-7) given the Edit-menu failure; (d) whether to retry the close — an operator decision, not a worker step.
- Stopped at the T10 boundary. `FX_LoginPortal` tab open and selected; Error dialog (from the Edit click) open; Save disabled; `FX_BridgeTest` open and untouched.

## T11 — Operator-authorized session gate and Designer reload: stopped at the URL gate (2026-10-26)

Summary: `evidence/EXP-133/T11-session-gate-designer-reload-stop.md`.

- Step 1 (observed): the T10 Edit-click Error dialog was present; one OK click acknowledged it. Dialog gone; FX_LoginPortal selected; Save disabled; User scope; console 4 errors / 0 warnings (unchanged; the 4 = two "unload" entries, T9 `GenerateServerEvent` 400, T10 `GetEditMenuState` 400) (`t11-01`).
- Step 2 (observed): Web Client tab read once. No Session Expired, Logout or sign-in content; **authentication attempts 0**. Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t11-02`). Account and configuration gate passed.
- Step 3 (**stopped; not performed**): the Designer's current top-level URL has **no `MGForm` parameter**; `MGForm=FX_LoginPortal` could not be verified. Per the brief, no navigation or reload was made. Designer reloads 0.
- Steps 4–5 (identity gates, retention readbacks, Form Script and Compile Result, FX_vLoginResult properties, asset readbacks, generated-variable inventory after reload): **not performed**; all pending. Step 6 evidence limited to `t11-01` and `t11-02`.
- Actions: tab list 1; tab select 2; fresh snapshots 2; auto-snapshot 1 (after OK); clicks 1 (OK, once); screenshots 2; typed 0; browser JavaScript 0; recovery 0. Mutations: Designer Save 0; close 0; reopen 0; Designer reload 0; runtime 0; Sign in 0; source, asset, variable, component and Form Script edits 0.
- Evidence (T11): `evidence/EXP-133/t11-01-after-t10-error-ok-designer-console-4.png`, `evidence/EXP-133/t11-02-web-client-account-config-gate-no-signin.png`, `evidence/EXP-133/T11-session-gate-designer-reload-stop.md`. Tool-written and disclosed under `evidence/playwright/`: `t11-step1-designer-fresh-snapshot.yml` and `t11-step2-webclient-fresh-snapshot.yml` (worker-named), `page-2026-10-25T16-43-13-847Z.yml` (auto-snapshot after OK), `console-2026-10-25T16-43-03-795Z.log` (session-wide console history).
- Acceptance: AC-8 **not met** — the saved definition was not reloaded from the server, so same-session close/reopen retention and generated-variable state after reload remain unverified. AC-1 through AC-7 unchanged from earlier readbacks. AC-9 and AC-10 not started.
- Knowledge state: the T9 and T10 server-event failures remain **observed** (one run each), cause **unresolved**; the Designer URL carrying no `MGForm` parameter is **observed** (current tab); the authenticated account and configuration in the Web Client are **observed**; server-loaded definition retention: **not observed**.
- Open for the operator: (a) the correct supported route to open FX_LoginPortal from the server-saved definition, since the brief's `MGForm` URL is not present in the current tab; (b) whether a top-level navigation to a specific URL is authorized, given that the worker will not improvise one; (c) Steps 4–5 and AC-7 diagnostics remain pending; (d) generated UserCtrl variables after reload remain unresolved.
- Stopped at the T11 boundary. `FX_LoginPortal` Designer tab still open (not reloaded); no dialog open on it; Save disabled; `FX_BridgeTest` untouched. Web Client tab is the selected tab.

## T12 — Designer reload attempt and retention verification: stopped after an unverified reload (2026-10-26)

Summary: `evidence/EXP-133/T12-designer-reload-unverified-stop.md`.

- Pre-flight (observed): Designer tab selected; FX_LoginPortal selected; Save disabled; User scope; Visual C#; one FX_LoginControl; no dialog; console 4 errors / 0 warnings (`t12-pre-reload-designer-fresh-snapshot.yml`).
- Reload (deviation): the browser tool set has no reload operation, and the tool masks the session and tenant values in the Designer URL (`<secret>` placeholders), so an exact-URL navigation was not possible. The worker sent **one F5** to the Designer tab (browser-native current-tab reload, no URL constructed). This was a judgment call and is disclosed as a deviation.
- Outcome (**unverified**): no new console-log entries after F5 (tab list, twice); post-F5 snapshot and screenshot `t12-01` show the same in-session state. A genuine reload was neither observed nor excluded. Reload count: 1 attempted, 0 verified.
- Steps 2–8 (scope gate after reload, Recent Forms reopen, component/variable/Form Script/Compile Result, FX_vLoginResult, asset readbacks, final gates): **not performed**. The brief's purpose (server-saved definition loaded) is not established; the in-session view would only repeat T8/T9 readings.
- Actions: tab list 3; tab select 1; fresh snapshots 2; console-log reads 2; key press 1 (F5); screenshot 1. Clicks 0; typed 0; browser JavaScript 0; recovery 0; authentication attempts 0. Mutations: Designer Save 0; Form-tab close 0; Recent Forms reopen 0; runtime 0; Sign in 0; source, asset, variable, component and Form Script edits 0.
- Evidence (T12): `evidence/EXP-133/t12-01-post-f5-designer-state-reload-unverified.png`, `evidence/EXP-133/T12-designer-reload-unverified-stop.md`. Tool-written and disclosed under `evidence/playwright/`: `t12-pre-reload-designer-fresh-snapshot.yml`, `t12-post-f5-designer-fresh-snapshot.yml` (worker-named), `console-2026-10-25T16-48-08-725Z.log` (session-wide console history).
- Acceptance: AC-8 **not met** (no verified reload, no reopen, no server-saved readback). AC-1 to AC-7 unchanged. AC-9 and AC-10 not started; runtime excluded from T12 and requires separate coordinator authorization.
- Knowledge state: F5 reload effect **unresolved**; server-saved definition loaded **not observed**; in-session Designer state **observed** (this run); T9/T10 HTTP 400 causes **unresolved**; generated UserCtrl variables after reload, Form Script Output/Errors, FX_vLoginResult value and asset readbacks **not observed**.
- Open for the operator: (a) whether the F5 reloaded the Designer, and whether a second reload is authorized; (b) a supported reload method or an approved exact-URL route, since the worker cannot read an unmasked URL; (c) server-side state of FX_LoginPortal after T9–T10; (d) AC-7 diagnostics; (e) runtime and the final manifest need separate authorization.
- Stopped at the T12 boundary. `FX_LoginPortal` Designer tab open and selected in the in-session state; Save disabled; no dialog; `FX_BridgeTest` untouched.

## T13 — Runtime FX_LoginPortal: interrupted by Session Expired; session re-established (2026-10-26)

Summary: `evidence/EXP-133/T13-runtime-session-expiry-stop.md`.

- Account gate (observed, before the runtime step): Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; console baseline 3 errors / 10 warnings.
- Open (observed): Form > Open, Select Form filter `FX_LoginPortal` showed one row (Caption and Name `FX_LoginPortal`). The row was selected and OK pressed once. FX_LoginPortal is **not** in the Form menu's recent list (observed).
- **Interrupted:** a `Session Expired` alert ("Your session has expired.") appeared after the OK. Runtime content was not observed. Nothing typed; no password entered; Sign in 0.
- Session-expiry procedure (standing authorization): modal OK once; no sign-in form appeared, so one navigation to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` was made. A native beforeunload prompt on the Mongoose page was accepted once to let the navigation complete (no unsaved Form was open). The portal's DistributionIFSContactUs notification was dismissed once with its own close control (the "here" link was not clicked). Mongoose was reopened from the portal (menu search `Mongoose`, one result). The configuration Sign In did not appear; the Web Client header matched the required account and configuration. **Session re-established** (observed, `evidence/EXP-133/t13-08-session-reestablished-webclient-explorer-account-config.png`).
- Not resumed in T13 (per the procedure). Not reached: runtime identity, pre-click empty result, masked-password check, Sign in (0 activations), received readback, alert check, runtime close (0). **AC-9 not met.** AC-10 not started.
- Console: the Web Client rose to 13 errors / 11 warnings during the expiry handling and navigation, then reset per page (0 / 9 on the portal; 7–8 / 10 on the re-opened Mongoose app). All new error lines read were `Permissions policy violation: unload` entries (same class as the Designer baseline). Cause unresolved; not a runtime action.
- Action ledger (T13): clicks 8; text entry 1 (portal menu search, not a Mongoose field); navigate 1; native dialog accepted 1; waits 2; finds 1; screenshots 1; tab list 1; tab select 1; fresh snapshot 1; targeted snapshot 1. Credentials typed 0. Browser JavaScript by worker 0. Mutations: Designer Save 0; close/reopen 0; asset, variable, component, Form Script edits 0. Stale Designer tab untouched.
- Recovery: fresh-snapshot allowance 0 of 1; corrected inspection 0 of 1; session-expiry procedure used (modal OK 1 of 1; navigation 1 of 1).
- **Open for T14:** FX_LoginPortal is **not** open as a runtime Form. The T14 split-button approach requires the runtime Form to be opened first, which needs separate authorization. The runtime round trip still needs a fresh task (the Session Expired cause is unresolved; a fresh gate is advisable first).
- Stopped at the T13 boundary. The Web Client is on the Mongoose Explorer (correct account and configuration), no dialog, no Form open. The Designer tab (stale) was not touched.

## T14 — Runtime FX_LoginPortal: one fixed fake submission; received observed; Form left open (2026-10-26)

Summary and screenshot descriptions: `evidence/EXP-133/T14-runtime-summary.md`.

- Gate (observed): Web Client tab selected after tab list; header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer; no dialog; no Form open; console baseline **8 errors / 10 warnings** (page footer; differs from T13's 3/10 because the counter is per page context).
- Open (observed): Form > Open > Select Form showed one row `FX_LoginPortal` (Caption and Name). Row selected (active); Select Form OK once. The runtime FX_LoginPortal tab rendered the FX_LoginControl Web User Control. No Session Expired modal; no session-expiry recovery used.
- Console on open: one new `[VERBOSE]` DOM advisory ("Password field is not contained in a form") from `dynamic/metadata/FX_Login/index.html?formId=1&name=FX_LoginControl…`. Verbose level only; not counted in the footer; not an error.
- Pre-click (observed): login card with Username and Password labels visible; the frame clipped the Sign in button below the visible area (the button is in the accessibility tree); FX_LoginResult empty (`t14-02`).
- Entry (observed): username `fx_probe`; password the fixed fake value, typed once. Masked dots visible (`t14-03`); console unchanged 8/10.
- Sign in (observed): **one activation**. Post-click FX_LoginResult displayed **`received`** (accessibility readback and `t14-04`); password still masked; no alert; console unchanged 8/10; no new console entries reported.
- Disclosure: a later accessibility read returned the password field's accessible value in tool output (the fixed fake value). It is not in any evidence file (`Grep` count 0 under `evidence/`). No further password-field reads were made.
- Left open (observed): the runtime FX_LoginPortal is the selected Web Client Form at task end; no close, Save, navigation, reload, Designer use, or source/variable edits. The stale Designer tab was not touched. The runtime close (second half of AC-9) is deferred to T15 per the bounded instruction.
- Counts: Form opens 1; Sign in activations 1; runtime closes 0; clicks 5; text entries 2; screenshots 5; finds 7; snapshots 4 (2 untargeted, 2 targeted); recovery 0 of 1 (fresh snapshot) and 0 of 1 (corrected inspection); Ref-not-found 0; browser JavaScript 0; Designer Save 0; close/reopen 0; asset, variable, component and Form Script edits 0.
- Evidence (T14): `evidence/EXP-133/t14-00` … `t14-04` (PNG) and `evidence/EXP-133/T14-runtime-summary.md`. Tool-written and disclosed under `evidence/playwright/`: `page-2026-10-25T17-00-59-081Z.yml`, `…17-01-04-777Z.yml`, `…17-01-14-483Z.yml`, `…17-01-22-202Z.yml`, `…17-02-09-176Z.yml`; console `console-2026-10-25T17-00-47-072Z.log`, `…17-00-47-073Z.log`.
- Acceptance (T14 view): AC-9 **partly met** (observed single-run round trip: pre-click card and empty result; masked password; one Sign in; visible `received`; no alert; console unchanged). Runtime close is deferred to T15. AC-1 to AC-8 unchanged (no saved-definition readback in T14). AC-10 not started.
- Knowledge state: runtime render of the saved Form and its Web User Control: **observed** (one run). The `received` display after one Sign in: **observed** (one run). Global-variable resolution by `ThisForm.Variables` / `WSForm.getVarValue`: **unresolved** (out of scope; EXP-130 U-1); the displayed value is not evidence of that resolution. Compile success, cross-session durability, replay and real authentication: **not claimed**. The T13 expiry cause remains unknown; it did not recur in T14.
- Stopped at the T14 boundary. `FX_LoginPortal` runtime Form open and selected in the Web Client; Sign in done once; no dialog; `FX_BridgeTest` and the stale Designer tab untouched. Next (not authorized here): T15 fresh Designer readback and the runtime close.

## T15 — Fresh Designer readback and runtime close (2026-10-26; reconstructed)

Summary: `evidence/EXP-133/T15-fresh-designer-readback-and-runtime-close-summary.md`. The T15 worker stopped at the agent turn limit (150) before its final report. The summary was reconstructed from `evidence/EXP-133/harness-audit-T15.md` (controller audit; 48 actions, 71 reads, 1 error; "No terminal event; audit may be partial") and the saved `t15-*` captures. No browser action was taken in the T16 continuation.

- Designer: a fresh Designer window was opened from the Web Client ("Open designer in a new window"; operator-approved readback route; not the close/reopen the brief specifies). Scope dialog OK with User / anton.ramos preselected (`t15-03`). `FX_LoginPortal`, `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Script Language Visual C#, Save disabled in every later snapshot (`t15-04`, `t15-05`, `t15-22`).
- Component: one `FX_LoginControl` UserControl, Pane 0 (`t15-05`); Use Web Control checked, Control URL `FX_Login/index.html` (`t15-11`, read-only, Cancel).
- User Control Name expression: `V(UserCtrl_FX_LoginControl)` in this window (`t15-10`); T8 had recorded the stale `V(UserCtrl_userControl1_USER)`. Timing unresolved.
- Form Script: method at lines 14–20 identical to T7; Compile Result Output blank; Errors grid headers only (`t15-12` to `t15-14`); Cancel, no commit.
- Variables (`t15-15`, `t15-16`; accessibility `page-2026-10-25T17-11-22-368Z.yml`): six Form-level UserCtrl variables: `UserCtrl_FX_LoginControl`, `UserCtrlAsm_FX_LoginControl`, `UserCtrlUrl_FX_LoginControl`, and the stale non-FX_ `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`. The stale three are **pending operator disposition**; not altered.
- Global `FX_vLoginResult` (`t15-17`, read-only, Cancel): Persistent True, Global True, blank Value, User version.
- Web Assets (`t15-18` to `t15-21`): `FX_Login/index.html` (text/html) and `FX_Login/script/app.js` (text/javascript); dependency `../$app/scripts/UserControl.js` unchanged; one username input, one password input (`type="password"`), one Sign in button, `FX_LoginResult` div; app.js validation, `WSForm.invoke("FX_ProcessLogin", username, password, …)` and `WSForm.getVarValue("FX_vLoginResult", …)` callback as displayed. Both Edit Browser File dialogs and the parent dialog cancelled (no commit).
- Runtime: `t15-23` shows the runtime FX_LoginPortal with the masked password and `received` before close (no Sign in in T15). Audit order 154 closed the runtime Form with the ordinary close control; `t15-24` shows the Web Client on Explorer with no Form tab and no dialog. **Runtime close observed.**
- Recovery: one `Ref e1653 not found` (audit 83); fresh snapshot 1 of 1 (audit 84); corrected click 1 of 1 (audit 85).
- Mutation ledger (T15): Designer Save 0; Form-tab close 0; Sign in 0; Form Script, asset, variable, component edits 0 (all dialogs cancelled); runtime open 0; runtime close 1; scope-dialog OK 1 (identification only).
- Deviations: seven coordinate clicks with targets not recorded in the audit (Save stayed disabled); `t15-05` and `t15-09` each overwritten by a second capture; audit order 160 record edit with content not determinable from the audit (the record as read in T16 has no T15 section before this one).
- Acceptance from T15: AC-2, AC-3, AC-4 (partial view), AC-5, AC-7 (source; compile unresolved) observed in the fresh window; AC-6 partly (generated variables flagged); AC-8 **not met** (required ordinary close and reopen not completed); AC-9 runtime close observed.

## T16 — Final evidence manifest (documentation only, 2026-10-26)

Manifest: `evidence/EXP-133/T16-final-evidence-manifest.md`. Documentation-only continuation (no browser tool, no Mongoose action). Reconciles T1–T15 lifecycle counts (one ordinary Save; zero completed Form-tab closes; one Designer fresh-window open; one runtime open; one Sign in; one runtime close), AC-1 to AC-10 status, artifacts created, generated variables with disposition status, excluded objects, session and recovery deviations, the T14 transient fake-password tool-output disclosure (not reproduced; no literal search repeated in T16), repository writes and the Git confinement left to the operator.

- Files written in this continuation: `evidence/EXP-133/T15-fresh-designer-readback-and-runtime-close-summary.md` (new); `evidence/EXP-133/T16-final-evidence-manifest.md` (new); this record (status line corrected; T15 and T16 sections added).
- Acceptance at T16: AC-1 supported (scoped and visible inventory); AC-2 supported; AC-3 supported; AC-4 supported as source structure; AC-5 supported; AC-6 partly (stale generated variables pending disposition); AC-7 supported as source readback, compile unresolved; **AC-8 not met as specified**; AC-9 observed single-run round trip plus runtime close; AC-10 manifest written, Git confinement left to the operator.
- Operator decisions outstanding: (1) disposition of the three stale `*_userControl1_USER` variables; (2) whether to authorize a close attempt for the AC-8 close/reopen, given the unresolved T9 failure, or accept the narrower fresh-window observation; (3) the state of the stale Designer tab and `FX_BridgeTest`; (4) audit order 160 record-edit diff review; (5) the T14 tool-output disclosure for final review; (6) Git confinement review.
- Knowledge state: fresh Designer window retention of the saved definition: **observed** (one instance; server reload unverified). One Sign in producing `received`: **observed** (one run). Runtime close: **observed**. Stale generated variables: **observed**; origin and timing **unresolved**. Compile success, Global-variable resolution (EXP-130 U-1), replay, cross-session durability, real authentication: **not claimed**.
