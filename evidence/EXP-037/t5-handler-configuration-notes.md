# EXP-037 — T5 custom Prompt handler configuration notes (unsaved; no Primary; no Save)

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 4 · Task T5
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `a7058644-3e8f-46b0-9e2b-46c66731489f`)
Scope of this task: define exactly one custom form event `FX_ButtonPromptEvent01` with one Prompt handler action, unsaved. **Not done in T5:** Button Events > Primary assignment; ordinary Designer Save; Form close or reopen; runtime Button activation; Application Event System; preferences; scripts.

## Pre-state (confirmed before mutation)

| Check | Result | Evidence |
|---|---|---|
| Tabs | Web Client (tab 0) current at start; Designer selected (tab 1, navigation only) | `t5-01-preflight-snapshot.md`, `t5-02-designer-selected-snapshot.md` |
| Target Form | Tab `FX_SingleButtonLab01`, closable control present, single Form tab | `t5-02…` lines 211–212 |
| Editing scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t5-02…` line 525; `t5-03-pre-new-handler-viewport.png` |
| Clean state | Save disabled, Regenerate disabled, Undo disabled, no dialog | `t5-02…` lines 10–13, 52–53 |
| Form Event Handlers list | **Empty** (no rows; column headers only) | `t5-03-pre-new-handler-viewport.png` (viewed) |
| Form Version | `User version for user anton.ramos@3mworks.com.ph` (Form properties, visible) | `t5-03…png` |

## Steps performed (in order)

1. **New (plus) in the Event Handlers toolbar** (Form-level list), clicked once (`e312`). An "Event Handler" name dialog opened. The first snapshot (`t5-04`) did not expose it; the screenshot (`t5-05-after-new-click-viewport.png`, viewed) showed the dialog with an empty Name combobox. A fresh snapshot (`t5-06-event-handler-dialog-snapshot.md`) gave the combobox ref (`e721`).
2. **Name:** typed `FX_ButtonPromptEvent01` once into the Name combobox (`e721`). Screenshot `t5-07-name-entered-viewport.png` (viewed) shows the field value exactly `FX_ButtonPromptEvent01`.
3. **OK** on the Event Handler name dialog, clicked once (`e725`). Snapshot `t5-08-after-ok-snapshot.md`: the handler list shows `FX_ButtonPromptEvent01` with one row, Sequence `0`, Disabled `false`. The Event To Handle editor shows Event `FX_ButtonPromptEvent01`, Sequence `0`, Disabled `False`, and a collapsed Response group. Form tab still selected. Save became enabled.
4. **Response group expanded** with the right-pane view control (`e327`, Expand). Snapshot `t5-10-handler-expanded-snapshot.md` shows Response > Type, Parameters, and Edit in-line Script.
5. **Response Type dropdown opened once** (arrow of the Type value cell, `e817`). Screenshot `t5-11-response-type-dropdown-viewport.png` (viewed) shows an alphabetical list (Add Breadcrumb … Collection Refresh). The list was scrolled by the browser to the option; `find` returned option `Prompt` at `e912` in the active expanded combobox.
6. **Prompt option clicked once** (`e912`). Screenshot `t5-12-response-type-prompt-selected-viewport.png` (viewed): Type = `Prompt`; the Parameters row became active with an ellipsis button. Snapshot `t5-13-prompt-type-snapshot.md`: the Type combobox still held focus (`[active]`) with `Prompt`.
7. **Parameters ellipsis clicked once** (`e829`). This blurred the Type combobox and opened the Event Handler Parameters dialog. Screenshot `t5-15-after-parameters-click-viewport.png` (viewed) shows the dialog before any entry: the Message Text field empty; Caption empty; Icon default (information radio selected); **Responses: OK checked, Event To Generate blank for OK, Default Button = OK**; Yes, No, Abort, Retry, Ignore, Cancel all unchecked with no event fields enabled. Live editor inspected before typing (per T5 instruction).
8. **Message Text:** typed `Factory Test Prompt` once into the textbox (`e1022`), not via the "..." string-resource button. Screenshot `t5-17-message-entered-viewport.png` (viewed) shows `Factory Test Prompt` in Message Text, Caption still blank, OK still the only checked response.
9. **Dialog OK clicked once** (`e1192`). Screenshot `t5-18-after-params-ok-viewport.png` (viewed): the handler row shows Sequence `0`, **Response Type `Prompt`**, Disabled `false`, and Response Parameters `PROMPT(Factory Test Prompt) ICON(DEFAULT...`. The Parameters dialog closed.
10. **Planned read-only snapshot** `t5-19-pre-save-handler-state-snapshot.md`, read by Grep: exact parameter string `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; one handler row `FX_ButtonPromptEvent01` / sequence `0` / `Prompt` / `false`; Save button enabled (not disabled); no `dialog` node; no textbox/combobox in an active editor state.

## Final state at end of T5 (observed)

- Handler **exists in the unsaved Form definition** with exactly one action: Sequence 0, Type Prompt, message `Factory Test Prompt`, OK-only response (`RESPONSE(OK())`, no event generated), `DEFAULTRESPONSE(OK)`, Icon DEFAULT.
- Grid and editor agree: the handler row and the Parameters summary both show the committed values; the editor is not in edit mode (no active textbox or combobox in the snapshot; no dialog open).
- **Save is enabled** (dirty). Not saved.
- **Button Events > Primary: not touched.** Not assigned in T5.
- Target Form tab still open and selected. User scope footer unchanged.

## Observation requiring disclosure

- **URL change after the first OK:** before the `t5-08` snapshot, the page URL in the tab list lost its `&MGForm=FX_SingleButtonLab01` parameter (the URL is now `…Default.aspx?tenant=…&inforSessionId=…` with no MGForm). The Form tab remained selected, the handler list and its state persisted, and no reload or dialog was observed (the handler created in the same session was still there in every later snapshot). I did **not** reload, navigate, or re-open. The meaning of the URL change is **unresolved**; it may be a client-side URL update after the form became dirty. The next task should not assume the URL identifies the Form; use the tab heading and scope footer instead.

## Recovery allowance

- Fresh untargeted snapshot: the `t5-04` snapshot did not show the Event Handler name dialog, although the dialog was open. The `t5-06` snapshot was taken after the screenshot confirmed the dialog, to get refs. It is **counted conservatively as the one fresh recovery snapshot (1 of 1 used; 0 remaining)**. All other snapshots (`t5-01`, `t5-02`, `t5-08`, `t5-10`, `t5-13`, `t5-14`, `t5-16`, `t5-19`) were planned state reads after state changes.
- Corrected visible inspection: **none used** in T5. No ref-not-found error occurred. `find` calls (for `Prompt`, `Message Text`, the dialog OK) were ref lookups within current snapshots, not corrections.
- No ambiguous control was retried.

## Counts (T5)

| Item | Count |
|---|---|
| Event Handler created (New + name OK) | 1 |
| Handler name typed | 1 |
| Response Type set (Prompt) | 1 |
| Response Type dropdown opened | 1 |
| Parameters dialog opened | 1 |
| Message Text entry | 1 |
| Parameters dialog OK | 1 |
| Response actions added | **0 extra** (exactly one action, sequence 0) |
| Event To Generate entries | 0 (OK response has no event) |
| Button Events > Primary assignment | **0** |
| Designer Save | **0** |
| Close / reopen | 0 |
| Runtime activation | 0 |
| Scope / preference change | 0 |
| Application Event System / Generate Application Event | 0 |
| Scripts / variables / bindings | 0 |
| Browser JavaScript authored by worker | 0 |
| Authentication | 0 |
| Cold MGForm navigation | 0 |
| Designer launch | 0 in T5 (cumulative 1 of 1) |

## Next permitted action (not authorized by T5)

Assign Button `FX_SingleButton01` Events > Primary to `FX_ButtonPromptEvent01` (a separate step, after a fresh snapshot confirming the Button selection and an empty Primary), then one ordinary Designer Save. Neither is authorized by this task.
