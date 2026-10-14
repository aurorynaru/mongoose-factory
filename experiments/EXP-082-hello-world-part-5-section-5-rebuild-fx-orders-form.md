# EXP-082 — Hello World Part 5 Section 5: rebuild the FX_Orders Form with the Classic Multi-View wizard (replacement)

**CURRENT STATUS (after T10, 2026-10-14): FINAL DOCUMENTATION AND EVIDENCE RECONCILIATION COMPLETE (zero browser calls in T10).** All six acceptance checks are supported at the observed level (AC-1 to AC-5 by named evidence; AC-6 by `evidence/EXP-082/T10-final-acceptance-report.md`). Cumulative browser calls T1–T9 are **361**, recomputed from the controller audits `evidence/EXP-082/harness-audit-T1.md` to `harness-audit-T9.md` (154 clicks, 93 finds, 51 snapshots, 42 screenshots). Designer Save 0; unloads 0; Finish 1; wizard openings 2; wizard cancel 1; replacement OK answers 3; post-Finish close 1 and reopen 1. One process deviation is disclosed: the T9 stale-locator click (T10 report §5). **Recommendation: ACCEPTED AS OBSERVED**, conditional on the coordinator accepting that deviation as not disqualifying. Classification: observed only; same-session close and reopen only; not database durability; not replay_verified.

**Previous status (after T9, 2026-10-14): POST-FINISH CLEAN CLOSE AND REOPEN COMPLETE (AC-5 observed; same session; UI level).** FX_Orders was closed once through its Form-tab control (clean; no prompt) and reopened once through the Form menu recent-forms entry (the same route as T1 and T4). The reopened Form shows Name FX_Orders, Device Default, Form Type Normal, Is Master True, `ScopeType: User`, Save and Undo disabled. The full component inventory (31 rows) matches T8 by name, type, tab order 0–30 and `object.<Property>` binding. All 30 Caption readings (ten Static, ten GridColumn, ten detail controls) match T8, including the blank FX_ItmsPicture Static and GridColumn captions, the `C(<Static>)` detail-control expressions, and the ComboBox types for FX_CustomerID and FX_Item. No Designer Save, edit, unload, Delete, string, binding or component change was made. Classification: **observed only (same session; close/reopen is a weak persistence boundary); not database durability; not replay_verified.** Next step: coordinator review (no further authorized action).

**Earlier status (after T8, 2026-10-14): POST-FINISH COMPONENT AND CAPTION INVENTORY COMPLETE (READ-ONLY). The FX_Orders Form remains open, User scope, clean (Save and Undo disabled, no dialog). 31 components were read: FormCollectionGrid, ten GridColumns, ten Static labels, ten bound detail controls; each bound to `object.<Property>` in the set order. Captions read individually: all ten Static Captions, all ten GridColumn Captions and all ten detail-control Captions. Findings: FX_CustomerID and FX_Item are ComboBox; FX_ItmsPicture detail control is an Edit (not an image-type control); FX_ItmsPictureStatic and FX_ItmsPictureGridCol Captions are blank; three Static Captions (FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal) render as raw IDs on the canvas. No edit, string, binding, component, Save, unload, close or reopen. Classification: **observed only (same session; UI and accessibility level); not database durability; not replay_verified.** Next permitted step (separate authorization): the close and reopen of FX_Orders (AC-5). See the T8 section for the full table.

**Earlier status (after T7, 2026-10-14): FINISH INVOKED ONCE; THE WIZARD CREATED THE FORM FX_Orders (TAB OPEN, User scope, Save disabled); THREE REPLACEMENT PROMPTS SEEN IN THIS EXPERIMENT, EACH ANSWERED OK ONCE; CLOSE/REOPEN, UNLOAD AND SAVE NOT PERFORMED IN T7.** Final page reached (Next once from page 3). The sentence was `Click the Finish button to build a multiview form named FX_Orders with the data source FX_Orders.` Save Template was **checked** on arrival (default) and was unchecked once by its visible label; the final page then showed Finish enabled and Next disabled. Finish was invoked **once**. The response was a replacement prompt, `Form FX_Orders already exists--replace it?` (OK / Cancel), answered **OK once**; the next message was `Process Completed Successfully` (wizard title `Infor Mongoose Application Development Framework - Form Wizard - MultiView`), acknowledged with its single OK (not a replacement answer). The Designer then showed a selected **FX_Orders** Form tab: Name FX_Orders, Device Default, Form Type Normal, Is Master True, footer `ScopeType: User`, Save and Undo **disabled**. The Components list (read-only view) has **31 rows** in the set order, with bindings `object.<Property>`; `FX_CustomerID` and `FX_Item` are ComboBox; **`FX_ItmsPicture` is an Edit (not an image control)** bound to `object.FX_ItmsPicture`, whose Static label has a **blank caption**. No Save, unload, close, reopen, caption or component edit was performed. Classification: **UI completion only (same session); not database durability; not replay_verified.** Finish 1 of 1 used. Next permitted step (separate bounded task): the clean/saved-state check and close/reopen of FX_Orders, under its own authorization.

**Earlier status (after T6, 2026-10-14): T6 COMPLETE — PAGE 3 ORDER CONFIGURED; WIZARD LEFT OPEN ON PAGE 3; NOT ADVANCED, NOT FINISHED.** On the second wizard opening (page 2 with the ten required properties included, unchanged), Next was pressed once and page 3 (`Specify the order and attributes…`) opened. The ten included properties were moved to the exact target order (FX_OrderNumber, FX_CustomerID, FX_CusName, FX_CusAddress, FX_Item, FX_ItmsDescription, FX_ItmsCost, FX_Count, FX_DerOrderTotal, FX_ItmsPicture) using **26 single move-up presses** of the second arrow button (e638; confirmed by its first effect), with each group's row selected by its name cell first. The fresh snapshot `snapshot-t6-03-page3-final-order-fresh.yml` shows rows 1–10 in the target order, all Include checked, no alert, Next enabled, Back enabled, Finish disabled. **Save Template, the final page, Finish, Save and unloads were not reached or invoked.** Budgets: wizard openings 2 of 2 used; Finish 0 of 1; replacement Yes answers 2 (T3, T5); Designer Save 0 of 1; unloads 0; close/reopen 0 of 1 each; re-login 0 of 1. Classification: **observed only; not replay_verified.** Next permitted step (separate bounded task): Next to the final page, Save Template unchecked, the sentence recorded, then the single Finish.

**Earlier status (after T5, 2026-10-14): T5 STOPPED ON PAGE 2 OF WIZARD OPENING 2 — ALL TEN REQUIRED PROPERTIES ARE OFFERED AND INCLUDED; NO CONDITIONAL UNLOAD NEEDED; WIZARD LEFT OPEN ON PAGE 2 FOR THE NEXT BOUNDED TASK.** The second wizard opening (New > Classic > Multi-View > OK), valid under the later operator authorization, was performed once. Page 1: Name `FX_Orders` (one plain fill), Form Type MultiView, Data Source `FX_Orders`, no message. Next raised the exact replacement prompt **`Form FX_Orders already exists--replace it?`** (OK / Cancel; screenshot `t5-03` taken before answering). **OK was pressed exactly once, in this task.** The immediate result was **not** a timeout: the wizard advanced normally to page 2 (`Primary Collection`) with no further alert. Page 2 inventory: the Primary Collection (included) holds exactly **FX_Count, FX_CusAddress, FX_CusName, FX_CustomerID, FX_DerOrderTotal, FX_Item, FX_ItmsCost, FX_ItmsDescription, FX_ItmsPicture, FX_OrderNumber** (all ten required names present). The available list holds the other 44 IDO-level properties, including the seven system properties CreateDate, CreatedBy, InWorkflow, NoteExistsFlag, RecordDate, RowPointer, UpdatedBy (not included). **No Include change, no page 3, no Finish, no Save, no unload, no Cancel.** The replacement's effect on the server is **unresolved** (the Designer Form comparison is not a server-side check). Budgets now: wizard openings **2 of 2 used**; replacement Yes answers **2** (T3 and T5, one each); Finish **0 of 1**; Designer Save **0 of 1**; unloads 0 (conditional branch not required); close/reopen 0 of 1 each; strings 0; caption edits 0; IDO changes 0; checkout 0; re-logins 0 of 1. Classification: **observed only; not replay_verified; no database durability claimed.**

**Earlier status (after T4, 2026-10-14): T4 COMPLETE — TIMEOUT RECOVERED; WIZARD CANCELLED (discard confirmed once); EXISTING FX_Orders VERIFIED UNCHANGED AND CLEAN; FORM CLOSED ONCE. STOPPED HERE (no second wizard, no Finish, no Save, no unload).** The `Timeout expired waiting for response.` alert was acknowledged with OK once; the wizard was still on page 1. Its Cancel was invoked once, which raised `Are you sure you want to cancel? All data entered will be lost.` (Yes / No); Yes was confirmed once (discard of the unfinished wizard only). The Designer then had no Form open, Save disabled, `ScopeType: User`. FX_Orders was reopened once from the Form menu recent-forms entry: Name `FX_Orders`, Device Type Default, Form Type Normal, Is Master True, `ScopeType: User`, Save disabled. Its Details > Components list matches the T1 baseline exactly: 13 components, same types, bindings and four Static captions (`FX_sOrderNumber`, `FX_sCustomerID`, `FX_sItem`, `FX_sCount`). The Form was then closed once through its Form-tab control; no prompt; Designer clean with no Form open. **Observed consequence:** the single OK on the replacement prompt in T3 did not leave a visible replacement, because the reopened FX_Orders is identical to the T1 baseline. This is observed only in this session (no unload or server-side check was run); it does not prove the server-side Form definition is unchanged. Wizard openings 1 of 2 (the second only after a conditional unload, which has not been triggered). Finish 0 of 1. Replacement Yes 1 (T3). Designer Save 0 of 1. Unloads 0. Strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1. Classification: **observed only; not replay_verified.** Next step (separate task, not performed): the operator's conditional-retry decision for the wizard.

**Earlier status (after T3, 2026-10-14): T3 STOPPED BLOCKED. The single OK on the exact replacement prompt `Form FX_Orders already exists--replace it?` was pressed once; the wizard did NOT advance. An unexpected alert `Timeout expired waiting for response.` (OK only) then appeared over the wizard, still on page 1. Per the brief it was NOT answered and nothing was retried. Page 2 was NOT reached; the property inventory, the missing-property conclusion and the conditional-unload decision are NOT established. Finish 0; Designer Save 0; unloads 0; strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0. Replacement Yes answers: 1 (the OK on the exact FX_Orders prompt). Whether FX_Orders was replaced, partially replaced or left unchanged by that OK is **unresolved**: the timeout alert is the only visible result. Classification: **observed only; not replay_verified**. See the T3 section.

**Earlier status (after T2, 2026-10-14): T2 STOPPED AT A REPLACEMENT PROMPT — WIZARD OPEN ON PAGE 1; PAGE 2 NOT REACHED; PROMPT NOT ANSWERED.** The wizard was opened once (New > Classic > Multi-View > OK). Page 1 was configured (Name `FX_Orders` by one plain fill; Form Type MultiView; Data Source `FX_Orders`). Pressing **Next** on page 1 raised the alert **"Form FX_Orders already exists--replace it?"** (OK / Cancel). The T2 instruction says not to answer a replacement prompt in T2 and to stop at a blocking dialog, so the prompt was **left open and unanswered**: neither OK nor Cancel was clicked. Consequently page 2 was **not** reached, the property inventory and the six-new-property check were **not** performed, and no Include change, page 3, Finish, Save, unload or string action occurred. The baseline Form `FX_Orders` is still the existing Form (not replaced). **Operator decision required** (see the T2 section): answer the prompt (OK would replace FX_Orders under the 2026-10-14 decision) or Cancel, in a later task. Budgets after T2: wizard openings 1 of 2 used; Finish 0 of 1; replacement Yes 0 (the prompt is pending); Designer Save 0 of 1; unloads 0 (conditional branch not triggered); post-Finish close/reopen 0 of 1 each; strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1. Classification: **observed only; not replay_verified**.

**Earlier status (after T1, 2026-10-14): T1 COMPLETE — READ-ONLY PREFLIGHT AND BASELINE. STOPPED BEFORE THE WIZARD.** Zero wizard openings, zero Finish, zero replacement prompts answered, zero Designer Save, zero unloads, zero strings, zero caption edits, zero component changes. The User-scoped Form `FX_Orders` was opened once and closed once (clean, no prompt). Baseline recorded: 13 components (grid, four grid columns, eight Pane (01) field components; captions read on the four Static labels). AC-1 supported (observed; UI level; same session). AC-2 to AC-6 not started. Classification: **observed only; not replay_verified; no database durability claimed.**

## Run identity

- Experiment EXP-082, cycle 0, task **T1** (read-only preflight and baseline; stop before opening the wizard). Run `R-20261014-092354-OkSB`; worker session `c5bf2326-27fb-4580-8614-4455e44d1602`; task_message_id `bf1291c9-0d41-45c7-9ae3-ee71b3795db9`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope **User** (the Form only). Operator decision 2026-10-14: replace the factory-owned Form `FX_Orders` through the Multi-View wizard, with explicit replacement prompts answered Yes only for FX_Orders.
- Brief commits (session-start git log; not re-verified; no shell): `8e19e07` (EXP-082: approved brief), `4a6631c` (EXP-082: draft brief).
- Record provenance: this record did not exist at T1 start (the Read of `experiments/EXP-082-…md` returned "does not exist"). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-082/`.
- Identity bar: Mongoose configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; the operator account is not recorded here (it is shown in the footer as `ScopeName: <operator account>`).

## Objective (T1 scope)

Read the sources; list tabs; select the Designer; confirm the session and that the Designer is in User scope and clean; open the existing Form `FX_Orders` once (Form menu recent-forms entry); record its identity, scope and Details > Components list with bindings and captions; close it once while clean; confirm the FX_Orders runtime Form is not open in the Web Client; create this record and its evidence. **Stop before the wizard.**

## Sources reviewed (before browser interaction)

- `AGENTS.md` (full; LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt5.md`, Section 5 (lines 151–167: 06:32–08:15) with its replacement caution (line 166: replacement "can erase prior form layout, events and test evidence; the narrated tutorial does not provide a rollback plan"); the source limitations (line 372: the wizard prompts twice to replace; preservation and rollback not addressed). Narration: category Classic, wizard Multi-View, name = existing form, data source = IDO, Next, "replace" accepted; fields added via the arrow button; order reset; Finish and accept replacement. Narration is unverified (transcript only).
- `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` (status block and T2/T3/T5/T10 sections, read in part): the Classic Multi-View route (Designer New > Classic > MultiView > OK; page 1 Name and Data Source; page 2 Primary Collection; page 3 order by move-up/down presses and Include checkboxes; the final page sentence; Save Template unchecked; Finish once). Its EXP-072 Form had four business fields and four label/input pairs. The Designer Select Form picker did not list FX_Orders in T4 (unresolved there); the Form menu recent-forms entry did (used here). The wizard-generated caption IDs appear on page 3 and were not strings at that time.
- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (status block; T3 and T4 sections in part): the unload pair and its preference gate. The Web Client preference `Unload IDO Metadata With Forms` read as checked (read-only, closed with Close Window); the Web Client `Form > Definition > Unload All Global Form Objects` and the Designer `Form > Definition > Unload All Global Form Objects` (Designer Form closed) were each invoked once, silently. Not used in T1 (conditional branch only).
- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (status block; T1 17-property inventory; T2 readbacks): the 17 FX_Orders IDO properties and the Label String ID / Read Only state. Cited values (not re-observed in EXP-082 T1): FX_DerOrderTotal (Derived; class FX_Cost; expression `FX_Count * FX_ItmsCost`; Label `FX_sOrderTotal`; Read Only checked), FX_OrderNumber (class FX_OrderNumBase; Label `FX_sOrderNumber`), FX_CusName (`fxcus.FX_Label`; Label `FX_sCustomerName`; Read Only), FX_CustomerID (class FX_CustomerID; class label `FX_sCustomerID`), FX_ItmsDescription (`fxitms.FX_Description`; Label `FX_sItemDescription`; Read Only), FX_Item (class FX_Item), FX_ItmsCost (class FX_Cost; label `FX_sCost` displayed through the class), FX_Count (Long Integer), FX_CusAddress (`fxcus.FX_Address`; Label `FX_sAddress`; Read Only), FX_ItmsPicture (class FX_Picture; Binary), plus the seven system properties CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow. Per EXP-081 T5, the post-recovery inventory is 17 rows. The brief's set order is 10 included properties (four business and six new).
- `experiments/EXP-080-R3-…md` (status block; T2 baseline 16 rows; T4 FX_DerOrderTotal Finish; wizard field record): the Derived property's expression and class; the Derived wizard page layout. Cited only.
- `experiments/EXP-079-…md` (status block; T3 and T4 gates): the joined-property Bound pattern (`fxitms.FX_Description`, `fxitms.FX_Cost`, `fxitms.FX_Picture`). Cited only.
- `experiments/EXP-078-…md` (status block; T1 baseline): the joined-property Bound pattern (`fxcus.FX_Label`, `fxcus.FX_Address`). Cited only.
- Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git command. Remaining portions of the long EXP-072, EXP-076, EXP-079, EXP-080-R3 and EXP-081 records (later task sections) were not read in full; the facts used are those in their status blocks and the sections named above.

## Browser preflight and session (AC-1)

| Step | Observed | Evidence |
|---|---|---|
| `browser_tabs` list (first call in the task; before any selection) | Tab 0: Infor Mongoose Application Development Framework (Designer; `mode=designer`; current; no `MGForm` parameter). Tab 1: Mongoose Web Client (`favoriteContext=IdoProperties`) | — |
| Tab 0 selected (after the list) | Succeeded. Fresh untargeted snapshot: Designer with **no Form open** (no Form tab; empty canvas); footer `[ ScopeType: User / ScopeName: <operator account> ]`; toolbar Save and Regenerate Form disabled; Undo and Redo disabled; no dialog | snapshot (tool output); `t1-01` |
| Session | Usable. No "Session Expired" modal, no Infor sign-in page, no `portal-notification` banner, no native dialog at start. Re-login count **0** | `t1-01`, `t1-06` |
| Designer clean state at start | Save disabled; no Form open; no unsaved change | `t1-01` |

## Baseline: the existing User-scoped Form FX_Orders (AC-1)

### Open route

