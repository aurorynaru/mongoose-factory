# EXP-040 — Hello World Part 1: Single-Wizard FX_ SQL Table and IDO Creation

Status: **T12 (cycle 21, see the T12 section) complete: IDO `FX_HelloWorld01` located once under `FX_HelloWorldProject01` (checked out at start); one check-in performed (Revision 1→2; now checked in, Locked By empty); Form-absence check qualified (no FX_HelloWorld01 in the visible FX_ captions; filter non-functional); IDOs and SQL Tables closed normally and reopened; SQL table `dbo.FX_HelloWorld01` re-read with PK_FX_HelloWorld01, IX_FX_HelloWorld01_RowPointer, FX_Code nvarchar(30) NOT NULL PK, FX_Label nvarchar(100) nullable. Finish count across the experiment: 1 (T9). Save: 0. Browser left clean (Save disabled, no dialog). AC-4 and AC-6 remain not met / partial; AC-2 PARTIAL; AC-1, AC-5, AC-7, AC-8, AC-9, AC-11 PASS-LIMITED; AC-3 and AC-10 PASS (observed UI).** **T1 (read-only preflight), T3 (wizard entry attempt), T4 (wizard first-page inspection), T5 (first-page configuration), T6 (row 1 inspection, stopped), and T7 (blank row deleted once; FX_Code and FX_Label configured as String 30 and String 100) complete. No Finish, Save, check-in, or object creation has occurred. T8 (page-1 re-verification; one Next to the last page), and T9 (operator-authorized single Finish: the wizard reported "Table and IDO created."; the optional Create Form prompt was declined with No; the wizard was closed). **Finish was pressed exactly once.** T10 (read-only): the IDO `FX_HelloWorld01` was independently retrieved under `FX_HelloWorldProject01` (checked out, unchanged; base table `FX_HelloWorld01` / `fxhw`; FX_Code String 30 nvarchar key 1 required; FX_Label String 100 nvarchar). The SQL table `FX_HelloWorld01` (dbo) was found by exact name, but its columns were not retrieved. **An unintended "Yes" was sent to a SQL Tables save-changes prompt (wrong ref); its server outcome is not independently established.** T11 (recovery): the row-1 error text could not be exposed by any rendered UI; the surface was discarded with an authorised **No** (`promptresp "No"`); the client is clean (Save disabled); Customer was re-verified by grid query with PK_Customer and IX_Customer_RowPointer; FX_HelloWorld01 is retrieved as a table with FX_Code nvarchar(30) NOT NULL primary key and FX_Label nvarchar(100) nullable, plus system columns (CreatedBy UsernameType nvarchar(128), default suser_sname(); others listed, types not read). Form inventory, check-in, and close/reopen not performed. Form inventory not checked. AC-8 not met; AC-9 PASS-LIMITED; AC-10 partial (checked out, no check-in). AC-5 is PASS-LIMITED at grid level; AC-4 and AC-6 are not met; AC-2 is PARTIAL. Physical SQL lengths are unverified until post-Finish inspection.** The preflight passed AC-1 (PASS-LIMITED). AC-2 is **PARTIAL**: exact-case zero-row results are observed, but a case-insensitive query for the target name itself was not performed (see AC-2 and T1 reconciliation below). The separately authorized wizard-inspection task may proceed, subject to the notes under "Open questions and blockers". AC-3 through AC-12 were not reached in T1.

Date: 2026-10-10
Run: R-20261010-133302-x5e3 · task T1 · worker session 6224dabe-675c-4250-a397-c10c2349e914 · task_message_id 930c4df3-e97b-440d-8905-76f2af62a232
Mode: LEARNING MODE. FX_-only scope extension for the Hello World tutorial (AGENTS.md, 2026-10-10).
Editing scope: **User**. Observed in the Identify Your Editing Scope dialog (pre-filled `User` / `anton.ramos@3mworks.com.ph`) and in the Runtime Builder Selection scope line. Not changed by the worker.
Target names: `FX_HelloWorld01` (requested IDO name; also the expected SQL table name, not yet confirmed), `FX_HelloWorldProject01` (existing IDO project, EXP-039), `FX_Code` (string, length 30), `FX_Label` (string, length 100).

## Follow-up (2026-10-10, from EXP-041 T1)

Carried-forward AC-7 check: the Select Form inventory visible to this user, with its search proven by positive controls, shows no Form named `FX_HelloWorld01` (exact query) and none containing `HelloWorld` (case-insensitive substring query). Evidence: `evidence/EXP-041/` (T1). Limitation: the dialog shows no scope column. This supports the record that the declined Create Form prompt created no Form.

## Outcome (operator, 2026-10-10)

**Accepted (observed), with documented limitations.** Run R-20261010-133302-x5e3.

- Created (tenant-wide, for later cleanup): SQL table `dbo.FX_HelloWorld01` (`FX_Code` nvarchar(30) NOT NULL primary key; `FX_Label` nvarchar(100) nullable; system columns added by Mongoose) and IDO `FX_HelloWorld01` in project `FX_HelloWorldProject01` (alias `fxhw`, checked in once: Revision 1 to 2; external source control disabled).
- AC-2: case-variant absence inferred from case-insensitive queries proven by positive controls.
- AC-4 / AC-6: the wizard shows no physical table name or object preview before Finish; Finish was operator-authorized on that basis and the result verified afterwards.
- AC-7: Create Form was declined (evidence 61, 62); Form absence is not conclusively proven (Select Form filter ineffective). Carried forward: the next Hello World experiment's `FX_HelloWorld01` Form name check settles it.
- T10 incident: the Sql Tables **Attributes > Table Name** combo is the record's table-name field, not a query field. With the existing table `Customer` still loaded, typing `FX_HelloWorld01` there changed the record in the client; a wrong ref then answered Yes to the save prompt. The save failed (error badge; name already exists); T11 discarded the change and `Customer` was retrieved intact at UI level (no transaction audit).
- Lesson for future briefs: query Sql Tables only through the grid's Filter-in-Place criteria row, and before any prompt click confirm the button label of the exact ref in a fresh snapshot.

## Objective (T1)

Read the procedure and prior records, confirm the intended DEM configuration, Designer access and editing scope, verify the existing project, and establish whether the SQL Tables and IDO queries can support reliable collision checks for `FX_HelloWorld01`. Stop before the wizard, and make no creation, save, check-in, or check-out.

## Sources read

- `AGENTS.md`, lines 31–44 (FX_ scope extension: FX_ IDO projects, tables, and IDOs allowed in this demo tenant only; tenant-wide; record every created object), lines 46–61 (safety), lines 127–163 (browser automation and recovery), lines 181–219 (evidence).
- `experiments/EXP-001-environment-fingerprint.md`: Site Developer role (Designer About), recorded 2026-09-29. Not re-verified in T1.
- `experiments/EXP-002-create-basic-form.md`: User editing scope, Site Developer, Designer scope dialog. Also created `FX_TestBlank01`, a Build-from-Scratch Form, which is not part of this experiment and is not touched here.
- `experiments/EXP-038-hello-world-part-1-fx-sql-table-and-ido-creation-f.md`: T1 blocked. SQL Tables shows no visible new-table action. The IDO Wizard needs an existing base table. The New Data Maintenance wizard was the only candidate route. Name-collision inventory was unverified.
- `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`: `FX_HelloWorldProject01` created, saved, closed, reopened, and recovered (observed, UI level, same client session). Accepted at T8.
- `environments/current-environment.md`: DEM configuration group; Data Maintenance wizard field list recorded earlier (IDO Name, IDO Project Name default `HelloWorld`, Table Alias, Form Type `MultiView`, Form Layout `GridLeft`, Device Type `Default`, Multi-Site Options, field grid, Get Database Schema). These defaults are **not re-observed in T1**.
- `docs/mongoose/guides/ido-development.md`, "Adding an IDO" (lines 9–77): the IDO Wizard needs an existing IDO project and an existing Primary Base Table; IDO Name must be unique; Access As is read-only; Finish creates the IDO and, under source control, checks it out. **Trust: unverified** (Infor documentation, not confirmed here).
- `docs/mongoose/transcripts/hello-world-pt1.md`, sections 5–7 (about lines 88–122) and the full transcript (lines 194–298): the New Data Maintenance wizard creates a table, an IDO, and then offers a "Create Form" prompt. The demo uses Site Default scope and non-FX_ demo values, which are **not** authorized here. **Trust: unverified** (speech-to-text transcript; not a verified click log).
- Not read: `docs/mongoose/transcripts/raw/raw-hello-world-pt1.txt` (T1 used the normalized transcript).

## AC-1 preflight (PASS-LIMITED)

| Item | Evidence | Finding |
|---|---|---|
| Documented wizard procedure | Transcript sections 5–7; `ido-development.md` "Adding an IDO" | Candidate procedure only. Unverified in this environment. |
| AGENTS.md authorization | AGENTS.md lines 31–44 | FX_ IDO projects, SQL tables, and IDOs are permitted in this demo tenant. Objects are tenant-wide, not User-scoped, and must be recorded. |
| EXP-038 limitation | EXP-038 record, outcome and route assessment | The SQL Tables form has no visible new-table action. The New Data Maintenance wizard is the only candidate table-and-IDO route, and its commit scope was unverified before Finish. |
| EXP-039 accepted project | EXP-039 T8 section | `FX_HelloWorldProject01` exists. Observed, UI level, one client session. |
| Intended DEM configuration | Web Client header in every capture (`01`, `20`, `22`) | `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Matches `environments/current-environment.md`. |
| Authenticated UI | Portal tab `Mongoose`; Web Client iframe rendered | No sign-in or configuration prompt appeared. No authentication action was taken. |
| Site Developer evidence | EXP-001 (Designer About) and EXP-002 | **Historical only.** The Designer About dialog was not opened in T1, which would have needed the separate Web Designer tab. |
| User editing scope | Captures `20` (dialog) and `21` (scope line) | **User**, for `anton.ramos@3mworks.com.ph`. Pre-filled, not chosen by the worker. |
| Configuration-wide visibility | Limitation | **SQL table and IDO visibility may be configuration-wide.** The User editing scope does not isolate SQL tables or IDOs from other users of this configuration (the same applies to IDO projects, per EXP-039 T8 section 2). T1 did not test this. |

## AC-2 positive-control and collision checks (PARTIAL)

Every check used the Filter-in-Place (FiP) criteria and F4, with the screen captured afterwards.

| Surface | Step | Result | Capture |
|---|---|---|---|
| IDO Projects | Exact FiP `FX_HelloWorldProject01` + F4 | **One row**: `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`. Save disabled. | `01` |
| SQL Tables | Positive control: exact FiP `Customer` + F4 | **One row**: `Customer` / `dbo`. Constraints `PK_Customer`, `IX_Customer_RowPointer`. | `06` |
| SQL Tables | Case-insensitivity: lowercase `customer` + F4 | Returns the `Customer` row. The query is case-insensitive. | `10` |
| SQL Tables | Target: exact FiP `FX_HelloWorld01` + F4 | **Zero data rows**. Only a blank add-record placeholder appears. | `09` |
| IDOs | Positive control: exact FiP `ABDataServices` + F4 | **One row**: `ABDataServices` / Project `AppBuilder` / Access As `Core`. | `16` |
| IDOs | Case-insensitivity: lowercase `abdataservices` + F4 | Returns `ABDataServices`. The query is case-insensitive. | `18` |
| IDOs | Target: exact FiP `FX_HelloWorld01` + F4 | **Zero rows**. | `17` |

Interpretation:

- **Exact collisions for `FX_HelloWorld01`: zero** in SQL Tables and in IDOs, under a query that returned a known object each time.
- **Case-insensitive collisions for `FX_HelloWorld01`: not directly observed.** The query mechanism was shown to match case-insensitively (lowercase `customer` → `Customer`; lowercase `abdataservices` → `ABDataServices`). If that holds for the target too, the exact-case zero-row result also covers case variants. That is an inference. The lowercase target `fx_helloworld01` was **not** queried: a harness hook blocked the entry, and no bypass was attempted.
- **IDO project: exactly one** `FX_HelloWorldProject01`, under an exact-name query, with description `Factory Hello World test project` and Access As `G6R`.

Inventory-completeness limitation (stated, not hidden):

- The SQL Tables Table Name combo and the IDOs blank-criteria grid are virtualised. Only the first visible rows were scanned: Table Name rows through `fsbase_PropertyDefaultDragDropEvents`, and IDO rows 1–29 (`15`). The FX_ region was not scrolled to exhaustion.
- The collision conclusion therefore rests on the exact-name query mechanism, which the positive controls validate, **not** on a full inventory.
- No database-wide absence is claimed.
- A physical SQL table name different from `FX_HelloWorld01` (a generated suffix or tenant qualifier) is not ruled out. It must be read from the wizard summary and the SQL Tables form after any creation.
- An IDO named `Customer` returned zero rows (`13`). That query ran before the IDO mechanism had a positive control; the later `ABDataServices` control (`16`) supports reading it as a valid negative. It is not itself a positive control.

## Designer and wizard route (observed in T1, not completed)

- The in-frame Designer launcher's element id was `#mgtoolbarbutton-1124-btnEl` in the locator the tool used. The documented id `#mgtoolbarbutton-1125` matched nothing. **Observed drift** in Ext component ids. Use the accessibility tree, not the documented number.
- The second Designer toolbar control has the tooltip **"Open designer in a new window"** (`19`). This is the split button that opens the Web Designer in a new tab. It was **not** clicked.
- Clicking the in-frame Designer launcher opened **Identify Your Editing Scope**: Scope `User`, User `anton.ramos@3mworks.com.ph` (`20`).
- **Deviation:** Cancel on that dialog did not close the flow. It opened **Runtime Builder Selection** (`21`), with Category and Runtime Builder empty and the scope line showing User. Runtime Builder Selection was then cancelled (`22`).
- **Scope not chosen by the worker, and Cancel behaviour unexplained.** Scope `User` and User `anton.ramos@3mworks.com.ph` were pre-filled. The worker did not pick them. The Cancel press nonetheless advanced the flow rather than dismissing it. The record cannot show whether that Cancel committed the pre-filled scope. The only visible evidence of the scope in force is the Runtime Builder Selection scope line (`21`).
- The Data Maintenance wizard was **not** reached. No Category, Runtime Builder, or wizard page was selected or entered.

## Operations (T1, in order, summarized)

1. Tab list and fresh snapshot; FiP toolbar click on IDO Projects (`00`); F4 with the inherited `FX_HelloWorldProject01` criteria (`01`).
2. Sql Tables tab selected (tab navigation). FiP re-entered and blank criteria checked (`02`). Table Name combo list opened (`03`). Escape ×2 closed it (`04`).
3. SQL positive control: `Customer` typed, Tab, F4 (`05`, `06`). FiP re-entered (`07`). Target `FX_HelloWorld01` typed, Tab, F4 (`08`, `09`). FiP re-entered after a stale-ref error (see Recovery), then lowercase `customer` typed, Tab, F4 (`10`). FiP re-entered again, and the lowercase target entry was **blocked by a harness hook** (see Errors). No target text was entered.
4. Select Form opened from the toolbar Open control (`11`). The `IDOs` row double-clicked; the IDOs form opened (`12`).
5. IDO check: `Customer` typed, Tab, F4 (`13`). Criteria cleared with Ctrl+A and Delete, Tab, F4. The blank inventory rendered after a delayed refresh (`14`, `15`). FiP re-entered, `ABDataServices` typed, F4 (`16`). FiP re-entered, `FX_HelloWorld01` typed, F4 (`17`). FiP re-entered, lowercase `abdataservices` typed, F4 (`18`).
6. Designer toolbar control hovered for its tooltip (`19`). In-frame Designer launcher clicked (`20`). Scope dialog Cancel clicked (`21`). Runtime Builder Selection Cancel clicked (`22`).
7. Final state: no dialog; IDOs tab showing `ABDataServices` (not edited); IDO Projects tab showing `FX_HelloWorldProject01` (unchanged); SQL Tables tab showing `Customer` (not edited, Save greyed).

