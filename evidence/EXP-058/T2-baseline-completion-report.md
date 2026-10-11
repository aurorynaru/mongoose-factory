# EXP-058 T2 — read-only baseline completion (Pane entries, 17-row grid, FX_VarTestEdit reconciliation, final identity)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 1, task T2.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `0fb9b676-0a8b-4c16-aa23-096ab9d48cca`.
Date: 2026-10-11. Mode: read-only. Bounded instruction: complete the T1 baseline without any mutation; stop and report whether AC-1 and AC-2 are fully supported.

No migration performed. No FX_RefreshButton change. No Designer Save. No Form close or reopen. No runtime control activated. No speculative repair.

## 0. Outcome

- **AC-1: supported.** Identity, scope, clean Save-disabled state, and no dialog or session challenge were re-confirmed at the start (`t2-snapshot-00`) and at the end (`t2-snapshot-06`). The inherited runtime tab was not touched in T2 (its T1 state is recorded in the T1 report).
- **AC-2: supported, with one explicit, UI-level exception that is itself recorded.** All 17 entries are now accounted for. 15 entries have full Component-tab property readbacks (T1 and T2). The two Pane entries (Pane (00) and Pane (01)) expose **no** Component-tab properties in this UI; that unavailability is observed directly in T2 (screenshots and empty property tree), not inferred. The brief's own instruction says to record properties the UI does not expose; this is done. Limits are in §6.
- **FX_VarTestEdit Data Source reconciliation: resolved for the current session.** The blank Properties-panel "Data Source" row is blank for every bound component read (not only FX_VarTestEdit), so it is a general property-row behaviour and does not contradict the grid's `variables.FX_VarTest` value or the Binding row. The EXP-056 blank grid cell remains a historical discrepancy that was not reproduced in EXP-057 or in T1/T2.

## 1. Reading performed before any browser action

- **EXP-055 record** (`experiments/EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md`): read in full (lines 1–319). Key facts used: the built-in `StdFormRefreshCompleted` is selectable from the New dialog (T2 of EXP-055); the handler procedure is Event Handlers > New > Response Type Prompt > Parameters; EXP-055 ended BLOCKED at AC-4 for **insufficient baseline evidence** (Binding Type/Binding for 12 components, component Location and Size, and FX_UMCombobox Gain Focus were never recorded before its Save), later accepted with an operator waiver. The lesson recorded there (line 287) is that a preservation baseline must cover the exact properties that will be compared. T2 applies it: Binding, Location, Size, Tab, and all four events are read for each component in this run.
- **EXP-055 T1 report** (`evidence/EXP-055/T1-preflight-report.md`): read in full. Its own §12 open questions (New dialog offers built-in events; `+` control identity; FX_RefreshButton Event-to-generate cell) are resolved by EXP-055 T2 and EXP-055 T3–T5 as recorded in the record.
- **EXP-055 T5 report** (`evidence/EXP-055/T5-pre-save-gate-and-single-designer-save-report.md`): read in full. Relevant points: the Save produced the native toast; the SaveChanges response body was not captured; Static captions had no per-component baseline in EXP-055 (cross-referenced to EXP-054-R2 T1 Part B1 by the EXP-055 T9/T10 correction); post-Save Form values were read from a screenshot only.
- **Not reviewed in full in this task**: EXP-055 T2, T3, T4, T6, T7, T8, T9, T10 reports (the record above summarises them, and the T10 final matrix was read through the record). The EXP-055 T10 correction (`experiments/EXP-055…md` lines 170–221) was read.
- **EXP-057 and EXP-056**: already reviewed in T1 (EXP-057 in full; EXP-056 T10 in part). Not re-reviewed.

## 2. Browser identity and actions

- `browser_tabs list` (first in the task, before any action): tab 0 current, Designer `FX_Items` (`…/WSWebClient/designer/default.aspx`); tab 1 Mongoose portal (`favoriteContext=FX_Items`).
- Tab 0 was already the current tab, so no `select` was issued in T2. Tab 1 (runtime) was not selected or touched in T2.
- Portal notification banner: none observed. No sign-in or configuration screen. No browser-native dialog.

## 3. Start state (AC-1; `t2-snapshot-00-designer-fresh-start.md`)

- One Form tab, selected, `FX_Items`.
- Save, Regenerate Form, Undo, Redo `[disabled]` (lines 10–55).
- No dialog. Components tab active in the Details panel; Properties panel on the Component tab.
- Designer console at start: 3 errors, 0 warnings.

