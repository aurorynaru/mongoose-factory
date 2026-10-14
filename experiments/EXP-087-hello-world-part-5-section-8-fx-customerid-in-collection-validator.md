# EXP-087 — Hello World Part 5 Sections 7–8: FX_CustomerID In Collection validator

**Status (T8, 2026-10-14; cycle 6; final acceptance audit, documentation only, zero browser calls and zero Mongoose changes): ACCEPTED AS OBSERVED, with the conditions in the T8 section. AC-1 to AC-4 are supported by existing evidence; AC-5 is consolidated. The harness-reconciled browser-call total is 210 (the worker-reported 208 omitted two read-only finds: one in T3, one in T6). Nothing here claims database durability, runtime validation, the runtime text of `mIsNotAValid`, or replay verification. Full report: `evidence/EXP-087/T8-final-acceptance-report.md`.**

**Status (T6, 2026-10-14; cycle 5; clean close, reopen and reopened readback): THE CLEAN FX_Orders FORM WAS CLOSED ONCE (Form-tab close control; no discard prompt) AND REOPENED ONCE (Form menu recent-forms entry `FX_Orders`). THE REOPENED READBACK MATCHED ON EVERY VISIBLE PROPERTY: Name `FX_CustomerID`, Version `User version`, Type `In Collection`, Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` (full text from accessibility; frame clipped), Error Message `mIsNotAValid`, Description and Edit in-line Script blank. Global Objects closed with Cancel once. FX_Orders is selected, `ScopeType: User`, Save and Undo disabled, no dialog or prompt. No Designer Save in T6; no component or validator property changed; no runtime, checkout, regeneration or cache action. Classification: observed only. An ordinary close/reopen is a weak persistence boundary: it is NOT independent database durability and NOT replay verification.** Details: section "T6" at the end of this record.

**Status (T5 resumed after the usage-limit pause, 2026-10-14; cycle 4; formal readback and ONE Designer Save): THE FORMAL READBACK MATCHED ON EVERY VISIBLE PROPERTY (Name `FX_CustomerID`, Version `User version`, Type `In Collection`, Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`, Error Message `mIsNotAValid`, Description and Edit in-line Script blank). No correction needed or made. Global Objects closed with its CANCEL once. ONE native Designer Save invoked: toast `Save` / `Global object(s) were saved.` Afterwards the toolbar Save, Regenerate Form and Undo are all DISABLED; FX_Orders still selected; `ScopeType: User`; no dialog open; the Designer is clean. NO second Save; NO Form close or reopen; NO validator reopen after the Save; NO component change; runtime not opened. Stopped after Save inspection, as instructed. Classification: observed only. Not replay_verified; no database durability claimed.** Details: section "T5" at the end of this record.

**Note on the run header:** the task message that resumed this work carried a `task=T6` header, but its bounded instruction said to resume T5 (readback, Cancel, one Save, then stop). The bounded instruction was followed. T6 (Form close/reopen and reopened readback) was not performed.

**Status (T4, 2026-10-14; cycle 3; Error Message and Global Objects confirmation): ERROR MESSAGE SET TO `mIsNotAValid` (chosen from the offered Error Message list, Tab-committed, verified; no string or message prompt appeared; no typed entry; no No answer needed). GLOBAL OBJECTS DIALOG CONFIRMED WITH ITS OK ONCE; the dialog closed with no prompt. Designer toolbar Save became ENABLED (observed; this resolves the T3 open question about Save). Regenerate Form also enabled. Undo disabled. NO Designer Save invoked; NO formal validator readback; FX_Orders NOT closed or reopened; runtime NOT opened. Final state: FX_Orders selected, `ScopeType: User`, Designer dirty, no dialog open. Classification: observed only. Not replay_verified.** Details: section "T4" at the end of this record.

**Status (T3, 2026-10-14; cycle 2; Parameters configuration): PARAMETERS CONFIGURED AND CONFIRMED WITH OK, ONE OK EACH: IDO `FX_HelloWorld01`; Set Prop `%1=FX_Label`, `%2=FX_Address` (two outputs, one New each, each OK once); In Collection Only Property `FX_Code` (picker OK once). Error Message NOT entered (reserved for T4, per the bounded instruction). CHECKPOINT: the Global Objects dialog is LEFT OPEN for T4. Designer toolbar Save remained DISABLED after the Parameters OK (observed). No Global Objects OK, no Cancel, no Designer Save, no close/reopen, no formal readback (the Global Objects property sheet was read in place only). Parameter string read in place: `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`. Classification: observed only. Not replay_verified.** Details: section "T3" at the end of this record.

**Status (T2, 2026-10-14; cycle 1; creation checkpoint): VALIDATOR SHELL `FX_CustomerID` CREATED ONCE THROUGH New (+); Type set to In Collection (Tab-committed, verified); Parameters ellipsis opened ONCE and its initial layout recorded. CHECKPOINT: the `Edit In Collection Validator Parameters` dialog is LEFT OPEN for T3, with the nested Global Objects dialog open behind it. Nothing else set: IDO, Set Prop outputs, In Collection Only Property and Error Message are NOT yet entered. Parameters and Global Objects were NOT confirmed (no OK or Cancel). No Designer Save, no close/reopen, no readback, no component change. Classification: observed only. Not replay_verified.** Details: section "T2" at the end of this record.

**Status (T1, 2026-10-14; cycle 0; read-only preflight and gates): PREFLIGHT COMPLETE. STOPPED before the first `New` (+) click in the Validators list, as the T1 instruction required.** No validator created, no New used, no prompt answered, no field set, no Designer Save, no close/reopen, no component change. AC-1 supported (with limits). AC-2 to AC-5 **NOT RUN** (creation, readback, Save and reopen are for later tasks). Classification: **observed only. Not replay_verified.**

Run identity: run `R-20261014-151624-Qgjt`, experiment EXP-087, cycle 0, task T1, task_message_id `5d9a7620-0e9a-4b81-ae1a-9c8114305f1f`, worker session `f44c4b57-1cb1-4edd-a2ba-cc165c61b056`. Date 2026-10-14. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-087/`.

Record creation disclosure: `experiments/EXP-087-…md` did not exist before this task (the repository held only the brief commits `f0fc961` draft and `4d4f7ac` approved). This worker created the record in T1.

## Why this experiment (from the brief)

The tutorial (`docs/mongoose/transcripts/hello-world-pt5.md`, Sections 7–8, 10:38–13:06) introduces a reusable In Collection validator that, when a Customer ID changes, looks the value up in the Customer IDO and returns Name and Address to the form before Save. This experiment adapts that to FX_ names in User scope: IDO `FX_HelloWorld01` (tutorial `Customer`), lookup property `FX_Code` (tutorial `ID`), outputs `FX_Label` (tutorial `Name`) and `FX_Address` (tutorial `Address`), per EXP-078. Expected end state after the later tasks: validator `FX_CustomerID`, Type In Collection, Parameters with IDO `FX_HelloWorld01`, Set Prop `%1` = `FX_Label` and `%2` = `FX_Address`, In Collection Only Property `FX_Code`, Error Message `mIsNotAValid` (the tutorial's spoken "m is not a valid" is taken as the standard message ID; **unverified**; no string is to be created). The component class (Section 9) and its use on FX_Orders are later experiments.

## Sources reviewed (T1, before any browser interaction)

| Source | Extent of read | Applied lesson |
| --- | --- | --- |
| `AGENTS.md` | Read in full (238 lines). | FX_ scope extension; User editing scope; evidence rules; recovery rules; knowledge states. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, Section 8 (lines 197–213) and transcript lines 488–513 (10:38–13:06) | Read in full. Trust: **unverified** tutorial transcript (automatic transcription; possible recognition errors). | Narrated steps 1–7: New, name, Type In Collection, Parameters ellipsis, IDO, Set Prop `%1` Name and `%2` Address, In Collection Only Property ID, error message, confirm back to the editor. Narration at 12:09 says "hit new" for each output and selects the value from the drop list. The tutorial itself says the syntax of the error message and its trailing parameters is unconfirmed. |
| `docs/mongoose/guides/global-objects-additional.md`, "Creating a Validator object" (lines 9–21) | Read in full. Trust: **unverified** documentation. | Route: Edit > Validator; New (+); Name; OK; the property sheet is then shown; set the properties; OK. |
| same file, "Modifying global objects in the Web Designer" (lines 59–74) | Read in full. Trust: **unverified** documentation. | Edit menu > object type; select the object in the editor form; modify; OK. |
| `docs/mongoose/guides/ido-development.md`, "Adding or editing validators for an IDO property or property class" (lines 255–282) | Read (targeted search of the section and its In IDO Collection link: `lsm1454147704547.html`). Trust: **unverified** documentation. | The In Collection validator page is the target of the In IDO Collection type. The link was not followed (no direct URL navigation permitted). |
| `experiments/EXP-085-…property-class-extensions.md` (status header and T1–T7 summaries, the Global Objects route, the list layout, the Tab commits, the Cancel readbacks, the Designer Save toast) | Partial read (header, T1–T2, T4–T6 status, T1 gates). Full record is 1331 lines; the remainder was not read. | (a) The Global Objects dialog has OK / Cancel / Help and a list with a Properties pane. (b) Each field committed with one Tab before OK. (c) Cancel readback changed nothing. (d) The Designer Save toast read `Global object(s) were saved.` (EXP-085 T5, observed). (e) After OK on a creation editor the Designer became dirty (Save enabled). |
| `experiments/EXP-069-R4-…right-click.md` (outcome, lines 359–370, and the Global Objects route) | Targeted read of the outcome and its lessons. | "Do not click OK while the combobox is still active; commit with Tab first." Global Objects route confirmed. |
| `experiments/EXP-078-…customer-join.md` (FX_HelloWorld01 columns) | Targeted search. | FX_HelloWorld01 columns used: `FX_Code` (key), `FX_Label` (name), `FX_Address` (address). Confirmed by EXP-078 lines 27–35 and 135–143 (targeted only). |

**Partial-read limitation:** EXP-085 was read in part (about 320 of 1331 lines plus status headers); the remainder was not applied. The Designer state in this task was verified live.

## Session and tab handling

- Tab list (first browser call of the task, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, `MGForm=FX_Orders`, current); tab 1 = Web Client / Mongoose (`favoriteContext=IdoProperties`). Tab 0 selected (succeeded, after the list). Tab 1 was **not** selected or touched.
- Session usable throughout. No "Session Expired" modal, no Infor sign-in page, no portal notification banner, no unsaved-change prompt, no browser-native dialog. **Re-login count 0.** The session-expiry procedure was **not** invoked.
- Console counts at snapshots: "2 errors, 0 warnings" on the Designer page (not inspected; out of scope).
- Observed after the dialog Cancel: the Designer tab's page URL no longer contains `MGForm=FX_Orders`, though the tab heading and selected Form remained `FX_Orders` (the same URL drop EXP-069-R4 and EXP-085 recorded after a dialog close). Identity was established from the tab and heading, not the URL.

## AC-1 — Gates (Designer, FX_Orders, Validators dialog, FX_CustomerID absence)

### Designer identity and scope (g0-01, g0-04)

| Item | Observed |
| --- | --- |
| Form | `FX_Orders` (Designer tab selected; heading `FX_Orders`) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator user> ]` (the name is not copied here) |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; no alertdialog or in-page dialog |
| Selected component at start | `FX_CustomerIDCombobox (ComboBox, object.FX_CustomerID, pane 1, tab 14)` (selection only; the origin of this selection was not checked; no property changed) |

**Deviation D1 (disclosed):** the brief says to open FX_Orders once through the Form menu recent-forms entry if needed. FX_Orders was **already** the open, clean, User-scoped Designer Form on arrival, so no second open was performed. Identity and scope were established from the selected tab, the heading, the footer and the screenshot. The later close/reopen (AC-4) uses the Form menu recent-forms entry as the brief requires.

### Validators dialog layout (read-only; g0-02, g0-03)

Route: Designer top menu `Edit` (one click) > `Validator` (one click). Opened **once**. Dialog title `Global Objects`; the title bar and buttons are the same dialog type as EXP-085's Property Class Extension list.

| Region | Observed layout |
| --- | --- |
| Left pane heading | `Validators` (alphabetical list, scrollable with a vertical scroll bar) |
| Left search box | Empty textbox with a magnifier icon above the list (not used) |
| List controls (bottom of left pane) | Three icon buttons: `+` (New; **not used**), a copy icon (Copy; **not used**), and a trash icon (Delete; **not used**) |
| Right pane heading | `Properties` |
| Right search box and icons | Empty textbox with a magnifier; two blue icon buttons at the top right (presumed expand / collapse; **not used**, function not verified) |
| Properties pane | **Empty** (no validator selected at the gate) |
| Properties pane footer | Undo and Redo icon buttons, both `[disabled]` in the accessibility tree |
| Dialog buttons | `OK`, `Cancel`, `Help` (bottom centre) |

Dialog list content observed (accessibility and screenshot): the first slice runs `AccessAsPrefixObjectNameValid` … `CheckDuplicateProperty` (g0-02); a second slice in the same DOM runs `DataTypeLength` … `EncryptUserPasswords` (g0-03). Existing validators are present (for example `AlwaysValid`, `DefaultTypesDescValid`, `FormNameValidator`). None were selected, opened or changed.

### FX_CustomerID presence (absent)

| Check | Observed |
| --- | --- |
| Alphabetical position where FX_ validators would sort | Between `FullTextIndexNameValidator` and `GE` (the accessibility slice of the list, read after one mouse-wheel view scroll of the list; no row exists between these two rows). |
| Other FX_ rows | No `FX_` row was found in the F–G slice or in the D–E slice read. No `FX_CustomerID` row exists in those slices. |
| Conclusion | **`FX_CustomerID` is absent** from the Validators list (observed). |

Limitations: the list is the Designer's client view of the metadata, not a database read. The list was read by scrolling and accessibility reads of two slices, not by enumerating every row. The F–G slice was read by accessibility only: **no screenshot shows the F–G slice** (g0-03 shows D–E; see the filename note below).

### Screenshots (gates)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-087/g0-01-designer-fx-orders-start-state.png` | FX_Orders heading and tab; Save and Undo greyed; footer `ScopeType: User`; FX_CustomerIDCombobox selected; no dialog. | Form identity, User scope and clean toolbar at the start. | Validators list state (no dialog open here). |
| `evidence/EXP-087/g0-02-validator-dialog-readonly-list.png` | `Global Objects` dialog over the Designer; `Validators` list (AccessAsPrefixObjectNameValid … CheckDuplicateProperty); list controls `+`, copy, trash; Properties pane empty; OK / Cancel / Help. | The dialog layout and that no validator is selected. | FX_ rows (not in this slice). |
| `evidence/EXP-087/g0-03-validator-list-FX-slot-before-OK.png` | **Filename is misleading.** The dialog was not at an OK step. It shows the D–E slice (`DateOK` … `EncryptUserPasswords`), with `DocumentType` highlighted by pointer hover. No FX_ row is visible. | Scroll position only (list is scrolled to D–E). | The FX slot, which is **not** in this image; the FX slot evidence is the accessibility read recorded above. |
| `evidence/EXP-087/g0-04-after-cancel-clean-no-dialog.png` | After one Cancel: FX_Orders heading; Save and Undo greyed; footer `ScopeType: User`; no dialog. | The Designer is clean and back in User scope with the dialog closed. | Anything about the stored validators. |

## Action audit (T1, exact counts)

