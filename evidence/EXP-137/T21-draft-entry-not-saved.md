# EXP-137 T21 — Draft entry of the one authorized fake FX_LoginUsers row (NOT SAVED)

Run `R-20261026-104057-G85J`, cycle 25, task T21. Coordinator decision applied: Option A from T20 (unfiltered placeholder-only state after Refresh accepted as qualified zero-committed-row evidence). Scope of this task: enter four distinct values into the one existing starred placeholder row and stop. **No Save was clicked.** No Refresh after editing, no close/reopen, no check-in, no Designer edit, no Finish, no metadata unload, no FormSync, no browser JavaScript.

## Outcome

- The draft row holds the four intended literal values in the rendered UI, in the provisional positional order. **The draft is ready for a coordinator-authorized single Save. Save was not clicked.**
- Save became enabled after the draft was entered (dirty state). Save was disabled before entry (`t21-00`).
- Row count: one row (the starred placeholder converted to the draft). No extra row, no replacement row, no duplicate fx_probe.
- Displayed positional correctness does **not** independently prove the four underlying IDO bindings. Binding of the four boxes to FX_PasswordHash, FX_Role, FX_Store and FX_Username remains unverified (T19 readback failed). The runtime readback after a future Save is the only route that can distinguish a swapped binding.

## Pre-entry guards (fresh snapshot, `boxes=true`, and `t21-00`)

