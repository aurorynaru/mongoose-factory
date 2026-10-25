# EXP-132 T8 - one ordinary Designer close, one reopen, read-only persistence checks (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=10`, `task=T8`, `worker_session_id=7a4b413d-0f87-4b92-af5d-f379eb67f28c`, `task_message_id=dff7418f-db10-4d7a-9402-1ac1c2ae6b11`.

## 1. Outcome

- **One ordinary Designer Form close** of FX_BridgeTest (Designer tab close control). It closed with no prompt and no dialog. (`T8-02`)
- **One reopen** of FX_BridgeTest from the Form menu's recent-Forms list. The only entry selected was `FX_BridgeTest`; the URL then carried `MGForm=FX_BridgeTest`. (`T8-03`, `T8-04`)
- **Reopened state (observed):** FX_BridgeTest, `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Version `User version for us...` (full text read in the tree: `User version for user anton.ramos@3mworks.com.ph`), Save disabled, Undo/Redo disabled, no dialog.
- **Read-only checks completed:** FX_vEcho Global Objects Properties; Designer Details > Variables Global - Persistent tree; Form Script (one `FX_Echo`, assignment and unchanged return); Compile Result Errors grid (headers only); asset `FX_Bridge/index.html` content in the Edit Browser File textbox; FX_BridgeControl User Control References (Use Web Control checked, Control URL `FX_Bridge/index.html`).
- **Designer Form Saves: 0.** **Runtime open or FX_BridgeButton activation: 0.** No variable, script, asset or component was edited. Every dialog was closed with Cancel; no OK was clicked.
- **AC-6 status:** met at the same-session UI level, with the limits in section 6. Cross-session server durability is not established.

## 2. Gates before the close (observed)

| Gate | Observation | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (find, iframe banner) | tab 1 |
| Web Client console | Total 44; Errors 3, Warnings 10 (unchanged) | tab 1 console read |
| Web Client runtime tabs | Only the Mongoose tab (tab 1) and the Designer (tab 0); no runtime FX_BridgeTest tab | tab list |
| Designer identity and scope | Title `FX_BridgeTest`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | snapshot; `T8-01` |
| Save before close | disabled (`button "Save" [disabled]`), Undo/Redo disabled | snapshot; `T8-01` |
| Dialogs before close | none | snapshot |
| Designer console before close | 2 errors / 0 warnings | snapshot footer |

## 3. Close (step 3)

- One click on the Designer tab's close control (`closable FX_BridgeTest`, fresh ref). The tool returned without error.
- Post-close (observed): `find "FX_BridgeTest"` returned **no matches**; the canvas is empty with no tab title; Save is greyed (`T8-02`). No unsaved-changes prompt and no dialog appeared.
- **Closed: yes** (same session).
- Designer Form close count: **1**.

## 4. Reopen (step 4)

- Opened the Form menu (`e3`). The menu listed recent Forms: FX_BridgeTest, FX_CustomerPortal, FX_Orders, Test ION API Invoke, Access As, EX_Items, IDO Projects, FX_Items, FX_FlexProbe01 (`T8-03`). The first recent entry is `FX_BridgeTest`.
- Clicked the `FX_BridgeTest` menu item once. The page then showed the FX_BridgeTest tab and the URL `MGForm=FX_BridgeTest`.
- Designer reopen count: **1**. No second Form was created, opened or customized.
- Side note: the first find for "Select Form" and "Recent" returned no match. The recent list was a plain Form menu, not a Select Form dialog. The menu was read from the screenshot, then the entry was selected by its accessibility ref.

## 5. Reopened Designer clean-state check (step 5)

- Snapshot after reopen (observed): tab `FX_BridgeTest` selected; `button "Save" [disabled]`; `Regenerate Form` disabled; `Undo` and `Redo` disabled; no dialog; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Designer console 2 / 0 (footer).
- `T8-04`: Form-level properties after reopen: Name `FX_BridgeTest`, Version `User version for us...`, Device Type Default, Form Type Normal, Is Master True, Script Language Visual C#.
- The Details panel was collapsed after reopen. It was expanded (view only).

## 6. Read-only persistence readbacks (steps 6-10)

### 6a. FX_vEcho - Global Objects Properties (step 6, authoritative for the variable)
- Edit > Variable > Global Objects (no commit). `find "FX_vEcho"`: **one** match (`gridcell "FX_vEcho"`).
- Row selected (selection only). Properties readback (`T8-05`, targeted snapshot of the Properties tree):
  - Name: `FX_vEcho`
  - Description: blank
  - Value: blank
  - Persistent: `True`
  - Global: `True`
  - Version: `User version for user anton.ramos@3mworks.com.ph`
- Closed with **Cancel** (the Global Objects OK was not clicked). No property edited, no variable created.
- Limit: the Properties tree shows the object metadata, not runtime use. It does not prove the variable is the storage used by `ThisForm.Variables`.

### 6b. FX_vEcho - Designer Details > Variables tree (step 6, supplementary)
- Details > Variables tab selected; the Form - Persistent and Global - Temporary groups were not expanded.
- Global - Persistent group expanded (view only). `find "FX_vEcho"`: one match, `gridcell "FX_vEcho"`.
- `T8-07`: the Global - Persistent group lists `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName` and `FX_vEcho` (the last row at the bottom of the visible pane). `T8-06`: the Variables tab before expansion (groups collapsed; no FX_vEcho visible until expanded).
- **Observed:** FX_vEcho is present in the Designer Details tree after the single Save and the close/reopen. In T4 to T7 it was absent from this tree (`T4-06`, `T5-07`, `T6`). This is a same-session observation. The cause (Save, close/reopen, or a tree refresh) is **not isolated**.

### 6c. FX_Echo - Form Script (step 7)
- Edit > Form Script opened read-only (`T8-08`). Visible full source, 20 lines:
  - `using System;`, `using Mongoose.IDO.Protocol;`, `using Mongoose.Scripting;`
  - `namespace Mongoose.FormScripts`, `public class FX_BridgeTest : FormScript`, comment block `// Methods go here`
  - line 13 `public string FX_Echo(string s)`
  - line 15 `ThisForm.Variables("FX_vEcho").Value = "FX_ECHO:" + s;`
  - line 16 `return "FX_ECHO:" + s;`
