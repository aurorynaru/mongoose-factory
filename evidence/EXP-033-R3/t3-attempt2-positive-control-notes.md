# EXP-033-R3 — T3 attempt 2 notes: positive control (2026-10-09)

Attempt 1 notes (`t3-positive-control-notes.md`) and its evidence are unchanged. Attempt 1 stopped with zero keystrokes.

Operator diagnosis (recorded as the OPERATOR's, not a worker observation): the owned Chrome window was covered by other windows, and this Chrome instance pauses rendering when occluded, so Playwright's stability check could not complete. The operator brought the window to the front before attempt 2.

Result: **positive-control row VISIBLY ESTABLISHED.** The clear and exactly 25 native one-printable-character key operations were sent in order. The dialog stays OPEN. The probe was NOT started.

## 1. Worker identity

- Worker session UUID: `60cc08ec-01c4-41cc-9294-26f32bee888e`. Task message `8e704f18-bc7a-4e35-b47c-ce47b72435d9`. Same worker session as attempts 1–2 and T2 (operator-confirmed).

## 2. Planned current-reference check (before any focus or key)

- `browser_find "Select Form"`: one match, dialog `f1e77`, still OPEN.
- `browser_find "textbox [active]"`: **no matches** → textbox NOT active.
- `browser_find "Filter By:"` (read-only current refs): textbox `f1e400`, Filter By combobox `f1e406` = `Name`, Filter By label `f1e401`.
- `browser_find "Case Sensitive"` / `"Starts With"`: both checkboxes present (`f1e410`, `f1e415`) with no checked state. Consistent with unchecked. Visually confirmed in the settled screenshot below.

## 3. Planned focus click (once)

- `browser_click` textbox `f1e400` (current ref from §2). **Succeeded** (no timeout).
- `browser_find "textbox [active]"`: one match, `textbox [active] [ref=f1e400]` inside `dialog "Select Form"` `f1e77`. **Focus confirmed.**
- No corrected click or recovery was needed. The corrected-inspection allowance was NOT touched.

## 4. Clear (native path, 2 key operations)

1. `browser_press_key` `Control+a` (native Ctrl+A) — 1.
2. `browser_press_key` `Backspace` (native Backspace) — 1.

## 5. Positive-control key-operation audit (exactly 25 printable, one per call, in order)

| # | Key sent | # | Key sent |
|---|---|---|---|
| 1 | `F` | 14 | `e` |
| 2 | `X` | 15 | `c` |
| 3 | `_` | 16 | `o` |
| 4 | `C` | 17 | `v` |
| 5 | `o` | 18 | `e` |
| 6 | `m` | 19 | `r` |
| 7 | `p` | 20 | `y` |
| 8 | `o` | 21 | `L` |
| 9 | `n` | 22 | `a` |
| 10 | `e` | 23 | `b` |
| 11 | `n` | 24 | `0` |
| 12 | `t` | 25 | `2` |
| 13 | `R` | | |

- Sequence sent = `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (25 keys). Matches the required order exactly.
- Each key was one `browser_press_key` call. Each returned success ("Ran Playwright code: await page.keyboard.press(...)"). No key was retried, duplicated, or skipped.
- The textbox accessibility value after settling is exactly `FX_ComponentRecoveryLab02` (see §6), which corroborates the count and order.

## 6. Settled result (after 3 s wait)

- `browser_wait_for` 3 s, then `browser_find "FX_ComponentRecoveryLab02"`: **3 matches**, in the dialog:
  - grid row `f1e427`: `gridcell "FX_ComponentRecoveryLab02"` (Caption, `f1e428`) and `gridcell "FX_ComponentRecoveryLab02"` (Name, `f1e430`) — **one row**, under grid `f1e92` / table `f1e425`.
  - textbox `f1e400`: value `FX_ComponentRecoveryLab02` (exact, from accessibility line).
  - combobox `f1e406`: `Name`.
- The grid body is now a single row (previously the full unfiltered list). This is the rendered filtered result.

## 7. Decisive screenshot — `t3-01-positive-control-settled-dialog.png` (INSPECTED)

- **Shows:** Select Form open; grid header Caption | Name; exactly ONE row, `FX_ComponentRecoveryLab02` in both cells (row highlighted/selected, not activated); Filter field showing the typed value (left-truncated at the field edge, visibly ending in `…omponentRecoveryLab02`); Filter By dropdown `Name`; Case Sensitive and Starts With checkboxes visibly empty; OK / Cancel / Help unpressed. The Web Client identity bar (`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) and the collapsed Explorer tree are visible behind the dialog.
- **Does NOT show:** the full textbox string (truncated; exact value is from the accessibility line in §6), that the row was produced by this specific keystroke sequence rather than some earlier state (the sequence-and-clear audit in §4–§5 supports that), or any server/requery mechanism.

## 8. Actions NOT performed

- No fill, paste, bulk typing, clipboard, JavaScript/evaluate/run-code, internal store, Enter, OK, row click, Cancel, reopen, Open, probe typing (0 of 28), Save, Regenerate, unload, preference change, authentication, navigation, reload, or Mongoose artifact mutation.
- No row was clicked. The only click was the textbox focus click (§3).

## 9. Recovery accounting (shared, EXP-033-R3)

- Fresh-snapshot: **1/1 used, 0 remaining** (unchanged from attempt 1; not used in attempt 2).
- Corrected-inspection: **0/1 used, 1 remaining** (unchanged; not used in attempt 2).
- The planned current-reference and focus steps in attempt 2 are planned T3 steps, not recovery.

## 10. Inherited Designer/Form state

- Unchanged. No Form, component, or Designer tab was opened, closed, saved, created, or modified. One browser tab. The dialog is the only in-page change, and it is the T2 dialog left open.

## Evidence files (attempt 2)

- `evidence/EXP-033-R3/t3-attempt2-positive-control-notes.md` (this file)
- `evidence/EXP-033-R3/t3-01-positive-control-settled-dialog.png` (inspected)
- Playwright-generated page/console logs under `evidence/playwright/` (tool output; disclosed; not deliberately written).
