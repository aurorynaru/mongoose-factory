# EXP-055 T2 — non-mutating inspection of the Form-level Event Handler "New" workflow

Date: 2026-10-11. Run R-20261011-153829-vsIH, EXP-055, cycle 1, task T2.
Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `ebc2661f-0217-4691-9ace-143078420741`.
Mode: one bounded inspection. **Handler created: 0. Handler actions added: 0. Typed text: 0. Dialog OK: 0. Designer Save: 0. Close/reopen: 0. Runtime actions: 0. Diagnostics / User Preferences: 0. Diagnostic Log operations: 0.**

## 1. Reference review (before browser calls)

T1 review already covered the decisive references for this task: the Section 6 transcript (lines 197–209), EXP-054-R2 (accepted with limits; FX_RefreshButton created and recorded), and EXP-037 (the handler workflow: Details > Event Handlers > New, then a name dialog, then Response Type Prompt). EXP-037 used the name dialog to create a *custom* event name, so the question for T2 was whether the same dialog offers the built-in StdFormRefreshCompleted.

## 2. Browser identity and tab order

- `browser_tabs list` (first call of this task): tab 0 current (`MGForm=FX_Items`, Designer); tab 1 Web Client.
- `browser_tabs select 0`: succeeded on the first attempt after the list.
- Fresh untargeted snapshot taken (`t2-snapshot-00-fresh-designer-start.md`).
- Designer identity: tab heading `FX_Items` (selected); Save **disabled**; no dialog; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Properties panel on entry: Component context selected (left from T1). Details panel on Components.

## 3. Form-level state before the New control (view only)

- Properties > Form tab clicked once (view-only). Details > Event Handlers tab clicked once (view-only).
- `t2-01-form-context-event-handlers-empty-before-new.png` (viewed): Name `FX_Items`; Device Type Default; Form Type Normal; Is Master True; **Initial Command Refresh**; Event Handlers grid headers only (Sequence / Response Type / Disabled / Response Parameters) with no rows; Save greyed; User footer.
- Accessibility (`t2-snapshot-01-form-event-handlers-before-new.md`, lines 275–296): the handler grid `grid [ref=e1978]` is empty; the bottom toolbar has five unnamed buttons (`e1981`–`e1985`).
- Result: **no Form-level handler exists** (no StdFormRefreshCompleted and no other handler). Unchanged from T1.

## 4. Identification of the `+` / New control

- The five unnamed buttons in the bottom toolbar correspond to five icons in the screenshot. The leftmost is a blue `+`.
- Hover (no click) on the leftmost button (`e1981`) displayed the tooltip **`New`** (`t2-02-plus-control-hover-identity.png`, viewed: tooltip "New" under the blue + button at bottom left of the Event Handlers toolbar).
- Position and tooltip match the EXP-037 documented workflow (Details > Event Handlers > New). Identity: **established**.

## 5. The single New action and the dialog it opened

- **New clicked once** (`e1981`). Immediate result (`t2-03-after-single-new-click-dialog-state.png`, viewed):
  - A small modal dialog titled **"Event Handler"** appeared, centred over the Designer canvas, with a single field **"Name:"** (an editable combobox with a dropdown arrow), and two buttons **OK** and **Cancel**. A Close (×) icon is in the title bar.
  - The Event Handlers grid behind the dialog remained **empty** (no row was created by the click).
- Accessibility (`t2-snapshot-02-after-single-new-click-dialog.md`, lines 580–589): `dialog "Event Handler"` containing `button "Close Window"`, `combobox "Name:" [active]`, `button "OK"`, `button "Cancel"`.

## 6. Event-selection options (dropdown opened once; nothing selected)

