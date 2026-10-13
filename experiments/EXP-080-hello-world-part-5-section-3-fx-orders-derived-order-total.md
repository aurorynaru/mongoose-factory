# EXP-080 — Hello World Part 5 Section 3: add the derived property FX_DerOrderTotal to the FX_Orders IDO

**CURRENT STATUS (after T4, 2026-10-14): EXPERIMENT BLOCKED AT AC-2.** The Derived New Property wizard displayed the unexpected validation prompt "Value is required for Property Name / Do you want to change the value now?" after the Property Name field visibly read `FX_DerOrderTotal`. The cause is unresolved. Neither Yes nor No was selected. The class (FX_Cost), expression and Finish were never reached. **FX_DerOrderTotal was not confirmed created.** AC-1 supported (T1 evidence). AC-2 failed at the validation gate. AC-3 and AC-4 not reached. AC-5: documentation completed; experimental acceptance NOT claimed. T4 made zero browser calls and zero Mongoose changes. Final report: `evidence/EXP-080/T4-final-blocked-report.md`. The open prompt and open wizard are left for the operator or coordinator; this is not a stable end state. Observed only; not replay_verified.

Earlier status (after T3, 2026-10-14): T3 STOPPED BY A CONSEQUENTIAL WIZARD PROMPT (AC-2 NOT COMPLETE; NOTHING FINISHED). On page 2 of the still-open wizard, Property Name was filled once with `FX_DerOrderTotal` (readback in the field: `FX_DerOrderTotal`). Opening the Property Class lookup once then produced an in-page prompt: **"Value is required for Property Name / Do you want to change the value now?"** (buttons Yes, with default focus, and No). The prompt contradicts the visible field value. **No class was selected, no expression was entered, Finish was NOT invoked, nothing was saved, and the prompt was NOT answered** (the brief stops at a consequential prompt). The prompt remains open in front of the wizard. Finish count 0; Save count 0; class selections 0. Observed only; not replay_verified. Next step requires operator or coordinator direction (see T3 section).

Earlier status (after T2, 2026-10-14): T2 COMPLETE. WIZARD INSPECTED, STOPPED ON PAGE 2 (Derived chosen; nothing entered).** The gate passed again (fresh IDOs Form; FX_Orders Revision 2; checked out to the operator; Save disabled; 16 Bound properties; FX_DerOrderTotal absent). The New Property wizard was opened once. Page 1 offered four binding options (Bound, Derived, Unbound, Subcollection). **Derived was chosen once** (the radio click timed out and did not run; a corrected click on the visible Derived label selected it; the readback shows Derived checked and Bound unchecked). Next was clicked once. **Page 2 (Property Attributes) was captured before any entry**: Property Name blank and required; Property Class blank; Data Type, Column Data Type and Expression each with an Inherit from Property Class checkbox (unchecked); Length and Decimal blank; an empty multi-line expression box. **Nothing was typed or selected. The wizard is still open on page 2 with Finish enabled and NOT pressed.** The session-expiry warning strip (11 minutes remaining) appeared and was left in place. Observed only; not replay_verified.

Earlier status (after T1, 2026-10-14): T1 COMPLETE. READ-ONLY PREFLIGHT AND BASELINE (AC-1 SUPPORTED AS OBSERVED).** The IDO `FX_Orders` was retrieved once through Filter in Place in a fresh IDOs Form. It is checked out to the operator (Check In and Undo Check Out enabled; Save disabled; clean). Its Tables view has the expected three entries and its Properties grid has the expected **16 rows, all `Bound to Column`**. `FX_DerOrderTotal` is absent and no Derived property exists. **The New Property wizard was NOT opened** (T1 stop point). No property, Save, Finish, checkout action, string, class, SQL, Form or Designer change was made. Next permitted step: the coordinator's separate bounded instruction for the Derived wizard (T2) and the recovery pair (T3).

Classification: **observed only** (single session; UI and accessibility level). Not replay_verified. Nothing here establishes database durability or expression correctness.

## Run identity

- Experiment EXP-080, cycle 0, task **T1** (read-only preflight and IDO baseline; stop before the New Property wizard).
- Run `R-20261014-010308-VV2d`; worker session `da70d93e-04be-47f3-8cb8-8df281b07cc9`; task_message_id `b4d7ed69-0827-411c-98ae-95a626c2f37d`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO and its property are tenant-wide.
- Brief commits (session-start `git log`; not re-verified; no shell): `6d1bcdb` (EXP-080: approved brief), `3a23503` (EXP-080: draft brief).
- Session-start git status (harness context; not re-verified): `?? assets/`.
- The record path did not exist at T1 start (`experiments/EXP-080*` returned no file); this record was created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-080/`.

## Objective (T1 scope)

Retrieve exactly one IDO `FX_Orders` in a fresh IDO Collections runtime Form (titled IDOs) through Filter in Place with one visible-criterion query. Record its identity, revision, checkout state, Tables view and complete property inventory. Prove `FX_DerOrderTotal` and any other Derived property absent. Create this record with the baseline, the action audit and the worker-written-file inventory. **Stop before the New Property wizard.**

Later tasks (not authorized in T1): one New Property wizard (Derived; name `FX_DerOrderTotal`; class `FX_Cost`; expression `FX_Count * FX_ItmsCost`); one Finish; at most one Save; the recovery pair (IDOs close and reopen, one visible-criterion query) with 17 properties expected. The Label String ID override and Read Only setting belong to EXP-081; the Unload All Global Form Objects step is deferred.

## Sources reviewed (before browser interaction)

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt5.md`: Section 3 (lines 115–127, narrated steps), its source cautions (lines 129–133), and the transcript 03:33–05:05 (lines 415–430). Relevant points: the wizard's first page offers Derived (rather than Bound); the tutorial names the property with a `Der` prefix (ASR renders it as "dur/dir order total"); the tutorial assigns the Cost class and expects data-type inheritance; the expression is `count * itms cost` (ASR "count space asterisk space itms cost"); the tutorial says property names are case sensitive (an unverified tutorial claim). The tutorial's `DerOrderTotal`/`Der_OrderTotal` spellings are examples only, not supplied facts. The Label String ID `s order total` and the Read Only checkbox (lines 123–128) are EXP-081, not this experiment. Unload (line 125) is deferred.
- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md`: partial read (lines 1–457 of 1736: status header and the T1–T4 sections); later sections by their summary lines only. Used for: the FX_Orders identity and baseline shape; the wizard's page-1 options (Bound active; Derived, Unbound and Subcollection shown, unselected); the Filter-in-Place-on-reopen behaviour; the 16-row state after the three properties (FX_ItmsPicture at sequence 12; from the T6–T7 summaries).
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md`: **targeted search only** (Filter-in-Place lines 88–89, 114, 175, 185 via grep). Used for: the reopened IDOs Form opening already in Filter in Place (observed); one F4 sufficing after one criterion. Not read in full.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: read in full (267 lines). Used for: the New Property wizard page 2 (Bind To lookup, Property Name, Property Class lookup); the inherit checkboxes; Finish commits immediately; Save stays disabled; the class lookup offers checked-out classes. The Bound-specific steps were not used here.
- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: partial read (lines 1–572 of 1142; T1–T4). Used for FX_Cost: Decimal; Length 18; Decimal Position 2; Default Value 0; Column Data Type decimal; Label String ID FX_sCost; checked out to the operator at the time. The class is selected in T2 and never edited.
- Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git command.

