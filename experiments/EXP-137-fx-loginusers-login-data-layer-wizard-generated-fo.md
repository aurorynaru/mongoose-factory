# EXP-137 — FX_LoginUsers: Login Data Layer, Wizard-Generated Form and One Hashed Test Record

**Operator decision (2026-10-26, cycle 32): ACCEPTED, QUALIFIED.** Run `R-20261026-104057-G85J` completed as accepted at cycle 33.
- **Created objects, for cleanup:**
  - SQL table `dbo.FX_LoginUsers`.
  - IDO `FX_LoginUsers` (project `FX_HelloWorldProject01`, alias `fxlogin`, revision 2, checked in).
  - User-scope Form `FX_LoginUsers` (Classic MultiView).
  - One fake row, `fx_probe` / `1d1fde6d…09b40` / `FX-Viewer` / `FX-STORE-01`.
- **Qualifications:**
  - The exact-name IDO query was waived; the T3 lowercase query with its positive control stands as the absence evidence.
  - Create Form was answered No under Amendment A1, and the Form was built with the separate Classic MultiView wizard.
  - The individual control bindings are proven only by position and the Required marker. End-to-end proof is deferred to EXP-138.
  - Persistence is proven within one session only. The first reopen showed only a placeholder until one Refresh.
  - No Save toast was captured.
  - T5 was interrupted by a machine restart with no effect. The operator reconciled it and supplied the account evidence (`operator-01`…`03`).
- **Confinement (AC-12):** verified by the operator with `git status`.

**Current status (T24, final read-only cumulative audit, run `R-20261026-104057-G85J`, cycle 28): no browser operation and no application mutation. The acceptance matrix AC-1 to AC-12, cumulative mutation counts, artifact inventory and operator items are in the "Final audit (T24)" section below and in `evidence/EXP-137/T24-final-audit-acceptance-matrix.md`. Proposed disposition for operator review: qualified partial support, not accepted. Open: Form binding readback (AC-5), same-session versus database persistence (AC-10), immediate Save response (AC-9), AC-7 close/reopen condition, AC-8 portal route not exercised, identity of the `oFX_LoginUsers` label string and Designer Save global objects, compile status, console counter variation, `deny_browser_javascript` (unverified), and Git confinement (pending operator).**

**Previous status (T20, run `R-20261026-104057-G85J`, cycle 24): the runtime Form `FX_LoginUsers` was opened once through the Web Client (toolbar Open → Select Form exact-name filter → one row → OK). Identity observed: tab `FX_LoginUsers`, `(Object 1 of 1)`, a starred add-mode placeholder, four blank edit boxes, Save disabled, header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. One Refresh left the same placeholder-only state, which is a qualified zero-committed-row observation (unfiltered, one session, following the EXP-135 T12 pattern). Filter in Place was turned on and back off with no criterion typed. The field-level `fx_probe` criterion was NOT run: the runtime shows four blank, unnamed edit boxes and no way to link a box to FX_Username (the T19 binding readback also failed), so typing into an unverified box could give a false zero. No Add/New, typed test value, insert, Save, check-in, close/reopen, portal reload, Designer action or unload. Stopped as instructed; awaiting coordinator decision before any test value. Details: `evidence/EXP-137/T20-runtime-preflight.md`.**

**Previous status (T19, run `R-20261026-104057-G85J`, cycle 23): BLOCKED on the binding readback. The Designer tab was selected and the identity guards re-confirmed (Name and Caption `FX_LoginUsers`, Version User, ScopeType User / anton.ramos@3mworks.com.ph, Primary Collection `FX_LoginUsers`, Save and Undo disabled, no dialog). A canvas click on the top edit box failed (timeout: the designer adorner `compadorner-3503` intercepted pointer events); one fresh snapshot and one corrected inspection (Details > Components tab switch) showed only the collapsed `Pane (00)` and `Pane (01)` rows, with no expander reference. No binding was read for any of the four edit boxes. The tool error log named the top edit box `FX_PasswordHashEdit` (not a binding readback). No Save, edit, close/reopen, runtime, record, check-in, wizard, FormSync or unload. AC-5 binding portion remains open. Details: `evidence/EXP-137/T19-binding-readback-blocked.md`. Awaiting coordinator review (options: accept deferral and rely on the runtime readback, or authorize a fresh route).**

**Previous status (T18, run `R-20261026-104057-G85J`, cycle 22): Designer close, exact-name Select Form uniqueness and reopen are observed in one Designer session. The FX_LoginUsers Form was closed once with no prompt; Select Form with the criterion `FX_LoginUsers` (Name, case-insensitive infix) returned exactly one row, `FX_LoginUsers` / `FX_LoginUsers`; the one row was activated once and OK was pressed once. The reopened Form shows Name and Caption `FX_LoginUsers`, Version User, ScopeType User / ScopeName anton.ramos@3mworks.com.ph, Primary Collection `FX_LoginUsers`, Form Type Normal, Is Master True, a GridLeft canvas with four edit boxes, and Save and Undo disabled. Qualifications: the persistence readback is Designer-session only (not a portal reload, not cross-session, not database-level); the Select Form list shows no scope column; field bindings were not read (not requested in T18); runtime, check-in and record steps were not attempted. No Save, Caption edit, component change, check-in, runtime, record insert, Create Form, Finish, unload or FormSync. Details: `evidence/EXP-137/T18-close-reopen-persistence-and-inventory.md`. Awaiting coordinator review before binding readback or runtime.**

**Previous status (T17, run `R-20261026-104057-G85J`, cycle 21): A1 step 4 (Form Caption) and step 5 (one ordinary Designer Save) are done. Form Caption `FX_LoginUsers` committed by blur on the Form-level Caption row (Name `FX_LoginUsers`, Version User, ScopeType User / anton.ramos@3mworks.com.ph, Primary Collection `FX_LoginUsers` read back before the edit). Designer Save: 1, toast `Form [FX_LoginUsers] and global object(s) were saved.`; settled state Save and Undo disabled, Caption still `FX_LoginUsers`. Qualifications: the Caption value-cell click landed on the string-resource dropdown arrow (list opened, dismissed by blur with no change, then re-opened and the literal typed in the inline input; no list item chosen); persistence not established until close/reopen; exactly-one Form inventory and field bindings not re-checked. Nothing else done (no close/reopen, runtime, record, check-in, wizard, FormSync, unload, vendor or component edit). Details: `evidence/EXP-137/T17-caption-and-single-designer-save.md`. Awaiting coordinator review before close/reopen and binding verification.**

**Previous status (T16, run `R-20261026-104057-G85J`, cycle 20): the single Classic MultiView Form Wizard Finish (A1 step 3) was executed EXACTLY ONCE after a passing pre-Finish gate. The wizard returned `Process Completed Successfully`; the Designer then opened tab `FX_LoginUsers` (`?MGForm=FX_LoginUsers`) with Name `FX_LoginUsers`, Version `User version`, ScopeType User, ScopeName anton.ramos@3mworks.com.ph, Primary Collection `FX_LoginUsers` (Details > Collections readback) and four edit boxes on a GridLeft canvas. Save was disabled. The Caption is blank. Not done: Caption edit, Designer Save, close/reopen, check-in, runtime, record insert, unload, FormSync. Still open: exactly-one Form inventory re-check (AC-5 uniqueness, Select Form not reopened), component bindings (panes not expanded), and persistence. Details: `evidence/EXP-137/T16-classic-multiview-finish-generated-form.md`. Awaiting coordinator review before Caption editing or Save.**

**Previous status (T15, run `R-20261026-104057-G85J`, cycle 19): the Classic MultiView Form Wizard (A1 step 3) is configured and OPEN on its final page, with Name `FX_LoginUsers`, Data Source IDO `FX_LoginUsers`, Form Layout GridLeft, Device Default, Query Form blank, four primary-collection properties (FX_PasswordHash, FX_Role, FX_Store, FX_Username; Include checked) and Save Template UNCHECKED. Finish has NOT been clicked; no Save, Caption, check-in, runtime or record action occurred. The Form-name collision gate is qualified (T1 Select Form absence, not re-run before Finish). Awaiting coordinator authorization for the single Form Wizard Finish. Details: `evidence/EXP-137/T15-classic-multiview-wizard-pre-finish.md`.**

**Previous status (T8, run `R-20261026-104057-G85J`, cycle 12): the A1 Data Maintenance Wizard is OPEN on page 1 with IDO Name `FX_LoginUsers`, IDO Project Name `FX_HelloWorldProject01` and Table Alias `fxlogin` committed (fresh snapshot and screenshot `evidence/EXP-137/t8-01-data-maintenance-wizard-page1-committed.png`). The four property rows, Create Scripts, Finish, Create Form and every other creation step are NOT performed. The operator waived the AC-1 exact-name IDO query in cycle 12; no collision query was repeated. Details: `evidence/EXP-137/T8-wizard-page1.md`.**

