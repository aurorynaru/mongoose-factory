# EXP-138 T9 - Second runtime Sign In attempt (AC-8): fx_probe / fx-wrong-value, 2026-10-26

Scope of T9: exactly ONE Sign In activation with the fake fixture pair `fx_probe` / `fx-wrong-value` (expected `invalid`). **Not performed:** the third attempt (AC-9, `fx_nobody` / `fx-probe-only`), a portal reload, a Designer Save, a Form Script fill, a compile, a layout change, any edit to any object, any credential entry, Enter to submit.

## Preconditions (fresh gate)

- Tab list (read-only) first: tab 0 = Web Client (`favoriteContext=FX_LoginPortal`), tab 1 = Designer (`MGForm=FX_LoginPortal`). Tab 0 selected successfully; one fresh untargeted snapshot (the WUC iframe `f1e89` was a leaf with no child references, as in T8).
- Gate screenshot `t9-01`: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; runtime tab `FX_LoginPortal` selected; no Session Expired modal, no sign-in page, no browser dialog. The previous result `ok` (T8) was still displayed below Sign in. Password masked.
- Console footer before input: 5 errors, 10 warnings (unchanged from T8).
- Session: not expired. No session recovery used. No portal reload in T9.

## Accessibility reference finding

- The WUC iframe remained a leaf in the fresh snapshot. No frame-scoped reference was used, and the T8 accessibility searches were not repeated (per the T9 instruction). Coordinate fallback was used, with a fresh screenshot verifying each target before each click.

## Actions (in order)

1. Tab list; tab 0 selected; fresh snapshot. Screenshot `t9-01` (gate).
2. Mouse move to (470, 310); mouse wheel deltaY -60 over the frame (scroll only). Screenshot `t9-02`: Username `fx_probe`; Password masked (13 dots, the `fx-probe-only` value from T8); Sign in clipped below the visible area.
3. Coordinate **click** (470, 329) on the Password input (focus only; position read from `t9-02`).
4. Key `Control+a` (select the Password contents). Screenshot `t9-03`: Password field focused with its masked contents highlighted; Username still `fx_probe`.
5. Keys, one per call except as noted, replacing the selection with `fx-wrong-value`: `f`, `x` (**these two key presses were issued in one batch of parallel browser calls, contrary to the brief; see Deviations**), then `-`, `w`, `r`, `o`, `n`, `g`, `-`, `v`, `a`, `l`, `u`, `e`. 14 characters in total. No Enter.
6. Screenshot `t9-04`: Username `fx_probe`; Password masked, caret at the end; approximately 14 dots, not 27 (no append). The Password value is not visible, by design.
7. Mouse wheel deltaY +120 over the frame (scroll only). Screenshot `t9-05` (fresh location check): Sign in visible at about (423, 298); the stale result `ok` still displayed below it, so the result change could be checked after the click.
8. **One** coordinate click at (423, 298) on Sign in. This is the single submission for T9. No second click.
9. Wait 2 s (read-only). Screenshot `t9-06`: result text **`invalid`** below Sign in (replacing the stale `ok`); Password still masked; no dialog.

## Observed result (verbatim)

- Displayed result text in the Web User Control: **`invalid`** (lower-case, no other text). Visible in `t9-06`.
- Before the click the result text was `ok` (from T8, `t9-05`). The change from `ok` to `invalid` shows the display was updated by this attempt, not left over from T8.
- Post-click page footer: 5 errors, 10 warnings (no increase).
- No Session Expired modal, no sign-in page, no navigation, no error alert, no browser dialog. The Web Client header still reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## Interpretation (limits)

- AC-8 is **supported at the UI level for one run**: the runtime FX_LoginPortal returned `invalid` for `fx_probe` / `fx-wrong-value`, where T8 had returned `ok` for `fx_probe` / `fx-probe-only`. The same Username with a different password gave a different result, which is the expected behaviour of a hash comparison.
- The Password field content was not read directly (it is masked). The approximately 14-dot run in `t9-04` (against about 13 in `t9-02`) supports replacement rather than append, but this is a visual estimate, not a count. An appended value would have produced about 27 dots. `invalid` alone would also result from an appended value, so it does not prove the exact typed text.
- The Ctrl+A selection step is visible in `t9-03`; the replacement is supported by `t9-04`.
- Not established by T9: which saved script instance ran; the stored EXP-137 record contents; compile status; partial rows from the failed T3 Save. These remain as recorded in the experiment record.
- Only one attempt was made; the result is not a repeatable test.

## Deviations

- **Parallel browser calls:** the first two key presses (`f`, `x`) were issued in the same batch of tool calls, which the brief forbids for browser actions. Both keys were sent to the focused Password field in order, and no other field or object was affected (`t9-03` and `t9-04` show Username unchanged). The remaining 12 key presses and all other actions were sequential. Recorded here rather than concealed.

## Designer and data state

- Designer tab (tab 1): not selected, not read, not touched in T9. Last state (T6): FX_LoginPortal active, Save and Undo disabled, no dialog.
- FX_LoginUsers, FX_Login assets, FX_vLoginResult definition, the FX_LoginPortal Form Script: not edited in T9.

## Remaining test budget and runtime state for AC-9

