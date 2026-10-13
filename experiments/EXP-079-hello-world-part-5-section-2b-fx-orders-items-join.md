# EXP-079 — Hello World Part 5 Section 2b: join FX_Items (alias fxitms) to the FX_Orders IDO and add FX_ItmsDescription, FX_ItmsCost and FX_ItmsPicture

**CURRENT STATUS (after T10, 2026-10-14): T10 COMPLETE. FINAL ACCEPTANCE REPORT WRITTEN: `evidence/EXP-079/T10-final-acceptance-report.md`. RECOMMENDATION: ACCEPTED AS OBSERVED for AC-1 to AC-6, subject to the operator's review of the audit corrections and limitations listed in the report (same session; UI and accessibility level; not database durability; not replay verified). T10 made zero browser calls and zero Mongoose changes.**

**Earlier status (after T9, 2026-10-14): T9 COMPLETE. AC-6 SUPPORTED AS OBSERVED (same session; UI and accessibility level; not database durability; not replay verified).** The FX_Orders runtime Form was **absent** at T9 start (the T4 session recovery had removed the earlier Form tabs; only the IDOs tab was open), so the conditional runtime close was **not applicable: runtime close count 0**. The runtime Form was opened once through Form > Open > Select Form (filter `FX_Orders`; one row `FX_Orders / FX_Orders`; no search Form), Filter in Place was activated once with the visible FiP control (the status bar read `Order Number (Object 1 of 1)` before FiP), the blank criteria were captured before F4, and one F4 returned exactly two rows: **1 / FX001 / dumbbell / 2** and **2 / FX002 / eggs / 1**, with Save disabled and nothing changed. The IDOs Form is still open and clean. The runtime Form is open, clean and unedited (Save disabled). AC-7 (the final report) is reserved for a separate documentation-only task.

**Earlier status (after T8, 2026-10-14): T8 COMPLETE. AC-5 SUPPORTED AS OBSERVED (same session; UI and accessibility level; not database durability; not replay verified).** T8 closed the clean IDOs Form once (Form-tab control; no prompt), reopened `IDOs / IdoCollections` once through Form > Open > Select Form (exact row; `G6RIdoCollectionSearch` not selected), and ran one visible-criterion FX_Orders query (criterion typed once, Tab-committed, captured before F4, F4 once). That consumed the third and final operator-authorized target query and the second and final IDOs close/reopen pair. The recovered state matches the baseline plus the join and the three properties: one FX_Orders row, Revision Num 2, checked out to the operator (Check In and Undo Check Out enabled), Save disabled; Tables view has exactly three entries with both joins; the Properties grid has exactly 16 Bound rows (the 13 originals unchanged against T1, FX_ItmsDescription, FX_ItmsCost and FX_ItmsPicture as recorded in T3, T6 and T7). The IDOs Form is open and clean. **Not done (reserved for the separately authorized runtime check, AC-6):** the FX_Orders runtime Form close/reopen and blank-criteria query. The final report (AC-7) follows AC-6.

**Earlier status (after T7, 2026-10-14): T7 COMPLETE. ALL THREE PROPERTIES ADDED; AC-3 SUPPORTED AS OBSERVED FOR THE THREE WIZARDS (observed; UI and accessibility level; same session; not database durability; not replay verified).** T7 opened the New Property wizard once (the third and final authorized opening), bound `FX_ItmsPicture` to `fxitms.FX_Picture`, replaced the auto-filled name with one plain fill, selected the exact `FX_Picture` class once (the look-alike `G6RPiture` was present in the lookup and was not selected), and verified Binary, Length -1, varbinary with all inherit boxes checked. Finish was invoked once with no message. The Properties grid now has exactly 16 rows: the 13 originals unchanged, FX_ItmsDescription, FX_ItmsCost, and FX_ItmsPicture (Bound to Column `FX_Picture` through fxitms, Property Class FX_Picture, sequence 12). FX_Orders remains checked out to the operator at Revision Num 2. Save is disabled, so the Form is clean and no Save was needed. Not done in T7 (reserved for AC-5 and the runtime check): the clean IDOs close/reopen pair, the third target query, and the runtime blank-criteria check. Next permitted step: the recovery pair and the third target query under their own authorization.

**Earlier status (after T6, 2026-10-14): T6 COMPLETE. AC-3 PARTIAL (FX_ItmsDescription and FX_ItmsCost supported; observed; UI and accessibility level; same session; not database durability; not replay verified).** T6 opened the New Property wizard once, bound `FX_ItmsCost` to `fxitms.FX_Cost` with Property Class `FX_Cost` (selected once), verified Decimal 18 / decimal with all inherit checkboxes checked, and invoked Finish once with no message. The Properties inventory now has exactly 15 rows: the 13 originals unchanged, FX_ItmsDescription unchanged, and FX_ItmsCost (Bound to Column `FX_Cost` through fxitms, Property Class FX_Cost, sequence 3). Save remains disabled (no Save performed). FX_Orders is still checked out to the operator at Revision Num 2. Not done in T6: FX_ItmsPicture (AC-3 remains partial), the IDOs close/reopen recovery pair, the third target query, and the runtime check. Next permitted step: the FX_ItmsPicture wizard (class FX_Picture), under its own authorization.

**Earlier status (after T5, 2026-10-14): T5 COMPLETE. POST-SESSION-RECOVERY GATE PASSED (read-only; observed; UI and accessibility level; same session).** A fresh IDOs Form was opened once through Form > Open > Select Form (exact `IDOs / IdoCollections`; `G6RIdoCollectionSearch` was not selected). One FX_Orders target query (F4 once; the second of the two permitted target queries) returned exactly one FX_Orders IDO in FX_HelloWorldProject01, Revision Num 2, Revision Date 10/13/2026, checked out to the operator (Check In and Undo Check Out enabled; row checkbox checked; Locked By the operator placeholder). The Tables view has exactly three entries with both joins. The Properties inventory has exactly 14 rows: the original 13 unchanged plus FX_ItmsDescription (Bound to Column `FX_Description` through fxitms; no Property Class; String 150 nvarchar; Read Only checked). FX_ItmsCost and FX_ItmsPicture are absent, and no row is bound to `fxitms.FX_Cost` or `fxitms.FX_Picture`. Save is disabled and the Form is clean. **The system is ready for the separately authorized FX_ItmsCost wizard.** No property wizard, class selection, Finish, Save, close, reopen-pair, runtime action or Designer action was taken in T5. The planned final recovery verification (the second IDOs close/reopen pair and the third target query) is still reserved.

**Earlier status (after T4, 2026-10-14): T4 STOPPED BY SESSION EXPIRY. FX_ItmsCost was NOT created: the New Property wizard for it was never opened. A Mongoose "Session Expired" modal appeared after the T4 gate; the worker-preamble session-expiry procedure was run once and the session was re-established (see the T4 section). The IDOs Form that held the T3 state is no longer open, and the FX_ItmsDescription state, FX_Orders checkout and Tables view were NOT re-verified after re-login. AC-3 remains PARTIAL (FX_ItmsDescription only, as observed in T3). No Save, Finish, class selection, close/reopen, F4 or runtime action was taken in T4.**

**Earlier status (after T3, 2026-10-14): T3 COMPLETE. AC-3 PARTIAL (FX_ItmsDescription only; observed; UI and accessibility level; same session; not database durability; not replay verified).** T3 opened the New Property wizard once, bound `FX_ItmsDescription` to `fxitms.FX_Description` with no class, invoked Finish once, and verified the result: 14 properties (the 13 originals unchanged plus FX_ItmsDescription, Bound to Column `FX_Description`, sequence 2, String 150 nvarchar, Read Only checked). Save remained disabled (no Save performed). FX_Orders is still checked out to the operator at Revision Num 2, and the Tables view still has three entries with both joins. Not done in T3: FX_ItmsCost and FX_ItmsPicture (AC-3 remains partial), the clean close/reopen pairs, the target re-query, and the runtime check. Next permitted step: the FX_ItmsCost wizard (class FX_Cost), under its own authorization.

**Earlier status (after T2, 2026-10-14): T2 COMPLETE. AC-2 SUPPORTED AS OBSERVED (same session; UI and accessibility level; not database durability; not replay verified).** T2 added one secondary table join, `FX_Items` / `fxitms`, with `fxitms.[FX_Item] = fxords.[FX_Item]`, through one IDO Table Wizard (one New Table, one OK). The Tables view now lists three entries: FX_HelloWorld01 (fxcus), FX_Items (fxitms) and FX_Orders (fxords). FX_Orders remains checked out to the operator at Revision Num 2. The IDOs Form is open and clean (Save disabled); no property wizard, Save, close/reopen, query or runtime action was taken in T2. Next permitted step: the three New Property wizards (AC-3), under their own authorization.

**Earlier status (after T1, 2026-10-14): T1 COMPLETE. AC-1 SUPPORTED AS OBSERVED (same session; UI and accessibility level; not database durability; not replay verified).** T1 was read-only apart from one IDOs Form close and one reopen, and one target query. FX_Orders was checked out to the operator at Revision 2 with 13 properties and a two-entry Tables view. Nothing was added. New Table was not invoked in T1.

## Run identity

- Experiment EXP-079, cycle 0, task **T1** (read-only preflight and IDO baseline; stop before New Table).
- Run `R-20261014-001840-dvg8`; worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`; task_message_id `7eca8170-b467-49b3-8991-a915499397f4`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO, its join and its properties are tenant-wide.
- Brief commits (session-start `git log`; not re-verified; no shell): `d125045` (EXP-079: approved brief), `0c3ea8a` (EXP-079: draft brief).
- Session-start git status (from the harness context; not re-verified): `?? assets/`.
- The brief's record path did not exist in the working tree at T1 start (`experiments/EXP-079-*` returned no file, although the git log names the brief commits). This record was created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-079/`.

## Objective (T1 scope, from the bounded instruction)

Retrieve exactly one IDO `FX_Orders` in a fresh IDO Collections runtime Form (titled IDOs) through Filter in Place with one visible-criterion query; record its identity, revision, checkout state, Tables view and complete property inventory; prove `FX_ItmsDescription`, `FX_ItmsCost`, `FX_ItmsPicture` and any `fxitms` entry absent; create this record with the baseline, the action audit and the worker-written-file inventory. **Stop before New Table.** No Check Out, Check In or Undo Check Out (the checkout gate required FX_Orders to be checked out to the operator; it was).

Later tasks (not authorized in T1): one New Table with `FX_Items` / `fxitms` / `fxitms.FX_Item = fxords.FX_Item`; three New Property wizards (FX_ItmsDescription with no class; FX_ItmsCost with class FX_Cost; FX_ItmsPicture with class FX_Picture); the recovery pair; the runtime check (two rows).

## Sources reviewed (before browser interaction)