**Previous status (T7, run `R-20261026-104057-G85J`, cycle 10): BLOCKED before the exact-name IDO query. Filter in Place is now ON (one click, accessibility `active` verified); the IDO Name criteria field `CollectionNameEdit` is read-only, so no criterion was committed and no F4 was pressed. AC-1 IDO absence for `FX_LoginUsers` is NOT established. No wizard, Form, Save, check-in or runtime operation occurred. Details: `evidence/EXP-137/T7-exact-name-idos-check.md`; T6 checkpoint: `evidence/EXP-137/T6-recovery-checkpoint.md`.**

**Previous status (T5, run `R-20261026-104057-G85J`, cycle 7): Amendment A1 (operator-approved revised route) is recorded above. Create Form Yes is withdrawn; the route is one Create Form No and one Form Wizard Form creation. T5 performs only the exact-name IDO collision query; no wizard, Form, Save, check-in or runtime operation occurs in T5.**

**Previous status (after T4, run `R-20261026-104057-G85J`, cycle 5): the AC-1 absence checks are observed on all three surfaces, each with a working positive control, and the IDO Projects Form shows `FX_HelloWorldProject01` directly. The qualifications are UI-level evidence (not database-verified) and the T1 lowercase IDO positive control was not paired with a pre-F4 capture. The Create Form "Yes" safety gate (AC-4) is still NOT established from any pre-commit surface, so AC-4 remains blocked. The wizard has not been launched, no Finish and no Create Form answer have occurred, and no creation, save, check-in or record insert occurred.** Details: `evidence/EXP-137/T1-preflight-gate-summary.md`, `T2-sql-tables-collision-check.md`, `T3-idos-and-project-preflight.md`, `T4-sql-tables-case-insensitive-check.md`.

Date: 2026-10-26. Worker session `579ffe78-89ab-4f74-a796-b4d11039bd5f` · task_message_id `588aab72-fd07-4864-926a-7c52660cf690`.
Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). The table, IDO and alias are tenant-wide artifacts; the Form stays in User editing scope.
Brief commits: `038832a` (draft), `112cc3b` (approved). Record file was absent from the working tree at T1 start (discrepancy recorded in the T1 summary).

## Objective (brief, summarised)

Using the accepted EXP-134 Data Maintenance Wizard route, in existing project `FX_HelloWorldProject01`:
- one SQL table and one IDO `FX_LoginUsers`, alias `fxlogin`;
- four properties, no Property Class: `FX_Username` String 50 (Primary Key, Required), `FX_PasswordHash` String 64, `FX_Role` String 50, `FX_Store` String 50;
- Create Scripts unchecked; one Finish; ~~one Create Form answer only if the FX_ / User-scope safety contract is established before the answer~~ *(superseded by A1: Create Form is answered No; the Form is created through the Form Wizard route in A1)*;
- one runtime fake record (`fx_probe`, the supplied 64-character SHA-256 hash, `FX-Viewer`, `FX-STORE-01`), one Save, one close and reopen.

## Amendment A1 — operator-approved revised route (recorded in T5, run `R-20261026-104057-G85J`, cycle 7)

Authority: operator-approved revised execution plan, transmitted in the T5 bounded instruction. Recorded before any browser mutation in T5. The original objective, the T1–T4 history and the original acceptance wording are kept unchanged. Superseded text is struck through inline or marked "superseded by A1". Nothing in A1 expands the one-table, one-IDO, one-Finish, one-record or one-Save limits.

**Revised plan (replaces the Create Form Yes route):**
1. **Data Maintenance Wizard (unchanged):** configuration gate (AC-2), then exactly one Finish for the SQL table and IDO. Record the completion message. The EXP-134 precedent for this wizard's native completion text is `Table and IDO created.` (EXP-134 T11). Observation here is still required.
2. **Create Form prompt (replaces AC-4):** capture the prompt, then answer **No** exactly once. **Yes is withdrawn** and must not be answered in this experiment. The wizard then generates no Form, so the FX_-prefix/User-scope pre-commit gate no longer applies.
3. **Form creation (replaces AC-5):** create exactly one Form `FX_LoginUsers` (Classic, MultiView) through the EXP-135 route: live User-scope Designer → New → Form Wizard Selection → New Form → Category `Classic` → Wizard `MultiView` → OK. Bind to the existing IDO `FX_LoginUsers` and its four configured properties. Save Template **unchecked**. Exactly one Finish on this Form Wizard.
4. **Caption (EXP-135 T6 method, verified in that record):** click the Caption value cell, select-all, type the literal `FX_LoginUsers` (uncommitted), then commit by clicking the Caption label cell. **Never press Enter. Never select from the string-resource list.** (EXP-135 T5 precedent: Enter committed `ApplyFullTextIndexScriptQuestion`.)
5. **Designer Save:** exactly one ordinary Designer Save of the Form. Then close and reopen for persistence verification.
6. **Verification required for the Form:** visible Form Name `FX_LoginUsers`, Caption `FX_LoginUsers`, ScopeType `User`, ScopeName (expected `anton.ramos@3mworks.com.ph`, as shown in the Designer footer), four property bindings to `FX_*` properties, one ordinary Designer Save, close/reopen persistence, and no additional Form or layout repair.

**Scope and prohibition text updated so it does not contradict the route:**
- "Create Form Yes" prohibition: now **answer No once; never Yes**.
- "Create a separate maintenance Form through another wizard if the single authorized Create Form attempt fails or is blocked" (prohibited): **superseded by A1.** The EXP-135 Form Wizard route in A1 is the single authorized creation of the maintenance Form. It is not a replacement, a second Form, or a retry.
- "Creating a replacement Form if the Data Maintenance Wizard does not generate a usable FX_LoginUsers Form" (out of scope): **superseded by A1.** Under A1 the Data Maintenance Wizard generates no Form, so the Form Wizard route is the only Form creation.
- "Manually repairing generated Form layout, adding components, changing bindings": **still prohibited.** The only permitted Form edit is the Caption value in step 4.
- AC-4 safety-gate contract (FX_/User-scope pre-commit contract for Yes): **withdrawn.**
- The one-Finish limit applies to each wizard separately: one Data Maintenance Wizard Finish (table/IDO) and one Form Wizard Finish (Form). Neither is repeated.

**Preserved unchanged by A1:** table `FX_LoginUsers`; IDO `FX_LoginUsers` with alias `fxlogin` in `FX_HelloWorldProject01`; `FX_Username` String 50 Primary Key and Required; `FX_PasswordHash` String 64; `FX_Role` String 50; `FX_Store` String 50; no Property Class on any property; Create Scripts unchecked. Also preserved: IDO check-in only if checked out; the EXP-135 T9 portal-reload route; zero-row verification before any insert; exactly one fake `fx_probe` record and one runtime Save; one ordinary runtime close and reopen; artifact confinement (only `FX_LoginUsers` table, IDO and Form, plus FX_-prefixed wizard output); recovery limits; and no metadata unload, FormSync, deployment, publication, import/export or direct SQL data work. No non-FX_ artifact is created, changed or deleted.

**A1 status:** recorded. No A1 step has been executed. The Create Form No response, the Form Wizard, the Caption and the Designer Save are all future steps in later tasks, not T5.

## Gate status (T1)

| Gate | Result |
|---|---|
| AC-1 identity, configuration, User scope, project | Observed (project indirect); absence surfaces partly run (see below) |
| AC-1 absence: Form list | PASS (qualified: exact and case-insensitive, positive control `fx_inventoryeditor` → 1 row) |
| AC-1 absence: IDOs | T1: QUALIFIED. T3: OBSERVED (uppercase positive control `FX_InventoryItems` → one genuine row with Project `FX_HelloWorldProject01`; target `fx_loginusers` → zero rows with the criterion captured before F4; T1 lowercase positive control `fx_inventoryitems` → `FX_InventoryItems`) |
| AC-1 project `FX_HelloWorldProject01` | T3: OBSERVED directly (IDO Projects Form, one genuine row, Description `Factory Hello World test project`, Access As `G6R`). Replaces the T1 indirect inference |
| AC-1 absence: Sql Tables | T1: NOT RUN (criteria entry blocked). T2: OBSERVED, QUALIFIED (exact case: positive control `FX_InventoryItems` → one genuine dbo row; target `FX_LoginUsers` → zero genuine rows). T4: OBSERVED, QUALIFIED (lowercase: positive control `fx_inventoryitems` → one genuine row `FX_InventoryItems`, schema `dbo`; target `fx_loginusers` → zero genuine rows, placeholder only; criterion captured before F4 in both queries; UI-level, not database-verified) |
| AC-1 reconciliation (T1–T4) | Observed with qualifications; NOT declared passed (operator review). Account header, configuration and Designer User scope observed in T1 (Designer footer read in T1 only). Project `FX_HelloWorldProject01` observed directly in T3. Form list: exact and lowercase absence with positive control `fx_inventoryeditor` (T1). IDOs: lowercase target with pre-F4 capture and uppercase positive control in T3; the lowercase positive control `fx_inventoryitems` was run in T1 without a pre-F4 capture, so the IDO pairing is qualified. Sql Tables: exact (T2) and lowercase (T4) absence, each with a working positive control. All absence results are UI-level, not database-verified |
| AC-4 Create Form safety contract | *Original (T1–T4):* NOT ESTABLISHED; blocked; Yes not answered. *Superseded by A1:* AC-4 is now **exactly one Create Form No** after the single Data Maintenance Wizard Finish, with the prompt and the completion response captured. Not yet executed. |
| AC-5 generated Form | *Original (T1–T4):* not evaluated (depended on the Yes route). *Superseded by A1:* exactly one Form `FX_LoginUsers` (Classic MultiView) via the EXP-135 Form Wizard route, User scope, four bindings, Caption `FX_LoginUsers`, one ordinary Designer Save, close/reopen. Not yet executed. |

