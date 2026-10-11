# EXP-056 T7 — read-only pre-Save verification of the 17-component Designer state; no Save

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 9, task T7.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `f9e0e694-4e93-4db9-965f-b867fe935985`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: read-only verification passed for the pre-Save state. All 15 non-FX_RefreshButton originals match their T1 baseline on every field read (Name, Type, Caption, Binding Type, Binding, Size, Location, Tab Order, Pane, Container, Data Source, Event to generate, and the six exposed Events). FX_RefreshButton matches its T1 baseline (reused T6 readback; grid row identical). Pane (00) and Pane (01) expose no Component property rows (unavailable, as in T1). FX_VarTestEdit: Name, Type, Binding Type Variable, Binding `variables.FX_VarTest`, Location, Size, Tab 0, Events blank. The Properties header now reads `FX_VarTestEdit (Edit)` after a real selection change. The Components grid Data Source cell for FX_VarTestEdit is blank; this is recorded and is not repaired. FX_VarTest is absent as a Form-variable definition. Save is enabled and was not clicked.**

**AC-5 assessment: supported.** Recommend the single ordinary Designer Save as the next separate task (not started here).

## 1. Gate

- `browser_tabs list` (before any select) → tab 0 Designer, tab 1 Web Client. `browser_tabs select 0` succeeded.
- Fresh snapshot `t7-snapshot-00-fresh-designer-pre-save-verification.md`: heading and tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save enabled; no dialog.
- Components tab selected (one click; the Variables tab had been active from T6). Components grid, all groups expanded: **17 entries** — Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_RefreshButton; FX_VarTestEdit (`t7-snapshot-01-components-tab-expanded-inventory.md`). Exactly one FX_VarTestEdit.

## 2. Per-component comparison matrix (vs T1 baseline)

Values as displayed in the native Component property panel. "blank" = no text in the value cell (the Event cells carry a picker control; none had an assigned value). Each row was reached by one native row click; the snapshot returned by that click was read.

| # | Component | Type | Caption | Binding Type | Binding | Size | Location | Tab | Events (Primary / Data Change / Lose Focus / Gain Focus / Drag From / Drop On) | Grid row (Data Source; Pane; Container; Tab; Event to generate) | Result vs T1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | container | n/a | n/a (no rows) | n/a | unavailable | unavailable | unavailable | unavailable | blank; 0; blank; blank; blank | Unavailable as in T1; Component tree empty (`playwright/page-2026-10-11T09-04-29-099Z.yml`, lines 543–563) |
| 2 | FormCollectionGrid | Grid | blank | Primary Collection Grid | objects | 11; 21 | 0; 0 | 0 | blank ×4 / Drag and Drop not re-read in T7 (T1: 0 / 0) | objects; 0; blank; 0; blank | Match (Drag/Drop from T1) |
| 3 | FX_ItemGridCol | GridColumn | FX_sItem | Property | object.FX_Item | 10; 0 | 0; 0 | 1 | blank ×4 / Drag and Drop not re-read in T7 (T1: 0 / 0) | object.FX_Item; 0; FormCollectionGrid; 1; blank | Match (Drag/Drop from T1) |
| 4 | FX_DescriptionGridCol | GridColumn | FX_sDescription | Property | object.FX_Description | 10; 0 | 0; 0 | 2 | blank ×4 / 0 / 0 | object.FX_Description; 0; FormCollectionGrid; 2; blank | Match |
| 5 | FX_CostGridCol | GridColumn | FX_sCost | Property | object.FX_Cost | 10; 0 | 0; 0 | 3 | blank ×4 / 0 / 0 | object.FX_Cost; 0; FormCollectionGrid; 3; blank | Match |
| 6 | FX_UMGridCol | GridColumn | FX_sUM | Property | object.FX_UM | 10; 0 | 0; 0 | 4 | blank ×4 / 0 / 0 | object.FX_UM; 0; FormCollectionGrid; 4; blank | Match |
| 7 | Pane (01) | container | n/a | n/a (no rows) | n/a | unavailable | unavailable | unavailable | unavailable | blank; 1; blank; blank; blank | Unavailable as in T1; Component tree empty |
| 8 | FX_ItemStatic | Static | FX_sItem | None | blank | 20; 1 | 1; 3 | 5 | blank ×4 / 0 / 0 | blank; 1; blank; 5; blank | Match |
| 9 | FX_ItemEdit | Edit | C(FX_ItemStatic) | Property | object.FX_Item | 37.05; 2 | 1; 23.75 | 6 | blank ×4 / 0 / 0 | object.FX_Item; 1; blank; 6; blank | Match |
| 10 | FX_DescriptionStatic | Static | FX_sDescription | None | blank | 20; 1 | 3.25; 3 | 7 | blank ×4 / 0 / 0 | blank; 1; blank; 7; blank | Match |
| 11 | FX_DescriptionEdit | Edit | C(FX_DescriptionStatic) | Property | object.FX_Description | 37.05; 2 | 3.25; 23.75 | 8 | blank ×4 / 0 / 0 | object.FX_Description; 1; blank; 8; blank | Match |
| 12 | FX_CostStatic | Static | FX_sCost | None | blank | 20; 1 | 5.5; 3 | 9 | blank ×4 / 0 / 0 | blank; 1; blank; 9; blank | Match |
| 13 | FX_CostEdit | Edit | C(FX_CostStatic) | Property | object.FX_Cost | 37.05; 2 | 5.5; 23.75 | 10 | blank ×4 / 0 / 0 | object.FX_Cost; 1; blank; 10; blank | Match |
| 14 | FX_UMStatic | Static | FX_sUM | None | blank | 20; 1 | 7.75; 3 | 11 | blank ×4 / 0 / 0 | blank; 1; blank; 11; blank | Match |
| 15 | FX_UMCombobox | ComboBox | C(FX_UMStatic) | Property | object.FX_UM | 37.25; 2.15 | 7.75; 23.75 | 12 | blank ×4 / 0 / 0 | object.FX_UM; 1; blank; 12; blank | Match (Gain Focus blank; closes the EXP-055 gap) |
| 16 | FX_RefreshButton | PushButton | FX_Refresh | None | blank | 14.25; 1.89 | 12.1666666666667; 5.25 | 0 | Primary StdFormRefresh; others blank; 0 / 0 | blank (grid Event to generate StdFormRefresh); 1; blank; 0 | Match (T6 readback reused; grid row unchanged) |
| 17 | FX_VarTestEdit (new) | Edit | blank | Variable | variables.FX_VarTest | 37.05; 2 | 12.7222222222222; 30.25 | 0 | blank ×4 / 0 / 0 | **blank**; 1; blank; 0; blank | New component; expected values; Data Source cell blank (see §4) |

