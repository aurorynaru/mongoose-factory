# EXP-080-R2 — T2 final blocked report (documentation only; zero browser calls)

Date 2026-10-14. Run `R-20261014-011857-xoQd`, cycle 1, task T2, task_message_id `96a04bfb-042e-4535-80d5-a03cab42dadb`, worker session `53298c89-0f90-4f62-98ee-b2ec8acd9e35`. Experiment record: `experiments/EXP-080-R2-hello-world-part-5-section-3-fx-orders-derived-order-total.md`.

## 1. Classification

**EXP-080-R2 is BLOCKED at AC-1.**

- The Web Client session expired during the T1 disposition step (a Mongoose "Session Expired" modal appeared over the still-open EXP-080 IDO Property Wizard).
- The single permitted re-login attempt (sign-in form, placeholders typed once each, Sign in clicked once) ended with the Mongoose frame showing **"mingle-sso.se1.inforcloudsuite.com refused to connect."**
- No further sign-in, navigation or portal step was attempted, because the procedure allows one re-login per task.
- No IDOs baseline, Tables view, property inventory or checkout reading was captured in this run. AC-1 is therefore not supported by this run.

Classification: observed only; not replay_verified.

## 2. Scope of T2

- T2 made **zero browser calls**, zero authentication attempts and zero Mongoose changes.
- Work performed: review of the EXP-080-R2 record, the T1 worker's sections, the T1 screenshot and the controller audit `evidence/EXP-080-R2/harness-audit-T1.md`; reconciliation of counts; this report; and an update to the EXP-080-R2 record only.
- The EXP-080 record and the earlier experiment records were not edited.

## 3. Sources reviewed in T2

- The EXP-080-R2 record (T1 sections, including its corrections).
- The T1 worker's accessibility-snapshot readbacks as recorded in that record (the snapshot files are tool output under `evidence\playwright\`; they were not reopened in T2).
- `evidence/EXP-080-R2/disposition-session-expired-signin-refused.png` (viewed in T1).
- `evidence/EXP-080-R2/harness-audit-T1.md` (controller audit, 33 rows).

## 4. Chronology of the T1 disposition (what happened, in order)

| # | Action | Observed (accessibility snapshot unless stated) |
|---|---|---|
| 1 | Tab list (before selection) | Tab 0 Designer (current); tab 1 Mongoose on `favoriteContext=IdoPropertyWizard` |
| 2 | Select tab 1 | Succeeded; tab 0 not touched |
| 3 | Snapshot (start) | IDO Property Wizard page 2; Property Name readback `FX_DerOrderTotal`; Property Class empty; Finish enabled; prompt "Value is required for Property Name / Do you want to change the value now?" open (Yes active, No); session strip "Your session is about to expire" visible; no minutes count shown |
| 4 | Click **Yes** (once) | Returned; prompt cleared (confirmed by find, step 5) |
| 5 | Find "Value is required" | No matches |
| 6 | Snapshot (after Yes) | **Session Expired** alertdialog ("Your session has expired.", OK active) over the wizard; wizard behind still shows Property Name `FX_DerOrderTotal`, class empty |
| 7 | Click **Session Expired OK** (once) | Returned |
| 8–9 | Find "Sign in"; find "Session Expired" | "Sign in" matched an **Infor CloudIdentities - Sign In** form inside the Mongoose frame (no navigation needed); "Session Expired" no matches |
| 10 | Snapshot (sign-in gate) | Username and Password textboxes; Sign in button; no tenant field observed |
| 11–12 | Type `SECRET_MONGOOSE_USERNAME` into Username; type `SECRET_MONGOOSE_PASSWORD` into Password (once each) | Entered as placeholders; the harness substitutes the values; no credential value was read or recorded |
| 13 | Click **Sign in** (once) | Returned |
| 14 | Snapshot (after sign-in) | Mongoose frame shows **"mingle-sso.se1.inforcloudsuite.com refused to connect."** |
| 15 | Wait 5 s (once) | Returned |
| 16 | Snapshot (after wait) | Unchanged: SSO refusal |
| 17 | Screenshot `disposition-session-expired-signin-refused.png` | Viewed: session strip; blank frame with the browser error and the SSO refusal text |

The controller audit (rows 13–28) matches this sequence.

## 5. Last observed browser state

