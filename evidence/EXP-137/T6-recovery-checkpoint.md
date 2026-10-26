# EXP-137 — T6 read-only recovery checkpoint (after T5 machine restart)

Run `R-20261026-104057-G85J`, cycle 8, task T6. Worker session `93e27632-eec8-4c27-968d-0ac8726ea3b0`, task_message_id `aaebfff8-740e-4389-a034-a1174d5b67a5`. Date 2026-10-26.

**Result: BLOCKED at recovery checkpoint. Restored session identity is not established.** No Mongoose application mutation occurred. The experiment record was not edited.

## 1. Amendment A1 reconciliation (read-only, record not edited)

Read of `experiments/EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md`:

- Header status (line 3) states T5 recorded Amendment A1 and that no wizard, Form, Save, check-in or runtime operation occurred in T5.
- A1 section (lines 19–41) is present and complete: revised route (Data Maintenance Wizard Finish, Create Form **No** once, Form Wizard Classic/MultiView, Caption method, one Designer Save, close/reopen), and the superseded-text markers.
- Line 41 states: "A1 status: recorded. No A1 step has been executed."
- Gate table rows AC-4 and AC-5 carry the A1 supersession text (lines 53–54).
- Gap: the record has no T5 operations entry. T5's interrupted operations (IDOs panel click, FiP toolbar click, screenshot) appear only in the controller audit, not in the record.

## 2. Controller audit of T5 (`evidence/EXP-137/harness-audit-T5.md`, read-only)

- 14 tool events listed. Four Edit calls on the experiment record (A1) completed. IDOs panel click and FiP click completed. Screenshot `t5-00-idos-fip-stale-criterion-before-exact-name.png` completed.
- Event 14 `browser_type` (IDO Name criteria textbox) failed: `Ref f1e325 not found in the current page snapshot`. The audit flags browser_type as a prohibited-tool hit with count 1. The failed call did not enter text. The audit itself says the call did not succeed, so no criterion was typed.
- The audit carries "Malformed/truncated event at line 89" and "No terminal event; audit may be partial". T5 is therefore interrupted and incomplete in the controller log.

## 3. T6 browser actions (all read-only)

| # | Action | Target | Result |
|---|---|---|---|
| 1 | `browser_tabs` action=list | all tabs | Two tabs. Tab 0 (current): Mongoose portal page (`mingle-portal…/c51080bc-…?favoriteContext=IdoCollections`). Tab 1: Designer `mgapse1ap…/WSWebClient/designer/default.aspx?MGForm=IdoCollections`, title shows `(G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. |
| 2 | Tab selection | none | **Not performed.** Tab 1 was not selected. Tab 0 was already current. |
| 3 | `browser_snapshot` (fresh, untargeted) | current tab 0 | OK. Recovery allowance: fresh snapshot 1 of 1 used. |
| 4 | `browser_take_screenshot` (corrected visible inspection, file `t6-00-restored-session-idos-panel-viewport.png`) | current tab 0 | **Timeout**: `browserBackend.callTool: Timeout 5000ms exceeded … taking page screenshot … fonts loaded`. No file was written. Corrected-inspection allowance: 1 of 1 used. Not retried. |
| 5 | `browser_console_messages` level=error (read-only) | page console | Total 31 messages (3 errors, 2 warnings). Three errors are Permissions-policy `unload is not allowed` violations in `default-app.js`, `wswebform-app.js` and `yggdrasil-core.js`. Same category as the pre-existing 21-error count in T2/T4. |

Mutating-class browser actions in T6: **0**. Clicks: 0. Typing: 0. Key presses: 0. Navigation: 0. Tab selects: 0. Coordinate clicks: 0. Save: 0. Finish: 0. Create Form: 0. Check-in: 0. Runtime Save: 0. Session recovery: 0 (no modal or sign-in page observed in the snapshot). Browser JavaScript: 0. Shell commands: 0 (Bash not available to this worker).

Tool-policy note: the worker has no tool that sets `worker_tool_policy.deny_browser_javascript`. No browser evaluate or run-code tool was used.

## 4. Observed browser state (fresh snapshot, tab 0, untargeted)

- **Page:** Title `Mongoose`. Current tab index 0. The portal Top Navigation Bar tab list shows `System Administrator` (unselected) and `Mongoose` (selected). Tenant indicator `DEM`. Portal footer shows `Infor OS Portal 2026.10.03`.
- **Portal notification strip:** none seen in the snapshot.
- **Mongoose frame (iframe):** `Infor Mongoose Application Development Framework` heading. Top menu: Explorer, Form, Actions, Edit, View, Window, Help. The account button reads `<secret>SECRET_MONGOOSE_USERNAME</secret> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
  - **Configuration** `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`: observed in the header button and the Designer tab title.
  - **Account identity** (`anton.ramos@3mworks.com.ph`): **NOT established.** The header text is masked as the secret placeholder in the accessibility snapshot, and the screenshot that would have shown it timed out.
