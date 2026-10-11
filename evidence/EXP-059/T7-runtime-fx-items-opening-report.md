# EXP-059 — T7 AC-7: inherited FX_Items clean close, single fresh FX_Items runtime opening, three-record verification

Run `R-20261011-203230-bdYw`, cycle 7, task T7. Worker session `fbdff0e6-06cf-4a86-8990-f91c3e04e932`; task_message_id `3602a144-d126-4927-9d7e-4296199642ac`. Date 2026-10-11. Classification: **observed only**.

**Outcome: AC-7 PASSED (observed, UI level).** The inherited clean FX_Items runtime tab was closed once; the FX_Items runtime was opened once through Open > Select Form, with no duplicate tab. Immediate and settled captures show no opening-time dialog. Three records are present with the required values, and Save is disabled. Sql Tables and Sql Columns were left open and were not closed or reopened. No FX_Refresh activation, record edit, binary entry, Save, New, Delete, metadata, or SQL operation was performed.

## 1. Starting state (fresh, read-only)

- Tab list (1) → tab 1 (Web Client) selected (1). Snapshot `t7-snapshot-00-start.md`, screenshot `t7-01-start-state.png`.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Form tabs: `FX_Items` (inherited runtime), `Sql Tables`, `Sql Columns` (selected; `SQL Columns 12 of 12`, row 12 FX_Picture: varbinary, Length -1, Is Nullable checked, Column Id 13).
- Save disabled. No dialog.

## 2. Inherited FX_Items tab: select, verify clean, one close

1. Selected the `FX_Items` tab by its heading (`f1e94`), one click. Tab became active (`favoriteContext=FX_Items`). Snapshot `t7-snapshot-01-fx-items-tab-selected-pre-close.md`, screenshot `t7-02-fx-items-tab-selected-pre-close.png`.
   - Pre-close state: Save **disabled** (clean); no dialog; three records (dumbbell, eggs, guitar); current record dumbbell; status `FX_Refresh (Object 1 of 3)`; the unnamed value box beside FX_Refresh shows `45 pound iron` (inherited state, as in EXP-058 T9/T10). FX_Refresh was **not** clicked.
2. **Close 1 of 1:** clicked `Close Panel FX_Items` (`f1e95`), its own control. Snapshot `t7-snapshot-02-after-fx-items-close.md`, screenshot `t7-03-after-fx-items-close.png`.
   - Result: **no unsaved-changes prompt; no dialog.** Tab list now `Sql Tables` and `Sql Columns` (selected automatically). `FX_Items` **absent** from the tab list. Save disabled. Status `SQL Columns 12 of 12`.
   - Proof of absence: the FX_Items tab heading is absent from the tablist in `t7-snapshot-02`.

## 3. Single fresh FX_Items runtime opening

1. Toolbar **Open** (`f1e25`), one click. Snapshot `t7-snapshot-03-select-form-open.md`.
   - Select Form dialog open; filter pre-filled `SqlTables` (retained from T5). Dialog grid still showed `Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey`.
2. Changed the filter text to `FX_Items` (one typed entry, `f1e1649`). Snapshot `t7-snapshot-04-select-form-filter-typed.md`: textbox reads `FX_Items`, but the grid had not re-filtered (still SqlTables rows).
3. Pressed **End** once in the focused filter box (key press 1), as in EXP-059 T1. Snapshot `t7-snapshot-05-select-form-after-end.md`: still SqlTables rows.
4. Waited 2 s (wait 1). Read-only `find` for `FX_Items`: the dialog grid now contained **one** row, `gridcell "FX_Items" [ref=f1e1677]` / `gridcell "FX_Items" [ref=f1e1679]`. (Other `FX_Items` matches in the find output belonged to the hidden Sql Columns tab and the runtime grid; none was a second dialog row.) The refresh completed after the settle wait; the End press alone was not sufficient in this instance (T1 had refreshed on End).
5. Fresh targeted snapshot of the dialog `t7-snapshot-06-select-form-fx-items-row.md`: exactly one row, Caption `FX_Items`, Name `FX_Items`. No similarly named Form listed.
6. Clicked the row (`f1e1677`), one click. Snapshot `t7-snapshot-07-select-form-row-active.md`: `gridcell "FX_Items" [active]`.
7. **OK** (`f1e1668`), one click. Page context changed to `favoriteContext=FX_Items`.