Browser calls: **19** (this task's total; all calls listed in order below).

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer `MGForm=FX_Orders`, current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (saved `g0-00`) | Designer; Save and Regenerate disabled; Undo disabled |
| 4 | `browser_find` regex (ScopeType / FX_Orders / alertdialog) | User scope; FX_Orders heading; no dialog |
| 5 | `browser_take_screenshot` `g0-01` | Identity and clean state |
| 6 | `browser_click` `e5` (Edit menu) | Edit menu opened |
| 7 | `browser_find` text "Validator" | Validator menu item `e2210` |
| 8 | `browser_click` `e2210` (Validator, **once**) | Global Objects dialog opened |
| 9 | `browser_find` regex (dialog layout; broad) | Layout read; large output (134 matches; read-only) |
| 10 | `browser_take_screenshot` `g0-02` | Dialog layout |
| 11 | `browser_mouse_move_xy` (760,450) | Pointer over the Validators list (view) |
| 12 | `browser_mouse_wheel` (0,1000) | Validators list scrolled to F–G (view) |
| 13 | `browser_find` regex `gridcell "(F…|G…)"` | F–G slice read: `FeatureIdInFeatureManager` … `GE` |
| 14 | `browser_take_screenshot` `g0-03` | Shows D–E slice (not F–G; see the filename note) |
| 15 | `browser_find` regex `gridcell "(D…|F…|G…)"` | Current DOM holds D–E and F–G; `FullTextIndexNameValidator` → `GE` adjacent |
| 16 | `browser_find` text "Cancel" | Cancel `e2527` |
| 17 | `browser_click` `e2527` (Cancel, **once**) | Dialog closed; no OK |
| 18 | `browser_find` regex (tab, heading, scope, Save, Undo, dialog) | FX_Orders selected; User scope; Save and Undo disabled; no dialog |
| 19 | `browser_take_screenshot` `g0-04` | Post-Cancel clean state |

Summary of the calls: tab lists 1; tab selects 1 (succeeded); snapshots 1 (untargeted, saved to file); finds 7; screenshots 4; ref clicks 3 (Edit, Validator, Cancel); coordinate clicks 0; mouse moves 1; mouse wheel 1; key presses 0; typed text 0; fill 0. Total 19 = 1 + 1 + 1 + 7 + 4 + 3 + 1 + 1.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" errors **0**; fresh-snapshot recovery allowance used **0**; no retries. No two browser actions were issued in parallel.

**Mongoose mutations and lifecycle (T1), exact:**
- Validators created: **0**. `New` (+) uses: **0**. Name prompts answered: **0**. Dialog OK clicks: **0**. Dialog Cancel clicks: **1** (Global Objects, no change).
- Tab commits: **0**. Field entries (typed or chosen): **0**. Set Prop outputs: **0**. Parameters ellipsis clicks: **0**. In Collection Only ellipsis clicks: **0**.
- String or message prompts: **0** seen; answers: **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Designer unloads: **0**. Cache unloads, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0** (the FX_CustomerIDCombobox row selection and the list scroll are view state).
- Existing validators changed, copied, renamed or deleted: **0**. Validator selections: **0**.
- Runtime (tab 1) actions: **0**. Runtime Form opened: **0**. Record edits: **0**.
- Checkout, check-in, undo-checkout: **0**.
- Browser JavaScript / evaluate / console / network inspection by the worker: **0**. (The browser tool's own replies contain the Playwright code it ran; the worker wrote no script.)
- Re-logins: **0**. Session-expiry procedure: **not invoked** (no expiry observed).

## Worker-written file inventory (T1)

- `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` (created by this worker; this record).
- `evidence/EXP-087/g0-00-designer-fresh-snapshot-start.yml` (browser tool wrote it at the worker's `filename` request).
- `evidence/EXP-087/g0-01-designer-fx-orders-start-state.png`
- `evidence/EXP-087/g0-02-validator-dialog-readonly-list.png`
- `evidence/EXP-087/g0-03-validator-list-FX-slot-before-OK.png` (name misleading; shows D–E; see the table above).
- `evidence/EXP-087/g0-04-after-cancel-clean-no-dialog.png`

Total worker-requested repository files (T1): **6** (1 record created directly by the worker; 5 evidence files created by the browser tool at the worker's request). The browser tool also wrote its own page snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-14T07-17-04-134Z.yml`, `page-2026-10-14T07-17-07-485Z.yml`, `page-2026-10-14T07-17-50-581Z.yml`, `console-2026-10-14T07-16-49-137Z.log`); these were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Acceptance (T1)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported with limits.** Sources reviewed (partial EXP-085 read disclosed). Session usable. Designer FX_Orders, User scope, clean. Edit > Validator dialog layout recorded. FX_CustomerID absent in the alphabetical position and no FX_ validator row seen in the slices read. | g0-01 (identity, scope, clean); g0-02 (dialog layout, empty Properties pane); g0-04 (clean after Cancel); the F–G accessibility read (FX_CustomerID absent) | Client UI view, not a database read. F–G slice has **no screenshot** (accessibility only). Full list not enumerated. g0-03 name is misleading (shows D–E). |
| AC-2 | **NOT RUN** (creation is a later task; T1 stopped before `New`). | — | — |
| AC-3 | **NOT RUN.** | — | — |
| AC-4 | **NOT RUN.** | — | — |
| AC-5 | **Partial** (action audit and inventory for T1 recorded; complete audit and final report are for the last task). | Audit and inventory above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| FX_Orders is open in the Designer, User scope, clean, at the start of the task | **observed** (one run, T1; g0-01) |
| Edit > Validator opens a `Global Objects` dialog with a `Validators` list, list controls `+`, copy and trash, a `Properties` pane, and OK / Cancel / Help | **observed** (one run, T1; g0-02) |
| `FX_CustomerID` is absent from the Validators list (alphabetical position between `FullTextIndexNameValidator` and `GE`) | **observed** (one run, T1; client UI view; accessibility read; not a database read) |
| Cancel in the Validators dialog leaves the Designer clean with no change | **observed** (one run, T1; g0-04) |
| The Designer page URL drops `MGForm=FX_Orders` after a dialog Cancel while the Form stays selected | **observed** (one run, T1; URL only; identity read from the tab heading) |
| Tutorial Section 8 narrated steps (In Collection type; IDO; Set Prop `%1`/`%2`; In Collection Only Property ID; error message) | **unverified** (tutorial transcript; the FX_ mapping is the brief's) |
| `m is not a valid` is the standard message ID `mIsNotAValid` | **unverified** (the brief's assumption; no prompt has been read yet) |

## Deviations and limits (T1)

- **D1:** FX_Orders was already open; not re-opened through the recent-forms entry (see the AC-1 section).
- **D2:** The g0-03 screenshot is named `…FX-slot-before-OK`, but it shows the D–E slice and no OK step. The name is recorded as misleading; the FX slot is evidenced only by the accessibility read.
- **D3:** The F–G slice has no screenshot. The screenshot-only trail for the absence check is incomplete; the accessibility read is the only evidence for that slice.
- **D4:** The read-only dialog's validator list was scrolled with the wheel (view state only); no row was selected.
- **D5:** A broad regex find (9) returned a large output (134 matches). It was read-only and had no effect.
- **D6:** Partial read of EXP-085 (about 320 of 1331 lines). The unread parts were not applied.

## Next permitted action (requires the coordinator's authorization for the next task)

1. **T2 (creation, Name and type):** from the open clean FX_Orders Designer, open Edit > Validator **once** (the dialog is closed now). Use the list `+` (New) **once**; enter the Name `FX_CustomerID`; confirm the name prompt with its OK **once**; record the new property sheet; set Type In Collection (choose from its list, Tab once, verify); open the Parameters ellipsis once and record the layout before any change.
2. **T3 (parameters, outputs, lookup property):** IDO `FX_HelloWorld01` (choose from the list, or type the exact name if the list is empty; Tab; verify); Set Prop: New once per output; `%1` = `FX_Label`, `%2` = `FX_Address` (Tab and verify each; OK once each); In Collection Only Property ellipsis once, choose `FX_Code`, OK once; Error Message `mIsNotAValid` (answer No to any string or message prompt; leave blank if declined); Tab; verify; OK back through the nested dialogs and the Global Objects dialog.
3. **T4 (readback, one Designer Save, close/reopen, reopened readback)** per the brief's AC-3 and AC-4.

Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 — FX_CustomerID shell created through New (+) once; name committed; Type In Collection committed; Parameters dialog opened once and LEFT OPEN for T3 (cycle 1)

Task T2 (bounded instruction): confirm the inherited FX_Orders Designer is clean in User scope with no dialog; open Edit > Validator once; capture the F–G list slice before any mutation (absence check; no scroll loop beyond one corrected view); if FX_CustomerID exists, stop blocked; otherwise New (+) once, Name `FX_CustomerID`, name prompt OK once; capture the property sheet; Type In Collection from its list, Tab once, verify, screenshot; Parameters ellipsis once, capture the layout before any change; **stop at the checkpoint with the Parameters dialog open** for T3. No IDO, outputs, In Collection Only Property or Error Message entry; no OK or Cancel of the Parameters or Global Objects dialog; no Designer Save. Run `R-20261014-151624-Qgjt`, task_message_id `8774090f-ffc6-42e7-bd90-6121fb6bb7e4`, worker session `f44c4b57-1cb1-4edd-a2ba-cc165c61b056`, cycle 1.

### Sources and reads (T2)

T2 did not re-read the sources. It relied on the T1 reads listed in the Sources table above (tutorial Section 8 and its transcript lines 488–513; the two Global Objects guide sections; the In Collection validator link in `ido-development.md`; EXP-085 partial; EXP-069-R4 outcome; EXP-078 columns). **Disclosed:** the bounded instruction listed the sources "before browser interaction"; they were read in T1 of this same experiment, not again in T2.

### Starting state (fresh, verified before any action)

- Tab list (first browser call, before any selection): tab 0 Designer (`mode=designer`, `MGForm=FX_Orders`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot `evidence/EXP-087/t2-00-designer-fresh-snapshot-start.yml`; find: tab `FX_Orders` selected; heading `FX_Orders`; footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no alertdialog, no in-page dialog. **Clean and User scope.**
- Screenshot `t2-00` was not taken; the gate state is recorded by the find and the `t2-03` and `t2-04` frames (Global Objects open over the clean Designer).

### Existence gate (FX_CustomerID absent; F–G slice captured before mutation)

- Edit (`e5`) > Validator (`e2210`) opened the `Global Objects` dialog **once** (read-only; no selection).
- `t2-01-validator-list-FG-slice-before-New.png`: the first wheel scroll (0,1000) landed on the **D–E** slice (`DateOK` … `EncryptUserPasswords`); the F–G slice was not in view. This matches the T1 result.
- One corrected view-only wheel scroll (0,600) (the authorized single correction): `t2-02-validator-list-FG-slice-before-New.png` shows **FormNameValidator, FormsDatabaseNameValid, FullTextIndexNameValidator, GE, GE X and LE Y, GELabel, GenerateEventNoMsg, GenerateIDOExtClassTemplate, GetDLName** (and a row beginning `FixCollectionName` at the top, partly cut). **No `FX_` row is visible; there is no row between `FullTextIndexNameValidator` and `GE`, where `FX_CustomerID` would sort.** The F–G slice is now evidenced by a screenshot (T1 had accessibility only).
- **Gate result: FX_CustomerID absent. Proceed.** (Limit: a client UI view, not a database read.)

### Dialog layout (Global Objects, read-only before New)

Same as T1 (`Validators` list with search box; list controls `+` (`e2488`), copy (`e2489`), trash (`e2490`) at the bottom left, identified by their left-to-right order in the screenshot; `Properties` pane with search box and two blue icons; Undo and Redo at the foot of the Properties pane; OK `e2525`, Cancel `e2527`, Help `e2529`). The `+` identification by position was the only way to target an unlabelled button; the outcome (the name prompt below) confirmed it was New.

### Creation (ONE New; ONE name prompt OK)

| Step | Call | Observed result | Evidence |
| --- | --- | --- | --- |
| New (+) | click `e2488`, **once** | Small `New` prompt: `Name:` textbox (active, empty), OK / Cancel, `Close Window` | `t2-03-after-New-name-prompt.png` (name empty, focused) |
| Name | type `FX_CustomerID` into `e2785` | textbox reads `FX_CustomerID` | `t2-04-name-prompt-FX_CustomerID-before-OK.png` |
| Name commit | Tab, **once** | Name committed; the prompt still shows `FX_CustomerID` | `t2-04` (captured after Tab, before OK) |
| Name prompt OK | click `e2788`, **once** | Prompt closed; the list gained a row `FX_CustomerID` (selected, last visible row under `FullTextIndexNameValidator`, alphabetical position as expected); no alert, no error, no string or message prompt | `t2-05-new-validator-property-sheet.png` |

### New property sheet (observed after the name OK)

| Property | Value observed |
| --- | --- |
| Name | `FX_CustomerID` |
| Description | blank |
| Type | **`AlphaNumeric`** (dropdown; the default for a new validator; changed in the next step) |
| Parameters | blank, with a blue `…` (Open Edit Property Dialog) button |
| Error Message | blank, with a dropdown and a blue `…` button |
| Edit in-line Script | blank |
| Version | `User version for user <operator>` (user name not copied) |

Designer toolbar Save: **disabled** at this point (the validator edits are held in the Global Objects dialog until its OK).

### Type: In Collection (choose, Tab, verify)

| Step | Call | Observed |
| --- | --- | --- |
| Open Type list | click the Type dropdown arrow (`e3079`), **once** | Listbox (`combobox [expanded]`) with options including `Generate Application Event`, `In Collection` (`e3147`), `In Inline List`, `In List Cache`, … |
| Choose | click `In Collection` (`e3147`), **once** | Type field shows `In Collection` before the commit |
| Commit | Tab, **once** | Type row reads `In Collection`; Undo in the Properties pane became enabled (dirty); the Designer Save is still disabled |

Evidence: `t2-06-type-list-open.png` (list open, before the choice), `t2-07-type-In-Collection-after-Tab.png` (`In Collection` after the Tab commit, FX_CustomerID selected in the list).

### Parameters dialog (opened ONCE; initial layout recorded before any change)

Opened by the Parameters `…` button (`e3091`, `Open Edit Property Dialog`), **once**. Title `Edit In Collection Validator Parameters`; a nested dialog over the Global Objects dialog.

| Region | Observed (accessibility and `t2-08-parameters-dialog-initial-layout.png`) |
| --- | --- |
| `IDO:` | combobox (empty; **active / focused**) with an `Open` button and a `…` button |
| `Set Prop/ Var/ Comp:` | textbox (empty) with a `…` button |
| Checkboxes (right) | `No List Cache`, `Output First Time Only`, `Output Immediate Only`, `Mark Output Targets Validated`: **all unchecked** |
| `In Collection Only` group | `Property:` textbox (empty) with a `…`; `Filter etc.:` textbox (empty) with a `…` |
| Checkbox | `Exception Text Is Back End Msg`: unchecked |
| Buttons | `OK`, `Cancel`, `Help` (bottom) |

**Observed: the Error Message is NOT in this dialog**; it is a row on the Global Objects property sheet (dropdown and `…`). Recorded because the brief's Error Message step should be taken from that row (T3).

### Checkpoint (open-dialog state at the end of T2)

- **Open:** the nested `Edit In Collection Validator Parameters` dialog (IDO empty, focused; nothing entered) over the `Global Objects` dialog (FX_CustomerID selected; Type `In Collection`; Parameters blank; Error Message blank).
- **Not confirmed:** neither the Parameters dialog nor the Global Objects dialog (no OK, no Cancel). The FX_CustomerID validator is therefore **not yet committed** to the Designer state by an OK. The `t2-05` and `t2-08` frames show the dialog-level values only.
- **Designer:** FX_Orders selected; `ScopeType: User`; toolbar Save `[disabled]`; Regenerate Form `[disabled]`; no Save invoked; no close or reopen.
- **Unexpected prompts:** none. No string or message prompt appeared (the T2 bounded task never reached Error Message).
- **Left open for T3** as the bounded instruction requires (T3 continues the same Parameters dialog). Per the T2 boundary the Parameters dialog and the Global Objects dialog are not closed in this task.

### Screenshots (T2)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-087/t2-00-designer-fresh-snapshot-start.yml` | Accessibility snapshot of the start Designer (tool-written at the worker's request) | Start state: FX_Orders selected, Save and Undo disabled | Scope (read by find, not in the file's visible portion) |
| `evidence/EXP-087/t2-01-validator-list-FG-slice-before-New.png` | Global Objects dialog; list at D–E after the first wheel | That the first scroll did not reach F–G | Absence (F–G not in view) |
| `evidence/EXP-087/t2-02-validator-list-FG-slice-before-New.png` | Global Objects dialog; list at F–G (`FormNameValidator` … `GetDLName`); no FX_CustomerID between `FullTextIndexNameValidator` and `GE` | FX_CustomerID absent before New (client view) | A database state |
| `evidence/EXP-087/t2-03-after-New-name-prompt.png` | `New` prompt: Name empty and focused; OK / Cancel | New produced the name prompt (not a different control) | Name content (empty here) |
| `evidence/EXP-087/t2-04-name-prompt-FX_CustomerID-before-OK.png` | Name prompt with `FX_CustomerID` after Tab; OK and Cancel | Name entered and committed before OK | Name was accepted (see t2-05) |
| `evidence/EXP-087/t2-05-new-validator-property-sheet.png` | Validators list with `FX_CustomerID` selected (last row of the F–G slice); property sheet: Name `FX_CustomerID`, Type `AlphaNumeric`, Parameters and Error Message blank | Creation through New produced one validator named FX_CustomerID with defaults | The stored definition |
| `evidence/EXP-087/t2-06-type-list-open.png` | Type dropdown list open (`In Collection` offered) | The list has `In Collection` | The choice was committed (see t2-07) |
| `evidence/EXP-087/t2-07-type-In-Collection-after-Tab.png` | Type row `In Collection` after Tab; Undo enabled; list shows FX_CustomerID selected | Type value and dirty state after commit | Stored state |
| `evidence/EXP-087/t2-08-parameters-dialog-initial-layout.png` | `Edit In Collection Validator Parameters` open over the Global Objects dialog; IDO combobox empty; Set Prop, Property and Filter empty; OK / Cancel / Help | The initial layout before any change | Any parameter value (none set) |

### Action audit (T2, exact; 35 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer `MGForm=FX_Orders`, current |
| 2 | `browser_snapshot` untargeted, saved `t2-00` | Designer; Save and Undo disabled |
| 3 | `browser_tabs` select 0 | Succeeded |
| 4 | `browser_find` regex (tab, heading, scope, Save, Undo, dialog) | FX_Orders selected; User scope; clean; no dialog |
| 5 | `browser_click` `e5` (Edit) | Edit menu open |
| 6 | `browser_find` "Validator" | Validator item `e2210` |
| 7 | `browser_click` `e2210` (Validator, **once**) | Global Objects dialog open |
| 8 | `browser_mouse_move_xy` (760,450) | Pointer over list (view) |
| 9 | `browser_mouse_wheel` (0,1000) | D–E slice (view) |
| 10 | `browser_take_screenshot` `t2-01` | D–E slice |
| 11 | `browser_mouse_wheel` (0,600) (one corrected view) | F–G slice (view) |
| 12 | `browser_take_screenshot` `t2-02` | F–G slice; no FX_CustomerID |
| 13 | `browser_find` regex (buttons and dialog) | Unlabelled list controls `e2488`, `e2489`, `e2490` |
| 14 | `browser_click` `e2488` (New +, **once**) | New name prompt |
| 15 | `browser_find` regex (New prompt) | Name textbox `e2785` (active); OK `e2788` |
| 16 | `browser_take_screenshot` `t2-03` | Empty name prompt |
| 17 | `browser_type` `e2785` `FX_CustomerID` | Name typed |
| 18 | `browser_press_key` Tab (**once**, name commit) | Name committed |
| 19 | `browser_find` regex (name verify) | Name reads `FX_CustomerID` |
| 20 | `browser_take_screenshot` `t2-04` | Name before OK |
| 21 | `browser_click` `e2788` (name prompt OK, **once**) | Validator created; list row; property sheet |
| 22 | `browser_find` regex (property sheet) | Name FX_CustomerID; Type AlphaNumeric; Parameters and Error Message blank |
| 23 | `browser_take_screenshot` `t2-05` | Property sheet |
| 24 | `browser_find` "AlphaNumeric" | Type value; dropdown `e3079` |
| 25 | `browser_click` `e3079` (Type dropdown arrow, **once**) | Type list open |
| 26 | `browser_find` regex (listbox / options) | `In Collection` option `e3147` |
| 27 | `browser_take_screenshot` `t2-06` | Type list open |
| 28 | `browser_click` `e3147` (In Collection, **once**) | Type field set |
| 29 | `browser_press_key` Tab (**once**, Type commit) | Committed |
| 30 | `browser_find` regex (Type verify) | Type `In Collection` |
| 31 | `browser_take_screenshot` `t2-07` | Type `In Collection` |
| 32 | `browser_click` `e3091` (Parameters `…`, **once**) | Parameters dialog open |
| 33 | `browser_find` regex (dialog layout) | Layout recorded |
| 34 | `browser_take_screenshot` `t2-08` | Parameters layout, before any change |
| 35 | `browser_find` regex (Save, Undo, scope, tab) | Save disabled; User scope; FX_Orders selected |

Count summary (T2): tab lists 1; tab selects 1; untargeted snapshots 1; finds 11 (calls 4, 6, 13, 15, 19, 22, 24, 26, 30, 33, 35); screenshots 8 (`t2-01` … `t2-08`); ref clicks 7 (`e5`, `e2210`, `e2488`, `e2788`, `e3079`, `e3147`, `e3091`); coordinate clicks 0; mouse moves 1; mouse wheel 2 (one corrected view); typed text 1; Tab key presses 2; key presses other 0. Total **35** = 1 + 1 + 1 + 11 + 8 + 7 + 1 + 2 + 1 + 2.

No two browser actions were issued in parallel; the tab list and the snapshot were issued in one block (both read-only).

### Mutation and lifecycle counts (T2, exact)

- Validators created: **1** (`FX_CustomerID`). **New (+) uses: 1.** Name prompts answered: 1 (OK once).
- Tab commits: **2** (name; Type). Dialog OK clicks: **1** (name prompt). Dialog Cancel clicks: **0**.
- Parameters ellipsis clicks: **1** (dialog left open, nothing confirmed).
- Parameter fields entered: **0** (IDO, Set Prop outputs, Property, Error Message: none entered; Set Prop outputs 0).
- String or message prompts: **0** seen; answers **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Unloads, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0**. Existing validators changed, copied, renamed, deleted: **0** (no existing validator selected).
- Runtime (tab 1) actions: **0**. Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: not invoked (no expiry observed).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Cumulative browser action audit (T1 + T2)

| Item | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 19 | 35 | **54** |
| Validators created | 0 | 1 | **1** |
| New (+) uses | 0 | 1 | **1** |
| Set Prop outputs | 0 | 0 | **0** (T3) |
| Tab commits | 0 | 2 | **2** |
| Dialog OK clicks | 0 | 1 | **1** |
| Dialog Cancel clicks | 1 | 0 | **1** (T1 Global Objects, no change) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |

### Worker-written file inventory (T2)

- `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` (edited in T2: status header and this section; created in T1).
- `evidence/EXP-087/t2-00-designer-fresh-snapshot-start.yml` (tool-written at the worker's request).
- `evidence/EXP-087/t2-01-validator-list-FG-slice-before-New.png`
- `evidence/EXP-087/t2-02-validator-list-FG-slice-before-New.png`
- `evidence/EXP-087/t2-03-after-New-name-prompt.png`
- `evidence/EXP-087/t2-04-name-prompt-FX_CustomerID-before-OK.png`
- `evidence/EXP-087/t2-05-new-validator-property-sheet.png`
- `evidence/EXP-087/t2-06-type-list-open.png`
- `evidence/EXP-087/t2-07-type-In-Collection-after-Tab.png`
- `evidence/EXP-087/t2-08-parameters-dialog-initial-layout.png`

T2 total: **9** repository files (1 snapshot yml, 8 PNG) plus the record edit. Cumulative worker-requested files for EXP-087 (T1 + T2): **15** (the record plus 14 evidence files: T1 g0-00 yml and g0-01..g0-04 PNG, and the 9 T2 files, counting the record once). The browser tool's own page snapshots and console logs under `evidence/playwright/` are excluded. Git was not run; repository confinement is authoritative in the harness and operator git review.

### Deviations and limits (T2)

- **D1 (T2):** the first wheel scroll landed on D–E, not F–G. One corrected view-only scroll then reached F–G (`t2-02`). This is the single authorized correction for the view; the T1 loop was not repeated.
- **D2 (T2):** no screenshot of the empty Designer before Edit (`t2-00` is a snapshot file only). The clean gate is recorded by the find and by `t2-03`–`t2-04`, which show the Designer behind the dialog with Save greyed.
- **D3 (T2):** the `+` control was identified among three unlabelled buttons by its left-to-right order in the screenshot and by the outcome (the New name prompt). The accessibility tree gives no label for these buttons.
- **D4 (T2):** the sources were not re-read in T2 (see the Sources note above); the T1 reads were relied on.
- **D5 (T2):** the name was committed with one Tab (no Enter pressed) and the prompt was then confirmed with OK once. Where focus sat after the Tab was not separately checked; the t2-04 frame shows the name still in the textbox.
- **D6 (T2):** the Parameters dialog and the Global Objects dialog remain open at the checkpoint, as the bounded instruction requires for T3. The Designer Save stays disabled until the Global Objects OK.

### Knowledge state (T2 findings)

| Finding | State |
| --- | --- |
| Validators `New (+)` opens a small `New` prompt with a Name textbox, OK and Cancel; OK after the name created `FX_CustomerID` with a property sheet | **observed** (one run, T2) |
| A new validator's defaults: Type `AlphaNumeric`, Parameters blank, Error Message blank, Version `User version` | **observed** (one run, T2) |
| Type can be set to `In Collection` from the Type dropdown and committed with Tab | **observed** (one run, T2) |
| The Parameters dialog is `Edit In Collection Validator Parameters` with IDO combobox, Set Prop, four checkboxes, In Collection Only Property and Filter, and OK / Cancel / Help; the Error Message is a property-sheet row, not in this dialog | **observed** (one run, T2) |
| The Designer toolbar Save stays disabled while validator edits are held in the open Global Objects dialog | **observed** (one run, T2; to be re-checked after OK in T3) |
| FX_CustomerID is absent before New (F–G slice screenshot; client view) | **observed** (one run, T2) |
| Tutorial Section 8 narrated steps; `mIsNotAValid` as the standard message ID | **unverified** (unchanged from T1) |

**Next permitted action (T3, after the coordinator's authorization):** continue the same open `Edit In Collection Validator Parameters` dialog: IDO `FX_HelloWorld01` (choose from the list, or type the exact name if the list is empty; Tab; verify); Set Prop `…` open once; New once per output, `%1` = `FX_Label` and `%2` = `FX_Address` (Tab and verify each; OK once each); In Collection Only Property `…` once, choose `FX_Code`, OK once; Error Message in the property-sheet row `mIsNotAValid` (answer No to any string or message prompt; leave blank if declined); Tab; verify; then OK the Parameters dialog and OK the Global Objects dialog, each once.

---

## T3 — Parameters configured for FX_CustomerID: IDO, two Set Prop outputs, In Collection Only Property; each dialog confirmed once; Error Message NOT entered; Global Objects left open for T4 (cycle 2)

Task T3 (bounded instruction): continue the inherited `Edit In Collection Validator Parameters` dialog over the Global Objects dialog (do not reopen Edit > Validator; do not use the Validators-list New again; alter no existing validator). Set IDO from its list; Tab; verify. Open Set Prop once; New once per output (`%1` = `FX_Label`, `%2` = `FX_Address`); Tab each field; verify; OK each output once; confirm the Set Prop editor with its own OK once if required. In Collection Only Property picker once: `FX_Code`; Tab; verify; picker OK once. Capture the fully populated Parameters dialog before its OK; record the parameter string; Parameters OK once; verify the Global Objects property sheet (Type `In Collection`, Parameters value). Stop with Global Objects open. No Error Message change, no Global Objects OK, no Designer Save, no close/reopen, no readback.

### Sources and reads (T3)

No new source reads. T3 relied on the T1 and T2 reads (tutorial Section 8, the Global Objects guide, EXP-078 columns, EXP-085 dialog and Tab-commit conventions). The tutorial narration (transcript 12:04–12:36) says: open the Set Prop ellipsis; New for each target; Target `%1` then Value `Name`; Target `%2` then Value `Address`. Transcript 12:43–12:56: In Collection Only Property ellipsis, choose the ID property, OK; Error Message. The bounded instruction for this task was the controlling source.

### Starting state (verified before any mutation)

- Tab list (first browser call, before any selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot `evidence/EXP-087/t3-00-start-fresh-snapshot.yml`; find: FX_Orders tab selected; footer `ScopeType: User`; toolbar Save `[disabled]`; Global Objects dialog open (`[ref=e2163]`); `Edit In Collection Validator Parameters` open (`[ref=e2552]`) with IDO combobox active and empty; Set Prop, Property and Filter empty; no alertdialog.
- `t3-01-parameters-dialog-inherited-before-IDO.png`: the inherited Parameters dialog as left by T2: IDO empty, Set Prop empty, Property empty, Filter empty, all four checkboxes and Exception Text unchecked. **Matches the T2 checkpoint.**

### IDO: FX_HelloWorld01 (one list pick, one Tab)

| Step | Call | Observed |
| --- | --- | --- |
| Activate IDO combobox | click the combobox input (`e2590`), once | Focus only; no list opened (`t3-02`) |
| Open the IDO list | one click on the combobox's dropdown arrow at (1019,367) (coordinate click; the arrow has no accessibility ref in the snapshot) | Listbox opened: options `FormsAndObjects`, `FX_HelloWorld01` (`e2896`), `FX_Items`, … (`t3-03`) |
| Choose | click `FX_HelloWorld01` (`e2896`), once | Combobox text `FX_HelloWorld01` before commit |
| Commit | Tab, once | IDO combobox reads `FX_HelloWorld01`; list closed; focus moved to the `Open` button / next control (`t3-04`) |

Note on the `Open` button beside the IDO combobox (`e2591`): **not clicked.** Its function was not verified (it may open the IDO itself); the list was reached through the dropdown arrow instead.

### Set Prop: first click, then Edit Set Values, then the Properties list

| Step | Call | Observed |
| --- | --- | --- |
| Set Prop ellipsis | click `e2602`, **once** | Opened `Edit Set Values` (a nested dialog over Parameters): fields `Variables:`, `Components:`, `Properties:` (each with `…`), and OK / Cancel / Help. **Not the Target/Value grid directly.** Captured `t3-05-SetProp-dialog-initial-layout.png`. |
| Properties ellipsis | click `e3064`, **once** | Opened `Edit Set Property Values`: an empty list with `Up` (disabled), `New` (`e3080`), `Edit` (disabled), `Delete` (disabled), `Down` (disabled), and OK / Cancel / Help. Captured `t3-06-SetProp-properties-list-initial.png`. |

Layout recorded before any change: the Variables and Components fields were **left empty**; they were not part of the brief.

### Output 1: Target `%1`, Value `FX_Label`

| Step | Call | Observed |
| --- | --- | --- |
| New #1 | click `e3080`, **once** | Opened `Edit Set Property From List`: fields `Target:` (combobox, active, empty), `Value:` (combobox, empty), `Collection for Target:` (combobox, `primary collection`), and OK / Cancel / Help. Captured `t3-07-SetProp-after-New-first-output.png`. |
| Target | type `%1` into `e3104`, then Tab, once | Target reads `%1`; focus moved to Value (`t3-07` and find). |
| Value list | one click on the Value dropdown arrow at (1113,465) (coordinate click; no ref) | Listbox opened with options `CreateDate`, `CreatedBy`, `FX_Address`, `FX_Label`, `InWorkflow`, … (`t3-08-SetProp-Value-list-open.png`) |
| Value choose | click `FX_Label` (`e3138`), once | Value combobox shows `FX_Label` |
| Value commit | Tab, once | Value reads `FX_Label`; `Collection for Target` left at its default `primary collection` (not changed) (`t3-09-SetProp-output1-before-OK.png`) |
| Output 1 OK | click `e3123` (the `Edit Set Property From List` OK), **once** | Dialog closed. The `Edit Set Property Values` list gained one row: **`%1=FX_Label`** (`t3-10-SetProp-list-after-output1-OK.png`) |

### Output 2: Target `%2`, Value `FX_Address`

| Step | Call | Observed |
| --- | --- | --- |
| New #2 | click `e3080`, **once** | A fresh `Edit Set Property From List` opened (Target empty and active) |
| Target | type `%2` into `e3239`, then Tab, once | Target reads `%2` (`t3-11-SetProp-output2-target-entered.png`) |
| Value list | one click on the Value dropdown arrow at (1113,465) (coordinate click) | Listbox opened: `CreatedBy`, `FX_Address` (`e3272`), `FX_Label`, … |
| Value choose | click `FX_Address` (`e3272`), once | Value combobox shows `FX_Address` |
| Value commit | Tab, once | Value reads `FX_Address`; `Collection for Target` still `primary collection` (`t3-12-SetProp-output2-before-OK.png`, pre-OK frame: Target `%2`, Value `FX_Address`) |
| Output 2 OK | click `e3258`, **once** | Dialog closed. The list shows two rows: **`%1=FX_Label`** and **`%2=FX_Address`** (`t3-13-SetProp-list-two-outputs.png`, pre-OK frame of the list) |

### Set Prop confirmation (list OK, then Edit Set Values OK)

| Step | Call | Observed |
| --- | --- | --- |
| Set Property Values list OK | click `e3088`, **once** | List closed; the Edit Set Values `Properties:` field reads **`%1=FX_Label,%2=FX_Address`** (`t3-14-SetProp-editor-properties-after-list-OK.png`) |
| Edit Set Values OK (Set Prop editor) | click `e3066`, **once** | Edit Set Values closed; the Parameters `Set Prop/ Var/ Comp:` field reads **`SETP(%1=FX_Label,%2=FX_Address)`** (`t3-15-parameters-after-SetProp-OK.png`) |

Note: the brief allowed a separate Set Prop editor OK "if the interface requires"; the interface has two confirmations (the list and the Edit Set Values editor). Both were confirmed once each and are counted separately below.

### In Collection Only Property: FX_Code (picker, Tab, picker OK)

| Step | Call | Observed |
| --- | --- | --- |
| Property ellipsis | click `e2569`, **once** | Opened `Property of FX_HelloWorld01 to Use` (a listbox picker): `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `FX_Address`, `FX_Code`, `FX_Label`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UDF…`, `UpdatedBy`; OK / Cancel / Help (`t3-16-InCollectionOnly-Property-picker-open.png`) |
| Choose | click `FX_Code` (`e3374`), once | `FX_Code` option `[selected]` (accessibility) |
| Commit | Tab, once | Focus moved to the picker's OK (`t3-17-InCollectionOnly-Property-FX_Code-before-OK.png`) |
| Picker OK | click `e3417`, **once** | Picker closed; the Parameters `Property:` field reads **`FX_Code`** (`t3-18-parameters-after-Property-picker-OK.png`) |

### Fully populated Parameters dialog, and its OK (the only Parameters confirmation)

Before the Parameters OK (`t3-18`): IDO `FX_HelloWorld01`; Set Prop `SETP(%1=FX_Label,%2=FX_Address)` (the field is clipped at the edge in the frame; the full text is from the accessibility read); Property `FX_Code`; Filter etc. **empty** (unchanged); No List Cache, Output First Time Only, Output Immediate Only, Mark Output Targets Validated **unchecked** (unchanged); Exception Text Is Back End Msg **unchecked** (unchanged). Error Message is not in this dialog.

| Step | Call | Observed |
| --- | --- | --- |
| Parameters OK | click `e2624`, **once** | Parameters dialog closed; the Global Objects dialog is the only remaining dialog. |

### Global Objects property sheet after the Parameters OK (read in place; no Global Objects OK)

| Property | Observed value (accessibility; screenshot `t3-19`) |
| --- | --- |
| Name | `FX_CustomerID` |
| Description | blank |
| Type | **`In Collection`** |
| Parameters | **`FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`** (verbatim from the Parameters row cell; the property-sheet cell text, not the dialog text box) |
| Error Message | blank (not changed; reserved for T4) |
| Edit in-line Script | blank |
| Version | `User version for user <operator>` |
| Designer toolbar Save | **`[disabled]`** (observed after the Parameters OK; the Global Objects dialog is still open) |
| Global Objects Undo (Properties pane) | enabled (dirty pane) |

Recorded verbatim parameter strings (T3):
- Parameters property-sheet cell (Global Objects): `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`
- Parameters dialog Set Prop field: `SETP(%1=FX_Label,%2=FX_Address)`
- Parameters dialog Property field: `FX_Code`
- Set Prop Properties list rows: `%1=FX_Label`, `%2=FX_Address`
- Set Prop Properties field: `%1=FX_Label,%2=FX_Address`

The string contains `FX_HelloWorld01`, `FX_Code`, `%1`, `FX_Label`, `%2` and `FX_Address`, as AC-3 requires. This is an **in-place read of the open dialog**; it is not the formal readback (T4).

### Stop state (end of T3)

- **Open:** the `Global Objects` dialog (FX_CustomerID selected, Type `In Collection`, Parameters set, Error Message blank), with no nested dialog open.
- **Not done:** Error Message (T4); Global Objects OK (T4); Designer Save (T4 or later per brief); close/reopen; formal readback through Edit > Validator.
- **Designer:** FX_Orders selected; `ScopeType: User`; toolbar Save disabled; Regenerate Form disabled; no component change.
- **Unexpected prompts:** none. No string or message prompt; no alert; no "Session Expired" modal; no portal banner.

### Screenshots (T3)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t3-00-start-fresh-snapshot.yml` | Accessibility snapshot, start (tool-written at the worker's request) | Start state: FX_Orders, Save disabled, Parameters open, IDO empty | Scope (from find) |
| `t3-01-parameters-dialog-inherited-before-IDO.png` | Inherited Parameters dialog, all fields empty | The T2 checkpoint frame | Stored state |
| `t3-02-IDO-combobox-after-click.png` | IDO combobox focused, no list | The first click only focused the field | — |
| `t3-03-IDO-after-arrow-click.png` | IDO listbox open (FX_HelloWorld01 offered) | The list has FX_HelloWorld01 | The pick |
| `t3-04-IDO-FX_HelloWorld01-after-Tab.png` | IDO `FX_HelloWorld01` after Tab; list closed | IDO committed | Stored state |
| `t3-05-SetProp-dialog-initial-layout.png` | `Edit Set Values` (Variables / Components / Properties) over Parameters | Set Prop editor layout before change | — |
| `t3-06-SetProp-properties-list-initial.png` | `Edit Set Property Values` list, empty, New / Edit / Delete / Up / Down | The Target/Value list before New | — |
| `t3-07-SetProp-after-New-first-output.png` | `Edit Set Property From List`: Target, Value, Collection for Target | The output editor fields before entry | — |
| `t3-08-SetProp-Value-list-open.png` | Value list open with FX_Label visible; Target shows `%1` | Target `%1` committed; FX_Label offered | The Value pick |
| `t3-09-SetProp-output1-before-OK.png` | Output 1 pre-OK: Target `%1`, Value `FX_Label`, Collection `primary collection` | Pre-OK state of output 1 | Stored state |
| `t3-10-SetProp-list-after-output1-OK.png` | List after output 1 OK: one row | Output 1 recorded in the list | — |
| `t3-11-SetProp-output2-target-entered.png` | Second editor: Target `%2`; Value empty | Target `%2` committed | — |
| `t3-12-SetProp-output2-before-OK.png` | Output 2 pre-OK: Target `%2`, Value `FX_Address` | Pre-OK state of output 2 | — |
| `t3-13-SetProp-list-two-outputs.png` | List with two rows `%1=FX_Label`, `%2=FX_Address` | Both outputs recorded before the list OK | — |
| `t3-14-SetProp-editor-properties-after-list-OK.png` | Edit Set Values `Properties:` = `%1=FX_Label,%2=FX_Address` | List OK propagated to the editor | — |
| `t3-15-parameters-after-SetProp-OK.png` | Parameters `Set Prop` = `SETP(%1=FX_Label,%2=FX_Address)` after Edit Set Values OK | Set Prop confirmed | — |
| `t3-16-InCollectionOnly-Property-picker-open.png` | `Property of FX_HelloWorld01 to Use` picker with FX_Code in the list | The picker offers FX_Code | Selection (see t3-17) |
| `t3-17-InCollectionOnly-Property-FX_Code-before-OK.png` | Picker with FX_Code highlighted, before picker OK (accessibility: `[selected]`) | FX_Code chosen before the OK | — |
| `t3-18-parameters-after-Property-picker-OK.png` | Fully populated Parameters: IDO `FX_HelloWorld01`, Set Prop (clipped), Property `FX_Code`, Filter empty, checkboxes unchecked | The populated state before the Parameters OK | The full Set Prop string (clipped; read from accessibility) |
| `t3-19-global-objects-property-sheet-after-Parameters-OK.png` | Global Objects property sheet: Type `In Collection`; Parameters cell `FX_HelloWorld01( PROP…`; Error Message blank; Save disabled | Type and the Parameters row after the OK; Save disabled | The full Parameters string (truncated in the frame; the full text is from accessibility); stored state |

### Action audit (T3, exact; 76 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_snapshot` untargeted, saved `t3-00` | Designer; Save disabled; Parameters open |
| 3 | `browser_tabs` select 0 | Succeeded |
| 4 | `browser_find` (state) | FX_Orders; User scope; Save disabled; Global Objects and Parameters dialogs |
| 5 | `browser_take_screenshot` `t3-01` | Inherited Parameters, empty |
| 6 | `browser_click` `e2590` (IDO combobox input) | Focus only; no list |
| 7 | `browser_take_screenshot` `t3-02` | No list |
| 8 | `browser_mouse_click_xy` (1019,367) (IDO dropdown arrow) | IDO list opened |
| 9 | `browser_find` (listbox / options) | Options incl. `FX_HelloWorld01` (`e2896`) |
| 10 | `browser_take_screenshot` `t3-03` | IDO list |
| 11 | `browser_click` `e2896` (FX_HelloWorld01) | Chosen |
| 12 | `browser_press_key` Tab (IDO commit) | Committed |
| 13 | `browser_find` (IDO verify) | `FX_HelloWorld01` |
| 14 | `browser_take_screenshot` `t3-04` | IDO committed |
| 15 | `browser_click` `e2602` (Set Prop ellipsis, **once**) | Edit Set Values opened |
| 16 | `browser_find` (Set Prop layout; broad) | Layout recorded |
| 17 | `browser_take_screenshot` `t3-05` | Edit Set Values layout |
| 18 | `browser_click` `e3064` (Properties ellipsis, **once**) | Edit Set Property Values opened |
| 19 | `browser_find` (broad regex) | Output too large to read (saved by the tool; no effect; read-only) |
| 20 | `browser_take_screenshot` `t3-06` | Empty list with New |
| 21 | `browser_find` text "Edit Set Property Values" | Dialog refs |
| 22 | `browser_find` regex (button labels) | New `e3080` |
| 23 | `browser_click` `e3080` (New #1, **once**) | Edit Set Property From List opened |
| 24 | `browser_find` (Target / Value) | Target active `e3104` |
| 25 | `browser_take_screenshot` `t3-07` | Output 1 editor empty |
| 26 | `browser_type` `e3104` `%1` | Typed |
| 27 | `browser_press_key` Tab (Target commit) | Committed |
| 28 | `browser_find` (Target verify) | `%1` |
| 29 | `browser_mouse_click_xy` (1113,465) (Value arrow) | Value list opened |
| 30 | `browser_find` (listbox / option) | Listbox present; no option role in this find |
| 31 | `browser_find` (option regex) | No match (options found in call 33) |
| 32 | `browser_take_screenshot` `t3-08` | Value list with FX_Label |
| 33 | `browser_find` text `FX_Label` | Option `e3138` |
| 34 | `browser_click` `e3138` (FX_Label) | Chosen |
| 35 | `browser_press_key` Tab (Value commit) | Committed |
| 36 | `browser_take_screenshot` `t3-09` | Output 1 pre-OK |
| 37 | `browser_find` (OK refs) | OK `e3123` |
| 38 | `browser_click` `e3123` (output 1 OK, **once**) | One list row `%1=FX_Label` |
| 39 | `browser_find` (list / options) | Row `%1=FX_Label` |
| 40 | `browser_take_screenshot` `t3-10` | List with one row |
| 41 | `browser_click` `e3080` (New #2, **once**) | Second output editor |
| 42 | `browser_find` (Target active) | `e3239` |
| 43 | `browser_type` `e3239` `%2` | Typed |
| 44 | `browser_press_key` Tab (Target commit) | Committed |
| 45 | `browser_take_screenshot` `t3-11` | Target `%2` |
| 46 | `browser_mouse_click_xy` (1113,465) (Value arrow) | Value list opened |
| 47 | `browser_find` text `FX_Address` | Option `e3272` |
| 48 | `browser_click` `e3272` (FX_Address) | Chosen |
| 49 | `browser_press_key` Tab (Value commit) | Committed |
| 50 | `browser_find` (verify) | Target `%2`; Value `FX_Address` |
| 51 | `browser_take_screenshot` `t3-12` | Output 2 pre-OK |
| 52 | `browser_click` `e3258` (output 2 OK, **once**) | Two rows |
| 53 | `browser_find` (list) | `%1=FX_Label`, `%2=FX_Address` |
| 54 | `browser_take_screenshot` `t3-13` | Two rows |
| 55 | `browser_click` `e3088` (Set Property Values list OK, **once**) | Properties field `%1=FX_Label,%2=FX_Address` |
| 56 | `browser_find` (Properties) | Verified |
| 57 | `browser_take_screenshot` `t3-14` | Edit Set Values Properties field |
| 58 | `browser_click` `e3066` (Edit Set Values OK, **once**) | Set Prop `SETP(...)` |
| 59 | `browser_find` (Parameters state) | Set Prop verified |
| 60 | `browser_take_screenshot` `t3-15` | Parameters after Set Prop OK |
| 61 | `browser_find` (Property ref) | `e2569` |
| 62 | `browser_click` `e2569` (In Collection Only Property ellipsis, **once**) | Picker opened |
| 63 | `browser_find` (picker options) | FX_Code `e3374` |
| 64 | `browser_take_screenshot` `t3-16` | Picker |
| 65 | `browser_click` `e3374` (FX_Code) | Selected |
| 66 | `browser_press_key` Tab (commit) | Committed |
| 67 | `browser_take_screenshot` `t3-17` | FX_Code before picker OK |
| 68 | `browser_find` (picker verify) | FX_Code `[selected]`; OK `e3417` |
| 69 | `browser_click` `e3417` (picker OK, **once**) | Property `FX_Code` |
| 70 | `browser_find` (Property verify) | `FX_Code`; Filter empty |
| 71 | `browser_take_screenshot` `t3-18` | Populated Parameters, pre-OK |
| 72 | `browser_find` (Parameters OK ref) | OK `e2624` |
| 73 | `browser_click` `e2624` (Parameters OK, **once**) | Parameters closed |
| 74 | `browser_find` (Global Objects property sheet) | Name, Type `In Collection`, Parameters string |
| 75 | `browser_take_screenshot` `t3-19` | Property sheet |
| 76 | `browser_find` (Save / Undo / dialogs) | Save disabled; Global Objects open; no nested dialog |

Count summary (T3): tab lists 1; tab selects 1; untargeted snapshots 1; finds 27; screenshots 19; ref clicks 16 (`e2590`, `e2896`, `e2602`, `e3064`, `e3080`, `e3138`, `e3123`, `e3080`, `e3272`, `e3258`, `e3088`, `e3066`, `e2569`, `e3374`, `e3417`, `e2624`); coordinate clicks 3 (IDO arrow; Value arrow twice); typed text 2 (`%1`, `%2`); Tab key presses 6; mouse moves 0; wheel 0. Total **76** = 1 + 1 + 1 + 27 + 19 + 16 + 3 + 2 + 6.

Recovery and errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; one find (call 19) returned an oversized output that the tool saved to a file; it was read-only and had no effect. No two browser actions were issued in parallel.

### Dialog OK counts and Tab commits (T3, exact)

| Dialog | OK clicks (T3) | Cancel clicks | Notes |
| --- | --- | --- | --- |
| Edit Set Property From List (output 1, FX_Label) | 1 | 0 | `e3123` |
| Edit Set Property From List (output 2, FX_Address) | 1 | 0 | `e3258` |
| Edit Set Property Values (list of outputs) | 1 | 0 | `e3088`; the list's own confirmation |
| Edit Set Values (Set Prop editor) | 1 | 0 | `e3066`; the editor's confirmation |
| Property of FX_HelloWorld01 to Use (picker) | 1 | 0 | `e3417` |
| Edit In Collection Validator Parameters | 1 | 0 | `e2624`; the only Parameters confirmation |
| Global Objects | **0** | **0** | Left open for T4 |
| New (validator name prompt) | 0 (T2 used one) | 0 | Not used in T3 |

Dialog OK total (T3): **6**. Tab commits (T3): **6** (IDO; Target `%1`; Value `FX_Label`; Target `%2`; Value `FX_Address`; Property picker `FX_Code`). Every OK followed a Tab-committed field; no OK was pressed while a field was in edit (the Collection for Target field was left at its default and was never edited).

### Mutation and lifecycle counts (T3, exact)

- Validators created: **0** in T3 (cumulative 1). Validators-list New uses: **0** in T3 (cumulative 1). The two `New` clicks in T3 were Set Prop **output** New buttons in the Edit Set Property Values list, not the Validators list.
- Set Prop outputs: **2** (`%1` = `FX_Label`; `%2` = `FX_Address`). Set Prop New uses: **2**.
- Parameters fields set: IDO (1), Set Prop (2 outputs), In Collection Only Property (1). Filter, the four checkboxes, Exception Text and Collection for Target: **unchanged**. Error Message: **not touched** (T4).
- String or message prompts: **0** seen; answers **0**. Strings created: **0**.
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Unloads, FormSync, deployment, regeneration: **0**.
- Component, caption or layout changes: **0**. Existing validators changed, copied, renamed or deleted: **0**.
- Runtime (tab 1) actions: **0**. Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: not invoked (no expiry observed).
- Browser JavaScript, console or network inspection by the worker: **0**.

### Deviations and limits (T3)

- **D1:** the IDO list and the two Value lists were opened by a coordinate click on the visible dropdown arrow. The arrow has no accessibility ref in the snapshot; the first click on the combobox input only focused it. Coordinate clicks are a last resort under AGENTS.md; this was the only route to these lists and each click's outcome was verified by a find and a screenshot.
- **D2:** the Set Prop ellipsis opened `Edit Set Values` (Variables / Components / Properties) and not the Target/Value grid directly. The Target/Value list opened from its Properties `…`. The brief named "the Set Prop properties ellipsis", so this is the same control reached by the layout's route. Both ellipses were opened once each.
- **D3:** the Set Prop path has two confirmations (the list OK and the Edit Set Values OK). Both are counted (dialog-OK table).
- **D4:** the Parameters Set Prop field is clipped in the frame (`SETP(%1=FX_Label,%2=FX_Addre…`); the full string is recorded from accessibility.
- **D5:** the Global Objects Parameters cell reads `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`. This is the property-sheet's own serialization; it was copied verbatim and not reconstructed.
- **D6:** the Designer toolbar Save stayed **disabled** after the Parameters OK, although Undo in the Global Objects Properties pane became enabled. The brief asked whether Save becomes enabled; the observed answer is no, at this point. The likely reason is that the global object has not yet been confirmed by the Global Objects OK (T4). This is an interpretation and is **unresolved**.
- **D7:** the `Open` button beside the IDO combobox was not clicked. Its effect was not verified.
- **D8:** the Designer page URL again lacks `MGForm=FX_Orders` after dialog interactions (observed in T1/T2); identity was read from the selected tab heading and the footer.

### Cumulative browser action audit (T1 + T2 + T3)

| Item | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls | 19 | 35 | 76 | **130** |
| Validators created | 0 | 1 | 0 | **1** |
| Validators-list New uses | 0 | 1 | 0 | **1** |
| Name prompt OKs | 0 | 1 | 0 | **1** |
| Set Prop outputs | 0 | 0 | 2 | **2** |
| Set Prop New uses (output lists) | 0 | 0 | 2 | **2** |
| Tab commits | 0 | 2 | 6 | **8** |
| Dialog OK clicks (all dialogs) | 0 | 1 | 6 | **7** |
| Global Objects OK clicks | 0 | 0 | 0 | **0** |
| Dialog Cancel clicks | 1 | 0 | 0 | **1** (T1 Validators dialog; no change) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T3)

- `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` (edited in T3: status header and this section).
- `evidence/EXP-087/t3-00-start-fresh-snapshot.yml` (tool-written at the worker's request)
- `evidence/EXP-087/t3-01-parameters-dialog-inherited-before-IDO.png`
- `evidence/EXP-087/t3-02-IDO-combobox-after-click.png`
- `evidence/EXP-087/t3-03-IDO-after-arrow-click.png`
- `evidence/EXP-087/t3-04-IDO-FX_HelloWorld01-after-Tab.png`
- `evidence/EXP-087/t3-05-SetProp-dialog-initial-layout.png`
- `evidence/EXP-087/t3-06-SetProp-properties-list-initial.png`
- `evidence/EXP-087/t3-07-SetProp-after-New-first-output.png`
- `evidence/EXP-087/t3-08-SetProp-Value-list-open.png`
- `evidence/EXP-087/t3-09-SetProp-output1-before-OK.png`
- `evidence/EXP-087/t3-10-SetProp-list-after-output1-OK.png`
- `evidence/EXP-087/t3-11-SetProp-output2-target-entered.png`
- `evidence/EXP-087/t3-12-SetProp-output2-before-OK.png`
- `evidence/EXP-087/t3-13-SetProp-list-two-outputs.png`
- `evidence/EXP-087/t3-14-SetProp-editor-properties-after-list-OK.png`
- `evidence/EXP-087/t3-15-parameters-after-SetProp-OK.png`
- `evidence/EXP-087/t3-16-InCollectionOnly-Property-picker-open.png`
- `evidence/EXP-087/t3-17-InCollectionOnly-Property-FX_Code-before-OK.png`
- `evidence/EXP-087/t3-18-parameters-after-Property-picker-OK.png`
- `evidence/EXP-087/t3-19-global-objects-property-sheet-after-Parameters-OK.png`

T3 total: **21** repository files (1 snapshot yml, 19 PNG, plus the record edit). Cumulative worker-requested files for EXP-087 (T1 + T2 + T3): the record (1), T1 evidence (1 yml + 4 PNG = 5), T2 evidence (1 yml + 8 PNG = 9), T3 evidence (1 yml + 19 PNG = 20): **35 files** in total. The browser tool's own page snapshots and console logs under `evidence/playwright/` are excluded. Git was not run; repository confinement is authoritative in the harness and operator git review.

### Final dialog state (end of T3)

- **Open:** `Global Objects` dialog only, with FX_CustomerID selected: Name `FX_CustomerID`; Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message blank; Version `User version`. Undo enabled in the Properties pane.
- **Not confirmed:** the Global Objects dialog (no OK, no Cancel). The validator is therefore **not yet committed** by a Global Objects OK.
- **Designer:** FX_Orders selected; `ScopeType: User`; toolbar Save disabled; Regenerate Form disabled; no component change; no nested dialog open.

### Knowledge state (T3 findings)

| Finding | State |
| --- | --- |
| The IDO list of the Parameters dialog offers `FX_HelloWorld01`; choosing it and pressing Tab commits it | **observed** (one run, T3) |
| The Set Prop ellipsis opens `Edit Set Values` (Variables / Components / Properties); its Properties `…` opens the `Edit Set Property Values` list with New, Edit, Delete, Up, Down | **observed** (one run, T3) |
| Each New output opens `Edit Set Property From List` (Target, Value, Collection for Target); Target typed and Tab-committed; Value chosen from a list and Tab-committed | **observed** (one run, T3) |
| The Set Property Values list serializes outputs as `%1=FX_Label`, `%2=FX_Address`; the editor shows `%1=FX_Label,%2=FX_Address`; the Parameters field shows `SETP(%1=FX_Label,%2=FX_Address)` | **observed** (one run, T3) |
| The In Collection Only Property picker `Property of FX_HelloWorld01 to Use` lists FX_Code; choosing and OK-ing it sets Property `FX_Code` | **observed** (one run, T3) |
| The Global Objects Parameters row shows `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` after the Parameters OK | **observed** (one run, T3; in-place property sheet read; not a formal readback) |
| The Designer toolbar Save stays disabled after the Parameters OK, while the Global Objects dialog is open | **observed** (one run, T3); the reason is **unresolved** (likely the pending Global Objects OK) |
| Error Message is a property-sheet row, not inside the Parameters dialog | **observed** (T2, reconfirmed T3) |
| Tutorial Section 8 steps; `mIsNotAValid` as the standard message ID | **unverified** (unchanged) |

**Next permitted action (T4, after the coordinator's authorization):** continue the open Global Objects dialog: select `FX_CustomerID` if not already selected; Error Message row: Tab-commit a choice or type `mIsNotAValid` (answer No to any string or message prompt and leave the field blank if declined; Tab; verify); then Global Objects OK once; record the Designer Save state; then the formal readback through Edit > Validator (Cancel), the single Designer Save, the close/reopen and the reopened readback, per the brief.

---

## T4 — Error Message set to `mIsNotAValid` (list pick, Tab-committed); Global Objects confirmed with its OK once; Designer Save enabled; no Save, no readback (cycle 3)

Task T4 (bounded instruction): continue the inherited open Global Objects dialog (no Validator reopen, no New, no Parameters change). Verify the property sheet (Name `FX_CustomerID`, Version User, Type `In Collection`, Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`). Set only Error Message to `mIsNotAValid` (from an offered list if present). Tab-commit, verify, screenshot before any confirmation. Answer any string or message prompt with No once and leave the field blank. Global Objects OK once. Record the native result and whether Designer Save becomes enabled. No Designer Save, no formal readback, no FX_Orders close, no runtime. Run `R-20261014-151624-Qgjt`, task_message_id `958e2275-7e2d-44b4-97c6-6d17d370579d`, worker session `f44c4b57-1cb1-4edd-a2ba-cc165c61b056`, cycle 3.

### Sources (T4)

No new source reads. T4 relied on the T1–T3 reads and the bounded instruction. The Error Message syntax was not in the tutorial beyond the narrated text (transcript 12:49–12:56: "type in m is not a valid ... this is a standard mongoose error message"); the tutorial itself marks the syntax unconfirmed (Section 8 step 6). T4 therefore chose the value from the Designer's own offered list, rather than the narration.

### Starting state (verified)

- Tab list (first browser call, before any selection): tab 0 Designer (`mode=designer`, `MGForm=FX_Orders`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot `evidence/EXP-087/t4-00-start-fresh-snapshot.yml`; find: FX_Orders tab selected; footer `ScopeType: User`; toolbar Save `[disabled]`; Global Objects dialog open (`[ref=e2163]`); Name `FX_CustomerID`; Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message blank; Version `User version for user <operator>`; no nested dialog; no alertdialog.
- `t4-01-property-sheet-before-ErrorMessage.png`: the property sheet before the change: Name `FX_CustomerID`, Type `In Collection`, Parameters `FX_HelloWorld01( PRO…` (clipped; the full string is from accessibility), Error Message blank, Version `User version`, Designer toolbar Save disabled. **Matches the T3 end state; no correction needed.**

### Error Message: dropdown opened once; `mIsNotAValid` chosen from the list; Tab

| Step | Call | Observed |
| --- | --- | --- |
| Open the Error Message list | click the dropdown trigger of the Error Message row (`e2514`), **once** | The combobox expanded with a listbox of message identifiers (`ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, …). `t4-02-error-message-dropdown-open.png`. |
| Locate the identifier | find regex `mIs|NotAValid|m is not` (case-insensitive; read-only) | The list contains **`mIsNotAValid`** (option `e4735`), and similar identifiers `mIsNotAValid%1`, `mIsNotAValidAllowedValBet%1and%2`, `m%1IsNotAValid%2`, `m%3IsNotAValid%2` and `m0IsNotAValid1`. The exact literal `mIsNotAValid` was chosen, not a near match. |
| Choose | click `mIsNotAValid` (`e4735`), **once** | The combobox text became `mIsNotAValid` (committed by the next step). |
| Commit | Tab, **once** | Error Message row reads `mIsNotAValid`; the dropdown closed; focus left the combobox. `t4-03-error-message-mIsNotAValid-after-Tab.png`. |

Committed field (accessibility and frame `t4-03`): **Error Message = `mIsNotAValid`**. The frame also shows Type `In Collection` and Parameters `FX_HelloWorld01( PRO…` unchanged; Name `FX_CustomerID`; Version `User version`.

**Prompts:** none. No string or message creation prompt appeared at any point (not on the list open, the choice, the Tab, or the OK). **No answers given (No answers: 0).** Strings created: **0**.

**Observation on the list:** the list is the existing message catalogue (it contains many `m…` and `s…` identifiers), so `mIsNotAValid` was an existing ID offered by the Designer. This supports the brief's assumption that the standard ID is `mIsNotAValid`, but it does **not** verify that the runtime message text reads "m is not a valid". Observed only; the text was not inspected.

### Global Objects OK (once)

| Step | Call | Observed |
| --- | --- | --- |
| Confirm the Global Objects dialog | click OK `e2546`, **once** (after the ref was confirmed by a targeted find, and after the Error Message field was committed and verified) | The Global Objects dialog closed. No alert, no error text, no prompt, no toast text visible. `t4-04-after-GlobalObjects-OK-save-state.png`. |
| Designer toolbar Save after the OK | find and frame `t4-04` | **Save ENABLED** (the save icon is coloured; the accessibility node has no `disabled`). **Regenerate Form enabled** (node has no `disabled`). **Designer Undo disabled.** Footer `ScopeType: User`. FX_Orders still the selected Form tab. |

**Resolution of the T3 open question:** in T3 the Designer Save stayed disabled while the Global Objects dialog was open. In T4 the Save became enabled after the Global Objects OK. This is consistent with the T3 explanation that the validator edits were held in the open dialog until its OK. Observed in one run only.

**Native response:** the Global Objects OK produced **no visible native message** (no alert and no `Global object(s) were saved.` toast, which EXP-085 recorded after its Designer Save, not after an OK). The Designer became dirty. No save was performed.

### Stop state (end of T4)

- **Open dialogs: none.** The Global Objects dialog is closed; no nested dialog, no alertdialog, no prompt.
- **Designer:** FX_Orders selected (Form tab); `ScopeType: User`; **dirty** (Save enabled); Undo disabled; Regenerate Form enabled (not invoked). No component change (the Components grid still shows FX_CustomerIDCombobox selected, as before).
- **Not done:** the formal validator readback (T5); the single Designer Save (T5); Form close/reopen (T5); runtime (never).
- **Not discarded:** the dirty Designer state is kept for T5, as the bounded instruction requires.

### Screenshots (T4)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t4-00-start-fresh-snapshot.yml` | Accessibility snapshot of the start (tool-written at the worker's request) | FX_Orders selected; Save disabled; Global Objects open; Parameters string as stated | Scope (from find) |
| `t4-01-property-sheet-before-ErrorMessage.png` | Global Objects property sheet before the change: Name, Type In Collection, Parameters, Error Message blank, Version | The start state for T4 | Stored state |
| `t4-02-error-message-dropdown-open.png` | Error Message listbox open over the sheet (identifiers visible) | The list is offered; the Designer offers message identifiers | That `mIsNotAValid` is in the visible part (found by find, `e4735`) |
| `t4-03-error-message-mIsNotAValid-after-Tab.png` | Error Message reads `mIsNotAValid`; dropdown closed; Type and Parameters unchanged; no prompt | The committed Error Message value (before the OK) | Stored state; runtime text |
| `t4-04-after-GlobalObjects-OK-save-state.png` | Global Objects closed; FX_Orders Designer with the Save icon coloured; Undo grey; `ScopeType: User` | The OK closed the dialog and the Designer became dirty | Whether anything was stored or persisted; the content of the validator (readback in T5) |

### Action audit (T4, exact; 18 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_snapshot` untargeted, saved `t4-00` | Designer; Save disabled; Global Objects open |
| 3 | `browser_tabs` select 0 | Succeeded |
| 4 | `browser_find` (state) | FX_Orders; User scope; Save disabled; Global Objects; Type; Parameters string |
| 5 | `browser_take_screenshot` `t4-01` | Property sheet before change |
| 6 | `browser_find` (Name / Version / FX_CustomerID) | Name `FX_CustomerID`; Version `User version` |
| 7 | `browser_click` `e2514` (Error Message dropdown trigger, **once**) | Listbox opened |
| 8 | `browser_find` (listbox / expanded) | Listbox present (combobox expanded and active) |
| 9 | `browser_take_screenshot` `t4-02` | Error Message list open |
| 10 | `browser_find` regex `mIs|NotAValid|m is not` (read-only) | `mIsNotAValid` option `e4735`; output large (about 28 matches); read-only |
| 11 | `browser_click` `e4735` (`mIsNotAValid`, **once**) | Chosen |
| 12 | `browser_press_key` Tab (**once**, Error Message commit) | Committed |
| 13 | `browser_find` (Error Message verify) | Error Message `mIsNotAValid`; dropdown closed |
| 14 | `browser_take_screenshot` `t4-03` | Committed value before OK |
| 15 | `browser_find` (OK / Cancel / Help refs) | OK `e2546` |
| 16 | `browser_click` `e2546` (Global Objects OK, **once**) | Dialog closed; Save enabled |
| 17 | `browser_find` (post-OK state) | No dialog; Save enabled; Regenerate Form enabled; Undo disabled; User scope; FX_Orders selected |
| 18 | `browser_take_screenshot` `t4-04` | Post-OK state |

Count summary (T4): tab lists 1; tab selects 1; untargeted snapshots 1; finds 7 (calls 4, 6, 8, 10, 13, 15, 17); screenshots 4; ref clicks 3 (`e2514`, `e4735`, `e2546`); Tab key presses 1; typed text 0; coordinate clicks 0; mouse moves 0; wheel 0. Total **18** = 1 + 1 + 1 + 7 + 4 + 3 + 1.

Errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retries; no two browser actions in parallel. The OK click's Playwright wrapper resolved by role name `OK`; the ref was first confirmed by targeted find (`e2546`) and the outcome was checked by a targeted find and a screenshot. No second OK was issued.

### T4 counts (exact)

- Error Message values set: **1** (`mIsNotAValid`), by list pick (no typed entry).
- Tab commits: **1** (Error Message). Cumulative Tab commits: 2 (T2) + 6 (T3) + 1 (T4) = **9**.
- Dialog OK clicks: **1** (Global Objects). Cumulative dialog OKs: 1 (T2) + 6 (T3) + 1 (T4) = **8**.
- Global Objects OK count (cumulative): **1**.
- String or message prompts: **0**; answers: **0** (no No answer was needed). Strings created: **0**.
- Designer Saves: **0** (Save enabled, not invoked). Designer close/reopen: **0 / 0**. Unloads, FormSync, deployment, regeneration: **0**.
- Validators created: **0** in T4 (cumulative **1**). Validators-list New: **0** in T4 (cumulative **1**).
- Parameters changed: **0** in T4. Component, caption or layout changes: **0**. Existing validators changed: **0**.
- Runtime actions: **0**. Checkout actions: **0**. Re-logins: **0**. Session-expiry procedure: not invoked.
- Browser JavaScript, console or network inspection by the worker: **0**.

### Reconciliation of the T3 oversized browser_find output (one inspection-result error)

- **What happened:** in T3, call 19 was a broad `browser_find` (dialog, Set Prop, Target, Value, New, Properties and button regex) on the Set Prop Properties editor. The controller reported `Error: result (67,222 characters across 1,632 lines) exceeds maximum allowed tokens` and saved the output to a tool-results file under the worker's Claude session folder. The output was not read.
- **Classification:** **one inspection-result error** (an output-size limit on a read-only find). It is **not** a browser action failure and **not** a failed mutation: the find did not click, type, press a key, or change any Mongoose state.
- **Count reconciled:** the T3 audit counted this call among the 27 finds and reported it as "output too large (saved by the tool; no effect; read-only)". Browser errors in T3 were therefore **1 inspection-result error**, with **0 failed mutations** and **0 prohibited browser actions**. The T3 action counts (76 calls, 16 ref clicks, 6 Tab presses, 2 typed entries) are unchanged.
- **Why the outcome was still verified:** the T3 mutations were verified by later targeted finds and screenshots (`t3-09`, `t3-10`, `t3-12`, `t3-13`, `t3-14`, `t3-15`, `t3-18`, `t3-19`), not by the oversized output.
- **Not done:** the saved tool-results file was not read in T4, because the T3 outcome was already established by those later frames and finds.

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Item | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls | 19 | 35 | 76 | 18 | **148** |
| Validators created | 0 | 1 | 0 | 0 | **1** |
| Validators-list New uses | 0 | 1 | 0 | 0 | **1** |
| Name prompt OKs | 0 | 1 | 0 | 0 | **1** |
| Set Prop outputs | 0 | 0 | 2 | 0 | **2** |
| Set Prop New uses (output list) | 0 | 0 | 2 | 0 | **2** |
| Tab commits | 0 | 2 | 6 | 1 | **9** |
| Dialog OK clicks (all dialogs) | 0 | 1 | 6 | 1 | **8** |
| Global Objects OK clicks | 0 | 0 | 0 | 1 | **1** |
| Dialog Cancel clicks | 1 | 0 | 0 | 0 | **1** (T1 Validators dialog; no change) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | **0** |
| Browser errors (inspection-result) | 0 | 0 | 1 (oversized find; reconciled above) | 0 | **1** |
| Failed mutations | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T4)

- `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` (edited in T4: status header and this section).
- `evidence/EXP-087/t4-00-start-fresh-snapshot.yml` (tool-written at the worker's request)
- `evidence/EXP-087/t4-01-property-sheet-before-ErrorMessage.png`
- `evidence/EXP-087/t4-02-error-message-dropdown-open.png`
- `evidence/EXP-087/t4-03-error-message-mIsNotAValid-after-Tab.png`
- `evidence/EXP-087/t4-04-after-GlobalObjects-OK-save-state.png`

T4 total: **5** repository files (1 snapshot yml, 4 PNG) plus the record edit. Cumulative worker-requested files for EXP-087 (T1–T4): the record (1), T1 (5), T2 (9), T3 (20), T4 (5): **40 files** in total. The browser tool's own page snapshots and console logs under `evidence/playwright/` are excluded. Git was not run; repository confinement is authoritative in the harness and operator git review.

### Final state (end of T4)

- **Open dialogs:** none.
- **Designer:** FX_Orders Form selected (tab), `ScopeType: User`, **dirty** (toolbar Save enabled; Regenerate Form enabled, not invoked; Undo disabled). No component changed.
- **Validator (in memory, not yet read back):** `FX_CustomerID`; Version `User version`; Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`; Edit in-line Script blank; Description blank.
- **Not confirmed by readback:** whether the stored definition matches these values. T5 must read it back through Edit > Validator (Cancel) before, or after, the single Save as the bounded instructions direct.

### Knowledge state (T4 findings)

| Finding | State |
| --- | --- |
| The Error Message row has a dropdown trigger that opens a list of message identifiers, which contains `mIsNotAValid` | **observed** (one run, T4) |
| Choosing `mIsNotAValid` from that list and committing with Tab leaves the field showing `mIsNotAValid` with no string or message prompt | **observed** (one run, T4) |
| The Global Objects OK closes the dialog with no visible native message and no prompt | **observed** (one run, T4) |
| After the Global Objects OK the Designer toolbar Save becomes enabled (dirty); it was disabled while the dialog was open | **observed** (one run, T4); resolves the T3 open question |
| The Designer toolbar Regenerate Form is enabled after the OK (not invoked) | **observed** (one run, T4) |
| `mIsNotAValid` is an existing identifier in the Designer's message catalogue | **observed** (one run, T4); its runtime text is **not verified** |
| The stored validator matches the in-memory values | **unresolved** (requires the T5 readback and Save) |
| The tutorial's narrated message `m is not a valid` equals `mIsNotAValid` | **unverified** (the brief's assumption; the catalogue entry exists but its text was not inspected) |

**Next permitted action (T5, after the coordinator's authorization):** open Edit > Validator once; select `FX_CustomerID`; record every visible property (Type, Parameters verbatim, Error Message); open the Parameters ellipsis read-only only if needed and Cancel it; Cancel the dialog; then the single native Designer Save; the Form-tab close and recent-forms reopen; and the reopened readback, all per the brief.

---

## T5 (resumed after the usage-limit pause) — formal pre-Save readback of FX_CustomerID; Global Objects Cancel once; ONE native Designer Save; Save inspection; STOP (cycle 4)

Bounded instruction for this task: after the pause, inspect read-only (tabs, Designer selected, one fresh snapshot, session live, FX_Orders User scope, Save enabled); if the session expired or Save was no longer enabled, stop for the coordinator. Otherwise: Edit > Validator once; select the existing `FX_CustomerID` row (no New, no change to any validator); record every visible property; Cancel the dialog once; if values match, invoke the native Designer Save exactly once (no retry) and record the native response; inspect Save state, identity, scope and clean state; STOP. No close/reopen, no second Save, no component change, no runtime.

Run identity: run `R-20261014-151624-Qgjt`, experiment EXP-087, cycle 4; the message carried the header `task=T6` (task_message_id `2e72b715-3bf8-4e9e-83ee-865b3caf4ac5`) and a bounded instruction to resume T5; worker session `f44c4b57-1cb1-4edd-a2ba-cc165c61b056`.

### Pre-pause T5 start (before the pause; read-only only)

- Tab list and one untargeted snapshot (`evidence/EXP-087/t5-00-start-fresh-snapshot.yml`) were issued by the earlier T5 turn. Two read-only calls; no mutation. The bounded instruction says T5 made no browser actions before the pause; these two reads are recorded here for accuracy.

### Resume gate (after the pause; read-only)

- Tab list (before selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot `evidence/EXP-087/t5-01-resume-fresh-snapshot.yml`: the Designer page loaded; **no Session Expired modal, no Infor sign-in page** (find for "Session Expired" / "sign in" returned none). **Session live.** No re-login performed.
- Find and frame `t5-02-resume-gate-state.png`: tab `FX_Orders` selected; heading `FX_Orders`; footer `ScopeType: User / ScopeName: <operator>`; toolbar **Save enabled** (the find shows `button "Save"` with no `[disabled]`; the Save icon is coloured in the frame); Regenerate Form enabled (not invoked); Undo disabled; no dialog.
- **Gate result: session live; FX_Orders User scope; Save enabled; no dialog.** Proceed.

### Readback (Edit > Validator once; select the existing row; no New)

| Step | Call | Observed |
| --- | --- | --- |
| Edit menu | click `e5`, once | Edit menu open |
| Validator | click the Validator menu item `e2214`, once | Global Objects dialog opened (Validators list, Properties pane, OK / Cancel / Help) |
| Locate the row | find `gridcell "FX_CustomerID"` (none in the list's top slice) → one mouse move (760,450) and one wheel scroll (0,1600) (view action only) → find | Row `FX_CustomerID` (`e2643`) present between `FullTextIndexNameValidator` and the next row (`t5-03-readback-dialog-open-before-select.png` shows the list at the top before the scroll) |
| Select the row | click `e2643`, **once** | Row selected (`[active]`); the Properties pane shows the validator's property sheet. No value was typed or changed. |

**Visible properties recorded (accessibility, verbatim; screenshot `t5-04-readback-FX_CustomerID-selected.png`):**

| Property | Value (verbatim) | Matches expected? |
| --- | --- | --- |
| Name | `FX_CustomerID` | yes |
| Description | blank | (not specified) |
| Type | `In Collection` | yes |
| Parameters | `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` | yes (contains FX_HelloWorld01, FX_Code, %1, FX_Label, %2, FX_Address) |
| Error Message | `mIsNotAValid` | yes |
| Edit in-line Script | blank | (not specified) |
| Version | `User version for user <operator>` | yes (User version) |

- The Parameters value is **fully present in the accessibility text**; the frame clips it at the field edge (`FX_HelloWorld01( PRO…`). The read-only Parameters ellipsis was therefore **not opened** (the brief allowed it only if the value was not fully visible).
- **Mismatches: none.** No correction contingency was needed or used.

### Global Objects Cancel (once)

| Step | Call | Observed |
| --- | --- | --- |
| Close the readback | click Cancel `e2531`, **once** | Dialog closed with no prompt. |
| Post-Cancel state | find and frame `t5-05-after-readback-Cancel-state.png` | FX_Orders selected; `ScopeType: User`; **Save enabled** (no `[disabled]`); Undo disabled; no dialog open. |

### Single Designer Save (ONE invocation)

| Step | Call | Observed |
| --- | --- | --- |
| Native toolbar Save | click the toolbar Save (`e16`, the native floppy control in the Designer toolbar), **once** | Invoked once. No retry. |
| Native response (verbatim) | find and frame `t5-06-after-single-Save-response.png` | A toast at the top right: title `Save`; text `Global object(s) were saved.`; a `Close` control (`e2875`). **No alert, no alertdialog, no error text.** The toast is an in-page notification, not a prompt. It was **not** dismissed by the worker; it cleared itself within the wait below. |
| After the Save (immediate) | find (`t5-06`) | Save **disabled**; Regenerate Form **disabled**; Undo **disabled**; FX_Orders selected; `ScopeType: User`. |
| After a 6-second wait | `browser_wait_for` 6 s, then find and frame `t5-07-after-save-clean-state.png` | Toast no longer present (no `Global object` match); no dialog; Save disabled; Regenerate disabled; Undo disabled; FX_Orders selected; `ScopeType: User`. **The Designer is clean.** |

**Save invocation count (EXP-087 cumulative): 1.** The Save was not retried. Its result is a UI acknowledgement; it is not independent database durability (see the classification below).

### Stop state (end of T5)

- **Open dialogs: none.** The toast has cleared.
- **Designer:** FX_Orders Form selected (tab); `ScopeType: User`; **clean** (Save, Regenerate Form and Undo disabled); no component changed.
- **Not done (by instruction):** Form close; Form reopen; the reopened readback (T6); any second Save; any runtime action; any validator reopen after the Save.

### Screenshots (T5 resume)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t5-00-start-fresh-snapshot.yml` | Pre-pause snapshot (tool-written) | Designer tab at the pause | Scope or Save state beyond the file's visible portion |
| `t5-01-resume-fresh-snapshot.yml` | Resume snapshot (tool-written) | Designer loaded after the pause; no sign-in page | — |
| `t5-02-resume-gate-state.png` | FX_Orders heading; Save icon coloured; Undo grey; footer `ScopeType: User`; no dialog | Session live; User scope; Save enabled before readback | — |
| `t5-03-readback-dialog-open-before-select.png` | Global Objects open; Validators list at the top (A–C); no selection | The dialog is open with no validator selected before the readback | FX_CustomerID's position (it is further down the list) |
| `t5-04-readback-FX_CustomerID-selected.png` | FX_CustomerID highlighted in the list; Name `FX_CustomerID`; Type `In Collection`; Parameters `FX_HelloWorld01( PRO…` (clipped); Error Message `mIsNotAValid`; Version `User version` | The readback as displayed; identity and the type | The full Parameters text (clipped; read from accessibility) |
| `t5-05-after-readback-Cancel-state.png` | Dialog closed; FX_Orders; Save enabled; no dialog | Cancel left the Designer dirty and unchanged | — |
| `t5-06-after-single-Save-response.png` | Native toast `Save` / `Global object(s) were saved.` with Close; toolbar Save, Regenerate and Undo disabled | The native Save response; post-Save toolbar state | Persistence in the database |
| `t5-07-after-save-clean-state.png` | Toast cleared; FX_Orders; Save disabled; footer `ScopeType: User`; no dialog | The clean state after the Save | Persistence; runtime |

### Action audit (T5 resume, exact; 27 browser calls)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t5-01` | Designer live; no sign-in |
| 4 | `browser_find` (gate: tab, heading, scope, Save, Undo, dialog, sign-in) | FX_Orders; User; Save enabled; no dialog |
| 5 | `browser_take_screenshot` `t5-02` | Gate state |
| 6 | `browser_find` "Edit" | Edit menu ref `e5` (large output; read-only) |
| 7 | `browser_click` `e5` (Edit, once) | Edit menu open |
| 8 | `browser_find` "Validator" | Validator item `e2214` |
| 9 | `browser_click` `e2214` (Validator, once) | Global Objects open |
| 10 | `browser_find` (FX_CustomerID row; dialog; OK/Cancel) | Row not in the top slice; dialog present |
| 11 | `browser_take_screenshot` `t5-03` | List at top, nothing selected |
| 12 | `browser_mouse_move_xy` (760,450) | Pointer over list (view) |
| 13 | `browser_mouse_wheel` (0,1600) | List scrolled to the F–G area (view) |
| 14 | `browser_find` `gridcell "FX_CustomerID"` | Row `e2643` |
| 15 | `browser_click` `e2643` (FX_CustomerID row, once) | Row selected; property sheet shown |
| 16 | `browser_find` (property rows) | Name, Type, Parameters, Error Message, Version, Edit in-line Script read |
| 17 | `browser_take_screenshot` `t5-04` | Readback frame |
| 18 | `browser_find` (OK / Cancel / Help refs) | Cancel `e2531` |
| 19 | `browser_click` `e2531` (Cancel, once) | Global Objects closed |
| 20 | `browser_find` (post-Cancel state) | FX_Orders; User; Save enabled; no dialog |
| 21 | `browser_take_screenshot` `t5-05` | Post-Cancel state |
| 22 | `browser_click` `e16` (native toolbar Save, **once**) | Save invoked |
| 23 | `browser_find` (response; Save; Regenerate; Undo; scope) | Toast `Global object(s) were saved.`; Save, Regenerate and Undo disabled |
| 24 | `browser_take_screenshot` `t5-06` | Save response frame |
| 25 | `browser_wait_for` 6 s | Wait only |
| 26 | `browser_find` (post-wait state) | Toast gone; no dialog; Save disabled; User; FX_Orders |
| 27 | `browser_take_screenshot` `t5-07` | Clean state after Save |

Count summary (T5 resume): tab lists 1; tab selects 1; untargeted snapshots 1; finds 10 (calls 4, 6, 8, 10, 14, 16, 18, 20, 23, 26); screenshots 6 (`t5-02` to `t5-07`); ref clicks 5 (`e5`, `e2214`, `e2643`, `e2531`, `e16`); coordinate clicks 0; mouse moves 1; mouse wheel 1; wait 1; typed text 0; Tab key presses 0. Total **27** = 1 + 1 + 1 + 10 + 6 + 5 + 1 + 1 + 1.

Errors: browser errors / timeouts **0**; ref-not-found **0**; fresh-snapshot recovery allowance used **0**; no retries; no two browser actions in parallel. The find at call 6 returned a large output (27 matches) that was read-only and had no effect; it is not a failed mutation.

### T5 counts (exact)

- Dialog OK clicks (T5): **0**. Dialog Cancel clicks (T5): **1** (Global Objects, readback close; no change).
- Tab commits (T5): **0** (no field was edited; the row was only selected).
- Validators created (T5): **0**. Validators-list New (T5): **0**. Validators changed, copied, renamed, deleted (T5): **0**.
- Designer Saves (T5): **1** (`e16`). Cumulative Designer Saves for EXP-087: **1** (the limit is one). Retries: **0**.
- Designer close / reopen (T5): **0 / 0**. Unloads, FormSync, deployment, regeneration: **0**.
- Contingency corrections (T5): **0** (no mismatch).
- String or message prompts (T5): **0**; answers: **0**. Strings created: **0**.
- Component, caption or layout changes (T5): **0**. Runtime actions: **0**. Checkout actions: **0**. Re-logins (T5): **0**; the session-expiry procedure was **not** invoked (no expiry observed).

### Cumulative browser action audit (T1–T5)

| Item | T1 | T2 | T3 | T4 | T5 (pre-pause + resume) | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 19 | 35 | 76 | 18 | 2 + 27 = 29 | **177** |
| Validators created | 0 | 1 | 0 | 0 | 0 | **1** |
| Validators-list New uses | 0 | 1 | 0 | 0 | 0 | **1** |
| Name prompt OKs | 0 | 1 | 0 | 0 | 0 | **1** |
| Set Prop outputs | 0 | 0 | 2 | 0 | 0 | **2** |
| Set Prop New uses (output list) | 0 | 0 | 2 | 0 | 0 | **2** |
| Tab commits | 0 | 2 | 6 | 1 | 0 | **9** |
| Dialog OK clicks (all dialogs) | 0 | 1 | 6 | 1 | 0 | **8** |
| Global Objects OK clicks | 0 | 0 | 0 | 1 | 0 | **1** |
| Dialog Cancel clicks | 1 | 0 | 0 | 0 | 1 | **2** (T1 Validators dialog, no change; T5 readback Cancel, no change) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | 1 | **1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Component changes | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser errors (inspection-result) | 0 | 0 | 1 (oversized find; reconciled in T4) | 0 | 0 | **1** |
| Failed mutations | 0 | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T5)

- `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` (edited in T5: status header, the run-header note and this section).
- `evidence/EXP-087/t5-00-start-fresh-snapshot.yml` (pre-pause; tool-written at the worker's request)
- `evidence/EXP-087/t5-01-resume-fresh-snapshot.yml` (tool-written at the worker's request)
- `evidence/EXP-087/t5-02-resume-gate-state.png`
- `evidence/EXP-087/t5-03-readback-dialog-open-before-select.png`
- `evidence/EXP-087/t5-04-readback-FX_CustomerID-selected.png`
- `evidence/EXP-087/t5-05-after-readback-Cancel-state.png`
- `evidence/EXP-087/t5-06-after-single-Save-response.png`
- `evidence/EXP-087/t5-07-after-save-clean-state.png`

T5 total: **8** evidence files (2 yml, 6 PNG) plus the record edit. Cumulative worker-requested repository files for EXP-087 (T1–T5, including the record once): **48**. The browser tool's own page snapshots and console logs under `evidence/playwright/` are excluded. Git was not run; repository confinement is authoritative in the harness and operator git review.

### Classification and limits (T5)

- The readback is a **Designer UI readback** of the open client session, taken before the Save. It is observed only. It is not a database read, not a runtime check, and not replay verification.
- The native Save response (`Global object(s) were saved.`) is a UI acknowledgement. Its durability and the stored definition are **unverified** until the T6 close/reopen readback.
- The clean Designer after the Save is observed in the same session only.

### Final state (end of T5)

- **Open dialogs:** none. The Save toast has cleared.
- **Designer:** FX_Orders Form selected; `ScopeType: User`; **clean** (Save, Regenerate Form and Undo disabled); no component change.
- **Validator:** `FX_CustomerID` as read back before the Save (Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`; Version `User version`).
- **Next permitted action (T6, after the coordinator's authorization):** close the clean FX_Orders Form once through its Form-tab control; reopen it once through the Form menu recent-forms entry; read FX_CustomerID back once through Edit > Validator (Cancel); confirm no component changed and the Designer is clean.

### Knowledge state (T5 findings)

| Finding | State |
| --- | --- |
| Session live after the usage-limit pause; no sign-in page; no re-login | **observed** (one run, T5 resume) |
| Save was enabled after the Global Objects Cancel on the readback (dirty state carried from T4) | **observed** (one run, T5 resume) |
| Edit > Validator shows FX_CustomerID with Type `In Collection`, the Parameters string verbatim, Error Message `mIsNotAValid` and Version `User version` (in the open session, before the Save) | **observed** (one run, T5 readback) |
| The Parameters value is fully present in the accessibility text but clipped in the frame | **observed** (one run, T5) |
| Cancel on the readback leaves the Designer dirty and unchanged | **observed** (one run, T5) |
| One native toolbar Save produced the toast `Save` / `Global object(s) were saved.` and left the Designer clean (Save, Regenerate Form, Undo disabled) | **observed** (one run, T5) |
| The toast clears by itself within about 6 seconds | **observed** (one run, T5) |
| The stored definition is persisted and survives a Form close/reopen | **unresolved** (requires T6) |
| The `mIsNotAValid` identifier renders as "m is not a valid" at runtime | **unverified** (not checked; no runtime action) |
| Nothing is replay_verified; no database durability or runtime validation behaviour is claimed | — |

---

## T6 — clean FX_Orders close (once) and reopen via recent-forms (once); reopened readback of FX_CustomerID; Global Objects Cancel once; stop for coordinator review (cycle 5)

Bounded instruction (T6): list tabs before selection; verify FX_Orders selected, User scope, no dialog, Save and Undo disabled; if dirty, expired or an unexpected dialog, stop without closing. Otherwise close the clean Form once through its Form-tab close control; confirm the tab is gone; reopen once through the Form menu recent-forms entry; verify identity, User scope, clean Save/Undo and no prompt; open Edit > Validator once; select the existing FX_CustomerID row without New; inspect every visible property; verify the expected values; Cancel the Global Objects dialog once; verify FX_Orders clean. No Designer Save, no checkout, no runtime, no regeneration, no cache operation. Stop after the reopened readback.

Run identity: run `R-20261014-151624-Qgjt`, experiment EXP-087, cycle 5; the message header carried `task=T7` (task_message_id `5a73ed8e-df91-4001-985c-c0bdc9d20937`) while the bounded instruction said T6. The bounded instruction was followed (see the reconciliation below). Worker session `f44c4b57-1cb1-4edd-a2ba-cc165c61b056`.

### Reconciliation of the task-header mismatch and the failed documentation Edit

- **Task header:** the message was headed `task=T7` with the task_message_id `5a73ed8e-…`, but its bounded instruction was "T6 — Verify FX_CustomerID after exactly one clean FX_Orders Form close/reopen". The bounded instruction defines the work; it was executed as written. The header is recorded as a mismatch and not reconciled by any browser action.
- **Controller's failed documentation Edit operation (string not found):** in the T5 documentation step, one `Edit` on this record reported `String to replace not found in file` (the anchor text "the single Designer Save; the Form-tab close and recent-forms reopen; and the reopened readback, all per the brief." was not a unique match). This was a **documentation-edit failure**, not a browser action. The retry used a different unique anchor and succeeded. No browser action was re-issued; no Mongoose state was changed by the failed edit. The T5 section is therefore complete in the record.
- **Browser mutation failures in T6:** zero. Every browser action in T6 succeeded; none returned an error.
- **Historical T3 oversized inspection-result error:** preserved as recorded in T4 (one inspection-result error; zero failed mutations; zero prohibited browser actions). It was not repeated in T6.

### Pre-close gate (read-only; clean before any close)

- Tab list (before selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Mongoose (portal). Tab 0 selected (succeeded).
- Fresh untargeted snapshot `evidence/EXP-087/t6-00-start-fresh-snapshot.yml`; find: tab `FX_Orders` selected; heading `FX_Orders`; footer `ScopeType: User`; toolbar Save `[disabled]`; Undo `[disabled]`; Regenerate Form `[disabled]`; no dialog; no alertdialog; no Session Expired text; no sign-in; no Global object toast.
- `t6-01-preclose-clean-state.png`: FX_Orders heading; Save and Undo greyed; footer `ScopeType: User`; no dialog.
- **Gate result: clean, User scope, no dialog, no session expiry. Proceed to close.**

### Close (Form-tab close control, once)

| Step | Call | Observed |
| --- | --- | --- |
| Close the clean Form | click the Form-tab close control `e247` ("closable FX_Orders"), **once** | No discard prompt, no unsaved-change dialog, no alertdialog. The FX_Orders tab is gone; the Form tab list is empty; the canvas is blank; Save and Undo are greyed; footer `ScopeType: User`. `t6-02-after-Form-tab-close.png`. |

### Reopen (Form menu recent-forms entry, once)

| Step | Call | Observed |
| --- | --- | --- |
| Fresh snapshot for refs | snapshot `t6-03` (depth 4); Grep for `button "Form"` → `e3` | Form menu ref `e3` |
| Open the Form menu | click `e3`, **once** | Menu opened: `Definition`, `Sign Out`, recent forms `FX_Orders` (`e2204`), `IDO Properties`, `IDOs`, `FX_HelloWorld01`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_Items`, `FX_UMs`, `Export/Import Strings`. `t6-04-form-menu-open-recent-forms.png`. |
| Choose the recent-forms entry | click `FX_Orders` (`e2204`), **once** | The page URL gained `MGForm=FX_Orders`; the Form reopened. |

### Reopened Form identity and clean state (verified before the readback)

| Item | Observed |
| --- | --- |
| Form identity | Tab `FX_Orders` selected (`e2233`); heading `FX_Orders`; the Form property sheet shows Name `FX_Orders`, Version `User version for user …`, Device Type `Default`, Form Type `Normal`, Is Master `True`. |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator> ]`. |
| Clean state | Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`. |
| Prompts | No dialog, no alertdialog, no discard prompt, no toast, no Session Expired text, no sign-in. |
| Screenshot | `t6-05-reopened-FX_Orders-clean-state.png`: the reopened Form with the FX_Orders heading; Save and Undo greyed; footer `ScopeType: User`; the Form property sheet. Shows identity, scope and clean state; does not show the validator. |

### Reopened readback (Edit > Validator, once; select the existing row; Cancel once)

| Step | Call | Observed |
| --- | --- | --- |
| Edit menu | click `e5`, **once** | Edit menu open (`Theme`, `Validator`, `Variable`, …) |
| Validator | click `e2599`, **once** | Global Objects dialog opened (Validators list; Properties pane; OK / Cancel / Help) |
| Locate the row | find `gridcell "FX_CustomerID"` (not in the top slice) → one mouse move (760,450) and one wheel scroll (0,1600) (view only) → find | Row `FX_CustomerID` (`e3028`), directly below `FullTextIndexNameValidator` |
| Select the row | click `e3028`, **once** (selection only) | Row selected (`[active]`); property sheet shown |

**Visible properties after the reopen (accessibility, verbatim; `t6-06-reopened-readback-FX_CustomerID-selected.png`):**

| Property | Value (verbatim) | Matches the pre-close state (T5)? |
| --- | --- | --- |
| Name | `FX_CustomerID` | yes |
| Description | blank | yes |
| Type | `In Collection` | yes |
| Parameters | `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` | yes (contains FX_HelloWorld01, FX_Code, %1, FX_Label, %2, FX_Address) |
| Error Message | `mIsNotAValid` | yes |
| Edit in-line Script | blank | yes |
| Version | `User version for user <operator>` | yes (User version) |

- The Parameters text is fully present in the accessibility text; the frame clips it (`FX_HelloWorld01( PRO…`). The Parameters ellipsis was **not opened** (not needed to establish the value).
- **Mismatches: none.** No correction, no Save, no repeat close/reopen.

### Cancel and final state

| Step | Call | Observed |
| --- | --- | --- |
| Close Global Objects | click Cancel `e2916`, **once** | Dialog closed; no prompt. |
| Final state | find and frame `t6-07-after-readback-Cancel-final-state.png` | FX_Orders selected (tab `e2233`); `ScopeType: User`; Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; no dialog; no prompt. The Designer is **clean**. |

**No Form component or validator property was changed in T6.** The only row interaction was a selection (`e3028`) and a list scroll (view). The Validators list was not modified. The Designer Save was not invoked in T6.

### Screenshots (T6)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t6-00-start-fresh-snapshot.yml` | Pre-close accessibility snapshot (tool-written at the worker's request) | FX_Orders selected; Save and Undo disabled; no dialog | Scope (from find, not the file's visible portion) |
| `t6-01-preclose-clean-state.png` | FX_Orders Designer before the close; Save and Undo greyed; footer `ScopeType: User`; no dialog | Clean pre-close state | Stored state |
| `t6-02-after-Form-tab-close.png` | Empty Designer after the Form-tab close: no FX_Orders tab, blank canvas, Save and Undo greyed, footer `ScopeType: User` | The Form tab is gone; no discard prompt | Whether the stored state survived (readback is in t6-06) |
| `t6-04-form-menu-open-recent-forms.png` | Form menu open with recent-forms `FX_Orders` among the entries | The recent-forms entry exists and was offered | — |
| `t6-05-reopened-FX_Orders-clean-state.png` | Reopened FX_Orders: heading; Save and Undo greyed; Form property sheet; footer `ScopeType: User`; no dialog | Identity, scope, clean state after the reopen | The validator (not in this frame) |
| `t6-06-reopened-readback-FX_CustomerID-selected.png` | Global Objects open; FX_CustomerID highlighted; Name, Type `In Collection`, Parameters `FX_HelloWorld01( PRO…` (clipped), Error Message `mIsNotAValid`, Version | The reopened readback as displayed; identity and type | The full Parameters text (clipped; from accessibility) |
| `t6-07-after-readback-Cancel-final-state.png` | Dialog closed; FX_Orders; Save and Undo greyed; footer `ScopeType: User` | Final clean state after the Cancel | — |

Note: `t6-03-after-close-fresh-snapshot.yml` (the post-close snapshot used to find the Form menu ref) is also tool-written. The `page-2026-10-14T09-…yml` and `console-…log` files under `evidence/playwright/` were written by the browser tool and are excluded from the inventory.

### Action audit (T6, exact; 31 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_snapshot` untargeted, saved `t6-00` | Designer; Save and Undo disabled |
| 3 | `browser_tabs` select 0 | Succeeded |
| 4 | `browser_find` (gate: tab, heading, scope, Save, Undo, dialog, sign-in) | FX_Orders; User; clean; no dialog |
| 5 | `browser_take_screenshot` `t6-01` | Pre-close clean state |
| 6 | `browser_click` `e247` (Form-tab close, **once**) | FX_Orders tab closed; no prompt |
| 7 | `browser_find` (post-close state) | No Form tab; no dialog; Save disabled |
| 8 | `browser_take_screenshot` `t6-02` | Empty Designer |
| 9 | `browser_snapshot` depth 4, saved `t6-03` | Form menu ref located (by Grep: `e3`) |
| 10 | `browser_click` `e3` (Form menu, **once**) | Form menu open |
| 11 | `browser_find` (menu items) | Recent forms `FX_Orders` `e2204` |
| 12 | `browser_take_screenshot` `t6-04` | Menu open |
| 13 | `browser_click` `e2204` (FX_Orders recent-forms entry, **once**) | Form reopened (URL `MGForm=FX_Orders`) |
| 14 | `browser_find` (identity, scope, Save, Undo, dialog) | FX_Orders selected; User; Save and Undo disabled; no dialog |
| 15 | `browser_take_screenshot` `t6-05` | Reopened clean state |
| 16 | `browser_find` "Edit" (targeted) | Edit ref `e5` |
| 17 | `browser_find` text "Validator" → `browser_find` dialog check | Dialog not yet open at that point |
| 18 | `browser_click` `e5` (Edit, **once**) | Edit menu open |
| 19 | `browser_find` "Validator" | Validator item `e2599` |
| 20 | `browser_click` `e2599` (Validator, **once**) | Global Objects open |
| 21 | `browser_find` (dialog; FX_CustomerID) | Dialog open; row not in the top slice |
| 22 | `browser_mouse_move_xy` (760,450) | Pointer over list (view) |
| 23 | `browser_mouse_wheel` (0,1600) | List scrolled (view) |
| 24 | `browser_find` `gridcell "FX_CustomerID"` | Row `e3028` |
| 25 | `browser_click` `e3028` (FX_CustomerID row, **once**) | Row selected |
| 26 | `browser_find` (property rows) | Name, Type, Parameters, Error Message, Edit in-line Script, Version read |
| 27 | `browser_take_screenshot` `t6-06` | Reopened readback frame |
| 28 | `browser_find` (OK / Cancel / Help refs) | Cancel `e2916` |
| 29 | `browser_click` `e2916` (Cancel, **once**) | Global Objects closed |
| 30 | `browser_find` (final state) | FX_Orders; User; Save and Undo disabled; no dialog |
| 31 | `browser_take_screenshot` `t6-07` | Final clean state |

Count summary (T6, exact, from the 31-row table): tab lists **1** (call 1); tab selects **1** (call 3); untargeted snapshots **2** (calls 2 and 9; call 9 used `depth` 4); finds **12** (calls 4, 7, 11, 14, 16, 17, 19, 21, 24, 26, 28, 30); screenshots **6** (calls 5, 8, 12, 15, 27, 31); ref clicks **7** (calls 6 `e247`, 10 `e3`, 13 `e2204`, 18 `e5`, 20 `e2599`, 25 `e3028`, 29 `e2916`); mouse moves **1** (call 22); mouse wheel **1** (call 23); Tab presses **0**. Total **31** = 1 + 1 + 2 + 12 + 6 + 7 + 1 + 1.

Errors: browser errors / timeouts **0**; "Ref not found" **0**; fresh-snapshot recovery allowance used **0**; no retries; no two browser actions issued in parallel. Row 17 of the table is a read-only check that returned no match on the menu state; it has no effect.

### T6 counts (exact)

- Form-tab closes: **1** (`e247`). Form reopens: **1** (recent-forms `FX_Orders`, `e2204`). Designer close/reopen cumulative: **1 / 1** (within the AC-4 limit).
- Designer Saves (T6): **0**. Cumulative Designer Saves for EXP-087: **1** (T5).
- Dialog OK clicks (T6): **0**. Dialog Cancel clicks (T6): **1** (Global Objects readback close, no change).
- Tab commits (T6): **0**. Typed entries (T6): **0**. Fill/clear (T6): **0**.
- Validators created (T6): **0**. Validators-list New (T6): **0**. Validators changed, copied, renamed, deleted (T6): **0**.
- String or message prompts (T6): **0**; answers: **0**. Strings created: **0**.
- Discard or unsaved-change prompts at close: **0** (none seen).
- Component, caption or layout changes (T6): **0**. Runtime actions: **0**. Checkout actions: **0**. Regeneration, cache unload, FormSync, deployment: **0**.
- Re-logins (T6): **0**; session-expiry procedure **not** invoked (no expiry observed).

### Cumulative browser action audit (T1–T6)

| Item | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 19 | 35 | 76 | 18 | 29 | 31 | **208** |
| Validators created | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Validators-list New uses | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Name prompt OKs | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Set Prop outputs | 0 | 0 | 2 | 0 | 0 | 0 | **2** |
| Set Prop New uses (output list) | 0 | 0 | 2 | 0 | 0 | 0 | **2** |
| Tab commits | 0 | 2 | 6 | 1 | 0 | 0 | **9** |
| Dialog OK clicks (all dialogs) | 0 | 1 | 6 | 1 | 0 | 0 | **8** |
| Global Objects OK clicks | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Dialog Cancel clicks | 1 | 0 | 0 | 0 | 1 | 1 | **3** (no change in any) |
| String or message prompts / answers | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Contingency corrections | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | 0 | 1 | 0 | **1** (maximum) |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Component changes | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Runtime actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser errors (inspection-result) | 0 | 0 | 1 (oversized find; reconciled in T4) | 0 | 0 | 0 | **1** |
| Failed mutations | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

Cumulative browser calls: 19 + 35 + 76 + 18 + 29 + 31 = **208**. T5's 29 is the 2 pre-pause reads plus the 27-call resume.

### Worker-written file inventory (T6)

- `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` (edited in T6: status header and this section).
- `evidence/EXP-087/t6-00-start-fresh-snapshot.yml` (tool-written at the worker's request)
- `evidence/EXP-087/t6-01-preclose-clean-state.png`
- `evidence/EXP-087/t6-02-after-Form-tab-close.png`
- `evidence/EXP-087/t6-03-after-close-fresh-snapshot.yml` (tool-written at the worker's request)
- `evidence/EXP-087/t6-04-form-menu-open-recent-forms.png`
- `evidence/EXP-087/t6-05-reopened-FX_Orders-clean-state.png`
- `evidence/EXP-087/t6-06-reopened-readback-FX_CustomerID-selected.png`
- `evidence/EXP-087/t6-07-after-readback-Cancel-final-state.png`

T6 total: **8** evidence files (2 yml, 6 PNG) plus the record edit. Cumulative worker-requested repository files for EXP-087 (T1–T6, including the record once): **56**, that is T1 (5) + T2 (9) + T3 (20) + T4 (5) + T5 (8) + T6 (8) + the record (1) = **56**. The browser tool's own `evidence/playwright/` snapshots and console logs are excluded. Git was not run; repository confinement is authoritative in the harness and operator git review.

### Final state (end of T6)

- **Open dialogs:** none.
- **Designer:** FX_Orders Form selected (tab); `ScopeType: User`; **clean** (Save, Regenerate Form, Undo and Redo disabled); no component changed; the Designer is the reopened session.
- **Validator, as read back after the reopen:** `FX_CustomerID`; Version `User version`; Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`; Description and Edit in-line Script blank.
- **Stop:** the bounded instruction says stop after this reopened readback for coordinator review. No further action was taken.

### Classification (T6)

- The reopened readback is a **Designer UI readback** after one ordinary Form close and reopen in the same browser session. It is **observed only**.
- An ordinary close/reopen is a **weak persistence boundary**. It shows that the Designer's client view reloaded the Form and returned the same values; it is **not** independent database durability, not a server-side read, not runtime validation behaviour, and **not** replay verification.
- The `mIsNotAValid` identifier's runtime text remains **unverified**.

### Knowledge state (T6 findings)

| Finding | State |
| --- | --- |
| The clean FX_Orders Form closes through its Form-tab close control with no discard or unsaved-change prompt | **observed** (one run, T6) |
| The recent-forms entry `FX_Orders` in the Form menu reopens the Form in User scope with Save and Undo disabled | **observed** (one run, T6) |
| After one close and reopen, Edit > Validator shows FX_CustomerID with the same values read before the Save (Type `In Collection`; Parameters verbatim; Error Message `mIsNotAValid`; Version User) | **observed** (one run, T6; Designer UI readback; weak persistence boundary) |
| The Parameters text is fully present in accessibility but clipped in the frame | **observed** (one run, T6) |
| Cancel on the readback leaves the Designer clean | **observed** (one run, T6) |
| Persistence in the database / server-side durability | **unresolved** (not verifiable from Designer readbacks) |
| Runtime validation behaviour (`mIsNotAValid` text; FX_CustomerID In Collection behaviour) | **unverified** (no runtime action) |
| Replay verification of the procedure | **not claimed** (nothing is replay_verified) |

**Next permitted action (after the coordinator's review):** none within EXP-087 T6. The component class (Section 9) and its use on FX_Orders are later experiments and were not started.

---

## T8 — final acceptance audit (documentation only; zero browser calls; zero Mongoose changes) (cycle 6)

Full report: `evidence/EXP-087/T8-final-acceptance-report.md`. Method: review of this record, the evidence files in `evidence/EXP-087/`, and the controller-generated audits `evidence/EXP-087/harness-audit-T1.md` … `harness-audit-T7.md` (Read/Grep/Glob only).

### Recommendation: ACCEPTED AS OBSERVED

Conditions: (1) the browser-call total is harness-reconciled to **210**, not the worker-reported 208; (2) the close/reopen is a weak persistence boundary, not database durability; (3) the Parameters value is read from accessibility because the frame clips it; (4) the runtime text of `mIsNotAValid` and runtime validation behaviour are unverified; (5) replay verification is not claimed.

### Acceptance (summary)

| AC | Result | Principal evidence |
| --- | --- | --- |
| AC-1 | Supported (with limits) | `g0-01` (User, clean), `g0-02` (dialog layout), `t2-02` (F–G slice; no FX_CustomerID) |
| AC-2 | Supported | `t2-03`–`t2-08`, `t3-03`–`t3-19`, `t4-02`–`t4-04` (dialog screenshots before each OK); harness: 8 dialog OKs, 9 Tab commits, 0 string prompts, 0 No answers |
| AC-3 | Supported (in-session) | `t5-04` (readback), `t5-05` (Cancel), `t5-06` (native response `Global object(s) were saved.`), `t5-07` (clean) |
| AC-4 | Supported (with limits) | `t6-01` (pre-close), `t6-02` (tab gone), `t6-04` (recent forms), `t6-05` (reopened clean), `t6-06` (reopened readback matches), `t6-07` (final) |

### Counts (AC-5), reconciled to the harness audits

| Task | Record | Harness | Difference |
| --- | --- | --- | --- |
| T1 | 19 | 19 (6 actions + 13 reads) | — |
| T2 | 35 | 35 (14 + 21) | — |
| T3 | 76 | **77** (28 + 49) | +1: a read-only find after the first IDO click was omitted |
| T4 | 18 | 18 (5 + 13) | — |
| T5 pre-pause | 2 | 2 (0 + 2) | — |
| T5 resume | 27 | 27 (8 + 19) | — |
| T6 | 31 | **32** (10 + 22) | +1: a read-only Form-menu find before the depth-4 snapshot was omitted |
| **Total** | **208** | **210** (71 actions + 139 reads) | +2, both read-only finds |

Mutations: validators created 1; Validators-list New 1; Set Prop output New 2; Set Prop outputs 2; dialog OKs 8 (name prompt 1, Set Prop output OKs 2, Set Prop list OK 1, Set Prop editor OK 1, property picker OK 1, Parameters OK 1, Global Objects OK 1); Tab commits 9; string prompts 0; No answers 0; contingency corrections 0; Designer Saves 1; Save retries 0; Form close 1; reopen 1; component changes 0; runtime actions 0; checkout actions 0; re-logins 0; failed browser mutations 0.

Cancel reconciliation: 3 total (T1 layout 1, T5 readback 1, T6 reopened readback 1); none changed any value.

### Exceptions, distinguished from browser mutation failures

- **T3 oversized inspection-result error** (harness row `#23`): a read-only `browser_find` exceeded the output limit. It did not mutate anything; its effect was checked by later frames and finds. Preserved.
- **T5 failed documentation Edit, then successful correction** (harness T6-labelled audit rows 34 and 36): an `Edit` on this record failed because its anchor was not unique; the retry with a different anchor succeeded. A file-edit error, not a browser action. Preserved.
- **T5 pre-pause stop** (harness T5 audit): the session usage limit after the two pre-pause reads. Expected pause; nothing repeated.
- **`browser_type` flags** (harness T2: 1, T3: 2): classified by the harness as flagged tool usage. The three typed entries (name, `%1`, `%2`) were brief-required field entries. The coordinator should confirm the classification.

### Task-header accounting

The harness audit files follow the header each message carried, not the bounded instruction: `harness-audit-T6.md` is the T5 resume (header `task=T6`, bounded instruction T5), and `harness-audit-T7.md` is the T6 close/reopen (header `task=T7`, bounded instruction T6). No execution is claimed beyond what each audit records. This T8 header (`task=T8`, cycle 6) matches its instruction.

### Worker-written files (cumulative)

- Record: 1 (this file, created in T1 and edited through T8).
- Evidence: 55 (T1 5; T2 9; T3 20; T4 5; T5 8; T6 8).
- T8 report: `evidence/EXP-087/T8-final-acceptance-report.md` (new in T8).
- **Total worker-written repository files for EXP-087: 57.**
- Not worker-written: `harness-audit-T1.md` … `harness-audit-T7.md` (controller-generated); `evidence/playwright/` (tool logs, excluded).

### Final state

FX_Orders selected; `ScopeType: User`; clean (Save, Regenerate Form, Undo and Redo disabled); no dialog or prompt open. Validator `FX_CustomerID`: Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`; Version `User version`. T8 made no browser call and no Mongoose change.

### Knowledge state (T8)

Observed only. Database durability: unresolved. Runtime validation behaviour and the runtime text of `mIsNotAValid`: unverified. Replay verification: not claimed. Nothing is replay_verified.

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 sections 7-8 are complete. The operator decided acceptance.

- Run R-20261014-151624-Qgjt completed as accepted after 8 worker tasks.
- **Usage-limit pause:** T5 hit the subscription usage limit after two reads and no browser action. About 90 minutes later, after the reset, the run resumed with `--continue-after-usage`.
  - The resume instruction required a read-only state check first, and a stop with no re-login and no re-creation if the session had expired or Save was no longer enabled.
  - The session was live and Save was still enabled, so T5/T6 continued with no action repeated.
- Created, for later cleanup (through Designer Edit > Validator, the Global Objects dialog, list New once):
  - Validator **`FX_CustomerID`** (User version), Type **In Collection**.
  - Parameters: `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`.
  - Error Message **`mIsNotAValid`**, chosen from the Designer's list. No string was created.
  - One Designer Save with FX_Orders open: "Global object(s) were saved."
- Screenshots viewed by the operator assistant:
  - `t3-18`: the Edit In Collection Validator Parameters dialog: IDO `FX_HelloWorld01`, Set Prop/Var/Comp `SETP(%1=FX_Label,%2=FX_Addre…`, In Collection Only Property `FX_Code`. The checkboxes are unticked: No List Cache, Output First Time Only, Output Immediate Only, Mark Output Targets Validated, Exception Text Is Back End Msg.
  - `t6-06`: after the Save and one Designer close/reopen, Global Objects > Validators shows FX_CustomerID with Type `In Collection`, Parameters `FX_HelloWorld01( PRO…`, Error Message `mIsNotAValid` and `User version`, in User scope.
    - The full Parameters text is from the accessibility tree; the image clips it.
- Flagged `browser_type` calls: all three are entries the brief requires:
  - the validator Name in the New prompt;
  - the two Set Prop Targets `%1` and `%2`.
- Accepted deviations:
  1. One oversized read-only `browser_find` (T3), saved outside the repo and not read. No effect.
  2. One record Edit retried (T6).
  3. The usage-limit stop (T5).
- Counts:
  - validators created 1, New 1, Set Prop outputs 2;
  - Tab commits 9, dialog OKs 8, Cancels 3;
  - Designer Save 1, Designer close/reopen 1;
  - component changes 0, runtime actions 0, checkout actions 0, re-logins 0.
- Findings (observed):
  1. **The Validator editor is a Global Objects dialog** with a Validators list (New, Copy, Delete) and Properties: Name, Description, Type, Parameters (ellipsis), Error Message (list plus ellipsis), Edit in-line Script and Version.
  2. **The In Collection Parameters dialog** has IDO, Set Prop/Var/Comp (ellipsis to an Edit Set Property From List editor with Target and Value rows), In Collection Only Property and Filter, and option checkboxes.
  3. **Parameters are stored as one compiled string:** `IDO( PROPERTY(<key>) SETP(%1=<prop>,%2=<prop>) )`.
  4. **The Error Message list** offers `mIsNotAValid`, `mIsNotAValid%1` and `m%1IsNotAValid%2`. The runtime text is unverified.
- Limits: same-session Designer UI evidence only. No runtime validation yet.
- Confinement (git status): only `evidence/EXP-087/` and this record were written by the run.
- Next: EXP-088 (Part 5 section 9), the FX_CustomerID component class:
  - validator FX_CustomerID with parameters `%1,%2`;
  - Validate Immediately True;
  - list source IDO Collection FX_HelloWorld01, properties FX_Code, FX_Label, FX_Address, displaying FX_Code and FX_Label.
