# EXP-138 T10 - Third and final runtime Sign In attempt (AC-9): fx_nobody / fx-probe-only, 2026-10-26

Scope of T10: exactly ONE Sign In activation with the fake fixture pair `fx_nobody` / `fx-probe-only` (expected `unknown`). This is the last permitted attempt. **Not performed:** a fourth attempt, a portal reload, a Designer Save, a Form Script fill, a compile, a layout change, any edit to any object, any credential entry, Enter to submit.

## Preconditions (fresh gate)

- Tab list (read-only) first: tab 0 = Web Client (`favoriteContext=FX_LoginPortal`), tab 1 = Designer (`MGForm=FX_LoginPortal`). Tab 0 selected successfully (after the list); one fresh untargeted snapshot. The WUC iframe `f1e89` was a leaf with no child references, as in T8 and T9.
- Gate screenshot `t10-01`: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; runtime tab `FX_LoginPortal` selected; no Session Expired modal, no sign-in page, no browser dialog. The previous displayed result `invalid` (T9) was still shown below Sign in. Password masked.
- Console footer before input: 5 errors, 10 warnings (unchanged from T8 and T9).
- Session: not expired. No session recovery used. No portal reload in T10.

## Accessibility reference finding

- The WUC iframe remained a leaf in the fresh snapshot. No frame-scoped reference was used. Coordinate fallback was used, with a fresh screenshot verifying each target before each interaction. The T8 accessibility searches were not repeated.

## Actions (in order; every browser action sent one at a time)

1. Tab list; tab 0 selected; fresh snapshot; screenshot `t10-01` (gate: `invalid` displayed).
2. Mouse move to (470, 310); mouse wheel deltaY -60 over the frame (scroll only). Screenshot `t10-02`: Username `fx_probe`; Password masked; Username at about (470, 278), Password at about (470, 329).
3. Coordinate **click** (470, 278) on Username (focus only).
4. Key `Control+a` in Username. Screenshot `t10-03`: `fx_probe` fully highlighted; Password not selected.
5. Keys, one per call, replacing the selection with `fx_nobody`: `f`, `x`, `_`, `n`, `o`, `b`, `o`, `d`, `y` (9 characters). No Enter.
6. Screenshot `t10-04`: Username reads exactly `fx_nobody` (caret at the end); Password masked, unchanged from T9.
7. Coordinate **click** (470, 329) on Password (focus only).
8. Key `Control+a` in Password. Screenshot `t10-05`: Password masked contents highlighted; Username `fx_nobody`.
9. Keys, one per call, replacing the selection with `fx-probe-only`: `f`, `x`, `-`, `p`, `r`, `o`, `b`, `e`, `-`, `o`, `n`, `l`, `y` (13 characters). No Enter.
10. Screenshot `t10-06`: Username `fx_nobody`; Password masked, about 13 dots, caret at the end. Password value not visible, by design.
11. Mouse wheel deltaY +120 over the frame (scroll only). Screenshot `t10-07` (fresh location check): Sign in visible at about (423, 298); stale result `invalid` still displayed below it.
12. **One** coordinate **click** at (423, 298) on Sign in. This is the single submission for T10. No second click.
13. Wait 2 s (read-only). Screenshot `t10-08`: result text **`unknown`** below Sign in, replacing the stale `invalid`; Password still masked; no dialog.

## Observed result (verbatim)

- Displayed result text in the Web User Control: **`unknown`** (lower-case, no other text). Visible in `t10-08`.
- Before the click the result text was `invalid` (T9, `t10-07`). The change from `invalid` to `unknown` shows the display was updated by this attempt.
- Post-click page footer: 5 errors, 10 warnings (no increase).
- No Session Expired modal, no sign-in page, no navigation, no error alert, no browser dialog. The Web Client header still reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## Interpretation (limits)

- AC-9 is **supported at the UI level for one run**: `fx_nobody` / `fx-probe-only` displayed `unknown` in the runtime FX_LoginPortal. Together with T8 (`ok`) and T9 (`invalid`), the three expected results for the three fixture pairs were each displayed once. The distinct outcomes for an unknown Username versus a known Username with a wrong password are the behaviour the committed source is designed to produce (`unknown` when no FX_LoginUsers row is returned; `invalid` when the hash differs).
- The Username was verified as `fx_nobody` before the Password edit (`t10-04`) and the Password was masked after its replacement (`t10-06`). The Username was not re-read after the Sign in click, because it sits above the visible frame area; `t10-07` and `t10-08` show only the Password and result rows. This is a limit on the post-click evidence, not evidence that the Username changed.
- The Password field content was not read directly (masked). The approximately 13-dot run in `t10-06` supports replacement, not append (an appended value would show about 27 dots). This is a visual estimate.
- Not established by T10: which saved script instance ran; the stored EXP-137 record contents; compile status; partial rows from the failed T3 Save. These remain as recorded in the experiment record.
- Only one attempt was made; the result is not a repeatable test.

## Deviations

- None in T10. Every browser action (click, key press, type, Ctrl+A, mouse move, wheel) was sent sequentially, one call at a time, and each was followed by a screenshot or result check before the next. The T9 parallel-key deviation (`f`, `x` in one batch) is not repeated and remains recorded in `T9-second-signin-summary.md` and the experiment record.

## Designer and data state

- Designer tab (tab 1): not selected, not read, not touched in T10. Last state (T6): FX_LoginPortal active, Save and Undo disabled, no dialog.
- FX_LoginUsers, FX_Login assets, FX_vLoginResult definition, the FX_LoginPortal Form Script: not edited in T10.

## Remaining test budget and runtime state