The **SSO refusal page** is the last observed state: the Mongoose tab is selected; the Mongoose frame shows the browser error "mingle-sso.se1.inforcloudsuite.com refused to connect."; the session-expiry strip is visible. No wizard, IDOs Form, prompt, Session Expired modal or sign-in form was visible in the last snapshot or the last screenshot. The EXP-080 wizard was lost to the expiry and was not cancelled. The tab was not navigated after the failed sign-in.

The SSO refusal has **no diagnosed cause**. The run did not establish whether the cause is the host, the network, the tenant configuration or the session state. The Tab-commit hypothesis for the Property Name prompt was **not tested** in this run.

## 6. Acceptance matrix (AC-1 to AC-5)

"Demonstrated failure" means an observed event in this run that prevented the criterion. "Not attempted" means the step was never reached. The two are kept separate.

| AC | Status | Demonstrated failures in this run | Not attempted in this run | Evidence |
|---|---|---|---|---|
| **AC-1** Sources; session usable; leftovers disposed; fresh IDOs Form; one visible-criterion query returns one FX_Orders checked out to the operator; Tables (three entries) and 16-property inventory; FX_DerOrderTotal absent | **BLOCKED / NOT SUPPORTED** | (a) Session expired during the disposition step (Session Expired modal, T1 step 6). (b) The single re-login attempt failed (SSO refusal, T1 step 14, screenshot). | Sources review is **supported** (T1; one ordering deviation disclosed in the record). Fresh IDOs Form; visible-criterion query (0 of 2 target queries); identity and checkout; Tables view; 16-property inventory; FX_DerOrderTotal absence. Leftover disposition is **partial**: Yes done; wizard Cancel not performed (wizard lost to expiry; not a failure of Cancel). Pre-F4 criterion, identity and inventory screenshots: not captured. | `disposition-session-expired-signin-refused.png` (session strip and SSO refusal only); T1 snapshots (accessibility readbacks only) |
| **AC-2** One New Property wizard: Derived; name Tab-committed; class FX_Cost; expression FX_Count * FX_ItmsCost; one Finish | **NOT ATTEMPTED** | None | All of it. The wizard was not opened in this run (0 openings). The EXP-080 leftover wizard was lost to the expiry. The Property Name and class states seen in the T1 snapshot belong to EXP-080 and are not AC-2 evidence. The Tab-commit hypothesis was not tested. | None for AC-2 |
| **AC-3** After Finish: clean Form; exactly one new Derived property; 16 baseline unchanged; checked out | **NOT ATTEMPTED** | None | All of it (no Finish, no Save, no post-Finish inventory). | None |
| **AC-4** Recovery pair: IDOs close and reopen; one visible-criterion query; 17 properties including FX_DerOrderTotal | **NOT ATTEMPTED** | None | All of it (0 of 2 pairs; 0 of 2 target queries). | None |
| **AC-5** Final report: decisive evidence for AC-1 to AC-4; complete audit; baseline and recovered inventories; worker-written inventory; final state | **PARTIAL (this report and the record only)** | None | Decisive evidence for AC-1 to AC-4 does not exist. Baseline and recovered inventories: not captured. The complete audit and the worker-written inventory are provided in sections 7 and 8. The final state is given in section 5. | This report; the EXP-080-R2 record |

Summary: AC-1 is blocked by a session event, not by a product failure. AC-2 to AC-4 were never reached. No product-level failure of the Derived wizard, the Property Name prompt or the expression was observed in this run.

## 7. Cumulative action audit (reconciled; EXP-080-R2 T1 + T2)

Source: the T1 worker's log, checked row by row against the controller audit `evidence/EXP-080-R2/harness-audit-T1.md`. The controller audit's own summary line ("6 actions, 10 reads") is a controller classification and is not used as a count here.

