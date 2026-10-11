# EXP-055 T3 — one Form-level handler association (StdFormRefreshCompleted), unsaved

Date: 2026-10-11. Run R-20261011-153829-vsIH, EXP-055, cycle 2, task T3.
Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `2bf08fed-f6f9-4e97-9e24-41c30c52aa09`.
Mode: one handler association; no Prompt configuration; **no Designer Save**; no close/reopen; no runtime; no Diagnostics or User Preferences; no Diagnostic Log operation.

## Counts (this task)

- Handlers created: **1** (one `StdFormRefreshCompleted` group, one row).
- Handler actions added or configured by the worker: **0** (see §5: a sequence-0 row appeared on OK; the worker did not set its Response Type).
- Prompt parameter editors opened: 0. Typed text: 0. Key presses: 0.
- Dialog OK: **1**. Dialog Cancel: 0. New clicks: **1**.
- Designer Save: **0**. Designer close or reopen: 0. Runtime actions: 0. Diagnostics or User Preferences: 0. Diagnostic Log: 0.
- Other clicks: Name dropdown open 1; option select 1; Details > Components tab 1 (view only).
- Tab operations: `browser_tabs list` 1; `select 0` 1 (both succeeded, list first).
- Snapshots: 6 saved (`t3-snapshot-00` to `-05`). Screenshots: 5 (`t3-01` to `t3-05`). Finds: 0. Recovery snapshots: 0. Corrected inspections: 0.
- Errors: none. Ref-not-found: none. Modal not dismissed: none (no unexpected dialog appeared).

## 1. Reference review (before mutation)

- T2 decisive evidence (`T2-new-handler-dialog-inspection-report.md`): the New control is the leftmost blue `+` in the Event Handlers toolbar (tooltip `New`); New opens an "Event Handler" dialog with a Name combobox, OK, and Cancel; the Name dropdown lists built-in `Std*` events including `StdFormRefreshCompleted` and no `FX_` entries. Free-text entry was not tested in T2.
- T3 instruction: select the built-in option from the list, not typed text; verify the value before OK; OK once; no Prompt configuration; no Save.

## 2. Identity and pre-mutation gate (fresh, rendered)

