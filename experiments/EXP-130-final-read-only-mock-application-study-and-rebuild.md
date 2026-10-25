# EXP-130 - Final Read-Only Mock Application Study and Rebuild Specification

**Status (after T5):** T1 to T5 **complete** (T1: MockInventory IDO inspection; T2: Designer metadata gaps; T3: pre-login checkpoint; T4: post-operator-login observation, which found a credential-bearing dialog still open and captured no screenshot; T5: MockLoginPortal cleanup closure, then the REBUILD SPECIFICATION and final audit). The rebuild is **specified, not executed**: every proposed creation, configuration step and runtime test is NOT EXECUTED and UNVERIFIED. EXP-130 is **not accepted** by this worker; the coordinator and operator review the open items. EXPERIMENT_COMPLETE is **not declared**.

Record note: the brief named `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md` as the experiment record. That file did not exist when T1 started (the repository held only the approved brief commit `2d5da2d`). It was created by this T1 task; later tasks append to it.

## Scope (brief summary)
- Strictly read-only study of the existing Mock application in the current (read-only Mock-owner) account, per AGENTS.md (2026-10-25 read-only scope extension).
- Five bounded worker tasks: T1 MockInventory IDO inspection; T2 Designer metadata gaps; T3 pre-login checkpoint; T4 post-operator-login observation; T5 repository-only rebuild specification and audit.
- Prohibited throughout: any Mongoose create/save/modify/delete/check-in/check-out in this account (including FX_ artifacts); any interaction with `FX_InventoryPrototype01`; Filter in Place during the IDO lookup; more than one exact-name query; record opening; IDO Method execution; browser JavaScript; credential reading or entry; `$app/scripts/UserControl.js`.

