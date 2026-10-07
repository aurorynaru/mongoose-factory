# EXP-033-R2 — T1 preflight notes (Run R-20261007-220054-xlTM, cycle 1)

Permitted: repository review first; read-only browser inspection only. No auth/navigation-to-session/Save/close/reopen/filter-change/Cancel/Enter-OK/row-interaction this task. Select Form NOT opened (stays closed; the one permitted initial Open remains available for a later task).

## 1. Worker/session identity (established before browser interaction)

- Harness run: `R-20261007-220054-xlTM`, EXP-033-R2, cycle 1, task T1.
- Current OpenCode worker session ID: **`ses_ee9545a81ffevGqiS17Iix5jM8`** — established read-only from the OpenCode session store (`%USERPROFILE%\.local\share\opencode\opencode.db-wal`): a session record whose title is exactly `EXP-033-R2 R-20261007-220054-xlTM T1`, agent `build`, model `qwen3.8-flash-next-coder-iq1_m`, created during this task (its own session.updated event stream and this task's tool events appear in the store).
- EXP-033 worker: `ses_ee9768333ffeV8zFkrUtEv19U6` — DISTINCT ID (different run R-20261007-212336-By3J). Fresh-worker precondition SATISFIED (fresh = new session for this task; distinct from EXP-033 worker). Caveat per AGENTS.md: a fresh worker does NOT establish a new browser/Mongoose client session nor reset limits; the browser context below is INHERITED, not new.

## 2. EXP-033 repository facts reviewed (before any browser interaction)

From `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md` + `evidence/EXP-033/t7-final-audit-notes.md` (+ T1–T6 entries):

- Reconciled positive control (T2, count reconciled in T3): `FX_ComponentRecoveryLab02` = **25 printable chars** entered as 25 one-printable-char native key ops `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (draft's "27" conflated total ops: 25 printable + Ctrl+A + Backspace = 27); empty-key call executed NO keystroke (documented non-keystroke tool error). Settled grid = exactly ONE row Name exactly the string (gate PASS, observed).
- T4 wrong-literal history: op 18 recorded `press('B')` = UPPERCASE B → settled exact `FX_SelectFormKeyBoardProbe01` ≠ required literal; case mismatch REAL not documentary; probe zero-match AC downgraded to NOT-SATISFIED-BLOCKER for the brief; zero-row observation preserved ONLY as result-for-the-mis-cased string.
- Corrected probe (T6): 28 one-char ops `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`, CORRECTIVE lowercase `press("b")` at op **17** (capital-B position was op 18); zero errored calls; settled textbox exact literal; grid body NO row children → ZERO visible rows; targeted find = exactly ONE match page-wide (the filter value itself).
- Recovery-budget accounting: shared allowance (one fresh untargeted snapshot + one corrected visible inspection) **0/1 consumed** whole EXP-033 run through T7 — all inspections planned; no stale-ref error.
- Final dismissed-dialog state (T7): ONE ordinary Cancel on rendered button → dialog dismissed first attempt; `find "Select Form"` = NO matches page-wide; Web Client scope preserved (identity bar, DEM badge, Explorer tree intact, selected panel heading `FX_ComponentRecoveryLab03` + Close Panel control); tab 1 Designer URL still `&MGForm=FX_ComponentRecoveryLab03`; run-wide ZERO SaveChanges/AddForm/Delete/Unload non-static requests; counts: Open 1/1, reopens 0, tested Cancel/reopen cycles 0, OK/Enter 0, row activations 0, Form actions 0, final Cancel 1/1. Classification observed / candidate_procedure, NOT replay_verified.

## 3. Inherited browser context (read-only inspection)

- Two tabs: tab 0 (current) authenticated live Web Client portal frame at `mingle-portal.se1.inforcloudsuite.com/...c51080bc-...?favoriteContext=FX_ComponentRecoveryLab03`; tab 1 ONE usable Designer at `WSWebClient/designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab03` (untouched; not inspected further).
- Web Client already usable WITHOUT authentication: no login prompt; identity bar visibly reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge visible.
- Fresh untargeted top snapshot + targeted current-ref inspection of the Web Client frame: NO dialog node; `find "Select Form"` = no matches → **Select Form currently CLOSED** (consistent with EXP-031/EXP-033 final dismissals). NOT opened this task; one permitted ordinary Open remains available for a later task.
- Visible inherited state: Explorer tree intact (My/Master/Public/User Folders); menu bar Explorer/Form/Actions/Edit/View/Window/Help; toolbar icon row present with controls in disabled/clean appearance (not individually enumerated at ref level — limitation noted); selected workspace tab heading `FX_ComponentRecoveryLab03` + close control visible. No Forms visibly OPEN as running panels other than the selected Lab03 runtime panel context; no dialog/prompt/banner anywhere.
- Network: Playwright MCP network panel reset at this fresh worker session (this worker's browser page has its own event window); a network audit THIS task would enumerate only inspections since load and be uninformative — skipped; zero mutation actions were performed this task (rendered state matches EXP-033 T7 post-Cancel expectations).

## 4. Evidence files (inspected for usable framing)

- `t1-01-preflight-webclient-dialog-dismissed.png`: full viewport at inspection start — Web Client with NO dialog; proves initially-closed + no prompt (same framing basis as t1-03).
- `t1-02-preflight-explorer-region.png` (Explorer region element crop): shows ONLY the Explorer tree heading + My/Master/Public/User Folders. Deliberate narrow crop; does NOT show identity bar, toolbar, or panel — INSUFFICIENT alone for scope framing (superseded by t1-03).
- `t1-03-preflight-webclient-full-viewport.png` (corrected full-frame capture): full Web Client viewport: identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge top-right, menu bar (Explorer/Form/Actions/Edit/View/Window/Help), toolbar icon row with controls in disabled/clean appearance, selected panel heading `FX_ComponentRecoveryLab03` + close control at workspace tab area, Explorer tree intact, NO Select Form dialog anywhere. Proves: closed-dialog state + inherited scope/identity + clean no-prompt context; proves nothing about filter values (dialog absent) and does not individually legibly resolve each toolbar button's enabled/disabled state at this scale.

## 5. Ambiguity-recovery budget accounting (EXP-033-R2 shared allowance: one fresh untargeted snapshot + one corrected visible inspection)

- Planned inspections: fresh untargeted top snapshot (planned preflight), targeted current-ref frame check (planned, depth-limited), `find "Select Form"` (planned read-only search), element crop `t1-02` + its screenshot-read (planned evidence capture).
- Consumed allowance: **the one corrected visible inspection** — after the Explorer-region crop proved insufficient for scope framing, one corrected full-frame viewport snapshot read + capture (`t1-03`) used. Fresh untargeted snapshot component NOT consumed (top snapshot was planned preflight baseline; no missing-ref error occurred).
- Budget after T1: fresh-snapshot component 0/1 used; corrected-visible-inspection component **1/1 used → 0 remaining** for later tasks. No further recovery inspection permitted this experiment.

## 6. Counts this task (T1)

Initial Open 0 (none performed; one remains available); Cancel/Open/reopen 0; OK/Enter 0; row activations 0; filter-setting ops 0; Save/close/reopen of any Form 0; auth actions 0; preference changes 0; unload invocations 0. Repository writes: this record + `evidence/EXP-033-R2/` only (`git status`: pre-existing unrelated `tools/learning-harness/**` modified paths remain untouched).