- `AGENTS.md` (supplied in the task text; LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt5.md`: Sections 1–2 (lines 80–113) and the transcript at 00:28–03:33 (lines 388–416). The tutorial's Site Default scope, unprefixed `Items`/`Orders`, label string IDs and the ASR prefix variants (`cus`/`cuss`/`cust`, `itms`) are not used. Section 1 (join `Items` alias `Itms`, `Items.Item = Orders.Item`) maps to this experiment's join `fxitms.FX_Item = fxords.FX_Item`; Section 2's Bind Properties and label string steps are reduced to the three properties the brief names. The tutorial's Section 2 class assignments (Cost, Picture) map to the brief's FX_Cost and FX_Picture classes.
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md`: lines 1–454 of 1348 read (status header; T1 baseline; T2 Check Out; T3 join wizard and Tables view). Lines 455 onward (T4–T8 property and runtime sections) were **not** read in full; the facts relied on (joined properties Read Only; two duplicate sequence values; Filter in Place on reopen; runtime check) come from the EXP-078 status header at lines 3–17 and the T5–T7 summaries.
- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`: targeted reads (Table Name Tab-commit with readback; alias by Tab; builder join text `fxum.[FX_UM] = fxitms.[FX_UM]`; Tables view after OK; `fxum.FX_Description` auto-filled Property Name, replaced by one plain fill; reopen recovery). Full-file read not performed.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: targeted reads (New Property wizard with class; Bind To lookup `fxitms.FX_Picture`; Property Class `FX_Picture`; inherited Binary / -1 / varbinary; Finish once with no text; "Inherit from Property Class" checkboxes; Finish commits immediately; Save stays disabled).
- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: targeted reads (FX_Cost: Decimal, Length 18, Decimal Position 2, Default Value 0, Column Data Type decimal; FX_Cost checked out to the operator).
- `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md`: targeted reads (FX_Picture: Binary, Length -1, Column Data Type varbinary, Binary Format PNG; checked out to the operator).
- `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md`: targeted reads (runtime rows FX001 / dumbbell / 2 and FX002 / eggs / 1; blank-criteria query: Filter in Place, blank criteria, one F4; Save disabled).
- Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git command.

## Browser starting state (observed before any action)

- `browser_tabs` list (before any selection): tab 0 = Infor Mongoose Designer (`mode=designer`, current) — **not selected, clicked or captured**; tab 1 = Mongoose Web Client (`favoriteContext=FX_Orders`).
- Select tab 1 (one select; succeeded after the list). Tab 1 became current.
- Untargeted snapshot: the visible Form was the **FX_Orders runtime Form** with two rows (1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1); record 1 selected; Save **disabled**; status `(Object 1 of 2)`.
- Open Form tabs: FX_Items, Property Classes, IDO Projects, Sql Tables, Sql Columns, FX_HelloWorld01, IDOs, FX_Orders (runtime, selected). The IDOs tab was open but not selected.
- No dialog, Session Expired modal, sign-in page or portal banner. Identity bar: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## T1 actions (in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 Designer (current); tab 1 Mongoose Web Client | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current; Designer not touched | — |
| 3 | Untargeted snapshot (starting state) | FX_Orders runtime Form, 2 rows, Save disabled (see above) | snapshot (tool) |
| 4 | Click the IDOs Form-tab heading (view) | IDOs tab selected. IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator placeholder; Check In and Undo Check Out enabled; Save disabled; Properties sub-tab showed 13 rows; status `P&roperties`; no dialog. **Clean.** | snapshot (tool) |
| 5 | Click the IDOs `Close Panel IDOs` control (Form-tab control; one click) | Tab closed; no prompt; no dialog | — |
| 6 | Click the `Form` menu | Form menu opened | — |
| 7 | `browser_find` for menu items | Menu items `Open`, `Close and Save Changes` and `Close and Cancel Changes` found | find |
| 8 | Click `Open` (not `Close and Save Changes`) | Select Form dialog opened; Filter pre-filled `FX_Orders` (the last value); one row `FX_Orders / FX_Orders` | find; snapshot (tool) |
| 9 | Type `IdoCollections` into the Select Form Filter (one fill; replaces the pre-filled value) | Filter `IdoCollections`; **two rows**: `IDOs / IdoCollections` and `G6RIdoCollectionSearch / G6RIdoCollectionSearch` | find |
| 10 | Tab once (Filter commit) | Filter retained | — |
| 11 | Click the `IDOs / IdoCollections` row (not the search Form row) | Row focused (`gridcell "IDOs" [active]`) | snapshot (tool) |
| 12 | Click Select Form `OK` once | IDOs Form reopened (`favoriteContext=IdoCollections`); status `Filter in Place` (read from the status bar before any click) | snapshot (tool) |
| 13 | Verify status bar: `Filter in Place` | Confirmed; FiP **not** clicked (already active on reopen) | snapshot (tool) |
| 14 | Type `FX_Orders` into IDO Name (one fill) | Typed | — |
| 15 | Tab once (IDO Name commit) | Focus moved; echo row `FX_Orders` | — |
| 16 | Screenshot `t1-01` (pre-F4 criterion) | IDO Name `FX_Orders`; status `Filter in Place`; echo row `FX_Orders`; Tables sub-tab empty (fresh Form) | `t1-01` |
| 17 | **F4 once** (target query) | Query executed; no second F4 | — |
| 18 | Wait 3 s | — | — |
| 19 | Snapshot (tool, after F4) and the Tables sub-tab read | Status `Description (IDOs 1 of 1)`: **one row** `FX_Orders` / Revision Num 2 / Revision Date 10/13/2026. Tables sub-tab: two rows (see baseline). Save disabled. Description field held focus with no value typed | snapshot (tool) |
| 20 | Screenshot `t1-02` (identity and Tables view) | Identity header and two-row Tables view as below | `t1-02` |
| 21 | Click the `Properties` sub-tab (view) | Properties grid shown (13 rows) | snapshot (tool) |
| 22 | Screenshot `t1-03` (rows 1–8) | Identity header; rows 1–8 | `t1-03` |
| 23 | Mouse move to the grid, one wheel scroll (deltaY +300) (view) | Rows 6–13 shown | — |
| 24 | Screenshot `t1-04` (rows 6–13) | Rows 6–13 incl. InWorkflow (row 13) | `t1-04` |

Stopped here. No New Table, wizard, property wizard, Finish, Save, Check Out, Check In, Undo Check Out, runtime action or Designer action was taken.

## Baseline (T1; observed after the single F4)

### Identity and checkout (AC-1)

| Field | Observed |
|---|---|
| IDO Name | `FX_Orders` (one row; exact name) |
| Project Name | `FX_HelloWorldProject01` |
| Revision Num | **2** |
| Revision Date | `10/13/2026` (unchanged from EXP-078; the date is not today's date, 2026-10-14; the mechanism is not established here) |
| Locked By | operator account placeholder (the value is clipped in the image; the full value is the identity-bar account in the accessibility readback) |
| Checkout state | **Checked out to the operator**: row checkbox checked; Check In enabled; Undo Check Out enabled. Checkout gate **passed**. |
| Access As / Label String ID / Caption | `G6R` / `oFX_Orders` / `oFX_Orders` |
| Extends / Description / Profile Name | blank / blank / blank |
| Save (toolbar) | disabled (clean) |

### Tables view (two entries, as expected)

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Orders | fxords | Primary Base | Inner | (blank) |

No `fxitms` entry and no `FX_Items` entry. Status after the query: `Description (IDOs 1 of 1)`.

### Property inventory (13 rows; complete; Properties sub-tab)

Every row is `Bound to Column`. Read Only, Required and Read Only Record are read from the accessibility checkbox states (Read Only Record is off-screen in the screenshots). Class-bound rows show blank Data Type, Length and Column Type in the grid, as in EXP-061 and EXP-078.

| # | Property Name | Sequence | Property Class | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | FX_OrderNumber | 1 | (class-bound) | — | (class-bound) | no | yes | no |
| 2 | FX_CusName | 2 | (blank) | FX_Label (fxcus) | 0 | String | 100 | nvarchar | **yes** | no | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | FX_CustomerID | 0 | (class-bound) | — | (class-bound) | no | yes | no |
| 4 | FX_Item | 3 | FX_Item | FX_Item | 0 | (class-bound) | 50 | (class-bound) | no | yes | no |
| 5 | FX_Count | 4 | (blank) | FX_Count | 0 | Long Integer | — | int | no | no | no |
| 6 | CreatedBy | 5 | (blank) | CreatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 7 | UpdatedBy | 6 | (blank) | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 8 | CreateDate | 7 | (blank) | CreateDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 9 | RecordDate | 8 | (blank) | RecordDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 10 | RowPointer | 9 | (blank) | RowPointer | 0 | GUID | — | RowPointerType | yes | no | no |
| 11 | FX_CusAddress | 10 | (blank) | FX_Address (fxcus) | 0 | String | 150 | nvarchar | **yes** | no | no |
| 12 | NoteExistsFlag | 10 | (blank) | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no | no |
| 13 | InWorkflow | 11 | (blank) | InWorkflow | 0 | Byte | — | FlagNyType | no | no | **yes** |

Notes on the baseline:
- The six business properties are FX_OrderNumber, FX_CusName, FX_CustomerID, FX_Item, FX_Count and FX_CusAddress; the seven system properties are CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag and InWorkflow. This matches the brief's expected 13.
- Sequence values are shared: 2 (FX_CusName, FX_CustomerID) and 10 (FX_CusAddress, NoteExistsFlag). These are the duplicate-sequence observations EXP-078 recorded; no renumbering is in scope.
- Absent before the change (proved by the 13-row inventory and the two-row Tables view): **FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture** and **any `fxitms` table entry**.
- The Property Name / Property Class cells for FX_CusName and FX_CusAddress are blank for the class, and both are Bound to fxcus columns, as EXP-078 recorded.

### Form state after T1

- The IDOs Form is open and **clean**: Save disabled; Properties sub-tab selected; no dialog; no unsaved change.
- The Form was not closed after T1 (T1 does not include a further close).
- FX_Orders remains checked out to the operator at Revision 2.
- The runtime FX_Orders tab (inactive) was not selected, queried or changed in T1; its last state at T1 start (two rows, Save disabled) is unchanged as far as this worker can tell (not re-read).
- The Web Designer tab (tab 0) was not selected, clicked or captured.

## T2 — one IDO Table Wizard: join FX_Items (alias fxitms) to FX_Orders; one OK (cycle 1; AC-2 supported; properties NOT started)

- Task T2, cycle 1, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `0f2819f8-9948-4848-9fac-6ea48082990c`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): re-verify the T1 baseline without an F4; open Tables; one New Table; FX_Items typed once and committed by one Tab; fxitms typed once and committed by one Tab; Secondary and Left Outer kept; builder FX_Item = fxords . FX_Item; one builder Add; full dialog screenshot before OK; one OK; Tables view verification. No New Property wizard, no Save, no IDOs close/reopen, no query, no runtime action, no Check Out / Check In / Undo Check Out.
- Sources: the T1 readings (EXP-078 T3 join wizard and Tables view; EXP-066-R2 Tab-commit and builder join text; EXP-061 and EXP-048/EXP-060 for the later wizards, not used in T2). No further source read was needed.

### Pre-mutation gate (T2)

| Check | Observed | Result |
|---|---|---|
| Tab list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client (`favoriteContext=IdoCollections`) | Listed first |
| Untargeted snapshot before the tab select | **Taken while tab 0 (Designer) was the current tab.** The capture was read-only: no click, type or key on tab 0. This is recorded as an inadvertent read-only observation of the Designer, not a Designer action | Disclosed deviation |
| Tab 1 select | Succeeded after the list; tab 1 became current | — |
| Untargeted snapshot (tab 1) | IDOs tab selected; IDO Name `FX_Orders` (one row); Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By operator placeholder; row checkbox checked; Check In and Undo Check Out enabled; Access As `G6R`; Save disabled; no dialog | Matches T1 |
| Properties (view; Tables not yet opened) | 13 rows: FX_OrderNumber, FX_CusName (2), FX_CustomerID (2), FX_Item (3), FX_Count (4), CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, FX_CusAddress (10), NoteExistsFlag (10), InWorkflow (11). No FX_Items-prefixed row and no fxitms entry | Matches T1; FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture absent |
| Tables sub-tab (view; one click) | Two entries: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Orders / fxords / Primary Base / Inner. No fxitms entry. Status `P&roperties` (focus caption) | Matches T1 |
| Checkout gate | Checked out to the operator (Check In enabled; Locked By operator; Revision 2) | **Passed** |
| Screenshot `t2-01` (before New Table) | Identity header and the two-entry Tables view | — |

No F4 query was run in T2 (the criterion and target query were T1's).

### Actions (T2, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 Designer (current); tab 1 Mongoose | — |
| 2 | Untargeted snapshot (taken while tab 0 was current; read-only; see the gate) | Designer page; not acted on | snapshot (tool) |
| 3 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 4 | Untargeted snapshot of tab 1 (gate) | Gate as above | snapshot (tool) |
| 5 | Click the Tables sub-tab (view) | Tables view: two entries | snapshot (tool) |
| 6 | Screenshot `t2-01` | Pre-New Table baseline | `t2-01` |
| 7 | **New Table**, one click | IDO Table Wizard opened (`favoriteContext=IdoTableWizard`). IDO Name `FX_Orders`; Table Name blank and active; Table Alias blank; Table Type `Secondary`; Join Type `Left Outer`; builder Column/Table/Column blank; Join Text blank | snapshot (tool) |
| 8 | **Table Name**: `FX_Items` typed once into the combobox | Typed; no list opened; no Enter | — |
| 9 | **Tab once** | Focus moved to Table Alias. Readback: Table Name combobox `FX_Items`; no validation or error text | snapshot (tool) |
| 10 | **Table Alias**: `fxitms` typed once | Typed | — |
| 11 | **Tab once** | Focus moved to the builder. Readback: Table Alias `fxitms`; Table Type `Secondary`; Join Type `Left Outer` | snapshot (tool) |
| 12 | Targeted snapshot of the Table Name ref (`f1e1137`) for readback | **Returned the IDO Name textbox only** (the ref was the wrong field; not a ref-not-found error). The readback in step 9 was taken from the next untargeted snapshot | snapshot (tool) |
| 13 | Untargeted snapshot (readback) | Table Name `FX_Items`; Table Alias `fxitms`; Table Type `Secondary`; Join Type `Left Outer`; builder Column Name blank; no message | snapshot (tool) |
| 14 | Builder first Column Name: Open (one click), then `FX_Item` option (one click) | Column Name `FX_Item` | find; snapshot (tool) |
| 15 | Builder Table Name: Open (one click); `browser_find` `fxords`; then `FX_Orders (fxords)` option (one click). The list offered two options: `FX_HelloWorld01 (fxcus)` and `FX_Orders (fxords)` | Table Name `FX_Orders (fxords)` | find; snapshot (tool) |
| 16 | Builder second Column Name: Open (one click); `browser_find` `FX_CustomerID` (the list contains FX_Item); then `FX_Item` option (one click) | Column Name `FX_Item` | find; snapshot (tool) |
| 17 | Pre-Add readback | Builder: `FX_Item` = `FX_Orders (fxords)` . `FX_Item`; Join Text empty; no message | snapshot (tool) |
| 18 | **Builder Add**, one click | Join Text generated: `fxitms.[FX_Item] = fxords.[FX_Item]` (verbatim). The direct join-text fallback was **not** used | snapshot (tool) |
| 19 | Screenshot `t2-02` (dialog before OK) | All wizard fields as required; no prompt | `t2-02` |
| 20 | **Wizard OK**, one click | No dialog, alert, error or message text. The wizard closed; the IDOs tab became active; status `New Table (IDOs 1 of 1)` | snapshot (tool) |
| 21 | Settled Tables view (untargeted snapshot) and screenshot `t2-03` | Three entries (below); Save disabled; identity unchanged | `t2-03` |

No commit was retried. Enter and Escape were not pressed. No combobox was closed with Escape. The Table Name combobox was not picked from a list.

### Wizard field record (verbatim readbacks)

| Field | Recorded value |
|---|---|
| IDO Name | `FX_Orders` |
| Table Name | `FX_Items` (typed once; committed by one Tab; readback `FX_Items`; no message) |
| Table Alias | `fxitms` (typed once; committed by one Tab; readback `fxitms`) |
| Table Type | `Secondary` (kept) |
| Join Type | `Left Outer` (kept) |
| Builder Column Name (first) | `FX_Item` |
| Builder Table Name | `FX_Orders (fxords)` |
| Builder Column Name (second) | `FX_Item` |
| Join text after the builder Add | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| Wizard OK response | no message; wizard closed; status `New Table (IDOs 1 of 1)` |

Expression check: the join text reads `fxitms.FX_Item = fxords.FX_Item` (the brackets are the builder's identifier quoting, as in EXP-078 and EXP-066-R2). The alias on the new table is `fxitms`; the base table alias is `fxords`. This matches the brief's expression.

### Tables view after OK (AC-2)

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` (unchanged) |
| 2 | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` (new) |
| 3 | FX_Orders | fxords | Primary Base | Inner | (blank; unchanged) |

Exactly three entries. The two original join entries are unchanged in this view (the FX_HelloWorld01 join text and the FX_Orders base entry).

### Identity and checkout after OK

- Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder (clipped in the image); Access As `G6R`.
- Check In and Undo Check Out enabled (still checked out to the operator). Save disabled (clean). No Check Out, Check In or Undo Check Out was clicked.
- Status `New Table (IDOs 1 of 1)`. No message after OK.

### Action counts (T2 only)

| Operation | T2 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Table** | **1** |
| **Table wizard OK** | **1** |
| **Builder Add** | **1** |
| Typed join text (fallback) | 0 |
| Table entries added | **1** (FX_Items / fxitms) |
| New Property wizard / Finish | 0 / 0 |
| Save | 0 |
| IDOs Form close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 0 |
| Designer interaction (click, type, key) | 0 |
| Designer read-only snapshot (inadvertent; tab 0 current when the first snapshot ran) | 1 |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login; browser JavaScript; console; network; direct URL; refresh; restart | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted (explicit `browser_snapshot` calls) | **3 / 1** (untargeted: steps 2, 4, 13; targeted: step 12, wrong field). The snapshot output returned by click and type actions is not counted separately, as in T1 |
| `browser_find` | **3** (builder Column Name FX_Item; builder Table Name fxords; builder second Column Name FX_CustomerID) |
| Element clicks (successful / failed) | **10 / 0** (Tables sub-tab; New Table; builder first Column Name Open and option; builder Table Name Open and option; builder second Column Name Open and option; builder Add; wizard OK) |
| `browser_type` (succeeded / refused) | **2 / 0** (Table Name `FX_Items`; Table Alias `fxitms`) |
| Key presses | **2** (Tab after the Table Name; Tab after the Table Alias) |
| Enter / Escape | 0 / 0 |
| Waits / mouse moves / wheel | 0 / 0 / 0 |
| Screenshots | **3** (`t2-01`, `t2-02`, `t2-03`) |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 |

### Deviations and notes (T2)

- **Designer snapshot.** The first untargeted snapshot was taken while tab 0 (Designer) was the current tab. It is recorded as a read-only observation. No click, type, key or screenshot was made on tab 0. The tab-select order was then followed (list, then select tab 1) before any Web Client action.
- **Wrong-field targeted snapshot.** A targeted snapshot of the Table Name ref returned only the IDO Name textbox. It was not an error, and the readback came from the next untargeted snapshot. The targeted snapshot is counted.
- **Builder option list.** The builder's Table Name list showed two options (FX_HelloWorld01 (fxcus) and FX_Orders (fxords)). The fxords option was chosen. The Table Name combobox itself was not picked from its list.

### Worker-written-file inventory (T2)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T2 section; AC table; cumulative audit).
- `evidence/EXP-079/t2-01-pre-new-table-baseline-tables-view.png` (created).
- `evidence/EXP-079/t2-02-new-table-dialog-before-ok.png` (created).
- `evidence/EXP-079/t2-03-tables-view-after-ok-three-entries.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-24-16-643Z.yml`, `page-2026-10-13T16-24-27-108Z.yml`, `page-2026-10-13T16-25-20-640Z.yml`) are tool-written, not worker-authored. They were read as readbacks only.

No other repository file was written, edited or deleted in T2.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01-pre-new-table-baseline-tables-view.png` | IDOs tab; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Tables: FX_HelloWorld01 / fxcus / Secondary / Left Outer / join, and FX_Orders / fxords / Primary Base / Inner; status `P&roperties` | The checkout gate and the two-entry baseline before New Table (AC-2 gate) | The property inventory (T1 `t1-03`/`t1-04`); the full Locked By value |
| `t2-02-new-table-dialog-before-ok.png` | IDO Table Wizard: IDO Name `FX_Orders`; Table Name `FX_Items`; Table Alias `fxitms`; Table Type `Secondary`; Join Type `Left Outer`; join list `FX_Item = FX_Orders (fxords) . FX_Item`; join text `fxitms.[FX_Item] = fxords.[FX_Item]`; OK and Cancel; no prompt | **AC-2** dialog-before-OK: every field as the brief requires, before one OK | That the server accepted the join (only the OK response and the Tables view show that, at UI level) |
| `t2-03-tables-view-after-ok-three-entries.png` | IDOs tab; identity unchanged (Revision Num 2; Locked By operator; Check In enabled; Save disabled); Tables: three rows FX_HelloWorld01 / fxcus, FX_Items / fxitms (Secondary; Left Outer; `fxitms.[FX_Item] = fxords.[FX_Item]`), FX_Orders / fxords; status `New Table (IDOs 1 of 1)` | **AC-2** Tables after OK: exactly three entries with both joins; FX_Orders checkout intact | The property inventory (not changed by T2, not re-counted here); database state |

### Knowledge state (T2)

| Finding | State |
|---|---|
| One New Table, Table Name `FX_Items` typed and committed by one Tab, readback `FX_Items`, no message | **observed** (one run; UI level) |
| The builder offers the Table Name options `FX_HelloWorld01 (fxcus)` and `FX_Orders (fxords)`; the builder's join text for FX_Item = FX_Item is `fxitms.[FX_Item] = fxords.[FX_Item]` | **observed** (one run) |
| One wizard OK with no message adds the join; the Tables view lists three entries with both joins; Save stays disabled (no Save needed) | **observed** (one run; UI level) |
| The FX_Orders checkout (Revision 2; checked out to the operator) survives the join | **observed** (one run) |
| The join is valid on the server (SQL) | **not established** (UI only; not a database read) |
| Property wizards, recovery, runtime | **not performed** (later tasks) |
| Replay or database durability | **not claimed** (not replay_verified) |

## T3 — New Property wizard once: FX_ItmsDescription (Bound to fxitms.FX_Description; no class); one Finish (cycle 2; AC-3 partial; FX_ItmsCost and FX_ItmsPicture NOT started)

- Task T3, cycle 2, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `c567c1c3-6a98-4563-a8f9-45cd9fcabc51`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): confirm the gate (single IDO FX_Orders; Revision 2; checked out to the operator; three Tables entries with both joins); inspect the Properties inventory without a target query and prove FX_ItmsDescription and any fxitms binding absent; open the New Property wizard once; Bound; Bind To `fxitms.FX_Description`; Property Name by one plain fill; Property Class blank; record the shown types; screenshot before Finish; one Finish; verify. No second wizard, no Save, no close/reopen, no F4, no runtime action, no Designer action.
- Sources: the T1 and T2 readings, EXP-061 (Bind To lookup; page-1 accessibility mislabel of the IDO Name as "Property Name"), EXP-066-R2 (auto-filled Property Name replaced by one plain fill). No further source read was needed.

### Gate (T3; no target query; no Designer interaction)

| Step | Action | Observed | Result |
|---|---|---|---|
| G1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client (`favoriteContext=IdoCollections`) | Listed first. Tab 0 was **not** snapshotted, clicked, typed or captured in T3 (the T2 Designer snapshot was not repeated) |
| G2 | `browser_tabs` select tab 1 | Tab 1 current | Succeeded after the list |
| G3 | Untargeted snapshot (tab 1) | IDOs tab selected and clean (Save disabled); IDO Name `FX_Orders` (one row, checked); Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled; Access As `G6R`; status `New Table (IDOs 1 of 1)`; Tables sub-tab selected | Matches T2 |
| G4 | Tables view (read from G3) | Three entries: `FX_HelloWorld01 / fxcus / Secondary / Left Outer / fxcus.[FX_Code] = fxords.[FX_CustomerID]`; `FX_Items / fxitms / Secondary / Left Outer / fxitms.[FX_Item] = fxords.[FX_Item]`; `FX_Orders / fxords / Primary Base / Inner` | Matches T2 |
| G5 | Click the Properties sub-tab (view; one click) | Properties grid: 13 rows (FX_OrderNumber 1; FX_CusName 2; FX_CustomerID 2; FX_Item 3; FX_Count 4; CreatedBy 5; UpdatedBy 6; CreateDate 7; RecordDate 8; RowPointer 9; FX_CusAddress 10; NoteExistsFlag 10; InWorkflow 11). No `FX_ItmsDescription` row. No row Bound to any `fxitms` column | **FX_ItmsDescription absent; no equivalent fxitms.FX_Description binding** |
| G6 | Screenshot `t3-01` (baseline inventory; identity header; rows 1–8) | Identity header and rows 1–8 | `t3-01` |

**Gate verdict: verified.** FX_Orders is the single IDO, Revision 2, checked out to the operator; the Tables view has exactly the three expected entries with both joins; the 13-row baseline has no FX_ItmsDescription and no fxitms binding. Proceeded to the wizard.

### Actions (T3, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | Untargeted snapshot (gate) | As G3 | snapshot (tool) |
| 4 | Click the Properties sub-tab (view) | 13 rows | snapshot (tool) |
| 5 | Screenshot `t3-01` | Baseline identity and rows 1–8 | `t3-01` |
| 6 | **New Property**, one click | IDO Property Wizard opened (`favoriteContext=IdoPropertyWizard`). Page 1: Bound active (radio); Derived, Unbound, Subcollection unselected; Next enabled; Finish disabled. The field labelled "Property Name:" on page 1 read `FX_Orders` (the IDO name, as EXP-061 recorded: an accessibility mislabel) | snapshot (tool) |
| 7 | **Next >**, one click | Page 2 (Property Attributes): Bind To blank; Property Name blank; Property Class blank; Inherit checkboxes unchecked; Finish enabled; Next disabled | snapshot (tool) |
| 8 | **Bind To Open**, one click | Lookup list opened with `fxitms.FX_Cost`, `fxitms.FX_Description`, `fxitms.FX_Item` and further entries | `browser_find` `fxitms.FX_Description`; snapshot (tool) |
| 9 | Click the `fxitms.FX_Description` option (one click) | Bind To `fxitms.FX_Description`. The wizard auto-filled Property Name `FX_Description`, Data Type String, Length 150, Column Data Type nvarchar | snapshot (tool) |
| 10 | **Property Name**: one plain fill `FX_ItmsDescription` (replaces the auto-filled `FX_Description`) | Readback `FX_ItmsDescription` | snapshot (tool) |
| 11 | Readback (untargeted snapshot) | Bind To `fxitms.FX_Description`; Property Name `FX_ItmsDescription`; Property Class blank (combobox empty); Data Type `String` (its Inherit checkbox disabled); Length `150`; Decimal blank; Column Data Type `nvarchar` (its Inherit checkbox enabled and unchecked); Property Class Inherit checkbox disabled; Finish enabled; no message or prompt | snapshot (tool) |
| 12 | Screenshot `t3-02` (configured wizard before Finish) | As row 11, visibly | `t3-02` |
| 13 | **Finish**, one click | No dialog, alert, confirmation or error text. The wizard closed; the IDOs tab became active; status `New Property (IDOs 1 of 1)` | snapshot (tool) |
| 14 | Post-Finish snapshot (untargeted) and read of the Properties grid | 14 rows: the 13 originals unchanged plus `FX_ItmsDescription` (sequence 2; Property Class blank; Bound to Column `FX_Description`; Key Sequence 0; String 150 nvarchar; Read Only checked; Required unchecked; Read Only Record unchecked) | snapshot (tool) |
| 15 | Screenshot `t3-03` (post-change inventory; rows 1–8) | Identity header; Save disabled; row 4 FX_ItmsDescription | `t3-03` |

No retry on any step. No Save. No Escape or Enter pressed. No class selected (the Property Class lookup was not opened).

### Wizard field record (verbatim readbacks; FX_ItmsDescription)

| Field | Recorded value |
|---|---|
| Page 1 binding | Bound (radio active; kept) |
| Bind To | `fxitms.FX_Description` (selected once from the lookup; the alias prefix distinguishes it from `fxitms.FX_Cost` and `fxitms.FX_Item`) |
| Property Name | `FX_ItmsDescription` (one plain fill; replaced the auto-filled `FX_Description`) |
| Property Class | blank (not selected; Inherit from Property Class disabled) |
| Data Type | `String` (Inherit disabled; no class) |
| Length | `150` |
| Decimal | blank |
| Column Data Type | `nvarchar` (Inherit enabled, unchecked) |
| Finish response | no message; wizard closed; status `New Property (IDOs 1 of 1)` |

Matches the expected String, 150, nvarchar.

### Post-change inventory (14 rows; AC-3 for FX_ItmsDescription; AC-4 pending the other two properties)

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound) | — | (class-bound) | no |
| 2 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | **yes** |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound) | — | (class-bound) | no |
| **4** | **FX_ItmsDescription (new)** | **2** | **(blank)** | **Bound to Column** | **FX_Description (fxitms)** | **0** | **String** | **150** | **nvarchar** | **yes** |
| 5 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound) | 50 | (class-bound) | no |
| 6 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | — | int | no |
| 7 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes |
| 8 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes |
| 9 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | yes |
| 10 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | yes |
| 11 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | yes |
| 12 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | 0 | String | 150 | nvarchar | **yes** |
| 13 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | no |
| 14 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | no (Read Only Record yes) |

- The 13 originals match the T1 and T2 baseline row for row (name, sequence, class, type, column, key sequence, data type, length, column type and the Read Only and Read Only Record checkboxes), read from the post-Finish accessibility snapshot. The Required checkbox values for rows 1, 3 and 5 are as in the baseline.
- Sequence 2 is now shared by three rows (FX_CusName, FX_CustomerID and FX_ItmsDescription). This is an observation only; renumbering is out of scope.
- The new row's Read Only checkbox is checked (the first checkbox group, as in the earlier records; the column header mapping is inferred from the accessibility readback, as EXP-061 and EXP-078 recorded).

### Post-change state (T3)

- Save: **disabled** (clean). No Save was performed (Save budget 0 used of 0 or 1).
- Identity: FX_Orders; project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled — **still checked out to the operator**.
- Tables: still three entries (unchanged by T3; not re-counted after Finish beyond the identity header).
- Status: `New Property (IDOs 1 of 1)`. No dialog, no prompt. The IDOs Form is open, clean, on the Properties sub-tab.

### Action counts (T3 only)

