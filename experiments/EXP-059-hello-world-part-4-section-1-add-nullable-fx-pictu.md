# EXP-059 — Hello World Part 4 Section 1: Add nullable FX_Picture binary column to dbo.FX_Items

**Current status (after T8, 2026-10-11, documentation-only final audit; zero browser calls): EXP-059 NOT ACCEPTED, blocked pending operator adjudication of AC-8. AC-1, AC-2, AC-3, AC-5, AC-6, AC-7 observed (UI level); AC-4 supported with a limitation (no explicit Save confirmation text; success inferred from Save disabled and System Data Type `varbinary`; no DDL displayed). AC-8 FAILED: the T4 audit records one `browser_console_messages` call (audit row 15), a browser-level diagnostic listed as out of scope, with no authorization in the T4 brief. AC-9 documentation met by `evidence/EXP-059/T8-final-audit-and-acceptance-matrix.md`. Reconciled totals: 73 interaction actions, 141 browser reads (214 browser calls); 1 browser tool error (T3 timeout); 8 flagged `browser_type` calls, all native text entry. Final state last observed at T7: FX_Items runtime active and clean (Object 1 of 3, Save disabled); Sql Tables and Sql Columns open and clean. Classification: observed only; not replay_verified.**

Earlier status (after T7, 2026-10-11): AC-1 through AC-7 established (observed, UI level). The inherited clean FX_Items runtime tab was closed once (no prompt), and FX_Items was freshly opened once via Open > Select Form (filter set to FX_Items; one matching row). Immediate and settled (4 s) captures show no opening-time prompt, Save disabled, and the three original records with the required values (dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA). Tabs open: Sql Tables and Sql Columns (both clean) and FX_Items (one instance). AC-8 and AC-9 not assessed.**

Earlier status (after T6, 2026-10-11): AC-1 through AC-6 established (observed, UI level). After the T5 reopen, one native Filter in Place query on FX_Items returned exactly one dbo.FX_Items record (PK_FX_Items and IX_FX_Items_RowPointer unchanged). The recovered inventory has 12 columns: all 11 originals match the T1 baseline on every compared field, and only FX_Picture (varbinary, Length -1, nullable checked, PK unchecked, Column Id 13) is added. Save disabled; Sql Columns open read-only; no New, Save, close/reopen, or FX_Items runtime action. AC-7 onward not started. Recovery is UI-level only, not database durability.**

Earlier status (after T5, 2026-10-11): AC-1 through AC-5 established (observed, UI level). Clean Sql Columns child closed once and clean parent Sql Tables closed once (no unsaved-changes prompts); SQL Tables reopened once via Open > Select Form; the single informational caution (verbatim match to T1) dismissed once with OK; reopened Sql Tables active, Save disabled, no dialog, blank placeholder (no filter yet). AC-6 onward not started; the inherited FX_Items runtime tab is displayed after the parent close and was not acted on.**

Earlier status (after T4, 2026-10-11): AC-1 through AC-4 established (observed, UI level). One native SQL Tables Save invoked once; Save now disabled on both Sql Columns and the parent Sql Tables; FX_Picture persisted in the UI as `varbinary`, Length -1, nullable, System Data Type `varbinary`; the 11 original columns match the T1 baseline; count 12. No success text was observed; no DDL was displayed. Current state CLEAN. Close/reopen (AC-5) and later steps not started.** Classification: observed only. Not replay_verified. Reports: `evidence/EXP-059/T1-baseline-report.md`, `evidence/EXP-059/T2-add-column-unsaved-report.md`, `evidence/EXP-059/T3-varbinary-length-nullable-unsaved-report.md`, `evidence/EXP-059/T4-native-save-report.md`.

## Run identity and provenance

- Run `R-20261011-203230-bdYw`, cycle 0, task T1. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `8252da17-360e-4a60-8b74-ca8fd9024c6c`.
- Date 2026-10-11. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope: User (Form work only; the SQL column is tenant-wide schema).
- Brief commits: `ffd3c1c` (draft, operator guards added), `4da06c2` (approved).
- Identity bar observed: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- This record did not exist at the start of T1; it was created by the T1 worker at the brief's path.

## Objective (from the brief)

