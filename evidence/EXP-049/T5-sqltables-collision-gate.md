# EXP-049 — T5 SQL Tables collision gate (dbo.FX_Items)

Run: R-20261011-020822-9Eej, cycle 5, task T5 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
Scope: SQL Tables portion of AC-2 only. Two Filter-in-Place (FiP) queries in the existing Sql Tables runtime Form, one positive control and one target. No IDO inspection, no direct SQL, no preferences change, no wizard, no Save, no New, no Delete, no Refresh, no Update Current Table, no Columns, no constraint action, no checkout or check-in, no close, reopen, refresh or navigation (other than tab selection), no Designer change, no screenshot retry.

## Inputs read first
- `evidence/EXP-049/T4-sqltables-state-checkpoint.md`. Reported the Sql Tables tab with one blank row, Save disabled, no dialog, and the row's insertion status unverified.

## Pre-query state (observed)
- Read-only `browser_tabs list` at start: **tab 0 current** (Designer, `MGForm=IdoPropertyClasses`). Tab 1 (Web Client) was not current. This repeats the tab change seen in T4; the cause is still unknown.
- `browser_tabs select index=1` (navigation only): tab 1 current.
- Fresh `browser_snapshot` of tab 1 (returned inline; no file saved): tab **Sql Tables `[active] [selected]`**; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; **Save `[disabled]`**; no dialog, alert, or authentication element; grid one blank row, Table Name and Schema empty; status `Table Name (SQL Tables 1 of 1)`; Columns, Update Current Table, New Constraint, Modify Constraint all disabled; constraint grid empty.
- Preflight judgement: clean enough to proceed. No Save-enabled state, no dialog, no unexpected prompt.

## Mid-task finding: retained criterion before the positive control
- The FiP click (operation 1) opened the criteria row and showed the Table Name criteria combobox already holding **`FX_Items`**. This was not typed by T5. It is the criterion retained from T1 (EXP-031/033-style retained filter behaviour). Save stayed disabled, and the criterion sat in the FiP criteria combobox, not in a data row.
- Before entering the positive control I pressed Control+A in that field to select the retained text, then replaced it (see action list). The retained `FX_Items` value was therefore overwritten before any query ran.

## Query 1 — FIRST positive control: `FX_HelloWorld01`
- Criterion entered into the FiP criteria combobox (the `Table Name` criteria field, not an insertion row). Committed with Tab.
- **Pre-F4 screenshot:** `evidence/EXP-049/T5-01-sqltables-positive-control-criterion-FX_HelloWorld01-before-F4.png`. Shows the Filter-in-Place criteria row with `FX_HelloWorld01` in the Table Name cell and the status bar `Filter in Place`. Save greyed.
- F4 pressed once; wait 2 s; settled snapshot saved as `evidence\playwright\page-2026-10-10T18-25-42-126Z.yml` and read.
- **Post-F4 screenshot:** `evidence/EXP-049/T5-02-sqltables-positive-control-FX_HelloWorld01-after-F4-settled.png`. Shows:
  - Grid row `1` with the normal row arrow (no blue star), Table Name `FX_HelloWorld01`, Schema `dbo`, Multi-Site unchecked.
  - Detail: Schema `dbo`, Table Name `FX_HelloWorld01`.
  - Columns... enabled; SQL Data Types... enabled; Edit Procedure... enabled; New Constraint... and Modify Constraint... enabled.
  - Constraint grid with two rows: `Primary Key | PK_FX_HelloWorld01 | Unique checked | Clustered checked | FX_Code` and `Index | IX_FX_HelloWorld01_RowPointer | Unique checked | Clustered unchecked | RowPointer`.
  - Save greyed. Status `Table Name (SQL Tables 1 of 1)`.
- **Result: positive control PASSED.** One existing table record returned by the Table Name FiP criterion, with schema and constraints visible.

## Query 2 — TARGET: `FX_Items`
- Fresh FiP operation (second click on Filter in Place). The retained `FX_HelloWorld01` criterion was replaced with `FX_Items` in the same criteria combobox. Committed with Tab.
- **Pre-F4 screenshot:** `evidence/EXP-049/T5-03-sqltables-target-criterion-FX_Items-before-F4.png`. Shows the Filter-in-Place criteria row with `FX_Items` in the Table Name cell, status bar `Filter in Place`, Save greyed. Schema combobox empty and focused.
- F4 pressed once; wait 2 s; settled snapshot saved as `evidence\playwright\page-2026-10-10T18-26-03-123Z.yml` and read.
- **Post-F4 screenshot:** `evidence/EXP-049/T5-04-sqltables-target-FX_Items-after-F4-settled.png`. Shows:
  - Grid row `1` with a **blue-star** marker, Table Name cell empty (editor focused, combobox empty), Schema empty, Multi-Site unchecked.
  - Detail: Schema combobox empty; Table Name combobox empty.
  - Columns... disabled; Update Current Table disabled; New Constraint... disabled; Modify Constraint... disabled.
  - Constraint grid header only, **no rows**.
  - Save greyed. Status `Table Name (SQL Tables 1 of 1)`.
- **Result: no `FX_Items` data row.** The only row is a blank blue-star insertion placeholder, with no Table Name, no schema, and no constraints. The criterion `FX_Items` no longer appears in the criteria row after F4, so the result settled.

## Comparison (actual visible evidence)

