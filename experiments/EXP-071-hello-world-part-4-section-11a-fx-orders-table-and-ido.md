# EXP-071 — Hello World Part 4 Section 11a: FX_Orders SQL Table and IDO (Maintenance Wizard)

**FINAL STATUS (T2, documentation only; zero browser calls in T2): BLOCKED at AC-1. Not created. The wizard was never opened.** Final report: `evidence/EXP-071/T2-final-blocked-report.md`. T1 status, retained: read-only preflight, stopped before the wizard. The brief's collision gate is **not passed**: the IDOs `FX_Orders` absence query returned zero rows, but its criterion was not visibly retained and the IDO Name criteria field then became read-only, so the gate is **ambiguous** and the brief forbids proceeding. The SQL `dbo.FX_Orders` absence query returned zero data rows (blue-star placeholder only) but its criterion was not captured before F4, so it is **qualified**. Dependency gate **passed** (observed, read-only). No wizard, Finish, Create Form response, Save, New, unload, check-in, check-out, close or reopen was performed. Classification: **observed only (single session, UI level). NOT replay_verified.**

## Run identity

- Experiment EXP-071, **cycle 0, task T1**, run `R-20261013-141610-s5p9`, task_message_id `052ff406-b500-42a1-b56e-4aad37ee08b4`, worker session `2d4cb556-0ca2-4437-bb6d-884bb99faf29`.
- Date 2026-10-13 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; identity bar shows the operator sign-in account (not recorded here). Editing scope User (Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, observed on the Designer tab).
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10).
- Evidence directory `evidence/EXP-071/`.
- Record creation: this record did not exist at the start of T1 (Read returned "file does not exist"). It was created by this worker in T1.
- Scope of this task: the T1 instruction stops before the wizard. The full brief (wizard, four properties, Finish, Create Form No, IDO/SQL readbacks, close/reopen recovery, conditional check-in) is **not executed**.

## Sources read before any browser action

- `AGENTS.md` (full): LEARNING MODE; FX_ scope extension; safety; experiment rules; evidence capture; recovery.
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 11 (lines 261–285, narrated 14:56–16:34) and the "Property class and Orders schema quick reference" (lines 333–344). Trust: unverified (speech-to-text transcript). Note the narrated Orders caveats (Customer ID SQL type "end varchar", possibly NVARCHAR, not verified; Item length 50; Count default 1).
- `experiments/EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md`: wizard route (Designer New → Form Wizard Selection → Maintenance); Table Name read-only with Site Split unchecked; grid-editor intercepts; check-in; SQL Columns verification; the Sql Tables caution alert on opening.
- `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` (final status and T1–T3 sections): the three property classes and their EXP-070 values. The file is long (1497 lines); only the status block and the T1–T3 sections were read.
- `experiments/EXP-044…` was not read (not needed for T1).

## Baseline (AC-1)

- Tabs before any selection: `browser_tabs list` showed tab 0 = Designer (`mode=designer`, Infor Mongoose Application Development Framework) and tab 1 = Web Client (Mongoose, `favoriteContext=IdoPropertyClasses`, current). Tab 1 was selected, then a fresh untargeted snapshot taken.
- Web Client at start: Property Classes Form open in browse mode with FX_OrderNumBase, Save disabled, no dialog. Other runtime tabs: `FX_Items` (existing, not acted on). A `Session Expired` modal or Infor sign-in page was **not** seen; the session was usable throughout.
- Designer (tab 0), checked in T1 with a read-only inspection: Save disabled, Regenerate Form disabled, no dialog; Designer shows the FX_Items application-Form design view (not acted on).
- No Infor OS portal notification banner was visible; none was dismissed.

## Acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Web Client and Designer clean; collision gate with positive controls | **PARTIAL — gate NOT passed.** Sources reviewed; session usable; Web Client and Designer clean (Save disabled; no open dialog except the SQL caution alert, accepted once). IDO gate: positive control FX_Items returned one IDO; target FX_Orders returned zero rows but criterion visibility failed → **ambiguous**. SQL gate: positive control dbo.FX_Items returned one record; target FX_Orders returned zero data rows (placeholder only) with no pre-F4 criterion capture → **qualified**. | `t1-00`, `t1-06`–`t1-13` | See the collision-gate section. Same-session UI only. |
| **AC-2** Dependency gate (read-only): FX_HelloWorldProject01 available; FX_OrderNumBase, FX_CustomerID, FX_Item read with their EXP-070 values; nothing changed | **SUPPORTED (observed, UI level).** Values below match EXP-070. | `t1-00`, `t1-01`, `t1-03`, `t1-05` | Display values only. Checkout state observed, not acted on. |
| **AC-3** Wizard route, header, Table Name read-only and empty; lookup lists the three classes | **NOT RUN** (wizard not opened in T1, by instruction). Unloads: 0. | — | — |
| **AC-4** Four properties in order | **NOT RUN.** | — | — |
| **AC-5** One Finish; one No to Create Form | **NOT RUN.** Finish 0; Create Form response 0. | — | — |
| **AC-6** FX_Orders readback in IDOs Form and dbo.FX_Orders in SQL Columns; conditional check-in | **NOT RUN.** Check-ins 0. | — | — |
| **AC-7** Close/reopen of IDOs and SQL Tables Forms; recovery queries | **NOT RUN.** Form close 0; reopen 0; recovery queries 0. | — | — |
| **AC-8** Final report with audit | **PARTIAL (T1).** Audit and inventory below. | Action audit section | Observed only. |

### Dependency gate detail (AC-2, read-only)

| Object | Read | Matches EXP-070? | Evidence |
| --- | --- | --- | --- |
| FX_OrderNumBase (Property Classes, browse) | Class Name FX_OrderNumBase; Revision No 1; Revision Date 10/13/2026; Access G6R; Data Type **Long Integer**; Default Value **AUTONUMBER()**; Column Data Type **int**; Label String ID **FX_sOrderNumber**; Justify **Right**; checkout checkbox checked, Check In and Undo Check Out enabled | Yes (EXP-070 T4/T8) | `t1-00` (viewed) |
| FX_CustomerID (Property Classes, FiP query `FX_CustomerID`, one row) | Data Type **String**; Length **30**; Column Data Type **nvarchar**; Label String ID **FX_sCustomerID**; Domain IDO Name **FX_HelloWorld01**; Domain Property **FX_Code**; Domain List Properties **FX_Label**; Required unchecked; checkout checkbox checked | Yes (EXP-070 T2) | `t1-01` (viewed) |
| FX_Item (Property Classes, FiP query `FX_Item`, one row; captured again after load) | Base Class **FX_ItemBase**; Data Type **String**; Length **20**; Column Data Type **nvarchar**; Label String ID **FX_sItem**; Domain IDO Name **FX_Items**; Domain Property **FX_Item**; Domain List Properties **FX_Description**; Locked By operator; Revision 1 / 10/13/2026; checkout checkbox checked | Yes (EXP-070 T3) | `t1-02` (captured before data loaded; blank detail, not evidence of values), `t1-03` (settled; viewed) |
| FX_HelloWorldProject01 (IDO Projects, FiP query, one row, "1 of 1") | Description **Factory Hello World test project**; Access As **G6R** | Exists (EXP-049 T1 observed it earlier) | `t1-05` (viewed) |

Nothing was changed: only Filter in Place queries and Select Form opens were performed. No Save, New, Delete or checkout action.

**Observations (not explained):**
- FX_Item's checkout checkbox was visibly unchecked in `t1-02`, which was taken before the record finished loading (blank detail); the settled `t1-03` shows it checked out. The unchecked state appears to be the pre-load display, not a change; not verified further.
- The IDOs runtime record `FX_Items` (positive control) showed **checked out to the operator** (checkbox checked; Locked By operator; Check In enabled; Undo Check Out enabled; Revision 2; Revision Date 10/10/2026; project FX_HelloWorldProject01; alias fxitms; Tables FX_Items and FX_UMs). EXP-049 T14 recorded a check-in of FX_Items at revision 2. This later checked-out state is **not explained** by this record; it was not acted on. Observed only.

## Collision gate (AC-1)

### IDOs Form (`favoriteContext=IdoCollections`, IDO Name criterion)

