# EXP-071 — T2 final blocked report (documentation only)

**Status: BLOCKED at AC-1.** FX_Orders and dbo.FX_Orders absence is **not established**, so the task stopped before the wizard. Nothing was created. The wizard was never opened.

Classification: **observed only (single session, UI level). NOT replay_verified.** Nothing here establishes database state, durability or cross-session persistence.

## 1. Scope of T2

- Documentation only. **Zero browser calls in T2.** No Form was opened, queried, saved, closed or checked. No query was run and no remediation was attempted.
- Read in T2: `experiments/EXP-071-hello-world-part-4-section-11a-fx-orders-table-and-ido.md`; `evidence/EXP-071/harness-audit-T1.md` (controller ledger, 137 rows); a directory listing of `evidence/EXP-071/` and `evidence/playwright/` (file names and count only).
- The 14 T1 screenshots were viewed during T1 and were **not** re-opened in T2. Their content is as recorded in the T1 viewing (see section 8).
- Written in T2: this report (created); `experiments/EXP-071-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` (edited).

## 2. Final acceptance matrix

| AC | Final status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Web Client and Designer clean; collision gate with positive controls | **BLOCKED.** Sources reviewed; session usable (no expiry, no sign-in, no re-login); Save disabled where read on the Web Client Forms and on the Designer. **Positive controls passed** (FX_Items IDO; dbo.FX_Items SQL). **Absence gates unresolved:** IDOs FX_Orders ambiguous (criterion not visible; field then read-only); SQL dbo.FX_Orders qualified (no captured criterion). | `t1-07`, `t1-08`, `t1-09` (IDOs); `t1-10`, `t1-11`, `t1-12` (SQL); `t1-13` (Designer) | Same-session UI only. See section 3. |
| **AC-2** Dependency gate (read-only) | **PASSED (observed, UI level).** FX_HelloWorldProject01 exists; FX_OrderNumBase, FX_CustomerID and FX_Item show the EXP-070 values; nothing changed (queries and Select Form opens only). | `t1-00` (FX_OrderNumBase), `t1-01` (FX_CustomerID), `t1-03` (FX_Item, settled), `t1-05` (FX_HelloWorldProject01) | Display values only. `t1-02` was captured before the FX_Item record loaded and is not evidence of values. |
| **AC-3** Wizard route, header, Table Name, Property Class lookup | **NOT EXECUTED.** Wizard never opened. Unloads 0. | — | — |
| **AC-4** Four properties in order | **NOT EXECUTED.** | — | — |
| **AC-5** One Finish; one No to Create Form; no Form created | **NOT EXECUTED.** Finish 0; Create Form Yes 0 / No 0. | — | — |
| **AC-6** FX_Orders IDO and dbo.FX_Orders readbacks; conditional check-in | **NOT EXECUTED.** Check-ins 0. | — | — |
| **AC-7** IDOs and SQL Tables close/reopen; recovery queries | **NOT EXECUTED.** Form closes 0; reopens 0; recovery queries 0. (The three Form opens in T1 were first opens of IDO Projects, IDOs and SQL Tables, not AC-7 reopens.) | — | — |
| **AC-8** Final report with audit | **This report** (blocked-run final report). Counts in section 5. | This file | Observed only. |

## 3. Collision gate: positive controls compared with unresolved absence checks

The positive controls succeeded. The absence checks returned zero data rows, but **neither absence check has a captured exact-name criterion that establishes absence.** Zero rows alone is not sufficient under the brief.