- Sign In attempts used: **2 of 3** (AC-7 in T8; AC-8 in T9). Remaining: **1** (AC-9: `fx_nobody` / `fx-probe-only`, expected `unknown`). Not authorized in T9.
- The runtime is still open. The input boxes now hold `fx_probe` (Username) and the 14-character `fx-wrong-value` (Password, masked). The AC-9 attempt must replace the Username with `fx_nobody` and the Password with `fx-probe-only`, each with its own focus and Ctrl+A selection, verify both fields, scroll Sign in into view, then click once. Coordinate fallback will be needed again (the frame exposed no accessibility references).

## Mutation and action ledger (T9)

- Sign In activations: **1** (`fx_probe` / `fx-wrong-value`). Retries 0.
- Fixture values typed: 1 field (Password, 14 keys, after Ctrl+A selection). Username not retyped (verified `fx_probe` in `t9-02`, `t9-03`, `t9-04`). Credentials typed or read: 0. Enter presses: 0.
- Coordinate clicks: 2 (Password focus at (470, 329); Sign in at (423, 298)).
- Keyboard selection: 1 (Ctrl+A in the Password field).
- Mouse moves: 1 (to (470, 310)); mouse wheel scrolls: 2 (deltaY -60, +120), both over the frame; no click.
- Browser JavaScript authored by the worker: 0. Session recovery: 0. Portal reload: 0. Designer Save: 0. Form Script fill: 0. OK 0. Cancel 0. Designer edits 0. Form close 0. Form reopen 0. Runtime Save 0. Compile 0.
- Layout, Captions, events, components, variables: 0 changed. FX_LoginUsers, FX_Login assets, FX_vLoginResult definition: 0 changed.
- Stale-ref errors: 0 (no ref was used). Tab selections: 1 (tab 0), before the gate screenshot.
- Screenshots: 6 (`t9-01` to `t9-06`).

## Evidence files (T9)

- `evidence/EXP-138/T9-second-signin-summary.md` (this file)
- `evidence/EXP-138/t9-01-pre-signin2-runtime-fx-loginportal-fresh-gate.png`: header and runtime FX_LoginPortal; Sign in visible below the clipped Username/Password area; the stale `ok` result visible; no dialog. Proves the gate state. Does not prove field contents.
- `evidence/EXP-138/t9-02-username-check-frame-scrolled-up-before-password-edit.png`: Username `fx_probe`; Password masked (about 13 dots); Password input at about (470, 329). Proves the Username check and the click target. Does not prove the Password text.
- `evidence/EXP-138/t9-03-password-focused-ctrl-a-selected-before-replace.png`: Password field focused with its contents highlighted; Username `fx_probe`. Proves the focus and selection before replacement. Does not prove the typed text.
- `evidence/EXP-138/t9-04-password-replaced-fx-wrong-value-masked-before-signin-click.png`: Username `fx_probe`; Password masked, about 14 dots, caret at the end. Supports replacement rather than append (visual estimate). Does not prove the exact password value.
- `evidence/EXP-138/t9-05-pre-click-signin-visible-fresh-location-check.png`: Sign in visible at about (423, 298); stale `ok` displayed. Proves the click location. Does not prove the click landed.
- `evidence/EXP-138/t9-06-after-single-signin-fx_probe-fx-wrong-value-result-text.png`: result text `invalid` below Sign in; Password masked; no dialog; header. Proves the displayed AC-8 result for one run. Does not prove the saved script version or the database contents.
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots `page-2026-10-26T16-20-04-274Z.yml`, `page-2026-10-26T16-20-56-626Z.yml`, `page-2026-10-26T16-21-00-967Z.yml`, and console log `console-2026-10-26T16-19-34-854Z.log` (plus other tool-written files in that window).

## Acceptance checks supported by T9

- **AC-8: supported (UI level, one run).** `fx_probe` / `fx-wrong-value` displayed `invalid` in the runtime FX_LoginPortal (`t9-06`), after the stale `ok` from T8 was on screen beforehand (`t9-05`).
- AC-7: carried from T8 (observed, one run).
- AC-6: carried from T7 (qualified).
- AC-9: not evaluated (one attempt remains).
- AC-10: holds so far. Fixture values typed only into the Username and Password inputs; the only result text shown outside them was `ok` (T8) and `invalid` (T9). No object edited.
- AC-11: not evaluated in full (final audit at the end of EXP-138).

## Knowledge state (T9)

- Runtime Sign In of `fx_probe` / `fx-wrong-value` returns `invalid` in the Web Client: **observed** (one run).
- Coordinate fallback for the WUC controls because no frame-scoped accessibility reference was exposed: **observed** (two tasks; cause **unresolved**).
- Password field replaced by Ctrl+A and typed keys with no append: **observed** (visual estimate of dot count; exact value not read).
- Link to the EXP-137 record (username and hash stored): **inferred** from `ok` (T8) and `invalid` (T9); not read directly.
- Runtime uses the saved T5 script rather than a stale copy: **unresolved**.
- Compile status of the saved script: **unresolved**. Partial rows from the failed T3 Save: **unresolved**.
- `deny_browser_javascript`: **unverified** (no tool to set or read it; no JavaScript authored).
- Replay and acceptance: not claimed; operator review required.