## Browser starting state (observed before any action)

- `browser_tabs` list (before any selection): tab 0 = Infor Mongoose Designer (`mode=designer`, current) — **not selected, clicked, typed, snapshotted or captured**; tab 1 = Mongoose Web Client (`favoriteContext=FX_Orders`).
- Tab 1 selected (one select; succeeded after the list). Untargeted snapshot: the visible tab was the **FX_Orders runtime Form** (two rows: 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1; Save disabled; not edited). Open Form tabs: `IDOs` (not selected; its clean state was confirmed only when viewed in step 4 below) and the runtime `FX_Orders` (selected).
- No Session Expired modal, sign-in page, portal banner or dialog. Identity bar: operator account | `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## T1 actions (in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 Designer (current); tab 1 Mongoose Web Client | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current; Designer not touched | — |
| 3 | Untargeted snapshot (start) | FX_Orders runtime Form selected; Save disabled; IDOs tab open, not selected | snapshot (tool) |
| 4 | Click the IDOs Form-tab heading (view only) | IDOs tab selected and **clean**: IDO Name `FX_Orders`; Revision Num 2; Revision Date 10/13/2026; Locked By operator; Check In and Undo Check Out enabled; Save and New disabled; status `P&roperties`; Properties grid showed 16 rows. No prompt | snapshot (tool) |
| 5 | Click `Close Panel IDOs` (the Form-tab control; one click) | IDOs tab closed; **no prompt, no dialog**; the runtime FX_Orders tab became current | snapshot (tool) |
| 6 | Untargeted snapshot (fresh) | Only the FX_Orders runtime tab open; Save disabled | snapshot (tool) |
| 7 | Click the `Form` menu | Form menu open | — |
| 8 | `browser_find` `Open` | Menu item `Open` (not `Close and Save Changes`) | find |
| 9 | Click `Open` | Select Form dialog opened (Filter pre-filled `FX_Orders`; one row) | find |
| 10 | `browser_find` `Select Form`; untargeted snapshot | Select Form dialog present; one row `FX_Orders` | find; snapshot (tool) |
| 11 | Type `IdoCollections` into the Select Form Filter (one fill; replaces the pre-filled value) | Two rows: `G6RIdoCollectionSearch` and `IDOs / IdoCollections` | find |
| 12 | Tab once (Filter commit) | Filter retained | — |
| 13 | Click the `IDOs / IdoCollections` row | Row active (confirmed in the next untargeted snapshot: `gridcell "IDOs" [active]`); the search Form row was not selected | snapshot (tool) |
| 14 | Click Select Form `OK` once | IDOs Form reopened (`favoriteContext=IdoCollections`) | snapshot (tool) |
| 15 | Untargeted snapshot (status-bar check before any click) | **Status bar `Filter in Place`**; IDO Name criterion active and blank; Save and New disabled; FiP **not** clicked | snapshot (tool) |
| 16 | Type `FX_Orders` into IDO Name (one fill) | Typed | — |
| 17 | Tab once (IDO Name commit) | Echo row `FX_Orders` | — |
| 18 | Screenshot `t1-01` (pre-F4 criterion) | IDO Name `FX_Orders`; status `Filter in Place`; echo row `FX_Orders`; Save disabled | `t1-01` |
| 19 | **F4 once** (target query) | Query executed; no second F4 | — |
| 20 | Wait 3 s | — | — |
| 21 | Untargeted snapshot after F4 | Status `Description (IDOs 1 of 1)`: **one row** `FX_Orders`; Revision Num 2; Revision Date 10/13/2026; Check In and Undo Check Out enabled; Save disabled; Tables sub-tab shown with three entries | snapshot (tool) |
| 22 | Screenshot `t1-02` (identity and Tables view) | Identity header and three-row Tables view | `t1-02` |
| 23 | Click the in-form `Properties` sub-tab (view only; not the `Properties` button) | Properties grid shown (16 rows); no separate IDO Properties tab opened | snapshot (tool) |
| 24 | Untargeted snapshot (Properties readback) | 16 rows read (below) | snapshot (tool) |
| 25 | Screenshot `t1-03` (rows 1–8) | Identity; rows 1–8 | `t1-03` |
| 26 | Mouse move to the grid (1200, 720) and one wheel scroll (deltaY +300) (view only) | Rows 9–16 shown | — |
| 27 | Screenshot `t1-04` (rows 9–16) | Rows 9–16 to FX_ItmsPicture; no 17th row | `t1-04` |

The FX_Orders runtime tab (inactive) was not selected, queried or changed. The Designer tab (tab 0) was not selected, snapshotted or captured. The wizard was not opened.

## Baseline (T1; observed after the single F4)

### Identity and checkout (AC-1)

| Field | Observed |
|---|---|
| IDO Name | `FX_Orders` (one row; exact name) |
| Project Name | `FX_HelloWorldProject01` |
| Revision Num | **2** (unchanged from EXP-079 T9) |
| Revision Date | `10/13/2026` (as in EXP-079; not today's date; mechanism not established here) |
| Locked By | the operator account (the same account as the identity bar; clipped in the image) |
| Checkout state | **Checked out to the operator**: row checkbox checked; Check In enabled; Undo Check Out enabled. Checkout gate **passed**. |
| Access As / Label String ID / Caption | `G6R` / `oFX_Orders` / `oFX_Orders` |
| Extends / Description / Profile Name / IDO Assembly Name | blank (Description focused, not typed) |
| Save (toolbar) | disabled (clean) |

### Tables view (three entries, as expected)

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| 3 | FX_Orders | fxords | Primary Base | Inner | (blank) |

### Property inventory (16 rows; complete; Properties sub-tab)

Every row is `Bound to Column`. The Property Type column reads `Bound to Column` for all 16; no row reads Derived. The Read Only and Required checkboxes were read from the accessibility tree and checked against the screenshots (first checkbox column = Read Only; second = Required; last = Read Only Record, as in EXP-079 T1). Class-bound Data Type, Length and Column Type are blank for some rows, as recorded before.

| # | Property Name | Sequence | Property Class | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | FX_OrderNumber | 1 | (class-bound) | — | (class-bound) | no | yes |
| 2 | FX_CusName | 2 | (blank) | FX_Label (fxcus) | 0 | String | 100 | nvarchar | yes | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | FX_CustomerID | 0 | (class-bound) | — | (class-bound) | no | yes |
| 4 | FX_ItmsDescription | 2 | (blank) | FX_Description (fxitms) | 0 | String | 150 | nvarchar | yes | no |
| 5 | FX_Item | 3 | FX_Item | FX_Item | 0 | (class-bound) | 50 | (class-bound) | no | yes |
| 6 | FX_ItmsCost | 3 | FX_Cost | FX_Cost (fxitms) | 0 | Decimal | 18 | decimal | yes | no |
| 7 | FX_Count | 4 | (blank) | FX_Count | 0 | Long Integer | — | int | no | no |
| 8 | CreatedBy | 5 | (blank) | CreatedBy | 0 | String | 128 | UsernameType | yes | no |
| 9 | UpdatedBy | 6 | (blank) | UpdatedBy | 0 | String | 128 | UsernameType | yes | no |
| 10 | CreateDate | 7 | (blank) | CreateDate | 0 | Date | — | CurrentDateType | yes | no |
| 11 | RecordDate | 8 | (blank) | RecordDate | 0 | Date | — | CurrentDateType | yes | no |
| 12 | RowPointer | 9 | (blank) | RowPointer | 0 | GUID | — | RowPointerType | yes | no |
| 13 | FX_CusAddress | 10 | (blank) | FX_Address (fxcus) | 0 | String | 150 | nvarchar | yes | no |
| 14 | NoteExistsFlag | 10 | (blank) | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no |
| 15 | InWorkflow | 11 | (blank) | InWorkflow | 0 | Byte | — | FlagNyType | no | no (Read Only Record yes) |
| 16 | FX_ItmsPicture | 12 | FX_Picture | FX_Picture (fxitms) | 0 | Binary | — | varbinary | yes | no |

Notes on the baseline:
- The 16 rows match the EXP-079 T7 final state (13 originals; FX_ItmsDescription; FX_ItmsCost; FX_ItmsPicture). The pre-close Properties readback in the same Form (before step 5) showed the same 16 names and sequences, so the reopen did not change the inventory.
- Sequence values are shared (2, 2, 2; 3, 3; 10, 10); this is an observation only. Renumbering is out of scope.
- **Absent before the change (proved by the 16-row inventory):** `FX_DerOrderTotal` under any case, and any Derived property. No row is bound to a derived expression.
- Inferred operator-side mapping: a row's Read Only checkbox is the first checkbox column (screenshot-confirmed for rows 1–8 and 9–16).

### Form state after T1

- The IDOs Form is open and **clean**: Save disabled; in-form Properties sub-tab selected; no dialog; no unsaved change; status `P&roperties` (focus caption after the views).
- After the query the Form shows one row (query result); the post-F4 status read `Description (IDOs 1 of 1)`. Whether Filter in Place remained active was not separately verified; no field was edited.
- FX_Orders remains checked out to the operator at Revision 2.
- The runtime FX_Orders tab (inactive) and the Web Designer tab (tab 0) were not acted on in T1.

## Acceptance status (after T1)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources; session; fresh IDOs Form; one visible-criterion query; checkout; Tables; 16 inventory; FX_DerOrderTotal absent | **Supported (observed, UI and accessibility level)**: sources reviewed (above); session usable (no expiry); the IDOs Form was closed once and reopened once through Form > Open > Select Form; one F4 returned one FX_Orders row checked out to the operator; Tables view three entries; 16 Bound rows; no FX_DerOrderTotal and no Derived row | `t1-01` (pre-F4 criterion); `t1-02` (identity and Tables); `t1-03` and `t1-04` (inventory rows 1–8 and 9–16) | Same-session UI only; checkout interpreted from Locked By and enabled controls; no database read; Locked By clipped in the image |
| AC-2 to AC-5 | **Not started** (wizard, Finish, Save, recovery pair and second target query are later tasks) | — | — |

## Action audit (cumulative; EXP-080 = T1 only so far)

| Operation | T1 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| New Property wizard | **0** (not opened; stop point) |
| Derived choice / class selection / expression fill | **0 / 0 / 0** |
| Finish | **0** |
| Save | **0** (0 of 0–1 allowed) |
| IDOs close / reopen (pairs) | **1 / 1** (pair 1 of 2) |
| Target F4 queries (visible-criterion) | **1** (of 2) |
| Select Form dialogs answered | **1** (OK, one dialog) |
| Strings, property classes, SQL objects or columns, Forms, runtime records, IDO or property or table-entry changes | **0** |
| Designer actions (click, type, key, snapshot, screenshot) | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | **0** |
| Re-login (session-expiry procedure) | **0** |
| Browser JavaScript, evaluate, run-code, console or network inspection (worker-authored) | **0** (the wrapper's generated Playwright code is tool output, not worker input) |
| Refresh, restart, direct URL navigation | **0** |
| Filter in Place click (FiP toolbar button) | **0** (status bar checked; already active on reopen) |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted (explicit `browser_snapshot`) | **8 / 0** (table steps 3, 4, 6, 10, 13, 15, 21, 24) |
| `browser_find` | **4** (`Open`; `Select Form`; `IdoCollections`; `OK`) |
| Element clicks (successful / failed) | **7 / 0** (IDOs tab heading; Close Panel IDOs; Form menu; Open; IDOs row; Select Form OK; in-form Properties sub-tab) |
| `browser_type` (succeeded / refused) | **2 / 0** (Select Form Filter `IdoCollections`; IDO Name `FX_Orders`) |
| Key presses | **3** (Tab after the filter; Tab after IDO Name; F4) |
| Enter / Escape | **0 / 0** |
| Waits / mouse moves / wheel | **1 / 1 / 1** (3 s; move to the grid; one wheel scroll deltaY +300) |
| Screenshots | **4** (`t1-01` to `t1-04`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | **0** |

### Deviations and notes (T1)

- **Tab heading click.** The step-4 click on the IDOs Form-tab heading (view) resolved, in the tool's generated code, to the tab element named `IDOs Close Panel IDOs`. The IDOs tab remained open and selected afterwards (confirmed in the next snapshot); no close control was pressed by that click. The close click (step 5) was the single Form-tab close.
- **In-form Properties click.** The step-23 click resolved to the in-form `Properties` sub-tab (role tab), not the toolbar-area `Properties` button. No separate IDO Properties Form tab opened (the tab strip showed only FX_Orders and IDOs).
- **Starting snapshot.** The first snapshot was taken after tab 1 had been selected. No snapshot or capture was taken on tab 0.

## Worker-written-file inventory (T1)

- `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (created).
- `evidence/EXP-080/t1-01-pre-f4-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-080/t1-02-post-f4-identity-and-tables-view.png` (created).
- `evidence/EXP-080/t1-03-baseline-inventory-properties-rows-1-to-8.png` (created).
- `evidence/EXP-080/t1-04-baseline-inventory-properties-rows-9-to-16.png` (created).
- Tool-written snapshot and console files under `evidence\playwright\` (named in the tool output, for example `page-2026-10-13T17-03-30-402Z.yml`, `page-2026-10-13T17-04-24-602Z.yml`, `page-2026-10-13T17-04-34-312Z.yml`, `console-2026-10-13T17-03-24-217Z.log`) are wrapper-written, not worker-authored. They were read as readbacks only. Their existence was not separately verified.

No other repository file was written, edited or deleted in T1.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t1-01-pre-f4-idos-fx-orders-criterion.png` | IDOs tab; IDO Name `FX_Orders`; echo row `FX_Orders`; status bar `Filter in Place`; Save greyed; Check Out and Undo Check Out buttons shown in the FiP view | **AC-1** pre-F4 criterion and the Filter-in-Place state before the one query | That F4 returned the row (see `t1-02`) |
| `t1-02-post-f4-identity-and-tables-view.png` | IDOs tab; one row `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By operator (clipped); Check In and Undo Check Out enabled; Save greyed; Tables: FX_HelloWorld01/fxcus, FX_Items/fxitms, FX_Orders/fxords (three rows with both joins); status `Description (IDOs 1 of 1)` | **AC-1** identity, checkout state, one visible-criterion result and the three-entry Tables view | The property inventory (see `t1-03`, `t1-04`); database state |
| `t1-03-baseline-inventory-properties-rows-1-to-8.png` | Same identity; Properties grid rows 1–8: FX_OrderNumber (1), FX_CusName (2), FX_CustomerID (2), FX_ItmsDescription (2), FX_Item (3), FX_ItmsCost (3, FX_Cost, Decimal, 18, decimal), FX_Count (4), CreatedBy (5); every type `Bound to Column`; Read Only and Required columns visible | **AC-1** rows 1–8 of the 16-row baseline; the Read Only and Required mapping | Rows 9–16 (see `t1-04`); the absence of a row (that is the complete readback) |
| `t1-04-baseline-inventory-properties-rows-9-to-16.png` | Same identity; rows 9–16: UpdatedBy (6) through FX_ItmsPicture (12; FX_Picture; Binary; varbinary); the last row is row 16; no row below it | **AC-1** rows 9–16; FX_DerOrderTotal absent (no 17th row; no Derived type in the visible grid) | Rows 1–8 (see `t1-03`); the stored state |

## Preparatory facts for the later wizard (recorded from the sources; NOT verified in T1)

- Page 1 of the New Property wizard offers Bound (active by default), Derived, Unbound and Subcollection (EXP-079 page-1 records). The Derived radio is the one T2 must choose.
- The FX_Cost class (EXP-048): Decimal; Length 18; Decimal Position 2; Default Value 0; Column Data Type decimal; Label String ID `FX_sCost`. EXP-079 T6 observed the FX_Cost class selection inheriting Decimal 18 decimal with all inherit checkboxes checked. The class was not edited and is not to be edited in T2.
- The expression field and its readback are unknown until page 2 is seen. If no expression field exists, T2 must stop before Finish (brief).

## Knowledge state (per finding)

| Finding | State |
|---|---|
| Reopening the IDOs Form through Select Form (`IDOs / IdoCollections`) opens it already in Filter in Place (status bar) | **observed** (one run; consistent with EXP-078 and EXP-079) |
| One visible-criterion F4 for `FX_Orders` returns one row, checked out to the operator, Save disabled | **observed** (one run; UI level) |
| FX_Orders Tables view has three entries (fxcus, fxitms, fxords) with the two joins | **observed** (one run) |
| FX_Orders has 16 Bound properties, including FX_ItmsCost (FX_Cost) and FX_ItmsPicture (FX_Picture); no Derived property; FX_DerOrderTotal absent | **observed** (one run; UI level) |
| The pre-close Properties readback (same Form) matches the post-reopen readback (16 rows) | **observed** (one run; same session) |
| Derived wizard behaviour (page 2 fields; expression readback; Finish response) | **not performed** (T2) |
| Replay or database durability | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blocker in T1.**
2. The wizard's page-2 fields (Derived name, class, expression) are unseen; the T2 instruction must record them before filling.
3. The second close/reopen pair and the second target query are reserved for the recovery task (T3). The recovered inventory must be 17 properties including FX_DerOrderTotal (Derived; FX_Cost; expression) if the wizard completes.
4. The IDOs Form remains open and clean for the next task; the FX_Orders runtime tab remains open (inactive, untouched). FX_Orders stays checked out to the operator (no checkout-management action in this experiment).
5. Classification remains **observed only, NOT replay_verified**.

---

## T4 — Final blocked disposition (cycle 3; documentation only; zero browser calls)

- Task T4, cycle 3, task_message_id `d115dd5e-84a4-4b2d-ab1b-a922522adce7`, worker session `da70d93e-04be-47f3-8cb8-8df281b07cc9`, run `R-20261014-010308-VV2d`. Date 2026-10-14.
- Scope: review the record and T1–T3 evidence; write the final blocked report; update this record only. **No browser calls. The prompt was not answered; the name was not re-entered; the class lookup was not reopened; no expression; no Finish or Save; the wizard was not closed; no session recovery.**
- **Disposition: BLOCKED at AC-2.** Unexpected validation prompt "Value is required for Property Name / Do you want to change the value now?" (rendered on two lines; no period after "Name" in the render; the brief's variant is not used) appeared after the Property Name field visibly read `FX_DerOrderTotal`. Cause unresolved. Neither Yes nor No selected. The prompt and the wizard remain open.
- AC-1: supported by T1 evidence (`t1-01`–`t1-04`). AC-2: failed at the validation gate. AC-3 and AC-4: not reached. AC-5: documentation completed; experimental acceptance not claimed.
- **FX_DerOrderTotal was not confirmed created.** No Finish; no post-change read.
- Counts (T1–T3, reconciled): wizard openings 1; effective Derived choice 1; Next 1; Property Name fills 1; class lookup attempts 1; class selections 0; expression fills 0; Finish 0; Save 0; IDOs close/reopen pairs 1 of 2; target F4 queries 1 of 2; checkout actions 0; Designer actions 0; unloads 0; re-logins 0. Clicks 11 successful, 1 failed (the T2 Derived radio timeout, which did not run). Full audit and file inventory: `evidence/EXP-080/T4-final-blocked-report.md` sections 5 and 6.
- Worker-written files, T4: `evidence/EXP-080/T4-final-blocked-report.md` (created); this record (edited). No other file was written.
- Final browser state (last observed in T3; not re-observed in T4): wizard tab open on page 2 with Property Name `FX_DerOrderTotal`, class empty, Finish not pressed; the prompt open and unanswered; the IDOs tab behind the wizard, clean at T2 and not re-read since.
- Next action: the operator or coordinator must decide how to resolve the prompt (Yes, No, or a cancel that requires explicit approval) and whether to diagnose the name registration. The wizard must not be reopened in EXP-080 without explicit approval.
- Classification: observed only; BLOCKED; not replay_verified.

## T3 — Property name filled; Property Class lookup opened; STOPPED on an in-page prompt "Value is required for Property Name" (cycle 2; AC-2 incomplete; Finish NOT invoked)

- Task T3, cycle 2, task_message_id `49288e1a-9829-41ce-98e1-028557dc3ef9`, worker session `da70d93e-04be-47f3-8cb8-8df281b07cc9`, run `R-20261014-010308-VV2d`. Date 2026-10-14.
- Scope (bounded instruction): work only in the retained wizard on page 2; fill Property Name once; open the class lookup and select FX_Cost once; record class, inherit states and types (expected Decimal, 18, 2, decimal); fill the expression once; capture before Finish; Finish once only if all gates pass; no reopen of New Property; no close or reopen of IDOs; no F4; no checkout or Designer action.

### Gate (T3)

| Step | Observed |
|---|---|
| `browser_tabs` list (before selection) | Tab 0 Designer (current); tab 1 Mongoose (`favoriteContext=IdoPropertyWizard`) |
| `browser_tabs` select tab 1 | succeeded after the list |
| Fresh untargeted snapshot | The IDO Property Wizard tab selected, on **page 2 (Property Attributes)**; Next disabled; Back, Finish and Cancel enabled. Property Name empty and required; Property Class empty; Data Type, Length, Decimal, Column Data Type and Expression with unchecked inherit checkboxes. IDOs tab behind it, disabled while the wizard is open (clean; not closed). Session notice: "about to expire in **8** minute(s)" (down from 11 at T2); **not** a Session Expired modal, so the expiry procedure was not run |
| Prior Derived selection | Established by the T2 evidence (`t2-03`; page 2 layout consistent with Derived). Not re-opened or re-chosen |
| Gate verdict | **Passed.** Usable wizard on page 2; no mutation before the name fill |

### Actions (T3, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | Untargeted snapshot (gate) | As above | snapshot (tool) |
| 4 | **Property Name: one plain fill** `FX_DerOrderTotal` | Filled | — |
| 5 | Untargeted snapshot (readback) | Property Name textbox (active) reads **`FX_DerOrderTotal`**; the other fields unchanged; no message | snapshot (tool) |
| 6 | **Click the Property Class `Open` button** (once) | The click reported success (the tool's generated code targeted the combobox picker trigger). The following snapshot shows the Property Class combobox still **empty** and **no lookup list open**. A consequential in-page prompt is now displayed (see below) | — |
| 7 | `browser_find` `FX_Cost` | "No matches found for FX_Cost" (the lookup list was not open; the prompt was the active element) | find |
| 8 | Untargeted snapshot (fresh; the one fresh snapshot for the blocker) | An **alertdialog** "Infor Mongoose Application Development Framework - IDO Property Wizard" with the text **"Value is required for Property Name / Do you want to change the value now?"**, buttons **Yes** (active, default focus) and **No**. The wizard behind it still shows Property Name `FX_DerOrderTotal`, Property Class empty | snapshot (tool) |
| 9 | Screenshot `t3-01` (corrected visible inspection) | The prompt, centred; the wizard greyed behind it; the field shows `FX_DerOrderTotal`; Property Class empty; Next greyed; Finish enabled behind the prompt | `t3-01` |

**Not done (by the stop):** no answer to the prompt (neither Yes nor No); no class selected; no Escape; no Enter; no expression fill; no Finish; no Save; no close; no reopen; no F4; no checkout action.

### Blocker (T3) — precise

- **Exact prompt text:** `Value is required for Property Name` / `Do you want to change the value now?` (dialog title: `Infor Mongoose Application Development Framework - IDO Property Wizard`).
- **Contradiction:** the Property Name textbox displays `FX_DerOrderTotal` (readbacks at step 5 and step 8). The prompt therefore reports a value that is not visibly empty. The cause is **unresolved**. Hypotheses that were **not** tested: (a) the plain fill set the DOM value without the change or blur event the wizard validates on; (b) the click on the Property Class picker blurred the name field and the validator read an empty model value. Neither is established.
- **Why stopped:** the brief forbids proceeding past a validation message or consequential prompt; it requires recording the exact text and stopping before Finish, and keeping the wizard. Answering "Yes" would move focus back to the name field; answering "No" would dismiss the prompt. Either is a choice the operator or coordinator should make, so neither was taken.
- **Current state of the prompt:** **open** in-page modal (Yes and No unactioned). The brief's end-state rule says an in-page Mongoose dialog should not remain open unless the task says so. It is left open here deliberately, per "never discard ... checkpoint and report a blocker instead". The coordinator must decide how to resolve it.

### Suspected cause and next step (for the coordinator; not verified)

- Next permitted step, once the operator/coordinator authorizes it: resolve the prompt (for example by a single "No" if the value is accepted, or "Yes" to re-enter the name), then confirm the name's model value is registered (for example by moving focus to another field and reading the prompt-free state), then select FX_Cost once from the lookup. The lookup should be opened through a path that does not blur the name field first, if the cause is (b).
- Any retry of the name fill or class selection is a further mutation and should be planned explicitly; the wizard should not be reopened (the New Property rule: at most one opening).

### Action counts (T3 only)

| Operation | T3 |
|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 |
| New Property wizard opened | 0 (the retained wizard from T2) |
| Derived choice | 0 (T2's choice retained) |
| Property Name fills | **1** |
| Property Class lookup opens | **1** (click; no selection) |
| Class selections | **0** |
| Expression fills | **0** |
| Finish | **0** |
| Save | **0** |
| IDOs close / reopen | 0 / 0 |
| Target F4 queries | 0 |
| Select Form dialogs answered | 0 |
| In-page prompts answered | **0** (one prompt appeared; not answered) |
| Designer actions | 0 |
| Unload, cache, FormSync, deployment, regeneration | 0 |
| Re-login | 0 |
| Browser JavaScript, evaluate, run-code, console, network | 0 (worker-authored) |
| Refresh, restart, direct URL | 0 |
| `browser_tabs` list / select | 1 / 1 |
| Snapshots, untargeted / targeted | **3 / 0** (gate; readback; fresh) |
| `browser_find` | **1** (`FX_Cost`; no match) |
| Element clicks (successful / failed) | **1 / 0** (Property Class Open) |
| `browser_type` | **1** (Property Name) |
| Key presses / Enter / Escape | 0 / 0 / 0 |
| Waits / mouse moves / wheel | 0 / 0 / 0 |
| Screenshots | **1** (`t3-01`) |
| Ref-not-found / timeouts / native dialogs answered | 0 / 0 / 0 |

### Cumulative action audit (EXP-080, T1 + T2 + T3)

| Operation | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| Check Out / Check In / Undo | 0 | 0 | 0 | **0 / 0 / 0** |
| New Property wizard opened | 0 | 1 | 0 | **1** |
| Derived choice | 0 | 1 | 0 | **1** |
| Next navigation | 0 | 1 | 0 | **1** |
| Property Name fills | 0 | 0 | 1 | **1** |
| Class lookup opens | 0 | 0 | 1 | **1** (no selection) |
| Class selections | 0 | 0 | 0 | **0** |
| Expression fills | 0 | 0 | 0 | **0** |
| Finish | 0 | 0 | 0 | **0** |
| Save | 0 | 0 | 0 | **0** (0 of 0–1 allowed) |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** (pair 2 not run) |
| Target F4 queries | 1 | 0 | 0 | **1** (of 2) |
| Select Form OK | 1 | 0 | 0 | **1** |
| Strings, classes, SQL, Forms, runtime records, IDO/property/table changes | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | **0** |
| Re-login | 0 | 0 | 0 | **0** |
| In-page prompts answered | 0 | 0 | 0 | **0** (one prompt open, unanswered) |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** |
| Snapshots, untargeted (targeted) | 8 (0) | 5 (0) | 3 (0) | **16 (0)** |
| `browser_find` | 4 | 0 | 1 | **5** |
| Element clicks (successful / failed) | 7 / 0 | 3 / 1 | 1 / 0 | **11 / 1** |
| `browser_type` | 2 | 0 | 1 | **3** |
| Key presses | 3 | 0 | 0 | **3** |
| Waits / mouse moves / wheel | 1 / 1 / 1 | 0 / 0 / 0 | 0 / 0 / 0 | **1 / 1 / 1** |
| Screenshots | 4 | 4 | 1 | **9** |
| Timeouts (native dialogs answered) | 0 (0) | 1 (0) | 0 (0) | **1 (0)** |
| Ref-not-found errors | 0 | 0 | 0 | **0** |

The T2 timed-out Derived radio click is counted above (T2 clicks: 3 successful, 1 failed).

### Worker-written-file inventory (T3)

- `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; this T3 section).
- `evidence/EXP-080/t3-01-prompt-value-required-property-name-before-class.png` (created).
- Wrapper-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-11-50-259Z.yml`, `console-2026-10-13T17-11-42-089Z.log`) are tool output, not worker-authored.

No other repository file was written in T3.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01-prompt-value-required-property-name-before-class.png` | IDO Property Wizard (page 2, Property Attributes) behind an in-page prompt "Value is required for Property Name / Do you want to change the value now?" with Yes and No; the Property Name field reads `FX_DerOrderTotal`; Property Class empty; Next greyed; Finish enabled behind the prompt; session notice "8 minute(s)" | **AC-2** partial: the name fill is visible in the field; the prompt text and that the class is still empty at the stop point; the wizard was preserved | Why the prompt appeared; whether the name value is registered in the wizard model (the prompt implies it may not be); the class lookup's contents (never opened) |

