# EXP-135 T11 — Records 2 and 3 (FX-ITEM-002, FX-ITEM-003) runtime entry, single Save each, committed readbacks

Run `R-20261026-051803-zOUZ` · cycle 14 · task T11 · worker session `a1e18a23-ebab-4843-bff0-9d157fe188cb` · task_message_id `76755a56-73c5-4cc4-aac1-65247e38fa20`.
Scope (operator bounded instruction): records 2 and 3 only, sequentially. Runtime Form `FX_InventoryEditor` in Web Client tab 3. No runtime close or reopen (reserved for T12), no Portal reload or navigation, no Designer tab, no vendor or non-FX_ Form, no edit or delete of any committed row, no browser JavaScript (worker-authored), no fourth record.

## Result

**Records 2 and 3 committed at the Web Client UI level, each with one Save.** After the record-3 Refresh the runtime collection shows exactly three unstarred rows with six exact values each: FX-ITEM-001 (T10), FX-ITEM-002, and FX-ITEM-003. Save is disabled and status is `(Object 1 of 3)`. The runtime Form is left open and clean. This is same-session UI readback only, not database-level and not cross-session. No runtime close or reopen was performed.

## Pre-task gates

| Check | Observed | Evidence |
|---|---|---|
| Tab selection | Tab list (read-only) then select tab 3 succeeded | tool results |
| Account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | snapshot; `t11-01` |
| Runtime identity | Tab heading `FX_InventoryEditor`; URL `MGForm=FX_InventoryEditor` in tab 3 | snapshot; `t11-01` |
| Pre-task state | Save disabled; `(Object 1 of 1)`; one committed row FX-ITEM-001 with six expected values; no star on that row | snapshot; `t11-01` |
| Mapping reused | T10 mapping: input 1 FX_Description, 2 FX_Location, 3 FX_QuantityOnHand, 4 FX_ReorderLevel, 5 FX_Warehouse, 6 FX_Item (required) | T10 record; positional check in snapshots (see Limitations) |
| Session | Usable; no Session Expired modal, no sign-in page | snapshot |

## Record 2 — FX-ITEM-002

| Step | Action | Observed | Evidence |
|---|---|---|---|
| New | One click on toolbar New (`f1e29`) | `(Object 2 of 2)`; row 1 still FX-ITEM-001 with all six values; row 2 blank starred add-mode; detail inputs blank; Save enabled | snapshot `page-2026-10-25T22-07-29-901Z.yml`; no image |
| Entry | Six plain fills plus Tab commits: FX-ITEM-002 (input 6), FX test bracket (1), FX-WH-A (5), 8.00 (3), 10.00 (4), FX-LOC-02 (2) | Values as specified | pre-Save snapshot |
| Pre-Save | Target-identified readback | Row 2 grid and detail inputs: `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002`; row 1 unchanged; `(Object 2 of 2)`; Save enabled | `t11-02` |
| Save (once) | One click on toolbar Save (`f1e28`) | Save disabled; row-2 star gone; no alert, no prompt; no retry, no ambiguity | snapshot `page-2026-10-25T22-08-07-409Z.yml`; `t11-03` |
| Refresh (once) | One click on toolbar Refresh (`f1e35`) | Two rows: FX-ITEM-001 (six values) and FX-ITEM-002 (six values); Save disabled; `(Object 1 of 2)` | snapshot `page-2026-10-25T22-08-17-007Z.yml`; `t11-04` |
| Row 2 detail | One click on row indicator `2` (`f1e268`), read-only grid navigation | Detail inputs: `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002` (key greyed); Save disabled; `(Object 2 of 2)` | snapshot `page-2026-10-25T22-08-31-694Z.yml`; `t11-05` |

Record 2 verification: committed with one Save; two distinct committed keys (FX-ITEM-001, FX-ITEM-002) after Refresh; six exact values; 8.00 is below 10.00 as entered (no status logic implemented or claimed).

## Record 3 — FX-ITEM-003

Started only after record 2 passed verification.

