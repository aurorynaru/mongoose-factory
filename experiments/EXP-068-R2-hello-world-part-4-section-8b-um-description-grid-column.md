# EXP-068-R2 — Hello World Part 4 Section 8b: Add the FX_UMsDescriptionGridCol grid column on the User-scope FX_Items Form (replay)

**FINAL STATUS (T11, 2026-10-13): BLOCKED at AC-6's screenshot-evidence criterion; NOT accepted overall; nothing replay_verified. AC-1 to AC-5 supported (AC-2 with the `New`-label caveat; AC-4 toast screenshot-only; AC-5 same-session). AC-6: the screenshot criterion FAILED (no screenshot shows the fifth column or its values); the accessibility functional readback SUCCEEDED (dumbbell Each, eggs Dozen, guitar Each). AC-7 supported only to the extent of the readbacks and the audit. AC-8 documentation complete. Browser calls T1–T10 total 261; T11 zero. Full report: `evidence/EXP-068-R2/T11-final-blocked-report.md` (acceptance matrix, reconciled counts, 46 worker screenshots, inventory, unresolved indicators, recommendation). The coordinator must decide between waiving the screenshot requirement and authorising a visual route. Section 0i.**

**Status (T10, 2026-10-13): one visual-evidence inspection for AC-6 completed; NO scroll or drag performed. The horizontal scrollbar could not be positively identified (no accessibility scrollbar or splitter element; the only candidate is a small bar at the bottom of the narrow grid pane, about y 896, whose thumb is not distinguishable from the splitter grip at about (393, 520)). Per the stop rule nothing was dragged. The fifth column and the values Each, Dozen and Each are NOT visually readable in any screenshot. AC-6's screenshot criterion is NOT met. The accessibility-based values (dumbbell Each, eggs Dozen, guitar Each) are retained. Both forms remain clean; no dialog is open. The experiment is not finalised. Section 0h gives the observations and counts.**

**Status (T9, 2026-10-13): AC-6 MET on the accessibility readback (runtime close once, reopen once). The runtime FX_Items Form that was already open (loaded before the Designer Save) had the headers Item, Description, Cost, Unit of Measure only; it was verified clean (Save disabled) after one blank-area click moved focus off its Description field, then closed once with its own `Close Panel FX_Items` control (no prompt). It was reopened once through Form > Open > Select Form (one row FX_Items / FX_Items; OK once). The reopened grid headers are Item, Description, Cost, Unit of Measure and an unnamed fifth header (the new column; Caption blank). Values: dumbbell (Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, UM `EA`, new column `Each`); eggs (`eggs`, `cage free`, `6.99`, `DZ`, `Dozen`); guitar (`guitar`, `natural acoustic`, `129.99`, `EA`, `Each`). These match the expected Each, Dozen, Each. LIMITATION: the grid pane is too narrow to show the fifth column in any screenshot (one read-only scroll click moved the content but did not reveal it); the values are from the accessibility tree, not from pixels. No record was edited, no runtime Save, no splitter move, no dialog left open; Save remains disabled. The Designer tab was not interacted with in T9. Section 0g gives the readbacks, counts and limits.**

**Earlier status (T8, 2026-10-13): AC-5 MET for one same-session Designer close and reopen. The clean FX_Items Form was closed once with its own tab close control (no prompt; the canvas emptied) and reopened once through the toolbar Open (`Design`, tooltip `Open`) and Select Form (one row FX_Items / FX_Items; OK once). The reopened Form is FX_Items, Version `User version for user …`, User scope, Save and Undo disabled. Five grid columns in order after the reopen: FX_ItemGridCol (1), FX_DescriptionGridCol (2), FX_CostGridCol (3), FX_UMGridCol (4), FX_UMsDescriptionGridCol (0 in the Tab column). The new column reads Type GridColumn, Binding Type `Property`, Binding `object.FX_UMsDescription`, Caption blank, Size `12.5; 5.88235294117647`, Location `0; 0`. The Components-list Data Source cell, blank before the close, now shows `object.FX_UMsDescription`. Pane (01) has the same 12 components. One failed click on a stale tab-strip ref (intercepted; nothing executed) was recovered with one fresh snapshot and one corrected click. Designer Save count stays 1. Runtime (AC-6) NOT performed. Section 0f gives the readbacks and counts. Same-session close/reopen only; not cross-session durability.**

**Earlier status (T7, 2026-10-13): ONE Designer Save performed (toolbar Save, once). Native response: toast `Save` / `Form [FX_Items] and global object(s) were saved.` (screenshot `t7-02`). Immediately after: Save, Regenerate Form, Undo and Redo all DISABLED (accessibility). FX_Items User scope, no dialog. The new column reads back after the Save: Name `FX_UMsDescriptionGridCol`, Type GridColumn, Binding Type `Property`, Binding `object.FX_UMsDescription`, Caption blank, Size `12.5; 5.88235294117647`, Location `0; 0`. The four original columns are unchanged in order, Caption and Binding. The Components-list Data Source cell of the new column is still BLANK after the Save (recorded, not forced). Close/reopen (AC-5) and the runtime check (AC-6) were NOT performed (outside T7). The Save result is observed in this session only; it is not cross-session durability. Section 0e gives the readbacks, counts and open items.**

**Earlier status (T6, 2026-10-13): the binding of FX_UMsDescriptionGridCol is SET and read back: Binding Type `Property`, Binding `object.FX_UMsDescription` (one binding selection from the picker, which explicitly lists `object.FX_UMsDescription` separately from `object.FX_UM`). Caption blank, Size `12.5; 5.88235294117647`, Location `0; 0` (unchanged defaults). The four original columns are unchanged in order, Caption (T1 baseline) and Binding (Components list). The Form is DIRTY and UNSAVED (Save and Undo enabled). Zero Designer Save; zero close/reopen; zero runtime; zero dialog OK. Section 0d gives the readbacks, the auto-assigned `object._ItemId` observation, the counts and the open items. Next step (needs its own authorization): one Designer Save.**

**Earlier status (T5, 2026-10-13): the pending row was RENAMED and the dialog was confirmed with OK exactly once. The Form is now DIRTY and UNSAVED (Save enabled). The Components list shows `FX_UMsDescriptionGridCol` after `FX_UMGridCol`, with Data Source blank (binding NOT yet set). Zero Designer Save; zero binding; zero close/reopen; zero runtime work. Section 0c gives the readbacks, native response, counts and the open items. Next step (needs its own authorization): set Binding Type `Property` and Binding `FX_UMsDescription` on the new column, read its Caption/Size/Location defaults, then one Designer Save.**

**Earlier status (T4, 2026-10-13): ONE New (`+`) activation performed; it produced exactly one new GridColumn row at index 4, directly after FX_UMGridCol, auto-named `gridColumn1_USER`. The four original rows are unchanged. The Contained Components dialog is LEFT OPEN with the uncommitted row (no rename, no OK, no binding, no Designer Save, no close/reopen). The `New` control is treated as the candidate Add equivalent, NOT as established product behaviour. Section 0b gives the readbacks and the counts. Next decision: the operator must decide whether to rename this row (FX_UMsDescriptionGridCol) and then confirm OK, or to Cancel it. Cancelling discards the pending row and must be approved.**

**Earlier status (T3, 2026-10-13): BLOCKED before Add. The dialog's `+` icon tooltip reads `New`, not `Add`, so it could not be identified safely as the Add control. The dialog was reopened, read, and dismissed with Cancel with no change. No column was added, named, bound or saved. Zero Add, zero OK, zero binding, zero Designer Save. Section 0a below gives the T3 readbacks and counts.**

**Earlier status (T2, 2026-10-13): Edit Grid Columns LOCATED and opened once; dialog read; dismissed with Cancel; NO change made.** The control is the unlabelled blue icon at the top-left of the canvas grid (viewport about x 271, y 115), tooltip **`Edit grid column(s)`**. The dialog is titled **`Contained Components`**. Its accessibility tree exposes no name for the icon, which is why the T1 accessibility find missed it. Save and Undo stayed disabled before and after. Add, OK, binding, Designer Save, close/reopen and runtime steps were **not** performed (T2 scope). AC-1 is now met except the runtime-independent checks. The mutation steps (AC-2 to AC-6) remain to be performed in a later task, which needs its own authorization. Nothing is replay_verified. Findings are observed only.

## 0i. T11 — final documentation; BLOCKED at AC-6 screenshot criterion (cycle 12, task T11)

Task message `c3ea5d88-cb02-4675-ae8b-33e5c50014a6`, worker session `8144a650-5254-4770-bac0-bc40325571fa`. **Zero browser calls; zero Mongoose changes.** Full report: `evidence/EXP-068-R2/T11-final-blocked-report.md`.

- **Acceptance:** AC-1 supported (tooltip `Edit grid column(s)`; dialog `Contained Components`; route a coordinate click on the top-left icon of the canvas grid; four originals 1–4 with Captions and Bindings). AC-2 supported with the caveat that the control's tooltip reads `New`. AC-3 supported (Caption blank; Size `12.5; 5.88235294117647`; Location `0; 0`; Binding Type `Property`; Binding `object.FX_UMsDescription`). AC-4 supported (toast `Form [FX_Items] and global object(s) were saved.`, screenshot-only; Save disabled after). AC-5 supported (same-session close and reopen; column present after FX_UMGridCol with its binding). **AC-6 FAILED on the screenshot criterion** (no screenshot shows the fifth column or its values). **AC-6's accessibility functional observation succeeded**: dumbbell Each, eggs Dozen, guitar Each. AC-7 supported to the extent of the readbacks and audit. AC-8 documentation complete; overall acceptance not claimed.
- **Scrollbar and splitter:** the scrollbar thumb was not positively identified; no drag was made in T10; no action targeted the splitter.
- **Reconciled browser calls:** T1 56, T2 11, T3 10, T4 13, T5 17, T6 40, T7 36, T8 45, T9 27, T10 6, T11 0. **Total 261.**
- **Mutations (cumulative):** New/Add 1; Edit Grid Columns OK 1; column rename 1; Binding Type selection 1; binding selection 1; Designer Save 1; Designer close/reopen 1/1; runtime close/reopen 1/1; runtime Save 0; record edits 0; unloads 0; other component edits 0; re-login 0.
- **Worker-authored screenshots:** 46 PNGs in `evidence/EXP-068-R2/` (T1 8, T2 4, T3 4, T4 4, T5 4, T6 7, T7 3, T8 6, T9 5, T10 1). Harness-written: `harness-audit-T1` to `T10`. Not this run: `evidence/EXP-068/` and the earlier `experiments/EXP-068-hello-world-…md` (run `R-20261013-094425-Rjnr`).
- **Final state:** runtime FX_Items open, clean, record 1 of 3, no dialog (last observed T10). Designer FX_Items clean, column saved, no dialog.
- **Unresolved, observed only (causes not assigned):** Undo accessibility state after T5 vs its icon; the Data Source display lag cleared after the T8 reopen; Designer console 2 → 3 errors and Web Client 7 errors / 3 warnings (not read); runtime FX_Items already open at T9 start; toast screenshot-only; coordinate-based route to the Edit grid column(s) control.
- **Not replay_verified.** Same-session close/reopen only; no cross-session durability claimed.

**Recommendation for the coordinator:** keep the experiment BLOCKED at AC-6's screenshot criterion. Either waive the screenshot requirement (operator decision, accepting the accessibility readback), or authorise a visual route (a wider runtime view, or one scroll with a positively identified scrollbar element) in a separate task.

## 0h. T10 — single visual-evidence inspection for AC-6; scroll not performed (cycle 11, task T10)

