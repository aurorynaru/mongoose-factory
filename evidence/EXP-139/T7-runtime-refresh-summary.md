# EXP-139 T7 - Single runtime Refresh data activation and AC-6 verification

Run R-20261027-014540-dC5I, cycle 8, task T7, 2026-10-27. One Refresh data activation performed and verified. No filter click, no runtime Save, no portal reload, no Designer action, no asset inspection.

## Starting state (T6 handover, confirmed in T7)

- Tab list (read-only) before any selection: tab 0 = Mongoose Web Client (`favoriteContext=FX_InventoryDashboard`); tab 1 = Designer (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), not touched in T7.
- Tab 0 selected; fresh snapshot. Form tab `FX_InventoryDashboard` selected. Header button `<SECRET_MONGOOSE_USERNAME> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (username masked in the snapshot; the real header read from the screenshot `t7-00`: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
- Pre-refresh state (`t7-00`, `t7-01`): heading `Inventory`, status `Not loaded`, button `Refresh data`, headline `Refresh to load the latest stock levels.`, empty gauge, legend placeholders, filters All / Needs reorder / Out of Stock, search box, table row `No stock loaded yet. Select Refresh data.`. No dialog. Save disabled. Matches the T6 baseline; no stop condition triggered.

## Accessibility reference for the Refresh data button (AGENTS.md coordinate last resort)

- `browser_find` for "Refresh data": no matches.
- Untargeted snapshots (two before the click): the Web User Control frame (`f1e89`, a nested iframe under the Form tab panel) exposed no child nodes; a snapshot targeted at `f1e89` also showed only the bare iframe.
- Result: no actionable accessibility reference for the Refresh data button in this task. **This differs from T6**, whose report says the frame exposed references. The discrepancy is recorded and not explained.
- Therefore a **coordinate click** was used, the permitted last resort, from a fresh screenshot (`t7-01`). The button occupies about x 925-1055, y 200-237 (CSS px) in the 1920x945 viewport. Click point: **(990, 219)**, centre of the button.

## Actions, in order

| # | Action | Result |
|---|---|---|
| 1 | Tab list (read-only) | Tab 0 and tab 1 listed as above |
| 2 | Tab 0 selected | Tab 0 current |
| 3 | Fresh untargeted snapshot | Web Client, FX_InventoryDashboard, pre-refresh; frame `f1e89` has no children |
| 4 | `browser_find` "Refresh data" | No matches |
| 5 | Snapshot targeted at `f1e89` | Bare iframe only |
| 6 | Fresh untargeted snapshot | Same as 3 |
| 7 | Screenshot `t7-00-pre-refresh-tab0-fresh-state.png` | Pre-refresh state; header visible. No tab-select was issued immediately before this screenshot (see compliance) |
| 8 | Tab 0 selected (separate operation) | Tab 0 current |
| 9 | Screenshot `t7-01-pre-refresh-tab0-reselected-fresh-before-click.png` | Button position confirmed for the click |
| 10 | Tab 0 selected again (separate operation, immediately before the input) | Tab 0 current |
| 11 | **Refresh data activation, coordinate click at (990, 219), ONE time** | Click sent once. Snapshot after: page URL unchanged, no dialog, console counter unchanged (5 errors, 10 warnings) |
| 12 | Wait 4 s (no interaction) | Passive wait only |
| 13 | Tab 0 selected (separate operation) | Tab 0 current |
| 14 | Screenshot `t7-02-after-single-refresh-click-populated-summary-table.png` | Populated summary and three-row table |
| 15 | Fresh untargeted snapshot (read-only) | The Web User Control frame still exposes no children; values below are screenshot-only |

**Refresh data activations: 1.** No second activation was made. No Needs reorder, Out of Stock, All, search or other filter was activated.

## Observed after the single activation (screenshot `t7-02`)

Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Form tab `FX_InventoryDashboard`.

- Heading `Inventory`; status `Loaded 3 records at 02:16 AM`.
- Headline `2 of 3 items need reordering.`
- Gauge: three coloured segments (red / amber / green) across the track.
- Legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`.
- Totals line `128 units on hand in 3 items, 2 warehouses`.
- Filter counts shown on the buttons: `All 3`, `Needs reorder 2`, `Out of Stock 1` (not clicked).
- Table rows, in this order:
  1. `FX-ITEM-003` / `FX test gasket`; warehouse `FX-WH-B`, location `FX-LOC-03`; quantity `0`, `reorder at 5`; status `Out of Stock`.
  2. `FX-ITEM-002` / `FX test bracket`; warehouse `FX-WH-A`, location `FX-LOC-02`; quantity `8`, `reorder at 10`; status `Low Stock`.
  3. `FX-ITEM-001` / `FX test widget`; warehouse `FX-WH-A`, location `FX-LOC-01`; quantity `120`, `reorder at 20`; status `In Stock`.
- All three rows fit in the viewport; no scrolling was needed.
- Post-click snapshot: no dialog; Save disabled.

## Comparison with the EXP-135 baseline (read-only, from `experiments/EXP-135-...md`)

