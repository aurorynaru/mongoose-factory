# EXP-073 T2 — Row one accessibility readbacks (worker-transcribed)

Run: cycle 1, task T2. Date 2026-10-13. Web Client tab (tab 1) selected. Stopped BEFORE toolbar New and BEFORE toolbar Save. The Form was not closed.
Transcribed from the browser's accessibility snapshots. Snapshot files named below are written by the Playwright MCP tool (`evidence/playwright/`), not by the worker, except where the snapshot was returned inline.

## S1 — Start of T2 (untargeted snapshot; inline output was too large and was saved by the harness)

Note (disclosed): the tab list taken at the start of T2 showed tab 0 (Designer) as the current tab, and the first untargeted snapshot therefore returned the Designer page. The worker did not read or act on that content and did not interact with the Designer. The worker then selected tab 1 (Web Client) and took a second untargeted snapshot. The readings below come from the second snapshot only.

## S2 — Start state, after selecting tab 1 (inline snapshot)

| Item | Readback |
| --- | --- |
| Tab list | Tab 0 Designer (not selected); tab 1 Mongoose (`favoriteContext=FX_Orders`, current) |
| Form tab | `tab [selected] "FX_Orders"`; `Close Panel FX_Orders` |
| Toolbar | `Save [disabled]`; New enabled; FiP enabled |
| Grid (row header) | one row `gridcell "1"` |
| Grid data row | `row "1 1"`: Order Number `1`, Customer ID blank, Item blank, Count `1` |
| Order Number textbox | `"1"` |
| Customer ID combobox | blank |
| Item combobox | blank; `[active]` (focused) |
| Count textbox | `"1"` |
| Status bar | `Item (Object 1 of 1)` |
| Dialogs | none |

Result: the FX_Orders runtime with one starred add-mode row, Customer ID and Item blank, Save disabled, no dialog, no session expiry. Consistent with T1.

## S3 — Customer ID list opened (Open toggle f1e184, one click)

Snapshot file: `evidence/playwright/page-2026-10-13T09-18-54-133Z.yml` (tool-generated). Options: `option` cells `FX001` (f1e219) and `FX002` (f1e222). The combobox was `[expanded] [active]`.

## S4 — FX001 option clicked (f1e219, one click)

Snapshot file: `evidence/playwright/page-2026-10-13T09-18-57-912Z.yml` (tool-generated).

| Item | Readback |
| --- | --- |
| Customer ID combobox | `combobox "Customer ID:" [active]: FX001`; list closed (no listbox, no `[expanded]`) |
| Grid row | `gridcell "FX001"` (f1e228) in the data row |
| Order Number textbox | `"1"` (not edited) |
| Save | enabled (dirty; **not invoked**) |
| Status bar | `Customer ID (Object 1 of 1)` |

## S5 — Item list opened (Item Open toggle f1e194, one click)

Snapshot file: `evidence/playwright/page-2026-10-13T09-19-03-320Z.yml` (tool-generated). Options: `dumbbell` (f1e234), `eggs` (f1e237), `guitar` (f1e240). Combobox `[expanded] [active]`.

## S6 — dumbbell option clicked (f1e234, one click)

Snapshot file: `evidence/playwright/page-2026-10-13T09-19-06-983Z.yml` (tool-generated).

| Item | Readback |
| --- | --- |
| Item combobox | `combobox "Item:" [active]: dumbbell`; list closed |
| Grid row | `gridcell "dumbbell"` (f1e243) |
| Customer ID combobox | `FX001` |
| Order Number textbox | `"1"` (not edited) |
| Save | enabled (dirty; not invoked) |
| Status bar | `Item (Object 1 of 1)` |

## S7 — Count fill (one browser_type call, text `2`, into Count textbox f1e203)

Replaced the default `1` with `2`. One fill; no other field typed.

## S8 — Focus move (one Tab key press; no click on any field)

Snapshot: inline (after Tab), and the screenshot below.

| Item | Readback (accessibility, settled) |
| --- | --- |
| Grid data row | `row [ref=f1e244]`: `gridcell "1"` (f1e157) = Order Number; `gridcell "FX001"` (f1e228) = Customer ID; `gridcell "dumbbell"` (f1e243) = Item; `gridcell "2"` (f1e245) = Count |
| Order Number textbox | `textbox "Order Number:" [ref=f1e174]: "1"` (not edited) |
| Customer ID combobox | `combobox "Customer ID:" [ref=f1e183]: FX001` |
| Item combobox | `combobox "Item:" [ref=f1e193]: dumbbell` |
| Count textbox | `textbox "Count:" [ref=f1e203]: "2"` |
| Save | `button "Save" [ref=f1e28] [cursor=pointer]` — **enabled** (dirty; not invoked) |
| New | enabled; **not invoked** |
| Status bar | `Count (Object 1 of 1)` (the focused-field caption prefix; expected) |
| Dialogs / alerts / validation text | none |
| Row count | one data row (no second row, no third row) |

## Screenshot checks

- `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png`: shows the FX_Orders tab selected under the DEM identity bar; the starred row-header `1`; Order Number textbox `1` (right-aligned); Customer ID `FX001`; Item `dumbbell`; Count `2`; Save icon coloured (enabled); status `Count (Object 1 of 1)`. **The grid's data cells (Customer ID, Item, Count) are clipped at the left edge of the image.** The grid values above are proven by the accessibility readback S8 and the grid cell refs, not by the image.

## Limits

- Displayed values only. Order Number `1` is the displayed value in the add-mode row; nothing has been saved and no database value is claimed.
- Row star is proven by the screenshot only (the accessibility tree does not expose the star text).
- Console counts reported by the tool moved to 12 errors / 7 warnings during T2. Not inspected (brief: no console inspection).