Using the native Web Client SQL Tables maintenance Form, locate exactly one existing `dbo.FX_Items` table and record its complete column baseline. Then, in later authorized tasks: add exactly one column `FX_Picture` (Var Binary, Length -1, Is Nullable checked) through Columns > New; verify before one ordinary Save; capture the native Save result and any displayed generated DDL without separate execution; close and reopen SQL Tables once; prove the recovered inventory equals the baseline plus the single column; then open FX_Items read-only and confirm its three original records.

**Out of scope:** any other SQL table (including the standard `Items`); any change to existing `dbo.FX_Items` columns, constraints, keys, indexes, or rows; any IDO, property class, or Form definition change; runtime image upload, binary entry, or record editing; direct SQL; FormSync; metadata unload; cache operations; check-in or check-out.

## Sources read

- `AGENTS.md`: full.
- `docs/mongoose/transcripts/hello-world-pt4.md`: Section 1 (lines 89–104, "Extend Items SQL table with Picture — 00:18–01:32"); the file's Part 4 boundary notes (lines 1–20) and "Factory-specific constraint" (SQL schema changes separately permissioned).
- `EXP-058` (full), `EXP-051` (full), `EXP-049` (lines 1–302 of 356), `EXP-040` (lines 1–505 of 1256).
- Relevant precedent: the SQL Tables caution alert is informational (EXP-049 T17; EXP-040 T12). The Attributes Table Name combobox is the record field, not a query field (EXP-040 T10 incident; avoided in T1).

## Repository starting state (session-start snapshot; not re-verified, no shell)

- Pre-existing modifications, not EXP-059 changes: `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. Untouched by this worker.

## T1 — read-only prerequisite and baseline (cycle 0)

Actions (summary; full audit in the T1 report §8): tab list (1) and select (1) to tab 1 (Web Client); Open > Select Form; Select Form filter `SqlTables` (typed) with one End key press to refresh; row `Sql Tables / SqlTables`; OK; one opening prompt dismissed with OK; grid Table Name criteria `FX_Items` (typed), Tab, F4; Columns... (opened Sql Columns read-only); horizontal view scroll; one row-3 selection. No Save, no New, no edit, no close or reopen of SQL Tables, no runtime FX_Items open.

### Opening prompt (AC-1)

- Title `Sql Tables`; warning icon; text: **"Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms."**
- Responses offered: **OK** only. No save, delete, or conversion choice.
- Disposition: informational, no change committed; dismissed with OK once. Evidence: `evidence/EXP-059/t1-02-sqltables-opening-immediate.png`; `t1-snapshot-05`.

### Target identity (AC-2)

- Grid Table Name criteria `FX_Items` (entered in the grid criteria combobox, not the Attributes combobox); F4 once.
- Result: one record, `Schema (SQL Tables 1 of 1)`; Table Name `FX_Items`; Schema `dbo`; Multi-Site unchecked; constraints `PK_FX_Items` (Primary Key, description `FX_Item`) and `IX_FX_Items_RowPointer` (Index, description `RowPointer`); Save and Update Current Table disabled. Evidence: `evidence/EXP-059/t1-05-sqltables-FX_Items-after-F4-settled.png`; `t1-snapshot-09`.

### Pre-change column inventory (AC-2; 11 columns, all `dbo.FX_Items`)

| # | Column | Data Type | Length | Decimal | Is Nullable | Primary Key |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | nvarchar | 20 | — | No | Yes (seq 1) |
| 2 | FX_Description | nvarchar | 150 | — | Yes | No |
| 3 | FX_Cost | decimal | 18 | 2 | Yes | No |
| 4 | FX_UM | nvarchar | 10 | — | Yes | No |
| 5 | CreatedBy | UsernameType (nvarchar) | 128 | — | No | No |
| 6 | UpdatedBy | UsernameType (nvarchar) | 128 | — | No | No |
| 7 | CreateDate | CurrentDateType (datetime) | — | — | No | No |
| 8 | RecordDate | CurrentDateType (datetime) | — | — | No | No |
| 9 | RowPointer | RowPointerType (uniqueidentifier) | — | — | No | No |
| 10 | NoteExistsFlag | FlagNyType (tinyint) | — | — | No | No |
| 11 | InWorkflow | FlagNyType (tinyint) | — | — | No | No |

Full matrix with defaults and Column Ids: `evidence/EXP-059/T1-baseline-report.md` §5. Evidence: `t1-06`, `t1-07`, `t1-08`, `t1-09`; `t1-snapshot-10` to `-13`. Defaults: FX_Item, FX_Description, FX_Cost, FX_UM blank; system columns `suser_sname()`, `getdate()`, `newid()`, `(0)`.

### FX_Picture absence (AC-2)

- Exact comparison: `FX_Picture` not among the 11 column names.
- Case-insensitive comparison: no name equals `fx_picture` in any case and none contains `picture`.
- Finding: **FX_Picture does not exist**.

## T2 — one Columns > New, FX_Picture name entered, Data Type not selectable (cycle 1; AC-3 not established)

Full report: `evidence/EXP-059/T2-add-column-unsaved-report.md`. Task message `890234b4-5676-4f1a-84ba-0dd9c7340634`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`.

