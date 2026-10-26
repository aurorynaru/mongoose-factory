# EXP-139 T8 - Single Needs reorder filter activation and AC-7 verification

Run R-20261027-014540-dC5I, cycle 9, task T8, 2026-10-27. One Needs reorder filter activation performed and verified. No Refresh data activation, no filter click other than Needs reorder, no runtime Save, no portal reload, no Designer action, no asset inspection, no session recovery.

## Starting state (T7 handover, confirmed in T8)

- Tab list (read-only) before any selection: tab 0 = Mongoose Web Client (`favoriteContext=FX_InventoryDashboard`); tab 1 = Designer (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), not touched in T8.
- Tab 0 selected; fresh untargeted snapshot. Foreground Mongoose tab; Form tab `FX_InventoryDashboard` selected (`f1e84`, tab `f1e83`); header button `<SECRET_MONGOOSE_USERNAME> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (username masked in the snapshot; the real header read from the screenshot: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`). No session-expired modal, no sign-in challenge, no error dialog in the snapshot. The Web User Control frame `f1e89` exposed no children.
- Save disabled; Designer tab untouched.

## Accessibility reference for the Needs reorder control

- The fresh untargeted snapshot (step 1) exposed no children under the Web User Control frame `f1e89`, so no actionable accessibility reference was available for the filter button. The T7 `find` / targeted-snapshot loop was **not** repeated in T8.
- Per the AGENTS.md last resort, a native coordinate click was used. The target was verified from a fresh screenshot (`t8-01`) taken after the start-of-task snapshot. The `Needs reorder 2` button occupies about x 420-545, y 398-430 (CSS px) in the 1920x945 viewport. Click point: **(482, 414)**, the centre of the button.
- The coordinate method was recorded in advance and is an AGENTS.md last-resort fallback (EXP-136 T23 precedent).

## Actions, in order

| # | Action | Result |
|---|---|---|
| 1 | Tab list (read-only) | Tab 0 and tab 1 listed as above |
| 2 | Tab 0 selected (separate completed operation) | Tab 0 current |
| 3 | Fresh untargeted snapshot (read-only) | Web Client, FX_InventoryDashboard open; frame `f1e89` has no children; no dialog |
| 4 | Tab 0 selected (separate completed operation) | Tab 0 current |
| 5 | Screenshot `t8-01-pre-filter-tab0-runtime-three-records.png` | Populated pre-filter state (see below). **Disclosed deviation:** the tab-select and this screenshot were issued in one parallel block rather than sequentially; the select was not confirmed complete before the capture. Tab 0 was the foreground tab, and the screenshot shows the correct Mongoose tab. |
| 6 | Tab 0 selected (separate completed operation, immediately before the input) | Tab 0 current |
| 7 | **Needs reorder filter, native coordinate click at (482, 414), ONE time** | Click completed; no error. Tool wrapper output (`page.mouse.click`) is the MCP tool's own code, not authored by the worker. Post-click auto-snapshot written to `evidence/playwright/page-2026-10-26T18-20-07-986Z.yml` (tool output, not read). |
| 8 | Tab 0 selected (separate completed operation, immediately before the capture) | Tab 0 current |
| 9 | Screenshot `t8-02-after-single-needs-reorder-click-two-rows.png` | Needs reorder active; two rows (below) |
| 10 | Stop | No further browser action |

**Needs reorder activations: 1.** No All, Out of Stock, search or other filter activated. No Refresh data activation.

## Observed before the filter click (screenshot `t8-01`)

Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Form tab `FX_InventoryDashboard`; Save disabled.
- Heading `Inventory`; status `Loaded 3 records at 02:16 AM`; button `Refresh data`.
- Headline `2 of 3 items need reordering.`; legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`; `128 units on hand in 3 items, 2 warehouses`.
- Filter bar `All 3` (active), `Needs reorder 2`, `Out of Stock 1`; search box `Find an item, warehouse or location`.
- Table in order: FX-ITEM-003 (FX test gasket, FX-WH-B, FX-LOC-03, 0, reorder at 5, Out of Stock); FX-ITEM-002 (FX test bracket, FX-WH-A, FX-LOC-02, 8, reorder at 10, Low Stock); FX-ITEM-001 (FX test widget, FX-WH-A, FX-LOC-01, 120, reorder at 20, In Stock). **Before: 3 rows visible; `All` active.**

## Observed after the single filter click (screenshot `t8-02`)

- `Needs reorder 2` is the highlighted (active) filter; `All 3` and `Out of Stock 1` are not highlighted.
- The table shows **exactly two rows**, in this order:
  1. FX-ITEM-003 / FX test gasket; FX-WH-B, FX-LOC-03; quantity `0`, `reorder at 5`; `Out of Stock`.
  2. FX-ITEM-002 / FX test bracket; FX-WH-A, FX-LOC-02; quantity `8`, `reorder at 10`; `Low Stock`.
- FX-ITEM-001 (120, reorder at 20, In Stock) is **absent** from the filtered table.
- The summary remains visible and unchanged: status `Loaded 3 records at 02:16 AM` (the load timestamp did not change, which is consistent with no reload but is not proof of that), headline `2 of 3 items need reordering.`, legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`, `128 units on hand in 3 items, 2 warehouses`, filter counts `All 3`, `Needs reorder 2`, `Out of Stock 1`.
- No dialog, no error text, no session prompt, no sign-in challenge.