## Operation counts (T1)

| Operation | Count | Notes |
|---|---|---|
| Save | **0** | Not pressed. Save was disabled in every captured state. |
| New (toolbar) / New IDO / New Table / New Property / New Method / New Data Rule | **0** | Not pressed. |
| Delete / Refresh / Undo Check Out / Check Out | **0** | Not pressed. |
| Wizard Finish / Create Form / Get Database Schema | **0** | No wizard reached. |
| Runtime Builder Selection | **1 dialog reached, cancelled** | Via the scope dialog's Cancel. No category or builder was selected. |
| Designer launch (in-frame) | **1** | Scope dialog opened. |
| Designer split (new tab) | **0** | Tooltip only. |
| Identify Your Editing Scope | **1 Cancel** | The Cancel advanced to Runtime Builder Selection. |
| FiP toolbar clicks | **8** | IDO Projects 1; Sql Tables 3 effective (one further click failed with a stale ref); IDOs 4. |
| Criteria typed (fill) | **7** | Sql Tables 3 (`Customer`, `FX_HelloWorld01`, `customer`); IDOs 4 (`Customer`, `ABDataServices`, `FX_HelloWorld01`, `abdataservices`). One further typed entry was blocked by a hook. |
| Criteria cleared | **1** | IDOs `Customer` cleared (Ctrl+A, Delete). |
| Tab commits | **5** | Sql Tables 3; IDOs 2. |
| F4 executions (effective) | **9** | IDO Projects 1; Sql Tables 3; IDOs 5 (the blank inventory F4 rendered after a delay). |
| Combo list opened | **1** | Table Name. Escape ×2 to close. |
| Select Form opened | **1** | Double-click on `IDOs` (IdoCollections). |
| Tab selection (Sql Tables) | **1** | Navigation only. |
| Save / check-in / check-out / close / reopen of a surface | **0** | None. |
| Recovery snapshots (fresh, untargeted) | **1 of 1 used** | After the stale-ref error. |
| Corrected visible inspection | **1 of 1 used** | The FiP click that followed the fresh snapshot. |

## Errors and recovery

1. **Stale ref.** Clicking Sql Tables FiP `f1e38` after the zero-row result returned `Ref f1e38 not found`. Recovery: one fresh untargeted snapshot, then the FiP click on the new ref (the one corrected attempt). No state was lost.
2. **Documented control id did not match.** `#mgtoolbarbutton-1125` matched no element. Recovery: found the control through the accessibility tree and hover tooltip, then clicked the in-frame launcher by its ref.
3. **Harness hook block.** A `PreToolUse` hook rejected the typed text `fx_helloworld01` with "Exact value required: FX_HelloWorld01. Preserve its spelling and case." This was a hook rejection of a value, not a Playwright permission denial. The call did not execute: the snapshot taken after it (`evidence/playwright/page-2026-10-10T05-35-48-965Z.yml`, line 178) still shows the SQL Table Name criteria as `Customer`. Case-insensitivity was inferred from the lowercase positive controls, not tested on the target.
4. **F4 timing (IDOs).** After Tab then F4, the first capture showed the blank criteria row with the FiP icon still present (`14`). The next capture showed the rendered inventory (`15`). The first capture was superseded, not retried.
5. **Escape did not close the combo list** on the first press (`03`/`04`). The second press closed it.
6. **Scope-dialog Cancel advanced to the next dialog** (see Designer route).

Not used: a second fresh snapshot, a second corrected inspection, a reload, navigation, a close or reopen of any surface, and any retry of a mutation (none occurred).

## Object audit (T1)

| Category | Finding |
|---|---|
| Created | **None.** No SQL table, column, constraint, IDO, IDO property, method, Form, shortcut, preference, or data row was created. |
| Changed | **None.** No save. Criteria changes were FiP criteria only. |
| Checked out / checked in | **None.** Check Out and Undo Check Out were greyed on the IDOs surface. |
| Deleted | **None.** |
| Auto-selected records (read-only) | SQL Tables `Customer` (`dbo`); IDOs `ABDataServices` (Project `AppBuilder`, Access As `Core`); IDO Projects `FX_HelloWorldProject01`. None edited. |
| Pending changes at end | **None visible.** Save disabled on the captured final state (`22`). |
| Visible generated dependencies | None (no object was created). |

Existing objects confirmed present (read-only): `FX_HelloWorldProject01` (IDO project, EXP-039); the system IDO `ABDataServices` (AppBuilder, Core) and SQL table `Customer` (dbo), used as positive controls only.

## Knowledge state

| Finding | State |
|---|---|
| IDO Projects exact FiP query returns `FX_HelloWorldProject01` once, with description and Access As `G6R` | observed (UI level, `01`) |
| SQL Tables exact FiP query is a working mechanism (positive control `Customer`) | observed (`06`) |
| SQL Tables exact FiP query is case-insensitive | observed (`10`) |
| `FX_HelloWorld01` returns zero rows in SQL Tables (exact) | observed (`09`) |
| IDOs exact FiP query is a working mechanism (positive control `ABDataServices`) | observed (`16`) |
| IDOs exact FiP query is case-insensitive | observed (`18`) |
| `FX_HelloWorld01` returns zero rows in IDOs (exact) | observed (`17`) |
| Zero case-insensitive collisions for `FX_HelloWorld01` in SQL Tables and IDOs | **inferred** (mechanism is case-insensitive per `06`/`10`/`16`/`18`; the target-variant query was not run) |
| IDO named `Customer` does not exist | observed (`13`); not a positive control |
| Designer in-frame launcher drift (`#mgtoolbarbutton-1125` not found) | observed |
| Identify Your Editing Scope pre-filled `User` / `anton.ramos@3mworks.com.ph` | observed (`20`) |
| Scope-dialog Cancel opens Runtime Builder Selection | observed (`21`) |
| Data Maintenance wizard fields, defaults, and Form Type/Layout/Device Type defaults | **unresolved** (not reached; `current-environment.md` record is historical) |
| Documented IDO Wizard and transcript wizard steps | candidate_procedure (unverified) |
| Site Developer role | historical (EXP-001/EXP-002); unverified in this run |
| Configuration-wide visibility of tables and IDOs | **unresolved** (not tested) |
| Physical SQL table name after creation | **unresolved** (not created) |

## Open questions and blockers

1. **Wizard route.** Cancel on the scope dialog advanced to Runtime Builder Selection, so the next task must handle that dialog (choose Category FormBuilder and Runtime Builder DataMaintenance, or cancel). The scope is already User.
2. **Designer control ids drift.** Use the accessibility tree and tooltips, not the documented numeric ids.
3. **Inventory completeness.** Collision conclusions rest on the exact-name mechanism proven by positive controls. Scrolling the FX_ region of the SQL Tables combo and the IDO list was not done. Say so in any later claim.
4. **Configuration-wide visibility** of tables and IDOs is not established. It must be stated, not assumed.
5. **Site Developer** is historical and was not re-verified.
6. **Hook rule.** The typed target must keep the exact spelling `FX_HelloWorld01`. Lowercase variants of the target name are blocked.
7. **Browser snapshot files.** The browser tool wrote many `evidence/playwright/page-*.yml` and console files during T1. They are git-ignored tool output and are not EXP-040 evidence.
8. **Repository changes in T1:** this record and `evidence/EXP-040/` only.

## Evidence

Folder `evidence/EXP-040/`. Index with a per-file "shows / does not prove" table: `evidence/EXP-040/t1-evidence-index.md`.

Decisive captures:

- `01-t1-ido-projects-after-exact-fip-f4.png`: AC-2 IDO Projects (existing project).
- `06-t1-sql-tables-positive-control-customer-f4-result.png`: AC-2 SQL positive control.
- `09-t1-sql-tables-target-f4-result-zero-rows.png`: AC-2 SQL target, zero rows.
- `10-t1-sql-tables-lowercase-positive-control-customer-f4.png`: AC-2 SQL case-insensitivity.
- `16-t1-idos-positive-control-abdataservices-f4.png`: AC-2 IDO positive control.
- `17-t1-idos-target-fx_helloworld01-f4-result.png`: AC-2 IDO target, zero rows.
- `18-t1-idos-lowercase-positive-control-abdataservices-f4.png`: AC-2 IDO case-insensitivity.
- `20-t1-designer-identify-editing-scope-dialog.png`: AC-1 editing scope User.
- `22-t1-after-runtime-builder-cancel-idos-state.png`: clean final state, no dialog.

## Acceptance checks (T1)

| AC | T1 status | Proof (under `evidence/EXP-040/`) | Limitation |
|---|---|---|---|
| AC-1 | **PASS-LIMITED** | `20`, `21`, `22`; header in all captures; sources above | Site Developer historical; wizard procedure unverified; configuration-wide visibility stated and untested |
| AC-2 | **PARTIAL** | `01`, `06`, `09`, `10`, `16`, `17`, `18` | Exact-case zero rows are observed for SQL Tables and IDOs, each with a passing positive control. The case-insensitive target-variant query was not performed (hook-blocked); the case-insensitive collision claim is inferred. Virtualised inventories not fully scanned. No database-wide claim. |
| AC-3 – AC-12 | **Not evaluated in T1** | — | Wizard not launched. These belong to the wizard-inspection and later tasks. |

Acceptance-check IDs match the brief.

## T8 — Page-1 verification and remaining-page inspection

Task: T8, task_message_id df5c9d01-3273-4f7f-8333-b90467b366b4, cycle 13, worker session 6224dabe-675c-4250-a397-c10c2349e914.
Scope: resume the open wizard; verify page 1 against T7; inspect each subsequent page with Next (navigation only); stop before Finish. No Finish, Save, check-in, check-out, data insertion, Get Database Schema, or optional generator.

### Page-1 verification (before any Next)

Fresh snapshot (T8 start): Mongoose tab selected; wizard open on page 1; Back disabled, Next enabled, Finish disabled.

| Item | Observed (snapshot `e…` refs and screenshots `55`–`59`) | Matches T7? |
|---|---|---|
| IDO Name | `FX_HelloWorld01` (`f1e249`) | Yes |
| IDO Project Name | `FX_HelloWorldProject01` (`f1e256`) | Yes |
| Table Alias | `fxhw` (`f1e264`) | Yes |
| Site Split | checkbox "Site Split" unchecked (`f1e293`; `55`) | Yes |
| Multi-Site Table Name | textbox empty (`f1e302`) | Yes |
| Multi-Site View Name | textbox empty (`f1e309`) | Yes |
| Form Type / Layout / Device Type | `MultiView` / `GridLeft` / `Default` (`f1e271`, `f1e279`, `f1e287`) | Yes |
| Application rows | exactly two: `FX_Code`, `FX_Label` (`f1e335`, `f1e340`) | Yes |
| FX_Code Property Class | empty (`58`, leftmost view) | Yes |
| FX_Code Data Type / SQL Data Type | String / nvarchar (`58`) | Yes |
| FX_Code Property Length | 30 (`59`) | Yes |
| FX_Code Primary Key | **checked** (`59`, Primary Key column visible; accessibility `f1e406`/`f1e409`) | Yes |
| FX_Code Required | **checked** (accessibility `f1e409`; screenshot `55`, Required column) | Yes |
| FX_Code Label String ID / Default Value | empty (`55`; accessibility `f1e410`/`f1e412` empty) | Yes |
| FX_Label Property Class | empty (`58`) | Yes |
| FX_Label Data Type / SQL Data Type | String / nvarchar (`58`) | Yes |
| FX_Label Property Length | 100 (`59`) | Yes |
| FX_Label Primary Key / Required | unchecked (`59`; accessibility `f1e428`/`f1e431`) | Yes |
| FX_Label Label String ID / Default Value | empty (`55`; accessibility `f1e432`/`f1e434`) | Yes |

Every item matches T7. No mismatch was found. The horizontally scrolled rendering concern from T7 is resolved: after scrolling back, the Primary Key column is directly visible (`59`) and shows FX_Code checked, FX_Label unchecked.

Scroll navigation note: the grid scrolled with the pointer over it (`mouse_move_xy` to 1000,700 then wheel). A wheel with the pointer elsewhere had no effect.

### Next operations

| # | Action | Result |
|---|---|---|
| 1 | Next (`f1e455`), once | Advanced to the **last wizard page** (page 2). No error, no validation message, no confirmation dialog. Next is now disabled; Back and Finish enabled. Capture `60`. |

No further Next, no Back, no Finish. Total Next actions: **1**.

### Page 2 (last page) — observed state

| Control | Observed | Evidence |
|---|---|---|
| Create Scripts | checkbox "Create Scripts", **unchecked** (screenshot). The accessibility tree shows the checkbox with no checked/unchecked text state. | `60` (visible state); `t8-snapshot-wizard-page-2-last-page-dialog.yml` (`f1e464`) |
| Instruction text | "Click "Finish" to create the database table, IDO and optional form." | `60`; snapshot `f1e467` |
| Large grey area | A **disabled textbox** (`f1e473`) occupying most of the page. **It exposes no text, value, or name in the accessibility tree.** Visually empty. | `60`; snapshot `f1e473` |
| Back | enabled (`f1e453`); **not pressed** | — |
| Next | **disabled** (`f1e455`) | — |
| Finish | **enabled** (`f1e457`); **NOT pressed** | — |
| Cancel / Help | enabled | — |

### Creation scope — what can and cannot be established before Finish

**Established from visible evidence:**

- The wizard's own text states that Finish creates **"the database table, IDO and optional form"**.
- The IDO is `FX_HelloWorld01` (page 1, `f1e249`), in project `FX_HelloWorldProject01` (`f1e256`).
- Two application fields: `FX_Code` (String / nvarchar / 30) and `FX_Label` (String / nvarchar / 100). Both have empty Property Class, Label String ID, and Default Value.
- The optional form is not a checkbox on this page. The only Create Scripts option is unchecked. The form offer is expected as a **post-Finish prompt** (per the transcript and EXP-038/T4 observations), which must be declined. Not verified here.

**NOT established (stop conditions for the FX_ naming boundary):**

1. **The physical SQL table identifier.** No page shows the table name Finish will create. The Table Name textbox under Multi-Site (`f1e302`) is for Site Split and is empty and unchecked. The alias `fxhw` is an alias, not the physical name. The physical name therefore cannot be determined before Finish. It may equal `FX_HelloWorld01`, carry a generated suffix, or be tenant-qualified. None of these is confirmed.
2. **The content of the grey preview area.** It is a disabled textbox with no exposed text. Whether it holds a script or summary of intended objects is unknown. With Create Scripts unchecked, it may be empty by design, but this is inference.
3. **Any additional generated artifacts** (system columns, keys, indexes, procedures, triggers, IDO properties, base-table bindings). None is listed on any page visited.
4. **Whether Finish accepts an empty Property Class** on both fields. Not stated on any page.
5. **The Create Form outcome** after Finish. Expected as a prompt, not verified.

### Stop decision (T8)

The task instruction says: if the wizard does not expose enough information to determine its intended effects safely, **stop at the current page and document what cannot be established**. Items 1 and 2 above prevent confirming that the physical table identifier stays inside the FX_ naming boundary, so the intended creation scope **cannot be fully determined sufficiently to protect the FX_ naming boundary**. The worker therefore **does not proceed to Finish**. The wizard is left open on this last page.

This is not a wizard error. No ComponentFlags, validation, or load failure was observed. It is a determination that the pre-Finish scope is not visible enough to commit safely.

### AC status after T8

