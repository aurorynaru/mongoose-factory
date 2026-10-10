# EXP-041-R3 — Hello World Part 1: Form Creation on Existing FX_ IDO (replay with standard wizard Name entry)

Status (current, after T11 documentation reconciliation): **Form created by one wizard Finish (T5); Designer state clean; Select Form check T7 returned one row after a passing control while T6 returned zero rows (unexplained); AC-7 ordinary close and reopen passed at the rendered-row and property level (T8); AC-8 Web Client runtime opened once (T9); the T10 read-only recheck confirmed that FX_Code and FX_Label are not identifiable by name in the runtime, so AC-8 is NOT PASSED (pending operator decision). EXP-041-R3 cannot yet be classified accepted under all nine strict checks (AC-5 uniqueness unconfirmed; AC-8 not passed). Classification: observed only, not replay_verified.** Earlier T1 status follows for the historical record: T1 complete (read-only prerequisites, visible-inventory collision gate, and route inventory). No creation action occurred. Gate result: **PASS for the Select Form inventory visible to this user** (positive control `SqlTables` returned its two rows; exact `FX_HelloWorld01` and substring `HelloWorld` both returned zero rows; lowercase infix control `testblank` returned two rows in the same session). The Select Form dialog shows **no scope column**; this is recorded as a limitation, not a failure (operator decision, 2026-10-10). The Classic → Multi-View wizard was **not** selected or opened in T1; its page 1 and page 2 remain as observed in EXP-041-R2 and are not re-observed here. Outcome classification for the whole experiment: **observed only, not replay_verified** (to be finalised after the creation tasks).

Date: 2026-10-10
Run: R-20261010-154641-QsiV · experiment EXP-041-R3 · cycle 0 · task T1
Worker session: `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `748cacb2-c618-4e3b-8ea9-61976a9a3c59`
Mode: LEARNING MODE. FX_-only scope extension for the Hello World tutorial (AGENTS.md, 2026-10-10). Forms stay in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, signed-in user `anton.ramos@3mworks.com.ph`.
Editing scope: **User** (`ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), shown in the Designer status bar. No scope dialog appeared in this session; scope was not changed.
Evidence directory: `evidence/EXP-041-R3/`.

Relationship to prior records: replays EXP-041 (blocked at AC-2, cross-scope absence not provable) and EXP-041-R2 (gate PASS for the visible inventory; blocked on wizard page 1 because the Name combobox rejected key-event entry, "Value is required for Name"). R3 applies the standard plain-fill Name entry (step (b)) in the creation task. **T1 does not test step (b).**

## Outcome (operator, 2026-10-10)

**Accepted (observed), with limitations.** Run R-20261010-154641-QsiV. Hello World Part 1 is complete in FX_ form.

- Created: User-scope Form `FX_HelloWorld01` (ScopeName = the operator's user) via Web Designer New > Classic > Multi-View, Data Source IDO `FX_HelloWorld01`. Components bound to `object.FX_Code` and `object.FX_Label` (grid columns and edit fields). Recovered after Designer close/reopen; opened once in the Web Client in add mode (blue-star new row; the second input is required, matching `FX_Code`). No data saved.
- Standard step confirmed: the wizard Name combobox takes one plain fill (`browser_type` without `slowly`); key-event typing leaves it uncommitted (EXP-041-R2).
- AC-5 limitation: an early T6 Select Form lookup returned zero rows (unexplained, likely a list loaded before the new Form was registered); T7 and T9 each returned exactly one row.
- AC-8 limitation: runtime inputs have no captions (Label String IDs left blank in EXP-040); the per-input mapping comes from the Designer evidence (t8-03), not the runtime view.
- Browser: the Web Client tab with the untouched blank record was left open for the operator to close without saving.

## Sources read (T1)

**Reading-order caveat (found in the T2 audit; see the T2 section).** Only `AGENTS.md` was read before the first browser action. The EXP-041 and EXP-041-R2 records and the transcript's Form section were read after the wizard Cancel and Yes, and before or after the gate as stated below. The recipe, EXP-036 and EXP-039 were not read in T1 at all (read in T2). EXP-040 was not read in T1 (read in part in T2).

- `AGENTS.md` (repository root): read in full before the first browser action (audit order 1 of 121; first browser action at order 7).
- `experiments/EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md`: read in full (Select Form mechanism; cross-scope limitation; AC-9 carry-forward).
- `experiments/EXP-041-R2-hello-world-part-1-form-creation-replay.md`: read in full (T1 gate; T2 and T3 wizard page-1 Name blocker; wizard labels; Cancel at the start of T1).
- `experiments/EXP-040-…`: **not re-read in T1.** The IDO baseline is taken from the rendered IDO surface (AC-1). The EXP-041-R2 record states that it read EXP-040 (T1: lines 1–505; T2: lines 506–1256); that is recorded here as the R2 reader's claim, not re-verified. EXP-040 was not edited.
- `docs/mongoose/transcripts/hello-world-pt1.md`, section 7 (Create the form from the data source, lines 112–122): "At Create Form? choose Yes; use the just-created IDO; proceed with the shown defaults; Finish; observe the form open in design mode." Trust: **unverified** (speech-to-text transcript). It leaves the form name, the generated table name and the wizard defaults unspecified. Its Site Default scope and non-FX_ values are **not** authorized here.
- `evidence/EXP-041/` and `evidence/EXP-041-R2/`: the R2 record's description of the positive-control and target captures was used; the EXP-041 images were not re-opened in T1.

## AC-1 preflight (T1: PASS, with limits)

| Item | Evidence | Finding |
|---|---|---|
| Usable authenticated session | Web Client identity bar: `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-01-webclient-initial-state.png`); the IDOs surface loaded; no sign-in or configuration prompt. | Live. Observed. |
| DEM configuration | Designer Help → About (`t1-06-designer-help-about-site-developer-user-scope.png`): "Connected via data configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT". | Observed. |
| Site Developer | Same About dialog: "Currently logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph". | Observed in this session. Permission grants beyond the role label are not tested. |
| User editing scope | Designer status bar (`t1-08-designer-clean-after-route-cancel-user-scope.png`): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. | Observed. |
| EXP-040 IDO baseline | IDOs surface (`t1-01-webclient-initial-state.png`): IDO Name `FX_HelloWorld01`; Project Name `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By empty; Access As `G6R`; Check Out enabled; Undo Check Out disabled; Save disabled. Properties: `FX_Code` (sequence 1, Bound to Column, String 30, Key Sequence 1, Required checked); `FX_Label` (sequence 2, Bound to Column, String 100); seven system properties (CreatedBy, UpdatedBy String 128; CreateDate, RecordDate Date; RowPointer GUID; NoteExistsFlag, InWorkflow Byte). Label String ID and Caption both `oFX_HelloWorld01`. | Observed; consistent with EXP-040 T12 (Revision 2, checked in, FX_Code/FX_Label). No IDO maintenance form was edited or saved. |
| Clean working state before any action | Web Client: IDOs surface, Save disabled, no dialog. Designer: no Form tab open, Save and Undo disabled, no dialog, an empty Form tab list at the start of T1. | Clean at start. Observed. |
| Leftover state at start | The Designer held the EXP-041-R2 Form Wizard - MultiView open on page 1 (Name `FX_HelloWorld01` displayed, not committed; Data Source `FX_HelloWorld01`). Closed in T1 (see Operations, #1–#2). | Closed with Cancel, then Yes on its confirmation. No object created. |
| Portal and application versions | Portal footer `2026.10.01`. Designer About: Application database `2026.10.13`, Form definitions database `2026.10.13`, Web Client `2026.10.13` (Build P#20116826). | Not reconciled (same as EXP-040, EXP-041 and EXP-041-R2). |

Limitations of AC-1: configuration-wide visibility of SQL tables and IDOs (EXP-040) is untested. Permission grants beyond the Site Developer label are untested.

## AC-2 Form-name absence gate (T1: PASS for the visible inventory; no scope column)

Mechanism: Web Client → Open toolbar control → **Select Form** dialog. Filter By = **Name**; Case Sensitive and Starts With unchecked (verified by the absence of `[checked]` in each dialog snapshot and by the screenshots). Each filter entry: click the Filter textbox, Control+a, then `browser_type` with `slowly: true` (key events). Each settled read after a 2-second wait, by dialog snapshot and screenshot. Full snapshot excerpts: `evidence/EXP-041-R3/t1-gate-select-form-dialog-snapshots.md`.

| # | Query (Filter By = Name) | Role | Settled result (this session) | Evidence |
|---|---|---|---|---|
| C1 | `SqlTables` | Positive control (EXP-041 mechanism) | **2 rows:** `Sql Tables` / `SqlTables`; `Sql Tables Constraint` / `SqlTablesPrimaryKey` | `t1-02-positive-control-sqltables-settled.png` |
| T1 | `FX_HelloWorld01` (exact) | Target | **0 rows.** Grid f1e856 has no child rows; textbox reads `FX_HelloWorld01`; both checkboxes unchecked. | `t1-03-target-FX_HelloWorld01-exact-settled-zero-rows.png` |
| T2 | `HelloWorld` (case-preserved substring; Case Sensitive unchecked) | Target (substring) | **0 rows.** Grid f1e856 has no child rows; textbox reads `HelloWorld`. | `t1-04-target-HelloWorld-substring-settled-zero-rows.png` |
| C2 | `testblank` (lowercase; infix) | Case-insensitive infix control (added in T1 to avoid an inference; same as EXP-041-R2 C2) | **2 rows:** `FX_TestBlank01` / `FX_TestBlank01`; `FX_TestBlank02` / `FX_TestBlank02` | `t1-05-control-testblank-lowercase-infix-settled.png` |

Interpretation:

- **C1 passed:** the filter narrowed the grid by name in this session; the session was live; the filter was effective.
- **T1 zero rows (observed):** no displayed row for `FX_HelloWorld01` under the same settings that returned rows for C1 and C2.
- **T2 zero rows (observed):** no displayed row whose name contains `HelloWorld`. C2 shows the same mechanism matches a lowercase substring against mixed-case names in this session, so the case-insensitive claim is **observed** in one run (not inferred from two separate controls, as in EXP-041 T1).
- **Scope not displayed (limitation, operator-accepted):** the dialog shows Caption and Name only. The ScopeType and ScopeName of each row are not observable. Site Default, Group-scope and other users' Forms are not individually demonstrated. Under the operator decision of 2026-10-10 this is accepted for a User-scope creation, because a User-scope Form is created in the user's own scope and cannot overwrite a Site Default, Group or other user's Form.
- **Inventory completeness:** the dialog shows no total count. Rows outside a rendered window were not separately scanned. The claim is limited to "the filtered result, as displayed".

**Gate result: PASS (visible inventory).** This gate is a precondition for a later creation task only. It does not, by itself, authorize creation.

### AC-9 carried-forward question (EXP-040 AC-7; EXP-041 T1; EXP-041-R2 T1)

Question: did the declined Create Form prompt in EXP-040 (2026-10-10, T9) produce a Form named `FX_HelloWorld01`?

Re-confirmation on 2026-10-10 in this session (AC-2 evidence, `t1-03`, `t1-04`, with the same-session control `t1-02` and the lowercase infix control `t1-05`):

- No row for `FX_HelloWorld01` (exact) in the visible Select Form inventory.
- No row containing `HelloWorld` in any letter case in the visible Select Form inventory.
- Therefore, in the visible inventory, there is no evidence that a Form named `FX_HelloWorld01` exists.
- Not shown: scope-complete absence (Site Default, Group, other users). Under the operator decision, this does not block a User-scope creation.

Cross-references (dated 2026-10-10):

- EXP-040 AC-7 and its 2026-10-10 follow-up (from EXP-041 T1): carried-forward question. This record re-confirms the visible-inventory result. **EXP-040 was not edited.** The operator is to update EXP-040 afterwards. Its historical waivers are unchanged.
- EXP-041 T1 (blocked at AC-2; cross-scope limit) and EXP-041-R2 T1 (gate PASS for the visible inventory): this record repeats the gate in a new session. **EXP-041 and EXP-041-R2 were not edited.**

## Wizard route inspection (T1: route and labels captured; no wizard selected or opened)

Route: Designer toolbar **New** (`#mgtoolbarbutton-1088`, label "New") → dialog **Form Wizard Selection** (radio **New Form** selected; **Extend Form** not selected). OK was not pressed; Cancel closed the dialog.

Full Category and Wizard inventory with descriptions: `evidence/EXP-041-R3/t1-route-category-wizard-inventory.md`. Summary:

| Category (list label) | Wizard labels offered (rendered) |
|---|---|
| Classic (`WinStudio classic form wizards`) | Build from Scratch; Detail-Only; Grid-Only; **Multi-View**; Query; Report; Tile (7) |
| ExtDataSource | Data Lake Wizard; IDO From ION API Wizard (2) |
| Flex | Basic (1) |
| Form Builder (value `FormBuilder`) | DataMaintenance; DataView; Report; Responsive Form (4) |
| IDS | New Form (1) |
| New Data (value `NewData`) | Maintenance; XML To IDO (2) |
| REST | REST API Wizard (1) |

Candidate analysis (from rendered labels only):

