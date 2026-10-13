# EXP-078 — Hello World Part 5 Sections 1–2a: join FX_HelloWorld01 to the FX_Orders IDO and add FX_CusName and FX_CusAddress

**CURRENT STATUS (after T8, 2026-10-13): T8 COMPLETE. EXP-078 ACCEPTANCE REVIEW DOCUMENTED; AC-1 to AC-8 SUPPORTED AS OBSERVED (same session; not database durability; not replay verified).** T8 was documentation only: zero browser calls, zero Mongoose changes. It wrote `evidence/EXP-078/T8-final-acceptance-report.md` and edited this record. The runtime Form and the recovered IDOs Form were not touched in T8; their final state is as recorded in T7. Recommendation: ACCEPTED AS OBSERVED, subject to the open items in the T8 section (duplicate Sequence values 2 and 10; the runtime reopen placeholder and Filter in Place difference; the snapshot target split).

**Earlier status (after T7, 2026-10-13): T7 COMPLETE. AC-7 SUPPORTED (observed; UI and accessibility level; same session).** The FX_Orders runtime Form was clean (Save disabled; two rows) and was closed once through its Form-tab control (no prompt). It was reopened once through Form > Open > Select Form (the dialog's single row `FX_Orders` / `FX_Orders` was verified before OK). The reopened Form opened in add mode with an unsaved placeholder (Order Number 3, Count 1, blank Customer ID and Item; Save disabled) and Filter in Place was **not** active; FiP was activated once through its toolbar button and the blank criteria were verified. One F4 returned exactly two records: row 1 = 1 / FX001 / dumbbell / 2 and row 2 = 2 / FX002 / eggs / 1. The status bar read `Customer ID (Object 1 of 2)` after the query. Save was disabled before the query, after it, and after both records were inspected. Record 2 was read by one ordinary read-only row-header click and record 1 was returned to by a second click (navigation only; no field edited; no record created, saved or deleted). The recovered IDOs Form (T6) was not closed, reopened or queried in T7; it remains open, clean, checked out to the operator at Revision 2. AC-8 (final report) is not finalised in T7. Classification: observed only; same-session UI level; not database durability; not replay verified.

**Earlier status (after T6, 2026-10-13): T6 COMPLETE. AC-6 SUPPORTED (observed; same-session UI level only; not independent database durability; not replay verification).** The clean IDOs Form was closed once through its Form-tab control (no prompt) and reopened once through Form > Open > Select Form (`IDOs / IdoCollections`; OK once). The reopened Form was already in Filter in Place (status bar verified; not toggled). One visible-criterion query (`FX_Orders` typed once, committed by Tab, criterion captured before F4, F4 once) returned exactly one FX_Orders IDO in FX_HelloWorldProject01, Revision 2, Revision Date 10/13/2026, checked out to the operator (Check In and Undo Check Out enabled; row checkbox checked), Save disabled. The recovered Tables view has exactly two entries: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]` and FX_Orders / fxords / Primary Base / Inner. The recovered Properties grid has exactly 13 rows: the 11 originals unchanged against T1, FX_CusName (Bound to fxcus.FX_Label; String 100 nvarchar; Read Only checked; Sequence 2) and FX_CusAddress (Bound to fxcus.FX_Address; String 150 nvarchar; Read Only checked; Sequence 10). No checkout, wizard, Finish, Save, property, table, runtime or Designer action was taken in T6. The FX_Orders runtime Form was not opened. The recovery pair is consumed (IDOs close/reopen 2 of 2) and the second target query is consumed (2 of 2). Classification: observed only; same-session UI recovery; not database durability; not replay verified.

**Earlier status (after T5, 2026-10-13): T5 COMPLETE. AC-4 and AC-5 SUPPORTED (observed; UI and accessibility level; same session).** The second and final New Property wizard (Bound; Bind To `fxcus.FX_Address`; Property Name `FX_CusAddress` by one plain fill; Property Class blank) showed String / 150 / nvarchar and was finished once with no message. The Form is clean (Save disabled), so no Save was performed (Save budget still 0 of 1). The Properties grid now has exactly 13 rows: the 11 originals (unchanged against T1), FX_CusName (Bound to fxcus.FX_Label; String 100 nvarchar; Read Only checked) and FX_CusAddress (Bound to fxcus.FX_Address; String 150 nvarchar; Read Only checked). The Tables view still has the two entries and the join. FX_Orders is checked out to the operator (Revision Num 2, unchanged). The IDOs Form is left open. Remaining: the recovery pair (AC-6), the runtime check (AC-7) and the final report (AC-8). Classification: observed only; not replay_verified; no database durability claimed.

**Earlier status (after T4, 2026-10-13): T4 COMPLETE. AC-4 PARTIAL (FX_CusName only; observed; UI and accessibility level; same session).** One New Property wizard (Bound) bound to `fxcus.FX_Label`, Property Name `FX_CusName` by one plain fill, Property Class blank; the wizard showed String, Length 100, Column Data Type nvarchar, which matched the expected types, so Finish was invoked once with no message. The Properties grid now has 12 rows: FX_CusName is Bound to Column (column FX_Label, String, 100, nvarchar, Read Only checked), and the 11 original rows match the T1 baseline. FX_CusAddress is still absent. The Form is clean (Save disabled), so no Save was performed. FX_Orders remains checked out to the operator (Revision Num 2, unchanged). Remaining: FX_CusAddress (AC-4 second wizard, AC-5 for both), recovery (AC-6), runtime (AC-7), and the final report (AC-8). Classification: observed only; not replay_verified; no database durability claimed.

**Earlier status (after T3, 2026-10-13): T3 COMPLETE. AC-3 SUPPORTED (observed; UI and accessibility level; same session).** One IDO Table Wizard on FX_Orders: Table Name FX_HelloWorld01 (typed once, committed by one Tab, readback FX_HelloWorld01, no message); Table Alias fxcus (committed by one Tab); Table Type Secondary and Join Type Left Outer kept; join built with the builder (FX_Code = FX_Orders (fxords) . FX_CustomerID; one Add) and recorded verbatim as `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; one wizard OK with no message. The Tables view now lists exactly two entries: FX_HelloWorld01 / fxcus / Secondary / Left Outer with the join, and FX_Orders / fxords / Primary Base / Inner. Save disabled after OK (the Form is clean); FX_Orders still checked out to the operator; Revision Num 2 unchanged. No property was created, no Save, no Check In or Undo, no Form close, no runtime action, no Designer action. Classification: observed only; not replay_verified; no database durability claimed. AC-4 to AC-8 require the next authorised task.

**Earlier status (after T2, 2026-10-13): T2 COMPLETE. AC-2 SUPPORTED (observed; UI and accessibility level; same session).** Exactly one Check Out of FX_Orders was invoked after a pre-mutation identity gate (T1 baseline re-verified: Revision 2, Locked By blank, checked in, Save disabled, Tables one entry, no pending change). The immediate response was no dialog, confirmation or error text; the settled state shows the row checkbox checked, Locked By the operator account, Revision Num 2 (unchanged), Check In and Undo Check Out enabled, status `Check Out (IDOs 1 of 1)`, Save disabled. FX_Orders is now checked out to the operator and stays checked out. No New Table, wizard, property, Save, Check In, Undo Check Out, Form close/reopen, runtime action or Designer action was performed. The prerequisite review of the remaining EXP-071-R2 and EXP-073 text found no material discrepancy with this baseline (see the T2 section). Classification: observed only; not replay_verified; no database durability claimed. AC-3 to AC-8 require the next authorised task.

**Earlier status (after T1, 2026-10-13): T1 COMPLETE. AC-1 SUPPORTED (observed; UI and accessibility level; same session).** Read-only preflight and baseline only. The FX_Orders IDO was retrieved by one visible-criterion query in a fresh IDOs Form: identity, revision, checkout state (checked in), Tables view (one entry, FX_Orders / fxords) and the 11-row property inventory were recorded, and FX_CusName, FX_CusAddress and any fxcus entry were proven absent. **Check Out was NOT performed (T1 stops before Check Out, per the bounded instruction).** No Check Out, New Table, wizard, Finish, Save, property or table change, runtime action, unload, cache, FormSync or Designer action. Classification: observed only; not replay_verified; no database durability claimed. Remaining work (AC-2 to AC-8) requires the next authorized task.

## Run identity

- Run `R-20261013-232454-0utz`, experiment EXP-078, cycle 0, task **T1** (read-only preflight, baseline, stop before Check Out).
- Worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`; task_message_id `f9d97dfb-b5a2-425b-bce8-d23159ad0302`.
- Date 2026-10-13. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO, its join and its properties are tenant-wide.
- Brief commits (session-start `git log`; not re-verified; no shell): `eefb574` (approved brief), `ae457f2` (draft brief).
- Session-start git status (from the harness context; not re-verified): `?? assets/`.
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Predecessors (read for context): EXP-071-R2 (FX_Orders table and IDO; checked in after the T8 check-in), EXP-073 (two FX_Orders runtime rows), EXP-075 (FX_HelloWorld01 FX_Address, the Check Out and New Property pattern), EXP-061 (FX_Picture bound property), EXP-066-R2 (joined table with the Tab-committed Table Name and the join builder).
- Record provenance: this record did not exist at the start of T1 (`experiments/EXP-078-*` returned no file). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-078/`.

## Objective (T1 scope, from the bounded instruction)

Retrieve exactly one IDO `FX_Orders` in the IDO Collections runtime Form (titled IDOs) through a fresh Form opened by Select Form; record its identity, revision, checkout state, Tables view and complete property inventory; prove `FX_CusName`, `FX_CusAddress` and any `fxcus` entry absent. **Stop before Check Out.**

Full brief objective (later tasks): one Check Out of FX_Orders; one secondary table FX_HelloWorld01 with alias `fxcus` and join `fxcus.FX_Code = fxords.FX_CustomerID`; two Bound properties `FX_CusName` (fxcus.FX_Label) and `FX_CusAddress` (fxcus.FX_Address); recovery pair; runtime check (two FX_Orders rows). The FX_Items join is EXP-079 and out of scope.

