# EXP-135 T12 — Runtime close, reopen, and 18-value readback of FX-ITEM-001 to FX-ITEM-003

Run `R-20261026-051803-zOUZ` · cycle 15 · task T12 · worker session `e66eac16-9efa-4e9d-acf5-dff12f4b7176` · task_message_id `494b66ae-643b-4f57-b48e-4635f061ab52` · date 2026-10-26.
Scope (operator bounded instruction): runtime close once, reopen once, fresh collection retrieval, read-only row selection, readback of all 18 business-field values. No New, no edit, no Save, no insert, no Designer action, no vendor or non-FX_ Form, no Portal reload or navigation, no second close/reopen, no browser JavaScript (worker-authored).

## Result

**Pass at the Web Client UI level, one session.** After one runtime close and one Select Form reopen of exactly `FX_InventoryEditor`, one Refresh returned exactly three unstarred committed rows with the distinct keys `FX-ITEM-001`, `FX-ITEM-002`, and `FX-ITEM-003`. All 18 business-field values match the brief exactly. The header shows `(Object 1 of 3)` after the Refresh (the UI collection count, not a database count). Save is disabled. The runtime Form is left open, clean, with row 3 selected. No dialog appeared.

This is a same-session readback after an ordinary runtime close and reopen. It is **not** database-level verification, **not** cross-session durability, and **not** replay verification.

## Pre-close gate (passed)

