# EXP-138 T8 - First runtime Sign In attempt (AC-7): fx_probe / fx-probe-only, 2026-10-26

Scope of T8: exactly ONE Sign In activation with the fake fixture pair `fx_probe` / `fx-probe-only` (expected `ok`). **Not performed:** the second or third attempt (AC-8, AC-9), a portal reload, a Designer Save, a script fill, a compile, a layout change, any edit to any object, any credential entry, Enter to submit.

## Preconditions (fresh gate)

- Tab list (read-only) first: tab 0 = Web Client (`favoriteContext=FX_LoginPortal`), tab 1 = Designer (`MGForm=FX_LoginPortal`). Tab 0 selected successfully; fresh untargeted snapshot.
- Account header (`t8-01`, `t8-02`): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Runtime Form: tab `FX_LoginPortal` selected in the Mongoose Web Client; no Session Expired modal, no sign-in page, no error text, no browser dialog.
- Console: page footer 5 errors, 10 warnings before any input (the same count as at the end of T7; the 5 errors are the `Permissions policy violation: unload` class).
- Session: not expired. No session recovery used. No portal reload in T8.

## Accessibility reference finding (blocker-class; fallback used)

- The Web User Control iframe (`f1e89`, box 382,220,184,106) was returned as a **leaf with no children** in every snapshot in this task: two fresh untargeted snapshots, one tabpanel-targeted snapshot, one iframe-targeted snapshot (with boxes), and one after a 3 s wait. `browser_find` for `Sign in` returned no matches. In T7 the same nested frame exposed `Username`, `Password` and `Sign in` refs after a Form open; in T8 those refs were not exposed.
- Therefore no actionable frame-scoped accessibility reference was available for the Username box, the Password box or the Sign in button. The brief's last-resort fallback applied: native coordinate interaction on controls verified from a fresh screenshot, with keyboard entry of the fixture text (no Enter). Every coordinate action is listed in the ledger below.
- Suspected cause (not verified): the nested cross-origin iframe is not exposed to the accessibility snapshot in the current page state. Recorded as an environment observation for the coordinator; not investigated further (no JavaScript, no reload).

## Actions (in order)

1. Tab list; tab 0 selected; fresh snapshot (`e`-refs; the WUC frame collapsed).
2. Screenshot `t8-01` (fresh gate): Sign in visible in the frame; Username box visible at top; Password box scrolled above the frame's visible area; no result text.
3. Read-only `find` for `Sign in` (no match), targeted snapshots of `f1e89` and `f1e86` (leaf), one wait of 3 s, one targeted snapshot of `f1e89` (leaf). No ref available.
4. Mouse move to (470, 310) and mouse wheel deltaY -60 over the frame (scroll only). Screenshot `t8-02` (fresh location check): Username input at about (470, 285); Password input at about (470, 336); Sign in scrolled below the visible area; both inputs empty.
5. Coordinate **click** (470, 285) on the Username input (focus only).
6. Keyboard, one key per call: `f`, `x`, `_`, `p`, `r`, `o`, `b`, `e` (`fx_probe`). Screenshot `t8-03`: Username shows `fx_probe` with the caret at the end; Password empty.
7. Coordinate **click** (470, 336) on the Password input (focus only; location verified in `t8-03`).
8. Keyboard, one key per call: `f`, `x`, `-`, `p`, `r`, `o`, `b`, `e`, `-`, `o`, `n`, `l`, `y` (`fx-probe-only`). Screenshot `t8-04`: Username `fx_probe`; Password shows masked dots only.
9. Mouse wheel deltaY +120 over the frame (scroll only). Screenshot `t8-05` (fresh location check): Sign in fully visible at about (423, 298); Password (masked) above it.
10. **One** coordinate click at (423, 298) on Sign in. This is the single submission. No second click.
11. Wait 2 s (read-only). Screenshot `t8-06`: the frame shows the result text **`ok`** below Sign in; Password still masked; no dialog.

## Observed result (verbatim)

- Displayed result text in the Web User Control: **`ok`** (lower-case, no other text). Visible in `t8-06`.
- Post-click page footer: 5 errors, 10 warnings (no increase).
- No Session Expired modal, no sign-in page, no navigation, no error alert, no browser dialog. The Web Client header still reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## Interpretation (limits)

- AC-7 is **supported at the UI level for one run**: the runtime FX_LoginPortal, with the saved script, returned `ok` for `fx_probe` / `fx-probe-only`. The `ok` result is the value the saved script produces only when `FX_LoginUsers` returned a row for `fx_probe` and the SHA-256 hex of the typed password equals the stored `FX_PasswordHash`. So the result also supports that the EXP-137 record holds `fx_probe` in `FX_Username` and the matching hash in `FX_PasswordHash` (end-to-end). This is an inference from the expected-result logic; the record was not read directly.
- Not established by T8: whether the runtime used the saved T5 script or a stale client copy (a stale copy would not be expected to return `ok` for an EXP-133 `received` method, so the `ok` is evidence against the EXP-133 method, but not a direct proof of the saved definition). Compilation status is not established by this result alone. Designer persistence is covered by T6 only (same-session caveat).
- `ThisForm.Variables` / Global `FX_vLoginResult` resolution: the displayed `ok` is consistent with the result being written to and read back from the Global variable, but the UI does not show that path. (EXP-130 U-1 remains open.)
- Only one attempt was made; the result is not a repeatable test.

## Designer and data state