## Sources reviewed (before browser interaction)

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt5.md`: full file read. Relevant: Section 1 (00:28–01:44, lines 80–93: IDO Collections, Tables > New Table, alias `cus`, join `Customer.ID = Orders.Customer ID`, Add, OK) and Section 2 (01:44–03:33, lines 94–113: Bind Properties on the joined table, Massage Property Names, label strings). The transcript text at 00:28–03:33 is lines 388–416 of the file. The tutorial's `Cus` / `cuss` / `cust` prefix ambiguity is not used: the brief fixes the names `FX_CusName` and `FX_CusAddress` and the alias `fxcus`. The tutorial's Site Default scope and unprefixed names are not used.
- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`: full. Relevant: Table Name typed once and committed by Tab (readback, no list pick); alias by Tab; Secondary and Left Outer defaults kept; join builder with one Add producing bracketed join text (`fxum.[FX_UM] = fxitms.[FX_UM]`); one wizard OK; New Property Bind To lists joined columns as `alias.column`; joined properties Read Only; a joined property shares the base column's sequence number; the grid does not show the alias.
- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md`: full. Relevant: IDOs Form Select Form route (`IDOs / IdoCollections`); Check Out without confirmation text; New Property wizard page 2 values; Finish with no text; wizard offers no Label String ID field; recovery and runtime check pattern.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: full. Relevant: Check Out before New Property; Bind To lookup; Finish commits immediately with Save disabled; checkout leaves the revision unchanged.
- `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md`: lines 1–537 of 1988 read (status header lines 1–21 covering T7–T10 readbacks; T1–T3). The four property rows (FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count) and the T8 check-in (Revision 1 to 2) are taken from the status header and the brief; the T4 and T7 property readbacks (lines 538 onward) were **not** read in full in this task.
- `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md`: lines 1–528 of 834 read (T1–T4). The two runtime rows (1 / FX001 / dumbbell / 2; 2 / FX002 / eggs / 1) and the blank-criteria query are taken from the T4 Save readbacks and the brief. T5 and T6 (recovery and final acceptance) were **not** read in full.
- Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git commands.

## Baseline (T1; observed before any change)

| Item | Baseline value (observed) |
|---|---|
| IDO | `FX_Orders` (one exact-name match after the query) |
| Project | `FX_HelloWorldProject01` |
| Revision Num / Revision Date | `2` / `10/13/2026` (the Revision Date is today's date; the EXP-071-R2 T8 check-in moved Revision 1 to 2; the date-setting mechanism is an inference) |
| Checkout | **Checked in**: Locked By blank; Check Out enabled; Undo Check Out disabled |
| Access As / Label String ID / Caption | `G6R` / `oFX_Orders` / `oFX_Orders` |
| Save (toolbar) | disabled (clean) |
| Tables | **1 entry**: `FX_Orders`, alias `fxords`, Table Type `Primary Base`, Join Type `Inner`, Join Text blank. **No fxcus entry.** |
| Properties | **11 rows** (see the inventory below) |
| `FX_CusName`, `FX_CusAddress` | **absent** (not in the 11-row inventory; no name contains `cus` in any case) |

### Property inventory (Properties sub-tab, 11 rows; accessibility readback and `t1-02`/`t1-03`)

Property Type is `Bound to Column` on every row. Property Value is blank on every row.

| # | Property Name | Sequence | Property Class | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | FX_OrderNumber | 1 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | **checked** | unchecked |
| 2 | FX_CustomerID | 2 | FX_CustomerID | FX_CustomerID | 0 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | **checked** | unchecked |
| 3 | FX_Item | 3 | FX_Item | FX_Item | 0 | (class-bound, blank) | 50 | (class-bound, blank) | unchecked | **checked** | unchecked |
| 4 | FX_Count | 4 | (blank) | FX_Count | 0 | Long Integer | (blank) | int | unchecked | unchecked | unchecked |
| 5 | CreatedBy | 5 | (blank) | CreatedBy | 0 | String | 128 | UsernameType | **checked** | unchecked | unchecked |
| 6 | UpdatedBy | 6 | (blank) | UpdatedBy | 0 | String | 128 | UsernameType | **checked** | unchecked | unchecked |
| 7 | CreateDate | 7 | (blank) | CreateDate | 0 | Date | (blank) | CurrentDateType | **checked** | unchecked | unchecked |
| 8 | RecordDate | 8 | (blank) | RecordDate | 0 | Date | (blank) | CurrentDateType | **checked** | unchecked | unchecked |
| 9 | RowPointer | 9 | (blank) | RowPointer | 0 | GUID | (blank) | RowPointerType | **checked** | unchecked | unchecked |
| 10 | NoteExistsFlag | 10 | (blank) | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked | unchecked |
| 11 | InWorkflow | 11 | (blank) | InWorkflow | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked | **checked** |

Notes on the inventory:
- The four business rows match the brief's expected list (`FX_OrderNumber`, `FX_CustomerID`, `FX_Item`, `FX_Count`) plus the seven system properties. Class-bound rows show blank Data Type, Length and Column Type in the grid (the same display as EXP-061 and EXP-075); the FX_Item Length 50 is shown on the row.
- The FX_Item row's Property Class cell reads `FX_Item` (screenshot `t1-02`). EXP-071-R2 recorded the class's **Base** class as `FX_ItemBase`; that is the class's base, not the property's class, so the two readings are consistent.
- Checkbox column mapping follows EXP-075 T2: the four trailing checkboxes are Read Only, Required, Pseudo Key and Read Only Record; Upper Case is a blank cell. Pseudo Key is unchecked on all eleven rows (accessibility). The Read Only Record column is off-screen in the screenshots; its values come from the accessibility readback.
- No row has been changed by T1.

## Target identity and query (AC-1)

- Fresh IDOs Form: the clean IDOs tab (which showed FX_HelloWorld01, not FX_Orders; see the action table) was closed once and reopened once through Form > Open > Select Form (`IDOs / IdoCollections`). The reopened Form opened **already in Filter in Place** (status bar `Filter in Place`, IDO Name criterion active and blank); the FiP button was **not** clicked.
- Criterion typed once (`FX_Orders`) and committed with one Tab. Pre-F4 capture: `t1-01` (IDO Name `FX_Orders`; echo row `FX_Orders`; status `Filter in Place`; Save disabled; Tables sub-tab empty because the Form is fresh).
- One F4. Three-second settle. Status `Extends (IDOs 1 of 1)` (inline accessibility readback). **Exactly one row**: `FX_Orders` / `10/13/2026` / Revision Num `2`.
- Identity after the query (`t1-02`, `t1-04`): Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By blank; Access As `G6R`; Check Out enabled; Undo Check Out disabled; Save disabled; no dialog.

## Action audit (T1; exact counts; worker-requested browser calls)

Counts are from this worker's own call log. Tool-generated snapshot files and "Ran Playwright code" wrappers are not counted.

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first selection. Tab 0 (Designer) listed as current; not selected, clicked or captured. |
| `browser_tabs` select | **1** | Tab 1 (Web Client). |
| Snapshots, untargeted | **5** | After the select; after the IDOs-tab view; after the reopen; after the F4; recovery snapshot after one ref error (see below). |
| Snapshots, targeted | **5** | Four on the Form and Select Form dialog refs; one targeted at a guessed ref that returned "Ref not found" (see the deviation). |
| `browser_find` | **2** | `Open` (Form menu item); `Select Form` (dialog). |
| Clicks (successful) | **8** | IDOs tab heading (view); Close Panel IDOs; Form menu; Form menu item Open; Select Form row IDOs / IdoCollections; Select Form OK; Properties sub-tab (view); Tables sub-tab (view). |
| Clicks (failed) | **0** | The targeted Properties click used an existing ref; the one failure was a snapshot ref, not a click. |
| `browser_type` | **2** | (1) Select Form Filter `IdoCollections` (one fill, replaced the pre-filled `FX_HelloWorld01`); (2) IDO Name criterion `FX_Orders` (one fill). |
| Key presses | **3** | Tab ×2 (Select Form Filter commit; IDO Name commit); F4 ×1 (the single target query). |
| Escape presses | **0** | None. |
| Waits | **1** | 3 seconds, after F4. |
| Mouse move / wheel | **1 / 1** | Move to the Properties grid; one wheel scroll (deltaY +300) to see rows 4–11. View only. |
| Screenshots | **4** | `t1-01` to `t1-04`. |
| IDOs Form close / reopen | **1 / 1** | Close of the clean inherited IDOs tab (showed FX_HelloWorld01); reopen through Form > Open > Select Form. |
| Target F4 queries (FX_Orders) | **1** | Cumulative close/reopen pairs for the brief: 1 of 2. |
| Filter in Place clicks | **0** | The reopened Form opened already in FiP. |
| Select Form dialogs answered | **1** | OK (in-page dialog; not a confirmation). |
| Native browser dialogs | **0** | |
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** | Stopped before Check Out (T1 scope). |
| **New Table / table wizard OK** | **0 / 0** | |
| **New Property wizard / Finish** | **0 / 0** | |
| **Save (toolbar or other)** | **0** | |
| New / Delete (object or record) | 0 / 0 | |
| Strings, property classes, SQL objects, Forms, runtime records, IDO or property changes | **0** | |
| Runtime FX_HelloWorld01 or FX_Orders Form open / close / query / edit | **0** | The FX_HelloWorld01 runtime tab was not selected or acted on. |
| Designer actions | **0** | Tab 0 not selected, clicked or captured. |
| Unload, cache, FormSync, deployment, regeneration | **0** | |
| Re-login (session-expiry procedure) | **0** | Session usable throughout. No Session Expired modal, no sign-in page, no portal banner. |
| Browser JavaScript / evaluate / run-code / console or network inspection (worker-authored) | **0** | |
| Direct URL navigation / browser refresh / restart | **0 / 0 / 0** | |
| Ref-not-found errors | **1** | Targeted snapshot of a guessed ref (`f1e1461`) on the Properties tab panel. Recovered with one fresh untargeted snapshot (recovery snapshots used: 1 of the allowance). |
| Timeouts | **0** | |

### Deviation (disclosed)

- **Ref guessed (worker error).** After the Properties sub-tab click, the worker issued a targeted snapshot with a tabpanel ref (`f1e1461`) that had not been read from a current snapshot. The tool returned `Ref f1e1461 not found`. Per the recovery rule, the worker took **one** fresh untargeted snapshot and used only refs from it. No state changed; no mutation followed the error. The error is counted above.
- **Inherited IDOs tab showed a different IDO.** The IDOs tab open at the start showed `FX_HelloWorld01` (clean; Save disabled; Check In and Undo Check Out present with Locked By the operator; 10 properties including `FX_Address`, consistent with EXP-075's final state). The brief's rule allows closing a clean IDOs Form once, so it was closed without change. No edit was made to FX_HelloWorld01. The IDOs tab for FX_Orders was then opened fresh.

## Acceptance status (cumulative after T1)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; a fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders IDO; identity, revision, checkout state, Tables view (FX_Orders / fxords only) and the complete property inventory recorded; FX_CusName, FX_CusAddress and fxcus absent | **SUPPORTED (observed; UI and accessibility level; same session).** | Pre-F4 criterion `t1-01`; identity and Tables `t1-04` (header and Tables sub-tab); inventory `t1-02` (rows 1–8) and `t1-03` (rows 4–11); accessibility readbacks (all 11 rows) | Rows 9–11 of the inventory are visually shown in `t1-03` only partly (Read Only Record column off-screen; accessibility only). EXP-071-R2 T4/T7 property readbacks not read in full (the inventory was re-read here directly). No database read. |
| AC-2 Check Out (or none if already checked out) | **SUPPORTED (T2; observed; UI and accessibility level).** One Check Out invoked; response: no dialog or text; Locked By the operator account; Revision Num 2 (unchanged); Check In and Undo Check Out enabled; status `Check Out (IDOs 1 of 1)`. | `t2-01` (pre-checkout identity), `t2-02` (settled checkout result) | Same session; no database read; Locked By clipped in the image (full value from the accessibility placeholder and the identity bar account). |
| AC-3 IDO Table Wizard: FX_HelloWorld01 (typed, Tab-committed), alias fxcus, Secondary, Left Outer, join `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; one OK; Tables lists exactly FX_Orders and FX_HelloWorld01 (fxcus) | **SUPPORTED (T3; observed; UI and accessibility level).** | `t3-01` (wizard before OK), `t3-02` (Tables after OK); snapshot readbacks in the T3 section | Same session; client-side readback only (no database read); the join text is the builder's bracketed form. |
| AC-4 Two New Property wizards, one Finish each: FX_CusName Bound to fxcus.FX_Label (T4); FX_CusAddress Bound to fxcus.FX_Address (T5) | **SUPPORTED (T4 + T5; observed; UI and accessibility level).** FX_CusName: Bind To `fxcus.FX_Label`, String / 100 / nvarchar, Property Class blank, one Finish, no message. FX_CusAddress: Bind To `fxcus.FX_Address`, String / 150 / nvarchar, Property Class blank, one Finish, no message. | `t4-01`, `t5-01` (wizards before Finish); `t4-02`, `t5-02`, `t5-03` (post-Finish) | Same session; wizard-populated types (no class); the stored binding is shown in the grid, not read from the database. |
| AC-5 After the Finishes: clean Form; two new properties with recorded bindings, types and Read Only; 11 originals unchanged; checked out to the operator | **SUPPORTED (T5; observed; UI and accessibility level).** Form clean after the second Finish (Save disabled; no Save performed). Grid: 13 rows = 11 originals (unchanged against T1) + FX_CusName (Bound to fxcus.FX_Label; String 100 nvarchar; Read Only checked) + FX_CusAddress (Bound to fxcus.FX_Address; String 150 nvarchar; Read Only checked). Checked out to the operator; Revision Num 2. | `t5-02` (rows 1–8), `t5-03` (rows 6–13), `t4-02` (after the first Finish) | Right-hand columns beyond the image checked by accessibility readback; the shared sequence values (see T5). |
| AC-6 Clean IDOs Form closed once more and reopened once more; one visible-criterion query recovers FX_Orders with two Tables entries and the join; inventory equal to baseline plus FX_CusName and FX_CusAddress | **SUPPORTED (T6; observed; same-session UI level only).** One clean close (no prompt); one reopen (Select Form OK); one query (criterion captured before F4; F4 once) returned one FX_Orders IDO (Revision 2; checked out to the operator; Save disabled); Tables two entries with the join; 13 properties matching the T5 post-Finish readback row for row. | `t6-01` (pre-F4 criterion), `t6-02` (recovered Tables and identity), `t6-03` (rows 1–8), `t6-04` (rows 6–13) | Same session only; no database read; Locked By shown through the accessibility placeholder (clipped in the image); the Description field held focus from F4 with no value typed. |
| AC-7 FX_Orders runtime Form after one close/reopen and one blank-criteria query shows 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1, Save disabled, nothing changed | **SUPPORTED (T7; observed; UI and accessibility level; same session).** One close (clean; no prompt) and one reopen through Form > Open > Select Form (dialog row verified `FX_Orders` / `FX_Orders`); FiP activated once (blank criteria verified); one blank-criteria F4 returned exactly two records: 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1; Save disabled before and after; no edit, Save, record create or delete. | `t7-01` (pre-F4 blank criteria, Filter in Place), `t7-02` (post-F4 record 1 and status; grid clipped), `t7-03` (record 2 detail, Object 2 of 2) | Record 2 values are shown through one read-only navigation (the grid clips the data cells); the add-mode placeholder (Order Number 3) was displayed before the query, not saved; same session only; not a database read. |
| AC-8 Final EXP-078 report | **SUPPORTED (T8; documentation only; zero browser calls).** Per-AC reconciliation, cumulative counts (77 actions, 100 reads), baseline and recovered inventory comparison, worker-written-file inventory and final state recorded. Recommendation: ACCEPTED AS OBSERVED. | `evidence/EXP-078/T8-final-acceptance-report.md`; T8 section of this record | Same-session UI evidence only; not database durability, generated SQL, server-side join validity or replay verification. Open items (T8 section O1–O5; report §9 O1–O12) are observed, not resolved. |

## Decisive evidence per file (what each shows and does not prove)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-078/t1-01-pre-f4-idos-fx-orders-criterion.png` | Fresh IDOs Form (Filter in Place): IDO Name criterion `FX_Orders`; echo row `FX_Orders`; status `Filter in Place`; Save disabled; Tables sub-tab empty; operator account and DEM configuration in the identity bar. | That F4 returns one row (see `t1-04`). |
| `evidence/EXP-078/t1-02-baseline-properties-inventory.png` | Identity header (IDO Name FX_Orders, Project FX_HelloWorldProject01, Revision Num 2, Revision Date 10/13/2026, Locked By blank, Check Out enabled, Undo Check Out disabled, Access As G6R, Save disabled); Properties sub-tab rows 1–8: FX_OrderNumber (class FX_OrderNumB…, key seq 1, Required checked), FX_CustomerID (class FX_CustomerID, Required checked), FX_Item (class FX_Item, Length 50, Required checked), FX_Count (Long Integer, int), CreatedBy, UpdatedBy, CreateDate, RecordDate (Read Only checked). | Rows 9–11 (see `t1-03`); the Upper Case and Pseudo Key columns (partly clipped); the Read Only Record column. |
| `evidence/EXP-078/t1-03-baseline-properties-inventory-scrolled-end.png` | Same Form, Properties grid scrolled: rows 4–11 ending at InWorkflow (row 11); RowPointer, NoteExistsFlag and InWorkflow visible; no row after InWorkflow. | Columns to the right of Read Only/Required (partly clipped); the Read Only Record checkbox (accessibility readback only). |
| `evidence/EXP-078/t1-04-baseline-tables-view.png` | Identity header as in `t1-02`; Tables sub-tab: one row FX_Orders, alias fxords, Primary Base, Inner; Join Text blank; no second row; Save disabled. | Database state; the join's absence beyond the display (the grid shows one row). |

## Worker-written-file inventory (T1)

Written by this worker in T1:
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (created; this record).
- `evidence/EXP-078/t1-01-pre-f4-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-078/t1-02-baseline-properties-inventory.png` (created).
- `evidence/EXP-078/t1-03-baseline-properties-inventory-scrolled-end.png` (created).
- `evidence/EXP-078/t1-04-baseline-tables-view.png` (created).

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` written by the harness during this task's browser events (for example `console-2026-10-13T15-25-10-649Z.log`, `page-2026-10-13T15-25-18-035Z.yml`, `page-2026-10-13T15-25-28-809Z.yml`, `page-2026-10-13T15-25-34-942Z.yml`, `page-2026-10-13T15-25-40-580Z.yml`, `page-2026-10-13T15-25-55-212Z.yml`, `page-2026-10-13T15-26-04-199Z.yml`, `page-2026-10-13T15-26-27-712Z.yml`, `page-2026-10-13T15-26-37-723Z.yml`, `page-2026-10-13T15-27-28-308Z.yml`). These are not EXP-078 evidence and were not read as evidence. The harness and the operator's git review are authoritative for confinement.

No other repository file was written, edited or deleted in T1.

## Final state (end of T1)

- Mongoose Web Client tab (tab 1) selected. Web Designer tab (tab 0) not selected, clicked or captured.
- Active: the fresh IDOs Form (`favoriteContext=IdoCollections`) showing FX_Orders (one row), Tables sub-tab selected, status bar `P&roperties` (focus caption), **Save disabled (clean)**. The Form was in Filter in Place at the query; the post-query mode was not separately verified (the status bar showed the focus caption after the sub-tab views).
- **FX_Orders is checked in** (Locked By blank; Check Out enabled). **Check Out was not performed.**
- Other Form tabs open and untouched: FX_Items, Property Classes, IDO Projects, FX_Orders (runtime), Sql Tables, Sql Columns, FX_HelloWorld01 (runtime). The earlier IDOs tab for FX_HelloWorld01 was closed (clean; no change).
- No dialog open; no browser-native prompt; no unsaved change.

## Knowledge state (per finding)

| Finding | State |
|---|---|
| Fresh IDOs Form opens by Select Form (`IDOs / IdoCollections`) after the filter is committed with Tab; the Select Form Filter retained the earlier value `FX_HelloWorld01` and was replaced by one fill | **observed** (one run) |
| A reopened IDOs Form opens already in Filter in Place; one F4 after the criterion produced the result (no second F4 needed) | **observed** (one run); differs from EXP-066-R2 T1 (two F4s needed when the IDOs tab was already open) |
| Visible-criterion query returns one FX_Orders IDO (project FX_HelloWorldProject01; base table FX_Orders, fxords, Primary Base, Inner; Revision 2, 10/13/2026; Locked By blank; checked in) | **observed** (one run; UI level) |
| Baseline inventory: 11 Bound properties (4 business: FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count; 7 system), no derived property | **observed** (one run; UI and accessibility level) |
| `FX_CusName`, `FX_CusAddress` and `fxcus` absent before the change | **observed** (one run) |
| The clean inherited IDOs tab showed FX_HelloWorld01 (not FX_Orders), with 10 properties including FX_Address | **observed** (one run; a readback before close) |
| Check Out, join, properties, recovery, runtime records | **not performed** (later tasks) |
| Replay or procedure status | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blocker for T1.** AC-1 is supported.
2. **Operator decision for the next task:** the brief's objective includes a single Check Out. The FX_Orders IDO is checked in; the next task may proceed to AC-2 under its own authorization.
3. The class-bound Data Type, Length and Column Type are blank in the grid for FX_OrderNumber, FX_CustomerID and FX_Item; the wizard or a detail readback may show them. Not required for T1.
4. The Read Only Record and Upper Case columns are not in the screenshots (accessibility readback only).
5. Revision Date `10/13/2026` on FX_Orders (today) differs in date from FX_HelloWorld01's `10/10/2026` (EXP-075); both are Revision 2. The mechanism is not established.

---

## T2 — prerequisite review completed; one Check Out of FX_Orders (cycle 1; AC-2 supported; join and properties NOT started)

- Task T2, cycle 1, worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`, task_message_id `ef4d5031-d142-413c-8b5c-88d951ddc68a`, run `R-20261013-232454-0utz`. Date 2026-10-13.
- Scope (bounded instruction): read the unreviewed portions of EXP-071-R2 and EXP-073; take one current untargeted Web Client snapshot before mutation; verify the T1 baseline; invoke Check Out once if verified; capture the response; update this record only. No New Table, New Property, property edit, Save, Check In, Undo Check Out, Form close/reopen, runtime action or Designer action.

### Prerequisite review (completed in T2)

- **EXP-071-R2:** the unreviewed portion (lines 538 to 1988, T3 tail through T11 and the Outcome) was read in full. The T1 record had read lines 1 to 537 only.
- **EXP-073:** the unreviewed portion (lines 529 to 834, T4 tail through T6 and the Outcome) was read in full. The T1 record had read lines 1 to 528 only.
- **Discrepancies checked against the EXP-078 baseline:**
  - **None material** for FX_Orders identity: project FX_HelloWorldProject01, base table FX_Orders, alias fxords, Primary Base, Inner; the four business properties FX_OrderNumber (FX_OrderNumBase, Primary Key, Required), FX_CustomerID (FX_CustomerID, String 30, nvarchar, Required), FX_Item (FX_Item, Length 50 override, Required) and FX_Count (Long Integer, int, no class, Required unchecked); the seven system properties; the checked-in state after the T8 Check In of EXP-071-R2.
  - **Revision Date (T1 inference resolved):** EXP-071-R2 T7 (`r2-40`) observed Revision Num 1 with Revision Date 10/13/2026 before the T8 Check In. The date was set at creation, so the T8 Check In changed only Revision Num (1 to 2). This resolves the T1 open question on the date.
  - **Carried, not part of this task (EXP-071-R2, observed and unresolved):** (a) the FX_Count SQL default is blank and the column is nullable, while the IDO default is 1 (EXP-071-R2 T9/T10; not judged, not repaired); (b) the label string `FX_sCount` was accepted as typed and its existence is unverified (EXP-071-R2 D6); (c) the greyed Undo Check Out state before the EXP-071-R2 check-in is unexplained. In this T2 it became enabled after our Check Out, consistent with the operator's ownership.
  - **EXP-073 runtime baseline (not touched in T2):** rows 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1 (T4 Save readbacks; T5 recovery). The reopened add-mode placeholder displayed Order Number 3 (T5); this is a displayed value only.
  - **Designer:** EXP-071-R2 left its wizard closed (T7). The Designer tab was listed and not selected, clicked or captured in T2.