## Final audit (T24, read-only; no browser operation, no application mutation)

Full report, decisive-screenshot descriptions, controller-audit review and confinement notes: `evidence/EXP-137/T24-final-audit-acceptance-matrix.md`. The brief file under `tools/` was not read (boundary); A1 and the scope were taken from this record and the T24 instruction.

**Acceptance matrix (proposed supported status; none is a final pass):**

| AC | Proposed status | Observation level and key limit |
|---|---|---|
| AC-1 identity, scope, project, absence | Supported, qualified | Observed UI-level. Select Form positive control `fx_inventoryeditor` recorded in T1 text only (no saved capture). Sql Tables and IDOs positive controls captured (T2–T4). |
| AC-2 final wizard configuration | Supported, qualified (composite) | `t8-01`, `t9-01`, `t9-02`, `t10-01`, `t10-02`; no single capture shows all elements. |
| AC-3 one Finish; completion | Supported | One Finish; `Table and IDO created.`; identities by UI readback. |
| AC-4 Create Form prompt | Supported under A1, qualified | `t11-01` before response; one No, zero Yes. Yes-route gate withdrawn by A1. |
| AC-5 Form identity and scope | Supported, qualified | Name `FX_LoginUsers`, ScopeType User, one exact-name Select Form row (T18, `t23-02`). Select Form has no scope column. |
| AC-5 individual bindings | Unresolved | T19 failed; positional and required-marker evidence is indirect only. |
| AC-6 IDO checkout and check-in | Supported | Checked out (T12), one check-in (T13), Revision 1→2. Notice OK is a flagged judgment call. Compile result not displayed. |
| AC-7 metadata readbacks | Partially supported | IDO properties, Sql Tables and Sql Columns agree (key, required, lengths). IDOs view not closed and reopened; Sql Tables reopened once. No catalogue read. |
| AC-8 portal route and runtime baseline | Partially supported, qualified | Portal-reload route not exercised (conditional). Placeholder-only zero-row baseline (`t20-03`). No field-level `fx_probe` criterion. |
| AC-9 one record and one Save | Supported, qualified | One Save (T22); immediate toast not captured; four values exact in readback; hash 64 hex characters. |
| AC-10 close, reopen, recovery | Supported in-session, discrepancy recorded | `t23-01` to `t23-04`: first reopen placeholder only; one Refresh shows the row. Same session only. |
| AC-11 cumulative audit | Reconciled; open items disclosed | §Final audit (T24) below and the full report. |
| AC-12 confinement | Partially reviewed; pending operator | No Git or shell access in this session; no source hashes. Not claimed as proven. |

**Cumulative application mutations (reconciled to authorization):**

- Data Maintenance Wizard Finish: 1 (T11). Second Finish: 0.
- Create Form: No 1; Yes 0 (T11, A1).
- SQL table `dbo.FX_LoginUsers`: 1. IDO `FX_LoginUsers` (project `FX_HelloWorldProject01`, alias `fxlogin`): 1.
- IDO check-in: 1 (T13). Check-out or Undo: 0. Notice OK: 1 (flagged).
- Classic MultiView Form Wizard Finish: 1 (T16). Form Caption commit: 1 (T17). Designer Save: 1 (T17). Designer close and reopen: 1 and 1 (T18).
- Runtime open: 2 in total (T20 open; T23 reopen). Runtime close: 1 (T23). Runtime Refresh: 2 read-only (T20 before entry, extra; T23 after reopen).
- Typed runtime values: 4 (T21). Runtime Save: 1 (T22). Fake record rows: 1.
- Add/New, unload, FormSync, deployment, publication, import/export, coordinate clicks, browser JavaScript or evaluate: 0 recorded.
- Escape: 1 (T18, Designer menu, no combobox active). Enter: 0. Tab and F4: criteria and filter contexts only. Mouse-wheel scrolls: 2 (T9).
- Controller audits: `browser_type` 40 calls (36 succeeded, 4 failed with no text entered: T1 ×2, T5, T7). Stale-ref events: T5, T7, T9, T14. Timeouts: T1, T6, T7, T18, T19. Session recovery in T6–T23: 0.

**Artifacts (application):** SQL table `dbo.FX_LoginUsers` with four business columns (`FX_Username` nvarchar 50 PK not-null; `FX_PasswordHash` nvarchar 64; `FX_Role` nvarchar 50; `FX_Store` nvarchar 50) and seven wizard system columns; IDO `FX_LoginUsers` with four configured and seven wizard-default properties; Form `FX_LoginUsers` (Classic MultiView, User scope, Caption `FX_LoginUsers`, four edit boxes); one runtime row (`fx_probe`, the supplied hash, `FX-Viewer`, `FX-STORE-01`).

**Items needing identification before confinement is accepted:** (1) the Label String ID and Caption `oFX_LoginUsers`, a wizard default (precedent EXP-040 and EXP-041-R2) whose string-resource existence is unverified and whose prefix is `o`, not `FX_`; (2) the "global object(s)" saved by the Designer Save (T17), which the product does not identify.

**Documented events disclosed (not treated as passing or failing evidence):** T13 source-control notice; T17 generic global-object toast; T19 blocked binding readback; T22 uncaptured immediate Save toast; T23 initial-reopen placeholder; T12 denied Grep read of a tool-results file (not in the T12 record); T1 parallel browser block; T14 unexplained 200-row FiP state; FX_InventoryEditor runtime tab present at T1 and absent from later snapshots with no recorded close action; console counts varying across records (21/10, 2/0, 3/2) with the permissions-policy messages not investigated; `deny_browser_javascript` unverified.

**Operator-decision items:** (1) accept the binding deferral or authorize a new read-only route; (2) same-session persistence level or a separate database-level check; (3) accept the settled-state evidence for AC-9 or record it as unresolved; (4) accept the `oFX_` label convention or check the string object; (5) identify the Designer Save global objects; (6) AC-7 close/reopen condition; (7) AC-8 portal route required or not; (8) first-reopen placeholder as an accepted observation or a separately authorized repeat; (9) compile status requirement; (10) confirm the T13 notice OK; (11) console counter variation and the T12 denied read; (12) verify `deny_browser_javascript`; (13) Git status, diff and source hashes; (14) FX_InventoryEditor tab absence.

**Proposed disposition (for operator review; not a declaration):** qualified partial support, not accepted. Table, IDO, User-scope Form and a same-session round-trip of one fake record are supported by UI readbacks. Binding, cross-session and database-level state, compile status and the two identification items remain open. No further application mutation is justified for EXP-137.

**Knowledge state (T24):** table, IDO, Form and single same-session round-trip: observed (qualified). Binding, cross-session persistence, database state, compile status: unresolved. `deny_browser_javascript`: unverified. Nothing is `replay_verified`.

## Operations (T23, one ordinary runtime close, one reopen and readback; same-session persistence observed)

Tab list (read-only, once); tab 0 (Web Client) selected (first attempt). Pre-close snapshot and screenshot `t23-00`: `FX_LoginUsers`, header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, `(Object 1 of 1)`, one unstarred row, Save disabled, no dialog, four values exact (top hash 64 characters, `FX-Viewer`, `FX-STORE-01`, `fx_probe`).

- **Close: 1.** `Close Panel FX_LoginUsers` (`f1e110`), no save prompt. URL became `favoriteContext=SqlColumns`; the Sql Columns panel became selected and was not changed.
- **Reopen: 1.** Toolbar Open → Select Form with pre-populated exact filter `FX_LoginUsers` (one row `FX_LoginUsers` / `FX_LoginUsers`, `t23-02`) → OK. The filter text was not changed.
- **Immediate reopen (`t23-03`, before Refresh):** starred placeholder, `(Object 1 of 1)`, four **empty** boxes, Save disabled. **Discrepancy: the saved row was not displayed on first load.**
- **Refresh: 1** (permitted once; no unsaved edits). Settled (`t23-04`): one unstarred row `1`; top `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40`; second `FX-Viewer`; third `FX-STORE-01`; fourth `fx_probe`; Save disabled; `(Object 1 of 1)`; no dialog.
- **Counts:** genuine data rows after Refresh = 1; no duplicate fx_probe; no extra placeholder row seen.
- **Save: 0.** Add/New, typed values, Designer, check-in, wizard, unload, FormSync, JavaScript, coordinate clicks: 0. Tool errors: 0. Session recovery: 0.
- **Classification:** four values persisted in the same session after close/reopen and one Refresh: **observed**. Cross-session or database durability: **not tested**. Designer control-to-property bindings: **unresolved** (positional persistence only; runtime captions blank).
- Console: 3 errors (pre-existing permissions-policy `unload` messages), 2 warnings; unchanged; not investigated.
- Screenshots: `t23-00` to `t23-04`, all viewed.
- Full detail: `evidence/EXP-137/T23-close-reopen-persistence-readback.md`. Returned for coordinator review before final acceptance or repository audit.