### Acceptance checks (T3)

| AC | T3 status | Limits |
|---|---|---|
| AC-1 | Carried from T1 and T2 gates (identity, checkout, 16-row baseline, FX_DerOrderTotal absent) | Same session; not re-read in T3 |
| AC-2 | **Incomplete.** Derived chosen (T2); Property Name filled (T3, readback `FX_DerOrderTotal`); class **not** selected; expression **not** entered; Finish **not** invoked. Blocked by the consequential prompt | — |
| AC-3 to AC-5 | **Not started** | — |

### Knowledge state (T3)

| Finding | State |
|---|---|
| Property Name `FX_DerOrderTotal` filled once; the field reads back that value | **observed** (one run) |
| Opening the Property Class picker after the name fill produced the in-page prompt "Value is required for Property Name" while the field showed the value | **observed** (one run); cause **unresolved** |
| The Property Class combobox remained empty with no list open after the click | **observed** (one run) |
| The wizard's Derived page 2 holds the name, class, type and expression fields as recorded in T2 | **observed** (T2 and T3) |
| FX_Cost selection; inherited Decimal 18 / 2 / decimal; expression readback; Finish response | **unresolved** (not reached) |
| Replay or database durability | **not claimed** |

### Open questions and blocker (for the operator or coordinator)