- Sign In attempts used: **3 of 3** (AC-7 in T8 = `ok`; AC-8 in T9 = `invalid`; AC-9 in T10 = `unknown`). **Remaining: 0.** No fourth attempt is authorized, and none was made.
- The runtime FX_LoginPortal tab is still open. Username holds `fx_nobody` and Password holds the masked 13-character `fx-probe-only` value. The result text `unknown` is displayed. No dialog is open.

## Mutation and action ledger (T10)

- Sign In activations: **1** (`fx_nobody` / `fx-probe-only`). Retries 0. Attempts total across the task series: 3 of 3.
- Fixture values typed: 2 fields (Username 9 keys after Ctrl+A; Password 13 keys after Ctrl+A). Credentials typed or read: 0. Enter presses: 0.
- Coordinate clicks: 3 (Username focus at (470, 278); Password focus at (470, 329); Sign in at (423, 298)). Coordinate fallback used because no frame-scoped accessibility reference was exposed.
- Keyboard selection: 2 (Ctrl+A in Username; Ctrl+A in Password).
- Mouse moves: 1 (to (470, 310)); mouse wheel scrolls: 2 (deltaY -60, +120), both over the frame; no click.
- Browser JavaScript authored by the worker: 0. Session recovery: 0. Portal reload: 0. Designer Save: 0. Form Script fill: 0. OK 0. Cancel 0. Designer edits 0. Form close 0. Form reopen 0. Runtime Save 0. Compile 0.
- Layout, Captions, events, components, variables: 0 changed. FX_LoginUsers, FX_Login assets, FX_vLoginResult definition: 0 changed.
- Stale-ref errors: 0 (no ref was used). Tab selections: 1 (tab 0), before the gate screenshot.
- Screenshots: 8 (`t10-01` to `t10-08`).

## Evidence files (T10)

- `evidence/EXP-138/T10-third-signin-summary.md` (this file)
- `evidence/EXP-138/t10-01-pre-signin3-runtime-gate-invalid-displayed.png`: header, runtime FX_LoginPortal, Sign in visible, previous `invalid` displayed, no dialog. Proves the gate state. Does not prove field contents.
- `evidence/EXP-138/t10-02-frame-scrolled-up-username-password-positions.png`: Username `fx_probe`, Password masked; the Username and Password click positions. Proves the pre-edit state and the target positions. Does not prove Password text.
- `evidence/EXP-138/t10-03-username-focused-ctrl-a-selected-before-replace.png`: `fx_probe` highlighted in Username. Proves the selection before replacement. Does not prove the typed text.
- `evidence/EXP-138/t10-04-username-fx_nobody-verified-before-password-edit.png`: Username reads `fx_nobody`, caret at end; Password masked. Proves the Username replacement (AC-9 input). Does not prove Username after the Sign in click, which is not in view.
- `evidence/EXP-138/t10-05-password-focused-ctrl-a-selected-before-replace.png`: Password masked contents highlighted; Username `fx_nobody`. Proves the Password selection before replacement. Does not prove the typed text.
- `evidence/EXP-138/t10-06-username-fx_nobody-password-replaced-masked-before-signin-click.png`: Username `fx_nobody`; Password masked, about 13 dots, caret at end. Proves both inputs before the click (visual estimate for the dot count). Does not prove the exact password value.
- `evidence/EXP-138/t10-07-pre-click-signin-visible-fresh-location-check.png`: Sign in visible at about (423, 298); stale `invalid` displayed. Proves the click location. Does not prove the click landed.
- `evidence/EXP-138/t10-08-after-single-signin-fx_nobody-fx-probe-only-result-text.png`: result text `unknown` below Sign in; Password masked; no dialog; header. Proves the displayed AC-9 result for one run. Does not prove the saved script version, the stored database contents, or the Username after the click.
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots `page-2026-10-26T16-24-37-990Z.yml`, `page-2026-10-26T16-25-12-949Z.yml`, `page-2026-10-26T16-26-04-931Z.yml`, `page-2026-10-26T16-26-09-957Z.yml`, and console log `console-2026-10-26T16-24-15-005Z.log` (plus other tool-written files in that window).

## Acceptance checks supported by T10

- **AC-9: supported (UI level, one run).** `fx_nobody` / `fx-probe-only` displayed `unknown` in the runtime FX_LoginPortal (`t10-08`), after the stale `invalid` from T9 was on screen beforehand (`t10-07`).
- AC-7: observed in T8 (one run, `ok`). AC-8: observed in T9 (one run, `invalid`).
- AC-6: carried from T7 (qualified).
- AC-10: holds so far. Fixture values typed only into the Username and Password inputs; the only result text shown outside them was `ok` (T8), `invalid` (T9) and `unknown` (T10). No object edited.
- AC-11: not evaluated in full. Final audit and AC-10/AC-11 comprehensive review are left for a separate task and operator review.

## Knowledge state (T10)

- Runtime Sign In of `fx_nobody` / `fx-probe-only` returns `unknown` in the Web Client: **observed** (one run).
- The three fixture pairs returned `ok`, `invalid` and `unknown` respectively, each in one run: **observed** (one run each; not a repeatable test).
- Coordinate fallback for the WUC controls because no frame-scoped accessibility reference was exposed: **observed** (three tasks; cause **unresolved**).
- Replacement without append for both fields: **observed** (visual estimate of dot counts; exact values not read).
- Link to the EXP-137 record (username and hash stored): **inferred** from `ok` (T8); not read directly.
- Runtime uses the saved T5 script rather than a stale copy: **unresolved**.
- Compile status of the saved script: **unresolved**. Partial rows from the failed T3 Save: **unresolved**.
- `deny_browser_javascript`: **unverified** (no tool to set or read it; no JavaScript authored).
- Replay and acceptance: not claimed; operator review required.