- Exactly one `FX_Echo`; exactly one assignment, immediately before the unchanged return. Scaffold intact.
- Compile Result expanded (`T8-09`). The Output tab is selected by default. The Errors tab was then selected: **headers only (Line, Column, Error), no rows.** This is **not affirmative compile proof**.
- Closed with **Cancel** (no OK, no commit, no compile initiated).
- Recovery and capture note: the first `T8-09` capture (Output-tab state) was overwritten by the second capture (Errors-tab state) because both used the same filename. Only the Errors-tab image is retained. Output-tab content is not separately preserved.

### 6d. FX_Bridge/index.html - Web User Control Asset content (step 8)
- Edit > Web User Control Assets opened the Global Objects dialog. The FX_Bridge folder was selected and expanded (ArrowRight). `index.html` was selected. Its Content row (text/html) was opened with Open Edit Property Dialog (read).
- Edit Browser File textbox (`T8-10`, accessibility text read in the same state). Retained content:
  - `<script type="text/javascript" src="../$app/scripts/UserControl.js">` (original dependency retained)
  - `<button type="button" id="FX_BridgeButton">FX Bridge Test</button>`
  - `<div id="FX_BridgeStatus"></div>` (one; initially empty)
  - `<div id="FX_BridgeOutput"></div>`
  - `WSForm.invoke("FX_Echo", "bridge-probe", function (result) {...})` (one invoke)
  - inside its callback: `document.getElementById("FX_BridgeStatus").textContent = result;` then one `WSForm.getVarValue("FX_vEcho", function (value) {...})`
  - inside the getVarValue callback: `document.getElementById("FX_BridgeOutput").textContent = value;`
- Matches the pre-commit readback in `T6-html-readback.md`. Read-only: the inner Edit Browser File dialog was closed with **Cancel**, and the parent Global Objects dialog was closed with **Cancel**. No OK was clicked.
- Limit: this is the in-session textbox state after reopen. Whitespace identity was not proven (T6 full-content replacement).

### 6e. FX_BridgeControl (step 9)
- Components grid: Pane (00) expanded (view). One row: `FX_BridgeControl`, Type UserControl, Pane 0, Container 0 (`T8-11`, `T8-12`).
- Row selected (selection only). Component properties (`T8-13`): Name `FX_BridgeControl`, Type `UserControl`, Specific Attributes > User Control Name `V(UserCtrl_FX_BridgeControl)`.
- User Control Name's Open Edit Property Dialog opened "Edit User Control References" (read). Readback (`T8-14`): Use Web Control **checked**; Control URL combobox **`FX_Bridge/index.html`**; Web User Control Asset option disabled. Closed with **Cancel** (no OK).
- Unchanged: no component setting, placement or generated UserCtrl variable was changed.

## 7. Final state (step 10)

