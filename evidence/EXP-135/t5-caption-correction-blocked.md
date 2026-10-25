# EXP-135 T5 — Caption-only correction (BLOCKED; no Save performed)

Run `R-20261026-051803-zOUZ` · cycle 6 · task T5 · worker session `5be699f8-f84b-49a5-a525-89738db9be1b` · task_message_id `0ce3293e-3cca-4c17-ac28-893d5b7c337e`.
Scope: Form-level Caption of FX_InventoryEditor only. Designer tab 0 only. No Designer Save, no close/reopen, no runtime, no record insert, no tabs 1/2, no vendor Form, no wizard, no Finish.

## Result

**Blocked. The Form-level Caption is now committed in the Designer to the wrong value, `ApplyFullTextIndexScriptQuestion`, and the Designer is dirty (Save enabled). No Save was invoked.** The Caption requirement (AC-5) is not met. The Designer is left in this state for operator disposition (T6).

## Pre-edit gates (passed)

| Gate | Observed | Evidence |
|---|---|---|
| Only Form loaded | Tab 0 is the only Form tab, heading `FX_InventoryEditor`; tabs 1/2 not touched | tab list; `t5-01` |
| Version / scope | Form Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t5-01` |
| Form Name | `FX_InventoryEditor` | `t5-01` |
| Pre-edit Caption | blank | `t5-01` |
| Pre-edit Save | disabled (`find`) | `t5-01` |
| Form-level context | Properties Form tab selected (bottom right) after the T4 Component selection | snapshot |

## Actions in order

1. Tab list (read-only), then select tab 0 (succeeded).
2. Fresh snapshot of tab 0 (Components tree expanded; FX_ItemStatic still selected from T4).
3. Click Properties **Form** tab (selection only).
4. Targeted find (Caption, Save) and snapshot of the Form properties tabpanel (`e1170`): Name, Caption blank, Version, Save disabled.
5. Screenshot `t5-01` (pre-edit state).
6. Click Caption **Open Edit Property Dialog** button (`e1232`). **Result: alert "Infor Mongoose Application Development Framework — No object name given." No edit dialog opened.**
7. Screenshot `t5-02` (alert visible).
8. Click the alert's OK once (`e1317`). Alert dismissed. No value changed; Save still disabled.
9. Targeted find (alertdialog, Save, Caption): no alert remaining; Save disabled; Caption blank.
10. Click the Caption value cell via the tool's generic locator (`.mg-arrow-cell-icon` first match). **Result: Caption combobox opened as a dropdown of string-resource IDs (`ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, … `fAppBuilder`).** The tool's locator choice was generic, not the element ref, so the exact clicked node is inferred from the dropdown appearing under the Caption row. Screenshot `t5-03`.
11. Find: `FX_InventoryEditor` appears only in the Name and tab heading, not as a dropdown option. The recipe `recipes/components/configure-basic-component.md` line 48 says to type the literal value and press Enter without picking a resource.
12. Type `FX_InventoryEditor` into the Caption combobox (ref `e1325`), without Enter. Screenshot `t5-04`: field displays `FX_InventoryEditor` (leading "F" clipped); Save still grey; no commit yet.
13. **Press Enter once (the single commit).** Result: the Caption became `ApplyFullTextIndexScriptQuestion` (the first highlighted dropdown entry), not the typed text. Save became enabled. A Designer banner appeared: "The system has identified a script that will create a full-text index on a selected number of tables. Do you want to apply the script?"
14. Screenshot `t5-05`. Find confirms Caption gridcell `ApplyFullTextIndexScriptQuestion` (selected, active) and Save enabled.
15. **Stopped.** No click on the banner (not applied; it would run a DB-level full-text index script, out of scope). No second Caption edit. No Save. No close.

## Why stopped

