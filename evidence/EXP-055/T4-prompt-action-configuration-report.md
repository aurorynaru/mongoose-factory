# EXP-055 T4 — sequence-0 Prompt action on the unsaved StdFormRefreshCompleted handler

Date: 2026-10-11. Run R-20261011-153829-vsIH, EXP-055, cycle 3, task T4.
Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `cd05e296-4e57-43ad-b5e7-0aab02ac55a6`.
Mode: one Prompt action configured in the unsaved definition. **No Designer Save. No close/reopen. No runtime action. No Diagnostics or User Preferences. No Diagnostic Log operation. No authentication recovery.**

## Counts (this task)

- Handler groups: 1 (unchanged from T3). Handler rows: 1 (sequence 0, the existing row; no row added). Actions added by a New/Add control: **0**.
- Response Type set: 1 (blank to Prompt, from the list option `Prompt`).
- Parameters dialog opened: 2 (one to enter values; one read-only readback opened afterwards and closed by Cancel).
- Parameters dialog OK (commit): **1**. Parameters dialog Cancel: 1 (readback only; no change made in that opening).
- Text typed: 1 (`Hello World` into Message Text, via the typing tool).
- Designer Save: **0**. Close/reopen: 0. Runtime actions: 0. Diagnostics or User Preferences: 0. Diagnostic Log: 0. Property changes to Components or Form: 0.
- Browser calls: tabs list 1; tabs select 1; snapshots 14 (saved); finds 1; clicks 12 (Event Handlers tab 1; Response treeitem 1; property-pane Expand 1; Type dropdown open 1; Prompt option 1; Parameters open 2; Parameters OK 1; Parameters Cancel 1; Components tab 1; FX_RefreshButton row 1; Component tab 1); mouse move 1; wheel 1; type 1; screenshots 11 (`t4-01` to `t4-11`).
- Errors: none. Ref-not-found: none. Recovery snapshots used: 0. Corrected inspections used: 0. Unexpected modal: none.
- Disclosure: the Response group's expander is not exposed as an accessibility control. Clicking the Response node selected it but did not expand it. Expansion was achieved with the property pane's own Expand control (view-only). Child rows were below the visible area and were brought into view by a view-only wheel scroll inside the property pane.

## 1. Inspection before editing (decides the open T3 question)

- Designer identity: tab `FX_Items` selected; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Name `FX_Items`; Initial Command `Refresh`. Save **enabled** (T3 dirty state, intended). No dialog.
- Event Handlers (Details, view): one group `StdFormRefreshCompleted` with one row: sequence 0, Response Type blank, Disabled false (`t4-snapshot-01`; `t4-01` viewed).
- Event To Handle panel: Event `StdFormRefreshCompleted`; Sequence 0; Disabled False; **Response** group present.
- After expanding Response (view-only), its children are **Type** (dropdown), **Parameters** (Open Edit Property Dialog button), and **Edit in-line Script** (`t4-snapshot-03`, `t4-03`, `t4-04` viewed).
- **Conclusion:** the existing sequence-0 row is an editable action slot: it owns a Response Type and a Parameters editor. No second row or action control was needed, and none was used. The T3 open question (blank row = action slot?) is **resolved as yes**, on the basis of these editable children.

## 2. Response Type = Prompt (one selection)

- Type dropdown opened once; the list contains many response types. The `Prompt` option (accessibility ref `e1456`, between `Print Preview` and `Run Background Task`) was selected once (`t4-snapshot-05`).
- Immediate state (`t4-06` viewed; `t4-snapshot-06`): Type shows `Prompt`. The grid's Response Type cell was still blank at that moment; it updated after the Parameters commit (see §4).

## 3. Parameters dialog: values entered and verified before commit

- Parameters opened once (`t4-07` viewed; `t4-snapshot-07`). Defaults on opening: Error Message blank; Success Message blank; Only When Current Collection Is `<all collections>`; Only When Platform Is blank; Keep blank; Ignore Failure, Message as Toast?, Disabled all unchecked; Message Text blank; Caption blank; Icon: information (first radio, filled); Prompt When blank; Stop event handlers unchecked; Responses: OK checked, Event To Generate blank, Default Button on OK; Yes, No, Abort, Retry, Ignore, Cancel unchecked.
- Message Text: `Hello World` entered once into the Message Text textbox (accessibility `textbox [active]: Hello World`, `t4-snapshot-08` line 697; `t4-08` viewed).
- Verified before commit: Message Text = `Hello World`; Caption blank (accessibility textbox empty); Icon = information (default; visual only); Responses = OK only, OK checked (accessibility `checkbox "OK" [checked]`, others not checked); Default Button = OK (visual only); Event To Generate blank (combobox with no value).
- Commit: OK once (`t4-snapshot-09`).

