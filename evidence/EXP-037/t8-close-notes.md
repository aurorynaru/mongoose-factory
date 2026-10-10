# EXP-037 — T8 ordinary Form-tab close (single close; no reopen)

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 7 · Task T8
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `be43e7a9-0604-406c-91b4-88fd30ae0ac1`)
Scope: close only the `FX_SingleButtonLab01` Form tab, once, through its own close control. **Not done:** Designer Save; reopen; runtime Button activation; Regenerate; unload; preference, session, or scope change; any Form property edit; any other Form or tab close.
Recovery allowance: both allowances exhausted; **none used in T8**. No ambiguity arose.

## Pre-close identity, scope, and clean state (rendered; URL not used)

| Check | Result | Evidence |
|---|---|---|
| Tab list | Web Client (tab 0) and Designer (tab 1). Designer selected (navigation only). | `t8-01-preflight-snapshot.md`, `t8-02-designer-preclose-snapshot.md` |
| Selected Form tab | Heading `FX_SingleButtonLab01`, `tab [selected]`, closable control `closable FX_SingleButtonLab01` (`e247`) | `t8-02…` lines 211–214 |
| Form Version | `User version for user anton.ramos@3mworks.com.ph` | `t8-02…` lines 330–331; `t8-03-preclose-viewport.png` |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t8-02…` line 539; `t8-03…png` bottom-left |
| Save | Disabled | `t8-02…` lines 10–11; `t8-03…png` (Save icon greyed) |
| Regenerate Form / Undo | Disabled | `t8-02…` lines 12–13, 52–53 |
| Dialogs / active editors | None in the accessibility tree | `t8-02…` (grep: no dialog, alertdialog, or `[active]` editor) |

Gate passed. The target was identified unambiguously and was clean, so the close was performed.

## The close (exactly one click)

- Closable control of the `FX_SingleButtonLab01` tab (`e247`) clicked **once**. Not repeated. No other tab or control was clicked.

## Post-close state (rendered)

- `t8-04-post-close-snapshot.md`: no `closable FX_SingleButtonLab01` control; no `FX_` heading; no `tab [selected]` Form tab; no `dialog` or `alertdialog`; Save and Regenerate Form `[disabled]`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (line 237 of that snapshot).
- `t8-05-post-close-viewport.png` (viewed): the tab heading and its close control are gone; the canvas is blank; the Properties panel is empty; Save/Undo/Redo greyed; the User footer is visible; the Toolbox remains usable. No prompt, dialog, or error on screen.
- Console (level `error`, read after the close): **0 messages**.
- Designer responsive: yes (the snapshot and viewport were read without timeouts or refs errors).

## Unsaved-changes prompt

- **None appeared.** No unsaved-changes prompt, no browser-native `beforeunload` dialog, and no Mongoose in-page confirmation was observed in the snapshot, the viewport, or the tab list. The stop instruction for a prompt therefore did not apply.

## Counts (T8)

| Item | Count |
|---|---|
| Target Form tab close (closable control) | **1** |
| Other tab or Form close | 0 |
| Designer tab close | 0 |
| Web Client tab close | 0 |
| Reopen | 0 |
| Designer Save | 0 |
| Regenerate / unload | 0 |
| Runtime Button activation | 0 |
| Form property / handler / Primary edit | 0 |
| Preference, session, or scope change | 0 |
| Dialog interaction | 0 |
| Browser JavaScript authored by worker | 0 |
| Authentication | 0 |
| Cold MGForm navigation | 0 |
| Recovery snapshot / corrected inspection | 0 / 0 |

## Limits (not claimed)

- The close shows the Designer no longer displays the Form. It does not show the server state of the saved definition; no durability, cache, or serialization claim is made.
- Recovery of the definition after reopen is not tested in T8.

## Next permitted action (not authorized by T8)

A recent-forms reopen of `FX_SingleButtonLab01` (Designer Form menu), followed by the recovery verification, in a separately authorized step.