Task message `3f1f11c8-508a-4be1-962e-b7d1caa4bf5a`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Tabs:** list before any select. Tab 0 Designer was reported "(current)" by the list; tab 1 Web Client was selected explicitly (succeeded).
- **Designer (observed, not interacted with):** the first untargeted snapshot was taken while tab 0 was the reported current tab, before the Web Client select. It shows FX_Items, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save and Undo `[disabled]`, Regenerate Form `[disabled]`, Properties header `FX_UMGridCol (GridColumn)`, no dialog. The Designer remains clean with the column saved in T7 and reopened in T8.
- **Runtime (tab 1, after select; `t10-01`):** the Web Client's Explorer view with the FX_Items runtime Form open on record 1 of 3 (`dumbbell`). Status `(Object 1 of 3)`. Save `[disabled]`. The Description textbox holds the Form's default focus with its text `45 pound iron` (not edited). Accessibility grid readback (verbatim): headers `Item`, `Description`, `Cost`, `Unit of Measure`, and an unnamed fifth header; row cells dumbbell `45 pound iron` `45.00` `EA` `Each`; eggs `cage free` `6.99` `DZ` `Dozen`; guitar `natural acoustic` `129.99` `EA` `Each`. Identical to T9.
- **Scrollbar identification:** the grid pane is about 90 px wide (x 300–388). The only horizontal bar is at the bottom of the grid (y ≈ 896) with arrows at about x 308 and 380; a small mark at about x 368 may be the thumb. The brief's splitter grip (`⁞`) is at about (393, 520). The accessibility find for `scroll|splitter|slider|thumb` returned no match. The bar's thumb extent and its relation to the grid's own frame could not be confirmed, so the identification is NOT positive. **No drag, scroll, click or wheel was performed in T10.**
- **Screenshot criterion (AC-6):** `t10-01` does not show the fifth column or the values Each, Dozen or Each (the Item column is clipped to `bell` at row 1; rows 2–3 show no text). No screenshot in this experiment shows the new column's values. **AC-6's screenshot criterion is NOT met.** The accessibility readback (§0g and above) is the only evidence of the values.
- **Not performed:** no scroll or drag; no splitter movement; no record edit; no focus change into an editable cell; no runtime Save; no Designer Save; no close or reopen of either Form; no unload; no dialog opened; no Designer interaction.
- **Final state:** tab 1 (Web Client) current; runtime FX_Items open, record 1 of 3, clean (Save disabled), no dialog. Designer clean (tab 0, not interacted with beyond the read-only snapshot).

**T10 counts (this task, exact):** tab lists 1; tab selects 1; snapshots 2 (untargeted; one of them of the Designer tab); screenshots 1 (`t10-01`); finds 1 (accessibility scrollbar check); element clicks 0; coordinate clicks 0; drags 0; wheel 0; key presses 0; typed 0. **Total T10 browser calls: 6** (tabs list 1 + snapshot 1 + tab select 1 + screenshot 1 + snapshot 1 + find 1).

**Cumulative browser calls (T1–T10): 255 + 6 = 261.**

**Cumulative lifecycle and mutation counts (T1–T10) are unchanged from §0g:** Designer Save 1; Designer close 1 / reopen 1; runtime close 1 / reopen 1; runtime Save 0; record edits 0; Edit Grid Columns OK 1; New (`+`) 1; binding selections 1; unloads 0; re-login 0.

**Worker-written files (T10):** `evidence/EXP-068-R2/t10-01-webclient-runtime-state-before-scroll-attempt.png`; this record (updated). The experiment is not finalised; the coordinator must decide whether a visual-evidence route (for example a wider view or an authorised scroll) is needed for AC-6's screenshot criterion.

## 0g. T9 — runtime FX_Items close once and reopen once; grid values read (AC-6) (cycle 10, task T9)