## Operations (T22, single runtime Save of the T21 draft; settled state observed; no close/reopen)

Tab list (read-only, once); tab 0 (Web Client) selected (first attempt). Fresh snapshot before action: `FX_LoginUsers`, header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, `(Object 1 of 1)`, one draft row, Save enabled, no session or error dialog. Four values validated exactly before Save: top = hash `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40` (64 characters); second = `FX-Viewer`; third = `FX-STORE-01`; fourth (Required) = `fx_probe`. No editor active; no value changed from T21.

- **Save: 1** (toolbar Save, ref `f1e28`, from a fresh snapshot). Returned without error. **No second Save.**
- **Settled state (`t22-01`):** Save disabled; row indicator changed from starred placeholder to unstarred `1`; the four values remain in the boxes and the single grid row; `(Object 1 of 1)`; no extra row, no dialog.
- **Interpretation:** UI-level commit observation consistent with the EXP-135 T12 pattern. Not a database readback. Not a field-level query.
- **Immediate toast/response not captured** (first capture was after the click returned; no toast visible in the settled state). Unresolved.
- **Binding not verified.** Values remain in the positions typed; a swapped binding would not be visible until a runtime readback after close/reopen. No repair attempted.
- Console: warning 2 (unrelated origin-trial and view-template notices); error 3 (pre-existing permissions-policy `unload` messages). Unchanged; not investigated.
- Refresh 0; close/reopen 0; Designer, check-in, wizard, unload, FormSync, JavaScript, coordinate clicks 0.
- Screenshots: `t22-00` (pre-Save, validated), `t22-01` (settled). Both viewed.
- Full detail: `evidence/EXP-137/T22-single-runtime-save.md`. Returned for coordinator review before any close/reopen persistence verification.

## Operations (T21, one draft row entered and NOT saved)

Coordinator Option A (T20) applied: the unfiltered placeholder-only state after Refresh is accepted as qualified zero-committed-row evidence. Tab list (read-only); tab 0 (Web Client) selected (first attempt). Fresh snapshots confirmed header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, runtime `FX_LoginUsers`, `(Object 1 of 1)`, one starred placeholder, four unnamed edit boxes, `*` on the fourth, Save disabled, no dialog. Bounding boxes confirmed top-to-bottom order (y≈120, 160, 201, 242), matching the provisional mapping (T15 order, T19 diagnostic, T20 Required marker).

