# EXP-033-R4 — Clean Replay: Select Form Native Keyboard Filter Refresh (Claude sonnet/high)

Status: **T5 FINAL: all AC-1..AC-8 PASS; Select Form dismissed by exactly 1 final Cancel, no reopen; classification replay_verified (tested environment/UI workflow only; rendered-UI-state zero-match, no database/serialization/server claims). Recovery: fresh snapshot 0/1; corrected inspection 1/1 conservative (0/1 as recorded).** Prior: T4 COMPLETE — probe PASS (rendered UI state only): after native clear + 28 individual key presses (lowercase `b` after `Key`), settled grid shows 0 visible matches for exact `FX_SelectFormKeyboardProbe01`; AC-4 and AC-5 pass; dialog left OPEN; final Cancel 0/1 pending final audit; recovery 0/1 + 0/1 used; not yet replay_verified.** Prior: T3 COMPLETE — positive control PASS: native Ctrl+A + Backspace, then 25 individual key presses `FX_ComponentRecoveryLab02`; settled grid shows exactly one row with Name `FX_ComponentRecoveryLab02` (Name / unchecked / unchecked). AC-2 and AC-3 pass from T3 (not from T2). Dialog left OPEN; probe not started. Recovery 0/1 + 0/1 used. Not replay_verified.** (T1: identity/preflight; T2: Open 1/1 + baseline.)
Date: 2026-10-09
Replay of: EXP-033. Mode: LEARNING MODE — read-only Select Form filter replay. No Form/component may be opened, closed, saved, created, or edited.
Editing scope: User (inherited Web Client). Artifacts named in brief: `FX_ComponentRecoveryLab02` (existing positive control; inspect only), `FX_SelectFormKeyboardProbe01` (filter probe STRING ONLY — must never be created). Evidence directory: `evidence/EXP-033-R4/`.

## Attempt 1 note

T1 attempt 1 (task_message_id `31e86f3c-e71c-4412-9119-28ff2d39e3b7`, same worker session) stopped at a PreToolUse guard error ("Guard state unavailable/corrupt/locked") on a Read, before any browser interaction and before any repository write. The diagnosis (guard could not handle parallel tool calls; fixed in commit dcdff7d) is the operator's, not mine. Attempt 1 wrote no files and used no recovery allowance.

## Worker identity (recorded BEFORE any browser interaction)

- Harness-provided worker session UUID (task header label `worker_session_id`): **`66e4d74e-ce8b-4646-b9f9-01fbca90a469`**.
- Attempt-2 task_message_id: `9b3d8dfc-5503-4f85-934c-7ce466891167` (a task message, NOT the worker identity). Attempt-1 task_message_id: `31e86f3c-e71c-4412-9119-28ff2d39e3b7`.
- Comparison against all earlier workers found in the repository records:
  - EXP-033 worker `ses_ee9768333ffeV8zFkrUtEv19U6` — **DISTINCT** (different ID format and value).
  - EXP-033-R2 worker `ses_ee9545a81ffevGqiS17Iix5jM8` (recorded in the R2 record) — **DISTINCT**.
  - EXP-033-R3 worker `60cc08ec-01c4-41cc-9294-26f32bee888e` (recorded in the R3 record/evidence) — **DISTINCT**.
- Freshness conclusion: the UUID appears in no earlier EXP-033/R2/R3 record or evidence file (grep of `experiments/EXP-033*` and `evidence/EXP-033*/**` for the UUID and its prefix `66e4d74e` found no match before this record was created). Fresh and distinct. A new worker does not establish a new browser/Web Client session and does not reset any limit.

## EXP-033 facts reviewed (repository only, before browser interaction)

