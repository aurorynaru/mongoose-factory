# EXP-055 T5 — pre-Save gate, one ordinary Designer Save, post-Save readback

Date: 2026-10-11. Run R-20261011-153829-vsIH, EXP-055, cycle 4, task T5.
Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `a2fd85cd-01a5-4e42-8878-5a1d0927243b`.
Mode: pre-Save verification, **one** ordinary Designer Save, read-only post-Save readback. No close/reopen. No runtime action. No Diagnostics or User Preferences. No Diagnostic Log operation. No authentication recovery. No JavaScript.

## Result

- Pre-Save gate: **passed** on every required check (§2–§4).
- Designer Save: **1** (cumulative EXP-055 Save count: **1**). Native toast `Save` / `Form [FX_Items] and global object(s) were saved.` No error or unsafe modal.
- Save disabled afterward: **yes** (Save, Regenerate Form, Undo, Redo all disabled).
- Post-Save handler, action, parameters, components, FX_RefreshButton properties, and Form Initial Command: **read back, unchanged** from pre-Save (§5).
- Not saved (T5 scope end): no second Save; no close/reopen; no runtime action.

## 1. Reference review

T1–T4 decisive evidence: T1 baseline (no handler; 16 component rows; Form properties; FX_RefreshButton PushButton, Caption FX_Refresh, Primary StdFormRefresh; the original component Primary, Data Change, Lose Focus, Gain Focus values all blank). T3 (handler group created from the built-in list). T4 (sequence-0 action set to Prompt; parameters committed as Hello World, OK only, default OK, Event To Generate blank; readback dialog closed by Cancel). EXP-054-R2 baseline: Edit and ComboBox captions `C(<paired Static>)`; grid column captions FX_sItem, FX_sDescription, FX_sCost, FX_sUM; FX_RefreshButton PushButton, Pane 1, Tab 0, Binding None, Primary StdFormRefresh, Caption literal FX_Refresh.

## 2. Pre-Save gate (rendered, read-only except one Cancel and view-only selections)

