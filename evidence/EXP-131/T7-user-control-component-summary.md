# EXP-131 T7 - UserControl FX_BridgeControl added to FX_BridgeTest and bound to FX_Bridge/index.html (no Form Save, no runtime) (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=8`, `task=T7`. Bounded instruction: confirm FX_BridgeTest open at User scope with Script Language Visual C#, Save enabled from the pending configuration, no dialog, console 2 errors / 0 warnings; add exactly one UserControl component and name it FX_BridgeControl; configure Edit User Control References (Use Web Control, Web User Control Asset, FX_Bridge/index.html); inspect generated UserCtrl variables by readback only; do not Form-Save, reopen Form Script, edit the asset, invoke runtime, or close/reopen the Form. The browser recovery allowance was exhausted at T2 and was not used in T7.

## 1. Inputs read before action

- `evidence/EXP-131/T6-web-user-control-asset-summary.md` (asset `FX_Bridge/index.html` committed; Save not performed; persistence unresolved).
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md`, lines 172-213 and 240 (EXP-128 UserControl `userControl1_USER`: Specific Attributes > User Control Name; Edit User Control References dialog layout; generated UserCtrl_/UserCtrlAsm_/UserCtrlUrl_ Form variables). Read-only; the dialog and variable structure is a candidate reference, not a verified recipe for this build.
- `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md`, lines 395-404 and 495-502 (T5 rebuild specification: `FX_userControl1_USER -> FX_Login/index.html` pattern; generated Form variables are listed as "Designer-generated FX_ equivalent [PROP]").
- `recipes/components/add-component-from-toolbox.md` (Toolbox row select, then one canvas click; verified for Static/Edit/Button only) and `recipes/components/configure-basic-component.md` (double-click value cell, select-all, type, Enter; header may lag).
- `UserControl.js` was NOT opened or inspected.

## 2. Pre-mutation gates (fresh snapshot at T7 start; read-only)

| Check | Readback | Result |
| --- | --- | --- |
| Tab | Tab list read first, then tab 0 selected; selected Designer tab heading `FX_BridgeTest` (Designer `designer/Default.aspx` URL; the URL carries no `MGForm` parameter, so identity rests on the heading, Properties Name and status bar) | Matches |
| Form identity | Properties Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (same version text recorded in T1/T6) | Matches |
| Scope | Status bar `[ ScopeType: User / ScopeName: ... ]` (same User ScopeName as T1/T6) | User |
| Script Language | Form Properties `Script Language` = `Visual C#` (snapshot) | Matches T4/T5 |
| Save / Undo | Top toolbar `Save` enabled (not disabled in snapshot); `Undo` disabled at start (greyed in `t7-00`) | Dirty from pending Form configuration, as expected |
| Components | `Pane (00)` only | Matches T6 |
| Dialogs | none open | Clean |
| Console | Designer `2 errors, 0 warnings` | Baseline |

Gates passed. Mutation proceeded.

## 3. Actions (in order) and responses

