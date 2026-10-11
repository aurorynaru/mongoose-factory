# EXP-055 T6 — one clean Designer close, one recent-forms reopen, same-session recovery

Date: 2026-10-11. Run R-20261011-153829-vsIH, EXP-055, cycle 5, task T6.
Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `d5bf8f00-027a-4164-b0c8-62298c27ad7b`.
Mode: one Designer Form-tab close; one Designer Form-menu recent-forms reopen; read-only verification. **No Save. No second close or reopen. No runtime action. No FX_RefreshButton activation. No Form property change. No Diagnostics or User Preferences. No reload, no reauthentication.**

## Result

- Pre-close gate: **passed** (clean Designer; Save, Regenerate, Undo, Redo disabled; FX_Items User scope; no dialog).
- Close: **1** (Form-tab closable control). FX_Items tab removed; **no unsaved-change prompt**; no error.
- Reopen: **1** (Form menu, recent-forms entry `FX_Items`, the only FX_Items entry in the menu).
- Recovery (same session): **recovered** on every checked item (§4–§6). Limit: same-session UI recovery only; no cross-session or server-side durability claim.
- Save remains disabled after the reopen: **yes**.
- Cumulative EXP-055 counts after T6: Designer Saves **1** (T5); Designer close **1**; recent-forms reopen **1**; runtime openings 0; runtime closures 0; FX_RefreshButton activations 0.

## 1. Reference review

T5 decisive evidence (`T5-pre-save-gate-and-single-designer-save-report.md`): single Save (toast `Form [FX_Items] and global object(s) were saved.`); post-Save handler `StdFormRefreshCompleted` with one sequence-0 Prompt row, summary `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; Parameters Message Text `Hello World`, Caption blank, OK only, OK default, Event To Generate blank; 16 component rows; FX_RefreshButton Name/Caption/Type/Binding/Primary; Form Initial Command `Refresh`. Original component captions pre-Save (T5 `t5-snapshot-05` and the gate table): FX_sItem, C(FX_ItemStatic), FX_sDescription, C(FX_DescriptionStatic), FX_sCost, C(FX_CostStatic), FX_sUM, C(FX_UMStatic); the four grid-column captions FX_sItem / FX_sDescription / FX_sCost / FX_sUM; FormCollectionGrid Caption blank with Binding Type `Primary Collection Grid`. EXP-037 T9 (reopen behaviour, observed in a different Form): the handler group rendered collapsed after reopen; the Components "Event to generate" column changed on reopen; the MGForm URL parameter returned on the recent-forms selection.

## 2. Pre-close gate (rendered)

- Tab list, then select tab 0 (succeeded). Fresh snapshot `t6-snapshot-00-pre-close-fresh-designer.md`.
- Tab heading `FX_Items` (selected, closable control `button "closable FX_Items"` ref e247). Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save, Regenerate Form, Undo, Redo: all **disabled** (snapshot lines 10–13, 52–55).
- No dialog (no `dialog` node). Screenshot `t6-01-pre-close-clean-designer.png` (viewed): FX_Items tab, Save greyed, User footer, FX_RefreshButton PushButton row, Initial Command not visible in that pane (Form tab not selected).
- Handler baseline (view only, Event Handlers tab; `t6-snapshot-01-pre-close-event-handlers.md`): one group `StdFormRefreshCompleted` (line 294); one row: Prompt, false, summary exact (line 299); Event To Handle summary identical (line 375). Save disabled.
- Gate: **passed**. Proceeded to the close.

## 3. Close (one)

- The FX_Items closable control (ref e247) clicked **once**.
- Immediate state (`t6-02-immediate-after-single-close.png`, viewed; `t6-snapshot-02-after-single-close.md`): no FX_Items heading; no closable control; canvas empty; Properties empty (Form and Component tabs at the bottom); Save disabled (line 10); User footer retained (line 237). **No unsaved-change prompt, no error, no dialog node.**

## 4. Reopen (one) and immediate recovery

- Designer top menu `Form` opened (view). Menu listing (`t6-snapshot-03-form-menu-open.md`, lines 12–13; `t6-03` screenshot): one `FX_Items` menuitem in the recent-forms section between separators (lines 10–11). Other menu items include FX_UMs and FX_HelloWorld01 (not touched).
- The `FX_Items` menuitem (ref e1798) clicked **once**. No typed name, no deep link.
- Immediate state (`t6-04-immediate-after-single-reopen.png`, viewed; `t6-snapshot-04-immediate-after-reopen.md`):
  - Tab heading `FX_Items` (line 212, selected). Closable control present (line 213).
  - Properties (Form tab): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph` (line 570 in `t6-snapshot-14`); Device Type Default; Form Type Normal; Is Master True; Initial Command `Refresh`; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never.
  - Save `[disabled]` (line 10); Regenerate, Undo, Redo disabled (lines 12–13, 52–55).
  - Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (line 571).
  - URL now `…/designer/default.aspx?MGForm=FX_Items` (the parameter returned on the recent-forms selection, as EXP-037 observed).
  - The Details pane was **collapsed** to a bar after reopen (`Details` with `Expand Panel` button). Expanded once (view only, `t6-snapshot-05`).