1. Designer **Form** menu (one click) → the recent-forms list contains `FX_Orders` (menu entries also listed `IDO Properties`, `IDOs`, `FX_HelloWorld01`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_Items`, `FX_UMs`, `Export/Import Strings`).
2. Recent-forms entry `FX_Orders` (one click). The Form opened as one Designer tab (`closable FX_Orders`), **no Select Form dialog**.

### Identity and scope (observed after the open; `t1-02`)

| Field | Observed |
|---|---|
| Form tab / canvas title | `FX_Orders` (one tab; `MGForm=FX_Orders` in the tab URL) |
| Properties > Design > Name | `FX_Orders` |
| Device Type | `Default` |
| Form Type | `Normal` |
| Is Master | `True` |
| Footer | `ScopeType: User / ScopeName: <operator account>` |
| Save / Undo | disabled (clean) |
| Canvas | the Form in its current layout: labels `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:` (resolved text); an Order Number Edit, Customer ID and Item ComboBoxes, and a Count Edit visibly showing `1`; the grid at the left with a new-row marker on row 1. The accessibility tree also reads the Order Number Edit as `3` (an add-mode placeholder; the image does not show that value). Nothing was saved or entered by the worker |

### Details > Components (observed; Pane (00) and Pane (01) expanded; `t1-03`, `t1-04`)

The Details panel was expanded (one click), the Components tab selected (one click), and the Components grid Expand button pressed once (view only).

| Pane | Name | Type | Data Source (binding) | Pane | Container | Tab | Caption (read on the Static only) |
|---|---|---|---|---|---|---|---|
| 00 | FormCollectionGrid | Grid | objects | 0 | — | 0 | — |
| 00 | FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | 0 | FormCollectionGrid | 1 | — |
| 00 | FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | 0 | FormCollectionGrid | 2 | — |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 3 | — |
| 00 | FX_CountGridCol | GridColumn | object.FX_Count | 0 | FormCollectionGrid | 4 | — |
| 01 | FX_OrderNumberStatic | Static | — | 1 | — | 5 | `FX_sOrderNumber` |
| 01 | FX_OrderNumberEdit | Edit | object.FX_OrderNumber | 1 | — | 6 | not read |
| 01 | FX_CustomerIDStatic | Static | — | 1 | — | 7 | `FX_sCustomerID` |
| 01 | FX_CustomerIDCombobox | ComboBox | object.FX_CustomerID | 1 | — | 8 | not read |
| 01 | FX_ItemStatic | Static | — | 1 | — | 9 | `FX_sItem` |
| 01 | FX_ItemCombobox | ComboBox | object.FX_Item | 1 | — | 10 | not read |
| 01 | FX_CountStatic | Static | — | 1 | — | 11 | `FX_sCount` |
| 01 | FX_CountEdit | Edit | object.FX_Count | 1 | — | 12 | not read |

Counts: **13 components** in total = 1 grid + 4 grid columns + 8 Pane (01) field components (the two Pane containers are tree nodes, not counted). The EXP-072 "eight components" are the eight Pane (01) field components. The captions are raw string IDs in the Properties Caption field (for example `FX_sCount`); the canvas shows the resolved text (`Count:`).

Captions of the Edit and ComboBox components were not read in T1 (the label Static carries the caption). Stated as an omission.

### Caption reads (selection only; no edit)

Four Static rows were selected once each (one click per row) and each Caption field was read with a find: `FX_OrderNumberStatic` = `FX_sOrderNumber`; `FX_CustomerIDStatic` = `FX_sCustomerID`; `FX_ItemStatic` = `FX_sItem`; `FX_CountStatic` = `FX_sCount` (`t1-04`: FX_CountStatic selected; Type Static; Caption `FX_sCount`; Save disabled). No Caption was typed, opened or changed.

### Close (clean)

The Form-tab control `closable FX_Orders` was clicked once. **No save prompt appeared.** The page URL lost its `MGForm` parameter; the Designer canvas is empty; no tab is open; Save disabled; footer `ScopeType: User` (`t1-05`).

## Web Client state (AC-1)

- Tab 1 selected (after the tab list in this task). A fresh untargeted snapshot showed **no FX_Orders runtime Form** (no `FX_Orders` text in the snapshot; the Form tab list contained only the `IDO Properties` panel). Save disabled.
- The `IDO Properties` panel visible at T1 start showed **blank criteria** (`Property Name` empty; status `Filter in Place`), not the EXP-081 final row-14 state. The cause is not established. It is not part of EXP-082 and was not changed.
- Nothing was done in the Web Client beyond the tab select and the snapshot and screenshot (`t1-06`). The runtime FX_Orders was not opened, closed or edited.

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; Designer in User scope and clean; the existing FX_Orders Form and its components recorded before the wizard | **SUPPORTED (observed; UI and accessibility level; same session).** Sources reviewed (above). Session usable. Designer: no Form open at start; footer User; Save disabled. FX_Orders opened once (recent-forms); identity Name FX_Orders, Normal, Is Master True, Default, footer User, Save disabled; 13 components with bindings and four Static captions recorded; closed once clean with no prompt. | `t1-01` (start), `t1-02` (identity, canvas), `t1-03` (components tree), `t1-04` (captions; Save disabled), `t1-05` (after close), `t1-06` (Web Client) | Same session only. Edit and ComboBox captions not read. The Designer picker route (Select Form) was not used. Footer scope name is recorded as a placeholder. |
| AC-2 to AC-6 | **Not started** (wizard and later steps are later tasks) | — | — |

## Action audit (T1; exact counts; cumulative for EXP-082 T1)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first selection. |
| `browser_tabs` select | **2** | Tab 0 (Designer), then tab 1 (Web Client). |
| Untargeted snapshots (explicit `browser_snapshot`) | **5** | (1) Designer start; (2) after the recent-forms open; (3) after Details expand (saved to `evidence/EXP-082/snapshot-t1-03-details-expanded-form-tab.yml`); (4) after the Components tab; (5) Web Client start (saved to `evidence/EXP-082/snapshot-t1-06-webclient-start-state.yml`). |
| Targeted snapshots | **0** | |
| `browser_find` (read-only) | **7** | `Form` (1); `Save` (2); `Caption` (4, one per Static row); `Save` (1, before close). |
| Element clicks (successful / failed) | **10 / 0** | (1) Designer Form menu; (2) recent-forms `FX_Orders`; (3) Details Expand Panel; (4) Components tab; (5) Components grid Expand (view); (6) `FX_OrderNumberStatic` row; (7) `FX_CustomerIDStatic` row; (8) `FX_ItemStatic` row; (9) `FX_CountStatic` row; (10) Form-tab control `closable FX_Orders` (close). |
| Coordinate clicks / mouse moves / wheel / hover / drag | **0** | |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** | |
| Waits | **0** | |
| Screenshots (worker-requested PNG) | **6** | `t1-01` to `t1-06`. |
| Form opens (FX_Orders) | **1** | Recent-forms entry; no Select Form dialog. |
| Form closes (FX_Orders) | **1** | Clean; no prompt. |
| Select Form dialogs opened / answered | **0 / 0** | |
| Wizard openings (New > Classic > Multi-View) | **0** | Not reached (stop point). |
| Finish / replacement prompts / replacement Yes answers | **0 / 0 / 0** | |
| Designer Save | **0** | Save disabled throughout. |
| Unloads (Web Client / Designer) | **0 / 0** | Conditional branch not reached. |
| Preference reads / changes | **0 / 0** | |
| Strings created / caption edits | **0 / 0** | Caption fields were read only. |
| Component changes (add, delete, move, edit) | **0** | Selections only. |
| Designer top-toolbar Delete clicks | **0** | |
| IDO, property, class, SQL or runtime-record changes | **0** | |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** | |
| FormSync, deployment, regeneration, cache actions | **0** | |
| Runtime FX_Orders open / close / record edits | **0 / 0 / 0** | Not open at the start; not opened. |
| Re-login / session-expiry procedure / portal navigation | **0 / 0 / 0** | Session usable. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | The tool wrapper code in tool output is not worker input. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | |
| Ref-not-found errors / timeouts / native dialogs | **0 / 0 / 0** | No recovery snapshot used. |
| Portal banner dismissals | **0** | None visible. |

Cumulative for EXP-082 across all tasks: T1 only (this record). Wizard openings 0 of 2 allowed; Finish 0 of 1; Save 0 of 1; unloads 0 (0+0 of 1+1 allowed); close/reopen 1 close, 0 reopen (reopen is AC-5, later); strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1 allowed.

## Worker-written-file inventory (T1)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (created; this record).
- `evidence/EXP-082/t1-01-designer-start-state-no-form-user-scope-clean.png` (created).
- `evidence/EXP-082/t1-02-baseline-fx_orders-designer-open-form-tab-identity-user-scope.png` (created).
- `evidence/EXP-082/t1-03-baseline-components-list-expanded-before-caption-reads.png` (created).
- `evidence/EXP-082/t1-04-baseline-components-captions-read-clean-before-close.png` (created).
- `evidence/EXP-082/t1-05-designer-after-fx_orders-closed-once-no-prompt.png` (created).
- `evidence/EXP-082/t1-06-webclient-no-fx_orders-runtime-open-clean.png` (created).
- `evidence/EXP-082/snapshot-t1-03-details-expanded-form-tab.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-082/snapshot-t1-06-webclient-start-state.yml` (created by the snapshot tool at the worker's filename request).

Tool-generated, not worker-authored: Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-14T01-24-14-501Z`… `page-2026-10-14T01-25-54-580Z.yml`, `console-2026-10-14T01-24-14-501Z.log`). They were read only as readbacks (by Grep and Read) and are outside the EXP-082 path (known confinement limitation; the operator's git review is authoritative).

No other repository file was written, edited or deleted in T1.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t1-01-designer-start-state-no-form-user-scope-clean.png` | Designer with an empty canvas; no Form tab; Save and Undo greyed; footer `ScopeType: User` | **AC-1** start state: no Form open, User scope, clean | Any Form's contents |
| `t1-02-baseline-fx_orders-designer-open-form-tab-identity-user-scope.png` | Form tab `FX_Orders`; Properties: Name `FX_Orders`, Device Type Default, Form Type Normal, Is Master True; footer `ScopeType: User`; canvas labels `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`; Save greyed | **AC-1** identity, scope and clean state of the existing Form before the wizard; resolved label text on the canvas | The component list (see `t1-03`/`t1-04`); the stored Form definition beyond this session |
| `t1-03-baseline-components-list-expanded-before-caption-reads.png` | Details > Components tab; Pane (00) expanded with FormCollectionGrid and grid-column rows (Type, Data Source object.FX_OrderNumber / FX_CustomerID / FX_Item / FX_Count); Save greyed | **AC-1** the grid and grid-column bindings | Pane (01) rows (see `t1-04`), which are below the visible area in this image |
| `t1-04-baseline-components-captions-read-clean-before-close.png` | Components grid scrolled to Pane (01) rows: FX_CustomerIDStatic (Static, 7), FX_CustomerIDCombobox (ComboBox, object.FX_CustomerID, 8), FX_ItemStatic (9), FX_ItemCombobox (ComboBox, object.FX_Item, 10), FX_CountStatic (Static, 11); Properties of FX_CountStatic: Caption `FX_sCount`, Type Static; Save greyed | **AC-1** Pane (01) bindings and types for four rows, the Caption of FX_CountStatic, and the clean state | The first Pane (01) rows (FX_OrderNumberStatic, FX_OrderNumberEdit, FX_CountEdit) and the other captions, which are read through the find readbacks, not this image |
| `t1-05-designer-after-fx_orders-closed-once-no-prompt.png` | Empty Designer canvas; no Form tab; Save greyed; footer `ScopeType: User`; no dialog | **AC-1** the clean close with no prompt | That the stored definition was unchanged (no reopen was performed) |
| `t1-06-webclient-no-fx_orders-runtime-open-clean.png` | Web Client (portal-embedded Mongoose): an IDO Properties panel with blank criteria (`Filter in Place`), Save disabled; no FX_Orders runtime tab | The runtime FX_Orders Form is not open; no dialog | The IDO Properties state (pre-existing; not explained); any runtime data |

All six screenshots were viewed (Read) before citing. The Designer identity is also established by the snapshot readbacks (Name, footer, tab URL `MGForm=FX_Orders`).

## Observations (observed only)

1. The Designer's Form menu recent-forms list contained `FX_Orders`, and selecting it opened the Form without a Select Form dialog. This is the route the brief names (EXP-072).
2. The Designer footer shows `ScopeType: User` for the opened Form and the Designer start state.
3. The canvas labels display resolved text (`Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`), while the Properties Caption of each Static shows the raw string IDs (`FX_sOrderNumber`, `FX_sCustomerID`, `FX_sItem`, `FX_sCount`). The string IDs resolve (EXP-072 created the strings).
4. The Edit and ComboBox components have no caption value read in T1 (the label Static carries it).
5. The EXP-072 T4 Designer Select Form zero-row observation was not repeated; the recent-forms route worked in this session (this is a different route; no conclusion is drawn about the Select Form picker).
6. The Web Client `IDO Properties` panel had blank criteria at T1 start (not the EXP-081 end state). Cause not established; not acted on.
7. No Session Expired modal, no sign-in page, no portal banner, no native dialog appeared in T1.

## Knowledge state (per finding)

| Finding | State |
|---|---|
| The Designer started with no Form open, User scope footer and Save disabled | **observed** (one run; `t1-01`) |
| FX_Orders opens from the Form menu recent-forms entry (no Select Form dialog) with Name FX_Orders, Normal, Is Master True, Default, User scope, clean | **observed** (one run; `t1-02`) |
| FX_Orders (pre-wizard) has 13 components: grid, four grid columns (bindings object.FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count) and eight Pane (01) field components (Static / Edit / ComboBox types and bindings as in the table) | **observed** (one run; accessibility readbacks and `t1-03`/`t1-04`) |
| Static captions: FX_sOrderNumber, FX_sCustomerID, FX_sItem, FX_sCount (raw IDs in the Caption field; resolved text on the canvas) | **observed** (one run) |
| Clean close of FX_Orders through the Form-tab control: no prompt | **observed** (one run; `t1-05`) |
| Web Client has no FX_Orders runtime Form at T1 | **observed** (one run; `t1-06`) |
| The 17-property inventory and Label String IDs of the IDO (cited from EXP-081) | **cited, not re-observed** in EXP-082 T1 |
| Replay, durability, or wizard behaviour | **not claimed** (not started; not replay_verified) |

## Open questions and blockers

1. **No blocker in T1.** The baseline is complete; the stop point is reached.
2. **Web Client IDO Properties panel** showed blank criteria at T1 start (not the EXP-081 row-14 state). Cause not established; not acted on (outside EXP-082 scope).
3. **Edit and ComboBox caption values** were not read in T1. Read them only if a later task needs them (read-only).
4. **Designer Select Form picker** was not exercised in T1 (EXP-072 T4 discrepancy unresolved there; not in EXP-082 scope).
5. The remaining EXP-082 steps (wizard pages, the replacement prompts, Finish, the conditional unload if page 2 lacks any of the six new properties, the Designer Save if dirty, close and reopen, and the verification) are for later tasks under their own authorization.

## Next permitted action (not authorized in T1)

Wizard task (separate authorization): from the clean Designer (no Form open), Designer toolbar New > Category Classic > Wizard MultiView > OK; page 1 Name `FX_Orders` by one plain fill, Form Type MultiView, Data Source `FX_Orders`; page 2 record every property offered and include the six new properties with the four business fields; page 3 order the ten properties with single move presses and all Include checked; final page Save Template unchecked; Finish once only after every gate passes; answer Yes once to each replacement prompt that explicitly names FX_Orders; stop at any other prompt. The conditional unload branch runs only if page 2 lacks one of the six new properties.

Classification remains **observed only, NOT replay_verified**.

---

## T10 — final documentation and evidence reconciliation (cycle 11; documentation only; zero browser calls)

- Task T10, cycle 11, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `6356e49b-0794-4dde-9e6c-8a25295298ce`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope: read this record and the controller audits `harness-audit-T1.md` to `harness-audit-T9.md`; write `evidence/EXP-082/T10-final-acceptance-report.md`; update only this record. No browser call, no Mongoose change.
- Result: the full AC-1 to AC-6 matrix, the exact cumulative audit, the file inventory, the process deviation and the recommendation are in `evidence/EXP-082/T10-final-acceptance-report.md`. Summary:
  - AC-1 to AC-5: **supported (observed; same session)**. AC-6: satisfied by the report.
  - Browser calls T1–T9: **361** (tab lists 9; tab selects 3; snapshots 51; screenshots 42; clicks 154 successful, 0 failed; finds 93; types 2; mouse moves 3; wheel 4). Clicks: 78 row selections, 26 move-up presses, 50 lifecycle, dialog and view clicks.
  - Lifecycle: wizard openings 2 (T2, T5); wizard Cancel 1 and discard Yes 1 (T4); Finish 1 (T7); replacement prompts 3, each answered OK once (T3, T5, T7); timeout OK 1 (T4); success OK 1 (T7); Save Template unchecked 1 (T7); Designer Save 0; unloads 0; Form opens 3 and closes 3 (T1 baseline; T4 verification; T9 post-Finish reopen and close, 1 each).
  - Strings 0; caption edits 0; IDO changes 0; checkout actions 0; Designer Delete 0; re-logins 0; navigation 0; key presses 0.
  - Deviation (disclosed, not excused): the T9 stale-locator click (audit row 79). The audit records the call as `ok` and does not show the locator. `snapshot-t9-07` (line 661) shows the active row still FX_ItemStatic, with Save and Undo disabled and no dialog. The T9 close, reopen and full inventory preceded the click. The find at row 80 has no recorded output.
  - Final state (as of `snapshot-t9-08`; no browser call in T10): FX_Orders open and selected; ScopeType User; Save and Undo disabled; no dialog.
  - Recommendation: **ACCEPTED AS OBSERVED**, conditional on the coordinator accepting the T9 deviation as not disqualifying. Not claimed: database durability, independent persistence validation, replay_verified.
- Worker-written files in T10: `evidence/EXP-082/T10-final-acceptance-report.md` (created); this record (edited: status header; T9 audit rows; this section).

## T9 — post-Finish clean close and reopen; comparison against T8 (cycle 10; Form left open, clean)

- Task T9, cycle 10, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `c6903a95-088e-4a0e-bfa7-5e3d6d7f6cbf`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T9 instruction): tab list and fresh snapshot; confirm FX_Orders selected, User scope, no wizard or alert, Save and Undo disabled; pre-close screenshot; close once through the Form-tab control; reopen once through the Form menu recent-forms entry; verify identity, full component inventory, and every caption reading against T8; no edit, string, caption, binding, component, Save, unload, Delete, or runtime change.

### Pre-close gate

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call) | Tab 0 Designer (current; `MGForm=FX_Orders`); tab 1 Web Client | — |
| Fresh snapshot (tab 0 current; no select) | FX_Orders tab selected (`closable FX_Orders`); footer `ScopeType: User`; Save and Undo disabled; no wizard, no alert; Components tab with Pane (00)/(01) expanded | `snapshot-t9-01-fresh-start-designer.yml` |
| Pre-close screenshot | Identity FX_Orders, Save greyed, footer User; Properties panel on FX_ItmsPictureEdit (Edit) | `t9-01` |
| Gate verdict | **Passed**: clean, User scope, no dialog. Close proceeded | — |

### Close (once)

- The Form-tab close control (`closable FX_Orders`) clicked **once**. **No prompt appeared** (no save prompt, no native dialog). The Form tab disappeared; the Designer showed no Form; footer `ScopeType: User` (`snapshot-t9-02-after-close-once.yml`, `t9-02`).

### Reopen (once)

- Form menu (one click) → recent-forms entry `FX_Orders` (one click; `menuitem` present at the top of the recent list). The Form opened as a tab with `MGForm=FX_Orders`. **No Select Form dialog, no direct URL, no wizard.**
- Identity at reopen (`snapshot-t9-03-reopened-fx_orders-identity.yml`, `t9-03`): tab `FX_Orders` selected and closable; Name `FX_Orders`; Device Type `Default`; Form Type `Normal`; Is Master `True`; footer `ScopeType: User / ScopeName: <operator account>` (masked in tool output); Save and Undo **disabled**; no dialog.

### Components after reopen (expanded; 31 rows)

Read from `snapshot-t9-06-components-expanded-reopened.yml` (Pane (00): 1 grid, 10 GridColumns; Pane (01): 10 Static, 10 detail). Each row matches T8 (name, type, Data Source binding, Pane, tab).

| Tab | Component (T9 = T8) | Type | Binding | Match to T8 |
|---|---|---|---|---|
| 0 | FormCollectionGrid | Grid | objects | yes |
| 1 | FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | yes |
| 2 | FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | yes |
| 3 | FX_CusNameGridCol | GridColumn | object.FX_CusName | yes |
| 4 | FX_CusAddressGridCol | GridColumn | object.FX_CusAddress | yes |
| 5 | FX_ItemGridCol | GridColumn | object.FX_Item | yes |
| 6 | FX_ItmsDescriptionGridCol | GridColumn | object.FX_ItmsDescription | yes |
| 7 | FX_ItmsCostGridCol | GridColumn | object.FX_ItmsCost | yes |
| 8 | FX_CountGridCol | GridColumn | object.FX_Count | yes |
| 9 | FX_DerOrderTotalGridCol | GridColumn | object.FX_DerOrderTotal | yes |
| 10 | FX_ItmsPictureGridCol | GridColumn | object.FX_ItmsPicture | yes |
| 11 | FX_OrderNumberStatic | Static | — | yes |
| 12 | FX_OrderNumberEdit | Edit | object.FX_OrderNumber | yes |
| 13 | FX_CustomerIDStatic | Static | — | yes |
| 14 | FX_CustomerIDCombobox | **ComboBox** | object.FX_CustomerID | yes |
| 15 | FX_CusNameStatic | Static | — | yes |
| 16 | FX_CusNameEdit | Edit | object.FX_CusName | yes |
| 17 | FX_CusAddressStatic | Static | — | yes |
| 18 | FX_CusAddressEdit | Edit | object.FX_CusAddress | yes |
| 19 | FX_ItemStatic | Static | — | yes |
| 20 | FX_ItemCombobox | **ComboBox** | object.FX_Item | yes |
| 21 | FX_ItmsDescriptionStatic | Static | — | yes |
| 22 | FX_ItmsDescriptionEdit | Edit | object.FX_ItmsDescription | yes |
| 23 | FX_ItmsCostStatic | Static | — | yes |
| 24 | FX_ItmsCostEdit | Edit | object.FX_ItmsCost | yes |
| 25 | FX_CountStatic | Static | — | yes |
| 26 | FX_CountEdit | Edit | object.FX_Count | yes |
| 27 | FX_DerOrderTotalStatic | Static | — | yes |
| 28 | FX_DerOrderTotalEdit | Edit | object.FX_DerOrderTotal | yes |
| 29 | FX_ItmsPictureStatic | Static | — | yes |
| 30 | FX_ItmsPictureEdit | **Edit** (not image) | object.FX_ItmsPicture | yes |

- Result: 31 components, the same as T8. No difference in type, binding, tab order or count. FX_CustomerID and FX_Item remain ComboBox. FX_ItmsPicture remains an Edit bound to `object.FX_ItmsPicture`.

### Caption comparison (T9 reopened vs T8 post-Finish)

| Component | T8 Caption | T9 Caption | Match |
|---|---|---|---|
| FX_OrderNumberStatic | `FX_sOrderNumber` | `FX_sOrderNumber` | yes |
| FX_CustomerIDStatic | `FX_sCustomerID` | `FX_sCustomerID` | yes |
| FX_CusNameStatic | `FX_sCustomerName` | `FX_sCustomerName` | yes |
| FX_CusAddressStatic | `FX_sAddress` | `FX_sAddress` | yes |
| FX_ItemStatic | `FX_sItem` | `FX_sItem` | yes |
| FX_ItmsDescriptionStatic | `FX_sItemDescription` | `FX_sItemDescription` | yes |
| FX_ItmsCostStatic | `FX_sCost` | `FX_sCost` | yes |
| FX_CountStatic | `FX_sCount` | `FX_sCount` | yes |
| FX_DerOrderTotalStatic | `FX_sOrderTotal` | `FX_sOrderTotal` | yes |
| FX_ItmsPictureStatic | blank | blank | yes |
| FX_OrderNumberGridCol | `FX_sOrderNumber` | `FX_sOrderNumber` | yes |
| FX_CustomerIDGridCol | `FX_sCustomerID` | `FX_sCustomerID` | yes |
| FX_CusNameGridCol | `FX_sCustomerName` | `FX_sCustomerName` | yes |
| FX_CusAddressGridCol | `FX_sAddress` | `FX_sAddress` | yes |
| FX_ItemGridCol | `FX_sItem` | `FX_sItem` | yes |
| FX_ItmsDescriptionGridCol | `FX_sItemDescription` | `FX_sItemDescription` | yes |
| FX_ItmsCostGridCol | `FX_sCost` | `FX_sCost` | yes |
| FX_CountGridCol | `FX_sCount` | `FX_sCount` | yes |
| FX_DerOrderTotalGridCol | `FX_sOrderTotal` | `FX_sOrderTotal` | yes |
| FX_ItmsPictureGridCol | blank | blank | yes |
| FX_OrderNumberEdit | `C(FX_OrderNumberStatic)` | `C(FX_OrderNumberStatic)` | yes |
| FX_CustomerIDCombobox | `C(FX_CustomerIDStatic)` | `C(FX_CustomerIDStatic)` | yes |
| FX_CusNameEdit | `C(FX_CusNameStatic)` | `C(FX_CusNameStatic)` | yes |
| FX_CusAddressEdit | `C(FX_CusAddressStatic)` | `C(FX_CusAddressStatic)` | yes |
| FX_ItemCombobox | `C(FX_ItemStatic)` | `C(FX_ItemStatic)` | yes |
| FX_ItmsDescriptionEdit | `C(FX_ItmsDescriptionStatic)` | `C(FX_ItmsDescriptionStatic)` | yes |
| FX_ItmsCostEdit | `C(FX_ItmsCostStatic)` | `C(FX_ItmsCostStatic)` | yes |
| FX_CountEdit | `C(FX_CountStatic)` | `C(FX_CountStatic)` | yes |
| FX_DerOrderTotalEdit | `C(FX_DerOrderTotalStatic)` | `C(FX_DerOrderTotalStatic)` | yes |
| FX_ItmsPictureEdit | `C(FX_ItmsPictureStatic)` | `C(FX_ItmsPictureStatic)` | yes |

- 30 caption readings, all match T8. (The T9 readings are the Caption field values as read; canvas text was not re-read beyond the screenshots.)
- Canvas (`t9-03`, `t9-04`): labels show the same resolved and raw forms as T8: `Order Number:*`, `Customer ID:*`, `FX_sCustomerName:` (raw), `Address:`, `Item:*`, `FX_sItemDescription:` (raw), `Cost:`, `Count:`, `FX_sOrderTotal:` (raw).

### Acceptance checks (T9)

| AC | T9 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed at the gate (User scope; clean; FX_Orders open) | `snapshot-t9-01`, `t9-01` | Same session |
| AC-2 | Not re-run (no wizard). Recorded in T5–T7 | — | — |
| AC-3 | Not re-run (no Finish, no replacement answer in T9). Recorded in T7 | — | — |
| AC-4 | **Re-verified after reopen**: 31 components, bindings and types unchanged from T8; 30 captions unchanged; Save disabled (no Designer Save needed) | `snapshot-t9-06`, `snapshot-t9-08`, `t9-04` | Captions read as Caption field values; the Edit/ComboBox expressions are unchanged but their meaning is still unresolved |
| AC-5 | **Supported (observed, same session)**: clean Form closed once (no prompt) and reopened once through the Form-menu recent-forms entry; Name FX_Orders, ScopeType User, components, bindings and captions recovered | `t9-01` (pre-close), `t9-02` (after close), `t9-03` (reopen identity), `t9-04` (reopened components and clean state); snapshots `t9-02`, `t9-03`, `t9-06`, `t9-08` | Ordinary same-session close and reopen only; not a server-side or cache-cleared check; ScopeName masked in tool output |
| AC-6 | Not started here (final report is a documentation task after coordinator review) | — | — |

### Action audit (T9; exact counts)

| Operation | T9 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 current; no select issued) |
| Explicit snapshots | **8** (`snapshot-t9-01` to `-08`; Glob-confirmed on disk) |
| Targeted snapshots | **0** |
| `browser_find` (read-only) | **32** (audit-verified in T10: 1 pre-close Save read; 31 caption-type reads = 10 Static + 10 GridColumn + 11 detail, including one read at audit row 80 whose output is not recorded; 30 distinct caption readings are recorded) |
| Element clicks | **37 / 0** (audit-verified in T10: 6 lifecycle and view clicks, close 1, Form menu 1, recent-forms 1, Details Expand 1, Components tab 1, grid Expand 1; plus 31 row-selection clicks, including the stray-locator click at audit row 79 and the corrected FX_ItemCombobox selection at row 83) |
| Mouse move / wheel | **0 / 0** |
| Screenshots | **4** (`t9-01`, `t9-02`, `t9-03`, `t9-04`) |
| Type / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Form closes / reopens (FX_Orders) | **1 / 1** |
| Designer Save / unloads / preference reads | **0 / 0 / 0** |
| Wizard openings / Finish / replacement prompts | **0 / 0 / 0** |
| Strings / caption edits / component changes / binding changes | **0 / 0 / 0 / 0** |
| Designer Delete clicks | **0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out; FormSync; deployment; regeneration | **0** |
| Re-logins; portal navigation; sign-in; Web Client actions | **0** |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native browser dialogs | **0 / 0 / 0** |

**Notes on the counts:**
- Verified on disk: 8 snapshot files, 4 screenshots, and the 8 T9 record files listed in the inventory above.
- Stray locator: one click used a locator string (`#ext-9754`) carried over from an earlier tool output instead of a current-snapshot ref. It was a row-selection action, not a Mongoose lifecycle action. Snapshot `snapshot-t9-07` then confirmed no state change (Save and Undo disabled, no dialog, prior selection still FX_ItemStatic). The FX_ItemCombobox row was then selected with a ref from the current snapshot and read. This is a rule departure and is reported as such.
- Click and find totals were checked in T10 against the controller audit `evidence/EXP-082/harness-audit-T9.md`: 37 clicks, 32 finds, 8 snapshots, 4 screenshots, 1 tab list, 0 tab selects. The earlier "not re-verified" wording is superseded.
- No failed finds, no ref-not-found errors, and no timeouts are recorded in T9.

### Limitations

- Same-session close and reopen only (the brief's weak persistence boundary). This is not a database check, not a cache-cleared check, and not replay verification.
- Caption values are read from the Properties panel. The `C(<Static>)` expressions were compared as text; their meaning is not resolved here.
- Screenshots show identity, the Components tab, lower rows, and the clean Save state. The full 31-row list is supported by the snapshot (`snapshot-t9-06`), not by a single image.
- `t9-03` and `t9-04` show the Form's Properties and lower Components rows; the Pane (00) grid rows are in `snapshot-t9-06`.

### Worker-written-file inventory (T9)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; this T9 section).
- `evidence/EXP-082/t9-01-pre-close-fx_orders-identity-user-scope-clean.png`
- `evidence/EXP-082/t9-02-after-close-once-form-tab-gone-user-scope.png`
- `evidence/EXP-082/t9-03-reopened-fx_orders-identity-user-scope-save-disabled.png`
- `evidence/EXP-082/t9-04-reopened-components-expanded-caption-readbacks-clean-save-disabled.png`
- `evidence/EXP-082/snapshot-t9-01-fresh-start-designer.yml`
- `evidence/EXP-082/snapshot-t9-02-after-close-once.yml`
- `evidence/EXP-082/snapshot-t9-03-reopened-fx_orders-identity.yml`
- `evidence/EXP-082/snapshot-t9-04-details-expanded-reopened.yml`
- `evidence/EXP-082/snapshot-t9-05-components-tab-reopened.yml`
- `evidence/EXP-082/snapshot-t9-06-components-expanded-reopened.yml`
- `evidence/EXP-082/snapshot-t9-07-after-itemcombobox-selection-check.yml`
- `evidence/EXP-082/snapshot-t9-08-final-clean-state-after-caption-reads.yml`

Tool-generated, not worker-authored: the `evidence\playwright\page-2026-10-14T02-*.yml` files written by the Playwright tooling during this session. They span earlier tasks as well, and this record does not attribute individual files to T9. Those files are outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Decisive evidence (T9)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t9-01` | FX_Orders tab; Save greyed; footer `ScopeType: User`; Properties on FX_ItmsPictureEdit | Clean, User-scoped pre-close state | Stored definition |
| `t9-02` | Designer with no Form open; footer User; no dialog | Clean close with no prompt | Persistence beyond the session |
| `t9-03` | Reopened FX_Orders; Name FX_Orders; Default; Normal; Is Master True; Save greyed; footer User | **AC-5** identity and scope recovered after reopen | Stored definition (same session) |
| `t9-04` | Components tab (lower rows: FX_CountStatic/Edit, FX_DerOrderTotalStatic/Edit, FX_ItmsPictureStatic/Edit with `object.FX_ItmsPicture`); Save greyed | **AC-4/AC-5** lower-row bindings and clean state after reopen | Upper rows (in `snapshot-t9-06`); Caption values (snapshot) |
| `snapshot-t9-06` | Full 31-row tree after reopen | **AC-4** full inventory matches T8 | Visual presentation |
| `snapshot-t9-08` | Save and Undo disabled; no dialog after all reads | Clean final state | — |

### Knowledge state (T9)

| Finding | State |
|---|---|
| FX_Orders closes cleanly (no prompt) and reopens from the Form-menu recent-forms entry with Name FX_Orders, User scope, Save disabled | **observed** (one run; same session) |
| After reopen, all 31 components, types, bindings and tab orders match T8 | **observed** (one run) |
| After reopen, all 30 caption readings match T8 (including the blank FX_ItmsPicture captions and the `C(...)` expressions) | **observed** (one run) |
| The three raw-ID canvas labels persist after reopen | **observed** (canvas; one run) |
| Server-side persistence of the layout and captions beyond this session | **unresolved** (same-session close and reopen only; not a server or cache check) |
| Database durability; replay verification | **not claimed**; not replay_verified |

### Open questions (T9)

1. Cross-session or server-side persistence (a fresh Designer session or a cache-clearing action) is not checked. Those actions are outside this bounded task.
2. The raw-ID labels (FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal) and the blank FX_ItmsPicture caption remain for EXP-083.
3. The `C(<Static>)` expression meaning needs a decision before EXP-083 treats the detail-control captions.

## T8 — post-Finish component and caption inventory (read-only; cycle 9; Form left open, clean)

- Task T8, cycle 9, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `f5bfbbfb-0f37-4ae6-9c52-ca5b46f2a077`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T8 instruction): tab list and fresh snapshot; confirm FX_Orders, User scope, no wizard or alert, Save and Undo disabled; read the Components structure and each property's Static, GridColumn and detail-control captions by read-only selection; capture screenshots; **no** Save, caption or string edit, component or binding change, unload, close, reopen or runtime open.

### Gate

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call) | Tab 0 Designer (current; `MGForm=FX_Orders`); tab 1 Web Client | — |
| Fresh snapshot (tab 0 current; no select) | Form tab `FX_Orders` (selected); footer `ScopeType: User`; Save and Undo disabled; no dialog or alert; Details > Components tab selected with the component tree expanded (Pane (00) and Pane (01)) | `snapshot-t8-01-fresh-start-designer.yml` |
| Gate verdict | **Passed.** The Form is FX_Orders, User scope, clean, no wizard or alert | — |

### Complete post-Finish component table (31 components)

Read from `snapshot-t8-01` (structure, types, bindings, tab orders) and from the Caption readings below. "Canvas" is the resolved or raw text shown on the Form canvas (`t7-06`, `t8-01`).

| Pane | Name | Type | Data Source (binding) | Tab | Caption (Caption field, as read) | Canvas display |
|---|---|---|---|---|---|---|
| 00 | FormCollectionGrid | Grid | objects | 0 | — | — |
| 00 | FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | 1 | `FX_sOrderNumber` | — |
| 00 | FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | 2 | `FX_sCustomerID` | — |
| 00 | FX_CusNameGridCol | GridColumn | object.FX_CusName | 3 | `FX_sCustomerName` | — |
| 00 | FX_CusAddressGridCol | GridColumn | object.FX_CusAddress | 4 | `FX_sAddress` | — |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 5 | `FX_sItem` | — |
| 00 | FX_ItmsDescriptionGridCol | GridColumn | object.FX_ItmsDescription | 6 | `FX_sItemDescription` | — |
| 00 | FX_ItmsCostGridCol | GridColumn | object.FX_ItmsCost | 7 | `FX_sCost` | — |
| 00 | FX_CountGridCol | GridColumn | object.FX_Count | 8 | `FX_sCount` | — |
| 00 | FX_DerOrderTotalGridCol | GridColumn | object.FX_DerOrderTotal | 9 | `FX_sOrderTotal` | — |
| 00 | FX_ItmsPictureGridCol | GridColumn | object.FX_ItmsPicture | 10 | **blank** | — |
| 01 | FX_OrderNumberStatic | Static | — | 11 | `FX_sOrderNumber` | `Order Number:*` (resolved) |
| 01 | FX_OrderNumberEdit | Edit | object.FX_OrderNumber | 12 | `C(FX_OrderNumberStatic)` | (input) |
| 01 | FX_CustomerIDStatic | Static | — | 13 | `FX_sCustomerID` | `Customer ID:*` (resolved) |
| 01 | FX_CustomerIDCombobox | **ComboBox** | object.FX_CustomerID | 14 | `C(FX_CustomerIDStatic)` | (input) |
| 01 | FX_CusNameStatic | Static | — | 15 | `FX_sCustomerName` | `FX_sCustomerName:` (**raw ID**) |
| 01 | FX_CusNameEdit | Edit | object.FX_CusName | 16 | `C(FX_CusNameStatic)` | (input) |
| 01 | FX_CusAddressStatic | Static | — | 17 | `FX_sAddress` | `Address:` (resolved) |
| 01 | FX_CusAddressEdit | Edit | object.FX_CusAddress | 18 | `C(FX_CusAddressStatic)` | (input) |
| 01 | FX_ItemStatic | Static | — | 19 | `FX_sItem` | `Item:*` (resolved) |
| 01 | FX_ItemCombobox | **ComboBox** | object.FX_Item | 20 | `C(FX_ItemStatic)` | (input) |
| 01 | FX_ItmsDescriptionStatic | Static | — | 21 | `FX_sItemDescription` | `FX_sItemDescription:` (**raw ID**) |
| 01 | FX_ItmsDescriptionEdit | Edit | object.FX_ItmsDescription | 22 | `C(FX_ItmsDescriptionStatic)` | (input) |
| 01 | FX_ItmsCostStatic | Static | — | 23 | `FX_sCost` | `Cost:` (resolved) |
| 01 | FX_ItmsCostEdit | Edit | object.FX_ItmsCost | 24 | `C(FX_ItmsCostStatic)` | (input; shows 0.00) |
| 01 | FX_CountStatic | Static | — | 25 | `FX_sCount` | `Count:` (resolved) |
| 01 | FX_CountEdit | Edit | object.FX_Count | 26 | `C(FX_CountStatic)` | (input; shows 1) |
| 01 | FX_DerOrderTotalStatic | Static | — | 27 | `FX_sOrderTotal` | `FX_sOrderTotal:` (**raw ID**) |
| 01 | FX_DerOrderTotalEdit | Edit | object.FX_DerOrderTotal | 28 | `C(FX_DerOrderTotalStatic)` | (input; shows 0.00) |
| 01 | FX_ItmsPictureStatic | Static | — | 29 | **blank** | not visible on canvas |
| 01 | FX_ItmsPictureEdit | **Edit** (not image) | object.FX_ItmsPicture | 30 | `C(FX_ItmsPictureStatic)` | (input) |

- Count: 1 grid + 10 GridColumns + 10 Static + 10 detail = **31**. Tab orders are contiguous 0–30 for the grid and Pane (01) rows.
- Every binding matches `object.<Property>` for the same property; no binding discrepancy was found in the read-only table.

### Caption readings (method and results)

- Static Captions: each Static row selected once (one click), Caption read with one `find` (ten reads). Values as in the table.
- GridColumn Captions: each GridColumn row selected once (one click); the Properties panel exposes a Caption field for GridColumns too, so these were read the same way (ten reads). FX_ItmsPictureGridCol is blank.
- Detail-control Captions: each Edit or ComboBox row selected once; the Caption field reads a **`C(<Static name>)`** expression on all ten detail controls (for example `C(FX_OrderNumberStatic)`), not a string ID. The meaning of the `C(...)` expression (a caption linked to the Static label) is **unresolved**; EXP-076 recorded the same form for its Edit captions.
- The Caption value is shown as read in the Properties panel. The canvas text is the rendered form. A raw ID means the string ID appears unresolved on the canvas; **whether the string exists is not checked here** (EXP-083 territory).

### Discrepancies from expected control types and captions

| # | Expected (brief or tutorial) | Observed | Classification |
|---|---|---|---|
| D1 | ComboBox for FX_CustomerID and FX_Item | ComboBox for both (rows 14 and 20) | **Matches** (no discrepancy) |
| D2 | An image-type control for FX_ItmsPicture, if the wizard creates one | **FX_ItmsPictureEdit is an Edit** bound to `object.FX_ItmsPicture`. No image-type control was created | Observed deviation from the tutorial's image intent; the brief allowed "if the wizard creates one" |
| D3 | Captions resolved (no raw IDs) | `FX_sCustomerName`, `FX_sItemDescription` and `FX_sOrderTotal` render as raw IDs on the canvas | Observed; cause not established (see open questions) |
| D4 | Every included property has a caption | **FX_ItmsPictureStatic** and **FX_ItmsPictureGridCol** Captions are **blank** | Observed anomaly (preserved; not edited) |
| D5 | Edit/ComboBox captions as label links | `C(<Static>)` expressions on all ten detail controls | Observed form; meaning unresolved |

### Evidence screenshots and limitations

- `t8-01-components-upper-rows-grid-columns-and-first-statics.png`: Form identity (FX_Orders; Normal; Is Master True; `ScopeType: User`), canvas, and **Pane (00) grid-column rows 1–4 only**; the Properties panel shows FX_ItmsPictureEdit (Caption `C(FX_ItmsPictureS…`). **The filename overstates the content: no Pane (01) Static rows are in this image.**
- `t8-02-components-lower-rows-detail-controls-and-itmspicture.png`: Pane (01) tabs **25–30**: FX_CountStatic (tab 25), FX_CountEdit (26), FX_DerOrderTotalStatic (27), FX_DerOrderTotalEdit (28), FX_ItmsPictureStatic (29, selected earlier), FX_ItmsPictureEdit (30, Edit, `object.FX_ItmsPicture`); Save and Undo greyed. **It does not show the other 24 rows; the full structure is from `snapshot-t8-01`.**
- Earlier evidence: `t7-07` (Pane (00) rows only), `t7-08` (FX_ItmsPictureStatic blank Caption, Edit below). `t8` supersedes the T7 note that the eight other Static Captions were not individually read: they are now read.
- Caption readbacks are accessibility-tree reads (the Caption field value), not screenshots, except the blank FX_ItmsPicture caption (`t7-08`, and this read's `find` result).

### Snapshots (saved by the snapshot tool at the worker's request)

- `evidence/EXP-082/snapshot-t8-01-fresh-start-designer.yml` (the gate snapshot; the full expanded component tree with names, types, bindings and tab orders; the Caption fields were read separately by `find`, not in this file).
- `evidence/EXP-082/snapshot-t8-02-after-caption-reads-state-check.yml` (after the caption reads; still clean; Save and Undo disabled).

### Acceptance checks (T8)

| AC | T8 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed: User scope; FX_Orders open; clean; no dialog (gate) | `snapshot-t8-01`; `snapshot-t8-02` | Same session |
| AC-2 | Not re-run (no wizard). Page 3 order and Save Template recorded in T6/T7 | T6–T7 evidence | — |
| AC-3 | Not re-run (no Finish). Recorded in T7 | T7 evidence | — |
| AC-4 | **Supported (observed)**: 31 components in the set order, one bound `object.<Property>` per included property; control types recorded (ComboBox for FX_CustomerID and FX_Item; Edit for FX_ItmsPicture, no image control); every Caption read (ten Static, ten GridColumn, ten detail) with anomalies recorded. No Designer Save (clean) | Table above; `t8-01`, `t8-02`; snapshots | Edit and ComboBox captions read as `C(...)` expressions; canvas evidence only for the Static labels |
| AC-5 | **Not started** (close and reopen are a separate task) | — | — |
| AC-6 | Not started | — | — |

### Action audit (T8; exact counts)

| Operation | T8 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 current; no select issued) |
| Explicit snapshots | **2** (`snapshot-t8-01`, `snapshot-t8-02`) |
| Targeted snapshots | **0** |
| `browser_find` (read-only) | **30** (one `Caption` find per row read: 10 Static, 10 GridColumn, 10 detail) |
| Element clicks (successful / failed) | **30 / 0** (one selection per row: 10 Static, 10 GridColumn, 10 detail) |
| Mouse move / wheel (view only) | **1 / 2** (the grid was scrolled up for `t8-01` and down for `t8-02`) |
| Screenshots | **2** (`t8-01`, `t8-02`) |
| Type / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Designer Save / unloads / preference reads | **0 / 0 / 0** |
| Form open / close / reopen (FX_Orders) | **0 / 0 / 0** |
| Wizard openings / Finish / replacement prompts | **0 / 0 / 0** |
| Strings created / caption edits / component changes / binding changes | **0 / 0 / 0 / 0** |
| Designer Delete clicks | **0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out; FormSync; deployment; regeneration | **0** |
| Re-logins; portal navigation; sign-in; Web Client actions | **0** |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native browser dialogs | **0 / 0 / 0** |

**Cumulative EXP-082 (T1 through T8):** tab lists 8; tab selects 3; explicit snapshots 43 (41 + 2); targeted 0; finds 61 (31 + 30); element clicks 117 successful / 0 failed (87 + 30); types 2 (T2 and T5 Name fills); key presses 0; mouse moves 3 and wheel 4 (T5, T6, T8); screenshots 38 (36 + 2); Form opens 2 and closes 2 (T1 and T4); **wizard openings 2 of 2**; **Finish 1 of 1**; **replacement prompts seen 3, answered OK 3** (T3, T5, T7); wizard Cancel 1 (T4); timeout alert OK 1 (T4); success-message acknowledgment 1 (T7); Save Template unchecked 1 (T7); **Designer Save 0 of 1**; **unloads 0**; close/reopen 0 of 1 each; strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1; Designer Delete clicks 0.

### Remaining budgets (explicit)

- Wizard openings: 0 (2 of 2 used). Finish: 0 (1 of 1 used). Replacement answers: none pending.
- Designer Save: 1 (0 used); not needed while the Form is clean.
- Unloads: none used; the conditional branch is not in use.
- Close and reopen: 1 close and 1 reopen remaining (AC-5).
- Re-login: 1 remaining (0 used).

### Worker-written-file inventory (T8)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; this T8 section).
- `evidence/EXP-082/t8-01-components-upper-rows-grid-columns-and-first-statics.png`
- `evidence/EXP-082/t8-02-components-lower-rows-detail-controls-and-itmspicture.png`
- `evidence/EXP-082/snapshot-t8-01-fresh-start-designer.yml`
- `evidence/EXP-082/snapshot-t8-02-after-caption-reads-state-check.yml`

Tool-generated, not worker-authored: the automatic post-action snapshot and console files under `evidence\playwright\page-2026-10-14T02-11-46-571Z` through `page-2026-10-14T02-14-45-124Z` and `page-2026-10-14T02-12-08-503Z` through `page-2026-10-14T02-13-01-058Z` (the console log and the action snapshots). Outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Final Designer state (end of T8)

- Designer (tab 0): FX_Orders tab selected, open and **clean** (Save and Undo disabled), footer `ScopeType: User`, no dialog, no alert, no wizard.
- Component tree expanded; the last selected row is FX_ItmsPictureEdit (Properties panel on the Component tab). Selection changes only; no edit.
- Web Client (tab 1): not selected or acted on in T8.

### Knowledge state (T8)

| Finding | State |
|---|---|
| FX_Orders (User scope) has 31 components in the set order, each bound to `object.<Property>`, with tab orders 0–30 | **observed** (one run; accessibility readbacks) |
| FX_CustomerID and FX_Item detail controls are ComboBox | **observed** |
| FX_ItmsPicture detail control is an Edit, not an image-type control | **observed** (one run) |
| FX_ItmsPictureStatic and FX_ItmsPictureGridCol Captions are blank | **observed** (one run; `t7-08` and the T8 `find`) |
| Three Static Captions (FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal) render as raw IDs on the canvas | **observed** (canvas; one run) |
| Cause of the raw-ID rendering (the strings not existing) | **unresolved** (existence not checked; EXP-083) |
| Meaning of the `C(<Static>)` caption expression on detail controls | **unresolved** |
| Whether the server-side Form definition holds this structure after close and reopen | **unresolved** (AC-5 not run) |
| Replay, durability | **not claimed**; not replay_verified (UI and accessibility level, same session) |

### Open questions (T8)

1. The raw-ID canvas labels and the blank FX_ItmsPicture caption are for EXP-083 (captions and strings). Nothing was created or edited here.
2. The `C(<Static>)` caption meaning on detail controls needs a decision before EXP-083 treats the Edit captions.
3. FX_ItmsPicture as an Edit rather than an image control is a design question for later; not changed.
4. The next step is the close and reopen (AC-5), under its own authorization.

## T7 — final page; Save Template unchecked; single Finish; replacement prompt answered OK once; Form FX_Orders created (cycle 8; UI completion observed; no Save, unload, close or reopen)

- Task T7, cycle 8, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `73bb6ae5-b43b-46fc-a731-b23031475dec`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T7 instruction): confirm page 3 order and inclusion; one Next to the final page; record the sentence and Save Template; uncheck Save Template only if checked; one Finish; authorized OK only on a replacement prompt naming FX_Orders; record the response and resulting Designer state. No Save, unload, component or caption change, close, reopen or wizard reopening.

### Gate (page 3, before Next)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call) | Tab 0 Designer (current); tab 1 Web Client | — |
| Fresh snapshot (no tab select) | Wizard on page 3; rows 1–10 in the set order (FX_OrderNumber, FX_CustomerID, FX_CusName, FX_CusAddress, FX_Item, FX_ItmsDescription, FX_ItmsCost, FX_Count, FX_DerOrderTotal, FX_ItmsPicture), every Include checked; no extra row; no alert; Next enabled; Finish disabled; Save disabled | `snapshot-t7-01-page3-fresh-start.yml` |
| Screenshot before Next | Page 3 order verified | `t7-01` |

### Final page (one Next)

- Next (one click). Final page opened. A full untargeted snapshot (`snapshot-t7-02-final-page-after-next.yml`) recorded the following. Sentence: `Click the Finish button to build a multiview form named FX_Orders with the data source FX_Orders.` Options: **Save Template** checkbox, **checked** (initial state; the default). Back enabled; **Next disabled**; **Finish enabled**; Cancel and Help enabled.
- Screenshot `t7-02` shows Save Template checked before any change.

### Save Template (one visible-control change)

- Save Template was checked, so it was unchecked **once**, by clicking its visible label text (ref for the `Save Template` label; the checkbox element itself is covered by a display span, as recorded in EXP-072, so the label was used). One click. Immediate result: the checkbox showed unchecked (snapshot `snapshot-t7-03-final-page-after-save-template-uncheck.yml`; screenshot `t7-03`). No other option changed. Next stayed disabled; Finish stayed enabled. The sentence still names FX_Orders with data source FX_Orders.

### Finish (invoked once)

| # | Action | Observed |
|---|---|---|
| 1 | Finish (one click; not retried) | The next message was a **replacement prompt** (not a success result) |
| 2 | Screenshot before answering (`t7-04`) and snapshot (`snapshot-t7-04-after-finish-immediate-response.yml`) | Alertdialog, title `Infor Mongoose Application Development Framework`, exact text **`Form FX_Orders already exists--replace it?`**, buttons **OK** (active) and **Cancel**. Names only FX_Orders → authorized case |
| 3 | OK on that replacement prompt (one click; the only replacement answer in T7) | Snapshot `snapshot-t7-05-after-replacement-ok.yml`: alertdialog `Infor Mongoose Application Development Framework - Form Wizard - MultiView` with text **`Process Completed Successfully`** (single OK) |
| 4 | Screenshot of the result (`t7-05`) and OK on `Process Completed Successfully` (one click) | Acknowledgment of the Finish success message. This is an acknowledgment, not a second replacement answer. Snapshot `snapshot-t7-06-after-finish-ack-designer-state.yml`: no dialog; wizard closed; a **FX_Orders tab** selected in the Designer |

- The Finish response, in order: replacement prompt → OK → `Process Completed Successfully`. Finish was not repeated.

### Resulting Designer state (observed; read-only views)

| Item | Observed | Evidence |
|---|---|---|
| Form tab | `FX_Orders` (selected; closable; `MGForm=FX_Orders`) | `t7-06`; snapshot `t7-06` |
| Properties > Design | Name `FX_Orders`; Device Type `Default`; Form Type `Normal`; Is Master `True` | `t7-06` |
| Footer | `ScopeType: User / ScopeName: <operator account>` (masked in tool output) | `t7-06` |
| Save / Undo | **Disabled** (the Form shows as clean; no Designer Save performed) | `t7-06`; `snapshot-t7-10-final-designer-state.yml` |
| Canvas (Form view) | Labels: `Order Number:*`, `Customer ID:*`, `FX_sCustomerName:`, `Address:`, `Item:*`, `FX_sItemDescription:`, `Cost:`, `Count:`, `FX_sOrderTotal:` (resolved where the string exists; raw IDs where it does not). The FX_ItmsPicture label is not on the visible canvas. Edits/comboboxes: Order Number Edit, Customer ID and Item ComboBoxes, Count Edit (value 1), Cost (0.00), FX_sOrderTotal (0.00) | `t7-06`, `t7-07` |

### Components after Finish (read-only; Details > Components; expanded)

Full list (31 rows; `snapshot-t7-09-components-expanded-fx_orders-after-finish.yml`):

| Pane | Name | Type | Data Source | Pane / Tab |
|---|---|---|---|---|
| 00 | FormCollectionGrid | Grid | objects | 0 / 0 |
| 00 | FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | 0 / 1 |
| 00 | FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | 0 / 2 |
| 00 | FX_CusNameGridCol | GridColumn | object.FX_CusName | 0 / 3 |
| 00 | FX_CusAddressGridCol | GridColumn | object.FX_CusAddress | 0 / 4 |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 / 5 |
| 00 | FX_ItmsDescriptionGridCol | GridColumn | object.FX_ItmsDescription | 0 / 6 |
| 00 | FX_ItmsCostGridCol | GridColumn | object.FX_ItmsCost | 0 / 7 |
| 00 | FX_CountGridCol | GridColumn | object.FX_Count | 0 / 8 |
| 00 | FX_DerOrderTotalGridCol | GridColumn | object.FX_DerOrderTotal | 0 / 9 |
| 00 | FX_ItmsPictureGridCol | GridColumn | object.FX_ItmsPicture | 0 / 10 |
| 01 | FX_OrderNumberStatic | Static | — | 1 / 11 |
| 01 | FX_OrderNumberEdit | Edit | object.FX_OrderNumber | 1 / 12 |
| 01 | FX_CustomerIDStatic | Static | — | 1 / 13 |
| 01 | FX_CustomerIDCombobox | **ComboBox** | object.FX_CustomerID | 1 / 14 |
| 01 | FX_CusNameStatic | Static | — | 1 / 15 |
| 01 | FX_CusNameEdit | Edit | object.FX_CusName | 1 / 16 |
| 01 | FX_CusAddressStatic | Static | — | 1 / 17 |
| 01 | FX_CusAddressEdit | Edit | object.FX_CusAddress | 1 / 18 |
| 01 | FX_ItemStatic | Static | — | 1 / 19 |
| 01 | FX_ItemCombobox | **ComboBox** | object.FX_Item | 1 / 20 |
| 01 | FX_ItmsDescriptionStatic | Static | — | 1 / 21 |
| 01 | FX_ItmsDescriptionEdit | Edit | object.FX_ItmsDescription | 1 / 22 |
| 01 | FX_ItmsCostStatic | Static | — | 1 / 23 |
| 01 | FX_ItmsCostEdit | Edit | object.FX_ItmsCost | 1 / 24 |
| 01 | FX_CountStatic | Static | — | 1 / 25 |
| 01 | FX_CountEdit | Edit | object.FX_Count | 1 / 26 |
| 01 | FX_DerOrderTotalStatic | Static | — | 1 / 27 |
| 01 | FX_DerOrderTotalEdit | Edit | object.FX_DerOrderTotal | 1 / 28 |
| 01 | FX_ItmsPictureStatic | Static | — | 1 / 29 |
| 01 | FX_ItmsPictureEdit | **Edit** | object.FX_ItmsPicture | 1 / 30 |

- Result: **one bound component per included property, in the set order** (grid columns 1–10, Pane (01) pairs 11–30). Control types: ComboBox for FX_CustomerID and FX_Item (as expected). **FX_ItmsPicture is an Edit, not an image-type control**: the wizard did not create an image control for it. The brief allowed "if the wizard creates one", so this is an observed outcome, not a failure.
- Visible Components screenshot: `t7-07` (identity pane and the first grid rows only; the full 31 rows come from the snapshot).
- Caption readbacks: canvas (above) for nine labels. **FX_ItmsPictureStatic Caption is blank** (read by one row selection and a Caption find; screenshot `t7-08`). The raw/resolved state of the other eight Static captions is shown on the canvas only; their Caption fields were not individually read in T7 (omission, stated).
- Only view actions were used: Details expansion, the Components tab, the grid Expand button, and one row selection. No caption or component was edited.

### Replacement prompts, Finish response, and the unload branch

- **Replacement prompts seen in this experiment: 3.** (1) T2 on Next from page 1 (opening 1; text `Form FX_Orders already exists--replace it?`; answered OK once in T3, which raised `Timeout expired waiting for response.`). (2) T5 on Next from page 1 (opening 2; same text; OK once; the wizard advanced to page 2). (3) T7 after Finish (this section; same text; OK once; then success). **Each prompt was answered OK once, and each named only FX_Orders.** The tutorial's "up to two" count is exceeded by the three sightings across openings.
- **Finish count: 1** (this section). **Finish response:** `Process Completed Successfully`, after the replacement prompt above.
- **Unload branch: not run** (page 2 offered all six new properties in T5 and T6). No preference reading; no Web Client or Designer unload.

### Save, close and reopen

- **Designer Save: 0** (the Form is clean: Save and Undo disabled after Finish; the T7 instruction forbids Save in T7). The Save-if-dirty step is therefore not triggered.
- **Close and reopen: not performed** (T7 forbids close and reopen). The AC-5 step remains for a later task.

### Acceptance checks (T7)

| AC | T7 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed at the T7 gate (User scope; page 3 state). Baseline (T1, T4) recorded earlier | `snapshot-t7-01`, T1–T4 evidence | Same session |
| AC-2 | **Supported to the final page**: page 1 Name and Data Source `FX_Orders` (T2, T5); page 2 offers and includes the six new properties (T5, T6); page 3 order exactly as required (T6, T7 gate); **Save Template unchecked** (`t7-03`); final-page sentence recorded (`t7-02`) | `t7-01`, `t7-02`, `t7-03`; snapshots | — |
| AC-3 | **Supported for this step**: one Finish; each replacement prompt for FX_Orders recorded (`t7-04`) and answered OK once (T3, T5, T7); Finish response recorded (`t7-05`); no unload branch | `t7-04`, `t7-05` | Replacement server effect not separately verified |
| AC-4 | **Partially supported**: the Form exists in User scope with 31 bound components in the set order; control types and captions recorded (above; screenshots `t7-06`–`t7-08`). Designer Save not needed (clean) | `t7-06`, `t7-07`, `t7-08`, snapshot `t7-09` | Captions of eight Static labels read on the canvas only |
| AC-5 | **Not started** (close and reopen are the next step) | — | — |
| AC-6 | Not started (final report after AC-5) | — | — |

### Action audit (T7; exact counts)

| Operation | T7 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 current; no select issued) |
| Explicit snapshots | **10** (`snapshot-t7-01` … `snapshot-t7-10`) |
| Targeted snapshots | **0** |
| `browser_find` | **2** (`Next` on page 3; `Caption` on FX_ItmsPictureStatic) |
| Element clicks (successful / failed) | **9 / 0** (Next page 3→final: 1; Save Template label: 1; Finish: 1; replacement OK: 1; success-message OK: 1; Details Expand: 1; Components tab: 1; Components grid Expand: 1; FX_ItmsPictureStatic row selection: 1) |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Mouse move / wheel | **0 / 0** |
| Screenshots | **8** (`t7-01` … `t7-08`) |
| Wizard openings | **0** in T7 (cumulative 2 of 2) |
| Finish | **1** (cumulative 1; one per wizard opening, invoked once) |
| Replacement prompts seen / answered OK (T7) | **1 / 1** (cumulative prompts seen **3**, answered OK **3**) |
| Other alerts answered | **1** (`Process Completed Successfully`, acknowledgment only; not a replacement answer) |
| Save Template changes | **1** (checked → unchecked; initial state recorded) |
| Designer Save / unloads / preference reads | **0 / 0 / 0** |
| Close / reopen (FX_Orders) | **0 / 0** |
| Strings / caption edits | **0 / 0** |
| Component changes; Designer Delete clicks | **0; 0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| FormSync, deployment, regeneration | **0** |
| Re-logins; portal navigation; sign-in | **0** |
| Web Client actions | **0** |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native browser dialogs | **0 / 0 / 0** |

**Cumulative EXP-082 (T1 through T7):** tab lists 7; tab selects 3; explicit snapshots 41 (31 + 10); targeted 0; finds 31 (29 + 2); element clicks 87 successful / 0 failed (78 + 9); **types 2** (T2 Name fill; T5 Name fill); key presses 0; mouse moves 2 and wheel 2 (T5 and T6); screenshots 36 (28 + 8); Form opens 2 and closes 2 (T1 and T4); **wizard openings 2 of 2**; **Finish 1**; **replacement prompts seen 3, answered OK 3** (T3, T5, T7); wizard Cancel 1 (T4, confirmed with Yes); timeout alert OK 1 (T4); success-message acknowledgments 1 (T7); Save Template unchecked 1 (T7); **Designer Save 0 of 1**; **unloads 0** (conditional branch not run); strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1; Designer Delete clicks 0.

### Remaining budgets (explicit)

- Wizard openings: 0 (2 of 2 used).
- Finish: 0 (1 of 1 used).
- Replacement answers: none pending; the three seen were each answered OK once.
- Designer Save: 1 (0 used). Not needed while the Form is clean.
- Unloads: none used; the conditional branch is not in use.
- Close and reopen: 1 close and 1 reopen remaining (AC-5).
- Re-login: 1 remaining (0 used).

### Worker-written-file inventory (T7)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; T7 section; the cumulative counts above).
- Screenshots: `evidence/EXP-082/t7-01-page3-order-verified-before-next.png`; `t7-02-final-page-initial-save-template-checked.png`; `t7-03-final-page-save-template-unchecked-finish-enabled-before-finish.png`; `t7-04-replacement-prompt-after-finish-form-fx_orders-already-exists-before-ok.png`; `t7-05-finish-result-process-completed-successfully-before-ack.png`; `t7-06-designer-after-finish-fx_orders-tab-user-scope-save-state.png`; `t7-07-components-list-after-finish-expanded.png`; `t7-08-fx_itmspicturestatic-caption-blank-readback.png`.
- Snapshots (saved by the snapshot tool at the worker's filename request): `evidence/EXP-082/snapshot-t7-01-page3-fresh-start.yml`; `snapshot-t7-02-final-page-after-next.yml`; `snapshot-t7-03-final-page-after-save-template-uncheck.yml`; `snapshot-t7-04-after-finish-immediate-response.yml`; `snapshot-t7-05-after-replacement-ok.yml`; `snapshot-t7-06-after-finish-ack-designer-state.yml`; `snapshot-t7-07-details-open-before-components-tab.yml`; `snapshot-t7-08-components-tab-fx_orders-after-finish.yml`; `snapshot-t7-09-components-expanded-fx_orders-after-finish.yml`; `snapshot-t7-10-final-designer-state.yml`.

Tool-generated, not worker-authored: `evidence\playwright\page-2026-10-14T02-04-06-074Z` through `page-2026-10-14T02-07-30-926Z` (automatic post-action snapshots and the console log). Outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Decisive evidence (T7)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t7-02` | Final page: sentence; Save Template checked; Next disabled; Finish enabled | **AC-2** the final page before the change | — |
| `t7-03` | Final page: Save Template unchecked; Finish enabled; sentence unchanged | **AC-2** Save Template unchecked before Finish | That the setting is saved by the server |
| `t7-04` | Alert over the final page: `Form FX_Orders already exists--replace it?` (OK / Cancel) | **AC-3** the exact replacement text after Finish, before the answer | What the OK did on the server |
| `t7-05` | `Process Completed Successfully` (Form Wizard - MultiView title) | **AC-3** the Finish response | Database persistence |
| `t7-06` | Designer: FX_Orders tab; Name FX_Orders; Normal; Is Master True; footer `ScopeType: User`; Save greyed; canvas labels as listed | **AC-4** identity, scope, clean state, and the resulting canvas | The stored definition (no reopen) |
| `t7-07` | Details > Components (expanded): Pane (00) rows only — FormCollectionGrid, FX_OrderNumberGridCol (object.FX_OrderNumber, tab 1), FX_CustomerIDGridCol (object.FX_CustomerID, tab 2), FX_CusNameGridCol (object.FX_CusName, tab 3), and part of FX_CusAddressGridCol; Properties identity Name FX_Orders, Normal, Is Master True | **AC-4** identity and the first grid column bindings | Pane (01) rows, the ComboBox rows, and the other grid columns are **not** in this image (full list is `snapshot-t7-09`) |
| `t7-08` | Components grid at Pane (01) tabs 25–30: FX_CountStatic/FX_CountEdit, FX_DerOrderTotalStatic/FX_DerOrderTotalEdit, FX_ItmsPictureStatic (selected; Properties Caption field empty; Type Static) and FX_ItmsPictureEdit (Edit, object.FX_ItmsPicture) | **AC-4** blank caption of the picture label; picture control is an Edit | Captions of other statics (canvas only) |

### Knowledge state (T7)

| Finding | State |
|---|---|
| The final page (after one Next) shows the sentence, Save Template checked by default, Finish enabled, Next disabled | **observed** (one run) |
| Unchecking Save Template by its visible label text changes the checkbox to unchecked; Finish stays enabled | **observed** (one run) |
| Finish raises the replacement prompt `Form FX_Orders already exists--replace it?`, then `Process Completed Successfully` after one OK | **observed** (one run) |
| After the success message the Designer shows an FX_Orders Form tab (User scope) with Save disabled | **observed** (one run) |
| The new FX_Orders has 31 components in the set order with object.<Property> bindings; FX_CustomerID and FX_Item are ComboBox | **observed** (one run; accessibility and screenshots) |
| FX_ItmsPicture is an Edit bound to object.FX_ItmsPicture (no image control); its Static label has a blank caption | **observed** (one run) |
| Captions of the other eight Statics (canvas): raw IDs for FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal; resolved for Address, Cost, and the others | **observed** (canvas; one run) |
| Three replacement prompts across the experiment; each answered OK once | **observed** (three runs) |
| The server-side Form definition is persisted by Finish | **unresolved** (no reopen, no server read; Save disabled only shows the Designer's clean state) |
| Database durability, replay verification | **not claimed** (UI completion in one session only; not replay_verified) |

### Open questions (T7)

1. Whether the server-side FX_Orders definition holds the new layout after a close and reopen is **unresolved** (AC-5 is next).
2. The captions of FX_sCustomerName, FX_sItemDescription and FX_sOrderTotal are shown as raw IDs on the canvas. Whether those strings exist is an EXP-083 question; no string was created here.
3. FX_ItmsPicture has no caption and is an Edit. Whether an image-type control is wanted is a later decision (EXP-083 territory, not changed here).

## T6 — page 3 property ordering on the second wizard opening: ten properties in target order; Include unchanged; STOPPED ON PAGE 3 (cycle 7)

- Task T6, cycle 7, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `f1bfcab3-fd6d-4a8f-871a-58cbacd299e3`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T6 instruction): confirm page 2 is open (User scope, no alert, ten included); capture page 2 before Next; one Next to page 3; record the initial ordering; move the ten included properties to the target order with single supported move-up/move-down presses, verifying after each press; capture the final order; **no** Finish, Save, unload, cancel, page 4, or Include change.

### Gate (page 2, before Next)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call) | Tab 0 Designer (current); tab 1 Web Client | — |
| Fresh snapshot (tab 0 current; no select) | Wizard `Form Wizard - MultiView` on `Primary Collection` (page 2); the ten required properties in the included list (FX_Count, FX_CusAddress, FX_CusName, FX_CustomerID, FX_DerOrderTotal, FX_Item, FX_ItmsCost, FX_ItmsDescription, FX_ItmsPicture, FX_OrderNumber); no alert; Back and Next enabled; Finish disabled; footer `ScopeType: User`; Save disabled | `snapshot-t6-01-page2-fresh-start.yml` |
| Page 2 screenshot before Next | Included list of ten; Next enabled | `t6-01` |

### Next (page 2 to page 3; one press)

- One Next click. Page 3 opened with no alert. Page 3 = the Primary Collection grid with columns Name, Caption, Include, Containment, Component Class, Component Class Parameters; `Form Pages` / `Notebooks` tabs below; a `+`/`-` pair; Back and Next enabled; Finish disabled (page 3 is not the final page; Save Template is not on this page).

### Initial ordering on page 3 (observed; all Include checked)

| Row | Name | Caption (label string ID shown) | Include |
|---|---|---|---|
| 1 | FX_DerOrderTotal | FX_sOrderTotal | checked |
| 2 | FX_Count | FX_sCount | checked |
| 3 | FX_CusAddress | FX_sAddress | checked |
| 4 | FX_CusName | FX_sCustomerName | checked |
| 5 | FX_CustomerID | FX_sCustomerID | checked |
| 6 | FX_Item | FX_sItem | checked |
| 7 | FX_ItmsCost | FX_sCost | checked |
| 8 | FX_ItmsDescription | FX_sItemDescription | checked |
| 9 | FX_ItmsPicture | (blank) | checked |
| 10 | FX_OrderNumber | FX_sOrderNumber | checked |

- Source: `snapshot-t6-02-page3-initial-ordering.yml` (all ten grid rows with names, captions and checkbox states); screenshot `t6-02-page3-initial-ordering-before-moves.png` (rows 6–10 visible).
- Observation: FX_ItmsPicture has **no caption** on page 3 (blank Caption cell). The other nine show label string IDs (`FX_s…`). FX_DerOrderTotal shows `FX_sOrderTotal` (the EXP-081 Label String ID override). Not interpreted further; no caption was edited.

### Arrow controls

- Four unlabelled buttons sit to the right of the grid, top to bottom: e636, **e638**, e640, e642. Their accessible names are empty. **e638 was identified as move-up**: its first press moved FX_OrderNumber from row 10 to row 9 and FX_ItmsPicture from row 9 to row 10 (observed in the next snapshot). The other three buttons were **not pressed** (their functions were not tested). No bulk or move-to-top or move-to-bottom control was used.

### Moves (in order; each press verified by a fresh snapshot of the row order)

Rule used: select the property by its name cell (confirming `[active] [selected]`), then press e638 once per row moved. Presses are counted per click.

| # | Property (row before → target) | Direction | Presses | Row after each press | Final row |
|---|---|---|---|---|---|
| A | FX_OrderNumber (10 → 1) | up | 9 | 9, 8, 7, 6, 5, 4, 3, 2, 1 | 1 |
| B | FX_CustomerID (6 → 2) | up | 4 | 5, 4, 3, 2 | 2 |
| C | FX_CusName (6 → 3) | up | 3 | 5, 4, 3 | 3 |
| D | FX_CusAddress (6 → 4) | up | 2 | 5, 4 | 4 |
| E | FX_Item (7 → 5) | up | 2 | 6, 5 | 5 |
| F | FX_ItmsDescription (9 → 6) | up | 3 | 8, 7, 6 | 6 |
| G | FX_ItmsCost (9 → 7) | up | 2 | 8, 7 | 7 |
| H | FX_Count (9 → 8) | up | 1 | 8 | 8 |
| — | FX_DerOrderTotal (1 → 9) and FX_ItmsPicture (10 → 10) | moved by the presses above (not pressed directly) | 0 direct | — | 9 and 10 |

- Total: **26 up presses; 0 down presses; 8 row selections (name-cell clicks)**. The number of presses equals the minimum number of adjacent swaps needed (inversion count of the initial order against the target = 26; worked by the worker, not by the tool).
- Selection observation: after Move B, the grid's row-header current-row marker remained on index 6 (which by then held FX_CusName), not on the moved FX_CustomerID. The worker did not rely on that marker; it re-selected FX_CusName by its name cell and confirmed `[active] [selected]` before Move C. Each later move was preceded by the same confirmation.
- Each press was verified by a fresh snapshot of the row order (`page-2026-10-14T01-53-…` through `page-2026-10-14T01-58-…`, tool-saved; not counted as worker snapshots).

### Final order (observed; page 3, before Next)

| Row | Name | Include |
|---|---|---|
| 1 | FX_OrderNumber | checked |
| 2 | FX_CustomerID | checked |
| 3 | FX_CusName | checked |
| 4 | FX_CusAddress | checked |
| 5 | FX_Item | checked |
| 6 | FX_ItmsDescription | checked |
| 7 | FX_ItmsCost | checked |
| 8 | FX_Count | checked |
| 9 | FX_DerOrderTotal | checked |
| 10 | FX_ItmsPicture | checked |

- Matches the target sequence exactly. Ten rows only; no extra property included; no Include changed.
- Evidence: fresh snapshot `snapshot-t6-03-page3-final-order-fresh.yml` (all ten rows with full names; no alert; Next enabled; Finish disabled); screenshot `t6-03-page3-final-order-ten-included-before-next.png` (rows 5–9 visible, all checked); screenshot `t6-04-page3-final-order-top-rows-1-to-5-scrolled.png` (rows 1–5 visible after a view-only wheel scroll; names truncated in the grid: FX_OrderN…, FX_Custom…, FX_CusAdd…; full names from the snapshot). **Row 10 is shown only by the snapshot**, not by a screenshot.
- The Caption column matches the initial captions, moved with their rows. No caption was edited.

### Stop state (end of T6)

- Wizard `Form Wizard - MultiView` open on **page 3**, not advanced. Back and Next enabled; **Finish disabled**. No alert or confirmation open. Designer footer `ScopeType: User`; Save disabled.
- Not done (by instruction): Next to the final page; Save Template; Finish; Save; Cancel; any unload; any Include change; any caption or string change.

### Acceptance checks (T6)

| AC | T6 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed at the T6 gate: User scope, no alert, page 2 state | `snapshot-t6-01`, `t6-01` | Same session |
| AC-2 | **Partial.** Page 1 (T5) and page 2 (T5, T6 gate) values; **page 3 order now matches the target sequence** (`snapshot-t6-03`, `t6-03`, `t6-04`). Save Template **not reached** (final page) | `t6-01`–`t6-04`; snapshots | Save Template and the final page pending |
| AC-3 | Partial (unchanged from T5): replacement Yes answers 2 (T3 and T5); Finish not invoked | — | Finish pending |
| AC-4 to AC-6 | Not started | — | — |

### Action audit (T6; exact counts)

| Operation | T6 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 current; no select issued) |
| Untargeted snapshots (explicit `browser_snapshot`) | **3** (`snapshot-t6-01`, `-02`, `-03`) |
| Targeted snapshots | **0** |
| `browser_find` | **0** |
| Element clicks (successful / failed) | **35 / 0** (Next page 2→3: 1; name-cell row selections: 8; move-up presses on e638: 26) |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Mouse move / wheel (view only) | **1 / 1** (the wheel scrolled the page 3 grid up for `t6-04`) |
| Screenshots | **4** (`t6-01`, `t6-02`, `t6-03`, `t6-04`) |
| Wizard openings | **0** in T6 (cumulative 2 of 2) |
| Page 3 reached / Include changes | **1 / 0** |
| Page 4 / Save Template / Finish / wizard Cancel | **0 / 0 / 0 / 0** |
| Replacement prompts / unexpected alerts | **0 / 0** |
| Designer Save / unloads / preference reads | **0 / 0 / 0** |
| Form opens / closes (FX_Orders) | **0 / 0** |
| Strings / caption edits | **0 / 0** |
| Component changes; Designer Delete clicks | **0; 0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| FormSync, deployment, regeneration | **0** |
| Re-logins; portal navigation; sign-in | **0** |
| Web Client actions | **0** |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native browser dialogs | **0 / 0 / 0** |

**Cumulative EXP-082 (T1 through T6):** tab lists 6; tab selects 3; untargeted snapshots 31 (28 + 3); targeted 0; finds 29 (no finds in T6); element clicks 78 successful / 0 failed (43 + 35); **types 2** (T2 Name fill 1 + T5 Name fill 1; T1, T3, T4, T6 had none; corrected from the earlier total of 1); mouse moves 2 and wheel 2 (T5 1 + 1; T6 1 + 1); key presses 0; screenshots 28 (24 + 4); Form opens 2 and closes 2 (T1 and T4); **wizard openings 2 of 2 allowed**; wizard Cancel 1 (T4); timeout alert OK 1 (T4); **replacement Yes answers 2** (T3, T5); Finish 0 of 1; Designer Save 0 of 1; unloads 0 (conditional branch not triggered); strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1; Designer Delete clicks 0.

### Remaining budgets (explicit)

- Wizard openings: **0** remaining (2 of 2 used).
- Finish: **1** remaining (0 of 1 used); the open wizard is the one that must finish.
- Replacement Yes answers: 2 used (one per prompt); none pending.
- Designer Save: **1** remaining (0 of 1 used).
- Unloads: not used; the conditional branch is not triggered.
- Close and reopen: 1 close and 1 reopen remaining.
- Re-login: 1 remaining (0 of 1 used).

### Worker-written-file inventory (T6)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; T5 wording corrections; this T6 section; cumulative type-count correction).
- `evidence/EXP-082/snapshot-t6-01-page2-fresh-start.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-082/snapshot-t6-02-page3-initial-ordering.yml`
- `evidence/EXP-082/snapshot-t6-03-page3-final-order-fresh.yml`
- `evidence/EXP-082/t6-01-page2-included-ten-before-next.png`
- `evidence/EXP-082/t6-02-page3-initial-ordering-before-moves.png`
- `evidence/EXP-082/t6-03-page3-final-order-ten-included-before-next.png`
- `evidence/EXP-082/t6-04-page3-final-order-top-rows-1-to-5-scrolled.png`

Tool-generated, not worker-authored: the snapshot and console files under `evidence\playwright\page-2026-10-14T01-52-00-921Z` through `page-2026-10-14T01-58-24-501Z` (the automatic post-action snapshots and the console log). Outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Decisive evidence (T6)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t6-01` | Wizard page 2 (`Primary Collection`); the included list of ten; Next enabled; Finish greyed; `ScopeType: User` | **AC-2** page 2 state before Next (ten included) | The server-side Form state |
| `t6-02` | Page 3 initial ordering: rows 6–10 visible (FX_Item, FX_ItmsCost, FX_ItmsDescription, FX_ItmsPicture, FX_OrderNumber), all checked; captions FX_sItem, FX_sCost, FX_sItemDescription, blank, FX_sOrderNumber | The starting state of page 3 for the moves (rows 6–10) | Rows 1–5 (in the snapshot `snapshot-t6-02`) |
| `t6-03` | Page 3 final order: rows 5–9 visible (FX_Item, FX_ItmsDescription, FX_ItmsCost, FX_Count, FX_DerOrderTotal), all checked | **AC-2** the final order for rows 5–9; no alert; Finish greyed | Rows 1–4 and row 10 (see `t6-04` and the snapshot) |
| `t6-04` | Page 3 final order: rows 1–5 visible (FX_OrderN…, FX_Custom…, FX_CusName, FX_CusAdd…, FX_Item), all checked | **AC-2** the final order for rows 1–5 (names truncated in the grid) | Full names (from the snapshot); row 10 |
| `snapshot-t6-03` | Full accessibility tree: all ten rows in order with full names, captions and checkbox states; no alert; Next enabled; Finish disabled | **AC-2** complete final order (all ten rows) | Visual presentation (the screenshots cover it in part) |

### Knowledge state (T6)

| Finding | State |
|---|---|
| Page 2 accepts Next and opens page 3 with no alert | **observed** (one run) |
| The initial page 3 order is FX_DerOrderTotal, FX_Count, FX_CusAddress, FX_CusName, FX_CustomerID, FX_Item, FX_ItmsCost, FX_ItmsDescription, FX_ItmsPicture, FX_OrderNumber, all included | **observed** (one run) |
| The second arrow button (e638) is move-up; each press moves the selected row up one position | **observed** (one run; 26 presses, each verified) |
| 26 single move-up presses reach the target order, with all ten included and no extra property | **observed** (one run) |
| FX_ItmsPicture has no caption on page 3 | **observed** (one run; cause not established) |
| Selection marker in the grid header did not follow the moved row after Move B | **observed** (one run) |
| The other three arrow buttons (e636, e640, e642) behave as move-to-top, move-down, move-to-bottom | **unresolved** (not tested; not pressed) |
| Whether the final page, Save Template, Finish and the server-side Form change behave as the tutorial shows | **unresolved** (not reached) |
| Replay, durability | **not claimed**; not replay_verified |

### Open questions (T6)

1. The next bounded task should advance to the final page (Save Template unchecked), record the sentence, and invoke Finish once, subject to its own authorization. The replacement state on the server (two replacement OKs, T3 and T5, with differing immediate results) remains **unresolved** until the Finish response and a later check.
2. The page 3 ordering is complete; it has not been saved, finished or verified beyond the wizard's own state.

---

## T5 — second wizard opening (operator-authorized); replacement prompt answered OK once in this task; page 2 inventory: all ten required properties offered and included; STOPPED ON PAGE 2 (cycle 6)

- Task T5, cycle 6, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `784a606a-8f3f-4e22-8060-2d77a59aff39`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T5 instruction): tab list and fresh Designer snapshot; confirm User scope, no Form open, Save disabled, no dialog; open the Classic > Multi-View wizard once; page 1 Name `FX_Orders`, MultiView, Data Source `FX_Orders`, screenshot before Next; one Next; if the exact replacement prompt appears, screenshot and OK once in this task; inspect page 2 inventory and Include states without changing them; stop on page 2.

### Second opening and the two-opening budget

- The second wizard opening is valid under the later operator authorization (T5 bounded instruction, 2026-10-14). It used the second of the two wizard openings that the brief allows. The conditional unload was not needed (page 2 offered all six new properties), so no unload-then-reopen sequence, and no third opening, is in view.

### Gate (before the wizard)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call) | Tab 0 Designer (current; no `MGForm`); tab 1 Web Client (`favoriteContext=IdoProperties`) | — |
| Fresh untargeted snapshot (tab 0 current; no select issued) | Designer: no Form tab; footer `ScopeType: User`; Save disabled; Undo disabled; no alert or dialog | `snapshot-t5-01-designer-fresh-start.yml` |
| Gate verdict | **Passed.** The Designer is User scope, clean, no Form open, no outstanding dialog | — |

### Wizard opening 2 (actions, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Designer toolbar New (one click) | Form Wizard Selection dialog; New Form radio active; Category/Wizard blank | `snapshot-t5-02-form-wizard-selection-open.yml` |
| 2 | Category arrow (one click); `Classic` option (one click) | Category `Classic` | find |
| 3 | Wizard arrow (one click); `Multi-View` option (one click) | Wizard `MultiView`; Extend Form not selected | find; `snapshot-t5-03-…` |
| 4 | Screenshot before OK; Selection OK (one click) | Image confirms New Form, Classic, MultiView. Wizard **opening 2** opened on page 1 | `t5-01`; `snapshot-t5-04-wizard-page1-opened.yml` |
| 5 | Name combobox: **one plain fill** `FX_Orders` (no Tab) | Name `FX_Orders` | find |
| 6 | Data Source Open (one click); `FX_Orders` option (one click) | Data Source `FX_Orders` (the list also offered FX_Items and FX_UMs; only FX_Orders chosen) | find; `snapshot-t5-05-…` |
| 7 | Page 1 readback and screenshot before Next | Name `FX_Orders`; Form Type `MultiView` (greyed); Layout `GridLeft`; Device `Default`; Data Source `FX_Orders`; Query Form and Comments empty; no message; Next enabled; Finish disabled | `t5-02` (image confirmed) |
| 8 | **Next** (one click) | Replacement alertdialog (below). Page 2 not yet shown | `snapshot-t5-06-after-page1-next.yml` |

### Replacement prompt (captured before the answer; answered once)

- Exact text: **`Form FX_Orders already exists--replace it?`** (title `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); buttons **OK** (active) and **Cancel**. It names only FX_Orders, so it is a replacement prompt that the operator authorized.
- Screenshot before any answer: `evidence/EXP-082/t5-03-replacement-prompt-form-fx_orders-already-exists-before-ok.png`.
- **One OK click** (the only answer in T5). Immediate result: no timeout alert; the prompt closed and the wizard **advanced to page 2 (`Primary Collection`)**. A fresh snapshot (`snapshot-t5-07-after-replacement-ok.yml`) showed no alert open, Back enabled, Next enabled, Finish disabled.
- Contrast with T3 (for the record): the T3 OK on the same prompt left the wizard on page 1 and raised `Timeout expired waiting for response.`. The T5 OK did not. The difference is not explained. The T5 result does not show whether the server-side replacement completed.

### Page 2 inventory (Primary Collection; read and screenshot only; no Include change)

- Heading `Select properties to include for the primary collection.` Two lists: the left **Properties** (available, not included) and the right **Primary Collection** (included). Buttons `>>`, `>`, `<`, `<<`. Back enabled; Next enabled; Finish disabled.
- Screenshots: `t5-04-wizard-page2-primary-collection-inventory-after-single-ok.png` (top of the available list and the full included list); `t5-05-wizard-page2-available-properties-scrolled-visible-scroll.png` (available list scrolled, middle section).

**Included (Primary Collection; 10 entries; all ten required names present):**

| # | Included property | Required? |
|---|---|---|
| 1 | FX_Count | business (required set) |
| 2 | FX_CusAddress | six new (joined) |
| 3 | FX_CusName | six new (joined) |
| 4 | FX_CustomerID | business |
| 5 | FX_DerOrderTotal | six new (derived) |
| 6 | FX_Item | business |
| 7 | FX_ItmsCost | six new (joined) |
| 8 | FX_ItmsDescription | six new (joined) |
| 9 | FX_ItmsPicture | six new (joined) |
| 10 | FX_OrderNumber | business |

**Available (not included; 44 entries, as the accessibility tree lists them in full):** `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UDFDateTime1`–`UDFDateTime6`, `UDFDecimal1`–`UDFDecimal6`, `UDFInteger1`–`UDFInteger6`, `UDFLongText1`–`UDFLongText2`, `UDFMediumText1`–`UDFMediumText6`, `UDFRecordDate`, `UDFRowPointer`, `UDFShortText1`–`UDFShortText7`, `UpdatedBy`.

- **Missing six-new properties: none.** FX_CusName, FX_CusAddress, FX_ItmsDescription, FX_ItmsCost, FX_DerOrderTotal and FX_ItmsPicture are all in the Primary Collection. **The conditional unload branch is therefore not triggered.**
- The seven system properties of the 17-property IDO (CreateDate, CreatedBy, InWorkflow, NoteExistsFlag, RecordDate, RowPointer, UpdatedBy) are **not included** (they are in the available list). 10 included + 7 system = the 17 IDO properties of EXP-081; the remaining 37 entries of the available list (`_ItemId`, `_ItemWarnings`, UDF*) are IDO-level properties that are not among the 17 recorded in EXP-081.
- **Include changes made: 0.** The default set was observed as displayed when page 2 first appeared. Whether that membership is the wizard's default, or carried over from state the wizard already held, is **unresolved**.
- Keyboard focus and row highlights were visible in the screenshots (FX_Count focus outline; FX_ItmsPicture and UDFDecimal6 grey). They are display states, not Include changes. Not interpreted further.

### Comparison with EXP-072 and the T1 baseline (observed same-session)

- EXP-072 page 2 offered and included the four business properties by default; this T5 page 2 shows ten included. The difference is in the wizard state for this opening; the cause is not established.
- The T1 Designer baseline (13 components) is the existing Form and is **not** changed by page 2. `t4-05` shows only the identity and Pane (00) rows; the expanded 13-component inventory is `snapshot-t4-08-components-expanded-fx_orders.yml`.

### Stop state (end of T5)

- Wizard `Form Wizard - MultiView` **open on page 2** (Primary Collection), not advanced. Back and Next enabled; **Finish disabled**. Not pressed. Page 3 not reached.
- No alert or confirmation open. Designer footer `ScopeType: User`; Save disabled (`snapshot-t5-08-final-page2-state.yml`).
- Per the T5 instruction the in-page wizard is **intentionally left open** on page 2 for the next bounded configuration task. It is not a Form change; no Designer Save occurred.
- Replacement effect on the server: **unresolved** (not checked; no unload, no reopen, no Save).

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed: Designer User scope, clean, no Form open, no dialog before the wizard | `snapshot-t5-01-designer-fresh-start.yml` | Same session; no screenshot of the start state in T5 |
| AC-2 | **Partial, to page 2.** Route used (New > Classic > Multi-View > OK); page 1 Name `FX_Orders` and Data Source `FX_Orders` captured (`t5-02`); page 2 includes all six new properties (inventory above). Page 3 order and Save Template **not reached** | `t5-02`, `t5-04`, `t5-05` | Page 3 pending |
| AC-3 | **Partial.** Replacement prompt recorded (`t5-03`) and answered OK once (T5). Finish **not** invoked (0 of 1). Replacement outcome on the server unresolved | `t5-03`, `snapshot-t5-07` | Finish pending |
| AC-4 to AC-6 | Not started | — | — |

### Action audit (T5; exact counts)

| Operation | T5 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 current; no select issued) |
| Untargeted snapshots (explicit `browser_snapshot`) | **8** (`snapshot-t5-01` … `snapshot-t5-08`) |
| Targeted snapshots | **0** |
| `browser_find` (read-only) | **8** (Classic; Wizard; Multi-View; Extend Form; FX_Orders after the Name fill; Data Source; FX_Orders after the Data Source open; page 1 readback) |
| Element clicks (successful / failed) | **10 / 0** (toolbar New; Category arrow; Classic; Wizard arrow; Multi-View; Selection OK; Data Source Open; FX_Orders option; page 1 Next; replacement OK) |
| `browser_type` (succeeded / refused) | **1 / 0** (Name `FX_Orders`, one plain fill) |
| Mouse move / wheel (view only, over the available list) | **1 / 1** |
| Key presses / Enter / Escape | **0 / 0 / 0** |
| Screenshots | **5** (`t5-01` to `t5-05`) |
| **Wizard openings** | **1 in T5 (cumulative 2 of 2 allowed)** |
| Replacement prompts seen / answered OK (T5) | **1 / 1** (cumulative answered Yes: **2**: T3 and T5) |
| Unexpected alerts answered | **0** (no timeout in T5) |
| Page 2 reached / inventory / Include changes | **1 / 1 / 0** |
| Page 3 / Finish / wizard Cancel / Designer Save | **0 / 0 / 0 / 0** |
| Unloads / preference reads or changes | **0 / 0 / 0** |
| Form opens / closes (FX_Orders) | **0 / 0** |
| Strings created / caption edits | **0 / 0** |
| Component changes; Designer Delete clicks | **0; 0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| FormSync, deployment, regeneration | **0** |
| Re-logins; portal navigation; sign-in | **0** |
| Web Client actions | **0** |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native browser dialogs | **0 / 0 / 0** |

