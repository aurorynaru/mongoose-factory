# EXP-071-R2 — Hello World Part 4 Section 11a: FX_Orders SQL Table and IDO (replay: visible absence criteria)

**CURRENT STATUS (T1, collision gate only): both FX_Orders absence gates PASSED at observed UI level, same session.** IDOs `FX_Orders`: criterion visible before F4 (`r2-05`), zero data rows after F4 (`r2-06`). SQL `dbo.FX_Orders`: criterion visible before F4 (`r2-08`), zero data rows after F4, blue-star add-mode placeholder only (`r2-09`). The EXP-071 positive controls and dependency gate are carried over, not re-run. **The Property Class lookup, wizard, Finish, Create Form response, check-in, recovery and the rest of the brief (AC-3 to AC-7) are NOT executed**: the T1 instruction stops before the wizard. Nothing was created. No unload was performed. Classification: **observed only (single session, UI level). NOT replay_verified.**

**CURRENT STATUS (after T10, AC-7 recovery pair): IDOs and Sql Tables Forms were each closed once and reopened once (the recovery pair), and each object was recovered by one exact-name query. IDO FX_Orders recovered as one record (project FX_HelloWorldProject01, alias fxords, Revision 2, Locked By blank, Check Out offered, i.e. the post-check-in state from T8) and its four property rows matched the T7 readback. SQL dbo.FX_Orders recovered as one row (schema dbo; PK_FX_Orders on FX_OrderNumber; IX_FX_Orders_RowPointer) and its business columns matched the T9 readback, including the unchanged FX_Count blank SQL default and nullability. Child views Sql Columns (two closes) and IDO Properties (one close) were closed. No check-in, unload, wizard, Form definition change or additional recovery query was performed. Observed at UI level, same session only; no durability or replay verification claimed. See the T10 section.**

(Superseded, after T9:) **CURRENT STATUS (after T9): the SQL table dbo.FX_Orders is visible in the native Sql Tables Form (one row; Table Name FX_Orders; Schema dbo; constraints PK_FX_Orders = Primary Key on FX_OrderNumber, IX_FX_Orders_RowPointer). Its SQL Columns (11 columns: four business and seven framework) were read back by selection and detail view. The business columns match the wizard/IDO readback for FX_OrderNumber (int, primary key, not nullable), FX_CustomerID (nvarchar 30, not nullable) and FX_Item (nvarchar 50, not nullable). One MISMATCH against the T9 expectation was recorded and NOT repaired: FX_Count's SQL Default Value is blank (the IDO default is 1), and FX_Count is Is Nullable (the brief did not state its nullability). No check-in, recovery query, Form close/reopen, unload or wizard action was performed in T9. Observed only; no durability or replay verification claimed.**

(Superseded, after T8:) **CURRENT STATUS (after T8): the single conditional native CHECK IN of FX_Orders was performed ONCE (IDOs Form, pre-check identity confirmed). The IDO's Revision Num moved 1 to 2, Locked By cleared, the row checkbox cleared, and the bar now offers Check Out (Undo Check Out greyed). One informational source-control notice ("Source control integration is currently disabled… will not be checked in to source control.") was acknowledged once with OK; it was not a confirmation request. FX_Orders remains visible (project FX_HelloWorldProject01). The Sql Tables/SQL Columns readback, the AC-7 close/reopen and recovery pair, and any further action remain NOT performed. See the T8 section at the end. Observed only; not replay-verified; no database durability claimed.**

(Superseded, after T7:) wizard CLOSED with its native Close (one click). The IDO `FX_Orders` is visible in the runtime IDOs Form (one row, project FX_HelloWorldProject01, table FX_Orders, alias fxords) and its four properties read back as configured (UI level, same session). The IDO is visibly CHECKED OUT to the operator account (checkbox checked; Check In enabled); NO check-in was performed in T7. The SQL table `dbo.FX_Orders` has NOT been read back (the Sql Tables Form was not touched in T7). No recovery query and no Form close/reopen were performed (the AC-7 pair is reserved). See the T7 section at the end.**

(Superseded, after T6:) WIZARD COMPLETION REPORTED. Finish invoked ONCE. The Create Form prompt ("Do you want to create a form for FX_Orders?") was answered No ONCE. The wizard then displayed the native message "Table and IDO created." with Back, Next and Finish disabled and Close enabled. The wizard was left open at its completion state (Close NOT clicked). Creation is confirmed by the wizard's own message only; the IDO and SQL objects are NOT yet read back (no readback, check-in, Form close/reopen or recovery in T6). See the T6 section at the end.**

(Superseded, after T5:) wizard OPEN on page 2 of 2 (Create Scripts unchecked; prompt "Click Finish to create the database table, IDO and optional form."). All four rows reconciled to the brief (T5 section). ONE Next was clicked (page 1 to page 2). Next is now disabled; Finish is ENABLED and was NOT invoked. No Finish, Cancel, unload, check-in, Create Form response or recovery has been performed. See the T5 section at the end.**

(Superseded, after T4:) rows 1 to 4 configured; Finish NOT invoked: wizard OPEN with four property rows in order (FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count). Row values are read back in the T4 section (accessibility readback is the proof for fields scrolled out of view). Row 4 has no Property Class and its Primary Key and Required are unchecked (defaults, not specified by the brief). Finish, Create Form, check-in, unload and recovery are NOT performed. See the T4 section at the end.**

(Superseded, after T3, row 1 only:) Row 1 (FX_OrderNumber) was corrected to Property Class FX_OrderNumBase with Primary Key and Required checked.

(Superseded history, after T2.) **Wizard was OPEN and NOT clean after T2.** The Data Maintenance wizard was opened once (EXP-049 route). Header verified (IDO Name `FX_Orders`, Project `FX_HelloWorldProject01`, Table Alias `fxords`, Site Split unchecked, Table Name empty and read-only). The Property Class lookup lists `FX_OrderNumBase`, `FX_CustomerID` and `FX_Item`, so **no contingency unload was needed (0 unloads)**. However, an Escape press during the lookup **committed `FX_Cost` into row 1** (wrong class). Clearing the class left inherited residue on row 1 (Data Type Decimal, SQL Data Type decimal, Length 18, Precision 2, Label `FX_sCost`, Default 0). The brief's clean uncommitted state was not reached, so T2 stopped for coordinator review. Finish, Next, Cancel, Create Form, check-in and recovery were not performed. See the T2 section at the end.

## Run identity

- Experiment EXP-071-R2, **cycle 0, task T1** (collision gate and record), run `R-20261013-143022-TV5o`, task_message_id `155c9250-1461-4d00-88c4-846552f0b879`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`.
- Date 2026-10-13 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Identity bar shows the operator sign-in account (not recorded here).
- Editing scope User; the Designer footer scope was not re-read in this task (the Designer tab was not selected).
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10).
- Evidence directory `evidence/EXP-071-R2/`.
- Record creation: this record did not exist at the start of T1 (Glob `experiments/EXP-071*` returned only EXP-071 and EXP-070 records). It was created by this worker in T1.

## Sources read before any browser action

- `AGENTS.md` (full).
- `experiments/EXP-071-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` (final status, collision-gate section, dependency table, outcome section). The gate failure: IDOs criterion not visible; criteria field read-only after the query; SQL criterion not captured before F4.
- `experiments/EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md` (status header, T8 to T11 wizard route, T13 to T17 SQL and IDO verification, T15 read-only criteria observation, T17 caution alert). Used for the wizard route and the known Sql Tables behaviour; the wizard itself was not opened in T1.
- `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` (status block and T1 to T3 sections). The three property classes and their EXP-070 values were taken from the EXP-071 dependency table, which records the EXP-070 values.
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 11 and the Orders schema quick reference: **not re-read in T1** (the wizard steps are not needed before the stop point). The Section 11 narration values remain as recorded in EXP-071 (trust: unverified speech-to-text transcript).
- `experiments/EXP-044…`: not read (not needed for T1).

## Baseline (starting state)

- Tabs before any selection (`browser_tabs` list): tab 0 = Designer (`mode=designer`, current); tab 1 = Web Client (Mongoose, `favoriteContext=SqlTables`).
- Tab 1 selected (after the list), then one untargeted snapshot. Web Client runtime Form-tabs open: `FX_Items`, `Property Classes`, `IDO Projects`, `IDOs`, `Sql Tables` (Sql Tables selected).
- Session usable. No `Session Expired` modal, no Infor sign-in page, no portal notification banner, no native browser dialog seen.
- Designer (tab 0): not selected and not acted on in T1.

## Collision gate (AC-1)

### Pre-close state of both Forms (clean check)

| Form | Observed before close | Evidence |
| --- | --- | --- |
| IDOs (`favoriteContext=IdoCollections`) | Save disabled (toolbar); New and Delete state as shown; grid empty with one blank IDO Name header; detail fields greyed; Check In and Undo Check Out disabled; status `Extends`; no dialog; FiP icon not shown on the tab (browse, zero rows) | `r2-00` |
| Sql Tables (`favoriteContext=SqlTables`) | Save disabled; one blue-star add-mode placeholder row (blank Table Name and Schema, red required asterisks); status `Multi-Site (SQL Tables 1 of 1)`; no dialog | `r2-01` |

Judgement (disclosed): the brief describes the Sql Tables placeholder as the expected open state from EXP-071 and asks to close the Form "if clean". Save was disabled, no dialog or unsaved-change prompt was present, so the Form was treated as clean. The IDOs Form was not in Filter-in-Place mode at close time (it showed no FiP icon and a greyed grid); it had no pending changes. Neither Form was discarded or saved.

### Close and reopen (once each)

| Step | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | IDOs tab selected (tab control) | IDOs Form active; clean | `r2-00` |
| 2 | IDOs closed once through `Close Panel IDOs` (Form-tab control) | IDOs tab removed from the Form-tab list (confirmed by read-only find) | find |
| 3 | Sql Tables state checked | Clean (see table above) | `r2-01` |
| 4 | Sql Tables closed once through `Close Panel Sql Tables` | Sql Tables tab removed (confirmed by read-only find); Form-tab list now FX_Items, Property Classes, IDO Projects | find |
| 5 | Form > Open > Select Form, filter `IdoCollections`, row `IDOs / IdoCollections`, OK | Filter box did not apply on fill alone; Tab commit filtered the grid to `G6RIdoCollectionSearch` and `IDOs / IdoCollections`. IDOs reopened (`favoriteContext=IdoCollections`) | `r2-02` (stale grid before Tab), `r2-03` (filtered after Tab) |
| 6 | IDOs fresh Form state | Opens **already in Filter in Place** (FiP icon on the IDOs tab, status `Filter in Place`, one blank criteria row, IDO Name criteria box focused, Save disabled). **No FiP click was made** (a click would likely toggle the mode off) | `r2-04` |
| 7 | IDO Name criteria field editable check | Textbox `IDO Name:` reported `[active]` with no readonly attribute (read-only find) | find |
| 8 | Criterion typed and committed | `FX_Orders` typed into IDO Name; Tab | `r2-05` |
| 9 | Pre-F4 criterion capture | IDO Name `FX_Orders`; grid echo row `FX_Orders`; status `Filter in Place` | `r2-05` |
| 10 | F4 once | Query run | — |
| 11 | Settled result | **Zero data rows**; grid empty with no placeholder row; detail fields greyed and blank; status `Filter in Place`; Save disabled; no dialog. The IDO Name criterion is not visible after the query (the field is greyed) | `r2-06` |

**IDOs result: absence established under the brief's rule (criterion visible before F4 and zero data rows after it). Observed, same session.**

- Positive control (EXP-071 `t1-07`: IDO `FX_Items`, project FX_HelloWorldProject01, alias fxitms, Revision 2) carried over; not re-run in T1.

- Sql Tables: close and reopen (steps below), in the same pattern.

| Step | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 12 | Form > Open > Select Form, filter `SqlTables`, row `Sql Tables / SqlTables`, OK | Filter typed then committed with Tab (grid filtered to `Sql Tables` and `Sql Tables Constraint`). Sql Tables reopened (`favoriteContext=SqlTables`) | find (refs) |
| 13 | Caution alertdialog `Sql Tables` ("Please be very careful using these forms…") | Accepted once with OK (informational, known from EXP-049 T17 and EXP-071) | find, click |
| 14 | Fresh Form state | Opens **already in Filter in Place** (FiP icon on tab, status `Filter in Place`, blank criteria row without star, Schema field focused). **No FiP click was made** | `r2-07` |
| 15 | Table Name criteria combobox | Not active on open. One click on the Table Name combobox (EXP-049 T17 pattern) made it `[active]` with no readonly attribute | find |
| 16 | Criterion typed and committed | `FX_Orders` typed into Table Name; Tab | `r2-08` |
| 17 | Pre-F4 criterion capture | Table Name combobox `FX_Orders`; echo row Table Name `FX_Orders`; Schema blank; status `Filter in Place` | `r2-08` |
| 18 | F4 once | Query run | — |
| 19 | Settled result | **Zero data rows**; only the blue-star add-mode placeholder (blank Table Name and Schema, red required asterisks); status `Multi-Site (SQL Tables 1 of 1)`; Save disabled; no dialog | `r2-09` |

**SQL result: absence established under the brief's rule (criterion visible before F4 and zero data rows after it). Observed, same session.** The placeholder is the zero-row pattern seen in EXP-049 T5 and EXP-071 `t1-12`; it is not a saved record (Save disabled).

- Positive control (EXP-071 `t1-10`: dbo.FX_Items, PK_FX_Items, IX_FX_Items_RowPointer) carried over; not re-run in T1.

### Interaction observations (observed only)

- Select Form filter: a fill alone did not update the grid; the Tab commit did (`r2-02` vs `r2-03`). Used for both reopens.
- IDOs Form: after the zero-row query the criterion field is greyed and the grid shows no placeholder (EXP-071 saw the same zero-row grid; the criterion is not visible after F4, so the pre-F4 capture is the only criterion evidence).
- Sql Tables Form: zero rows show the add-mode placeholder; the IDOs Form shows no placeholder for the same zero-row outcome. Difference observed, cause not established.
- The Sql Tables placeholder row was not cleared (no Save or New was used). It is an unsaved add-mode row, not a saved record.

## Dependency gate (AC-2): carried over

- Carried from EXP-071 T1 (AC-2 passed there): FX_HelloWorldProject01 (`t1-05`); FX_OrderNumBase (`t1-00`: Long Integer; default AUTONUMBER(); Column Data Type int; Label String ID FX_sOrderNumber; Justify Right); FX_CustomerID (`t1-01`: String 30; nvarchar; FX_sCustomerID; Domain IDO FX_HelloWorld01 / FX_Code / FX_Label); FX_Item (`t1-03`: Base FX_ItemBase; String 20; nvarchar; FX_sItem; Domain IDO FX_Items / FX_Item / FX_Description).
- **Not re-read in T1** (brief: re-read nothing unless the session shows a change; no change was seen). Incidental: the IDO Projects tab behind the Select Form dialog in `r2-02` shows Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access G6R.
- The Property Classes tab was not selected in T1.

## Positive controls (carried over, not re-run)

| Control | Source | Status in this task |
| --- | --- | --- |
| IDO `FX_Items` returns one row (project FX_HelloWorldProject01, alias fxitms, Revision 2) | EXP-071 `t1-07` | Carried over; not re-run |
| dbo.FX_Items returns one record (PK_FX_Items, IX_FX_Items_RowPointer) | EXP-071 `t1-10` | Carried over; not re-run |

## Acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; IDOs and Sql Tables closed clean and reopened fresh once each; FX_Orders criterion visible before F4 and zero data rows after it in each; EXP-071 positive controls cited | **SUPPORTED (observed, UI level, one run each).** Sources reviewed; session usable; both Forms clean before close; each closed once and reopened once. IDOs: criterion `r2-05`, zero rows `r2-06`. SQL: criterion `r2-08`, zero data rows (placeholder only) `r2-09`. Positive controls carried over: EXP-071 `t1-07`, `t1-10`. | `r2-00` to `r2-09` | Same session only. Positive controls not re-run in this task. |
| **AC-2** Dependency gate carried over (FX_HelloWorldProject01 and the three classes with EXP-070 values); nothing changed | **CARRIED OVER** from EXP-071 AC-2 (`t1-00`, `t1-01`, `t1-03`, `t1-05`). Nothing changed by T1. | EXP-071 screenshots (cited) | Not re-read in T1. |
| **AC-3** Wizard route, header, Table Name read-only and empty; lookup lists the three classes; unload count | **NOT RUN** (T1 stops before the wizard). Unloads 0. | — | — |
| **AC-4** Four properties in order | **NOT RUN.** | — | — |
| **AC-5** One Finish; one No to Create Form | **NOT RUN.** Finish 0; Create Form response 0. | — | — |
| **AC-6** FX_Orders readback (IDOs) and dbo.FX_Orders readback (SQL Columns); conditional check-in | **NOT RUN.** Check-ins 0. | — | — |
| **AC-7** IDOs and Sql Tables close and reopen after creation; one exact-name recovery each | **NOT RUN.** Recovery pair not reached. | — | — |
| **AC-8** Final report with audit | **PARTIAL (T1).** Audit, inventory and state below. | This record | Observed only. |

## Final browser state (end of T1)

- Web Client tab (tab 1) selected. Runtime Form-tabs: `FX_Items`, `Property Classes`, `IDO Projects`, `IDOs` (Filter in Place, FX_Orders criterion, zero rows, Save disabled), `Sql Tables` (Filter in Place, FX_Orders criterion, zero data rows with the add-mode placeholder row, Save disabled).
- No dialog open (Select Form and caution alert closed by OK). No unsaved-change prompt seen.
- Designer tab (tab 0) not selected or acted on after the initial list.
- Open question for the coordinator: whether the Sql Tables placeholder row should stay before any wizard task (EXP-071 raised the same question; not decided here).

## Action audit (T1, exact counts)

Counts are worker-requested browser calls. Tool-generated snapshot files and "Ran Playwright code" wrappers are not counted. The wrappers included DOM-ID-based locators generated by the tool (for example `#menuitem-1025-itemEl`, `#textfield-1260-inputEl`); the worker wrote no JavaScript and supplied refs and text only.

| Operation | Count |
| --- | --- |
| **Finish** | **0** |
| **Create Form response (Yes / No)** | **0 / 0** |
| **Save** (invoked) | **0** |
| **New** | **0** |
| **Delete** | **0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| **Unload All Global Form Objects / Designer or Web Client unload / FormSync / deployment** | **0 / 0 / 0 / 0** |
| Property class, IDO, table, project, string, extension or theme changes | **0** |
| Strings created; IDOs, tables, Forms created | **0** |
| Form close / Form reopen — IDOs | **1 / 1** |
| Form close / Form reopen — Sql Tables | **1 / 1** |
| Recovery (exact-name) queries after reopen | **0** (none in T1 scope) |
| Absence queries (Filter in Place, exact name) | **2** (IDOs FX_Orders; SQL Table Name FX_Orders) |
| Positive-control queries | **0** (carried over from EXP-071) |
| Dependency queries | **0** (carried over) |
| Filter in Place clicks (toolbar FiP) | **0** (both Forms opened already in Filter in Place) |
| Browser clicks (successful / failed) | **13 / 0** (IDOs tab 1; Close Panel IDOs 1; Close Panel Sql Tables 1; Form menu 2; Form > Open 2; Select Form row 2; Select Form OK 2; Sql Tables caution OK 1; Table Name criteria combobox 1) |
| `browser_type` fills (succeeded / refused) | **4 / 0** (Select Form filter IdoCollections 1; IDO Name criteria FX_Orders 1; Select Form filter SqlTables 1; Table Name criteria FX_Orders 1) |
| Key presses | **6** (Tab 4; F4 2) |
| Waits | **1** (2 s) |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted (worker-requested) | **1** (after tab select) |
| Snapshots targeted (worker-requested) | **0** |
| `browser_find` calls | **20** |
| Screenshots (worker-requested PNG) | **10** (`r2-00` to `r2-09`) |
| Ref-not-found errors / recovery snapshots used / timeouts | **0 / 0 / 0** |
| In-page dialogs answered | **3** (Select Form OK ×2; Sql Tables caution OK ×1) |
| Native browser dialogs | **0** |
| Portal banner dismissals | **0** (none visible) |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** |
| Designer actions | **0** |

## Worker-written-file inventory

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | created (this record) |
| `evidence/EXP-071-R2/r2-00-idos-tab-state-before-close.png` | created |
| `evidence/EXP-071-R2/r2-01-sqltables-state-before-close.png` | created |
| `evidence/EXP-071-R2/r2-02-select-form-dialog-idocollections-filter.png` | created |
| `evidence/EXP-071-R2/r2-03-select-form-dialog-after-tab-commit.png` | created |
| `evidence/EXP-071-R2/r2-04-idos-fresh-open-before-fip.png` | created |
| `evidence/EXP-071-R2/r2-05-idos-FX_Orders-criterion-before-F4.png` | created |
| `evidence/EXP-071-R2/r2-06-idos-FX_Orders-settled-after-F4.png` | created |
| `evidence/EXP-071-R2/r2-07-sqltables-fresh-open-before-fip.png` | created |
| `evidence/EXP-071-R2/r2-08-sqltables-FX_Orders-criterion-before-F4.png` | created |
| `evidence/EXP-071-R2/r2-09-sqltables-FX_Orders-settled-after-F4.png` | created |

The Playwright MCP tool wrote snapshot files (`evidence/playwright/page-2026-10-13T06-30-46-046Z.yml` to `page-2026-10-13T06-32-44-315Z.yml`, 14 files) and console logs (`evidence/playwright/console-2026-10-13T06-30-33-139Z.log`, `…-140Z.log`). These are tool-generated, not worker-authored. Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

