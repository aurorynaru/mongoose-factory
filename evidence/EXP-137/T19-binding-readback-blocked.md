# EXP-137 T19 — Read-only binding readback of the generated FX_LoginUsers Form (BLOCKED before any binding was read)

Run `R-20261026-104057-G85J`, cycle 23, task T19. Worker session `9c579cc4-9217-4488-a712-b1d7527f781e`.
Scope: read-only verification of the four generated control-to-property bindings on the reopened Form `FX_LoginUsers`, following the T19 bounded instruction. Result: **not achieved.** No binding was read. Stopped after the single corrected inspection, as the brief requires.

## Outcome

- **Binding readback (AC-5 sub-check, four bindings): NOT ESTABLISHED.** No edit box's Properties/Binding panel was read. Each of FX_PasswordHash, FX_Role, FX_Store and FX_Username remains unverified against any control.
- **Blocker:** on the canvas, the first edit box could not be selected by a click because a designer selection adorner (`compadorner-3503`, an `x-component mg-adorner-comp` div) intercepted pointer events. The Details > Components route exposes only the collapsed `Pane (00)` and `Pane (01)` rows, with no expander accessibility reference. That matches T16. The chevrons are visible in the screenshot but have no accessibility ref, so per the brief they were not clicked.
- Save and Undo stayed disabled throughout. No dialog appeared. No change was made to the Form.

## Guard checks (fresh snapshot, `t19-00`)

Tab list (read-only) then tab 1 selected (succeeded on first attempt). Fresh untargeted snapshot:

| Guard | Observed |
|---|---|
| Form Name | `FX_LoginUsers` (Properties, Design > Name) |
| Caption | `FX_LoginUsers` |
| Version | `User version for us…` (User) |
| Form Type / Is Master | Normal / True |
| ScopeType / ScopeName | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (footer; masked in snapshot as `<secret>` tag, reading from the screenshot) |
| Primary Collection | `Primary Collection: FX_LoginUsers` (Details > Collections) |
| Save / Undo | disabled / disabled |
| Dialog or active editor | none |

## Canvas evidence (`t19-00`)

Screenshot viewed. It shows the GridLeft canvas with four stacked edit boxes, each with a blank caption label (`:`), and a red required marker on the fourth row. The screenshot does not show any binding.

Accessibility refs in the canvas snapshot (current-snapshot only): `textbox` `e310`, `e319`, `e328`, `e337`, in top-to-bottom order.

Partial component-name clue, **not a binding readback**: the failed click's Playwright error log resolved ref `e310` to an `<input>` with `data-mgcompnamevalue="FX_PasswordHashEdit"`, `componentid="mgedit-3448"`, `maxlength="64"`. This came from the tool's error text, not from a Mongoose Properties panel. It names the component on the top row only. It does not confirm that the control binds to `FX_PasswordHash`. The other three refs were not resolved to names.

## Action accounting (T19)

| Action | Count | Result |
|---|---|---|
| Tab list (read-only) | 1 | succeeded |
| Tab select (tab 1, Designer) | 1 | succeeded |
| Fresh untargeted snapshot (initial) | 1 | succeeded |
| Canvas edit-box click (ref `e310`) | 1 | **failed**: timeout 5000 ms, `compadorner-3503` intercepts pointer events; no state change |
| Fresh untargeted snapshot (recovery allowance) | 1 | succeeded; state unchanged, same refs |
| Details > Components tab click (ref `e345`) | 1 | succeeded (view switch only, not an expansion) |
| Chevron / row click / ArrowRight on Pane rows | 0 | not attempted (T16 route excluded; no supported ref) |
| Component selection | 0 successful | — |
| Screenshots | 2 | both succeeded (`t19-00`, `t19-01`) |
| Coordinate clicks | 0 | — |
| Keyboard (Escape, Enter, Tab, typing) | 0 | — |
| Save | 0 | Save disabled before and after |
| Caption, component, binding, or layout edits | 0 | — |
| Close / reopen of the Form | 0 | — |
| Runtime open, record insert, runtime Save | 0 | — |
| IDO check-in or check-out | 0 | — |
| Finish, Create Form, Save Template | 0 | — |
| Portal reload | 0 | — |
| Metadata unload, FormSync | 0 | — |
| Vendor or non-FX_ Form touched | 0 | — |
| Worker-authored browser JavaScript | 0 | the tool wrappers print generated `Ran Playwright code` blocks; these are the tool's own output, not worker-authored code. `deny_browser_javascript` cannot be read or set by the worker |
| Automatic browser recovery (session) | 0 | no session expiry, no ref-not-found error |

Recovery consumed in T19: one fresh snapshot and one corrected inspection (the Components tab switch, which still showed only the two collapsed panes). Both are now used; no further recovery is attempted in this task.

## Screenshots

- `evidence/EXP-137/t19-00-pre-binding-form-identity-guards.png`: Form identity, Caption, Version, Primary Collection, User-scope footer, four canvas edit boxes, required marker on row 4, Save and Undo disabled, no dialog. **Proves** the identity and guard state at task start. **Does not prove** any binding, the component names, or which row is which property.
- `evidence/EXP-137/t19-01-components-tab-after-corrected-inspection.png`: Details > Components tab, `Pane (00)` and `Pane (01)` collapsed (chevrons visible), Save and Undo disabled. **Proves** the Components tab is selected and the panes remain collapsed. **Does not prove** any control name or binding.
- Tool-generated snapshot (not curated): `evidence/playwright/page-2026-10-26T14-54-22-423Z.yml` (Components tab tree).

## Acceptance mapping (T19 scope)

- Guards for the reopened Form (Name, Caption, User scope, Primary Collection, Save and Undo disabled): **observed** in this task (`t19-00`).
- Four generated bindings (`FX_PasswordHash`, `FX_Role`, `FX_Store`, `FX_Username`), each exactly once: **not established.** The requirement is unmet, not failed.
- AC-5 (Name, ScopeType, ScopeName, and binding layout): identity and scope remain supported from T18; the binding portion stays open.

## Unresolved

1. Control-to-property bindings for all four edit boxes. The canvas click was intercepted by the designer adorner. The Components route shows only collapsed panes with no expander reference.
2. Component names for refs `e319`, `e328` and `e337`. Only `e310` was resolved, from the tool error log.
3. The Details panel is now on the Components tab (UI state only). It was left in that state rather than switched back.

## Options for the coordinator (not taken)

- **Accept the binding check as deferred** and rely on the runtime capture. The runtime readback of the single fake record already distinguishes the four fields, because each holds a different value; a wrong binding would show swapped values. This is the lower-risk route, but it still needs coordinator approval because runtime is the next step.
- **Authorize a fresh task** to try one other designer-selection route (for example, a different supported selection path that clears the adorner interception). I would not attempt this without a fresh authorization, because it would be another interaction attempt.
- Do not use the Pane chevrons without a supported accessibility reference (brief rule).

## Documentation changes

- `experiments/EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md`: T19 current-status paragraph and "Operations (T19)" section (same file, existing record only).
