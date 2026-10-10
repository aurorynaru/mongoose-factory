# EXP-050 T7 — Same-session close and reopen of FX_Items (recovery inspection)

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 6 · task T7
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `f9d55638-dcbc-4783-b8c1-85329660a71b`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (existing working record, updated).

**Outcome:** one close and one reopen of the FX_Items Form, both through native UI, in the same browser session. The reopened Form has Name `FX_Items`, User scope (`anton.ramos@3mworks.com.ph`), Save and Undo disabled, and the four business fields in the expected order. Its label Captions read `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`. On the reopened canvas those captions display as resolved text (`Item`, `Description`, `Cost`, `Unit of Measure`), which is a change from the raw IDs shown before the close. The Edit > String view shows `FX_sItem` = `Item` and `FX_sCost` = `Cost`. This is same-session UI recovery only. It is not cross-session persistence and not replay verification.

## Pre-close state (clean)

| Check | Observed | Evidence |
| --- | --- | --- |
| Selected Form tab | `FX_Items` (vendor `Property Classes` tab not selected) | `t7-01-pre-close-clean-state-FX_Items-selected.png` |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t7-01` |
| Save and Undo | both disabled (accessibility and icon) | `t7-01`; find |
| Dialogs | none | find |
| Authentication challenge | none | find |
| Canvas captions before close | raw IDs `FX_sItem*` and `FX_sCost:`; resolved `Description` and `Unit of Measure` (carried from T6) | `t7-01` |

## Close (exactly once)

| Step | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Clicked the FX_Items tab's own close control (`closable FX_Items`, ref `e250`), once | No alert, prompt, or dialog. The FX_Items tab disappeared from the tablist. The Designer switched to the vendor IdoPropertyClasses design view (URL `?MGForm=IdoPropertyClasses`). The vendor view was not edited, selected for edit, or saved. Save and Undo disabled | `t7-02-closed-state-FX_Items-tab-absent.png`; find |

**Close count: 1.** The tablist now shows only `Property Classes` (vendor, selected). `closable FX_Items` is absent.

Note: the switch to the vendor view is the Designer's own behaviour after closing the active Form. It was not caused by any action on the vendor Form. The vendor Form was not changed.

## Reopen (exactly once)

| Step | Action | Result | Evidence |
| --- | --- | --- | --- |
| 2 | Designer `Form` menu opened (once) | Menu lists recent forms: `Definition`, `Sign Out`, and `FX_Items`, `Export/Import Strings`, `IDO Projects`, `Sql Tables`, `IDOs`, `Property Classes`, `FX_UMs`, `FX_HelloWorld01`, `Data Maintenance Wizard`. Single `FX_Items` entry | find (menu items) |
| 3 | Clicked the `FX_Items` recent-forms entry (once) | URL `?MGForm=FX_Items`; FX_Items tab reopened and selected (new tab id); the Designer shows FX_Items | `t7-03-reopened-FX_Items-identity-scope-clean.png`; find |

**Reopen count: 1.** No New, no Form creation, no wizard, no Data Maintenance Wizard, no Select Form dialog used.

## Reopened identity (native)

| Item | Observed | Evidence |
| --- | --- | --- |
| Tab | `FX_Items` selected; vendor `Property Classes` tab present, not selected | `t7-03`; find |
| Name | `FX_Items` | `t7-03` Properties Name; tree `Name` |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `t7-03`; tree row `Version` |
| ScopeType / ScopeName | `User` / `anton.ramos@3mworks.com.ph` | `t7-03` status bar |
| Device Type / Form Type / Is Master | Default / Normal / True | `t7-03` |
| Save | disabled | `t7-03`, `t7-05`, `t7-07`; find |
| Undo | disabled | `t7-03`, `t7-05`, `t7-07`; find |
| Dialogs | none | find |

## Business-field positions, bindings, and label Captions (Details > Components, read-only)

Details panel expanded once; Components tab selected; grid Expand pressed once; rows read from the accessibility tree; label rows selected by name cell (read-only); Captions read from the Properties panel.

| Position (tab) | Component (name) | Type | Binding (Data Source) | Pane | Label Caption (Properties) |
| --- | --- | --- | --- | --- | --- |
| 1 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 (grid) | n/a |
| 2 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | n/a |
| 3 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | n/a |
| 4 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | n/a |
| 5 | FX_ItemStatic (label) | Static | none | 1 | `FX_sItem` |
| 6 | FX_ItemEdit (field) | Edit | object.FX_Item | 1 | n/a |
| 7 | FX_DescriptionStatic (label) | Static | none | 1 | `FX_sDescription` |
| 8 | FX_DescriptionEdit (field) | Edit | object.FX_Description | 1 | n/a |
| 9 | FX_CostStatic (label) | Static | none | 1 | `FX_sCost` |
| 10 | FX_CostEdit (field) | Edit | object.FX_Cost | 1 | n/a |
| 11 | FX_UMStatic (label) | Static | none | 1 | `FX_sUM` |
| 12 | FX_UMCombobox (field) | ComboBox | object.FX_UM | 1 | n/a |

Business-field order (tabs 1 to 4, and the canvas top to bottom): FX_Item, FX_Description, FX_Cost, FX_UM. Matches the intended order.

Limit: the layout "position" here is the Components tree tab number (and the canvas order), not pixel coordinates. The FX_UMGridCol and FX_UMCombobox rows are at the bottom of the tree and were confirmed by accessibility text; the FX_UMCombobox row was not in the visible screenshot `t7-04` (cut off), so its design-time type is taken from the accessibility row (`FX_UMCombobox ComboBox object.FX_UM 1 12`).

Decisive screenshots for the selected pairs: `t7-04-reopened-components-tree-expanded.png` (top rows, GridColumns); `t7-05-reopened-FX_UMStatic-caption-FX_sUM-readonly.png` (FX_UMStatic selected, Caption `FX_sUM`, tabs 7 to 11 visible, Pane 1). Label Captions for FX_ItemStatic, FX_DescriptionStatic, and FX_CostStatic were read from accessibility text after each read-only selection; no screenshot of their Properties panels was taken individually.

## Canvas captions after reopen (exact rendering)

| Canvas label | Caption reference | Displayed text (after reopen) |
| --- | --- | --- |
| FX_ItemStatic | `FX_sItem` | `Item*` (resolved; required mark) |
| DescriptionStatic | `FX_sDescription` | `Description` (resolved) |
| FX_CostStatic | `FX_sCost` | `Cost` (resolved) |
| FX_UMStatic | `FX_sUM` | `Unit of Measure` (resolved) |

**Change from before the close:** before the close the canvas showed raw IDs for FX_sItem (`FX_sItem*`) and FX_sCost (`FX_sCost:`), while Description and Unit of Measure were already resolved. After the reopen all four show resolved text. No raw `FX_` identifier is displayed on the reopened canvas. Evidence: `t7-03` and `t7-04`/`t7-05` (canvas on the left).

Interpretation: the canvas label text appears to refresh on reopen. The cause is not established here (it could be the reopen re-reading the saved string resources, a Designer re-render, or an effect of the earlier Save). This is a same-session observation. It does not establish that the strings persisted to the database.

## Edit > String read-only verification (after reopen)

Edit menu > String opened once. Strings filter typed with key events (Control+a, slow typing, 2 s settle) for each target, one row selected per read, then Cancel. No OK pressed. No String dialog opened for editing.

| String | Exact ID | String Value | Evidence |
| --- | --- | --- | --- |
| FX_sItem | `FX_sItem` (one row) | `Item` | accessibility rows (`treeitem "String Value"`, `gridcell "Item"`) |
| FX_sCost | `FX_sCost` (one row) | `Cost` | `t7-06-reopen-Edit-String-readonly-FX_sCost-value-Cost.png` |

Global Objects closed with Cancel. The Designer remained clean (Save and Undo disabled, no dialog).

`FX_sDescription` and `FX_sUM` were not re-read in this view (the brief asked only for FX_sItem and FX_sCost). Their Captions were read on the component side after reopen (`FX_sDescription`, `FX_sUM`).

## Final state (verified, clean)

- Final screenshot `t7-07-final-state-after-readonly-verification.png`: FX_Items tab selected; User scope; Save and Undo disabled; no dialog; no alert.
- Vendor `Property Classes` tab present, not selected, not edited.
- FX_Items remained open after the reopen (not closed again).

## Counts (T7)

| Operation | Count |
| --- | --- |
| Close of FX_Items (native tab close control) | **1** |
| Reopen of FX_Items (Form menu recent-forms entry) | **1** |
| Ordinary Designer Save | **0** |
| Form creation / New / wizard / Data Maintenance Wizard | **0** |
| Web Client runtime open | **0** |
| Select Form dialog | **0** |
| String dialog OK or edit | **0** |
| String Value edits | **0** |
| Caption ellipsis clicks | **0** |
| Component, binding, position, or caption edits | **0** |
| Row selections (Components, read-only) | **4** (FX_ItemStatic, FX_DescriptionStatic, FX_CostStatic, FX_UMStatic) |
| Edit > String opens (read-only) | **1** |
| Strings filter entries (key events) | **2** (`FX_sItem`, `FX_sCost`; each preceded by Control+a) |
| Global Objects Cancel | **1** |
| Details Expand | **1** |
| Components tab selection | **1** |
| Components grid Expand | **1** |
| Form menu opens | **1** |
| Browser-reference errors | **0** |
| Browser timeouts | **0** |
| Portal banner dismissals | **0** (none seen) |
| JavaScript or evaluate by the worker | **0** |
| Screenshots (worker-saved PNG) | **7** (`t7-01` to `t7-07`) |

## Acceptance status (T7 scope)

| AC | T7 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-9 | **PASS for same-session UI recovery**: native close with the FX_Items tab absent from the tablist; reopen via the Form menu recent-forms entry; reopened identity Name `FX_Items`, User scope, Save disabled; four business-field positions, bindings, and label caption references read | `t7-01` to `t7-05`, find results | Same-session UI recovery only. Not cross-session persistence, not database-level, not replay verification. Four positions and captions are read from the Components tree, not from a database |
| AC-7 (extended) | Positions 1 to 4 (GridColumns) and 5 to 12 (labels, edits, ComboBox) confirmed; label Captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`; bindings object.FX_Item, object.FX_Description, object.FX_Cost, object.FX_UM | `t7-04`, `t7-05`, read rows | Position is the tree tab number and canvas order, not pixel layout |
| AC-5 (recovery view) | FX_sItem = `Item` and FX_sCost = `Cost` in Edit > String after reopen | `t7-06` and accessibility | Client view; not a database read |
| AC-6 (recovery view) | FX_sDescription and FX_sUM Captions read on the component side; not re-read in Edit > String this task | `t7-05`, accessibility | No edit to either string |
| AC-10 | not performed (runtime not opened; T7 scope excludes it) | — | — |
| AC-11 | partial (one close, one reopen so far) | — | — |