| Object | Positive control (FX_Items / dbo.FX_Items) | Target (FX_Orders / dbo.FX_Orders) | Final status |
| --- | --- | --- | --- |
| IDO (IDOs Form) | One record: FX_Items; project FX_HelloWorldProject01; revision 2; Tables FX_Items / fxitms and FX_UMs / fxum; checked out to operator (`t1-07`). The returned record matches the criterion, so the query path works. | Empty grid, blank detail. The fill of `FX_Orders` returned OK (ledger row 87), but **the value is not visible before F4** (no capture was taken of the FX_Orders criterion before F4; `t1-08` shows the retained FX_Items criterion) **or after F4** (`t1-09` shows the IDO Name criteria field blank). | **UNRESOLVED.** Zero rows without a visible criterion. |
| SQL (SQL Tables Form) | One record: Table Name FX_Items; Schema dbo; Multi-Site unchecked; PK_FX_Items (Primary Key, FX_Item); IX_FX_Items_RowPointer (Index, RowPointer); Save disabled (`t1-10`). | Only a blue-star add-mode placeholder (blank Table Name and Schema); no data row (`t1-12`). The FX_Orders fill returned OK (row 122), but **no pre-F4 capture** was taken (`t1-11` shows the retained FX_Items criterion). After F4 the Table Name is blank, which the placeholder explains. | **QUALIFIED / UNRESOLVED.** Zero rows without a captured criterion. |

## 4. IDOs gate: corrected entry refused, stale reference, recovery consumed

Ledger rows 92–96, in order:

1. Row 92: `browser_find` "IDO Name:". Criteria textbox reported with no value.
2. Row 93: targeted read of the IDOs form container (`f1e1673`). This was the **corrected visible inspection**. Criteria textbox empty and not active; no echo row; grid empty.
3. Row 94: **corrected entry** of `FX_Orders` into the IDO Name criteria textbox (`f1e1763`). **Refused.** `TimeoutError: Timeout 5000ms exceeded`. The locator resolved to `<input ... readonly="readonly" aria-readonly="true" data-mgcompnamevalue="CollectionNameEdit">`. The error message reads `element is not editable`. The error does not show a value written, and none was observed afterwards.
4. Row 95: targeted snapshot of the toolbar (`f1e24`) returned **`Ref f1e24 not found`**. The stale reference failed.
5. Row 96: **one fresh untargeted snapshot**, the permitted recovery snapshot. Toolbar refs were then current (Open `f1e25`, Save disabled).

**Recovery is consumed for the IDOs gate:** one corrected visible inspection (row 93), one corrected attempt (row 94, refused), and one recovery snapshot (row 96). No further IDOs query was run. Under the brief the IDOs gate stays ambiguous, and the task stops.

**Judgment call, disclosed for the coordinator.** After the recovery snapshot, I ran the SQL Tables gate (ledger rows 97–127), which was read-only and required by the T1 instruction. I did not re-run the IDOs gate. The brief says to stop on a gate ambiguity before creation. The SQL gate did not create anything, but it ran while the IDOs gate was unresolved. The coordinator should decide whether that was acceptable.

## 5. Audited counts (controller ledger, rows 1–137)

Source: `evidence/EXP-071/harness-audit-T1.md` (controller-generated; "51 actions, 58 reads"; "prohibited-tool hits=11"; "errors=3"; "exact mismatches=0"; "key string (none)"; "spelled strings: []"). Counts below are taken from the ledger rows, not from memory.

**Browser actions (controller definition)**

| Category | Count | Ledger rows / note |
| --- | --- | --- |
| Clicks, all (successful / failed) | **20 / 0** | FiP 10 (16, 25, 48, 53, 71, 75, 83, 108, 110, 118); toolbar Open 3 (37, 61, 97); Select Form row 3 (44, 67, 102); Select Form OK 3 (46, 69, 104); Sql Tables caution OK 1 (106) |
| Typed entries (`browser_type`) | **11** (10 succeeded, 1 refused) | Filter-in-Place criteria 7 (FX_CustomerID, FX_Item, FX_HelloWorldProject01, FX_Items ×2, FX_Orders ×2); Select Form filters 3 (Project, IdoCollections, SqlTables); refused 1 (row 94) |
| Key presses | **17** (all ok) | Tab 10; F4 7 |
| Tab selects | **3** | tab 1 (row 12), tab 0 (row 128), tab 1 (row 132) |
| **Actions total** | **51** | 20 + 11 + 17 + 3. Matches the controller's "51 actions" exactly. |
| Waits | 1 | Row 32 (2 s). Not in the controller's 51. |

