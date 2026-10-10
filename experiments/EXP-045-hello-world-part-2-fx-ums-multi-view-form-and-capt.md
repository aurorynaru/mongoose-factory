# EXP-045 — Hello World Part 2: FX_UMs Multi-View Form and Caption Strings

**Current status (final: T17, cycle 22; documentation audit): OBSERVED ACCEPTED WITH LIMITATIONS. NOT replay_verified.** Every mandatory acceptance check (AC-1 to AC-10 and AC-12) has recorded support; AC-11 (optional) is observed. The FX_UMs User-scope Form was created by one Finish (T3), its Caption associations were saved by one ordinary Designer Save (T13), and recovery was observed after one clean close and reopen (T14). `FX_sUM` = `Unit of Measure` and `FX_sDescription` = `Description` are read in the Global Objects client view. The T10 "committed and retained" claim for `FX_sUM` is **SUPERSEDED**; the T11 read and the T12 correction are the controlling history (see the T17 section). Database-level durability, cross-session recovery and replay verification were **not** established. Final AC matrix: section "T17" below. Evidence reconciliation: `evidence/EXP-045/t17-final-evidence-matrix.md`. Cleanup inventory: `evidence/EXP-045/cleanup-inventory.md`.

Earlier status (T15, cycle 19): OPTIONAL runtime check performed. Web Client preflight passed (authenticated; no sign-in, banner or unsaved-change prompt). FX_UMs was opened ONCE through the native Web Client Select Form (toolbar Open; filter `FX_UMs`, Name, both boxes unchecked; one row FX_UMs/FX_UMs; OK once). The runtime FX_UMs Form rendered the captions `Unit of Measure` (column header and field label) above `Description`, with empty fields and Save disabled. No record was entered, saved or deleted. AC-11 is OBSERVED (optional, non-gating). The runtime observation does not establish record content or database state. Form left open read-only in the Web Client; Designer untouched. Classification: observed only, not replay_verified.**

Earlier status (T14, cycle 18): ONE ordinary close and ONE reopen of the FX_UMs Form were performed. The Form tab closed without a prompt; the Designer then showed the vendor `IdoPropertyClasses` view (Save disabled). FX_UMs was reopened once through the Designer Form menu's single `FX_UMs` entry (Select Form search NOT used; deviation recorded). Recovered and observed: Name FX_UMs, User version, User scope, Primary Collection FX_UMs, Save disabled, Undo disabled, no dialog; FX_UMStatic Caption `FX_sUM`; FX_DescriptionStatic Caption `FX_sDescription`; bindings object.FX_UM / object.FX_Description; FX_UM above FX_Description. Global Objects (read-only, Cancel once): `FX_sUM` = `Unit of Measure`; `FX_sDescription` = `Description`. After reopen the canvas and grid headers show the literal captions `Unit of Measure` / `Description` (before close they showed raw IDs); cause not established. No Save, no Undo, no string edit, no runtime open. Classification: observed only, not replay_verified; no database-durability claim.**

Earlier status (T13, cycle 17): ONE ordinary Designer Save was performed after every pre-Save gate passed. Pre-Save read-only verification in Edit > String: `FX_sUM` = `Unit of Measure` and `FX_sDescription` = `Description` (one exact row each; Global Objects closed with Cancel). Form: `FX_UMs`, User scope, FX_UMStatic Caption `FX_sUM`, FX_DescriptionStatic Caption `FX_sDescription`, bindings object.FX_UM / object.FX_Description, FX_UM above FX_Description. Immediate Save result: Save became DISABLED; no alert; no dialog. Observed UI completion only: persistence across close/reopen has NOT been verified (next task). Classification: observed only, not replay_verified.**