- The Name combobox dropdown arrow (`e2025`) was clicked once to list options.
- Result (`t2-04-event-handler-name-dropdown-options-open.png`, viewed; `t2-snapshot-03-name-dropdown-options-open.md`, lines 585–743): the listbox shows **built-in standard events only**, sorted alphabetically, beginning `StdAppLaunchInbox`, `StdAppLaunchTasks`, `StdCurComp…`, `StdFormApplySavedFilter`, … through `StdWebLocationInfoReceived`.
- **StdFormRefreshCompleted is listed** (accessibility `option "StdFormRefreshCompleted"`, ref `e2123`), directly after `option "StdFormRefresh"` (ref `e2122`).
- A search for `option "FX_` returned **zero matches**; no custom FX_ events appear in the list.
- The list is long (about 150 options) and the screenshot shows only the first fifteen. The list completeness is established from the accessibility tree.
- Dropdown then collapsed by a second click on the same arrow (`e2025`), with **no option selected** (`t2-05-after-dropdown-collapsed-no-selection.png`, viewed: Name field blank; dialog still open; `t2-snapshot-04-after-dropdown-collapsed-dialog.md`).

## 7. Dialog closed once with native Cancel

- Cancel (`e2030`) clicked once.
- Immediate result (`t2-06-after-single-cancel-designer-state.png`, viewed): dialog gone; FX_Items tab heading; Name `FX_Items`; Initial Command Refresh; Event Handlers grid empty; Save greyed; User footer unchanged. The `New` tooltip is only the cursor resting over the button.
- `t2-snapshot-05-after-single-cancel-designer-state.md`: `button "Save" [disabled]` (line 10); FX_Items heading (line 212); scope footer (line 576); no `dialog` node; no `Prompt` or `StdFormRefreshCompleted` node in the Form panel; Event Handlers grid `grid [ref=e1978]` with header row only and no data rows.
- **Observed URL change:** the page URL lost the `MGForm=FX_Items` parameter after Cancel (`https://…/designer/default.aspx`). It still carried `MGForm=FX_Items` in the snapshots taken before Cancel. This matches the URL behaviour EXP-037 recorded after its first handler OK. The Form identity was confirmed from the rendered tab heading and the scope footer, not the URL.

## 8. What the inspection establishes, and what it does not

Established (observed):
- The Form-level handler "New" control is the leftmost blue `+` in the Event Handlers toolbar; its tooltip is `New`.
- New opens a modal **"Event Handler"** dialog with a **Name** combobox, OK, and Cancel. It does not create a handler row by itself.
- The Name dropdown offers the **built-in standard event list**, which includes **`StdFormRefreshCompleted`** and no `FX_` entries.
- Cancel closes the dialog without a visible handler row, and the Designer remains clean.

Not established (not tested, by instruction):
- Whether the Name combobox is editable as free text. The dialog's combobox shows an active caret, but no text was typed. Typing a name could create a custom event, so this was not tested and should not be assumed either way.
- Whether the OK path behaves as EXP-037 recorded (name dialog → OK → handler row). Not exercised.
- Whether choosing StdFormRefreshCompleted from the list yields a handler bound to the built-in event rather than a custom event. Not exercised. This must be verified in T3 by reading the committed handler row and its event name before Save.

## 9. Stop decision

The control identity is established (tooltip `New`), and the dialog offers StdFormRefreshCompleted as a built-in list choice. The dialog is a clean, cancellable creation dialog, and it was closed once by native Cancel. No text was entered, no OK was pressed, and no handler was added. T2 ends here. **The mutation (handler creation, parameter configuration, Save) is not authorized by T2.** The next step, if authorized, is a separate T3 that selects StdFormRefreshCompleted from the dropdown list (not typed text), commits one handler, and verifies it before any Save.

## 10. Action counts (T2)

- Tab operations: list 1; select 1 (tab 0). Both succeeded.
- Snapshots: 6 untargeted (`t2-snapshot-00` to `-05`), all saved to the evidence directory.
- Finds: 1 (Form-tab/Components-tab reference lookup).
- Clicks: Properties > Form 1 (view); Details > Event Handlers 1 (view); **New 1**; **dropdown arrow 2** (open, then collapse; no selection); **Cancel 1**. Total 5.
- Hover: 1 (`New` tooltip, no click).
- Screenshots: 6 (`t2-01` to `t2-06`).
- Typing 0; key presses 0; Enter 0; option selections 0; OK 0; handler creation 0; action creation 0; Designer Save 0; close or reopen 0; runtime actions 0; Diagnostics or User Preferences 0; Diagnostic Log 0.
- Errors: none. Ref-not-found: none. Recovery snapshots used: 0. Corrected inspections used: 0.
- Disclosure: the tool wrappers for hover and click show generated `page.locator('#…')` calls derived from the snapshot refs. The worker supplied no JavaScript; these are tool-generated, not worker-authored browser code.