1. **Blocker:** the in-page prompt "Value is required for Property Name / Do you want to change the value now?" is open. Per the brief, the wizard is preserved and Finish is not invoked. The operator or coordinator must decide whether to answer Yes or No, and whether the name fill needs to be re-done, before any class selection.
2. The session now shows "about to expire in 8 minute(s)". A session expiry would lose the open wizard state (treat as lost, per the session-expiry rule).
3. The IDOs Form is behind the wizard, disabled, clean (not closed). FX_Orders remains checked out to the operator (checkout not re-read after T2; no checkout action taken).
4. The Derived radio timeout from T2 remains an open environment observation.
5. Classification remains **observed only, NOT replay_verified**.

---

## T2 — Derived New Property wizard inspected; Derived chosen once; stopped on page 2 before any entry (cycle 1; AC-2 partial)

- Task T2, cycle 1, task_message_id `9a7f6139-2694-41ed-ac5b-8a9cbc471686`, worker session `da70d93e-04be-47f3-8cb8-8df281b07cc9`, run `R-20261014-010308-VV2d`. Date 2026-10-14.
- Scope (bounded instruction): fresh gate (IDOs Form; FX_Orders identity, checkout ownership, 16-property baseline with exact FX_Count and FX_ItmsCost spelling; FX_DerOrderTotal absent); open New Property once; record page 1 options; choose Derived once; use only the required Next; capture each page before any entry. **No property name, class selection, expression entry, Finish, Save, wizard close, checkout action, Designer action or F4 query.**

