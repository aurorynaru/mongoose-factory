# EXP-058 T6 — read-only pre-Save AC-4 audit (no Save, no metadata change)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 5, task T6.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `9bee7a0c-c560-4629-a3f3-5a7623a3420a`.
Date: 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

## 0. Verdict

- **The AC-4 Save gate is NOT satisfied.** The Components grid's "Event to generate" column for FX_RefreshButton still reads `StdFormRefresh`, while the Component-tab Events > Primary reads `FX_Test`. The conflict persisted through the bounded reinspection (§3) and a fresh reselect. It is **unresolved**.
- **Everything else compared is unchanged** against the T1/T2 baseline: all 15 non-Pane components' readbacks, FX_VarTestEdit binding and geometry, FX_DescriptionEdit binding, the FX_VarTest Form - Temporary definition, Initial Command `Refresh`, unrelated Form properties, and the two-action FX_Test handler group.
- **Pane (00) and Pane (01)**: native property unavailability documented (not re-read; not inferred).
- **No Save invoked. No button property changed again. No Form closed or reopened. Runtime untouched.** Designer remains dirty (Save enabled).
- **Backend persistence is not claimed by any observation in this report.** No contradiction was resolved in a way that supports a persistence claim.

## 1. Pre-audit gate (fresh snapshot; read-only)