- Designer tab (tab 1): not selected, not read, not touched in T8. Last state (T6): FX_LoginPortal active, Save and Undo disabled, no dialog.
- FX_LoginUsers, FX_Login assets, FX_vLoginResult definition, the FX_LoginPortal Form Script: not edited in T8.

## Remaining test budget and runtime state for AC-8

- Sign In attempts used: **1 of 3** (AC-7). Remaining: 2 (AC-8 `fx_probe` / `fx-wrong-value`, expected `invalid`; AC-9 `fx_nobody` / `fx-probe-only`, expected `unknown`). Neither is authorized in T8.
- The runtime is still open with the fixture values in the input boxes (Username `fx_probe`, Password masked, 13 characters typed). A later attempt must replace the Password with `fx-wrong-value` (and the Username with `fx_nobody` for AC-9) by keyboard entry after focusing the inputs. The input boxes were not cleared in T8 (no edit beyond the attempt). The next task must verify both fields' contents before typing.
- The Sign in button is clipped at the default frame size and must be scrolled into view (mouse wheel) before a click, as T8 did.
- Coordinate fallback will be needed again unless the frame's accessibility references become exposed. The next task must start with a fresh gate.

## Evidence files (T8)

- `evidence/EXP-138/T8-first-signin-summary.md` (this file)
- `evidence/EXP-138/t8-01-pre-signin-runtime-fx-loginportal-fresh-gate.png`: the runtime FX_LoginPortal with the header; Sign in visible; Username box visible; Password above the visible area; no result text. Proves the gate state. Does not prove the fields' contents.
- `evidence/EXP-138/t8-02-pre-click-fresh-screenshot-frame-scrolled-up-username-password-positions.png`: both inputs empty; positions used for the coordinate clicks; Sign in not visible. Proves the empty state before typing and the click locations. Does not prove the Sign in location.
- `evidence/EXP-138/t8-03-username-typed-fx_probe-check-before-password.png`: Username `fx_probe`, Password empty. Proves the Username text. Does not show the password.
- `evidence/EXP-138/t8-04-both-fields-filled-password-masked-before-signin-click.png`: Username `fx_probe`; Password masked (dot count not read; 13 characters were typed). Proves the masking and the username; the password text is not visible (by design). Does not prove the password value.
- `evidence/EXP-138/t8-05-pre-click-signin-visible-fresh-location-check.png`: Sign in visible at about (423, 298); Password masked above. Proves the click location. Does not prove the click landed.
- `evidence/EXP-138/t8-06-after-single-signin-fx_probe-result-text.png`: result text `ok` below Sign in; Password masked; no dialog; the header. Proves the displayed result for AC-7. Does not prove the saved script version or the database contents.
- Tool-written under `evidence/playwright/` (disclosed, not worker-written): page snapshots and console logs for this window, including `page-2026-10-26T16-15-02-870Z.yml` (after the click) and `page-2026-10-26T16-15-06-856Z.yml`.

## Acceptance checks supported by T8

- **AC-7: supported (UI level, one run).** `fx_probe` / `fx-probe-only` displayed `ok` in the runtime FX_LoginPortal (`t8-06`).
- AC-6: carried from T7 (runtime open with the controls).
- AC-8, AC-9: not evaluated.
- AC-10: holds so far. The fixture values are typed only into the Username and Password inputs; no value appears outside those boxes except the displayed result `ok`. No object edited.
- AC-11: not evaluated in full (final audit at the end of EXP-138).

## Mutation and action ledger (T8)

- Sign In activations: **1** (`fx_probe` / `fx-probe-only`). Retries 0.
- Fixture values typed: 2 fields (`fx_probe` 8 keys; `fx-probe-only` 13 keys). Credentials typed or read: 0. Enter presses: 0.
- Coordinate clicks: 3 (Username focus at (470, 285); Password focus at (470, 336); Sign in at (423, 298)). Coordinate fallback used because no frame-scoped accessibility reference was exposed (see above).
- Mouse wheel scrolls: 2 (deltaY -60, then +120), both over the frame; no click.
- Mouse move: 1 (to (470, 310)).
- Browser JavaScript authored by the worker: 0. Session recovery: 0. Portal reload: 0. Designer Save: 0. Form Script fill: 0. OK 0. Cancel 0. Designer edits 0. Form close 0. Form reopen 0. Runtime Save 0. Compile 0.
- Layout, Captions, events, components, variables: 0 changed. FX_LoginUsers, FX_Login assets, FX_vLoginResult definition: 0 changed.
- Stale-ref errors: 0 (no ref was used after a navigation). Tab selections: 1 (tab 0), before every screenshot.
- Screenshots: 6 (`t8-01` to `t8-06`). The masked password field is visible in `t8-04` to `t8-06` as masked dots only.

## Knowledge state (T8)

- Runtime Sign In of `fx_probe` / `fx-probe-only` returns `ok` in the Web Client: **observed** (one run).
- Coordinate fallback for the WUC controls because no frame-scoped accessibility reference was exposed: **observed** (one task; the frame remained a leaf in five snapshots).
- End-to-end consistency with the EXP-137 record (`fx_probe` in `FX_Username`, the hash in `FX_PasswordHash`): **inferred** from the `ok` result; not read directly. Not claimed as verified.
- Runtime used the saved T5 script (not a stale copy): **unresolved** (the `ok` argues against the EXP-133 method, but a direct check was not made).
- Compile status of the saved script: **unresolved**.
- Partial rows from the failed T3 Save: **unresolved**.
- `deny_browser_javascript`: **unverified** (no tool to set or read it; no JavaScript authored).
- Replay and acceptance: not claimed; operator review required.
