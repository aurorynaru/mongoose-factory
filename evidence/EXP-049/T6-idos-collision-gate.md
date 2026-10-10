# EXP-049 — T6 IDOs collision gate (FX_Items)

Run: R-20261011-020822-9Eej, cycle 6, task T6 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
Scope: IDO portion of AC-2 only. Two Filter-in-Place (FiP) queries on the IDO Name criterion in the existing IDOs runtime Form: one positive control and one target. No Sql Tables change, no Designer change, no Save, New, Delete, Refresh, checkout or check-in, no wizard, no close, reopen, refresh or navigation other than tab selection, no browser JavaScript, no direct SQL, no preference change, no screenshot retry.

## Inputs read first
- `evidence/EXP-049/T5-sqltables-collision-gate.md` (SQL portion passed; overall AC-2 unresolved pending IDO portion).
- T1 IDOs captures (`T1-09`, `T1-11`) were read in T2. Not re-read here, since they are already in the record: T1-09 shows the FX_HelloWorld01 positive control (project FX_HelloWorldProject01, alias fxhw); T1-11 is an earlier FX_Items query that was ambiguous (empty grid, no visible criterion).

## Pre-query state (observed)
- Read-only `browser_tabs list` at start: **tab 0 current** (Designer, `MGForm=IdoPropertyClasses`). This is the third occurrence of the tab-0 change (after T4 and T5). Cause still unknown.
- `browser_tabs select index=1` (navigation only): tab 1 current. Page at this point: Sql Tables runtime tab active, with the T5 retained FiP criterion and the blank placeholder row untouched.
- Fresh `browser_snapshot` (returned inline): Save `[disabled]`; no dialog, alert, or authentication element; Sql Tables tab active; Sql Tables placeholder row untouched.
- Selected the IDOs runtime tab with one click on its tab control (`f1e96`, "IDOs runtime tab (select tab only)"). Tool-reported page URL changed to `favoriteContext=IdoCollections`. Post-selection snapshot saved by the tool as `evidence\playwright\page-2026-10-10T18-28-19-642Z.yml` and read.
- IDOs state after selection: IDOs tab `[active] [selected]`; **Save `[disabled]`**; toolbar New `[disabled]`; no dialog; IDO grid empty; IDO Name detail blank; no row marker. No unsaved-change indication.
- Preflight judgement: clean enough to proceed. No Save-enabled state, no dialog, no unexpected prompt.

## Retained criterion before the positive control
- The first FiP operation (`browser_click` on Filter in Place, `f1e38`) opened the IDOs criteria row. The IDO Name criteria cell and detail field already held **`FX_Items`**, with the grid showing a row with a row number and an empty Description, Locked By, Revision Date, and Revision Num. This is the criterion retained from T1, not an IDO record. Revision Date and Revision Num are the fields a real IDO would populate; they were empty.
- The retained criterion was replaced by typing `FX_HelloWorld01` into the IDO Name criteria textbox (accessibility `textbox "IDO Name:"`, `f1e325`). I did not use Control+A this time, because `browser_type` fill replaces the field's value.

## Query 1 — FIRST positive control: `FX_HelloWorld01`
- Criterion entered into the IDO Name criteria textbox (the actual FiP criterion, not an insertion editor). Committed with Tab. `find` "FX_HelloWorld01" confirmed both the criteria row and the detail field showed the value.
- **Pre-F4 screenshot:** `evidence/EXP-049/T6-01-idos-positive-control-criterion-FX_HelloWorld01-before-F4.png`. Re-read in T7: shows IDO Name `FX_HelloWorld01` in the detail field and a grid echo row `FX_HelloWorld01` with row arrow and empty checkbox, but blank Project Name, Revision Num and Revision Date (the criteria echo, not a record). Save greyed; status `Filter in Place`.
- F4 pressed once; wait 2 s; settled snapshot saved as `evidence\playwright\page-2026-10-10T18-28-50-277Z.yml` and read.
- Settled snapshot: one grid row `FX_HelloWorld01 | (blank) | (blank) | 10/10/2026 | 2`; row-indicator grid shows row `1`; detail IDO Name `FX_HelloWorld01`; Project Name combobox `FX_HelloWorldProject01`; Label String ID `oFX_HelloWorld01`; Revision Num `2`; Revision Date `10/10/2026`; Save disabled.
- **Post-F4 screenshot:** `evidence/EXP-049/T6-02-idos-positive-control-FX_HelloWorld01-after-F4-settled.png`. Read in this step. Shows: IDO Name `FX_HelloWorld01` with row arrow `1`; Project Name `FX_HelloWorldProject01`; Label String ID `oFX_HelloWorld01`; Caption `oFX_HelloWorld01`; Revision Num `2`; Revision Date `10/10/2026`; Access As `G6R`; Locked By blank; Check Out enabled and Undo Check Out greyed; Tables sub-grid with one row `FX_HelloWorld01 | fxhw | Primary Base | Inner`; status `Extends (IDOs 1 of 1)`; toolbar Save greyed.
- **Result: positive control PASSED.** One existing IDO record with the expected project and alias, with a row marker.