| Visible element | Positive control (`FX_HelloWorld01`) | Target (`FX_Items`) |
| --- | --- | --- |
| Row marker | Row arrow, no star | Blue star |
| Table Name cell | `FX_HelloWorld01` | Empty (editor focused, empty) |
| Schema | `dbo` | Empty |
| Columns... | Enabled | Disabled |
| Update Current Table | Disabled-looking (lighter) | Disabled |
| New / Modify Constraint | Enabled | Disabled |
| Constraint grid | 2 rows (PK, IX) | Header only |
| Save | Greyed | Greyed |
| Status | `Table Name (SQL Tables 1 of 1)` | `Table Name (SQL Tables 1 of 1)` |

The status text is identical in both queries, so `1 of 1` is not a record count here. The row marker, the Table Name and Schema values, and the constraint and dependent-button states are what distinguish the two results.

## Action counts (this task)
- Browser tab operations: `tabs list` x2 (read), `tabs select` x1 (tab 1; navigation only).
- Filter in Place opens: **2** (one per query).
- Criterion entries: **2** (`FX_HelloWorld01`, then `FX_Items`), each with `browser_type` fill into the FiP criteria combobox.
- Control+A (select existing criterion text before replacement): **1**.
- Tab (commit criterion): **2**.
- F4 query runs: **2** (one per query).
- Wait for settle: **2** (2 s each).
- Screenshots: **4** (T5-01 to T5-04). No screenshot was retried.
- Accessibility snapshots: 2 (fresh tab 1 snapshot and the FiP-open snapshot), plus 2 settled snapshots from F4 and 1 find per criterion check. Tool-saved snapshots are listed below.
- Save: **0**. New: **0**. Delete: **0**. Refresh: **0**. Update Current Table: **0**. Columns...: **0**. Constraint actions (New/Modify): **0**. Close: **0**. Reopen: **0**.
- Checkout / check-in: **0**. Wizard: **0**. Designer change: **0**. Direct SQL / browser JavaScript: **0** (the tool logs show generated locator calls only).

## Distinct queries
1. Positive control: Table Name criterion `FX_HelloWorld01` (FiP operation 1).
2. Target: Table Name criterion `FX_Items` (FiP operation 2, fresh).
- Both queries used the same native Sql Tables Form and the same criteria combobox.

## Acceptance-check status
- **AC-2, SQL portion (dbo.FX_Items zero records):**
  - Visible exact-name criterion `FX_Items` confirmed before F4 (T5-03).
  - Settled result after F4 (T5-04): no data row; blank blue-star insertion placeholder; dependent controls disabled; constraint grid empty.
  - Working positive control in the same field and Form (T5-01, T5-02): `FX_HelloWorld01` returned as one existing record with schema and constraints.
  - Placeholder versus record distinction: the record row has a row arrow, schema `dbo` and constraints. The target row has a blue star, empty fields and no constraints.
  - **Recommendation: PASSED for the SQL portion, same-session UI-level only.** No row named `FX_Items` appeared under the Table Name criterion, which did not filter by schema, so no `FX_Items` table exists in any schema, as seen in this UI.
- **AC-2, overall:** **still unresolved.** The IDO FX_Items collision gate is not part of T5 and has not been run. AC-2 requires both gates.

## Evidence limitations
- The blue-star marker is a visual cue. It is not in the accessibility tree, so the placeholder reading relies on the screenshot (T5-04) plus the empty fields and disabled controls.
- Same-session UI observation. Not an independent database query, not cross-session, not cache-evicted.
- After the target F4 the criteria combobox reports as focused in the blank insertion placeholder row (`combobox [active]`, empty). No text was typed into that editor. Keyboard focus remained there when the task ended.
- The Table Name criterion does not filter by schema. Absence means no table named `FX_Items` in any schema as visible in this Form; the schema of any future table is still to be verified after creation.
- Tab-state anomaly: tab 0 was current at task start, as at T4. The cause is still unknown.
- The post-F4 snapshot for the target does not expose the row's Table Name text as a cell value; the empty result is read from the screenshot and the detail combobox.

## Tool-saved snapshot files (written by the browser tool, not the worker; read in this task)
- `evidence\playwright\page-2026-10-10T18-25-18-650Z.yml` (after FiP operation 1, criterion row retained `FX_Items`)
- `evidence\playwright\page-2026-10-10T18-25-42-126Z.yml` (positive control settled)
- `evidence\playwright\page-2026-10-10T18-25-51-420Z.yml` (after FiP operation 2 open; not read in full)
- `evidence\playwright\page-2026-10-10T18-26-03-123Z.yml` (target settled)
- Console logs reported by tab selects: `evidence\playwright\console-2026-10-10T18-25-13-477Z.log`

## Files written in this task
- `evidence/EXP-049/T5-01-sqltables-positive-control-criterion-FX_HelloWorld01-before-F4.png`
- `evidence/EXP-049/T5-02-sqltables-positive-control-FX_HelloWorld01-after-F4-settled.png`
- `evidence/EXP-049/T5-03-sqltables-target-criterion-FX_Items-before-F4.png`
- `evidence/EXP-049/T5-04-sqltables-target-FX_Items-after-F4-settled.png`
- `evidence/EXP-049/T5-sqltables-collision-gate.md` (this file)
- No other repository file was written. The EXP-049 experiment record was not created, per instruction.

## Stable end state
- Sql Tables tab active; Save greyed; no dialog open. The Sql Tables tab header in T5-01 and T5-03 shows the Filter-in-Place icon; in T5-04 (after the target F4) that icon is no longer shown, so the settled result is an ordinary result view with the blank insertion placeholder row. Focus remains in that placeholder's Table Name editor (empty, nothing typed). No Save, discard, close or refresh was taken.