**Reads and observations**

| Category | Count | Ledger rows / note |
| --- | --- | --- |
| Snapshots, untargeted | **2** | Rows 13, 96 |
| Snapshots, targeted | **9** (1 error) | Rows 39, 41, 43, 63, 66, 101 (Select Form dialog `f1e1197`, six); 60 (toolbar `f1e24`, ok); 95 (toolbar `f1e24`, error); 93 (IDOs container `f1e1673`) |
| `browser_find` | **31** | Rows 17, 23, 24, 26, 33, 36, 38, 45, 47, 49, 52, 54, 62, 68, 70, 72, 76, 82, 84, 92, 98, 103, 105, 107, 109, 111, 117, 119, 127, 131, 133 |
| Screenshots (`browser_take_screenshot`) | **14** | Rows 14, 21, 30, 34, 50, 58, 73, 80, 85, 90, 115, 120, 125, 129 (`t1-00` … `t1-13`) |
| Tab list | **1** | Row 11 |
| **Browser observation subtotal** | **57** | Snapshots 11 + finds 31 + screenshots 14 + tab list 1 |

**Other calls (not browser)**

| Category | Count | Note |
| --- | --- | --- |
| Read of screenshot PNGs | 14 | Rows 15, 22, 31, 35, 51, 59, 74, 81, 86, 91, 116, 121, 126, 130 |
| Read of source or record files | 6 | Rows 1, 2 (record path did not exist before creation, expected), 6, 7, 9, 10 |
| Glob | 3 | Rows 3, 4, 5 |
| Grep | 1 | Row 8 |
| Write (new record) | 1 | Row 134 |
| Edit (record) | 3 | Rows 135, 136, 137 |

**Total calls in ledger: 137** = 51 actions + 1 wait + 4 writes + 81 reads (57 browser observation + 24 other reads).

**Errors (controller: 3).** Row 2: `Read` of the EXP-071 record before it existed (expected; not a browser error). Row 94: `browser_type` timeout on the readonly IDO Name field. Row 95: snapshot `Ref f1e24 not found`.

**Reconciliation of the controller totals**

- **51 actions: reconciled exactly.** Clicks 20 + typed 11 + key presses 17 + tab selects 3 = 51. Waits are excluded; the controller's 51 also excludes the one wait.
- **58 reads: not reconciled.** The ledger's browser observation subtotal is 57 (snapshots 11, finds 31, screenshots 14, tab list 1). That leaves a gap of 1 that I cannot attribute from the ledger, since the controller's read definition is not in the audit file. Other read-type calls (14 PNG views, 6 source reads, 3 Glob, 1 Grep) total 24 and do not fit a 58 subtotal. Neither side should be taken as settled until the controller states its read definition.
- My earlier approximate count of finds (about 30) is superseded by the exact ledger figure of 31. The T1 record's snapshot breakdown (2 untargeted, 9 targeted including 1 error) matches the ledger.

**Interpretation of the 11 `browser_type` flags.** The controller flags all 11 as `browser_type` hits. Interpreted against the native workflow:

- The brief itself requires typed criteria committed with Tab, and the Filter-in-Place route as in EXP-049 uses typed criteria. Seven of the 11 entries are Filter-in-Place criteria and three are Select Form filter text. All are native, visible UI inputs, which is the permitted workflow.
- The refused entry (row 94) wrote nothing: the field was readonly and the call timed out.
- The tool wrapper for `browser_type` runs a Playwright `fill()` on the element. That wrapper is tool-generated. The worker supplied only the element description and the text, and no browser JavaScript, evaluate or run-code tool was called.
- Conclusion: **not a violation of the brief's prohibitions on browser JavaScript, scripts or direct SQL.** The controller's flag stands as a harness classification, and the operator decides. The controller notes that flagged tools may be allowed by other briefs.

**Zero counts required by the brief (all verified against the ledger)**