| Step | Action | Observed | Evidence |
|---|---|---|---|
| Fresh snapshot | Untargeted, before New | Save disabled; `(Object 2 of 2)`; two committed rows; row 2 selected; clean | snapshot (inline) |
| New | One click on toolbar New (`f1e29`) | `(Object 3 of 3)`; rows 1 and 2 retained with their values; row 3 blank starred add-mode; detail inputs blank | snapshot `page-2026-10-25T22-08-43-956Z.yml` |
| Entry | Six plain fills plus Tab commits: FX-ITEM-003 (6), FX test gasket (1), FX-WH-B (5), 0.00 (3), 5.00 (4), FX-LOC-03 (2) | Values as specified | pre-Save snapshot |
| Pre-Save | Target-identified readback | Row 3 grid and detail inputs: `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`; rows 1 and 2 unchanged; `(Object 3 of 3)`; Save enabled | `t11-06` |
| Save (once) | One click on toolbar Save (`f1e28`) | Save disabled; row-3 star header cleared; no alert, no prompt; no retry, no ambiguity | snapshot `page-2026-10-25T22-09-20-202Z.yml`; `t11-07` |
| Refresh (once) | One click on toolbar Refresh (`f1e35`) | Three rows, each with six values: FX-ITEM-001, FX-ITEM-002, FX-ITEM-003; Save disabled; `(Object 1 of 3)` | snapshot `page-2026-10-25T22-09-29-693Z.yml`; `t11-08` |
| Row 3 detail | One click on row indicator `3` (`f1e365`), read-only grid navigation | Detail inputs: `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003` (key greyed); Save disabled; `(Object 3 of 3)` | snapshot `page-2026-10-25T22-09-39-500Z.yml`; `t11-09` |

Record 3 verification: committed with one Save; three distinct committed keys after Refresh; FX-ITEM-001 and FX-ITEM-002 preserved with their values; 0.00 is below 5.00 as entered (no status logic implemented or claimed).

## Evidence files (this task)

| File | Shows | Does not prove |
|---|---|---|
| `t11-01-pre-new-runtime-record1-committed-clean.png` | Header account; FX_InventoryEditor tab; FX-ITEM-001 row; `(Object 1 of 1)`; Save greyed (read as image before New) | Database row count |
| `t11-02-record2-six-fields-entered-pre-save.png` | Record 2 pre-Save values in inputs; Save enabled; `(Object 2 of 2)` | Commit |
| `t11-03-record2-after-single-save-save-disabled.png` | Post-Save: Save greyed after the single Save | Database write (Refresh readback is the committed-state check) |
| `t11-04-record2-committed-readback-after-refresh.png` | Two unstarred rows; detail shows row 1; Save greyed; `(Object 1 of 2)` | Row 2 values (grid right columns are hidden in the GridLeft layout; see snapshot) |
| `t11-05-record2-detail-row2-selected-readback.png` | Row 2 detail: `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002`; Save greyed; `(Object 2 of 2)` | Database-level state |
| `t11-06-record3-six-fields-entered-pre-save.png` | Record 3 pre-Save values in inputs; Save enabled; `(Object 3 of 3)` | Commit |
| `t11-07-record3-after-single-save-save-disabled.png` | Post-Save: Save greyed after the single Save | Database write |
| `t11-08-post-refresh-three-rows-overview.png` | Three unstarred rows; detail shows row 1; Save greyed; `(Object 1 of 3)` | Full six values for rows 2 and 3 (grid right columns hidden in image; see snapshot and `t11-09`) |
| `t11-09-record3-detail-row3-selected-readback.png` | Row 3 detail: `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`; Save greyed; `(Object 3 of 3)` | Database-level state; cross-session durability |

Accessibility snapshots (automatic, `evidence/playwright/`) carry the full post-Refresh six-value text for all three rows: row 1 `FX test widget` / `FX-LOC-01` / `120.00` / `20.00` / `FX-WH-A` / `FX-ITEM-001`; row 2 `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002`; row 3 `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`.

## Action counts (T11)

| Action | Count |
|---|---|
| Tab list / tab select (tab 3) | 1 / 1 |
| Explicit `browser_snapshot` calls | 4 (start; record 2 pre-Save; fresh before record 3; record 3 pre-Save) |
| Auto-snapshots returned with clicks (read from files) | 8 |
| Clicks (total) | 8 |
| — New | 2 (record 2 and record 3; each added exactly one row) |
| — Runtime Save | 2 (record 2 once; record 3 once) |
| — Refresh | 2 (after record 2; after record 3) |
| — Row-indicator selection (read-only navigation) | 2 (rows 2 and 3, for detail screenshots) |
| Plain fills (`browser_type`) | 12 (six per record) |
| Tab presses (commit) | 12 |
| Screenshots | 9 (`t11-01` to `t11-09`) |
| Ref-not-found errors | 0 |
| Dialogs (alert, confirm, beforeunload) | 0 observed |
| Save retries / New retries / Refresh retries | 0 |
| Runtime close / reopen | 0 (reserved for T12) |
| Designer tab action or Designer Save | 0 |
| Vendor or non-FX_ Form action | 0 |
| Finish, wizard, SQL, IDO, FormSync, unload, Portal navigation or reload | 0 |
| Worker-authored browser JavaScript | 0 |
| Session-expiry recovery | 0 |
| Fresh-snapshot recovery allowance used | 0 |