### Tabs and pre-mutation gate

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer **(current)**; tab 1 Mongoose (`favoriteContext=IdoCollections`) | — |
| 2 | Select tab 1 (Web Client) | Tab 1 current; Designer not selected, clicked or captured | — |
| 3 | Untargeted snapshot (pre-mutation) | Tabs: FX_Items, Property Classes, IDO Projects, FX_Orders, Sql Tables, Sql Columns, FX_HelloWorld01 (runtime), IDOs (selected). IDOs Form: IDO Name `FX_Orders` (one row); project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By blank; row checkbox unchecked; Check Out enabled; Undo Check Out disabled; Save disabled; status `P&roperties` (not Filter in Place); no dialog; Tables sub-tab: one entry FX_Orders / fxords / Primary Base / Inner, Join Text blank | snapshot (inline) |
| 4 | Screenshot before the mutation | Identity, checkout controls and Tables as in row 3 | `t2-01` |

Gate verdict: **verified.** One FX_Orders row; project FX_HelloWorldProject01; Revision 2; Locked By blank (checked in); Save disabled; one-table baseline; no pending change. No session expiry, no sign-in page, no dialog, no portal banner. Proceeded to Check Out.

### Check Out (one invocation)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 5 | **Check Out, one native click** (ref from the snapshot in row 3, same state) | No dialog, alert, confirmation or error text. The toolbar and button bar changed: Check Out was replaced by Check In. | — |
| 6 | Wait 3 s (settle) | — | — |
| 7 | Untargeted snapshot (post-checkout) | Row checkbox **checked**; Locked By the operator account; Revision Num `2`; Revision Date `10/13/2026`; Check In **enabled**; Undo Check Out **enabled**; status `Check Out (IDOs 1 of 1)`; Save disabled; Tables one entry unchanged; no dialog | snapshot (inline) |
| 8 | Screenshot of the settled checkout result | Row checkbox checked; Locked By `anton.ramos@3m…` (clipped); Revision Num 2; Check In and Undo Check Out enabled; status `Check Out (IDOs 1 of 1)`; Tables unchanged | `t2-02` |

Check Out was **not** retried. No second Check Out, Check In or Undo Check Out was invoked.

### Checkout result (AC-2)

| Field | Before (`t2-01`) | After (`t2-02`) |
|---|---|---|
| Immediate response | — | No dialog, alert, confirmation or error text |
| Checkout state | Checked in (row checkbox unchecked; Check Out enabled) | **Checked out** (row checkbox checked; Check In enabled) |
| Locked By | blank | The operator account (the identity-bar account; the snapshot renders the value through the `SECRET_MONGOOSE_USERNAME` placeholder; the image clips it after `anton.ramos@3m`) |
| Revision Num / Revision Date | 2 / 10/13/2026 | 2 / 10/13/2026 (**unchanged**) |
| Undo Check Out | disabled | enabled |
| Save | disabled | disabled (no Save performed) |

- **Ownership:** the checkout belongs to the operator. Locked By is the operator account and no other account is shown. Not locked by another user, so no stop was needed.
- The checkout changed Locked By and the control state only. The revision did not change, consistent with EXP-061 and EXP-075.

### Action counts (T2 only)

| Operation | T2 |
|---|---|
| **Check Out** | **1** |
| Check In / Undo Check Out | 0 / 0 |
| New Table / table wizard OK | 0 / 0 |
| New Property wizard / Finish | 0 / 0 |
| Save (toolbar or other) | 0 |
| New / Delete (object or record) | 0 / 0 |
| Property, table, join, string, class, SQL, Form, runtime-record or IDO changes | 0 |
| IDOs Form close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime FX_Orders or FX_HelloWorld01 open / close / query / edit | 0 |
| Designer actions (interaction) | 0 (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login (session-expiry procedure) | 0 |
| Browser JavaScript / evaluate / run-code / console / network / direct URL / refresh / restart | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted | **2 / 0** |
| `browser_find` | 0 |
| Element clicks (successful / failed) | **1 / 0** (Check Out) |
| `browser_type` / key presses / Escape | 0 / 0 / 0 |
| Waits | 1 (3 s) |
| Mouse move / wheel | 0 / 0 |
| Screenshots | **2** (`t2-01`, `t2-02`) |
| Ref-not-found / timeouts | 0 / 0 |
| Dialogs answered | 0 |

### Cumulative browser action audit (T1 + T2)

T1 figures are carried forward from the T1 section above, unchanged.

| Operation | T1 | T2 | Cumulative |
|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 0 / 0 / 0 | **1** / 0 / 0 | **1 / 0 / 0** (brief allows one Check Out) |
| New Table / table wizard OK | 0 / 0 | 0 / 0 | **0 / 0** (budget: 1 / 1, not yet used) |
| New Property wizard / Finish | 0 / 0 | 0 / 0 | **0 / 0** (budget: 2 / 2, not yet used) |
| Save | 0 | 0 | **0** (budget: 0 or 1) |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 | **1 / 1** (budget: 2 pairs; 1 left) |
| Target F4 queries (FX_Orders) | 1 | 0 | **1** (budget: 2; 1 left) |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** (budget: 1 each) |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 0 | 0 | **0** |
| Designer actions | 0 | 0 | **0** |
| Unloads / cache / FormSync / deployment | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |
| Element clicks (successful / failed) | 8 / 0 | 1 / 0 | **9 / 0** |
| Snapshots untargeted / targeted | 5 / 5 | 2 / 0 | **7 / 5** |
| Targeted snapshot failures (ref not found) | 1 | 0 | **1** (recovered; no mutation followed) |
| `browser_find` | 2 | 0 | **2** |
| `browser_type` / key presses | 2 / 3 | 0 / 0 | **2 / 3** |
| Waits / mouse moves / wheel | 1 / 1 / 1 | 1 / 0 / 0 | **2 / 1 / 1** |
| Screenshots | 4 | 2 | **6** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | **2 / 2** |
| Dialogs answered | 1 (Select Form OK) | 0 | **1** |
| Native browser dialogs | 0 | 0 | **0** |

### Worker-written-file inventory (T2)

- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (edited: top status; AC-2 row; this T2 section; next step).
- `evidence/EXP-078/t2-01-pre-checkout-idos-fx-orders-identity-checked-in.png` (created).
- `evidence/EXP-078/t2-02-checkout-result-settled-locked-by-operator.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T15-30-53-985Z`, `console-2026-10-13T15-30-53-986Z.log`, `page-2026-10-13T15-31-11-003Z.yml`, `page-2026-10-13T15-31-17-460Z.yml`) are tool-written, not worker-authored, and were not read as evidence.
- The T1 files (`t1-01` to `t1-04`) and the T1 sections are preserved unchanged.

No other repository file was written, edited or deleted in T2.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01-pre-checkout-idos-fx-orders-identity-checked-in.png` | IDOs tab; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By blank; Check Out enabled; Undo Check Out greyed; Access As G6R; Tables one row FX_Orders / fxords / Primary Base / Inner; status `P&roperties`; Save greyed | The pre-mutation identity, checked-in state and one-table baseline (AC-2 gate) | The property inventory (T1 `t1-02`/`t1-03`); the database state |
| `t2-02-checkout-result-settled-locked-by-operator.png` | Same identity; row checkbox checked; Locked By `anton.ramos@3m…` (clipped); Revision Num 2; Revision Date 10/13/2026; Check In and Undo Check Out enabled; Tables unchanged; status `Check Out (IDOs 1 of 1)`; Save greyed; no dialog | **AC-2 checkout result**: one Check Out, operator ownership, revision unchanged, the resulting checkout controls | The full Locked By value (clipped; accessibility readback only); the database; that no other IDO changed (not visible) |

Acceptance mapping: **AC-2** supported by `t2-01` and `t2-02` with the snapshot readbacks in rows 3 and 7. AC-1 is unchanged from T1 (`t1-01` to `t1-04`).

### Knowledge state (T2)

| Finding | State |
|---|---|
| The Check Out command on the checked-in FX_Orders produced no dialog or text and changed the Locked By value and the row checkbox to the operator | **observed** (one run; UI and accessibility level; same session) |
| Check Out left Revision Num at 2 and the Revision Date at 10/13/2026 | **observed** (one run) |
| Undo Check Out became enabled after the checkout (it was disabled while checked in) | **observed** (one run) |
| The 10/13/2026 Revision Date was set at creation (Revision 1 in EXP-071-R2 T7) and was not changed by the T8 check-in | **observed** in EXP-071-R2 (cited) and consistent with T1 |
| The FX_Count SQL default (blank) and nullability differ from the IDO default 1 | **observed** in EXP-071-R2 T9/T10; **unresolved** (not judged; not part of EXP-078) |
| The label string `FX_sCount` exists | **unresolved** (EXP-071-R2 D6) |
| Join, table, properties, recovery, runtime records | **not performed** (later tasks) |
| Replay, durability | **not claimed** (not replay_verified) |

---

## T3 — one IDO Table Wizard: join FX_HelloWorld01 (alias fxcus) to FX_Orders; one OK (cycle 2; AC-3 supported; properties NOT started)

- Task T3, cycle 2, worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`, task_message_id `abb114d9-1795-4a2d-b719-ca720d431b45`, run `R-20261013-232454-0utz`. Date 2026-10-13.
- Scope (bounded instruction): confirm the prerequisites; click New Table once; Table Name typed once and committed by one Tab (never Enter, never a list pick); alias fxcus with one Tab; Secondary and Left Outer kept; builder values FX_Code, fxords, FX_CustomerID; one builder Add; inspect before OK; one OK; verify the Tables view. No Save, no property, no second wizard, no Check In, no Form close.
- Sources: the T1 and T2 readings of EXP-066-R2 (the Table Name Tab-commit, alias Tab, bracketed builder join text, one OK; these were read in T1) and EXP-075/EXP-061 (Check Out and New Property; not used in T3). No additional source read was needed for this step.

### Pre-mutation gate

| Check | Observed (untargeted snapshot after the tab list and select) | Result |
|---|---|---|
| Tab list | Tab 0 Designer (current, not touched); tab 1 Mongoose (`favoriteContext=IdoCollections`) | Listed before the select |
| IDO | IDOs Form; IDO Name `FX_Orders` (one row) | Match |
| Project | `FX_HelloWorldProject01` | Match |
| Revision Num / Revision Date | `2` / `10/13/2026` | Match |
| Checkout | Row checkbox checked; Locked By operator placeholder; Check In enabled; Undo Check Out enabled | Checked out to the operator (T2 state) |
| Save | disabled | Clean |
| Tables | one reading of the Tables sub-tab before the wizard: `FX_Orders` / `fxords` / `Primary Base` / `Inner`; no `fxcus` entry | Match |
| Dialogs / banners | none | Clean |

Gate verdict: **verified.** Proceeded to New Table.

