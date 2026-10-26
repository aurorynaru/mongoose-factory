# EXP-137 T22 — Single runtime Save of the validated FX_LoginUsers draft

Run `R-20261026-104057-G85J`, cycle 26, task T22. Scope: exactly one runtime Save of the T21 draft, then settled-state inspection. No close/reopen, no Refresh, no second Save, no Designer, no check-in, no wizard, no metadata unload, no FormSync, no JavaScript, no coordinate clicks.

## Outcome

- **Save attempts: 1.** One click on the runtime toolbar Save (ref `f1e28` from a fresh snapshot). The tool returned without error.
- **Settled state after the Save:** Save toolbar button **disabled**; the row indicator changed from a starred placeholder to an unstarred `1`; `(Object 1 of 1)` unchanged; the four values remain in the four boxes and in the single grid row; no extra row and no dialog visible.
- **Interpretation:** the Save-disabled state and the unstarred row are consistent with a committed row (EXP-135 T12 pattern). This is a UI-level observation in the current session. It is **not** a database readback and not a field-level query.
- **Record count:** one row in the grid (`gridcell "1"`, one row group). No second committed row or extra insertion placeholder was seen.
- **Immediate response:** not separately captured. The click returned before the first post-click snapshot and screenshot; no toast or warning was seen in the captured settled state. An immediate capture was not taken, so the toast question is unresolved.
- **Mapping:** the four values are shown in the same positions as before the Save. The positional mapping remains unverified. Nothing in this step shows that the top box binds to FX_PasswordHash, and no column swap is visible in the rendered UI. A swap would not be visible here if the binding were wrong, because the values would still display in the boxes they were typed in.

## Pre-Save guards (fresh snapshot, `t22-00`)

| Guard | Observed |
|---|---|
| Tab list then select | List (read-only); tab 0 (Web Client) selected on the first attempt |
| Form | tab heading `FX_LoginUsers`; URL `favoriteContext=FX_LoginUsers` |
| Account header | `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (screenshot; the snapshot masks the username) |
| Collection | `(Object 1 of 1)`; one draft row; starred placeholder row before Save |
| Save | enabled |
| Editors | the status textbox `(Object 1 of 1)` had focus from the T21 blur click; this is read-only, not an open editor. The four boxes are not active |
| Session / error dialog | none |
| Console (warning level) | 2 warnings (origin-trial notice and an unrelated view-template notice); error level: 3 pre-existing permissions-policy `unload` messages, unchanged |

Value validation (accessibility text, fresh snapshot, before Save):

| Position | Intended provisional property | Value read back | Check |
|---|---|---|---|
| Top box `f1e164` | FX_PasswordHash | `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40` | exact; 64 characters (groups 10·10·10·10·10·10·4) |
| Second `f1e171` | FX_Role | `FX-Viewer` | exact |
| Third `f1e178` | FX_Store | `FX-STORE-01` | exact |
| Fourth `f1e185` (Required) | FX_Username | `fx_probe` | exact |

Draft-row cells (same snapshot): `1d1fde6d…2609b40` (hash, exact), `FX-Viewer`, `FX-STORE-01`, `fx_probe`. The four textboxes and the four row cells agreed. No value differed from the T21 committed draft.

## Save action

- Click: one, on `f1e28` (toolbar Save, accessibility name `Save`), in the Web Client iframe. Pointer-based click, not coordinate-based.
- Result: returned without error. No retry, no second Save.

## Settled state (read-only)

- Settled snapshot (one, taken after the click; the tool also wrote `evidence/playwright/page-2026-10-26T15-06-18-950Z.yml` for the click result): Save `disabled`; grid row `f1e149`-`f1e155` holds the four values; textboxes hold the same four values; `(Object 1 of 1)`; a Save tooltip is shown, from pointer hover, not a message.
- Console after Save (warning level): 2 warnings, unchanged text; error level 3, unchanged.

## Screenshots (each viewed)

- `evidence/EXP-137/t22-00-pre-save-draft-validated.png`: header with account and configuration; `FX_LoginUsers` tab; `(Object 1 of 1)`; one starred draft row; four boxes showing the hash (clipped at the box edge), `FX-Viewer`, `FX-STORE-01`, `fx_probe`; Save icon enabled; no dialog. **Proves** the pre-Save identity, account and draft values as rendered. **Does not prove** the saved state, field names or any binding. The hash box is clipped on screen; the full value was confirmed by the accessibility readback.
- `evidence/EXP-137/t22-01-post-save-settled-state.png`: same runtime Form; Save icon greyed (disabled); row indicator `1` unstarred; four values still present; `(Object 1 of 1)`; a "Save" tooltip from pointer hover; the fourth box has a grey background (not interpreted). **Proves** the settled UI state after the single Save: Save disabled, one row, values unchanged, no dialog. **Does not prove** database commit, persistence, field bindings, or the immediate toast (not captured).

## Action accounting (T22)

| Action | Count | Result |
|---|---|---|
| Tab list (read-only) | 1 | succeeded |
| Tab select (tab 0) | 1 | succeeded on first attempt |
| Fresh untargeted snapshot (pre-Save) | 1 | succeeded |
| Pre-Save screenshot | 1 | succeeded, viewed |
| **Save click** | **1** | returned without error |
| Settled snapshot | 1 | succeeded |
| Settled screenshot | 1 | succeeded, viewed |
| Console (warning and error levels, read-only) | 2 | observed |
| Second Save | 0 | none |
| Refresh | 0 | none |
| Close / reopen / reload / portal navigation | 0 | none |
| Designer, check-in, wizard, metadata unload, FormSync | 0 | none |
| Add/New, record insert | 0 | none |
| Typed text | 0 | none |
| Coordinate clicks | 0 | none |
| Keyboard | 0 | none |
| Ref-not-found / recovery | 0 | none |
| Worker-authored browser JavaScript | 0 | the tool wrappers print generated code; `deny_browser_javascript` cannot be read or set by the worker, so it remains unverified |

## Unresolved / limitations

1. **Immediate response not captured.** The first post-click capture was a snapshot and screenshot taken after the click returned. Any transient toast or validation response may have been missed. The settled state shows no error.
2. **Commit is UI-level only.** Save disabled and an unstarred row are not a database readback. Persistence beyond the open session is not established (brief: close/reopen is not authorized in this task).
3. **Binding not verified.** The four values are shown in the same positions as typed. This does not establish that the top box is FX_PasswordHash, and a swapped binding would not be visible in this state. The check depends on a runtime readback after close and reopen, which is not authorized in T22.
4. **Fourth box grey background.** Visible in `t22-01`; not interpreted. It may be a focus, read-only or selected state; not established.
5. **Hover tooltip.** A "Save" tooltip is shown from the pointer position over the toolbar. It is not a message.
6. **Console counters unchanged** (warning 2, error 3). The error messages are pre-existing permissions-policy `unload` messages and were not investigated.

## Next step (coordinator review)

Return to the coordinator before any close/reopen persistence verification. The next permitted action, if authorized, is one ordinary runtime close and one supported reopen, with a readback of the four values and the row count. T22 performed no such step.