1. Toolbox row `UserControl` (under Framework Components) selected (click). Response: row armed; no dialog.
2. Single canvas click at an empty point (`500,250` in viewport coordinates) per the add-component recipe. Response: one component created, auto-named `userControl1_USER`, Type `UserControl`, selected. Snapshot: Components grid shows `Pane (00)` > `userControl1_USER` (UserControl; Pane 0; Tab 0). Properties Type `UserControl`; From Device Master `True`. Designer now dirty (Undo enabled).
3. Name value cell double-clicked (inline editor opened, active textbox showed `userControl1_USER`). Ctrl+A (selection). Typed `FX_BridgeControl` (key events). Read back before commit: inline editor value `FX_BridgeControl`. Enter (commit).
4. Response: Components grid row now `FX_BridgeControl` (UserControl; Pane 0; Container blank; Tab 0); Properties Name `FX_BridgeControl`. The Designer header still displayed `userControl1_USER (ActivexControl)` (the known lag noted in configure-basic-component.md); not relied on.
5. Properties group `Miscellaneous`: the row was clicked (selected only, not expanded), ArrowRight moved focus to its value cell (not expanded), then one click on its chevron expanded it. Group reveals `Extension Properties`, `Specific Attributes`, `Free-Form Data`.
6. `Specific Attributes` expanded (one chevron click). Rows: `User Control Name` = `V(UserCtrl_userCo...)`, `Group` False, `Need Right-Click` False.
7. Two non-mutating attempts that did not change the view: the Properties "Search Properties" box was typed `User Control` and Enter pressed (no filtering effect); the text was cleared with Ctrl+A and Backspace. No property value changed.
8. `User Control Name` ellipsis clicked once. Response: dialog `Edit User Control References` opened.
9. Pre-commit readback (targeted snapshot of the dialog, screenshot `t7-06`): Windows section: Assembly Name `<Not Applicable>` (ellipsis disabled), Class Override `<Not Applicable>`, **Use Web Control checked**. Web section: Assembly Name blank, Class Override blank, **Control URL blank**. URL-type radios `Relative URL`, `Absolute URL`, `Web User Control Asset` all disabled in the accessibility tree; the visual dot sits on `Web User Control Asset` (same pattern as EXP-128; checked state is not exposed in the accessibility tree).
10. Control URL combobox opened (click). Response: option list of `mongoose/controls/*.html` built-in entries (screenshot `t7-07`). A read-only dialog-scoped find located the option `FX_Bridge/index.html` in the listbox (only one FX_Bridge option present).
11. Option `FX_Bridge/index.html` selected (click). Readback before OK (screenshot `t7-08`; dialog snapshot): Control URL combobox value `FX_Bridge/index.html`; Use Web Control checked; Web User Control Asset radio dot unchanged.
12. Edit User Control References OK (click). Response: dialog closed; a Mongoose information alert appeared: "Infor Mongoose Application Development Framework - Edit User Control References. You will need to regen this form (save the form definition and re-open it) to see the effect of this change." (screenshot `t7-09`).
13. Information alert OK (click). Response: alert closed; no further dialog (screenshot `t7-10`). No Save was clicked, as the brief requires.
14. Details tab `Variables` selected (click, view only). Readback (screenshot `t7-11`): categories shown are only `Global - Persistent` and `Global - Temporary`. **No Form - Persistent or Form - Temporary category row is visible**, so the Designer-generated `UserCtrl_*` variables were not visible at this stage. Not expanded or edited.
15. Post-commit readback: `User Control Name` ellipsis clicked (click) to reopen the dialog read-only. Snapshot of dialog: Use Web Control checked; Control URL combobox `FX_Bridge/index.html`; Web User Control Asset radio dot shown (disabled). Closed with **Cancel** (click); no OK. Final screenshot `t7-12`: no dialog open.

## 4. Configuration state after T7 (observed)

