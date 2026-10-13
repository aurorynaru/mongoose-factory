# EXP-081 — Hello World Part 5 Sections 2–3: Label String ID overrides and Read Only on FX_DerOrderTotal (FX_Orders IDO)

**CURRENT STATUS (after T5, 2026-10-14): T5 COMPLETE — FINAL ACCEPTANCE DOCUMENTATION WRITTEN; ZERO BROWSER CALLS AND ZERO MONGOOSE CHANGES IN T5.** Final report: `evidence/EXP-081/T5-final-acceptance-report.md` (AC-1 to AC-6 matrix with exact evidence paths and limitations; four-property baseline, pre-Save, post-Save and recovered comparison; 17-property reconciliation; cumulative T1–T4 audit reconciled; worker-written-file inventory; final browser state). **Recommendation: ACCEPTED AS OBSERVED, subject to coordinator review.** Not `replay_verified`; no database durability claimed. Two T4 statements were corrected in this record (the last current row was row 5 and the IDO Properties tab was active; the "16 other properties" wording is corrected to 13 non-targeted properties plus three other targets whose Label String IDs changed intentionally). Open items: the provenance of the displayed `FX_sCost` is unresolved; the three requested strings (FX_sOrderTotal, FX_sCustomerName, FX_sItemDescription) are not created in EXP-081, no create offer was observed, and their runtime resolution is unverified.

**Earlier status (after T4, 2026-10-14): T4 COMPLETE — RECOVERY PAIR AND ONE VISIBLE-CRITERION QUERY DONE; RECOVERED VALUES OBSERVED.** The clean child IDO Properties Form was closed once (Form-tab control; Save disabled; no prompt); the clean parent IDOs Form was closed once (Form-tab control; no prompt); IDOs was reopened once through Form > Open > Select Form (`IDOs / IdoCollections`; status `Filter in Place`); `FX_Orders` was typed by keystrokes into IDO Name, Tab-committed, captured before F4, and F4 was pressed **once** (the second and last authorized target query). Exactly one FX_Orders row came back, checked out to the operator (Check In and Undo Check Out enabled; Revision 2; project FX_HelloWorldProject01; three Tables entries). The 17-property Properties grid matches the T1 baseline for every property except FX_DerOrderTotal's Read Only (now checked, as intended). Read-only inspection through the same Properties-button route: FX_CusAddress `FX_sAddress`, FX_DerOrderTotal `FX_sOrderTotal` (Read Only checked), FX_CusName `FX_sCustomerName`, FX_ItmsDescription `FX_sItemDescription` (each Read Only checked); Derived attributes unchanged. Save disabled on both Forms. **No edit, no Save, no string created, no checkout action, no Designer action.** AC-5 supported (observed; same session). AC-6 is **not finalized** here (assembled data below; the final report is a separate step). Classification: **observed only**; not database durability; not replay verified.

**Earlier status (after T3, 2026-10-14): T3 COMPLETE — ONE ORDINARY TOOLBAR SAVE INVOKED; SAVE SETTLED DISABLED; POST-SAVE READBACKS OBSERVED.** The single toolbar Save returned with **no visible native response** (no banner, validation message, prompt, dialog or error); afterwards the toolbar Save was disabled and the unsaved markers on rows 1, 3, 5 and 14 cleared. Revisited read-only (row selection, no edit): FX_CusName `FX_sCustomerName` (Read Only checked), FX_ItmsDescription `FX_sItemDescription` (Read Only checked), FX_CusAddress `FX_sAddress` (Read Only checked), FX_DerOrderTotal `FX_sOrderTotal` (Read Only checked). Parent FX_Orders still checked out to the operator (Check In and Undo Check Out enabled; Revision 2). **Not done in T3 (by instruction):** the IDOs close/reopen recovery pair and the recovery query (AC-5); the final report (AC-6). No recovery and no retry of the Save. Classification: **observed only**, same session; not database durability; not replay verified.

**Earlier status (after T2, 2026-10-14): T2 COMPLETE — FIVE AUTHORIZED ATTRIBUTE CHANGES APPLIED AND VERIFIED PRE-SAVE; NOT SAVED.** Four Label String ID entries (FX_CusAddress → `FX_sAddress`; FX_DerOrderTotal → `FX_sOrderTotal`; FX_CusName → `FX_sCustomerName`; FX_ItmsDescription → `FX_sItemDescription`) and one Read Only tick (FX_DerOrderTotal) are in the open IDO Properties Form as unsaved changes. Each readback was verified with no message or prompt; the three missing strings produced **no create offer** on Tab. Save was **not** invoked; the recovery pair and the final query were not run. The IDO Properties Form is dirty and open (Save enabled); the IDOs Form behind it is clean with FX_Orders still checked out to the operator. Cumulative counts and the T2 section are below. Next permitted action: the Save and recovery task (separately authorized). Classification: **observed only**, pre-Save, same session.

**Earlier status (after T1, 2026-10-14): T1 COMPLETE — READ-ONLY PREFLIGHT, BASELINE AND EDIT-ROUTE IDENTIFICATION. NO EDIT MADE.** The IDOs Form was closed once and reopened once (fresh Form), one visible-criterion query returned exactly one FX_Orders IDO checked out to the operator (Revision 2), the complete 17-property inventory and the baseline Label String ID and Read Only values of the four target properties were recorded, and the edit route was identified (the **IDO Properties Form** opened by the blue `Properties` button). Per the T1 bounded instruction, the task stopped before any edit: **zero Label String ID entries, zero Read Only ticks, zero Save, zero strings created.** The IDO Properties Form is left open and clean; the IDOs Form (FX_Orders, checked out) is left open behind it and clean. Classification: **observed only** (same session; UI and accessibility level; not database durability; not replay verified).

Acceptance status after T1: AC-1 supported (observed); AC-2 supported (route identified and recorded before any edit); AC-3 to AC-6 not started (later tasks).

## Run identity