## Query 2 — TARGET: `FX_Items`
- Fresh FiP operation: `browser_click` on Filter in Place (`f1e38`) again. The retained `FX_HelloWorld01` criterion was replaced by typing `FX_Items` into the same IDO Name criteria textbox (`f1e325`). Committed with Tab. `find` "FX_Items" confirmed both the criteria row and the detail field showed the value.
- **Pre-F4 screenshot:** `evidence/EXP-049/T6-03-idos-target-criterion-FX_Items-before-F4.png`. Read in this step. Shows: IDOs tab with the filter icon in the tab header; IDO Name criteria `FX_Items`; the grid shows a criteria row `1 | FX_Items` with a row arrow and an empty checkbox, and its Description, Locked By, Revision Date, and Revision Num cells are blank; the detail fields Project Name, Description, Label String ID, Revision Num, Revision Date, and Locked By are blank; status `Filter in Place`; Save greyed. This is the criteria-echo row, not a record.
- F4 pressed once; wait 2 s; settled snapshot saved as `evidence\playwright\page-2026-10-10T18-29-09-646Z.yml` and read.
- Settled snapshot: IDO grid body **empty** (no row); row-indicator grid empty (no row `1`); IDO Name detail textbox blank; Save disabled; toolbar New `[disabled]`; toolbar Delete enabled in the accessibility tree; New IDO enabled.
- **Post-F4 screenshot:** `evidence/EXP-049/T6-04-idos-target-FX_Items-after-F4-settled.png`. Read in this step. Shows: IDOs tab active (no filter icon on the tab header after F4); IDO grid body empty, no rows, no row marker; IDO Name, Project Name, Description, Label String ID, Caption, Revision Num, Revision Date, Locked By, and Access As all blank; Check Out and Undo Check Out greyed; Referenced Property Classes sub-tab active with an empty Tables grid; status `Filter in Place`; Save greyed.
- **Result: no FX_Items IDO record.** The criterion `FX_Items` settled with zero matching rows.

## Comparison (actual visible evidence)

| Visible element | Positive control (`FX_HelloWorld01`) | Target (`FX_Items`) |
| --- | --- | --- |
| IDO grid rows | 1 row, row arrow, row number `1` | 0 rows, no row number, no marker |
| IDO Name (grid) | `FX_HelloWorld01` | None |
| Project Name | `FX_HelloWorldProject01` | Blank |
| Revision Num / Date | `2` / `10/10/2026` | Blank |
| Label String ID | `oFX_HelloWorld01` | Blank |
| Access As | `G6R` | Blank |
| Check Out / Undo Check Out | Check Out enabled, Undo greyed | Both greyed (no record selected) |
| Tables sub-grid | 1 row: `FX_HelloWorld01`, alias `fxhw`, Primary Base, Inner | Empty |
| Save | Greyed | Greyed |
| Status | `Extends (IDOs 1 of 1)` | `Filter in Place` |

The pre-F4 criteria row for `FX_Items` looked like a row (row arrow, `1`, checkbox), but its Revision and Project fields were blank. After F4 that row disappeared entirely, which distinguishes the criteria echo from a record. The positive control's record row carries the same row number and arrow, but with populated Revision and Project values.