Comparison basis: the T1 table (`T1-preflight-report.md` §4) and the Components grid rows (`t7-snapshot-01`, `playwright/page-2026-10-11T09-05-30-250Z.yml` lines 299–523).

Result: **15 of 15 originals (excluding FX_RefreshButton) match T1 on every field read in T7. 0 material differences.** Drag From / Drop On were re-read in T7 for 13 rows; for FormCollectionGrid and FX_ItemGridCol they were not re-read, and the T1 values (0 / 0) are carried. The Pane containers are not "matched" in the sense of values; they are unavailable as documented. Pane (00) and Pane (01) remain unavailable for Binding, Location, Size and Events, as documented in T1; their grid values (name, type, pane, tab) match.

## 3. FX_VarTestEdit readback (reselected, view only)

- Clicked the FX_VarTestEdit row once (`t7-snapshot`, `playwright/…09-05-30-250Z`, row ref e1833).
- Properties header (`textbox`): **`FX_VarTestEdit (Edit)`**. In T6 the header had stayed `edit1_USER (Edit)` after reselecting the row that was already active; this time the selection changed from FX_UMCombobox to FX_VarTestEdit, and the header updated. Conclusion: the stale header in T6 was a label that did not refresh without a real selection change. The rename itself is confirmed by the Design Name cell (`FX_VarTestEdit`).
- Design Name `FX_VarTestEdit`; Caption blank; Type `Edit`; Data Source group: Binding Type `Variable`, Binding `variables.FX_VarTest`; Size `37.05; 2`; Location `12.7222222222222; 30.25`; Tab Order `0`; Events: Primary, Data Change, Lose Focus, Gain Focus blank; Drag From / Drop On `0 event(s)`.
- Hierarchy: the grid row sits last in the tree, Pane 1, Container blank (same pattern as the other Pane (01) children).

## 4. Data Source grid cell (independent of the Properties readback)

- Components grid row `FX_VarTestEdit Edit 1 0`: the Data Source cell (`e1837`) is **blank**. The grid's Data Source column shows `object.FX_*` for Property bindings and `objects` for the Primary Collection Grid. It shows nothing for FX_VarTestEdit, whose Binding Type is Variable.
- Properties Binding readback (independent): `variables.FX_VarTest`, Binding Type Variable.
- Interpretation (not proven): the grid column may show only Property and collection bindings. Alternatively, the variable binding is stored in a form the column does not render. The UI cannot distinguish these. This is an unresolved observation; the Save readback (T8-equivalent, a later task) is the next place it could be tested. Not repaired here.

## 5. Handler verification

