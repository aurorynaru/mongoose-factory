# EXP-037 — T7 single ordinary Designer Save and post-Save verification

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 6 · Task T7
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `07729c76-81fe-429c-8967-6a4c1968baba`)
Scope: one ordinary Designer Save of the configured FX_SingleButtonLab01 definition, then read-only verification. **Not done in T7:** Form-tab close; reopen; runtime Button activation; Regenerate; unload; session change; preference change; any editor entry; any assignment; any other property change.
Recovery allowance: both allowances already exhausted (T4 corrected inspection; T5 fresh snapshot). **No recovery snapshot or corrected inspection used in T7.** No ambiguity arose.

## Pre-Save gate (all passed; rendered state, not URL)

| Check | Result | Evidence |
|---|---|---|
| Target tab | Heading `FX_SingleButtonLab01`, selected, closable control present | `t7-02-designer-selected-snapshot.md` lines 211–214 |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t7-02…` line 856; `t7-03-pre-save-viewport.png` |
| Save control | Enabled (no `[disabled]`) | `t7-02…` line 11; `t7-03…png` (Save icon active) |
| Handler | One group `FX_ButtonPromptEvent01`; one row, sequence 0, Prompt, Disabled false | `t7-02…` lines 251–256; `t7-03…png` |
| Exact parameters | `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` | `t7-02…` line 256 |
| Primary (committed) | `FX_ButtonPromptEvent01` (accessibility value; grid cell not in edit mode) | `t7-02…` lines 662–663 |
| Editors / dialogs | No `[active]` combobox or textbox; no dialog or alertdialog | `t7-02…` (grep) |
| Button | Header `FX_SingleButton01 (Button)`; Name `FX_SingleButton01`; Caption `Factory Test Button`; Type `PushButton` | `t7-02…` lines 350, 376–398 |

Gate passed. No inconsistency required stopping.

## The Save (exactly one click)

- Toolbar Save (`e16`, ordinary Designer Save control) clicked **once**. Not repeated.
- Network request filter `SaveChanges`, read after the click: **one request**, `POST …/Designer/DesignerSession/SaveChanges => [200]`.
- Response body (`response-body`): `{"Success":true,"Message":"Form [FX_SingleButtonLab01] and global object(s) were saved.","Payload":[]}`.
- A second `SaveChanges` count read at the end of T7 still showed **one** request.

## Post-Save state (rendered)

- `t7-04-post-save-snapshot.md`: Save `[disabled]` (line 10–11); Regenerate Form `[disabled]`; Undo `[disabled]`; no dialog or alertdialog; no `[active]` editor; target tab still selected (line 211–212); scope footer User (line 856).
- `t7-05-post-save-viewport.png` (viewed): Save icon greyed in the toolbar; Undo/Redo greyed; target heading `FX_SingleButtonLab01`; one blue button captioned "Factory Test Button"; Event Handlers view shows the single Prompt row with the exact parameters; Primary `FX_ButtonPromptE…` (truncated on screen); footer User scope. No toast, error, or prompt visible.
- Designer visibly clean: yes (Save disabled; no unsaved-change indicator; no error).

## Post-Save reinspection (read-only; view controls only)

- **Event Handlers (`t7-04`):** exactly one group `FX_ButtonPromptEvent01`; one row: Sequence 0, Response Type Prompt, Disabled false, Response Parameters `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. The Event To Handle detail shows Event `FX_ButtonPromptEvent01`, Sequence 0, Disabled False (`t7-04` lines 286–332; `t7-05…png`).
- **Button Events > Primary (`t7-04`):** `FX_ButtonPromptEvent01` (line 663, accessibility value; on screen truncated).
- **Button properties (`t7-04`, `t7-06`):** Name `FX_SingleButton01` (`t7-04` line 376); Caption `Factory Test Button` (line 388); Type `PushButton` (line 398); header `FX_SingleButton01 (Button)` (line 350).
- **Components (`t7-06-post-save-components-snapshot.md`, lines 251–280; `t7-08` viewport):** root `Pane (00)` with exactly **one** child row `FX_SingleButton01 / PushButton / Pane 0 / Tab 0`. Component count = 1. "Event to generate" column blank (unchanged; its meaning remains unresolved).
- **Form properties (`t7-07-post-save-form-properties-snapshot.md`, lines 311–349; `t7-08` viewport):** Name `FX_SingleButtonLab01`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True; scope footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (line 539).

## Counts (T7)

| Item | Count |
|---|---|
| Designer Save (ordinary toolbar) | **1** (one `SaveChanges` POST, `Success: true`) |
| Save repeat | 0 |
| Regenerate / unload | 0 |
| Close / reopen | 0 |
| Runtime Button activation | 0 |
| Handler / action edits, additions | 0 |
| Primary changes | 0 |
| Other property changes | 0 |
| Editor entries | 0 |
| Dialog interactions | 0 |
| View-only tab switches (Components, Form in Properties) | 2 |
| Browser JavaScript authored by worker | 0 |
| Authentication / session change | 0 |
| Cold MGForm navigation | 0 |
| Recovery snapshot / corrected inspection | 0 / 0 |

## Limits (not claimed)

- The Save response confirms the server accepted the save call for `FX_SingleButtonLab01`. It does not show what the server stores or how; no durability, cache, or serialization claim is made.
- The Primary value and the Prompt message are verified in the rendered Designer and the accessibility tree. The Primary value is truncated on screen.
- The URL still lacks the `MGForm` parameter; identity rests on the tab heading, Form Name, Version, and scope footer.
- Recovery across close and reopen is not tested in T7 (it is the next, separately authorized step).

## Next permitted action (not authorized by T7)

Ordinary Form-tab close (`closable FX_SingleButtonLab01`), then a Designer recent-forms reopen, each in a separately authorized step.
