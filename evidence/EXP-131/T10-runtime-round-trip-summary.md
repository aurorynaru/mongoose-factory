# EXP-131 T10 - One runtime open of FX_BridgeTest, one FX_BridgeButton activation, one runtime close without saving (2026-10-25)

Harness header: `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=11`, `task=T10`. Bounded instruction: review T9; preserve the clean Designer; establish the Web Client console baseline and session state; record inherited runtime Forms; open exactly one runtime FX_BridgeTest through the Web Client Select Form workflow; inspect rendering before activation; activate FX_BridgeButton exactly once; capture the output; close only the experiment-opened runtime Form without saving; verify the Designer still has FX_BridgeTest open with Save disabled.

## 1. Inputs read before action

- `evidence/EXP-131/T9-close-reopen-readback-summary.md` (Designer state after the T8 Save and T9 reopen; `V(UserCtrl_FX_BridgeControl)`; stale `userControl1_USER` variables present; compile not confirmed).
- `recipes/forms/create-basic-form.md` Verification steps 1-4: Web Client **Open** → Select Form → double-click the row (OK activates the first row, so it is not used); identity via Help → About This Form (not performed in T10; see section 7).
- `recipes/session/session-expiry-and-stale-designer.md` (session-expiry handling; not needed, no expiry observed).
- `UserControl.js` was NOT opened or inspected. No browser JavaScript, evaluate or run-code was written by the worker.

## 2. Tab handling

- Tab list read first (read-only): tab 0 = Designer (`FX_BridgeTest`); tab 1 = portal tab `Mongoose` (Web Client).
- Tab 1 selected (succeeded on first attempt). Tab 0 selected later for the Designer check (succeeded).

## 3. Preflight (Web Client, before mutation)

