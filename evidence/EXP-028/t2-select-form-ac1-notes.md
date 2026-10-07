# EXP-028 T2 — live Select Form AC-1 completion notes (read-only)

Run: R-20261007-182351-hVYe cycle 2 task T2. Date: 2026-10-07. No Mongoose artifact created or modified.

## Fresh context re-inspection (before any dialog action)

- browser_tabs list: two tabs unchanged — tab 0 Web Client URL `...?favoriteContext=FX_ComponentRecoveryLab03&LogicalId=...`
  (the inherited T1 runtime-open state; left untouched), tab 1 Designer URL still `...&MGForm=FX_ComponentRecoveryLab03`.
- Fresh untargeted snapshot of tab 0: Web Client toolbar Open enabled, Save/New/Delete/Refresh/FiP/etc. disabled (clean);
  main region shows panel tab `FX_ComponentRecoveryLab03` selected with Close Panel control (inherited activation state,
  untouched); Explorer tree intact; NO Select Form dialog at task start.
- Designer (tab 1) was NOT selected/inspected again this task; its URL in the tabs listing remains unchanged — preserved.

## Dialog sequence (counts: Open×1, fills×2, OK×0, Enter×0, Cancel×1)

1. One native click on toolbar `Open` → exactly one fresh `Select Form` dialog.
   At open (bounded snapshot): textbox inherited T1 doubled text `FX_ComponentRecoveryLab02FX_ComponentRecoveryLab02`;
   Filter By combobox = `Name`; Case Sensitive + Starts With checkboxes visibly unchecked; grid ref `f3e94` rendered
   header-only with empty inner rows container (settled for the stale doubled non-matching text).
2. Positive-control fill attempt: `fill('FX_ComponentRecoveryLab03')` (select-all+replace; no Enter). Two fresh dialog
   snapshots after: textbox renders EXACT `FX_ComponentRecoveryLab03`; grid remains header-only/empty inner container.
   Determination: the dialog does not re-render matching rows on filter-text change alone → the decisive positive control
   (displayed text ↔ rendered matching row in the same settled state) could NOT be established within this bounded attempt
   without a second settling interaction (not permitted). Recorded as an explicit limitation; not retried. The one corrected
   settling interaction allowance was consumed by this fill.
3. One supporting read-only frame enumeration (one corrected bounded inspection): tab 0 contains exactly ONE iframe
   (`mongoose_46_c51080bc-...`, src `mgapse1ap.../WSWebClient//def...`) — no embedded second Designer/Web Client instance;
   tab 1 is the separate, untouched Designer. Network audit: T1 dump (`t1-network-requests-nonstatic.txt`) has ZERO
   `SaveChanges`; its requests #213 `FormsApi/GetForm` + #214 `AppApi/SaveUserPref` accompany the inherited Lab03
   activation; no new Designer-side request attributed to this task.
4. Target query: one fill of EXACTLY `FX_ButtonCaptionLab02` (no Enter, no OK). Settled accessibility snapshot: textbox
   renders the exact full string; grid = columnheader row only, inner rows container empty → ZERO rendered data rows;
   Filter By=Name, Case Sensitive visibly unchecked. Decisive screenshot t2-01 inspected: filter box fully visible and
   untruncated showing `FX_ButtonCaptionLab02`; dialog body below the Caption/Name header row shows no row; OK/Cancel/Help
   visible, not pressed; User identity header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` and
   DEM badge visible in frame.
5. One Cancel click → `find "Select Form"` returns no matches: dialog dismissed cleanly.

## Interpretation (proof vs unresolved)

- Proven: live server-backed Select Form with Filter By=Name, Case Sensitive visibly unchecked, exact target string
  committed by ordinary fill → settled zero rows. Combined with T1's demonstrations that the same dialog renders exactly
  one row for an existing form and header-only for a committed non-matching value, this establishes case-insensitive
  Name-filter absence of `FX_ButtonCaptionLab02` in the live store. No target match appeared; not blocked.
- Unresolved/recorded limitation (does not gate AC-1's zero-match): settled positive-control row↔text correspondence in
  THIS T2 dialog pass; positive-control mechanics themselves (live populated store + single-row renders + non-matching→zero)
  are established across T1/T2 observations.

## Preservation audit

- Designer tab 1: untouched (not selected, no click); URL identical. Inherited Forms FX_ComponentRecoveryLab02/Lab03
  and their Buttons remain as audited in T1.
- Web Client tab 0: inherited Lab03 runtime-open panel state preserved exactly; dialog dismissed via Cancel only.
- SaveChanges count across the live session audit: ZERO. No Designer-side request from this task.

## Next permitted action (T3)

Create exactly one FX_ButtonCaptionLab02 (EXP-019-R2 replay_verified prefix + verified basic-form suffix, Save Template
visibly unchecked), then clean baseline capture before placement.
