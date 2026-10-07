# EXP-030 T1 — read-only preflight and preservation audit notes

Run: R-20261007-195234-KQJh, cycle 1, task T1. Date: 2026-10-07.
Experiment: additional confirming replay of the EXP-027/EXP-027-R2 Button Name + property-grid Type-label recovery procedure (already replay_verified by EXP-027-R2). No new capability tested.
Target (not touched in T1): Form `FX_ButtonTypeRecoveryLab01`, Button `FX_ButtonTypeRecovery01`. Editing scope: User.

## A. Procedure review before mutation (read, not executed)

- EXP-027 canonical record (`experiments/EXP-027-button-component-recovery-in-a-self-contained-desi.md`): single observation; lifecycle 1 create / 1 Button / 1 Name assign / 1 Save / 1 close / 1 recent-forms reopen; post-reopen Name `FX_ButtonRecovery02` + Type `PushButton` equal to pre-close. Nuances recorded there: stale component-selector combobox after rename (refreshed after reopen); reopened component not auto-selected (one selection click needed).
- EXP-027-R2 accepted clean replay (`experiments/EXP-027-R2-clean-replay-button-component-recovery-in-a-self-c.md`): same lifecycle on `FX_ComponentRecoveryLab03`/`FX_ButtonRecovery03`; AC-1..AC-8 PASS; finding promoted **replay_verified (scoped)**: User scope only, single native Button type only. Its Select Form mechanics (T2): positive control `FX_ComponentRecoveryLab02` returned exactly one rendered row when the filter textbox already held that exact string at dialog open; fill alone did not re-render rows for a changed value; target zero-row result settled by fresh accessibility snapshot + inspected screenshot.
- EXP-019-R2 (replay_verified): fresh "Form Wizard Selection" dialog via Designer New; Category Classic and Wizard Build-from-Scratch selected by clicking rendered dropdown options only (no typing); single OK -> first Build-from-Scratch wizard page, Name empty.
- EXP-002 / EXP-002-R2 (verified create-basic-form recipe): wizard Name fill -> Next -> uncheck Save Template (default checked; first uncheck click may be intercepted by the Ext displayEl span - corrected click on the visible checkbox box) -> Finish -> "Process Completed Successfully" -> OK; Finish persists immediately, form opens with Save disabled.
- EXP-003 / EXP-003-R2 (verified add-component-from-toolbox + configure-basic-component): Toolbox Button row click arms; one native canvas click places (generated `button1_USER`, itemId `bt2`, typeCode 8, 114x34); Name-only edit = double-click Design.Name value cell -> inline editor -> fill + Enter (`updcompprop` commits server-side; do not verify via stale local compDef); property-grid Type label for a Toolbox Button renders `PushButton` (Toolbox label "Button"; model ctrl "button").

## B. Worker/session identity

- Harness log `tools/learning-harness/data/logs/harness.jsonl`, event `worker.session_created` ts 2026-10-07T11:53:20.279Z, run_id R-20261007-195234-KQJh, session `ses_ee9c9ff6bffebD2xDO1DnlAMke`.
- Distinct from EXP-027 worker session `ses_eea6d6124ffes94Z5Ncy8SwXYM` and EXP-027-R2 worker session `ses_eea48b294ffewiRJGXFlT7uTdC`. Freshness = new OpenCode conversation; browser NOT restarted; retained usable Designer NOT replaced.

## C. Controlled browser context enumeration (read-only)

