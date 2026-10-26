# EXP-138 T3 - Single ordinary Designer Save of FX_LoginPortal (FAILED) and stop

Run `R-20261026-233735-8dlh`, cycle 3, task T3. Worker session `6461cc08-ac2a-4923-b523-770b74616b79`, task_message_id `2b18efe7-c6a3-4445-bf00-da285587095e`. Date 2026-10-26.

**Outcome: the Designer Save failed with a database truncation error. T3 stopped before any close or reopen, as the brief requires. No second Save was attempted. The Form Script is still dirty (unsaved) in the open Designer.**

## Sources reviewed

- `evidence/EXP-138/T2-install-summary.md` (T2 install, post-OK readback, Compile Result, Designer state after Cancel). The T2 Designer state was dirty (Save enabled) after the Cancel, as recorded there.

## Actions (in order)

1. Tab list (read-only): tab 0 Web Client `favoriteContext=FX_LoginUsers`; tab 1 Designer `MGForm=FX_LoginPortal`.
2. Tab select 1 (succeeded). Fresh untargeted snapshot (depth 12): FX_LoginPortal active tab; Name `FX_LoginPortal`; Version `User version for user <account>`; Device Type Default; Form Type Normal; Is Master True; Script Language `Visual C#`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; **Save enabled**; Undo disabled; no dialog; console 2 errors / 0 warnings. Pre-Save identity gate passed.
3. Screenshot `t3-01` (pre-Save dirty state).
4. **Ordinary Designer Save: clicked once** (toolbar Save, ref e16). Save was not repeated.
5. Immediate response: no success toast was found (`browser_find "saved"`: no match). Post-Save snapshot `t3-02` (`evidence/EXP-138/t3-02-post-save-snapshot.yml`) contained an **error alert dialog** (`alertdialog "Infor Mongoose Application Development Framework - FX_LoginPortal"`) and a save-error notification (`Error saving form definition for form FX_LoginPortal`). Screenshot `t3-03` captured the dialog.
6. Dismissed the error alert once with its own OK (ref e638). The alert and the notification disappeared (`find` returned no match). Screenshot `t3-04`.
7. Read-only check: Edit > Form Script opened (read-only), a find on the rendered lines showed the T2 text still in the editor (usings, `FX_ProcessLogin(string username, string password)`, LoadCollection on FX_LoginUsers, `FX_Sha256Hex`, the `FX_vLoginResult` assignment). Cancel once. No fill, no OK, no edit.
8. Screenshot `t3-05`; post-Cancel snapshot `t3-06`.
9. Stopped. Close, reopen, Form Script persistence readback, portal reload and runtime Sign In were **not** performed.

## Save response (observed)

- Error text, verbatim from `t3-02` and `t3-03`:
  `Error String or binary data would be truncated in table 'CYANWILDLION_DEM_MON_App_0.dbo.ActiveXScriptLines', column 'CodeLine'. Truncated value: ' '. saving form definition for form FX_LoginPortal`
- Notification: `Error saving form definition for form FX_LoginPortal`.
- No success notification was observed. The Save was not confirmed.
- Immediately after the error (before the alert was dismissed), the snapshot showed Save **disabled** and Undo disabled. After the alert OK, Save and Undo appeared greyed (`t3-04`).
- After the read-only Script Editor Cancel, the snapshot (`t3-06`) shows **Save enabled** (`button "Save" [ref=e16]` with no `[disabled]`); Undo disabled. The Designer is therefore **dirty and unsaved**. The greyed Save seen after the error does **not** establish a clean or saved state.

## Interpretation (not established)