## Cumulative action count (T1 through T11)

| Action | T1–T9 (per prior records) | T10 | T11 | Cumulative |
|---|---|---|---|---|
| Wizard Finish | 1 (T3) | 0 | 0 | 1 |
| Designer ordinary Save | 1 (T6, Caption-only) | 0 | 0 | 1 |
| Designer close / reopen (FX_InventoryEditor) | 1 (T7) | 0 | 0 | 1 |
| Vendor IdoProjects Form close, no save (operator-authorized) | 1 (T2) | 0 | 0 | 1 |
| Select Form open (T8 cancelled, T9 OK) | 2 | 0 | 0 | 2 |
| Portal navigation (T9) | 1 | 0 | 0 | 1 |
| Runtime Form open | 1 (T9) | 0 | 0 | 1 |
| Runtime Refresh | 1 (T9) | 1 | 2 | 4 |
| Runtime New | 0 | 0 | 2 | 2 |
| Runtime successful record Save | 0 | 1 | 2 | 3 (target: exactly 3, met) |
| Runtime close / reopen | 0 | 0 | 0 | 0 (T12 to perform once) |
| Committed FX_InventoryItems rows (UI level, same session) | 0 | 1 | 2 | 3 (FX-ITEM-001, -002, -003) |

Note: T1–T9 counts are taken from the prior records (EXP-135 sections T3, T6, T7, T8, T9 and `evidence/EXP-135/t2-designer-isolation.md`); the Designer Save count of one is the operator-authorized Caption-only Save, and the "global object(s) were saved" notification remains an open qualification from T6 and T7.

## Acceptance matrix (T11 scope)

| AC | Status | Basis |
|---|---|---|
| AC-1 | Supported for this task | Header `anton.ramos@3mworks.com.ph`, FX_InventoryEditor tab, Save disabled before action (snapshot; `t11-01`) |
| AC-2 | Carried (T1 and T9 presence check) | Not re-run in T11 |
| AC-3 / AC-7 | Carried (T9 zero-row gate) | Not re-run in T11 |
| AC-4 / AC-5 / AC-6 | Carried (T3 to T7) | Not re-run in T11 |
| AC-8 | Supported at UI level for all three records, same session | Record 1 (T10): one Save, Refresh readback. Record 2: one Save (`t11-03`), Refresh readback with six values and two distinct keys (`t11-04`, `t11-05`, snapshot). Record 3: one Save (`t11-07`), Refresh readback with six values and three distinct keys (`t11-08`, `t11-09`, snapshot). No duplicate, no fourth record |
| AC-9 | Not evaluated (T12) | Requires one runtime close and reopen after three commits |
| AC-10 | Partial (T12 final audit) | Action counts above; prohibited-action count zero for T11 |

## Limitations

1. Committed-state readbacks are Web Client collection reads after one Refresh per record, in one session. They are not database-level reads and not cross-session checks.
2. `(Object n of N)` is the UI collection count, not a database count.
3. The T10 field mapping was reused as the operator instructed. The Find dialog was not re-run for records 2 and 3. The positional check is that the detail inputs appeared in the same order in every snapshot, and the Refresh readback placed each value in the expected grid column (Description, Location, Quantity, Reorder, Warehouse, Item).
4. The grid right-hand columns are hidden in the GridLeft layout, so the post-Refresh screenshots show only the detail panel for the selected row. Values for the other rows come from the accessibility snapshot, and the rows were selected individually (`t11-05`, `t11-09`) to show them visually.
5. The Web Client console showed 15 errors and 10 warnings throughout T11, unchanged from the start of the task. These were not investigated; they are not claimed to be related or unrelated.
6. Record 2 was verified before record 3 began. No record 3 action occurred while record 2 was uncertain.

## Next permitted action (T12, separately authorized)

Final runtime close once and reopen once, a fresh supported collection retrieval that must return exactly three rows with distinct keys FX-ITEM-001, FX-ITEM-002, FX-ITEM-003, six values read back per row (18 values), one grid overview screenshot, detail evidence, and the final AC-9 and AC-10 audit. The runtime is currently open, clean, with row 3 selected and Save disabled.