## Decisive evidence (what each screenshot shows and what it does not prove)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-00` | IDOs tab selected; Form-tab bar with 5 tabs; Save greyed; grid empty; detail greyed; status `Extends`; no dialog | IDOs clean before close (Save disabled, no dialog) | Mode name beyond status; database state |
| `r2-01` | Sql Tables tab selected; blue-star placeholder row (blank Table Name / Schema); Save greyed; status `Multi-Site (SQL Tables 1 of 1)` | Sql Tables clean before close (Save disabled, no dialog) | That the placeholder is not a saved record (Save disabled supports it, not proven beyond the display) |
| `r2-02` | Select Form dialog; Filter `IdoCollections`; grid still lists `Sql Tables` and `Sql Tables Constraint` | The fill alone did not refresh the grid | — |
| `r2-03` | Select Form dialog after Tab; grid lists `G6RIdoCollectionSearch` and `IDOs / IdoCollections`; Filter By Name | The filter committed on Tab; target row present | Which row was chosen (the next step) |
| `r2-04` | IDOs Form freshly opened; FiP icon on the IDOs tab; status `Filter in Place`; one blank criteria row; IDO Name criteria box focused and blank; Save greyed | The Form opens in Filter in Place; criteria field available | Database state |
| `r2-05` | IDO Name criteria `FX_Orders`; echo row `FX_Orders`; status `Filter in Place`; Save greyed | **AC-1 criterion visible before F4 (IDOs)** | The F4 result |
| `r2-06` | IDOs grid empty (no data row, no placeholder); detail greyed and blank; status `Filter in Place`; Save greyed; no dialog | **AC-1 zero data rows after F4 (IDOs)** | Completeness beyond the display; case variants; the criterion is not visible here |
| `r2-07` | Sql Tables freshly opened (caution accepted); FiP icon; status `Filter in Place`; blank criteria row; Schema focused | Sql Tables opens in Filter in Place | Database state |
| `r2-08` | Table Name criteria `FX_Orders`; echo row `FX_Orders`; Schema blank; status `Filter in Place`; Save greyed | **AC-1 criterion visible before F4 (SQL)** | The F4 result |
| `r2-09` | Blue-star placeholder only (blank Table Name / Schema, red required asterisks); status `Multi-Site (SQL Tables 1 of 1)`; Save greyed | **AC-1 zero data rows after F4 (SQL)** | Completeness; the placeholder's cause; that `dbo.FX_Orders` is absent in the database (UI only) |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| IDOs `FX_Orders` absence: criterion visible before F4 and zero data rows after (same session) | **observed** (one run) |
| SQL `dbo.FX_Orders` absence: criterion visible before F4 and zero data rows (placeholder) after (same session) | **observed** (one run) |
| IDOs and Sql Tables Forms open already in Filter in Place (no FiP click needed) | **observed** (one run) |
| Select Form filter commits on Tab (a fill alone did not update the grid) | **observed** (one run; used for both reopens) |
| Sql Tables Table Name criteria is not active on open and needed one click to become active | **observed** (one run) |
| IDOs criterion greyed after the zero-row query; no placeholder row; Sql Tables shows a placeholder for zero rows | **observed** (one run); cause **unresolved** |
| EXP-071 positive controls (`t1-07`, `t1-10`) and dependency gate (`t1-00`, `t1-01`, `t1-03`, `t1-05`) | **observed** in EXP-071; **carried over, not re-observed** here |
| Wizard route, Property Class lookup, four-property entry, Finish, Create Form, check-in, recovery | **not performed** |

## Open questions and next permitted action