- The save attempt failed while writing `ActiveXScriptLines.CodeLine`, which is a per-line script store. The error indicates a line longer than the column allows. **Unverified hypothesis:** the typed indentation inflated line length. The editor auto-indents each newline, and the typed leading spaces were added on top of it, so the lines are deeper and longer than the committed file. Three committed lines are over 110 characters (committed lines 15, 18 and 23, found with a read-only Grep). The column width is not known. The truncated value `' '` (a space) fits a line that ran over at an indentation boundary, but this is not confirmed.
- The failing field is the script line store, not the Form definition. Whether any part of the script was partially written is **unknown** (the server message does not say). A transaction rollback is likely, but not observed.

## Mutation ledger (T3)

- Designer Save clicks: **1** (failed). Repeats: 0.
- Error alert OK: 1 (dismissal only; no Save, no change).
- Form Script editor opens: 1 (read-only). Cancel: 1. OK: 0. Fill: 0. Edits: 0.
- Form close: 0. Form reopen: 0. Portal reload: 0. Runtime open: 0. Sign In: 0. Runtime Save: 0.
- Global objects, variables, components, assets, Captions, events, Script Language, FX_LoginUsers rows, FX_Login assets: 0 changes.
- Browser JavaScript authored: 0. Credentials typed or read: 0. Session recovery: 0.
- Tab selects: 1 (tab 1). Tab list: 1.

## Evidence (T3)

- `evidence/EXP-138/T3-save-attempt-summary.md` (this file).
- `evidence/EXP-138/t3-01-designer-presave-dirty-fx-loginportal.png`: pre-Save state. Proves identity, User scope, Visual C#, Save enabled. Does not prove that Save would succeed.
- `evidence/EXP-138/t3-02-post-save-snapshot.yml` (accessibility snapshot, saved by the worker): proves the error alert text and notification text, and Save disabled at that moment. Does not prove persistence.
- `evidence/EXP-138/t3-03-save-response-error-dialog-truncation.png`: decisive. Shows the Infor error dialog with the truncation message, Save and Undo greyed. Proves the failed response. Does not prove the cause.
- `evidence/EXP-138/t3-04-after-error-ok-designer-state.png`: after the alert OK. Shows no dialog, Save greyed, FX_LoginPortal, User scope. Proves no dialog remained. Does **not** prove a clean or saved state (see the post-Cancel state).
- `evidence/EXP-138/t3-05-after-readonly-editor-cancel-stopped-before-reopen.png`: after the read-only editor Cancel. The toolbar icons look enabled again, consistent with `t3-06`.
- `evidence/EXP-138/t3-06-post-cancel-snapshot-save-undo-state.yml` (accessibility snapshot, saved by the worker): Save enabled after the read-only Cancel.
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots and console logs for this window, for example `page-2026-10-26T15-48-56-962Z.yml` (the post-Save snapshot via the tool) and `page-2026-10-26T15-49-22-591Z.yml`.

## Acceptance (after T3)

- AC-4 (exactly one ordinary Designer Save; response and clean post-Save state): **NOT MET.** One Save was performed; the response was an error; a clean state was not verified (Save is enabled after the read-only Cancel).
- AC-5 (close/reopen persistence): **not evaluated.** Stopped before close/reopen, per the brief.
- AC-1, AC-2, AC-3: carried from T1 and T2 (in-session observations unchanged; the in-memory script still matches the committed source).
- AC-6 to AC-11: not evaluated.

## Blockers and next decision (operator/coordinator)

1. The Form Script is **not saved**. The server rejected the save with a truncation error on a script line. The in-session script is still the committed source.
2. Options for the coordinator (none executed here): (a) a separate authorization to correct the line lengths. Any correction is a second full-content fill, which EXP-138 forbids without the coordinator's approval, and it needs the operator's decision on the approach; (b) investigate the `ActiveXScriptLines.CodeLine` column limit read-only (for example, from the committed source's longest line length) before choosing; (c) stop the experiment and record the failure.
3. The Designer is dirty. Leaving it dirty risks an unintended Save later. The next task should inspect first. Do not Save without a new decision.
4. Compile status: still not established (T2 empty Errors grid; no control compile).