## 4. Pane (00) and Pane (01): native property readbacks (AC-2)

### 4.1 Pane (00)

- Components grid row selected (single click on `Pane (00)`; `t2-snapshot-01`). The Properties panel switched to the **Form** tab, showing Form-level properties (Name `FX_Items`; Size `69; 21`). This is not Pane (00)'s own property set.
- Properties panel > **Component** tab clicked (view only). The Component property tree is **empty**: `tree [ref=e891]` contains no child rows and the Name/Value header has no entries (`t2-snapshot-02-pane00-component-tab-properties.md`, lines 557–563). Screenshot `t2-01-pane00-component-tab-properties-empty.png`: object selector blank; no property rows.
- Grid row for Pane (00): Name `Pane (00)`; Type, Data Source, Pane, Container, Tab, Event to generate, Component Class, Enabled When: all blank (screenshot `t2-03`, top row).

**Result: Pane (00) exposes no Binding, Location, Size, Tab Order, or events in this UI. These are unavailable, not blank values.**

### 4.2 Pane (01)

- Components grid row selected (single click; `t2-snapshot-03-pane01-selected-properties.md`; the row is `[active]`). Properties panel remains on the **Component** tab.
- Component tree: empty (`tree [ref=e891]`), same as Pane (00). Screenshot `t2-02-pane01-component-tab-properties-empty.png`: Properties panel blank below the object selector.
- Grid row for Pane (01): Name `Pane (01)`; Data Source, Pane, Container, Tab, Event to generate: all blank (screenshot `t2-02` lower row, and `t2-03`/`t2-04`).

**Result: Pane (01) exposes no property readback in this UI, same as Pane (00).**

## 5. Complete 17-entry grid inventory (AC-2) with native scrolling

Components grid scrolled with the mouse wheel (5 wheel calls: one up to the top, four down). Each position captured:

| Screenshot | Grid position | Rows fully visible |
| --- | --- | --- |
| `t2-03-components-grid-top-rows-pane00-to-fx-itemgridcol.png` | top | Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol (FX_UMGridCol partly cut) |
| `t2-04-components-grid-scroll-step-2.png` | +1 | FX_UMGridCol; Pane (01); FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit |
| `t2-05-components-grid-scroll-step-3.png` | +2 | FX_DescriptionEdit (partly); FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_RefreshButton (Event to generate `StdFormRefresh`) |
| `t2-06-components-grid-scroll-step-4.png` | +3 (bottom) | FX_CostStatic (partly); FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_RefreshButton; FX_VarTestEdit (Data Source `variables.FX_VarTest`) |
| `t2-07-components-grid-scroll-step-5-bottom.png` | +4 (same bottom position) | identical to `t2-06`; the scroll had reached the bottom |

Note: `t2-06` and `t2-07` show the same bottom position; the fifth scroll did not move the grid further. The count is stated as 5 wheel calls and 5 grid screenshots, with `t2-07` a duplicate of the bottom.

All 17 entries are visible across `t2-03` to `t2-07`: Pane (00), FormCollectionGrid, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol, Pane (01), FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox, FX_RefreshButton, FX_VarTestEdit.

### 5.1 Consolidated baseline (the 17 entries; grid values from T1 snapshot-02 and T2 screenshots; property readbacks from T1 snapshots 03–17)