1. **Gate result:** both FX_Orders absence gates passed (observed, same session). The wizard was not opened (T1 scope).
2. **Next permitted action (requires the next task's authorisation):** the wizard task of EXP-071-R2 (New Form Definition > New Data > Maintenance, as in EXP-049), with the four properties and the single Finish. The brief permits the single lookup-contingency unload only if a class is missing from the lookup.
3. **Decision needed before the wizard task:** whether the unsaved Sql Tables placeholder row (Save disabled) may stay open. It was left in place here.
4. **Decision needed:** whether the IDOs and Sql Tables Forms should stay open in Filter in Place with the FX_Orders criteria (current state) or be closed before the wizard. Neither was closed again in T1.
5. Classification remains **observed only, NOT replay_verified.** Same-session UI evidence does not establish database absence or durability.

---

## T2 — AC-3 only: wizard header and Property Class lookup (wizard OPEN, NOT clean; stopped for coordinator review)

- Task T2, cycle 1, task_message_id `7c86087a-ffa7-481f-8bb9-9446162ebe44`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: read the sources; select the Designer; open New Form Definition > New Data > Maintenance once; set IDO Name, Project and Alias; verify Table Name; establish the Property Class lookup for the three classes; leave the wizard open and stop. No Finish, Next, Cancel, Create Form, check-in, configuration of remaining properties, recovery, or unload.
- The IDOs and Sql Tables Forms were **not touched in T2** and remain as T1 left them (IDOs in Filter in Place with the `FX_Orders` criterion and zero rows; Sql Tables in Filter in Place with the add-mode placeholder, Save disabled). The Web Client tab was not selected in T2.

### Sources read in T2 (before the wizard)

- `docs/mongoose/transcripts/hello-world-pt4.md` lines 261–285 (Section 11) and 333–344 (Orders schema quick reference). Trust: unverified (speech-to-text transcript). The tutorial's names are `Orders` / alias `Ords` / `Hello World` project; this task uses the FX_ names from the brief (`FX_Orders` / `fxords` / `FX_HelloWorldProject01`).
- `evidence/EXP-071/T2-final-blocked-report.md` (EXP-071 T2 blocked report).
- **Disclosure:** T1 did **not** read the transcript Section 11 before its browser actions. The T1 record states that it was not re-read in T1. This T2 read does not retroactively meet that sequencing requirement.

### Property class reconciliation against EXP-070 (documentary; the Property Classes Form was not re-opened in T2)

| Class | Narrated tutorial value (transcript) | EXP-070 / EXP-071 observed value | Reconciliation |
| --- | --- | --- | --- |
| `FX_OrderNumBase` | Long Integer; default `AUTO NUMBER()`; Column Data Type Int; label `s order number`; Justify Right | Long Integer; default `AUTONUMBER()`; Column Data Type `int`; `FX_sOrderNumber`; Justify Right (EXP-070 T4/T8; EXP-071 `t1-00`) | Matches. Exact stored default text is the EXP-070 value. |
| `FX_CustomerID` | String, Length **50**; domain Customer / ID / Name | String, Length **30** (brief adaptation); `nvarchar`; `FX_sCustomerID`; domain `FX_HelloWorld01` / `FX_Code` / `FX_Label` (EXP-070 T2; EXP-071 `t1-01`) | Matches the FX_ adaptation. Length 30 is the EXP-070 value, not the tutorial's 50. |
| `FX_Item` | Base class Item Base; domain Items / Item / Description; Orders overrides Length to 50 | Base `FX_ItemBase`; String 20 `nvarchar` inherited; `FX_sItem`; domain `FX_Items` / `FX_Item` / `FX_Description` (EXP-070 T3; EXP-071 `t1-03`) | Matches. Length 50 is the Orders-level override required by this task (not a class change). |

### Actions (T2, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer current; tab 1 Web Client (`favoriteContext=SqlTables`) | — |
| 2 | Select tab 0 (Designer); untargeted snapshot (large; saved by the tool) | Designer FX_Items design view; Save and Regenerate Form disabled; no dialog; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `r2-10` |
| 3 | Designer toolbar `New` (one click) | Form Wizard Selection dialog opened | `r2-11` (before category) |
| 4 | Category: New Data; Wizard: Maintenance; New Form radio; OK once | Dialog showed Category `NewData`, Wizard `Maintenance`, New Form selected | `r2-12` |
| 5 | Data Maintenance Wizard opened (wizard opening 1) | IDO Name blank; IDO Project `FX_HelloWorldProject01` (pre-populated by the wizard); Table Alias blank; Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default`; Site Split unchecked; Table Name and View Name greyed and empty; grid one blank row; Back, Next and Finish (Finish disabled) | `r2-13` |
| 6 | IDO Name `FX_Orders` (typed), Tab | Accepted | `r2-14` |
| 7 | Table Alias `fxords` (typed), Tab | Accepted. Focus moved to Form Type (not changed) | `r2-14` |
| 8 | Table Name | Not typed (read-only and empty) | `r2-13`, `r2-14` |
| 9 | Row 1 Name cell (one click), editor active, `FX_OrderNumber` typed, Tab | Name `FX_OrderNumber` in row 1. Only the first property name was entered, as the T2 instruction permits | `r2-15` |
| 10 | Row 1 Property Class `Open` (one click) | Native lookup opened with the full alphabetical class list (AccessAs, AlphaKey, … AssemblyReferences) | `r2-15` |
| 11 | Typed `FX_` key by key into the active class combobox | Combobox shows `FX_`; list not yet filtered | `r2-16` |
| 12 | F2 once | Prefix filter applied. Visible list: **FX_Cost** (highlighted), **FX_CustomerID**, **FX_Item**, **FX_ItemBase**, **FX_OrderNumBase**, **FX_Picture**, **FX_UM**, **FX_UMBase**. All three required classes are listed | `r2-17` |
| 13 | Escape once (intended: dismiss without selecting) | **Deviation:** Escape committed the highlighted first item, **FX_Cost**, to row 1 Property Class. Row 1 then showed Data Type `Decimal`, SQL Data Type `decimal`, and the combobox focused | `r2-18` |
| 14 | Backspace once (clear the combobox text), Tab once | Property Class cleared to blank. **Inherited residue remains:** Data Type `Decimal`, SQL Data Type `decimal`, Length `18`, Decimal Precision `2`, Label String ID `FX_sCost`, Default Value `0`; Primary Key and Required unchecked; the Data Type combobox is the active editor showing `Decimal` | `r2-19`; read-only snapshot of the grid |
| 15 | Stop | No further edit to row 1 (clearing the residue would mean configuring the property, outside T2 scope). Wizard left open with the residue | — |

### Gate and lookup results (AC-3)

- **Header:** verified (`r2-14`). IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Table Alias `fxords`; Site Split unchecked; Table Name empty and greyed (read-only; not typed).
- **Property Class lookup:** the three required classes are listed after the `FX_` prefix filter (`r2-17`): `FX_OrderNumBase`, `FX_CustomerID`, `FX_Item`. None is missing, so the lookup contingency (Unload All Global Form Objects) was **not** invoked. Unloads **0**.
- **Clean state:** **not reached.** Row 1 holds the FX_Cost residue described above. The T2 brief's "clean, uncommitted state with the lookup dismissed" is not met.

### Observations (observed only)

- Escape in the native class lookup committed the highlighted first option (FX_Cost) rather than cancelling. The lookup's highlighted row is therefore a commit, not a preview. Observed in one run.
- Clearing the class text and committing blank leaves the previously inherited Data Type, SQL Data Type, Length, Precision, Label and Default in row 1. Observed in one run; the cause is not established.
- The wizard header defaults Form Type to `MultiView` and Form Layout to `GridLeft`. Not changed in T2. Relevant to the later Create Form prompt (answer No).
- Table Name and View Name are greyed and empty with Site Split unchecked, as EXP-049 recorded.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-3** Wizard route, header, Table Name read-only and empty; lookup lists the three classes; unload count | **SUPPORTED for the route, header and lookup (observed, one run). The clean-state requirement is NOT met.** Route: Designer New > Form Wizard Selection (New Data / Maintenance) > OK. Header verified. Table Name read-only and empty. Lookup lists `FX_OrderNumBase`, `FX_CustomerID`, `FX_Item`. Unloads 0. | `r2-10` to `r2-19` | Row 1 residue from FX_Cost. Lookup verified only through the prefix-filtered list. Not re-verified in the Property Classes Form. |
| AC-1, AC-2 | Carried from T1 (not re-run in T2). Forms left as T1 left them. | T1 `r2-00` to `r2-09` | — |
| AC-4 to AC-8 | **NOT RUN** (T2 stops after AC-3). | — | — |

### Blocker and coordinator decision (stop)

**Blocker: the wizard is not clean.** Row 1 holds the FX_Cost residue from the accidental Escape commit. Nothing is persisted (no Finish; no object created), but the wizard state must be fixed or discarded before any Finish.

Options for the coordinator (none executed):

1. **Authorise a T3 correction on row 1 only:** set Property Class to `FX_OrderNumBase` through the native lookup (choosing the option by click, not Escape), then verify that Data Type, SQL Data Type, Length, Label and Default are replaced with the FX_OrderNumBase values (`Long Integer`, `int`, `FX_sOrderNumber`, default `AUTONUMBER()`) before entering the other properties. This would also mean the Primary Key and Required settings on row 1 are then set in the same task.
2. **Discard the wizard:** native Cancel, with the discard prompt answered by operator approval. This discards the wizard state only (no object exists). It would need a fresh T3 wizard run with a clean lookup.

Recommendation: option 1, provided the inherited values are replaced on re-selection. If they are not replaced, use option 2.

### Counts (T2 only)

| Operation | T2 |
| --- | --- |
| Wizard openings | **1** |
| Finish | **0** |
| Next / Back / Cancel | **0 / 0 / 0** |
| Create Form response (Yes / No) | **0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-in / check-out | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries | **0** |
| Designer edits | **0** (one wizard-open click; no Designer property or save change) |
| Designer toolbar `New` (wizard launch only; not a persisted object) | **1** |
| Persisted-object creation (Save, Delete; Designer top-toolbar Delete not clicked) | **Save 0 / Delete 0** (see the T3 reconciliation: the `New` click launched the wizard and created nothing) |
| Browser clicks (successful / failed) | **8 / 0** (Designer New 1; Category arrow 1; Category New Data 1; Wizard arrow 1; Wizard Maintenance 1; Form Wizard OK 1; row 1 Name cell 1; Property Class Open 1) |
| `browser_type` fills | **4 / 0** (IDO Name 1; Table Alias 1; row 1 Name 1; Property Class `FX_` slowly 1) |
| Key presses | **7** (Tab 4; F2 1; Escape 1; Backspace 1) |
| F4 | **0** |
| Waits | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted | **1 / 4** (the targeted reads: Form Wizard Selection dialog; wizard grid; right-hand grid twice) |
| `browser_find` calls | **18** |
| Screenshots (worker-requested PNG) | **10** (`r2-10` to `r2-19`) |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** |
| In-page dialogs answered | **1** (Form Wizard Selection OK) |
| Native browser dialogs | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 + T2)

| Operation | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Finish | 0 | 0 | **0** |
| Create Form Yes / No | 0 / 0 | 0 / 0 | **0 / 0** |
| Unloads | 0 | 0 | **0** |
| Check-ins | 0 | 0 | **0** |
| Form close / reopen (IDOs) | 1 / 1 | 0 / 0 | **1 / 1** |
| Form close / reopen (Sql Tables) | 1 / 1 | 0 / 0 | **1 / 1** |
| Recovery queries | 0 | 0 | **0** |
| Absence queries (FiP exact name) | 2 | 0 | **2** |
| Wizard openings | 0 | 1 | **1** |
| Clicks (successful / failed) | 13 / 0 | 8 / 0 | **21 / 0** |
| `browser_type` fills (succeeded / refused) | 4 / 0 | 4 / 0 | **8 / 0** |
| Key presses (Tab; F4; F2; Escape; Backspace) | 6 (Tab 4; F4 2) | 7 (Tab 4; F2 1; Escape 1; Backspace 1) | **13** (Tab 8; F4 2; F2 1; Escape 1; Backspace 1) |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | **2 / 2** |
| Snapshots untargeted / targeted | 1 / 0 | 1 / 4 | **2 / 4** |
| `browser_find` calls | 20 | 18 | **38** |
| Screenshots | 10 | 10 | **20** |
| In-page dialogs answered | 3 | 1 | **4** |
| Ref-not-found / timeouts | 0 / 0 | 0 / 0 | **0 / 0** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created; IDOs, tables, Forms created | 0 | 0 | **0** |

Note on T1 counts: the T1 record counted 13 clicks, 4 fills, 6 key presses and 20 finds. These figures are carried over unchanged.

### Worker-written-file inventory (T2)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T2 status line; this T2 section) |
| `evidence/EXP-071-R2/r2-10-designer-tab-state-before-wizard.png` | created |
| `evidence/EXP-071-R2/r2-11-form-wizard-selection-dialog-before-category.png` | created |
| `evidence/EXP-071-R2/r2-12-form-wizard-selection-NewData-Maintenance.png` | created |
| `evidence/EXP-071-R2/r2-13-wizard-page1-header-initial.png` | created |
| `evidence/EXP-071-R2/r2-14-wizard-header-identity-set.png` | created |
| `evidence/EXP-071-R2/r2-15-wizard-property-class-lookup-open-all-options.png` | created |
| `evidence/EXP-071-R2/r2-16-wizard-property-class-lookup-FX_-prefix-filtered.png` | created |
| `evidence/EXP-071-R2/r2-17-wizard-property-class-lookup-after-F2-FX_-filter.png` | created |
| `evidence/EXP-071-R2/r2-18-wizard-after-lookup-dismissed-uncommitted.png` | created (shows the FX_Cost commit) |
| `evidence/EXP-071-R2/r2-19-wizard-row1-after-accidental-FX_Cost-correction-attempt.png` | created (shows the residue) |

Tool-generated (not worker-authored): snapshot files written under `evidence/playwright/` by the MCP tool during T2.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-10` | Designer FX_Items design view; Save and Regenerate greyed; footer ScopeType User | Designer usable and clean before the wizard | Database state |
| `r2-12` | Form Wizard Selection: New Form; Category NewData; Wizard Maintenance | Route selection (AC-3 route) | The wizard result |
| `r2-13` | Data Maintenance Wizard, initial: IDO Name blank; Project FX_HelloWorldProject01; Table Name and View Name greyed and empty; Finish disabled | Wizard opened; Table Name read-only and empty before entry | Final header values |
| `r2-14` | Header: IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Alias `fxords`; Site Split unchecked; Table Name empty and greyed | AC-3 header | Stored values after Finish |
| `r2-17` | Prefix-filtered lookup list: FX_Cost, FX_CustomerID, FX_Item, FX_ItemBase, FX_OrderNumBase, FX_Picture, FX_UM, FX_UMBase | AC-3 three classes present in the native lookup | That the list is the full set of classes beyond the prefix |
| `r2-18` | Row 1 Property Class `FX_Cost` after Escape; Data Type Decimal; SQL Data Type decimal | The accidental commit | Why Escape committed |
| `r2-19` | Row 1 Property Class blank; Data Type Decimal residue; combobox active | The residue state at the stop | Whether the residue persists after a corrected class selection (not tested) |

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| Designer New > Form Wizard Selection (New Data / Maintenance) > OK opens the Data Maintenance Wizard | **observed** (one run) |
| Wizard header pre-populates IDO Project FX_HelloWorldProject01; Table Name and View Name read-only and empty with Site Split unchecked | **observed** (one run) |
| Native Property Class lookup lists `FX_OrderNumBase`, `FX_CustomerID` and `FX_Item` after an `FX_` prefix filter (type, then F2) | **observed** (one run) |
| Escape in the Property Class lookup commits the highlighted option | **observed** (one run); cause **unresolved** |
| Clearing the class leaves inherited Data Type, SQL Data Type, Length, Precision, Label and Default values on the row | **observed** (one run); cause **unresolved** |
| Route, header, lookup: AC-3 | **observed**; not replay_verified |
| Property rows, Finish, Create Form, check-in, recovery | **not performed** |

### Open questions and next action

1. The coordinator decides between option 1 (correct row 1 by selecting FX_OrderNumBase through the lookup, then verify the inherited values) and option 2 (native Cancel with operator approval). See the blocker section.
2. Whether the wizard's inherited values replace the FX_Cost residue on a corrected class selection is **untested**. The first step of any next task should check it.
3. The Sql Tables placeholder and the IDOs criterion from T1 remain. Neither was changed in T2.
4. Classification: **observed only, NOT replay_verified.** Same-session UI evidence only.

---

## T3 — Row 1 correction and verification (FX_OrderNumber only; wizard OPEN; rows 2 to 4 NOT added)

- Task T3, cycle 2, task_message_id `d67b8012-bbba-46f3-a352-28d06e37b8c0`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: preserve the open wizard and its header; inspect row 1; commit the active Data Type editor unchanged; select `FX_OrderNumBase` from the native lookup by clicking the visible list item (no Escape, no implicit highlight); verify the inherited values; set Primary Key and Required; stop after row 1. No Finish, Create Form, check-in, unload, IDOs or Sql Tables change, or row 2 to 4 configuration.
- Sources: the T2 record above (the residue state at the T2 stop). No further source re-read was needed; the T3 instruction was self-contained.

### Actions (T3, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Web Client (`favoriteContext=SqlTables`). A `find` for the wizard dialog confirmed the Data Maintenance Wizard is on tab 0 | — |
| 2 | Select tab 0 (Designer); targeted snapshot of the wizard dialog (`e1826`) | Header: IDO Name `FX_Orders`, Project `FX_HelloWorldProject01`, Table Alias `fxords`, Site Split unchecked; Table Name empty. Row 1 Name `FX_OrderNumber`; Property Class blank; **active Data Type combobox showing `Decimal`**; the residue row (`decimal`, 18, 2, `FX_sCost`, 0). Back disabled, Finish disabled | snapshot (inline) |
| 3 | Tab once | Data Type committed unchanged (`Decimal`); focus moved to the SQL Data Type editor (`decimal`); grid scrolled right | `r2-20` |
| 4 | Tab once | SQL Data Type committed unchanged (`decimal`); focus moved to Property Length (`18`) | snapshot `e1910` |
| 5 | Click the row's Property Class cell (`e1985`) | Length `18` committed unchanged; Property Class cell selected and its combobox made active (`e2048`, `Open` `e2049`) | snapshot `e1933` |
| 6 | Click the Property Class `Open` (`e2049`) | Native lookup opened with the unfiltered list (FX_ItemBase, FX_OrderNumBase, FX_Picture, …) | find |
| 7 | Click the visible list item **FX_OrderNumBase** (`e2286`, the item cell) | Class committed on explicit click. Row 1 **Property Class `FX_OrderNumBase`**; Data Type `Long Integer`; SQL Data Type `int`. Residue values replaced | `r2-21`, snapshot `e1826` |
| 8 | Tab once | Class committed; focus moved to the Data Type editor (`Long Integer`) | snapshot `e1980` |
| 9 | Click the row's Primary Key checkbox (`e1994`) | Primary Key toggled to **checked**. **Required was ticked automatically** (checked on the same row, as EXP-049 recorded for Primary Key), so Required was **not** clicked | snapshot `e1980` |
| 10 | Screenshot of row 1 with flags | Row 1 flags visible (Primary Key checked, Required checked); Decimal Precision column blank; Label column partly visible; Property Class, Data Type and SQL Data Type are scrolled off-screen in this image | `r2-22` |

Errors: none. No Ref-not-found, no timeout, no editor intercept, no second intercept on any cell. Fresh snapshots taken before each new ref.

### Row 1 verified values (accessibility snapshot `e1980` after step 9; screenshot `r2-22` shows the flags only)

| Field | Observed value | EXP-070 / EXP-071 reference | Result |
| --- | --- | --- | --- |
| Name | `FX_OrderNumber` | brief | Matches |
| Property Class | `FX_OrderNumBase` | brief | Matches |
| Data Type (inherited) | `Long Integer` | Long Integer (EXP-070 T4/T8; EXP-071 `t1-00`) | Matches |
| SQL Data Type (inherited; the SQL Column Data Type) | `int` | Column Data Type `int` (EXP-071 `t1-00`) | Matches |
| Property Length | **blank** | not stated for the class (EXP-071 `t1-00` shows no length) | No FX_Cost residue (18 cleared) |
| Decimal Precision | **blank** | not stated for the class | No FX_Cost residue (2 cleared) |
| Primary Key | **checked** | brief (set by this task) | Matches |
| Required | **checked** (auto-ticked by Primary Key) | brief (set by this task) | Matches |
| Label String ID (inherited) | `FX_sOrderNumber` | FX_sOrderNumber (EXP-070 T4/T8; EXP-071 `t1-00`) | Matches; no FX_sCost residue |
| Default Value (inherited) | `AUTONUMBER()` | AUTONUMBER() (EXP-070; EXP-071 `t1-00`) | Matches; no `0` residue |

Justify is not a wizard column and was not visible; not verified in the wizard.

**Correction verdict:** the explicit class selection fully replaced the FX_Cost-inherited Data Type, SQL Data Type, Label and Default values, and the Length and Precision residue is blank. The T2 open question ("does a correct class selection replace the FX_Cost residue?") is **answered for this run: yes, observed**.

### Deviations and notes (T3)

- The Data Type editor was committed by Tab, and the SQL Data Type editor was committed by Tab (both unchanged). The Length editor was left by clicking the Property Class cell (unchanged `18`). These are normal native commits; the values did not change before the class selection replaced them.
- The Primary Key click auto-ticked Required. No redundant Required toggle was made.
- Screenshot limitation: `r2-22` does not show the Property Class or the inherited type/label columns (scrolled off). Those values are proven by the accessibility snapshot `e1980`, not by the image. `r2-21` shows FX_OrderNumBase, Long Integer and int with the lookup just closed.
- The Form Type `MultiView` and Form Layout `GridLeft` header defaults were not changed.

### Wizard state at the end of T3

- Data Maintenance Wizard OPEN, on the Designer tab (tab 0, current). Header unchanged (`FX_Orders` / `FX_HelloWorldProject01` / `fxords`; Site Split unchecked; Table Name empty and read-only).
- Row 1: `FX_OrderNumber`, `FX_OrderNumBase`, `Long Integer`, `int`, Length blank, Precision blank, Primary Key checked, Required checked, `FX_sOrderNumber`, `AUTONUMBER()`.
- Rows 2 to 4: **not added**. Finish disabled. Back disabled. Next enabled but not pressed. Cancel not pressed.
- No dialog open; no unsaved Designer change; no Save; no Finish.
- IDOs and Sql Tables Forms were not touched in T3 (they remain as T1 left them).

### Reconciliation of the T2 audit wording (New)

The T2 counts recorded "Save / New / Delete 0 / 0 / 0". That was incorrect as worded. T2 made **one Designer toolbar `New` click** (step 3 of the T2 actions) which **launched the Form Wizard Selection dialog**. It did not create any persisted object. The corrected classification is:

| Category | T2 | Note |
| --- | --- | --- |
| Designer toolbar `New` (wizard-launch click) | **1** | Opened Form Wizard Selection, then the Data Maintenance Wizard. Not an object creation. |
| Persisted-object creation (IDO, SQL table, Form, property, string) | **0** | Nothing was saved, finished or created. |
| `Save` | **0** | |
| `Delete` (top-toolbar Delete Form Definition) | **0** | Not clicked. |

The T1 counts (`New 0`) are correct: no `New` was clicked in T1.

### Action counts (T3 only)

| Operation | T3 |
| --- | --- |
| Wizard openings | **0** (the wizard was not reopened; the same wizard instance was used) |
| Finish | **0** |
| Next / Back / Cancel | **0 / 0 / 0** |
| Create Form response (Yes / No) | **0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-in / check-out | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries | **0** |
| Designer toolbar `New` (wizard launch) | **0** (none in T3) |
| Persisted-object creation / Save / Delete | **0 / 0 / 0** |
| Browser clicks (successful / failed) | **4 / 0** (Property Class cell 1; Property Class Open 1; FX_OrderNumBase item 1; Primary Key checkbox 1) |
| `browser_type` fills | **0** |
| Key presses | **3** (Tab 3) |
| Waits | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted | **0 / 6** (`e1826` ×2; `e1910`; `e1933`; `e1980` ×2) |
| `browser_find` calls | **2** (`Data Maintenance Wizard`; `FX_OrderNumBase`) |
| Screenshots (worker-requested PNG) | **3** (`r2-20`, `r2-21`, `r2-22`) |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** |
| In-page dialogs answered | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

Note: the T3 snapshot count includes the `e1826` targeted snapshot twice (once before the first Tab and once after the class selection), which is why it is listed as two.

### Cumulative browser action audit (T1 + T2 + T3)

| Operation | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Finish | 0 | 0 | 0 | **0** |
| Create Form Yes / No | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Unloads | 0 | 0 | 0 | **0** |
| Check-ins | 0 | 0 | 0 | **0** |
| Wizard openings | 0 | 1 | 0 | **1** |
| Designer toolbar `New` (wizard launch; not object creation) | 0 | 1 | 0 | **1** |
| Persisted-object creation (IDO, table, Form, property, string) | 0 | 0 | 0 | **0** |
| Save / Delete | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** |
| Recovery queries | 0 | 0 | 0 | **0** |
| Absence queries (FiP exact name) | 2 | 0 | 0 | **2** |
| Clicks (successful / failed) | 13 / 0 | 8 / 0 | 4 / 0 | **25 / 0** |
| `browser_type` fills (succeeded / refused) | 4 / 0 | 4 / 0 | 0 / 0 | **8 / 0** |
| Key presses (Tab; F4; F2; Escape; Backspace) | 6 (Tab 4; F4 2) | 7 (Tab 4; F2 1; Escape 1; Backspace 1) | 3 (Tab 3) | **16** (Tab 11; F4 2; F2 1; Escape 1; Backspace 1) |
| Waits | 1 | 0 | 0 | **1** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** |
| Snapshots untargeted / targeted | 1 / 0 | 1 / 4 | 0 / 6 | **2 / 10** |
| `browser_find` calls | 20 | 18 | 2 | **40** |
| Screenshots | 10 | 10 | 3 | **23** |
| In-page dialogs answered | 3 | 1 | 0 | **4** |
| Ref-not-found / timeouts | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Re-logins | 0 | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | 0 | **0** |
| Strings created; IDOs, tables, Forms created | 0 | 0 | 0 | **0** |

Notes on the cumulative table: the T1 `browser_type` and click counts are as recorded in the T1 section. The T2 "Key presses 7" and T3 "Tab 3" are the counts for those tasks. The cumulative Tab total is 4 (T1) + 4 (T2) + 3 (T3) = 11.

### Worker-written-file inventory (T3)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T3 status line; T2 Designer-New reconciliation; this T3 section) |
| `evidence/EXP-071-R2/r2-20-t3-row1-state-before-class-selection.png` | created |
| `evidence/EXP-071-R2/r2-21-t3-row1-after-explicit-FX_OrderNumBase-selection.png` | created |
| `evidence/EXP-071-R2/r2-22-t3-row1-FX_OrderNumber-configured-flags.png` | created |

Tool-generated (not worker-authored): snapshot files written under `evidence/playwright/` by the MCP tool during T3.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-20` | Wizard header (FX_Orders, FX_HelloWorldProject01, fxords); row 1 FX_OrderNumber; Data Type and SQL Data Type fields show `Decimal` / `decimal` before class selection; Property Class blank | The state before the correction (residue present) | The class value (blank in this image) |
| `r2-21` | Row 1 Property Class `FX_OrderNumBase` (combobox showing it); Data Type `Long Integer`; SQL Data Type `int`; header unchanged | The explicit class selection and the replaced Data Type and SQL Data Type, visible immediately after selection | Length, Precision, Label and Default (scrolled off); the flags |
| `r2-22` | Row 1 Primary Key checked, Required checked; Decimal Precision blank; Label partially visible | The configured flags | Property Class, Data Type, SQL Data Type, Label and Default values (scrolled off; see `e1980` snapshot) |
| snapshot `e1980` (inline, after step 9) | Row 1: `FX_OrderNumBase`, `Long Integer`, `int`, Length blank, Precision blank, checkbox checked ×2, `FX_sOrderNumber`, `AUTONUMBER()` | Full row 1 values and flags (accessibility) | Persistence; that the inherited values are stored (only displayed) |

Acceptance checks (T3 scope):
- **AC-3** (class lookup and header): supported by T2 (`r2-14`, `r2-17`); T3 re-confirmed the header (`r2-20`).
- **AC-4** (row 1 only): row 1 **supported** (class, inherited values and flags as above). Rows 2 to 4 **not run** by design. Four-row verification is outstanding.
- **AC-5, AC-6, AC-7, AC-8**: not run (no Finish or post-creation step by design).

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| Selecting FX_OrderNumBase from the native lookup by clicking the visible item fully replaces the FX_Cost-inherited Data Type, SQL Data Type, Label and Default, and blanks the residue Length and Precision | **observed** (one run) |
| Escape in the lookup committed FX_Cost (T2); an explicit item click did not | **observed** (one run each) |
| Primary Key checked auto-checks Required on the same row | **observed** (one run; consistent with EXP-049 T9/T11) |
| Long Integer / int / FX_sOrderNumber / AUTONUMBER() are the inherited values of FX_OrderNumBase in the wizard | **observed** (one run), consistent with EXP-070 and EXP-071 `t1-00` |
| Length and Precision are blank for FX_OrderNumBase in the wizard | **observed** (one run); not stated in EXP-070 |
| Finish, persisted object, check-in, recovery | **not performed** |

### Open questions and next action

1. **Rows 2 to 4 are not configured.** The next permitted step (coordinator authorisation required) is row 2 (FX_CustomerID, Property Class FX_CustomerID, Required), then rows 3 and 4 as the brief specifies. Each row should be checked for FX_Cost-style residue on its class selection, as this run did.
2. The Sql Tables placeholder (T1) and the IDOs criterion (T1) remain unchanged.
3. Classification: **observed only, NOT replay_verified.**

---

## T4 — Rows 2, 3 and 4 configured; four-row readback; Finish NOT invoked (wizard OPEN)

- Task T4, cycle 3, task_message_id `5120dcb8-4ad0-41f3-bece-ba74276c03d0`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: preserve the wizard header and verified row 1; add and configure rows 2, 3 and 4 only; use the native Property Class lookup by clicking the intended visible entry; record inherited values; read back all four rows. No Finish, Next, Cancel, Create Form, check-in, unload, IDOs or Sql Tables change, Web Client action, or recovery query.
- Tab list was read before the first selection (tab 0 current; tab 1 Web Client). Tab 0 was selected; the wizard was confirmed open by a targeted snapshot of the dialog. Row 1 was unchanged at the start.

### Actions (T4, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list; `find` "Data Maintenance Wizard" | Tab 0 current; wizard dialog present | — |
| 2 | Select tab 0; targeted snapshot of the wizard dialog | Header intact (FX_Orders; FX_HelloWorldProject01; fxords; Site Split unchecked; Table Name empty). Row 1 intact (FX_OrderNumBase, Long Integer, int, PK ✓, Req ✓, FX_sOrderNumber, AUTONUMBER()). Finish and Back disabled | snapshot |
| 3 | Add Row (click) | Row 2 added; Name editor active | snapshot (`e1910`) |
| 4 | Name `FX_CustomerID` typed; Tab | Name committed; Property Class combobox active | snapshot |
| 5 | Property Class Open (click); `find` "FX_CustomerID" | Native lookup open; `FX_CustomerID` listed as a visible option | find |
| 6 | Click the visible option `FX_CustomerID` | Class committed explicitly (not Escape, not highlight). Inherited values displayed (below) | snapshot (`e1933`) |
| 7 | Required checkbox (click) | Required checked. Primary Key left unchecked | snapshot (`e1980`) |
| 8 | Screenshot `r2-23` | Rows 1 and 2 visible (Name, Primary Key, Required, Label) | `r2-23` |
| 9 | Add Row (click); Name `FX_Item` typed; Tab | Row 3 added and named | snapshot |
| 10 | Property Class Open (click); `find` "FX_Item" | Lookup lists `FX_Item` **and** `FX_ItemBase` as separate options | find |
| 11 | Click the exact option `FX_Item` (not `FX_ItemBase`) | Class committed; inherited Length 20 displayed | snapshot (`e1933`) |
| 12 | Property Length cell (click); editor active (value 20); `50` typed; Tab | Length overridden to 50 | snapshot (`e1980`) |
| 13 | Required checkbox (click) | Required checked. Primary Key left unchecked | snapshot (`e1980`) |
| 14 | Add Row (click); Name `FX_Count` typed; Tab | Row 4 added and named | snapshot |
| 15 | Data Type cell (click); Open (click); `find` "Long Integer"; click the visible option `Long Integer` | Data Type `Long Integer`; SQL Data Type auto-populated `int` | snapshot (`e1980`) |
| 16 | Label String ID cell (click); `FX_sCount` typed (combobox); Tab | Label `FX_sCount` typed and committed as a free-text value; the wizard showed no validation message. The string was **not** created or edited | snapshot |
| 17 | Default Value cell; `1` typed; Tab | Tab did **not** commit the default (the grid cell stayed blank with the textbox still showing `1`). See deviation D2 | snapshot (`e1980`) |
| 18 | Label cell clicked (to move focus), then Tab | Focus returned to the label editor (showing `FX_sCount`); the default then displayed `1` in the grid. See deviation D2 | snapshot |
| 19 | Row-number cell (click, left grid) | First attempt: `Ref ... not found` (stale ref). One fresh untargeted snapshot taken (recovery allowance 1 of 1). Its saved file could not be read (read permission denied for the tool result file), so the grid was re-read with a targeted `find` for `FX_Count` (current ref) and then clicked. Row-number click succeeded; focus left the editor | find; snapshot (`e1980`) |
| 20 | Screenshot `r2-25` (scrolled view) | Names, Required, Label and Default visible for all four rows | `r2-25` |
| 21 | Screenshot `r2-24` (taken after row 3 configured, before row 4) | Rows 1 to 3 visible (Name, Primary Key, Required, Label) | `r2-24` |

### Four-row readback (T4 final; accessibility snapshot `e1980` after action 19)

Inherited values are those the wizard displayed on each row. "Original inherited" means the value the class supplied before any worker override.

| Row | Name | Property Class | Data Type | SQL Column Data Type (SQL Data Type) | Property Length (original inherited → final) | Decimal Precision | Primary Key | Required | Label String ID | Default Value |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_OrderNumber | FX_OrderNumBase | Long Integer | int | blank → blank (none inherited) | blank | ✓ (checked, T3) | ✓ (auto-ticked by PK, T3) | FX_sOrderNumber | AUTONUMBER() |
| 2 | FX_CustomerID | FX_CustomerID | String | nvarchar | 30 → **30 (no override)** | blank | ☐ (unchecked, as set) | ✓ (set by T4) | FX_sCustomerID | blank |
| 3 | FX_Item | FX_Item | String | nvarchar | 20 (via FX_ItemBase) → **50 (overridden)** | blank | ☐ (unchecked, as set) | ✓ (set by T4) | FX_sItem | blank |
| 4 | FX_Count | (none; no class) | Long Integer | int (auto) | blank → blank | blank | ☐ (default, not specified) | ☐ (default, not specified) | FX_sCount (typed) | 1 |

- Rows 1 to 4 are in the order required by the brief. Row 4 has no Property Class (the brief asked for none unless the wizard required one; the wizard did not prompt for one).
- Row 4 Primary Key and Required were not specified by the brief. Per the brief, they were left at their defaults and are reported as unchecked.
- Row 4 Label `FX_sCount` is the typed value. Whether the string resource exists was **not** verified (the brief forbade creating it). The wizard accepted it without a message.
- SQL Column Data Type: the wizard showed the Data Type SQL type for every row (`int` for Long Integer rows; `nvarchar` for String rows). No row needed a manual SQL Column Data Type. The tutorial's Customer ID SQL-type note was satisfied by the inherited `nvarchar` (as the brief anticipated).
- Row 1 was not changed in T4. Row 2 and row 3 were not changed after their configuration (verified in the T4 snapshots `e1980`).

### Evidence and visual limits (T4)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-23` (rows 1–2, after row 2 Required) | Header; rows 1 and 2 with Name, Primary Key, Required, Label String ID (FX_sCustomerID) visible; row 2 Required checked, Primary Key unchecked | Row 2 names and flags | Property Class, Data Type, SQL type, Length and Default (scrolled out of view); the accessibility readback is the proof for those |
| `r2-24` (rows 1–3, after row 3 Required) | Rows 1 to 3 Name, Primary Key, Required, Label visible; row 3 `FX_Item` Required checked, Primary Key unchecked, FX_sItem | Row 3 names and flags | Length 50 and Property Class (scrolled out of view) |
| `r2-25` (four rows, scrolled right; Finish greyed) | Name, Required, Label String ID, Default Value: row 1 AUTONUMBER(), row 2 blank, row 3 blank, row 4 `1`; Required ✓ ✓ ✓ ☐; labels FX_sOrderNumber, FX_sCustomerID, FX_sItem, FX_sCount; Finish disabled | Names, Required flags, labels and defaults across all four rows at once | Primary Key, Property Class, Data Type, SQL type, Length and Precision (scrolled out of view); see the readback above |

### Deviations and exceptions (T4)

- **D1. Property Class, row 2 and row 3:** selected by clicking the intended visible option (FX_CustomerID; FX_Item, not FX_ItemBase). No Escape was used. No unexpected class commit occurred.
- **D2. Default Value commit (row 4):** Tab did not commit the default `1`. The grid cell stayed blank while the textbox showed `1`. Clicking the label cell reopened the label editor (FX_sCount), and a further Tab committed the label but left the default editor showing `1` again. Finally, a click on the row-number cell (left grid) moved focus out, and the grid then displayed Default `1`. This is an observed display/commit lag, not a value change. One intermediate state showed `FX_sCount` in the label editor with a blank grid cell; this was resolved by the Tab and the row-number click.
- **D3. Editor intercepts and timeouts:** none. The grid-editor intercept rule was not triggered (no editor-intercepted timeout occurred on any cell).
- **D4. Stale ref:** one `Ref e2995 not found` error (action 19). Recovery: one fresh untargeted snapshot (allowance used once). Its saved result file could not be read (read permission denied), so the current ref was taken from a targeted `find` for `FX_Count` and used for the click. The brief's rule is that a targeted find is not a substitute for the recovery snapshot; the untargeted snapshot was taken and counted, and the click used a ref confirmed by `find` in that state. Disclosed.
- **D5. Console error counter:** the Web Client console counter moved from 3 to 4 errors during the row 4 default Tab. Console inspection is out of scope and was not performed; the change is recorded only.
- **D6. Label typed without a string check:** `FX_sCount` was accepted as typed in the Label String ID combobox with no validation message. Not verified against a resource list.

### Final wizard state (end of T4)

- Data Maintenance Wizard OPEN on the Designer tab (tab 0, current). Header unchanged. Four rows in order. No active editor. No dialog open.
- Finish DISABLED (greyed in `r2-25`); Back disabled; Next and Cancel enabled and **not pressed**.
- Not performed: Finish, Next, Cancel, Create Form response, check-in, unload, IDOs or Sql Tables change, Web Client action, recovery query, Save, Delete, FormSync, deployment.

### Action counts (T4 only)

| Operation | T4 |
| --- | --- |
| Wizard openings | **0** (same wizard instance) |
| Finish | **0** |
| Next / Back / Cancel | **0 / 0 / 0** |
| Create Form response (Yes / No) | **0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-in / check-out | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries | **0** |
| Designer toolbar `New` (wizard launch) | **0** |
| Persisted-object creation / Save / Delete | **0 / 0 / 0** |
| Clicks (successful / failed) | **16 / 1** (the failed click returned `Ref e2995 not found`; no action executed). Successful: Add Row ×3; Property Class Open ×2; Property Class option ×2; Required ×2; Length cell 1; Data Type cell 1; Data Type Open 1; Data Type option 1; Label cell 1; Label-cell focus click 1; row-number 1 |
| `browser_type` fills (succeeded / refused) | **6 / 0** (row 2 Name; row 3 Name; row 3 Length `50`; row 4 Name; row 4 Label `FX_sCount` (combobox); row 4 Default `1`) |
| Key presses | **7** (Tab ×7) |
| F4 / F2 / Escape / Backspace | **0 / 0 / 0 / 0** |
| Waits | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted | **1 / 17** (the untargeted one was the recovery snapshot, action 19; its saved file was not readable) |
| `browser_find` calls | **10** |
| Screenshots (worker-requested PNG) | **3** (`r2-23`, `r2-24`, `r2-25`) |
| Ref-not-found errors / timeouts / editor intercepts | **1 / 0 / 0** |
| In-page dialogs answered | **0** |
| Native browser dialogs | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

Note on counts: these counts are from this session's call sequence, not from a controller ledger. Snapshot and find totals are the worker's own tally.

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Operation | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Finish | 0 | 0 | 0 | 0 | **0** |
| Create Form Yes / No | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Unloads | 0 | 0 | 0 | 0 | **0** |
| Check-ins | 0 | 0 | 0 | 0 | **0** |
| Wizard openings | 0 | 1 | 0 | 0 | **1** |
| Designer toolbar `New` (wizard launch; not object creation) | 0 | 1 | 0 | 0 | **1** |
| Persisted-object creation (IDO, table, Form, property, string) | 0 | 0 | 0 | 0 | **0** |
| Save / Delete | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | 0 / 0 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | 0 / 0 | 0 / 0 | **1 / 1** |
| Recovery queries (post-creation) | 0 | 0 | 0 | 0 | **0** |
| Absence queries (FiP exact name, pre-gate) | 2 | 0 | 0 | 0 | **2** |
| Clicks (successful / failed) | 13 / 0 | 8 / 0 | 4 / 0 | 16 / 1 | **41 / 1** |
| `browser_type` fills (succeeded / refused) | 4 / 0 | 4 / 0 | 0 / 0 | 6 / 0 | **14 / 0** |
| Key presses (Tab; F4; F2; Escape; Backspace) | 6 (Tab 4; F4 2) | 7 (Tab 4; F2 1; Escape 1; Backspace 1) | 3 (Tab 3) | 7 (Tab 7) | **23** (Tab 18; F4 2; F2 1; Escape 1; Backspace 1) |
| Waits | 1 | 0 | 0 | 0 | **1** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **4 / 4** |
| Snapshots untargeted / targeted | 1 / 0 | 1 / 4 | 0 / 6 | 1 / 17 | **3 / 27** |
| `browser_find` calls | 20 | 18 | 2 | 10 | **50** |
| Screenshots | 10 | 10 | 3 | 3 | **26** |
| In-page dialogs answered | 3 | 1 | 0 | 0 | **4** |
| Ref-not-found / timeouts / editor intercepts | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 0 / 0 | **1 / 0 / 0** |
| Re-logins | 0 | 0 | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | 0 | 0 | **0** |
| Strings created; IDOs, tables, Forms created | 0 | 0 | 0 | 0 | **0** |

Reconciliation note: the T2 and T3 cumulative figures are carried forward from their own sections; the T1 Tab count (4) and T2 Tab count (4) are as recorded there.

### Worker-written-file inventory (T4)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T4 status line; this T4 section) |
| `evidence/EXP-071-R2/r2-23-t4-row2-FX_CustomerID-configured.png` | created |
| `evidence/EXP-071-R2/r2-24-t4-row3-FX_Item-length50-configured.png` | created |
| `evidence/EXP-071-R2/r2-25-t4-four-row-grid-before-finish-not-invoked.png` | created |

Tool-generated (not worker-authored): snapshot files written under `evidence/playwright/` by the MCP tool during T4, and the untargeted snapshot result file written to the session tool-results directory (outside the repository; not readable by this worker).

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| Explicit native lookup selection of FX_CustomerID inherits String, nvarchar, Length 30 and label FX_sCustomerID; the default is blank | **observed** (one run) |
| FX_Item inherits String, nvarchar, Length 20 (base FX_ItemBase); an explicit Length 50 override takes effect | **observed** (one run) |
| The lookup lists FX_Item and FX_ItemBase as separate options; the exact option click selects the intended class | **observed** (one run) |
| Long Integer sets the SQL Data Type to `int` automatically on a class-less row | **observed** (one run) |
| The wizard accepts a typed Label String ID (FX_sCount) without validation; existence of the string is not verified | **observed**; existence **unresolved** |
| Tab does not always commit the grid default editor; a focus change (row-number click) does | **observed** (one run); cause **unresolved** |
| Row 4 (no class) shows Primary Key and Required unchecked; the brief did not specify them, so no auto-tick behaviour was tested | **observed** (row state only); auto-tick on a class-less row **not tested** |
| Finish, persisted object, check-in, recovery | **not performed** |

### Open questions and next action

1. Whether FX_sCount exists as a string resource. Not verified; the brief forbids creating it. The Finish or the post-creation IDO readback will show the stored label.
2. Row 4 Primary Key and Required are unchecked. The brief did not specify them. The coordinator should confirm this is the intended configuration before Finish.
3. Row 4 has no Property Class. The brief permitted this. The coordinator should confirm.
4. The next permitted step is the coordinator's authorisation for Finish (one invocation) and the Create Form prompt answer (No). Before that, the four-row readback above is the verification basis.
5. Classification: **observed only, NOT replay_verified.**

---

## T5 — Pre-Finish reconciliation and one bounded Next (wizard OPEN on page 2; Finish NOT invoked)

- Task T5, cycle 4, task_message_id `aab27f06-5875-4043-8c22-af51dcf9b5e9`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: reconcile the header and the four rows against the brief; capture the grid by horizontal scrolling; click Next once if visibly enabled; stop on page 2. No Finish, Cancel, unload, check-in, IDOs or Sql Tables change, or row change. Creation of FX_sCount was not attempted.
- Tab list read before the first selection (tab 0 current; tab 1 Web Client). Tab 0 selected; targeted snapshot `e1826` of the dialog. No untargeted snapshot was taken (T4's recovery allowance was already consumed; none was used).

### Reconciliation (targeted snapshots `e1826` and `e1954`, before Next)

| Item | Brief requirement | Observed | Result |
| --- | --- | --- | --- |
| IDO Name | FX_Orders | `FX_Orders` | Match |
| IDO Project Name | FX_HelloWorldProject01 | `FX_HelloWorldProject01` | Match |
| Table Alias | fxords | `fxords` | Match |
| Site Split | unchecked | unchecked | Match |
| Table Name | empty and read-only | empty (no value in the accessibility tree); greyed in `r2-26` and `r2-27`; the read-only attribute was **not** read explicitly | Match (appearance); read-only attribute not independently read |
| View Name | (not specified) | empty | Observed |
| Form Type / Form Layout / Device Type | (not specified; T2 defaults) | MultiView / GridLeft / Default | Observed; not changed |
| Row 1 Name / Class / Data Type / SQL / Length / Precision | FX_OrderNumber / FX_OrderNumBase / Long Integer / int / (blank) / (blank) | FX_OrderNumber / FX_OrderNumBase / Long Integer / int / blank / blank | Match |
| Row 1 PK / Required / Label / Default | PK checked / Required checked / FX_sOrderNumber / AUTONUMBER() | ☑ / ☑ / FX_sOrderNumber / AUTONUMBER() | Match |
| Row 2 Name / Class / Data Type / SQL / Length | FX_CustomerID / FX_CustomerID / String / nvarchar / 30 | FX_CustomerID / FX_CustomerID / String / nvarchar / 30 | Match |
| Row 2 PK / Required / Label / Default / Precision | PK unchecked / Required checked / FX_sCustomerID / (none) / (blank) | ☐ / ☑ / FX_sCustomerID / blank / blank | Match |
| Row 3 Name / Class / Data Type / SQL / Length | FX_Item / FX_Item / String / nvarchar / 50 | FX_Item / FX_Item / String / nvarchar / 50 | Match |
| Row 3 PK / Required / Label / Default / Precision | PK unchecked / Required checked / FX_sItem / (none) / (blank) | ☐ / ☑ / FX_sItem / blank / blank | Match |
| Row 4 Name / Class / Data Type / SQL / Length | FX_Count / (blank) / Long Integer / int / (blank) | FX_Count / blank / Long Integer / int / blank | Match |
| Row 4 PK / Required / Label / Default / Precision | PK unchecked / Required unchecked / FX_sCount / 1 / (blank) | ☐ / ☐ / FX_sCount / 1 / blank | Match (flags as the brief allows) |

**Unexpected populated fields:** none found. Specifically, no FX_Cost residue (no 18, 2, `decimal`, `FX_sCost` or `0`) remains on any row; no Length or Precision value appears on rows 1 or 4; no Decimal Precision value appears on any row. **Inconsistent values:** none. No repair was made.

**Inherited / effective values (for AC-4 record):** Row 1 inherits Long Integer, `int`, `FX_sOrderNumber`, `AUTONUMBER()` from FX_OrderNumBase. Row 2 inherits String, `nvarchar`, 30, `FX_sCustomerID` from FX_CustomerID; no SQL Column Data Type had to be set by hand (the brief's tutorial note about Customer ID is satisfied by the inherited `nvarchar`). Row 3 inherits String, `nvarchar`, 20 from FX_Item (base FX_ItemBase); the worker override makes it 50; label `FX_sItem`. Row 4 has no class and takes Long Integer / `int` from its own Data Type choice.

### Four-row screenshot coverage (horizontal grid scrolling; visible states only)

| File | Columns visible (per the screenshot) | Limits |
| --- | --- | --- |
| `r2-26` (pre-scroll, scrolled right) | Name, Required, Label String ID, Default Value (all four rows) | Other columns off-screen |
| `r2-27` (one left step) | Name, (a partly clipped Primary Key header), Required, Label, Default | Partly clipped |
| `r2-28` (further left) | Name, Primary Key, Required, Label String ID, Default (partly) | Property Class, Data Type, SQL, Length, Precision off-screen |
| `r2-29` (further left) | Decimal Precision (clipped header), Primary Key, Required, Label | Property Class, Data Type, SQL, Length off-screen |
| `r2-30` (page-left) | Name, SQL Data Type (clipped "ar" = nvarchar on rows 2 and 3), Property Length 30 / 50, Decimal Precision (blank) | Class, Data Type, PK off-screen; row 1 and 4 SQL values clipped |
| `r2-31` (leftmost) | Name, Property Class (clipped on the left: `…X_OrderNumBase`, `…X_CustomerID`, `…X_Item`, row 4 blank), Data Type (Long Integer / String / String / Long Integer), SQL Data Type (int / nvarchar / nvarchar / int) | Length and Precision off-screen; Property Class text partly clipped |

The accessibility readback (`e1954`) is the proof for the clipped cells: row 1 `FX_OrderNumBase Long Integer int … FX_sOrderNumber AUTONUMBER()`; row 2 `FX_CustomerID String nvarchar 30 … FX_sCustomerID`; row 3 `FX_Item String nvarchar 50 … FX_sItem`; row 4 `(blank) Long Integer int … FX_sCount 1`.

### Next (one bounded click)

- Before the click, `find` "Next" confirmed Next (`e2108`) enabled and Finish (`e2110`) disabled. The reconciliation matched the brief, so Next was clicked **once** (native wizard button).
- Result: wizard page 2 of 2 (`r2-32`). Page content: checkbox "Create Scripts" (unchecked); text "Click \"Finish\" to create the database table, IDO and optional form."; an empty preview area (grey; no content rendered in the captured frame). Back **enabled**; Next **disabled** (`[disabled] [active]`); Finish **enabled**; Cancel and Help enabled.
- No validation message, no prompt, no dialog. Create Scripts was not changed.
- **Finish was NOT invoked.** Cancel was NOT invoked.

### Deviations and notes (T5)

- **Coordinate clicks on the grid scroll arrow / track:** the grid's horizontal scroll arrow and track have no accessible name, so six coordinate clicks (`mouse_click_xy`) were used on the visible scrollbar at approximately (845,691), (960,691) and (900,691). These are a last-resort visual interaction, used only for scrolling; no value changed. Disclosed.
- The T5 targeted snapshots were taken with explicit targets (`e1826`, `e1954`) and one `find` for Next and one for Finish. No untargeted snapshot was taken. No ref-not-found occurred.
- Console counter: 4 errors (unchanged from T4); not inspected.
- Finish is now enabled on page 2. It must not be invoked without the coordinator's authorisation (per the brief, a single Finish invocation after the four-row verification).

### Final wizard state (end of T5)

- Data Maintenance Wizard OPEN on the Designer tab (tab 0, current), **page 2 of 2**.
- Header unchanged (FX_Orders / FX_HelloWorldProject01 / fxords / Site Split unchecked / Table Name empty). The four rows are the same as the T4 readback. Row values are unchanged by T5.
- Create Scripts unchecked. Back enabled. Next disabled. **Finish enabled and not invoked.** Cancel not invoked.
- No dialog open; no unsaved change in the Designer; no unload; no check-in.
- IDOs and Sql Tables Forms: not touched in T5 (remain as T1 left them).

### Action counts (T5 only)

| Operation | T5 |
| --- | --- |
| Wizard openings | **0** (same instance) |
| Finish | **0** |
| Next | **1** (page 1 to page 2; one successful click) |
| Back / Cancel | **0 / 0** |
| Create Form response (Yes / No) | **0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-in / check-out | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries | **0** |
| Persisted-object creation / Save / Delete / Designer New | **0 / 0 / 0 / 0** |
| Element clicks (successful / failed) | **1 / 0** (Next) |
| Coordinate clicks (`mouse_click_xy`, scroll arrow / track; successful / failed) | **6 / 0** |
| `browser_type` fills | **0** |
| Key presses | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted | **0 / 2** (`e1826`; `e1954`) |
| `browser_find` calls | **3** (Data Maintenance Wizard; Next; Finish) |
| Screenshots (worker-requested PNG) | **7** (`r2-26` to `r2-32`) |
| Ref-not-found / timeouts / editor intercepts | **0 / 0 / 0** |
| In-page dialogs answered | **0** |
| Native browser dialogs | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 + T2 + T3 + T4 + T5)

| Operation | Cumulative through T4 | T5 | Cumulative |
| --- | --- | --- | --- |
| Finish | 0 | 0 | **0** |
| Create Form Yes / No | 0 / 0 | 0 / 0 | **0 / 0** |
| Unloads | 0 | 0 | **0** |
| Check-ins | 0 | 0 | **0** |
| Wizard openings | 1 | 0 | **1** |
| Designer toolbar `New` (wizard launch; not object creation) | 1 | 0 | **1** |
| Persisted-object creation (IDO, table, Form, property, string) | 0 | 0 | **0** |
| Save / Delete | 0 / 0 | 0 / 0 | **0 / 0** |
| Next (wizard) | 0 | 1 | **1** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | **1 / 1** |
| Recovery queries (post-creation) | 0 | 0 | **0** |
| Absence queries (FiP exact name, pre-gate) | 2 | 0 | **2** |
| Element clicks (successful / failed) | 41 / 1 | 1 / 0 | **42 / 1** |
| Coordinate clicks (`mouse_click_xy`) | 0 | 6 / 0 | **6 / 0** |
| `browser_type` fills (succeeded / refused) | 14 / 0 | 0 / 0 | **14 / 0** |
| Key presses (Tab; F4; F2; Escape; Backspace) | 23 (Tab 18; F4 2; F2 1; Escape 1; Backspace 1) | 0 | **23** |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 4 / 4 | 1 / 1 | **5 / 5** |
| Snapshots untargeted / targeted | 3 / 27 | 0 / 2 | **3 / 29** |
| `browser_find` calls | 50 | 3 | **53** |
| Screenshots | 26 | 7 | **33** |
| In-page dialogs answered | 4 | 0 | **4** |
| Ref-not-found / timeouts / editor intercepts | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created; IDOs, tables, Forms created | 0 | 0 | **0** |

Reconciliation note: the cumulative element-click and coordinate-click totals are reported separately from T5 onward; the earlier "clicks" figures for T1 to T4 are element clicks only. The T4 untargeted snapshot's saved file remains unreadable (permission denied), as recorded in T4.

### Worker-written-file inventory (T5)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T5 status line; superseded-T4 note; this T5 section) |
| `evidence/EXP-071-R2/r2-26-t5-pre-next-wizard-header-and-grid-scrolled-right.png` | created |
| `evidence/EXP-071-R2/r2-27-t5-grid-scrolled-left-class-type-sql-length.png` | created |
| `evidence/EXP-071-R2/r2-28-t5-grid-scrolled-further-left-class-type-sql.png` | created |
| `evidence/EXP-071-R2/r2-29-t5-grid-scrolled-left-property-class-data-type-sql.png` | created |
| `evidence/EXP-071-R2/r2-30-t5-grid-scrolled-to-property-class-and-data-type.png` | created |
| `evidence/EXP-071-R2/r2-31-t5-grid-scrolled-to-property-class-leftmost.png` | created |
| `evidence/EXP-071-R2/r2-32-t5-after-single-Next-page-2-state.png` | created |

Tool-generated (not worker-authored): snapshot files written under `evidence/playwright/` by the MCP tool during T5. The Infor Mongoose session and the tool result files (outside the repository) are not worker output.

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| Four rows match the brief's values and flags on the accessibility readback before Next | **observed** (one run; display, not stored) |
| No unexpected FX_Cost residue on any row after the T3 and T4 corrections | **observed** (one run) |
| Next is enabled on page 1 when the rows are consistent; one Next moves to page 2 with Create Scripts unchecked and Finish enabled | **observed** (one run) |
| Page 2 prompt text "Click Finish to create the database table, IDO and optional form." | **observed** (one run) |
| Table Name empty and greyed with Site Split unchecked | **observed** (appearance and empty value; read-only attribute not independently read) |
| Finish, persisted object, Create Form prompt, check-in, recovery | **not performed** |

### Open questions and next action

1. The coordinator decides whether Finish is authorised. On page 2 it is enabled. Finish must be invoked only once, and the Create Form prompt must be answered No.
2. Row 4 Primary Key and Required remain unchecked (defaults; not specified by the brief). Confirm before Finish.
3. FX_sCount existence (string) is unverified; the typed label was accepted without validation.
4. Classification: **observed only, NOT replay_verified.**

---

## T6 — Finish invoked once; Create Form answered No once; completion reported (wizard left open at completion)

- Task T6, cycle 6, task_message_id `89f26190-2e99-4f2c-b515-28bd118c2640`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: one bounded pre-mutation inspection; ONE Finish; answer the Create Form prompt No once; capture the final state; stop. No readback, check-in, Form close/reopen, recovery query, unload, refresh, reauthentication or direct SQL. Nothing changed on pages 1 or 2; no property, option or string edited.
- Tab list read before the first selection (tab 0 current; tab 1 Web Client). Tab 0 was selected.

### Pre-mutation inspection (T6, before Finish)

| Check | Observed (targeted `find`, and screenshot `r2-33`) | Result vs T5 |
| --- | --- | --- |
| Wizard page | Page 2 (Create Scripts and the "Click Finish…" prompt) | Same as T5 |
| Create Scripts | Unchecked (screenshot `r2-33`) | Same as T5 |
| Next | Disabled | Same as T5 |
| Finish | Enabled | Same as T5 |
| Back / Cancel / Help | Back enabled; Cancel and Help enabled | Same as T5 |
| Dialogs | None in the accessibility tree | Same as T5 |

The state matched T5, so Finish was invoked.

### Mutation and responses (T6, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Finish, **one** native click (ref from the find in the same state) | No immediate error. A **Create Form** alertdialog appeared: "Do you want to create a form for FX_Orders?" with buttons Yes (default-focused) and No | `r2-34` (prompt captured before any answer) |
| 2 | Create Form prompt: **No**, one native click (ref from the find in the same state) | Prompt closed. Wizard message: **"Table and IDO created."**. Back, Next and Finish disabled. **Close** enabled (not clicked) | `r2-35` |

- Finish was **not** clicked again. No retry, no second Finish.
- The prompt identity was unambiguous (title "Create Form", text naming FX_Orders), so the No answer was given. Yes was **not** clicked and Enter was **not** pressed.
- Order of events: Finish → Create Form prompt → No → completion message. This matches EXP-049 T11.

### Completion and creation status (T6)

- **Completion text (exact):** `Table and IDO created.` (wizard page, after the Create Form No).
- **Creation status:** **confirmed by the wizard's own message only** (single run). Not yet verified in the IDOs Form or in SQL Tables / SQL Columns. The brief does not authorise those readbacks in T6.
- **Partial-object risk:** no error appeared, and the completion message reports both the table and the IDO. No partial-object risk was observed in the wizard, but the IDO and SQL table have not been read back, so the absence of a partial object is **not established** by T6.
- **Form creation:** the Create Form prompt was answered No once. The FX_Orders Form was **not** created by this task (no Yes response). This is consistent with the brief; not independently verified.

### Final browser state (end of T6)

- Designer tab (tab 0, current). Data Maintenance Wizard OPEN at its completion page: "Table and IDO created."; Create Scripts unchecked; Back, Next, Finish disabled; **Close enabled and not clicked**; Help enabled.
- No dialog open (the Create Form alertdialog closed after No). No unsaved-change prompt observed.
- Web Client tab (tab 1) not acted on in T6. Its IDOs and Sql Tables Forms remain as left in T1 (Filter in Place, criteria FX_Orders from the pre-gate queries). Those views are **stale** relative to the new objects and were not re-queried; the recovery queries are reserved for the separately authorised readback step.

### Action counts (T6 only)

| Operation | T6 |
| --- | --- |
| **Finish** | **1** |
| **Next** | **0** |
| **Create Form prompt — Yes / No** | **0 / 1** |
| Wizard openings | **0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-ins / check-outs | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | **0** |
| Strings generated | **0** |
| Designer toolbar `New` / Save / Delete (top-toolbar Delete not clicked) | **0 / 0 / 0** |
| Element clicks (successful / failed) | **2 / 0** (Finish 1; Create Form No 1) |
| `browser_type` / key presses / F4 | **0 / 0 / 0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots (untargeted / targeted) | **0 / 0** (the inspection used `find`, not snapshots) |
| `browser_find` calls | **4** |
| Screenshots (worker-requested PNG) | **3** (`r2-33`, `r2-34`, `r2-35`) |
| Ref-not-found / timeouts | **0 / 0** |
| In-page dialogs answered | **1** (Create Form prompt: No) |
| Native browser dialogs | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 to T6)

| Operation | Cumulative through T5 | T6 | Cumulative |
| --- | --- | --- | --- |
| **Finish** | 0 | 1 | **1** |
| **Next (wizard)** | 1 | 0 | **1** |
| **Create Form prompt — Yes / No** | 0 / 0 | 0 / 1 | **0 / 1** |
| Wizard openings | 1 | 0 | **1** |
| Designer toolbar `New` (wizard launch; not object creation) | 1 | 0 | **1** |
| Unloads | 0 | 0 | **0** |
| Check-ins / check-outs | 0 / 0 | 0 / 0 | **0 / 0** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | **1 / 1** |
| Recovery queries | 0 | 0 | **0** |
| Absence queries (FiP exact name, pre-gate) | 2 | 0 | **2** |
| Element clicks (successful / failed) | 42 / 1 | 2 / 0 | **44 / 1** |
| Coordinate clicks (`mouse_click_xy`, scrollbar) | 6 / 0 | 0 | **6 / 0** |
| `browser_type` fills (succeeded / refused) | 14 / 0 | 0 | **14 / 0** |
| Key presses | 23 | 0 | **23** |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 5 / 5 | 1 / 1 | **6 / 6** |
| Snapshots untargeted / targeted | 3 / 29 | 0 / 0 | **3 / 29** |
| `browser_find` calls | 53 | 4 | **57** |
| Screenshots | 33 | 3 | **36** |
| In-page dialogs answered | 4 | 1 | **5** |
| Ref-not-found / timeouts / editor intercepts | 1 / 0 / 0 | 0 / 0 / 0 | **1 / 0 / 0** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created or generated; IDOs, tables, Forms created by the worker | 0 | 0 | **0** |

Reconciliation note: the T6 click count excludes the `find`-based inspection. The "wizard launch" Designer `New` was one click (T2) and is not counted as object creation. The cumulative Finish count is 1 and the cumulative Create Form No count is 1. The Create Form Yes count is 0.

### Worker-written-file inventory (T6)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T6 status line; T5 superseded note; this T6 section) |
| `evidence/EXP-071-R2/r2-33-t6-pre-finish-page2-state-confirmed.png` | created |
| `evidence/EXP-071-R2/r2-34-t6-create-form-prompt-after-single-Finish.png` | created |
| `evidence/EXP-071-R2/r2-35-t6-completion-table-and-ido-created-after-No.png` | created |

Tool-generated (not worker-authored): snapshot and console files written under `evidence/playwright/` by the MCP tool during T6 (for example `page-2026-10-13T06-55-16-882Z.yml`, `page-2026-10-13T06-55-26-156Z.yml`, `console-2026-10-13T06-55-04-355Z.log`). Repository confinement is supported by the worker's inventory; operator git review is authoritative.

### Decisive evidence (T6)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-33` | Wizard page 2; Create Scripts unchecked; prompt text; Back enabled; Next greyed; Finish enabled | The pre-mutation state matched T5 | Object creation |
| `r2-34` | Create Form alertdialog: "Do you want to create a form for FX_Orders?"; Yes highlighted; No available; wizard behind it with Finish disabled during the prompt | The prompt identity and its order after the single Finish | Which button was chosen (the next capture shows) |
| `r2-35` | Wizard message "Table and IDO created."; Back, Next, Finish disabled; Close enabled; Create Scripts unchecked; no Create Form prompt | The wizard's completion message after the No answer | The IDO or SQL objects themselves (no readback yet); absence of partial objects; that FX_Orders is checked out or not |

Acceptance checks (T6 scope): **AC-5** supported at the wizard-response level (one Finish; completion message; one No to the Create Form prompt; no Yes). "No Form created" is supported only by the No answer and the absence of any Form-creation response, not by a readback. **AC-3, AC-4** re-supported by the T5 readback (header and rows) and the T6 pre-mutation check. **AC-6, AC-7, AC-8** not performed (readbacks, check-in and recovery reserved for separate authorisation).

### Limitations and unresolved items (T6)

- The creation result is the wizard's own message only. No IDO or SQL readback has been performed, so the stored project, table, alias, property classes, lengths, nullability, primary key and Count default are **not yet verified**.
- The Web Client IDOs and Sql Tables Forms show stale Filter-in-Place results from before creation (T1 gate state). They were not queried.
- Row 4 Primary Key and Required (both unchecked; not specified by the brief) and FX_sCount existence remain unverified. The stored values will show in the readback.
- Checked-out state of the new IDO is unknown until readback; the brief permits one check-in only if it is visibly checked out.

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| Finish on the verified page-2 state produced a Create Form prompt naming FX_Orders | **observed** (one run) |
| Answering No produced the wizard message "Table and IDO created." with Close enabled | **observed** (one run) |
| The wizard's completion message is a wizard-level report | **observed** (one run); not a database or IDO readback |
| IDO FX_Orders and SQL dbo.FX_Orders exist with the configured values | **unresolved** (readback not authorised in T6) |
| No partial object was created | **unresolved** (not established) |
| Durability / replay verification | **not claimed** (same-session UI only) |

### Open questions and next action

1. Authorise the post-creation readbacks (IDOs Form and Sql Tables / SQL Columns), the conditional check-in decision, and the recovery pair (close/reopen once each, one exact-name query each).
2. Decide whether the wizard should be closed with its native Close (not done in T6).
3. Confirm row 4 Primary Key and Required values as acceptable (both unchecked, as configured).
4. Classification: **observed only, NOT replay_verified.**

---

## T7 — Wizard closed (native Close); FX_Orders IDO read back in the IDOs Form (UI level); checkout observed; NO check-in; NO recovery

- Task T7, cycle 7, task_message_id `2d6de6d2-7849-4084-ad2a-8cbfe0f6f802`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: close the completed wizard once with its native Close; select the Web Client IDOs Form; establish a fresh Filter-in-Place IDO Name criterion; enter FX_Orders, Tab, pre-F4 screenshot, F4 once, settled screenshot; read the four properties; observe checkout; no check-in, no property edit, no Sql Tables interaction, no IDOs or Sql Tables close/reopen, no recovery query.
- Tab list read before the first selection (tab 0 Designer current; tab 1 Web Client, favoriteContext SqlTables).

### Actions (T7, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer (current); tab 1 Web Client (SqlTables) | — |
| 2 | `find` "Table and IDO created" | Wizard still shows "Table and IDO created."; Back, Next, Finish disabled; Close enabled | find |
| 3 | Completion-state screenshot | Captured before Close | `r2-36` |
| 4 | Wizard **native Close**, one click (`find` "Close" first, ref `e1850`) | Wizard closed. No dialog. Designer: Save disabled, Regenerate disabled; no dialog | `find` (post-close) |
| 5 | Select tab 0 (Designer) then tab 1 (Web Client) | Tab 1 selected; Web Client on the Sql Tables tab | `browser_tabs` |
| 6 | Targeted snapshot `f1e102` (IDOs tab) | **Ref not found** (stale after the tab switch). Recovery: one fresh untargeted snapshot (allowance used) | error; snapshot (inline) |
| 7 | IDOs tab click (fresh ref `f1e102` from the untargeted snapshot) | IDOs Form active. Browse mode, empty grid, detail greyed, Save and New disabled, no dialog (clean) | `r2-37` |
| 8 | Filter in Place toolbar button, one click (`f1e38`) | Status `Filter in Place`; the IDO Name criteria field was active and **already contained FX_Orders** (the retained pre-gate criterion). The grid showed one row `FX_Orders` with blank detail (the criterion echo, not treated as a result) | `r2-38` |
| 9 | IDO Name criteria: `FX_Orders` typed (replaces the retained value); Tab | Criterion `FX_Orders` in IDO Name; echo row `FX_Orders`; status `Filter in Place`. Criteria field editable (not readonly) | `r2-39` (pre-F4) |
| 10 | **F4, one press** | Query executed | — |
| 11 | Settled result | **One matching record**: IDO FX_Orders; Project FX_HelloWorldProject01; Revision 1; Revision Date 10/13/2026; Access G6R; Label/Caption oFX_Orders; Locked By = operator sign-in account (truncated on screen; not transcribed); Tables sub-grid: `FX_Orders | fxords | Primary Base | Inner`. Row checkbox **checked**; Check In **enabled**; Undo Check Out greyed; status `Description (IDOs 1 of 1)` | `r2-40` |
| 12 | In-Form `Properties` sub-tab (view) | Four business properties and seven framework properties listed; status `Properties 1 of 11` | `r2-41` |
| 13 | Horizontal grid scroll attempt (one coordinate click on the scrollbar thumb) | No visible change (the click landed on the thumb). Recorded as no effect | `r2-42` |
| 14 | Row 4 (FX_Count) selected in the in-Form grid (view-only row click) | Row selected; status `Property Name (Properties 4 of 11)`. No value change | `r2-43` |
| 15 | Top `Properties` button (one click) | A separate **IDO Properties** Form view opened as a new tab (clean; Save greyed). Row 1 detail shown | `r2-44` |
| 16 | IDO Properties rows 2, 3 and 4 selected (view-only list clicks, one each) | Row details read; no edit | `r2-45`, `r2-46`, `r2-47` |

Errors: one `Ref f1e102 not found` after the tab switch (recovery used once). No timeouts, no editor intercepts, no dialogs answered, no native browser dialog.

### Read-back of the FX_Orders IDO (UI level; same session)

Header (IDOs Form, `r2-40`, `r2-41`): IDO Name `FX_Orders`; Project Name `FX_HelloWorldProject01`; Extends blank; Revision Num `1`; Revision Date `10/13/2026`; Label String ID `oFX_Orders`; Caption `oFX_Orders`; Access As `G6R`; Description blank; Profile Name blank; Locked By operator (checked out). Tables sub-grid (`r2-40`): `FX_Orders | fxords | Primary Base | Inner`.

Four business properties (IDO Properties view and the in-Form grid, `r2-41`, `r2-45`, `r2-46`, `r2-47`):

| Seq | Property Name | Property Class (as shown) | Property Type | Column Name | Column Table Alias | Data Type (effective) | Column Data Type (SQL) | Length (effective) | Default Value | Label String ID | Key Sequence | Required | Pseudo Key |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_OrderNumber | FX_OrderNumBase | Bound to Column | FX_OrderNumber | fxords (table FX_Orders) | Long Integer | int | blank | `AUTONUMBER()` | FX_sOrderNumber | **1** | ✓ | ☐ |
| 2 | FX_CustomerID | FX_CustomerID | Bound to Column | FX_CustomerID | fxords | String | **nvarchar** | **30** | blank | FX_sCustomerID | 0 | ✓ | ☐ |
| 3 | FX_Item | FX_Item | Bound to Column | FX_Item | fxords | String | nvarchar | **50** (override of the class's 20) | blank | FX_sItem | 0 | ✓ | ☐ |
| 4 | FX_Count | (none) | Bound to Column | FX_Count | fxords | **Long Integer** | int | blank | **1** | FX_sCount | 0 | ☐ | ☐ |

Additional detail for row 1: Justify `Right` (inherited from FX_OrderNumBase); Read Only Record ☐; Required ✓ (asterisked as required in the form). Row 2 domain: IDO FX_HelloWorld01, Domain Property FX_Code, Domain List Properties FX_Label. Row 3 domain: IDO FX_Items, Domain Property FX_Item, Domain List Properties FX_Description. Row 4: no domain; Data Type, Default, Label and Column Data Type asterisked as required.

Framework properties (rows 5–11): CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow are listed as `Bound to Column`. In the in-Form grid, Read Only is checked for CreatedBy, UpdatedBy, CreateDate and RecordDate. Rows 9–11 were not individually inspected; the system columns are therefore only partly described.

**Not exposed by the IDO Properties Form (recorded, not inferred):** the Decimal Position field is blank on all four rows (not exposed as a value beyond blank); the Input Mask, Prompt Char, Binary Format, Date Format, IME Char Set, Boolean True/False and Display Decimal Position fields are blank or not set. The **Primary Key flag** is not a separate checkbox in the IDO Properties Form; it is shown as Key Sequence (`1` on FX_OrderNumber, `0` on the others). The in-Form properties grid does **not** expose Label String ID or Default Value (it shows Property Name, Sequence, Property Class, Property Type, Column Name, Property Value, Key Sequence, Data Type, Length, Column Type, Read Only, Required, Upper Case, Pseudo Key, Read Only Record); those values were read from the IDO Properties view instead.

Effective values compared with the verified wizard configuration (T5): all four rows match the T5 readback (names, classes, Data Type, SQL types, Length 30 / 50, Required ✓ ✓ ✓ ☐, Key Sequence 1 on FX_OrderNumber only, labels, Count default 1). **No divergence found; no repair made.**

### Checkout status (observed; NOT acted on)

- The IDOs grid row checkbox for FX_Orders is **checked**; Locked By shows the operator sign-in account (truncated on screen; not transcribed here); **Check In is enabled**; Undo Check Out appears greyed (disabled). Revision Num `1`.
- Interpretation: visibly checked out to the operator account. The disabled Undo Check Out state matches the unexplained pattern recorded for FX_Items in EXP-049 T12 and is **not explained** here.
- **No check-in was performed in T7** (per the T7 instruction). The conditional check-in decision is left for the coordinator. The brief's conditional check-in applies if the object is visibly checked out, so a check-in is **pending authorisation**.

### Reconciliation of the cumulative statement about worker-created objects

Earlier cumulative tables (through T6) recorded "persisted-object creation 0" and "IDOs, tables or Forms created by the worker 0", and the T1 status stated "Nothing was created". Those statements were correct **for their tasks** but are now superseded and must be read as follows:

| Object | Wizard-reported creation (T6) | Independent UI-level verification (T7) | Still unverified |
| --- | --- | --- | --- |
| IDO `FX_Orders` | Yes: the Finish completion message "Table and IDO created." after one Finish and one Create Form No (T6, `r2-35`) | **Yes (UI level, same session)**: the IDOs runtime query (one exact-name query, FiP, F4 once) returned one FX_Orders record with the configured project, table, alias and four properties (`r2-40`, `r2-41`, `r2-45` to `r2-47`) | Database-level persistence; cross-session persistence |
| SQL table `dbo.FX_Orders` | Yes: the same wizard message ("Table and IDO created.") | **No.** The Sql Tables Form was not interacted with in T7 (the brief excludes it). | Schema, column types, nullability, primary key, system columns: **not read back** |
| Form `FX_Orders` | **No** (Create Form answered No once) | Not checked (Forms inventory excluded in T7) | Not established by a readback; the prompt answer is the only evidence |

So the statement "the worker created no IDO or table" is **no longer accurate**: the wizard, in the one Finish, reported the creation of the IDO and the SQL table. The IDO is now observed at UI level in the runtime IDOs Form. The SQL table is wizard-reported only. Neither is a database-level or replay-verified result.

### Acceptance checks (T7 scope)

| AC | T7 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried (pre-gate pair and the T1 absence results). In T7 the IDOs criterion FX_Orders was re-entered, shown before F4 (`r2-39`) and executed once; the result now returns **one** record (post-creation), so it is not an absence result. | `r2-39`, `r2-40` | The T1 absence result is the pre-creation evidence; T7 does not repeat it. |
| AC-2 | Carried from T1 (not re-run). | — | — |
| AC-3 | Header and lookup from T2/T3/T4/T5 carried; the wizard was closed in T7 (native Close). | T2 `r2-14`, `r2-17` | — |
| AC-4 | Four properties read back in the IDO Properties view (class, type, SQL type, length, label, default, flags). | `r2-41`, `r2-45`, `r2-46`, `r2-47` | Decimal Position, Input Mask and other fields not exposed/blank; framework rows 9–11 not individually inspected. |
| AC-5 | Unchanged from T6: one Finish, one Create Form No, completion message. Form not created (not re-verified by inventory). | `r2-34`, `r2-35`, `r2-36` | — |
| AC-6 | **Partially supported (UI level)**: IDO readback (project, table, alias, four properties, classes, effective values, Count default) done. **SQL readback not done.** Check-in **not performed** (pending authorisation). | `r2-40`, `r2-41`, `r2-45` to `r2-47` | SQL readback reserved. |
| AC-7 | **Not performed** (the IDOs and Sql Tables close/reopen pair is reserved). | — | — |
| AC-8 | Covered by this T7 section and the cumulative audit below. | — | — |

### Action counts (T7 only)

| Operation | T7 |
| --- | --- |
| **Finish** | **0** |
| **Next** | **0** |
| **Create Form prompt — Yes / No** | **0 / 0** |
| Wizard openings | **0** |
| Wizard native Close | **1** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-ins / check-outs | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** (the pre-gate pair and the reserved AC-7 pair are untouched). The **IDO Properties** view was opened as a new Form tab (not a close or reopen of IDOs or Sql Tables). |
| Recovery queries (AC-7 exact-name recovery) | **0** (the single IDOs FX_Orders query in T7 is the post-creation readback query, not the AC-7 recovery) |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | **0** (no property edit; the row clicks were view-only) |
| Strings generated | **0** |
| Designer toolbar `New` / Save / Delete (top-toolbar Delete not clicked) | **0 / 0 / 0** |
| Element clicks (successful / failed) | **9 / 0** (wizard Close 1; IDOs tab 1; Filter in Place 1; in-Form Properties sub-tab 1; row 4 select 1; top Properties button 1; IDO Properties rows 2, 3 and 4: 3) |
| Coordinate clicks (`mouse_click_xy`, scrollbar) | **1 / 0** |
| `browser_type` fills (succeeded / refused) | **1 / 0** (IDO Name criteria FX_Orders) |
| Key presses (Tab; F4) | **2** (Tab 1; F4 1) |
| `browser_tabs` list / select | **1 / 2** (select index 0; select index 1) |
| Snapshots untargeted / targeted | **1 / 0 successful; 1 targeted failed** (`f1e102`, ref not found; the untargeted snapshot was the recovery snapshot) |
| `browser_find` calls | **12** |
| Screenshots (worker-requested PNG) | **12** (`r2-36` to `r2-47`) |
| Ref-not-found / timeouts / editor intercepts | **1 / 0 / 0** |
| In-page dialogs answered | **0** |
| Native browser dialogs | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 to T7)

| Operation | Cumulative through T6 | T7 | Cumulative |
| --- | --- | --- | --- |
| **Finish** | 1 | 0 | **1** |
| **Next (wizard)** | 1 | 0 | **1** |
| **Create Form prompt — Yes / No** | 0 / 1 | 0 / 0 | **0 / 1** |
| Wizard openings | 1 | 0 | **1** |
| Wizard native Close | 0 | 1 | **1** |
| Designer toolbar `New` (wizard launch; not object creation) | 1 | 0 | **1** |
| Unloads | 0 | 0 | **0** |
| Check-ins / check-outs | 0 / 0 | 0 / 0 | **0 / 0** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | **1 / 1** |
| Recovery queries (AC-7) | 0 | 0 | **0** |
| Post-creation readback queries (IDOs FX_Orders) | 0 | 1 | **1** |
| Absence queries (FiP exact name, pre-gate) | 2 | 0 | **2** |
| Element clicks (successful / failed) | 44 / 1 | 9 / 0 | **53 / 1** |
| Coordinate clicks (`mouse_click_xy`) | 6 / 0 | 1 / 0 | **7 / 0** |
| `browser_type` fills (succeeded / refused) | 14 / 0 | 1 / 0 | **15 / 0** |
| Key presses (Tab; F4; F2; Escape; Backspace) | 23 | 2 (Tab 1; F4 1) | **25** |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 6 / 6 | 1 / 2 | **7 / 8** |
| Snapshots untargeted / targeted (successful) | 3 / 29 | 1 / 0 | **4 / 29** |
| Targeted snapshots failed (ref not found) | 1 (T4) | 1 (T7) | **2** |
| `browser_find` calls | 57 | 12 | **69** |
| Screenshots | 36 | 12 | **48** |
| In-page dialogs answered | 5 | 0 | **5** |
| Ref-not-found errors (all, incl. the failed snapshots above) | 1 | 1 | **2** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created or generated | 0 | 0 | **0** |
| Persisted-object creation (wizard-reported; one Finish) | 1 (wizard message) | 0 | **1 wizard-reported (IDO + SQL table); IDO UI-verified; SQL unverified** |

### Worker-written-file inventory (T7)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T7 status line; T6 open-question block; this T7 section, including the creation reconciliation) |
| `evidence/EXP-071-R2/r2-36-t7-wizard-completion-state-before-native-close.png` | created |
| `evidence/EXP-071-R2/r2-37-t7-idos-form-state-before-criterion.png` | created |
| `evidence/EXP-071-R2/r2-38-t7-idos-filter-in-place-field-state-on-entry.png` | created |
| `evidence/EXP-071-R2/r2-39-t7-idos-FX_Orders-criterion-before-F4.png` | created |
| `evidence/EXP-071-R2/r2-40-t7-idos-FX_Orders-settled-after-F4.png` | created |
| `evidence/EXP-071-R2/r2-41-t7-idos-properties-subtab-grid.png` | created |
| `evidence/EXP-071-R2/r2-42-t7-idos-properties-grid-scrolled-right-default-label.png` | created (the scroll click had no effect; this image matches r2-41) |
| `evidence/EXP-071-R2/r2-43-t7-idos-properties-row4-FX_Count-selected.png` | created |
| `evidence/EXP-071-R2/r2-44-t7-ido-properties-form-view-detail.png` | created |
| `evidence/EXP-071-R2/r2-45-t7-ido-properties-row2-FX_CustomerID-detail.png` | created |
| `evidence/EXP-071-R2/r2-46-t7-ido-properties-row3-FX_Item-detail-length50.png` | created |
| `evidence/EXP-071-R2/r2-47-t7-ido-properties-row4-FX_Count-detail-default1.png` | created |

Tool-generated (not worker-authored): snapshot and console files under `evidence/playwright/` written by the MCP tool during T7 (for example `page-2026-10-13T06-58-13-080Z.yml`, `page-2026-10-13T06-59-58-633Z.yml`); the untargeted snapshot's result went to the session tool-results area (outside the repository).

### Decisive evidence (T7)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-36` | Wizard "Table and IDO created."; Close enabled; Back, Next, Finish disabled | The wizard state before the native Close | The objects themselves |
| `r2-37` | IDOs Form, browse, empty grid, detail greyed, clean | The IDOs Form was clean before the criterion | Database state |
| `r2-39` | IDO Name criteria `FX_Orders`; echo row `FX_Orders`; status Filter in Place | The criterion was visible before F4 (post-creation query) | The F4 result |
| `r2-40` | One FX_Orders record; project FX_HelloWorldProject01; table FX_Orders fxords Primary Base; checkbox checked; Check In enabled; Revision 1 | IDO FX_Orders exists in the runtime IDOs collection (UI level, same session) and is checked out | Database-level persistence; the SQL table; that Undo Check Out's disabled state is explained |
| `r2-41` | Properties sub-tab: four business rows and framework rows; Read Only checked on framework rows 5–8 | The four rows and their order and key/required flags in the grid | Label, Default and Data Type for all rows (not in this grid) |
| `r2-45` | FX_CustomerID: class FX_CustomerID; String; Length 30; nvarchar; Required ✓; Label FX_sCustomerID; domain FX_HelloWorld01/FX_Code/FX_Label | Row 2 effective values | Stored values beyond the display |
| `r2-46` | FX_Item: class FX_Item; String; Length 50; nvarchar; Required ✓; Label FX_sItem; domain FX_Items/FX_Item/FX_Description | Row 3 Length 50 override and effective values | Stored values beyond the display |
| `r2-47` | FX_Count: no class; Long Integer; Default 1; Column Data Type int; Label FX_sCount; Required ☐ | Row 4 Count default and flags | Stored values beyond the display |
| `r2-44` | IDO Properties view, row 1 FX_OrderNumber: class FX_OrderNumBase; Long Integer; Default AUTONUMBER(); int; FX_sOrderNumber; Justify Right; Required ✓ | Row 1 effective values | — |

Limitations: all readbacks are same-session UI displays. Values were displayed, not read from storage. The SQL table is unverified. Locked By is truncated on screen. The Decimal Position and other blank fields are reported as displayed, not inferred.

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| The IDO FX_Orders appears in the runtime IDOs Form after the wizard Finish (one record, project, table FX_Orders, alias fxords) | **observed** (UI level, one run, same session) |
| The four properties read back with the configured classes, Length 50 override, Count default 1, required flags and the key sequence on FX_OrderNumber | **observed** (UI level, one run) |
| Row 2 effective values (String, nvarchar, 30) and row 3 (String, nvarchar, 50, from the FX_Item class base 20) | **observed** (UI level) |
| The IDO is visibly checked out to the operator account (row checkbox checked; Check In enabled) | **observed** (UI level); cause of the disabled Undo Check Out state **unresolved** |
| IDO Properties does not expose Label or Default in the in-Form grid; the separate IDO Properties view does | **observed** (one run) |
| SQL table dbo.FX_Orders exists with the intended columns, nullability and primary key | **unresolved** (not read back in T7) |
| The Form FX_Orders was not created | **unresolved** (only the No answer is evidence) |
| Database durability, cross-session persistence, replay verification | **not claimed** |

### Open questions and next action

1. **Check-in decision (coordinator):** the IDO is visibly checked out. The brief allows exactly one native check-in only when it is checked out, and it is authorised for the single conditional check-in. It was **not** performed in T7. Authorise or decline.
2. **SQL readback (coordinator):** dbo.FX_Orders in the Sql Tables / SQL Columns Forms has not been read back. Authorise the Sql Tables readback (AC-6 SQL part).
3. **AC-7 recovery pair (coordinator):** the IDOs and Sql Tables Forms each still need the single close/reopen pair with one exact-name recovery query each. The current IDOs Form is in Filter-in-Place with FX_Orders; the Sql Tables Form still holds its pre-creation state and must not be treated as current.
4. **IDO Properties tab left open:** a clean Form tab opened by the top Properties button (new Form view, read-only use). Decide whether to close it.
5. **Row 4 flags and the FX_sCount label:** Primary Key and Required on FX_Count remain unchecked (as configured), and the label is accepted. The existence of the string FX_sCount is still unverified.
6. Classification: **observed only, NOT replay_verified.**

---

## T8 — Conditional native Check In of FX_Orders (ONE invocation); informational notice acknowledged once; settled state read

- Task T8, cycle 8, task_message_id `4bece223-3683-42da-b4b3-897e0cac9d0c`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: one native Check In of FX_Orders only (conditional on checkout ownership and identity); capture the immediate response and settled state. No property edit, no other IDO query, no SQL Tables inspection, no recovery query, no IDOs or Sql Tables close/reopen, no wizard, no unload.
- Tab list read before the first selection (tab 0 Designer; tab 1 Web Client on the IDO Properties tab, clean). Tab 1 selected, then one untargeted snapshot (fresh state). The IDOs tab was selected from that snapshot's ref. The IDO Properties tab was left open and unchanged.

### Pre-check-in identity and state (targeted `find` and screenshot `r2-48`)

| Check | Observed | Result |
| --- | --- | --- |
| Selected record | IDOs grid: exactly one row, `FX_Orders` (`1 of 1`) | Identity unambiguous |
| Project Name | `FX_HelloWorldProject01` | Match |
| Checkout ownership | Row checkbox checked; Locked By shows the operator sign-in account (masked as a secret placeholder); Revision Num `1` | Checked out to the operator |
| Check In | Enabled (`Check In`) | As expected |
| Undo Check Out | Disabled (greyed) | Unchanged from T7; not explained |
| Save | Disabled (toolbar) | Clean |
| Dialogs / unsaved change | None in the accessibility tree before the click | Clean |

The state was unambiguous, so the single Check In was invoked.

### Actions (T8, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer; tab 1 Web Client (IDO Properties tab) current | — |
| 2 | Select tab 1 (Web Client) | Selected | `browser_tabs` |
| 3 | Untargeted snapshot | IDO Properties tab active; IDOs tab present; Save disabled; no dialog | snapshot (inline) |
| 4 | IDOs Form tab click (ref `f1e108`, from action 3) | IDOs tab active; FX_Orders record shown | — |
| 5 | `find` regex (Check In / Undo Check Out / Save / dialog); `find` Project Name | Identity and checkout state as in the table above | find |
| 6 | Pre-check-in screenshot | FX_Orders; Check In enabled; checkbox checked; Locked By operator; Save disabled; no dialog | `r2-48` |
| 7 | **Check In, one native click** (ref `f1e1323`, from the find in the same state) | No error. Response: an informational alertdialog "Infor Mongoose Application Development Framework - IDOs" with the text "Source control integration is currently disabled in the current configuration. The item will not be checked in to source control." and an OK button | `r2-49` |
| 8 | Acknowledge the notice: **OK, one click** (ref `f1e2417`) | Notice closed. No second dialog | — |
| 9 | `find` regex (Check Out / Check In / Undo Check Out / alertdialog / Locked By / Revision Num) | Button bar: `Check Out` (enabled); `Check In` no longer present; `Undo Check Out` disabled. No alertdialog | find |
| 10 | Settled screenshot | Revision Num 2; Locked By blank; row checkbox cleared; FX_Orders still the only row; Check Out offered | `r2-50` |

Check In was **not** invoked again. No retry. No other control was used.

### Decision on the informational notice (disclosed judgement)

The brief allows one confirmation only when a dialog explicitly identifies FX_Orders and requires confirmation to complete the same check-in, and it requires a stop when a dialog names another object or offers an ambiguous batch operation. The notice here does **not** ask for confirmation, names no object, and offers no batch choice. It states an outcome (the item will not be checked in to source control). The check-in had already taken effect (Check Out is offered; Locked By cleared; Revision 2). Leaving an in-page alertdialog open would breach the stable-state rule, so I acknowledged it **once** with its OK button. This is the same informational notice EXP-049 T14 acknowledged once. It is **not** a second check-in and is not a source-control check-in: the notice itself says the item was **not** checked in to source control, so the source-control side is not involved. This judgement is recorded for the coordinator to accept or reject.

### Settled checkout state (observed; UI level)

- FX_Orders: Revision Num **1 → 2**; Revision Date `10/13/2026`; Locked By **blank** (was the operator account); row checkbox **cleared** (was checked); button bar offers **Check Out**; **Undo Check Out** remains disabled (greyed).
- Visible: FX_Orders remains the single row of the IDOs grid (`Check Out (IDOs 1 of 1)`). Project FX_HelloWorldProject01, alias fxords and the four properties were not changed (the T7 readback still applies to the displayed properties; the IDO Properties tab was not re-read in T8).
- The notice's text states that the item was **not** checked in to source control. That source-control state is therefore **not** established by this task; only the Mongoose-native checkout state changed.

### Check-in result classification (observed only)

| Item | Result |
| --- | --- |
| Check In invocations | **1** (FX_Orders only) |
| Check-in confirmations required by a dialog | **0** (no confirmation request; an informational notice only) |
| Notice acknowledgements (OK) | **1** |
| Completion message | None in the Mongoose sense; the informational source-control notice (above) |
| Locked By changed | **Yes**: from the operator account to blank |
| Check In became disabled | **Yes** (the button now offers Check Out; Check In is no longer in the bar) |
| FX_Orders remains visible | **Yes** (one row) |
| Revision changed | **Yes**: 1 → 2 |
| Source-control check-in | **Not performed** (integration disabled; the notice says so) |

Classification: **observed only (UI level, one run, same session).** Not database-level; not replay-verified; no durability claimed.

### Acceptance checks (T8 scope)

- **AC-6 (conditional check-in)**: the check-in was performed **once** (conditional on the visible checkout). The IDO readback (project, table, alias, four properties) was done in T7; the **SQL readback** is still **not** done (the Sql Tables Form was not inspected in T8).
- **AC-7** (close/reopen and recovery): **not performed** in T8 (reserved).
- **AC-1 to AC-5, AC-8**: unchanged from T1 to T7 (see those sections).

### Action counts (T8 only)

| Operation | T8 |
| --- | --- |
| **Check In invocations** | **1** |
| Check-in confirmations (dialog confirmations of a check-in) | **0** |
| Notice acknowledgements (OK on the informational notice) | **1** |
| Finish / Next / Create Form (Yes / No) | **0 / 0 / 0 / 0** |
| Wizard openings / wizard Close / Cancel | **0 / 0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check Out / Undo Check Out invocations | **0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries (AC-7) | **0** |
| Property edits / Save / New / Delete | **0 / 0 / 0 / 0** |
| Element clicks (successful / failed) | **3 / 0** (IDOs tab 1; Check In 1; notice OK 1) |
| Key presses / fills / F4 | **0 / 0 / 0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted (successful) | **1 / 0** |
| `browser_find` calls | **4** |
| Screenshots (worker-requested PNG) | **3** (`r2-48`, `r2-49`, `r2-50`) |
| Ref-not-found / timeouts / editor intercepts | **0 / 0 / 0** |
| Dialogs answered | **1** (the informational notice, OK) |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 to T8)