Native runtime opening count: **1**. Tab inventory after opening: `Sql Tables`, `Sql Columns`, `FX_Items` (one FX_Items tab; no duplicate).

## 4. Immediate opening state (opening-prompt audit)

- Snapshot `t7-snapshot-08-runtime-immediate-after-open.md`; screenshot `t7-04-runtime-immediate-after-open.png`.
- Tab `FX_Items` selected (heading `FX_Items`, `Close Panel FX_Items`); one FX_Items tab.
- **No alertdialog, no Hello World text, no session challenge.**
- Save **disabled**.
- Status `Description (Object 1 of 3)`.
- Description textbox has the Form's default focus with its text highlighted. Nothing was typed into it.
- Unnamed value box beside FX_Refresh: **empty** (observed difference from the inherited instance, which showed `45 pound iron`). Its identity is inferred by position (no accessible name), as recorded in EXP-058.

## 5. Settled observation (after a 4 s ordinary wait)

- Snapshot `t7-snapshot-09-runtime-settled.md`; screenshot `t7-05-runtime-settled.png`.
- Still **no dialog and no Hello World prompt**. Save disabled. Status `Description (Object 1 of 3)`. Same three records and values.
- Observation window: immediate capture plus a 4 s settled capture. No prompt in either.

## 6. Three-record verification (native grid readback, plus current-record detail)

Source: `t7-snapshot-09-runtime-settled.md` grid rows (accessibility) and the detail pane for the current record.

| Row | Item | Description | Cost | Unit of Measure | Required (brief) | Match |
|---|---|---|---|---|---|---|
| 1 | dumbbell | 45 pound iron | 45.00 | EA | dumbbell / 45 pound iron / 45.00 / EA | PASS |
| 2 | eggs | cage free | 6.99 | DZ | eggs / cage free / 6.99 / DZ | PASS |
| 3 | guitar | natural acoustic | 129.99 | EA | guitar / natural acoustic / 129.99 / EA | PASS |