**Identity and state.** Tab list first; tab 0 selected; fresh snapshot `t5-snapshot-00`. Tab heading `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save **enabled** (intended dirty state); no dialog. Designer dirty state is the inherited T3–T4 change, preserved and not discarded.

**Handler inventory and cardinality** (Details > Event Handlers; `t5-snapshot-01`):
- One group `StdFormRefreshCompleted` (accessibility `cell "StdFormRefreshCompleted"`, line 294). One row beneath it. No other handler group. No custom event.
- Row: Sequence `0`; Response Type `Prompt`; Disabled `false`; Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (accessibility line 299, exact).
- Event To Handle: Event `StdFormRefreshCompleted` (line 330); Sequence `0`; Disabled `False`; Response Type `Prompt` (line 366); Parameters summary identical (line 375).

**Parameters, independent readback** (Open Edit Property Dialog once, read only; `t5-02` viewed; `t5-snapshot-02`):
- Message Text: textbox value `Hello World` (line 945). Literal typed text; no string resource (no `...` string-resource selection was made in T4).
- Caption: textbox empty (blank).
- Icon: information radio selected (visual; accessibility radios expose no checked state).
- Responses: `checkbox "OK" [checked]` (line 966) is the only checked response. Yes, No, Abort, Retry, Ignore, Cancel unchecked (no `checked` nodes for those in the grep).
- Default Button: OK (visual only: the OK row's default radio is set in `t5-02`).
- Event To Generate: combobox `Event To Generate` empty (no value text).
- Only When Current Collection Is `<all collections>` (line 925); other General fields blank or unchecked.
- Closed by **Cancel once** (no commit). Post-Cancel snapshot `t5-snapshot-03`: no dialog; committed summary intact (lines 299, 375).

**Original component fields** (T4 did not re-read these; read in T5 by selecting each row in the Components grid and reading the Properties panel; `find` results in this report, not saved as files):

| Component | Type / Data Source / Tab | Caption (current) | Primary / Data Change / Lose Focus / Gain Focus |
| --- | --- | --- | --- |
| FormCollectionGrid | Grid / objects / Tab 0 | blank | blank / blank / blank / blank; Binding Type `Primary Collection Grid` |
| FX_ItemGridCol | GridColumn / object.FX_Item / Tab 1 | `FX_sItem` | blank (all four) |
| FX_DescriptionGridCol | GridColumn / object.FX_Description / Tab 2 | `FX_sDescription` | blank (all four) |
| FX_CostGridCol | GridColumn / object.FX_Cost / Tab 3 | `FX_sCost` | blank (all four) |
| FX_UMGridCol | GridColumn / object.FX_UM / Tab 4 | `FX_sUM` | blank (all four) |
| FX_ItemStatic | Static / Tab 5 | `FX_sItem` (snapshot `t5-snapshot-05`, lines 569–572) | blank (lines 883–907) |
| FX_ItemEdit | Edit / object.FX_Item / Tab 6 | `C(FX_ItemStatic)` | blank (all four) |
| FX_DescriptionStatic | Static / Tab 7 | `FX_sDescription` | blank (all four) |
| FX_DescriptionEdit | Edit / object.FX_Description / Tab 8 | `C(FX_DescriptionStatic)` | blank (all four) |
| FX_CostStatic | Static / Tab 9 | `FX_sCost` | blank (all four) |
| FX_CostEdit | Edit / object.FX_Cost / Tab 10 | `C(FX_CostStatic)` | blank (all four) |
| FX_UMStatic | Static / Tab 11 | `FX_sUM` | blank (all four) |
| FX_UMCombobox | ComboBox / object.FX_UM / Tab 12 | `C(FX_UMStatic)` | blank (all four) |

Baseline status per field:
- **Events (Primary, Data Change, Lose Focus, Gain Focus):** T1 recorded every read as blank for all original components. Current values are blank. **Verified preserved** against the T1 baseline.
- **Edit and ComboBox captions** `C(<paired Static>)`: matches EXP-054-R2's recorded pattern. Meaning still unresolved in those records. Current values match the recorded pattern; **consistent with** the EXP-054-R2 baseline, not an independent original-value proof.
- **Grid column captions** FX_sItem, FX_sDescription, FX_sCost, FX_sUM: match EXP-054-R2 T1's recorded captions. **Consistent with** the baseline.
- **Static captions** FX_sItem, FX_sDescription, FX_sCost, FX_sUM: **no recorded per-component baseline** (EXP-054-R2 recorded that Static captions were not re-read individually). Values are recorded now; preservation is **not independently proven** for these fields. Limit disclosed.
- **Bindings / Data Source / Binding Type:** grid rows match T1 (`objects`, `object.FX_Item`, etc.). Per-component Binding detail was not re-read beyond the grid's Data Source column and the grid's Binding Type (FormCollectionGrid: `Primary Collection Grid`).

**Components grid (16 rows)** (`t5-04` screenshot; `t5-snapshot-04`): the same 16 rows and Type/Data Source/Pane/Container/Tab/Event-to-generate values as T1. FX_RefreshButton: PushButton, Pane 1, Tab 0, Event to generate `StdFormRefresh`. The Event to generate column is blank for all other rows, as in T1.

**FX_RefreshButton properties**: the pre-Save values were read in T4 (`evidence/EXP-055/t4-snapshot-13-fx-refreshbutton-component-properties.md`) and were not re-read at T5's gate, which relied on that T4 read plus the T5 Components grid row (PushButton, Pane 1, Tab 0, StdFormRefresh). Values from T4: Name `FX_RefreshButton`; Caption `FX_Refresh` (literal); Type `PushButton`; Binding Type `None`; Primary `StdFormRefresh`; Data Change, Lose Focus, Gain Focus blank. Matches T1 and EXP-054-R2. Limit: the gate's FX_RefreshButton Caption and Primary were carried from T4, not re-read at T5 before the Save.

**Form properties** (Form tab; `t5-snapshot-06`, lines 549–643, 719–766): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; **Initial Command `Refresh`**; Script Language `Visual Basic`; Splitter `Vertical`; Splitter Position `11`; Pane 0 Scroll Bars `Never`; Unit `Char`; Size `69; 21`. Matches T1.

**Gate outcome:** every required check passed (one handler; one sequence-0 Prompt action; exact summary; exact parameters; original components' Events blank as in T1; FX_RefreshButton and Form values as baseline; Save enabled and no dialog). **Save performed.**

## 3. The single Designer Save

- Designer toolbar Save clicked **once** (ref `e16`, labelled Save). Immediate state (`t5-04` viewed; `t5-snapshot-07`):
  - Toast: title `Save`; text `Form [FX_Items] and global object(s) were saved.` (accessibility `generic`, line 794).
  - Toolbar: Save `[disabled]` (line 10); Regenerate Form `[disabled]` (line 12); Undo `[disabled]` (line 52); Redo `[disabled]` (line 54). Save is greyed in the screenshot.
  - No error; no unsafe modal; no retry.
- The network `SaveChanges` response body was not captured in T5 (not requested; not available through the permitted tools in this task). The toast and disabled toolbar are the only native confirmations observed.
- Cumulative Save count for EXP-055: **1**.

## 4. Post-Save readback (read only; no modification)

- **Event Handlers** (`t5-snapshot-08`): one group `StdFormRefreshCompleted`; one row: Sequence `0`; Prompt; false; summary `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Event To Handle: Event `StdFormRefreshCompleted`; Sequence `0`; Disabled `False`; Response Type `Prompt` (line 366); Parameters summary identical (line 375). **Unchanged from pre-Save.**
- **Parameters readback** (Open Edit Property Dialog once; `t5-05` viewed; `t5-snapshot-09`): Message Text `Hello World` (line 697); Caption blank; information icon; OK checked (line 718) as the only checked response; Event To Generate blank; OK default. Closed by **Cancel once** (`t5-snapshot-10`): no dialog; summary intact (lines 299, 375); Save remains disabled. **Unchanged.**
- **Components grid** (`t5-snapshot-11`): the same 16 rows as pre-Save and T1, including FX_RefreshButton PushButton, Pane 1, Tab 0, `StdFormRefresh`. **Unchanged.**
- **FX_RefreshButton** (`t5-snapshot-12`; `t5-06` viewed): Name `FX_RefreshButton` (line 528 header; name value); Caption `FX_Refresh` (line 574); Type `PushButton` (line 585); Binding Type `None` (line 800); Primary `StdFormRefresh` (line 890). **Unchanged.**
- **Form properties** (post-Save screenshot `t5-04`, Form context visible: Name FX_Items; Version User; Device Type Default; Form Type Normal; Is Master True; Initial Command `Refresh`; Script Language Visual Basic; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; User footer). Matches the pre-Save gate. The full accessibility snapshot of the Form tab was taken pre-Save only (`t5-snapshot-06`); post-Save Form values are from the screenshot, not an accessibility snapshot. Limit disclosed.
- **Original components' Caption and Event fields:** **not** re-read after Save. Pre-Save values are recorded in §2. Limit disclosed.
- **Runtime:** not touched (T5 scope).

