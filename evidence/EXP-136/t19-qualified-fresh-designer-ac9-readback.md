# EXP-136 T19 - qualified fresh-Designer AC-9 persistence readback (read-only; Designer-session route per operator acceptance)

Run R-20261026-062909-9GoC, cycle 27, task T19. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User, account `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- **AC-9: PASSED at the operator-accepted qualified fresh-session level.** The persisted Form, Caption, Script Language, FX_InventoryControl component and Web Control reference, the FX_LoadInventoryFromIDO method, the FX_vInventoryJson Global/Persistent definition and the FX_Inventory/index.html asset were each read back in the Designer after T18's state change. Qualification: the reload-in-place route is operator-accepted, and the fresh document load underlying it was never independently established (see section 3 and section 9).
- **AC-7 remains PENDING (qualified).** The Compile Result Output was blank and the Errors grid had headers only. The brief classes this as not affirmative compile proof.
- AC-10 to AC-13 were not evaluated (outside this task's scope; the brief ends at the AC-9 result).
- No Save, no Form creation, no component, script, variable or asset edit or commit, no Portal reload, no runtime open, no Refresh Data, no F5 or other reload, no Enter press, no browser JavaScript, no credential action, no session recovery.

## 2. Source precedent check (brief steps 1-2)

- Read: `AGENTS.md`; this task's EXP-136 record; `evidence/EXP-136/t16-single-designer-form-save.md`; `t17-fresh-designer-persistence-readback.md`; `t18-fresh-designer-persistence-readback.md`; `evidence/EXP-134/T5-checkpoint.md`.
- **Corrected precedent: `evidence/EXP-134/T5-checkpoint.md` (EXP-134 T5), not EXP-135 T5.** The EXP-135 T5 files cover the Caption correction only; the T18 record's search for a reload-in-place observation there found nothing.
- What EXP-134 T5 documents: one split-control click (`Designer`, tooltip `Open designer in a new window`) on the Web Client tab. The tab count stayed at four. The existing Designer tab (tab 0, previously a blank canvas) was re-targeted: its URL gained `&MGForm=IdoProjects`, and its loaded Form changed to the vendor `IdoProjects` Form. No new window was observed, and no scope dialog appeared.
- What EXP-134 T5 does **not** establish: the checkpoint states that "whether the window was reused or a window was replaced is **unresolved**", and it does not document a document reload. So the precedent supports only that a split-control click re-targeted an existing Designer tab in place. It does not establish a page reload or a fresh document load.
- Consistency with T17-T18: the same pattern (tab count unchanged, existing Designer tab re-targeted to an existing Form, the Form changed from the prior state, no scope dialog) appeared after the T17 launch click. This is consistent with the precedent but is not proof of the same mechanism.
- Operator decision (per the brief): the T17-to-T18 state transition is accepted as the qualified fresh-session gate. The T18 F5 effect remains unverified and is not required.

## 3. Session identity and scope (brief steps 4-6)

- Tab list (read-only, first in the task): tab 0 Web Client (`favoriteContext=FX_InventoryEditor`); tab 1 Designer (`WSWebClient/designer/Default.aspx`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Selected by title and URL, not by a hardcoded index (tab 1 was the Designer).
- Fresh ordinary snapshot (`evidence/EXP-136/t19-designer-fresh-snapshot-preflight.yml`): loaded Form `FX_InventoryEditor` (tab selected, not modified); Save disabled; Undo and Redo disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; title shows configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no dialog; console `2 errors, 0 warnings` (the same two `unload` Permissions-Policy violations recorded previously, unexplained).
- Edit-menu liveness probe (one open, one dismiss; no item selected): the menu opened and listed Undo, Redo, Copy, Cut, Paste, Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets and Revert Global Object Definition (Undo, Redo and Paste disabled). Dismissal by a second click on Edit. Post-dismiss snapshot: no menu items, Save disabled, `FX_InventoryEditor` still the only loaded Form before the Form open, no dialog. Evidence: tool snapshots `evidence/playwright/page-2026-10-26T01-37-38-500Z.yml` (open) and `page-2026-10-26T01-37-49-956Z.yml` (dismissed). No liveness screenshot was captured; the menu entries are shown by snapshot text only.
- Not established in T19: the account header text on the Web Client tab (not re-read in this task); the scope dialog (none appeared).

## 4. Opening the saved Form (brief steps 7-8)

- One Form menu open (`Form`), then one click on the recent-forms entry `FX_InventoryDashboard`. The Form menu's recent list showed `FX_InventoryDashboard`, `FX_InventoryEditor`, and other entries; no Select Form dialog and no New wizard were used.
- Post-open snapshot (`evidence/playwright/page-2026-10-26T01-38-11-194Z.yml`): tabs `FX_InventoryEditor` (not selected) and `FX_InventoryDashboard` (selected). Save and Undo disabled. Footer User / anton.ramos@3mworks.com.ph. No dialog. URL `MGForm=FX_InventoryDashboard`.
- Screenshot `evidence/EXP-136/t19-fxinventorydashboard-opened-identity-properties.png`: proves the `FX_InventoryDashboard` tab is selected, Visual C#, Form Type Normal, Is Master True, Save greyed and the User footer. The Name and Caption values are clipped in the viewport; their full text comes from the snapshot (section 5).
- The FX_InventoryDashboard tab sits beside `FX_InventoryEditor`, which stays loaded but untouched.

## 5. Form property readback (brief steps 9-10)

Native snapshot text (`page-2026-10-26T01-38-11-194Z.yml`), not a clipped viewport value:

| Property | Observed | Source |
| --- | --- | --- |
| Name | `FX_InventoryDashboard` | snapshot row Name (`e869`) |
| Caption | `FX_InventoryDashboard` (exact text) | snapshot row Caption (`e888`) |
| Version | `User version for user anton.ramos@3mworks.com.ph` | snapshot (`e900`) |
| Device Type | Default | snapshot (`e909`) |
| Form Type | Normal | snapshot (`e918`) |
| Is Master | True | snapshot; screenshot |
| Script Language | `Visual C#` | snapshot (`e1019`); screenshot |
| Size | `120; 40` (Char) | snapshot (`e1162`/`e1153`) |
| Save | disabled, Undo disabled | snapshot |