**Cumulative EXP-082 (T1 through T5):** tab lists 5; tab selects 3; untargeted snapshots 28 (5+4+2+9+8); targeted 0; finds 29 (7+9+0+5+8); element clicks 43 successful / 0 failed (10+9+1+13+10); types **2** (T2 1 + T5 1; corrected from 1); mouse move 1 and wheel 1 (T5); key presses 0; screenshots 24 (6+5+2+6+5); Form opens 2 and closes 2 (T1 and T4); **wizard openings 2 (T2 and T5) of the 2 allowed**; wizard Cancel 1 (T4, confirmed with Yes); timeout alert OK 1 (T4); **replacement prompts answered OK 2 (T3 and T5)**; Finish 0 of 1; Designer Save 0 of 1; unloads 0 (Web Client 0; Designer 0); strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 of 1; Designer Delete clicks 0.

### Remaining budgets (explicit)

- Wizard openings: **0 remaining** (2 of 2 used). Any further opening, including one after a conditional unload, needs the coordinator's decision because the brief caps the total at two.
- Finish: **1 remaining** (0 of 1 used). The wizard currently open is the one that must finish.
- Replacement Yes answers: 2 used (one per prompt); no further replacement prompt has been answered.
- Designer Save: 1 remaining (0 of 1 used). Unloads: 0 used (conditional branch not required by page 2).
- Close and reopen: 1 close and 1 reopen remaining.
- Re-login: 1 remaining (0 of 1 used).