| Operation | T3 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Property wizard** | **1** (FX_ItmsDescription) |
| **Finish** | **1** |
| Class selections | **0** (none in T3; FX_ItmsCost and FX_ItmsPicture are later) |
| Save | 0 |
| IDOs close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes (beyond the one added property) | 0 |
| Designer interaction (click, type, key, snapshot) | **0** (no Designer snapshot in T3; the tab list was the only read on tab 0) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login; browser JavaScript; console; network; direct URL; refresh; restart | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted (explicit `browser_snapshot`) | **3 / 0** (gate; readback; post-Finish) |
| `browser_find` | **1** (`fxitms.FX_Description` in the Bind To list) |
| Element clicks (successful / failed) | **6 / 0** (Properties sub-tab; New Property; Next; Bind To Open; the FX_Description option; Finish) |
| `browser_type` (succeeded / refused) | **1 / 0** (Property Name, one plain fill) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Waits / mouse moves / wheel | 0 / 0 / 0 |
| Screenshots | **3** (`t3-01`, `t3-02`, `t3-03`) |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 |
| Select Form dialogs answered | 0 |

### Worker-written-file inventory (T3)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T3 section; acceptance and cumulative audit; open questions).
- `evidence/EXP-079/t3-01-pre-wizard-baseline-inventory-13-rows.png` (created).
- `evidence/EXP-079/t3-02-wizard-itmsdescription-before-finish.png` (created).
- `evidence/EXP-079/t3-03-post-finish-inventory-14-rows-itmsdescription.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-28-03-627Z.yml`, `page-2026-10-13T16-28-13-192Z.yml`, `page-2026-10-13T16-28-20-752Z.yml`, `page-2026-10-13T16-28-30-584Z.yml`, `page-2026-10-13T16-28-44-744Z.yml`) are tool-written, not worker-authored. Read as readbacks only.

No other repository file was written, edited or deleted in T3.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01-pre-wizard-baseline-inventory-13-rows.png` | IDOs tab; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Properties grid rows 1–8 (FX_OrderNumber, FX_CusName, FX_CustomerID, FX_Item, FX_Count, CreatedBy, UpdatedBy, CreateDate); status `P&roperties` | The checkout gate and the first eight baseline rows before the wizard | Rows 9–13 (accessibility readback only); the absence of FX_ItmsDescription (that is the snapshot readback, not the picture) |
| `t3-02-wizard-itmsdescription-before-finish.png` | IDO Property Wizard, page 2: Bind To `fxitms.FX_Description`; Property Name `FX_ItmsDescription`; Property Class blank; Data Type String (Inherit greyed); Length 150; Decimal blank; Column Data Type nvarchar (Inherit unchecked); Finish enabled; Next greyed; no prompt | **AC-3** pre-Finish values for FX_ItmsDescription (no class; String 150 nvarchar as expected) | That Finish committed the value (see `t3-03`); the stored binding in the database |
| `t3-03-post-finish-inventory-14-rows-itmsdescription.png` | IDOs tab after Finish; identity Revision Num 2; Locked By operator; Check In enabled; Save greyed; status `New Property (IDOs 1 of 1)`; grid rows 1–8 with row 4 `FX_ItmsDescription`, sequence 2, Bound to Column `FX_Description`, String 150, nvarchar, Read Only checked | **AC-3/AC-4** partial: the new property is present with the expected type, length, column type and Read Only state; Save disabled (Form clean); FX_Orders still checked out | Rows 9–14 (accessibility readback only); the stored database state; the Read Only Record column (off-screen) |

## T4 — FX_ItmsCost (class FX_Cost): STOPPED at the gate by session expiry; wizard NOT opened (cycle 3; AC-3 still partial; session re-established)

- Task T4, cycle 3, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `5948f4a7-6f09-4445-b126-9ba374b79d5f`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): gate (FX_Orders single IDO, Revision 2, checked out to the operator; 14 properties with FX_ItmsDescription; FX_ItmsCost absent; three Tables entries with both joins, without a target query); then New Property once for FX_ItmsCost (Bind To `fxitms.FX_Cost`; Property Name by one plain fill; class FX_Cost once; readback; one Finish); verify 15 properties; recovery and runtime steps were **not** reached.

### Gate (T4)

| Step | Action | Observed | Result |
|---|---|---|---|
| G1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client (`favoriteContext=IdoCollections`) | Listed first; tab 0 not snapshotted, clicked, typed or captured |
| G2 | `browser_tabs` select tab 1 | Tab 1 current | Succeeded after the list |
| G3 | Untargeted snapshot (tab 1) | IDOs tab, clean (Save disabled); IDO Name `FX_Orders` (one row, checked); Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled; status `New Property (IDOs 1 of 1)` | Matches T3 |
| G4 | Properties grid (read from G3) | **14 rows**: FX_OrderNumber 1; FX_CusName 2; FX_CustomerID 2; **FX_ItmsDescription 2 (Bound to Column FX_Description; String 150 nvarchar)**; FX_Item 3; FX_Count 4; CreatedBy 5; UpdatedBy 6; CreateDate 7; RecordDate 8; RowPointer 9; FX_CusAddress 10; NoteExistsFlag 10; InWorkflow 11. **No FX_ItmsCost row; no row Bound to `FX_Cost`** | Matches T3; FX_ItmsCost absent |
| G5 | Tables sub-tab (view; one click; no target query) | Three entries: `FX_HelloWorld01 / fxcus / Secondary / Left Outer / fxcus.[FX_Code] = fxords.[FX_CustomerID]`; `FX_Items / fxitms / Secondary / Left Outer / fxitms.[FX_Item] = fxords.[FX_Item]`; `FX_Orders / fxords / Primary Base / Inner` | Matches T3 |

**Gate verdict: verified.** One FX_Orders IDO, Revision 2, checked out to the operator, Save disabled; 14 properties including FX_ItmsDescription; no FX_ItmsCost and no FX_Cost binding; three Tables entries with both joins. The gate passed. No screenshot was captured in T4 (see deviations).

### Actions (T4, in order)

| # | Action | Observed | Result |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | `browser_snapshot` (gate) | As G3 | Gate passed |
| 4 | Click the Tables sub-tab (view) | Three Tables entries (G5) | Passed |
| 5 | **Click `New Property`** (the one permitted open of the FX_ItmsCost wizard) | **Timed out**: "element ... intercepts pointer events" from an `x-mask` overlay (`ext-element-59`). The click did **not** run; the wizard did **not** open | Failed (intercepted) |
| 6 | `browser_snapshot` (fresh untargeted, to see the cause) | An **alertdialog "Session Expired"** ("Your session has expired.") with an OK button was present over the Mongoose frame | **Session expiry** |
| 7 | Click the Session Expired modal's **OK** (once) | Modal closed; the Mongoose frame emptied (no IDOs Form; toolbar disabled). Console count rose | Procedure step 1 |
| 8 | `browser_wait_for` 3 s | No sign-in form in the Mongoose frame; frame still empty | No sign-in form in that tab |
| 9 | **`browser_navigate` once** to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (the only permitted navigation; the brief's portal step) | A browser `beforeunload` ("leave page") dialog appeared. The Form was clean (no unsaved change), so leaving was not a loss of work | Procedure step 2 |
| 10 | `browser_handle_dialog` accept (once; the `beforeunload` leave-page dialog) | Navigation continued; page title "Loading" then "Infor OS Portal" | Dialog accepted |
| 11 | `browser_snapshot` | Portal loading (empty snapshot), then the portal at `System Administrator` workspace. **No CloudIdentities sign-in form appeared** | Portal already signed in |
| 12 | `browser_wait_for` 3 s | Portal `System Administrator` workspace loaded; a portal notification banner (`DistributionIFSContactUs`) visible | — |
| 13 | `browser_find` "Mongoose" | Portal navigation search not yet used; located only the Cloud Status "Mongoose" row (no app tile) | No app tile |
| 14 | **Click the banner's own close (×)** once (standing authorization, 2026-10-10) | Banner dismissed | Recorded dismissal |
| 15 | Click the portal `Open navigation menu` (once) | Navigation menu opened with a `Search menu` box | — |
| 16 | `browser_type` `Mongoose` into `Search menu` (one fill) | One result: Applications → `Mongoose` link | — |
| 17 | `browser_snapshot` | Result confirmed | — |
| 18 | **Click the `Mongoose` application link** (once) | The Mongoose app opened in the portal tab (`https://…/c51080bc-…` without `favoriteContext`). **No "Sign In" configuration page appeared**; the identity bar read `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; the heading "Infor Mongoose Application Development Framework" was present | Web Client re-established |
| 19 | `browser_snapshot` (final, stable) | Mongoose shell; Explorer; no Form open; toolbar Save and other Form actions disabled; **no modal, no dialog, no banner** | Stable |

**Session-expiry procedure: run once; session re-established.** No credential was typed. No CloudIdentities or configuration sign-in form appeared, so no sign-in field was filled. The Session Expired modal was dismissed with its OK. The one permitted navigation was used. The portal notification banner was dismissed once. The Mongoose app was re-opened from the portal's application search.

### What was NOT done in T4 (stopped at the expiry)

- **FX_ItmsCost wizard: not opened.** The click on New Property did not run, so no wizard, Bind To selection, Property Name fill, FX_Cost class selection, or Finish happened. No property was added or changed. The FX_ItmsCost "absent" state is as in the gate (G4).
- **No Save, no Finish, no class selection, no F4, no close/reopen of the IDOs Form, no runtime record access, no Check Out / Check In / Undo Check Out, no Designer action.**
- **The IDOs Form (with the T3 state) was lost** when the Mongoose frame emptied and the app was re-opened. Because the Form was clean, nothing unsaved was discarded.
- **Not re-verified after re-login:** the FX_ItmsDescription row (T3's 14th property); FX_Orders checkout (Revision 2, operator); the three Tables entries. These were true at the T4 gate (G3–G5), before the expiry. Their state after re-login is **unknown** to this worker until they are re-read in a later task. The T3 row is the last observed state.
- **Screenshots: none captured in T4.** The T4 gate and state were read from snapshots only. The post-change screenshots required by the bounded instruction were not taken, because no wizard was reached.

### Deviations (T4)

1. **The New Property click was intercepted by a Session Expired modal.** The first symptom was a `x-mask` overlay, not a modal in the snapshot. The fresh snapshot (action 6) identified the modal. The fresh-snapshot allowance was used once for that purpose.
2. **A beforeunload dialog** appeared on the portal navigation. The Form was clean, so accepting it lost no work. Recorded here as an unplanned dialog.
3. **Portal banner** dismissed once with its own close control.
4. **Portal app-tile not visible on the dashboard.** The app was reached through the portal's navigation menu search (`Mongoose`), not a dashboard tile.

### Action counts (T4 only; explicit tool calls)

| Operation | T4 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Property wizard / Finish** | **0 / 0** (the New Property click was intercepted; the wizard did not open) |
| Class selections | **0** |
| Save | **0** |
| New Table / table wizard OK | 0 / 0 |
| IDOs Form close / reopen | 0 / 0 (the Form was lost to the session expiry; not a worker close) |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 0 |
| Designer interaction | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| **Re-login (session-expiry procedure)** | **1** (run once; no credential typed; no sign-in form filled) |
| Browser JavaScript / evaluate / run-code / console / network inspection | 0 |
| Direct URL navigation | **1** (the portal step of the procedure only) |
| Browser refresh / restart | 0 / 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots, explicit untargeted / targeted | **5 / 0** (gate; after the intercepted click; after the portal navigation; after the search; final). Snapshot blocks returned inside click, wait and navigate results are not counted, as in T1–T3 |
| `browser_find` | **1** ("Mongoose"; no app tile found) |
| Element clicks (successful / failed) | **5 / 1** (successful: Tables sub-tab; Session Expired OK; banner close; navigation menu; Mongoose app link. Failed: New Property, intercepted, not executed) |
| `browser_type` (succeeded / refused) | **1 / 0** (portal navigation search `Mongoose`; not a Mongoose artifact) |
| `browser_wait_for` | **2** (3 s each) |
| `browser_navigate` | **1** (portal URL, procedure step) |
| `browser_handle_dialog` | **1** (accept; beforeunload leave-page) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Screenshots | **0** |
| Ref-not-found / timeouts | 0 / **1** (the intercepted New Property click timed out at 5 s; this is the session-expiry symptom, not a ref error) |
| Native dialogs | **1** (beforeunload, accepted) |

### Blocker and next permitted action

- **Blocker:** session expiry during the FX_ItmsCost gate. The session was re-established by the procedure and the task ends here, as the procedure requires. The FX_ItmsCost wizard was not opened.
- **Next permitted action (not yet authorized):** a fresh task should (1) re-read FX_Orders identity, checkout, the 14-property inventory (with FX_ItmsDescription) and the three Tables entries from a fresh IDOs Form, opened through Form > Open > Select Form, with one visible-criterion query; (2) only then proceed to the FX_ItmsCost wizard, as the T4 brief specifies. The coordinator must decide whether the re-login state is acceptable for mutation.
- The Designer tab (tab 0) was not touched. It may need its own re-login in a later task (the procedure leaves an expired Designer tab for the coordinator).

### Worker-written-file inventory (T4)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; this T4 section; the acceptance and audit rows below; open questions).
- No new evidence files (no screenshot was captured in T4).
- Harness snapshot, console and portal files under `evidence\playwright\` (for example `page-2026-10-13T16-31-27-507Z`, `page-2026-10-13T16-31-34-531Z`, `page-2026-10-13T16-31-49-796Z`, `page-2026-10-13T16-32-01-113Z`, `page-2026-10-13T16-32-07-325Z`, `page-2026-10-13T16-32-16-681Z`, `page-2026-10-13T16-32-40-911Z`) are tool-written, not worker-authored. They were read as readbacks only.

No other repository file was written, edited or deleted in T4.

## T9 — AC-6: FX_Orders runtime Form blank-criteria verification (cycle 9; read-only; one runtime open, one FiP activation, one F4; no mutation)

- Task T9, cycle 9, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `9edc52f0-6fae-4f48-90e5-9fed2de0479e`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): establish the T8 final state; determine whether the separate FX_Orders runtime Form is open; conditional runtime close only if open and clean; open the exact runtime Form once through Form > Open > Select Form; establish Filter in Place (FiP only if needed); blank criteria; screenshot before F4; one F4; verify the two rows and Save disabled; change nothing. No IDOs query, no property wizard, no class selection, no Save, no checkout action, no IDOs close/reopen, no Designer action. AC-7 reserved.

### Gate (T9)

| Step | Observed | Result |
|---|---|---|
| G1 | `browser_tabs` list (before any selection): tab 0 Designer (current); tab 1 Mongoose Web Client | Listed first; tab 0 not snapshotted, clicked, typed or captured |
| G2 | `browser_tabs` select tab 1 | Succeeded after the list |
| G3 | `browser_snapshot` (tab 1): IDOs Form tab selected; IDO Name `FX_Orders` (one row, checked); Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled; Save disabled; Properties grid 16 Bound rows; the tab strip shows **only the IDOs tab** | Matches the T8 final state |
| G4 | Runtime Form presence | **Absent**: no `FX_Orders` runtime tab in the tab strip (the earlier Form tabs were lost in the T4 session recovery). The conditional runtime close is therefore **not applicable** (runtime close count 0). No close/reopen pair was manufactured and the IDOs Form was not closed |
| G5 | Session-warning alert | A portal alert "Your session is about to expire in 29 minute(s). Save your data and log on again." was present in the Mongoose frame. It is **not** the "Session Expired" modal; no sign-in page; no re-login was performed. It intercepted the next click (see actions) |

**Gate verdict: verified** (one IDOs Form, Revision 2, operator checkout, Save disabled, 16 properties). Runtime Form absent, so it was opened fresh.

### Actions (T9, in order)

| # | Action | Observed | Result |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | `browser_snapshot` (gate) | As G3–G5 | Passed |
| 4 | Click the Form menu (`f1e10`) | **Timed out** (5 s): "`portal-notification` … `ids-text role=alert` … subtree intercepts pointer events". The Form menu did not open | Failed (intercepted) |
| 5 | Dismiss the portal session-warning banner once with its own close control (`Close notification`) — standing authorization 2026-10-10 (banner intercepting a click) | Banner dismissed; not a Session Expired modal; no link followed; no message acted on | Dismissed once |
| 6 | `browser_snapshot` (after dismissal; read with a Grep) | Banner gone; Form menu reachable | Recovery snapshot |
| 7 | Click the Form menu (once) | Menu opened: `Open` enabled; `Close and Save Changes` enabled (because the IDOs Form is open; **not used**) | Opened |
| 8 | `browser_find` menu items | `Open` (`f1e1144`) | — |
| 9 | Click `Open` (once) | Select Form dialog opened; filter pre-filled `IdoCollections` with two rows | — |
| 10 | `browser_type` `FX_Orders` into the Select Form Filter (one fill) | Filter `FX_Orders`; **one row**: `FX_Orders / FX_Orders` (no search Form matched) | — |
| 11 | Key `Tab` (once) | Filter committed | — |
| 12 | Click the `FX_Orders / FX_Orders` row (once) | Row active (`gridcell "FX_Orders" [active]`) | Exact row chosen |
| 13 | Click Select Form `OK` (once) | Runtime Form opened: `favoriteContext=FX_Orders`; tab `FX_Orders` selected beside `IDOs`; status bar `Order Number (Object 1 of 1)` (not FiP); Save disabled; an unsaved add-mode placeholder row (Order Number `3`, Count `1`, blank Customer ID and Item) was displayed, as EXP-073 and EXP-078 T7 recorded | Opened once |
| 14 | Click `FiP` (Filter in Place) (once; the only FiP activation, needed because the status bar was not FiP) | Status bar `Filter in Place`; FiP toolbar button active; Save, New (before query) and Refresh disabled; criteria Order Number, Customer ID, Item and Count all blank | FiP active |
| 15 | Screenshot `t9-01` (blank criteria, FiP, before F4) | Blank criteria; status `Filter in Place`; Save greyed | `t9-01` |
| 16 | Key `F4` (once; the sole runtime query) | Query ran; placeholder replaced by the query result | Once |
| 17 | Wait 3 s; `browser_snapshot` | Status `Customer ID (Object 1 of 2)`; **two rows**: `1 / FX001 / dumbbell / 2` and `2 / FX002 / eggs / 1`; detail for record 1 (Order Number 1; Customer ID FX001; Item dumbbell; Count 2); Save **disabled**; New enabled (post-query); no dialog | Gate |
| 18 | Screenshot `t9-02` (result, record 1 detail, both row headers) | Row headers 1 and 2; detail record 1; status `Customer ID (Object 1 of 2)`; Save greyed | `t9-02` |
| 19 | Mouse move to the grid; wheel `deltaX +400` (ordinary horizontal scrolling, once) | The grid did not scroll; the data columns stayed clipped in the image | Scroll attempt not effective |
| 20 | Screenshot `t9-03` | Visually the same as `t9-02` (grid still clipped); recorded as a non-informative capture | `t9-03` |
| 21 | Stopped | The runtime Form remains open, clean, with Save disabled and the Customer ID combobox holding focus (text selected). No key was pressed after the F4; nothing was typed into any field | — |

No Escape or Enter. No second F4. No field, row or record was edited, saved, created or deleted. The Customer ID combobox has keyboard focus with its text selected; this focus was not used to change anything.

### Runtime row verification (T9; AC-6)

| Row | Order Number | Customer ID | Item | Count | Source of the value | Checks |
|---|---|---|---|---|---|---|
| 1 | 1 | FX001 | dumbbell | 2 | Detail panel (record 1; the image) and the accessibility readback (`gridcell "1"`, `"FX001"`, `"dumbbell"`, `"2"`) | Matches the required 1 / FX001 / dumbbell / 2 |
| 2 | 2 | FX002 | eggs | 1 | Accessibility readback only (`gridcell "2"`, `"FX002"`, `"eggs"`, `"1"`); the grid cells are clipped in the image | Matches the required 2 / FX002 / eggs / 1 (accessibility readback; visually clipped) |

- **Exactly two rows**: the grid shows two row headers (1 and 2) and the status reads `Object 1 of 2`.
- **Save: disabled** (toolbar Save greyed; the snapshot reads `button "Save" [disabled]`).
- **Nothing changed**: no edit, no Save, no New, no Delete, no Refresh was invoked after the query.

### Limitations (T9)

- **Row 2 values are shown by accessibility readback only.** The grid's data columns are clipped in the screenshots at this window width; the horizontal wheel scroll did not change the clip (one attempt, not repeated). The row 2 detail was not shown by navigating to it, because a row-header click would move the current record and was not required. The readback is the supporting evidence for row 2.
- The add-mode placeholder (Order Number 3, Count 1) that was displayed before the query was not saved and was replaced by the query result. It is not a record.
- Same session only; no database read; no durability claim.

### Action counts (T9 only)

| Operation | T9 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **Runtime close** | **0** (the runtime Form was **absent** after the T4 session recovery; the conditional close was not applicable) |
| **Runtime open (Select Form)** | **1** (the single permitted runtime reopen; `FX_Orders / FX_Orders`) |
| **Runtime query (F4)** | **1** (the sole permitted runtime query) |
| FiP activation (visible toolbar control) | **1** (needed; the status bar was not FiP after the open) |
| IDOs close / reopen | 0 / 0 (IDOs Form not touched; still open and clean) |
| Target F4 queries (FX_Orders, IDOs) | 0 (budget exhausted at 3 of 3 in T8) |
| New Table / New Property / Finish / class selection / Save | 0 / 0 / 0 / 0 / 0 |
| Strings, class edits, SQL, Forms, runtime records (edit) | 0 |
| Designer interaction | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login (session-expiry procedure) | 0 |
| Session-warning banner dismissal (portal close control, once) | **1** (authorized; the banner intercepted the Form-menu click; not a session-expired modal) |
| Browser JavaScript / evaluate / run-code / console / network | 0 |
| Direct URL navigation / refresh / restart | 0 / 0 / 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots explicit untargeted / targeted | **3 / 0** (gate; after the Filter commit; after F4) |
| `browser_find` | **1** (Form menu item `Open`) |
| Element clicks (successful / failed) | **6 / 1** (successful: banner close; Form menu; Open; FX_Orders row; Select Form OK; FiP. Failed: the first Form-menu click, intercepted by the banner, timed out) |
| `browser_type` (succeeded / refused) | **1 / 0** (Select Form filter `FX_Orders`) |
| Key presses (Tab / F4 / Enter / Escape) | **2** (Tab 1; F4 1) / 0 / 0 |
| Waits | 1 (3 s after F4) |
| Mouse move / wheel | 1 / 1 (grid horizontal scroll attempt; not effective) |
| Screenshots | **3** (`t9-01`, `t9-02`, `t9-03`) |
| Select Form dialogs answered (OK) | **1** (in-page dialog; not a confirmation) |
| Native dialogs | 0 |
| Ref-not-found | 0 |
| Timeouts | **1** (the intercepted Form-menu click; cleared by the banner dismissal) |

### Cumulative browser action audit after T9 (T1 through T9; exact counts)

| Operation | Cumulative after T8 | T9 delta | **Cumulative after T9** | Budget status |
|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | none in this experiment |
| New Table / table wizard OK | 1 / 1 | 0 / 0 | **1 / 1** | used |
| New Property wizard / Finish | 3 / 3 | 0 / 0 | **3 / 3** | used |
| Class selections | 2 | 0 | **2** | used |
| Save | 0 | 0 | **0** | 0 of 1 used |
| IDOs close / reopen pairs | 2 / 2 | 0 / 0 | **2 / 2** | used |
| IDOs Form openings via Select Form (not pairs) | 1 | 0 | **1** | operator-approved T5 |
| Target F4 queries (FX_Orders, IDOs) | 3 | 0 | **3** | used |
| **Runtime close / reopen / query** | 0 / 0 / 0 | **0 / 1 / 1** | **0 / 1 / 1** | budget 1 / 1 / 1; close not applicable (absent after T4 recovery); reopen and query used |
| FiP activation (runtime) | 0 | 1 | **1** | needed to reach blank-criteria FiP |
| Properties added | 3 | 0 | **3** | complete |
| Strings, classes (edit), SQL, Forms, runtime records (edit), IDO or property changes | 0 | 0 | **0** | — |
| Designer interaction | 0 | 0 | **0** | — |
| Designer read-only snapshot (inadvertent, T2) | 1 | 0 | **1** | disclosed |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** | — |
| Re-logins (session-expiry procedure) | 1 | 0 | **1** | used once, T4 |
| Direct URL navigation (portal step) | 1 | 0 | **1** | — |
| Native dialogs (T4 beforeunload, accepted) | 1 | 0 | **1** | — |
| Session-warning banner dismissals (portal close control) | 0 | 1 | **1** | authorized; T9 |
| `browser_tabs` list / select | 8 / 8 | 1 / 1 | **9 / 9** | — |
| Snapshots explicit untargeted / targeted | 20 / 1 | 3 / 0 | **23 / 1** | the T2 targeted one returned the wrong field |
| `browser_find` | 15 | 1 | **16** | — |
| Element clicks (successful / failed) | 53 / 1 | 6 / 1 | **59 / 2** | failures: T4 intercepted New Property; T9 intercepted Form menu (both timeouts) |
| `browser_type` (succeeded / refused) | 10 / 0 | 1 / 0 | **11 / 0** | — |
| Key presses (Tab / F4 / Enter / Escape) | 9 / 0 / 0 | 2 / 0 / 0 | **11 / 0 / 0** | — |
| Waits | 5 | 1 | **6** | — |
| Mouse moves / wheel | 5 / 5 | 1 / 1 | **6 / 6** | — |
| Screenshots | 24 | 3 | **27** | — |
| Ref-not-found / timeouts | 0 / 1 | 0 / 1 | **0 / 2** | both timeouts were portal/session-alert intercepts |
| Select Form dialogs answered (OK) | 3 | 1 | **4** | in-page dialogs, not confirmations |
| Browser JavaScript / evaluate / run-code / console / network | 0 | 0 | **0** | — |

### Worker-written-file inventory (T9)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T9 section; cumulative audit after T9; AC-6 row; open questions).
- `evidence/EXP-079/t9-01-runtime-pre-f4-blank-criteria-filter-in-place.png` (created).
- `evidence/EXP-079/t9-02-runtime-post-f4-two-rows-result.png` (created).
- `evidence/EXP-079/t9-03-runtime-two-rows-grid-scrolled-columns.png` (created; visually equivalent to `t9-02`; the grid did not scroll).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-51-56-557Z`, `page-2026-10-13T16-52-12-559Z.yml`, `page-2026-10-13T16-52-21-757Z.yml`, `page-2026-10-13T16-52-38-672Z.yml`, `page-2026-10-13T16-52-59-764Z.yml`) are tool-written, not worker-authored. Read as readbacks only.