| Operation | T1 | T2 | Cumulative |
|---|---|---|---|
| `browser_tabs` list / select | 1 / 1 | 0 / 0 | **1 / 1** |
| Snapshots, explicit untargeted / targeted | 4 / 0 (controller rows 15, 18, 22, 26) | 0 / 0 | **4 / 0** |
| Snapshot file returned with `browser_wait_for` (tool output, not an explicit snapshot) | 1 | 0 | **1** (not counted as an explicit snapshot) |
| `browser_find` | 3 (rows 17, 20, 21) | 0 | **3** |
| Element clicks, succeeded / failed | 3 / 0 (rows 16, 19, 25) | 0 | **3 / 0** |
| **Yes** on the in-page prompt | **1** | 0 | **1** |
| **Session Expired OK** (session-expiry procedure, step 1) | **1** | 0 | **1** |
| **Re-login attempts** (sign-in click) | **1** (failed: SSO refusal) | 0 | **1** (successful: **0**) |
| Re-login navigation (portal URL) | 0 | 0 | **0** (not needed; sign-in form appeared in the tab) |
| `browser_type`, succeeded / refused | 2 / 0 (rows 23, 24; placeholders only) | 0 | **2 / 0** |
| Key presses / Enter / Escape | 0 / 0 / 0 | 0 | **0 / 0 / 0** |
| Waits | 1 (5 s; row 27) | 0 | **1** |
| Screenshots | 1 (row 28) | 0 | **1** |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 | 0 | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | 0 | 0 | **0** |
| **Wizard Cancel** | **0** | 0 | **0** |
| **Wizard openings** (New Property) | **0** | 0 | **0** |
| Derived choice / Next / Property Name fill / class selection / expression fill | 0 / 0 / 0 / 0 / 0 | 0 | **0** |
| **Finish** | **0** | 0 | **0** |
| **Save** | **0** | 0 | **0** (0 of 0–1 allowed) |
| **Target F4 queries** (visible-criterion) | **0** | 0 | **0 of 2** |
| IDOs close / reopen pairs | 0 | 0 | **0 of 2** |
| Select Form dialogs answered | 0 | 0 | **0** |
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** | 0 | **0 / 0 / 0** |
| Strings, property classes, SQL objects or columns, Forms, runtime records, IDO/property/table-entry changes | 0 | 0 | **0** |
| Designer actions | 0 (tab 0 listed only) | 0 | **0** |
| Unload, cache, FormSync, deployment, regeneration | 0 | 0 | **0** |
| Browser JavaScript, evaluate, run-code, console, network (worker-authored) | 0 | 0 | **0** |
| Refresh, restart, direct URL navigation | 0 | 0 | **0** |

Notes on the counts:

- The **prohibited-tool flag**: the controller audit records `browser_type` ×2 as flagged tool usage (its header reports "prohibited-tool hits=2"). The two calls were the permitted credential placeholders `SECRET_MONGOOSE_USERNAME` and `SECRET_MONGOOSE_PASSWORD`, entered only under the session-expiry procedure. The coordinator should adjudicate the flag. The worker did not supply a credential value and did not read the secrets file.
- The tool wrapper's generated code for `browser_type` and the other actions is tool output, not worker input (as recorded in earlier EXP records).
- **Correction to the T1 record**: the T1 record counted five untargeted snapshots (steps 3, 6, 10, 14, 16). Only four were explicit `browser_snapshot` calls. Step 16 was a snapshot file returned with `browser_wait_for`. The T1 record's counts are corrected in T2 to 4 explicit snapshots.
- **Worker error, not browser**: controller row 3 is a `Read` of the EXP-080-R2 record path before that file existed. The error changed no state. The record was created later in the run (controller row 30).
- **Ordering deviation, confirmed**: controller rows 6 and 31 show that the EXP-080 record was read in two calls. Lines 521–630 were read after the disposition (after row 29). The T1 record discloses this.

## 8. Worker-written-file inventory and repository confinement

Worker-written files (repo-relative):

- `experiments/EXP-080-R2-hello-world-part-5-section-3-fx-orders-derived-order-total.md`: created in T1; edited in T1 (sources correction and a typo fix in the audit table); edited in T2 (status header, session-warning correction, the snapshot-count correction and the T2 section).
- `evidence/EXP-080-R2/disposition-session-expired-signin-refused.png`: created in T1.
- `evidence/EXP-080-R2/T2-final-blocked-report.md`: created in T2 (this file).

Controller-written file (not worker-written): `evidence/EXP-080-R2/harness-audit-T1.md`.