| AC | Status | Note |
|---|---|---|
| AC-1 | PASS-LIMITED (unchanged) | Scope confirmation still never seen (Identify dialog absent on every launch). |
| AC-2 | **PARTIAL** (unchanged) | Exact target queries: zero rows (`09`, `17`). Case-insensitive mechanism demonstrated on the same fields (`06`/`10`, `16`/`18`). **Case-variant absence for FX_HelloWorld01 is an inference from that mechanism, not a separately executed lowercase-target query.** Inventory completeness is limited: SQL Table Name combo and IDO list were scanned only in their first visible rows. |
| AC-3 | PASS (unchanged) | Wizard reached, no error. |
| AC-4 | **PARTIAL.** IDO Name, IDO Project, Table Alias, Multi-Site, and Form Type / Layout / Device Type are verified on page 1. **Not met before Finish:** the physical table identifier and the grey preview content are not determinable (see Stop decision). |
| AC-5 | **PASS-LIMITED** at grid level (unchanged). FX_Code and FX_Label values verified this turn (`58`, `59`, accessibility). Physical SQL length unverified until post-Finish. |
| AC-6 | **Not met as readiness.** Pre-Finish inspection could not identify the physical table identifier, so the scope is not fully established. No Finish performed. |
| AC-7 to AC-12 | Not evaluated (no Finish). |

### Readiness summary (T8)

- **AC-2:** partial; the case-variant point must be labelled inference.
- **AC-4:** not ready. Needs a visible physical table identifier or an explicit operator statement of it, and the grey area content.
- **AC-5:** grid values ready; physical length unverified.
- **AC-6:** not ready; scope not sufficiently determined.

### Operation counts (T8)

| Operation | Count |
|---|---|
| Next | **1** |
| Back | 0 |
| Finish | **0** |
| Save / check-in / check-out | 0 |
| Create Scripts checkbox | 0 (left unchecked) |
| Get Database Schema / Add Subcollection / Add Row / Delete Row | 0 |
| Field value edits | 0 |
| Pointer move / horizontal wheel scroll (grid viewing only) | 2 / 4 |
| Errors | 0 |
| Fresh recovery snapshots / corrected inspections | 0 / 0 |

### Evidence (T8)

- `55-t8-page1-pre-next-verification.png`: page-1 settled state before Next (IDO Name, project, alias, Site Split, Required on FX_Code checked; Label String ID and Default Value empty). Required column visible; Primary Key column clipped.
- `56`, `57`: scroll attempts (first had no effect; second moved partially). Partial views, not decisive.
- `58-t8-page1-grid-scrolled-to-leftmost-property-class-data-type-key.png`: Property Class empty; Data Type String; SQL Data Type nvarchar for both rows.
- `59-t8-page1-grid-primary-key-column-visible.png`: **decisive for the key settings**: FX_Code Primary Key checked, FX_Label unchecked; Property Length 30 and 100.
- `t8-snapshot-page1-grid-settled-pre-next.yml`, `t8-snapshot-page1-grid-leftmost-after-scroll.yml`: accessibility state of both rows (values above).
- `60-t8-wizard-page-2-after-next-1.png`: last wizard page: Create Scripts unchecked, instruction text, empty grey preview area, Next disabled, Finish enabled.
- `t8-snapshot-wizard-page-2-last-page-dialog.yml`: dialog accessibility state (grey area exposes no text).

Not captured: any Finish result, any created object (none occurred).

## T12 — IDO check-in (one), fresh verification, Form-absence check, ordinary close/reopen, final audit

Task: T12, cycle 21, run R-20261010-133302-x5e3, worker session 6224dabe-675c-4250-a397-c10c2349e914. Stages A–E as instructed. Browser state: Mongoose tab, DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Access As `G6R`.

### Stage A — IDO preflight (read-only, FiP)

