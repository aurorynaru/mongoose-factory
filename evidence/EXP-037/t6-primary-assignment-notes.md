# EXP-037 — T6 Button Events > Primary assignment and pre-Save verification (unsaved; no Designer Save)

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 5 · Task T6
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `9aa1f71b-0343-455d-8932-5d2042399b4b`)
Scope of this task: assign exactly `FX_ButtonPromptEvent01` to `FX_SingleButton01` Events > Primary, unsaved, and verify the complete pre-Save definition. **Not done:** Designer Save; close/reopen; runtime activation; Regenerate; unload; session change; any other property change; any new handler or action.
Recovery allowance: T4 corrected-inspection allowance and T5 fresh recovery snapshot are both already exhausted. **No recovery snapshot or corrected inspection was used in T6.** No ambiguous state arose.

## Pre-mutation identity and state (rendered, not URL)

| Check | Result | Evidence |
|---|---|---|
| Tabs | Designer is tab 1 (selected after navigation); Web Client tab 0 untouched | `t6-01-preflight-snapshot.md`, `t6-02-designer-selected-snapshot.md` |
| Target Form | Tab heading `FX_SingleButtonLab01` selected, closable control present | `t6-02…` lines 211–214 |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t6-02…` line 600; `t6-03-preflight-viewport.png` (bottom-left) |
| URL | Still lacks `MGForm` (not used for identity) | `t6-02…` page URL |
| Dirty state (pre) | Save enabled (no `[disabled]`), i.e. unsaved changes present | `t6-02…` line 11; `t6-03…png` (Save icon active) |
| Handler (pre) | One group `FX_ButtonPromptEvent01`, one row: sequence 0, Prompt, Disabled false, `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` | `t6-02…` lines 251–256; `t6-03…png` |
| Button selection | Components row `FX_SingleButton01` / PushButton (Pane 0, Tab 0) selected via the Components tab (selection only) | `t6-04-components-tab-snapshot.md`, `t6-05-button-selected-snapshot.md`, `t6-06-button-selected-viewport.png` |
| Properties header | `FX_SingleButton01 (Button)` (after switching the Properties panel to its Component tab) | `t6-07-component-properties-snapshot.md` line 289; `t6-08-primary-before-edit-viewport.png` |
| Primary (pre-edit) | **Blank**. Events group expanded; Primary row shows only the picker arrow and "..." button. | `t6-07…` lines 598–605; `t6-08…png` (viewed) |
| Other Events (pre-edit) | Data Change, Lose Focus, Gain Focus blank; Drag From Events and Drop On Events `0 event(s)` | `t6-08…png` |

## Mutation (one assignment, committed by Enter)

1. **Components tab** (Details panel, view control) clicked once; then **Component tab** (Properties panel) clicked once. View switches only.
2. **Primary picker arrow** clicked once (`e1403`, the arrow of the Primary value cell). The picker opened with `FX_ButtonPromptEvent01` as the **first** option, above the standard `Std…` events (`StdAppLaunchInbox`, `StdAppLaunchTasks`, `StdCurComp…`). Evidence: `t6-09-primary-picker-open-viewport.png` (viewed), `t6-10-primary-picker-open-snapshot.md` (option `e1695`).
3. **Option `FX_ButtonPromptEvent01` clicked once** (`e1695`). No standard event was selected. Evidence: `t6-11-primary-after-select-viewport.png` (viewed; value truncated `FX_ButtonPromptE▾`), `t6-12-primary-after-select-snapshot.md` (combobox `[active]` with value `FX_ButtonPromptEvent01`, no list open).
4. **Enter pressed once** to commit (the same commit mechanism used for Name/Caption in EXP-036). This was the one key action in T6.

## Post-commit state (verified)

- `t6-13-primary-after-enter-snapshot.md`: the combobox is **no longer `[active]`**. The Primary row is a plain cell `gridcell "FX_ButtonPromptEvent01" [active] [selected]`, not an editor. No listbox, no dialog.
- `t6-14-primary-committed-viewport.png` (viewed): Primary shows `FX_ButtonPromptE▾` in the narrow value column, rendered as a committed cell (highlighted, no white editor border). The column is too narrow to show the full string; the full value comes from the accessibility tree.
- Name, Caption, Type **unchanged** (read in `t6-13`): Name `FX_SingleButton01` (line 315); Caption `Factory Test Button` (line 327–329); Type `PushButton` (line 337–339); header `FX_SingleButton01 (Button)`.
- **Save remained enabled** (`t6-13` line 11, no `[disabled]`). No dialog or browser prompt in any snapshot.

## Pre-Save reinspection of the Form Event Handlers list (view-only)

- Event Handlers tab (Details panel) clicked once (view control). `t6-15-event-handlers-recheck-snapshot.md` lines 250–256: one group `FX_ButtonPromptEvent01`; one row: sequence `0`, Type `Prompt`, Disabled `false`, Response Parameters `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Exactly one handler, exactly one action, literal message `Factory Test Prompt`, OK-only response.
- `t6-16-event-handlers-recheck-viewport.png` (viewed): the same list, and the Event To Handle editor shows `Event FX_ButtonPromptEvent01`, Sequence 0, Disabled False.
- The Button's Primary value in the same session is `FX_ButtonPromptEvent01`, as recorded above.

## Anomalies / limits (disclosed)

1. **Primary column truncation.** The committed value is visibly truncated (`FX_ButtonPromptE▾`). The full string `FX_ButtonPromptEvent01` is confirmed only by the accessibility tree (`t6-12`, `t6-13`).
2. **Components grid "Event to generate" column** remains blank for `FX_SingleButton01` (`t6-06…png`). Whether this column should reflect the Primary event is **unresolved**. The brief does not define it. It is not treated as evidence of either outcome.
3. **URL** still lacks `MGForm`. Identity was established from the Form tab heading and User footer, as instructed.
4. No other property was edited. Events > Data Change / Lose Focus / Gain Focus / Drag / Drop were not touched.

## Counts (T6)

| Item | Count |
|---|---|
| Designer tab select | 1 (navigation) |
| Components tab (Details, view) | 1 |
| Component tab (Properties, view) | 1 |
| Button row selection (Components) | 1 (selection only) |
| Primary picker open | 1 |
| Primary option selection (`FX_ButtonPromptEvent01`) | 1 |
| Enter (commit Primary) | 1 |
| Event Handlers tab (Details, view) | 1 |
| Designer Save | **0** |
| Handler creation / edit / Add / Delete / Copy | 0 |
| Standard event selected for Primary | 0 |
| Other property change | 0 |
| Regenerate / unload | 0 |
| Close / reopen | 0 |
| Runtime activation | 0 |
| Scope / preference / session change | 0 |
| Browser JavaScript authored by worker | 0 |
| Authentication | 0 |
| Cold MGForm navigation | 0 |
| Recovery snapshot / corrected inspection | 0 / 0 (none needed; none authorized) |

## Readiness

The complete definition is in the unsaved Form: the custom event `FX_ButtonPromptEvent01` with one Prompt action (literal `Factory Test Prompt`, OK-only), and `FX_SingleButton01` Events > Primary = `FX_ButtonPromptEvent01` (Name, Caption, Type, and layout unchanged). Save is enabled. The definition is **ready for a single ordinary Designer Save in a separately authorized task**. Save has not been performed here.