- Experiment EXP-081, cycle 0, task **T1** (read-only preflight, baseline and edit-route inspection; stop before any edit). Run `R-20261014-015408-hxgu`; worker session `67b6c280-9a13-48bd-88ff-0b393b3fe095`; task_message_id `a11ffbe1-ec82-4a95-853f-9ce049cfbe71`.
- Date 2026-10-14 (per the task). Mongoose screen timestamps show 10/13/2026 for FX_Orders Revision Date (see Observations). LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO property changes are tenant-wide.
- Brief commits (session-start git context; not re-verified; no shell): `4fbbc5c` (EXP-081: approved brief), `dbb900b` (EXP-081: draft brief).
- Record provenance: this record did not exist at T1 start (the Read of `experiments/EXP-081-…md` returned "does not exist"). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-081/`.
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (operator account; not re-recorded).

## Objective (T1 scope, bounded instruction)

Read the sources; list tabs; select the Web Client (tab 1); confirm the session; close and reopen the IDOs Form once (fresh Form); check Filter in Place; type `FX_Orders` in IDO Name; capture the criterion; press F4 once; confirm one FX_Orders IDO checked out to the operator; record the 17-property inventory and the current Label String ID and Read Only values of FX_CusAddress, FX_DerOrderTotal, FX_CusName and FX_ItmsDescription; identify the edit route read-only; record this experiment. **Stop before any edit.**

Later tasks (not authorized in T1): the four Label String ID entries and the one Read Only tick (see Next permitted action); one ordinary Save; the recovery pair (IDOs close and reopen; one visible-criterion query). Strings are not created here.

## Sources reviewed (before browser interaction)

- `AGENTS.md` (full: LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation; recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt5.md` lines 94–133 (Section 2 "Bind selected joined columns and assign property attributes", 01:44–03:33; Section 3 "Add a derived order-total property", 03:33–05:05; source cautions). The raw transcript excerpt at lines 388–434 was **not** read in T1. Relevant narration: Section 2 step 5 assigns Label String IDs to the joined and base properties (`s address`, `s item description`, `s customer name`, `s customer id`); Section 3 step 5 overrides the Derived property's Label String ID (`s order total`) "to replace the Cost class's inherited label"; step 6 checks Read Only on the derived property, then Save. The tutorial's spelling of names is not used (adapted to FX_ names per the brief).
- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` lines 1–482 of 1382 (status header; T1 session recovery; T2 baseline; T3 wizard) and the T4/T5 outcome lines in the status header (FX_DerOrderTotal added; sequence 0; class FX_Cost; Derived; expression `FX_Count * FX_ItmsCost`; Read Only unchecked). The T4–T7 sections were **not** read in full. Used for: the Derived row in the Properties grid (Property Type Derived; expression in the Property Value column, clipped; Decimal 18 decimal).
- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` lines 1–457 of 1736 (status header; T1 baseline; Filter in Place on reopen). Used for: the joined properties (FX_ItmsDescription and FX_ItmsCost via `fxitms`; Read Only checked on joined properties); the grid horizontal wheel scroll was not effective (T9, line ~573). Later sections not read.
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` lines 1–454 of 1348 (status header; T1 baseline; Filter in Place on reopen). Used for: FX_CusName (Bound to `fxcus.FX_Label`) and FX_CusAddress (Bound to `fxcus.FX_Address`) baseline; joined properties Read Only checked; the reopened IDOs Form opening in Filter in Place.
- `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` lines 1–510 of 1497 (T1–T3). Used for: the Label String ID typed in the class editor (`FX_sCustomerID`, plain fill then one Tab, no prompt recorded at T2). The FX_CustomerID class label is the class's (FX_sCustomerID), not an IDO-property override.
- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` lines 1–515 of 1577 (status header and T1 string-absence proof). Used for: the existing string **FX_sAddress** with String Value `Address` (created in EXP-076 T10 after the Caption prompt `String FX_sAddress does not exist. Create it?`; confirmed in the T11 status). The FX_sAddress existence is taken from the EXP-076 status, not re-read in Strings in T1.
- Targeted greps (not full reads): `experiments/EXP-075-…` (IDO property wizard offers no Label String ID field, as cited in EXP-078's sources); `experiments/EXP-071-R2-…` D6 (a typed label string accepted as typed; existence unverified), cited in EXP-078 T2; `experiments/EXP-048-…` (FX_Cost class: Label String ID `FX_sCost`).
- Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git command.

## Browser tab state and session (T1)

| Step | Observed |
|---|---|
| `browser_tabs` list (before any selection) | Tab 0: Infor Mongoose Application Development Framework (Designer, `mode=designer`), not selected, not snapshotted, not clicked or captured. Tab 1: Mongoose (`favoriteContext=IdoCollections`). |
| Tab 1 selected | Succeeded after the list. |
| Session | Usable. No "Session Expired" modal, no Infor sign-in page, no `portal-notification` banner, no native dialog, and no session-warning strip ("Your session is about to expire") in any snapshot or screenshot. Re-login count **0**. |
| Start state (snapshot S1) | IDOs tab open and clean (Save disabled; Check Out disabled; IDO Name blank and active; status Filter in Place; no row). No IDO Properties tab. |

The session-expiry procedure was **not** triggered; no proactive re-login was needed.

## Fresh IDOs Form (AC-1)

1. The clean IDOs tab was closed once through its Form-tab control (`Close Panel IDOs`). No prompt. (S2: no Form open.)
2. The Form menu was opened (one click); the `Open` menu item was clicked once; the Select Form dialog opened with Filter `IdoCollections` and two rows (`G6RIdoCollectionSearch` and `IDOs / IdoCollections`).
3. The `IDOs / IdoCollections` row was clicked once (not the search Form). Select Form `OK` was clicked once.
4. S4 readback: the IDOs Form reopened; status bar **`Filter in Place`**; IDO Name blank and active; Save disabled; no dialog.

## Target query and baseline (AC-1)

- Criterion: `FX_Orders` typed once into IDO Name (keystrokes, `slowly` true), committed with one Tab. Focus then moved to the Extends combobox (no typing there).
- **Pre-F4 criterion** captured as `evidence/EXP-081/t1-01-pre-f4-idos-fx-orders-criterion.png` (before F4).
- F4 pressed **once** (target query 1 of 2 allowed). Wait 3 s. Snapshot S5.
- Result (S5): status `Description (IDOs 1 of 1)`; **exactly one row**: `FX_Orders`, row checkbox checked, Locked By the operator account, Revision Date `10/13/2026`, Revision Num `2`. Project Name `FX_HelloWorldProject01`. Label String ID `oFX_Orders`; Caption `oFX_Orders`; Access As `G6R`. **Check In and Undo Check Out enabled** (checked out to the operator). Save disabled.
- Tables view (accessibility readback S5; no separate screenshot): three entries — `FX_HelloWorld01 / fxcus / Secondary / Left Outer / fxcus.[FX_Code] = fxords.[FX_CustomerID]`; `FX_Items / fxitms / Secondary / Left Outer / fxitms.[FX_Item] = fxords.[FX_Item]`; `FX_Orders / fxords / Primary Base / Inner`.
- Checkout gate **passed**: FX_Orders is checked out to the operator. No Check Out, Check In or Undo Check Out was clicked.

### Complete property inventory (17 rows; in-form Properties sub-tab; S6 accessibility readback and `t1-02`; status `(Properties 1 of 17)` confirmed in `t1-03`)

Columns read from the grid header: Property Name, Sequence, Property Class, Property Type, Column Name, Property Value, Key Sequence, Data Type, Length, Column Type, Read Only, Required, Upper Case, Pseudo Key, Read Only Record. The checkbox columns are mapped by header order (accessibility readback).

| # | Property Name | Seq | Property Class | Property Type | Column Name | Property Value | Key Seq | Data Type | Length | Column Type | Read Only | Required | Pseudo Key | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_DerOrderTotal | 0 | FX_Cost | Derived | (blank) | `FX_Count * FX_ItmsCost` | (blank) | Decimal | 18 | decimal | no | no | no | no |
| 2 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | (blank) | 1 | (class) | (blank) | (class) | no | yes | no | no |
| 3 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | (blank) | 0 | String | 100 | nvarchar | **yes** | no | no | no |
| 4 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | (blank) | 0 | (class) | (blank) | (class) | no | yes | no | no |
| 5 | FX_ItmsDescription | 2 | (blank) | Bound to Column | FX_Description | (blank) | 0 | String | 150 | nvarchar | **yes** | no | no | no |
| 6 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | (blank) | 0 | (class) | 50 | (class) | no | yes | no | no |
| 7 | FX_ItmsCost | 3 | FX_Cost | Bound to Column | FX_Cost | (blank) | 0 | Decimal | 18 | decimal | yes | no | no | no |
| 8 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | (blank) | 0 | Long Integer | (blank) | int | no | no | no | no |
| 9 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | (blank) | 0 | String | 128 | UsernameType | yes | no | no | no |
| 10 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | (blank) | 0 | String | 128 | UsernameType | yes | no | no | no |
| 11 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | (blank) | 0 | Date | (blank) | CurrentDateType | yes | no | no | no |
| 12 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | (blank) | 0 | Date | (blank) | CurrentDateType | yes | no | no | no |
| 13 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | (blank) | 0 | GUID | (blank) | RowPointerType | yes | no | no | no |
| 14 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | (blank) | 0 | String | 150 | nvarchar | **yes** | no | no | no |
| 15 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | (blank) | 0 | Byte | (blank) | FlagNyType | no | no | no | no |
| 16 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | (blank) | 0 | Byte | (blank) | FlagNyType | no | no | no | **yes** |
| 17 | FX_ItmsPicture | 12 | FX_Picture | Bound to Column | FX_Picture | (blank) | 0 | Binary | (blank) | varbinary | yes | no | no | no |

- Bold Read Only `yes` marks the three target rows (FX_CusName, FX_ItmsDescription, FX_CusAddress) that already carry Read Only; row 1 (FX_DerOrderTotal) is the one target with Read Only **no**.
- Rows 2–17 are the 16 Bound rows of the EXP-080-R3 T2 baseline (same names, sequences, classes and types); row 1 is FX_DerOrderTotal (Derived), added by EXP-080-R3 T4.
- Sequence values are shared (2: FX_CusName, FX_CustomerID, FX_ItmsDescription; 3: FX_Item, FX_ItmsCost; 10: FX_CusAddress, NoteExistsFlag). Observation only; renumbering is out of scope.
- Blank Column Name and Key Sequence on row 1 are as displayed (Derived).

### Baseline of the four target properties (Label String ID and Read Only; AC-1)

| Target property | Set in this experiment | Baseline Label String ID (IDO Properties detail) | Baseline Read Only | Evidence |
|---|---|---|---|---|
| FX_CusAddress (seq 10; `fxcus.FX_Address`) | `FX_sAddress` (existing string; value `Address`) | **blank** | **checked** | `t1-07` |
| FX_DerOrderTotal (Derived; FX_Cost) | `FX_sOrderTotal` (string not yet created) and Read Only tick | **`FX_sCost`** (displayed; the Cost class's label, per the tutorial's "inherited label") | **unchecked** | `t1-04` |
| FX_CusName (seq 2; `fxcus.FX_Label`) | `FX_sCustomerName` (string not yet created) | **blank** | **checked** | `t1-05` |
| FX_ItmsDescription (seq 2; `fxitms.FX_Description`) | `FX_sItemDescription` (string not yet created) | **blank** | **checked** | `t1-06` |

- The base `FX_CustomerID` label comes from its class (`FX_sCustomerID`, EXP-070) and is **not** changed; it is not a target.
- Observed: the Label String ID shown for FX_DerOrderTotal (`FX_sCost`) is the value displayed in the Formatting group before any change. Whether it is stored on the property or inherited from class FX_Cost is **unresolved** (not established by the UI readback alone).

## Edit route (AC-2; identified read-only in T1; no edit made)

**Route chosen for all later edits: the IDO Properties Form** (the blue `Properties` button in the IDOs Form's button bar; one click in T1). Evidence: `t1-04-route-properties-button-form-idoproperties-detail.png`.

Route reasoning (observed):
1. The in-form IDOs Properties grid has **no Label String ID column**. Its 15 headers end at Read Only Record. A horizontal scroll (one click on the grid's right scroll arrow, coordinates (1808, 827)) moved the grid so Pseudo Key was at the right edge; Read Only Record was off-screen (`t1-03`). Read Only is a grid column (checkbox) in this grid, but Label String ID is not, so this grid cannot be the single route for the four Label String IDs.
2. The blue `Properties` button opened a second Form tab, **`IDO Properties`** (`favoriteContext=IdoProperties`), with status `Property Name (Properties 1 of 17)`. Its left grid lists the 17 property names (rows 1–17). Its detail panel for the current row shows, in the **Formatting** group, the `Label String ID:` combobox and the `Read Only` checkbox (the `Property Overrides` tab is selected). Its own toolbar Save is at the top (disabled while clean).
3. Chosen route for every edit: select the target row in the left Property Name grid; edit `Label String ID:` (Formatting group combobox) and tick `Read Only` (Formatting group checkbox) in the IDO Properties detail panel; one ordinary toolbar Save of the IDO Properties Form (in the later task). Do not use the in-form IDOs grid for edits.

Notes for the edit task (observed; not executed):
- When a row is selected, the Property Name textbox takes focus with its text selected. No keystrokes may be typed until the target field is clicked.
- The FX_DerOrderTotal Label String ID combobox currently holds `FX_sCost`; typing `FX_sOrderTotal` will need the existing text replaced (select the field's text before typing) and then verified in the readback.

## Observations (observed only)

1. The IDOs in-form Properties grid shows a Derived row (FX_DerOrderTotal) with Property Type `Derived`, Property Class `FX_Cost`, Property Value `FX_Count * FX_ItmsCost` (clipped in the screenshot; full text from the accessibility readback), Decimal 18 decimal, Read Only unchecked.
2. For the four target rows, the IDO Properties detail's Read Only checkbox (`t1-05` to `t1-07`) agrees with the IDOs grid's Read Only column (`t1-02` and the S6 accessibility readback). Rows 9–17 were not compared visually against the detail panel.
3. The IDO Properties grid's accessibility readback for rows 3–17 exposes only the first columns; the Label String ID value for those rows is not in the readback and was read from the detail panel instead (`t1-05` to `t1-07`).
4. FX_OrderNumber's Label String ID in the IDO Properties grid reads `FX_sOrderNumber` (observed incidentally; not a target).
5. The Revision Date `10/13/2026` on the 2026-10-14 session is unchanged from earlier experiments (EXP-078 to EXP-080-R3); the mechanism is not established.
6. No Ref-not-found error, no timeout, no dialog, no banner, no unsaved-change indication, no session-warning strip occurred in T1.

## Acceptance checks (T1)

| AC | T1 status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders IDO checked out to the operator; 17-property inventory and baseline Label String ID and Read Only of the four targets recorded | **SUPPORTED (observed; UI and accessibility level).** Sources reviewed (above, with the partial reads stated). Session usable. IDOs Form closed once and reopened once (fresh). One criterion typed, Tab-committed, captured before F4 (`t1-01`); one F4 returned exactly one FX_Orders row, checked out to the operator (Check In and Undo Check Out enabled). 17 rows read (`t1-02`, `t1-03`, S6). Baselines: `t1-05` (FX_CusName), `t1-06` (FX_ItmsDescription), `t1-07` (FX_CusAddress), `t1-04` (FX_DerOrderTotal and the route). | `t1-01` (pre-F4 criterion), `t1-02` (baseline grid rows, identity header), `t1-04` to `t1-07` (baselines) | Same session only. The Tables view was read from the accessibility tree (no dedicated screenshot). Checkout state is the displayed control state (not a database read). Rows 9–17 of the IDOs grid are shown only in the accessibility readback (the viewport shows rows 1–8). |
| **AC-2** One edit route identified and recorded (in-form grid columns or the Properties button Form) before any edit | **SUPPORTED (observed).** Route recorded: the IDO Properties Form (blue `Properties` button); reasons: the in-form grid has no Label String ID column; the Properties Form detail panel shows Label String ID and Read Only. No edit was made. | `t1-03` (in-form grid scrolled right), `t1-04` (route screenshot) | The IDO Properties grid's Label String ID values for rows 3–17 were read from the detail panel, not from the grid. The route is not yet exercised for an edit. |
| AC-3 Label String IDs set by keystrokes and Tab; Read Only ticked on FX_DerOrderTotal; each readback verified; nothing else changed | **NOT STARTED** (T1 stops before any edit, by the bounded instruction). | — | — |
| AC-4 One toolbar Save with its native response; Save disabled afterwards; the five values shown | **NOT STARTED.** Save disabled (clean) at the T1 end. | — | — |
| AC-5 Clean IDOs Form closed once more and reopened once more; one visible-criterion query recovers the five changes | **NOT STARTED.** | — | — |
| AC-6 Final EXP-081 report (decisive evidence; full audit; baseline and recovered values; file inventory; final state) | **NOT STARTED** (the final report follows AC-5). T1 provides the baseline, the route and the T1 audit below. | — | — |

## Action audit (T1; exact counts; cumulative for EXP-081 T1)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list / select | **1 / 1** | List before the first select; select tab 1 only. Tab 0 (Designer) never selected, clicked, snapshotted or captured. |
| Untargeted snapshots (explicit `browser_snapshot`) | **7** | S1 start; S2 after IDOs close; S3 Select Form dialog; S4 after OK; S5 after F4; S6 Properties sub-tab (inventory); S7 IDO Properties Form. |
| Targeted snapshots | **0** | |
| `browser_find` (read-only) | **2** | `Open` (Form menu item); `Save` (final disabled check). |
| Ref-based element clicks (successful / failed) | **10 / 0** | (1) Close Panel IDOs; (2) Form menu; (3) Form > Open; (4) IDOs / IdoCollections row; (5) Select Form OK; (6) in-form Properties sub-tab (view); (7) blue Properties button (route; read); (8) row FX_CusName (name cell; row navigation); (9) row FX_ItmsDescription (row navigation); (10) row FX_CusAddress (row navigation). |
| Coordinate mouse clicks | **1** | Grid horizontal scroll arrow, right, at (1808, 827) (view only). |
| `browser_type` | **1** | IDO Name `FX_Orders` (keystrokes; `slowly` true). |
| Key presses | **2** | Tab 1 (IDO Name commit); F4 1 (target query). Enter 0; Escape 0. |
| Waits | **1** | 3 s after F4. |
| Mouse moves / wheel | **0 / 0** | |
| Screenshots | **7** | `t1-01` to `t1-07` (see Evidence). |
| Target F4 queries (FX_Orders) | **1** (of 2 allowed) | The extra query was not needed (no session-warning case). |
| IDOs Form close / reopen (pairs) | **1 / 1** (one fresh-Form pair) | The recovery pair (T-recovery) is still to come: 0 of 1. |
| Select Form dialogs answered | **1** (OK) | |
| IDO Properties Form opened (Properties button) | **1** | Read route only. Not closed (clean). |
| Row navigation selections (name cells; not edits) | **3** | FX_CusName, FX_ItmsDescription, FX_CusAddress. FX_DerOrderTotal was already the current row. |
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** | |
| Label String ID entries | **0** | None (T1 stops before edits). |
| Read Only ticks | **0** | None. |
| Property / IDO / table / class / SQL changes | **0** | |
| Strings created | **0** | |
| Save (toolbar) | **0** | Save disabled at the T1 end (`find` "Save"). |
| Designer actions | **0** | Tab 0 not selected, clicked or captured. |
| Unloads, cache, FormSync, deployment, regeneration | **0** | |
| Re-login (session-expiry procedure) | **0** | Session usable throughout. |
| Portal navigation / sign-in / app open / banner dismissal | **0 / 0 / 0 / 0** | |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | The wrapper's generated Playwright code is tool output. |
| Ref-not-found errors / timeouts / native dialogs | **0 / 0 / 0** | Fresh-snapshot recovery allowance used: **0**. |

## Worker-written-file inventory (T1)

- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (created; this record).
- `evidence/EXP-081/t1-01-pre-f4-idos-fx-orders-criterion.png` (created; the directory was created by the first screenshot write).
- `evidence/EXP-081/t1-02-baseline-properties-grid-17-rows-top.png` (created).
- `evidence/EXP-081/t1-03-route-check-properties-grid-scrolled-right.png` (created).
- `evidence/EXP-081/t1-04-route-properties-button-form-idoproperties-detail.png` (created).
- `evidence/EXP-081/t1-05-baseline-FX_CusName-detail-label-and-read-only.png` (created).
- `evidence/EXP-081/t1-06-baseline-FX_ItmsDescription-detail-label-and-read-only.png` (created).
- `evidence/EXP-081/t1-07-baseline-FX_CusAddress-detail-label-and-read-only.png` (created).

Tool-written, not worker-authored: Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-54-38-561Z.yml`, `page-2026-10-13T17-55-50-401Z.yml`, `console-2026-10-13T17-54-30-855Z.log`). They were read only as tool readbacks and are outside the EXP-081 path (known confinement limitation; the operator's git review is authoritative).

No other repository file was written, edited or deleted in T1.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t1-01-pre-f4-idos-fx-orders-criterion.png` | IDOs tab; IDO Name `FX_Orders`; echo row `FX_Orders`; status bar `Filter in Place`; Save greyed; Check Out button in the FiP view; identity bar operator account and `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; focus on Extends after the Tab | **AC-1** pre-F4 criterion and the Filter-in-Place state before the one query | That F4 returned the row (see S5 readback and `t1-02`) |
| `t1-02-baseline-properties-grid-17-rows-top.png` | IDOs tab after F4; one row `FX_Orders` checked; Revision Num 2; Revision Date 10/13/2026; Project FX_HelloWorldProject01; Check In and Undo Check Out enabled; Properties sub-tab rows 1–8 (FX_DerOrderTotal Derived FX_Cost Decimal 18 decimal; FX_OrderNumber; FX_CusName String 100 nvarchar, Read Only checked; FX_CustomerID; FX_ItmsDescription String 150 nvarchar, Read Only checked; FX_Item; FX_ItmsCost Decimal 18 decimal, Read Only checked; FX_Count); status `P&roperties` | **AC-1** identity, checkout state, rows 1–8 of the 17-row inventory | Rows 9–17 (accessibility readback S6 only); the Tables view (S5 readback only) |
| `t1-03-route-check-properties-grid-scrolled-right.png` | Same IDOs grid after one right-arrow click; columns now from Property Name (partly clipped) through Pseudo Key; status `(Properties 1 of 17)`; no Label String ID column visible | **AC-2** route check: the in-form grid's visible columns (Read Only and Required and Pseudo Key) show no Label String ID column | That Read Only Record is absent (it is off-screen; the accessibility header lists it last and no Label String ID header exists in the 15 headers) |
| `t1-04-route-properties-button-form-idoproperties-detail.png` | Second tab `IDO Properties` selected (next to `IDOs`); left grid of 17 property names with row 1 current; detail for FX_DerOrderTotal: Property Type Derived; Property Class FX_Cost; Sequence 0; Data Decimal 18 decimal 2; Column Data Type decimal; Formatting group: **Label String ID `FX_sCost`**; **Read Only unchecked**; Read Only Record, Required and Validate Immediately unchecked; status `(Properties 1 of 17)`; Save greyed | **AC-2** the route (Properties button Form) with its Label String ID and Read Only controls, and the FX_DerOrderTotal baseline (Label String ID `FX_sCost`; Read Only unchecked) | The stored value of the Label String ID (displayed; source unresolved); any edit |
| `t1-05-baseline-FX_CusName-detail-label-and-read-only.png` | Row 3 current (`Properties 3 of 17`); FX_CusName: Bound to Column, Column Table Alias fxcus (FX_HelloWorld01), Column Name FX_Label, Sequence 2; String 100 nvarchar; **Label String ID blank**; **Read Only checked** | **AC-1** baseline of FX_CusName (LSID blank; Read Only yes) | Its stored state beyond the displayed values |
| `t1-06-baseline-FX_ItmsDescription-detail-label-and-read-only.png` | Row 5 current (`Properties 5 of 17`); FX_ItmsDescription: Column Table Alias fxitms (FX_Items), Column Name FX_Description, Sequence 2; String 150 nvarchar; **Label String ID blank**; **Read Only checked** | **AC-1** baseline of FX_ItmsDescription (LSID blank; Read Only yes) | Its stored state beyond the displayed values |
| `t1-07-baseline-FX_CusAddress-detail-label-and-read-only.png` | Row 14 current (`Properties 14 of 17`); FX_CusAddress: Column Table Alias fxcus (FX_HelloWorld01), Column Name FX_Address, Sequence 10; String 150 nvarchar; **Label String ID blank**; **Read Only checked** | **AC-1** baseline of FX_CusAddress (LSID blank; Read Only yes) | Its stored state beyond the displayed values; that FX_sAddress exists (EXP-076 status, not re-read) |

## Knowledge state (per finding)

| Finding | State |
|---|---|
| Closing a clean IDOs Form through its Form-tab control and reopening it through Form > Open > Select Form (`IDOs / IdoCollections`) opened it in Filter in Place | **observed** (one run; consistent with EXP-078 and EXP-079) |
| One visible-criterion F4 for `FX_Orders` returned one row, checked out to the operator, with the three Tables entries | **observed** (one run; UI level) |
| The in-form IDOs Properties grid has no Label String ID column (15 headers; Read Only is a checkbox column) | **observed** (one run; accessibility and screenshot) |
| The blue `Properties` button opens a second Form tab `IDO Properties` (`favoriteContext=IdoProperties`) with a 17-row grid and a detail panel holding Label String ID and Read Only | **observed** (one run; UI level) |
| Baseline Label String ID blank on FX_CusAddress, FX_CusName and FX_ItmsDescription; FX_DerOrderTotal displays `FX_sCost` | **observed** (one run; UI level) |
| Baseline Read Only: checked on FX_CusAddress, FX_CusName and FX_ItmsDescription; unchecked on FX_DerOrderTotal | **observed** (one run; UI level) |
| FX_DerOrderTotal's `FX_sCost` is the stored override or the class-inherited label | **unresolved** |
| Label String IDs typed for strings that do not yet exist (FX_sOrderTotal, FX_sCustomerName, FX_sItemDescription) are accepted without a prompt | **unresolved** for this experiment (EXP-070 T2 and EXP-071-R2 D6 show a typed label accepted as typed; not re-tested here) |
| Replay or database durability | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blocker in T1.** The baseline and the route are complete. T1 stopped before any edit, as the bounded instruction requires.
2. **Scope of the T1 instruction:** the full EXP-081 brief (edits, one Save, the recovery pair) is not authorized by this T1 instruction. The next task must be authorized separately.
3. **The FX_DerOrderTotal `FX_sCost` source** (stored versus class-inherited) is unresolved; the edit task should record it before typing over it.
4. **Strings:** FX_sAddress is recorded as existing (EXP-076 status; not re-read in Strings in this task). FX_sOrderTotal, FX_sCustomerName and FX_sItemDescription are expected not to exist; the edit task must follow the stop rule if a create offer appears.
5. **Designer tab (tab 0)** was not inspected and is left as found.
6. **Left open:** the `IDO Properties` Form (clean; target row 14 current) and the `IDOs` Form behind it (clean; FX_Orders checked out to the operator). Both are clean; no dialog is open.

## Next permitted action (superseded by the T2 section; kept for the T1 record)

Edit task (requires separate authorization): on the open IDO Properties Form, for each target in order, select its row in the left Property Name grid, click the Label String ID combobox, replace the existing text (for FX_DerOrderTotal), type the string ID by keystrokes (`slowly` true), press Tab once, and verify the readback with no message or prompt; then tick Read Only on FX_DerOrderTotal and verify it; then one ordinary toolbar Save of the IDO Properties Form; then the recovery pair (close and reopen IDOs; one visible-criterion FX_Orders query). Values: FX_CusAddress → `FX_sAddress`; FX_DerOrderTotal → `FX_sOrderTotal`; FX_CusName → `FX_sCustomerName`; FX_ItmsDescription → `FX_sItemDescription`; Read Only on FX_DerOrderTotal.

Classification remains **observed only, NOT replay_verified**.

---

## T2 — five attribute changes applied in the IDO Properties Form; NOT SAVED (cycle 1; AC-3 observed pre-Save)

- Task T2, cycle 1, task_message_id `dce62721-f377-4c6d-ac6a-1ea332bb8f8f`, worker session `67b6c280-9a13-48bd-88ff-0b393b3fe095`, run `R-20261014-015408-hxgu`. Date 2026-10-14.
- Scope (bounded instruction): confirm the T1 state (IDO Properties Form open and clean with FX_CusAddress current; parent IDOs Form with one FX_Orders checked out to the operator); session check; Label String ID entries in the order FX_CusAddress → FX_sAddress, FX_DerOrderTotal → FX_sOrderTotal, FX_CusName → FX_sCustomerName, FX_ItmsDescription → FX_sItemDescription, each by keystrokes (`slowly` true) and one Tab; then one Read Only tick on FX_DerOrderTotal. **No Save, no recovery close/reopen, no string creation, no checkout action.**
- Sources: the T1 record and its screenshots (`t1-01` to `t1-07`); the T1 baseline values were re-read before editing.

### Gate (before the first edit)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose (`favoriteContext=IdoProperties`) | — |
| Snapshot taken while tab 0 was current (**deviation**) | The first untargeted snapshot ran while the Designer tab was the current tab. It was a read-only observation: no click, type, key or screenshot on tab 0. The Designer shows the FX_HelloWorld01 Form (footer `ScopeType: User`; Save and Undo disabled). Not acted on. | snapshot (tool) |
| Tab 1 select | Succeeded after the list | — |
| IDO Properties Form | Tab selected and clean (Save disabled); status `Property Name (Properties 14 of 17)`; row 14 FX_CusAddress current; Property Type Bound to Column; Column Table Alias `fxcus`; Column Name `FX_Address`; Sequence 10; Data String 150 nvarchar; **Label String ID blank; Read Only checked** | `t2-01` |
| Session | No "Session Expired" modal, no sign-in page, no portal banner, no "Your session is about to expire" strip in any T2 screenshot. Re-login count 0. | `t2-01` to `t2-12` |
| Parent IDOs Form | One row `FX_Orders`, row checkbox checked; Revision Num 2; Revision Date 10/13/2026; Locked By the operator account; **Check In and Undo Check Out enabled** (still checked out to the operator); status `&Properties (IDOs 1 of 1)`; Save disabled (clean) | `t2-02` (viewed by clicking the IDOs tab heading, then the IDO Properties tab heading was clicked back) |
| Identity before the first edit | IDO Properties row 14 Property Name `FX_CusAddress`; IDO Name `FX_Orders` | `t2-03` |
| Gate verdict | **Passed**: one FX_Orders checked out to the operator; the five target baselines equal the T1 values; no session expiry; Save disabled; no dialog | — |

### Edit route (used for every edit; the T1 AC-2 route)

- **IDO Properties Form** (opened by the IDOs Form's blue `Properties` button in T1; not the in-form IDOs grid, which has no Label String ID column). Row chosen by one click on its Property Name cell in the left grid; the Label String ID combobox and the Read Only checkbox are in the detail panel's Formatting group.

### Entries (keystrokes; one Tab each; readback after each)

| # | Row (Property Name) | Before (T1 baseline; detail readback) | Action | Readback after Tab | Prompt or message | Evidence |
|---|---|---|---|---|---|---|
| 1 | 14 FX_CusAddress | blank | Click the Label String ID field; `browser_type` `FX_sAddress` (slowly); Tab once | `FX_sAddress`; row 14 shows the unsaved marker; focus moved to Input Mask (not edited) | **none** | `t2-03` (before), `t2-04` (after) |
| 2 | 1 FX_DerOrderTotal | `FX_sCost` (displayed) | Click the field; **Control+a** (select the existing text); `browser_type` `FX_sOrderTotal` (slowly); Tab once | `FX_sOrderTotal` (the old text fully replaced); rows 1 and 14 marked | **none** (no create offer for the missing string) | `t2-05` (before), `t2-06` (after) |
| 3 | 3 FX_CusName | blank | Click the field; `browser_type` `FX_sCustomerName` (slowly); Tab once | `FX_sCustomerName`; rows 1, 3, 14 marked | **none** (no create offer) | `t2-07` (before), `t2-08` (after) |
| 4 | 5 FX_ItmsDescription | blank | Click the field; `browser_type` `FX_sItemDescription` (slowly); Tab once | `FX_sItemDescription`; rows 1, 3, 5, 14 marked | **none** (no create offer) | `t2-09` (before), `t2-10` (after) |
| 5 | 1 FX_DerOrderTotal | Read Only unchecked (Formatting group) | Ticked once through the visible label text (see the deviation below) | Read Only **checked**; Label String ID still `FX_sOrderTotal` | none | `t2-11` (before), `t2-12` (after) |

### Deviation: Read Only checkbox click timed out (recovery rule applied)

- The first attempt on the Read Only checkbox ref (`f1e2621`) timed out at "visible, enabled and stable": "`<span data-ref="displayEl">` intercepts pointer events" on the checkbox's input (the same signature as EXP-076 T3 and EXP-080 T2). **The click did not run** (no state change).
- Recovery: one fresh untargeted snapshot (its tree was too large to inline; it was saved by the tool) and one read-only `browser_find` on `checkbox "Read Only"` confirmed the checkbox still unchecked (no `[checked]`) and gave the label ref. One corrected attempt: a click on the visible `Read Only` label text (ref `f1e1110`). This ticked the checkbox (`t2-12`). **Read Only was therefore toggled once in effect**; the timed-out attempt had no effect.
- Ref note: the Grep read of the harness-saved snapshot file was denied by the permission system (no browser effect; not counted as a browser action).

### Pre-Save verification (AC-3)

Verified by screenshots (`t2-04`, `t2-06`, `t2-08`, `t2-10`, `t2-12`) and by read-only grid readbacks (`browser_find`, no clicks) after all five changes:

| Target property | Label String ID (pre-Save readback) | Read Only (pre-Save readback) | Other fields in the readback |
|---|---|---|---|
| FX_CusAddress (row 14) | `FX_sAddress` | checked (unchanged) | String; Length 150; nvarchar; Sequence 10; Column FX_Address; fxcus |
| FX_DerOrderTotal (row 1) | `FX_sOrderTotal` | **checked** (changed from unchecked) | Derived; FX_Cost; Decimal 18 (2); decimal; expression `FX_Count * FX_ItmsCost`; Sequence 0 |
| FX_CusName (row 3) | `FX_sCustomerName` | checked (unchanged) | String; Length 100; nvarchar; Sequence 2; Column FX_Label; fxcus |
| FX_ItmsDescription (row 5) | `FX_sItemDescription` | checked (unchanged) | String; Length 150; nvarchar; Sequence 2; Column FX_Description; fxitms |

- Save state at the end of T2: **enabled** (`find` "Save" reports an enabled toolbar Save; the screenshots show the save icon active and unsaved markers on rows 1, 3, 5 and 14). **Not invoked.**
- Other fields and rows: not edited. The non-target readbacks in the grid (for example FX_OrderNumber `FX_sOrderNumber`; FX_ItmsCost class `FX_Cost`; FX_CustomerID class label) were read but not changed. Whether every other field is byte-identical to T1 is observed at the UI level only; the recovery task will re-verify after the Save.

### Stop-rule status

- **Not triggered.** No message, prompt or create offer appeared for any of the three missing strings (FX_sOrderTotal, FX_sCustomerName, FX_sItemDescription) on Tab. No unexpected message appeared before the Save. Nothing was discarded and no Form was closed.
- Limitation: the create behaviour (if any) may only appear at Save or on a different control; this T2 does not establish it.

### Result and state after T2

- The IDO Properties Form is **open and dirty** with the five verified changes (pre-Save). Save enabled. No dialog open.
- The IDOs Form (parent) is open and clean; FX_Orders is checked out to the operator (Check In and Undo Check Out enabled; Revision 2).
- The Designer tab (tab 0) was not acted on (one read-only snapshot, see the gate).
- **Not done in T2 (by design):** the single toolbar Save; the native response; the Save state afterwards; the recovery pair (IDOs close and reopen); the fresh visible-criterion query; the post-Save inventory and the recovered-value check. The Save and recovery require their own authorization.

### Browser action audit — T2 only (exact counts)

| Operation | T2 |
|---|---|
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| Label String ID entries (keystrokes + Tab) | **4** |
| Read Only ticks (effective) | **1** |
| Read Only click attempts that did not run (timeout; overlay) | **1** |
| Toolbar Save | **0** |
| IDOs close / reopen | **0 / 0** |
| Target F4 queries | **0** |
| Select Form dialogs | **0** |
| IDO Properties Form opened or closed | **0 / 0** (still open, dirty) |
| Strings created | **0** |
| Designer actions (interaction) | **0** |
| Designer read-only snapshot (inadvertent; tab 0 current when the first snapshot ran) | **1** |
| Unloads / cache / FormSync / deployment / regeneration | **0** |
| Re-login; portal navigation; sign-in | **0** |
| Browser JavaScript / evaluate / run-code / console / network / direct URL / refresh / restart | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **3 / 1** (untargeted: Designer read; gate; fresh recovery after the timeout; targeted: `f1e1` depth 0 read of the IDOs tree) |
| `browser_find` | **12** |
| Element clicks (successful / failed) | **11 / 1** (successful: IDOs tab heading (view); IDO Properties tab heading (view); FX_CusAddress Label String ID field; row 1; Label String ID field; row 3; Label String ID field; row 5; Label String ID field; row 1; Read Only label text. Failed: Read Only checkbox ref, timeout) |
| Coordinate clicks | **0** |
| `browser_type` (succeeded / refused) | **4 / 0** (the four Label String IDs, `slowly` true) |
| Key presses: Tab / Control+a / F4 / Enter / Escape | **4 / 1 / 0 / 0 / 0** |
| Waits / mouse moves / wheel | **0 / 0 / 0** |
| Screenshots | **12** (`t2-01` to `t2-12`) |
| Ref-not-found errors | **0** |
| Timeouts | **1** (the Read Only checkbox click; did not run) |
| Native dialogs | **0** |
| Fresh-snapshot recovery allowance used | **1** (after the timeout; of 1) |

### Cumulative browser action audit (T1 + T2; EXP-081)

| Operation | T1 | T2 | Cumulative |
|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| Label String ID entries | 0 | 4 | **4** |
| Read Only ticks (effective) | 0 | 1 | **1** |
| Read Only click attempts that did not run | 0 | 1 | **1** |
| Toolbar Save | 0 | 0 | **0** |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | **1 / 1** (fresh-Form pair; the recovery pair is still **0 of 1**) |
| Target F4 queries (FX_Orders) | 1 | 0 | **1** (of 2 permitted; one left for the recovery query) |
| Select Form dialogs answered (OK) | 1 | 0 | **1** |
| IDO Properties Form opened (Properties button) | 1 | 0 | **1** (open, dirty) |
| Strings created | 0 | 0 | **0** |
| Designer interactions | 0 | 0 | **0** |
| Designer read-only snapshot (inadvertent) | 0 | 1 | **1** |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** |
| Re-logins (session-expiry procedure) | 0 | 0 | **0** |
| Browser JavaScript / console / network / direct URL / refresh / restart | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | **2 / 2** |
| Snapshots, untargeted / targeted | 7 / 0 | 3 / 1 | **10 / 1** |
| `browser_find` | 2 | 12 | **14** |
| Element clicks (successful / failed) | 10 / 0 | 11 / 1 | **21 / 1** |
| Coordinate clicks | 1 | 0 | **1** |
| `browser_type` | 1 | 4 | **5** |
| Key presses: Tab / F4 / Control+a | 1 / 1 / 0 | 4 / 0 / 1 | **5 / 1 / 1** |
| Waits | 1 | 0 | **1** |
| Screenshots | 7 | 12 | **19** |
| Ref-not-found errors | 0 | 0 | **0** |
| Timeouts | 0 | 1 | **1** |
| Native dialogs | 0 | 0 | **0** |
| Fresh-snapshot recovery allowance used | 0 | 1 | **1** (of 1) |

### Worker-written-file inventory (T2)

- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (edited: status header; the T1 next-action heading renamed as superseded; this T2 section).
- `evidence/EXP-081/t2-01-pre-edit-gate-idoproperties-FX_CusAddress-clean.png` (created)
- `evidence/EXP-081/t2-02-parent-idos-form-fx-orders-checked-out-clean.png` (created)
- `evidence/EXP-081/t2-03-idoproperties-row14-FX_CusAddress-identity-before-edit.png` (created)
- `evidence/EXP-081/t2-04-after-entry1-FX_CusAddress-FX_sAddress-committed-readback.png` (created)
- `evidence/EXP-081/t2-05-entry2-before-edit-FX_DerOrderTotal-identity-FX_sCost-displayed.png` (created)
- `evidence/EXP-081/t2-06-after-entry2-FX_DerOrderTotal-FX_sOrderTotal-committed-readback.png` (created)
- `evidence/EXP-081/t2-07-entry3-before-edit-FX_CusName-identity-LSID-blank.png` (created)
- `evidence/EXP-081/t2-08-after-entry3-FX_CusName-FX_sCustomerName-committed-readback.png` (created)
- `evidence/EXP-081/t2-09-entry4-before-edit-FX_ItmsDescription-identity-LSID-blank.png` (created)
- `evidence/EXP-081/t2-10-after-entry4-FX_ItmsDescription-FX_sItemDescription-committed-readback.png` (created)
- `evidence/EXP-081/t2-11-entry5-before-tick-FX_DerOrderTotal-identity-ReadOnly-unchecked.png` (created)
- `evidence/EXP-081/t2-12-entry5-after-tick-FX_DerOrderTotal-ReadOnly-verify.png` (created)

Tool-written, not worker-authored: Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T18-00-34-427Z.yml`, `page-2026-10-13T18-02-26-646Z.yml`, `console-2026-10-13T18-00-17-854Z.log`), and one harness-persisted tool-result file for the oversized snapshot outside the repository (under the session's `.claude` tool-results folder; not read). These are outside the EXP-081 path (known confinement limitation; the operator's git review is authoritative).

No other repository file was written, edited or deleted in T2.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01-pre-edit-gate-idoproperties-FX_CusAddress-clean.png` | IDO Properties tab; row 14 FX_CusAddress current; status `Property Name (Properties 14 of 17)`; Label String ID blank; Read Only checked; Save greyed; no session strip | **AC-3** pre-edit baseline for FX_CusAddress; the clean state before the first edit | The parent checkout state (see `t2-02`) |
| `t2-02-parent-idos-form-fx-orders-checked-out-clean.png` | IDOs tab; one FX_Orders row, checked; Revision Num 2; Check In and Undo Check Out enabled; Save greyed; status `&Properties (IDOs 1 of 1)` | Parent identity and checkout to the operator before the edits; the IDOs Form is clean | The stored state (UI only) |
| `t2-03-idoproperties-row14-FX_CusAddress-identity-before-edit.png` | Row 14 current; Property Name FX_CusAddress; Label String ID blank; Read Only checked | Identity of the row before entry 1 | — |
| `t2-04-after-entry1-FX_CusAddress-FX_sAddress-committed-readback.png` | Label String ID `FX_sAddress`; row 14 unsaved marker; Save enabled; focus moved to Input Mask after the Tab; no prompt | **AC-3** entry 1 readback; no message | Whether `FX_sAddress` exists (EXP-076 status says it does; not re-read) |
| `t2-05-entry2-before-edit-FX_DerOrderTotal-identity-FX_sCost-displayed.png` | Row 1 current (Derived; FX_Cost; Decimal 18 (2)); Label String ID `FX_sCost`; Read Only unchecked; row 14 unsaved | The pre-entry-2 identity and value | — |
| `t2-06-after-entry2-FX_DerOrderTotal-FX_sOrderTotal-committed-readback.png` | Label String ID `FX_sOrderTotal`; rows 1 and 14 marked; no create offer, prompt or message | **AC-3** entry 2 readback; the missing string produced no create offer on Tab | Whether a create offer would appear at Save; whether the string exists |
| `t2-07-entry3-before-edit-FX_CusName-identity-LSID-blank.png` | Row 3 current (String 100 nvarchar; FX_Label); Label String ID blank; Read Only checked | Identity before entry 3 | — |
| `t2-08-after-entry3-FX_CusName-FX_sCustomerName-committed-readback.png` | Label String ID `FX_sCustomerName`; rows 1, 3, 14 marked; no prompt | **AC-3** entry 3 readback | As above |
| `t2-09-entry4-before-edit-FX_ItmsDescription-identity-LSID-blank.png` | Row 5 current (String 150 nvarchar; FX_Description; fxitms); Label String ID blank; Read Only checked | Identity before entry 4 | — |
| `t2-10-after-entry4-FX_ItmsDescription-FX_sItemDescription-committed-readback.png` | Label String ID `FX_sItemDescription`; rows 1, 3, 5, 14 marked; no prompt | **AC-3** entry 4 readback | As above |
| `t2-11-entry5-before-tick-FX_DerOrderTotal-identity-ReadOnly-unchecked.png` | Row 1 current; Label String ID `FX_sOrderTotal`; Read Only unchecked | Identity and the unchecked state before the tick | — |
| `t2-12-entry5-after-tick-FX_DerOrderTotal-ReadOnly-verify.png` | Row 1; Read Only checked (Formatting group); Label String ID `FX_sOrderTotal`; unsaved markers on rows 1, 3, 5, 14; status `Read Only (Properties 1 of 17)` | **AC-3** Read Only tick verified pre-Save | The stored value (not saved) |

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed in T2 (IDO Properties identity and clean state; parent FX_Orders checked out; baseline values of the five targets equal the T1 values) | `t2-01`, `t2-02`, `t2-03` (plus T1 `t1-01` to `t1-07`) | Same session; checkout is the displayed control state |
| AC-2 | Re-used: the route chosen in T1 (IDO Properties Form) was the only route used | `t1-04` (route), `t2-03` (identity before the first edit) | — |
| AC-3 | **SUPPORTED pre-Save (observed).** Four Label String IDs typed by keystrokes and committed by one Tab each, readback verified with no message or prompt; Read Only ticked on FX_DerOrderTotal; nothing else edited | `t2-04`, `t2-06`, `t2-08`, `t2-10`, `t2-12` (and the grid readbacks above) | Pre-Save only (not saved); no database read; the Read Only tick needed one corrected click (the first click did not run) |
| AC-4 | **NOT STARTED** (no Save in T2 by design) | — | — |
| AC-5 | **NOT STARTED** (recovery pair is later) | — | — |
| AC-6 | **NOT STARTED** (final report follows AC-5) | — | — |

### Knowledge state (T2)

| Finding | State |
|---|---|
| Typing a Label String ID for a string not yet created (FX_sOrderTotal, FX_sCustomerName, FX_sItemDescription) and committing it with Tab produced no create offer and no message on the IDO Properties Form | **observed** (one run; pre-Save) |
| Control+a followed by slow keystrokes replaces an existing Label String ID (`FX_sCost` → `FX_sOrderTotal`) with no leftover text | **observed** (one run) |
| The Read Only checkbox's input can be intercepted by an overlay span (click times out and does not run); the visible label text click ticks it | **observed** (one run; same signature as EXP-076 T3 and EXP-080 T2) |
| Overriding the Label String ID of the Derived property changes its displayed value from the class-inherited `FX_sCost` to `FX_sOrderTotal` | **observed** (one run; displayed value) |
| Whether `FX_sCost` was stored on FX_DerOrderTotal or inherited from class FX_Cost | **unresolved** (not established by the readback) |
| Whether the three missing strings create or fail at Save | **unresolved** (the Save is not performed) |
| The stored values after Save and recovery | **not performed** |
| Replay or database durability | **not claimed** (not replay_verified) |

### Open questions and blockers (T2)

1. **No blocker.** The five changes are applied and verified pre-Save, and the stop rule was not triggered.
2. **Next permitted action (requires separate authorization):** one ordinary toolbar Save of the IDO Properties Form (record the native response, the Save state, and the five values afterwards); then the recovery pair (close the clean IDOs Form once; reopen through Form > Open > Select Form once; one visible-criterion FX_Orders query, which is the second and last allowed target query). Before the Save, the operator should confirm the expected behaviour for the three missing strings, since no create offer appeared on Tab.
3. The FX_DerOrderTotal Label String ID source (stored or inherited) is still unresolved.
4. The Designer tab (tab 0) was not inspected beyond the one inadvertent read-only snapshot; its FX_HelloWorld01 state is left for the coordinator.
5. Classification remains **observed only, NOT replay_verified**.

---

## T3 — one ordinary toolbar Save; post-Save readbacks; NO recovery (cycle 2; AC-4 observed; AC-5 not started)

- Task T3, cycle 2, task_message_id `0f97bdf5-1329-4309-9ef8-ba9b41b74038`, worker session `67b6c280-9a13-48bd-88ff-0b393b3fe095`, run `R-20261014-015408-hxgu`. Date 2026-10-14.
- Scope (bounded instruction): confirm the tab and the dirty pre-Save state; check for a modal or session-expiry condition; invoke the toolbar Save **exactly once**; record the native response; verify Save disabled; revisit the four target rows read-only; verify the parent checkout. **No property edit, no string creation, no IDOs close/reopen, no recovery query, no checkout action, no Designer action.**

### Gate (before the Save; read-only)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose (`favoriteContext=IdoProperties`) | — |
| Tab 1 select | Succeeded after the list. Tab 0 (Designer) not selected, clicked or captured. | — |
| Tab and Form identity | Web Client (tab 1, `IdoProperties`); IDO Properties Form tab selected (IDOs tab behind it); IDO Name `FX_Orders`; status `Read Only (Properties 1 of 17)` | `t3-01` |
| Current row | Row 1 FX_DerOrderTotal (Property Type Derived; Property Class FX_Cost; Sequence 0) | `t3-01` |
| Label String ID (FX_DerOrderTotal) | `FX_sOrderTotal` (combobox readback) | `t3-01`, `find` |
| Read Only (FX_DerOrderTotal) | **checked** (Formatting group) | `t3-01` |
| Other target values, pre-Save (grid readback, read-only) | FX_CusName `FX_sCustomerName`; FX_ItmsDescription `FX_sItemDescription`; FX_CusAddress `FX_sAddress`; each with the unsaved marker | `find` (grid cells) |
| Unsaved markers | Rows 1, 3, 5 and 14 | `t3-01` |
| Save | **enabled** | `find` "Save"; `t3-01` |
| Modal / session condition | No "Session Expired" modal; no "Your session is about to expire" strip; no sign-in page; no portal banner; `find` "Session" no match; `find` "dialog" no match after the Save | `t3-01`, `t3-02` |
| Gate verdict | **Passed**: the five verified pre-Save changes are present; no unexpected modal or session condition; one Save may proceed | — |

### The single toolbar Save (AC-4)

| Item | Observed |
|---|---|
| Invocation | One click on the toolbar `Save` button (`find` ref of the enabled button). **Invoked exactly once.** Not retried. |
| Immediate response | The click returned without an error or timeout. **No visible native response**: no success message, banner, validation text, prompt, dialog or error. The only transient UI was the hover tooltip `Save` (the pointer was over the button). |
| Save state after | **Disabled** (`find`: `button "Save" [disabled]`; the toolbar icon is greyed in `t3-02`) |
| Unsaved markers after | **Cleared** on rows 1, 3, 5 and 14 (`t3-02` shows no diamond markers on the rows) |
| Dialog after | `find` "dialog": no match |

### Post-Save readbacks (read-only; rows revisited by row selection, no field edited)

| Target | Label String ID after Save | Read Only after Save | Evidence |
|---|---|---|---|
| FX_CusAddress (row 14) | `FX_sAddress` | checked | `t3-05` |
| FX_DerOrderTotal (row 1) | `FX_sOrderTotal` | **checked** | `t3-06` |
| FX_CusName (row 3) | `FX_sCustomerName` | checked | `t3-03` |
| FX_ItmsDescription (row 5) | `FX_sItemDescription` | checked | `t3-04` |

- All four Label String IDs match the T2 pre-Save values exactly. The Read Only values of the other three targets are unchanged (checked in T1 and T2).
- Row 1 detail after Save (`t3-06`): Derived; FX_Cost; Sequence 0; Decimal 18 (2); Column Data Type `decimal`; Default Value `0`; Read Only checked; Required unchecked; Read Only Record unchecked; Status `Property Name (Properties 1 of 17)` (the status text reads `Read Only` in the gate; both show 17 properties).
- Post-Save grid readback (`find`, read-only): the Properties grid still lists the 17 property rows; the Label String ID and Read Only cells for the four target rows agree with the detail panels.

### Parent checkout state after Save (read-only; the IDOs tab was made current by a view-only tab click)

| Item | Observed | Evidence |
|---|---|---|
| Rows | One FX_Orders row, row checkbox checked | `t3-07` |
| Checkout | **Check In and Undo Check Out enabled** (still checked out to the operator); Locked By the operator account | `t3-07` |
| Revision | Num 2; Revision Date 10/13/2026 (unchanged from T1 and T2) | `t3-07` |
| Parent toolbar Save | disabled (the Save greyed in `t3-07`) | `t3-07` |
| Properties grid (parent, read-only) | Read Only column checked on rows 1 (FX_DerOrderTotal), 3 (FX_CusName), 5 (FX_ItmsDescription) and 7 (FX_ItmsCost); the status bar reads `&Properties (IDOs 1 of 1)` | `t3-07` |

### Stop-rule status

- **Not triggered.** The Save returned with no message, prompt or error. Nothing was discarded, closed or retried. No create offer appeared at Save.

### Result and state after T3

- The IDO Properties Form is **open and clean** (toolbar Save disabled; no unsaved markers) with the four Label String IDs and the FX_DerOrderTotal Read Only tick as displayed after the Save. The IDOs tab is the active tab in the Form pair; the IDO Properties tab remains open behind it.
- FX_Orders is checked out to the operator (Revision 2).
- The Designer tab (tab 0) was not selected, clicked or captured in T3.
- **Not done in T3 (by instruction):** the recovery pair (close the clean IDOs Form once; reopen it once through Form > Open > Select Form) and the fresh visible-criterion FX_Orders query (AC-5); the final acceptance report (AC-6); any re-save.

### Limitations (T3)

1. **Save native response not observable.** The Save produced no visible message, so success is inferred from the disabled Save state and the cleared unsaved markers. Server-side completion is not visible in the UI. The recovery query (T4) is the first independent read after the Save.
2. **"Nothing else changed"** is verified only by the readbacks listed above and the grid rows visible in `t3-07` (rows 1–8 of the parent grid). The complete 17-row comparison, and the stored values, belong to the recovery task.
3. **Same session only.** Not a database read; not replay verified; no database durability is claimed.
4. The Revision Date `10/13/2026` on the 2026-10-14 session is unchanged from earlier experiments; the mechanism is not established.

### Action audit — T3 only (exact counts)

| Operation | T3 |
|---|---|
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| Label String ID entries | **0** (no property edit in T3) |
| Read Only ticks | **0** |
| **Toolbar Save** | **1** (invoked once; not retried) |
| IDOs close / reopen | **0 / 0** |
| Target F4 queries | **0** |
| Strings created | **0** |
| Designer actions (interaction) | **0** (tab 0 listed only) |
| Unloads / cache / FormSync / deployment / regeneration | **0** |
| Re-login; portal navigation; sign-in | **0** |
| Browser JavaScript / evaluate / run-code / console / network / direct URL / refresh / restart | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **0 / 0** (the gate and readbacks used `find`) |
| `browser_find` | **10** (gate: Save; Session; a regex for the four Label String IDs; post-Save: Save; dialog; FX_CusName; FX_ItmsDescription; FX_CusAddress; FX_DerOrderTotal; `Close Panel IDOs`) |
| Element clicks (successful / failed) | **6 / 0** (Save; row 3 name cell; row 5 name cell; row 14 name cell; row 1 name cell; IDOs tab heading view) |
| Coordinate clicks | **0** |
| `browser_type` | **0** |
| Key presses | **0** |
| Waits / mouse moves / wheel | **0 / 0 / 0** |
| Screenshots | **7** (`t3-01` to `t3-07`) |
| Ref-not-found errors / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used in T3 | **0** |

### Cumulative browser action audit (T1 + T2 + T3; EXP-081)

| Operation | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| Label String ID entries | 0 | 4 | 0 | **4** |
| Read Only ticks (effective) | 0 | 1 | 0 | **1** |
| Read Only click attempts that did not run | 0 | 1 | 0 | **1** |
| **Toolbar Save** | 0 | 0 | **1** | **1** |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** (fresh-Form pair); the recovery pair is still **0 of 1** |
| Target F4 queries (FX_Orders) | 1 | 0 | 0 | **1** (of 2 permitted; 1 left for the recovery query) |
| Select Form dialogs answered (OK) | 1 | 0 | 0 | **1** |
| IDO Properties Form opened (Properties button) | 1 | 0 | 0 | **1** (open, clean after the Save) |
| Strings created | 0 | 0 | 0 | **0** |
| Designer interactions | 0 | 0 | 0 | **0** |
| Designer read-only snapshot (inadvertent) | 0 | 1 | 0 | **1** |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | **0** |
| Re-logins (session-expiry procedure) | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network / direct URL / refresh / restart | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** |
| Snapshots, untargeted / targeted | 7 / 0 | 3 / 1 | 0 / 0 | **10 / 1** |
| `browser_find` | 2 | 12 | 10 | **24** |
| Element clicks (successful / failed) | 10 / 0 | 11 / 1 | 6 / 0 | **27 / 1** |
| Coordinate clicks | 1 | 0 | 0 | **1** |
| `browser_type` | 1 | 4 | 0 | **5** |
| Key presses: Tab / F4 / Control+a | 1 / 1 / 0 | 4 / 0 / 1 | 0 / 0 / 0 | **5 / 1 / 1** |
| Waits | 1 | 0 | 0 | **1** |
| Screenshots | 7 | 12 | 7 | **26** |
| Ref-not-found errors | 0 | 0 | 0 | **0** |
| Timeouts | 0 | 1 | 0 | **1** |
| Native dialogs | 0 | 0 | 0 | **0** |
| Fresh-snapshot recovery allowance used | 0 | 1 | 0 | **1** (of 1) |

### Worker-written-file inventory (T3)

- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (edited: status header; this T3 section).
- `evidence/EXP-081/t3-01-pre-save-gate-dirty-idoproperties-five-changes-no-modal.png` (created)
- `evidence/EXP-081/t3-02-save-immediate-response-after-single-save.png` (created)
- `evidence/EXP-081/t3-03-post-save-readback-row3-FX_CusName-sCustomerName-readonly.png` (created)
- `evidence/EXP-081/t3-04-post-save-readback-row5-FX_ItmsDescription-sItemDescription-readonly.png` (created)
- `evidence/EXP-081/t3-05-post-save-readback-row14-FX_CusAddress-sAddress-readonly.png` (created)
- `evidence/EXP-081/t3-06-post-save-readback-row1-FX_DerOrderTotal-sOrderTotal-readonly-checked.png` (created)
- `evidence/EXP-081/t3-07-post-save-parent-idos-form-fx-orders-checkout-state.png` (created)

Tool-written, not worker-authored: Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T18-06-53-340Z.yml`, `page-2026-10-13T18-07-33-369Z.yml`, `console-2026-10-13T18-06-40-468Z.log`). Outside the EXP-081 path (known confinement limitation; operator git review is authoritative).

No other repository file was written, edited or deleted in T3.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01-pre-save-gate-dirty-idoproperties-five-changes-no-modal.png` | Web Client; IDO Properties tab; row 1 FX_DerOrderTotal current (Derived; FX_Cost); Label String ID `FX_sOrderTotal`; Read Only checked; unsaved markers rows 1, 3, 5, 14; Save enabled; no session strip or modal; status `Read Only (Properties 1 of 17)` | The pre-Save state that was saved: the five changes present and no unexpected modal before the Save | That the Save persists (see `t3-02`, the recovery task) |
| `t3-02-save-immediate-response-after-single-save.png` | Same Form; toolbar Save greyed; unsaved markers gone; Read Only checked on row 1; FX_sOrderTotal shown; no message, prompt or dialog; tooltip `Save` (hover) | **AC-4**: the Save settled disabled with no visible native response | That the server committed the values (the UI shows no response; see Limitations) |
| `t3-03-post-save-readback-row3-FX_CusName-sCustomerName-readonly.png` | Row 3 current; Label String ID `FX_sCustomerName`; Read Only checked; Save greyed; no markers | Post-Save readback of FX_CusName | Stored state beyond the display |
| `t3-04-post-save-readback-row5-FX_ItmsDescription-sItemDescription-readonly.png` | Row 5 current; Label String ID `FX_sItemDescription`; Read Only checked; Save greyed | Post-Save readback of FX_ItmsDescription | As above |
| `t3-05-post-save-readback-row14-FX_CusAddress-sAddress-readonly.png` | Row 14 current; Label String ID `FX_sAddress`; Read Only checked; Save greyed | Post-Save readback of FX_CusAddress | As above |
| `t3-06-post-save-readback-row1-FX_DerOrderTotal-sOrderTotal-readonly-checked.png` | Row 1 current; Label String ID `FX_sOrderTotal`; Read Only checked; Save greyed; status `Property Name (Properties 1 of 17)` | **AC-3/AC-4**: the Read Only tick and the Label String ID on FX_DerOrderTotal after the Save | As above |
| `t3-07-post-save-parent-idos-form-fx-orders-checkout-state.png` | IDOs tab; one FX_Orders row checked; Check In and Undo Check Out enabled; Revision 2; Save greyed; parent grid Read Only ticks on rows 1, 3, 5, 7 | Checkout still with the operator after the Save; the parent is clean | Full 17-row comparison (only rows 1–8 are visible); the stored values |

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed in the T3 gate (tab identity; dirty pre-Save state; FX_Orders checkout state) | `t3-01`, `t3-07` (plus T1 and T2 records) | Same session |
| AC-2 | Re-used (T1 route); no new edit | T1 `t1-04`; T2 records | — |
| AC-3 | Verified pre-Save in T2; the post-Save readbacks of the same five values are recorded in T3 | `t3-03` to `t3-06` (post-Save); T2 pre-Save screenshots | Post-Save readback is the display, not a database read |
| **AC-4** | **SUPPORTED (observed).** Exactly one toolbar Save invoked; no visible native response; Save disabled afterwards; the five values shown post-Save (four Label String IDs and the Read Only tick) | `t3-02` (Save state and response), `t3-03` to `t3-06` (values) | No visible success message exists in the UI; completion is inferred from the disabled Save state and cleared markers |
| AC-5 | **NOT STARTED** (the recovery pair and the recovery query are the next task, by the T3 instruction) | — | — |
| AC-6 | **NOT STARTED** (the final report follows AC-5) | — | — |

### Knowledge state (T3)

| Finding | State |
|---|---|
| A single toolbar Save on the IDO Properties Form of an unsaved, five-change state returns with no visible native message, prompt or error; the Save then reads disabled and the row markers clear | **observed** (one run; UI level) |
| The four Label String IDs and the Read Only tick display unchanged after the Save | **observed** (one run; UI level) |
| FX_Orders stays checked out to the operator after the Save (Check In and Undo Check Out enabled; Revision 2) | **observed** (one run; UI level) |
| The Save persisted the values to the database | **not established** (the recovery query is the first independent read; not a database read) |
| Whether `FX_sCost` was stored or inherited on FX_DerOrderTotal | **unresolved** |
| Whether the three missing strings (FX_sOrderTotal, FX_sCustomerName, FX_sItemDescription) are created or rejected at a later step | **unresolved** (no create offer appeared at Tab or Save) |
| Replay or database durability | **not claimed** (not replay_verified) |

### Open questions and blockers (T3)

1. **No blocker.** The Save completed without a visible error; the stop rule did not apply.
2. **Next permitted action (requires separate authorization; not performed in T3):** close the clean IDOs Form once through its Form-tab control; reopen IDOs once through Form > Open > Select Form; run one fresh visible-criterion `FX_Orders` query (the second and last allowed target query, which reaches the recovery count of 2); verify the five values, the other properties unchanged, and the checkout state. Then the final report (AC-6).
3. The Save's server-side success is not visible. The recovery query is the first independent UI read after the Save.
4. The Designer tab (tab 0) was not inspected; it is left for the coordinator.
5. Classification remains **observed only, NOT replay_verified**.

---

## T4 — recovery pair (child and parent closed; IDOs reopened once); one visible-criterion query; recovered-state verification (cycle 3; AC-5 observed)

- Task T4, cycle 3, task_message_id `10921b12-83c4-4732-b0df-110e2a443ffd`, worker session `67b6c280-9a13-48bd-88ff-0b393b3fe095`, run `R-20261014-015408-hxgu`. Date 2026-10-14.
- Scope (bounded instruction): confirm the tab and both Forms are clean; close the clean child IDO Properties Form once (its Form-tab control); close the clean parent IDOs Form once (its Form-tab control); reopen IDOs once through Form > Open > Select Form (`IDOs / IdoCollections`); confirm Filter in Place; FX_Orders by keystrokes, Tab, pre-F4 capture, F4 once; confirm one checked-out row and the 17-property inventory; compare with the T1 baseline; reopen the IDO Properties Form once through the same Properties-button route for read-only inspection; verify the four Label String IDs and the Read Only tick; verify Save disabled and the parent checked out. **No edit, no Save, no string creation, no checkout action, no Designer action, no further recovery loop.**

### Gate (before any close; read-only except one view-only tab selection)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose (`favoriteContext=IdoCollections`) | — |
| Tab 1 select | Succeeded after the list. Tab 0 not selected, clicked or captured. | — |
| Fresh snapshot (untargeted) | Parent IDOs Form selected; toolbar Save **disabled**; FX_Orders one row checked; Check In and Undo Check Out enabled; Revision Num 2; Locked By the operator account; the child IDO Properties tab present behind it; Properties grid (parent) shows FX_DerOrderTotal Read Only checked; no modal, session strip, sign-in page or banner | snapshot (tool) |
| Child IDO Properties Form | Selected (tab heading click, view only); Save **disabled**; no unsaved markers; status `Property Name (Properties 1 of 17)`; FX_DerOrderTotal current; Label String ID `FX_sOrderTotal`; Read Only checked | `t4-01` |

### Closes and reopen (the recovery pair)

| # | Action | Native response | Evidence |
|---|---|---|---|
| 1 | Child IDO Properties: `Close Panel IDO Properties` (its own Form-tab control), once | No prompt; no dialog; the IDOs tab became the only Form tab | snapshot (tool) |
| 2 | Parent IDOs: `Close Panel IDOs` (its Form-tab control), once, after a fresh untargeted snapshot showing Save disabled | **No prompt; no dialog**; Form area empty; toolbar Save and FiP disabled | snapshot (tool) |
| 3 | Form menu → `Open` → Select Form: filter `IdoCollections`; row `IDOs / IdoCollections` (not `G6RIdoCollectionSearch`); OK, once | IDOs reopened (`favoriteContext=IdoCollections`) | snapshot (tool) |
| 4 | Status-bar check before the criterion | **`Filter in Place`**; IDO Name criterion active and blank | `t4-02` |

Recovered-form counts: IDOs close **1** and reopen **1** (the recovery pair); the IDO Properties Form was closed once (clean) and is reopened once in step 9 below.

### Target query (the second and last authorized target query)

- `FX_Orders` typed once into IDO Name (keystrokes, `slowly` true); one Tab commit; pre-F4 capture `t4-03` (IDO Name `FX_Orders`; echo row; status `Filter in Place`; Save greyed).
- F4 pressed **once**; wait 3 s; readback: status `Description (IDOs 1 of 1)`; **one row** `FX_Orders`, row checkbox checked; Revision Num 2; Revision Date 10/13/2026; Project `FX_HelloWorldProject01`; Locked By the operator account; Access As `G6R`; Label String ID `oFX_Orders`; Caption `oFX_Orders`; **Check In and Undo Check Out enabled** (checked out to the operator); Save disabled; Tables: `FX_HelloWorld01 / fxcus / Secondary / Left Outer / fxcus.[FX_Code] = fxords.[FX_CustomerID]`; `FX_Items / fxitms / Secondary / Left Outer / fxitms.[FX_Item] = fxords.[FX_Item]`; `FX_Orders / fxords / Primary Base / Inner` (the Tables view was read, not edited).
- Evidence: `t4-04` (identity, checkout and Tables after the single F4).

### Recovered 17-property inventory versus the T1 baseline (Properties sub-tab; accessibility readback; rows 1–8 also visible in `t4-05`)

Columns: Seq / Class / Property Type / Column / Data Type / Length / Column Type / Read Only / Required / Pseudo Key / Read Only Record. The T1 values are from the T1 record; the T4 values are from this recovered readback.

| # | Property | T1 baseline (Seq; Class; Type; Column; Type/Len/ColType; RO; Req; ROR) | Recovered T4 (same fields; RO; Req; ROR) | Match? |
|---|---|---|---|---|
| 1 | FX_DerOrderTotal | 0; FX_Cost; Derived; (blank); Decimal/18/decimal; **no**; no; no | 0; FX_Cost; Derived; expression `FX_Count * FX_ItmsCost`; Decimal/18/decimal; **checked**; no; no | Read Only changed as intended (T2 tick); all other fields unchanged |
| 2 | FX_OrderNumber | 1; FX_OrderNumBase; Bound; FX_OrderNumber; key 1; (class); RO no; Req yes; ROR no | 1; FX_OrderNumBase; Bound; FX_OrderNumber; key 1; RO no; Req checked; ROR no | Yes |
| 3 | FX_CusName | 2; (blank); Bound; FX_Label; String/100/nvarchar; **RO yes**; Req no; ROR no | 2; (blank); Bound; FX_Label; String/100/nvarchar; RO checked; Req no; ROR no | Yes |
| 4 | FX_CustomerID | 2; FX_CustomerID; Bound; FX_CustomerID; (class); RO no; Req yes | 2; FX_CustomerID; Bound; FX_CustomerID; RO no; Req checked | Yes |
| 5 | FX_ItmsDescription | 2; (blank); Bound; FX_Description; String/150/nvarchar; **RO yes**; Req no | 2; (blank); Bound; FX_Description; String/150/nvarchar; RO checked; Req no | Yes |
| 6 | FX_Item | 3; FX_Item; Bound; FX_Item; (class)/50; RO no; Req yes | 3; FX_Item; Bound; FX_Item; 50; RO no; Req checked | Yes |
| 7 | FX_ItmsCost | 3; FX_Cost; Bound; FX_Cost; Decimal/18/decimal; **RO yes** | 3; FX_Cost; Bound; FX_Cost; Decimal/18/decimal; RO checked | Yes |
| 8 | FX_Count | 4; (blank); Bound; FX_Count; Long Integer/int; RO no | 4; (blank); Bound; FX_Count; Long Integer/int; RO no | Yes |
| 9 | CreatedBy | 5; Bound; CreatedBy; String/128/UsernameType; RO yes | 5; Bound; CreatedBy; String/128/UsernameType; RO checked | Yes |
| 10 | UpdatedBy | 6; Bound; UpdatedBy; String/128/UsernameType; RO yes | 6; same; RO checked | Yes |
| 11 | CreateDate | 7; Bound; CreateDate; Date/CurrentDateType; RO yes | 7; same; RO checked | Yes |
| 12 | RecordDate | 8; Bound; RecordDate; Date/CurrentDateType; RO yes | 8; same; RO checked | Yes |
| 13 | RowPointer | 9; Bound; RowPointer; GUID/RowPointerType; RO yes | 9; same; RO checked | Yes |
| 14 | FX_CusAddress | 10; Bound; FX_Address; String/150/nvarchar; **RO yes** | 10; Bound; FX_Address; String/150/nvarchar; RO checked | Yes |
| 15 | NoteExistsFlag | 10; Bound; NoteExistsFlag; Byte/FlagNyType; RO no | 10; same; RO no | Yes |
| 16 | InWorkflow | 11; Bound; InWorkflow; Byte/FlagNyType; RO no; **ROR yes** | 11; same; RO no; ROR checked | Yes |
| 17 | FX_ItmsPicture | 12; FX_Picture; Bound; FX_Picture; Binary/varbinary; RO yes | 12; FX_Picture; Bound; FX_Picture; Binary/varbinary; RO checked | Yes |

- Result: **16 of the 17 properties are unchanged** against the T1 baseline in every compared field (names, sequences, classes, property types, columns, data types, lengths, column types, Read Only, Required and Read Only Record). The only change is FX_DerOrderTotal's Read Only, which is the intended tick. The 13 properties outside the four edited ones are unchanged, as required.
- FX_DerOrderTotal's Derived attributes (class FX_Cost; sequence 0; expression `FX_Count * FX_ItmsCost`; Decimal 18 (2); Column Data Type `decimal`; Default Value `0`) match the T1 and T3 readings.
- Limitation: the grid readback is accessibility-level for rows 9–17 (the viewport shows rows 1–8 in `t4-05`). The Label String ID is not a grid column in this view, so non-target Label String IDs were **not** individually re-read in the detail panel (only the four targets were). The "Pseudo Key" and "Read Only Record" columns are checkbox readbacks in the same order used in T1.

### Route used for read-only verification (same route as T1; AC-2 reused)

- The blue `Properties` button (one click, `f1e2851` after a fresh find) opened the `IDO Properties` Form again (`favoriteContext=IdoProperties`); status `Property Name (Properties 1 of 17)`; default current row 1 FX_DerOrderTotal. Evidence: `t4-06` (route Form opened; Save greyed).
- Row selections were by name-cell click (view only): row 14 FX_CusAddress, row 3 FX_CusName, row 5 FX_ItmsDescription. No field was edited.

### Recovered values — the four Label String IDs and Read Only (read-only; AC-5)

| Target (row) | Recovered Label String ID | Read Only | Other displayed fields | Evidence |
|---|---|---|---|---|
| FX_DerOrderTotal (1) | `FX_sOrderTotal` | **checked** | Derived; FX_Cost; Sequence 0; Decimal 18 (2); Default `0`; Column Data Type `decimal` | `t4-06` |
| FX_CusAddress (14) | `FX_sAddress` | checked | Bound; String 150; nvarchar; Sequence 10; FX_Address via fxcus | `t4-07` |
| FX_CusName (3) | `FX_sCustomerName` | checked | Bound; String 100; nvarchar; Sequence 2; FX_Label via fxcus | `t4-08` |
| FX_ItmsDescription (5) | `FX_sItemDescription` | checked | Bound; String 150; nvarchar; Sequence 2; FX_Description via fxitms | `t4-09` |

- Baseline-versus-recovered for the five target values (T1 baseline → T4 recovered):

| Target | Label String ID: baseline → recovered | Read Only: baseline → recovered |
|---|---|---|
| FX_CusAddress | blank → `FX_sAddress` | checked → checked |
| FX_DerOrderTotal | `FX_sCost` (displayed) → `FX_sOrderTotal` | unchecked → checked |
| FX_CusName | blank → `FX_sCustomerName` | checked → checked |
| FX_ItmsDescription | blank → `FX_sItemDescription` | checked → checked |
| FX_CustomerID (not a target; unchanged) | class label `FX_sCustomerID` (not re-read here) | — |

- **Save state:** disabled on the IDO Properties Form after the recovery reads (`find` "Save": `button "Save" [disabled]`; the toolbar icon greyed in `t4-06` and `t4-09`).
- **Parent checkout after recovery:** one FX_Orders row, checked out to the operator (`t4-04`: Check In and Undo Check Out enabled; Revision 2; Locked By the operator account).

### Native responses (T4)

- Child IDO Properties close: no prompt, no dialog.
- Parent IDOs close: no prompt, no dialog.
- Select Form OK: the Form opened in Filter in Place with no message.
- F4: returned one row; no message.
- Read-only reads: no message; no prompt; no modal; no session-expiry condition.

### Stop-rule and blocker status

- **No blocker.** The recovery was completed as instructed. The T2 inspection-recovery allowance was not needed in T4 (no ref-not-found, no timeout). Both the initial gate snapshot and the post-close snapshot were ordinary untargeted reads, not recovery attempts.
- **No session expiry**: the session was usable throughout; no re-login.

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Re-confirmed (session; FX_Orders one checked-out row; 17-property inventory; pre-F4 criterion) | `t4-02`, `t4-03`, `t4-04`, `t4-05` | Same session |
| AC-2 | Reused the T1 route (`Properties` button → IDO Properties Form) | `t1-04` (route), `t4-06` (route re-opened) | — |
| AC-3 | Recovered readback of the same five values (no edit in T4) | `t4-06` to `t4-09` | UI readback; not a database read |
| AC-4 | Not re-run (no Save in T4). The Save-disabled state was re-verified after the recovery | `t3-02` (T3 Save) and the Save-disabled readbacks here | — |
| **AC-5** | **SUPPORTED (observed; same session).** The clean child and parent Forms were closed once each; IDOs reopened once; one visible-criterion query (the second target query) recovered FX_Orders with the five values, the 13 non-targeted properties unchanged in the compared grid fields (the three other targets' Label String IDs changed intentionally; corrected in T5 from "16 other properties"), and checked out to the operator | `t4-01` (pre-close clean), `t4-02` (reopened, Filter in Place), `t4-03` (pre-F4 criterion), `t4-04` (recovered identity and checkout), `t4-05` (rows 1–8 grid), `t4-06` to `t4-09` (recovered Label String IDs and Read Only) | Same-session UI recovery only; not database durability; not replay verified; rows 9–17 grid values from accessibility readback |
| AC-6 | **Not finalized** (the final report is a separate step). Data assembled in the sections above | — | — |

### Worker-written-file inventory (T4)

- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (edited: status header; this T4 section).
- `evidence/EXP-081/t4-01-pre-close-child-idoproperties-clean-save-disabled.png` (created)
- `evidence/EXP-081/t4-02-reopened-idos-status-filter-in-place-blank-criterion.png` (created)
- `evidence/EXP-081/t4-03-pre-f4-recovery-idos-fx-orders-criterion.png` (created)
- `evidence/EXP-081/t4-04-recovered-identity-checkout-after-single-f4.png` (created)
- `evidence/EXP-081/t4-05-recovered-properties-grid-rows-1-8.png` (created)
- `evidence/EXP-081/t4-06-recovered-idoproperties-route-form-opened-row1-FX_DerOrderTotal.png` (created)
- `evidence/EXP-081/t4-07-recovered-FX_CusAddress-sAddress-readonly-readback.png` (created)
- `evidence/EXP-081/t4-08-recovered-FX_CusName-sCustomerName-readonly-readback.png` (created)
- `evidence/EXP-081/t4-09-recovered-FX_ItmsDescription-sItemDescription-readonly-readback.png` (created)

Tool-written, not worker-authored: Playwright snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T18-09-53-696Z`, `page-2026-10-13T18-11-28-482Z.yml`, `console-2026-10-13T18-09-53-696Z.log`). Outside the EXP-081 path (known confinement limitation; operator git review is authoritative).

No other repository file was written, edited or deleted in T4.

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t4-01-pre-close-child-idoproperties-clean-save-disabled.png` | IDO Properties tab; FX_DerOrderTotal current; Label String ID `FX_sOrderTotal`; Read Only checked; Save greyed; status `Property Name (Properties 1 of 17)`; no unsaved markers | The child Form was clean before its close | Stored state (UI) |
| `t4-02-reopened-idos-status-filter-in-place-blank-criterion.png` | IDOs tab reopened; status bar `Filter in Place`; IDO Name blank and active; Save greyed | Fresh Form in Filter in Place (the T4 reopen) | — |
| `t4-03-pre-f4-recovery-idos-fx-orders-criterion.png` | IDO Name `FX_Orders`; echo row; status `Filter in Place`; Save greyed | **AC-5** pre-F4 criterion of the recovery query | That F4 returned the row (see `t4-04`) |
| `t4-04-recovered-identity-checkout-after-single-f4.png` | One row `FX_Orders`, checked; Revision Num 2; Revision Date 10/13/2026; Project FX_HelloWorldProject01; Locked By the operator; **Check In and Undo Check Out enabled**; Save greyed; Tables: three entries with both joins; status `Description (IDOs 1 of 1)` | **AC-5** recovered identity, checkout to the operator, and Tables | The 17-row grid (see `t4-05`) |
| `t4-05-recovered-properties-grid-rows-1-8.png` | Properties sub-tab; rows 1–8 with the same values as T1 (FX_DerOrderTotal Derived FX_Cost Decimal 18 decimal, Read Only checked; FX_OrderNumber; FX_CusName String 100 nvarchar, RO checked; FX_CustomerID; FX_ItmsDescription String 150 nvarchar, RO checked; FX_Item; FX_ItmsCost Decimal 18 decimal, RO checked; FX_Count) | **AC-5** rows 1–8 of the recovered inventory and the Read Only values | Rows 9–17 (accessibility readback only); Label String IDs (not a grid column) |
| `t4-06-recovered-idoproperties-route-form-opened-row1-FX_DerOrderTotal.png` | IDO Properties tab (route Form) reopened; row 1 FX_DerOrderTotal current; Label String ID `FX_sOrderTotal`; Read Only checked; Derived; FX_Cost; Decimal 18 (2); Default 0; Save greyed | **AC-5** recovered Label String ID and Read Only of FX_DerOrderTotal; Derived attributes unchanged | — |
| `t4-07-recovered-FX_CusAddress-sAddress-readonly-readback.png` | Row 14 current; Label String ID `FX_sAddress`; Read Only checked; String 150 nvarchar; Sequence 10; FX_Address via fxcus | **AC-5** recovered FX_CusAddress | — |
| `t4-08-recovered-FX_CusName-sCustomerName-readonly-readback.png` | Row 3 current; Label String ID `FX_sCustomerName`; Read Only checked; String 100 nvarchar; Sequence 2; FX_Label via fxcus | **AC-5** recovered FX_CusName | — |
| `t4-09-recovered-FX_ItmsDescription-sItemDescription-readonly-readback.png` | Row 5 current; Label String ID `FX_sItemDescription`; Read Only checked; String 150 nvarchar; Sequence 2; FX_Description via fxitms; Save greyed | **AC-5** recovered FX_ItmsDescription; Save disabled | — |

### Cumulative browser action audit (T1 + T2 + T3 + T4; EXP-081)

T4 only:

| Operation | T4 |
|---|---|
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| Label String ID entries | **0** |
| Read Only ticks | **0** |
| Toolbar Save | **0** |
| IDOs Form close / reopen | **1 / 1** (the recovery pair) |
| IDO Properties Form close / reopen | **1 / 1** (closed clean; reopened by the same Properties-button route) |
| Target F4 queries | **1** (the second and last authorized target query; no extra query) |
| Select Form dialogs answered (OK) | **1** |
| Strings created | **0** |
| Designer actions | **0** |
| Unloads / cache / FormSync / deployment / regeneration | **0** |
| Re-logins; portal navigation; sign-in | **0** |
| Browser JavaScript / evaluate / run-code / console / network / direct URL / refresh / restart | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **2 / 0** (gate; post-close check) |
| `browser_find` | **16** |
| Element clicks (successful / failed) | **12 / 0** |
| Coordinate clicks | **0** |
| `browser_type` | **1** (FX_Orders, `slowly` true) |
| Key presses: Tab / F4 | **1 / 1** (Enter 0; Escape 0) |
| Waits | **1** (3 s) |
| Screenshots | **9** (`t4-01` to `t4-09`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used in T4 | **0** |

Cumulative (T1 + T2 + T3 + T4):

| Operation | T1 | T2 | T3 | T4 | Cumulative |
|---|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| Label String ID entries | 0 | 4 | 0 | 0 | **4** |
| Read Only ticks (effective) | 0 | 1 | 0 | 0 | **1** |
| Read Only click attempts that did not run | 0 | 1 | 0 | 0 | **1** |
| Toolbar Save | 0 | 0 | 1 | 0 | **1** |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | **2 / 2 (two pairs: fresh-Form pair T1; recovery pair T4)** |
| IDO Properties Form opened / closed | 1 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **2 / 1** |
| Target F4 queries (FX_Orders) | 1 | 0 | 0 | 1 | **2** (no extra query) |
| Select Form dialogs answered (OK) | 1 | 0 | 0 | 1 | **2** |
| Strings created | 0 | 0 | 0 | 0 | **0** |
| Designer interactions | 0 | 0 | 0 | 0 | **0** (one inadvertent read-only snapshot in T2) |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | **0** |
| Re-logins (session-expiry procedure) | 0 | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network / direct URL / refresh / restart | 0 | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **4 / 4** |
| Snapshots, untargeted / targeted | 7 / 0 | 3 / 1 | 0 / 0 | 2 / 0 | **12 / 1** |
| `browser_find` | 2 | 12 | 10 | 16 | **40** |
| Element clicks (successful / failed) | 10 / 0 | 11 / 1 | 6 / 0 | 12 / 0 | **39 / 1** |
| Coordinate clicks | 1 | 0 | 0 | 0 | **1** |
| `browser_type` | 1 | 4 | 0 | 1 | **6** |
| Key presses: Tab / F4 / Control+a | 1 / 1 / 0 | 4 / 0 / 1 | 0 / 0 / 0 | 1 / 1 / 0 | **6 / 2 / 1** |
| Waits | 1 | 0 | 0 | 1 | **2** |
| Screenshots | 7 | 12 | 7 | 9 | **35** |
| Ref-not-found errors | 0 | 0 | 0 | 0 | **0** |
| Timeouts | 0 | 1 | 0 | 0 | **1** |
| Native dialogs | 0 | 0 | 0 | 0 | **0** |
| Fresh-snapshot recovery allowance used | 0 | 1 | 0 | 0 | **1 (of 1)** |

### Final browser state (end of T4)

- Web Client tab (tab 1) is the current tab. Designer tab (tab 0) was not selected, clicked or captured.
- The IDOs Form is open, clean (Save disabled), FX_Orders checked out to the operator (Check In and Undo Check Out enabled; Revision 2). The Properties sub-tab is selected.
- The IDO Properties Form is the **active** tab, clean (Save disabled), and its last current row was **row 5 FX_ItmsDescription** (`t4-09`, status `Property Name (Properties 5 of 17)`). Left open by the bounded instruction; no dialog open; no unsaved change. *(Corrected in T5: the T4 text previously said row 14 current and implied the IDOs tab was active. The T4 screenshots `t4-06` to `t4-09` show the IDO Properties tab active.)*
- No dialog, no unsaved-change prompt, no modal, no session-expiry strip.

### Open questions and limitations (T4)

1. **Save persistence is now observed in the recovered UI** (same session). It is not a database read, and no durability or replay verification is claimed.
2. The Label String ID is not a column in the IDOs grid; the four targets' Label String IDs were verified in the IDO Properties Form only. Non-target Label String IDs were not individually re-read.
3. Rows 9–17 are verified by accessibility readback, not in a screenshot (the viewport showed rows 1–8).
4. `FX_sCost` on FX_DerOrderTotal (stored or inherited) remains **unresolved**.
5. The three strings (`FX_sOrderTotal`, `FX_sCustomerName`, `FX_sItemDescription`) remain uncreated, as the brief requires; the Save did not raise a create offer and nothing in T4 tested whether they exist.
6. **AC-6 is not finalized** in T4 (per the bounded instruction). The final report is the next step and needs its own authorization.
7. The Designer tab (tab 0) was not inspected; it is left for the coordinator.
8. Classification: **observed only**; not replay_verified.

---

## T5 — final acceptance documentation (cycle 4; zero browser calls; zero Mongoose changes)

- Task T5, cycle 4, task_message_id `91f9ce54-7cc4-47e4-bbc5-4b16a700c597`, worker session `67b6c280-9a13-48bd-88ff-0b393b3fe095`, run `R-20261014-015408-hxgu`. Date 2026-10-14.
- Scope: documentation only. Wrote `evidence/EXP-081/T5-final-acceptance-report.md`; updated this record (status header; two T4 corrections; this section). No browser call, no Mongoose change, no string created, no other experiment, source, recipe or repository file changed.
- **Recommendation: ACCEPTED AS OBSERVED, subject to coordinator review.** Not `replay_verified`; no database durability claimed; same-session UI recovery only.
- Per-AC evidence and limitations: `evidence/EXP-081/T5-final-acceptance-report.md` section 3. Four-property comparison: section 4. Seventeen-property reconciliation: section 5. FX_DerOrderTotal Derived attributes: section 6. Cumulative audit reconciliation (T1–T4; T5 zero): section 7. Deviations (T2 inadvertent read-only Designer snapshot; T2 timed-out Read Only click; T2 exhausted recovery allowance; T2 denied read; T4 documentation Edit error; T4 record corrections): section 8. Final browser state: section 10.
- Cumulative T1–T4 counts (reconciled): Label String ID entries 4; effective Read Only tick 1 (plus one timed-out click that did not run); toolbar Save 1; IDOs close/reopen pairs 2; IDO Properties openings 2 and closes 1; target F4 queries 2; strings created 0; Designer mutations 0; unloads 0; re-logins 0; checkout-management actions 0.
- Worker-written EXP-081 files: this record; `evidence/EXP-081/T5-final-acceptance-report.md`; 35 PNG files `evidence/EXP-081/t1-01` to `t4-09`.
- Open items (observed only, unresolved): provenance of the displayed `FX_sCost` on FX_DerOrderTotal (stored or class-inherited); runtime resolution of `FX_sOrderTotal`, `FX_sCustomerName` and `FX_sItemDescription` (intentionally not created in EXP-081; no create offer observed on Tab or Save).

## Outcome (operator assistant, 2026-10-14)

Accepted (observed). Hello World Part 5 sections 2-3 property attributes are complete. The operator assistant decided this under the user's overnight authorization of 2026-10-14; this was the fifth and last experiment covered by that authorization.

- Run R-20261014-015408-hxgu completed as accepted after 5 worker tasks.
- **One pause, after T2 (completed_with_denials):** the denial was a Grep on the worker's own tool-result file outside the repo. It was harmless, as in EXP-070, and the operator assistant approved it.
- Changed, for later cleanup (IDO `FX_Orders`, tenant-wide, still checked out to the operator):

  | Property | Label String ID before → after | Read Only |
  |---|---|---|
  | FX_CusAddress | blank → FX_sAddress | ticked (unchanged) |
  | FX_DerOrderTotal | FX_sCost (from class FX_Cost) → FX_sOrderTotal | unticked → **ticked** |
  | FX_CusName | blank → FX_sCustomerName | ticked (unchanged) |
  | FX_ItmsDescription | blank → FX_sItemDescription | ticked (unchanged) |

  - One toolbar Save, with no message; Save was disabled afterwards.
  - The strings FX_sOrderTotal, FX_sCustomerName and FX_sItemDescription **do not exist yet**. No create offer appeared.
- Screenshots viewed by the operator assistant:
  - `t3-02`: right after the single Save, the IDO Properties Form shows FX_DerOrderTotal (Derived, FX_Cost, Sequence 0) with Label String ID FX_sOrderTotal and Read Only ticked; Save is disabled.
  - `t4-06`: after the IDOs close/reopen, the query and reopening IDO Properties, the same values are recovered. Data Type Decimal 18, Decimal Position 2, Default Value 0, decimal.
  - `t4-08`: after recovery, FX_CusName shows Column Table Alias fxcus (FX_HelloWorld01), Column Name FX_Label, Sequence 2, String 100 nvarchar, Label String ID FX_sCustomerName and Read Only ticked.
- Accepted deviations, none with any effect:
  1. One read-only snapshot was taken while the Designer tab was current.
  2. A click on the Read Only checkbox was intercepted by an overlay and did not run; a click on its label text worked.
  3. One Ctrl+A selected the inherited FX_sCost text before it was typed over.
  4. One no-op documentation edit.
- Flagged `browser_type` calls, all authorized fields: the IDO Name criterion ×2 and the Label String ID ×4.
- Findings (observed):
  1. **Edit route:** the IDOs Form's blue Properties button opens the **IDO Properties** Form. It holds one record per property, with Property Overrides (Data, Formatting and Domain groups), Implementation and Subcollection tabs. Label String ID and Read Only sit in Formatting. Starred labels mark locally set values.
  2. **Unknown string IDs are accepted:** an IDO property's Label String ID takes an ID that does not exist yet, with no prompt, as on property classes (EXP-048, EXP-070).
  3. **Overriding a class label:** a Derived property shows its class's label (FX_sCost) until it is overridden.
  4. **Checkbox clicks:** checkboxes in these Forms are often covered by an overlay span; clicking the label text works.
- Limits:
  - Same-session UI evidence only.
  - The runtime captions for the three missing strings will show the raw IDs until the strings are created.
- Confinement (git status): only `evidence/EXP-081/` and this record were written by the run.
- Next (needs the user):
  - Part 5 section 4: property-class extensions in the Designer, for the drill-downs.
  - Section 5: rebuild FX_Orders with the Multi-View wizard. This replaces a Form and needs the tenant-wide Unload All Global Form Objects before the wizard can offer the new properties.
  - Creating the strings FX_sOrderTotal ("Order Total"), FX_sCustomerName ("Customer Name") and FX_sItemDescription ("Item Description").