Tool-written files (not worker-authored): Playwright snapshot and console files under `evidence\playwright\`, outside `evidence/EXP-080-R2/`. The names the T1 run reported include `console-2026-10-13T17-19-15-788Z.log`, `page-2026-10-13T17-19-25-307Z.yml`, `page-2026-10-13T17-19-33-587Z.yml`, `page-2026-10-13T17-19-51-010Z.yml` and `page-2026-10-13T17-20-02-753Z.yml`. The T1 run may have written others that were not listed in the tool output; the list is not complete.

**Known confinement limitation:** the tool-written files under `evidence\playwright\` fall outside the EXP-080-R2 evidence path. The worker cannot remove them from the repository diff. The harness's before/after computation and the operator's git review are authoritative for confinement. The worker wrote no other repository file.

## 9. Evidence: accessibility observations and screenshot evidence

These are separate kinds of evidence.

**Accessibility-snapshot observations** (tool readbacks; not images):

- Prompt text "Value is required for Property Name / Do you want to change the value now?" with Yes and No (T1 step 3, before the click).
- Property Name readback `FX_DerOrderTotal`; Property Class empty; Finish enabled (T1 steps 3 and 6).
- Session Expired alertdialog text "Your session has expired." (T1 step 6).
- Infor CloudIdentities Sign In form: Username and Password textboxes; Sign in button; no tenant field (T1 step 10).
- SSO refusal text inside the Mongoose frame (T1 steps 14 and 16).

**Screenshot evidence** (`disposition-session-expired-signin-refused.png`):

- Shows: the Mongoose tab selected; the session-expiry strip; a blank Mongoose frame with the browser error icon and "mingle-sso.se1.inforcloudsuite.com refused to connect."
- Does **not** show: the EXP-080 wizard, the Property Name prompt, the Session Expired modal, the IDOs Form, the Infor sign-in form or any Mongoose dialog. The screenshot was taken after the SSO refusal.
- Therefore the screenshot does **not** show the earlier Property Name prompt, and it does not establish any wizard or IDO state.

No pre-F4 criterion, identity, baseline inventory, wizard-page, configured-state, post-Finish or recovery screenshot exists, because those steps were not reached.

## 10. Record corrections made in T2

- The T1 record's status header was replaced with the T2 classification; the T1 narrative is kept.
- The T1 session-warning reason was corrected. The T1 record said the proactive re-login was not run because "no wizard was opened in this run". The actual condition is that the proactive branch applies only when the strip is visible before the New Property wizard is opened **and no Form is dirty**. The EXP-080 wizard was already open and dirty (Property Name `FX_DerOrderTotal` entered in EXP-080), so the condition was not met.
- The snapshot count was corrected to 4 explicit snapshots (section 7).
- A T2 section was added to the record.

## 11. What is and is not established

- **No FX_DerOrderTotal creation occurred in this run, as far as the recorded actions show.** The run made no Finish, no Save, no Property Name typing (the field value came from EXP-080), no class selection and no expression entry.
- **The current server-side inventory was not independently inspected.** The 16-property baseline and the absence of FX_DerOrderTotal rest on EXP-080 T1 (an earlier session) and on EXP-080 having no Finish. Neither is re-verified here.
- The SSO refusal's cause is not diagnosed.
- The Tab-commit hypothesis for the Property Name prompt was not tested.
- The Yes click's effect is not established beyond the observation that the prompt cleared; the Session Expired modal followed. Whether Yes or the session timer caused the expiry is unresolved.

## 12. Knowledge state (per finding)

| Finding | State |
|---|---|
| The EXP-080 Property Name prompt was open at EXP-080-R2 start, with the field reading `FX_DerOrderTotal` | observed (one run; accessibility snapshot) |
| Yes cleared the prompt; a Session Expired modal then appeared over the wizard | observed (one run; cause unresolved) |
| The sign-in form appeared in the tab without navigation | observed (one run) |
| The sign-in attempt ended with "mingle-sso.se1.inforcloudsuite.com refused to connect." | observed (one run; cause not diagnosed) |
| The Property Name prompt recurred in this run | not observed (the wizard was not reached again) |
| Derived wizard behaviour, class inheritance, expression readback, Finish response | not performed |
| Replay, database durability, expression correctness | not claimed (not replay_verified) |

## 13. Blockers and next step

1. **Blocker (session):** the Mongoose session was not re-established. The SSO host refused the connection. The per-task re-login is spent. The operator or coordinator must restore the session outside this task.
2. **Lost state:** the EXP-080 wizard's state (Property Name readback `FX_DerOrderTotal`; class empty; Finish not pressed) was lost to the expiry. A later EXP-080-R2 task must open the New Property wizard fresh, once, and must not assume the old state.
3. **Unresolved:** the expiry cause; the SSO refusal cause; the Property Name prompt cause.
4. **Next permitted action:** a separately authorized EXP-080-R2 task, after the session is restored, beginning with a fresh tab list and snapshot. T2 requests no browser inspection.

Final state of this report: documentation only. The browser was not touched in T2.
