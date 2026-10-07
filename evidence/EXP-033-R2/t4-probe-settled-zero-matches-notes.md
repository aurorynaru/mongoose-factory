# EXP-033-R2 — T4 notes (probe: clear + 28 native one-char key ops → settled zero visible matches)

Run R-20261007-220054-xlTM, cycle 5 (task T4). Permitted: guard current-ref check; Ctrl+A/Backspace clear on the SAME open dialog; exactly 28 one-printable-char native key ops for `FX_SelectFormKeyboardProbe01` (lowercase `b` after `Key`); settled-result capture + match count. Prohibited/honored: no Cancel/reopen this task, no OK/Enter, no row interaction, no fill/paste/bulk/JS/stores, no Form mutation/auth/prefs/unload.

## §A Guard (planned current-reference check; read-only)

Fresh targeted snapshot of dialog subtree (dialog ref f3e79): same OPEN Select Form from T3 — textbox [active] exact `FX_ComponentRecoveryLab02`; grid = exactly ONE row both cells exact `FX_ComponentRecoveryLab02`; Filter By combobox `Name`; Case Sensitive unchecked; Starts With unchecked; OK/Cancel/Help unpressed. Guard PASS: positive-control state intact, lifecycle untouched since T3 (no Cancel/reopen occurred).

## §B Action audit — clear + 28 printable ops (one call each, in order)

Pre-step caret focus click on textbox f3e402 (`#textfield-1143-inputEl`; no text change).
`press_key Control+A` → `keyboard.press('Control+A')`. `press_key Backspace` → `keyboard.press('Backspace')`.
Post-clear verify (fresh current-ref snapshot): textbox [active] EMPTY; grid body re-rendered to FULL many-row list (42 table blocks at depth limit; head-of-list populated) — same clear→full-list pattern as T3 and EXP-033 T6.

| Op | Key call | Char |
|----|----------|------|
| 1 | press("F") | F |
| 2 | press("X") | X |
| 3 | press("_") | _ |
| 4 | press("S") | S |
| 5 | press("e") | e |
| 6 | press("l") | l |
| 7 | press("e") | e |
| 8 | press("c") | c |
| 9 | press("t") | t |
| 10 | press("F") | F |
| 11 | press("o") | o |
| 12 | press("r") | r |
| 13 | press("m") | m |
| 14 | press("K") | K |
| 15 | press("e") | e |
| 16 | press("y") | y |
| **17** | **press("b")** | **b — LOWERCASE corrective key after `Key`** |
| 18 | press("o") | o |
| 19 | press("a") | a |
| 20 | press("r") | r |
| 21 | press("d") | d |
| 22 | press("P") | P |
| 23 | press("r") | r |
| 24 | press("o") | o |
| 25 | press("b") | b (probe `robe`) |
| 26 | press("e") | e |
| 27 | press("0") | 0 |
| 28 | press("1") | 1 |

Total printable ops = **28**; zero errored/non-keystroke calls; sequence lands `FX_SelectFormKeyboardProbe01` (lowercase `b` in `Keyboard`, op 17). Prohibited-action audit: zero fill/clipboard/bulk-typing calls, zero JS/evaluate/run-code, zero internal-store access, no Enter/OK pressed, no result-row interaction, no Cancel/Open/Close/reopen.

## §C Settled result (after 3s settle; planned captures)

- Fresh subtree snapshot: textbox [active] exact `FX_SelectFormKeyboardProbe01`; Filter By=`Name`; Case Sensitive unchecked; Starts With unchecked; grid body node f3e94 with **NO row children → ZERO visible rendered rows**; OK/Cancel/Help unpressed.
- Targeted find of probe substring `SelectFormKeyboardProbe01` page-wide: exactly ONE match = the textbox value itself; zero occurrences in the grid region → ZERO visible case-insensitive Name matches.
- Inspected screenshots:
  - `t4-01-probe-settled-dialog.png`: dialog crop — title "Select Form"; Caption↓|Name header with BLANK grid body (zero rows legible); Filter field selected showing left-truncated lowercase-b form `ectFormKeyboardProbe01` (visibly lowercase `b`, contrasting EXP-033 T4's capital-B crop); Name dropdown; visibly empty checkboxes; OK/Cancel/Help unpressed. Proves: settled zero-row view + settings + lowercase-case text; exact full textbox value from the snapshot line.
  - `t4-02-probe-settled-viewport.png`: full viewport — identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree/Lab03 panel heading preserved behind the centered zero-row dialog. Proves scope/identity preservation; nothing about inventory.

## §D Verdicts (rendered-UI-limited)

- AC-5 probe leg: PASS — exact literal entered via clear + 28 one-char native ops with lowercase `press("b")` at op 17; settled grid shows ZERO visible case-insensitive Name matches. Explicit limitation: this is the inspected live RENDERED result only — NO database absence/uniqueness/durability, persistence/serialization, or server refresh/requery mechanism claim (clear-step full-list re-render proves a populated list existed at clear).

## §E Counts & budget this task (T4)

Ctrl+A ×1, Backspace ×1, printable native one-char ops ×28, focus caret click ×1. Cancel/Open-reopen/OK/Enter/row-activation/Form actions/auth/prefs/unload: 0. Recovery budget: corrected-visible-inspection component already 1/1 consumed (T1) — NOT used here; fresh-untargeted-snapshot component NOT consumed (still 0/1) — planned captures all settled unambiguously, no stale-ref error occurred.

## §F End state of T4

Select Form OPEN, textbox active exact `FX_SelectFormKeyboardProbe01`, ZERO visible rows, settings Name/unchecked/unchecked; NO Cancel performed (final-audit Cancel reserved for a later task). Repository writes: this file + EXP-033-R2 record only.
