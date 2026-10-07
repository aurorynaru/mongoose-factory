# EXP-033-R2 — T5 final audit + dismissal notes (Run R-20261007-220054-xlTM, cycle 6)

Permitted: planned pre-dismissal read-only capture; exactly ONE ordinary Cancel solely to dismiss; post-Cancel final read-only audit. No reopen after Cancel.

## §A Final pre-dismissal state (planned capture; read-only)

Fresh targeted subtree snapshot of the OPEN dialog: textbox [active] exact `FX_SelectFormKeyboardProbe01`; Filter By combobox `Name`; Case Sensitive unchecked; Starts With unchecked; grid body node f3e94 with NO row children → ZERO visible rendered rows; OK/Cancel/Help unpressed. Inspected `t5-01-pre-cancel-settled-probe-state.png`: dialog titled "Select Form", Caption↓|Name header + BLANK grid body (zero rows legible), Filter field selected showing left-truncated lowercase-b form `ectFormKeyboardProbe01`, Name dropdown, visibly empty checkboxes, OK/Cancel/Help unpressed. Recorded as the FINAL settled probe state before dismissal — same as T4's settled result; no drift occurred between T4 and T5.

## §B The one final ordinary Cancel (consumed)

One click on rendered dialog-toolbar button `Cancel` (accessibility name "Cancel", ref f3e423; the same supported control EXP-033 T7 used). First attempt; no retry.

## §C Post-Cancel audit (read-only; no reopen performed or permitted after)

- `find "Select Form"` page-wide: **NO matches** → dialog fully dismissed.
- Inspected `t5-02-post-cancel-clean-webclient.png`: full Web Client viewport — identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menu/toolbar row with controls in disabled/clean appearance, Explorer tree intact (My/Master/Public/User Folders), selected panel heading `FX_ComponentRecoveryLab03` + close control; NO dialog anywhere. Proves: dismissal + Web Client usability/scope preserved. Does not prove toolbar per-button enabled/disabled states (accessibility snapshot from T1/T2 covers that baseline).
- Tab 1 Designer URL still `...&MGForm=FX_ComponentRecoveryLab03` (never acted on all experiment) → inherited Designer context untouched.

## §D Network corroboration (corroboration only; rendered evidence decisive)

Non-static window filter `SaveChanges|AddForm|Delete|Unload|FormsApi`: enumerated read-type calls only — GetExplorerFolder, GetAllForms ×7, GetForm; **ZERO** SaveChanges/AddForm/Delete/Unload requests across the visible window for this worker session's event window (covers T1–T5 browser actions of this replay). Cancel issued no mutation request into the list. Panel-reset caveat: cross-cycle windows may not be jointly retrievable in one listing (same caveat as prior experiments); rendered observations remain decisive.

## §E Complete action audit — both tested strings

Positive control (T3, on the single-open dialog): caret focus click ×1; `Control+A` ×1; `Backspace` ×1; 25 printable one-char native key ops in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (op audit table in `t3-positive-control-notes.md` §B; zero errored calls). Settled gate: exactly ONE row, Name cell exact (accessibility line + inspected `t3-01`).
Probe (T4, SAME dialog, no lifecycle reset): caret focus click ×1; `Control+A` ×1; `Backspace` ×1; 28 printable one-char native ops in order `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1` with **lowercase `press("b")` at op 17** (`t4-probe-settled-zero-matches-notes.md` §B; zero errored calls). Settled: textbox exact literal, grid body NO row children → ZERO visible case-insensitive Name rows; targeted find = exactly ONE page-wide match (the filter value itself).
Prohibited-action audit (whole run): fill/paste/bulk-typing 0; JS/evaluate/run-code on page state 0 (screenshot tool's own locator aside); internal-store access 0; Enter/OK pressed 0; result-row interaction/activation 0; Form open/close/save/create/edit/Regenerate 0; Unload invocation 0; preference changes 0; auth/session-establishment actions 0; Designer launch/cold MGForm navigation 0.
Lifecycle counts whole run: initial ordinary Open **1/1** (T2); tested Cancel/reopen cycles between the two tests **0**; final ordinary Cancel **1/1** (T5, dismissed first attempt); reopen after any Cancel **0**.

## §F Recovery-budget accounting (shared across the full experiment)

- Corrected-visible-inspection component: consumed **1/1 in T1** (Explorer-region crop insufficient → one corrected full-frame capture). NOT used in T2–T5.
- Fresh-untargeted-snapshot component: **0/1 consumed** through T5 — every guard/current-ref/settled/final-audit inspection returned settled, unambiguous results; no stale-ref error occurred; the recovery snapshot was NOT needed and remains unused (remaining 0/1 available but unnecessary).
- No planned read was relabeled as recovery; no repeated ambiguous read required retry.

## §G Repository audit

`git status --porcelain`: only pre-existing unrelated modified paths `tools/learning-harness/**` (README, harness.config.example.json, src/shadow/cli.ts, src/shadow.runner.ts... list: README.md, harness.config.example.json, src/shadow/cli.ts, src/shadow/runner.ts, test/shadow.test.ts — never touched by this experiment) + the permitted new paths `experiments/EXP-033-R2-clean-replay-select-form-native-keyboard-filter-re.md` and `evidence/EXP-033-R2/`. Confinement PROVEN.

## §H Final classification

All AC-1..AC-8 SATISFIED under the independently established fresh worker identity (T1: current session `ses_ee9545a81ffevGqiS17Iix5jM8`, distinct from EXP-033 worker `ses_ee9768333ffeV8zFkrUtEv19U6`). The EXP-033 native-keyboard Select Form filtering procedure is therefore classified **replay_verified — for this tested environment and UI workflow only**. Zero-match/row conclusions strictly render-limited: no database absence/uniqueness/durability, persistence/serialization, or server refresh/requery mechanism claims.