## 5. Acceptance status (T5 scope)

| AC | Status | Evidence / limit |
| --- | --- | --- |
| AC-3 Before Save: exactly one newly configured handler for StdFormRefreshCompleted; one sequence-0 Prompt action; native handler row, action row, editable parameter detail | **Supported (with limits).** | Handler row `t5-snapshot-01` lines 294–299; action row and Type `Prompt` lines 330–375; parameter readback `t5-02` / `t5-snapshot-02`. Limit: no separate custom-event search beyond T2; the built-in name is shown in the list. |
| AC-4 Before Save: Prompt parameters visibly verified (Message Text Hello World; blank Caption; default icon; OK-only and default response; Event To Generate empty); committed summary captured; read-only preservation comparison | **Supported (with limits).** | Parameters: `t5-02`, `t5-snapshot-02` (lines 697, 718, 945, 966). Preservation: §2 table and Components/FX_RefreshButton/Form checks. Limits: icon and Default Button are visual-only in accessibility; Static captions have no recorded per-component baseline; Edit/ComboBox captions match a recorded pattern only. |
| AC-5 Exactly one ordinary Designer Save succeeds with native confirmation; no error or unsafe prompt; Save disabled afterward; handler, action, parameters, components, Button properties, Form Initial Command unchanged in post-Save readback | **Supported (with limits).** | One Save (§3): toast `t5-04`, `t5-snapshot-07` line 794; Save disabled line 10. Post-Save readback §4 (`t5-snapshot-08`, `-09`, `-10`, `-11`, `-12`; `t5-05`, `t5-06`). Limits: the SaveChanges response body was not captured; Form properties post-Save are from a screenshot only; original component Caption and Event fields not re-read post-Save. |
| AC-1, AC-2 | Carried from T1–T4; re-established at T5 start (`t5-snapshot-00`, `t5-01`). | — |
| AC-6 to AC-12 | Not tested (later tasks). | — |

## 6. Action counts (T5)