### Worker-written-file inventory (T5)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; this T5 section).
- `evidence/EXP-082/snapshot-t5-01-designer-fresh-start.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-082/snapshot-t5-02-form-wizard-selection-open.yml`
- `evidence/EXP-082/snapshot-t5-03-wizard-selection-classic-multiview-before-ok.yml`
- `evidence/EXP-082/snapshot-t5-04-wizard-page1-opened.yml`
- `evidence/EXP-082/snapshot-t5-05-wizard-page1-name-filled.yml`
- `evidence/EXP-082/snapshot-t5-06-after-page1-next.yml`
- `evidence/EXP-082/snapshot-t5-07-after-replacement-ok.yml`
- `evidence/EXP-082/snapshot-t5-08-final-page2-state.yml`
- `evidence/EXP-082/t5-01-wizard-opening-2-selection-classic-multiview-before-ok.png`
- `evidence/EXP-082/t5-02-wizard-opening-2-page1-name-multiview-datasource-fx_orders-before-next.png`
- `evidence/EXP-082/t5-03-replacement-prompt-form-fx_orders-already-exists-before-ok.png`
- `evidence/EXP-082/t5-04-wizard-page2-primary-collection-inventory-after-single-ok.png`
- `evidence/EXP-082/t5-05-wizard-page2-available-properties-scrolled-visible-scroll.png`

