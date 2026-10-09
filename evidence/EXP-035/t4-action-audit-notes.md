# EXP-035 — T4 notes: 25 individual native printable-key operations for FX_ComponentRecoveryLab02; settled pre-Cancel capture (NO Cancel, NO reopen)

Run R-20261009-204056-HY76, cycle 4, task T4. worker_session_id d2542b8f-3084-40fb-9b36-4ac05475c28b; task_message_id 5604e391-7335-4671-9462-89412e0c5d51.

## §A Start guard — fresh untargeted snapshot (planned, before any key)

- One browser tab (Mongoose, Web Client). Web Client usable: identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree, toolbar. No sign-in or configuration screen. No unexpected dialog.
- `dialog "Select Form" [ref=f1e77]` OPEN (same dialog as T2/T3; not reopened).
- Current refs: `textbox [active] [ref=f1e400]` with no value (EMPTY, focused); `combobox [ref=f1e406]: Name`; `checkbox "Case Sensitive" [ref=f1e410]` unchecked; `checkbox "Starts With" [ref=f1e415]` unchecked; OK `f1e419` / Cancel `f1e421` / Help `f1e423` unpressed.
- Guard result: PASS. Focus was already on the textbox, so no focus action was needed or taken. No clear key was repeated.

## §B Native printable-key operations (one `browser_press_key` per character, result awaited before the next)

| Ordinal | Tool | Argument | Tool-logged call | Outcome |
|---|---|---|---|---|
| 1 | browser_press_key | `F` | page.keyboard.press('F') | success |
| 2 | browser_press_key | `X` | page.keyboard.press('X') | success |
| 3 | browser_press_key | `_` | page.keyboard.press('_') | success |
| 4 | browser_press_key | `C` | page.keyboard.press('C') | success |
| 5 | browser_press_key | `o` | page.keyboard.press('o') | success |
| 6 | browser_press_key | `m` | page.keyboard.press('m') | success |
| 7 | browser_press_key | `p` | page.keyboard.press('p') | success |
| 8 | browser_press_key | `o` | page.keyboard.press('o') | success |
| 9 | browser_press_key | `n` | page.keyboard.press('n') | success |
| 10 | browser_press_key | `e` | page.keyboard.press('e') | success |
| 11 | browser_press_key | `n` | page.keyboard.press('n') | success |
| 12 | browser_press_key | `t` | page.keyboard.press('t') | success |
| 13 | browser_press_key | `R` | page.keyboard.press('R') | success |
| 14 | browser_press_key | `e` | page.keyboard.press('e') | success |
| 15 | browser_press_key | `c` | page.keyboard.press('c') | success |
| 16 | browser_press_key | `o` | page.keyboard.press('o') | success |
| 17 | browser_press_key | `v` | page.keyboard.press('v') | success |
| 18 | browser_press_key | `e` | page.keyboard.press('e') | success |
| 19 | browser_press_key | `r` | page.keyboard.press('r') | success |
| 20 | browser_press_key | `y` | page.keyboard.press('y') | success |
| 21 | browser_press_key | `L` | page.keyboard.press('L') | success |
| 22 | browser_press_key | `a` | page.keyboard.press('a') | success |
| 23 | browser_press_key | `b` | page.keyboard.press('b') | success |
| 24 | browser_press_key | `0` | page.keyboard.press('0') | success |
| 25 | browser_press_key | `2` | page.keyboard.press('2') | success |

- Sequence check: concatenated arguments = `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` = `FX_ComponentRecoveryLab02` (25 characters; `F X _` + `Component` (9) + `Recovery` (8) + `Lab` (3) + `02` (2) = 3+9+8+3+2 = 25).
- Calls: 25 issued, 25 success, 0 errors, 0 retries, 0 duplicates. No empty key argument, no multi-character argument, no chord, no `browser_type`, no fill, no clipboard, no JavaScript, no Enter.
- Total calls in T4 outside the 25: 0 mutating browser calls other than the 25 key calls. Read-only calls in §C/§D only.

## §C Settle and capture (after the 25 calls)

- `browser_wait_for` 3 seconds (wait only).
- Untargeted snapshot saved: `evidence/EXP-035/t4-02-settled-pre-cancel-snapshot.md`. Read via grep and a targeted line read of the dialog subtree.

Observed in the saved snapshot (accessibility):
- `dialog "Select Form" [ref=f1e77]` still open.
- Grid body (`grid [ref=f1e92]`): exactly ONE table `[ref=f1e425]` → one rowgroup `[ref=f1e426]` → one row `[ref=f1e427]` → two gridcells `"FX_ComponentRecoveryLab02" [ref=f1e428]` and `"FX_ComponentRecoveryLab02" [ref=f1e430]`. No other table/row in the grid subtree.
- `textbox [active] [ref=f1e400]: FX_ComponentRecoveryLab02` (exact value from the accessibility line).
- `combobox [ref=f1e406]: Name`.
- `checkbox "Case Sensitive" [ref=f1e410]` and `checkbox "Starts With" [ref=f1e415]`: no checked marker (unchecked).
- OK `f1e419`, Cancel `f1e421`, Help `f1e423`: unpressed.

## §D Screenshot (pre-Cancel)

- `evidence/EXP-035/t4-03-pre-cancel-settled-viewport.png` (inspected). Shows:
  - Full Web Client viewport: identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree behind the dialog.
  - The Select Form dialog with exactly one row: `FX_ComponentRecoveryLab02` in both the Caption and Name columns.
  - The Filter textbox scrolled to show its end (`…ComponentRecoveryLab02`); the leading `FX_` is cut off by the field width. The exact full value comes from the accessibility line, not the image.
  - Filter By `Name`; Case Sensitive and Starts With empty (unchecked); OK/Cancel/Help unpressed.
- Proves: one visible row with both cells equal to `FX_ComponentRecoveryLab02`; Filter By Name; both checkboxes unchecked; scope intact.
- Does NOT prove: the exact key-by-key attribution (keys were sent individually and each returned success, but the visible result is not per-key); the internal row count beyond the rendered view; whether the row is unique in the database or how the filter is applied internally.
- The row shows the grid's default selection highlight. No row was clicked, activated, or opened.

## §E Recovery allowance and failures

- Failures in T4: none. No errored key call, no stale-ref error, no timeout, no ambiguous read.
- Ambiguity-recovery allowance: **0 used / 1 remaining** (shared across all EXP-035 tasks; not reset by the worker/session change). Planned snapshots (§A, §C) and the screenshot were evidence captures, not recovery, and are not relabelled as recovery.

## §F Counts (T4)

- Initial Open: 0 this task (1/1 from T2). Tested Cancel: 0/1. Tested reopen: 0/1. Final Cancel: 0/1.
- Filter By / checkbox / Case Sensitive / Starts With changes: 0.
- Textbox clicks: 0 this task (focus was already on the textbox). Ctrl+a / Backspace: 0 this task (T3 only).
- Printable key ops: 25 (all success).
- `browser_type`, fill, paste, bulk entry, chord text: 0. Enter/OK: 0. Row click/activation: 0. JavaScript/evaluate/run-code: 0. Auth/navigation/tab closure/dialog dismissal/session replacement: 0.

## §G State at end of T4 (checkpoint)

- Select Form OPEN, in its established positive state: textbox exact `FX_ComponentRecoveryLab02` (focused); Filter By `Name`; Case Sensitive unchecked; Starts With unchecked; exactly one rendered row with both cells `FX_ComponentRecoveryLab02`.
- Cancel and reopen have NOT been performed. The single tested Cancel/reopen boundary is ready for separate authorization. The textbox must not be retyped or modified before the tested Cancel.
