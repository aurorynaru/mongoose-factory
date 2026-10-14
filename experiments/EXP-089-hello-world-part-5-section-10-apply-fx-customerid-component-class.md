# EXP-089 — Hello World Part 5 Section 10: apply the FX_CustomerID component class to FX_Orders (Customer ID combobox and grid column), with an unsaved runtime check

**Status (T6, 2026-10-14; cycle 6; FINAL DOCUMENTATION AND ACCEPTANCE AUDIT; ZERO browser calls; ZERO Mongoose changes): RECOMMENDATION: ACCEPTED AS OBSERVED, on the conditions in the T6 section. All five acceptance checks (AC-1 to AC-5) are supported by existing evidence. Controller-verified browser calls T1–T5: 47 + 12 + 121 + 81 + 54 = 315 (T4 corrected from 80). Worker-written files before T6: 74 (the record and 73 evidence files); T6 adds one report, `evidence/EXP-089/T6-final-acceptance-report.md`. Corrections recorded in T6: five screenshots described as viewed without an in-task image read were viewed in T6 and match (section T6, table 2); the T4 count and find tally were corrected; the T1 controller error is a failed local Read, not a browser error. Limits: same session only; the validator was not re-read after the T4 assignments or reopen (EXP-088 gap, post-reopen half, open); the cause of the server-event alerts is unresolved. Not replay-verified; no cross-session durability; no independent database durability. Full report: `evidence/EXP-089/T6-final-acceptance-report.md`. Details: section "T6" at the end of this record.**

**Status (T5, 2026-10-14; cycle 5; RUNTIME PROPAGATION, ONE FX002 CHOICE, ONE DISCARD WITH ONE "No"; NO SAVE; NO CONTINGENCY): THE CUSTOMER ID CHANGE PROPAGATED BEFORE ANY SAVE. After one close, one Form > Open > Select Form reopen, one Filter in Place switch and one blank-criteria F4, order 1 read FX001 / Factory test one / 1 Factory Street / dumbbell / 2 / 90.00. The Customer ID drop-down (opened once) showed two rows with two columns (Customer ID; Customer Name): FX001 Factory test one (selected) and FX002 Factory test two. FX002 was chosen once. Immediately, before any Save, the detail view read Customer Name `Factory test two` and Address `2 Factory Street`, and the order 1 grid row read FX002 / Factory test two / 2 Factory Street. The save prompt read exactly `Do you want to save your changes to primary collection?` (Yes, No, Cancel); it was answered **No** once. After reopening with F4 once, order 1 read FX001 / Factory test one / 1 Factory Street / dumbbell / 2 / 90.00 and order 2 read FX002 / Factory test two / 2 Factory Street / eggs / 1 / 6.99, so the change was discarded. The runtime was closed clean at the end. Runtime Saves: 0. Unloads: 0 (the cache contingency was not triggered because both Name and Address changed). Classification: observed only; same session; not replay_verified; no database durability claimed. Details: section "T5" at the end of this record.**

**Status (T4, 2026-10-14; cycle 4; ASSIGNMENTS, ONE DESIGNER SAVE, ONE DESIGNER CLOSE AND REOPEN; NO RUNTIME ACTION): THE TWO COMPONENT CLASS ASSIGNMENTS ARE SET, COMMITTED AND PERSIST AFTER THE SAVE AND REOPEN (SAME SESSION). On FX_CustomerIDCombobox and on FX_CustomerIDGridCol: Component Class `FX_CustomerID` (chosen from the list, Tab-committed) and Component Class Parameters `FX_CusName,FX_CusAddress` (typed in the inline editor, Tab-committed). No other value changed (List Source blank; Validators blank; Validate Immediately False; View Attributes and Edit Property Class Extension `FX_CustomerID`; Binding `object.FX_CustomerID`). NATIVE DESIGNER SAVE INVOKED ONCE: toast `Save` / `Form [FX_Orders] and global object(s) were saved.`; Save and Undo disabled afterward. FX_Orders closed once through its Form-tab control (no prompt) and reopened once through the Form menu recent-forms entry: Name `FX_Orders`, Normal, Is Master True, `ScopeType: User`, clean; both components show the assignment. The runtime FX_Orders was NOT touched (still open, clean, on order 2 from T3). The runtime check, discard and cache contingency are NOT RUN in T4. Classification: observed only; not replay_verified; no database durability claimed. Details: section "T4" at the end of this record.**

**Status (T3, 2026-10-14; cycle 3; post-recovery read-only prerequisites and runtime baseline; NO assignment, NO Designer Save): PREREQUISITES PASSED AND BASELINE COMPLETE.** The Designer Edit menu worked this time (no server-event error). Validator `FX_CustomerID` matches EXP-087 exactly (Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`). Component Class `FX_CustomerID` matches EXP-088 (Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`). Neither `FX_CustomerIDCombobox` nor `FX_CustomerIDGridCol` has a Component Class or Component Class Parameters. The runtime baseline shows both orders as expected. The assignment, Designer Save, Designer close/reopen, runtime drop-down check and discard are **NOT RUN** (not authorized in T3). The runtime FX_Orders Form is left **open and clean** on order 2. Classification: observed only; not replay_verified. Details: section "T3" at the end of this record.

**Status (T2, 2026-10-14; cycle 1; post-reauthentication Designer gate, ONE attempt): STOPPED BLOCKED. The Designer FX_Orders looked usable (User scope, clean, no dialog), but the one Edit > Validator attempt raised the same server-event error (`The server event processing returned an error. If this persists, contact your system administrator.`). It was answered with OK once and nothing was retried. Validator and Component Class readbacks: NOT RUN. Component assignments, Designer Save, close/reopen, runtime baseline, runtime check and discard: NOT RUN. The re-login done in T1 was not repeated (re-login count in T2: 0). Classification: observed only; not replay_verified.** Details: section "T2" at the end of this record.

**Status (T1, 2026-10-14; cycle 0): STOPPED BLOCKED AT THE DESIGNER GATE; SESSION RE-ESTABLISHED.** The first Designer gate (Edit > Validator) raised the Mongoose error alert `The server event processing returned an error. If this persists, contact your system administrator.` on the first Edit click and again on one corrected Edit click. Each alert was answered with its OK once. The Validator and Component Class readbacks, the component readbacks, the runtime baseline and everything after them are **NOT RUN**. No Component Class was changed; no Designer Save; no runtime action. At the task start the Web Client tab showed `Logout Successful`; the standing session-expiry procedure was followed once (top-level portal navigation, Infor CloudIdentities sign-in with the placeholders, portal banner dismissed once, Mongoose OS app opened). The Mongoose Web Client now loads in the portal frame with no sign-in form. The interrupted gate was not resumed in this task. Classification: **observed only; not replay_verified.**

Run identity: run `R-20261014-200230-uc2F`, experiment EXP-089, cycle 0, task T1, task_message_id `1f97e4d2-8199-40aa-8ebc-efec8769ce24`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-089/`.

Record creation disclosure: `experiments/EXP-089-…md` did not exist before this task (the Read of the brief path returned "File does not exist"; the repository held the brief commits `cc0f9d1` draft and `5331969` approved). This worker created the record in T1.

## Why this experiment (from the brief)

The tutorial (`docs/mongoose/transcripts/hello-world-pt5.md`, Section 10, 15:08–16:22) applies the Customer ID component class to the Orders Customer ID combobox and to its grid column, each with the two target parameters for Customer Name and Customer Address. The narrated runtime test is that changing Customer ID updates Name and Address before Save. This experiment adapts that to FX_ names in User scope: combobox `FX_CustomerIDCombobox`, grid column `FX_CustomerIDGridCol`, class `FX_CustomerID` (EXP-088), parameters `FX_CusName,FX_CusAddress` (the FX_Orders joined properties, EXP-078 and EXP-082 T9).

Expected end state after the later tasks (**unverified**; none of it is established by T1): both components show Component Class `FX_CustomerID` and Component Class Parameters `FX_CusName,FX_CusAddress`; after one Designer Save and one close/reopen the assignment persists in the Designer; at runtime, choosing FX002 on order 1 changes Customer Name to `Factory test two` and Address to `2 Factory Street` before any Save; the change is discarded with one No to the save prompt.

## Sources reviewed (T1, before any browser interaction)

| Source | Extent of read | Applied lesson |
| --- | --- | --- |
| `AGENTS.md` | Read in full (238 lines). Trust: authoritative repository rules. | LEARNING MODE; FX_ scope; User editing scope; evidence rules; recovery (one fresh snapshot, one corrected attempt, then stop); knowledge states. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, Section 10 (lines 231–244) and Section 13 (lines 277–288) | Read in full. Section 9 (lines 215–229) read in full. Sections 7–8 (lines 186–214) only in part (headings, the scope sentence at line 188, the Component Class bullet at line 194, and the Section 8 steps at lines 201–211 via grep). Trust: **unverified** automatic transcript. | Narrated Section 10 steps (reopen the form; select the Customer ID combobox; Inheritance > Component Class; Component Class Parameters `custname, cuss address` (speech; exact IDs to be read from the IDO, not guessed); Edit Grid Columns > Customer ID grid column; same class and parameters; Save; runtime change of Customer ID before Save). Failure-mode note (line 244): do not auto-correct parameter names. |
| `docs/mongoose/transcripts/hello-world-pt5.md`, transcript lines 533–583 (15:03–20:21) | Targeted grep returning the timestamp lines only: 15:03–16:22 (lines 533–547), 16:29–16:58 (lines 548–552, Item section), 18:58–19:14 (lines 570–573, Item section) and 19:24–20:21 (lines 574–583). Lines 553–569 and the untimestamped lines in that range were not read. | 15:08 reopen the form; 15:21 select the component class; 15:25 Component Class Parameters `custname, cuss address`; 15:43–15:53 grid column Edit Grid Columns > Inheritance; 16:00 Save; 16:06–16:18 runtime test of detail and grid. |
| `experiments/EXP-088-…fx-customerid-component-class.md` | Partial read: lines 1–348 of 1665 (status headers T1–T8; T1 gates; T2 creation and property sheet). T3–T8 bodies not read in full. | Class `FX_CustomerID` created; expected values per the T7 status: Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`. T8 accepted as observed with a condition: the validator definition was not re-read after the class Parameters step or after the reopen. This is the gap EXP-089 T1 is asked to close. |
| `experiments/EXP-087-…in-collection-validator.md` | Partial read: lines 1–507 of 1409 (status headers T1–T8; T1–T3 bodies). | Validator `FX_CustomerID`: Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`. Read-back method: Edit > Validator; select the row; Cancel. |
| `experiments/EXP-086-…right-click-drill-downs.md` | Partial read: lines 1–296 of 1274 (status headers T1–T7; T1 preflight and runtime baseline; T2 clear and Save). | Runtime FX_Orders: Filter in Place; one blank-criteria F4; order rows by the row-number cells; right-click menus; Escape does not dismiss the runtime menu, a blank-area click does; menu items never chosen. Component Right-Click Menu values for the two combos were cleared (Save) in EXP-086 T2. |
| `experiments/EXP-083-…strings-and-runtime-check.md` | Partial read: lines 1–508 of 927 (status headers; T1 gates; T2 strings; T3 Save; part of T4). | Runtime open via Form > Open > Select Form in add-mode placeholder; Filter in Place; one blank-criteria F4 returns two rows. Order 1 = `1 / FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00`; order 2 = `2 / FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99`. Picture field blank in both. |
| `experiments/EXP-082-…rebuild-fx-orders-form.md` | Partial read: lines 1–342 of 1611 (status headers; T1 baseline; T9 component comparison in part). | Designer components: `FX_CustomerIDCombobox` (ComboBox, binding `object.FX_CustomerID`, tab 14); `FX_CustomerIDGridCol` (GridColumn, `object.FX_CustomerID`, tab 2); `FX_CusNameEdit` (`object.FX_CusName`, tab 16); `FX_CusAddressEdit` (`object.FX_CusAddress`, tab 18). Form menu recent-forms route for FX_Orders. |

**Partial-read limitation:** the EXP-082 to EXP-088 records were read in part (lines and headers as stated above). The unread parts were not applied. The Designer and runtime state were to be verified live; the blocked gate below means that verification did not happen.

## Session and tab handling (T1)

- Tab list (first browser call, before any selection): tab 0 = Infor Mongoose Application Development Framework, `mode=designer`, current, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **Tab 1 = `Logout Successful` (portal sign-out page, `session/slo/signoutsuccess`), with the text "You have been successfully logged out."** The Web Client was therefore not usable at the task start.
- Tab 0 selected (succeeded, after the list). Designer usable at the start (fresh snapshot; no dialog).
- Session-expiry procedure (standing operator authorization, 2026-10-13) followed **once** for the logged-out Web Client tab:
  1. No Mongoose "Session Expired" modal existed; the OK-on-modal step was not applicable.
  2. Tab 1 was navigated once to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (the permitted navigation). The page then showed `Infor CloudIdentities - Sign In` (top level; no tenant field).
  3. Username was filled with the placeholder `SECRET_MONGOOSE_USERNAME` and Password with `SECRET_MONGOOSE_PASSWORD` (typed as placeholders only; no value read or recorded). Sign in was clicked once.
  4. The Infor OS portal (System Administrator workspace) loaded. A `portal-notification` banner (`The DistributionIFSContactUs group does not have any active users…`) was dismissed once with its own close (×) button (standing rule, 2026-10-10). Its `here` link was not clicked.
  5. The Mongoose OS application was opened through the portal navigation menu (Search menu box `Mongoose`, one result under Applications, one click). It loaded in the portal's embedded app frame (`iframe`) as `Explorer` with the configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in the header. **No configuration Sign In page appeared**, so the configuration sign-in step was not performed. **No sign-in was typed inside the embedded app frame.**
- Re-login count: **1** (the Infor CloudIdentities sign-in, once). Session-expiry procedure: invoked **once**.
- The interrupted Designer step (Edit > Validator) was **not resumed** after the re-login, as the procedure requires. The Designer tab was left as found (FX_Orders open, clean) for the coordinator's next task.
- Console counts at snapshots (not inspected; out of scope): Designer "4 errors" then "6 errors" after the two Edit clicks; Mongoose Web Client "62 errors" at its last read. The worker did not inspect the console.

## Gate 1 — Designer identity, User scope and clean state (observed; AC-1 partial)

| Item | Observed | Evidence |
| --- | --- | --- |
| Form | `FX_Orders` (tab selected; heading `FX_Orders`; closable tab control present; Properties Name `FX_Orders`, Device Type `Default`, Form Type `Normal`, Is Master `True`) | `t1-00` (snapshot; identity read by find), `t1-01` (screenshot) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator account> ]` (the account name is not copied here) | `t1-01`, find |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]` | `t1-00`, `t1-01`; re-checked after each error OK (finds) |
| Canvas | Labels Order Number*, Customer ID*, Customer Name, Address, Item*, Item Description, Cost, Count (value 1), Order Total (0.00) | `t1-01` |
| Dialog | None at the start. After the first Edit click, the error alert was present (`t1-02`); it was answered with OK once and the state was re-checked clean (find). | `t1-02`; find after OK |

## Gate 2 — Validator `FX_CustomerID` readback (Edit > Validator; **NOT RUN, blocked**)

- Route: Designer top menu `Edit` (`e5`) was clicked **once** (call 6). No menu appeared. The result was the Mongoose alert `Error`: `The server event processing returned an error. If this persists, contact your system administrator.` (OK only). Answered OK once (call 11).
- Corrected attempt (the one permitted): after one fresh untargeted snapshot (`t1-03`) and a find for the Edit ref, `Edit` (`e5`) was clicked **once** more (call 15). **The same error alert appeared again.** Answered OK once (call 17).
- Result: the Edit menu could not be opened in this task. **Validator Type, Parameters and Error Message were not read back**; the expected values (In Collection; `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; `mIsNotAValid`) are therefore **not confirmed in EXP-089**. No Validator dialog was opened.
- Cause: **not established.** The alert text names a server event, and the Web Client tab was logged out at the task start (before any Designer action). A dead server session is a candidate explanation, not an observed fact.