- Components grid (screenshot `t7-09`/`t7-10`): `Pane (00)` > `FX_BridgeControl` (Type `UserControl`; Pane 0; Tab 0). Exactly one UserControl component plus the existing Pane (00).
- FX_BridgeControl Properties: Name `FX_BridgeControl`; Type `UserControl`; From Device Master `True`.
- Specific Attributes > `User Control Name` = `V(UserCtrl_userCo...)`. **The value still names the pre-rename component `userControl1_USER` (`V(UserCtrl_userControl1_USER)` in the find readback).** The rename did not re-key the generated variable reference in this view. Whether the Form-level variable name changes after an ordinary Save is **unresolved**; not edited (brief: do not manually edit or create variables).
- Edit User Control References (post-commit readback): Use Web Control checked; Control URL `FX_Bridge/index.html`; Web User Control Asset radio shows its dot (disabled in accessibility tree; its checked state is only visually indicated).
- Form Script (FX_Echo, Visual C#): not reopened in T7 (brief). No edit was made to it.

## 5. Save / Undo / console (T7)

- **Ordinary Designer Form Save: NOT performed** (T7 boundary). Save remains enabled (intended pending state). Undo is enabled after the component and reference changes (screenshot `t7-10`, `t7-12`).
- Designer counter: `2 errors, 0 warnings` at every reading (start, after placement, after rename, after reference OK, after alert OK, final).
- Tool-written console log `evidence/playwright/console-2026-10-25T13-12-29-219Z.log` (created at the T7 tab listing; cumulative for the Web Client session): 5 `[ERROR]` lines, all `Permissions policy violation: unload is not allowed` (same class as the Designer baseline); 10 `[WARNING]` lines: 1 origin-trial feature warning and 9 widget-deprecation warnings from the portal home (`WidgetLoaderComponent`). These are cumulative session entries and are not like-for-like with the Designer counter. The log also contains a sign-on user identifier line, which was **not** copied into this evidence.
- No new error class appeared in the Designer counter. Stop rule not triggered.

## 6. Actions and reads (T7, exact)

- **Browser actions: 23** (tab select 1; clicks 14; key presses 6; text entries 2), all returned ok, none timed out.
  - Clicks 14: Toolbox UserControl row 1; canvas click 1; Name value double-click 1; Miscellaneous row 1; Miscellaneous chevron 1; Specific Attributes chevron 1; User Control Name ellipsis 2 (open and reopen); Control URL combobox 1; option FX_Bridge/index.html 1; reference-dialog OK 1; information alert OK 1; Details Variables tab 1; reference-dialog Cancel 1.
  - Key presses 6: Ctrl+A 2 (inline Name editor; search clear), Enter 2 (inline commit; search box), ArrowRight 1, Backspace 1.
  - Text entries 2: Name `FX_BridgeControl` (slow key typing into the inline editor); search box `User Control` (no effect).
  - Reconciliation: 1 + 14 + 6 + 2 = 23.
- **Browser reads: 33** (tab list 1; snapshots 7; finds 12; screenshots 13). Reconciliation: 1 + 7 + 12 + 13 = 33.
- Recovery allowance: **not used** (no "Ref not found", no timeout). Remains exhausted from T2.
- Browser JavaScript written by the worker: **0**. The `Ran Playwright code` blocks in tool output are generated by the MCP tool per action and are not worker-authored scripts.
- Shared `UserControl.js`: not read or inspected. Other Mock/FX_InventoryPrototype01 objects: not touched.
- Designer Save: 0. Undo / Redo: 0. Delete (top toolbar): 0. Regenerate: 0. Check In/Out: 0. Session expiry: none.

## 7. Evidence files (T7)

- `evidence/EXP-131/t7-00-designer-preflight-before-component.png`: Designer before placement. FX_BridgeTest; Script Language Visual C#; Components `Pane (00)` only; Save active; Undo greyed; no dialog; status bar User scope. Proves the pre-mutation state. Does not prove the saved state or script compilation.
- `evidence/EXP-131/t7-01-properties-miscellaneous-after-expand-click.png`: after the component was placed and renamed. Components grid `FX_BridgeControl` (UserControl) under Pane (00); canvas shows the placed control box; Properties Name `FX_BridgeControl`, Type `UserControl`; `Miscellaneous` row selected but still collapsed. Proves identity and placement. Does not prove the reference.
- `evidence/EXP-131/t7-02-properties-miscellaneous-after-arrowright.png`: ArrowRight moved focus to the Miscellaneous value cell; group still collapsed. Proves only the view state.
- `evidence/EXP-131/t7-03-properties-search-user-control.png`: Search Properties box containing `User Control`; the property list was not filtered. Proves the search text only.
- `evidence/EXP-131/t7-04-properties-miscellaneous-after-chevron-click.png`: Miscellaneous expanded: Extension Properties, Specific Attributes, Free-Form Data. Proves group expansion.
- `evidence/EXP-131/t7-05-properties-specific-attributes-expanded-before-reference.png`: Specific Attributes expanded; User Control Name `V(UserCtrl_userCo...)` with its ellipsis button. Proves the entry point. The value is truncated in the image; the full text (`V(UserCtrl_userControl1_USER)`) is from the find readback.
- `evidence/EXP-131/t7-06-edit-user-control-references-pre-commit.png`: dialog before commit. Use Web Control checked; Web Control URL blank; radios disabled; dot on Web User Control Asset. Proves the pre-commit configuration. Does not prove the radio's checked state in the accessibility tree.
- `evidence/EXP-131/t7-07-control-url-combobox-opened.png`: Control URL dropdown with built-in `mongoose/controls/*.html` entries (the top of the list). Proves the list type; `FX_Bridge/index.html` is not visible in this capture (it was located by a dialog-scoped find, recorded in the accessibility readback).
- `evidence/EXP-131/t7-08-user-control-references-after-select-before-ok.png`: Control URL shows `FX_Bridge/index.html`; Use Web Control checked; radio dot unchanged. Proves the selected value before OK. Does not prove the commit.
- `evidence/EXP-131/t7-09-after-user-control-references-ok.png`: after OK. Mongoose information alert about needing regen (save then reopen) to see the change; the Components grid behind shows `FX_BridgeControl` (UserControl). Proves the alert text and that the component remains. Does not prove the stored reference beyond the post-commit readback in step 15.
- `evidence/EXP-131/t7-10-designer-after-info-alert-dismissed.png`: alert dismissed; no dialog; Components `FX_BridgeControl` (UserControl) and `Pane (00)`; Save and Undo active. Proves the clean dialog state and the dirty state. Does not prove any Save.
- `evidence/EXP-131/t7-11-details-variables-tab.png`: Details > Variables. Only `Global - Persistent` and `Global - Temporary` rows are visible; no Form category row. Proves that no Form-level generated variable is visible before a Save. Does not prove the variables will not appear after a Save.
- `evidence/EXP-131/t7-12-final-designer-after-cancel-no-dialog.png`: final state after the read-only dialog was closed with Cancel. No dialog; Save and Undo active; a hover tooltip (`Open Edit Property Dialog`) is residue from the cursor position. Proves a clean dialog state.

Accessibility readbacks (not images): the dialog snapshot before commit, after selection, after OK (post-reopen) are in the T7 action log above; their refs were current at each read.

Not written: no snapshot file with a worker-chosen `filename` was produced in T7. Tool-generated per-action snapshot files `evidence/playwright/page-2026-10-25T13-12-55-179Z.yml` through `page-2026-10-25T13-15-17-509Z.yml` and the console log file are automatic tool artifacts, not worker-named. The two T6 snapshots under `evidence/playwright/t6-snapshot-*.yml` were not modified, moved, or deleted.

## 8. Acceptance (T7 view)

- **AC-1:** unchanged (T1 gates; re-checked at T7 start in section 2).
- **AC-2:** partial. The Designer shows FX_BridgeTest identity and User scope; no unrelated Form was created; the Form is unsaved by design.
- **AC-3:** unchanged from T6 (asset HTML readback in T6). T7 did not edit or re-read the asset.
- **AC-4:** partial. Exactly one `FX_BridgeControl` (UserControl) component plus `Pane (00)` is visible (`t7-09`, `t7-10`). The reference dialog shows Use Web Control checked and Control URL `FX_Bridge/index.html` (`t7-06`, `t7-08`, post-commit readback). The C# `FX_Echo` method was not re-read in T7 (brief: do not reopen Form Script).
- **AC-5:** not reached (no ordinary Form Save, no close/reopen).
- **AC-6:** not reached (no runtime).
- **AC-7:** partial. No dialog is open; Designer Save is enabled with worker-attributable unsaved changes (intended until the next Save task).
- **AC-8:** accounting in section 6; manifest deferred to the final record.

## 9. Created-artifact inventory (for possible operator-authorized cleanup; updates T6)

1. Form `FX_BridgeTest` (User scope, classic BuildFromScratch) (T2). Open, unsaved.
2. Form Script method `FX_Echo` in the `FX_BridgeTest` C# class (T5). Committed in the editor; part of the unsaved Form.
3. Web User Control Asset `FX_Bridge/index.html` with folder `FX_Bridge` (T6). Committed through the asset-editor OKs; persistence not confirmed.
4. UserControl component `FX_BridgeControl` (named from `userControl1_USER`) on `FX_BridgeTest` (T7). Unsaved. Its Specific Attributes `User Control Name` = `V(UserCtrl_userControl1_USER)` (Designer-generated reference, not edited).
5. Designer-generated UserCtrl Form variables (`UserCtrl_*`, `UserCtrlAsm_*`, `UserCtrlUrl_*`): **not observed** in the Variables readback before a Save; to be checked after the next Save. Not created or edited manually.

## 10. Limitations and unresolved items

- The Designer information alert states the change is only visible after the Form definition is saved and re-opened. No Save was performed, so the reference's effect on the Form definition is unverified.
- The `User Control Name` variable reference still uses the pre-rename component name (`userControl1_USER`). Whether the next Save regenerates it under `FX_BridgeControl` is **unresolved**.
- The radio state for `Web User Control Asset` is shown only by its visual dot; it is disabled in the accessibility tree and its checked state is not exposed. The Control URL text is the verified readback.
- The `WSForm.invoke` contract, callback delivery and runtime behavior remain **unverified** (candidate only).
- Asset persistence without an ordinary Form Save remains **unresolved**.
- The console comparison is between the Designer counter (2/0, unchanged) and a cumulative session log; the two are not like-for-like.