### Actions (T3, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose (`favoriteContext=IdoCollections`) | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current; Designer not touched | — |
| 3 | Untargeted snapshot (gate) | Gate as above | snapshot (inline) |
| 4 | **New Table**, one click (ref from the gate snapshot) | The IDO Table Wizard opened as a new tab (`favoriteContext=IdoTableWizard`); IDO Name `FX_Orders`; Table Name blank and active; Table Type `Secondary`; Join Type `Left Outer`; builder Column/Table/Column blank; Join Text blank | snapshot |
| 5 | Untargeted snapshot of the wizard (refs for the wizard) | Refs read: Table Name combobox `f1e474`; Table Alias textbox `f1e482` | snapshot (inline) |
| 6 | **Table Name**: `FX_HelloWorld01` typed once into the combobox | Typed; no list opened | — |
| 7 | **Tab once** | Focus moved to Table Alias. Readback after the Tab: Table Name combobox `FX_HelloWorld01`; no validation or error message; no list | snapshot (targeted, wizard panel) |
| 8 | **Table Alias**: `fxcus` typed once | Typed | — |
| 9 | **Tab once** | Focus moved to Table Type. Readback: Table Alias `fxcus`; Table Type `Secondary`; Join Type `Left Outer` | snapshot (targeted, wizard panel) |
| 10 | Builder first Column Name: Open (one click), then FX_Code option (one click) | Column Name `FX_Code` | find; snapshot (targeted) |
| 11 | Builder Table Name: Open (one click), then the `FX_Orders (fxords)` option (one click). The list offered only this one option | Table Name `FX_Orders (fxords)` | find; snapshot (targeted) |
| 12 | Builder second Column Name: Open (one click), then FX_CustomerID option (one click) | Column Name `FX_CustomerID` | find; snapshot (targeted) |
| 13 | Pre-Add readback | Builder: `FX_Code` = `FX_Orders (fxords)` . `FX_CustomerID`; Join Text empty | snapshot (targeted) |
| 14 | **Builder Add**, one click | Join Text generated: `fxcus.[FX_Code] = fxords.[FX_CustomerID]` (verbatim; the brackets are the builder's identifier quoting). The builder fallback (typing the join text) was **not** used | snapshot (targeted) |
| 15 | Pre-OK inspection and screenshot `t3-01` | All wizard fields match the brief: Table Name `FX_HelloWorld01`; Table Alias `fxcus`; Table Type `Secondary`; Join Type `Left Outer`; join `fxcus.[FX_Code] = fxords.[FX_CustomerID]`. No prompt | `t3-01` |
| 16 | **Wizard OK**, one click | No dialog, alert, error or message text. The wizard closed; the IDOs tab became active (`favoriteContext=IdoCollections`) | snapshot (untargeted) |
| 17 | Settled Tables view (untargeted snapshot) and screenshot `t3-02` | Two rows: **FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`** and **FX_Orders / fxords / Primary Base / Inner** (blank join text). Save disabled. Checkout unchanged: row checkbox checked; Locked By operator; Check In and Undo Check Out enabled; Revision Num `2`; Revision Date `10/13/2026`. Status `New Table (IDOs 1 of 1)` | `t3-02` |

No retry on any step. No step produced an ambiguous response. No Escape was pressed in any combobox or lookup list. Enter was not pressed. The Table Name combobox was never picked from its list.

### Wizard field record (verbatim readbacks)

| Field | Recorded value |
|---|---|
| IDO Name | `FX_Orders` |
| Table Name | `FX_HelloWorld01` (typed once; committed by one Tab; readback unchanged) |
| Table Alias | `fxcus` (typed once; committed by one Tab) |
| Table Type | `Secondary` (kept) |
| Join Type | `Left Outer` (kept) |
| Builder Column Name (first) | `FX_Code` |
| Builder Table Name | `FX_Orders (fxords)` |
| Builder Column Name (second) | `FX_CustomerID` |
| Join text after the builder Add | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| Wizard OK response | no message; wizard closed |

Expression check: the join text reads fxcus.FX_Code = fxords.FX_CustomerID (the brackets are the builder's identifier quoting, as in EXP-066-R2). The alias on the new table is `fxcus`; the base table alias is `fxords`. This matches the brief's expression.

### Tables view after OK (AC-3)

| Entry | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Orders | fxords | Primary Base | Inner | (blank) |

Exactly two entries. No other table. The FX_Orders base entry is unchanged.

### Checkout, revision and Save state after the join

- Save: **disabled** (no Save performed; the Form is clean after OK, so no Save is needed or was taken).
- Checkout: checked out to the operator (row checkbox checked; Locked By the operator placeholder; Check In and Undo Check Out enabled).
- Revision: Num `2`; Revision Date `10/13/2026` (unchanged).
- Displayed message after OK: none.

### Action counts (T3 only)

| Operation | T3 |
|---|---|
| **New Table** | **1** |
| **Table wizard OK** | **1** |
| **Builder Add** | **1** |
| Typed join text (fallback) | 0 |
| Table entries added | **1** |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 |
| New Property wizard / Finish | 0 / 0 |
| Save | 0 |
| New (object or record) / Delete | 0 / 0 |
| Property, class, string, SQL, Form or runtime-record changes | 0 |
| IDOs Form close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Designer actions | 0 (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login; browser JavaScript; console; network; direct URL; refresh; restart | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted | **3 / 6** |
| `browser_find` | **3** (builder Column Name option FX_Code; builder Table Name option fxords; builder Column Name option FX_CustomerID) |
| Element clicks (successful / failed) | **9 / 0** (New Table; builder column/table Open and option clicks (×6); Add; OK) |
| `browser_type` (succeeded / refused) | **2 / 0** (Table Name; Table Alias) |
| Key presses | **2** (Tab ×2) |
| Enter / Escape | 0 / 0 |
| Waits | 0 |
| Screenshots | **2** (`t3-01`, `t3-02`) |
| Ref-not-found / timeouts | 0 / 0 |
| Dialogs answered | 0 |

Note on counts: the click total includes the six builder clicks (Open and option for each of three builder combobox pairs); the three `browser_find` calls are the read-only option checks before each builder option click.

### Cumulative browser action audit (T1 + T2 + T3)

T1 and T2 figures are carried forward from their sections above, unchanged.

| Operation | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 0 / 0 / 0 | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** (brief allows one Check Out) |
| **New Table** | 0 | 0 | **1** | **1** (budget 1: used) |
| **Table wizard OK** | 0 | 0 | **1** | **1** (budget 1: used) |
| **Builder Add** | 0 | 0 | **1** | **1** |
| Typed join text (fallback) | 0 | 0 | 0 | **0** |
| New Property wizard / Finish | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (budget 2 / 2; none used) |
| Save | 0 | 0 | 0 | **0** (budget 0 or 1) |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** (budget 2 pairs; 1 left) |
| Target F4 queries (FX_Orders) | 1 | 0 | 0 | **1** (budget 2; 1 left) |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** (budget 1 each) |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes (other than the join table entry) | 0 | 0 | 0 | **0** (the join is the one table change) |
| Designer actions | 0 | 0 | 0 | **0** |
| Unloads / cache / FormSync / deployment | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | **0** |
| Element clicks (successful / failed) | 8 / 0 | 1 / 0 | 9 / 0 | **18 / 0** |
| Snapshots untargeted | 5 | 2 | 3 | **10** |
| Snapshots targeted (failed) | 5 (1 failed) | 0 | 6 | **11** (1 failed, T1) |
| `browser_find` | 2 | 0 | 3 | **5** |
| `browser_type` (succeeded / refused) | 2 / 0 | 0 | 2 / 0 | **4 / 0** |
| Key presses (Tab; Enter; Escape) | 3 (Tab 2; F4 1) | 0 | 2 (Tab 2) | **5 (Tab 4; F4 1)**; Enter 0; Escape 0 |
| Waits | 1 | 0 | 0 | **1** |
| Mouse moves / wheel | 1 / 1 | 0 | 0 | **1 / 1** |
| Screenshots | 4 | 2 | 2 | **8** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** |
| Dialogs answered | 1 (Select Form OK) | 0 | 0 | **1** |
| Native browser dialogs | 0 | 0 | 0 | **0** |

### Worker-written-file inventory (T3)

- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (edited: top status; AC-3 row; this T3 section; next step).
- `evidence/EXP-078/t3-01-ido-table-wizard-before-ok.png` (created).
- `evidence/EXP-078/t3-02-tables-view-after-ok-two-entries.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T15-34-15-595Z.yml`, `page-2026-10-13T15-35-33-557Z.yml`, `console-2026-10-13T15-34-03-111Z.log`) are tool-written, not worker-authored, and were not read as evidence.
- The T1 and T2 files (`t1-01` to `t1-04`, `t2-01`, `t2-02`) are preserved unchanged.

No other repository file was written, edited or deleted in T3.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01-ido-table-wizard-before-ok.png` | IDO Table Wizard tab; IDO Name `FX_Orders`; Table Name `FX_HelloWorld01`; Table Alias `fxcus`; Table Type `Secondary`; Join Type `Left Outer`; builder FX_Code = FX_Orders (fxords) FX_CustomerID; join text `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; OK and Cancel visible; no message | **AC-3 pre-OK evidence**: every wizard field and the join expression before the one OK | That OK created the join (see `t3-02`); the database state |
| `t3-02-tables-view-after-ok-two-entries.png` | IDOs tab (FX_Orders, Revision 2, Locked By operator, Check In enabled); Tables sub-tab: row 1 FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; row 2 FX_Orders / fxords / Primary Base / Inner; status `New Table (IDOs 1 of 1)`; Save greyed; no dialog | **AC-3 post-OK evidence**: exactly two table entries with the join; Save disabled; checkout unchanged | Persistence beyond the session; the SQL state; the status text's count (`1 of 1` is the IDO count) |

Acceptance mapping: **AC-3** supported by `t3-01` and `t3-02` with the snapshot readbacks above.

### Knowledge state (T3)

| Finding | State |
|---|---|
| The IDO Table Wizard accepts the typed Table Name FX_HelloWorld01 with one Tab; the readback stays `FX_HelloWorld01` with no message | **observed** (one run; client readback) |
| The builder offers `FX_Orders (fxords)` as its only Table Name option and produces `fxcus.[FX_Code] = fxords.[FX_CustomerID]` from one Add | **observed** (one run) |
| One OK adds the secondary table entry FX_HelloWorld01 / fxcus (Secondary, Left Outer, with the join) to FX_Orders' Tables view; no message | **observed** (one run; UI and accessibility level) |
| Save stays disabled after the table OK (no Save needed) | **observed** (one run); not a persistence check |
| The IDO stays checked out with Revision Num 2 after the table join | **observed** (one run) |
| Server-side validity of the join, generated SQL, and persistence across close/reopen | **not established** (AC-6 recovery is a later task) |
| Properties, runtime records, durability, replay | **not performed / not claimed** |

---

## T4 — New Property wizard once: FX_CusName bound to fxcus.FX_Label; one Finish; Form clean (cycle 3; AC-4 partial; AC-5 partial)

- Task T4, cycle 3, worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`, task_message_id `ade7c6a9-ec6c-44f2-ac41-af86761ab323`, run `R-20261013-232454-0utz`. Date 2026-10-13.
- Scope (bounded instruction): one property only (FX_CusName). Gate; New Property wizard once; Bound kept; Bind To `fxcus.FX_Label` selected by its visible option; Property Name `FX_CusName` by one plain fill; Property Class blank; record types; one Finish; settled check; Save only if dirty (budget). No FX_CusAddress wizard, no recovery, no runtime, no Check Out, no Designer.
- Sources: the T1 to T3 readings of this record, and EXP-075 (New Property wizard pages and types) and EXP-061 (Bound and Bind To pattern). These were already read in T1; no additional read was required.

### Pre-mutation gate (Web Client; one untargeted snapshot after the tab list and select)

| Check | Observed | Result |
|---|---|---|
| Tab list | Tab 0 Designer (current; not touched); tab 1 Mongoose (`favoriteContext=IdoCollections`) | Listed before the select |
| IDO / project | FX_Orders; `FX_HelloWorldProject01` | Match |
| Revision | `2` (Revision Date `10/13/2026`) | Match |
| Checkout | Row checkbox checked; Locked By operator placeholder; Check In enabled; Undo Check Out enabled | Checked out to the operator |
| Save | disabled | Clean |
| Tables | Two entries: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Orders / fxords / Primary Base / Inner | Match |
| Properties (after the Properties sub-tab click; view only) | 11 rows: FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count and seven system properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow). No FX_CusName; no FX_CusAddress; no `fxcus` property; no address-like name | Match the T1 baseline and the absence check |
| Dialogs / banners | none | Clean |

Gate verdict: **verified.** Proceeded to the New Property wizard.

### Actions (T4, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1; untargeted snapshot (gate) | Gate as above | snapshot (inline) |
| 3 | Properties sub-tab, one click (view only) | Eleven rows read | snapshot (untargeted) |
| 4 | **New Property**, one click | IDO Property Wizard opened as a new tab (`favoriteContext=IdoPropertyWizard`). Page 1: Bound selected (default); Finish disabled; Next enabled | snapshot (untargeted) |
| 5 | **Next**, one click | Page 2 (Property Attributes): Bind To empty; Property Name empty; Property Class blank; Data Type blank; Length blank; Finish enabled | snapshot (targeted, wizard panel) |
| 6 | **Bind To** lookup, one click on its Open button | Lookup opened. Options offered included `fxcus.FX_Code`, `fxcus.FX_Label`, `fxcus.InWorkflow` and the other fxcus columns | find (`fxcus.FX_Label`) |
| 7 | Option **`fxcus.FX_Label`**, one click (the exact visible option; not another table's column) | Bind To readback `fxcus.FX_Label`. Property Name auto-filled `FX_Label`; Data Type String; Length 100; Column Data Type nvarchar (wizard-populated after the binding; Property Class still blank) | snapshot (targeted, wizard panel) |
| 8 | **Property Name**: `FX_CusName` typed by one plain fill (replacing the auto-filled `FX_Label`) | Readback `FX_CusName`; no other change | snapshot (targeted, wizard panel) |
| 9 | Pre-Finish gate and screenshot `t4-01` | Bind To `fxcus.FX_Label`; Property Name `FX_CusName`; Property Class blank; Data Type `String`; Length `100`; Column Data Type `nvarchar`; Inherit boxes for Data Type and Column Data Type disabled (wizard-populated, not class-inherited); Next disabled; Finish enabled. No prompt, no conversion message | `t4-01` |
| 10 | **Finish**, one click | No dialog, alert, conversion prompt or message text. The wizard closed; the IDOs tab became active; status `New Property (IDOs 1 of 1)` | snapshot (untargeted) |
| 11 | Settled inventory (untargeted snapshot) and screenshot `t4-02` | Save **disabled** (clean). Revision Num `2`; Revision Date `10/13/2026`; Locked By operator; Check In and Undo Check Out enabled. Properties: 12 rows; row 2 `FX_CusName`: Sequence 2; Property Class blank; Property Type Bound to Column; Column Name `FX_Label`; Key Sequence 0; Data Type String; Length 100; Column Type nvarchar; Read Only checked (accessibility); Required, Pseudo Key and Read Only Record unchecked | `t4-02` |

No retry on any step. No Escape was pressed in any combobox or lookup list. Enter was not pressed. The Save button was not clicked (the Form was clean after Finish).

### Wizard field record (FX_CusName)

| Field | Recorded value |
|---|---|
| IDO Name (page 1) | `FX_Orders` (page-1 accessibility label reads "Property Name:", as recorded for EXP-061; the visible value is the IDO name) |
| Binding | Bound (default; kept) |
| Bind To | `fxcus.FX_Label` (selected by its visible option; the list also offered `fxcus.FX_Code` and other fxcus columns; no FX_Orders or FX_Items column was chosen) |
| Property Name | `FX_CusName` (one plain fill) |
| Property Class | blank (left blank) |
| Data Type | `String` (wizard-populated after binding; Inherit disabled) |
| Length | `100` |
| Decimal | blank |
| Column Data Type | `nvarchar` (Inherit unchecked) |
| Label String ID | not offered by this wizard (no field; not set; no string created) |
| Finish response | no message, no dialog, no conversion or consequential prompt; wizard closed |

### Post-Finish inventory (Properties sub-tab; 12 rows)

| Seq (row) | Property Name | Sequence | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | checked |
| **2** | **FX_CusName (new)** | **2** | (blank) | Bound to Column | **FX_Label** (fxcus) | 0 | String | 100 | nvarchar | **checked** | unchecked |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | checked |
| 4 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound, blank) | 50 | (class-bound, blank) | unchecked | checked |
| 5 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | (blank) | int | unchecked | unchecked |
| 6 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | checked | unchecked |
| 7 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | checked | unchecked |
| 8 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType | checked | unchecked |
| 9 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType | checked | unchecked |
| 10 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType | checked | unchecked |
| 11 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked |
| 12 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked (Read Only Record checked) |

Comparison with the T1 baseline (11 rows): the 11 original rows are **unchanged** in every readable field and flag (names, sequence, Property Class, Property Type, Column Name, Key Sequence, Data Type, Length, Column Type, and the checkbox states). The only added row is FX_CusName. FX_CusAddress is **absent** (no address-like name in the grid; accessibility readback of all 12 rows).

Observation (observed, not judged): the new FX_CusName shares Sequence `2` with FX_CustomerID. The same pattern was observed in EXP-066-R2 (a joined property shares the sequence number of a base column). Here the shared sequence is with FX_CustomerID, not with a same-named column. Intent not established.

### Save state (budget)

- After Finish the Form was **clean** (toolbar Save disabled; no unsaved-change indication). **No Save was performed.**
- Save budget: **0 of 1 used** (the conditional Save remains unused and is available for the next task only if a later step leaves the Form dirty).

### Screenshot readings

- `t4-01` (before Finish): the IDO Property Wizard, Property Attributes page. Visible: Bind To `fxcus.FX_Label`; Property Name `FX_CusName`; Property Class blank; Data Type String; Length 100; Column Data Type nvarchar; Next greyed; Finish enabled; the Inherit checkboxes disabled. **Proves** the configured state before Finish. **Does not prove** the stored binding or the generated SQL.
- `t4-02` (after Finish): the IDOs tab, Properties sub-tab. Visible: status `New Property (IDOs 1 of 1)`; Save greyed; FX_OrderNumber row 1; **FX_CusName row 2** (Sequence 2; Column FX_Label; String; 100; nvarchar clipped as `nvarc…`; Read Only checked); FX_CustomerID, FX_Item, FX_Count and the system rows; Revision 2; Revision Date 10/13/2026; Locked By operator; Check In and Undo Check Out enabled. **Proves** the post-Finish grid, the clean state and the checkout state at UI level. **Does not prove** the Read Only and Required columns beyond the image (the Read Only checkbox is visible for row 2; the Read Only Record column is off-screen; the accessibility readback supplies the flags) or the persisted state.

### Action counts (T4 only)

| Operation | T4 |
|---|---|
| **New Property wizard (opened)** | **1** (budget 2; 1 left for FX_CusAddress) |
| **Finish** | **1** (budget 1 per property; FX_CusName used; FX_CusAddress 1 left) |
| Save | **0** (clean after Finish; budget 0 of 1 used) |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 |
| New Table / table wizard OK | 0 / 0 |
| Wizard Next | 1 |
| Strings, property classes, SQL, Forms, runtime records changed | 0 |
| IDOs Form close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Designer actions | 0 (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login; browser JavaScript; console; network; direct URL; refresh; restart | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted | **4 / 3** (the untargeted: gate, after Properties, after New Property, after Finish; the targeted: after Next, after the Bind To option, after the name fill) |
| `browser_find` | **1** (`fxcus.FX_Label` before the option click) |
| Element clicks (successful / failed) | **6 / 0** (Properties sub-tab; New Property; Next; Bind To Open; the fxcus.FX_Label option; Finish) |
| `browser_type` (succeeded / refused) | **1 / 0** (Property Name fill `FX_CusName`) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Waits | 0 |
| Mouse moves / wheel | 0 / 0 |
| Screenshots | **2** (`t4-01`, `t4-02`) |
| Ref-not-found / timeouts | 0 / 0 |
| Dialogs answered | 0 |

### Cumulative browser action audit (T1 to T4)

T1 to T3 figures are carried forward from their sections, unchanged. Snapshot counts follow the T1 (5 untargeted; 5 targeted, one failed) and T3 (3 untargeted; 6 targeted) entries as recorded.

| Operation | T1 to T3 | T4 | Cumulative (T1 to T4) | Budget |
|---|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** | Check Out 1 of 1 used |
| **New Table** | 1 | 0 | **1** | 1 of 1 used |
| **Table wizard OK** | 1 | 0 | **1** | 1 of 1 used |
| Builder Add | 1 | 0 | **1** | — |
| **New Property wizard** | 0 | **1** | **1** | 2 allowed; **1 remaining (FX_CusAddress)** |
| **Finish** | 0 | **1** | **1** | 1 per property; **1 remaining (FX_CusAddress)** |
| **Save** | 0 | 0 | **0** | 0 of 1 used (conditional; unused) |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 | **1 / 1** | 2 pairs; **1 pair remaining** |
| Target F4 queries (FX_Orders) | 1 | 0 | **1** | 2; **1 remaining** |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | 1 each; all remaining |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes (other than the join table and FX_CusName) | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deployment | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | **0** | — |
| Element clicks (successful / failed) | 18 / 0 | 6 / 0 | **24 / 0** | — |
| Snapshots untargeted | 10 | 4 | **14** | — |
| Snapshots targeted (failed) | 11 (1 failed, T1) | 3 | **14 (1 failed, T1)** | — |
| `browser_find` | 5 | 1 | **6** | — |
| `browser_type` (succeeded / refused) | 4 / 0 | 1 / 0 | **5 / 0** | — |
| Key presses (Tab; F4; Enter; Escape) | 5 (Tab 4; F4 1) | 0 | **5**; Enter 0; Escape 0 | — |
| Waits | 1 | 0 | **1** | — |
| Mouse moves / wheel | 1 / 1 | 0 / 0 | **1 / 1** | — |
| Screenshots | 8 | 2 | **10** | — |
| `browser_tabs` list / select | 3 / 3 | 1 / 1 | **4 / 4** | — |
| Dialogs answered | 1 (T1 Select Form OK) | 0 | **1** | — |
| Native browser dialogs | 0 | 0 | **0** | — |

### Worker-written-file inventory (T4)

- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (edited: top status; AC-4 and AC-5 rows; this T4 section; next step).
- `evidence/EXP-078/t4-01-new-property-wizard-FX_CusName-before-finish.png` (created).
- `evidence/EXP-078/t4-02-post-finish-properties-inventory-FX_CusName.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T15-38-44-692Z.yml`, `page-2026-10-13T15-39-36-942Z.yml`, `console-2026-10-13T15-38-26-874Z.log`) are tool-written, not worker-authored, and were not read as evidence.
- T1 to T3 files (`t1-01` to `t1-04`, `t2-01`, `t2-02`, `t3-01`, `t3-02`) are preserved unchanged.

