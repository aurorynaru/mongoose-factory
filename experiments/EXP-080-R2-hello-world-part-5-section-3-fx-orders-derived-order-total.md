# EXP-080-R2 — Hello World Part 5 Section 3: add the derived property FX_DerOrderTotal to the FX_Orders IDO (replay with a Tab-committed Property Name)

**CURRENT STATUS (after T2, 2026-10-14): CLASSIFIED BLOCKED AT AC-1.** The Web Client session expired during the T1 disposition step, and the single permitted re-login attempt ended with "mingle-sso.se1.inforcloudsuite.com refused to connect." T2 was documentation only (zero browser calls, zero authentication attempts). Final report: `evidence/EXP-080-R2/T2-final-blocked-report.md` (AC-1 to AC-5 matrix; reconciled counts; file inventory). Acceptance: AC-1 blocked (demonstrated session failure; sources reviewed; leftover Yes done, wizard Cancel not performed); AC-2, AC-3, AC-4 not attempted; AC-5 partial. No FX_DerOrderTotal creation occurred as far as the recorded actions show; the server-side inventory was not inspected.

Earlier status (after T1, 2026-10-14): BLOCKED AT DISPOSITION. SESSION NOT RE-ESTABLISHED. The EXP-080 leftover wizard prompt was answered once (Yes). A Mongoose "Session Expired" modal then appeared over the still-open IDO Property Wizard. Its OK was clicked once. The tab then showed the Infor CloudIdentities Sign In form, so the username and password placeholders were entered and Sign in was clicked once. The sign-in frame then showed **"mingle-sso.se1.inforcloudsuite.com refused to connect."** The session-expiry procedure allows one re-login per task, so no further sign-in was attempted. The Infor OS portal step was not reached. **No IDO tab was retrieved, no baseline was captured in this run, and no wizard was opened in this run.** AC-1 is **not** supported by this run. AC-2 to AC-5 are not started. The Cancel of the EXP-080 wizard was **not** clicked (the wizard was lost to the session expiry). **Nothing was committed:** the EXP-080 record shows Finish count 0 and Save count 0 for all earlier tasks, and this run made no Finish or Save. FX_DerOrderTotal's absence is **not re-verified in this run**. Classification: observed only; not replay_verified.

Earlier status: none (this is the first task of EXP-080-R2). Replay of EXP-080, which was blocked at AC-2 by the "Value is required for Property Name" prompt after a plain fill without a Tab commit (see `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md`).

## Run identity