## Sources read for T1
- `AGENTS.md` in full (258 lines), including the 2026-10-25 read-only scope extension.
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md`: the T27, T28 and T29 sections (lines 3103 to 3481) and the operator disposition (lines 3486 to 3490). The rest of the 3,490-line record was not re-read; T1 to T26 were used only as summarized by T27 to T29.
- `evidence/EXP-128/MockLogin-ido-definition.txt` in full (format reference only; EXP-128 T29 worker-observed copy, confirmed in the record's T29 worker-written-files list).
- `experiments/EXP-129-create-and-recover-an-isolated-fx-inventory-protot.md` operator disposition (lines 186 to 194): no create, Save or other mutation in the second account.

Key precedent taken from EXP-128 (not re-verified here):
- T27 lookup of `MockLoginIDO` returned zero rows. The operator then stated that `MockLogin` is the IDO and `MockLoginIDO` is a Form name. T29 observed the `MockLogin` IDO header, Tables, Properties and Methods in an already-open IDOs Form, without a lookup.
- The MockLogin IDO's Methods view was empty, and this is recorded as "no rows visible", not as proof of absence.

## T1 - MockInventory IDO definition (read-only lookup, 2026-10-25)

Harness header: `task=T1`, `run_id=R-20261025-191745-xNrM`, `experiment_id=EXP-130`, `cycle_id=0`. Bounded instruction: T1 only.

### Preflight (AC-1)
- **Tab list** (before the first selection): tab 0 = Designer (`WSWebClient/designer`), current at the start; tab 1 = Mongoose Web Client inside the Infor OS portal (URL carried `favoriteContext=MockLoginIDO`, a portal context value, not an open Form).
- **Web Client (tab 1), inherited session:** usable. Header shows the signed-in account (placeholder in snapshots). No sign-in page, session-expiry modal, logout card or server-event error. No Form open (no Form tab list in the Web Client). Save `[disabled]`. Filter in Place `[disabled]`. No dialog. Explorer panel shown. Evidence: `evidence/EXP-130/t1-00-web-client-preflight-snapshot.md`.
- **Designer (tab 0), clean state:** no document Form tab open; Save `[disabled]`; Regenerate Form `[disabled]`; no dialog; ScopeType `User`. Two empty `alert` nodes exist (live-region placeholders, no text). This matches the clean state expected after the EXP-128 T29 close (No to the MockLoginIDO save prompt). Evidence: `evidence/EXP-130/t1-00-designer-preflight-snapshot.md`.
- **Console baseline:** Web Client **3 errors / 10 warnings** (the three errors are "Permissions policy violation: unload is not allowed" messages; the warnings are Infor widget and origin-trial messages). Designer **2 errors / 0 warnings**. These match the EXP-128 baselines.
- **Editing scope:** User (Designer status bar `ScopeType: User`). No change to scope, preferences, configuration or session.
- **Repository baseline** (conversation-start Git snapshot, not re-run; the harness computes confinement): branch `claude-harness`; HEAD `2d5da2d EXP-130: approved brief`; pre-existing modified and untracked files under `tools/claude-harness/` (not touched by this task).
- **FX_InventoryPrototype01:** not opened, not selected, not interacted with. It is not present in the Designer or the Web Client at the start (no Form open in either).
- **No Mongoose mutation** was performed in T1.

### Phase 2 - opening the runtime IDOs Form
- One click on the Web Client Form menu (ref `f1e10`), then one click on the recent-menu entry `IDOs` (ref `f1e101`). The recent menu listed `IDOs`, `MockLoginIDO`, `MockLoginPortal`, `MockInventoryDashboard`, `MockInventory`, `MockLogin`, `Sql Tables`, `Runtime Builder Selection`, `TestMongoose`, `IDO Projects`. The menu also contains `Sign Out` and `Open` items, which were not clicked.
- Result: the runtime system IDOs Form opened (`favoriteContext=IdoCollections`, tab `IDOs`, header "IDOs"). This is the system IDO definition Form, not a Mock data Form.

### Phase 3 - prerequisite gate (AC-2): PASSED
Evidence: `evidence/EXP-130/t1-02-idos-form-pregate-snapshot.md`.
- IDO Name textbox: no value, focused (`[active]`).
- Grid: exactly one row (row number `1`) with blank cells.
- Detail fields: Revision Num, Revision Date, Description, Extends, Project Name, Profile Name, IDO Assembly Name, Ext Class Name/Namespace, Locked By and Caption empty.
- Save `[disabled]`. No dialog or alert node with text.
- Filter in Place was **not** activated.

### Phase 4 - one exact-name query (AC-2): ONE ROW RETURNED
- One click on the IDO Name textbox (ref `f1e229`).
- Typed the literal `MockInventory` (13 characters, slow typing; no paste, no correction, no Ctrl+A or Backspace).
- Verified before the key press: textbox value `MockInventory`, Save disabled, grid still one blank row, no dialog (`evidence/playwright/page-2026-10-25T11-19-30-314Z.yml`).
- **F4 pressed exactly once.** Wait 5 seconds.
- Post-F4 snapshot (`evidence/EXP-130/t1-03-idos-post-f4-snapshot.md`):
  - Grid: **one data row** with IDO Name `MockInventory` (visible cell text), Description blank, Locked By (username placeholder), Revision Date 10/9/2026, Revision Num 1. Row count: **1**.
  - IDO Name textbox still reads `MockInventory` (in T27 the typed text disappeared after F4; this difference is recorded and not explained).
  - The detail panel loaded the MockInventory record (Project `Mockup`, Caption `oMockInventory`).
  - Filter in Place: not activated (T1 did not click it; the button's state is shown as enabled and was not used).
- **Identity result:** the target was visibly identified by its exact IDO Name. Per the brief, this counts as a returned target. Matching semantics are not independently verified (section "Limitations" below).
- No second F4, no alternate criterion, no alternate name (no `MockLogin`, `MockLoginIDO` or any other name was typed).

### Phase 5 - metadata inspection (AC-3): MockInventory Tables, Properties and Methods read; no edits
- **Lock state observed (not caused by T1):** the record's Locked By shows the signed-in account, the toolbar offers **Check In** (enabled), **Undo Check Out** is disabled, and no Check Out button is shown. The worker did not click Check In, Undo Check Out or any other lifecycle control. The origin of this lock is **unknown** and is listed as an open question for the operator. (For contrast, EXP-128 T29 recorded MockLogin with Locked By blank and Check Out enabled.)
- **Tables** (already selected after F4; read only): one row. `MockInventory` | alias `mock_inv` | `Primary Base` | `Inner` | Join Text blank.
- **Properties** (one click on the lower tab; read from the action's snapshot): 14 rows; columns in the Properties grid header order; key flag only on `ID` (Key Sequence 1). Full table in `evidence/EXP-130/MockInventory-ido-definition.txt` section 1C. Summary of names: ID, Item, Description, Warehouse, QuantityOnHand, ReorderLevel, Location, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow. All Bound to Column; Property Class and Property Value blank; Required on the business columns (ID, Item, Description, Warehouse, QuantityOnHand, ReorderLevel, Location).
- **Methods** (one click on the lower tab): column headers only (Method Name, Method Type, Stored Procedure); no rows rendered. Recorded as "no rows visible", not as absence. No method was executed.
- No other lower tab was opened (Filters, Data Rules, Deletion Rules, Cached Settings, Standard Operations, Workflow Summary, Referenced Property Classes, Advanced Attributes).
- No property dialog, method dialog or record was opened. No value was edited.

### Phase 6 - safe exit (AC-2/AC-9)
- Closed the IDOs Form with its own tab control (`Close Panel IDOs`, ref `f1e136`). Save was disabled, so no save prompt was expected. No prompt appeared. Post-close snapshot (`evidence/playwright/page-2026-10-25T11-20-40-356Z.yml`): no IDOs tab, no dialog, Save `[disabled]`.
- The Web Client has no Form open. The Designer was not touched after the preflight (its last read was at preflight).

### Transcription (AC-3)
- `evidence/EXP-130/MockInventory-ido-definition.txt`: source identity; header, Tables, Properties (14 rows) and Methods (header only) with source-to-evidence references; checkbox mapping marked **inferred**; completeness limitations; redactions. No credential or record value is written.

### Console and state checks (T1)
- Web Client (tab 1): 3 errors / 10 warnings at the preflight, after the tab reselection, after the Form click, after the IDOs open, after the criterion typing, after F4 and the wait, after the Tables/Properties/Methods clicks, and after the close. **No rise** at any point.
- Designer (tab 0): 2 errors / 0 warnings at preflight. Not re-read after preflight (no Designer action in T1).
- No stop rule was triggered (no console rise, no server-event error, no sign-in page, no session-expiry modal, no unexpected prompt, no Caption commit).

### Action audit (T1, exact)
- **Browser actions attempted: 11. Returned ok: 11. Errors: 0.**
  - Tab selections: 3 (tab 1, tab 0, tab 1). Tab list: 1 (before the first selection).
  - Clicks: 6 (Form menu `f1e10`; recent `IDOs` `f1e101`; IDO Name textbox `f1e229`; Properties tab `f1e378`; Methods tab `f1e380`; Close Panel IDOs `f1e136`). Coordinate clicks: 0. Filter in Place clicks: 0. Check In / Check Out / Undo Check Out clicks: 0.
  - Type actions: 1 (`MockInventory`, 13 characters, slow). Credential characters typed: 0.
  - Key presses: 1 (F4, once). Ctrl+A, Backspace, Delete: 0.
  - Save, Regenerate, OK, Apply, Yes, No clicks: 0. Dialog handling: 0. Navigation: 0. Refresh, reload, unload: 0. Drags, wheel, mouse moves: 0.
- **Browser reads attempted: 8. Returned ok: 8. Errors: 0.**
  - Tab list: 1. Console-message read: 1 (warnings level). Snapshots (untargeted, saved to file): 5 (Web Client preflight; Designer preflight; Web Client after reselection; IDOs pre-gate; IDOs post-F4). Wait: 1 (5 seconds).
- Tool-written action-output files (not counted as separate reads): one snapshot per action under `evidence/playwright/`, and console event logs. Listed in section "Worker-written files (T1)".
- **Fresh-snapshot recovery allowance used: 0 of 1.** No "Ref not found" error occurred. No corrected inspection was needed.
- Repository tool calls (not browser actions): Read and Grep on AGENTS.md, EXP-128 and EXP-129 records, the MockLogin copy, and the worker-written snapshot files; Write of the T1 evidence and the record.

### Credential handling and redactions (T1)
- Credential values read, typed, copied or recorded: **0**. The only typed text was the IDO name criterion `MockInventory`.
- Redactions in T1 text: the signed-in account appears as `<signed-in user>` / placeholder; tenant and session placeholders in tab URLs are not copied.
- **Screenshots: none taken in T1.** The Web Client header shows the account name unredacted in screenshots (privacy item D-7), and the accessibility snapshots show the username as a placeholder. All T1 evidence is therefore textual.

### Worker-written files (T1)
- **Created (repository):**
  - `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md` (this record).
  - `evidence/EXP-130/MockInventory-ido-definition.txt`.
  - `evidence/EXP-130/t1-00-web-client-preflight-snapshot.md`, `evidence/EXP-130/t1-00-designer-preflight-snapshot.md`, `evidence/EXP-130/t1-01-web-client-fresh-snapshot.md`, `evidence/EXP-130/t1-02-idos-form-pregate-snapshot.md`, `evidence/EXP-130/t1-03-idos-post-f4-snapshot.md`.
- **Tool-written, not by the worker (browser action outputs under `evidence/playwright/`):** page snapshots `page-2026-10-25T11-19-07-459Z.yml` (Form menu), `page-2026-10-25T11-19-13-420Z.yml` (IDOs opened), `page-2026-10-25T11-19-27-140Z.yml` (IDO Name click), `page-2026-10-25T11-19-30-314Z.yml` (typed value), `page-2026-10-25T11-19-41-627Z.yml` (post-F4), `page-2026-10-25T11-20-03-799Z.yml` (Properties), `page-2026-10-25T11-20-25-480Z.yml` (Methods), `page-2026-10-25T11-20-40-356Z.yml` (post-close); console event logs `evidence/playwright/console-2026-10-25T11-18-29-804Z.log` and any further console logs written by the tool. These were read only through Grep and Read for the lines cited above.
- **Modified:** none. No existing recipe, prior experiment record or unrelated file was modified.

### Acceptance (T1 view)
- **AC-1 (preflight):** **met for T1.** Usable inherited session; User scope; clean Designer (no Form open, Save and Regenerate disabled); console baseline 3/10 and 2/0; repository baseline recorded from the conversation-start Git snapshot; no Mongoose mutation; `FX_InventoryPrototype01` untouched. The Designer's post-T1 state was not re-read (see the console section); AC-9 (final audit) remains for the coordinator.
- **AC-2 (runtime IDOs query):** **met.** Prerequisite gate (empty IDO Name, one blank row, no prompt) recorded; exactly one `MockInventory` criterion typed; exactly one F4; one visible row with the exact IDO Name `MockInventory`; no Filter in Place. **Limitation:** matching semantics and uniqueness across the full IDO set are not independently verified.
- **AC-3 (MockInventory definition):** **met in part.** Tables, Properties and Methods tabs identified and read; transcription written with source attribution and an explicit limitation list. **Not met / unresolved:** Methods (header only, no method data); Filters, Data Rules, Deletion Rules, Cached Settings, Standard Operations, Workflow Summary, Referenced Property Classes and Advanced Attributes not inspected; checkbox-column mapping inferred; Properties end-of-grid not confirmed by scrolling; property classes unresolved. No IDO method or data-record operation occurred.
- **AC-4 to AC-12:** not in T1 scope; not started.

### Knowledge state (T1)
- **Observed (one successful execution, not replayed):** the runtime IDOs Form, given the IDO Name criterion `MockInventory` and one F4, returned one row visibly named `MockInventory`. Header, Tables (one row, `mock_inv`, Primary Base, Inner), Properties (14 rows, ID as the only key) and an empty Methods grid were observed.
- **Observed, unexplained:** the lock state (Locked By = signed-in account; Check In enabled; Undo Check Out disabled). The cause is **unresolved**.
- **Unresolved:** the matching semantics of the query and why the EXP-128 T27 query returned zero rows (the typed text disappeared after F4 in T27 but not in T1). The checkbox-column mapping (inferred). Methods (none visible; not proven absent).
- **Candidate procedure only:** the T1 route (Form menu > recent `IDOs` > IDO Name criterion > one F4) for reading an IDO's header, Tables and Properties. Not a verified recipe: one successful execution only.

### Limitations (T1)
- Lookup semantics not independently verified; the single row is identified by its visible name only.
- The lock on the MockInventory record (Locked By = the signed-in account) is an unexplained state of the read-only account. The worker did not create or change it; the operator should confirm whether it existed before this run.
- Methods are not visible as rows; no method was executed, and absence is not established.
- The Properties grid end was not confirmed by scrolling; the grid filter was not inspected.
- No screenshots were taken in T1 (privacy, D-7). All T1 evidence is accessibility-snapshot text.
- The Designer was not re-read after the preflight in T1.

### Open questions for the coordinator / operator (after T1)
1. **Lock state of MockInventory:** was the record checked out to the signed-in account before this run? The worker did not check it out or in. **Unresolved; for the operator.**
2. **Why did T27 return zero rows and lose the typed text after F4, when T1 kept the text and returned one row?** **Unresolved.**
3. **Methods of MockInventory:** none visible. Whether the IDO has methods is **unresolved**.
4. **Checkbox-column mapping** for the Properties grid (Read Only, Required, Pseudo Key, Read Only Record) is inferred from accessibility-tree order. A visual check would need a screenshot, which T1 did not take. **Unresolved.**
5. The unread `UserControl.js` (D-13) and the global Script source (D-8) remain out of scope for EXP-130 (`UserControl.js` is excluded by the brief).

### Status (T1)
- **T1 complete.** The IDOs Form was closed with its own control and no prompt. The Web Client has no Form open. The worker has **stopped at the T1 boundary**. T2 (Designer metadata gaps: MockInventory and MockInventoryDashboard collection Options and filters; vInventoryJson and vMockLoginJson variables; the global Script names between GetChartTypeByChartStyle and GetDataLakeObjects) requires separate coordinator authorization. No further browser action was performed.

---

## T2 - Designer metadata gaps (read-only, 2026-10-25)

Harness header: `task=T2`, `run_id=R-20261025-191745-xNrM`, `experiment_id=EXP-130`, `cycle_id=1`. Bounded instruction: T2 only. Full evidence: `evidence/EXP-130/T2-designer-metadata-gaps.txt` (section numbers below refer to it).

### Sources read before T2
- This record (T1 section); `evidence/EXP-130/MockInventory-ido-definition.txt` header only.
- EXP-128: Q-4, Q-5, Q-11 (open-question list, lines ~2130-2137); T4 Collections and Options (lines ~376-420, 454-500); T6 Variables and dashboard Form Script (lines ~751-798); T9 global variables (lines ~1499-1598); T21 global Script names (lines ~2506-2602) and `evidence/EXP-128/t21-global-script-names-observed.txt`.
- The T2 bounded instruction and the EXP-130 brief scope.

### Results
- **Form identities (section 1, 4):** MockInventory and MockInventoryDashboard were opened from the Designer Form menu's recent entries. Each was confirmed from the tab heading, the URL `MGForm=`, and the Form Properties pane: Name, Form Type `Normal`, Is Master `True`, Device Type `Default`, Version `User version for user <signed-in user>`. Caption is blank (no text shown). Both were also confirmed as the Form in the Designer tab, not from recent-menu captions alone.
- **Collections (section 2, 5):** each Form has one collection, `Primary Collection: MockInventory`, with Base Table and Alias `MockInventory mock_inv`. Collection Name, Custom Load Method, Method Parameters and Read Mode are blank. **Options and the collection filter are not exposed** through the permitted UI: a select-only click, the grid Expand control and one ArrowRight press did not expand Options, and no filter row appeared. The three sibling groups (Standard Operations, Advanced Options, Selection) were not expanded. This closes EXP-128 Q-11 only partly: the Options and filter remain unresolved.
- **Variables (section 3, 6, 10):**
  - `vInventoryJson`: present in both Forms' Variables grids, in the Global - Persistent group, with Persistent `True`, Global `True`, a blank Value, and Version `User version for user <signed-in user>`. No Form-level `vInventoryJson` is shown on either Form, and the dashboard shows no Form - Temporary group. Its runtime binding is therefore unresolved (U-1), not inferred.
  - `vMockLoginJson`: absent from both Forms' rendered rows and from the Edit > Variable global list. Its Form-level presence on MockLoginPortal was not inspected (U-2).
- **Edit > Variable (section 7):** `vInventoryJson` present (Persistent `True`, Global `True`, Value blank). `vMockLoginJson` absent. Dialog closed with Cancel.
- **Global Script names, the EXP-128 T21 gap (section 8):** between `GetChartTypeByChartStyle` and `GetDataLakeObjects`, six names were rendered: `GetComponentList`, `GetComponentListByType`, `GetComponentListSorted`, `GetConnectionStringOptionNames`, `GetDataCatalogObjectList`, `GetDataCatalogObjectName`. A rendering gap of unrendered references lies between `GetChartTypeByChartStyle` and `GetComponentList`, so names in that range are **not established** (U-5). No Script source was opened; no row was clicked.

### Unresolved in T2 (see the evidence file, section 11)
- U-1 runtime binding of `ThisForm.Variables("vInventoryJson")` on the dashboard.
- U-2 MockLoginPortal Form-level variables, including `vMockLoginJson` Form - Temporary (not in the T2 Form list).
- U-3 seven `<signed-in user>.Temp.*` rows appear in the Global - Temporary group and in the flat list, but EXP-128 T9 recorded 54 entries without naming them. Not reconciled; flags not read.
- U-4 Options and filter not exposed; sibling-group contents unresolved.
- U-5 unrendered Script name range.

### Browser-action accounting (T2)
- **Browser actions: 40** (26 clicks, all by reference; 1 Designer tab select; 2 ArrowRight key presses on selected Options rows; 4 mouse moves for wheel positioning; 7 view-only wheel steps). Coordinate clicks: 0.
- **Browser reads: 24** (19 snapshots, 1 of them targeted with bounding boxes; 4 finds; 1 tab list).
- Fresh-snapshot recovery allowance: 0 of 1 used. No "Ref not found".
- Screenshots: 0. Browser JavaScript: 0. No credential read, typed, copied or recorded.
- Prohibited actions: none. No Save, OK, Apply, Regenerate, Delete, Check In/Out, Filter in Place or Finish was clicked. No Option, filter, variable property or initial value was changed. No IDO method, record or Script source was opened.

### Final Designer state and console (T2)
- Both worker-opened Forms (MockInventory, MockInventoryDashboard) were closed with their own tab controls. Neither showed a save prompt (Save was disabled throughout). Two dialogs were dismissed with Cancel (Edit > Variable, Edit > Script).
- Final: no Form tab open, no dialog, Save `[disabled]`, Regenerate Form `[disabled]`, `ScopeType: User`, console **2 errors / 0 warnings** at every reading (last reading `evidence/playwright/page-2026-10-25T11-30-21-122Z.yml`). The Web Client (tab 1) was not selected, read or acted on in T2. No inherited Form existed at T2 start.
- The lock question from T1 (MockInventory Locked By the signed-in account) was not touched in T2: no Check In, Check Out or Undo Check Out was clicked, and the MockInventory Form was not reopened on the IDOs Form.

### Worker-written files (T2)
- **Created (repository):** `evidence/EXP-130/T2-designer-metadata-gaps.txt`; 19 snapshot files `evidence/EXP-130/t2-00-designer-preflight-snapshot.md` through `evidence/EXP-130/t2-18-global-script-after-wheel-up300-snapshot.md` (the browser tool wrote them at the worker's filename request).
- **Modified (repository):** this experiment record only (status line and this T2 section).
- **Tool-written, not by the worker (outside `evidence/EXP-130/`):** one action snapshot per browser action under `evidence/playwright/page-2026-10-25T11-24-*` through `page-2026-10-25T11-30-*`, and console logs when tab events fired. Disclosed for the confinement audit.

### Acceptance (T2 view)
- **AC-1 (preflight, T2 part):** met. Designer clean (no Form, Save and Regenerate disabled, User scope), console 2/0 before and after; no Mongoose mutation; `FX_InventoryPrototype01` not touched.
- **AC-4 (Form identities, collections):** partly met. Form identities and Collection General group met for both Forms. Options and filter: **not exposed** through the permitted UI (recorded, not forced).
- **AC-5 (variables):** met for MockInventory and MockInventoryDashboard Variables surfaces and Edit > Variable (presence table in evidence section 10). MockLoginPortal not inspected (U-2).
- **AC-6 (Script gap):** partly met. Boundaries and six names recorded; unrendered range unresolved (U-5); no source opened.
- **AC-9 (final audit, T2 part):** dialogs dismissed, Forms closed without save prompts, Designer clean, no Mongoose mutation observed. Final application-state audit remains for T5.

### Open questions for the coordinator (after T2)
1. Authorise T3? The T3 step opens MockLoginPortal (one empty-login screenshot) and then stops for operator login. The coordinator should confirm the operator's login plan before T3.
2. Should MockLoginPortal's Form-level Variables (Form - Temporary, and `vMockLoginJson`) be read in a bounded task (U-2)? T2 did not open it because it was outside the T2 Form list.
3. U-3: should the seven `<signed-in user>.Temp.*` rows be reconciled against EXP-128 T9 (a bounded flag read on one row), or accepted as an unreconciled difference?
4. U-5: is a further bounded Script-name read needed for the unrendered range before `GetComponentList`, or is the gap accepted?
5. The MockInventory lock (Locked By the signed-in account; carried from T1) is still for the operator to confirm.

### Status (T2)
- **T2 complete.** The worker stopped at the T2 boundary. No runtime Mock interaction was performed and T3 was not started.

---

## T3 - MockLoginPortal pre-login checkpoint (2026-10-25)

Harness header: `task=T3`, `run_id=R-20261025-191745-xNrM`, `experiment_id=EXP-130`, `cycle_id=2`. Full checkpoint: `evidence/EXP-130/T3-prelogin-checkpoint.txt`.

### Result
- **Inherited Web Client session: usable.** Tab list (read first), then tab 1 selected. Fresh snapshot `evidence/EXP-130/t3-00-web-client-fresh-snapshot.md`: no sign-in page, no session-expiry modal, no dialog; no Form open before T3; console 3 errors / 10 warnings.
- **MockLoginPortal opened once** through the Web Client Form menu: Form menu (ref f1e10), then the recent entry `MockLoginPortal` (ref f1e104, from the snapshot returned by the menu click). URL `favoriteContext=MockLoginPortal`; Form tab heading `MockLoginPortal` selected. Console after open: 3 errors / 10 warnings (no rise).
- **Visible state** (snapshot `evidence/EXP-130/t3-01-mockloginportal-open-snapshot.md`): card titled "Sign in to your account" with "WAREHOUSE / MANAGEMENT SYSTEM" branding; Username textbox (placeholder "Enter your username"); Password textbox (placeholder "Enter your password") with a "Show password" button; "Sign In" button; footer "Secure access to your workspace". Both textboxes show placeholder text only.
- **Screenshot (exactly one):** `evidence/EXP-130/t3-02-mockloginportal-empty-login-card.png`. Element capture of the Web Client main panel (`#formContainer`), excluding the header account name. Shows the Form tab heading "MockLoginPortal", the empty card and the placeholder text. Does **not** prove the Form's Name/Version properties, the asset that renders the card, or any post-login behaviour.
- **No filled-login screenshot** exists. No credential was typed, read, recorded or captured.