Tool-generated, not worker-authored: `evidence\playwright\page-2026-10-14T01-46-23-681Z` through `page-2026-10-14T01-48-29-270Z` (snapshot and console files). Outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t5-02` | Wizard page 1: Name `FX_Orders`; Form Type MultiView; Layout GridLeft; Device Default; Data Source `FX_Orders`; no message; Next enabled | **AC-2** page 1 values before Next (opening 2) | That the Name is accepted by the server |
| `t5-03` | Alert over page 1: `Form FX_Orders already exists--replace it?`; OK (default) and Cancel; wizard behind with Name `FX_Orders` | The exact replacement text before the single OK | What the OK did on the server |
| `t5-04` | Wizard page 2 `Primary Collection`: included list with FX_Count, FX_CusAddress, FX_CusName, FX_CustomerID, FX_DerOrderTotal, FX_Item, FX_ItmsCost, FX_ItmsDescription, FX_ItmsPicture, FX_OrderNumber; available list top (`_ItemId`, `_ItemWarnings`, CreateDate, CreatedBy, InWorkflow, NoteExistsFlag, RecordDate, RowPointer, UDFDateTime1–4); Finish disabled | **AC-2** all ten required properties offered and included; the system properties not included | The complete available list (see `t5-05` and the snapshot); the server-side Form state |
| `t5-05` | Same wizard with the available list scrolled to UDFDecimal/UDFInteger rows; included list unchanged | The middle of the available list; no Include change | The rest of the list (the accessibility tree was used for the full 44) |

Snapshot readbacks, not screenshots: `snapshot-t5-07` (after the OK: no alert; page 2 content) and `snapshot-t5-08` (final stable state). The expanded 13-component inventory of the existing Form is `snapshot-t4-08-components-expanded-fx_orders.yml`; `t4-05` alone is not used as evidence of the 13 components.

### Knowledge state (T5)

| Finding | State |
|---|---|
| Page 1 of wizard opening 2 accepts Name `FX_Orders` and Data Source `FX_Orders` (MultiView, GridLeft, Default) | **observed** (one run; `t5-02`) |
| Next on page 1 raises `Form FX_Orders already exists--replace it?` (OK, Cancel) | **observed** (three runs: T2 `t2-05`, T3 `t3-01`, T5 `t5-03`) |
| One OK on that prompt, in T5, advanced the wizard to page 2 with no timeout | **observed** (one run) |
| One OK on the same prompt in T3 raised `Timeout expired waiting for response.` and did not advance | **observed** (one run); the difference from T5 is **unresolved** |
| Page 2 offers all ten required properties; ten are included by default as displayed; seven system properties are not included | **observed** (one run; `t5-04`, `t5-05`, snapshot) |
| The default membership source (wizard default versus carried state) | **unresolved** |
| Whether the replacement changed the server-side FX_Orders Form definition | **unresolved** (no server-side check) |
| Replay, durability | **not claimed**; not replay_verified |

---

## T4 — authorized timeout recovery; wizard cancelled (discard confirmed once); FX_Orders baseline verified unchanged; Form closed once (cycle 5; no second wizard)

- Task T4, cycle 5, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `b5e7de37-3bc1-4b7e-a5d5-6395e7f1fce4`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T4 instruction, operator authorization 2026-10-14): list tabs; fresh snapshot; acknowledge the timeout alert once; cancel the original wizard once; confirm the discard once if asked; verify no Form open, User scope, Save disabled; open FX_Orders once from recent-forms; compare the component inventory with T1; close it once if it matches and is clean; **no** second wizard, Finish, Designer Save, unload, or other mutation.
- Session: usable throughout. No Session Expired modal, no sign-in page, no portal banner. Re-login 0.

### Recovery sequence (observed, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (first call) | Tab 0 Designer (current; `mode=designer`, no `MGForm`); tab 1 Web Client (`favoriteContext=IdoProperties`) | — |
| 2 | Fresh untargeted snapshot | Wizard `Form Wizard - MultiView` on page 1 (Name `FX_Orders`, Form Type MultiView, Data Source `FX_Orders`; Next enabled; Finish disabled); alertdialog exactly **`Timeout expired waiting for response.`** (OK only); footer `ScopeType: User`; Save disabled | `snapshot-t4-01-designer-fresh-start-before-timeout-ok.yml`; `t4-01` (prompt over page 1) |
| 3 | Timeout alert **OK** (one click) | Alert closed. Wizard still on page 1; no alert open | `snapshot-t4-02-after-timeout-ok.yml`; `t4-02` |
| 4 | Wizard **Cancel** (one click) | Confirmation alertdialog (exact text): **`Are you sure you want to cancel? All data entered will be lost.`** with **Yes** (active) and **No**. This is a discard of the unfinished wizard, not a replacement prompt; it does not name a Form | `snapshot-t4-03-after-wizard-cancel.yml`; `t4-03` |
| 5 | **Yes** (one click; not Enter) | Wizard closed. No alert open; no Form tab open; Save disabled; footer `ScopeType: User` | `snapshot-t4-04-after-discard-yes.yml`; `t4-04` |
| 6 | Form menu (one click) → recent-forms `FX_Orders` (one click) | FX_Orders opened as one Designer tab (`MGForm=FX_Orders`); the first recent-forms entry was `FX_Orders` | `snapshot-t4-05-fx_orders-opened-baseline-check.yml` |
| 7 | Details expand (one click) → Components tab (one click) → grid Expand (one click, view only) | Components tree showed Pane (00) and Pane (01) expanded; 13 component rows | `snapshot-t4-06`…`t4-08`; `t4-05` (screenshot) |
| 8 | Four Static rows selected one at a time (four clicks) and each Caption read with `find` (four finds) | Captions as in the baseline (see table) | finds only; no caption typed or edited |
| 9 | Save state check before close (snapshot) | Save disabled; Undo disabled; no alert | `snapshot-t4-09-pre-close-clean-check-fx_orders.yml` |
| 10 | Form-tab control `closable FX_Orders` (one click) | No prompt; Designer clean with no Form open; footer `ScopeType: User` | `t4-06` |

**Discrepancy check:** none found. The timeout alert, the cancel confirmation and the discard confirmation matched the T4 instruction. No further prompt appeared. No retry was made of Next, the replacement OK, or any other wizard step.

### FX_Orders identity (reopened, before close)

| Field | Observed |
|---|---|
| Form tab / canvas | `FX_Orders` (`MGForm=FX_Orders`) |
| Properties > Design > Name | `FX_Orders` |
| Device Type | `Default` |
| Form Type | `Normal` |
| Is Master | `True` |
| Footer | `ScopeType: User / ScopeName: <operator account>` (the account is masked in tool output; not recorded here) |
| Save / Undo | disabled (clean) |

### Components: baseline (T1) side by side with T4

| Pane | Name | Type | Data Source (binding) | Tab | Caption (Static only) | T1 | T4 |
|---|---|---|---|---|---|---|---|
| 00 | FormCollectionGrid | Grid | objects | 0 | — | match | match |
| 00 | FX_OrderNumberGridCol | GridColumn | object.FX_OrderNumber | 1 | — | match | match |
| 00 | FX_CustomerIDGridCol | GridColumn | object.FX_CustomerID | 2 | — | match | match |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 3 | — | match | match |
| 00 | FX_CountGridCol | GridColumn | object.FX_Count | 4 | — | match | match |
| 01 | FX_OrderNumberStatic | Static | — | 5 | `FX_sOrderNumber` | match | match |
| 01 | FX_OrderNumberEdit | Edit | object.FX_OrderNumber | 6 | not read | match | match |
| 01 | FX_CustomerIDStatic | Static | — | 7 | `FX_sCustomerID` | match | match |
| 01 | FX_CustomerIDCombobox | ComboBox | object.FX_CustomerID | 8 | not read | match | match |
| 01 | FX_ItemStatic | Static | — | 9 | `FX_sItem` | match | match |
| 01 | FX_ItemCombobox | ComboBox | object.FX_Item | 10 | not read | match | match |
| 01 | FX_CountStatic | Static | — | 11 | `FX_sCount` | match | match |
| 01 | FX_CountEdit | Edit | object.FX_Count | 12 | not read | match | match |

- Result: **13 components; the inventory matches T1 exactly** (names, types, bindings, tab order). The four Static captions are the same raw string IDs as T1 and as the EXP-072 label IDs.
- Captions of the Edit and ComboBox components were not read in T1 or T4 (omission, not a discrepancy).
- Canvas: the labels show the resolved text `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:` (T1 and T4 both).

### Evidence correction (T4)

- `evidence/EXP-082/t4-05-baseline-recheck-components-list-13-rows-fx_orders-reopened.png` shows the FX_Orders identity (Name FX_Orders; Normal; Is Master True; Default), the canvas, and the Pane (00) rows (grid and the first three grid columns). **It does not show the Pane (01) rows or the 13-row list in full.** The Pane (01) rows are established by the accessibility snapshot `snapshot-t4-08-components-expanded-fx_orders.yml`. The filename is not accurate about what the image shows; it is kept as written (no shell rename).

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed: Designer User scope and clean before the open; existing FX_Orders components match the T1 baseline (13) | `t4-05`, `snapshot-t4-08`; T1 `t1-03`, `t1-04` | Same session; Edit and ComboBox captions not read |
| AC-2 | Not advanced (page 2 not reached; wizard cancelled) | — | — |
| AC-3 | Replacement prompt answered Yes once (T3). **No Finish.** Replacement outcome: no visible replacement observed (reopened Form equals baseline) | `t3-01`, `t3-02`, `t4-01`–`t4-05` | Observed only; not a server-side check |
| AC-4 to AC-6 | Not started (no second wizard; no Finish; no Save; no reopen-after-Finish pair) | — | — |

### Final state (end of T4)

- Designer (tab 0): no Form open; footer `ScopeType: User`; Save and Undo disabled; no dialog; no in-page alert.
- Wizard: closed (cancelled once; discard confirmed once). Not reopened.
- Web Client (tab 1): listed only in this task (`favoriteContext=IdoProperties`); not selected or acted on in T4.
- No unload performed (conditional branch not run; no second wizard).

### Action audit (T4; exact counts)

| Operation | T4 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 was current throughout; no select issued) |
| Untargeted snapshots (explicit `browser_snapshot`) | **9** (t4-01 to t4-09 snapshot files) |
| Targeted snapshots | **0** |
| `browser_find` (read-only) | **5** (one `Form` find after the discard; four `Caption` finds) |
| Element clicks (successful / failed) | **13 / 0** (timeout OK 1; wizard Cancel 1; discard Yes 1; Form menu 1; recent-forms FX_Orders 1; Details Expand 1; Components tab 1; Components grid Expand 1; four Static rows 4; Form-tab close 1) |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Waits / mouse / wheel / drag | **0** |
| Screenshots | **6** (`t4-01`–`t4-06`) |
| Form opens (FX_Orders) | **1** (recent-forms; verification open, not the post-Finish reopen) |
| Form closes (FX_Orders, clean) | **1** (Form-tab control; no prompt) |
| Wizard openings | **0** (T4) — cumulative 1 of 2 |
| Wizard Cancel | **1** (confirmed with Yes once) |
| Timeout alert OK | **1** (operator-authorized recovery; no retry) |
| Replacement prompts answered Yes | **0** in T4 (cumulative **1**, in T3) |
| Finish | **0** (cumulative 0 of 1) |
| Designer Save | **0** (cumulative 0 of 1) |
| Unloads (Web Client / Designer) | **0 / 0** (conditional branch not triggered) |
| Preference reads / changes | **0 / 0** |
| Strings created / caption edits | **0 / 0** |
| Component changes; Designer Delete clicks | **0; 0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| FormSync, deployment, regeneration | **0** |
| Re-logins; portal navigation; sign-in | **0** |
| Web Client actions | **0** (listed only) |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native browser dialogs | **0 / 0 / 0** |

**Cumulative EXP-082 (T1 + T2 + T3 + T4):** tab lists 4; tab selects 3; untargeted snapshots 20 (5 + 4 + 2 + 9); targeted 0; finds 21 (7 + 9 + 0 + 5); element clicks 33 successful / 0 failed (10 + 9 + 1 + 13); types 1; key presses 0; screenshots 19 (6 + 5 + 2 + 6); **Form opens 2 and closes 2** (T1 open and close; T4 open and close; T4 is a verification open, not the post-Finish reopen); **wizard openings 1** (of 2); wizard Cancel 1 (T4, confirmed); timeout alert OK 1 (T3's OK caused it; T4's OK acknowledged it); **replacement Yes answers 1** (T3); Finish 0 (of 1); Designer Save 0 (of 1); unloads 0 (conditional branch not run); strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 (of 1); Designer Delete clicks 0.

### Worker-written-file inventory (T4)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; this T4 section).
- `evidence/EXP-082/snapshot-t4-01-designer-fresh-start-before-timeout-ok.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-082/snapshot-t4-02-after-timeout-ok.yml`
- `evidence/EXP-082/snapshot-t4-03-after-wizard-cancel.yml`
- `evidence/EXP-082/snapshot-t4-04-after-discard-yes.yml`
- `evidence/EXP-082/snapshot-t4-05-fx_orders-opened-baseline-check.yml`
- `evidence/EXP-082/snapshot-t4-06-details-expanded-fx_orders.yml`
- `evidence/EXP-082/snapshot-t4-07-components-tab-fx_orders.yml`
- `evidence/EXP-082/snapshot-t4-08-components-expanded-fx_orders.yml`
- `evidence/EXP-082/snapshot-t4-09-pre-close-clean-check-fx_orders.yml`
- `evidence/EXP-082/t4-01-timeout-alert-before-ok-wizard-page1-behind.png`
- `evidence/EXP-082/t4-02-after-timeout-ok-wizard-page1-no-alert.png`
- `evidence/EXP-082/t4-03-wizard-cancel-confirmation-prompt-before-answer.png`
- `evidence/EXP-082/t4-04-after-wizard-discard-designer-no-form-user-scope-clean.png`
- `evidence/EXP-082/t4-05-baseline-recheck-components-list-13-rows-fx_orders-reopened.png` (**filename overstates content**: shows identity and Pane (00) rows, not the full 13 rows)
- `evidence/EXP-082/t4-06-after-fx_orders-clean-close-once-no-prompt.png`

Tool-generated, not worker-authored: `evidence\playwright\page-2026-10-14T01-41-25-987Z` … `page-2026-10-14T01-43-57-806Z.yml` and console files. Outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t4-01` | Wizard page 1 behind alert `Timeout expired waiting for response.`; Name `FX_Orders`; footer `ScopeType: User` | The timeout alert's exact text before acknowledgement | Its cause |
| `t4-02` | Wizard page 1, no alert; Next enabled; Finish disabled | The timeout OK did not advance or close the wizard | — |
| `t4-03` | Cancel confirmation `Are you sure you want to cancel? All data entered will be lost.` with Yes and No | The exact discard text before the single Yes | — |
| `t4-04` | Designer with no Form open; Save and Undo greyed; footer `ScopeType: User` | Clean state after the wizard closed | — |
| `t4-05` | FX_Orders tab; Name FX_Orders; Normal; Is Master True; canvas labels; grid rows Pane (00) | **AC-1** identity and Pane (00) bindings of the reopened Form | Pane (01) rows (see `snapshot-t4-08`) |
| `t4-06` | Designer with no Form open after the Form-tab close; no prompt; `ScopeType: User` | The clean close, no prompt | — |

