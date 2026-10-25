# EXP-135 T7 — Designer close and reopen readback of FX_InventoryEditor (AC-6)

Run `R-20261026-051803-zOUZ` · cycle 9 · task T7 · worker session `470ab126-901c-4b6b-8c09-ab242257308a` · task_message_id `dcb7b080-40fb-4ccd-9076-5f4e80983ffd`.
Scope: Designer tab 0 only. One ordinary Form-tab close, one supported recent-forms reopen, read-only verification. No property edit, no Save, no Finish, no wizard, no runtime open, no record insert, no tabs 1 or 2, no vendor or non-FX_ Form, no database script, no browser JavaScript (worker-authored).

## Result

**Close and reopen completed. The reopened FX_InventoryEditor is the same User-scoped version (`User version for user anton.ramos@3mworks.com.ph`), with Name and Caption `FX_InventoryEditor`, Primary Collection `FX_InventoryItems`, a grid `FormCollectionGrid` with six GridColumns, six Edit components each paired with a Static, and six bindings to `object.FX_*`. Save and Undo are disabled after reopen.** This is observed Designer-side persistence of the definition across one close and one reopen in this session. It is not cross-session durability and not a replay.

## Pre-close gate (clean state)

| Check | Observed | Evidence |
|---|---|---|
| Loaded Forms | Tab 0 heading `FX_InventoryEditor`; the only Form tab | snapshot; `t7-01` |
| Name / Caption | `FX_InventoryEditor` / `FX_InventoryEditor` | snapshot; `t7-01` |
| Version | `User version for user anton.ramos@3mworks.com.ph` | snapshot |
| Footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot; `t7-01` |
| Save | `[disabled]` | snapshot |
| Undo | `[disabled]` | snapshot |

## Actions in order

| # | Action | Result |
|---|---|---|
| 1 | Read-only tab list; select tab 0 | Tab 0 selected (succeeded) |
| 2 | Fresh snapshot of tab 0 | Pre-close gate above matched |
| 3 | Screenshot `t7-01` | Clean Form, User scope, Caption exact |
| 4 | Click the FX_InventoryEditor Form-tab close button (`closable FX_InventoryEditor`), **once** | No prompt appeared |
| 5 | Find and screenshot `t7-02` | No Form tab left; design surface and Properties panel empty; Save greyed; no dialog |
| 6 | Read-only snapshot (depth 3) to get current refs | Form menu ref obtained |
| 7 | Click the top-level **Form** menu (selection only) | Menu opened (`t7-03`) |
| 8 | Read-only find for the recent-forms entry | Found the recent item `FX_InventoryEditor` as the first entry under the menu separator (other entries: IDO Projects, Sql Tables, IDOs, FX_LoginPortal, FX_BridgeTest, FX_CustomerPortal, FX_Orders, Test ION API Invoke). IDO Projects was **not** clicked. |
| 9 | Click the recent item `FX_InventoryEditor`, **once** | Form reopened; URL gained `MGForm=FX_InventoryEditor` |
| 10 | Screenshot `t7-04` | Name, Caption, User version, footer, Save greyed |
| 11 | Find for `Details`; click `Expand Panel` on the collapsed Details panel (view-only layout toggle) | Details panel expanded |
| 12 | One fresh full snapshot | Primary Collection `FX_InventoryItems`; Save and Undo `[disabled]`; Caption `FX_InventoryEditor`; footer User scope |
| 13 | Click the Details **Components** tab (selection only) | Tab selected; panes collapsed |
| 14 | Find for `Expand` and click the tree Expand button (view-only) | Component tree expanded |
| 15 | Read-only finds for `object.FX_` (two passes) and screenshot `t7-05`, `t7-06` | Six GridColumns and six Edits read back (below) |

## Reopened-state readback

| Item | Observed value |
|---|---|
| Form identity | Name `FX_InventoryEditor`; tab heading `FX_InventoryEditor`; URL `MGForm=FX_InventoryEditor` |
| Caption | `FX_InventoryEditor` |
| Version / scope | `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` |
| Form Type / Device / Is Master | Normal / Default / True |
| Primary collection (Collections tab) | `Primary Collection: FX_InventoryItems` |
| Grid | `FormCollectionGrid` (Grid, data source `objects`, Pane 00) |
| GridColumn bindings | `FX_DescriptionGridCol` → `object.FX_Description` (tab 1); `FX_LocationGridCol` → `object.FX_Location` (2); `FX_QuantityOnHandGridCol` → `object.FX_QuantityOnHand` (3); `FX_ReorderLevelGridCol` → `object.FX_ReorderLevel` (4); `FX_WarehouseGridCol` → `object.FX_Warehouse` (5); `FX_ItemGridCol` → `object.FX_Item` (6). All six under `FormCollectionGrid`, Pane 00. |
| Edit bindings (Pane 01) | `FX_DescriptionEdit` → `object.FX_Description` (8); `FX_LocationEdit` → `object.FX_Location` (10); `FX_QuantityOnHandEdit` → `object.FX_QuantityOnHand` (12); `FX_ReorderLevelEdit` → `object.FX_ReorderLevel` (14); `FX_WarehouseEdit` → `object.FX_Warehouse` (16); `FX_ItemEdit` → `object.FX_Item` (18). |
| Static partners (blank captions, accepted wizard output) | `FX_DescriptionStatic` (7), `FX_LocationStatic` (9), `FX_QuantityOnHandStatic` (11), `FX_ReorderLevelStatic` (13), `FX_WarehouseStatic` (15), `FX_ItemStatic` (17). Each is paired with its Edit. |
| Save / Undo after reopen | Save `[disabled]`; Undo `[disabled]` (snapshot); greyed icons (`t7-06`) |