### Checkpoint status
- **No worker authentication was attempted.** The worker did not type into, focus, or click any login control, including "Sign In" and "Show password".
- **Operator action is pending.** The operator must independently enter the test credentials and activate Sign in in the open MockLoginPortal tab, then give a completion signal without credentials.
- **The MockLoginPortal Form tab was left open and untouched.** No worker click occurred within the Mock Form.
- **Designer tab not selected or read in T3.** Its last recorded state is from T2 (2 errors / 0 warnings, no Form open, User scope).

### Browser-action accounting (T3)
- Actions: 4 (tab select 1; clicks 2; element screenshot 1). Coordinate clicks 0. Typed characters 0. Key presses 0. Dialog handling 0. Navigation 0.
- Reads: 3 (tab list 1; untargeted snapshots 2).
- Fresh-snapshot recovery allowance: 0 of 1 used. No "Ref not found".
- Browser JavaScript 0; credentials read, typed or recorded 0.

### Limitations (T3)
- Form identity is established only by the Form tab heading and the URL `favoriteContext` value. The Form's Name/Version properties were not read in T3.
- The login card is rendered inside an embedded iframe. Its source asset is unidentified and must not be inferred from the card's appearance.

### Next permitted action
- None in T3. T4 may begin only after the operator's explicit completion signal and coordinator authorization. The worker stopped here.

---

## T4 - post-operator-login observation (2026-10-25)

Harness header: `task=T4`, `run_id=R-20261025-191745-xNrM`, `experiment_id=EXP-130`, `cycle_id=4`. Full observation: `evidence/EXP-130/T4-post-login-observation.txt`.

### Result
- **Operator completion signal:** relayed in the coordinator's bounded instruction (operator completed the test login independently and asked that the state be left untouched). No worker login, sign-in click or authentication action occurred.
- **Tab list, then tab 1 (Web Client) selected.** Fresh untargeted snapshot `evidence/EXP-130/t4-00-post-login-fresh-snapshot.md`. Console 3 errors / 10 warnings, equal to the baseline.
- **Credential-safety: the resulting surface is NOT credential-free.** An open Mongoose alert dialog (title "Infor Mongoose Application Development Framework - MockLoginPortal", OK button active) displays text beginning "Data received:" with a record of Username, Password, Store and Role fields. Values were not recorded, transcribed, screenshotted or repeated. The saved snapshot was redacted in place (verified: no matches in `evidence/` for the dialog values).
- **Disclosure:** the snapshot read returned the dialog text into the worker's conversation context before the redaction. It is not present in any repository file.
- **No screenshot in T4.** The only visible surface contains credential-bearing text, so the rule "do not capture the affected surface" applied.
- **No click within the Mock Form or dialog.** The alert's OK button was not clicked; dismissal is left to the operator.