- IDOs tab selected from the clean Sql Columns surface (`80`). FiP criteria `FX_HelloWorld01` with F4 returned **exactly one** IDO row (`81`, `t12-snapshot-stageA-idos-fx_helloworld01-f4-settled.yml`).
- Identity: IDO Name `FX_HelloWorld01`; Project Name `FX_HelloWorldProject01`; Access As `G6R`; Revision Num `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; row checkbox **checked**; Check In enabled; Save disabled.
- Tables sub-tab (`82`): one row, Table Name `FX_HelloWorld01`, Table Alias `fxhw`, Table Type `Primary Base`, Join Type `Inner`.
- Starting state: **checked out** by the operator's session. Consistent with T10 (`64`).

### Stage B — one check-in of FX_HelloWorld01

| Step | Observation | Evidence |
|---|---|---|
| Check In (one click, IDO FX_HelloWorld01 only) | Notice dialog, title "Infor Mongoose Application Development Framework - IDOs": **"Source control integration is currently disabled in the current configuration. The item will not be checked in to source control."** Single OK button. | `83-t12-stageB-checkin-notice-dialog-before-ok.png` |
| Notice OK (one click) | Dialog dismissed. No save or multi-object prompt appeared. | — |
| Fresh exact query (grid FiP, `FX_HelloWorld01`, F4) | Revision Num **2** (was 1). Locked By **empty**. Check Out **enabled**; Check In and Undo Check Out not active. Access As `G6R`; Project `FX_HelloWorldProject01`. Save disabled. | `84-t12-stageB-post-checkin-fresh-exact-query-idos.png`, `t12-snapshot-stageB-post-checkin-fresh-query.yml` |
| Properties tab after check-in | FX_Code, FX_Label and system properties listed (not separately read in this stage). | `85-t12-stageB-post-checkin-properties-tab.png` |

Check-in count: **1**. No repeat, no Undo Check Out, no check-out. Outcome observed at UI level only; the source-control notice means no source-control check-in occurred.

### Stage C — Form-absence check (no Form opened, no edit mode)

- Select Form dialog opened from the Open toolbar (`86`). A filter positive control was attempted by typing `IDO Projects` (`87`); the filter did not narrow the list, so the list was scrolled manually. The positive control for the FX_ block was the visible FX_TestBlank01/02 entries in the scroll captures (`89`–`91`).
- Typed `FX_HelloWorld01` in the filter (`88`): **the list did not narrow**; no row matched.
- Scrolled through the caption-sorted list (`89`, `90`, `91`). The FX_ caption block was visible across captures 90–91 (FX_ButtonCaptionLab01, FX_ComponentLab01/02, FX_ComponentRecoveryLab02/03, FX_FormPropertyLab05/06); **no FX_HelloWorld01 entry** was present in the captured FX_ rows.
- Dialog closed with **Cancel** (`92`). OK was never pressed, so no Form was opened.
- **Limitation:** the Select Form filter did not function in this build; the list is virtualised; non-FX_ captions were not exhaustively scanned. The result is a *qualified absence* from the visible list, not a catalogue query.

### Stage D — ordinary close, reopen, re-query

| Step | Observation | Evidence |
|---|---|---|
| Close IDOs tab (normal tab close) | No save prompt. | `93-t12-stageD-after-close-idos-tab.png` |
| Select Form → reopen IDOs | Opened via Select Form (`96`–`99`). | `99-t12-stageD-idos-reopened-via-select-form.png` |
| Read-only field fill attempt on CollectionNameEdit (`mgedit-2644`) | **Timed out** (element visible/enabled not satisfied; the field was read-only). No change made. F4 with blank criteria then returned a blank-criteria placeholder row (no data change, Save disabled, no dialog). | `100-t12-stageD-idos-fip-readonly-field-after-f4-state.png`, `t12-snapshot-stageD-idos-after-readonly-type-failure-and-f4.yml` |
| Recovery: one fresh snapshot and one corrected attempt | Typed `FX_HelloWorld01` into the active IDO Name criteria textbox (ref `f1e4364`), F4. Returned **one** data row: FX_HelloWorld01, Revision Num 2, Revision Date 10/10/2026, Locked By empty, Check Out enabled, Save disabled, no dialog. Tables sub-tab: `FX_HelloWorld01 / fxhw / Primary Base / Inner`. | `101-t12-stageD-idos-fx_helloworld01-requery-after-corrected-attempt.png` |
| Properties after reopen | FX_Code: Bound to Column FX_Code, sequence 1, Key Sequence 1, String 30, Required checked. FX_Label: Bound to Column FX_Label, sequence 2, String 100, not Required. System properties listed separately (CreatedBy, UpdatedBy String 128; CreateDate, RecordDate; RowPointer GUID; NoteExistsFlag, InWorkflow Byte). | `108-t12-stageD-idos-fx_helloworld01-properties-after-reopen.png` |
| Close SQL Tables tab (normal tab close) | No save prompt. | `94-t12-stageD-sql-tables-selected-before-close.png`, `95-t12-stageD-after-close-sql-tables-tab.png` |
| Select Form → reopen SQL Tables | List scrolled to the S section; row `Sql Tables` (name `SqlTables`) activated. A caution alert "Please be very careful using these forms…" appeared; dismissed with its **OK** (informational, not a save prompt). | `102`, `103` (scroll), `104` |
| SQL Tables grid criteria `FX_HelloWorld01` (grid criteria editor, not the Attributes combobox), F4 | One data row: Table Name `FX_HelloWorld01`, Schema `dbo`, Multi-Site unchecked. Constraints: **Primary Key `PK_FX_HelloWorld01`** (description `FX_Code`); **Index `IX_FX_HelloWorld01_RowP…`** (description `RowPointer`). Update Current Table disabled. | `104-t12-stageD-sqltables-reopened-fx_helloworld01-grid-criteria-f4.png` |
| Columns… (read-only) | Nine columns: FX_Code, FX_Label, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow. | `105-t12-stageD-sqlcolumns-reopened-fx_helloworld01.png` |
| FX_Code (from `105`, from T11 `77`) | Column Id 2; nvarchar; System Data Type nvarchar; **Length 30**; **Is Nullable unchecked**; **Primary Key checked**; Key Sequence 1. | `105`, `77` |
| FX_Label (row selected) | Column Id 3; nvarchar; **Length 100**; **Is Nullable checked**; Primary Key unchecked. | `106-t12-stageD-sqlcolumns-fx_label-row-selected.png` |
| Close Sql Columns (normal) | Save disabled, no prompt. | `107-t12-stageD-final-sqltables-clean-after-sqlcolumns-close.png` |

Stage D settled state (`107`, `108`): IDOs and SQL Tables surfaces open, clean; IDOs at Properties sub-tab for FX_HelloWorld01 (checked in, Save disabled); SQL Tables showing FX_HelloWorld01 with Update Current Table disabled; no dialog.

### Stage E — object audit, operation audit, AC matrix

**Object audit (UI-observed only):**

| Object | Identity observed | Notes |
|---|---|---|
| SQL table | `dbo.FX_HelloWorld01` (Table Name `FX_HelloWorld01`, Schema `dbo`) | Physical name equals the requested name in the UI; the database catalogue was not queried. |
| SQL constraints | `PK_FX_HelloWorld01` (Primary Key on FX_Code); `IX_FX_HelloWorld01_RowPointer` (Index, description RowPointer) | Index name was truncated in the grid (`IX_FX_HelloWorld01_RowP…`); full name was read in T11 (`76`). |
| Application column 1 | `FX_Code`: nvarchar, length 30, NOT NULL, primary key sequence 1 | Read in Sql Columns (`105`, T11 `77`). |
| Application column 2 | `FX_Label`: nvarchar, length 100, nullable | Read in Sql Columns (`106`, T11 `78`). |
| System columns (listed, types not individually read except CreatedBy in T11) | `CreatedBy`, `UpdatedBy`, `CreateDate`, `RecordDate`, `RowPointer`, `NoteExistsFlag`, `InWorkflow` | Generated by the wizard; kept separate from the two requested fields. CreatedBy is UsernameType nvarchar(128) with default `suser_sname()` (T11 `79`). Other six types not read. |
| IDO | `FX_HelloWorld01` in project `FX_HelloWorldProject01`, Access As `G6R`, Revision Num 2 | Base table `FX_HelloWorld01` alias `fxhw` Primary Base Inner. |
| IDO properties | FX_Code (Bound to Column, String 30, Required), FX_Label (Bound to Column, String 100), plus 7 system properties | `108`. |
| Form | None observed. Create Form declined with No (T9). Absence is qualified (see Stage C). | — |
| Check-in | 1 (FX_HelloWorld01 only). Source control not involved. | `83`, `84`. |

**Operation audit (T12 only):**

| Operation | Count |
|---|---|
| Finish (wizard) | 0 in T12 (the single Finish was T9) |
| Create Form Yes | 0 |
| Save (any) | 0 |
| Check In | **1** (FX_HelloWorld01 only) |
| Check Out / Undo Check Out | 0 / 0 |
| Notice dialog OK (check-in) | 1 |
| Sql Tables caution alert OK | 1 (informational) |
| Save-changes prompt responses | 0 (T10 `Yes` and T11 `No` are historical; no prompt appeared in T12) |
| Select Form opens | 3 (Stage C 1, cancelled; Stage D IDOs 1, Sql Tables 1) |
| Select Form Cancel | 1 (Stage C) |
| Select Form OK | 0 |
| Tab closes (normal) | 3 (IDOs, SQL Tables, Sql Columns) |
| Tab reopens | 2 (IDOs, SQL Tables) |
| Columns… opens | 1 |
| F4 executions | 5 (Stage A 1; Stage B 1; Stage D blank-criteria 1 (placeholder); Stage D corrected 1; SQL Tables 1) |
| Grid criteria entries (successful) | 4 (IDO Stage A 1; IDO Stage B fresh query 1; IDO Stage D corrected entry 1; SQL Tables grid criteria 1) |
| Failed or ineffective entries | 3 (Select Form filter typed 2, no narrowing; IDO Stage D read-only field fill 1, timed out) |
| Fill/type actions on read-only controls | 1 timed out (CollectionNameEdit, `mgedit-2644`); no effect |
| Recovery | 1 fresh snapshot and 1 corrected attempt (IDO Name criteria), both within the brief's allowance |
| Application rows / data inserted | 0 |
| Deletes / constraint or table changes | 0 |
| Network requests (promptresp) | None captured in T12 |
| Errors | 1 read-only fill timeout (above). No save/check-in error. |

**Acceptance matrix** (statuses are UI-level; "PASS-LIMITED" means the claim is supported only within the stated limit):

| AC | Status | Evidence | Limits |
|---|---|---|---|
| AC-1 | **PASS-LIMITED.** Documented wizard procedure, AGENTS.md authorization, EXP-039 project, DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, authenticated UI, and User scope displayed. | T1/T4 captures (`10`–`20`, `29`), current `101`, `108`. | The Identify Your Editing Scope dialog never appeared; User scope is displayed, not affirmatively confirmed. **SQL table and IDO visibility may be configuration-wide**, so User editing scope does not isolate these objects from other users. Site Developer evidence not separately captured. |
| AC-2 | **PARTIAL.** Pre-creation exact-case zero rows observed (`09` SQL Tables; `17` IDOs). Case-insensitive mechanism demonstrated on other target fields (`06`/`10`, `16`/`18`). | `06`, `09`, `10`, `16`, `17`, `18`. | **Lowercase absence for FX_HelloWorld01 is an inference from the case-insensitive positive controls**, not a separately executed lowercase target query. Pre-creation inventory visibility limited (FiP grid first visible rows; not a catalogue). |
| AC-3 | PASS (T3–T4 evidence; not re-run). | `29`, `33`, `34`. | — |
| AC-4 | **NOT MET** (pre-Finish). The physical table identifier was not displayed before Finish, so the pre-Finish inspection did not establish the intended SQL table name. The operator accepted this residual uncertainty for T9. | T8 `58`, `59`. | Table Alias `fxhw` was operator-authorized; Multi-Site and Form Type/Layout/Device Type verified on page 1 in T8. |
| AC-5 | **PASS-LIMITED.** FX_Code String 30 (PK, Required) and FX_Label String 100 verified at grid level pre-Finish (`52`–`54`, `58`–`59`) and at physical level post-Finish (`105`, `106`, `108`). | `105`, `106`, `108`. | Physical lengths read from the Sql Columns UI, not the database catalogue. |
| AC-6 | **PARTIAL.** Exactly one Finish (T9); wizard reported "Table and IDO created."; no second Finish, no alternative wizard. | `61`, `62`, `63`. | Pre-Finish scope not fully established (see AC-4); the wizard's report was not an independent verification at Finish time. |
| AC-7 | **PASS-LIMITED** for the Create Form decline (`61`, `62`). Form absence: **PASS-LIMITED**, not an exhaustive inventory. | `61`, `62`, `88`–`92`. | Select Form filter did not narrow the list; list virtualised; FX_ captions scanned; non-FX_ not exhaustively scanned. No application data rows were inserted (0 in all tasks). |
| AC-8 | **PASS-LIMITED.** Table `FX_HelloWorld01` (dbo) retrieved by exact name; FX_Code nvarchar 30 NOT NULL PK; FX_Label nvarchar 100 nullable; system columns listed separately. | `104`, `105`, `106`. | Physical name matches the requested name at UI level; database catalogue not queried. Six system column types not read. |
| AC-9 | **PASS-LIMITED.** IDO `FX_HelloWorld01` retrieved once under `FX_HelloWorldProject01`; base table `FX_HelloWorld01` matches the SQL table; FX_Code and FX_Label properties identified. | `81`, `82`, `101`, `108`. | Project membership shown via the Project Name field; IDO Projects grid not re-read in T12. No unrelated IDO or project record was altered (none edited). |
| AC-10 | **PASS (observed UI).** Initially checked out (`81`); exactly one check-in on FX_HelloWorld01; settled checked in (Revision 2, Locked By empty, Check Out enabled) on fresh query (`84`, `101`). | `81`, `83`, `84`, `101`. | Source-control integration disabled (notice text); no source-control check-in. Revision Num change 1→2 is the observed effect of the check-in. |
| AC-11 | **PASS-LIMITED (same-session UI only).** IDOs and SQL Tables closed normally and reopened through Select Form; fresh queries returned the same table, the same two columns (types and lengths), and the same IDO, base table, properties and project. Save disabled, no pending edits, no validation errors on the recovered surfaces. | `93`–`95`, `99`, `101`, `104`–`108`. | UI recovery in the same browser session only. No durability, cross-session, cache or server-restart claim. |
| AC-12 | PASS for this record and index (evidence matrix written; object and operation audits reconciled). | `evidence/EXP-040/t1-evidence-index.md` (T12 section). | Repository changes limited to this record and `evidence/EXP-040/`. |

**Unresolved items carried forward:**

1. Identify Your Editing Scope dialog never appeared; User scope not affirmatively confirmed.
2. T10 accidental Yes to the SQL Tables save-changes prompt: server outcome not independently established. The record state after T11 No and the clean T12 re-query are consistent with no pending SQL change, but this does not prove the server outcome of the T10 Yes.
3. The row-1 error text on SQL Tables (T10/T11) was not exposed by any rendered UI.
4. Form absence is qualified (non-functional filter; virtualised list).
5. Physical SQL catalogue was not queried; the physical name is the UI identifier only.
6. Portal footer version observed as `2026.10.01` in the T12 snapshot; the version recorded for this environment in earlier notes differs (2026.09.08 / 2026.10.13). Not reconciled.
7. Six system column SQL types not read.

**Browser state at end of T12:** Mongoose tab selected. IDOs tab (Properties sub-tab) shows `FX_HelloWorld01` checked in; SQL Tables tab shows `FX_HelloWorld01` clean; IDO Projects tab present, unchanged. Save disabled on both. No dialog open. No pending edits.

## T11 — SQL Tables recovery, Customer verification, FX_HelloWorld01 column verification

Task: T11, task_message_id 701500de-f483-4ac6-b40a-1784fde69f6f, cycle 19, worker session 6224dabe-675c-4250-a397-c10c2349e914.

### Correction to the T10 record (made in T11)

T10 described the pending SQL Tables change as "a Filter-in-Place criteria value and no table-definition edit". **That description is not supported.** In T10 I typed `FX_HelloWorld01` into the **Attributes Table Name combobox** (the detail area beside the grid), not the grid criteria cell, while the detail pane displayed the `Customer` record. The subsequent "already exists as a TableName" prompt and the save-changes prompt therefore concerned a pending edit to that displayed record, and the T10 "Yes" answered a save of that edit. The T11 reload (below) shows the consequence: after the discard and reload, `Customer` still exists under its own name with its original constraints. That is observed, and it is consistent with no persisted rename, but the server-side outcome of the T10 Yes is still not independently established.

### Step 1 — Inspect the row-1 error indicator (no field changed)

- Fresh snapshot: row 1 showed `FX_HelloWorld01`, Save enabled, no dialog. Screenshot `70` shows a red badge with "1" in row 1's row-header area.
- The badge is **not exposed in the accessibility tree**: a find for error, invalid, required, tooltip, or message returned no matches.
- Hover on the badge (pointer move only, `71`): **no tooltip or message appeared.**
- **Result: the error text could not be exposed through the rendered UI. Its contents are not recorded.** No text was invented.

### Step 2 — Discard the pending client-side change without saving

- Toolbar **Refresh** clicked once (`f1e37`). Result: a save-changes prompt, "Do you want to save your changes to SQL Tables?", with **Yes** (`f1e278`, focused), **No** (`f1e280`), and **Cancel** (`f1e282`) (`72`).
- Fresh snapshot taken immediately before responding (as the brief requires). No is `f1e280`.
- Clicked **No** exactly once. Locator used: `getByRole('button', { name: 'No', exact: true })`.
- Network confirmation: the `refresh` event (request 1), then `promptresp` with argument **`"No"`** (request 2). This supersedes the T10 `promptresp "Yes"`.
- Settled state (`73`, `t11-snapshot-step2-settled-after-no.yml`): no dialog; **Save `[disabled]`**; row 1 is **`Customer`** (schema `dbo`); the error badge is **gone**; the Table Name combo reads `Customer`; the constraints panel lists **PK_Customer** (Primary Key, ID) and **IX_Customer_RowPointer** (Index, RowPointer).
- **Result: the client-side pending change is discarded and the surface is clean.** Server-side integrity is evidenced by the reload returning `Customer` with its constraints (see Step 3).

### Step 3 — Verify Customer through the grid criteria cell

- Filter-in-Place toolbar clicked once (`f1e40`). The grid criteria row was identified by a fresh snapshot and screenshot (`74`): row 1 Table Name cell carried `Customer` with an empty Schema cell; the constraints panel was empty (it is a criteria row, not a record).
- Grid Table Name criteria cell clicked (`f1e352`); it became an active grid combobox (`f1e369`). The **Attributes combobox (`f1e262`) was not used** for this query.
- Set the grid criteria to `Customer`, Tab, F4 (`75`).
- **Result:** one data row, Table Name `Customer`, Schema `dbo`, Multi-Site unchecked. Constraints: **PK_Customer** (Primary Key, Unique checked, Clustered checked, description ID) and **IX_Customer_RowPointer** (Index, Unique checked, Clustered unchecked, description RowPointer). Save disabled.
- **Customer verification: PASS (observed, after a reload-equivalent Refresh).** Its name and both constraints match the T1 positive-control observation (`06`, `10`).

### Step 4 — FX_HelloWorld01: query, columns, system columns

- Filter-in-Place clicked again; grid criteria cell edited to `FX_HelloWorld01` (grid combobox `f1e369`), Tab, F4 (`76`).
- **Retrieved data row** (not a criteria row): Table Name `FX_HelloWorld01`, Schema `dbo`. The constraints panel shows a **Primary Key `PK_FX_HelloWorld01`** (description `FX_Code`) and an **Index `IX_FX_HelloWorld01_RowPointer`** (description `RowPointer`). These are constraints of the retrieved table, so the row is a real record. Save disabled.
- Columns... (`f1e154`) opened the **Sql Columns** form (read-only inspection; no field edited) (`77`). The table's column list has nine rows: FX_Code, FX_Label, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow.

**Requested application columns (Sql Columns detail, observed):**

| Column | Column Id | Data Type | System Data Type | Length | Is Nullable | Primary Key | Key Sequence | Is Computed | Default | Schema / Table |
|---|---|---|---|---|---|---|---|---|---|---|
| **FX_Code** | 2 | nvarchar | nvarchar | **30** | unchecked (NOT NULL) | **checked** | **1** | unchecked | empty | dbo / FX_HelloWorld01 |
| **FX_Label** | 3 | nvarchar | nvarchar | **100** | **checked** (NULL allowed) | unchecked | empty | unchecked | empty | dbo / FX_HelloWorld01 |

Both application types and lengths match the requested String 30 and String 100 (`77`, `78`).

**Automatically generated system columns (separate from the two requested fields):**

| Column | Column Id | Data Type | System Data Type | Length | Nullable | Default | Evidence |
|---|---|---|---|---|---|---|---|
| CreatedBy | 4 | UsernameType | nvarchar | 128 | not nullable | `suser_sname()` | `79` (detail read) |
| UpdatedBy | 5 (inferred from list order; not read) | — | — | — | — | — | list only (`77`) |
| CreateDate | — | — | — | — | — | — | list only |
| RecordDate | — | — | — | — | — | — | list only |
| RowPointer | — | — | — | — | — | — | list only; index `IX_FX_HelloWorld01_RowPointer` |
| NoteExistsFlag | — | — | — | — | — | — | list only |
| InWorkflow | — | — | — | — | — | — | list only |

Types for UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, and InWorkflow were **not individually read** in the SQL Columns detail; their IDO-side types were observed in T10 (`65`) and are not the same as SQL types. They are recorded as **unverified at SQL level**.

**Physical name:** the physical table identifier is `FX_HelloWorld01` in schema `dbo`. No suffix or tenant qualification is displayed (Sql Columns "Table Name" and the SQL Tables row). The name stays inside the FX_ boundary. No naming finding.

**Dependencies visible:** the primary key `PK_FX_HelloWorld01` on FX_Code, the index `IX_FX_HelloWorld01_RowPointer` on RowPointer, and the system-column default `suser_sname()` on CreatedBy. Foreign keys and other constraints were not observed in the constraint panel.

**Nullability note:** FX_Code is NOT NULL (as a primary key). FX_Label is nullable. The wizard's "Required" setting on FX_Label was unchecked, which is consistent with the nullable column; the wizard "Required" on FX_Code, which is consistent with NOT NULL.

### Step 5 — Recording the incident and recovery

| Item | Status |
|---|---|
| Operator hypothesis: the Customer record may have been changed | **Customer is intact after a Refresh reload**: name and both constraints observed (Step 3). Consistent with no persisted rename. Not an exhaustive server check. |
| T10 accidental Yes (save prompt) | Its server outcome is **not independently established**. The post-reload Customer state argues against a persisted rename; the Yes was **not** repeated. |
| Authorised No (T11 discard) | Observed: `promptresp "No"` (request 2 of the Refresh sequence). |
| Client-side clean state | Observed: Save disabled, no dialog, error badge gone, Customer displayed (`73`). |
| Server-side integrity of the new table | Observed by reload-equivalent query: FX_HelloWorld01 retrieved with PK and index; column metadata read from the SQL Columns form. This is **UI-level** observation, not a database query. |
| Error text in the row-1 badge | **Not exposed** by any rendered UI element (Step 1). Recorded as a limitation. |

### Prompt labels and responses (T10–T11)

| When | Prompt | Buttons | Response |
|---|---|---|---|
| T10, after typing into the Attributes Table Name combobox | "FX_HelloWorld01 already exists as a TableName or another ViewName. Do you want to change the value now?" | Yes / No | **No** (intended; `promptresp No`) |
| T10, next | "Do you want to save your changes to SQL Tables?" | Yes / No / Cancel | **Yes** (**unintended**; wrong ref; `promptresp Yes`) |
| T11 Step 2, after Refresh | "Do you want to save your changes to SQL Tables?" | Yes / No / Cancel | **No** (authorised; `promptresp No`) |
| T11 Step 2 | (none further) | — | — |

### Operation counts (T11)

| Operation | Count |
|---|---|
| Hover (row-1 badge) | 1 |
| Refresh (toolbar) | 1 |
| Save-changes prompt responses | **No: 1 (authorised)** |
| Save (any) | **0** |
| Filter-in-Place toolbar clicks | 2 (Customer; FX_HelloWorld01) |
| Grid criteria entries | 2 (`Customer`; `FX_HelloWorld01`) |
| F4 executions | 2 |
| Grid cell activations (click) | 2 (criteria cell for Customer; criteria cell for FX_HelloWorld01) |
| Columns... opens | 1 |
| Sql Columns row selections (row-number clicks, read-only) | 2 (FX_Label; CreatedBy) |
| Check-in / check-out / IDO change | 0 |
| Form inventory / close / reopen / add rows / constraint or table change / new creation | 0 |
| Recovery snapshots (fresh) | 0 used (the brief's pre-response fresh snapshot was taken as required; not a recovery) |
| Corrected inspections | 0 |
| Errors observed | 0 new errors; the row-1 error contents remain unexposed |

### Evidence (T11)

- `70`: fresh state before Step 1: row-1 badge, Save enabled.
- `71`: hover on the badge: no tooltip or message.
- `72`: save-changes prompt after Refresh (Yes / No / Cancel).
- `73`: settled clean state after No: Customer, no badge, Save disabled, constraints PK_Customer and IX_Customer_RowPointer.
- `74`: Filter-in-Place mode; criteria row identified.
- `75`: Customer grid criteria F4 result: one data row with constraints.
- `76`: FX_HelloWorld01 grid criteria F4 result: data row with PK_FX_HelloWorld01 and IX_FX_HelloWorld01_RowPointer.
- `77`: Sql Columns opened: nine-column list and FX_Code detail (length 30, nvarchar, PK, key 1, not nullable).
- `78`: FX_Label detail (length 100, nvarchar, nullable, not PK).
- `79`: CreatedBy detail (UsernameType, nvarchar 128, default `suser_sname()`).
- Snapshots: `t11-snapshot-step2-settled-after-no.yml`, `t11-snapshot-step3-customer-f4-settled.yml`, `t11-snapshot-step4-fx_helloworld01-f4-settled.yml`, `t11-snapshot-step4-sql-columns-after-fx_label-select.yml`; network: `t11-network-requests-after-step2-no.txt`.

### Acceptance checks (T11)

| AC | Status | Note |
|---|---|---|
| AC-8 | **PASS-LIMITED (observed UI).** The table is retrieved by its exact name `FX_HelloWorld01` (dbo). FX_Code nvarchar(30) NOT NULL PK; FX_Label nvarchar(100) nullable. System columns listed (CreatedBy detail read; others listed only). | Physical length is the Sql Columns "Length" field; the database's own catalogue was not queried. SQL types for six system columns not individually read. |
| AC-9 | PASS-LIMITED (T10 IDO + T11 table). Base table `FX_HelloWorld01` matches the SQL table name. | Project membership from T10. |
| AC-10 | Not performed in T11 (the brief forbids check-in). The IDO remains **checked out** as observed in T10. | Operator decision pending. |
| AC-11 | Not evaluated (no close/reopen cycle in T11). | — |
| AC-7 | Not evaluated (Form inventory not checked in T11). | — |
| AC-2 | PARTIAL (unchanged). Case-variant absence inferred from positive controls. | — |

### Browser state at end of T11

Mongoose tab selected. **Sql Columns** tab active showing FX_Label-or-CreatedBy detail (last selected row: CreatedBy). **Save disabled.** No dialog open. The Sql Tables tab still has `FX_HelloWorld01` in its grid criteria/row editor, with Save disabled at its last snapshot. IDOs and IDO Projects tabs unchanged. No pending edits were made in T11.

## T10 — Post-Finish read-only inventory (IDO verified; SQL Tables stopped after an unintended prompt response)

Task: T10, task_message_id 0644493f-7bf8-49c2-9a40-6d4d62e045fe, cycle 16, worker session 6224dabe-675c-4250-a397-c10c2349e914.

### IDO `FX_HelloWorld01` — independently observed (IDOs maintenance form)

Retrieved by an exact Filter-in-Place query (`FX_HelloWorld01`, F4). One **data** row (not the criteria row): IDO Name `FX_HelloWorld01`, Project Name `FX_HelloWorldProject01`, Access As `G6R`, Revision Num `1`, Revision Date `10/10/2026`, Locked By `anton.ramos@3mworks.com.ph`, Label String ID `oFX_HelloWorld01`, Caption `oFX_HelloWorld01`, Description empty. Evidence: `64`, `t10-snapshot-idos-fip-fx_helloworld01-post-finish.yml`.

- **Base table (Tables tab):** `FX_HelloWorld01`, Table Alias `fxhw`, Table Type `Primary Base`, Join Type `Inner`. The physical table identifier as displayed by the IDO matches the IDO name exactly; no suffix or tenant qualification is displayed.
- **Check-out state (initial, not changed):** the IDO is **checked out**. Check In is enabled, Undo Check Out is disabled, and the IDO row checkbox is checked. Locked By is the signed-in user. **No check-in was performed** (not authorised for T10; the next task needs the operator's decision).
- **Properties (Properties tab, screenshot `65`, verified against the rendered columns):**

| Seq | Property | Property Type | Column | Key Seq | Data Type | Length | Column Type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **FX_Code** | Bound to Column | FX_Code | **1** | String | **30** | nvarchar | no | **yes** |
| 2 | **FX_Label** | Bound to Column | FX_Label | 0 | String | **100** | nvarchar | no | no |
| 3 | CreatedBy | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes | no |
| 4 | UpdatedBy | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes | no |
| 5 | CreateDate | Bound to Column | CreateDate | 0 | Date | — | CurrentDateType | yes | no |
| 6 | RecordDate | Bound to Column | RecordDate | 0 | Date | — | CurrentDateType | yes | no |
| 7 | RowPointer | Bound to Column | RowPointer | 0 | GUID | — | RowPointerType | yes | no |
| 8 | NoteExistsFlag | Bound to Column | NoteExistsFlag | 0 | Byte | — | FlagNyType | no | no |
| 9 | InWorkflow | Bound to Column | InWorkflow | 0 | Byte | — | FlagNyType | no | no |

Property Class, Property Value, and Default Value are empty for FX_Code and FX_Label. Rows 3–9 are the **auto-generated system properties** (separate from the two requested application fields). Their Read Only flags were read from the screenshot, not from the text extraction, which initially mis-mapped the columns.

- **Key:** FX_Code has Key Sequence 1 (the property is a key); FX_Label has none. This is the IDO-side key indicator. The SQL-side primary key on the new table was **not** verified (see the SQL Tables stop below).

### SQL Tables — partial, stopped

- Exact Filter-in-Place query on Table Name `FX_HelloWorld01` returned one data row: `FX_HelloWorld01` / Schema `dbo` / Multi-Site unchecked (`67`, snapshot `t10-snapshot-sql-tables-fx_helloworld01-f4.yml`). This is an observed table row for the exact name.
- Mongoose then showed the prompt "FX_HelloWorld01 already exists as a TableName or another ViewName. Do you want to change the value now?" (`67`). This is an existence indication for the physical name in `dbo`. It was answered **No** (`promptresp No`, intended).
- A second prompt, **"Do you want to save your changes to SQL Tables?"**, appeared (screenshot `68` shows Yes / No / Cancel). **I answered it with Yes, by mistake.** I had intended No (or Cancel). The locator I used resolved to the button labelled Yes, because I passed the wrong ref (`f1e1175` instead of `f1e1176`). The network log confirms it: request 11 is `promptresp` with argument `"Yes"` (request 9 is `promptresp "No"`). No separate save request appears in the log, and no other POST was observed. The server outcome of that Yes is **unknown**.
- **Current SQL Tables state (`69`):** the row now shows a red error badge; the Save button is **enabled** (the client reports a dirty state); the Table Name combo is active with `FX_HelloWorld01` selected; the constraints panel still shows **`Customer`'s** constraints (`PK_Customer`, `IX_Customer_RowPointer`), which is stale and cannot be used for the new table.
- **Not verified in SQL Tables:** the Columns list, the physical SQL length of FX_Code and FX_Label, the SQL primary key, nullability, and system columns. The Columns... button was not used. Per the brief, I stopped rather than repeat a query on this dirty, error-marked surface or open a child dialog that might prompt again.
- **Not done:** no Save retry, no discard (No) of the pending state, no reload, no navigation away, no Form inventory check (Select Form would navigate away from the dirty form and risk a further prompt).

### Form inventory — NOT performed

Stopped before the Select Form check for `FX_HelloWorld01`, because the SQL Tables form is dirty and in an error state. Whether a Form named `FX_HelloWorld01` exists is **unverified**. AC-7 remains open.

### Unintended-action record (must be reviewed by the operator)

- **Unintended `promptresp Yes`** to the SQL Tables save-changes prompt. The intended answer was No or Cancel. Cause: wrong ref (`f1e1175`) passed to a click that resolved by name to Yes.
- Effect: **unknown.** The Save button is enabled afterwards and the row shows an error badge, so the form is not clean. The change that the save prompt covered was the Table Name criteria value (a Filter-in-Place query state), not a table-definition edit. The network log shows no save request, but the log cannot prove the absence of a server-side save.
- Action taken since: none (no retry). The pending state was left as is, because discarding it would also be an unauthorised lifecycle action.
- **Operator decision needed:** whether to clear the dirty SQL Tables state (for example by Cancel or No on a fresh prompt), and whether the uncertain Yes needs to be checked against the server. I have not done either.

### Operation counts (T10)

| Operation | Count |
|---|---|
| Fresh snapshots (T10 start) | 1 |
| Filter-in-Place toolbar clicks (IDOs, SQL Tables) | 1 + 1 |
| Criteria entries (IDOs `FX_HelloWorld01`; SQL Tables `FX_HelloWorld01`) | 1 + 1 |
| F4 executions | 2 |
| IDO Properties tab selection / Tables tab / SQL Tables tab navigation | 1 / 0 / 1 |
| Prompt responses: No (value prompt, intended) | 1 |
| Prompt responses: **Yes (save prompt, unintended)** | **1** |
| Save / Save retry | 0 intended; **1 unintended prompt response (uncertain)** |
| Check-in / check-out / Finish / Create Form / New / Delete / Get Database Schema | 0 |
| Wizard re-open | 0 |
| Fresh recovery snapshots used | 0 (no ref-not-found failure occurred in T10) |
| Corrected inspections used | 0 |

### Evidence (T10)

- `64-t10-idos-fip-fx_helloworld01-f4-post-finish.png`: the IDO data row, project, Access As, checked-out state (Check In enabled, Undo disabled), base table `FX_HelloWorld01` / `fxhw`. Decisive for IDO identity and check-out state.
- `65-t10-ido-properties-tab-fx_helloworld01.png`: the nine properties with Key Sequence, Data Type, Length, Column Type, and Required/Read Only columns. Decisive for FX_Code and FX_Label metadata and system properties.
- `66-t10-sql-tables-tab-selected-before-query.png`: SQL Tables before the query (old `Customer` result).
- `67-t10-sql-tables-fx_helloworld01-exact-f4-result.png`: the exact table row and the "already exists" prompt.
- `68-t10-sql-tables-after-value-prompt-declined-no.png`: the save-changes prompt (Yes / No / Cancel) that the misclick answered.
- `69-t10-current-state-after-misclicked-save-prompt-yes.png`: current stale and error-marked state (row badge, Save enabled, `Customer` constraints).
- `t10-snapshot-idos-fip-fx_helloworld01-post-finish.yml`, `t10-snapshot-sql-tables-fx_helloworld01-f4.yml`, `t10-network-requests-after-sql-yes-misclick.txt`: accessibility and request evidence.

### Acceptance checks (T10)

| AC | Status | Note |
|---|---|---|
| AC-8 | **Not met.** The SQL table was found by its exact name in `dbo`, but its columns, SQL types, and physical lengths were **not** retrieved. | Columns not read; surface dirty. |
| AC-9 | **PASS-LIMITED (observed UI).** The IDO `FX_HelloWorld01` is retrieved once under project `FX_HelloWorldProject01`; base table `FX_HelloWorld01`, alias `fxhw`; properties FX_Code (30, nvarchar, key 1, required) and FX_Label (100, nvarchar) identified. | Associated-project membership read from the IDO grid and form; not cross-checked against the Projects form in T10. |
| AC-10 | Partially: initial state **checked out**, observed. No check-in performed. | Operator decision needed on whether to check in. |
| AC-7 | **Not evaluated.** The Form inventory was not checked. | Stopped before Select Form. |
| AC-2 | PARTIAL (unchanged). The case-variant absence before creation was **inferred** from observed case-insensitive positive controls, not a separately executed lowercase-target query. | — |
| AC-11, AC-12 | Not evaluated (no close/reopen; the evidence matrix is incomplete). | — |

### Browser state at end of T10

Mongoose tab selected. **SQL Tables tab active and not clean:** Save enabled, row error badge, Table Name `FX_HelloWorld01` selected in the combo, stale `Customer` constraints. No dialog open. IDOs tab holds the `FX_HelloWorld01` IDO (checked out, unchanged). IDO Projects tab unchanged.

## T9 — Finish outcome (single Finish performed)

**Finish count: 1.** Pressed once on the verified final page (`f1e258`). Not pressed again.

### Observed sequence

1. **Finish** (one click). The wizard did not show a completion message immediately. The **Create Form** prompt appeared (`61`, `f1e263`): "Do you want to create a form for FX_HelloWorld01?" with a green check beside the title and Yes (focused) / No buttons. Yes was **not** pressed.
2. **Create Form prompt declined with No** (`f1e269`, explicit click; Enter not pressed). The prompt closed.
3. **Completion state of the wizard** (`62`, `t9-snapshot-wizard-completion-state.yml`): the wizard's own message reads verbatim **"Table and IDO created."** Back, Next, and Finish are disabled. A **Close** button appeared (`f1e271`). The Create Scripts checkbox remains unchecked.
4. **Close** (`f1e271`), once: the completed wizard closed. No further wizard action.
5. **Settled state** (`63`): no dialog, no alert, no wizard. Save disabled, New disabled. The IDOs tab still lists only `ABDataServices` (the grid did not refresh to show a new IDO; this is not a verification of the generated IDO).

### Outcome classification

| Question | Finding |
|---|---|
| Completion reported | **"Table and IDO created."** (wizard's own message, verbatim). |
| Classification | The wizard **reports successful** SQL table and IDO generation. This is the wizard's report, **not** an independent verification. |
| Partial / validation / uncertain | None observed. No validation message, no error, no ComponentFlags or authentication message. |
| Create Form | Offered. **Declined with No.** A form was not generated by this session's action (verification of the Form inventory is pending). |
| Physical table identifier | **Not displayed** by any message or page in T9. Not determined. The operator accepted this residual uncertainty. |
| Generated object names visible | IDO `FX_HelloWorld01` (named in the Create Form prompt). No physical SQL table name shown. |

### Operation counts (T9)

| Operation | Count |
|---|---|
| **Finish** | **1** |
| Create Form prompt: **No** | 1 (Yes not pressed; Enter not pressed) |
| Wizard Close (after completion message) | 1 |
| Next / Back | 0 / 0 |
| Save / check-in / check-out | 0 / 0 / 0 |
| Application rows / data inserted | 0 |
| Get Database Schema / Create Scripts | 0 / 0 (checkbox left unchecked) |
| Errors | 0 |
| Recovery snapshots / corrected inspections | 0 / 0 |
| Fresh snapshots (read-only) | 3 (T9 start; post-Finish; completion dialog) |

### Evidence (T9)

- `61-t9-immediately-after-single-finish.png`: the Create Form prompt after the single Finish, naming FX_HelloWorld01. Shows the optional prompt and that the wizard reached a post-Finish state. Does not show the table name.
- `62-t9-after-create-form-declined-no.png`: wizard completion state after declining the form: "Table and IDO created.", Close enabled, Finish disabled.
- `t9-snapshot-wizard-completion-state.yml`: accessibility text of the completion state (verbatim message; disabled controls).
- `63-t9-after-wizard-close-settled-state.png`: settled page after Close: no dialog; IDOs tab lists only `ABDataServices`.

### Limits of this outcome

- "Table and IDO created." is the wizard's report. It is **not** verified against the SQL Tables or IDO maintenance forms. That is the next task.
- No physical SQL table identifier was displayed. The naming boundary check for the physical object is therefore pending.
- The Create Form decline is recorded from the prompt's disappearance and the completion state. Absence of a generated Form has not yet been verified through the Form inventory (AC-7 pending).
- Server response was not captured; the evidence is the rendered message.

## T9 — Authorized single Finish (pre-Finish checkpoint)

Task: T9, task_message_id 43c69a92-980c-43d1-b171-9bfece677b6d, cycle 15, worker session 6224dabe-675c-4250-a397-c10c2349e914.

**Operator authorization (2026-10-10, recorded verbatim in scope):** accept the residual uncertainty about the physical table identifier (not displayed before Finish), and perform exactly one Finish.

**Pre-Finish checkpoint (fresh snapshot, T9 start):**

- Wizard on its final page (same as T8). Create Scripts checkbox unchecked (`f1e243`). Next disabled (`f1e256`). Finish enabled (`f1e258`). Back enabled, not pressed. No validation, authentication, or permission message.
- Submitted configuration per T8 record and evidence (`59`, `58`, `t8-snapshot-*`): IDO Name `FX_HelloWorld01`; IDO Project `FX_HelloWorldProject01`; Table Alias `fxhw`; Site Split unchecked; Multi-Site Table Name and View Name empty; Form Type MultiView, Form Layout GridLeft, Device Type Default. Two application rows only: `FX_Code` (String / nvarchar / 30, Primary Key checked, Required checked, Property Class empty, Label String ID and Default Value empty) and `FX_Label` (String / nvarchar / 100, Primary Key and Required unchecked, Property Class, Label String ID, Default Value empty).
- The page-1 fields could not be re-read in T9 without navigating Back, which the instruction forbids. Their values are taken from the T8 verification (`58`, `59`) and the T8 snapshot.
- Physical table identifier: not displayed on any page (T8). Accepted by operator authorization as residual uncertainty.

## Operator decisions (dated 2026-10-10, recorded for T7)

1. **Delete the original blank first row** with one targeted `Delete Row`, after verifying it is blank and is not `FX_Code`. No bulk delete (`Delete All Rows`).
2. **FX_Code**: String, length 30, **Primary Key checked and Required checked**. Property Class, Label String ID, and Default Value left empty.
3. **FX_Label**: String, length 100, **Primary Key unchecked and Required unchecked**. Property Class, Label String ID, and Default Value left empty.
4. Inspect the remaining wizard pages before the eventual single Finish, and decline any optional offer to generate a maintenance UI.

These decisions settle the key and required settings for FX_Code and FX_Label. They do not settle the String Property Class mapping, which the operator will confirm from the Data Type options or SQL Data Type automatically populated.

## T7 — Blank row deletion and FX_Code / FX_Label field configuration (wizard still open on page 1)

Task: T7, task_message_id e4685553-0e6d-4f23-a68d-9ccb6110f021, cycle 12, worker session 6224dabe-675c-4250-a397-c10c2349e914.
Scope: resume the open wizard on page 1; delete the original blank row once after verification; configure FX_Code and FX_Label. No page advance, no Finish, no Save, no check-in, no Get Database Schema, no bulk delete, no subcollection, no other generation operation.

### Steps (in order)

1. Fresh snapshot (T7 start): Mongoose tab selected; wizard open on page 1 with IDO Name `FX_HelloWorld01`, project `FX_HelloWorldProject01`, Table Alias `fxhw`, MultiView / GridLeft / Default, Site Split unchecked. Name grid: row 1 blank (`f1e335`), row 2 `FX_Code` (`f1e340`). Property grid: row 1 (`f1e393`), row 2 (`f1e416`), both empty with Primary Key and Required unchecked. Finish disabled; Next not pressed.
2. **Blank row selected explicitly**: one click on the blank row's Name cell (`f1e335`). Verified before deletion: the cell is `[selected]`, the editor is empty, and `FX_Code` (`f1e340`) is no longer selected. Capture `41`, which shows the blank row outlined above `FX_Code`.
3. **Delete Row: exactly one press** (`f1e317`). Not Delete All Rows. Capture `42` and snapshot `t7-snapshot-after-single-delete-row.yml`.
4. **Deletion outcome:** the blank row is gone. The Name grid now has one row, `FX_Code`. The property grid has one row (`String` not yet set). No extra blank row remains. `FX_Code` was **not** deleted, so the restore path was not needed.
5. **FX_Code Data Type:** the Data Type cell opened (`43`). The list showed Binary, Byte, Date, Decimal, Float, GUID, Long Integer, NumSortedString, Short Integer, **String**, Big Integer (`44`). **String selected** (`45`). The SQL Data Type was populated automatically as **`nvarchar`** (a character type, not a fixed-length UDT), so no override was needed.
6. **FX_Code Property Length: `30`** entered in the editor (`46`), committed with Tab. Settled value `30` (`47`).
7. **FX_Code Primary Key: one click** on the Primary Key checkbox (`f1e482`). Result: **Primary Key and Required both checked** (`48`). Required was not clicked. The wizard set Required automatically with Primary Key (see Observations).
8. **Add Row: exactly once** (`f1e315`). A second Name row and a matching property row appeared (`49`).
9. **FX_Label:** Name `FX_Label` typed and committed with Tab (`50`). Data Type cell opened; list opened; **String selected** (`51`). SQL Data Type auto-populated as **`nvarchar`**. Property Length `100` entered and committed with Tab (`52`). Primary Key and Required left **unchecked** (not clicked).
10. **Settled verification:** field grid captured (`53`, unscrolled) and scrolled right through the UI to show Required, Label String ID, and Default Value (`54`). Accessibility snapshots: `t7-snapshot-field-grid-fx-code-fx-label.yml` and `t7-snapshot-field-grid-after-horizontal-scroll.yml`.
11. **Page-1 recheck:** IDO Name `FX_HelloWorld01`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxhw`; Form Type MultiView; Form Layout GridLeft; Device Type Default; Site Split unchecked; Multi-Site Table Name and View Name textboxes empty. Add Row, Delete Row, Delete All Rows, and Get Database Schema are present. Finish disabled; Next enabled and **not pressed**.
12. Wizard left **open** on page 1. Stable. No pending unsaved change prompt. No dialog open.