Task message `d9992e9b-e353-4128-a473-5d02970be493`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Designer preservation:** the Designer tab (tab 0) was not clicked, typed in, or saved in T9. Its last state (T8) is clean FX_Items.
- **Tabs:** list before any select (tab 0 Designer current; tab 1 Web Client). Select tab 1 succeeded. Fresh snapshot: Web Client Explorer view inside the Mongoose iframe; no Session Expired modal and no sign-in page; **a runtime FX_Items Form was already open** (not closed by any action in T1–T8; cause of its presence not established, and the Form had been opened before the Designer Save).
- **Pre-close runtime state (`t9-01`):** tab FX_Items; record 1 of 3 (dumbbell); Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`, Description (edit, UM description) `Each`. The Description textbox had focus with its text selected (no typing). Grid column headers (accessibility, verbatim): **Item, Description, Cost, Unit of Measure** (no fifth column header). Save `[disabled]`. Status `Description (Object 1 of 3)`.
- **Clean check and focus (one click):** a single click on empty form space (1200, 700) moved focus off the Description field. Result: Description no longer active; the value is still `45 pound iron`; Save `[disabled]`; no dialog (`find` read, `t9-01`/ find). No record was edited.
- **Close (one; native response):** the Form's own control `Close Panel FX_Items` (in the Form tab's tablist). **Native response: no prompt, no message; the FX_Items tab closed and the Explorer view reappeared** (`t9-02`). The Mongoose application tab (`Close tab Mongoose`) was not touched.
- **Reopen (one):** Form menu (navigation `Form`) → menu item `Open` → Select Form dialog with one row `FX_Items / FX_Items` (Filter `FX_Items`) → row selected once → `OK` once. Native result: the FX_Items tab reopened; no message; the status bar showed `Description (Object 1 of 3)` (`t9-03`).
- **Runtime grid headers after reopen (accessibility, verbatim):** `Item`, `Description`, `Cost`, `Unit of Measure`, and an **unnamed fifth columnheader** (the new column; its Caption is blank, consistent with the Designer readback). The fifth header is the new FX_UMsDescriptionGridCol column; the existing `Unit of Measure` column is distinct (EA/DZ values).
- **Runtime records and new-column values (accessibility readback; the record grid is in the Form):**
  - Record dumbbell: Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; Unit of Measure `EA`; **new column `Each`** (expected Each: match).
  - Record eggs: Item `eggs`; Description `cage free`; Cost `6.99`; Unit of Measure `DZ`; **new column `Dozen`** (expected Dozen: match).
  - Record guitar: Item `guitar`; Description `natural acoustic`; Cost `129.99`; Unit of Measure `EA`; **new column `Each`** (expected Each: match).
  - Edit field under the Form for the currently selected record (dumbbell): `Each` (consistent).
- **Read-only scrolling:** one mouse-wheel deltaX 400 over the grid (no visible change) and one click on the grid's right horizontal-scroll arrow (379, 896). The second moved the content of the narrow grid pane (the `Item` column now shows `bell`) but did not reveal the fifth column. The splitter was not moved. The status bar then read `(Object 1 of 3)` (a status display change, not a record change).
- **Final runtime state:** Save `[disabled]`; no dialog; the Description textbox has focus again (the Form's default focus on open; value unchanged `45 pound iron`); no record was edited; no runtime Save; no import or export.

**Limitation (decisive):** the runtime grid pane is about 90 px wide, so the fifth column is not visible in any screenshot. `t9-03` and `t9-04` show only the Item column. The new column's values are read from the accessibility tree, not from pixels. The screenshots therefore do not show the three values.

**T9 counts (this task, exact):** tab lists 1; tab selects 1; snapshots 1 (untargeted); finds 11; screenshots 5 (`t9-01` to `t9-05`); element clicks 5 (Close Panel FX_Items; Form menu; Open menu item; FX_Items row; OK); coordinate clicks 2 (blank-area focus; grid scroll arrow); wheel 1; key presses 0; typed entries 0; hovers 0; waits 0; drags 0. **Total T9 browser calls: 27** (2 + 1 + 5 + 11 + 7 + 1).

**Cumulative browser calls (T1–T9): 56 + 11 + 10 + 13 + 17 + 40 + 36 + 45 + 27 = 255.**

**Lifecycle and mutation counts (T9):** runtime close 1 (native: closed, no prompt); runtime reopen 1 (Form > Open > Select Form, OK once); runtime Save 0; record edits 0; typed entries 0; Designer Save 0 (cumulative stays 1, from T7); Designer close/reopen 0 (cumulative 1/1, from T8); unloads 0; re-login 0; dialogs left open 0.

**Cumulative (T1–T9):** Edit Grid Columns dialog opened 3 (cancelled 2); OK 1; New (`+`) activations 1; column created 1; renamed 1; Binding Type set 1; binding selections 1; Designer Save 1; Designer close 1 / reopen 1; runtime close 1 / reopen 1; unloads 0; Caption, Size or Location edits 0; other changes 0; record edits 0; re-login 0.

**Worker-written files (T9):** `evidence/EXP-068-R2/t9-01-webclient-state-before-runtime-action.png` (pre-action runtime state; the Item/Description/Edit values visible; the grid shows only Item); `t9-02-after-runtime-form-close-native-response.png` (Explorer after close, no prompt); `t9-03-runtime-fx_items-reopened-grid-with-new-column.png` (reopened; the new column NOT visible); `t9-04-runtime-grid-after-readonly-horizontal-scroll-five-columns.png` (after wheel scroll; column NOT visible); `t9-05-runtime-grid-after-one-readonly-scroll-click.png` (after arrow click; column NOT visible); this record (updated).

**Decisive evidence (T9):**
- `t9-01`: pre-close runtime FX_Items, record dumbbell, Description focus; supports the pre-close state and the no-prompt precondition. It does not show the header list (read by accessibility: no fifth header).
- `t9-02`: Explorer after the close; supports the native close response (no prompt). It does not prove the Form was clean at close beyond the Save-disabled reading.
- `t9-03`: reopened runtime FX_Items on record 1 of 3; supports AC-6 identity and reopen. It does NOT show the new column or its values (pane too narrow).
- `t9-04` and `t9-05`: read-only scroll states; they do not show the new column. They support only that the scroll did not change records (status and the Item text unchanged).
- The accessibility readbacks (not images) carry the header and value evidence for AC-6.

**Acceptance (T9):** AC-1 to AC-5 supported (T1–T8). **AC-6 met on the accessibility readback:** the runtime Form closed once and reopened once; the grid headers recorded; the new column values for dumbbell (`Each`), eggs (`Dozen`) and guitar (`Each`) match the expectation. Visual confirmation by screenshot is NOT available (pane too narrow). AC-7 supported for T9 (no record, component or other change; no dialog left open; Designer untouched). AC-8: the replay steps are complete with the AC-6 limitation; the final report is in this record (sections 0a–0g) and the matrix below.

**Final acceptance matrix (EXP-068-R2):**

| AC | Status | Decisive evidence (files) | Limitation |
| --- | --- | --- | --- |
| AC-1 | met | `t1-01`, `t1-02`, `t2-02`, `t2-03`, `t3-01`, `t3-02`, `t4-01` | Designer baseline and labels from one session |
| AC-2 | met (one Add: New `+`) | `t4-01` (before), `t4-03` (new row), `t5-01`, `t5-03` (named), `t5-04` (after OK) | The `+` tooltip reads `New`; its equivalence to Add is a candidate procedure |
| AC-3 | met | `t6-01`, `t6-05`, `t6-07`, `t7-01`, `t7-03`, `t8-06` | Binding readbacks from accessibility; Size/Location read unchanged |
| AC-4 | met | `t7-02` (toast), `t7-03` (Save disabled) | Toast is screenshot-only; Save-disabled read from accessibility |
| AC-5 | met (same-session) | `t8-01`, `t8-02`, `t8-03`, `t8-04`, `t8-05`, `t8-06` | Same-session close/reopen only |
| AC-6 | met (accessibility) | `t9-01`, `t9-02`, `t9-03` (identity), readbacks in §0g | New column not visible in any screenshot (narrow grid pane) |
| AC-7 | met | audit above; `t9-03`–`t9-05` | Server-side and non-EXP objects not audited |
| AC-8 | this record | counts §0a–§0g | — |

**Exact cumulative audit for AC-8 (T1–T9):** Edit Grid Columns: opened 3, Add (`+`) 1, dialog OK 1, dialog Cancel 2; column add 1, rename 1, bind 1 (binding selections 1); Designer Save 1; Designer close 1, reopen 1; runtime close 1, reopen 1; runtime Save 0; unloads 0; other component changes 0; record edits 0; re-login 0; browser calls 255.

**Open items (after T9):** (1) the fifth column is not visible in any runtime screenshot; a visual confirmation would need a wider grid or a different view, which the brief did not authorise; (2) the blank header of the new column is the blank Caption, observed; (3) the Web Client console error count (7 errors) was not read; (4) cross-session durability is not established.

## 0f. T8 — one Designer close and one reopen (AC-5); no Save (cycle 9, task T8)

Task message `a4a89d61-36f1-433d-8c3d-0f935ddc65bf`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any select (tab 0 Designer current; tab 1 Web Client; no select needed). Fresh snapshot: FX_Items the only Form tab; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save, Regenerate Form, Undo and Redo disabled; no dialog; no active editor. Five grid columns (Components list): FX_ItemGridCol (1), FX_DescriptionGridCol (2), FX_CostGridCol (3), FX_UMGridCol (4), FX_UMsDescriptionGridCol (0). Pre-close screenshot `t8-01`: the new column's Data Source cell BLANK (the list is scrolled so the fifth row is at the bottom of the visible area).
- **Close (one; not retried):** a click on the Form tab's own close control (`closable FX_Items`). First attempt: the snapshot ref e253 had changed meaning (it resolved to a grid header) and the click was intercepted by the selection adorner; **nothing was executed** (the Form stayed open and clean). Recovery: one fresh untargeted snapshot (the recovery allowance for this task), then one corrected click on the current ref of `closable FX_Items` (e247). **Native response:** no prompt, no dialog, no message. The `FX_Items` tab disappeared, the URL lost `MGForm=FX_Items`, and the canvas emptied (Properties showed the empty Form tab). Screenshot `t8-02`.
- **Reopen (one):** toolbar `Design` button (tooltip `Open`) → Select Form dialog, one row `FX_Items / FX_Items`, Filter `FX_Items` (screenshot `t8-03`). The row was clicked once and OK once. Native result: the FX_Items tab reappeared; the URL carried `MGForm=FX_Items` again; no message. Screenshot `t8-04`.
- **Reopened identity:** tab heading FX_Items; Properties Name `FX_Items`; Version `User version for us…` (User scope); Device Type Default; Form Type Normal; Is Master True; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo disabled; no dialog. The Details panel reopened collapsed (view state; expanded once).
- **Components after reopen (Components tab; Pane (00) expanded by view clicks and the Components Expand control):**
  - FormCollectionGrid (Grid, objects, Tab 0).
  - FX_ItemGridCol: GridColumn, `object.FX_Item`, Tab 1. Caption `FX_sItem`.
  - FX_DescriptionGridCol: GridColumn, `object.FX_Description`, Tab 2. Caption `FX_sDescription`.
  - FX_CostGridCol: GridColumn, `object.FX_Cost`, Tab 3. Caption `FX_sCost`.
  - FX_UMGridCol: GridColumn, `object.FX_UM`, Tab 4. Caption `FX_sUM`.
  - **FX_UMsDescriptionGridCol: GridColumn, `object.FX_UMsDescription`, Tab 0, directly after FX_UMGridCol** (screenshot `t8-05`).
  - Pane (01): 12 components, the same as before the close (FX_PictureStatic, FX_RefreshButton, FX_UMsDescriptionEdit, FX_UMsDescriptionStatic, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox). No unintended component.
- **New column Properties after reopen (fifth row selected, view only; screenshot `t8-06`):** Name `FX_UMsDescriptionGridCol`; Type `GridColumn`; From Device Master `True`; Caption blank; Binding Type `Property`; Binding `object.FX_UMsDescription`; Size `12.5; 5.88235294117647`; Location `0; 0`.
- **Four original columns after reopen (each selected once; Caption read in Properties):** FX_ItemGridCol `FX_sItem` / `object.FX_Item`; FX_DescriptionGridCol `FX_sDescription` / `object.FX_Description`; FX_CostGridCol `FX_sCost` / `object.FX_Cost`; FX_UMGridCol `FX_sUM` / `object.FX_UM`. All match the T1 baseline and the pre-close state. Order unchanged.
- **Data Source cell (explicit report):** the new column's Components-list Data Source cell was **blank before the close** (`t8-01`) and **shows `object.FX_UMsDescription` after the reopen** (`t8-05`, and the tree row). The display lag recorded in T6 and T7 cleared through the close/reopen. No forced refresh was made.
- **Not performed:** no Designer Save (count stays 1, from T7); no Add/New; no dialog OK in the Edit Grid Columns dialog; no binding or property change; no Undo; no runtime interaction; no unload; no regenerate; no Delete; no splitter move; no Form Designer state change beyond the close and reopen.

**T8 counts (this task, exact):** tab lists 1; tab selects 0; untargeted snapshots 3 (the gate; the recovery snapshot after the stale ref; the pre-reopen snapshot); finds 21; screenshots 6 (`t8-01` to `t8-06`); element clicks 14 (13 executed: close, Design, Select Form row, OK, Details expand, Components tab, Pane (00) select, Components Expand, new-column row, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol rows; 1 failed attempt that did not execute: the stale tab-strip ref e253). Coordinate clicks 0; key presses 0; typed 0; hovers 0; waits 0; wheel 0; drags 0. **Total T8 browser calls: 45** (1 + 3 + 6 + 21 + 14).

**Cumulative browser calls (T1–T8): 56 + 11 + 10 + 13 + 17 + 40 + 36 + 45 = 228.**

**Designer close/reopen counts (cumulative):** Designer close 1 (T8); Designer reopen 1 (T8, via Open → Select Form → OK). The earlier Form tab was not closed in T1–T7.

**Cumulative mutation and lifecycle counts (T1–T8):**
- Edit Grid Columns dialog opened 3 (T2, T3, T4); cancelled 2 (T2, T3); confirmed with OK 1 (T5).
- New (`+`) activations 1 (T4). Add budget consumed.
- Column created 1 (T4); renamed 1 (T5).
- Binding Type set 1 (T6); binding selections 1 (T6).
- Designer Save **1** (T7). Designer close 1 / reopen 1 (T8). Runtime close/reopen 0 / 0. Runtime inspection 0. Unloads 0 / 0. Undo 0. Caption, Size or Location edits 0. Other component, property, string, preference or object change 0. Record edits 0. Check-in / undo checkout 0 / 0. Browser JavaScript, console or network inspection 0 (the Designer console counter moved 2 → 3 at T7 and 3 errors now; not read). Direct URL navigation, refresh or restart 0 / 0 / 0. Delete 0. Re-login **0**.

**Worker-written files (T8):** `evidence/EXP-068-R2/t8-01-pre-close-clean-fx_items-five-columns-save-disabled.png` (pre-close; Data Source blank); `t8-02-after-close-form-tab-closed-no-prompt.png` (after close; canvas empty); `t8-03-select-form-dialog-one-row-fx_items-before-selection.png` (Select Form, one row); `t8-04-after-reopen-fx_items-designer-identity-user-scope-clean.png` (reopened identity); `t8-05-after-reopen-components-list-five-columns-datasource.png` (five columns; the list is clipped, so the fifth row is confirmed by the accessibility tree and the post-reopen Data Source value); `t8-06-after-reopen-fifth-column-selected-properties.png` (fifth-column selection; Name header; Caption blank; the Binding value is confirmed by the accessibility readback); this record (updated).

**Decisive evidence (T8):**
- `t8-01`: pre-close FX_Items clean, the new column selected with blank Data Source in the list. Supports the pre-close gate. Does not show Caption/Binding of the originals (read by accessibility).
- `t8-02`: after close: no prompt; the canvas is empty; the Designer tab remains. Supports AC-5 close (once) and the no-prompt response. Does not prove the server-side state.
- `t8-03`: the Select Form dialog with one row FX_Items / FX_Items. Supports the reopen route and identity. Does not show the Designer after OK.
- `t8-04`: reopened FX_Items, Version `User version for us…`, User scope footer, Save and Undo greyed. Supports AC-5 reopen and identity/scope/clean state.
- `t8-05`: the Components grid after reopen: the five columns in order visible at the top (the new row is below the visible area; confirmed by the tree rows read in the accessibility tree and the post-reopen Data Source value). Supports AC-5 order only partially in the image; the row order is established from the tree.
- `t8-06`: the fifth column selected after reopen; Name header `FX_UMsDescriptionGridCol (GridColumn)`; Type GridColumn; Caption blank; Data Source cell `object.FX_UMsDescri…`. Supports AC-3 readback after reopen. Size, Location and the full Binding value come from the accessibility readback.

**Acceptance (T8):** AC-1 supported (T1–T8). AC-2 met (T5). AC-3 met after reopen (Binding Type Property, Binding `object.FX_UMsDescription`; Caption blank, Size and Location unchanged; four originals unchanged). AC-4 met (one Save, T7). **AC-5 met for one same-session close and reopen** (the clean Designer Form closed once and reopened once; FX_UMsDescriptionGridCol present after FX_UMGridCol with its binding). AC-6 **not attempted** (runtime is the next step). AC-7 supported for T8 (no other change; no unload; no dialog left open). AC-8 not met (AC-6 pending).

**Limitations:** the reopen is same-session (the same browser session and the same Designer tab). It is a weak persistence boundary. It does not establish cross-session durability or a database read. The Caption and Size checks used the accessibility tree; the Designer's Properties panel did not show the full Binding text in a screenshot.

**Open items:** (1) AC-6 needs authorization: runtime close (if open) and reopen through Form > Open > Select Form; then the grid headers and the Each, Dozen, Each values. (2) The Designer console error count rose (2 → 3 at T7; 3 now) and was not read. (3) The toast from T7 was screenshot-only.

## 0e. T7 — pre-Save verification; exactly one Designer Save (cycle 8, task T7)

Task message `f5e53d41-fe69-47bc-bba3-55da31d0c1fe`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any select (tab 0 Designer current; tab 1 Web Client; no select needed). Fresh snapshot: tab FX_Items; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo enabled (dirty); Redo disabled; no dialog; no active editor (the only focused item was a Pane tree row).
- **Five grid columns in order (Components list, accessibility):** FormCollectionGrid (Grid, Tab 0) → FX_ItemGridCol (Tab 1, `object.FX_Item`) → FX_DescriptionGridCol (Tab 2, `object.FX_Description`) → FX_CostGridCol (Tab 3, `object.FX_Cost`) → FX_UMGridCol (Tab 4, `object.FX_UM`) → FX_UMsDescriptionGridCol (GridColumn, Tab 0, Data Source blank in the list).
- **Original Captions (view-only row selections, one per column; `find Caption`):** FX_ItemGridCol `FX_sItem`; FX_DescriptionGridCol `FX_sDescription`; FX_CostGridCol `FX_sCost`; FX_UMGridCol `FX_sUM`. All match the T1 baseline. Bindings match the list above.
- **Pane (01) components (after expanding the collapsed Pane (01) branch by a view click):** 12 rows: FX_PictureStatic (Static, `object.FX_Picture`), FX_RefreshButton (PushButton, Event FX_ImportPicture), FX_UMsDescriptionEdit (Edit, `object.FX_UMsDescription`), FX_UMsDescriptionStatic (Static), FX_ItemStatic, FX_ItemEdit (`object.FX_Item`), FX_DescriptionStatic, FX_DescriptionEdit (`object.FX_Description`), FX_CostStatic, FX_CostEdit (`object.FX_Cost`), FX_UMStatic, FX_UMCombobox (ComboBox, `object.FX_UM`). No unintended component found. Total tree entries: 20 (2 panes, 1 grid, 5 grid columns, 12 Pane 01 components); the T6 count was 19 plus the new column.
- **New column readback before Save (Properties, `t7-01`):** Name `FX_UMsDescriptionGridCol`; Type `GridColumn`; Caption blank; Binding Type `Property`; Binding `object.FX_UMsDescription`; Size `12.5; 5.88235294117647`; Location `0; 0`.
- **Save (exactly one; not retried):** the Designer top-toolbar Save (not the trash, not Delete Form Definition).
- **Native response (verbatim, screenshot `t7-02`):** toast heading `Save`; body `Form [FX_Items] and global object(s) were saved.` (with a close control on the toast).
- **Immediately after Save (accessibility, read-only):** Save `[disabled]`; Regenerate Form `[disabled]`; Undo `[disabled]`; Redo `[disabled]`. The toast was visible in the screenshot but was NOT found in the accessibility tree by a later text find (`were saved`), so the toast is screenshot-only evidence.
- **Post-Save identity and columns:** FX_Items (tab heading); User scope footer; the five columns unchanged; the Components list shows FX_UMsDescriptionGridCol after FX_UMGridCol with Tab 0 and a blank Data Source cell (`t7-03`).
- **Post-Save new-column Properties (after selecting its row, view-only; `t7-03`):** Name `FX_UMsDescriptionGridCol`; Binding Type `Property`; Binding `object.FX_UMsDescription` (accessibility); Caption blank; Size `12.5; 5.88235294117647`; Location `0; 0`.
- **Not performed (by instruction or stop rules):** no second Save; no Undo; no Add/New; no dialog OK or Cancel; no Form close/reopen; no runtime; no unload; no regenerate; no binding or property edit; no splitter move; no Delete; no forced refresh of the Components-list Data Source cell.
- **Observation (not investigated):** the page's console-error counter changed from 2 to 3 after the Pane (01) view click. The console was not read (out of scope). Cause not established.

**T7 counts (this task, exact):** tab lists 1; tab selects 0; untargeted snapshots 1 (the gate); finds 24; element clicks 7 (4 original-column row selections; 1 Pane (01) expand; 1 new-column row selection after Save; 1 Save); coordinate clicks 0; key presses 0; typed entries 0; hovers 0; waits 0; wheel 0; drags 0; screenshots 3 (`t7-01`, `t7-02`, `t7-03`). **Total T7 browser calls: 36.**

**Cumulative browser calls (T1–T7): 56 + 11 + 10 + 13 + 17 + 40 + 36 = 183.**

**Designer Save count (cumulative): 1 (T7).** Save retries 0.

**Cumulative mutation and lifecycle counts (T1–T7):**
- Edit Grid Columns dialog opened 3 (T2, T3, T4); cancelled 2 (T2, T3); confirmed with OK 1 (T5).
- New (`+`) activations: 1 (T4). Add budget consumed.
- Column created 1 (`gridColumn1_USER`, T4); renamed 1 (T5, to `FX_UMsDescriptionGridCol`).
- Binding Type set 1 (`Property`, T6); binding selections 1 (`object.FX_UMsDescription`, T6; the auto-assigned `object._ItemId` was overwritten before any save).
- Caption, Size or Location edits 0.
- Designer Save **1** (T7). Designer close/reopen 0 / 0. Runtime close/reopen 0 / 0. Runtime inspection 0. Unloads 0 / 0. Undo 0. Other component, property, string, preference or object change 0. Record edits 0. Check-in / undo checkout 0 / 0. Browser JavaScript, console or network inspection 0 (the console counter was observed, not read). Direct URL navigation, refresh or restart 0 / 0 / 0. Delete (top toolbar or Components trash) 0. Re-login **0**.

**Worker-written files (T7):** `evidence/EXP-068-R2/t7-01-pre-save-new-column-properties-readback-dirty.png`; `t7-02-immediately-after-single-save-native-response.png`; `t7-03-post-save-new-column-selected-binding-readback-save-disabled.png`; this record (updated).

**Decisive evidence (T7):**
- `t7-01`: dirty FX_Items, User scope; Properties `FX_UMsDescriptionGridCol (GridColumn)`, Binding Type Property, Binding `object.FX_UMsDes…` (truncated; full value read by accessibility); Save enabled. Supports the pre-Save gate. Does not show Size/Location or the Captions of the originals (read by accessibility).
- `t7-02`: the native toast `Save — Form [FX_Items] and global object(s) were saved.` at the top right; Save icon greyed. Supports AC-4 native response (one Save). Does not prove the server-side state; the Save-disabled reading comes from the accessibility tree.
- `t7-03`: post-Save: Save icon greyed; FX_UMsDescriptionGridCol selected; Components list shows the new column after FX_UMGridCol with a blank Data Source cell; Properties Name `FX_UMsDescription…` (truncated). Supports AC-4 post-Save state and the blank Data Source display. Does not show the full Binding value (accessibility readback `object.FX_UMsDescription`).

**Acceptance (T7):**
- AC-1 supported (T1–T7).
- AC-2 met (T5).
- AC-3 met for the new column: Binding Type `Property`, Binding `object.FX_UMsDescription` (before and after Save); Caption blank, Size `12.5; 5.88235294117647`, Location `0; 0` (unchanged). The four originals unchanged in order, Caption and Binding. Other components unchanged (Pane 01 twelve rows).
- AC-4 **met for one Save**: exactly one Designer Save; native response recorded verbatim; Save disabled afterwards (accessibility). Save count 1.
- AC-5, AC-6 not attempted (close/reopen and runtime are later tasks).
- AC-7 supported for T7 (no other change; no unload; no dialog left open).
- AC-8 not met (replay incomplete; AC-5 and AC-6 pending).

**Open items:** (1) the Components-list Data Source cell of the new column is still blank after the Save; it must be read after the Designer close/reopen, which is the next authorized step; (2) the toast was seen only in the screenshot; (3) the console counter change (2 → 3) was not investigated; (4) cross-session durability is not established by a single Save.

## 0d. T6 — binding set to Property / object.FX_UMsDescription; defaults read; Form dirty, unsaved (cycle 7, task T6)

Task message `5808598e-38b0-47e9-a158-34a663e7b045`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any select (tab 0 Designer current; tab 1 Web Client). Fresh snapshot: FX_Items the only Form tab; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog; Save enabled (dirty). Components list (read from the accessibility tree): five GridColumn rows in order: FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol (Tab 4), FX_UMsDescriptionGridCol (after FX_UMGridCol). Tab 0 is the "current" tab; no tab select was needed.
- **Select the new row (1 click, its Components-list treeitem):** Properties header `FX_UMsDescriptionGridCol (GridColumn)`; Name `FX_UMsDescriptionGridCol`; Type `GridColumn`; From Device Master `True`. (`t6-01`.)
- **Before-change readbacks (read-only; the Data Source and Layout groups were expanded by view clicks):**
  - Caption: blank.
  - Size: `12.5; 5.88235294117647`.
  - Location: `0; 0`.
  - Binding Type: `None`. Binding: empty.
  - (`t6-02`.)
- **Binding Type → Property (1 selection):** the Binding Type combobox was activated (one click), its list opened by its arrow (one click; `t6-04` shows None, Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, ...). The `Property` option (one click). Readback (`t6-05`): Binding Type `Property`; Binding then empty.
- **Binding picker (see the observation below):** a click on the Binding trigger (`e1717`). The Binding field then showed **`object._ItemId`** (`t6-06`). The auto-assigned value was not chosen by the worker; the observation matches EXP-067-R2 (selecting Property auto-assigns `object._ItemId`). A second click on the same trigger's arrow opened the list. The list offered `object._ItemId` (selected), `object._ItemWarnings`, `object.CreateDate`, ..., `object.FX_Cost`, `object.FX_Description`, `object.FX_Item`, `object.FX_Picture`, `object.FX_UM`, **`object.FX_UMsDescription`**, `object.InWorkflow`, ... (accessibility options, 51 matches in the listbox).
- **Binding selection (1 of 1, the only binding selection):** the option `object.FX_UMsDescription` (distinct from `object.FX_UM`). Then one Tab press to commit. Readback (accessibility, `t6-07`): Binding `object.FX_UMsDescription`; Binding Type `Property`. The picker closed.
- **Post-change defaults (read-only, not edited):** Caption blank; Size `12.5; 5.88235294117647`; Location `0; 0`. These equal the pre-change readbacks. Tab (Components-list column): `0`. Required `False`, To Be Determined `False`, Upper or Lower Case `Mixed`, Default Value blank.
- **Components-list readback (`t6-07`):** the new row still shows its Data Source cell blank, while Properties shows `object.FX_UMsDescription`. This may be a display lag of the grid (the EXP-067-R2 notes record that a binding reaches the grid only after focus leaves the editor). Not forced; not fixed; to be read again after the Designer Save/close-reopen (T7+).
- **Four original columns (Components list, read-only; not re-selected):** FX_ItemGridCol (Pane 0, Tab 1, `object.FX_Item`); FX_DescriptionGridCol (Tab 2, `object.FX_Description`); FX_CostGridCol (Tab 3, `object.FX_Cost`); FX_UMGridCol (Tab 4, `object.FX_UM`). Order and bindings match the T1 baseline. Captions (`FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`) were not re-read in T6 (requires selecting each original row; not needed for the binding task; T1 readbacks stand). No other component was changed.
- **Toolbar state at end (snapshot, read-only):** Save enabled; Regenerate Form enabled; Undo **enabled** (no `disabled` attribute); Redo disabled. The T5 read of Undo as `[disabled]` after OK is therefore not reconciled as a stable reading: after the binding edits, Undo is active. Cause of the earlier read not established. Observed only.
- **Not performed (by instruction):** no Designer Save; no Undo; no New/Add; no dialog OK or Cancel; no Form close/reopen; no runtime; no unload; no record edit; no splitter move; no Delete.

**T6 counts (this task, exact):**
- Tab lists 1; tab selects 0; untargeted snapshots 1 (the fresh gate); finds 21; element clicks 9 (new-row treeitem; Layout treeitem; Data Source treeitem; Binding Type value; Binding Type arrow; Property option; Binding trigger; Binding arrow; object.FX_UMsDescription option); coordinate clicks 0; key presses 1 (Tab); typed entries 0; hovers 0; waits 0; wheel 0; drags 0; screenshots 7 (`t6-01` to `t6-07`).
- **Total T6 browser calls: 40** (1 + 1 + 21 + 9 + 1 + 7).
- **Cumulative browser calls (T1–T6): 56 + 11 + 10 + 13 + 17 + 40 = 147.**
- Binding selections (picker option chosen): **1** (`object.FX_UMsDescription`). Binding Type selections: 1 (`Property`).
- Auto-assigned value observed: `object._ItemId` on the Binding (unchosen; overwritten by the one binding selection before any save).
- Designer Save 0; dialog OK 0 (T6); Add/New 0 (T6; cumulative New activations 1 in T4); Undo 0; close/reopen 0 / 0; runtime close/reopen 0 / 0; unloads 0 / 0; other component, property, string, preference or object change 0; record edits 0; check-in / undo checkout 0; browser JavaScript, console or network inspection 0; direct URL navigation, refresh or restart 0; re-login **0**.

**Worker-written files (T6):** `evidence/EXP-068-R2/t6-01-before-change-new-column-selected-properties-components-list.png`; `t6-02-before-binding-change-properties-layout-and-data-source-expanded.png`; `t6-03-after-binding-type-value-click-check-dropdown-state.png`; `t6-04-binding-type-dropdown-open-options.png`; `t6-05-binding-type-property-selected-readback.png`; `t6-06-binding-picker-after-trigger-click-state.png`; `t6-07-binding-readback-property-and-fx_umsdescription-after-tab.png`; this record (updated).

**Decisive evidence (T6):**
- `t6-01`: the new row selected in the Components list; Properties header FX_UMsDescriptionGridCol (GridColumn); the four original rows visible above it. Supports AC-3 identity (Name, Type) and the list position. Does not show the Data Source or Layout values.
- `t6-02`: Data Source group expanded: Binding Type `None`, Binding empty, before the change. Supports the before-change readback (AC-3). Does not show Size/Location (read by accessibility).
- `t6-03`: Binding Type value editor active showing None. Supports the editor identification. Not a result image.
- `t6-04`: Binding Type list open: None, Variable, Property, ... Supports that Property is offered. Does not show the Binding list.
- `t6-05`: Binding Type `Property`; Binding blank. Supports AC-3 Binding Type.
- `t6-06`: after the Binding trigger click, Binding shows `object._ItemId` (the auto-assigned value) with the editor active. Supports the observation of the auto-assignment. Does not show the picker list (opened on the next click; its options are read by accessibility).
- `t6-07`: Binding `object.FX_UMsDescr…` (truncated in the image) with Binding Type `Property`; picker closed after Tab; Components-list Data Source blank. Supports the binding selection readback (AC-3). The full value `object.FX_UMsDescription` is confirmed by the accessibility readback, not by the truncated image. Does not prove commit to the server.

**Acceptance (T6):** AC-1 supported (T1–T5). AC-2 met (T5). **AC-3 met for the binding and the defaults:** Binding Type `Property`, Binding `object.FX_UMsDescription`; Caption, Size and Location read as blank, `12.5; 5.88235294117647`, `0; 0` and unchanged; the four originals unchanged in order and binding; no other component changed. AC-4 to AC-6 not attempted. AC-7 supported for T6 (no other change; no dialog left open). AC-8 not met (replay incomplete).

**Open items:** (1) one Designer Save (Save enabled); (2) reconcile the Components-list Data Source blank after the Save; (3) the T5 Undo `[disabled]` read is not reconciled; (4) the auto-assignment of `object._ItemId` when Property is selected is a candidate procedure (EXP-067-R2 and EXP-068-R2 both observed it); the correction to `FX_UMsDescription` is observed.

## 0c. T5 — Name changed to FX_UMsDescriptionGridCol; dialog OK once; column committed to the dialog (cycle 6, task T5)

Task message `ab292762-897c-46a5-a44c-3d9483474fbd`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any select (tab 0 Designer current; tab 1 Web Client). Fresh snapshot: FX_Items the only Form tab; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Designer Save and Undo disabled at start; the Contained Components dialog open (left by T4); no New invoked; no reopen. Screenshot `t5-01`: five rows in order: FX_ItemGridCol (0), FX_DescriptionGridCol (1), FX_CostGridCol (2), FX_UMGridCol (3), gridColumn1_USER (4, selected). Properties: Name `gridColumn1_USER`, Caption blank, Type GridColumn, From Device Master True.
- **Name editor (1 click):** the Name value cell (find ref e1451) clicked once. The editor opened with the text highlighted (`t5-02`). The active textbox ref (find `/textbox/`) was the one holding `gridColumn1_USER` (e1590).
- **Name change (1 fill):** `browser_type` into e1590 with exactly `FX_UMsDescriptionGridCol`. Result: the dialog Name readback reads `FX_UMsDescriptionGridCol`.
- **Commit (1 key press):** Tab once, to leave the editor. Readback (`t5-03`): Name `FX_UMsDescriptionGridCol`; list row 4 reads `FX_UMsDescriptionG...` (truncated by the column width); Caption still blank; no other property touched.
- **Pre-OK checks (read-only):** find `FX_UMsDescriptionGridCol` in the dialog: one list row at index 4 (`gridcell "FX_UMsDescriptionGridCol" [active]`, index `4`). The four originals in `t5-03`: FX_ItemGridCol (0), FX_DescriptionGridCol (1), FX_CostGridCol (2), FX_UMGridCol (3), unchanged. Exactly five rows.
- **Dialog OK (1 of 1):** the dialog's native OK (find ref e1577). **Native response (verbatim, as observed):** no message, toast or alert appeared; the `Contained Components` dialog closed and the Designer returned to the FX_Items canvas (`t5-04`). The response is recorded as "dialog closed, no message". It was not retried.
- **Post-OK Designer state:** the Components tree (behind the closed dialog) lists `FX_UMsDescriptionGridCol  GridColumn  [Data Source blank]  Pane 0  FormCollectionGrid  Tab 0` directly after `FX_UMGridCol  GridColumn  object.FX_UM  Pane 0  FormCollectionGrid  Tab 4`. The Form is now dirty: the Designer toolbar **Save is enabled** (the accessibility node has no `disabled` attribute, and the Regenerate Form node is enabled as well). **Undo and Redo are reported `[disabled]`** in the accessibility tree, while the Undo icon in `t5-04` appears active. This is an unresolved discrepancy between the accessibility state and the visual icon (the same kind of mismatch recorded in EXP-050). It is not used to decide anything.
- **Not performed (by instruction or by the stop rules):** no Designer Save (Save count 0); no binding (Binding Type and Binding not set; Data Source blank); no Caption, Size or Location edit; the Caption, Size and Location defaults of the new column were **not read** in T5 (only Caption blank and Type/From Device Master were visible in the dialog before the rename; the Layout group was not expanded); no second New; no Cancel; no Designer close/reopen; no runtime; no unload; no record edit; no splitter move.

**T5 counts (this task, exact):** tab lists 1; tab selects 0; snapshots 2 (1 untargeted; 1 targeted to the toolbar, `e11`); finds 6; screenshots 4 (`t5-01` to `t5-04`); element clicks 2 (Name value cell; dialog OK); typed entries 1 (Name fill); key presses 1 (Tab); hovers 0; waits 0; wheel 0; drags 0. **Total T5 browser calls: 17.**

**Cumulative browser calls (T1 + T2 + T3 + T4 + T5): 56 + 11 + 10 + 13 + 17 = 107.**

**Cumulative mutation and lifecycle counts (T1–T5):**
- Edit Grid Columns dialog opened 3 (T2, T3, T4); dismissed with Cancel 2 (T2, T3); confirmed with OK 1 (T5).
- New (`+`) activations: **1** (T4). Add budget consumed; no further New or Add.
- Dialog OK: **1** (T5).
- Column created: 1 (`gridColumn1_USER`, T4); column renamed: 1 (T5, to `FX_UMsDescriptionGridCol`).
- Binding selections 0. Binding Type set 0. Caption, Size or Location edits 0.
- Designer Save **0**. Designer close/reopen 0 / 0. Runtime close/reopen 0 / 0. Runtime inspection 0.
- Unloads (Web Client / Designer) 0 / 0. Other component, property, string, preference or object change 0. Record edits 0. Check-in / undo checkout 0 / 0. Browser JavaScript, console or network inspection 0. Direct URL navigation, refresh or restart 0 / 0 / 0. Delete (top toolbar or Components trash) 0.
- Session re-login: **0**.

**Worker-written files (T5):** `evidence/EXP-068-R2/t5-01-dialog-open-pending-row-before-rename.png`; `t5-02-name-value-cell-clicked-editor-state-before-typing.png`; `t5-03-after-name-typed-and-tab-readback.png`; `t5-04-after-single-ok-designer-state-component-list.png`; this record (updated).

**Decisive evidence (T5):**
- `t5-01`: five rows in order before the rename; row 4 `gridColumn1_USER` selected. Supports the pre-rename gate. Does not show the Layout defaults.
- `t5-02`: Name editor active with text highlighted, before the fill. Supports the editor identification. Does not show the typed value.
- `t5-03`: Name readback `FX_UMsDescriptionGridCol` in the properties; list row 4 truncated; originals unchanged. Supports the rename readback (AC-2 name, AC-3 partial). Does not show the full row name (truncated) or any Layout default.
- `t5-04`: dialog closed after one OK; Designer canvas with FX_Items; the Save icon appears enabled. Supports AC-2 (OK once) and the dirty state. The Components list row for the new column is read from the accessibility tree (not fully visible in the image: it is below the scroll position). Does not prove server-side commit, and does not show Save enabled beyond the accessibility read.

**Acceptance (T5):** AC-1 supported (T1–T4). AC-2 **met for the name and OK**: FX_UMGridCol was selected in T4; one New; one new column after it; renamed to FX_UMsDescriptionGridCol; dialog OK once; native response recorded as "closed, no message". AC-3 **partly**: the binding is NOT yet set (Data Source blank); the new column's Caption is blank; Size and Location were not read. AC-4 to AC-6 not attempted. AC-7 supported for T5 (no other component or property changed; no dialog left open). AC-8 not met.

**Open items (for the next authorized step):** (1) set Binding Type `Property` and Binding `FX_UMsDescription` through the binding picker, once; (2) read Caption (blank), Size and Location of the new column without changing them; (3) one Designer Save (Save is enabled now); (4) reconcile the Undo accessibility state against the visible icon (unresolved); (5) the Edit Grid Columns OK has no visible response, so the commit is established only by the Components list row and the Save state.

## 0b. T4 — one New (`+`) activation; one pending row at index 4; dialog left open (cycle 5, task T4)

Task message `6b430f0d-74eb-4851-b418-e2e0930ba0e9`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any select (tab 0 Designer current; tab 1 Web Client). Fresh snapshot: FX_Items the only Form tab; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save, Regenerate Form, Undo, Redo disabled; FormCollectionGrid selected (Properties `FormCollectionGrid (Grid)`); no dialog. Screenshot `t4-01` is the dialog before New.
- **Dialog open (1):** coordinate click (271, 115) on `Edit grid column(s)`. Dialog `Contained Components` before New (`t4-01`): exactly four rows: FX_ItemGridCol (0), FX_DescriptionGridCol (1), FX_CostGridCol (2), FX_UMGridCol (3). FX_UMsDescriptionGridCol absent.
- **Select FX_UMGridCol (1):** dialog row cell ref located by a targeted find, then one click. Result (`t4-02`): row 3 highlighted; right pane Name `FX_UMGridCol`, Caption `FX_sUM`, Type `GridColumn`, From Device Master `True`.
- **New (`+`) activation (1 of 1, the single permitted attempt):** one coordinate click at (589, 687), the lower-left `+` icon whose native tooltip reads `New` (T3 `t3-03`; the tooltip re-appeared after the click, `t4-03`). Not clicked again.
- **Immediate native response (`t4-03`, read-only):**
  - exactly one new row appeared: index **4**, immediately after FX_UMGridCol (index 3);
  - generated name **`gridColumn1_USER`** (the dialog's tree and right-pane Name both read `gridColumn1_USER`);
  - the new row is **selected**; right pane shows Caption blank, Type `GridColumn`, From Device Master `True`;
  - the four original rows keep their order and names (FX_ItemGridCol 0, FX_DescriptionGridCol 1, FX_CostGridCol 2, FX_UMGridCol 3).
  - No picker, no error, no second row, no misplacement.
- **Designer state after New (snapshot, read-only):** Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, Redo `[disabled]`, and the dialog's own Undo/Redo `[disabled]`. So the new row is not yet a committed Form change; it is pending inside the open dialog.
- **Data Source group (1 click, view-only; `t4-04`):** the `Data Source` group row of the new column's properties was selected (highlighted). It did NOT expand on this click and no value is visible, so the Data Source value of `gridColumn1_USER` is **not read**. No further click was made.
- **Not performed (by instruction):** no second New; no rename of `gridColumn1_USER`; no property edit; no binding; no dialog OK; no Cancel; no Designer Save; no Designer close/reopen; no runtime close/reopen or runtime inspection; no unload; no record edit; no splitter move.
- **Final state:** the Contained Components dialog is OPEN with the uncommitted row `gridColumn1_USER` (index 4) selected. The Designer is clean (Save and Undo disabled). Operator review is needed before any rename, OK or Cancel; a Cancel would discard the pending row and needs operator approval.

**T4 counts (this task, exact):** tab lists 1; tab selects 0; snapshots 2 (start; after New); finds 2 (`FX_UMGridCol` row; `Data Source` group); screenshots 4 (`t4-01` to `t4-04`); coordinate clicks 2 (dialog open; New); element clicks 2 (select FX_UMGridCol row; select Data Source group row); hovers 0; key presses 0; typed 0; waits 0; wheel 0; drags 0. **Total T4 browser calls: 13.**

**Cumulative browser calls (T1 + T2 + T3 + T4): 56 + 11 + 10 + 13 = 90.**

**Cumulative mutation and lifecycle counts (T1–T4):**
- Edit Grid Columns dialog opened 3 (T2, T3, T4); dismissed with Cancel 2 (T2, T3); T4 left open.
- New (`+`) activations (the Add-candidate): **1** (T4). Add budget consumed; no further New or Add in any later task without approval.
- Dialog OK 0. Pending uncommitted columns created 1 (`gridColumn1_USER`, index 4). Column renamed 0. Column bound 0. Binding selections 0.
- Column committed to the Form definition: 0 (no OK, no Save).
- Designer Save 0. Designer close/reopen 0 / 0. Runtime close/reopen 0 / 0. Runtime inspection 0.
- Unloads (Web Client / Designer) 0 / 0. Other component, property, string, preference or object change 0. Record edits 0. Check-in / undo checkout 0 / 0. Browser JavaScript, console or network inspection 0. Direct URL navigation, refresh or restart 0 / 0 / 0. Delete (top toolbar or Components trash) 0.
- Session re-login: **0**.

**Worker-written files (T4):** `evidence/EXP-068-R2/t4-01-dialog-before-new-four-columns-readonly.png`; `t4-02-fx_umgridcol-selected-in-dialog-before-new.png`; `t4-03-after-single-new-activation-immediate-result.png`; `t4-04-new-column-data-source-group-readonly-dialog-left-open.png`; this record (updated).

**Decisive evidence (T4):**
- `t4-01`: dialog before New; four columns in order (0–3); no FX_UMsDescriptionGridCol. Supports AC-1 and the pre-Add baseline for AC-2. Does not show the `+` function.
- `t4-02`: FX_UMGridCol selected in the dialog (Name, Caption `FX_sUM`, Type). Supports AC-2 selection. Does not show the Binding of FX_UMGridCol (not expanded).
- `t4-03`: after one New: the new row `gridColumn1_USER` at index 4, selected, Caption blank, Type GridColumn; originals 0–3 unchanged; dialog open. Supports the immediate-response readback for AC-2. Does not prove the row is committed to the Form definition, nor its Data Source.
- `t4-04`: Data Source group selected but not expanded; dialog still open; Designer clean (Save disabled in the snapshot). Supports that no edit followed the activation. Does not show the new column's Data Source.

**Acceptance (T4):** AC-1 supported (T1–T4). AC-2 **partly met**: FX_UMGridCol selected, one New activation, one new column after it, but the name is `gridColumn1_USER` (not FX_UMsDescriptionGridCol) and OK has not been confirmed. AC-3 to AC-6 not attempted. AC-7 supported for T4 (no other component change; the dialog is left open as instructed). AC-8 not met.

**Uncertainty to resolve before any further step:** (1) whether `New` is the Add of the tutorial (the native result is consistent with adding one grid column after the selected row, but this is observed in one session only); (2) the Data Source and Binding of `gridColumn1_USER` are not yet read; (3) the pending row is not committed until OK, and cancelling it is an operator-approval action.

## 0a. T3 — dialog reopened; `+` tooltip is `New`; blocked before Add (cycle 3, task T3)

Task message `2637105a-4788-46ea-b606-1a633bb4ac49`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any select (tab 0 Designer current; tab 1 Web Client). Tab 0 remained current; no select was needed. Fresh untargeted snapshot: tab heading FX_Items; Save, Regenerate Form, Undo and Redo disabled; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; FormCollectionGrid selected (Properties `FormCollectionGrid (Grid)`); no dialog. Baseline screenshot `t3-01`: FX_Items clean, User scope, grid row and first four column rows visible.
- **Reopen (1):** one coordinate click at (271, 115), the icon with tooltip `Edit grid column(s)` identified in T2. Dialog `Contained Components` opened (`t3-02`).
- **Dialog before Add (read-only, `t3-02`):** four rows in order: FX_ItemGridCol (0), FX_DescriptionGridCol (1), FX_CostGridCol (2), FX_UMGridCol (3). `FX_UMsDescriptionGridCol` absent. Right pane empty (no column selected). Footer OK, Cancel, Help.
- **`+` identification (1 hover):** one coordinate move to (589, 687), the lower-left blue `+` icon. **Native tooltip (verbatim): `New`** (`t3-03`). Not `Add`.
- **Decision:** the brief allows the Add activation only when the control is identified safely as Add (tooltip or other decisive native identification). `New` is not that identification. It could open a picker or create a component, not a grid column, and the T2 note had already marked the `+` as unverified. The `+` was **not** clicked. Per the bounded instruction the unchanged dialog was dismissed with Cancel and this is reported as a blocker.
- **Dismissal (1):** native Cancel (find ref `e1444`, one click). Dialog closed (`t3-04`). No row was selected and no field edited.
- **Post-dismissal state (snapshot file `page-2026-10-13T02-12-03-028Z.yml`, Grep of Save/Undo/Redo/Regenerate lines):** all four `[disabled]`; no dialog. `t3-04` shows the Designer clean, FX_Items, User scope.
- **Correction to T2 §0:** T2 stated the `+` was assumed to be Add and asked for one hover to confirm it. That hover now reports `New`, so the assumption is not confirmed and the control remains unidentified as Add.
- **Not performed (by instruction or by the blocker):** Add (0); name entry (0); dialog OK (0); FX_UMGridCol selection in the dialog (0); FX_UMsDescription binding (0); Designer Save (0); Designer close/reopen (0); runtime close/reopen or runtime inspection (0); unloads (0); record edits (0); trash, up, down icons (not clicked); Delete Form Definition (not clicked).

**T3 counts (this task, exact):** tab lists 1; tab selects 0; untargeted snapshots 1; finds 1 (Cancel); screenshots 4 (`t3-01` to `t3-04`); coordinate clicks 1 (open); element clicks 1 (Cancel); hovers 1 (`+`); key presses 0; typed 0; waits 0; wheel 0; drags 0. **Total T3 browser calls: 10.** (One Grep of the tool-written snapshot file is a file read, not a browser call.)

**Cumulative browser calls (T1 + T2 + T3): 56 + 11 + 10 = 77.**

**Cumulative mutation and lifecycle counts (T1–T3):** Edit Grid Columns dialog opened 2 (T2, T3), each dismissed with Cancel (Cancel 2); Edit Grid Columns Add 0; dialog OK 0; column added / renamed / bound / deleted 0 / 0 / 0 / 0; binding selections 0; Designer Save 0; Designer close/reopen 0 / 0; runtime close/reopen 0 / 0; unloads (Web Client / Designer) 0 / 0; other component, property, string, preference or object change 0; record edits 0; check-in / undo checkout 0 / 0; browser JavaScript, console or network inspection 0; direct URL navigation, refresh or restart 0 / 0 / 0; **session re-login 0**.

**Worker-written files (T3):** `evidence/EXP-068-R2/t3-01-baseline-before-edit-grid-columns-fx_items-clean-formcollectiongrid-selected.png`; `t3-02-edit-grid-columns-dialog-before-add-four-columns-readonly.png`; `t3-03-hover-plus-icon-tooltip-check-before-add.png` (tooltip `New`); `t3-04-after-cancel-no-add-clean-state.png`; this record (updated).

**Decisive evidence (T3):**
- `t3-01`: FX_Items, User scope, clean (Save and Undo greyed), FormCollectionGrid selected. Supports AC-1 identity and clean state. Does not show the columns' Caption or Binding beyond the first rows.
- `t3-02`: dialog `Contained Components` before Add, four columns in order (0–3); no FX_UMsDescriptionGridCol. Supports AC-1 and the pre-Add baseline of AC-2. Does not show the icon functions.
- `t3-03`: tooltip `New` on the `+` icon. Proves the control's native label is `New`; does not prove what it does. This is the reason for the blocker.
- `t3-04`: dialog closed; clean. Supports AC-7 for T3 (no change). Does not prove server-side state.

**Acceptance (T3):** AC-1 supported (T1, T2, T3 readbacks). AC-2 **not met** (no Add; dialog Cancelled). AC-3 to AC-6 not attempted. AC-7 supported for T3 (no change; no dialog left open). AC-8 not met (replay incomplete).

**Blocker and decision needed:** the operator or coordinator must decide whether `New` is the Add control. If yes, a later task may use it once under that identification. If not, the Add control must be identified by another native means before any mutation. Until then, no column can be added safely. The Edit menu item `Revert Global Object Definition` remains a hazard for any later step.

## 0. T2 — Edit Grid Columns discovery (cycle 2, task T2; zero mutations)

Task message `ce790972-5d18-40a4-a06f-f753a773b8f9`, worker session `8144a650-5254-4770-bac0-bc40325571fa`, run `R-20261013-100215-RmDq`.

- **Gate:** tab list before any action (2 tabs; tab 0 Designer "(current)"; tab 1 Web Client). No tab select was needed (tab 0 remained current). Fresh untargeted snapshot: tab 0 FX_Items; User footer `anton.ramos@3mworks.com.ph`; Save, Regenerate Form, Undo and Redo disabled; FormCollectionGrid selected (Properties `FormCollectionGrid (Grid)`); no dialog. Screenshot `t2-01`.
- **Accessibility find `Edit Grid Columns`:** **no match** (one native find).
- **Visible inspection:** the toolbar (New, Copy, Delete, alignment, tab order, undo/redo), the Properties panel header, the Details header and the Components-panel toolbar were compared in `t2-01`. The Delete icon on the top toolbar is **Delete Form Definition** and was not clicked. The Components trash at the bottom of the Details grid was not clicked.
- **Candidate identified:** the unlabelled blue icon at the top-left of the canvas grid, in the grid's own header row (viewport about x 271, y 115). This is the one plausible icon, and the transcript's "top left" wording fits it.
- **Hover (1 of 1 for this icon):** a coordinate mouse move to (271, 115) (not the blocked canvas right-click or hover on the grid header cell). Tooltip (verbatim): **`Edit grid column(s)`** (`t2-02`).
- **Activation (1):** one coordinate click at (271, 115). Result: the dialog **`Contained Components`** opened (`t2-03`). No other control was clicked before the dialog was read.
- **Dialog layout (read-only, `t2-03`):** title `Contained Components`; left list with four rows: `FX_ItemGridCol` (0), `FX_DescriptionGridCol` (1), `FX_CostGridCol` (2), `FX_UMGridCol` (3). Below the list: four blue icon controls at about (589, 687) `+` (add; not named in the accessibility tree), (619, 687) trash (delete; NOT clicked), (649, 687) up arrow, (679, 687) down arrow. Right pane: a search box at top with two icon buttons (expand/collapse) and an empty property area; undo and redo icons at about (907, 687) and (937, 687) (Redo disabled per the dialog's accessibility tree). Footer buttons: **OK** (879, 728), **Cancel** (960, 728), **Help** (1041, 728). Accessibility: `dialog "Contained Components"` with toolbar buttons `OK`, `Cancel`, `Help`.
- **Dismissal (1):** native **Cancel** (ref from the find, one click). Dialog closed (`t2-04`). **No Add, no OK, no selection of a column, no edit.**
- **Post-dismissal state (read from the snapshot file `page-2026-10-13T02-09-57-879Z.yml`, lines 10–55):** `Save [disabled]`, `Regenerate Form [disabled]`, `Undo [disabled]`, `Redo [disabled]`; no dialog. Footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Tab heading FX_Items.

**Exact control identity (for the record and the later mutation step):**
- Label (tooltip): `Edit grid column(s)`.
- Dialog title: `Contained Components` (the brief's "Edit Grid Columns" is the label used by the transcript and the tooltip is the one the UI shows).
- Route: select FormCollectionGrid (Components grid or canvas); click the icon at the top-left of the canvas grid header (viewport about x 271, y 115). The icon has no accessible name, so the activation was by coordinate.
- Accessibility find for `Edit Grid Columns` returns no match, so the route is coordinate-based only.

**Unverified (not hovered):** the names of the dialog's `+`, trash, up and down icons. The `+` is assumed to be the Add control (the blue plus icon in the toolbar under the column list); this must be confirmed by a hover or tooltip in the mutation step, not assumed. Do not click the trash icon.

**Counts (T2, this task):** tab lists 1; tab selects 0; untargeted snapshots 1; finds 2; screenshots 4 (`t2-01` to `t2-04`); mouse move (hover) 1; coordinate clicks 1 (the activation); element clicks 1 (Cancel); key presses 0; typed entries 0; waits 0; wheel 0; drags 0. **Total browser calls T2: 11.** Edit Grid Columns activation 1; dialog Add 0; dialog OK 0; dialog Cancel 1; column add/rename/bind/delete 0; binding selections 0; Designer Save 0; Designer close/reopen 0; runtime close/reopen 0; unloads 0; record edits 0; Check-in/undo checkout 0; re-login 0; browser JavaScript, console or network inspection 0; direct URL navigation, refresh or restart 0.

**Cumulative browser calls (T1 + T2): 56 + 11 = 67.** T1 counts are as recorded in §8 below.

**Worker-written files (T2):** `experiments/EXP-068-R2-hello-world-part-4-section-8b-um-description-grid-column.md` (updated; this section); `evidence/EXP-068-R2/t2-01-designer-fx_items-formcollectiongrid-selected-before-icon-discovery.png`; `t2-02-hover-canvas-grid-top-left-icon-tooltip-check.png` (tooltip visible); `t2-03-edit-grid-columns-dialog-after-single-activation-before-any-change.png` (dialog, before any change); `t2-04-after-cancel-dialog-closed-save-undo-disabled-clean.png`. Tool-written `evidence/playwright/` snapshot and console files are not worker-authored.

**Decisive evidence (T2):**
- `t2-02`: the tooltip `Edit grid column(s)` on the canvas grid's top-left icon (proves the label and location; does not prove what the icon does beyond the tooltip).
- `t2-03`: dialog `Contained Components` with the four columns in order (0–3), the lower-left icon row, and OK, Cancel, Help; proves the layout before any change; does not prove the icons' functions or the column properties.
- `t2-04`: dialog closed; FX_Items clean (Save and Undo greyed in the image; the snapshot file confirms `disabled`). Does not prove the server-side state.

**Acceptance (T2 scope):** AC-1 now supported (grid, four columns, absence of FX_UMsDescriptionGridCol from T1 `t1-02`; the exact label, route and dialog layout from `t2-02` and `t2-03`). AC-2 to AC-6 **not performed** in T2 (by instruction). AC-7 supported for T2: no change.

**Next permitted action (not authorized in T2):** the mutation sequence (one Add in the dialog after FX_UMGridCol, naming, one OK, one binding, one Designer Save, one close/reopen, runtime check) needs its own task. Before that task, confirm the `+` control's tooltip by one hover.

**Status (T1 of the replay, 2026-10-13): BLOCKED at AC-1 — stopped before any change.** (Superseded by T2 above for the route; the T1 facts below are unchanged.) The Designer baseline is observed: FX_Items, User scope, clean (Save and Undo disabled), 19 components, grid FormCollectionGrid with the four original columns in order, Captions and Bindings recorded, and FX_UMsDescriptionGridCol absent. The **Edit Grid Columns label and route are NOT located**: it is not in the top Edit menu, not in the FormCollectionGrid Properties, and the canvas context-menu route is blocked by the selection adorner (right-click and hover time out). No dialog was opened; no column was added; nothing was saved, closed or reopened. Nothing is replay_verified. Next decision: the route to Edit Grid Columns (see §6 and §12).

## 1. Run identity

- Run `R-20261013-100215-RmDq`, experiment EXP-068-R2, cycle 0, task **T1** (bounded instruction: read-only preflight; stop before adding a column).
- Worker session `8144a650-5254-4770-bac0-bc40325571fa`; task_message_id `b20e7a00-092e-448c-9ba4-2fd70cbf3e04`.
- LEARNING MODE. Editing scope **User**. Target Form `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Tenant configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Repository starting state (session git log, not re-run: no shell): branch `claude-harness`; head `45321eb EXP-068-R2: approved brief`; untracked `assets/` (not written by this worker).
- Predecessor: `experiments/EXP-068-hello-world-part-4-section-8b-um-description-grid-column.md` (BLOCKED at AC-1 because no Form was open in the Designer). That record is not modified here. In this run the Designer already had FX_Items open, so the brief's toolbar Open route was not needed.