- **Gate (read-only, passed):** tab list (1) and select to tab 1; identity bar DEM configuration; Sql Columns selected with `3 of 11`; Save disabled; no dialog; 11 rows matching T1.
- **New (1 of 1):** toolbar New on the Sql Columns form. Result: one unsaved row 4 (star), `4 of 12`, Save enabled, Data Type/Length/Is Nullable unset, no validation message. Inserted at display position 4 (between FX_Cost and FX_UM); original values unchanged.
- **Column Name:** `FX_Picture` entered in the detail combobox and read back in the grid and detail; Schema `dbo`, Table `FX_Items`.
- **Data Type (blocker):** the Open trigger opened an alphabetical list (`binary` visible near the top). No `VarBinary` / `Var Binary` entry was rendered after scrolling to `G` entries; four case-insensitive regex finds matched nothing; a typed filter `varbin` did not filter. Escape closed the list; Ctrl+A and Delete cleared the typed text. Data Type is blank again. No type name was guessed or committed.
- **Baseline re-check after the New and name entry:** all 11 original rows match T1 (Data Type, system type, Length, Decimal Position, default, Is Nullable, PK). Only addition: the FX_Picture row.
- **Not done:** Length -1; Is Nullable; Save; second New; close; reopen; runtime FX_Items open.
- **Counts:** New 1; Save 0; clicks 3; typed entries 2; key presses 4; wheel 5; mouse moves 2; wait 1; finds 7; snapshots 13; screenshots 11; dialogs 0; ref-not-found 0; timeouts 0; failed or ineffective actions 3 (Data Type open-click, typed filter, list scroll).
- **Pending state:** an unsaved FX_Picture row with blank Data Type. It must be resolved by the operator's chosen route before any Save.
- **Next (not authorized in T2):** the Data Type selection route (open question), then Length -1, Is Nullable, one readback, one Save.

## T3 — complete AC-3 on the existing unsaved row: varbinary, Length -1, Is Nullable (cycle 3; AC-3 PASSED, observed)

Full report: `evidence/EXP-059/T3-varbinary-length-nullable-unsaved-report.md`. Task message `985547f2-e02d-4c58-b2f9-ebf1cfe8e0ce`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`.

- **Gate (fresh, passed):** tab list and select to tab 1; Sql Columns selected; row 4 FX_Picture; `4 of 12`; Data Type blank; Save enabled; no dialog; original 11 rows match T1.
- **Data Type (wildcard procedure, single candidate):** `varb*` typed into the Data Type combobox with the dropdown closed; one Open-trigger click; the list showed exactly one entry, `varbinary`; that option was selected once. Committed readback: combobox and grid row `varbinary`. No substitution, no alternate method. Classification: observed only (single run; mechanism not isolated).
- **Length:** `-1` typed; Tab; readback `-1` (grid row `varbinary -1`).
- **Is Nullable:** one click on the checkbox timed out (intercepted by its display span; no state change). One fresh snapshot confirmed unchecked. One corrected attempt on the visible `Is Nullable` label checked it. Readback: checked.
- **Complete readback:** detail shows FX_Picture / dbo / FX_Items / varbinary / Is Nullable checked / Length -1; grid shows 12 rows; the 11 original rows match T1 on name, type, length, and nullable flag.
- **AC-3:** PASSED (observed, UI level).
- **State at stop:** DIRTY; Save enabled; no dialog; no listbox open.
- **Counts:** New 0; Save 0; close or reopen 0; successful clicks 4; failed click 1 (timeout); typed entries 2; Tab 1; snapshots 8; screenshots 8; dialogs 0; ref-not-found 0.
- **Not done:** Save (AC-4), close and reopen (AC-5), recovery (AC-6), runtime open (AC-7), the audit (AC-8), and the final report (AC-9).
- **Open:** System Data Type and Column Id blank pre-Save (expected to populate on Save; not observed).

## T4 — one native SQL Tables Save (cycle 4; AC-4 PASSED, observed)

Full report: `evidence/EXP-059/T4-native-save-report.md`. Task message `c32606a1-9a6d-4553-8e5e-6e9e919ac6b7`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`.