### Field grid: settled values (after T7)

| Field | Name | Property Class | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|---|
| Application field 1 | **FX_Code** | empty (not selected) | **String** | **nvarchar** (auto) | **30** | empty | **checked** | **checked** (set with Primary Key; see Observations) | empty | empty |
| Application field 2 | **FX_Label** | empty (not selected) | **String** | **nvarchar** (auto) | **100** | empty | unchecked | unchecked | empty | empty |

- **Exactly two application rows**, FX_Code and FX_Label. No third row in either grid. The original blank row was removed.
- **Automatically generated system fields visible in the grid: none.** The wizard shows no system-generated column rows on this page. Any system columns (identity, row pointer, audit columns) are generated later and were not observed on page 1. They are therefore **not** recorded here as observed. Post-Finish SQL Tables inspection is needed to record them.
- **Physical SQL column length** for `nvarchar` is **not verified**. The `Property Length` value is what was entered in the wizard. Whether it maps to an `nvarchar(30)` / `nvarchar(100)` column is unknown until post-Finish SQL Tables inspection. This is not claimed.

### Observations (T7)

- **Required coupled to Primary Key.** A single click on Primary Key set both Primary Key and Required on FX_Code. Required was not clicked. This is consistent with the operator decision (both checked on FX_Code). Observed UI behaviour: the wizard appears to set Required when Primary Key is set.
- **Rendering mismatch in the horizontally scrolled view.** After scrolling right (`54`), the header above the checkbox column reads "Key", and the Primary Key checkbox is not drawn in that capture. The unscrolled capture (`53`) and the accessibility tree both show Primary Key checked on FX_Code and unchecked on FX_Label. The mismatch is treated as a header/body scroll rendering issue. It is recorded, not resolved.
- **Cosmetic caption change.** The wizard's caption line changed from `sDataMaintenanceWizard` (T4, T5) to `DataMaintenanceWizard` (after the T7 field edits). No functional effect observed.
- **Link Table/Bind Properties** became enabled after rows were added (it was disabled on the empty grid in T4/T5). Not pressed; no effect.
- **Property Class left empty for both fields**, as the operator decision requires. The wizard did not require a Property Class selection during these edits. Whether Finish accepts an empty Property Class is **not** known; Finish was not reached.
- **Mapping of String.** The Data Type `String` maps to SQL Data Type `nvarchar`. That is the visible mapping on this page. No other mapping was observed. No custom type or fixed-length UDT was offered.
- **Editor left open.** A grid cell editor (`f1e545`) is focused in the property grid after the last commit. No value was typed into it. The next step should not rely on it. Escape was **not** used, because Escape on this wizard may cancel the dialog.