### Sources reconciled (before the wizard)

- EXP-080 T1 (this record): the 16-row baseline and the three-entry Tables view.
- EXP-079 page-1 and page-2 records (Bound-page options; the Bind To, Property Name and Property Class fields; FX_ItmsCost wizard with Decimal 18 decimal and all inherit checkboxes checked; Finish commits immediately). Those were **Bound** pages; the Bind To field does not appear for Derived.
- EXP-061 (read in full): the Property Class lookup offers checked-out classes; inherited Data Type, Length and Column Data Type appear as "Inherit from Property Class" checkboxes.
- EXP-048 (partial read): FX_Cost is Decimal, Length 18, Decimal Position 2, Default Value 0, Column Data Type decimal, Label String ID FX_sCost. The class is not to be edited.
- EXP-078: targeted search only (Filter-in-Place on reopen). No Derived-specific source exists in the EXP-078–EXP-079 records; the Derived page behaviour below is therefore **new observation**, not a reconciled prior result.
- Consequence for later tasks: whether selecting FX_Cost on a Derived page inherits Decimal 18 / 2 / decimal is **unverified**; T3 must read it before Finish.

### Gate (T2; fresh)

| Check | Observed |
|---|---|
| Tab list (before selection) | Tab 0 Designer (current); tab 1 Mongoose Web Client (`favoriteContext=IdoCollections`) |
| Tab 1 select | succeeded after the list |
| Fresh untargeted snapshot | IDOs tab selected and **clean**: IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator account; Check In and Undo Check Out enabled; row checkbox checked; Save and New disabled. Runtime FX_Orders tab also open (not selected) |
| Properties grid (16 rows; read from the same snapshot) | FX_OrderNumber 1; FX_CusName 2; FX_CustomerID 2; FX_ItmsDescription 2; FX_Item 3; FX_ItmsCost 3 (class FX_Cost; Decimal; 18; decimal); FX_Count 4 (Long Integer; int); CreatedBy 5; UpdatedBy 6; CreateDate 7; RecordDate 8; RowPointer 9; FX_CusAddress 10; NoteExistsFlag 10; InWorkflow 11; FX_ItmsPicture 12 (class FX_Picture; Binary; varbinary). **All 16 are Bound to Column; no Derived row; no FX_DerOrderTotal (any case).** |
| Session notice | An in-frame alert: "Your session is about to expire in 11 minute(s). Save your data and log on again." Not a Session Expired modal and not a sign-in page; the expiry procedure was **not** triggered. The notice was not dismissed (it is not a portal banner under the standing rule). |
| Gate verdict | **Passed**: one FX_Orders IDO; checked out to the operator; complete 16-property baseline; FX_DerOrderTotal absent |