- Tab operations: list 1; select 1 (tab 0). Both succeeded.
- Snapshots: 13 saved (`t5-snapshot-00` to `t5-snapshot-12`). Finds: about 17 (13 component Caption/Event reads, plus tab-heading lookups).
- Clicks: Event Handlers tab 2 (pre and post); Parameters open 2 (pre and post); Parameters Cancel 2; Components tab 2 (pre and post); Form tab 1; original component rows 13 (selection only); FX_RefreshButton row 1 (post-Save selection); **Save 1**; Parameters OK 0.
- Screenshots: 6 (`t5-01` to `t5-06`).
- Typing 0; key presses 0; mouse 0; wheel 0.
- Saves: **1**. Close/reopen: 0. Runtime actions: 0. Diagnostics or User Preferences: 0. Diagnostic Log: 0. Property edits to any component or Form: 0. Handler or action edits: 0.
- Errors: none. Ref-not-found: none. Recovery snapshots used: 0. Corrected inspections used: 0. Unexpected modal: none.

## 7. Verification limitations

- The Save's network response body was not captured; the toast and disabled toolbar are the observed confirmation.
- The post-Save Form properties were read from a screenshot, not an accessibility snapshot.
- Original component Caption and Event fields were read pre-Save only.
- Static captions have no independent pre-change baseline in the repository records.
- Icon (information) and Default Button (OK) are visual-only observations.
- Same browser session only. No cross-session persistence claim.

## 8. Evidence files written by T5

- `evidence/EXP-055/T5-pre-save-gate-and-single-designer-save-report.md` (this report).
- `evidence/EXP-055/t5-01-pre-save-gate-start-designer.png` — Designer at gate start: FX_Items, dirty, User footer, FX_RefreshButton selected (Component tab). Proves Designer identity, scope, dirty state; not handler detail.
- `evidence/EXP-055/t5-02-parameters-readback-pre-save.png` — Parameters readback (pre-Save): Message Text Hello World; Caption blank; info icon; OK only; OK default; Event To Generate blank; behind it the Event Handlers row Prompt false. Proves the pre-Save parameter values visually.
- `evidence/EXP-055/t5-03-pre-save-form-context-gate-passed.png` — Form context before Save: Initial Command Refresh; Splitter Vertical; Save enabled; Components grid. Proves Form values pre-Save.
- `evidence/EXP-055/t5-04-immediate-after-single-save.png` — after the single Save: toast "Form [FX_Items] and global object(s) were saved."; Save greyed; Regenerate/Undo/Redo greyed; Form context Initial Command Refresh. Proves the native save result and post-Save toolbar state.
- `evidence/EXP-055/t5-05-post-save-parameters-readback-dialog.png` — post-Save Parameters readback: Message Text Hello World; OK only; OK default; Caption blank. Proves post-Save parameter values visually.
- `evidence/EXP-055/t5-06-post-save-fx-refreshbutton-components-readback.png` — FX_RefreshButton Component properties after Save: Name, Caption FX_Refresh, Type PushButton, Primary-row StdFormRefresh; components grid row PushButton, Pane 1, Tab 0, StdFormRefresh; User footer. Proves post-Save FX_RefreshButton values.
- Accessibility snapshots: `evidence/EXP-055/t5-snapshot-00-pre-save-gate-start.md`, `t5-snapshot-01-event-handlers-pre-save-gate.md`, `t5-snapshot-02-parameters-readback-pre-save.md`, `t5-snapshot-03-after-readback-cancel-pre-save.md`, `t5-snapshot-04-components-grid-pre-save-preservation.md`, `t5-snapshot-05-FX_ItemStatic-properties.md`, `t5-snapshot-06-form-properties-pre-save.md`, `t5-snapshot-07-immediate-after-single-save.md`, `t5-snapshot-08-post-save-event-handlers-readback.md`, `t5-snapshot-09-post-save-parameters-readback-dialog.md`, `t5-snapshot-10-post-save-after-readback-cancel.md`, `t5-snapshot-11-post-save-components-grid-readback.md`, `t5-snapshot-12-post-save-fx-refreshbutton-properties.md`.
- Tool-generated (gitignored `evidence/playwright/`): snapshots and console logs for the T5 window.

## 9. Acceptance judgement

AC-3, AC-4, and AC-5 are supported with the limits in §5 and §7. The Save is the single ordinary Designer Save of EXP-055 so far. Runtime and reopen checks (AC-6 to AC-11) remain for later tasks.
