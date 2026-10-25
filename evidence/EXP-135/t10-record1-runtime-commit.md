# EXP-135 T10 — Record 1 (FX-ITEM-001) runtime entry, single Save, and committed readback

Run `R-20261026-051803-zOUZ` · cycle 13 · task T10 · worker session `e651b638-2862-4b1c-be7d-c6b4255f7ac1` · task_message_id `0fbf39a4-0886-4681-aec8-2d5b67b525d1`.
Scope (operator bounded instruction): record 1 only. Runtime Form `FX_InventoryEditor` in Web Client tab 3. No record 2 or 3, no second Save, no runtime close or reopen, no Portal reload or navigation, no Designer tab, no vendor or non-FX_ Form, no New, no edit or delete of any committed record, no browser JavaScript (worker-authored).

## Result

**Record 1 committed at the Web Client UI level, with one Save.** After one supported toolbar Refresh, the collection shows exactly one grid row with `FX test widget` / `FX-LOC-01` / `120.00` / `20.00` / `FX-WH-A` / `FX-ITEM-001`. The status reads `(Object 1 of 1)`, the Save control is disabled, and no add-mode star remains. The runtime Form is left open and clean. This is same-session UI readback only: it is not a database-level read, not a cross-session check, and not replay.

## Pre-entry gates (before any typing)