- Experiment EXP-080-R2, cycle 0, task **T1** (disposition, preflight and IDO baseline; stop before the New Property wizard).
- Run `R-20261014-011857-xoQd`; worker session `53298c89-0f90-4f62-98ee-b2ec8acd9e35`; task_message_id `93f059de-983d-4b09-af2c-e1f0aae6b7a5`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO and its property are tenant-wide.
- Brief commits (session-start `git log`; not re-verified; no shell): `c8905bb` (EXP-080-R2: approved brief), `f73f354` (EXP-080-R2: draft brief).
- Session-start git status (harness context; not re-verified): `?? assets/`.
- Record provenance: this record did not exist at T1 start (`experiments/EXP-080-R2*` returned no file). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-080-R2/`.

## Objective (T1 scope)

Disposition of the EXP-080 leftovers; fresh IDOs Form; one visible-criterion query for `FX_Orders`; record identity, checkout, Tables view and the complete property inventory; prove `FX_DerOrderTotal` absent. Stop before the New Property wizard.

Later tasks (not authorized in T1): one New Property wizard (Derived; name `FX_DerOrderTotal` by Tab-committed keystrokes; class `FX_Cost`; expression `FX_Count * FX_ItmsCost`); one Finish; at most one Save; the recovery pair (IDOs close and reopen, one visible-criterion query) with 17 properties expected. The Label String ID override and Read Only setting belong to EXP-081; the Unload All Global Form Objects step is deferred.

## Sources reviewed (before browser interaction)

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `docs/mongoose/transcripts/hello-world-pt5.md`: Section 3 (lines 115–127, narrated steps), its source cautions (lines 129–133), and the transcript 03:33–05:05 (lines 415–430). Relevant points: the first page offers Derived rather than Bound; the tutorial's `Der`-prefix convention (ASR renders the name "dur/dir order total"); assign the Cost class, which the tutorial says inherits the data type; expression "count space asterisk space itms cost" (illustrative); the tutorial says property names and expressions are case sensitive (tutorial claim, unverified). The tutorial's `DerOrderTotal` / `Der_OrderTotal` spellings are examples only. Label String ID `s order total` and Read Only (lines 123–128) are EXP-081. Unload (line 125) is deferred.
- `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md`: **ordering deviation.** Lines 1–520 of 630 were read before the browser disposition step. Lines 521–630 (the cumulative audit, the T2 blocker note and the operator's Outcome section) were read **after** the disposition step, in this task, before the record was written. Used for: the 16-row Bound baseline; the Derived page-1 and page-2 layouts; the required-value prompt after the plain fill (T3, T4); the session-about-to-expire notice (T2, T3). The Outcome section states the operator assistant's **unverified** diagnosis that a fill without a Tab commit leaves the committed Property Name empty, and it names the next replay steps (Yes, then Cancel once unless the session has expired; Tab-commit the name before the class lookup). Its open wizard and prompt were the leftovers disposed of here. EXP-080 was not edited.
- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md`: partial read (lines 1–457 of 1736: status header and T1–T4). Used for: FX_Orders identity and the join baseline; the Filter-in-Place state on reopen; the Bound wizard pattern; the Finish-commits-immediately pattern.
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md`: partial read (lines 1–454 of 1348: status header, T1–T3). Used for: the FX_Orders checkout and Tables baseline; Filter in Place on reopen.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: read in full. Used for: class selection in the wizard (lookup offers checked-out classes; inherit checkboxes); Finish commits immediately; Save stays disabled; checkout leaves the revision unchanged.
- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: partial read (lines 1–572 of 1142: T1–T4). Used for FX_Cost: Decimal; Length 18; Decimal Position 2; Default Value 0; Column Data Type decimal; Label String ID FX_sCost. The class is selected, never edited.
- Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git command.

Record-path note: the brief's record path `experiments/EXP-080-R2-hello-world-part-5-section-3-fx-orders-derived-order-total.md` did not exist before T1 (the Glob for `experiments/EXP-080-R2*` returned no file).

## Browser starting state (observed before any action in this run)

- `browser_tabs` list (before any selection): tab 0 = Infor Mongoose Application Development Framework (`mode=designer`, current) — **not selected, clicked, typed, snapshotted or captured**; tab 1 = Mongoose (`favoriteContext=IdoPropertyWizard`).
- Tab 1 selected (one select; succeeded after the list). Tab 0 was not touched.
- Untargeted snapshot (start): the visible frame was the **IDO Property Wizard** (page 2, Property Attributes), in front of a disabled `IDOs` tab and the runtime `FX_Orders` tab. The wizard's Property Name textbox read **`FX_DerOrderTotal`**; Property Class combobox empty (Open button); Data Type, Length, Decimal, Column Data Type and Expression empty with unchecked inherit checkboxes; Next disabled; Back, Finish and Cancel enabled. An in-page alertdialog **"Infor Mongoose Application Development Framework - IDO Property Wizard"** was open with the text **"Value is required for Property Name / Do you want to change the value now?"**, buttons **Yes** (active, default focus) and **No**. This is the same prompt EXP-080 T3 and T4 recorded (the prompt was left open at the end of EXP-080).
- A yellow strip **"Your session is about to expire. Save your data and log on again."** was visible. No minutes count appeared in the snapshot (EXP-080 T3 recorded 8 minutes). No Session Expired modal, sign-in page, portal banner or other dialog was visible at this moment.
- Identity bar (accessibility): operator account | `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## T1 actions (in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 Designer (current); tab 1 Mongoose (`IdoPropertyWizard`) | — |
| 2 | `browser_tabs` select tab 1 | Succeeded after the list; tab 1 current | — |
| 3 | Untargeted snapshot (start; disposition gate) | Wizard page 2 with Property Name `FX_DerOrderTotal`; the prompt "Value is required for Property Name / Do you want to change the value now?" open (Yes active, No); session strip visible; no Session Expired modal | snapshot (tool) |
| 4 | **Click `Yes`** on the prompt (once; the disposition step) | Returned; the tool's auto-snapshot file was written (not read as evidence) | — |
| 5 | `browser_find` "Value is required" | **No matches**: the prompt was no longer present | find |
| 6 | Untargeted snapshot (after Yes) | **A Session Expired alertdialog** over the wizard: "Your session has expired." with OK (active). The wizard still behind it showed Property Name `FX_DerOrderTotal`, Property Class empty, Finish enabled, Next disabled. Cause of the expiry (timer or the Yes answer) **not established** | snapshot (tool) |
| 7 | **Click the Session Expired `OK`** (once; session-expiry procedure step 1) | Returned; the auto-snapshot file was written (not read as evidence) | — |
| 8 | `browser_find` "Sign in" | An **Infor CloudIdentities - Sign In** form appeared in the tab (heading; Username textbox; Password textbox with Show password; Sign in button). **So no navigation was needed** (the procedure's navigation applies only when no sign-in form appears) | find |
| 9 | `browser_find` "Session Expired" | No matches (the modal had cleared) | find |
| 10 | Untargeted snapshot (sign-in gate; refs for the form) | Sign-in form as in step 8 | snapshot (tool) |
| 11 | **Type `SECRET_MONGOOSE_USERNAME`** into the Username textbox (once) | Typed as the placeholder; the harness substituted the value; no credential value was read or recorded by the worker | — |
| 12 | **Type `SECRET_MONGOOSE_PASSWORD`** into the Password textbox (once) | Typed as the placeholder; no value recorded | — |
| 13 | **Click `Sign in`** (once) | Returned; a tool auto-snapshot file was written | — |
| 14 | Untargeted snapshot (after Sign in) | The Mongoose frame showed **"mingle-sso.se1.inforcloudsuite.com refused to connect."** (a browser error page inside the Mongoose frame); the session strip still visible; no sign-in form; the Mongoose tab remained selected | snapshot (tool) |
| 15 | `browser_wait_for` 5 s (once; to let a redirect settle) | Waited | — |
| 16 | Untargeted snapshot (after the wait) | Unchanged: the frame still showed the SSO connection refusal | snapshot (tool) |
| 17 | Screenshot `disposition-session-expired-signin-refused.png` (visible inspection) | Viewed: the session strip "Your session is about to expire..." at the top; the Mongoose frame blank, with the browser error icon and "mingle-sso.se1.inforcloudsuite.com refused to connect." centred; no Mongoose dialog, wizard, IDOs Form or sign-in form | `disposition-session-expired-signin-refused.png` |

Not done after step 16 (stop): no second sign-in; no navigation to the portal URL (the navigation step applies only when no sign-in form appears); no Infor OS portal step; no wizard Cancel; no IDOs tab; no F4; no Form action. Per the procedure, the re-login for this task was used up at step 13. The interrupted step (the IDOs baseline) is not resumed in this task.

## Disposition of the EXP-080 leftovers (result)

| Leftover | Result |
|---|---|
| In-page prompt "Value is required for Property Name / Do you want to change the value now?" | **Yes clicked once** (step 4). The prompt was gone at step 5. The field read `FX_DerOrderTotal` before and after. No value was re-entered |
| The EXP-080 IDO Property Wizard (page 2, Property Name `FX_DerOrderTotal`, class empty, Finish not pressed) | **Not cancelled.** A Session Expired modal appeared over it at step 6; per the procedure, the open Forms and the wizard are treated as lost (unsaved changes lost). The wizard's **Cancel was not clicked** (the brief's Cancel step runs only when no expiry modal is shown). The Finish was **never** pressed in EXP-080 or here |
| Session Expired modal | **Shown** (step 6). Session-expiry procedure run once: OK clicked once (step 7); sign-in form appeared, so no navigation; username and password placeholders typed once each; Sign in clicked once (step 13). **Re-login NOT established:** the frame showed "mingle-sso.se1.inforcloudsuite.com refused to connect." (steps 14, 16). Portal step not reached |

