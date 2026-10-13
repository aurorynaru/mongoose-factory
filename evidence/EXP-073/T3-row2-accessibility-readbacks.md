# EXP-073 T3 — Row two and two-row pre-Save accessibility readbacks (worker-transcribed)

Run: cycle 2, task T3. Date 2026-10-13. Web Client tab (tab 1) selected; Designer (tab 0) not interacted with. Stopped BEFORE toolbar Save. No close, no reopen, no gate rerun, no metadata change.
Transcribed from the browser's accessibility snapshots. Snapshot files named below are written by the Playwright MCP tool (`evidence/playwright/`), not by the worker.

## T3-S1 — Start state (fresh untargeted snapshot after tab 1 selection; inline)

Tab list before selection: tab 0 Designer (current); tab 1 Mongoose. Tab 1 selected (succeeded).

| Item | Readback |
| --- | --- |
| Form tab | `tab [selected] "FX_Orders"`; `Close Panel FX_Orders` |
| Grid row header | one row `gridcell "1"` |
| Grid data row | `row "1 1"`: `1` / `FX001` / `dumbbell` / `2` |
| Order Number textbox | `"1"` |
| Customer ID combobox | `FX001` |
| Item combobox | `dumbbell` |
| Count textbox | `"2"` |
| Save | `button "Save" [ref=f1e28]` enabled (dirty) |
| Status bar | `Count (Object 1 of 1)` (focus-field caption prefix; not changed) |
| Dialogs / banners | none |

Result: row one as left at the end of T2. The inherited state matched; no prompt; no expiry.

## T3-S2 — After ONE toolbar New (f1e31, one click). Snapshot file: `evidence/playwright/page-2026-10-13T09-21-22-818Z.yml` (tool-generated)

| Item | Readback |
| --- | --- |
| Grid row header | two rows: `gridcell "1"` (f1e219) and `gridcell "2"` (f1e224) |
| Grid data row 1 | `row "1 1"`-style row: `gridcell "1"` (f1e159), `gridcell "FX001"` (f1e161), `gridcell "dumbbell"` (f1e163), `gridcell "2"` (f1e165) |
| Grid data row 2 | `row "2 1"` (f1e229): `gridcell "2"` (f1e230) = Order Number; Customer ID cell (f1e232) blank; Item cell (f1e234) blank; `gridcell "1"` (f1e236) = Count |
| Order Number textbox (current row) | `textbox "Order Number:" [active] [ref=f1e176]: "2"` |
| Customer ID combobox (row two) | blank |
| Item combobox (row two) | blank |
| Count textbox (row two) | `"1"` (default, not edited) |
| Status bar | `Order Number (Object 2 of 2)` |
| Tooltip | `New` (tooltip of the toolbar button just pressed) |
| Dialogs / alerts / validation text | none |

**Displayed Order Numbers:** row one `1`; row two `2`. Distinct, nonblank, not duplicated. The worker did not type into or edit FX_OrderNumber.

## T3-S3 — Screenshot before the next action: `evidence/EXP-073/row2-after-new-before-selection.png`

Shows starred row headers `1` and `2` (row 2 current); Order Number `2` in the focused field; Customer ID and Item blank; Count `1`; status `Order Number (Object 2 of 2)`; Save coloured.

## T3-S4 — FX_CustomerID list (Open toggle f1e186, one click). Snapshot file: `page-2026-10-13T09-21-32-545Z.yml` (tool-generated)

Options: `FX001` (f1e244) and `FX002` (f1e247). Combobox `[expanded] [active]`.

## T3-S5 — FX002 option clicked (f1e247, one click). Snapshot file: `page-2026-10-13T09-21-36-557Z.yml` (tool-generated)

| Item | Readback |
| --- | --- |
| Customer ID combobox | `combobox "Customer ID:" [active] [ref=f1e185]: FX002`; list closed |
| Status bar | `Customer ID (Object 2 of 2)` |
| Order Number textbox | `"2"` (not edited) |
| Count textbox | `"1"` |

## T3-S6 — FX_Item list (Open toggle f1e196, one click). Snapshot file: `page-2026-10-13T09-21-40-283Z.yml` (tool-generated)

Options: `dumbbell` (f1e257), `eggs` (f1e260), `guitar` (f1e263). Combobox `[expanded] [active]`.

## T3-S7 — eggs option clicked (f1e260, one click). Snapshot file: `page-2026-10-13T09-21-44-171Z.yml` (tool-generated)

| Item | Readback |
| --- | --- |
| Item combobox | `combobox "Item:" [active] [ref=f1e195]: eggs`; list closed |
| Grid data row 2 | `gridcell "2"` (f1e230), `gridcell "FX002"` (f1e251), `gridcell "eggs"` (f1e266), `gridcell "1"` (f1e236) |
| Grid data row 1 | unchanged: `1` / `FX001` / `dumbbell` / `2` |
| Save | enabled (dirty; not invoked) |

## T3-S8 — ONE focus move (one Tab key press; no click). Snapshot inline (post-Tab)

| Item | Readback (settled) |
| --- | --- |
| Grid row 1 | `gridcell "1"` (f1e159), `gridcell "FX001"` (f1e161), `gridcell "dumbbell"` (f1e163), `gridcell "2"` (f1e165) |
| Grid row 2 | `gridcell "2"` (f1e230), `gridcell "FX002"` (f1e251), `gridcell "eggs"` (f1e266), `gridcell "1"` (f1e236) |
| Data rows | exactly two (no third row) |
| Order Number textbox (not edited) | `textbox "Order Number:" [ref=f1e176]: "2"` |
| Customer ID combobox | `FX002` |
| Item combobox | `eggs` |
| Count textbox | `textbox "Count:" [active] [ref=f1e205]: "1"` (focus is here; value not edited) |
| Save | `button "Save" [ref=f1e28]` — enabled; **not invoked** |
| New | not invoked again |
| Status bar | `Count (Object 2 of 2)` (focus-field caption prefix) |
| Dialogs / alerts / validation text | none |

Note: the post-Tab tree shows row-one Order Number as `1` in the grid and row-two as `2`; the row-header stars are not in the tree.

## T3-S9 — Pre-Save two-row screenshot: `evidence/EXP-073/two-rows-before-save-settled.png`

Shows starred row headers `1` and `2`; Order Number textbox `2`; Customer ID `FX002`; Item `eggs`; Count `1` (focused, value selected); status `Count (Object 2 of 2)`; Save icon coloured. **The grid's data cells (Order Number, Customer ID, Item, Count columns) are clipped at the left edge of the image.** The grid values above come from the accessibility readback T3-S8 and are stated as such.

## Result of T3 (observed, displayed; not saved)

| Row | Displayed Order Number | Customer ID | Item | Count | Source of value |
| --- | --- | --- | --- | --- | --- |
| 1 | `1` | `FX001` | `dumbbell` | `2` | Displayed in the add-mode row (not typed); FX001 and dumbbell from native lists; Count typed in T2 |
| 2 | `2` | `FX002` | `eggs` | `1` (default; not edited) | Displayed on the row created by one New (not typed); FX002 and eggs from native lists |

No save has occurred. The displayed numbers are client-side values; no database value, saved number or AUTONUMBER() source is claimed.