- **Gate (fresh, passed):** tab list and select to tab 1; Sql Columns selected; row 4 FX_Picture (`varbinary`, `-1`, nullable checked, PK unchecked); `4 of 12`; Save enabled; no dialog; original 11 rows match T1.
- **Save ambiguity check:** one Save control in the toolbar, acting on the active Sql Columns child of the SQL Tables workflow. Treated as the ordinary native SQL Tables maintenance Save (interpretation).
- **Save (1 of 1):** toolbar Save clicked once. No retry.
- **Immediate and settled (3 s):** toolbar Save disabled; System Data Type populated to `varbinary`; Column Id still blank; no success text, toast, dialog, error, or DDL observed.
- **Post-Save inventory:** 12 rows; the 11 originals match T1 on name, type, length, nullable; FX_Picture row `varbinary` / `varbinary` / `-1` / nullable / PK No.
- **Parent Sql Tables (one view-only tab selection):** Save disabled (clean); FX_Items / dbo; `1 of 1`; PK_FX_Items and IX_FX_Items_RowPointer unchanged; Update Current Table disabled.
- **Console:** 1 error (401 from portal security-refresh resource), present since T1; not Save-related; not investigated.
- **Counts:** Save 1; Columns > New 0; typed 0; form close or reopen 0; clicks 2; tab selects 1 (plus tab list 1); snapshots 4; screenshots 4; waits 1; console read 1; failed or ref errors 0; DDL run 0.
- **Classification:** AC-4 observed at UI level. Success inferred from disabled Save and populated System Data Type, not from a confirmation string. Database durability not verified.
- **Next (not started):** ordinary close of Sql Columns and Sql Tables and reopen (AC-5); requires authorization. Both surfaces are clean now.

## T5 — ordinary close of clean child and parent, one native SQL Tables reopen (cycle 5; AC-5 PASSED, observed)

Full report: `evidence/EXP-059/T5-close-reopen-sql-tables-report.md`. Task message `a0e35f7d-0703-4d45-b5f9-961d8d4f82c3`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`.

- **Starting state (fresh):** parent Sql Tables selected, clean (Save disabled), FX_Items / dbo; child Sql Columns open (row 4 FX_Picture: varbinary, -1, nullable); inherited FX_Items runtime tab open; no dialog.
- **Child Sql Columns:** view-only selection, verified clean (Save disabled), then close 1 of 1 via `Close Panel Sql Columns`. No unsaved-changes prompt. Tab absent.
- **Parent Sql Tables:** verified clean (FX_Items / dbo, Save disabled), then close 1 of 1 via `Close Panel Sql Tables`. No unsaved-changes prompt. Tab absent. After this close the platform displayed the inherited FX_Items runtime (only remaining tab); not acted on.
- **Reopen 1 of 1:** toolbar Open → Select Form (filter `SqlTables` pre-populated) → `Sql Tables / SqlTables` row → OK.
- **Immediate caution alertdialog, verbatim:** "Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms." Single OK. Matches the T1 caution. Dismissed with OK once.
- **Settled:** reopened Sql Tables heading active; Save disabled; no dialog; blank placeholder (no record loaded; no filter yet).
- **Counts:** child close 1; parent close 1; reopen 1; caution OK 1; Save 0; New 0; typed 0; FX_Items filter 0; Sql Columns reopen 0; failed actions 0; ref-not-found 0; timeouts 0; snapshots 8; screenshots 7.
- **Limits:** UI-level only; persistence is the AC-6 check (not started); console 401 (portal refresh) still present, not investigated.
- **Next (not authorized in T5):** AC-6 refilter and inventory comparison; coordinator decision on the inherited FX_Items runtime tab before the AC-7 opening.

## T6 — refilter after reopen and recovered inventory comparison (cycle 6; AC-6 PASSED, observed)

Full report: `evidence/EXP-059/T6-recovered-inventory-comparison-report.md`. Task message `febb4b9f-488a-4b6f-a3fc-04727a699b91`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`.