- Caption edit commit produced an unintended value. The brief permits one commit and requires the Caption to read `FX_InventoryEditor`; a second edit would be a retry of a mutation that has already changed state, which the brief does not authorize.
- The Designer now shows a pending change (Save enabled). Saving it would persist the wrong Caption. The brief forbids a Save after an unexplained prompt or error.
- The banner asks to apply a SQL full-text index script. Applying it is outside scope (SQL/DDL-level); dismissal was not authorized either, so it was left untouched.
- The "No object name given." alert from the Edit Property Dialog button is unexplained product behavior.

## Counts (T5)

| Action | Count |
|---|---|
| Caption property commits (Enter) | 1 (committed to wrong value `ApplyFullTextIndexScriptQuestion`) |
| Caption text typed (uncommitted, replaced at commit) | 1 |
| Edit Property Dialog button click | 1 (produced alert, no dialog) |
| Alert OK clicks | 1 |
| Caption value-cell click | 1 (opened dropdown) |
| Ordinary Designer Save | **0** |
| Designer close/reopen | 0 |
| Wizard / Finish | 0 / 0 |
| Runtime open / record insert | 0 / 0 |
| Vendor/non-FX_ Form, tabs 1/2 | 0 |
| Static caption, component, binding, collection, IDO edits | 0 |
| Browser JavaScript (worker-authored) | 0 (the tool's own wrapper text, e.g. `.first().click()`, is not worker-authored) |
| Ref-not-found errors | 0 |
| Oversized snapshot/find outputs (tool limit, not a ref error) | 2 (`browser_snapshot` on `e1170` and a broad regex find) — no state change |
| Session expiry / sign-in | 0 |

Note: the tool's Ran-Playwright-code wrapper for the value-cell click targeted `.mg-arrow-cell-icon` (first match). The dropdown that opened is the Caption editor, but the click was not on an element ref. Record as a limitation.

## Screenshots

- `t5-01-pre-edit-form-properties-caption-blank.png`: Form properties, Name `FX_InventoryEditor`, Caption blank, Version User scope, Save disabled, footer User scope. Proves pre-edit state. Does not prove server-side state.
- `t5-02-caption-edit-dialog-click-no-object-name-alert.png`: "No object name given." alert over Designer; Caption still blank. Proves the alert and that no edit dialog opened. Does not explain the alert.
- `t5-03-after-caption-value-cell-click-inspection.png`: Caption dropdown open (string-resource list), Caption blank. Proves dropdown opened. Does not prove which element was clicked (see note).
- `t5-04-caption-typed-uncommitted-intermediate.png`: Caption field shows `FX_InventoryEditor` (typed), dropdown still open, Save grey. Proves uncommitted typed value. Does not prove commit.
- `t5-05-caption-committed-pending-before-save.png`: Caption shows `ApplyFullTextIndex…`, Save enabled, full-text-index script banner visible, footer User scope. Proves the wrong committed value and the pending change. Does not prove server persistence.

## State left for T6

- FX_InventoryEditor Designer loaded in tab 0, Caption `ApplyFullTextIndexScriptQuestion` (wrong), Save **enabled**, banner open, Form-level Properties tab selected.
- Not saved; not closed; no alert or dialog pending except the full-text index banner (not a browser-native dialog).
- Do not Save as-is. Do not click the banner.

## Options for operator disposition (not performed)

1. Re-open the Caption editor, clear the value and type `FX_InventoryEditor`, then commit with the dropdown dismissed first (Escape, if the combobox allows) so no list item is auto-selected. Then one ordinary Save (AC-6 qualification). This needs explicit authorization for a second Caption commit.
2. Revert the Caption to blank (if the Designer offers an undo, Undo on the toolbar, which would not add a Save) and stop before any Save.
3. Discard the pending Designer change by closing the tab without saving, which the operator would authorize; then re-verify the Form clean state in T6.
4. Decide on the full-text index script banner: it must not be applied in this experiment. Dismiss only by the operator's direct instruction.