| Step | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Open → Select Form, filter `IdoCollections` → row IDOs / IdoCollections → OK | IDOs Form open; 361 IDOs in browse mode (first row ABDataServices shown) | `t1-06` (browse, before criteria) |
| 2 | Filter in Place (two clicks; the first did not enter criteria mode) | Criteria mode; IDO Name criteria textbox empty and active | `t1-06` (pre-criteria), snapshot |
| 3 | **Positive control** `FX_Items` (fill, Tab, F4) | **One IDO**: FX_Items; Project FX_HelloWorldProject01; Revision 2; Revision Date 10/10/2026; Tables FX_Items / fxitms (Primary Base) and FX_UMs / fxum (Secondary, Left Outer); checked out to operator | `t1-07` (viewed) |
| 4 | Filter in Place re-entered (criteria mode confirmed by status and filter icon; retained `FX_Items` criterion selected) | Criteria mode with retained FX_Items | `t1-08` (viewed) |
| 5 | **Target** `FX_Orders` (fill, Tab, F4) — one query | Grid **empty** (no data row, no placeholder, no echo); detail fields blank and greyed; status `Filter in Place`; the IDO Name criteria textbox showed **no value** after F4 | `t1-09` (viewed); snapshot after F4 |
| 6 | Targeted read of the IDOs form container (not a whole-page snapshot) | Criteria textbox empty and not active; no echo row | snapshot (inline) |
| 7 | One corrected attempt: fill `FX_Orders` into the IDO Name criteria textbox | **Refused**: `element is not editable` (the field resolves to `CollectionNameEdit`, readonly), 5 s timeout | error (inline) |
| 8 | Targeted snapshot of the toolbar (`f1e24`) returned ref-not-found (ledger row 95); one fresh untargeted snapshot (row 96) was the recovery allowance; the toolbar `Open` (row 97) was then clicked from that snapshot's refs | ref-not-found error; the recovery snapshot is inline |

**Result: AMBIGUOUS — the gate is not passed.** The FX_Orders query produced zero data rows, but the criterion was not visibly retained after F4 and the criteria field became read-only on the retry. The brief's rule is zero rows **and** visible criteria; the visible-criteria half is not established. Per the brief, the gate is treated as ambiguous and the task does not proceed to creation. This is a **blocker**: the IDOs absence gate needs a re-run in a fresh task with a visible pre-F4 criterion capture.

Read-only observation (EXP-049 T15 pattern): the IDO Name criteria field was read-only after the FX_Orders attempt. This was not resolved and was not forced (no close or reopen was permitted in T1).

### SQL Tables Form (`favoriteContext=SqlTables`, Table Name criterion)

| Step | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Open → Select Form, filter `SqlTables` → row Sql Tables / SqlTables → OK | Caution alertdialog "Please be very careful using these forms. If you delete a column or a table you will lose data…" → accepted once with OK (informational; EXP-049 known) | — |
| 2 | Filter in Place (click 1 showed browse with ABDataServices, 1 of 200; click 2 entered criteria mode with Table Name blank and Schema active) | Criteria mode | not captured before the positive control; state confirmed by find |
| 3 | **Positive control** `FX_Items` (fill, Tab, F4) | **One record**: Table Name FX_Items; Schema dbo; Multi-Site unchecked; constraints PK_FX_Items (Primary Key, FX_Item) and IX_FX_Items_RowPointer (Index, RowPointer); Update Current Table disabled; Save disabled | `t1-10` (viewed) |
| 4 | Filter in Place re-entered; retained `FX_Items` criterion selected; echo row blank Schema | Criteria mode (status `Filter in Place`, filter icon) | `t1-11` (viewed) |
| 5 | **Target** `FX_Orders` (fill, Tab, F4) — one query; **no pre-F4 capture** | Grid shows only a **blue-star add-mode placeholder** (blank Table Name and Schema; red asterisks on Table Name and Schema headers). No data row. Status `Multi-Site (SQL Tables 1 of 1)`. Save **disabled**. | `t1-12` (viewed) |

**Result: zero data rows observed for dbo.FX_Orders (qualified).** The placeholder is the zero-row pattern seen in EXP-049 T5/T13 and EXP-070 T1. The criterion value was not captured before F4 and is not visible after the query, so "visible criteria" is not fully established. This was not repeated: the brief allows one query per object, and the IDO blocker already stops the task.