| Operation | Cumulative through T7 | T8 | Cumulative |
| --- | --- | --- | --- |
| **Finish** | 1 | 0 | **1** |
| **Next (wizard)** | 1 | 0 | **1** |
| **Create Form prompt — Yes / No** | 0 / 1 | 0 / 0 | **0 / 1** |
| Wizard openings | 1 | 0 | **1** |
| Wizard native Close | 1 | 0 | **1** |
| Designer toolbar `New` (wizard launch; not object creation) | 1 | 0 | **1** |
| Unloads | 0 | 0 | **0** |
| **Check-ins (native Check In invocations)** | 0 | 1 | **1** |
| Check-in confirmations (dialog confirmations of a check-in) | 0 | 0 | **0** |
| Informational notice acknowledgements (OK) | 0 | 1 | **1** |
| Check-outs / Undo Check Out | 0 / 0 | 0 / 0 | **0 / 0** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | **1 / 1** |
| Recovery queries (AC-7) | 0 | 0 | **0** |
| Post-creation readback queries (IDOs FX_Orders) | 1 | 0 | **1** |
| Absence queries (FiP exact name, pre-gate) | 2 | 0 | **2** |
| Element clicks (successful / failed) | 53 / 1 | 3 / 0 | **56 / 1** |
| Coordinate clicks (`mouse_click_xy`) | 7 / 0 | 0 | **7 / 0** |
| `browser_type` fills (succeeded / refused) | 15 / 0 | 0 | **15 / 0** |
| Key presses | 25 | 0 | **25** |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 7 / 8 | 1 / 1 | **8 / 9** |
| Snapshots untargeted / targeted (successful) | 4 / 29 | 1 / 0 | **5 / 29** |
| Targeted snapshots failed (ref not found) | 2 | 0 | **2** |
| `browser_find` calls | 69 | 4 | **73** |
| Screenshots | 48 | 3 | **51** |
| In-page dialogs answered (incl. the notice) | 5 | 1 | **6** |
| Ref-not-found errors (all) | 2 | 0 | **2** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created or generated | 0 | 0 | **0** |

