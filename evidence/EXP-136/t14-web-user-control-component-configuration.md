# EXP-136 T14 - UserControl `FX_InventoryControl` on `FX_InventoryDashboard` (component configuration only; no Form Save)

Run R-20261026-062909-9GoC, cycle 19, task T14. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User (`anton.ramos@3mworks.com.ph`), configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Scope of this task

- One UserControl component placed on the open `FX_InventoryDashboard` Form (Toolbox `UserControl` row, one canvas click), renamed `FX_InventoryControl`, Web Control reference set (Use Web Control checked; Control URL `FX_Inventory/index.html`), Layout Size set to 100 by 30 characters.
- Not done (by brief): Form Script method `FX_LoadInventoryFromIDO`, ordinary Designer Form Save, close or reopen, Portal reload, runtime open or Refresh, browser JavaScript, Enter key commits, Caption or Script Language correction, Regenerate Form, any variable or asset change, any non-FX_ change.

## 2. Preflight (observed, before any mutation)

| Check | Observed result | Evidence |
| --- | --- | --- |
| Tabs | Tab 0 = Web Client (`favoriteContext=FX_InventoryEditor`). Tab 1 = Designer, `designer/Default.aspx`, title with `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, URL `MGForm=FX_InventoryDashboard`. | tab list (before select) |
| Selected tab | Tab 1 selected after the list (select succeeded); fresh snapshot taken. | tool tab-list and select results; snapshot files named below |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t14-preflight-designer-form-properties-before-component.png` |
| Form identity | Tab heading `FX_InventoryDashboard`; Name `FX_InventoryDashboard`; Version `User version for user anton.ramos@3mworks.com.ph`; Form Type Normal; Is Master True; Size `120; 40`. | snapshot `evidence/playwright/page-2026-10-26T00-59-48-590Z.yml`; `t14-preflight-designer-form-properties-before-component.png` |
| Form Caption and Script Language (read-only, not corrected) | Caption `FX_InventoryDashboard` (text in the Caption row); Script Language `Visual C#`. | snapshot `page-2026-10-26T00-59-48-590Z.yml`; screenshot |
| Dialog or prompt | None open. Console `2 errors, 0 warnings` (unchanged from T13). | snapshots |
| Existing components | Canvas empty. Details > Components grid shows only `Pane (00)` with no child rows. No `FX_InventoryControl` pre-existed. | `t14-components-grid-precheck-no-control.png` |
| Save state before placement | Enabled (inherited T11/T12/T13 pending state; not clicked). | snapshot `page-2026-10-26T00-59-48-590Z.yml` |

Gates passed: identity, User scope, Form present, no collision, no dialog. Caption and Script Language were not re-corrected (T14 instruction).

## 3. Native actions (in order; each once unless stated)