| Check | Observed | Evidence |
|---|---|---|
| Account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t10-01`, `t10-04` |
| Runtime identity | Tab heading `FX_InventoryEditor`; `MGForm=FX_InventoryEditor` in tab 3 URL | `t10-01`; snapshot |
| Clean state | Save disabled; no dialog | `t10-01`; snapshot |
| Pre-entry collection | `(Object 1 of 1)`; one grid row with blank cells (add-mode placeholder); six inputs blank | `t10-01`; snapshot |
| No existing FX_Item key | No row with a populated key before entry | snapshot |
| Session | Usable; no Session Expired modal; no sign-in page | snapshot |

The pre-entry state matches T9: one blank starred placeholder and zero committed rows.

## Field-to-property mapping (verified before typing)

Each blank input was clicked, then Edit > Find Value In Collection was opened to read the preselected Property. Each Find dialog was closed with Cancel. No search was run.

| Input (snapshot ref at mapping) | Property preselected in Find dialog | Value entered |
|---|---|---|
| 1 (`f1e165`) | `FX_DescriptionGridCol (FX_Description)` | `FX test widget` |
| 2 (`f1e172`) | `FX_LocationGridCol (FX_Location)` | `FX-LOC-01` |
| 3 (`f1e179`) | `FX_QuantityOnHandGridCol (FX_QuantityOnHand)` | `120.00` |
| 4 (`f1e186`) | `FX_ReorderLevelGridCol (FX_ReorderLevel)` | `20.00` |
| 5 (`f1e193`) | `FX_WarehouseGridCol (FX_Warehouse)` | `FX-WH-A` |
| 6 (`f1e200`, required `*` marker) | `FX_ItemGridCol (FX_Item)` | `FX-ITEM-001` |

The mapping agrees with the T7 Designer readback (Edit tab positions: Description 8, Location 10, QuantityOnHand 12, ReorderLevel 14, Warehouse 16, Item 18) and with the EXP-134 required key. Limitation: the link from the focused input to the Find dialog's preselection is inferred from the EXP-042-R3 method (its AC-3 limit). The input-to-property mapping was not read from the Designer for the runtime layout.

Entry method: one plain fill per field, then one Tab press to commit (the EXP-042-R3 pattern). Values were typed exactly as specified; no normalization. No record identity was substituted.

## Pre-Save state (`t10-02`, snapshot)

Before Save, all six inputs read back exactly: `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`. The grid's single row showed the same six values as staged (not yet committed). Save was enabled. Status `(Object 1 of 1)`. The screenshot shows the header account, the FX_InventoryEditor tab, and the six values; the grid's left columns are collapsed, so the detail inputs carry the values.

## Single Save (one invocation)

- Toolbar Save (`f1e28`, label `Save`) clicked **once**. No retry.
- Post-Save snapshot: Save disabled; the row's star gone; the `*` grid header column blank; the FX-ITEM-001 input greyed (the same read-only key pattern EXP-042-R3 observed); status `(Object 1 of 1)`; no alert, no validation text, no prompt.
- Screenshot `t10-03`: star absent from the left-grid row; toolbar Save greyed; six values present; FX-ITEM-001 greyed; `(Object 1 of 1)`.
- Interpretation: the Save state changed as expected (not an ambiguous outcome, so no read-only identity lookup or retry was needed). A settled Save is not proof of a database row; the readback below is the committed-state check.

## Committed-state readback (one supported Refresh)

- Toolbar Refresh (`f1e35`) clicked **once**, unfiltered.
- Snapshot after Refresh: one grid row (`gridcell "1"`) with `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`; the six detail inputs carry the same values; Save disabled; status `(Object 1 of 1)`; no add-mode placeholder row.
- Screenshot `t10-04`: no star; one row; six values; Save greyed; `(Object 1 of 1)`.
- The total of one matches exactly one committed row in this Web Client collection. The count is the UI status, not a database count.

## Acceptance for T10 (record 1 only)

| AC | Status | Basis |
|---|---|---|
| AC-1 (identity and session, this task) | Supported | `t10-01` header and tab; snapshot |
| AC-3 / AC-7 (zero rows before insertion) | Supported (carried from T9; re-observed as placeholder only) | `t10-01`; T9 zero-row gate; not a database count |
| AC-8 (record 1 only) | Supported at UI level, same session | One Save (`t10-03`); Refresh readback with six exact values (`t10-04`); single row; no duplicate |
| AC-8 (records 2 and 3) | Not evaluated (not started) | — |
| AC-9 (runtime close/reopen) | Not evaluated (not performed; after all three records) | — |
| AC-10 (audit) | Partial for T10 (action counts below) | This file; experiment record |

## Action counts (T10)

| Action | Count |
|---|---|
| Tab list / tab select (tab 3) | 1 / 1 |
| Browser snapshots (`browser_snapshot`) | 5 |
| Browser finds (`browser_find`) | 13 (Edit-menu item, Property read ×6, Cancel locate ×6) |
| Clicks, total | 26 (mapping 24 = 6 × [input, Edit, Find Value, Cancel]; Save 1; Refresh 1) |
| Plain fills (`browser_type`) | 6 (one per property) |
| Tab presses (commit) | 6 |
| Screenshots | 4 (`t10-01` to `t10-04`) |
| **Runtime Save** | **1** (record 1; no retry) |
| Runtime Refresh | 1 (read; committed-state readback) |
| New | 0 |
| Record 2 or 3 | 0 |
| Runtime close / reopen | 0 |
| Edit or delete of committed rows | 0 |
| Designer action / Designer Save / tabs 0–2 | 0 |
| Vendor or non-FX_ Form action | 0 |
| Finish / wizard | 0 |
| SQL, IDO, FormSync, metadata unload, Portal reload or navigation | 0 |
| Worker-authored browser JavaScript | 0 (the tool wrappers shown in tool output are the harness's own) |
| Dialogs (alert, confirm, beforeunload) | 0 |
| Ref-not-found errors | 0 |
| Session-expiry recovery | 0 |
| Fresh-snapshot recovery allowance used | 0 (all snapshots were planned reads or post-action checks, not recovery) |

## Mutation inventory (T10)

- **Created:** one `FX_InventoryItems` row, `FX-ITEM-001` / `FX test widget` / `FX-WH-A` / `120.00` / `20.00` / `FX-LOC-01`, through the FX_InventoryEditor runtime Form, with one Save.
- **Changed:** none. No Form definition, IDO, SQL table, or other object was changed.

## Evidence

| File | Shows | Does not prove |
|---|---|---|
| `t10-01-pre-entry-runtime-clean-placeholder-zero-rows.png` | Header account; FX_InventoryEditor tab; one blank starred placeholder; six blank inputs; `(Object 1 of 1)`; Save greyed | Database row count; that the placeholder is not a saved row (inferred from blank cells and absence of values) |
| `t10-02-record1-six-fields-entered-pre-save.png` | Header account; six values as entered (`FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`); starred row; `(Object 1 of 1)`; Save enabled; `120.00` text highlighted by focus only | Commit; property binding (inferred from the mapping above) |
| `t10-03-record1-after-single-save-save-disabled.png` | Star gone; Save greyed; FX-ITEM-001 greyed; six values; `(Object 1 of 1)` | That the Save wrote to the database (the Refresh readback is the committed-state check) |
| `t10-04-record1-committed-readback-after-refresh.png` | Header account; one unstarred row after Refresh; six values; Save greyed; `(Object 1 of 1)` | Database-level state; cross-session durability; the grid's hidden columns (collapsed in the GridLeft layout; values come from the detail inputs and the accessibility snapshot) |

Accessibility snapshots, same session: post-Refresh row cells (`FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`) and the six input values. Saved automatically under `evidence/playwright/` (for example `page-2026-10-25T22-04-18-042Z.yml`).

## Limitations

1. The committed-state readback is the Web Client collection after one Refresh, in one session. It is not a database-level read or a cross-session check.
2. The status `(Object 1 of 1)` is the UI's collection count, not a database count.
3. The field-to-property mapping relies on the Find Value In Collection preselection (EXP-042-R3 method; the focused-input link is inferred).
4. The Portal "beforeunload" dialog from T9 did not recur in T10; no dialog appeared in T10.
5. Record 1 is one row. Records 2 and 3 have not been started; AC-8 for the full set and AC-9 are not evaluated.

## Next permitted action

Operator authorization is needed before record 2 (FX-ITEM-002). The runtime Form is open and clean, with FX-ITEM-001 as the only committed row. Do not start record 2 without a fresh authorization, a fresh snapshot, and a check that the runtime is still clean with one committed row.