- **Start (fresh):** Sql Tables reopened and active; Save disabled; Filter in Place with blank placeholder; inherited FX_Items tab open; no dialog.
- **Filter (native, once):** grid criteria cell → `FX_Items` typed → Tab → F4. Result: one row, `Schema (SQL Tables 1 of 1)`, FX_Items / dbo, PK_FX_Items and IX_FX_Items_RowPointer, Save and Update Current Table disabled.
- **Columns... (read-only, once):** `SQL Columns 1 of 12`; horizontal view scroll (wheel 400, 600, 800) rendered all 12 rows across Data Type, System Data Type, Length, Decimal, Default, Is Nullable, PK, Key Sequence, Is Computed and Column Id.
- **Comparison:** 11 originals PASS on name, data type, system type, length, decimal (FX_Cost 2), nullable, PK, and default (T1 baseline). FX_Picture PASS on varbinary, Length -1, nullable checked, PK unchecked; Column Id 13. Total 12 = 11 + 1.
- **Recovered values as displayed:** System Data Type and Column Id shown for every row (FX_Picture system type `varbinary`, Column Id 13; originals Column Id 2–12).
- **Mis-target (disclosed, view-only):** one click on a Column Id cell selected row 11 (InWorkflow) instead of row 12; no value changed; Save remained disabled; corrected by selecting row 12's header.
- **Counts:** Save 0; New 0; close/reopen 0; Update Current Table 0; SQL execution 0; FX_Items runtime 0; typed 1; criteria click 1; Tab 1; F4 1; Columns... 1; clicks 3 (incl. the mis-target); mouse move 1; wheel 3; snapshots 9; screenshots 9; ref-not-found 0; timeouts 0.
- **Limits:** UI-level recovery only; Column Id for rows 4–11 not in T1 (recorded now); parent Sql Tables Save not re-read after Columns...; console 401 (portal refresh) unchanged, not investigated.
- **Next (not authorized in T6):** AC-7 (single FX_Items runtime opening after one ordinary close of the inherited clean instance).

## T7 — inherited FX_Items clean close, single fresh runtime opening, three-record verification (cycle 7; AC-7 PASSED, observed)

Full report: `evidence/EXP-059/T7-runtime-fx-items-opening-report.md`. Task message `3602a144-d126-4927-9d7e-4296199642ac`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`.

- **Start (fresh):** Sql Columns active (12 of 12, FX_Picture row 12, Save disabled); tabs FX_Items (inherited), Sql Tables, Sql Columns; no dialog.
- **Inherited FX_Items:** selected by heading (view); verified clean (Save disabled, Object 1 of 3, no dialog); closed once via `Close Panel FX_Items`. No prompt. FX_Items absent from the tab list.
- **Fresh opening (1 of 1):** toolbar Open → Select Form filter changed from `SqlTables` to `FX_Items` → End (no immediate refresh) → 2 s settle → list showed one row FX_Items / FX_Items → row → OK.
- **Immediate:** no dialog, no Hello World prompt; one FX_Items tab; Save disabled; `Description (Object 1 of 3)`; value box beside FX_Refresh empty (inherited instance had `45 pound iron`).
- **Settled (4 s):** unchanged; no prompt; Save disabled.
- **Three records (grid readback):** dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA. Detail read for the current row only (dumbbell).
- **Counts:** FX_Items close 1; runtime opening 1; Save 0; New 0; Delete 0; record edits 0; FX_Refresh 0; Sql Tables / Sql Columns close or reopen 0; dialogs 1 (Select Form, OK); opening prompts 0; ineffective actions 1 (End did not refresh the list; the settle wait did); waits 2; snapshots 10; screenshots 5.
- **Limits:** UI-level only; eggs and guitar read from the grid, not the detail pane; value-box identity inferred; console 401 unchanged, not investigated.
- **Next (not assessed here):** AC-8 (cumulative audit and repository confinement) and AC-9 (final report).

## T8 — documentation-only final audit and acceptance matrix (cycle 8; EXP-059 NOT ACCEPTED)

Full report: `evidence/EXP-059/T8-final-audit-and-acceptance-matrix.md`. Task message `d668b6aa-2ab9-48a6-8416-1afc32d6d4e1`, worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`. Zero browser calls; no product mutation.