No other repository file was written, edited or deleted in T9.

### Decisive evidence (T9)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t9-01-runtime-pre-f4-blank-criteria-filter-in-place.png` | Runtime Form tab `FX_Orders` selected beside `IDOs`; status bar `Filter in Place`; Order Number, Customer ID, Item and Count all blank; Save greyed; DEM identity bar | The blank criteria in Filter in Place before the single F4 | That F4 returned the rows (see `t9-02`) |
| `t9-02-runtime-post-f4-two-rows-result.png` | Same tab; status `Customer ID (Object 1 of 2)`; row headers 1 and 2; detail record 1: Order Number 1, Customer ID FX001 (combobox focused, text selected), Item dumbbell, Count 2; Save greyed | **AC-6** exactly two rows (headers 1 and 2; `Object 1 of 2`); record 1 values 1 / FX001 / dumbbell / 2; Save disabled | Row 2's data values in the image (clipped; see the accessibility readback in the T9 section); the database state |
| `t9-03-runtime-two-rows-grid-scrolled-columns.png` | Same as `t9-02`; the horizontal wheel did not reveal columns | Only that the attempted scroll was ineffective; the Form was unchanged after the attempt | Any row-2 column value (not shown) |

Acceptance mapping (T9): **AC-6** is supported as observed by `t9-01`, `t9-02` and the accessibility readback for both rows (row 1 visible; row 2 by readback). `t9-03` adds no evidence.

## Acceptance status (after T9)

| AC | Status after T9 |
|---|---|
| AC-1 to AC-5 | Supported as observed (see the T1–T8 sections; re-observed at T8). |
| **AC-6** | **Supported as observed** (T9). Runtime close count 0 (absent after the T4 session recovery; not applicable). One reopen through Select Form and one blank-criteria FiP query (one F4). Exactly two rows: 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1 (row 2 by accessibility readback; grid data clipped in the image). Save disabled. Nothing changed. |
| AC-7 | **Reserved** for a separate documentation-only task (final report, reconciliation of all counts, and the coordinator's final acceptance). Not finalized in T9. |

## T8 — AC-5: clean IDOs close/reopen recovery pair and the third (final) visible-criterion target query (cycle 8; read-only; no mutation)

- Task T8, cycle 8, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `d15eddad-50e2-44f8-9034-f1b54b8e81bf`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): pre-close gate (clean, Save disabled, no wizard or dialog, 16 properties); close the clean IDOs Form once; reopen IDOs / IdoCollections once through Form > Open > Select Form; Filter in Place established before criteria; one FX_Orders query (criterion once, Tab, pre-F4 screenshot, F4 once); recovered Tables view (three entries, both joins); full 16-property inventory (upper and lower screenshots); comparison against T1 and T3/T6/T7. No New Table, New Property, Finish, class selection, Save, another F4, another close/reopen, or runtime access.

### Pre-close gate (T8)

| Step | Observed | Result |
|---|---|---|
| G1 | `browser_tabs` list (before any selection): tab 0 Designer (current); tab 1 Mongoose Web Client (`favoriteContext=IdoCollections`). Tab 0 not snapshotted, clicked, typed or captured | Listed first |
| G2 | `browser_tabs` select tab 1 | Succeeded after the list |
| G3 | `browser_snapshot` (tab 1): IDOs Form, tab selected; IDO Name `FX_Orders` (one row, checked); Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled; Access As `G6R`; **Save disabled**; no wizard, no dialog, no banner | Clean; checked out to the operator |
| G4 | Properties grid (read from G3): **16 Bound rows** (FX_OrderNumber 1; FX_CusName 2; FX_CustomerID 2; FX_ItmsDescription 2; FX_Item 3; FX_ItmsCost 3; FX_Count 4; CreatedBy 5; UpdatedBy 6; CreateDate 7; RecordDate 8; RowPointer 9; FX_CusAddress 10; NoteExistsFlag 10; InWorkflow 11; FX_ItmsPicture 12) | Expected 16 present |

Gate verdict: **verified**; the Form was clean (Save disabled), so the close could proceed without losing work.

### Actions (T8, in order)

| # | Action | Observed | Result |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | `browser_snapshot` (pre-close gate) | As G3–G4 | Passed |
| 4 | **Click the IDOs `Close Panel IDOs` control** (Form-tab control; one click) | Tab closed; no prompt; no alert or dialog in the following read (the Save control stayed disabled) | Closed once |
| 5 | Click the `Form` menu (one) | Menu opened; `Open` enabled (`Close and Save Changes` disabled: no Form open) | — |
| 6 | `browser_find` for the Form menu items | `Open` present and enabled | — |
| 7 | Click `Open` (one) | Select Form dialog opened; Filter `IdoCollections`; **two rows**: `G6RIdoCollectionSearch` and `IDOs / IdoCollections` (the two-row result recurred; see T1 deviation) | Dialog opened |
| 8 | Click the `IDOs / IdoCollections` row (one; not the search Form row) | Row active (`gridcell "IDOs" [active]`); search Form row not active | Exact row chosen |
| 9 | Click Select Form `OK` (one) | IDOs Form reopened (`favoriteContext=IdoCollections`); status bar read in the next snapshot: `Filter in Place`; IDO Name blank and active; the FiP toolbar control was **not** clicked | Reopened once; FiP confirmed by status bar |
| 10 | `browser_snapshot` (settled) | Status `Filter in Place`; IDO Name textbox active and blank | — |
| 11 | `browser_type` `FX_Orders` into IDO Name (one fill) | Typed | — |
| 12 | Key `Tab` (one) | Focus moved; echo row `FX_Orders` | Committed |
| 13 | Screenshot `t8-01` (pre-F4 criterion) | IDO Name `FX_Orders`; status `Filter in Place`; echo row | `t8-01` |
| 14 | Key `F4` (one; the third and final target query) | Query ran | Once |
| 15 | Wait 3 s; `browser_snapshot` | Status `Description (IDOs 1 of 1)`; **one row** FX_Orders (Revision Num 2; Revision Date 10/13/2026); Locked By the operator placeholder; Check In and Undo Check Out enabled; Save disabled | Gate |
| 16 | Screenshot `t8-02` (identity and Tables view) | Identity header; Tables sub-tab selected with three entries | `t8-02` |
| 17 | Click the Properties sub-tab (one; view) | Properties grid: 16 rows | — |
| 18 | Mouse move; screenshot `t8-03` (upper rows 1–8) | Rows 1–8 | `t8-03` |
| 19 | Wheel +600 (view); screenshot `t8-04` (lower rows 9–16) | Rows 9–16 ending at FX_ItmsPicture (row 16) | `t8-04` |
| 20 | Stopped | The IDOs Form remains open and clean; Properties sub-tab selected; no dialog | — |

No Save, New Table, New Property, Finish, class selection, Check Out, Check In or Undo Check Out, runtime action or Designer action. No Escape or Enter. No second F4.

### Recovered identity and checkout (T8)

| Field | Observed |
|---|---|
| IDO Name | `FX_Orders` (one row, exact name) |
| Project Name | `FX_HelloWorldProject01` |
| Revision Num | **2** |
| Revision Date | `10/13/2026` |
| Locked By | operator placeholder (accessibility readback; clipped in the image) |
| Access As | `G6R` |
| Checkout | **checked out to the operator**: row checkbox checked; **Check In enabled; Undo Check Out enabled** |
| Save | **disabled**; the Form is clean; no outstanding edit |
| Status bar | `Description (IDOs 1 of 1)` after the query; `P&roperties` after the sub-tab change |

### Recovered Tables view (T8; three entries and both joins)

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| 3 | FX_Orders | fxords | Primary Base | Inner | (blank) |

Exactly three entries; both joins present; the base entry unchanged. Matches the T2 Tables-after-OK state and the T5 recovered state.

### Baseline versus recovered comparison (T8)

Baseline: T1 13-row inventory (`t1-02`, `t1-03`, `t1-04`); additions: T3 (FX_ItmsDescription), T6 (FX_ItmsCost), T7 (FX_ItmsPicture).

| # | Property (recovered row) | Seq | Class | Property Type / Column | Key | Data Type / Length / Column Type | Read Only | Required | T1 baseline or addition match |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound / FX_OrderNumber | 1 | (class-bound) | no | yes | **matches T1** |
| 2 | FX_CusName | 2 | (blank) | Bound / FX_Label | 0 | String / 100 / nvarchar | yes | no | **matches T1** |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound / FX_CustomerID | 0 | (class-bound) | no | yes | **matches T1** |
| 4 | FX_ItmsDescription | 2 | (blank) | Bound / FX_Description (fxitms) | 0 | String / 150 / nvarchar | yes | no | **matches T3**; Read Only checked; no class |
| 5 | FX_Item | 3 | FX_Item | Bound / FX_Item | 0 | (class-bound) / 50 | no | yes | **matches T1** |
| 6 | FX_ItmsCost | 3 | FX_Cost | Bound / FX_Cost (fxitms) | 0 | Decimal / 18 / decimal | yes | no | **matches T6**; Read Only checked |
| 7 | FX_Count | 4 | (blank) | Bound / FX_Count | 0 | Long Integer / int | no | no | **matches T1** |
| 8 | CreatedBy | 5 | (blank) | Bound / CreatedBy | 0 | String / 128 / UsernameType | yes | no | **matches T1** |
| 9 | UpdatedBy | 6 | (blank) | Bound / UpdatedBy | 0 | String / 128 / UsernameType | yes | no | **matches T1** |
| 10 | CreateDate | 7 | (blank) | Bound / CreateDate | 0 | Date / CurrentDateType | yes | no | **matches T1** |
| 11 | RecordDate | 8 | (blank) | Bound / RecordDate | 0 | Date / CurrentDateType | yes | no | **matches T1** |
| 12 | RowPointer | 9 | (blank) | Bound / RowPointer | 0 | GUID / RowPointerType | yes | no | **matches T1** |
| 13 | FX_CusAddress | 10 | (blank) | Bound / FX_Address | 0 | String / 150 / nvarchar | yes | no | **matches T1** |
| 14 | NoteExistsFlag | 10 | (blank) | Bound / NoteExistsFlag | 0 | Byte / FlagNyType | no | no | **matches T1** |
| 15 | InWorkflow | 11 | (blank) | Bound / InWorkflow | 0 | Byte / FlagNyType | no | no | **matches T1**; Read Only Record checked (accessibility readback, as T1) |
| 16 | FX_ItmsPicture | 12 | FX_Picture | Bound / FX_Picture (fxitms) | 0 | Binary / (grid blank; -1 wizard) / varbinary | yes | no | **matches T7** |

Comparison results:
- **Original 13 unchanged:** rows 1–3 and 5–15 match T1 row for row (names, sequences, classes, columns, key sequences, data types, lengths, column types and checkbox states as read in the accessibility tree).
- **Three additions present once each:** FX_ItmsDescription (row 4), FX_ItmsCost (row 6) and FX_ItmsPicture (row 16), with no duplicates of the three new names and no unexpected entry.
- **Total:** 16 Bound rows (accessibility count), matching the expected 16.
- **Read Only:** checked on all three additions, as the brief requires.
- **Pre-Finish-only values (not independently visible in the recovered grid):** the Decimal Position 2 of FX_ItmsCost (shown only in the pre-Finish wizard, `t6-01`) and the Length -1 of FX_ItmsPicture (shown only in the pre-Finish wizard, `t7-01`). The grid shows Length blank for FX_ItmsPicture and no decimal-position column. **These are not proven stored values.** Other displayed values (the Decimal type and length 18 of FX_ItmsCost, Binary type and varbinary column type of FX_ItmsPicture) are visible in the recovered grid.
- **Unlabelled inherit controls** (the lower inherit boxes in the wizards) are not identified; nothing about them is claimed.

### Recovered checkout and Save (T8)

- Checked out to the operator: yes (Check In and Undo Check Out enabled; row checkbox checked).
- Revision Num 2: yes.
- Save: disabled. No dirty state. No ordinary Save was performed in T8 or in the whole experiment (Save budget 0 of 1).

### Action counts (T8 only)

| Operation | T8 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Table / New Property / Finish / class selection / Save** | **0 / 0 / 0 / 0 / 0** |
| IDOs close / reopen | **1 / 1** (the second and final recovery pair; the reopen is through Form > Open > Select Form) |
| Target F4 queries (FX_Orders) | **1** (the third and final operator-authorized target query) |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, class edits, SQL, Forms, runtime records, IDO or property changes | 0 |
| Designer interaction | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login | 0 (none needed in T8) |
| Browser JavaScript / evaluate / run-code / console / network | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted (explicit `browser_snapshot`) | **3 / 0** (gate after select; settled after OK; after the F4 wait). Snapshot output returned inline by clicks and typing is tool output and not counted, as in T1–T7 |
| `browser_find` | **1** (Form menu items) |
| Element clicks (successful / failed) | **6 / 0** (Close Panel IDOs; Form menu; Open; IDOs row; Select Form OK; Properties sub-tab) |
| `browser_type` (succeeded / refused) | **1 / 0** (IDO Name `FX_Orders`) |
| Key presses (Tab / F4 / Enter / Escape) | **2** (Tab 1; F4 1) / 0 / 0 |
| Waits | 1 (3 s) |
| Mouse move / wheel | 1 / 1 |
| Screenshots | **4** (`t8-01` to `t8-04`) |
| Select Form dialogs answered | **1** (OK; in-page dialog, not a confirmation) |
| Native dialogs | 0 (the close produced no prompt) |
| Ref-not-found / timeouts | 0 / 0 |

### Cumulative browser action audit after T8 (T1 through T8; exact counts)

| Operation | Cumulative after T7 | T8 delta | **Cumulative after T8** | Budget status |
|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | none in this experiment |
| New Table / table wizard OK | 1 / 1 | 0 / 0 | **1 / 1** | budget 1 / 1 (used) |
| New Property wizard / Finish | 3 / 3 | 0 / 0 | **3 / 3** | budget 3 / 3 (used) |
| Class selections | 2 | 0 | **2** | budget 2 (used) |
| Save | 0 | 0 | **0** | budget 0 or 1 (not used) |
| IDOs close / reopen pairs | 1 / 1 | 1 / 1 | **2 / 2** | budget 2 pairs (used) |
| IDOs Form openings via Select Form (not pairs) | 1 | 0 | **1** (T5, operator-approved) | — |
| Target F4 queries (FX_Orders) | 2 | 1 | **3** | budget 3 (used) |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | budget 1 / 1 / 1 (reserved for AC-6) |
| Properties added | 3 | 0 | **3 (FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture)** | complete |
| Designer interaction | 0 | 0 | **0** | — |
| Designer read-only snapshot (inadvertent, T2) | 1 | 0 | **1** | disclosed |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** | — |
| Re-logins (session-expiry procedure) | 1 | 0 | **1** | used once, T4 |
| Direct URL navigation (portal step) | 1 | 0 | **1** | — |
| Native dialogs (beforeunload, accepted) | 1 | 0 | **1** | — |
| `browser_tabs` list / select | 7 / 7 | 1 / 1 | **8 / 8** | — |
| Snapshots untargeted / targeted (explicit) | 17 / 1 | 3 / 0 | **20 / 1** | the T2 targeted one returned the wrong field |
| `browser_find` | 14 | 1 | **15** | — |
| Element clicks (successful / failed) | 47 / 1 | 6 / 0 | **53 / 1** | the T4 failure was the intercepted click |
| `browser_type` (succeeded / refused) | 9 / 0 | 1 / 0 | **10 / 0** | — |
| Key presses (Tab / F4 / Enter / Escape) | 7 / 0 / 0 | 2 / 0 / 0 | **9 / 0 / 0** | — |
| Waits | 4 | 1 | **5** | — |
| Mouse moves / wheel | 4 / 4 | 1 / 1 | **5 / 5** | — |
| Screenshots | 20 | 4 | **24** | — |
| Ref-not-found / timeouts | 0 / 1 | 0 / 0 | **0 / 1** | the timeout was the intercepted click (T4) |
| Select Form dialogs answered (OK) | 2 | 1 | **3** | in-page dialogs, not confirmations |
| Browser JavaScript / evaluate / run-code / console / network | 0 | 0 | **0** | — |

