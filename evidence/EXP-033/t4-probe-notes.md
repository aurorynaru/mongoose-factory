# EXP-033 T4 — probe native-keyboard sequence (settled on WRONG-LITERAL string; AC leg downgraded by T5 reconciliation)

Run: R-20261007-212336-By3J, cycle 4, task T4. Date: 2026-10-07.
No Cancel this task, no reopen, no OK/Enter, no row activation, no bulk fill/paste (type tool never used on the textbox), no page JS/run-code, no auth/prefs/unload/Form actions. Positive control passed in T2 (record + t2 notes); probe permitted.

## §A Start guard (planned current-reference check, not recovery)

`find "Select Form"` = one match; targeted subtree snapshot: SAME dialog open, textbox active exact `FX_ComponentRecoveryLab02`, combobox `Name`, Case Sensitive unchecked, Starts With unchecked, grid exactly one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02` — positive-control state intact from T2.

## §B Native keyboard action log (exact)

Focus op: ONE caret click on textbox via CURRENT accessibility ref f3e402 (resolved locator `#textfield-1143-inputEl`). Active/focused confirmed in the guard snapshot and post-clear snapshot; focus verified before key ops. Tool-mechanic note as in T2 notes §B: press_key emits page-scope keyboard events; text cursor inside the DOM-focused textbox element; no value-replacement API invoked; resulting values observed stepwise match caret-in-textbox semantics.

Clear: `Control+a` then `Backspace`. Post-clear subtree verify: `textbox [active]` with NO value → cleared and focused; settings unchanged (Name / unchecked / unchecked); grid re-rendered to the full descending list headed `XML to IDO Wizard` (scrollbar-truncated list, same pattern as T2's clear).

Probe typing — 28 successful printable key operations, one character each, in this exact order spelling `FX_SelectFormKeyBoardProbe01` (NOTE: char 18 is UPPERCASE `B`, not the required literal's lowercase `b`):
Full ordered run (28 ops): F X _ S e l e c t F o r m K e y B o a r d P r o b e 0 1
(Count check: letters = FX(2)+Select(6)+Form(4)+KeyBoard(8)+Probe(5) = 25 letters + `_` (1) + digits `0`,`1` (2) = 28 printable ops; verified against the recorded tool calls `press('B')` and the settled accessibility snapshot line.)
Non-keystroke tool errors this task: NONE (every press_key call mapped to its intended char).
No Enter/OK ever pressed.

T5 RECONCILIATION CORRECTION (this task, doc-only): the original §G heading said the ops "typed `FX_SelectFormKeyboardProbe01`" — TRANSCRIPTION ERROR vs the actual recorded actions. Proven from existing T4 action records: the 18th printable op was tool call `page.keyboard.press('B')` = UPPERCASE B; no lowercase-`b` press_key call exists in T4's log; the settled accessibility snapshot line is textbox exact `FX_SelectFormKeyBoardProbe01`; both inspected screenshots visibly render capital-B text (`ectFormKeyBoardProbe01`). Therefore the case mismatch is REAL (the actually entered string is `FX_SelectFormKeyBoardProbe01`), not documentary. Consequences: the brief's required probe literal was NOT entered; the zero-row observation applies ONLY to the mis-cased string; Case Sensitive unchecked may render case-insensitively but that does NOT satisfy the separate exact-input requirement. No corrective retype performed or authorized in this task (doc-only).

## §C Intermediate renders during typing (observation, no precise per-event claim)

Not individually captured; intermediate prefix states were not recorded between keystrokes (limitation — see §E).

## §D Settled probe-result capture (planned)

After final `1`, waited 3s. Current subtree snapshot of the dialog:
- textbox active exact `FX_SelectFormKeyBoardProbe01`
- combobox `Name`; Case Sensitive unchecked; Starts With unchecked
- grid: header Caption|Name + body node (`f3e94`) with **NO row children** → ZERO visible rows.
Inspected screenshots: `t4-01-probe-settled-dialog.png` (tight dialog crop: title "Select Form"; header Caption|Name; NO row under the header — blank grid body; Filter By dropdown "Name"; Case Sensitive / Starts With checkboxes visibly empty; OK/Cancel/Help present unpressed; textbox selected showing `ectFormKeyBoardProbe01` truncated at field's left edge) and `t4-02-probe-settled-viewport.png` (same dialog over the full Web Client: identity bar, DEM badge, Lab03 panel heading + Close Panel control preserved, toolbar clean — scope/context proof). Exact textbox value proven by accessibility snapshot line; images corroborate zero-row grid + settings.

## §E Network corroboration (not decisive)

FormsApi-filtered audit (non-static window): last FormsApi entry #256 GetAllForms — T2's later calls (#257/#294) had scrolled out of the filter window, so this audit does NOT enumerate T4's refresh calls; separately, a whole-list (incl. static) mutation-endpoint filter (`SaveChanges|UpdateForms?|AddForm|Delete`) returned ZERO matches → corroboration that no Mongoose mutation request exists in the retained list. Zero-row claim does NOT rest on network evidence; per-request attribution limited as always.

## §F Counts / allowance accounting this task

Caret clicks on textbox: 1; rendered-control changes: 0; key operations: Ctrl+A ×1, Backspace ×1, printable chars ×28 (+0 errored calls); OK/Enter: 0; row activations: 0; Cancel/Open/reopen: 0. Ambiguity-recovery allowance (experiment-wide single fresh-snapshot + corrected-inspection): **NOT consumed** — guard snapshot, post-clear verify, and settled result capture were all planned checks whose results were consistent/settled at first inspection (zero-row state read once with both screenshots inspected; no stale/ambiguous observation required recovery). Cumulative through T4: allowance 0/1 used.

## §G Result / AC status

**Probe input leg: PARTIAL / WRONG-LITERAL (reconciled T5):** 28 one-char-per-key native printable ops typed into the cleared, focused textbox of the SAME dialog with no Cancel/reopen — but the actual string entered/settled was `FX_SelectFormKeyBoardProbe01` (uppercase `B`), NOT the brief's required literal `FX_SelectFormKeyboardProbe01`. Settled rendered view re-rendered from the T2 positive-control single row to a **zero-row settled view** under Filter By=Name, Case Sensitive unchecked, Starts With unchecked. **AC-3 zero-visible-match leg: downgraded from PASS to NOT-SATISFIED-BLOCKER for the brief**: zero visible matches was established only for the mis-cased string; the required exact literal was never entered, so the AC cannot be claimed passed on this input. The zero-row observation is preserved as an OBSERVED result for `FX_SelectFormKeyBoardProbe01` only (and keyboard-refresh re-render to a settled view); Case Sensitive unchecked does not substitute for the exact-input requirement; no database-absence claim. A corrective native input attempt WOULD be required to satisfy the brief — NOT performed in this task. Select Form left OPEN with probe text/zero-row result intact for the final-audit task (≤1 final Cancel only, no reopen).