### Observed transition (directly observed vs EXP-128 hypothesis)
- **Observed:** the URL is unchanged (`favoriteContext=MockLoginPortal`). The Form tab strip shows only the MockLoginPortal Form tab, selected. No dashboard Form tab or other Form appeared. The MockLoginPortal tab panel is aria-hidden and its frame exposes no accessible children, so the login card and any dashboard inside the Form are **not observable** in this snapshot.
- **Observed:** the dialog's record prefix and key names (Username, Password, Store, Role). Key names only.
- **EXP-128 hypothesis (unverified):** the Form script serialises a record that includes a Password key and shows it in a "Data received" message (EXP-128 record, T3, lines 288-294). The dialog is consistent with that at the key-name level. Whether it is the success path or leads to the dashboard is **unresolved**.
- **Not observed:** a dashboard, a distinct success or error message, or any post-dialog navigation. The login-to-dashboard transition is **unresolved**.

### Cleanup (T4)
- **No Form was closed.** The MockLoginPortal Form tab (opened by the worker in T3) remains open. Closing it under the modal alert would have been an interaction with the Mock surface, and the operator asked that the state be left untouched. The Form was clean in T3 (Save disabled); closure is deferred to the operator or to a later authorized step.
- **The alert dialog remains open** for the operator.
- **Designer not touched.** No inherited Form was closed.

### Console and accounting (T4)
- Console: 3 errors / 10 warnings at t4-00, no rise; stop rule not triggered. Designer not read.
- Browser actions: 1 (tab select). Clicks 0; typed 0; key presses 0; screenshots 0; dialog handling 0; navigation 0; browser JavaScript 0.
- Browser reads: 2 (tab list; one fresh untargeted snapshot, the task-start fresh snapshot, not a recovery use). Recovery allowance 0 of 1 used.
- Repository: 3 file-name-only searches and 1 Edit (the redaction of `t4-00`).

### Limitations (T4)
- Dashboard structure, labels, navigation, charts and indicators are **not recorded**: no dashboard was observable.
- No post-login screenshot exists. The only Mock screenshot in EXP-130 is `t3-02` (empty login card, pre-login).
- The dialog's meaning and what follows its dismissal are **unknown**. T5 must not assume that the dashboard was reached.

### Operator action pending
- Dismiss the alert with its OK button if desired, and report what appears (for example, whether a dashboard opens). Decide whether the MockLoginPortal tab should be closed and whether the test credential should be rotated, given the disclosure above.

### Status
- **T4 complete.** The worker stopped at the T4 boundary. T5 was not begun and no proposed rebuild work was performed.

---

## T5 - Cleanup checkpoint, rebuild synthesis and final audit (2026-10-25)

Harness header: `task=T5`, `run_id=R-20261025-191745-xNrM`, `experiment_id=EXP-130`, `cycle_id=6`. Files: `evidence/EXP-130/T5-cleanup-checkpoint.txt` (Part A), `evidence/EXP-130/T5-evidence-manifest-and-audit.txt` (manifest, accounting, acceptance, audit), `evidence/EXP-130/t5-00-cleanup-fresh-snapshot.md`.

### Part A - cleanup (operator-authorized)
- **Operator observation (OPERATOR-OBSERVED, not verified by the worker):** after the operator dismissed the "Data received" alert, MockLoginPortal returned to its sign-in card. No dashboard Form, no other Form and no navigation appeared. The operator characterises the EXP-128 Q-3 login-to-dashboard link as **not implemented in the existing build**; the dashboard is opened separately.
- **Tabs:** listed, then tab 1 (Web Client) selected. Fresh snapshot `t5-00`: the MockLoginPortal Form tab present and selected; **no alert, no dialog**; no credential text (checked by a file-based structural search, which returned no credential values).
- **Closure:** the worker-opened MockLoginPortal Form tab was closed **once** through its own close control (`Close Panel MockLoginPortal`). **No save prompt was observed**, so no Yes or No answer was given. Post-close file-based check: no Form tab, no dialog.
- **Cleanup outcome: CLOSED.** No inherited Form was touched. The Designer was not selected or read in T5 (last state at T2: no Form open, Save and Regenerate disabled, User scope, console 2/0).
- **Credential-safety disclosure:** the T4 snapshot read put the post-login dialog's submitted values into the worker's conversation context before the saved copy was redacted. No value is in any repository file (verified: no match for the test values across `evidence/EXP-130/` or `evidence/EXP-128/`). The operator should decide whether to rotate the test credential.

### REBUILD SPECIFICATION

This section is documentation only. It is built from the EXP-128 and EXP-130 records and evidence. It executes nothing, and it creates and changes nothing in the current account.

**Labels used throughout:**
- **[WO]** worker-observed in EXP-130 (T1 to T5).
- **[WO-128]** worker-observed in EXP-128; repository record only, not re-observed here.
- **[SRC]** source-level: text of an EXP-128 copy in `evidence/EXP-128/`; the source was not run.
- **[OO]** operator-observed or operator-supplied; not verified by the worker.
- **[HYP]** hypothesis from the records; not verified.
- **[UNK]** unknown; left unresolved on purpose.
- **[PROP]** proposed for the operator's own account. **NOT EXECUTED. UNVERIFIED.**

**Rules applied:** every proposed identity begins with `FX_`; a `FX_` name is not known to exist in any account; no source detail is assumed beyond the cited evidence; `FX_InventoryPrototype01` (EXP-129) is outside this specification and was not inspected.

#### 1. Source accounts and rebuild boundary
- The Mock objects are **User versions** in the read-only Mock-owner account: `User version for user <signed-in user>` on MockInventory, MockInventoryDashboard and vInventoryJson [WO]; on MockLoginPortal, MockLoginIDO and the Web User Control assets [WO-128] (`evidence/EXP-128` T2, T10, T7/T8; operator disposition 2026-10-25).
- Reproduction is for the operator's own account only, after sign-in there (AGENTS, 2026-10-25 scope extension). Tenant-wide creation of SQL tables, IDOs and global variables needs explicit authorisation in that brief [PROP, decision P0].

#### 2. Forms
| Source Form | Source identity evidence | Form type and version | Proposed FX_ name | Status |
| --- | --- | --- | --- | --- |
| MockLoginPortal | Tab heading and `favoriteContext=MockLoginPortal` [WO T3]; Form Name, Form Type `Flex`, User version [WO-128 T2] | Flex; User version [WO-128] | FX_LoginPortal | Structure known; Form-level variables partly known; Form Properties not re-read in EXP-130 |
| MockInventory (Form) | Designer tab; URL `MGForm=MockInventory`; Properties Name, Form Type Normal, Is Master True [WO T2] | Normal; Is Master True; User version [WO] | FX_InventoryEditor (optional) | Components known [WO-128 T5]; Options and filter UNK |
| MockInventoryDashboard | Designer tab; URL `MGForm=`; Properties Name, Form Type Normal, Is Master True [WO T2] | Normal; Is Master True; User version [WO] | FX_InventoryDashboard | Components, collection, handler and script known [WO-128 T6]; Options UNK |
| MockLoginIDO (Form) | Designer Form; Form Type Normal; User version [WO-128 T10]; closed with a save prompt answered No [WO-128 T29] | Normal; User version [WO-128] | FX_LoginRecords (optional) | Runtime role **UNK**: the login chain in source does not reference this Form |

Not Mock Forms and not reproduced: the system `IDOs` and `Sql Tables` Forms, which are Mongoose system Forms [WO].