### Knowledge state (T4)

| Finding | State |
|---|---|
| The timeout alert `Timeout expired waiting for response.` is acknowledged by OK and leaves the wizard on page 1 | **observed** (one run) |
| Cancel on the wizard raises `Are you sure you want to cancel? All data entered will be lost.` (Yes / No); Yes discards the unfinished wizard and closes it | **observed** (one run) |
| FX_Orders reopened from recent-forms shows the T1 baseline 13 components, bindings, types and four Static captions | **observed** (one run; accessibility readbacks) |
| The T3 OK on the replacement prompt left no visible replacement in this session | **observed** (one run; the reopen is a Designer view, not a server-side check) |
| Whether the server-side FX_Orders Form definition was replaced or changed | **unresolved** (no server-side read; no unload) |
| Replay, durability | **not claimed**; not replay_verified |

### Open questions (T4)

1. The T3 OK on the replacement prompt left no visible trace in the reopened Form. Whether the server-side Form definition was affected is **unresolved** (no server read; the conditional unload was not run).
2. The wizard's second replacement prompt (the tutorial shows up to two) has not been seen. Whether one appears at Finish is unknown.
3. The operator's conditional-retry decision is needed for any further wizard opening (the second opening is allowed only after the conditional unload; not performed here).

---

## T3 — replacement prompt answered OK once; unexpected "Timeout expired waiting for response." alert; STOPPED BLOCKED (cycle 2; page 2 NOT reached)