### Operation counts (T7)

| Operation | Count |
|---|---|
| Blank-row selection click (Name cell `f1e335`) | 1 |
| **Delete Row** (blank row only) | **1** |
| Delete All Rows / Get Database Schema / Add Subcollection | **0** |
| Data Type cell clicks (FX_Code, FX_Label) | 2 |
| Data Type combo opened (FX_Code, FX_Label) | 2 |
| Data Type "String" selected (FX_Code, FX_Label) | 2 |
| Property Length cell clicks (FX_Code, FX_Label) | 2 |
| Property Length values typed (`30`, `100`) | 2 |
| Primary Key checkbox click (FX_Code) | 1 (Required not clicked) |
| Required clicks | 0 |
| **Add Row** (for FX_Label) | **1** |
| Field Name typed (`FX_Label`) | 1 |
| Tab commits | 3 (FX_Label name; FX_Code length; FX_Label length) |
| Property Class list opened | 0 |
| Pointer move / horizontal wheel scroll (read-only layout) | 1 / 1 |
| Next / Finish / Save / check-in / check-out / Create Form / Get Database Schema | **0** |
| Application rows added beyond FX_Code and FX_Label | **0** |
| Errors observed | **0** |
| Fresh recovery snapshots used | 0 |
| Corrected inspections used | 0 |

### Evidence (T7)

- `41-t7-blank-row1-selected-before-delete.png`: blank top row selected and outlined, `FX_Code` unselected, before Delete Row. Shows selection identity. Does not show deletion.
- `42-t7-after-single-delete-row-settled.png`: after one Delete Row, one Name row `FX_Code` (in edit mode with text highlighted; not typed into), one empty property row. Decisive for the deletion outcome.
- `t7-snapshot-after-single-delete-row.yml`: accessibility state after deletion (one name row, `FX_Code`).
- `43-t7-data-type-cell-opened-fx-code.png`: Data Type cell open for FX_Code.
- `44-t7-data-type-list-opened-fx-code.png`: the Data Type option list (String present, index 10 of 11).
- `45-t7-fx-code-data-type-string-selected.png`: String selected; SQL Data Type nvarchar auto-populated.
- `46-t7-fx-code-property-length-cell-opened.png`: Property Length editor open.
- `47-t7-fx-code-length-30-committed.png`: length 30 committed.
- `48-t7-fx-code-primary-key-clicked.png`: Primary Key checked and Required checked on FX_Code (Required by coupling).
- `49-t7-after-single-add-row-for-fx-label.png`: second row created by the single Add Row.
- `50-t7-fx-label-name-committed.png`: FX_Label name committed.
- `51-t7-fx-label-data-type-string-selected.png`: FX_Label String selected; nvarchar auto-populated.
- `52-t7-fx-label-length-100-committed.png`: FX_Label length 100 committed; both key checkboxes unchecked.
- `53-t7-field-grid-settled-two-rows.png`: settled two-row grid (Name, Property Length, Decimal Precision, Primary Key). Shows FX_Code checked and FX_Label unchecked on Primary Key. Does not show Data Type or Required in this view.
- `54-t7-field-grid-scrolled-right-hidden-columns.png`: scrolled view showing Required (FX_Code checked, FX_Label unchecked), Label String ID empty, Default Value empty. The Primary Key checkbox is not drawn in this capture (see Observations).
- `t7-snapshot-field-grid-fx-code-fx-label.yml` and `t7-snapshot-field-grid-after-horizontal-scroll.yml`: accessibility state of all grid rows and columns.

### Acceptance checks (T7)

| AC | Status | Proof | Gap |
|---|---|---|---|
| AC-4 | **PARTIAL** (unchanged) | Page-1 identity and defaults verified (`53`, `54`, page-1 recheck). | Later wizard pages not yet inspected (the instruction forbids advancing here). Empty Property Class acceptance at Finish unknown. Multi-Site Table/View values verified from the accessibility tree only. |
| AC-5 | **PASS-LIMITED** at grid level | `53`, `54`, the two accessibility snapshots: two application rows, FX_Code String / 30 / key-checked, FX_Label String / 100 / unkeyed. Automatically generated system fields: none visible on page 1. | Physical SQL column length unverified until post-Finish. Field definitions must be re-checked immediately before Finish. Empty Property Class not yet proven acceptable by Finish. |
| AC-3 | PASS (unchanged, from T4/T5) | Wizard open, no error. | — |
| AC-6 to AC-12 | Not evaluated | — | No Finish. |

### Blockers and open items (T7)

1. **Empty Property Class.** Both fields have an empty Property Class, as decided. Whether Finish or a later page requires a class is unknown.
2. **Physical length mapping** from Property Length to SQL `nvarchar` length: unverified. Not claimed.
3. **Remaining wizard pages** have not been inspected (the instruction stops page-1 work here). They must be inspected before the single Finish, and any Create Form offer declined.
4. **Scope confirmation** (the Identify Your Editing Scope dialog) has never appeared in T3, T4, T5, or T7 launches. Unchanged.
5. **Header/body rendering mismatch** in the scrolled grid view (recorded above).

### Browser state at end of T7

- Mongoose tab selected. Data Maintenance Wizard **open on page 1**, stable. Field grid: FX_Code and FX_Label configured as above. One grid cell editor is focused but holds no typed value.
- Finish disabled; Next enabled and **not pressed**. No Save, no check-in, no object created.
- The IDOs tab underneath is on `ABDataServices` (unedited).

## T6 — Row 1 inspection (STOPPED: row 1 identity ambiguous; no grid change)

Task: T6, task_message_id a2b2d46f-aebc-41c5-9c05-d086b8d90898, cycle 9, worker session 6224dabe-675c-4250-a397-c10c2349e914.
Scope: inspect the blank first grid row against the FX_Code row. Configure FX_Code only if row 1 is conclusively a nonpersisted placeholder. Otherwise stop. No row deleted, inserted, or changed. No Next, Finish, Save, check-in, Delete All Rows, Get Database Schema, FX_Label, or object creation.

### Steps (in order)

1. Fresh untargeted snapshot. Mongoose tab selected. Wizard open on page 1 with IDO Name `FX_HelloWorld01`, IDO Project Name `FX_HelloWorldProject01`, Table Alias `fxhw`, Form Type MultiView, Form Layout GridLeft, Device Type Default, Site Split unchecked. Finish disabled, Next enabled and not pressed.
2. Field grid read from the accessibility tree (read-only; no interaction):
   - Name grid, row 1 (`f1e334`/`f1e335`): one gridcell, empty.
   - Name grid, row 2 (`f1e339`/`f1e340`): `FX_Code` (selected); the active cell is `f1e417`.
   - Property grid, row 1 (`f1e393`): gridcells for Property Class, Data Type, SQL Data Type, Property Length, Decimal Precision, empty; Primary Key and Required both `checkbox not checked`; Label String ID and Default Value empty.
   - Property grid, row 2 (`f1e416`): the same structure, all empty; Primary Key and Required both unchecked. Property Class is empty for both rows.
3. Screenshot `40` (visible state). Snapshot saved to `evidence/EXP-040/t6-snapshot-field-grid-row1-vs-fx-code.yml`.
4. No click, key press, type, or mouse action was performed in T6.

### Assessment of row 1

| Question | Finding |
|---|---|
| Row order | Row 1 is above `FX_Code` (row 2). |
| Name | Empty in row 1; `FX_Code` in row 2. |
| Property Class, Data Type, SQL Data Type, Property Length | Empty in both rows. |
| Primary Key, Required | Unchecked in both rows. |
| Label String ID, Default Value | Empty in both rows. |
| Row-count or row-number column | **None.** The wizard grid has no row-header or row-number column, so no count is displayed. |
| Star or new-row marker | **None visible** in the screenshot or the accessibility tree. (The T1 SQL Tables placeholder *did* show a blue star; this grid shows none.) |
| When row 1 appeared | **Before any user Add Row.** It was already present as a single blank highlighted line on the first page in T4 (`29`) and in T5 before Add Row (`33`). Add Row (T5) created row 2. |

Conclusion: row 1 is structurally indistinguishable from an empty real field record, and it was present before any user action. The wizard shows no placeholder marker. Its identity as a nonpersisted insertion placeholder is therefore **not established**. The brief's rule applies: identity ambiguous, so stop without deleting, inserting, or changing grid rows.

### Blocker for the operator (not resolved here)

Row 1 is either (a) a nonpersisted placeholder the wizard creates automatically, or (b) a real, unnamed application field. The two outcomes differ at Finish. Under (b), an unnamed field would add an extra column or fail validation, and it would violate the "exactly two application fields" rule. Options for the operator:
1. Confirm that row 1 is a placeholder (for example, from wizard behaviour known to the operator), so FX_Code can be configured under the T6 conditional path.
2. Authorise removing row 1 with `Delete Row` (a separate grid action, not performed here), after confirming it is not a field.
3. Stop the experiment at this point.

Also still open from T5: the Property Class for FX_Code has no verified plain-String class, and the length mechanism is unverified.

### Operation counts (T6)

| Operation | Count |
|---|---|
| Browser mutations (click, type, key, select, drag) | **0** |
| Snapshots (fresh untargeted, plus one saved file snapshot) | 2 (read-only; no recovery snapshot was needed) |
| Screenshots | 1 (`40`) |
| Grid rows added, deleted, or changed | **0** |
| Next / Finish / Save / check-in / check-out / Create Form / Get Database Schema / Delete All Rows | **0** |
| Errors | **0** |
| Recovery snapshots used | 0 |
| Corrected inspections | 0 |

### Evidence (T6)

- `evidence/EXP-040/40-t6-field-grid-row1-vs-fx-code-inspection.png`: field grid with row 1 blank and row 2 `FX_Code`; no row-number column, no star. Shows the row structure. Does not show row identity (placeholder versus real field).
- `evidence/EXP-040/t6-snapshot-field-grid-row1-vs-fx-code.yml`: accessibility state of the grid, rows, and empty property cells, both rows.

### Acceptance checks (T6)

| AC | Status | Note |
|---|---|---|
| AC-4 | PARTIAL (unchanged) | Identity, project, alias, Multi-Site, and Form/Layout/Device defaults verified. The row 1 question is an open pre-Finish item. |
| AC-5 | **NOT MET** (unchanged) | FX_Code has no Property Class, Data Type, or Property Length. FX_Label absent. Row 1 unresolved. |
| AC-1 to AC-3 | Unchanged from T4/T5 | — |
| AC-6 to AC-12 | Not evaluated | No Finish. |

### Browser state at end of T6

Mongoose tab selected. Data Maintenance Wizard open on page 1, stable, with no unsaved-change prompt. Field grid unchanged from T5 (row 1 blank, row 2 `FX_Code`, no Property Class). Next and Finish not pressed; Finish disabled. The IDOs tab underneath is on `ABDataServices`, unedited.

## Operator decision: Table Alias (recorded for T5, 2026-10-10)