- Finish 0; Create Form response 0 (Yes 0, No 0).
- Unload All Global Form Objects 0; Designer or Web Client unload 0; FormSync 0; deployment or regeneration 0.
- Check-in 0; check-out 0; undo check-out 0.
- New objects 0 (IDOs, tables, Forms, projects, properties, strings); strings created 0.
- Changes to existing objects (property classes, IDOs, tables, FX_HelloWorldProject01, strings, extensions, themes) 0.
- Re-login 0; session expiry procedure not triggered.
- Form close 0; Form reopen 0 (in this task, IDO Projects, IDOs and SQL Tables were first opened); recovery queries 0.
- Save 0; New 0; Delete 0 (Designer top-toolbar Delete not clicked).
- Browser JavaScript, evaluate, run-code, console or network inspection, direct SQL, refresh, restart, direct URL navigation: 0.
- Portal banner dismissals 0; dialogs answered 1 (Sql Tables caution alert, OK).

## 6. Final application state (observed; left as found, except where noted)

- **Selected tab:** tab 1, Web Client (Mongoose). Selection order: list, select tab 1 (row 12), select tab 0 (row 128), select tab 1 (row 132).
- **Runtime tabs:**
  - `FX_Items` (pre-existing application Form, not acted on).
  - `Property Classes`: FX_Item settled record, checked out to the display; Base Class combobox focused; no edit. Save disabled in `t1-03`.
  - `IDO Projects`: FX_HelloWorldProject01 record, "1 of 1"; no edit.
  - `IDOs`: Filter in Place mode; IDO Name criteria blank and readonly after the refused entry; Save disabled (row 96).
  - `Sql Tables`: Filter in Place mode; Table Name criteria blank; **one unsaved blue-star add-mode placeholder row** from the FX_Orders query; **Save disabled** (row 127).
- **Designer (tab 0):** FX_Items application-Form design view with component `FX_UMCombobox` selected; Save and Regenerate Form disabled (row 131). Not acted on.
- **Dialogs:** none open at the end (row 133, `find` "dialog": no match).
- **Unsaved changes:** none observed (Save disabled on each Form where it was read).

**Left untouched, observed and unexplained:**

- The SQL Tables blue-star placeholder (add-mode row, Save disabled). It is not a saved record.
- The **FX_Items IDO checked out to the operator at revision 2** (checkbox checked; Check In enabled; Undo Check Out enabled). EXP-049 T14 recorded a check-in of FX_Items at revision 2. The later checked-out state is unexplained.
- The IDO Name criteria field became read-only after an FX_Orders query, and the first Filter-in-Place click on a freshly opened Form did not enter criteria mode (IDO Projects, IDOs). Cause unresolved.

## 7. Blocker and next permitted action

**Blocker:** the IDOs absence gate for `FX_Orders` is ambiguous. Visible criteria are not established, and the IDO Name criteria field became read-only after the query. The corrected entry was refused and the stale-reference recovery was used. The SQL `dbo.FX_Orders` absence check is qualified, since no criterion was captured before F4.

**Next permitted action (requires separate operator or coordinator authorisation; not executed):** a read-only re-check. It would run one `FX_Orders` absence query in the IDOs Form with a pre-F4 criterion capture and a confirmed-editable criteria field, and one `dbo.FX_Orders` absence query in SQL Tables with a pre-F4 capture. Only if both return zero rows with visible criteria could a wizard task be considered. The operator should also decide whether the SQL placeholder row stays before any wizard task.