### Worker-written-file inventory (T8)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T8 section; cumulative audit after T8; AC-5 row; open questions).
- `evidence/EXP-079/t8-01-pre-f4-recovery-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-079/t8-02-recovered-identity-and-tables-view.png` (created).
- `evidence/EXP-079/t8-03-recovered-inventory-upper-rows-1-8.png` (created).
- `evidence/EXP-079/t8-04-recovered-inventory-lower-rows-9-16.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-48-28-929Z.yml`, `page-2026-10-13T16-48-46-846Z.yml`, `page-2026-10-13T16-49-02-300Z.yml`, `page-2026-10-13T16-49-07-999Z.yml`) are tool-written, not worker-authored, and were read as readbacks only.

No other repository file was written, edited or deleted in T8.

### Decisive evidence (T8)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t8-01-pre-f4-recovery-idos-fx-orders-criterion.png` | IDOs Form (reopened via Select Form); status bar `Filter in Place`; IDO Name `FX_Orders` (active); echo row `FX_Orders`; Check Out and Undo Check Out drawn in the blank-Form style; DEM identity bar | The pre-F4 criterion and Filter in Place state for the recovery query | That F4 returned one row (see `t8-02`); the checkout state (not yet loaded) |
| `t8-02-recovered-identity-and-tables-view.png` | IDOs; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Save greyed; Tables: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Items / fxitms / Secondary / Left Outer / `fxitms.[FX_Item] = fxords.[FX_Item]`; FX_Orders / fxords / Primary Base / Inner; status `Description (IDOs 1 of 1)` | **AC-5** recovered identity, checkout, Save state and Tables view (three entries, both joins) after one visible-criterion F4 | The property inventory (see `t8-03`, `t8-04`); the full Locked By value; database state |
| `t8-03-recovered-inventory-upper-rows-1-8.png` | Same header; Properties rows 1–8: FX_OrderNumber, FX_CusName (seq 2, nvarchar 100), FX_CustomerID, **FX_ItmsDescription (seq 2, Bound to FX_Description, String 150, nvarchar, Read Only, no class)**, FX_Item, **FX_ItmsCost (seq 3, FX_Cost, Decimal 18, decimal, Read Only)**, FX_Count, CreatedBy | **AC-5** rows 1–8 of the recovered inventory and the two earlier additions | Rows 9–16 (see `t8-04`); the Read Only Record column; the stored Decimal Position |
| `t8-04-recovered-inventory-lower-rows-9-16.png` | Same header; rows 9–16: UpdatedBy … FX_CusAddress (seq 10) … NoteExistsFlag … InWorkflow (row 15) … **row 16 FX_ItmsPicture, seq 12, FX_Picture, Bound to Column FX_Picture, Binary, varbinary, Read Only checked** | **AC-5** rows 9–16, the end of the 16-row inventory, FX_ItmsPicture's binding and class | Length -1 (blank in the grid); the Read Only Record column (accessibility readback only) |

Acceptance mapping (T8): **AC-5** is supported by `t8-01` to `t8-04`, with the baseline-versus-recovered comparison above.

## Acceptance status (after T8)

| AC | Status after T8 |
|---|---|
| AC-1 | Supported (T1; re-verified T5 and T8). |
| AC-2 | Supported (T2; re-observed T5 and T8: three Tables entries with both joins). |
| AC-3 | Supported as observed for the three wizards (T3, T6, T7). |
| AC-4 | Supported as observed after the Finishes (T7 post-Finish; T8 recovered): exactly three new properties with the recorded bindings, classes, types, sequence numbers and Read Only state; the 13 originals unchanged; Save disabled; still checked out to the operator at Revision 2. Limits: Length -1 and Decimal Position are wizard-only values, not visible in the recovered grid. |
| AC-5 | **Supported as observed** (T8): clean close and single reopen; one visible-criterion query recovers one FX_Orders checked out to the operator at Revision 2; three Tables entries with both joins; 16 Bound properties equal to the baseline plus the three additions. Same session only; not database durability. |
| AC-6 | **Not started**: the FX_Orders runtime close/reopen and blank-criteria query (1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1) are reserved for a separately authorized task. |
| AC-7 | Partially drafted (audit, inventories, comparison and evidence recorded). The final report waits on AC-6. |

## T7 — New Property wizard: FX_ItmsPicture (Bound to fxitms.FX_Picture; Property Class FX_Picture); one Finish (cycle 7; third and final property; AC-3 supported for the three wizards)

- Task T7, cycle 7, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `fa2f90d3-f3ba-4cc4-9b10-cb9b927b8e76`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): gate on identity, checkout, Save and the 15-property inventory without a target query; New Property once (the third and final authorized opening); Bound; Bind To `fxitms.FX_Picture`; one plain fill of the name; Property Class `FX_Picture` selected once, never the look-alike; readback of class, inherit states and types; screenshot before Finish; one Finish; verify 16 properties. No Save, no close/reopen, no F4, no runtime action, no Designer action.

### Gate (T7; no target query; no Designer interaction)

| Step | Action | Observed | Result |
|---|---|---|---|
| G1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client | Listed first; tab 0 not snapshotted, clicked, typed or captured |
| G2 | `browser_tabs` select tab 1 | Tab 1 current | Succeeded after the list |
| G3 | `browser_snapshot` (tab 1) | IDOs Form (`favoriteContext=IdoCollections`), clean; IDO Name `FX_Orders` (one row, checked); Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; **Check In and Undo Check Out enabled** (checked out to the operator); Access As `G6R`; Save disabled; no dialog; status `New Property (IDOs 1 of 1)` | Gate passed |
| G4 | Properties grid (read from G3) | **15 rows**: FX_OrderNumber 1; FX_CusName 2; FX_CustomerID 2; FX_ItmsDescription 2 (Bound to FX_Description; String 150 nvarchar; Read Only checked; no class); FX_Item 3; **FX_ItmsCost 3 (Bound to FX_Cost; class FX_Cost; Decimal 18; decimal; Read Only checked)**; FX_Count 4; CreatedBy 5; UpdatedBy 6; CreateDate 7; RecordDate 8; RowPointer 9; FX_CusAddress 10; NoteExistsFlag 10; InWorkflow 11. **No FX_ItmsPicture row; no row bound to `FX_Picture`** | Matches T6; FX_ItmsPicture absent; no `fxitms.FX_Picture` binding |
| G5 | Tables view | Not re-read in T7 (verified in T5; no table action since; no uncertainty) | Recorded as a reasoned omission |

**Gate verdict: verified.** One IDO, Revision 2, checked out to the operator, Save disabled, 15 properties, FX_ItmsPicture absent, no `fxitms.FX_Picture` binding. Proceeded to the wizard. No target query was issued.

### Actions (T7, in order)

| # | Action | Observed | Result |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | `browser_snapshot` (gate) | As G3–G4 | Passed |
| 4 | **Click `New Property`** (the third and final authorized opening) | Wizard opened (`favoriteContext=IdoPropertyWizard`). Page 1: Bound active; Derived, Unbound, Subcollection unselected; Next enabled; Finish disabled. Page-1 "Property Name:" reads `FX_Orders` (the IDO name; the EXP-061 accessibility mislabel) | Opened once |
| 5 | **Click `Next >`** (one) | Page 2: Bind To, Property Name and Property Class blank; inherit boxes disabled; Finish enabled; Next disabled | — |
| 6 | **Click Bind To `Open`** (one); `browser_find` `fxitms.FX_Picture` | Lookup lists `fxitms.FX_Item`, `fxitms.FX_Picture`, `fxitms.FX_UM` and further entries | — |
| 7 | **Click the `fxitms.FX_Picture` option** (one) | Bind To `fxitms.FX_Picture`. The wizard auto-filled Property Name `FX_Picture`, and the type fields showed Binary, Length -1, varbinary as the uncommitted preview | — |
| 8 | **Property Name**: one plain fill `FX_ItmsPicture` (replaces the auto-filled `FX_Picture`) | Readback `FX_ItmsPicture` | — |
| 9 | **Click the Property Class `Open`** (one); `browser_find` "Pi" | Lookup entries include `FX_OrderNumBase`, **`FX_Picture`** (exact), `FX_UM`, and (in a second list read) `G6RItemBase`, **`G6RPiture`** (the look-alike documented in EXP-061), `G6RUM` | Exact entry distinguished from the look-alike |
| 10 | **Click the exact `FX_Picture` option** (one); the look-alike `G6RPiture` was **not** selected | Property Class `FX_Picture` | Class selected once |
| 11 | Fresh untargeted readback (inline with the class click) | Bind To `fxitms.FX_Picture`; Property Name `FX_ItmsPicture`; Property Class `FX_Picture`; Data Type `Binary` (Inherit checked); Length `-1`; Decimal blank (disabled); Column Data Type `varbinary` (Inherit checked); the lower unlabelled inherit box checked; Finish enabled; Next disabled; no message or prompt | Values as expected |
| 12 | Screenshot `t7-01` (configured wizard before Finish) | As row 11, visibly | `t7-01` |
| 13 | **Click `Finish`** (one) | No dialog, alert, confirmation or error text. The wizard closed; the IDOs tab became active; status `New Property (IDOs 1 of 1)` | Invoked once |
| 14 | Post-Finish readback (inline) | **16 Bound rows** (`browser_find` count of rows bound to a column = 16). The new row is the last row: `FX_ItmsPicture`, sequence `12`, Property Class `FX_Picture`, Bound to Column, Column Name `FX_Picture`, Key Sequence 0, Data Type `Binary`, Column Type `varbinary`, Read Only **checked**, Required unchecked, Read Only Record unchecked. Length is blank in the grid (see limitations) | Recorded |
| 15 | Mouse move; wheel +600 (view); screenshots `t7-02` (rows 1–8) and `t7-03` (rows 9–16, ending at FX_ItmsPicture) | Identity header and status; Save greyed | `t7-02`, `t7-03` |
| 16 | Stopped | The IDOs Form remains open, clean, on the Properties sub-tab. No Save performed | — |

No Save, no second wizard, no Escape or Enter, no close/reopen, no F4, no runtime action, no Designer action.

### Wizard field record (verbatim readbacks; FX_ItmsPicture)

| Field | Recorded value |
|---|---|
| Page 1 binding | Bound (radio active; kept) |
| Bind To | `fxitms.FX_Picture` (selected once from the lookup) |
| Property Name | `FX_ItmsPicture` (one plain fill; replaced the auto-filled `FX_Picture`) |
| Property Class | `FX_Picture` (selected once; exact entry; look-alike `G6RPiture` present and not selected) |
| Data Type | `Binary` (Inherit from Property Class: **checked**) |
| Length | `-1` |
| Decimal | blank (a disabled field; no value) |
| Column Data Type | `varbinary` (Inherit from Property Class: **checked**) |
| Lower unlabelled inherit box | Checked; the grey lower panel is disabled and empty. Its purpose is not identified from the image or the readback (see limitations) |
| Finish response | No message; wizard closed; status `New Property (IDOs 1 of 1)` |

Matches the expected Binary, -1, varbinary.

### Post-change inventory (16 rows; AC-3 for FX_ItmsPicture; AC-4 for the three properties)

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound) | — | (class-bound) | no | yes | no |
| 2 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | yes | no | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound) | — | (class-bound) | no | yes | no |
| 4 | FX_ItmsDescription | 2 | (blank) | Bound to Column | FX_Description (fxitms) | 0 | String | 150 | nvarchar | yes | no | no |
| 5 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound) | 50 | (class-bound) | no | yes | no |
| 6 | FX_ItmsCost | 3 | FX_Cost | Bound to Column | FX_Cost (fxitms) | 0 | Decimal | 18 | decimal | yes | no | no |
| 7 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | — | int | no | no | no |
| 8 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 9 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 10 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 11 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 12 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | yes | no | no |
| 13 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | 0 | String | 150 | nvarchar | yes | no | no |
| 14 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no | no |
| 15 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | no | no | yes |
| **16** | **FX_ItmsPicture (new)** | **12** | **FX_Picture** | **Bound to Column** | **FX_Picture (fxitms)** | **0** | **Binary** | **blank in grid (-1 in wizard)** | **varbinary** | **yes** | **no** | **no** |

- The 13 originals, FX_ItmsDescription and FX_ItmsCost are unchanged against the T6 readings.
- Sequence 12 is the next value after InWorkflow (11); the new row therefore appears last in the grid. Observed only; no renumbering.
- Shared sequence values now: 2 (three rows), 3 (two rows), 10 (two rows).

### Post-change state (T7)

- **Save: disabled (clean).** No ordinary Save was performed, so the Save budget remains 0 of 1.
- Identity: FX_Orders; project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled — **still checked out to the operator**.
- Status: `New Property (IDOs 1 of 1)`. No dialog or prompt.

### Limitations (T7)

- **Length -1 is not visible in the post-Finish grid** (the Length cell for FX_ItmsPicture is blank). The -1 value is recorded from the wizard readback before Finish (`t7-01`), as EXP-061 recorded for FX_Picture. The stored length is not established.
- **Decimal field** is disabled and blank for a Binary class; there is no displayed decimal position to record.
- **The unlabelled lower inherit box** (the grey panel beneath the Length/Decimal row) is checked and disabled. Its meaning is not identified; it is recorded, not interpreted.
- The Tables view was not re-read in T7 (see G5).
- The Read Only Record column is off-screen in the captures; its value is an accessibility readback.
- Same session only; no database read; no durability claim.

### Action counts (T7 only)

| Operation | T7 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Property wizard / Finish** | **1 / 1** (the third and final authorized opening; the third and final Finish) |
| Class selections | **1** (FX_Picture; the second and final budgeted class selection) |
| Save | **0** (the Form was clean; no Save needed) |
| New Table / table wizard OK | 0 / 0 |
| IDOs close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, class edits, SQL, Forms, runtime records | 0 |
| Properties changed | 1 property added (FX_ItmsPicture); no other change |
| Designer interaction | 0 (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login | 0 |
| Browser JavaScript / evaluate / run-code / console / network | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted (explicit `browser_snapshot`) | **1 / 0** (gate). The `browser_snapshot` output returned inline by the New Property click and the class click are tool output, counted as in T1–T6 |
| `browser_find` | **2** (`fxitms.FX_Picture` in Bind To; "Pi" in the class lookup, which returned both the exact FX_Picture and the look-alike G6RPiture) |
| Element clicks (successful / failed) | **7 / 0** (New Property; Next; Bind To Open; the fxitms.FX_Picture option; class Open; the exact FX_Picture option; Finish) |
| `browser_type` (succeeded / refused) | **1 / 0** (Property Name, one plain fill) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Waits | 0 |
| Mouse move / wheel | 1 / 1 (grid view) |
| Screenshots | **3** (`t7-01`, `t7-02`, `t7-03`) |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 |

### Cumulative browser action audit after T7 (T1 through T7; exact counts)

| Operation | Cumulative after T6 | T7 delta | **Cumulative after T7** | Budget / note |
|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | none in this experiment |
| New Table / table wizard OK | 1 / 1 | 0 / 0 | **1 / 1** | budget 1 / 1 (used) |
| Builder Add | 1 | 0 | **1** | — |
| New Property wizard / Finish | 2 / 2 | 1 / 1 | **3 / 3** | budget 3 / 3 (**used up**) |
| Class selections | 1 | 1 | **2** | budget 2 (**used up**) |
| Save | 0 | 0 | **0** | budget 0 or 1 (not used) |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | **1 / 1** | budget 2 pairs (1 left; reserved for AC-5 recovery) |
| IDOs Form openings via Select Form (not pairs) | 1 | 0 | **1** (operator-approved in T5) | — |
| Target F4 queries (FX_Orders) | 2 | 0 | **2** | budget reached 2 of 3; the third is reserved for the AC-5 recovery |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | budget 1 / 1 / 1 (reserved, not yet run) |
| Properties added | 2 | 1 | **3 (FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture)** | the expected three; complete |
| Strings, classes (edit), SQL, Forms, runtime records | 0 | 0 | **0** | — |
| Designer interaction | 0 | 0 | **0** | — |
| Designer read-only snapshot (inadvertent, T2) | 1 | 0 | **1** | disclosed |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** | — |
| Re-logins (session-expiry procedure) | 1 | 0 | **1** | used once in T4 |
| Direct URL navigation (portal step only) | 1 | 0 | **1** | — |
| Native dialogs (beforeunload, accepted) | 1 | 0 | **1** | — |
| `browser_tabs` list / select | 6 / 6 | 1 / 1 | **7 / 7** | — |
| Snapshots untargeted / targeted (explicit) | 16 / 1 | 1 / 0 | **17 / 1** | the T2 targeted one returned the wrong field |
| `browser_find` | 12 | 2 | **14** | — |
| Element clicks (successful / failed) | 40 / 1 | 7 / 0 | **47 / 1** | the T4 failure was the intercepted New Property click |
| `browser_type` (succeeded / refused) | 8 / 0 | 1 / 0 | **9 / 0** | — |
| Key presses (Tab / F4 / Enter / Escape) | 7 / 0 / 0 | 0 | **7 / 0 / 0** | Enter 0; Escape 0 |
| Waits | 4 | 0 | **4** | — |
| Mouse moves / wheel | 3 / 3 | 1 / 1 | **4 / 4** | — |
| Screenshots | 17 | 3 | **20** | — |
| Ref-not-found / timeouts | 0 / 1 | 0 | **0 / 1** | the timeout was the intercepted click (T4) |
| Select Form dialogs answered (OK) | 2 | 0 | **2** | in-page dialogs, not confirmations |
| Browser JavaScript / evaluate / run-code / console / network | 0 | 0 | **0** | — |

## T6 — New Property wizard: FX_ItmsCost (Bound to fxitms.FX_Cost; Property Class FX_Cost); one Finish (cycle 6; AC-3 partial, two of three properties; FX_ItmsPicture NOT started)

- Task T6, cycle 6, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `4e5a674e-c299-4dd9-acdf-7738cd01e1f9`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope (bounded instruction): gate on the 14-property state and identity without a target query; New Property once; Bound; Bind To `fxitms.FX_Cost`; Property Name by one plain fill; class FX_Cost selected once; readback of the class, inherit checkboxes and types; screenshot before Finish; one Finish; verify 15 properties. No Save, no FX_ItmsPicture wizard, no close/reopen, no F4, no runtime action, no Designer action.

### Gate (T6; no target query; no Designer interaction)

| Step | Action | Observed | Result |
|---|---|---|---|
| G1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client | Listed first; tab 0 not snapshotted, clicked, typed or captured |
| G2 | `browser_tabs` select tab 1 | Tab 1 current | Succeeded after the list |
| G3 | `browser_snapshot` (tab 1) | IDOs Form, clean (Save disabled); IDO Name `FX_Orders` (one row, checked); Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; **Check In and Undo Check Out enabled** (checked out to the operator); Access As `G6R`; Properties sub-tab selected; no dialog; no banner | Gate passed |
| G4 | Properties grid (read from G3) | **14 rows**: FX_OrderNumber 1; FX_CusName 2; FX_CustomerID 2; FX_ItmsDescription 2 (Bound to FX_Description; String 150 nvarchar; Read Only checked; no class); FX_Item 3; FX_Count 4; CreatedBy 5; UpdatedBy 6; CreateDate 7; RecordDate 8; RowPointer 9; FX_CusAddress 10; NoteExistsFlag 10; InWorkflow 11. **No FX_ItmsCost row; no row bound to `FX_Cost`** | FX_ItmsCost absent |
| G5 | Tables view | Not re-read in T6. The three entries (both joins) were verified in T5 (`t5-02`) and no table action has occurred since; the bounded instruction required a re-read only if uncertain, and there was no uncertainty. Recorded as a reasoned omission, not a skipped check | Not re-read (no uncertainty) |

**Gate verdict: verified.** One IDO, Revision 2, checked out to the operator, Save disabled, 14 properties incl. FX_ItmsDescription, no FX_ItmsCost and no FX_Cost binding. Proceeded to the wizard. No target query was issued.

### Actions (T6, in order)

| # | Action | Observed | Result |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | `browser_snapshot` (gate) | As G3–G4 | Passed |
| 4 | **Click `New Property`** (one open of the wizard; the second of the three authorized) | Wizard opened (`favoriteContext=IdoPropertyWizard`). Page 1: Bound active; Derived, Unbound, Subcollection unselected; Next enabled; Finish disabled. The page-1 "Property Name:" field reads `FX_Orders` (the IDO name; the EXP-061 accessibility mislabel) | Opened once |
| 5 | **Click `Next >`** (one) | Page 2 (Property Attributes): Bind To, Property Name and Property Class blank; Inherit checkboxes disabled and unchecked; Finish enabled; Next disabled | — |
| 6 | **Click Bind To `Open`** (one) | Lookup opened | — |
| 7 | `browser_find` `fxitms.FX_Cost` | Lookup row `fxitms.FX_Cost` present (the lookup also lists `fxitms.CreatedBy`, `fxitms.FX_Description`, `fxitms.FX_Item`) | — |
| 8 | Click the `fxitms.FX_Cost` option (one) | Bind To `fxitms.FX_Cost`. The wizard auto-filled Property Name `FX_Cost` and the type fields **Decimal** (Length 18, Decimal 2 shown) and **decimal** as an uncommitted-class preview | — |
| 9 | **Property Name**: one plain fill `FX_ItmsCost` (replaces the auto-filled `FX_Cost`) | Readback `FX_ItmsCost` | — |
| 10 | **Click the Property Class `Open`** (one) | Class lookup opened | — |
| 11 | `browser_find` `FX_Cost` | Lookup contains `FX_Cost` (one exact match among the list rows read; no look-alike was found in the rows returned) | — |
| 12 | **Click the `FX_Cost` option** (one) | Property Class `FX_Cost`. Inherit checkboxes for Data Type and Column Data Type checked; the third inherit checkbox (the lower panel) checked | Class selected once |
| 13 | Fresh untargeted snapshot (readback) | Bind To `fxitms.FX_Cost`; Property Name `FX_ItmsCost`; Property Class `FX_Cost`; Data Type `Decimal` (inherit checked); Length `18`; Decimal `2`; Column Data Type `decimal` (inherit checked); lower inherit checked; Finish enabled; Next disabled; no message or prompt | Values as expected |
| 14 | Screenshot `t6-01` (configured wizard before Finish) | As row 13, visibly | `t6-01` |
| 15 | **Click `Finish`** (one) | No dialog, alert, confirmation or error text. The wizard closed; the IDOs tab became active; status `New Property (IDOs 1 of 1)` | Invoked once |
| 16 | Post-Finish snapshot (inline) and read of the Properties grid | **15 rows** (the 14 prior plus FX_ItmsCost); the new row: sequence 3; Property Class `FX_Cost`; Bound to Column; Column Name `FX_Cost`; Key Sequence 0; Data Type `Decimal`; Length `18`; Column Type `decimal`; Read Only **checked**; Required unchecked; Read Only Record unchecked | Recorded |
| 17 | Mouse move to the grid; wheel scroll +300 (view) | Grid scrolled to the end | — |
| 18 | Screenshots `t6-02` (rows 1–8, incl. the new row 6) and `t6-03` (rows 8–15, ending at InWorkflow) | Identity header; status; Save disabled | `t6-02`, `t6-03` |
| 19 | Stopped | No further action. The IDOs Form remains open, clean, on the Properties sub-tab | — |

No Save, no second wizard, no Escape or Enter, no close/reopen, no F4, no runtime action, no Designer action.

### Wizard field record (verbatim readbacks; FX_ItmsCost)

| Field | Recorded value |
|---|---|
| Page 1 binding | Bound (radio active; kept) |
| Bind To | `fxitms.FX_Cost` (selected once from the lookup; the alias prefix distinguishes it from `fxitms.FX_Description` and `fxitms.FX_Item`) |
| Property Name | `FX_ItmsCost` (one plain fill; replaced the auto-filled `FX_Cost`) |
| Property Class | `FX_Cost` (selected once from the lookup) |
| Data Type | `Decimal` (Inherit from Property Class: **checked**) |
| Length | `18` |
| Decimal | `2` |
| Column Data Type | `decimal` (Inherit from Property Class: **checked**) |
| Third inherit checkbox (lower panel, unlabelled area) | Checked. The grey lower panel is shown with no value; its purpose is not identified from the image or the readback |
| Finish response | No message; wizard closed; status `New Property (IDOs 1 of 1)` |

Matches the expected Decimal 18 / decimal (Decimal Position 2 shown in the wizard; see limitations).

### Post-Finish inventory (15 rows; AC-3 for FX_ItmsCost; AC-4 pending FX_ItmsPicture)

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound) | — | (class-bound) | no | yes | no |
| 2 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | yes | no | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound) | — | (class-bound) | no | yes | no |
| 4 | FX_ItmsDescription | 2 | (blank) | Bound to Column | FX_Description (fxitms) | 0 | String | 150 | nvarchar | yes | no | no |
| 5 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound) | 50 | (class-bound) | no | yes | no |
| **6** | **FX_ItmsCost (new)** | **3** | **FX_Cost** | **Bound to Column** | **FX_Cost (fxitms)** | **0** | **Decimal** | **18** | **decimal** | **yes** | **no** | **no** |
| 7 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | — | int | no | no | no |
| 8 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 9 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 10 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 11 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 12 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | yes | no | no |
| 13 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | 0 | String | 150 | nvarchar | yes | no | no |
| 14 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no | no |
| 15 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | no | no | yes |

