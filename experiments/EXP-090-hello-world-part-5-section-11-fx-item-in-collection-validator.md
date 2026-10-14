# EXP-090 — Hello World Part 5 Section 11: FX_Item In Collection validator

**Status (T8, 2026-10-14; cycle 6; FINAL ACCEPTANCE AUDIT; DOCUMENTATION ONLY; ZERO BROWSER CALLS; ZERO MONGOOSE CHANGES): RECOMMENDATION: ACCEPTED AS OBSERVED. AC-1 to AC-5 are each supported by decisive evidence (`evidence/EXP-090/T8-final-acceptance-report.md`, section 6), within the stated limits: an ordinary Form close and reopen is a weak persistence boundary; no independent database-durability proof; no runtime validation test; no exhaustive component-by-component equality (two component rows compared individually); no replay verification. COUNT CORRECTION: the controller audit `harness-audit-T3.md` records 59 browser calls and 23 finds for T3 (the worker reported 58 and 22). The corrected cumulative total is 211 (T1 21 + T2 34 + T3 59 + T4 30 + T5 25 + pre-pause T6 1 + resumed T7 41), not 210. The T3–T7 cumulative cells were corrected. The T4 failed documentation Edit #38 made no change and is not a browser action. Designer Saves 1; Form close/reopen 1/1; component mutations 0; runtime 0; checkout 0; re-logins 0. Final inherited state (not touched in T8): Designer tab 0, FX_Orders, User scope, clean, Details expanded, no dialog.**

**Status (T6 resumed as T7, 2026-10-14; cycle 5; CLEAN FORM CLOSE ONCE AND RECENT-FORMS REOPEN ONCE; REOPENED READBACK): THE CLEAN FX_Orders FORM WAS CLOSED ONCE (Form-tab close control; NO discard prompt; the Designer stayed clean) AND REOPENED ONCE (Form menu recent-forms entry `FX_Orders`). The reopened Form is FX_Orders, Form Type Normal, Is Master True, `ScopeType: User`, Save and Undo disabled, no dialog. The reopened FX_Item readback matched on every visible property: Name `FX_Item`; Type `In Collection`; Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` (verbatim from the accessibility read; the frame clips it); Error Message `mIsNotAValid`; Version `User version for user <operator>`; `FX_CustomerID` still listed. Global Objects closed with Cancel once (no prompt). The Designer is CLEAN at the end. Component rows read after the reopen show the same Component Class as before the close (FX_CustomerIDCombobox `FX_CustomerID`; FX_ItemCombobox none). Prior cumulative Designer Save count: 1 (T5); T6 added NO Save. A close and reopen is a weak persistence boundary, not database durability or replay verification. Classification: observed only. Not replay_verified. The final acceptance audit is NOT done here (separate authorized documentation task).** Details: section "T6 resumed as T7 (EXP-090)" at the end of this record.

**Status (T5, 2026-10-14; cycle 4; FORMAL READBACK AND ONE DESIGNER SAVE): THE FORMAL READBACK MATCHED ON EVERY VISIBLE PROPERTY. Name `FX_Item`; Description and Edit in-line Script blank; Type `In Collection`; Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` (verbatim from the accessibility read; the frame clips it); Error Message `mIsNotAValid`; Version `User version for user <operator>`. `FX_CustomerID` is still listed directly above it. No correction was needed or made. Global Objects closed with its CANCEL once (no prompt). ONE native Designer Save invoked: toast `Save` / `Global object(s) were saved.` Afterwards (immediately and after a 6-second wait) the toolbar Save, Regenerate Form and Undo are all DISABLED; FX_Orders is selected; `ScopeType: User`; no dialog. The Designer is CLEAN. NO second Save; NO Form close or reopen (reserved for T6); NO component change; runtime not opened. Classification: observed only. Not replay_verified; no database durability claimed.** Details: section "T5 (EXP-090)" at the end of this record.

**Status (T4, 2026-10-14; cycle 3; In Collection Only Property, Parameters OK, Error Message, Global Objects OK): THE FX_Item DEFINITION IS COMPLETE IN THE GLOBAL OBJECTS DIALOG AND THE GLOBAL OBJECTS DIALOG IS CONFIRMED ONCE. In Collection Only Property `FX_Item` (picker opened once, chosen once, Tab-committed, picker OK once). Parameters OK once. The Parameters property-sheet cell reads verbatim `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, which matches the expected compiled value. Error Message `mIsNotAValid` chosen exactly from the list (not the `mIsNotAValid%1` variant), Tab-committed, verified. No string or message prompt appeared. Global Objects OK once: the dialog closed with no prompt and no toast, and the Designer toolbar Save became ENABLED (Regenerate Form enabled; Undo disabled). NO Designer Save, NO validator reopen, NO FX_Orders close or reopen, NO component change, NO readback (the formal readback is the next task). Designer is dirty by design (pending the single Save). Classification: observed only. Not replay_verified.** Details: section "T4 (EXP-090)" at the end of this record.

**Status (T3, 2026-10-14; cycle 2; IDO and both Set Prop outputs configured; In Collection Only Property and Error Message NOT set): IDO `FX_Items` SET (list pick; Tab-committed; verified). Set Prop outputs SET: `%1=FX_Description` and `%2=FX_Cost`, each Tab-committed and confirmed with its OK once; the output list confirmed with its OK once; the `Edit Set Values` editor confirmed with its OK once. The Parameters Set Prop field now reads `SETP(%1=FX_Description,%2=FX_Cost)`. One in-editor mis-entry was made and corrected before any OK (disclosed as deviation D-T3-1: `%1` was first typed into the Value field, then Value was corrected to `FX_Description` and `%1` typed into Target). CHECKPOINT: the Parameters dialog and the Global Objects dialog are LEFT OPEN for T4. Parameters OK and Global Objects OK NOT invoked. In Collection Only Property, Error Message and all checkboxes NOT changed. Designer Save `[disabled]` throughout (no Save). Classification: observed only. Not replay_verified.** Details: section "T3 (EXP-090)" at the end of this record.

**Status (T2, 2026-10-14; cycle 1; validator shell creation: New once, name FX_Item, Type In Collection, Parameters dialog opened once and LEFT OPEN for T3): VALIDATOR SHELL `FX_Item` CREATED ONCE THROUGH New (+). Name `FX_Item` committed by Tab and confirmed by its OK once. Type `In Collection` chosen from the list and committed by Tab (verified). The Parameters dialog `Edit In Collection Validator Parameters` was opened once; its initial layout was recorded before any entry. CHECKPOINT: the Parameters dialog and the Global Objects dialog are LEFT OPEN for T3. Nothing else set: IDO, Set Prop outputs, In Collection Only Property and Error Message are NOT entered. No Parameters or Global Objects OK or Cancel. No Designer Save, no close or reopen, no component change, no runtime action. No string prompt appeared. Designer toolbar Save is `[disabled]` with the dialogs open (as in EXP-087 T3). Classification: observed only. Not replay_verified.** Details: section "T2 (EXP-090)" at the end of this record.

**Status (T1, 2026-10-14; cycle 0; read-only session gate and preflight): PREFLIGHT COMPLETE. STOPPED BEFORE THE FIRST `New` (+) CLICK, as the T1 bounded instruction requires.** Both tabs are live. The Designer is FX_Orders, `ScopeType: User`, clean, no dialog. `FX_CustomerID` is present in the Validators list. **`FX_Item` is absent** (sorted position between `FullTextIndexNameValidator`/`FX_CustomerID` and `GE`). No validator created, no `New` used, no prompt answered, no field set, no Designer Save, no close or reopen, no component change, no runtime action. AC-1 supported (observed). AC-2 to AC-5 NOT RUN (creation, readback, Save and reopen are for later tasks). Classification: **observed only. Not replay_verified.**

Run identity: experiment EXP-090, cycle 0, task T1, task_message_id `6d7736a7-918c-41bc-a006-8c0eb9f90539`, run `R-20261014-210717-d1FM`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Date 2026-10-14. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-090/`.

Record creation disclosure: `experiments/EXP-090-…md` did not exist before this task (the Read of the brief path returned "File does not exist"; the Glob for `EXP-090*` found nothing; the repository held the brief commits `a133820` draft and `5f64b55` approved). This worker created the record in T1.

## Why this experiment (from the brief)