Reconciliation note: the single T8 Check In is the only lifecycle mutation in T8; the revision change (1 → 2) and the cleared Locked By are its observed effects. The IDO's stored definition was not re-read after the check-in.

### Worker-written-file inventory (T8)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T8 status line; this T8 section) |
| `evidence/EXP-071-R2/r2-48-t8-pre-checkin-idos-FX_Orders-checked-out-check-in-enabled.png` | created |
| `evidence/EXP-071-R2/r2-49-t8-immediate-response-source-control-notice-after-checkin.png` | created |
| `evidence/EXP-071-R2/r2-50-t8-settled-after-checkin-FX_Orders-checked-in-rev2.png` | created |

Tool-generated (not worker-authored): snapshot and console files under `evidence/playwright/` written by the MCP tool during T8 (for example `page-2026-10-13T07-03-19-091Z.yml`, `page-2026-10-13T07-03-42-471Z.yml`, `console-2026-10-13T07-03-13-094Z.log`). Repository confinement is supported by the worker's inventory; operator git review is authoritative.

### Decisive evidence (T8)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-48` | IDOs: one row FX_Orders; project FX_HelloWorldProject01; Revision 1; Locked By operator; Check In enabled; Undo Check Out greyed; Save greyed; status `Properties (IDOs 1 of 1)` | The identity and checkout state before the single Check In | Database-level checkout; the cause of the greyed Undo Check Out |
| `r2-49` | Informational notice: "Source control integration is currently disabled… The item will not be checked in to source control."; behind it Revision 2, Locked By blank, row unchecked, Check Out offered | The immediate response to the single Check In (the notice), and that the native checkout changed | That the source-control check-in occurred (the notice says it did not); database state |
| `r2-50` | Settled: Revision Num 2; Locked By blank; row checkbox cleared; Check Out offered; FX_Orders the only row; no dialog | The settled Mongoose-native checkout state after the notice | Stored values beyond the display; the SQL table; durability |