- The 13 originals and FX_ItmsDescription are unchanged against the T1/T3 readings (names, sequences, classes, types, columns, checkbox states).
- Sequence 3 is now shared by FX_Item and FX_ItmsCost. Sequence 2 is shared by three rows and 10 by two. Observed only; no renumbering (out of scope).
- The new row's Read Only checkbox is checked; Required and Read Only Record are unchecked. The column header mapping is inferred from the accessibility order, as recorded in T3.

### Post-change state (T6)

- Save: **disabled** (clean). No Save performed.
- Identity: FX_Orders; project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator placeholder; Check In and Undo Check Out enabled — **still checked out to the operator**.
- Status: `New Property (IDOs 1 of 1)`. No dialog or prompt.

### Limitations (T6)

- **Decimal Position 2 is not shown in the post-Finish grid** (the grid has no Decimal Position column visible in the captures). The value 2 is recorded from the wizard readback before Finish (`t6-01`), not from the post-Finish grid. The stored decimal position is not established.
- The third inherit checkbox (lower, unlabelled grey panel) was checked; the property it controls is not identified.
- The Tables view was not re-read in T6 (see G5).
- The Read Only Record column is off-screen in the captures; its value is an accessibility readback.
- Same session only; no database read; no durability claim.

### Action counts (T6 only)

| Operation | T6 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Property wizard / Finish** | **1 / 1** (the second of three authorized openings; the second of three Finishes) |
| Class selections | **1** (FX_Cost; the first of the two budgeted class selections; FX_Picture pending) |
| Save | 0 |
| New Table / table wizard OK | 0 / 0 |
| IDOs close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, class edits, SQL, Forms, runtime records | 0 |
| Properties changed | 1 property added (FX_ItmsCost); no other change |
| Designer interaction | 0 (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login | 0 |
| Browser JavaScript / evaluate / run-code / console / network | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted / targeted (explicit) | **1 / 0** (gate). Readbacks after the wizard steps were the inline snapshots of the click and type actions, and the post-Finish read is the inline output of the Finish click; these are tool output and not counted, as in T1–T5 |
| `browser_find` | **2** (`fxitms.FX_Cost` in Bind To; `FX_Cost` in the class lookup) |
| Element clicks (successful / failed) | **7 / 0** (New Property; Next; Bind To Open; the FX_Cost Bind To option; class Open; the FX_Cost class option; Finish) |
| `browser_type` (succeeded / refused) | **1 / 0** (Property Name, one plain fill) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Waits | 0 |
| Mouse move / wheel | 1 / 1 (grid view) |
| Screenshots | **3** (`t6-01`, `t6-02`, `t6-03`) |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 |

### Cumulative browser action audit after T6 (T1 + T2 + T3 + T4 + T5 + T6)

| Operation | Cumulative after T5 | T6 delta | **Cumulative after T6** | Budget / note |
|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | none in this experiment |
| New Table / table wizard OK | 1 / 1 | 0 / 0 | **1 / 1** | budget 1 / 1 (used) |
| New Property wizard / Finish | 1 / 1 (T3, FX_ItmsDescription) | 1 / 1 (T6, FX_ItmsCost) | **2 / 2** | budget 3 / 3; **1 opening left** for FX_ItmsPicture |
| Class selections | 0 | 1 | **1** | budget 2 (FX_ItmsCost done; FX_ItmsPicture pending) |
| Save | 0 | 0 | **0** | budget 0 or 1 (not used) |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | **1 / 1** | budget 2 pairs (1 left; reserved for the final recovery) |
| IDOs Form openings via Select Form (not pairs) | 1 | 0 | **1** | — |
| Target F4 queries (FX_Orders) | 2 | 0 | **2** | budget 2 used; the third is reserved for the final recovery verification |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | budget 1 / 1 / 1 (later) |
| Properties added | 1 (FX_ItmsDescription) | 1 | **2 (FX_ItmsDescription, FX_ItmsCost)** | three expected in total |
| Designer interaction | 0 | 0 | **0** | — |
| Designer read-only snapshot (inadvertent) | 1 | 0 | **1** | disclosed in T2 |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** | — |
| Re-logins (session-expiry procedure) | 1 | 0 | **1** | used in T4; not repeated |
| Direct URL navigation (portal step) | 1 | 0 | **1** | — |
| Native dialogs (beforeunload, accepted) | 1 | 0 | **1** | — |
| `browser_tabs` list / select | 5 / 5 | 1 / 1 | **6 / 6** | — |
| Snapshots untargeted / targeted (explicit) | 15 / 1 | 1 / 0 | **16 / 1** | the T2 targeted one returned the wrong field |
| `browser_find` | 10 | 2 | **12** | — |
| Element clicks (successful / failed) | 33 / 1 | 7 / 0 | **40 / 1** | the T4 failure was the intercepted click |
| `browser_type` (succeeded / refused) | 7 / 0 | 1 / 0 | **8 / 0** | — |
| Key presses (Tab / F4 / Enter / Escape) | 7 / 0 / 0 | 0 | **7 / 0 / 0** | — |
| Waits / mouse moves / wheel | 4 / 2 / 2 | 0 / 1 / 1 | **4 / 3 / 3** | — |
| Screenshots | 14 | 3 | **17** | — |
| Ref-not-found / timeouts | 0 / 1 | 0 | **0 / 1** | the timeout was the intercepted click (T4) |
| Select Form dialogs answered (OK) | 2 | 0 | **2** | in-page dialogs, not confirmations |
| Browser JavaScript / evaluate / run-code / console / network | 0 | 0 | **0** | — |

## T5 — post-session-recovery verification (read-only gate; cycle 5; no mutation; FX_ItmsCost wizard NOT opened)

- Task T5, cycle 5, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `864ae5df-eef2-4d47-8d8a-c577b81e9961`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Operator authorization for T5 (bounded instruction): one additional IDOs Form opening and one additional FX_Orders target query, read-only, starting from the T4 recovered Mongoose shell with no Form open. The session was usable throughout T5; the re-login was not repeated (none was needed).
- Sources: the T1–T4 readings and this record. No further source read was needed.

### Actions (T5, in order)

| # | Action | Observed | Result |
|---|---|---|---|
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Mongoose (`favoriteContext` absent; the T4 shell) | Listed first; tab 0 not snapshotted, clicked, typed or captured |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | Succeeded after the list |
| 3 | `browser_snapshot` (gate: shell) | Mongoose shell; no Form open; Save disabled; no dialog; no banner | Clean start |
| 4 | Click the Form menu (one click) | Menu opened; `Open` enabled; `Close and Save Changes` and `Close and Cancel Changes` disabled (no Form open) | — |
| 5 | Click `Open` (one click) | Select Form dialog opened | — |
| 6 | `browser_find` "Select Form" and a read of the dialog | Filter pre-filled `IdoCollections`; **two rows**: `G6RIdoCollectionSearch / G6RIdoCollectionSearch` and `IDOs / IdoCollections` | The two-row result recurred (see the T1 deviation); the exact row was chosen |
| 7 | Click the `IDOs / IdoCollections` row (one click; not the search Form row) | Row active (`gridcell "IDOs" [active]`); search Form row not active | — |
| 8 | Click Select Form `OK` (one click) | IDOs Form opened (`favoriteContext=IdoCollections`); status `Filter in Place` (read in the next snapshot) | Opened once |
| 9 | Untargeted snapshot (settled) | Status `Filter in Place`; IDO Name blank and active; no FiP click needed; Check Out and Undo Check Out **disabled** (blank Form, not yet a query). The first post-OK snapshot showed the status bar blank for a moment; the settled read after it showed `Filter in Place` | Status confirmed before any F4 |
| 10 | `browser_type` `FX_Orders` into IDO Name (one fill) | Typed | — |
| 11 | Key press **Tab** (one) | Focus moved; echo row `FX_Orders` | — |
| 12 | Screenshot `t5-01` (pre-F4 criterion) | IDO Name `FX_Orders`; status `Filter in Place`; echo row `FX_Orders` | `t5-01` |
| 13 | Key press **F4** (one; the second target query of the record) | Query ran | Once |
| 14 | Wait 3 s; untargeted snapshot | Status `Description (IDOs 1 of 1)`; **one row** `FX_Orders` (Revision Num 2; Revision Date 10/13/2026); Locked By the operator placeholder; Check In and Undo Check Out **enabled**; row checkbox checked; Save disabled; Description field holds focus with no value typed | Gate |
| 15 | Screenshot `t5-02` (identity and Tables view) | Identity header; Tables sub-tab selected: three entries (below) | `t5-02` |
| 16 | Click the Properties sub-tab (one click; view) | Properties grid: 14 rows | — |
| 17 | Untargeted snapshot (Properties) and screenshot `t5-03` (rows 1–8) | Rows 1–8 as in the table below | `t5-03` |
| 18 | Mouse move to the grid; one wheel scroll (deltaY +300) (view) | Grid scrolled to the end | — |
| 19 | Screenshot `t5-04` (rows 7–14) | Rows 7–14 ending at InWorkflow (row 14) | `t5-04` |
| 20 | Stopped | No further action. The Form remains open, clean, on the Properties sub-tab | — |

No click on FiP, Save, New Property, New Table, Check Out, Check In, Undo Check Out, Finish or any close was made. No Escape or Enter was pressed. No second query was run.

### Recovered identity and checkout (T5)

| Field | Observed |
|---|---|
| IDO Name | `FX_Orders` (one row) |
| Project Name | `FX_HelloWorldProject01` |
| Revision Num | **2** |
| Revision Date | `10/13/2026` |
| Locked By | the operator placeholder (accessibility readback; clipped in the image) |
| Access As | `G6R` |
| Checkout | **checked out to the operator**: row checkbox checked; **Check In enabled; Undo Check Out enabled** |
| Save | **disabled**; the Form is clean; no outstanding edit |
| Status bar | `Description (IDOs 1 of 1)` after the query (the focus caption; the query returned one row) |

### Recovered Tables view (T5; three entries and both joins)

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| 3 | FX_Orders | fxords | Primary Base | Inner | (blank) |

Exactly three entries; both joins are present; the base entry is unchanged. This matches the T3 post-Finish state and the T2 Tables view.

### Recovered Properties inventory (T5; complete 14 rows; accessibility readback; screenshots `t5-03` rows 1–8 and `t5-04` rows 7–14)

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | 1 | (class-bound) | — | (class-bound) | no | yes | no |
| 2 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | yes | no | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | 0 | (class-bound) | — | (class-bound) | no | yes | no |
| **4** | **FX_ItmsDescription** | **2** | **(blank)** | **Bound to Column** | **FX_Description (fxitms)** | **0** | **String** | **150** | **nvarchar** | **yes** | **no** | **no** |
| 5 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | 0 | (class-bound) | 50 | (class-bound) | no | yes | no |
| 6 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | 0 | Long Integer | — | int | no | no | no |
| 7 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 8 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | no |
| 9 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 10 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | yes | no | no |
| 11 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | yes | no | no |
| 12 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | 0 | String | 150 | nvarchar | yes | no | no |
| 13 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no | no |
| 14 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | no | no | yes |

Comparison with the T1 baseline (13 rows) and the T3 post-Finish inventory (14 rows):
- Rows 1–3 and 5–14 match the T1 baseline row for row (names, sequences, classes, column names, key sequences, data types, lengths, column types and checkbox states). The sequence values 2 and 10 are shared, as in T1.
- Row 4 (FX_ItmsDescription) matches the T3 post-Finish row for row.
- **Absent:** `FX_ItmsCost` and `FX_ItmsPicture`. **No row is bound to `fxitms.FX_Cost` or `fxitms.FX_Picture`.** The bindings were read from the Column Name column (the names of the columns are shown without the alias). The Bind To lookup was not opened (that would be a wizard action).
- The checkbox mapping (Read Only, Required, Pseudo Key, Read Only Record) follows the earlier records and is inferred from the accessibility readback order; the image shows the Read Only and Required columns.

### Gate verdict (T5)

| Prerequisite | Required | Observed | Result |
|---|---|---|---|
| Single IDO | FX_Orders, one row | one row | **Pass** |
| Project | FX_HelloWorldProject01 | FX_HelloWorldProject01 | **Pass** |
| Revision | 2 | 2 | **Pass** |
| Checkout | checked out to the operator | checked out; Check In and Undo Check Out enabled; row checked | **Pass** |
| Tables | three entries with both joins | three entries; both joins | **Pass** |
| Properties | 14: original 13 unchanged + FX_ItmsDescription | 14 rows as above | **Pass** |
| FX_ItmsCost / FX_ItmsPicture | absent; no fxitms.FX_Cost or fxitms.FX_Picture binding | absent; no such binding | **Pass** |
| Save / outstanding edits | disabled; none | disabled; none | **Pass** |

**All gates pass. The system is ready for the separately authorized FX_ItmsCost wizard.** T5 did not open that wizard.

### Operator-approved deviation (T5)

- **Form opening, not a close/reopen pair.** At T5 start no IDOs Form was open (the T4 session expiry removed it). The operator authorized one additional IDOs Form opening. T5 therefore opened the Form once through Form > Open > Select Form. This is **not** an IDOs close/reopen pair, and the pair count is unchanged by T5.
- **Two-row Select Form result.** The filter `IdoCollections` again returned `G6RIdoCollectionSearch` and `IDOs / IdoCollections`. The IDOs row was selected by its exact name and the search Form was never selected.
- **Status bar blank for one snapshot.** The first snapshot after OK showed the status bar with no text. A later snapshot showed `Filter in Place`. The Form was not clicked on FiP at any point.

### Action counts (T5 only)

| Operation | T5 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Property wizard / Finish** | **0 / 0** |
| Class selections | **0** |
| Save | **0** |
| New Table / table wizard OK | 0 / 0 |
| IDOs Form close / reopen (pairs) | 0 / 0 (one Form opening via Select Form, operator-approved; not a pair) |
| Target F4 queries (FX_Orders) | **1** (cumulative 2 of 2 for the target-query budget; the third is reserved for the final recovery verification) |
| Runtime open / close / query | 0 / 0 / 0 |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 0 |
| Designer interaction (click, type, key, snapshot) | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login | **0** (none needed; the T4 re-login was not repeated) |
| Direct URL navigation / refresh / restart | 0 / 0 / 0 |
| Browser JavaScript / evaluate / run-code / console / network | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots untargeted (explicit `browser_snapshot`) / targeted | **3 / 0** (gate shell; settled after OK; after F4; Properties read was from the snapshot after the Properties click, so the explicit count is 4 — see the note below) |
| `browser_find` | **2** ("Select Form" in the menu items list and in the dialog) |
| Element clicks (successful / failed) | **5 / 0** (Form menu; Open; IDOs row; Select Form OK; Properties sub-tab) |
| `browser_type` (succeeded / refused) | **1 / 0** (IDO Name `FX_Orders`) |
| Key presses (Tab / F4 / Enter / Escape) | **2** (Tab 1; F4 1) / 0 / 0 |
| Waits / mouse moves / wheel | 1 (3 s) / 1 / 1 |
| Screenshots | **4** (`t5-01` to `t5-04`) |
| Select Form dialogs answered | **1** (OK; in-page dialog, not a confirmation) |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 |

Note on the snapshot count: the three explicit `browser_snapshot` calls were (a) the shell gate after the tab select, (b) a settled read after the Select Form OK, taken after the snapshot returned inline by the OK click showed a blank status bar, and (c) a read after the F4 wait. The snapshots returned inline by the Form menu, Open, row, OK, F4 and Properties-tab actions are tool output and are not counted, as in T1–T4. The post-wheel screenshot was taken without a new snapshot.

### Cumulative browser action audit after T5 (T1 + T2 + T3 + T4 + T5)

| Operation | T1 | T2 | T3 | T4 | T5 | **Cumulative** | Budget / note |
|---|---|---|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0/0/0 | 0/0/0 | 0/0/0 | 0/0/0 | 0/0/0 | **0 / 0 / 0** | none in this experiment |
| New Table / table wizard OK | 0/0 | 1/1 | 0/0 | 0/0 | 0/0 | **1 / 1** | budget 1 / 1 (used) |
| New Property wizard / Finish | 0/0 | 0/0 | 1/1 | 0/0 | 0/0 | **1 / 1** | budget 3 / 3 (2 / 2 left: FX_ItmsCost, FX_ItmsPicture) |
| Class selections | 0 | 0 | 0 | 0 | 0 | **0** | budget 2 (both still to do) |
| Save | 0 | 0 | 0 | 0 | 0 | **0** | budget 0 or 1 (not used) |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **1 / 1** | budget 2 pairs (1 left; reserved for the final recovery) |
| IDOs Form openings via Select Form (not pairs) | 0 | 0 | 0 | 0 | 1 | **1** (operator-approved in T5) | — |
| Target F4 queries (FX_Orders) | 1 | 0 | 0 | 0 | 1 | **2** | budget 2 used after T5; the third is reserved for the final recovery verification |
| Runtime close / reopen / query | 0/0/0 | 0/0/0 | 0/0/0 | 0/0/0 | 0/0/0 | **0 / 0 / 0** | budget 1 / 1 / 1 (later) |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 0 | 0 | 1 property added | 0 | 0 | **1 property added (FX_ItmsDescription)** | — |
| Designer interaction | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Designer read-only snapshot (inadvertent) | 0 | 1 | 0 | 0 | 0 | **1** | disclosed in T2 |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Re-logins (session-expiry procedure) | 0 | 0 | 0 | 1 | 0 | **1** | procedure used once in T4; not repeated |
| Direct URL navigation (portal step only) | 0 | 0 | 0 | 1 | 0 | **1** | — |
| Native dialogs (beforeunload, accepted) | 0 | 0 | 0 | 1 | 0 | **1** | — |
| `browser_tabs` list / select | 1/1 | 1/1 | 1/1 | 1/1 | 1/1 | **5 / 5** | — |
| Snapshots untargeted / targeted (explicit) | 1/0 | 3/1 | 3/0 | 5/0 | 3/0 | **15 / 1** | the T2 targeted one returned the wrong field |
| `browser_find` | 3 | 3 | 1 | 1 | 2 | **10** | — |
| Element clicks (successful / failed) | 7/0 | 10/0 | 6/0 | 5/1 | 5/0 | **33 / 1** | the T4 failure was the intercepted New Property click |
| `browser_type` (succeeded / refused) | 2/0 | 2/0 | 1/0 | 1/0 | 1/0 | **7 / 0** | — |
| Key presses (Tab / F4 / Enter / Escape) | 3 (Tab 2, F4 1) | 2 (Tab 2) | 0 | 0 | 2 (Tab 1, F4 1) | **7 / Enter 0 / Escape 0** | — |
| Waits / mouse moves / wheel | 1/1/1 | 0/0/0 | 0/0/0 | 2/0/0 | 1/1/1 | **4 / 2 / 2** | — |
| Screenshots | 4 | 3 | 3 | 0 | 4 | **14** | — |
| Ref-not-found / timeouts | 0/0 | 0/0 | 0/0 | 0/1 | 0/0 | **0 / 1** | the timeout was the intercepted click (T4) |
| Select Form dialogs answered (OK) | 1 | 0 | 0 | 0 | 1 | **2** | in-page dialogs, not confirmations |
| Browser JavaScript / evaluate / run-code / console / network | 0 | 0 | 0 | 0 | 0 | **0** | — |

## Worker-written-file inventory (T7)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T7 section with gate, actions, wizard record, 16-row inventory, limitations and counts; cumulative audit after T7; AC-3 row; open questions).
- `evidence/EXP-079/t7-01-wizard-itmspicture-before-finish.png` (created).
- `evidence/EXP-079/t7-02-post-finish-inventory-16-rows-upper.png` (created).
- `evidence/EXP-079/t7-03-post-finish-inventory-16-rows-lower.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-44-48-005Z.yml`, `page-2026-10-13T16-45-00-202Z.yml`, `page-2026-10-13T16-45-12-862Z.yml`, `page-2026-10-13T16-45-22-452Z.yml`) are tool-written, not worker-authored. Read as readbacks only.