The tutorial (`docs/mongoose/transcripts/hello-world-pt5.md`, Section 11, 16:22–17:31) creates a second In Collection validator for items, the analogue of the EXP-087 Customer ID validator. This experiment adapts it to FX_ names in User scope: validator `FX_Item`, Type In Collection, IDO `FX_Items` (tutorial `Items`), In Collection Only Property `FX_Item` (tutorial `Item`), Set Prop `%1` = `FX_Description` (tutorial `Description`) and `%2` = `FX_Cost` (tutorial `Cost`), Error Message `mIsNotAValid` (the standard identifier chosen from the Designer's list, as in EXP-087; no string is created). Expected compiled Parameters value (**unverified until readback**): `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`. The FX_Item component class (Section 12) is a later experiment.

## Sources reviewed (T1, before any browser interaction)

| Source | Extent of read | Applied lesson |
| --- | --- | --- |
| `AGENTS.md` | Read in full (238 lines). Trust: authoritative repository rules. | LEARNING MODE; FX_ scope; User editing scope; evidence rules; recovery (one fresh snapshot, one corrected attempt, then stop); knowledge states. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, Section 11 (lines 246–259) and Section 12 (lines 260–276) | Read in full. Trust: **unverified** automatic transcript (possible recognition errors). | Narrated Section 11 steps: New, name `Item`, Type In Collection, IDO `Items`, In Collection Only Property `Item`, Set Prop `%1` = `Description`, `%2` = `Cost`, error message `m is not a valid` (syntax unverified). Section 12 (component class) is out of scope. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, transcript lines 547–575 (16:22–19:29) | Grep of timestamp-bearing lines in the range (lines 547–575). No untimestamped lines in that range were checked. Trust: **unverified**. | 16:29 "edit validator… new icon from the bottom… name this validator item"; 16:38 "change the type to In Collection… ellipsis for the parameters field"; 16:44 "select our items IDO… ellipsis for the property field and select item"; 16:58 "ellipsis on the properties field… hit new"; 17:04 "target %1… value description… ok"; 17:11 "%2… value cost… ok ok"; 17:18 "error message… m is not a valid… ok". |
| `experiments/EXP-087-…fx-customerid-in-collection-validator.md` | Partial read: lines 1–507 of 1409 (status headers T1–T8; T1 gates and dialog layout; T2 New, Name, Type; T3 Parameters, IDO, Set Prop, In Collection Only Property). T4 (Error Message) body not read; its status header read. | Global Objects dialog (`Validators` list; `+`, copy, trash at the list foot; `Properties` pane; OK/Cancel/Help). New (+) opens a small `New` name prompt (OK commits the name). The new validator defaults to Type `AlphaNumeric`. Parameters opens `Edit In Collection Validator Parameters` (IDO, Set Prop, In Collection Only Property, Filter, four checkboxes). Set Prop opens `Edit Set Values` → `Edit Set Property Values` list (New) → `Edit Set Property From List` (Target, Value, Collection for Target). Each field committed with one Tab. Error Message is a property-sheet row, not in the Parameters dialog. Cancel readback changed nothing. |
| `experiments/EXP-089-…fx-customerid-component-class.md` | Partial read: lines 1–433 of 1068 (status headers; T1 and T2 blocked by a server-event error; T3 prerequisites and baseline). | The Designer Edit menu failed with the server-event error after a session expiry (EXP-089 T1, T2). In T3 the Edit menu worked again after re-login. Component Class `FX_CustomerID` is assigned to the combobox and grid column (EXP-089 T4 status). |
| `experiments/EXP-079-…fx-orders-items-join.md` | Partial read: lines 1–457 of 1736 (status headers; T1 baseline; T2 join `FX_Items` / `fxitms`; T3 Bind To list). | `FX_Items` joined as `fxitms`. The Bind To list of the property wizard offered `fxitms.FX_Cost`, `fxitms.FX_Description` and `fxitms.FX_Item` (EXP-079 T3, step 8). These match the brief's FX_Items properties FX_Item, FX_Description and FX_Cost. |

**Partial-read limitation:** EXP-087, EXP-089 and EXP-079 were read in part, as stated. The unread parts were not applied. The Designer state was verified live.

## Session and tab handling (T1)

- Tab list (first browser call of the task, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, `MGForm=FX_Orders`, current, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`); tab 1 = `Mongoose` (portal app page, `favoriteContext=FX_Orders`).
- Tab 0 selected (succeeded, after the list). Tab 1 selected once for the gate read (succeeded, after the list), then tab 0 selected again for the preflight.
- **Session gate (both tabs live):**
  - **Web Client (tab 1): LIVE.** Mongoose page in the portal frame: the Explorer (My Folders, Master Explorer, Public Folders, User Folders) and the identity bar `<operator> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-out, no sign-in, no "Session Expired" text (find; screenshot `t1-02`).
  - **Designer (tab 0): LIVE.** FX_Orders Form and tab, `ScopeType: User`, no alertdialog, no sign-in or session text. The first Edit click returned **no** server-event error (the EXP-089 failure did not recur).
- **Session-expiry procedure: NOT invoked.** Re-login count **0**.
- Console counts at snapshots (not inspected; out of scope): Designer "2 errors, 0 warnings"; no console inspection by the worker.
- Observed after the dialog Cancel: the Designer page URL no longer contains `MGForm=FX_Orders` (the same drop recorded in EXP-087 T1), while the tab heading and the selected Form remained `FX_Orders`. Identity was established from the tab heading, the footer and the screenshot.

## AC-1 — Gates (Designer, FX_Orders, Validators, FX_Item absence, FX_CustomerID presence)

### Designer identity, scope and clean state (`t1-00`, `t1-01`)

| Item | Observed |
| --- | --- |
| Form | `FX_Orders` (tab `[selected]`; heading `FX_Orders`; closable tab control present) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator> ]` (name not copied here) |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; no alertdialog, no in-page dialog |
| Canvas | Form labels Order Number*, Customer ID*, Customer Name, Address, Item*, Item Description, Cost, Count (1), Order Total (0.00) |
| Selected component at start | `FX_CustomerIDCombobox` (ComboBox, `object.FX_CustomerID`, pane 1, tab 14). Its Inheritance shows Component Class `FX_CustomerID` (the EXP-089 assignment), and the Component Class Parameters row reads `FX_CusName,FX_CusAddress` (read from the snapshot; no change made). |

Deviation D1: the brief says to open FX_Orders through the Form menu recent-forms entry "if needed". FX_Orders was **already** the open, clean, User-scoped Designer Form on arrival, so no second open was made.

### Validators dialog (opened once; read-only; closed with Cancel once)

Route: Designer top menu `Edit` (one click) > `Validator` (one click). Dialog title `Global Objects`.

| Region | Observed (`t1-03`) |
| --- | --- |
| `Validators` list | Alphabetical, scrollable, opened at the top (A–C slice: `AccessAsPrefixObjectNameValid` … `CheckDuplicateProperty`). |
| List controls (foot of the left pane) | Three unlabelled icons: `+` (New; leftmost, blue plus), a copy icon, a trash icon. The `+` was **not** clicked (T1 stop rule). |
| `Properties` pane | **Empty**: no validator selected. Undo and Redo at its foot disabled. |
| Dialog buttons | `OK`, `Cancel`, `Help`. |

**FX_CustomerID presence (`t1-04`, plus an exact accessibility match).** After one view-only mouse-wheel scroll (`deltaY` 1600, pointer at 760,450), the list shows, in sorted order: `…FldUDT`, `FormGroupFlag`, `FormNameValid`, `FormNameValidator`, `FormsDatabaseNameValid`, `FullTextIndexNameValidator`, **`FX_CustomerID`**, `GE`, `GE X and LE Y`, `GELabel`, `GenerateEventNoMsg`, `GenerateIDOExtClassTemplate`. The row `FormNameValid` is highlighted by pointer hover only; the Properties pane stayed empty, so nothing was selected. The exact accessibility match `gridcell "FX_CustomerID"` in the Global Objects dialog confirms the row.

**FX_Item absence.** No row `FX_Item` appears between `FX_CustomerID` and `GE`, where it would sort. The exact match `"FX_Item"` returned no validator row in the dialog (the only `"FX_Item"`-family matches are Designer component/grid rows, not validators). Other FX_ validator rows: only `FX_CustomerID` in the F–G slice read; the A–C slice (`t1-03`) shows no FX_ rows; the D–E slice was not re-read in this task (the FX_ rows sort after F, so D–E cannot hold FX_Item).

Limitation: the list is the Designer's client view of the metadata, not a database read. The list was read by one scroll and accessibility matches, not by enumerating every row. The top row of the F–G slice is partly cut in `t1-04` and is not legible.

### Result of the gates

- **FX_Item: absent** (observed). The brief's stop condition ("if FX_Item already exists, stop blocked") does **not** apply.
- **FX_CustomerID: present** (observed).
- Designer clean and User scope before and after the dialog (see the readback below).

### Dialog closed (Cancel, once)

Cancel (`e2093`) closed the dialog with no OK. The post-Cancel find: no `alertdialog`; `dialog "Global Objects"` absent; toolbar Save `[disabled]`, Undo `[disabled]`; `FX_Orders` tab `[selected]`; footer `ScopeType: User`. Designer clean; no validator changed.

## Action audit (T1, exact counts; this task only)

Browser calls: **21**, in order:

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer `MGForm=FX_Orders`, current; tab 1 Mongoose |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t1-00` | Designer; Save, Regenerate, Undo disabled; FX_Orders selected |
| 4 | `browser_take_screenshot` `t1-01` | Designer identity, User scope, clean |
| 5 | `browser_tabs` select 1 | Succeeded |
| 6 | `browser_find` regex (session, sign-in, expired, Explorer, FX_Orders, Mongoose) | Live Mongoose page in the portal frame; no sign-in |
| 7 | `browser_take_screenshot` `t1-02` | Web Client live (Explorer; identity bar) |
| 8 | `browser_tabs` select 0 | Succeeded |
| 9 | `browser_find` `text: "Edit"` | Edit `e5` |
| 10 | `browser_click` `e5` (Edit, **once**) | Menu opened; **no** server-event error |
| 11 | `browser_find` `text: "Validator"` | Validator item `e1776` |
| 12 | `browser_click` `e1776` (Validator, **once**) | Global Objects dialog opened |
| 13 | `browser_find` regex (FX_ rows; broad) | Output dominated by Designer component rows; read-only, no validator slice in DOM |
| 14 | `browser_take_screenshot` `t1-03` | Dialog at A–C; Properties empty |
| 15 | `browser_mouse_move_xy` (760,450) | Pointer over the list (view) |
| 16 | `browser_mouse_wheel` (0,1600) | Validators list scrolled to F–G (view) |
| 17 | `browser_take_screenshot` `t1-04` | F–G slice with `FX_CustomerID`; no `FX_Item` |
| 18 | `browser_find` regex `"FX_Item"\|"FX_CustomerID"` | Validator row `FX_CustomerID` in the dialog; no FX_Item validator |
| 19 | `browser_find` `text: "Cancel"` | Cancel `e2093` |
| 20 | `browser_click` `e2093` (Cancel, **once**) | Dialog closed; no OK |
| 21 | `browser_find` regex (alertdialog, dialog, Save, Undo, tab, scope) | Clean; FX_Orders selected; User scope |

Count summary (T1): tab lists **1**; tab selects **3** (all succeeded: 0, 1, 0); snapshots **1** (untargeted; saved `t1-00`); screenshots **4** (`t1-01` to `t1-04`); finds **7** (calls 6, 9, 11, 13, 18, 19, 21); ref clicks **3** (Edit, Validator, Cancel); coordinate clicks **0**; mouse moves **1**; mouse wheel **1**; typed text **0**; key presses **0**; fills **0**. Total **21** = 1 + 3 + 1 + 4 + 7 + 3 + 1 + 1.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" errors **0**; fresh-snapshot recovery allowance used **0**; server-event errors **0**; retries **0**. No two browser actions were issued in parallel.

**Mongoose mutations and lifecycle (T1), exact:**
- Validators created: **0**. `New` (+) uses: **0**. Name prompts answered: **0**.
- Validator dialog OK clicks: **0**. Validator dialog Cancel clicks: **1** (Global Objects; no change).
- Tab commits: **0**. Field entries (typed or chosen): **0**. Set Prop outputs: **0**. Parameters ellipsis clicks: **0**. In Collection Only ellipsis clicks: **0**.
- String or message prompts: **0** seen; answers: **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Designer unloads: **0**. Cache unloads, FormSync, deployment, regeneration: **0**.
- Component, caption, layout or Form changes: **0** (the component row selection and the list scroll are view state).
- Existing validators changed, copied, renamed or deleted: **0**. Validator selections: **0**.
- Runtime (tab 1) actions: **0** (tab 1 was selected, read by find and screenshot only; no click, no Form opened, no record edit).
- Checkout, check-in, undo-checkout: **0**.
- Browser JavaScript / evaluate / console / network inspection by the worker: **0**. Direct URL navigation: **0**.
- Re-logins: **0**. Session-expiry procedure: **not invoked**.

## Worker-written file inventory (T1)

- `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` (created by this worker; this record).
- `evidence/EXP-090/t1-00-designer-fresh-snapshot-start.yml` (browser tool wrote it at the worker's `filename` request).
- `evidence/EXP-090/t1-01-gate-designer-fx-orders-user-clean.png`
- `evidence/EXP-090/t1-02-gate-webclient-tab1-live.png`
- `evidence/EXP-090/t1-03-preflight-validator-dialog-list-readonly.png`
- `evidence/EXP-090/t1-04-preflight-validator-list-FG-FX-slot-readonly.png`

Total worker-requested repository files (T1): **6** (1 record created directly by the worker; 5 evidence files, of which one YAML snapshot was written by the browser tool at the worker's request). The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-14T13-08-01-725Z.yml`, `page-2026-10-14T13-08-05-796Z.yml`, `page-2026-10-14T13-08-31-940Z.yml`, `console-2026-10-14T13-07-34-179Z.log`); these were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Screenshots (T1; each one viewed before citing)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-090/t1-01-gate-designer-fx-orders-user-clean.png` | Designer: `FX_Orders` tab and heading; Form canvas; Components grid with `FX_CustomerIDCombobox` selected (Component Class `FX_CustomerID`); toolbar Save and Undo greyed; footer `ScopeType: User`; no dialog. | **AC-1** Designer identity, User scope and clean state at the start. | The Validators list (no dialog open here); the Component Class parameters (not in the frame). |
| `evidence/EXP-090/t1-02-gate-webclient-tab1-live.png` | Tab `Mongoose` in the portal: Explorer (My Folders, Master Explorer, Public Folders, User Folders); identity bar `<operator> \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no sign-in, no dialog. | **AC-1** the Web Client is a live Mongoose page with the configuration. | Any Form state in the Web Client (none open); the runtime data. |
| `evidence/EXP-090/t1-03-preflight-validator-dialog-list-readonly.png` | `Global Objects` dialog over the clean FX_Orders Designer; Validators list at A–C (`AccessAsPrefixObjectNameValid` … `CheckDuplicateProperty`); `+`, copy and trash icons at the list foot; `Properties` pane empty; OK / Cancel / Help. | The dialog layout and that no validator is selected before the scroll. | The F–G slice (see `t1-04`). |
| `evidence/EXP-090/t1-04-preflight-validator-list-FG-FX-slot-readonly.png` | Same dialog scrolled to F–G: `FullTextIndexNameValidator`, **`FX_CustomerID`**, `GE`, `GE X and LE Y`, `GELabel`, `GenerateEventNoMsg`; `Properties` pane empty; Designer behind. | **AC-1** `FX_CustomerID` present; **no `FX_Item` row** between it and `GE` (the sorted slot). No validator selected. | A database state; rows outside the frame (sorting places any `FX_Item` between these two rows, so the frame is the decisive slot). |

## Acceptance checks (T1)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; both tabs live; Designer in User scope and clean with FX_Orders open; FX_Item absent and FX_CustomerID present | **Supported (observed).** Sources reviewed (partial reads of EXP-079, EXP-087, EXP-089 disclosed). Web Client tab live (`t1-02`, find). Designer live, FX_Orders, User scope, clean (`t1-01`, `t1-00`, find). FX_CustomerID present and FX_Item absent in the sorted slot (`t1-04`, accessibility match). | `t1-01` and `t1-04` are the decisive gate frames. `t1-04` shows the F–G slice only. The validator list is the client view, not a database read. | — |
| **AC-2** FX_Item created once with Type In Collection, Parameters, Set Prop, In Collection Only Property, Error Message | **NOT RUN** (creation is for a later task; T1 stopped before `New`). | — | — |
| **AC-3** Readback of Type and Parameters; Error Message; FX_CustomerID listed; one Designer Save | **NOT RUN.** | — | — |
| **AC-4** Clean Form closed once and reopened once; reopened readback | **NOT RUN.** | — | — |
| **AC-5** Final report, complete audit, inventory and final state | **Partial** (T1 audit of 21 calls and the T1 inventory of 6 files recorded above; the final report is for the last task). | Audit and inventory above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| The Designer tab shows FX_Orders, `ScopeType: User`, clean (Save, Regenerate Form and Undo disabled), with no dialog, at the T1 start | **observed** (one run; `t1-00`, `t1-01`) |
| The Web Client tab is a live Mongoose page (Explorer and configuration identity bar) with no sign-in or sign-out | **observed** (one run; `t1-02`) |
| Edit > Validator on the live Designer opened the `Global Objects` dialog on the first try, with no server-event error | **observed** (one run; calls 10 and 12) |
| The Validators list shows `FX_CustomerID` between `FullTextIndexNameValidator` and `GE` | **observed** (one run; `t1-04`; client view) |
| `FX_Item` is absent from the Validators list (its sorted slot is empty) | **observed** (one run; `t1-04`; client view, not a database read) |
| Cancel in the Validators dialog leaves the Designer clean with no change | **observed** (one run; call 20 and find 21; `t1-01`-equivalent state, no screenshot after Cancel) |
| The Designer page URL drops `MGForm=FX_Orders` after a dialog Cancel while the Form stays selected | **observed** (one run; URL only; identity read from the tab heading) |
| The FX_Items IDO exposes FX_Item, FX_Description and FX_Cost as bindable properties (`fxitms.*` in the EXP-079 Bind To list) | **cited** from EXP-079 T3 (not re-observed in EXP-090) |
| Tutorial Section 11 narrated steps (In Collection; IDO; Set Prop `%1`/`%2`; In Collection Only Property; error message) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |
| `m is not a valid` is the standard message ID `mIsNotAValid` | **unverified** (EXP-087 chose `mIsNotAValid` from the list; the T4 readback was in the EXP-087 record; not re-observed in EXP-090) |
| Compiled Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | **unverified** (expected only until the T2–T4 readback) |

## Deviations and limits (T1)

- **D1:** FX_Orders was already open; not re-opened through the recent-forms entry (see the AC-1 section).
- **D2:** The Validators `+` control is one of three unlabelled icons. It was not clicked in T1. Its identity follows EXP-087 D3 (leftmost icon, blue plus, in `t1-03`).
- **D3:** The Designer's first Edit click succeeded; no server-event error was seen. The session-expiry procedure was not needed.
- **D4:** A broad regex find (call 13) returned Designer component rows, not a validator slice. It was read-only and had no effect. The F–G slice was read after one view-only scroll and an exact-match find (calls 16 and 18).
- **D5:** The F–G slice's top row is partly cut and not legible in `t1-04`. The FX_ neighbourhood is read from the rows around `FX_CustomerID`.
- **D6:** Partial reads of EXP-079 (457 of 1736 lines), EXP-087 (507 of 1409) and EXP-089 (433 of 1068), as stated in the Sources table. The unread parts were not applied.
- **D7:** The T1 sources reads were done before the first browser action, but the EXP-087 T4 body (the Error Message step) was not read; only its status header was.

## Next permitted action (for the coordinator's next task)

1. **T2 (creation, Name and type):** from the open clean FX_Orders Designer (tab 0 selected; Global Objects closed), open Edit > Validator **once**; use the list `+` (New) **once**; enter the Name `FX_Item`; Tab; confirm the name prompt with its OK **once**; record the new property sheet; set Type In Collection (choose from its list, Tab once, verify); open the Parameters ellipsis once and record the layout before any change. Stop with the Parameters dialog open for T3, as EXP-087 T2 did.
2. **T3 (parameters, outputs, In Collection Only Property):** IDO `FX_Items` (choose from the list, or type the exact name if the list is empty; Tab; verify); Set Prop: New once per output; `%1` = `FX_Description`, `%2` = `FX_Cost` (Tab and verify each; OK once each); In Collection Only Property ellipsis once, choose `FX_Item`, OK once; Parameters OK once; verify the property sheet.
3. **T4 (Error Message, Global Objects OK, readback, one Designer Save, close/reopen, reopened readback)** per the brief's AC-2 to AC-4. Note the message stop rule: answer No to any string or message prompt.

Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 (EXP-090) — validator shell `FX_Item`: New once, name committed and confirmed once, Type In Collection committed; Parameters dialog opened once and LEFT OPEN for T3 (cycle 1)

Task T2, cycle 1, run `R-20261014-210717-d1FM`, task_message_id `c0ddf207-8efc-4b53-ba9c-74833877dbfc`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Date 2026-10-14. Bounded T2 instruction: confirm the inherited Designer state; open Edit > Validator once; confirm the preflight still permits creation; New (+) once; Name `FX_Item` with its OK once; Type `In Collection` (list, Tab, verify); open the Parameters ellipsis once and record the initial dialog; stop with the Parameters dialog open. No IDO, Set Prop, In Collection Only Property or Error Message entry; no Parameters or Global Objects OK or Cancel; no Designer Save; no close or reopen; no component change.

### Sources reviewed (T2, before any browser mutation)

The bounded T2 instruction asked for the missing parts of EXP-087, EXP-079 and EXP-089 before browser interaction. These were read as follows; the extent is stated because it is partial.

| Source | Range read in T2 | Applied lesson |
| --- | --- | --- |
| `experiments/EXP-087-…fx-customerid-in-collection-validator.md`, status headers and the section headings (`## T1`–`## T5`) | Grep of headings and key terms (`mIsNotAValid`, Save, `Global object(s)`) with line numbers, then the matching lines (lines 1–1007). **Not** a full read of T4 (lines 735–~880) or T5 (lines 900–~1007). | T4: the Error Message row has a dropdown trigger that offers message identifiers; `mIsNotAValid` is in the list (option found by accessibility, chosen once, Tab-committed; no prompt). After the Global Objects OK the Designer Save became enabled (EXP-087 T4). T5: the Designer Save invoked once produced the toast `Global object(s) were saved.`; afterwards Save, Regenerate and Undo disabled. Cancel readbacks leave the Designer unchanged. |
| EXP-087 T2 (lines 192–271), read in T1 of this experiment (partial) and in the T2 grep | Matching lines. | New (+) opens a small `New` name prompt (Name textbox, OK, Cancel); the OK after the name creates the validator. The new validator defaults to Type `AlphaNumeric`. Type dropdown: `In Collection` option; Tab commits. The Parameters dialog layout: IDO combobox, Set Prop, four checkboxes, In Collection Only Property, Filter, Exception checkbox; OK / Cancel / Help. |
| `experiments/EXP-079-…fx-orders-items-join.md`, lines 1–~300 (FX_Items and property references) | Grep of `FX_Item`, `FX_Description`, `FX_Cost` with line numbers. | The IDO `FX_Items` is joined as `fxitms`; the Bind To list offered `fxitms.FX_Cost`, `fxitms.FX_Description` and `fxitms.FX_Item` (EXP-079 T3, step 8). These are the FX_Items properties the brief names. Cited, not re-observed in T2. |
| `experiments/EXP-089-…fx-customerid-component-class.md`, T1–T3 status headers and T1–T2 bodies (read in T1 of this experiment) | Partial, as in T1. | The stale-Designer server-event error (`The server event processing returned an error…`) occurred on Edit after a session expiry, in EXP-089 T1 and T2. It did not occur in this task's Edit clicks. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, Section 11 and transcript lines 547–554 | Read in T1. | Narrated steps as in T1. |

**Partial-read limitation:** the T4 and T5 bodies of EXP-087 were read by grep only; their decisive lines (the `mIsNotAValid` pick, the Save toast) are relied on as quoted. The unread lines were not applied.

### Starting state (verified before any mutation)

- Tab list (first browser call of T2, before any selection): tab 0 = Designer (`mode=designer`, current; URL without `MGForm` after the T1 Cancel); tab 1 = `Mongoose` (portal app page, `favoriteContext=FX_Orders`). Tab 0 selected (succeeded after the list).
- Fresh untargeted snapshot `evidence/EXP-090/t2-00-designer-fresh-snapshot-start.yml` (tool-written). Read-only find: tab `FX_Orders` `[selected]`; heading `FX_Orders`; footer `ScopeType: User`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no alertdialog, no in-page dialog.
- Screenshot `t2-01-gate-designer-fx-orders-user-clean-before-validator.png` (taken before any Edit click): FX_Orders heading; footer `ScopeType: User`; Save and Undo greyed; no dialog.
- **Gate: the inherited state matches the expected state** (tab 0 Designer, FX_Orders open, ScopeType User, clean, no dialog). No material difference; the task proceeded.

### Preflight (Edit > Validator opened once; FX_Item absence re-checked before New)

- Edit (`e5`) clicked **once**: the menu opened with **no** server-event error. Validator item (`e1776`) clicked **once**: the `Global Objects` dialog opened.
- View-only: mouse move (760,450) and one wheel (0,1600) to the F–G slice. Screenshot `t2-02-gate-validator-list-FG-before-New.png` shows `FullTextIndexNameValidator`, `FX_CustomerID`, `GE`, `GE X and LE Y`, `GELabel`, `GenerateEventNoMsg`; the Properties pane is empty.
- Exact-match find: rows `gridcell "FullTextIndexNameValidator"`, `gridcell "FX_CustomerID"`, `gridcell "GE"` are present in the dialog; **no** `FX_Item` validator row.
- **Preflight result: FX_Item absent; FX_CustomerID present; creation permitted.** The brief's stop rule (FX_Item already exists) did not apply.

### Creation (New once; name committed by Tab; name prompt OK once)

| Step | Call | Observed result | Evidence |
| --- | --- | --- | --- |
| Identify New | find for the dialog's list toolbar; three unlabelled buttons `e2054`, `e2055`, `e2056` | The list toolbar (foot of the left pane) has three buttons; the screenshot `t2-02` shows a blue plus at the far left, then copy and trash icons. `e2054` is the first (leftmost) button, the same ordering EXP-087 T2 used. | `t2-02` |
| New (+) | click `e2054`, **once** | A small `New` dialog opened: `Name:` textbox `e2351` (active, empty), OK `e2354`, Cancel `e2356`, `Close Window` `e2344`. This confirms `e2054` is New. | `t2-03-after-New-name-prompt-empty.png` (name empty, focused) |
| Name | type `FX_Item` into `e2351` (one entry) | Typed | — |
| Name commit | Tab, **once** | Name reads `FX_Item` (find) | `t2-04-name-prompt-FX_Item-before-OK.png` (captured after the Tab, before OK) |
| Name prompt OK | click `e2354`, **once** | The `New` prompt closed. The list gained `FX_Item` (selected, under `FX_CustomerID`). No alert, no error, no string or message prompt. | `t2-05-new-validator-FX_Item-property-sheet.png` |

### New property sheet (observed after the name OK; `t2-05`)

| Property | Value observed |
| --- | --- |
| Name | `FX_Item` |
| Description | blank |
| Type | `AlphaNumeric` (the default; changed in the next step) |
| Parameters | blank, with a blue `…` (`Open Edit Property Dialog`) |
| Error Message | blank, with a dropdown and a blue `…` |
| Edit in-line Script | blank |
| Version | `User version for user <operator>` (name not copied here) |

Designer toolbar Save: `[disabled]` at this point (the validator is held in the open Global Objects dialog until its OK). Undo in the Properties pane was disabled at this point.

### Type: In Collection (list pick, Tab, verify)

| Step | Call | Observed |
| --- | --- | --- |
| Open Type list | click the Type dropdown arrow `e2645`, **once** | The combobox expanded with its listbox; options include `Generate Application Event`, `In Collection` (`e2714`), `In Inline List`. |
| Choose | click `In Collection` (`e2714`), **once** | The Type combobox showed `In Collection` before the commit. |
| Commit | Tab, **once** | Type reads `In Collection` (find: `gridcell "In Collection"`); the combobox is not expanded; Undo in the Properties pane became enabled (dirty); the Designer Save stayed `[disabled]`. Screenshot `t2-06-type-In-Collection-after-Tab.png`. |

Note: the Type list was not captured as its own screenshot in T2 (EXP-087 T2 captured it as `t2-06`); the open list is evidenced only by the accessibility read.

### Parameters dialog (opened once; initial layout recorded before any entry)

Opened by the Parameters `…` (`e2657`, `Open Edit Property Dialog`), **once**. Title `Edit In Collection Validator Parameters`, a nested dialog over the Global Objects dialog. Screenshot `t2-07-parameters-dialog-initial-layout-before-entry.png`.

| Region | Observed (accessibility and `t2-07`) |
| --- | --- |
| `IDO:` | combobox empty, with a `…` button in the frame (the IDO combobox's own element reference was not separately recorded in the accessibility read) |
| `Set Prop/ Var/ Comp:` | textbox empty with a `…` (`e2786`) |
| Checkboxes (right) | `No List Cache`, `Output First Time Only`, `Output Immediate Only`, `Mark Output Targets Validated`: **all unchecked** |
| `In Collection Only` | `Property:` textbox empty with a `…`; `Filter etc.:` textbox empty with a `…` |
| Checkbox | `Exception Text Is Back End Msg`: unchecked |
| Buttons | `OK` (`e2808`), `Cancel` (`e2810`), `Help` (`e2812`) |

**Observed:** the Parameters dialog is at its initial layout, matching EXP-087 T2. No parameter was set. Its OK and Cancel were **not** clicked (left open for T3, as the bounded instruction authorizes).

### Checkpoint (open-dialog state at the end of T2)

- **Open:** the nested `Edit In Collection Validator Parameters` dialog (IDO empty, nothing entered) over the `Global Objects` dialog (validator `FX_Item` selected; Name `FX_Item`; Type `In Collection`; Parameters blank; Error Message blank; Version `User version`).
- **Not confirmed:** neither the Parameters dialog nor the Global Objects dialog (no OK, no Cancel). The validator `FX_Item` is therefore **not yet committed** by an OK; the `t2-05`, `t2-06` and `t2-07` frames show dialog-level values only.
- **Designer:** FX_Orders selected (tab `[selected]`); `ScopeType: User`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`; no Save invoked; no close or reopen. Final find (read-only): `alertdialog` none; dialogs `Global Objects` and `Edit In Collection Validator Parameters` open (the two expected dialogs).
- **Unexpected prompts:** none. No string or message prompt appeared (T2 never reached the Error Message). No server-event error. No duplicate-name condition. No session expiry (the session-expiry procedure was **not** invoked).
- **Left open for T3** as the bounded instruction requires.

### Screenshots (T2; each one viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-090/t2-01-gate-designer-fx-orders-user-clean-before-validator.png` | FX_Orders heading and tab; `ScopeType: User`; Save and Undo greyed; FX_CustomerIDCombobox selected; no dialog. | **AC-1** Designer identity, User scope and clean state before the validator work. | The Validators list (no dialog open here). |
| `evidence/EXP-090/t2-02-gate-validator-list-FG-before-New.png` | `Global Objects` dialog scrolled to F–G: `FullTextIndexNameValidator`, `FX_CustomerID`, `GE`, `GE X and LE Y`, `GELabel`; no `FX_Item` between them; Properties empty; the blue plus at the far left of the list toolbar. | **AC-1** `FX_CustomerID` present; `FX_Item` absent before New (sorted slot); the New control's position. | A database state; the top row is partly cut. |
| `evidence/EXP-090/t2-03-after-New-name-prompt-empty.png` | The `New` name prompt with an empty, focused Name textbox; OK and Cancel. | That the New control produced the name prompt. | Name content (empty here). |
| `evidence/EXP-090/t2-04-name-prompt-FX_Item-before-OK.png` | The name prompt with `FX_Item` after the Tab commit; OK and Cancel. | **AC-2** the name entered and committed before its OK. | That the name was accepted (see `t2-05`). |
| `evidence/EXP-090/t2-05-new-validator-FX_Item-property-sheet.png` | The Validators list with `FX_Item` selected under `FX_CustomerID`; property sheet: Name `FX_Item`, Type `AlphaNumeric`, Parameters and Error Message blank, Version `User version`. | **AC-2** creation through New produced one validator named `FX_Item` with the defaults. | The stored definition. |
| `evidence/EXP-090/t2-06-type-In-Collection-after-Tab.png` | Type row `In Collection` after the Tab; Undo enabled; `FX_Item` selected in the list; Properties header `Type`. | **AC-2** Type `In Collection` committed by Tab. | The stored state. |
| `evidence/EXP-090/t2-07-parameters-dialog-initial-layout-before-entry.png` | `Edit In Collection Validator Parameters` over the Global Objects dialog; IDO empty; Set Prop, Property and Filter empty; four option checkboxes and Exception checkbox unchecked; OK / Cancel / Help. | The initial Parameters layout before any entry (the T3 starting point). | Any parameter value (none set). |

### Action audit (T2, exact; 34 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs: tab 0 Designer `MGForm`-less URL, current; tab 1 Mongoose |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t2-00` | Designer; Save and Undo disabled |
| 4 | `browser_find` (state: tab, heading, scope, Save, Undo, dialog) | FX_Orders selected; User; clean; no dialog |
| 5 | `browser_take_screenshot` `t2-01` | Start state, User, clean |
| 6 | `browser_find` "Edit" | Edit `e5` |
| 7 | `browser_click` `e5` (Edit, **once**) | Edit menu open; no server-event error |
| 8 | `browser_find` "Validator" | Validator item `e1776` |
| 9 | `browser_click` `e1776` (Validator, **once**) | Global Objects dialog open |
| 10 | `browser_mouse_move_xy` (760,450) | Pointer over the list (view) |
| 11 | `browser_mouse_wheel` (0,1600) | F–G slice (view) |
| 12 | `browser_take_screenshot` `t2-02` | F–G slice; no FX_Item |
| 13 | `browser_find` regex (`gridcell "FX_Item"`/`"FX_CustomerID"`/`"FullTextIndexNameValidator"`/`"GE"`) | `FX_CustomerID` row and neighbours; no FX_Item validator row |
| 14 | `browser_find` regex (list-toolbar buttons) | Three unlabelled buttons `e2054`, `e2055`, `e2056` |
| 15 | `browser_click` `e2054` (New +, **once**) | New name prompt |
| 16 | `browser_find` regex (New prompt) | Name textbox `e2351` (active, empty); OK `e2354` |
| 17 | `browser_take_screenshot` `t2-03` | Empty name prompt |
| 18 | `browser_type` `e2351` `FX_Item` | Typed |
| 19 | `browser_press_key` Tab (**once**; name commit) | Name committed |
| 20 | `browser_find` regex (name verify) | Name textbox reads `FX_Item` |
| 21 | `browser_take_screenshot` `t2-04` | Name before OK |
| 22 | `browser_click` `e2354` (name prompt OK, **once**) | Validator created; list row; property sheet |
| 23 | `browser_find` regex (property sheet; broad, read-only) | Name `FX_Item`; Type `AlphaNumeric`; Parameters and Error Message blank; Version `User version`. Output large (76 matches; the regex also matched Designer rows) |
| 24 | `browser_take_screenshot` `t2-05` | Property sheet |
| 25 | `browser_click` `e2645` (Type dropdown arrow, **once**) | Type list open |
| 26 | `browser_find` regex (listbox, `In Collection`) | `In Collection` option `e2714` |
| 27 | `browser_click` `e2714` (In Collection, **once**) | Type field set |
| 28 | `browser_press_key` Tab (**once**; Type commit) | Committed |
| 29 | `browser_find` regex (Type and Parameters treeitems) | Type `In Collection`; Parameters blank |
| 30 | `browser_take_screenshot` `t2-06` | Type `In Collection` after Tab |
| 31 | `browser_click` `e2657` (Parameters `…`, **once**) | Parameters dialog open |
| 32 | `browser_find` regex (dialog and controls) | Parameters layout recorded |
| 33 | `browser_take_screenshot` `t2-07` | Parameters initial layout, before entry |
| 34 | `browser_find` regex (alertdialog, Save, Regenerate, tab, scope, dialogs) | Save disabled; User; FX_Orders selected; Global Objects and Parameters dialogs open; no alertdialog |

Count summary (T2): tab lists **1**; tab selects **1** (succeeded); snapshots **1** (untargeted, saved `t2-00`); finds **12** (calls 4, 6, 8, 13, 14, 16, 20, 23, 26, 29, 32, 34); screenshots **7** (`t2-01` to `t2-07`); ref clicks **7** (Edit, Validator, New, name OK, Type arrow, In Collection, Parameters); coordinate clicks **0**; mouse moves **1**; mouse wheel **1** (view); typed text **1** (`FX_Item`); key presses **2** (Tab after the name; Tab after the Type). Total **34** = 1 + 1 + 1 + 12 + 7 + 7 + 1 + 1 + 1 + 2.

**Deviation D8 (disclosed):** calls 2 (`browser_tabs` select 0, a browser action) and 3 (`browser_snapshot`, read-only) were issued in one block. The brief forbids parallel browser actions; the select completed before the snapshot's result was read, and no state change resulted. All other calls were sequential. Errors / timeouts / ref-not-found: **0**. Fresh-snapshot recovery allowance used: **0**. Retries: **0**.

### Mutation and lifecycle counts (T2, exact)

- Validators created: **1** (`FX_Item`). **New (+) uses: 1.** Name prompts answered: 1 (OK once).
- Tab commits: **2** (name; Type). Dialog OK clicks: **1** (the name prompt). Dialog Cancel clicks: **0**.
- Parameters ellipsis clicks: **1** (dialog left open; nothing confirmed). Parameter fields entered: **0** (IDO, Set Prop, Property, Filter, Error Message: none entered).
- Set Prop outputs: **0**. Error Message: **not set** (T2 stop; no string or message prompt seen).
- String or message prompts: **0** seen; answers **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Unloads, cache, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0**. Existing validators changed, copied, renamed or deleted: **0** (no existing validator selected; the view scroll only).
- Runtime (tab 1) actions: **0** (tab 1 was not selected in T2). Runtime Form opened: **0**.
- Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: **not invoked**.
- Browser JavaScript, evaluate, console, network inspection: **0**. Direct URL navigation: **0**.

### Cumulative browser action audit (T1 + T2; reconciled)

| Item | T1 (21 calls) | T2 (34 calls) | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 21 | 34 | **55** |
| Tab lists / tab selects | 1 / 3 | 1 / 1 | **2 / 4** |
| Snapshots (untargeted) | 1 | 1 | **2** |
| Screenshots | 4 | 7 | **11** |
| Finds | 7 | 12 | **19** |
| Ref clicks | 3 | 7 | **10** |
| Mouse moves / wheel | 1 / 1 | 1 / 1 | **2 / 2** |
| Typed text / Tab key presses | 0 / 0 | 1 / 2 | **1 / 2** |
| Validators created | 0 | 1 | **1** |
| New (+) uses | 0 | 1 | **1** |
| Name prompt OK clicks | 0 | 1 | **1** |
| Validator dialog OK clicks (Global Objects) | 0 | 0 | **0** |
| Validator dialog Cancel clicks (Global Objects) | 1 (no change) | 0 | **1** |
| Parameters dialog OK / Cancel | 0 / 0 | 0 / 0 | **0 / 0** |
| Tab commits | 0 | 2 | **2** |
| Set Prop outputs | 0 | 0 | **0** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |

Reconciliation: the T1 count of 21 calls is unchanged and matches the T1 audit above. T2 adds 34 calls; the cumulative 55 = 21 + 34, and the category sums reconcile (2 + 4 + 2 + 11 + 19 + 10 + 2 + 2 + 1 + 2 = 55).

### Worker-written file inventory (T2)

- `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` (edited in T2: status header and this T2 section; created in T1).
- `evidence/EXP-090/t2-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-090/t2-01-gate-designer-fx-orders-user-clean-before-validator.png`
- `evidence/EXP-090/t2-02-gate-validator-list-FG-before-New.png`
- `evidence/EXP-090/t2-03-after-New-name-prompt-empty.png`
- `evidence/EXP-090/t2-04-name-prompt-FX_Item-before-OK.png`
- `evidence/EXP-090/t2-05-new-validator-FX_Item-property-sheet.png`
- `evidence/EXP-090/t2-06-type-In-Collection-after-Tab.png`
- `evidence/EXP-090/t2-07-parameters-dialog-initial-layout-before-entry.png`

T2 total: **8** new evidence files (1 snapshot YAML, 7 PNG) plus the record edit. Cumulative worker-written files for EXP-090 (T1 + T2): **14** (the record once, plus 13 evidence files: T1 gives 5 and T2 gives 8). The browser tool's own page snapshots and console logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Deviations and limits (T2)

- **D1 (T2):** the EXP-087 T4 and T5 bodies were read by grep (matching lines), not in full. The decisive lines are cited as quoted; the rest was not applied.
- **D2 (T2):** the New control was identified among three unlabelled buttons by its DOM order (`e2054`) and the screenshot (blue plus at the far left); the outcome (the New prompt) confirmed it. The accessibility tree gives these buttons no label.
- **D3 (T2):** the Type list was not captured as its own screenshot (EXP-087 captured one). The open list is evidenced only by the accessibility read (`combobox [expanded]` with `In Collection` `e2714`).
- **D4 (T2):** the IDO combobox in the Parameters dialog is empty and is not visibly focused in `t2-07`; the accessibility tree lists it as an empty combobox. No value was entered, so no edit was in progress.
- **D5 (T2):** the Parameters `…` (Set Prop) and the In Collection Only `…` were not clicked (T3). The dialog is left open as authorized.
- **D6 (T2):** the Designer Save stayed `[disabled]` after the Type commit, consistent with EXP-087 T3: the validator is held in the open Global Objects dialog until its OK. This is observed in one run; its cause is not re-tested here.
- **D7 (T2):** the find in call 23 was broad (76 matches, including Designer rows). It was read-only; the property-sheet values were then confirmed by screenshot `t2-05`.

### Knowledge state (T2 findings; observed only)

| Finding | State |
| --- | --- |
| Edit > Validator on the live Designer opened the `Global Objects` dialog with no server-event error (second run in this experiment) | **observed** (one run; calls 7, 9) |
| The FX_Item sorted slot is empty before New; FX_CustomerID is present (`t2-02`) | **observed** (one run; client view) |
| The list toolbar's first (leftmost blue plus) button opens a `New` name prompt with Name, OK and Cancel | **observed** (one run; `t2-03`) |
| A name committed by one Tab and confirmed by OK creates a validator `FX_Item` with the defaults (Type `AlphaNumeric`, Parameters and Error Message blank, Version `User version`) | **observed** (one run; `t2-05`) |
| Type can be set to `In Collection` from the list and committed by Tab; Undo in the Properties pane becomes enabled; Designer Save stays disabled while the dialog is open | **observed** (one run; `t2-06`) |
| The Parameters dialog's initial layout matches EXP-087 T2 (IDO, Set Prop, four checkboxes unchecked, Property, Filter, Exception unchecked) | **observed** (one run; `t2-07`) |
| The FX_Items properties FX_Item, FX_Description and FX_Cost are bindable in the IDO (Bind To list) | **cited** from EXP-079 T3 (not re-observed in EXP-090) |
| Tutorial Section 11 steps; `mIsNotAValid` as the standard message ID | **unverified** (EXP-087 chose it from the list; not re-observed in EXP-090) |
| The validator is stored (committed to the Designer state) | **not established** (pending the T3 Parameters OK and the T4 Global Objects OK; the readback is later) |
| Any database durability, runtime validation or replay | **not claimed** (not replay_verified) |

### Next permitted action (for the coordinator's next task, T3)

Continue the open `Edit In Collection Validator Parameters` dialog over the open Global Objects dialog (do not reopen Edit > Validator; do not use New again; alter no existing validator): IDO `FX_Items` (choose from the list, or type the exact name if the list is empty; Tab; verify); Set Prop `…` once; New once per output: `%1` = `FX_Description` and `%2` = `FX_Cost` (Tab and verify each; each output's OK once); the Set Prop list and editor each confirmed once; In Collection Only Property `…` once, choose `FX_Item`, picker OK once; Parameters OK once; verify the Global Objects property sheet (Type `In Collection`; Parameters value). Stop with the Global Objects dialog open. No Error Message change, no Global Objects OK, no Designer Save, no close or reopen, no readback.

Classification for all T2 findings: **observed only, NOT replay_verified.**

---

## T3 (EXP-090) — IDO `FX_Items`; Set Prop outputs `%1=FX_Description` and `%2=FX_Cost`; both list and editor confirmed once; Parameters and Global Objects left open for T4 (cycle 2)

Task T3, cycle 2, run `R-20261014-210717-d1FM`, task_message_id `24ecb47e-c37f-4132-8d66-a31311c0a627`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Date 2026-10-14. Bounded T3 instruction: inspect the inherited state read-only; set IDO `FX_Items` (list; Tab; verify); open the Set Prop ellipsis once; New once per output (`%1`=`FX_Description`, `%2`=`FX_Cost`), Tab-commit each field, verify, OK each output once; confirm the list and the editor with OK once each; record the Set Prop value; leave In Collection Only Property, Error Message and checkboxes unchanged; leave the Parameters and Global Objects dialogs open for T4; no Designer Save; no close or reopen; no component change.

### Sources (T3)

The T3 instruction asked for the contiguous EXP-087 parameter-editor and Set Prop procedure before interacting. Read in the earlier T1/T2 reads of EXP-087 (lines 403–507, T3 body; the T3 Set Prop sequence: Set Prop ellipsis → `Edit Set Values` → Properties ellipsis → `Edit Set Property Values` list (New) → `Edit Set Property From List` (Target, Value, Collection for Target) → OK; then list OK and `Edit Set Values` OK). No new source reads were required for T3 beyond that; the EXP-087 layout matched this task's observed layout.

### Starting state (verified before any mutation)

- Tab list (first call; before any selection): tab 0 = Designer (`mode=designer`, `MGForm=FX_Orders`, current); tab 1 = `Mongoose` (portal app page, `favoriteContext=FX_Orders`). Tab 0 selected (succeeded after the list).
- Fresh untargeted snapshot `evidence/EXP-090/t3-00-designer-fresh-snapshot-start.yml` (tool-written). Read-only find: tab `FX_Orders` `[selected]`; footer `ScopeType: User`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`; `Global Objects` dialog open with the Validators list (`FX_Item` selected, under `FX_CustomerID`, Properties pane showing Type); `Edit In Collection Validator Parameters` open with the IDO combobox active and empty; no alertdialog.
- Screenshot `t3-01-gate-inherited-parameters-dialog-before-IDO.png`: Parameters dialog (IDO empty; Set Prop empty; Property empty; Filter empty; four checkboxes and Exception unchecked); Global Objects behind it with `FX_Item` selected; Designer clean.
- **Gate: the inherited state matches the T2 checkpoint** (tab 0 Designer, FX_Orders, User scope, clean, Global Objects and Parameters dialogs open, Parameters empty). No material difference; the task proceeded. No New, no T2 mutation was repeated.

### IDO: `FX_Items` (list pick, Tab, verify)

| Step | Action | Observed |
| --- | --- | --- |
| IDO arrow | one click at (1019,367) (coordinate; the arrow has no accessibility ref; the same position EXP-087 T3 used) | Listbox expanded with options `FX_HelloWorld01` (`e2464`), `FX_Items` (`e2466`), `FX_Orders` (`e2468`) and more |
| Choose | click `FX_Items` (`e2466`), once | Combobox showed `FX_Items` before the commit |
| Commit | Tab, **once** | Combobox `[ref=e2156]: FX_Items`; list closed (`combobox` not `[expanded]`); no prompt. Screenshot `t3-02-IDO-FX_Items-after-Tab.png` |

### Set Prop: opened once; Properties list opened once; New twice

| Step | Action | Observed |
| --- | --- | --- |
| Set Prop ellipsis | click `e2168` (the `…` after the Set Prop textbox `e2166`), **once** | Opened `Edit Set Values`: `Variables:` (`e2610`), `Components:` (`e2619`), `Properties:` (`e2628`, with `…` `e2630`); OK `e2632`, Cancel `e2634`, Help `e2636`. Screenshot `t3-03-SetProp-Edit-Set-Values-initial.png` (before the Properties click) |
| Properties ellipsis | click `e2630`, **once** | Opened `Edit Set Property Values`: an empty `listbox`; `Up` (disabled), `New` (`e2646`), `Edit` (disabled), `Delete` (disabled), `Down` (disabled); OK `e2654`, Cancel `e2656`, Help `e2658`. Screenshot `t3-04-SetProp-properties-list-initial-empty.png` |

#### Output 1: Target `%1`, Value `FX_Description`

| # | Step | Call | Observed |
| --- | --- | --- | --- |
| 1 | New #1 | click `e2646`, **once** | `Edit Set Property From List`: `Target:` combobox `e2670` (Open `e2671`); `Value:` combobox `e2678` (Open `e2679`); `Collection for Target:` `primary collection` (`e2686`, Open `e2687`); OK `e2689`, Cancel `e2691`, Help `e2693` |
| 2 | **Mis-entry** | type `%1` into `e2678` (I used the wrong ref: `e2678` is the **Value** combobox, not Target) | Typed into Value |
| 3 | Tab (commit of the mis-entered Value) | Tab, **once** | Value showed `%1`; Target blank. **Deviation D-T3-1** (see below) |
| 4 | Correction: Value list | click Value Open `e2679`, **once** | Listbox: `FX_Cost` (`e2702`), `FX_Description` (`e2704`), `FX_Picture` (`e2706`) and more |
| 5 | Choose | click `FX_Description` (`e2705`), **once** | Value combobox showed `FX_Description` |
| 6 | Commit Value | Tab, **once** | Value `FX_Description`; focus to Collection |
| 7 | Target | type `%1` into `e2670`, **once** | Target typed |
| 8 | Commit Target | Tab, **once** | Target `%1`; focus moved back to Value (highlighted) |
| 9 | Commit Value (re-entry) | Tab, **once** | Focus moved to Collection for Target (`e2686`, active). Find: Target `%1`; Value `FX_Description`; Collection `primary collection` (unchanged) |
| 10 | Pre-OK screenshot | `t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png` (taken after the Target commit, before the step-9 Tab; the frame shows Target `%1` and Value `FX_Description`) | — |
| 11 | Output 1 OK | click `e2689`, **once** | Dialog closed. `Edit Set Property Values` list gained one row `%1=FX_Description` (`e2799`) |

**Note on the pre-OK frame:** `t3-06` was taken before the step-9 Tab. Both fields were already Tab-committed at that point (steps 6 and 8), and the step-9 Tab only moved focus. The find after step 9 confirms the same values.

**Pre-correction frame (`t3-05`):** `t3-05-SetProp-output1-Target-%1-after-Tab.png` shows the mis-entry state (Target blank; Value `%1`; Collection `primary collection`). It is kept as evidence of the deviation. It is **not** a pre-OK frame of a correct output.

#### Output 2: Target `%2`, Value `FX_Cost`

| # | Step | Call | Observed |
| --- | --- | --- | --- |
| 1 | New #2 | click `e2646`, **once** | A fresh `Edit Set Property From List` (`e2800`): Target combobox `e2811` (active, empty); Value combobox `e2819`; Collection `primary collection` (`e2827`); OK `e2830`, Cancel `e2832`, Help `e2834` |
| 2 | Target | type `%2` into `e2811`, **once** | Target typed |
| 3 | Commit Target | Tab, **once** | Target `%2`; focus to Value (`e2819`) |
| 4 | Value list | click Value Open `e2820`, **once** | Listbox: `CreatedBy` (`e2842`), `FX_Cost` (`e2844`), `FX_Description` (`e2846`) and more |
| 5 | Choose | click `FX_Cost` (`e2844`), **once** | Value combobox showed `FX_Cost` |
| 6 | Commit Value | Tab, **once** | Value `FX_Cost`; focus to Collection (`e2827`, active) |
| 7 | Verify | find | Target `%2`; Value `FX_Cost`; Collection `primary collection` (unchanged) |
| 8 | Pre-OK screenshot | `t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png` (Target `%2`, Value `FX_Cost`, Collection `primary collection`) | — |
| 9 | Output 2 OK | click `e2830`, **once** | Dialog closed. The list gained `%2=FX_Cost` (`e2939`) |

### Set Prop list and editor confirmations

| Step | Action | Observed |
| --- | --- | --- |
| List contents after both outputs | find and screenshot `t3-08-SetProp-properties-list-two-outputs-before-OK.png` | The list rows: `%1=FX_Description` and `%2=FX_Cost`; Up/Down disabled for the list; New/Edit/Delete as before. The first row is focused |
| List OK | click `e2654`, **once** | The `Edit Set Property Values` list closed. The `Edit Set Values` `Properties:` field (`e2628`) reads `%1=FX_Description,%2=FX_Cost` |
| Editor OK | click `e2632`, **once** | `Edit Set Values` closed. The Parameters `Set Prop/ Var/ Comp:` field (`e2166`) reads `SETP(%1=FX_Description,%2=FX_Cost)` |

### The resulting Set Prop value (verbatim) and the Parameters state

- Set Prop value in the Parameters dialog (accessibility text, verbatim): `SETP(%1=FX_Description,%2=FX_Cost)`. The frame clips it at the field's edge (`SETP(%1=FX_Description,%2=FX_C…`); the full text is from the accessibility read.
- IDO (verbatim): `FX_Items`.
- Property (In Collection Only): **blank** (not configured in T3, as instructed).
- Options: No List Cache, Output First Time Only, Output Immediate Only, Mark Output Targets Validated: **unchanged (unchecked)**; Exception Text Is Back End Msg: **unchanged (unchecked)**.
- Parameters dialog OK: **not invoked**. Global Objects OK: **not invoked**. Error Message: **not set**.
- Designer toolbar Save: **`[disabled]`** throughout T3 (observed in the final find, with the dialogs open; consistent with EXP-087 T3).
- Screenshot `t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png`: IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_C…` (clipped); Property empty; checkboxes unchanged; Parameters dialog open over Global Objects.

**Expected compiled value check:** the expected Parameters value `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` requires the Property (`FX_Item`), which is T4's scope. The current Set Prop part matches the expected `SETP(%1=FX_Description,%2=FX_Cost)` substring; the full compiled string is **not yet** observed (the Property is not set and the Global Objects property sheet shows the compiled value only after the Parameters OK, which T3 does not invoke).

### Counts (T3, exact)

- **Set Prop New actions: 2** (`e2646` twice, once per output; no extra New).
- **Set Prop outputs: 2** (`%1=FX_Description`, `%2=FX_Cost`).
- **Set Prop output OK clicks: 2** (`e2689`, `e2830`).
- **Set Prop list OK clicks: 1** (`e2654`). **Set Prop editor (`Edit Set Values`) OK clicks: 1** (`e2632`).
- **Dialog OK clicks in T3: 4** (2 outputs, 1 list, 1 editor). Parameters OK: **0**. Global Objects OK: **0**.
- **Set Prop ellipsis clicks: 1** (`e2168`). **Properties ellipsis clicks: 1** (`e2630`).
- **Tab commits: 7**: IDO (1); output 1 (4: the mis-entry commit; the Value commit after the list pick; the Target commit; the re-entry commit before the OK); output 2 (2: Target; Value).
- **Typed entries: 3**: `%1` into the Value field (mis-entry, D-T3-1); `%1` into Target; `%2` into Target.
- **List choices (click on a list option): 3**: IDO `FX_Items`; Value `FX_Description`; Value `FX_Cost`. **Open-arrow clicks: 3** (IDO arrow coordinate; Value Open ×2).
- String or message prompts: **0** seen; answers: **0**. Strings created: **0**.
- Contingency corrections (readback contingency): **0** (the T4 readback contingency is unused). The in-editor correction in D-T3-1 is a pre-OK correction within the same editing sequence, not a readback correction.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Component changes: **0**. Runtime actions: **0**. Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: **not invoked**.

### Deviations (T3)

- **D-T3-1 (wrong ref; in-editor correction before any OK):** my first type action (`%1`) used `e2678`, which is the **Value** combobox of `Edit Set Property From List`, not the Target (`e2670`). The `%1` was Tab-committed into Value, so Value briefly held `%1`. I corrected it before any OK: Value was re-chosen from its list as `FX_Description` (commit by Tab), and `%1` was typed into Target (`e2670`, commit by Tab). The final pre-OK values are verified by find and `t3-06`. The corrected entry produced no string or message prompt and no other effect. The mis-entry frame is `t3-05`. **Cause:** the accessibility refs of the two comboboxes were not separated in my first read (the Target and Value groups were nested). **Fix going forward:** read the `Target:` and `Value:` generic labels and their combobox refs together before typing.
- **D-T3-2:** the IDO arrow has no accessibility ref; it was clicked by coordinate (1019,367), as in EXP-087 T3 (documented there as a last resort). The IDO combobox's text was then verified by find and frame `t3-02`.
- **D-T3-3:** the first Set Prop ellipsis (`e2168`) opened `Edit Set Values`; the Properties ellipsis (`e2630`) was then clicked once. The brief's wording ("the Set Prop properties ellipsis") was read as the second, which is the list ellipsis in the EXP-087 record. This matches EXP-087 T3's sequence.
- **D-T3-4:** the Value-commit Tab for output 1 was pressed twice (steps 6 and 9 above) because the first Tab after the Target commit moved focus back into the Value field. This is counted in the Tab total (4 for output 1).
- **D-T3-5:** the Parameters dialog's IDO combobox `Open` button (`e2157`) and the IDO `…` (`e2159`) were not clicked. The IDO was chosen from the dropdown list only.

### Screenshots (T3; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-090/t3-01-gate-inherited-parameters-dialog-before-IDO.png` | Parameters dialog (IDO empty; Set Prop empty; Property empty; Filter empty; checkboxes unchecked); Global Objects behind with `FX_Item` selected; `ScopeType: User`; Save greyed. | **AC-1/AC-2 gate** of the inherited state before IDO. | Stored state; the Set Prop state (not yet set). |
| `evidence/EXP-090/t3-02-IDO-FX_Items-after-Tab.png` | Parameters dialog: IDO `FX_Items` after Tab; list closed; Set Prop empty. | **AC-2** IDO `FX_Items` committed by Tab, before any Set Prop step. | The compiled value. |
| `evidence/EXP-090/t3-03-SetProp-Edit-Set-Values-initial.png` | `Edit Set Values` over the Parameters dialog (Variables, Components, Properties fields; `…` buttons; OK/Cancel/Help). | The Set Prop editor layout before the Properties click. | Any output value. |
| `evidence/EXP-090/t3-04-SetProp-properties-list-initial-empty.png` | `Edit Set Property Values` list, empty; Up/New/Edit/Delete/Down; OK/Cancel/Help. | The empty output list before New. | Any output. |
| `evidence/EXP-090/t3-05-SetProp-output1-Target-%1-after-Tab.png` | **Mis-entry frame**: `Edit Set Property From List`; Target blank; Value `%1`; Collection `primary collection`. | **D-T3-1**: the mis-entry, before its correction. | That any output is correct (this frame shows an incorrect state). |
| `evidence/EXP-090/t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png` | `Edit Set Property From List`: Target `%1`; Value `FX_Description` (highlighted, focus returned to Value); Collection `primary collection`; OK/Cancel/Help. | **AC-2** output 1 values before its OK (pre-OK). | That the OK stored it (see `t3-08`). |
| `evidence/EXP-090/t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png` | `Edit Set Property From List`: Target `%2`; Value `FX_Cost`; Collection `primary collection`; focus on Collection. | **AC-2** output 2 values before its OK (pre-OK). | That the OK stored it (see `t3-08`). |
| `evidence/EXP-090/t3-08-SetProp-properties-list-two-outputs-before-OK.png` | `Edit Set Property Values` list with two rows: `%1=FX_Description`, `%2=FX_Cost`; OK/Cancel/Help. | **AC-2** the list contents after both outputs, before the list OK. | The stored value (the list OK is next). |
| `evidence/EXP-090/t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png` | Parameters dialog: IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_C…` (clipped); Property empty; checkboxes unchanged; Parameters OK/Cancel/Help. | **AC-2** the Set Prop and IDO values in the Parameters dialog (the full Set Prop text is from the accessibility read). | The full compiled string (needs Property, T4) and the stored state. |

### Final checkpoint (end of T3)

- **Open:** the `Edit In Collection Validator Parameters` dialog (IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_Cost)`; Property empty; Filter empty; checkboxes unchanged) over the `Global Objects` dialog (`FX_Item` selected; Type `In Collection`). No nested `Edit Set…` dialog is open.
- **Not confirmed:** the Parameters dialog and the Global Objects dialog (no OK, no Cancel).
- **Designer:** FX_Orders selected (tab `[selected]`); `ScopeType: User`; toolbar Save `[disabled]`; Regenerate Form `[disabled]`; no alertdialog; no Save invoked; no close or reopen.
- **Unexpected prompts:** none. No string or message prompt. No server-event error. No session expiry.
- **Left open for T4** as the bounded instruction permits.

### Cumulative browser action audit (T1 + T2 + T3)

| Item | T1 (21) | T2 (34) | T3 (59, corrected in T8) | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls | 21 | 34 | 59 | **114** (55 at the start of T3 + 59) |
| Tab lists / tab selects | 1 / 3 | 1 / 1 | 1 / 1 | **3 / 5** |
| Snapshots (untargeted) | 1 | 1 | 1 | **3** |
| Screenshots | 4 | 7 | 9 | **20** |
| Finds | 7 | 12 | 23 | **42** |
| Ref clicks | 3 | 7 | 13 | **23** |
| Coordinate clicks | 0 | 0 | 1 | **1** |
| Mouse moves / wheel | 1 / 1 | 1 / 1 | 0 / 0 | **2 / 2** |
| Typed entries | 0 | 1 | 3 | **4** |
| Tab key presses (commits) | 0 | 2 | 7 | **9** |
| Validators created | 0 | 1 | 0 | **1** |
| New (+) in the Validators list | 0 | 1 | 0 | **1** |
| Name prompt OK | 0 | 1 | 0 | **1** |
| Set Prop New | 0 | 0 | 2 | **2** |
| Set Prop outputs | 0 | 0 | 2 | **2** |
| Set Prop output OK | 0 | 0 | 2 | **2** |
| Set Prop list OK / editor OK | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Validator Global Objects OK / Cancel | 0 / 1 | 0 / 0 | 0 / 0 | **0 / 1** |
| Parameters OK / Cancel | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Designer Saves | 0 | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections (readback) | 0 | 0 | 0 | **0** |
| Component changes | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | **0** |

Reconciliation (corrected in T8 to the controller log `harness-audit-T3.md`): T1 21 + T2 34 + T3 59 = 114. The category sums for T3: 1 + 1 + 1 + 23 + 9 + 13 + 1 + 3 + 7 = 59. The Set Prop and dialog counts reconcile with the per-step list above (New 2, output OK 2, list OK 1, editor OK 1).

### Worker-written file inventory (T3)

- `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` (edited in T3: status header and this T3 section; created in T1).
- `evidence/EXP-090/t3-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-090/t3-01-gate-inherited-parameters-dialog-before-IDO.png`
- `evidence/EXP-090/t3-02-IDO-FX_Items-after-Tab.png`
- `evidence/EXP-090/t3-03-SetProp-Edit-Set-Values-initial.png`
- `evidence/EXP-090/t3-04-SetProp-properties-list-initial-empty.png`
- `evidence/EXP-090/t3-05-SetProp-output1-Target-%1-after-Tab.png` (the mis-entry frame)
- `evidence/EXP-090/t3-06-SetProp-output1-Target-%1-Value-FX_Description-before-OK.png`
- `evidence/EXP-090/t3-07-SetProp-output2-Target-%2-Value-FX_Cost-before-OK.png`
- `evidence/EXP-090/t3-08-SetProp-properties-list-two-outputs-before-OK.png`
- `evidence/EXP-090/t3-09-parameters-after-SetProp-IDO-set-before-InCollectionOnly.png`

T3 total: **11** repository files (1 snapshot YAML, 9 PNG, and the record edit, which is not a new file). Cumulative worker-written files for EXP-090 (T1 + T2 + T3): **the record once, plus 23 evidence files** (T1 5, T2 8, T3 10). The browser tool's own `evidence/playwright/` snapshots and console logs are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Knowledge state (T3; observed only)

| Finding | State |
| --- | --- |
| The IDO combobox accepts `FX_Items` from its dropdown list and commits by Tab | **observed** (one run; `t3-02`) |
| The Set Prop `Edit Set Values` editor opens from its ellipsis, with a Properties field and ellipsis; its Properties ellipsis opens an empty output list with New | **observed** (one run; `t3-03`, `t3-04`) |
| New opens `Edit Set Property From List` (Target, Value, Collection for Target) | **observed** (two runs in T3; `t3-05`, `t3-07`) |
| The Value list offers `FX_Description` and `FX_Cost` (plus other FX_ and system properties) | **observed** (one run; the option lists in the steps above) |
| The output list stores `%1=FX_Description` and `%2=FX_Cost` after their OKs; the list OK and the editor OK produce `SETP(%1=FX_Description,%2=FX_Cost)` in the Parameters Set Prop field | **observed** (one run; `t3-08`, `t3-09`) |
| Set Prop's Target must be typed into the Target field (`e2670` / `e2811`) and not the Value field; the mis-entry shows that a wrong-ref typing is recoverable before OK | **observed** (one run; D-T3-1; `t3-05`) |
| Designer toolbar Save stays disabled while the Parameters and Global Objects dialogs are open | **observed** (one run; the T3 finds) |
| The full compiled Parameters string `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | **unverified** (needs the Property in T4 and the Parameters OK and the readback) |
| The validator's stored state | **not established** (pending the T4 Parameters OK and Global Objects OK) |
| Any runtime, durability or replay claim | **not claimed** (not replay_verified) |

### Next permitted action (for the coordinator's next task, T4)

Continue the open `Edit In Collection Validator Parameters` dialog (IDO `FX_Items`; Set Prop set): In Collection Only Property `…` (`e2135`-area; read the refs first) once; choose `FX_Item`; Tab; verify; picker OK once. Then the Parameters OK once (verify the Set Prop and IDO values first); then the Error Message `mIsNotAValid` from its list (Tab; verify; answer No to any string or message prompt); then the Global Objects OK once; the Designer Save becomes enabled; then the readback, one Designer Save, the Form close and recent-forms reopen, per the brief. Stop with the dialogs open only where that task says to.

Classification for all T3 findings: **observed only, NOT replay_verified.**

---

## T4 (EXP-090) — In Collection Only Property `FX_Item`; Parameters OK; Error Message `mIsNotAValid`; Global Objects OK once; Designer dirty, NO Save (cycle 3)

Task T4, cycle 3, run `R-20261014-210717-d1FM`, task_message_id `65b23d49-0f0d-40f2-9fb0-c3dfc98690f3`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Date 2026-10-14. Bounded T4 instruction: confirm the inherited state read-only; identify the In Collection Only Property ellipsis from fresh evidence; open the picker once; choose `FX_Item`; Tab; verify; picker OK once; verify the Parameters values and the checkboxes; screenshot and Parameters OK once; record the compiled Parameters value verbatim from the Global Objects property sheet; Error Message `mIsNotAValid` from the list, Tab, verify; screenshot; Global Objects OK once; record the response and the Save state. No Designer Save, no validator reopen, no FX_Orders close or reopen, no component change, no re-creation of FX_Item, no Set Prop changes.

### Sources (T4)

No new source reads. T4 relied on the T1–T3 reads and the EXP-087 T3/T4 procedure for the Property picker, the Parameters OK, the Error Message list and the Global Objects OK (EXP-087 T3 lines ~470–500; EXP-087 T4 lines ~749–775, read by grep in T2 and cited there). The Error Message list's exact-identifier check (`mIsNotAValid` versus `mIsNotAValid%1`) is recorded in the T4 action table.

### Starting state (verified before any mutation)

- Tab list (first call; before any selection): tab 0 = Designer (`mode=designer`, `MGForm=FX_Orders`, current); tab 1 = `Mongoose` (portal app page, `favoriteContext=FX_Orders`). Tab 0 selected (succeeded after the list).
- Fresh untargeted snapshot `evidence/EXP-090/t4-00-designer-fresh-snapshot-start.yml` (tool-written). Read-only find: tab `FX_Orders` `[selected]`; footer `ScopeType: User`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`; `Global Objects` open with the Type row `In Collection` for `FX_Item`; `Edit In Collection Validator Parameters` open (`[active]`) with IDO `FX_Items` (`e2156`) and Set Prop `SETP(%1=FX_Description,%2=FX_Cost)` (`e2166`); no alertdialog.
- Screenshot `t4-01-gate-inherited-parameters-IDO-SetProp-before-Property.png`: the Parameters dialog with IDO `FX_Items` and Set Prop populated (clipped); Property empty; Filter empty; checkboxes unchanged; Global Objects behind. **Gate: matches the T3 checkpoint.** No material difference.

### In Collection Only Property: `FX_Item` (picker once; Tab; picker OK once)

| # | Step | Call | Observed |
| --- | --- | --- | --- |
| 1 | Refs | find `"Property:"` | Property textbox `e2133` (empty); Property ellipsis `e2135`; Filter textbox `e2142`, ellipsis `e2144` |
| 2 | Open picker | click `e2135`, **once** | Dialog `Property of FX_Items to Use`: a listbox with `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `FX_Cost`, `FX_Description`, `FX_Item` (`e2208`), `FX_Picture`, `FX_UM`, `FX_UMsDescription` and more; OK `e2253`, Cancel `e2255`, Help `e2257`. The IDO shown in the picker title (`FX_Items`) matches the IDO |
| 3 | Choose | click `FX_Item` (`e2208`), **once** | Option `FX_Item` `[selected]` (find) |
| 4 | Commit | Tab, **once** | Focus left the list (the picker's OK is focused in `t4-02`); option remains `[selected]` |
| 5 | Pre-OK screenshot | `t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png` | `FX_Item` highlighted in the list; OK focused |
| 6 | Picker OK | click `e2253`, **once** | Picker closed. Parameters `Property:` textbox reads `FX_Item` (find) |

### Parameters: pre-OK state and the Parameters OK (once)

- Screenshot `t4-03-parameters-complete-before-Parameters-OK.png` (taken before the Parameters OK): IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_C…` (clipped; the full text is the accessibility value `SETP(%1=FX_Description,%2=FX_Cost)` from the find in the gate step); Property `FX_Item`; Filter etc. **blank** (unchanged); `No List Cache`, `Output First Time Only`, `Output Immediate Only`, `Mark Output Targets Validated` **all unchecked** (unchanged, visible in the frame); `Exception Text Is Back End Msg` **unchecked** (unchanged).
- Parameters OK: click `e2190`, **once**. The Parameters dialog closed. The Global Objects property sheet's `Parameters` row (cell `e2259`) reads, verbatim from the accessibility read: **`FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`**.
- **Match:** the value equals the expected compiled value `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` character for character as read from the accessibility tree. The frame clips it; no missing character was inferred (the accessibility text is complete).

### Error Message: `mIsNotAValid` (list once; exact entry; Tab; verify)

| # | Step | Call | Observed |
| --- | --- | --- | --- |
| 1 | Refs | find `treeitem "Error Message"` | Error Message row; dropdown trigger `e2080` (the generic arrow in the value cell) |
| 2 | Open list | click `e2080`, **once** | The combobox expanded (`[expanded] [active]`); the listbox starts with `mIsMaintenanceModeCaption`, then `mIsNotAValid` (`e4443`), `mIsNotAValid%1` (`e4445`), `mIsNotAValidAllowedValBet%1and%2`, `mIsNotUniqueViewName` and more |
| 3 | Locate exact entry | find text `mIsNotAValid` | Three matches in the list; the exact literal is `e4443`; `e4445` is the `%1` variant and was **not** chosen |
| 4 | Choose | click `e4443` (`mIsNotAValid`, exact), **once** | The list closed. No string or message prompt appeared |
| 5 | Commit | Tab, **once** | Error Message row reads `mIsNotAValid` (find: `gridcell "mIsNotAValid"`) |
| 6 | Pre-OK screenshot | `t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png` | The row shows `mIsNotAValid`; Type `In Collection`; Parameters `FX_Items( PROPERTY(...`; Name `FX_Item`; no dialog |

**Message stop rule:** no prompt offered to create a string or message at any point in T4 (the find before the Global Objects OK found no `alertdialog` and no `dialog "New"`). No answer (No) was needed, and the Error Message was not left blank.

### Global Objects OK (once)

- Pre-OK check (find): no `alertdialog`; `dialog "New"` absent; the Global Objects OK `e2112` and Cancel `e2114`; toolbar Save `[disabled]`.
- OK click: `e2112`, **once**.
- **Native response:** the Global Objects dialog closed. **No prompt, no alert, no toast** (the post-OK find has no `alertdialog`, no `Global object` text; `t4-06` shows none).
- **Designer toolbar Save: ENABLED** (the find shows `button "Save"` with no `[disabled]`; the save icon is coloured in `t4-06`). **Regenerate Form enabled**. **Undo disabled** (Designer). Footer `ScopeType: User`. FX_Orders is the selected Form tab. No dialog open.
- This matches EXP-087 T4 (Save enabled after the Global Objects OK; no visible native message), and resolves nothing new about EXP-087's Save step.
- Screenshot `t4-06-after-GlobalObjects-OK-Save-enabled-no-dialog.png`.

### Designer state at the end of T4

- **Dirty** (Save enabled; Regenerate Form enabled). **No Save invoked** (the single Save is the next task's). **No dialog open.** FX_Orders selected; `ScopeType: User`. No component changed (`FX_CustomerIDCombobox` remains the selected component, Component Class `FX_CustomerID`).
- The Parameters dialog and the Global Objects dialog are **closed** (both confirmed once with OK). No prompt is open.

### Screenshots (T4; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-090/t4-01-gate-inherited-parameters-IDO-SetProp-before-Property.png` | Parameters dialog: IDO `FX_Items`; Set Prop populated (clipped); Property empty; Filter empty; checkboxes unchanged; Global Objects behind; Designer clean at gate (Save greyed in the find). | **AC-1/AC-2** inherited state before the Property step. | Stored state. |
| `evidence/EXP-090/t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png` | `Property of FX_Items to Use` picker: `FX_Item` highlighted; OK focused; Parameters dialog behind it (its Property textbox is covered by the picker in this frame, so the frame does not show its value). | **AC-2** `FX_Item` chosen and committed before the picker OK. | That the picker OK stored it (see the find after `e2253`: Property reads `FX_Item`). |
| `evidence/EXP-090/t4-03-parameters-complete-before-Parameters-OK.png` | Parameters dialog complete: IDO `FX_Items`; Set Prop `SETP(%1=FX_Description,%2=FX_C…`; Property `FX_Item`; Filter blank; four option checkboxes and Exception unchecked; OK/Cancel/Help. | **AC-2** the Parameters values and unchanged checkboxes before its OK. | The compiled string (read from accessibility, not this frame). |
| `evidence/EXP-090/t4-04-global-objects-property-sheet-after-Parameters-OK-before-ErrorMessage.png` | Global Objects property sheet after the Parameters OK: Name `FX_Item`; Type `In Collection`; Parameters `FX_Items( PROPERTY(…`; Error Message blank; Version `User version`; no dialog over it. | The sheet after the Parameters OK (the Parameters row is clipped; the full text is from accessibility). | The Error Message value (blank here). |
| `evidence/EXP-090/t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png` | Property sheet: Error Message `mIsNotAValid`; Type `In Collection`; Parameters `FX_Items( PROPERTY(…`; Name `FX_Item`; no dialog; Designer behind. | **AC-2** Error Message `mIsNotAValid` committed by Tab, before the Global Objects OK. | That the Global Objects OK stored it (see `t4-06`). |
| `evidence/EXP-090/t4-06-after-GlobalObjects-OK-Save-enabled-no-dialog.png` | Global Objects closed; Designer with the Save icon coloured; Regenerate Form enabled; Undo grey; footer `ScopeType: User`; no toast; no dialog. | **AC-2/AC-3 (pre-readback)** the Global Objects OK closed the dialog and made the Designer dirty; no native message. | That the definition is stored and readable; the readback is the next task. |

### Cumulative browser action audit (T1 + T2 + T3 + T4; reconciled)

| Item | T1 (21) | T2 (34) | T3 (59) | T4 (30) | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls | 21 | 34 | 59 | 30 | **144** (114 at the start of T4 + 30) |
| Tab lists / tab selects | 1 / 3 | 1 / 1 | 1 / 1 | 1 / 1 | **4 / 6** |
| Snapshots (untargeted) | 1 | 1 | 1 | 1 | **4** |
| Screenshots | 4 | 7 | 9 | 6 | **26** |
| Finds | 7 | 12 | 23 | 12 | **54** |
| Ref clicks | 3 | 7 | 13 | 7 | **30** |
| Coordinate clicks | 0 | 0 | 1 | 0 | **1** |
| Mouse moves / wheel | 1 / 1 | 1 / 1 | 0 / 0 | 0 / 0 | **2 / 2** |
| Typed entries | 0 | 1 | 3 | 0 | **4** |
| Tab key presses (commits) | 0 | 2 | 7 | 2 | **11** |
| Validators created | 0 | 1 | 0 | 0 | **1** |
| New (+) in the Validators list | 0 | 1 | 0 | 0 | **1** |
| Name prompt OK | 0 | 1 | 0 | 0 | **1** |
| Set Prop New | 0 | 0 | 2 | 0 | **2** |
| Set Prop outputs | 0 | 0 | 2 | 0 | **2** |
| Set Prop output OK / list OK / editor OK | 0 / 0 / 0 | 0 / 0 / 0 | 2 / 1 / 1 | 0 / 0 / 0 | **2 / 1 / 1** |
| In Collection Only Property picker: opens / choices / picker OK | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 1 / 1 | **1 / 1 / 1** |
| Parameters OK / Cancel | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 0 | **1 / 0** |
| Error Message list choices (`mIsNotAValid`) | 0 | 0 | 0 | 1 | **1** |
| Global Objects OK / Cancel | 0 / 1 | 0 / 0 | 0 / 0 | 1 / 0 | **1 / 1** |
| Dialog OKs total (all dialogs) | 0 | 1 (name prompt) | 4 | 3 (picker, Parameters, Global Objects) | **8** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections (readback) | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | **0** |

Reconciliation: T4 = 3 (tab list, tab select, snapshot) + 12 finds + 6 screenshots + 7 ref clicks + 2 Tab presses = 30. Cumulative 144 = 21 + 34 + 59 + 30 (corrected in T8). Dialog OKs: picker 1 + Parameters 1 + Global Objects 1 = 3 in T4; cumulative dialog OKs 1 + 4 + 3 = 8 (T2 name prompt 1; T3 4; T4 3).

### Worker-written file inventory (T4)

- `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` (edited in T4: status header and this T4 section; created in T1).
- `evidence/EXP-090/t4-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-090/t4-01-gate-inherited-parameters-IDO-SetProp-before-Property.png`
- `evidence/EXP-090/t4-02-InCollectionOnly-Property-FX_Item-before-picker-OK.png`
- `evidence/EXP-090/t4-03-parameters-complete-before-Parameters-OK.png`
- `evidence/EXP-090/t4-04-global-objects-property-sheet-after-Parameters-OK-before-ErrorMessage.png`
- `evidence/EXP-090/t4-05-ErrorMessage-mIsNotAValid-after-Tab-before-GlobalObjects-OK.png`
- `evidence/EXP-090/t4-06-after-GlobalObjects-OK-Save-enabled-no-dialog.png`

T4 total: **7** new evidence files (1 snapshot YAML, 6 PNG) plus the record edit. Cumulative worker-written files for EXP-090 (T1–T4): **the record once, plus 30 evidence files** (T1 5, T2 8, T3 10, T4 7). The browser tool's `evidence/playwright/` files are excluded. The worker wrote no other repository file and did not run git.

### Deviations and limits (T4)

- **D-T4-1 (no deviation in the mutations):** every field was committed before its OK; no edit was left in an editing state; no unexpected prompt appeared. No correction was needed.
- **D-T4-2 (screenshot ordering):** `t4-04` was taken after the Parameters OK and before the Error Message step, as the brief asks ("screenshot before the Parameters OK" was `t4-03`). `t4-04` is a post-OK frame and is labelled as such.
- **D-T4-3 (clipped text):** the Set Prop and Parameters cells are clipped in the frames. The full values were taken from the accessibility read (`SETP(%1=FX_Description,%2=FX_Cost)` and `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`), not inferred. No fallback read was needed.
- **D-T4-4 (Save state):** the Save icon's enabled state is read from the accessibility node (no `[disabled]`) and the coloured icon in `t4-06`. No Save was invoked.
- **D-T4-5 (no readback yet):** the Global Objects property sheet's Parameters and Error Message values are the in-dialog values after the OK. They are **not** the formal Edit > Validator readback, which is the next task. This record therefore does **not** claim the stored state.

### Knowledge state (T4; observed only)

| Finding | State |
| --- | --- |
| The Property ellipsis of the In Collection Parameters dialog opens a `Property of FX_Items to Use` picker that lists `FX_Item`, `FX_Cost`, `FX_Description`, `FX_Picture`, `FX_UM` and system properties | **observed** (one run; `t4-02`) |
| Choosing `FX_Item` and confirming the picker OK sets the Property textbox to `FX_Item` | **observed** (one run; find after `e2253`) |
| With IDO `FX_Items`, Property `FX_Item` and Set Prop `SETP(%1=FX_Description,%2=FX_Cost)`, the Parameters OK yields the Global Objects Parameters cell `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | **observed** (one run; accessibility read of the cell) |
| All five option checkboxes and Exception Text stay unchecked through the Parameters OK | **observed** (one run; `t4-03` and the unchanged state) |
| The Error Message list contains `mIsNotAValid` and the `%1` variant `mIsNotAValid%1`; the exact entry was chosen by its cell `e4443` | **observed** (one run; find text match) |
| Choosing `mIsNotAValid` and committing with Tab sets the Error Message row to `mIsNotAValid` with no string or message prompt | **observed** (one run; `t4-05`) |
| The Global Objects OK closes the dialog with no visible native message and makes the Designer dirty (toolbar Save enabled) | **observed** (one run; `t4-06`) |
| The stored validator equals the in-dialog values | **unresolved** (requires the formal readback and the single Designer Save; next task) |
| `mIsNotAValid` renders as the tutorial's "m is not a valid" at runtime | **unverified** (identifier only; text not inspected; no runtime claim) |
| Runtime validation behaviour, database durability, replay | **not claimed** (not replay_verified) |

### Next permitted action (for the coordinator's next task)

The Designer is **dirty** with the Global Objects dialog closed and no prompt open. The next task (per the brief's AC-3/AC-4) is: list tabs; select tab 0; fresh snapshot; open Edit > Validator once; select `FX_Item`; read back Type, Parameters (`FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`) and Error Message (`mIsNotAValid`); confirm `FX_CustomerID` is still listed; Cancel; then **one** native Designer Save (record the native response); then the clean-Form Form-tab close once and the recent-forms reopen once; then the reopened readback and Cancel. The correction contingency applies only to a blank or wrong value in the readback.

Classification for all T4 findings: **observed only, NOT replay_verified.**

---

## T5 (EXP-090) — formal readback of FX_Item; Global Objects closed with Cancel; ONE native Designer Save; post-Save state; NO close or reopen (cycle 4)

Task T5, cycle 4, run `R-20261014-210717-d1FM`, task_message_id `670600bc-d45d-4b37-b547-b383f0cfbf4f`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Date 2026-10-14. Bounded T5 instruction: review the EXP-087 T4/T5 procedure; list tabs; select tab 0; one fresh snapshot; confirm the inherited state (FX_Orders, User, no dialog, Save enabled); Edit > Validator once; select the existing `FX_Item` row; read every visible property; confirm `FX_CustomerID` is listed; Cancel the dialog; if all values match, invoke the native Designer Save exactly once; record the native response; inspect the post-Save state; do not close or reopen FX_Orders; reconcile the T4 controller-audit Edit failure (#38).

### Sources (T5)

- **EXP-087 T4 and T5 (previously grep-only), now read in full (lines ~800–1008 of the EXP-087 record):** T4 Error Message list pick (`mIsNotAValid`), Tab commit, Global Objects OK, the Save-enabled state after the OK; T5 resume gate (Save enabled before the readback), readback by Edit > Validator once, select the row (no New), Cancel once, one native Save, toast `Save` / `Global object(s) were saved.`, Save disabled and clean after a 6-second wait; no close or reopen in T5 (reserved for T6). The procedure used here matches it (readback → Cancel → one Save → 6 s wait → clean check → stop). EXP-087's readback treated the Parameters ellipsis as unnecessary when the accessibility text was complete; this task followed the same rule.
- Relied on the T1–T4 reads of this record (no other source changes).

### Starting state (verified before any mutation)

- Tab list (first call; before any selection): tab 0 = Designer (`mode=designer`, `MGForm=FX_Orders`, current); tab 1 = `Mongoose` (portal app page, `favoriteContext=FX_Orders`). Tab 0 selected (succeeded after the list).
- Fresh untargeted snapshot `evidence/EXP-090/t5-00-designer-fresh-snapshot-start.yml` (tool-written). Read-only find: tab `FX_Orders` `[selected]`; footer `ScopeType: User`; toolbar **Save enabled** (`button "Save" [ref=e16]` with no `[disabled]`); Regenerate Form enabled; Undo disabled; no alertdialog; no dialog; no session or sign-in text.
- Screenshot `t5-01-gate-designer-dirty-Save-enabled-before-readback.png`: FX_Orders heading; footer `ScopeType: User`; toolbar Save icon coloured; no dialog.
- **Gate: session live; the Designer is in the expected post-T4 state (dirty; Save enabled; User scope; no dialog).** The proceed condition held.

### Readback (Edit > Validator once; select the existing `FX_Item` row; no New; no change)

| Step | Call | Observed |
| --- | --- | --- |
| Find Edit | find `button "Edit"` | Edit `e5` |
| Open Edit menu | click `e5`, **once** | Menu opened; **no** server-event error |
| Find Validator | find `"Validator"` | Validator item `e1780` |
| Open Validator | click `e1780`, **once** | Global Objects dialog opened (Validators list at the top) |
| View to the F–G slice | mouse move (760,450) and one wheel (0,1600) (view only) | List at F–G |
| Locate rows | find `gridcell "(FX_Item\|FX_CustomerID\|FullTextIndexNameValidator\|GE)"` | `FullTextIndexNameValidator` (`e2204`), **`FX_CustomerID`** (`e2209`), **`FX_Item`** (`e2214`), `GE` (`e2219`), in sorted order; no duplicate `FX_Item` row |
| Select the row | click `e2214` (`FX_Item`), **once** | Row selected (`[active]`); the Properties pane shows the `FX_Item` property sheet. No value typed or changed |
| Read every visible property | find `treeitem "(Name\|Description\|Type\|Parameters\|Error Message\|Edit in-line Script\|Version)"` (read-only, one call) | See the table below |

**Visible properties (accessibility, verbatim; screenshot `t5-02-readback-FX_Item-selected-properties.png`):**

| Property | Value (verbatim) | Expected | Match |
| --- | --- | --- | --- |
| Name | `FX_Item` | `FX_Item` | yes |
| Description | blank | (not specified) | — |
| Type | `In Collection` | `In Collection` | yes |
| Parameters | `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | **yes, character for character** |
| Error Message | `mIsNotAValid` | `mIsNotAValid` | yes |
| Edit in-line Script | blank | (not specified) | — |
| Version | `User version for user <operator>` (the operator name is not copied here) | `User version` | yes |

- The Parameters value is **fully present in the accessibility text**; the frame clips it (`FX_Items( PROPERTY(…`). The Parameters ellipsis was therefore **not opened** (the brief allowed it only when the value was not fully visible).
- The Error Message is `mIsNotAValid` (the exact identifier, not the `%1` variant).
- **Mismatches: none.** No correction contingency was needed or used.
- `FX_CustomerID` is **still listed** (`gridcell "FX_CustomerID"` `e2209`, and the frame shows it directly above `FX_Item`).

### Global Objects closed with Cancel (once)

| Step | Call | Observed |
| --- | --- | --- |
| Find Cancel | find `"Cancel"` | Cancel `e2097` (the dialog's bottom toolbar) |
| Cancel | click `e2097`, **once** | Dialog closed with **no prompt** (the post-Cancel find has no `alertdialog`) |
| Post-Cancel state | find (tab, scope, Save, Undo, dialog) and screenshot `t5-03-after-readback-Cancel-before-Save-Save-enabled.png` | FX_Orders selected; `ScopeType: User`; **Save enabled** (`e16`, no `[disabled]`); Regenerate enabled; Undo disabled; no dialog |

### Single native Designer Save (ONE invocation; no retry)

- Pre-Save check: all values matched; Save enabled; FX_Orders selected; User scope; no dialog. The Save was therefore invoked.
- **Invocation:** click on the native toolbar Save (`e16`), **once**. The tool resolved the click to the toolbar's Save control.
- **Native response (verbatim, from the find and the frame):** a toast at the top right with the title `Save` and the text `Global object(s) were saved.` and a `Close` control (`e2441`). **No alert, no alertdialog, no error text, no prompt.** The worker did not dismiss the toast; it cleared itself in the wait below.
- **Immediately after the Save (find and frame `t5-04-single-Save-native-response-toast-and-disabled-toolbar.png`):** toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`; FX_Orders selected; `ScopeType: User`; no dialog. The frame also shows the Save icon greyed and a tooltip `Save` over the Toolbox from the pointer position.
- **After a 6-second wait (`browser_wait_for` 6 s; find and frame `t5-05-after-Save-clean-state-6s-later.png`):** toast no longer present (no `Global object` match); no dialog; Save `[disabled]`; Regenerate Form `[disabled]`; Undo `[disabled]`; FX_Orders selected; `ScopeType: User`. **The Designer is clean.**
- **Save count: 1.** Retries: 0. No second Save was invoked.

### Stop state (end of T5)

- **Open dialogs: none.** The toast has cleared.
- **Designer:** FX_Orders Form selected (tab `[selected]`); `ScopeType: User`; **clean** (Save, Regenerate Form and Undo disabled). No component, validator, string, message, scope, IDO or other artifact changed.
- **Not done (by instruction):** the Form-tab close and the recent-forms reopen (T6); the reopened readback (T6); any second Save; any runtime action (the runtime Form was not opened).

### Reconciliation: the T4 controller-audit Edit failure (#38)

- **What happened (in the T4 turn):** when I tried to correct the T4 record's description of the `t4-02` frame (the Parameters textbox is covered by the picker in that frame), my first `Edit` used a replacement string that did not match the file (the controller reported `String to replace not found in file`). The Edit made **no change** to the record. I then located the exact text with a read-only `Grep` (line 695) and made a corrected `Edit` that matched, which succeeded.
- **Classification:** this is a **failed record-edit tool call**, not a browser action. It produced **no** browser call, **no** Mongoose change, and **no** change to the record. The corrected Edit is the one that took effect. Only the successful corrected Edit is counted as a documentation change.
- **Controller index:** I cannot confirm from my side that this is the controller's audit item #38; the failure I can identify is the one above. If the controller's #38 refers to a different failed edit, the coordinator should check that edit's postcondition against the record; I did not retry or re-apply any edit to resolve it.
- **Effect on the audit:** none on the browser counts (the cumulative audit below does not include documentation edits). Browser operations and documentation edits are reported separately.

### Counts (T5, exact)

- **Browser calls: 25** (in order: 1 tab list; 2 tab select; 3 untargeted snapshot; 4 find gate; 5 screenshot `t5-01`; 6 find Edit; 7 click Edit (`e5`); 8 find Validator; 9 click Validator (`e1780`); 10 mouse move; 11 wheel (0,1600); 12 find gridcell rows; 13 click `FX_Item` (`e2214`); 14 find properties; 15 screenshot `t5-02`; 16 find Cancel; 17 click Cancel (`e2097`); 18 find post-Cancel state; 19 screenshot `t5-03`; 20 click the native Save (`e16`); 21 find the Save response; 22 screenshot `t5-04`; 23 wait 6 s; 24 find post-wait state; 25 screenshot `t5-05`).
- Summary: tab lists **1**; tab selects **1** (succeeded); untargeted snapshots **1**; finds **9**; screenshots **5**; ref clicks **5** (Edit, Validator, FX_Item row, Cancel, Save); mouse moves **1**; wheel **1**; waits **1**; typed entries **0**; key presses **0**. Total **25** = 1 + 1 + 1 + 9 + 5 + 5 + 1 + 1 + 1.
- Errors / timeouts / ref-not-found: **0**. Fresh-snapshot recovery allowance used: **0**. Retries: **0**. No two browser actions were issued in parallel.
- **Dialog counts:** Global Objects opened **1** (the readback); closed by Cancel **1**; closed by OK **0**. Parameters dialog opened **0**. Other dialogs **0**. Prompts seen **0**; answered **0**.
- **Tab commits: 0** (no field edited). **Validators created: 0. New (+) uses: 0.** **Set Prop outputs: 0.** **Error Message changes: 0.** **Contingency corrections: 0.**
- **Designer Saves: 1** (the native toolbar Save; response recorded above). **Designer close / reopen: 0 / 0** (reserved for T6).
- **Component changes: 0.** **Other validator changes: 0.** **Runtime actions: 0** (runtime Form not opened). **Checkout actions: 0.** **Re-logins: 0.** Session-expiry procedure: **not invoked**.
- Browser JavaScript, evaluate, console, network inspection, direct URL navigation: **0**.

### Cumulative browser action audit (T1 + T2 + T3 + T4 + T5; reconciled from 144, corrected in T8)

| Item | T1 (21) | T2 (34) | T3 (59) | T4 (30) | T5 (25) | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 21 | 34 | 59 | 30 | 25 | **169** (144 at the start of T5 + 25) |
| Tab lists / tab selects | 1 / 3 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **5 / 7** |
| Snapshots (untargeted) | 1 | 1 | 1 | 1 | 1 | **5** |
| Screenshots | 4 | 7 | 9 | 6 | 5 | **31** |
| Finds | 7 | 12 | 23 | 12 | 9 | **63** |
| Ref clicks | 3 | 7 | 13 | 7 | 5 | **35** |
| Coordinate clicks | 0 | 0 | 1 | 0 | 0 | **1** |
| Mouse moves / wheel | 1 / 1 | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | **3 / 3** |
| Waits | 0 | 0 | 0 | 0 | 1 | **1** |
| Typed entries | 0 | 1 | 3 | 0 | 0 | **4** |
| Tab key presses (commits) | 0 | 2 | 7 | 2 | 0 | **11** |
| Validators created | 0 | 1 | 0 | 0 | 0 | **1** |
| New (+) in the Validators list | 0 | 1 | 0 | 0 | 0 | **1** |
| Name prompt OK | 0 | 1 | 0 | 0 | 0 | **1** |
| Set Prop New / outputs | 0 / 0 | 0 / 0 | 2 / 2 | 0 / 0 | 0 / 0 | **2 / 2** |
| Set Prop output OK / list OK / editor OK | 0 / 0 / 0 | 0 / 0 / 0 | 2 / 1 / 1 | 0 / 0 / 0 | 0 / 0 / 0 | **2 / 1 / 1** |
| In Collection Only Property picker: opens / choices / picker OK | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 1 / 1 | 0 / 0 / 0 | **1 / 1 / 1** |
| Parameters OK / Cancel | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 0 | 0 / 0 | **1 / 0** |
| Error Message list choices (`mIsNotAValid`) | 0 | 0 | 0 | 1 | 0 | **1** |
| Global Objects OK / Cancel | 0 / 1 | 0 / 0 | 0 / 0 | 1 / 0 | 0 / 1 | **1 / 2** |
| Dialog OKs total (all dialogs) | 0 | 1 | 4 | 3 | 0 | **8** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections (readback) | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | 1 | **1** (at most 1 allowed) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (T6 pending) |
| Component changes | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | **0** |

Reconciliation: T1 21 + T2 34 + T3 59 + T4 30 + T5 25 = 169 (T3 corrected from 58 in T8). The T5 category sums are 1 + 1 + 1 + 9 + 5 + 5 + 1 + 1 + 1 = 25. Note: the T1–T4 totals above are carried from the earlier sections of this record and were not re-audited in T5.

### Worker-written file inventory (T5)

- `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` (edited in T5: status header and this T5 section; the T4 Edit failure reconciliation is in this section).
- `evidence/EXP-090/t5-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-090/t5-01-gate-designer-dirty-Save-enabled-before-readback.png`
- `evidence/EXP-090/t5-02-readback-FX_Item-selected-properties.png`
- `evidence/EXP-090/t5-03-after-readback-Cancel-before-Save-Save-enabled.png`
- `evidence/EXP-090/t5-04-single-Save-native-response-toast-and-disabled-toolbar.png`
- `evidence/EXP-090/t5-05-after-Save-clean-state-6s-later.png`

T5 total: **6** new evidence files (1 snapshot YAML, 5 PNG) plus the record edit. Cumulative worker-written files for EXP-090 (T1–T5): **the record once, plus 36 evidence files** (T1 5, T2 8, T3 10, T4 7, T5 6). The browser tool's `evidence/playwright/` files are excluded. The worker wrote no other repository file and did not run git.

### Screenshots (T5; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t5-01-gate-designer-dirty-Save-enabled-before-readback.png` | FX_Orders heading; footer `ScopeType: User`; toolbar Save coloured; Customer ID combobox row selected; no dialog. | **AC-1/AC-3** the dirty Designer in User scope before the readback. | The validator's values (no dialog). |
| `t5-02-readback-FX_Item-selected-properties.png` | Global Objects open; `FX_CustomerID` above `FX_Item` in the list; `FX_Item` selected; Name `FX_Item`; Type `In Collection`; Parameters `FX_Items( PROPERTY(…` (clipped); Error Message `mIsNotAValid`; Version `User version`. | **AC-3** Name, Type and Error Message as displayed; `FX_CustomerID` still listed. | The full Parameters text (clipped; read from accessibility, which is complete). |
| `t5-03-after-readback-Cancel-before-Save-Save-enabled.png` | Post-Cancel Designer: FX_Orders; footer `ScopeType: User`; Save enabled; no dialog. | The Cancel closed the readback with the Designer still dirty and the scope unchanged. | Stored state. |
| `t5-04-single-Save-native-response-toast-and-disabled-toolbar.png` | The toast `Save` / `Global object(s) were saved.` at the top right; toolbar Save and Undo greyed; footer `ScopeType: User`; no dialog. | **AC-3** the native Save response (verbatim) and the disabled toolbar immediately after the Save. | Database persistence (the toast is a UI acknowledgement only). |
| `t5-05-after-Save-clean-state-6s-later.png` | Toast gone; FX_Orders; Save, Regenerate and Undo greyed; footer `ScopeType: User`; no dialog. | **AC-3** the Designer is clean after the Save. | Persistence beyond the UI; the reopened readback (T6). |

### Final state (end of T5)

- **Designer (tab 0):** FX_Orders selected; `ScopeType: User`; **clean**; no dialog; not closed; not reopened. The T6 steps (close, reopen, reopened readback) are not done.
- **Web Client (tab 1):** not selected or touched in T5.
- **Validator:** `FX_Item` (`User version`), Type `In Collection`, Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, Error Message `mIsNotAValid`. `FX_CustomerID` listed and not changed.

### Deviations and limits (T5)

- **D-T5-1:** the Save was clicked through the snapshot ref `e16`; the tool resolved it to a generic element id. The result is the Save toolbar state change and the toast, as observed. Not a deviation from the brief, recorded for transparency.
- **D-T5-2:** the Parameters ellipsis was not opened (the accessibility text is complete; the brief allowed the ellipsis only when the value was not fully visible).
- **D-T5-3:** the readback's Version reads `User version for user <operator>`; the operator name is not copied into this record.
- **D-T5-4:** the Save's tooltip `Save` appeared over the Toolbox in `t5-04` because the pointer rested there. It is a hover tooltip, not a dialog.
- **D-T5-5 (reconciliation of the T4 controller-audit #38):** see the reconciliation section above. The failed Edit made no change, and its corrected Edit succeeded.
- **D-T3-1 (preserved):** the Set Prop mis-entry in T3 (`%1` typed into Value and then corrected before any OK) is unchanged and still recorded in the T3 section. T5 did not revisit it, and the readback shows the correct Set Prop outputs.
- The earlier deviations D1–D8 (T1–T4) are unchanged.

### Knowledge state (T5; observed only)

| Finding | State |
| --- | --- |
| The Global Objects readback of `FX_Item` shows Name `FX_Item`, Type `In Collection`, Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, Error Message `mIsNotAValid` | **observed** (one readback; accessibility text) |
| The readback's Parameters value equals the expected compiled value character for character | **observed** (one readback; string comparison by eye against the expected value in the brief) |
| `FX_CustomerID` remains in the Validators list after the readback and the Save | **observed** (one readback; `e2209`) |
| The Global Objects Cancel after the readback leaves the Designer dirty and changes nothing | **observed** (one run; `t5-03`) |
| The native toolbar Save produces the toast `Save` / `Global object(s) were saved.` and disables Save, Regenerate Form and Undo | **observed** (one run; `t5-04`, `t5-05`) |
| The Designer is clean after the Save (after a 6-second wait) | **observed** (one run; `t5-05`) |
| The validator is stored in the database and persists across sessions | **not established** (a UI acknowledgement; T6's reopen is an ordinary close and reopen, not independent durability) |
| `mIsNotAValid` renders as the tutorial's "m is not a valid" at runtime | **unverified** (identifier only; no runtime action in T5) |
| Runtime validation behaviour, database durability, replay | **not claimed** (not replay_verified) |

### Next permitted action (for the coordinator's next task, T6)

The Designer is **clean** with FX_Orders selected and no dialog open. The next task (per the brief's AC-4) is: list tabs; select tab 0; fresh snapshot; confirm FX_Orders, User scope, clean; close the clean FX_Orders Form **once** through its Form-tab control (no discard prompt is expected; if a prompt appears, stop and report); reopen it **once** through the Form menu recent-forms entry; open Edit > Validator once; select `FX_Item`; read it back; Cancel; confirm no component changed and the Designer stays clean.

Classification for all T5 findings: **observed only, NOT replay_verified.**

---

## T6 resumed as T7 (EXP-090) — clean FX_Orders Form close (once), recent-forms reopen (once), component check, FX_Item readback (Cancel once); NO Save; NO runtime; NO checkout (cycle 5)

Run identity: run `R-20261014-210717-d1FM`, experiment EXP-090, cycle 5. The task header carried `task=T7` with `task_message_id` `7d363ddb-5070-487f-af6e-4d2830c19283`, worker session `52ceb79b-0b18-433f-a129-0fc1b8df52b0`. Its bounded instruction was to **resume T6 after the usage-limit pause** (inspect read-only; then continue the saved T6 instruction exactly; do not replay any earlier action). Before the pause, T6 had made **one** browser call (`browser_tabs` list); no close, reopen, Save, or readback had been performed. Date 2026-10-14.

### Pause handling (read-only before acting)

- Tab list (first call of the resumed work; before any selection): tab 0 = Designer (`mode=designer`, URL without `MGForm` after the earlier readback Cancel); tab 1 = `Mongoose` (portal app page, `favoriteContext=FX_Orders`). Tab 0 selected (succeeded after the list).
- Fresh untargeted snapshot `evidence/EXP-090/t7-00-designer-fresh-snapshot-resume.yml` (tool-written). Read-only find: tab `FX_Orders` `[selected]`; footer `ScopeType: User`; toolbar **Save `[disabled]`** (the T5 Save took effect), Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no alertdialog, no dialog; no `Session Expired`, sign-in, or server-event text.
- **Session gate:** the Designer is **live** and clean (not a sign-in or error state). The Web Client tab (tab 1) was not selected or touched in this task. The Edit menu was not needed before the close; no server-event error occurred in this task.
- Screenshot `t6-01-resume-before-close-clean-FX_Orders-component-class.png` (before-close state): FX_Orders heading and tab; footer `ScopeType: User`; toolbar Save and Undo greyed; FX_CustomerIDCombobox selected (ComboBox, `object.FX_CustomerID`, pane 1, tab 14) with **Component Class `FX_CustomerID`** in the Components row and in the Inheritance section; no dialog.
- **Gate: passed.** The Designer state matches the T5 end state (clean; User scope; FX_Orders selected).

### Form close (once; Form-tab control)

| Step | Call | Observed |
| --- | --- | --- |
| Find the close control | find `button "closable FX_Orders"` | `e247` (the Form-tab close button, inside the `FX_Orders` tab) |
| Close | click `e247`, **once** | The FX_Orders tab closed. **No discard prompt**, no dialog, no alert. |
| Post-close state | find and `t6-02-after-single-Form-close-no-prompt.png` | Empty Form canvas; toolbar Save `[disabled]`; Undo disabled; footer `ScopeType: User`; no dialog. The Designer is clean. |

### Form reopen (once; Form menu recent-forms entry)

| Step | Call | Observed |
| --- | --- | --- |
| Form menu | click the Form top menu `e3`, **once** | Menu opened. Entries include recent forms `FX_Orders` (`e1770`), `FX_HelloWorld01`, `FX_Items`, `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_UMs`, `Export/Import Strings`. An adjacent `Sign Out` item exists and was **not** clicked. |
| Recent FX_Orders | click `e1770` (`FX_Orders`), **once** | FX_Orders reopened as a Designer tab (`[selected]`, heading `FX_Orders`) |
| Post-reopen state | find and `t6-03-reopened-FX_Orders-via-recent-forms-clean.png` | Save `[disabled]`; Undo disabled; `ScopeType: User`; no dialog or prompt. The Form properties: Name `FX_Orders`; Version `User version for user <operator>`; Device Type `Default`; Form Type `Normal`; Is Master `True`. |

### Component check after the reopen (view only; no component change)

- The Details panel was collapsed after the reopen; it was expanded once (`Expand Panel` `e2004`, view), and its Components tab was selected once (`e2123`, view). The Pane (00) and Pane (01) rows were collapsed; Pane (01) was selected once (`e2284`, a tree row selection) and expanded once by a coordinate click on its chevron (273,763; the last-resort click, view only).
- Frame `t6-04-reopened-components-grid-readonly-view.png` (before the expansion): the Components grid shows only `Pane (00)` and `Pane (01)` (collapsed). It proves nothing about the component rows.
- Frame `t6-05-reopened-component-rows-FX_CustomerIDCombobox-class-readonly.png` (after the expansion): Pane (01) expanded; the top rows (`FX_OrderNumberStatic`, `FX_OrderNumberEdit`, `FX_CustomerIDStatic`) are visible, and the `FX_CustomerIDCombobox` row is cut at the bottom edge, with `FX_CustomerID` visible in its Component Class column.
- Accessibility rows read after the expansion: `FX_CustomerIDCombobox ComboBox object.FX_CustomerID 1 14 FX_CustomerID` (Component Class `FX_CustomerID`); `FX_ItemCombobox ComboBox object.FX_Item 1 20` (**no** Component Class). These match the pre-EXP-090 reads recorded in the EXP-090 T1 snapshot (`t1-00`: `FX_CustomerIDCombobox … 14 FX_CustomerID`) and the T5 frames.
- **Result: no component or component-class change visible.** The comparison covers the two rows read; the other component rows were not individually compared (limit).

### Edit > Validator readback (once; select `FX_Item`; Cancel once; no New; no edit)

| Step | Call | Observed |
| --- | --- | --- |
| Find Edit | find `"Edit"` | Edit `e5` |
| Edit menu | click `e5`, **once** | Menu opened; **no** server-event error |
| Validator | click `e2830` (the Validator menu item), **once** | Global Objects dialog opened |
| View to the F–G slice | mouse move (760,450), one wheel (0,1600) (view only) | Sorted rows: `FullTextIndexNameValidator` (`e3254`), **`FX_CustomerID`** (`e3259`), **`FX_Item`** (`e3264`), `GE` (`e3269`); no duplicate |
| Select `FX_Item` | click `e3264`, **once** | Row selected; the Properties pane shows the `FX_Item` property sheet. No value typed or changed. |
| Read every visible property | find `treeitem "(Name\|Description\|Type\|Parameters\|Error Message\|Edit in-line Script\|Version)"` (read-only) | See the table below |

**Visible properties (accessibility, verbatim; screenshot `t6-06-reopened-readback-FX_Item-properties.png`):**

| Property | Value (verbatim) | Expected | Match |
| --- | --- | --- | --- |
| Name | `FX_Item` | `FX_Item` | yes |
| Description | blank | (not specified) | — |
| Type | `In Collection` | `In Collection` | yes |
| Parameters | `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )` | **yes, character for character** |
| Error Message | `mIsNotAValid` | `mIsNotAValid` | yes |
| Edit in-line Script | blank | (not specified) | — |
| Version | `User version for user <operator>` (operator name not copied) | `User version` | yes |

- The Parameters value is fully present in the accessibility text; the frame clips it (`FX_Items( PROPERTY(…`). The Parameters ellipsis was **not** opened (not needed).
- **Mismatches: none.** No correction contingency was needed or used. Nothing was edited or corrected.
- `FX_CustomerID` is **still listed** (`gridcell "FX_CustomerID"` `e3259`; the frame shows it directly above `FX_Item`).
- Global Objects closed with **Cancel once** (`e3147`). The post-Cancel find: no dialog or alertdialog; FX_Orders `[selected]`; `ScopeType: User`; toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo `[disabled]`. Frame `t6-07-after-readback-Cancel-final-clean-state.png`: FX_Orders heading and tab; Save and Undo greyed; footer `ScopeType: User`; no dialog. The Designer is **clean**.

### Designer Save (none in this task)

- **No Designer Save was invoked in T6/T7.** The single Designer Save of EXP-090 remains the T5 Save (native response `Save` / `Global object(s) were saved.`). The Save was not disabled in this task by a prior uncertain state; it was simply not needed.

### Counts (T6 resumed as T7, exact)

- **Form close:** **1** (the Form-tab close `e247`; no prompt). **Form reopen:** **1** (the Form menu recent-forms entry `e1770`). **Designer close / reopen cumulative: 1 / 1** (the AC-4 close and reopen, once each).
- **Designer Saves (this task): 0.** **Cumulative: 1** (T5; at most 1 allowed).
- **Dialogs:** Global Objects opened **1** (the readback); closed by **Cancel 1**; closed by **OK 0**. Parameters dialog opened **0**. Other dialogs **0**. Prompts seen **0**; answered **0**. String or message prompts **0**; answers **0**.
- **Tab commits: 0. Validators created: 0. New (+) uses: 0. Set Prop outputs: 0. Error Message changes: 0. Contingency corrections: 0.**
- **Component changes: 0** (the Pane (01) tree row selection and the Details panel expansion are view state). **Other validator changes: 0.**
- **Runtime actions: 0** (runtime Form not opened; tab 1 not selected). **Checkout actions: 0.** **Re-logins: 0.** Session-expiry procedure: **not invoked**. **Server-event errors: 0** (no Edit error occurred). Browser JavaScript, evaluate, console, network, direct URL navigation: **0**.

### Browser action audit (this resumed segment; exact)

Pre-pause T6 segment: **1** call (`browser_tabs` list). Resumed segment (T7, in order): **41** calls:

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer (current); tab 1 Mongoose |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, `t7-00` | Designer clean; User; no dialog |
| 4 | find (gate) | FX_Orders; User; Save and Undo disabled; no dialog |
| 5 | screenshot `t6-01` | Before-close state with component class |
| 6 | find `closable FX_Orders` | `e247` |
| 7 | click `e247` (Form-tab close, **once**) | Form closed; no prompt |
| 8 | find (post-close) | Clean; no dialog |
| 9 | screenshot `t6-02` | Empty canvas; clean |
| 10 | find `Form` | Form menu `e3` |
| 11 | click `e3` (Form menu, **once**) | Menu open |
| 12 | find menu items | Recent `FX_Orders` `e1770`; `Sign Out` not clicked |
| 13 | click `e1770` (recent FX_Orders, **once**) | FX_Orders reopened |
| 14 | find (post-reopen) | FX_Orders selected; User; clean |
| 15 | screenshot `t6-03` | Reopened; clean |
| 16 | find `Details` | `Expand Panel` `e2004` |
| 17 | click `e2004` (Expand Panel, **once**; view) | Details expanded |
| 18 | find `Components` tab | Collections selected |
| 19 | click `e2123` (Components tab, **once**; view) | Components tab shown |
| 20 | find component rows | No match (collapsed panes) |
| 21 | screenshot `t6-04` | Pane (00)/(01) collapsed |
| 22 | find `Pane (01)` | `e2284` |
| 23 | click `e2284` (tree row, **once**; view) | Pane (01) row selected |
| 24 | find component rows | Pane (01) still collapsed |
| 25 | mouse click (273,763) (chevron, **once**; view; coordinate) | Pane (01) expanded |
| 26 | find combobox row | `FX_CustomerIDCombobox` class `FX_CustomerID`; `FX_ItemCombobox` no class |
| 27 | screenshot `t6-05` | Pane (01) expanded; `FX_CustomerIDCombobox` class at the edge |
| 28 | find `"Edit"` | `e5` |
| 29 | click `e5` (Edit, **once**) | Menu open; no server-event error |
| 30 | find `Validator` | `e2830` |
| 31 | click `e2830` (Validator, **once**) | Global Objects opened |
| 32 | mouse move (760,450) | View |
| 33 | mouse wheel (0,1600) | F–G view |
| 34 | find rows | `FX_CustomerID` `e3259`, `FX_Item` `e3264` |
| 35 | click `e3264` (FX_Item row, **once**) | Row selected |
| 36 | find properties | Name, Type, Parameters, Error Message, Version read |
| 37 | screenshot `t6-06` | Readback frame |
| 38 | find `Cancel` | `e3147` |
| 39 | click `e3147` (Cancel, **once**) | Dialog closed; no prompt |
| 40 | find (post-Cancel) | Clean; FX_Orders; User; no dialog |
| 41 | screenshot `t6-07` | Final clean state |

Resumed-segment category counts: tab lists **1** (plus the pre-pause **1** = **2** in T6); tab selects **1**; untargeted snapshots **1**; finds **18**; screenshots **7**; ref clicks **10** (close `e247`; Form menu `e3`; recent `e1770`; Expand Panel `e2004`; Components tab `e2123`; Pane (01) row `e2284`; Edit `e5`; Validator `e2830`; FX_Item row `e3264`; Cancel `e3147`); coordinate clicks **1**; mouse moves **1**; mouse wheel **1**; typed entries **0**; key presses **0**; waits **0**. Total **41** = 1 + 1 + 1 + 18 + 7 + 10 + 1 + 1 + 1.

**Cumulative browser audit:** the prior total is **169** (T1–T5, with T3 corrected from 58 to 59 in T8). This resumed segment adds **42** (the pre-pause T6 tab list **1** + the resumed **41**). Cumulative: **211** (corrected in T8 from the 210 first reported).

| Item | Prior (T1–T5) | T6/T7 segment | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 169 | 42 | **211** |
| Tab lists / selects | 5 / 7 | 2 / 1 | **7 / 8** |
| Snapshots (untargeted) | 5 | 1 | **6** |
| Screenshots | 31 | 7 | **38** |
| Finds | 63 | 18 | **81** |
| Ref clicks | 35 | 10 | **45** |
| Coordinate clicks | 1 | 1 | **2** |
| Mouse moves / wheel | 3 / 3 | 1 / 1 | **4 / 4** |
| Waits | 1 | 0 | **1** |
| Typed entries / Tab presses | 4 / 11 | 0 / 0 | **4 / 11** |
| Validators created / New | 1 / 1 | 0 / 0 | **1 / 1** |
| Set Prop outputs / New | 2 / 2 | 0 / 0 | **2 / 2** |
| Dialog OKs (all) | 8 | 0 | **8** |
| Global Objects OK / Cancel | 1 / 2 | 0 / 1 | **1 / 3** |
| Parameters OK / Cancel | 1 / 0 | 0 / 0 | **1 / 0** |
| String or message prompts / answers | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | **0** |
| Designer Saves | 1 | 0 | **1** (at most 1) |
| Designer close / reopen | 0 / 0 | 1 / 1 | **1 / 1** |
| Component changes | 0 | 0 | **0** |
| Other validator changes | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |
| Server-event errors | 0 | 0 | **0** |

Reconciliation: the prior 169 are carried from the T5 audit with the T3 correction (not re-audited line by line in T7); the segment's category sums equal 42 (2 tab lists + 1 select + 1 snapshot + 18 finds + 7 screenshots + 10 ref clicks + 1 coordinate + 1 move + 1 wheel = 42).

### Worker-written file inventory (T6/T7 resumed segment)

- `experiments/EXP-090-hello-world-part-5-section-11-fx-item-in-collection-validator.md` (edited: status header and this section).
- `evidence/EXP-090/t7-00-designer-fresh-snapshot-resume.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-090/t6-01-resume-before-close-clean-FX_Orders-component-class.png`
- `evidence/EXP-090/t6-02-after-single-Form-close-no-prompt.png`
- `evidence/EXP-090/t6-03-reopened-FX_Orders-via-recent-forms-clean.png`
- `evidence/EXP-090/t6-04-reopened-components-grid-readonly-view.png`
- `evidence/EXP-090/t6-05-reopened-component-rows-FX_CustomerIDCombobox-class-readonly.png`
- `evidence/EXP-090/t6-06-reopened-readback-FX_Item-properties.png`
- `evidence/EXP-090/t6-07-after-readback-Cancel-final-clean-state.png`

Segment total: **8** new evidence files (1 snapshot YAML, 7 PNG) plus the record edit. Cumulative worker-written files for EXP-090 (T1–T6/T7): **the record once, plus 44 evidence files** (T1 5, T2 8, T3 10, T4 7, T5 6, T6/T7 8). The browser tool's `evidence/playwright/` snapshots and console logs are excluded. The worker wrote no other repository file and did not run git.

### Screenshots (each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t6-01-resume-before-close-clean-FX_Orders-component-class.png` | FX_Orders tab; footer `ScopeType: User`; Save and Undo greyed; FX_CustomerIDCombobox selected with Component Class `FX_CustomerID`; no dialog. | **AC-4 (before close)** the clean User-scoped Form and the component selection and class before the close. | The stored state (the close is a UI action). |
| `t6-02-after-single-Form-close-no-prompt.png` | Empty Designer canvas; Save greyed; footer `ScopeType: User`; no dialog or discard prompt. | **AC-4** the Form closed once with no prompt; the Designer is clean. | Persistence beyond the UI (weak boundary). |
| `t6-03-reopened-FX_Orders-via-recent-forms-clean.png` | FX_Orders reopened: Name `FX_Orders`; Form Type Normal; Is Master True; Save and Undo greyed; footer `ScopeType: User`; canvas labels visible. | **AC-4** the Form reopened once from the recent-forms entry, in User scope, clean. | The component rows (not in this frame). |
| `t6-04-reopened-components-grid-readonly-view.png` | Details Components grid with `Pane (00)` and `Pane (01)` collapsed. | The grid is present after the reopen (only the pane rows). | Any component row or class. |
| `t6-05-reopened-component-rows-FX_CustomerIDCombobox-class-readonly.png` | Pane (01) expanded; FX_OrderNumberStatic, FX_OrderNumberEdit, FX_CustomerIDStatic visible; FX_CustomerIDCombobox row cut at the bottom, Component Class `FX_CustomerID` visible in its column. | **AC-4** no component-class change visible for FX_CustomerIDCombobox (the accessibility row confirms it). | The rows below the frame; the other components (not individually compared). |
| `t6-06-reopened-readback-FX_Item-properties.png` | Global Objects: FX_Item selected; Name `FX_Item`; Type `In Collection`; Parameters `FX_Items( PROPERTY(…` (clipped); Error Message `mIsNotAValid`; Version `User version`; `FX_CustomerID` listed directly above `FX_Item`. | **AC-4** the reopened readback of Name, Type, Error Message, and `FX_CustomerID` still listed. | The full Parameters text (clipped; the accessibility read is complete). |
| `t6-07-after-readback-Cancel-final-clean-state.png` | FX_Orders; Save and Undo greyed; footer `ScopeType: User`; no dialog; Components grid with Pane (01) expanded. | The final clean state after the Cancel. | Persistence. |

### Decisive evidence per acceptance check (observed only)

- **AC-4:** close once (`t6-01`, `t6-02`, no prompt); reopen once (`t6-03`, Form Type Normal, User, clean); reopened readback matches AC-3 (`t6-06`); no component change visible (`t6-05` and the accessibility rows); no other validator changed (only `FX_Item` was selected; no edit).
- **AC-3 (reopened readback):** `t6-06` and the accessibility text: Type `In Collection`; Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`; Error Message `mIsNotAValid`; `FX_CustomerID` listed.
- **Limits:** the close and reopen are an ordinary UI cycle, a weak persistence boundary, not database durability or replay verification. The component comparison covers two rows (`FX_CustomerIDCombobox`, `FX_ItemCombobox`) and the Pane tree. The Parameters string is read from the accessibility tree (the frame clips it).

### Deviations and limits (T6/T7)

- **D-T6-1 (pause):** the pre-pause T6 turn made one tab-list call before the usage-limit pause. The resumed turn re-listed the tabs (read-only) and selected tab 0 once; no earlier action was replayed.
- **D-T6-2 (view-state actions):** the Details panel was expanded (`e2004`), its Components tab selected (`e2123`), the Pane (01) tree row selected (`e2284`) and its chevron clicked by coordinate (273,763). These are view-state actions on the reopened Form; no component property changed. The coordinate click is a last-resort action (the chevron had no accessibility ref).
- **D-T6-3 (component rows):** the component check read two rows (`FX_CustomerIDCombobox`, `FX_ItemCombobox`) and the pane structure; the other component rows were not individually compared to their pre-EXP-090 values (limit).
- **D-T6-4 (Designer state after reopen):** after the reopen, the Properties pane shows the Form properties (no component selected). The component selection that was shown before the close (`FX_CustomerIDCombobox`) was not restored; this is not a change to any component.
- **D-T6-5 (Form menu):** the Form menu also lists `Sign Out` next to the recent entries. It was not clicked.
- **D-T6-6 (Save):** no Save was invoked in T6/T7. The brief's "one Designer Save" was satisfied by T5; the T6 step did not repeat it.

### Knowledge state (T6/T7; observed only)

| Finding | State |
| --- | --- |
| The Form-tab close of a clean FX_Orders Form closes it with no discard prompt and leaves the Designer clean | **observed** (one run; `t6-02`) |
| The Form menu's recent-forms entry `FX_Orders` reopens the Form in User scope, clean, with Form Type Normal and Is Master True | **observed** (one run; `t6-03`) |
| After the close and reopen, `FX_Item` reads Name `FX_Item`, Type `In Collection`, Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, Error Message `mIsNotAValid`, Version `User version` | **observed** (one reopened readback; accessibility text) |
| The reopened readback's Parameters value equals the expected compiled value character for character | **observed** (one readback; comparison by eye against the brief's expected value) |
| `FX_CustomerID` remains listed after the reopen | **observed** (one readback) |
| `FX_CustomerIDCombobox` keeps Component Class `FX_CustomerID` after the reopen; `FX_ItemCombobox` has no class | **observed** (two accessibility rows; limit: other rows not compared) |
| The validator persists in the database across sessions | **not established** (a UI close and reopen; weak boundary; no independent durability check) |
| `mIsNotAValid` renders as "m is not a valid" at runtime | **unverified** (identifier only; the runtime was not opened) |
| Runtime validation behaviour, database durability, replay | **not claimed** (not replay_verified) |

### Final state (end of T6/T7)

- **Designer (tab 0):** FX_Orders selected (`[selected]`); `ScopeType: User`; **clean** (Save, Regenerate Form and Undo disabled); no dialog or prompt open; the Details panel is expanded (view state).
- **Web Client (tab 1):** not selected or touched in this task.
- **Validator:** `FX_Item` (User version), Type `In Collection`, Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, Error Message `mIsNotAValid`; `FX_CustomerID` listed and not changed.
- **Final acceptance audit:** not finalized in this task (per the brief; a separate coordinator-authorized documentation task).

Classification for all T6/T7 findings: **observed only, NOT replay_verified.**

---

## T8 (EXP-090) — final acceptance audit (documentation only; zero browser calls; zero Mongoose changes) (cycle 6)

Full report: `evidence/EXP-090/T8-final-acceptance-report.md`. Summary:

- **Controller reconciliation (`harness-audit-T1.md` to `harness-audit-T7.md`):** T1 21, T2 34, T4 30, T5 25, T6 pre-pause 1, T7 41 agree with the worker counts. **T3 is corrected from 58 to 59 browser calls and from 22 to 23 finds** (the worker's T3 count omitted one find). Corrected cumulative total: **211** (not 210).
- **Cumulative category totals (corrected):** tab lists 7; tab selects 8; snapshots 6; finds 81; screenshots 38; ref clicks 45; coordinate clicks 2; mouse moves 4; wheels 4; wait 1; typed entries 4; Tab key presses 11. Sum 211.
- **Validators:** created 1; Validators-list New 1. **Set Prop:** New 2; outputs 2; output-editor OKs 2; list OK 1; Edit Set Values OK 1.
- **Dialog OKs (8):** name prompt 1; Global Objects 1; Parameters 1; Property picker 1; Set Prop output editor 2; Set Prop list 1; Edit Set Values 1. **Dialog Cancels (3):** Global Objects 3 (T1 preflight; T5 readback; T7 readback); all others 0.
- **Tab commits 11** (T2 2; T3 7; T4 2). **Typed entries 4** (T2 1; T3 3). **List choices 6** (IDO; Type; Set Prop Value ×2; Property; Error Message).
- **Corrections:** in-editor, before any OK, 1 (D-T3-1; the controller row 25 label reads "Target" but the entry landed in Value, as frame `t3-05` shows). Readback contingency 0. Error Message corrections 0.
- **String or message prompts 0; answers 0; strings created 0.**
- **Designer Saves 1** (T5 row 23; native toast `Save` / `Global object(s) were saved.`); retries 0. Save disabled immediately and after 6 s.
- **Form close 1, reopen 1** (T7 rows 8 and 15); no discard prompt.
- **Component mutations 0** (two rows compared individually: FX_CustomerIDCombobox class `FX_CustomerID` unchanged; FX_ItemCombobox no class unchanged). The zero-mutation claim rests also on the audit, not an exhaustive component comparison. **Validators other than FX_Item changed 0.** **Runtime actions 0.** **Checkout actions 0.** **Session-expiry procedures 0. Re-logins 0.** Browser-tool errors 0.
- **Non-browser errors (2):** T1 Read #4 (record path not yet existing; read-only); T4 Edit #38 (replacement string not found; no change; corrected Edit #40 succeeded).
- **Coordinate and view-state actions:** IDO dropdown arrow at (1019,367) in T3 (no accessibility ref); Pane (01) chevron at (273,763) in T7; Validators-list scrolls (mouse moves and wheels) in T1, T2, T5 and T7; Details expand, Components tab and Pane (01) row selection in T7. None changed a component or validator.
- **Pre-pause T6 segment:** one tab list before the usage-limit pause; the resumed T7 began with read-only inspection before the first mutation (the close at T7 row 8). The T7 header and the bounded instruction disagreed on the task name; the bounded instruction was followed.
- **Acceptance (T8):** AC-1 supported (sources read, with partial reads disclosed; tab 1 live in T1; Designer clean in User scope; FX_Item absent; FX_CustomerID present). AC-2 supported (creation, type, IDO, outputs, In Collection Only Property, Error Message; each committed before OK; each dialog confirmed once). AC-3 supported (readback Type, Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`, Error Message `mIsNotAValid`; FX_CustomerID listed; one Save with native response). AC-4 supported (one clean close, one recent-forms reopen, matching reopened readback; two component rows compared). AC-5 supported (this audit, the inventory, the final state).
- **Worker-written files:** new repository files 2 (the record, created in T1; `evidence/EXP-090/T8-final-acceptance-report.md`, created in T8). New evidence files 44 (6 YAML snapshots; 38 PNG). Record edits: T2 5, T3 2, T4 3 (+1 failed), T5 2, T7 2, T8 17 count corrections plus the status-header edit and this section. Harness-written controller audits under `evidence/EXP-090/`: 7. Browser-tool artifacts under `evidence/playwright/` (outside the EXP-090 paths; listed for operator review, not enumerated here).
- **Final recommendation: ACCEPTED AS OBSERVED**, with the limitations listed in the report (section 11). No additional browser work is recommended.

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 11 is complete: validator **FX_Item** exists. The operator decided acceptance.

- Created, for later cleanup (tenant-wide global object): validator **`FX_Item`**:
  - Type In Collection;
  - Parameters `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`;
  - Error Message `mIsNotAValid`.
  - One Designer Save: "Global object(s) were saved." No Form component changed; FX_ItemCombobox still has no Component Class.
- **Run R-20261014-210717-d1FM:**
  - It paused on the subscription usage limit after T5 (one tab-list call into T6) and was resumed with `--continue-after-usage`. T7 did the bounded T6 work and replayed nothing.
  - T8, the final report, completed and recommended ACCEPTED AS OBSERVED. The harness then classified it as `worker_blocked:permission` because of one denied Glob into `C:\Users\juara\AppData\Local\Temp\claude` (outside the repo, blocked by the read-roots setting; harmless).
  - A plain resume re-paused, and `--approve denials` does not apply to this pause type. The coordinator's final review therefore never ran.
  - The operator accepted on the assistant's review and ended the run with `stop`.
- Screenshots viewed by the operator assistant:
  - `t5-04`: the single Save toast "Global object(s) were saved." with a clean toolbar, scope User.
  - `t6-06`: after one Form close and one recent-forms reopen, Global Objects > Validators with FX_Item selected shows In Collection, `FX_Items( PROPERTY(…`, `mIsNotAValid`; FX_CustomerID is still listed.
- Flagged `browser_type` calls, all allowed:
  - T2: the name `FX_Item`;
  - T3: three Set Prop Target entries. Row 25 landed in Value by mistake and was corrected before any OK (D-T3-1); the pre-OK frames `t3-06` and `t3-07` show the correct values.
- Errors: none with a Mongoose effect.
  - T1: a missing-file Read;
  - T4: a failed record Edit (documentation only);
  - T6: the usage limit;
  - T8: the Glob denial.
- Counts: validators created 1, Designer Saves 1, Designer close/reopen 1, browser calls 211 (corrected by T8 from 210), runtime opens 0, unloads 0, checkout actions 0.
- Limits: same-session UI evidence only. Database durability and the runtime validation message are not established.
- Harness gap: an out-of-repo Glob denial on a completed task should classify as `completed_with_denials`, not `blocked`.
- Confinement (git status): only `evidence/EXP-090/` and this record were written by the run.
- Next: Part 5 section 12, the FX_Item component class and its application to FX_ItemCombobox and the Item grid column.