Limitations: UI display only. Locked By is masked in the accessibility tree (read as the operator account before, blank after). The source-control integration is disabled, so the source-control state is not part of this result.

### Knowledge state (T8)

| Finding | State |
| --- | --- |
| A single native Check In on the visibly checked-out FX_Orders changed its Mongoose-native checkout state (Locked By cleared; row unchecked; Check Out offered) | **observed** (UI level, one run, same session) |
| The Check In increased the IDO Revision Num from 1 to 2 | **observed** (UI level) |
| An informational source-control notice follows the Check In and says the item was not checked in to source control | **observed** (one run); cause and meaning beyond the text **unresolved** |
| No confirmation dialog was required for the Check In | **observed** (one run) |
| Undo Check Out greyed before and after the Check In | **observed**; cause **unresolved** |
| SQL dbo.FX_Orders schema and columns | **unresolved** (not read in T8) |
| Database-level persistence of the check-in; replay verification | **not claimed** |

### Open questions and next action

1. **Accept the notice handling (coordinator):** the informational notice was acknowledged once with OK. Confirm this is acceptable under the brief (it was not treated as a confirmation of a check-in).
2. **SQL readback (AC-6, SQL part):** dbo.FX_Orders in the Sql Tables / SQL Columns Forms has not been read. Authorisation is needed.
3. **AC-7 pair (coordinator):** the IDOs and Sql Tables Forms each still need the single close/reopen pair with one exact-name recovery query each, which is reserved. Note the IDOs Form is now checked in (Revision 2), so the recovery comparison should use the post-check-in state.
4. **IDO Properties tab** remains open and clean (a separate Form view); decide whether to close it.
5. **Row 4 flags and FX_sCount** remain unverified as noted earlier.
6. Classification: **observed only, NOT replay_verified.**

---

## T9 — SQL readback of dbo.FX_Orders (Sql Tables and SQL Columns, native UI; observed only; no recovery)

- Task T9, cycle 9, task_message_id `2999cd15-6958-4099-9f93-368cbf619148`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: select the Web Client; select the existing Sql Tables Form (clean check); Filter in Place once; enter `FX_Orders` in Table Name; Tab; pre-F4 screenshot; F4 once; settled screenshot; open Columns... (native SQL Columns view) and read the four business columns and the framework columns. No Form close or reopen; no recovery query; no check-in; no change to FX_Orders, the IDO or any column.
- Tab list read before the first selection (tab 0 Designer; tab 1 Web Client, favoriteContext=IdoCollections). Tab 1 selected, then one untargeted snapshot (IDOs tab active, FX_Orders Revision 2, Check Out offered, Save disabled, no dialog).

### Pre-query gate (Sql Tables Form)

| Check | Observed | Result |
| --- | --- | --- |
| Form | Sql Tables tab selected (`favoriteContext=SqlTables`) | Identity confirmed |
| Save | Disabled (toolbar and targeted `find`) | Clean |
| Dialog | None | Clean |
| Pre-existing content | One add-mode placeholder row (blue star; blank Table Name and Schema); status `Multi-Site (SQL Tables 1 of 1)` | The known placeholder from EXP-071; not treated as inventory. Not cleared or saved. |
| Filter in Place | Activated once by the toolbar control; status `Filter in Place`; Table Name criteria combobox active, retaining `FX_Orders` from the pre-gate query | Editable; the value was replaced |

Screenshot `r2-51` shows the pre-query state (placeholder row, Save greyed, no dialog).

### Query (one exact-name query)

| Step | Observed | Evidence |
| --- | --- | --- |
| Table Name criterion entered: `FX_Orders` (replacing the retained value); Tab | Criterion visible: Table Name `FX_Orders`; echo row Table Name `FX_Orders`; status `Filter in Place` | `r2-52` (before F4) |
| F4, once | Settled: **one data row**. Table Name `FX_Orders`; Schema `dbo`; Multi-Site unchecked; status `Multi-Site (SQL Tables 1 of 1)`; the add-mode placeholder is gone | `r2-53` |
| Constraints (settled grid) | (1) Primary Key `PK_FX_Orders`, Unique checked, Clustered Index checked, Description `FX_OrderNumber`; (2) Index `IX_FX_Orders_RowPointer`, Unique checked, Clustered Index unchecked, Description `RowPointer` | `r2-53` |

Identity: exactly one matching table, and its schema is `dbo` (the schema field) with the table name `FX_Orders` (the Table Name field). The PK description `FX_OrderNumber` matches the wizard's primary-key property.

### SQL Columns readback (native Columns... control; read-only selection)

The Columns... button opened the native **Sql Columns** view for dbo.FX_Orders (`favoriteContext=SqlColumns`), with 11 rows (`Column Name (SQL Columns 1 of 11)`). Rows were read by selection; no value was typed or changed (the Column Name combobox was focused by selection, and no edit was made).

| Col row | Column Name | Column Id | Data Type | System Data Type | Length | Decimal Pos. | Is Nullable | Primary Key | Key Seq. | Default Value | Is Computed | Classification |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_OrderNumber | 2 | int | int | (blank) | (blank) | unchecked | **checked** | **1** | (blank) | unchecked | Business |
| 2 | FX_CustomerID | 3 | nvarchar | nvarchar | **30** | (blank) | unchecked | unchecked | (blank) | (blank) | unchecked | Business |
| 3 | FX_Item | 4 | nvarchar | nvarchar | **50** | (blank) | unchecked | unchecked | (blank) | (blank) | unchecked | Business |
| 4 | FX_Count | 5 | int | int | (blank) | (blank) | **checked** | unchecked | (blank) | **(blank)** | unchecked | Business |
| 5–11 | CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow | not read individually | — | — | — | — | — | — | — | — | — | Framework / system (names listed; detail not opened in T9) |

Evidence: `r2-54` (grid; row 1 detail), `r2-55` (row 2 detail), `r2-56` (row 3 detail), `r2-57` (row 4 detail). A targeted read of the column grid (`f1e1315`) listed rows 1–4 and the framework names, all on `dbo` / `FX_Orders`.

### Comparison with the wizard and IDO readback

| Business column | Expected (T9 brief) | Observed in SQL Columns | IDO / wizard readback (T5, T7) | Result |
| --- | --- | --- | --- | --- |
| FX_OrderNumber | int; primary key; non-null | int; Primary Key checked; Key Sequence 1; Is Nullable unchecked | Long Integer; Column Data Type int; Key Sequence 1 | **Match** |
| FX_CustomerID | nvarchar length 30; non-null | nvarchar; Length 30; Is Nullable unchecked; no PK | String; nvarchar; Length 30 | **Match** |
| FX_Item | nvarchar length 50; non-null | nvarchar; Length 50; Is Nullable unchecked; no PK | String; nvarchar; Length 50 (overridden from 20) | **Match** |
| FX_Count | int; default 1 if the SQL interface exposes it | int; Is Nullable **checked**; **Default Value blank** | Long Integer; Default 1; Column Data Type int | **Mismatch recorded (not repaired)** — see below |

