# EXP-035 — T1 read-only preflight notes

Run: R-20261009-204056-HY76, experiment EXP-035, cycle 1, task T1.
worker_session_id: d2542b8f-3084-40fb-9b36-4ac05475c28b (fresh; grep of `experiments/` and `evidence/` found no earlier record of this ID or of task_message_id 70ab916f-b32b-404e-bd56-13bc233811f8).
Scope of this task: read-only prerequisite review and inherited-browser preflight. No Select Form Open, no Filter By / checkbox / textbox action, no typing, no Cancel, no reopen, no Enter/OK, no row interaction, no authentication, no navigation, no tab close, no dialog dismissal, no JavaScript/evaluate.

## §A Records reviewed before browser interaction (repository read only)

- `experiments/EXP-034-select-form-positive-filter-retention-across-cance.md` — BLOCKED. Its T2 `type` call inserted literal `Control+A` text into the Name-filter textbox (prohibited multi-character path). Zero tested Cancel, zero tested reopen, zero final Cancel. Its positive-row observation cannot support any retention conclusion. EXP-035 must avoid the `type` tool entirely for filter entry.
- `experiments/EXP-033-R2-clean-replay-select-form-native-keyboard-filter-re.md` — replay_verified (tested environment/UI workflow only) native-keyboard procedure: caret focus on the Name-filter textbox via current ref → `press_key Control+A` → `press_key Backspace` → one `press_key` per printable character. Positive control `FX_ComponentRecoveryLab02` = exactly 25 printable ops `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (lowercase `b` at op 23; capital `L` at op 21). Settled grid = exactly ONE row, both cells exact. Evidence notes: `evidence/EXP-033-R2/t3-positive-control-notes.md`.
- `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md` — original EXP-033. Supplies the same native-key path; its T4 probe mis-cased one character (`press('B')`), which is history only and irrelevant to the 25-character positive control.
- `experiments/EXP-033-R3-clean-replay-...md` — BLOCKED at attempt 1 by a sign-in requirement; attempt 2 showed a usable Web Client after operator configuration selection. T3 focus could not be established in attempt 1. Used only as a precondition/blocker precedent.
- `experiments/EXP-033-R4-clean-replay-...md` — T5 FINAL pass; repeats the same native-key path (Ctrl+A, Backspace, 25 single-character ops for the positive control; 28 for the probe, not used here). Its ambiguity allowance was 0/1 fresh snapshot + 0/1 corrected inspection at its T5 close.
- `experiments/EXP-035-...md` — did not exist in the working tree before this task (not found by glob `experiments/EXP-035*` or `**/EXP-035*`); the record is created by this task at the path named in the brief.

Procedure for later tasks (carried forward, not executed here): the EXP-033-R2 native-key sequence above, with the constraint from the brief that no chord is sent as text and no multi-character `browser_type`/fill is used.

## §B Browser context inspected (read-only)

1. `browser_tabs` action=list → exactly ONE browser tab: index 0 (current), title `Mongoose`, URL `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/c51080bc-3191-4598-9894-39e1b84f8e87`.
2. Fresh untargeted `browser_snapshot` (taken for this task; no earlier refs reused):
   - Portal top bar with tabs `System Administrator` (portal tab, not a browser tab) and `Mongoose` (selected).
   - Web Client iframe (`iframe [ref=e59]`) containing: heading `Infor Mongoose Application Development Framework`; menu bar Explorer / Form / Edit / View / Window / Help; identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar with `Open` enabled; Save, New, Delete, Refresh, FiP, Get More Rows, System Notes, Documents, Send email, Export To Excel, Help Current Form all disabled; two `Designer` toolbar buttons present (NOT clicked).
   - Explorer region: tree with My Folders, Master Explorer, Public Folders, User Folders (all collapsed).
   - Main content region (`main [ref=f1e76]`) is EMPTY — no open Form panel.
   - Smart Panel complementary region present.
   - No `dialog`, `alertdialog`, or Select Form node anywhere in the snapshot.
3. `browser_find` text `Select Form` → **No matches found**.
4. `browser_find` regex `/unsaved|changes|dialog|sign in|log in|configuration/i` → **No matches found** (no unsaved-change indicator, dialog, sign-in, or configuration text in the accessibility tree).
5. `browser_take_screenshot` viewport → `evidence/EXP-035/t1-01-preflight-webclient-viewport.png` (inspected; see §D).

Observed difference from EXP-034 T1 (recorded, not explained): EXP-034 T1 observed two browser tabs (the Web Client plus a Designer tab at `&MGForm=FX_ComponentRecoveryLab03`) and a `FX_ComponentRecoveryLab03` panel heading with Close Panel. In this task the browser has ONE tab, and the Web Client main region is empty with no Lab03 panel. The cause is not known and is not inferred here.

## §C Prerequisite verdicts

| # | Prerequisite (brief) | Verdict | Basis |
|---|---|---|---|
| P1 | Operator-logged-in Web Client, configuration selected/OK, normal page loaded | **PASS (observed)** for the visible state; the configuration selection itself is operator attestation | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menu/toolbar, Explorer tree rendered; no sign-in or configuration screen; `find` for sign in / log in / configuration = none. |
| P2 | Select Form closed | **PASS (observed)** | `find "Select Form"` = no matches; snapshot has no dialog node; screenshot shows no dialog. |
| P3 | No unsaved Designer changes | **Not independently provable from this browser; no visible indicator in the inherited context.** Operator attestation applies. | Only one browser tab exists, so no Designer tab is visible here. Toolbar Save is disabled and no unsaved-change text was found. Not attempting to prove absence elsewhere, per the brief. |
| P4 | Exactly one browser tab | **PASS (observed)** | `browser_tabs` list returned one entry. |
| P5 | No browser-native dialog | **PASS (observed; limited)** | No browser-native dialog was reported by the tab listing or the snapshot. A native dialog would not necessarily appear in the accessibility snapshot, so this is a limited observation. |
| P6 | Stable inherited context, nothing to dismiss | **PASS (observed)** | No open in-page dialog; no prompt/banner text; main region empty. |

Ambiguity: none that blocks. The only unexpected item is the absence of the Lab03 panel and of the second (Designer) browser tab relative to EXP-034 T1; the brief does not require either.

Preflight verdict: **PASS** — all brief prerequisites that are visibly checkable hold. P3 rests on operator attestation for elsewhere-state, as the brief allows.

## §D Decisive evidence inspected

- `evidence/EXP-035/t1-01-preflight-webclient-viewport.png` (viewed):
  - SHOWS: the full Web Client viewport with the portal top bar (tab `Mongoose` selected), DEM badge, identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, `Explorer` menu bar, greyed toolbar (Open enabled; Save/Delete/etc. greyed), Explorer tree with My/Master/Public/User Folders, and an empty main area. No Select Form dialog is visible.
  - PROVES: P1 (normal Web Client loaded, identity bar visible, no sign-in screen), P2 (Select Form closed in the viewport), P4 is supported by the tab listing rather than by this image, and the inherited context showed no visible unsaved-change indicator.
  - DOES NOT PROVE: anything about filter values (no dialog open), the configuration-selection step itself, the absence of unsaved Designer changes elsewhere (P3), or the absence of native dialogs outside the rendered viewport.

## §E Action counts (this task)

- Initial Open of Select Form: 0 (reserved for the next authorized task).
- Filter By / checkbox / textbox actions: 0. Typing / key operations: 0. Clears: 0.
- Cancel: 0. Reopen: 0. Enter/OK: 0. Row interaction: 0. Form/component actions: 0.
- Browser actions: 0 mutating; read-only actions: `browser_tabs` list ×1, `browser_snapshot` untargeted ×1, `browser_take_screenshot` ×1, `browser_find` ×2.
- Authentication, navigation, tab closure, dialog dismissal, session replacement: 0.
- JavaScript / evaluate / run-code / shell / internal-store use: 0.

## §F Ambiguity-recovery allowance

Used **0** / remaining **1** (fresh untargeted snapshot + one corrected visible inspection, shared across all tasks). No stale-ref error occurred; the snapshot taken for this task was the first and only one used.

## §G Next permitted action

STOP after this read-only preflight (per T1). The single ordinary initial Open of Select Form is reserved for a subsequent authorized task. The next task must begin with a fresh untargeted snapshot before any reference is used.