| Item | EXP-135 committed value | T7 screenshot |
|---|---|---|
| FX-ITEM-001 | `FX test widget`, FX-LOC-01, 120.00, reorder 20.00, FX-WH-A | `FX test widget`, FX-LOC-01, 120, reorder at 20, FX-WH-A, In Stock |
| FX-ITEM-002 | `FX test bracket`, FX-LOC-02, 8.00, reorder 10.00, FX-WH-A | `FX test bracket`, FX-LOC-02, 8, reorder at 10, FX-WH-A, Low Stock |
| FX-ITEM-003 | `FX test gasket`, FX-LOC-03, 0.00, reorder 5.00, FX-WH-B | `FX test gasket`, FX-LOC-03, 0, reorder at 5, FX-WH-B, Out of Stock |

The displayed values match the EXP-135 baseline. The status labels are the dashboard's own derived output (EXP-135 recorded no status logic); this observation does not verify the status rule itself.

## Acceptance checks

- **AC-5: PASSED.** Pre-refresh baseline (`t6-01`, `t6-02`, `t7-00`, `t7-01`): header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, FX_InventoryDashboard, heading Inventory, status Not loaded, button Refresh data, empty-table text `No stock loaded yet. Select Refresh data.`. Then exactly one Refresh data activation.
- **AC-6: PASSED on screenshot evidence.** Every required value is visible in `t7-02`: headline `2 of 3 items need reordering.`; legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`; `128 units on hand in 3 items, 2 warehouses`; status `Loaded 3 records at 02:16 AM`; three rows in order FX-ITEM-003 (0 / 5 / Out of Stock), FX-ITEM-002 (8 / 10 / Low Stock), FX-ITEM-001 (120 / 20 / In Stock). **Limitation:** the accessibility tree did not expose the frame's text, so this pass rests on the visual reading of `t7-02` only, not on an accessibility readback.
- **AC-7: NOT EVALUATED in T7** (the filter click is reserved for the next task). Budget: at most one remaining.
- **AC-8:** no change was made in T7. Read-only observation of the three rows only; `FX_InventoryItems` not edited.
- **AC-9:** final audit deferred to the experiment record.

## Errors, notifications and console

- No error text, no error dialog, no session-expired modal and no sign-in challenge appeared after the activation.
- Post-click console counter: `5 errors, 10 warnings`, the same counter as before the click. The T6 messages were `Permissions policy violation: unload is not allowed` (five, error level). T7 did not re-read the console messages, so no statement is made about their content. Their cause remains **unresolved**; the dashboard rendered without error.

## Tab-selection compliance (T7)

- A tab list was taken before the first selection; tab 0 was selected before any browser read.
- Tab 0 was selected separately immediately before the coordinate click (action 10) and before the post-click screenshot (action 13).
- Gap: action 7 (screenshot `t7-00`) followed the task-start tab-select (action 2) with read-only snapshots and a `find` in between, but no tab-select was issued immediately before the screenshot itself. Tab 0 was the foreground tab throughout; no wrong-tab capture or input is observed.
- Snapshots and the `find` are read-only and were not preceded by tab-selects.

## Changed objects

- None in T7. The Web Client runtime Form received one Refresh data activation (a runtime read that loads data from the existing IDO; no FX_InventoryItems row was edited). Designer (tab 1) untouched. No Save, no asset change.

## Budgets after T7

- Full-content fill: 1 of 1 used (T4).
- Ordinary Designer Save: 1 of 1 used (T4).
- Portal reload: 1 used (T6). None permitted further without new authorization.
- Refresh data activation: **1 of 1 used (T7).** No further activation permitted.
- Needs reorder filter click: **at most 1 remaining** (reserved for the next task).

## Evidence files written in T7 (repo-relative)

- `evidence/EXP-139/T7-runtime-refresh-summary.md` (this file, new)
- `evidence/EXP-139/t7-00-pre-refresh-tab0-fresh-state.png` (new)
- `evidence/EXP-139/t7-01-pre-refresh-tab0-reselected-fresh-before-click.png` (new)
- `evidence/EXP-139/t7-02-after-single-refresh-click-populated-summary-table.png` (new)
- Tool-written snapshots under `evidence/playwright/` (tool output, not worker-authored), including `page-2026-10-26T18-16-44-552Z.yml` (pre-click snapshot) and `page-2026-10-26T18-16-50-336Z.yml` (post-click snapshot), and `console-2026-10-26T18-16-10-380Z.log`.

## Decisive evidence and what each image proves

- `t7-00`: header with account and configuration; FX_InventoryDashboard title bar; pre-refresh state (Inventory, Not loaded, Refresh data, No stock loaded yet). Proves the pre-click state for AC-5. Does not show any post-click data.
- `t7-01`: same pre-click state, taken as the fresh pre-input reference for the coordinate click. Proves the button position used for the single click. Does not prove the click landed (confirmed only by `t7-02`).
- `t7-02`: populated headline, legend, totals, status line, gauge, filter counts and the three-row table in the stated order. Proves AC-6 visually. Does not prove the stored bytes of the asset, does not prove the data came from a fresh IDO read beyond the status text, and does not show the accessibility tree.

## Unresolved

- Why the Web User Control frame exposed accessibility references in T6 but none in T7 (not explained).
- Cause of the five `unload` permissions-policy console errors (T6; not re-read in T7).
- Whether the status rule (Out of Stock / Low Stock / In Stock) is the intended business rule (the dashboard derives it; not part of this experiment's check).