| # | Action | Observed result |
| --- | --- | --- |
| A1 | Expand the collapsed Details panel (`Expand Panel`) | Details shows Collections, Components, Event Handlers, Variables, Design View Size. The canvas viewport shrank (scroll bar appeared). View only. |
| A2 | Details > Components tab | Grid: `Pane (00)` only. View only. |
| A3 | Toolbox `UserControl` row (treeitem) selected | Row selected; drop armed. |
| A4 | Canvas click at (300, 140) (coordinate click; no semantic canvas locator) | One component created: `userControl1_USER`, Type UserControl, Pane 0, Container 0. Components grid shows one row. `t14-usercontrol-placed-auto-named-precommit.png` |
| A5 | Name value cell double-clicked (inline editor opened) | Editor shows `userControl1_USER`, text selected. `t14-component-name-editor-open-precommit.png` |
| A6 | Editor textbox filled with `FX_InventoryControl` (no Enter) | Editor holds `FX_InventoryControl`. |
| A7 | Name label cell clicked to blur and commit | Properties Name `FX_InventoryControl`; Components grid row `FX_InventoryControl`, UserControl, Pane 0, Container 0. `t14-component-name-committed-blur-readback.png` |
| A8 | Properties toolbar Expand-all (first icon button) | All property groups expanded (view only). `t14-component-properties-expanded-misc-layout-groups.png` |
| A9 | Miscellaneous > Specific Attributes row selected, then ArrowRight pressed | ArrowRight moved focus to the value cell; no editor opened; no value change. `t14-specific-attributes-after-expand-arrow.png` |
| A10 | Specific Attributes chevron clicked (coordinate click; expands the group) | `User Control Name` row shown with value `V(UserCtrl_userControl1_USER)` (pre-rename name, same as EXP-131 observation). `t14-specific-attributes-after-chevron-click.png` |
| A11 | `User Control Name` ellipsis clicked (dialog open) | Dialog `Edit User Control References` opened. Windows: Assembly Name `<Not Applicable>`; Use Web Control **checked** (default); Web: Assembly Name blank, Class Override blank, Control URL blank, Web User Control Asset radio selected. `t14-edit-user-control-references-dialog-precommit.png` |
| A12 | Control URL combobox Open (arrow) clicked | List opened (options include `FX_Bridge/index.html`, `FX_Inventory/index.html`, `FX_Login/index.html`). |
| A13 | Option `FX_Inventory/index.html` clicked | Control URL shows `FX_Inventory/index.html`. `t14-edit-user-control-references-url-selected-precommit.png` |
| A14 | Dialog OK clicked (once) | Dialog closed. Info alert: "You will need to regen this form (save the form definition and re-open it) to see the effect of this change". |
| A15 | Info alert OK clicked (once) | Alert dismissed. **Regenerate Form was not clicked.** `t14-after-user-control-references-ok-state.png` |
| A16 | Layout > Size row double-clicked (value cell) | Size group expanded to Width 25, Height 5.882352941176471, Lock Size False. No composite edit. `t14-size-editor-open-precommit.png` |
| A17 | Width value cell double-clicked; editor textbox filled with `100` (no Enter); Width label cell clicked to blur | Width `100`; Size `100; 5.88235294117647`. |
| A18 | Height value cell double-clicked; editor textbox filled with `30` (no Enter); Height label cell clicked to blur | Height `30`; Size `100; 30`. `t14-component-100x30-layout-committed-readback.png` |
| A19 | `User Control Name` ellipsis clicked again (read-only reopen) | Dialog reopened: Use Web Control checked; Control URL `FX_Inventory/index.html`; Web User Control Asset radio selected. `t14-edit-user-control-references-reopen-readback.png` |
| A20 | Dialog Cancel clicked (no change) | Dialog closed without commit. |
| A21 | Details > Variables tab clicked (view only) | Variables tree shows only `Global - Persistent` and `Global - Temporary`. No Form-level category, so no Designer-generated `UserCtrl*` Form variable is visible. `t14-variables-tab-after-usercontrol-reference-precheck.png` |

Snapshots saved by the tool during T14 are under `evidence/playwright/` (for example `page-2026-10-26T01-00-20-135Z.yml`, `page-2026-10-26T01-03-02-872Z.yml`, `t14-snapshot-after-expand-all.yml`, `t14-snapshot-user-control-name-row.yml`, `t14-snapshot-after-cancel-save-state.yml`). They are read-back sources, not decisive evidence on their own.

## 4. Supported readback (same session, not saved)

| Property | Value | Source |
| --- | --- | --- |
| Component Name | `FX_InventoryControl` | Properties Design > Name; Components grid (`t14-component-name-committed-blur-readback.png`) |
| Component Type | `UserControl` | Properties Type; Components grid Type column |
| Pane / Container / Tab | 0 / 0 / 0 | Components grid |
| Count of components | **One** (`FX_InventoryControl`, under `Pane (00)`) | Components grid (`t14-components-grid-precheck-no-control.png` before, `t14-component-name-committed-blur-readback.png` after) |
| Use Web Control | **True** (checked) | Dialog readback A19 (`t14-edit-user-control-references-reopen-readback.png`) |
| Control URL | `FX_Inventory/index.html` | Dialog readback A19 (same image). The option was selected from the list (A13). |
| Web User Control Asset radio | Selected (disabled in the accessibility tree; dot visible in the image) | A19 image |
| Assembly Name (Web section) | Blank (not set; not required by the brief; same as EXP-131 precedent) | A19 image |
| Layout Unit | Char | Properties Layout |
| Size | `100; 30` (Width 100, Height 30, Lock Size False) | Properties Layout (`t14-component-100x30-layout-committed-readback.png`) |
| Location | `2.16666666666667; 5.69491525423729` (unchanged) | Properties Layout (Location row, not edited) |
| Form Size (Designer) | `120; 40` | Form properties snapshot (`page-2026-10-26T00-59-48-590Z.yml`) |
| Geometry check | 2.17 + 100 = 102.2 (< 120 columns); 5.69 + 30 = 35.7 (< 40 rows). The component stays inside the Form canvas. The canvas box is about 740 by 550 px, so the bottom part lies below the visible canvas area and needs scrolling. | Calculated from the readback above; screenshot shows the box extending past the viewport |

## 5. Save state and Designer state after configuration

- Designer Save: **not clicked**. Undo and Save buttons are **enabled** (pending changes). The snapshot shows `button "Save"` without disabled, and Undo enabled (`page-2026-10-26T01-04-41-156Z.yml`, `t14-snapshot-after-cancel-save-state.yml`).
- No dialog or alert open at the end (`Grep` on the final snapshot for dialog, alertdialog and alert: no match).
- Designer Details panel left expanded on the Variables tab (view state; harmless).
- Browser console: `2 errors, 0 warnings` before placement and at the end (unchanged).