- **Entries (4 browser_type, one per field, each followed by a read-only readback):** top = hash `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40` (64 characters, exact in accessibility text); second = `FX-Viewer`; third = `FX-STORE-01`; fourth (Required) = `fx_probe`.
- **Commit:** one click on the read-only `(Object 1 of 1)` status textbox as a non-saving blur target. The draft row's fourth gridcell then reads `fx_probe`.
- **Draft state:** one row (the existing starred placeholder); four values literal and complete; Save enabled (dirty). No extra row, no duplicate fx_probe.
- **Save: 0. Refresh: 0. Add/New: 0.** No close/reopen, reload, check-in, Designer edit, Finish, unload, FormSync or JavaScript.
- Caveat: positional correctness does not prove the four IDO bindings. Binding remains unverified; a swap would show only after Save and runtime readback.
- Screenshots: `t21-00` (pre-entry placeholder) and `t21-01` (draft after commit; the filename's "before-blur-check" is misleading, the capture is post-commit). Both viewed.
- Console (error level): 3 pre-existing permissions-policy `unload` messages, unchanged; not investigated.
- Full detail: `evidence/EXP-137/T21-draft-entry-not-saved.md`. Ready for coordinator-authorized single Save; not authorized by this task.

## Operations (T20, Web Client runtime open and read-only preflight; stopped before any test value)

Tab list (read-only); tab 0 (Web Client) selected (succeeded first attempt). Fresh snapshot: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no session-expiry or sign-in dialog; Sql Columns panel open (read-only).

- **Open: 1.** Toolbar Open → Select Form (leftover `Project` filter, one row IDO Projects). Filter: one non-slow fill had no effect on the list (`t20-01`); then the Filter field was clicked once, Ctrl+A once and `FX_LoginUsers` typed slowly once. Settled: one row `FX_LoginUsers` / `FX_LoginUsers` (`t20-02`). OK: 1 (Cancel 0).
- **Runtime identity (`t20-03`):** tab `FX_LoginUsers`; `(Object 1 of 1)`; starred add-mode placeholder; four blank edit boxes, required marker on the fourth; field names not shown; Save disabled.
- **Refresh: 1** (read). Same placeholder-only state (`t20-04`). Qualified zero-committed-row observation: unfiltered, one session; committed rows would appear unstarred per EXP-135 T12.
- **Filter in Place: 2 toggles** (on and then off; no criterion typed). FiP off restored the placeholder state (`t20-05`, `t20-06`).
- **fx_probe check:** the field-level criterion was NOT run. The four edit boxes are blank and unnamed at runtime, and the T19 binding readback failed, so no box could be linked to FX_Username; a criterion on an unverified box could give a false zero. fx_probe presence or absence is therefore not established at field level.
- **Add/New:** enabled in the toolbar, not activated. **Save:** disabled throughout.
- Counts: Add/New 0; typed test values 0; record insert 0; Save 0; runtime close/reopen 0; check-in 0; Designer action 0 (tab 1 never selected); Finish, Create Form, wizard 0; portal reload 0; unload or FormSync 0; coordinate clicks 0; keyboard 0 (Ctrl+A in the filter only); ref-not-found 0; automatic recovery 0. Screenshots 7 (`t20-00` to `t20-06`, all viewed). Console of this tab `3 errors, 2 warnings`, unchanged and not investigated.
- Full detail: `evidence/EXP-137/T20-runtime-preflight.md`.

## Operations (T19, read-only binding readback attempt; BLOCKED, no binding read)

Tab list (read-only) then tab 1 (Designer) selected (succeeded first attempt). Fresh untargeted snapshot: Form `FX_LoginUsers`, Caption `FX_LoginUsers`, Version User, ScopeType User / anton.ramos@3mworks.com.ph, Primary Collection `FX_LoginUsers`, Save and Undo disabled, no dialog (`t19-00`).

- **Canvas edit-box click (ref `e310`, top row): 1, FAILED.** Timeout 5000 ms; the locator resolved to an input carrying `data-mgcompnamevalue="FX_PasswordHashEdit"` (tool error log only), but the designer adorner `compadorner-3503` intercepted pointer events on each retry. No state change.
- **Recovery: one fresh untargeted snapshot (no state change, same refs) and one corrected inspection:** Details > Components tab click (view switch, succeeded). The tree shows only `Pane (00)` and `Pane (01)`, collapsed, with no expander accessibility reference (`t19-01`). The chevron and row-click route from T16 was not repeated.
- **Result:** no binding was read for any of the four edit boxes (`FX_PasswordHash`, `FX_Role`, `FX_Store`, `FX_Username`). The per-control names are unresolved except the top-row name from the tool log.
- Counts: Save 0; Caption, component, binding or layout edits 0; close/reopen 0; runtime 0; record insert 0; check-in 0; Finish 0; Create Form 0; portal reload 0; unload or FormSync 0; vendor or non-FX_ Form 0; coordinate clicks 0; keyboard 0; worker JavaScript 0. Screenshots 2 (both succeeded). Automatic session recovery 0.
- Full detail: `evidence/EXP-137/T19-binding-readback-blocked.md`.

## Operations (T18, Designer close, exact-name Select Form uniqueness and reopen; read-only except one close and one reopen)

Tab 1 selected after a tab list; pre-close guards passed (Name, Caption, Version User, footer User scope, Save and Undo disabled, no dialog). Primary Collection `FX_LoginUsers` read back from Details > Collections before close and again after reopen.

- **Close: 1.** Form-tab close control `closable FX_LoginUsers`; no save or discard prompt; post-close tab list shows only the vendor `IDOs` Form (not touched).
- **Select Form: 1 open, 1 criterion, 1 row, 1 OK, 0 Cancel.** The Designer Form menu was opened once (recent forms; no item chosen), and the toolbar Open control then opened the Select Form dialog directly. The leftover filter `Project` was replaced by `FX_LoginUsers` (Name, Case Sensitive off, Starts With off). Settled result: one row, `FX_LoginUsers` / `FX_LoginUsers`. The row's Name cell was clicked once and OK once.
- **Reopen: 1.** Designer URL `MGForm=FX_LoginUsers`; reopened Form readback: Name, Caption, Version User, ScopeType User / anton.ramos@3mworks.com.ph, Primary Collection `FX_LoginUsers`, Form Type Normal, Is Master True, four edit boxes on the GridLeft canvas, Save and Undo disabled, no dialog.
- Counts: Save 0; Caption edits 0; component or binding edits 0; check-in 0; runtime 0; record insert 0; Finish 0; Create Form 0; Save Template 0; FormSync or unload 0; vendor or non-FX_ Form action 0; coordinate clicks 0; worker JavaScript 0; Escape presses 1 (no effect on the open menu; no combobox active); hover timeout 1 (menu intercepted the pointer; no state change).
- Screenshots: `t18-00` (pre-close), `t18-01` (pre-criterion Select Form), `t18-02` (settled one row), `t18-04` (reopened identity and canvas), `t18-05` (Details > Collections). Snapshots: `t18-03`.
- Full detail: `evidence/EXP-137/T18-close-reopen-persistence-and-inventory.md`.

## Operations (T17, Form Caption and single ordinary Designer Save)

Tab 1 selected after a tab list; fresh snapshot: Form FX_LoginUsers, Version User, footer User scope, Save disabled. Collections readback: `Primary Collection: FX_LoginUsers`.

- **Caption:** value-cell click reached the string-resource dropdown arrow (list opened); label-blur closed it with no change. Value-cell click re-opened the inline combobox; Ctrl+A; literal `FX_LoginUsers` entered (uncommitted); committed by clicking the Caption label cell. No Enter, no list item chosen. Caption now reads `FX_LoginUsers` on the Form-level row.
- **Designer Save: 1.** Toast `Form [FX_LoginUsers] and global object(s) were saved.`; settled state Save and Undo disabled.
- Counts: Caption commits 1; Save 1; close/reopen 0; runtime 0; record insert 0; check-in 0; Finish 0; Save Template 0; Create Form 0; FormSync/unload 0; vendor/component edits 0; coordinate clicks 0; worker JavaScript 0. Screenshots `t17-00` to `t17-08`.
- Full detail: `evidence/EXP-137/T17-caption-and-single-designer-save.md`.

## Operations (T16, single Classic MultiView Form Wizard Finish and immediate inspection)

Tab list (read-only), then tab 1 (Designer) selected. Fresh snapshot: Form Wizard - MultiView final page open; message `build a multiview form named FX_LoginUsers with the data source FX_LoginUsers`; Save Template unchecked; Finish enabled; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Gate PASS (screenshot `t16-00`).

- **Finish: 1** (the only Finish of the Form Wizard). Response: wizard closed; alert `Process Completed Successfully` (screenshot `t16-01`). OK acknowledged once.
- **Generated Form:** Designer tab `FX_LoginUsers` (`?MGForm=FX_LoginUsers`); Properties Name `FX_LoginUsers`; Version `User version for user`; Form Type Normal; Is Master True; Caption blank; Save and Undo disabled; footer User scope (`t16-02`). Details > Collections: `Primary Collection: FX_LoginUsers` (`t16-03`). Components tab shows Pane (00) and (01) collapsed; not expanded (`t16-04` to `t16-06`).
- Counts: Create Form Yes 0, No 0 (no prompt on this route). Designer Save 0. Caption 0. Check-in 0. Runtime 0. Record insert 0. Close/reopen 0. Portal reload 0. Metadata unload 0. FormSync 0. Coordinate clicks 0. Recovery 0. Browser JavaScript authored by worker 0 (flag unverifiable). Clicks 5; key press 1 (ArrowRight, focus only). Screenshots 7 (`t16-00` to `t16-06`, all viewed).
- Full detail: `evidence/EXP-137/T16-classic-multiview-finish-generated-form.md`.

## Operations (T15, Classic MultiView Form wizard prepared to pre-Finish; no Finish)

Tab 1 (Designer) selected after a tab list; fresh snapshot showed the vendor `IdoCollections` Form (Caption `fIDOs`) with Save and Undo disabled and footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Route: Form → Definition → New → Form Wizard Selection (New Form; Category `Classic`; Wizard `Multi-View`, value `MultiView`) → OK. Page 1: Name `FX_LoginUsers` (typed once), Data Source `FX_LoginUsers` (one matching IDO option), GridLeft, Default, Query Form and Comments blank. Page 2: Primary Collection = FX_PasswordHash, FX_Role, FX_Store, FX_Username; no system properties added. Page 3: four rows, Include checked, Captions blank, Form Pages empty. Final page: "build a multiview form named FX_LoginUsers with the data source FX_LoginUsers"; Save Template unchecked by one label click.

- **Pre-Finish state:** Finish enabled and NOT clicked; wizard left open. Designer Save disabled on the underlying vendor Form.
- **Qualification:** the Name-list check showed saved form templates only (no FX_ template); the Form-name absence (T1 Select Form) was not re-run immediately before Finish.
- Counts: Finish 0; Save 0; Create Form Yes/No 0; check-in 0; runtime 0; record insert 0; portal reload 0; metadata unload 0; FormSync 0; Escape/Enter/Tab 0; coordinate clicks 0; recovery 0; worker JavaScript 0. Clicks 16; typed 1; tab selects 1; screenshots 14 (`t15-00` to `t15-13`, all viewed). `Unload All Global Form Objects`, `Copy` and `Delete` items were visible in the Definition submenu and were not clicked.
- Full detail: `evidence/EXP-137/T15-classic-multiview-wizard-pre-finish.md`.

## Operations (T14, read-only Sql Tables and Sql Columns verification)

Tab 0 selected after a tab list. Sql Tables reopened from the Form menu recent-forms list (one caution alert, OK once). FiP clicked once: the grid showed 200 unfiltered rows with no criteria row, which did not match T2/T4 and is unexplained. One `Ref not found` on the FiP ref; one fresh snapshot and one corrected FiP click then produced the criteria row. Criteria gridcell clicked to activate its combobox, `FX_LoginUsers` typed, Tab once, F4 once.

- **Sql Tables:** one genuine row `FX_LoginUsers`, schema `dbo`, Multi-Site unchecked; constraints `PK_FX_LoginUsers` and `IX_FX_LoginUsers_RowPointer`. Status `Table Name (SQL Tables 1 of 1)`.
- **Sql Columns** (opened with Columns...; 11 rows): FX_Username nvarchar 50, Is Nullable unchecked, Primary Key checked, Key Sequence 1; FX_PasswordHash nvarchar 64, nullable, not PK; FX_Role nvarchar 50, nullable, not PK; FX_Store nvarchar 50, nullable, not PK. Seven wizard system columns listed, not read individually.
- Matches the intended definitions for AC-7 at UI level. Not a database catalogue read.

Counts: Save 0; Check In/Out 0; Finish 0; Create Form 0; Classic Form 0; runtime open/insert 0; metadata unload, FormSync, SQL inspection beyond the Mongoose UI 0. Typed 1 (criterion only). Clicks: menu 2, caution OK 1, FiP 2 successful, criteria cell 1, Columns... 1, Sql Columns row selections 3. Tab 1, F4 1, Escape 0, Enter 0. Recovery 1 stale ref (one fresh snapshot, one corrected attempt). Screenshots 8 (all viewed). Coordinate clicks 0. Worker JavaScript 0. Full detail and verification matrix: `evidence/EXP-137/T14-sql-tables-sql-columns-readback.md`.

Not verified in T14: database catalogue state; the system columns individually; the case-insensitive Sql Tables recheck (T4 stands); the Sql Columns FX_PasswordHash re-read now done (see matrix). Still pending before Form work: operator review of T14, and separate authorization for the Classic MultiView Form (Amendment A1). `worker_tool_policy.deny_browser_javascript` is not verifiable by the worker.

## Operations (T13, single IDO check-in and read-only verification)

Tab 0 selected after a tab list (first attempt). Pre-check-in state verified visually and by `find`: IDO `FX_LoginUsers`, Project `FX_HelloWorldProject01`, Revision 1, Table `FX_LoginUsers` / alias `fxlogin` (Tables sub-tab, read-only switch), checked out (Check In enabled, Undo Check Out disabled), Save disabled, no dialog.

- **Check In clicked once** (succeeded, no tool error). The immediate response was an informational notice (`Source control integration is currently disabled in the current configuration. The item will not be checked in to source control.`), one OK, not naming the IDO and asking no question.
- **Notice OK clicked once.** Judgment call: the brief permits affirmative responses only to a notice that identifies the check-in. Acknowledged to reach a stable state with no open dialog; it created nothing. Flagged for coordinator confirmation.
- **Settled state: checked in.** Check Out enabled, Undo Check Out disabled, Locked By empty, row indicator unchecked, Revision Num 1 to 2, Save disabled, no dialog. Table row unchanged.
- Compilation result: not displayed.

Counts: Check In 1/1 succeeded (no second); Check Out 0; Undo 0; notice OK 1; Save 0; Finish 0; Create Form 0; Classic Form 0; runtime open 0; record insert 0; metadata unload, FormSync and SQL inspection 0. Read-only Tables sub-tab click 1. Screenshots 4 (all viewed). Recovery 0; coordinate clicks 0; Escape/Enter/Tab 0. Worker JavaScript 0. Full detail: `evidence/EXP-137/T13-idos-single-checkin.md`.

Not verified in T13: SQL Tables and Sql Columns (deferred per brief); server-side effect of the check-in beyond the client controls; FX_PasswordHash row re-read (observed in T12 only).

## Operations (T12, post-creation IDO identity and checkout readback; read-only except one FiP toggle and one criterion query)

Tab 0 (Web Client) selected after a tab list (first attempt). Fresh untargeted snapshot: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Save disabled, no dialog. The accessibility tree reported FiP `[active]` while the screenshot showed normal mode; the visual state was used. FiP clicked once (view toggle, verified ON visually). The editable `IDO Name:` criteria textbox was used; `FX_LoginUsers` typed, Tab once, F4 once. Result: one row `FX_LoginUsers`.

- IDO `FX_LoginUsers`, Project `FX_HelloWorldProject01`, Caption and Label String ID `oFX_LoginUsers`, Access As `G6R`, Revision Num `1`, Revision Date `10/26/2026`.
- Tables tab: `FX_LoginUsers`, alias `fxlogin`, Primary Base, Inner.
- **Checkout state: checked out** (row check indicator ticked; `Check In` enabled; `Undo Check Out` disabled; `Locked By` populated with the operator account, masked and truncated to `anton.ramos@…`). **No check-in or check-out performed.** Check-in is pending coordinator review.
- Properties sub-tab (read-only panel switch) shows the four configured properties: FX_Username String 50 Key Seq 1 Required; FX_PasswordHash String 64; FX_Role String 50; FX_Store String 50; Property Class blank on all four; Column Type nvarchar. Also seven wizard-generated default properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow), which the worker did not add.

