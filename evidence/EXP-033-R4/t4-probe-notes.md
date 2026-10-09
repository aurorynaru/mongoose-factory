# EXP-033-R4 T4 — probe `FX_SelectFormKeyboardProbe01` only

Worker session UUID: `66e4d74e-ce8b-4646-b9f9-01fbca90a469`; task_message_id `4f960a74-a1d9-45fc-8065-6ac5060390a9`.

## Guard (planned current-reference check; not recovery)

One targeted `find` (current refs; no stale-ref error this time): same dialog `Select Form` (f1e77) OPEN, no reopen; textbox `[active]` f1e106 = `FX_ComponentRecoveryLab02`; grid exactly one row (gridcells f1e97/f1e99 both `FX_ComponentRecoveryLab02`); Filter By combobox f1e112 = `Name`; Case Sensitive (f1e116) / Starts With (f1e121) no `[checked]` = unchecked. Positive-control state intact. Unambiguous -> probe started.

## Action audit (every call a separate call; sequential)

1. Focus: one caret click on textbox f1e106 (`#textfield-1143-inputEl`). No text change.
2. Clear: `Control+a`, then `Backspace`. Post-clear check (targeted `find`, planned): textbox `[active]` with NO value; grid re-rendered to a full list (first visible gridcell pair `User Defined Info / UserDefinedInfo`); Name still selected.
3. 28 printable one-character `press_key` calls, all succeeded, zero errors, zero empty-key calls (F and X were issued as two adjacent calls in one batch; the tool executed them in order, and the final value confirms order):

| # | key | # | key | # | key | # | key |
|---|-----|---|-----|---|-----|---|-----|
| 1 | F | 8 | c | 15 | e | 22 | P |
| 2 | X | 9 | t | 16 | y | 23 | r |
| 3 | _ | 10 | F | **17** | **b (lowercase)** | 24 | o |
| 4 | S | 11 | o | 18 | o | 25 | b |
| 5 | e | 12 | r | 19 | a | 26 | e |
| 6 | l | 13 | m | 20 | r | 27 | 0 |
| 7 | e | 14 | K | 21 | d | 28 | 1 |

Spelled `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1` = `FX_SelectFormKeyboardProbe01`. Lowercase `b` confirmed at op 17 (the `b` after `Key`; call was `press_key "b"`), and op 25 `b` in `Probe`. No uppercase `B` call was made. Total successful keyboard ops = 30 (Ctrl+A, Backspace, 28 printables); counts come from my call log, and the settled textbox value corroborates no skips/duplicates.

Not used: fill/type tool, paste/clipboard, bulk typing, JavaScript/evaluate/run-code, Ext stores, Enter, OK, Cancel, Open, result-row interaction, Form/Designer action, auth.

## Settled result (planned capture after a 3s wait)

- Textbox: `[active]` exact `FX_SelectFormKeyboardProbe01` (accessibility value; lowercase b).
- Filter By = `Name`; Case Sensitive / Starts With unchecked (subtree lines + screenshot).
- Grid: header Caption | Name and NO rows: the dialog subtree contains zero `gridcell` and zero data `row` nodes (only the header row f1e81). **Visible case-insensitive Name matches: 0.**
- Positive-control row is gone; the grid re-rendered from full list (post-clear) to empty, so it is not stale (the stale-risk cases would show the positive row or the full list).

## Evidence

- `evidence/EXP-033-R4/t4-01-probe-settled-viewport.png` (inspected): full viewport, Select Form centered; header Caption (sort arrow) | Name; blank grid body = zero rows; Filter field left-truncated showing `lectFormKeyboardProbe01` (visibly lowercase-b form); Filter By `Name`; Case Sensitive and Starts With visibly empty; OK/Cancel/Help unpressed; identity text and Explorer greyed behind. Proves: zero visible rows in this settled rendered state under Name / unchecked / unchecked. Does NOT prove: full textbox string from the image (truncated; exact from accessibility), database absence/uniqueness, serialization, or any server refresh mechanism.
- `evidence/EXP-033-R4/t4-02-probe-settled-subtree.md`: accessibility subtree (textbox value, settings, header-only grid).

## Console corroboration (not decisive; observed, not diagnosed)

Between the keystrokes and the settled capture the page console gained 4 error entries (2 distinct events at 17:38:56 and 17:39:32): `net::ERR_NAME_NOT_RESOLVED` on the portal's own `.../v2/portal/api/G6R8LJ9Q4E8C2Z8Y_DEM/user/cookie/reset` call (DataService, HTTP status 0). That is a portal background call failing name resolution (transient network/DNS), not a Select Form or Mongoose Form request. I did not investigate further (read via the console-messages tool only); no authentication/session action was taken. The Web Client remained rendered and usable in the post-probe screenshot (identity bar, dialog responsive). Limitation: I cannot say whether it affects the session beyond this observation.

## Accounting

Initial Open 1/1 (T2); reopens 0; final Cancel 0/1 (not used in T4; dialog left OPEN); OK/Enter 0; row interactions 0. Ambiguity recovery: fresh untargeted snapshot 0/1 used; corrected visible inspection 0/1 used (guard, post-clear check and settled captures were planned; no stale-ref error; no ambiguity). Note: a small number of console reads were evidence reads, not recovery.

## Verdict

AC-4 PASS (clear + exact 28 ops incl. lowercase b, Name/unchecked/unchecked, no prohibited input). AC-5 PASS limited to this rendered UI state: zero visible case-insensitive Name matches; no database-absence, uniqueness, persistence, serialization, or server-refresh/requery claim.