## 8. Decisive evidence (what each file shows and does not prove)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-071/t1-00-baseline-property-classes-FX_OrderNumBase-browse.png` | Property Classes; FX_OrderNumBase; Long Integer; AUTONUMBER(); int; FX_sOrderNumber; Right; Save greyed (viewed in T1) | AC-2 FX_OrderNumBase display values | Database state |
| `evidence/EXP-071/t1-01-dependency-FX_CustomerID-settled.png` | FiP query FX_CustomerID; one row; String 30 nvarchar FX_sCustomerID; FX_HelloWorld01 / FX_Code / FX_Label (viewed in T1) | AC-2 FX_CustomerID display values | Required flag |
| `evidence/EXP-071/t1-03-dependency-FX_Item-loaded-settled.png` | FiP query FX_Item; one row; FX_ItemBase; String 20 nvarchar FX_sItem; FX_Items / FX_Item / FX_Description (viewed in T1) | AC-2 FX_Item display values | Required flag |
| `evidence/EXP-071/t1-05-dependency-FX_HelloWorldProject01-settled.png` | IDO Projects; "1 of 1"; FX_HelloWorldProject01; Access G6R (viewed in T1) | AC-2 project exists | Other projects |
| `evidence/EXP-071/t1-07-collision-IDOs-positive-control-FX_Items-settled.png` | IDO FX_Items; project FX_HelloWorldProject01; revision 2; Tables fxitms / fxum; checked out (viewed in T1) | IDO query path works | Absence of FX_Orders |
| `evidence/EXP-071/t1-08-collision-IDOs-FiP-reentered-before-target.png` | Filter in Place active; retained FX_Items criterion selected (viewed in T1) | Criteria mode before the target | The FX_Orders criterion (not yet entered) |
| `evidence/EXP-071/t1-09-collision-IDOs-target-FX_Orders-settled.png` | Empty grid; blank detail; IDO Name criteria blank; status `Filter in Place` (viewed in T1) | Zero rows for the query | **Visible FX_Orders criterion (not established)** |
| `evidence/EXP-071/t1-10-collision-SqlTables-positive-control-FX_Items-settled.png` | Table Name FX_Items; Schema dbo; PK_FX_Items; IX_FX_Items_RowPointer; Save greyed (viewed in T1) | SQL query path works | Absence of dbo.FX_Orders |
| `evidence/EXP-071/t1-11-collision-SqlTables-FiP-state-before-target.png` | Filter in Place active; retained FX_Items criterion; echo row with blank Schema (viewed in T1) | Criteria mode before the target | The FX_Orders criterion (not captured) |
| `evidence/EXP-071/t1-12-collision-SqlTables-target-FX_Orders-settled.png` | Blue-star placeholder; blank Table Name and Schema; Save greyed (viewed in T1) | Zero data rows | **Visible FX_Orders criterion (not established)** |
| `evidence/EXP-071/t1-13-designer-tab-state-read-only.png` | Designer FX_Items design view; footer `ScopeType: User`; Save greyed (viewed in T1) | Designer open; scope User | Full clean state (Save and Regenerate Form confirmed by find only) |

Also in `evidence/EXP-071/`: `t1-02-dependency-FX_Item-settled.png` (captured before the record loaded; not evidence of values); `t1-04-dependency-IDO-Projects-before-criterion.png` (browse before criteria); `t1-06-collision-IDOs-form-before-criteria.png` (browse, 361 IDOs, before criteria).

## 9. Acceptance matrix mapping (decisive evidence)

- AC-1 (blocked): positive controls `t1-07`, `t1-10`; absence targets `t1-09`, `t1-12`; blocked by the criterion visibility gap in section 3 and the refused entry in section 4.
- AC-2 (passed, observed UI level): `t1-00`, `t1-01`, `t1-03`, `t1-05`.
- AC-3 to AC-7: not executed; no evidence exists for them.
- AC-8 (blocked-run final report): this file; counts from `evidence/EXP-071/harness-audit-T1.md` rows 1–137.

## 10. Limitations

- Same-session UI evidence only. No database read was performed, so no database state is claimed.
- Neither absence check establishes that FX_Orders or dbo.FX_Orders is absent.
- Screenshots were viewed in T1; T2 did not re-open them.
- Source reading was partial: EXP-070 was read through line 510 of 1497 (the status block and T1, T2, and the start of T3). EXP-049 was read through line 302 of 356 (the T1–T16 history, not T17–T18).
- Tool-generated files under `evidence/playwright/` (21 page snapshot files and 2 console logs stamped 2026-10-13T06:16–06:20Z) exist and were **not** opened or used for counts. The console logs were not inspected (console inspection is out of scope).
- The controller's read definition for the "58 reads" figure is not in the audit file; the reconciliation above is incomplete for reads.