Earlier status (T12, cycle 16): the operator-authorized correction of `FX_sUM` was performed once. The existing-string editor opened directly with no creation prompt (Name `FX_sUM`, String Value `FX_s UM`). The String Value cell was changed to `Unit of Measure`, committed with Tab (cell left edit mode), verified pre-OK, and OK was clicked once. Read-only Edit > String verification (Global Objects, filter `FX_sUM`, one row) now shows String Value **`Unit of Measure`**, so the correction is observed in the client view (corrected versus T11's `FX_s UM`). Global Objects closed with Cancel. No Designer Save (prohibited in T12); Save is still enabled and pending. FX_sDescription not touched in T12. Database persistence not established. Classification: observed only, not replay_verified. See the T12 section.**

Earlier status (T11, cycle 14): STOPPED before the Designer Save. Read-only verification in Edit > String (Global Objects, Strings filter): `FX_sDescription` = `Description` (correct). `FX_sUM` = **`FX_s UM`** (NOT `Unit of Measure`) — a stop condition. The T10 report that `FX_sUM` was committed with `Unit of Measure` is SUPERSEDED: the stored value was never verified in T10 and T11 shows it did not persist as required. Form identity (FX_UMs, User, Primary Collection FX_UMs), FX_UMStatic Caption `FX_sUM`, FX_DescriptionStatic Caption `FX_sDescription`, bindings and FX_UM-above-FX_Description order are visible. Designer Save is ENABLED and was NOT pressed; Undo disabled; no dialog (Global Objects closed with Cancel). Cause of the `FX_sUM` value mismatch is unresolved. Classification: observed only, not replay_verified. See the T11 section.**

Earlier status (T10, cycle 13; the `FX_sUM` "committed and retained" wording is **SUPERSEDED** by T11 and T17, see the T10 section): BOTH authorized string commits were executed through the Caption-dialog route, with no stop condition. `FX_sUM` (FX_UMStatic): the preserved editor's value was changed from the generated default `FX_s UM` to `Unit of Measure`, verified in the editor by fresh snapshot and screenshot, and OK was clicked once. The stored value was **not** read in T10 and was later found to be `FX_s UM` (T11). `FX_sDescription` (FX_DescriptionStatic): Caption ellipsis, prompt "String FX_sDescription does not exist. Create it?", Yes once, generated default `FX_s Description` replaced with `Description`, verified, committed with OK once. Both dialogs closed with no alert. The toolbar Save is now reported enabled (NOT pressed). Committed values are NOT yet verified through Edit > String (deferred to the next task). Undo state is unresolved (accessibility disabled; screenshot icon active). No Designer Save, close/reopen or runtime open. Classification: observed only, not replay_verified. See the T10 section.**

Earlier status (T9, cycle 11): STOPPED before commit. The FX_UMStatic Caption ellipsis raised the exact prompt "String FX_sUM does not exist. Create it?"; Yes was clicked once (amended route). The resulting String editor shows Name `FX_sUM` and a PRE-FILLED String Value `FX_s UM` (not blank, not `Unit of Measure`) — an immediate stop condition. No value was entered and nothing was committed (OK not clicked). The String dialog is left OPEN (its only controls are OK and Help). Whether the Yes click already created the tenant-wide `FX_sUM` resource is UNRESOLVED. FX_sDescription not touched. Save and Undo disabled. Classification: observed only, not replay_verified. See the T9 section.**

Earlier status (T8, cycle 9): the supported read-only String route WAS found: Edit menu > `String` opens a `Global Objects` dialog whose left `Strings` pane has a name filter. Using that filter (infix, case-insensitive; positive controls `Collection` and `_` matched), `FX_sUM` and `FX_sDescription` each returned NO rows, and `FX_` returned none. Both IDs are visibly absent from this list (observed; not a database read; scope not shown). The dialog was closed with Cancel. No create, value entry, Caption dialog, Save, close/reopen or prompt answer. Save and Undo disabled; FX_UMs open (User scope). Classification: observed only, not replay_verified. See the T8 section.**

Earlier status (T7, cycle 8): the inherited alert "Timeout expired waiting for response." was verified (single OK) and acknowledged ONCE with OK. No further prompt appeared. The Designer remains on the `FX_UMs` Form tab (User scope, Save and Undo disabled, no dialog); FX_UMStatic is still selected with Caption `FX_sUM`. The Designer URL is still `designer/default.aspx` (no `MGForm`). Whether FX_sUM was created by the earlier No click is still UNRESOLVED; FX_sDescription NOT inspected; no string created, no Caption dialog, no Save. Classification: observed only, not replay_verified. See the T7 section.**

Earlier status (T6, cycle 7): STOPPED. The inherited prompt "String FX_sUM does not exist. Create it?" was verified and declined ONCE with No. The product then showed the in-page alert "Timeout expired waiting for response." (OK). Per the brief, STOP: OK was not clicked, FX_DescriptionStatic was not selected, FX_sDescription was not opened. Whether FX_sUM was created or changed by the No click is UNRESOLVED. Save and Undo disabled. The Designer URL changed from `?MGForm=FX_UMs` to `designer/default.aspx`. Classification: observed only, not replay_verified. See the T6 section.**

Earlier status (T5, cycle 5): FX_UM label component IDENTIFIED and selected (`FX_UMStatic`, Static, Pane 1, Tab 3) through the Components grid Expand route. Its Caption ellipsis dialog was opened once and raised the Mongoose prompt "String FX_sUM does not exist. Create it?" (Yes / No). The prompt was NOT answered (unexpected creation prompt during a read-only step); no string was created or changed; the FX_sUM value was not read; FX_Description label NOT inspected. Save and Undo disabled. Classification: observed only, not replay_verified. See the T5 section.**

Earlier status (T4, cycle 3): READ-ONLY label inspection STOPPED before any Caption dialog. The FX_UM label component could not be selected through a supported route (the canvas label click was intercepted by a design adorner; the Details → Components tree did not expand with ArrowRight). No Caption dialog was opened; no value, string, Save, close or reopen occurred. Save and Undo remain disabled. Caption resolution for FX_sUM and FX_sDescription is still UNRESOLVED. Classification: observed only, not replay_verified. See the T4 section.**

Earlier status (T3, cycle 2): ONE Finish was pressed. It returned "Process Completed Successfully" (one OK). The generated Form `FX_UMs` opened in the Designer in User scope (Name `FX_UMs`, Version "User version for user anton.ramos@3mworks.com.ph"), with Save disabled and labels showing the raw IDs `FX_sUM` and `FX_sDescription`. A Select Form check after creation shows exactly one `FX_UMs` row. No Caption dialog, string change, Designer Save, or close/reopen has occurred. The Form is NOT yet verified for captions, durability or reopen. Classification: observed only, not replay_verified. See the T3 section.**

Earlier status (T2, cycle 1): T2 COMPLETE — the Classic → Multi-View wizard was configured (Name `FX_UMs`, Data Source `FX_UMs`, default properties accepted, FX_UM moved above FX_Description with one up-arrow operation, Save Template unchecked) and STOPPED BEFORE FINISH. No Form created; no Finish, Save, Caption dialog or string commit. The wizard is open on its final page with Finish visibly enabled and not pressed. Classification: observed only, not replay_verified. See the T2 section.**

Earlier status (T1, cycle 0): T1 COMPLETE — read-only preflight and collision gates. No creation, no wizard, no Finish, no Save, no string change, no Caption dialog. Preflight PASS (with limits). Select Form gate PASS for the visible inventory (positive control `FX_HelloWorld01` returned its row; exact `FX_UMs` returned zero rows). No supported read-only string-ID lookup was found; the string state of `FX_sUM` and `FX_sDescription` is NOT established by T1. Form creation is NOT authorized by T1. Classification: observed only, not replay_verified.**

Run: `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 0 · task T1
Worker session: `9f2fb920-cc07-4930-b468-a5c8910aab86` · task_message_id `d8424a8f-36a2-4f51-bca2-42a33bb23436`
Date: 2026-10-10. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Forms stay in User editing scope; the IDO, SQL table and any string resources are tenant-wide.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; signed-in user `anton.ramos@3mworks.com.ph`.
Evidence directory: `evidence/EXP-045/`.

## Scope of T1 (from the bounded instruction)

Read-only preflight of the Web Client and Designer; the Select Form collision gate with a positive control; a single supported read-only string lookup attempt; and this record. **Not in T1:** wizard, Finish, Save, Form creation, string creation, Caption dialogs, Designer Form open, check-in/check-out, Web Client runtime open of FX_UMs, cache unload, FormSync.

## Sources read (T1)

- `AGENTS.md`: taken from the authoritative text supplied in the task message (FX_ scope extension; experiment rules; recovery and evidence rules). Not re-read from disk in T1.
- `docs/mongoose/transcripts/hello-world-pt2.md`, transcript lines `[5:09]`–`[6:06]` (the Form section): wizard Next/Finish; position `um` to the top; Caption ellipsis on the UM label, value `Unit of Measure`, OK, Save. Trust: unverified speech-to-text transcript; the file's own caveats (Site Default and global objects are not authorized here) stand. The transcript also narrates `s description` for the Description label string ID; the required literal values for this experiment are the brief's `Unit of Measure` and `Description`.
- `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md`: read through its T3 section (Multi-View route; Name by one plain `browser_type` fill; Data Source trigger; Next to page 2). Relevant result for later tasks: **no Save Template control was present on the Multi-View page 1 or page 2 reached in EXP-041-R3 T3**; Finish is on the later page, which R3 did not reach. Save Template presence on the final page is therefore unobserved.
- `experiments/EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md`: the outcome block and the first ~548 lines (accepted outcome; FX_UMs IDO on FX_UMBase; FX_UMs SQL table). Remaining EXP-044 history was not read in T1.
- The EXP-041-R2 and EXP-041-R3 records were read in part; the EXP-041-R2 Name-combobox blocker is recorded there (key-event Name entry rejected; plain fill accepted in R3).

## AC-1 — Preflight (T1: PASS with limits; no mutation)

| Item | Evidence | Finding |
|---|---|---|
| Web Client usable and authenticated | Tab 0 `Mongoose` (portal `mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/...`). Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-04`, `t1-05`). No sign-in or configuration prompt. Portal notification banner: not visible. | Observed. |
| Designer usable, DEM configuration | Tab 1 title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. Designer Help → About was **not** re-opened in T1; the EXP-041-R3 About text (Site Developer; user versions for the operator) is cited, not re-observed. | Observed (title); About text carried from EXP-041-R3, not re-observed. |
| User editing scope | Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (`t1-01`). | Observed. |
| Existing checked-in `FX_UMs` IDO | Web Client IDOs tab (`t1-04`): IDO Name `FX_UMs`; Project Name `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By empty; Access As `G6R`; Check Out enabled; Undo Check Out disabled; Save disabled. Label String ID and Caption both `oFX_UMs`. | Observed; consistent with EXP-044 T12 (Revision 2, checked in). |
| IDO user-defined properties | Properties grid (`t1-04`): `FX_UM` (sequence 1; Property Class `FX_UMBase`; Bound to Column; Key Sequence 1; Required checked); `FX_Description` (sequence 2; Bound to Column; String; 50; nvarchar). Seven system properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) are present. | Observed. The IDO's FX_UM local Data Type cell is blank (inheritance; EXP-044 T9 and T12). |
| Existing `FX_UMBase` association | Web Client Property Classes tab (`t1-05`): Class Name `FX_UMBase`; Revision No `1`; **Locked By `anton.ramos@3mworks.com.ph` (still checked out)**; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; **Label String ID `FX_sUM`**; Check In enabled. | Observed. The class was not edited, saved, checked in or checked out in T1. |
| Vendor `IdoPropertyClasses` Designer design view, Save disabled | Tab 1 (`t1-01`): Form Name `IdoPropertyClasses`; Caption `fPropertyClasses`; Save disabled; Undo disabled; no dialog. The Designer Form tab is the vendor Form only. | Observed; unchanged by T1. |
| Clean state before any action | Web Client: the leftover runtime tabs `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns` were open, with `Sql Columns` selected (the EXP-044 state). No dialog. Save disabled. Designer: no Form-wizard open; no dialog. | Observed. Leftover tabs were not changed beyond tab selection. |
| Repository baseline | Branch `claude-harness`. Session-start git status (harness context; Bash is disabled and no git command was run): modified `tools/learning-harness/*` files (pre-existing, not touched); recent commits `a88b5df` (EXP-045 approved brief), `44dbc02` (EXP-045 draft brief), `bc5c30b` (AGENTS.md FX_ string scope), `09ee9ad` (EXP-044 accepted), `2ae8f06` (EXP-044 approved brief). The harness computes confinement itself. | Carried from session start; not re-computed in T1. |

Limitations of AC-1: the Designer's "Site Developer" role and the About text were not re-observed in T1; the portal footer (`2026.10.01`) and Designer About (`2026.10.13`) versions remain unreconciled (as in EXP-041 and EXP-044); the Designer tab's console shows **1 error** (not diagnosed in T1; the Web Client shows 0 errors).

## AC-2 — Select Form collision gate (T1: PASS for the visible inventory)

Mechanism: Web Client toolbar `Open` → Select Form dialog. Filter By = **Name**; **Case Sensitive** and **Starts With** unchecked (verified by absence of `[checked]` in each dialog snapshot). Each query: click the Filter textbox, Control+a, `browser_type` with `slowly: true` (key events), wait 2 seconds, dialog snapshot and screenshot. The dialog's leftover filter `SqlTables` (from the previous session, two rows) was **not** used as a result; it was replaced before any reading.

| # | Criterion (Name, key events) | Role | Settled result | Evidence |
|---|---|---|---|---|
| C1 | `FX_HelloWorld01` | Positive control (known-existing User-scope Form from EXP-041-R3) | **1 row:** Caption `FX_HelloWorld01` / Name `FX_HelloWorld01` (row highlighted; not activated; Cancel used) | `t1-02-select-form-positive-control-FX_HelloWorld01-settled.png` |
| T1 | `FX_UMs` (exact) | Target | **0 rows.** Grid empty after the 2 s settle; Filter text `FX_UMs`; Filter By Name; both checkboxes unchecked | `t1-03-select-form-target-FX_UMs-exact-settled-zero-rows.png` |

Gate result: **PASS (visible inventory).** The positive control passed in the same session, so the filter executed. The target showed no row under the same settings.

Limitations (recorded, not claimed as proven):
- The Select Form dialog shows **no scope column** (Caption and Name only). Scope of any row, and scope-complete absence (Site Default, Group, other users), is not shown.
- No total count is displayed. The claim is limited to "the filtered result as displayed".
- Case-insensitive matching was **not** re-tested in T1 (the EXP-041-R3 infix control `testblank` was not repeated). Case variants of `FX_UMs` are therefore not demonstrated absent in this session.
- Single session, single run; not a database read.

## AC-3 — String-resource state (T1: NOT established; no supported read-only ID lookup found)

- Select Form filter `String` (key events; settled after 2 s) returned **one** Form: `Export/Import Strings` / `ExportImportStrings` (dialog snapshot excerpt in `evidence/EXP-045/t1-gate-and-lookup-observations.md`; no screenshot was saved for this step).
- That Form was opened once (Select Form OK). It is an **export/import utility**, not a string-ID view: its controls are a `Source` language combobox, `Target` radios (`Include Only Untranslated`, `Include All`), `Export` and `Preview` buttons, and `Export`/`Import` radios. The grid columns are `String Name`, `Translated String`, `Description`, `Target Language`, `Form Name`, and it showed `Displaying 1 - 1 of 1` with an empty row.
- The `Source` combobox list was opened once and read: it contains **language codes only** (`ar-SA` … `zh-TW`). No ID filter is offered. The list was collapsed with its own trigger.
- The Form was **not** used for Preview, Export or Import. The Form tab was closed with its Close Panel control; no prompt appeared.
- **Conclusion:** no supported read-only ID-level string lookup was found in the Web Client. The brief's instruction ("if none is found, record that and do not search further") is applied. The `FX_sUM` and `FX_sDescription` state is therefore **unresolved** after T1.
- The required pre-creation check for AC-3 must come from the **Caption ellipsis dialogs** in the creation task, before any string commit. Each dialog must show the ID and whether a conflicting value would be affected. Any conflicting value blocks that mutation.

Observation carried forward (not a string-state finding): the `FX_UMBase` Property Class's Label String ID is **`FX_sUM`** (`t1-05`). Because the generated UM label may inherit that Label String ID, the Caption dialog for the UM label may already show a reference to `FX_sUM`. Whether the string resource exists, and what value it has, is unresolved and must be read in the Caption dialog. The IDO's Caption `oFX_UMs` is an IDO caption, not a Form string. EXP-044 T7 recorded the wizard row label `FX_sDescription` as "reference only"; that is carried from EXP-044 and not re-observed in T1.

## Operations (T1, in order)

| # | Operation | Result | Evidence |
|---|---|---|---|
| 1 | Tab list; Web Client snapshot (tab 0 selected, `Sql Columns`) | Portal `Mongoose` tab; runtime tabs listed; no dialog; Save disabled | snapshot (tool-generated) |
| 2 | Select tab 1 (Designer); fresh snapshot | Vendor `IdoPropertyClasses` design view; User scope; Save disabled | snapshot |
| 3 | Screenshot Designer | Designer state | `t1-01` |
| 4 | Select tab 0 (Web Client); fresh snapshot (depth 6) | Web Client state as in step 1; `f1e25` = toolbar `Open` | snapshot |
| 5 | Click toolbar `Open` (`f1e25`) | Select Form dialog opened with leftover filter `SqlTables` (two rows; not used) | — |
| 6 | Find "Select Form"; targeted snapshot of dialog `f1e513` | Dialog present; Filter `SqlTables`; Filter By Name; boxes unchecked | — |
| 7 | Click Filter textbox (`f1e549`); Control+a; type `FX_HelloWorld01` (slowly); wait 2 s; dialog snapshot; screenshot | **C1 settled: 1 row (FX_HelloWorld01)** | `t1-02` |
| 8 | Click Filter textbox; Control+a; type `FX_UMs` (slowly); wait 2 s; dialog snapshot; screenshot | **T1 settled: 0 rows** | `t1-03` |
| 9 | Click Cancel (`f1e570`) | Dialog closed; no row activated | — |
| 10 | Find "Open"; click `Open` (`f1e25`) | Select Form reopened; leftover filter `FX_UMs` | — |
| 11 | Click Filter; Control+a; type `String` (slowly); wait 2 s; dialog snapshot | **1 row: Export/Import Strings / ExportImportStrings** | — |
| 12 | Click row `Export/Import Strings`; click OK (`f1e568`) | Form `ExportImportStrings` opened in a runtime tab (`favoriteContext=ExportImportStrings`) | snapshot |
| 13 | Read the Form (snapshot); find "Source"; click the Source `Open` trigger | Source language list opened (language codes only) | snapshot; find |
| 14 | Find regex option list (read); click the Source `Open` trigger again | List collapsed (same trigger) | — |
| 15 | Click `Close Panel Export/Import Strings` (`f1e590`) | Runtime tab closed; no prompt; Web Client back on `Sql Columns` | snapshot |
| 16 | Click `IDOs` runtime tab (`f1e100`); snapshot of tab panel | IDOs tab shown; `FX_UMs` record and properties read | `t1-04` (screenshot after the snapshot) |
| 17 | Click `Property Classes` runtime tab (`f1e97`); find "FX_UMBase" | Property Classes tab shown; FX_UMBase row read | — |
| 18 | Screenshot Property Classes tab | FX_UMBase row and form read | `t1-05` |

Note on tool output: each browser action's result includes a "Ran Playwright code" wrapper generated by the Playwright MCP tool itself (for example `page.keyboard.press('Control+a')`). These are tool-generated representations of the permitted UI actions; the worker wrote no JavaScript and used no evaluate or run-code tool.

## Operation counts (T1)

| Operation | Count | Notes |
|---|---|---|
| Save | **0** | Save disabled in every captured state. |
| Form-wizard opened (Designer New) | **0** | Not opened. |
| Finish / Create Form / Form created | **0 / 0 / 0** | Not authorized in T1. |
| Designer New / Copy / Delete / Regenerate | **0** | — |
| String created or changed; Caption dialog opened | **0 / 0 / 0** | Not in T1. |
| Check-in / check-out / undo check-out | **0 / 0 / 0** | FX_UMBase remains checked out to the operator (observed; not changed). |
| IDO, IDO project, Property Class, SQL table or column edits | **0** | — |
| Form data-row operations (records, test data) | **0** | — |
| Select Form dialog opened | **2** | Gate (positive control and target) and the `String` lookup. |
| Select Form dialog OK (row activation) | **1** | `ExportImportStrings` opened in a runtime tab; no Preview, Export or Import. |
| Select Form dialog Cancel | **1** | Gate dialog. |
| Select Form key-event filter entries (`slowly`) | **3** | `FX_HelloWorld01`, `FX_UMs`, `String`. |
| Control+a before each filter entry | **3** | — |
| Settle waits (2 s) | **3** | One per filter entry. |
| Runtime form-tab closes (Close Panel) | **1** | `Export/Import Strings`; no prompt. |
| Runtime tab selections (IDOs; Property Classes) | **2** | Read-only navigation within the Web Client. |
| Browser tab selections | **2** (to tab 1, back to tab 0) | Navigation only. |
| Source combobox expand / collapse | **1 / 1** | Read-only language list. |
| Browser screenshots (worker-saved PNG) | **5** | `t1-01` to `t1-05`. |
| Finds | **8** | Read-only accessibility search. |
| Untargeted or targeted snapshots | **Read-only; not counted individually** | Used for refs and dialog states. |
| Ref-not-found errors | **0** | — |
| Timeouts | **0** | — |
| Recovery snapshots / corrected inspections | **0 / 0** | — |
| Portal notification banner dismissals | **0** | No banner seen. |
| Prompts or confirmations answered | **0** | — |
| Login, logout, reauthentication, browser refresh, restart | **0** | — |
| JavaScript, evaluate, run-code, hidden store, direct SQL | **0** | Not used by the worker. |
| Metadata cache unload, FormSync, deployment, Regenerate Form | **0** | — |

## Acceptance checks (T1 status)

| AC | T1 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | **PASS (with limits)** | `t1-01`, `t1-04`, `t1-05`; tab and identity observations above | About/Site Developer text not re-observed; version strings unreconciled; Designer console 1 error not diagnosed; repository baseline from session start (no git command run). |
| AC-2 | **PASS (visible inventory)** | `t1-02` (positive control `FX_HelloWorld01`), `t1-03` (target `FX_UMs` zero rows) | No scope column; no total count; case-insensitive variant not re-tested in T1; single session. |
| AC-3 | **NOT ESTABLISHED in T1** | No supported read-only ID-level string lookup found. `ExportImportStrings` checked and rejected as a lookup (language list only). | The Caption ellipsis dialogs in the creation task must establish `FX_sUM` and `FX_sDescription` before any string commit. |
| AC-4 to AC-12 | **Not evaluated** | No wizard, Form, string, Save or runtime action in T1. | — |

## Observations relevant to later tasks (not findings of this T1 run)

1. `FX_UMBase` (Property Class) carries Label String ID `FX_sUM` (observed, `t1-05`). The UM label on the new Form may inherit it. The Caption dialog must show whether the ID resolves to an existing value (not only the inherited reference).
2. EXP-044 recorded the wizard's `FX_Description` row with Label `FX_sDescription` as a reference only (EXP-044 T7). Not re-observed in T1.
3. EXP-041-R3 T3 saw no Save Template control on the Multi-View page 1 or page 2 it reached. The final page (where Finish sits) has not been observed for this route; Save Template state is therefore unknown until the wizard reaches that page.
4. EXP-041-R2 found the Multi-View Name combobox rejects key-event entry; EXP-041-R3 T3 accepted one plain `browser_type` fill. The creation task must use the same plain-fill step once, and stop on any further "Value is required for Name".

## Cleanup inventory (T1)

- **Created:** none. No Form, template, string, IDO, IDO project, Property Class, SQL table, column, component, script or data row.
- **Changed:** none. Dialog and tab state only (Select Form filter text on the dialog; runtime tab selection; the `ExportImportStrings` runtime tab opened and closed without changes).
- **Checked out / checked in:** none. `FX_UMBase` remains checked out to `anton.ramos@3mworks.com.ph` (pre-existing state, carried from EXP-044).
- **Pending changes at end:** none observed (Designer Save and Web Client Save disabled).
- Detailed inventory: `evidence/EXP-045/cleanup-inventory.md`.

## Final browser state (T1, last verified)

- **Tab 0 (Web Client, selected):** Mongoose runtime; `Property Classes` runtime tab active (`favoriteContext=IdoPropertyClasses`); FX_UMBase row shown checked out; Save disabled (`t1-05`). Other runtime tabs open: `FX_HelloWorld01`, `IDOs`, `Sql Tables` (its contents were not inspected in T1), `Sql Columns` (leftover). No dialog; no unsaved-change prompt observed; no portal banner.
- **Tab 1 (Designer):** `IdoPropertyClasses` vendor Form in design view; User scope; Save and Undo disabled; no wizard; no dialog (`t1-01`).
- No browser-native dialog. No beforeunload prompt observed.

## Evidence (`evidence/EXP-045/`)

| File | Shows | Does not prove |
|---|---|---|
| `t1-01-designer-vendor-idopropertyclasses-save-disabled.png` | Designer: vendor `IdoPropertyClasses` design view, Name `IdoPropertyClasses`, Caption `fPropertyClasses`, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; top-left Save greyed; no dialog. | Anything about FX_ artifacts; the About text; the database. |
| `t1-02-select-form-positive-control-FX_HelloWorld01-settled.png` | Select Form: Filter `FX_HelloWorld01`, Name, both checkboxes unchecked; one row `FX_HelloWorld01` / `FX_HelloWorld01` (row highlighted). | The scope of the row; the store total. |
| `t1-03-select-form-target-FX_UMs-exact-settled-zero-rows.png` | Select Form: Filter `FX_UMs`, Name, both checkboxes unchecked; grid empty. | Scope; database absence; case variants. |
| `t1-04-webclient-idos-FX_UMs-record-and-properties-read-only.png` | IDOs tab: `FX_UMs` record (Project `FX_HelloWorldProject01`, Revision 2, Revision Date 10/10/2026, Access As `G6R`, Locked By empty, Check Out enabled, Save greyed) and its property rows: `FX_UM` (FX_UMBase, Bound to Column, Key Sequence 1, Required), `FX_Description` (String, 50, nvarchar), plus system properties. | The database table; the IDO's runtime behaviour; the string resources. |
| `t1-05-webclient-property-classes-FX_UMBase-row-read-only.png` | Property Classes tab: `FX_UMBase` (Locked By `anton.ramos@3mworks.com.ph`, checked out; Data Type String; Length 10; Column Data Type nvarchar; Label String ID `FX_sUM`; Check In enabled; Save greyed). | Whether `FX_sUM` exists as a string resource; the value. |
| `t1-gate-and-lookup-observations.md` (worker-authored) | Dialog accessibility excerpts for the gate states, the `String` lookup and the `ExportImportStrings` Form and Source list. | Scope; store total. |
| `cleanup-inventory.md` (worker-authored) | Cleanup inventory for T1 (nothing created). | — |

## Repository changes (T1)

- Written: `experiments/EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md` (this record).
- Written: `evidence/EXP-045/t1-01` to `t1-05` (PNG); `evidence/EXP-045/t1-gate-and-lookup-observations.md`; `evidence/EXP-045/cleanup-inventory.md`.
- Not written: any other repository file. No recipe, AGENTS.md, memory, `tools/`, docs, or other experiment record was edited.

## Open questions and blockers

1. **Authorization for the creation task.** T1 does not authorize the Form wizard, Finish, Save or string commits. The next step (T2 creation) needs its own authorization after the operator reviews this record.
2. **String state (AC-3) is unresolved.** No supported read-only ID-level lookup was found. The creation task must read `FX_sUM` and `FX_sDescription` in the Caption dialogs before any commit. Conflicting values block the mutation.
3. **`FX_sUM` reference from `FX_UMBase`.** The inherited UM label may already reference `FX_sUM`; whether the resource exists is not known.
4. **Save Template** presence on the final wizard page is unobserved (see Observations 3).
5. **Case-insensitive and scope-complete absence** of `FX_UMs` are not demonstrated (AC-2 limits).
6. **Designer console error** (1) on the vendor Designer tab is not diagnosed.
7. **Leftover Web Client runtime tabs** (`FX_HelloWorld01`, `IDOs`, `Sql Tables`, `Sql Columns`, `Property Classes`) are from earlier experiments. They were not changed in T1 but remain open.

## Knowledge state (T1)

| Finding | State |
|---|---|
| Web Client and Designer usable; Designer scope User; DEM configuration in the title | observed (`t1-01`, `t1-04`, `t1-05`) |
| Vendor `IdoPropertyClasses` design view in Designer, Save disabled, unchanged | observed (`t1-01`) |
| `FX_UMs` IDO: project `FX_HelloWorldProject01`, Revision 2, checked in; FX_UM on FX_UMBase, FX_Description String 50 | observed (`t1-04`) |
| `FX_UMBase`: String 10 nvarchar, Label String ID `FX_sUM`, checked out to the operator | observed (`t1-05`) |
| Select Form Name filter with key events: positive control `FX_HelloWorld01` returns its row | observed (`t1-02`) |
| Select Form Name filter: exact `FX_UMs` returns zero rows (visible inventory) | observed (`t1-03`) |
| Select Form rows show no scope; no total count | observed (limitation) |
| No supported read-only ID-level string lookup in the Web Client (`ExportImportStrings` is an export/import utility with language list only) | observed (one run) |
| `FX_sUM` and `FX_sDescription` existence and values | **unresolved** (Caption dialogs needed) |
| Multi-View final-page Save Template presence | **unresolved** (EXP-041-R3 did not reach it) |
| Form creation via Multi-View with Data Source `FX_UMs` | **unresolved** (not attempted; not authorized in T1) |

Classification for T1: **observed only**. Not replay_verified. No database-durability, cross-session or cross-user claim is made.

---

## T2 — Wizard configuration, STOP BEFORE FINISH (cycle 1)

Task: T2, run `R-20261010-214137-Ia7F`, cycle 1, worker session `9f2fb920-cc07-4930-b468-a5c8910aab86`, task_message_id `6422433f-2a61-442e-9462-d5484a544720`.
Full observations: `evidence/EXP-045/t2-wizard-configuration-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T2 entry).

### Starting state (fresh, before any T2 action)

- Tab 0 Web Client: `Property Classes` runtime tab; no dialog; Save disabled (inherited from T1 final state). Not acted on.
- Tab 1 Designer: vendor `IdoPropertyClasses` design view (tab heading `Property Classes`, one tab); Save and Undo disabled; no wizard; no dialog. Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### Wizard route and pages (observed)

| Step | Observation | Evidence |
|---|---|---|
| Designer toolbar New | Form Wizard Selection opened; New Form radio selected; Extend Form not selected | snapshot |
| Category | `Classic` (option `e1597`) | snapshot |
| Wizard | `MultiView` (option "Multi-View: Multi-view (grid/detail) form bound to an IDO collection") | `t2-01` (before OK) |
| OK | Wizard `Form Wizard - MultiView` opened on page 1 | snapshot |
| Page 1 Name | One plain `browser_type` fill (no `slowly`): `FX_UMs`. Read back `FX_UMs` | `t2-02` |
| Page 1 Data Source | Trigger opened once; list held one `FX_UMs` option among rows `FX_HelloWorld01`, `FX_UMs`, `G6RItems`, …; `FX_UMs` selected once. Reads `FX_UMs` | `t2-02` |
| Page 1 defaults | Form Type `MultiView` (read-only); Form Layout `GridLeft`; Device Type `Default`; Query Form and Comments empty (not changed) | `t2-02` |
| Next (page 1 → 2) | No alert; page 2 "Properties — Primary Collection" | snapshot |
| Page 2 defaults | Selected (right) list: `FX_Description`, `FX_UM` (both Include). Available (left) list: `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, 30 UDF fields, `UpdatedBy`. Nothing added or removed | `t2-03` |
| Next (page 2 → 3) | No alert; page 3 property-attributes grid | snapshot |
| Page 3 before reposition | Rows: `1 FX_Description` (Caption `FX_sDescription`, Include checked); `2 FX_UM` (Caption `FX_sUM`, Include checked) | `t2-04` |
| Reposition | Row `FX_UM` Name cell selected once (`e2714`); single **up** arrow pressed once (`e2730`, second arrow from the top). Nothing else moved | `t2-05` (selected, before), `t2-06` (after) |
| Page 3 after reposition | Rows: `1 FX_UM` (Caption `FX_sUM`, Include checked); `2 FX_Description` (Caption `FX_sDescri…`, Include checked) | `t2-06` |
| Next (page 3 → 4) | Final page reached | snapshot |
| Final page | Text: "Click the Finish button to build a multiview form named FX_UMs with the data source FX_UMs." `Save Template` checkbox was **checked** before the action; Next disabled; Back enabled; **Finish enabled** | `t2-07` (before) |
| Save Template | Visible label `Save Template` (`e2771`) clicked **once**; checkbox then unchecked (no `[checked]` in snapshot) | `t2-08` |
| Stop | Finish **not pressed**. Wizard left open on the final page | `t2-08` |

Note on the Caption column (page 3): the captions shown are the **string-ID references** `FX_sUM` and `FX_sDescription` as displayed in the grid. This T2 did not open any Caption dialog. Whether the resources exist and what values they hold is **unresolved**; it is the subject of the next task.

### Verification before the stop (T2 gate)

| Item | Verified | Basis |
|---|---|---|
| Route | New > New Form > Classic > Multi-View | `t2-01`, dialog snapshot |
| Exact Form Name | `FX_UMs` | `t2-02`; final page text `t2-08` |
| Scope | Designer status bar `User / anton.ramos@3mworks.com.ph` | `t2-04`, `t2-08` |
| Data Source | `FX_UMs` (one option in the list) | `t2-02`; final page text |
| Default properties | `FX_Description`, `FX_UM` selected; nothing added or removed | `t2-03` |
| Final field order | `FX_UM` above `FX_Description` | `t2-06` |
| Save Template | Unchecked | `t2-08` |
| Finish | Visibly enabled; **not invoked** | `t2-08` |

Limits of this verification: the Form Name and Data Source are the wizard's displayed values and the final-page sentence. They are not a database read. The positioning result is the wizard's grid order, not a Designer form order; the Designer's field order is established only after Finish and a reopen (later tasks).

### Gate note for the next task

The Select Form collision gate (T1) was run earlier in this same worker session, about several minutes before T2. EXP-044 required the creation task to repeat the positive control and the zero-row check **in its own session before any Finish**. That repeat is **not** done in T2. The next task that authorises Finish must repeat the gate first (positive control `FX_HelloWorld01` returns its row; exact `FX_UMs` returns zero rows) and must not press Finish if the visible inventory shows a conflicting `FX_UMs` Form.

### Operation counts (T2)

| Operation | Count |
|---|---|
| Finish | **0** |
| Save | **0** |
| Form created | **0** |
| Caption dialog opened | **0** |
| String created or changed | **0** |
| Wizard opened (OK) | **1** |
| Wizard Next | **3** (page 1→2, 2→3, 3→4) |
| Wizard Back | **0** |
| Wizard Cancel | **0** |
| Name plain fills (`browser_type`, no `slowly`) | **1** |
| Data Source trigger opened / option chosen | **1 / 1** |
| Positioning row selections | **1** |
| Positioning arrow presses | **1** (up, once) |
| Save Template label clicks | **1** (unchecked) |
| Designer New / Category / Wizard selections | **1 / 1 / 1** |
| Key-event filter entries (Select Form) | **0** (not used in T2) |
| Tab selects | **1** (Web Client → Designer) |
| Screenshots (worker-saved PNG) | **8** (`t2-01` to `t2-08`) |
| Ref-not-found / timeouts | **0 / 0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Prompts or confirmations answered | **0** |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Acceptance checks (T2 status)

| AC | T2 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Not re-evaluated (preflight from T1 carried) | T1 `t1-01`, `t1-04`, `t1-05` | — |
| AC-2 | Not re-run in T2 (T1 gate carried; repeat required before Finish) | T1 `t1-02`, `t1-03` | Same-session repeat required before Finish |
| AC-3 | **Not established** (Caption dialogs not opened) | Captions shown as `FX_sUM` / `FX_sDescription` references in the grid only | Caption dialogs needed in the next task |
| AC-4 | **PASS for the pre-Finish configuration** (Form Name, route, Data Source, default properties, FX_UM above FX_Description, Save Template unchecked, Finish visibly enabled and not pressed) | `t2-01` to `t2-08` | Wizard grid order only; the Designer order is established after Finish |
| AC-5 to AC-12 | Not evaluated (no Finish, no Form, no Caption dialog, no Save, no reopen, no runtime open) | — | — |

### Browser state at stop

- Tab 1 Designer (selected): `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. Form Wizard `MultiView` open on its final page; Save Template unchecked; Finish enabled and untouched; Back enabled; Next disabled. Behind the wizard: vendor `IdoPropertyClasses` design view, Save disabled, User scope.
- Tab 0 Web Client: untouched in T2; `Property Classes` runtime tab.
- No browser-native dialog. No unsaved-change prompt. The wizard is an in-page dialog left open deliberately (cancel would discard the entered Name, Data Source and property order, and the brief forbids discarding unsaved work).

### Repository changes (T2)

- Written: this record (status line and T2 section).
- Written: `evidence/EXP-045/t2-01` to `t2-08` (PNG); `evidence/EXP-045/t2-wizard-configuration-observations.md`; `evidence/EXP-045/cleanup-inventory.md` (T2 entry).
- Not written: any other repository file.

### Open questions (T2)

1. **Finish authorisation.** The next task must authorise Finish explicitly and repeat the Select Form gate in its own session first (see the gate note).
2. **Caption dialogs.** `FX_sUM` and `FX_sDescription` must be read in the Caption ellipsis dialogs before any commit. A conflicting existing value blocks the commit.
3. **Wizard open.** The wizard remains open on the final page (not a Finish; not a Save). The next task must decide whether to Finish it or cancel it (a cancel discards the entered values).

---

## T3 — Gate revalidation and ONE Finish (cycle 2)

Task: T3, run `R-20261010-214137-Ia7F`, cycle 2, worker session `9f2fb920-cc07-4930-b468-a5c8910aab86`, task_message_id `4367afca-e13e-4f98-88c2-37a3b6f83e72`.
Full observations: `evidence/EXP-045/t3-finish-and-post-creation-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T3 entry).

### Gate revalidation (Web Client Select Form, before Finish)

| Query (Name filter; Case Sensitive and Starts With unchecked; key events; 2 s settle) | Result | Evidence |
|---|---|---|
| `FX_HelloWorld01` (positive control) | **1 row:** `FX_HelloWorld01` / `FX_HelloWorld01` | `t3-01` |
| `FX_UMs` (exact target) | **0 rows** | `t3-02` |

Gate: **PASS**. Limits: no scope column; no total; case variants not re-tested. Closed with Cancel (`f1e855`). The Designer wizard was not touched by the gate.

### Reverification (wizard intact; Back and Next only; no value changed)

Final page on return (text `FX_UMs` / data source `FX_UMs`, Save Template unchecked, Finish enabled) → Back to page 3 (order `FX_UM` then `FX_Description`; captions `FX_sUM` / `FX_sDescri…`) → Back to page 2 (defaults `FX_Description`, `FX_UM`) → Back to page 1 (Name `FX_UMs`; MultiView; GridLeft; Default; Data Source `FX_UMs`) → Next three times to the final page. Order and Save Template verified again. Evidence `t3-03` to `t3-08`.

### Finish (exactly once)

- The visible Finish (`e1576`) was pressed **once**. It was not retried.
- Response: informational alertdialog "Process Completed Successfully" with one OK. This is the expected completion notice (EXP-036 precedent), not an unexpected prompt. Acknowledged once (OK, `e1918`).
- The Designer then opened the generated Form (`?MGForm=FX_UMs`).

### Immediate Designer outcome (observed)

| Item | Observed |
|---|---|
| Form tab | `FX_UMs` (selected); vendor `Property Classes` (IdoPropertyClasses) tab still open, not selected |
| Name | `FX_UMs` |
| Version | `User version for user anton.ramos@3mworks.com.ph` |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Device / Form type / Is Master | Default / Normal / True |
| Save | Disabled (snapshot `[disabled]`) |
| Labels on canvas | `FX_sUM*` above `FX_sDescription:` (raw ID text, not the literal values) |
| Field order | `FX_UM` (`FX_sUM`) above `FX_Description` (`FX_sDescription`) on the canvas and in the grid column order |
| Prompts or errors after OK | None observed |

**Interpretation limit:** the labels show the string IDs as text. This may mean the resources are absent or that the Designer shows the ID when no value resolves. The Caption dialogs were not opened in T3; the cause is **unresolved** and must be read in the next task.

### Post-creation inventory (Web Client Select Form; Designer not touched)

Settled result after re-entering `FX_UMs` (key events; 2 s): **exactly one row**, `FX_UMs` / `FX_UMs`. Closed with Cancel; no prompt. Evidence `t3-11`. Limit: no scope column in the dialog; the User scope comes from the Designer status bar.

### Operation counts (T3)

| Operation | Count |
|---|---|
| Finish | **1** (not retried) |
| Save | **0** |
| Form created (observed) | **1** |
| Template created | **0** (Save Template unchecked) |
| Caption dialog / string change | **0 / 0** |
| Designer Form close / reopen | **0 / 0** |
| Select Form opened / OK / Cancel | **2 / 0 / 2** |
| Key-event filter entries / Control+a / settle waits | **3 / 3 / 3** |
| Wizard Back / Next / Cancel | **3 / 3 / 0** |
| Save Template clicks | **0** (unchecked in T2) |
| Informational alert OK | **1** |
| Other prompts answered | **0** |
| Tab selects | **4** |
| Screenshots | **11** (`t3-01` to `t3-11`) |
| Ref-not-found / timeouts / recoveries | **0 / 0 / 0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Acceptance checks (T3 status)

| AC | T3 status | Basis | Limitation |
|---|---|---|---|
| AC-2 | **PASS (visible inventory), revalidated in T3** | `t3-01`, `t3-02` | No scope column; no total; case variants not re-tested |
| AC-4 | **PASS (pre-Finish configuration, re-verified after Back and Next)** | `t3-03` to `t3-08` | Wizard grid order only |
| AC-5 | **PARTIAL.** Finish produced "Process Completed Successfully"; the Designer opened `FX_UMs` (User scope); a Select Form query shows one matching row (`t3-11`) | `t3-09`, `t3-10`, `t3-11` | Visible inventory only; the database is not read; the row's scope is not shown in Select Form |
| AC-8 (partial) | Save **disabled** after creation (observed); the Designer Save for the captions is **not** yet performed | `t3-10` | — |
| AC-1, AC-3, AC-6, AC-7, AC-9 to AC-12 | Not evaluated in T3 (no Caption dialog, Designer Save, close/reopen or runtime open) | — | — |

### Browser state at stop

- Tab 1 Designer (selected): `FX_UMs` Form open, User scope, Save disabled, no dialog, no wizard (wizard closed after Finish).
- Tab 0 Web Client: Select Form closed (Cancel); `Property Classes` runtime tab selected; no dialog.
- No unsaved-change prompt observed.

### Open questions (T3)

1. **Caption resolution.** The labels show raw `FX_sUM` / `FX_sDescription`. The next task must open each label's Caption dialog and read the ID and value before any commit. A conflicting existing value blocks that commit.
2. **Designer Save.** The next task must make the caption changes (if authorised) and then perform the one ordinary Designer Save.
3. **Close and reopen** of the generated Form, and any runtime open, remain for the next task.

---

## T4 — Read-only label component and Caption dialog inspection (cycle 3; STOPPED)

Task: T4, run `R-20261010-214137-Ia7F`, cycle 3, worker session `9f2fb920-cc07-4930-b468-a5c8910aab86`, task_message_id `c7252375-d1e9-4057-8b5b-9764dad69424`.
Full observations: `evidence/EXP-045/t4-label-component-caption-inspection-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T4 entry).

### Starting state (fresh)

Designer `FX_UMs` tab selected (`?MGForm=FX_UMs`): Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar User scope; Save and Undo disabled; no dialog.

### What was attempted

| # | Action | Result |
|---|---|---|
| I1 | Click the canvas label `FX_sUM:` (the FX_UM label) | **Timeout (5 s).** The locator resolved to `mgimagelabel-4445-textEl` (the tool's error log shows `data-mgcompnamevalue="FX_UMStatic"`), but the click was **intercepted** by the design adorner `compadorner-4483`. Not selected. |
| R1 | Fresh untargeted snapshot (recovery 1 of 1) | Same refs; Designer clean |
| C1 | Expand the Details panel (`Expand Panel`) | Panel opened; Collections shows `Primary Collection: FX_UMs` |
| C2 | Click the Components tab | Tree of `Pane (00)` and `Pane (01)` |
| C3 | Click the `Pane (00)` row | Selected, **not expanded**; Properties still the Form |
| C4 | Press ArrowRight | Focus moved to the Type cell; **not expanded** |

The recovery allowance and the corrected inspection are used. The component identity is **not established** by a supported route. The `FX_UMStatic` name came from the failed locator's log, not from a selection or Properties view, so it is recorded as unresolved, not as proof.

### Result

- **No Caption ellipsis dialog was opened.** The FX_UM and FX_Description Caption values, string IDs, resource selection, and existence of `FX_sUM` and `FX_sDescription` are **not inspected**.
- The raw-ID text on the canvas labels does **not** establish that the resources are absent. Nothing was inferred from it.
- No value entered, no string changed, no commit control pressed, no Designer Save, no close or reopen. Save and Undo remain disabled.

### Gate for the next step

The next step needs a supported way to select the FX_UM label component (the canvas click is intercepted by the adorner; the Components tree did not expand with ArrowRight). The coordinator should choose the route (for example, a supported expand control on the Components tree, or another designer-selection route). Only then can the Caption dialog be read.

### Operation counts (T4)

| Operation | Count |
|---|---|
| Save / Finish / Form creation | **0 / 0 / 0** |
| Caption dialog opened / value changed | **0 / 0** |
| Designer close / reopen | **0 / 0** |
| Interaction failures (timeouts) | **1** (I1) |
| Recovery snapshots / corrected inspections | **1 of 1 / 1 of 1** |
| Screenshots | **5** (`t4-01` to `t4-05`) |
| Prompts answered | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Acceptance checks (T4 status)

| AC | T4 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Not established** (no Caption dialog read) | — | Caption dialogs still needed |
| AC-6 / AC-7 | **Not evaluated** (no label selected; no Caption dialog) | — | Component identity not established by a supported route |
| AC-8 / AC-9 / AC-10 / AC-11 / AC-12 | Not evaluated | — | — |

### Browser state at stop

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; Save and Undo disabled; no dialog. The Details panel is expanded at the bottom with the Components tab open and `Pane (00)` selected. Properties show the Form.
- Tab 0 Web Client: `Property Classes`; untouched.

### Open questions (T4)

1. **Label selection route.** Choose a supported way to select the FX_UM label component (and then the FX_Description label). The adorner intercepts canvas clicks; the Components tree did not expand with the keyboard.
2. After selection, the Caption dialogs must be read before any commit. A conflicting existing `FX_sUM` or `FX_sDescription` value is a stop condition for operator review.

---

## T5 — Component selection and read-only Caption inspection (cycle 5; STOPPED at an unexpected prompt)

Task: T5, run `R-20261010-214137-Ia7F`, cycle 5, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `d0ad50e9-ac38-4b33-9215-06fefa967c69`. The session was new; the browser and Designer state were inherited from T3/T4.
Full observations: `evidence/EXP-045/t5-caption-inspection-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T5 entry).

### Starting state (fresh snapshot)

Tab 1 Designer `FX_UMs` Form tab selected (`?MGForm=FX_UMs`); Name `FX_UMs`; User scope in the status bar; Save and Undo disabled; no dialog; Details > Components tab with `Pane (00)` and `Pane (01)` collapsed. Evidence `t5-01`.

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Select Designer tab (tab 1) | Designer current | — |
| 2 | Click the Components grid's `Expand` toolbar button, once | Tree expanded; no error | `t5-02` (after) |
| 3 | Read the expanded grid | Label rows identified from the accessibility snapshot: `FX_UMStatic` (Static, Pane 1, Tab 3) for the FX_UM label; `FX_DescriptionStatic` (Static, Pane 1, Tab 5) for the FX_Description label. Edit rows `FX_UMEdit` / `FX_DescriptionEdit` are bound to `object.FX_UM` / `object.FX_Description` (not labels). The screenshot `t5-02` shows only the rows down to `FX_UMStatic` (partly cut off); it does not show `FX_DescriptionStatic`. | snapshot; `t5-02` (partial) |
| 4 | Click the `FX_UMStatic` tree row, once (selection only) | Properties header `FX_UMStatic (Static)`; Name `FX_UMStatic`; Caption `FX_sUM`; Type `Static` | `t5-03` |
| 5 | Click the Caption ellipsis button, once | **Unexpected alertdialog**: `String FX_sUM does not exist. Create it?` with Yes (focused) / No. String dialog behind shows OK / Help only. | `t5-04` |
| 6 | Read-only finds (`does not exist`, `Save`, `Undo`) | Alertdialog present; Save disabled; Undo disabled | — |

### Result

- **Component identity (AC-6 precondition): observed.** The FX_UM label is `FX_UMStatic` (Static). Confirmed by the Components grid row and the Properties header after a single supported selection. Its Data Source is blank, so identity rests on Name and Type, not on a field binding.
- **String ID: observed.** The ellipsis dialog targets the ID `FX_sUM`.
- **String existence: observed as "does not exist" (the product's prompt).** Not independently verified; no supported read-only string lookup exists (T1). The literal value of `FX_sUM` was **not** read.
- **Stop.** Per the T5 brief, the unexpected creation prompt stops the step. **Yes** and **No** were not pressed. No String value was entered; no OK pressed; no string created or changed. `FX_sDescription` and the FX_Description label were not inspected.
- No Save, no close/reopen, no runtime open, no FormSync, no cache unload, no refresh, no Finish, no data row.

### Acceptance checks (T5 status)

| AC | T5 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Partially established.** `FX_sUM` reported as not existing by the Caption prompt (observed). `FX_sDescription` NOT established. | `t5-04` | Not a database read; literal values not visible; FX_sDescription not opened |
| AC-6 | **Not complete.** Component identity observed (`FX_UMStatic`); Caption value not read; the `FX_sUM` = `Unit of Measure` association is not made | `t5-02`, `t5-03`, `t5-04` | Stopped at the creation prompt |
| AC-7 | **Not evaluated.** FX_DescriptionStatic identified in the accessibility snapshot only; not visible in `t5-02`; not selected | snapshot | Not selected; no Caption dialog |
| AC-8 to AC-12 | Not evaluated | — | No Caption association, Save, close/reopen or runtime open |

### Operation counts (T5)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption dialog opened | **1** | `FX_UMStatic`; stopped at the prompt |
| String created / changed / value entered | **0 / 0 / 0** | Prompt not answered |
| Creation prompt answered (Yes / No) | **0 / 0** | Unanswered; open at stop |
| Component selections | **1** | `FX_UMStatic` only |
| Components grid Expand clicks | **1** | — |
| Designer close / reopen | **0 / 0** | — |
| Screenshots (worker-saved PNG) | **4** | `t5-01` to `t5-04` |
| Finds (read-only) | **3** | Prompt text; Save; Undo |
| Recovery snapshots / corrected inspections | **0 / 0** | No ref-not-found error, no timeout |
| Tab selects | **1** | Web Client untouched |
| Portal banner dismissals | **0** | No banner observed |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | Tool-generated wrapper text in outputs only |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab, User scope; Save and Undo disabled; Details panel expanded on Components with `FX_UMStatic` selected; Properties show `FX_UMStatic (Static)`.
- **An in-page alertdialog is open and unanswered**: `String FX_sUM does not exist. Create it?` (Yes focused / No). The String dialog behind it shows OK / Help. This is not a browser-native dialog. The brief says not to answer an unexpected prompt without coordinator review; leaving it open is the blocker, and the end-state rule about open dialogs yields to that instruction.
- Tab 0 Web Client: `Property Classes`; untouched in T5.

### Repository changes (T5)

- Written: this record (status line and T5 section).
- Written: `evidence/EXP-045/t5-01` to `t5-04` (PNG); `evidence/EXP-045/t5-caption-inspection-observations.md`; `evidence/EXP-045/cleanup-inventory.md` (T5 entry).
- Not written: any other repository file.

### Blockers and decisions required (coordinator)

1. **Creation prompt (blocker).** Decide how to resolve `String FX_sUM does not exist. Create it?`:
   - (a) authorize **Yes**, then enter the literal value `Unit of Measure` in the String dialog before OK (creates tenant-wide `FX_sUM`); or
   - (b) authorize **No** and confirm the non-mutating result of the String dialog; or
   - (c) hold for another review.
2. **FX_sDescription.** The FX_Description label (`FX_DescriptionStatic`) needs the same selection and Caption check; its ID and existence are unresolved.
3. **Close path.** The String dialog has no Cancel (only OK / Help), so the non-mutating close is not established.
4. **Designer Save** and close/reopen remain outstanding until the two Caption associations are settled.

### Knowledge state (T5)

| Finding | State |
|---|---|
| Components grid Expand exposes generated label rows (`FX_UMStatic`, `FX_DescriptionStatic`) | observed (`t5-02`) |
| `FX_UMStatic` selection through the Components grid shows Properties header and Caption `FX_sUM` | observed (`t5-03`) |
| Caption ellipsis on `FX_UMStatic` raises "String FX_sUM does not exist. Create it?" | observed (`t5-04`); not independently verified |
| `FX_sUM` literal value | **unresolved** (not readable) |
| `FX_sDescription` existence and value | **unresolved** (not inspected) |
| Caption association for `FX_UMStatic` / `FX_DescriptionStatic` | **not done** |

Classification for T5: **observed only**. Not replay_verified. No database-durability claim.

---

## T6 — Decline of the FX_sUM creation prompt (cycle 7; STOPPED)

Task: T6, run `R-20261010-214137-Ia7F`, cycle 7, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `278bbaf2-db7d-4cde-b8c7-1308b1eca234`.
Full observations: `evidence/EXP-045/t6-fx-sum-prompt-decline-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T6 entry).

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Fresh snapshot | Selected tab was the Web Client (tab 0), not the Designer. Designer content was present in the snapshot with the prompt open. | — |
| 2 | Select Designer tab (tab 1) | Designer current. | — |
| 3 | Fresh snapshot | Prompt `String FX_sUM does not exist. Create it?` (Yes focused / No) and String dialog (OK / Help) present. Caption `FX_sUM`. Prompt text matches the brief exactly. | `t6-01` (before click) |
| 4 | Click **No**, once | Creation prompt and String dialog gone. New in-page alert **"Timeout expired waiting for response."** (OK). Designer URL now `designer/default.aspx` (was `?MGForm=FX_UMs`). | `t6-02` |
| 5 | Fresh snapshot and read-only finds | Alert open; Save disabled; Undo disabled; FX_UMStatic Caption `FX_sUM`. | `t6-02` |
| 6 | STOP | OK not clicked; FX_DescriptionStatic not selected; `FX_sDescription` not opened. | — |

### Result

- **Decline was not clean.** Clicking No did not leave a non-mutating String state. It produced an unexplained timeout alert. Per the brief, this stops the task.
- **`FX_sUM` state after the No click: UNRESOLVED.** The prompt wording does not say whether a resource was created or whether the timeout left it partly written. No supported read-only string lookup exists (T1). The literal value was never read.
- **`FX_sDescription`: NOT inspected.** No Caption dialog for the FX_Description label was opened.
- No Yes, OK, Save, value entry, close/reopen, runtime open, or Finish.

### Acceptance checks (T6 status)

| AC | T6 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Not established.** `FX_sUM` existence after the No click is unresolved; `FX_sDescription` not inspected. | `t6-01`, `t6-02` | No read-only string lookup; the timeout is unexplained |
| AC-6 | **Not complete.** Component `FX_UMStatic` identified (T5); Caption value not read; association not made. | `t6-01`, `t6-02` | Stopped at the timeout alert |
| AC-7 | **Not evaluated.** | — | FX_DescriptionStatic not selected |
| AC-8 to AC-12 | Not evaluated | — | No Caption association, Save, close/reopen or runtime open |

### Operation counts (T6)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption dialog opened | **0** (inherited from T5) | — |
| Creation prompt answered | **1 (No)** | Clicked once; its effect on `FX_sUM` is unresolved |
| Yes / OK on any String or alert dialog | **0 / 0** | — |
| String created / changed by intent | **0 / 0** | — |
| Component selections | **0** | FX_DescriptionStatic not selected |
| Designer close / reopen | **0 / 0** | — |
| Screenshots (worker-saved PNG) | **2** | `t6-01`, `t6-02` |
| Fresh snapshots | **3** | Before the tab select (found the Web Client selected), after the tab select, and after No |
| Tab selects | **1** | Web Client → Designer |
| Ref-not-found errors | **0** | — |
| Browser action timeouts | **0** | The "Timeout expired" alert is a product message, not a tool timeout |
| Portal banner dismissals | **0** | None seen |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | — |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx` (URL no longer carries `MGForm=FX_UMs`). Form tab `FX_UMs`, User scope; Save and Undo disabled; Properties show `FX_UMStatic (Static)`, Caption `FX_sUM`.
- **In-page alert open and unanswered:** `Timeout expired waiting for response.` with OK. Not a browser-native dialog.
- Tab 0 Web Client: `Property Classes`; not acted on.

### Blockers for the coordinator

1. **The "Timeout expired" alert (OK).** Decide whether OK may be clicked. It is the only control.
2. **`FX_sUM` existence.** Whether the No click or timeout created or partly created the resource is unknown. The string can only be checked through the Caption dialog, and reopening that dialog risks creating it. Needs review before any further attempt.
3. **`FX_sDescription` / FX_DescriptionStatic.** Not inspected. Blocked until 1 and 2 are settled.
4. **Designer URL change.** The URL dropped `MGForm=FX_UMs` after the click. Meaning unknown.

### Knowledge state (T6)

| Finding | State |
|---|---|
| Inherited prompt text `String FX_sUM does not exist. Create it?` (Yes / No) | observed (`t6-01`) |
| Clicking No on that prompt produces "Timeout expired waiting for response." and removes the String dialog | observed (`t6-02`); single execution; cause unresolved |
| Designer URL loses `MGForm=FX_UMs` after the No click | observed (`t6-02` / snapshot); meaning unresolved |
| `FX_sUM` existence / value after the No click | **unresolved** |
| `FX_sDescription` existence / value | **unresolved** (not inspected) |
| Caption association for FX_UMStatic / FX_DescriptionStatic | **not done** |

Classification for T6: **observed only**. Not replay_verified. No database-durability claim.

---

## T7 — Acknowledge the timeout alert; read-only Designer state (cycle 8)

Task: T7, run `R-20261010-214137-Ia7F`, cycle 8, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `1865a7ce-e454-492d-8f80-c5c91404e030`.
Full observations: `evidence/EXP-045/t7-post-timeout-alert-designer-state-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T7 entry).

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Fresh snapshot | Selected tab was the Web Client (tab 0). The Designer's timeout alert was present in the snapshot. | — |
| 2 | Select Designer tab (tab 1) | Designer current. | — |
| 3 | Fresh snapshot | Alert text exactly `Timeout expired waiting for response.`; single OK. Save and Undo disabled. Designer on `FX_UMs`. | `t7-01` (before OK) |
| 4 | Click **OK**, once | Alert closed; no further prompt. | — |
| 5 | Fresh snapshot (post-alert read) | No dialog. `FX_UMs` Form tab selected. URL `designer/default.aspx`. Save and Undo disabled. `FX_UMStatic` selected; Caption `FX_sUM`. User scope. | `t7-02` (after OK) |

### Result

- The timeout alert is dismissed. The Designer remains on the `FX_UMs` Form tab with User scope, Save and Undo disabled, and no dialog.
- Component selection unchanged: `FX_UMStatic (Static)`, Caption `FX_sUM`.
- **Not visible after OK:** the Form-level Name, Version and Device Type. A component is selected, so the Properties panel shows it. The Form identity rests on the open `FX_UMs` tab. These were not re-read because selecting the Form was outside T7.
- **Unresolved:** whether the earlier No click created or partly wrote `FX_sUM`; the cause of the timeout; why the URL lost `MGForm=FX_UMs` (it has not changed since T6). The absence of the alert does not establish the string-resource state.
- **Not done:** no Caption dialog, no string create or change, no component selection beyond the existing one, no Designer Save, no close/reopen, no navigation, no refresh.

### Acceptance checks (T7 status)

| AC | T7 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Not established.** `FX_sUM` state after the No click remains unresolved; `FX_sDescription` not inspected. | `t7-01`, `t7-02` | No read-only string lookup; the Caption dialog is the only route and T7 forbids it |
| AC-6 | **Not complete.** Component `FX_UMStatic` identified (T5); Caption value not read; `FX_sUM` = `Unit of Measure` association not made. | `t7-02` | Blocked on AC-3 |
| AC-7 | **Not evaluated.** | — | FX_DescriptionStatic not selected |
| AC-8 to AC-12 | Not evaluated | — | No Caption association, Save, close/reopen or runtime open |

### Operation counts (T7)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption dialog opened | **0** | — |
| String created / changed / value entered | **0 / 0 / 0** | — |
| Alert OK clicks | **1** | The timeout alert from T6 only |
| Creation prompt answered | **0** | — |
| Component selections | **0** | — |
| Designer close / reopen / Form navigation | **0 / 0 / 0** | — |
| Fresh snapshots | **3** | Steps 1, 3, 5 |
| Recovery snapshots / corrected inspections | **0 / 0** | No ref-not-found error, no tool timeout |
| Tab selects | **1** | Web Client → Designer |
| Screenshots (worker-saved PNG) | **2** | `t7-01`, `t7-02` |
| Portal banner dismissals | **0** | None seen |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | — |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` Form tab selected; User scope; Save and Undo disabled; `FX_UMStatic (Static)` selected with Caption `FX_sUM`; **no dialog**.
- Tab 0 Web Client: `Property Classes` runtime tab selected; not acted on in T7.

### Blockers for the coordinator

1. **`FX_sUM` state (AC-3).** Whether the T6 No click created or partly wrote `FX_sUM` is unknown. The only route to read it is the Caption dialog, which may create it when opened. Needs a decision on how to establish the state.
2. **`FX_sDescription` / FX_DescriptionStatic.** Not inspected. Blocked by 1.
3. **URL.** The Designer URL no longer carries `MGForm=FX_UMs` (since T6). Its meaning is unknown; not investigated.

### Knowledge state (T7)

| Finding | State |
|---|---|
| Timeout alert `Timeout expired waiting for response.` (single OK) acknowledged once; no further prompt | observed (`t7-01`, `t7-02`) |
| Designer stays on the `FX_UMs` Form tab, User scope, Save and Undo disabled, no dialog after OK | observed (`t7-02`) |
| `FX_UMStatic` still selected; Caption `FX_sUM` | observed (`t7-02`) |
| Form-level Name / Version after OK | **not re-observed** in T7 |
| `FX_sUM` existence / value after the T6 No click | **unresolved** |
| `FX_sDescription` existence / value | **unresolved** (not inspected) |
| Caption association for FX_UMStatic / FX_DescriptionStatic | **not done** |

Classification for T7: **observed only**. Not replay_verified. No database-durability claim.

---

## T8 — Read-only String lookup for FX_sUM and FX_sDescription (cycle 9)

Task: T8, run `R-20261010-214137-Ia7F`, cycle 9, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `1370255f-9f89-447a-a1c1-816955b372e6`.
Full observations: `evidence/EXP-045/t8-string-lookup-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T8 entry).

### Route found

- Designer **Edit** menu lists a visible **`String`** item (between Shortcut Menu and Theme; `t8-01`).
- Selecting it opened a dialog titled **`Global Objects`** (`t8-02`). Left pane **`Strings`**: name filter, list of string IDs, and **+ / copy / trash** icons (not used). Right pane **`Properties`**: properties of a selected entry. Bottom: **OK / Cancel / Help**.
- The Strings name filter is read-only. Observed behaviour: **infix** match, **case-insensitive**.

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Tab select to Designer | First attempt: "Tab 1 not found" (tool error). Retry succeeded. | — |
| 2 | Fresh snapshot | `FX_UMs` tab selected; User scope; Save and Undo disabled; no dialog; `FX_UMStatic` selected, Caption `FX_sUM`. | — |
| 3 | Click `Edit` menu, once | Menu opened; `String` item visible. | `t8-01` |
| 4 | Click `String`, once | `Global Objects` dialog opened. | `t8-02` |
| 5 | Click Strings filter, type `FX_sUM` (key events), wait 2 s | **Empty list.** | `t8-03` |
| 6 | Ctrl+A, type `Collection` (positive control), wait 2 s | **Many rows** incl. `Collection Name` (highlighted matches). | `t8-04` |
| 7 | Ctrl+A, type `FX_sDescription`, wait 2 s | **Empty list.** | `t8-05` |
| 8 | Ctrl+A, type `FX_` (supplementary), wait 2 s | **Empty list.** | `t8-06` |
| 9 | Ctrl+A, type `_` (underscore positive control), wait 2 s | **Many rows** with underscores. | `t8-07` |
| 10 | Targeted find for Cancel, then click Cancel once | Dialog closed; no alert or prompt. | `t8-08` |

### Result (AC-3)

| String ID | Lookup result (Strings filter, positive control matched) | Interpretation |
|---|---|---|
| `FX_sUM` | **Visibly absent** (no rows) | Observed in this list. Consistent with the Caption prompt "String FX_sUM does not exist. Create it?" (T5). Not a database read. |
| `FX_sDescription` | **Visibly absent** (no rows) | Observed in this list. Its Caption prompt was not seen (the Caption dialog was not opened). Not a database read. |

- **No literal value** is displayed for either ID, because neither appears. No conflicting value exists in this list, so no conflict stop applies.
- **T6 "No" click:** this view shows **no** `FX_sUM` row after the No click and the timeout. The earlier open question is narrowed: no visible row exists. It is **not** proof of no database write (the list may be cached; scope not shown).
- No Caption dialog, string creation, Save, close/reopen or prompt answer.

### Limitations

- The `Strings` list is a client-side view. Whether it reflects the stored string table, and whether it is cached, is **not established**. Refresh and cache unload were forbidden.
- No scope or version column is shown for strings. Scope-complete absence (Site Default, groups, other users) is **not** shown.
- Infix and case-insensitive matching is observed by positive controls; no case variant of the FX_ IDs is visible.
- Single session. Not replay-verified. No database-durability claim.

### Acceptance checks (T8 status)

| AC | T8 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Partly established by a supported read-only lookup.** `FX_sUM` and `FX_sDescription` visibly absent from the Strings list (reliable filter). The Caption-dialog route is not needed for absence. | `t8-03`, `t8-04`, `t8-05`, `t8-06`, `t8-07` | Client list; no scope; not a database read |
| AC-6 | **Still not complete.** Component `FX_UMStatic` identified (T5). Caption value not set; the FX_sUM = `Unit of Measure` association has not been made. | `t8-02` onward | Creation or association is still needed |
| AC-7 | **Not evaluated.** FX_DescriptionStatic not selected. | — | — |
| AC-8 to AC-12 | Not evaluated | — | No Caption association, Save, close/reopen or runtime open |

### Operation counts (T8)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption dialog opened | **0** | — |
| String created / changed / value entered | **0 / 0 / 0** | — |
| Global Objects dialog opened / closed with Cancel / closed with OK | **1 / 1 / 0** | — |
| Creation controls (+, copy, trash, New, Add, Delete) clicked | **0** | — |
| Prompts or alerts answered | **0** | No prompt appeared |
| Edit menu opened / String item selected | **1 / 1** | — |
| Strings filter entries (key events) | **5** | `FX_sUM`, `Collection`, `FX_sDescription`, `FX_`, `_` |
| Ctrl+A replacements | **4** | — |
| Settle waits (2 s) | **5** | — |
| Tab selects | **2** | One tool error ("Tab 1 not found"), then success |
| Ref-not-found errors | **0** | — |
| Recovery snapshots / corrected inspections | **0 / 0** | — |
| Screenshots (worker-saved PNG) | **8** | `t8-01` to `t8-08` |
| Portal banner dismissals | **0** | None seen |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | — |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` Form tab; User scope; Save and Undo disabled; `FX_UMStatic` selected with Caption `FX_sUM`; **no dialog and no open menu**.
- Tab 0 Web Client: `Property Classes`; not acted on.

### Next step and blockers for the coordinator

1. **Creating the strings.** Both IDs are visibly absent. The Caption ellipsis dialog is the supported creation route (it raises the "does not exist. Create it?" prompt). Creating `FX_sUM` and `FX_sDescription` needs explicit coordinator authorization. The creation would be tenant-wide and must use the literal values `Unit of Measure` and `Description`.
2. **Caption association.** Still pending for both labels. T6's "No" decline left no visible row, so it is treated as no string created.
3. **Scope and cache.** The Strings list does not show scope. Whether it reflects the stored table is not established. This is a limitation, not a blocker for the creation decision.

### Knowledge state (T8)

| Finding | State |
|---|---|
| Edit menu `String` item opens a `Global Objects` dialog with a `Strings` name filter | observed (`t8-01`, `t8-02`) |
| Strings filter is infix and case-insensitive (positive control `Collection`) | observed (`t8-04`) |
| Underscore is matched (positive control `_`) | observed (`t8-07`) |
| `FX_sUM` has no row in the Strings list (reliable filter) | observed (`t8-03`); not a database read |
| `FX_sDescription` has no row in the Strings list (reliable filter) | observed (`t8-05`); not a database read |
| No `FX_`-prefixed string is visible | observed (`t8-06`) |
| T6 "No" click created no visible `FX_sUM` row | observed in this list (`t8-03`); DB state not established |
| `FX_sUM` / `FX_sDescription` literal values | **not applicable** (no rows) |
| Caption association for FX_UMStatic / FX_DescriptionStatic | **not done** |

Classification for T8: **observed only**. Not replay_verified. No database-durability claim.

---

## T9 — FX_sUM Caption-dialog creation attempt (cycle 11; STOPPED before commit)

Task: T9, run `R-20261010-214137-Ia7F`, cycle 11, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `f4c15271-fe7a-469c-a71b-edad73dec578`.
Full observations: `evidence/EXP-045/t9-fx-sum-caption-creation-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T9 entry).

### Authorization basis

Operator amendment (option 1, Caption-dialog creation) in the task message, for `FX_UMStatic` only. The amended brief at commit `1182ef7` was **not** read: `tools/` (including briefs) is unreadable under the task boundaries, and no git command was run.

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Select Designer tab | First attempt "Tab 1 not found" (tool error); retry succeeded. | — |
| 2 | Fresh snapshot | `FX_UMs` Form tab; User scope; Save and Undo disabled; no dialog; `FX_UMStatic (Static)`, Caption `FX_sUM`. | — |
| 3 | Screenshot (pre-click) | Designer, no dialog. | `t9-01` |
| 4 | Click `FX_UMStatic` Caption ellipsis, once | Prompt `String FX_sUM does not exist. Create it?` (Yes / No). | `t9-02` (before Yes) |
| 5 | Click **Yes**, once | Prompt closed; **String editor** opened: Name `FX_sUM`; **String Value `FX_s UM`**; Description blank. Footer OK / Help. | `t9-03` |
| 6 | STOP | No value typed; OK not clicked; no second action. | — |

### Result

- **Stop condition met:** the String Value is pre-filled with `FX_s UM`, not blank and not `Unit of Measure`.
- **Not committed.** No value entered, no OK. The FX_sUM Caption association is **not** achieved.
- **Possible creation:** the Yes click may already have created the tenant-wide `FX_sUM` with an unconfirmed value. **Unresolved.** The product did not show a save message.
- **The String dialog is left open** (OK / Help only; no Cancel). OK would commit, so it was not used.
- **FX_sDescription** not touched in T9.

### Acceptance checks (T9 status)

| AC | T9 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Partly superseded.** T8 showed `FX_sUM` absent from the Strings list before T9; T9's Yes may have changed that. Post-Yes state **unresolved**. | `t8-03`, `t9-02`, `t9-03` | No read-only check possible while the dialog is open |
| AC-6 | **Not complete.** Component `FX_UMStatic` identified (T5); the FX_sUM = `Unit of Measure` association is **not** made; the editor value is `FX_s UM`. | `t9-01`, `t9-03` | Stop condition |
| AC-7 | **Not evaluated.** | — | FX_sDescription not touched |
| AC-8 to AC-12 | Not evaluated | — | No Designer Save, close/reopen or runtime open |

### Operation counts (T9)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption dialog opened | **1** | `FX_UMStatic` |
| Creation prompt answered Yes / No | **1 / 0** | Yes clicked once |
| String value typed | **0** | — |
| OK / commit clicked | **0** | — |
| FX_sDescription opened / created | **0 / 0** | — |
| Designer close / reopen / runtime | **0 / 0 / 0** | — |
| Tab selects | **2** | One tool error ("Tab 1 not found"), then success |
| Fresh untargeted snapshots | **2** | Steps 2 and 8 |
| Finds (read-only) | **1** | Step 4 |
| Ref-not-found errors / recoveries | **0 / 0** | — |
| Screenshots | **3** | `t9-01` to `t9-03` |
| Portal banner dismissals | **0** | — |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | — |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; Save and Undo disabled; `FX_UMStatic` selected.
- **In-page `String` dialog open** for `FX_sUM`: Name `FX_sUM`; String Value `FX_s UM`; footer OK / Help only. **Not committed.** Left open for coordinator review.
- Tab 0 Web Client: `Property Classes`; not acted on.

### Blockers for the coordinator

1. **Pre-filled value `FX_s UM`.** The editor shows a value that is neither blank nor `Unit of Measure`. Decide how to proceed. The brief's stop condition applies, so no value was entered.
2. **Whether the Yes click created `FX_sUM`.** The prompt said the string did not exist. The editor then showed a value. The creation state is unknown until the dialog closes through a supported route.
3. **Closing the String dialog.** It offers only OK (which commits) and Help. No non-committing close was found. The coordinator must decide how to close it.
4. **Prompt versus editor disagreement.** Possible causes: the editor pre-fills a default on creation; or the string already had a value. Not established.
5. **FX_sDescription** remains uninspected, and no Designer Save, close/reopen or runtime check has occurred.

### Knowledge state (T9)

| Finding | State |
|---|---|
| Prompt text `String FX_sUM does not exist. Create it?` with Yes / No, for the FX_UMStatic Caption ellipsis | observed (`t9-02`) |
| Clicking Yes opens a String editor with Name `FX_sUM` and String Value `FX_s UM` | observed (`t9-03`) |
| `FX_sUM` created by the Yes click | **unresolved** |
| `FX_sUM` value after any commit | **unresolved**; not committed |
| Caption association `FX_sUM` = `Unit of Measure` | **not done** |
| String dialog closes through a non-committing control | **unresolved** (only OK and Help shown) |
| `FX_sDescription` existence and value | **unresolved** (not inspected) |

Classification for T9: **observed only**. Not replay_verified. No database-durability claim.

**T17 note on the T9 open questions:** `FX_sUM` was absent in the T8 Strings list and was listed with the value `FX_s UM` at T11. The T9 Yes answer is therefore the creation event, by sequence. Its timing was not independently established (no read occurred between T9 and the T10 OK). See the T17 section, §"FX_sUM and FX_sDescription history".

---

## T10 — Completion of the two authorized Caption-dialog string commits (cycle 13)

> **SUPERSEDED (T17) for `FX_sUM`:** the statements below that `FX_sUM` was "committed" with `Unit of Measure` and that this value was retained are **withdrawn**. T10 verified the value in the editor before OK; it did not read the stored value. T11 read the stored value as `FX_s UM`, and T12 corrected it (Tab commit, one OK) so that the Global Objects view reads `Unit of Measure`. The `FX_sDescription` part of T10 is not affected by this supersession (stored `Description` read in T11). The mechanism of the T10 mismatch is unresolved.

Task: T10, run `R-20261010-214137-Ia7F`, cycle 13, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `5b5606b7-7e62-46c8-9280-a930fff73907`.
Full observations: `evidence/EXP-045/t10-string-commit-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T10 entry).

### Part 1 — `FX_sUM` (FX_UMStatic), value replaced and committed

| Step | Action | Result | Evidence |
|---|---|---|---|
| 1 | Fresh snapshot | T9 editor preserved: Name `FX_sUM`, String Value `FX_s UM`, Description blank. | `t10-01` |
| 2 | Click String Value cell, once; Ctrl+A; fill `Unit of Measure` | Active textbox `Unit of Measure`. | — |
| 3 | Fresh snapshot + screenshot (pre-commit) | Name `FX_sUM`; String Value `Unit of Measure`; Description blank. | `t10-02` |
| 4 | Click OK, once | Dialog closed; no alert or prompt. | `t10-03` (after) |

### Part 2 — `FX_sDescription` (FX_DescriptionStatic), created and committed

| Step | Action | Result | Evidence |
|---|---|---|---|
| 1 | Click `FX_DescriptionStatic` row in Components grid, once | Properties `FX_DescriptionStatic (Static)`; Caption `FX_sDescription`. | `t10-04` |
| 2 | Click Caption ellipsis, once | Prompt `String FX_sDescription does not exist. Create it?` (exact). | `t10-05` |
| 3 | Click Yes, once | String editor: Name `FX_sDescription`; String Value `FX_s Description` (generated default); Description blank. | `t10-06` |
| 4 | Click String Value cell, once; Ctrl+A; fill `Description` | Active textbox `Description`. | — |
| 5 | Fresh snapshot + screenshot (pre-commit) | Name `FX_sDescription`; String Value `Description`; Description blank. | `t10-07` |
| 6 | Click OK, once | Dialog closed; no alert or prompt. | `t10-08` (after) |

### Result

- **Both commits completed** through the operator-amended Caption-dialog route. Neither stop condition triggered. Neither was retried.
- **Resource state:** `FX_sUM` was created by T9's Yes (with generated default `FX_s UM`). Its editor value was set to `Unit of Measure` in T10 and OK was clicked; **the retention of that value is SUPERSEDED** (T11 read `FX_s UM`; T12 corrected it). `FX_sDescription` was created in T10 by its Yes, with its value set to `Description` (stored `Description` read in T11). Both are tenant-wide string resources.
- **Designer state after the commits:** no dialog; FX_UMStatic Caption `FX_sUM`; FX_DescriptionStatic Caption `FX_sDescription`; canvas labels still show the raw IDs `FX_sUM:*` and `FX_sDescription:`; toolbar Save enabled (accessibility and screenshot); **Designer Save not pressed**.
- **Separate commit behavior observed:** after each OK, the Designer's Save became enabled. Mechanism not established (the Caption references were not changed).
- **Not verified:** the committed literal values. The canvas and Caption show the IDs, not the values. Verification is deferred to the next task via Edit > String.

### Acceptance checks (T10 status)

| AC | T10 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | **Superseded for the creation step.** Pre-creation absence was established in T8. The commits happened in T9 and T10. | `t8-03`, `t8-05`, `t9-02`, `t10-05` | — |
| AC-6 | **Commit done; value verification pending.** FX_UMStatic identified (T5); Caption reference `FX_sUM`; committed value `Unit of Measure` (entered, verified pre-commit). | `t10-02`, `t10-03` | Not verified through Edit > String |
| AC-7 | **Commit done; value verification pending.** FX_DescriptionStatic identified; Caption `FX_sDescription`; committed value `Description` (entered, verified pre-commit). | `t10-07`, `t10-08` | Not verified through Edit > String |
| AC-8 | **Partly.** Two caption associations exist; Designer Save not yet performed; Save reported enabled. | `t10-03`, `t10-08` | Designer Save is the next step |
| AC-9 to AC-12 | Not evaluated | — | Save, close/reopen, runtime open not performed |

### Operation counts (T10)

| Operation | Count | Notes |
|---|---|---|
| Form Save / Finish / Form creation | **0 / 0 / 0** | — |
| Caption ellipsis clicks | **1** | FX_DescriptionStatic (FX_UMStatic's was in T9) |
| Creation prompt Yes / No | **1 / 0** | FX_sDescription Yes; FX_sUM Yes was in T9 |
| String value fields edited | **2** | `Unit of Measure`; `Description` |
| String commit OK clicks | **2** | One per string |
| Component selections | **1** | FX_DescriptionStatic |
| Edit > String verification | **0** | Deferred to the next task |
| Form close / reopen / runtime | **0 / 0 / 0** | — |
| Pre-commit fresh snapshots | **2** | One per string |
| Untargeted fresh snapshots (total) | **7** | Including post-commit reads |
| Finds (read-only) | **4** | — |
| Screenshots | **8** | `t10-01` to `t10-08` |
| Tab select calls | **2** | One returned "Tab 1 not found"; the retry succeeded |
| Ref-not-found / timeouts / error alerts | **0 / 0 / 0** | — |
| Recovery snapshots / corrected inspections | **0 / 0** | — |
| Portal banner dismissals | **0** | — |
| Login, logout, refresh, restart, FormSync, cache unload | **0** | — |
| JavaScript, evaluate, run-code (worker) | **0** | — |

### Discrepancies and limits

1. **Undo state:** accessibility reports Undo disabled after both commits; the screenshot icon appears active. Unresolved.
2. **Save state:** enabled after both commits (accessibility and screenshot). Not pressed.
3. **Display:** the canvas and Caption show the IDs, not the committed values. Literal values are unverified.
4. **Scope and table:** the strings are tenant-wide. Their persistence is not verified here.

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; **no dialog**; Save enabled; `FX_DescriptionStatic (Static)` selected with Caption `FX_sDescription`.
- Tab 0 Web Client: `Property Classes` runtime tab; not acted on.

### Blockers and next step for the coordinator

1. **Verify the committed values** of `FX_sUM` and `FX_sDescription` through Edit > String (Global Objects, Strings filter), read-only, then cancel. This is the next task.
2. **Designer Save** (one ordinary save) only after step 1.
3. **Undo state discrepancy** (accessibility vs screenshot) should be checked in the next task before any Save.
4. Close/reopen, field order and runtime checks remain outstanding.

### Knowledge state (T10)

| Finding | State |
|---|---|
| Prompt `String FX_sDescription does not exist. Create it?` (Yes / No) for FX_DescriptionStatic | observed (`t10-05`) |
| Generated default `FX_s Description` shown after Yes | observed (`t10-06`) |
| Value replaced with `Unit of Measure` (`FX_sUM`) and `Description` (`FX_sDescription`) before OK | observed (`t10-02`, `t10-07`) |
| Each OK closed the String dialog with no alert | observed (`t10-03`, `t10-08`) |
| Designer Save enabled after the commits | observed (accessibility and `t10-03`, `t10-08`) |
| Committed literal values `Unit of Measure` / `Description` persisted | **unresolved** (not verified; Edit > String deferred) |
| `FX_sUM` and `FX_sDescription` tenant-wide persistence | **unresolved** (not verified; no database read) |
| Undo state after commits | **unresolved** (accessibility vs screenshot disagree) |

Classification for T10: **observed only**. Not replay_verified. No database-durability claim.

**T11 correction (superseding the T10 "committed" wording for FX_sUM):** the T10 pre-commit check verified the value in the editor, not the stored value. T11 read the stored value and found `FX_s UM`. See the T11 section.

---

## T11 — Read-only verification of committed strings and Form gates; STOPPED before Designer Save (cycle 14)

Task: T11, run `R-20261010-214137-Ia7F`, cycle 14, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `cd5ab57b-3ac9-42d0-96c2-94efc9d14c34`.
Full observations: `evidence/EXP-045/t11-verification-gate-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T11 entry).

### String verification (Edit > String, Global Objects, Strings filter; read-only)

| String | Filter result | Stored Name | Stored String Value | Description | Gate |
|---|---|---|---|---|---|
| `FX_sUM` | One row | `FX_sUM` | **`FX_s UM`** | blank | **FAIL** (required `Unit of Measure`) |
| `FX_sDescription` | One row | `FX_sDescription` | `Description` | blank | PASS |

Screenshots: `t11-02` (`FX_sUM`: value `FX_s UM`), `t11-03` (`FX_sDescription`: value `Description`). Version visible on both: `User version for user anton.ramos@3mworks.com.ph`.

### Form gates (read-only)

| Gate | Observed | Pass |
|---|---|---|
| Form identity / Name | `FX_UMs` (Form properties, `t11-05`) | yes |
| Scope | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | yes |
| Version | `User version for user anton.ramos@3mworks.com.ph` | yes |
| Primary Collection | `FX_UMs` (Collections, `t11-05`) | yes |
| FX_UMStatic Caption | `FX_sUM` (`t11-04`) | yes |
| FX_DescriptionStatic Caption | `FX_sDescription` (T10 `t10-04`; T11 canvas) | yes |
| Bindings | FX_UMEdit `object.FX_UM`; FX_DescriptionEdit `object.FX_Description`; FX_UMGridCol `object.FX_UM`; FX_DescriptionGridCol `object.FX_Description` (components grid) | yes |
| Field order | canvas and Pane (01) order: FX_UM above FX_Description | yes |
| Save | **enabled** (fresh accessibility snapshot) | state only |
| Undo | disabled (fresh accessibility snapshot) | state only |
| Dialog | none after Global Objects Cancel | yes |

### Result

- **Designer Save NOT performed.** The `FX_sUM` String Value is `FX_s UM`, not `Unit of Measure`. The T11 gate requires both strings to hold the exact values before Save. Per the brief this is a STOP.
- No Caption, component, binding, layout, or Form change was made. Only selections and view tabs were changed.
- The pending changes (two string commit operations) remain unsaved. They were not discarded.

### Acceptance checks (T11 status)

| AC | T11 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | Superseded for creation. Post-creation: `FX_sUM` exists with stored value `FX_s UM`; `FX_sDescription` exists with `Description`. | `t11-02`, `t11-03` | Global Objects view only; no database read |
| AC-6 | **Not met.** Component identity and Caption `FX_sUM` verified; stored value is not `Unit of Measure`. | `t11-04`, `t11-02` | Value mismatch |
| AC-7 | **Partly met.** Component identity and Caption `FX_sDescription`; stored value `Description` verified. | `t11-03`, `t11-04` | Designer Save not performed |
| AC-8 | **Not met.** Save not performed; the pre-Save gate failed. | — | Blocked by AC-6 |
| AC-9 to AC-12 | Not evaluated | — | No Save, close/reopen, runtime |

### Operation counts (T11)

| Operation | Count |
|---|---|
| Designer Save | **0** (blocked) |
| Finish / Form creation | **0 / 0** |
| Form close / reopen / runtime | **0 / 0 / 0** |
| Caption ellipsis clicks | **0** |
| Creation prompts answered | **0** |
| String field edits | **0** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries | **2** (`FX_sUM`, `FX_sDescription`) |
| Row selections (Global Objects) | **2** |
| Component selection | **1** (`FX_UMStatic`) |
| Properties Form tab / Details Collections tab view changes | **1 / 1** |
| Tab select calls | **2** (one error "Tab 1 not found", then success) |
| Fresh snapshots (approx.) | **6** |
| Finds (read-only) | **8** |
| Screenshots | **5** (`t11-01` to `t11-05`) |
| Ref-not-found / timeouts / error alerts | **0 / 0 / 0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Login, logout, refresh, restart, FormSync, cache unload | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; **no dialog**; **Save enabled (not pressed)**; Undo disabled; Details on Collections; Properties on the Form tab.
- Tab 0 Web Client: `Property Classes`; not acted on.

### Blockers and decision needed (coordinator)

1. **`FX_sUM` stored value is `FX_s UM`.** The T10 edit did not persist as `Unit of Measure`. Options for the coordinator: (a) authorise correcting the `FX_sUM` String Value to `Unit of Measure` through the Global Objects String editor (a String edit, not a creation); (b) hold. The cause of the mismatch is unresolved.
2. **Designer Save** must wait for item 1 and a fresh verification.
3. **Pending unsaved changes** (Save enabled) must not be discarded. Undo/Save disagreement from T10 is resolved: accessibility reports Undo disabled and Save enabled.
4. Close/reopen, field-order and runtime checks remain outstanding.

### Knowledge state (T11)

| Finding | State |
|---|---|
| `FX_sDescription` stored value `Description` (Global Objects, one row) | observed (`t11-03`) |
| `FX_sUM` stored value `FX_s UM` (Global Objects, one row) | observed (`t11-02`) |
| The T10 `Unit of Measure` edit did not persist for `FX_sUM` | observed (T11 read); cause **unresolved** |
| `FX_sUM` and `FX_sDescription` tenant-wide persistence | **unresolved** (no database read) |
| FX_UMStatic Caption `FX_sUM`; FX_DescriptionStatic Caption `FX_sDescription` | observed (`t11-04`, `t10-04`, canvas) |
| Bindings and FX_UM-above-FX_Description order | observed (components grid; canvas) |
| Designer Save enabled with pending changes | observed (accessibility snapshot) |
| Designer Save persisted state | **not performed** |

Classification for T11: **observed only**. Not replay_verified. No database-durability claim.

---

## T12 — Operator-authorized correction of FX_sUM String Value; read-only verification; no Designer Save (cycle 16)

Task: T12, run `R-20261010-214137-Ia7F`, cycle 16, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `6059f571-8d63-441e-952a-58ed621437b5`.
Full observations: `evidence/EXP-045/t12-fx-sum-correction-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T12 entry).

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Select Designer tab (two attempts "Tab 1 not found"; list; select) | Designer selected on the 4th call. | — |
| 2 | Fresh snapshot | `FX_UMs` tab; User scope; Save enabled (pending); Undo disabled; no dialog. | — |
| 3 | Click `Components` tab; click `FX_UMStatic` row (once) | Row selected. | — |
| 4 | Click Properties `Component` tab (view change) | Header `FX_UMStatic (Static)`; Caption `FX_sUM`. | `t12-01` |
| 5 | Click Caption ellipsis (once) | Existing String dialog opened directly; **no creation prompt**; Name `FX_sUM`; String Value `FX_s UM`; Description blank. | — |
| 6 | Click String Value cell (once); Ctrl+A; type `Unit of Measure` (slowly) | Cell in edit mode with `Unit of Measure`. | — |
| 7 | Press **Tab** (once) | Cell edit exited; grid cell shows `Unit of Measure`; Name `FX_sUM`; Description blank. | `t12-02` |
| 8 | Fresh snapshot + screenshot (pre-OK) | Verified as in step 7. | `t12-02` |
| 9 | Click **OK** (once) | Dialog closed; no alert or prompt. | — |
| 10 | Edit > String; filter `FX_sUM` (slowly); select the single row (once) | Properties: Name `FX_sUM`; **String Value `Unit of Measure`**; Description blank. | `t12-03` |
| 11 | Click **Cancel** (once) | Global Objects closed; no alert. | — |
| 12 | Fresh snapshot | No dialog; Save enabled (pending, **not pressed**); Undo disabled. | — |

### Result

- **Corrected.** The stored `FX_sUM` value, as shown in the Global Objects view, is `Unit of Measure`. Before T12 (T11) it was `FX_s UM`.
- **Candidate explanation (not established):** T10 typed the value without committing the grid cell, and OK then committed the earlier value. T12 committed the cell with Tab before OK. This is a single corrected-versus-uncorrected comparison, not a tested cause; the `FX_sDescription` commit in T10 (also without Tab) stored `Description`, so the commit method alone does not explain both results.
- **Not done:** Designer Save (prohibited in T12); FX_sDescription re-read or edit; close/reopen; runtime; Form changes.

### Acceptance checks (T12 status)

| AC | T12 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | Post-correction: `FX_sUM` exists with `Unit of Measure` (client view); `FX_sDescription` `Description` (T11). | `t12-03`, `t11-03` | Client view; no database read |
| AC-6 | **Met in the client view, pending Designer Save.** Component `FX_UMStatic` identified; Caption `FX_sUM`; stored value `Unit of Measure`. | `t12-01`, `t12-03` | Not saved; not re-read after save |
| AC-7 | **Partly met.** Component identified; `FX_sDescription` = `Description` (T11). Not re-read in T12. | `t11-03`, `t10-08` | — |
| AC-8 | **Not met.** Designer Save not performed (prohibited in T12); pending. | — | Save awaits coordinator authorisation |
| AC-9 to AC-12 | Not evaluated | — | No Save, close/reopen, runtime |

### Operation counts (T12)

| Operation | Count |
|---|---|
| Designer Save | **0** (prohibited) |
| Finish / creation | **0 / 0** |
| Close / reopen / runtime | **0 / 0 / 0** |
| Caption ellipsis clicks | **1** |
| Creation prompts answered | **0** |
| String cell edits | **1** (`FX_sUM` → `Unit of Measure`) |
| Commit method | **Tab ×1** (cell) |
| String dialog OK clicks | **1** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries | **1** (`FX_sUM`) |
| Row selections | **2** (`FX_UMStatic` in components grid; `FX_sUM` in Global Objects) |
| Tab select calls | **4** (two "Tab 1 not found" errors) |
| Explicit untargeted fresh snapshots | **8** (plus automatic snapshots) |
| Finds (read-only) | **about 6** |
| Screenshots | **3** (`t12-01` to `t12-03`) |
| Ref-not-found / recovery | **0 / 0** |
| Timeouts / error alerts | **0** |
| Login, logout, refresh, restart, FormSync, cache unload | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; **no dialog**; **Save enabled (pending, not pressed)**; Undo disabled; `FX_UMStatic (Static)` selected, Caption `FX_sUM`.
- Tab 0 Web Client: `Property Classes`; not acted on.

### Blockers and next step (coordinator)

1. **Authorise or hold the single ordinary Designer Save.** Its pre-Save gates are now met for `FX_sUM` (client view `Unit of Measure`) and `FX_sDescription` (`Description`, T11). A fresh `FX_sDescription` read may be wanted first.
2. Close/reopen, post-reopen field-order and runtime checks remain outstanding.
3. Database persistence of both strings is not established by any step so far.

Classification for T12: **observed only**. Not replay_verified. No database-durability claim.

---

## T13 — Pre-Save verification and ONE ordinary Designer Save (cycle 17)

Task: T13, run `R-20261010-214137-Ia7F`, cycle 17, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `725c3d06-3344-4ef5-a6f6-b4b6bb5d1be9`.
Full observations: `evidence/EXP-045/t13-pre-save-verification-and-single-designer-save-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T13 entry).

### Pre-Save verification (all gates passed)

| Check | Observed | Evidence |
|---|---|---|
| Edit > String, `FX_sUM` (one row, selected) | Name `FX_sUM`; String Value `Unit of Measure`; Description blank | `t13-01` |
| Edit > String, `FX_sDescription` (one row, selected) | Name `FX_sDescription`; String Value `Description`; Description blank | `t13-02` |
| Global Objects closed | Cancel, once; no prompt | — |
| Form identity / scope | `FX_UMs` tab; User scope (`anton.ramos@3mworks.com.ph`); Version `User version…` (T11 Form properties) | `t13-03`; T11 `t11-05` |
| Primary Collection | `FX_UMs` (T11 `t11-05`) | T11 |
| FX_UMStatic Caption | `FX_sUM` | `t13-03` / T12 `t12-01` |
| FX_DescriptionStatic Caption | `FX_sDescription` | `t13-03` |
| Bindings | `FX_UMEdit` object.FX_UM; `FX_DescriptionEdit` object.FX_Description; grid columns FX_UMGridCol object.FX_UM, FX_DescriptionGridCol object.FX_Description | components grid snapshot; `t13-03` |
| Field order | Pane (01): FX_UMStatic (tab 3), FX_UMEdit (4), FX_DescriptionStatic (5), FX_DescriptionEdit (6); canvas FX_sUM above FX_sDescription | `t13-03` |
| Pre-Save state | Save enabled; Undo disabled; no dialog | fresh toolbar snapshot |

### Designer Save (performed once)

| Step | Result |
|---|---|
| Click toolbar Save (`e16`), once | Returned without error |
| Fresh toolbar snapshot | Save **disabled**; Undo disabled; Regenerate Form disabled |
| Dialog/alert check | No alertdialog; tooltip `Save` only |
| Screenshot | `t13-04`: Save icon greyed; no dialog; `FX_UMs`, User scope |

- **Observed:** the Save completed in the UI (Save became disabled, no alert). Observed UI completion only.
- **Not established:** persistence across close/reopen. That is the next task.
- **Not established:** whether Regenerate Form's disabled state after the Save has any meaning; it was not invoked.

### Acceptance checks (T13 status)

| AC | T13 status | Basis | Limitation |
|---|---|---|---|
| AC-3 | Post-creation read: `FX_sUM` and `FX_sDescription` exist with the required values (Global Objects client view). | `t13-01`, `t13-02` | Client view; not a database read |
| AC-6 | Component `FX_UMStatic` identified; Caption `FX_sUM`; value `Unit of Measure`. Saved. | `t12-01`, `t13-01`, `t13-04` | Save persistence not reopened |
| AC-7 | Component `FX_DescriptionStatic` identified; Caption `FX_sDescription`; value `Description`. Saved. | `t13-02`, `t13-03` | Save persistence not reopened |
| AC-8 | Pre-Save two caption associations, order and bindings verified; one ordinary Save completed in UI (Save disabled, no dialog). | `t13-03`, `t13-04` | Reopen not performed |
| AC-9 to AC-12 | Not evaluated in T13 (no close/reopen, no runtime) | — | Next task |
| AC-5 | Single Finish performed in T3; visible inventory one row (T3). | T3 records | Not re-queried in T13 |

### Operation counts (T13)

| Operation | Count |
|---|---|
| Designer Save | **1** |
| Finish / Form creation | **0 / 0** |
| Close / reopen / runtime | **0 / 0 / 0** |
| Caption ellipsis clicks | **0** |
| Creation prompts answered | **0** |
| String edits / string creations | **0 / 0** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries / row selections | **2 / 2** |
| Component selection | **1** (selection only) |
| Undo clicks | **0** |
| Tab select calls | **3** (one "Tab 1 not found" error) |
| Screenshots | **4** (`t13-01` to `t13-04`) |
| Ref-not-found / timeouts / error alerts | **0 / 0 / 0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Login, logout, refresh, restart, FormSync, cache unload, Regenerate Form | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `FX_UMs` Form tab; User scope; **Save disabled**; Undo disabled; **no dialog**; `FX_DescriptionStatic (Static)` selected, Caption `FX_sDescription`.
- Tab 0 Web Client: `Property Classes` runtime tab; not acted on.

### Next step (coordinator)

1. Close the clean `FX_UMs` Form tab ordinarily; reopen the same User-scope Form through the supported Form-menu / Designer path; verify Name, ScopeType User, field bindings, FX_UM-before-FX_Description order and both captions (AC-9, AC-10).
2. Optional single runtime open of `FX_UMs` (AC-11).
3. Final cleanup and evidence matrix (AC-12).

Classification for T13: **observed only**. Not replay_verified. The Save completion is a UI observation; persistence across reopen is not yet established. No database-durability claim.

---

## T14 — Ordinary close and reopen of FX_UMs; read-only recovery verification (cycle 18)

Task: T14, run `R-20261010-214137-Ia7F`, cycle 18, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `21a27eb9-6bca-4a3b-a0d0-a03f4fb87b63`.
Full observations: `evidence/EXP-045/t14-close-reopen-recovery-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T14 entry).

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Tab list; select Designer | Designer selected; no error. | — |
| 2 | Fresh snapshot; pre-close gate | FX_UMs tab; User scope; Save disabled; Undo disabled; no dialog. | `t14-01` |
| 3 | Click FX_UMs Form tab close control, once | Closed; **no prompt**. Vendor `IdoPropertyClasses` view shown; Save disabled. | `t14-02` |
| 4 | Click Form menu; Escape; click Form again | Second click returned ref-not-found; recovery snapshot (1 of 1) showed the Form menu open. | `t14-03` |
| 5 | Click Form-menu item `FX_UMs` (single entry), once | Designer opened `?MGForm=FX_UMs`. | `t14-04` |
| 6 | Identity, Save, Undo, canvas | Name FX_UMs; User version; User scope; Save disabled; Undo disabled; canvas `Unit of Measure:*` above `Description:`. | `t14-04` |
| 7 | Details Expand; Collections; Components tab; grid Expand (each once) | Primary Collection `FX_UMs`; components listed with bindings. | — |
| 8 | Select FX_UMStatic (once) | Caption `FX_sUM`. | `t14-05` |
| 9 | Select FX_DescriptionStatic (once) | Caption `FX_sDescription`. | `t14-06` |
| 10 | Edit > String > Global Objects; filter `FX_sUM`; select row (once) | One row; String Value `Unit of Measure`. | `t14-07` |
| 11 | Filter `FX_sDescription`; select row (once) | One row; String Value `Description`. | `t14-08` |
| 12 | Cancel (once) | Global Objects closed; no alert. | — |
| 13 | Final snapshot and screenshot | Save disabled; Undo disabled; no dialog; FX_UMs selected. | `t14-09` |

### Acceptance findings (recovered versus unrecovered)

| AC | T14 status | Basis | Limitation |
|---|---|---|---|
| AC-9 | **Recovered (observed).** Clean close, no prompt; reopened by Form menu; same Name, User scope; Save disabled; bindings; FX_UM above FX_Description; captions FX_sUM and FX_sDescription. | `t14-01`–`t14-06` | Form-menu reopen, not Select Form dialog; Designer-level evidence only |
| AC-10 | **Observed.** Canvas and grid headers show `Unit of Measure` and `Description` after reopen; Caption references FX_sUM and FX_sDescription; stored values `Unit of Measure` / `Description` in the Global Objects view. | `t14-04`–`t14-09` | Stored values from client view, not a database read; display-change cause not established |
| AC-8 (persistence in this session) | Save remains disabled after reopen; the T13 Save is reflected in the reopened Form in this session. | `t14-04`; `t13-04` | Same browser session only |
| AC-11 | Not attempted | — | Optional runtime open not performed |
| AC-12 | Cleanup inventory updated | `cleanup-inventory.md` | — |

### Operation counts (T14)

| Operation | Count |
|---|---|
| Designer Save / Undo | **0 / 0** |
| Finish / New Form / creation | **0 / 0 / 0** |
| Form tab close / Form reopen | **1 / 1** |
| Select Form dialog used | **0** |
| Form menu opened (click) | **2** (one successful; one ref-not-found after Escape) |
| Escape key presses | **1** |
| Expand Panel / Components tab / grid Expand clicks | **1 / 1 / 1** (view changes) |
| Component row selections | **2** (selection only) |
| Caption ellipsis clicks / creation prompts / string edits | **0 / 0 / 0** |
| Edit menu / String item | **1 / 1** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries / row selections | **2 / 2** |
| Tab select calls | **2** (no error) |
| Ref-not-found errors / recovery snapshots / corrected inspections | **1 / 1 / 0** |
| Timeouts / error alerts | **0 / 0** |
| Screenshots | **9** (`t14-01` to `t14-09`) |
| Login, logout, refresh, restart, FormSync, cache unload, Regenerate Form, runtime open | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Limitations and deviations

1. **Select Form search not used.** The Form menu's single `FX_UMs` entry was used instead of the exact-name Select Form search. Whether Select Form returns the same single row is not tested.
2. **Display change.** Canvas and grid headers now show literal captions; before close they showed raw IDs. The cause is not established, and it is not treated as evidence of string-table durability.
3. **Client view only.** Stored string values were read in Global Objects, not from the database.
4. **Designer URL** dropped `MGForm=FX_UMs` after Cancel, as in earlier tasks. Not investigated.

### Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` tab; User scope; Save **disabled**; Undo disabled; **no dialog**; FX_DescriptionStatic selected, Caption `FX_sDescription`.
- Tab 0 Web Client: `Property Classes`; not acted on.

### Next steps (coordinator)

1. Optional single runtime open of `FX_UMs` to observe whether both captions render (AC-11, non-gating).
2. Final cleanup and evidence matrix (AC-12), noting the Select Form deviation and the display change.

Classification for T14: **observed only**. Not replay_verified. The recovery is a UI observation in this session. No database-durability, cross-session or cross-user claim is made.

---

## T15 — Optional single read-only Web Client runtime open of FX_UMs (cycle 19)

Task: T15, run `R-20261010-214137-Ia7F`, cycle 19, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `fe6ce0a1-9c9b-4dc2-8023-af6a54f8d6b4`.
Full observations: `evidence/EXP-045/t15-webclient-runtime-open-observations.md`. Cleanup: `evidence/EXP-045/cleanup-inventory.md` (T15 entry).

### Actions and results

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | List tabs; select Web Client (tab 0) | Web Client selected; no error. | — |
| 2 | Fresh snapshot (preflight) | Authenticated identity bar; no sign-in/config screen; no banner; no unsaved-change prompt; Save disabled; leftover runtime tabs present. PASS. | — |
| 3 | Click toolbar `Open` (once) | Select Form dialog opened; leftover filter `FX_UMs`; one row FX_UMs / FX_UMs; Filter By Name; both checkboxes unchecked. | `t15-01` |
| 4 | Click row FX_UMs / FX_UMs (once; selection) | Row selected. | — |
| 5 | Find OK; click OK (once) | Dialog closed; runtime `FX_UMs` tab opened and selected (`favoriteContext=FX_UMs`). | `t15-02` |
| 6 | Settled snapshot; screenshot | Captions `Unit of Measure` (header and label) above `Description`; fields empty; Save disabled; status `Unit of Measure (Object 1 of 1)`; no dialog. | `t15-02` |
| 7 | Stop | No record entered, saved or deleted; Form left open read-only. | — |

### Acceptance (AC-11, optional, non-gating)

- **AC-11: OBSERVED.** The runtime FX_UMs Form opened through native navigation without authentication recovery or metadata alteration. Rendered captions: `Unit of Measure` above `Description`.
- The runtime observation does not establish record content, record count, or database state. Not claimed.

### Operation counts (T15)

| Operation | Count |
|---|---|
| Runtime Form opened | **1** |
| Select Form opened / row selected / OK | **1 / 1 / 1** |
| Records entered, edited, saved, deleted | **0** |
| Save / Add / New / Delete / Refresh / Submit | **0** |
| Designer Save / Finish / creation / string edits | **0 / 0 / 0 / 0** |
| Designer close / reopen | **0 / 0** |
| Tab selects | **1** (no error) |
| Fresh snapshots / finds | **4 / 4** |
| Screenshots | **2** (`t15-01`, `t15-02`) |
| Ref-not-found / timeouts / error alerts / recoveries | **0 / 0 / 0 / 0** |
| Login, logout, refresh, restart, FormSync, cache unload, direct URL | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

### Browser state at stop (last verified)

- Tab 0 Web Client (selected): runtime `FX_UMs` tab open and selected, read-only, empty fields, Save disabled, no dialog. Leftover runtime tabs untouched.
- Tab 1 Designer: not acted on in T15. Last state (T14): `FX_UMs` Form tab, User scope, Save disabled, no dialog.

### Next step (coordinator)

- The complete AC-1 through AC-12 evidence reconciliation is reserved for a separate documentation-only task, as the brief directs. This step has no further experiment action pending.

Classification for T15: **observed only**. Not replay_verified. No database-durability claim.

---

## T17 — Final documentation audit (cycle 22; documentation only)

Task: T17, run `R-20261010-214137-Ia7F`, cycle 22, worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062`, task_message_id `5fd052eb-ec36-401b-af4d-fb0d0ea1921d`.
Scope: documentation only. No browser call, no Mongoose action, no artifact change. This section supersedes the T16 text-only audit, which wrote no files. Corrections to that audit are listed below.
Files written in T17: this record; `evidence/EXP-045/cleanup-inventory.md` (rewritten); `evidence/EXP-045/t17-final-evidence-matrix.md` (new).

### Disposition

**Observed, accepted with limitations. NOT replay_verified.** Every mandatory acceptance check (AC-1 to AC-10 and AC-12) has recorded support. AC-11 (optional) is observed.

Explicitly **not established** (not claimed):
- Database-level durability of either string or of the Form.
- Cross-session or cross-user recovery.
- Replay verification.
- String scope or version as independently verified. The Global Objects list shows no scope field. The Properties pane shows only a truncated Version value (`User version for user an…`).
- The creation timing of `FX_sUM` and `FX_sDescription` (inferred from sequence, not timed).
- The mechanism of the T10 `FX_sUM` mismatch.
- The mechanisms of the T6 timeout alert, the Designer URL changes, the Save state after the string OKs, the T10 Undo accessibility/icon discrepancy and the canvas raw-ID-to-literal change.

### Final AC matrix (AC-1 to AC-12)

Paths are relative to the repository root. Screenshot descriptions are in `evidence/EXP-045/t17-final-evidence-matrix.md` §8.

| AC | Verdict | Exact evidence | Limitations |
|---|---|---|---|
| AC-1 | PASS (T1 preflight, with limits) | `evidence/EXP-045/t1-01-designer-vendor-idopropertyclasses-save-disabled.png`; `evidence/EXP-045/t1-04-webclient-idos-FX_UMs-record-and-properties-read-only.png`; `evidence/EXP-045/t1-05-webclient-property-classes-FX_UMBase-row-read-only.png`; `evidence/EXP-045/t1-gate-and-lookup-observations.md` | Preflight taken at T1 only and not repeated. The IDO's project and two UDF properties were read at T1. `FX_UMBase` was already checked out to the operator account (EXP-044 state) and was not changed. The Designer About / "Site Developer" text was not re-observed. The Designer console error was not diagnosed. The repository baseline is the session-start git status, not recomputed |
| AC-2 | PASS | `evidence/EXP-045/t1-02-select-form-positive-control-FX_HelloWorld01-settled.png` (positive control, one row); `evidence/EXP-045/t1-03-select-form-target-FX_UMs-exact-settled-zero-rows.png` (zero rows); repeated before Finish in `evidence/EXP-045/t3-01-select-form-positive-control-FX_HelloWorld01-settled.png` (one row) and `evidence/EXP-045/t3-02-select-form-target-FX_UMs-exact-settled-zero-rows.png` (zero rows); after Finish `evidence/EXP-045/t3-11-select-form-post-finish-FX_UMs-exact-settled-one-row.png` | Name filter; Case Sensitive and Starts With unchecked. Select Form shows no scope column and no total. Case variants not tested. Visible inventory only |
| AC-3 | PASS (client view) | Absence: `evidence/EXP-045/t8-03-Strings-filter-FX_sUM-settled.png` (no rows); `evidence/EXP-045/t8-05-Strings-filter-FX_sDescription-settled.png` (no rows). Positive controls: `evidence/EXP-045/t8-04-Strings-filter-positive-control-Collection-settled.png`, `evidence/EXP-045/t8-07-Strings-filter-underscore-positive-control-settled.png`. No FX_ row: `evidence/EXP-045/t8-06-Strings-filter-FX_prefix-inventory-settled.png`. Caption prompts: `evidence/EXP-045/t9-02-FX_sUM-create-prompt-exact-text-before-Yes.png` ("does not exist"), `evidence/EXP-045/t10-05-FX_sDescription-create-prompt-exact-text-before-Yes.png` | The Strings list is a client view. No scope shown. Cache state not established. No database read. The Edit > String route is the one the brief names; T1's "no lookup found" finding is superseded by T8 |
| AC-4 | PASS | Route and Name/Data Source: `evidence/EXP-045/t2-01-wizard-selection-classic-multiview-before-ok.png`, `evidence/EXP-045/t2-02-wizard-page1-name-and-data-source-FX_UMs.png`. Default properties: `evidence/EXP-045/t2-03-wizard-page2-default-properties-primary-collection.png`. Order and reposition: `evidence/EXP-045/t2-04-wizard-page3-property-order-before-reposition.png`, `evidence/EXP-045/t2-05-wizard-page3-FX_UM-row-selected-before-up-arrow.png`, `evidence/EXP-045/t2-06-wizard-page3-after-one-up-arrow-order-check.png`. Final page, Save Template unchecked, Finish not pressed: `evidence/EXP-045/t2-08-wizard-final-page-save-template-unchecked-finish-not-pressed.png`. Re-verified before Finish: `evidence/EXP-045/t3-03-wizard-final-page-before-reverify-save-template-unchecked.png`, `evidence/EXP-045/t3-04-wizard-back-to-page3-order-reverify.png`, `evidence/EXP-045/t3-05-wizard-back-to-page2-default-selection-reverify.png`, `evidence/EXP-045/t3-06-wizard-back-to-page1-name-and-data-source-reverify.png`, `evidence/EXP-045/t3-07-wizard-forward-to-page3-order-reverify.png`, `evidence/EXP-045/t3-08-wizard-final-page-pre-finish-configuration-verified.png` | Save Template was seen only on the final page (EXP-041-R3 did not reach it). The positions shown are the wizard grid's; the Designer order is verified in AC-8 and AC-9 |
| AC-5 | PASS | `evidence/EXP-045/t3-09-after-finish-process-completed-alert-before-ok.png`; `evidence/EXP-045/t3-10-after-finish-generated-FX_UMs-form-designer-state.png`; `evidence/EXP-045/t3-11-select-form-post-finish-FX_UMs-exact-settled-one-row.png` | One Select Form query after Finish (T3). User scope from the Designer status bar (`t3-10`), not from Select Form. Templates created: 0 |
| AC-6 | PASS (created; value read in client view) | Identity: `evidence/EXP-045/t5-03-FX_UMStatic-selected-properties-header-caption-FX_sUM-before-dialog.png`; in the Pane 01 rows, `evidence/EXP-045/t13-03-pre-save-FX_DescriptionStatic-caption-and-canvas-order.png`. Creation: `evidence/EXP-045/t9-02-FX_sUM-create-prompt-exact-text-before-Yes.png` (exact prompt), `evidence/EXP-045/t9-03-String-editor-after-Yes-prefilled-value-FX_s_UM-STOP-not-committed.png` (generated default). Correction: `evidence/EXP-045/t12-02-pre-OK-String-dialog-FX_sUM-cell-committed-Unit-of-Measure.png`, `evidence/EXP-045/t12-03-post-T12-Edit-String-FX_sUM-stored-value-Unit-of-Measure.png`. Corroboration: `evidence/EXP-045/t13-01-Edit-String-FX_sUM-row-selected-String-Value-Unit-of-Measure.png`, `evidence/EXP-045/t14-07-post-reopen-Edit-String-FX_sUM-exact-row-String-Value-Unit-of-Measure.png`. Association in the reopened Form: `evidence/EXP-045/t14-05-post-reopen-FX_UMStatic-Caption-FX_sUM-bindings-order.png` | FX_sUM was absent at T8 and was **created** by the T9 Yes (not reused). The stored value was read only in Global Objects. FX_UMStatic is a Static label with no data source, so identity rests on Name, Type and Pane/Tab position. Creation timing and the T10 mismatch mechanism are not established. No unrelated resource is recorded as changed |
| AC-7 | PASS (created; value read in client view) | Prompt: `evidence/EXP-045/t10-05-FX_sDescription-create-prompt-exact-text-before-Yes.png` (exact). Generated default: `evidence/EXP-045/t10-06-FX_sDescription-editor-after-Yes-generated-default-before-edit.png` (`FX_s Description`). Pre-OK: `evidence/EXP-045/t10-07-pre-commit-FX_sDescription-name-value-Description-description-blank.png` (`Description`). Post-OK: `evidence/EXP-045/t10-08-post-OK-FX_sDescription-dialog-closed-designer-state.png`. Caption: `evidence/EXP-045/t10-04-FX_DescriptionStatic-selected-caption-FX_sDescription-before-dialog.png`, `evidence/EXP-045/t14-06-post-reopen-FX_DescriptionStatic-Caption-FX_sDescription.png`. Stored value: `evidence/EXP-045/t11-03-FX_sDescription-row-selected-Properties-String-Value-Description.png`, `evidence/EXP-045/t13-02-Edit-String-FX_sDescription-row-selected-String-Value-Description.png`, `evidence/EXP-045/t14-08-post-reopen-Edit-String-FX_sDescription-exact-row-String-Value-Description.png` | **Created** by the T10 Yes (absent at T8), not reused. Stored value read in the Global Objects client view only. Creation timing inferred from sequence; no read between the Yes and the OK. No unrelated resource is recorded as changed |
| AC-8 | PASS | Pre-Save: `evidence/EXP-045/t13-03-pre-save-FX_DescriptionStatic-caption-and-canvas-order.png` (captions, bindings, FX_UM above FX_Description; Save enabled). One Designer Save (T13): `evidence/EXP-045/t13-04-post-single-Save-Save-disabled-no-dialog.png` (Save disabled; no dialog). Commit behaviour: Save enabled after each T10 string OK (`evidence/EXP-045/t10-03-post-OK-FX_sUM-dialog-closed-designer-state.png`, `evidence/EXP-045/t10-08-post-OK-FX_sDescription-dialog-closed-designer-state.png`) and still enabled in T12 (`evidence/EXP-045/t12-03-post-T12-Edit-String-FX_sUM-stored-value-Unit-of-Measure.png`) | Save completion is a UI state (no success message; Save disabled; no alert). Persistence checked only by reopen in the same session (AC-9). String OK and Form Save are different actions. Regenerate Form became disabled after the Save (not invoked) |
| AC-9 | PASS (same browser session) | `evidence/EXP-045/t14-01-pre-close-FX_UMs-tab-Save-disabled-User-scope-no-dialog.png` (pre-close: Save disabled, User scope); `evidence/EXP-045/t14-02-post-close-FX_UMs-tab-closed-vendor-design-view-no-prompt.png` (close: no prompt, vendor view); `evidence/EXP-045/t14-03-Form-menu-opened-after-click.png` (Form menu); `evidence/EXP-045/t14-04-post-reopen-FX_UMs-identity-scope-SaveDisabled-canvas-captions.png` (reopened: Name `FX_UMs`, status bar User scope, Save disabled, canvas order); `evidence/EXP-045/t14-05-post-reopen-FX_UMStatic-Caption-FX_sUM-bindings-order.png` (FX_UMStatic Caption `FX_sUM`; grid-column bindings); `evidence/EXP-045/t14-06-post-reopen-FX_DescriptionStatic-Caption-FX_sDescription.png` (Pane 01 rows FX_UMStatic 3, FX_UMEdit `object.FX_UM` 4, FX_DescriptionStatic 5, FX_DescriptionEdit `object.FX_Description` 6; Caption `FX_sDescription`) | Reopen used the Form menu, not Select Form (deviation). Same browser session; not cross-session; Designer-level evidence only. The Version and Device Type were read from the T14 snapshot |
| AC-10 | PASS (literal display and references recorded separately) | Literal display: `evidence/EXP-045/t14-04-post-reopen-FX_UMs-identity-scope-SaveDisabled-canvas-captions.png` (canvas `Unit of Measure:*` above `Description:`), `evidence/EXP-045/t14-06-post-reopen-FX_DescriptionStatic-Caption-FX_sDescription.png`. References: `evidence/EXP-045/t14-05-post-reopen-FX_UMStatic-Caption-FX_sUM-bindings-order.png` (`FX_sUM`), `evidence/EXP-045/t14-06-post-reopen-FX_DescriptionStatic-Caption-FX_sDescription.png` (`FX_sDescription`). Stored values: `evidence/EXP-045/t14-07-post-reopen-Edit-String-FX_sUM-exact-row-String-Value-Unit-of-Measure.png` (`Unit of Measure`), `evidence/EXP-045/t14-08-post-reopen-Edit-String-FX_sDescription-exact-row-String-Value-Description.png` (`Description`). Pre-close raw IDs: `evidence/EXP-045/t13-03-pre-save-FX_DescriptionStatic-caption-and-canvas-order.png`, `evidence/EXP-045/t13-04-post-single-Save-Save-disabled-no-dialog.png` | The change from raw IDs to literal text between T13 and T14 is observed; its mechanism is not established. It is not evidence of string-table durability. Stored values from the Global Objects client view only |
| AC-11 | OBSERVED (optional, non-gating) | `evidence/EXP-045/t15-01-webclient-select-form-FX_UMs-single-row-before-open.png`; `evidence/EXP-045/t15-02-webclient-runtime-FX_UMs-opened-captions-Unit-of-Measure-Description.png` (runtime `FX_UMs`; `Unit of Measure:*` above `Description:`; Save greyed; status `Unit of Measure (Object 1 of 1)`) | One runtime open. No record entered or saved. `Object 1 of 1` and the single grid row are not a stored-record count. The Designer was not re-checked in T15 |
| AC-12 | PASS (verified by the T17 re-read; see the verification paragraph below) | `evidence/EXP-045/cleanup-inventory.md` (rewritten in T17); `evidence/EXP-045/t17-final-evidence-matrix.md` (new in T17); this section | "No recorded change" is not proof of the final revision of any pre-existing object. Those objects were last read at T1. String scope and version are not independently verified |

### FX_sUM and FX_sDescription history (T5 to T14, reconciled in T17)

Short tags such as `t9-02` are the file prefixes in `evidence/EXP-045/`. The full file names are in the AC matrix above and in `evidence/EXP-045/t17-final-evidence-matrix.md`.

| Task | FX_sUM event | Stored-value status |
|---|---|---|
| T5 to T6 | Prompt raised (T5); declined with No (T6); timeout alert | Not read; no creation by intent |
| T8 | Strings filter: no `FX_sUM` row (`t8-03`) | Absent (client view) |
| T9 | Prompt "does not exist" (`t9-02`); Yes; editor `FX_s UM` (`t9-03`); not committed | Created by the Yes (inferred from sequence) |
| T10 | Editor value changed to `Unit of Measure`; OK once (`t10-02`, `t10-03`) | **Not read in T10. The "committed and retained" claim is SUPERSEDED** |
| T11 | Global Objects read (`t11-02`) | `FX_s UM` |
| T12 | Cell edit to `Unit of Measure`; Tab commit (`t12-02`); one OK; Global Objects read (`t12-03`) | `Unit of Measure` (client view) |
| T13, T14 | Global Objects reads (`t13-01`, `t14-07`) | `Unit of Measure` (client view) |

The T10 mismatch is **unresolved**. One candidate is that the T10 OK committed before the grid-cell edit was committed. That candidate is based on one uncorrected and one corrected run. `FX_sDescription` was committed in T10 without a Tab and stored correctly, so the candidate does not explain both results. Other candidates (a stale client copy; an edit that did not reach the record) are neither confirmed nor excluded.

The Global Objects Properties pane showed a truncated Version value for each string (`User version for user an…`). It is not a scope field.

**Caption references (exact):** `FX_UMStatic` (bound to `object.FX_UM` through `FX_UMEdit`) has Caption `FX_sUM`, value `Unit of Measure`. `FX_DescriptionStatic` (bound to `object.FX_Description` through `FX_DescriptionEdit`) has Caption `FX_sDescription`, value `Description`.

### Form Save versus string-editor OK

- **Designer Save (the only Form save):** 1, in T13 (`t13-04`).
- **String-editor OK (commits a string resource, not the Form):** 3 (T10: 2, `FX_sUM` and `FX_sDescription`; T12: 1, the `FX_sUM` correction). These enabled the Designer's pending-change state from T10 onward. They did not save the Form.
- **Global Objects Cancel:** 5. None saved anything.

### Exact counts for the single events

- **Finish:** 1 (T3; not retried; `t3-09`).
- **Designer Save:** 1 (T13; `t13-04`).
- **Close and reopen:** 1 close (T14; `t14-02`), 1 reopen by the Form menu (T14; `t14-04`).
- **Web Client runtime open:** 1 (T15; `t15-02`).

### Inventory (AC-12 summary; full inventory in `evidence/EXP-045/cleanup-inventory.md`)

- **Created:** Form `FX_UMs` (User scope, one Finish); String `FX_sUM` (tenant-wide); String `FX_sDescription` (tenant-wide). Templates: 0.
- **Pre-existing, read or displayed, not intentionally modified:** IDO `FX_UMs` (project `FX_HelloWorldProject01`; Revision 2, checked in, read at T1); Property Class `FX_UMBase` (Revision 1, checked out to the operator since EXP-044, read at T1; not checked in by EXP-045); project `FX_HelloWorldProject01` (not opened); vendor Form `IdoPropertyClasses` (Save disabled at T1; displayed after the T14 close; no edit recorded). SQL tables and columns: no action recorded.
- **Application rows:** none intentionally added, edited or deleted. The runtime `Object 1 of 1` indicator (T15) is not a stored-record count.

### Final browser state (last recorded; T17 made no browser call)

- **Tab 1 Designer:** `FX_UMs` Form tab reopened in T14; User scope; Save disabled; Undo disabled; no dialog; URL `designer/default.aspx`; `FX_DescriptionStatic` selected; Details panel expanded on Components. The vendor `IdoPropertyClasses` view was displayed after the T14 close and was not edited.
- **Tab 0 Web Client:** runtime `FX_UMs` tab selected and read-only (T15). Fields empty; Save disabled; no dialog; no record entered or saved. Leftover runtime tabs from earlier experiments also open: `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns`.
- No browser-native dialog and no unsaved-change prompt was recorded in T14 or T15.

### Corrections to the T16 text-only audit

1. Recovery snapshots: **2** (T4 and T14), not 1.
2. FX_sUM prompt instances: the T5 prompt, answered No in T6, is **one** instance (the T16 text listed T5 and T6 as two). The T9 prompt (answered Yes) is the second FX_sUM instance. The FX_sDescription prompt (answered Yes in T10) is the third prompt.
3. Tab-select errors ("Tab 1 not found"): **7** in total, not "several" (T8: 1, T9: 1, T10: 1, T11: 1, T12: 2, T13: 1).
4. Global Objects: 5 opens, 5 Cancels, 0 OK (confirmed).
5. Screenshots: 79 PNG files in `evidence/EXP-045/`, equal to the per-task sum.

### Documentation changes in T17

- `experiments/EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md`: current status replaced (T15 status kept as history); supersession markers on the T9, T10 and T10-status wording; this T17 section.
- `evidence/EXP-045/cleanup-inventory.md`: rewritten (final inventory; T1–T15 entries in order; T11 moved into place; T10 and T9 entries labelled).
- `evidence/EXP-045/t17-final-evidence-matrix.md`: new (count reconciliation, prompts, recoveries, save/close/reopen timelines, confinement, last browser state, decisive screenshot index, limitations, T16 corrections).

### Recommended coordinator disposition

Accept as **observed, with the limitations above**, not replay_verified. The next step belongs to the coordinator: whether to check in `FX_UMBase` (checked out to the operator since EXP-044), whether to keep or remove the tenant-wide strings `FX_sUM` and `FX_sDescription`, and whether database-level verification of the strings and the Form is wanted (it is outside this experiment as briefed).

### Verification line

Performed after all T17 edits:
- The T17 section was re-read in full. The AC rows that had shortened paths (`…`, or ranges such as `t2-04` to `t2-06`) were expanded to exact file names, and the expanded rows were re-checked. The remaining range notations are in the historical per-task sections, not in the T17 matrix.
- The current-status block, the T9 note and the T10 supersession banner were located by search and confirmed present.
- `evidence/EXP-045/cleanup-inventory.md` was re-read in full. Its T10 supersession label, the T11 placement and the T4 and T14 recovery entries agree with this record. One heading note was corrected.
- `evidence/EXP-045/t17-final-evidence-matrix.md` was re-read in full. Its count reconciliation agrees with the per-task records, and the screenshot count (79) agrees with the file listing. A short-tag definition was added.
- Every AC-1 to AC-12 entry now cites exact files, or the cleanup inventory and matrix for AC-12. Every AC verdict agrees with the evidence cited for it.

Result: the final documentation is consistent with the recorded evidence. AC-12 is marked **PASS** on this verification. The disposition is **observed, accepted with limitations, not replay_verified**.

Classification for T17: **observed accepted with limitations**. Not replay_verified. No database-durability, cross-session or cross-user claim.

## Outcome (operator, 2026-10-10)

**Accepted with limits** (run R-20261010-214137-Ia7F, completed/accepted in cycle 23, 17 of 18 worker tasks). Observed only, not replay-verified. Created, for later cleanup:
- **Form `FX_UMs`** (User scope): Classic Multi-View on IDO `FX_UMs`, with FX_UM above FX_Description. Components: `FX_UMStatic`/`FX_UMEdit`, `FX_DescriptionStatic`/`FX_DescriptionEdit`, and grid columns. Created by one Finish (T3), saved by one Designer Save (T13), recovered after close/reopen (T14).
- **Strings `FX_sUM` = `Unit of Measure` and `FX_sDescription` = `Description`.** Both were created through the Caption ellipsis "does not exist. Create it?" prompt. Each Version cell reads "User version for user an…" (truncated). The property class `FX_UMBase` also uses `FX_sUM` as its Label String ID.

Operator screenshot review:
- `t14-07`: after the reopen, Global Objects shows FX_sUM with String Value "Unit of Measure".
- `t14-04`: the reopened Designer shows Form FX_UMs in User scope, Save disabled, and the labels "Unit of Measure*" above "Description:".
- `t15-02`: the Web Client runtime shows FX_UMs with the captions "Unit of Measure*" and "Description:", and the status bar reads "(Object 1 of 1)" (the new-row placeholder only).

Operator decisions during the run:
1. **Component selection** (after T4): use the Components grid's own Expand control and one row click. The Properties-panel tree-picker was the fallback. This route has precedent in EXP-036 and EXP-041-R3.
2. **Scope review** approved for the T5 instruction. It cited EXP-027 only as the source of the fallback picker.
3. **User decision: option 1.** Create both strings through the Caption ellipsis and answer Yes once to the exact "String <ID> does not exist. Create it?" prompt. The Edit > String creation route was not authorized.
4. **Clarification:** the String dialog pre-fills a default generated from the ID ("FX_s UM", "FX_s Description"). That default is expected for a new string and gets replaced, so it is not a conflict.
5. **Correction:** one re-edit of FX_sUM through the Caption ellipsis, with an explicit Tab/Enter cell commit before OK. The worker-task limit was raised from 12 to 18.

Learned (observed):
1. **Selecting components in the Designer:**
   - A canvas click on a label is intercepted by the selection adorner.
   - ArrowRight does not expand the Components tree.
   - The Components grid's Expand control, then one row click, selects the component.
2. **New-string flow:** a Caption ellipsis on an undefined string ID raises "String <ID> does not exist. Create it?". Yes opens a String dialog with only OK and Help (no Cancel), and String Value pre-filled with the ID split at its capitals.
3. **Commit the String Value cell before OK.** Press Tab or Enter first; otherwise OK can store the pre-filled default. The T10 FX_sUM edit without an explicit commit stored "FX_s UM", while the T12 edit with Tab stored the typed value. The mechanism is unconfirmed: FX_sDescription stored correctly without Tab, and the FX_sUM dialog had been open across tasks.
4. **Answering No** to the create prompt produced "Timeout expired waiting for response." and created nothing (T8 showed no FX_sUM).
5. **Edit > String** opens Global Objects, a read-only way to look up a string: a Strings name filter (infix, case-insensitive) and a Properties pane with Name, String Value, Description and Version.
6. **Caption values do not render immediately.** After the string commits, the Designer canvas still showed the raw IDs. The captions rendered after the Save and close/reopen, and also in the runtime.

Limits:
- No database-level read of the strings was done.
- The full Version and scope value of the strings was not read.
- Single session; no replay.
- FX_UMBase remains checked out.

Next in Part 2:
- EA/Each and DZ/Dozen test data in FX_UMs;
- the FX_UM property class with a domain on FX_UMs;
- FX_ItemBase and FX_Cost;
- FX_Items.