Note: the Tables view was not re-read in T2 (it was read in T1: three entries). The T2 gate read the Properties grid, which is the inventory the wizard depends on.

### Wizard actions (T2, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 current | — |
| 3 | Untargeted snapshot (gate) | As above | snapshot (tool) |
| 4 | **Click New Property** (once) | Wizard opened: `favoriteContext=IdoPropertyWizard`; tab `IDO Property Wizard`; the IDOs tab shown disabled behind it | snapshot (tool) |
| 5 | Untargeted snapshot (page 1) | Page 1 "Attributes": IDO Name `FX_Orders` (in the field labelled "Property Name:", the accessibility mislabel recorded in EXP-061 and EXP-079); binding options **Bound (checked by default), Derived, Unbound, Subcollection**; Back disabled; Next enabled; Finish disabled; Cancel enabled | snapshot (tool) |
| 6 | Screenshot `t2-01` (page 1, before the Derived choice) | Bound selected; four options listed | `t2-01` |
| 7 | **Click Derived radio** (ref `f1e1175`) | **Timed out**: "element is outside of the viewport", after 5 s of retries; the locator resolved and the element was reported visible, enabled and stable. The click did **not** run (the next snapshot still showed Bound checked and Derived unchecked) | error text |
| 8 | Untargeted snapshot (fresh; one recovery snapshot) | Same state; same refs; Bound checked; Derived unchecked | snapshot (tool) |
| 9 | Screenshot `t2-02` (corrected visible inspection) | The whole wizard visible in the viewport; the Derived radio visible at about (447, 397); the session-notice strip at the top (about y 40–85), not covering the radio | `t2-02` |
| 10 | **Click the visible Derived label text** (one corrected attempt; `getByText('Derived')`) | Click ran with no error | — |
| 11 | Untargeted snapshot (readback) | Derived radio `[checked] [active]`; Bound unchecked; status bar `Derived`; Next enabled; Finish disabled; no message or prompt | snapshot (tool) |
| 12 | Screenshot `t2-03` (Derived selected, before Next) | Derived selected on page 1 | `t2-03` |
| 13 | **Click Next >** (once; the required navigation) | Page 2 loaded; Back enabled; Next disabled; Finish **enabled** | snapshot (tool) |
| 14 | Untargeted snapshot (page 2) | Fields listed below | snapshot (tool) |
| 15 | Screenshot `t2-04` (page 2, before any entry) | As the page-2 table below | `t2-04` |