## 6. Observations and warnings (no cause invented)

1. **Page URL changed after the reference OK.** Before the dialog, the Designer URL ended with `&MGForm=FX_InventoryDashboard`. After the reference OK and afterwards, the Page URL no longer shows `&MGForm=...`. The tab heading and scope still show `FX_InventoryDashboard`. Cause unexplained. Not reloaded.
2. **Regenerate info alert.** The reference OK produced the same "You will need to regen this form (save the form definition and re-open it) to see the effect of this change" alert seen in EXP-131. Dismissed with its OK only. Regenerate Form not clicked. The effect of the reference on the saved definition is not established until the ordinary Save and fresh reopen (AC-9).
3. **Stale User Control Name value.** The Specific Attributes > `User Control Name` row still reads `V(UserCtrl_userControl1_USER)` after the rename to `FX_InventoryControl` and after the reference change. The Properties header first lagged (`userControl1_USER (ActivexControl)`) and updated to `FX_InventoryControl (ActivexControl)` after the Width commit. Whether Save re-keys the User Control Name to `UserCtrl_FX_InventoryControl` is **unresolved** (EXP-131 had the same open question).
4. **Designer-generated Form variables.** None visible in the Variables tree after the reference change (A21). The EXP-131 note says such variables appear only after a Save. Not verified in T14.
5. **Keyboard focus.** ArrowRight on the selected Specific Attributes row moved focus to its value cell and did not expand the row. The chevron click expanded it. No value changed.
6. **Expand-all.** The Properties Expand-all control expanded every group. Visible content changed only in the view.
7. **Blur-based commits.** Name, Width and Height were each committed by a label-cell click after typing (no Enter). The Components grid and Properties Name confirmed the Name commit; the Layout readback confirmed Width and Height.
8. **Canvas geometry.** The 100 by 30 box fits in the 120 by 40 Form, but the bottom part is outside the visible canvas area after the Details panel was expanded. Rendering-only; no effect on the saved definition.

## 7. Mutation and browser ledger (T14)

- Components created: **1** (`FX_InventoryControl`, UserControl). Components deleted: 0.
- Component property commits: **Name 1**, **Control URL 1** (via dialog OK), **Width 1**, **Height 1**. Total committed component edits: 4.
- Edit User Control References dialog OKs: **1**. Dialog cancels: 1 (read-only reopen, no change). Info alert OKs: 1.
- Regenerate Form: **0**. Form Script methods: **0**. Variables created: **0**. Web User Control Assets created or edited: **0**. Caption or Script Language changes: **0**.
- Designer Saves: **0**. Form close or reopen: **0**. Portal reloads: **0**. Refresh or runtime activations: **0**. Enter presses: **0**. Browser JavaScript or run-code: **0**. Credentials read or typed: **0**. Session recovery: **0**. Event handlers or bindings: **0**.
- Browser actions (approximate, from the T14 tool-call sequence): tab list 1; tab select 1; clicks about 22 (Details expand, Components tab, Toolbox row, Name double-click and blur, Expand-all, Specific Attributes row, chevron, ellipsis x2, Control URL Open, option, OK, alert OK, Size/Width/Height double-clicks and blurs, Cancel, Variables tab); key presses 1 (ArrowRight); typed values 3 (Name, Width, Height); coordinate clicks 2 (canvas, chevron); finds about 13; snapshots about 12; screenshots about 19.
- Recovery accounting: "Ref not found" errors 0; fresh-snapshot recovery allowance used 0; corrected inspection 0.

## 8. Acceptance evidence (T14 scope)

| AC | T14 status | Reason |
| --- | --- | --- |
| AC-1 | carried | Not re-checked in T14 beyond the scope footer, Designer configuration and absence of an existing component. |
| AC-2 | carried | Not re-read in T14. |
| AC-3 | carried | Not re-read in T14 (Global variable readback from T11). |
| AC-4 | operator-accepted qualified (carried) | Not re-read in T14. |
| AC-5 | passed for the in-session Designer state, qualified (carried) | Caption and Script Language unsaved until the Save stage; Form Type Normal; exactly-one not re-checked by Select Form. Persistence is AC-8/AC-9. |
| AC-6 | **passed for the same session, qualified** | Directly supported: component identity `FX_InventoryControl` and Type `UserControl` (Name and Components grid); exactly one component (Components grid); Use Web Control checked and Control URL `FX_Inventory/index.html` (dialog readback A19); layout Size `100; 30` (Layout readback). Qualifications: same-session only and not saved; the Web User Control Asset radio state is shown only as a dot; the stale User Control Name value and the Designer-generated variables are not resolved until Save and fresh reopen (AC-9). |
| AC-7 | not evaluated | Form Script method not installed in T14. |
| AC-8 | not evaluated | No Designer Save in T14. |
| AC-9 | pending | Requires the Save, close and fresh-Designer readback (User-scope Form, FX_InventoryControl properties, Form Script method, variable, asset). |
| AC-10 to AC-13 | not evaluated | Later stages. |