Counts for the disposition: Yes **1**; wizard Cancel **0**; Session Expired OK **1**; re-login sign-in attempts **1** (failed at the SSO host); navigation for re-login **0**.

## Session-warning observation (not acted on)

The session strip "Your session is about to expire. Save your data and log on again." was visible at step 3 (before any action in this run). The brief's proactive re-login applies only "before the New Property wizard is opened and no Form is dirty". The proactive branch applies only when the strip is visible before the New Property wizard is opened **and no Form is dirty**. Here the EXP-080 wizard was already open and dirty (Property Name `FX_DerOrderTotal` entered in EXP-080), so that condition was not met and the proactive re-login was not run. (T2 correction: the earlier wording gave "no wizard was opened in this run" as the reason, which did not state the dirty-Form condition.) The expiry modal arrived at step 6, before any wizard opening in this run.

## Acceptance status (after T1)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; EXP-080 leftovers disposed of; a fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders IDO checked out to the operator; Tables view and 16-property inventory recorded; FX_DerOrderTotal absent | **NOT SUPPORTED in this run.** Sources reviewed (above). Leftovers: Yes once; a Session Expired modal then appeared; re-login **failed**. No IDOs Form was opened and no query was run in this run; no identity, checkout, Tables or inventory was read here. The EXP-080 T1 baseline (2026-10-14, earlier session) is recorded in `experiments/EXP-080-…` for reference only and is **not** re-verified | `disposition-session-expired-signin-refused.png` (session expired; refusal) | Session not usable; no IDO evidence in this run |
| AC-2 One New Property wizard (Derived; name by Tab-committed keystrokes; class FX_Cost; expression; one Finish) | **Not started** (wizard not opened in this run; the EXP-080 leftover wizard was lost to the session expiry) | — | — |
| AC-3 After Finish: clean Form; one new Derived property; 16 baseline unchanged; checked out | **Not started** | — | — |
| AC-4 Recovery pair (IDOs close and reopen; one query; 17 properties) | **Not started** | — | — |
| AC-5 Final report and audit | **Partial**: this T1 record (blocked disposition; audit below) | — | Observed only |