- Detail pane (current row 1 dumbbell): Item `dumbbell` (greyed key), Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`.
- Display formatting vs underlying: Cost is displayed with two decimals (`45.00`, `6.99`, `129.99`). The brief's values use the same display formatting, so the comparison is string-equal on the displayed form. The underlying stored decimal was not inspected; no change to any value was detected.
- Not read as separate detail records: eggs and guitar. Their values were read from the grid only (no row selection was made, to keep the current record unchanged). Limitation.
- Row count: three; no fourth row, no starred (new) row.

## 7. Save state and form cleanliness

- Toolbar Save: **disabled** (immediate and settled).
- No dialog in any captured state. No star/new row. No edit made.

## 8. Remaining tabs

- `Sql Tables` — open, clean (not touched in T7). Its current content: the FX_Items query row from T6 state (not re-read in T7).
- `Sql Columns` — open, clean, `SQL Columns 12 of 12` (not touched in T7).
- `FX_Items` — open, runtime, clean, Object 1 of 3 (this T7 opening).

## 9. Action audit (T7, cumulative)

| Category | Count | Detail |
|---|---|---|
| Tab lists | 1 | before first select |
| Tab selects (browser tab 1) | 1 | Web Client |
| Form-tab selection (FX_Items heading) | 1 | view navigation before close |
| **Inherited FX_Items close** | **1** | `Close Panel FX_Items`; no prompt |
| **Native FX_Items runtime opening** | **1** | Open → Select Form row → OK |
| Toolbar Open clicks | 1 | |
| Select Form row activations | 1 | `FX_Items` / `FX_Items` |
| Select Form OK clicks | 1 | |
| Select Form filter typed | 1 | `FX_Items` (replaced prefilled `SqlTables`) |
| End key presses | 1 | did not by itself refresh the list; list refreshed after the settle wait |
| Waits | 2 | 2 s (list refresh), 4 s (settled observation) |
| Read-only find | 1 | `FX_Items` in the accessibility tree |
| Snapshots | 10 | `t7-snapshot-00` … `-09` |
| Screenshots | 5 | `t7-01` … `t7-05` |
| Dialogs opened / answered | 1 / 1 | Select Form (OK). No other dialog appeared. |
| Opening-time prompts | 0 | none in immediate or settled window |
| Save | **0** | not invoked |
| New / Delete | 0 / 0 | |
| Record edit / binary entry | 0 / 0 | |
| FX_Refresh activation | 0 | |
| Sql Tables or Sql Columns close or reopen | 0 / 0 | left open |
| IDO / Form / property-class / metadata / SQL / FormSync / cache operation | 0 | |
| Browser evaluate / run-code | 0 | none invoked |
| Failed actions | 1 (ineffective) | filter fill and End did not refresh the list immediately; resolved by settle wait (not an error) |
| Ref-not-found / timeouts | 0 / 0 | |
| Fresh-snapshot recovery used | 0 | the dialog snapshot `t7-snapshot-06` was a targeting read, not recovery |
| Corrected inspection used | 0 | |

Successful native actions: tab select 1, Form-tab select 1, FX_Items close 1, Open 1, filter typed 1, row click 1, OK 1, End 1 (ineffective but accepted), waits 2, find 1. Failed or ineffective: 1 (End). Dialog opened 1 (Select Form), answered 1 (OK).

## 10. Acceptance (T7 scope)

- **AC-7: PASSED (observed, UI level).**
  - Inherited clean instance handled without duplication: one close; FX_Items absent before opening (`t7-snapshot-02`).
  - Fresh opening once via the native route, Select Form filtered to exactly one `FX_Items` row (`t7-snapshot-06`); one FX_Items tab afterwards (`t7-snapshot-08`).
  - Three original records visible and unchanged with the required values (§6).
  - Save disabled (§7).
  - No opening-time Hello World prompt in the immediate capture (`t7-snapshot-08`, `t7-04`) or the settled capture after 4 s (`t7-snapshot-09`, `t7-05`).
- AC-1 to AC-6: carried from T1–T6.
- AC-8 and AC-9: not assessed here (out of T7 scope, per the brief).

## 11. Limitations

1. Observed in the same Web Client session at UI level. Not a database read, not a cross-session or server-restart check, and not an independent verification of the stored values (only the displayed values).
2. Eggs and guitar were read from the grid only; no detail-pane readback for those two rows.
3. The unnamed value box beside FX_Refresh is empty in the fresh instance (it held `45 pound iron` in the inherited instance). Its identity is inferred by position; no accessible name exists. The difference is recorded as observed, not interpreted.
4. Select Form list refresh required the settle wait after the filter change; End alone did not refresh it in this instance.
5. Console error count: 1 (the 401 from the portal security-refresh resource, present since T1); not investigated.
6. Repository confinement subject to operator git review (no shell).

## 12. Final state

- Active Form: `FX_Items` (runtime, fresh, selected). Save: **disabled**. Clean.
- Dialog: none. Listbox: none. Unsaved changes: none.
- Tabs: `Sql Tables` (open, clean); `Sql Columns` (open, clean); `FX_Items` (runtime, one instance, clean).

## 13. Files written by this worker in T7

- `evidence/EXP-059/T7-runtime-fx-items-opening-report.md` (this report)
- `evidence/EXP-059/t7-snapshot-00-start.md` … `t7-snapshot-09-runtime-settled.md` (10 files)
- `evidence/EXP-059/t7-01-start-state.png` … `t7-05-runtime-settled.png` (5 files)
- `experiments/EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md` (updated: T7 section and status)

Tool-generated captures under `evidence/playwright/` are not worker files.

## 14. Next permitted step

AC-8 and AC-9 (the cumulative audit and final acceptance report) are the remaining experiment steps. The brief for T7 says not to begin them here. Open items for the coordinator: whether to close the remaining Sql Tables and Sql Columns tabs (the brief does not require it in T7), and the repository confinement audit.
