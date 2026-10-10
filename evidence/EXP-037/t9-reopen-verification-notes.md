# EXP-037 — T9 single supported reopen and read-only definition-recovery verification

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 8 · Task T9
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `fac1fb4a-82ae-4dff-8391-fb8cc95ac75f`)
Scope: one supported reopen of `FX_SingleButtonLab01` through the Designer Form-menu recent-forms entry, then read-only verification. **Not done in T9:** Designer Save; close; second reopen; runtime Button activation; Regenerate; unload; property or handler edits; preference, session, or scope change; cold MGForm URL navigation; a second Designer.
Recovery allowance: both exhausted; **none used in T9**. No ambiguity arose.

## Pre-reopen state (rendered)

- Tab 1 (Designer) selected; Web Client tab 0 untouched.
- `t9-02-designer-formless-snapshot.md`: no Form tab, no dialog, Save disabled, footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. `FX_SingleButtonLab01` absent from the Form-tab area.

## The reopen (exactly one)

- Top-bar `Form` menu opened (`e3`), view only. `t9-03-form-menu-open-snapshot.md`: recent-forms list contains exactly one `FX_SingleButtonLab01` entry (`e296`), plus other FX_ forms and `FormSync`.
- The `FX_SingleButtonLab01` recent-forms entry clicked **once**. Supported Designer path (same route as EXP-036 T11 and EXP-037 T3). Not a cold URL: the URL gained `MGForm=FX_SingleButtonLab01` from the menu selection.

## Post-reopen identity, scope, and clean state (rendered)

| Check | Result | Evidence |
|---|---|---|
| Form tab | Heading `FX_SingleButtonLab01`, `tab [selected]`, closable control present, one tab | `t9-04-post-reopen-snapshot.md` lines 211–214 |
| Name | `FX_SingleButtonLab01` (Properties Name row, Form tab) | `t9-05-post-reopen-viewport.png` (viewed; truncated `FX_SingleButtonLa…`) and `t9-08…png` |
| Version | `User version for user anton.ramos@3mworks.com.ph` (Form properties; full value in accessibility tree) | `t9-05…png` (truncated `User version for us…`); `t9-07-event-handlers-recovered-snapshot.md` (Form properties present) |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t9-04…` line 518; `t9-05…png` bottom-left; `t9-15…` line 877 |
| Clean state | Save, Regenerate Form, Undo disabled; no dialog | `t9-04…` lines 10–13, 52–53; `t9-15-final-readonly-snapshot.md` |
| Errors / prompts | None observed; console not separately read at this step (see limitation) | — |

Identity and scope confirmed by rendered Form name, Version, and footer. The URL was not used for identity.

## Handler recovery (view-only)

- Details panel expanded once (`Expand Panel`, view control) and the Event Handlers tab selected once (view control). `t9-06…`, `t9-07…`.
- The handler list initially showed the group `FX_ButtonPromptEvent01` **collapsed** (`t9-08-event-handlers-recovered-viewport.png`, viewed: `+` expander). Its action row was not rendered until the group was expanded.
- The group row was clicked **once** (a grid-row click that expanded the group; not an edit; no editor opened). `t9-09-after-group-click-snapshot.md`, `t9-10-event-handlers-expanded-viewport.png` (viewed).
- **Recovered handler, read from `t9-09`:** one group `FX_ButtonPromptEvent01`; one row: Sequence `0`, Response Type `Prompt`, Disabled `false`, Response Parameters `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (`t9-09` lines 251–256). The viewport shows the same row, with the parameter cell truncated on screen.
- **Literal message:** `Factory Test Prompt` is visibly recovered in the rendered parameter summary, within `PROMPT(…)`. The full summary is from the accessibility tree.
- Exactly one event group and exactly one action row.

## Button recovery (selection only)

- Components tab selected once (view). Components grid expanded once (view control `Expand`, `e833`). `t9-11…`, `t9-12-components-expanded-snapshot.md`.
- Grid: root `Pane (00)` with exactly **one** child row: `FX_SingleButton01 PushButton 0 0 FX_ButtonPromptEvent01` (`t9-12` line 269). Columns: Name `FX_SingleButton01`; Type `PushButton`; Pane 0; Tab 0; "Event to generate" `FX_ButtonPromptEvent01` (not blank; see below).
- The `FX_SingleButton01` row was selected once (selection only, no edit). Properties header `FX_SingleButton01 (Button)` (`t9-13-button-selected-snapshot.md` line 289; `t9-14-button-recovered-viewport.png`, viewed).
- Recovered Button properties (`t9-13`):
  - Name `FX_SingleButton01` (lines 317–319)
  - Caption `Factory Test Button` (lines 332–335)
  - Type `PushButton` (lines 343–346); From Device Master `True` (lines 353–355)
  - Events > **Primary `FX_ButtonPromptEvent01`** (lines 636–651, accessibility full value; Data Change blank)