- Designer: FX_BridgeTest tab selected; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; `find "Save"` shows `button "Save" [disabled]`; no dialog open (`T8-15`). The `Open Edit Property Dialog` tooltip visible in `T8-15` is only a hover label, not a dialog.
- No experiment-created runtime Form is open (no runtime tab).
- Designer console: 2 errors / 0 warnings (page footer in the last Designer snapshot, taken during the References readback; no separate Designer console read was made at the very end).
- Web Client console: total 44; Errors 3, Warnings 10 (unchanged from the start).

## 8. Lifecycle and mutation accounting

- Designer Form close: **1**. Designer reopen: **1**. Designer Form Save: **0** (no Save clicked in T8).
- Variables created/renamed/deleted/edited: **0**. Form Script edits: **0**. Asset edits: **0**. Component changes: **0**. UserCtrl variables touched: **0**.
- Global Objects OK, Script Editor OK, Edit Browser File OK, Regenerate, Delete (top toolbar), FormSync, metadata, cache, IDO or database operations: **0**.
- Runtime open: **0**. FX_BridgeButton activation: **0**.
- Browser JavaScript, evaluate or run-code written by the worker: **0** (the `### Ran Playwright code` blocks are tool-generated).
- Recovery: no `Ref ... not found` error; fresh untargeted snapshot **0/1**; corrected inspection **0/1**.

## 9. Browser action and read totals (worker tool-call log, not reconciled with the controller audit)

- **Actions: 34.** Tab selects 5 (Designer, Web Client, Designer, Web Client, Designer). Clicks 28 (includes the Designer close, the reopen menu item, the Global Objects Cancel, the Script Editor Cancel, the asset dialog Cancels, and the FX_BridgeControl reference Cancel). Key presses 1 (ArrowRight to expand FX_Bridge).
- **Reads: about 68.** Tab list 1; snapshots 8 (including targeted snapshots); screenshots 16 (15 distinct files, `T8-09` written twice); console reads 2; finds about 41. Local image reads of the screenshots are not counted as browser reads. The exact find count is an estimate of the tool-call log.
- The cumulative controller ledger is not updated here. Authoritative controller totals through T7 (148 actions, 200 reads) are carried as the brief states; T8's controller totals are for the coordinator to reconcile.

## 10. Console comparison

| Reading | Designer (tab 0) | Web Client (tab 1) |
| --- | --- | --- |
| Start of T8 | 2 errors / 0 warnings | 44: 3 errors / 10 warnings |
| After close, reopen and reads | 2 / 0 (every footer) | not re-read until the end |
| End of T8 | 2 / 0 | 44: 3 errors / 10 warnings (unchanged) |

No increase at any point.

## 11. Evidence files written (T8)