- Task T3, cycle 2, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `9dd161ae-9bfe-4900-8f2a-fbf14cb1d978`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T3 instruction): list tabs; fresh snapshot; confirm the open prompt text and buttons; capture; answer OK exactly once if it matches; record the immediate result; if page 2 appears, inventory it without changing Include; stop before page 3, Finish, unloads, preference reads, Designer Save and wizard close.

### Gate (before the answer)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call; before any selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client (`favoriteContext=IdoProperties`) | — |
| Tab selection | Not needed: tab 0 was already current (no tab select was issued in T3) | — |
| Fresh untargeted snapshot (saved) | Designer; footer `ScopeType: User`; Save disabled; wizard `Form Wizard - MultiView` on page 1 with Name `FX_Orders`, Form Type MultiView, Data Source `FX_Orders`; Next enabled; Finish disabled; the alertdialog **`Form FX_Orders already exists--replace it?`** with **OK** (active) and **Cancel** | `snapshot-t3-01-designer-prompt-state-before-ok.yml` |
| Prompt screenshot before any answer | Prompt over page 1, same text, OK default | `t3-01` |
| Prompt match | **Matches** the expected text exactly and names only FX_Orders. Authorized by the operator decision 2026-10-14 | `t3-01` |

### The single OK and its immediate result

| # | Action | Observed |
|---|---|---|
| 1 | Click **OK** on the `Form FX_Orders already exists--replace it?` alert (one click; the only answer given in T3) | No advance to page 2. The original alert closed and a **new** alertdialog appeared |
| 2 | Fresh untargeted snapshot (after the OK) | Wizard still on **page 1** (Name `FX_Orders`, Form Type MultiView, Data Source `FX_Orders`; Back disabled; Next enabled; Finish disabled). New alertdialog with title `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, text **`Timeout expired waiting for response.`**, single **OK** (active) |
| 3 | Screenshot of that state | `t3-02` (the alert is visible over page 1; the wizard is still behind it) |

**Classification of the new alert:** it is not the replacement prompt, does not name a Form, and is an unexpected message. Under the brief it is a stop condition. **Not answered.** No OK, Cancel, Enter or Escape was pressed on it, and no retry of the Replacement OK or of Next was made.

### What is and is not established after the OK

- **Established:** the replacement prompt text matched and the operator-authorized OK was pressed once. The wizard did not advance to page 2 and no page 2 inventory exists. The timeout alert appeared immediately after the OK.
- **Not established:** whether the OK started a replacement of FX_Orders on the server, whether that replacement completed, partly completed or failed, and whether the baseline Form FX_Orders is intact. The timeout alert is the only visible result. The Designer behind the wizard shows no Form tab (not re-inspected for Form content in T3).
- **Not established:** whether the page 2 inventory would show the six new properties. Not reached.
- The wizard is still open; Finish has not been invoked and remains available for a later decision only after the state is clarified.

### Blocker and the operator decision needed

1. **Blocker:** `Timeout expired waiting for response.` after the single OK on the replacement prompt. Its meaning (a server-side replacement timeout, or a different step) is unknown. Treat any further action (OK on the timeout alert, Next, Finish, Cancel, Designer Save, unloads) as a decision for the operator.
2. **Suggested next step (for the coordinator; not performed):** a read-only check of the FX_Orders Form state before any further wizard action (for example, whether the Form menu recent-forms entry and the Form definition still exist, and their Components), then a decision on the timeout alert (OK, then observing whether the wizard returns to page 1 or closes) and on whether to Cancel the wizard. Cancel would be a wizard action outside the T3 scope.
3. Page 2 inventory and the conditional-unload decision remain pending.

### Correction to the T2 inventory (t2-04)

- `evidence/EXP-082/t2-04-wizard-page2-property-inventory-initial-view.png` is a **misnamed prompt screenshot, not page 2 evidence.** It shows the page 1 replacement alert `Form FX_Orders already exists--replace it?` over page 1 (the same state as `t2-05`). It proves nothing about page 2. The T2 inventory rows that describe it as page 2 evidence are superseded by this note. It is kept as written (no shell rename is available).

### Action audit (T3; exact counts)

| Operation | T3 |
|---|---|
| `browser_tabs` list / select | **1 / 0** (tab 0 was already current; no select needed) |
| Untargeted snapshots (explicit `browser_snapshot`) | **2** (before the answer, saved; after the OK, tool-saved under `evidence\playwright\page-2026-10-14T01-33-53-770Z.yml`) |
| Targeted snapshots | **0** |
| `browser_find` | **0** |
| Element clicks (successful / failed) | **1 / 0** (OK on the replacement prompt) |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Waits / mouse / wheel / drag | **0** |
| Screenshots | **2** (`t3-01`, `t3-02`) |
| Replacement prompts answered Yes (OK on the exact FX_Orders prompt) | **1** |
| Unexpected alerts answered | **0** (`Timeout expired waiting for response.` left open) |
| Page 2 reached / page 2 inventory / Include changes | **0 / 0 / 0** |
| Page 3 / Finish / wizard Cancel | **0 / 0 / 0** |
| Designer Save | **0** (of 1) |
| Unloads (Web Client / Designer) | **0 / 0** |
| Preference reads / changes | **0 / 0** |
| Strings created / caption edits | **0 / 0** |
| Component changes; Designer Delete clicks | **0; 0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| FormSync, deployment, regeneration | **0** |
| Re-logins; portal navigation; sign-in | **0** |
| Web Client actions | **0** (tab 1 listed only) |
| JavaScript / evaluate / run-code / console / network | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts (tool) / native dialogs (browser-native) | **0 / 0 / 0** (the in-page `Timeout expired waiting for response.` is a Mongoose alert, not a browser-native dialog) |

**Cumulative EXP-082 (T1 + T2 + T3):** tab lists 3; tab selects 3; untargeted snapshots 11 (5 + 4 + 2); targeted 0; finds 16 (7 + 9 + 0); element clicks 20 successful / 0 failed (10 + 9 + 1); types 1; key presses 0; screenshots 13 (6 + 5 + 2); Form opens 1 and closes 1 (both T1); **wizard openings 1** (of 2 allowed); Next presses 1; **replacement prompts answered Yes 1**; Finish 0 (of 1); Designer Save 0 (of 1); unloads 0 (Web Client 0; Designer 0; conditional branch not triggered); strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 (of 1 allowed); wizard Cancel 0; Designer Delete clicks 0.

### Worker-written-file inventory (T3)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; this T3 section; the t2-04 correction).
- `evidence/EXP-082/snapshot-t3-01-designer-prompt-state-before-ok.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-082/t3-01-replacement-prompt-before-ok-form-fx_orders-already-exists.png` (created).
- `evidence/EXP-082/t3-02-after-single-ok-timeout-alert-unexpected-wizard-state.png` (created).

Tool-generated, not worker-authored: `evidence\playwright\page-2026-10-14T01-33-37-280Z`… and `page-2026-10-14T01-33-53-770Z.yml` (the post-OK snapshot and console file). Outside the EXP-082 path (known confinement limitation; operator git review is authoritative).

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01` | Wizard page 1 with Name `FX_Orders`; alert `Form FX_Orders already exists--replace it?`; OK (default) and Cancel; footer `ScopeType: User` | **AC-3** the exact replacement prompt text, its buttons, and its FX_Orders scope, before the single OK | What the OK did on the server |
| `t3-02` | Wizard page 1 still behind an alert `Timeout expired waiting for response.` (OK only); Name `FX_Orders`; Next enabled; Finish greyed | That the OK did **not** advance the wizard and produced an unexpected alert | Whether FX_Orders was replaced; the cause of the timeout |

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed: Designer User scope; the existing Form's components were recorded in T1 (`t1-03`, `t1-04`) | `snapshot-t3-01`; T1 evidence | Same session |
| AC-2 | **Partial**: page 1 values re-observed (`snapshot-t3-01`; T2 `t2-03`). **Page 2 not reached**; page 3 order and Save Template not reached | — | Blocked by the timeout alert |
| AC-3 | **Partial**: the prompt was recorded (`t3-01`) and answered Yes once; the Finish response is not applicable (Finish not invoked). Whether the replacement completed is **unresolved** | `t3-01`, `t3-02` | The timeout alert is unexplained |
| AC-4 to AC-6 | Not started | — | — |