#### 3. Components
- **MockLoginPortal** [WO-128 T2]: `Pane (00)` > `flexlayoutPane_MockLoginPortal` (FlexLayout) > `Region00: FLEX_PANE_REGION0` > `userControl1_USER` (UserControl; Size 964; 684; Flex Attributes Index 0, Target FLEX_PANE_REGION0; Binding Type None; Foreground #000000; Events blank; Enabled/Visible/Required When blank). The Container column of `userControl1_USER` reads `flexlayoutPane_MockLoginPortal` while the tree nests it under Region00 (**UNK**, recorded as shown). Specific Attributes: `User Control Name` = `V(UserCtrl_userControl1_USER)`. Control URL `mocklogin/index.html`, selected URL-type radio **UNK**.
  - [PROP] FX_flexlayoutPane_LoginPortal; FX_Region00 (the FLEX_PANE_REGION0 analogue; name **UNK** until the Designer creates it); FX_userControl1_USER → `FX_Login/index.html`.
- **MockInventory (Form)** [WO-128 T5 retry]: `Pane (00)` > `FormCollectionGrid` (Grid; data source `objects`; pane 0) > seven GridColumns: `IDGridCol` (object.ID), `ItemGridCol` (object.Item), `DescriptionGridCol`, `WarehouseGridCol`, `QuantityOnHandGridCol`, `ReorderLevelGridCol`, `LocationGridCol`. `Pane (01)` > 14 controls (Static and Edit pairs for ID, Item, Description, Warehouse, QuantityOnHand, ReorderLevel, Location). **No UserControl.** Columns Event to generate, Component Class, Enabled/Visible/Required When: blank in the accessibility tree; each component's Properties were not opened.
  - [PROP] FX_FormCollectionGrid with FX_ GridColumns and FX_ Static/Edit pairs (FX_ prefix on each component name).
- **MockInventoryDashboard** [WO T2 count; WO-128 T6 identity]: `Pane (00)` > `userControl1_USER` (UserControl; pane 0). Two Components rows in total [WO T2]. Control URL `MockInventory/index.html` [WO-128 T6/T7]. Its Properties were not re-read in EXP-130.
  - [PROP] FX_userControl1_USER → `FX_Inventory/index.html`.
- **MockLoginIDO (Form)** [WO-128 T10]: `Pane (00)` > `FormCollectionGrid` (Grid; `objects`) > GridColumns `IDGridCol`, `UsernameGridCol`, `PasswordGridCol`, `RoleGridCol`, `StoreGridCol`. No UserControl. **Design note:** this Form's grid displays a Password column at design time. The rebuild must not reproduce that display (section 12, security).
  - [PROP, optional] FX_LoginRecords grid. Decision P0(c).

#### 4. Collections and IDO bindings
| Form | Collection | IDO / base table / alias | Options and filter | Status |
| --- | --- | --- | --- | --- |
| MockInventory | Primary Collection `MockInventory` | IDO `MockInventory`; base table `MockInventory` alias `mock_inv` [WO T2] | **UNK**: not exposed through the permitted UI (grid Expand and one ArrowRight did not expand Options; no filter row) [WO T2] | Identity known; settings UNK |
| MockInventoryDashboard | Primary Collection `MockInventory` | same [WO T2]. Script call `IDOClient.LoadCollection("MockInventory", "Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse", "", "", 100)` [SRC, dashboard copy source line 19–25] | **UNK** (same as above) | Script call known at source; the meaning of the two empty strings and of `100` is **UNK** |
| MockLoginIDO | Primary Collection `MockLogin` | IDO `MockLogin`; base table `MockLogin` alias `mock_login` [WO-128 T10] | not read | Identity known |
| MockLoginPortal | Primary collection node present; Collection and Collection Name blank [WO-128 T2] | No IDO binding visible in the Form. Script calls IDO `MockLogin` by name: `LoadCollection("MockLogin", "Username, Password, Store, Role", filter, "", 1)` [SRC, login copy source line 29–35] | UNK | Form-level binding **UNK** (blank value editors; not verified) |

- [PROP] FX_InventoryEditor and FX_InventoryDashboard collection → FX_InventoryIDO. FX_LoginRecords collection → FX_LoginIDO. The login Form's collection binding is not required if the script loads the IDO by name; whether `IDOClient.LoadCollection` resolves an FX_ IDO name is **UNVERIFIED**.

#### 5. IDOs and their properties
**5.1 MockInventory IDO** [WO T1]: IDO Name `MockInventory`; Project `Mockup`; Caption and Label String ID `oMockInventory`; Revision Num 1 (10/9/2026); Access As `G6R`; Extends, Replace, IDO Assembly Name, Ext Class Name and Namespace, Profile Name: blank. Locked By = the signed-in account; Check In enabled; Undo Check Out disabled. **Lock origin UNK** (carried).
- Tables: one row, `MockInventory` | alias `mock_inv` | Primary Base | Inner | Join Text blank [WO T1].

**5.2 MockLogin IDO** [WO-128 T29; the operator's header and Tables values corroborate it, and the worker did not perform an exact-match lookup]: IDO Name `MockLogin`; Project `Mockup`; Caption and Label `oMockLogin`; Revision Num 2 (10/16/2026); Access As `G6R`; Locked By blank; Extends and Assembly blank.
- Tables: one row, `MockLogin` | alias `mock_login` | Primary Base | Inner [WO-128 T29].

**5.3 Property table** (all properties Bound to Column; Property Class and Property Value blank for every row [WO T1; WO-128 T29]). Key Sequence: only ID has a key sequence (1) in both IDOs. Checkbox mapping (Read Only, Required, Pseudo Key, Read Only Record) is **inferred** for MockInventory and not confirmed visually [WO T1]; for MockLogin it was read from the Properties grid with the Upper Case and Pseudo Key columns partly out of view [WO-128 T29].

| Property (source) | MockInventory: type, length, column type, RO, Req, RecordRO (Pseudo Key: no in every row) | MockLogin: type, length, column type, RO, Req, RecordRO (Pseudo Key: no in every row) |
| --- | --- | --- |
| ID (key 1) | Long Integer; –; int; no, yes, no | Long Integer; –; int; no, yes, no |
| Item | String 50; nvarchar; no, yes, no | – |
| Description | String 255; nvarchar; no, yes, no | – |
| Warehouse | String 100; nvarchar; no, yes, no | – |
| QuantityOnHand | Decimal 12; decimal; no, yes, no | – |
| ReorderLevel | Decimal 12; decimal; no, yes, no | – |
| Location | String 100; nvarchar; no, yes, no | – |
| Username | – | String 50; nvarchar; no, yes, no |
| Password | – | String 255; nvarchar; no, yes, no **(credential column)** |
| Store | – | String 255; nvarchar; no, yes, no |
| Role | – | String 255; nvarchar; no, yes, no |
| CreatedBy | String 128; UsernameType; yes, no, no | same |
| UpdatedBy | String 128; UsernameType; yes, no, no | same |
| CreateDate | Date; CurrentDateType; yes, no, no | same |
| RecordDate | Date; CurrentDateType; yes, no, no | same |
| RowPointer | GUID; RowPointerType; yes, no, no | same |
| NoteExistsFlag | Byte; FlagNyType; no, no, no | same |
| InWorkflow | Byte; FlagNyType; no, no, **yes** (Read Only Record) | same |

- Methods: **none visible** in either IDO (grid headers only). Method names, types and stored-procedure targets are **UNK**; absence is not established [WO T1; WO-128 T29].
- Property classes, validators, data rules, filters, deletion rules, cached settings and the Project `Mockup` itself: **UNK** (not inspected).
- [PROP] FX_InventoryIDO (property names FX_ + source name, one-to-one, see section 16; the IDO's Project must be an FX_-named IDO project **decision P0**; the source Project `Mockup` is not an FX_ object and must not be reused). FX_LoginIDO (same rule). A `Password` column in the rebuild needs a design decision on storage and comparison (P0(a)); this specification does not choose one.

#### 6. SQL tables
- `MockInventory` (alias `mock_inv`) and `MockLogin` (alias `mock_login`) are the IDO base tables [WO T1; WO-128 T29]. Column types are known only through the IDO property bindings above. **DDL, indexes, constraints, defaults and data are UNK**: the Sql Tables Form was not inspected in EXP-130, and no Sql Tables read is recorded in the EXP-128 records consulted. Data records were not opened or read, and nothing from them is recorded.
- [PROP] FX_InventoryItems (alias FX_inv) for MockInventory; FX_LoginUsers (alias FX_login) for MockLogin. Column names: FX_ + source name [PROP, decision P0(b)].

#### 7. Scripts
**7.1 MockLoginPortal Form Script** (C#; `namespace Mongoose.FormScripts`; `class MockLoginPortal : FormScript`; source lines 1–141 in `evidence/EXP-128/MockLoginPortal-form-script.cs.txt`, complete to the end of file [WO-128 T3 and the pre-T12 recovery]):
- `public string ProcessLogin(string username, string password)` (source lines 16–79). Returns `"missing"` (source line 23), `"empty"` (44), `"invalid"` (67), `"ok"` (71), `"error"` (77). The header comment names `WSForm.invoke("ProcessLogin", username, password, callback)` as the caller (source line 14, a comment; the call is confirmed only in the JavaScript copy).
- Steps: empty values → alert "Username and password are required." → `"missing"`; `LoadCollection("MockLogin", "Username, Password, Store, Role", "Username = '<escaped>'", "", 1)`; no item → alert "No data found…" → `"empty"`; otherwise reads the stored Username, Password, Store and Role; builds a record with `Password` set to the stored value; serialises it (line 60); writes it to `vMockLoginJson` (line 62); compares the stored and supplied passwords as plain text (line 64); mismatch → alert "Data received, but the password is incorrect." → `"invalid"`; match → alert `"Data received:\n" + json` (line 70) → `"ok"`; exception → alert "Login error: …" → `"error"`.
- `private void ShowMongooseAlert(string)` (source lines 85–91; calls `Application.ShowMessage`).
- `public string LoadMockLoginJson()` (source lines 96–138): loads all MockLogin rows (filter empty, count 100) and writes `vMockLoginJson` (line 128). **No caller exists in any copy** [WO-128 T19 source check].
- [PROP] FX_ProcessLogin: a nonsensitive success/failure result; no password in any alert, variable, log or return value; no `LoadMockLoginJson`-style dump (decision P0(a)).

**7.2 MockInventoryDashboard Form Script** (C#; 59 lines; `LoadInventoryFromIDO()` at source lines 12–56 [WO-128 T6 copy]):
- `LoadCollection("MockInventory", properties, "", "", 100)` (source lines 19–25); property string at line 17; mapping of `PropertyValues[0..5]` to Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse (lines 36–41); serialises the list (lines 46–49); writes `ThisForm.Variables("vInventoryJson").Value = json` (line 51). A commented-out `Application.ShowMessage` (lines 53–55). No error handling; no null checks.
- The script does not read a Form variable. Its `vInventoryJson` write is the only variable access.
- [PROP] FX_LoadInventoryFromIDO → `IDOClient.LoadCollection(FX_InventoryIDO …)` → `ThisForm.Variables("FX_vInventoryJson")`. The meaning of the two empty strings and `100` is UNK; the rebuild must set them by test, not by copying.

**7.3 MockInventory Form Script** (VB.NET; 20 lines; class `MockInventory`; no methods; imports `Mongoose.IDO.Protocol` and `Mongoose.Scripting` with no use) [WO-128 T5 retry]. No dependency. [PROP] none.

**7.4 MockLoginIDO Form Script** (VB.NET; 20 lines; no methods) [WO-128 T10]. No dependency. [PROP] none.

**7.5 Global Scripts** [WO T2; WO-128 T21]: the six names rendered in the previously skipped segment: `GetComponentList`, `GetComponentListByType`, `GetComponentListSorted`, `GetConnectionStringOptionNames`, `GetDataCatalogObjectList`, `GetDataCatalogObjectName`. Rows between `GetChartTypeByChartStyle` and `GetComponentList` were not rendered: **UNK**. No global Script source was read, and no Mock-named global Script was identified by name. No dependency on a global Script is identified in any inspected source. [PROP] none.

**7.6 Asset-side scripts** (see section 10): `mocklogin/script/app.js` [SRC] and the inline script in `MockInventory/index.html` [SRC]. `MockInventory/script.js` is not referenced by its HTML [WO-128 T8].

#### 8. Variables
| Name | Observed category and flags | Owner / scope | Where it is written or read | Status | Proposed FX_ |
| --- | --- | --- | --- | --- | --- |
| vInventoryJson | Global - Persistent on MockInventory and MockInventoryDashboard; Edit > Variable: Persistent True, Global True, Value blank; Version User version [WO T2] | Global (tenant-wide) | Written by the dashboard script (source line 51) [SRC]; read by the page through `WSForm.getVarValue` [SRC T7/T8] | Design-time flags known; **runtime binding UNK**; no Form-level `vInventoryJson` on either Form [WO T2]; the Form - Temporary category was not read | FX_vInventoryJson (global persistent) [PROP] |
| vMockLoginJson | **Not** in the global list (checked against all rows in EXP-128 T9 and EXP-130 T2); **not** in the MockLoginPortal Form - Persistent list [WO-128 T2] | Form-level on MockLoginPortal per source; category and persistence **UNK** (Form - Temporary not read in any task) | Written by `ProcessLogin` (source line 62) and `LoadMockLoginJson` (line 128) [SRC]; **no reader** in any inspected asset [SRC] | Existence as a Form variable: source-level; location **UNK** | FX_vMockLoginJson (Form variable on FX_LoginPortal; category and persistence **decision P0(a)**) [PROP] |
| UserCtrl_userControl1_USER | MockLoginPortal Form - Persistent; Persistent True; Global False; Value `V(UserCtrlAsm_userControl1_USER) V(UserCtr…` (truncated) [WO-128 T2] | Form | Referenced by the component's User Control Name [WO-128 T2] | Known (design) | Designer-generated FX_ equivalent [PROP] |
| UserCtrlAsm_userControl1_USER | `ASSEMBLY(UNIFIED)` on both user-control Forms [WO-128 T2, T6] | Form | Control reference | Known (design) | Designer-generated FX_ equivalent [PROP] |
| UserCtrlUrl_userControl1_USER | `URL(METADATA()mocklogin/index.html)` on MockLoginPortal [WO-128 T2]; `URL(METADATA()MockInventory/index.html)` on the dashboard [WO-128 T6] | Form | Control URL | Known (design) | Designer-generated FX_ equivalent [PROP] |
| fds_SC2 | Dashboard Form - Persistent; value not read [WO T2] | Form | Not referenced by inspected source | **UNK** purpose | Not proposed |
| InitialCommand | Dashboard Form - Persistent; value `FilterInPlace` [WO-128 T6] | Form | Not referenced by inspected source | **UNK** purpose | Not proposed |
| MPUsername, MPPassword, LoginFoundUser | Global - Persistent names [WO-128 T9]; values **not read** (credential rule) | Global | Not referenced by inspected source | Purpose **UNK** | Not proposed. The rebuild must not carry or display these values. |
| SiteFormName | Global - Persistent; value `Sites`; Version Vendor Default [WO-128 T9] | Global | Not referenced by inspected source | Purpose UNK | Not proposed |
| Global - Temporary | EXP-128 T9: six names (AccessAs, FarmEnableExtensionBundle, FarmEnforcePrefixFromAccessAs, Parm_DefaultStartingToEnding, Parm_DisplayReportHeaders, Parm_Site); EXP-130 T2: 13 rows on MockInventory including 7 `<signed-in user>.Temp.*` rows | Global | – | **UNRECONCILED** (6 vs 13; 48 + 6 = 54 in EXP-128; 48 + 13 = 61 in EXP-130) | Not proposed |

- **Form-level groups** [WO T2]: MockInventory shows no Form-level variable group (only Global - Persistent and Global - Temporary). The dashboard shows a Form - Persistent group of five names and no Form - Temporary group.

#### 9. Event handlers
- **MockInventoryDashboard, Form-level `StdFormPredisplay`** [WO-128 T6; the flag column meaning unverified]: row 0 Response Type `Collection Refresh`; row 1 Response Type `Form Script Method`, Response Parameters `LoadInventoryFromIDO()`. Runtime order not observed.
- **MockLoginPortal** (Form and component level): no rows rendered [WO-128 T2; "no rows visible", not proof of none]. Component `userControl1_USER`: Primary, Data Change, Lose Focus, Gain Focus blank; Drag From and Drop On 0 events [WO-128 T2].
- **MockInventory** (Form): no rows rendered [WO-128 T5 retry]. **MockLoginIDO**: no rows rendered [WO-128 T10].
- [PROP] FX_InventoryDashboard `StdFormPredisplay`: Collection Refresh; Form Script Method `FX_LoadInventoryFromIDO()`. FX_LoginPortal: no Form-level handler is identified in the source; how the login call from the page reaches `FX_ProcessLogin` depends on the UNK bridge (section 10).

#### 10. Assets (Web User Control Assets)
| Source asset | Source identity and evidence | Content and dependencies (source-level) | Status | Proposed FX_ |
| --- | --- | --- | --- | --- |
| `mocklogin/index.html` | Control URL of MockLoginPortal's user control [WO-128 T7]; copy `evidence/EXP-128/assets/mocklogin_index.html.txt` | Login page: `form#loginForm`, `input#username`, `input#password`, `button#passwordToggle`, `div#usernameError`/`#passwordError`, `div#generalError` > `span#generalErrorText`, `button#loginButton`; head includes `../$app/scripts/UserControl.js`, `style/app.css`; body ends with `script/app.js`; **no WSForm call** [SRC] | Known (source) | FX_Login/index.html [PROP] |
| `mocklogin/script/app.js` | copy `evidence/EXP-128/assets/mocklogin_script_app.js.txt` (flattened text) [WO-128 T8] | Validation (username trimmed, ≥3; password ≥6; no server call on failure); the single call `WSForm.invoke("ProcessLogin", username, password, cb)` through `invokeAsync` with a 15000 ms timeout; the callback result is logged only; on rejection shows "Could not reach the server. Please try again."; the password toggle sets the input type to text [SRC] | Known (source); **runtime and callback contract UNK** (bridge in UNK UserControl.js) | FX_Login/script/app.js [PROP] |
| `mocklogin/style/app.css` | [WO-128 T8] | Styling only; no Mongoose call [SRC] | Known (source) | FX_Login/style/app.css [PROP] |
| `MockInventory/index.html` | Control URL of the dashboard [WO-128 T7]; copy `evidence/EXP-128/assets/MockInventory_index.html.txt` | Page title "Mongoose Inventory Dashboard"; header with `#pollEnabled`, `#notifyEnabled`, `#pollInterval`, `#pollStatusText`, `#refreshButton`; four summary cards `#totalItems`, `#totalUnits`, `#lowStock`, `#outOfStock`; search `#searchInput`; table `#inventoryTableBody`; `#recordCount`; raw JSON `<pre id="jsonOutput">`; toast and modal. Calls: `WSForm.invoke("LoadInventoryFromIDO", cb)`; `WSForm.getVarValue("vInventoryJson", cb)` with a 15-second guard; `MG.onReady(initializeInventoryDashboard)`; default poll 5 s; settings in `localStorage` key `inventoryDashboard.polling` [SRC] | Known (source); runtime partly observed (EXP-128 T11) | FX_Inventory/index.html [PROP] |
| `MockInventory/style.css` | [WO-128 T8] | Styling [SRC] | Known (source) | FX_Inventory/style.css [PROP] |
| `MockInventory/script.js` | [WO-128 T8] | **Not referenced** by `index.html`; role UNK; uses ids absent from the HTML (EXP-128 T19 correction C-3) | Unknown role | None proposed |
| `$app/scripts/UserControl.js` | **Not read** (excluded by the brief; operator-owned investigation; EXP-128 D-13 accepted as a gap) | Referenced by both HTML pages. The WSForm bridge (argument passing, callback, return value) is therefore **UNK** | **UNK** | Not proposed; the FX_ pages reference a `$app` path only after the operator verifies the bridge (P0(e)) |

Asset attribution: Mock assets are User versions [WO-128 operator disposition]. FX_ assets require a top-level `FX_` folder or file name (AGENTS scope extension).

#### 11. Navigation
- **Form-level navigation:** the login Form and the dashboard are separate Forms opened from the Web Client Form menu's recent list [WO T1, T3; WO-128 T11]. No navigation from the login Form to the dashboard was observed [OO; WO T4 and T5: the Form tab list stayed at MockLoginPortal].
- **Source:** the login page and script contain no navigation (`window.location`, `href`, `fetch`, and storage are absent from `app.js`); no shared navigation token; no call from the login page to the dashboard [SRC T8, T19].
- **EXP-128 Q-3** (login-to-dashboard transition): answered as follows. Source-level: **no link** [SRC]. Operator: **not implemented in the existing build** [OO]. Worker: no dashboard was observed after login in EXP-130 [WO].
- [PROP, OPTIONAL, not implemented, UNVERIFIED] After a successful FX_ login, open FX_InventoryDashboard. No navigation mechanism is verified, so this is not to be built until one is tested in the operator's account (P0(d)).

#### 12. Runtime behaviour (observed versus hypothesis)
| Behaviour | Status | Evidence and limits |
| --- | --- | --- |
| The login card renders with empty Username and Password fields (placeholder text only) and the Sign In button | [WO] and [WO-128] | t3-01, t3-02 (EXP-130); EXP-128 T11 screenshot `t11-01` |
| Submitting the form runs the Form Script and shows an alert titled with the Form name, beginning "Data received:" and a JSON record | [WO] (key names only: Username, Password, Store, Role); [OO] for the displayed values | The worker did not record values. Source line 70 [SRC] |
| The displayed record includes the stored password | [OO] (operator reports that the alert displays the password); [SRC] (the JSON includes `Password`, source lines 60 and 70) | Not verified by the worker. **Design finding:** the rebuild must not disclose the password |
| After the alert is dismissed, the card returns; no dashboard Form and no navigation | [OO]; [WO] for Form tab list at T5 | No worker check of the card after dismissal |
| Invalid password: "Data received, but the password is incorrect." → `"invalid"` | [SRC] only | Not observed |
| Missing or unknown user alerts | [SRC] only | Not observed |
| Dashboard renders a header "INFOR MONGOOSE" and title "Inventory Dashboard", controls "Auto-refresh" and "Alerts" (checked), a "every [5] sec" interval, a status line "Updated <time>", a "Refresh Data" button, four summary cards (Total Items, Total Units, Low Stock, Out of Stock), an "Inventory Records" panel with a search box, a table (Item, Description, Location, Warehouse, Quantity, Reorder Level, Status, Action) with a View button on each row, a footer ("N records", "Inventory overview") and a collapsed "View Raw Inventory JSON" | [WO-128 T11] (EXP-128 runtime, not re-observed in EXP-130) | Values are not recorded here |
| Dashboard status time changes about every 5 s without interaction | [WO-128 T11]; consistent with source polling [SRC] | The cause is not verified (no console or network reading) |
| Two dashboard rows show Location and Warehouse values in each other's columns | [WO-128 T11] | Cause **UNK** (stored data or the page mapping) |
| MockInventory Form: a narrow grid with one current row; a detail form with labels ID, Item, Description, Warehouse, Quantity On Hand, Reorder Level, Location; the captured grid shows only the ID column | [WO-128 T11] | Other grid columns not visible in the capture; cause UNK |
| The dashboard's data is filled from `vInventoryJson` written on pre-display | [HYP] | Consistent with the pre-display handler and the script [WO-128 T6; SRC]; runtime order not observed |

#### 13. Dependency map (proposed, unverified)
- **Login:** `FX_Login/index.html` → `FX_Login/script/app.js` → `WSForm.invoke("FX_ProcessLogin", user, password, cb)` [PROP] → FX_LoginPortal Form Script → `IDOClient.LoadCollection(FX_LoginIDO, …)` [PROP] → result code returned; the alert is nonsensitive [PROP] → callback logs only [SRC pattern].
- **Inventory:** the dashboard's pre-display handler → `FX_LoadInventoryFromIDO()` [PROP] → `IDOClient.LoadCollection(FX_InventoryIDO, …)` [PROP] → `ThisForm.Variables("FX_vInventoryJson")` [PROP] → `FX_Inventory/index.html` → `WSForm.getVarValue("FX_vInventoryJson")` [PROP] → render.
- **Shared dependency:** both pages reference `$app/scripts/UserControl.js` [SRC]; its contract is **UNK**.
- **No link** between the two chains in the source [SRC].

#### 14. Readiness checklist
| Element | Classification | Supporting evidence | Still unresolved |
| --- | --- | --- | --- |
| Login Form identity and type (MockLoginPortal) | Partly known | [WO] tab and URL; [WO-128 T2] Flex, User version | Form Properties not re-read in EXP-130 |
| Login Form components (FlexLayout pane, region, user control) | Known (design) | [WO-128 T2] | Container column inconsistency; URL radio state |
| Login Form Form-level variables | Partly known | [WO-128 T2] Form - Persistent: three entries | Form - Temporary not read; vMockLoginJson location |
| Login Form Script (ProcessLogin, LoadMockLoginJson) | Known (source) | [SRC] EXP-128 copy, source lines 1–141 | Runtime behaviour partly observed (key names only) |
| Login page HTML and script (`mocklogin/index.html`, `script/app.js`, `style/app.css`) | Known (source) | [SRC] EXP-128 copies | Runtime callback and bridge UNK |
| Login success and failure responses | Partly known | [SRC] alert and return codes | Operator-described display; the callback result is not used by the page |
| MockInventory Form identity | Known | [WO T2] | Lock state UNK |
| MockInventory Form components | Known (tree) | [WO-128 T5 retry] | Per-component properties not opened |
| MockInventory Form collection Options and filter | **Unknown** | [WO T2]: not exposed | Options and filter contents |
| MockInventoryDashboard Form identity | Known | [WO T2] | Properties not re-read in EXP-130 |
| MockInventoryDashboard components and user control | Known | [WO-128 T6]; [WO T2] count 2 | User-control Properties not re-read in EXP-130 |
| Dashboard script (LoadInventoryFromIDO) | Known (source) | [SRC] source lines 1–59 | Argument meaning (`""`, `""`, `100`) UNK; runtime UNK |
| Dashboard pre-display handler | Known (design) | [WO-128 T6] | Flag column meaning; runtime order |
| MockLoginIDO Form | Partly known | [WO-128 T10, T29] | Runtime role UNK; Password column design |
| MockInventory IDO header, Tables | Known | [WO T1] | Lock origin UNK; the T27 zero-row result is unexplained |
| MockInventory IDO Properties (14) | Known (types, keys) | [WO T1] | Checkbox mapping inferred; Upper Case not visible; property classes UNK |
| MockInventory IDO Methods | **Unknown** | [WO T1]: headers only | Absence not established |
| MockLogin IDO header, Tables, Properties (12) | Known | [WO-128 T29] (with operator corroboration) | Methods UNK; property classes UNK; the Project's content UNK |
| IDO Projects (`Mockup`) | Unknown | Name only [WO T1, WO-128 T29] | Contents, dependencies |
| SQL table definitions (mock_inv, mock_login) | **Unknown** | IDO Tables only | DDL, indexes, constraints, defaults |
| Data content of the tables | **Unknown; must not be read** | – | – |
| vInventoryJson global definition | Partly known | [WO T2] flags; [WO-128 T9] | Runtime binding UNK; Form - Temporary not read |
| vMockLoginJson | Partly known | [SRC] writes; [WO T2], [WO-128 T9] absences | Location and persistence UNK |
| Temporary variables | Partly known | [WO-128 T9] 6; [WO T2] 13 | UNRECONCILED (7 `.Temp.*` rows) |
| Global Script inventory | Partly known | [WO T2] six names; [WO-128 T21] | Unrendered range UNK |
| `$app/scripts/UserControl.js` (WSForm bridge) | **Unknown** | Not read (excluded) | Contract for invoke, callback and return; operator's investigation |
| Web User Control Assets (Mock) | Known (source) | [WO-128 T7, T8] | Runtime UNK |
| Dashboard runtime layout | Partly known | [WO-128 T11] | Post-login layout not re-observed in EXP-130; values not recorded |
| Login-to-dashboard link | Known absent (source); operator-characterised | [SRC] T8/T19; [OO] | None for the existing build |
| Mock accounts and versions | Known for MockInventory, Dashboard, vInventoryJson; partly for login | [WO]; [WO-128] | Login Form Properties not re-read in EXP-130 |
| Security: password disclosure | Known (source and operator report) | [SRC] lines 60, 70; [OO] | Storage and comparison design for the rebuild |
| Authorisation for tenant-wide creation | Unknown | AGENTS scope extension | Operator decision |
| FX_ names | Proposed; none known to exist | Section 16 | All UNVERIFIED |

#### 15. Dependency-ordered reproduction plan (**all steps NOT EXECUTED; all UNVERIFIED**)
- **P0 Operator decisions** (none executed): (a) login design: no password in alert, variable, log or return; the storage and comparison method for credentials; whether `FX_vMockLoginJson` exists at all; (b) confirm FX_ column names; (c) whether FX_LoginRecords is needed; (d) whether post-login navigation is in scope, and the mechanism to use; (e) the outcome of the operator's `UserControl.js` investigation; (f) explicit authorisation for tenant-wide creation of FX_ tables, IDOs and global variables, and for the FX_ IDO project name.
- **P1 Account check:** sign in to the operator's own account; confirm User scope; confirm it is not the read-only Mock-owner account (AGENTS).
- **P2 Tables:** create FX_InventoryItems and FX_LoginUsers with FX_ columns and the types in section 5.3 (not executed).
- **P3 IDOs:** create FX_InventoryIDO and FX_LoginIDO on those tables, with the properties and keys in section 5.3. Verify the IDO by an exact-name runtime query (not executed; matching semantics UNVERIFIED).
- **P4 Variables:** create FX_vInventoryJson (global, persistent). Create FX_vMockLoginJson on the login Form after P6, if P0(a) keeps it.
- **P5 Assets:** create FX_Login/index.html, FX_Login/script/app.js, FX_Login/style/app.css, FX_Inventory/index.html, FX_Inventory/style.css. Verify the bridge (P0(e)) before relying on any call.
- **P6 Login Form:** create FX_LoginPortal (Flex) with the pane, region and FX_userControl1_USER → FX_Login/index.html. Create its Form Script with FX_ProcessLogin and nonsensitive results. Verify the IDO load by name.
- **P7 Dashboard:** create FX_InventoryDashboard (Normal) with FX_userControl1_USER → FX_Inventory/index.html; collection FX_InventoryIDO; Form Script FX_LoadInventoryFromIDO; the pre-display handler. Verify the calls and the variable.
- **P8 Optional:** FX_InventoryEditor (grid and Static/Edit pairs) and FX_LoginRecords.
- **P9 Persistence:** save, close and reopen each object and verify (AGENTS experiment rules). Record every creation for cleanup.
- **P10 Runtime tests in the operator's account:** login with test data the operator creates in the FX_ tables (not Mock data); confirm the responses are nonsensitive and that no password appears in the UI, a log or a variable; confirm the dashboard loads and refreshes; test navigation only if P0(d) adopts it.

#### 16. Proposed FX_ identities (all [PROP]; none known to exist)
- Forms: FX_LoginPortal (from MockLoginPortal); FX_InventoryDashboard (from MockInventoryDashboard); FX_InventoryEditor (from MockInventory, optional); FX_LoginRecords (from MockLoginIDO, optional).
- IDOs: FX_InventoryIDO (from MockInventory); FX_LoginIDO (from MockLogin); IDO Project name **decision P0(f)**.
- Tables: FX_InventoryItems (alias FX_inv; from `MockInventory` / `mock_inv`); FX_LoginUsers (alias FX_login; from `MockLogin` / `mock_login`).
- Columns: FX_ + source name, one-to-one (FX_ID, FX_Item, FX_Description, FX_Warehouse, FX_QuantityOnHand, FX_ReorderLevel, FX_Location; FX_Username, FX_Password, FX_Store, FX_Role; FX_CreatedBy, FX_UpdatedBy, FX_CreateDate, FX_RecordDate, FX_RowPointer, FX_NoteExistsFlag, FX_InWorkflow) [decision P0(b)].
- Variables: FX_vInventoryJson (global, persistent); FX_vMockLoginJson (Form variable on FX_LoginPortal; decision P0(a)).
- Methods: FX_ProcessLogin (on FX_LoginPortal); FX_LoadInventoryFromIDO (on FX_InventoryDashboard).
- Components: FX_flexlayoutPane_LoginPortal; FX_Region00 (name UNK); FX_userControl1_USER (on both user-control Forms); FX_FormCollectionGrid.
- Assets: FX_Login/ (index.html, script/app.js, style/app.css); FX_Inventory/ (index.html, style.css).
- Not proposed: `MockInventory/script.js`; `fds_SC2`, `InitialCommand`, `MPUsername`, `MPPassword`, `LoginFoundUser`, `SiteFormName`, `IncludeBadgeStatusVar`, `Parm_*`, and the `.Temp.*` names (purpose UNK).

#### 17. Acceptance matrix (AC-1 to AC-12; detail in `evidence/EXP-130/T5-evidence-manifest-and-audit.txt`, section 3)
| AC | Status | One-line basis |
| --- | --- | --- |
| AC-1 | MET | T1 and T2 preflight snapshots: usable session, User scope, Designer clean, console baseline; no mutation; FX_InventoryPrototype01 untouched |
| AC-2 | MET | T1 gate and one F4; one visible row `MockInventory`; no Filter in Place. Match semantics unverified |
| AC-3 | MET in part | MockInventory-ido-definition.txt: Tables, Properties and Methods (headers only); unavailable fields listed |
| AC-4 | MET by explicit non-exposure | Both Form identities confirmed; Options and filter not exposed (recorded); no change |
| AC-5 | MET for the inspected surfaces | vInventoryJson present (Global - Persistent, Persistent True, Global True, Value blank); vMockLoginJson absent from the inspected surfaces; MockLoginPortal Form-level surfaces not inspected in EXP-130 |
| AC-6 | MET in part | Six names in the skipped segment; coverage boundaries recorded; unrendered range UNK; no source opened |
| AC-7 | MET | One credential-free empty-card screenshot (`t3-02`); no worker login; no filled screenshot; operator action recorded |
| AC-8 | MET under the fallback clause | The resulting state was not credential-free and was not captured; the actual result is recorded (alert; operator-observed return to the card); no further login; no worker click in the Mock Forms; no dashboard layout captured in EXP-130 |
| AC-9 | MET with qualifications | Dialogs dismissed; Forms closed without a prompt (T1, T2, T5); no mutation; console 3/10 (Web Client) and 2/0 (Designer at T2); Designer not re-read after T2 |
| AC-10 | MET | This specification: source-attributed, FX_ proposals, UNK marked |
| AC-11 | MET | Readiness checklist (section 14) and plan (section 15), all labelled UNVERIFIED and NOT EXECUTED |
| AC-12 | MET with qualifications | Manifest, accounting and audit files written; tool-written outputs outside `evidence/EXP-130/` disclosed; operator Git review required |

#### 18. Browser-action accounting (consolidated T1 to T5)
| Task | Actions | Reads | Total | Notes |
| --- | --- | --- | --- | --- |
| T1 | 11 | 8 | 19 | Controller agrees. One flagged `browser_type` (the authorised IDO name) |
| T2 | 40 | 24 | 64 | Controller agrees |
| T3 | 4 (worker convention) | 3 | 7 | Controller: 3 actions, 4 reads (tab select as a read). Total agrees |
| T4 | 1 | 2 | 3 | Controller agrees |
| T5 Part A | 2 | 2 | 4 | Controller convention: 1 action, 3 reads |
| **Total** | **58** | **39** | **97** | Controller convention: 57 actions, 40 reads |

- Screenshots: 1 (T3). Coordinate clicks: 0. F4: 1 (T1). Typed characters: IDO name only (T1). Filter in Place: 0. Save, OK, Apply, Yes, Regenerate, Delete, Check In, Check Out, Undo Check Out, Finish: 0. Save-prompt answers: 0 (no prompt observed). Ref not found: 0. Recovery allowance: 0 of 1 used in every task. Browser JavaScript written or supplied by the worker: 0 (the tool's own "Ran Playwright code" blocks are disclosed).

#### 19. Evidence manifest (summary; full table with proof statements in the T5 evidence file, section 4)
- MockInventory IDO: `evidence/EXP-130/MockInventory-ido-definition.txt`, `t1-02`, `t1-03`.
- Designer metadata: `evidence/EXP-130/T2-designer-metadata-gaps.txt` and `t2-00` to `t2-18`.
- Pre-login and post-login: `evidence/EXP-130/t3-00`, `t3-01`, `t3-02` (PNG), `T3-prelogin-checkpoint.txt`, `t4-00` (redacted), `T4-post-login-observation.txt`.
- Cleanup: `evidence/EXP-130/t5-00-cleanup-fresh-snapshot.md`, `T5-cleanup-checkpoint.txt`.
- Manifest, accounting and audit: `evidence/EXP-130/T5-evidence-manifest-and-audit.txt`.
- EXP-128 copies used (read-only): `evidence/EXP-128/MockLoginPortal-form-script.cs.txt`, `MockInventoryDashboard-form-script.cs.txt`, `MockInventory-form-script.cs.txt`, `MockLoginIDO-metadata.txt`, `assets/` copies.

#### 20. Limitations (summary)
1. Post-login dashboard layout was not observed in EXP-130; section 12 uses EXP-128 T11 (not re-observed).
2. Operator observations (the alert's displayed values, the return to the card, the absence of navigation, the Q-3 characterisation) are not verified by the worker.
3. The MockInventory lock origin is unknown.
4. Checkbox mapping is inferred; methods are unavailable; other IDO lower tabs were not inspected.
5. Collection Options and filter contents are unknown.
6. The runtime binding of `vInventoryJson` is unknown; the location of `vMockLoginJson` is unknown.
7. Temporary-variable counts are unreconciled (6 in EXP-128 T9 versus 13 in EXP-130 T2).
8. The Global Script range between `GetChartTypeByChartStyle` and `GetComponentList` is unrendered.
9. `$app/scripts/UserControl.js` was not read; the WSForm bridge contract is unverified.
10. The login logic is source-level only (EXP-128 copies). Line references are source line numbers.
11. The MockInventory and MockLogin lookups have unexplained differences (EXP-128 T27 zero rows; EXP-130 T1 one row).
12. The dashboard shows two rows with Location and Warehouse exchanged; the cause is unknown.
13. The MockLoginPortal Form Properties were not read in EXP-130.
14. The Designer was not re-read after T2.
15. Git was not run (no shell); operator review is required.
16. EXP-128 screenshots show the account name (privacy D-7). The EXP-130 screenshot does not.

#### 21. Security and privacy qualification
- **Credential exposure in this run:** the test login's submitted values reached the worker's conversation context through the T4 snapshot read before redaction. They were not written to any repository file. The operator should decide on rotation.
- **Source design finding:** the existing login returns the stored password in a success alert and in a Form variable. The operator reports the alert shows the password. The rebuild must not reproduce this; no password value may appear in a UI, a log, a return value or a variable. This specification does not propose a storage design.
- **Inventory data:** not copied into any file; the spec records structure only.
- **Screenshots:** one EXP-130 image (t3-02), cropped to the Form panel. The EXP-128 PNG files show the account name and are not reviewed here (privacy D-7).

#### 22. Repository-confinement audit (summary; detail in the T5 evidence file, section 6)
- **Worker writes in T1 to T5 (all inside the permitted paths):** this record (created T1; modified T2 to T5); `evidence/EXP-130/` files listed in the T5 evidence file, section 6.
- **Tool-written outputs outside `evidence/EXP-130/`** (written by the browser tool at each action, not by the worker): `evidence/playwright/page-2026-10-25T11-19-07-459Z.yml` through `…11-20-40-356Z.yml` (T1); `…11-24-*` through `…11-30-*` (T2); `…11-34-49-514Z.yml` and `…11-34-54-977Z.yml` (T3); `…12-06-57-324Z.yml` (T5); and console logs `console-2026-10-25T11-18-29-804Z.log`, `…11-34-40-480Z.log`, `…11-34-40-481Z.log`, `…11-40-03-384Z.log`, `…12-06-42-350Z.log`, `…12-06-42-351Z.log` and further tab-event logs from T2. Disclosed for the harness confinement check.
- **Not modified in T5:** AGENTS.md; EXP-128 and EXP-129 records and copies; recipes; `$app/scripts/UserControl.js`; FX_InventoryPrototype01; any Mongoose artifact.
- **Git:** not run (no shell). The harness computes confinement from Git state; the operator's Git review remains necessary.

#### 23. Decisive evidence summary and T5 file changes
- **Decisive for the rebuild:** the MockInventory IDO definition [WO T1]; the Designer Form and collection identities and variable flags [WO T2]; the empty login card [WO T3, screenshot `t3-02`]; the post-login alert and the cleanup [WO T4, T5]; the source copies for the login and dashboard scripts and the assets [SRC].
- **Not decisive (unresolved):** collection Options and filter; vMockLoginJson's location; vInventoryJson's runtime binding; the Global Script range; the bridge contract; the post-login dashboard layout in EXP-130; the lock origin.
- **Files written by T5:** `evidence/EXP-130/T5-cleanup-checkpoint.txt` (new); `evidence/EXP-130/T5-evidence-manifest-and-audit.txt` (new); `evidence/EXP-130/t5-00-cleanup-fresh-snapshot.md` (tool-written at the worker's filename); this experiment record (status line, T5 section and this specification). No other repository file was written.
- **Browser state at the end of T5:** the Web Client selected (tab 1) with no Form open by the worker and no dialog. The Designer tab was not selected. Console (Web Client) 3 errors / 10 warnings.
- **Not accepted:** this worker does not declare EXP-130 accepted or EXPERIMENT_COMPLETE. The coordinator and the operator decide the P0 items and the open list above.