No other repository file was written, edited or deleted in T7.

## Decisive evidence (T7)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t7-01-wizard-itmspicture-before-finish.png` | IDO Property Wizard, page 2: Bind To `fxitms.FX_Picture`; Property Name `FX_ItmsPicture`; Property Class `FX_Picture`; Data Type Binary (Inherit checked); Length -1; Decimal blank; Column Data Type varbinary (Inherit checked); lower Inherit checked; Finish enabled; Next greyed; no prompt | **AC-3** pre-Finish values for FX_ItmsPicture (class FX_Picture; Binary / -1 / varbinary; inherit states) | That Finish committed the stored binding; the stored length; the exact class identity beyond the readback (the look-alike was not selected, per the readback) |
| `t7-02-post-finish-inventory-16-rows-upper.png` | IDOs tab after Finish; Revision Num 2; Locked By operator; Check In enabled; Save greyed; status `New Property (IDOs 1 of 1)`; rows 1–8 incl. FX_ItmsDescription (seq 2) and FX_ItmsCost (seq 3, FX_Cost, Decimal 18 decimal) | The header identity and checkout after the third Finish; the upper rows of the 16-row inventory | Rows 9–16 (see `t7-03`); the Read Only Record column; the stored state |
| `t7-03-post-finish-inventory-16-rows-lower.png` | Same header; rows 9–16: UpdatedBy … FX_CusAddress (seq 10) … NoteExistsFlag … InWorkflow (seq 11) … **row 16 FX_ItmsPicture, seq 12, FX_Picture, Bound to Column FX_Picture, Binary, varbinary, Read Only checked** | The new row and the end of the 16-row inventory; no row after FX_ItmsPicture | Length in the grid (blank); the Read Only Record column (accessibility only); database state |

## Acceptance status (after T7)

| AC | Status after T7 |
|---|---|
| AC-1 | Supported (T1; re-verified T5). |
| AC-2 | Supported (T2; re-observed T5). |
| AC-3 | **Supported as observed for the three wizards** (T3, T6, T7). |
| AC-4 | **Form-state portion observed after T7**: 16 Bound rows (13 originals + three new); Save disabled; checked out to the operator at Revision 2. The post-change inventory screenshots exist (`t7-02`, `t7-03`). The clean-after-Finish claim rests on the Save state, not on a database read. |
| AC-5 | **Not started**: the clean IDOs close/reopen pair (one of two remaining) and the visible-criterion recovery query (third target query) are reserved for a separately authorized task. |
| AC-6 | Not started (runtime close/reopen and blank-criteria query; reserved). |
| AC-7 | Partially drafted (audit and inventories recorded); the final report is not yet produced because AC-5 and AC-6 are open. |

## Worker-written-file inventory (T6)

- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T6 section; acceptance AC-3 row; cumulative audit after T6; open questions).
- `evidence/EXP-079/t6-01-wizard-itmscost-before-finish.png` (created).
- `evidence/EXP-079/t6-02-post-finish-inventory-15-rows-upper.png` (created).
- `evidence/EXP-079/t6-03-post-finish-inventory-15-rows-lower.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-41-01-140Z.yml`, `page-2026-10-13T16-41-05-896Z.yml`, `page-2026-10-13T16-41-37-316Z.yml`) are tool-written, not worker-authored. Read as readbacks only.

No other repository file was written, edited or deleted in T6.

## Decisive evidence (T6)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t6-01-wizard-itmscost-before-finish.png` | IDO Property Wizard, page 2: Bind To `fxitms.FX_Cost`; Property Name `FX_ItmsCost`; Property Class `FX_Cost`; Data Type Decimal (Inherit checked); Length 18; Decimal 2; Column Data Type decimal (Inherit checked); lower Inherit checked; Finish enabled; Next greyed; no prompt | **AC-3** pre-Finish values for FX_ItmsCost (class FX_Cost; Decimal 18 / 2 / decimal; inherit states) | That Finish committed the stored binding; the stored decimal position |
| `t6-02-post-finish-inventory-15-rows-upper.png` | IDOs tab after Finish; identity Revision Num 2; Locked By operator; Check In enabled; Save greyed; status `New Property (IDOs 1 of 1)`; rows 1–8 with row 6 `FX_ItmsCost`, sequence 3, Property Class `FX_Cost`, Bound to Column `FX_Cost`, Decimal, 18, decimal, Read Only checked | **AC-3/AC-4** partial: the new property is present with the expected class, type, length, column type and Read Only state; Save disabled; FX_Orders still checked out | Rows 9–15 (see `t6-03`); Decimal Position in the grid; the Read Only Record column (off-screen) |
| `t6-03-post-finish-inventory-15-rows-lower.png` | Same header; rows 8–15: CreatedBy … FX_CusAddress (seq 10) … NoteExistsFlag … InWorkflow (row 15, seq 11, last row) | The end of the 15-row inventory; no row after InWorkflow; the other originals present | The stored database state; the Read Only Record column (accessibility only) |

## Acceptance status (after T6)

| AC | Status after T6 |
|---|---|
| AC-1 | Supported (T1; re-verified T5). |
| AC-2 | Supported (T2; re-observed T5). |
| AC-3 | **PARTIAL**: FX_ItmsDescription (T3) and FX_ItmsCost (T6) supported; FX_ItmsPicture not started. |
| AC-4 | Not complete (needs FX_ItmsPicture for the three-property state). |
| AC-5 to AC-7 | Not started; the recovery pair and the third target query are reserved for AC-5. |

## Worker-written-file inventory (T5)


- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T5 section; cumulative audit after T5).
- `evidence/EXP-079/t5-01-pre-f4-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-079/t5-02-identity-and-tables-view-after-f4.png` (created).
- `evidence/EXP-079/t5-03-recovered-inventory-upper-rows-1-8.png` (created).
- `evidence/EXP-079/t5-04-recovered-inventory-lower-rows-6-14.png` (created).
- Harness snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T16-37-20-173Z.yml`, `page-2026-10-13T16-37-38-198Z.yml`, `page-2026-10-13T16-37-59-704Z.yml`, `page-2026-10-13T16-38-07-622Z.yml`) are tool-written, not worker-authored, and were read as readbacks only.

No other repository file was written, edited or deleted in T5.

## Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t5-01-pre-f4-idos-fx-orders-criterion.png` | IDOs Form; status bar `Filter in Place`; IDO Name `FX_Orders` (active); echo row `FX_Orders`; Tables sub-tab; Check Out enabled and Undo Check Out greyed (pre-query blank Form); DEM identity bar | The pre-F4 criterion and FiP state (AC-1 criterion) | That F4 returns one row (see `t5-02`); the checkout state (not yet loaded) |
| `t5-02-identity-and-tables-view-after-f4.png` | IDOs; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Save greyed; Tables: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Items / fxitms / Secondary / Left Outer / `fxitms.[FX_Item] = fxords.[FX_Item]`; FX_Orders / fxords / Primary Base / Inner; status `Description (IDOs 1 of 1)` | AC-1 identity, checkout and Tables view after one F4; AC-5 (recovered) Tables and checkout, same session | The property inventory (see `t5-03`/`t5-04`); the full Locked By value; database state |
| `t5-03-recovered-inventory-upper-rows-1-8.png` | Same identity header; Properties rows 1–8: FX_OrderNumber, FX_CusName (seq 2, nvarchar 100, Read Only), FX_CustomerID, **FX_ItmsDescription (seq 2, Bound to FX_Description, String 150, nvarchar, Read Only checked, no class)**, FX_Item, FX_Count, CreatedBy, UpdatedBy | Rows 1–8 of the recovered 14-row inventory; FX_ItmsDescription's binding, type, length and Read Only state; blank class in its row | Rows 9–14 (see `t5-04`); the Read Only Record column (off-screen; accessibility only) |
| `t5-04-recovered-inventory-lower-rows-6-14.png` | Same header; rows 7–14: CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, FX_CusAddress (seq 10, nvarchar 150, Read Only), NoteExistsFlag, InWorkflow (seq 11, last row) | The end of the 14-row inventory; no row after InWorkflow; the 13 originals present | The Read Only Record checkbox (accessibility only); absence of FX_ItmsCost and FX_ItmsPicture is shown by the complete accessibility list, not by one screenshot |

Acceptance mapping (T5): the T5 gate (AC-1 re-verified after the session recovery) is supported by `t5-01` to `t5-04`. The FX_ItmsCost wizard (AC-3) is still not started.

## Acceptance status (after T5)

| AC | Status after T5 |
|---|---|
| AC-1 | **Re-verified after session recovery** (observed; same session): one visible-criterion query (target 2 of 2) returns one FX_Orders checked out to the operator; Revision 2; Tables (fxcus and fxords, and fxitms); FX_ItmsCost and FX_ItmsPicture absent. Evidence: `t5-01`, `t5-02`, `t5-03`, `t5-04`. |
| AC-2 | Supported (T2), re-observed in T5 (three entries with both joins). |
| AC-3 | **SUPPORTED AS OBSERVED after T7** (three wizards, one Finish each): FX_ItmsDescription (T3; String 150 nvarchar; no class; evidence `t3-02`, `t3-03`); FX_ItmsCost (T6; Bound to fxitms.FX_Cost; class FX_Cost; Decimal 18 / 2 / decimal as shown; evidence `t6-01`, `t6-02`, `t6-03`); FX_ItmsPicture (T7; Bound to fxitms.FX_Picture; class FX_Picture; Binary / -1 / varbinary as shown; evidence `t7-01`, `t7-02`, `t7-03`). Limits: Length -1 and Decimal Position are shown only in the wizard, not in the post-Finish grid. |
| AC-4 | Not complete (depends on the two remaining properties). The T5 inventory is the present state of the 14 properties. |
| AC-5 | Not started (the recovery pair is reserved for the final verification). |
| AC-6, AC-7 | Not started. |

## Acceptance status (cumulative after T4)

| AC | Status after T4 |
|---|---|
| AC-1, AC-2 | Unchanged from T1 and T2 (supported as observed). |
| AC-3 | **Still PARTIAL.** FX_ItmsDescription supported (T3). FX_ItmsCost **not created** (the wizard was never opened). FX_ItmsPicture not started. |
| AC-4 to AC-7 | Not started. AC-4 (post-Finish inventory of three new properties) depends on the two remaining properties; the 15-property check was not reached. |
| Session | **Session expiry occurred in T4**; re-established once through the procedure; FX_ItmsDescription, checkout and Tables view not re-verified after the re-login. |

## Acceptance status (cumulative after T3)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; a fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders IDO checked out to the operator; identity, revision, Tables view (fxcus and fxords) and the 13-property inventory recorded; FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture and fxitms absent | **SUPPORTED (observed; UI and accessibility level; same session).** | Pre-F4 criterion `t1-01`; identity and Tables view `t1-02`; inventory `t1-03` (rows 1–8) and `t1-04` (rows 6–13); the accessibility snapshot readbacks for all 13 rows | Same session only; no database read; Read Only Record column off-screen in the images (accessibility readback only); Locked By clipped in the image (accessibility readback only). The clean IDOs tab state before its close was read from the snapshot, not captured in a screenshot. |
| **AC-2** One IDO Table Wizard: Table Name FX_Items (typed, Tab-committed), alias fxitms, Secondary, Left Outer, join text `fxitms.[FX_Item] = fxords.[FX_Item]`; one OK; Tables lists exactly FX_HelloWorld01 (fxcus), FX_Items (fxitms), FX_Orders (fxords) | **SUPPORTED (T2; observed; UI and accessibility level; same session).** One New Table; one OK with no message; three Tables entries with both joins; checkout intact; Save disabled. | `t2-02` (dialog before OK), `t2-03` (Tables after OK); snapshot readbacks in the T2 section | Same session; client-side readback only (no database read); the join text is the builder's bracketed form; the join's server-side validity is not established. |
| **AC-3** Three New Property wizards, one Finish each (FX_ItmsDescription; FX_ItmsCost with FX_Cost; FX_ItmsPicture with FX_Picture) | **PARTIAL (T3): FX_ItmsDescription SUPPORTED (observed; UI and accessibility level; same session).** One wizard, Bound to `fxitms.FX_Description`, no class; String / 150 / nvarchar as expected; one Finish, no message. FX_ItmsCost and FX_ItmsPicture NOT started. | `t3-02` (wizard before Finish), `t3-03` (post-Finish inventory); readbacks in the T3 section | Same session; no database read; the Inherit checkboxes for the Property Class are not applicable (no class). |
| AC-4 to AC-7 | Not started (later tasks; the three properties are not yet complete). | — | — |

## Decisive evidence per file (what each shows and does not prove)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-079/t1-01-pre-f4-idos-fx-orders-criterion.png` | IDOs tab (selected); status bar `Filter in Place`; IDO Name `FX_Orders`; echo row `FX_Orders`; Tables sub-tab empty; Check Out and Undo Check Out buttons drawn in the blue style, but the accessibility snapshot reads them as disabled in FiP mode; DEM identity bar | The pre-F4 criterion and the Filter in Place state (the criterion captured before F4) | That F4 returns one row (see `t1-02`); the checkout state (blank in FiP mode) |
| `evidence/EXP-079/t1-02-baseline-identity-tables-view.png` | IDOs tab; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Save disabled; Tables sub-tab: `FX_HelloWorld01 / fxcus / Secondary / Left Outer / fxcus.[FX_Code] = fxords.[FX_CustomerID]` and `FX_Orders / fxords / Primary Base / Inner`; status `Description (IDOs 1 of 1)` | **AC-1**: identity, revision, checkout state (checked out to the operator), the two-entry Tables baseline; one row after one F4 | Property inventory (see `t1-03`/`t1-04`); database state; the full Locked By value (clipped) |
| `evidence/EXP-079/t1-03-baseline-properties-inventory-rows-top.png` | Same identity header; Properties grid rows 1–8: FX_OrderNumber (class FX_OrderNumB…, seq 1), FX_CusName (seq 2, Bound to FX_Label, String 100, nvarchar, Read Only checked), FX_CustomerID (seq 2), FX_Item (seq 3, Length 50), FX_Count (Long Integer, int), CreatedBy, UpdatedBy, CreateDate | **AC-1**: rows 1–8 of the 13-row baseline | Rows 9–13 (see `t1-04`); the Read Only Record column (off-screen) |
| `evidence/EXP-079/t1-04-baseline-properties-inventory-rows-end.png` | Same header; Properties grid rows 6–13: RecordDate, RowPointer, FX_CusAddress (seq 10, Bound to FX_Address, String 150, nvarchar, Read Only checked), NoteExistsFlag (seq 10), InWorkflow (seq 11, last row) | **AC-1**: rows 6–13; the 13-row end of the list (no row after InWorkflow) | Read Only Record checkbox (accessibility readback only); database state |

Screenshots were viewed after capture; each shows the identity bar with the operator account and the DEM configuration.

## Action audit (cumulative; exact counts)

Counts are from this worker's own explicit call log. Tool-generated snapshot files returned with each action and "Ran Playwright code" wrappers are not counted.

| Operation | T1 | Cumulative |
|---|---|---|
| `browser_tabs` list / select | 1 / 1 (list before select; tab 1 selected) | 1 / 1 |
| Snapshots, untargeted (explicit calls) | 1 | 1 |
| Snapshots, targeted | 0 | 0 |
| `browser_find` | 3 (menu items; `Select Form`; `IdoCollections`) | 3 |
| Element clicks (successful / failed) | 7 / 0 (IDOs tab view; IDOs `Close Panel` control; Form menu; menu item Open; Select Form row; Select Form OK; Properties sub-tab view) | 7 / 0 |
| `browser_type` (succeeded / refused) | 2 / 0 (Select Form Filter `IdoCollections`; IDO Name `FX_Orders`) | 2 / 0 |
| Key presses | 3 (Tab after the Filter; Tab after IDO Name; F4) | 3 |
| Escape / Enter presses | 0 / 0 | 0 / 0 |
| Waits | 1 (3 s after F4) | 1 |
| Mouse move / wheel | 1 / 1 (grid view scroll) | 1 / 1 |
| Screenshots | 4 (`t1-01` to `t1-04`) | 4 |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 |
| New Table / table wizard OK | 0 / 0 | 0 / 0 |
| New Property wizard / Finish | 0 / 0 | 0 / 0 |
| Save (toolbar or other) | 0 | 0 |
| Filter in Place clicks | 0 (the reopened Form opened already in Filter in Place) | 0 |
| IDOs Form close / reopen (pairs) | 1 / 1 (pair 1 of 2) | 1 / 1 |
| Target F4 queries (FX_Orders) | 1 (target 1 of 2) | 1 |
| Select Form dialogs answered | 1 (OK; in-page dialog, not a confirmation) | 1 |
| Native browser dialogs | 0 | 0 |
| Runtime FX_Orders close / reopen / query / edit | 0 / 0 / 0 / 0 (budget 1 / 1 / 1 later) | 0 / 0 / 0 / 0 |
| Strings, property classes, SQL objects, Forms, runtime records, IDO or property changes | 0 | 0 |
| Designer actions (tab 0) | 0 | 0 |
| Unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Re-login (session-expiry procedure) | 0 | 0 |
| Browser JavaScript / evaluate / run-code / console / network inspection | 0 | 0 |
| Direct URL navigation / browser refresh / restart | 0 / 0 / 0 | 0 / 0 / 0 |
| Ref-not-found errors / timeouts | 0 / 0 | 0 / 0 |

### Deviations and notes (T1)