## 2. Objective (from the brief, T1 scope)

Follow `docs/mongoose/transcripts/hello-world-pt4.md` Section 8 steps 5–9 (09:18–11:04), adapted to FX_ names: select the Form grid `FormCollectionGrid`, open Edit Grid Columns, add one column after `FX_UMGridCol` named `FX_UMsDescriptionGridCol`, bind it to `FX_UMsDescription`, one Designer Save, one Designer close/reopen, one runtime close/reopen (expected Each, Dozen, Each for dumbbell, eggs, guitar).

T1 scope (bounded instruction): review sources; verify the Designer state; record the grid and its four columns; locate Edit Grid Columns through visible native controls, record its label and route, open it once, record its layout read-only, close it with Cancel or close; create this record. **Stop before adding a column or making any change.**

## 3. Sources reviewed

| Source | Read | Note |
| --- | --- | --- |
| `AGENTS.md` | Full | LEARNING MODE; FX_ scope; evidence, recovery and session rules |
| `docs/mongoose/transcripts/hello-world-pt4.md` Section 8 (lines 209–226) | Full section | Steps 5–7 are the grid steps: Edit Grid Columns; select last column, Add, name `UM Description Grid Col`; Binding Type Property bound to the joined UMs Description property |
| `experiments/EXP-067-R2-…section-8a-…md` | Lines 1–360 of 502 | Its T9 and T10 records show FX_UMsDescriptionStatic and FX_UMsDescriptionEdit persisted after one Save and one close/reopen; its T10 runtime readback showed the FX_UMsDescriptionEdit values Each (dumbbell), Dozen (eggs) and Each (guitar). Lines 361–502 (T11–T12 detail) not read |
| `experiments/EXP-050-…multi-view-form.md` | Full | Original grid columns FX_ItemGridCol (tab 1), FX_DescriptionGridCol (2), FX_CostGridCol (3), FX_UMGridCol (4); bindings `object.FX_Item`, `object.FX_Description`, `object.FX_Cost`, `object.FX_UM`; runtime headers Item, Description, Cost, Unit of Measure |
| `experiments/EXP-062-R4-…section-4-…md` | Lines 1–188 of 413 | Layout model (Location row; column; Size width; height). The Form grid's Layout readback there (Size `11; 21`, Location `0; 0`) matched this run |
| `experiments/EXP-068-hello-world-…md` (predecessor) | Full | Its T1 found no Form open; its route to open FX_Items was the toolbar Open route (not needed here) |