| # | Name | Type | Data Source (grid) | Pane | Container | Tab | Event to generate (grid) | Binding Type / Binding (Component tab) | Location | Size | Tab Order | Primary / Data Change / Lose Focus / Gain Focus |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | blank | blank | blank | blank | blank | **not exposed** | **not exposed** | **not exposed** | **not exposed** | **not exposed** |
| 2 | FormCollectionGrid | Grid | objects | 0 | blank | 0 | blank | Primary Collection Grid / objects | 0; 0 | 11; 21 | 0 | blank / blank / blank / blank |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | blank | Property / object.FX_Item | 0; 0 | 10; 0 | 1 | blank (all four) |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | blank | Property / object.FX_Description | 0; 0 | 10; 0 | 2 | blank (all four) |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | blank | Property / object.FX_Cost | 0; 0 | 10; 0 | 3 | blank (all four) |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | blank | Property / object.FX_UM | 0; 0 | 10; 0 | 4 | blank (all four) |
| 7 | Pane (01) | Pane | blank | blank | blank | blank | blank | **not exposed** | **not exposed** | **not exposed** | **not exposed** | **not exposed** |
| 8 | FX_ItemStatic | Static | blank | 1 | blank | 5 | blank | None / blank; Caption FX_sItem | 1; 3 | 20; 1 | 5 | blank (all four) |
| 9 | FX_ItemEdit | Edit | object.FX_Item | 1 | blank | 6 | blank | Property / object.FX_Item; Caption C(FX_ItemStatic) | 1; 23.75 | 37.05; 2 | 6 | blank (all four) |
| 10 | FX_DescriptionStatic | Static | blank | 1 | blank | 7 | blank | None / blank; Caption FX_sDescription | 3.25; 3 | 20; 1 | 7 | blank (all four) |
| 11 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | blank | 8 | blank | Property / object.FX_Description; Caption C(FX_DescriptionStatic) | 3.25; 23.75 | 37.05; 2 | 8 | blank (all four) |
| 12 | FX_CostStatic | Static | blank | 1 | blank | 9 | blank | None / blank; Caption FX_sCost | 5.5; 3 | 20; 1 | 9 | blank (all four) |
| 13 | FX_CostEdit | Edit | object.FX_Cost | 1 | blank | 10 | blank | Property / object.FX_Cost; Caption C(FX_CostStatic) | 5.5; 23.75 | 37.05; 2 | 10 | blank (all four) |
| 14 | FX_UMStatic | Static | blank | 1 | blank | 11 | blank | None / blank; Caption FX_sUM | 7.75; 3 | 20; 1 | 11 | blank (all four) |
| 15 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | blank | 12 | blank | Property / object.FX_UM; Caption C(FX_UMStatic) | 7.75; 23.75 | 37.25; 2.15 | 12 | blank (all four) |
| 16 | FX_RefreshButton | PushButton | blank | 1 | blank | 0 | StdFormRefresh | None / blank; Caption FX_Refresh | 12.1666666666667; 5.25 | 14.25; 1.89 | 0 | **StdFormRefresh** / blank / blank / blank |
| 17 | FX_VarTestEdit | Edit | variables.FX_VarTest | 1 | blank | 0 | blank | **Variable / variables.FX_VarTest**; Caption blank | 12.7222222222222; 30.25 | 37.05; 2 | 0 | blank (all four) |

Notes on the table:
- "Blank" for an event or caption means the readback field has no value. A blank field is recorded as observed, not as unavailable.
- The 15 non-Pane entries all have Component-tab readbacks: Name, Type, Binding Type, Binding, Location, Size, Tab Order, and the four events (Primary, Data Change, Lose Focus, Gain Focus) together with Drag From and Drop On counts (`0 event(s)`) where displayed. Drag and drop counts were read for FormCollectionGrid, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol, FX_DescriptionEdit, FX_RefreshButton, and FX_VarTestEdit in T1; the remaining Static and Edit entries show `0 event(s)` in their T1 snapshots (`t1-snapshot-13`, `-14`, `-15`, `-16`, `-17`).
- Pane (00) and Pane (01): Component-tab property tree empty; no Binding, Location, Size, Tab Order, or event readback exists for them in this UI. These are recorded as **not exposed**. The grid's own Pane, Container, Tab, Data Source, and Event cells for them are blank.

## 6. FX_VarTestEdit: Data Source reconciliation (non-mutating)

Observed in T2 (`t2-snapshot-05-fx-vartestedit-properties-reconciliation.md`):

- Components grid, FX_VarTestEdit row: Data Source `variables.FX_VarTest` (screenshot `t2-06`, bottom row; accessibility line 528 in `t2-snapshot-04`).
- Properties panel > Component tab (FX_VarTestEdit selected by a single row click): **Data Source row present, value blank** (`t2-snapshot-05`, lines 802–804: `generic: Data Source`, `gridcell` empty).
- Binding Type: `Variable` (line 812). Binding: `variables.FX_VarTest` (line 822), with its Open Edit Property Dialog button (line 825).

Cross-check: the same blank Properties "Data Source" row appears for every bound component read in T1, including:
- FX_DescriptionEdit (Property-bound, grid Data Source `object.FX_Description`, T1 `t1-snapshot-04` lines 807–809, Binding Type `Property`, Binding `object.FX_Description`);
- FX_CostEdit, FX_ItemEdit, FX_UMCombobox (grid `object.FX_Cost`, `object.FX_Item`, `object.FX_UM`; Properties Data Source blank, T1 snapshots 12, 15, 17);
- and for the GridColumns and Static entries (blank in both views).