No other repository file was written, edited or deleted in T4.

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t4-01-new-property-wizard-FX_CusName-before-finish.png` | IDO Property Wizard tab; Property Attributes page; Bind To `fxcus.FX_Label`; Property Name `FX_CusName`; Property Class blank; String; Length 100; nvarchar; Next greyed; Finish enabled; no message | **AC-4 pre-Finish gate** for FX_CusName: binding, name and the shown types before the one Finish | The stored binding; the SQL column; that Finish persisted the property (see `t4-02`) |
| `t4-02-post-finish-properties-inventory-FX_CusName.png` | IDOs tab, FX_Orders, Revision 2, Revision Date 10/13/2026, Locked By operator, Check In and Undo Check Out enabled; status `New Property (IDOs 1 of 1)`; Save greyed; Properties: row 2 `FX_CusName` Sequence 2, Bound to Column, column FX_Label, String, 100, nvarchar (clipped), Read Only checked; rows 1, 3–9 consistent with the baseline | **AC-4 response and AC-5 partial**: one new property; clean Form; checkout unchanged; the 11 originals visible and unchanged | Right-hand columns (Required, Pseudo Key, Read Only Record) beyond the image (accessibility readback only); FX_CusAddress absence beyond the readback (AC-5 second part); database persistence |

### Acceptance mapping (T4)

- **AC-4 (FX_CusName part):** supported (observed; UI and accessibility level) by `t4-01`, the Finish response, and the post-Finish readback.
- **AC-5 (FX_CusName part):** supported by `t4-02` and the readback: clean (Save disabled); one new property; the 11 originals unchanged; checked out to the operator. The FX_CusAddress part is not started.

### Knowledge state (T4)

| Finding | State |
|---|---|
| Bind To lookup offers `fxcus.FX_Label` as a visible option; selecting it sets the Property Name default to `FX_Label` and the types to String, 100, nvarchar | **observed** (one run; UI level) |
| The New Property wizard (Bound) with a joined column and a plain name fill produces one Bound to Column property (column FX_Label) with no Property Class; Finish adds it with no message | **observed** (one run) |
| The new property shows Read Only checked (accessibility) and sequence 2 (shared with FX_CustomerID) | **observed** (one run); the sequence intent is **unresolved** |
| The 11 original properties are unchanged after the Finish | **observed** (one run; readback comparison) |
| FX_Orders stays checked out with Revision 2 after the property add | **observed** (one run) |
| The page-1 accessibility label mislabels the IDO Name field as "Property Name" | **observed** (one run; a known label issue also recorded for EXP-061) |
| Persistence across close/reopen; SQL; generated binding; durability; replay | **not established / not claimed** (AC-6 is a later task) |

---

## T5 — FX_CusAddress: second and final New Property wizard; one Finish; 13-row inventory; Form clean; IDOs left open (cycle 4; AC-4 and AC-5 supported)

- Task T5, cycle 4, worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`, task_message_id `d7364910-3b22-489d-bdb9-e9e46195bad7`, run `R-20261013-232454-0utz`. Date 2026-10-13.
- Scope (bounded instruction): gate; New Property wizard once (second and final authorised); Bound kept; Bind To `fxcus.FX_Address` by its visible option; Property Name `FX_CusAddress` by one plain fill; Property Class blank; types recorded; one Finish; settled inventory; Save only if dirty (not needed). No other property wizard, no recovery pair, no runtime, no Designer, no edits to existing properties. IDOs left open.

### Pre-mutation gate

| Check | Observed | Result |
|---|---|---|
| Tab list / select | Tab 0 Designer (current; not touched); select tab 1 (Mongoose, `favoriteContext=IdoCollections`) | Listed before the select |
| IDO / project / revision | FX_Orders; `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026` | Match |
| Checkout | Row checkbox checked; Locked By operator placeholder; Check In and Undo Check Out enabled | Checked out to the operator |
| Save | disabled | Clean |
| Properties (12 rows before this step) | 11 originals (FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count, seven system properties) plus FX_CusName: Bound to Column, column FX_Label, String, 100, nvarchar, Read Only checked. FX_CusAddress absent (no address-like name) | Match |
| Tables (view, two entries) | FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Orders / fxords / Primary Base / Inner | Match |
| Dialogs / banners | none | Clean |

Gate verdict: **verified.** Proceeded to the second New Property wizard.

### Actions (T5, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1; untargeted snapshot (gate) | Gate as above | snapshot (inline) |
| 3 | Tables sub-tab, one click (view only) | Two entries (see gate) | `find` "fxcus"; snapshot |
| 4 | **New Property**, one click (ref from the untargeted snapshot in the same state) | IDO Property Wizard opened (`favoriteContext=IdoPropertyWizard`). Page 1: Bound selected (default); Finish disabled; Next enabled | snapshot (untargeted) |
| 5 | **Next**, one click | Page 2 (Property Attributes): Bind To empty; Property Name empty; Property Class blank; Finish enabled | snapshot (targeted, wizard panel) |
| 6 | **Bind To** lookup, one click on its Open button | Lookup opened; options included `fxcus.FX_Address`, `fxcus.FX_Code` and other fxcus columns | `find` (`fxcus.FX_Address`) |
| 7 | Option **`fxcus.FX_Address`**, one click (the exact visible option; no other table's column chosen) | Bind To readback `fxcus.FX_Address`. Property Name auto-filled `FX_Address`; Data Type String; Length 150; Column Data Type nvarchar (wizard-populated after binding; Property Class blank) | snapshot (targeted, wizard panel) |
| 8 | **Property Name**: `FX_CusAddress` by one plain fill (replacing the auto-filled `FX_Address`) | Readback `FX_CusAddress` | snapshot (targeted, wizard panel) |
| 9 | Pre-Finish gate and screenshot `t5-01` | Bind To `fxcus.FX_Address`; Property Name `FX_CusAddress`; Property Class blank; Data Type `String`; Length `150`; Column Data Type `nvarchar`; Inherit boxes for Data Type and Column Data Type disabled; Next disabled; Finish enabled. No prompt, no conversion message | `t5-01` |
| 10 | **Finish**, one click | No dialog, alert, conversion prompt or message text. The wizard closed; the IDOs tab became active; status `New Property (IDOs 1 of 1)` | snapshot (untargeted) |
| 11 | Settled state (untargeted snapshot) | Save **disabled** (clean). Revision Num `2`; Revision Date `10/13/2026`; Locked By operator; Check In and Undo Check Out enabled. Tables: the same two entries and join | snapshot |
| 12 | Properties sub-tab, one click (view only); untargeted snapshot | 13 rows (accessibility readback; see the inventory below) | snapshot |
| 13 | Screenshot `t5-02` (rows 1–8) and mouse move plus one wheel scroll (+300) to view the lower rows; screenshot `t5-03` (rows 6–13) | Rows 1–8 and 6–13 visible; the scroll was view-only (no row changed) | `t5-02`, `t5-03` |

No retry on any step. No Escape in any combobox or lookup list. Enter was not pressed. The Save button was not clicked (the Form was clean after Finish).

### Wizard field record (FX_CusAddress)

| Field | Recorded value |
|---|---|
| IDO Name (page 1) | `FX_Orders` (page-1 accessibility label reads "Property Name:", as recorded in T4 and EXP-061) |
| Binding | Bound (default; kept) |
| Bind To | `fxcus.FX_Address` (selected by its visible option; no other table's column chosen) |
| Property Name | `FX_CusAddress` (one plain fill) |
| Property Class | blank |
| Data Type | `String` (wizard-populated after binding; Inherit disabled) |
| Length | `150` |
| Decimal | blank |
| Column Data Type | `nvarchar` (Inherit unchecked) |
| Label String ID | not offered by this wizard (not set; no string created) |
| Finish response | no message, no dialog, no conversion or consequential prompt; wizard closed |

### Post-Finish inventory (Properties sub-tab; 13 rows; accessibility readback with screenshot support)

| Row | Property Name | Sequence | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Upper Case | Pseudo Key | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | checked | (blank) | unchecked | unchecked |
| 2 | FX_CusName (T4) | 2 | (blank) | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | **checked** | unchecked | (blank) | unchecked | unchecked |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | checked | (blank) | unchecked | unchecked |
| 4 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound, blank) | 50 | (class-bound, blank) | unchecked | checked | (blank) | unchecked | unchecked |
| 5 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | (blank) | int | unchecked | unchecked | (blank) | unchecked | unchecked |
| 6 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | checked | unchecked | (blank) | unchecked | unchecked |
| 7 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | checked | unchecked | (blank) | unchecked | unchecked |
| 8 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType | checked | unchecked | (blank) | unchecked | unchecked |
| 9 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType | checked | unchecked | (blank) | unchecked | unchecked |
| 10 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType | checked | unchecked | (blank) | unchecked | unchecked |
| **11** | **FX_CusAddress (T5)** | **10** | (blank) | Bound to Column | **FX_Address** (fxcus) | 0 | **String** | **150** | **nvarchar** | **checked** | unchecked | (blank) | unchecked | unchecked |
| 12 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked | (blank) | unchecked | unchecked |
| 13 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked | (blank) | unchecked | **checked** |

Row 11 is the new property; the grid sorts it between RowPointer and NoteExistsFlag, as shown in `t5-03`.

### Baseline (T1) versus post-change inventory

| Comparison | Result |
|---|---|
| The 11 original properties (T1 baseline names, sequence, class, property type, column, key sequence, data type, length, column type, and checkbox states) | **Unchanged.** The same names and values appear in the post-change grid. |
| Added properties | **Exactly two**: FX_CusName (T4) and FX_CusAddress (T5). Both Bound to Column, no Property Class, Read Only checked (accessibility and visible grid), Required unchecked, Pseudo Key unchecked, Read Only Record unchecked. |
| FX_CusName after T5 | Still Bound to `fxcus.FX_Label` (column FX_Label); String 100 nvarchar; sequence 2; unchanged. |
| FX_CusAddress | Bound to `fxcus.FX_Address` (column FX_Address); String 150 nvarchar; sequence 10; Read Only checked. |
| Total rows | **13** (11 + 2). |
| Checkout / revision | Checked out to the operator; Revision Num 2; Revision Date 10/13/2026 (unchanged). |

Observations (observed, not judged):
- FX_CusName shares sequence `2` with FX_CustomerID (T4).
- FX_CusAddress takes sequence `10`, which NoteExistsFlag already has. The wizard assigned it without a visible conflict message. Intent is not established; the same kind of shared-sequence pattern was recorded for EXP-066-R2 (joined property sharing a base-column sequence). Recorded for the coordinator's review.

### Screenshot readings

- `t5-01` (before Finish): the IDO Property Wizard, Property Attributes page: Bind To `fxcus.FX_Address`; Property Name `FX_CusAddress`; Property Class blank; String; Length 150; nvarchar; Next greyed; Finish enabled; no message. **Proves** the configured state before the second Finish. **Does not prove** the stored binding or the SQL column.
- `t5-02` (after Finish; rows 1–8): IDOs tab, FX_Orders, Revision 2, Revision Date 10/13/2026, Locked By operator, Check In and Undo Check Out enabled; status bar `New Property (IDOs 1 of 1)`; Save greyed; rows 1–8 (FX_OrderNumber; FX_CusName with FX_Label, String, 100, nvarchar, Read Only checked; FX_CustomerID; FX_Item 50; FX_Count; CreatedBy; UpdatedBy; CreateDate). **Proves** the clean state, the checkout and the first eight rows at UI level. **Does not prove** rows 9–13 (see `t5-03`) or the persisted state.
- `t5-03` (after the view-only scroll; rows 6–13): RowPointer; **FX_CusAddress row 11** (Sequence 10; Bound to Column; FX_Address; 150; nvarchar clipped as `nvarc…`; Read Only checked); NoteExistsFlag (10); InWorkflow (11; Read Only Record column off-screen in the image; accessibility readback supplies the checked state). **Proves** rows 6–13 and the new row's binding and flags at UI level. **Does not prove** the Upper Case / Pseudo Key / Read Only Record columns beyond the accessibility readback, or persistence.

### Save state (budget)

- After Finish the Form was **clean** (toolbar Save disabled; no unsaved-change indication). **No Save was performed in T5.**
- Save budget: **0 of 1 used** (the conditional Save remains unused; it was not needed in T4 or T5).

### Action counts (T5 only)

| Operation | T5 |
|---|---|
| **New Property wizard (opened)** | **1** (budget 2; **both used after this step**) |
| **Finish** | **1** (second Finish; budget 2; **both used**) |
| Save | **0** (budget 1; 0 used) |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 |
| New Table / table wizard OK | 0 / 0 |
| Wizard Next | 1 |
| Strings, property classes, SQL, Forms, runtime records, existing property or table changes | 0 |
| IDOs Form close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Designer actions | 0 (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login; browser JavaScript; console; network; direct URL; refresh; restart | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted | **5 / 3** (untargeted: gate; after New Property; after Finish; after the Properties view; after the Tables view check; targeted: the wizard page-2 state, the Bind To readback, the Property Name readback) |
| `browser_find` | **2** (`fxcus` on the Tables view; `fxcus.FX_Address` before the option click) |
| Element clicks (successful / failed) | **7 / 0** (Tables sub-tab; New Property; Next; Bind To Open; the fxcus.FX_Address option; Finish; Properties sub-tab) |
| `browser_type` (succeeded / refused) | **1 / 0** (Property Name `FX_CusAddress`) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Waits | 0 |
| Mouse moves / wheel | 1 / 1 (view-only scroll of the Properties grid) |
| Screenshots | **3** (`t5-01`, `t5-02`, `t5-03`) |
| Ref-not-found / timeouts | 0 / 0 |
| Dialogs answered | 0 |

### Cumulative browser action audit (T1 to T5)

T1 to T4 figures are carried forward from their sections, unchanged.

| Operation | T1 to T4 | T5 | Cumulative (T1 to T5) | Budget status |
|---|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** | Check Out 1 of 1 used |
| **New Table** | 1 | 0 | **1** | 1 of 1 used (done) |
| **Table wizard OK** | 1 | 0 | **1** | 1 of 1 used (done) |
| Builder Add | 1 | 0 | **1** | — |
| **New Property wizard** | 1 | **1** | **2** | **2 of 2 used (exhausted)** |
| **Finish** | 1 | **1** | **2** | **2 of 2 used (one per property; exhausted)** |
| **Save** | 0 | 0 | **0** | **0 of 1 used (conditional; unused; still available)** |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 | **1 / 1** | 2 pairs allowed; **1 pair remaining (recovery, AC-6)** |
| Target F4 queries (FX_Orders) | 1 | 0 | **1** | 2 allowed; **1 remaining** |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | 1 each allowed; **all remaining (AC-7)** |
| Strings, classes, SQL, Forms, runtime records, existing IDO properties or base table (other than the join table and the two added properties) | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deployment | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | **0** | — |
| Element clicks (successful / failed) | 24 / 0 | 7 / 0 | **31 / 0** | — |
| Snapshots untargeted | 14 | 5 | **19** | — |
| Snapshots targeted (failed) | 14 (1 failed, T1) | 3 | **17 (1 failed, T1)** | — |
| `browser_find` | 6 | 2 | **8** | — |
| `browser_type` (succeeded / refused) | 5 / 0 | 1 / 0 | **6 / 0** | — |
| Key presses (Tab; F4; Enter; Escape) | 5 (Tab 4; F4 1) | 0 | **5**; Enter 0; Escape 0 | — |
| Waits | 1 | 0 | **1** | — |
| Mouse moves / wheel | 1 / 1 | 1 / 1 | **2 / 2** | — |
| Screenshots | 10 | 3 | **13** | — |
| `browser_tabs` list / select | 4 / 4 | 1 / 1 | **5 / 5** | — |
| Dialogs answered | 1 (T1 Select Form OK) | 0 | **1** | — |
| Native browser dialogs | 0 | 0 | **0** | — |

### Worker-written-file inventory (T5)

- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (edited: top status; AC-4 and AC-5 rows; this T5 section; next step).
- `evidence/EXP-078/t5-01-new-property-wizard-FX_CusAddress-before-finish.png` (created).
- `evidence/EXP-078/t5-02-post-finish-properties-inventory-top-rows-1-8.png` (created).
- `evidence/EXP-078/t5-03-post-finish-properties-inventory-scrolled-rows-6-13.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T15-43-23-284Z.yml`, `page-2026-10-13T15-44-01-131Z.yml`, `console-2026-10-13T15-42-38-615Z.log`) are tool-written, not worker-authored, and were not read as evidence.
- T1 to T4 files (`t1-01` to `t1-04`, `t2-01`, `t2-02`, `t3-01`, `t3-02`, `t4-01`, `t4-02`) are preserved unchanged.

No other repository file was written, edited or deleted in T5.

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t5-01-new-property-wizard-FX_CusAddress-before-finish.png` | IDO Property Wizard tab; Property Attributes page; Bind To `fxcus.FX_Address`; Property Name `FX_CusAddress`; Property Class blank; String; Length 150; nvarchar; Next greyed; Finish enabled | **AC-4 pre-Finish gate** for FX_CusAddress | The stored binding; the SQL column; that Finish persisted the property |
| `t5-02-post-finish-properties-inventory-top-rows-1-8.png` | IDOs tab, FX_Orders, Revision 2, Revision Date 10/13/2026, Locked By operator, Check In and Undo Check Out enabled; status `New Property (IDOs 1 of 1)`; Save greyed; rows 1–8 incl. FX_CusName (FX_Label, String 100 nvarchar, Read Only checked) | **AC-5**: clean Form; checkout; originals 1 to 8 and FX_CusName unchanged | Rows 9–13 (see `t5-03`); persistence |
| `t5-03-post-finish-properties-inventory-scrolled-rows-6-13.png` | Properties grid rows 6–13: RowPointer; **FX_CusAddress (row 11; Sequence 10; FX_Address; String 150; nvarchar clipped; Read Only checked)**; NoteExistsFlag; InWorkflow | **AC-4 response and AC-5 inventory** for the second property and the tail rows | Right-hand columns beyond the image (accessibility readback only); persistence |

Acceptance mapping: **AC-4** supported (FX_CusName by `t4-01`; FX_CusAddress by `t5-01`; responses by the readbacks in T4 and T5). **AC-5** supported (`t4-02`, `t5-02`, `t5-03`): clean Form, exactly two added properties with recorded bindings, types and Read Only, 11 originals unchanged, checkout to the operator. AC-6 to AC-8 not started.

### Knowledge state (T5)

| Finding | State |
|---|---|
| Bind To lookup offers `fxcus.FX_Address`; selecting it sets Property Name default `FX_Address` and types to String, 150, nvarchar | **observed** (one run; UI level) |
| The second New Property wizard with a plain name fill adds one Bound to Column property (column FX_Address) with no Property Class; Finish adds it with no message | **observed** (one run) |
| FX_CusAddress shows Read Only checked and Sequence 10 (shared with NoteExistsFlag) | **observed** (one run); the sequence intent is **unresolved** |
| The 11 original properties and FX_CusName are unchanged after the second Finish | **observed** (one run; readback comparison) |
| FX_Orders stays checked out at Revision 2 with the join intact | **observed** (one run) |
| Persistence across close/reopen; SQL column; the stored binding; durability; replay | **not established / not claimed** (AC-6 is a later task) |

---

## T6 — AC-6 IDOs recovery: clean close once; reopen once; one visible-criterion query; recovered Tables and 13-row inventory compared with baseline (cycle 5; AC-6 supported at same-session UI level)

- Task T6, cycle 5, worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`, task_message_id `488e1f9f-b5d8-4826-9319-fa602dc79ca8`, run `R-20261013-232454-0utz`. Date 2026-10-13.
- Scope (bounded instruction): pre-close gate; close the clean IDOs Form once through its Form-tab control; reopen IDOs / IdoCollections once through Form > Open > Select Form; ordinary Filter in Place (verified, not toggled); one visible-criterion query (type `FX_Orders`, Tab, pre-F4 capture, F4 once); recovered identity, Tables and inventory readbacks; comparison with the baseline. No checkout, wizard, Finish, Save, property or table change, runtime Form, or Designer action. IDOs left open.
- Sources: the T1 to T5 sections of this record (already read in full in earlier tasks); no additional source read was required for this step.

### Pre-close gate (Web Client; one untargeted snapshot; Tables sub-tab viewed)

| Check | Observed | Result |
|---|---|---|
| Tab list / select | Tab 0 Designer (current; not touched); select tab 1 (Mongoose, `favoriteContext=IdoCollections`) | Listed before the select |
| Identity | IDO `FX_Orders`; project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026` | Match |
| Checkout | Row checkbox checked; Locked By operator placeholder; Check In enabled; Undo Check Out enabled | Checked out to the operator |
| Save / dialogs | Save disabled; status bar `P&roperties` (not Filter in Place; not dirty); no dialog or banner | Clean |
| Properties (view; 13 rows) | FX_OrderNumber, FX_CusName, FX_CustomerID, FX_Item, FX_Count, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, FX_CusAddress, NoteExistsFlag, InWorkflow | 13 rows, as at T5 |
| Tables (view) | FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Orders / fxords / Primary Base / Inner | Two entries with the join, as at T3 and T5 |

Gate verdict: **verified.** The Form was clean, so the Form-tab close was authorised.

### Actions (T6, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer current; tab 1 Mongoose (`favoriteContext=IdoCollections`) | — |
| 2 | `browser_tabs` select tab 1; untargeted snapshot (gate) | Gate as above | snapshot (inline) |
| 3 | Tables sub-tab, one click (view only); `find` join text; untargeted snapshot | Two entries with the join | snapshot |
| 4 | **Close Panel IDOs** (Form-tab control), one click | No prompt, no dialog. The IDOs tab was removed; the FX_HelloWorld01 runtime tab became active (not acted on) | snapshot (untargeted) |
| 5 | Form menu, one click (ref from the untargeted snapshot in the same state) | Form menu open | `find` "Open" |
| 6 | **Form > Open**, one click (`menuitem` `Open`, ref f1e1197; the adjacent `Close and Save Changes` item was **not** clicked) | Select Form dialog opened; filter pre-filled `IdoCollections`; rows `G6RIdoCollectionSearch` and `IDOs / IdoCollections` | `find` "Select Form"; targeted snapshot |
| 7 | Row `IDOs / IdoCollections` (caption cell), one click | Row active; Filter By still `Name` | targeted snapshot |
| 8 | **Select Form OK**, one click | Reopened: `favoriteContext=IdoCollections`; IDOs tab active; no dialog | snapshot (untargeted) |
| 9 | Status bar check before any click | Status bar `Filter in Place`; IDO Name criterion active and blank. FiP was **not** clicked (already active) | snapshot (untargeted) |
| 10 | IDO Name criterion: `FX_Orders` typed once (one fill); **Tab once** | Criterion committed; echo row `FX_Orders` | — |
| 11 | **Screenshot `t6-01` before F4** | IDO Name `FX_Orders`; echo row `FX_Orders`; status `Filter in Place`; FiP icon on the IDOs tab; Tables sub-tab empty (fresh Form) | `t6-01` |
| 12 | **F4, one press** (the second and final authorised target query) | Query executed | — |
| 13 | Wait 3 s; untargeted snapshot (settled) | One record. Status `Description (IDOs 1 of 1)`. The Description field holds focus from F4 (caption prefix); no value typed | snapshot (inline) |
| 14 | **Screenshot `t6-02`** (recovered identity and Tables) | Identity and Tables as in the recovered readback below | `t6-02` |
| 15 | Properties sub-tab, one click (view only); untargeted snapshot | 13 rows | snapshot (inline) |
| 16 | **Screenshot `t6-03`** (rows 1–8) | Rows 1–8 | `t6-03` |
| 17 | Mouse move, then one wheel scroll (+300; view only); **screenshot `t6-04`** (rows 6–13) | Rows 6–13, including FX_CusAddress at row 11 | `t6-04` |

No retry on any step. No Escape. Enter was not pressed. No value was typed into any field other than the IDO Name criterion. The Save button was not clicked. The FX_Orders runtime Form was not opened. The Designer tab was not touched.

### Recovered readbacks (same session)

| Item | Recovered (T6) | Pre-close (T6 gate) | Baseline (T1) | Result |
|---|---|---|---|---|
| Record count (IDO Name FX_Orders) | 1 (`Description (IDOs 1 of 1)`) | 1 | 1 | Match |
| Project | `FX_HelloWorldProject01` | `FX_HelloWorldProject01` | `FX_HelloWorldProject01` | Match |
| Revision Num / Revision Date | `2` / `10/13/2026` | `2` / `10/13/2026` | `2` / `10/13/2026` | Match |
| Locked By / checkout | Operator placeholder; Check In and Undo Check Out enabled; row checkbox checked | Same | Checked in (blank; Check Out enabled) at T1; checked out to the operator since T2 | Match to the post-T2 state |
| Save | Disabled | Disabled | Disabled | Match |
| Label / Caption / Access As | `oFX_Orders` / `oFX_Orders` / `G6R` | Same | Same (T1) | Match |
| Tables | Two entries: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Orders / fxords / Primary Base / Inner | Two entries (same) | One entry: FX_Orders / fxords / Primary Base / Inner (T1); no fxcus | Match to the post-T3 state; fxcus added |
| Join text | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` (verbatim) | Same | — (no join at T1) | Match to the requested join |

### Recovered property inventory (13 rows; `t6-03`, `t6-04` and the accessibility readback)

| Row | Property Name | Seq | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | checked | unchecked |
| 2 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label (fxcus) | 0 | String | 100 | nvarchar | **checked** | unchecked | unchecked |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound, blank) | (blank) | (class-bound, blank) | unchecked | checked | unchecked |
| 4 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound, blank) | 50 | (class-bound, blank) | unchecked | checked | unchecked |
| 5 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | (blank) | int | unchecked | unchecked | unchecked |
| 6 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | checked | unchecked | unchecked |
| 7 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | checked | unchecked | unchecked |
| 8 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType | checked | unchecked | unchecked |
| 9 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType | checked | unchecked | unchecked |
| 10 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType | checked | unchecked | unchecked |
| 11 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address (fxcus) | 0 | String | 150 | nvarchar | **checked** | unchecked | unchecked |
| 12 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked | unchecked |
| 13 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType | unchecked | unchecked | **checked** |