## Unresolved observations

1. **Canvas captions refreshed on reopen.** Before the close, FX_sItem and FX_sCost showed raw IDs after Save; after reopen all four show resolved text. The cause (reopen re-read, re-render, or the Save) is not established. It is observed in this session only.
2. **Designer switch to the vendor view after close.** The Designer displayed the vendor IdoPropertyClasses view once the FX_Items tab closed. This is the Designer's own tab behaviour. Nothing was edited there. Noted for the audit.
3. **Undo accessibility vs icon (T4 to T6).** Both readings are disabled throughout T7. No Undo use.
4. **Not established:** whether the Form and the two strings persist across sessions or in the database. The reopen was within the same browser session and Designer state.

## Repository changes (T7)

- Written: `evidence/EXP-050/T7-close-reopen-report.md` (this report).
- Written: `evidence/EXP-050/t7-01` to `t7-07` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (status line and T7 section).
- Not written: any other repository file.

## Final browser state

- Tab 0 (Designer): `designer/default.aspx?MGForm=FX_Items`; FX_Items tab selected; Component tab active in the Details panel; FX_UMStatic selected; Save and Undo disabled; no dialog; scope User.
- Tab 1 (Web Client): unchanged (IDO Properties runtime tab; not used in T7).
- No browser-native dialog. The vendor Property Classes tab was not edited or saved.

## Next permitted action

No further action is authorised by T7. The brief stops after read-only recovery inspection. The runtime opening (AC-10) and any further verification need a separate coordinator instruction.
