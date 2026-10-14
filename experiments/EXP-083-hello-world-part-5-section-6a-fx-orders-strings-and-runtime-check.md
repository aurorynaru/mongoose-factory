# EXP-083 — Hello World Part 5 Section 6a: create the missing FX_Orders caption strings and check joined and derived values at runtime

**CURRENT STATUS (after T6, 2026-10-14): FINAL DOCUMENTATION AND AUDIT RECONCILIATION COMPLETE (zero browser calls, zero Mongoose changes in T6). Final report: `evidence/EXP-083/T6-final-acceptance-report.md`. All five acceptance checks are supported at the observed, same-session UI level: AC-1 (gates), AC-2 (three strings, prompts, Tab, readbacks), AC-3 (one Save with native `Global object(s) were saved.`; clean close once; recent-forms reopen once; captions resolved; 31 components match the EXP-082 T9 inventory by identity, type, binding and tab), AC-4 (runtime Add mode; one Filter in Place transition; blank criteria; one F4; two rows; nine fields per order as displayed; picture visibly blank; one close, no prompt). **Recommendation: ACCEPTED AS OBSERVED**, with qualifications: the T5 typed Select Form picker filter against the AC-4 "nothing typed" wording (coordinator decision); the component check is at identity level, not property level; the reopen may reflect client-side cache. Cumulative browser calls **173** (28 + 77 + 9 + 27 + 32), reconciled against the five controller audits with no category mismatch. Not replay_verified; no database-durability claim.

**Earlier status (after T5, 2026-10-14): RUNTIME CHECK COMPLETE. ONE RUNTIME OPEN, ONE F4, ONE RUNTIME CLOSE (no prompt). THE BLANK-CRITERIA QUERY RETURNED EXACTLY TWO ORDERS, AND BOTH MATCH THE BRIEF ON EVERY FIELD SHOWN: order 1 = 1 / FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00; order 2 = 2 / FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99. The FX_ItmsPicture field displays BLANK (empty text box, blank label) in both orders. The runtime opened in ADD mode (new-row marker; Order Number placeholder `3`); it was switched once to Filter in Place with the toolbar FiP button; criteria were blank before F4. Nothing was typed into a runtime field, no list value chosen, no New, Save or Delete. Designer: untouched in T5 (FX_Orders still open and clean from T4; not closed, not saved). Counts: runtime open 1; F4 1; runtime close 1; runtime save-prompt answers 0. Classification: **observed only**; same session; UI and accessibility level; NOT database durability; NOT replay_verified. See the T5 section below.

**Earlier status (after T4, 2026-10-14): ONE CLEAN CLOSE AND ONE REOPEN OF FX_Orders COMPLETE; THE REOPENED FORM SHOWS RESOLVED CAPTIONS `Customer Name`, `Item Description` and `Order Total` (canvas), AND THE 31 COMPONENTS MATCH EXP-082 T9 BY NAME, TYPE, BINDING AND TAB. Form identity: FX_Orders, Device Type Default, Form Type Normal, Is Master True, `ScopeType: User`; Save and Undo DISABLED (clean); no dialog. The three Caption references are unchanged (`FX_sCustomerName`, `FX_sItemDescription`, `FX_sOrderTotal`). No Designer Save in T4 (Save count stays 1 of 1). Form left OPEN; Web Client NOT opened; runtime query NOT run. Counts: Designer Save 1 of 1; close 1 (T4); reopen 1 (T4). Classification: **observed only**; same session; UI and accessibility level; NOT database durability; NOT replay_verified. See the T4 section below.

**Earlier status (after T3, 2026-10-14): ONE DESIGNER SAVE INVOKED (once; not retried). NATIVE RESPONSE: a non-modal toast, title `Save`, text `Global object(s) were saved.` (no prompt, no error, no warning). AFTER THE SAVE: Save and Undo DISABLED (clean); FX_Orders still the selected Form tab; footer `ScopeType: User`; no dialog. The canvas still shows the RAW caption IDs (`FX_sCustomerName:`, `FX_sItemDescription:`, `FX_sOrderTotal:`) and did not resolve visually in the immediate post-Save capture. FX_Orders was left OPEN. NOT done in T3 (by instruction): close, reopen, component verification, runtime. Save count 1 of 1; close/reopen 0 of 1; runtime 0. Classification: **observed only**; same session; the toast's wording names "Global object(s)" and does not by itself state that the Form definition was saved; NOT database durability; NOT replay_verified. See the T3 section below.

**Earlier status (after T2, 2026-10-14): THE THREE CAPTION STRINGS ARE CREATED AND READ BACK EXACTLY (Edit > String). Designer DIRTY, kept open, FX_Orders selected, User scope, no dialog. NOT done in T2 (by instruction): the Designer Save, the close and reopen, and the runtime checks.** Counts: strings 3; prompt Yes 3; String dialog OK 3; Tab-committed values 3; Designer Save 0; Caption reference edits 0; component edits 0. Classification: **observed only**; same session; UI and accessibility level; the strings are client-side until the Designer Save; not database durability; not replay_verified. See the T2 section below.

**Earlier status (after T1, 2026-10-14): READ-ONLY PREFLIGHT AND GATES COMPLETE. STOPPED BEFORE THE FIRST CAPTION ELLIPSIS. NO MUTATION MADE.** The Designer is User scope and clean; FX_Orders is open (carried over from EXP-082 T9, not reopened in this task); the three target strings are absent; `FX_sAddress` is present with value `Address` (positive control); the three target Static components carry the raw caption IDs `FX_sCustomerName`, `FX_sItemDescription` and `FX_sOrderTotal`. AC-1 is supported at the observed level (same session). AC-2 to AC-5 are not started. Zero strings created, zero Caption edits, zero Designer Save, zero runtime action. Classification: **observed only**; same session; UI and accessibility level; not database durability; not replay_verified.

## Run identity

- Experiment EXP-083, cycle 0, task **T1** (bounded instruction: read-only preflight and gates; baseline and action audit; stop before the first Caption ellipsis). Run `R-20261014-112529-I6l8`; worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`; task_message_id `11bc033d-e16a-40f6-95e3-d14fd550f535`.
- Date 2026-10-14. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope **User** (Form only). The three string resources are tenant-wide string resources created under the FX_ scope extension.
- Brief commits (session-start git log, not re-verified; no shell in this task): `005ae34` (EXP-083: approved brief), `763dcda` (EXP-083: draft brief).
- Record provenance: this record did not exist at T1 start (the Read of `experiments/EXP-083-…md` returned "does not exist"). Created by the T1 worker at the brief's path.
- Evidence directory: `evidence/EXP-083/`.
- Identity bar: Mongoose configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; the operator account is not recorded here (it is shown in the Designer footer as `ScopeName: <operator account>`).

## Objective (T1 scope)

Read the sources; list tabs; select the Designer; confirm the session and that the Designer is in User scope and clean; prove the three target strings absent and `FX_sAddress` present in Edit > String, then cancel; establish FX_Orders identity, scope and the captions of the three target Static components; leave FX_Orders open and clean; create this record and its evidence. **Stop before the first Caption ellipsis.**

Later tasks (not authorized in T1): the three Caption ellipsis string creations (`FX_sCustomerName`, `FX_sItemDescription`, `FX_sOrderTotal`); the readback; one Designer Save; one Designer close and reopen; the verification of the 31 components; the runtime blank-criteria query with F4 and the per-order readbacks; the runtime close.

## Sources reviewed (before browser interaction)

- `AGENTS.md` (full: LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation, recovery and evidence rules). Note: the `Read` of `AGENTS.md` at the path given in the working-directory context returned the file; the path `C:\AI\mongoose-factory\AGENTS.md` was used.
- `docs/mongoose/transcripts/hello-world-pt5.md` **Section 6** (lines 168–185, 08:15–10:38): the narrated steps (open the rebuilt Orders form in runtime and add an order; observe joined and derived values; Designer picture-component steps; create missing caption strings through a Caption ellipsis prompt; Regenerate Form; Image Only; Save and reopen). Under this experiment only steps 1, 2 and 4 are adapted (steps 3, 5–9 belong to the picture component, EXP-084, and are out of scope). The narrated step 1 "add an order and Save" is **not** performed: the brief uses the two existing orders and forbids any new record. Trust: unverified transcript.
- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (status block; T1 baseline; T8 and T9 component and caption inventories; the T9 reopen). Used for: the 31 FX_Orders components, Static names, the caption readings and the raw IDs, and the Form menu recent-forms route. Cited, not re-derived beyond T1 observations below.
- `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` (status block; T6–T8 readbacks and the Caption ellipsis procedure described in the status block). Used for: the exact prompt `String <ID> does not exist. Create it?`; the rule that the String Value is replaced and committed with Tab before OK; the Edit > String readback with a Strings filter and Cancel; and the rule that Global Objects is closed with Cancel after the readback.
- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md` (status block; T1 string-absence check and the Strings filter behaviour). Used for: Strings filter behaviour (one plain fill plus Tab did not narrow the list; Control+a and slow key-event typing did); the Global Objects Cancel closure; the FX_sAddress = `Address` string created in EXP-076.
- `experiments/EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md` (status block; T7 runtime). Used for: the runtime blank-criteria query pattern (Filter in Place on reopen; one F4 returned two rows, row 1 = 1/FX001/dumbbell/2 and row 2 = 2/FX002/eggs/1); the add-mode placeholder row on reopen.
- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (status block; T1 and T5). Used for: the Label String ID overrides on FX_CusName (`FX_sCustomerName`), FX_ItmsDescription (`FX_sItemDescription`) and FX_DerOrderTotal (`FX_sOrderTotal`) at the IDO level, and the Read Only setting on those three properties; the strings were not created in EXP-081 (no create offer observed there).
- Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git command. The long EXP-072, EXP-076, EXP-078, EXP-081 and EXP-082 records were read in part (status blocks and the sections named above); later sections were not read in full.

## Browser preflight and session (AC-1)

| Step | Observed | Evidence |
|---|---|---|
| `browser_tabs` list (first browser call in the task; before any selection) | Tab 0: Infor Mongoose Application Development Framework, `mode=designer`, current, with `MGForm=FX_Orders` in the URL. Tab 1: Mongoose Web Client, `favoriteContext=IdoProperties` | tool output |
| Tab 0 selected (after the list) | Succeeded. The select and the first untargeted snapshot were issued in one block; the select result was returned first and the snapshot's tab list shows tab 0 as current | `snapshot-t1-01-designer-start.yml` |
| Tab 1 (Web Client) | **Not selected, clicked or captured** in T1. Its state is not part of the T1 gates | — |
| Session | Usable. No "Session Expired" modal, no Infor sign-in page, no `portal-notification` banner and no native dialog at start. Re-login count **0** | `t1-01`; `snapshot-t1-01` |
| Designer clean state | Toolbar Save **disabled**; Undo and Redo disabled; Regenerate Form disabled; no dialog | `t1-01`; `t1-04` (find of Save and Undo) |
| Designer scope | Footer `[ ScopeType: User / ScopeName: <operator account> ]` | `t1-01` |