Counts: Finish 0; Create Form 0; Save 0; check-in 0; check-out 0; runtime open 0; record insert 0; Classic Form creation 0; metadata unload 0; FormSync 0. Browser mutating-class actions taking effect: 4 (FiP toggle, criterion entry, Tab, F4) plus one Properties sub-tab click. Screenshots 5, scoped snapshots 3, fresh untargeted snapshot 1, `find` queries 9, recovery 0, coordinate clicks 0, Escape/Enter 0. Console counter `3 errors, 2 warnings` (T11 recorded 2 errors); the three errors are all `Permissions policy violation: unload`, and the one-count difference is unexplained. Worker-authored JavaScript 0.

Not verified in T12: physical SQL table and SQL columns (Sql Tables and Sql Columns readbacks deferred); the masked checkout holder beyond the truncated visible text. Full detail: `evidence/EXP-137/T12-post-creation-idos-verification.md`.

## Operations (T11, single wizard Finish and Create Form "No")

Designer tab 1 selected (tab list first; select succeeded first attempt). Fresh untargeted snapshot: wizard on page 2, Create Scripts unchecked, Finish enabled, no unexpected dialog, Designer `ScopeType: User`, vendor `IdoCollections` Save disabled. Configuration carried from T8–T10 (not edited).

- **Finish** clicked once (succeeded). The immediate response was the Create Form alertdialog: `Do you want to create a form for FX_LoginUsers?` with Yes (default focus) and No. Prompt captured before response (`t11-01-create-form-prompt-before-response.png`).
- **No** clicked once (succeeded), per Amendment A1. Yes not clicked; Enter not pressed. Settled response: wizard message `Table and IDO created.`, Create Scripts unchecked, Back/Next/Finish disabled, Close enabled (`t11-02-wizard-settled-after-no.png`).
- **Close** on the completed wizard clicked once (succeeded): UI dismissal only, disclosed as an extra UI action. Fresh snapshot: no dialog; vendor IdoCollections shown; User scope.

Counts: Finish 1/1 succeeded (second Finish 0); Create Form No 1/1 succeeded; Create Form Yes 0; table and IDO reported created by the wizard message (not yet independently verified; the message names neither object); Form reported created: no; check-in 0; Save 0; runtime open 0; record insert 0; Classic Form creation 0. Fresh untargeted snapshots 4; screenshots 2; Ref-not-found 0; timeouts 0; recovery 0; coordinate clicks 0; Escape/Tab/Enter 0. Product errors: none reported; console `2 errors, 0 warnings` unchanged and not investigated. Worker-authored JavaScript 0; `deny_browser_javascript` unverified by the worker. Full detail: `evidence/EXP-137/T11-finish-and-create-form-no.md`.

Not yet established: the identity of the created IDO and table (requires supported readback in the next task); IDO checkout state; whether the wizard created any object besides the table and IDO. The Classic MultiView `FX_LoginUsers` Form (A1 step) has not been created.

## Operations (T10, page-1 commit gate, Next once, page-2 inspection; no Finish)

Designer tab 1 selected after a tab list (select succeeded first attempt); fresh untargeted snapshot confirmed the same wizard on page 1 (IDO `FX_LoginUsers`, project `FX_HelloWorldProject01`, alias `fxlogin`, MultiView, GridLeft, Default, Site Split unchecked). Row 4's Data Type combobox was still active (value `String`). It was committed by one click on the non-editable `Table Alias:` label. A fresh snapshot then showed row 4 committed as `String` / `nvarchar` / `50`, Primary Key and Required unchecked, Property Class blank, and no active editor.

Page-1 committed readback (fresh snapshot, before Next):

| Row | Name | Data Type | SQL type | Length | Primary Key | Required | Property Class |
|---|---|---|---|---|---|---|---|
| 1 | FX_Username | String | nvarchar | 50 | checked | checked | blank |
| 2 | FX_PasswordHash | String | nvarchar | 64 | unchecked | unchecked | blank |
| 3 | FX_Role | String | nvarchar | 50 | unchecked | unchecked | blank |
| 4 | FX_Store | String | nvarchar | 50 | unchecked | unchecked | blank |

All four rows match the intended configuration; no extra row; identifiers unchanged. The page-1 gate passed. Required was not clicked again; its mechanism remains unresolved.

Next clicked once (succeeded). Page 2 fresh snapshot: message `Click "Finish" to create the database table, IDO and optional form.`; `Create Scripts` unchecked (confirmed in the snapshot and in `t10-02`); an empty disabled preview area; Back and Finish enabled; Next disabled (last page). Finish was not clicked.

Counts: mutating-class browser actions 2 (blur click 1; Next 1). Finish 0; Create Form 0; Save 0; check-in 0; Create Scripts change 0; Back 0; Cancel 0; Property Class lookup 0; Escape 0; Tab 0; coordinate clicks 0; runtime records 0; vendor Form edits 0. Fresh untargeted snapshots 3 (start; post-blur; post-Next); targeted read-only find 1. Screenshots 2 (both succeeded). Ref-not-found 0; timeouts 0; recovery 0. Console `2 errors, 0 warnings`, unchanged. The worker authored no browser JavaScript; `deny_browser_javascript` is still unverified by this worker. Full detail: `evidence/EXP-137/T10-page1-commit-gate-and-page2.md`.

Gaps before Finish (AC-2): the page-2 view shows no summary of the identifiers or property definitions, so the final pre-Finish capture of project, alias and property rows rests on the page-1 readback and `t10-01`, not on page 2. Property Class is evidenced by empty accessibility cells only, not by a visible screenshot or lookup. Required's mechanism is unresolved. The wizard is left open on page 2 awaiting coordinator review; the single Finish has not been executed.

## Operations (T9, property rows 1 to 4 on wizard page 1)

Designer tab 1 selected after a tab list; fresh untargeted snapshot confirmed the same wizard on page 1 (IDO `FX_LoginUsers`, project `FX_HelloWorldProject01`, alias `fxlogin`, MultiView, GridLeft, Default, Site Split unchecked). Four rows configured through the EXP-134 grid procedure (Name typed, then Data Type cell click, rendered dropdown `String`, Property Length typed, commit by Data Type cell click, Primary Key and Required flags):

| Row | Name | Data Type | SQL type | Length | Primary Key | Required | Property Class |
|---|---|---|---|---|---|---|---|
| 1 | FX_Username | String | nvarchar | 50 | checked | checked | blank |
| 2 | FX_PasswordHash | String | nvarchar | 64 | unchecked | unchecked | blank |
| 3 | FX_Role | String | nvarchar | 50 | unchecked | unchecked | blank |
| 4 | FX_Store | String | nvarchar | 50 | unchecked | unchecked | blank |