- `browser_tabs list`: tab 0 current (Designer), tab 1 runtime (not touched).
- Fresh snapshot `t6-snapshot-00-designer-fresh-pre-audit.md`:
  - Form tab `FX_Items` (line 211); footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (line 992);
  - **Save enabled** (line 11, no `[disabled]`); Undo enabled (line 53); Redo disabled (line 54); **Regenerate Form shown without `[disabled]`** (line 13; not clicked; T1 recorded it disabled while clean — this is a dirty-state observation, meaning not established);
  - no dialog;
  - handler grid: one `FX_Test` group (line 298), seq 0 Prompt (lines 300–303, `false`, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`), seq 1 Set Values (lines 307–310, `false`, `SETVARVALUES(FX_VarTest=P(FX_Description))`); grep `StdFormRefreshCompleted`: no match.

## 2. FX_RefreshButton: the two conflicting values (state A)

- Components tab (view only). Snapshot `t6-snapshot-01-components-tab-grid.md`.
- Grid row (line 511): `FX_RefreshButton | PushButton | Pane 1 | Tab 0 | Event to generate: StdFormRefresh` (cell line 518).
- FX_RefreshButton selected (selection only). Snapshot `t6-snapshot-02-fx-refreshbutton-selected-readback-A.md`. Screenshot `t6-01-state-A-components-grid-and-primary-FX_Test-before-reinspection.png`.
- Component-tab readback (state A): **Primary = `FX_Test`** (line 907, Events section; the Primary value cell is `selected`, the Primary editor is the Events group).
- **Grid "Event to generate" = `StdFormRefresh`** (line 518).

## 3. The single bounded view-only reinspection

1. Switched to the **Event Handlers** Details tab (view only). Snapshot `t6-snapshot-03-reinspection-event-handlers-tab.md`: `FX_Test` group with seq 0 Prompt and seq 1 Set Values, both `false`; no `StdFormRefreshCompleted`.
2. Switched back to the **Components** tab (view only). Snapshot `t6-snapshot-04-reinspection-components-tab-return.md`: grid row still reads `StdFormRefresh` (line 518) **before any reselect**.
3. Reselected FX_RefreshButton (selection only). Snapshot `t6-snapshot-05-fx-refreshbutton-reselected-readback-B.md`: row active (line 512); **grid still `StdFormRefresh` (row summary line 511 and cell line 518)**; **Primary still `FX_Test` (line 907)**.

**Result of the reinspection:** the grid did not update to `FX_Test` after a Details-tab round trip or a fresh reselect. It continued to show `StdFormRefresh`. Primary remained `FX_Test`. The conflict persisted.

## 4. Event to generate vs Events > Primary: same property or distinct fields?

Assessed from the visible interface only, without assuming either explanation:

| Observation | Evidence |
| --- | --- |
| The two values are displayed in two different UI locations with different labels: a grid column ("Event to generate") and a Properties Events-group row ("Primary"). | `t6-01`, `t6-snapshot-01` line 518, `t6-snapshot-02` line 907 |
| Before the change (T1, T5 pre-change), both displayed `StdFormRefresh`. | `t1-snapshot-04`, `t5-snapshot-02` lines 907 and 518 |
| After the change, Primary displays `FX_Test` in the Properties panel, and the grid column does not. | `t5-05`, `t6-snapshot-02`, `t6-snapshot-05` |
| Other components' grid "Event to generate" cells are blank, and their Primary rows are blank. No other component has a non-blank event, so no second case distinguishes the two. | Components grid (`t6-snapshot-01`) and component readbacks (§5) |
| The Properties panel does not show an "Event to generate" row. (Only the grid column carries that label, so the UI exposes no second readable field under that name.) | `t6-snapshot-02` Events group rows: Primary, Data Change, Lose Focus, Gain Focus, Drag From Events, Drop On Events |
| The grid cell is not refreshed by a Details-tab round trip or a reselect. | §3 |

**Conclusion from visible evidence:** the UI shows two displayed values for FX_RefreshButton's event. It does **not** show that they are the same stored property, and it does **not** show that they are distinct. The interface offers no visible mechanism that distinguishes "stale grid cache" from "a separate attribute". Only the following could settle it, and each would require a further action this audit is not permitted to take: a Designer Save and reload, a Form close and reopen (T6 prohibits), or a regeneration. The question is therefore **unresolved**. Neither explanation is asserted.

## 5. Full pre-Save comparison (T1/T2 baseline vs now; view-only readbacks)

Legend: **Same** = confirmed equal to baseline; **n/a** = not exposed by the UI; **New reading** = field not captured in T1 (no comparison possible).

### 5.1 Grid (all 17 entries; `t6-snapshot-01`)

| # | Name | Type | Data Source | Pane | Container | Tab | Event to generate | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | blank | — | — | — | blank | Same (row present); properties n/a (§5.4) |
| 2 | FormCollectionGrid | Grid | objects | 0 | blank | 0 | blank | Same |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | blank | Same |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | blank | Same |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | blank | Same |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | blank | Same |
| 7 | Pane (01) | Pane | blank | — | — | — | blank | Same (row present); properties n/a |
| 8 | FX_ItemStatic | Static | blank | 1 | blank | 5 | blank | Same |
| 9 | FX_ItemEdit | Edit | object.FX_Item | 1 | blank | 6 | blank | Same |
| 10 | FX_DescriptionStatic | Static | blank | 1 | blank | 7 | blank | Same |
| 11 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | blank | 8 | blank | Same |
| 12 | FX_CostStatic | Static | blank | 1 | blank | 9 | blank | Same |
| 13 | FX_CostEdit | Edit | object.FX_Cost | 1 | blank | 10 | blank | Same |
| 14 | FX_UMStatic | Static | blank | 1 | blank | 11 | blank | Same |
| 15 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | blank | 12 | blank | Same |
| 16 | FX_RefreshButton | PushButton | blank | 1 | blank | 0 | **StdFormRefresh** | **Conflict** with Primary `FX_Test` (§2–4); unresolved |
| 17 | FX_VarTestEdit | Edit | variables.FX_VarTest | 1 | blank | 0 | blank | Same |

All 17 names and types are present and match. The grid shows 17 entries.

### 5.2 Native Component readbacks, 15 non-Pane entries

Values from the Component tab (`t6-snapshot-02`, `t6-02`, and the auto-captured accessibility snapshots listed in §9). Binding Type and Binding are blank where stated.

| Component | Caption | Binding Type / Binding | Location | Size | Tab Order | Primary / Data Change / Lose Focus / Gain Focus | Result vs T1/T2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FormCollectionGrid | blank | Primary Collection Grid / `objects` | 0; 0 | 11; 21 | 0 | blank ×4 | Same |
| FX_ItemGridCol | `FX_sItem` | Property / `object.FX_Item` | 0; 0 | 10; 0 | 1 | blank ×4 | Same; caption **New reading** |
| FX_DescriptionGridCol | `FX_sDescription` | Property / `object.FX_Description` | 0; 0 | 10; 0 | 2 | blank ×4 | Same; caption **New reading** |
| FX_CostGridCol | `FX_sCost` | Property / `object.FX_Cost` | 0; 0 | 10; 0 | 3 | blank ×4 | Same; caption **New reading** |
| FX_UMGridCol | `FX_sUM` | Property / `object.FX_UM` | 0; 0 | 10; 0 | 4 | blank ×4 | Same; caption **New reading** |
| FX_ItemStatic | `FX_sItem` | None / blank | 1; 3 | 20; 1 | 5 | blank ×4 | Same |
| FX_ItemEdit | `C(FX_ItemStatic)` | Property / `object.FX_Item` | 1; 23.75 | 37.05; 2 | 6 | blank ×4 | Same |
| FX_DescriptionStatic | `FX_sDescription` | None / blank | 3.25; 3 | 20; 1 | 7 | blank ×4 | Same |
| **FX_DescriptionEdit** | `C(FX_DescriptionStatic)` | Property / **`object.FX_Description`** | 3.25; 23.75 | 37.05; 2 | 8 | blank ×4 | **Same** (binding and geometry confirmed) |
| FX_CostStatic | `FX_sCost` | None / blank | 5.5; 3 | 20; 1 | 9 | blank ×4 | Same |
| FX_CostEdit | `C(FX_CostStatic)` | Property / `object.FX_Cost` | 5.5; 23.75 | 37.05; 2 | 10 | blank ×4 | Same |
| FX_UMStatic | `FX_sUM` | None / blank | 7.75; 3 | 20; 1 | 11 | blank ×4 | Same |
| FX_UMCombobox | `C(FX_UMStatic)` | Property / `object.FX_UM` | 7.75; 23.75 | 37.25; 2.15 | 12 | blank ×4 | Same |
| **FX_RefreshButton** | `FX_Refresh` | None / blank | 12.1666666666667; 5.25 | 14.25; 1.89 | 0 | **Primary `FX_Test`**; Data Change, Lose Focus, Gain Focus blank | Name, Caption, Type (PushButton), Binding Type, Binding, Location, Size, Tab, Data Change/Lose/Gain, Drag From/Drop On (0 event(s)) **Same**; **Primary changed (intended, §2)** |
| **FX_VarTestEdit** | blank | **Variable / `variables.FX_VarTest`** | 12.7222222222222; 30.25 | 37.05; 2 | 0 | blank ×4 | **Same** (binding and geometry confirmed) |

Notes:
- FX_RefreshButton's Drag From / Drop On counts were `0 event(s)` in both T1 and T6.
- FX_VarTestEdit's Properties "Data Source" row is blank (as in T2), while its grid Data Source and its Binding both show `variables.FX_VarTest`. Consistent with T2 §6.

### 5.3 Form-level (Form tab, view only; `t6-snapshot-06`)

| Property | Value now | T1 baseline | Result |
| --- | --- | --- | --- |
| Name | `FX_Items` | `FX_Items` | Same |
| Version | `User version for user anton.ramos@3mworks.com.ph` | same | Same |
| Device Type / Form Type / Is Master | Default / Normal / True | same | Same |
| Foreground Color | `#000000` | same | Same |
| **Initial Command** | **`Refresh`** | `Refresh` | **Same** |
| Script Language | Visual Basic | same | Same |
| Close Box / Minimize-Maximize | True / True | same | Same |
| Enable Advanced Filter | False | False | Same |
| Help Context ID | -1 | -1 | Same |
| Splitter / Splitter Position | Vertical / 11 | same | Same |
| Pane 0 / Pane 1 Scroll Bars | Never / As Needed | same | Same |
| Unit / Size | Char / 69; 21 | same | Same |
| Synchronize FlexLayout attributes | True | True | Same |
| Caption, Description, Theme Class, Filter Form, Help File Name | blank | blank | Same (blank) |
| Footer scope | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | same | Same |

### 5.4 Pane (00) and Pane (01): documented unavailability

- Component-tab property tree is empty for both Pane entries (T2 `t2-01`, `t2-02`). Binding, Location, Size, Tab Order, and events are **not exposed** by this UI. Not re-read in T6 (no change expected; not inferred). The grid cells for both are blank, consistent with T1/T2.

### 5.5 FX_VarTest Form - Temporary definition (Variables tab, view only; `t6-snapshot-07`)

| Field | Value now | T1/T2 | Result |
| --- | --- | --- | --- |
| Category | Form - Temporary (line 300) | Form - Temporary | Same |
| Name | `FX_VarTest` (line 464) | same | Same |
| Value | `~LIT~()` (line 476) | `~LIT~()` | Same |
| Persistent | `False` (line 482) | False | Same |
| Global | `False` (line 491) | False | Same |
| Form - Persistent | `InitialCommand` only | same | Same |

### 5.6 Event Handlers (view only; `t6-snapshot-00`, `t6-snapshot-03`)

- One `FX_Test` group (line 298 in `t6-snapshot-00`; line 298 in `t6-snapshot-03`).
- Seq 0 Prompt: Disabled `false`; summary `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
- Seq 1 Set Values: Disabled `false`; summary `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- Exactly two handler actions. No `StdFormRefreshCompleted` text in either snapshot. Unchanged from T4 and T5.

## 6. Discrepancy matrix (field-by-field)

| Field | Status | Explanation |
| --- | --- | --- |
| Grid "Event to generate" for FX_RefreshButton | **UNRESOLVED CONTRADICTION** | `StdFormRefresh` (grid) vs `FX_Test` (Primary). Persists after reinspection and reselect. Cannot be resolved from visible evidence without a Save/reload or reopen (prohibited in T6). |
| Events > Primary for FX_RefreshButton | Changed (intended) | `StdFormRefresh` → `FX_Test`. Confirmed in the Component tab. |
| Other FX_RefreshButton properties | Confirmed unchanged | §5.2 |
| 15 non-Pane components (binding, geometry, tab, events, caption) | Confirmed unchanged | §5.2 |
| Captions of the 4 grid columns | New reading (not in T1) | Not a comparison; recorded for the record |
| FX_VarTestEdit binding and geometry | Confirmed unchanged | §5.2 |
| FX_VarTestEdit Properties "Data Source" row | Blank; consistent across all bound components | Not a discrepancy (T2 §6) |
| FX_DescriptionEdit binding and geometry | Confirmed unchanged | §5.2 |
| FX_VarTest definition | Confirmed unchanged | §5.5 |
| Initial Command | Confirmed unchanged (`Refresh`) | §5.3 |
| Unrelated Form properties | Confirmed unchanged | §5.3 |
| Pane (00) / Pane (01) properties | Unavailable (documented) | §5.4 |
| Handler grouping (FX_Test, two actions, no old group) | Confirmed unchanged | §5.6 |
| Regenerate Form shown enabled (dirty-state observation) | Observation; meaning not established | Not clicked; not a comparison item |
| Designer console 4 errors (from 3 at T2) | Unresolved; source unidentified | No diagnostics used |

**Summary:** one unresolved contradiction (grid "Event to generate" vs Primary). No other field differs from its baseline. Every other comparison field is confirmed unchanged. The Save gate remains **not satisfied** because the contradiction is open.

## 7. AC-4 gate status

- **AC-4 Save gate: NOT SATISFIED.** The grid/Primary conflict is unresolved. The brief requires "FX_RefreshButton Events > Primary equals FX_Test" **and** "all other button properties match" with discrepancies explicitly recorded. Primary equals `FX_Test`; the other button properties match; but the grid column shows a different value for the same button's event, and that discrepancy cannot be resolved from visible evidence.
- The coordinator must decide whether to (a) accept the grid column as an unrefreshed display artefact to be checked after the single Save, or (b) stop. T6 did not attempt speculative repair, which the brief forbids.

## 8. Action counts (T6)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Designer clicks (all view or selection; all succeeded) | 21: Components tab 2; Event Handlers tab 1 (reinspection); FX_RefreshButton row 2; FX_DescriptionEdit 1; FX_VarTestEdit 1; grid rows for the other 12 non-Pane components 12; Form tab 1; Variables tab 1 |
| Designer snapshots saved | 8 (`t6-snapshot-00` to `-07`) |
| Screenshots saved | 2 (`t6-01`, `t6-02`) |
| Accessibility snapshots auto-captured by click calls, read by grep (not copied into `evidence/EXP-058/`) | 14 (under `evidence/playwright/`, gitignored; listed in §9) |
| Metadata-changing actions | **0** |
| Designer Save | **0** |
| Regenerate, Undo, Redo | 0 (Regenerate was visible; not clicked) |
| Button property change | 0 (no further mutation; the T5 change is not reverted or repeated) |
| Typing / key presses | 0 / 0 |
| Dialogs opened | 0 |
| Form open, close, reopen | 0 |
| Runtime tab selection, click, activation, prompt, typing | 0 |
| Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript | 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

Note on the reinspection count: the single bounded reinspection (Event Handlers round trip) is distinct from the comparison visits to the Variables and Form tabs, which were read-only comparison reads made after the reinspection. The Variables tab is a Details tab, so this is disclosed here.

Tool-locator note: the wrapper's reported locators for clicks in this task were `getByRole('treeitem', { name: … })`, `getByRole('tab', { name: … })`, matching the refs used; no disagreement with the refs was observed for this task (unlike T3–T5).

## 9. Evidence files

Under `evidence/EXP-058/`:
- `T6-pre-save-AC4-readonly-audit-report.md` (this report).
- `t6-snapshot-00-designer-fresh-pre-audit.md` (identity, Save enabled, handler group).
- `t6-snapshot-01-components-tab-grid.md` (17-row grid; FX_RefreshButton row).
- `t6-snapshot-02-fx-refreshbutton-selected-readback-A.md` (state A; Primary FX_Test; grid StdFormRefresh).
- `t6-snapshot-03-reinspection-event-handlers-tab.md` (reinspection step 1).
- `t6-snapshot-04-reinspection-components-tab-return.md` (reinspection step 2; grid still StdFormRefresh before reselect).
- `t6-snapshot-05-fx-refreshbutton-reselected-readback-B.md` (state B after reselect; conflict persists).
- `t6-snapshot-06-form-properties-tab-comparison.md` (Form-level comparison).
- `t6-snapshot-07-variables-tab-FX_VarTest-definition.md` (FX_VarTest definition).
- `t6-01-state-A-components-grid-and-primary-FX_Test-before-reinspection.png` — shows the grid row and Primary together before reinspection. Proves the coexisting values in one frame; does not prove the cause.
- `t6-02-fx-vartestedit-selected-properties-readback.png` — FX_VarTestEdit selected: Properties Design section (Name `FX_VarTestEdit`, Type Edit) and the grid row (Data Source `variables.FX_VarTest`, Pane 1, Tab 0). The Binding, Location, and Size rows are scrolled out of this frame, so those values rest on the accessibility readback (`evidence/playwright/page-2026-10-11T10-23-04-772Z.yml`, §5.2), not on this image.

Auto-captured accessibility snapshots used for the per-component readbacks (gitignored, tool-generated; cited by path for reproducibility): `evidence/playwright/page-2026-10-11T10-22-58-507Z.yml` (FX_DescriptionEdit), `T10-23-04-772Z` (FX_VarTestEdit), `T10-23-11-482Z` (FormCollectionGrid), `T10-23-16-524Z` (FX_ItemGridCol), `T10-23-22-268Z` (FX_DescriptionGridCol), `T10-23-27-538Z` (FX_CostGridCol), `T10-23-33-702Z` (FX_UMGridCol), `T10-23-38-649Z` (FX_ItemStatic), `T10-23-43-663Z` (FX_ItemEdit), `T10-23-53-134Z` (FX_DescriptionStatic), `T10-23-58-111Z` (FX_CostStatic), `T10-24-02-928Z` (FX_CostEdit), `T10-24-08-093Z` (FX_UMStatic), `T10-24-13-123Z` (FX_UMCombobox).

## 10. Repository confinement (T6)

- Written by this worker: `evidence/EXP-058/T6-pre-save-AC4-readonly-audit-report.md`, `evidence/EXP-058/t6-*` (8 snapshots, 2 screenshots), and the EXP-058 experiment record (status line and a T6 section).
- Tool-generated, gitignored captures under `evidence/playwright/` (the auto-captured accessibility snapshots and console logs for this window) are not worker-authored.
- No other file was written.