**Reconciliation:** the Properties-panel "Data Source" row is blank for all bound components. Its blank state is therefore a general property-row behaviour, not an anomaly specific to FX_VarTestEdit. The grid Data Source column reflects the **Binding** value (`variables.FX_VarTest`, same as the Binding row). The two readings do not contradict each other, because the Properties row does not show the binding value in any component.

**Remaining unresolved item:** EXP-056 recorded the FX_VarTestEdit grid Data Source cell **blank** (T6–T8), whereas EXP-057 and this run record it populated (`variables.FX_VarTest`). The cause of that change is not established and was not repaired or re-tested in T2.

## 7. Final identity and clean state (AC-1; `t2-snapshot-06-final-form-identity-clean-state.md`)

- Form tab (Properties > Form, view only; selected by one click): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Form Type `Normal`; Initial Command `Refresh`; Size `69; 21`.
- Footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save, Regenerate Form, Undo, Redo: all `[disabled]`.
- Dialogs open: none.
- Designer console: 4 errors, 0 warnings (see §8).

## 8. Observed unexpected state

- **Designer console error count rose from 3 to 4** at the first Pane selection (the Pane (00) row click) and remained 4 for the rest of the task. EXP-056 recorded `TypeError … reading 'adorner'` on Pane selections; the console entries were not inspected (no diagnostics or DevTools use), so the cause is not established and is not investigated here. This is recorded as an unresolved observation, not a failure of any check.
- No other unexpected state: no dialog, no prompt, no error banner, no session challenge.

## 9. Action counts (T2)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 (tab 0 already current; tab 1 not selected) |
| Designer clicks (all single clicks, all succeeded) | 5: Pane (00) row; Properties Component tab; Pane (01) row; FX_VarTestEdit row; Properties Form tab |
| Mouse move (grid hover before scrolling) | 1 |
| Mouse wheel (grid scroll; 1 up, 4 down) | 5 |
| Accessibility snapshots saved | 7 (`t2-snapshot-00` to `-06`) |
| Screenshots saved | 7 (`t2-01` to `t2-07`) |
| Read-only Grep/Read calls on saved evidence | many (not counted as browser actions) |
| Dialogs opened | 0 |
| Designer Save, Regenerate, Undo, Redo | 0 |
| Metadata-changing actions (any property edit, handler edit, action add/remove, component add/move/resize/delete, FX_RefreshButton change) | 0 |
| Typing | 0 |
| Key presses | 0 |
| Form open, close, or reopen | 0 |
| Runtime tab selection, click, activation, prompt, dismissal, typing | 0 |
| Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript | 0 |
| Browser-reference (ref not found) errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

## 10. Limitations

1. The Pane (00) and Pane (01) properties are **not exposed** by this UI's Component tab. The Pane rows also show blank Pane/Container/Tab/Data Source/Event cells. No values are inferred from EXP-056 or EXP-057.
2. The Components grid is short. Each screenshot shows a subset of the rows; the complete 17-row set is established by the saved accessibility snapshots (`t1-snapshot-02`, `t2-snapshot-00`/`-04`) together with the screenshots, not by any single image. `t2-06` and `t2-07` are the same bottom position.
3. The Properties panel's Data Source row is blank for all bound components. Its meaning is not exposed by the UI, so the reconciliation in §6 rests on the consistent blank across components and on the Binding row, not on the Data Source row's own value.
4. The EXP-056 blank grid Data Source for FX_VarTestEdit remains unexplained; it was not reproduced here.
5. The Designer console count rose to 4 at the Pane selection; its source is not identified.
6. Event Handlers were not re-read in T2 after the component selections. The T1 readback (one group, two actions, both enabled) is the most recent handler observation. Component selection does not change the handler grid, and no handler action was taken, but this is a read gap, not a fresh observation.
7. The runtime tab was not re-inspected in T2 (the T1 inherited-state readback stands).
8. Repository confinement: this worker has no shell. The harness computes repository status. The files this worker wrote are listed in §11.

## 11. Evidence files written (T2)

