# EXP-131 T9 - One ordinary FX_BridgeTest close, one supported reopen, read-only readbacks (no mutation, no runtime) (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=10`, `task=T9`. Bounded instruction: preflight the post-Save state; close FX_BridgeTest once through the Form-tab close control; reopen once through the supported Designer Form selection route; read back identity, User version, Script Language, Components, Save state; inspect the UserControl reference, generated variables, asset and Form Script read-only; close each read-only editor with Cancel; leave FX_BridgeTest open with no dialog. No Save, Undo, Regenerate, asset/Form Script/component edit, runtime, or button activation.

## 1. Inputs read before action

- `evidence/EXP-131/T8-ordinary-form-save-summary.md` (Save: one click, `ok`, Save/Undo/Redo disabled afterward).
- `evidence/EXP-131/T7-user-control-component-summary.md`, `T6-web-user-control-asset-summary.md`, `T5-form-script-fx-echo-summary.md` (expected state and candidate contents).
- The Designer reopen route was taken from the Form menu's recent-Form list (see section 3). No separate reopen procedure file was read.
- `UserControl.js` was NOT opened or inspected.

## 2. Preflight (fresh snapshot, read-only)

| Check | Readback | Result |
| --- | --- | --- |
| Tab | Tab list read first, then tab 0 selected; `tab [selected]` heading `FX_BridgeTest` (`t9-00-designer-fresh-preflight-snapshot.md`) | Matches |
| Name / Version | Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` | Matches T2-T8 |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | User |
| Save / Undo / Redo | `button "Save" [disabled]`, `Undo [disabled]`, `Redo [disabled]` | Clean (post-T8 Save) |
| Script Language | Form tab: `Visual C#` | Matches |
| Components | `Pane (00)` > `FX_BridgeControl` (UserControl) | Matches T7/T8 |
| Dialogs | none in snapshot | Clean |
| Console | `2 errors, 0 warnings` | Baseline |

Preflight passed.

## 3. Close and reopen (lifecycle, one each)

