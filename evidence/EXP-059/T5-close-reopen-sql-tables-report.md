# EXP-059 — T5 AC-5: ordinary close of the clean child and parent SQL Tables tabs, then one reopen of SQL Tables

Run `R-20261011-203230-bdYw`, cycle 5, task T5. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `a0e35f7d-0703-4d45-b5f9-961d8d4f82c3`. Date 2026-10-11. Classification: **observed only**.

**Outcome: AC-5 PASSED (observed, UI level).** The clean Sql Columns child tab was closed once; the clean parent Sql Tables tab was closed once; both closes produced no unsaved-changes prompt. SQL Tables was reopened once through the native Open > Select Form route. One informational caution alertdialog appeared (text matches the previously observed caution) and was dismissed once with OK. The reopened SQL Tables is active, Save is disabled, and no dialog remains. AC-6 (FX_Items filter and inventory recovery) was **not** started. FX_Items was not filtered, Sql Columns was not reopened, and no Save or New was invoked.

## 1. Starting state (fresh, read-only)

- Tab list (1) → tab 1 (Web Client) selected (1). Snapshot `t5-snapshot-00-start.md`, screenshot `t5-01-start-state.png`.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Form tabs present: `FX_Items` (inherited runtime, not acted on), `Sql Tables` (selected), `Sql Columns` (child).
- Parent Sql Tables: Save disabled; Schema `dbo`; Table Name `FX_Items`; grid `FX_Items | dbo`; status `&Columns... (SQL Tables 1 of 1)`; Update Current Table disabled; constraints PK_FX_Items and IX_FX_Items_RowPointer.
- No dialog. No unsaved-change prompt.

## 2. Child Sql Columns: verify clean, then one close

1. **View-only selection** of the child tab heading (one click, `f1e100`). Snapshot `t5-snapshot-01-child-sqlcolumns-selected-before-close.md`, screenshot `t5-02-child-sqlcolumns-selected-before-close.png`.
   - Child active: `SQL Columns` status `Is Nullable (SQL Columns 4 of 12)`; row 4 `FX_Picture dbo FX_Items varbinary varbinary -1 checkbox checked ...`; Column Name `FX_Picture`; Data Type `varbinary`; Is Nullable checked; Length `-1`; System Data Type `varbinary`.
   - Toolbar **Save: disabled** → clean.
   - No dialog.
2. **Close 1 of 1 (child)**: clicked the tab's own `Close Panel Sql Columns` control (`f1e101`), from the fresh snapshot above. Snapshot `t5-snapshot-02-after-child-close.md`, screenshot `t5-03-after-child-close.png`.
   - Result: no unsaved-changes prompt; no dialog. Tab list now `FX_Items` and `Sql Tables`. The Sql Tables tab became selected automatically; Save disabled; status `&Columns... (SQL Tables 1 of 1)`.
   - Child absent from the tab list: **observed**.

## 3. Parent Sql Tables: verify, then one close

- Parent state before close (from `t5-snapshot-02`): Save disabled; FX_Items / dbo (`1 of 1`); Update Current Table disabled; constraints present. Clean.
- **Close 1 of 1 (parent)**: clicked `Close Panel Sql Tables` (`f1e98`) from the fresh snapshot. Snapshot `t5-snapshot-03-after-parent-close.md`, screenshot `t5-04-after-parent-close.png`.
   - Result: no unsaved-changes prompt; no dialog. Tab list now only `FX_Items` (single tab; the runtime FX_Items).
   - **Important observation:** after the parent close, the platform displayed the inherited FX_Items runtime Form (the only remaining tab; `favoriteContext=FX_Items`; status `FX_Refresh (Object 1 of 3)`; dumbbell current; Save disabled; value box `45 pound iron`). I did **not** click, select, or change anything in that runtime Form. Its display resulted from the automatic tab selection after the close. Recorded as an observed platform behaviour.
   - Sql Tables absent from the tab list: **observed**.

Closes counted separately: **child Sql Columns 1; parent Sql Tables 1.**

## 4. Reopen SQL Tables (exactly once, native route)

1. Toolbar **Open** (`f1e25`, fresh ref from `t5-snapshot-03`), one click. Snapshot `t5-snapshot-04-select-form-open.md`.
   - Result: Select Form dialog open; Filter textbox pre-populated `SqlTables`; grid shows `Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey`.
   - Screenshot `t5-05-select-form-dialog-open.png`.
2. Activated the `Sql Tables` / `SqlTables` row (`f1e1515`, not the constraint row), one click. Snapshot `t5-snapshot-05-select-form-row-selected.md`: row active (`gridcell "Sql Tables" [active]`).
3. **OK** (`f1e1550`), one click. Page context changed to `favoriteContext=SqlTables`.

Native SQL Tables reopen count: **1**.

## 5. Immediate capture and opening prompt (verbatim)

- Immediate snapshot `t5-snapshot-06-reopen-immediate.md`; screenshot `t5-06-reopen-immediate.png`.
- Tab `Sql Tables` selected (heading `Sql Tables`, `Close Panel Sql Tables`).
- Opening prompt: **alertdialog "Sql Tables"**, warning icon, text verbatim:
  > "Please be very careful using these forms. If you delete a column or a table you will lose data. You need to have a thorough understanding of your database to use these forms."
