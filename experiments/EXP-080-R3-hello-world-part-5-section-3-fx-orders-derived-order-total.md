# EXP-080-R3 — Hello World Part 5 Section 3: add the derived property FX_DerOrderTotal to the FX_Orders IDO (replay after top-level session recovery)

**CURRENT STATUS (after T7, 2026-10-14): FINAL ACCEPTANCE DOCUMENTATION WRITTEN; zero browser calls in T7. Final report: `evidence/EXP-080-R3/T7-final-acceptance-report.md` (AC-1 to AC-5 matrix; reconciled cumulative audit; complete worker-written-file inventory; confinement assessment; limitations). Recommendation to the coordinator: ACCEPTED AS OBSERVED (all five acceptance checks have observed evidence, with the limitations listed in that report). Not classified as replay_verified. The T6 second reopen was not followed by a query, so the T5 recovery evidence was not independently reverified after T6. The controller audit files `evidence/EXP-080-R3/harness-audit-T1.md` to `harness-audit-T6.md` were reconciled against the record; the T6 entries were corrected to 5 element clicks and 3 browser_find calls (cumulative 29 / 2 and 13 / 1).

Earlier status (after T6, 2026-10-14): SECOND CLEAN CLOSE/REOPEN PAIR PERFORMED (read-only; no query, no mutation); IDOs reopened in Filter in Place with a blank IDO Name criterion; the T5 recovery evidence is NOT independently re-verified by T6 (no FX_Orders query after the second reopen).** Cumulative: initial fresh IDOs opening (T2) = 1; actual close/reopen pairs (T5 + T6) = 2; FX_Orders F4 queries = 2; wizard openings = 1; Finish = 1; Save = 0; FX_DerOrderTotal additions = 1; existing-property modifications = 0; checkout-management actions = 0. Acceptance is left to the coordinator (not classified as accepted or replay_verified here). Full T6 section and reconciliation below.

Earlier status (after T5, 2026-10-14): RECOVERY VERIFIED AS OBSERVED (same session; UI and accessibility level). The IDOs Form was closed once and reopened once (the single clean close/reopen pair of this experiment), FX_Orders was re-queried once with F4 (the second target query), and the recovered inventory shows 17 properties: the 16 baseline properties unchanged and one added `FX_DerOrderTotal` (Derived; class FX_Cost; sequence 0; expression `FX_Count * FX_ItmsCost` from the accessibility readback; Read Only unchecked). FX_Orders is still checked out to the operator at Revision 2. The recovered IDOs Form is left open and clean. No Finish, Save, checkout action, Designer action or metadata change was made in T5. Full T5 section below.

Earlier status (after T4, 2026-10-14): FINISH INVOKED ONCE; PROPERTY ADDED; POST-FINISH INVENTORY OBSERVED (17 rows; AC-2 Finish observed; AC-3 observed at UI level; Save 0; Form clean; FX_Orders still checked out to the operator).** The single Finish closed the wizard with no dialog or message; the status bar read `New Property (IDOs 1 of 1)`. The new row is `FX_DerOrderTotal`, sequence 0, class `FX_Cost`, property type `Derived`, Decimal 18 decimal, expression `FX_Count * FX_ItmsCost` (accessibility readback; clipped in the grid), Read Only unchecked. The 16 baseline rows are unchanged. The IDOs Form was NOT closed or reopened in T4 (the recovery pair is T5). Full T4 section below.

Earlier status (after T3, 2026-10-14): DERIVED WIZARD CONFIGURED; STOPPED BEFORE FINISH (AC-2 configuration observed; Finish NOT invoked; Save 0). The one New Property wizard is open on page 2 with Derived chosen; Property Name `FX_DerOrderTotal` Tab-committed with no prompt; class `FX_Cost` selected (Data Type inherit ticked: Decimal, Length 18, Decimal 2; Column Data Type inherit ticked: decimal); Expression inherit unticked (one click, by label); expression readback `FX_Count * FX_ItmsCost`; no validation message or prompt at any point. The wizard is left open by design (T3 bounded instruction). FX_Orders remains checked out to the operator; the IDOs Form behind the wizard is clean. The Finish decision is the next step (not authorized in T3). Full T3 section below.

Earlier status (after T2, 2026-10-14): FX_ORDERS BASELINE CAPTURED; AC-1 SUPPORTED AS OBSERVED (UI level). FX_Orders was retrieved once through Filter in Place (one F4): one row, checked out to the operator, Revision Num 2; Tables view with the three expected entries; 16 Bound properties; FX_DerOrderTotal absent (no Derived row). No New Property wizard was opened in T2; nothing was changed. The IDOs Form is open and clean, left in place for the next task. Full T2 section below.

