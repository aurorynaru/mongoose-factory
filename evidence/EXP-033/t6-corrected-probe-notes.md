# T6 — Corrective exact-probe input (Run R-20261007-212336-By3J)

Experiment: EXP-033. Same live Web Client Select Form dialog, same lifecycle session
(no Cancel, no reopen; dialog left OPEN at end). T4's wrong-literal attempt is
preserved in t4-probe-notes.md; this file records the single corrective attempt.

## Scope established by fresh guard snapshot (before typing)

- Tab 0: authenticated live Web Client, URL host `mgapse1ap.mtmgf.se1.mongoosepaas.io`,
  query `?favoriteContext=FX_ComponentRecoveryLab03`; Lab03 panel selected
  (Close Panel control present); toolbar clean.
- Dialog subtree visible: title "Select Form", textbox ref f3e402 (locator
  `#textfield-1143-inputEl`), dialog ref f3e79, grid body node f3e94.
- Inherited state before T6: textbox text `FX_SelectFormKeyBoardProbe01` (wrong-literal
  residue from T4), Filter By=Name, both checkboxes unchecked, grid empty (zero rows).

## Input action log — corrective attempt (28 native key ops, one printable char each)

Pre-step caret focus click on textbox f3e402 (no text change).
Clear: Ctrl+A then Backspace → post-clear verified in fresh snapshot: textbox empty,
caret active, grid re-rendered to full many-row list (clearing the filter shows all forms).

| Op | Key call | Char added |
|----|----------|------------|
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
| 17 | press("b") | b ← CORRECTIVE KEY: lowercase, unlike T4's op-18 `press("B")` |
| 18 | press("o") | o |
| 19 | press("a") | a |
| 20 | press("r") | r |
| 21 | press("d") | d |
| 22 | press("P") | P |
| 23 | press("r") | r |
| 24 | press("o") | o |
| 25 | press("b") | b |
| 26 | press("e") | e |
| 27 | press("0") | 0 |
| 28 | press("1") | 1 |

Final typed literal: `FX_SelectFormKeyboardProbe01` (lowercase "b" in "Keyboard").
Zero errored key calls; zero fill/bulk/paste/JS/run-code/DOM/store calls used.
No Enter; no OK/Cancel/Help press; no row activation. Settled wait 3s after op 28.

## Settled observations (fresh subtree snapshot + targeted find)

- `find "FX_SelectFormKeyboardProbe01"` (exact case): exactly ONE match — the textbox
  value itself; zero occurrences in the grid region → ZERO visible Name rows for the
  corrected literal (case-insensitive semantics observed at row level).
- Textbox: active, exact text `FX_SelectFormKeyboardProbe01`; Filter By=Name;
  Case Sensitive and Starts With checkboxes unchecked.
- Grid body node f3e94: no row children → zero rendered rows.

## Decisive screenshots

- evidence/EXP-033/t6-01-corrected-probe-settled-dialog.png — dialog crop: title
  "Select Form", Caption|Name header with sort arrow, blank grid body = zero rows;
  textbox at lower-left shows truncated `...ectFormKeyboardProbe01` confirming the
  lowercase-b form of the typed filter. Proves: zero-row settled view for the corrected
  literal, with scope (dialog identity + controls) legible. Does NOT prove row content
  beyond its absence.
- evidence/EXP-033/t6-02-corrected-probe-settled-viewport.png — full viewport: same
  dialog centered; behind it the Lab03 form header `FX_ComponentRecoveryLab03` and Web
  Client Explorer toolbar confirm authenticated scope; grid body blank = zero rows.
  Proves framing/identity/scope of the zero-row view.

## Network corroboration (static=false)

- FormsApi window: #256 GetAllForms [200] = whole-list re-render at T6 clear (matches
  observed full-list view). After #256: next entry is #294; list shows no further
  GetAllForms in between. No dialog-input keystroke fires a request (consistent with
  client-side filtering).
- Whole-list mutation endpoint filter (`FormsApi|SaveChanges|AddForm|Delete`): zero
  SaveChanges/AddForm/Delete requests anywhere → no database mutation of any kind.
- Absence of a per-filter GET request is recorded as observation only; no database-absence
  inference: the DB may contain forms matching the probe string that simply render no rows.

## Verdicts

- Corrected probe input action: PASS — 28/28 printable chars landed, final textbox text
  exact, verified from fresh settled state.
- Probe zero-visible-match (case-insensitive Name): PASS at row level — exactly one match
  in the subtree is the filter value; grid shows zero rows despite whole-list re-render
  proving populated list exists.
- Dialog lifecycle: no Cancel/reopen consumed by T6; dialog left OPEN with corrected result intact.
