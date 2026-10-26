# EXP-137 T23 — One ordinary runtime close, one reopen, and fresh readback of the saved FX_LoginUsers row

Run `R-20261026-104057-G85J`, cycle 27, task T23. Read-only verification scope with one controlled close, one reopen and one Refresh. No Save, no Add/New, no typed values, no Designer, no check-in, no wizard, no metadata unload, no FormSync, no JavaScript, no coordinate clicks.

## Outcome

- **Close: 1.** Runtime Form closed through its own Form-tab close control (`Close Panel FX_LoginUsers`, ref `f1e110`). No save prompt appeared. The URL changed to `favoriteContext=SqlColumns`, and the runtime tab disappeared from the panel strip.
- **Reopen: 1.** Toolbar Open → Select Form (exact-name filter `FX_LoginUsers` was already populated; one row `FX_LoginUsers` / `FX_LoginUsers`) → OK. Form tab `FX_LoginUsers` reappeared.
- **Immediate reopened state (before Refresh):** starred add-mode placeholder, `(Object 1 of 1)`, four **empty** boxes, Save disabled. The saved row was **not** shown in the first load.
- **Refresh: 1** (permitted once; Save disabled, no unsaved edits). After it, the placeholder disappeared and one **unstarred** row appeared with all four values.
- **Settled readback (after one Refresh):** one committed-looking row (`gridcell "1"`, no star); top box `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40`; second `FX-Viewer`; third `FX-STORE-01`; fourth `fx_probe`. Save disabled. `(Object 1 of 1)`. No dialog, no active editor reported.
- **Result:** the four values persisted through one close and one reopen in this session, after one Refresh. The initial reopen did not display the saved row; that is a discrepancy that is recorded and not repaired.

## Pre-close guards (fresh snapshot, `t23-00`)