## 11. Evidence files written by T2

- `evidence/EXP-055/t2-01-form-context-event-handlers-empty-before-new.png`: Form context, Event Handlers empty, Initial Command Refresh, User scope, Save greyed. Proves the pre-New state. Does not prove hidden handler data (none visible).
- `evidence/EXP-055/t2-02-plus-control-hover-identity.png`: the blue + with the tooltip `New`. Proves the control identity by tooltip. Does not prove what the control does until clicked.
- `evidence/EXP-055/t2-03-after-single-new-click-dialog-state.png`: the "Event Handler" dialog with the Name combobox, OK, and Cancel; the handler grid behind it still empty. Proves the dialog's controls. Does not prove the dropdown contents.
- `evidence/EXP-055/t2-04-event-handler-name-dropdown-options-open.png`: the open dropdown, showing the first fifteen built-in Std* events in alphabetical order. Proves the list is built-in events. The screenshot does not show StdFormRefreshCompleted; it is in the accessibility tree (`t2-snapshot-03`).
- `evidence/EXP-055/t2-05-after-dropdown-collapsed-no-selection.png`: dropdown collapsed, Name blank, dialog still open. Proves that no option was selected.
- `evidence/EXP-055/t2-06-after-single-cancel-designer-state.png`: dialog closed; Form clean; grid empty; Save greyed. Proves the state after Cancel.
- `evidence/EXP-055/t2-snapshot-00-fresh-designer-start.md`, `t2-snapshot-01-form-event-handlers-before-new.md`, `t2-snapshot-02-after-single-new-click-dialog.md`, `t2-snapshot-03-name-dropdown-options-open.md`, `t2-snapshot-04-after-dropdown-collapsed-dialog.md`, `t2-snapshot-05-after-single-cancel-designer-state.md`: accessibility snapshots (dialog nodes, full option list in `-03`, empty grid in `-01` and `-05`).
- `evidence/EXP-055/T2-new-handler-dialog-inspection-report.md`: this report.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): snapshots and console logs for the T2 window.

## 12. Acceptance status (T2 scope)

| AC | Status | Basis / limit |
| --- | --- | --- |
| AC-1 Preflight | Supported (with limits; carried from T1) | Same Designer identity and scope; `t2-01`, `t2-snapshot-00`. |
| AC-2 Pre-change inventory | Supported (with limits; carried from T1, re-checked) | `t2-01`, `t2-snapshot-01`: Form-level grid empty; no StdFormRefreshCompleted row. The supported New surface identified (`t2-02`). |
| AC-3 Handler configured, Before Save | Not tested (outside T2; no handler created) | — |
| AC-4 Prompt parameters | Not tested | — |
| AC-5 to AC-12 | Not tested | — |

## 13. Knowledge state

| Finding | State |
| --- | --- |
| Form-level New control is the leftmost blue + in the Event Handlers toolbar (tooltip "New") | observed (T2; single session) |
| New opens a modal "Event Handler" dialog with a Name combobox, OK, and Cancel, and creates no row by itself | observed (T2) |
| The Name dropdown lists built-in Std* events, including StdFormRefreshCompleted, with no FX_ entries | observed (T2; accessibility list) |
| Free-text entry in the Name combobox | **unresolved** (not typed; not tested) |
| Dialog Cancel leaves the Designer clean with no handler | observed (T2) |
| Handler creation, Prompt parameters, Save, recovery, runtime Prompt | not tested |
| Replay-verified findings | none |