## Gate 3 — Component Class `FX_CustomerID` readback (Edit > Component Class; **NOT RUN, blocked**)

Not attempted: the same Edit menu route failed twice; the stop rule (one fresh snapshot and one corrected attempt, then stop) was reached. The class's Validators, Validate Immediately and List Source are **not confirmed in EXP-089**. The EXP-088 expected values are recorded above as cited, not re-observed.

## Component readbacks (FX_CustomerIDCombobox and FX_CustomerIDGridCol; **NOT RECORDED**)

Not run (the Components rows were not selected in this task). Binding, Inheritance (Component Class, Component Class Parameters, View Attributes, Edit Property Class Extension), List Source and Validators are **not recorded**. The "no Component Class yet" precondition (AC-1) is **not established**.

## Runtime baseline, assignments, Designer Save, reopen, runtime check and discard (**NOT RUN**)

- The runtime baseline (blank-criteria F4; order 1 and order 2 values) was **not run**: the procedure ended the task after the re-login. The Web Client shows the Explorer page with no FX_Orders runtime Form open.
- Assignment of `FX_CustomerIDCombobox` and `FX_CustomerIDGridCol`: **not performed** (Component Class count 0 of 2; Component Class Parameters entries 0 of 2).
- Designer Save: **0 of 1**. Designer close/reopen: **0 of 1**.
- Runtime open/close, F4, drop-down choice and save-prompt answers: **0**. Runtime Saves: **0**.
- The contingency unload was **not** used (its condition was not reached). Unloads: **0**.

## Action audit (T1; exact counts; this task only)

Browser calls: **47** (one tab list; two tab selects; seven snapshots; five screenshots; seventeen finds; ten clicks; three types; one navigation; one mouse wheel). Numbers below are the call order.

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs: tab 0 Designer (current); tab 1 `Logout Successful` |
| 2 | `browser_snapshot` untargeted (depth 6), `t1-00` | Designer: FX_Orders, Save/Regenerate/Undo disabled, no dialog |
| 3 | `browser_find` (FX_Orders, ScopeType, dialog, closable) | Form identity; User scope; no dialog |
| 4 | `browser_tabs` select 0 | Succeeded |
| 5 | `browser_take_screenshot` `t1-01` | Identity, User scope, clean |
| 6 | `browser_click` `e5` (Edit, **once**) | **Error alert appeared** (server event processing error) |
| 7 | `browser_find` "Validator" | No match (no menu) |
| 8 | `browser_find` (menu regex) | No menu items; alert present |
| 9 | `browser_take_screenshot` `t1-02` | Error alert over FX_Orders |
| 10 | `browser_find` (alertdialog, OK) | Alert and OK `e611` |
| 11 | `browser_click` `e611` (OK, **once**) | Alert answered |
| 12 | `browser_find` (dialog, Save, Undo, tab) | No dialog; FX_Orders selected; Save and Undo disabled; User scope |
| 13 | `browser_snapshot` untargeted (depth 4), `t1-03` | Designer clean; no dialog |
| 14 | `browser_find` `button "Edit"` | Edit `e5` (active; no menu) |
| 15 | `browser_click` `e5` (corrected attempt, **once**) | **Same error alert appeared** |
| 16 | `browser_find` (menu, alertdialog) | Alert and OK `e611`; no menu |
| 17 | `browser_click` `e611` (OK, **once**) | Alert answered |
| 18 | `browser_find` (dialog, Save, FX_Orders, ScopeType) | No dialog; FX_Orders selected; Save disabled; User scope |
| 19 | `browser_tabs` select 1 | Succeeded (tab 1 `Logout Successful`) |
| 20 | `browser_snapshot` depth 5, `t1-04` | Tab 1: "You have been successfully logged out." |
| 21 | `browser_navigate` tab 1 to the portal URL (**procedure step, once**) | Portal page; redirected to Infor CloudIdentities sign-in |
| 22 | `browser_snapshot` depth 6, `t1-05` | Infor CloudIdentities - Sign In (top level) |
| 23 | `browser_find` (sign-in fields, button) | Username, Password, Sign in |
| 24 | `browser_type` Username = placeholder `SECRET_MONGOOSE_USERNAME` | Entered (placeholder) |
| 25 | `browser_type` Password = placeholder `SECRET_MONGOOSE_PASSWORD` | Entered (placeholder) |
| 26 | `browser_click` Sign in (**once**) | Portal page (System Administrator) |
| 27 | `browser_snapshot` depth 6, `t1-06` | Portal; notification banner present |
| 28 | `browser_find` (Mongoose, notification) | Banner close control found |
| 29 | `browser_click` banner close × (**once**, standing rule) | Banner dismissed |
| 30 | `browser_snapshot` depth 4, `t1-07` | Portal; no banner |
| 31 | `browser_find` (buttons and links) | "Open navigation menu" |
| 32 | `browser_click` Open navigation menu (**once**) | Navigation menu opened |
| 33 | `browser_find` (Mongoose, menu) | Applications list without Mongoose |
| 34 | `browser_click` See more (**once**) | Applications list expanded (no Mongoose in the accessible list) |
| 35 | `browser_find` (Mongoose) | No Mongoose link in the list |
| 36 | `browser_take_screenshot` `t1-08` | Navigation menu: Applications OS, Inbox, Document Management, Process Intelligence |
| 37 | `browser_mouse_wheel` (0, 400) | View only |
| 38 | `browser_find` (Mongoose) | No Mongoose link |
| 39 | `browser_find` (Search menu textbox) | Textbox `f3e466` |
| 40 | `browser_click` Search menu textbox (**once**) | Focused |
| 41 | `browser_type` `Mongoose` in the portal Search menu box | Result list: 1 result, Applications `Mongoose OS` |
| 42 | `browser_take_screenshot` `t1-09` | Portal search result `Mongoose OS` |
| 43 | `browser_find` (Mongoose link) | Link `f3e620` |
| 44 | `browser_click` Mongoose OS link (**once**) | Tab 1 now `Mongoose` (app page) |
| 45 | `browser_snapshot` depth 6, `t1-10` | Tab 1: `Mongoose`; app in an `iframe`; no sign-in text found |
| 46 | `browser_find` (Sign In, configuration, iframe) | iframe only; no sign-in control in the page tree |
| 47 | `browser_take_screenshot` `t1-11` | Mongoose Explorer in the portal frame; no dialog; header shows the configuration |

Count summary (T1): tab lists 1; tab selects 2 (both succeeded); snapshots 7 (`t1-00`, `t1-03`, `t1-04`, `t1-05`, `t1-06`, `t1-07`, `t1-10`); screenshots 5 (`t1-01`, `t1-02`, `t1-08`, `t1-09`, `t1-11`); finds 17; ref clicks 10 (Edit ×2; error OK ×2; Sign in; banner close; Open navigation menu; See more; search box; Mongoose OS link); types 3 (two sign-in placeholders; one portal search text); navigations 1 (procedure); mouse wheel 1 (view only); key presses 0; coordinate clicks 0. Total **47** = 1 + 2 + 7 + 5 + 17 + 10 + 3 + 1 + 1.

Recovery and errors: browser errors / timeouts **0**. "Ref not found" errors **0**. Fresh-snapshot recovery allowance used **1** (`t1-03`, after the first Edit error). Corrected attempts **1** (the second Edit click). Two find results returned "No match" because of menu state or the portal list; they were not repeated. No two browser actions were issued in parallel.

**Mongoose mutations and lifecycle (T1), exact:**
- Component Classes created / changed / removed: **0 / 0 / 0**. Component Class assignments: **0 of 2**. Component Class Parameters entries: **0 of 2**.
- Validators created / changed: **0 / 0**. Property class extensions, property classes, other components changed: **0**.
- Designer Saves: **0 of 1**. Designer close / reopen: **0 / 0 of 1**. Designer unloads: **0**. Designer Delete or Regenerate Form clicks: **0**.
- Mongoose error alerts answered with OK: **2** (both `The server event processing returned an error…`). Save prompts answered: **0**. Native browser dialogs: **0**.
- Runtime FX_Orders opens / closes / F4 / drop-down choices / saves: **0 / 0 / 0 / 0 / 0**. Runtime text entries: **0**.
- Web Client unloads: **0**. FormSync, deployment, regeneration: **0**.
- Checkout, check-in, undo checkout: **0 / 0 / 0**.
- Browser JavaScript / evaluate / run-code / console / network inspection by the worker: **0**.
- Portal banner dismissals: **1** (standing rule; its `here` link not clicked).
- Re-logins: **1** (Infor CloudIdentities sign-in, once, via the procedure). Configuration Sign In performed: **0** (did not appear). Sign-ins inside the embedded app frame: **0**.
- Session-expiry procedure invocations: **1**.

## Worker-written file inventory (T1)

- `experiments/EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md` (created by this worker; this record).
- `evidence/EXP-089/t1-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-089/t1-01-designer-fx-orders-start-user-clean.png`
- `evidence/EXP-089/t1-02-edit-menu-after-click-check.png` (**the name is misleading**: the image shows the server-event error alert, not an open Edit menu).
- `evidence/EXP-089/t1-03-designer-fresh-snapshot-after-error-ok.yml` (snapshot; tool-written).
- `evidence/EXP-089/t1-04-tab1-webclient-state-readonly.yml` (snapshot; tool-written).
- `evidence/EXP-089/t1-05-tab1-after-portal-navigation.yml` (snapshot; tool-written).
- `evidence/EXP-089/t1-06-portal-after-signin-fresh.yml` (snapshot; tool-written).
- `evidence/EXP-089/t1-07-portal-after-banner-dismiss-fresh.yml` (snapshot; tool-written).
- `evidence/EXP-089/t1-08-portal-navigation-menu-after-see-more.png`
- `evidence/EXP-089/t1-09-portal-menu-search-mongoose.png`
- `evidence/EXP-089/t1-10-mongoose-app-config-signin-fresh.yml` (snapshot; tool-written).
- `evidence/EXP-089/t1-11-mongoose-app-frame-state-readonly.png`