No retry of a Finish, Save or entry. No Escape or Enter. No combobox or lookup opened (the Property Class and Data Type `Open` buttons were not clicked).

### Page 1 record (before the Derived choice; the page as first shown)

| Element | Observed |
|---|---|
| Heading | Attributes; "Select the binding for the new property" |
| IDO Name | `FX_Orders` (read-only display; shown in the accessibility field labelled "Property Name:") |
| Binding radios | **Bound** (selected by default); **Derived**; **Unbound**; **Subcollection** |
| Navigation | Help; < Back (disabled); Next > (enabled); Finish (disabled); Cancel |

### Page 2 record (Derived; captured before any entry; NOT filled)

| Element | Observed (before any entry) |
|---|---|
| Heading | Property Attributes |
| Property Name | Textbox, **empty**, marked required (`*`). Not filled |
| Property Class | Combobox, **empty**, with an Open button. **Not opened; no class selected** |
| Data Type section | "Inherit from Property Class" checkbox **unchecked**; Data Type combobox **empty** (with Open) |
| Length | Textbox **empty** |
| Decimal | Textbox **empty** |
| Column Data Type section | "Inherit from Property Class" checkbox **unchecked**; Column Data Type combobox **empty** (with Open) |
| Expression section | "Inherit from Property Class" checkbox **unchecked**; a **multi-line expression text area, empty** (the expression field) |
| Read Only option | **None visible on page 2** (no Read Only checkbox, which is EXP-081's scope in any case) |
| Validation message | None visible |
| Navigation | Help; < Back (enabled); **Next > (disabled; last page)**; **Finish (enabled)**; Cancel |

Observation: Finish is enabled while Property Name is blank and no class is selected. It was not pressed. T3 must not treat the enabled Finish as a sign that the configuration is valid.

### Page 2 readback notes

- Page 2 is the last page (Next disabled).
- The expression is a multi-line text area in an "Expression" section, not a single-line field. Its readback is to be recorded verbatim in T3.
- Derived pages show no "Bind To" field (that is a Bound-page field in EXP-079 and EXP-061).

### Current browser state (end of T2)

- The IDO Property Wizard tab is **open and selected**, on **page 2**, with Derived chosen, Property Name blank, no class, no Data Type, no expression, Back and Finish enabled, Next disabled, Cancel enabled. **Nothing was entered and nothing was saved.** The wizard is intentionally left open for T3.
- The IDOs tab is behind the wizard tab (shown disabled while the wizard is open). It was not closed. It remains clean (no Save; no property change).
- The runtime FX_Orders tab is open and not selected. Not acted on.
- The session-expiry notice strip is visible at the top ("about to expire in 11 minute(s)"); not dismissed. The notice was not a Session Expired modal, so the expiry procedure was not run.
- Web Designer tab (tab 0): listed only; not selected, clicked, captured or acted on.

### Action counts (T2 only)

| Operation | T2 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| **New Property wizard opened** | **1** (the one opening for T2 and for the experiment so far) |
| **Derived choice (effective)** | **1** (one selection; the timed-out radio click did not execute) |
| Class selections / class lookup opens | **0 / 0** |
| Property Name fills | **0** |
| Expression fills | **0** |
| Data Type / Column Data Type selections | **0** |
| Next navigation | **1** (page 1 → page 2) |
| Back / Cancel | 0 / 0 |
| **Finish** | **0** |
| **Save** | **0** |
| IDOs close / reopen (this task) | **0 / 0** |
| Target F4 queries (this task) | **0** |
| Designer actions (any) | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | **0** |
| Re-login (session-expiry procedure) | **0** |
| Browser JavaScript, evaluate, run-code, console, network | **0** (worker-authored) |
| Refresh, restart, direct URL | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **5 / 0** (after tab select; after New Property; after the radio timeout; after the label click; after Next) |
| `browser_find` | **0** |
| Element clicks (successful / failed) | **3 / 1** (New Property; Derived label; Next succeeded. Derived radio timed out, not executed) |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Waits / mouse moves / wheel | **0 / 0 / 0** |
| Screenshots | **4** (`t2-01` to `t2-04`) |
| Ref-not-found errors | **0** |
| Timeouts | **1** (the Derived radio "outside of the viewport"; see below) |
| Native dialogs | **0** |
| Fresh-snapshot recovery allowance used in T2 | **1 of 1** (step 8) |

### Cumulative action audit (EXP-080, T1 + T2)

| Operation | T1 | T2 | Cumulative |
|---|---|---|---|
| Check Out / Check In / Undo | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| New Property wizard | 0 | 1 | **1** |
| Derived choice | 0 | 1 | **1** |
| Class selection | 0 | 0 | **0** |
| Expression fill | 0 | 0 | **0** |
| Finish | 0 | 0 | **0** |
| Save | 0 | 0 | **0** (0 of 0–1 allowed) |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | **1 / 1** (pair 2 not yet run) |
| Target F4 queries | 1 | 0 | **1** (of 2) |
| Select Form OK | 1 | 0 | **1** |
| Strings, classes, SQL, Forms, runtime records, IDO/property/table changes | 0 | 0 | **0** |
| Designer actions | 0 | 0 | **0** |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | **0** |
| Re-login | 0 | 0 | **0** |
| Snapshots, untargeted (targeted) | 8 (0) | 5 (0) | **13 (0)** |
| Element clicks (successful / failed) | 7 / 0 | 3 / 1 | **10 / 1** |
| `browser_type` | 2 | 0 | **2** |
| Key presses | 3 | 0 | **3** |
| Screenshots | 4 | 4 | **8** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | **2 / 2** |

### Blocker and deviation (T2)

- **Derived radio click timed out.** Error: `TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded` on `aria-ref=f1e1175`; the call log showed the radio resolved and "visible, enabled and stable" but "element is outside of the viewport" and retries until the timeout. Per the bounded instruction: one fresh untargeted snapshot (same refs; no change) and one corrected visible inspection (`t2-02`: the wizard, including the Derived radio, is inside the viewport; the top notice strip does not cover it). **One corrected attempt** on the visible Derived label then selected Derived (readback: radio checked). The radio-click failure is recorded as a **suspected environment problem** (a viewport or layout mismatch between the accessibility frame and the rendered page); its cause was **not** established. It did not block the step.
- The corrected attempt used a label rather than the radio. The readback is the evidence that Derived is the selected option. Whether the label and radio share one click handler in this Mongoose build was not separately checked.
- Derived was chosen once in effect. If the timed-out radio click had executed late, the result would still be Derived (the same option); the readback after the label click shows only one selected option, Derived.

### Worker-written-file inventory (T2)

- `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; this T2 section).
- `evidence/EXP-080/t2-01-wizard-page1-before-derived-choice.png` (created).
- `evidence/EXP-080/t2-02-wizard-page1-derived-click-timeout-viewport.png` (created).
- `evidence/EXP-080/t2-03-wizard-page1-derived-selected-before-next.png` (created).
- `evidence/EXP-080/t2-04-wizard-page2-derived-before-any-entry.png` (created).
- Wrapper-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-08-21-457Z.yml`, `page-2026-10-13T17-08-45-856Z.yml`, `page-2026-10-13T17-08-53-809Z.yml`, `console-2026-10-13T17-08-13-937Z.log`) are tool output, not worker-authored.

