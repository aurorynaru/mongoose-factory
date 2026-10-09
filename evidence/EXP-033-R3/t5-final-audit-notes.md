# EXP-033-R3 — T5 final audit notes (2026-10-09)

Scope: pre-dismissal capture, exactly one ordinary Cancel, post-Cancel read-only audit, whole-run reconciliation. No reopen. No Open. No key, no OK, no Enter, no row interaction, no retype, no recovery consumed.

## 1. Worker identity

- Worker session UUID: `60cc08ec-01c4-41cc-9294-26f32bee888e`. Task message `31ace738-7be3-4812-95cf-0431f7ccafe1`. Same worker session as T1 (attempts 1–2) through T4 (operator-confirmed). Distinct from EXP-033 `ses_ee9768333ffeV8zFkrUtEv19U6` and sibling `ses_ee9545a81ffevGqiS17Iix5jM8`.

## 2. Pre-dismissal planned read-only capture (before any lifecycle action)

Reads of the still-open dialog (dialog `f1e77`):
- `find "textbox [active]"`: textbox `f1e99` active, value `FX_SelectFormKeyboardProbe01`.
- `find` regex `/FX_SelectFormKeyboardProbe01/`: 1 match (textbox only; no grid occurrence).
- `find "gridcell"`: **no matches** → grid body has zero row cells.
- `find "Starts With"`: Case Sensitive `f1e109` and Starts With `f1e114` present, no checked state. Cancel button `f1e120`.
- Combobox `f1e105` = `Name`.

Screenshot `t5-01-pre-cancel-settled-probe-state.png` (inspected): dialog open; blank grid body under Caption | Name header; filter text visibly ending `…lectFormKeyboardProbe01`; Filter By `Name`; both checkboxes empty; OK / Cancel / Help unpressed. **Shows:** the final pre-dismissal probe state with zero rows. **Does not show:** the full string (truncated at the field edge; exact value from the regex read).

Conclusion: last settled probe state confirmed unchanged from T4. This is the final pre-dismissal probe state.

## 3. Final ordinary Cancel

- Exactly ONE `browser_click` on the Cancel button (ref `f1e120`, accessibility name "Cancel", inside the Select Form toolbar). No retry.
- Result: dialog dismissed on first attempt (see §4).
- **Final Cancel count: 1 of 1.**

## 4. Post-Cancel read-only audit