Sequence values for the two new properties, as displayed (not edited): FX_CusName = **2**; FX_CusAddress = **10**.

### Baseline (T1) versus recovered inventory

| Comparison | Result |
|---|---|
| The 11 original properties (T1 names, sequence, class, property type, column, key sequence, data type, length, column type, and checkbox states) | **Unchanged** in the recovered grid. Rows 1, 3, 4, 5 and 6–13 (apart from the two added rows) match the T1 values in every readable field. |
| Added properties | **Exactly two**: FX_CusName (Bound to fxcus.FX_Label; String 100 nvarchar; Read Only checked) and FX_CusAddress (Bound to fxcus.FX_Address; String 150 nvarchar; Read Only checked). Neither has a Property Class. Required, Pseudo Key and Read Only Record are unchecked on both. |
| Total | **13** = 11 + 2 (the baseline was 11 at T1; 12 after FX_CusName at T4; 13 after FX_CusAddress at T5). |
| Recovered versus T5 post-Finish readback | **Identical** for all 13 rows (names, sequence, class, property type, column, key sequence, data type, length, column type and checkbox states). |

### Acceptance mapping (T6)

- **AC-6** supported at **same-session UI level only**: the clean close and reopen, the single recovery query, the identity, the Tables view with the join, and the 13-row inventory all match the post-change readbacks (T4, T5) and the baseline (T1) plus the two properties. Screenshots: `t6-01` (criterion before F4), `t6-02` (recovered identity and Tables), `t6-03` (rows 1–8), `t6-04` (rows 6–13).
- **AC-7** and **AC-8** are not started.

### Checkout and clean-state readbacks (T6)

- Checkout: checked out to the operator (Locked By the operator placeholder; row checkbox checked; Check In enabled; Undo Check Out enabled). FX_Orders stays checked out. No Check In, Undo Check Out or second Check Out was performed.
- Revision: Num `2`; Revision Date `10/13/2026`; unchanged across the close, reopen and query.
- Clean state: Save disabled after the query; no dialog; no unsaved-change indication. The Description field holds focus after F4 (caption prefix `Description` in the status bar); nothing was typed into it.

### Screenshot readings (T6)

- `t6-01-pre-f4-recovery-idos-fx-orders-criterion.png`: the reopened IDOs Form in Filter in Place; IDO Name `FX_Orders`; echo row `FX_Orders`; status bar `Filter in Place`; FiP icon on the IDOs tab; Check Out and Undo Check Out greyed in the blank Form. **Proves** the criterion before the target query. **Does not prove** the query result.
- `t6-02-recovered-tables-view-two-entries-join.png`: the IDOs tab after the query; project FX_HelloWorldProject01; Revision 2; Revision Date 10/13/2026; Locked By operator; Check In and Undo Check Out enabled; Save greyed; Tables sub-tab: row 1 FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; row 2 FX_Orders / fxords / Primary Base / Inner; status `Description (IDOs 1 of 1)`. **Proves** the recovered identity, checkout, and the two-entry Tables view with the join, at UI level. **Does not prove** the database state or the Description focus beyond the status text.
- `t6-03-recovered-properties-inventory-rows-1-8.png`: Properties sub-tab rows 1–8 (FX_OrderNumber; FX_CusName row 2 with FX_Label, String, 100, nvarchar, Read Only checked; FX_CustomerID; FX_Item; FX_Count; CreatedBy; UpdatedBy; CreateDate). **Proves** rows 1–8 at UI level. **Does not prove** rows 9–13 (see `t6-04`).
- `t6-04-recovered-properties-inventory-scrolled-rows-6-13.png`: rows 6–13 (CreatedBy/UpdatedBy/CreateDate/RecordDate/RowPointer; **FX_CusAddress row 11**: FX_Address, String, 150, nvarchar, Read Only checked; NoteExistsFlag; InWorkflow). **Proves** rows 6–13 and the new row's binding and flags at UI level. **Does not prove** the Read Only Record column beyond the accessibility readback, or persistence.

### Action counts (T6 only)

| Operation | T6 |
|---|---|
| **Check Out / Check In / Undo Check Out** | 0 / 0 / 0 |
| New Table / table wizard OK / builder Add | 0 / 0 / 0 |
| New Property wizard / Finish | 0 / 0 |
| **Save** | **0** |
| **IDOs Form close / reopen (recovery pair)** | **1 / 1** |
| **Target F4 query (recovery query; the second and final authorised target query)** | **1** |
| Runtime FX_Orders open / close / query | 0 / 0 / 0 |
| Strings, classes, SQL, Forms, runtime records, existing IDO properties or base table changes | 0 |
| Designer actions | 0 |
| Unloads / cache / FormSync / deployment | 0 |
| Re-logins | 0 |
| Element clicks (successful / failed) | **7 / 0** (Tables sub-tab; Close Panel IDOs; Form menu; Form > Open item; Select Form row; Select Form OK; Properties sub-tab) |
| Snapshots untargeted | **6** (gate; after Tables; after close; after OK; after F4; after Properties) |
| Snapshots targeted | **2** (Select Form dialog, both reads of the same ref; successful) |
| `browser_find` | **3** (join text; `Open` menu item; `Select Form`) |
| `browser_type` (succeeded / refused) | **1 / 0** (IDO Name criterion `FX_Orders`) |
| Key presses (Tab; F4; Enter; Escape) | **2** (Tab 1; F4 1); Enter 0; Escape 0 |
| Waits | **1** (3 s) |
| Mouse moves / wheel | **1 / 1** (view-only scroll of the Properties grid) |
| Screenshots | **4** (`t6-01` to `t6-04`) |
| `browser_tabs` list / select | **1 / 1** |
| Dialogs answered | **1** (Select Form OK) |
| Ref-not-found / timeouts | 0 / 0 |

### Cumulative browser action audit (T1 to T6)

T1 to T5 figures are carried forward from their sections, unchanged.