- **Toolbar:** Save disabled, New disabled, Delete disabled, Refresh disabled, Get More Rows disabled, System Notes disabled, Documents disabled, Export to Excel disabled. Open, FiP (`Filter in Place`) and the Designer buttons are enabled. Save disabled indicates no pending unsaved change in the current panel.
- **Explorer:** Master Explorer, Public Folders, User Folders, My Folders tree nodes present. Not expanded.
- **Panel:** IDOs panel open and selected (tab heading `IDOs`, selected). Inside the IDO detail, the Tables sub-tab is selected, with the Tables grid empty.
- **IDO grid:** one blank placeholder row (empty gridcells), no visible IDO row. The IDO Name, Caption, Description, Project Name and other detail textboxes are empty. Revision and Locked By are empty. Check Out is disabled, Undo Check Out is disabled, and the detail buttons are disabled.
- **FiP state:** **Ambiguous.** The FiP toolbar button is present without a pressed-state attribute in the snapshot. The filter criteria row values are not exposed in the accessibility tree. The T5 click on the FiP button was reported as completed, but whether FiP is on now could not be confirmed from the snapshot.
- **Stale criterion:** The T5 screenshot file `evidence/EXP-137/t5-00-idos-fip-stale-criterion-before-exact-name.png` exists. The current criterion text is not visible in the snapshot, and it was not inspected in T6.
- **Dialogs:** No modal, alert, prompt or Mongoose dialog visible in the snapshot. No Session Expired modal and no Infor sign-in page.
- **Designer tab (tab 1):** Not inspected. Not selected, per the brief's no-tab-selection rule for T6. Its state (Designer session, editing scope, unsaved changes) is unknown.

## 5. Recovery budget used

- Fresh untargeted snapshots: 1 of 1.
- Corrected visible inspection: 1 of 1 (screenshot attempt, timed out; not repeated).
- Tab listing: 1 (read-only, no selection).
- Console read: 1 (read-only).
- Session-recovery allowance (EXP-006 / session-expiry procedure): not used. No session-expiry evidence in T6.

## 6. Acceptance and status

- AC-1 (pre-mutation identity, configuration, User scope, project, absence checks): **not re-established in T6.** Prior T1–T4 evidence stands as recorded. Account identity is unverified in this session.
- AC-2 through AC-12: no Mongoose application mutation has occurred in T6, and none is authorized by this checkpoint.
- No acceptance claim is made.

## 7. Blocker and next permitted action

- **Blocker:** The restored session's account identity (`anton.ramos@3mworks.com.ph`), Designer User scope, and the FiP / criterion state of the IDOs panel cannot be established from the accessibility snapshot. The one corrected screenshot inspection timed out in the browser backend (`taking page screenshot`, 5000 ms), so the visual check is unavailable. The Designer tab (tab 1) has not been inspected and was not selected.
- **Environment suspicion:** Screenshot capture timed out after fonts loaded. This may be a rendering or environment issue in the restored Chrome/MCP session. This is a suspicion only and was not diagnosed.
- **Next permitted action (for coordinator review, not taken):**
  1. Coordinator decides whether a new bounded task may retry a visible screenshot of tab 0 to establish the account header, or whether the restored session should be re-established by the operator.
  2. The stale Designer tab (tab 1) should be handled by the coordinator, not by T6.
  3. The experiment record has no T5 operations entry. The coordinator should decide whether to add one, since T5 controller events are otherwise incomplete (no terminal event).
  4. No IDO criterion, F4, FiP toggle, Save, check-in, wizard, Form, or runtime action should be taken until the account, scope and absence state are established.

## 8. Files

- Written by T6: `evidence/EXP-137/T6-recovery-checkpoint.md` (this file).
- Not written: no screenshot (the T6 capture timed out). No experiment record edit.
- Read by T6 (no change): `experiments/EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md`, `evidence/EXP-137/harness-audit-T5.md`.

## Limitations

- Account identity and Designer scope are not verified in T6.
- The IDO criterion state and FiP toggle state are not verified in T6.
- The Designer tab (tab 1) is uninspected.
- No pixel-level or visual evidence was captured in T6.
- Console counts are per-page counters and are not compared with prior tasks as a regression signal.