- `evidence/EXP-132/T8-01-designer-pre-close-state-save-disabled.png` - Designer before the close. Shows FX_BridgeTest, User scope in the status bar, Save and Undo greyed, the FX_BridgeControl row, no dialog. Proves the pre-close identity, scope and clean state. Does not prove server storage.
- `evidence/EXP-132/T8-02-designer-after-single-close-result.png` - Designer after the close. Empty canvas, no FX_BridgeTest tab title, Save greyed, no prompt. Proves the close in the UI. Does not prove the server-side state.
- `evidence/EXP-132/T8-03-designer-form-menu-open-before-reopen.png` - Form menu with the recent-Forms list (FX_BridgeTest first). Proves the menu entry used for the reopen.
- `evidence/EXP-132/T8-04-designer-reopened-FX_BridgeTest-readonly.png` - reopened FX_BridgeTest: Form-level properties (Name, Version, Script Language Visual C#), Save and Undo greyed, User scope. Proves the same-session reopen and identity, not durability.
- `evidence/EXP-132/T8-05-global-objects-FX_vEcho-properties-readonly-after-reopen.png` - Global Objects dialog with FX_vEcho selected (Properties pane partly visible in the image). The full property values are in the targeted accessibility readback in section 6a. Limit: the image does not show the Version text in full.
- `evidence/EXP-132/T8-06-designer-details-variables-tree-after-reopen.png` - Variables tab with the groups collapsed. Proves the collapsed state; FX_vEcho is not visible at this point.
- `evidence/EXP-132/T8-07-designer-details-global-persistent-expanded-readonly.png` - Global - Persistent expanded: `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FX_vEcho` at the bottom edge. Proves the visible tree row (same session).
- `evidence/EXP-132/T8-08-script-editor-readonly-after-reopen.png` - Script Editor read-only: full 20-line source including the FX_Echo assignment (line 15) and unchanged return (line 16). Proves the displayed source; not compilation.
- `evidence/EXP-132/T8-09-script-editor-compile-result-expanded-readonly.png` - Compile Result, Errors tab selected, headers only, no rows. Proves the empty Errors grid only; not compile success. (Overwrote the earlier Output-tab capture of the same name.)
- `evidence/EXP-132/T8-10-edit-browser-file-index-html-readonly-after-reopen.png` - Edit Browser File dialog with the retained HTML (the textbox text is in the accessibility readback in section 6d). Proves the Edit Browser File state; the image itself shows the dialog frame.
- `evidence/EXP-132/T8-11-designer-details-components-after-dialogs-closed.png` - Components tab with Pane (00) collapsed after the dialogs closed. Proves the collapsed state.
- `evidence/EXP-132/T8-12-designer-components-pane-expand-check.png` - Pane row selected but still collapsed, before the Expand control was used. Proves the intermediate state.
- `evidence/EXP-132/T8-13-designer-fxbridgecontrol-component-selected-readonly.png` - FX_BridgeControl selected: Name, Type UserControl, User Control Name `V(UserCtrl_FX_Brid...`. Proves the component identity and type; the reference is in T8-14.
- `evidence/EXP-132/T8-14-fxbridgecontrol-user-control-references-readonly.png` - Edit User Control References dialog. Shows Use Web Control checked. The Control URL text is in the accessibility readback in section 6e. Proves the dialog state.
- `evidence/EXP-132/T8-15-designer-final-reopened-readonly-save-disabled.png` - final Designer: FX_BridgeTest, User scope, Save and Undo greyed, no dialog. Proves the final visible state.
- `evidence/EXP-132/T8-close-reopen-summary.md` - this file.
- Tool-generated only (not written by the worker): `evidence/playwright/page-2026-10-25T15-*.yml` and `console-*.log` files.
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` - status paragraph updated and a T8 section appended.

## 12. Acceptance checks (T8 view)

- **AC-1:** re-confirmed for T8 (account header, configuration, User scope, FX_BridgeTest identity, no dialog, consoles, no runtime tab).
- **AC-2:** baselines re-read in T8 for the FX_Echo source, asset content and FX_BridgeControl reference. The Mock evidence lines are unchanged from the record.
- **AC-3:** FX_vEcho metadata re-read after reopen (Global True, Persistent True, Value blank, User version). No second variable (one match in Global Objects and one in the Details tree).
- **AC-4:** source readback after reopen matches T5/T6. Compile: Errors grid headers only, **not affirmative** proof. Compile success remains **unresolved**.
- **AC-5:** asset content and the unchanged FX_BridgeControl reference re-read after reopen (in-session). Whitespace identity remains unproven.
- **AC-6:** **met at the same-session UI level** for: FX_BridgeTest User identity; FX_vEcho metadata; the revised FX_Echo method; the revised asset contents; the FX_BridgeControl reference (Use Web Control, Control URL); Save disabled. This is same-session UI-level recovery evidence only. It does not establish cross-session server durability, and it does not prove the Designer reload came from server storage rather than client state.
- **AC-7 and AC-8:** not started (by instruction). No runtime Form is open.
- **AC-9:** the final manifest remains open for the later task.

## 13. Knowledge state (T8)

- Single ordinary close and reopen of FX_BridgeTest (same session): **observed**.
- FX_vEcho metadata after reopen (Global Objects Properties): **observed** (same session).
- FX_vEcho present in the Designer Details Global - Persistent tree after Save and reopen: **observed** (same session); it was absent in T4-T7. The reason for the change is **unresolved** (Save, reopen, or tree refresh).
- Revised FX_Echo source after reopen: **observed** (display). Compile success: **unresolved** (empty Errors grid is not affirmative).
- Revised asset content after reopen: **observed** (Edit Browser File textbox, same session).
- FX_BridgeControl reference after reopen: **observed** (same session).
- Cross-session server durability of the Save: **unresolved**.
- Runtime resolution of `ThisForm.Variables("FX_vEcho")` and `WSForm.getVarValue("FX_vEcho")` for a Global variable (EXP-130 U-1): **unresolved**. The Global FX_vEcho is not claimed to be the storage used at runtime.
- The invoke-to-FX_BridgeStatus and nested getVarValue-to-FX_BridgeOutput structure: **candidate_procedure** (from the saved Mock pattern; not executed).
- Replay verification: **not claimed**.

## 14. Open items for the coordinator

1. AC-7 (one runtime activation) is the next permitted task. T8 did not open a runtime Form.
2. The Errors grid is empty but not affirmative proof of compilation. A runtime activation would be the first execution evidence of the revised FX_Echo.
3. Cause of the FX_vEcho tree visibility change (Save, reopen, or refresh) is not isolated.
4. T8 controller totals must be reconciled with the authoritative audit (worker count: 34 actions, about 68 reads).
5. The `T8-09` capture was overwritten (Output-tab state not retained). Disclosed; no other capture was overwritten.