- **Table Alias = `fxhw`**, exact lowercase. Explicitly authorized by the operator on 2026-10-10.
- This is an **operator-selected** value, a valid SQL identifier and an abbreviation of `FX_HelloWorld01`. It is **not** a documented wizard default, and the wizard did not generate it. The first page showed Table Alias empty (T4, `29`), and the IDO guide (`ido-development.md`, "Adding an IDO") describes the alias only as required and unique.
- The brief's rule against inventing an alias is satisfied by this explicit authorization. The value is recorded as a supplied input, not as an observed default.

## T5 — Field configuration on the first Data Maintenance Wizard page (no Next, no Finish)

Task: T5, task_message_id 5c82cbac-00af-4293-9c43-d2a17c3ae230, cycle 7, worker session 6224dabe-675c-4250-a397-c10c2349e914.
Scope: reopen the wizard, enter IDO Name and Table Alias, verify the project and Multi-Site options, configure exactly two application fields, capture the first page, and stop. No Next, Finish, Save, check-in, application rows, Get Database Schema, Add Subcollection, or another wizard. The previously hook-rejected lowercase target query is not repeated.

### Steps (in order)

1. Fresh snapshot: Mongoose tab selected; IDOs tab on `ABDataServices`; Save and New disabled; no dialog. Clean T4 state confirmed.
2. In-frame Designer launcher `f1e51` clicked once. The Identify Your Editing Scope dialog **did not appear** (third consecutive launch without it: T3, T4, T5). Runtime Builder Selection opened with the scope line `[ Scope Type: User / Scope Name: anton.ramos@3mworks.com.ph ]` (`31`). The split control was not clicked.
3. Category: opened the list and selected **Form Builder** (`FormBuilder`). Runtime Builder: opened the list and selected **DataMaintenance**. Both confirmed in the accessibility tree (`32`). Scope line still User / anton.ramos.
4. OK pressed once. Data Maintenance Wizard opened on page 1 with no error (`33`). Match to T4: IDO Project Name default `FX_HelloWorldProject01`, Table Alias empty, Form Type `MultiView`, Form Layout `GridLeft`, Device Type `Default`, Site Split unchecked, field grid empty.
5. **IDO Name** entered: `FX_HelloWorld01` (accessibility tree `f1e547`; `34`).
6. **Table Alias** entered: `fxhw`, the operator-authorized value (accessibility tree `f1e562`; `34`).
7. **IDO Project Name** verified in the accessibility tree: combobox value `FX_HelloWorldProject01`. It was already correct, so it was not re-selected. No `HelloWorld` value remains.
8. **Multi-Site** verified (accessibility tree, see the table below). Nothing needed clearing.
9. **Field grid:** Add Row pressed once (`f1e613`). A second row appeared beside the original blank row (`35`). Name `FX_Code` typed into the Name editor and committed with Tab (`36`, `37`). Grid row now shows `FX_Code` in Name.
10. **Property Class** combo opened for the FX_Code row (`38`). The list was read in full by find, plus one read-only wheel scroll over the list. Escape closed it without a selection (`39`). **No Property Class was selected.** Stop.

### Wizard first page: state at the end of T5 (wizard still open)

| Control | State | Evidence |
|---|---|---|
| IDO Name | `FX_HelloWorld01` (entered in T5) | `34`, `39`; `f1e547` |
| IDO Project Name | `FX_HelloWorldProject01` (default, verified; not re-selected) | `33`, `34`; `f1e554` |
| Table Alias | `fxhw` (operator-authorized, exact lowercase) | `34`, `39`; `f1e562` |
| Form Type | `MultiView` (not changed) | `33`, `39` |
| Form Layout | `GridLeft` (not changed) | `33`, `39` |
| Device Type | `Default` (not changed) | `33`, `39` |
| Site Split (Multi-Site) | checkbox **"Site Split"**, unchecked (`f1e591`) | accessibility tree (T5) |
| Table Name (Multi-Site) | textbox, empty; no `[disabled]` marker (`f1e600`) | accessibility tree (T5) |
| View Name (Multi-Site) | textbox, empty; no `[disabled]` marker (`f1e607`) | accessibility tree (T5) |
| Link Table/Bind Properties | disabled (`f1e609`) | accessibility tree (T5) |
| Add Subcollection | enabled, not used (`f1e611`) | accessibility tree (T5) |
| Field row 1 (original blank row) | **Name empty**, no Property Class; not used | `f1e686`; `39` |
| Field row 2 | **Name `FX_Code`**; Property Class **empty (not selected)**; Data Type and SQL Data Type empty | `37`, `39` |
| FX_Label | **not added** (stopped; see below) | — |
| Primary Key / Required (row 2) | unchecked (`f1e755`, `f1e758` on the T5 snapshot; row 2 checkboxes not checked) | accessibility tree |
| Get Database Schema | present; **not invoked** | `f1e619` |
| Create Scripts option | **not observed** on this page | — |
| Back / Next / Finish | Back disabled; **Next enabled, not pressed**; **Finish disabled** | `39` |

### Why T5 stopped before FX_Code's Property Class

- The Property Class list is an alphabetical, virtualised list of roughly 200 classes (e.g. AccessAs, AlphaKey, … MessageObjectName, … LongString, LongRowPointer).
- **No plain `String` class is visible.** The nearest candidates are `LongString` (likely unbounded length, not 30), `GenericCode`, `Description`, `Label`, and `AlphaPrefix`. None is verified to map to a string of length 30 or 100.
- Choosing one would be a guess about the Data Type and SQL Data Type mapping. The brief says not to invent a missing property class, and a wrong class would commit an unsupported SQL type. The stop rule applies.
- FX_Label has the same Property Class question, so it was not added. Adding its name alone would create a second partial row.
- No rejection, validation error, or ComponentFlags message occurred. The stop is a mapping decision, not a wizard failure.

### AC status (T5)

| AC | Status | Evidence | Gap |
|---|---|---|---|
| AC-1 | PASS-LIMITED (unchanged) | `31`–`33`; `26` (T4 About) | Affirmative scope confirmation never obtained (Identify dialog absent on 3 consecutive launches); configuration-wide visibility untested |
| AC-2 | PARTIAL (unchanged) | T1 `01`, `06`, `09`, `10`, `16`, `17`, `18` | Lowercase target query not run (per instruction) |
| AC-3 | **PASS** (visible UI; unchanged from T4) | `32`, `33` | Wizard reopened on its first page; no error |
| AC-4 | **PARTIAL.** IDO Name, IDO Project Name, Table Alias, Multi-Site, Form Type/Layout/Device Type are all visible and verified. **Unresolved before Finish:** the FX_Code Property Class, and the unused blank first row | `34`, `37`, `39` | Property Class unresolved; FX_Label not added; blank field row present; Finish not reached |
| AC-5 | **NOT MET.** FX_Code is named, but has no Property Class, Data Type, or length. FX_Label is absent | `37`, `39` | Needs an operator decision on the string Property Class mapping (and the length mechanism) |
| AC-6 to AC-12 | Not evaluated | — | No Finish |

### Operation counts (T5)

| Operation | Count |
|---|---|
| In-frame Designer launch | 1 |
| Identify Your Editing Scope confirmation | 0 (dialog absent) |
| Category selected | 1 (Form Builder) |
| Runtime Builder selected | 1 (DataMaintenance) |
| Runtime Builder OK | 1 |
| IDO Name typed | 1 (`FX_HelloWorld01`) |
| Table Alias typed | 1 (`fxhw`) |
| IDO Project Name re-selected | 0 (default already correct) |
| Add Row | 1 |
| Field Name typed | 1 (`FX_Code`) |
| Tab commits | 1 |
| Property Class list opened | 1; closed with Escape (no selection) |
| Mouse-wheel scroll (read-only, over the Property Class list) | 1 |
| Next / Finish / Save / check-in / check-out / Create Form / Get Database Schema / Add Subcollection | **0** |
| Application rows, object names beyond the IDO Name and alias, Form generation | **0** |
| Errors | **0** |
| Fresh recovery snapshots | 0 |
| Corrected inspections | 0 |

### Evidence (T5)

- `31-t5-designer-launch-runtime-builder-selection-reopened.png`: Runtime Builder Selection, empty category and builder, User scope line. No Identify dialog.
- `32-t5-runtime-builder-selection-formbuilder-datamaintenance-chosen.png`: Category FormBuilder and Runtime Builder DataMaintenance before OK.
- `33-t5-data-maintenance-wizard-reopened-first-page.png`: wizard reopened on page 1, IDO Name empty, project default `FX_HelloWorldProject01`, Table Alias empty. Decisive for AC-3 and AC-4 defaults.
- `34-t5-wizard-ido-name-and-table-alias-entered.png`: IDO Name `FX_HelloWorld01`, project `FX_HelloWorldProject01`, Table Alias `fxhw`, Site Split unchecked, Finish disabled. Decisive for AC-4 identity.
- `35-t5-after-add-row-field-grid.png`: field grid with the second row and the Name editor active.
- `36-t5-field-code-name-typed-before-commit.png`: `FX_Code` typed in the Name editor before commit.
- `37-t5-field-code-after-tab-property-class-cell.png`: `FX_Code` committed in the Name column; Property Class cell active and empty; Data Type and SQL Data Type empty. Decisive for the AC-5 gap.
- `38-t5-property-class-list-opened-for-fx-code.png`: the Property Class list (about 200 classes) opened; no plain String class in view.
- `39-t5-after-property-class-list-escape-state.png`: stable wizard state after Escape: list closed, Property Class empty, Finish disabled, Next enabled but not pressed.
- `t5-snapshot-after-field-code-name-tab.yml` and `t5-snapshot-after-property-class-escape.yml` (accessibility snapshots in this folder).

Captures do **not** show a Property Class selection, a Data Type, a Property Length, a Primary Key, or a Required value, because none was set. The Multi-Site Table and View Name verification is from the accessibility tree, not from the picture.

### Open questions for the operator (T5)

1. **String Property Class.** Which Property Class maps a plain string of length 30 (FX_Code) and length 100 (FX_Label)? The list shows no `String` class; `LongString` is a candidate but its length behaviour is unverified. The brief does not allow an invented class. Choose one, or confirm the mapping.
2. **Length.** Once a class is chosen, where is the length set (Property Length)? It was not observed for FX_Code because no class is selected yet.
3. **Blank first row.** The original empty row (`f1e686`) is still in the grid. It should be removed, or confirmed as ignored, before Finish. T5 did not delete it, since that would be a separate grid action.
4. **Identify Your Editing Scope** still has not been seen in three consecutive launches.

### Browser state at end of T5

- Mongoose tab selected. **Data Maintenance Wizard open on page 1 and stable**, with IDO Name `FX_HelloWorld01`, project `FX_HelloWorldProject01`, Table Alias `fxhw`, Site Split unchecked, field row 2 named `FX_Code` with no Property Class. Next and Finish were not pressed. Finish is disabled.
- The underlying IDOs tab is on `ABDataServices` (not edited). No Save, no check-in, no created object.

## T4 — Preflight completion and Data Maintenance Wizard first-page inspection (no entries, no commit)

Task: T4, task_message_id 322243c9-d3c0-44df-b166-9c52ca6653e1, cycle 4, worker session 6224dabe-675c-4250-a397-c10c2349e914.
Scope of this task: finish read-only preflight; reach the Data Maintenance Wizard first page; inspect it; stop. No object name, field value, page advance, Finish, Save, check-in, check-out, or Form confirmation.

### Preflight reconciliation (T1 captures, read-only)

- **Zero-row captures are settled, not pending.** `09-t1-sql-tables-target-f4-result-zero-rows.png` shows the blank add-record placeholder (blue star, required asterisks) with Columns and Update Current Table greyed. The T1 inline post-F4 snapshot had no populated data row. `17-t1-idos-target-fx_helloworld01-f4-result.png` shows an empty IDO grid, detail pane greyed, no spinner or pending indicator. **Limit:** 17 has no saved post-F4 accessibility snapshot. Its settled state rests on the screenshot.
- **Scope of the T1 SQL row.** `evidence/playwright/page-2026-10-10T05-35-27-316Z.yml` (lines 143–145) contains a row `FX_HelloWorld01` with an empty Schema cell. That is the Filter-in-Place criteria row mirroring the typed value before F4, not a data row. It is the same mirror pattern seen for `Customer` in T1 (`07`, Schema blank). It is not a collision.
- **Case-variant absence is inferred.** The lowercase positive controls (`customer` → `Customer`, `06`/`10`; `abdataservices` → `ABDataServices`, `16`/`18`) show the query mechanism is case-insensitive. The lowercase target `fx_helloworld01` was not queried, and no separate lowercase-target query was run. Case-variant absence for `FX_HelloWorld01` is therefore **inferred from observed query behaviour**, not executed. No inventory sweep or further typing was attempted.
- **Documentation read.** `docs/mongoose/guides/ido-development.md` was read in full for "Adding an IDO" and the adjacent sections. Trust remains **unverified** (Infor documentation). Relevant points: Project Name is required and selects an existing IDO project; Primary Base Table is required unless extending and must already exist in the project; IDO Name must be unique in the Objects Database and auto-populates from the base table but may be changed; Table Alias is **required** and must be a unique, valid SQL identifier; page 2 binds properties from the base table; Finish creates the IDO and, under source control, checks it out.

### AC-1 — Site Developer and scope evidence (this run)