1. **Close (one):** clicked the Form-tab close control `closable FX_BridgeTest` (the tab's own close button, not the top-toolbar Delete or any Form-definition command). Response: the tab list became empty; no save prompt; no dialog. Snapshot `t9-01-after-form-close-snapshot.md`; screenshot `t9-02-designer-after-form-close-no-dialog.png` (empty Designer canvas, Save/Undo disabled, User scope in the status bar).
2. **Reopen (one):** clicked the Form menu (`Form`), then the recent-Form item `FX_BridgeTest` in the menu's recent list. The menu list showed `FX_BridgeTest`, `FX_CustomerPortal`, `FX_Orders`, `EX_Items`, `FX_Items`, `FX_FlexProbe01` and others; the Select Form dialog was not used. Response: URL gained `MGForm=FX_BridgeTest`; the tab `FX_BridgeTest` reappeared; console 2/0. Snapshot `t9-03-reopened-form-readback-snapshot.md`.
   - Note: a find for `Select Form` found no matching element (the Form menu has no item with that label in this build). The recent-list item is the route used.

## 4. Readbacks after reopen (read-only)

- **Identity:** Name `FX_BridgeTest` (Properties Name, `t9-04`); tab heading `FX_BridgeTest`; URL `MGForm=FX_BridgeTest`.
- **User version:** `User version for user anton.ramos@3mworks.com.ph` (find readback; truncated in the image as `User version for us...`).
- **Script Language:** `Visual C#` (Form properties; `t9-04`, `t9-18`).
- **Scope:** `ScopeType: User` (status bar).
- **Save / Undo / Redo:** Save `[disabled]`, Undo `[disabled]`, Redo `[disabled]` (`t9-03`, `t9-20`).
- **Components (`t9-06`, `t9-07`):** after reopen, Pane (00) was collapsed. I expanded the grid with the Components-grid Expand control (view only). Result: `Pane (00)` with a child row `FX_BridgeControl | UserControl | Pane 0 | Tab 0`. Exactly one UserControl; no other component.

### UserControl reference (`t9-08`, `t9-09`, `t9-10`)

- Selected `FX_BridgeControl` (Properties header `FX_BridgeControl (ActivexControl)` shows the known header lag; Name cell reads `FX_BridgeControl`; Type `UserControl`).
- **User Control Name expression, exact:** `V(UserCtrl_FX_BridgeControl)`. **This differs from T7**, where it read `V(UserCtrl_userControl1_USER)`. The reference was re-keyed to the renamed component after the Save and reopen. Observed; not edited.
- Opened `Edit User Control References` read-only (the ellipsis) and closed it with **Cancel**:
  - Windows: Assembly `<Not Applicable>`; Class Override `<Not Applicable>`; **Use Web Control checked**.
  - Web: Assembly blank; Class Override blank; **Control URL `FX_Bridge/index.html`**.
  - URL radios (Relative / Absolute / Web User Control Asset) are disabled in the accessibility tree. In the screenshot `t9-10`, the Web User Control Asset radio shows a dot (selected state visual only; disabled).
- Accessibility readback gives no checked state for the radio; the visual dot is the only indication.

### Generated Form variables (`t9-11`, `t9-12`, `t9-15`; read-only, none edited)

- Before expansion, Variables showed three categories: `Form - Persistent`, `Global - Persistent`, `Global - Temporary`. **The `Form - Persistent` category is new relative to T7**, which showed only the two Global categories.
- Expanded `Form - Persistent` (view only). It lists six Form-level variables:
  - `UserCtrl_FX_BridgeControl`
  - `UserCtrl_userControl1_USER` (stale; from the pre-rename name)
  - `UserCtrlAsm_FX_BridgeControl`
  - `UserCtrlAsm_userControl1_USER` (stale)
  - `UserCtrlUrl_FX_BridgeControl`
  - `UserCtrlUrl_userControl1_USER` (stale)
- Observation: the Save generated variables for **both** the current name and the pre-rename name. The stale `userControl1_USER` set was not removed. Nothing was edited or deleted. Whether the stale set is harmful is unresolved.

## 5. Web User Control Asset, read-only (`t9-13`, `t9-14`, `t9-15`)

- Opened Edit > Web User Control Assets (the dialog `Global Objects`). Top level: `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`. `FX_Bridge` folder expanded: child `index.html` (still present).
- Selected `index.html`; Properties Content row, Open Edit Property Dialog (read-only). Edit Browser File dialog: File `FX_Bridge/index.html`; Content Type `text/html`.
- Stored content (accessibility text, `t9-14`; screenshot `t9-15`) matches the T6 candidate exactly:
  - `<script type="text/javascript" src="../$app/scripts/UserControl.js"></script>` (one dependency)
  - `<button type="button" id="FX_BridgeButton">FX Bridge Test</button>` (one button)
  - `<div id="FX_BridgeOutput"></div>` (one output element)
  - `WSForm.invoke("FX_Echo", "bridge-probe", function (result) { document.getElementById("FX_BridgeOutput").textContent = result; });` (the candidate call; **not verified**)
- The editor's textbox was focused; nothing was typed. Closed the Edit Browser File dialog with **Cancel**, then closed Global Objects with **Cancel** (no OK on either).
- Cancel-control note: the Edit Browser File Cancel was clicked by ref e1733 (the snapshot's Cancel; OK was e1731). The tool's resolved selector ID for that click was `#mgformbutton-2775-btnInnerEl`, which does not itself show the label. The visible outcome was that the Edit Browser File dialog closed and Global Objects remained open; Global Objects was then closed with its Cancel. No content change was typed.

## 6. Form Script, read-only (`t9-16`, `t9-17`, `t9-18`, `t9-19`)

- Form properties tab selected; the Properties toolbar pencil (`#btnEditDownload`) opened `Script Editor`. Editor text (line structure from the rendered lines and accessibility text):
  ```
  1  using System;
  2  using Mongoose.IDO.Protocol;
  3  using Mongoose.Scripting;
  4
  5  namespace Mongoose.FormScripts
  6  {
  7      public class FX_BridgeTest : FormScript
  8      {
  9          //
  10         // Methods go here
  11         //
  12
  13         public string FX_Echo(string s)
  14         {
  15             return "FX_ECHO:" + s;
  16         }
  17     }
  18 }
  19
  ```
  Scaffold preserved (namespace, class `FX_BridgeTest : FormScript`, the comment block). Exactly one method, `public string FX_Echo(string s)`, returning `"FX_ECHO:" + s`. Indentation drift from T5 remains cosmetic.
- **Compile Result (expanded, view only):** Output tab empty (no success message). Errors tab: grid headers `Line | Column | Error` with **no rows**. No compile error is displayed. Compilation is still **not confirmed** (no success output either).
- Closed the editor with **Cancel** only. No OK, no change.

## 7. Final state (`t9-20`)

- Designer: tab `FX_BridgeTest` selected; Save, Undo, Redo disabled; `ScopeType: User`; no dialog element in the snapshot.
- Details panel now shows the Variables tab (view state only).
- Form remains open for the coordinator's next step.

## 8. Actions and reads (T9, exact)

- **Browser actions: 27.** Tab select 1; clicks 24; key presses 2 (ArrowRight: Pane row focus, FX_Bridge folder expand); text entries 0.
  - Clicks 24: Form-tab close 1; Form menu 1; recent-list `FX_BridgeTest` 1; Details Expand Panel 1; Components tab 1; Pane (00) tree item 1; Components Expand 1; FX_BridgeControl tree item 1; User Control Name ellipsis 1; reference dialog Cancel 1; Details Variables tab 1; Form - Persistent category row 1; Edit menu 1; Web User Control Assets menu item 1; FX_Bridge folder 1; index.html 1; Open Edit Property Dialog 1; Edit Browser File Cancel 1; Global Objects Cancel 1; Properties Form tab 1; Properties pencil (Script Editor) 1; Compile Result Expand 1; Compile Result Errors tab 1; Script Editor Cancel 1.
  - Reconciliation: 1 (tab select) + 24 + 2 = 27.
- **Browser reads: 43.** Tab list 1; snapshots 13; finds 21; screenshots 8. Reconciliation: 1 + 13 + 21 + 8 = 43.
- **Lifecycle:** Form close 1; Form reopen 1 (recent list); Designer Save 0; Undo 0; Redo 0; Regenerate 0; Delete (top toolbar) 0; Check In/Out 0; runtime open 0; button activation 0.
- **Mutations:** none. No Save, no asset commit, no Form Script commit, no reference OK. All editor and dialog closures were Cancel.
- **Recovery allowance:** not used in T9 (no "Ref not found", no timeout, no failed action). Exhausted since T2.
- **Browser JavaScript / evaluate / run-code written by the worker: 0.** `Ran Playwright code` blocks are generated by the tool per action.
- **Console:** Designer `2 errors, 0 warnings` at every T9 reading (start, after close, after reopen, after each dialog, final). The tab-list events created `evidence/playwright/console-2026-10-25T13-23-10-862Z.log` (tool-generated, cumulative for the session, not like-for-like with the Designer counter, not copied into evidence).

## 9. Evidence files (T9)

Worker-named (under `evidence/EXP-131/`):
- `t9-00-designer-fresh-preflight-snapshot.md`: preflight; Save disabled; Name, Version, User scope, Visual C#, Pane + FX_BridgeControl (snapshot text). Proves the pre-close state from accessibility text.
- `t9-01-after-form-close-snapshot.md`: tab list empty; no dialog text.
- `t9-02-designer-after-form-close-no-dialog.png`: closed Designer canvas; Save/Undo greyed; User scope. Proves the closed state and no dialog. Does not prove the saved definition.
- `t9-03-reopened-form-readback-snapshot.md`: reopened tab; URL `MGForm=FX_BridgeTest`; Save/Undo/Redo disabled.
- `t9-04-reopened-form-visible-state.png`: reopened Form; Name `FX_BridgeTest`; Version (truncated); Script Language `Visual C#`; Save disabled; Components collapsed at the bottom. Proves identity and Visual C# after reopen. Does not show the component list (Details collapsed).
- `t9-05-details-expanded-snapshot.md`: Details expanded; Components tab ref.
- `t9-06-components-after-reopen.png`: Components grid with Pane (00) collapsed. Proves only Pane (00) is visible before expansion; does not show the child row.
- `t9-07-components-pane-collapsed-snapshot.md`: Expand control ref.
- `t9-08-component-selected-properties-snapshot.md`: FX_BridgeControl selected; Specific Attributes; User Control Name `V(UserCtrl_FX_BridgeControl)`.
- `t9-09-user-control-references-readonly-snapshot.md`: dialog accessibility text (Use Web Control checked; Control URL `FX_Bridge/index.html`; radios disabled).
- `t9-10-user-control-references-readonly-dialog.png`: dialog screenshot before Cancel. Proves Use Web Control and Control URL; shows the Web User Control Asset radio dot (visual only). Also shows the Components row `FX_BridgeControl | UserControl | Pane 0 | Tab 0` and the User Control Name value.
- `t9-11-variables-tab-after-reopen.png`: Variables tab; `Form - Persistent` category present (collapsed) with the Global categories. Proves the Form category now exists; does not show its rows.
- `t9-12-variables-form-category-snapshot.md`: accessibility text of the expanded `Form - Persistent` rows (six `UserCtrl*` names listed above).
- `t9-13-web-assets-dialog-snapshot.md`: Global Objects Web Assets tree (`$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`).
- `t9-14-edit-browser-file-readonly-snapshot.md`: stored `index.html` content (accessibility text, full).
- `t9-15-asset-edit-browser-file-readonly.png`: Edit Browser File screenshot; full HTML visible (DOCTYPE through `</html>`); behind it the Form - Persistent variables list. Proves the stored asset content as displayed. Does not prove runtime behavior.
- `t9-16-form-properties-before-script-snapshot.md`: Form properties toolbar refs before the Script Editor.
- `t9-17-script-editor-readonly-snapshot.md`: Script Editor accessibility text (rendered lines 1-19; Compile Result collapsed).
- `t9-18-script-editor-readonly-compile-result.png`: Script Editor with the 19-line script and the Compile Result panel expanded (Output tab empty). Proves the script text and the empty Output. Does not prove compilation.
- `t9-19-script-editor-compile-errors-tab.png`: Errors tab selected; no rows. Proves no error row is displayed. Does not prove success.
- `t9-20-final-designer-clean-snapshot.md`: final state; Save/Undo/Redo disabled; one tab; no dialog.

Tool-generated (not worker-named): `evidence/playwright/page-2026-10-25T13-23-20-362Z.yml` through `page-2026-10-25T13-26-00-674Z.yml` (per-action snapshots), `evidence/playwright/console-2026-10-25T13-23-10-862Z.log`.

Not touched: the two T6 snapshots `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml` and `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml` (operator disposition pending).

## 10. Acceptance (T9 view)

- **AC-1:** preflight in section 2 (account identity, User scope, clean Designer, console 2/0). The T1 account-isolation gate is unchanged; not re-run.
- **AC-2:** supported. `t9-02`, `t9-04`, `t9-20` show FX_BridgeTest identity, User scope and Save disabled after reopen.
- **AC-3:** supported by a separate read-only asset readback (`t9-14`, `t9-15`): the dependency, one button, one output element, and the candidate `WSForm.invoke` call. Still candidate, not verified at runtime.
- **AC-4:** supported. One FX_BridgeControl UserControl (expanded inventory in the find readback after Expand, and visible behind the dialog in `t9-10`); reference Use Web Control with `FX_Bridge/index.html`; the Script Editor shows exactly one `FX_Echo` method with the specified signature and prefix return (`t9-17`, `t9-18`).
- **AC-5:** partial. Ordinary Save (T8) → one close (T9) → one supported reopen (T9) → readbacks of Form identity, User version, UserControl reference and the FX_Echo method (T9). The asset was read back independently. Claim limit: a same-session UI boundary, not database-level durability.
- **AC-6:** not reached (no runtime in T9).
- **AC-7:** partial. No dialog open; Save disabled; no worker-attributable unsaved change. FX_BridgeTest remains open as instructed; the runtime-Form close is not yet applicable.
- **AC-8:** accounting in section 8; the manifest follows the runtime step.

## 11. Limitations and unresolved items

- **Compilation of `FX_Echo`:** not confirmed. Output and Errors are both empty when the editor was opened after reopen. No compile run was observed or triggered. Status unresolved.
- **Stale generated variables:** the Save generated `UserCtrl*_userControl1_USER` alongside the current `UserCtrl*_FX_BridgeControl` set. Whether the stale set affects runtime is unresolved.
- **Radio state:** the Web User Control Asset selection is visible only as a dot (the radio is disabled in the accessibility tree).
- **Regenerate Form** was observed enabled before T8's Save and disabled after; cause unexplained. Not invoked in T9.
- **Persistence:** all readbacks are same-session UI evidence after a single reopen, not backend durability.
- **WSForm.invoke contract, callback delivery, runtime behavior:** unverified (candidate only).
