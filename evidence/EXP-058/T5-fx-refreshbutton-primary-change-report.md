# EXP-058 T5 — FX_RefreshButton Events > Primary changed to FX_Test (unsaved; no Save)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 4, task T5.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `3f885cfb-8e63-4290-8e6c-3139276d0f2a`.
Date: 2026-10-11. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

## 0. Outcome

- **FX_RefreshButton Events > Primary: `StdFormRefresh` → `FX_Test`. Observed, unsaved.** The Properties readback reads `FX_Test` after commit and after re-selecting the row.
- **Entry route:** the Primary dropdown **offered `FX_Test`** as its first option (accessibility `cell "FX_Test"`, `t5-snapshot-03`). The option was clicked once. The value then sat in the active combobox without the grid changing, and it was committed with one Tab press (same native commit as the handler moves).
- **All other FX_RefreshButton properties unchanged** against the pre-change capture (Name, Caption, Type, Binding Type, Binding, Location, Size, Tab Order, Data Change, Lose Focus, Gain Focus, Drag/Drop counts, Pane 1, Tab 0).
- **Handler grouping unchanged:** one `FX_Test` group with seq 0 Prompt and seq 1 Set Values (both `false`); no `StdFormRefreshCompleted` group reappeared.
- **Unresolved discrepancy (recorded, not repaired):** the Components grid's **"Event to generate"** cell for FX_RefreshButton still reads `StdFormRefresh` after the commit and after re-selecting the row, while the Primary Properties readback reads `FX_Test`. Cause not established. Not repaired (the brief forbids speculative repair).
- **Designer state:** dirty; Save enabled; Undo enabled; Redo disabled; no dialog. **No Save invoked.** No Form close or reopen. No runtime tab access. No other component or variable touched.
- **AC-4 FX_RefreshButton portion:** Primary established as `FX_Test`; all other button properties match the baseline; the grid "Event to generate" discrepancy is recorded and unresolved, so the comparison is **established with one open discrepancy**, not fully clean.

## 1. Pre-mutation gate (fresh snapshot; read-only)