## Gate: Edit > String (AC-1; strings absent, positive control present)

Route: Edit (one click) → String (one click) → Global Objects dialog. Strings filter typed as: one click on the filter box, Control+a, then `FX_s` typed slowly (one `browser_type`, slow key events). The list then showed exactly these nine strings:

| String (Strings list, filter `FX_s`) | Observed |
|---|---|
| FX_sAddress | present; **selected (one click); Properties: Name `FX_sAddress`, String Value `Address`** (positive control) |
| FX_sCost | present |
| FX_sCount | present |
| FX_sCustomerID | present |
| FX_sDescription | present (not a target; not touched) |
| FX_sImport | present (not a target; not touched) |
| FX_sItem | present |
| FX_sOrderNumber | present |
| FX_sUM | present |
| **FX_sCustomerName** | **absent** |
| **FX_sItemDescription** | **absent** |
| **FX_sOrderTotal** | **absent** |

Result: the three target strings are **absent** from the `FX_s` list, and `FX_sAddress` is **present** with String Value `Address`. The dialog was closed with **Cancel** (not OK). No string was selected for editing, changed or created. Limitation: the Strings list shows only the name column in this view; scope-complete absence across other string namespaces is not shown beyond the `FX_s` prefix.

## Baseline: FX_Orders identity, scope and target captions (AC-1)

### Open state (not reopened in T1)

FX_Orders was **already open** in the Designer at T1 start (the EXP-082 T9 final state: FX_Orders left open, clean and selected). The brief's step "open FX_Orders once through the Form menu recent-forms entry" was **not** repeated in T1, because a second open of an already-open Form had no defined result and the brief's postcondition (FX_Orders open, identity recorded, clean) was already established by observation. This is a disclosed deviation from the literal step, not a silent skip. No close, no reopen and no Form menu open was performed in T1.

### Identity and scope (observed; `t1-01`, `snapshot-t1-01`)

| Field | Observed |
|---|---|
| Form tab | `FX_Orders` (heading) selected; `closable FX_Orders` control; Designer URL `MGForm=FX_Orders` |
| Footer | `ScopeType: User / ScopeName: <operator account>` |
| Save / Undo | Save disabled; Undo disabled (clean) |
| Canvas | Labels in order: `Order Number:*`, `Customer ID:*`, `FX_sCustomerName:` (raw ID), `Address:` (resolved), `Item:*`, `FX_sItemDescription:` (raw ID), `Cost:`, `Count:`, `FX_sOrderTotal:` (raw ID). Order Number textbox shows `3` (add-mode placeholder), Count `1`, Cost `0.00`, FX_sOrderTotal field `0.00` |
| Grid | Grid header shows `* Order Number`, `* Customer ID`, `FX_sCustomerName`, `Address`, `* Item`, `FX_sItemDescription`, `Cost`, `Count`, `FX_sOrderTotal`, plus a blank column. One new-row marker row (`3  0.00  1  0.00`) |
| Components grid | The accessibility tree of the start snapshot lists the 31 rows (grid 1; GridColumns 10; Static 10; detail controls 10) with the same names as EXP-082 T9. FX_CustomerID and FX_Item are ComboBox; FX_ItmsPictureEdit is an Edit bound to `object.FX_ItmsPicture`. Not re-read individually in T1 beyond the start snapshot |

Identity result: **FX_Orders, User scope, clean, open**.

### Captions of the three target Static components (read-only; `t1-04`)

Each Static row was selected once (one click, selection only). The Properties panel header confirmed the selected component before its Caption was read.

| Component (Properties header) | Type | Tab | Caption (raw string ID) |
|---|---|---|---|
| FX_CusNameStatic (Static) | Static | 15 | `FX_sCustomerName` |
| FX_ItmsDescriptionStatic (Static) | Static | 21 | `FX_sItemDescription` |
| FX_DerOrderTotalStatic (Static) | Static | 27 | `FX_sOrderTotal` |

These are the expected raw IDs. No Caption was opened, edited or typed. The Caption ellipsis was **not** opened in T1 (stop point).

For reference, the FX_ItmsPictureEdit Caption reads `C(FX_ItmsPictureStatic)` (the start Properties panel). It is out of scope and was not changed.

## Web Client state (not part of T1 gates)

Tab 1 was listed (`favoriteContext=IdoProperties`) but not selected or captured in T1. The runtime FX_Orders Form has not been opened in this task. Nothing in the Web Client was changed.

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; Designer in User scope and clean; the three strings absent and FX_sAddress present in Edit > String; FX_Orders opened with the three raw caption IDs recorded | **SUPPORTED (observed; UI and accessibility level; same session).** Sources reviewed (above). Session usable. Designer User scope, Save and Undo disabled. Three target strings absent; `FX_sAddress` present with value `Address`. FX_Orders identity, scope and clean state recorded; three raw caption IDs recorded. | `t1-01` (start: Designer, FX_Orders, clean, User scope); `t1-02` (Strings filter `FX_s`, nine rows, three targets absent); `t1-03` (FX_sAddress selected, Name and String Value `Address`); `t1-04` (FX_DerOrderTotalStatic selected, Caption `FX_sOrderTotal`, Save disabled) | FX_Orders was not opened by the recent-forms route in T1 (already open; disclosed). Caption readings for the other two Statics come from the Properties readback (not a screenshot). Scope-complete string absence is not shown (name column only). Same session only. |
| AC-2 to AC-5 | **Not started** (T1 stop point; strings, Save, close/reopen, runtime are later tasks) | — | — |

## Action audit (T1; exact counts; cumulative for EXP-083 T1)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first selection. |
| `browser_tabs` select | **1** | Tab 0 (Designer). Tab 1 never selected. |
| Untargeted snapshots (explicit `browser_snapshot`) | **2** | `snapshot-t1-01-designer-start.yml` (start); `snapshot-t1-03-after-global-objects-cancel.yml` (depth 6, after the Cancel). |
| Targeted snapshots | **1** | `snapshot-t1-02-global-objects-dialog.yml` (target: the Global Objects dialog element). |
| `browser_find` (read-only) | **9** | `String` (1); `Global Objects` (2); `FX_sAddress` (3); component-row locate regex (4); `Caption` (5); `(Static)` (6); `(Static)` or `Caption` (7, after FX_ItmsDescriptionStatic); `(Static)` or `Caption` (8, after FX_DerOrderTotalStatic); Save and Undo (9). |
| Element clicks (successful / failed) | **8 / 0** | (1) Designer Edit menu; (2) Edit > String menu item; (3) Strings filter textbox; (4) FX_sAddress string row (selection only); (5) Global Objects **Cancel**; (6) FX_CusNameStatic row (selection only); (7) FX_ItmsDescriptionStatic row (selection only); (8) FX_DerOrderTotalStatic row (selection only). |
| Coordinate clicks / mouse moves / wheel / hover / drag | **0 / 0 / 0 / 0 / 0** | None. |
| `browser_type` | **1** | `FX_s` into the Strings filter (slow key events; one call). |
| Key presses | **1** | Control+a (before the filter entry). No Tab, Enter or Escape. |
| Waits | **0** | None. |
| Screenshots (worker-requested PNG) | **4** | `t1-01` to `t1-04`. |
| Strings created | **0** | None. |
| String dialogs opened / OK pressed | **0 / 0** | None. |
| Caption ellipsis opened / Yes answers | **0 / 0** | Stop point; not reached. |
| Caption edits / component edits (add, delete, move, change) | **0 / 0** | Selections only. |
| Designer Save | **0** | Save disabled throughout. |
| Form open / Form close / Form reopen (FX_Orders) | **0 / 0 / 0** | FX_Orders already open; not reopened. |
| Designer top-toolbar Delete clicks / Regenerate Form clicks | **0 / 0** | None. |
| Global Objects dialogs answered in-page | **1** | Cancel (not OK). |
| Native browser dialogs | **0** | None appeared. |
| Runtime FX_Orders open / F4 / record typed / record saved | **0 / 0 / 0 / 0** | Web Client not selected or changed. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry procedure / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / run-code / console / network inspection (worker-authored) | **0** | The tool output's `Console: 2 errors, 0 warnings` line was not inspected. |
| Ref-not-found errors / fresh recovery snapshots used / timeouts | **0 / 0 / 0** | No recovery snapshot used. |
| Portal banner dismissals | **0** | None visible. |
| **Total browser calls in T1** | **28** | 2 tab calls + 3 snapshots + 9 finds + 8 clicks + 1 key press + 1 type + 4 screenshots. |

Cumulative for EXP-083: T1 only (this record). Budgets for the later tasks: strings 0 of 3; prompt Yes 0 of 3; OK 0 of 3; Designer Save 0 of 1; Designer close/reopen 0 of 1; runtime open 0 of 1; F4 0 of 1; runtime close 0 of 1; re-logins 0 of 1.

