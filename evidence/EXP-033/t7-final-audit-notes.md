# T7 — FINAL AUDIT ONLY (Run R-20261007-212336-By3J, cycle 8)

Permitted actions: one planned pre-Cancel final rendered capture of the state left by
T6; at most ONE ordinary Cancel solely to dismiss Select Form; post-Cancel read-only audit
(dialog dismissed + inherited Web Client/Designer state preserved); repository confinement
audit; AC-1..AC-6 reconciliation. Prohibited here: typing, clearing, filter-control changes,
Enter/OK, result-row interaction, reopen, Save/close/reopen of any Form, authentication,
preference change, unload.

## Pre-Cancel final capture (normal evidence capture; NOT recovery)

Fresh current-reference snapshot (depth-limited) BEFORE any action established:
- Tab 0 (current): authenticated live Web Client portal frame; URL host `mingle-portal.se1.inforcloudsuite.com`,
  query `?favoriteContext=FX_ComponentRecoveryLab03`; active iframe = Web Client.
- In-Web-Client scope visible and selected: identity bar button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`,
  Explorer tree (My/Master/Public/User Folders), toolbar with Open enabled and Save/New/Delete/Refresh etc. disabled,
  Designer buttons present; selected tab heading `FX_ComponentRecoveryLab03` + Close Panel control.
- Tab 1: ONE usable Designer client at `...designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab03` — untouched this run since T1 preflight read.
- Select Form dialog subtree (dialog ref f3e79): textbox [active] ref f3e402 = exact `FX_SelectFormKeyboardProbe01`;
  Filter By combobox ref f3e408 = `Name`; checkbox "Case Sensitive" (f3e412) unchecked; checkbox "Starts With" (f3e417) unchecked;
  grid header Caption|Name + grid body node f3e94 with NO row children → ZERO visible rendered rows;
  toolbar buttons OK/Cancel/Help present unpressed. This is T6's settled corrective state, preserved exactly.

Decisive pre-Cancel screenshots:
- `t7-01-pre-cancel-settled-dialog.png` (inspected): dialog titled "Select Form"; grid header Caption (with sort arrow) | Name;
  BLANK grid body = zero visible rows; Filter field selected showing left-truncated `ectFormKeyboardProbe01` — VISIBLY lowercase-b form;
  Filter By dropdown "Name"; Case Sensitive and Starts With checkboxes visibly empty; OK/Cancel/Help present unpressed.
  Proves: final pre-Cancel rendered state (zero-row view + settings + lowercase-case text); does NOT prove textbox exactness alone
  (exact value from the accessibility snapshot line `textbox [active]: FX_SelectFormKeyboardProbe01`).
- `t7-02-pre-cancel-settled-viewport.png` (inspected): full Web Client viewport: identity bar, DEM badge, Explorer toolbar clean,
  Explorer tree intact, selected panel heading `FX_ComponentRecoveryLab03`; Select Form centered with same zero-row grid.
  Proves scope/identity/framing of the final state; proves nothing about database inventory.

## Cancel action (performed next; exactly one)

- One ordinary supported Cancel on the rendered dialog button ref f3e423 (`button "Cancel"`), solely to dismiss Select Form.
- Result: dialog dismissed on first attempt; no retry needed. Cancel count: 1/1 consumed (final-audit allowance).

## Post-Cancel read-only audit

- `find "Select Form"` after Cancel: NO MATCHES anywhere in the page → dialog fully dismissed (not hidden-panel ambiguity; whole-page accessibility tree searched).
- Fresh viewport screenshot `t7-03-post-cancel-viewport.png` (inspected): full Web Client — identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer toolbar clean with Open/Save/New/etc. buttons in inherited states, Explorer tree intact (My/Master/Public/User Folders), selected panel heading `FX_ComponentRecoveryLab03` + Close Panel control present; NO dialog anywhere → supports dismissed-dialog state + preserved scope/identity. Proves nothing about Designer tab content (tab 1 untouched — URL/identity from snapshot).
- Tab 1 audit: single usable Designer client, URL still `&MGForm=FX_ComponentRecoveryLab03`; no navigation/save/close/reopen actions were performed on it this run.
- Network corroboration: whole-run non-static mutation/unload filter (`SaveChanges|AddForm|Delete|Unload`) = ZERO requests → no SaveChanges/AddForm/Delete/Unload fired; Cancel dismissed the dialog client-side with no mutation request. Absence recorded as observation only; not proof of server behavior beyond observed requests.
- No authentication/session-establishment action performed at any point in EXP-033 (T1 digest states session was already live); no User Preferences change attempted; no `Unload All Global Form Objects` invocation.

## Repository confinement audit (see harness git status run)

- `git status --porcelain`: only pre-existing unrelated modified paths under `tools/learning-harness/**`
  (README.md, harness.config.example.json, src/shadow/cli.ts, src/shadow/runner.ts, test/shadow.test.ts — untouched by EXP-033)
  plus new untracked `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md` and `evidence/EXP-033/`.
- All EXP-033 writes confined to the two permitted paths.

## Final cumulative counts (whole run)

- Initial Open: 1/1 consumed (T1 solely to enter; dialog was initially CLOSED).
- Reopens after initial Open: 0. Tested Cancel/reopen cycles between tests: 0.
- Filter-set input attempts: 2 (+1 corrective = T4 wrong-literal historical extra + T6 corrective pass; positive control T2 = 1).
- OK/Enter presses: 0. Result-row activations/double-clicks: 0. Form actions (Save/New/etc.): 0.
- Final dismissal Cancel: 1/1 consumed (T7, solely to dismiss; no reopen after).
- Shared ambiguity-recovery allowance (one fresh untargeted snapshot + one corrected visible inspection): 0/1 consumed through T7 — all inspections were planned current-reference checks/guards/evidence captures; no stale-ref error occurred; post-Cancel `find` + screenshot are planned audit captures, not recovery.

## AC-1..AC-6 reconciliation (original kickoff IDs only)

- AC-1 preflight/open-state preservation: COMPLETE — T1 recorded initially-CLOSED state, one ordinary Open to enter, inherited textbox/Filter By/checkboxes/stale row captured with zero changes; throughout the run no Mongoose artifact created/modified/saved/closed/reopened (zero SaveChanges-class network evidence + no such actions).
- AC-2 exact positive-control native input + exact visible row: COMPLETE — T2: Ctrl+A+Backspace clear + 25 one-printable-char ops = `FX_ComponentRecoveryLab02`; settled grid exactly ONE row Name exactly the string (t2-01/t2-02 inspected).
- AC-3 exact corrected probe input + zero visible case-insensitive Name matches, limited to this UI state: SATISFIED — T6: 28 one-char ops with lowercase `press("b")` landed exact literal; settled fresh subtree grid body NO row children → ZERO visible rows; targeted find = exactly one match (the filter value itself); limitation explicitly acknowledged: observation restricted to this inspected live UI state, no database-absence/uniqueness claim.
- AC-4 both exact strings cleared Ctrl+A/Backspace + one printable char per successful native key op; T4 wrong-literal retained as historical extra action; prohibited bulk/paste/JS/Enter/OK/result-row/lifecycle-retry absent: COMPLETE — per-op logs in t2/t4/t6 notes; T4 preserved, not rewritten; zero fill/bulk/paste/JS/run-code/store calls and zero Enter/OK/row-activation across the run.
- AC-5 shared ambiguity-recovery budget for whole run: 0/1 consumed — expected outcome honored; no recovery became necessary through T7.
- AC-6 final state, ≤1 final Cancel, no reopen, confinement, no artifact mutation: COMPLETE — dialog dismissed (find zero matches + t7-03 inspected); Cancel 1/1 exactly; reopen 0; writes only permitted paths (pre-existing harness worktree changes noted untouched); zero SaveChanges-class requests run-wide.

## Classification

Successful keyboard-filter behavior = **observed** (first execution this run) — candidate_procedure for native clear+one-char-per-key filter typing incl. zero-match settled view; NOT replay_verified; NOT proof of server refresh/requery mechanics beyond observed GetAllForms corroboration; zero-row result NOT proof of database absence/uniqueness.
