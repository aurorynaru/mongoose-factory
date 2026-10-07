# EXP-033 T2 — positive-control native-keyboard sequence (settings verified; AC-4 positive-control leg)

Run: R-20261007-212336-By3J, cycle 2, task T2. Date: 2026-10-07.
No Cancel, no reopen, no OK/Enter, no row activation, no bulk fill/paste (the type tool was never used on the textbox), no page JS/run-code, no auth/prefs/unload/Form actions this task. Probe string NOT started per instruction.

## §A Start state (planned current-reference check, not recovery)

T1 left Select Form OPEN. `find "Select Form"` = one match; targeted subtree snapshot (current refs): textbox active exact `FX_SelectFormFilterProbe01` (ref f3e402), combobox `Name`, Case Sensitive unchecked, Starts With unchecked, grid exactly one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02`. Filter By=Name and both checkboxes unchecked already established by inheritance — NO rendered controls needed changing; zero control clicks performed.

## §B Native keyboard action log (exact)

Focus op: ONE caret click on the textbox element via its CURRENT accessibility ref f3e402 (resolved locator `#textfield-1143-inputEl`). Pre-existing blue selection outline confirmed active/focused in both subtree snapshots; focus verified before key ops.
Note on tool mechanics: each press_key call emits a page-scope keyboard event, but the text cursor is inside the focused textbox DOM element and no value-replacement API was invoked; resulting textbox values (observed stepwise: empty after clear, then exact 25-char string) match the caret-in-textbox semantics.

1. `Control+a` — select all in textbox (native).
2. `Backspace` — clear selection (native). Post-clear subtree verification: `textbox [active]` with NO value → cleared and focused; settings unchanged (Name / unchecked / unchecked). Decisive screenshot `t2-01-after-native-clear-settled-grid.png`.

Then 25 one-printable-character key presses, in this exact order (`F X _ C o m p o n e n t R e c o v e r y L a b 0 2`):
3–4. `F`, `X`
5. `_` (underscore #1)
6–17. `C`,`o`,`m`,`p`,`o`,`n`,`e`,`n`,`t`,`R`,`e`,`c`,`o`
18–24. `v`,`e`,`r`,`y`,`L`,`a`,`b`
(interruption note: between `b` and `0` one press_key call issued an EMPTY key argument → tool error "Unknown key: ''", NO keystroke executed; corrected with the intended next printable char, no character skipped or duplicated in the sequence.)
25. `0` (digit)
26. `2` (digit)

Total printable chars entered: 25 = len(`FX_ComponentRecoveryLab02`). No Enter/OK ever pressed.

RECONCILIATION CORRECTION (this task, doc-only): the original draft stated "27 one-printable-character key presses" / "Total printable chars entered: 27". That was a documentation error: 25 successful printable keystrokes + Ctrl+A + Backspace = 27 total keyboard operations; the enumerated per-character log above (items 3–26, characters `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`) proves exactly one successful native printable-key operation per character of the 25-char target, in exact order. The interrupted call between `b` and `0` sent an EMPTY key argument → tool error "Unknown key: ''", NO keystroke executed; it is a documented non-keystroke tool error, not an extra printable op. No extra successful printable keystrokes are recorded; post-clear/stepwise observed values (empty textbox, then prefixes, then final exact `FX_ComponentRecoveryLab02`) corroborate no skips/duplications.

## §C Intermediate rendered observation during typing (noted, not claimed precise)

Mid-typing the grid visibly settled to a truncated descending list headed `XML to IDO Wizard` (scrollbar thumb mid-track), i.e. intermediate prefixes already re-rendered rows — consistent with keyboard input triggering refresh. Exact prefix per refresh event was NOT recorded; stated as observation only, no precise claim.

## §D Settled positive-control result capture (planned)

Waited 3s after the final character, then `find "FX_ComponentRecoveryLab02"` = 3 matches (dialog textbox + two gridcells), and a current subtree snapshot of the dialog:
- textbox active exact `FX_ComponentRecoveryLab02`
- combobox `Name`; Case Sensitive unchecked; Starts With unchecked
- grid: header Caption|Name + EXACTLY ONE row: gridcell "FX_ComponentRecoveryLab02" / gridcell "FX_ComponentRecoveryLab02" (refs f3e1072/f3e1074)
Inspected screenshot `t2-02-positive-control-settled.png`: title "Select Form"; single row visible in BOTH Caption and Name columns; Filter By dropdown "Name"; checkboxes visibly empty; OK/Cancel/Help present unpressed; textbox text truncated at field's left edge (`omponentRecoveryLab02` shown) — exact textbox value proven by the accessibility snapshot line, image corroborates settings/rows.

## §E Network corroboration (not decisive)

Post-task audit (cumulative since tab load; panel had reset earlier): new Mongoose POSTs beyond T1's last-seen #256: FormsApi/GetAllForms **#257** and **#294**; zero SaveChanges or mutation requests. Two fresh GetAllForms calls align with keyboard-driven refresh (clear → full list; final text → filtered one-row view); per-request attribution is a limitation (list cumulative, no timing markers).

## §F Counts / allowance accounting this task

Native focus clicks: 1 on textbox; rendered-control changes: 0; key operations: Ctrl+A ×1, Backspace ×1, printable chars ×25 (+1 errored empty-key call that executed nothing = non-keystroke tool error; total successful keyboard ops 27); OK/Enter: 0; row activations: 0; Cancel/reopen/Open: 0. Ambiguity-recovery allowance (one fresh untargeted snapshot + one corrected visible inspection, experiment-wide): **NOT consumed** — all inspections were planned current-reference checks / settled result captures with consistent results (cleared state verified once; settled positive-control state captured once).

## §G Result

**Positive-control sequence leg PASS (observed), documented as the positive-control leg of the AC-4 gate:** after native Ctrl+A + Backspace clear and one-char-per-key typing of `FX_ComponentRecoveryLab02`, the SETTLED rendered grid shows exactly one visible row whose Name equals `FX_ComponentRecoveryLab02`. The keyboard path re-rendered the grid from the stale inherited single row → cleared full-list view → exact filtered view, WITHOUT any Cancel/reopen and without Enter/OK — resolving EXP-031's applied-vs-inherited separation question affirmatively for the native-keyboard mechanic (first execution; observed only). Note (reconciliation): experiment AC-2 is settings establishment, AC-3 is the PROBE typing leg, AC-4 is the positive-control gate — this task satisfies the AC-4 positive-control leg and verifies the AC-2 inherited settings; it does NOT satisfy AC-3 (probe not yet run).
Select Form left OPEN with positive-control text/result intact. Next task: probe sequence on this same dialog (clear + type `FX_SelectFormKeyboardProbe01` one char per key op; inspect settled matches), then ≤1 final Cancel to dismiss.