## 4. Committed action (native summary and row)

- Grid (`t4-09` viewed; `t4-snapshot-09` lines 293–299): group `StdFormRefreshCompleted`; one row: Sequence `0`, Response Type `Prompt`, Disabled `false`, Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (accessibility gridcell, exact).
- Event To Handle panel: Event `StdFormRefreshCompleted`; Sequence 0; Disabled False; Response Type `Prompt`; Parameters summary (accessibility, line 375) identical to the grid summary.

## 5. Independent readback of the parameters (view; Cancel, no change)

- Parameters dialog opened once more (`t4-10` viewed; `t4-snapshot-10`) and closed by Cancel once (no commit).
- Readback values: Message Text `Hello World` (accessibility textbox value, line 697); Caption blank; Icon information (visual); Responses OK checked only (accessibility); Default Button OK (visual); Event To Generate blank; Only When Current Collection `<all collections>`; other General fields blank or unchecked.
- The summary alone was not used as proof: the readback confirms the message text and the OK-only response from the dialog itself.

## 6. Cardinality and handler checks (before any Save)

- Handler groups: one `StdFormRefreshCompleted` (`t4-snapshot-11` line 294). Rows in that group: one (sequence 0, Prompt, false). No other handler rows.
- No custom event created: the Event name is `StdFormRefreshCompleted` (from the built-in list in T2–T3).
- Save: enabled (unsaved). Not pressed.

## 7. Preservation check (view only; before any Save)

- Components grid (`t4-snapshot-12`): the same 16 rows as T1/T3: Pane (00); FormCollectionGrid (Grid, `objects`, Pane 0, Tab 0); four GridColumns; Pane (01); eight Pane (01) children (FX_ItemStatic … FX_UMCombobox, Tabs 5–12); FX_RefreshButton (PushButton, Pane 1, Tab 0, Event to generate `StdFormRefresh`).
- Form properties (Form context, `t4-snapshot-12`): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True; **Initial Command `Refresh`**; Script Language Visual Basic; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 As Needed; Unit Char; Size `69; 21`. Matches T1.
- FX_RefreshButton Component properties (`t4-snapshot-13`; `t4-11` viewed): Name `FX_RefreshButton`; Caption `FX_Refresh`; Type `PushButton`; From Device Master True; Binding Type `None`; Primary `StdFormRefresh`; Data Change, Lose Focus, Gain Focus blank. Matches T1 and EXP-054-R2.
- Not re-read in T4: the 13 original components' Event and Caption cells individually; Form Caption, Background, and other Form values beyond the rows listed above.

## 8. Acceptance status (T4 scope)

| AC | Status | Basis / limit |
| --- | --- | --- |
| AC-1 Preflight | Supported with limits (carried from T1–T3; re-established at T4 start) | `t4-snapshot-00`; `t4-01`. Same browser session. |
| AC-2 Pre-change inventory | Supported with limits (carried) | T1 and T3 baselines; `t4-snapshot-01`. |
| AC-3 Before Save, one new StdFormRefreshCompleted handler with one sequence-0 Prompt action; native handler row, action row, editable parameter detail evidenced; no custom event | **Supported with limits.** Handler row (`t4-09`, `t4-snapshot-09` lines 293–299), action row (Type Prompt), and parameter editor evidenced; one group, one row. | Limits: the built-in event name is shown in the list and the row; no separate custom-event search beyond T2's list. |
| AC-4 Before Save, Prompt parameters verified (Message Text Hello World; blank Caption; default icon; OK-only and default response; empty Event To Generate); committed summary captured; read-only preservation comparison | **Supported with limits.** Message Text, Caption, OK-only checkbox state, and Event To Generate verified in the readback; committed summary captured (`t4-09`, `t4-snapshot-09`); preservation checks §7. | Limits: the default icon and the OK Default Button are verified visually only (accessibility radios expose no checked state). Event To Generate is blank visually and in the combobox (no value text). The 13 original components' Event and Caption cells are not individually re-read. |
| AC-5 to AC-12 | Not tested (later tasks: Save, reopen, runtime). | — |

## 9. Is the Form safe for the one permitted Save (a later task)?