## Blocker (for the coordinator)

1. **IDOs absence gate for FX_Orders is ambiguous** (see the IDOs section). The wizard must not be opened on this evidence.
2. The IDO Name criteria field became read-only after the target query; the first FiP click on a freshly opened form did not enter criteria mode; the second did. This is an interaction pattern to address in the re-check task.
3. The SQL absence gate is qualified (no pre-F4 criterion capture).

**Suggested next action (requires a separate authorisation):** a read-only re-check task that (a) opens the IDOs Form once more and runs one FX_Orders query with a pre-F4 criterion screenshot, confirming the criteria field is editable before entry; (b) runs the SQL Tables FX_Orders query with a pre-F4 capture. If both show zero rows with visible criteria, the wizard task can be considered. No wizard action is authorised by this record.

## Dependency and other observations (observed only)

- FX_Items / FX_OrderNumBase / FX_CustomerID / FX_Item checkout indications: as displayed (see the dependency table). Meaning of the checkout is not established beyond the display.
- The Sql Tables blue-star placeholder from the zero-row FX_Orders query remains as an unsaved add-mode row (Save disabled). It is not a saved record. The same behaviour was recorded in EXP-049 (an AC-1 concern there). The coordinator should decide whether to clear it before any wizard task.
- The Designer tab shows the FX_Items application-Form design view with component `FX_UMCombobox` selected; Save and Regenerate Form disabled. Not acted on.
- The Mongoose Web Client title counter reported `7 errors, 3 warnings` throughout. Console inspection is out of scope and was not performed.

## Action audit (T1, reconstructed from the session call log)

Counts are worker-requested browser calls. "Ran Playwright code" wrappers and tool-written snapshot files are tool-generated and are not counted as worker actions. Counts were checked in T2 against the controller ledger `evidence/EXP-071/harness-audit-T1.md` (137 rows). Finds, snapshots and screenshots match the ledger; the controller's read total (58) is not reproduced (see the T2 section).

| Operation | Count |
| --- | --- |
| **Finish** | **0** |
| **Create Form response (Yes / No)** | **0 / 0** |
| **Save** (invoked) | **0** |
| **New** | **0** |
| **Delete** | **0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| **Unload All Global Form Objects / Designer or Web Client unload / FormSync / deployment** | **0 / 0 / 0 / 0 / 0** |
| Property class, IDO, table, project, string, extension or theme changes | **0** |
| Strings created; IDOs, tables, Forms created | **0** |
| Form opens (Select Form OK) | **3** (IDO Projects; IdoCollections; SqlTables) |
| Form close / Form reopen (IDOs, SQL Tables) | **0 / 0** |
| Recovery (exact-name) queries after reopen | **0** |
| Collision queries (exact-name, Filter in Place) | **4** (IDOs: FX_Items control, FX_Orders target; SQL: FX_Items control, FX_Orders target); plus the dependency queries below |
| Dependency queries (Filter in Place) | **3** (FX_CustomerID; FX_Item; FX_HelloWorldProject01) plus the FX_OrderNumBase read in browse mode (no query) |
| Filter in Place toggles (clicks on the toolbar FiP) | **10** |
| Browser clicks, all (successful / failed) | **20 / 0** (FiP 10; toolbar Open 3; Select Form row 3; Select Form OK 3; Sql Tables caution OK 1) |
| Typed fills (`browser_type`, plain) | **11** (criteria 7 successful: FX_CustomerID, FX_Item, FX_HelloWorldProject01, FX_Items ×2, FX_Orders ×2; Select Form filters 3: Project, IdoCollections, SqlTables; refused 1: FX_Orders into the readonly IDO Name field) |
| Key presses | **17** (Tab 10; F4 7) |
| Waits | **1** (2 s) |
| Snapshots untargeted (worker-requested) | **2** (initial; recovery after the refused type) |
| Snapshots targeted (worker-requested, incl. 1 error) | **9** (6 Select Form dialog reads; toolbar read ×2 incl. 1 ref-not-found; IDOs container read ×1) |
| `browser_find` calls | **31** (exact; controller ledger rows) |
| `browser_tabs` list / select | **1 / 3** (select tab 1 ×2; select tab 0 ×1) |
| Screenshots (worker-requested PNG) | **14** (`t1-00` … `t1-13`) |
| Ref-not-found errors | **1** (IDOs toolbar ref `f1e24`; recovered by one fresh untargeted snapshot) |
| Timeouts | **1** (the refused IDO Name fill: "element is not editable", 5 s) |
| Recovery snapshot allowance used | **1 fresh untargeted snapshot** (after the ref-not-found); **1** corrected visible inspection (targeted form read) and **1** corrected attempt (the refused fill) |
| Dialogs answered | **1** (Sql Tables caution alert OK) |
| Portal banner dismissals | **0** (none visible) |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** |
| Designer actions (clicks or edits) | **0** (read-only Save and Regenerate Form state checked by find; tab selection only) |