Evidence: `evidence/EXP-137/T9-property-rows.md`; `t9-01` (Name, Data Type, SQL type), `t9-02` (lengths, Primary Key), `t9-03` (Required, Label String ID, Default Value). Property Class is blank per the grid rendering; it is not visible in `t9-02` or `t9-03`.

Counts: Add Row 3; Finish 0; Next 0; Back 0; Create Form 0; Save 0; check-in 0; Create Scripts 0; Property Class lookup 0; Escape 0; Tab 0; coordinate clicks 0; runtime records 0; JavaScript authored by the worker 0. Recovery: one Ref-not-found on the row 1 length commit, recovered by one fresh untargeted snapshot and one corrected click (both used). Screenshot timeouts 0.

Qualifications: (1) Required on row 1 became checked after one click on its Primary Key checkbox; whether the product sets Required with Primary Key is not established. (2) Row 4's Data Type editor is still active (value `String`, committed `nvarchar`); the coordinator decides whether to commit it before page 2. Still not done: page 2 with Create Scripts unchecked, the full pre-Finish capture, the single Finish and the Create Form decision.

## Operations (T8, Data Maintenance Wizard page 1 only)

Designer tab 1 selected (tab list read first; select succeeded). Fresh snapshot: Designer live, Form `IdoCollections` (vendor, not edited), Save disabled, footer User scope (name masked; operator evidence cited), no dialog. Route, per EXP-134 T6: Designer `New` → Form Wizard Selection → Category `New Data` → Wizard `Maintenance` → OK. The wizard opened on page 1. Then IDO Name `FX_LoginUsers` (typed, committed), Table Alias `fxlogin` (typed, committed), IDO Project Name `FX_HelloWorldProject01` (Open lookup, one option click, committed; default `amoveMock` replaced). Form Type `MultiView`, Form Layout `GridLeft`, Device Type `Default`, Site Split unchecked were left at the EXP-134 accepted defaults. One element screenshot of the wizard dialog. The wizard is left OPEN on page 1 (Finish, Next, Create Form, Save and check-in not performed; Cancel would discard the typed entries).

Counts: mutating-class UI actions 10 (Designer New 1; Category 2; Wizard 2; OK 1; two typed entries; Project Open 1; Project option 1); fresh untargeted snapshots 3; one scoped snapshot (wasted, one label returned); screenshots 1 (succeeded); Ref-not-found 0; timeouts 0; Tab/Enter/Escape 0; coordinate clicks 0; Finish 0; Create Form 0; Save 0; check-in 0; property rows edited 0; Property Class lookup 0; runtime Save 0; record insert 0; worker-authored JavaScript 0. The worker cannot set `worker_tool_policy.deny_browser_javascript` (T1 deviation 4 still applies). Full detail: `evidence/EXP-137/T8-wizard-page1.md`.

Outstanding before Finish: the four property rows (Name, Data Type, Length, Primary Key and Required on FX_Username), page 2 with Create Scripts verified unchecked, the full pre-Finish configuration capture, then the single Finish.

## Operations (T7, with T5 and T6 reconciliation)

