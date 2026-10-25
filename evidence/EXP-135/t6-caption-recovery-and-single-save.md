# EXP-135 T6 — Controlled Caption recovery and single Designer Save (SUCCESS BRANCH)

Run `R-20261026-051803-zOUZ` · cycle 8 · task T6 · worker session `470ab126-901c-4b6b-8c09-ab242257308a` · task_message_id `322841bc-0568-4d8e-a14f-fe52d85a123b`.
Scope: Form-level Caption of FX_InventoryEditor only, Designer tab 0 only. One ordinary Designer Save. No Form close, no reopen, no Finish, no runtime open, no record insertion, no tabs 1 or 2, no vendor or non-FX_ Form, no database script, no browser JavaScript (worker-authored).

## Result

**Caption corrected in the Designer and saved once. The Designer reports the save completed and the Save control is disabled. Persistence is observed only through the save notification and the Designer's clean state. The close/reopen readback (AC-6) has NOT been performed in this task, per the operator instruction.**

## Pre-edit gates (passed; matches the expected inherited state)

| Gate | Observed | Evidence |
|---|---|---|
| Tabs | Designer tabs list: tab 0 is the Designer; the Designer tablist shows one Form tab, heading `FX_InventoryEditor`. Tabs 1 and 2 were listed (read-only) but not selected or inspected. | tab list; snapshot |
| Name | `FX_InventoryEditor` | snapshot (Properties > Form) |
| Version / scope | `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | snapshot; `t6-01` |
| Caption (inherited) | `ApplyFullTextIndexScriptQuestion`, active and selected in the Form-level Caption row | snapshot |
| Save (inherited) | enabled (not `[disabled]`) | snapshot |
| Full-text index banner | visible: "The system has identified a script that will create a full-text index on a selected number of tables. Do you want to apply the script?" | snapshot; `t6-01` |
| Components | six `object.FX_*` GridColumns and six Edit components paired with Static components, primary collection `FX_InventoryItems` (T4 bindings, unchanged) | snapshot component tree |

## Actions in order

| # | Action | Result |
|---|---|---|
| 1 | Tab list (read-only); select tab 0 | Tab 0 selected (succeeded) |
| 2 | Fresh snapshot of tab 0; read `t5-caption-correction-blocked.md` | Expected inherited state matched; no material difference |
| 3 | Click Form-level Caption **value** cell (gridcell `ApplyFullTextIndexScriptQuestion`, not the Open Edit Property Dialog button, not a Component Caption) | Inline Caption combobox opened (combobox active, text highlighted). `t6-01` |
| 4 | Press `Control+a` in the active Caption combobox | Existing text selected (keyboard action; no Enter) |
| 5 | Type the literal `FX_InventoryEditor` into the Caption combobox (no Enter, no suggestion picked) | Field shows `FX_InventoryEditor` (leading F clipped by the field edge); Save still grey. `t6-02` |
| 6 | Click the Caption **label** cell (treeitem `Caption`, left column) to commit | Row returned to display; Caption gridcell reads `FX_InventoryEditor` exactly; banner no longer visible. `t6-03` |
| 7 | Read-only find on Caption gridcell, Name, Save | Caption gridcell `FX_InventoryEditor` (committed, not editor); Name `FX_InventoryEditor` |
| 8 | Ordinary Designer Save (toolbar Save), **one** invocation | Save notification: "Save — Form [FX_InventoryEditor] and global object(s) were saved." Toolbar Save `[disabled]`; Undo `[disabled]`. `t6-04` |
| 9 | Read-only screenshot and find after the save | Confirmed the Save notification, disabled Save, Caption `FX_InventoryEditor`, Name `FX_InventoryEditor`, User-scope footer |

## Counts (T6)

| Action | Count |
|---|---|
| Caption value-cell click (inline editor opened) | 1 |
| Control+A in the Caption combobox | 1 |
| Literal typed into the Caption combobox | 1 |
| Caption label-cell click (commit) | 1 (committed the exact literal) |
| Enter presses | 0 |
| Resource suggestion picked | 0 |
| Caption commits | 1 (correct value) |
| Ordinary Designer Save | **1** (succeeded: save notification, Save disabled) |
| Full-text index banner: clicked / applied | 0 / 0 (banner disappeared on its own after the label commit; not interacted with) |
| Designer close / reopen | 0 / 0 (not in scope for this task) |
| Wizard Finish | 0 |
| Runtime open / record insert | 0 / 0 |
| Component, binding, collection, IDO, Static caption edits | 0 |
| Vendor, non-FX_ Form, tabs 1 and 2 interaction | 0 |
| Database script executed | 0 |
| Worker-authored browser JavaScript | 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

## Screenshots (what each proves, and what it does not)

- `t6-01-caption-value-cell-clicked-pre-edit.png`: Caption inline combobox active with the inherited text highlighted; Name `FX_InventoryEditor`; footer User scope `anton.ramos@3mworks.com.ph`; full-text index banner visible above the design surface, not covering the Properties grid. Proves the pre-edit identity and that the banner did not block the Form-level Caption. Does not prove the committed state.
- `t6-02-caption-typed-uncommitted-before-label-commit.png`: Caption combobox shows `FX_InventoryEditor` (leading F clipped); Save still grey; banner still visible. Proves the typed literal before commit. Does not prove commit.
- `t6-03-caption-committed-via-label-click-pre-save.png`: Properties Caption row displays `FX_InventoryEditor`; Designer title reads `FX_InventoryEditor`; banner no longer visible; Name `FX_InventoryEditor`; footer User scope. Proves the Caption value committed in the Designer client. Does not prove server persistence (that is what the Save proves, and only as far as the notification states).
- `t6-04-after-single-designer-save-caption-readback.png`: Save notification "Form [FX_InventoryEditor] and global object(s) were saved."; toolbar Save and Undo greyed; Caption and Name `FX_InventoryEditor`; footer User scope. Proves the single Save completed with a clean Designer state for this Form. Does not prove close/reopen recovery (AC-6 readback still pending). Note: the notification's wording mentions "global object(s)" generically; this task did not identify which global objects, if any, were included. Only this one Form was loaded in the Designer.

## Acceptance (T6)

- **AC-5 (Form definition, Caption):** Caption now reads `FX_InventoryEditor` in the Designer after the committed edit and after the save. The six `object.FX_*` bindings and six Static/Edit pairs were visible in the component tree at the start of T6 and were not edited in T6. **Supported for the in-session Designer state. Not yet confirmed after a Designer close/reopen.**
- **AC-6 (save and Designer recovery):** Ordinary Save performed once (AC-6 qualification). Save is disabled after the save. **The close and supported recent-forms reopen have NOT been performed; AC-6 is not met until they are.**
- **AC-7 to AC-10:** not evaluated (no runtime open, no record inserts, no reopen).

## Limitations

1. The save notification is the only observed success signal for the server write. Close/reopen readback is the required confirmation and is outstanding.
2. The full-text index banner disappeared after the label commit. Its cause (dismissal by the Designer's commit handling, or a timer) was not observed. It was not clicked and not applied.
3. The save notification refers to "global object(s)" generically. The Designer did not show which global objects were included. No global objects were intentionally edited in T6.
4. The `t6-02` field shows the leading "F" clipped. The committed gridcell (`t6-03` and find) shows the full text `FX_InventoryEditor`.
5. The earlier T5 wrong commit (`ApplyFullTextIndexScriptQuestion`) was never saved and was overwritten by this correction before any save. The unexplained "No object name given." alert (T5) did not recur in T6 because the Edit Property Dialog button was not used.

## Next permitted action (for the coordinator)

A separately authorized Designer close-and-reopen readback of FX_InventoryEditor (one ordinary close of the clean tab, one supported recent-forms reopen), verifying Caption `FX_InventoryEditor`, bound IDO `FX_InventoryItems`, grid, six bindings, User scope, and Save disabled. Runtime work (AC-7 to AC-10) must wait for that readback.