## Action audit (cumulative for EXP-080-R2; T1 only)

| Operation | T1 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| New Property wizard opened | **0** (the EXP-080 leftover wizard was present at start and was not opened by this run) |
| Derived choice / class selection / expression fill | **0 / 0 / 0** |
| Property Name fills | **0** (the field already read `FX_DerOrderTotal` from EXP-080; not typed here) |
| Finish | **0** |
| Save | **0** |
| In-page prompts answered: Yes / No | **1 / 0** |
| Wizard Cancel | **0** (lost to the session expiry; see disposition) |
| Session Expired modal OK (session-expiry procedure) | **1** |
| Re-login (sign-in attempts; procedure's once-per-task) | **1** (failed: SSO host refused to connect); portal step not reached |
| Navigation for re-login (portal URL) | **0** (not needed; sign-in form appeared) |
| IDOs close / reopen (pairs) | **0 / 0** (pairs 0 of 2 in this run) |
| Target F4 queries (visible-criterion) | **0** (of 2) |
| Select Form dialogs answered | **0** |
| Strings, property classes, SQL objects or columns, Forms, runtime records, IDO or property or table-entry changes | **0** |
| Designer actions (click, type, key, snapshot, screenshot) | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | **0** |
| Browser JavaScript, evaluate, run-code, console or network inspection (worker-authored) | **0** (the tool wrapper's generated Playwright code is tool output, not worker input) |
| Refresh, restart, direct URL navigation | **0** |
| Filter in Place click | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **4 / 0** explicit (steps 3, 6, 10, 14). T2 correction: step 16 was a snapshot file returned with `browser_wait_for`, not an explicit snapshot (controller audit rows 15, 18, 22, 26) |
| `browser_find` | **3** ("Value is required"; "Sign in"; "Session Expired") |
| Element clicks (successful / failed) | **3 / 0** (Yes; Session Expired OK; Sign in) |
| `browser_type` (succeeded / refused) | **2 / 0** (Username placeholder; Password placeholder) |
| Key presses / Enter / Escape | **0 / 0 / 0** |
| Waits / mouse moves / wheel | **1 / 0 / 0** (5 s) |
| Screenshots | **1** (`disposition-session-expired-signin-refused.png`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | **0** |
| Re-logins counted toward the task's one re-login | **1** (failed) |

Note: the tool auto-snapshot files written by the click and type actions are tool output, not counted as snapshots.

## Worker-written-file inventory (T1)

- `experiments/EXP-080-R2-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (created; this record).
- `evidence/EXP-080-R2/disposition-session-expired-signin-refused.png` (created).
- Tool-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-19-25-307Z.yml`, `page-2026-10-13T17-19-33-587Z.yml`, `page-2026-10-13T17-19-51-010Z.yml`, `page-2026-10-13T17-20-02-753Z.yml`, `console-2026-10-13T17-19-15-788Z.log`) are wrapper-written, not worker-authored. They were read as readbacks only.

No other repository file was written, edited or deleted in T1. `experiments/EXP-080-…` (EXP-080) was not edited.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R2/disposition-session-expired-signin-refused.png` | Mongoose tab (selected); the session strip "Your session is about to expire. Save your data and log on again." at the top; the Mongoose frame blank with the browser error "mingle-sso.se1.inforcloudsuite.com refused to connect."; no wizard, IDOs Form, prompt or sign-in form visible | The **re-login was not re-established** in this tab; the wizard and IDOs Forms are no longer visible; no in-page dialog remains | Why the SSO host refused the connection; the state of the server-side session; whether any EXP-080 wizard value was saved (none was: no Finish) |

Snapshot readbacks (tool files; not screenshots) carry the wizard and prompt text described in the action table (steps 3, 6, 10, 14, 16). They prove the observed text in the accessibility tree only.

## Knowledge state (per finding)

| Finding | State |
|---|---|
| The EXP-080 leftover prompt "Value is required for Property Name / Do you want to change the value now?" was still open at EXP-080R2 start with Property Name `FX_DerOrderTotal` | **observed** (one run) |
| Yes on that prompt cleared it with the field still reading `FX_DerOrderTotal` | **observed** (one run) |
| A Session Expired modal appeared over the still-open wizard after the Yes answer (cause not established) | **observed** (one run) |
| After the modal's OK, the tab showed the Infor CloudIdentities Sign In form (no navigation needed) | **observed** (one run) |
| Sign in with the placeholders led to "mingle-sso.se1.inforcloudsuite.com refused to connect." in the Mongoose frame | **observed** (one run; cause not established) |
| The session-expiry warning strip was visible before the session expired (no minutes count shown) | **observed** (one run) |
| FX_Orders identity, checkout, Tables, 16-property baseline and FX_DerOrderTotal absence in this run | **not performed** (session unusable) |
| Derived wizard behaviour (page 2 entries, class inheritance, expression readback, Finish response) | **not performed** |
| Replay or database durability | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **Blocker (session):** the Mongoose session is not re-established. The sign-in frame reported "mingle-sso.se1.inforcloudsuite.com refused to connect." The per-task re-login is spent. The operator or coordinator must restore the session (for example by re-logging in through the Infor OS portal, if the SSO host recovers) before a fresh EXP-080-R2 task. The next task must start with a fresh snapshot (the tab is on the error page).
2. **The EXP-080 wizard and prompt are lost** (session expiry; treated as lost per the procedure). Their state at expiry was: Property Name `FX_DerOrderTotal`; Property Class empty; Finish never pressed. A later EXP-080-R2 task must open the New Property wizard fresh (one opening) and must not assume the old wizard state. The EXP-080 record is not edited here.
3. **Cause of the expiry is unresolved:** the Session Expired modal appeared after the Yes answer. Whether the Yes answer, the elapsed session timer or the earlier session notice caused it is not established. The session notice had shown no minutes count at T1.
4. **FX_DerOrderTotal absence is not re-verified in this run.** It was last recorded as absent in EXP-080 T1 (earlier session) and was never created (no Finish in EXP-080). The next task's baseline must prove it.
5. The Derived name prompt "Value is required for Property Name" recurred at EXP-080 T3 and T4 and is still unexplained. EXP-080-R2 must test the Tab-committed name (its own AC-2) and stop at the first recurrence, per the brief.
6. Classification remains **observed only, NOT replay_verified**.

## T2 — documentation-only final blocked report (zero browser calls)

- Task T2, cycle 1, task_message_id `96a04bfb-042e-4535-80d5-a03cab42dadb`, worker session `53298c89-0f90-4f62-98ee-b2ec8acd9e35`, run `R-20261014-011857-xoQd`. Date 2026-10-14. No browser call, no authentication attempt, no Mongoose change.
- Classification: **BLOCKED at AC-1**. Demonstrated failures: session expiry during disposition; the single re-login attempt failed (SSO refusal). Unattempted: the IDOs Form, the query, the inventory, all wizard steps, Finish, Save, the recovery pair.
- Report: `evidence/EXP-080-R2/T2-final-blocked-report.md` (acceptance matrix; reconciled cumulative counts; file inventory; the confinement limitation; accessibility-versus-screenshot distinction).
- Cumulative counts (T1 + T2, reconciled to controller audit `evidence/EXP-080-R2/harness-audit-T1.md`): Yes 1; wizard Cancel 0; Session Expired OK 1; re-login attempts 1 (successful 0); wizard openings 0; Finish 0; Save 0; target F4 queries 0 of 2; IDOs close/reopen pairs 0 of 2; checkout-management actions 0; Designer actions 0; unloads 0; strings, classes, SQL, Forms, runtime records changed 0.
- Flagged by the controller: `browser_type` ×2 (the credential placeholders under the session-expiry procedure). For coordinator adjudication.
- Worker-written files in T2: `evidence/EXP-080-R2/T2-final-blocked-report.md` (created); this record (edited). Tool-written `evidence\playwright\` files are outside the EXP-080-R2 path (known confinement limitation; operator git review authoritative).
- Classification: observed only; not replay_verified.

## Next permitted action

A separately authorized EXP-080-R2 task (after the session is restored by the operator or coordinator): fresh tab list; fresh snapshot; baseline (AC-1) from a fresh IDOs Form and one visible-criterion query; then the Derived wizard only under its own authorization.

## Outcome (operator assistant, 2026-10-14)

Blocked at AC-1; not accepted. Nothing was created. This was decided by the operator assistant under the user's overnight authorization of 2026-10-14.

- Run R-20261014-011857-xoQd ended as blocked after 2 worker tasks (T2 was documentation only).
- What happened in T1:
  1. The EXP-080 leftover prompt was answered with Yes once.
  2. A Session Expired modal then appeared, and its OK was clicked once.
  3. The Infor CloudIdentities Sign In form appeared **inside the portal's embedded app frame**, with the portal top bar still visible. The worker entered the placeholder credentials through the Playwright secrets mechanism and clicked Sign in once.
  4. The frame then showed "mingle-sso.se1.inforcloudsuite.com refused to connect."
  5. The one re-login allowed per task was used up, so the worker stopped.
- The screenshot `disposition-session-expired-signin-refused.png` (viewed by the operator assistant) shows the portal shell with "Your session is about to expire" and the refused-connection page in the app area. No Form is visible.
- The wizard Cancel was not needed: the EXP-080 wizard was lost with the session. Finish and Save counts are 0, so nothing was committed.
- The two flagged `browser_type` calls are the Username and Password placeholders in the permitted sign-in step. The coordinator found no violation.
- Finding (observed): **sign-in inside the frame fails.** The embedded app frame cannot complete the SSO sign-in, because mingle-sso refuses to be framed. Recovery needs the top-level portal navigation in the worker-preamble procedure (as in EXP-079 T4), not the embedded form.
- Confinement (git status): only `evidence/EXP-080-R2/` and this record were written by the run.
- Next: EXP-080-R3. T1 re-establishes the session through the top-level portal navigation step only, and the later tasks follow the R2 plan.