Limitations of the readback:
- The `object.FX_` find returns the six GridColumn rows and six Edit rows. The Data Source column is read from the accessibility tree and from `t7-06`. The GridColumn rows for FX_QuantityOnHand and FX_ReorderLevel are clipped in the screenshot (`object.FX_QuantityO...`, `object.FX_ReorderL...`). Their full bindings come from the find text, not the image.
- The Static components show blank captions. This is the accepted wizard output and was not changed.
- The Details panel was expanded and the Components tree was expanded. These are view-only layout states, not Form changes. The Form was not modified.

## Screenshots (what each proves, and what it does not)

- `t7-01-pre-close-clean-fx-inventoryeditor-caption-user-scope.png`: Clean pre-close state. Name and Caption `FX_InventoryEditor`, Version User, footer User scope; Save and Undo greyed. Proves the clean state before close. Does not prove server state.
- `t7-02-post-close-tab0-no-form-loaded.png`: After the single close. No Form tab; design surface and Properties empty; Save greyed; User-scope footer; no dialog. Proves the Form was unloaded from the Designer. Does not prove that the close wrote anything.
- `t7-03-form-menu-opened-recent-forms-route.png`: Form menu open. Shows the recent-forms entries, with `FX_InventoryEditor` first below the separators. Proves the route entry existed. Does not prove the reopen.
- `t7-04-reopened-via-form-menu-recent-fx-inventoryeditor.png`: Reopened Form. Name and Caption `FX_InventoryEditor`, Version User, footer User scope, Save greyed. Proves the reopen of the same User-scoped Form. Does not show the bindings (the Details panel was collapsed).
- `t7-05-reopened-details-components-tab-bindings.png`: Details Components tab with panes collapsed and the Save greyed state. Proves the panel state before expansion. Does not show bindings.
- `t7-06-reopened-components-tree-six-bindings.png`: Expanded Components tree. Shows `FormCollectionGrid` and the first GridColumn bindings (`object.FX_Description`, `object.FX_Location`, `object.FX_QuantityO...`); the remaining rows are below the visible area and are read from the accessibility tree. Proves the grid structure and first bindings visually. Does not prove all six visually; the six-binding readback is from the accessibility text above.

## Action counts (T7)

| Action | Count |
|---|---|
| Designer ordinary Save | **0** (none in T7; the single Save remains the T6 Caption save) |
| Designer Form-tab close | **1** (clean; no prompt) |
| Designer reopen via Form menu recent forms | **1** (FX_InventoryEditor; the IDO Projects entry was not clicked) |
| Property edits / Caption edits | 0 |
| Finish / wizard | 0 / 0 |
| Runtime open / record insert | 0 / 0 |
| Vendor, non-FX_, tabs 1 and 2 interaction | 0 |
| Database script, FormSync, IDO metadata change | 0 |
| Worker-authored browser JavaScript | 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 (one depth-3 read-only snapshot and one full read-only snapshot; neither was recovery) |

## Acceptance (T7 scope)

- **AC-6 (save and Designer recovery):** Pre-close clean state observed (Save disabled). One close and one supported recent-forms reopen completed. Reopened state reads back the same FX_InventoryEditor, User-scoped version, Caption, IDO association (`FX_InventoryItems`), grid, and six Static/Edit bindings. Save and Undo disabled after reopen. **Supported for the Designer close/reopen in this session.** The operator's AC-6 qualification (one Caption-only Designer Save, performed in T6) remains in force and is not reset by this result.
- **AC-5 (Form definition):** Caption, IDO, grid, and six bindings read back after reopen. Supported.
- **AC-7 to AC-10:** not evaluated (no runtime open, no record insert, no runtime close or reopen). Per the coordinator, runtime work belongs to the next task.

## Retained qualifications

1. **Operator-authorized AC-6 qualification:** the wizard left the Form clean. The single ordinary Designer Save in T6 was operator-authorized for the Caption correction only. The T6 Save's notification said "Form [FX_InventoryEditor] and global object(s) were saved." The generic "global object(s)" wording is recorded as **unresolved** as to additional object identity. The worker did not identify any global object in the save, and this task does not infer that any unrelated object was changed.
2. The T5 wrong Caption (`ApplyFullTextIndexScriptQuestion`) was never saved. It was superseded in T6 before the save. The reopened Caption reads `FX_InventoryEditor`, which shows the superseding value persisted through the Designer close/reopen.
3. The full-text index banner's origin and its disappearance during T6 remain **unresolved**. It was not clicked and no script was applied. It was not visible in T7.
4. The reopened readback is Designer-side only. It is not a database-level or cross-session durability claim and not a replay.

## Next permitted action

The reopened clean FX_InventoryEditor remains in Designer tab 0 for the next task. The next authorized task is the Web Client runtime work (AC-7 to AC-10): open exactly FX_InventoryEditor, confirm zero rows, then insert three records, one Save each.