## Comparison against the T3/T4/T6/T7 baseline

| Property | Baseline (T3/T6/T7) | Post-reopen (T9) | Match |
|---|---|---|---|
| Form Name | `FX_SingleButtonLab01` | `FX_SingleButtonLab01` | yes |
| Form Version | `User version for user anton.ramos@3mworks.com.ph` | same | yes |
| Scope footer | User / anton.ramos@3mworks.com.ph | same | yes |
| Component count under Pane (00) | 1 | 1 | yes |
| Button Name | `FX_SingleButton01` | `FX_SingleButton01` | yes |
| Button header / component type | `FX_SingleButton01 (Button)` | same | yes |
| Caption | `Factory Test Button` | `Factory Test Button` | yes |
| Type (grid) | `PushButton` | `PushButton` | yes |
| Pane / Tab | 0 / 0 | 0 / 0 | yes |
| Event handler group | `FX_ButtonPromptEvent01`, 1 action | same | yes |
| Action | seq 0, Prompt, Disabled false, `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` | same | yes |
| Button Events > Primary | `FX_ButtonPromptEvent01` (committed; T6, T7) | `FX_ButtonPromptEvent01` | yes |
| Clean state | Save disabled after Save | Save disabled | yes |
| Layout | Canvas button at ~(450–565, 250–285); Splitter None; Pane scroll bars As Needed; Unit Char; Size 120; 40 | Canvas button at the same position; Form layout values read at T4/T7 unchanged in the Form tab (not re-read in full here) | yes (canvas and grid); full Layout group not re-read |

## Deviation to record (not a mismatch of the handler or Primary)

- The Components grid column **"Event to generate"** now shows `FX_ButtonPromptEvent01` for `FX_SingleButton01` after reopen. In T3, T4, and T6/T7 the same column was **blank**. This column was not part of the baseline comparison; its meaning remains unresolved. The Primary value and the handler are the consistent evidence. I treat the new value as a reopen-time rendering of the Primary event in the grid. This interpretation is **unresolved**, not proven.
- The Form Event Handlers group was collapsed on first render after reopen. Its contents were recovered once the group was expanded. Whether the collapsed default is a reopen-time behaviour or a tree default is **not established** (one run).

## Limitations

- Console was not separately read after the reopen (the level `error` read was performed after T8's close, not here). Visible state shows no error, dialog, or prompt.
- The Form-level Layout group was not re-expanded in T9; layout is compared by canvas position and the grid's Pane/Tab values.
- The Primary column is truncated on screen; its full value is taken from the accessibility tree.
- The URL still carries `MGForm`, but identity rests on the rendered heading, Form Name, Version, and footer.
- Recovery here is observed Form-definition recovery across an ordinary close and a Designer recent-forms reopen. It is **not** database durability, cache eviction, or server serialization.

## Counts (T9)

| Item | Count |
|---|---|
| Supported reopen (recent-forms) | **1** |
| Close | 0 |
| Designer Save | 0 |
| Regenerate / unload | 0 |
| Runtime Button activation | 0 |
| Property, handler, or Primary edit | 0 |
| Editor entries | 0 |
| Form menu opens (view) | 1 |
| Details expand / tab switches (view) | 4 (Expand Panel 1; Event Handlers 1; Components 1; Component/Form switches 0–1) |
| Grid expand (view) | 2 (Event Handlers group click 1; Components Expand 1) |
| Row selection (Button) | 1 (selection only) |
| JavaScript authored by worker | 0 |
| Authentication / session change | 0 |
| Cold MGForm navigation | 0 |
| Recovery snapshot / corrected inspection | 0 / 0 |

## Stable state

- Designer tab selected; `FX_SingleButtonLab01` open and clean (Save disabled); User footer; `FX_SingleButton01` selected; no dialog; no browser prompt.

## Acceptance mapping

- **AC-7 (reopen of the same User-scoped Form through a supported Designer path):** supported by one recent-forms reopen with rendered identity (heading, Name, Version, User footer) and clean state.
- **AC-8 (recovered custom event, Prompt handler, literal message, Primary assignment, and unchanged Button identity and Caption):** supported by the rendered handler group and action, the exact parameter summary, the Primary accessibility value, and the Button's Name, Caption, Type, and component count.
- Both are **observed Form-definition recovery across an ordinary close and reopen**. They do not establish durability, cache eviction, or server serialization.
- Runtime Prompt behaviour is untested; optional runtime testing requires separate authorization.