| Guard | Observed |
|---|---|
| Tab list (read-only) | 1; Web Client tab 0 selected on first attempt |
| Form | tab `FX_LoginUsers`; URL `favoriteContext=FX_LoginUsers` |
| Account header | `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (screenshot; snapshot masks the username) |
| Collection | `(Object 1 of 1)`; one unstarred row (`gridcell "1"`) |
| Save | disabled |
| Four values (accessibility text) | `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40`, `FX-Viewer`, `FX-STORE-01`, `fx_probe` |
| Active editor / dialog | none |
| Console | 3 errors, 2 warnings (unchanged) |

All guards passed, so the close was performed.

## Close (`t23-01`)

- Click on `Close Panel FX_LoginUsers` (`f1e110`), once. Returned without error; no prompt.
- Post-close snapshot: the Sql Columns panel became the selected panel. The runtime tab was gone. URL `favoriteContext=SqlColumns`. Save disabled. No dialog.
- The Sql Columns panel was not changed. Incidental read of its visible rows, not a T23 check: FX_Username, FX_PasswordHash, FX_Role and FX_Store listed on table `FX_LoginUsers` with data types `nvarchar` and length 50/64/50/50. This is the panel's existing content, not verification for AC-7.

## Reopen (`t23-02`, `t23-03`)

- Toolbar Open clicked once (`f1e25`).
- Select Form dialog: filter `FX_LoginUsers` (pre-populated, Filter By Name, Case Sensitive off, Starts With off). **One row**: `FX_LoginUsers` / `FX_LoginUsers` (`t23-02`). The filter text was not changed.
- OK clicked once (`f1e720`). The dialog closed.
- Immediate reopened state (`t23-03`): `FX_LoginUsers` tab; `(Object 1 of 1)`; starred placeholder; four **empty** boxes; top box focused (load focus, not typing); Save disabled. **The saved row was not visible at this point.**

## Refresh (`t23-04`)

- Toolbar Refresh clicked once (`f1e35`), permitted because the reopened collection showed a placeholder and no unsaved edit existed (Save disabled).
- Settled state: one unstarred row (`gridcell "1"`); four values as listed above; `(Object 1 of 1)`; Save disabled; no dialog.
- The Refresh tooltip was visible at capture, from pointer hover; not a message.

## Count reconciliation (committed rows vs placeholders)

- Before close: one committed-looking row (unstarred, `t23-00`).
- Immediately after reopen: one starred placeholder with empty boxes (`t23-03`). Zero data rows displayed.
- After one Refresh: one unstarred data row with the four values (`t23-04`). The placeholder is not present.
- Genuine data rows after Refresh: **1**. No second committed row, no duplicate fx_probe, no extra placeholder row seen.
- The row count is a UI-level collection observation. It is not a database query.

## Discrepancies and limits

1. **Initial reopen did not display the saved row.** The first load after reopen showed the starred placeholder with empty boxes; only one Refresh showed the row. This follows the EXP-135 T12 pattern, but it is a discrepancy from a plain reopen and is recorded here without repair.
2. **Same-session persistence only.** The close and reopen occurred in the same Web Client session, against the same loaded metadata. This is not cross-session or database durability evidence.
3. **Positional mapping not verified.** Runtime captions are blank and the four boxes have no accessible names. The values appear in the boxes where they were typed and entered. That shows effective runtime positional persistence only. It does **not** verify the Designer control-to-property bindings, which remain unresolved from T19.
4. **Fourth box grey background.** Visible in `t23-01`/`t23-04`; not interpreted.
5. **Console counters unchanged** (3 errors, 2 warnings). The error messages are the pre-existing permissions-policy `unload` messages; not investigated.
6. **Session counters:** no session expiry, sign-in page or recovery occurred. The automatic recovery allowance was not used.

## Screenshots (each viewed)

- `evidence/EXP-137/t23-00-pre-close-saved-row-guards.png`: header with account and configuration; `FX_LoginUsers` tab; Save greyed; one unstarred row `1`; four values (hash clipped at box edge; full value from the accessibility text); `(Object 1 of 1)`; no dialog. **Proves** the pre-close guard state. **Does not prove** database persistence or bindings.
- `evidence/EXP-137/t23-01-post-close-runtime-form-closed.png`: Sql Columns panel selected; runtime tab closed; Save disabled; no dialog (the snapshot is the decisive record; the screenshot shows the closed state). **Proves** the runtime tab was closed in-session. **Does not prove** that the saved row was persisted.
- `evidence/EXP-137/t23-02-select-form-exact-name-one-row-before-ok.png`: Select Form dialog; filter `FX_LoginUsers`; Filter By Name; one row `FX_LoginUsers` / `FX_LoginUsers`; Case Sensitive and Starts With off. **Proves** the single exact-name match before OK. **Does not prove** the runtime contents.
- `evidence/EXP-137/t23-03-reopened-runtime-immediate-before-refresh.png`: reopened runtime; starred placeholder; four empty boxes; `(Object 1 of 1)`; Save disabled. **Proves** the immediate reopened state showed no saved values before Refresh. **Does not prove** that no row exists in the database.
- `evidence/EXP-137/t23-04-reopened-runtime-settled-after-one-refresh.png`: reopened runtime after one Refresh; unstarred row `1`; four values (hash clipped on screen; exact text in the accessibility readback); `(Object 1 of 1)`; Save disabled. **Proves** the settled same-session readback of the four values and one data row. **Does not prove** database durability, cross-session persistence, or Designer bindings.

## Action accounting (T23)

| Action | Count | Result |
|---|---|---|
| Tab list (read-only) | 1 | succeeded |
| Tab select (tab 0) | 1 | succeeded on first attempt |
| Snapshots | 4 (pre-close, post-close, immediate reopen, post-Refresh) | succeeded |
| Finds (read-only) | 3 (Select Form; regex on reopen; regex for dialog or error text at end) | succeeded |
| Screenshots | 5 (`t23-00` to `t23-04`), all viewed | succeeded |
| **Runtime Form close** | **1** | succeeded (`Close Panel FX_LoginUsers`) |
| **Runtime Form reopen (toolbar Open → Select Form → OK)** | **1** | succeeded |
| **Refresh** | **1** | succeeded (permitted once) |
| Save | 0 | none |
| Add/New, typed values | 0 | none |
| Designer tab actions | 0 | tab 1 not selected |
| Check-in / check-out | 0 | none |
| Wizard / Finish / Create Form | 0 | none |
| Metadata unload / FormSync / deployment | 0 | none |
| Portal reload / navigation | 0 | none |
| Coordinate clicks | 0 | none |
| Keyboard | 0 | none |
| Ref-not-found / tool errors | 0 | none |
| Session recovery | 0 | none |
| Worker-authored browser JavaScript | 0 | the tool wrappers print generated code; `deny_browser_javascript` cannot be read or set by the worker, so it remains unverified |

## Acceptance mapping (T23 scope)

- **AC-10** (one ordinary close, one supported reopen, one matching `fx_probe` row with four values equal to the saved baseline): **observed in-session** after one Refresh. The initial reopen showed the placeholder only; the discrepancy is recorded. Not treated as durability proof.
- **AC-9** (runtime Save and readback): readback after close/reopen now supports the four values. The original Save response was not captured; the T22 settled-state observation remains qualified.
- **AC-8** (runtime open and zero-row before insertion): unchanged from T20/T21 (qualified).
- **AC-11**: T23 operations reconciled above. Unresolved: the initial-reopen discrepancy; the immediate Save toast (not captured in T22).

## Knowledge state

- Ordinary runtime close followed by reopen through toolbar Open → exact-name Select Form → OK: **observed** (one run).
- Saved row absent on the first load after reopen, visible after one Refresh: **observed** (one run; discrepancy).
- Four values persisted in the same session after close/reopen and Refresh: **observed** (one session).
- Cross-session or database-level persistence: **unresolved** (not tested).
- Designer control-to-property bindings: **unresolved** (not verified; positional persistence only).

## Next step

Return to the coordinator for review before any final experiment acceptance or repository audit. No further persistence step was performed. The runtime Form is open on the saved row with Save disabled, no dialog, and no active edit.