No other repository file was written in T2.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01-wizard-page1-before-derived-choice.png` | IDO Property Wizard tab; IDO Name `FX_Orders`; the four binding options with Bound selected; Back disabled; Next enabled; Finish greyed; the session notice strip | Page 1 options, default Bound, before any choice (**AC-2** page 1 record) | That Derived was chosen (see `t2-03`) |
| `t2-02-wizard-page1-derived-click-timeout-viewport.png` | Same wizard; Bound selected; Derived unselected; the whole wizard inside the viewport at the time of the timed-out attempt | The viewport inspection after the timeout (the corrected visible inspection) | The cause of the Playwright "outside of the viewport" message |
| `t2-03-wizard-page1-derived-selected-before-next.png` | Same wizard, Derived selected; Next enabled; Finish greyed | Derived chosen on page 1 (**AC-2** Derived choice) | That Next was clicked or what page 2 holds (see `t2-04`) |
| `t2-04-wizard-page2-derived-before-any-entry.png` | Property Attributes page: Property Name (required, empty); Property Class (empty); Data Type and Column Data Type with inherit checkboxes unchecked and empty comboboxes; Length and Decimal empty; Expression section with inherit checkbox unchecked and an empty text area; Next greyed; Finish enabled; Back and Cancel enabled | **AC-2** page 2 fields and defaults, all empty, before any entry | The shown types after a class is selected (T3); the expression readback (T3); Finish behaviour |

### Acceptance checks (T2)

| AC | T2 status | Limits |
|---|---|---|
| AC-1 | Carried from T1; re-passed in the T2 gate (identity, checkout, 16-row inventory, FX_DerOrderTotal absent) | Same session; the Tables view not re-read in T2 |
| AC-2 | **Partial**: page 1 options recorded; Derived chosen once; page 2 recorded before entry; Property Name, class, expression **not yet filled**; Finish **not yet invoked** | The class selection, expression readback and Finish response are T3 |
| AC-3 to AC-5 | **Not started** | — |

### Knowledge state (T2)

| Finding | State |
|---|---|
| New Property page 1 offers four binding options (Bound, Derived, Unbound, Subcollection); Bound is the default | **observed** (one run; UI level) |
| Choosing Derived on page 1 and then Next leads to a page with Property Name, Property Class, Data Type with Length and Decimal, Column Data Type, and an Expression text area | **observed** (one run; UI level) |
| Derived page 2 has no Bind To field and no visible Read Only option | **observed** (one run) |
| Finish is enabled on Derived page 2 while Property Name is blank and no class is selected | **observed** (one run); its meaning not established |
| A radio click timed out "outside of the viewport" while the element was visible; a corrected click on the label selected Derived | **observed** (one run); cause **unresolved** (suspected environment) |
| Class selection (FX_Cost) inherits Decimal 18 / 2 / decimal on a Derived page | **unresolved** (T3) |
| Expression readback and Finish response | **unresolved** (T3) |
| Replay or database durability | **not claimed** |

### Open questions and next permitted action

1. **Next permitted action (T3):** the wizard is left open on page 2 with Derived chosen and nothing entered. The next task may: type `FX_DerOrderTotal` into Property Name (one fill), select `FX_Cost` once from the Property Class lookup, record the readback, the inherit checkboxes and the shown types (expected Decimal, Length 18, Decimal Position 2, decimal), fill the expression `FX_Count * FX_ItmsCost` by one plain fill, record its readback verbatim, and stop before Finish if any gate fails. Finish is not authorized in T2.
2. The session-expiry notice ("about to expire in 11 minute(s)" at T2) suggests the next task should proceed promptly. The operator should be aware that the wizard may need to be re-opened if the session expires before T3 (in which case the in-progress wizard state would be treated as lost, per the session-expiry rule).
3. The timed-out radio click and its cause are unresolved; the next worker should expect the same behaviour if the Derived radio is needed again.
4. The second IDOs close/reopen pair and the second target query remain for the recovery task.
5. Classification remains **observed only, NOT replay_verified**.

## Outcome (operator assistant, 2026-10-14)

Blocked at AC-2; not accepted. Nothing was created. This was decided by the operator assistant under the user's overnight authorization of 2026-10-14.

- Run R-20261014-010308-VV2d ended as blocked after 4 worker tasks. AC-1 is supported (baseline: FX_Orders checked out, 3 tables, 16 Bound properties, no Derived property).
- What happened in the wizard:
  - **Page 1** offers Bound, Derived, Unbound and Subcollection. Derived was selected.
  - **Page 2 for Derived** has these fields:
    - Property Name (required) and Property Class;
    - Data Type, Length and Decimal;
    - Column Data Type;
    - an Expression box.

    Data Type, Column Data Type and Expression each have an "Inherit from Property Class" box (`t2-04`).
  - **The prompt:** one plain fill showed `FX_DerOrderTotal` in Property Name. The first click on the Property Class lookup then raised "Value is required for Property Name / Do you want to change the value now?" with Yes and No (`t3-01`). The worker stopped without answering.
- Screenshots viewed by the operator assistant:
  - `t2-04`: Derived page 2, empty.
  - `t3-01`: the prompt over the wizard with Property Name visibly `FX_DerOrderTotal`. A session warning reads "Your session is about to expire in 8 minute(s)".
- Operator assistant's diagnosis (unverified):
  - In the Bound wizards of EXP-078 and EXP-079, Property Name was auto-filled from the column before the worker typed over it. The required check, which seems to read the last committed value, therefore passed.
  - In the Derived wizard the field starts empty. A fill with no Tab commit leaves the committed value empty, so the click away fails the required check.
  - The fix is the established type-then-Tab commit (as for Table Name and Caption), verified before any other field is touched.
- No Finish, Save, class selection or expression entry took place, so no metadata changed. The wizard and the prompt were left open. The expected session expiry will discard them; otherwise the replay disposes of them.
- Flagged `browser_type` calls: the IDO Name criterion, the Select Form filter and Property Name, all authorized fields.
- Confinement (git status): only `evidence/EXP-080/` and this record were written by the run.
- Next: EXP-080-R2, a replay with these changes:
  1. Dispose of the open prompt with Yes, then Cancel the wizard once, unless the session has already expired.
  2. Commit Property Name with Tab and verify it before opening the class lookup.
  3. Optionally re-login proactively when the session warning shows before the wizard.