| Check | Readback | Result |
| --- | --- | --- |
| Tab / page | Tab 1 selected; page title `Mongoose`; header tab `Mongoose` selected (`t10-00-web-client-fresh-preflight-snapshot.md`) | Usable shell |
| Signed-in account | Header button `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | Same account as T1 |
| Session | No "Session Expired" modal, no Infor sign-in node, no logout text in snapshot | No expiry; no re-authentication |
| Portal banner | None in snapshot | None to dismiss |
| Inherited runtime Forms | Main region empty; no Form tab in the runtime tablist (only the `Mongoose` portal tab) | **No inherited runtime Forms were open** before the experiment open |
| Console (Web Client) | `3 errors, 10 warnings` (same as T1 baseline `t1-*`) | Matches baseline |
| Console (Designer, tab 0) | `2 errors, 0 warnings` (T9 end state, not re-read before the open) | Baseline from T9 |

Error-level console messages at baseline (tool list, 3 of 40 total): three `Permissions policy violation: unload is not allowed in this document` errors from `default-app.js`, `wswebform-app.js` and `yggdrasil-core.js` (Web Client portal). These match the T1 baseline.

Preflight passed. The stop rule was not triggered.

## 4. Runtime open (one instance)

1. Web Client **Open** toolbar button clicked once (`f1e23`). Select Form dialog appeared (`t10-01-select-form-dialog-snapshot.md`).
2. The Select Form filter textbox already held `FX_Bridge` (dialog state carried over from an earlier session; **not typed in T10**). Name filter, Case Sensitive and Starts With unchecked. The grid showed exactly one row: Caption `FX_BridgeTest`, Name `FX_BridgeTest`.
3. That row was double-clicked once (`f1e108`). The dialog closed. URL gained `favoriteContext=FX_BridgeTest`. A runtime tab with heading `FX_BridgeTest` appeared, selected.
4. Identity: tab heading `FX_BridgeTest` (`t10-02-runtime-open-after-dblclick-snapshot.md`, `t10-03`). Help → About This Form was **not** opened (it would add a modal; the brief asks for visible identity and the tab heading plus URL establish it).

## 5. Pre-activation rendering check (read-only)

- Snapshot `t10-02`: tab panel contains an iframe with `button "FX Bridge Test"` (FX_BridgeButton). No dialog.
- Screenshot `t10-03-runtime-form-before-activation.png`: runtime Form heading `FX_BridgeTest`; button `FX Bridge Test` rendered at mid-left of the form area, dark text, bordered, not obscured; **no text beneath the button** (output element empty); Save toolbar icon greyed (no runtime change). Header shows the same account.
- Judgement: the button rendered and looked safe to activate (visible, not obscured, enabled-looking). Enabled state is inferred from appearance; the accessibility tree did not report it as disabled.
- Console at this point: 3 errors / 10 warnings (unchanged).

## 6. Single activation and observed output

- **Activation count: 1.** One ordinary click on the `FX Bridge Test` button (ref `f2e2`). No second click, no reload, no other invoke.
- Snapshot `t10-04-after-single-activation-snapshot.md`: button still present; no dialog; no error element.
- Screenshot `t10-05-runtime-form-after-single-activation.png`: the button is still rendered and beneath it the visible text **`0`**. The literal `FX_ECHO:bridge-probe` is **not** displayed anywhere in the viewport.
- Before activation the output area was empty (`t10-03`). After activation it reads `0`. The output therefore changed, but not to the expected literal.
- Console after activation: footer `3 errors, 10 warnings`; error-level list identical to baseline (the same three "unload" permissions-policy messages); tool total `40` before and after. **No new console entries from the activation.** Stop rule not triggered.

### Runtime bridge classification

**Unsuccessful at the observed level.** After exactly one activation, FX_BridgeOutput showed `0` rather than `FX_ECHO:bridge-probe`. The root cause is **unresolved**. The worker did not inspect `UserControl.js`, did not evaluate script, and did not retry or try another invocation. Possible explanations (not tested, not distinguished by this evidence): the candidate `WSForm.invoke("FX_Echo", "bridge-probe", callback)` contract may not match the runtime API; the callback may receive a value other than the expected string; the displayed `0` may come from a different write or default. The screenshot cannot tell these apart.

## 7. Runtime close (one), without saving

- Clicked the runtime tab's own close control `Close Panel FX_BridgeTest` (`f1e150`) once. No save prompt; no dialog.
- Snapshot `t10-06-after-runtime-close-snapshot.md`: runtime tablist shows no Form tab; no dialog text; Save disabled.
- Screenshot `t10-07-web-client-after-runtime-close.png`: Web Client back to the empty shell (Explorer, empty main region, Save greyed). Header shows the same account. URL still carries `favoriteContext=FX_BridgeTest` (URL state only).
- Inherited runtime Forms: none were open before, none are open after. Preserved.

## 8. Designer check after runtime close (read-only)

- Tab 0 selected. Snapshot `t10-08-designer-after-runtime-close-snapshot.md`: tab `closable FX_BridgeTest` present; Save `[disabled]`, Undo `[disabled]`, Redo `[disabled]`; Name `FX_BridgeTest` (Properties); Version `User version for user anton.ramos@3mworks.com.ph`; Script Language `Visual C#`; `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Console `2 errors, 0 warnings`; no dialog.
- Screenshot `t10-09-designer-after-runtime-close.png`: Designer with FX_BridgeTest open, Save greyed, Details on the Variables tab (view state from T9). Shows the Form - Persistent list with `UserCtrl_FX_BridgeControl`, `UserCtrl_userControl1_USER`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlAsm_userControl1_USER` (the remaining rows are below the visible area). Nothing edited.
- Designer state: clean, User scope unchanged, no worker-attributable unsaved change.

## 9. Browser actions and reads (T10, exact)

- **Browser actions: 6.** Tab select 2 (tab 1; tab 0). Clicks 4: Web Client Open; Select Form row double-click (one double-click action); FX_BridgeButton activation; runtime tab close. Text entries 0. Key presses 0. Reconciliation: 2 + 4 = 6.
- **Browser reads: 13.** Tab list 1; snapshots 6 (`t10-00`, `t10-01`, `t10-02`, `t10-04`, `t10-06`, `t10-08`); screenshots 4 (`t10-03`, `t10-05`, `t10-07`, `t10-09`); console reads 2 (warning-level list, error-level list). Reconciliation: 1 + 6 + 4 + 2 = 13.
- **Button activations: 1.** Runtime opens: 1. Runtime closes: 1. Designer Save: 0. Undo/Redo: 0. Regenerate: 0. Delete (Designer top toolbar): 0. Check In/Out: 0. Asset edits: 0. Form Script edits: 0. Component edits: 0. Reloads/navigations: 0. Recovery snapshot allowance: not used (exhausted since T2).
- **Browser JavaScript / evaluate / run-code written by the worker: 0.**

## 10. Console comparison

| Reading | Web Client | Designer |
| --- | --- | --- |
| Preflight, before Open (`t10-00`) | 3 errors / 10 warnings | (T9 end) 2 errors / 0 warnings |
| After Open and dialog (`t10-01`) | 3 / 10 | not read |
| After double-click (`t10-02`) | 3 / 10 | not read |
| Before activation (`t10-03`) | 3 / 10 | not read |
| After the single activation (`t10-04`, error list) | 3 / 10; 40 total, unchanged | not read |
| After runtime close (`t10-06`) | 3 / 10 | not read |
| Designer after runtime close (`t10-08`) | not read | 2 errors / 0 warnings |

Net change in the Web Client console: none. Net change in the Designer console: none. The tool log `evidence/playwright/console-2026-10-25T13-29-49-582Z.log` and `...583Z.log` is cumulative and not like-for-like with the footer counters.

## 11. Evidence files (T10)

Worker-named (under `evidence/EXP-131/`):
- `t10-00-web-client-fresh-preflight-snapshot.md`: Web Client shell, account header, no session dialog, no runtime tabs. Supports AC-1 (T10 preflight). Does not prove the stored definitions.
- `t10-01-select-form-dialog-snapshot.md`: Select Form dialog with one FX_BridgeTest row under the carried filter. Supports identity of the row before double-click.
- `t10-02-runtime-open-after-dblclick-snapshot.md`: runtime tab `FX_BridgeTest` selected; iframe with button `FX Bridge Test`. Supports AC-6 identity and button presence.
- `t10-03-runtime-form-before-activation.png`: runtime heading `FX_BridgeTest`, button rendered, output empty, Save greyed. Proves the pre-activation state only.
- `t10-04-after-single-activation-snapshot.md`: post-activation accessibility state; button present; no error element; no dialog. Does not show the output text (the output is a plain text node not captured in the accessibility tree).
- `t10-05-runtime-form-after-single-activation.png`: runtime form after the single activation; visible output **`0`** under the button; no `FX_ECHO:bridge-probe`. Decisive for the unsuccessful outcome; does not show why.
- `t10-06-after-runtime-close-snapshot.md`: no runtime Form tab; no dialog; Save disabled.
- `t10-07-web-client-after-runtime-close.png`: empty Web Client shell after runtime close.
- `t10-08-designer-after-runtime-close-snapshot.md`: Designer FX_BridgeTest identity, User version, Visual C#, User scope, Save/Undo/Redo disabled, console 2/0.
- `t10-09-designer-after-runtime-close.png`: Designer clean with FX_BridgeTest open; Variables tab visible.
- This file: `T10-runtime-round-trip-summary.md`.

Tool-generated (not worker-named): `evidence/playwright/page-2026-10-25T13-30-10-503Z.yml`, `page-2026-10-25T13-30-21-457Z.yml`, `page-2026-10-25T13-30-37-631Z.yml`, `page-2026-10-25T13-30-51-621Z.yml` (per-action snapshots); `evidence/playwright/console-2026-10-25T13-29-49-582Z.log`, `console-2026-10-25T13-29-49-583Z.log` (cumulative console logs).

Not touched: the two T6 snapshots `evidence/playwright/t6-snapshot-after-fx-bridge-expanded.yml` and `evidence/playwright/t6-snapshot-reopened-asset-dialog-expanded.yml` (operator disposition pending).

## 12. Acceptance (T10 view)

- **AC-1:** T10 preflight (section 3): Web Client account header, usable shell, no session dialog, console 3/10 equal to the T1 baseline, no inherited runtime Forms. The T1 account-isolation gate is not re-run (the operator confirmed ownership at T1 disposition).
- **AC-2:** supported by T9 (`t9-04`, `t9-20`) and T10 (`t10-08`, `t10-09`): FX_BridgeTest identity, User version, User scope and Save disabled.
- **AC-3:** supported by T9 (`t9-14`, `t9-15`). Not re-read in T10. The candidate call is still candidate.
- **AC-4:** supported by T9 (reference and FX_Echo readbacks). Not re-read in T10.
- **AC-5:** unchanged from T9 (same-session boundary; not database durability).
- **AC-6:** the runtime screenshot `t10-03` and `t10-05` show the FX_BridgeTest identity, the test button and the output element area. After exactly one activation the output shows `0`, **not** `FX_ECHO:bridge-probe`. Classified **unsuccessful at the observed level**; root cause unresolved; no retry.
- **AC-7:** the runtime Form was closed without saving (`t10-06`, `t10-07`); no unexpected dialog; inherited Forms preserved (none existed); Designer Save disabled and no worker-attributable unsaved change (`t10-08`, `t10-09`).
- **AC-8:** manifest content is in the experiment record (T10 section) and sections 9-11 above.

## 13. Limitations and unresolved items

- **Root cause of the `0` output:** unresolved. Not tested; the brief forbids alternative invocation signatures and inspection of `UserControl.js`.
- **Identity check:** About This Form not opened; identity rests on the runtime tab heading and the URL `favoriteContext=FX_BridgeTest`.
- **Button enabled state:** inferred from rendering and the accessibility tree (not disabled). No click before the single activation.
- **Output element:** the empty `div` is not in the accessibility tree; its text was read from the screenshot only.
- **FX_Echo compilation:** still not confirmed (T9). The runtime output `0` is not evidence about compilation either way.
- **Stale generated variables** `UserCtrl*_userControl1_USER`: unchanged; runtime significance unknown.
- **Persistence:** same-session UI only. Not database-level durability. Not cross-account equivalence.
- **Designer console:** not read between the runtime open and close (only before and after), so the two-step Designer count is endpoint-only.
- **Save Template at T2:** still unchecked (T9 open question).
- **Two T6 snapshots outside `evidence/EXP-131/`:** pending operator confinement disposition.