- Tab list first; select tab 0 succeeded; fresh snapshot `t3-snapshot-00-fresh-designer-start.md`.
- Tab heading `FX_Items` (selected). Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph` (T1 snapshot value; the rendered cell reads "User version for us…").
- The page URL is `…/designer/default.aspx` with **no** `MGForm` parameter. The Form identity was confirmed from the rendered heading, Name, and scope footer, not from the URL.
- Initial Command `Refresh`. Save `disabled`. No dialog. Form properties context selected; Details on Event Handlers.
- Form-level handler grid: header row only (no data rows). Pre-mutation screenshot `t3-01-pre-new-form-context-empty-handlers.png` (viewed).
- Gate result: **passed**. No existing StdFormRefreshCompleted or other handler. Proceeded.

## 3. The single New workflow and option selection

- New (leftmost `+`, ref e392) clicked **once**. Snapshot `t3-snapshot-01-after-single-new-dialog-open.md`: `dialog "Event Handler"` with `combobox "Name:" [active]`, OK, Cancel. Grid behind still empty.
- Name dropdown arrow (ref e811) clicked **once**. Snapshot `t3-snapshot-02-name-dropdown-expanded.md`: listbox of built-in events; `option "StdFormRefreshCompleted"` at ref e909 (directly after `StdFormRefresh`, ref e908).
- Option `StdFormRefreshCompleted` (ref e909) selected **once** from the list. Immediate: `t3-03-after-option-select-before-ok-verify-name.png` (viewed) shows Name field `StdFormRefreshCompleted`; `t3-snapshot-03-after-option-select-before-ok.md` line 585: `combobox "Name:" [active] [ref=e810]: StdFormRefreshCompleted` (exact value, no typed text).
- Pre-OK verification: exact value `StdFormRefreshCompleted`, from the built-in list. **Passed.**

## 4. OK once; committed result

- OK (ref e814) clicked **once**. Dialog closed; no prompt or error.
- Immediate evidence: `t3-04-immediate-after-single-ok-handler-row.png` (viewed) and `t3-snapshot-04-immediate-after-single-ok.md`:
  - Handler group row (accessibility `cell "StdFormRefreshCompleted"`, line 294) at the top of the Event Handlers grid.
  - Event To Handle panel: `Event` = `StdFormRefreshCompleted` (line 329–331); Sequence `0`; Disabled `False`; Response row present (collapsed, blank).
  - Save enabled (dirty): the disk icon is active in the screenshot and the Save button is not disabled in the snapshot (line 11, ref e976).
- Count of handler groups after OK: **one** (`StdFormRefreshCompleted`). Count of rows in that group: **one** (sequence 0).

## 5. Important observation: the sequence-0 row

- After OK, the single row under the StdFormRefreshCompleted group shows Sequence `0`, Response Type **blank**, Disabled `false`, Response Parameters blank (`t3-snapshot-04` lines 295–299; `t3-04`).
- The worker did not set the Response Type and did not open the Response editor. The Response property node is present but blank (`t3-snapshot-04` lines 357–360).
- **Unresolved:** whether this row is a real action slot created automatically by the handler (so T4 should set its Response Type to Prompt), or only a blank display row of the handler. EXP-037 recorded a Prompt row at sequence 0 after an explicit Response Type choice, and did not record a blank row after naming. T4 must check whether the row is an action before adding anything, and must not create a second action.
- Not treated as a Prompt action. Not evidence of any Prompt configuration.

## 6. Preservation check (before any Save; no Save performed)

- Details > Components tab (view only): snapshot `t3-snapshot-05-components-after-handler-add.md` and screenshot `t3-05-components-after-handler-add-preservation.png` (viewed).
- 16 component rows, the same as the T1 baseline: `Pane (00)`; `FormCollectionGrid` (Grid, `objects`, Pane 0, Tab 0); four GridColumns (Pane 0, Tabs 1–4); `Pane (01)`; `FX_ItemStatic`, `FX_ItemEdit`, `FX_DescriptionStatic`, `FX_DescriptionEdit`, `FX_CostStatic`, `FX_CostEdit`, `FX_UMStatic`, `FX_UMCombobox` (Pane 1, Tabs 5–12); `FX_RefreshButton` (PushButton, Pane 1, Tab 0, Event to generate `StdFormRefresh`).
- Form properties (screenshot `t3-04` and `t3-05`, Form context): Name `FX_Items`; Device Type Default; Form Type Normal; Is Master True; **Initial Command `Refresh`**; Script Language Visual Basic; Splitter Vertical, Position 11; Pane 0 Scroll Bars Never. Unchanged from T1.
- FX_RefreshButton Caption, Primary, and Button properties were **not re-read** in the Component context in T3 (the Components grid row confirms Type, Pane, Tab, and Event to generate). The Components grid row is the only read of FX_RefreshButton in T3. Limitation disclosed.
- The 13 original component Event and Caption cells were not individually re-read (no edit was made to them).

## 7. Stop state

- Unsaved handler: `StdFormRefreshCompleted`, one row (sequence 0, Response blank). The Designer is dirty and intentionally left open for T4 (per the instruction).
- No dialog open. No browser-native dialog. Web Client tab not touched (no runtime action).
- Save: enabled (unsaved). Not pressed.
- The page URL still lacks `MGForm` (carried from T2; identity from the rendered UI).

## 8. Acceptance status (T3 scope)

| AC | Status | Basis / limit |
| --- | --- | --- |
| AC-1 Preflight | Supported with limits (carried; re-established at T3 start) | `t3-01`, `t3-snapshot-00`: FX_Items, User footer, Initial Command Refresh, empty grid, Save disabled before the mutation. |
| AC-2 Pre-change inventory | Supported with limits (carried from T1, re-checked) | `t3-01`; `t3-snapshot-00` lines 275–311; no conflicting handler before mutation. |
| AC-3 Before Save, one newly configured handler for StdFormRefreshCompleted with one sequence-0 Prompt action | **Partial**: one handler group for StdFormRefreshCompleted visible (`t3-04`, `t3-snapshot-04` lines 294–331). Sequence-0 row exists but its Response Type is blank, so **no Prompt action exists yet**. | §5. Not satisfied in T3 by design (Prompt configuration is T4). |
| AC-4 Prompt parameters verified | Not tested (T4) | — |
| AC-5 to AC-12 | Not tested | — |

## 9. Remaining uncertainties for T4

1. Whether the blank sequence-0 row is a real action slot (T4 should set its Response Type rather than create a second action).
2. Whether the Name combobox accepts free text (not tested; not needed by the selected path).
3. FX_RefreshButton Caption and Button properties were not re-read in the Component context (Components grid only).
4. The page URL lacks `MGForm` (identity from the UI).

## 10. Evidence files written by T3

- `evidence/EXP-055/T3-handler-association-report.md` (this report).
- `evidence/EXP-055/t3-01-pre-new-form-context-empty-handlers.png` — pre-mutation: Form context, empty handler grid, Save greyed, User footer. Proves the pre-mutation state.
- `evidence/EXP-055/t3-02-name-dropdown-expanded-before-option-select.png` — dropdown open (built-in list). Shows the first list entries only; `StdFormRefreshCompleted` is in the accessibility snapshot, not this image.
- `evidence/EXP-055/t3-03-after-option-select-before-ok-verify-name.png` — dialog Name shows `StdFormRefreshCompleted`. Proves the selected value visually; the exact value is confirmed in `t3-snapshot-03`.
- `evidence/EXP-055/t3-04-immediate-after-single-ok-handler-row.png` — after OK: handler group `StdFormRefreshCompleted`, row sequence 0 / Disabled false / Response blank; Event `StdFormRefreshCompleted`; Save enabled. Proves the handler association; does not prove an action configuration.
- `evidence/EXP-055/t3-05-components-after-handler-add-preservation.png` — Components grid: FX_RefreshButton PushButton, Pane 1, Tab 0, StdFormRefresh; Initial Command Refresh; Save enabled. Proves the component row and Form context; does not prove Caption or the other original components' cells.
- Snapshots: `t3-snapshot-00-fresh-designer-start.md`, `t3-snapshot-01-after-single-new-dialog-open.md`, `t3-snapshot-02-name-dropdown-expanded.md`, `t3-snapshot-03-after-option-select-before-ok.md`, `t3-snapshot-04-immediate-after-single-ok.md`, `t3-snapshot-05-components-after-handler-add.md`.
- Tool-generated (gitignored `evidence/playwright/`): snapshots and console logs for the T3 window.

## 11. Acceptance judgement

AC-3 is only partly met: the handler association is visible, but the single Prompt action is not yet configured, which is T4's scope. Nothing in T3 was saved, and no Prompt was configured or tested.