## Row count

- The table has no separate row-count label. The row count of 2 is supported by the visible table (two rows, FX-ITEM-001 absent) and by the `Needs reorder 2` count on the filter button, which was 2 before the click as well.

## Comparison with the expected result

| Expected (brief, AC-7) | Observed (`t8-02`) |
|---|---|
| Needs reorder filter active | Active (highlighted) |
| Exactly FX-ITEM-003 and FX-ITEM-002 | Exactly those two, in that order |
| FX-ITEM-003: 0 / reorder 5 / Out of Stock | Matches |
| FX-ITEM-002: 8 / reorder 10 / Low Stock | Matches |
| FX-ITEM-001 absent | Absent |
| Client-side only; no data change | The summary, status timestamp and filter counts are unchanged; no reload, Save or Refresh was performed. Backend non-change is inferred from the operation, not independently read back. |

## Acceptance checks

- **AC-7: PASSED on screenshot evidence.** One Needs reorder activation (coordinate click at (482, 414), recorded fallback). Post-click screenshot `t8-02` shows the active filter and exactly two rows, FX-ITEM-003 then FX-ITEM-002, with FX-ITEM-001 absent. **Qualified:** the frame exposed no accessibility readback before or after the click, so the result rests on the visual reading of `t8-02` only.
- **AC-8:** no change was made in T8. Read-only observation of the table; `FX_InventoryItems` not edited.
- **AC-9:** the final audit is recorded in the experiment record (cumulative ledger through T8). Not an acceptance decision.

## Errors, notifications and console

- No error text, no error dialog, no session-expired modal and no sign-in challenge appeared before or after the click.
- The console counter was not re-read in T8 (the tool-reported counter in the pre-filter snapshot was `5 errors, 10 warnings`, unchanged from T7). The T6 `unload` permissions-policy messages were not re-read; their cause remains **unresolved**.

## Tab-selection compliance (T8)

- A tab list was taken before the first selection; tab 0 was selected before any browser read.
- Tab 0 was selected separately before the pre-filter screenshot (step 4), before the click (step 6) and before the post-filter screenshot (step 8).
- **Deviation (disclosed):** step 4 (tab 0 select) and step 5 (pre-filter screenshot `t8-01`) were issued in one parallel block, so the select was not confirmed complete before the capture. The screenshot shows the correct Mongoose tab in the foreground, so no wrong-tab capture is observed; the sequencing rule was not met for this one capture.
- The snapshot in step 3 and the `find`-free approach were read-only and not preceded by a tab-select of their own (tab 0 was selected in step 2 immediately before).

## Changed objects

- None in T8. The Web Client runtime Form received one client-side Needs reorder filter click (page-only; no data changed by this step). Designer (tab 1) untouched. No Save, no asset change, no FX_InventoryItems edit.

## Budgets after T8

- Full-content fill: 1 of 1 used (T4).
- Ordinary Designer Save: 1 of 1 used (T4).
- Portal reload: 1 used (T6). None permitted further without new authorization.
- Refresh data activation: 1 of 1 used (T7). No further activation permitted.
- Needs reorder filter click: **1 of 1 used (T8).** No further filter click permitted.

## Evidence files written in T8 (repo-relative)

- `evidence/EXP-139/T8-needs-reorder-filter-summary.md` (this file, new)
- `evidence/EXP-139/t8-01-pre-filter-tab0-runtime-three-records.png` (new)
- `evidence/EXP-139/t8-02-after-single-needs-reorder-click-two-rows.png` (new)
- Tool-written snapshots and console logs under `evidence/playwright/` (tool output, not worker-authored), including `page-2026-10-26T18-20-07-986Z.yml` (post-click snapshot, not read in T8).

## Decisive evidence and what each image proves

- `t8-01`: header with account and configuration; FX_InventoryDashboard title bar; loaded state (`Loaded 3 records at 02:16 AM`), headline, legend, totals, filter counts (`All 3` active, `Needs reorder 2`, `Out of Stock 1`) and the three rows in order. Proves the pre-filter state and the button position used for the click. Does not prove that the click landed (confirmed only by `t8-02`).
- `t8-02`: `Needs reorder 2` highlighted; exactly two rows FX-ITEM-003 and FX-ITEM-002 with their values; FX-ITEM-001 absent; summary unchanged. Proves AC-7 visually. Does not show the accessibility tree; does not prove backend non-change beyond the unchanged load timestamp and summary.

## Unresolved

- Why the Web User Control frame exposed accessibility references in T6 but none in T7 or T8 (not explained).
- Cause of the five `unload` permissions-policy console errors (T6; not re-read in T8).
- Whether the status rule (Out of Stock / Low Stock / In Stock) is the intended business rule (not part of AC-7).
- Whether a client-side filter performs no backend call (inferred from the unchanged timestamp and summary, not independently verified).