| Check | Observed | Evidence |
|---|---|---|
| Tab selection | Tab list (read-only) first, then tab 3 selected (succeeded) | tool results |
| Account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t12-01`; gate snapshot |
| Runtime identity | Tab heading `FX_InventoryEditor`; tab URL `favoriteContext=FX_InventoryEditor` | `t12-01`; gate snapshot |
| Save state | Toolbar Save `[disabled]` | gate snapshot; `t12-01` |
| Dialogs / unsaved prompts | None | gate snapshot (no dialog node) |
| Collection | `(Object 3 of 3)`; three unstarred rows (gridcell `1`, `2`, `3`); no starred add-mode placeholder; keys FX-ITEM-001 / -002 / -003 | gate snapshot; `t12-01` |
| Row 3 detail | `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003` (read-only, selected by T11) | gate snapshot; `t12-01` |

Gate result: **passed**. The checkpoint was captured before any close.

## Runtime close (once)

- Clicked the runtime Form tab's `Close Panel FX_InventoryEditor` control once (ref from the gate snapshot).
- No save or discard prompt appeared; no field was edited.
- Post-close snapshot `evidence/playwright/page-2026-10-25T22-13-36-074Z.yml`: the tab list no longer contains `FX_InventoryEditor`; the main area is empty; the record toolbar (Save, New, Delete, Refresh, FiP, Get More Rows, System Notes, Documents, Email, Export) is disabled; no dialog.
- Result: **runtime Form closed, clean.** Close count 1.

## Reopen (once, Select Form, exact name)

- Toolbar `Open` clicked once. Select Form dialog opened (snapshot `page-2026-10-25T22-13-46-247Z.yml` and a fresh inline snapshot).
- The dialog retained the filter `FX_InventoryEditor` (Name; Case Sensitive and Starts With unchecked) and listed **one** row: Caption `FX_InventoryEditor`, Name `FX_InventoryEditor`. The row was not marked selected, so the Name cell of that one row was clicked once to activate it (snapshot `page-2026-10-25T22-13-54-754Z.yml`, row `active`).
- `OK` clicked once (snapshot `page-2026-10-25T22-14-01-574Z.yml`). The dialog closed.
- Identity after reopen: tab heading `FX_InventoryEditor`; header account as above; `Save` disabled; `(Object 1 of 1)` with a single blank row (gridcell `1`) and blank detail inputs. This is the add-mode placeholder state before Refresh, as in T9 and T10. No screenshot was taken at this point, and this state is not counted as a committed row.
- Reopen count 1. Select Form opens in T12: 1. OK 1. Cancel 0.

## Fresh collection retrieval (one Refresh)

- Toolbar `Refresh` clicked once, unfiltered (snapshot `page-2026-10-25T22-14-10-637Z.yml`).
- Post-Refresh inline snapshot: **three** grid rows (gridcells `1`, `2`, `3`, none starred), each with six cells; header `(Object 1 of 3)`; `Save` disabled; no add-mode placeholder row; no dialog.
- Refresh count (T12) 1.

## 18-value readback

Values from the post-Refresh grid cells (accessibility tree) and the detail inputs for row 1 (same snapshot). Rows 2 and 3 detail were read from the row-selected snapshots `page-2026-10-25T22-14-26-500Z.yml` and `page-2026-10-25T22-14-35-069Z.yml`.

| Record | FX_Item | FX_Description | FX_Warehouse | FX_QuantityOnHand | FX_ReorderLevel | FX_Location | Expected match |
|---|---|---|---|---|---|---|---|
| 1 | FX-ITEM-001 | FX test widget | FX-WH-A | 120.00 | 20.00 | FX-LOC-01 | yes (6 of 6) |
| 2 | FX-ITEM-002 | FX test bracket | FX-WH-A | 8.00 | 10.00 | FX-LOC-02 | yes (6 of 6) |
| 3 | FX-ITEM-003 | FX test gasket | FX-WH-B | 0.00 | 5.00 | FX-LOC-03 | yes (6 of 6) |

- Row 1: grid cells in the post-Refresh snapshot and detail inputs `FX test widget` / `FX-LOC-01` / `120.00` / `20.00` / `FX-WH-A` / `FX-ITEM-001` (`evidence/EXP-135/t12-02`).
- Row 2: grid cells in the post-Refresh snapshot and detail inputs `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002` (`t12-03`; row 2 `active` and `selected`; `(Object 2 of 3)`).
- Row 3: grid cells in the post-Refresh snapshot and detail inputs `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003` (`t12-04`; row 3 `active` and `selected`; `(Object 3 of 3)`).
- Display formatting: the values appear as `120.00`, `8.00`, `0.00` etc., exactly as specified. No semantic reformatting was needed.
- Count of exact business-field values verified: **18 of 18** (6 properties × 3 records).

### Numeric comparisons (stated only, no logic claimed)

- FX-ITEM-002: QuantityOnHand `8.00` is **below** ReorderLevel `10.00`.
- FX-ITEM-003: QuantityOnHand `0.00` is **below** ReorderLevel `5.00`.
- FX-ITEM-001: `120.00` is not below `20.00` (informational).
- No dashboard status, color indicator, or business rule was observed or implemented. These are numeric comparisons of stored values only.

## Recorded counts (T12)

| Action | Count |
|---|---|
| Tab list / tab select (tab 3) | 1 / 1 |
| Runtime Form close (`Close Panel`) | **1** |
| Select Form open (`Open` toolbar) | 1 |
| Select Form row activation click (Name cell of the one matching row) | 1 |
| Select Form `OK` (runtime reopen) | **1** |
| Runtime Refresh | **1** |
| Row-indicator selections (read-only navigation) | 2 (rows 2 and 3) |
| Runtime New | **0** |
| Runtime Save | **0** |
| Field edits, deletes, commits | **0** |
| Runtime close / reopen (second occurrence) | **0** |
| Fresh `browser_snapshot` calls (planned reads, not recovery) | 4 |
| Auto-snapshots returned by clicks (saved under `evidence/playwright/`) | 7 |
| Screenshots | 4 (`t12-01` to `t12-04`) |
| `browser_find`, `browser_type`, `browser_press_key` | 0 |
| Worker-authored browser JavaScript | 0 (the "Ran Playwright code" lines are MCP tool wrapper output) |
| Designer action or Designer Save | 0 |
| Vendor or non-FX_ Form action | 0 |
| Finish, wizard, Portal navigation or reload, SQL, IDO, FormSync, unload, deployment | 0 |
| Dialogs (alert, confirm, beforeunload) | 0 observed |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Session-expiry recovery | 0 (no sign-in page; no Session Expired modal) |

## Evidence files (this task)

| File | Shows | Does not prove |
|---|---|---|
| `t12-01-pre-close-clean-three-rows-checkpoint.png` | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_InventoryEditor heading; Save greyed; three row indicators 1–3 (grid name column truncated); row 3 detail `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`; `(Object 3 of 3)`; no dialog | The hidden grid columns; the database count; the other two rows' values (these are in the accessibility snapshot, not this image) |
| `t12-02-reopened-refresh-three-rows-grid-overview.png` | After reopen and one Refresh: header account; FX_InventoryEditor heading; row indicators 1–3; row 1 detail `FX test widget` / `FX-LOC-01` / `120.00` / `20.00` / `FX-WH-A` / `FX-ITEM-001`; Save greyed; `(Object 1 of 3)` | Grid columns for rows 2 and 3 (hidden in GridLeft layout; see `t12-03`, `t12-04` and the snapshot); database state |
| `t12-03-reopened-row2-detail-fx-item-002.png` | Row 2 selected; detail `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002`; Save greyed; `(Object 2 of 3)` | Database state; cross-session durability |
| `t12-04-reopened-row3-detail-fx-item-003.png` | Row 3 selected; detail `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`; Save greyed; `(Object 3 of 3)` | Database state; cross-session durability |
| `evidence/playwright/page-2026-10-25T22-13-36-074Z.yml` | Post-close: no FX_InventoryEditor tab; empty main area; toolbar disabled | — |
| `evidence/playwright/page-2026-10-25T22-14-10-637Z.yml` | Post-Refresh tree (text only): three rows with six cells each | — |
| `evidence/playwright/page-2026-10-25T22-14-26-500Z.yml`, `…22-14-35-069Z.yml` | Row 2 and row 3 selected; detail text | — |

## Limitations

1. The readback is one Web Client session after an ordinary runtime close and reopen. It is not a database-level read, not cross-session durability, and not replay verification.
2. `(Object n of N)` and the 3-row collection are the UI's collection count, not a database count.
3. The GridLeft layout hides the right-hand grid columns. Rows 2 and 3 were read from the grid accessibility text and their row-selected detail inputs, not from a fully visible grid.
4. The reopen was not screenshot-captured before the Refresh; the pre-Refresh placeholder state (one blank row, `(Object 1 of 1)`) is recorded from the inline snapshot only.
5. The Select Form row was not marked selected by the filter; a single click on its Name cell was used to activate it before OK. The exact-name filter returned one row, so there was no ambiguity about which Form was opened (Caption and Name both `FX_InventoryEditor`).
6. The Web Client console showed 15 errors and 10 warnings throughout this task, the same counts as earlier tasks. They were not investigated and are not claimed to be related or unrelated.

## Knowledge state (T12)

| Finding | State |
|---|---|
| Runtime close then exact-name Select Form reopen recovered FX_InventoryEditor with three committed records | observed (one session, UI) |
| Three distinct committed keys FX-ITEM-001, -002, -003 after reopen and Refresh | observed (UI count; not database) |
| All 18 business-field values after reopen | observed (grid accessibility text and detail inputs, same session) |
| 8.00 below 10.00 (FX-ITEM-002); 0.00 below 5.00 (FX-ITEM-003) as stored values | observed (numeric comparison; no status logic claimed) |
| Database-level state; cross-session durability; replay | **unresolved** (not claimed; not in scope) |
