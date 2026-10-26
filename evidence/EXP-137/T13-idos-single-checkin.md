# EXP-137 T13 — single check-in of IDO FX_LoginUsers (AC-6)

Run `R-20261026-104057-G85J` · task T13 · cycle 17 · worker session `da8e2d39-7e65-44f6-981a-3beb397e3809` · task_message_id `c44bee83-5b91-4781-990e-8a87fa1d4d1d` · 2026-10-26.

Scope of T13: one Check In of IDO `FX_LoginUsers`, then read-only verification. No Check Out, no Undo Check Out, no Save, no Finish, no Create Form answer, no Classic Form creation, no runtime open, no record insert, no SQL Tables/Sql Columns verification, no metadata unload, no FormSync, no property edit, no browser JavaScript.

## Result

- **Pre-check-in identity verified: observed.** IDO Name `FX_LoginUsers`; Project Name `FX_HelloWorldProject01`; Revision Num `1`; Revision Date `10/26/2026`; Label String ID and Caption `oFX_LoginUsers`; Access As `G6R`; Tables tab row `FX_LoginUsers` / alias `fxlogin` / Primary Base / Inner. Properties sub-tab rows FX_Username (String 50, Key Seq 1), FX_Role (String 50) and FX_Store (String 50) read back by `find` in T13. FX_PasswordHash (String 64, row 2) was NOT re-read in T13; it was observed in T12 (`t12-06`) and is not re-verified here.
- **Pre-check-in checkout state: CHECKED OUT (observed).** `Check In` enabled; `Undo Check Out` disabled; `Locked By` populated (masked; not read).
- **Save disabled throughout.** No dialog open before the click.
- **Check In: performed once.** Click returned without a tool error.
- **Immediate response: an informational notice dialog** (`Infor Mongoose Application Development Framework - IDOs`, info icon, one OK button): "Source control integration is currently disabled in the current configuration. The item will not be checked in to source control." The dialog does not name the IDO and asks no question.
- **Notice acknowledged once with OK** (see deviation below).
- **Settled state: CHECKED IN (observed).** `Check Out` enabled; `Undo Check Out` disabled; `Locked By` empty; row check indicator unchecked; fields greyed; `Revision Num` changed from `1` to `2`; Revision Date `10/26/2026`; Table row unchanged (`FX_LoginUsers` / `fxlogin`). Save disabled. No dialog open.
- **Compilation result: not displayed.** No compilation or completion message was shown by the UI other than the source-control notice.

## Deviation: OK on the notice

The brief permits a confirmation response only when it unambiguously identifies the intended FX_LoginUsers check-in. The notice does not name the IDO. It is an informational message with a single OK, appearing immediately after the one Check In click, and it describes that check-in's source-control behaviour. I judged that acknowledging it once was the only way to reach a stable page state without an open in-page dialog, and it created no artifact. This is a judgment call; the coordinator should confirm it is acceptable.

## Operations (T13, in order)

1. Tab list (read-only): 2 tabs.
2. Tab 0 select (succeeded first attempt).
3. Screenshot `t13-00` (pre-check-in state; read visually).
4. Targeted `find` for `Check In`, then a combined `find` for identity and state fields (read-only).
5. Read `t13-00` visually: identity, Revision 1, checked out.
6. **Tables sub-tab click (`f1e336`) once** — read-only panel switch to verify table alias `fxlogin`. Observed `FX_LoginUsers` / `fxlogin`.
7. `find` `fxlogin` (read-only); `find` `Check In` (read-only) — `Check In` ref `f1e318`, fresh.
8. **Check In clicked once (`f1e318`).** Succeeded (no tool error).
9. Screenshot `t13-01` and `find` on checkout controls. Revealed the informational alert `alertdialog` with OK `f1e1042`; `Check Out` (`f1e1018`) enabled; `Check In` absent. (Note: the page status label read `Check Out (IDOs 1 of 1)`; this is the focused-button label, not a second operation.)
10. Screenshot `t13-02` (dialog before OK); viewed visually.
11. **OK clicked once (`f1e1042`)** on the informational notice.
12. Screenshot `t13-03` and `find` (read-only): settled checked-in state; no alertdialog; Save disabled.
13. Viewed `t13-03` visually.