## Worker-written-file inventory (T1)

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (created; this record).
- `evidence/EXP-083/t1-01-designer-start-fx-orders-open-user-clean.png` (created).
- `evidence/EXP-083/t1-02-edit-string-filter-fx_s-before-cancel.png` (created).
- `evidence/EXP-083/t1-03-edit-string-fx_sAddress-positive-control-value.png` (created).
- `evidence/EXP-083/t1-04-fx-orders-open-captions-read-clean-before-stop.png` (created).
- `evidence/EXP-083/snapshot-t1-01-designer-start.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-083/snapshot-t1-02-global-objects-dialog.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-083/snapshot-t1-03-after-global-objects-cancel.yml` (created by the snapshot tool at the worker's filename request).

Tool-generated, not worker-authored: Playwright page snapshot and console files written by the harness on browser events under `evidence\playwright\` (for example `page-2026-10-14T03-26-08-013Z.yml` through `page-2026-10-14T03-27-04-497Z.yml`, and `console-2026-10-14T03-25-48-486Z.log`). They are outside the EXP-083 path (known confinement limitation; the operator's git review is authoritative). No other repository file was written, edited or deleted in T1.

## Decisive evidence (T1)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t1-01-designer-start-fx-orders-open-user-clean.png` | Form tab `FX_Orders`; canvas labels `FX_sCustomerName:`, `Address:`, `FX_sItemDescription:`, `FX_sOrderTotal:` (raw IDs for three targets; `Address` resolved); toolbar Save greyed; footer `ScopeType: User` | **AC-1** start state: FX_Orders open, User scope, clean; the three target captions render as raw IDs before any change | The stored Form definition beyond this session; the component list (see the snapshot) |
| `t1-02-edit-string-filter-fx_s-before-cancel.png` | Global Objects dialog; Strings filter `FX_s`; nine rows (`FX_sAddress`, `FX_sCost`, `FX_sCount`, `FX_sCustomerID`, `FX_sDescription`, `FX_sImport`, `FX_sItem`, `FX_sOrderNumber`, `FX_sUM`); no `FX_sCustomerName`, `FX_sItemDescription` or `FX_sOrderTotal` row | **AC-1** the three target strings are absent from the `FX_s` list | Absence under any other prefix; the values of the other strings |
| `t1-03-edit-string-fx_sAddress-positive-control-value.png` | `FX_sAddress` row selected; Properties panel `Name` = `FX_sAddress`, `String Value` = `Address` | **AC-1** positive control: `FX_sAddress` exists with value `Address` | Anything about the other strings |
| `t1-04-fx-orders-open-captions-read-clean-before-stop.png` | FX_DerOrderTotalStatic selected; Properties header `FX_DerOrderTotalStatic (Static)`, Caption `FX_sOrderTotal`, Type Static; toolbar Save greyed; FX_Orders tab; footer `ScopeType: User` | **AC-1** the caption of FX_DerOrderTotalStatic is the raw ID `FX_sOrderTotal`; the clean state after the reads | The Captions of FX_CusNameStatic and FX_ItmsDescriptionStatic (read through the Properties readbacks, not in this image) |

Screenshots were viewed (Read) before citing. Not in the screenshots: the Properties Caption values of FX_CusNameStatic (`FX_sCustomerName`) and FX_ItmsDescriptionStatic (`FX_sItemDescription`); these readings are from the accessibility readbacks taken with a find after each selection.

## Observations (observed only)

1. FX_Orders was already open, User scope and clean at T1 start (carried over from EXP-082 T9). Its canvas shows the three target captions as raw IDs (`FX_sCustomerName:`, `FX_sItemDescription:`, `FX_sOrderTotal:`) and `Address:` resolved.
2. The Strings filter `FX_s` lists nine strings. FX_sCustomerName, FX_sItemDescription and FX_sOrderTotal are absent. FX_sAddress is present with value `Address`.
3. Two other strings in the FX_s family exist and are not targets: `FX_sDescription` and `FX_sImport`. Not read further, not used and not changed.
4. Closing Global Objects with Cancel left the Designer clean. The Designer URL lost its `MGForm=FX_Orders` parameter after the dialog closed; the FX_Orders tab stayed open and selected, Save and Undo stayed disabled. The URL change is recorded as observed; its cause is not established.
5. The Web Client (tab 1) was not selected in T1. Its `IdoProperties` state is not an EXP-083 gate.
6. No session expiry, sign-in page, portal banner or native dialog appeared in T1.
7. The start snapshot's Components tree lists the 31 components with names matching the EXP-082 T9 inventory; the tree was not re-read row by row in T1 (its verification is the post-Save check in a later task).

## Knowledge state (per finding)

| Finding | State |
|---|---|
| Designer started with FX_Orders open, User scope, Save and Undo disabled | **observed** (one run; `t1-01`) |
| Edit > String: `FX_sCustomerName`, `FX_sItemDescription` and `FX_sOrderTotal` absent; `FX_sAddress` present with value `Address` | **observed** (one run; `t1-02`, `t1-03`) |
| FX_CusNameStatic, FX_ItmsDescriptionStatic and FX_DerOrderTotalStatic carry the raw caption IDs `FX_sCustomerName`, `FX_sItemDescription` and `FX_sOrderTotal` | **observed** (one run; Properties readbacks; `t1-04` for FX_DerOrderTotalStatic) |
| Strings filter: one plain fill did not narrow the list in EXP-076; Control+a and a slow `FX_s` entry narrowed it here | **observed** (one run; consistent with EXP-076) |
| The 31-component inventory | **cited** from EXP-082 T9; the start snapshot lists the same 31 names (one run) |
| Caption ellipsis prompt text, Tab commit and OK behaviour | **cited** from EXP-072 and EXP-076 (not re-observed in EXP-083 T1) |
| Any database durability or replay | **not claimed** (not replay_verified) |

## Open questions and blockers

1. **No blocker in T1.** The gates pass and the stop point is reached.
2. **Deviation (disclosed):** the Form-menu recent-forms open was not repeated (FX_Orders was already open and clean). The brief's postcondition is met; the coordinator may want the strings task to start from the same state.
3. **URL change:** the Designer URL lost `MGForm=FX_Orders` after the Global Objects Cancel. The FX_Orders tab remained open and selected. Not interpreted; recorded for the next gate (the next task should confirm the tab before its first Caption edit).
4. The next permitted action (separate authorization): the three Caption ellipsis strings, in the order FX_CusNameStatic → `FX_sCustomerName`; FX_ItmsDescriptionStatic → `FX_sItemDescription`; FX_DerOrderTotalStatic → `FX_sOrderTotal`, each with one Yes to the exact prompt, the String Value committed with Tab before OK, then the Edit > String readback, one Designer Save, one close and reopen and the runtime checks. Not performed in T1.

## Next permitted action

Not authorized in T1. The strings task (Caption ellipsis for the three targets, exactly one Yes per exact prompt, Tab commit before OK) requires its own bounded task. Classification remains **observed only, NOT replay_verified**.

---

## T2 — create the three caption strings and read them back (cycle 1; Designer left dirty and open)

- Task T2, cycle 1, worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`, task_message_id `43bc8c86-2943-4ca8-afc7-023469a7d38b`, run `R-20261014-112529-I6l8`. Date 2026-10-14.
- Scope (bounded T2 instruction): gate; for each of the three Statics in order, the Caption ellipsis once, the exact prompt answered Yes once, the String Value replaced and committed with Tab, verified, screenshot before OK, OK once; Edit > String read-only readback of the three IDs and values, then Cancel. **Not in T2:** the Designer Save, the close or reopen, any runtime check, any component or Caption-reference edit.

### Gate (fresh, before any mutation)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before the first select) | Tab 0 Designer (current, `MGForm=FX_Orders`); tab 1 Web Client (`favoriteContext=IdoProperties`) | tool output |
| Tab 0 selected; fresh untargeted snapshot | FX_Orders tab selected (`closable FX_Orders`); footer `ScopeType: User`; Save and Undo **disabled**; no dialog; Properties header `FX_DerOrderTotalStatic (Static)` (left from T1) | `snapshot-t2-01-designer-fresh-start.yml` |
| Form identity | FX_Orders; the URL still lacks `MGForm` (as at the end of T1); not navigated or reopened | snapshot |
| Session | Usable; no expiry, sign-in, banner or native dialog; re-login 0 | snapshot |

Gate result: **passed**; the Designer is FX_Orders, User scope, clean, and no dialog was open before the first string.

### String 1 — FX_sCustomerName on FX_CusNameStatic

| Step | Observed | Evidence |
|---|---|---|
| Select the component | FX_CusNameStatic (one click on its Components row); Properties header `FX_CusNameStatic (Static)`; Caption `FX_sCustomerName` | `snapshot-t2-02-caption-row-fx_cusnamestatic.yml` |
| Caption ellipsis (once) | Alert dialog text read: `String FX_sCustomerName does not exist. Create it?` (buttons Yes, No; Yes focused) | `t2-01` (prompt, before answer) |
| Answer Yes (once) | String dialog opened: Name `FX_sCustomerName`; generated String Value `FX_s Customer Name` | find readback |
| Replace the value | One fill of `Customer Name` into the active String Value editor; Tab committed it | find: gridcell `Customer Name`, no active editor |
| Verify before OK | String Value `Customer Name`; screenshot before OK | `t2-02` |
| OK (once) | Dialog closed; Save became enabled (dirty) | find |

### String 2 — FX_sItemDescription on FX_ItmsDescriptionStatic

| Step | Observed | Evidence |
|---|---|---|
| Select the component | FX_ItmsDescriptionStatic; Properties header `FX_ItmsDescriptionStatic (Static)`; Caption `FX_sItemDescription` | `snapshot-t2-03-caption-row-fx_itmsdescriptionstatic.yml` |
| Caption ellipsis (once) | Alert text: `String FX_sItemDescription does not exist. Create it?` | `t2-03` (prompt) |
| Answer Yes (once) | String dialog: Name `FX_sItemDescription`; generated String Value `FX_s Item Description` | find readback |
| Replace the value | One fill of `Item Description`; Tab committed | find: gridcell `Item Description`, no active editor |
| Verify before OK | String Value `Item Description` | `t2-04` |
| OK (once) | Dialog closed | find |

### String 3 — FX_sOrderTotal on FX_DerOrderTotalStatic

| Step | Observed | Evidence |
|---|---|---|
| Select the component | FX_DerOrderTotalStatic; Properties header `FX_DerOrderTotalStatic (Static)`; Caption `FX_sOrderTotal` | `snapshot-t2-04-caption-row-fx_derordertotalstatic.yml` |
| Caption ellipsis (once) | Alert text: `String FX_sOrderTotal does not exist. Create it?` | `t2-05` (prompt) |
| Answer Yes (once) | String dialog: Name `FX_sOrderTotal`; generated String Value `FX_s Order Total` | find readback |
| Replace the value | One fill of `Order Total`; Tab committed | find: gridcell `Order Total`, no active editor |
| Verify before OK | String Value `Order Total` | `t2-06` |
| OK (once) | Dialog closed; no dialog remained | find |

Each prompt matched the exact `String <ID> does not exist. Create it?` text, so none of the three strings existed before this task (no overwrite was performed or needed). No prompt or value differed from the brief.

### Edit > String readback (read-only; then Cancel)

Route: Edit (one click) → String → Global Objects; Strings filter: one click, Control+a, `FX_s` typed slowly (the same route as T1). The filtered list shows 12 strings: the nine from T1 plus `FX_sCustomerName`, `FX_sItemDescription` and `FX_sOrderTotal` (the three new rows are rendered in bold blue). `FX_sAddress` is still present.

| String | Readback Name | Readback String Value | Match |
|---|---|---|---|
| FX_sCustomerName | `FX_sCustomerName` | `Customer Name` | exact (`t2-08`) |
| FX_sItemDescription | `FX_sItemDescription` | `Item Description` | exact (`t2-09`) |
| FX_sOrderTotal | `FX_sOrderTotal` | `Order Total` | exact (`t2-10`) |

Global Objects was closed with **Cancel** (not OK). No string was edited after its OK.

### Designer state after T2 (observed)

- Save **enabled** (dirty, as expected: the strings are client-side until the Designer Save). Undo shown **disabled** in the accessibility tree at the end, although Save is enabled. This is recorded as observed; its meaning is not interpreted.
- FX_Orders tab selected; footer `ScopeType: User`; no dialog open; the Form was not closed, saved or reopened.
- The canvas labels still show the raw IDs for the three captions (for example `FX_sCustomerName:`), because the Designer has not been saved; the canvas was not re-read as a separate result.
- Caption references were not edited: each Caption field still shows its raw ID (`FX_sCustomerName`, `FX_sItemDescription`, `FX_sOrderTotal`). The ellipsis created the string resources; it did not change the reference.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
|---|---|---|---|
| AC-1 (T1 gate, re-confirmed at T2 start: User scope, clean, FX_Orders identity) | Re-confirmed (fresh snapshot) | `snapshot-t2-01-designer-fresh-start.yml` | The three-string absence and FX_sAddress positive control were proven in T1 (`t1-02`, `t1-03`); the T2 prompt for each string is the absence proof at creation time. |
| AC-2 (three strings through the Caption ellipsis; one Yes each; Tab before OK; readback exact) | **Supported (observed; UI and accessibility level; same session).** Three prompts, three Yes, three Tab commits, three OK; readback exact for all three. | `t2-01` to `t2-06` (prompts and pre-OK dialogs); `t2-08` to `t2-10` (readback) | Client-side until the Designer Save (not yet performed). Not database durability. |
| AC-3 to AC-5 | Not in T2 (Save, close/reopen, runtime are later tasks) | — | — |

### Action audit (T2; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first select. |
| `browser_tabs` select | **1** | Tab 0 (Designer). Tab 1 never selected. |
| Untargeted snapshots | **1** | `snapshot-t2-01-designer-fresh-start.yml` (gate). |
| Targeted snapshots (read-only; used to locate a Caption row's ellipsis or the readback grid) | **4** | `snapshot-t2-02` (Caption table of FX_CusNameStatic), `snapshot-t2-03` (FX_ItmsDescriptionStatic), `snapshot-t2-04` (FX_DerOrderTotalStatic), `snapshot-t2-05` (Global Objects Strings grid). |
| `browser_find` (read-only) | **30** | Reconstructed from the call sequence (no tool counter); the readback finds include the three strings' Name and String Value. |
| Element clicks (successful / failed) | **22 / 0** | Caption ellipsis ×3; component row selections ×3; prompt Yes ×3; String Value cell activation ×3; String dialog OK ×3; Edit menu 1; Edit > String 1; Strings filter box 1; readback row selections ×3; Global Objects Cancel 1. |
| `browser_type` | **4** | String Value fills ×3 (one each, into the active editor); Strings filter `FX_s` (slow) ×1. |
| Key presses | **4** | Tab ×3 (one per String Value commit); Control+a ×1 (filter). No Escape, Enter or Delete. |
| Waits / coordinate clicks / mouse / wheel / hover / drag | **0 / 0 / 0 / 0 / 0 / 0** | None. |
| Screenshots | **10** | `t2-01` to `t2-10`. |
| **Total browser calls in T2** | **77** | 2 tab calls + 5 snapshots + 30 finds + 22 clicks + 4 types + 4 key presses + 10 screenshots. |
| Strings created | **3** | FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal. |
| Prompt answered Yes | **3** | One per string. No "No" answer. |
| String dialog OK | **3** | One per string, after the Tab commit and the pre-OK screenshot. |
| Caption ellipsis opened | **3** | One per component. |
| Caption reference edits | **0** | Caption fields were not typed into or changed. |
| Other components touched | **0** | Only the three target Statics were selected. |
| Component edits (add, delete, move, change) | **0** | None. |
| Designer Save | **0** | Not performed (T2 excludes it). |
| Form close / reopen (FX_Orders) | **0 / 0** | None. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Runtime FX_Orders open / F4 / typed / saved / deleted | **0 / 0 / 0 / 0 / 0** | Web Client not selected. |
| Global Objects dialogs answered in-page | **1** (Cancel) | The readback dialog only; not OK. |
| Native browser dialogs | **0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry procedure / portal navigation | **0 / 0 / 0** | Session usable throughout. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. The missing `MGForm` URL parameter was not corrected. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | None; the tool output's `Console: 2 errors, 0 warnings` line was not inspected. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | No recovery snapshot used. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative for EXP-083 (T1 + T2):** browser calls 28 (T1) + 77 (T2) = **105**. Strings created **3 of 3**; prompt Yes **3 of 3**; OK **3 of 3**; Designer Save **0 of 1**; close/reopen **0 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; component edits **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**; re-logins **0 of 1**.

### Worker-written-file inventory (T2)

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (edited: status header and this T2 section).
- `evidence/EXP-083/snapshot-t2-01-designer-fresh-start.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-083/snapshot-t2-02-caption-row-fx_cusnamestatic.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t2-03-caption-row-fx_itmsdescriptionstatic.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t2-04-caption-row-fx_derordertotalstatic.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t2-05-global-objects-strings-grid.yml` (created by the snapshot tool).
- `evidence/EXP-083/t2-01-prompt-string-fx_scustomername-does-not-exist.png` (created).
- `evidence/EXP-083/t2-02-string-dialog-fx_scustomername-value-committed-before-ok.png` (created).
- `evidence/EXP-083/t2-03-prompt-string-fx_sitemdescription-does-not-exist.png` (created).
- `evidence/EXP-083/t2-04-string-dialog-fx_sitemdescription-value-committed-before-ok.png` (created).
- `evidence/EXP-083/t2-05-prompt-string-fx_sordertotal-does-not-exist.png` (created).
- `evidence/EXP-083/t2-06-string-dialog-fx_sordertotal-value-committed-before-ok.png` (created).
- `evidence/EXP-083/t2-07-edit-string-readback-fx_s-list-after-create.png` (created).
- `evidence/EXP-083/t2-08-edit-string-readback-fx_scustomername-value.png` (created).
- `evidence/EXP-083/t2-09-edit-string-readback-fx_sitemdescription-value.png` (created).
- `evidence/EXP-083/t2-10-edit-string-readback-fx_sordertotal-value.png` (created).

Tool-generated, not worker-authored: `evidence\playwright\` page and console files (outside the EXP-083 path; the operator's git review is authoritative).

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t2-01` | Alert `String FX_sCustomerName does not exist. Create it?` (Yes focused) over the String dialog; FX_Orders tab; FX_CusNameStatic Caption `FX_sCustomerName`; footer User | The exact prompt for the first string; the User-scope Designer at that moment | That the answer was saved server-side |
| `t2-02` | String dialog: Name `FX_sCustomerName`, String Value `Customer Name`, no editor open; Save enabled behind the dialog | The value is committed before OK | The stored value after a Designer Save (not yet saved) |
| `t2-03` | Alert `String FX_sItemDescription does not exist. Create it?` | The exact prompt for the second string | As `t2-01` |
| `t2-04` | String dialog: Name `FX_sItemDescription`, String Value `Item Description` | The value committed before OK | As `t2-02` |
| `t2-05` | Alert `String FX_sOrderTotal does not exist. Create it?` | The exact prompt for the third string | As `t2-01` |
| `t2-06` | String dialog: Name `FX_sOrderTotal`, String Value `Order Total`, no editor open | The value committed before OK | As `t2-02` |
| `t2-07` | Global Objects, Strings filter `FX_s`: 12 rows; the three new rows highlighted; `FX_sAddress` present | The three new strings exist in the Strings list; the list is otherwise unchanged in the visible rows | The exact values (see `t2-08` to `t2-10`); rows outside the `FX_s` filter |
| `t2-08` | Properties: Name `FX_sCustomerName`, String Value `Customer Name` (row selected) | **AC-2** readback for string 1 | As above |
| `t2-09` | Properties: Name `FX_sItemDescription`, String Value `Item Description` | **AC-2** readback for string 2 | As above |
| `t2-10` | Properties: Name `FX_sOrderTotal`, String Value `Order Total` | **AC-2** readback for string 3 | As above |

Screenshot framing: the prompt images show the whole viewport (FX_Orders tab, Properties, components grid, footer); the readback images show the Global Objects dialog with the Properties panel. Filenames and tool success alone were not used as proof: each image was viewed before being cited.

### Limitations (T2)

- The readback is the same-session UI (accessibility Properties grid and the screenshots). It is not a database or server-side check.
- The three strings are client-side until the Designer Save; the Save is a later task.
- The Strings view shows only the names and values selected by the filter; the readback was not run against other namespaces.
- The Undo button's disabled state beside an enabled Save was observed at the end of T2 and was not investigated.
- The `find` count (30) is reconstructed from the call sequence because no tool counter is available; the other counts are from the same sequence.

### Open questions and next permitted action (T2)

1. **No blocker in T2.** All three strings are created and read back exactly.
2. **Next permitted action (separate authorization):** the single Designer Save and its native response; the clean-state check; the close of FX_Orders once through its Form-tab control; the reopen once through the Form menu recent-forms entry; the verification of the three captions and the 31 components; and then the runtime blank-criteria check (F4 once), with the picture field recorded.
3. The Designer is **dirty and open** at the end of T2, as the bounded instruction requires. It must not be closed without that later authorization, because closing a dirty Form would discard the strings.

Classification remains **observed only, NOT replay_verified**.

---

## T3 — one Designer Save of FX_Orders (cycle 2; Form left open; clean after the Save)

- Task T3, cycle 2, worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`, task_message_id `93d838f8-08c5-4443-9574-662624ae5fbb`, run `R-20261014-112529-I6l8`. Date 2026-10-14.
- Scope (bounded T3 instruction): gate; pre-Save screenshot; **one** Designer Save via the visible toolbar Save control; immediate response and post-Save screenshot; leave FX_Orders open. **Not in T3:** a second Save, close, reopen, Web Client, runtime, component or Caption-reference edit.

### Gate (fresh, before the Save)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before the first select) | Tab 0 Designer (current; `MGForm` absent from the URL, as since T1); tab 1 Web Client (`favoriteContext=IdoProperties`) | tool output |
| Tab 0 selected; fresh snapshot (depth 6) | FX_Orders tab selected (`closable FX_Orders`); footer `ScopeType: User`; **Save enabled** (no `[disabled]`); Undo disabled; no dialog (no alertdialog or dialog in the tree) | `snapshot-t3-01-designer-pre-save-fresh.yml` |
| Pre-Save screenshot | FX_Orders tab; Save icon active; footer User; Properties on FX_DerOrderTotalStatic (`Caption FX_sOrderTotal`); canvas raw labels for the three targets; no dialog | `t3-01` (viewed) |

Gate result: **passed** (the brief's preconditions: FX_Orders selected, User scope, no dialog, Save enabled).

### The one Save

| Step | Observed | Evidence |
|---|---|---|
| Invocation | One click on the Designer toolbar `Save` (the identified toolbar control; ref from a fresh find). The Save icon was not invoked by keyboard or by any other control. | tool output |
| Count | **1** invocation. No retry. | — |
| Immediate native response | A non-modal notification toast, top-right: title `Save`, text `Global object(s) were saved.` It has a close (×) control, which was not clicked; it is a notification, not a prompt, and it dismisses itself. No modal prompt, error or warning appeared. | `t3-02` (viewed); find `saved` |
| Post-Save clean state | Save **disabled**; Undo **disabled**; Regenerate Form disabled (unchanged); FX_Orders still selected; footer `ScopeType: User`; no dialog | final find; `t3-02` |
| Post-Save canvas | The three caption labels still show the **raw IDs** (`FX_sCustomerName:`, `FX_sItemDescription:`, `FX_sOrderTotal:`); `Address:` remains resolved. The canvas was not re-read after the toast cleared. | `t3-02` (viewed) |

Result: the Save completed with the toast above. The Form is clean (Save and Undo disabled). The FX_Orders Form was not closed or reopened. The canvas captions did not resolve visually in this immediate capture; this matches EXP-072 T9, where the canvas also still showed raw IDs immediately after the Save and resolved only after a later close and reopen (EXP-072 T10). The cause is not established here and is left for the close and reopen check.

### Interpretation limits (T3)

- The toast says `Global object(s) were saved.` It does not name the Form. It is the only native confirmation; it does not by itself prove that the Form definition, as opposed to the string resources, was persisted to the server.
- The clean state (Save disabled) shows the Designer no longer reports unsaved changes. This is a client-side indicator, not a database check.
- The server-side persistence of the strings and the Form caption references is **not established**. It is for the close-and-reopen task (and, if needed, a later read of Edit > String) to test, within its own authorization.

### Action audit (T3; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first select. |
| `browser_tabs` select | **1** | Tab 0 (Designer). Tab 1 never selected. |
| Untargeted snapshots | **1** | `snapshot-t3-01-designer-pre-save-fresh.yml` (gate, depth 6). |
| `browser_find` (read-only) | **3** | (1) `button "Save"` (locates the toolbar Save ref); (2) post-Save `saved|alert|dialog|…` (returned the toast); (3) post-Save Save/Undo/FX_Orders/ScopeType check. |
| Element clicks (successful / failed) | **1 / 0** | The single toolbar Save. |
| Designer Save invocations | **1** | The only Save of EXP-083 so far (cumulative below). |
| Screenshots | **2** | `t3-01` (pre-Save), `t3-02` (post-Save). |
| Key presses / types / waits / coordinate or wheel actions | **0 / 0 / 0 / 0** | None. |
| **Total browser calls in T3** | **9** | 2 tab calls (list 1 + select 1) + 1 snapshot + 3 finds + 1 click + 2 screenshots. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Close / reopen of FX_Orders | **0 / 0** | Not in T3. |
| Component edits; Caption-reference edits | **0; 0** | None. |
| Runtime, Web Client, F4, typed, saved, deleted | **0** | Web Client tab not selected. |
| Global Objects, String dialogs, prompts answered | **0** | None in T3. |
| Native browser dialogs | **0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | None. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative for EXP-083 (T1 + T2 + T3):** browser calls 28 + 77 + 9 = **114**. Strings created **3 of 3**; prompt Yes **3 of 3**; String OK **3 of 3**; **Designer Save 1 of 1** (used); Designer close/reopen **0 of 1**; runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; component edits **0**; Caption-reference edits **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**; re-logins **0 of 1**.

### Worker-written-file inventory (T3)

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (edited: status header and this T3 section).
- `evidence/EXP-083/snapshot-t3-01-designer-pre-save-fresh.yml` (created by the snapshot tool at the worker's filename request).
- `evidence/EXP-083/t3-01-pre-save-fx_orders-dirty-user-scope-no-dialog.png` (created).
- `evidence/EXP-083/t3-02-post-save-immediate-response-fx_orders.png` (created).

Tool-generated, not worker-authored: `evidence\playwright\` page and console files (for example `page-2026-10-14T03-34-13-221Z.yml`); outside the EXP-083 path; the operator's git review is authoritative.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t3-01` (viewed) | FX_Orders tab; Save icon active; footer `ScopeType: User`; canvas raw labels for the three targets; no dialog | **Gate**: the Form was dirty, User scope, selected, with no dialog before the one Save | That the Save would succeed; server state |
| `t3-02` (viewed) | Toast `Save` / `Global object(s) were saved.`; Save icon greyed; footer User; FX_Orders tab; canvas still raw IDs for the three targets | **The native response** of the one Save; the Form clean afterwards (Save greyed) | That the Form definition (not only the strings) was persisted server-side; that the captions resolve (they do not on the immediate canvas) |

Supports: **AC-3** (Save part only: exactly one Designer Save with its native response and the clean state). AC-3 close/reopen and caption verification are **not** supported yet. AC-4 and AC-5 are not in T3.

### Limitations (T3)

- One Save. The native response is a transient toast; it was captured by a find and the post-Save screenshot. The toast self-dismisses, so a later check cannot rely on it.
- The canvas caption resolution after the Save was not observed in the close and reopen; it was observed only immediately after the Save.
- Same session only; not database durability; not replay verification.

### Open questions and next permitted action (T3)

1. **No blocker in T3.** The Save completed with a success notification and the Form is clean.
2. **Next permitted action (separate authorization):** close FX_Orders once through its Form-tab control (the Form is clean, so no prompt is expected), then reopen it once through the Form menu recent-forms entry; verify the canvas and the Components grid show Customer Name, Item Description and Order Total; verify the 31 components are otherwise unchanged. Then the runtime blank-criteria check (one F4; two orders; picture field recorded), and the runtime close.
3. FX_Orders is **open and clean** at the end of T3, as the brief requires. It must not be closed or reopened in T3.

Classification remains **observed only, NOT replay_verified**.

---

## T4 — one clean close and one reopen of FX_Orders; caption and 31-component verification (cycle 3; Designer left open; no Save; no Web Client)

- Task T4, cycle 3, worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`, task_message_id `8fdde292-f67c-47d2-a5d8-70f1d61e1b00`, run `R-20261014-112529-I6l8`. Date 2026-10-14.
- Scope (bounded T4 instruction): pre-close gate; **one** close through the Form-tab control; **one** reopen through the Form menu recent-forms entry; verify identity and User scope; verify the resolved captions on the canvas; read the Caption of the three target Statics without editing; compare the Components grid with the EXP-082 T9 inventory. **Not in T4:** a second Designer Save, a second close or reopen, the Web Client, the runtime query.

### Pre-close gate (fresh)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before the first select) | Tab 0 Designer (`MGForm=FX_Orders`); tab 1 Web Client | tool output |
| Tab 0 selected; fresh snapshot (depth 6) | FX_Orders tab selected (`closable FX_Orders`); Save **disabled**; Undo **disabled**; footer `ScopeType: User`; no dialog | `snapshot-t4-01-pre-close-fresh.yml` |
| Pre-close screenshot | FX_Orders tab; Save and Undo greyed; footer User; canvas shows the three target captions still as raw IDs in the T3 state, with the Form clean; no dialog | `t4-01` (viewed) |

Gate result: **passed** (the Form is clean; identity and User scope are confirmed; no dialog).

### Close (once)

- The Form-tab control `closable FX_Orders` (`e247`) was clicked **once**.
- Native response: **none** (no save prompt, no alert, no toast). The Form closed.
- Post-close (`t4-02`, viewed): empty Designer canvas; no FX_Orders tab; no dialog; Save **disabled**; footer `ScopeType: User`.

### Reopen (once)

- Form menu (one click) → recent-forms entry `FX_Orders` (one click). No Select Form dialog was used; no direct URL.
- Post-reopen: the FX_Orders tab is open and selected; the URL again carries `MGForm=FX_Orders`.

### Reopened Form identity, scope and clean state (observed; `t4-03`, `snapshot-t4-03-reopened-fx_orders-full.yml`)

| Field | Observed |
|---|---|
| Form tab / heading | `FX_Orders` (selected; `closable FX_Orders`) |
| Properties > Design > Name | `FX_Orders` |
| Device Type | `Default` |
| Form Type | `Normal` |
| Is Master | `True` |
| Footer | `ScopeType: User / ScopeName: <operator account>` |
| Save / Undo | **disabled** (clean) |
| Dialog | none |

### Reopened canvas (observed; `t4-03`)

Labels in order, all resolved: `Order Number:*`, `Customer ID:*`, **`Customer Name:`**, `Address:`, `Item:*`, **`Item Description:`**, `Cost:`, `Count:`, **`Order Total:`**. The three target captions that showed raw IDs before the Save now render as **Customer Name**, **Item Description** and **Order Total**; the ordinary trailing colon is present. The grid headers read `* Order Number`, `* Customer ID`, `Customer Name`, `Address`, `* Item`, `Item Description`, `Cost`, `Count`, `Order Total`. The Count field shows `1`, Cost `0.00`, Order Total `0.00` (the add-mode placeholder row; no record was saved or entered).

### Components grid (observed; expanded once; `t4-04`, `snapshot-t4-04-reopened-components-expanded.yml`)

Expansion was done with the grid's Expand control (view only). The grid lists **31 rows**: FormCollectionGrid (Grid, objects, tab 0); 10 GridColumns (tabs 1–10); Pane (01): 10 Static, 10 detail controls (tabs 11–30). Each row matches the EXP-082 T9 inventory by name, type, binding and tab:

| Tab | Component | Type | Binding | Match to EXP-082 T9 |
|---|---|---|---|---|
| 0 | FormCollectionGrid | Grid | objects | yes |
| 1–10 | FX_OrderNumberGridCol, FX_CustomerIDGridCol, FX_CusNameGridCol, FX_CusAddressGridCol, FX_ItemGridCol, FX_ItmsDescriptionGridCol, FX_ItmsCostGridCol, FX_CountGridCol, FX_DerOrderTotalGridCol, FX_ItmsPictureGridCol | GridColumn | object.<Property> | yes (10 of 10) |
| 11–30 | FX_OrderNumberStatic, FX_OrderNumberEdit, FX_CustomerIDStatic, FX_CustomerIDCombobox (**ComboBox**), FX_CusNameStatic, FX_CusNameEdit, FX_CusAddressStatic, FX_CusAddressEdit, FX_ItemStatic, FX_ItemCombobox (**ComboBox**), FX_ItmsDescriptionStatic, FX_ItmsDescriptionEdit, FX_ItmsCostStatic, FX_ItmsCostEdit, FX_CountStatic, FX_CountEdit, FX_DerOrderTotalStatic, FX_DerOrderTotalEdit, FX_ItmsPictureStatic, FX_ItmsPictureEdit (**Edit**, not image) | Static / Edit / ComboBox | as T9 | yes (20 of 20) |

Result: **31 of 31 component identities match; no additions, removals or changed types or bindings were observed.** The Components grid was not edited; the Layout was not changed.

### Caption property of the three target Statics (read-only; each row selected once; `t4-04`)

| Component | Properties header | Caption (raw reference) | Result |
|---|---|---|---|
| FX_CusNameStatic | `FX_CusNameStatic (Static)` | `FX_sCustomerName` | reference unchanged |
| FX_ItmsDescriptionStatic | `FX_ItmsDescriptionStatic (Static)` | `FX_sItemDescription` | reference unchanged |
| FX_DerOrderTotalStatic | `FX_DerOrderTotalStatic (Static)` | `FX_sOrderTotal` | reference unchanged |

The Caption field keeps the raw ID by design: the Caption is a reference to the string resource, and the canvas shows the resolved text. The ellipsis was not opened and no Caption was typed into.

### Visible clean state at the end of T4

Save **disabled**; Undo **disabled**; no dialog; FX_Orders tab selected; footer `ScopeType: User`. The Form is open and clean. The Web Client was not selected.

### Interpretation (T4)

- The T3 Save and this close and reopen agree: the captions that were raw IDs in the same-session canvas before the Save now resolve after the close and reopen. This is observed in the **same session** only. It is consistent with the strings and the Form caption references being persisted, but it is **not** a database or server-side check, and it is **not** replay verification.
- The reopen used the recent-forms entry, which reads the Form definition from the server-backed Designer; it is a weak persistence boundary (same session).

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
|---|---|---|---|
| AC-3 (close/reopen part, caption part, 31-component part) | **Supported (observed; UI and accessibility level; same session).** One clean close (no prompt); one reopen (recent-forms); captions resolve on the canvas; the three Caption references read as expected; 31 of 31 components match T9. | `t4-02` (after close), `t4-03` (reopened canvas), `t4-04` (grid with caption), `snapshot-t4-03`, `snapshot-t4-04` | Same session only; not a database check. The T9 comparison is from the EXP-082 record, not re-read in this session. |
| AC-4 | Not in T4 (runtime not opened) | — | — |
| AC-5 | Partial (close/reopen and component inventory); final report after the runtime task | — | — |

### Action audit (T4; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first select. |
| `browser_tabs` select | **1** | Tab 0 (Designer). Tab 1 never selected. |
| Untargeted snapshots | **3** | `snapshot-t4-01-pre-close-fresh.yml` (depth 6, pre-close gate); `snapshot-t4-03-reopened-fx_orders-full.yml` (after reopen); `snapshot-t4-04-reopened-components-expanded.yml` (after Components expanded). |
| `browser_find` (read-only) | **9** | `alertdialog/dialog/closable/heading/Save/ScopeType` after close (1); `Form` locate (2); `FX_Orders` recent-forms locate (3); `Components` locate (4); `Expand` locate (5); Caption/(Static) readback for FX_CusNameStatic (6); for FX_ItmsDescriptionStatic (7); for FX_DerOrderTotalStatic (8); Save/Undo/ScopeType after the grid screenshot (9). |
| Element clicks (successful / failed) | **9 / 0** | (1) closable FX_Orders Form-tab close; (2) Form menu; (3) recent-forms entry FX_Orders; (4) Details Expand Panel; (5) Components tab; (6) Components grid Expand (view only); (7) FX_CusNameStatic row (select only); (8) FX_ItmsDescriptionStatic row (select only); (9) FX_DerOrderTotalStatic row (select only). |
| **Form close count (T4)** | **1** | Form-tab control; no prompt. |
| **Form reopen count (T4)** | **1** | Form menu recent-forms entry. |
| Designer Save (T4) | **0** | None; cumulative Save count stays **1 of 1** (T3). |
| Screenshots | **4** | `t4-01` (pre-close), `t4-02` (after close), `t4-03` (reopened canvas), `t4-04` (components grid with caption). |
| Key presses / types / waits / coordinate, wheel, hover, drag actions | **0 / 0 / 0 / 0** | None. |
| **Total browser calls in T4** | **27** | 2 tab calls + 3 snapshots + 9 finds + 9 clicks + 4 screenshots. |
| Component edits; Caption-reference edits | **0; 0** | Selections only; the Expand is view-only. |
| Strings created; prompts answered; String dialogs | **0; 0; 0** | None in T4. |
| Designer top-toolbar Delete / Regenerate Form clicks | **0 / 0** | None. |
| Runtime, Web Client, F4, typed, saved, deleted | **0** | Web Client tab not selected; runtime query not run. |
| Global Objects / dialogs answered | **0** | None. |
| Native browser dialogs | **0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment changes | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None (the URL regained `MGForm=FX_Orders` through the reopen, not by navigation). |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | None; the tool output's `Console: 2 errors, 0 warnings` line was not inspected. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative for EXP-083 (T1 + T2 + T3 + T4):** browser calls 28 + 77 + 9 + 27 = **141**. Strings created **3 of 3**; prompt Yes **3 of 3**; String OK **3 of 3**; **Designer Save 1 of 1** (used); **Designer close 1 / reopen 1** (used, T4); runtime open **0 of 1**; F4 **0 of 1**; runtime close **0 of 1**; component edits **0**; Caption-reference edits **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**; re-logins **0 of 1**.

### Worker-written-file inventory (T4)

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (edited: status header and this T4 section).
- `evidence/EXP-083/snapshot-t4-01-pre-close-fresh.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t4-03-reopened-fx_orders-full.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t4-04-reopened-components-expanded.yml` (created by the snapshot tool).
- `evidence/EXP-083/t4-01-pre-close-fx_orders-clean-user-scope-no-dialog.png` (created).
- `evidence/EXP-083/t4-02-after-close-once-fx_orders-tab-closed-no-prompt.png` (created).
- `evidence/EXP-083/t4-03-reopened-fx_orders-canvas-identity-user-clean.png` (created).
- `evidence/EXP-083/t4-04-reopened-components-grid-caption-fx_derordertotalstatic.png` (created).

Tool-generated, not worker-authored: `evidence\playwright\` page and console files (outside the EXP-083 path; the operator's git review is authoritative).

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t4-01` (viewed) | FX_Orders tab; Save and Undo greyed; footer `ScopeType: User`; no dialog | **Pre-close gate**: the Form is clean and in User scope | The stored definition |
| `t4-02` (viewed) | Empty Designer canvas; no FX_Orders tab; no dialog; Save greyed; footer User | **Close** happened once with no prompt | That the definition is persisted server-side |
| `t4-03` (viewed) | Tab FX_Orders; Properties Name `FX_Orders`, Device Default, Form Type Normal, Is Master True; canvas labels `Customer Name:`, `Item Description:`, `Order Total:` resolved; Save and Undo greyed; footer User | **Reopen** happened once; **identity and User scope** confirmed; the three captions **resolve** on the reopened canvas | Server-side persistence; the stored values |
| `t4-04` (viewed) | Components grid expanded; FX_DerOrderTotalStatic selected; Caption `FX_sOrderTotal`; Save and Undo greyed; footer User | The **Caption reference** of FX_DerOrderTotalStatic is unchanged; the clean state | The other two Captions (read in the snapshot, not in this image); the other 28 rows as images |

Snapshot readbacks support the rest: `snapshot-t4-04` lists the 31 rows (see the table above), and the Caption readings for FX_CusNameStatic and FX_ItmsDescriptionStatic come from the find readbacks taken after each row selection.

Supports: **AC-3** (close/reopen once; captions shown; 31 components otherwise unchanged; same session). Not AC-4 or AC-5 final.

### Limitations (T4)

- The close and reopen are same-session UI events. The reopen reads the Form definition through the Designer, which is a weak persistence boundary; this is not database durability or replay verification.
- The 31-component comparison uses the EXP-082 T9 inventory as recorded in that experiment record; the T9 record itself was not re-read in this task.
- The Components grid was expanded for reading and left expanded; the Details panel was expanded and left expanded. These are view states, not Form changes.
- The Caption fields show raw IDs by design. The resolved text is visible on the canvas, not in the Caption field.

### Open questions and next permitted action (T4)

1. **No blocker in T4.** The close, the reopen, the caption resolution and the component inventory all checked out.
2. **Next permitted action (separate authorization):** the runtime blank-criteria check in the Web Client (Form > Open > Select Form; record the mode; switch to Filter in Place only if the status bar shows another mode; one F4 with every criterion blank; verify the two orders field by field; record the FX_ItmsPicture display; one runtime close, with No only if a save-new-record prompt appears).
3. FX_Orders is **open and clean** at the end of T4, as the brief requires. Do not close or reopen it again without authorization.

Classification remains **observed only, NOT replay_verified**.

---

## T5 — read-only runtime check of FX_Orders: one open, one blank-criteria F4, two orders verified, one close (cycle 4; Designer untouched)

- Task T5, cycle 4, worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`, task_message_id `f3ffa9f5-464b-4ad9-bdb9-8f8462d7c036`, run `R-20261014-112529-I6l8`. Date 2026-10-14.
- Scope (bounded T5 instruction): list tabs; select the Web Client; confirm usable; open FX_Orders once through Form > Open > Select Form; record mode; switch to Filter in Place only if needed; blank criteria; one F4; verify both orders field by field; record the FX_ItmsPicture display; move only by row-number cells; one runtime close. **Not in T5:** any typing into runtime fields, any list choice, New, Save, Delete, any Designer action (the Designer was not selected).

### Session and gate (Web Client)

| Check | Observed | Evidence |
|---|---|---|
| Tab list (before the first select) | Tab 0 Designer (`MGForm=FX_Orders`); tab 1 Web Client (`favoriteContext=IdoProperties`) | tool output |
| Tab 1 selected; fresh snapshot | Web Client usable: the IDO Properties Form was already open (a runtime tab from before this task; not opened or closed by T5); status bar `Filter in Place`; Save disabled | `snapshot-t5-01-webclient-start-fresh.yml`; `t5-01` |
| Session expiry or sign-in | **None.** The find for `Session Expired`, `sign in`, `Sign In`, `CloudIdentities` and `portal-notification` returned no matches. No portal banner. No re-login. | find; `t5-01` |
| Console count (tool output only) | `Console: 29 errors, 2 warnings` at the T5 start (it read `2 errors` in the Designer tab during T1–T4). This count is reported by the tool; it was **not** inspected (no console inspection is permitted). | tool output |

Gate result: **passed** (Web Client usable; no expiry; no sign-in).

### Open (once), with the identity check before OK

1. Form menu (one click) → the menu lists `Open`, `IDO Properties`, `IDOs`, `FX_Orders`, `FX_HelloWorld01`, `Sql Tables`, `IDO Projects`, `Property Classes`, `FX_Items`, `FX_UMs`, `Export/Import Strings`.
2. `Open` (one click) → the **Select Form** dialog opened with its Filter prefilled `IdoCollections` and two rows (`G6RIdoCollectionSearch`, `IDOs`). Not FX_Orders. (`t5-02`.)
3. The Filter was replaced by one fill `FX_Orders` and committed with one Tab → the list narrowed to **one row**, Caption `FX_Orders`, Name `FX_Orders` (`t5-03`). Identity was verified from that row before OK.
4. The FX_Orders row was selected (one click), then **OK** (one click). The page URL changed to `favoriteContext=FX_Orders`; the runtime FX_Orders tab opened and was selected.

Note: this is a **typed filter in the Select Form picker**, not a runtime field. It is recorded as a deviation from the brief's "do not type" wording, which is aimed at runtime fields; no runtime field received any keystroke.

### Initial mode (observed; `t5-04`, `snapshot-t5-02-runtime-fx-orders-after-open.yml`)

- The runtime opened in **Add mode**: the new-row star marker on row 1; the Order Number textbox held the add-mode placeholder `3` (selected); Count `1`; Cost `0.00`; Order Total `0.00`; Customer ID and Item comboboxes empty.
- The status bar read `Order Number (Object 1 of 1)`. It did not show `Filter in Place`, so the brief's switch condition applied.
- This placeholder `3` is the same add-mode default that EXP-078 T7 recorded on reopen. It is not a saved record.

### Switch to Filter in Place (once)

- The FiP toolbar button (`Filter in Place`, one click) was pressed once. **The Delete toolbar button, which is adjacent in the same toolbar, was not clicked.**
- After the switch (`t5-05`): status bar `Filter in Place`; all criteria blank (Order Number, Customer ID, Customer Name, Address, Item, Item Description, Cost, Count, Order Total are empty); the placeholder `3` is gone; the grid row 1 shows no new-row star.

### Query (F4, once)

- F4 was pressed **once** with every criterion blank (`t5-06`). The grid returned **two rows** (row-number cells `1` and `2`); the status bar read `Customer ID (Object 1 of 2)`.
- No retry, no criterion change.

### Order 1 (row-number cell `1`; `t5-06`; `snapshot-t5-03-runtime-after-f4-row1-fields.yml`)

| Field | Expected (brief) | Observed (accessibility value) | Match |
|---|---|---|---|
| Order Number | 1 | `1` | yes |
| Customer ID | FX001 | `FX001` | yes |
| Customer Name | Factory test one | `Factory test one` | yes |
| Address | 1 Factory Street | `1 Factory Street` | yes |
| Item | dumbbell | `dumbbell` | yes |
| Item Description | 45 pound iron | `45 pound iron` | yes |
| Cost | 45.00 | `45.00` | yes (display string) |
| Count | 2 | `2` | yes |
| Order Total | 90.00 | `90.00` | yes (display string) |
| FX_ItmsPicture | (not specified) | empty text box, blank label `:`; the grid's picture column cell is empty | displays blank |

The grid row 1 (`1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00`) agrees with the form values.

### Order 2 (row-number cell `2`; `t5-07`; `snapshot-t5-04-runtime-order-2-fields.yml`)

| Field | Expected (brief) | Observed (accessibility value) | Match |
|---|---|---|---|
| Order Number | 2 | `2` | yes |
| Customer ID | FX002 | `FX002` | yes |
| Customer Name | Factory test two | `Factory test two` | yes |
| Address | 2 Factory Street | `2 Factory Street` | yes |
| Item | eggs | `eggs` | yes |
| Item Description | cage free | `cage free` | yes |
| Cost | 6.99 | `6.99` | yes (display string) |
| Count | 1 | `1` | yes |
| Order Total | 6.99 | `6.99` | yes (display string) |
| FX_ItmsPicture | (not specified) | empty text box, blank label `:` | displays blank |

The grid row 2 (`2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99`) agrees with the form values. The status bar read `(Object 2 of 2)` after the move. Save stayed disabled.

### Interpretation limits on the numbers (T5)

- Cost and Order Total are displayed with two decimals (`45.00`, `90.00`, `6.99`). The display string matches the brief exactly. The **underlying stored numeric values were not read** (the UI shows a formatted string). Numeric equality beyond the display (for example, that Order Total is exactly Count × Cost in the database) is **not established** by this check. The derived Order Total value (`90.00` = `2 × 45.00`; `6.99` = `1 × 6.99`) agrees arithmetically with the displayed inputs only.
- The Item Description values come from the joined FX_ItmsDescription property; the Customer Name and Address from the joined FX_CusName and FX_CusAddress properties (the EXP-078 / EXP-079 joins). The join itself is not re-verified here; only the displayed values are.
- The FX_ItmsPicture field shows **no value**. An empty Edit is consistent with no stored image bytes or with a binary value that the text box cannot render. The check does not distinguish these; it records only that nothing was visible.

### Close (once)

- The runtime tab's control `Close Panel FX_Orders` (one click). **No save prompt appeared**; no "Save new record" prompt; so no No answer was needed or given. The tab closed; the URL returned to `favoriteContext=IdoProperties`; the IDO Properties tab (the pre-existing runtime tab) remained (`t5-08`).

### Designer

- Not selected, not closed, not saved in T5. FX_Orders in the Designer (tab 0) remains open and clean as left by T4.

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
|---|---|---|---|
| AC-4 | **Supported (observed; same session; UI and accessibility level).** One blank-criteria query (F4 once) returned exactly two orders; order 1 and order 2 match the brief's field values as displayed; FX_ItmsPicture display recorded (blank); nothing typed into a runtime field, saved, or chosen; runtime closed once with no prompt. | `t5-02` to `t5-08`; `snapshot-t5-02`, `-03`, `-04` | Display strings; underlying numerics not read; the picture value is blank but its underlying data is not established; Customer Name/Address/Item Description joins observed as displayed values only. Same session; not database durability. |
| AC-5 | Partial: runtime part recorded here; the final report is the T5 report and the cumulative audit below. | — | — |

### Action audit (T5; exact counts; this task only)

| Operation | Count | Notes |
|---|---|---|
| `browser_tabs` list | **1** | Before the first select. |
| `browser_tabs` select | **1** | Tab 1 (Web Client). Tab 0 (Designer) not selected. |
| Untargeted snapshots | **4** | `snapshot-t5-01-webclient-start-fresh.yml`; `snapshot-t5-02-runtime-fx-orders-after-open.yml`; `snapshot-t5-03-runtime-after-f4-row1-fields.yml`; `snapshot-t5-04-runtime-order-2-fields.yml`. |
| `browser_find` (read-only) | **8** | Gate (`Session Expired`/sign-in/banner); `Select Form` (no match); menu locate; Select Form dialog locate; Select Form row and OK locate; `Filter in Place` locate; pre-close `Close Panel`; post-close check. |
| Element clicks (successful / failed) | **7 / 0** | (1) Form menu; (2) Form > Open; (3) Select Form FX_Orders row (selection); (4) Select Form OK (one); (5) Filter in Place toolbar button (once); (6) grid row-number cell `2` (navigation); (7) `Close Panel FX_Orders` (once). |
| `browser_type` | **1** | The Select Form picker's Filter field (`FX_Orders`, one fill). **Not a runtime field.** |
| Key presses | **2** | Tab ×1 (commit the picker filter); F4 ×1 (the query). |
| Waits / coordinate or wheel / hover / drag | **0 / 0 / 0 / 0** | None. |
| Screenshots | **8** | `t5-01` to `t5-08`. |
| **Total browser calls in T5** | **32** | 2 tab + 4 snapshots + 8 finds + 7 clicks + 1 type + 2 keys + 8 screenshots. |
| Runtime FX_Orders open / F4 / close | **1 / 1 / 1** | Form > Open > Select Form OK (one); F4 once; Close Panel once. |
| Runtime save-prompt answered No | **0** | No prompt appeared. |
| Runtime records typed / edited / saved / deleted / New / list values chosen | **0 / 0 / 0 / 0 / 0 / 0** | None. |
| Runtime criterion changes | **0** | Blank criteria left blank; the add-mode placeholder `3` was cleared by the FiP switch, not typed over. |
| Designer actions (select, close, save, reopen) | **0** | The Designer tab was not selected. |
| Designer Save count (cumulative) | **1 of 1** | Used in T3; not invoked again. |
| Strings created / prompts / OK | **0 / 0 / 0** | None in T5. |
| Component or Caption-reference edits | **0 / 0** | None. |
| IDO, property, class, SQL, checkout, FormSync, deployment | **0** | None. |
| Re-login / session-expiry / portal navigation | **0 / 0 / 0** | Session usable; no sign-in. |
| Refresh / restart / direct URL navigation | **0 / 0 / 0** | None. |
| Browser JavaScript / evaluate / run-code / console / network (worker-authored) | **0** | None. The tool output's console line (`29 errors, 2 warnings`) was read as a count only; it was not inspected. |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | None. |
| Native browser dialogs | **0** | None. |
| Portal banner dismissals | **0** | None visible. |

**Cumulative for EXP-083 (T1 + T2 + T3 + T4 + T5):** browser calls 28 + 77 + 9 + 27 + 32 = **173**. Strings created **3 of 3**; prompt Yes **3 of 3**; String OK **3 of 3**; **Designer Save 1 of 1**; **Designer close 1 / reopen 1**; **runtime open 1 of 1**; **F4 1 of 1**; **runtime close 1 of 1**; component edits **0**; Caption-reference edits **0**; runtime edits **0**; IDO changes **0**; checkout actions **0**; re-logins **0 of 1** (0 used).

### Worker-written-file inventory (T5)

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (edited: status header; T5 section appended).
- `evidence/EXP-083/snapshot-t5-01-webclient-start-fresh.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t5-02-runtime-fx-orders-after-open.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t5-03-runtime-after-f4-row1-fields.yml` (created by the snapshot tool).
- `evidence/EXP-083/snapshot-t5-04-runtime-order-2-fields.yml` (created by the snapshot tool).
- `evidence/EXP-083/t5-01-webclient-start-usable-before-open.png` (created).
- `evidence/EXP-083/t5-02-select-form-dialog-before-fx_orders-choice.png` (created).
- `evidence/EXP-083/t5-03-select-form-filter-fx_orders-one-row.png` (created).
- `evidence/EXP-083/t5-04-runtime-fx_orders-opened-before-f4-mode.png` (created).
- `evidence/EXP-083/t5-05-runtime-fx_orders-after-fip-criteria-blank.png` (created).
- `evidence/EXP-083/t5-06-runtime-after-f4-blank-criteria-query-result.png` (created; order 1 is the visible record).
- `evidence/EXP-083/t5-07-runtime-order-2-fields.png` (created).
- `evidence/EXP-083/t5-08-runtime-fx_orders-after-close-once-no-prompt.png` (created).

Tool-generated, not worker-authored: `evidence\playwright\` page and console files (outside the EXP-083 path; the operator's git review is authoritative).

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
|---|---|---|---|
| `t5-04` (viewed) | Runtime FX_Orders tab; new-row star on row 1; Order Number `3` placeholder; status `Order Number (Object 1 of 1)`; FiP not active | The **initial mode** was Add mode (the status bar did not show Filter in Place) | That `3` is a stored value (it is an add-mode placeholder) |
| `t5-05` (viewed) | Status bar `Filter in Place`; all criteria blank; FiP tooltip | The mode after the switch; criteria blank before F4 | That the criteria are blank in the database |
| `t5-06` (viewed) | Grid rows 1 and 2; order 1 fields: 1, FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, 2, 90.00; status `Customer ID (Object 1 of 2)`; picture field blank | **AC-4**: exactly two rows after one F4; order 1 values as displayed; picture blank | The stored numeric values; the picture's underlying data |
| `t5-07` (viewed) | Order 2: 2, FX002, Factory test two, 2 Factory Street, eggs, cage free, 6.99, 1, 6.99; status `(Object 2 of 2)`; picture blank | **AC-4**: order 2 values as displayed; picture blank | As `t5-06` |
| `t5-08` (viewed) | IDO Properties tab only; no FX_Orders tab; no dialog; status `Filter in Place` | **AC-4**: runtime closed once with no prompt | That the Designer state (not touched) |

Snapshot readbacks (`snapshot-t5-03`, `snapshot-t5-04`) give the exact accessibility values listed above. Screenshots and readbacks agree.

### Limitations (T5)

- The check is a read-only same-session UI observation of the runtime. It is not database durability and not replay verification.
- The picture field's blank display is recorded as observed. Whether the field is blank in the database, or holds a binary the Edit cannot display, is not established.
- Display formatting (two decimal places) is observed; underlying numeric equality is not established.
- The Select Form picker's filter was typed (a picker field, not a runtime field); the first filter value `IdoCollections` was replaced.
- The IDO Properties runtime tab that was already open before T5 remains open; T5 did not touch it.

### Open questions and next permitted action (T5)

1. **No blocker in T5.** The runtime query returned exactly two orders; both match the brief as displayed; the picture field is blank; the runtime closed once with no prompt.
2. The Designer FX_Orders remains open and clean (from T4). The IDO Properties runtime tab (pre-existing) remains open.
3. **Remaining for the EXP-083 final acceptance report (AC-5):** the final report consolidating AC-1 to AC-4, this cumulative audit (173 calls) and the inventory. No further browser action is authorized by T5.

Classification remains **observed only, NOT replay_verified**.

---

## T6 — final documentation and audit reconciliation (cycle 5; zero browser calls; zero Mongoose changes)

- Task T6, cycle 5, worker session `e48b52d0-6ce1-4953-a67f-d116e525169c`, task_message_id `6f53749d-3025-4577-b7c7-2a12420b18ff`, run `R-20261014-112529-I6l8`. Date 2026-10-14.
- Tools used: Glob, Grep and Read (repository and evidence files) and Write (the report). No browser call of any kind.
- Full report: `evidence/EXP-083/T6-final-acceptance-report.md` (acceptance matrix with exact postconditions, evidence paths and limitations; reconciliation; complete inventory; discrepancies D1–D12; final state; knowledge states).

### Consolidated browser calls (controller-reconciled)

| Task | tabs list | tabs select | snapshots | finds | clicks | type | keys | screenshots | Total | Controller actions / reads |
|---|---|---|---|---|---|---|---|---|---|---|
| T1 | 1 | 1 | 3 | 9 | 8 | 1 | 1 | 4 | **28** | 11 / 17 |
| T2 | 1 | 1 | 5 | 30 | 22 | 4 | 4 | 10 | **77** | 31 / 46 |
| T3 | 1 | 1 | 1 | 3 | 1 | 0 | 0 | 2 | **9** | 2 / 7 |
| T4 | 1 | 1 | 3 | 9 | 9 | 0 | 0 | 4 | **27** | 10 / 17 |
| T5 | 1 | 1 | 4 | 8 | 7 | 1 | 2 | 8 | **32** | 11 / 21 |
| **Total** | **5** | **5** | **16** | **59** | **47** | **6** | **7** | **28** | **173** | — |

28 + 77 + 9 + 27 + 32 = **173**. The controller audits (`harness-audit-T1.md` to `-T5.md`) match the worker columns exactly for every tool name and every task total. No navigate, evaluate, run-code, wait, console, network, mouse, hover, drag, file or dialog-handle call appears in any audit.

### Category reconciliation (worker against controller)

| Category | Count | Controller evidence |
|---|---|---|
| Strings created / prompt Yes / String OK / Tab commits before OK | 3 / 3 / 3 / 3 | T2 audit: Yes clicks lines 13, 32, 50; OK lines 22, 41, 59; Tab keys lines 18, 37, 55 (after fills at 17, 36, 54) |
| Designer Save | 1 | T3 audit line 28 (the only Save click) |
| Designer close / reopen | 1 / 1 | T4 audit line 27 (Form-tab close); lines 11 and 13 (Form menu and recent-forms entry) |
| Runtime open / F4 / runtime close | 1 / 1 / 1 | T5 audit lines 11, 20, 21 (open); line 29 (F4); line 42 (close Panel) |
| Runtime edits / component edits / Caption-reference edits / IDO changes / checkout actions / re-logins | 0 / 0 / 0 / 0 / 0 / 0 | No type call into a runtime, component, Caption or IDO field; no checkout or sign-in element in any audit |

No category shows a worker/controller mismatch.

### Type and key calls, explained

- **T1 (1 type):** the Global Objects Strings filter `FX_s`, slow typing, for the strings gate.
- **T2 (4 types):** three String Value fills (`Customer Name`, `Item Description`, `Order Total`), each committed with Tab before OK; one Strings filter `FX_s` for the readback. Control+a precedes each filter entry (T1 line 26; T2 line 68).
- **T5 (1 type):** the Select Form picker's filter `FX_Orders`, committed with Tab, before the runtime opened. This is a dialog field, not a runtime field. The controller flags it (D9). After F4 there was no keystroke.

### Discrepancies and deviations (listed, not corrected)

- D1 — the T3 total was first written as 8 (cumulative 113) and corrected in the record to 9 (cumulative 114) during T3. The controller confirms 9. Resolved.
- D2 — the T2 find count (30) was reconstructed by the worker. The controller confirms 30. Resolved.
- D3 — the controller's "prohibited-tool hits" equal the browser_type count (T1 1, T2 4, T5 1). Each call is accounted for above. None is an error.
- D4 — the T1 controller error is a non-browser Read of the record path before the file existed. Not a browser error.
- D5 — the controller's "exact values" list is identical in all five audits, including T3 and T4 which typed nothing. Read as the run's expected-value set, not as typed content. Mismatches 0 in every audit.
- D6 — console counts were tool output only and were not inspected.
- D7 — tab selection and the first snapshot were issued in one response block in each task; the controller records them sequentially.
- D8 — the T1 recent-forms open was not repeated because FX_Orders was already open.
- D9 — the T5 typed Select Form picker filter and one picker row selection, before the runtime opened. Coordinator decision against the AC-4 "nothing typed" wording.
- D10 — the T5 Web Client Form menu was used while the pre-existing IDO Properties tab was active; no IDO field was touched.
- D11 — the Designer URL lost `MGForm=FX_Orders` after the T1 Global Objects Cancel and regained it after the T4 reopen. No navigation call exists; the cause is not established.
- D12 — Cost and Order Total are verified as displayed strings only; stored numbers were not read.

### Acceptance matrix (summary; detail in the report)

| AC | Result | Principal evidence | Principal limitation |
|---|---|---|---|
| AC-1 | Supported (observed) | `t1-01` to `t1-04`; `snapshot-t1-01`, `-02`, `-03`; `snapshot-t2-01` | Name-column absence; Form-menu open not repeated (D8) |
| AC-2 | Supported (observed) | `t2-01` to `t2-06` (prompts and pre-OK dialogs); `t2-07` to `t2-10` (readbacks) | Client-side until the T3 Save; same-session readback |
| AC-3 | Supported (observed), with qualifications | `t3-01`, `t3-02`; `t4-01` to `t4-04`; `snapshot-t3-01`, `snapshot-t4-01`, `-03`, `-04` | Native message names "Global object(s)"; 31-component check at identity level; reopen may reflect client cache |
| AC-4 | Supported (observed), with qualifications | `t5-04` to `t5-08`; `snapshot-t5-02`, `-03`, `-04` | Display strings only; picture blank rendering is not proof of absent data; picker typing (D9) |
| AC-5 | This T6 report and the record | `T6-final-acceptance-report.md` | — |

### Worker-written-file inventory (T6 reconciliation; full list in the report §5)

- `experiments/EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md` (edited in T6: status header; this T6 section).
- `evidence/EXP-083/T6-final-acceptance-report.md` (created in T6).
- Cumulative from T1–T5 (verified by Glob): 16 snapshot YAML files and 28 screenshot PNG files under `evidence/EXP-083/`. Counts per task: snapshots 3 / 5 / 1 / 3 / 4; screenshots 4 / 10 / 2 / 4 / 8.
- Controller-generated, not worker-written: `evidence/EXP-083/harness-audit-T1.md` to `harness-audit-T5.md`.

### Final state (last observed; no browser call in T6)

- Designer: FX_Orders open, clean at its last observation (T4), User scope; Save count 1 of 1; the Designer was not selected in T5.
- Web Client: selected at the end of T5; the pre-existing IDO Properties tab shown; the FX_Orders runtime closed; no dialog.
- Unresolved items (not claimed): server-side or database persistence; whether the reopen used a client cache; stored numeric values; image data behind the blank picture; the join mechanism; the cause of the raw-to-resolved caption change; the cause of the URL change (D11); the Undo-disabled-with-Save-enabled state observed at the end of T2; property-level equality of the 31 components.
- Repository confinement is supported by the worker and controller inventories; operator git review is authoritative.

### Recommendation

**ACCEPTED AS OBSERVED** (same session; UI and accessibility level) for coordinator review, with the qualifications above. Not replay_verified. No database-durability claim. The coordinator's decision points are D9 and the depth of the 31-component check.

Classification remains **observed only, NOT replay_verified**.

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 6, steps 1, 2 and 4, is complete: the captions are fixed, and the joins and the derived total work at runtime. The operator decided acceptance.

- Run R-20261014-112529-I6l8 completed as accepted after 6 worker tasks, with no pauses.
- Changed, for later cleanup:
  - **Strings** (tenant-wide, User version), created through the Caption ellipsis with one Yes to each "does not exist. Create it?" prompt and each value Tab-committed before OK:
    - `FX_sCustomerName` = `Customer Name`
    - `FX_sItemDescription` = `Item Description`
    - `FX_sOrderTotal` = `Order Total`
  - **Form `FX_Orders` (User scope):** one Designer Save ("Global object(s) were saved."). No component changed (31 components).
- Screenshots viewed by the operator assistant:
  - `t4-03`: after the close/reopen, the Designer canvas shows Order Number*, Customer ID*, Customer Name, Address, Item*, Item Description, Cost, Count and Order Total. Scope is User and Save is disabled.
  - `t5-06`: the runtime FX_Orders after one blank-criteria query, order 1 of 2: FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / Cost 45.00 / Count 2 / **Order Total 90.00**.
  - `t5-07`: order 2 of 2: FX002 / Factory test two / 2 Factory Street / eggs / cage free / Cost 6.99 / Count 1 / **Order Total 6.99**.
  - The picture field is an empty grey box with a lone ":" caption.
- Accepted deviation:
  - The T1 recent-forms open was not repeated, because FX_Orders was already open and clean (D8).
- Flagged `browser_type` calls, all authorized: the Strings filter ×2, the String Value ×3 and the Select Form filter.
- Counts:
  - strings 3, prompt Yes 3, String OK 3, Designer Save 1, Designer close/reopen 1;
  - runtime open 1, F4 1, runtime close 1;
  - component edits 0, runtime edits 0, IDO changes 0, checkout actions 0, re-logins 0.
- Findings (observed):
  1. **The joins work at runtime:** the joined Customer and Item fields show the customer and item values for each order.
  2. **The derived property is evaluated at runtime:** `FX_Count * FX_ItmsCost` gives 90.00 (2 × 45.00) and 6.99 (1 × 6.99). This is the first runtime evidence for the EXP-080-R3 expression.
  3. **Joined and derived fields are read-only at runtime:** they render greyed, as do Order Number and the picture field. Customer ID, Item and Count stay editable.
  4. **Captions after the Save:** the raw IDs remain on the canvas until the Form is closed and reopened.
  5. **The Binary picture property bound to an Edit shows nothing.**
- Limits:
  - Same-session UI evidence only.
  - The values are shown, not checked against the database.
- Confinement (git status): only `evidence/EXP-083/` and this record were written by the run.
- Next: EXP-084, Section 6 steps 3 and 7:
  1. Delete FX_ItmsPictureStatic, chosen by its exact name.
  2. Make FX_ItmsPictureEdit Type Static, with an explicit size and location and No Colon True, and Image Only if it is offered.
  3. Save, then check at runtime that the dumbbell and eggs pictures show.