Read-only identity check against operator evidence (`operator-01` and `operator-02` PNGs; treated as operator evidence, not worker observation). One fresh snapshot at task start: IDOs tab selected, header `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Save disabled, no dialog. Screenshot attempt timed out (no file). Scoped snapshot, then FiP click `f1e32` returned `Ref not found`, then one fresh untargeted snapshot, then FiP click succeeded: FiP button now `active` (was not active before). `browser_type` of `FX_LoginUsers` into IDO Name `f1e180` failed: the element is `readonly` (`CollectionNameEdit`), no text entered. Stopped.

Counts: effective mutating-class actions 1 (FiP ON); failed actions with no effect 2 (stale-ref FiP click, read-only type); Tab 0; F4 0; Escape 0; Save 0; Finish 0; Create Form 0; check-in 0; runtime Save 0; record insert 0; coordinate clicks 0; tab selects 0; worker-authored JavaScript 0. Screenshots: 0 written (two timeouts across T6 and T7). Fresh untargeted snapshots: 2 (start and ref-not-found recovery); scoped snapshot 1. Console `3 errors, 2 warnings` (Permissions-policy `unload`, same category as before).

T5 reconciliation from `evidence/EXP-137/harness-audit-T5.md` (no replay): 14 events; 13 completed (Edit ×4 on this record for A1; IDOs tab click; FiP click; screenshot `t5-00`; Read); event 14 `browser_type` failed on stale `f1e325` with no text entered. Audit has no terminal event and a malformed event at line 89, so T5 is recorded as interrupted and incomplete.

Open: the editable location of the IDO exact-name criterion (the detail field is read-only). The IDO absence gate (AC-1 for IDOs) remains open. Full detail: `evidence/EXP-137/T7-exact-name-idos-check.md`.

## Operations (T4)

Read-only Sql Tables case-insensitive check only. Sql Tables panel selected from the Designer strip (not a browser tab select). FiP toggled on; the stale T2 `FX_LoginUsers` criterion in the nested Table Name combobox was replaced, not treated as a result. Lowercase positive control `fx_inventoryitems` typed, Tab, criterion captured before F4, F4 once → one genuine row `FX_InventoryItems` (schema `dbo`). FiP toggled again; lowercase target `fx_loginusers` typed, Tab, criterion captured before F4, F4 once → zero genuine rows (placeholder only). Counts: mutating-class browser actions 9 (panel tab 1, FiP 2, criteria text 2, Tab 2, F4 2); fresh snapshots 8; screenshots 5; browser tab selects 0; coordinate clicks 0; Escape 0; Save 0; Finish 0; Create Form 0; check-in 0; runtime Save 0; session recovery 0. Console `21 errors, 10 warnings`, unchanged. The Sql Tables grid is left in add-mode placeholder focus with no typed content; the next task must re-snapshot before acting. Full detail: `evidence/EXP-137/T4-sql-tables-case-insensitive-check.md`.

## Operations (T3)

Read-only IDO and IDO Projects preflight. IDOs tab selected; FiP enabled (a stale T1 criterion `fx_loginusers` was present and was replaced, not treated as a result); `FX_InventoryItems` positive control with F4 (one genuine row, Project `FX_HelloWorldProject01`); FiP re-entered; `fx_loginusers` target with F4 (zero rows). Toolbar Open → Select Form, filter `Project` (one row `IDO Projects` / `IdoProjects`), OK once; the IDO Projects Form opened read-only; Project Name criterion `FX_HelloWorldProject01` with F4 (one genuine row). Counts: mutating-class browser actions 17 (tab click 1, FiP 2, text entries 4, Tab 4, F4 3, Open 1, row click 1, OK 1); fresh snapshots 12; screenshots 7; browser tab selects 0; coordinate clicks 0; Escape 0; Save 0; Finish 0; Create Form 0; check-in 0; runtime Save 0; session recovery 0. No text typed into the IDO Projects Description field, which held focus after settle. Full detail: `evidence/EXP-137/T3-idos-and-project-preflight.md`.

## Operations (T2)

Read-only Sql Tables collision check only. Nested grid Table Name criteria combobox: `FX_InventoryItems` typed, Tab, F4 (positive control, one genuine dbo row); FiP toolbar button clicked once to re-enter Filter in Place; `FX_LoginUsers` typed into the same combobox, Tab, F4 (target, zero genuine rows, empty placeholder). Counts: mutating-class browser actions 7 (criteria/Tab/FiP/F4; no save); fresh snapshots 6; screenshots 5; tab selects 0; Save 0; Finish 0; Create Form 0; check-in 0; runtime Save 0; session recovery 0. Attributes-panel Table Name combobox was not used. Full detail: `evidence/EXP-137/T2-sql-tables-collision-check.md`.

## Operations (T1)

Read-only browser work only: tab list and select, fresh snapshots, Edit-menu open/close on the Designer (no item selected), Select Form ×2 (OK ×2), an IDOs panel (FiP toggled once; criteria typed ×2; F4 ×2), a Sql Tables panel (caution alert OK ×1; criteria cell activated; text entry rejected), screenshots ×4. Counts: Finish 0; Create Form 0; Save 0; check-in 0; record insert 0; creation 0; metadata unload 0; FormSync 0; session recovery 0; sign-in 0.

## Evidence (under `evidence/EXP-137/`)

- `T1-preflight-gate-summary.md` — gate table, Create Form analysis, action accounting, deviations, unknowns.
- `t1-00-webclient-identity-viewport.png` — Web Client header identity and configuration; IDOs and Sql Tables panels open; `Filter in Place`. Does not prove the Form-list result.
- `t1-03-select-form-fx-loginusers-zero-rows-casefold.png` — Select Form dialog, lowercase `fx_loginusers`, zero rows (Form list).
- `t1-04-idos-fx-loginusers-zero-rows-after-f4.png` — IDOs panel after F4, empty IDO grid, blank detail. Does not show the criterion text.
- `t1-05-sql-tables-panel-blocked-before-criteria.png` — Sql Tables panel in Filter in Place with the Table Name cell as an active combobox editor; no criterion entered; Save disabled.
- `T2-sql-tables-collision-check.md` — T2 gate table, operations, decisive observations, limitations, acceptance mapping.
- `t2-00-sql-tables-pre-criteria-state.png` — pre-criteria Sql Tables state, Filter in Place, Save disabled. No absence result.
- `t2-01-sql-tables-criterion-fx-inventoryitems-pre-f4.png` — positive-control criterion committed before F4.
- `t2-02-sql-tables-fx-inventoryitems-post-f4.png` — genuine dbo row `FX_InventoryItems` with PK and index constraints (positive control).
- `t2-03-sql-tables-criterion-fx-loginusers-pre-f4.png` — target criterion `FX_LoginUsers` committed before F4.
- `t2-04-sql-tables-fx-loginusers-post-f4.png` — only the empty starred placeholder row; zero genuine rows for the target.
- `t2-console-errors-after-sql-tables-check.txt` — console error export; 21 pre-existing permissions-policy errors, unchanged count.
- `T3-idos-and-project-preflight.md` — T3 gate table, operations, decisive observations, limitations, acceptance mapping.
- `t3-01-idos-criterion-fx-inventoryitems-pre-f4.png` — IDO positive-control criterion committed before F4, Filter in Place.
- `t3-02-idos-fx-inventoryitems-post-f4.png` — one genuine IDO row `FX_InventoryItems` (Project `FX_HelloWorldProject01`, alias `fxinv`).
- `t3-03-idos-criterion-fx-loginusers-lowercase-pre-f4.png` — target criterion `fx_loginusers` committed before F4.
- `t3-04-idos-fx-loginusers-lowercase-post-f4.png` — empty IDO grid after F4; zero rows for the target.
- `t3-05-select-form-project-filter.png` — Select Form filtered to one row `IDO Projects` / `IdoProjects`.
- `t3-06-idoprojects-criterion-fx-helloworldproject01-pre-f4.png` — IDO Projects criterion `FX_HelloWorldProject01` committed before F4.
- `t3-07-idoprojects-fx-helloworldproject01-post-f4.png` — one genuine IDO Projects row `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`.

- `T4-sql-tables-case-insensitive-check.md` — T4 gate table, operations, decisive observations, limitations, acceptance mapping.
- `t4-00-sql-tables-pre-criteria-state.png` — Sql Tables panel, identity, empty placeholder row, no criteria row, Save greyed. No absence result.
- `t4-01-sql-tables-criterion-fx-inventoryitems-lowercase-pre-f4.png` — lowercase positive-control criterion committed before F4.
- `t4-02-sql-tables-fx-inventoryitems-lowercase-post-f4.png` — one genuine row `FX_InventoryItems` (schema `dbo`) with PK and index constraints; proves lowercase criterion matches an uppercase name in this view.
- `t4-03-sql-tables-criterion-fx-loginusers-lowercase-pre-f4.png` — lowercase target criterion `fx_loginusers` committed before F4.
- `t4-04-sql-tables-fx-loginusers-lowercase-post-f4.png` — only the empty starred placeholder row; zero genuine rows for the target.
- `T10-page1-commit-gate-and-page2.md` — T10 page-1 commit gate, page-2 inspection, action accounting and AC-2 gaps.
- `t10-01-page1-after-row4-blur.png` — wizard dialog, page 1, after the row-4 blur. Shows identifiers, four names, Required on row 1 only, blank Label String ID and Default Value. Does not show Data Type, length, Primary Key or Property Class (scrolled off).
- `t10-02-page2-before-finish.png` — wizard dialog, page 2. Shows Create Scripts unchecked, the Finish instruction, empty disabled preview area, Finish enabled, Next disabled. Does not show identifiers or property definitions.
- `T14-sql-tables-sql-columns-readback.md` — T14 read-only Sql Tables row and Sql Columns definitions for FX_LoginUsers, verification matrix, deviations, counts.
- `t14-00-sql-tables-after-fip-entry-pre-criterion.png` — first FiP state: 200 unfiltered rows, no criteria row. Does not prove any criterion result.
- `t14-01-sql-tables-after-second-fip-click.png` — FiP on, blank criteria row. Does not show a criterion.
- `t14-02-sql-tables-criterion-fx-loginusers-pre-f4.png` — criterion `FX_LoginUsers` committed before F4.
- `t14-03-sql-tables-fx-loginusers-post-f4.png` — genuine row `FX_LoginUsers` / `dbo`, PK and index constraints. Does not prove database state.
- `t14-04-sql-columns-fx-loginusers-opened-from-columns-button.png` — Sql Columns for FX_LoginUsers, 11 rows, FX_Username detail (nvarchar 50, PK, not nullable, key sequence 1).
- `t14-05-sql-columns-fx-passwordhash-row-selected.png` — FX_PasswordHash nvarchar 64, nullable, not PK.
- `t14-06-sql-columns-fx-role-row-selected.png` — FX_Role nvarchar 50, nullable, not PK.
- `t14-07-sql-columns-fx-store-row-selected.png` — FX_Store nvarchar 50, nullable, not PK.
- `T13-idos-single-checkin.md` — T13 single Check In of `FX_LoginUsers`, notice OK, settled checked-in state, counts and limitations.
- `t13-00-pre-checkin-identity-checkout-state.png` — pre-check-in identity, Revision 1, checked out, Check In enabled. Does not show the Tables row.
- `t13-01-post-checkin-immediate-state.png` — immediately after Check In; the notice is open (see t13-02).
- `t13-02-post-checkin-notice-dialog-before-ok.png` — informational source-control notice (one OK); background Revision 2, Locked By empty, Check Out enabled. Does not prove a compilation result.
- `t13-03-post-checkin-settled-after-notice-ok.png` — settled checked-in state after OK; Table `FX_LoginUsers` / `fxlogin`; no dialog. Does not prove the database state.
- `T12-post-creation-idos-verification.md` — T12 IDO identity, checkout state (checked out, not changed), property readback, console note, counts and limitations.
- `t12-03-idos-criterion-fx-loginusers-pre-f4.png` — `FX_LoginUsers` criterion committed before F4, FiP on. Does not show a result.
- `t12-04-idos-fx-loginusers-post-f4.png` — one row `FX_LoginUsers`; Project `FX_HelloWorldProject01`; Table `FX_LoginUsers` / `fxlogin`; Check In enabled, Undo Check Out disabled (checked out). Does not prove the physical SQL table.
- `t12-05-idos-fx-loginusers-properties-subtab-readonly.png` — Properties sub-tab: four configured properties (names, String types, 50/64/50/50, Key Seq 1 and Required on FX_Username, blank Property Class) plus wizard default audit/system properties.
- `t12-06-idos-fx-loginusers-properties-grid-scoped-snapshot.md` — accessibility rows for the 11 property rows rendered.
- `t12-00`, `t12-01`, `t12-02`, `t12-07` — pre-filter state, unfiltered IDO grid snapshot (no target row, not absence evidence), FiP-on state, console export (3 vendor permissions-policy errors).
- `T11-finish-and-create-form-no.md` — T11 pre-Finish guard, single Finish, Create Form No, Close, counts and unresolved items.
- `t11-01-create-form-prompt-before-response.png` — Create Form alertdialog before response. Shows `Do you want to create a form for FX_LoginUsers?`, Yes (focused) and No. Does not show the created objects or the outcome of No.
- `t11-02-wizard-settled-after-no.png` — wizard after No. Shows `Table and IDO created.`, Create Scripts unchecked, Back/Next/Finish disabled, Close enabled. Does not name the table or IDO and does not prove them by readback.

## Deviations and blockers (T1)

1. Two browser actions (type and Tab) were issued in one block (parallel-action rule). Both returned in order; disclosed.
2. The IDO criteria fill after F4 failed on a read-only input (`CollectionNameEdit`); no text was entered.
3. The Sql Tables grid's Table Name criteria cell is a combobox editor; the text-entry attempt failed. Recovery allowance was exhausted, so no retry. The Attributes Table Name combobox was not used.
4. The worker cannot set `worker_tool_policy.deny_browser_javascript` through any tool in this session; the operator should verify the flag.

## Next (separately authorised, not done)

- *(Superseded by A1)* Operator decision on AC-4 — resolved by the operator's A1 route: Create Form No, and the Form created through the EXP-135 Form Wizard route.
- Sql Tables absence gate: completed in T4 (lowercase, with positive control). IDOs strict pairing (lowercase positive control with pre-F4 capture in the same pass) is optional and not run.
- No wizard Finish until the configuration gate (AC-2), absence gates (AC-1) and the Create Form decision are all resolved.

## Status

Not accepted. Not replay-verified. Operator review required. T24 final read-only audit recorded (see "Final audit (T24)"); proposed disposition is qualified partial support, pending operator decision. No declaration of acceptance, rejection, blocking or completion is made.
