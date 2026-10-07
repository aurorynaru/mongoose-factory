# EXP-033-R2 — T3 notes (positive control: clear + 25 native one-char key ops → settled exact row)

Run R-20261007-220054-xlTM, cycle 3. Permitted: guard current-ref check on the OPEN dialog; Ctrl+A/Backspace clear; exactly 25 one-printable-char native key ops for `FX_ComponentRecoveryLab02`; settled-result capture + inspection. Prohibited/honored: no probe typing this task, no Cancel/reopen, no OK/Enter, no row interaction, no fill/paste/bulk/JS/stores, no lifecycle change.

## §A Guard (planned current-reference check; read-only)

Fresh targeted snapshot of dialog subtree (dialog ref f3e79): dialog still OPEN (same rendered dialog as T2 — same ref family, textbox active exact `FX_SelectFormKeyboardProbe01`, Filter By combobox `Name`, Case Sensitive unchecked, Starts With unchecked, grid body NO row children = zero rows; OK/Cancel/Help unpressed). Guard PASS: lifecycle untouched since T2; settings already at required values.

## §B Action audit — clear + 25 printable ops (in order, one call each)

1. Caret focus click on current textbox ref f3e402 (locator `#textfield-1143-inputEl`; no text change).
2. `press_key Control+A` → tool ran `keyboard.press('Control+A')`.
3. `press_key Backspace` → tool ran `keyboard.press('Backspace')`.
Post-clear verify (planned current-ref snapshot): textbox [active] EMPTY; grid body re-rendered to a FULL many-row list (42 table blocks visible at depth limit; head-of-list pattern matches EXP-033 T6's clear-step full-list observation) → clear natively emptied the field AND re-rendered the populated list.

| Op | Key call | Char |
|----|----------|------|
| 1 | press("F") | F |
| 2 | press("X") | X |
| 3 | press("_") | _ |
| 4 | press("C") | C |
| 5 | press("o") | o |
| 6 | press("m") | m |
| 7 | press("p") | p |
| 8 | press("o") | o |
| 9 | press("n") | n |
| 10 | press("e") | e |
| 11 | press("n") | n |
| 12 | press("t") | t |
| 13 | press("R") | R |
| 14 | press("e") | e |
| 15 | press("c") | c |
| 16 | press("o") | o |
| 17 | press("v") | v |
| 18 | press("e") | e |
| 19 | press("r") | r |
| 20 | press("y") | y |
| 21 | press("L") | L |
| 22 | press("a") | a |
| 23 | press("b") | b (lowercase) |
| 24 | press("0") | 0 |
| 25 | press("2") | 2 |

Total: Ctrl+A ×1, Backspace ×1, printable one-char native key ops = **25** in exact order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`; zero errored/non-keystroke calls; zero fill/bulk/paste/JS/run-code/store calls; no Enter.

## §C Settled result (after 3s settle; planned capture)

Fresh subtree snapshot: textbox [active] exact `FX_ComponentRecoveryLab02`; grid body = exactly ONE row group / row "FX_ComponentRecoveryLab02 FX_ComponentRecoveryLab02" with both gridcells exactly that string (Name cell exact); Filter By=Name; Case Sensitive unchecked; Starts With unchecked; OK/Cancel/Help unpressed. Inspected screenshots:
- `t3-01-positive-control-settled-dialog.png`: dialog crop — title "Select Form"; Caption↓|Name header; EXACTLY ONE visible row, both cells legibly `FX_ComponentRecoveryLab02`; Filter field selected showing left-truncated `...ComponentRecoveryLab02` (exact full string from snapshot line); Name dropdown; visibly empty checkboxes; OK/Cancel/Help unpressed. Proves: settled single exact row rendered in the live dialog under the required settings. Does NOT prove which keystroke triggered refresh granularity.
- `t3-02-positive-control-settled-viewport.png`: full Web Client viewport — identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree, Lab03 panel heading behind the centered dialog with the same single exact row. Proves scope/identity preservation; nothing about inventory.

## §D Verdicts

- AC-2 (settings establishment leg + clear + 25 native ops action audit): PASS as evidenced by §B (settings already Name/unchecked/unchecked at guard — zero control changes needed; clear+25-op audit complete).
- Positive-control gate (settled exact visible Name row): **PASS (observed)** — grid settled to exactly the known-positive row after the native keyboard path, matching EXP-033 T2's reconciled result.

## §E Counts & budget this task (T3)

Initial Open: 0 (dialog already OPEN from T2; experiment-wide 1/1 consumed in T2). Ctrl+A ×1, Backspace ×1, printable native one-char ops ×25, focus caret click ×1. Cancel/reopen/OK/Enter/row-activation/Form actions/auth/prefs/unload: 0. Recovery budget: corrected-visible-inspection component already 1/1 consumed (T1) — NOT used here; fresh-untargeted-snapshot component NOT consumed (0/1) — planned captures all settled unambiguously, no stale-ref error occurred.

## §F End state

Select Form OPEN, textbox active exact `FX_ComponentRecoveryLab02`, one exact visible row, settings Name/unchecked/unchecked; probe NOT started (per instruction). Left for T4. Repository writes: this file + EXP-033-R2 record only.