### Mismatch recorded (not repaired; not judged as a defect)

1. **FX_Count default:** the SQL Default Value field is exposed and **blank**, while the IDO property default is `1`. The brief made the SQL default conditional ("if the SQL interface exposes that default"). It is exposed and empty, so the SQL column carries no default. This is the same pattern EXP-049 recorded for FX_Cost (IDO default 0 with a blank SQL default). Recorded as an observed difference between the IDO default and the SQL default. Not repaired, not altered, and not judged here. **Coordinator decision needed.**
2. **FX_Count nullability:** the column is Is Nullable checked. The brief did not state FX_Count nullability, so this is recorded, not judged.

No other mismatch was observed. No repair, column alteration, record creation or direct SQL was attempted.

### Acceptance checks (T9 scope)

- **AC-6 (SQL readback):** supported at UI level for the table identity, the four business columns, their types, lengths, nullability and primary key. The FX_Count SQL default was read and differs from the IDO default (recorded above). Framework columns 5–11 were **named but not individually read**; the system-column distinction is by name only, plus the IDO readback of the framework property rows (T7).
- **AC-7:** not performed (the Sql Tables and IDOs close/reopen and recovery pair remain reserved).
- **AC-1 to AC-5, AC-8:** unchanged from earlier tasks; the T9 Sql Tables query is a post-creation result (one row), so it is not an absence result.

### Worker-written-file inventory (T9)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T9 status line; T8 open-question block; this T9 section) |
| `evidence/EXP-071-R2/r2-51-t9-sqltables-state-before-criterion-save-check.png` | created |
| `evidence/EXP-071-R2/r2-52-t9-sqltables-FX_Orders-criterion-before-F4.png` | created |
| `evidence/EXP-071-R2/r2-53-t9-sqltables-FX_Orders-settled-after-F4.png` | created |
| `evidence/EXP-071-R2/r2-54-t9-sqlcolumns-dbo-FX_Orders-column-grid.png` | created |
| `evidence/EXP-071-R2/r2-55-t9-sqlcolumns-row2-FX_CustomerID-detail.png` | created |
| `evidence/EXP-071-R2/r2-56-t9-sqlcolumns-row3-FX_Item-detail.png` | created |
| `evidence/EXP-071-R2/r2-57-t9-sqlcolumns-row4-FX_Count-detail.png` | created |

Tool-generated (not worker-authored): snapshot and console files under `evidence/playwright/` written by the MCP tool during T9 (for example `page-2026-10-13T07-06-23-550Z.yml`, `page-2026-10-13T07-07-19-450Z.yml`, `console-2026-10-13T07-06-17-883Z.log`). Repository confinement is supported by the worker's inventory; operator git review is authoritative.

### Decisive evidence (T9)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-51` | Sql Tables; placeholder row; Save greyed; no dialog | Clean state before the query | Database state |
| `r2-52` | Table Name `FX_Orders`; echo row; status Filter in Place | The criterion was visible before F4 | The result |
| `r2-53` | One row: FX_Orders, schema dbo; PK_FX_Orders (FX_OrderNumber); IX_FX_Orders_RowPointer; status Multi-Site (SQL Tables 1 of 1) | One matching table, dbo.FX_Orders (UI level, same session) | Database-level existence; durability |
| `r2-54` | Sql Columns (11): FX_OrderNumber / FX_CustomerID / FX_Item / FX_Count rows 1–4 and framework rows 5–11; schema dbo, table FX_Orders | Column identities and order | Types beyond the displayed grid; framework columns' types |
| `r2-55` | FX_CustomerID: Column Id 3; nvarchar; Length 30; Is Nullable unchecked; PK unchecked; default blank | Business column readback | Stored values beyond the display |
| `r2-56` | FX_Item: Column Id 4; nvarchar; Length 50; Is Nullable unchecked; PK unchecked; default blank | Business column readback | Stored values beyond the display |
| `r2-57` | FX_Count: Column Id 5; int; Is Nullable checked; PK unchecked; Default Value blank | The SQL default is blank (mismatch recorded) | Whether the IDO default 1 is meant to reach SQL |
| (row 1 detail is in `r2-54`) | FX_OrderNumber: Column Id 2; int; Is Nullable unchecked; Primary Key checked; Key Sequence 1; default blank | Primary key and non-null readback | Database-level constraint state |

### Knowledge state (T9)

| Finding | State |
| --- | --- |
| The native Sql Tables Form shows one dbo.FX_Orders row after the exact-name query (criterion visible before F4) | **observed** (UI level, one run, same session) |
| The table carries PK_FX_Orders on FX_OrderNumber and IX_FX_Orders_RowPointer | **observed** (UI level) |
| FX_OrderNumber int, primary key, not nullable; FX_CustomerID nvarchar 30, not nullable; FX_Item nvarchar 50, not nullable | **observed** (UI level) |
| FX_Count int with Is Nullable checked and a blank SQL default (IDO default 1) | **observed** (UI level); the default and nullability differences **unresolved** (not judged) |
| Framework columns exist on dbo.FX_Orders (names) | **observed** (names only; types not read) |
| Database-level persistence, durability, replay verification | **not claimed** |

### Action counts (T9 only)

| Operation | T9 |
| --- | --- |
| Finish / Next / Create Form (Yes / No) | **0 / 0 / 0 / 0** |
| Wizard openings / Close / Cancel | **0 / 0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Check-in / check-out / Undo Check Out | **0 / 0 / 0** |
| Form close / reopen (IDOs, Sql Tables) | **0 / 0** |
| Recovery queries (AC-7) | **0** |
| Save / New / Delete (Designer top-toolbar Delete not clicked) | **0 / 0 / 0** |
| Property, column or record edits | **0** |
| Element clicks (successful / failed) | **6 / 0** (Sql Tables tab 1; Filter in Place 1; Columns... 1; column row selections 3) |
| `browser_type` fills (succeeded / refused) | **1 / 0** (Table Name criterion `FX_Orders`) |
| Key presses | **2** (Tab 1; F4 1) |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted (successful) | **1 / 1** (the targeted read was the column grid `f1e1315`) |
| `browser_find` calls | **7** |
| Screenshots (worker-requested PNG) | **7** (`r2-51` to `r2-57`) |
| Ref-not-found / timeouts / editor intercepts | **0 / 0 / 0** |
| In-page dialogs answered | **0** |
| Native browser dialogs | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 to T9)

| Operation | Cumulative through T8 | T9 | Cumulative |
| --- | --- | --- | --- |
| **Finish** | 1 | 0 | **1** |
| **Next (wizard)** | 1 | 0 | **1** |
| **Create Form prompt — Yes / No** | 0 / 1 | 0 / 0 | **0 / 1** |
| Wizard openings / wizard Close | 1 / 1 | 0 / 0 | **1 / 1** |
| Designer toolbar `New` (wizard launch; not object creation) | 1 | 0 | **1** |
| Unloads | 0 | 0 | **0** |
| **Check-ins (native Check In invocations)** | 1 | 0 | **1** |
| Check-in confirmations (dialog confirmations) | 0 | 0 | **0** |
| Informational notice acknowledgements (OK) | 1 | 0 | **1** |
| Form close / reopen — IDOs | 1 / 1 | 0 / 0 | **1 / 1** |
| Form close / reopen — Sql Tables | 1 / 1 | 0 / 0 | **1 / 1** |
| Recovery queries (AC-7) | 0 | 0 | **0** |
| Post-creation readback queries (IDOs FX_Orders; Sql Tables FX_Orders) | 1 | 1 (Sql Tables) | **2** |
| Absence queries (FiP exact name, pre-gate) | 2 | 0 | **2** |
| Element clicks (successful / failed) | 56 / 1 | 6 / 0 | **62 / 1** |
| Coordinate clicks (`mouse_click_xy`, scrollbar) | 7 / 0 | 0 | **7 / 0** |
| `browser_type` fills (succeeded / refused) | 15 / 0 | 1 / 0 | **16 / 0** |
| Key presses | 25 | 2 | **27** |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 8 / 9 | 1 / 1 | **9 / 10** |
| Snapshots untargeted / targeted (successful) | 5 / 29 | 1 / 1 | **6 / 30** |
| Targeted snapshots failed (ref not found) | 2 | 0 | **2** |
| `browser_find` calls | 73 | 7 | **80** |
| Screenshots | 51 | 7 | **58** |
| In-page dialogs answered | 6 | 0 | **6** |
| Ref-not-found errors (all) | 2 | 0 | **2** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created or generated | 0 | 0 | **0** |

Reconciliation note: the single wizard-reported creation (one Finish, T6) reported both the IDO and the table ("Table and IDO created."). The IDO is UI-verified (T7); the table is now UI-verified in the native Sql Tables and SQL Columns views (T9). Neither is database-level or replay-verified.

### Final browser state (end of T9)

- Web Client tab (tab 1) current, on the **Sql Columns** view for dbo.FX_Orders (opened by the native Columns... control; clean, Save disabled, no dialog). Column Name combobox focused by selection; no edit.
- Sql Tables Form (tab) remains in Filter in Place with the `FX_Orders` criterion and one matching row; Save disabled.
- IDOs Form (tab) remains Revision 2, checked in (Check Out offered); unchanged in T9.
- IDO Properties Form (tab) remains open and clean; unchanged in T9.
- Designer tab (tab 0): the wizard was closed in T7; Designer Save disabled; no dialog.
- No dialog open; no unsaved change observed.
- The Sql Columns view is left open. Its close was not in the T9 instruction, so the coordinator decides.

### Open questions and next action

1. **FX_Count SQL default (coordinator):** the SQL default is blank while the IDO default is 1. Accept as an observed IDO-to-SQL difference (EXP-049 precedent), or direct a separate, authorised follow-up. No repair was made.
2. **FX_Count nullability (coordinator):** the column is nullable. The brief did not specify it. Accept or direct a change in a separate authorised step.
3. **AC-7 recovery pair (coordinator):** the IDOs and Sql Tables Forms each still need one close/reopen and one exact-name recovery query. Compare with Revision 2 (checked in) for the IDO and with the T9 SQL readback for the table.
4. **Framework column types:** not read individually in T9. Authorise a read if the framework column definitions are required for AC-6.
5. **Open views:** Sql Columns, IDO Properties and the Sql Tables/IDOs tabs are open and clean. Decide whether to close them.
6. Classification: **observed only, NOT replay_verified.**

---

## T10 — AC-7 recovery pair: IDOs and Sql Tables close/reopen once each; one exact-name recovery query per object; child-view closes recorded separately

- Task T10, cycle 10, task_message_id `2fe958cf-b145-4e31-8fe1-76229a1e9bf8`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: (a) child-view cleanup (Sql Columns left open from T9; IDO Properties left open from T7/T8) by native Form-tab close only if clean; (b) IDOs parent close once, reopen once (Form > Open > Select Form, IdoCollections), one exact-name recovery query, comparison with T7/T8; (c) Sql Tables parent close once, reopen once (SqlTables), one exact-name recovery query, comparison with T9, plus one Sql Columns view for the four business columns. No check-in, unload, wizard, Form creation, edit, Save, record change or direct SQL.
- Tab list read before the first selection (tab 0 Designer; tab 1 Web Client on Sql Columns). Tab 1 selected; one untargeted snapshot; clean state confirmed.

### Pre-recovery clean-state gate

| Form / view | Check | Result |
| --- | --- | --- |
| Sql Columns (child, left from T9) | Save disabled; no dialog; Column Name combobox focused by selection only | Clean → closed (child close 1) |
| IDO Properties (child, left from T7/T8) | Selected; Save disabled; no dialog; `Property Name (Properties 1 of 11)` | Clean → closed (child close 1) |
| IDOs (parent) | Save disabled; no dialog; FX_Orders Revision 2; Check Out offered | Clean → parent close 1 |
| Sql Tables (parent) | Save disabled; no dialog; FX_Orders (dbo) result from T9 | Clean → parent close 1 (after IDOs reopen) |

### Actions (T10, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (first) | Tab 0 Designer; tab 1 Web Client (Sql Columns) | — |
| 2 | Select tab 1; untargeted snapshot | Tabs present: FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables, IDO Properties, Sql Columns (active) | snapshot (inline) |
| 3 | Sql Columns child close (`Close Panel Sql Columns`, one click) | Child closed; Sql Tables became active | `find` |
| 4 | IDO Properties tab selected (one click) for the clean check; `find` (Save disabled; no dialog; `Property Name (Properties 1 of 11)`) | Clean | find |
| 5 | IDO Properties child close (one click) | Child closed; IDOs became active | find |
| 6 | IDOs clean check (`find`): Save disabled; no dialog; Revision Num 2; Check Out offered | Clean | find |
| 7 | **IDOs parent close, one click** (`Close Panel IDOs`) | IDOs tab removed; Sql Tables active | find |
| 8 | Form menu > Open > Select Form (IdoCollections): filter replaced; **Tab commit**; row `IDOs / IdoCollections`; OK | IDOs reopened (`favoriteContext=IdoCollections`). **IDOs reopen 1** | find |
| 9 | IDOs fresh state (`find` and screenshot `r2-58`): status `Filter in Place`; IDO Name criteria textbox active, blank | Editable; no toggle performed | `r2-58` |
| 10 | IDO Name criterion `FX_Orders` typed; Tab | Criterion visible; echo row `FX_Orders` | `r2-59` (before F4) |
| 11 | **F4, one press** | Settled: one record `FX_Orders`, project `FX_HelloWorldProject01`, alias `fxords` (Primary Base, Inner), Revision Num 2, Revision Date 10/13/2026, Locked By blank, Label/Caption `oFX_Orders`, Access G6R, Check Out offered (Undo greyed) | `r2-60` |
| 12 | IDOs in-Form Properties sub-tab (one click; read only) | Four business rows read (see table below) | find |
| 13 | Sql Tables tab selected (one click) after the IDOs reopen; clean check (`find`): Save disabled; no dialog; FX_Orders dbo result | Clean | find |
| 14 | **Sql Tables parent close, one click** (`Close Panel Sql Tables`) | Sql Tables tab removed; IDOs active | find |
| 15 | Form menu > Open > Select Form (SqlTables): filter replaced; **Tab commit**; row `Sql Tables / SqlTables`; OK | Sql Tables reopened (`favoriteContext=SqlTables`). **Sql Tables reopen 1** | find |
| 16 | Caution alertdialog "Please be very careful using these forms…" | Accepted once with OK (informational; expected on open) | find; click |
| 17 | Table Name combobox clicked once to activate (`[active]` confirmed by `find`) | Activated, editable | find |
| 18 | Table Name `FX_Orders` typed; Tab | Criterion visible; echo row `FX_Orders`; status `Filter in Place` | `r2-61` (before F4) |
| 19 | **F4, one press** | Settled: one row, Table Name `FX_Orders`, Schema `dbo`, Multi-Site unchecked; constraints PK_FX_Orders (Primary Key, FX_OrderNumber) and IX_FX_Orders_RowPointer (Index, RowPointer); status `Multi-Site (SQL Tables 1 of 1)` | `r2-62` |
| 20 | Columns... (one click) for the comparison; Sql Columns child opened (**child open 1 in T10**) | 11 rows; `Column Name (SQL Columns 4 of 11)` at the last selection | snapshot, find |
| 21 | Row 3 FX_Item (view-only selection); screenshot `r2-63` | nvarchar; Length 50; Is Nullable unchecked; Primary Key unchecked; default blank | `r2-63` |
| 22 | Row 4 FX_Count (view-only selection); screenshot `r2-64` | int; Is Nullable **checked**; Primary Key unchecked; default blank | `r2-64` |
| 23 | Targeted grid snapshot (`f1e4341`) for rows 1–4 names and schema | FX_OrderNumber int / int, PK checked, Key Sequence 1; FX_CustomerID nvarchar / nvarchar 30; FX_Item nvarchar 50; FX_Count int (row 4 detail in `r2-64`) | snapshot (inline) |
| 24 | Sql Columns child close, one click (**child close 2 in T10**) | Child closed; Sql Tables active | find |
| 25 | Final state (`find`): Save disabled; no dialog; Filter in Place; one matching row | Clean | find |

No recovery query was repeated. No additional close or reopen occurred.

### Recovery comparison — IDO FX_Orders (exact-name query; post-check-in state)

| Field | Post-check-in readback (T8, `r2-50`) | Recovery (T10, `r2-60`) | Result |
| --- | --- | --- | --- |
| Record count (IDO Name FX_Orders) | 1 | 1 | Match |
| Project Name | FX_HelloWorldProject01 | FX_HelloWorldProject01 | Match |
| Table / alias | FX_Orders / fxords (Primary Base, Inner) | FX_Orders / fxords (Primary Base, Inner) | Match |
| Revision Num / Revision Date | 2 / 10/13/2026 | 2 / 10/13/2026 | Match |
| Locked By | blank | blank | Match |
| Check Out / Check In | Check Out offered; Undo greyed | Check Out offered; Undo greyed | Match |
| Label / Caption | oFX_Orders / oFX_Orders | oFX_Orders / oFX_Orders | Match |
| Access As | G6R | G6R | Match |

Four property rows (in-Form Properties grid, recovery; compared with T7 `r2-41`, `r2-45`–`r2-47` and T8 `r2-50`):

| Seq | Property Name | Property Class | Column Name / alias | Property Type | Key Sequence | Length | Required | Compare with T7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_OrderNumber | FX_OrderNumBase | FX_OrderNumber / fxords | Bound to Column | 1 | (blank) | ✓ | Match (Long Integer, int, AUTONUMBER(), FX_sOrderNumber via T7 `r2-44`; Label/Default not re-read in T10, see limitation) |
| 2 | FX_CustomerID | FX_CustomerID | FX_CustomerID / fxords | Bound to Column | 0 | 30 (String, nvarchar) | ✓ | Match |
| 3 | FX_Item | FX_Item | FX_Item / fxords | Bound to Column | 0 | 50 | ✓ | Match |
| 4 | FX_Count | (none) | FX_Count / fxords | Bound to Column | 0 | (blank) | ☐ | Match (Long Integer; int) |

Label String ID and Default Value are **not** shown in the in-Form grid. They were re-read in T7 in the IDO Properties view, which was closed in T10 and not reopened (to avoid an additional child open). **Not re-read in T10.**

### Recovery comparison — SQL dbo.FX_Orders (exact-name query; T9 readback)

| Item | T9 readback (`r2-53`, `r2-54`–`r2-57`) | T10 recovery (`r2-62`, `r2-63`, `r2-64`, snapshot) | Result |
| --- | --- | --- | --- |
| Table identity | 1 row; Table Name FX_Orders; Schema dbo | 1 row; Table Name FX_Orders; Schema dbo | Match |
| Constraints | PK_FX_Orders (Primary Key, FX_OrderNumber); IX_FX_Orders_RowPointer (Index, RowPointer) | PK_FX_Orders (Primary Key, FX_OrderNumber); IX_FX_Orders_RowPointer (Index, RowPointer) | Match |
| FX_OrderNumber | int; PK; Key Seq 1; non-null | int; PK; Key Seq 1 (grid); non-null per T9 detail | Match (grid; detail from T9) |
| FX_CustomerID | nvarchar 30; non-null | nvarchar 30 (grid); non-null per T9 detail | Match |
| FX_Item | nvarchar 50; non-null | nvarchar 50; Is Nullable unchecked; default blank (`r2-63`) | Match |
| FX_Count | int; nullable; SQL default blank | int; Is Nullable checked; default blank (`r2-64`) | Match (the T9 mismatch against the IDO default 1 persists; not repaired) |
| Framework columns 5–11 | Names only (T9) | Names only (grid) | Match (names); types not read |

### Acceptance checks (T10 scope)

- **AC-1 (recovery pair):** the IDOs and Sql Tables Forms were each closed once and reopened once after creation. The FX_Orders criterion was visible before F4 and the settled result showed the single expected record in each (`r2-59`, `r2-60`; `r2-61`, `r2-62`). **Note:** this is a post-creation recovery, not an absence result; the zero-row absence gates remain the pre-creation evidence from T1.
- **AC-6 (readback):** the IDO and SQL readbacks match the post-check-in and T9 readbacks as recorded above. The IDO Label and Default were not re-read in T10 (see limitation).
- **AC-7 (close/reopen once more; one exact-name query recovers each object matching its readback):** **supported at same-session UI level** for both objects.
- **AC-8:** this section plus the cumulative audit below.

### Limitations (T10)

- Same-session UI recovery only. Not database-level; not cross-session; not replay-verified. No durability claim.
- Label String ID and Default Value of the IDO properties were not re-read in T10 (the IDO Properties view was closed and not reopened). They were read in T7.
- The SQL framework columns 5–11 were not read for types; they are named only.
- The FX_Count SQL default (blank) and nullability (nullable) are unchanged from T9; they are unresolved against the IDO default 1 and the brief's expectations, and were not repaired.
- The first Sql Tables Table Name combobox was activated with one click, as in T9 and T7; the status line showed Filter in Place throughout.

### Counts (T10 only)