## 9. Evidence files (under `evidence/EXP-136/`)

| File | What it shows | What it does NOT show |
| --- | --- | --- |
| `t14-preflight-designer-form-properties-before-component.png` | Pre-placement Designer: scope footer User; Form Properties Name, Version, Device Default, Form Type Normal, Is Master True; Caption row `FX_InventoryDashb...` (clipped); Script Language `Visual C#`; empty canvas. | Full Caption text (clipped); whether Save is pending (the toolbar is not decisive). |
| `t14-details-panel-expanded-components-grid-precheck.png` | Details expanded; Collections tab shown. | Component list (Collections tab is not the Components grid). |
| `t14-components-grid-precheck-no-control.png` | Components grid: `Pane (00)` only; no child rows. | Anything after placement. |
| `t14-usercontrol-placed-auto-named-precommit.png` | One box on the canvas at the top-left; Components grid `userControl1_USER` UserControl Pane 0 Container 0; Properties header `userControl1_USER (ActivexControl)`. | Final name; reference; size. |
| `t14-component-name-editor-open-precommit.png` | Name inline editor open with `userControl1_USER` selected. | The committed name. |
| `t14-component-name-committed-blur-readback.png` | Properties Name `FX_InventoryControl` (label cell clicked); Components grid `FX_InventoryControl`, UserControl, Pane 0, Container 0. | Reference, size. |
| `t14-component-properties-expanded-misc-layout-groups.png` | Expanded Properties groups; Name `FX_InventoryControl`; Layout rows lower on the panel. | Specific Attributes row contents (below the viewport at this moment). |
| `t14-specific-attributes-row-selected-before-reference-dialog.png` | Specific Attributes row selected; collapsed chevron. | Expanded contents. |
| `t14-specific-attributes-after-expand-arrow.png` | ArrowRight moved focus to the value cell; no expansion; no editor. | Any value change (none observed). |
| `t14-specific-attributes-after-chevron-click.png` | Specific Attributes expanded; `User Control Name` = `V(UserCtrl_userCo...` (truncated). | Full value (truncated; the snapshot shows `V(UserCtrl_userControl1_USER)`). |
| `t14-edit-user-control-references-dialog-precommit.png` | Dialog: Use Web Control checked; Control URL blank; Web User Control Asset radio selected. | Control URL after selection. |
| `t14-edit-user-control-references-url-selected-precommit.png` | Dialog: Control URL `FX_Inventory/index.html` before OK. | The committed value after OK (see the reopen image). |
| `t14-after-user-control-references-ok-state.png` | Regenerate info alert after the OK. | Regenerate (not clicked). |
| `t14-size-editor-open-precommit.png` | Size expanded: Width 25, Height 5.882352941176471, Lock Size False. | Edited values. |
| `t14-component-100x30-layout-committed-readback.png` | Layout Size `100; 30`, Width 100, Height 30; canvas box extends below the viewport. | Saved state; Form canvas beyond the visible area. |
| `t14-edit-user-control-references-reopen-readback.png` | Read-only reopened dialog: Use Web Control checked; Control URL `FX_Inventory/index.html`; Web User Control Asset radio selected; Layout Size `100; 30`. | Saved definition (same session only; the dialog reads the in-session model). |
| `t14-variables-tab-after-usercontrol-reference-precheck.png` | Variables tree: only Global - Persistent and Global - Temporary categories; no Form-level category. | Global variable contents (collapsed). |

## 10. Limitations

- Same-session readback only. Nothing has been saved. The reference, the component and the layout are not verified in a fresh Designer (AC-9).
- The Control URL was read from the dialog and its list selection; the Web User Control Asset radio is shown as a disabled selected control.
- The `User Control Name` value still shows the pre-rename name `V(UserCtrl_userControl1_USER)`. What Save does to it is unresolved.
- The Designer Page URL no longer includes `&MGForm=FX_InventoryDashboard` after the reference OK. The tab heading and scope still show `FX_InventoryDashboard`. Cause unexplained.
- Caption and Script Language were read before placement and not re-read after it (the Form tab was not selected again). Their values are carried from the preflight, and their unsaved state is unchanged.
- The canvas geometry was checked numerically from the Layout readback and visually from a screenshot; the bottom of the 100 by 30 box is below the visible canvas area.