- **Recommended candidate: Category Classic, Wizard Multi-View.** Its rendered description: "Multi-view (grid/detail) form bound to an IDO collection". EXP-041-R2 T2 observed (not re-observed in T1) that its page 1 Data Source list offers IDOs, including `FX_HelloWorld01`. Page 2 (Save Template) remains **unobserved**.
- Alternatives that also state IDO binding: Classic → Grid-Only, Classic → Detail-Only. Not opened, by design (one wizard per run).
- Excluded for this experiment: Form Builder → DataMaintenance, New Data → Maintenance and New Data → XML To IDO (their rendered descriptions state that they create a table and/or IDO; EXP-040 observed DataMaintenance creating a table and IDO); Form Builder → Responsive Form (Responsive Form Builder stack, out of scope); the IDS, Flex, REST and ExtDataSource wizards (no Form on an existing IDO in their descriptions).

**Operator decision needed before the creation task:** confirm Classic → Multi-View (recommended), or name another IDO-bound Classic wizard.

## Acceptance checks (T1 status)

| AC | T1 status | Proof | Limitation |
|---|---|---|---|
| AC-1 | **PASS (with limits)** | `t1-01`, `t1-06`, `t1-08` | Configuration-wide SQL/IDO visibility untested. Permission grants beyond the role label untested. Version strings unreconciled. |
| AC-2 | **PASS (visible inventory)** | `t1-02`–`t1-05`; `t1-gate-select-form-dialog-snapshots.md` | No scope column (operator-accepted limitation). No store total. No Site Default or Group Form demonstrated. |
| AC-3 | **PARTIAL (route and labels captured; no wizard loaded in T1)** | `t1-07`; `t1-route-category-wizard-inventory.md` | Classic → Multi-View page 1 load and IDO binding not re-tested in T1; page 2 unobserved. |
| AC-4 | Not evaluated (no wizard page in T1) | — | — |
| AC-5 | Not evaluated (no Finish; no Save) | — | — |
| AC-6 | Not evaluated (no Form created) | — | — |
| AC-7 | Not evaluated (no Form to close or reopen) | — | — |
| AC-8 | Not evaluated (no runtime open) | — | — |
| AC-9 | **PARTIAL (visible-inventory re-confirmation recorded above, dated)** | Section "AC-9 carried-forward question" | Scope-complete absence not shown. EXP-040, EXP-041 and EXP-041-R2 records not edited. |

## Standard steps (as used in T1)

| Step | Used in T1? | Note |
|---|---|---|
| (a) Route: New → Form Wizard Selection → New Form, Category Classic, Wizard Multi-View, OK | **Partly.** Route opened, Classic and Multi-View labels read; Cancel instead of OK | No wizard loaded in T1. |
| (b) Name: one plain fill (no `slowly`) | **Not used in T1** | Name was not entered in T1. Still untested in this session. |
| (c) Data Source trigger and FX_HelloWorld01 option | **Not used in T1** | — |
| (d) Save Template uncheck | **Not used in T1** | Page 2 not reached. |
| (e) Select Form filter: key-event typing (`slowly`) | **Used** (four queries, C1, T1, T2, C2) | Each read after a 2-second wait. |
| (f) Fresh snapshot before every prompt or alert click | **Used** (one confirmation prompt, in the wizard Cancel flow; corrected in T2 from "two prompts") | See Operations #1–#2. |

## Operations (T1, in order)