`browser_tabs list`: exactly two tabs.
- Tab 0: Mongoose portal tab `.../c51080bc-3191-4598-9894-39e1b84f8e87?favoriteContext=FX_ComponentRecoveryLab03` - authenticated Web Client live; runtime form panel `FX_ComponentRecoveryLab03` open; header identity button `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar Open enabled, Save/New/Delete/Refresh/FiP/etc. disabled (clean); no Select Form dialog before the Open click below.
- Tab 1: Web Designer at `designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab03`. Fresh snapshot: form-tab tablist = Lab02 + Lab03 (selected) with close controls; Design toolbar Save/Regenerate Form/Undo/Redo all disabled (clean); Properties Component grid for the selected Lab03 Button: Name `FX_ButtonRecovery03`, Type `PushButton`, From Device Master True, Caption cell empty; component selector textbox refreshed `FX_ButtonRecovery03 (Button)`; Toolbox tree intact incl. **Button** row under Framework Components; status bar `[ ScopeType: User / ScopeName: <signed-in user> ]`. No dialog/prompt/dirty state anywhere.

Preservation audit: both inherited Forms (`FX_ComponentRecoveryLab02`, `FX_ComponentRecoveryLab03`) and their Buttons left untouched in T1; no close/save/discard/repair action on any inherited Form or dialog. Screenshots t1-01 (Designer visible tab, User-scope bar) and t1-02 (Web Client live/clean) inspected: they show the usable retained workflow + visible User scope; they do not prove target absence.

## D. Live Select Form workflow and positive control

Sequence (all read-only):
1. One native click on Web Client toolbar **Open** -> one Select Form dialog with Caption/Name columns. Inherited filter textbox already contained exact `FX_ComponentRecoveryLab02`; Filter By combobox = Name; "Case Sensitive" checkbox rendered WITHOUT [checked] (visibly unchecked); "Starts With" unchecked; grid rendered exactly ONE row: Caption/Name both `FX_ComponentRecoveryLab02`.
2. Positive control settled at open with the known-existing exact Name already applied: one targeted dialog snapshot + one screenshot (t1-03) both show the same settled single rendered row for that exact filter string, Case Sensitive visibly unchecked. This reproduces EXP-027-R2's accepted positive-control evidence for `FX_ComponentRecoveryLab02`.
3. Target query: ordinary fill of exactly `FX_ButtonTypeRecoveryLab01` into the Filter textbox (no Enter, no OK). First settled inspection (targeted dialog snapshot): textbox renders exact full string; grid still shows the stale pre-fill row. Corrected bounded inspection (one fresh untargeted page snapshot): same state - filter textbox exact `FX_ButtonTypeRecoveryLab01` in the accessibility snapshot, Filter By=Name, Case Sensitive visibly unchecked, and the grid still renders only the stale row `FX_ComponentRecoveryLab02` (screenshot t1-04 records this settled state; its filter field renders truncated as `...uttonTypeRecoveryLab01` at the left edge - exact string from the snapshot).
   - Observed mechanic: fill alone does not re-render filtered rows in this build (documented behavior from EXP-027-R2 T2, EXP-028 T1/T2 and EXP-029 T1; also recipe pitfall "Filter textbox does NOT live-filter the grid").
   - Therefore the visible rendered row set under the target filter is stale content: ZERO rows match `FX_ButtonTypeRecoveryLab01` case-insensitively in the inspected result (the only rendered row, `FX_ComponentRecoveryLab02`, matches neither at open nor after target fill). The positive control establishes that a known-existing Name IS present and renderable under these same settings.
   - Limitation recorded: the row set did not refresh to a settled filtered view for the changed filter text within the bounded inspection; the absence conclusion is "no visible case-insensitive Name match" in this inspected result, not an independently refreshed zero-row view.
4. Network audit (read-only): this task's new requests = `FormsApi/GetAllForms` #221/#228/#256 (Select Form refresh; body `{"isInDesigner":false}`); ZERO `SaveChanges`; the prior-session #213 GetForm / #214 SaveUserPref / #215 GenerateServerEvent match EXP-028's recorded inherited Lab03 activation bookkeeping (identical indices/body semantics) and precede any T1 action. No target-side mutation request.

Repository scan: `FX_ButtonTypeRecoveryLab01` appears in no experiment/recipe/evidence record (only the harness brief + this run's messages) - repository signal only, not server proof.

## E. AC-1 status and next permitted action

AC-1 preflight guards substantially proven: fresh distinct worker session identity; inherited state preserved untouched; usable authenticated Web Client + one retained usable User-scope Designer (no relaunch); live populated Select Form with positive-control single rendered row for `FX_ComponentRecoveryLab02` (Case Sensitive visibly unchecked) reproduced from accepted EXP-027-R2 evidence; target absence proven at the level "zero visible case-insensitive Name matches in the inspected Select Form result" under Filter By=Name, Case Sensitive visibly unchecked (settled fresh snapshot + inspected screenshot t1-04).

Open limitation: unlike EXP-027-R2 T2 (whose inherited textbox already matched its target at open and settled a header-only grid), this dialog did not refresh rows to a settled target-filtered view; the zero-match is over stale rendered content. Next task must re-confirm absence (e.g., by reopening Select Form with the filter state settling at open, per EXP-027-R2's working mechanic) before any creation, or treat AC-1 as fully proven only if such a refreshed/settled view is obtained.

Next permitted action (not performed in T1): reopen/refresh Select Form to obtain a settled target-filtered view, then T2/T3 creation of `FX_ButtonTypeRecoveryLab01` per the verified procedure.

## F. Action counts this task (T1 only)

Tab select 2; snapshots: fresh tab0, fresh tab1, targeted dialog x2, fresh untargeted (corrected inspection); screenshots 4; Open click 1; filter fills 1 (target text only); OK/Enter presses 0; Cancel clicks 0; Designer-side clicks 0; mutations 0.