Under `evidence/EXP-058/`:
- `T2-baseline-completion-report.md` (this report).
- `t2-snapshot-00-designer-fresh-start.md` (start identity and clean state).
- `t2-snapshot-01-pane00-selected-properties.md` (Pane (00) selected; Properties on Form tab).
- `t2-snapshot-02-pane00-component-tab-properties.md` (Pane (00) Component tab; empty tree).
- `t2-snapshot-03-pane01-selected-properties.md` (Pane (01) selected; Component tab; empty tree).
- `t2-snapshot-04-components-grid-bottom-before-vartestedit.md` (grid at bottom; refs for FX_VarTestEdit).
- `t2-snapshot-05-fx-vartestedit-properties-reconciliation.md` (FX_VarTestEdit Component readbacks; Data Source row).
- `t2-snapshot-06-final-form-identity-clean-state.md` (final identity; Save disabled).
- `t2-01-pane00-component-tab-properties-empty.png` (Pane (00) Component tab empty).
- `t2-02-pane01-component-tab-properties-empty.png` (Pane (01) Component tab empty; lower grid row Pane (01) visible).
- `t2-03-components-grid-top-rows-pane00-to-fx-itemgridcol.png` (grid top).
- `t2-04-components-grid-scroll-step-2.png` (grid middle).
- `t2-05-components-grid-scroll-step-3.png` (grid lower middle; FX_RefreshButton with Event `StdFormRefresh`).
- `t2-06-components-grid-scroll-step-4.png` (grid bottom; FX_VarTestEdit Data Source `variables.FX_VarTest`).
- `t2-07-components-grid-scroll-step-5-bottom.png` (same bottom position as `t2-06`).

No other file was written by this worker in T2 except the experiment record update described in §12.

## 12. Repository changes (T2)

- Updated: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` (status line and T2 section only).
- Written: `evidence/EXP-058/` files listed in §11.
- Not modified: `AGENTS.md`, `docs/`, `tools/`, recipes, EXP-055/056/057 records and evidence, any non-FX_ artifact, any Mongoose artifact.

## 13. Acceptance status (end of T2)

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 Read-only preflight (tabs, Designer session, identity, clean Save-disabled, no challenge or error) | **Supported** (T1 with limits; re-confirmed at T2 start and end) | `t2-snapshot-00`, `t2-snapshot-06`; T1 report §3 |
| AC-2 Complete pre-mutation baseline (handlers, Initial Command, 17 components with properties, explicit three readbacks, FX_VarTest, no FX_Test) | **Supported**, with the Pane exposure exception recorded | §5.1 table; `t2-03`–`t2-07`; T1 report §4; `t2-snapshot-01`–`-03` for Pane; Pane properties explicitly recorded as not exposed |

Limits that keep AC-2 from being unqualified: (a) Pane (00) and (b) Pane (01) expose no property readbacks in this UI, so the baseline for those two entries is their grid cells and their observed absence of properties, not per-property values; (c) the handler grid was last read in T1, not in T2; (d) the EXP-056 blank Data Source for FX_VarTestEdit is historical and unexplained.

The brief requires a statement of whether AC-1 and AC-2 are "fully supported". Strictly, AC-2's "exposed properties ... captured" is satisfied (the Pane entries expose none), so AC-2 is supported. The two limits in (c) and (d) are documented rather than closed. **Recommendation:** treat AC-2 as supported with those limits. The operator should decide whether to re-read the handler grid once before the T3 migration (a view-only click), since that is the only baseline item not re-read in T2.

## 14. Next permitted step (NOT STARTED)

The migration (T3 in the coordinator's sequence) remains **not started and needs operator approval**. Nothing in T2 authorizes it.

## 15. Knowledge state (T2)

| Finding | State |
| --- | --- |
| Identity, User scope, clean Save-disabled state (start and end of T2) | observed (single session) |
| Pane (00) and Pane (01): no Component-tab property readbacks exposed; grid cells blank | observed (single session) |
| 17-entry inventory across screenshots t2-03 to t2-07 and accessibility snapshots | observed (single session) |
| FX_VarTestEdit Properties Data Source blank, grid `variables.FX_VarTest`, Binding `variables.FX_VarTest` | observed; the Properties Data Source blank is consistent across all bound components (observed) |
| EXP-056 blank grid Data Source for FX_VarTestEdit | observed in EXP-056; cause unresolved |
| Designer console 3 → 4 errors at Pane selection | observed; cause unresolved |
| Handler grid after T2 component selections | not re-observed in T2 (last observed in T1) |
| Replay-verified findings | none |