### Blocker

- `Timeout expired waiting for response.` after the single OK. Stopped, not answered, not retried. Operator review required before any further action.

### Final browser state (end of T3)

- Designer (tab 0) selected. Footer `ScopeType: User`. No Form tab is visible behind the wizard; the Form menu was not opened in T3.
- Wizard `Form Wizard - MultiView` open on **page 1** (Name `FX_Orders`; Data Source `FX_Orders`; Form Type MultiView; Layout GridLeft; Device Default). Finish disabled; Next enabled; not pressed.
- **In-page alertdialog `Timeout expired waiting for response.` open and unanswered** (the brief's stop condition).
- Web Client (tab 1): listed only; not selected.
- No unload, Finish, Save, string, component, IDO or preference change in T3.

### Knowledge state (T3)

| Finding | State |
|---|---|
| The replacement prompt text `Form FX_Orders already exists--replace it?` (OK, Cancel) appears on Next from page 1 | **observed** (two runs: T2 `t2-05`, T3 `t3-01`) |
| One OK on that prompt does not advance the wizard to page 2 but raises `Timeout expired waiting for response.` | **observed** (one run; `t3-02`); cause **unresolved** |
| Whether the OK replaced, partly replaced or left FX_Orders unchanged | **unresolved** |
| Page 2 offered properties and the six-new-property availability | **unresolved** (page 2 not reached) |
| Replay, durability | **not claimed** (not replay_verified) |

---

## T2 — wizard opened once; page 1 configured; replacement prompt raised on Next; STOPPED UNANSWERED (cycle 1; page 2 NOT reached)

- Task T2, cycle 1, worker session `c5bf2326-27fb-4580-8614-4455e44d1602`, task_message_id `19d1431b-4a0c-4b7e-b19e-e2d58dc87824`, run `R-20261014-092354-OkSB`. Date 2026-10-14.
- Scope (bounded T2 instruction): confirm the Designer (User scope, clean, no Form open); open the wizard once (New > Classic > Multi-View > OK); page 1 Name `FX_Orders` by one plain fill, Form Type MultiView, Data Source `FX_Orders`; advance to page 2 only if page 1 is valid; inventory page 2 without changing Include; **no** page 3, Cancel, unload, Finish, replacement answer or Save in T2.

### Gate (before the wizard)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (first call; before any selection) | Tab 0 Designer (current; no `MGForm` parameter); tab 1 Mongoose Web Client (`favoriteContext=IdoProperties`) | — |
| Tab 0 selected (after the list) | Succeeded. Fresh untargeted snapshot: no Form tab (the Form tablist has no tab); footer `ScopeType: User`; toolbar Save and Regenerate Form disabled; Undo and Redo disabled; no dialog | `snapshot-t2-01-designer-preflight.yml`; `t2-01` |
| Gate verdict | **Passed**: User scope, clean, no Form open. The baseline Form was not reopened in T2 | `t2-01` |

### Actions (T2, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Designer toolbar **New** (one click) | Dialog `Form Wizard Selection`: New Form radio; Category and Wizard blank | snapshot |
| 2 | Category combobox arrow (one click), then `Classic` (one click) | Category `Classic` | find |
| 3 | Wizard combobox arrow (one click), then `Multi-View` (one click) | Wizard `MultiView` | find; snapshot |
| 4 | Screenshot before OK; New Form radio confirmed visually | Image: New Form selected; Category Classic; Wizard MultiView; Extend Form not selected | `t2-02` |
| 5 | Form Wizard Selection **OK** (one click) | `Form Wizard - MultiView` opened on page 1. **Wizard opening 1** | snapshot |
| 6 | Name combobox: **one plain fill** `FX_Orders` (no Tab) | Name `FX_Orders` | find |
| 7 | Data Source combobox `Open` (one click), then the `FX_Orders` option (one click) | Data Source `FX_Orders` (the IDO list also offered FX_HelloWorld01, FX_Items, FX_UMs and many other IDOs; only FX_Orders was chosen) | find |
| 8 | Page 1 readback | Name `FX_Orders`; Form Type `MultiView` (greyed); Form Layout `GridLeft`; Device Type `Default`; Data Source `FX_Orders`; Query Form empty; Comments empty; Back disabled; Next enabled; Finish disabled. **No message on page 1.** | `t2-03` (image confirmed) |
| 9 | Screenshot of completed page 1 before advancing | As row 8 | `t2-03` |
| 10 | Page 1 **Next** (one click) | **Did not advance.** Alert dialog (below). Page 2 not shown | `t2-04`, `t2-05` |

### Replacement prompt raised on Next from page 1 (NOT answered)

- Alert dialog, title `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; exact text **`Form FX_Orders already exists--replace it?`**; buttons **OK** (active/default) and **Cancel**.
- This prompt explicitly names FX_Orders and asks to replace it, so it is a replacement prompt of the kind the brief covers. Under the T2 instruction it was **not** answered: no OK, no Cancel, no Enter or Escape was pressed. It is left open, deliberately, for the operator's decision.
- Screenshot evidence (taken before any answer): `evidence/EXP-082/t2-05-replacement-prompt-form-fx_orders-already-exists-unanswered.png` (the prompt over page 1 with Name `FX_Orders`, Next/Back/Finish/Cancel visible behind it). `evidence/EXP-082/t2-04-wizard-page2-property-inventory-initial-view.png` shows the same state; **its file name is inaccurate** (it does not show page 2) and is kept as written, not renamed (no shell).
- Observation: at EXP-072 the name `FX_Orders` did not yet exist, so Next went to page 2 with no prompt. Here the baseline Form exists, and the replacement check fired on **Next from page 1**, before page 2, not at Finish as the tutorial narrates (`hello-world-pt5.md` line 456: "hit next then finish and say ok to replace the form"). The brief's expectation of the prompt's location (at Finish) did not hold in this run.

### Page 2 inventory (NOT performed)

- Not reached. Not recorded in T2: the offered property list, Include states of the system properties, and whether all six new properties (FX_CusName, FX_CusAddress, FX_ItmsDescription, FX_ItmsCost, FX_DerOrderTotal, FX_ItmsPicture) are offered. **The conditional unload branch was therefore not evaluated and was not run** (the branch depends on page 2).
- No Include, order or Save-Template change; no page 3; no Finish; no Cancel.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed in T2: sources (T1), session usable, Designer User scope, clean, no Form open before the wizard | `t2-01`, `snapshot-t2-01-designer-preflight.yml`; T1 `t1-01` to `t1-06` | Same session only |
| AC-2 | **Partial.** Route used (New > Classic > Multi-View > OK; one wizard opening); page 1 Name `FX_Orders` and Data Source `FX_Orders` set and captured (`t2-03`). **Page 2 not reached**, so the six-new-property check and the page 3 order are not started. Save Template not yet reached | `t2-02`, `t2-03`, `t2-05` | Blocked by the page 1 replacement prompt |
| AC-3 | **Not started** (the prompt is pending; no Finish; no answer) | `t2-05` (prompt, unanswered) | — |
| AC-4 to AC-6 | Not started | — | — |

### Blocker and operator decision

- **Blocker:** Page 1 Next raised the replacement prompt `Form FX_Orders already exists--replace it?`. The T2 scope forbids answering it and requires a stop. Page 2 inventory and the conditional unload decision are therefore pending.
- **Decision needed from the operator:** (a) the next task should first inspect the open prompt (a fresh tab list and selection of tab 0; a snapshot; the prompt text), then either answer OK once (replacing FX_Orders, per the 2026-10-14 decision) or Cancel. Answering OK at Next is an earlier replacement than the brief's Finish-stage plan, so the operator should confirm that a Next-stage OK is acceptable. (b) If Cancel is chosen, the wizard's state afterwards (return to page 1, or close) is not known and must be observed.
- Whether the replacement prompt would reappear at Finish (the tutorial shows up to two) is not known.

### Action audit (T2; exact counts)

| Operation | T2 |
|---|---|
| `browser_tabs` list / select | **1 / 1** |
| Untargeted snapshots (explicit `browser_snapshot`) | **4** (preflight with a saved file; after New; after the Multi-View option; after the wizard OK). Tool-generated snapshot output after clicks is not counted |
| Targeted snapshots | **0** |
| `browser_find` (read-only) | **9** (Classic; Wizard; MultiView (no match); option/multi list; radio check; combobox readback; Data Source option list; page 1 readback; `already exists`) |
| Element clicks (successful / failed) | **9 / 0** (toolbar New; Category arrow; Classic; Wizard arrow; Multi-View; Selection OK; Data Source Open; FX_Orders option; page 1 Next) |
| `browser_type` (succeeded / refused) | **1 / 0** (Name `FX_Orders`, one plain fill) |
| Key presses / Enter / Escape | **0 / 0 / 0** |
| Waits / mouse / wheel / drag | **0** |
| Screenshots | **5** (`t2-01` to `t2-05`) |
| Wizard openings | **1** (of 2; the second only after the conditional unload) |
| Wizard pages advanced | **0** (Next pressed once on page 1; blocked by the prompt) |
| Page 2 inventory / Include changes | **0 / 0** |
| Replacement prompts seen / answered Yes / answered No or Cancel | **1 / 0 / 0** (one pending) |
| Finish | **0** (of 1) |
| Save Template change | **0** |
| Cancel of the wizard | **0** |
| Designer Save | **0** (of 1) |
| Unloads (Web Client / Designer) | **0 / 0** (conditional branch not triggered) |
| Preference reads / changes | **0 / 0** |
| Strings created / caption edits | **0 / 0** |
| Component changes; Designer Delete clicks | **0; 0** |
| IDO, property, class, SQL or runtime-record changes | **0** |
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| FormSync, deployment, regeneration | **0** |
| Form opens / closes (FX_Orders, T2) | **0 / 0** (the baseline FX_Orders was closed in T1; the wizard is not a Form open) |
| Re-logins; portal navigation; sign-in | **0** |
| Web Client actions (beyond the tab list) | **0** (tab 1 listed only; not selected) |
| JavaScript / evaluate / run-code / console / network (worker-authored) | **0** |
| Refresh / restart / direct URL | **0** |
| Ref-not-found / timeouts / native dialogs answered | **0 / 0 / 0** |

**Cumulative EXP-082 (T1 + T2):** tab lists 2; tab selects 3; untargeted snapshots 9 (T1 5 + T2 4); targeted 0; finds 16 (T1 7 + T2 9); element clicks 19 successful / 0 failed (T1 10 + T2 9); types 1; key presses 0; screenshots 11 (T1 6 + T2 5); Form opens 1 and closes 1 (both T1); **wizard openings 1**; Next presses 1 (blocked); Finish 0; replacement prompts seen 1, answered 0; Designer Save 0; unloads 0; strings 0; caption edits 0; IDO changes 0; checkout actions 0; re-logins 0 (of 1 allowed).

### Worker-written-file inventory (T2)

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (edited: status header; this T2 section).
- `evidence/EXP-082/t2-01-designer-preflight-no-form-user-scope-clean.png` (created).
- `evidence/EXP-082/t2-02-form-wizard-selection-classic-multiview-before-ok.png` (created).
- `evidence/EXP-082/t2-03-wizard-page1-name-multiview-datasource-fx_orders-before-next.png` (created).
- `evidence/EXP-082/t2-04-wizard-page2-property-inventory-initial-view.png` (created; **misnamed**: shows the page 1 replacement prompt, not page 2).
- `evidence/EXP-082/t2-05-replacement-prompt-form-fx_orders-already-exists-unanswered.png` (created).
- `evidence/EXP-082/snapshot-t2-01-designer-preflight.yml` (created by the snapshot tool at the worker's filename request).

Tool-generated, not worker-authored: Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-14T01-29-39-920Z.yml` to `page-2026-10-14T01-31-01-703Z.yml`). Outside the EXP-082 path (known confinement limitation; the operator's git review is authoritative).

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01` | Designer; no Form open; footer `ScopeType: User`; Save and Undo greyed | **AC-1** pre-wizard state | Form contents |
| `t2-02` | Form Wizard Selection: New Form selected; Category Classic; Wizard MultiView; OK and Cancel | **AC-2** route (New > Classic > Multi-View) before OK | The wizard result |
| `t2-03` | Wizard page 1: Name `FX_Orders`; Form Type MultiView; Layout GridLeft; Device Default; Data Source `FX_Orders`; Query Form and Comments empty; Next enabled; Finish greyed; no message | **AC-2** page 1 values (Name, Data Source) before advancing | That the Next press succeeds (see `t2-05`) |
| `t2-05` | Alert over page 1: "Form FX_Orders already exists--replace it?"; OK (default) and Cancel; wizard behind with Name `FX_Orders` | The **exact replacement prompt text**, raised on Next, **before** any answer | Which answer the operator will choose; whether Finish raises a second prompt |
| `t2-04` | Same state as `t2-05` (misnamed) | Duplicate of the prompt state | Page 2 (not reached) |

### Final state (end of T2)

- Designer (tab 0) selected. No Form tab open in the Designer; the baseline FX_Orders Form is **not** open and was **not** replaced. Footer `ScopeType: User`.
- Wizard `Form Wizard - MultiView` is **open on page 1** with Name `FX_Orders`, Data Source `FX_Orders`, and the **alert "Form FX_Orders already exists--replace it?" open and unanswered** (in-page dialog left open deliberately; the T2 instruction forbids answering it).
- Web Client (tab 1): listed only; not selected; not acted on.
- No unload, Save, Finish, string, component, IDO or runtime change.

### Knowledge state (T2)

| Finding | State |
|---|---|
| The Classic > Multi-View wizard opens with Form Type MultiView, Layout GridLeft, Device Default, and accepts Name `FX_Orders` (one plain fill) and Data Source `FX_Orders` | **observed** (one run; `t2-03`) |
| Pressing Next on page 1 raises "Form FX_Orders already exists--replace it?" (OK/Cancel) when the Form exists | **observed** (one run; `t2-05`) |
| The replacement check appears on Next from page 1, not at Finish as the tutorial narrates | **observed** (one run) |
| Page 2 offered properties and the six-new-property availability | **unresolved** (page 2 not reached) |
| Whether the conditional unload is needed | **unresolved** (depends on page 2) |
| Replay, durability | **not claimed** (not replay_verified) |

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 5 steps 1-7 are complete. The operator made every decision in this run.

- Run R-20261014-092354-OkSB completed as accepted after 10 worker tasks.
- Operator decisions:
  1. **Timeout after T3:**
     - In T2, Next on page 1 raised "Form FX_Orders already exists--replace it?". The prompt was left open until T3, where its OK produced "Timeout expired waiting for response.".
     - The operator authorized the recovery: OK the alert, Cancel the wizard, and confirm one discard prompt (T4).
     - A read-only recheck found FX_Orders unchanged (13 components).
     - The operator then authorized a second wizard opening, answering the replace prompt in the same task (T5).
  2. **Two scope flags** (the instructions mentioned EXP-083 only to exclude it). The operator approved both.
  3. **T9 stale-locator click:** a selection-only click on the FX_ItemCombobox tree item, using a locator not taken from the current snapshot. The operator ruled it not disqualifying:
     - it was a selection only;
     - it came after the AC-5 inventory was read;
     - the snapshot afterwards shows the same active row, Save and Undo disabled and no dialog.

     It remains a disclosed process deviation.
- Changed, for later cleanup:
  - **Form `FX_Orders` (User scope)** was replaced by the Classic Multi-View wizard (Finish once, "Process Completed Successfully"). The EXP-072 layout with four business fields is gone.
  - The new Form has 31 components:
    - one FormCollectionGrid;
    - ten GridColumns;
    - ten Static labels;
    - ten detail controls, each bound to `object.<Property>`.
  - The field order is FX_OrderNumber, FX_CustomerID, FX_CusName, FX_CusAddress, FX_Item, FX_ItmsDescription, FX_ItmsCost, FX_Count, FX_DerOrderTotal, FX_ItmsPicture.
  - FX_CustomerID and FX_Item are ComboBoxes. **FX_ItmsPicture is an Edit** (no image control), and its Static and grid-column captions are blank.
  - No Designer Save was needed: the Designer was clean after Finish.
- Replacement prompt answers: three OKs, each on the exact "Form FX_Orders already exists--replace it?" (T3, which timed out; T5 on page 1; T7 after Finish). Save Template was checked on the final page and was unchecked once.
- Screenshots viewed by the operator assistant:
  - `t3-02`: the timeout alert over wizard page 1.
  - `t7-05`: "Process Completed Successfully".
  - `t9-04`: after the close/reopen, FX_Orders in User scope with Save disabled.
    - The canvas shows Order Number*, Customer ID*, FX_sCustomerName, Address, Item*, FX_sItemDescription, Cost 0.00, Count 1 and FX_sOrderTotal 0.00.
    - The Components grid ends with FX_ItmsPictureEdit, an Edit bound to object.FX_ItmsPicture.
- Counts:
  - wizard openings 2, wizard cancels 1, Finish 1;
  - replacement OKs 3, timeout acknowledgments 1;
  - Designer Saves 0, unloads 0 (the new properties were offered without one);
  - post-Finish close/reopen 1;
  - strings 0, caption edits 0, IDO changes 0, re-logins 0.
- Flagged `browser_type` calls: the wizard page 1 Name ×2, both authorized.
- Findings (observed):
  1. **The Multi-View wizard needs no unload** to offer IDO properties added in the same session, unlike the Designer binding picker (EXP-076).
  2. **The replace prompt appears twice:** on page 1 Next and again after Finish, as the tutorial says. A prompt left open across tasks times out on OK.
  3. **The wizard creates no image control:** a Binary property with class FX_Picture becomes a plain Edit with a blank caption.
  4. **Captions follow the property Label String IDs:** FX_sAddress and FX_sCost resolve, and the three missing strings show as raw IDs.
- Limits:
  - Same-session UI evidence only; the runtime has not been opened.
  - The full 31-row inventory comes from snapshots; no single screenshot shows all of it.
- Confinement (git status): only `evidence/EXP-082/` and this record were written by the run.
- Next: EXP-083. Create the strings FX_sCustomerName = Customer Name, FX_sItemDescription = Item Description and FX_sOrderTotal = Order Total through the Caption ellipsis; decide how to handle the picture field (an image control and a caption); save once; then check both orders at runtime (expected order totals 90.00 and 6.99).