## 11. Worker-written-file inventory (T1 and T2, complete)

| File | Action | Task |
| --- | --- | --- |
| `experiments/EXP-071-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` | created (T1); edited ×3 (T1); edited (T2) | T1, T2 |
| `evidence/EXP-071/t1-00-baseline-property-classes-FX_OrderNumBase-browse.png` | created | T1 |
| `evidence/EXP-071/t1-01-dependency-FX_CustomerID-settled.png` | created | T1 |
| `evidence/EXP-071/t1-02-dependency-FX_Item-settled.png` | created | T1 |
| `evidence/EXP-071/t1-03-dependency-FX_Item-loaded-settled.png` | created | T1 |
| `evidence/EXP-071/t1-04-dependency-IDO-Projects-before-criterion.png` | created | T1 |
| `evidence/EXP-071/t1-05-dependency-FX_HelloWorldProject01-settled.png` | created | T1 |
| `evidence/EXP-071/t1-06-collision-IDOs-form-before-criteria.png` | created | T1 |
| `evidence/EXP-071/t1-07-collision-IDOs-positive-control-FX_Items-settled.png` | created | T1 |
| `evidence/EXP-071/t1-08-collision-IDOs-FiP-reentered-before-target.png` | created | T1 |
| `evidence/EXP-071/t1-09-collision-IDOs-target-FX_Orders-settled.png` | created | T1 |
| `evidence/EXP-071/t1-10-collision-SqlTables-positive-control-FX_Items-settled.png` | created | T1 |
| `evidence/EXP-071/t1-11-collision-SqlTables-FiP-state-before-target.png` | created | T1 |
| `evidence/EXP-071/t1-12-collision-SqlTables-target-FX_Orders-settled.png` | created | T1 |
| `evidence/EXP-071/t1-13-designer-tab-state-read-only.png` | created | T1 |
| `evidence/EXP-071/T2-final-blocked-report.md` | created (this file) | T2 |

Not worker-written: `evidence/EXP-071/harness-audit-T1.md` (controller-generated); `evidence/playwright/*` (tool-generated).

Repository confinement is supported by the worker and harness inventories. Operator git review is authoritative.

## 12. Knowledge state

| Finding | State |
| --- | --- |
| Dependency values for FX_OrderNumBase, FX_CustomerID, FX_Item and FX_HelloWorldProject01 match EXP-070 / EXP-049 | **observed** (UI level, one session) |
| FX_Items IDO and dbo.FX_Items positive controls return their records | **observed** (one run) |
| FX_Orders IDO absence: zero rows, criterion not visible; criteria field then readonly | **observed, unresolved** (gate not passed) |
| dbo.FX_Orders absence: zero data rows (placeholder), criterion not captured | **observed, qualified** (gate not passed) |
| IDO Name criteria field readonly after an FX_Orders query; first FiP click does not enter criteria mode | **observed**; cause **unresolved** |
| FX_Items IDO checked out to operator at revision 2 | **observed**; cause **unresolved** |
| SQL blue-star placeholder with Save disabled | **observed**; left untouched |
| Controller's 58-read figure | **unresolved** (not reproduced; gap of 1 against the browser observation subtotal) |
| Wizard route, property lookup, Finish, Create Form, readbacks, check-in, recovery | **not performed** |

## 13. Open questions for the coordinator

1. Accept the IDOs absence gate as blocked, and authorise (or decline) the read-only re-check in section 7.
2. Decide whether the SQL placeholder row may remain before any wizard task.
3. Decide whether running the SQL gate after the unresolved IDOs gate (section 4) is acceptable.
4. Provide the controller's definition of "reads" so the 58-read figure can be reconciled.
5. Decide how the 11 `browser_type` flags should be classified (section 5).