- Yes, on the evidence above: one handler (StdFormRefreshCompleted), one sequence-0 Prompt action, literal Hello World, OK-only with default OK, no Caption, no Event To Generate, no custom event; the Components grid and FX_RefreshButton Component properties and Form Initial Command match the baseline; no unexpected dialog; Save enabled as the only dirty state.
- Remaining uncertainties before Save: the icon and Default Button radios are visual-only; the 13 original components' Event and Caption cells were not individually re-read in T4 (they were not edited).

## 10. Evidence files written by T4

- `evidence/EXP-055/T4-prompt-action-configuration-report.md` (this report).
- Screenshots (`evidence/EXP-055/`):
  - `t4-01-event-handlers-sequence-0-row-before-edit.png`: Event To Handle pane with Event `StdFormRefreshCompleted`, row sequence 0 with blank Response Type; Save enabled; User footer. Proves the pre-edit row and the Response group (collapsed).
  - `t4-02-response-group-after-single-expand-attempt.png`: the Response node selected, not yet expanded (treeitem click only).
  - `t4-03-response-group-expanded-type-blank-before-edit.png`: Response selected and expanded in the view; Type children below the visible area.
  - `t4-04-response-children-after-pane-scroll.png`: Response children visible: Type (blank), Parameters (button), Edit in-line Script. Proves the editable action fields.
  - `t4-05-response-type-dropdown-open.png`: Response Type list open (screenshot taken from the list; the list is long and is read from the snapshot).
  - `t4-06-after-prompt-type-selected.png`: Type = Prompt (combobox), Parameters button present. The grid cell still blank at this moment.
  - `t4-07-parameters-dialog-open-before-entry.png`: Event Handler Parameters dialog with defaults (OK checked, info icon, Caption and Message blank, Event To Generate blank).
  - `t4-08-parameters-message-text-entered-before-confirm.png`: Message Text = `Hello World`; Caption blank; info icon; OK-only; OK default button; Event To Generate blank. Proves the values before commit.
  - `t4-09-after-single-parameters-ok-committed-state.png`: the committed row (sequence 0, Prompt, false, summary `PROMPT(Hello World) ICON(DEFAULT) RESP…`, truncated on screen); Save enabled. Proves the committed row; the full summary is from the accessibility tree.
  - `t4-10-parameters-readback-dialog-committed-values.png`: read-only readback of the committed values (Message Text `Hello World`; Caption blank; info icon; OK only; OK default; Event To Generate blank). Dialog closed by Cancel afterwards.
  - `t4-11-fx-refreshbutton-properties-preservation-after-prompt-commit.png`: FX_RefreshButton Component properties (Name, Caption FX_Refresh, Type PushButton, Primary StdFormRefresh in the Components row); Components grid rows; Save enabled. Proves FX_RefreshButton's Name, Caption, Type, and Event to generate `StdFormRefresh`.
- Accessibility snapshots (`evidence/EXP-055/`): `t4-snapshot-00-fresh-designer-start.md`, `t4-snapshot-01-event-handlers-before-edit.md`, `t4-snapshot-02-response-group-after-expand.md`, `t4-snapshot-03-after-property-expand.md`, `t4-snapshot-04-response-children-visible-before-type.md`, `t4-snapshot-05-response-type-dropdown-open.md`, `t4-snapshot-06-after-prompt-type-selected.md`, `t4-snapshot-07-parameters-dialog-open-before-entry.md`, `t4-snapshot-08-parameters-message-entered-before-confirm.md`, `t4-snapshot-09-after-parameters-ok-committed.md`, `t4-snapshot-10-parameters-readback-dialog.md`, `t4-snapshot-11-after-readback-cancel-handler-state.md`, `t4-snapshot-12-components-preservation-check.md`, `t4-snapshot-13-fx-refreshbutton-component-properties.md`.
- Tool-generated (gitignored `evidence/playwright/`): snapshots and console logs for the T4 window.

## 11. Open items (not blocking the Prompt action)

- The icon default and OK Default Button are visible in the screenshots but not exposed as checked state in the accessibility tree.
- The response-type list is long; Prompt was located by a search of the snapshot, then selected by its ref.
- The Caption for FX_RefreshButton is shown as the literal `FX_Refresh` (not a resource); the accessibility tree does not separate literal from resource.
- Save has not been performed. The change is dirty and will be lost if the Designer is discarded; the next task must perform the single ordinary Save only after its own preservation gate.