Total worker-written repository files (T1): **13** (1 record created directly by the worker; 12 evidence files created by the browser tool at the worker's request). The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/`; these were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Screenshots (T1; each one viewed before citing)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-089/t1-01-designer-fx-orders-start-user-clean.png` | Designer tab `FX_Orders`; Properties Name `FX_Orders`, Device Type Default, Form Type Normal, Is Master True; canvas labels Order Number, Customer ID, Customer Name, Address, Item, Item Description, Cost, Count, Order Total; toolbar Save greyed; footer `ScopeType: User`; no dialog. | **AC-1** Designer identity, User scope and clean state before the first Edit click. | The validator and component class values; the components' Inheritance values. |
| `evidence/EXP-089/t1-02-edit-menu-after-click-check.png` | FX_Orders Form with an `Error` alert: `The server event processing returned an error. If this persists, contact your system administrator.` and an OK button. No Edit menu visible. | That the first Edit click produced this alert (the blocker, observed). | The cause of the server event error; whether the Edit menu itself is affected. |
| `evidence/EXP-089/t1-08-portal-navigation-menu-after-see-more.png` | Portal navigation menu, Applications list (OS, Inbox, Document Management, Process Intelligence); the list does not show Mongoose. | The menu state after See more. | Anything in the Mongoose app. |
| `evidence/EXP-089/t1-09-portal-menu-search-mongoose.png` | Portal menu search `Mongoose`: 1 result, Applications, `Mongoose OS`. | The app entry used for the re-login route. | Its launch result (see `t1-11`). |
| `evidence/EXP-089/t1-11-mongoose-app-frame-state-readonly.png` | Tab `Mongoose` in the portal: the Mongoose Explorer (My Folders, Master Explorer, Public Folders, User Folders); header `<operator account> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no sign-in, no dialog; no Form open. | That the Web Client loaded with the configuration after the re-login (no configuration Sign In was shown). | That the Designer session (tab 0) is alive; any runtime baseline data. |

The accessibility snapshots `t1-04` (logged-out page: "You have been successfully logged out.") and `t1-05` (Infor CloudIdentities - Sign In) are the procedure's before-state evidence. They prove the state of tab 1 at that moment, not the Designer.

## Acceptance checks (T1)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Designer FX_Orders in User scope and clean; validator FX_CustomerID and class FX_CustomerID read back; both components' Inheritance and Data Source recorded with no Component Class; runtime baseline shows both orders | **NOT SUPPORTED (partial).** Sources reviewed (partial reads disclosed). Session: not usable at the start (logout); re-established by the procedure (Web Client loaded). Designer FX_Orders User scope and clean: **observed**. Validator and class readbacks: **not achieved** (Edit menu server error twice). Component readbacks: **not recorded**. Runtime baseline: **not run**. | `t1-00`, `t1-01` (Designer identity, scope, clean); `t1-02` (the blocking error); `t1-11` (Web Client loaded after re-login) | The Validator and Component Class values are unverified in EXP-089. The Designer session may be the cause of the error (not established). |
| **AC-2** Component Class and Parameters set and committed on both components; one Designer Save; one close/reopen | **NOT RUN.** | — | — |
| **AC-3** Runtime after one close/reopen: FX002 on order 1 changes Name and Address before Save; drop-down columns recorded; contingency unload at most once | **NOT RUN.** | — | — |
| **AC-4** Discard with one No to the save prompt; reopened orders unchanged; runtime closed clean | **NOT RUN.** | — | — |
| **AC-5** Final report: decisive evidence, complete audit with exact counts, inventory and final state | **Partial.** Audit (47 calls) and inventory (13 files) recorded above; the final report for the full experiment is for a later task. | Audit and inventory above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| At task start the Web Client tab (tab 1) showed `Logout Successful` ("You have been successfully logged out."); the Designer tab (tab 0) showed FX_Orders | **observed** (one run; `t1-04`; tab list) |
| The Designer FX_Orders is open in User scope and clean at the start (Save, Regenerate Form and Undo disabled; no dialog) | **observed** (one run; `t1-00`, `t1-01`) |
| An Edit click on the Designer raised `The server event processing returned an error…` (OK only); a corrected Edit click raised it again; both were answered OK once | **observed** (two occurrences in one run; `t1-02`; calls 6, 15) |
| The Edit menu's failure is caused by a dead server session | **unresolved** (candidate explanation only; not tested; the Designer tab was not re-tested after re-login) |
| Re-login through the procedure (portal navigation; Infor CloudIdentities sign-in with the placeholders; banner dismissed; Mongoose OS app opened) loads the Mongoose Web Client without a configuration Sign In | **observed** (one run; `t1-05` to `t1-11`) |
| Portal search `Mongoose` returns the `Mongoose OS` application | **observed** (one run; `t1-09`) |
| Validator `FX_CustomerID` values (In Collection; Parameters; `mIsNotAValid`) | **cited** from EXP-087 (not re-observed in EXP-089) |
| Component Class `FX_CustomerID` values (Validators `FX_CustomerID(%1,%2)`; Validate Immediately True; List Source) | **cited** from EXP-088 T4 and T7 (not re-observed in EXP-089) |
| Component Class `FX_CustomerID` persistence after one Designer Save and one close/reopen | **not tested** in EXP-089 |
| Tutorial Section 10 steps (Component Class and Parameters on the combobox and the grid column) | **unverified** (transcript; the FX_ mapping is the brief's) |
| Any database durability or replay | **not claimed** (not replay_verified) |

## Deviations and limits (T1)

- **D1:** The brief's Designer gate (Edit > Validator, then Edit > Component Class) could not be completed. The Edit menu raised a server-event error twice. The stop rule was applied (one fresh snapshot, one corrected attempt); the gates were not attempted by another route.
- **D2:** At the task start the Web Client was logged out. The session-expiry procedure was invoked once (see the session section). The procedure's configuration Sign In did not appear, so that step was not performed; the Mongoose app loaded with the configuration in its header.
- **D3:** The procedure's sign-in was performed through the top-level Infor CloudIdentities page, not in the embedded app frame. No input was entered in the embedded frame.
- **D4:** The portal navigation (See more; the search box `Mongoose`; the Mongoose OS link) was used to reach the app. Portal navigation only; no Mongoose data or Form was touched.
- **D5:** The screenshot `t1-02` is named `edit-menu-after-click-check`, but it shows the error alert, not the menu.
- **D6:** Partial reads of EXP-082 to EXP-088, of the tutorial Sections 7–8 (lines 186–214 only in part) and of transcript lines 553–569 (Item section, not in scope). The unread parts were not applied.
- **D7:** The Designer tab (tab 0) was not re-tested after the re-login. The coordinator decides its next step (the procedure leaves the expired Designer tab for the next task).

## Next permitted action (requires the coordinator's authorization for the next task)

1. Confirm the Designer session is usable (the Designer tab is the one that raised the server-event error; the Web Client has been re-established). If the Designer tab is still in error, the operator decides how to recover it; this worker does not reload or restart it.
2. Then a new bounded T1 task: list tabs; select tab 0; fresh snapshot; confirm FX_Orders, User scope, clean; open Edit > Validator once (if it raises the server-event error again, stop blocked); read back `FX_CustomerID`; Cancel. Then Edit > Component Class once; read back `FX_CustomerID`; Cancel. Record the two components' Binding, Inheritance, List Source and Validators. Then the runtime baseline (blank-criteria F4 once; no drop-down).
3. The assignment, Save, reopen, runtime check and discard are **not** authorized until the gates pass in that task.

Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 — post-reauthentication Designer gate, one Validator attempt; blocked by the same server-event error (cycle 1)

- Task T2, cycle 1, run `R-20261014-200230-uc2F`, task_message_id `fadf058b-f180-40f1-a9bd-1bde2290b626`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14.
- Scope (bounded T2 instruction): review the T1 record and evidence; list tabs; select the Designer; one fresh untargeted snapshot; verify FX_Orders open, User scope, clean, no dialog; if the Designer visibly reports a session error, stop; otherwise ONE Edit > Validator attempt; if the server-event error recurs, capture its text, OK once, document, and STOP. No component assignment, runtime action, Designer Save, close/reopen, unload, refresh, navigation or re-login.

### Sources (T2)

- The T1 section of this record and its decisive evidence (`t1-00`, `t1-01`, `t1-02`, `t1-11`). The EXP-087 and EXP-088 validator and class values were not re-read in T2 (the Validator and Component Class dialogs were not opened). Trust: the T1 observations (one run each).

### Tab list and Designer start state (verified before any Designer action)

- Tab list (first browser call of T2, before any selection): tab 0 = Infor Mongoose Application Development Framework (`mode=designer`, current, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); tab 1 = `Mongoose` (portal app page, `c51080bc-…`, the Web Client reached in T1; **not selected, not touched in T2**).
- Tab 0 selected (succeeded, after the list). Fresh untargeted snapshot (`t2-00-designer-fresh-snapshot-start.yml`): tab `FX_Orders` selected; heading `FX_Orders`; closable tab control present; footer `[ ScopeType: User / ScopeName: <operator account> ]`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; no alertdialog, no dialog, no Session or Sign In text. Console `6 errors, 0 warnings` (not inspected).
- Screenshot `t2-01-designer-start-fx-orders-user-clean-after-reauth.png` (taken before any Edit click).
- Gate result: **the Designer appeared usable and clean** (no visible session error before the attempt). The brief's stop-before-attempt condition did not apply.

### The one Validator attempt

- The Edit button ref was confirmed by a find (`e5`, active). Edit (`e5`) was clicked **once**.
- Result: the `Error` alert (alertdialog) appeared over FX_Orders with the text **`The server event processing returned an error. If this persists, contact your system administrator.`** (one OK button, `e611`). No Edit menu, no Validator dialog. Screenshot `t2-02-validator-attempt-server-event-error-before-ok.png` (taken before answering).
- The alert was answered with its OK **once** (`e611`). No further Edit click, no corrected attempt, no retry (per the T2 instruction).
- After the OK: a find shows no alertdialog; toolbar Save `[disabled]`, Undo `[disabled]`; FX_Orders selected; `ScopeType: User`. Screenshot `t2-03-designer-final-state-after-error-ok.png`: FX_Orders, footer `ScopeType: User`, Save and Undo greyed, no dialog, no menu.

### What T2 establishes and does not establish

- **Observed:** the Edit > Validator route fails with the same server-event error after the T1 re-login (three occurrences in total: twice in T1, once in T2). The error text is identical in all three.
- **Not established:** the cause. The Designer tab (tab 0) was not reloaded and was not re-logged in; the T1 re-login was performed in tab 1. A dead Designer-tab server session therefore remains a candidate explanation. It is **not tested**, and this worker did not test it (reload, navigation and re-login are not permitted in T2).
- **Not established:** whether Edit > Validator would work in a fresh Designer session. Not tested.
- **Interpretation limit:** "appeared usable" in the gate rests on the snapshot, the find and the screenshot of the tab. Those show the Form and toolbar state, not server responsiveness. The first Edit click shows the server did not respond to a Designer event.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 (T2 part) | **NOT SUPPORTED.** Designer FX_Orders User scope and clean: observed. Validator and Component Class readbacks: **not achieved** (server-event error on the one attempt). Component readbacks and the runtime baseline: **not run** (out of T2 scope). | `t2-00` (snapshot), `t2-01` (start state), `t2-02` (error text), `t2-03` (clean state after OK) | Validator and class values remain cited (EXP-087, EXP-088), not re-observed. |
| AC-2 to AC-5 | **NOT RUN** (out of T2 scope). | — | — |

### Action audit (T2; exact counts; this task only)

Browser calls: **12** (in order):

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs: tab 0 Designer (current); tab 1 `Mongoose` |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (depth 4), `t2-00` | Designer FX_Orders; Save, Regenerate, Undo disabled; no dialog |
| 4 | `browser_find` (dialog, session, Save, Undo, tab, ScopeType) | FX_Orders selected; User scope; clean; no dialog |
| 5 | `browser_take_screenshot` `t2-01` | Start state, User, clean |
| 6 | `browser_find` `button "Edit"` | Edit `e5` (active) |
| 7 | `browser_click` `e5` (Edit, **once**) | **Server-event error alert appeared** |
| 8 | `browser_find` (alertdialog, server event, menu items) | Alert `Error`; OK `e611`; no menu items |
| 9 | `browser_take_screenshot` `t2-02` | Error alert, before OK |
| 10 | `browser_click` `e611` (OK, **once**) | Alert answered |
| 11 | `browser_find` (alertdialog, Save, Undo, tab, ScopeType) | No alert; FX_Orders selected; Save and Undo disabled; User scope |
| 12 | `browser_take_screenshot` `t2-03` | Clean state after OK |

Count summary (T2): tab lists 1; tab selects 1 (succeeded); snapshots 1; finds 4 (calls 4, 6, 8, 11); screenshots 3 (`t2-01` to `t2-03`); ref clicks 2 (Edit once; error OK once); coordinate clicks 0; types 0; key presses 0; navigations 0; mouse wheel 0. Total **12** = 1 + 1 + 1 + 4 + 3 + 2. Errors / timeouts / ref-not-found: **0**. Fresh-snapshot recovery allowance: **not used** in T2 (the T1 allowance was used there; the T2 instruction does not reset it, and no recovery was needed).

**Mongoose mutations and lifecycle (T2), exact:**
- Validator or Component Class dialogs opened: **0**. Component Class assignments: **0 of 2**. Component Class Parameters entries: **0 of 2**.
- Designer Saves: **0 of 1**. Designer close / reopen: **0 / 0 of 1**. Designer unloads: **0**. Regenerate Form / top-toolbar Delete clicks: **0 / 0**.
- Server-event error alerts answered with OK: **1** (T2; call 10).
- Runtime (tab 1) actions: **0**. Runtime open / close / F4 / drop-down / save: **0**.
- Checkout actions: **0**. Re-logins: **0 in T2** (cumulative 1, from T1). Session-expiry procedure invocations in T2: **0** (cumulative 1).
- Browser JavaScript / evaluate / console / network inspection by the worker: **0**.

### Cumulative browser action audit (T1 + T2)

| Item | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 47 | 12 | **59** |
| Edit menu clicks (failed with server-event error) | 2 | 1 | **3** |
| Server-event error alerts answered OK | 2 | 1 | **3** |
| Component Class assignments | 0 of 2 | 0 of 2 | **0 of 2** |
| Component Class Parameters entries | 0 of 2 | 0 of 2 | **0 of 2** |
| Designer Save | 0 of 1 | 0 of 1 | **0 of 1** |
| Designer close / reopen | 0 / 0 of 1 | 0 / 0 of 1 | **0 / 0 of 1** |
| Runtime open / close / F4 / drop-down / runtime Save | 0 | 0 | **0** |
| Unloads (Web Client or Designer) | 0 | 0 | **0** |
| Other component, validator or class changes | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | **0** |
| Re-logins (session-expiry procedure) | 1 | 0 | **1** |
| Portal banner dismissals | 1 | 0 | **1** |
| Portal navigations (procedure step) | 1 | 0 | **1** |

### Worker-written file inventory (T2)

- `experiments/EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md` (edited in T2: status header and this section; created in T1).
- `evidence/EXP-089/t2-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-089/t2-01-designer-start-fx-orders-user-clean-after-reauth.png`
- `evidence/EXP-089/t2-02-validator-attempt-server-event-error-before-ok.png`
- `evidence/EXP-089/t2-03-designer-final-state-after-error-ok.png`

T2 total: **4** new evidence files (1 snapshot and 3 PNG); the record was edited, not created again (T6 clarification: the T2 line previously read as if the record were a fifth new file). Cumulative worker-written files for EXP-089 (T1 + T2): **17** (the record once, plus 16 evidence files). The browser tool's own `evidence/playwright/` snapshot and console files are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Decisive screenshots (T2; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t2-01-…-after-reauth.png` | FX_Orders heading and tab; Properties Name `FX_Orders`, Device Type Default, Form Type Normal, Is Master True; footer `ScopeType: User`; Save and Undo greyed; no dialog. | Identity, User scope and clean state of the Designer before the attempt. | Server responsiveness; the validator or class values. |
| `t2-02-…-before-ok.png` | `Error` alert over FX_Orders with the server-event text and one OK; no Edit menu. | The exact error text, observed on the one attempt. | The cause; whether the Edit menu would open in another session. |
| `t2-03-…-after-error-ok.png` | FX_Orders; footer `ScopeType: User`; Save and Undo greyed; no alert, no menu. | The clean state after the single OK. | That the server recovered (only the UI state is shown). |

### Final state (T2)

- **Designer (tab 0):** FX_Orders selected; `ScopeType: User`; clean (Save, Regenerate Form and Undo disabled); no dialog; no menu. Not closed, saved, reloaded or reopened.
- **Web Client (tab 1):** the `Mongoose` portal app page (the T1 end state; Explorer). **Not selected, not touched in T2.** Its state after T1 was not re-read in T2.
- Tab list at the end of T2 was not re-run (no further action needed); tab 0 is the current tab.

(Superseded by T3 below: the Designer tab was re-checked in T3 and the Edit menu worked.)

### Next permitted action (for the coordinator)

1. Decide the Designer-tab recovery: the Designer's own server session may be the one that expired (the re-login was done in tab 1, not in tab 0). Any reload, navigation or re-login of tab 0 is outside T2 and is the operator's decision. This worker did not attempt it.
2. Only after a successful Validator readback (Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`) and Component Class readback may the assignment task (Sections 10 gates) be authorized.

Classification for all T2 findings: **observed only, NOT replay_verified.**

---

## T3 — post-recovery Designer prerequisites (validator, class, components) and the runtime baseline; NO assignment, NO Designer Save (cycle 3)

- Task T3, cycle 3, run `R-20261014-200230-uc2F`, task_message_id `215af168-b89a-4f64-8932-abb4b0fe1adb`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14.
- Scope (bounded T3 instruction): tab list; Designer identity, User scope, clean; validator and class readbacks (Cancel each); both components' Inheritance and Data Source values (no change); runtime baseline (blank-criteria F4 once, order 1 and order 2 verified, no drop-down). Stop on any unexpected value. No Component Class or parameter assignment, no Designer Save, no runtime edit, no unload, no property change.
- Sources: the T1 and T2 sections of this record and their evidence. No additional source sections were read in T3. The comparison values are the ones read in T1: the EXP-087 validator values (T1–T3 bodies, lines 1–507) and the EXP-088 class values (T4 and T7 status headers, plus the T2 property sheet). Sections of EXP-082 to EXP-088 beyond those reads remain unread, as disclosed in T1.

### Tab list and Designer identity (before any Designer action)

- Tab list (first call; before any selection): tab 0 = Designer (`mode=designer`, current; no `MGForm` in the URL); tab 1 = `Mongoose` (portal app page, the Web Client, `favoriteContext` absent at that point).
- Tab 0 selected (succeeded). Fresh untargeted snapshot `t3-00-designer-fresh-snapshot-start.yml`: toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo and Redo `[disabled]`; footer `ScopeType: User`; **no Form tab and no `FX_Orders` heading** (the canvas was empty). Screenshot `t3-01-designer-start-identity-scope-clean.png` confirms an empty canvas, no dialog, User scope, clean.
- **Gate:** no Form was loaded. The brief allows one open through the Form menu recent-forms entry. The Form menu listed `FX_Orders` first; one click on it (call 9) opened `FX_Orders` as a Designer tab. Result: tab `FX_Orders` selected; Properties `Name` `FX_Orders`, Device Type `Default`, Form Type `Normal`, Is Master `True`; footer `ScopeType: User`; Save, Regenerate Form and Undo disabled; no dialog (`t3-02-fx-orders-opened-via-recent-forms-clean.png`). Identity and scope are established. Cause of the empty start state: **not established** (the T2 Form was open; the operator's manual recovery is the likely cause, not verified).

### Validator `FX_CustomerID` (Edit > Validator, opened once; Cancel once)

- The Edit menu opened on the first click and listed Validator. No server-event error this time.
- The Validators list (Global Objects) was scrolled to F–G (view only, one wheel); `FX_CustomerID` was selected once (view selection). Screenshots `t3-03` (dialog opened) and `t3-04` (readback).

| Property | Observed (accessibility; screenshot `t3-04`) | EXP-087 value | Match |
| --- | --- | --- | --- |
| Name | `FX_CustomerID` | `FX_CustomerID` | yes |
| Type | `In Collection` | `In Collection` | yes |
| Parameters | `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` (full text from accessibility; the frame clips it as `FX_HelloWorld01( PRO...`) | same | yes |
| Error Message | `mIsNotAValid` | `mIsNotAValid` | yes |
| Description; Edit in-line Script | blank | blank | yes |
| Version | `User version for user <operator>` | `User version…` | yes |

- Cancel clicked once (`e1018`). The dialog closed; no OK; no value changed.

### Component class `FX_CustomerID` (Edit > Component Class, opened once; Cancel once)

- The Edit menu opened and Component Class was clicked once. The Component Classes list was scrolled to F–G (view only); `FX_CustomerID` sits between `FrequencyVar` and `GetCharacterTypeColumns`, and was selected once.
- Properties header `FX_CustomerID` (Name). Data Source was expanded (one row select; one ArrowRight that did not expand; one chevron click that did); Validation was expanded (row select; chevron click). Screenshots `t3-05`, `t3-06` (ArrowRight did not expand), `t3-07` (Data Source expanded; List Source visible), `t3-08` (Validation row selected), `t3-09` (readback).

| Property | Observed (accessibility; screenshot `t3-09`) | EXP-088 value | Match |
| --- | --- | --- | --- |
| Validators | `FX_CustomerID(%1,%2)` | `FX_CustomerID(%1,%2)` | yes |
| Validate Immediately | `True` | `True` | yes |
| Validate Immediately Prompt | blank | blank (EXP-088 T2 read) | yes |
| List Source | `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (verbatim; the frame clips it) | identical string | yes |
| Message On Status Bar | False | False (EXP-088 T2) | yes |

- Cancel clicked once (`e1653`). The dialog closed; no OK; no value changed.

### Components `FX_CustomerIDCombobox` and `FX_CustomerIDGridCol` (read-only; before any assignment)

- Designer Details panel expanded (one `Expand Panel` click); Components tab selected (one click). Pane (01) and Pane (00) were expanded (view only; chevron clicks; FormCollectionGrid expanded once). Screenshots `t3-10`, `t3-11`.
- Each component was selected once (view selection); the Properties panel shows the Component tab (`t3-12`, `t3-13`, `t3-15`, `t3-23`).

| Field | FX_CustomerIDCombobox (ComboBox; pane 1; tab 14) | FX_CustomerIDGridCol (GridColumn; pane 0; container FormCollectionGrid; tab 2) |
| --- | --- | --- |
| Components row (grid) | `FX_CustomerIDCombobox ComboBox object.FX_CustomerID 1 14` | `FX_CustomerIDGridCol GridColumn object.FX_CustomerID 0 FormCollectionGrid 2` |
| Binding Type; Binding | `Property`; `object.FX_CustomerID` | `Property`; `object.FX_CustomerID` |
| Inheritance: Component Class | **blank** | **blank** |
| Inheritance: Component Class Parameters | **blank** | **blank** |
| Inheritance: Set Class From | `This Component's Attribute` | `This Component's Attribute` |
| Inheritance: View Attributes Inherited From Property | `FX_CustomerID` | `FX_CustomerID` |
| Inheritance: Edit Property Class Extension For Property Class | `FX_CustomerID` | `FX_CustomerID` |
| Data Source: List Source | blank | blank |
| Validation: Validators | blank | blank |
| Validate Immediately | False | False |
| Validate Immediately Prompt | blank | blank |
| Message On Status Bar | False | False |

- Neither component has a Component Class, so the stop condition did not apply. No value was changed. The Components Component Class column is blank for both rows.
- Before-assignment Inheritance screenshots: `t3-13-FX_CustomerIDCombobox-groups-expanded-before-assignment.png` (combobox: Component Class blank, Set Class From, View Attributes and Edit Property Class Extension `FX_CustomerID` visible) and `t3-23-FX_CustomerIDGridCol-inheritance-before-assignment.png` (GridCol: the full Inheritance block visible after a view-only wheel on the Properties pane). `t3-15` shows the GridCol before the wheel, with the Inheritance rows below the frame.
- Observation (not acted on): the Components grid reads `FX_ItmsPictureEdit` with Type **Static** (`FX_ItmsPictureEdit Static object.FX_ItmsPicture 1 30`), whereas EXP-082 T9 recorded it as an Edit. Out of scope for EXP-089; recorded only.

### Designer clean check before the runtime

- Save and Undo disabled; no dialog; `ScopeType: User`; the Designer tab was left with no change. (Verified by find after the GridCol read.)

### Runtime baseline (Web Client tab 1; read-only apart from one Form open, one FiP switch, one F4, one row-number click)

- Tab 1 selected (after the tab list). Fresh snapshot `t3-16`: the Mongoose app (portal frame) showed the Explorer for configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, no `Session Expired`, no sign-in, no dialog (`t3-17`). **Authenticated; no re-login.** No FX_Orders runtime tab was open at the start, so no close was needed.
- Form menu (one click) > Open (one click) > Select Form dialog. The dialog opened with a leftover filter `IdoCollections`, which showed only `IDOs` / `IdoCollections` (and `G6RIdoCollectionSearch`). The filter was changed to `FX_Orders` (Control+a, then a plain fill, then Control+a and a slow typed entry) so the list narrowed to one row, `FX_Orders` / `FX_Orders` (`t3-18`, `t3-19`). **Limit:** the filter is a Mongoose picker filter (not a runtime record field). The plain fill did not narrow the list (matches EXP-083); the slow entry did. One OK (`f1e192`) once.
- The Form opened in add-mode placeholder state (Order Number `3`; status `Order Number (Object 1 of 1)`). One click on the toolbar `Filter in Place` button (FiP) switched it; criteria all blank; status `Filter in Place` (`t3-20`).
- One blank-criteria F4. Result: two rows; order 1 detail (`t3-21`): Order Number `1`; Customer ID `FX001` (combobox focused, text selected; **not typed into; no drop-down opened**); Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00`; a picture is shown; status `Customer ID (Object 1 of 2)`.
- Grid rows (read by accessibility; both rows visible in the grid): row 1 `1 | FX001 | Factory test one | 1 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00`; row 2 `2 | FX002 | Factory test two | 2 Factory Street | eggs | cage free | 6.99 | 1 | 6.99`. Grid columns (headers): Order Number, Customer ID, Customer Name, Address, Item, Item Description, Cost, Count, Order Total, and a blank picture column.
- Order 2 verified by one click on its row-number cell (`f1e467`) (`t3-22`): Order Number `2`; Customer ID `FX002`; Customer Name `Factory test two`; Address `2 Factory Street`; Item `eggs`; Item Description `cage free`; Cost `6.99`; Count `1`; Order Total `6.99`; status `(Object 2 of 2)`.
- Observation (not acted on): the order 1 and order 2 pictures are displayed (a dog image on order 1; a different image on order 2). EXP-083 T5 recorded the picture as blank in both orders. The difference is recorded; its cause is not established.
- Runtime state at the end of T3: FX_Orders open, **clean** (Save disabled; no dialog; no menu; no drop-down open), Filter in Place, order 2 (`Object 2 of 2`). No runtime edit; no runtime Save.

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Designer FX_Orders User scope and clean; validator and class read back with the expected values (EXP-088 gap); both components' Inheritance and Data Source recorded with no Component Class; runtime baseline shows both orders as expected | **SUPPORTED (observed; same session).** Sources reviewed (T1 and T2 sections; partial reads as disclosed in T1). Session usable (tab 1 authenticated; no re-login in T3). Designer FX_Orders User scope and clean (Form opened via recent-forms because none was loaded). Validator and class readbacks match EXP-087 and EXP-088. Both components: Component Class and Parameters blank; Binding and View Attributes and Edit Property Class Extension `FX_CustomerID`. Runtime baseline: order 1 and order 2 match. | `t3-01`, `t3-02` (Designer identity, scope, clean); `t3-04` (validator); `t3-09` (class); `t3-13`, `t3-23` (Inheritance before assignment); `t3-21`, `t3-22` (runtime baseline) | Same session only. The EXP-088 gap is closed for the same session, not after a Designer close/reopen. Validator Parameters and class List Source are clipped in the frames (full text from accessibility). |
| AC-2 | **NOT RUN** (assignment is not authorized in T3). | — | — |
| AC-3 | **NOT RUN.** | — | — |
| AC-4 | **NOT RUN.** | — | — |
| AC-5 | **Partial** (T3 audit and inventory recorded below; final report later). | Audit and inventory below | — |

### Discrepancies and limits (T3)

- **Gap closed (partly):** the EXP-088 T8 condition (validator definition re-read after the class Parameters step or a reopen) is now satisfied for the same session. No Designer close/reopen occurred in T3, so the reopen half remains untested.
- **Designer Form absent at T3 start:** the T2 Form was open; in T3 no Form was loaded. Cause not established. The worker reopened FX_Orders once via recent-forms (permitted by the brief).
- **Discrepancy outside the two components:** `FX_ItmsPictureEdit` reads Static in the Components grid (EXP-082 T9: Edit). Recorded; not investigated.
- **Discrepancy with EXP-083:** the runtime picture is displayed in both orders (EXP-083 T5: blank). Recorded; not investigated.
- **Picker filter:** the Select Form filter needed a plain fill and then a slow entry before the list narrowed (EXP-083 saw the same). The filter is a Mongoose picker field, not a runtime record field.
- **Left open:** the runtime FX_Orders Form is open and clean (order 2). The brief's runtime close belongs to the later runtime-check task. No dialog or unsaved change is open.

### Action audit (T3; exact counts; this task only)

Browser calls: **121** (in order; numbered by category):

| Category | Count | Notes |
| --- | --- | --- |
| Tab lists | 1 | Before the first selection. |
| Tab selects | 3 | Tab 0 (start); tab 1 (runtime); tab 0 again (GridCol inheritance screenshot). All succeeded. |
| Untargeted snapshots | 2 | `t3-00` (Designer start); `t3-16` (Web Client start). |
| Screenshots | 22 | `t3-01` to `t3-15`, `t3-17` to `t3-23`. |
| Finds (read-only) | 47 | Includes three that returned "No match" (menu state or list rendering); not repeated. |
| Ref clicks | 23 | Form menu ×2; recent-forms FX_Orders ×1; Edit ×2; Validator ×1; Component Class ×1; validator row ×1; validator Cancel ×1; class row ×1; Data Source row ×1; Validation row ×1; class Cancel ×1; Details Expand Panel ×1; Components tab ×1; Pane (01) row ×1; FX_CustomerIDCombobox row ×1; FX_CustomerIDGridCol row ×1; runtime Form menu ×1; runtime Form > Open ×1; filter box ×1; Select Form OK ×1; FiP ×1; row-2 number cell ×1. |
| Coordinate clicks (chevrons, view only) | 8 | Data Source ×1; Inheritance ×1; Data Source (combobox) ×1; Validation (combobox) ×1; Pane (01) ×1; Validation (class) ×1; Pane (00) ×1; FormCollectionGrid ×1. |
| Mouse moves | 4 | Before each wheel (view). |
| Mouse wheel | 4 | Lists and property panes (view only). |
| Key presses | 5 | ArrowRight ×2 (no expansion; one moved focus to a cell); Control+a ×2 (filter); F4 ×1. |
| Typed text | 2 | `FX_Orders` into the Select Form filter (plain fill; then slow entry). No runtime field typed. |
| Navigations / portal steps | 0 | None. |

Count reconciliation: 1 + 3 + 2 + 22 + 47 + 23 + 8 + 4 + 4 + 5 + 2 = **121**.

**Mongoose mutations and lifecycle (T3), exact:**
- Component Class assignments: **0 of 2**. Component Class Parameters entries: **0 of 2**. Other component property changes: **0**.
- Validator, class, property class extension or property class changes: **0**. Validator and class dialogs: opened **1 / 1**, each closed with Cancel **1 / 1** (no OK).
- Designer Save: **0 of 1**. Designer close / reopen: **0 / 0 of 1**. Designer Form opened via recent-forms (no Form was loaded at T3 start): **1** (a lifecycle open, not a close/reopen pair).
- Designer unloads: **0**. Regenerate Form and Delete clicks: **0**. Error alerts: **0** (none this task).
- Runtime FX_Orders opened: **1** (Form > Open > Select Form; one OK). Runtime closed: **0** (left open, clean). Runtime F4: **1**. Runtime Filter in Place switch: **1**. Runtime row-number navigation: **1** (order 2). Customer ID drop-down opened: **0**. FX002 chosen: **0**. Runtime Saves: **0**. Save prompts answered: **0** (none appeared). Runtime edits / typed runtime fields: **0**.
- Web Client unloads: **0**. Designer unload: **0**. FormSync, deployment, regeneration: **0**.
- Checkout, check-in, undo checkout: **0 / 0 / 0**.
- Re-logins: **0 in T3** (cumulative **1**, from T1). Session-expiry procedure: not invoked in T3.
- Browser JavaScript / evaluate / console / network inspection by the worker: **0**.

### Cumulative browser action audit (T1 + T2 + T3)

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls | 47 | 12 | 121 | **180** |
| Tab lists | 1 | 1 | 1 | **3** |
| Tab selects | 2 | 1 | 3 | **6** |
| Untargeted snapshots | 7 | 1 | 2 | **10** |
| Screenshots | 5 | 3 | 22 | **30** |
| Finds | 17 | 4 | 47 | **68** |
| Ref clicks | 10 | 2 | 23 | **35** |
| Coordinate clicks | 0 | 0 | 8 | **8** |
| Mouse moves | 0 | 0 | 4 | **4** |
| Mouse wheel | 1 | 0 | 4 | **5** |
| Navigations | 1 | 0 | 0 | **1** |
| Key presses | 0 | 0 | 5 | **5** |
| Typed text | 3 | 0 | 2 | **5** |
| Component Class assignments | 0 of 2 | 0 of 2 | 0 of 2 | **0 of 2** |
| Parameter entries | 0 of 2 | 0 of 2 | 0 of 2 | **0 of 2** |
| Designer Save | 0 of 1 | 0 of 1 | 0 of 1 | **0 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0 of 1** |
| Runtime opens / closes / F4 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 0 / 1 | **1 / 0 / 1** |
| Drop-down choices | 0 | 0 | 0 | **0** |
| Runtime Saves; save prompts answered | 0; 0 | 0; 0 | 0; 0 | **0; 0** |
| Error alerts answered OK | 2 | 1 | 0 | **3** |
| Re-logins | 1 | 0 | 0 | **1** |

### Worker-written file inventory (T3)

- `experiments/EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md` (edited in T3: status header, superseded note in T2, and this section; created in T1).
- `evidence/EXP-089/t3-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-089/t3-01-designer-start-identity-scope-clean.png`
- `evidence/EXP-089/t3-02-fx-orders-opened-via-recent-forms-clean.png`
- `evidence/EXP-089/t3-03-validator-dialog-opened-before-select.png`
- `evidence/EXP-089/t3-04-validator-FX_CustomerID-readback-type-params-error.png`
- `evidence/EXP-089/t3-05-component-class-FX_CustomerID-selected-before-expand.png`
- `evidence/EXP-089/t3-06-component-class-after-data-source-expand-attempt.png`
- `evidence/EXP-089/t3-07-component-class-data-source-expanded-list-source.png`
- `evidence/EXP-089/t3-08-component-class-validation-row-selected.png`
- `evidence/EXP-089/t3-09-component-class-FX_CustomerID-readback-validators-validate-immediately-list-source.png`
- `evidence/EXP-089/t3-10-details-components-tab-state.png`
- `evidence/EXP-089/t3-11-components-pane01-after-arrowright.png`
- `evidence/EXP-089/t3-12-FX_CustomerIDCombobox-before-properties-readback.png`
- `evidence/EXP-089/t3-13-FX_CustomerIDCombobox-groups-expanded-before-assignment.png`
- `evidence/EXP-089/t3-14-components-pane00-expand-attempt.png`
- `evidence/EXP-089/t3-15-FX_CustomerIDGridCol-properties-before-assignment.png`
- `evidence/EXP-089/t3-16-webclient-fresh-snapshot-baseline-start.yml` (snapshot; tool-written).
- `evidence/EXP-089/t3-17-webclient-state-before-baseline.png`
- `evidence/EXP-089/t3-18-runtime-select-form-filter-FX_Orders-before-ok.png`
- `evidence/EXP-089/t3-19-runtime-select-form-filter-FX_Orders-slow-typed.png`
- `evidence/EXP-089/t3-20-runtime-FX_Orders-opened-filter-in-place-blank-criteria.png`
- `evidence/EXP-089/t3-21-runtime-baseline-after-F4-order1.png`
- `evidence/EXP-089/t3-22-runtime-baseline-order2-detail-view.png`
- `evidence/EXP-089/t3-23-FX_CustomerIDGridCol-inheritance-before-assignment.png`

T3 total: **25** repository files (the record edited, plus 24 evidence files: 2 snapshots and 22 PNG). Cumulative worker-written files for EXP-089 (T1 + T2 + T3): **41** (the record once, plus 40 evidence files: 12 from T1, 4 from T2, 24 from T3). The browser tool's own `evidence/playwright/` snapshot and console files are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Decisive screenshots (T3; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t3-01` | Empty Designer canvas; no Form tab; Save and Undo greyed; footer `ScopeType: User`; no dialog. | The start state: no Form loaded, User scope, clean. | Any Form content. |
| `t3-02` | FX_Orders Form; Properties Name `FX_Orders`, Normal, Is Master True; footer `ScopeType: User`; Save greyed; no menu. | Identity, scope and clean state after the recent-forms open. | The validator or class values. |
| `t3-04` | Validator list with FX_CustomerID selected; Type `In Collection`; Parameters `FX_HelloWorld01( PRO…` (clipped); Error Message `mIsNotAValid`; Name `FX_CustomerID`. | The validator's Type and Error Message, and the Parameters prefix (full text from accessibility). | Stored (database) state; Parameters full text in the frame. |
| `t3-09` | Class list with FX_CustomerID; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; Validation expanded; List Source `STDOLE FX_HelloWorl…` (clipped). | Validators and Validate Immediately; List Source prefix (full text from accessibility). | Full List Source text in the frame; stored state. |
| `t3-13` | FX_CustomerIDCombobox Properties: Data Source (Binding `object.FX_Custome…`); Inheritance: Component Class blank; Set Class From; View Attributes `FX_CustomerID`; Edit Property Class `FX_CustomerID`. | The combobox Inheritance state before any assignment. | Parameters row (below frame; accessibility only). |
| `t3-23` | FX_CustomerIDGridCol Properties: Binding `object.FX_Custome…`; Inheritance: Component Class blank; Component Class (Parameters) blank; Set Class From; View Attributes and Edit Property Class `FX_CustomerID`; Validators blank. | The GridCol Inheritance state before any assignment. | Stored state. |
| `t3-20` | Runtime FX_Orders, Filter in Place, blank criteria, FiP indicator; status `Filter in Place`. | The blank-criteria state before F4. | The query result. |
| `t3-21` | Runtime order 1 detail: FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, count 2, 90.00; picture shown; status `Customer ID (Object 1 of 2)`. | Order 1 values after one F4. | Order 2 (see `t3-22`); the drop-down (not opened). |
| `t3-22` | Runtime order 2 detail: FX002, Factory test two, 2 Factory Street, eggs, cage free, 6.99, count 1, 6.99; status `(Object 2 of 2)`. | Order 2 values, reached by its row-number cell. | Order 1 (see `t3-21`). |

### Final state (T3)

- **Designer (tab 0):** FX_Orders open (opened in T3); `ScopeType: User`; clean (Save, Regenerate Form, Undo disabled); no dialog; Details panel expanded; FX_CustomerIDGridCol selected. **No Component Class or parameter assigned.** Not saved, closed or reopened after the open.
- **Web Client (tab 1):** the Mongoose app in the portal frame; runtime FX_Orders open, Filter in Place, order 2, **clean**; no dialog; no menu; no drop-down open. Not closed (the brief's runtime close belongs to the later runtime-check task).
- Tab list at the end of T3: tab 0 Designer (current in the last selection), tab 1 Mongoose. Both preserved.

### Next permitted action (for the coordinator)

1. Authorize the assignment task (EXP-089 Section 10 assignments: Component Class `FX_CustomerID` and parameters `FX_CusName,FX_CusAddress` on `FX_CustomerIDCombobox` and `FX_CustomerIDGridCol`, one Designer Save, one Designer close/reopen). Its preconditions are met as of T3.
2. Close the clean runtime FX_Orders once at the start of the runtime-check task (it is open, clean, on order 2).

Classification for all T3 findings: **observed only, NOT replay_verified.**

---

## T4 — the two Component Class assignments, one Designer Save, one Designer close and reopen (cycle 4)

- Task T4, cycle 4, run `R-20261014-200230-uc2F`, task_message_id `1c040f7e-1735-4d28-afa0-10a10c61fb56`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14.
- Scope (bounded T4 instruction): tab list; Designer gate (User, clean, no dialog, both components blank); FX_CustomerIDCombobox assignment (class and parameters), then FX_CustomerIDGridCol; exactly one native Save with its response; one Form-tab close and one recent-forms reopen; readback of both components. Runtime untouched. No unloads, no checkout, no re-login, no other property change.
- Sources: the T3 checkpoint and its evidence (`t3-13`, `t3-23`) and the T3 section above. No other source was read.

### Tab list and gate (before any mutation)

- Tab list (first call; before any selection): tab 0 = Designer (current; `MGForm=FX_Orders`); tab 1 = `Mongoose` (the Web Client, runtime FX_Orders open, clean, on order 2 from T3).
- Tab 0 selected (succeeded). Fresh snapshot `t4-00-designer-fresh-snapshot-start.yml`: tab `FX_Orders` selected; footer `ScopeType: User`; Save and Undo disabled; no dialog, no alert.
- Screenshot `t4-01-designer-start-fx-orders-user-clean.png`.
- Component state (read-only): FX_CustomerIDGridCol (selected in the grid; read in the Properties panel) shows Component Class blank, Set Class From `This Component's Attribute`, View Attributes and Edit Property Class Extension `FX_CustomerID`. FX_CustomerIDCombobox's Components row (`ComboBox`, `object.FX_CustomerID`, tab 14) was read in the grid before its selection; its Inheritance Component Class was blank in the T3 checkpoint and in `t4-03`.
- **Gate result: passed** (FX_Orders open, User scope, clean, no dialog; both components have blank Component Class). No stop condition applied.

### FX_CustomerIDCombobox — Component Class (one list pick, one Tab)

| Step | Observed | Evidence |
| --- | --- | --- |
| Select the component (Components row, one click) | Properties header `FX_CustomerIDCombobox (EnhancedCombo)`; Binding `object.FX_CustomerID`; Component Class blank; Parameters blank; View Attributes and Edit Property Class Extension `FX_CustomerID`; List Source blank; Validators blank; Validate Immediately False. | `t4-02`, `t4-03` (BEFORE, viewed) |
| Open the Component Class list (dropdown, one click) | List opened; the first rows (AccessAsVar … AttachmentEmbeddedVar) are visible in the image; the `FX_CustomerID` option lies further down and was read by accessibility (`cell "FX_CustomerID"`). | `t4-04` (viewed; the option itself is **not** in the frame) |
| Choose `FX_CustomerID` (one click) | Option selected | — |
| Commit with Tab (one press) | Component Class reads `FX_CustomerID`; **no prompt**; Save and Undo became **enabled** (dirty). Validators, List Source and Validate Immediately unchanged (blank, blank, False). | `t4-05` (viewed) |

### FX_CustomerIDCombobox — Component Class Parameters (one click on the cell, type, one Tab)

| Step | Observed | Evidence |
| --- | --- | --- |
| Click the value cell (one click) | An inline text input opened in the cell (empty). | `t4-06` (viewed) |
| Type `FX_CusName,FX_CusAddress` (one type action) | Entered. | — |
| Commit with Tab (one press) | Accessibility readback: `FX_CusName,FX_CusAddress` (the frame clips the text as `FX_CusName,FX_…`); **no prompt**; no other value changed. | `t4-07` (viewed) |

### FX_CustomerIDGridCol — Component Class and Parameters (same steps)

| Step | Observed | Evidence |
| --- | --- | --- |
| Select the grid column (Components row, one click) | Properties header `FX_CustomerIDGridCol (GridColumn)`; Binding `object.FX_CustomerID`; Component Class blank; Parameters blank; View Attributes and Edit Property Class Extension `FX_CustomerID`; List Source blank; Validators blank; Validate Immediately False. | `t4-08` (BEFORE, viewed) |
| Open the Component Class list (one click) | List opened (accessibility: `cell "FX_CustomerID"` present). | — (not captured as an image) |
| Choose `FX_CustomerID` and Tab (one click, one press) | Component Class reads `FX_CustomerID`; **no prompt**; no other value changed. | `t4-09` (viewed) |
| Click the Parameters value cell (one click); type `FX_CusName,FX_CusAddress` (one type); Tab (one press) | Inline input; committed. Accessibility readback `FX_CusName,FX_CusAddress`; **no prompt**; no other value changed. | `t4-10` (viewed) |

- The Components grid's Component Class column still showed blank for the two rows immediately before the Save (`t4-09`, `t4-10`); after the Save and reopen the column shows `FX_CustomerID` for both (see below). This is an observation of the grid's refresh, not a separate change.

### Designer Save (exactly one)

- Pre-Save gate: Save enabled (find; `t4-10`).
- One click on the native toolbar `Save` (`e2748`). **Count: 1.** No retry.
- Native response, verbatim: toast title `Save`; text `Form [FX_Orders] and global object(s) were saved.` (with a Close control). Screenshot `t4-11-designer-save-native-response-and-state.png` (viewed): the toast at the top right; toolbar Save greyed; Undo greyed; footer `ScopeType: User`.
- Post-Save state (find): Save `[disabled]`; Undo `[disabled]`; Regenerate Form `[disabled]`; no dialog; FX_Orders selected.

### Close (once) and reopen (once)

- Close: the Form-tab control `closable FX_Orders` clicked **once**. **No prompt** (no save prompt, no alert). The FX_Orders tab disappeared; no dialog (`t4-12-designer-after-close-once-no-prompt.png`, viewed: empty canvas, footer `ScopeType: User`).
- Reopen: Form menu (one click) → recent-forms entry `FX_Orders` (one click). No Select Form, no direct URL.
- Reopened identity (`t4-13-reopened-FX_Orders-identity-user-clean.png`, viewed): tab `FX_Orders` selected and closable; Properties `Name` `FX_Orders`; Device Type `Default`; Form Type `Normal`; Is Master `True`; footer `ScopeType: User`; Save and Undo **disabled**; no dialog.

### Reopened readback of both components (after the one Save and the one close/reopen)

The Details panel was re-expanded and the Components tab reopened (view only). Pane (01) and Pane (00) were expanded (view only). Each component was selected once (view only).

| Field | FX_CustomerIDCombobox (after reopen) | FX_CustomerIDGridCol (after reopen) | Matches the after-assignment value? |
| --- | --- | --- | --- |
| Components row | `FX_CustomerIDCombobox ComboBox object.FX_CustomerID 1 14 FX_CustomerID` (Component Class column `FX_CustomerID`) | `FX_CustomerIDGridCol GridColumn object.FX_CustomerID 0 FormCollectionGrid 2 FX_CustomerID` | yes (Component Class column now populated) |
| Component Class | `FX_CustomerID` | `FX_CustomerID` | yes |
| Component Class Parameters | `FX_CusName,FX_CusAddress` | `FX_CusName,FX_CusAddress` | yes |
| Set Class From | `This Component's Attribute` | `This Component's Attribute` | yes (unchanged) |
| View Attributes Inherited From Property | `FX_CustomerID` | `FX_CustomerID` | yes (unchanged) |
| Edit Property Class Extension For Property Class | `FX_CustomerID` | `FX_CustomerID` | yes (unchanged) |
| Binding | `object.FX_CustomerID` | `object.FX_CustomerID` | yes (unchanged) |
| List Source | blank | blank | yes (unchanged) |
| Validators | blank | blank | yes (unchanged) |
| Validate Immediately | False | False | yes (unchanged) |

- Screenshots: `t4-14-reopened-components-tab-state.png` (Details panel, Panes collapsed after reopen); `t4-15-reopened-components-pane01-expanded.png` (Pane (00) and Pane (01) expanded; the Components grid rows as read); `t4-16-reopened-FX_CustomerIDGridCol-inheritance-after-save-reopen.png` (viewed: GridCol Component Class `FX_CustomerID` in the Inheritance block and in the grid row); `t4-17-reopened-FX_CustomerIDCombobox-inheritance-after-save-reopen.png` (viewed: combobox Component Class `FX_CustomerID` in the Inheritance block and in the grid row's Component Class column).
- Limit: the Parameters value is clipped in the frames; the full text is from the accessibility readback.

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-2 | **SUPPORTED (observed; same session).** Component Class `FX_CustomerID` and Parameters `FX_CusName,FX_CusAddress` set and Tab-committed on both components; resulting changes recorded (none beyond the two properties); exactly one Designer Save with its native response; after one Designer close/reopen both components show the assignment. | `t4-02`, `t4-03` (before, combobox); `t4-05`–`t4-07` (combobox after); `t4-08` (before, GridCol); `t4-09`, `t4-10` (GridCol after); `t4-11` (Save response); `t4-12` (close, no prompt); `t4-13` (reopen identity); `t4-16`, `t4-17` (reopened readbacks) | Same session only. No second Save, so the reopen is a weak persistence boundary (EXP-086 and EXP-087 precedent). The Component Class list option for each component is evidenced by accessibility (`t4-04` shows the list top only). |
| AC-1 (T4 part) | Gate re-confirmed at T4 start: User scope, clean, no dialog; both components blank before assignment. | `t4-00`, `t4-01`, `t4-03`, `t4-08` | — |
| AC-3, AC-4, AC-5 | **NOT RUN** in T4 (the runtime check and discard are the later task). | — | — |

### Action audit (T4; exact counts; this task only)

Browser calls: **81** (corrected in T5 to the controller audit `harness-audit-T4.md`: 30 actions + 51 reads; the first worker count of 80 omitted one find). Categories:

| Category | Count | Notes |
| --- | --- | --- |
| Tab lists | 1 | Before the first selection. |
| Tab selects | 1 | Tab 0 (Designer). Tab 1 was not selected in T4. |
| Untargeted snapshots | 1 | `t4-00`. |
| Screenshots | 17 | `t4-01` to `t4-17`. |
| Finds (read-only) | 32 | Corrected from 31 (controller audit). Includes a few that returned broad lists (the component-class option list) or "no match" from rendering state. |
| Ref clicks | 16 | Components-row selections ×4 (combobox and GridCol before the assignments; combobox and GridCol again after the reopen); Component Class dropdowns ×2; Component Class options ×2; Parameters value cells ×2; Save ×1; Form-tab close ×1; Form menu ×1; recent-forms FX_Orders ×1; Details Expand Panel ×1; Components tab ×1. |
| Coordinate clicks (chevrons, view only) | 3 | Pane (01), Pane (00), FormCollectionGrid expansions after the reopen. |
| Mouse moves | 2 | Before each Properties-panel wheel (view). |
| Mouse wheel | 2 | Properties panel (view). |
| Key presses | 4 | Tab ×4 (one commit after each Component Class pick and each Parameters entry). |
| Typed text | 2 | `FX_CusName,FX_CusAddress` ×2 (inline Parameters editor only; no runtime field). |

Note on the counts: the browser calls are reconstructed from the call sequence (no tool counter in this session); the Designer-side categories were checked against each step's result. If the harness controller counts differ, its count is authoritative.

**Mongoose mutations and lifecycle (T4), exact:**
- **Component Class assignments: 2** (FX_CustomerIDCombobox; FX_CustomerIDGridCol). **Component Class Parameters entries: 2.**
- Other component property changes: **0** (Binding, View Attributes, Edit Property Class Extension, List Source, Validators, Validate Immediately unchanged).
- Validator, class, property class extension and property class changes: **0**. No validator or class dialog opened in T4.
- **Designer Save: 1** (native toolbar Save; response verbatim above). Retries: 0.
- **Designer close: 1; reopen: 1** (both through the Designer Form-tab control and the Form menu recent-forms entry). Prompts seen on close: **0** (no save prompt; no discard prompt).
- Designer unloads: **0**. Regenerate Form and Delete clicks: **0**. Error alerts: **0**.
- Runtime FX_Orders actions in T4: **0** (not touched; still open, clean, on order 2). Runtime Saves: **0**. Save prompts answered: **0** (none appeared; none to answer).
- Checkout actions: **0**. FormSync, deployment: **0**. Browser JavaScript, console or network inspection: **0**.
- Re-logins: **0 in T4** (cumulative **1**, from T1). Session-expiry procedure: not invoked in T4.

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls | 47 | 12 | 121 | 81 | **261** (superseded by the T5 cumulative of 315) |
| Tab lists | 1 | 1 | 1 | 1 | **4** |
| Tab selects | 2 | 1 | 3 | 1 | **7** |
| Untargeted snapshots | 7 | 1 | 2 | 1 | **11** |
| Screenshots | 5 | 3 | 22 | 17 | **47** |
| Finds | 17 | 4 | 47 | 32 | **100** |
| Ref clicks | 10 | 2 | 23 | 16 | **51** |
| Coordinate clicks | 0 | 0 | 8 | 3 | **11** |
| Mouse moves | 0 | 0 | 4 | 2 | **6** |
| Mouse wheel | 1 | 0 | 4 | 2 | **7** |
| Navigations | 1 | 0 | 0 | 0 | **1** |
| Key presses | 0 | 0 | 5 | 4 | **9** |
| Typed text | 3 | 0 | 2 | 2 | **7** |
| Component Class assignments | 0 of 2 | 0 of 2 | 0 of 2 | **2 of 2** | **2 of 2** |
| Parameter entries | 0 of 2 | 0 of 2 | 0 of 2 | **2 of 2** | **2 of 2** |
| Designer Save | 0 of 1 | 0 of 1 | 0 of 1 | **1 of 1** | **1 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 (a lifecycle open via recent-forms, not a close) | **1 / 1** | **1 / 1 of 1** |
| Runtime opens / closes / F4 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 0 / 1 | 0 / 0 / 0 | **1 / 0 / 1** |
| Drop-down choices | 0 | 0 | 0 | 0 | **0** |
| Runtime Saves; save prompts answered No | 0; 0 | 0; 0 | 0; 0 | 0; 0 | **0; 0** |
| Error alerts answered OK | 2 | 1 | 0 | 0 | **3** |
| Re-logins | 1 | 0 | 0 | 0 | **1** |
| Unloads | 0 | 0 | 0 | 0 | **0** |
| Other component / validator / class changes | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | **0** |

### Worker-written file inventory (T4)

- `experiments/EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md` (edited in T4: status header and this section).
- `evidence/EXP-089/t4-00-designer-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-089/t4-01-designer-start-fx-orders-user-clean.png`
- `evidence/EXP-089/t4-02-FX_CustomerIDCombobox-selected-before-assignment.png`
- `evidence/EXP-089/t4-03-FX_CustomerIDCombobox-inheritance-BEFORE-assignment.png`
- `evidence/EXP-089/t4-04-FX_CustomerIDCombobox-component-class-list-open.png`
- `evidence/EXP-089/t4-05-FX_CustomerIDCombobox-component-class-after-tab.png`
- `evidence/EXP-089/t4-06-FX_CustomerIDCombobox-parameters-cell-clicked.png`
- `evidence/EXP-089/t4-07-FX_CustomerIDCombobox-parameters-after-tab-committed.png`
- `evidence/EXP-089/t4-08-FX_CustomerIDGridCol-inheritance-BEFORE-assignment.png`
- `evidence/EXP-089/t4-09-FX_CustomerIDGridCol-component-class-after-tab.png`
- `evidence/EXP-089/t4-10-FX_CustomerIDGridCol-parameters-after-tab-committed.png`
- `evidence/EXP-089/t4-11-designer-save-native-response-and-state.png`
- `evidence/EXP-089/t4-12-designer-after-close-once-no-prompt.png`
- `evidence/EXP-089/t4-13-reopened-FX_Orders-identity-user-clean.png`
- `evidence/EXP-089/t4-14-reopened-components-tab-state.png`
- `evidence/EXP-089/t4-15-reopened-components-pane01-expanded.png`
- `evidence/EXP-089/t4-16-reopened-FX_CustomerIDGridCol-inheritance-after-save-reopen.png`
- `evidence/EXP-089/t4-17-reopened-FX_CustomerIDCombobox-inheritance-after-save-reopen.png`

T4 total: **19** repository files (the record edited, plus 18 evidence files: 1 snapshot and 17 PNG). Cumulative worker-written files for EXP-089 (T1 to T4): **59** (the record once, plus 58 evidence files: 12 from T1, 4 from T2, 24 from T3, 18 from T4). The browser tool's own `evidence/playwright/` snapshot and console files are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Decisive screenshots (T4; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t4-03` | FX_CustomerIDCombobox Properties: Binding `object.FX_Custome…`; Inheritance Component Class blank; Set Class From; View Attributes and Edit Property Class `FX_CustomerID`. | The combobox state before the Component Class pick. | Parameters row (below frame; accessibility only). |
| `t4-05` | FX_CustomerIDCombobox after the Tab: Component Class `FX_CustomerID`; Validators blank; List Source blank; Validate Immediately False; Save and Undo enabled. | The committed Component Class; no other visible value change. | The Parameters value (not yet entered). |
| `t4-07` | FX_CustomerIDCombobox after the Parameters Tab: Component Class `FX_CustomerID`; Parameters `FX_CusName,FX_…` (clipped); Validators blank. | The Parameters entry committed (the frame clips the text). | The full text (accessibility shows `FX_CusName,FX_CusAddress`). |
| `t4-08` | FX_CustomerIDGridCol Properties before assignment: Component Class blank; View Attributes and Edit Property Class `FX_CustomerID`; List Source and Validators blank. | The GridCol state before assignment. | Parameters row (accessibility only). |
| `t4-09` / `t4-10` | GridCol after its Component Class and Parameters: Component Class `FX_CustomerID`; Parameters `FX_CusName,FX_…` (clipped); other values unchanged. | The GridCol commits. | The full Parameters text (accessibility). |
| `t4-11` | Toast `Save` / `Form [FX_Orders] and global object(s) were saved.`; toolbar Save and Undo greyed; footer User. | The native Save response, verbatim, and the clean state. | Database persistence (a UI acknowledgement only). |
| `t4-12` | Empty Designer canvas after the close; no FX_Orders tab; no dialog; footer User. | The close completed with no prompt. | The stored definition. |
| `t4-13` | FX_Orders reopened: Name `FX_Orders`, Normal, Is Master True; footer User; Save and Undo greyed. | The reopened identity, scope and clean state. | The component values (see `t4-16`, `t4-17`). |
| `t4-16` | Reopened GridCol Inheritance: Component Class `FX_CustomerID`; View Attributes and Edit Property Class `FX_CustomerID`; grid row Component Class column `FX_CustomerID`. | The GridCol assignment after the close/reopen. | The Parameters text (clipped). |
| `t4-17` | Reopened combobox Inheritance: Component Class `FX_CustomerID`; grid row Component Class column `FX_CustomerID`. | The combobox assignment after the close/reopen. | The Parameters text (clipped; accessibility shows it). |

### Final state (T4)

- **Designer (tab 0):** FX_Orders open (reopened); `ScopeType: User`; clean (Save, Regenerate Form and Undo disabled); no dialog; no menu; Details panel expanded on the Components tab with FX_CustomerIDCombobox selected. **Both components show Component Class `FX_CustomerID` and Parameters `FX_CusName,FX_CusAddress`; no other property changed.** The Save was not repeated.
- **Web Client (tab 1):** runtime FX_Orders still open, clean, Filter in Place, on order 2 (from T3). Not touched in T4. Its close/reopen belongs to the next (runtime-check) task.
- Tab list at the end: tab 0 Designer (current), tab 1 Mongoose. Both preserved.

### Next permitted action (for the coordinator)

1. Authorize the runtime-check task (EXP-089): close the clean runtime FX_Orders once; reopen it once (blank-criteria F4 once); select order 1; open the Customer ID drop-down once and record it; choose FX002 once; record Name and Address without any Save; then discard with one No to the save prompt, and reopen to verify both orders. The Designer changes are saved and do not need the discard.
2. The cache contingency applies only if neither Name nor Address changes after choosing FX002.

Classification for all T4 findings: **observed only, NOT replay_verified.**

---

## T5 — runtime propagation check with one FX002 choice, one discard with "No", reopen verification; cache contingency not triggered (cycle 5)

- Task T5, cycle 5, run `R-20261014-200230-uc2F`, task_message_id `e6817864-be20-4b31-abc3-cb32119b206a`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14.
- Scope (bounded T5 instruction): tab list; confirm the runtime FX_Orders is open, clean, on order 2; close it once clean; reopen through Form > Open > Select Form; Filter in Place if needed; blank-criteria F4 once; order 1 check; open the Customer ID drop-down once and record it; choose FX002 once; record the detail view and the order 1 grid row before any Save; close once; answer the save prompt once (No), recording its text; reopen with F4 once; verify both orders; close clean at the end. No Designer change, no Designer Save, no runtime Save, no typing into runtime fields, no unload unless the contingency condition held.
- Sources: the T3 and T4 checkpoints and their evidence (`t3-20` to `t3-22` for the baseline layout; `t4-16`, `t4-17` for the saved Designer). No other source was read.

### Tab list and runtime gate (before any action)

- Tab list (first call; before any selection): tab 0 = Designer (`MGForm=FX_Orders`; the Designer FX_Orders from T4, clean); tab 1 = `Mongoose` (Web Client; runtime FX_Orders open).
- Tab 1 selected (succeeded). Fresh snapshot `t5-00-webclient-fresh-snapshot-start.yml`: no `Session Expired`, no sign-in, no alert.
- Runtime gate (`t5-01-runtime-start-state-before-close.png`, viewed): FX_Orders tab open, the runtime Save button `[disabled]`, no dialog, Order 2 of 2 (`Object 2 of 2`), order 2 values visible (FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99). **Gate passed: clean, on order 2, no dialog.**

### Runtime close (clean), reopen and baseline

- Close: the runtime tab close control (`Close Panel FX_Orders`) clicked **once**. No prompt (the Form was clean). Screenshot `t5-02-runtime-after-first-close-clean.png` (viewed): the Explorer only.
- Reopen: Form menu (one click) > Open (one click) > Select Form dialog. The picker showed the filter `FX_Orders` already set, and one row `FX_Orders` / `FX_Orders` highlighted (`t5-03-select-form-picker-FX_Orders-before-ok.png`, viewed). OK clicked **once**. No retyping of the filter.
- Mode on open: add-mode placeholder (`Order Number` placeholder `3`; status `Order Number (Object 1 of 1)`; `t5-04`). One Filter in Place click (one). Criteria blank (`t5-05`, viewed).
- F4 (**one**). Two rows. Order 1 detail (`t5-06-runtime-baseline-after-F4-order1-pre-change.png`, viewed): Order Number `1`; Customer ID `FX001` (combobox focused, text selected; not typed into); Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00`; status `Customer ID (Object 1 of 2)`. Grid rows (accessibility): row 1 `1 | FX001 | Factory test one | 1 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00`; row 2 `2 | FX002 | Factory test two | 2 Factory Street | eggs | cage free | 6.99 | 1 | 6.99`.
- **Result: the baseline matches the brief for order 1 (the full set), as recorded.** Order 2 was not re-read at this stage (the brief asks for order 1 pre-change); order 2 is verified after the discard below.

### Customer ID drop-down (opened once; nothing chosen before the list was recorded)

- The drop-down was opened by one click on the combobox's down-caret, at (876, 218) in the screenshot (a coordinate click: the caret has no accessibility ref). **The "Open" button beside the combobox was not clicked** (it is the Details drill-down; out of scope).
- Visible columns and rows (accessibility and `t5-07-customer-id-dropdown-open-columns-rows.png`, viewed): two columns, **Customer ID** and **Customer Name**. Rows: `FX001` / `Factory test one` (selected; highlighted at open) and `FX002` / `Factory test two`. Address is not a column (consistent with the list source's displayed columns 1 and 2).

### FX002 choice (once) and the immediate result before any Save

- FX002 option (`FX002` / `Factory test two`) clicked **once** from the list. No typing.
- Result, before any Save (`t5-08-detail-view-after-FX002-chosen-before-any-save.png`, viewed):
  - Detail view: Customer ID `FX002`; **Customer Name `Factory test two`**; **Address `2 Factory Street`**; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00` (unchanged; the Order Total is not recalculated by this change, and the brief does not ask for it); status `Customer ID (Object 1 of 2)`.
  - Order 1 grid row (accessibility): `1 | FX002 | Factory test two | 2 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00`. The Save icon was enabled and an orange change marker appeared on row 1.
- **Expected result met: Customer Name changed to `Factory test two` and Address to `2 Factory Street` immediately, before any Save, in both the detail view and the grid row.** Both fields changed, so the cache contingency condition did not apply.

### Discard: close (once), prompt text, answer No (once)

- The dirty runtime was closed by its tab close control (`Close Panel FX_Orders`) clicked **once**. The save prompt appeared.
- **Exact prompt text** (`t5-09-save-prompt-before-answering.png`, viewed; title `Infor Mongoose Application Development Framework - FX_Orders`): `Do you want to save your changes to primary collection?` Buttons: `Yes` (default focus), `No`, `Cancel`.
- Answered **No** once (clicked; Enter was not pressed). Screenshot `t5-10-runtime-after-No-closed-discard.png` (viewed): the runtime closed; the Explorer only; no dialog.
- **Yes was not pressed. Cancel was not pressed. No runtime Save was pressed.**

### Reopen after the discard, blank criteria, F4 (once), both orders verified by row-number navigation

- Reopen: Form menu (one click) > Open (one click) > Select Form (filter `FX_Orders` already set; one row highlighted; `OK` clicked once). Add-mode placeholder again (`t5-11`, viewed). Filter in Place (one click). F4 (**one**).
- Order 1 (`t5-12-reopened-after-discard-order1-after-F4.png`, viewed): Customer ID `FX001`; Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00`; status `Customer ID (Object 1 of 2)`. Grid row 1 (accessibility): `1 | FX001 | Factory test one | 1 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00`. **Matches the expected values.**
- Order 2 (row-number cell clicked once; `t5-13-reopened-after-discard-order2-detail.png`, viewed): Order Number `2`; Customer ID `FX002`; Customer Name `Factory test two`; Address `2 Factory Street`; Item `eggs`; Item Description `cage free`; Cost `6.99`; Count `1`; Order Total `6.99`; status `Order Number (Object 2 of 2)`. Grid row 2 (accessibility): `2 | FX002 | Factory test two | 2 Factory Street | eggs | cage free | 6.99 | 1 | 6.99`. **Matches the expected values.**
- Save was disabled throughout the reopened session; no dialog.

### Final runtime close (clean)

- The runtime Form was closed once by its tab close control. Save was disabled before the close (checked). **No prompt appeared.** Screenshot `t5-14-runtime-final-clean-close.png` (viewed): the Explorer only; no dialog. The runtime is left closed.

### Contingency decision

- **Not invoked.** The condition was "only if after choosing FX002 neither Customer Name nor Address changed". Both changed at the first choice, so the Web Client Unload All Global Form Objects was **not** used (count 0). No Designer unload was used.

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-3 | **SUPPORTED (observed; same session).** After one runtime close and reopen (blank criteria, F4 once), choosing FX002 from the Customer ID drop-down on order 1 changed Customer Name to `Factory test two` and Address to `2 Factory Street` before any Save; drop-down columns recorded; contingency not used (condition not met). | `t5-07` (drop-down columns and rows); `t5-08` (detail view after the choice); order 1 grid row (accessibility, recorded above) | Same session only. The grid row values are from accessibility (the grid row is partly off-frame in the picture). |
| AC-4 | **SUPPORTED (observed; same session).** The change was discarded with one close and one "No" to the prompt (exact text recorded). After reopening, order 1 read FX001 / Factory test one / 1 Factory Street / dumbbell / 2 / 90.00 and order 2 read FX002 / Factory test two / 2 Factory Street / eggs / 1 / 6.99. No runtime Save. The runtime closed clean at the end. | `t5-09` (prompt before answering); `t5-10` (after No); `t5-12` (order 1 reopened); `t5-13` (order 2 reopened); `t5-14` (final clean close) | Same session only. The reopened values show the unsaved change was not kept in the runtime; they do not show database-level durability. |
| AC-1 (runtime part) | Runtime baseline re-confirmed before the change: order 1 as expected (`t5-06`); order 2 expected values from T3 and after the discard (`t5-13`). | `t5-01`, `t5-06` | — |
| AC-2 | Not re-run in T5 (the Designer assignments were done in T4). | — | — |
| AC-5 | Partial: the T5 audit, inventory and final state are recorded below; the full report is consolidated after T5. | Sections above and below | — |

### Observed findings (T5)

1. The Customer ID change propagated to Customer Name and Address on the first FX002 choice, in the detail view and in the order 1 grid row, before any Save.
2. The drop-down shows two columns (Customer ID, Customer Name) and two rows in this session; Address is not a displayed column.
3. The save prompt text is `Do you want to save your changes to primary collection?` with Yes (default), No and Cancel.
4. After "No" and a reopen, both orders reverted to their pre-change values.
5. The Order Total did not change when the Customer changed (Count 2 and Cost 45.00 are unchanged; the Order Total is a derived value not affected by Customer ID). Observed only.
6. The Form reopens in add-mode placeholder state each time and needs one Filter in Place switch (same as EXP-083 and EXP-086).

### Action audit (T5; exact counts; this task only)

Browser calls: **54** (reconstructed from the call sequence; the harness controller audit for T5 was not yet generated when this section was written):

| Category | Count | Notes |
| --- | --- | --- |
| Tab lists | 1 | Before the first selection. |
| Tab selects | 1 | Tab 1 (Web Client). Tab 0 not selected. |
| Untargeted snapshots | 1 | `t5-00`. |
| Screenshots | 14 | `t5-01` to `t5-14`. |
| Finds (read-only) | 20 | Including those that reported menu or dialog state and the drop-down option list. |
| Ref clicks | 14 | Runtime close ×3 (clean, dirty, final); Form menu ×2; Form > Open ×2; Select Form OK ×2; Filter in Place ×2; FX002 option ×1; No ×1; order 2 row-number cell ×1. |
| Coordinate clicks | 1 | The Customer ID drop-down caret at (876, 218). |
| Key presses | 2 | F4 ×2 (one per query). |
| Typed text | 0 | None. |
| Mouse wheel / moves | 0 / 0 | None. |

Count check: 1 + 1 + 1 + 14 + 20 + 14 + 1 + 2 = 54.

**Runtime and discard counts (T5), exact:**
- Runtime closes: **3** (first clean close; the dirty close that produced the prompt; the final clean close). Runtime opens (Form > Open > Select Form): **2** (the first reopen before the change; the reopen after the discard). Filter in Place switches: **2**.
- F4 presses: **2** (one per query; one blank-criteria query in each open).
- Customer ID drop-down opened: **1**. FX002 choices: **1** (never typed).
- Save prompts answered **No: 1**. Save prompts answered Yes: **0**. Cancel answers: **0**.
- Runtime Saves: **0**. Runtime typed fields: **0**. New, Delete, Add, Details or Find at runtime: **0**.
- Cache contingency: **not invoked** (unloads 0). Designer unload: **0**.
- Designer actions: **none** (the Designer tab was not selected or acted on in T5).

**Mongoose mutations and lifecycle (T5), exact:**
- Component Class assignments: 0 in T5 (cumulative 2 of 2, from T4). Parameter entries: 0 in T5 (cumulative 2 of 2).
- Designer Save: 0 in T5 (cumulative 1 of 1). Designer close/reopen: 0 in T5 (cumulative 1 / 1).
- Other component, validator, class, property class extension or property class changes: **0**.
- Checkout actions: **0**. FormSync, deployment: **0**. Browser JavaScript, console or network inspection: **0**.
- Re-logins: **0 in T5** (cumulative **1**, from T1). Session-expiry procedure: not invoked in T5.

### Cumulative browser action audit (T1 to T5)

| Item | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls (worker count; T4 corrected to the controller's 81) | 47 | 12 | 121 | 81 (corrected from 80) | 54 | **315** |
| Browser calls (controller count, where available) | 47 (17 actions + 30 reads) | 12 (3 + 9) | 121 (49 + 72) | **81** (30 + 51) | not yet audited | 261 for T1–T4 (controller) |
| Component Class assignments | 0 | 0 | 0 | 2 | 0 | **2 of 2** |
| Parameter entries | 0 | 0 | 0 | 2 | 0 | **2 of 2** |
| Designer Save | 0 | 0 | 0 | 1 | 0 | **1 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 0 / 0 (a recent-forms open) | 1 / 1 | 0 / 0 | **1 / 1** |
| Runtime opens / closes / F4 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 0 / 1 | 0 / 0 / 0 | 2 / 3 / 2 | **3 / 3 / 3** |
| Drop-down opened / FX002 choices | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Save prompts answered No / Yes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 0 | **1 / 0** |
| Runtime Saves | 0 | 0 | 0 | 0 | 0 | **0** |
| Unloads (Web Client / Designer) | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Other component or class changes | 0 | 0 | 0 | 0 | 0 | **0** |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins (session-expiry procedure) | 1 | 0 | 0 | 0 | 0 | **1** |
| Error alerts answered OK | 2 | 1 | 0 | 0 | 0 | **3** |

Cumulative browser calls (T1–T5): 47 + 12 + 121 + 81 + 54 = **315**, using the controller-verified 81 for T4 in place of the worker's earlier 80. The T5 count of 54 is the worker's count and is not yet controller-verified.

### T4 reconciliation (controller audit vs worker count)

- Controller audit `evidence/EXP-089/harness-audit-T4.md` (generated, not worker prose): **30 actions, 51 reads**; prohibited-tool hits 2 (both `browser_type`, i.e. the two inline Parameters entries); errors 0; "turns=80"; exact mismatches 0.
- Reconciled against the controller's own table (rows 1–101): the 30 actions are the 16 ref clicks, 3 coordinate clicks, 2 typed entries, 4 Tab presses, 2 mouse moves, 2 wheel moves and 1 tab select; the 51 reads are the 32 finds, 17 screenshots, 1 snapshot and 1 tab list. That is **81 browser calls**. The 16 `Read` and 4 `Edit` rows in the table are not browser calls.
- The worker's T4 section reported 80 browser calls with 31 finds. The controller table has 32 finds. **The worker undercounted by one find; the corrected T4 count is 81** (30 actions + 51 reads).
- Unresolved: the controller's "turns=80" is a different measure. Its definition is not in the audit file, and it does not equal 81 or 101. The worker did not guess its meaning.
- The controller summaries for T1–T3 match the worker counts (47, 12, 121). The controller's T1 summary also shows **errors=1**, whereas the worker's T1 section recorded 0 browser errors. This discrepancy is unresolved (the audit does not say which call errored); the T1 worker section is not edited here.

### Worker-written file inventory (T5)

- `experiments/EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md` (edited in T5: status header and this section).
- `evidence/EXP-089/t5-00-webclient-fresh-snapshot-start.yml` (snapshot; tool-written at the worker's filename request).
- `evidence/EXP-089/t5-01-runtime-start-state-before-close.png`
- `evidence/EXP-089/t5-02-runtime-after-first-close-clean.png`
- `evidence/EXP-089/t5-03-select-form-picker-FX_Orders-before-ok.png`
- `evidence/EXP-089/t5-04-runtime-reopened-add-mode-before-fip.png`
- `evidence/EXP-089/t5-05-runtime-filter-in-place-blank-criteria-before-F4.png`
- `evidence/EXP-089/t5-06-runtime-baseline-after-F4-order1-pre-change.png`
- `evidence/EXP-089/t5-07-customer-id-dropdown-open-columns-rows.png`
- `evidence/EXP-089/t5-08-detail-view-after-FX002-chosen-before-any-save.png`
- `evidence/EXP-089/t5-09-save-prompt-before-answering.png`
- `evidence/EXP-089/t5-10-runtime-after-No-closed-discard.png`
- `evidence/EXP-089/t5-11-reopened-add-mode-after-discard.png`
- `evidence/EXP-089/t5-12-reopened-after-discard-order1-after-F4.png`
- `evidence/EXP-089/t5-13-reopened-after-discard-order2-detail.png`
- `evidence/EXP-089/t5-14-runtime-final-clean-close.png`

T5 total: **16** repository files (the record edited, plus 15 evidence files: 1 snapshot and 14 PNG). Cumulative worker-written files for EXP-089 (T1 to T5): **74** (the record once, plus 73 evidence files: 12 from T1, 4 from T2, 24 from T3, 18 from T4, 15 from T5). Controller-generated files `evidence/EXP-089/harness-audit-T1.md` to `harness-audit-T4.md` were written by the harness, not by the worker, and are excluded from the worker inventory. The browser tool's own `evidence/playwright/` snapshot and console files are also excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

### Decisive screenshots (T5; each viewed before citing)

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t5-01` | Runtime FX_Orders on order 2 (`Object 2 of 2`); runtime Save disabled; no dialog. | The clean, order-2 start state before the close. | The Designer state. |
| `t5-06` | Runtime order 1 after one FiP and one F4: FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00; Customer ID combobox focused, text selected (not typed). | The pre-change order 1 values. | Order 2 at this step. |
| `t5-07` | Customer ID drop-down open: columns Customer ID and Customer Name; rows FX001 (selected) and FX002 / Factory test two. | The drop-down columns and rows before the choice. | Address (not a column); the choice itself. |
| `t5-08` | Detail after FX002: Customer ID FX002; Customer Name `Factory test two`; Address `2 Factory Street`; item and count unchanged; Order Total 90.00; status `Customer ID (Object 1 of 2)`; runtime dirty (Save icon enabled, orange marker on row 1). | The propagation in the detail view, before any Save. | The grid row in full (read by accessibility; row 1 is off-frame in the image). |
| `t5-09` | Save prompt, exact text `Do you want to save your changes to primary collection?`, Yes (focused), No, Cancel. | The prompt text, before answering. | Its internal effect. |
| `t5-10` | Runtime closed; Explorer only; no dialog after No. | The discard close completed. | The reopened values (see `t5-12`, `t5-13`). |
| `t5-12` | Reopened order 1 after F4: FX001 / Factory test one / 1 Factory Street / dumbbell / 2 / 90.00; status `Customer ID (Object 1 of 2)`. | Order 1 unchanged after the discard. | Order 2 (see `t5-13`). |
| `t5-13` | Reopened order 2 by its row-number cell: FX002 / Factory test two / 2 Factory Street / eggs / cage free / 1 / 6.99; status `Order Number (Object 2 of 2)`. | Order 2 unchanged after the discard. | Order 1. |
| `t5-14` | Runtime closed clean at the end; Explorer only; no dialog. | The final clean close. | Any later state. |

### Final state (T5)

- **Runtime (tab 1, Web Client):** FX_Orders closed clean (no runtime Form open). The Web Client shows the Explorer. No dialog, no unsaved change, no prompt open.
- **Designer (tab 0):** FX_Orders open (from the T4 reopen), `ScopeType: User`, clean. Not acted on in T5. The Designer assignments (Component Class `FX_CustomerID`, Parameters `FX_CusName,FX_CusAddress`) remain saved (T4).
- Tab list at the end: tab 0 Designer; tab 1 Web Client (the Explorer). Both tabs preserved.

### Next permitted action (for the coordinator)

1. Review the T5 evidence and the controller reconciliation: the T4 count is 81 (not the worker's 80); the cumulative worker count is 315 (controller-verified T1–T4: 261).
2. Resolve the controller's T1 "errors=1" against the T1 worker record (0 errors), and the meaning of the controller's "turns" figures (T1 62, T2 12, T3 142, T4 80), which the audit does not define.
3. The EXP-089 experiment's acceptance review (AC-1 to AC-5) and its final report are for the coordinator; no further browser action is authorized in T5.

Classification for all T5 findings: **observed only, NOT replay_verified.**

---

## T6 — final documentation and acceptance audit (cycle 6; ZERO browser calls; ZERO Mongoose changes)

- Task T6, cycle 6, run `R-20261014-200230-uc2F`, task_message_id `73e15a3a-7399-40a7-8fec-50e97e28d1a0`, worker session `b7b7dee9-f792-470a-8dea-7d5566ea2068`. Date 2026-10-14.
- Scope: review of this record, the T1–T5 decisive evidence and worker inventories, and the controller audits `harness-audit-T1.md` to `harness-audit-T5.md`. Created `evidence/EXP-089/T6-final-acceptance-report.md`; edited only this record. Reads of evidence PNG files were used for viewing checks (not browser calls).
- Full acceptance report: `evidence/EXP-089/T6-final-acceptance-report.md`. Summary below.

### Acceptance summary

| AC | Status | Principal evidence | Principal limit |
| --- | --- | --- | --- |
| AC-1 | SUPPORTED (observed; same session) | validator `t3-04`; class `t3-09` (Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source identical to EXP-088); pre-assignment components `t3-13`, `t3-23`, `t4-03`, `t4-08`; baseline `t3-21` (order 1), `t3-22` (order 2) | Validator not re-read after the T4 assignments or reopen (EXP-088 post-reopen gap remains open); partial EXP-082 to EXP-088 reads |
| AC-2 | SUPPORTED (observed; same session) | 2 class picks (controller T4 rows 20, 45); 2 parameter entries (rows 30, 52); 1 native Save (row 57; `t4-11`, `Form [FX_Orders] and global object(s) were saved.`); close (row 62; `t4-12`, no prompt); reopen (row 68; `t4-13`); after reopen `t4-16`, `t4-17` | Weak persistence boundary (same session); Parameters clipped in images (accessibility confirms) |
| AC-3 | SUPPORTED (observed; same session) | drop-down columns Customer ID / Customer Name, rows FX001 and FX002 (`t5-07`); one FX002 choice (row 33); detail view `t5-08` (Factory test two / 2 Factory Street) before any Save; contingency 0 | Grid row by accessibility; Address-not-a-column read as consistent with DISPLAY(1,2) (interpretation) |
| AC-4 | SUPPORTED (observed; same session) | prompt text `Do you want to save your changes to primary collection?` (`t5-09`); one No (row 42); reopened order 1 `t5-12`, order 2 `t5-13` unchanged; runtime Saves 0; final clean close `t5-14` (no prompt) | Same session; no database-level durability |
| AC-5 | SUPPORTED | this record; T6 report; section 3 and 6 reconciliations; inventory below | Repository confinement supported by worker and harness inventories; operator git review authoritative |

### Reconciliation of browser calls (controller tables)

| Segment | Controller actions | Controller reads | Total | Worker count |
| --- | --- | --- | --- | --- |
| T1 | 17 | 30 | 47 | 47 |
| T2 | 3 | 9 | 12 | 12 |
| T3 | 49 | 72 | 121 | 121 |
| T4 | 30 | 51 | 81 | 81 (corrected from 80; one find had been omitted) |
| T5 | 18 | 36 | 54 | 54 |
| **Cumulative** | **117** | **198** | **315** | 315 |

Browser-tool errors: 0 in every segment. The controller `errors=1` for T1 is a **local Read** (not a browser call) of the record path before the record existed (T1 audit row 3); total tool errors cumulatively 1 (that Read); browser errors 0. The controller `turns` metric is undefined and is not used.

Flagged `browser_type` entries (7; all reviewed): T1 rows 41–42 (sign-in placeholders, permitted by the procedure); T1 row 60 (portal menu search `Mongoose`, portal navigation, a judgment call for the coordinator); T3 rows 117 and 122 (Select Form picker filter `FX_Orders`, permitted; not a runtime record field); T4 rows 30 and 52 (the two parameter entries, permitted). T2 and T5: none.

### Exact cumulative counts

Class assignments **2**; parameter entries **2**; Designer Save **1**; Designer close **1** and reopen **1**; runtime opens **3** (T3 row 126; T5 rows 18, 50); runtime closes **3** (T5 rows 7, 38, 63); F4 presses **3** (T3 row 131; T5 rows 24, 54); Customer ID drop-down opened **1** (T5 row 29, coordinate); FX002 selections **1** (T5 row 33); save prompts answered **No 1**, Yes 0, Cancel 0; runtime Saves **0**; unloads **0** (Web Client 0; Designer 0); other component property changes **0**; validator, class, property-class or property changes **0**; checkout actions **0**; re-logins **1** (T1 navigate row 38; sign-in typing rows 41–42; sign-in click row 43). Error alerts (Mongoose server-event) answered OK **3** (T1 ×2, T2 ×1).

Cumulative action kinds (T1–T5): tab lists 5; tab selects 8; snapshots 12; screenshots 61; finds 120; ref clicks 65; coordinate clicks 12; mouse moves 6; wheel 7; F4 3; Tab presses 4; ArrowRight 2; Control+a 2; typed text 7.

### Counter-check of the file inventory

Before T6: 1 record + 73 evidence files = **74** (T1 12, T2 4, T3 24, T4 18, T5 15). T6 adds `evidence/EXP-089/T6-final-acceptance-report.md`, so the cumulative distinct worker-written total is **75**. The five `harness-audit-T*.md` files are controller-generated and excluded. Tool-generated `evidence/playwright/` files are excluded.

### Viewing corrections (T6)

Five PNG files were described as viewed in their task without an image read in that task. Each was read in T6 and matches the record: `t2-01` (Designer FX_Orders, User, clean); `t4-02` (FX_CustomerIDCombobox selected; Component Class blank); `t5-04` and `t5-11` (add-mode placeholder, Order Number `3`); `t5-14` (runtime closed, Explorer only). In-task viewing coverage: T1 5/5; T2 2/3; T3 22/22; T4 16/17; T5 11/14. All 61 PNG files have now been viewed at least once.

### Judgment calls and open items (not hidden)

1. The T1 portal menu search typed `Mongoose` (portal navigation to open the app). The coordinator should confirm this is acceptable.
2. The EXP-088 post-reopen validator gap remains open (validator not re-read after the T4 assignments or reopen).
3. The cause of the three Mongoose server-event alerts and of the operator's Designer recovery (T2 to T3) is unresolved and not documented in the evidence.
4. The Components grid Component Class column refresh on reopen is observed; its cause is not established.
5. Two T5 statements are interpretations (Address not a column "consistent with DISPLAY(1,2)"; Order Total unaffected by Customer ID). The observed facts are recorded beside them.
6. Out-of-scope observations, recorded only: `FX_ItmsPictureEdit` reads Static (EXP-082 T9: Edit); runtime pictures are displayed (EXP-083 T5: blank). Not investigated.

### Final state (as established by T5; not re-inspected in T6)

Designer tab: FX_Orders open after the T4 reopen; `ScopeType: User`; clean; no dialog; both components show Component Class `FX_CustomerID` and Parameters `FX_CusName,FX_CusAddress`. Web Client tab: runtime FX_Orders closed clean (T5); Explorer shown; no prompt, menu or unsaved runtime change. No fresh inspection was made in T6.

### Recommendation

**ACCEPTED AS OBSERVED.** All five acceptance checks are supported at the observed, same-session level. Conditions: same-session only; the post-reopen validator readback gap (item 2) is recorded as open; the coordinator confirms item 1. Not replay-verified; no cross-session durability; no independent database durability.

Classification for all T6 findings: **observed only, NOT replay_verified.**

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 10 is complete: Customer ID now fills Customer Name and Address immediately on FX_Orders. The operator decided acceptance.

- Run R-20261014-200230-uc2F completed as accepted after 6 worker tasks.
- **Session recovery:**
  1. At T1 start the Web Client tab showed "Logout Successful", so the session had expired.
  2. The Designer tab, loaded before the expiry, returned "The server event processing returned an error. If this persists, contact your system administrator." on each Edit menu click: twice in T1 and once in T2.
  3. T1 re-logged in once through the top-level portal with the placeholders, per the worker-preamble procedure. That refreshed the Web Client only, and the coordinator paused.
  4. The operator chose to reload the Web Designer tab manually. The run resumed with a note to re-inspect and redo the read-only gates without repeating any action.
  - Before the reload, nothing had changed.
- **Gates (T3):**
  - Validator FX_CustomerID read back In Collection with `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` and `mIsNotAValid`. This closes the EXP-088 validator gap.
  - Component class FX_CustomerID read back as in EXP-088.
- Changed, for later cleanup (Form `FX_Orders`, User scope): **FX_CustomerIDCombobox** and **FX_CustomerIDGridCol** now have:
  - Inheritance > Component Class **`FX_CustomerID`**, chosen from the list and Tab-committed;
  - Component Class Parameters **`FX_CusName,FX_CusAddress`**, typed inline and Tab-committed.
  - One Designer Save: "Form [FX_Orders] and global object(s) were saved."
  - The assignment read back after one Designer close/reopen. The component-level List Source and Validators stay blank, and Validate Immediately stays False; these are inherited from the class.
- Screenshots viewed by the operator assistant:
  - `t4-17`: after the reopen, FX_CustomerIDCombobox (EnhancedCombo) shows Component Class `FX_CustomerID` in Inheritance and in the Components grid's Component Class column.
  - `t5-08`: at runtime on order 1, after choosing FX002 from the drop-down and before any Save, Customer Name shows `Factory test two` and Address `2 Factory Street`. The row marker shows unsaved changes; the item and total are unchanged.
  - `t5-09`: the close prompt "Do you want to save your changes to primary collection?" (Yes / No / Cancel), answered **No**.
  - `t5-12`: after reopening and F4, order 1 is FX001 / Factory test one / 1 Factory Street / dumbbell / 90.00. Order 2 is unchanged (`t5-13`).
  - `t5-07` (from the T6 report): the drop-down shows columns Customer ID and Customer Name only, with rows FX001 and FX002. Address is fetched but hidden, consistent with `DISPLAY(1,2)`.
- Flagged `browser_type` calls, all allowed:
  - T1: the two login placeholders and the portal menu search `Mongoose`;
  - T3: the runtime Select Form filter;
  - T4: the two Component Class Parameters entries.
- Counts:
  - class assignments 2, parameter entries 2;
  - Designer Save 1, Designer close/reopen 1;
  - FX002 choices 1, save prompts answered No 1, runtime Saves 0;
  - Web Client unloads 0 (the contingency was not needed);
  - re-logins 1 (T1), Designer Edit errors 3 (pre-reload);
  - other component changes 0, checkout actions 0.
- Findings (observed):
  1. **A component class with forwarded parameters fills the targets immediately.** Choosing a value from the class's drop-down runs the In Collection outputs (`%1`→FX_CusName, `%2`→FX_CusAddress) before Save, with no unload after the Designer Save and a runtime close/reopen.
  2. **Discarding an unsaved runtime change:** close the Form and answer No to "Do you want to save your changes to primary collection?". The reopen shows the stored values.
  3. **A Designer tab loaded before a session expiry stays unusable after a re-login done in another tab,** with a server-event error on Edit. It needs its own reload; the worker procedure does not cover this.
- Limits: same-session UI evidence only. Grid-row values are from accessibility. The grid column was not exercised at runtime.
- Confinement (git status): only `evidence/EXP-089/` and this record were written by the run.
- Next: EXP-090 (Part 5 section 11), the FX_Item In Collection validator: IDO FX_Items, Property FX_Item, `%1` = FX_Description, `%2` = FX_Cost.