- **Select Form filter returned two rows.** Typing `IdoCollections` (Starts With unchecked) showed `IDOs / IdoCollections` and `G6RIdoCollectionSearch`. The IDOs row (name `IdoCollections`) was clicked before OK; the search Form was not opened. EXP-078 T1 recorded a single row for the same filter; the difference is observed here, not explained.
- **Inherited IDOs tab showed FX_Orders, not FX_HelloWorld01.** EXP-078 T1 found the inherited IDOs tab showing FX_HelloWorld01. In this session the tab was on FX_Orders with 13 properties, clean. The tab was closed once and reopened once, as the brief permits.
- No ref-not-found error, timeout, dialog or prompt occurred in T1.

## Cumulative browser action audit (T1 + T2 + T3; exact counts)

Explicit calls only, as counted in each task. T1 and T2 figures are carried forward unchanged from their sections.

| Operation | T1 | T2 | T3 | Cumulative | Budget / note |
|---|---|---|---|---|---|
| **Check Out / Check In / Undo Check Out** | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | none in this experiment |
| **New Table / table wizard OK** | 0 / 0 | 1 / 1 | 0 / 0 | **1 / 1** | budget 1 / 1 (used) |
| Builder Add | 0 | 1 | 0 | **1** | — |
| **New Property wizard / Finish** | 0 / 0 | 0 / 0 | **1 / 1** | **1 / 1** | budget 3 / 3 (2 / 2 left) |
| Class selections | 0 | 0 | 0 | **0** | budget 2 (FX_ItmsCost and FX_ItmsPicture, later) |
| Save | 0 | 0 | 0 | **0** | budget 0 or 1 (not used; the Form is clean) |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** | budget 2 pairs (1 left) |
| Target F4 queries (FX_Orders) | 1 | 0 | 0 | **1** | budget 2 (1 left) |
| Runtime FX_Orders close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | budget 1 / 1 / 1 (later) |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 0 | 0 | 1 property added (FX_ItmsDescription), no other change | **1 property added** | — |
| Designer interaction | 0 | 0 | 0 | **0** | — |
| Designer read-only snapshot (inadvertent) | 0 | 1 | 0 | **1** | disclosed in the T2 gate; not repeated in T3 |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | 0 | **0** | — |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** | — |
| Snapshots untargeted / targeted (explicit) | 1 / 0 | 3 / 1 | 3 / 0 | **7 / 1** | the T2 targeted one returned the wrong field |
| `browser_find` | 3 | 3 | 1 | **7** | — |
| Element clicks (successful / failed) | 7 / 0 | 10 / 0 | 6 / 0 | **23 / 0** | — |
| `browser_type` (succeeded / refused) | 2 / 0 | 2 / 0 | 1 / 0 | **5 / 0** | — |
| Key presses (Tab / F4 / Enter / Escape) | 3 (Tab 2, F4 1) / 0 | 2 (Tab 2) / 0 | 0 / 0 | **5 / 0** | Enter 0; Escape 0 |
| Waits / mouse moves / wheel | 1 / 1 / 1 | 0 / 0 / 0 | 0 / 0 / 0 | **1 / 1 / 1** | — |
| Screenshots | 4 | 3 | 3 | **10** | — |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** | — |
| Select Form dialogs answered (OK) | 1 | 0 | 0 | **1** | in-page dialog, not a confirmation |
| Browser JavaScript / evaluate / run-code / console / network / direct URL / refresh / restart | 0 | 0 | 0 | **0** | — |

### Cumulative audit after T4 (T1 + T2 + T3 + T4; delta applied to the table above)

| Operation | Cumulative after T3 (table above) | T4 delta | **Cumulative after T4** |
|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| New Table / table wizard OK | 1 / 1 | 0 / 0 | **1 / 1** |
| New Property wizard / Finish | 1 / 1 | 0 / 0 (the wizard click for FX_ItmsCost did not run) | **1 / 1** (budget 3 / 3; 2 / 2 left) |
| Class selections | 0 | 0 | **0** (budget 2; both still to do) |
| Save | 0 | 0 | **0** |
| IDOs Form close / reopen (pairs) | 1 / 1 | 0 / 0 (the Form was lost to the session expiry; not a worker close) | **1 / 1** |
| Target F4 queries | 1 | 0 | **1** |
| Runtime close / reopen / query | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| Re-logins (session-expiry procedure) | 0 | **1** | **1** (procedure once per task; used) |
| Direct URL navigation (portal step only) | 0 | **1** | **1** |
| Native dialogs | 0 | **1** (beforeunload, accepted) | **1** |
| `browser_tabs` list / select | 3 / 3 | 1 / 1 | **4 / 4** |
| Snapshots untargeted / targeted (explicit) | 7 / 1 | 5 / 0 | **12 / 1** |
| `browser_find` | 7 | 1 | **8** |
| Element clicks (successful / failed) | 23 / 0 | 5 / 1 (intercepted New Property) | **28 / 1** |
| `browser_type` (succeeded / refused) | 5 / 0 | 1 / 0 (portal search) | **6 / 0** |
| `browser_wait_for` | 1 | 2 | **3** |
| Timeouts | 0 | 1 (the intercepted click) | **1** |
| Screenshots | 10 | 0 | **10** |
| Designer interaction | 0 | 0 | **0** (tab 0 listed only in T4) |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** |
| Browser JavaScript / evaluate / run-code / console / network | 0 | 0 | **0** |
| Strings, classes, SQL, Forms, runtime records, IDO or property changes | 1 property added (FX_ItmsDescription) | 0 | **1 property added** |

## Worker-written-file inventory (T1)

Written or created by this worker in T1:
- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (created; updated to the T1 final state).
- `evidence/EXP-079/t1-01-pre-f4-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-079/t1-02-baseline-identity-tables-view.png` (created).
- `evidence/EXP-079/t1-03-baseline-properties-inventory-rows-top.png` (created).
- `evidence/EXP-079/t1-04-baseline-properties-inventory-rows-end.png` (created).

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` (for example `console-2026-10-13T16-19-10-009Z.log`, `page-2026-10-13T16-19-38-825Z.yml`, `page-2026-10-13T16-19-48-828Z.yml`, `page-2026-10-13T16-20-02-262Z.yml`, `page-2026-10-13T16-20-19-926Z.yml`, `page-2026-10-13T16-20-29-873Z.yml`, `page-2026-10-13T16-20-50-277Z.yml`, `page-2026-10-13T16-21-02-143Z.yml`). These are not EXP-079 evidence; the snapshot files were read as readbacks for the observations above.

No other repository file was written, edited or deleted in T1.

## Knowledge state (per finding)

| Finding | State |
|---|---|
| FX_Orders is checked out to the operator at Revision 2 with Locked By the operator account (Check In and Undo Check Out enabled) before any EXP-079 change | **observed** (one run; UI and accessibility level; same session) |
| The FX_Orders Tables view has two entries: FX_HelloWorld01 (fxcus, Secondary, Left Outer, `fxcus.[FX_Code] = fxords.[FX_CustomerID]`) and FX_Orders (fxords, Primary Base, Inner) | **observed** (one run) |
| The FX_Orders property inventory has 13 rows (6 business + 7 system), including FX_CusName (seq 2) and FX_CusAddress (seq 10) | **observed** (one run; UI and accessibility level) |
| FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture and any fxitms table entry are absent before the change | **observed** (one run) |
| A reopened IDOs Form opens in Filter in Place; one F4 after the committed criterion produced the result (no second F4) | **observed** (one run); consistent with EXP-078 T6 and T1 |
| The Select Form filter `IdoCollections` shows two rows, one of them `G6RIdoCollectionSearch` | **observed** (one run); the cause is not established |
| The Revision Date 10/13/2026 is not today's date (2026-10-14) | **observed**; the mechanism is not established (EXP-078 attributes the date to creation) |
| Shared sequence values 2 and 10 in the baseline | **observed**; not judged (EXP-078 recorded them); no renumbering in scope |
| Join, properties, recovery and runtime checks | **not performed** (later tasks) |
| Replay or database durability | **not claimed** (not replay_verified) |

## T10 — final documentation and evidence reconciliation (cycle 10; zero browser calls; zero Mongoose changes)

- Task T10, cycle 10, worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `5b817958-f0de-4b13-b303-f40cdd4c018f`, run `R-20261014-001840-dvg8`. Date 2026-10-14.
- Scope: read the record, the 27 screenshots (already viewed in their tasks) and the nine controller-generated `harness-audit-T1.md` to `harness-audit-T9.md`; write `evidence/EXP-079/T10-final-acceptance-report.md`; update only this record. No browser call, no query, no Designer inspection.
- Outcome: the full AC-1 to AC-7 matrix, the inventories, the reconciled audit and the file inventory are in the report. The recommendation is **ACCEPTED AS OBSERVED**, subject to the corrections below.

### Corrections to earlier worker counts (harness-authoritative)

| Item | Earlier record said | Harness shows | Now recorded as |
|---|---|---|---|
| T1 element clicks | 8 (incl. a "Tables sub-tab" view click) | 7 | 7 |
| T1 snapshots | 5 untargeted + 5 targeted (T1 section); 1 (cumulative table) | 1, no targeted call | 1 |
| T1 "ref-not-found" error (guessed ref `f1e1461`) | 1 | none in the browser log (the only T1 error is a non-browser Read of a path that did not yet exist) | **unsupported; retracted** |
| T2 snapshot split | 3 untargeted + 1 targeted | 4 calls, no argument recorded | 4 total; split unverifiable |
| T3 snapshots | 3 | 2 (post-Finish read was inline output of the click) | 2 |
| Cumulative key presses | "11" in the Tab column | Tab 7, F4 4 (11 total) | Tab 7, F4 4 |
| Cumulative snapshots | 23 + 1 = 24 | 23 | 23 |

### Totals reconciled from the harness (T1–T9; T10 zero)

- Browser calls: **187** (tabs list 9, select 9, snapshot 23, find 16, click 61 = 59 ok + 2 failed, type 11, Tab 7, F4 4, wait 6, mouse 6, wheel 6, screenshot 27, navigate 1, handle dialog 1).
- Lifecycle: New Table 1; table wizard OK 1; New Property openings 3 (plus one timed-out attempt in T4 that opened nothing); Finish 3; class selections 2; Save 0; IDOs close/reopen pairs 2; additional IDOs opening without a close 1 (T5, operator-approved); FX_Orders target F4 queries 3 (T1, T5, T8); runtime close 0 (absent after T4 recovery), runtime open 1, runtime FiP 1, runtime F4 1; re-login 1 (T4); portal banner dismissals 2 (T4, T9); click timeouts 2 (T4, T9); native dialogs 1 (T4, accepted); Designer interactions 0 (one read-only T2 snapshot taken while tab 0 was current, disclosed); unloads, cache, FormSync, deployment, regeneration 0; checkout-management 0/0/0; strings, class edits, SQL, Form and runtime-record changes 0.

### Structural note

The T7 section heading was overwritten by an earlier insert and is restored above. Sections are not in strict chronological order (the T9 and T8 sections sit above the T7 section). The content is complete; the order is recorded here rather than rewritten.

### Worker-written-file inventory (T10)

- `evidence/EXP-079/T10-final-acceptance-report.md` (created).
- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` (edited: status header; T7 heading restored; this T10 section; open questions).
- No screenshot was created in T10. No other file was written.

### Knowledge state (T10)

Unchanged from the report's section 9. No finding is classified replay_verified. No database durability is claimed.

## Open questions and blockers (after T9)

000000. **T9 outcome:** AC-6 supported as observed. The runtime blank-criteria query returned the two expected rows; Save disabled; nothing changed. The IDOs Form is still open and clean. The runtime Form is open, clean and unedited. **Outstanding:** AC-7 (final report) is reserved for a separate documentation-only task. Observed limits: row 2's values are shown by accessibility readback only (the grid's data columns are clipped at this width); the T4 session recovery removed the earlier runtime tab, so the runtime close count is 0 (not applicable); a portal session-warning alert ("about to expire in 29 minutes") was present and was dismissed once with its own close control because it intercepted a click; the stored Decimal Position 2 and Length -1 remain unproven beyond the pre-Finish wizard readbacks; database binding and durability are not established.

00000. **T8 outcome (historical):** AC-5 supported as observed. The IDOs Form is open, clean (Save disabled), on the Properties sub-tab, with 16 Bound rows and FX_Orders checked out to the operator at Revision 2. Both IDOs close/reopen pairs and all three target queries are used. **Outstanding:** AC-6 (the FX_Orders runtime close/reopen and blank-criteria query), which needs separate authorization, then the AC-7 final report. Limitations carried: Length -1 and Decimal Position are not visible in the recovered grid; the unlabelled lower inherit controls are unidentified; database binding and durability are not established; the Select Form two-row filter and the Revision Date 10/13/2026 mechanism are unresolved.

0000. **T7 outcome (historical):** FX_ItmsPicture added with one Finish; 16 Bound rows (13 originals + three new). The three-property state is in place, Save disabled, FX_Orders checked out to the operator at Revision 2. **Remaining for AC-4 to AC-7 (reserved for a separately authorized task):** (a) the clean IDOs close/reopen recovery pair (budget 1 of 2 remaining), (b) one visible-criterion FX_Orders target query (the third; budget 2 of 3 used), comparing the recovered Tables view (three entries, both joins), inventory (16) and checkout, and (c) the runtime blank-criteria check (close/reopen and one F4). No authorization for these was given in T7.
000. **Limitations carried from T7:** Length -1 and Decimal Position for the Binary/Decimal properties are not visible in the post-Finish grid; the unlabelled lower inherit boxes are not identified; the Tables view was not re-read in T6 or T7 (last verified in T5).

000. **T6 outcome:** FX_ItmsCost added (one Finish). Post-Finish inventory = 15 rows (13 originals + FX_ItmsDescription + FX_ItmsCost). Not verified in T6: the stored Decimal Position 2 (only the pre-Finish wizard showed it; the grid shows no Decimal Position column), the identity of the unlabelled third inherit checkbox, and the Tables view (no uncertainty, not re-read). FX_ItmsPicture is the only remaining property; the recovery pair and the third target query are reserved for AC-5.

00. **T4 session-expiry blocker: RESOLVED by T5 (observed).** The post-re-login state was re-read from a fresh IDOs Form: FX_Orders is still the single IDO, checked out to the operator at Revision 2; the Tables view has three entries with both joins; the inventory has 14 rows including FX_ItmsDescription; FX_ItmsCost and FX_ItmsPicture are absent; Save is disabled. Gate passed. The FX_ItmsCost wizard is ready but **not authorized by T5**; it needs its own authorization.
0. (Historical, T4.) **BLOCKER (T4): session expiry.** A Mongoose "Session Expired" modal appeared after the T4 gate and intercepted the New Property click. The session-expiry procedure was run once and the session was re-established (portal navigation, portal app search, Mongoose app opened; no credential typed). The T4 task ended at that point. **Not re-verified after re-login:** FX_ItmsDescription (the T3 14th property), FX_Orders checkout (Revision 2, operator), and the three Tables entries. **Before any further mutation, a fresh task must re-read these from a fresh IDOs Form** (Form > Open > Select Form; one visible-criterion query; no F4 is needed if the Form opens in Filter in Place with the criterion) and confirm they are unchanged. The coordinator decides whether the post-re-login state is acceptable for the FX_ItmsCost wizard.
1. **No blocker for T1, T2 or T3.** AC-1 and AC-2 are supported; AC-3 is partial (FX_ItmsDescription only). FX_ItmsCost was not created in T4.
2. **Next step (not authorized yet):** the FX_ItmsCost wizard (Bind To `fxitms.FX_Cost`, class FX_Cost, expected Decimal 18 / 2 / decimal), then the FX_ItmsPicture wizard (Bind To `fxitms.FX_Picture`, class FX_Picture, expected Binary -1 / varbinary). Each needs its own authorization and gate, and each is one wizard and one Finish.
3. The Property Class readback and the inherit checkboxes for FX_Cost and FX_Picture are not yet observed. They are for the later tasks.
4. The IDOs Form is open and clean (Save disabled) on the Properties sub-tab; it was not closed in T3. The clean close/reopen pairs are for later tasks.
5. The runtime FX_Orders tab was not re-read in T1–T3; the runtime check is for a later task.
6. The server-side validity of the joins and of the new property binding is not established (UI and accessibility readback only).
7. Observed, not judged: sequence 2 is shared by three rows (FX_CusName, FX_CustomerID, FX_ItmsDescription). Renumbering is out of scope.
8. Carried from T1, unresolved: the Select Form filter returned two rows (`IdoCollections` and `G6RIdoCollectionSearch`); the Revision Date 10/13/2026 mechanism.
9. The page-1 "Property Name" field of the wizard reads the IDO name (`FX_Orders`) in the accessibility tree. This is the mislabel EXP-061 recorded; the Property Name field itself is the page-2 field.

## Outcome (operator assistant, 2026-10-14)

Accepted (observed). Hello World Part 5 section 2b is complete: FX_Orders now joins both the customer table and the items table. The decision was made by the operator assistant under the user's overnight authorization of 2026-10-14.

- Run R-20261014-001840-dvg8 completed as accepted after 10 worker tasks, with one pause (after T4).
- **Pause after T4 (session expiry):**
  - A Session Expired modal appeared before the FX_ItmsCost wizard opened. The worker ran the worker-preamble procedure once: one portal navigation and a Mongoose menu search, with no credential typed.
  - The operator assistant authorized one extra IDOs open and one extra FX_Orders query (T5) to re-establish the state read-only. T5 found it unchanged: checked out, three tables, 14 properties.
  - The audit deviation was accepted: three target queries instead of two. The runtime Form was gone after the expiry, so it had no close before its reopen.
- Changed, for later cleanup (IDO `FX_Orders`, tenant-wide, still checked out to the operator, Revision 2):
  - **Table added:**

    | Table | Alias | Type | Join | Join text |
    |---|---|---|---|---|
    | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |

  - **Properties added** (Bound to Column, Read Only ticked by Mongoose):

    | Property | Bound to | Class | Type | Sequence |
    |---|---|---|---|---|
    | FX_ItmsDescription | fxitms.FX_Description | none | String 150 nvarchar | 2 |
    | FX_ItmsCost | fxitms.FX_Cost | FX_Cost | Decimal 18 (decimal 2 shown in the wizard) decimal | 3 |
    | FX_ItmsPicture | fxitms.FX_Picture | FX_Picture | Binary varbinary | 12 |

    FX_Orders now has 16 properties. One Finish each and no Save; Save stayed disabled throughout.
- Screenshots viewed by the operator assistant:
  - `t6-01`: the IDO Property Wizard before Finish. Bind To fxitms.FX_Cost, Property Name FX_ItmsCost, Property Class FX_Cost. Both "Inherit from Property Class" boxes are ticked, showing Decimal, Length 18, Decimal 2 and decimal. A third ticked inherit box sits above an empty grey panel, meaning unknown.
  - `t8-02`: after the recovery close/reopen, the Tables view lists FX_HelloWorld01 fxcus, FX_Items fxitms (Secondary, Left Outer, the join text above) and FX_Orders fxords (Primary Base, Inner). Locked By is the operator, revision 2.
  - `t8-04`: after the recovery close/reopen, rows 9-16, ending with FX_ItmsPicture (sequence 12, FX_Picture, FX_Picture column, Binary, varbinary, Read Only).
  - `t9-03`: the FX_Orders runtime after the reopen and a blank query: 1 / FX001 / dumbbell / 2, "(Object 1 of 2)". Row 2 (2 / FX002 / eggs / 1) was confirmed through the accessibility tree only.
- Accepted deviations, none with any effect:
  - one timed-out New Property click (T4);
  - one click intercepted by a session-warning banner, cleared with its own close control (T9);
  - one inadvertent read-only snapshot taken while the Designer tab was current (T2);
  - worker-count corrections reconciled by the harness.
- Flagged `browser_type` calls, all authorized fields:
  - Select Form filter ×2, IDO Name criterion ×3;
  - Table Name and Table Alias;
  - Property Name ×3;
  - the portal menu search, part of the session-expiry procedure.
- Findings (observed):
  1. **Session expiry closes the open Forms.** The re-login procedure restores the shell, but the open Forms are lost and must be reopened and re-queried.
  2. **Class-based joined properties:** choosing a property class in the wizard switches the type fields to "Inherit from Property Class". The grid afterwards shows no decimal position and a blank length for Binary.
  3. **Sequence numbers repeat:** a joined property takes the sequence of the same-named base column. Sequence 2 is now shared by three properties (FX_CusName, FX_CustomerID, FX_ItmsDescription), sequence 3 by FX_Item and FX_ItmsCost, and sequence 10 by FX_CusAddress and NoteExistsFlag.
- Limits:
  - UI and accessibility evidence only. Server-side join validity and database durability are not established.
  - The stored decimal position of FX_ItmsCost and the length of FX_ItmsPicture are shown only before Finish.
- Confinement (git status): only `evidence/EXP-079/` and this record were written by the run.
- Next: Part 5 Section 3, the derived property FX_DerOrderTotal (class FX_Cost, expression `FX_Count * FX_ItmsCost`).