Not read: `tools/` (intentionally unreadable); the secrets file (not read); no shell or git commands. The EXP-067-R2 lines 361–502 and the EXP-062-R4 lines 189–413 were not read; neither is needed for the T1 baseline.

## 4. Starting browser state (observed)

- **Tabs (listed before the first select):** 2 tabs. Tab 0 = Designer (`mode=designer`, `MGForm=FX_Items`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`), reported "(current)". Tab 1 = Web Client (`mingle-portal…?favoriteContext=FX_Items`, title `Mongoose`). Tab 0 was selected explicitly after the list. **Tab 1 was not selected and not inspected in T1.**
- **Session:** usable. No Session Expired modal and no Infor sign-in page. Re-login count **0**. The session-expiry procedure was not used.
- **Portal banner:** none seen in the Designer screenshots.
- **Designer (tab 0), first snapshot:** tab heading `FX_Items` (the only Form tab, selected); Form tab Properties: Name `FX_Items`; Version `User version for user <operator>`; Device Type `Default`; Form Type `Normal`; Is Master `True`; toolbar **Save disabled**, Regenerate Form disabled, **Undo and Redo disabled**; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog (`t1-01`).

## 5. Designer baseline (observed)

### 5a. Identity and clean state

FX_Items is open as the only Form tab; User scope; Save, Regenerate Form, Undo and Redo disabled; no dialog. Evidence: `t1-01` (identity and clean state); `t1-02` (the Components tree).

### 5b. Component list (19 rows, Components grid expanded; read from the live tree)

| Pane | Name | Type | Data Source | Tab | Note |
| --- | --- | --- | --- | --- | --- |
| 00 | Pane (00) | Pane | | | |
| 00 | FormCollectionGrid | Grid | objects | 0 | Binding Type `Primary Collection Grid` |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 1 | |
| 00 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 2 | |
| 00 | FX_CostGridCol | GridColumn | object.FX_Cost | 3 | |
| 00 | FX_UMGridCol | GridColumn | object.FX_UM | 4 | last column |
| 01 | Pane (01) | Pane | | | |
| 01 | FX_PictureStatic | Static | object.FX_Picture | 0 | |
| 01 | FX_RefreshButton | PushButton | (Event to generate: FX_ImportPicture) | 0 | |
| 01 | FX_UMsDescriptionEdit | Edit | object.FX_UMsDescription | 0 | from EXP-067-R2 |
| 01 | FX_UMsDescriptionStatic | Static | — | 0 | from EXP-067-R2 |
| 01 | FX_ItemStatic | Static | — | 5 | |
| 01 | FX_ItemEdit | Edit | object.FX_Item | 6 | |
| 01 | FX_DescriptionStatic | Static | — | 7 | |
| 01 | FX_DescriptionEdit | Edit | object.FX_Description | 8 | |
| 01 | FX_CostStatic | Static | — | 9 | |
| 01 | FX_CostEdit | Edit | object.FX_Cost | 10 | |
| 01 | FX_UMStatic | Static | — | 11 | |
| 01 | FX_UMCombobox | ComboBox | object.FX_UM | 12 | |

Count: 2 panes + 1 grid + 4 grid columns + 12 Pane 01 components = **19**. This matches the EXP-067-R2 end state (19 entries). The 10 Pane 01 originals are FX_PictureStatic, FX_RefreshButton, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox.

### 5c. Grid and its four columns (order, Caption, Binding; Properties readback per column)

| Order | Component | Type | Caption (Properties) | Binding Type | Binding | Source |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_ItemGridCol | GridColumn | `FX_sItem` | Property | `object.FX_Item` | `t1-03`; find readbacks |
| 2 | FX_DescriptionGridCol | GridColumn | `FX_sDescription` | Property | `object.FX_Description` | find readbacks |
| 3 | FX_CostGridCol | GridColumn | `FX_sCost` | Property | `object.FX_Cost` | find readbacks |
| 4 | FX_UMGridCol | GridColumn | `FX_sUM` | Property | `object.FX_UM` | `t1-04` (Caption and Name), find readbacks |

- Grid FormCollectionGrid Properties (Component tab, read through a broad find output): Name `FormCollectionGrid`; Type `Grid`; From Device Master `True`; Unit `Char`; Size `11; 21`; Location `0; 0`; Binding Type `Primary Collection Grid`; Binding `objects`; Right-Click Menu `StdDefault`. (Form-level Size `69; 21` from EXP-067-R2 was not re-read in this run.)
- Columns' Size and Location were **not read** in T1 (the new-column defaults will be read in the later step).
- Caption values are the label-string IDs `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM` (the same IDs as in EXP-050). The runtime headers were not read in T1.

### 5d. Absence of FX_UMsDescriptionGridCol (proof)

The 19-row Components tree lists no `FX_UMsDescriptionGridCol`. Under `FormCollectionGrid` the only children are the four original columns. Evidence: `t1-02` (the expanded tree, partly visible) and the full tree read in the snapshot. **Proven absent in this session.**

## 6. Edit Grid Columns — search for the label and route (NOT located)

| # | Route tried | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Selected FormCollectionGrid in the Components grid (treeitem click) | Selected; Properties header `FormCollectionGrid (Grid)` | `t1-05` |
| 2 | Find `Grid Columns`, `Columns`, `Edit Grid` in the page (targeted finds) | No matches | — |
| 3 | Top menu `Edit` (opened once) | Opened a menu with 18 items: Undo (disabled), Redo (disabled), Copy, Cut, Paste (disabled), Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, **Revert Global Object Definition**. **No Edit Grid Columns item.** Nothing was clicked in the menu. | `t1-06`, `t1-07` (menu open) |
| 4 | Properties of FormCollectionGrid (Component tab, expand-all) | Groups: Design, Appearance, Behavior, Layout, Data Source, Events, Help, Inheritance, Miscellaneous, Specific Attributes, and others. **No Columns row or Edit Grid Columns control** found. Right-Click Menu `StdDefault` (a dropdown property, not the column editor) | find readback |
| 5 | Right-click on the Form grid body in the canvas (context menu) | **TimeoutError** (waiting for the element; `<div id="compadorner-…" class="mg-adorner-comp … mg-adorner-comp-selected"> intercepts pointer events`). Retried automatically for 5 s; no menu appeared | — |
| 6 | Hover on the canvas grid's top-left header icon (possible grid-designer control) | **TimeoutError** with the same selection-adorner intercept | — |
| 7 | Components-grid row right-click, Form menu, toolbar | **Not tried** | — |

**Outcome:** the Edit Grid Columns label and route are **unresolved**. The dialog was never opened, so its layout is not recorded.

## 7. Dialog (Edit Grid Columns) — not opened

No dialog was opened. Add count 0. OK count 0. Cancel count 0. No column was added, renamed, bound or deleted.

## 8. Action audit (T1, explicit browser calls; exact counts)

| Category | Count | Detail |
| --- | --- | --- |
| Tab lists | 1 | before the first select |
| Tab selects | 1 | tab 0 (Designer) |
| Snapshots | 5 | 2 untargeted (start; recovery after a ref error), 3 targeted (`e1171` Properties panel, `e250` canvas grid, `e251` canvas grid) |
| Screenshots | 8 | `t1-01` … `t1-08` |
| Finds | 23 | 2 of them returned very large output (`Grid`: 351 matches; `/Column|Edit G|Edit\b/i`: 41 matches). They were not needed |
| Element clicks executed | 11 | Details Expand Panel; Components tab; Components Expand; FX_ItemGridCol row; Properties Data Source group; Properties expand-all; FX_DescriptionGridCol row; FX_CostGridCol row; FX_UMGridCol row; FormCollectionGrid row; top menu Edit (opened) |
| Coordinate clicks executed | 1 | (1200, 520) on empty canvas, to dismiss the open Edit menu (no Mongoose item selected) |
| Failed click-type calls | 3 | 1 right-click on the canvas grid (TimeoutError, adorner intercept); 2 clicks on ref `e5` (`Ref e5 not found`, not executed) |
| Hovers | 1 | canvas grid header icon (TimeoutError, adorner intercept) |
| Key presses | 2 | Escape ×2 (did not close the Edit menu) |
| Typed entries / waits / wheel / drags | 0 / 0 / 0 / 0 | |
| **Total explicit browser calls** | **56** | 1 + 1 + 5 + 8 + 23 + 15 (11 executed + 1 coordinate + 3 failed) + 1 + 2 |

**Mutation and lifecycle counts (T1):**

| Operation | Count |
| --- | --- |
| Edit Grid Columns opened / Add / dialog OK / Cancel | 0 / 0 / 0 / 0 |
| Column added / renamed / bound / deleted | 0 / 0 / 0 / 0 |
| Binding selections | 0 |
| Property or component change | 0 |
| Designer Save | 0 |
| Undo / Redo | 0 / 0 |
| Designer Form open / close / reopen | 0 / 0 / 0 (FX_Items was already open) |
| Runtime close / reopen / runtime Save | 0 / 0 / 0 (runtime tab not inspected) |
| Unloads (Web Client / Designer) | 0 / 0 |
| Delete (top toolbar or Components trash) | 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console or network inspection | 0 |
| Direct URL navigation / refresh / restart | 0 / 0 / 0 |
| Session re-login (worker-preamble procedure) | **0** |
| Dialogs opened or answered | 0 |
| Record edits | 0 |

The view-state actions (expand, collapse, row selection, menu open and close) changed the Designer's presentation only. The toolbar Save and Undo stayed disabled in every screenshot (`t1-01`, `t1-06`, `t1-08`).

## 9. Deviations and observations (observed only)

1. **Edit menu popup and Escape.** The top Edit menu stayed open after one Escape and after a second Escape (`t1-07`). It was dismissed by a click on empty canvas (`t1-08`). No menu item was selected. The menu contains `Revert Global Object Definition`, which is a destructive item; it was not clicked.
2. **Selection adorner intercepts pointer events.** With FormCollectionGrid selected, a right-click and a hover on the canvas grid timed out ("`compadorner` … intercepts pointer events"). This is a suspected environment (rendering) blocker, per the brief. It was not retried beyond the one attempt.
3. **Stale refs.** Two `Ref e5 not found` errors occurred (the Edit top-menu button). Recovery: one fresh untargeted snapshot (the one recovery snapshot allowed) and one corrected visible inspection (the Edit menu click). The second stale ref (the same button, for closing the menu) was not recovered by another snapshot because the allowance was used; Escape and a canvas click were used instead, with no ref.
4. **Screenshot names.** `t1-06-final-state-menu-closed-save-disabled-no-dialog.png` **overstates its content**: it shows the Edit menu OPEN (the name was intended for the final closed state). `t1-07-after-second-escape-menu-state.png` also shows the menu open. The closed state is `t1-08-after-canvas-click-menu-dismissed-final.png`. Files could not be renamed without a shell.
5. **Designer state at start.** The predecessor record (EXP-068 T1) found no Form open; in this run FX_Items was already open, User scope and clean. The cause of the difference is not established (no action in this run opened it).
6. **Tab 1 (Web Client)** was not selected or inspected. The runtime FX_Items tab state is unknown in this run.

## 10. Worker-written file inventory (T1)

- `experiments/EXP-068-R2-hello-world-part-4-section-8b-um-description-grid-column.md` (created; this record).
- `evidence/EXP-068-R2/t1-01-designer-fx_items-identity-user-scope-clean.png`
- `evidence/EXP-068-R2/t1-02-components-grid-expanded-baseline-19-entries.png`
- `evidence/EXP-068-R2/t1-03-fx_itemgridcol-properties-caption-binding-readback.png`
- `evidence/EXP-068-R2/t1-04-fx_umgridcol-selected-properties-readback.png`
- `evidence/EXP-068-R2/t1-05-formcollectiongrid-selected-properties-before-edit-grid-columns-search.png`
- `evidence/EXP-068-R2/t1-06-final-state-menu-closed-save-disabled-no-dialog.png` (name overstates: menu open; see §9.4)
- `evidence/EXP-068-R2/t1-07-after-second-escape-menu-state.png` (menu open)
- `evidence/EXP-068-R2/t1-08-after-canvas-click-menu-dismissed-final.png` (menu closed; clean)

Tool-written, not worker-authored: `evidence/playwright/` snapshot files from this task (`page-2026-10-13T02-02-36-344Z.yml` … `page-2026-10-13T02-05-24-665Z.yml`) and console logs. The harness and the operator's git review are authoritative for repository confinement. No other file was written.

## 11. Decisive evidence (what each file proves and does not prove)

| File | Proves | Does NOT prove |
| --- | --- | --- |
| `t1-01` | FX_Items is the open Form (tab heading, Name, Form Type Normal, Is Master True, footer `ScopeType: User`); Save, Undo, Redo and Regenerate disabled; no dialog | That the saved definition equals this view; the server-side state |
| `t1-02` | The Components grid expanded, with the Pane (00) grid, FormCollectionGrid, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol and part of FX_UMGridCol visible; the footer shows User scope | The full 19-row list in one image (FX_UMGridCol is partly cut off, and the Pane 01 rows are below the visible area; the full list is in the snapshot readback in §5b) |
| `t1-03` | FX_ItemGridCol selected; Properties Name `FX_ItemGridCol`, Caption `FX_sItem`, Type `GridColumn`, From Device Master `True`; the Data Source group is selected but not expanded at capture time | The Binding value (read by find, not in this image) |
| `t1-04` | FX_UMGridCol selected; Name `FX_UMGridCol`, Caption `FX_sUM`, Type `GridColumn`; the four grid columns and FormCollectionGrid visible in the list; Save and Undo disabled | The Binding readback (`object.FX_UM` was read by find, not in this image); the Size and Location of the column |
| `t1-05` | FormCollectionGrid selected; Properties header `FormCollectionGrid (Grid)`; Layout-related rows not visible; the grid's four columns in order | Any Edit Grid Columns control (none visible in the image) |
| `t1-06` | The top Edit menu OPEN, listing its 18 items, none of which is Edit Grid Columns; Save and Undo disabled | That the menu is closed (it is open in this image; the file name is wrong) |
| `t1-07` | The Edit menu still OPEN after the second Escape | — |
| `t1-08` | The Edit menu closed by a canvas click; FX_Items clean; FormCollectionGrid selected; footer User scope | Anything about the grid's Layout, or the runtime |

## 12. Acceptance matrix (T1 scope)

| AC | Status | Basis and limit |
| --- | --- | --- |
| AC-1 | **Not met (blocked).** Sources reviewed; session usable; Designer FX_Items, User scope, clean; grid and four columns with order, Caption and Binding recorded; FX_UMsDescriptionGridCol absent. **Edit Grid Columns label and route NOT located; dialog layout NOT read.** | Evidence: `t1-01`, `t1-02`, `t1-03`, `t1-04`, `t1-05`; the route search in §6 (`t1-06`, `t1-07`) |
| AC-2 | Not attempted | T1 stops before any column change; the Edit Grid Columns dialog was not opened |
| AC-3 | Not attempted | No new column exists |
| AC-4 | Not attempted | Designer Save count 0 |
| AC-5 | Not attempted | No Designer close or reopen |
| AC-6 | Not attempted | No runtime close or reopen |
| AC-7 | Supported for the narrow claim that no definition change was made in T1 | Zero Save, Add, OK, binding and property changes; view-state actions only. Server-side state and other objects not audited |
| AC-8 | Not met (replay not complete) | The final report covers only T1: audit (56 calls), inventory and final state recorded; the replay steps were not performed |

## 13. Knowledge state

| Finding | State |
| --- | --- |
| Designer open on FX_Items, User scope, clean (Save and Undo disabled), no dialog (T1) | observed (one session) |
| Components tree of 19 entries; FormCollectionGrid with four GridColumns in order FX_ItemGridCol (1), FX_DescriptionGridCol (2), FX_CostGridCol (3), FX_UMGridCol (4) (T1) | observed (one session) |
| Captions FX_sItem, FX_sDescription, FX_sCost, FX_sUM; Bindings object.FX_Item, object.FX_Description, object.FX_Cost, object.FX_UM; Binding Type Property for each (T1) | observed (one session; Properties readback) |
| FX_UMsDescriptionGridCol absent from the Components tree (T1) | observed (one session) |
| FormCollectionGrid Layout Size `11; 21`, Location `0; 0`; Binding Type `Primary Collection Grid`, Binding `objects` (T1) | observed (one session; broad find output) |
| Edit Grid Columns label and route | **unresolved** (not in the top Edit menu or FormCollectionGrid Properties; canvas context route blocked) |
| The selection adorner intercepts pointer events on the selected grid (right-click and hover time out) | observed (one session); suspected environment blocker |
| Escape does not close the top Edit popup; a canvas click dismissed it (T1) | observed (one session) |
| Edit top menu contains `Revert Global Object Definition` (not clicked) | observed |
| Replay or procedure status | not claimed; nothing replay_verified |

## 14. Open questions and blockers

1. **Blocker (AC-1):** the Edit Grid Columns label and route are not located. Candidate routes not yet tried: (a) the Components-grid row right-click on FormCollectionGrid (a visible native context menu that does not pass through the canvas adorner); (b) the Form menu; (c) the canvas right-click after selecting a different component so that the grid's selection adorner is not on top of it. Each is a new route choice and needs the coordinator's or operator's decision, because the brief allows only one corrected inspection after a blocker.
2. **Environment:** the selection adorner blocks canvas right-click and hover on the selected grid. This needs an operator or environment decision (for example, a route that does not depend on the canvas).
3. **Edit menu hazard:** `Revert Global Object Definition` is in the Edit menu. It must not be clicked by any step of this experiment.
4. **Start state:** the predecessor's "no Form open" state did not recur; the cause of the change is not established.
5. The Web Client (tab 1) runtime state was not inspected in T1.

## 15. Final browser state (end of T1)

- Tab 0 (Designer) is the selected tab. FX_Items is open, User scope (`ScopeName anton.ramos@3mworks.com.ph`), **clean**: toolbar Save, Regenerate Form, Undo and Redo disabled (`t1-08`).
- FormCollectionGrid is selected in the Components grid and Properties. The Details panel is expanded (view state).
- No in-page dialog is open. The top Edit menu is closed (`t1-08`). No browser-native dialog is pending.
- Tab 1 (Web Client) was listed but not selected or inspected.
- No Mongoose change has been made in T1.

## Outcome (operator, 2026-10-13)

Accepted under amendment. Hello World Part 4 section 8 is complete. Operator call under the standing authorization of 2026-10-11.

- Run R-20261013-100215-RmDq completed as blocked after 11 worker tasks, only on AC-6's screenshot criterion.
- Amendment: AC-6 is accepted on the runtime accessibility readback. The reopened grid has the headers Item, Description, Cost, Unit of Measure and an unnamed fifth header, with fifth-column values dumbbell `Each`, eggs `Dozen`, guitar `Each`, matching EA/DZ/EA.
  - No screenshot shows that column, because the grid pane is narrow (splitter Position 11) and moving the splitter was out of scope.
  - The visual check is waived for this section.
- Screenshot `t8-06`, viewed by the operator assistant: after the Designer close/reopen (User scope), Details > Components lists FX_CostGridCol (object.FX_Cost, tab 3), FX_UMGridCol (object.FX_UM, tab 4) and **FX_UMsDescriptionGridCol** (GridColumn, `object.FX_UMsDescri…`, Pane 0, Container FormCollectionGrid, Tab 0).
  - Its Properties show Type GridColumn with a blank Caption, which is the default and was left unchanged.
- The worker opened FX_Items itself through the toolbar Open route (the R2 allowance). There was one Designer Save with the toast "Form [FX_Items] and global object(s) were saved.", per the worker.
- Confinement (git status): only `evidence/EXP-068-R2/` and this record were written by the run.
- Findings (observed):
  - Edit Grid Columns opens from an icon at the top-left of the canvas grid when FormCollectionGrid is selected. Its add control is labelled `New`; one activation adds one row after the selected column.
  - The dialog's OK gives no visible response.
  - A runtime Form opened before a Designer Save keeps the old columns until it is closed and reopened.
  - The new column's header is blank because its Caption is blank.
  - The new grid column got Tab 0, as with EXP-067-R2.
- Follow-up candidates, not required by the tutorial: set a Caption (for example FX_sDescription) and tab order on the new components, and a visual-evidence route for narrow grid panes.