- **Help > About** (`26-t4-help-about-dialog.png`). The menu item is labelled **"About"**, not "About This Application" as the brief named it. The dialog reads: "Infor Mongoose Application Development Framework 2026.10.13 … Connected via data configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT … Currently logged in as anton.ramos@3mworks.com.ph, **Site Developer**, edits create user versions for user anton.ramos@3mworks.com.ph".
- **Version drift.** The About dialog reports Mongoose **2026.10.13** (Build P#20116826). `environments/current-environment.md` and EXP-001/EXP-002 recorded **2026.09.08**. Observed in this run; the cause is not established.
- **Permission.** The Site Developer role and user-version scope are now **observed in this run** (About), not only historical (EXP-001/EXP-002).
- **Editing scope.** The Identify Your Editing Scope dialog **did not appear** on this launch (also not on T3). The Runtime Builder Selection scope line read `[ Scope Type: User / Scope Name: anton.ramos@3mworks.com.ph ]` (`27`, `28`). Per the instruction, scope was relied on from that display together with the About evidence. **No affirmative scope confirmation control was pressed.** The limitation stays open.
- **Configuration-wide visibility.** SQL table and IDO visibility **may be configuration-wide**. The User editing scope does not isolate SQL tables or IDOs from other users of configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Not tested in T4.
- **Impersonate and alternate scope routes** were not used.

### Designer launch and Runtime Builder Selection

1. Help menu opened, then the About item. About dismissed with its OK control. Nothing changed.
2. Designer toolbar: hover tooltip on the split control was already known ("Open designer in a new window"). **The split control was not clicked.** The in-frame launcher `f1e51` was clicked once. The tool resolved it to `#ext-element-148`.
3. Identify Your Editing Scope did not appear. Runtime Builder Selection opened directly (`27`), with Category and Runtime Builder empty and the User scope line.
4. Category: opened the list, which offered ExtDataSource, **Form Builder** ("Wizards to create forms on Runtime Builder"), and REST. Selected **Form Builder** (displayed label for the documented FormBuilder category). Confirmed in the accessibility tree as `Category: FormBuilder`.
5. Runtime Builder: opened the list, which offered **DataMaintenance** ("Creating a table, IDO, and (optionally) form"), DataView, Report, and Responsive Form. Selected **DataMaintenance**. Confirmed in the accessibility tree as `Runtime Builder: DataMaintenance` (`28`).
6. OK pressed once. The Data Maintenance Wizard opened (`29`). No ComponentFlags, authentication, permission, or wizard-loading error appeared.

### Data Maintenance Wizard — first page (inspected; nothing entered)

Dialog title "Data Maintenance Wizard". A caption line reads "sDataMaintenanceWizard" (a raw string-ID stub, not a field).

| Control | Visible state (`29`, find output) | Notes |
|---|---|---|
| IDO Name | textbox, **empty**, focused | Not entered. |
| IDO Project Name | combobox, **default `FX_HelloWorldProject01`** | **Differs from `current-environment.md`** (default `HelloWorld`). Already the intended existing project. Not changed. |
| Table Alias | textbox, **empty** | **No default shown.** Required per the IDO guide. Not invented (see open questions). |
| Form Type | combobox `MultiView` | Not changed. Form-generation setting. |
| Form Layout | combobox `GridLeft` | Not changed. |
| Device Type | combobox `Default` | Not changed. |
| Multi-Site Options | checkbox **"Site Split"**, **unchecked** (no checked state in the accessibility tree) | Only one Multi-Site checkbox is visible on this page. |
| Table Name (Multi-Site) | textbox, **empty** | Screenshot shows grey shading; the accessibility tree shows no `[disabled]` marker. **Enabled state not confirmed.** |
| View Name (Multi-Site) | textbox, **empty** | Same as Table Name. |
| Link Table/Bind Properties | button, **disabled** | |
| Add Subcollection | button, enabled | Not used. |
| Field grid | headers **Name, Property Class, Data Type, SQL Data Type** (visible), with more columns off-screen: Property Length, Decimal Precision, Primary Key, Required, Label String ID, Default Value | **No data rows.** One blank highlighted line appears in the screenshot. No field was added. |
| Add Row / Delete Row / Delete All Rows | buttons, enabled | Not used. |
| **Get Database Schema** | button, enabled | **Not invoked** (prohibited). |
| Move Up/Move Down | icon buttons beside the grid | Not used. |
| Back | **disabled** | First page. |
| Next | enabled | **Not pressed.** |
| Finish | **disabled** | Not pressed. Disabled state consistent with no entered IDO name. |
| Cancel / Help | enabled | Cancel used to close (see below). |

**Errors on the first page:** none visible. No ComponentFlags, validation, or load message.

**Stop:** the instruction stopped the task on this page. The wizard was not advanced.

### Closing the wizard

- Cancel (`f1e748`) opened a Mongoose confirmation: "Are you sure you want to cancel? All data entered will be lost." (alert dialog, `30`). No data had been entered, so the only thing discarded was the unchanged defaults. **Yes** was pressed (`f1e755`). The wizard closed; no object was created. A dialog-state read after Yes confirmed no alert remained (`30`).
- The IDOs tab returned to its clean state on `ABDataServices` (`30`, `22`).

### Operation counts (T4)

| Operation | Count |
|---|---|
| Help menu opened | 1 |
| About opened / dismissed (OK) | 1 / 1 |
| Designer in-frame launch (`f1e51`) | 1 |
| Designer split control clicked | **0** (tooltip only, from T3) |
| Identify Your Editing Scope confirmed | **0** (dialog did not appear) |
| Category list opened / selected | 1 / 1 (Form Builder) |
| Runtime Builder list opened / selected | 1 / 1 (DataMaintenance) |
| Runtime Builder Selection OK | 1 (opened wizard) |
| Wizard page advances (Next) | **0** |
| Wizard Finish / Save / check-in / check-out / Create Form | **0** |
| Get Database Schema | **0** |
| Field values entered | **0** |
| Object names entered | **0** |
| Wizard Cancel / confirmation Yes | 1 / 1 (no commit) |
| Text typed | **0** |
| Fresh recovery snapshots | **0** |
| Corrected inspections | **0** |
| Errors observed | **0** |

### Evidence (T4)

- `26-t4-help-about-dialog.png`: About dialog with DEM configuration, Site Developer, user version, version 2026.10.13. Proves the displayed identity and role; does not prove a live permission check.
- `27-t4-designer-launch-runtime-builder-selection-initial.png`: Runtime Builder Selection with empty Category/Runtime Builder and User scope line. No Identify dialog. Does not prove an affirmative scope confirmation.
- `28-t4-runtime-builder-selection-category-and-builder-chosen.png`: Category FormBuilder and Runtime Builder DataMaintenance (accessibility tree confirms the values; the capture shows the dialog before OK).
- `29-t4-data-maintenance-wizard-first-page.png`: the wizard first page as described in the table. Decisive for AC-3 and AC-4 (visible fields and defaults). Does not show any entry, and does not show Multi-Site enabled state with certainty.
- `30-t4-after-wizard-cancel-final-state.png`: final clean IDOs state after the confirmation (taken after Yes; the same filename was overwritten by the post-confirmation capture).

### Acceptance checks (T4)

| AC | Status | Proof | Gap |
|---|---|---|---|
| AC-1 | PASS-LIMITED | `26` (role, configuration, user); `27`, `28`, `29` (scope line, Designer route); T1 `20`–`22`, T3 `23`–`25` | Affirmative scope confirmation never obtained (dialog absent); configuration-wide visibility untested; version drift 2026.10.13 vs 2026.09.08 unexplained |
| AC-2 | PARTIAL (unchanged) | T1 `01`, `06`, `09`, `10`, `16`, `17`, `18`; criteria-mirror resolved | Case-variant target query not run (inferred); IDO target settled state is screenshot-only |
| AC-3 | **PASS** (visible UI) | `28` (Category FormBuilder, Runtime Builder DataMaintenance); `29` (Data Maintenance Wizard open, no error) | Wizard reached and inspected on page 1 only |
| AC-4 | **Not met before Finish** (Finish not reached; not in scope for T4) | `29` shows IDO Project `FX_HelloWorldProject01`; Multi-Site Site Split unchecked; Form Type/Layout/Device defaults | **Table Alias has no default and is required**; IDO Name not yet entered; the Table Alias value is an open decision |
| AC-5 to AC-12 | Not evaluated | — | Wizard fields not defined; no Finish |

### Unresolved and open questions

1. **Table Alias.** The first page shows an empty Table Alias, and the IDO guide says it is required. The brief says to stop rather than invent an unsupported alias. The operator must decide the value, or confirm that a default will appear after IDO Name is entered. T4 did not invent one.
2. **Scope confirmation.** The Identify Your Editing Scope step has not appeared on either launch (T3 and T4). The User scope is displayed but has not been affirmatively confirmed by a control. Whether the T1 Cancel committed the pre-filled scope is still unknown.
3. **Version drift.** Mongoose 2026.10.13 is now observed. `current-environment.md` records 2026.09.08. Not reconciled in this record.
4. **IDO Project Name default.** The wizard defaulted to `FX_HelloWorldProject01`, not the recorded `HelloWorld`. The brief's replace-default step may already be satisfied, but verification belongs before Finish.
5. **Multi-Site Table Name and View Name** enabled state is not confirmed (greyed shading only).
6. **Field grid** has no rows yet. The two FX fields are still to be added in a later task.
7. **Physical table name** not yet known.
8. The wizard's caption "sDataMaintenanceWizard" is a raw string-ID stub. Not a field.

### Browser state at end of T4

- One Mongoose tab, selected. IDOs tab on `ABDataServices` (not edited), Save and New disabled, Check Out and Undo Check Out disabled, no dialog open.
- Sql Tables and IDO Projects tabs unchanged (Sql Tables still in Filter-in-Place mode from T1; IDO Projects shows `FX_HelloWorldProject01`).

## T3 — Wizard entry attempt and scope step (stopped; no wizard reached)

Task: T3, task_message_id 04dd9b7c-861b-43d2-bb95-2995e62995d6, cycle 2, worker session 6224dabe-675c-4250-a397-c10c2349e914.
Scope of this task: wizard entry and first-page inspection only. Stop before any wizard field entry, page advance, Finish, Save, or check-in.

### Steps (in order)

1. Fresh untargeted snapshot: Mongoose tab selected; Web Client header `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDOs tab selected showing `ABDataServices` (not edited); Save and New disabled; no dialog. The T1 clean state was confirmed.
2. Hovered the second Designer toolbar control (`f1e53`). Tooltip: **"Open designer in a new window"** (split control; not clicked). Capture `23`.
3. Clicked the in-frame Designer launcher (`f1e51`, resolved by the tool to `#ext-element-148`). The **Identify Your Editing Scope dialog did not appear.** The client went directly to **Runtime Builder Selection**, with the scope line `[ Scope Type: User / Scope Name: anton.ramos@3mworks.com.ph ]`. Capture `24`.
4. Stopped per the T3 instruction: there was no unambiguous supported scope-confirmation control (no OK/affirmative control on an Identify dialog). The scope line is a display, not a confirmation control, so its OK was **not** pressed. The T1 Cancel behaviour was not relied on.
5. Dismissed Runtime Builder Selection with its **Cancel** control (`f1e445`). Capture `25`: no dialog; IDOs tab clean on `ABDataServices`; Save and New disabled.

### Outcome

| Check | Result |
|---|---|
| Identify Your Editing Scope confirmation with an affirmative control | **Not reached.** The dialog did not appear on this launch. |
| Scope in force | Displayed as **User / anton.ramos@3mworks.com.ph** on the Runtime Builder Selection scope line (`24`, `25`). Display only; the source of this scope (a prior selection or carry-over from T1) is not established. |
| Runtime Builder Selection: Category FormBuilder and Runtime Builder DataMaintenance | **Not performed.** Both fields remained empty. The stop rule applied before selection. |
| Data Maintenance Wizard reached | **No.** No wizard page loaded, so no ComponentFlags or other wizard-loading error was observed. AC-3 is not evaluated. |
| Errors | None observed. No authentication prompt. No permission message. |

### Operation counts (T3)

| Operation | Count |
|---|---|
| Designer in-frame launch | 1 (`f1e51`) |
| Designer split control | 0 (hover tooltip only) |
| Hover (tooltip) | 1 (`f1e53`) |
| Identify Your Editing Scope confirmation | 0 (dialog did not appear) |
| Runtime Builder Selection: Cancel | 1 (`f1e445`) |
| Runtime Builder Selection: OK | 0 |
| Category / Runtime Builder selections | 0 |
| Wizard open / page advance / field entry | 0 |
| Finish / Save / check-in / check-out / Create Form | 0 |
| Fresh recovery snapshots | 0 |
| Corrected inspections | 0 |
| Text typed | 0 |

### Evidence (T3)

- `evidence/EXP-040/23-t3-designer-toolbar-hover-before-launch.png`: shows the IDOs tab in its clean state and the split-control tooltip "Open designer in a new window" (supports the control identity; does not show the launch).
- `evidence/EXP-040/24-t3-after-designer-click-dialog-state.png`: shows Runtime Builder Selection (Category and Runtime Builder empty) with the scope line `User / anton.ramos@3mworks.com.ph`. Does **not** show an Identify Your Editing Scope confirmation. It proves the scope displayed on this dialog, not that the scope was confirmed by an affirmative control.
- `evidence/EXP-040/25-t3-final-state-after-runtime-builder-cancel.png`: shows the post-Cancel state: no dialog, IDOs tab on `ABDataServices`, Save disabled.

### Unresolved

1. **Scope confirmation path.** The Identify Your Editing Scope step did not appear on this launch, after a T1 flow in which it did appear and Cancel advanced to Runtime Builder. The next step needs an operator decision on how the User scope is to be confirmed before the wizard. Possibilities include a fresh Designer launch from a clean state or an explicit operator-approved route. Neither was tried.
2. Whether the T1 Runtime Builder Cancel committed the pre-filled scope is still unknown. The display is consistent with User, but that is not confirmation.
3. AC-3 (wizard reached without ComponentFlags error) is **not evaluated**. The wizard was not reached.

### AC status after T3

| AC | Status | Evidence | Gap |
|---|---|---|---|
| AC-1 | PASS-LIMITED (unchanged from T1) | `20`, `21`, `22`, `23`, `24`, `25`; header in all captures | Scope confirmation with an affirmative control not obtained on this launch; Site Developer still historical; configuration-wide visibility untested |
| AC-2 | PARTIAL (unchanged from T1) | T1 captures `01`, `06`, `09`, `10`, `16`, `17`, `18` | Target case-insensitive query not performed (hook-blocked); no inventory sweep in T3 (per instruction) |
| AC-3 | **Not evaluated** | — | Wizard not reached; no evidence of a wizard error either way |
| AC-4 to AC-12 | Not evaluated | — | Wizard not reached |

No Mongoose object was created, saved, finished, checked in, or checked out in T3.

## T1 reconciliation (evidence-only, no browser action)

Task: T1 reconciliation, task_message_id c7200436-07ea-4e6d-8ca7-42b99a4b683f, worker session 6224dabe-675c-4250-a397-c10c2349e914. No browser action. No wizard, Finish, Save, check-in, or creation path. The T1 worker report under `tools/` was not opened: the worker boundary says `tools/` is unreadable, and the T1 report is in the worker's own session context.

1. **FX_HelloWorldProject01 (exact visible values).** Description `Factory Hello World test project`; Access As `G6R` (`01`, populated detail pane; `find` after F4 showed `gridcell "Factory Hello World test project"` and `"G6R"`). Matches EXP-039 T4/T5/T8 exactly. Save disabled. Exactly one row under the exact-name query. Clean: no dialog, no pending change, placeholder absent. Caveat: one snapshot taken immediately after F4 showed empty Description and Access As cells while the grid was still rendering; the later find and `01` show the populated values. Only `01` and the find are cited, not that transient snapshot.
2. **Positive controls and target negatives.** SQL Tables: `Customer` exact → one row (`06`); `customer` lowercase → same row (`10`); `FX_HelloWorld01` exact → zero data rows (`09`). IDOs: `ABDataServices` exact → one row (`16`); `abdataservices` lowercase → same row (`18`); `FX_HelloWorld01` exact → zero rows (`17`). **Case-insensitive collision for the target is not directly observed** (the lowercase target was hook-blocked). Inventory completeness: the SQL Table Name combo and the IDO blank-criteria grid were scanned only in their first visible rows; the FX_ region was not scrolled.
3. **DEM configuration and Site Developer.** Verified in this run: the Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in every capture, and the portal `DEM` badge. Historical only: Site Developer (EXP-001 line 51, EXP-002 line 20, via the Designer About dialog). That dialog was not opened in this run. The portal "System Administrator" label is not a Mongoose role observation.
4. **User scope.** Pre-filled in the Identify Your Editing Scope dialog (`20`): Scope `User`, User `anton.ramos@3mworks.com.ph`. The worker did not select either. The subsequent Runtime Builder Selection scope line (`21`) reads `[ Scope Type: User / Scope Name: anton.ramos@3mworks.com.ph ]`. Cancel advanced the flow instead of dismissing it, so whether Cancel committed the scope is unknown. Scope isolation of SQL tables and IDOs was not tested; configuration-wide visibility remains possible.
5. **Final state and mutation audit.** Final state `22`: IDOs tab on `ABDataServices` (not edited); no dialog; Save disabled. Browser tab list: one Mongoose tab. `browser_type` was called 8 times in total: 7 executed (SQL: `Customer`, `FX_HelloWorld01`, `customer`; IDO: `Customer`, `ABDataServices`, `FX_HelloWorld01`, `abdataservices`) and 1 hook-rejected (`fx_helloworld01`). Only that one call returned a hook error; the rest returned success. The brief's "eight flagged" wording does not match what the worker observed. Typed text only ever entered FiP criteria, never a saved record. The hook rejection is not a permission denial. No Playwright permission denial, disabled-control bypass, or retry of a mutation occurred. Ctrl+A and Delete were used only inside the IDO Name criteria textbox (verified by `find`).

### AC status after reconciliation

| AC | Status | Proof | Gap |
|---|---|---|---|
| AC-1 | PASS-LIMITED | `20`, `21`, `22`; header in all captures; sources above | Site Developer historical; wizard procedure unverified; configuration-wide visibility untested; Cancel's scope effect unknown |
| AC-2 | PARTIAL | `01`, `06`, `09`, `10`, `16`, `17`, `18` | Target case-insensitive variant not queried; inventories not fully scanned |
| AC-3 to AC-12 | not evaluated | — | Wizard not launched |

Unsupported or unresolved requirements (not assumed to pass): the target case-insensitive check, configuration-wide visibility, Site Developer re-verification, the Cancel-committed-scope question, and full inventory completeness.