- Identity and scope confirmed from rendered heading, Name, Version, and footer. The URL was not used as identity.

## 5. Handler readback after reopen (Event Handlers)

- Event Handlers tab selected (view; `t6-snapshot-06-event-handlers-after-reopen.md`). The `StdFormRefreshCompleted` group rendered **collapsed** (line 294; `t6-05` screenshot, viewed). This matches EXP-037's observed post-reopen collapse.
- Group expanded once (view only; `t6-snapshot-07-handler-group-expanded-after-reopen.md`; `t6-06` viewed): one row, sequence 0, Response Type Prompt, Disabled false, summary `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (accessibility lines 296–299, exact).
- Action row selected (view only; `t6-snapshot-08`). Event To Handle: Event `StdFormRefreshCompleted` (line 329); Type `Prompt` (line 365); Parameters summary identical (line 374).
- **Cardinality after reopen:** one handler group; one row; one sequence-0 Prompt action; no other handler groups.

## 6. Parameters readback (read only; Cancel once)

- Parameters "Open Edit Property Dialog" opened **once** (`t6-snapshot-09-parameters-readback-after-reopen.md`; `t6-07` viewed):
  - Message Text: `Hello World` (textbox value, line 739). Literal; no string resource.
  - Caption: blank (visual; textbox empty).
  - Icon: information radio selected (visible blue filled radio on the information icon in `t6-07`; accessibility radios expose no checked state, so this is visual evidence only).
  - Responses: `checkbox "OK" [checked]` (line 760) is the only checked response; Yes, No, Abort, Retry, Ignore, Cancel unchecked (their checkbox nodes present, no `checked`).
  - Default Button: OK (the OK default radio is filled in `t6-07`; visual only).
  - Event To Generate: blank (combobox, no value text; visual).
  - Only When Current Collection Is `<all collections>`; other General fields blank or unchecked.
- Closed by **Cancel once** (ref e2754). Post-Cancel (`t6-snapshot-10-after-readback-cancel-after-reopen.md`): no dialog; summary intact (lines 299, 375); Save disabled (line 10).

## 7. Components, layout, bindings, FX_RefreshButton

- Details > Components selected (view; `t6-snapshot-11`). The component tree rendered collapsed after reopen (only Pane (00) and Pane (01) rows; `t6-08` viewed). Expanded once with the grid's Expand control (view only; `t6-snapshot-12-components-expanded-after-reopen.md`).
- **16 component rows** (accessibility lines 298–508): Pane (00); FormCollectionGrid (Grid, objects, Pane 0, Tab 0); FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol (GridColumn, Pane 0, Tabs 1–4); Pane (01); FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox (Pane 1, Tabs 5–12); FX_RefreshButton (PushButton, Pane 1, Tab 0, Event to generate StdFormRefresh; line 508). Same as T1 and T5.
- **FX_RefreshButton Component properties** (row selected, view only; `t6-snapshot-13-fx-refreshbutton-properties-after-reopen.md`; `t6-09` viewed): Name `FX_RefreshButton` (header line 528 `FX_RefreshButton (Button)`; Name row, screenshot); Caption `FX_Refresh` (line 574); Type `PushButton` (line 585); Binding Type `None` (line 800); Primary `StdFormRefresh` (line 890). Matches T1, T4, T5.
- **Original component Captions** (each row selected, view only, Caption field read; compared with T5's pre-Save values):

| Component | Caption after reopen | T5 pre-Save value | Result |
| --- | --- | --- | --- |
| FormCollectionGrid | blank (no text) | blank | match |
| FX_ItemGridCol | FX_sItem | FX_sItem | match |
| FX_DescriptionGridCol | FX_sDescription | FX_sDescription | match |
| FX_CostGridCol | FX_sCost | FX_sCost | match |
| FX_UMGridCol | FX_sUM | FX_sUM | match |
| FX_ItemStatic | FX_sItem | FX_sItem | match |
| FX_ItemEdit | C(FX_ItemStatic) | C(FX_ItemStatic) | match |
| FX_DescriptionStatic | FX_sDescription | FX_sDescription | match |
| FX_DescriptionEdit | C(FX_DescriptionStatic) | C(FX_DescriptionStatic) | match |
| FX_CostStatic | FX_sCost | FX_sCost | match |
| FX_CostEdit | C(FX_CostStatic) | C(FX_CostStatic) | match |
| FX_UMStatic | FX_sUM | FX_sUM | match |
| FX_UMCombobox | C(FX_UMStatic) | C(FX_UMStatic) | match |

- **FormCollectionGrid Binding Type** after reopen: `Primary Collection Grid` (line 12706). Matches T1 and T5.
- **Original component Events after reopen:** not re-read in T6 (the brief asked for Captions and Static captions). For FX_ItemStatic only (the sample read), Primary, Data Change, Lose Focus, and Gain Focus were blank in `find` output. Limit disclosed; other components' Events are not re-read after reopen.
- Components grid Event to generate column: blank for the original 15 rows, `StdFormRefresh` for FX_RefreshButton, as in T5 (screenshot `t6-08`). The reopen did not change this column in this Form (contrast EXP-037 T9, where the column changed on reopen in that Form).

## 8. Form properties after reopen

- Form tab (view; `t6-snapshot-14-form-properties-after-reopen.md`): Name `FX_Items` (line 550); Version `User version for user anton.ramos@3mworks.com.ph` (line 570); Device Type `Default` (line 576); Form Type `Normal` (line 582); Is Master `True` (line 588); **Initial Command `Refresh`** (line 643); Script Language Visual Basic (screenshot); Splitter `Vertical` (line 720); Splitter Position `11` (line 729); Unit `Char` (line 760); Size `69; 21` (line 766); Synchronize FlexLayout attributes `True` (line 772).
- Matches the T1 baseline and the T5 pre-Save gate values.

## 9. Final clean state

- `t6-10-final-clean-state-after-reopen.png` (viewed): FX_Items tab, Save greyed, User footer, Form context with Initial Command Refresh, FormCollectionGrid row highlighted (selection only). No dialog.
- Accessibility (`t6-snapshot-14`): Save, Regenerate Form, Undo, Redo `[disabled]` (lines 10–13, 52–55); no `dialog` node; footer User scope (line 786).
- Save disabled after reopen: **yes**.

## 10. Acceptance status (T6 scope)

| AC | Status | Evidence / limit |
| --- | --- | --- |
| AC-6: one clean Designer close with no unsaved-change prompt; one supported recent-forms reopen recovers the same User-scoped FX_Items version with one StdFormRefreshCompleted handler, one sequence-0 Prompt action, exact Hello World parameters, preserved components and FX_RefreshButton, Initial Command Refresh, and Save disabled | **Supported (same-session UI recovery only).** Close: `t6-02`, `t6-snapshot-02`. Reopen: `t6-04`, `t6-snapshot-04`. Handler and action: `t6-06`, `t6-snapshot-07` (lines 294–299). Parameters: `t6-07`, `t6-snapshot-09`. Components and FX_RefreshButton: `t6-08`, `t6-09`, `t6-snapshot-12`, `-13`. Form: `t6-snapshot-14`. Save disabled: `t6-10`, `t6-snapshot-14`. | Limits: same session; the handler group rendered collapsed (expanded by view click); the Details pane and component tree rendered collapsed (expanded by view clicks); Events of original components not re-read after reopen; icon and default-button visual only; Form tab values read from accessibility here (post-reopen), not from a screenshot. |
| AC-1, AC-2, AC-3, AC-4, AC-5 | Carried from T1–T5. | Not changed in T6. |
| AC-7 to AC-12 | Not tested (runtime and activation belong to later tasks). | — |

## 11. Action counts (T6)

- Tab operations: list 1; select 1 (tab 0). Both succeeded.
- Snapshots: 15 saved (`t6-snapshot-00` to `-14`). Finds: 4 (pre-close handler/Form lookups; Caption label finds).
- Clicks: Event Handlers tab 2 (pre-close and after reopen, view); FX_Items closable control **1 (Designer close)**; Form menu 1 (view); recent-forms entry **1 (reopen)**; Details Expand 1 (view); group expand 1 (view); action row 1 (selection); Parameters open 1 (read only); Parameters Cancel 1; Components tab 1 (view); Components Expand 1 (view); component row selections 14 (FX_RefreshButton 1 and 13 original, with FormCollectionGrid included in the 13); Form tab 1 (view).
- Screenshots: 10 (`t6-01` to `t6-10`).
- Typing 0; key presses 0; wheel 0; mouse 0.
- Save: **0 in T6** (cumulative 1). Designer close: **1 in T6** (cumulative 1). Reopen: **1 in T6** (cumulative 1). Runtime actions 0. FX_RefreshButton activations 0. Property edits 0. Handler or action edits 0. Diagnostics or User Preferences 0. Diagnostic Log 0. Reload 0. Reauthentication 0.
- Errors: none. Ref-not-found: none. Recovery snapshots used: 0. Corrected inspections used: 0. Unexpected modal: none.

## 12. Repository confinement (T6)

- Worker-authored writes in T6: `evidence/EXP-055/T6-designer-close-and-recent-forms-reopen-recovery-report.md`; screenshots `evidence/EXP-055/t6-01` to `t6-10` (`.png`); accessibility snapshots `evidence/EXP-055/t6-snapshot-00` to `t6-snapshot-14` (`.md`); and the EXP-055 experiment record. No other file written.
- Tool-generated (gitignored `evidence/playwright/`): snapshots and console logs for the T6 window.

## 13. Knowledge state

- Observed (same session): the Designer close completed without a prompt; the recent-forms entry reopened FX_Items; the handler, action, Prompt parameters, component rows, FX_RefreshButton properties, and Form properties are present and unchanged after the reopen; Save disabled. Observed UI persistence in this browser session only.
- Not claimed: cross-session persistence, server-side durability, serialization, or cache behaviour.
- Unresolved: why the handler group and component tree rendered collapsed after reopen (observed in EXP-037 and here; cause not established); the Events of the original components were not re-read after reopen.
- Not tested: runtime Prompt, activation Prompt.