Earlier status (after T1, 2026-10-14): SESSION RE-ESTABLISHED through the top-level portal step. The Web Client was not usable at T1 start (the tab showed the portal's "Logout Successful" page; no Mongoose Web Client tab was present). The permitted portal navigation was made once; the top-level Infor CloudIdentities Sign In form appeared; the username and password placeholders were entered once each and Sign in was clicked once; the Mongoose app was opened from the Infor OS portal; the Web Client loaded in the app frame with no sign-in or Session Expired modal. **No Form was opened in T1, no IDO was retrieved, no wizard was opened, and nothing was created or changed.** AC-1 (session part) is supported by T1; AC-1 (IDO part) is supported by T2. Observed only; not replay_verified.

## Run identity

- Experiment EXP-080-R3, cycle 0, task **T1** (session recovery only; stop before any Form).
- Run `R-20261014-012652-2b2E`; worker session `17038d93-b668-4325-9ded-f316a7af0e1f`; task_message_id `733a51a6-f1f3-4107-be9e-d8e26f5b478b`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User (Forms only); the IDO and its property are tenant-wide.
- Brief commits (session-start `git log`; not re-verified; no shell): `c005735` (EXP-080-R3: approved brief), `72f63b7` (EXP-080-R3: draft brief).
- Session-start git status (harness context; not re-verified): `?? assets/`.
- Record provenance: this record did not exist at T1 start (`experiments/EXP-080-R3*` returned no file). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-080-R3/`.

## Objective (T1 scope)

Re-establish the Mongoose session through the top-level portal step if the Web Client is not usable (or record that it is usable). Dispose of any leftover wizard or prompt (none was present). Create this record with the session result, the action audit and the worker-written-file inventory, and capture the resulting Web Client. **Do not open any Form in T1.**

Later tasks (not authorized in T1): a fresh IDOs Form; one visible-criterion FX_Orders query (baseline: 16 Bound properties; Tables view with three entries; checked out to the operator); one New Property wizard (Derived; name `FX_DerOrderTotal` by Tab-committed keystrokes; class `FX_Cost`; expression `FX_Count * FX_ItmsCost`); one Finish; at most one Save; the recovery pair (IDOs close and reopen; one visible-criterion query) with 17 properties expected. The Label String ID override and Read Only setting belong to EXP-081; the Unload All Global Form Objects step is deferred.

## Sources reviewed (before browser interaction)

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation and recovery; evidence capture).
- `experiments/EXP-080-R2-hello-world-part-5-section-3-fx-orders-derived-order-total.md`: full (202 lines). Used for: the R2 blocker (session expired during disposition; the sign-in form was reached **inside the portal's embedded app frame**, and mingle-sso then refused to connect); the R2 outcome note that recovery needs the top-level portal navigation; the R2 counts (wizard openings 0; Finish 0; Save 0).
- `experiments/EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md`: full (630 lines; read as 1–520 and 521–630). Used for: the 16-row Bound baseline; the Derived page-1 and page-2 layouts; the required-value prompt "Value is required for Property Name" after a plain fill without a Tab commit (T3, T4); the session-about-to-expire notice; the operator outcome (diagnosis unverified: a fill without Tab commit leaves the committed name empty).
- `docs/mongoose/transcripts/hello-world-pt5.md`: Section 3 narrated steps and source cautions (lines 115–133). The raw transcript excerpt at 03:33–05:05 (lines 415–430, cited by R2) was **not** read in T1.
- **Not read in T1** (out of the T1 bounded scope; to be read before any browser interaction in the wizard task): `experiments/EXP-079-…` (FX_Orders properties; wizard pages; Filter in Place on reopen), `experiments/EXP-078-…` (FX_Orders checkout and Tables; Filter in Place), `experiments/EXP-061-…` (property class selection; inherit checkboxes), `experiments/EXP-048-…` (FX_Cost: Decimal 18/2, decimal, Label String ID FX_sCost).
- Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git command.

## Starting browser state (observed before any action in this run)

- `browser_tabs` list (before any selection): tab 0 = Infor Mongoose Application Development Framework (`mode=designer`, current) — **not selected, clicked, snapshotted, captured or otherwise touched**; tab 1 = `Logout Successful` (portal `session/slo/signoutsuccess` page). No Mongoose Web Client tab was open. The R2 "refused to connect" page was no longer present.
- Tab 1 selected (one select; succeeded after the list).
- Snapshot A (start): "Logout Successful — You have been successfully logged out. You can now close all browser windows." Cause of the sign-out not established (not investigated; no mutation was made in response).
- The EXP-080 IDO Property Wizard was **not** present (no wizard tab; no in-page prompt). No Session Expired modal and no session-warning strip were present.

## T1 actions (in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 Designer (current); tab 1 `Logout Successful` | — |
| 2 | `browser_tabs` select tab 1 | Succeeded after the list; tab 1 current | — |
| 3 | Snapshot A (untargeted; recovery gate) | Logout Successful page; Web Client not usable | snapshot (tool) |
| 4 | **Navigate tab 1 once** to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (the permitted portal step) | The portal URL redirected to the top-level Infor CloudIdentities Sign In page (`mingle-sso.se1.inforcloudsuite.com`) | — |
| 5 | Snapshot B (sign-in gate) | Top-level "Infor CloudIdentities - Sign In" form: Username and Password textboxes, Sign in button. **No tenant field** | snapshot (tool) |
| 6 | **Type `SECRET_MONGOOSE_USERNAME`** into Username (once) | Typed as the placeholder; no value recorded | — |
| 7 | **Type `SECRET_MONGOOSE_PASSWORD`** into Password (once) | Typed as the placeholder; no value recorded | — |
| 8 | **Click `Sign in`** (once) | Sign-in accepted at the top level; tab 1 moved to the Infor OS Portal (`System Administrator` workspace) | snapshot (tool) |
| 9 | Snapshot C (portal) | Infor OS Portal shell; a `portal-notification` banner ("The DistributionIFSContactUs group does not have any active users…") visible | snapshot (tool) |
| 10 | **Click the banner's own close (×) control** (once; standing authorization 2026-10-10; its links not clicked) | Banner dismissed | — |
| 11 | `browser_find` "Mongoose" | 3 matches, all dashboard widgets (no launcher) | find |
| 12 | Click `Open navigation menu` (portal top bar) | Navigation menu opened (search box, Workspaces, Bookmarks, Applications) | — |
| 13 | `browser_find` with both `text` and `regex` set | Tool rejected the call (argument error on my side; no browser effect) | find (errored) |
| 14 | Snapshot D | Navigation menu open; Applications lists OS, Inbox, Document Management, See more | snapshot (tool) |
| 15 | **Type `Mongoose`** into the portal menu search box (`Search this menu`) | Filtered to one result: Applications > `Mongoose` (OS) | — |
| 16 | `browser_find` "Mongoose" | 1 Applications result (link `Mongoose`) plus dashboard matches | find |
| 17 | **Click the `Mongoose` application link** (once; app open) | Tab 1 became a `Mongoose` portal tab (selected); the Mongoose app loaded in an app frame | — |
| 18 | Snapshot E | Frame present, content not yet rendered | snapshot (tool) |
| 19 | `browser_wait_for` 5 s (once) | Waited | — |
| 20 | Snapshot F | Mongoose Web Client rendered inside the app frame: Explorer panel (My Folders, Master Explorer, Public Folders, User Folders); toolbar (Open, Save disabled, New disabled, FiP disabled); identity bar showing the operator account and `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **No configuration Sign In appeared; no Session Expired modal; no Form open; no dialog or wizard** | snapshot (tool) |
| 21 | Screenshot `t1-session-recovery-web-client-loaded.png` | Viewed (see decisive evidence) | `t1-session-recovery-web-client-loaded.png` |

Not done in T1 (by design): no Explorer folder expanded; no Form opened (no IDOs, no runtime Form, no Select Form); no query; no wizard; no Save; no checkout action; no Designer action; no configuration sign-in (not presented); no proactive re-login (no session warning strip seen).

## Session recovery result (T1)

- **Result: session re-established.** The Web Client is usable in tab 1 (`Mongoose`, selected), identity bar configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Explorer visible, no modal or prompt. The re-login went through the top-level portal navigation, not the embedded app frame.
- The session-expiry procedure ran **once** (its one permitted re-login for this task): portal navigation (1); top-level sign-in submission (1); app open (1). The configuration sign-in step was not needed because the Web Client loaded without presenting the configuration Sign In.
- Observed at the end of T1: no session-warning strip in the screenshot; no minutes count visible; no Session Expired modal.
- Console counters reported by the tool at load: "24 errors, 10 warnings" (on the app-open page) rising to "50 errors, 10 warnings" after the frame loaded. Not inspected (console inspection is out of scope); recorded only as tool-reported counts, not as an operational finding.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R3/t1-session-recovery-web-client-loaded.png` | Tab `Mongoose` (portal shell); Mongoose Web Client Explorer panel (My Folders, Master Explorer, Public Folders, User Folders); toolbar with Save and New disabled; identity bar: operator account and `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no dialog, prompt, wizard or open Form; no session-warning strip | **AC-1 (session part):** the Web Client is usable after the top-level re-login; configuration identity matches; no leftover wizard or prompt; no Form open | The server-side session lifetime; that FX_Orders is checked out (no Form opened); the state of the Designer tab (tab 0, not inspected); any IDO state |

Snapshot readbacks (tool files, not screenshots) carry the sign-in, portal and Web Client text described in the action table (steps 5, 8, 9, 14, 20). They prove the accessibility-tree text only.

## Action audit (T1)

| Operation | T1 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| New Property wizard opened | **0** |
| Derived choice / class selection / expression fill | **0 / 0 / 0** |
| Property Name fills | **0** |
| Finish | **0** |
| Save | **0** |
| In-page prompts answered: Yes / No | **0 / 0** (none present) |
| Wizard Cancel | **0** (no wizard present) |
| Session Expired modal OK | **0** (none present) |
| Re-login (session-expiry procedure, once per task) | **1** (the procedure ran once; succeeded) |
| Navigation for re-login (portal URL) | **1** (permitted step; the only URL navigation) |
| Top-level sign-in submissions (Sign in clicks) | **1** (Username placeholder typed 1; Password placeholder typed 1) |
| Configuration sign-in | **0** (not presented) |
| App-open clicks (Mongoose portal app link) | **1** |
| Portal notification banner dismissals (own close control) | **1** |
| Proactive re-login / extra target query | **0 / 0** |
| IDOs close / reopen (pairs) | **0 / 0** (pairs 0 of 2) |
| Target F4 queries (visible-criterion) | **0** (of 2) |
| Select Form dialogs answered | **0** |
| Strings, property classes, SQL objects or columns, Forms, runtime records, IDO or property or table-entry changes | **0** |
| Designer actions (click, type, key, snapshot, screenshot, select) | **0** (tab 0 listed only; not selected) |
| Unload, cache, FormSync, deployment, regeneration | **0** |
| Browser JavaScript, evaluate, run-code, console or network inspection (worker-authored) | **0** (the tool wrapper's generated Playwright code is tool output, not worker input) |
| Refresh, restart | **0 / 0** |
| Direct URL navigation (other than the permitted portal step) | **0** |
| Filter in Place click | **0** (no Form open) |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **6 / 0** (A to F; the tool's auto-snapshot files after clicks and types are tool output and not counted) |
| `browser_find` | **2 successful** (steps 11, 16) **+ 1 errored** (step 13; my argument error; no browser effect) |
| Element clicks (successful / failed) | **4 / 0** (banner close; Open navigation menu; Mongoose app link; Sign in) |
| `browser_type` (succeeded / refused) | **3 / 0** (Username placeholder; Password placeholder; portal menu search `Mongoose`) |
| Key presses / Enter / Escape | **0 / 0 / 0** |
| Waits / mouse moves / wheel | **1 / 0 / 0** (5 s) |
| Screenshots | **1** (`t1-session-recovery-web-client-loaded.png`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | **0** |

Note: the portal menu search box received a text entry (`Mongoose`) through the tool; it is a portal navigation control, not a Mongoose artifact. It is counted in `browser_type` above.

## Acceptance status (after T1)

| AC | Status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable (or re-established); no leftover wizard or prompt; fresh IDOs Form; one visible-criterion query; Tables view and 16-property inventory; FX_DerOrderTotal absent | **PARTIAL in T1.** Sources reviewed (T1 scope: AGENTS.md, R2 and EXP-080 records, transcript Section 3). **Session re-established** (top-level portal step). No leftover wizard or prompt. **Not performed in T1:** fresh IDOs Form; the visible-criterion query; checkout, Tables and inventory readbacks; FX_DerOrderTotal absence proof | `t1-session-recovery-web-client-loaded.png` (session part only) | The IDO evidence is for a later task |
| AC-2 to AC-5 | **Not started** | — | — |

## Knowledge state (per finding)

| Finding | State |
|---|---|
| The Web Client tab at T1 start showed the portal's "Logout Successful" page (the session had been signed out; not the R2 refused-connection page) | **observed** (one run) |
| A top-level portal navigation redirected to the Infor CloudIdentities Sign In form, which accepted the placeholder sign-in once | **observed** (one run) |
| After the top-level sign-in, the Mongoose app opened from the portal's Applications menu (search `Mongoose`) and the Web Client loaded in the app frame without a configuration Sign In | **observed** (one run) |
| The embedded-frame sign-in refusal recorded in EXP-080-R2 was **not** reproduced, because T1 signed in at the top level only | **observed** (one run; the R2 cause remains unresolved) |
| FX_Orders identity, checkout, Tables, 16-property baseline and FX_DerOrderTotal absence | **not performed** (no Form opened in T1) |
| Derived wizard behaviour (page 2 entries, class inheritance, expression readback, Finish response) | **not performed** |
| Replay or database durability | **not claimed** (not replay_verified) |

## Worker-written-file inventory (T1)

- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (created; this record).
- `evidence/EXP-080-R3/t1-session-recovery-web-client-loaded.png` (created; the directory was created by the screenshot write).
- Tool-written snapshot, console and log files under `evidence\playwright\` (for example `page-2026-10-13T17-27-13-759Z.yml`, `page-2026-10-13T17-27-45-716Z.yml`, `console-2026-10-13T17-27-13-383Z.log`) are wrapper-written, not worker-authored. They were read only as tool readbacks. This is a known confinement limitation: they sit outside the EXP-080-R3 path; operator git review is authoritative.

No other repository file was written, edited or deleted in T1. No file under `experiments/EXP-080` or `evidence/EXP-080*` was edited.

## Open questions and blockers

1. **No blocker in T1.** The session is re-established.
2. **Designer tab (tab 0) state not inspected.** It remains the Mongoose Designer tab (`mode=designer`) and was not selected, snapshotted or captured in T1. Whether it is expired is not established; per the brief it is left for the coordinator's next task. No Web Designer action was taken.
3. **Cause of the sign-out at T1 start is not established.** The tab showed the portal's "Logout Successful" page; the EXP-080-R2 run had ended with a refused SSO connection. This run did not investigate the cause.
4. **Session lifetime not measured.** No session-warning strip was visible at the end of T1. A later task must check the status before the wizard, per the session-warning rule.
5. **Next permitted action (T2, not authorized in T1):** a fresh tab list; a fresh snapshot of the Web Client tab (tab 1); open the IDOs Form once through Form > Open > Select Form (no IDOs tab exists yet, so no close is needed); enter `FX_Orders` in the IDO Name criterion in Filter in Place (status bar checked first); commit with Tab; capture the pre-F4 criterion; one F4; record identity, checkout, Tables and the 16-property inventory; prove FX_DerOrderTotal absent. The EXP-079, EXP-078, EXP-061 and EXP-048 records must be read before the wizard step; the T2 bounded instruction decides whether the wizard is opened.
6. Classification remains **observed only, NOT replay_verified**.

---

## T2 — Source review; FX_Orders baseline (IDOs Form opened once; one F4; inventory read; no wizard) (cycle 1; AC-1 supported as observed)

- Task T2, cycle 1, task_message_id `da09af3a-0dd4-4af0-8788-4c91651fc0e6`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Scope (bounded instruction): read the sources; tab list; select tab 1 (Web Client); IDOs Form opened once through Form > Open > Select Form; FX_Orders criterion in Filter in Place; one F4; identity, checkout, Tables and the complete property inventory; prove FX_DerOrderTotal absent. **No wizard, no Finish, no Save, no checkout action, no Designer action.**

### Sources reviewed (before browser interaction)

- `docs/mongoose/transcripts/hello-world-pt5.md` lines 405–434 (the 03:33–05:05 narration is lines 415–430; read in full in T2, after lines 117–133 in T1). Relevant narration: close the IDO tables form; "select the new property button then select derived"; name with the Der prefix ("dur order total"); assign the cost property class and "it should automatically inherit the data type"; expression "count space asterisk space itms cost"; "property names in the expressions are case sensitive"; then Finish; Label String ID and Read Only are EXP-081; unload (line 430) is deferred. Source cautions (lines 129–133): the case-sensitivity claim is a tutorial claim, not verified; `DerOrderTotal`, `Der_OrderTotal` and `Count * ItmsCost` are examples only.
- `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md`: **targeted grep only** (not a full read). Used for: the Bound wizard pattern (page 1 Bound active; Derived, Unbound, Subcollection unselected; page 2 Bind To, Property Name, Property Class); the Filter-in-Place-on-reopen state; the 16-row state after the three properties (FX_ItmsPicture at sequence 12, via the EXP-080 baseline). **No Derived page was recorded in EXP-079** (all its wizards were Bound), so the Derived page behaviour is new in this experiment.
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md`: **targeted grep only**. Used for: the reopened IDOs Form opening already in Filter in Place (status bar); one F4 sufficing after one criterion; the Tables view after the join (`fxcus`); the FX_Orders checkout pattern.
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md`: **targeted grep only** (the T1 summary lines and the T3/T4 wizard lines). Used for: the Property Class lookup offers checked-out classes; "Inherit from Property Class" checkboxes; inherited Data Type, Length and Column Data Type appear on page 2 after the class is chosen; Finish commits immediately with no displayed text; Save stays disabled.
- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md`: **targeted grep only**. FX_Cost: Data Type `Decimal`; Length `18`; Decimal Position `2`; Default Value `0`; Column Data Type `decimal`; Label String ID `FX_sCost`; checked out to the operator at the time (not re-checked in T2; the class was not opened or edited).
- Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git command.
- Consequence for the wizard task (not performed in T2): the inherited types on a Derived page are **unverified** until the page is seen; the EXP-080 prompt "Value is required for Property Name" after a plain fill without a Tab commit is unexplained (operator diagnosis unverified); the wizard task must Tab-commit the name (per the brief) and stop at any prompt.

### Browser actions (T2, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 Designer (current; not touched); tab 1 `Mongoose` (portal app, `favoriteContext=IdoCollections`) | — |
| 2 | `browser_tabs` select tab 1 | Succeeded after the list | — |
| 3 | Snapshot 1 (untargeted; start gate) | Web Client usable (Explorer; identity bar; toolbar); **no IDOs tab open**, no wizard, no prompt, no Session Expired modal, no session strip | snapshot (tool) |
| 4 | Click `Form` menu (once) | Menu open: `Open` enabled; `Close and Save Changes` disabled | — |
| 5 | `browser_find` "Open" | Menu item `Open` present | find |
| 6 | Click `Open` (once) | Select Form dialog opened (Filter pre-filled `IdoCollections`) | — |
| 7 | `browser_find` "Select Form" | Dialog present | find |
| 8 | Snapshot 2 (untargeted; dialog refs) | Dialog rows `G6RIdoCollectionSearch` and `IDOs / IdoCollections` | snapshot (tool) |
| 9 | Click the `IDOs / IdoCollections` row (once; the `IDOs` cell) | Row active; search form row not selected | — |
| 10 | `browser_find` "IdoCollections" | Confirms `IDOs` gridcell `[active]` | find |
| 11 | Click Select Form `OK` (once) | IDOs Form opened (`favoriteContext=IdoCollections`) | — |
| 12 | Snapshot 3 (untargeted; status-bar check before any click) | IDOs Form: status bar **`Filter in Place`**; IDO Name criterion active and blank; Save and New disabled; Check Out button in the FiP view; Filter in Place button not pressed (not clicked) | snapshot (tool) |
| 13 | Type `FX_Orders` into IDO Name (once; keystrokes, `slowly` true) | Typed | — |
| 14 | Press `Tab` (once; IDO Name commit) | Echo row `FX_Orders` | — |
| 15 | Screenshot `t2-01` (pre-F4 criterion) | Viewed; see decisive evidence | `t2-01` |
| 16 | Press `F4` (once; the target query) | Query executed; no second F4 | — |
| 17 | Snapshot 4 (untargeted; post-F4) | Status `Description (IDOs 1 of 1)`: **one row** `FX_Orders`, checkbox checked; Revision Num 2; Revision Date 10/13/2026; Locked By the operator account; Check In and Undo Check Out enabled; Save disabled; Tables sub-tab selected with three entries | snapshot (tool) |
| 18 | Screenshot `t2-02` (identity and Tables) | Viewed; see decisive evidence | `t2-02` |
| 19 | Click the in-form `Properties` sub-tab (view only; not the toolbar `Properties` button) | Properties grid shown | — |
| 20 | Screenshot `t2-03` (rows 1–8) | Viewed; see decisive evidence | `t2-03` |
| 21 | Mouse move to the grid (1000, 720) and one wheel scroll (deltaY +300) (view only) | Rows 9–16 shown | — |
| 22 | Screenshot `t2-04` (rows 9–16) | Viewed; see decisive evidence | `t2-04` |
| 23 | `browser_find` "Derived" | No matches | find |
| 24 | `browser_find` "DerOrder" | No matches | find |
| 25 | Snapshot 5 (untargeted; accessibility readback of the 16 Properties rows) | 16 rows (gridcells 1–16); every Property Type `Bound to Column`; names as in the inventory below; no 17th row; Save disabled | snapshot (tool) |

Not done in T2 (by design): no wizard; no Finish; no Save; no Check Out, Check In or Undo Check Out (the Check In button was visible and not pressed); no Filter in Place button click; no second F4; no IDOs close; no Designer action; no property, table, class, string, SQL, Form or runtime change; no portal navigation; no re-login; no session-expiry procedure (no expiry seen).

### Baseline (T2; observed after the single F4)

**Identity and checkout (AC-1):**

| Field | Observed |
|---|---|
| IDO Name | `FX_Orders` (one row; exact name) |
| Project Name | `FX_HelloWorldProject01` |
| Revision Num | **2** (unchanged from EXP-080 T1 and EXP-079) |
| Revision Date | `10/13/2026` (not today's date, 2026-10-14; mechanism not established) |
| Locked By | the operator account (matches the identity bar; the account value is not repeated here) |
| Checkout state | **Checked out to the operator**: row checkbox checked; Check In enabled; Undo Check Out enabled. **Checkout gate passed** (observed UI state; not a database read). |
| Access As / Label String ID / Caption | `G6R` / `oFX_Orders` / `oFX_Orders` |
| Save (toolbar) | disabled (clean) |

**Tables view (three entries, as expected):**

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| 3 | FX_Orders | fxords | Primary Base | Inner | (blank) |

**Property inventory (complete; 16 rows; Properties sub-tab; read from `t2-03`, `t2-04` and the accessibility readback of step 25):**

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Data Type | Length | Column Type | Read Only |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | (class-bound) | — | (class-bound) | no |
| 2 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | String | 100 | nvarchar | yes |
| 3 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | (class-bound) | — | (class-bound) | no |
| 4 | FX_ItmsDescription | 2 | (blank) | Bound to Column | FX_Description | String | 150 | nvarchar | yes |
| 5 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | (class-bound) | 50 | (class-bound) | no |
| 6 | FX_ItmsCost | 3 | FX_Cost | Bound to Column | FX_Cost | Decimal | 18 | decimal | yes |
| 7 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | Long Integer | — | int | no |
| 8 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | String | 128 | UsernameType | yes |
| 9 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | String | 128 | UsernameType | yes |
| 10 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | Date | — | CurrentDateType | yes |
| 11 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | Date | — | CurrentDateType | yes |
| 12 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | GUID | — | RowPointerType | yes |
| 13 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | String | 150 | nvarchar | yes |
| 14 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | Byte | — | FlagNyType | no |
| 15 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | Byte | — | FlagNyType | no (Read Only Record: yes) |
| 16 | FX_ItmsPicture | 12 | FX_Picture | Bound to Column | FX_Picture | Binary | — | varbinary | yes |

- Matches the EXP-080 T1 baseline row for row (names, sequences, classes, types). The `Read Only` column is read from the accessibility checkbox state and the screenshots; the mapping (first checkbox column = Read Only) is the one used in EXP-080 T1.
- `FX_ItmsCost` is confirmed: class `FX_Cost`; Data Type `Decimal`; Length `18`; Column Type `decimal`. This matches EXP-048.
- **Absent (proved by the complete inventory and the two searches):** `FX_DerOrderTotal` under any case, and any Derived property. Every row reads `Bound to Column`; `browser_find` "Derived" and "DerOrder" returned no matches. No 17th row.
- Sequence values are shared (2, 2, 2; 3, 3; 10, 10); observation only.

### Form state after T2

- The IDOs Form is open, **clean** (Save disabled; no dialog; no unsaved change), with the in-form Properties sub-tab selected. Status bar `P&roperties`.
- FX_Orders remains checked out to the operator at Revision 2.
- The Web Designer tab (tab 0) was listed only; not selected, clicked, captured or acted on.
- No session-expiry or re-login was triggered in T2; no session strip was visible at the end of T2.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources; session usable; no leftover wizard or prompt; fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders checked out to the operator; Tables (three entries) and 16-property inventory recorded; FX_DerOrderTotal absent | **SUPPORTED (observed; UI and accessibility level).** Sources reviewed (targeted reads of EXP-079, EXP-078, EXP-061, EXP-048; transcript read). Session usable (T1 recovery; no expiry in T2). No wizard or prompt present at T2 start. IDOs Form opened once (fresh; no prior IDOs tab, so no close). One F4 after one criterion returned one FX_Orders row, checked out to the operator. Tables: three entries. 16 Bound properties. FX_DerOrderTotal absent | `t2-01` (pre-F4 criterion), `t2-02` (identity and Tables), `t2-03` and `t2-04` (inventory rows 1–8 and 9–16) | Same-session UI only; checkout interpreted from Locked By and enabled controls; no database read; the Revision Date mechanism not established |
| AC-2 to AC-5 | **Not started** (the wizard, Finish, Save, recovery pair and second target query are later tasks) | — | — |

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R3/t2-01-pre-f4-idos-fx-orders-criterion.png` | IDOs Form (tab selected); IDO Name criterion `FX_Orders`; echo row `FX_Orders`; status bar `Filter in Place`; Save greyed; Check Out button in the FiP view; identity bar operator account and `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | **AC-1** pre-F4 criterion and the Filter-in-Place state before the one query | That F4 returned the row (see `t2-02`) |
| `evidence/EXP-080-R3/t2-02-post-f4-identity-and-tables-view.png` | IDOs tab; one row `FX_Orders` with checkbox checked; Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/13/2026; Locked By the operator account (truncated in the image; matches the identity bar); Check In and Undo Check Out enabled; Save greyed; Tables: FX_HelloWorld01/fxcus, FX_Items/fxitms, FX_Orders/fxords with both joins; status `Description (IDOs 1 of 1)` | **AC-1** identity, checkout state, one visible-criterion result and the three-entry Tables view | The property inventory (see `t2-03`, `t2-04`); database state |
| `evidence/EXP-080-R3/t2-03-baseline-inventory-properties-rows-1-to-8.png` | Same identity; Properties grid rows 1–8: FX_OrderNumber (1), FX_CusName (2), FX_CustomerID (2), FX_ItmsDescription (2), FX_Item (3), FX_ItmsCost (3; FX_Cost; Decimal; 18; decimal), FX_Count (4), CreatedBy (5); every Property Type `Bound to Column` | **AC-1** rows 1–8 of the 16-row baseline; FX_ItmsCost class and type | Rows 9–16 (see `t2-04`) |
| `evidence/EXP-080-R3/t2-04-baseline-inventory-properties-rows-9-to-16.png` | Same identity; rows 9–16: UpdatedBy (9) through FX_ItmsPicture (16; FX_Picture; Binary; varbinary); row 16 is the last visible row; no 17th row; all `Bound to Column` | **AC-1** rows 9–16; FX_DerOrderTotal absent (no 17th row; no Derived type in the visible grid) | Rows 1–8 (see `t2-03`); the stored state |

The accessibility readback (step 25) confirms the same 16 names and types, and both searches (`Derived`, `DerOrder`) returned no matches.

### Action audit (T2 only)

| Operation | T2 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** (the Check In button was visible after F4 and was not pressed) |
| New Property wizard opened | **0** |
| Derived choice / class selection / expression fill | **0 / 0 / 0** |
| Property Name fills | **0** |
| Finish / Save | **0 / 0** |
| In-page prompts answered: Yes / No | **0 / 0** (none present) |
| Wizard Cancel | **0** |
| Session Expired modal OK | **0** (none present) |
| Re-login / portal navigation / sign-in / app-open | **0 / 0 / 0 / 0** |
| Proactive re-login; extra target query | **0; 0** |
| IDOs Form opened (Select Form) | **1** (fresh; no prior IDOs tab, so no close) |
| IDOs close / reopen (pairs) | **0 / 0** in T2 |
| Target F4 queries (visible-criterion) | **1** (of 2) |
| Select Form dialogs answered (OK) | **1** |
| Strings, property classes, SQL objects or columns, Forms, runtime records, IDO / property / table-entry changes | **0** |
| Designer actions | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | **0** |
| Browser JavaScript, evaluate, run-code, console, network (worker-authored) | **0** (the wrapper's generated Playwright code is tool output) |
| Refresh, restart, direct URL navigation | **0 / 0 / 0** |
| Filter in Place button click | **0** (status bar checked; already active on open) |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **5 / 0** (steps 3, 8, 12, 17, 25) |
| `browser_find` | **5 successful** (steps 5, 7, 10, 23, 24); 0 errored |
| Element clicks (successful / failed) | **5 / 0** (Form; Open; IDOs row; Select Form OK; in-form Properties sub-tab) |
| `browser_type` (succeeded / refused) | **1 / 0** (IDO Name criterion, `slowly` true) |
| Key presses / Enter / Escape | **2 / 0 / 0** (Tab once; F4 once) |
| Waits / mouse moves / wheel | **0 / 1 / 1** (move to the grid; one wheel scroll deltaY +300) |
| Screenshots | **4** (`t2-01` to `t2-04`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | **0** |

**Cumulative (T1 + T2; EXP-080-R3):**

| Operation | T1 | T2 | Cumulative |
|---|---|---|---|
| Check Out / Check In / Undo | 0 | 0 | **0 / 0 / 0** |
| Portal navigation (permitted step) | 1 | 0 | **1** |
| Top-level sign-in: username / password / Sign in | 1 / 1 / 1 | 0 | **1 / 1 / 1** |
| App-open clicks (Mongoose portal link) | 1 | 0 | **1** |
| Configuration sign-in | 0 | 0 | **0** |
| Portal banner dismissals (own close control) | 1 | 0 | **1** |
| Re-logins (session-expiry procedure) | 1 | 0 | **1** (of 1 allowed per task; the procedure ran in T1 only) |
| New Property wizard opened | 0 | 0 | **0** |
| Derived / class / expression / Finish / Save | 0 | 0 | **0 / 0 / 0 / 0 / 0** |
| Yes / No / Cancel | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| IDOs open (Select Form OK) | 0 | 1 | **1** (the first IDOs open of this experiment; the recovery close/reopen pair is not yet run: 0 of 2) |
| IDOs close / reopen pairs | 0 / 0 | 0 / 0 | **0 / 0** (of 2) |
| Target F4 queries | 0 | 1 | **1** (of 2) |
| Strings, classes, SQL, Forms, runtime records, IDO / property / table changes | 0 | 0 | **0** |
| Designer actions | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | **0** |
| Browser JavaScript / console / network (worker-authored) | 0 | 0 | **0** |
| Refresh / restart / direct URL (other than the portal step) | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | **2 / 2** |
| Snapshots, untargeted / targeted | 6 / 0 | 5 / 0 | **11 / 0** |
| `browser_find` (successful / errored) | 2 / 1 | 5 / 0 | **7 / 1** (the T1 error was an argument error on my side; no browser effect) |
| Element clicks (successful / failed) | 4 / 0 | 5 / 0 | **9 / 0** |
| `browser_type` | 3 | 1 | **4** |
| Key presses (Tab; F4; Enter; Escape) | 0 | 2 | **2** (Tab 1; F4 1; Enter 0; Escape 0) |
| Waits / mouse moves / wheel | 1 / 0 / 0 | 0 / 1 / 1 | **1 / 1 / 1** |
| Screenshots | 1 | 4 | **5** |
| Ref-not-found / timeouts / native dialogs | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | 0 | 0 | **0** |

### Worker-written-file inventory (T2)

- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; this T2 section).
- `evidence/EXP-080-R3/t2-01-pre-f4-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-080-R3/t2-02-post-f4-identity-and-tables-view.png` (created).
- `evidence/EXP-080-R3/t2-03-baseline-inventory-properties-rows-1-to-8.png` (created).
- `evidence/EXP-080-R3/t2-04-baseline-inventory-properties-rows-9-to-16.png` (created).
- Wrapper-written snapshot, console and log files under `evidence\playwright\` (for example `page-2026-10-13T17-30-41-774Z.yml`, `page-2026-10-13T17-31-01-150Z.yml`, `console-2026-10-13T17-30-24-387Z.log`) are tool output, not worker-authored. They sit outside the EXP-080-R3 path (known confinement limitation; operator git review authoritative).

No other repository file was written, edited or deleted in T2. No file under `experiments/EXP-080` or `evidence/EXP-080` was edited.

### Knowledge state (T2)

| Finding | State |
|---|---|
| Reopening the IDOs Form through Form > Open > Select Form (`IDOs / IdoCollections`) opened it already in Filter in Place (status bar), with the IDO Name criterion blank | **observed** (second run; consistent with EXP-080 T1 and EXP-078) |
| One visible-criterion F4 for `FX_Orders` returns one row, checked out to the operator, Save disabled | **observed** (one run in this experiment; UI level) |
| FX_Orders Tables view has three entries (fxcus, fxitms, fxords) with the two joins | **observed** (one run; UI level) |
| FX_Orders has 16 Bound properties, including FX_ItmsCost (FX_Cost; Decimal 18 decimal) and FX_ItmsPicture (FX_Picture); no Derived property; FX_DerOrderTotal absent | **observed** (one run; UI and accessibility level) |
| The T2 baseline matches the EXP-080 T1 baseline row for row | **observed** (cross-run comparison in the same environment) |
| Derived wizard behaviour (page 2 entries, class inheritance, expression readback, Finish response) | **not performed** (later task) |
| Replay or database durability | **not claimed** (not replay_verified) |

### Open questions and next permitted action

1. **No blocker in T2.** Checkout gate passed; baseline complete; no leftover state.
2. The Revision Date `10/13/2026` on a 2026-10-14 session is unexplained (as in EXP-078, EXP-079 and EXP-080).
3. The Web Designer tab (tab 0) was not inspected; its state is unknown and left for the coordinator.
4. The wizard task (not authorized in T2): one New Property opening; Derived; name by keystrokes plus one Tab; FX_Cost; expression by keystrokes with a click on the Property Attributes area; Finish once only if every gate passes; stop and Cancel at any prompt.
5. Classification remains **observed only, NOT replay_verified**.

---

## T3 — Derived wizard configured; Finish NOT invoked; wizard left open (cycle 2; AC-2 configuration observed)

- Task T3, cycle 2, task_message_id `ef097ece-88e7-4774-8323-c1bf3b179246`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Scope (bounded instruction): review the full relevant sections of EXP-079, EXP-078, EXP-061 and EXP-048; confirm the gate; open New Property once; choose Derived; Next once; Property Name by slow keystrokes plus one Tab; FX_Cost once; expression by slow keystrokes; commit by one click on the empty Property Attributes area; capture the configured page; **do not Finish or Save**. Tab 1 only; Designer tab 0 not inspected or touched.

### Sources reviewed (before browser interaction; full relevant sections)

- `experiments/EXP-079-…` lines 317–376 (T3 actions, field record, post-Finish inventory): the Bound wizard pattern; page 1 Bound active with Derived, Unbound and Subcollection unselected; page 2 Bind To, Property Name, Property Class; the Finish response with no text; the wizard closed and the IDOs tab became active. **Derived was not used in EXP-079 (all its wizards were Bound), so the Derived page is new here.**
- `experiments/EXP-061-…` lines 96–174 (T1–T5 summary and T3/T4 wizard records): the Property Class lookup offers checked-out classes; the class's inherited Data Type and Column Data Type appear as "Inherit from Property Class" checkboxes with inherited values (Binary, -1, varbinary); Finish commits immediately with no displayed text; Save stays disabled; a Finish with the wizard in page 2 left the Form clean. **Caution:** in EXP-061 the Property Name was populated by the wizard after the Bind To choice, not typed; this experiment's name is typed (Derived page has no Bind To).
- `experiments/EXP-048-…` (targeted; FX_Cost attributes: Data Type Decimal; Length 18; Decimal Position 2; Default Value 0; Column Data Type decimal; Label String ID FX_sCost; class checked out to the operator; not edited).
- `experiments/EXP-078-…` and EXP-080-R3 T2 (Filter in Place on reopen; one F4): reviewed for the gate; no wizard content in EXP-078.
- `experiments/EXP-080-…` (T2–T4): the T3 prompt "Value is required for Property Name / Do you want to change the value now?" after a plain fill without Tab, and the Derived page 2 layout (T2). Operator diagnosis (unverified): a fill without a Tab commit leaves the committed name empty. This run therefore used slow keystrokes and one Tab, and checked for the prompt before any other field.
- Not read: `tools/`; the secrets file; no shell or git command.

### Gate (T3; fresh; before the wizard)

| Check | Observed |
|---|---|
| Tab list (before selection) | Tab 0 Designer (current; not touched); tab 1 Mongoose (`favoriteContext=IdoCollections`) |
| Tab 1 select | Succeeded after the list |
| Untargeted snapshot (gate) | IDOs tab selected and **clean**: Save disabled; no dialog; no wizard; no prompt; no Session Expired modal; **no session-warning strip element** in the accessibility tree; status `P&roperties`; IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator account; Check In and Undo Check Out enabled; Access As `G6R`; one row `FX_Orders` checkbox checked |
| Properties grid (same snapshot) | 16 rows, all `Bound to Column`: FX_OrderNumber, FX_CusName, FX_CustomerID, FX_ItmsDescription, FX_Item, FX_ItmsCost (FX_Cost; Decimal; 18; decimal), FX_Count, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, FX_CusAddress, NoteExistsFlag, InWorkflow, FX_ItmsPicture (FX_Picture; Binary; varbinary). No FX_DerOrderTotal |
| Session warning | None visible in the gate snapshot or in the wizard page-1 screenshot (`t3-01`). The proactive re-login was **not** triggered |
| Gate verdict | **Passed**: one FX_Orders IDO; checked out to the operator; complete 16-property baseline unchanged; FX_DerOrderTotal absent; no leftover wizard or prompt |

### Actions (T3, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current; tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Succeeded after the list | — |
| 3 | Snapshot (gate) | As above | snapshot (tool) |
| 4 | **New Property**, one click | IDO Property Wizard opened (`favoriteContext=IdoPropertyWizard`). IDOs tab disabled behind it | — |
| 5 | Snapshot (page 1) | IDO Name `FX_Orders` (in the field labelled "Property Name:"; accessibility mislabel recorded in EXP-061 and EXP-079); Bound checked (default); Derived, Unbound, Subcollection unchecked; Back disabled; Next enabled; Finish disabled | snapshot (tool) |
| 6 | Screenshot `t3-01` (page 1, before the Derived choice) | Bound selected; four options | `t3-01` |
| 7 | **Click the Derived radio** (once; ref `f1e1172`) | **Timed out**: "element is outside of the viewport"; the locator resolved and was reported "visible, enabled and stable" (same signature as EXP-080 T2). The click did not run | error text |
| 8 | Snapshot (fresh; one read-only check) | Unchanged: Bound checked; Derived unchecked; Finish disabled | snapshot (tool) |
| 9 | **Click the visible Derived label** (once; the brief's fallback) | Click ran with no error | — |
| 10 | Snapshot (readback) | Derived radio `[checked] [active]`; Bound unchecked; status bar `Derived`; Next enabled; Finish disabled; no message or prompt | snapshot (tool) |
| 11 | **Click Next >** (once) | Page 2 loaded; Back enabled; Next disabled; Finish enabled | snapshot (tool) |
| 12 | Snapshot (page 2) and screenshot `t3-02` (before any entry) | Page 2 recorded below; nothing typed | snapshot (tool); `t3-02` |
| 13 | **Click Property Name** (once) | Focus in the field | — |
| 14 | **browser_type `FX_DerOrderTotal`, slowly = true** (keystrokes; no programmatic fill) | Typed | — |
| 15 | **Press Tab** (once) | Focus moved to Property Class | — |
| 16 | Snapshot (committed-name readback) and screenshot `t3-03` | Property Name textbox reads **`FX_DerOrderTotal`**; **no prompt, no message**; Property Class combobox has focus and is empty; all other fields unchanged | snapshot (tool); `t3-03` |
| 17 | **Click the Property Class `Open` button** (once) | List opened | — |
| 18 | `browser_find` "FX_Cost" | Lookup option `FX_Cost` present (one match; look-alikes not seen) | find |
| 19 | **Click the `FX_Cost` option** (once) | Property Class `FX_Cost` | — |
| 20 | Snapshot (class readback) and screenshot `t3-04` | Class `FX_Cost`; Data Type inherit **ticked**; Data Type `Decimal`; Length `18`; Decimal `2`; Column Data Type inherit **ticked**; Column Data Type `decimal`; Expression inherit **ticked** with the expression box **disabled** (greyed); no message or prompt | snapshot (tool); `t3-04` |
| 21 | **Click the Expression "Inherit from Property Class" checkbox** (once; ref `f1e1266`) | **Timed out**: "`<span data-ref="displayEl">` intercepts pointer events" on the checkbox (an overlay span on the checkbox). The click did **not** run; state unchanged | error text |
| 22 | Snapshot (fresh; one recovery read) | Unchanged: Expression inherit ticked; expression box disabled | snapshot (tool) |
| 23 | **Click the Expression inherit label text** (once; corrected attempt; ref `f1e1268`) | Click ran; the next snapshot shows the Expression inherit **unticked** and the expression box **enabled**. Data Type and Column Data Type inherit boxes still ticked | snapshot (tool) |
| 24 | **Click into the expression text area** (once) | Focus in the expression box | — |
| 25 | **browser_type `FX_Count * FX_ItmsCost`, slowly = true** (keystrokes; no programmatic fill) | Typed | — |
| 26 | **Mouse click at (600, 620)** (once; the blank area of the Property Attributes page, below the buttons; **not** Tab, **not** Enter) | Commit click; the focus left the expression box | — |
| 27 | Snapshot (expression readback) | Expression textbox reads **`FX_Count * FX_ItmsCost`**; Expression inherit unticked; Data Type inherit ticked (Decimal, 18, 2); Column Data Type inherit ticked (`decimal`); Next disabled; **Finish enabled and NOT pressed**; no validation message or prompt | snapshot (tool) |
| 28 | Screenshot `t3-05` (fully configured page before Finish) | As row 27, visibly | `t3-05` |

**Finish was not invoked. Save was not invoked. The wizard was left open (intentional, per the T3 bounded instruction).**

### Wizard field record (verbatim readbacks; T3)

| Field | Recorded value (readback) | Inherit state |
|---|---|---|
| Page 1 binding | Derived (radio checked; Bound unchecked; status bar `Derived`) | — |
| Page 2 before entry | Property Name empty and required (`*`); Property Class empty (no inherit box); Data Type empty with inherit unchecked; Length and Decimal empty; Column Data Type empty with inherit unchecked; Expression empty with inherit unchecked; Finish enabled; Next disabled (`t3-02`) | Data Type unchecked; Column Data Type unchecked; Expression unchecked |
| Property Name (after Tab) | `FX_DerOrderTotal` | — |
| Property Class | `FX_Cost` | — |
| Data Type | `Decimal` (inherited) | ticked |
| Length | `18` (inherited) | — |
| Decimal | `2` (inherited) | — |
| Column Data Type | `decimal` (inherited) | ticked |
| Expression (readback) | `FX_Count * FX_ItmsCost` | **unticked** (was ticked and disabled after the class selection; unticked by one label click) |
| Read Only | not on page 2 (no Read Only control is visible on this Derived page; matches EXP-080 T2) | — |
| Validation message / prompt | none at any stage | — |

The red spell-check underline under the expression text in `t3-05` is the browser's spelling marker, not a Mongoose validation message.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R3/t3-01-wizard-page1-bound-default-before-derived.png` | IDO Property Wizard tab selected; IDO Name `FX_Orders`; Bound selected; Derived, Unbound, Subcollection listed; Back disabled; Next enabled; Finish greyed; no session strip at the top | Page 1 options and the default before the choice | That Derived was chosen (see `t3-02`) |
| `evidence/EXP-080-R3/t3-02-wizard-page2-derived-before-any-entry.png` | Property Attributes page: Property Name (required, empty); Property Class (empty); Data Type and Column Data Type with inherit boxes unchecked and empty; Length and Decimal empty; Expression inherit unchecked with an empty text area; Next greyed; Finish enabled; Back and Cancel enabled | Page 2 fields and defaults before any entry | The committed name and class (see `t3-03`, `t3-04`) |
| `evidence/EXP-080-R3/t3-03-committed-property-name-no-prompt.png` | Property Name `FX_DerOrderTotal`; focus on Property Class (empty); no prompt, no message | The name is visibly committed by the Tab with no prompt | That the name is registered in the wizard model beyond the field display (only the absence of a prompt and the readback show that) |
| `evidence/EXP-080-R3/t3-04-class-fx-cost-selected-inherited-types.png` | Property Class `FX_Cost`; Data Type inherit ticked; Decimal; Length 18; Decimal 2; Column Data Type inherit ticked; decimal; Expression inherit ticked with the expression box greyed | The class readback and the inherited types on this Derived page; the Expression inherit state before the untick | The stored property after Finish |
| `evidence/EXP-080-R3/t3-05-configured-wizard-before-finish-not-pressed.png` | Full configured page: Property Name `FX_DerOrderTotal`; Property Class `FX_Cost`; Data Type inherit ticked (Decimal, 18, 2); Column Data Type inherit ticked (decimal); Expression inherit unticked; expression `FX_Count * FX_ItmsCost`; Next greyed; Finish enabled and not pressed; no message or prompt | **AC-2** configured state before Finish: every visible field value and the expression readback | That Finish would succeed or the response to Finish (not invoked); the expression's correctness (not evaluated) |

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Carried from T1 and T2; re-confirmed at the T3 gate (one FX_Orders checked out to the operator; 16-row baseline; FX_DerOrderTotal absent) | snapshot readback (gate); T2 screenshots | Same session; no database read; the T3 gate used the accessibility tree and no new screenshot |
| AC-2 | **Configured; Finish NOT invoked.** One wizard opening; Derived chosen (radio click timed out; label click selected it, readback confirmed); page 1 and page 2 recorded before entry; Property Name typed by keystrokes and Tab-committed with no prompt; class FX_Cost with Decimal, 18, 2, decimal; Expression inherit unticked (one label click); expression readback `FX_Count * FX_ItmsCost`; configured state captured. **Pending:** the single Finish and its response | `t3-01` to `t3-05` | Finish response not captured (not invoked); the expression is not evaluated |
| AC-3 to AC-5 | **Not started** (Finish, post-Finish inventory, Save decision, the recovery pair) | — | — |

### Blockers and deviations (T3)

1. **Derived radio click timeout (repeat of EXP-080 T2).** The radio click timed out with "element is outside of the viewport" although the locator reported the element as visible, enabled and stable. A read-only snapshot confirmed nothing had changed; the visible Derived label then worked. Suspected environment issue (layout or viewport mismatch); cause not established.
2. **Expression inherit checkbox click intercepted (new).** The click on the checkbox timed out because an overlay span (`ext-comp-1449-displayEl`) intercepted pointer events on the checkbox. A fresh snapshot showed the state unchanged; one corrected click on the same box's label text unticked it. Suspected environment issue (overlay on the ExtJS checkbox); cause not established. The label click was the single corrected attempt for this step.
3. **No Finish; no Save.** Per the brief, the wizard stays open for the Finish decision.

### Current browser state (end of T3)

- Tab 1 (Mongoose, `favoriteContext=IdoPropertyWizard`) is selected. The **IDO Property Wizard is open on page 2** with the configured values above; Finish enabled and **not pressed**; Next disabled; Back and Cancel enabled.
- The IDOs tab behind the wizard is disabled and clean (Save disabled at the T3 gate; no change was made to it). FX_Orders remains checked out to the operator (Check In and Undo Check Out enabled at the gate).
- **No in-page prompt or browser-native dialog is open.** The wizard itself is the open in-page dialog that the T3 bounded instruction requires to remain open.
- Session: no expiry or session-warning strip was seen during T3 (the proactive re-login was not triggered). A later session expiry would lose the open wizard state (treat as lost per the session-expiry rule).
- Web Designer tab (tab 0): listed only; not selected, snapshotted or captured.

### Action counts (T3 only)

| Operation | T3 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** |
| New Property wizard opened | **1** |
| Derived choice (effective) | **1** (the radio click timed out; the label click selected it) |
| Next navigation | **1** |
| Property Name fills (keystroke typing) | **1** (slow keystrokes; no programmatic fill) |
| Tab commits | **1** (Property Name) |
| Class lookup opens / class selections | **1 / 1** (FX_Cost) |
| Expression inherit untick | **1** (label click; one effective untick) |
| Expression fills (keystroke typing) | **1** (`FX_Count * FX_ItmsCost`) |
| Expression commit click (Property Attributes area) | **1** (mouse click at (600, 620)) |
| Finish / Save | **0 / 0** |
| In-page prompts answered: Yes / No | **0 / 0** (none appeared) |
| Wizard Cancel | **0** (wizard left open by design) |
| Session Expired OK / re-login / portal navigation / sign-in / app-open | **0 / 0 / 0 / 0 / 0** |
| Proactive re-login; extra target query | **0; 0** |
| IDOs close / reopen | **0 / 0** |
| Target F4 queries | **0** (T3 did not query) |
| Select Form dialogs answered | **0** |
| Strings, property classes, SQL, Forms, runtime records, IDO / property / table-entry changes | **0** |
| Designer actions | **0** (tab 0 listed only) |
| Unload, cache, FormSync, deployment, regeneration | **0** |
| Browser JavaScript, evaluate, run-code, console, network (worker-authored) | **0** |
| Refresh, restart, direct URL navigation | **0 / 0 / 0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **10 / 0** (gate; page 1; fresh after radio timeout; after Derived label; page 2; after Tab; after class; fresh after expression timeout; after expression label; after expression commit) |
| `browser_find` | **1** (`FX_Cost`; found) |
| Element clicks (successful / failed) | **8 / 2** (successful: New Property; Derived label; Next; Property Name; Class Open; FX_Cost option; Expression inherit label; expression text area. Failed: Derived radio; Expression inherit checkbox; both "outside of the viewport" or "intercepts pointer events") |
| Coordinate mouse click | **1** (expression commit at (600, 620)) |
| `browser_type` (succeeded / refused) | **2 / 0** (Property Name; expression) |
| Key presses | **1** (Tab once, after the name) |
| Enter / Escape | **0 / 0** |
| Waits / mouse moves / wheel | **0 / 0 / 0** |
| Screenshots | **5** (`t3-01` to `t3-05`) |
| Ref-not-found / native dialogs | **0 / 0** |
| Timeouts | **2** (Derived radio; expression checkbox) |
| Fresh-snapshot recovery allowance used | **0** (the two read-only snapshots after the timeouts were the "fresh" reads; no Ref-not-found error occurred) |

### Cumulative browser action audit (EXP-080-R3; T1 + T2 + T3)

| Operation | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| Check Out / Check In / Undo | 0 | 0 | 0 | **0 / 0 / 0** |
| Portal navigation (permitted step) | 1 | 0 | 0 | **1** |
| Top-level sign-in: username / password / Sign in | 1 / 1 / 1 | 0 | 0 | **1 / 1 / 1** |
| App-open clicks (Mongoose portal link) | 1 | 0 | 0 | **1** |
| Configuration sign-in | 0 | 0 | 0 | **0** |
| Portal banner dismissals (own close control) | 1 | 0 | 0 | **1** |
| Re-logins (session-expiry procedure; 1 allowed per task) | 1 | 0 | 0 | **1** (T1 only) |
| Proactive re-login | 0 | 0 | 0 | **0** |
| New Property wizard opened | 0 | 0 | 1 | **1** (of 1) |
| Derived choice | 0 | 0 | 1 | **1** |
| Next navigation | 0 | 0 | 1 | **1** |
| Property Name fills (keystroke) | 0 | 0 | 1 | **1** |
| Class selections | 0 | 0 | 1 | **1** (FX_Cost) |
| Expression inherit untick | 0 | 0 | 1 | **1** |
| Expression fills (keystroke) | 0 | 0 | 1 | **1** |
| Finish | 0 | 0 | 0 | **0** (the single Finish is pending) |
| Save | 0 | 0 | 0 | **0** |
| Yes / No / Cancel | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| IDOs opened (Select Form OK) | 0 | 1 | 0 | **1** |
| IDOs close / reopen pairs | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (of 2; the recovery pair is pending) |
| Target F4 queries | 0 | 1 | 0 | **1** (of 2) |
| Strings, classes, SQL, Forms, runtime records, IDO / property / table changes | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network (worker-authored) | 0 | 0 | 0 | **0** |
| Refresh / restart / direct URL (other than the portal step) | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** |
| Snapshots, untargeted / targeted | 6 / 0 | 5 / 0 | 10 / 0 | **21 / 0** |
| `browser_find` (successful / errored) | 2 / 1 | 5 / 0 | 1 / 0 | **8 / 1** (the T1 error was an argument error on my side; no browser effect) |
| Element clicks (successful / failed) | 4 / 0 | 5 / 0 | 8 / 2 | **17 / 2** |
| Coordinate mouse clicks | 0 | 0 | 1 | **1** |
| `browser_type` | 3 | 1 | 2 | **6** |
| Key presses (Tab; F4; Enter; Escape) | 0 | 2 | 1 | **3** (Tab 2; F4 1; Enter 0; Escape 0) |
| Waits / mouse moves / wheel | 1 / 0 / 0 | 0 / 1 / 1 | 0 / 0 / 0 | **1 / 1 / 1** |
| Screenshots | 1 | 4 | 5 | **10** |
| Timeouts | 0 | 0 | 2 | **2** (T3: the Derived radio click "outside of the viewport"; the Expression inherit checkbox click intercepted by an overlay span; see blockers) |
| Ref-not-found / native dialogs | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Fresh-snapshot recovery allowance used | 0 | 0 | 0 | **0** |

### Worker-written-file inventory (T3)

- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; this T3 section).
- `evidence/EXP-080-R3/t3-01-wizard-page1-bound-default-before-derived.png` (created).
- `evidence/EXP-080-R3/t3-02-wizard-page2-derived-before-any-entry.png` (created).
- `evidence/EXP-080-R3/t3-03-committed-property-name-no-prompt.png` (created).
- `evidence/EXP-080-R3/t3-04-class-fx-cost-selected-inherited-types.png` (created).
- `evidence/EXP-080-R3/t3-05-configured-wizard-before-finish-not-pressed.png` (created).
- Wrapper-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-33-54-607Z.yml`, `page-2026-10-13T17-35-10-828Z.yml`, `console-2026-10-13T17-33-47-699Z.log`) are tool output, not worker-authored; they sit outside the EXP-080-R3 path (known confinement limitation; operator git review authoritative).

No other repository file was written, edited or deleted in T3. No file under `experiments/EXP-080` or `evidence/EXP-080` was edited.

### Knowledge state (T3)

| Finding | State |
|---|---|
| The Derived radio click timed out "outside of the viewport" while the element was reported visible; the visible label click selected Derived (readback confirmed) | **observed** (second run in this experiment; same signature as EXP-080 T2); cause **unresolved** (suspected environment) |
| Derived page 2 has Property Name, Property Class, Data Type with Length and Decimal, Column Data Type and Expression sections, each with an inherit box except Property Class | **observed** (two runs: EXP-080 T2 and this run) |
| Typing `FX_DerOrderTotal` slowly plus one Tab commits the name with no prompt, and the field keeps the value | **observed** (one run in this experiment); the EXP-080 prompt did not recur in this run |
| Selecting FX_Cost on the Derived page inherits Data Type Decimal, Length 18, Decimal 2, and Column Data Type decimal (inherit ticked) | **observed** (one run) |
| On the Derived page the Expression inherit box is ticked and its box disabled after the class selection; one label click unticks it and enables the expression box | **observed** (one run); the checkbox click itself was intercepted by an overlay span (environment, cause unresolved) |
| Typing `FX_Count * FX_ItmsCost` slowly and committing with a click on the blank page area shows the readback with no validation message | **observed** (one run; UI level; not evaluated) |
| Finish response; the stored property; the expression's correctness | **unresolved** (Finish not invoked) |
| Replay or database durability | **not claimed** (not replay_verified) |

### Open questions and next decision

1. **Decision required (not authorized in T3):** Finish the configured wizard once (the next task), or Cancel it. The configured values in `t3-05` satisfy the brief's gate: Derived; `FX_DerOrderTotal`; FX_Cost; Decimal 18 / 2 / decimal; expression `FX_Count * FX_ItmsCost`; no prompt. Finish may only be invoked once and must not be retried. If the session expires before then, the open wizard state is lost (treat as lost).
2. **Session:** no expiry seen during T3; the session-warning check at the gate was clear; the proactive re-login branch did not apply.
3. The two click-level environment issues (Derived radio; expression checkbox overlay) remain open observations; the second recurrence is recorded here.
4. The Designer tab (tab 0) was not inspected; its state remains unknown.
5. Classification remains **observed only, NOT replay_verified**.

---

## T4 — Finish invoked once; post-Finish inventory (17 rows); Form clean; no close or reopen (cycle 3; AC-2 Finish observed; AC-3 observed at UI level)

- Task T4, cycle 3, task_message_id `665d4ea6-26d2-4188-935a-99557fa44e31`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Scope (bounded instruction): read the T3 record and the relevant EXP-078 sections; tab list; tab 1 only; one fresh read-only snapshot of the open wizard page 2; verify every pre-Finish gate; capture the configured page; **Finish exactly once**; record the response; at most one Save only if dirty; verify the post-Finish inventory and checkout. **Do not close or reopen IDOs.** No checkout, Designer, unload, string, class, SQL or Form change.

### Sources reviewed (before browser interaction)

- The EXP-080-R3 T3 section and its decisive-evidence table (this record): the configured values, the stop state, and the open decision on Finish.
- `experiments/EXP-078-…`, relevant sections (the previously incomplete review): the Filter-in-Place reopen pattern (status bar; IDO Name criterion blank; FiP not clicked); the Properties inventory and checkbox mapping (Read Only, Required, Pseudo Key and Read Only Record in order; Upper Case blank), which EXP-075 established and which this run uses; the clean-Form and Save-disabled conventions; the recovery query and checkout readbacks. Used for the post-Finish interpretation of the checkbox columns only.
- Earlier sources (EXP-079 wizard and post-Finish pattern; EXP-061 class and inherit pattern; EXP-048 FX_Cost attributes) were already reviewed in T3.
- Not read: `tools/`; the secrets file; no shell or git command.

### Pre-Finish gate (T4; fresh; before the single Finish)

| Check | Observed (accessibility snapshot and screenshot `t4-01`) | Result |
|---|---|---|
| Tab list / select | Tab 0 Designer (current; not touched); tab 1 Mongoose (`favoriteContext=IdoPropertyWizard`); select tab 1 succeeded after the list | Pass |
| Wizard present | IDO Property Wizard tab selected, page 2 (Property Attributes); IDOs tab behind it disabled | Pass |
| Property Name | `FX_DerOrderTotal` | Pass |
| Property Class | `FX_Cost` | Pass |
| Data Type | inherit **checked**; `Decimal`; Length `18`; Decimal `2` | Pass |
| Column Data Type | inherit **checked**; `decimal` | Pass |
| Expression inherit | **unchecked** | Pass |
| Expression | `FX_Count * FX_ItmsCost` | Pass |
| Validation message / prompt | none (no alert dialog in the tree; no message text) | Pass |
| Finish | enabled | Pass |
| Session | no Session Expired modal; no session-warning strip; no sign-in page | Pass |
| Form dirty state behind the wizard | Save disabled (clean) | Pass |

All gates passed. No stop rule applied. Recreation of the wizard, retyping of any field, and any other interaction were not done.

### Finish (1 of 1)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Pre-Finish screenshot `t4-01` | Configured page as in the gate table | `t4-01` |
| 2 | **Click `Finish` (once)** | Click ran with no error | — |
| 3 | Snapshot (immediate, untargeted) | **Wizard closed**; IDOs tab active (`favoriteContext=IdoCollections`); status bar **`New Property (IDOs 1 of 1)`**; Save disabled; **no dialog, alert, message or prompt**; 17 rows in the Properties grid | snapshot (tool) |

**Finish response (verbatim):** no displayed text; the wizard closed; the status bar changed from the T3 state to `New Property (IDOs 1 of 1)`. No dialog, alert, confirmation, success or error text appeared. Finish was not retried.

### Post-Finish state (T4; observed)

- **Form:** IDOs clean; Save **disabled** (no dirty state) → **no Save was performed**.
- **Identity:** one row `FX_Orders` (checkbox checked); IDO Name `FX_Orders`; Project `FX_HelloWorldProject01`; **Revision Num `2`** (unchanged); **Revision Date `10/13/2026`** (unchanged); **Locked By the operator account**; **Check In and Undo Check Out enabled** → **still checked out to the operator**; Access As `G6R`; Label String ID `oFX_Orders`; Caption `oFX_Orders` (unchanged from T2).
- **Count:** the Properties grid now has **17 rows** (the T2 baseline of 16 plus one).

### Post-Finish inventory (17 rows; accessibility readback; screenshots `t4-02` rows 1–8, `t4-04` row 9, `t4-03` rows 10–17)

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Property Value (grid position) | Key Seq | Data Type | Length | Column Type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **1** | **FX_DerOrderTotal (new)** | **0** | **FX_Cost** | **Derived** | (blank) | **`FX_Count * FX_ItmsCost`** (clipped to `FX_C…` in the screenshot) | (blank) | **Decimal** | **18** | **decimal** | **unchecked** | unchecked |
| 2 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | — | 1 | (class-bound) | — | (class-bound) | no | yes |
| 3 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | — | 0 | String | 100 | nvarchar | yes | no |
| 4 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | — | 0 | (class-bound) | — | (class-bound) | no | yes |
| 5 | FX_ItmsDescription | 2 | (blank) | Bound to Column | FX_Description | — | 0 | String | 150 | nvarchar | yes | no |
| 6 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | — | 0 | (class-bound) | 50 | (class-bound) | no | yes |
| 7 | FX_ItmsCost | 3 | FX_Cost | Bound to Column | FX_Cost | — | 0 | Decimal | 18 | decimal | yes | no |
| 8 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | — | 0 | Long Integer | — | int | no | no |
| 9 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | — | 0 | String | 128 | UsernameType | yes | no |
| 10 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | — | 0 | String | 128 | UsernameType | yes | no |
| 11 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | — | 0 | Date | — | CurrentDateType | yes | no |
| 12 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | — | 0 | Date | — | CurrentDateType | yes | no |
| 13 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | — | 0 | GUID | — | RowPointerType | yes | no |
| 14 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | — | 0 | String | 150 | nvarchar | yes | no |
| 15 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | — | 0 | Byte | — | FlagNyType | no | no |
| 16 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | — | 0 | Byte | — | FlagNyType | no | no (Read Only Record yes) |
| 17 | FX_ItmsPicture | 12 | FX_Picture | Bound to Column | FX_Picture | — | 0 | Binary | — | varbinary | yes | no |

**Comparison with the T2 baseline (16 rows):** all 16 baseline rows match the T2 table row for row (names, sequences, classes, property types, column names, key sequences, data types, lengths, column types, and the Read Only and Required checkbox states). **No baseline property was changed, removed or reordered by the Finish; the baseline now simply sits at rows 2–17.** Exactly one new property, FX_DerOrderTotal, was added. No Bound property has a changed type. No other property is Derived.

**New-property details (what is visible and what is not):**
- **Property type:** `Derived` (grid).
- **Class:** `FX_Cost` (grid).
- **Sequence:** `0` (grid). The new row sorts first. A sequence of 0 is recorded as observed; the brief did not set a sequence and the tutorial does not specify one. Not interpreted further.
- **Expression:** `FX_Count * FX_ItmsCost` (accessibility readback, in the cell under the "Property Value" column position). **Visually, the grid truncates it to `FX_C…`** (`t4-02`), so the full text is evidenced only by the accessibility readback. A detail-pane read of the full expression was not performed (no row selection or detail view was opened, to keep read-only inspection to the grid).
- **Data Type / Length / Column Type:** `Decimal` / `18` / `decimal` (grid; consistent with the wizard's inherited values).
- **Column Name:** blank (expected for a Derived property with no column).
- **Read Only:** **unchecked** (the first checkbox column, using the mapping established in EXP-075 and EXP-078). The Read Only state is recorded as observed; the tutorial's Read Only setting is EXP-081 and was not changed.
- **Required:** unchecked.
- **Read Only Record / Upper Case / Pseudo Key:** not separately recorded as values beyond the accessibility checkbox states (Read Only Record unchecked; Pseudo Key unchecked; Upper Case blank), per the EXP-078 mapping.

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R3/t4-01-pre-finish-configured-wizard-gate-passed.png` | Wizard page 2: Property Name `FX_DerOrderTotal`; Property Class `FX_Cost`; Data Type inherit ticked (Decimal, 18, 2); Column Data Type inherit ticked (`decimal`); Expression inherit unticked; expression `FX_Count * FX_ItmsCost`; Next greyed; Finish enabled | The pre-Finish configured state (AC-2) | The Finish response or stored state |
| `evidence/EXP-080-R3/t4-02-post-finish-immediate-idos-properties-view.png` | IDOs Form (clean, Check In enabled, identity bar operator); status `New Property (IDOs 1 of 1)`; Properties rows 1–8: **row 1 `FX_DerOrderTotal`, sequence 0, FX_Cost, Derived, Decimal 18 decimal, Read Only unchecked**; rows 2–8 baseline; expression visible only as clipped `FX_C…` | AC-3: the new property is row 1 with Derived type, FX_Cost class and Read Only unchecked; baseline rows 2–8 present | The full expression text (clipped; accessibility readback only); rows 9–17 (see `t4-04`, `t4-03`) |
| `evidence/EXP-080-R3/t4-04-post-finish-inventory-row-9-scroll-check.png` | Same identity; rows 8–15 in view: FX_Count (8), CreatedBy (9), UpdatedBy (10) … NoteExistsFlag (15) | AC-3: baseline rows 8–15 unchanged; row 9 CreatedBy visible | Rows 1–7 and 16–17 (see `t4-02`, `t4-03`) |
| `evidence/EXP-080-R3/t4-03-post-finish-inventory-rows-9-to-17.png` | Same identity; rows 10–17 in view: UpdatedBy (10) through FX_ItmsPicture (17; FX_Picture; Binary; varbinary); row 17 is the last row (no 18th) | AC-3: baseline rows 10–17 unchanged; no 18th row (17 total) | The new row's values (see `t4-02`) |

**Full-inventory note:** the four screenshots together cover rows 1–17 (`t4-02` rows 1–8; `t4-04` rows 8–15; `t4-03` rows 10–17). Rows 8–9 overlap between `t4-02` and `t4-04`.

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Carried (T1 session; T2 baseline; T3 gate re-confirmed at the T4 gate) | snapshot readbacks; `t2-*` and `t4-01` | Same session |
| **AC-2** | **Observed.** Derived chosen; name Tab-committed with no prompt; class FX_Cost with Decimal, 18, 2, decimal inherited; expression inherit unticked; readback `FX_Count * FX_ItmsCost`; **one Finish with its response (no text; wizard closed)** | `t3-01` to `t3-05`; `t4-01`; immediate snapshot | The expression's correctness and the stored state are not evaluated; this is UI-level only |
| **AC-3** | **Observed at UI level.** Form clean after Finish (Save disabled; **no Save performed**); exactly one new property `FX_DerOrderTotal` (Derived; FX_Cost; sequence 0; Read Only unchecked); the 16 baseline rows unchanged; FX_Orders still checked out to the operator (Locked By operator; Check In enabled) | `t4-02`, `t4-04`, `t4-03` | Same-session UI only; no database read; sequence 0 and the clipped expression noted as observations |
| AC-4 | **Not started in T4** (the recovery pair: IDOs close and reopen; one visible-criterion query; 17-property check) | — | Reserved for T5 per the bounded instruction |
| AC-5 | Partial (the final report comes after T5) | — | — |

### Action audit (T4 only)

| Operation | T4 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** (the Check In button was visible and enabled; not pressed) |
| New Property wizard opened | **0** (the T3 wizard was used; not reopened) |
| Derived / class / expression | **0 / 0 / 0** (already set in T3) |
| Property Name / expression fills | **0 / 0** |
| **Finish** | **1** (the single Finish; response: no text; wizard closed) |
| **Save** | **0** (the Form was clean after Finish; Save disabled) |
| Yes / No / Cancel | **0 / 0 / 0** (no prompt appeared; the wizard was not cancelled) |
| IDOs close / reopen | **0 / 0** (reserved for T5) |
| Target F4 queries | **0** (T4 did not query) |
| Select Form dialogs | **0** |
| Session Expired / re-login / portal navigation / sign-in / app-open / proactive re-login | **0 / 0 / 0 / 0 / 0 / 0** |
| Extra target query | **0** |
| Strings, property classes, SQL, Forms, runtime records, IDO / property / table changes | **0** |
| Designer actions | **0** (tab 0 listed only; not selected) |
| Unload / cache / FormSync / deployment / regeneration | **0** |
| Browser JavaScript / console / network (worker-authored) | **0** |
| Refresh / restart / direct URL | **0 / 0 / 0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **2 / 0** (the pre-Finish gate snapshot; the immediate post-Finish snapshot) |
| `browser_find` | **0** |
| Element clicks (successful / failed) | **1 / 0** (Finish) |
| Coordinate / mouse moves / wheel | **0 coordinate clicks; 1 move; 2 wheel scrolls** (deltaY +300, then −60; view only) |
| `browser_type` / key presses / Enter / Escape | **0 / 0 / 0 / 0** |
| Waits | **0** |
| Screenshots | **4** (`t4-01` to `t4-04`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | **0** |

### Cumulative browser action audit (EXP-080-R3; T1 + T2 + T3 + T4)

| Operation | T1 | T2 | T3 | T4 | Cumulative |
|---|---|---|---|---|---|
| Check Out / Check In / Undo | 0 | 0 | 0 | 0 | **0 / 0 / 0** |
| Portal navigation (permitted step) | 1 | 0 | 0 | 0 | **1** |
| Top-level sign-in: username / password / Sign in | 1 / 1 / 1 | 0 | 0 | 0 | **1 / 1 / 1** |
| App-open clicks (Mongoose portal link) | 1 | 0 | 0 | 0 | **1** |
| Configuration sign-in | 0 | 0 | 0 | 0 | **0** |
| Portal banner dismissals (own close control) | 1 | 0 | 0 | 0 | **1** |
| Re-logins (session-expiry procedure; 1 allowed per task) | 1 | 0 | 0 | 0 | **1** (T1 only) |
| Proactive re-login | 0 | 0 | 0 | 0 | **0** |
| Leftover prompts answered Yes / wizard Cancel | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| New Property wizard opened | 0 | 0 | 1 | 0 | **1** (of 1) |
| Derived choice | 0 | 0 | 1 | 0 | **1** |
| Next navigation | 0 | 0 | 1 | 0 | **1** |
| Property Name fills (keystroke) / Tab commits | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **1 / 1** |
| Class selections | 0 | 0 | 1 | 0 | **1** (FX_Cost) |
| Expression inherit untick | 0 | 0 | 1 | 0 | **1** |
| Expression fills (keystroke) | 0 | 0 | 1 | 0 | **1** |
| **Finish** | 0 | 0 | 0 | **1** | **1** |
| **Save** | 0 | 0 | 0 | 0 | **0** |
| IDOs opened (Select Form OK) | 0 | 1 | 0 | 0 | **1** |
| IDOs close / reopen pairs | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** (of 2; T5 pending) |
| Target F4 queries | 0 | 1 | 0 | 0 | **1** (of 2; the second is T5) |
| Strings, classes, SQL, Forms, runtime records, IDO / property / table changes | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network (worker-authored) | 0 | 0 | 0 | 0 | **0** |
| Refresh / restart / direct URL (other than the portal step) | 0 | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **4 / 4** |
| Snapshots, untargeted / targeted | 6 / 0 | 5 / 0 | 10 / 0 | 2 / 0 | **23 / 0** |
| `browser_find` (successful / errored) | 2 / 1 | 5 / 0 | 1 / 0 | 0 / 0 | **8 / 1** (the T1 error was an argument error on my side; no browser effect) |
| Element clicks (successful / failed) | 4 / 0 | 5 / 0 | 8 / 2 | 1 / 0 | **18 / 2** |
| Coordinate mouse clicks | 0 | 0 | 1 | 0 | **1** |
| `browser_type` | 3 | 1 | 2 | 0 | **6** |
| Key presses (Tab; F4; Enter; Escape) | 0 | 2 (Tab 1; F4 1) | 1 (Tab) | 0 | **3** (Tab 2; F4 1; Enter 0; Escape 0) |
| Waits / mouse moves / wheel | 1 / 0 / 0 | 0 / 1 / 1 | 0 / 0 / 0 | 0 / 1 / 2 | **1 / 2 / 3** |
| Screenshots | 1 | 4 | 5 | 4 | **14** |
| Timeouts | 0 | 0 | 2 | 0 | **2** (T3: Derived radio; Expression inherit checkbox overlay) |
| Ref-not-found / native dialogs | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Fresh-snapshot recovery allowance used | 0 | 0 | 0 | 0 | **0** |

### Worker-written-file inventory (T4)

- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; this T4 section).
- `evidence/EXP-080-R3/t4-01-pre-finish-configured-wizard-gate-passed.png` (created).
- `evidence/EXP-080-R3/t4-02-post-finish-immediate-idos-properties-view.png` (created).
- `evidence/EXP-080-R3/t4-03-post-finish-inventory-rows-9-to-17.png` (created; rows 10–17 in view despite the file name; row 9 is in `t4-04`).
- `evidence/EXP-080-R3/t4-04-post-finish-inventory-row-9-scroll-check.png` (created).
- Wrapper-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-38-14-084Z.yml`, `console-2026-10-13T17-38-05-131Z.log`) are tool output, not worker-authored; they sit outside the EXP-080-R3 path (known confinement limitation; operator git review authoritative).

No other repository file was written, edited or deleted in T4. No file under `experiments/EXP-080` or `evidence/EXP-080*` was edited.

### Knowledge state (T4)

| Finding | State |
|---|---|
| One Finish with the configured page produced no dialog or message; the wizard closed; status `New Property (IDOs 1 of 1)`; the Form stayed clean | **observed** (one run) |
| The new property appears as a Derived row with class FX_Cost, Decimal 18 decimal, Column Name blank, Read Only unchecked, Required unchecked, sequence 0 | **observed** (one run; UI and accessibility level) |
| The expression `FX_Count * FX_ItmsCost` appears in the grid's Property Value position (accessibility readback); the grid clips it to `FX_C…` | **observed** (one run); full-text visual not confirmed |
| The 16 baseline properties are unchanged after the Finish (names, sequences, classes, types, columns, lengths, checkboxes) | **observed** (one run) |
| The Form stays clean and FX_Orders stays checked out to the operator after Finish, without a Save | **observed** (one run) |
| Sequence 0 for the derived property | **observed**; not interpreted (not specified by the brief or tutorial) |
| Recovery of the property after close and reopen | **unresolved** (T5) |
| Expression correctness, stored state, database durability | **not claimed** (not evaluated; not replay_verified) |

### Open questions and next step

1. **No blocker in T4.** The Finish succeeded unambiguously (wizard closed; the new row present with the expected type, class and expression readback).
2. The expression is clipped in the grid; the full text is evidenced only by the accessibility readback. A detail view was not opened (read-only grid only). If the coordinator requires visual confirmation of the full text, that is a T5 decision.
3. The new row's sequence is 0 and sorts first; the baseline is at rows 2–17.
4. **Next step (T5, not authorized in T4):** close the clean IDOs Form once through its Form-tab control and reopen it once through Form > Open > Select Form; then one visible-criterion FX_Orders query (the second target query); compare the recovered inventory (17 rows), the FX_DerOrderTotal details, and the checkout state with this T4 post-Finish state.
5. Classification remains **observed only, NOT replay_verified**.

---

## T5 — Clean IDOs close/reopen (the single close/reopen pair); recovery query; recovered inventory (17 rows) verified (cycle 4; AC-4 observed)

- Task T5, cycle 4, task_message_id `41c26fe8-b2c2-4f23-bee2-1dce42733987`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Scope (bounded instruction): read the T2–T4 records; tab list; tab 1 only (Designer tab 0 not touched); gate (IDOs open and clean; FX_Orders checked out; no dialog or session warning); **close IDOs once**; **reopen once** through Form > Open > Select Form (`IDOs / IdoCollections`); confirm Filter in Place; type FX_Orders; Tab; pre-F4 screenshot; **F4 once**; verify one row, identity, ownership and Save; read the Properties inventory (17 rows) and compare with the T2 baseline and the T4 post-Finish readback; record the FX_DerOrderTotal details and the full expression. **No Finish, Save, wizard, checkout action, Designer action, metadata change, or further close/reopen.** The recovered IDOs Form is left open and clean.

### Sources reviewed (before browser interaction)

- The T2, T3 and T4 sections of this record (the baseline, the configured wizard, the post-Finish readback, the Finish response, and the cumulative audit). Preserved as the comparison basis.
- No new external source was needed (the T3 review of EXP-079, EXP-078, EXP-061 and EXP-048 stands).
- Not read: `tools/`; the secrets file; no shell or git command.

### Gate (T5; fresh; before the close)

| Check | Observed (accessibility snapshot; `t5-01`) | Result |
|---|---|---|
| Tab list / select | Tab 0 Designer (current; not touched); tab 1 Mongoose (`favoriteContext=IdoCollections`); select tab 1 succeeded after the list | Pass |
| Form | IDOs tab selected; IDO Name `FX_Orders`; one row, checkbox checked | Pass |
| Dirty state | Save disabled (clean) | Pass |
| Checkout | Locked By the operator account; Check In and Undo Check Out enabled | Pass (checked out to the operator) |
| Revision | Num `2`; Date `10/13/2026` (T4 values) | Pass |
| Properties grid | 17 rows (the T4 post-Finish count) | Pass |
| Dialogs / prompts / wizard / session warning | none (no dialog in the tree; no wizard tab; no session strip; no Session Expired modal) | Pass |

The gate passed, so no dirty-Form stop and no session-expiry procedure applied. Screenshot `t5-01` (pre-close clean state) was viewed: Save greyed, Check In enabled, Locked By the operator account, the Properties grid at rows 8–15 with 17 rows.

### Actions (T5, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current (Designer, not touched); tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Succeeded after the list | — |
| 3 | Snapshot (gate) | As in the gate table | snapshot (tool) |
| 4 | Screenshot `t5-01` (pre-close clean state) | Viewed; clean; checked out | `t5-01` |
| 5 | **Click `Close Panel IDOs`** (the Form-tab close control; once) | IDOs tab removed; **no unsaved-changes prompt; no dialog**; the runtime tab state: the Mongoose frame showed the blank Form area | snapshot (tool) |
| 6 | Snapshot (post-close) | Explorer only; no Form tab; no dialog; Save disabled | snapshot (tool) |
| 7 | **Form menu** (once) | Menu open; `Open` enabled; `Close and Save Changes` disabled | — |
| 8 | `browser_find` "Open" | `Open` menu item present | find |
| 9 | **Click `Open`** (once) | Select Form dialog opened (Filter pre-filled `IdoCollections`) | — |
| 10 | **Click the `IDOs / IdoCollections` row** (once) | Row active (confirmed by `browser_find` in step 11); search form row not selected | — |
| 11 | `browser_find` "IdoCollections" | `IDOs` gridcell `[active]`; the `G6RIdoCollectionSearch` row not active | find |
| 12 | **Click Select Form `OK`** (once) | IDOs Form reopened (`favoriteContext=IdoCollections`) | — |
| 13 | Snapshot (status-bar check before any click) | **Status bar `Filter in Place`**; IDO Name criterion active and blank; Save and New disabled; FiP button not pressed | snapshot (tool) |
| 14 | **Type `FX_Orders` into the IDO Name criterion** (once; `slowly` true) | Typed | — |
| 15 | **Press `Tab`** (once) | Echo row `FX_Orders` | — |
| 16 | Screenshot `t5-02` (pre-F4 criterion) | Viewed; see decisive evidence | `t5-02` |
| 17 | **Press `F4`** (once; the second target query) | Query executed; no second F4 | — |
| 18 | Snapshot (post-F4) | Status `Description (IDOs 1 of 1)`; **one row `FX_Orders`**, checkbox checked; Revision Num `2`; Revision Date `10/13/2026`; Locked By the operator account; Check In and Undo Check Out enabled; Save disabled; Tables sub-tab shows three entries | snapshot (tool) |
| 19 | Screenshot `t5-03` (identity and Tables view) | Viewed; see decisive evidence | `t5-03` |
| 20 | Click the in-form **`Properties`** sub-tab (view only; not the toolbar button) | Properties grid shown (rows 1–8 visible) | — |
| 21 | Screenshot `t5-04` (rows 1–8) | Viewed | `t5-04` |
| 22 | Mouse move to the grid (1000, 720); wheel deltaY +300 (view only) | Rows 10–17 visible | — |
| 23 | Screenshot `t5-05` (rows 10–17) | Viewed | `t5-05` |
| 24 | Wheel deltaY −60 (view only) | Row 9 visible with rows 8–15 | — |
| 25 | Screenshot `t5-06` (row 9 check; rows 8–15) | Viewed | `t5-06` |
| 26 | Snapshot (untargeted; accessibility readback of the 17-row Properties grid, including the full expression) | Readback below | snapshot (tool) |

Not done in T5 (by design): no wizard; no Finish; no Save; no Check Out, Check In or Undo Check Out (the Check In button was visible and enabled; not pressed); no Filter in Place click; no second close or reopen; no detail view or any row selection in the grid; no Designer action; no property, table, class, string, SQL, Form or runtime change; no portal navigation; no re-login; no session-expiry procedure (no expiry seen).

### Recovered identity, checkout and Save state (T5; AC-1 / AC-4)

| Field | Observed (recovered) | Compared with T2 / T4 |
|---|---|---|
| IDO Name | `FX_Orders` (one row) | same |
| Project Name | `FX_HelloWorldProject01` | same |
| Revision Num | **2** | same as T2 and T4 |
| Revision Date | `10/13/2026` | same as T2 and T4 |
| Locked By | the operator account | same (checked out to the operator) |
| Checkout state | Row checkbox checked; Check In and Undo Check Out enabled; **still checked out to the operator** | same as T4 |
| Save | disabled (clean) | same |
| Access As / Caption / Label String ID | `G6R` / `oFX_Orders` / `oFX_Orders` | same |
| Status after F4 | `Description (IDOs 1 of 1)` (one visible-criterion result) | — |

Note: the Description field held focus after the F4 (`[active]`); no value was typed into it.

### Recovered Tables view (T5; AC-1)

| # | Table Name | Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|
| 1 | FX_HelloWorld01 | fxcus | Secondary | Left Outer | `fxcus.[FX_Code] = fxords.[FX_CustomerID]` |
| 2 | FX_Items | fxitms | Secondary | Left Outer | `fxitms.[FX_Item] = fxords.[FX_Item]` |
| 3 | FX_Orders | fxords | Primary Base | Inner | (blank) |

Same three entries as the T2 baseline.

### Recovered property inventory (17 rows; accessibility readback at step 26; screenshots `t5-04`, `t5-06`, `t5-05`)

| # | Property Name | Sequence | Property Class | Property Type | Column Name | Property Value (expression) | Key Seq | Data Type | Length | Column Type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **1** | **FX_DerOrderTotal (new)** | **0** | **FX_Cost** | **Derived** | (blank) | **`FX_Count * FX_ItmsCost`** | (blank) | **Decimal** | **18** | **decimal** | **unchecked** | unchecked |
| 2 | FX_OrderNumber | 1 | FX_OrderNumBase | Bound to Column | FX_OrderNumber | — | 1 | (class-bound) | — | (class-bound) | no | yes |
| 3 | FX_CusName | 2 | (blank) | Bound to Column | FX_Label | — | 0 | String | 100 | nvarchar | yes | no |
| 4 | FX_CustomerID | 2 | FX_CustomerID | Bound to Column | FX_CustomerID | — | 0 | (class-bound) | — | (class-bound) | no | yes |
| 5 | FX_ItmsDescription | 2 | (blank) | Bound to Column | FX_Description | — | 0 | String | 150 | nvarchar | yes | no |
| 6 | FX_Item | 3 | FX_Item | Bound to Column | FX_Item | — | 0 | (class-bound) | 50 | (class-bound) | no | yes |
| 7 | FX_ItmsCost | 3 | FX_Cost | Bound to Column | FX_Cost | — | 0 | Decimal | 18 | decimal | yes | no |
| 8 | FX_Count | 4 | (blank) | Bound to Column | FX_Count | — | 0 | Long Integer | — | int | no | no |
| 9 | CreatedBy | 5 | (blank) | Bound to Column | CreatedBy | — | 0 | String | 128 | UsernameType | yes | no |
| 10 | UpdatedBy | 6 | (blank) | Bound to Column | UpdatedBy | — | 0 | String | 128 | UsernameType | yes | no |
| 11 | CreateDate | 7 | (blank) | Bound to Column | CreateDate | — | 0 | Date | — | CurrentDateType | yes | no |
| 12 | RecordDate | 8 | (blank) | Bound to Column | RecordDate | — | 0 | Date | — | CurrentDateType | yes | no |
| 13 | RowPointer | 9 | (blank) | Bound to Column | RowPointer | — | 0 | GUID | — | RowPointerType | yes | no |
| 14 | FX_CusAddress | 10 | (blank) | Bound to Column | FX_Address | — | 0 | String | 150 | nvarchar | yes | no |
| 15 | NoteExistsFlag | 10 | (blank) | Bound to Column | NoteExistsFlag | — | 0 | Byte | — | FlagNyType | no | no |
| 16 | InWorkflow | 11 | (blank) | Bound to Column | InWorkflow | — | 0 | Byte | — | FlagNyType | no | no (Read Only Record yes) |
| 17 | FX_ItmsPicture | 12 | FX_Picture | Bound to Column | FX_Picture | — | 0 | Binary | — | varbinary | yes | no |

**Comparison with the T2 baseline and the T4 post-Finish readback:**
- The 16 baseline rows (rows 2–17) match the T2 baseline row for row: names, sequences, classes, property types, column names, key sequences, data types, lengths, column types, and the Read Only and Required checkbox states. Spot-checked against the T4 readback: identical in every row read.
- **Exactly one additional property**, FX_DerOrderTotal (row 1). No duplicate FX_DerOrderTotal (or any other new name) appears. Total: **17**.
- The inventory is identical to the T4 post-Finish readback (names, sequences, classes, types, columns, lengths, column types and checkboxes).

### FX_DerOrderTotal details (T5; AC-4)

| Attribute | Recovered value | How it was established |
|---|---|---|
| Property Name | `FX_DerOrderTotal` | grid and accessibility |
| Property Type | **Derived** | grid and accessibility |
| Property Class | **FX_Cost** | grid and accessibility |
| Sequence | **0** | grid and accessibility |
| Expression | **`FX_Count * FX_ItmsCost`** (complete text) | accessibility readback of the "Property Value" cell (the grid clips it visually to `FX_C…` in the screenshot) |
| Data Type / Length / Decimal positions | Decimal / 18 / 2 (the decimal position is not in the grid; from the wizard in T3, where the Decimal field read `2` on the inherited class; **not re-read in the grid**) | Data Type and Length from the grid; Decimal position from T3 only |
| Column Data Type (SQL column type) | `decimal` (grid) | grid and accessibility |
| Column Name | blank | grid and accessibility |
| Key Sequence | blank (other rows show 0) | accessibility |
| Read Only | **unchecked** | grid and accessibility |
| Required | unchecked | grid and accessibility |
| Read Only Record / Pseudo Key | unchecked / unchecked | accessibility (EXP-078 mapping) |

**Limits:** the Decimal position `2` was observed only in the wizard (T3, inherited from FX_Cost); the recovered grid does not display the decimal position column, so it is not independently re-read after the Finish. No detail view was opened: the brief permitted one only if safely available, and no read-only detail presentation was identified without risking an edit. The expression is the accessibility readback of the grid's Property Value cell; the mapping of that cell to the expression is inferred from the column position and is consistent with the wizard expression readback in T3.

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R3/t5-01-pre-close-clean-idos-form-17-rows.png` | IDOs Form (clean; Save greyed); Check In enabled; Locked By the operator account; Properties rows 8–15 of 17 visible; status `New Property (IDOs 1 of 1)` | The clean pre-close state (the close precondition); 17 rows before the close | The recovered state (after reopen) |
| `evidence/EXP-080-R3/t5-02-pre-f4-recovery-idos-fx-orders-criterion.png` | IDOs in Filter in Place (status bar `Filter in Place`); IDO Name `FX_Orders`; echo row `FX_Orders` (unchecked, as in the FiP view); Tables sub-tab empty; Check Out button in the FiP view | **AC-4** pre-F4 criterion on the reopened Form | That F4 returned the row (see `t5-03`) |
| `evidence/EXP-080-R3/t5-03-recovered-identity-and-tables-view.png` | One row `FX_Orders`, checkbox checked; Revision Num 2; Revision Date 10/13/2026; Locked By the operator account (truncated in the image); Check In and Undo Check Out enabled; Save greyed; Access As `G6R`; Tables: FX_HelloWorld01/fxcus, FX_Items/fxitms, FX_Orders/fxords with both joins; status `Description (IDOs 1 of 1)` | **AC-1 / AC-4** recovered identity, checkout ownership, clean Save state, the single visible-criterion result, and the three-entry Tables view | The property inventory (see `t5-04`–`t5-06`); the database state |
| `evidence/EXP-080-R3/t5-04-recovered-inventory-rows-1-to-8.png` | Same identity; Properties rows 1–8: **row 1 FX_DerOrderTotal, sequence 0, FX_Cost, Derived, Decimal 18 decimal, Read Only unchecked**; rows 2–8 baseline (FX_OrderNumber through FX_Count) | **AC-4** new row details (type, class, sequence, Decimal, column type, Read Only) and baseline rows 2–8 | The full expression (clipped to `FX_C…` in the grid); rows 9–17 (see `t5-06`, `t5-05`) |
| `evidence/EXP-080-R3/t5-06-recovered-inventory-row-9-scroll-check.png` | Same identity; rows 8–15 in view: FX_Count (8), CreatedBy (9), UpdatedBy (10) … NoteExistsFlag (15) | **AC-4** baseline rows 8–15 recovered; row 9 CreatedBy visible | Rows 1–7 and 16–17 (see `t5-04`, `t5-05`) |
| `evidence/EXP-080-R3/t5-05-recovered-inventory-rows-9-to-17.png` | Same identity; rows 10–17 in view: UpdatedBy (10) through FX_ItmsPicture (17; FX_Picture; Binary; varbinary); row 17 is the last row (no 18th) | **AC-4** baseline rows 10–17 recovered; **17 rows total, no 18th row** | The new row's values (see `t5-04`) |

Together `t5-04`, `t5-06` and `t5-05` cover rows 1–17 (rows 8 and 9 overlap). The complete expression text is evidenced by the accessibility readback in step 26 (Property Value cell `FX_Count * FX_ItmsCost`), not by a screenshot.

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
|---|---|---|---|
| AC-1 | Carried (T1 session; T2 baseline; T5 gate and recovered identity and Tables view, all matching) | `t5-01`, `t5-03`; snapshot readbacks | Same session; no database read |
| AC-2 | Carried from T3 and T4 (configured wizard; one Finish with its response). Not re-performed in T5 | `t3-01`–`t3-05`; `t4-01` | — |
| AC-3 | Carried from T4 and confirmed unchanged in T5 (exactly one new property; the 16 baseline rows unchanged; still checked out; Form clean; no Save) | `t4-02`–`t4-04`; `t5-04`–`t5-06` | Same session; sequence 0 and the clipped expression noted |
| **AC-4** | **Observed.** The IDOs Form was closed once and reopened once; one visible-criterion query (F4 once) recovers FX_Orders with **17 properties** including FX_DerOrderTotal with type Derived, class FX_Cost and expression `FX_Count * FX_ItmsCost` (accessibility readback); the checkout state is unchanged | `t5-02`, `t5-03`, `t5-04`, `t5-06`, `t5-05` | Same-session UI recovery; not a database read; the Decimal position and the expression are not re-read in a detail view (see the limits above) |
| AC-5 | Final report content provided in this section and the audit below | — | (Superseded by T6: the two-pair criterion is now met; see the T6 section.) At T5 the criterion was **not met** (one pair; see the audit terminology correction) |

### Terminology correction to the cumulative audit (T5)

The T4 cumulative audit carried the phrase "IDOs close / reopen pairs 0 / 0 (of 2; T5 pending)" and "IDOs opened 1". The correct statements are:

1. **One FX_DerOrderTotal property was added** through the single authorized New Property wizard and Finish (T3 configuration; T4 Finish). **Modifications to the 16 existing properties: zero.** Changes to unrelated artifacts (other IDOs, strings, property classes, SQL objects or columns, Forms, runtime records, table entries, Designer artifacts): **zero**. Earlier rows that read "IDO / property / table changes 0" should be read as "existing IDO, property or table-entry modifications 0; the one intended property addition is recorded separately".
2. **Two distinct IDOs-opening events exist, and they are not the same thing:**
   - **T2 (initial fresh opening):** the IDOs Form was opened once through Form > Open > Select Form, because no IDOs tab was open at the start of T2. **No close preceded it**, so it is an initial opening, not a close/reopen pair.
   - **T5 (the single actual clean close/reopen pair):** the clean IDOs Form was closed once through its Form-tab control (`Close Panel IDOs`), then reopened once through Form > Open > Select Form.
3. **Close/reopen pairs: 1 actual pair (T5).** The experiment's acceptance wording (AC-5) asks for two pairs. **No second pair was invented in T5** (per the bounded instruction). The second pair is therefore **not performed**; the criterion is recorded as unmet, not as satisfied.
4. **Target F4 queries: 2 of 2.** T2 (the first target query, after the baseline criterion) and T5 (the recovery query). Both were single F4 presses after one criterion each.

### Worker-written-file inventory (T5)

- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; the T5 section appended).
- `evidence/EXP-080-R3/t5-01-pre-close-clean-idos-form-17-rows.png` (created).
- `evidence/EXP-080-R3/t5-02-pre-f4-recovery-idos-fx-orders-criterion.png` (created).
- `evidence/EXP-080-R3/t5-03-recovered-identity-and-tables-view.png` (created).
- `evidence/EXP-080-R3/t5-04-recovered-inventory-rows-1-to-8.png` (created).
- `evidence/EXP-080-R3/t5-05-recovered-inventory-rows-9-to-17.png` (created; shows rows 10–17; row 9 is in `t5-06`).
- `evidence/EXP-080-R3/t5-06-recovered-inventory-row-9-scroll-check.png` (created).
- Wrapper-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-41-00-656Z.yml`, `page-2026-10-13T17-41-31-515Z.yml`, `console-2026-10-13T17-40-50-997Z.log`) are tool output, not worker-authored; they sit outside the EXP-080-R3 path (known confinement limitation; operator git review authoritative).

No other repository file was written, edited or deleted in T5. No file under `experiments/EXP-080` or `evidence/EXP-080*` was edited.

### Knowledge state (T5)

| Finding | State |
|---|---|
| A clean IDOs Form closed through its Form-tab control without a prompt, and reopened through Form > Open > Select Form in Filter in Place | **observed** (one run in this experiment; the first close/reopen pair) |
| One visible-criterion F4 for `FX_Orders` after the reopen returns one row, checked out to the operator, Revision 2, Save disabled | **observed** (one run; UI level) |
| The recovered Tables view has the same three entries as the T2 baseline | **observed** (one run) |
| The recovered inventory has 17 properties: the 16 baseline properties unchanged and one added FX_DerOrderTotal | **observed** (one run; UI and accessibility level) |
| FX_DerOrderTotal recovers as Derived, class FX_Cost, sequence 0, column type decimal, Read Only and Required unchecked | **observed** (one run) |
| The expression text `FX_Count * FX_ItmsCost` recovers in the grid's Property Value cell (accessibility readback) | **observed** (one run); cell-to-expression mapping inferred from column position |
| The Decimal position 2 is visible only in the wizard (T3), not re-read after recovery | **unresolved** (not re-read) |
| Expression correctness, stored state, database durability | **not claimed** (not evaluated; not replay_verified; same-session UI recovery only) |
| The experiment's two-pair close/reopen criterion | **unresolved / not met** (one pair performed; second not invented) |

### Open questions and final state

1. **No blocker in T5.** The gate passed, the close and reopen were clean, and the recovered inventory matches the baseline plus one property.
2. ~~**Two close/reopen pairs not achieved.**~~ (Superseded by T6: a second clean pair was performed under the T6 bounded instruction; see the T6 section.) At T5, AC-5 asked for two and only the T5 pair had been performed.
3. **Decimal position not re-read after recovery.** It was observed only in the wizard (T3). A detail view was not opened.
4. **Expression mapping inferred.** The complete expression is in the Property Value cell by accessibility readback; the cell-to-expression mapping is an inference from column position.
5. **Final browser state:** tab 1 (Mongoose) is selected. The IDOs Form is open, **clean** (Save disabled), with the Properties sub-tab selected, FX_Orders selected and checked out to the operator (Check In and Undo Check Out enabled), and the status bar reads `Description (IDOs 1 of 1)`. No dialog, prompt, wizard or session warning is open. Tab 0 (Designer) was not touched.
6. Classification remains **observed only, NOT replay_verified**.

### Action audit (T5 only; exact)

| Operation | T5 |
|---|---|
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** (the Check In button was visible and enabled; not pressed) |
| New Property wizard opened | **0** |
| Derived / class / expression / Property Name / expression fills | **0 / 0 / 0 / 0 / 0** |
| **Finish / Save** | **0 / 0** |
| Yes / No / Cancel | **0 / 0 / 0** (no prompt appeared; no wizard open) |
| **IDOs close (Form-tab control)** | **1** (`Close Panel IDOs`; no prompt) |
| **IDOs reopen (Select Form OK)** | **1** (via Form > Open > Select Form; `IDOs / IdoCollections`) |
| **IDOs close/reopen pair** | **1** (the single clean pair of the experiment) |
| **Target F4 queries** | **1** (the recovery query; the T2 query was the first of two) |
| Proactive re-login / extra target query | **0 / 0** |
| Session Expired OK / re-login / portal navigation / sign-in / app-open | **0 / 0 / 0 / 0 / 0** |
| Select Form dialogs answered | **1** (OK) |
| Strings, property classes, SQL objects or columns, Forms, runtime records | **0** |
| Existing IDO, property or table-entry modifications | **0** (the 16 baseline properties and the other IDO-level records unchanged) |
| Designer actions | **0** (tab 0 listed only; not selected) |
| Unload / cache / FormSync / deployment / regeneration | **0** |
| Browser JavaScript / console / network (worker-authored) | **0** |
| Refresh / restart / direct URL | **0 / 0 / 0** |
| Filter in Place button click | **0** (status bar checked; already active on reopen) |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **6 / 0** (gate; post-close; post-Open dialog; status-bar check; post-F4; final grid readback) |
| `browser_find` (successful / errored) | **3 / 0** ("Open" after the Form menu; "IdoCollections" after the Open click; "IdoCollections" after the row click). Corrected from 2 after the controller audit `harness-audit-T6.md` (rows 9, 11, 13) |
| Element clicks (successful / failed) | **5 / 0** (Close Panel IDOs; Form menu; Open menu item; IDOs row; Select Form OK). Corrected from 6 after `harness-audit-T6.md` (rows 6, 8, 10, 12, 14); no Properties sub-tab click was made in T6 |
| Coordinate / mouse moves / wheel | **0 coordinate clicks; 1 move; 2 wheel scrolls** (deltaY +300, then −60; view only) |
| `browser_type` (succeeded / refused) | **1 / 0** (IDO Name criterion, slowly) |
| Key presses (Tab; F4; Enter; Escape) | **Tab 1; F4 1; Enter 0; Escape 0** |
| Waits | **0** |
| Screenshots | **6** (`t5-01` to `t5-06`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |
| Fresh-snapshot recovery allowance used | **0** |

### Cumulative browser action audit (EXP-080-R3; T1–T5)

| Operation | T1 | T2 | T3 | T4 | T5 | Cumulative |
|---|---|---|---|---|---|---|
| Check Out / Check In / Undo | 0 | 0 | 0 | 0 | 0 | **0 / 0 / 0** |
| Portal navigation (permitted step) | 1 | 0 | 0 | 0 | 0 | **1** |
| Top-level sign-in: username / password / Sign in | 1 / 1 / 1 | 0 | 0 | 0 | 0 | **1 / 1 / 1** |
| App-open clicks (Mongoose portal link) | 1 | 0 | 0 | 0 | 0 | **1** |
| Configuration sign-in | 0 | 0 | 0 | 0 | 0 | **0** |
| Portal banner dismissals (own close control) | 1 | 0 | 0 | 0 | 0 | **1** |
| Re-logins (session-expiry procedure; 1 allowed per task) | 1 | 0 | 0 | 0 | 0 | **1** (T1 only) |
| Proactive re-login | 0 | 0 | 0 | 0 | 0 | **0** |
| Leftover prompts answered Yes / wizard Cancel | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| New Property wizard opened | 0 | 0 | 1 | 0 | 0 | **1** (of 1) |
| Derived choice | 0 | 0 | 1 | 0 | 0 | **1** |
| Next navigation | 0 | 0 | 1 | 0 | 0 | **1** |
| Property Name fills (keystroke) / Tab commits | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** |
| Class selections | 0 | 0 | 1 | 0 | 0 | **1** (FX_Cost) |
| Expression inherit untick | 0 | 0 | 1 | 0 | 0 | **1** |
| Expression fills (keystroke) | 0 | 0 | 1 | 0 | 0 | **1** |
| **Finish** | 0 | 0 | 0 | 1 | 0 | **1** |
| **Save** | 0 | 0 | 0 | 0 | 0 | **0** |
| **IDOs initial fresh opening (Select Form OK; no prior close)** | 0 | 1 | 0 | 0 | 0 | **1** |
| **IDOs clean close (Form-tab control)** | 0 | 0 | 0 | 0 | 1 | **1** |
| **IDOs reopen (Select Form OK after the close)** | 0 | 0 | 0 | 0 | 1 | **1** |
| **IDOs close/reopen pairs** | 0 | 0 | 0 | 0 | 1 | **1 pair** (AC-5 expected two; the second is not performed) |
| Target F4 queries | 0 | 1 | 0 | 0 | 1 | **2 of 2** |
| Existing property / IDO / table-entry modifications | 0 | 0 | 0 | 0 | 0 | **0** |
| Property additions (the intended FX_DerOrderTotal) | 0 | 0 | 0 | 1 | 0 | **1** (via the authorized wizard; Finish once) |
| Strings, classes, SQL, Forms, runtime records | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network (worker-authored) | 0 | 0 | 0 | 0 | 0 | **0** |
| Refresh / restart / direct URL (other than the portal step) | 0 | 0 | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **5 / 5** |
| Snapshots, untargeted / targeted | 6 / 0 | 5 / 0 | 10 / 0 | 2 / 0 | 6 / 0 | **29 / 0** |
| `browser_find` (successful / errored) | 2 / 1 | 5 / 0 | 1 / 0 | 0 / 0 | 2 / 0 | **10 / 1** (the T1 error was an argument error on my side; no browser effect) |
| Element clicks (successful / failed) | 4 / 0 | 5 / 0 | 8 / 2 | 1 / 0 | 6 / 0 | **24 / 2** |
| Coordinate mouse clicks | 0 | 0 | 1 | 0 | 0 | **1** |
| `browser_type` | 3 | 1 | 2 | 0 | 1 | **7** |
| Key presses (Tab; F4; Enter; Escape) | 0 | Tab 1; F4 1 | Tab 1 | 0 | Tab 1; F4 1 | **Tab 3; F4 2; Enter 0; Escape 0** |
| Mouse moves / wheel / waits | 0 / 0 / 1 | 1 / 1 / 0 | 0 / 0 / 0 | 1 / 2 / 0 | 1 / 2 / 0 | **3 / 5 / 1** |
| Screenshots | 1 | 4 | 5 | 4 | 6 | **20** |
| Timeouts | 0 | 0 | 2 | 0 | 0 | **2** (T3: Derived radio; Expression inherit checkbox overlay) |
| Ref-not-found / native dialogs | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Fresh-snapshot recovery allowance used | 0 | 0 | 0 | 0 | 0 | **0** |

**Re-login count: 1** (T1 only; the session-expiry procedure ran once and succeeded at the top level). No proactive re-login and no extra target query were used. Checkout-management actions: **zero**. Unloads: **zero**. Designer actions: **zero**.

### Worker-written-file inventory (T5 addition)

- The count tables above were added to `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (the same record edited earlier in T5). No new file beyond `t5-01`–`t5-06` was created.

---

## T6 — Second clean close/reopen pair (read-only); no query; audit reconciliation (cycle 5; AC-4 not re-verified)

- Task T6, cycle 5, task_message_id `c1f471c7-e8e1-4136-a482-c28675da04e4`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Scope (bounded instruction): read the T5 report and cumulative audit; tab list; tab 1 only (Designer tab 0 not touched); one read-only gate snapshot; **close IDOs once** through its Form-tab control; **reopen once** through Form > Open > Select Form (`IDOs / IdoCollections`); verify Filter in Place and a blank IDO Name criterion; final screenshot. **Not authorized and not done:** typing FX_Orders, F4, any third target query, the property wizard, Finish, Save, or any metadata change.

### Sources reviewed (before browser interaction)

- The T5 section and the T5 cumulative audit of this record (the recovered 17-row inventory, the recovery query and the counts). The T2 baseline and the T4 post-Finish readback remain the comparison basis.
- No new external source was needed.
- Not read: `tools/`; the secrets file; no shell or git command.

### Gate (T6; fresh; before the close)

| Check | Observed (snapshot; `t6-01`) | Result |
|---|---|---|
| Tab list / select | Tab 0 Designer (current; not touched); tab 1 Mongoose; select tab 1 succeeded after the list | Pass |
| Form | IDOs tab selected; IDO Name `FX_Orders`; one row checked | Pass |
| Dirty state | Save disabled (clean); no dirty indicator | Pass |
| Checkout | Locked By the operator account; Check In and Undo Check Out enabled | Pass (checked out to the operator) |
| Revision | Num `2`; Date `10/13/2026` (unchanged) | Pass |
| Properties | 17 rows; FX_DerOrderTotal present at row 1 (accessibility readback at the gate) | Pass |
| Dialogs / prompts / wizard / session | none (no dialog; no wizard tab; no session strip; no Session Expired modal) | Pass |

Gate passed. No dirty-Form stop, no session-expiry procedure.

### Actions (T6, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 current (Designer; not touched); tab 1 Mongoose | — |
| 2 | `browser_tabs` select tab 1 | Succeeded after the list | — |
| 3 | Snapshot (gate) | As in the gate table | snapshot (tool) |
| 4 | Screenshot `t6-01` (pre-close clean state) | Viewed; clean; checked out; Properties rows 8–15 visible | `t6-01` |
| 5 | **Click `Close Panel IDOs`** (Form-tab close control; once) | IDOs tab removed; **no prompt; no dialog** | — |
| 6 | Snapshot (post-close) | Explorer only; no Form tab; Save disabled; no dialog | snapshot (tool) |
| 7 | **Form menu** (once) | Menu open; `Open` enabled; `Close and Save Changes` disabled | — |
| 8 | `browser_find` "Open" | `Open` menu item present | find |
| 9 | **Click `Open`** (once) | Select Form dialog opened (filter pre-filled `IdoCollections`) | — |
| 10 | **Click the `IDOs / IdoCollections` row** (once) | Row active (confirmed in step 11) | — |
| 11 | `browser_find` "IdoCollections" | `IDOs` gridcell `[active]`; search-form row not active | find |
| 12 | **Click Select Form `OK`** (once) | IDOs Form reopened (`favoriteContext=IdoCollections`) | — |
| 13 | Snapshot (status-bar check; the only post-reopen read) | **Status bar `Filter in Place`**; IDO Name criterion active and **blank**; no rows in the grid; Save disabled; Check Out enabled and Undo Check Out disabled (no checkout ownership shown, as expected for a blank criterion) | snapshot (tool) |
| 14 | Screenshot `t6-02` (final state) | Viewed; see decisive evidence | `t6-02` |

Not done in T6 (by design): no typing into IDO Name; no Tab; no F4; no target query; no Properties sub-tab click; no wizard; no Finish; no Save; no Check Out, Check In or Undo Check Out; no Filter in Place button click; no Designer action; no metadata change; no portal navigation; no re-login; no session-expiry procedure (no expiry seen).

### Decisive evidence (T6)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `evidence/EXP-080-R3/t6-01-pre-close-clean-idos-form-17-rows.png` | IDOs Form clean (Save greyed); FX_Orders checked (Check In enabled); Locked By the operator account; Properties rows 8–15 of 17; status `P&roperties` | The clean pre-close state for the second pair (the close precondition) | The post-reopen state |
| `evidence/EXP-080-R3/t6-02-reopened-idos-filter-in-place-blank-criterion-final-state.png` | Reopened IDOs Form: status bar **`Filter in Place`**; IDO Name criterion blank and active; grid empty (no rows); Tables sub-tab empty; Save greyed; Check Out enabled and Undo Check Out disabled (blank state); identity bar operator account and `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | **The second reopen succeeded clean in Filter in Place with a blank criterion** (the T6 objective) | That FX_Orders is still checked out, its revision, its inventory, or that the T5 recovered state persists (none of these is shown with a blank criterion; no query was run) |

### Scope boundary: what T6 does and does not verify

- **T6 verifies:** the second clean close (no prompt), the second Select Form reopen, Filter in Place on reopen, and a blank IDO Name criterion. Observed in the UI.
- **T6 does NOT verify:** any FX_Orders identity, checkout ownership, Revision, Tables view, or the 17-property inventory after the second reopen. The brief forbids a third target query, so the recovered state is **not independently re-read** after the second reopen.
- **Therefore the T5 recovery evidence remains the only evidence of the recovered 17-property state**, and it is not represented as verified again by T6. The T5 readbacks were taken after the first reopen and the one F4 query in T5.

### Counts reconciliation (exact; T1–T6)

| Measure | Value | Basis |
|---|---|---|
| Initial fresh IDOs opening (no prior close) | **1** | T2 (Select Form OK; no IDOs tab was open at T2 start) |
| Actual clean close/reopen pairs | **2** | T5 (close 1, reopen 1) and T6 (close 1, reopen 1) |
| FX_Orders F4 queries (visible-criterion target queries) | **2** | T2 (F4 1) and T5 (F4 1); T6 made none |
| New Property wizard openings | **1** | T3 only |
| Derived choices | **1** | T3 |
| Property Name Tab-commits | **1** | T3 |
| Class selections | **1** | T3 (FX_Cost) |
| Expression fills | **1** | T3 |
| Finish | **1** | T4 (one response: no text; wizard closed) |
| Save | **0** | No Save at any point (the Form was clean after Finish) |
| FX_DerOrderTotal additions | **1** | T4 Finish, through the authorized wizard |
| Existing-property modifications (the 16 baseline properties) | **0** | Verified unchanged in T4 and T5 |
| Other IDO / table-entry modifications | **0** | None |
| Checkout-management actions (Check Out, Check In, Undo Check Out) | **0 / 0 / 0** | None (the buttons were visible and not pressed) |
| Leftover prompts answered Yes / wizard Cancel | **0 / 0** | None |
| Proactive re-login / extra target query | **0 / 0** | None |
| Session-expiry re-logins | **1** (T1 only) | Top-level procedure; succeeded |
| Strings, property classes, SQL objects or columns, Forms, runtime records | **0** | None |
| Designer actions | **0** | Tab 0 never selected or inspected |
| Unloads / cache / FormSync / deployment / regeneration | **0** | None |

Corrected terminology: one FX_DerOrderTotal property was **added** through the authorized wizard. Modifications to the 16 existing properties and to unrelated artifacts remain **zero**.

### Cumulative browser action audit (EXP-080-R3; T1–T6)

| Operation | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
|---|---|---|---|---|---|---|---|
| Check Out / Check In / Undo | 0 | 0 | 0 | 0 | 0 | 0 | **0 / 0 / 0** |
| Portal navigation (permitted step) | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Top-level sign-in: username / password / Sign in | 1 / 1 / 1 | 0 | 0 | 0 | 0 | 0 | **1 / 1 / 1** |
| App-open clicks (Mongoose portal link) | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Configuration sign-in | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Portal banner dismissals (own close control) | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Re-logins (session-expiry procedure; 1 allowed per task) | 1 | 0 | 0 | 0 | 0 | 0 | **1** (T1 only) |
| Proactive re-login | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Leftover prompts answered Yes / wizard Cancel | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| New Property wizard opened | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Derived choice | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Next navigation | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Property Name keystroke fill / Tab commit | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | 0 / 0 | **1 / 1** |
| Class selections | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Expression inherit untick | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Expression keystroke fill / commit click | 0 | 0 | 1 / 1 | 0 | 0 | 0 | **1 / 1** |
| **Finish** | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| **Save** | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| IDOs initial fresh opening (Select Form OK; no prior close) | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| IDOs clean close (Form-tab control) | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| IDOs reopen (Select Form OK after a close) | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| **Actual close/reopen pairs** | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| Target F4 queries | 0 | 1 | 0 | 0 | 1 | 0 | **2** |
| FX_DerOrderTotal additions | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Existing-property / other IDO / table-entry modifications | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Strings, classes, SQL, Forms, runtime records | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network (worker-authored) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Refresh / restart / direct URL (other than the portal step) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **6 / 6** |
| Snapshots, untargeted / targeted | 6 / 0 | 5 / 0 | 10 / 0 | 2 / 0 | 6 / 0 | 3 / 0 | **32 / 0** |
| `browser_find` (successful / errored) | 2 / 1 | 5 / 0 | 1 / 0 | 0 / 0 | 2 / 0 | 3 / 0 | **13 / 1** (the T1 error was an argument error on my side; no browser effect) |
| Element clicks (successful / failed) | 4 / 0 | 5 / 0 | 8 / 2 | 1 / 0 | 6 / 0 | 5 / 0 | **29 / 2** (both failed clicks are T3 timeouts; T6 corrected from 6 to 5 after the controller audit) |
| Coordinate mouse clicks | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| `browser_type` | 3 | 1 | 2 | 0 | 1 | 0 | **7** |
| Key presses: Tab / F4 / Enter / Escape | 0 / 0 / 0 / 0 | 1 / 1 / 0 / 0 | 1 / 0 / 0 / 0 | 0 | 1 / 1 / 0 / 0 | 0 | **3 / 2 / 0 / 0** |
| Mouse moves / wheel / waits | 0 / 0 / 1 | 1 / 1 / 0 | 0 / 0 / 0 | 1 / 2 / 0 | 1 / 2 / 0 | 0 / 0 / 0 | **3 / 5 / 1** |
| Screenshots | 1 | 4 | 5 | 4 | 6 | 2 | **22** |
| Timeouts | 0 | 0 | 2 | 0 | 0 | 0 | **2** (T3: Derived radio; expression inherit checkbox overlay) |
| Ref-not-found / native dialogs | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Fresh-snapshot recovery allowance used | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

### Action audit (T6 only; exact)

| Operation | T6 |
|---|---|
| Check Out / Check In / Undo Check Out | **0 / 0 / 0** |
| New Property wizard opened / Finish / Save | **0 / 0 / 0** |
| Yes / No / Cancel | **0 / 0 / 0** |
| IDOs clean close / reopen | **1 / 1** (the second actual pair) |
| Target F4 queries | **0** (none; the brief forbids a third) |
| Typing / Tab / F4 / Enter / Escape | **0 / 0 / 0 / 0 / 0** |
| Select Form dialogs answered | **1** (OK) |
| Session-expiry / re-login / portal navigation / sign-in / app-open / proactive re-login | **0 / 0 / 0 / 0 / 0 / 0** |
| Existing-property, IDO or table-entry changes; strings, classes, SQL, Forms, runtime records; Designer; unloads | **0** |
| `browser_tabs` list / select | **1 / 1** |
| Snapshots, untargeted / targeted | **3 / 0** (gate; post-close; post-reopen status-bar check) |
| `browser_find` | **3** (`Open`; `IdoCollections`; `IdoCollections`), all successful |
| Element clicks (successful / failed) | **5 / 0** (Close Panel IDOs; Form menu; Open menu item; IDOs row; Select Form OK) |
| Mouse moves / wheel / waits | **0 / 0 / 0** |
| Screenshots | **2** (`t6-01`, `t6-02`) |
| Ref-not-found / timeouts / native dialogs | **0 / 0 / 0** |

### Worker-written-file inventory (T6)

- `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` (edited: status header; this T6 section appended).
- `evidence/EXP-080-R3/t6-01-pre-close-clean-idos-form-17-rows.png` (created).
- `evidence/EXP-080-R3/t6-02-reopened-idos-filter-in-place-blank-criterion-final-state.png` (created).
- Wrapper-written snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T17-45-46-834Z.yml`, `page-2026-10-13T17-46-01-011Z.yml`, `console-2026-10-13T17-45-37-338Z.log`) are tool output, not worker-authored; they sit outside the EXP-080-R3 path (known confinement limitation; operator git review authoritative).

No other repository file was written, edited or deleted in T6. No file under `experiments/EXP-080` or `evidence/EXP-080*` was edited.

### Acceptance checks (T6; observed only; no acceptance claimed)

| AC | T6 status | Limits |
|---|---|---|
| AC-1 | Carried from T2 (baseline) and T5 (recovered identity); T6 gate re-confirmed the clean, checked-out, 17-row state before the close | Same session |
| AC-2 | Carried from T3 and T4; not re-performed | — |
| AC-3 | Carried from T4; T6 gate re-confirmed 17 rows and checkout before the close | Same session |
| AC-4 | The T5 recovery remains the evidence (17 properties, FX_DerOrderTotal Derived / FX_Cost / expression). **T6 adds a second clean close/reopen (observed in Filter in Place with a blank criterion) but does NOT re-query, so the recovered inventory is not independently verified after the second reopen.** | The T5 evidence is not represented as verified again by T6 |
| AC-5 | This section and the reconciled counts above; final acceptance is left to the coordinator | Not classified as accepted or replay_verified |

### Knowledge state (T6)

| Finding | State |
|---|---|
| A second clean IDOs close through the Form-tab control, with no prompt, after the T5 recovery | **observed** (one run) |
| The second reopen through Form > Open > Select Form opens in Filter in Place with a blank IDO Name criterion and no rows | **observed** (one run) |
| The recovered 17-property inventory, checkout ownership and Tables view persist after the second reopen | **not observed** (no query was run; the brief forbids a third target query) |
| The T5 recovery (17 properties; FX_DerOrderTotal Derived / FX_Cost / sequence 0 / expression) | **observed** in T5 (one F4 after the first reopen); not re-verified in T6 |
| Two close/reopen pairs achieved (AC-5 expected two) | **observed** (the count is now two; the T2 opening is not counted as a pair) |
| Expression correctness, stored state, database durability | **not claimed** (not evaluated; not replay_verified; same-session UI only) |
| Replay verification | **not claimed**; acceptance left to the coordinator |

### Limitations

1. T6 is a UI-only reopen. It does not show that FX_Orders is still checked out after the second reopen (the criterion is blank). The last checkout observation is T5 (after the first reopen and one F4) and T4 (after Finish).
2. The second pair's post-reopen content was not inspected. Any inventory statement after T5 is an inference, not an observation.
3. The Decimal position `2` remains observed only in the T3 wizard, not re-read after recovery.
4. The expression is recorded from the accessibility readback of the grid's Property Value cell, not a detail view.
5. The count table in T5 was reconciled above; the T6 snapshot count is three untargeted calls (the table row above lists 2 for T6 and the note gives 3 as the reconciled figure).

### Final browser state (end of T6)

- Tab 1 (Mongoose) is selected. The IDOs Form is open after the second reopen, in **Filter in Place**, with the IDO Name criterion blank and active. No rows are displayed; Save is disabled; no dialog, prompt, wizard or session warning is open.
- FX_Orders was not queried in T6, so its checkout state is not re-read after the second reopen (last observed checked out in T5).
- Tab 0 (Designer) was not selected, inspected or touched.

### Recommendation for the coordinator (not an acceptance decision)

The coordinator should decide whether the unqueried second reopen is sufficient, or whether a separately authorized read-only query is needed to independently re-verify the 17-property recovery. The record does not classify EXP-080-R3 as accepted or replay_verified.

---

## T7 — Final acceptance documentation (zero browser calls; no Mongoose change)

- Task T7, cycle 6, task_message_id `09976aef-a6c2-4d4f-b8cb-23078042340f`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Work: reviewed this record, the T1–T6 evidence and the controller audits `evidence/EXP-080-R3/harness-audit-T1.md` to `harness-audit-T6.md`; wrote `evidence/EXP-080-R3/T7-final-acceptance-report.md`; updated this record only. **No browser call, no query, no wizard, no Save, no Finish, no authentication, no new screenshot.**
- **Final acceptance matrix, evidence paths and limitations: `evidence/EXP-080-R3/T7-final-acceptance-report.md`.**
- **Recommendation to the coordinator: ACCEPTED AS OBSERVED** (all five acceptance checks have observed evidence; limitations listed in the report). Not classified as replay_verified; no database durability or expression correctness claimed.
- Controller reconciliation: T6 corrected to 5 element clicks (was 6) and 3 `browser_find` calls (was 2). Cumulative T1–T6: element clicks 29 successful / 2 failed; `browser_find` 13 successful / 1 errored; snapshots 32; screenshots 22; tabs 6 / 6; `browser_type` 7 (all permitted entries).
- Reconciled key counts: initial fresh IDOs opening (T2) = 1 (not a pair); actual close/reopen pairs (T5 and T6) = 2; FX_Orders F4 queries = 2; wizard openings = 1; Finish = 1; Save = 0; FX_DerOrderTotal additions = 1; existing-property modifications = 0; checkout-management actions = 0; session re-logins = 1 (T1 only); Designer actions = 0; unloads = 0.
- The T6 second reopen was not followed by a query; the T5 recovery was not independently reverified after T6.
- **Worker-written files in T7:** `evidence/EXP-080-R3/T7-final-acceptance-report.md` (created); this record (edited). No other file was written in T7.
- **Final browser state (unchanged since T6; not touched in T7):** Web Client tab 1 selected; IDOs open in Filter in Place with a blank IDO Name criterion and no FX_Orders row selected; Save disabled; no dialog, prompt, wizard or session warning. Checkout was last observed in T5. Tab 0 (Designer) was not inspected or touched.
- Classification: observed only; not replay_verified.

## Outcome (operator assistant, 2026-10-14)

Accepted (observed). Hello World Part 5 section 3 is done, except the label and Read Only override, which is planned as EXP-081. The decision was made by the operator assistant under the user's overnight authorization of 2026-10-14.

- Run R-20261014-012652-2b2E completed as accepted after 7 worker tasks, with no pauses.
- **T1, session recovery:** one top-level navigation to the portal URL, the placeholder sign-in on the top-level CloudIdentities form (Username, Password, Sign in once), and one Mongoose menu search. The Web Client loaded. The R2 SSO refusal did not recur.
- Changed, for later cleanup (IDO `FX_Orders`, tenant-wide, still checked out to the operator, Revision 2):
  - **New property `FX_DerOrderTotal`:**
    - Property Type Derived, class FX_Cost.
    - Expression `FX_Count * FX_ItmsCost`, shown in the Property Value column.
    - Decimal, Length 18, decimal; Decimal 2 shown in the wizard.
    - Sequence 0, Read Only not ticked.

    It was created by one wizard and one Finish, with no Save. FX_Orders now has 17 properties; the 16 earlier ones are unchanged.
- Screenshots viewed by the operator assistant:
  - `t3-05`: the configured wizard before Finish. Property Name FX_DerOrderTotal, Property Class FX_Cost. Data Type and Column Data Type are inherited (Decimal 18/2, decimal). The Expression inherit box is unticked, and the box reads `FX_Count * FX_ItmsCost`.
  - `t5-04`: after close/reopen and the query, row 1 FX_DerOrderTotal, sequence 0, FX_Cost, Derived, Property Value `FX_C…` (clipped), Decimal 18 decimal, Read Only unticked.
  - `t5-05`: rows 10-17 unchanged, ending with FX_ItmsPicture.
- What the replay fixes showed:
  1. **Property Name:** typing it with keystrokes and committing with Tab raised no required-value prompt (`t3-03`). The EXP-080 diagnosis is supported by one run.
  2. **Expression inherit box:** selecting FX_Cost ticked it and disabled the Expression box. Unticking that one box enabled the box. Its checkbox was covered by an overlay span, so the worker clicked its label text instead.
  3. **Derived radio:** the click timed out "outside of the viewport" again; the label click worked.
- Accepted deviation:
  - The second close/reopen pair (T6) was not followed by a query, so the final recovery evidence is the T5 query.
- Flagged `browser_type` calls, all authorized:
  - the placeholder credentials and the portal menu search (T1);
  - the IDO Name criterion ×2;
  - Property Name and the expression.
- Findings (observed):
  1. **Derived property route:** New Property → Derived (use its label) → Next → type Property Name and press Tab → choose a class → untick the Expression inherit box if the class ticks it → type the expression → click away → Finish. Finish commits with no Save.
  2. **How the grid shows a Derived property:** it is listed first, with sequence 0. Property Value holds the expression, the Column Name is blank, and Read Only is not ticked.
  3. **Session recovery** works from the top-level portal URL. Sign-in inside the embedded frame fails (EXP-080-R2).
- Limits:
  - The expression has not been evaluated at runtime.
  - The full expression text is read from the accessibility tree, because the cell is clipped.
  - Same-session UI evidence only.
- Confinement (git status): only `evidence/EXP-080-R3/` and this record were written by the run.
- Next: EXP-081, the Label String ID overrides (FX_sOrderTotal, FX_sCustomerName, FX_sAddress, FX_sItemDescription) and Read Only on FX_DerOrderTotal.