| # | Operation | Result |
|---|---|---|
| 1 | Tab list; Designer snapshot (tab 0). Wizard Cancel: fresh snapshot; ref `e360` labelled "Cancel" | Cancel shows a confirmation alertdialog: "Are you sure you want to cancel? All data entered will be lost." |
| 2 | Fresh snapshot; alert ref `e367` labelled "Yes" (ref `e369` labelled "No") → Yes | Wizard closed; entries discarded; nothing committed (no Finish, no Save, no object). Designer clean. |
| 3 | Tab select 1 (Web Client); fresh snapshot; screenshot `t1-01` | IDOs surface; identity bar DEM. |
| 4 | Find "Open"; Click Open (`f1e25`, label "Open") | Select Form dialog opened (leftover filter `testblank`, Filter By Name, both checkboxes unchecked). |
| 5 | Dialog snapshot (`f1e841`) | Leftover rows `FX_TestBlank01`/`02`; no `[checked]`. |
| 6 | Click Filter textbox (`f1e877`); Control+a; `SqlTables` (slowly); wait 2 s; dialog snapshot; screenshot `t1-02` (taken in the same batch as step 6's click, a read-only capture) | **C1 settled: 2 rows.** |
| 7 | Click Filter; Control+a; `FX_HelloWorld01` (slowly); wait 2 s; dialog snapshot; screenshot `t1-03` | **T1 settled: 0 rows.** |
| 8 | Click Filter; Control+a; `HelloWorld` (slowly); wait 2 s; dialog snapshot; screenshot `t1-04` | **T2 settled: 0 rows.** |
| 9 | Click Filter; Control+a; `testblank` (slowly); wait 2 s; dialog snapshot; screenshot `t1-05` | **C2 settled: 2 rows.** |
| 10 | Click Cancel (`f1e898`, label "Cancel") | Dialog closed; no row activated. |
| 11 | Tab select 0 (Designer); fresh snapshot | Designer clean (no Form open; Save disabled; User scope). |
| 12 | Help (`e9`, label "Help"); find "About"; click About (`e373`) | About dialog open. |
| 13 | Find "Connected via data configuration"; screenshot `t1-06` | About text: DEM configuration; Site Developer; user versions for anton.ramos. |
| 14 | About OK (`e380`, label "OK" verified by find) | About closed. |
| 15 | Designer New (`e18`, label "New") → Form Wizard Selection opened; find; dialog snapshot | New Form radio selected; Category and Wizard empty. |
| 16 | Category trigger (`e399`) → list read; option Classic (`e420`) | Category `Classic`. |
| 17 | Wizard trigger (`e407`) → list read; screenshot `t1-07`; wizard trigger (`e407`) collapses the list | Wizard list: Build from Scratch … Tile (7); no item selected. |
| 18 | Category trigger → option ExtDataSource → Wizard open → read → collapse | Wizard: Data Lake Wizard; IDO From ION API Wizard. |
| 19 | Category → Flex → Wizard open → read → collapse | Wizard: Basic. |
| 20 | Category → Form Builder → Wizard open → read → collapse | Wizard: DataMaintenance; DataView; Report; Responsive Form. |
| 21 | Category → IDS → Wizard open → read → collapse | Wizard: New Form. |
| 22 | Category → New Data → Wizard open → read → collapse | Wizard: Maintenance; XML To IDO. |
| 23 | Category → REST → Wizard open → read (list left open) | Wizard: REST API Wizard. |
| 24 | Route dialog Cancel (`e416`, label "Cancel" verified in snapshot) | Dialog closed; no OK; no wizard selected. |
| 25 | Screenshot `t1-08` (Designer clean) | Designer: no Form open, Save disabled, User scope. |

## Operation counts (T1)

| Operation | Count | Notes |
|---|---|---|
| Save | **0** | Save disabled in every captured state. |
| Form created / wizard OK / Finish / Create Form | **0** | No wizard was selected or opened in T1. |
| Designer New (wizard route) | 1 opened; **0 OK**; Cancel | — |
| Wizard Cancel (EXP-041-R2 page 1) | 1; confirmation Yes (1) | Discarded uncommitted wizard entries; see Operations #1–#2. |
| Category selections in the route dialog | 7 (Classic, ExtDataSource, Flex, Form Builder, IDS, New Data, REST) | Dialog state only; not committed. |
| Wizard list opens / collapses | 7 / 6 | REST list closed by the dialog Cancel. |
| Select Form opened | **1** (Web Client Open) | Closed with Cancel. |
| Select Form OK / row activation | **0** | — |
| Select Form filter entries (key events) | **4** (`SqlTables`, `FX_HelloWorld01`, `HelloWorld`, `testblank`) | Each preceded by Control+a (4). |
| Settle waits (2 s) | **4** | One per query. |
| Dialog snapshots (Select Form) | **5** | Opening state + one settled read per query. |
| Designer Help / About / About OK | **1 / 1 / 1** | Read-only. |
| Application rows edited / saved / inserted | **0** | — |
| Check-in / check-out / undo | **0** | — |
| Designer Form-tab open / close / reopen | **0 / 0 / 0** | No Form opened. |
| JavaScript / evaluate / run-code | **0** | Not used. |
| Authentication / logout / session reset | **0** | Not used. |
| Tab selects | **2** (Web Client, Designer) | Navigation only. |
| Fresh untargeted recovery snapshots | **0** | No `Ref … not found` error occurred. |
| Browser timeouts | **0** | — |
| PNG screenshots saved (worker-authored) | **8** | `t1-01` to `t1-08`. |
| Markdown evidence files saved (worker-authored) | **2** | Dialog snapshot excerpts; route inventory. |

## Errors and recovery accounting

1. **Experiment record path did not exist at first read.** The task-specified record path was absent when first read. Recovery: created by this task. Not a Mongoose error.
2. **Wizard Cancel produced a confirmation.** Cancel on the EXP-041-R2 page-1 wizard showed "Are you sure you want to cancel? All data entered will be lost." Recovery: fresh snapshot; `Yes` ref `e367` verified by label before the click. The discarded entries were the uncommitted Name and Data Source from EXP-041-R2 (no object created).
3. **Screenshot and click in one batch.** The `t1-02` screenshot (read-only) was issued in the same batch as one Filter click (single action). No state change resulted; disclosed for the parallel-action rule.
4. **Web Client snapshots at default depth showed only the portal shell** (iframe contents not expanded). Recovery: `browser_find` for "Open" and "Select Form" (read-only) and dialog-scoped snapshots (`target: f1e841`). Not an error to the Mongoose state.
5. **Designer tab was the active tab at start.** The Web Client tab was selected for the gate and the Designer tab was selected again afterwards. Navigation only.
6. No `Ref … not found`, no timeouts, no dialog mis-responses, no hook rejections, no Finish, no Save, no mutation.

## Object audit (T1)

| Category | Finding |
|---|---|
| Created | **None.** No Form, component, IDO, IDO project, SQL table, column, property, method, script, wizard artifact or data row. |
| Changed | **None.** No save. Dialog state only (Select Form filter text; route Category and Wizard combobox states; Form Wizard Selection dialog closed by Cancel). |
| Opened for editing | None. The Designer displayed no Form. The IDOs surface was observed and not edited. |
| Deleted | None. |
| Checked out / in | None. |
| Pending changes at end | **None.** Designer Save disabled, no Form open. Web Client Save disabled. |

## Final browser state (T1)

- **Designer tab (tab 0, selected):** `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. No Form open (Form tab list empty), canvas blank, Save and Undo disabled, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Form Wizard Selection closed (Cancel). No dialog or unsaved-change prompt.
- **Web Client tab (tab 1):** portal `Mongoose`; IDOs surface showing `FX_HelloWorld01` (unchanged); Save disabled; Select Form dialog closed (Cancel); no dialog.
- No browser-native dialog, no beforeunload prompt, no in-page dialog open.

## Evidence (`evidence/EXP-041-R3/`)

| File | Shows | Does not prove |
|---|---|---|
| `t1-01-webclient-initial-state.png` | Web Client IDOs surface: `FX_HelloWorld01` in `FX_HelloWorldProject01`; Revision 2 (10/10/2026); Access As `G6R`; FX_Code (String 30, key 1, required) and FX_Label (String 100); seven system properties; Check Out enabled; Save greyed; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Select Form dialog is not open. | Anything about Forms; the IDO's runtime behaviour. |
| `t1-02-positive-control-sqltables-settled.png` | Select Form dialog: Filter `SqlTables`; rows `Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey`; Filter By Name; Case Sensitive and Starts With unchecked. | The scope of each row; the store total. |
| `t1-03-target-FX_HelloWorld01-exact-settled-zero-rows.png` | Select Form: Filter `FX_HelloWorld01`; grid empty after the settle; Filter By Name; both checkboxes unchecked. | Scope; database absence. |
| `t1-04-target-HelloWorld-substring-settled-zero-rows.png` | Select Form: Filter `HelloWorld`; grid empty after the settle; Filter By Name; both checkboxes unchecked. | Scope; database absence. |
| `t1-05-control-testblank-lowercase-infix-settled.png` | Select Form: Filter `testblank` (lowercase); rows `FX_TestBlank01` and `FX_TestBlank02`. | Scope; anything beyond name matching for this control. |
| `t1-06-designer-help-about-site-developer-user-scope.png` | About dialog: DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; "logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph". | Permission grants beyond the role label. |
| `t1-07-classic-wizard-list-labels-read-no-selection.png` | Form Wizard Selection: New Form; Category `Classic`; Wizard list open showing Build from Scratch (description "Plain form without defined components"), Detail-Only, Grid-Only ("bound to an IDO collection"), Multi-View ("bound to an IDO collection"), and the top of Query. Wizard combobox empty before any selection. | That any wizard loads; Report and Tile (below the scroll; read from the snapshot, not in the image). |
| `t1-08-designer-clean-after-route-cancel-user-scope.png` | Designer: no Form open; Save disabled; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog. | Database state. |
| `t1-gate-select-form-dialog-snapshots.md` (worker-authored) | Dialog accessibility excerpts for the open state, C1, T1, T2, C2 (refs, texts, checkbox states). | Scope; store total. |
| `t1-route-category-wizard-inventory.md` (worker-authored) | Category and Wizard labels and descriptions for all 7 categories (18 wizards). | That any wizard loads. |

Tool-generated browser captures under `evidence/playwright/` are gitignored tool output and are not worker-authored evidence.

## Acceptance evidence matrix (T1 summary)

| AC | Status | Key evidence |
|---|---|---|
| AC-1 | PASS (with limits) | `t1-01`, `t1-06`, `t1-08` |
| AC-2 | PASS (visible inventory; no scope column) | `t1-02` (C1), `t1-03` (T1), `t1-04` (T2), `t1-05` (C2); `t1-gate-select-form-dialog-snapshots.md` |
| AC-3 | PARTIAL (route, Category, Wizard labels captured; no wizard loaded) | `t1-07`; `t1-route-category-wizard-inventory.md` |
| AC-4 – AC-8 | Not evaluated (no creation task in T1) | — |
| AC-9 | PARTIAL (dated re-confirmation for the visible inventory) | Section "AC-9 carried-forward question" |

## Knowledge state (T1)

| Finding | State |
|---|---|
| Select Form Name filter, key-event entry, Case Sensitive and Starts With unchecked: `SqlTables` positive control returns its two rows | observed (this session, `t1-02`) |
| `FX_HelloWorld01` absent from the visible Select Form inventory (exact name) | observed (`t1-03`) |
| `HelloWorld` substring absent from the visible Select Form inventory | observed (`t1-04`) |
| Case-insensitive infix matching in one control (`testblank` → `FX_TestBlank01/02`) in this session | observed (`t1-05`) |
| Select Form rows do not display scope | observed (limitation; `t1-02`–`t1-05`) |
| Designer Help → About: DEM configuration; Site Developer; edits create user versions | observed (`t1-06`) |
| User scope in the Designer status bar with no Form open | observed (`t1-08`) |
| IDO `FX_HelloWorld01` in `FX_HelloWorldProject01`, Revision 2, FX_Code/FX_Label as in EXP-040 T12 | observed (`t1-01`) |
| Form Wizard Selection: New Form / Extend Form radios; 7 Category labels; Classic 7 wizards; Form Builder 4; New Data 2; IDS 1; Flex 1; REST 1; ExtDataSource 2 | observed (labels; `t1-07`; inventory file) |
| Classic → Multi-View is the IDO-bound Classic wizard recommended for this experiment | **candidate_procedure** (labels only in T1; page 1 IDO list observed in EXP-041-R2 T2; page 2 unobserved) |
| New Data → Maintenance and XML To IDO, and Form Builder → DataMaintenance, create tables/IDOs | description only in T1; DataMaintenance creating a table and IDO **observed in EXP-040** |
| Wizard Cancel shows "All data entered will be lost" confirmation; Yes closes the wizard | observed (this session; Operations #1–#2) |
| Portal footer `2026.10.01` vs Designer About `2026.10.13` | observed; **unresolved** |
| Configuration-wide visibility of SQL tables and IDOs | **unresolved** (not tested) |
| Name entry by one plain fill advances Multi-View page 1 | **unresolved** (not tested in T1; the creation task must test it under step (b)) |

## Repository changes (this task)

- Written: `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (this record; created).
- Written: `evidence/EXP-041-R3/` (8 PNG; 2 MD files: `t1-gate-select-form-dialog-snapshots.md`, `t1-route-category-wizard-inventory.md`).
- Not written: `experiments/EXP-040-…`, `experiments/EXP-041-…`, `experiments/EXP-041-R2-…` (not edited; the operator will cross-reference). No recipe, AGENTS.md, memory, `tools/`, docs or other experiment file.

## Open questions and blockers

1. **Wizard choice.** Recommended: Classic → Multi-View. The operator should confirm it, or name another IDO-bound Classic wizard (Grid-Only or Detail-Only), before the creation task.
2. **Name entry (blocker carried from EXP-041-R2).** The Multi-View Name combobox rejected key-event entry twice (T2 with Tab; T3 with Delete-then-retype and Enter). The creation task must use the standard plain-fill step (b) once, then stop on any further "Value is required for Name". T1 does not test step (b).
3. **Page 2 unobserved.** Save Template presence and state, the generated-object preview, and any mandatory page-2 choice are unknown. Finish must not be authorized until page 2 is inspected.
4. **Scope limitation.** Select Form does not show scope. Accepted under the operator decision for a User-scope Form. Scope-complete absence is not claimed.
5. **Inventory totals.** No total count is displayed. The gate is the filtered result as displayed.
6. **Version strings** (portal `2026.10.01` vs Designer `2026.10.13`) remain unreconciled.
7. **Creation not authorized by T1.** The next step, if the operator approves, is a separate creation task: select the wizard, verify page 1 identity (Name `FX_HelloWorld01`, Data Source IDO `FX_HelloWorld01`), uncheck Save Template if present, and perform one Finish only after review.

---

## Operator dispositions (2026-10-10, recorded before T3 browser actions)

1. **EXP-041-R2 leftover wizard Cancel/Yes: authorized.** Only uncommitted page-1 entries (Name, Data Source) were discarded. No preservation violation.
2. **Late prerequisite reading: accepted as a minor ordering deviation.** The original chronology is **not** claimed as compliant. The T1 gate and route inspection were run without the recipe, EXP-036, EXP-039 and the EXP-040 detail; those references are read in T3 before any T3 browser action, and the actual reading chronology is recorded below.

## T3 — Reading chronology and reference reconciliation (before any T3 browser action)

Task: T3, cycle 3, run R-20261010-154641-QsiV, worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `cf4a1476-1f74-4d2c-8a6a-51bf65bdae9c`.

Reading performed in T3 before the first T3 browser action (tool-order: all reads precede any browser call in this task):

| Reference | Extent read in T3 | Lessons carried into T3 |
|---|---|---|
| `AGENTS.md` | Full (T1 and T3) | Scope extension; FX_ only; User scope for forms; evidence and recovery rules. |
| `recipes/forms/create-basic-form.md` (status verified for Build-from-Scratch only) | Full (read in T2) | Finish persists and opens the Form clean; Save Template on page 2, checked by default; Select Form OK activates a row, so use Cancel; numeric Ext ids drift. |
| `docs/mongoose/transcripts/hello-world-pt1.md` Form step (sections 5–7, lines 88–122) and the agent rules (lines 1–30) | Full for these sections (read in T1 and T2) | Create Form → Yes; use the IDO; "proceed with the shown defaults"; Finish; the Form opens in design mode. Trust: unverified transcript. Form name and wizard defaults unspecified there. Site Default and non-FX_ values are not authorized. |
| EXP-036 (wizard lessons) | Full (read in T2) | Build-from-Scratch Name by one `browser_type` fill advanced to page 2 (T5). Save Template's display `<span>` intercepted the direct checkbox click; one visible label click unchecked it (T6). Finish then gave "Process Completed Successfully" and an OK. Select Form filter used key events. |
| EXP-039 (IDO project; prerequisite) | Full (read in T2) | The Filter-in-Place query and the F4 mechanism; a Save with no denial; the close and reopen recovery pattern. Create rights and configuration-wide visibility unproven. |
| EXP-040 (IDO and SQL table; prerequisite) | **Full in T3** (earlier T2 read covered only lines 1–24 and grep excerpts, so this closes the gap). Lines 1–1256. | Multi-View was not used in EXP-040; EXP-040's table-and-IDO creation went through the Data Maintenance wizard (its own page text: "create the database table, IDO and optional form"). Classic Multi-View's table-creation behaviour is not established by EXP-040. Lessons: (1) the Identify Your Editing Scope dialog did not appear on several EXP-040 launches; scope was read from the status line; (2) a typed value in the wizard Attributes Table Name combobox triggered an "already exists" prompt, and a wrong-ref Yes to a save-changes prompt (T10) was an incident; (3) Refresh's save-changes prompt needs a fresh label check (T11); (4) Finish's Create Form prompt was offered after Finish (EXP-040 T9), so declining it must be checked; (5) the Select Form filter did not narrow in EXP-040 Stage C, but narrowed in EXP-041 with key events; (6) the wizard's first-page defaults in EXP-040 were IDO Project `FX_HelloWorldProject01`, Form Type `MultiView`, Form Layout `GridLeft`, Device Type `Default`, Site Split unchecked. |
| `evidence/EXP-041/` positive-control image | Viewed in T2 | Matches the EXP-041 record. |
| `evidence/EXP-041-R3/harness-audit-T1.md` | Read in T2 | Used for the T1 reconciliation. |

Reading-chronology summary (for the record): the gate (AC-2) and the route inspection were performed in T1 **without** the recipe, EXP-036, EXP-039 or EXP-040 detail. Those references are now read (T2 and T3), as the operator accepted, as a minor ordering deviation. The original chronology is **not** claimed as compliant.

---

## T2 — Documentation and evidence audit (no browser action)

Date: 2026-10-10. Run R-20261010-154641-QsiV · cycle 1 · task T2 · worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `4a06439f-f762-4ce5-a2c0-9bc95d0233ef`.
Full audit: `evidence/EXP-041-R3/t2-documentation-and-evidence-audit.md`. **Browser actions in T2: 0.** The wizard stayed closed, the Web Client and Designer were not touched, and no Form was created, saved or opened.

### T2 findings (summary)

1. **Reading order (late reads; not claimed as compliant).** Before the first T1 browser action, only `AGENTS.md` was read. The recipe (`recipes/forms/create-basic-form.md`), EXP-036, EXP-039 and EXP-040 were not read in T1 at all; T2 read the recipe and EXP-036 in full, EXP-039 in full, and EXP-040 in part (lines 1–24 and grep-matched sections). The EXP-041 and EXP-041-R2 records and the transcript's Form section were read after the wizard Cancel and Yes. The gate and the route inspection were performed without these references.
2. **AC-1 baseline verified** from images `t1-01`, `t1-06` and `t1-08` (IDO identity and properties; DEM configuration and Site Developer text; Designer clean with User scope).
3. **AC-2 gate verified.** The four settled dialog states (C1 `SqlTables`: two rows; T1 `FX_HelloWorld01`: zero; T2 `HelloWorld`: zero; C2 `testblank`: two rows) match the tool-generated snapshot files written when each wait returned, and match images `t1-02` to `t1-05`. Filter By = Name and both checkboxes unchecked in each. The dialog was closed afterwards.
4. **Four flagged `browser_type` calls reconciled.** They are the key-event entries into the Select Form filter (audit orders 23, 29, 35, 41: `SqlTables`, `FX_HelloWorld01`, `HelloWorld`, `testblank`), each preceded by a verified click and Control+a. Step (e) permits them. No `browser_type` reached the wizard or any other field. **Expected calls, not violations.**
5. **Corrections to this record.** (a) The prompt count in step (f) of the standard-steps table: one confirmation prompt, not two. (b) The "Sources read" list now states the reading order (see the caveat there).

### T2 deviations and judgment calls (operator review requested)

- **Wizard Cancel confirmation answered Yes.** The brief said to close the EXP-041-R2 page-1 wizard with Cancel and "nothing was committed". Cancel asked "Are you sure you want to cancel? All data entered will be lost." I answered Yes (ref `e367`, label verified). The discarded state was the uncommitted Name and Data Source that EXP-041-R2 recorded as not accepted. The brief did not name the confirmation answer, and its boundary says never to discard unsaved work. No application object was affected. **Acknowledgement requested.**
- **Extra read-only control `testblank`.** It was not in the T1 query list. It uses the same mechanism and is disclosed in T1. Not a violation.
- **Late reading** (finding 1). **Operator review requested before the creation task.** The gate evidence does not depend on reading order, since its positive control ran in-session and matches the EXP-041 image. But the creation step depends on the recipe and EXP-036 lessons, which the creation task must now cite.
- **Controller audit summary inconsistent.** `harness-audit-T1.md` header says "50 actions, 28 reads … turns=101", while its table has 121 rows. Not reconciled by the worker; the operation counts in T1 match the table.
- **Select Form filter conflict with EXP-040.** EXP-040 Stage C recorded the filter "did not narrow" when "IDO Projects" was typed (its input method is not stated). This gate narrowed with key events. Unresolved; for the operator's EXP-040 cross-reference. EXP-040 was not edited.

### Operator review before the next browser task

A verified prerequisite gap exists (late or missing reads, and the wizard discard). I recommend the operator acknowledge it before any browser task. The gate is still valid for this session only: the creation task must repeat the positive control and the zero-row checks in its own session before any Finish, as the brief requires. The R2 record already said a later creation task must confirm the gate is current.

### AC status after T2

| AC | Status | Basis |
|---|---|---|
| AC-1 | PASS-LIMITED (verified from images) | `t1-01`, `t1-06`, `t1-08`; limits as in T1 |
| AC-2 | PASS for the visible inventory; no-scope-column limitation (verified) | Snapshot files and `t1-02`–`t1-05`; limits as in T1 |
| AC-3 | PARTIAL (unchanged) | Route and labels from saved snapshots; no wizard opened |
| AC-4 – AC-8 | Not evaluated | No creation task yet |
| AC-9 | PARTIAL (dated re-confirmation recorded in the T1 AC-9 section) | EXP-040 and EXP-041 not edited |

### Repository changes (T2)

- Written: `evidence/EXP-041-R3/t2-documentation-and-evidence-audit.md` (new).
- Written: this record (T2 section, one correction in the standard-steps table, one caveat in "Sources read").
- Not written: EXP-036, EXP-039, EXP-040, EXP-041, EXP-041-R2, the recipe, AGENTS.md, memory, `tools/`, docs.
- Tool-generated browser output under `evidence/playwright/` (gitignored) was read in T2, not written by the worker.

### Open questions (T2)

1. Operator acknowledgement of the wizard Cancel-to-Yes discard and of the late reading order.
2. Whether the Select Form filter conflict (EXP-040 "non-functional" vs. EXP-041 key-event narrowing) should be settled before EXP-040 AC-7 is closed.
3. Classic → Multi-View is still the recommended wizard. Its page-1 Name acceptance under step (b), and page 2 (Save Template), remain unobserved. The creation task must not authorize Finish until both are observed.

---

## T3 — Multi-View wizard preflight (one wizard, page 1 to page 2, no Finish)

Task: T3, cycle 3, run R-20261010-154641-QsiV, worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `cf4a1476-1f74-4d2c-8a6a-51bf65bdae9c`.
Full inventory: `evidence/EXP-041-R3/t3-wizard-preflight-inventory.md`.

### Gate and identity (before any T3 browser action)

Fresh Designer snapshot: DEM configuration in the title; Save disabled; no Form tab; no dialog; `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Same worker session as the T1 AC-2 gate, so the T1 gate result is retained and its queries were **not** repeated.

### Route and labels (captured before OK)

- Route: Designer toolbar New → Form Wizard Selection; **New Form** selected.
- Category **Classic**; Wizard **Multi-View** (combobox value `MultiView`). Captured in `t3-01-wizard-selection-classic-multiview-before-ok.png` before OK.
- Only this one wizard was opened. No other Category or Wizard was selected.

### Page 1 (loaded; no load error; no ComponentFlags message)

- Name entered by **one plain `browser_type` (no `slowly`)**; no Enter; no dropdown opened; no suggestion picked. Combobox reads `FX_HelloWorld01`.
- Data Source: visible trigger opened once; one `FX_HelloWorld01` entry chosen once (the list shows exactly one such entry). Combobox reads `FX_HelloWorld01`.
- Defaults, not changed: Form Type `MultiView` (read-only), Form Layout `GridLeft`, Device Type `Default`. Query Form and Comments empty. No Save Template control on page 1.
- Scope bar: `User / anton.ramos@3mworks.com.ph`. Captured in `t3-03-multiview-page1-name-and-data-source-before-next.png`.

### Next (once): page 2 loaded, no alert

- Next advanced to page 2 with **no** "Value is required for Name" alert. The plain-fill Name entry was accepted in this session. This is the step that failed with key-event entry in EXP-041-R2.
- Page 2 "Properties — Primary Collection": the right-hand list contains `FX_Code` and `FX_Label`. The left list offers `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, the UDF fields and `UpdatedBy`. Nothing was changed on this page.
- **No Save Template control on page 2.** Finish is disabled. Next is still enabled, so at least one further page exists. Captured in `t3-04-multiview-page2-after-next-properties-primary-collection.png`.
- The brief forbids advancing past this page, so the further page(s) were **not** inspected.

### Deviations and judgment calls (T3)

- **None against the brief.** One point to note: the brief's Save Template step (if present, uncheck it) could not be executed, because no Save Template control was on the pages reached. It is not "unchecked"; it is **unobserved**.
- Wizard left open on page 2. Cancel would discard the entered Name and Data Source, and the boundary forbids discarding unsaved work, so the wizard was left open as the stable inspection state.

### Acceptance checks (T3)

| AC | T3 status | Basis |
|---|---|---|
| AC-1 | PASS-LIMITED (carried, re-confirmed at the T3 gate: DEM title, User scope, clean Designer) | `t1-01`, `t1-06`, `t1-08`, and the T3 fresh snapshot |
| AC-2 | PASS for the visible inventory, with the no-scope-column limitation (carried from T1 in the same session; not repeated) | T1 `t1-02`–`t1-05` and the snapshot files named in T2 |
| **AC-3** | **PASS.** Route, Category and Wizard identified by rendered labels and captured before OK (`t3-01`). The wizard loaded with no load error. Page 1 offers `FX_HelloWorld01` as Data Source and it was selected. Page 2 offers the IDO's properties (`FX_Code`, `FX_Label`) as the primary collection. One wizard attempted. | `t3-01`, `t3-02`, `t3-03`, `t3-04` |
| AC-4 | **PARTIAL.** Verified before the wizard's final page: Form Name `FX_HelloWorld01` (`t3-03`); exact Data Source `FX_HelloWorld01` (`t3-03`); User scope (status bar, `t3-03`); page-1 defaults (`MultiView`, `GridLeft`, `Default`, empty Query Form and Comments). **Unresolved:** Save Template state (not reached); the final page's content and any generated-object implications; the Finish confirmation. | `t3-02`–`t3-04` |
| AC-5 to AC-9 | Not evaluated in T3 (no Finish, no Form, no Save, no close or reopen, no runtime open). | — |

### Operation counts (T3)

| Operation | Count |
|---|---|
| Designer New | 1 |
| Category list opened / Classic selected | 1 / 1 |
| Wizard list opened / Multi-View selected | 1 / 1 |
| Form Wizard Selection OK | **1** |
| Name entries (`browser_type`, no `slowly`) | **1** (plain fill; no Enter; no dropdown) |
| Data Source trigger opened / option chosen | 1 / 1 |
| Next | **1** (page 1 → page 2, no alert) |
| Alert dialogs | 0 |
| Ctrl+A | 0 |
| Page-2 transfer-button clicks | 0 |
| Finish / Save / Form created / Save Template uncheck | **0 / 0 / 0 / 0** (Save Template not present on the pages reached) |
| Cancel (wizard) | 0 |
| JavaScript / evaluate / run-code | 0 |
| Recovery snapshots / corrected inspections | 0 / 0 |
| Screenshots (worker-authored) | 4: `t3-01`–`t3-04` |

### Evidence (T3)

- `evidence/EXP-041-R3/t3-01-wizard-selection-classic-multiview-before-ok.png`: Form Wizard Selection, New Form, Category `Classic`, Wizard `MultiView`, before OK. Proves the selection. Does not prove the wizard loads (see `t3-02`).
- `evidence/EXP-041-R3/t3-02-multiview-page1-initial-defaults.png`: page 1 loaded; Name empty; defaults as recorded. Does not show any entry.
- `evidence/EXP-041-R3/t3-03-multiview-page1-name-and-data-source-before-next.png`: Name `FX_HelloWorld01`, Data Source `FX_HelloWorld01`, Form Type `MultiView`, Form Layout `GridLeft`, Device Type `Default`, Query Form and Comments empty, User scope in the status bar. Proves the page-1 values as displayed. Does not prove that Name is committed by the wizard model (the Next advance is the evidence for that).
- `evidence/EXP-041-R3/t3-04-multiview-page2-after-next-properties-primary-collection.png`: page 2; right list `FX_Code`, `FX_Label`; left list of system and UDF properties; Finish disabled; Next enabled. Does not show the final page, Save Template, or any generated object.
- `evidence/EXP-041-R3/t3-wizard-preflight-inventory.md`: the page-by-page inventory (worker-authored).

### Reading chronology (T3)

Recorded in the section "T3 — Reading chronology and reference reconciliation" above. The EXP-040 record was read in full in T3 (lines 1–1256).

### Repository changes (T3)

- Written: `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (operator dispositions; T3 reading chronology; this T3 section).
- Written: `evidence/EXP-041-R3/t3-01` to `t3-04` (PNG); `evidence/EXP-041-R3/t3-wizard-preflight-inventory.md`.
- Not written: EXP-036, EXP-039, EXP-040, EXP-041, EXP-041-R2, the recipe, AGENTS.md, memory, `tools/`, docs.

### Browser state at end of T3

- Designer tab selected. Form Wizard - MultiView open on **page 2** (in-page; left open). Name `FX_HelloWorld01` and Data Source `FX_HelloWorld01` were entered on page 1 and not discarded. Finish disabled. No alert. No Form tab. Save disabled. Scope `User / anton.ramos@3mworks.com.ph`.
- Web Client tab not touched in T3.

### Open questions (T3)

1. **Save Template** (page-2 or later page): unobserved. The next wizard page must be inspected, and Save Template unchecked (visible label click) if present, in the next authorized task.
2. **Final page and generated-object implications** (AC-4): unobserved. The next task must inventory them before any Finish.
3. **Finish authorization** still requires the operator's decision after the final page is observed.
4. The Name acceptance observed here (plain fill accepted by Next) comes from one run. It is recorded as observed, not as a verified procedure.
5. The wizard is open on page 2 with Name and Data Source entered. The next task should resume it from a fresh snapshot, or the operator may direct a Cancel (which would discard these entries).

---

## T4 — Multi-View pages 2 to final (two Next clicks; Save Template unchecked; no Finish)

Task: T4, cycle 4, run R-20261010-154641-QsiV, worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `c693dcb2-4b10-4235-9385-7aa34c1d1ef4`.
Full inventory: `evidence/EXP-041-R3/t4-wizard-pages-2-to-final-inventory.md`.

### Gate

Fresh Designer snapshot: the same Form Wizard - MultiView still open (page 2, Properties — Primary Collection, FX_Code and FX_Label included); User scope; Save disabled; no Form tab; no alert. The wizard was not reopened and no earlier selection was repeated.

### Pages reached

| Step | Page title / heading | Key content | Navigation |
|---|---|---|---|
| Initial (T4 start) | "Properties — Primary Collection" (page 2) | Included: `FX_Code`, `FX_Label` | Back and Next enabled; Finish disabled |
| Next 1 | "Specify the order and attributes…" (page 3) | Rows `FX_Label` (row 1) and `FX_Code` (row 2), Include checked; Caption, Containment, Component Class blank; Form Pages list empty | Back and Next enabled; Finish disabled |
| Next 2 | Final page: "Click the Finish button to build a multiview form named FX_HelloWorld01 with the data source FX_HelloWorld01." | One checkbox **Save Template** (checked on arrival) | Back enabled; **Next disabled**; **Finish enabled** |

### Save Template

Checked on the final page. Unchecked by **one** visible-label click (`Save Template` text, ref `e496`, verified in a fresh find). Verified unchecked in the accessibility state and in `t4-04`.

### Counts and last page

- **Next clicks: 2.** Last page reached: the **final page** (Next disabled; Finish enabled). Stopped there; Finish not clicked.
- Save Template label clicks: 1. Alerts: 0. Finish: **0**. Designer Save: **0**. Form or application object created: **0**.
- Page-3 property changes, Form Pages additions, reorder clicks and transfer-button clicks: **0**.

### Acceptance (T4 scope)

- **AC-3:** carried from T3 (pass). T4 did not open another wizard and did not attempt a fallback.
- **AC-4 (partial, with Save Template resolved):**
  - Form Name `FX_HelloWorld01` and Data Source `FX_HelloWorld01` on page 1 and on the final page text: observed.
  - User scope: observed on every page.
  - Save Template: **unchecked** (`t4-04`): observed.
  - Page-1 defaults: observed, not changed.
  - **Unresolved before Finish:**
    1. Whether Finish creates any SQL table, IDO or project. The final page text names only the Form and its data source; it does not say a table or IDO will be created. EXP-040's Data Maintenance wizard did state that, so this route's effect is not established.
    2. Caption and Component Class are blank on page 3. Next did not flag them, but acceptance at Finish is unknown.
    3. The row star markers on page 3 are unexplained.
    4. Finish's confirmation or Create Form prompt (EXP-040 T9 precedent) is not yet observed.
    5. The reversed row order on page 3 (`FX_Label` before `FX_Code`) is recorded, not explained.
- **AC-5 to AC-9:** not evaluated (no Finish; no Form exists).

### Evidence (T4)

- `t4-01-initial-state-page2-properties-primary-collection.png`: page 2 before T4's Next (Finish disabled).
- `t4-02-page3-after-next-1-property-attributes.png`: page 3 rows and blank Caption/Component Class; Form Pages empty.
- `t4-03-final-page-save-template-checked-before-uncheck.png`: final page; Save Template checked; Finish enabled.
- `t4-04-final-page-save-template-after-label-click-unchecked.png`: Save Template unchecked after one label click.
- `t4-wizard-pages-2-to-final-inventory.md`: the page-by-page inventory (worker-authored).

### Repository changes (T4)

- Written: `evidence/EXP-041-R3/t4-01` to `t4-04` (PNG); `evidence/EXP-041-R3/t4-wizard-pages-2-to-final-inventory.md`.
- Written: this record (T4 section only).
- Not written: EXP-036, EXP-039, EXP-040, EXP-041, EXP-041-R2, the recipe, AGENTS.md, memory, `tools/`, docs.

### Browser state at end of T4

- Designer tab selected. Form Wizard - MultiView open on the **final page** (in-page dialog, left open; Cancel would discard the entries). Save Template unchecked. **Finish enabled and not clicked.** Next disabled.
- No Form tab; Designer Save disabled; no alert; no browser-native dialog; scope `User / anton.ramos@3mworks.com.ph`.
- Web Client tab not touched.
- **The wizard has not completed, and no Form exists.**

### Open questions (T4)

1. Operator decision: whether Finish may be authorized on this final page, given that its effect (table, IDO or Form only) is not stated and the page-3 Caption and Component Class are blank.
2. Star markers and row order on page 3 (unexplained; recorded only).
3. Finish's confirmation or Create Form prompt, if any, must be observed, not assumed, in the Finish task. Any proposal of a table, IDO, project or script must stop the run.

---

## T5 — Specialist consultation record and documentation status (read before any T5 browser action)

Task: T5, cycle 6, run R-20261010-154641-QsiV, worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `acc6e547-cd96-4189-8cfd-4f88293e6069`.

### Specialist consultation

- The T5 instruction states that a specialist identified two Infor documents. **The consultation itself (its question, its answer, and its wording) is not present in this worker session.** I cannot confirm what the specialist said, so no specialist claim is recorded here as fact.
- Documented-versus-inferred distinction, as the record can support it:
  - **Documented (by the operator's instruction, not verified by the worker):** the two URLs below are named as the sources.
  - **Unverified:** their content. The worker has no URL-reading tool in this session. Both pages were **not read**; no claim of verification is made.
- Sources named by the operator (not read):
  1. Mongoose 2026.10 Classic MultiView guidance: `https://docs.infor.com/mg/2026.10/en-us/mongooseolh/mgwsolh_mg/byx1502139639463.html`. **Status: not read; not verified.**
  2. Web Designer form-creation guidance: `https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/xul1496288205534.html`. **Status: not read; not verified.**
- Local documentation that **was** read and is in the repository: `docs/mongoose/transcripts/hello-world-pt1.md` (unverified transcript) and `recipes/forms/create-basic-form.md` (verified for Build-from-Scratch only, not for Classic Multi-View).

### Stars and row order

- The star markers on the page-3 property rows (`FX_Label`, `FX_Code`) **remain unexplained**. No page text, record or read-only inspection in this session establishes what they mean.

### Classification

- T5's result will be classified **observed**, not replay_verified. Nothing here supports a replay-verified classification.

### T5 — Pre-Finish gate, single Finish, and read-only Form inspection

Full evidence: `evidence/EXP-041-R3/t5-finish-result-and-form-readonly-inspection.md`.

**Pre-Finish gate (fresh snapshot, all met):** the same Multi-View wizard on its final page; page text "build a multiview form named FX_HelloWorld01 with the data source FX_HelloWorld01"; User scope in the status bar; **Save Template unchecked**; Finish enabled; Next disabled; no alert; Designer Save disabled. Screenshot `t5-01`.

**Finish: exactly one click** (ref e302, label "Finish"). No retry.
- Immediate result: alertdialog "Process Completed Successfully", one button **OK**. No Create Form, table, IDO, project or script prompt appeared. Screenshot `t5-02`.
- OK clicked once after a fresh snapshot confirmed the label (ref e311). This is the Form-only success acknowledgment the brief permits to dismiss.

**Resulting Designer state:** the Designer opened the Form (`?MGForm=FX_HelloWorld01`). Form tab `FX_HelloWorld01`. Properties: Name `FX_HelloWorld01`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. **Save disabled, Undo disabled: the Form is clean. No ordinary Designer Save was required, and none was performed.** Screenshot `t5-03`.

**Form-level data source (Collections tab):** `Primary Collection: FX_HelloWorld01`.

**Generated components (read-only, Components tab expanded; nothing edited):**

| Level | Name | Type | Data Source | Pane | Container | Tab |
|---|---|---|---|---|---|---|
| Root | Pane (00) | (pane) | — | — | — | — |
| child | FormCollectionGrid | Grid | objects | 0 | (blank) | 0 |
| grandchild | FX_LabelGridCol | GridColumn | object.FX_Label | 0 | FormCollectionGrid | 1 |
| grandchild | FX_CodeGridCol | GridColumn | object.FX_Code | 0 | FormCollectionGrid | 2 |
| Root | Pane (01) | (pane) | — | — | — | — |
| child | FX_LabelStatic | Static | (blank) | 1 | (blank) | 3 |
| child | FX_LabelEdit | Edit | object.FX_Label | 1 | (blank) | 4 |
| child | FX_CodeStatic | Static | (blank) | 1 | (blank) | 5 |
| child | FX_CodeEdit | Edit | object.FX_Code | 1 | (blank) | 6 |

- **FX_Code** and **FX_Label** are each bound (`object.FX_Code`, `object.FX_Label`) through a GridColumn and an Edit. Each has a Static label with no data source.
- **Additional wizard-generated elements:** `FormCollectionGrid` (Grid, data source `objects`), and the panes. Not modified.
- Not established: component captions (Static text), Component Class, Enabled/Visible/Required When values, and whether the Edit that carries the required marker on the canvas is `FX_CodeEdit` (an inference from position and FX_Code's key role, not read directly).
- **The star markers on the page-3 property rows (T4) remain unexplained.**

**Operation counts (T5):** Finish 1; Finish retry 0; alert OK 1; Designer Save 0; Form-tab close 0; reopen 0; runtime open 0; Select Form 0; other wizard actions 0; prompt affirmations 0; components or properties modified 0; view-only actions (Details expand, Components tab, tree Expand) 3; recovery snapshots 1 of 1 (after one stale ref, `e563`); corrected inspections 0; PNG screenshots 4 (`t5-01`–`t5-04`); JavaScript 0.

**AC status after T5:**
- **AC-4: met** for the items named in the brief before Finish: Form Name `FX_HelloWorld01` (`t3-03`, `t5-01`); exact data source `FX_HelloWorld01` (`t3-03`, `t5-01`); User scope (status bar, `t5-01`); Save Template unchecked (`t4-04`, `t5-01`); page-1 defaults `MultiView` / `GridLeft` / `Default` with Query Form and Comments empty (`t3-02`). **Still not established:** whether Finish creates any table, IDO or project beyond the Form (the completion text does not say; the alert offered no further object). Blank Caption and Component Class on page 3 were not flagged, and their acceptance is now shown by the successful Finish.
- **AC-5: partially met.** Exactly one Finish performed (`t5-02`) with the observed success text. The Designer shows the Form `FX_HelloWorld01` in User scope and clean (`t5-03`), and no ordinary Save was needed. **Not verified:** that this is the only new FX_HelloWorld01 Form in the inventory. That needs a Select Form check, which T5 did not perform by instruction.
- **AC-6: observed for the Designer baseline.** The data-source binding and the FX_Code and FX_Label components are listed (above). Additional generated elements are inventoried. No modification was made.
- **AC-7, AC-8: not evaluated** (no Designer close or reopen; no runtime open).
- **AC-1, AC-2, AC-3, AC-9:** carried from T1 to T4 unchanged. AC-9 is re-confirmed in the T1 section and is not updated by T5.

**Classification:** observed (single run). **Not replay_verified.** Nothing in T5 supports a replay-verified classification.

**Browser state at end of T5:** Designer tab selected; Form `FX_HelloWorld01` open and clean (Save disabled); Details panel expanded on the Components tab (a layout state only); no wizard, alert, Select Form or browser-native dialog open.

**Open questions (T5):**
1. Confirm via a separately authorized Select Form check (positive control plus exact and substring queries) that exactly one FX_HelloWorld01 Form now exists in the visible inventory (AC-5).
2. Designer close and reopen (AC-7) and the runtime open (AC-8) are the next steps, pending authorization.
3. The star markers on page 3 are unexplained.
4. The specialist consultation is not present in this worker session; its two Infor URLs are recorded as unread and unverified.

---

## T6 — Specialist consultation (as reported by the operator) and read-only post-creation baseline

Task: T6, cycle 7, run R-20261010-154641-QsiV, worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `ce77385f-bc24-433f-a620-58203b84fe10`. Read-only; no Designer close or reopen, no runtime open, no Save, no Finish.

### Specialist consultation record (reported by the operator; not verified by the worker)

- Consultation reference: `R-20261010-154641-QsiV-C1`.
- **Reported verdict:** supports one Finish of the Classic Multi-View wizard.
- **Reported documentation claims (cited 2026.10 guidance):**
  1. Classic Multi-View builds and opens a Form using an existing IDO.
  2. Table and IDO creation belongs to a different wizard category (the New Data / Form Builder Data Maintenance routes, consistent with EXP-040).
  3. Save Template can create an additional template artifact; the brief required it unchecked, and it was unchecked before Finish.
  4. Blank Caption, Containment, Component Class and Form Pages settings are optional.
  5. The meaning of the page-3 star markers is **not verified** by the specialist either.
- **Source-page status (carried from T5):** the worker could **not** retrieve the two Infor documentation pages in this session. The specialist's claims are therefore **documented-by-report only**, not independently verified by the worker.

### Documented-versus-verified distinction

| Claim | Status |
|---|---|
| Classic Multi-View builds and opens a Form on an existing IDO | Specialist-reported documentation. Partly observed: the Multi-View page 1 offered the IDO as Data Source, the Form was created by one Finish, and the Designer opened it (T3, T5). |
| Table and IDO creation belongs to a different category | Specialist-reported. Consistent with the rendered category descriptions (T1) and EXP-040 observations. Not verified against the Infor page. |
| Save Template can create a template artifact; unchecked before Finish | Specialist-reported. Save Template was unchecked before Finish (T4, T5). Whether a template artifact was or was not created is **not checked** (no inventory of templates was run). |
| Blank Caption, Containment, Component Class, Form Pages optional | Specialist-reported. Not verified; the wizard completed with these blank, which is consistent with optional but not proof. |
| Star-marker meaning | **Unverified** (specialist and worker). Remains unexplained. |

### Pre-close baseline — read-only

Starts from the T5 saved snapshots and the fresh snapshot taken at T6 start (see evidence file).

Full evidence: `evidence/EXP-041-R3/t6-prefinal-baseline-and-select-form-inventory.md`. Screenshots: `t6-01` (Designer, pre-baseline), `t6-02` (Select Form, settled result).

**Pre-close baseline (read-only; the Designer Form is still open and clean):**
- Name `FX_HelloWorld01`; Version `User version for user anton.ramos@3mworks.com.ph`; ScopeType User; ScopeName anton.ramos@3mworks.com.ph.
- Device Type `Default`; **Form Type `Normal` (as rendered; not replaced by the wizard label MultiView)**; Is Master `True`.
- Primary Collection `FX_HelloWorld01` (Details > Collections).
- Components (unchanged, read from T5 snapshots): `Pane (00)` > `FormCollectionGrid` (Grid, `objects`) > `FX_LabelGridCol` (GridColumn, `object.FX_Label`) and `FX_CodeGridCol` (GridColumn, `object.FX_Code`); `Pane (01)` > `FX_LabelStatic` (Static), `FX_LabelEdit` (Edit, `object.FX_Label`), `FX_CodeStatic` (Static), `FX_CodeEdit` (Edit, `object.FX_Code`).
- Not read: captions, Component Class, Enabled/Visible/Required When. The canvas's required-marked box is inferred to be `FX_CodeEdit`.

**Post-creation Select Form check: STOPPED on a discrepancy.**
- Settings: Filter By Name; Case Sensitive and Starts With unchecked; Web Client Open toolbar; the textbox was cleared with Control+a and `FX_HelloWorld01` was typed with key events.
- Result: the grid had **zero rows** after a 2-second settle and again after about 5 seconds. The brief requires **exactly one** row for the exact target name.
- **No positive control was run in T6.** The T1 positive control (SqlTables) ran earlier in this session, before the Form existed. Under the rule, an empty grid is not accepted as absence in this check.
- Possible causes not tested: the Select Form list store was loaded before the Designer created the Form and was not refreshed; the new Form is not in the dialog's inventory; or a session-level issue. **None is confirmed.** The Designer shows the Form open, so the Form exists in the Designer's view.
- Dialog closed by **Cancel** (verified label; OK not used). No row was activated. Web Client unchanged (Revision Num 2; Save disabled).
- Designer end state: FX_HelloWorld01 open, clean (Save and Undo disabled), User scope, no dialog.

**Acceptance (T6):**
- **AC-5: NOT CONFIRMED.** The Designer shows FX_HelloWorld01 open, User-scoped and clean after one Finish (T5). The Select Form check did not show exactly one row. AC-5's "exactly one new Form" is therefore unverified.
- **AC-6: observed** for the Designer baseline above (names, types, bindings, parent structure). No modification.
- AC-4, AC-7, AC-8: unchanged. AC-9: the T1 re-confirmation stands; T6 adds a post-creation zero-row result that must be reconciled before the EXP-040 follow-up is closed.

**Operation counts (T6):** Select Form opened 1; filter entries 1 (`FX_HelloWorld01`, key events); Ctrl+A 1; settle waits 2; Select Form screenshots 1; Select Form Cancel 1; OK 0; row activation 0; Designer close/reopen 0; Designer Save 0; Finish 0; runtime open 0; component or property edits 0; recovery snapshots 0; corrected inspections 0; JavaScript 0.

**Operator decision needed before any close or reopen:** authorize one read-only Select Form positive control (for example SqlTables) in a fresh dialog, followed by the same exact-name query. If the control passes and the target still returns zero rows, the inventory does not show the Form and that must be reported before AC-7. If the control fails, the filter is ineffective for the current dialog and the check must be repeated.

---

## T7 — One controlled post-creation Select Form verification (read-only; two queries)

Full evidence: `evidence/EXP-041-R3/t7-post-creation-select-form-verification.md`. Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `87393280-c160-48dd-aca1-a2d2468c54d0`.

**Pre-check.** T6 baseline reviewed (not re-inspected). Designer: FX_HelloWorld01 open, User scope, Save disabled.

**Dialog settings at open (fresh snapshot):** Select Form from the Web Client Open control. Filter By **Name**; **Case Sensitive unchecked**; **Starts With unchecked**. The filter text was the T6 value `FX_HelloWorld01`, and the grid **already showed one row** `FX_HelloWorld01`/`FX_HelloWorld01` at open, before any T7 query (leftover state; not counted as a result). Screenshot `t7-01`.

**Query 1 — positive control `SqlTables` (PASSED):** click, Control+a, `browser_type` with `slowly: true`, 2-second settle. Grid: `Sql Tables`/`SqlTables` and `Sql Tables Constraint`/`SqlTablesPrimaryKey` (**two rows**). Screenshot `t7-02`.

**Query 2 — target `FX_HelloWorld01` (one row):** same method, 2-second settle. Grid: **one row**, `FX_HelloWorld01`/`FX_HelloWorld01`. Settings unchanged (Filter By Name; Case Sensitive and Starts With unchecked). Screenshot `t7-03`. No further query.

**Close:** fresh snapshot confirmed Cancel (`f1e891`) and OK (`f1e889`); Cancel clicked once. No row selected or activated. The Form was not opened from the results.

**End state:** Designer tab selected; FX_HelloWorld01 open; Save disabled; User scope `anton.ramos@3mworks.com.ph`; no dialog. Web Client IDOs surface unchanged (FX_HelloWorld01 Revision 2; Save disabled).

**Conflict with T6 (recorded, not resolved).** T6 returned **zero** rows for the same exact query, with the same settings, in the same session. T7 returns **one** row. The T7 leftover row at dialog open suggests the list had been refreshed between T6 and T7, but no observation establishes the cause. The T6 zero-row is therefore an **unreproduced visibility discrepancy**: not proof of absence, and not proof that the T6 lookup was wrong.

**Interpretation for AC-5.** The visible-inventory check now supports **one** FX_HelloWorld01 row for this single read (Case Sensitive unchecked; no case-variant row visible). That supports the uniqueness claim for this read. **It is not a stable confirmation:** the T6 conflict is unexplained, and only one read was made after it. AC-5's uniqueness is therefore **inconclusive**, not confirmed. Not established: the scope of the row (the dialog shows no scope column); absence or presence in Site Default, Group or other users' scopes; the store total.

**Acceptance (T7):**
- **AC-2 (post-creation check):** positive control passed; exact target returned one row. Visible-inventory only. The pre-creation T1 gate (zero rows) is unchanged and stands for its own time point.
- **AC-5:** inconclusive (see above). Designer state (T5) shows one Finish, a completion alert, and the Form open and clean.
- **AC-7:** **pending** (no Designer close or reopen performed).
- **AC-8:** **pending** (no runtime open performed).
- AC-1, AC-3, AC-4, AC-6, AC-9: unchanged.

**AC-9 cross-reference (dated 2026-10-10):** the pre-creation AC-2 gate (T1) returned zero rows for `FX_HelloWorld01` and `HelloWorld`, consistent with the EXP-040 carried-forward question and the EXP-041 T1 result. The post-creation checks (T6: zero rows; T7: one row) show the Form is visible in the inventory after creation, with the T6 discrepancy open. The EXP-040 follow-up should therefore record the post-creation visibility, not the pre-creation absence alone. EXP-040 and EXP-041 were not edited.

**Operation counts (T7):** Select Form opened 1; queries 2 (positive control; target); filter entries 2 (`slowly: true`); Control+a 2; filter textbox clicks 2; settle waits 2 (2 s each); dialog-scoped snapshots 4 plus 1 post-Cancel; Select Form screenshots 3; OK 0; row activation 0; Cancel 1; Designer close/reopen 0; Designer Save 0; Finish 0; runtime open 0; component or property edits 0; stale-ref errors 0; recovery snapshots 0; corrected inspections 0; JavaScript 0; authentication 0.

**Repository changes (T7):** this record (T7 section only); `evidence/EXP-041-R3/t7-01`, `t7-02`, `t7-03` (PNG); `evidence/EXP-041-R3/t7-post-creation-select-form-verification.md`.

**T8 note (2026-10-10):** T7 returned exactly one FX_HelloWorld01 row after a passing SqlTables positive control. The earlier T6 zero-row observation remains **unexplained**. No caching or timing cause is claimed as proven.

**Browser end state (T7):** the Designer tab is the selected tab. FX_HelloWorld01 is open and clean (Save disabled), User scope, with no dialog. The Web Client tab was used for the Select Form check and has no dialog open.

**Open questions (T7):**
1. Explain or reproduce the T6 zero-row result against the T7 one-row result. A repeat must be authorized by the operator; the brief forbids further retries in T7.
2. Scope of the FX_HelloWorld01 row (not displayed by the dialog).
3. Designer close and reopen (AC-7) and the runtime open (AC-8) remain pending and are not authorized in T7.

---

## T8 — AC-7 ordinary Designer close and reopen (no runtime open, no Save, no inventory search)

Full evidence: `evidence/EXP-041-R3/t8-ac7-close-reopen-persistence-verification.md`. Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `5666785e-6afd-47fb-a515-687d130c19fd`.

**Context.** T7 returned exactly one row after a passing SqlTables control. T6's zero-row result remains unexplained; no caching or timing cause is claimed.

**Pre-close (fresh snapshot, read-only).** Form tab FX_HelloWorld01 open; URL `?MGForm=FX_HelloWorld01`; Name FX_HelloWorld01; Version `User version for user anton.ramos@3mworks.com.ph`; ScopeType User; ScopeName anton.ramos@3mworks.com.ph; Primary Collection `FX_HelloWorld01`; **Form Type Normal (as rendered)**; Device Type Default; Is Master True; Save and Undo disabled. Component rows (pre-close snapshot): `Pane (00)` > `FormCollectionGrid` (Grid, objects, 0, 0) > `FX_LabelGridCol` (GridColumn, object.FX_Label, 0, FormCollectionGrid, 1) and `FX_CodeGridCol` (GridColumn, object.FX_Code, 0, FormCollectionGrid, 2); `Pane (01)` > `FX_LabelStatic` (Static, 1, 3), `FX_LabelEdit` (Edit, object.FX_Label, 1, 4), `FX_CodeStatic` (Static, 1, 5), `FX_CodeEdit` (Edit, object.FX_Code, 1, 6). Screenshot `t8-01`.

**Close (one).** Fresh find confirmed the label `closable FX_HelloWorld01`; clicked once. Result: no Form tab; URL without `MGForm`; no dialog; Save disabled. Screenshot `t8-02` (viewed): no Form tab, blank canvas, Save and Undo greyed, User scope, no dialog. No prompt appeared.

**Reopen (one).** Designer Form menu opened (label "Form" verified). Recent-form item `FX_HelloWorld01` (label verified) clicked once. `Definition` and `Sign Out` not used. Result: URL `?MGForm=FX_HelloWorld01`; Form tab FX_HelloWorld01; Name, Version, Device Type, Form Type Normal, Is Master identical to pre-close; Save and Undo disabled; User scope. Primary Collection `FX_HelloWorld01` (Collections tab, after expanding the Details panel). Component rows after reopen (Components tree expanded with view control): identical in name, type, data source, pane, container and tab to the pre-close rows listed above.

**AC-7 comparison.** Name, ScopeType, ScopeName, data source, Form Type, Device Type, Is Master, Save/Undo state, and all eight component rows: **equal** (snapshot-level). Component captions, Component Class and Enabled/Visible/Required When values were **not** read before or after, so their equality is **not** claimed. Lower component rows (`FX_LabelEdit`, `FX_CodeStatic`, `FX_CodeEdit`) are not visible in `t8-03`; they are confirmed from the snapshot only.

**AC-7 status: met at the rendered-row and property level for items read.** Scope: same-session ordinary close and reopen only. Not a database, cache or cross-session test.

**AC-8: not performed** (runtime opening prohibited in T8). **AC-5 uniqueness:** still inconclusive (T6/T7 conflict unexplained).

**Operation counts (T8).** Form-tab close 1; Form-tab reopen 1; Form menu opened 1; Designer Save 0; runtime open 0; Select Form searches 0; Finish 0; view-only actions 4 (Details expand 1, Collections tab 1, Components tab 1, tree Expand 1); component, property, caption, layout or data edits 0; prompts affirmed 0; recovery snapshots 0; corrected inspections 0; PNG screenshots 3 (`t8-01`–`t8-03`); JavaScript 0; authentication 0.

**Browser end state (T8).** Designer tab selected. FX_HelloWorld01 is **open and clean** (Save and Undo disabled), User scope `anton.ramos@3mworks.com.ph`, with the Details panel expanded on the Components tab (a layout state). No dialog, alert or unsaved-change prompt. The Web Client tab was not used in T8.

**Repository changes (T8).** This record (status line updated; T8 section appended). `evidence/EXP-041-R3/t8-01`, `t8-02`, `t8-03` (PNG); `evidence/EXP-041-R3/t8-ac7-close-reopen-persistence-verification.md`. No EXP-040 or EXP-041 edit; no other file.

**AC-7 status as carried into T9 (2026-10-10).** Passed for the explicitly compared items: Name, Version, ScopeType, ScopeName, Primary Collection (data source), Form Type, Device Type, Is Master, Save and Undo state, and the eight component rows (name, type, data source, pane, container, tab). Limitations kept: captions, Component Class and Enabled/Visible/Required When values were not read; cache behaviour and server-side persistence were not tested; the T6 zero-row Select Form result remains unexplained and no cause is claimed.

**Open questions (T8).**
1. AC-5 uniqueness remains inconclusive: explain or reproduce the T6 zero-row result against the T7 one-row result (an operator-authorized check).
2. AC-8 runtime open is pending and not authorized in T8.
3. Captions and component Class/When properties were not read; if AC-7 requires them, that needs a separately authorized read-only inspection.

---

## T9 — AC-8 Web Client runtime opening (one open; no data entry)

Full evidence: `evidence/EXP-041-R3/t9-ac8-web-client-runtime-open-observation.md`. Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `1656d6b0-302d-4cd4-acb8-9da86be341f9`.

**Carried status.** AC-7 passed for the compared items (Name, Version, ScopeType, ScopeName, Primary Collection, Form Type Normal, Device Type, Is Master, Save/Undo state, eight component rows). Limits kept: captions and Component Class / When properties not read; cache and server persistence not tested; the T6 zero-row result remains unexplained, and no cause is claimed.

**Designer gate.** Fresh finds: FX_HelloWorld01 open and closable; User scope; Save disabled; no dialog.

**Lookup.** Opened Select Form from the Web Client Open control (`f1e25`, label verified). Dialog at open showed the T7 carry-over row. The target was re-entered once (click, Control+a, `FX_HelloWorld01` with `slowly: true`, 2 s settle). Settings: Filter By Name; Case Sensitive and Starts With unchecked. Result: one row, `FX_HelloWorld01` / `FX_HelloWorld01`. No positive-control or other query was run in T9. Screenshots `t9-01` (carry-over at open), `t9-02` (settled, one row).

**Open (once).** The row's Name cell was clicked to make it active. OK (`f1e889`, label verified in a fresh snapshot) clicked once. A runtime tab `FX_HelloWorld01` opened and is selected; the URL carries `favoriteContext=FX_HelloWorld01`.

**Runtime state (observed).** Tab heading and panel `FX_HelloWorld01`. Grid: one row with a blue new-row star and row number 1; grid column headers render blank. Detail: two text inputs; the upper one has focus (not typed into) and shows only a `:` label; the lower shows a red required asterisk and a `:` label. No messages or errors. No explicit mode text. Save disabled. Toolbar New and Delete enabled. No dialog. Screenshot `t9-03` (viewed).

**AC-8 assessment (PARTIAL).**
- Opened once through a supported Select Form path; exact identity visible in the tab heading and URL.
- **Add mode:** inferred from the new-row star, the empty inputs and Save disabled; **no explicit mode label** was rendered, so add mode is not directly confirmed.
- **FX_Code and FX_Label:** two inputs are rendered, but **neither carries a field name** in the runtime. Mapping the required input to FX_Code and the other to FX_Label is an inference from the T8 IDO properties and EXP-040, not an observed rendering.
- **Messages:** none rendered.
- AC-8 is not reported as passed, because the runtime evidence required by the criterion (FX_Code and FX_Label fields identifiable) was not captured.

**Operation counts (T9).** Web Client Open 1; Select Form textbox click 1; Control+a 1; filter entry 1 (`slowly: true`); settle wait 1 (2 s); row Name-cell click 1; Select Form OK 1; runtime opens 1; typing into runtime fields 0; record create/save/New/Delete/navigation 0; Designer close/reopen/Save 0; Finish 0; positive-control queries 0; Designer finds 4 (read-only); Designer tab selects 1; recovery snapshots 0; corrected inspections 0; screenshots 3 PNG (`t9-01`–`t9-03`); JavaScript 0; authentication 0.

**Repository changes (T9).** This record (status line, T9 section, AC-7 carry-forward note). `evidence/EXP-041-R3/t9-01`, `t9-02`, `t9-03` (PNG); `evidence/EXP-041-R3/t9-ac8-web-client-runtime-open-observation.md`. No EXP-040 or EXP-041 edit; no other file.

**Browser end state (T9).** Web Client tab selected, showing the runtime tab `FX_HelloWorld01` (first input focused; not typed into). Save disabled. No dialog, alert or browser-native prompt. The Designer tab was not changed during T9 and holds FX_HelloWorld01 open and clean (Save disabled, User scope), as found at the start of T9.

**Open questions (T9).**
1. Confirm add mode and FX_Code / FX_Label mapping of the two inputs (for example, by an operator-authorized read-only capture of field names or captions). Without that, AC-8 remains partial.
2. The runtime tab is left open with a blank add-mode record. Closing it or discarding the unsaved-empty record requires an operator decision; it was not closed in T9 because the brief forbids further runtime actions.
3. AC-5 uniqueness remains inconclusive (T6 vs T7). AC-8 partial as above.
4. Classification remains observed; not replay_verified.

---

## T10 — Read-only AC-8 recheck and strict verdict

Full evidence: `evidence/EXP-041-R3/t10-ac8-runtime-recheck-and-strict-verdict.md`; screenshot `t10-01-runtime-recheck-FX_HelloWorld01-readonly-no-interaction.png` (viewed). Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `bfd5b5b4-9f5a-4cb8-8f4d-ba30141b0ad4`.

**Evidence sources, kept separate.**
- *Designer (demonstrated, T5 and T8):* FX_CodeEdit (Edit, `object.FX_Code`, Pane 1, tab 6); FX_LabelEdit (Edit, `object.FX_Label`, Pane 1, tab 4); FX_CodeGridCol and FX_LabelGridCol bound to `object.FX_Code` and `object.FX_Label`; Static labels FX_CodeStatic and FX_LabelStatic (no data source).
- *Runtime (rendered, T9 and T10):* one grid row with a blue new-row star; two detail inputs, one with a red required marker; each input shows only a `:` glyph; no messages.
- *Not demonstrated by any runtime evidence:* which input is FX_CodeEdit and which is FX_LabelEdit.

**Fresh runtime snapshot (one) and screenshot (one).** Same runtime tab `FX_HelloWorld01`; no dialog. Grid column headers are empty, with one `*` header. Both detail inputs have **no accessible name**. No text reads "add" or a mode name. New and Delete enabled; Save disabled. The screenshot matches the T9 state.

**Strict AC-8 verdict: NOT PASSED (pending).**
- Present: one supported open through Select Form and OK (T9); exact identity in the tab heading, the panel and the URL; no rows entered or saved; no messages or errors rendered.
- **Missing 1:** rendered FX_Code and FX_Label fields identifiable by name. Not established.
- **Missing 2:** the mapping of each rendered input to FX_Code or FX_Label. Not established. I did not infer it from position, the required marker, or the Designer bindings.
- **Missing 3:** an explicit add-mode indicator. Not established. The new-row star is observed; add mode remains inferred.
- No further runtime evidence can be collected under this brief (no interaction, no second open, recovery allowance exhausted). Any further step needs a separate operator authorization for a read-only method that exposes field names without interacting with data.

**AC-9 remaining work (not started).** The AC-1 to AC-9 evidence matrix; the full operation-count and artifact inventory; the repository-confinement audit; the error and recovery accounting; and the final clean-state statement. The EXP-040 follow-up is for the operator (the post-creation visibility, T6 versus T7, must be recorded there with the pre-creation absence). EXP-040 and EXP-041 were not edited.

**Operation counts (T10).** Fresh full snapshots 1; screenshots 1; tab selects 1; runtime clicks, typing, key presses or record actions 0; runtime opens 0; Designer changes, saves, close or reopen 0; collision or Select Form queries 0; recovery snapshots 0; corrected inspections 0; JavaScript 0.

**Repository changes (T10).** This record (T10 section only). `evidence/EXP-041-R3/t10-01` (PNG); `evidence/EXP-041-R3/t10-ac8-runtime-recheck-and-strict-verdict.md`.

**Browser end state (T10).** Web Client tab selected, showing the runtime tab `FX_HelloWorld01`; no input clicked by T10; no dialog. Designer tab unchanged: FX_HelloWorld01 open and clean (Save disabled), User scope.

**Open questions (T10).**
1. AC-8 needs either an operator-authorized read-only method that exposes the two inputs' field names, or the operator's acceptance of the partial status with the stated mapping gap.
2. Add mode needs an explicit indicator or an accepted inference.
3. AC-5 uniqueness remains inconclusive (T6 zero rows versus T7 one row, unexplained).
4. The runtime tab still holds an unsaved blank add-mode record; closing or discarding it needs an operator decision.

---

## T11 — AC-9 consolidation, strict acceptance matrix, and remaining operator decisions

Task: T11, cycle 12, run R-20261010-154641-QsiV, worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3`, task_message_id `e646ca79-121d-47f6-af07-e178f3bf1d70`. **Documentation and evidence reconciliation only.** No browser tool, no Mongoose interaction, no Save, no reopen, no runtime close, no Finish, no inspection. Only this record and `evidence/EXP-041-R3/` were written. EXP-040, EXP-041 and EXP-041-R2 were not edited.

Detail behind this section: `evidence/EXP-041-R3/t11-ac9-reconciliation-and-artifact-inventory.md` (controller audit reconciliation, full artifact list, repository-confinement audit, tool errors).

### Final strict verdict

**EXP-041-R3 cannot yet be classified accepted under all nine strict checks.** AC-1 to AC-4 pass with the evidence cited (AC-4 with residuals stated). AC-5 is supported but its uniqueness claim is not confirmed. AC-6 and AC-7 pass for the items compared. **AC-8 is NOT PASSED (pending).** Classification: **observed only; not replay_verified.** No procedure is promoted.

### AC-1 to AC-9 evidence matrix

| AC | Status | Directly observed | Evidence (repo-relative) | Limitations |
|---|---|---|---|---|
| **AC-1** Preflight: DEM configuration, session, Site Developer, User scope, EXP-040 IDO baseline, clean state | **PASSED (with limits)** | Designer About: "Connected via data configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT"; "Currently logged in as anton.ramos@3mworks.com.ph, Site Developer". Designer status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. IDOs surface: FX_HelloWorld01 in FX_HelloWorldProject01, Revision 2, FX_Code (key, String 30, Required) and FX_Label (String 100), Check Out enabled, Save disabled. | `t1-01-webclient-initial-state.png`; `t1-06-designer-help-about-site-developer-user-scope.png`; `t1-08-designer-clean-after-route-cancel-user-scope.png`; `t1-gate-select-form-dialog-snapshots.md` | Site Developer is the About dialog's role label; permission grants beyond it untested. Configuration-wide visibility of IDOs and tables untested. Portal 2026.10.01 vs Designer 2026.10.13 version strings unreconciled. |
| **AC-2** Pre-creation Select Form gate: positive control, exact and substring zero rows, same session, scope limitation | **PASSED (visible inventory; no scope column)** | Filter By Name; Case Sensitive and Starts With unchecked. `SqlTables` control: two rows (Sql Tables / SqlTables; Sql Tables Constraint / SqlTablesPrimaryKey). `FX_HelloWorld01` exact: grid empty. `HelloWorld` substring: grid empty. `testblank` lowercase infix control: `FX_TestBlank01` and `FX_TestBlank02`. | `t1-02-positive-control-sqltables-settled.png`; `t1-03-target-FX_HelloWorld01-exact-settled-zero-rows.png`; `t1-04-target-HelloWorld-substring-settled-zero-rows.png`; `t1-05-control-testblank-lowercase-infix-settled.png`; `t1-gate-select-form-dialog-snapshots.md` | No scope column: Site Default, Group and other users' Forms are not shown (operator decision accepts this). No total count. The later post-creation results (AC-5) do not alter this T1 pre-creation result. |
| **AC-3** Route, Category and Wizard captured before selection; wizard loads; existing IDO; one wizard | **PASSED** | Route: Designer New → Form Wizard Selection, New Form. Category **Classic**; Wizard **Multi-View** (description "bound to an IDO collection"; combobox value `MultiView`), captured before OK. Page 1 loaded with no load error and no ComponentFlags message. Data Source list offered FX_HelloWorld01 and it was selected. Page 2 "Properties — Primary Collection" listed FX_Code and FX_Label. Only this wizard was opened. | `t1-07-classic-wizard-list-labels-read-no-selection.png`; `t1-route-category-wizard-inventory.md`; `t3-01-wizard-selection-classic-multiview-before-ok.png`; `t3-02-multiview-page1-initial-defaults.png`; `t3-03-multiview-page1-name-and-data-source-before-next.png`; `t3-04-multiview-page2-after-next-properties-primary-collection.png` | One run. The Name plain fill was accepted by Next without an alert in this run (EXP-041-R2 had rejected key-event entry). |
| **AC-4** Before Finish: Name, exact Data Source, User scope, default settings, Save Template unchecked, no unexplained created-object effect | **PASSED (per operator directive preserved in T11; residuals stated)** | Page 1: Name `FX_HelloWorld01`; Data Source `FX_HelloWorld01`; User scope; Form Type `MultiView` (read-only), Form Layout `GridLeft`, Device Type `Default`; Query Form and Comments empty. Save Template checked on the final page, unchecked by one label click (accessibility and visual). Final page text: "Click the Finish button to build a multiview form named FX_HelloWorld01 with the data source FX_HelloWorld01." | `t3-03-…png`; `t4-03-final-page-save-template-checked-before-uncheck.png`; `t4-04-final-page-save-template-after-label-click-unchecked.png`; `t5-01-pre-finish-final-page-save-template-unchecked-finish-enabled.png`; `t4-wizard-pages-2-to-final-inventory.md` | **Residuals (not resolved):** the final page does not state which objects Finish creates; no pre-Finish preview; no post-Finish inventory of any template, SQL table, IDO or project was performed, so it is not shown that Finish created nothing else (nor that it did); page-3 Caption and Component Class cells are blank and were not flagged by Next; the meaning of two star markers on page 3 is unexplained. |
| **AC-5** One Finish; one new User-scope Form; ordinary Save result or already-clean; visible identity | **SUPPORTED; uniqueness NOT CONFIRMED** | Finish: one click; alert "Process Completed Successfully" with OK; no other prompt. Designer then showed Form tab `FX_HelloWorld01`, Version `User version for user anton.ramos@3mworks.com.ph`, Form Type Normal, Device Type Default, Is Master True, status bar User. **Save was already disabled, so no ordinary Save was needed; none was performed.** Select Form, exact `FX_HelloWorld01`: **T6 zero rows**; **T7 one row** (after a passing `SqlTables` control); **T9 one row** (fresh re-entry). | `t5-01-…png`; `t5-02-after-single-finish-completion-alert.png`; `t5-03-post-finish-form-open-designer-clean-user-scope.png`; `t6-02-select-form-FX_HelloWorld01-exact-settled-result.png` (zero rows); `t7-02-…png` (control, two rows); `t7-03-target-FX_HelloWorld01-exact-settled-one-row.png`; `t9-02-select-form-target-fresh-settled-one-row.png` | **T6 zero-row anomaly is unexplained.** No caching or timing cause is claimed. The one-row reads (T7, T9) show one visible FX_HelloWorld01 row, with Case Sensitive unchecked and no case-variant row visible. **No cross-scope proof**: the dialog shows no scope column. Uniqueness across all scopes is not established. |
| **AC-6** Designer baseline: data source, generated FX_Code and FX_Label components (names, types, bindings, parent structure); other generated elements inventoried, not modified | **PASSED (for the directly observed structure)** | Form-level: Primary Collection `FX_HelloWorld01` (Collections tab). Tree: `Pane (00)` > `FormCollectionGrid` (Grid, data source `objects`, tab 0) > `FX_LabelGridCol` (GridColumn, `object.FX_Label`, tab 1) and `FX_CodeGridCol` (GridColumn, `object.FX_Code`, tab 2). `Pane (01)` > `FX_LabelStatic` (Static, tab 3), `FX_LabelEdit` (Edit, `object.FX_Label`, tab 4), `FX_CodeStatic` (Static, tab 5), `FX_CodeEdit` (Edit, `object.FX_Code`, tab 6). Additional wizard-generated elements inventoried: `FormCollectionGrid`, `Pane (00)`, `Pane (01)`. Nothing modified. | `t5-04-components-tab-expanded-readonly-inspection.png`; `t5-finish-result-and-form-readonly-inspection.md`; `t6-prefinal-baseline-and-select-form-inventory.md` §2a; `t8-03-after-single-reopen-components-expanded-readonly.png` | Component captions, Component Class and Enabled/Visible/Required When values not read. The required-marked canvas box is an inference (FX_CodeEdit), not read directly. Lower tree rows were read from the snapshot, not from the canvas image. |
| **AC-7** Exactly one ordinary close and one supported reopen; same Name, ScopeType, ScopeName, data source, components and bindings; Save disabled after reopen | **PASSED (for the properties and bindings compared)** | One close (ordinary tab control). One reopen (Designer Form menu, recent-form `FX_HelloWorld01`). Equal before and after: Name; Version; ScopeType User; ScopeName; Primary Collection; Form Type Normal; Device Type Default; Is Master True; Save and Undo disabled; all eight component rows (name, type, data source, pane, container, tab). | `t8-01-pre-close-form-open-clean-user-scope-primary-collection.png`; `t8-02-after-single-close-no-form-tab-no-dialog.png`; `t8-03-after-single-reopen-components-expanded-readonly.png`; `t8-ac7-close-reopen-persistence-verification.md` §4 | Captions, Component Class and When values not compared. Same session only. No cache, server-persistence or cross-session claim. |
| **AC-8** Single Web Client runtime open; exact identity; FX_Code and FX_Label rendered; mode and messages | **NOT PASSED (pending)** | Opened once through Select Form (row, then OK). Tab heading, panel and URL identify `FX_HelloWorld01`. Runtime shows a grid row with a blue new-row star and two unnamed detail inputs (one with a required marker). No messages or errors. Save disabled. No data entered or saved. | `t9-02-select-form-target-fresh-settled-one-row.png`; `t9-03-web-client-runtime-FX_HelloWorld01-initial-state-after-single-open.png`; `t9-ac8-web-client-runtime-open-observation.md`; `t10-01-runtime-recheck-FX_HelloWorld01-readonly-no-interaction.png`; `t10-ac8-runtime-recheck-and-strict-verdict.md` | **Missing:** (1) FX_Code and FX_Label rendered by name (no runtime element carries either name); (2) the mapping of each input to a field (not established; not inferred from position, the required marker or the bindings); (3) an explicit add-mode indicator (add mode **inferred** from the new-row star, empty inputs and disabled Save). |
| **AC-9** Consolidation: dated EXP-040/EXP-041 cross-reference; disposition, specialist and totals; matrix; inventory; audit; errors; final state | **COMPLETED (this section)** | See the sections below. | This section; `t11-ac9-reconciliation-and-artifact-inventory.md` | Controller header counts do not reconcile to their row tables (see below). Some worker-recorded totals remain uncertain. |

**Observed without a known cause (AC-8, documented as observed only).** The Form-level Caption property is empty (`t5-03`, `t8-01`). The page-3 Caption cells are empty (`t4-02`). The runtime inputs show only `:` glyphs and the grid column headers are empty (`t9-03`, `t10-01`). The cause of these blank captions and unlabeled runtime controls **is unknown**; the evidence does not show whether the wizard leaves captions unset, or whether the runtime does not render labels. No cause is assigned.

### Operator dispositions carried into this record

1. **EXP-041-R2 leftover wizard Cancel/Yes: authorized** (only uncommitted page-1 entries were discarded; no preservation violation). Recorded in T3 before any T3 browser action.
2. **Late prerequisite reading: accepted as a minor ordering deviation.** The original chronology is **not** claimed compliant. The recipe, EXP-036 and EXP-039 were read in T2, and EXP-040 in full in T3, not before the T1 browser actions. Recorded in the T3 reading-chronology table.
3. **Visible-inventory collision gate** (2026-10-10): absence in the Select Form inventory visible to the user is sufficient for a User-scope Form. The dialog shows no scope column; this is a recorded limitation. The post-creation uniqueness result (AC-5) is not a cross-scope proof.

### Specialist consultation (`R-20261010-154641-QsiV-C1`) and source-verification limits

- **Operator-reported (T5 and T6 briefs); not verified by the worker.** The consultation text is not present in this worker session.
- **Reported verdict:** supports one Finish of the Classic Multi-View wizard.
- **Reported documentation claims:** (a) Classic Multi-View builds and opens a Form using an existing IDO; (b) table and IDO creation belongs to a different wizard category; (c) Save Template can create an additional template artifact, and it was unchecked; (d) blank Caption, Containment, Component Class and Form Pages settings are optional; (e) the star-marker meaning is not verified.
- **Source-verification status:** the two cited Infor pages (`docs.infor.com/mg/2026.10/…/byx1502139639463.html` and `docs.infor.com/mg/2026.x/…/xul1496288205534.html`) **were not read**. The worker has no URL-reading tool in this session. Their content is unverified.
- **Consistent with observed behaviour (not proof of the claims):** the Multi-View page 1 offered the IDO as Data Source (T3); one Finish created the Form (T5); Save Template was unchecked before Finish (T4); blank optional settings did not block Finish (T5).
- **Not verified:** the Infor documentation text; the category-to-object behaviour beyond the EXP-040 observations and the rendered category descriptions; the star-marker meaning.

### Dated cross-reference to EXP-040 and EXP-041 (2026-10-10)

- **EXP-040 (AC-7 carry-forward; follow-up added 2026-10-10 from EXP-041 T1):** the question was whether the declined Create Form prompt in EXP-040 (T9) produced a Form named `FX_HelloWorld01`. **Not resolved by EXP-041-R3.**
  - Pre-creation (R3 T1, this session, with a passing control): no visible `FX_HelloWorld01` row for the exact or substring query. This agrees with the EXP-040 follow-up and EXP-041-R2 T1.
  - Post-creation (R3 T7 and T9): one visible `FX_HelloWorld01` row. R3 T6: zero rows, unexplained.
  - Reading: a single visible row is consistent with no second Form from EXP-040's declined prompt. It cannot be established, because the dialog shows neither scope nor creation time, and the unexplained T6 result conflicts with the visible-inventory reading.
  - Recommendation for the operator: record the EXP-040 question as **open**, citing both the pre-creation absence and the post-creation visibility (T6 versus T7/T9).
- **EXP-041 (blocked at AC-2 on 2026-10-10, run R-20261010-145543-aSWc, on the cross-scope requirement):** R3 applies the operator's visible-inventory decision. R3 T1 repeats the gate in this session and passes it. EXP-041 was **not edited**.
- **EXP-041-R2 (2026-10-10):** the gate passed; the wizard Name was rejected by key-event entry on page 1. R3 used the plain fill (step b), which was accepted in one run. EXP-041-R2 was **not edited**.
- **EXP-040 waivers:** preserved unchanged. This run did not touch EXP-040.

### Operation totals, T1–T10 (from controller row tables; see the evidence file §2 for sources)

| Operation | Total | Notes |
|---|---|---|
| Wizard Finish | **1** | T5 only; no retry |
| Completion-alert OK | 1 | T5 |
| Designer ordinary Save | **0** | none in any task; Form already clean at T5 |
| Web Client Save | 0 | — |
| Form-tab close | **1** | T8 |
| Reopen (Form menu recent item) | **1** | T8 |
| Runtime Form open | **1** | T9 |
| Runtime typing or record actions | **0** | — |
| Application data rows edited or saved | **0** | — |
| Wizard builder route OK | 1 | T3 (Classic → Multi-View); no other builder |
| Wizard Next clicks | 3 | T3 (1), T4 (2) |
| Save Template label clicks | 1 | T4 (unchecked) |
| Name plain fill | 1 | T3 |
| Select Form filter entries (key events) | 8 | T1 (4), T6 (1), T7 (2), T9 (1) |
| Positive-control entries (SqlTables) | 2 | T1, T7 |
| Exact target entries (FX_HelloWorld01) | 4 | T1, T6, T7, T9 |
| Substring entries (HelloWorld) | 1 | T1 |
| Select Form OK | 1 | T9 (opened the Form) |
| Select Form Cancel | 3 | T1, T6, T7 |
| Web Client Open clicks | 4 | T1, T6, T7, T9 |
| Designer route New clicks | 2 | T1 (cancelled), T3 (OK) |
| Discard confirmation answered Yes | 1 | T1 (operator disposition 1) |
| Recovery snapshots (after a stale ref) | 1 | T5; the allowance is then exhausted |
| Corrected inspections | 0 | — |
| Tool errors | 4 | T1 read of a record path before it existed; T5 stale ref `e563`; T8 and T9 no-op `Edit` on the record (no state change) |
| Flagged `browser_type` rows | 9 | 8 Select Form key entries (step e) and 1 wizard plain fill (step b); all permitted |
| Worker PNG screenshots | 32 | T1 8, T3 4, T4 4, T5 4, T6 2, T7 3, T8 3, T9 3, T10 1 |
| Worker Markdown files | 12 | including the T11 file |
| JavaScript / evaluate / run-code | 0 | none in any task |
| Authentication, logout, session reset, FormSync, metadata unload, regeneration, check-in or check-out | 0 | none |

**Uncertain totals.** The controller header summaries do not match their row tables in any of the ten audits, so headers were not used. Designer tab selects, snapshot totals, Designer read-only click totals, and per-task screenshot totals taken from the worker records were **not** reconciled row by row; treat them as uncertain. The T1 worker record's Designer click count (34) and Web Client click count (6) are unverified against the T1 row table.

### Artifact inventory (summary; full list in the evidence file §3)

- **Experiment record:** `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (created in T1; edited T1–T11).
- **Worker Markdown (12):** `t1-gate-select-form-dialog-snapshots.md`; `t1-route-category-wizard-inventory.md`; `t2-documentation-and-evidence-audit.md`; `t3-wizard-preflight-inventory.md`; `t4-wizard-pages-2-to-final-inventory.md`; `t5-finish-result-and-form-readonly-inspection.md`; `t6-prefinal-baseline-and-select-form-inventory.md`; `t7-post-creation-select-form-verification.md`; `t8-ac7-close-reopen-persistence-verification.md`; `t9-ac8-web-client-runtime-open-observation.md`; `t10-ac8-runtime-recheck-and-strict-verdict.md`; `t11-ac9-reconciliation-and-artifact-inventory.md`.
- **Worker PNG (32):** `t1-01` to `t1-08`; `t3-01` to `t3-04`; `t4-01` to `t4-04`; `t5-01` to `t5-04`; `t6-01` to `t6-02`; `t7-01` to `t7-03`; `t8-01` to `t8-03`; `t9-01` to `t9-03`; `t10-01`, all under `evidence/EXP-041-R3/`.
- **Form artifact (application object):** the User-scope Form `FX_HelloWorld01` (one, created by T5 Finish). Its components are the Designer structure in AC-6.
- **Controller-generated (not worker-authored):** `evidence/EXP-041-R3/harness-audit-T1.md` … `harness-audit-T10.md`.
- **Tool-generated (gitignored; not worker-authored):** `evidence/playwright/` accessibility snapshots and console logs.

### Repository-confinement audit (worker view; the harness computes Git state)

- Worker writes were limited to this record and `evidence/EXP-041-R3/`. No other repository file was written. EXP-040, EXP-041, EXP-041-R2, EXP-036, EXP-039, the recipes, AGENTS.md, `tools/`, `docs/`, and memory files were read only.
- Two no-op `Edit` calls on this record (T8, T9) returned "No changes to make" and changed nothing.
- Bash was disabled; no Git-level verification was run by the worker.

### Errors and recovery accounting

1. T1: a read of this record path before it existed (controller row 2). No state effect.
2. T5: stale reference `e563` after a targeted snapshot. One fresh untargeted snapshot was used as the single permitted recovery. No further recovery.
3. T8 and T9: no-op `Edit` on this record. No state effect.
4. No failed Finish, no retried Finish, no wizard-load failure, no ComponentFlags message, no alternate wizard, no unexpected prompt affirmed.

### Final browser state (from T10's last observation; T11 did not touch the browser)

- **Designer tab:** `FX_HelloWorld01` open and **clean** (Save and Undo disabled), `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, URL `?MGForm=FX_HelloWorld01`.
- **Web Client tab:** `FX_HelloWorld01` runtime tab open with blank inputs (one with a required marker), a blank grid row marked with a blue new-row star, Save disabled, no dialog, no browser prompt. **No data was entered or saved** in the runtime.
- The runtime tab has **not** been closed, and its blank add-mode draft has **not** been discarded. Neither is claimed.

### Remaining operator decisions (no further work started)

1. **AC-8:** authorize a read-only method that exposes FX_Code and FX_Label field names or captions and an explicit add-mode indicator, or accept AC-8 as partial with the mapping gap stated.
2. **Runtime tab and blank draft:** decide whether to close the tab and discard the unsaved blank record. The T11 brief forbids doing this here.
3. **AC-5 uniqueness:** authorize one repeated check (positive control, then the exact query) to reproduce or explain the T6 zero-row result, or accept AC-5 as supported but inconclusive on uniqueness.
4. **EXP-040 follow-up:** record the carried-forward question as open, with both the pre-creation absence and the post-creation visibility.
5. **AC-4 residual:** decide whether a post-Finish inventory of any template, SQL table, IDO or project is required to show that Finish created nothing else.
6. **Optional completeness for AC-6 and AC-7:** read captions and Component Class / When properties, if the operator wants those compared.
7. **Specialist sources:** provide the two Infor documents' content, or the consultation text, to verify the reported claims.
8. **Star markers and blank optional settings:** decide whether they need explanation before any further acceptance.

Stopping here as directed: no further experiment, replay, Finish, runtime action, or promotion to replay_verified.