## Action counts (this task)
- Browser tab operations: `tabs list` x2 (read), `tabs select` x1 (tab 1; navigation only), one click on the IDOs runtime tab control (`f1e96`; tab selection only).
- Filter in Place opens: **2** (one per query).
- Criterion entries: **2** (`FX_HelloWorld01`, then `FX_Items`), each by `browser_type` fill into the IDO Name criteria textbox (`f1e325`). Control+A: **0**.
- Tab (commit criterion): **2**.
- F4 query runs: **2** (one per query).
- Wait for settle: **2** (2 s each).
- Screenshots: **4** (T6-01 to T6-04). No screenshot was retried.
- Accessibility snapshots (tool-saved and read): fresh tab 1 snapshot (inline), post-tab-select snapshot `...18-28-19-642Z.yml`, FiP-open snapshot `...18-28-25-167Z.yml`, positive-control settled `...18-28-50-277Z.yml`, FiP-target-open `...18-29-09-646Z.yml`. Finds: 4 (read-only).
- Save: **0**. New: **0**. Delete: **0**. Refresh: **0**. Check In / Check Out / Undo Check Out: **0**. Close: **0**. Reopen: **0**. Wizard: **0**. Designer change: **0**. Direct SQL / browser JavaScript: **0** (the tool logs show generated locator calls only).
- Sql Tables: **0** interactions (the retained criterion and the blank placeholder were left untouched).

## Distinct queries
1. Positive control: IDO Name criterion `FX_HelloWorld01` (FiP operation 1).
2. Target: IDO Name criterion `FX_Items` (FiP operation 2, fresh).

## Acceptance-check status
- **AC-2, IDO portion (zero existing FX_Items IDO records):**
  - Visible exact-name criterion `FX_Items` confirmed before F4 (T6-03; `find` confirmed criteria row and detail).
  - Settled result after F4 (T6-04): zero rows; no placeholder row with a marker; detail blank; Save disabled.
  - Working positive control in the same field and Form (T6-01, T6-02): `FX_HelloWorld01` returned as one existing record with project `FX_HelloWorldProject01`, label, revision values, and alias `fxhw` in the Tables sub-grid.
  - Placeholder versus record distinction: the record row has a populated revision and project; the target produced no row. The pre-F4 criteria echo row had blank revision and project fields and disappeared after F4.
  - **Recommendation: PASSED for the IDO portion, same-session UI-level only.** No IDO named `FX_Items` matched the IDO Name criterion. The FiP criterion behaviour (starts-with or contains) is not established by this step, so the absence is established only for the name as the criterion was applied.
- **AC-2, overall:** with the SQL portion passed in T5 and the IDO portion passed here, both collision gates have passed in the same session. The coordinator still decides whether to create the experiment record and proceed; this task does not authorize creation.

## Evidence limitations
- Same-session UI observation. Not an independent database query, not cross-session, not cache-evicted.
- The alias `fxhw` and the Primary Base table row are visible only in the T6-02 screenshot (Tables sub-grid); the accessibility snapshot for that sub-grid was not read here.
- The pre-F4 criteria-echo row has a row arrow and row number like a record; its distinction rests on the blank Revision and Project fields and on its disappearance after F4.
- The Delete toolbar button appears enabled in the accessibility tree after the target F4 (it was disabled after the positive control). Delete was not pressed. This state is noted but not investigated.
- The IDO Name criterion's match mode (exact or contains) is not stated by the UI. The absence result is for the criterion as applied, not a proven exact-match query.
- The current tab was tab 0 at task start; cause unknown (third occurrence).
- Focus after each F4 moved to the `Extends` combobox (`[active]`). Nothing was typed into it.

## Tool-saved snapshot files (written by the browser tool, not the worker; read in this task)
- `evidence\playwright\page-2026-10-10T18-28-19-642Z.yml` (IDOs tab selected; state before FiP)
- `evidence\playwright\page-2026-10-10T18-28-25-167Z.yml` (FiP open; retained `FX_Items` criterion row)
- `evidence\playwright\page-2026-10-10T18-28-50-277Z.yml` (positive control settled)
- `evidence\playwright\page-2026-10-10T18-29-09-646Z.yml` (target settled)
- Console logs reported by tab selects: `evidence\playwright\console-2026-10-10T18-28-14-033Z.log`

## Files written in this task
- `evidence/EXP-049/T6-01-idos-positive-control-criterion-FX_HelloWorld01-before-F4.png`
- `evidence/EXP-049/T6-02-idos-positive-control-FX_HelloWorld01-after-F4-settled.png`
- `evidence/EXP-049/T6-03-idos-target-criterion-FX_Items-before-F4.png`
- `evidence/EXP-049/T6-04-idos-target-FX_Items-after-F4-settled.png`
- `evidence/EXP-049/T6-idos-collision-gate.md` (this file)
- No other repository file was written. The EXP-049 experiment record was not created, per instruction.

## Stable end state
- IDOs tab active; Save greyed; no dialog open. The target query is settled with zero rows and blank detail fields. Focus is on the `Extends` combobox, with nothing typed. The Sql Tables tab's retained criterion and placeholder row were not touched.