| Guard | Observed |
|---|---|
| Tab | Web Client tab 0 selected (tab list read first, then select succeeded on first attempt) |
| Account header | `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (screenshot; snapshot masks the username) |
| Runtime Form | tab heading `FX_LoginUsers`; URL `favoriteContext=FX_LoginUsers` |
| Collection | `(Object 1 of 1)`; one starred placeholder row (grid cell `1`) |
| Edit boxes | four textboxes, unnamed in accessibility tree, blank `:` captions; required `*` marker on the fourth |
| Save | disabled |
| Dialogs | none |
| Session / sign-in | none |
| Console (tab) | 3 errors, 2 warnings (unchanged; the three errors are pre-existing permissions-policy `unload` messages, not investigated) |

Positional mapping check (boxes snapshot, top-to-bottom): textbox `f1e162` y≈120, `f1e169` y≈160, `f1e176` y≈201, `f1e183` y≈242, with the `*` marker on `f1e183`. The order matches the T15 included-property order (FX_PasswordHash, FX_Role, FX_Store, FX_Username), the T19 top-control diagnostic (`FX_PasswordHashEdit`, maxlength 64) and the T20 Required marker. The layout matched the brief's expectation, so entry proceeded.

## Entries (one field at a time, each followed by a read-only readback)

| # | Position / ref (y) | Provisional property | Value entered | Readback after entry |
|---|---|---|---|---|
| 1 | Top `f1e162` (y≈120) | FX_PasswordHash | `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40` | Snapshot: textbox active, value exactly the 64-character string (full value in accessibility text). Save still disabled. |
| 2 | Second `f1e169` (y≈160) | FX_Role | `FX-Viewer` | find: textbox active `FX-Viewer`; top still holds the hash. |
| 3 | Third `f1e176` (y≈201) | FX_Store | `FX-STORE-01` | find: textbox active `FX-STORE-01`; draft row cells now show hash and FX-Viewer. |
| 4 | Fourth `f1e183` (y≈242, Required) | FX_Username | `fx_probe` | find: textbox active `fx_probe`; Save enabled; draft row still showed three values (fourth not yet committed). |

Commit of the fourth editor: one click on the read-only status textbox `(Object 1 of 1)` (`f1e189`) as a non-saving blur target. This is not Save, Refresh or a row action. Result: the draft row's fourth gridcell reads `fx_probe`.

Final draft readback (find, read-only):
- Row `f1e203` (single row in the rowgroup) with gridcells: `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40` (`f1e198`), `FX-Viewer` (`f1e200`), `FX-STORE-01` (`f1e202`), `fx_probe` (`f1e204`).
- Textboxes: `f1e162` = hash (64 characters, exact text match), `f1e169` = `FX-Viewer`, `f1e176` = `FX-STORE-01`, `f1e183` = `fx_probe`.
- Status `f1e189` = `(Object 1 of 1)`, one collection object.
- Save toolbar `f1e28`: enabled (not clicked).
- Error-level console messages: 3, all pre-existing permissions-policy `unload` messages; warning count 2; unchanged. Not investigated.

Hash-length check: the entered string was counted as 64 hexadecimal characters (groups counted by hand). The accessibility readback shows it complete, not truncated. The visible box clips the text at its right edge (display only, `t21-01`).

## Action accounting (T21)

| Action | Count | Result |
|---|---|---|
| Tab list (read-only) | 1 | succeeded |
| Tab select (tab 0, Web Client) | 1 | succeeded on first attempt |
| Fresh untargeted snapshot (before entry) | 1 | succeeded (placeholder state, Save disabled) |
| Fresh snapshot with bounding boxes (before entry, read-only) | 1 | succeeded; top-to-bottom order confirmed |
| Untargeted snapshot after first entry | 1 | succeeded; top box active with the hash, refs current |
| Find (read-only readbacks) | 7 | succeeded |
| Browser type / fill into edit boxes | 4 | one per field, in order top to bottom; each followed by a readback |
| Click on read-only status textbox (blur target) | 1 | succeeded; no save |
| Screenshots | 2 | `t21-00` (pre-entry) and `t21-01` (post-commit), both viewed |
| Console error read (read-only) | 1 | 3 pre-existing errors |
| Save | 0 | **not clicked** |
| Refresh | 0 | not clicked after editing (none at all in T21) |
| Add/New | 0 | none (existing placeholder used) |
| Record insert beyond the single draft | 0 | none |
| Close / reopen / reload / portal navigation | 0 | none |
| Check-in / check-out | 0 | none |
| Designer tab actions | 0 | tab 1 not selected |
| Finish / Create Form / wizard | 0 | none |
| Metadata unload / FormSync / deployment | 0 | none |
| Escape / Tab / Enter keys | 0 | none |
| Coordinate clicks | 0 | none |
| Ref-not-found / recovery | 0 | none |
| Worker-authored browser JavaScript | 0 | the tool wrappers print generated code; `deny_browser_javascript` cannot be read or set by the worker, so it remains unverified |

Errors: none from the browser actions. Each of the four entries returned a successful tool result; no retries, ref-not-found errors or timeouts occurred.

## Screenshots (each viewed)

- `evidence/EXP-137/t21-00-runtime-pre-entry-placeholder-state.png`: runtime tab `FX_LoginUsers`, header with account and configuration, `(Object 1 of 1)`, one starred placeholder, four blank boxes with `:` captions, `*` on the fourth, Save disabled, no dialog. **Proves** identity, account header, placeholder-only collection and the pre-entry guard state. **Does not prove** field names, the binding of any box, or the absence of committed rows at field level.
- `evidence/EXP-137/t21-01-draft-row-four-values-before-blur-check.png` (filename says "before-blur-check", but the capture was taken **after** the blur commit; the name is misleading and cannot be changed without a shell): four boxes showing hash (clipped at the box edge), `FX-Viewer`, `FX-STORE-01`, `fx_probe`; star-and-`1d1f…` row header; Save toolbar icon enabled; `(Object 1 of 1)`; no dialog. **Proves** the four draft values in the rendered boxes in the provisional order, one draft row, Save enabled, and no dialog. **Does not prove** that the draft is saved, that the hash is shown in full (the accessibility readback shows it full), or any IDO binding.

Tool-generated snapshot files (not curated) were written under `evidence/playwright/` by the browser tool.

## Limitations

1. Positional mapping is provisional. Positions and the Required marker agree with the T15 order, the T19 diagnostic and T20, but no direct binding readback exists. A swapped binding would show only after a Save and runtime readback.
2. The draft is uncommitted to the database. It is a UI draft, not a stored row. No database evidence exists.
3. The `(Object 1 of 1)` status field was used as the blur target. The field was not typed into.
4. The Save state was read as enabled from the accessibility tree, not confirmed by a Save attempt.
5. `deny_browser_javascript`: not readable or settable by the worker.
6. Console counter (3 errors, 2 warnings): unchanged and not investigated.

## Next permitted action (coordinator decision)

- **Single runtime Save** of this one draft row, if the coordinator authorizes it. After Save, one runtime readback is needed (no Refresh before Save). The Save result must be checked for the expected four values in the rendered UI before any other step.
- Do not Refresh, close or reopen before the coordinator decides. No further entry is permitted: the four values are complete.