| Operation | T1 to T5 | T6 | Cumulative (T1 to T6) | Budget status |
|---|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** | Check Out 1 of 1 used |
| **New Table** | 1 | 0 | **1** | 1 of 1 used |
| **Table wizard OK** | 1 | 0 | **1** | 1 of 1 used |
| Builder Add | 1 | 0 | **1** | — |
| **New Property wizard** | 2 | 0 | **2** | **2 of 2 used (exhausted)** |
| **Finish** | 2 | 0 | **2** | **2 of 2 used (exhausted)** |
| **Save** | 0 | 0 | **0** | 0 of 1 used (conditional; unused) |
| **IDOs Form close / reopen (pairs)** | 1 / 1 | 1 / 1 | **2 / 2** | **2 of 2 pairs used (exhausted)** |
| **Target F4 queries (FX_Orders)** | 1 | 1 | **2** | **2 of 2 used (exhausted)** |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | 1 each allowed; **remaining for AC-7** |
| Strings, classes, SQL, Forms, runtime records, existing IDO properties or base table (other than the join table and the two added properties) | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deployment | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | **0** | — |
| Element clicks (successful / failed) | 31 / 0 | 7 / 0 | **38 / 0** | — |
| Snapshots untargeted | 19 | 6 | **25** | — |
| Snapshots targeted (failed) | 17 (1 failed, T1) | 2 | **19 (1 failed, T1)** | — |
| `browser_find` | 8 | 3 | **11** | — |
| `browser_type` (succeeded / refused) | 6 / 0 | 1 / 0 | **7 / 0** | — |
| Key presses (Tab; F4; Enter; Escape) | 5 (Tab 4; F4 1) | 2 (Tab 1; F4 1) | **7 (Tab 5; F4 2)**; Enter 0; Escape 0 | — |
| Waits | 1 | 1 | **2** | — |
| Mouse moves / wheel | 2 / 2 | 1 / 1 | **3 / 3** | — |
| Screenshots | 13 | 4 | **17** | — |
| `browser_tabs` list / select | 5 / 5 | 1 / 1 | **6 / 6** | — |
| Dialogs answered | 1 (T1 Select Form OK) | 1 (T6 Select Form OK) | **2** | — |
| Native browser dialogs | 0 | 0 | **0** | — |

Note on T1–T5 snapshot counts: carried as recorded in each section. The T1 section counted one ref-not-found (targeted snapshot) which was recovered.

### Worker-written-file inventory (T6)

- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (edited: top status; AC-6, AC-7 and AC-8 rows; this T6 section; next step; the T5 next-step block marked superseded).
- `evidence/EXP-078/t6-01-pre-f4-recovery-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-078/t6-02-recovered-tables-view-two-entries-join.png` (created).
- `evidence/EXP-078/t6-03-recovered-properties-inventory-rows-1-8.png` (created).
- `evidence/EXP-078/t6-04-recovered-properties-inventory-scrolled-rows-6-13.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T15-47-50-777Z`, `page-2026-10-13T15-48-13-915Z.yml`, `page-2026-10-13T15-49-10-624Z.yml`, `console-2026-10-13T15-47-50-777Z.log`) are tool-written, not worker-authored, and were not read as evidence.
- T1 to T5 files (`t1-01` to `t1-04`, `t2-01`, `t2-02`, `t3-01`, `t3-02`, `t4-01`, `t4-02`, `t5-01` to `t5-03`) are preserved unchanged.

No other repository file was written, edited or deleted in T6.

### Knowledge state (T6)

| Finding | State |
|---|---|
| The clean IDOs Form closed without a prompt and reopened through Form > Open > Select Form (`IDOs / IdoCollections`) in Filter in Place | **observed** (one run; same session) |
| One visible-criterion query recovers exactly one FX_Orders IDO (project FX_HelloWorldProject01; Revision 2; checked out to the operator; Save disabled) | **observed** (one run; UI level) |
| The recovered Tables view has the two entries and the join `fxcus.[FX_Code] = fxords.[FX_CustomerID]` | **observed** (one run; UI level) |
| The recovered inventory has 13 rows; the 11 originals match T1; FX_CusName and FX_CusAddress match their wizard bindings, types and Read Only state | **observed** (one run; UI and accessibility level) |
| The displayed sequence values (FX_CusName 2 shared with FX_CustomerID; FX_CusAddress 10 shared with NoteExistsFlag) persist unchanged across the recovery | **observed** (one run); the intent of the shared sequences is **unresolved** |
| The post-query Description focus is a focus caption only; no edit | **observed** (one run) |
| Persistence in the database, SQL state, stored binding, durability and replay | **not established / not claimed** (same-session UI recovery only) |

---

## T7 — AC-7: FX_Orders runtime Form closed once and reopened once; one blank-criteria query returns the two records (cycle 6; AC-7 supported at same-session UI level)

- Task T7, cycle 6, worker session `1122cb1c-7223-42b5-96b0-2be8986df1ce`, task_message_id `c5403bc2-4828-40e0-9ab1-24d088fbaa01`, run `R-20261013-232454-0utz`. Date 2026-10-13.
- Scope (bounded instruction): verify the recovered IDOs Form (clean; FX_Orders checked out; Revision 2) without closing, reopening or querying it; locate the FX_Orders runtime Form; verify it is clean, close it once; reopen it once through Form > Open > Select Form (verify the selected name); verify Filter in Place; one blank-criteria query (one F4); verify the two records; navigate only read-only if needed; no data entry or change; no checkout-management action; no Designer action; AC-8 not finalised.
- Sources: the T1 to T6 sections of this record (EXP-073 runtime rows and blank-criteria query were read in T1; the EXP-073 text was read in full earlier in this task family). No additional source read was required for this step.

### Gate (IDOs recovered Form; untouched in T7)

| Check | Observed | Result |
|---|---|---|
| Tab list / select | Tab 0 Designer (current; not touched); select tab 1 (Mongoose) | Listed before the select |
| IDOs (recovered, T6) | FX_Orders; `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; row checkbox checked; Locked By operator placeholder; Check In and Undo Check Out enabled; Save disabled; status `P&roperties`; 13 property rows; Tables two entries (read in T6) | Clean; checked out to the operator at Revision 2; not acted on in T7 |

### Actions (T7, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer current; tab 1 Mongoose (`favoriteContext=IdoCollections`) | — |
| 2 | `browser_tabs` select tab 1; untargeted snapshot | Recovered IDOs Form clean (gate above); tabs present: FX_Items, Property Classes, IDO Projects, FX_Orders (runtime), Sql Tables, Sql Columns, FX_HelloWorld01, IDOs (selected) | snapshot (inline) |
| 3 | **FX_Orders runtime tab heading**, one click (view only) | Runtime FX_Orders tab active (the Form was left from EXP-073 T5 with the two rows loaded, not from a placeholder); two records visible in the grid (1 / FX001 / dumbbell / 2; 2 / FX002 / eggs / 1); status `Customer ID (Object 1 of 2)`; Save **disabled**; no dialog; not dirty | snapshot (untargeted) |
| 4 | **Close Panel FX_Orders**, one click (the runtime Form was clean with Save disabled) | No prompt, no dialog. The FX_Orders tab was removed; the IDOs tab became active (clean; not acted on) | snapshot (untargeted) |
| 5 | Untargeted snapshot (refs for the Form menu) | IDOs Form clean (Save disabled; FX_Orders checked out; Revision 2) | snapshot (inline) |
| 6 | **Form menu**, one click | Menu open (`Open`; `Close and Save Changes`; …) | `find` "Open" |
| 7 | **Form > Open**, one click (`menuitem` `Open`; the adjacent `Close and Save Changes` was **not** clicked) | Select Form dialog opened; filter pre-filled `IdoCollections`; rows `G6RIdoCollectionSearch` and `IDOs / IdoCollections` | `find` "Select Form"; targeted snapshot |
| 8 | Filter field replaced with `FX_Orders` (one fill), then **Tab** once | One row: caption `FX_Orders`, name `FX_Orders`. No FX_HelloWorld01 or other Form listed | targeted snapshot |
| 9 | Row caption cell `FX_Orders`, one click | Row active; Filter By still `Name` | targeted snapshot |
| 10 | Dialog re-read before confirmation (selected name verified) | Row `FX_Orders` / `FX_Orders` active; filter `FX_Orders`; OK available | targeted snapshot |
| 11 | **Select Form OK**, one click | Reopened: `favoriteContext=FX_Orders`; runtime FX_Orders tab active | snapshot (untargeted) |
| 12 | Untargeted snapshot of the reopened runtime Form (pre-F4 state) | Add-mode placeholder shown: Order Number `3` (focused), Count `1`, Customer ID and Item blank; status `Order Number (Object 1 of 1)`; Save **disabled**. **Filter in Place was not active** (the reopened runtime did not open in FiP; contrast with the IDOs Form, which did) | snapshot (untargeted) |
| 13 | **Filter in Place** toolbar button (`FiP`), one click (after verifying FiP was off) | FiP active; status `Filter in Place`; all four criteria blank | targeted snapshot (`FX_Orders` panel); `find` "Filter in Place" |
| 14 | **Screenshot `t7-01`** (pre-F4 criteria) | Filter in Place; blank criteria; FiP icon on the FX_Orders tab; Save disabled | `t7-01` |
| 15 | **F4, one press** (the single runtime query) | Query executed | — |
| 16 | Wait 3 s; untargeted snapshot (settled) | **Two records**: row 1 `1 / FX001 / dumbbell / 2`; row 2 `2 / FX002 / eggs / 1`. Status `Customer ID (Object 1 of 2)`. Order Number textbox `1`; Customer ID `FX001` (focused by the query, nothing typed); Item `dumbbell`; Count `2`. FiP **off** after the query. Save **disabled** | snapshot (untargeted) |
| 17 | **Screenshot `t7-02`** (post-F4; record 1 detail) | Record 1 detail; status `Customer ID (Object 1 of 2)`; Save greyed | `t7-02` |
| 18 | **Row-header 2**, one click (ordinary read-only navigation, because the grid clips record 2's data cells in the image) | Record 2 current: Order Number `2`; Customer ID `FX002`; Item `eggs`; Count `1`; status `(Object 2 of 2)`; Save disabled | targeted snapshot (`FX_Orders` panel) |
| 19 | **Screenshot `t7-03`** (record 2 detail) | Record 2 detail; status `(Object 2 of 2)`; Save greyed | `t7-03` |
| 20 | **Row-header 1**, one click (return to record 1; read-only navigation) | Record 1 current again: `(Object 1 of 2)`; FX001 / dumbbell / 2; Save disabled | snapshot (untargeted) |

No retry on any step. No Escape. Enter was not pressed. The only typed entry was the Select Form filter (`FX_Orders`) — not a record field. No record field was edited. The Save button was not clicked. No Check Out, Check In, Undo Check Out or other checkout action was taken. The recovered IDOs Form was not closed, reopened or queried. The Designer tab was not touched.

### Runtime readbacks (AC-7)

| Item | Observed | Expected (brief / EXP-073) | Result |
|---|---|---|---|
| Form identity at reopen | `favoriteContext=FX_Orders`; Select Form row `FX_Orders` / `FX_Orders` verified before OK | FX_Orders | Match |
| Reopen state before FiP | Add-mode placeholder (Order Number `3`, Count `1`, blank Customer ID and Item); status `Order Number (Object 1 of 1)`; Save disabled; FiP inactive | — (the brief leaves the reopen state to observation) | Observed; the placeholder was not saved |
| Filter in Place after FiP | `Filter in Place` status; FiP active; blank criteria | Blank criteria | Match |
| Record count after one F4 | **2** (`Customer ID (Object 1 of 2)` after the query) | Exactly 2 | Match |
| Record 1 | Order Number `1`; Customer ID `FX001`; Item `dumbbell`; Count `2` | 1 / FX001 / dumbbell / 2 | Match |
| Record 2 | Order Number `2`; Customer ID `FX002`; Item `eggs`; Count `1` (read by row-header navigation; `(Object 2 of 2)`) | 2 / FX002 / eggs / 1 | Match |
| Save | Disabled before the query, after the query, after record 2, and after returning to record 1 | Disabled | Match |
| Dirty / unsaved change | None (Save disabled; no edit) | Clean | Match |
| Records created, saved or deleted | 0 | 0 | Match |

### Screenshot readings (T7)

- `t7-01-runtime-pre-f4-filter-in-place-blank-criteria.png`: FX_Orders tab with FiP icon; status bar `Filter in Place`; Order Number, Customer ID, Item and Count blank; one placeholder row number `1` in the grid; Save greyed. **Proves** the pre-F4 criteria state and the Filter in Place mode. **Does not prove** the query result.
- `t7-02-runtime-post-f4-two-records-save-disabled.png`: FX_Orders tab; row headers `1` and `2`; record 1 detail (Order Number `1` grey; Customer ID `FX001` highlighted by focus; Item `dumbbell`; Count `2`); status `Customer ID (Object 1 of 2)`; Save greyed. **Proves** that the query returned two rows and that record 1 is current with Save disabled. **Does not prove** the record 2 data cells (clipped; see `t7-03` and the accessibility readback) or any database state.
- `t7-03-runtime-record-2-FX002-eggs-count-1.png`: FX_Orders tab; row headers `1` and `2` (row 2 current); record 2 detail (Order Number `2` grey; Customer ID `FX002`; Item `eggs`; Count `1`); status `(Object 2 of 2)`; Save greyed. **Proves** record 2's values and Save disabled at UI level. **Does not prove** persistence or the database state.

Acceptance mapping: **AC-7** supported by `t7-01` to `t7-03` and the runtime readbacks above (close and reopen once; one blank-criteria query; exactly 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1; Save disabled; nothing changed).

### Action counts (T7 only)

| Operation | T7 |
|---|---|
| **Check Out / Check In / Undo Check Out** | 0 / 0 / 0 |
| New Table / table wizard OK / builder Add | 0 / 0 / 0 |
| New Property wizard / Finish | 0 / 0 |
| **Save** | **0** |
| **IDOs Form close / reopen** | **0 / 0** (the recovered IDOs Form was not touched) |
| **Target F4 query (FX_Orders IDO)** | **0** |
| **Runtime FX_Orders Form close / reopen** | **1 / 1** |
| **Runtime blank-criteria query (F4)** | **1** |
| Record edits / record create / record delete | 0 / 0 / 0 |
| Strings, classes, SQL, Forms, runtime records, IDO or property or base-table changes | 0 |
| Designer actions | 0 |
| Unloads / cache / FormSync / deployment | 0 |
| Re-logins | 0 |
| Element clicks (successful / failed) | **9 / 0** (FX_Orders tab heading; Close Panel FX_Orders; Form menu; Form > Open item; Select Form row; Select Form OK; FiP; row header 2; row header 1) |
| Snapshots untargeted | **6** (start; after the tab click; after the close; after OK; after F4; after returning to record 1) |
| Snapshots targeted | **5** (dialog ×3; the runtime panel after FiP; the runtime panel for record 2) |
| `browser_find` | **3** (`Open` menu item; `Select Form`; `Filter in Place`) |
| `browser_type` (succeeded / refused) | **1 / 0** (Select Form filter `FX_Orders`) |
| Key presses (Tab; F4; Enter; Escape) | **2** (Tab 1; F4 1); Enter 0; Escape 0 |
| Waits | **1** (3 s) |
| Mouse moves / wheel | 0 / 0 |
| Screenshots | **3** (`t7-01`, `t7-02`, `t7-03`) |
| `browser_tabs` list / select | **1 / 1** |
| Dialogs answered | **1** (Select Form OK) |
| Ref-not-found / timeouts | 0 / 0 |

### Cumulative browser action audit (T1 to T7)

T1 to T6 figures are carried forward from their sections, unchanged.

| Operation | T1 to T6 | T7 | Cumulative (T1 to T7) | Budget status |
|---|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** | Check Out 1 of 1 used |
| **New Table** | 1 | 0 | **1** | 1 of 1 used |
| **Table wizard OK** | 1 | 0 | **1** | 1 of 1 used |
| Builder Add | 1 | 0 | **1** | — |
| **New Property wizard** | 2 | 0 | **2** | 2 of 2 used |
| **Finish** | 2 | 0 | **2** | 2 of 2 used (one per property) |
| **Save** | 0 | 0 | **0** | 0 of 1 used (conditional; unused) |
| **IDOs Form close / reopen (pairs)** | 2 / 2 | 0 / 0 | **2 / 2** | 2 of 2 pairs used |
| **Target F4 queries (FX_Orders IDO)** | 2 | 0 | **2** | 2 of 2 used |
| **Runtime FX_Orders close / reopen** | 0 / 0 | 1 / 1 | **1 / 1** | 1 of 1 used |
| **Runtime blank-criteria queries** | 0 | 1 | **1** | 1 of 1 used |
| Strings, classes, SQL, Forms, runtime records, IDO or property or base-table changes (other than the join table and the two added properties) | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deployment | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | **0** | — |
| Element clicks (successful / failed) | 38 / 0 | 9 / 0 | **47 / 0** | — |
| Snapshots untargeted | 25 | 6 | **31** | — |
| Snapshots targeted (failed) | 19 (1 failed, T1) | 5 | **24 (1 failed, T1)** | — |
| `browser_find` | 11 | 3 | **14** | — |
| `browser_type` (succeeded / refused) | 7 / 0 | 1 / 0 | **8 / 0** | — |
| Key presses (Tab; F4; Enter; Escape) | 7 (Tab 5; F4 2) | 2 (Tab 1; F4 1) | **9 (Tab 6; F4 3)**; Enter 0; Escape 0 | — |
| Waits | 2 | 1 | **3** | — |
| Mouse moves / wheel | 3 / 3 | 0 / 0 | **3 / 3** | — |
| Screenshots | 17 | 3 | **20** | — |
| `browser_tabs` list / select | 6 / 6 | 1 / 1 | **7 / 7** | — |
| Dialogs answered | 2 | 1 | **3** | — |
| Native browser dialogs | 0 | 0 | **0** | — |

Note on the F4 count: the F4 key presses total 3 = one target query in T1, one target query in T6 (the two-query target budget), and one runtime query in T7 (its own budget, not a target query). The IDOs Form reopened in Filter in Place in both T1 and T6, so no F4 was spent entering that mode.

### Worker-written-file inventory (T7)

- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (edited: top status; AC-7 row; this T7 section; next step; the T6 next-step block marked superseded).
- `evidence/EXP-078/t7-01-runtime-pre-f4-filter-in-place-blank-criteria.png` (created).
- `evidence/EXP-078/t7-02-runtime-post-f4-two-records-save-disabled.png` (created).
- `evidence/EXP-078/t7-03-runtime-record-2-FX002-eggs-count-1.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `console-2026-10-13T15-53-05-506Z.log`, `page-2026-10-13T15-53-16-696Z.yml`, `page-2026-10-13T15-54-46-312Z.yml`, `page-2026-10-13T15-55-21-019Z.yml`) are tool-written, not worker-authored, and were not read as evidence.
- T1 to T6 files (`t1-01` to `t1-04`, `t2-01`, `t2-02`, `t3-01`, `t3-02`, `t4-01`, `t4-02`, `t5-01` to `t5-03`, `t6-01` to `t6-04`) are preserved unchanged.