**Mutation totals (reconciled to the controller audits):** Columns > New 1 (T2 row 8); native SQL Tables Save 1 (T4 row 7); SQL Tables parent close 1 (T5 row 17) and reopen 1 (T5 rows 23, 28, 31); clean Sql Columns child close 1 (T5 row 12); read-only Sql Columns opening after recovery 1 (T6 row 22); inherited FX_Items close 1 (T7 row 12); fresh FX_Items runtime opening 1 (T7 rows 17, 30, 33).

**Reconciliation:** interaction actions T1–T7 = 16, 17, 9, 3, 8, 12, 8 (total 73), matching each controller header; browser reads = 26, 33, 17, 11, 16, 19, 19 (total 141), matching each header. Browser calls total 214. Browser tool errors 1 (T3 row 37). Flagged `browser_type` 8 (T1 2, T2 2, T3 2, T6 1, T7 1), all native text entry. Ineffective outcomes 6. Recovery: one fresh snapshot and one corrected attempt (T3 rows 38, 42).

**Baseline and recovered inventory:** the 11 original columns match on every compared field; FX_Picture (varbinary, -1, nullable, PK No, Column Id 13) is the only addition (12 total).

**Native results:** the caution text is verbatim and informational (OK only; seen at T1 and T5). Save: disabled and System Data Type `varbinary` after the single Save; no explicit confirmation text; no DDL displayed.

**Runtime:** the three records match the brief; Save disabled; no opening-time prompt in the immediate or 4 s settled capture. The value box beside FX_Refresh is blank in the fresh instance; this is not inferred as a business-data change.

**Acceptance matrix:**
- AC-1 PASSED (observed). AC-2 PASSED (observed, UI level). AC-3 PASSED (observed, UI level).
- AC-4 PASSED WITH LIMITATION (no explicit confirmation text; single toolbar Save taken as the SQL Tables maintenance Save).
- AC-5 PASSED (observed). AC-6 PASSED (observed, UI level). AC-7 PASSED (observed, UI level).
- **AC-8 FAILED.** The T4 `browser_console_messages` call is a browser-level diagnostic listed as out of scope, with no T4 authorization; I have not assumed permission. Repository confinement is supported by worker inventories and audits only; operator git review is authoritative.
- AC-9 PASSED (documentation requirements met by the T8 report).

**Outcome:** NOT ACCEPTED, blocked pending operator adjudication of AC-8. Operator decisions requested: (1) AC-8 adjudication; (2) ratify the T4 Save interpretation and whether the absent confirmation text is acceptable for AC-4; (3) whether to close the remaining clean Sql Tables and Sql Columns tabs; (4) final git review.

**Final state (last observed T7; not re-verified in T8):** FX_Items runtime active, clean, Object 1 of 3, Save disabled; Sql Tables and Sql Columns open and clean; no dialog.

## Acceptance status after T1

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | **Established** | Identity bar, inherited FX_Items tab, no challenge; single opening prompt captured verbatim, informational, dismissed once with OK. Limit: source review of EXP-040 is partial (lines 1–505). |
| AC-2 | **Established** | One `dbo.FX_Items` target (`1 of 1`); complete 11-row inventory; explicit FX_Picture absence. Limits: UI-level inventory (not a catalogue query); Filter in Place match mode not inspected; Column Id read for three rows only. |
| AC-3 – AC-9 | Not started | Pending later authorized tasks. |

## Open items for the coordinator

1. The Sql Columns child tab is open. Before the single Sql Tables tab close (AC-5), it needs its ordinary close (EXP-049 T17 closed Sql Columns first, then Sql Tables). This is an ordinary close, not a mutation.
2. The inherited FX_Items runtime tab is still open; the final read-only verification needs one ordinary close before the single opening (brief).
3. The Select Form filter did not refresh on fill alone (one End press needed). Recorded as observed; not a blocker.
4. A console error count changed from 0 to 1 at the grid criteria-cell click. Source not investigated (diagnostics out of scope).

## Next permitted step (NOT started)