- Event Handlers (`t7-01`; `playwright/…09-05-45-506Z.yml`): one `StdFormRefreshCompleted` group.
  - Row 0: sequence `0`, Prompt, Disabled `false`, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
  - Row 1: sequence `1`, Set Values, Disabled `false`, `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- Sequence-0 full parameters (view-only Parameters dialog, cancelled, `t7-snapshot-02`): Message Text `Hello World`; OK is the only checked response; no other response checked. Caption and icon: not re-read in T7 (T4/T5 recorded blank caption and default icon; visible in the summary `ICON(DEFAULT)`).
- No dialog open after Cancel. Save enabled.

## 6. Form-variable definition (independent, observation only)

- Details > Variables (`t7-snapshot-03-variables-definition-independent-check.md`): Form category `Form - Persistent` lists only `InitialCommand`. Global groups begin with `ccvw_*`. **FX_VarTest is absent** as a Form-variable definition. Not created.
- The Set Values assignment row (`FX_VarTest=P(FX_Description)`) is a separate object and exists only in the handler's sequence-1 action. It is not evidence of a Form-variable definition.
- Limit: the T2 and T5 `VarTest` filter results (no rows) are from this same unsaved session; T7 did not repeat the filter.

## 7. Acceptance status

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified) | `t7-snapshot-00`: FX_Items, User footer, Save enabled, no dialog |
| AC-2 | Supported with limits (T1; re-compared T7) | 16 baseline rows; Pane containers unavailable as documented; Global variables virtualised |
| AC-3 | Supported (pre-Save): two ordered actions, sequence 0 Prompt unchanged, sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` | §5 |
| AC-4 | Supported (pre-Save): definition absent (Variables tab), assignment present (Set Values row), captured separately | §6 |
| AC-5 | **Supported** | New component with Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Location and Size recorded; 15 of 15 originals match T1; FX_RefreshButton matches; Pane containers unavailable as documented. Open: blank grid Data Source for the variable binding (§4) — displayed, not repaired. |
| AC-6 to AC-12 | Not tested (Save, reopen, runtime are later tasks) | — |

## 8. Unresolved properties and limits

- Pane (00) and Pane (01): Binding, Location, Size, and Events are genuinely unavailable (no Component property rows rendered in T1 or T7). Not inferred.
- FX_VarTestEdit Data Source grid cell: blank (§4). Cause unresolved.
- Stored form of the typed Variable binding (name reference vs. text): not established by the UI.
- Expression `P(FX_Description)` evaluation: not tested until runtime.
- Designer console: two `adorner` TypeErrors appeared on Pane selections in T1 and again in T7 (`console-2026-10-11T09-03-30-102Z.log`, 3 errors after the Pane (00) click). Not investigated, per the brief.

## 9. Counts (T7)

- Tab lists 1; tab selects 1 (tab 0).
- Fresh untargeted snapshots (browser_snapshot): 4 (`t7-snapshot-00`, `-01`, `-02`, `-03`).
- Screenshots: 2 (`t7-01`, `t7-02`).
- Successful clicks: **23** = Components tab 1; Components row clicks 16 (FormCollectionGrid, four GridColumns, Pane (00), Pane (01), eight Pane (01) children, FX_VarTestEdit; FX_RefreshButton not clicked, its T6 readback reused); Component tab 1 (re-selected after Pane (00) switched the panel to Form); Event Handlers tab 1; sequence-0 row select 1; Parameters open 1 (read-only); Parameters Cancel 1; Variables tab 1.
  - Of the 17 grid entries, 16 were clicked; the 17th (FX_RefreshButton) was not.
- Typing 0; key presses 0; hover 0; wheel 0; right-click 0.
- Save 0; Regenerate Form 0; Designer close/reopen 0.
- Components created, moved, resized, renamed, or deleted: **0**. Variables created or changed: 0. Handler actions added, changed or removed: 0. Parameters committed: 0 (Parameters Cancel only).
- Runtime open/close/activation: 0. FX_RefreshButton clicks: 0. Runtime data edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts, reauthentication: 0.
- Recovery events: 0 ref-not-found errors. (The stale-ref error of T6 was not repeated.)

## 10. Evidence files (T7)

- `T7-report.md` (this report).
- Screenshots (`evidence/EXP-056/`):
  - `t7-01-event-handlers-two-actions-prompt-readback-cancelled.png` — Event Handlers: sequence 0 Prompt summary and sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`; header `FX_VarTestEdit (Edit)`; Name `FX_VarTestEdit`; User footer. Proves the two-action state and header refresh. Does not show the Save state's underlying saved status.
  - `t7-02-final-pre-save-state-variables-definition-absent-save-enabled.png` — Variables tab with Form category `InitialCommand` only; Properties header `FX_VarTestEdit (Edit)`; undo active; User footer. Proves the definition absence at this checkpoint. Global rows partly off-frame.
- Accessibility snapshots: `t7-snapshot-00-fresh-designer-pre-save-verification.md`, `t7-snapshot-01-components-tab-expanded-inventory.md`, `t7-snapshot-02-sequence0-parameters-readback-readonly.md`, `t7-snapshot-03-variables-definition-independent-check.md`.
- Tool-generated snapshots (gitignored, `evidence/playwright/`): cited by name in §2–§6, including `page-2026-10-11T09-05-30-250Z.yml` (per-component readback source) and `page-2026-10-11T09-05-45-506Z.yml` (handler).

## 11. Recommendation

- AC-5 is supported. All essential properties match or are genuinely unavailable as documented.
- Next separate task: one ordinary Designer Save, followed by the saved-state readback (AC-6). The blank grid Data Source (§4) should be checked in that readback rather than repaired beforehand.
- Do not Save inside T7. Do not recreate FX_VarTest.

## 12. Repository writes (T7)

- `evidence/EXP-056/T7-report.md` (created)
- `evidence/EXP-056/t7-01`, `t7-02` PNG files; `t7-snapshot-00` … `t7-snapshot-03` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T7 section)
- No other repository files written.