Sources: `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md`, `evidence/EXP-033/t2-positive-control-notes.md`, `evidence/EXP-033/t6-corrected-probe-notes.md`, `evidence/EXP-033/t7-final-audit-notes.md`. Not reviewed: the EXP-033 screenshots themselves, `t4-probe-notes.md`, `t1-preflight-notes.md` (T4/T1 facts taken from the record's reconciled text).

- **Positive-control sequence (reconciled, T2/T3):** `FX_ComponentRecoveryLab02` = 25 printable one-character presses `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`, preceded by Ctrl+A + Backspace (27 total key ops; the T2 draft's "27 printable" was a doc error). One empty-key call errored ("Unknown key: ''") and executed no keystroke. Settled grid: exactly one row, Name exactly `FX_ComponentRecoveryLab02`.
- **T4 wrong-literal history (reconciled T5):** T4 typed 28 ops but op 18 was `press('B')` (uppercase), producing `FX_SelectFormKeyBoardProbe01` (≠ required literal). Zero rows were seen only for that mis-cased string; downgraded to NOT-SATISFIED for the exact-input requirement and kept as history.
- **Corrected 28-character probe (T6):** after Ctrl+A + Backspace clear (grid re-rendered to full list), 28 presses `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`, lowercase `b` at op 17 (the `b` after `Key`); a second `b` at op 25 (`Probe`). Zero errored key calls. Settled: textbox exact `FX_SelectFormKeyboardProbe01`, Name / unchecked / unchecked, grid body with no row children (zero visible rows); `find` of the literal = exactly one match (the textbox value).
- **EXP-033 recovery-budget accounting:** 0 of 1 consumed whole run (all inspections were planned checks/captures).
- **EXP-033 final state (T7):** one ordinary final Cancel dismissed Select Form on the first attempt, no reopen; `find "Select Form"` = no matches; Lab03 Web Client panel intact; single Designer tab at `&MGForm=FX_ComponentRecoveryLab03` untouched. Whole-run counts: initial Open 1, reopens 0, tested Cancel/reopen cycles 0, OK/Enter 0, row activations 0, Form actions 0. Classification: observed / candidate_procedure (not replay_verified).
- Note: R2/R3 ran after EXP-033 in the same browser; the inherited state may differ from EXP-033's final state and must be established by the browser preflight.

## Ambiguity-recovery allowance (shared, whole experiment)

Fresh untargeted snapshot: used 0 / remaining 1. Corrected visible inspection: used 0 / remaining 1. Attempt 1 used none.

## Acceptance criteria status (running)

| AC | Status | Basis |
|----|--------|-------|
| AC-1 identity + preflight + Open accounting | PASS so far | T1 identity distinct/fresh, preflight read-only; T2 one initial Open consumed (1/1), initial state recorded. Final "untouched" confirmation deferred to the final audit. |
| AC-2 positive-control action evidence | **PASS (T3 action audit only)** | NOT satisfied by T2: T2 only established Name/unchecked/unchecked and focus, with no clear or typing (correction: AC-2 is not complete from T2's baseline/settings). T3: Ctrl+A + Backspace, then 25 individual `press_key` ops `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`, zero errors, no fill/paste/JS/Enter/OK/row interaction; Name / unchecked / unchecked. |
| AC-3 settled positive-control row | **PASS (T3)** | Settled grid shows exactly one row, Caption and Name `FX_ComponentRecoveryLab02` (screenshot + accessibility). |
| AC-4 probe input | **PASS (T4)** | Ctrl+A + Backspace clear (post-clear: empty textbox, full list re-rendered), then 28 individual `press_key` ops `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`, lowercase `b` at op 17 (and op 25), zero errors; Name / unchecked / unchecked; no prohibited input. |
| AC-5 settled probe zero matches | **PASS (T4), rendered-UI-state only** | Settled grid: header only, zero rows/gridcells; textbox exact `FX_SelectFormKeyboardProbe01`. No database-absence/uniqueness/persistence/serialization/server-refresh claim. |
| AC-6 whole-run action audit | **PASS (T5)** | Both strings: native Ctrl+A + Backspace then individual `press_key` per char (25 and 28); no fill/paste/bulk/JS/Ext-store/Enter/OK/row interaction, no tested Cancel/reopen, no Form mutation/Save/Regenerate/unload/preference/auth action. Counts come from my call logs; see `t5-final-audit-notes.md` for caveats. |
| AC-7 budget accounting | **PASS (T5)** | Planned captures (preflight, guards, settled results, final audit) separate from recovery. Fresh untargeted snapshot 0/1 used. Corrected inspection: T3's stale-ref `find` counted conservatively as 1/1 used (0/1 as recorded in T3/T4); not exceeded, no ambiguity remained. |
| AC-8 final audit / Cancel / confinement | **PASS (T5)** | Pre-Cancel capture = T4 state (exact textbox, Name/unchecked/unchecked, zero rows); exactly 1 ordinary Cancel, dismissed first attempt; `find "Select Form"` = none; no reopen; Web Client usable, same single tab and empty-panel state as T1; zero mutation-class requests seen. Writes: this record + `evidence/EXP-033-R4/` only (Playwright tool output in git-ignored `evidence/playwright/` is not authored by me; I could not run git, harness confirms confinement). |

AC-1 final: **PASS** (identity fresh/distinct; Web Client usable without session action; Select Form initially closed; one Open; no Form/Designer change; there was no Designer tab at T1 or later, so none was affected).

## Final classification

All AC-1..AC-8 pass. EXP-033 native-keyboard Select Form filtering procedure: **replay_verified**, only for this tested environment (this Web Client session, DEM tenant, Name filter, Case Sensitive and Starts With unchecked) and UI workflow (native Ctrl+A/Backspace clear plus one printable key per call in one open dialog, no Cancel/reopen). Positive control settled to exactly one `FX_ComponentRecoveryLab02` row; exact probe `FX_SelectFormKeyboardProbe01` settled to zero visible rows. The zero-match result is limited to the rendered UI state: no database-absence, uniqueness, persistence, serialization or server-refresh/requery claim. Caveats: this was the same browser/session as earlier runs; no Designer tab existed (differs from EXP-033's end state); portal `cookie/reset` DNS errors appeared in the console (undiagnosed, no effect seen); key counts rest on call logs.

## T5 — final audit and dismissal

Details in `evidence/EXP-033-R4/t5-final-audit-notes.md`. Worker `66e4d74e-ce8b-4646-b9f9-01fbca90a469`, task `55d58b79-2660-423f-92f6-cc66f6893b84`. Pre-Cancel capture matched T4's state; one ordinary Cancel (1/1) dismissed Select Form; no reopen; Web Client usable; inherited state as at T1. Evidence: `t5-01-pre-cancel-settled-probe-state.png`, `t5-02-post-cancel-viewport.png` (both inspected), `t5-final-audit-notes.md`. Lifecycle: Open 1, tested Cancel/reopen 0, final Cancel 1, reopen 0. Unrelated pre-existing changes (not touched): `tools/claude-harness/briefs/EXP-033-R3.brief.json`, `tools/claude-harness/briefs/EXP-033-R4.brief.json`, `tools/claude-harness/replays/scorecard.md`, `tools/learning-harness/**`, untracked `evidence/EXP-033-R3/` and the R3 record.

## T4 — probe (`FX_SelectFormKeyboardProbe01`) only

Details in `evidence/EXP-033-R4/t4-probe-notes.md`. Worker `66e4d74e-ce8b-4646-b9f9-01fbca90a469`, task `4f960a74-a1d9-45fc-8065-6ac5060390a9`.

- Guard (planned `find`, current refs, no stale error): same dialog open; textbox `FX_ComponentRecoveryLab02`; one positive row; Name / unchecked / unchecked.
- **Clear:** one focus caret click on current ref f1e106, then `Control+a`, `Backspace`; post-clear check: textbox empty, grid re-rendered to full list.
- **28 printable ops** (separate successful `press_key` calls, in order): `F`, `X`, `_`, `S`, `e`, `l`, `e`, `c`, `t`, `F`, `o`, `r`, `m`, `K`, `e`, `y`, `b`, `o`, `a`, `r`, `d`, `P`, `r`, `o`, `b`, `e`, `0`, `1`. **Lowercase `b` after `Key` confirmed (op 17).** Zero errored calls.
- **Settled result (3s wait):** textbox exact `FX_SelectFormKeyboardProbe01`; Name / unchecked / unchecked; grid header only, **0 visible case-insensitive Name matches** (no rows, no gridcells in subtree; screenshot blank grid body). Rendered-UI-state finding only: no database-absence, uniqueness, persistence, serialization, or server-refresh/requery claim.
- Evidence: `t4-01-probe-settled-viewport.png` (inspected), `t4-02-probe-settled-subtree.md`, `t4-probe-notes.md`.
- Console observation (not diagnosed): 4 `ERR_NAME_NOT_RESOLVED` error entries on the portal's `user/cookie/reset` background call during the probe window; the Web Client stayed rendered and usable. No auth/session action taken.
- Prohibited-action audit: no fill/paste/bulk/JS/Enter/OK/Cancel/Open/row interaction/Form or Designer action/preference change/unload.
- Dialog left OPEN; final Cancel reserved for the final-audit task. Recovery: fresh snapshot 0/1 used, corrected inspection 0/1 used. Open 1/1, final Cancel 0/1, reopens 0. Not replay_verified until final audit.

## T3 — positive control (`FX_ComponentRecoveryLab02`) only

Details in `evidence/EXP-033-R4/t3-positive-control-notes.md`. Worker `66e4d74e-ce8b-4646-b9f9-01fbca90a469`, task `cd74c42a-0d70-4562-8abf-5bc5449c78fa`.

- Start check: T2's ref f1e78 was stale (error "Ref f1e78 not found"); refs resolved with ONE targeted `find` (no untargeted snapshot; allowance not consumed). Same dialog open (f1e77); textbox `[active]` f1e400; Name / unchecked / unchecked.
- **Clear:** `Control+a`, then `Backspace` (native, separate calls).
- **25 printable ops**, each a separate successful `press_key`, in order: `F`, `X`, `_`, `C`, `o`, `m`, `p`, `o`, `n`, `e`, `n`, `t`, `R`, `e`, `c`, `o`, `v`, `e`, `r`, `y`, `L`, `a`, `b`, `0`, `2`. Zero errored calls. No fill/paste/bulk/JS/Enter/OK/row interaction/Open/Cancel.
- **Settled result (3s wait):** textbox exact `FX_ComponentRecoveryLab02`; grid exactly ONE row, Caption and Name both `FX_ComponentRecoveryLab02`; Filter By `Name`; both checkboxes unchecked. `find` = 3 matches (textbox + the two cells of the one row).
- Evidence: `t3-01-positive-control-settled-viewport.png` (inspected), `t3-02-positive-control-settled-subtree.md`, `t3-positive-control-notes.md`.
- **Gate:** positive control PASS; probe NOT started. Select Form left OPEN with the positive-control text/result intact.
- Limits: render-only observation; no claim about server refresh mechanism, per-key refresh granularity, or database inventory. Nothing is replay_verified yet.
- Recovery accounting: fresh untargeted snapshot 0/1 used; corrected visible inspection 0/1 used. Open 1/1; final Cancel 0/1.

## T2 — Select Form entry + baseline (no tested string typed)

Details in `evidence/EXP-033-R4/t2-dialog-baseline-notes.md`. Worker `66e4d74e-ce8b-4646-b9f9-01fbca90a469`, task `05252877-51d5-4f3d-8f18-c6e852c20fb9`.

- Start check (planned): Web Client still usable, Select Form closed — consistent with T1. **Initial Open consumed: 1/1** (one ordinary toolbar Open; no reopen).
- **Initial dialog state:** Name-filter textbox EMPTY (active); Filter By = `Caption`; Case Sensitive unchecked; Starts With unchecked; rendered rows = full unfiltered list (43 rows rendered, first `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo`).
- **Settings established:** Filter By changed Caption → `Name` via the rendered dropdown (one change); checkboxes already unchecked (0 clicks). Final: Name / unchecked / unchecked.
- **Textbox:** focused via one caret click on current ref f1e401 (`#textfield-1143-inputEl`), `[active]`, still empty. No Ctrl+A/Backspace/typing/fill/paste performed.
- Evidence: `t2-01-dialog-initial-subtree.md`, `t2-01-dialog-open-initial-state.png`, `t2-02-dialog-settings-established-subtree.md`, `t2-02-dialog-settings-established-textbox-focused.png` (both PNGs inspected).
- No Enter/OK/Cancel/row interaction/JS. Select Form left OPEN. Inherited Form/Designer state untouched (no Form panel; no Designer tab, as in T1).
- **Recovery accounting:** fresh-snapshot 0/1 used, corrected-inspection 0/1 used. Final Cancel 0/1 used.

## T1 browser preflight

Details in `evidence/EXP-033-R4/t1-preflight-notes.md`. Actions: tab list, one fresh untargeted snapshot (planned preflight, not recovery), one viewport screenshot. No clicks/keys/navigation.

- **Browser context:** exactly one browser tab (`Mongoose` portal, current). NO separate Designer tab exists (EXP-033 had one at `&MGForm=FX_ComponentRecoveryLab03`) — observed difference; not acted on. Portal tab strip also shows a `System Administrator` tab (not inspected/touched).
- **Web Client usable without session establishment:** YES — identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, toolbar `Open` enabled, no login UI. No auth action taken.
- **Select Form initially open:** NO — closed (no dialog node in the untargeted snapshot or screenshot). No inherited filter text/Filter By/checkbox states/rows exist to record. The one permitted initial ordinary Open remains UNUSED (to be consumed by a later task).
- **Inherited Forms state:** no Form panel selected (empty main area; the Lab03 panel from EXP-033's end state is not present); Explorer shows four collapsed root folders; Save/New/Delete etc. disabled; no browser-native or unsaved-change dialog.
- **Evidence:** `evidence/EXP-033-R4/t1-preflight-notes.md`, `t1-01-fresh-snapshot-untargeted.md`, `t1-01-preflight-viewport.png` (inspected; proves usable Web Client + Select Form closed + no Form panel; does not prove Designer state).
- **Allowance:** ambiguity recovery fresh-snapshot used 0/1, corrected-inspection used 0/1; initial Open 0/1; final Cancel 0/1; reopens 0.
- **Knowledge state:** EXP-033 procedure remains observed/candidate_procedure; nothing replay_verified yet. AC-1 worker-identity part satisfied; AC-1 preflight part satisfied for T1 (Open accounting continues in the next task).