A separately authorized task: Columns > New exactly once for `FX_Picture` (Var Binary, Length -1, Is Nullable checked), read back the unsaved row and the existing inventory, then stop before Save. Save, close/reopen, and the runtime check are separate steps.

## Evidence

Folder `evidence/EXP-059/`:
- `T1-baseline-report.md`: full T1 report, action audit, matrices, limits.
- `t1-snapshot-00-webclient-start.md` … `t1-snapshot-13-sqlcolumns-row3-FX_Cost-detail.md`: accessibility snapshots (14 files).
- `t1-01-webclient-start-state.png` … `t1-09-sqlcolumns-row3-FX_Cost-detail.png`: screenshots (9 files). Decisive: `t1-02` (exact caution text, OK only); `t1-05` (single FX_Items target, 1 of 1, constraints); `t1-06` (Sql Columns, 11 rows, FX_Item detail); `t1-08` (Is Nullable column for all 11 rows); `t1-09` (FX_Cost detail).

## Knowledge state

| Finding | State |
| --- | --- |
| SQL Tables opening caution: exact text; OK only; informational | observed (single run) |
| Select Form filter needs a key event to refresh the list | observed (single run) |
| Table Name criteria in the grid returns one dbo.FX_Items record | observed (single run; UI level) |
| 11-column pre-change inventory of dbo.FX_Items | observed (single run; UI level) |
| FX_Picture absent (exact and case-insensitive) | observed (single run; UI level) |
| Column creation, Save, DDL, persistence, runtime behaviour | not tested (later tasks) |
| Replay | not claimed |

## Outcome (operator, 2026-10-11)

**Accepted with limits. AC-8 waived** (operator call under the standing authorization of 2026-10-11). Run R-20261011-203230-bdYw completed as blocked at cycle 9; this operator outcome supersedes that verdict. Observed only, not replay-verified.

- **Why the waiver:** AC-8 failed on one read-only `browser_console_messages` call in T4, which the brief did not authorize. It read the console log only; it changed nothing in the browser, Mongoose or the repository. It was disclosed by the worker. AC-1 to AC-7 and AC-9 are supported.
- **Confinement** (operator git review): the only new paths are this record and `evidence/EXP-059/`.

Changed, for later cleanup (**tenant-wide schema change**, authorized by the AGENTS.md FX_ scope extension):
- **`dbo.FX_Items` gained the column `FX_Picture`:** Data Type `varbinary`, Length `-1`, Is Nullable checked, no default, not a key. It is Column Id 13.
- The 11 original columns (FX_Item … system columns) are unchanged. The constraints are PK_FX_Items and IX_FX_Items_RowPointer.
- No IDO, property-class, Form or data change. The three FX_Items rows are unchanged at runtime (`t7-05`).

Operator screenshot review:
- `t1-02`: opening SQL Tables shows the fixed caution alert "Please be very careful using these forms. If you delete a column or a table you will lose data. …" with OK only. It is informational. It appeared again at the reopen (`t5-07`).
- `t6-09`: after the close/reopen, Sql Columns for dbo / FX_Items shows Column Name `FX_Picture`, Column Id **13**, Data Type `varbinary`, System Data Type `varbinary`, **Is Nullable** checked, Length `-1`, Default Value empty. Status "(SQL Columns 12 of 12)".

Learned (observed):
1. **Adding a column:** Sql Tables → filter Table Name (FX_Items) → **Columns…** opens the Sql Columns child form → New → Column Name, Data Type (a combobox; type `varb` and pick `varbinary` from the list), Length `-1` committed, Is Nullable (click the label; a click on the input timed out) → **Save** on the form toolbar.
2. **What a save looks like:** there is no confirmation text and no DDL shown. After the Save, System Data Type fills in, and after the reopen a Column Id is assigned. A real Column Id suggests that a database column exists (it is read from the physical schema). The **Update Current Table** button was not needed.
3. **Caution alert:** the SQL Tables caution alert appears on every open. It is informational and OK-only.

Limits:
- UI level only.
- There is no direct database (DDL) read.

Next: Part 4 section 2, the `FX_Picture` property class (Binary, Length -1, Column Data Type VarBinary, Binary Format PNG) through the IDO Property Classes runtime form. The tutorial then does "Unload Global Form Objects", which is tenant-wide and needs explicit authorization. Earlier Part 2 work showed that new property classes are visible without an unload (EXP-049), so plan to skip it.