No other repository file was written, edited or deleted in T7.

### Knowledge state (T7)

| Finding | State |
|---|---|
| The clean runtime FX_Orders Form closed without a prompt and reopened through Form > Open > Select Form (dialog row verified before OK) | **observed** (one run; same session) |
| The runtime reopened in add mode with an unsaved placeholder (Order Number `3`) and Filter in Place inactive, unlike the IDOs Form (which reopened in FiP) | **observed** (one run); cause **unresolved** |
| One blank-criteria query in Filter in Place returns exactly two records: 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1 | **observed** (one run; UI and accessibility level) |
| The placeholder (Order Number `3`) is not a saved record; the query removed it; no third row appeared | **observed** (one run) |
| Save stayed disabled throughout; no record was edited, saved or deleted | **observed** (one run) |
| The recovered IDOs Form (T6) was left open and clean, FX_Orders checked out at Revision 2 | **observed** (one run; gate readback) |
| Database persistence of the two records, the runtime's data source, durability, replay | **not established / not claimed** (same-session UI recovery; no database read) |

## Next permitted step

**Superseded by T8: AC-8 is complete** (see the T8 section and `evidence/EXP-078/T8-final-acceptance-report.md`). The rest of this T7 block is historical; the T8 section records what was done. The final EXP-078 report (documentation only; no browser action) was the step under T8's own authorisation. It consolidates AC-1 to AC-7, the complete action audit (Check Out 1; one New Table; one wizard OK; two property wizards; two Finishes; Save 0 of 1; two IDOs close/reopen pairs; two target queries; one runtime close/reopen and query; zero strings, classes, SQL, Form or record changes; zero Designer actions; zero unloads; re-login 0), the baseline and recovered inventories, the worker-written-file inventory and the final state. Operator git review remains authoritative for repository confinement. Remaining browser budgets after T7: none for the experiment's named mutations; Save 0 of 1 (conditional, unused). FX_Orders stays checked out. No Check In, Undo Check Out, second Check Out, wizard, Finish, close/reopen, query, record edit or Designer action is permitted by T7.

## T8 — final acceptance review and report (documentation only; AC-8 SUPPORTED; zero browser calls)

**Scope.** Read-only review of this record, the seven harness audits (`harness-audit-T1.md` to `harness-audit-T7.md`) and the cited evidence files. Writes: `evidence/EXP-078/T8-final-acceptance-report.md` (created) and this record (edited). **Browser actions: 0** (no tab list or select, snapshot, find, screenshot, wait, click, type, key press, mouse, dialog or navigation). Mongoose changes: 0. Designer actions: 0. Unloads: 0. Re-logins: 0.

**Acceptance (T8 reconciliation; detail in the report, §5).**

| AC | T8 result | Principal evidence |
|---|---|---|
| AC-1 | SUPPORTED (as recorded in T1; paths and harness rows re-checked) | `t1-01` to `t1-04`; harness rows 11–37 |
| AC-2 | SUPPORTED (one Check Out; harness row 11) | `t2-01`, `t2-02` |
| AC-3 | SUPPORTED (one New Table row 4; one OK row 28; builder Add row 24) | `t3-01`, `t3-02` |
| AC-4 | SUPPORTED (two wizards, two Finishes: rows 6/18 and 7/19) | `t4-01`, `t5-01` (before Finish); `t4-02`, `t5-02`, `t5-03` (after) |
| AC-5 | SUPPORTED (13 rows; two added, Read Only checked; 11 originals unchanged; checked out to operator; Save 0) | `t4-02`, `t5-02`, `t5-03`; report §4 |
| AC-6 | SUPPORTED, same session (close row 7, reopen rows 9–16, query rows 18–22) | `t6-01` to `t6-04` |
| AC-7 | SUPPORTED, same session (close row 6, reopen rows 8–18, FiP row 20, query row 24, record 2 row 30, return row 33) | `t7-01` to `t7-03` |
| AC-8 | SUPPORTED by the report | `evidence/EXP-078/T8-final-acceptance-report.md` |

**Cumulative counts (T1–T7; reconciled to the harness audits: 77 actions, 100 reads).** Check Out 1 (T2 row 11); Check In 0; Undo Check Out 0; New Table 1 (T3 row 4); wizard OK 1 (T3 row 28); builder Add 1 (T3 row 24); New Property wizards 2 (T4 row 6; T5 row 7); Finish 2 (T4 row 18; T5 row 19); Save 0 of 1 (no Save in any audit); IDOs close/reopen pairs 2 (T1 rows 16 and 26–28; T6 rows 7 and 14–16); target F4 queries 2 (T1 row 34; T6 row 22); runtime close/reopen 1 and 1 (T7 row 6; reopen rows 8–18); runtime blank-criteria F4 1 (T7 row 24; FiP row 20); strings, classes, SQL, Forms, runtime records changed 0; Designer 0 (worker statement; the harness does not record the tab index); unloads 0; re-logins 0. Flagged `browser_type` 8 across T1 to T7; all eight were brief-authorised typed fields (Table Name, Table Alias, two Property Names, two IDO Name criteria, two Select Form filters), and no script or evaluate call appears in any audit.

**Corrections recorded in T8.**

- **C1 — waits.** Harness waits: T1 1 (row 35), T2 1 (row 12), T3 0, T4 0, T5 0, T6 1 (row 23), T7 1 (row 25). **Total 4.** The single cause of the record's undercount is that the T2 wait is missing from every cumulative waits row from T3 onward. Those rows should read: T3 total 2, T4 total 2, T5 total 2, T6 total 3 (cumulative before T6 should be 2), T7 total 4 (cumulative before T7 should be 3, not 2). The T2 table itself is correct (waits 1; cumulative 2 with T1).
- **C2 — T5 status text.** The T5 decisive-evidence rows for `t5-02` and `t5-03` give the status as `New Property (IDOs 1 of 1)`. Both images show `P&roperties` in the status bar. `New Property (IDOs 1 of 1)` is the post-Finish accessibility readback; it is not visible in those two captures. `t4-02` does show `New Property (IDOs 1 of 1)`. The AC-4 and AC-5 conclusions do not depend on the status text.
- **C3 — undisclosed tool errors.** T1: a Read of this record before it existed (harness row 4; non-browser; the record was then created). T3: an Edit whose old string was not found (harness row 33; non-browser; retried with the exact surrounding text and succeeded). Neither touched Mongoose. The T3 section did not mention the failed Edit; it is disclosed here.

**Inventory comparison.** Baseline (T1): 11 rows, Sequence 1 to 11. Final (T5) and recovered (T6): 13 rows; FX_CusName (Sequence 2; Bound to `fxcus.FX_Label`; String 100 nvarchar; Read Only checked) and FX_CusAddress (Sequence 10; Bound to `fxcus.FX_Address`; String 150 nvarchar; Read Only checked) added; the 11 originals unchanged. Tables: baseline 1 entry; final and recovered 2 entries with the join `fxcus.[FX_Code] = fxords.[FX_CustomerID]`. Full table in the report §4.

**Open items (observed; not resolved; not caused by this task).**
- O1: duplicate Sequence values. FX_CusName shares Sequence 2 with FX_CustomerID; FX_CusAddress shares Sequence 10 with NoteExistsFlag. Intent unknown. Operator decision before EXP-079 if it matters.
- O2: the harness does not record whether a snapshot had a target, so the worker's 31 untargeted and 24 targeted split cannot be verified from the audits. The total of 55 snapshots is verified.
- O3: the IDOs Form reopened in Filter in Place (T1, T6); the runtime reopened in add mode, not in Filter in Place (T7). Cause unknown.
- O4: the runtime reopen showed an add-mode placeholder, Order Number 3, not saved. This record (T2 knowledge state) cites EXP-073 T5 for the same display. Source unknown; the query removed it.
- O5: the IDOs tab closed in T1 (harness row 16) is identified as FX_HelloWorld01 by the worker's readback only; the audit row does not name the IDO.

**Final state (as recorded in T7; not re-inspected in T8).** FX_Orders runtime Form active, clean, Save disabled, record 1 current (`Customer ID (Object 1 of 2)`), values 1 / FX001 / dumbbell / 2. Recovered IDOs Form open behind it, clean, FX_Orders checked out to the operator at Revision 2 (Revision Date 10/13/2026); two Tables entries; 13 properties. No dialog open. Web Designer tab not selected or snapshotted by the worker (tab index 1 used throughout; harness does not record indices).

**Worker-written files in T8.** `evidence/EXP-078/T8-final-acceptance-report.md` (created); this record (edited: top status; AC-8 row; the T7 next-step pointer; this section). Tool- or harness-written and not worker-authored: `evidence/EXP-078/harness-audit-T1.md` to `harness-audit-T7.md`; Playwright snapshot and console files under `evidence\playwright\`. Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

**Knowledge state.** No finding promoted. All findings remain **observed** (one run; UI and accessibility level; same session). Database persistence, durability, generated SQL, server-side join validity and replay verification are **not established and not claimed**. No candidate procedure has been promoted from EXP-078.

**Recommendation.** ACCEPTED AS OBSERVED for AC-1 to AC-8, with the qualifications above. Coordinator and operator decide acceptance. Next permitted step for EXP-078: none under T8. EXP-079 (FX_Items join, FX_Itms properties) needs its own authorisation; the operator may wish to decide O1 first.

## Superseded next-step text (T6)

**AC-7 and AC-8 (not authorised by T6).** The next task (under its own authorisation) starts with a fresh untargeted snapshot of the Web Client (tab list before the select). It then performs the one FX_Orders runtime close/reopen (close the clean FX_Orders runtime Form once through its Form-tab control if open and clean; reopen once through Form > Open > Select Form) and one blank-criteria query (Filter in Place, blank criteria, one F4), verifying the two rows 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1 with Save disabled and no change. Then the final report (AC-8). Remaining budgets after T6: runtime close/reopen/query 1 each; Save 0 of 1 (conditional, unused). FX_Orders stays checked out. The IDOs recovery pair and the second target query are used. No Check In, Undo Check Out, second Check Out, wizard, Finish, Designer action or edit is permitted by T6.

## Superseded next-step text (T5)

**Recovery and runtime (not authorised by T5).** Both property wizards and both Finishes are now used, and the Save budget is unused (0 of 1). The IDOs Form is left open and clean. The next task starts with a fresh snapshot, confirms the state above, and then performs the one recovery close/reopen of the IDOs Form (AC-6) and the one visible-criterion query, followed by the one FX_Orders runtime close/reopen and blank-criteria query (AC-7), under that task's own authorisation. Remaining budgets after T5: IDOs close/reopen pair 1; target F4 query 1; runtime close/reopen/query 1 each; Save 0 of 1 (conditional, unused). FX_Orders stays checked out. No Check In, Undo Check Out, second Check Out, property wizard, Finish, Designer action or edit is permitted by T5.

## Superseded next-step text (T4)

**FX_CusAddress and the remaining checks (not authorised by T4).** The next task starts with a fresh snapshot of the Web Client (tab list before the select), confirms the IDOs Form shows FX_Orders with 12 properties including FX_CusName, Save disabled and checked out to the operator, and then runs the FX_CusAddress New Property wizard once (Bound; Bind To `fxcus.FX_Address`; Property Name `FX_CusAddress`; Property Class blank; Finish once), under that task's own authorisation. Remaining budgets after T4: New Property 1; Finish 1; Save 0 of 1 (conditional); IDOs close/reopen pairs 1; target F4 queries 1; runtime close/reopen/query 1 each. FX_Orders stays checked out. No Check In, Undo Check Out, second Check Out, close/reopen, runtime action or Designer action is permitted by T4.

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 sections 1-2a are complete: FX_Orders now joins the customer table. The operator decided acceptance; auto-accept was not renewed for Part 5.

- Run R-20261013-232454-0utz completed as accepted after 8 worker tasks, with no pauses.
- Changed, for later cleanup (IDO `FX_Orders`, tenant-wide):
  - **Check Out:** one, with no confirmation. FX_Orders is checked out to the operator, revision 2 (unchanged). It stays checked out: no Check In and no Undo Check Out.
  - **Table added:**

    | Table | Alias | Type | Join | Join text |
    |---|---|---|---|---|
    | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |

  - **Properties added** (Bound to Column, no property class, Read Only ticked by Mongoose):

    | Property | Bound to | Data type | Sequence |
    |---|---|---|---|
    | FX_CusName | fxcus.FX_Label | String 100 | 2 |
    | FX_CusAddress | fxcus.FX_Address | String 150 | 10 |

    FX_Orders now has 13 properties.
- Screenshots viewed by the operator assistant:
  - `t3-01`: the IDO Table Wizard before OK, with the values above; the join builder shows FX_Code = FX_Orders (fxords) FX_CustomerID.
  - `t6-02`: after the recovery close/reopen, the Tables view lists FX_HelloWorld01 fxcus (Secondary, Left Outer, the join text above) and FX_Orders fxords (Primary Base, Inner). Locked By is the operator, revision 2.
  - `t6-03` and `t6-04`: after the recovery close/reopen, the property rows for FX_CusName (FX_Label, String 100, sequence 2) and FX_CusAddress (FX_Address, String 150, sequence 10), both Read Only.
  - `t7-02` and `t7-03`: after the runtime close/reopen and a blank-criteria query, FX_Orders shows 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1, "(Object n of 2)", Save disabled.
- Operator decisions on the T8 open items (none changed metadata or data):
  1. **O1, duplicate sequences:** FX_CusName shares Sequence 2 with FX_CustomerID, and FX_CusAddress shares 10 with NoteExistsFlag. Accepted and left unchanged.
  2. **O2, the snapshot split, and O6, the tab index:** these rest on the worker's statements only.
  3. **O3, Filter in Place:** the IDOs Form reopened in Filter in Place mode, while the runtime Form reopened in add mode.
  4. **O4:** the runtime placeholder showed Order Number 3.
  5. **O5, flagged typed entries:** all were authorized fields: IDO Name ×2, Table Name, Table Alias, Property Name ×2 and Select Form filter ×2.
  6. **O7:** the IDOs tab closed in T1 showed FX_HelloWorld01.
- Counts: Check Out 1; tables added 1; join OK 1; property wizards 2; Finishes 2; Saves 0 (the conditional Save was not needed); IDOs close/reopen 1 (recovery); runtime close/reopen 1; Designer actions 0; unloads 0; data edits 0; re-logins 0.
- Findings (observed):
  1. **Joined properties are read-only by default:** the New Property wizard marks properties bound to a Secondary-table column as Read Only.
  2. **Sequence numbers can repeat:** a new joined property may take a Sequence number that another property already has.
  3. **Wizard inference:** the wizard infers each type and length from the joined column (FX_Label String 100, FX_Address String 150).
  4. **Check Out:** it gives no confirmation and leaves the revision unchanged. This is the second observation.
- Limits: the result is same-session UI evidence only. The join's runtime effect (customer names on the Orders Form) is not yet shown, because the Form has no field for it.
- Confinement (git status): only `evidence/EXP-078/` and this record were written by the run.
- Next: Part 5 Section 2b. Join FX_Items with alias fxitms on `fxitms.FX_Item = fxords.FX_Item`, and add FX_ItmsDescription, FX_ItmsCost (class FX_Cost) and FX_ItmsPicture (class FX_Picture). FX_Orders is already checked out.