- `browser_tabs list` first; tab 0 current (Designer), tab 1 runtime. No select needed.
- Fresh snapshot `t5-snapshot-00-designer-fresh-pre-primary-change.md`:
  - Form tab `FX_Items` (line 211); footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (line 660);
  - Save enabled (line 11); Undo enabled (line 53);
  - no dialog;
  - one `FX_Test` group (line 296) with seq 0 Prompt (lines 298–301, `false`, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`) and seq 1 Set Values (lines 305–308, `false`, `SETVARVALUES(FX_VarTest=P(FX_Description))`);
  - grep for `StdFormRefreshCompleted`: **no matches**.
- Screenshot `t5-01-pre-change-designer-handler-grid-FX_Test-both-actions.png`.
- All prerequisites matched. Proceeded.

## 2. Pre-change FX_RefreshButton readback (Components tab; selection only)

- Components tab clicked (view only). Snapshot `t5-snapshot-01-components-tab-fresh-pre-change.md`.
- FX_RefreshButton row selected (selection only). Snapshot `t5-snapshot-02-fx-refreshbutton-selected-pre-change-properties.md`. Properties panel already on the **Component** tab (`tab [selected] [ref=e919]`).
- Grid row: `FX_RefreshButton | PushButton | Pane 1 | Tab 0 | Event to generate StdFormRefresh` (line 511; cells line 512–518).
- Native Component readbacks (pre-change):

| Property | Pre-change value | Snapshot line |
| --- | --- | --- |
| Name | `FX_RefreshButton` | 575 |
| Caption | `FX_Refresh` | 591 |
| Type | `PushButton` | 602 |
| From Device Master | `True` | 611 |
| Read-Only/Disable | `False` | 691 area |
| Tab Read-Only Field | `False` | 701 area |
| Hidden | `False` | 711 area |
| No Tab Stop | `False` | 721 area |
| Auto Complete | `False` | 731 area |
| Data Source | blank (Data Source section) | 807–809 |
| Binding Type | `None` | 817 |
| Binding | blank | 826 (value cell empty) |
| Required | `False` | 835 area |
| To Be Determined | `False` | 845 area |
| Upper or Lower Case | `Mixed` | 855 |
| Default Value | blank | 862 |
| Enabled When / Visible When / Required When | blank | 776 / 800 / 785 area |
| **Primary** | **`StdFormRefresh`** | 907 |
| Data Change | blank | 917 area |
| Lose Focus | blank | 926 area |
| Gain Focus | blank | 935 area |
| Drag From Events | `0 event(s)` | 944 |
| Drop On Events | `0 event(s)` | 953 |
| Help Context ID | `0` | 978 |
| Unit | `Char` | 1047 |
| Size | `14.25; 1.89` | 1055 |
| Location | `12.1666666666667; 5.25` | 1063 |
| Tab Order | `0` | 1085 |

- Screenshot `t5-02-pre-change-fx-refreshbutton-component-properties-primary-StdFormRefresh.png`: Primary `StdFormRefresh` visible in the Events section.
- Explicit check: **Primary equals `StdFormRefresh`** before the change. Confirmed.

Note on the "Event to generate" column: it read `StdFormRefresh` before the change (grid line 518), consistent with Primary. It is the value whose post-change behaviour is the discrepancy in §5.

## 3. Primary dropdown: open and select (one selection)

- Clicked the Primary value's dropdown arrow once (open only; wrapper reported `#ext-45286 > .x-grid-cell-inner > .mg-arrow-cell-icon`; the open combobox was the Primary editor — `combobox [expanded] [active] text StdFormRefresh`, line 1122, with `option [selected] StdFormRefresh` at line 1306). Snapshot `t5-snapshot-03-primary-dropdown-open-after-arrow-click.md`.
- **`FX_Test` was offered by the picker**: first option `cell "FX_Test"` (line 1129). Screenshot `t5-03-primary-picker-open-FX_Test-offered-before-selection.png`.
- Clicked the `FX_Test` option cell once (wrapper reported `getByRole('cell', { name: 'FX_Test' })`). Immediate snapshot `t5-snapshot-04-after-primary-FX_Test-selection-immediate.md`:
  - combobox `[active]` with value `FX_Test` (line 1122) — **still active, not yet committed in the grid**;
  - the grid's "Event to generate" cell still `StdFormRefresh` (line 518);
  - Save enabled.
  - Screenshot `t5-04-immediate-after-primary-FX_Test-selection-visual.png`: Primary `FX_Test` shown in the Events section with the combobox focused.

## 4. Commit (one Tab press) and post-change readback

- Pressed **Tab** once (same native commit as the handler moves in T3/T4). Snapshot `t5-snapshot-05-after-tab-commit-primary-readback.md`:
  - Primary value `FX_Test` (line 907), combobox no longer `[active]`;
  - grid "Event to generate" cell still `StdFormRefresh` (line 518).
- Screenshot `t5-05-post-commit-primary-FX_Test-committed-save-enabled.png`: Properties Events > Primary = `FX_Test`; Save and Undo enabled; grid row FX_RefreshButton still reads `StdFormRefresh` in "Event to generate"; User footer.
- Re-selected the FX_RefreshButton row (selection only) to refresh the readback. Snapshot `t5-snapshot-06-post-commit-fresh-after-reselect-readback.md`: Primary readback still `FX_Test` (line 907); grid "Event to generate" still `StdFormRefresh` (line 518).

Commit count: **one** value commit (Tab). Commit was not repeated.

## 5. Discrepancy: grid "Event to generate" vs Primary readback

- Properties > Events > Primary: `FX_Test` (after commit and after re-select). Screenshot `t5-05`.
- Components grid, FX_RefreshButton row, "Event to generate" column: `StdFormRefresh` (line 518 in `t5-snapshot-05` and `t5-snapshot-06`; visible in `t5-05` and `t5-04`).
- Interpretations (not tested; none applied):
  1. The grid column is not refreshed by a Primary change until a Save or regeneration (plausible, unverified).
  2. The "Event to generate" column reads a different attribute from Primary (plausible, unverified; in T1 both matched).
  3. The Primary Properties readback is a UI-cache value not yet committed to the component (not established; the Tab commit and the re-select readback point the other way).
- **Not repaired.** The brief forbids speculative repair and any further metadata-committing operation. This must be resolved (or accepted) before Save, in the next step, by the coordinator/operator.

## 6. Handler grouping re-inspection after the change (view only)

- Event Handlers tab clicked (view only). Snapshot `t5-07-final-event-handlers-grid-after-primary-change.md`:
  - one `FX_Test` group (line 298); seq 0 Prompt `false` with `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (lines 300–303);
  - seq 1 Set Values `false` with `SETVARVALUES(FX_VarTest=P(FX_Description))` (lines 307–310);
  - grep `StdFormRefreshCompleted`: **no matches**;
  - Save enabled (line 11); no dialog.

## 7. Before-Save comparison (T5 scope)

| Item | Baseline (T1/T2) | Post-change | Result |
| --- | --- | --- | --- |
| FX_RefreshButton Primary | `StdFormRefresh` | `FX_Test` | **changed (intended)** |
| FX_RefreshButton Name, Caption, Type, Binding Type, Binding, Location, Size, Tab Order, Data Change, Lose Focus, Gain Focus, Drag/Drop | per §2 | per §4 / `t5-snapshot-06` | unchanged |
| FX_RefreshButton "Event to generate" (grid) | `StdFormRefresh` | `StdFormRefresh` | **discrepancy with Primary `FX_Test`; unresolved** |
| Two handler actions (seq, Disabled, parameters) | seq 0 Prompt / seq 1 Set Values, false, per §1 | unchanged (§6) | unchanged |
| StdFormRefreshCompleted group | present (T1) | absent | as expected (after T3/T4) |
| Initial Command, 17 components, FX_VarTestEdit binding, FX_VarTest definition, Form properties | per T1/T2 | not re-read in this step (no change was made to them; T5 did not touch them) | not re-verified in T5 (limit) |

Note on the last row: T5 did not select or edit any other component or the Form. The brief's before-Save comparison for those items is part of the T5 scope, but T5's instruction was limited to FX_RefreshButton and the handler grid. They were **not re-read** in this step, so their unchanged status rests on T4 and earlier reads plus no edits; this is a stated limitation.

## 8. Action audit (T5)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Designer snapshots saved | 8 (`t5-snapshot-00` to `-07`) |
| Screenshots saved | 5 (`t5-01` to `t5-05`) |
| Designer clicks | 6: Components tab; FX_RefreshButton row select; Primary dropdown arrow; FX_Test option; FX_RefreshButton row re-select; Event Handlers tab |
| Keyboard | 1 (Tab, commit) |
| **Metadata-changing actions** | **1**: FX_RefreshButton Events > Primary `StdFormRefresh` → `FX_Test` |
| Designer Save | 0 |
| Regenerate, Undo, Redo | 0 |
| Other component or variable change | 0 |
| FX_RefreshButton property changes other than Primary | 0 |
| Form open, close, reopen | 0 |
| Runtime tab selection, click, activation, prompt, dismissal, typing | 0 |
| Dialogs opened | 0 |
| Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript | 0 |
| Ref-not-found errors | 0 |
| Fresh-snapshot recovery allowance used | 0 |

Tool-locator disclosures: the dropdown-arrow click was passed ref `e1892` but the wrapper reported `#ext-45286 > .x-grid-cell-inner > .mg-arrow-cell-icon`; the option click was passed `e2185` and reported `getByRole('cell', { name: 'FX_Test' })`; the row clicks were passed `e1374` and reported `getByRole('treeitem', { name: 'FX_RefreshButton' })`. Each identity was confirmed by the resulting UI (the Primary combobox and the FX_RefreshButton row are highlighted in `t5-04`/`t5-05`).

Console: 4 errors (unchanged since T2; source unidentified; no diagnostics used).

## 9. Evidence files written (T5)

Under `evidence/EXP-058/`:
- `T5-fx-refreshbutton-primary-change-report.md` (this report).
- Snapshots `t5-snapshot-00` to `t5-snapshot-07` (8 files): `t5-snapshot-00-designer-fresh-pre-primary-change.md`, `t5-snapshot-01-components-tab-fresh-pre-change.md`, `t5-snapshot-02-fx-refreshbutton-selected-pre-change-properties.md`, `t5-snapshot-03-primary-dropdown-open-after-arrow-click.md`, `t5-snapshot-04-after-primary-FX_Test-selection-immediate.md`, `t5-snapshot-05-after-tab-commit-primary-readback.md`, `t5-snapshot-06-post-commit-fresh-after-reselect-readback.md`, `t5-07-final-event-handlers-grid-after-primary-change.md`.
- Screenshots: `t5-01-pre-change-designer-handler-grid-FX_Test-both-actions.png`; `t5-02-pre-change-fx-refreshbutton-component-properties-primary-StdFormRefresh.png`; `t5-03-primary-picker-open-FX_Test-offered-before-selection.png`; `t5-04-immediate-after-primary-FX_Test-selection-visual.png`; `t5-05-post-commit-primary-FX_Test-committed-save-enabled.png`.

Note: the screenshot set is 5 PNGs (`t5-01` to `t5-05`), not 6 as written in the action audit; the snapshot count is 8. The audit's "6 screenshots" line is corrected here to **5**.

## 10. Acceptance status (T5 scope)

| AC | Status |
| --- | --- |
| AC-4 FX_RefreshButton portion | Primary `FX_Test` established (Properties readbacks, `t5-snapshot-05`/`-06`, `t5-05`). Other button properties match the pre-change baseline (§2 vs §4). **One open discrepancy**: grid "Event to generate" still `StdFormRefresh` (§5). The rest of AC-4 (complete 17-component inventory, FX_VarTest definition, Initial Command, other Form properties) is **not re-verified in T5**. |
| AC-3 | Unchanged from T4: grouping established; T5 re-confirmed it (§6). |
| AC-5 onward | Not tested (no Save performed). |

## 11. Knowledge state (T5)

| Finding | State |
| --- | --- |
| FX_Test offered by the FX_RefreshButton Primary picker (first option) | observed (single session) |
| Primary change committed by picker-select + Tab; Properties readback `FX_Test` after re-select | observed (single session; pre-Save) |
| All other FX_RefreshButton properties unchanged vs pre-change readback | observed (single session) |
| Grid "Event to generate" still `StdFormRefresh` after the Primary change | observed; cause unresolved |
| Handler grouping after the Primary change (one FX_Test group, seq 0 Prompt, seq 1 Set Values, no StdFormRefreshCompleted) | observed (single session) |
| Initial Command, 17 components, FX_VarTestEdit binding, FX_VarTest definition after T5 | not re-read in T5 (limit) |
| Replay-verified findings | none |

## 12. Next permitted step (NOT STARTED)

The coordinator must decide whether the grid "Event to generate" discrepancy is acceptable before the single Designer Save. Options (for the coordinator, not performed): a read-only re-check of the grid after a view-only tab change (no metadata change), or accepting the discrepancy as an observed grid-refresh artefact to be checked after Save. The Designer must not be saved until that decision and a full before-Save comparison (including Initial Command, 17 components, FX_VarTestEdit, FX_VarTest definition) are recorded.