## Worker-written-file inventory

| File | Action |
| --- | --- |
| `experiments/EXP-071-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | created (this record) |
| `evidence/EXP-071/t1-00-baseline-property-classes-FX_OrderNumBase-browse.png` | created |
| `evidence/EXP-071/t1-01-dependency-FX_CustomerID-settled.png` | created |
| `evidence/EXP-071/t1-02-dependency-FX_Item-settled.png` | created (captured before the record loaded; see note) |
| `evidence/EXP-071/t1-03-dependency-FX_Item-loaded-settled.png` | created |
| `evidence/EXP-071/t1-04-dependency-IDO-Projects-before-criterion.png` | created |
| `evidence/EXP-071/t1-05-dependency-FX_HelloWorldProject01-settled.png` | created |
| `evidence/EXP-071/t1-06-collision-IDOs-form-before-criteria.png` | created |
| `evidence/EXP-071/t1-07-collision-IDOs-positive-control-FX_Items-settled.png` | created |
| `evidence/EXP-071/t1-08-collision-IDOs-FiP-reentered-before-target.png` | created |
| `evidence/EXP-071/t1-09-collision-IDOs-target-FX_Orders-settled.png` | created |
| `evidence/EXP-071/t1-10-collision-SqlTables-positive-control-FX_Items-settled.png` | created |
| `evidence/EXP-071/t1-11-collision-SqlTables-FiP-state-before-target.png` | created |
| `evidence/EXP-071/t1-12-collision-SqlTables-target-FX_Orders-settled.png` | created |
| `evidence/EXP-071/t1-13-designer-tab-state-read-only.png` | created |

The Playwright tool wrote snapshot and console files under `evidence/playwright/` (tool-generated, not worker-authored; listed for completeness). The controller wrote `evidence/EXP-071/harness-audit-T1.md` (controller-generated, not worker-authored).

T2 additions: `evidence/EXP-071/T2-final-blocked-report.md` (created, T2); this record (edited, T2).

## Decisive evidence (what each screenshot shows and does not prove)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t1-00-…-browse.png` | Property Classes; FX_OrderNumBase row checked out; Long Integer; AUTONUMBER(); int; FX_sOrderNumber; Right; Save greyed | AC-2 FX_OrderNumBase values (display) | Database state |
| `t1-01-…-FX_CustomerID-settled.png` | FiP query FX_CustomerID, one row; String 30 nvarchar FX_sCustomerID; FX_HelloWorld01 / FX_Code / FX_Label; checked out | AC-2 FX_CustomerID values (display) | Required flag (not visible as checked) |
| `t1-03-…-FX_Item-loaded-settled.png` | FiP query FX_Item, one row; Base FX_ItemBase; String 20 nvarchar FX_sItem; FX_Items / FX_Item / FX_Description; checked out | AC-2 FX_Item values (display) | Required flag; Length override not in the class (none expected) |
| `t1-05-…-FX_HelloWorldProject01-settled.png` | IDO Projects FiP query, "1 of 1", FX_HelloWorldProject01, Description "Factory Hello World test project", Access G6R | AC-2 project exists | The IDO projects list (only one row shown) |
| `t1-07-…-IDOs-positive-control-FX_Items-settled.png` | IDO FX_Items: project FX_HelloWorldProject01; Revision 2; Tables FX_Items fxitms and FX_UMs fxum; checked out to operator | Positive control: IDO query path works | Whether FX_Orders is absent |
| `t1-09-…-IDOs-target-FX_Orders-settled.png` | Empty grid; blank detail; status `Filter in Place`; **IDO Name criteria not visible** | Zero rows for the query | **Visible criterion (not established)**; that the query text was FX_Orders at F4 |
| `t1-10-…-SqlTables-positive-control-FX_Items-settled.png` | Table Name FX_Items; Schema dbo; PK_FX_Items; IX_FX_Items_RowPointer; Save greyed | Positive control: SQL query path works | Whether dbo.FX_Orders is absent |
| `t1-12-…-SqlTables-target-FX_Orders-settled.png` | Blue-star placeholder; blank Table Name and Schema; Save greyed; status `Multi-Site (SQL Tables 1 of 1)` | Zero data rows for the query | **Visible criterion (not captured before F4 or after)**; the placeholder's cause |
| `t1-13-designer-tab-state-read-only.png` | Designer FX_Items application-Form design view; footer `ScopeType: User`; Save greyed | Designer open, editing scope User | Designer clean state beyond Save (checked by find: Save and Regenerate disabled) |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| FX_OrderNumBase, FX_CustomerID, FX_Item, FX_HelloWorldProject01 display values match EXP-070 / EXP-049 | **observed** (one run, UI level) |
| FX_Items IDO positive control returns one row (project FX_HelloWorldProject01, alias fxitms, revision 2) and shows checked out to the operator | **observed** (one run) |
| FX_Items dbo positive control returns one record (PK_FX_Items, IX_FX_Items_RowPointer) | **observed** (one run) |
| IDOs `FX_Orders` absence: zero rows, criterion not visible; criteria field read-only after the query | **observed, ambiguous** (gate not passed) |
| SQL `dbo.FX_Orders` absence: zero rows (placeholder), criterion not captured | **observed, qualified** (gate not passed; re-check needed) |
| IDO Name criteria field becomes read-only after a query; the first FiP click on a freshly opened form does not enter criteria mode | **observed** (one run); cause **unresolved** |
| Sql Tables caution alert appears on opening the form | **observed** (known from EXP-049) |
| Checkout state of FX_Items IDO (checked out to operator after EXP-049's check-in) | **observed**; cause **unresolved** |
| Wizard route, lookup, Finish, Create Form, columns, checkout after creation | **not performed** |

## Open questions and next permitted action

1. **Blocker:** the IDOs FX_Orders absence gate is ambiguous (visible criteria not established). Do not open the wizard on this evidence.
2. Re-check task (requires separate authorisation): one FX_Orders absence query in the IDOs Form with a pre-F4 criterion capture and a confirmed-editable criteria field; one FX_Orders absence query in SQL Tables with a pre-F4 capture.
3. The Sql Tables blue-star placeholder is an unsaved add-mode row (Save disabled). The coordinator should decide whether it stays before any wizard task.
4. Classification remains **observed only, NOT replay_verified**.

## T2 — Final disposition: BLOCKED at AC-1 (documentation only; zero browser calls)

Full report: `evidence/EXP-071/T2-final-blocked-report.md`. Summary:

| AC | Final status |
| --- | --- |
| AC-1 | **BLOCKED.** Positive controls passed (IDO FX_Items; SQL dbo.FX_Items). Absence checks not established: IDOs FX_Orders (criterion not visible; corrected entry refused, readonly; stale reference; recovery consumed); SQL dbo.FX_Orders (zero data rows; criterion not captured before F4). Zero rows without a visible criterion does not establish absence. |
| AC-2 | **PASSED (observed, UI level).** FX_HelloWorldProject01 exists; FX_OrderNumBase, FX_CustomerID and FX_Item show the EXP-070 values (`t1-00`, `t1-01`, `t1-03`, `t1-05`). Nothing changed. |
| AC-3 to AC-7 | **NOT EXECUTED.** Wizard never opened; no Finish, no Create Form response, no check-in, no close or reopen, no recovery. |
| AC-8 | Blocked-run final report: `evidence/EXP-071/T2-final-blocked-report.md`. |

**Exact counts (controller ledger, `evidence/EXP-071/harness-audit-T1.md`, rows 1–137):** clicks 20 (0 failed); typed entries 11 (10 succeeded, 1 refused); key presses 17 (Tab 10, F4 7); tab selects 3; tab list 1; snapshots 11 (2 untargeted, 9 targeted including 1 error); finds 31; screenshots 14; waits 1. The controller's 51 actions reconcile exactly (20 + 11 + 17 + 3). The controller's 58 reads do not reconcile: the browser observation subtotal is 57 (snapshots 11 + finds 31 + screenshots 14 + tab list 1), and the controller's read definition is not in the audit file.

**Zero counts (verified):** Finish 0; Create Form Yes 0 / No 0; unloads 0 (no Unload All Global Form Objects, no Web Client unload, FormSync or deployment); check-ins 0; check-outs 0; new objects 0; strings 0; existing-object changes 0; re-logins 0; Form close 0; Form reopen 0; recovery queries 0; Save 0; New 0; Delete 0.

**The 11 `browser_type` flags:** seven Filter-in-Place criteria entries, three Select Form filter entries, and one refused entry that wrote nothing. These are native typed inputs (the workflow the brief requires), not browser JavaScript. The flag stands as a harness classification for the operator to decide.

**Judgment call (disclosed):** after the IDOs gate became ambiguous and its recovery was used, I ran the read-only SQL gate. The coordinator should decide whether that was acceptable.

**Left untouched, observed and unexplained:** the SQL Tables blue-star placeholder (Save disabled); the FX_Items IDO checked out to the operator at revision 2 (EXP-049 T14 recorded a check-in at revision 2; the later state is unexplained); the readonly IDO Name criteria field after an FX_Orders query.

**Next permitted action (not executed; needs authorisation):** a read-only re-check of both absence queries with pre-F4 criterion captures. The wizard stays closed until both gates pass.

**Repository confinement** is supported by the worker and harness inventories; operator git review is authoritative.

**Classification: observed only (single session, UI level). NOT replay_verified.**

## Outcome (operator, 2026-10-13)

Blocked at AC-1, not accepted. Operator call under the standing authorization of 2026-10-11: no waiver, because the absence check is the safety gate before creation.

- Run R-20261013-141610-s5p9 completed as blocked after 2 worker tasks.
- Nothing was created:
  - wizard never opened; Finish 0; unloads 0; check-ins 0;
  - no existing object changed.
- Screenshots viewed by the operator assistant:
  - `t1-09`: the IDOs Form is in Filter in Place, with an empty grid and blank detail. The IDO Name criteria field is blank, so the FX_Orders criterion is not visible.
  - `t1-12`: the Sql Tables Form shows only a blue-star add-mode placeholder row with blank Table Name and Schema.
    - The status bar reads "Multi-Site (SQL Tables 1 of 1)", and Save is disabled.
    - No criterion is visible here either.
- AC-1 not met:
  - The positive controls passed (`t1-07` FX_Items IDO, `t1-10` dbo.FX_Items).
  - Both FX_Orders queries returned no data row.
  - Neither has a pre-F4 capture of the typed criterion.
- After the zero-row IDOs query, the IDO Name criteria field became read-only (`readonly`, CollectionNameEdit). The corrected entry was refused, and the recovery allowance was used.
- The SQL gate was run after the IDOs gate became ambiguous. It was read-only and is accepted as harmless.
- AC-2 passed (`t1-00`, `t1-01`, `t1-03`, `t1-05`): FX_HelloWorldProject01, FX_OrderNumBase, FX_CustomerID and FX_Item show their EXP-070 values.
- Final state: the Web Client tabs FX_Items, Property Classes, IDO Projects, IDOs (Filter in Place) and Sql Tables (Filter in Place with the add-mode placeholder) are open, with Save disabled on all of them.
- Confinement (git status): only `evidence/EXP-071/` and this record were written by the run.
- Next: replay EXP-071-R2.
  - Close the clean IDOs and Sql Tables Forms once each, and reopen them fresh.
  - For each target query: enter Filter in Place, type and Tab-commit the criterion, capture it before F4, then F4 and capture the settled result.
  - The positive controls and AC-2 carry over from this run.
  - Then the wizard, as in the EXP-071 brief.
