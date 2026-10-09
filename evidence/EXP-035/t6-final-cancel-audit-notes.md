# EXP-035 — T6 notes: read-only guard, optional final ordinary Cancel, closure verification (NO reopen)

Run R-20261009-204056-HY76, cycle 6, task T6. worker_session_id d2542b8f-3084-40fb-9b36-4ac05475c28b; task_message_id 5bfb1c83-5fd1-4e32-8a5d-b4d728a1c2a9.

## §A Read-only guard (fresh untargeted snapshot, nothing touched)

- Snapshot saved: `evidence/EXP-035/t6-01-pre-final-cancel-guard-snapshot.md`.
- `dialog "Select Form" [ref=f1e77]` OPEN in the Web Client iframe.
- Textbox `[active] [ref=f1e106]`: `FX_ComponentRecoveryLab02` (exact accessibility value).
- Filter By `combobox [ref=f1e112]`: `Name`.
- Case Sensitive `checkbox [ref=f1e116]`: no checked marker (unchecked). Starts With `checkbox [ref=f1e121]`: no checked marker (unchecked).
- Grid: one table `f1e94` → one rowgroup `f1e95` → one row `f1e96` → gridcells `FX_ComponentRecoveryLab02` (`f1e97`) and `FX_ComponentRecoveryLab02` (`f1e99`).
- OK `f1e125`, Cancel `f1e127`, Help `f1e129`: unpressed.
- No sign-in, configuration, unexpected dialog, or session change.
- Guard result: T5 post-reopen state INTACT → proceed to the final Cancel.

## §B Final ordinary Cancel (exactly ONE)

1. `browser_click` on the rendered `Cancel` button, ref `f1e127` (current ref from the §A snapshot). Playwright path: `iframe[...].contentFrame().getByRole('button', {name:'Cancel'}).click()`. Returned without error. Not retried.
- Not used: dialog X (`Close Window`), Escape, Enter, OK, result rows, toolbar Close.

## §C Closure verification

1. `browser_find "Select Form"` → **No matches found.**
2. Fresh untargeted snapshot saved: `evidence/EXP-035/t6-02-post-final-cancel-closure-snapshot.md`. Read via grep: no `dialog "Select Form"` node; identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` present (`f1e20`); Explorer region present; toolbar `Open` enabled (`f1e23`); Save disabled (`f1e26`); single tab `Mongoose` selected. No sign-in or configuration text.
3. Final viewport screenshot saved: `evidence/EXP-035/t6-03-post-final-cancel-viewport.png` (inspected; see §D).

Result: dialog closed on the first attempt; Web Client loaded and usable; no unexpected prompt or sign-in.

## §D Decisive evidence inspected

- `t6-03-post-final-cancel-viewport.png`: Web Client viewport with the identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree (My/Master/Public/User Folders), greyed toolbar, and an empty main region. No Select Form dialog anywhere.
  - PROVES: the dialog is absent after the final Cancel, and the normal Web Client is loaded and usable with scope intact.
  - DOES NOT PROVE: the state of any Designer tab (none is visible here), or the absence of a native dialog outside the viewport. It also does not establish anything about the filter values, which are no longer on screen.
- `t6-02-post-final-cancel-closure-snapshot.md` is the authoritative accessibility evidence for closure and the toolbar state.

## §E Cumulative counts (experiment-wide, through T6)

- Initial ordinary Open: **1** (T2).
- Tested ordinary Cancel: **1** (T5 §B).
- Tested ordinary reopen: **1** (T5 §C).
- Final ordinary Cancel: **1** (T6 §B). No reopen after it.
- Native printable-key operations: **25** (T4; all success, 0 errors, 0 retries, 0 duplicates).
- Native `Control+a`: **1** (T3). Native `Backspace`: **1** (T3).
- Filter By changes: 1 (T3, Caption → Name). Checkbox toggles: 0. Textbox focus clicks: 1 (T3).
- Enter / OK presses: 0. Row click or activation: 0. `browser_type` / fill / paste / bulk / chord-as-text: 0. JavaScript / evaluate / run-code: 0. Authentication, reauthentication, log out, session replacement: 0. Navigation: 0. Tab closure: 0. Preference or unload actions: 0.
- Ambiguity-recovery allowance (shared, whole experiment): **0 used / 1 remaining**. No stale-ref error, no timeout, and no ambiguous read occurred in any EXP-035 task. Planned snapshots, finds and screenshots were evidence captures and were not relabelled as recovery.

## §F Preserved T5 finding (quoted as observed; not promoted)

Across the one tested Cancel/reopen boundary (T5), the rendered textbox (`FX_ComponentRecoveryLab02`), Filter By (`Name`), both checkboxes (unchecked), and the single matching row were observed to be retained against the pre-Cancel T4 values. Nothing was reset or partly retained in the observed rendered state. This is a rendered-UI observation from one run. It is classified **observed**, not replay_verified. No internal mechanism is inferred, and no database, cache, persistence, serialization or server-refresh claim is made.

## §G End state

- Select Form CLOSED. No in-page dialog open. Web Client loaded, single tab, identity bar and DEM badge visible, toolbar Open enabled.
- No reopen was performed after the final Cancel.
- No further action is pending in the experiment; the experiment is ready for a separate read-only final acceptance/evidence audit.