The Form Type displayed Normal (the brief's expected Classic BuildFromScratch display). No Form property was changed.

## 6. Components readback (brief steps 11-14)

- Components tab (Details panel expanded; Components tab; Pane (00) expanded with the grid's Expand button). Screenshot `t19-components-grid-pane-collapsed-state.png` shows the collapsed state before expansion; the snapshot `t19-components-grid-after-pane-expand.yml` was taken before the grid Expand button, so the expanded row text comes from `page-2026-10-26T01-39-24-183Z.yml`.
- Exactly one component row: `FX_InventoryControl`, Type `UserControl`, under `Pane (00)`, numeric cells 0 and 0 (Pane/Container columns in the grid). Screenshot `t19-edit-user-control-references-readback-before-cancel.png` shows the row highlighted with the UserControl icon.
- Component Properties (`FX_InventoryControl (ActivexControl)` header): Unit `Char`; Size `100; 30`; Width `100`; Height `30`; Lock Size `False`; Location `2.16666666666667; 5.69491525423729` (observed; not re-set). Specific Attributes: `User Control Name` = `V(UserCtrl_FX_InventoryControl)` (snapshot `e2151`).
- **User Control Name changed since T14.** T14 recorded the pre-rename value `V(UserCtrl_userControl1_USER)` and left whether Save re-keys it unresolved. T19 observes `V(UserCtrl_FX_InventoryControl)` after the T16 Save and the T17 close/T18-T19 reopen. This is an observed post-Save value, not an explanation of its cause.
- Edit User Control References dialog (opened once from the User Control Name ellipsis, closed once with Cancel; no OK): `Use Web Control` checked; Windows Assembly Name `<Not Applicable>`; Web Assembly Name blank; Class Override blank; Control URL combobox `FX_Inventory/index.html`; the Web User Control Asset radio shown as selected but disabled (screenshot `t19-edit-user-control-references-readback-before-cancel.png`). Relative and Absolute URL radios unselected.
- Limitation: the disabled radio cannot be operated; its selected state is read from the screenshot dot, not from a checked attribute in the snapshot.
- After Cancel the Page URL no longer contained `MGForm=FX_InventoryDashboard` (observed; the Form tab and heading remained). This matches T14's post-dialog observation. Cause not established; no reload was performed.
- Geometry: the component outline sits inside the 120 x 40 Form canvas in the screenshot (outline roughly from x 300 to x 1040 within the canvas that spans x 258 to x 1147 at the captured zoom). Sufficiency to display the rendered table is not demonstrated (runtime pending).

## 7. C# Form Script readback (brief steps 15-18)

- Opened once via Edit > Form Script (read-only inspection; closed once with Cancel). Screenshots: `t19-form-script-editor-opened-readonly.png`, `t19-form-script-editor-readonly-scrolled-body.png`, `t19-form-script-editor-readonly-end-of-file.png`. Snapshot: `t19-form-script-editor-readonly-snapshot.yml` (virtualized; only the first ~33 lines are in the accessibility text, so the rest comes from screenshots).
- Visible structure:
  - `using System;`, `using System.Collections.Generic;`, `using Mongoose.IDO.Protocol;`, `using Mongoose.Scripting;`, `using Newtonsoft.Json;`.
  - `//<Ref>Newtonsoft.Json.dll</Ref>`.
  - `namespace Mongoose.FormScripts { public class FX_InventoryDashboard : FormScript {` (line 9-11).
  - Scaffold comments `// Methods go here` (lines 14-16).
  - Exactly one method, `public void FX_LoadInventoryFromIDO()` (lines 18-36), closing braces lines 38-39.
- Method body (lines 20-35) compared with the committed `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (read in full this task):
  - `string properties = "FX_Item, FX_Description, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse";` (line 20; matches committed line 14).
  - `var response = IDOClient.LoadCollection("FX_InventoryItems", properties, "", "", 100);` (line 21; matches committed line 15).
  - Dictionary record built from `item.PropertyValues[0..5]` into `Item`, `Description`, `Location`, `QuantityOnHand`, `ReorderLevel`, `Warehouse`, then `inventory.Add(record)` (lines 26-33; matches committed lines 20-27).
  - `ThisForm.Variables("FX_vInventoryJson").Value = JsonConvert.SerializeObject(inventory);` (line 35; matches committed line 29). Not `Application.Variables`.
- Difference noted: the editor header lists `using Mongoose.IDO.Protocol;`, which the committed file does not. The committed file's `using` lines are System, System.Collections.Generic, Mongoose.Scripting and Newtonsoft.Json. This readback does not establish whether the extra line came from the generated scaffold or was added during T15; the T15 record describes the scaffold as generated and retained. Flagged, not repaired.
- Compile Result (Compile Result panel expanded once; the Errors tab selected once; no Run or compile action): Output tab blank; Errors tab shows the column headers `Line`, `Column`, `Error` and no rows (`t19-form-script-compile-result-expanded-readonly.png`, `t19-form-script-compile-errors-grid-readonly.png`). An empty grid is not affirmative compile success. **AC-7 remains PENDING (qualified).**
- Cancel closed the Script Editor once. Post-cancel snapshot (`page-2026-10-26T01-42-02-781Z.yml`): no Script Editor dialog, Save disabled, no pending change.

## 8. Global variable readback (brief steps 19-20)

- Edit > Variable opened the Global Objects dialog once. The Variables list (sorted) shows `FX_vEcho`, `FX_vInventoryJson` and `FX_vLoginResult` in sequence; exactly one `FX_vInventoryJson` row is visible. The list was not filtered (the filter box was not typed in), so the uniqueness check covers the visible sorted segment only.
- One row selection (`FX_vInventoryJson`, read-only). Properties (native tree, `page-2026-10-26T01-42-37-563Z.yml`): Name `FX_vInventoryJson`; Description blank; Value blank; Persistent `True`; Global `True`; Version `User version for user anton.ramos@3mworks.com.ph`.
- Screenshot `t19-fx-vinventoryjson-global-persistent-properties.png`: proves the Name, Persistent True, Global True, Version and blank Value. It does not prove the runtime storage behaviour of `ThisForm.Variables` (the brief keeps that unresolved).
- Global Objects closed once with Cancel (`page-2026-10-26T01-43-01-850Z.yml`); no change to the variable or any positive-control entry.

## 9. Web User Control Asset readback (brief steps 21-24)

- Edit > Web User Control Assets opened the Web Assets tree (the dialog title still reads `Global Objects`; the tree is labelled `Web Assets`). Root folders: `$app`, `FX_Bridge`, `FX_Inventory`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`.
- FX_Inventory folder selected and expanded (keyboard ArrowRight once). Child `index.html` selected.
- Properties (`page-2026-10-26T01-43-55-964Z.yml`; screenshot `t19-web-asset-index-html-properties-readonly.png`): Name `FX_Inventory/index.html`; Content `text/html`; Version `User version for user anton.ramos@3mworks.com.ph`.
- Source readback: the Content "Open Edit Property Dialog" button (once) opened the **Edit Browser File** dialog (File `FX_Inventory/index.html`; Content Type `text/html`). The full content is in the dialog's textbox accessibility value (`page-2026-10-26T01-44-23-848Z.yml`, line 1036) and in the screenshot `t19-edit-browser-file-index-html-readonly-readback.png` (lines through `</html>`).
- Tokens present in the saved asset: `<title>FX Inventory Dashboard</title>`; `../$app/scripts/UserControl.js` script reference; the four metric cards `Total Items` (`FX_InvTotalItems`), `Total Units` (`FX_InvTotalUnits`), `Low Stock` (`FX_InvLowStock`), `Out of Stock` (`FX_InvOutOfStock`); the `Refresh Data` button `FX_InvRefresh`; table headers Item, Description, Warehouse, Location, Quantity, Reorder Level, Status; the status branch `qty <= 0 ? "Out of Stock" : (qty <= reorder ? "Low Stock" : "In Stock")`; `WSForm.invoke("FX_LoadInventoryFromIDO", ...)`; `WSForm.getVarValue("FX_vInventoryJson", ...)`; `document.getElementById("FX_InvRefresh").addEventListener("click", load)`.
- Generated template comments: none observed in the saved text (no HTML comments).
- Same tokens in the committed `assets/FX_Inventory/index.html` (grep: 13 occurrence lines covering the same identifiers; no `<!--`). This is a token-level match.
- Edit Browser File closed with **Cancel** (ref `e3136`); OK was not clicked. The parent Web Assets dialog closed with Cancel. Post-close snapshot: no dialog; Save disabled.
- **AC-4 qualification preserved:** the native readback establishes matching source tokens. It does not establish exact whitespace, indentation, trailing newline or byte-for-byte SHA-256 equivalence, and the accessibility textbox value normalises line breaks. No byte-identity claim is made.

## 10. Final read-only inspection (brief steps 25-27)

- Details > Variables (Form-level): categories `Form - Persistent`, `Global - Persistent` and `Global - Temporary`. `Form - Persistent` expanded once and scrolled once. Its entries (screenshots `t19-final-details-variables-form-persistent-expanded.png`, `t19-final-details-variables-form-persistent-scrolled.png`): `UserCtrl_FX_InventoryControl`, `UserCtrl_userControl1_USER`, `UserCtrlAsm_FX_InventoryControl`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_FX_InventoryControl`, `UserCtrlUrl_userControl1_USER`. These are Designer-generated user-control variables. The `userControl1_USER` entries are the pre-rename names and remain present. Not repaired (brief). Not claimed exhaustive: the grid was read at two scroll positions only.
- Global - Persistent and Global - Temporary categories were not expanded.
- Details > Event Handlers: grid headers `Sequence`, `Response Type`, `Disabled`, `Response Parameters`; **no rows** (snapshot `page-2026-10-26T01-45-58-475Z.yml`). No event handler or binding exists.
- Final state (snapshot `page-2026-10-26T01-45-58-475Z.yml`): `FX_InventoryDashboard` tab selected and loaded; Save disabled; footer User / anton.ramos@3mworks.com.ph; no dialog or alert text.

## 11. Acceptance status after T19

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted); T19 preflight re-observed the User footer, configuration title and loaded Form; the absence checks were not repeated | sections 3 |
| AC-2 | Carried: passed at operator-verified hash level (not recomputed); T19 read the committed C# in full and grep-matched the committed HTML tokens | sections 7, 9 |
| AC-3 | **Passed (qualified)** for the fresh-session route: `FX_vInventoryJson` Name, Global True, Persistent True re-read in the reopened Designer session | section 8 |
| AC-4 | Carried operator-accepted (qualified; token-level): saved source tokens re-read, no byte equality | section 9 |
| AC-5 | **Passed (qualified)**: Name `FX_InventoryDashboard`, User version for anton.ramos@3mworks.com.ph, Caption `FX_InventoryDashboard`, Script Language Visual C# re-read after reopen; Save Template unchecked was a creation-time observation (T13) | section 5 |
| AC-6 | **Passed (qualified)**: one UserControl `FX_InventoryControl`; Use Web Control checked; Control URL `FX_Inventory/index.html`; Web User Control Asset radio selected (disabled); Size 100; 30 Char; geometry inside the Form canvas; sufficiency for the rendered table not demonstrated (runtime pending) | section 6 |
| AC-7 | **PENDING (qualified)**: method present and matches the committed semantics; the Compile Result Output blank and the Errors grid headers only; no affirmative compile success | section 7 |
| AC-8 | PASSED (observed, T16) | T16 record |
| AC-9 | **PASSED (qualified; operator-accepted reload-in-place route)**: persisted Form identity, Caption, Script Language, component identity and Web Control reference, C# method, Global/Persistent variable and asset identity/source tokens read back after reopen. The fresh document load underlying the route is not independently established | sections 4-9 |
| AC-10 | Not evaluated (no Portal reload or runtime open authorized in T19) | - |
| AC-11 | Not evaluated (no Refresh Data activation authorized in T19) | - |
| AC-12 | Not evaluated (no inventory read in T19) | - |
| AC-13 | Partial: this file, the EXP-136 record update and the mutation ledger below; final reconciliation pending the coordinator | section 12 |

## 12. Mutation and browser ledger (T19)

Mutations (application):
- Designer Saves: 0. Form creation or replacement: 0. Form open by the worker: 1 (recent-forms entry; read-only inspection; no change).
- Component edits: 0 (the Edit User Control References dialog was closed with Cancel). Script edits: 0 (Cancel). Variable edits: 0 (Cancel). Asset commits: 0 (Cancel of Edit Browser File, then Cancel of the parent dialog). Caption, Script Language, layout or event changes: 0.
- Regenerate Form, FormSync, global-object unload, IDO-metadata unload, deployment, cache clearing: 0.
- Portal reloads: 0. F5 or browser reloads: 0. Designer launches: 0. Runtime opens or Refresh Data activations: 0. Inventory reads: 0.

Browser and UI actions (view or selection only unless stated):
- Tab lists: 2 (first list; a list after the tab select). Tab selects: 1 (Designer tab 1).
- Edit-menu open/dismiss: 2 clicks (liveness). Form menu open: 1; recent-forms item click: 1 (opens the Form).
- Details panel expand: 1; Components tab: 1; Pane (00) treeitem click: 1; ArrowRight on the Pane row: 1 (no expansion); Components grid Expand button: 1; FX_InventoryControl row click (selection): 1; Component tab (already selected by component selection).
- Edit User Control References: open 1, Cancel 1 (no OK).
- Edit > Form Script: open 1; mouse move 1 and wheel 2 (scroll only); Compile Result header expand 1; Errors tab 1; Cancel 1.
- Edit > Variable: open 1; FX_vInventoryJson row selection 1; Cancel 1.
- Edit > Web User Control Assets: open 1; FX_Inventory folder selection 1; ArrowRight 1 (expand); index.html selection 1; Content "Open Edit Property Dialog" 1; Edit Browser File Cancel 1; Web Assets Cancel 1.
- Details Variables tab 1; Form - Persistent expand 1; mouse move 1 and wheel 1 (scroll); Event Handlers tab 1.
- Screenshots: 16 worker-requested (section 13). Snapshots worker-saved: 4 (`t19-designer-fresh-snapshot-preflight.yml`, `t19-components-grid-after-pane-expand.yml`, `t19-form-script-editor-readonly-snapshot.yml`, `t19-web-assets-after-fx-inventory-expand.yml`); the rest are tool-written under `evidence/playwright/`.
- Worker-authored browser JavaScript: 0. Evaluate or run-code calls: 0. Enter presses: 0. Typing into any field: 0. Credential reads or entries: 0. Session recoveries: 0. Dialogs accepted (OK): 0 (every dialog closed with Cancel; the info alert in T14 did not recur).
- Ref-not-found errors: 0. Timeouts: 0. Browser-recovery snapshots beyond the normal ones: 0.
- Unexplained observations: the Page URL lost `MGForm=` after the reference dialog's Cancel (no cause established); the Designer console keeps two `unload` Permissions-Policy errors (unexplained, pre-existing).

## 13. Evidence files (T19)

Written by the worker (`evidence/EXP-136/`):
- `t19-qualified-fresh-designer-ac9-readback.md` (this file).
- `t19-designer-fresh-snapshot-preflight.yml`: preflight snapshot; `FX_InventoryEditor` loaded; Save disabled; User footer.
- `t19-components-grid-after-pane-expand.yml`: Components snapshot taken before the grid Expand button (Pane collapsed in that snapshot; the expanded row is in `page-2026-10-26T01-39-24-183Z.yml`).
- `t19-form-script-editor-readonly-snapshot.yml`: Script Editor snapshot (virtualized; header and first ~33 lines).
- `t19-web-assets-after-fx-inventory-expand.yml`: Web Assets tree after the FX_Inventory expansion.
Screenshots (each reviewed):
- `t19-fxinventorydashboard-opened-identity-properties.png`: the FX_InventoryDashboard tab selected; Visual C#; Normal; Save greyed; User footer; the UserControl icon at top-left. Does not prove Name or Caption (clipped); does not prove a fresh document load.
- `t19-components-grid-pane-collapsed-state.png`: Components grid with Pane (00) collapsed. Does not show the component row (before expansion).
- `t19-edit-user-control-references-readback-before-cancel.png`: component row FX_InventoryControl (UserControl; Pane 0); Size 100; 30; User Control Name `V(UserCtrl_FX_Inv…`; the Edit User Control References dialog with Use Web Control checked and Control URL `FX_Inventory/index.html`; the Web User Control Asset radio selected (disabled). Does not prove the saved definition independently of this Designer session.
- `t19-form-script-editor-opened-readonly.png`: Script Editor lines 1-33 (header; class; method start; LoadCollection; record fill; `inventory.Add(record);`). Does not show the lines beyond 33 (see the next image).
- `t19-form-script-editor-readonly-scrolled-body.png`: lines 4-36 (the ThisForm.Variables assignment at line 35; method close at 36).
- `t19-form-script-editor-readonly-end-of-file.png`: lines 7-40 (class and namespace closing braces at 38-39; one method only).
- `t19-form-script-compile-result-expanded-readonly.png`: Compile Result expanded; Output tab selected and blank.
- `t19-form-script-compile-errors-grid-readonly.png`: Errors grid with headers `Line`, `Column`, `Error` and no rows. Does NOT prove compile success (AC-7 pending).
- `t19-global-objects-variable-dialog-readonly.png`: Global Objects variable list; `FX_vInventoryJson` between `FX_vEcho` and `FX_vLoginResult`; no selection.
- `t19-fx-vinventoryjson-global-persistent-properties.png`: the variable selected; Name `FX_vInventoryJson`; Persistent True; Global True; Version User; Value blank. Does not prove runtime storage behaviour of `ThisForm.Variables`.
- `t19-web-user-control-assets-dialog-fx-inventory.png`: Web Assets root folders including FX_Inventory (collapsed).
- `t19-web-asset-index-html-properties-readonly.png`: asset properties (Name `FX_Inventory/index.html`; Content text/html; Version User).
- `t19-edit-browser-file-index-html-readonly-readback.png`: Edit Browser File source lines through `</html>`, including the WSForm.invoke and getVarValue lines. Does not prove exact whitespace or byte identity (AC-4 qualification).
- `t19-final-details-variables-readonly.png`: Details Variables with the three Form categories collapsed.
- `t19-final-details-variables-form-persistent-expanded.png`: Form - Persistent expanded (UserCtrl entries, first rows).
- `t19-final-details-variables-form-persistent-scrolled.png`: Form - Persistent scrolled (remaining UserCtrl entries, Global - Persistent collapsed).
Tool-written under `evidence/playwright/` (not worker-authored): `page-2026-10-26T01-37-38-500Z.yml`, `page-2026-10-26T01-37-49-956Z.yml`, `page-2026-10-26T01-38-01-565Z.yml`, `page-2026-10-26T01-38-11-194Z.yml`, `page-2026-10-26T01-38-36-326Z.yml`, `page-2026-10-26T01-38-46-223Z.yml`, `page-2026-10-26T01-38-56-919Z.yml`, `page-2026-10-26T01-39-24-183Z.yml`, `page-2026-10-26T01-39-37-652Z.yml`, `page-2026-10-26T01-40-03-532Z.yml`, `page-2026-10-26T01-40-23-116Z.yml`, `page-2026-10-26T01-40-33-272Z.yml`, `page-2026-10-26T01-40-41-242Z.yml`, `page-2026-10-26T01-41-32-869Z.yml`, `page-2026-10-26T01-41-48-018Z.yml`, `page-2026-10-26T01-42-02-781Z.yml`, `page-2026-10-26T01-42-11-454Z.yml`, `page-2026-10-26T01-42-20-395Z.yml`, `page-2026-10-26T01-42-37-563Z.yml`, `page-2026-10-26T01-43-01-850Z.yml`, `page-2026-10-26T01-43-06-654Z.yml`, `page-2026-10-26T01-43-14-971Z.yml`, `page-2026-10-26T01-43-32-924Z.yml`, `page-2026-10-26T01-43-55-964Z.yml`, `page-2026-10-26T01-44-23-848Z.yml`, `page-2026-10-26T01-44-47-926Z.yml`, `page-2026-10-26T01-44-57-543Z.yml`, `page-2026-10-26T01-45-06-978Z.yml`, `page-2026-10-26T01-45-23-471Z.yml`, `page-2026-10-26T01-45-58-475Z.yml`; console log `console-2026-10-26T01-37-19-632Z.log` (tab-list event).

## 14. Limitations

- **Session route:** the reopened Designer is the same document that T18 left, whose state changed without a verified reload. The operator accepted this route. The readback therefore establishes persistence at the qualified level only. A client-side cache of the Form or variable definitions cannot be excluded by this evidence; recent-forms opening is consistent with a server fetch but does not prove one.
- **EXP-134 T5 precedent** supports only tab re-targeting in place, not a page reload (its own checkpoint leaves reuse versus replacement unresolved).
- **AC-7:** the Compile Result shows no rows and no output; neither proves compilation ran.
- **Edit User Control References:** the Web User Control Asset radio is read from a disabled control's selected dot in the screenshot.
- **Form Script header:** the `using Mongoose.IDO.Protocol;` difference is recorded, not resolved.
- **Form-level variables:** `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER` and `UserCtrlUrl_userControl1_USER` remain; their cause (rename leftover versus designer behaviour) is not established.
- **Geometry:** the 100 x 30 Char size is read from properties; the rendered table fit is not demonstrated.
- **Asset:** token-level source match only; accessibility text normalises line breaks.
- **Global variable value:** blank in the definition; runtime storage of `ThisForm.Variables` remains unresolved (EXP-130 U-1).
- **Console:** the two `unload` Permissions-Policy errors were unchanged; unexplained.
- **Unresolved from earlier tasks:** the cause of the T17 launch non-appearance; the MGForm parameter on the Web Client tab after the T17 click; the T13 Save-state transition.

## 15. Next permitted action

Coordinator decision on: (1) AC-7 (accept the empty Errors grid as insufficient, or authorize a read-only control; a Run or compile is not authorized by T19); (2) the separate Portal reload and runtime Form-opening steps for AC-10 and AC-11; (3) AC-12 inventory readback; (4) disposition of the Designer tab 1 state (`FX_InventoryDashboard` loaded and clean). No further application action is authorized by T19.