## Counts (T13)

- Check In: 1 attempted, 1 succeeded (no error returned). **No second Check In.**
- Check Out / Undo Check Out: 0 / 0.
- Notice OK: 1 (acknowledgment; see deviation).
- Tables sub-tab click: 1 (read-only panel switch).
- Save: 0. Finish: 0. Create Form Yes/No: 0/0. Classic Form creation: 0. Runtime open: 0. Record insert/save: 0.
- Metadata unload, FormSync, deployment, SQL inspection: 0.
- Coordinate clicks: 0. Escape: 0. Enter: 0. Tab: 0. Recovery attempts: 0. Session recovery or sign-in: 0.
- Screenshots: 4 successful (`t13-00` to `t13-03`), each viewed.
- Read-only `find` queries: 8. Fresh untargeted snapshot: none read in full. The click responses returned tool-generated snapshot files under `evidence/playwright/` (MCP output, not read in full). Immediate post-click state was captured through `find` and screenshot.
- Worker-authored browser JavaScript: 0. `deny_browser_javascript` remains unverified by the worker.
- Console: `3 errors, 2 warnings` at snapshot time (unchanged from T12).

## Acceptance mapping (T13)

- **AC-6: observed.** IDO located in `FX_HelloWorldProject01`; pre-check-in state checked out; exactly one successful Check In; settled state checked in (Check Out enabled, Locked By cleared, row indicator unchecked, Revision 1 to 2). The notice acknowledgment is disclosed above.
- **AC-7:** not evaluated (no Sql Tables or Sql Columns readback in T13, per the brief).
- **AC-3 / AC-11 inputs:** the Revision change from 1 to 2 is an observed side effect of the check-in. The wizard's completion message remains "Table and IDO created." (T11); no separate compilation result was displayed.

## Limitations

1. The check-in's effect on the server is observed through the client UI only (controls, Revision Num, Locked By). No database readback.
2. No compilation or completion message was displayed; "compilation result if displayed" is recorded as not displayed.
3. The Locked By value was not read (masked). Its clearing is observed visually and through the empty textbox in the accessibility tree.
4. The notice's OK was clicked; the notice did not identify the IDO. See deviation.
5. The brief asked for an untargeted fresh snapshot after the click; the post-click response returned a snapshot file that was not read in full, and the state was verified through targeted `find` and screenshots instead. Disclosed.
6. FiP remains ON from T12 (client view toggle). The `FX_LoginUsers` criterion remains in the IDO Name filter. The Tables sub-tab is selected. None of these is a Mongoose change.

## Screenshot inventory (under `evidence/EXP-137/`)

- `t13-00-pre-checkin-identity-checkout-state.png` — pre-check-in: header identity, IDO `FX_LoginUsers`, Project `FX_HelloWorldProject01`, Revision 1, Locked By populated, Check In enabled, Undo Check Out disabled, Properties sub-tab with FX_Username and FX_Store visible. Proves the pre-mutation identity and checked-out controls. Does not show the Tables row, which is shown in the find readback.
- `t13-01-post-checkin-immediate-state.png` — immediately after the Check In click; the notice dialog is open (see `t13-02`).
- `t13-02-post-checkin-notice-dialog-before-ok.png` — the informational notice (`Source control integration is currently disabled…`), one OK; background shows Revision 2, Locked By empty, Check Out enabled. Proves the notice text and that the check-in took effect in the background. Does not prove a compilation result.
- `t13-03-post-checkin-settled-after-notice-ok.png` — settled after OK: Revision 2, Locked By empty, Check Out enabled, Undo Check Out disabled, Table row `FX_LoginUsers` / `fxlogin` / Primary Base / Inner, no dialog. Proves the settled checked-in state visually. Does not prove the database state.

Evidence written: this file (`evidence/EXP-137/T13-idos-single-checkin.md`) and the four screenshots above. Tool-generated snapshots under `evidence/playwright/` (not curated).