- Responses offered: **OK** only.
- Match: the text is identical to the caution captured and dismissed in T1 (`evidence/EXP-059/t1-snapshot-05-sqltables-opening-immediate.md`, `t1-02-sqltables-opening-immediate.png`) and recorded as informational in EXP-049 T17 and EXP-040 T12. It offers no save, delete, or conversion choice, so it authorizes no change.
- Disposition: **dismissed with OK once** (`f1e1692`). Snapshot `t5-snapshot-07-settled-after-caution-ok.md`; screenshot `t5-07-settled-after-caution-ok.png`.

## 6. Settled state after the caution (AC-5 reopen evidence)

- No dialog. Save **disabled**.
- Active tab `Sql Tables` (heading present; `Close Panel Sql Tables`). Tab list: `FX_Items` (inherited runtime) and `Sql Tables`.
- Mode: `Filter in Place` status with the funnel icon beside the heading (as in T1 after the caution).
- Grid: one blank placeholder row (Table Name, Schema, Multi-Site empty). **No record loaded** — expected, since I did not filter. Attributes Schema/Table Name empty. Constraints empty.
- Schema combobox shows focus (form default); nothing was typed into it.
- Sql Columns: **not reopened** (correct; reserved for AC-6).
- FX_Items: **not filtered**; inherited runtime Form not touched.

## 7. Action audit (T5, cumulative)

| Category | Count |
|---|---|
| Tab lists | 1 |
| Tab selects (browser tab, index 1) | 1 |
| Child Sql Columns view-only tab selection (click) | 1 |
| **Child Sql Columns close** | **1** (clean; no prompt) |
| **Parent Sql Tables close** | **1** (clean; no prompt) |
| **Native SQL Tables reopen (Open → row → OK)** | **1** |
| Caution alertdialog OK | 1 (informational; verbatim text matched T1) |
| Toolbar Open clicks | 1 |
| Select Form row activations | 1 |
| Select Form OK clicks | 1 |
| Save | **0** |
| Columns > New | 0 |
| Update Current Table / constraint actions | 0 |
| Typed entries | 0 |
| Filter in Place / F4 / FX_Items query | 0 |
| Sql Columns reopen | 0 |
| FX_Items runtime interaction | 0 (display only, after parent close; not acted on) |
| Browser refresh / navigation by URL / authentication | 0 / 0 / 0 |
| Browser evaluate / run-code | 0 |
| Failed actions | 0 |
| Ref-not-found errors | 0 |
| Timeouts | 0 |
| Fresh-snapshot recovery used | 0 of 1 |
| Corrected inspection used | 0 of 1 |
| Snapshots | 8 (`t5-snapshot-00` … `-07`) |
| Screenshots | 7 (`t5-01` … `t5-07`) |
| Waits / finds | 0 / 0 |

Counted user-visible close actions: **child 1, parent 1** (separately). Reopen: **1**. Save: **0**.

## 8. Acceptance (T5 scope)

- **AC-5: PASSED (observed, UI level).**
  - Clean child Sql Columns tab closed exactly once; no unsaved-changes prompt (`t5-02`, `t5-03`).
  - Clean parent Sql Tables tab closed exactly once; no unsaved-changes prompt (`t5-04`).
  - SQL Tables reopened exactly once via the native Open > Select Form route (`t5-05`, `t5-06`).
  - Reopened heading `Sql Tables` and settled state with Save disabled and no outstanding dialog (`t5-07`).
- AC-1 through AC-4 carried (T1–T4).
- AC-6 to AC-9: not started (out of T5 scope).

## 9. Limitations and open items

1. The two closes and the reopen are UI-level; they do not prove server-side persistence. Persistence is the AC-6 check (recovery by refilter), which was not started.
2. After the parent close, the platform displayed the inherited FX_Items runtime. This is a platform tab-selection consequence, not an action by the worker. The inherited runtime remains open in the tab list; the brief's FX_Items opening (AC-7) will need to handle this per the brief (one ordinary close before the single opening).
3. The reopened SQL Tables shows an empty placeholder row (no record loaded). This is the state before a Filter in Place query, which AC-6 will run.
4. Console error count: 1 (the 401 from the portal security-refresh resource, present since T1). Not investigated.
5. Repository confinement remains subject to operator git review (no shell).

## 10. Files written by this worker in T5

- `evidence/EXP-059/T5-close-reopen-sql-tables-report.md` (this report)
- `evidence/EXP-059/t5-snapshot-00-start.md` … `t5-snapshot-07-settled-after-caution-ok.md` (8 files)
- `evidence/EXP-059/t5-01-start-state.png` … `t5-07-settled-after-caution-ok.png` (7 files)
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (updated: T5 section and status)

Tool-generated captures under `evidence/playwright/` are not worker files.

## 11. Next permitted step

AC-6 (refilter `dbo.FX_Items` in the reopened SQL Tables and compare the recovered inventory field by field with the T1 baseline, including reopening Sql Columns) is reserved and **not** authorized by T5. Before that, the coordinator should decide how the inherited FX_Items runtime tab is handled for AC-7 (the brief permits one ordinary close before the single read-only opening).