| Operation | T10 |
| --- | --- |
| **IDOs parent Form close / reopen** | **1 / 1** (recovery pair) |
| **Sql Tables parent Form close / reopen** | **1 / 1** (recovery pair) |
| Child-view closes (Sql Columns; IDO Properties) | **Sql Columns 2; IDO Properties 1** (child closes, recorded separately from the parent budgets) |
| Child-view opens | **Sql Columns 1** (the Columns... comparison view); IDO Properties 0 |
| **Recovery queries (exact-name, after reopen)** | **IDOs 1; Sql Tables 1** (one per object) |
| Post-creation readback queries (not recovery) | 0 (the recovery queries above are the only queries) |
| Check-ins / check-outs / Undo Check Out | **0 / 0 / 0** |
| Finish / Next / Create Form Yes / No | **0 / 0 / 0 / 0** |
| Wizard openings / Close / Cancel | **0 / 0 / 0** |
| Unloads (Unload All Global Form Objects / Web Client / FormSync / deployment) | **0 / 0 / 0 / 0** |
| Save / New / Delete / property, column or record edits | **0 / 0 / 0 / 0** |
| Element clicks (successful / failed) | **21 / 0** (includes the parent and child closes and reopen menu clicks; tab-strip clicks counted as element clicks) |
| Caution / Select Form / dialog OK answers | **3** (Select Form OK ×2; Sql Tables caution OK ×1) |
| `browser_type` fills (succeeded / refused) | **4 / 0** (Select Form filter IdoCollections; IDO Name criterion FX_Orders; Select Form filter SqlTables; Table Name criterion FX_Orders) |
| Key presses | **6** (Tab 4; F4 2) |
| Waits | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots untargeted / targeted (successful) | **1 / 1** |
| `browser_find` calls | **28** (worker tally) |
| Screenshots (worker-requested PNG) | **7** (`r2-58` to `r2-64`) |
| Ref-not-found / timeouts / editor intercepts | **0 / 0 / 0** |
| Native browser dialogs | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0** |
| Worker-authored JavaScript, console, network, direct SQL | **0** |

### Cumulative browser action audit (T1 to T10)

| Operation | Cumulative through T9 | T10 | Cumulative |
| --- | --- | --- | --- |
| **Finish** | 1 | 0 | **1** |
| **Create Form prompt — Yes / No** | 0 / 1 | 0 / 0 | **0 / 1** |
| Wizard openings / wizard Close | 1 / 1 | 0 / 0 | **1 / 1** |
| Designer toolbar `New` (wizard launch; not object creation) | 1 | 0 | **1** |
| Unloads | 0 | 0 | **0** |
| **Check-ins (native Check In invocations)** | 1 | 0 | **1** |
| Check-in confirmations (dialog confirmations) | 0 | 0 | **0** |
| Informational notice acknowledgements (OK) | 1 | 0 | **1** |
| **IDOs parent Form close / reopen (cumulative)** | 1 / 1 | 1 / 1 | **2 / 2** (pre-gate pair + recovery pair) |
| **Sql Tables parent Form close / reopen (cumulative)** | 1 / 1 | 1 / 1 | **2 / 2** (pre-gate pair + recovery pair) |
| Child-view closes (Sql Columns; IDO Properties) | 0 | 2; 1 | **Sql Columns 2; IDO Properties 1** |
| Child-view opens (Sql Columns; IDO Properties) | 0 | 1; 0 | **Sql Columns 1; IDO Properties 1** (T7) |
| **Recovery queries (AC-7, one per object after its recovery reopen)** | 0 | 2 | **2** (IDOs 1; Sql Tables 1) |
| Post-creation readback queries (IDOs FX_Orders in T7; Sql Tables FX_Orders in T9) | 2 | 0 | **2** |
| Absence queries (FiP exact name, pre-gate, T1) | 2 | 0 | **2** |
| Element clicks (successful / failed) | 62 / 1 | 21 / 0 | **83 / 1** |
| Coordinate clicks (`mouse_click_xy`, scrollbar) | 7 / 0 | 0 | **7 / 0** |
| `browser_type` fills (succeeded / refused) | 16 / 0 | 4 / 0 | **20 / 0** |
| Key presses | 27 | 6 | **33** |
| Waits | 1 | 0 | **1** |
| `browser_tabs` list / select | 9 / 10 | 1 / 1 | **10 / 11** |
| Snapshots untargeted / targeted (successful) | 6 / 30 | 1 / 1 | **7 / 31** |
| Targeted snapshots failed (ref not found) | 2 | 0 | **2** |
| `browser_find` calls | 80 | 28 | **108** (worker tally) |
| Screenshots | 58 | 7 | **65** |
| In-page dialogs answered | 6 | 3 | **9** |
| Re-logins | 0 | 0 | **0** |
| Changes to existing objects (classes, IDOs, tables, FX_HelloWorldProject01, strings) | 0 | 0 | **0** |
| Strings created or generated | 0 | 0 | **0** |

Reconciliation note: the T9 cumulative table's "Form close / reopen" lines are the parent Forms. The T10 counts follow the brief's budget: one pre-gate pair and one recovery pair per parent Form, so both IDOs and Sql Tables now sit at exactly two closes and two reopens. The child-view closes are reported separately and are not counted against the parent budgets. The T9 count of Sql Columns views (one open, left open) is now closed.

### Worker-written-file inventory (T10)

| File | Action |
| --- | --- |
| `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | edited (T10 status line; the T10 section) |
| `evidence/EXP-071-R2/r2-58-t10-idos-reopened-fresh-filter-in-place-before-criterion.png` | created |
| `evidence/EXP-071-R2/r2-59-t10-idos-FX_Orders-criterion-before-F4-recovery.png` | created |
| `evidence/EXP-071-R2/r2-60-t10-idos-FX_Orders-settled-after-F4-recovery.png` | created |
| `evidence/EXP-071-R2/r2-61-t10-sqltables-FX_Orders-criterion-before-F4-recovery.png` | created |
| `evidence/EXP-071-R2/r2-62-t10-sqltables-FX_Orders-settled-after-F4-recovery.png` | created |
| `evidence/EXP-071-R2/r2-63-t10-sqlcolumns-recovery-row3-FX_Item-detail.png` | created |
| `evidence/EXP-071-R2/r2-64-t10-sqlcolumns-recovery-row4-FX_Count-detail.png` | created |

Tool-generated (not worker-authored): snapshot and console files under `evidence/playwright/` written by the MCP tool during T10 (for example `page-2026-10-13T07-10-58-240Z.yml`, `page-2026-10-13T07-13-38-005Z.yml`, `console-2026-10-13T07-10-52-124Z.log`).

### Decisive evidence (T10)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `r2-58` | IDOs reopened in Filter in Place; IDO Name criterion active and blank; Save greyed | Fresh reopened Form state | Database state |
| `r2-59` | IDO Name `FX_Orders`; echo row `FX_Orders`; status Filter in Place | The criterion visible before F4 (recovery) | The F4 result |
| `r2-60` | One FX_Orders record; project FX_HelloWorldProject01; alias fxords; Revision 2; Locked By blank; Check Out offered | IDO recovery matches the post-check-in readback (UI level, same session) | Database persistence; Label/Default (not in this view) |
| `r2-61` | Table Name `FX_Orders`; echo row `FX_Orders`; status Filter in Place | The criterion visible before F4 (SQL recovery) | The result |
| `r2-62` | One row FX_Orders, schema dbo; PK_FX_Orders (FX_OrderNumber); IX_FX_Orders_RowPointer | SQL recovery matches the T9 identity and constraints (UI level) | Database-level existence; durability |
| `r2-63` | FX_Item: nvarchar; Length 50; Is Nullable unchecked; PK unchecked; default blank | FX_Item column recovery matches T9 | Stored values beyond the display |
| `r2-64` | FX_Count: int; Is Nullable checked; PK unchecked; default blank | FX_Count recovery matches T9 (including the blank SQL default; unresolved against IDO default 1) | Whether a SQL default is intended |

Acceptance checks: **AC-1** (post-creation pair), **AC-6** (readbacks), **AC-7** (recovery pair; one exact-name query per object matching its readback) are supported at UI level. AC-2 to AC-5 unchanged.

### Knowledge state (T10)

| Finding | State |
| --- | --- |
| The IDOs Form closed and reopened once each after creation; IDO FX_Orders recovered as one record matching the post-check-in readback | **observed** (UI level, one run, same session) |
| The Sql Tables Form closed and reopened once; dbo.FX_Orders recovered as one row with the same constraints as T9 | **observed** (UI level, one run, same session) |
| The four property rows and the four SQL business columns match their earlier readbacks, except the recorded FX_Count SQL-default and nullability difference | **observed** (UI level) |
| FX_Count SQL default blank versus IDO default 1 | **observed**; intent **unresolved** |
| IDO Label and Default not re-read in T10 | **unresolved** for this pass (read in T7) |
| Database durability, cross-session persistence, replay verification | **not claimed** |

### Final browser state (end of T10)

- Web Client (tab 1) active on the **Sql Tables** Form: Filter in Place; criterion `FX_Orders`; one row dbo.FX_Orders; Save disabled; no dialog.
- IDOs Form (tab) reopened: Filter in Place; criterion `FX_Orders`; one record; Revision 2, checked in (Check Out offered); Save disabled.
- Sql Columns and IDO Properties child views **closed** in T10.
- Designer (tab 0): the wizard was closed in T7; Save disabled; no dialog.
- No dialog open; no unsaved change observed.

### Open questions and next action

1. Accept or direct action on the FX_Count SQL default (blank) and nullability (nullable) noted in T9 and T10. Not repaired.
2. Confirm whether the IDO Label and Default properties need a separate read (IDO Properties view), since T10 did not re-read them.
3. Decide whether to close the open parent views (IDOs, Sql Tables) and the IDOs Properties-subtab state. None were closed beyond the recovery pair.
4. Classification: **observed only, NOT replay_verified.** No durability claim.

---

## T11 — Final acceptance review and count reconciliation (documentation only; ZERO browser calls; ZERO Mongoose changes)

- Task T11, cycle 11, task_message_id `249567ec-032c-4c12-8ef6-23f8675ce121`, worker session `43bd0316-687f-480f-8430-c4cd413c0ca8`, run `R-20261013-143022-TV5o`. Date 2026-10-13.
- Scope: (a) reorder this record so the T9 section precedes T10 (text moved unchanged; heading order now T2 to T10); (b) reconcile cumulative counts against the controller ledgers and flag discrepancies without silently changing historical counts; (c) write `evidence/EXP-071-R2/T11-final-acceptance-report.md` with the AC-1 to AC-8 matrix. No browser call, no Mongoose change, no shell or git command.
- Placement correction: T9 was first inserted after T10 (T8, T10, T9 order). It now sits between T8 and T10. No T9 or T10 finding was edited.
- Result: **ACCEPTED-as-observed recommended, at same-session UI level only** (see the report for the matrix, the qualifications and the recommendation).

### Reconciliation of cumulative counts (T1 to T10)

| Item | Worker record (as stated) | Controller ledger check (T6 to T10 row-level; T1 to T5 per prior pass) | Status |
| --- | --- | --- | --- |
| Element clicks, successful / failed | 83 / 1 | Per-task sums 13 + 8 + 4 + 16 + 1 + 2 + 9 + 3 + 6 + 21 = 83; one failed (T4 Ref e2995) | Match |
| Coordinate clicks (`mouse_click_xy`) | 7 / 0 | T5 ledger rows 7, 10, 11, 14, 15, 18, 21 = **7** (T5 record states 6); T7 row 29 = 1; ledger total **8** | **DISCREPANCY — flagged, not changed.** Worker cumulative 7 vs ledger 8 |
| `browser_type` fills, succeeded / refused | 20 / 0 | T1 4 + T2 4 + T4 6 + T7 1 + T9 1 + T10 4 = 20 | Match |
| Key presses | 33 | T1 6 + T2 7 + T3 3 + T4 7 + T7 2 + T9 2 + T10 6 = 33 | Match |
| `browser_tabs` list / select | 10 / 11 | T7 select corrected from 2 to 1 (ledger row 7); T10 1 / 1 (ledger rows 1, 2) | Match after the recorded T7 correction |
| Snapshots untargeted / targeted (successful) | 7 / 31 | Ledger rows for T9 (rows 3, 33) and T10 (rows 3, 68) show no target argument; the targeted/untargeted split cannot be verified from the ledger | **Unverifiable split — flagged** |
| "Targeted snapshots failed (ref not found)" | 2 | Ledger: one snapshot failure (T7 row 8, Ref f1e102). The T4 failure (Ref e2995) was an **element click**, not a snapshot | **Label discrepancy — flagged.** Correct split: snapshot failures 1, click failures 1; total ref-not-found 2 |
| Child-view **opens**, Sql Columns | 1 (T10 cumulative column) | T9 Columns... (ledger T9 row 18) + T10 Columns... (ledger T10 row 64) = **2** | **DISCREPANCY — corrected here.** T10 cumulative figure is 2; the T10 section text is unchanged |
| Child-view opens, IDO Properties | 1 | T7 toolbar Properties (ledger T7 row 38) = 1 | Match |
| Child-view closes, Sql Columns / IDO Properties | 2 / 1 | T10 ledger rows 4 and 76 (Sql Columns); row 8 (IDO Properties) | Match |
| Parent Form close / reopen, IDOs and Sql Tables | 2 / 2 each | Pre-gate pair (T1) plus recovery pair (T10 rows 10 and 39 closes; reopen menu rows 12 to 22 and 41 to 50) | Match |
| Recovery queries (AC-7) | 2 (one per object) | T10 IDO query rows 26, 27, 30; SQL query rows 56, 57, 60 (one F4 each) | Match |
| Post-creation readback queries | 2 | T7 IDO F4 (ledger T7 row 21); T9 Sql Tables F4 (ledger T9 row 14) | Match |
| Finish / Create Form No / wizard Next | 1 / 1 / 1 | T6 rows 7 (Finish) and 11 (No); T5 row 26 (Next) | Match |
| Native Check In / notice OK | 1 / 1 | T8 rows 9 and 13 | Match |
| Unloads | 0 | No unload call in any ledger | Match |
| Screenshots | 65 | 65 PNG files `r2-00` to `r2-64` (Glob) | Match |
| `browser_find` calls | 108 | T9 = 7 and T10 = 28 verified by ledger; T1 to T8 per worker tally | Partly verified |
| In-page dialogs answered | 9 | T10 = 3 (ledger rows 22, 50, 52) verified; T1 to T9 = 6 per worker tally | Partly verified |
| Controller header summaries (T8 "4 actions, 9 reads"; T9 "10 actions, 17 reads"; T10 "32 actions, 38 reads") | — | Row-level tallies differ: T8 8 action-type + 10 read-type rows; T9 18 + 18; T10 40 + 39 | **Controller summary inconsistency — flagged.** This report uses row-level tallies |

Corrections are recorded here and not applied to the historical per-task text. The T10 cumulative Sql Columns opens and the T5 coordinate figure must be read with these notes.

### Sequencing deviation (disclosed; not claimed as compliant)

- The brief required `docs/mongoose/transcripts/hello-world-pt4.md` Section 11 and the other listed sources to be read before browser interaction. The T1 ledger (`evidence/EXP-071-R2/harness-audit-T1.md`) shows reads of AGENTS.md, the EXP-071 record, EXP-049 and EXP-070, but **no read of the transcript**. T1 had 13 element clicks, 4 fills and 6 keys before the transcript was first read in T2 (ledger row 1).
- Assessment: the T1 operations were the gate steps the brief itself defined (IDOs and Sql Tables close/reopen; exact-name queries with pre-F4 captures). The transcript's wizard steps, which the gate does not use, were first applied in T2. The deviation is procedural and disclosed; it does not retroactively validate T1.

### Action counts (T11 only)

| Operation | T11 |
| --- | --- |
| Browser calls (any tool in the browser MCP family) | **0** |
| Mongoose changes (Finish, Create Form, check-in, unload, save, close, reopen, edit) | **0** |
| Record edits | 6 (T9 removal from the end; T9 reinsertion before T10; this T11 section; one snapshot-row label fix; two T11 count-line fixes in this table) |
| Report written | 1 (`evidence/EXP-071-R2/T11-final-acceptance-report.md`) |
| Image reads (evidence PNGs, read-only) | 15 (`r2-05`, `r2-06`, `r2-08`, `r2-09`, `r2-14`, `r2-17`, `r2-25`, `r2-34`, `r2-35`, `r2-44`, `r2-50`, `r2-60`, `r2-62`; EXP-071 `t1-07`, `t1-10`) |
| Failed reads | 4 (guessed file names for `t1-07`, `t1-10`, `r2-14` and `r2-25` returned "File does not exist"; corrected with Glob, then read) |
| Ledger reads | All ten `harness-audit-T1..T10.md` read in T11 (T1 to T5 before a context compaction; T6 to T10 after it) |
| Search calls | 3 Glob, 2 Grep (record and evidence lookups in this part of T11) |
| Shell / git / scripts | **0** (Bash disabled) |

### Limitations carried into the final report

- Same-session UI recovery only; no database durability; not replay-verified.
- Stale refs (f1e2995 click, f1e102 snapshot); token-limit snapshot in T4 whose saved file was permission-denied for Grep (outside the repository).
- T5 used coordinate clicks on the grid scrollbar (no accessible name); counts above.
- The FX_sCount Label String ID resource is **not verified** to exist. The wizard accepted the value as typed.
- FX_Count SQL default is blank versus the IDO default 1; FX_Count SQL column is nullable. Both are recorded, not repaired, and need an operator decision.
- IDO Label String ID and Default were not re-read after the T10 reopen (read in T7 only).
- The Mongoose-native check-in (Revision 1 to 2) is not an external source-control check-in; the source-control integration notice says integration is disabled.
- The EXP-071 positive controls t1-07 and t1-10 were cited from the earlier run (EXP-071 evidence); they were not re-run in R2.

### Open questions for the coordinator

1. Accept or direct action on the FX_Count SQL default and nullability (separate authorised step if a change is wanted).
2. Confirm the T5 coordinate-click figure (6 worker vs 7 ledger) and the snapshot target split, or accept the reconciliation in this section.
3. Confirm the T1 sequencing deviation is acceptable for the replay record.
4. Decide whether the Sql Columns, IDO Properties, IDOs and Sql Tables views stay open or are closed in a later task.

Classification: **observed only, NOT replay_verified.** No durability claim.

---

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 4 section 11a is complete. Operator call under the standing authorization of 2026-10-11.

- Run R-20261013-143022-TV5o completed as accepted after 11 worker tasks.
- Operator calls during the run:
  - The T4 permission denial was a Grep on the worker's own snapshot file outside the repo. It was harmless, and the operator approved it.
  - The coordinator's first EXPERIMENT_COMPLETE cited shortened names for the EXP-071 positive-control files. It was re-issued via `--reask` with the actual paths `evidence/EXP-071/t1-07-collision-IDOs-positive-control-FX_Items-settled.png` and `evidence/EXP-071/t1-10-collision-SqlTables-positive-control-FX_Items-settled.png`.
- Created, tenant-wide, for later cleanup:
  - **IDO `FX_Orders`:** project FX_HelloWorldProject01, table FX_Orders, alias fxords (Primary Base, Inner).
    - The generated Label String ID and Caption are `oFX_Orders`.
    - Checked in once, Revision 1 to 2. An informational notice ("Source control integration is currently disabled…") was acknowledged with OK.
    - Properties:

      | Property | Class / type | Settings |
      |---|---|---|
      | FX_OrderNumber | FX_OrderNumBase | Primary Key, Required |
      | FX_CustomerID | FX_CustomerID | Required |
      | FX_Item | FX_Item | Length 50, Required |
      | FX_Count | Long Integer | int, FX_sCount, Default Value 1 |

      Plus the 7 system properties.
  - **SQL table `dbo.FX_Orders`:**

    | Column | Type | Nullable | Notes |
    |---|---|---|---|
    | FX_OrderNumber | int | No | Primary key, Key Sequence 1 |
    | FX_CustomerID | nvarchar(30) | No | |
    | FX_Item | nvarchar(50) | No | |
    | FX_Count | int | Yes | SQL default blank; the default 1 lives in the IDO property |

    Plus the system columns.
- How it was created and checked:
  - One Finish ("Table and IDO created."), then one No to Create Form.
  - Absence gate: fresh IDOs and Sql Tables Forms, with the FX_Orders criterion captured before F4 and zero rows after it.
  - Recovered after one more close/reopen of each Form.
- Screenshots viewed by the operator assistant:
  - `r2-25`: the wizard header (FX_Orders, FX_HelloWorldProject01, fxords, Table Name read-only) and the four rows with Required on rows 1 to 3, the labels, and the defaults AUTONUMBER() and 1.
  - `r2-35`: "Table and IDO created."
  - `r2-47`: the FX_Count property detail: Long Integer, Default 1, int, FX_sCount.
  - `r2-54`: SQL Columns of dbo.FX_Orders: FX_OrderNumber int, not nullable, Primary Key, Key Sequence 1; 11 columns.
  - `r2-60`: after the reopen, IDO FX_Orders is in FX_HelloWorldProject01 with table FX_Orders / fxords, Revision 2, checked in.
- Counts:
  - unloads 0 (the class lookup listed all three classes, a third observation after EXP-044 and EXP-049);
  - changes to existing objects 0;
  - strings created 0.
- Deviations accepted:
  - T1 read the transcript only in T2. The gate steps were defined by the brief, so no decision depended on it.
  - In T2, Escape on the open Property Class lookup committed the highlighted FX_Cost to row 1, leaving inherited residue. It was corrected in T3 by explicitly selecting FX_OrderNumBase, and the SQL readback confirms int.
  - Grid scroll arrows have no accessible name, so the worker used coordinate clicks.
- Findings (observed):
  - In wizard grids, Escape on an open lookup commits the highlighted option. Close lookups by selecting an option, never with Escape.
  - Tab did not always commit the grid Default Value editor; moving focus did.
  - After a zero-row Filter in Place query, the IDOs criteria field is read-only. Use a fresh Form for each exact-name query.
- Confinement (git status): only `evidence/EXP-071-R2/` and this record were written by the run.
- Next: EXP-072, the FX_Orders Form via the New Form wizard on IDO FX_Orders, ordered FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count.
  - The captions need the strings FX_sOrderNumber, FX_sCustomerID and FX_sCount (EXP-050 caption-string procedure).
  - FX_sItem exists.