- `find "Select Form"`: **no matches** → dialog closed. No reopen performed.
- `browser_tabs list`: one tab, `Mongoose`, same Web Client URL (`…/G6R8LJ9Q4E8C2Z8Y_DEM/c51080bc-…`). No Designer tab present (same as T1 attempt 2 and T2–T4).
- `find "Open"`: toolbar `Open` `f1e23` present and the Web Client toolbar is rendered. Save, New, Delete, and other toolbar buttons remain `disabled`, as in T1.
- Identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` present (`f1e20`); Explorer top-level folders present and collapsed.
- Screenshot `t5-02-post-cancel-viewport.png` (inspected): no dialog anywhere; Web Client identity bar, DEM badge, Explorer tree (My / Master / Public / User Folders), menu bar, and greyed toolbar visible; main area empty. **Shows:** the Web Client is usable with Select Form closed and no Form panel. **Does not show:** any Designer state, since no Designer tab exists in this session.

## 5. Inherited Web Client / Designer state (T1 baseline vs now)

- T1 baseline (attempt 2): one Web Client tab; identity bar; Explorer collapsed; toolbar `Open` enabled, rest disabled; no Form panel; no Designer tab; no dialog.
- Now (post-Cancel): the same. No Form, component, or Designer was opened, closed, saved, created, or modified in R3.
- **Caveat (unresolved):** the sibling R2 record described a second Designer tab at `&MGForm=FX_ComponentRecoveryLab03` and a Lab03 panel. That context is NOT present in R3's session. R3's T1 did not record a Designer baseline to compare against. So "untouched" is established only as "not acted on and the same as the T1 state", not against a Designer tab baseline.

## 6. Whole-run action audit (reconciled from T1–T5 notes)

Clears (native path):
- Positive control: `Control+a` ×1, `Backspace` ×1 (T3 attempt 2).
- Probe: `Control+a` ×1, `Backspace` ×1 (T4).

Printable native key operations (one `browser_press_key` per character; each returned success; none retried or duplicated):
- Positive control: **25**, in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (T3 attempt 2).
- Probe: **28**, in order `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`, with **lowercase `b` at operation 17** (T4). Case confirmed by regex `/FX_SelectFormKeyboardProbe01/` = 1 match and `/FX_SelectFormKeyBoardProbe01/` = 0 matches.
- Non-printable keys: none beyond the two clear keys.

Focus clicks (no keystroke):
- T2: one caret click on textbox (`f1e401`, focus only).
- T3 attempt 1: two clicks on textbox `f1e400`, both timed out (stability check, occluded window). No keystroke was sent. Operator diagnosed the cause (window occluded).
- T3 attempt 2: one planned focus click on textbox `f1e400`; succeeded.
- T4: no focus click (textbox already active at guard).

Dropdown and lifecycle clicks (supported controls; no keystroke):
- T2: Open (toolbar), Filter By trigger, Filter By option `Name`.
- T5: Cancel (one).

Prohibited-action audit (whole run):
- Bulk textbox replacement, fill, bulk typing, clipboard paste: **0**.
- JavaScript / evaluate / run-code / synthetic DOM / internal Ext stores: **0**.
- Enter / OK in Select Form: **0**.
- Result-row click or activation: **0** (row highlighted at open was not clicked; the T2 caret click was on the textbox).
- Tested Cancel/reopen cycles (between positive control and probe): **0**.
- Form/component create, modify, delete, Save, Regenerate, close, reopen: **0**.
- `Unload All Global Form Objects`: **0**.
- User Preference change: **0**.
- Probe object creation (`FX_SelectFormKeyboardProbe01`): **0**.
- Retype after a settled result: **0**.
- Authentication / reauthentication / session establishment by the worker: **0**. See §7 for the operator's pre-attempt-2 sign-in action.
- Navigation or reload by the worker: **0**.

## 7. Session-establishment disclosure (operator action)

- Attempt 1 (T1) found the Web Client on the Infor Sign In / tenant-selection dialog. The worker did not authenticate and stopped.
- Before attempt 2, the OPERATOR selected the configuration and clicked OK (operator-directed precondition, recorded as such by the operator). The worker did not perform this action.
- This is disclosed because AC-1 requires that the inherited Web Client be usable "without session-establishment action". At attempt 1 it was not. See the record's AC-1 qualification.

## 8. Lifecycle counts (whole run)

- Initial ordinary Open: **1** (T2; one toolbar Open; the Open that entered the replay). Allowed: 0 or 1. Consumed: 1.
- Reopens after the initial Open: **0**.
- Tested Cancel/reopen cycles between positive control and probe: **0**.
- Final ordinary Cancel: **1** (T5). Allowed: at most 1. Consumed: 1.
- Subsequent reopen after final Cancel: **0**.

## 9. Recovery accounting (EXP-033-R3, shared; continued from record)

- Fresh untargeted snapshot: **1 of 1 used, 0 remaining**. Used once, in T3 attempt 1 (`t3-recovery-fresh-untargeted-snapshot.md`), to resolve the focus ambiguity.
- Corrected visible inspection: **0 of 1 used, 1 remaining (unused)**.
- T5 used NO recovery. The pre-dismissal capture, post-Cancel audit, and screenshots were planned final-audit captures. The post-Cancel state was clear, so no ambiguity recovery was needed.
- Planned current-reference/focus checks and settled-result captures across T1–T5 are recorded as planned, not as recovery.

## 10. Repository audit

- Bash is disabled in this session, so `git status` could not be run. Confinement below is established from the Glob listing and from the paths written by this worker.
- Files this worker wrote (all permitted):
  - `experiments/EXP-033-R3-clean-replay-select-form-native-keyboard-filter-re.md` (record).
  - `evidence/EXP-033-R3/*` (see listing below).
- Glob `evidence/EXP-033-R3/*` lists only R3 files: T1 (attempts 1–2), T2, T3 (attempts 1–2, including the recovery snapshot), T4, and T5 files.
- Tool-generated files outside the permitted paths: `evidence/playwright/*` (Playwright MCP console and page logs). Not deliberately written by this worker. These are outside the permitted paths and are disclosed here, since the brief asks that repository writes stay confined.
- Pre-existing unrelated changes (from the session-start git status snapshot; NOT re-verified now, NOT modified by this worker):
  - `tools/claude-harness/briefs/EXP-033-R3.brief.json`
  - `tools/claude-harness/briefs/EXP-033-R4.brief.json`
  - `tools/learning-harness/README.md`
  - `tools/learning-harness/briefs/EXP-035.brief.json`
  - `tools/learning-harness/harness.config.example.json`
  - `tools/learning-harness/src/shadow/cli.ts`
  - `tools/learning-harness/src/shadow/runner.ts`
  - `tools/learning-harness/test/shadow.test.ts`
- The brief JSON under `tools/claude-harness/briefs/` was not read (access denied by permission), and was not modified.
- No EXP-033 or EXP-033-R2 record or evidence was modified in R3.

## 11. Evidence files in T5

- `t5-01-pre-cancel-settled-probe-state.png` (inspected)
- `t5-02-post-cancel-viewport.png` (inspected)
- `t5-final-audit-notes.md` (this file)
