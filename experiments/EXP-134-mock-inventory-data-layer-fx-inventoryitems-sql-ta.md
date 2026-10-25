# EXP-134 — Mock Inventory Data Layer: FX_InventoryItems SQL Table and IDO

**Current status (after T16, run R-20261026-031627-MXfT, cycle 22): T16 (final cumulative audit and acceptance matrix; documentation only) COMPLETE. Matrix: AC-1, AC-2 and AC-4 to AC-10 passed; AC-3 pending operator disposition (pre-Finish table-name visibility, retained by the operator; Required flag on FX_Item only, an operator-approved deviation from EXP-130). No check failed. The controller audits (`evidence/EXP-134/harness-audit-T1.md` to `T15.md`) agree with the worker counts: one Finish, one Create Form "No", one wizard Close, one Check In, no Save. EXP-134 remains pending operator disposition; no unconditional acceptance is declared, and EXP-135 is not started. No browser action, Mongoose mutation or git command occurred in T16. See "T16" below and `evidence/EXP-134/T16-checkpoint.md`.**

Prior status (after T15, run R-20261026-031627-MXfT, cycle 21; superseded by T16): T15 (paired close/reopen persistence check) COMPLETE. **AC-8 PASSED at UI level, qualified:** the IDOs and Sql Tables maintenance Forms were each closed once through their native Close Panel controls with no unsaved-change prompt, reopened through Open → Select Form, and each returned exactly one FX_InventoryItems row. The IDO (Project `FX_HelloWorldProject01`, Revision Num 2, Locked By blank, Check Out enabled, Tables row `FX_InventoryItems` / `fxinv`) and the Sql Tables row (`dbo`, `PK_FX_InventoryItems`, `IX_FX_InventoryItems_RowPointer`) match the pre-close baseline. Sql Columns was re-read after the reopen (13 columns; lengths; Decimal Position 2 on FX_QuantityOnHand and FX_ReorderLevel). No check-in, Finish, Save or record action occurred. NOT done: the AC-10 final audit and acceptance matrix (T16). The recurring Yggdrasil 401 and token-expiry console lines remain unresolved; no session modal appeared. See "T15" below and `evidence/EXP-134/T15-checkpoint.md`.**

Prior status (after T14, run R-20261026-031627-MXfT, cycle 19; superseded by T15): T14 (one conditional IDO check-in) COMPLETE. The IDO `FX_InventoryItems` was checked out to `anton.ramos@3mworks.com.ph`; ONE Check In was performed; its informational source-control notice was dismissed ONCE. Post-check-in readback: Revision Num 1 to 2, Locked By empty, Check Out enabled, Undo Check Out disabled, status `Check Out (IDOs 1 of 1)`. **AC-7 PASSED at UI level, qualified:** source-control integration is disabled, so only the Mongoose checkout was released. NOT done: AC-8 paired close/reopen (reserved for T15) and the AC-10 final audit. See "T14" below and `evidence/EXP-134/T14-checkpoint.md`.**

Prior status (after T13, run R-20261026-031627-MXfT, cycle 18; superseded by T14): T13 (read-only Sql Tables and Sql Columns readback) COMPLETE. `dbo.FX_InventoryItems` is observed in Sql Tables (one persisted row, Schema `dbo`, PK constraint `PK_FX_InventoryItems` on FX_Item) and in Sql Columns (13 columns: the six business columns read back as nvarchar(50), nvarchar(255), nvarchar(100), decimal(12,2) with Length 12 and Decimal Position 2, decimal(12,2), nvarchar(100); FX_Item is the Primary Key with Key Sequence 1 and not nullable; seven framework columns and one system index inventoried separately). **AC-6 SUPPORTED** at Mongoose SQL-metadata UI level (qualified: no independent database query). No Finish, check-in, Save or column edit occurred. The IDO remains CHECKED OUT to `anton.ramos@3mworks.com.ph` (state read at T13 start; no action). NOT done: AC-7 check-in decision and AC-8 paired close/reopen (reserved). See "T13" below and `evidence/EXP-134/T13-checkpoint.md`.**

Prior status (after T12, run R-20261026-031627-MXfT, cycle 17; superseded by T13): T12 (read-only IDO readback) COMPLETE. The IDO `FX_InventoryItems` exists under `FX_HelloWorldProject01` (one row, IDOs 1 of 1), with base table `FX_InventoryItems`, alias `fxinv` and six FX_ business properties (names, types, lengths, FX_Item key and Required) read back at UI level. The IDO is CHECKED OUT to `anton.ramos@3mworks.com.ph` (Check In enabled); NO check-in was performed. NOT verified: `dbo.FX_InventoryItems` physical SQL table and columns (AC-6), Decimal precision at IDO level, the checkout decision (AC-7) and two-form close/reopen recovery (AC-8). Finish was NOT repeated.** See "T12" below and `evidence/EXP-134/T12-checkpoint.md`.

Prior status (after T11, run R-20261026-031627-MXfT, cycle 16; superseded by T12): T11 (single wizard Finish) COMPLETE. Finish was activated ONCE; the optional Create Form prompt (`Do you want to create a form for FX_InventoryItems?`) was answered No ONCE; the native wizard message `Table and IDO created.` was observed; the wizard was closed ONCE by its native Close. AC-4 SUPPORTED (wizard-completion level). NOT verified: the physical table `dbo.FX_InventoryItems`, the persisted IDO properties, the check-in state and close/reopen recovery (AC-5 to AC-8 pending a separate post-creation task).** See "T11" below and `evidence/EXP-134/T11-checkpoint.md`.

Prior status (after T10, run R-20261026-031627-MXfT, cycle 13; superseded by T11): T10 (read-only pre-Finish verification) COMPLETE, AC-3 QUALIFIED. The wizard was OPEN on page 2 (Create Scripts page) and NOT finished. Row 6 Data Type `String` is committed and its editor is closed. All six rows were re-read: names, types, lengths, precision 2 on rows 4 and 5, Primary Key and Required on FX_Item only, Property Class and Label String ID blank. One Next moved the wizard to page 2, where Create Scripts is visibly unchecked and Finish is enabled but NOT pressed. The physical table name `dbo.FX_InventoryItems` is NOT displayed anywhere before Finish, so it stays qualified. See "T10" below and `evidence/EXP-134/T10-checkpoint.md`.

Prior status (after T9, run R-20261026-031627-MXfT, cycle 12): T9 (property rows 4 to 6) COMPLETE, with a qualified pre-Finish AC-3. All six business-property rows are configured and read back in the still-open wizard on page 1. Row 4 Decimal Precision `2` is now committed (static text, verified in snapshot and screenshot). Rows 5 (`FX_ReorderLevel`, Decimal 12, precision 2) and 6 (`FX_Location`, String 100) were added once each. Property Class and Label String ID are blank on all six rows. **Create Scripts (page 2) and the physical table name are NOT verified; page 2 was not reached. Finish, Next, Back, Cancel, Save, Create Form, check-in and Create Scripts were NOT touched. Wizard still OPEN; NOT finished.** See "T9" below and `evidence/EXP-134/T9-checkpoint.md`.

Prior status (after T8, run R-20261026-031627-MXfT, cycle 10): T8 (property rows 2 to 4) STOPPED at a second stale-ref event after the per-task recovery allowance was used. Rows 1 to 4 configured; row 4 precision `2` uncommitted at stop. See "T8" below.

**Prior status (after T6, run R-20261026-031627-MXfT, cycle 7): T6 (Data Maintenance Wizard opened once; page-1 identifiers entered; NOT finished) COMPLETE.** The wizard was opened from the tab-0 Designer (toolbar New → Form Wizard Selection, Category `NewData`, Wizard `Maintenance`, OK once). Page 1 now holds IDO Name `FX_InventoryItems`, IDO Project Name `FX_HelloWorldProject01` (replacing the wizard default `amoveMock`), and Table Alias `fxinv`; all three are non-persisting until Finish. The six property rows, Create Scripts, Next, Finish, Save and check-in were NOT touched. The wizard is left open on page 1 for T7. The physical SQL table name is not shown before Finish and must be verified afterwards. See "T6" below and `evidence/EXP-134/T6-checkpoint.md`.

**Prior status (after T5, run R-20261026-031627-MXfT, cycle 6): T5 (live User-scope Designer identification) COMPLETE.** Tab 3 (Web Client, `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) was used for the split control (`Open designer in a new window`, clicked once). Tab 0 (blank Designer, User footer, no error, no Form) met the step (3) criteria on inspection, but its Edit-menu probe was **skipped in error**; the split-control launch (step 4) was performed instead. Tab 1 was ineligible (FX_LoginPortal and FX_BridgeTest loaded). The launch appears to have navigated the tab-0 window (tab count stayed at four), so the original blank tab-0 state is gone. After the launch the tab-0 Designer shows footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, no server-event error, and a normal Edit menu (opened and closed by Edit clicks, no item selected). **Live User-scope Designer: tab 0 (the relaunched state), UI-level liveness only.** The loaded Form is the vendor IdoProjects Form. No scope dialog appeared. The wizard was NOT opened; no Finish, Save, New, check-in or creation occurred. See "T5" below and `evidence/EXP-134/T5-checkpoint.md`.

**Prior status (after T4, run R-20261026-031627-MXfT, cycle 4): T4 (read-only Web Client prerequisite queries) COMPLETE.** In the recovered Web Client (`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, `t4-01`), the IDOs absence gate (criterion `FX_InventoryItems` → F4 → zero rows, `t4-02`/`t4-03`) and the Sql Tables absence gate (Table Name criterion → Tab → F4 → blue-star placeholder only, `t4-05`/`t4-06`) are **supported, qualified** (no positive control authorised). The IDO Projects gate (`FX_HelloWorldProject01`) returned one exact row, Access As `G6R` (`t4-09`). **Designer scope and Designer liveness were NOT checked in T4 and remain pending**, so the wizard is still NOT authorised. No wizard, Finish, Save, New, check-in or creation occurred. See "T4" below and `evidence/EXP-134/T4-checkpoint.md`.

**Prior status (after T3, run R-20261026-031627-MXfT, cycle 3): T3 (read-only gate attempt) STOPPED at Designer scope ambiguity; NO gate result exists for this session.** The Web Client identity bar reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t3-01`, portal tab 3), with no Form open and no modal. The live Designer from T2 is not identifiable in the current tab list. The only Designer showing User scope (tab 2) is the stale `FX_LoginPortal` Designer with a server-event error dialog still open. Per the stop rule, the IDOs, Sql Tables and IDO Projects gates were NOT run. No wizard, Finish, Save, check-in or creation occurred. See "T3" below and `evidence/EXP-134/T3-checkpoint.md`.

**Prior status (after T2, run R-20261026-031627-MXfT, cycle 2): T2 (bounded session recovery and live Designer verification) COMPLETE.** The Session Expired modal was dismissed, the authorised portal navigation was used once, and the Mongoose app was reopened from the portal without a sign-in form. The identity bar reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. A new Designer opened from the split control and shows `ScopeType: User`. Its Edit menu responds without the server-event error. **The absence gates and the project gate were NOT re-run in T2; they are reserved for T3.** No wizard, Finish, creation, Save or check-in occurred. See "T2" below.

**Prior status (after T1, run R-20261026-031627-MXfT, cycle 0): T1 (read-only preflight and absence gates) PARTIALLY COMPLETE, BLOCKED.** Identity, DEFAULT configuration, Designer User scope, the existing project `FX_HelloWorldProject01`, and the exact-name absence results for `FX_InventoryItems` in the IDOs and Sql Tables Forms were observed. However, the inherited Designer returned the stale server-event error on its Edit menu. The documented split-button recovery then raised a **Session Expired** modal, and its OK click timed out (environment suspected). **The session is NOT re-established.** No wizard was opened and no object was created, saved, checked in or checked out. **The wizard mutation is NOT authorised to proceed until a live session, a live Designer and a fresh preflight are obtained in a later bounded task.**

Date: 2026-10-26 (system date 2026-10-26; Mongoose footer 2026.10.03).
Run: `R-20261026-031627-MXfT` · task T1 · cycle 0 · worker session `d0270975-f00b-4ab0-bfd2-4c698457fc2d` · task_message_id `fdf914ed-b0df-4e8c-b259-a8dceff78f1e`.
Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10): the table, IDO and alias are tenant-wide artifacts, not User-scoped Form definitions. Editing scope User for Forms.
Brief commits: `fa04d02` (draft), `f0c499a` (approved brief).

## Objective (operator-approved, summarised)

Using the supported Data Maintenance Wizard, create one SQL table `dbo.FX_InventoryItems` and one IDO `FX_InventoryItems` in existing project `FX_HelloWorldProject01`, alias `fxinv`, with six business properties:

| # | Property | Data Type | Length | Key / Required |
|---|---|---|---|---|
| 1 | FX_Item | String | 50 | Primary Key, Required |
| 2 | FX_Description | String | 255 | — |
| 3 | FX_Warehouse | String | 100 | — |
| 4 | FX_QuantityOnHand | Decimal | 12, precision 2 | — |
| 5 | FX_ReorderLevel | Decimal | 12, precision 2 | — |
| 6 | FX_Location | String | 100 | — |

Reference for the six properties: `evidence/EXP-130/MockInventory-ido-definition.txt` (the operator-specified FX_ names and types take precedence). Property Class blank on all six; Label String ID blank; Create Scripts unchecked; the optional Create Form prompt declined. One Finish, check-in only if the new IDO remains checked out, then ordinary close and reopen recovery.

## Sources read before any browser action

- `AGENTS.md` (full): LEARNING MODE; FX_ scope extension (tenant-wide, record every object); Mock reproduction scope extension (read-only accounts; check the signed-in account before any mutation); safety; browser automation and recovery; evidence rules.
- `experiments/EXP-049-hello-world-part-2-...md`: wizard route (Designer New → Form Wizard Selection → New Data / Maintenance → OK); Table Name is derived from the IDO name (read-only, Site Split unchecked); IDOs and Sql Tables Form gate pattern; the Sql Tables zero-row add-mode placeholder; T1-19 note that a placeholder alone "is not an absence result on its own" (superseded there by a positive control in T5).
- `experiments/EXP-071-R2-...md`: IDOs and Sql Tables open already in Filter in Place; the IDO Name criterion accepts typing directly; the Table Name criterion needs one click to become active; Escape in the Property Class lookup committed the highlighted class (never open that lookup); the Tab → F4 sequence; the wizard header identity check.
- `experiments/EXP-039-...md`: IDO Projects exact query; Select Form filter commit on Tab; the project's Access As `G6R`.
- `experiments/EXP-040-...md`: the Sql Tables Attributes **Table Name combobox edits the displayed record** (T10 incident); query only through the grid's Table Name criteria cell; Designer scope dialog observations; the Designer split button (`mgtoolbarbutton-1126`, "Open designer in a new window") opens a fresh Designer tab.
- `evidence/EXP-130/MockInventory-ido-definition.txt`: reference only; the MockInventory values were read but **not** used to create anything.
- `recipes/session/session-expiry-and-stale-designer.md`: the stale-Designer symptom (Edit menu → server-event error; answer OK once, record, stop for the coordinator) and the session-expiry procedure.

## Preflight gates (T1)

| Gate | Result | Evidence |
|---|---|---|
| Web Client account | **Observed:** identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t1-01-webclient-identity-config-initial.png` (header readable) |
| Designer editing scope | **Observed (Designer tab 0):** footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Form Version "User version for user anton.ramos@3mworks.com.ph"; Save disabled. The Designer's selected Form is the existing `FX_LoginPortal` (not modified) | `t1-02-designer-scope-user-footer.png` |
| Designer liveness (stale check) | **FAILED.** The Designer tab 0 Edit menu returned `The server event processing returned an error. If this persists, contact your system administrator.` (alertdialog "Error", OK only). Read by accessibility `find`; no screenshot was taken of that state. The OK on that error was pressed once. | find output (this record) |
| Existing project `FX_HelloWorldProject01` | **Observed:** one IDO Projects row, Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; status `Description (IDO Projects 1 of 1)`; Save disabled | `t1-09-...before-criterion.png`, `t1-10-...settled-after-F4.png` |
| Absence gate 1 — IDOs `FX_InventoryItems` | **Observed zero rows.** Criterion visible before F4; after one F4 the grid was empty (no data row, no placeholder); `find` for `FX_InventoryItems` in the Form returned no match; status `Filter in Place`; Save disabled | `t1-03` (fresh open, FiP, blank criteria), `t1-04` (criterion before F4), `t1-05` (settled) |
| Absence gate 2 — Sql Tables `dbo.FX_InventoryItems` | **Observed zero data rows.** Criterion typed in the grid Table Name criteria cell (not the Attributes combobox); Tab; one F4; result = one blue-star add-mode placeholder row (blank Table Name and Schema, required asterisks); status `Schema (SQL Tables 1 of 1)`; Save disabled | `t1-06` (fresh open), `t1-07` (criterion before F4), `t1-08` (settled) |
| Positive controls in this session | **Not re-run in this session** (see Limits). Carried over: EXP-049 T5 (`FX_HelloWorld01` SQL → one record; `FX_Items` → placeholder) and EXP-040 T1 (IDOs `ABDataServices` → one row) | — |
| Session usable | **Ended during the Designer recovery** (see Event below) | `t1-12`, `t1-13` |

**Gate verdict (T1):** the identity, configuration, User scope and project gates were observed before the session ended. The absence gates returned settled zero-row results. **But the Designer liveness gate FAILED**, and the recovery attempt ended in an expired session. Therefore the wizard task is **not ready**. No gate was overridden.

## Event: Designer recovery → Session Expired (T1)

1. Designer tab 0 Edit menu → stale server-event error (above). OK once (in-page error dialog).
2. Web Client tab: hover over the Designer toolbar split button (`f1e39`) showed the tooltip **"Open designer in a new window"** (`t1-11`) — confirming the documented split control.
3. One click on that split control (the documented recovery route, once). **No new Designer tab appeared** in the tab list. A **"Session Expired"** alertdialog appeared on the Web Client tab: `Your session has expired.` with OK (`t1-12`).
4. Per the standing session-expiry authorization: the in-progress step (the Designer recovery) was stopped. Nothing unsaved of consequence: Save was disabled on the IDOs, Sql Tables and IDO Projects surfaces, and the only unsaved row is the blank Sql Tables add-mode placeholder, which is **treated as lost**.
5. Click on the modal's **OK once** → **Timed out** after 5 s: `waiting for locator ... attempting click action ... waiting for element to be visible, enabled and stable` (locator resolved to `button-1013`). A fresh snapshot (recovery snapshot 1 of 1) showed the **Session Expired alertdialog still open** (`f1e770`, OK `f1e629`) with the Mongoose frame still dimmed. The OK click is **not confirmed to have executed**; per the brief it was not repeated.
6. One corrected inspection: element screenshot of the alertdialog (`t1-13`). The image shows the page dimmed behind the modal (the modal's text is not legible in the captured image).
7. Recovery budget then exhausted. **The navigation step (portal URL) and the sign-in were NOT performed**, because the authorised sequence requires OK first and OK did not complete. No credential was typed or read.

**Not re-established:** the session. The operator or a later bounded task must dismiss the modal (OK, at most once per task under the standing authorisation) or re-authenticate through the procedure before any further Mongoose action.

## Operation counts (T1)

| Operation | Count |
|---|---|
| Finish / wizard launch / wizard page actions | **0 / 0 / 0** |
| Create Form response (Yes / No) | **0 / 0** |
| Save / New / Delete / Refresh | **0 / 0 / 0 / 0** (Designer toolbar New not clicked) |
| Check-in / check-out / Undo Check Out | **0 / 0 / 0** |
| Property Class lookup opened | **0** |
| Metadata unload / FormSync / deployment / generated script | **0 / 0 / 0 / 0** |
| Records created, edited, deleted; objects created | **0** |
| Form opens (Select Form OK) | **3** (IDOs, Sql Tables, IDO Projects) |
| Select Form filter entries | 3 (`IdoCollections`, `SqlTables`, `IdoProjects`) |
| Criteria entries + F4 (gate/readback queries) | **3** (IDOs target 1; Sql Tables target 1; IDO Projects project 1) — no positive control in this session |
| Filter in Place toolbar clicks | **0** (all forms opened in FiP mode) |
| Sql Tables caution alert OK | 1 (informational: "Please be very careful using these forms…") |
| In-page error dialogs answered | 1 (Designer stale server-event error, OK) |
| Session Expired modal OK clicks | **1 attempted, timed out, not confirmed executed** |
| Browser recovery | **1 fresh snapshot + 1 corrected inspection** (both used); timeouts 2 (OK click; full-page screenshot) |
| Designer split button | hover 1; click 1 (no new tab; session expired) |
| Browser JavaScript / evaluate / run-code / direct SQL / internal APIs | **0** worker-authored (tool wrappers only) |
| Credentials typed or read | **0** |
| Tab selections (succeeded) | 5 (tab list before selection each time) |

## Acceptance matrix (T1 scope only)

| AC | T1 status | Evidence | Limits |
|---|---|---|---|
| **AC-1** Preflight identity, DEFAULT config, Designer User scope, FX_HelloWorldProject01 | **PARTIAL.** Identity, config, User scope and project observed. **The inherited Designer is stale** (Edit → server-event error), so the Designer is not a live surface for the wizard. No mutation occurred. | `t1-01`, `t1-02`, `t1-09`, `t1-10`; find (stale error) | Designer liveness not established. Site Developer capability not verified. |
| **AC-2** Separate IDOs and Sql Tables exact-name queries, settled zero rows, criterion captured | **QUALIFIED.** IDOs: zero rows with criterion before F4 (`t1-04`, `t1-05`; `find` shows no match). Sql Tables: criterion before F4 (`t1-07`), settled to a single add-mode placeholder, i.e. zero data rows (`t1-08`). | `t1-03`–`t1-08` | No positive control in this session (FiP re-entry would be a clicked FiP toggle, which the brief excludes). The Sql Tables result rests on the placeholder pattern (the EXP-049 T1-19 caveat applies). Carried-over positive controls only. A session expiry followed the gates, so the state after it is not a fresh gate. |
| AC-3 – AC-10 | **Not evaluated** (no wizard, no creation, no check-in, no close/reopen recovery). | — | — |
| AC-9 cumulative audit (T1 portion) | **PASS for T1** (no Finish, no duplicate creation, no check-in, no inventory records, no editor Form, no metadata action, no non-FX_ change). | Counts above | Session recovery deviation enumerated above. |

## Observations (T1)

- The Web Client header and the Designer footer both identify the operator's account and the DEFAULT configuration, and Designer scope is User.
- Both maintenance Forms open in Filter in Place mode with a blank criteria row, so the gate queries need no FiP click.
- The Sql Tables Attributes **Table Name combobox mirrors the grid criterion** while in FiP mode (it showed `FX_InventoryItems` in `t1-07`). It was not edited independently; no change prompt appeared and Save stayed disabled. The grid criteria cell was used as the query field, as EXP-040 T10 requires.
- The Designer Edit menu is a reliable stale-session indicator in this environment: it returned the server-event error before the expiry modal appeared.
- The Designer split-button click on the Web Client did not open a new Designer tab; the session expiry appeared instead. Whether the expiry caused the failed split-button action or the split action caused the expiry is not established.

## Unresolved items and blockers

1. **BLOCKER — session not re-established.** The Session Expired modal (Web Client tab) remains open. Its OK click timed out (`waiting for element to be visible, enabled and stable`). Next permitted action (a separate bounded task): read the modal state once; if still open, click its OK once; if no sign-in form appears in that tab, navigate that tab once to the portal URL and sign in with the Playwright placeholders only (`SECRET_MONGOOSE_USERNAME`, `SECRET_MONGOOSE_PASSWORD`, `SECRET_MONGOOSE_TENANT` only if a tenant field appears), keeping configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
2. **BLOCKER — Designer stale.** The inherited Designer tab 0 (FX_LoginPortal) returns the server-event error. A fresh Designer must be obtained after re-login, through the split control, and must show Identify Your Editing Scope → User before any wizard action. Designer tab 1 (`designer/default.aspx`) was not inspected.
3. **Positive controls** for the two absence gates were not re-run in this session. Required before creation only if the coordinator wants session-local control evidence; a fresh Form open (no FiP click) is the route.
4. **Gates must be repeated** after re-login: both absence gates and the project gate must be re-observed in the new session before any mutation (the brief requires exact-name absence immediately before the wizard).
5. Left open in the Web Client: IDOs, Sql Tables and IDO Projects Forms (unsaved blank placeholder on Sql Tables, Save disabled), the IDO Projects Description field focused with its text selected (no typing), and the Session Expired modal. Tab 0 Designer (stale) and tab 1 untouched.

## T2 — bounded session recovery and live Designer (run R-20261026-031627-MXfT, cycle 2)

Worker session `3d4d8de6-36ed-4e0e-9c78-26dd5d7345dd` · task_message_id `553d1b56-253f-41ae-adc0-efb1a6327910`. Full detail: `evidence/EXP-134/T2-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Session Expired modal, OK click (once) | **Succeeded** (no timeout). Modal closed; no sign-in form in tab 2; no Form open | `t2-01` |
| Authorised portal navigation (once) | Preceded by a `beforeunload` "leave page" dialog, accepted once. Portal loaded authenticated (no CloudIdentities sign-in form; no credential typed) | checkpoint |
| Portal banner (DistributionIFSContactUs) | Dismissed once with its × (not acted on) | checkpoint |
| Open Mongoose OS from the portal | Via the navigation menu search `Mongoose` → `Mongoose` link. Web Client loaded | `t2-02` |
| Identity and configuration | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no prompt | `t2-02` |
| Designer split control | Tooltip "Open designer in a new window" over the icon at x≈725 (a hover on the wrench at x≈691 showed "Runtime Builder..." — a wrong-control hover, no click). One click on the split control → new Designer tab (index 3); **no Session Expired** after this click | `t2-03` (wrong hover), `t2-04` (split tooltip) |
| Designer scope dialog | Identify Your Editing Scope: Scope = User, User = `anton.ramos@3mworks.com.ph`; OK once | `t2-05` |
| Designer live and scope | Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Toolbox and Properties present; no Form loaded | `t2-05` |
| Designer non-mutating probe | Edit menu opened with its item list; no server-event error. Closed by a second click on Edit (Escape did not close it); no item selected | `t2-06`, `t2-07` |

**T2 verdict:** session re-established and a live Designer obtained with User scope, as the T2 instruction defined. **Not** done in T2: the two absence gates and the `FX_HelloWorldProject01` gate (reserved for T3). The T1 causes (stale Designer, expiry, OK timeout) remain **unresolved**; the T2 split-button launch did not trigger an expiry.

**T2 counts:** Finish / wizard / Save / New / Delete / check-in / Create Form / Form open / Property Class lookup / metadata / FormSync / script / record actions: **0**. Session Expired OK: 1 (succeeded). Portal navigation: 1. Designer split click: 1. Designer scope OK: 1. Browser recovery allowance used: 0 (no Ref error, no timeout).

**Evidence note:** the filename `t2-07` was reused. The first capture after Escape (menu still open) was overwritten by the post-toggle capture. The Escape non-effect is recorded in text only.

## Evidence (under `evidence/EXP-134/`)

| File | Shows | Does not prove |
|---|---|---|
| `t1-01-webclient-identity-config-initial.png` | Web Client Explorer, identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, no Form open | Designer scope; server session state |
| `t1-02-designer-scope-user-footer.png` | Designer tab 0 (FX_LoginPortal design view); footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | Designer liveness (the stale error is not in this image) |
| `t1-03-idos-fresh-open-before-criterion.png` | IDOs Form, FiP mode, blank criteria, status `Filter in Place` | Query result |
| `t1-04-idos-FX_InventoryItems-criterion-before-F4.png` | IDO Name criterion `FX_InventoryItems`, echo row, FiP status | F4 result |
| `t1-05-idos-FX_InventoryItems-settled-after-F4.png` | IDOs grid empty after F4; detail blank; no dialog | Database absence; query completeness |
| `t1-06-sqltables-fresh-open-before-criterion.png` | Sql Tables FiP blank criteria row; Attributes panel blank; caution already accepted | — |
| `t1-07-sqltables-FX_InventoryItems-criterion-before-F4.png` | Grid Table Name criterion `FX_InventoryItems` before F4 (Attributes mirror shows the same text; Save disabled) | That the mirror is not an edit (no prompt observed; Save disabled) |
| `t1-08-sqltables-FX_InventoryItems-settled-after-F4.png` | One blue-star add-mode placeholder, empty Table Name/Schema; status `Schema (SQL Tables 1 of 1)`; Save disabled | That `dbo.FX_InventoryItems` is absent in the database; that the placeholder is not a saved row |
| `t1-09-idoprojects-fresh-open-before-criterion.png` | IDO Projects FiP mode, blank Project Name criterion | — |
| `t1-10-idoprojects-FX_HelloWorldProject01-settled-after-F4.png` | One row `FX_HelloWorldProject01`, Description, Access As `G6R`; status `Description (IDO Projects 1 of 1)` | Database-level existence; cross-session persistence |
| `t1-11-webclient-designer-split-button-hover-tooltip.png` | Tooltip "Open designer in a new window" on the split control | That the click would open a Designer |
| `t1-12-after-designer-split-button-click.png` | Session Expired modal (text "Your session has expired.") over the Web Client | Its cause |
| `t1-13-session-expired-modal-state.png` | Element capture of the alertdialog area: dimmed page; modal text not legible | That the modal is closed (it is still present per the snapshot) |

Tool-written browser files under `evidence/playwright/` (snapshot YAML and console logs for this run) are tool output, not worker-authored.

## Knowledge state

| Finding | State |
|---|---|
| IDOs exact query `FX_InventoryItems`: criterion visible before F4 and empty grid after F4 | **observed** (one run, same session; no positive control this session) |
| Sql Tables exact query `FX_InventoryItems` in the grid criterion: placeholder after F4 | **observed** (one run; placeholder = zero-row pattern, carried by EXP-049/EXP-071-R2) |
| IDO Projects exact query `FX_HelloWorldProject01`: one row | **observed** (one run) |
| Designer footer scope `User` for `anton.ramos@3mworks.com.ph` | **observed** (Designer tab 0) |
| Designer Edit menu returns the server-event error when stale; this preceded the session expiry | **observed** (one run); causal link **unresolved** |
| Designer split control tooltip "Open designer in a new window" | **observed** |
| Designer split control click → Session Expired (no new Designer tab) | **observed** (one run); cause **unresolved** |
| Session Expired OK click timed out (environment) and was not confirmed | **observed**; cause **unresolved** |
| Session Expired OK click succeeded on the T2 attempt (it timed out in T1); portal re-opened Mongoose without a sign-in form | **observed** (one run); cause of the T1 timeout **unresolved** |
| Designer split control launch in the recovered session → live Designer, User scope, Edit menu without server-event error | **observed** (one run) |
| Escape does not dismiss the Designer Edit menu (toggle by clicking Edit closes it) | **observed** (one run) |
| Wizard route, header, six properties, Finish, Create Form, check-in, recovery | **not performed** |

## T3 — repeat of the mandatory read-only gates in the recovered session (STOPPED at Designer scope ambiguity)

Worker session `deb02551-4bf5-48ad-a0cb-7255e6605166` · task_message_id `c8874b61-b80d-4cb8-80ff-5cb9b71b80f4`. Full detail: `evidence/EXP-134/T3-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list, then select tab 2 and one fresh snapshot | Tab 2 is a Designer (`designer/default.aspx`) with `FX_LoginPortal` open, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, and an **Error alertdialog** ("The server event processing returned an error…") still open. Not the Web Client, and not a live Designer for the wizard. Read from accessibility only; no screenshot | checkpoint |
| Corrected inspection: select tab 3 and snapshot | Tab 3 is the Web Client inside the Infor OS portal tab "Mongoose". Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer; no Form; no modal | `t3-01` |
| Identify the T2 "new Designer" (previously tab 3) | **Not identifiable.** Current tabs: 0 and 1 Designer (not inspected), 2 stale Designer, 3 Web Client. The T2 tab is absent and its disappearance is unexplained | tab list |
| Designer scope gate | **NOT CONFIRMED.** No live Designer with User scope is identifiable. Stop rule applied | — |
| IDOs absence gate; Sql Tables absence gate; IDO Projects project gate | **NOT RUN** (stop rule) | — |

**T3 verdict:** the Web Client identity and configuration are observed. The Designer scope gate is not met, so the absence gates and the project gate have no result in this session. T1 and T2 results do not carry over. The wizard is not authorised.

**T3 counts:** Finish / wizard / Save / New / Delete / check-in / Create Form / Form open / Filter in Place / criterion / F4 / Property Class lookup / metadata / FormSync / script / record actions: **0**. Designer clicks: **0**. Session Expired OK, portal navigation and sign-in: **0**. Browser recovery allowance used: one fresh snapshot and one corrected inspection (no Ref error, no timeout).

**Open items for the coordinator (not executed):**
1. Stale tab 2 holds an open server-event error alertdialog. It was not dismissed (stale Designer; end-state rule).
2. Recommended next task: obtain one fresh Designer through the documented split control (once, as in T2); confirm User scope on the new tab; then run both absence gates and the project gate in one session; stop before the wizard.
3. The cause of the T1 expiry and stale Designer, and why the T2 Designer tab is absent, remain **unresolved**.

## T4 — read-only Web Client prerequisite queries (COMPLETE; Designer scope pending)

Worker session `233552a7-a538-44cb-84d3-935883c664a0` · task_message_id `3fef8ace-2200-40f9-962f-09a3585e6015`. Full detail: `evidence/EXP-134/T4-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list, select tab 3, fresh snapshot | Web Client (portal tab "Mongoose") with header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer; no Form; no session-expiry modal | `t4-01` |
| IDOs (Select Form `IdoCollections`, OK) → criterion `FX_InventoryItems` (once) → F4 (once) | Before F4: criterion visible, FiP status. After F4: **zero data rows, no placeholder**, detail greyed and blank, status `Filter in Place`, FiP icon removed from the Form title. **Absence gate: supported, qualified** (no positive control) | `t4-02`, `t4-03` |
| Sql Tables (Select Form `SqlTables`, OK; caution alert OK once) → Table Name criteria cell (clicked once, became active) → `FX_InventoryItems` (once) → Tab → F4 (once) | Before F4: criterion in the Table Name criteria cell, Attributes combobox blank. After F4: **blue-star add-mode placeholder only** (blank Table Name and Schema, red asterisks, `Schema (SQL Tables 1 of 1)`), no persisted row marker, Save greyed. **Absence gate: supported, qualified** (placeholder interpretation as in EXP-049 and EXP-071-R2) | `t4-04`, `t4-05`, `t4-06` |
| IDO Projects (Select Form `IdoProjects`, OK) → Project Name `FX_HelloWorldProject01` (once) → F4 (once) | Before F4: criterion visible, FiP status. After F4: **one row**; Project Name `FX_HelloWorldProject01`; Description `Factory Hello World test project`; Access As `G6R`; `Description (IDO Projects 1 of 1)`. **Project gate: supported** | `t4-07`, `t4-08`, `t4-09` |
| Designer scope (User) and Designer liveness | **NOT checked** (out of T4 scope; reserved for a separately authorised task) | — |

**T4 verdict:** the Web Client identity and configuration are observed in the same session. Both absence gates are supported in this session (qualified). The project gate supports the existence of `FX_HelloWorldProject01` as the single exact-name row. **The wizard remains NOT authorised** until Designer scope and liveness are confirmed in a separate task; this task did not verify them.

**T4 counts:** Finish / wizard / Save / New / Delete / Refresh / Filter-in-Place toolbar clicks / check-in / Create Form / Property Class lookup / metadata / FormSync / script / record actions: **0**. Designer clicks: **0**. Session Expired OK / portal navigation / sign-in: **0**. Select Form opens: 3. Criterion entries: 3. F4: 3. Caution alert OK: 1. Ref-not-found: 1 (toolbar `f1e22` after the Sql Tables Form changed); recovered with one fresh untargeted snapshot and the new Open ref.

**Open items (T4):**
1. Designer scope and liveness: pending. Stale tabs 0 to 2 were not selected or touched; the tab 2 server-event error from T3 remains open.
2. The Sql Tables Form holds the unsaved add-mode placeholder (Save greyed). The coordinator decides whether to leave or otherwise handle it before the wizard task.
3. The IDOs and IDO Projects Forms remain open in Filter in Place with their criteria; no close/reopen was performed in T4.
4. Cause of the T1 expiry and stale Designer remains **unresolved**.

## T5 — live User-scope Designer identification (COMPLETE, with a recorded deviation)

Worker session `362ab71f-aa73-4a98-82a6-82403c0b81bb` · task_message_id `4a1c2a2a-655d-4a73-98c1-3e0904267b14`. Full detail: `evidence/EXP-134/T5-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list (read-only); selected tab 0 (Designer, `designer/Default.aspx?tenant=...`) | Blank canvas; **no Form loaded**; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no error dialog. **Met the step (3) criteria, but its Edit-menu probe was skipped (deviation below).** | `t5-01` |
| Selected tab 1 (Designer, `designer/Default.aspx?DeliveryType=...`) | User footer; **FX_LoginPortal (selected) and FX_BridgeTest loaded**; no visible error dialog. **Ineligible** (Form loaded). Not changed. | `t5-02` |
| Tab 2 (stale FX_LoginPortal Designer, T3 error) | **Not selected or touched** (operator rule). | — |
| Selected tab 3 (Web Client); identity `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; T4 IDO Projects Form open | Identity and configuration observed; no Session Expired modal. | `t5-03` |
| Split control `f1e57` (x≈725), hover tooltip **"Open designer in a new window"** | Tooltip confirmed. Clicked **once**. Tab count stayed at four; tab 0 URL changed to `...&MGForm=IdoProjects`. | `t5-03`, `t5-04` |
| Tab 0 after launch (ordinary snapshot) | Designer with the **vendor IdoProjects Form** loaded (`Version: Vendor Default version`); footer User scope; no error dialog; **no "Identify Your Editing Scope" dialog appeared** (scope already User). | `t5-04` |
| Edit-menu liveness probe on tab 0 (open, then close by a second Edit click; no item selected) | Full item list shown (Undo/Redo/Copy/Cut/Paste disabled; Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition). No server-event error. Closed; footer User scope. | `t5-05`, `t5-06` |

**T5 verdict:** a responsive Designer with footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` and no server-event error is **live as tab 0 in its relaunched state (UI-level liveness only)**. This does not establish that the wizard will run.

**Deviation (not authorised; must be reviewed by the operator).** Tab 0 satisfied the step (3) criteria when inspected (User scope, no error, no Form). The required Edit-menu probe on that original tab was **skipped**, and the split-control launch (step 4) was performed instead. The launch navigated the tab-0 window to the IdoProjects Designer URL, so the original blank state was lost. Its liveness was therefore neither confirmed nor refuted. Nothing was mutated as a result. The liveness shown above applies to the relaunched Designer, not to the original tab-0 state. The record for T6 must treat the vendor IdoProjects Form in tab 0 as the state to confirm before any wizard action.

**Open items (T5):**
1. Whether the relaunch reused or replaced the previous window cannot be established from the tab listing.
2. Scope was taken from the footer; no scope dialog appeared.
3. Tab 2's T3 server-event error alertdialog is still open (not touched).
4. Tab 3's IDO Projects Form (T4) still holds the Description focus from T4 (not typed into).
5. Cause of the T1 Session Expired event and the stale Designer remains **unresolved**.
6. The Data Maintenance Wizard was NOT opened. Wizard preparation is reserved for a separately authorised T6.

**T5 counts:** Finish / wizard / Save / New / Delete / Copy / check-in / Create Form / Property Class lookup / metadata / FormSync / script / record actions: **0**. Designer menu commands selected: **0**. Designer split-control clicks: **1**. Edit-menu clicks on tab 0: **2**. Designer scope dialog OK: **0**. Session Expired OK / portal navigation / sign-in / credential entry: **0**. Dialogs dismissed or accepted: **0**. Ref-not-found errors / timeouts: **0**.

## T6 — Data Maintenance Wizard opened; page-1 identifiers entered (wizard OPEN, Finish NOT invoked)

Worker session `8d0cc63b-50dc-4194-81f9-49d70436fac1` · task_message_id `4bdaad1f-dc27-489b-a7d3-eca375ce4f66`. Full detail: `evidence/EXP-134/T6-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list (read-only); tab 0 selected; fresh snapshot | Tab 0 = Designer with vendor IdoProjects Form; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled; no error dialog | `t6-01` |
| Web Client identity (tab 3, selected once) | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDO Projects grid row `FX_HelloWorldProject01`, Access As `G6R`; no session modal | `t6-02` |
| Designer toolbar New (one click) → Form Wizard Selection | New Form; Category and Wizard blank before selection; footer User scope | `t6-03` |
| Category `NewData`; Wizard `Maintenance` (one option click each); OK once | Dialog shows NewData / Maintenance before OK; OK opened Data Maintenance Wizard page 1 | `t6-04`, `t6-05` |
| Page-1 defaults observed before entry | IDO Name blank; IDO Project Name `amoveMock`; Table Alias blank; Form Type MultiView, Form Layout GridLeft, Device Type Default; Site Split unchecked; Table Name and View Name disabled; one blank property row | `t6-05` |
| IDO Name `FX_InventoryItems` (typed once) | Shown in the field | `t6-06` |
| Table Alias `fxinv` (typed once) | Shown in the field | `t6-06` |
| IDO Project Name: own Open lookup once; option `FX_HelloWorldProject01` clicked once | Shows `FX_HelloWorldProject01`; the wizard default `amoveMock` was replaced | `t6-06` |

**T6 verdict:** the wizard is open on page 1 with the identifiers set and nothing else changed. The six property rows, Create Scripts, Next, Finish, Save, check-in and the Create Form prompt were not reached. This is a pre-creation state, not a creation.

**Qualifications (not resolved in T6):**
1. The physical SQL table name is not visible before Finish. The Table Name field is disabled and blank while Site Split is unchecked. The expected `dbo.FX_InventoryItems` is inferred from the IDO name (as in EXP-049 T8 and EXP-040 T8) and must be read back after Finish.
2. Create Scripts is on the last page only, so its unchecked state is unverified in T6 and must be checked before Finish.
3. Form Type MultiView, Form Layout GridLeft and Device Type Default are wizard defaults, left unchanged. The Create Form prompt after Finish must be answered No.
4. The wizard default project `amoveMock` is a non-FX_ project name. It was replaced before any creation. Its significance is not established.

**T6 counts:** wizard opened 1; Designer New 1; Category/Wizard selections 2; page-1 typed entries 2; project lookup opened 1 and selected 1; Finish / Next / Back / Cancel 0; Create Form 0; Create Scripts change 0; Save / New / Delete / check-in / check-out 0; Property Class lookup 0; property-row edits 0; Form open / close 0; criterion entry / F4 0; metadata / FormSync / script / SQL 0; records created or edited 0; Session Expired OK / portal navigation / sign-in 0; browser JavaScript / evaluate / run-code 0 (worker-authored); Ref-not-found / timeouts 0.

**Open items (T6):**
1. Physical table name: unverified until Finish (see qualification 1).
2. Create Scripts state: unverified until page 2 (T7 must check it before Finish).
3. Designer tab 0 now hosts the wizard over the IdoProjects Designer. The stale tab 2 server-event error from T3 remains open and untouched. Cause of the T1 session expiry and stale Designer remains unresolved.

## T7 — Property-row configuration (STOPPED at harness guard blocker; wizard open; Finish NOT invoked)

Worker session `c52c4f1a-bac5-4dc2-aa1d-73faae9e2d76` · task_message_id `d20f2461-58d4-4804-9528-25e0f71075e6`. Full detail: `evidence/EXP-134/T7-checkpoint.md`.

**Status:** partial. Row 1 complete; row 2 name entered; row 2 Data Type dropdown in an unknown state after a PostToolUse guard blocker ("Guard completion failed; preserve the action reservation and stop"). No further browser action was issued.

| Row | Name | Property Class | Data Type | SQL Data Type | Length | Decimal Precision | Primary Key | Required |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | blank | String | nvarchar | 50 | n/a (blank) | checked | checked |
| 2 | FX_Description | blank | unknown (dropdown state) | not set | not set | not set | not set | not set |
| 3–6 | not added | | | | | | | |

Page-1 identity re-read in T7 (fresh snapshot): IDO Name `FX_InventoryItems`, IDO Project Name `FX_HelloWorldProject01`, Table Alias `fxinv`, Site Split unchecked, Table Name disabled and blank, Finish disabled. Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.

**Deviation (recorded):** a Tab from the row 1 Name editor moved focus into the row 1 Property Class combobox. It was not opened, no list appeared, Escape was not pressed, and the value stayed blank. Focus then moved to Data Type by a cell click.

**T7 counts:** Add Row 1; row 1 completed; Finish / Next / Back / Cancel 0; Create Form 0; Create Scripts change 0 (page 2 not reached); Save / New / Delete / check-in 0; Property Class lookup opened 0; Label String ID edits 0; second wizard 0; metadata / FormSync / script / SQL 0; records 0; Session Expired / sign-in 0; browser JavaScript / evaluate / run-code 0 (worker-authored); Ref-not-found 0; timeouts 0; harness guard blocker 1.

**Open items (T7):**
1. Row 2 Data Type dropdown state: inspect with one fresh snapshot before any further action.
2. Rows 2 to 6 remain to configure (Length 255 / 100 / 12 with precision 2 for FX_QuantityOnHand and FX_ReorderLevel, String 100 for FX_Location).
3. Create Scripts (page 2) and the physical SQL table name remain unverified.
4. The guard blocker needs operator or coordinator disposition before T8.

## T8 — property rows 2 to 4 (STOPPED at a second stale-ref event; wizard open on page 1; Finish NOT invoked)

Worker session `3d4b668d-3fee-436d-ad6f-a18cfa8e3176` · task_message_id `226d4877-4664-4dc5-9acf-6a6281348278`. Full detail: `evidence/EXP-134/T8-checkpoint.md`.

**Status:** partial. Rows 1 to 3 settled; row 4 settled except Decimal Precision `2`, which was typed but is **not committed**. Rows 5 and 6 not added. Recovery allowance used; the next click returned "Ref not found" and no further action was taken.

| Row | Name | Property Class | Data Type | SQL Data Type | Length | Decimal Precision | Primary Key | Required |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | blank | String | nvarchar | 50 | n/a | checked | checked |
| 2 | FX_Description | blank | String | nvarchar | 255 | n/a | unchecked | unchecked |
| 3 | FX_Warehouse | blank | String | nvarchar | 100 | n/a | unchecked | unchecked |
| 4 | FX_QuantityOnHand | blank | Decimal | decimal | 12 | **`2` typed, not committed** | unchecked | unchecked |
| 5 | not added | | | | | | | |
| 6 | not added | | | | | | | |

**Observations (T8):**
- The row 2 Data Type dropdown left open by T7 was still open at the start of T8. `String` was selected from that open list once. No re-open occurred.
- Decimal Precision is editable on a Decimal row (a textbox editor opened on click).
- Add Row: 3 click attempts, 2 successful (rows 3 and 4). The first attempt returned "Ref e559 not found" with no observed effect; the retry succeeded.
- A second "Ref e881 not found" occurred on the row 4 Data Type cell after the precision value was typed, so the commit did not happen. Per the brief, this exhausted the task's recovery allowance (one fresh snapshot used at the first ref event, one corrected inspection used by the Add Row retry), so no new fresh snapshot or new ref was used.
- Read-only screenshot `t8-02` shows the active uncommitted precision editor with `2`, Finish disabled, User-scope footer.

**Qualifications and open items (T8):**
1. Row 4 Decimal Precision `2` is uncommitted at stop. The next task must read the grid, confirm the editor, commit by a supported cell click (not Tab, Enter or Escape), and read the value back.
2. Rows 5 (`FX_ReorderLevel`, Decimal 12 precision 2) and 6 (`FX_Location`, String 100) remain.
3. A complete six-row legible capture (AC-3) is not yet available; the T8 screenshots show only partial horizontal views.
4. Create Scripts (page 2) and the physical SQL table name remain unverified.
5. The cause of the two stale-ref events is unresolved (the first referenced a ref the same snapshot had listed as current).

**T8 counts:** Finish / Next / Back / Cancel 0; Create Form 0; Create Scripts 0; Save / New / Delete / check-in 0; Property Class lookup opened 0; Tab / Escape / Enter pressed 0; Label String ID edits 0; second wizard 0; metadata / FormSync / script / SQL 0; records created or edited 0; Session Expired / sign-in / credential entry 0; browser JavaScript / evaluate / run-code / internal APIs (worker-authored) 0; Ref-not-found 2; fresh-snapshot recovery 1; corrected inspection 1 (the Add Row retry); harness guard blocker 0; timeouts 0.

**Acceptance (T8 scope only):** AC-1 and AC-2 remain as recorded in T1 to T5 (not re-run in T8). AC-3 **not met** (4 of 6 rows; no full capture; row 4 precision uncommitted). AC-4 to AC-10 not reached.

## T9 — property rows 4 to 6 completed; six-row pre-Finish readback (COMPLETE; wizard OPEN on page 1; Finish NOT invoked)

Worker session `935655ab-bddc-4f6b-bb7b-f8bd9a77a2a6` · task_message_id `d318b9ac-acaf-4db3-9e74-f452e6af11da`. Full detail: `evidence/EXP-134/T9-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list; tab 0 selected; fresh snapshot; wizard identity (IDO `FX_InventoryItems`, project `FX_HelloWorldProject01`, alias `fxinv`, User-scope footer) | Confirmed on page 1 | `t9-01` |
| Row 4 precision `2` (uncommitted editor at start) | Committed by a Property Length cell click, then Length `12` closed by a Data Type cell click. Final: Decimal, decimal, Length 12, precision 2 (static text) | `t9-01`, `t9-03`, `t9-06` |
| Row 5 `FX_ReorderLevel` | Add Row once; name typed; Data Type Decimal; Length 12; precision 2 committed | `t9-07` to `t9-18` (snapshot `t9-17`) |
| Row 6 `FX_Location` | Add Row once; name typed; Data Type String; Length 100 committed | `t9-19` to `t9-25` |
| Six-row readback | Six rows; no seventh row; Property Class and Label String ID blank; Primary Key only on row 1; Required only on row 1 | `t9-26` (snapshot), `t9-27`, `t9-28`, `t9-29` (screenshots) |

**Six-row configuration read back (committed values; snapshot `t9-26`):**

| Row | Name | Data Type | SQL type | Length | Decimal Precision | Primary Key | Required |
|---|---|---|---|---|---|---|---|
| 1 | FX_Item | String | nvarchar | 50 | n/a | checked | checked |
| 2 | FX_Description | String | nvarchar | 255 | n/a | unchecked | unchecked |
| 3 | FX_Warehouse | String | nvarchar | 100 | n/a | unchecked | unchecked |
| 4 | FX_QuantityOnHand | Decimal | decimal | 12 | 2 | unchecked | unchecked |
| 5 | FX_ReorderLevel | Decimal | decimal | 12 | 2 | unchecked | unchecked |
| 6 | FX_Location | String | nvarchar | 100 | n/a | unchecked | unchecked |

Property Class and Label String ID cells read blank for all six rows. Row 6's Data Type combobox was left as an active editor showing `String` (committed SQL type `nvarchar`); this is not a dialog.

**Qualifications and open items (T9):**
1. **Create Scripts (page 2) and the physical table name are unverified.** Page 2 was not reached; a later task needs separate authorization for page 2 (Next once) before Finish.
2. Row 1 is clipped at the top edge of the grid in the screenshots; its values are confirmed by snapshot text only.
3. The Property Class column is partly clipped in screenshots; the blank state is confirmed by the snapshot.
4. Deviation (minor): row 4 precision commit used the Length cell, which opened a Length editor closed by a second click (no value change). Rows 5 and 6 Name entries were typed into the already-active Name editor after Add Row (the brief named a Name-cell click first).
5. The page reports "2 errors, 0 warnings" in every snapshot since T9 started; not inspected (out of T9 scope).

**T9 counts:** Finish / Next / Back / Cancel / Save / Create Form / Create Scripts change: **0**. Property Class lookup opened: **0**. Label String ID edits: **0**. Tab / Escape / Enter pressed: **0**. Add Row: **2** (rows 5 and 6, each once). Wizard grid clicks: **15**; typed entries: **5**; horizontal wheel scrolls: **2** (no click). Ref-not-found: **0**; fresh-snapshot recovery used: **0**; timeouts: **0**. Session Expired / sign-in: **0**. Second wizard / check-in / record creation / editor Form: **0**. Metadata unload / FormSync / script / SQL: **0**. Browser JavaScript / evaluate / run-code (worker-authored): **0**.

**Acceptance (T9 scope):** AC-3 **QUALIFIED** (six rows match the specification in the snapshot text, precision 2 on rows 4 and 5, Property Class and Label String ID blank, no seventh row; Create Scripts unverified because page 2 was not reached). AC-1 partially re-observed (footer and wizard identity; Web Client header not re-read in T9). AC-2 not re-run in T9. AC-4 to AC-10 not reached.

## T10 — read-only pre-Finish verification; page 2 reached by one Next (COMPLETE; wizard OPEN on page 2; Finish NOT invoked)

Worker session `bb03e7b7-4c87-4547-b6f8-e92c5004526c` · task_message_id `da65571b-4008-45c4-9e99-fb21e94249ef`. Full detail: `evidence/EXP-134/T10-checkpoint.md`.

**Identity (fresh snapshot, start of T10):** wizard open on page 1 in the User-scope Designer (footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`); IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxinv`; Site Split unchecked; Table Name and View Name disabled and blank; Form Type MultiView, Form Layout GridLeft, Device Type Default. Back disabled; Next enabled; Finish disabled.

**Row 6 editor resolution:** the T9 Data Type combobox on row 6 (`FX_Location`) was still active with `String`. One click on row 6's SQL Data Type cell opened an editable SQL Data Type combobox (`nvarchar`, nothing typed). The brief assumed that cell was read-only, so this is a recorded deviation. One click on row 6's row-header number cell closed it. Final: row 6 Data Type `String` as static text, SQL `nvarchar`, Length `100`, both checkboxes unchecked, Property Class and Label String ID blank.

**Six-row readback (page 1, snapshot `t10-03`):**

| Row | Name | Data Type | SQL type | Length | Precision | PK | Required |
|---|---|---|---|---|---|---|---|
| 1 | FX_Item | String | nvarchar | 50 | n/a | checked | checked |
| 2 | FX_Description | String | nvarchar | 255 | n/a | unchecked | unchecked |
| 3 | FX_Warehouse | String | nvarchar | 100 | n/a | unchecked | unchecked |
| 4 | FX_QuantityOnHand | Decimal | decimal | 12 | 2 | unchecked | unchecked |
| 5 | FX_ReorderLevel | Decimal | decimal | 12 | 2 | unchecked | unchecked |
| 6 | FX_Location | String | nvarchar | 100 | n/a | unchecked | unchecked |

Exactly six rows. Property Class and Label String ID are blank for all six rows and Default Value is blank (accessibility text; the Property Class column is partly clipped in screenshots).

**Page 2 (one Next, snapshot `t10-05`, screenshot `t10-06`):** Create Scripts checkbox visibly unchecked; instruction text `Click "Finish" to create the database table, IDO and optional form.`; preview area blank; Back enabled; Next disabled; Finish enabled and NOT pressed; User-scope footer. No Table Name, schema, view or creation-target field is visible, so the physical table name is not established.

**Console (read-only, `t10-07`):** 2 errors, 0 warnings. Both are Permissions-Policy notices (`unload is not allowed in this document`) in the Designer `app.js` and `yggdrasil-core.js`. Neither names a wizard action. Recorded as observed.

**AC-3 determination:** every pre-Finish setting except the physical table name is verified from the accessibility readback; screenshots support identity, alias, lengths, SQL types and Create Scripts. `dbo.FX_InventoryItems` is not displayed before Finish (qualified; Mongoose derives it from the IDO name, which is inference). AC-3 is **QUALIFIED**, not passed. The wizard is in a consistent pre-Finish state and is ready for a separate operator decision on a single Finish, subject to accepting the table-name limitation.

**T10 counts:** Next **1**. Finish / Save / Cancel / Back / second Next / Create Scripts change / Create Form / check-in / record creation / editor Form / metadata unload / FormSync / generated script / SQL / browser JavaScript: **0**. Property Class lookup opened: **0**. Label String ID and Default Value edits: **0**. Typed entries: **0**. Tab / Escape / Enter: **0**. Wizard grid clicks: **2** (SQL Data Type cell; row-header number cell). Fresh untargeted snapshots: **4**. Screenshots: **3**. Ref-not-found: **0**; fresh-snapshot recovery used: **0**. Session Expired / sign-in: **0**.

**Acceptance (T10 scope):** AC-3 **QUALIFIED** (physical table name not displayed; the Data Type, Primary Key/Required, Decimal Precision and Property Class columns are partly clipped in screenshots, so their values rest on snapshot text). AC-1 re-observed for the footer, wizard identity and tab 0 (the Web Client header was not re-read in T10). AC-2, AC-4 to AC-10 not reached (no Finish, no creation, no check-in, no close/reopen).

## T11 — single wizard Finish; Create Form answered No; native completion; wizard closed (COMPLETE; creation NOT yet verified by readback)

Worker session `8bd68d4e-d2bf-4225-8062-5dc6a0a331f8` · task_message_id `d0a17b08-771f-438b-9502-18a416ded842` · cycle 16. Full detail: `evidence/EXP-134/T11-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list (read-only); tab 0 selected; fresh untargeted snapshot | Tab 0 = Designer with the wizard on **page 2**; Create Scripts unchecked; Finish enabled (`e504`); Back enabled; Next disabled; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Page 2 shows no IDO name or alias; continuity from T10 | snapshot; `t11-01` |
| Pre-Finish screenshot (read-only) | Page 2: Create Scripts empty box; instruction text; preview blank; Finish enabled | `t11-01` |
| **Finish — once** (`e504`) | No tool error. Next read: alertdialog **"Create Form"** `Do you want to create a form for FX_InventoryItems?` (Yes default-focused; No) | `page-2026-10-25T20-24-45-845Z.yml` (tool-written); `t11-02` (prompt, before answer) |
| **Create Form — No, once** (`e515`) | Prompt closed; wizard message **`Table and IDO created.`**; Back, Next and Finish disabled; **Close** enabled | `page-2026-10-25T20-24-56-100Z.yml` (tool-written); `t11-03` |
| **Wizard native Close — once** (`e517`) | No `Data Maintenance Wizard` dialog, no alertdialog; Designer Save disabled; vendor IdoProjects Form in design view (not modified); footer User scope | `page-2026-10-25T20-25-07-961Z.yml` (tool-written); `t11-04` |

**T11 verdict:** AC-4 **SUPPORTED** at the wizard-completion level: one Finish, one No to the optional Create Form prompt (not Yes), and the native success text `Table and IDO created.` displayed. The wizard then closed through its own Close, once.

**What the completion does NOT prove:** the physical table `dbo.FX_InventoryItems` (the wizard never displays its name; the prompt names only the IDO); the persisted IDO properties, base table, alias or project; the IDO check-in state; any column definition; or close/reopen recovery. These remain pending (AC-5 to AC-8).

**Operator-approved qualifications carried into T11 (recorded, not verified):**
1. Required flag on FX_Item only (rows 2–6 not required), a deliberate difference from the EXP-130 reference. Not verified against the persisted IDO.
2. The physical table name is not visible before Finish; verification is deferred to a separate post-creation task.

**Pre-Finish gate note (T11):** page 2 does not re-display the six rows or the IDO name; the T10 readback is the source for those values. No setting was changed in T11.

**T11 counts:** Finish **1**; Create Form No **1** / Yes **0**; wizard Close **1**; Next / Back / Cancel / Save **0**; setting or grid edits **0**; Property Class lookup **0**; Label String ID edits **0**; check-in / checkout **0**; IDOs, Sql Tables or Sql Columns queries **0**; close/reopen of maintenance Forms **0**; record creation, editor Form, metadata unload, FormSync, generated script, direct SQL **0**; browser JavaScript / evaluate / run-code (worker-authored) **0**; ref-not-found / timeouts **0**; session recovery / sign-in **0**; non-FX_ mutation **0**. Fresh untargeted snapshots: 1. Inline `find` reads: 3. Screenshots: 4.

**Console:** page metadata showed `2 errors, 0 warnings` before Finish, after No and after Close (unchanged from T10). The console text was not re-read in T11.

**Final browser state:** tab 0 Designer with the vendor IdoProjects Form, wizard closed, no dialog, Save disabled. Tabs 1 to 3 not selected or touched.

**Next permitted action (separate authorization):** post-creation readbacks (IDOs exact-name `FX_InventoryItems` under `FX_HelloWorldProject01`; Sql Tables and Sql Columns for `dbo.FX_InventoryItems`); check-in decision (AC-7); ordinary close and reopen recovery (AC-8). No further creation.

## T12 — read-only post-creation IDO readback (COMPLETE; checkout observed; NO check-in)

Worker session `8bd68d4e-d2bf-4225-8062-5dc6a0a331f8` · task_message_id `702658d7-254e-4299-97f9-243fed0e372f` · cycle 17. Full detail: `evidence/EXP-134/T12-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list; tab 3 selected; fresh snapshot | Web Client (portal tab "Mongoose"); header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no session modal or sign-in | inline snapshot |
| IDOs panel: fresh reopen | Pre-close state was an empty IDO Name criterion, no rows, Save disabled. Its own Close Panel IDOs control (once), then toolbar Open → Select Form `IdoCollections` (filter typed, Tab, row, OK, each once). Reopened in Filter in Place | inline snapshots |
| Criterion `FX_InventoryItems` (once) + Tab; pre-F4 capture | Criterion visible; FiP status; one echo row (criteria, not a result) | `t12-01` |
| **F4 (once)** → settled | **One row** `FX_InventoryItems`; checkbox checked; Locked By `anton.ramos@3mworks.com.ph`; Revision Num `1`; Revision Date `10/25/2026`; status `Description (IDOs 1 of 1)`. Save disabled. **Check In enabled; Undo Check Out disabled** | `t12-02`; find readback |
| IDO header readback | Project Name `FX_HelloWorldProject01`; Label String ID and Caption `oFX_InventoryItems`; Access As `G6R`; Description blank | find readback |
| Tables sub-grid | One row: Table Name `FX_InventoryItems`; Table Alias `fxinv`; Table Type `Primary Base`; Join Type `Inner` | find readback |
| In-form Properties sub-tab (read-only) | 13 rows: six FX_ business properties plus seven framework properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) | `t12-03`; find readback |

**Six business properties (IDO Properties grid, read back at UI level):**

| Seq | Property | Property Class | Column Name | Key Seq | Data Type | Length | Column Type | Required |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | blank | FX_Item | **1** | String | 50 | nvarchar | **checked** |
| 2 | FX_Description | blank | FX_Description | 0 | String | 255 | nvarchar | unchecked |
| 3 | FX_Warehouse | blank | FX_Warehouse | 0 | String | 100 | nvarchar | unchecked |
| 4 | FX_QuantityOnHand | blank | FX_QuantityOnHand | 0 | Decimal | 12 | decimal | unchecked |
| 5 | FX_ReorderLevel | blank | FX_ReorderLevel | 0 | Decimal | 12 | decimal | unchecked |
| 6 | FX_Location | blank | FX_Location | 0 | String | 100 | nvarchar | unchecked |

**Verdict:** AC-5 **supported at UI level, qualified**: exact IDO name, project, base table, alias and six business properties with names, types, lengths and the FX_Item key and Required settings were read back. Limits: the grid shows no Decimal precision column (precision 2 not verified at IDO level); primary key is shown as Key Sequence, not a labelled checkbox; the schema `dbo` is not displayed in the IDO view.

**Checkout (AC-7 state, no mutation):** the IDO is checked out to `anton.ramos@3mworks.com.ph`, revision 1 (Check In enabled, Undo Check Out disabled). **No check-in was performed.** AC-7 is **pending** the check-in decision (a separate authorisation).

**AC-8 (not established):** the IDOs Form was closed once and reopened once (the T12 step-2 freshness action). The pre-close panel had no FX_InventoryItems readback, so there is no pre-close definition baseline to compare with. The Sql Tables close/reopen and the paired IDOs recovery check remain pending. This is not a recovery verdict.

**Console:** 14 error entries at `level=error`. Thirteen are the Permissions-Policy `unload` notices recorded earlier. One new entry: HTTP 401 from `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh`, seen during the IDOs close/reopen step. The Mongoose page and IDO data still loaded normally; no session modal, sign-in or alert was found. Cause not established.

**T12 counts:** Finish **0**; Create Form **0**; **Check In / Check Out / Undo Check Out 0 / 0 / 0**; Save / New / Delete / Refresh / FiP toolbar click **0**; Sql Tables interaction, Sql Columns query **0**; Property edits / Property Class lookups / Label String ID edits **0**; record creation, editor Form, metadata unload, FormSync, generated script, direct SQL, browser JavaScript **0**; Session Expired / sign-in / portal navigation **0**; non-FX_ mutation **0**. IDOs close/reopen **1 / 1** (step 2). Select Form opens **1**. F4 **1**. Clicks **6**; typed entries **2**; Tab keys **2**; screenshots **3**; ref-not-found / timeouts **0**; fresh-snapshot recovery **0**.

**Final browser state:** tab 3 Web Client, IDOs Form open in FiP with criterion `FX_InventoryItems` (one row, Properties sub-tab), Save disabled, no dialog. Tabs 0 to 2 not selected or touched; Sql Tables and IDO Projects panels untouched.

**Next permitted action (separate authorisation):** (1) the AC-7 check-in decision, with at most one Check In if authorised; (2) the AC-6 Sql Tables and Sql Columns readback for `dbo.FX_InventoryItems`; (3) the AC-8 paired close/reopen with pre-close baselines.

## T13 — read-only post-creation Sql Tables and Sql Columns readback (COMPLETE; AC-6 SUPPORTED; NO check-in; NO Finish)

Worker session `92644b0d-f2b9-4ea4-91fd-4b4415622bb8` · task_message_id `9b0d6fb9-c6ca-4017-b2b0-189381e87b48` · cycle 18. Full detail: `evidence/EXP-134/T13-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list (read-only); tab 3 selected; fresh snapshot | Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDOs panel shows `FX_InventoryItems` checked out (Locked By `anton.ramos@3mworks.com.ph`, Check In enabled, Undo Check Out disabled, Revision Num 1) | inline snapshot |
| Sql Tables panel (blank add-mode placeholder from T4, Save disabled, no dialog) closed once; reopened once through Open → Select Form `SqlTables` (OK once); caution alert OK once | Sql Tables Form reopened in Filter in Place | `evidence/playwright/page-…20-34-46-016Z.yml`, `…20-34-55-352Z.yml`, `…20-35-27-550Z.yml` |
| Exact-name query in the Table Name criteria cell (`FX_InventoryItems`, once), Tab once, pre-F4 capture, F4 once | **One persisted row**: Table Name `FX_InventoryItems`, Schema `dbo`, Multi-Site unchecked; status `Schema (SQL Tables 1 of 1)`; row marker is the populated-row arrow | `t13-01` (pre-F4), `t13-02` (settled) |
| Sql Tables constraints (read in the settled view) | `PK_FX_InventoryItems` (Primary Key, Unique checked, Clustered checked, description `FX_Item`); `IX_FX_InventoryItems_RowPointer` (Index, Unique checked, Clustered unchecked, description `RowPointer`) | `t13-02`; `…20-35-54-849Z.yml` |
| Columns… (once) → SQL Columns form | **13 columns**, all Schema `dbo`, Table `FX_InventoryItems` | `t13-03`, `…20-36-04-169Z.yml` |
| Horizontal scroll (wheel, no click); row-header selections for rows 3–6 (view-only) | Length and Decimal Position columns read for all business rows; detail read for FX_Warehouse, FX_QuantityOnHand, FX_ReorderLevel, FX_Location | `t13-04`, `…20-36-38-012Z.yml`, `…20-36-45-367Z.yml`, `…20-36-52-336Z.yml`, `…20-36-58-547Z.yml`, `t13-05`, `t13-06-…yml` |

**Six business columns (SQL Columns; observed versus the approved specification):**

| Column | Expected | Observed (Data Type / System Data Type / Length / Decimal Position / PK / Key Seq / Is Nullable) | Verdict |
|---|---|---|---|
| FX_Item | String 50, PK, Required → nvarchar(50) | nvarchar / nvarchar / 50 / blank / **checked** / **1** / **unchecked** | Matches |
| FX_Description | String 255 → nvarchar(255) | nvarchar / nvarchar / 255 / blank / unchecked / blank / checked | Matches |
| FX_Warehouse | String 100 → nvarchar(100) | nvarchar / nvarchar / 100 / blank / unchecked / blank / checked | Matches |
| FX_QuantityOnHand | Decimal 12, precision 2 → decimal(12,2) | decimal / decimal / 12 / **2** / unchecked / blank / checked | Matches (UI convention) |
| FX_ReorderLevel | Decimal 12, precision 2 → decimal(12,2) | decimal / decimal / 12 / **2** / unchecked / blank / checked | Matches (UI convention) |
| FX_Location | String 100 → nvarchar(100) | nvarchar / nvarchar / 100 / blank / unchecked / blank / checked | Matches |

- **Generated system columns (inventoried separately):** CreatedBy (UsernameType, nvarchar 128, `suser_sname()`), UpdatedBy (same), CreateDate (CurrentDateType, datetime, `getdate()`), RecordDate (same), RowPointer (RowPointerType, uniqueidentifier, `newid()`), NoteExistsFlag (FlagNyType, tinyint, `(0)`), InWorkflow (same). Seven rows; their names match the seven T12 IDO framework rows. Is Nullable and Column Id for these were not read.
- **Discrepancies against the specification:** none observed.

**AC-6 verdict: SUPPORTED at Mongoose SQL-metadata UI level, qualified.** Limits: (1) this is UI display, not an independent database query (direct SQL is prohibited), so `decimal(12,2)` is the UI convention (Length 12, Decimal Position 2) used in EXP-049 T13; (2) the Decimal Position of rows 4 and 5 is read from accessibility text, not a screenshot; (3) the Sql Tables Form shows no table description or project field; (4) the schema `dbo` is shown in the grid and detail, and the Table Name criterion is name-only; (5) Is Nullable and Column Id for the system columns were not read.

**What this does NOT establish:** check-in (AC-7), close/reopen recovery (AC-8), database-level persistence, or runtime CRUD.

**Console:** page metadata `14 errors, 10 warnings` (unchanged); the task console log records one error-level entry, the 401 from `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` (the same endpoint as the T12 entry). No session modal, sign-in or alert appeared. Cause **unresolved**.

**T13 counts:** Finish **0**; Create Form **0**; **Check In / Check Out / Undo Check Out 0 / 0 / 0**; Save / New / Delete / Refresh / Update Current Table / Constraint edits / Add Row **0**; Property Class lookup, Label String ID edits, record creation, inventory editor Form, metadata unload, FormSync, generated script, direct SQL, browser JavaScript **0**; Session Expired / portal navigation / sign-in **0**; non-FX_ mutation **0**; Designer tabs 0–2 not selected. Sql Tables panel close **1** and reopen **1** (permitted read-only freshness); Select Form opens **1**; caution alert OK **1**; criterion entries **1**; F4 **1**; Columns… **1**; row-header selections **4** (view-only); hover **1**; horizontal wheel **1**; Ref-not-found / timeouts **0**; fresh-snapshot recovery **0**.

**Final browser state:** tab 3 Web Client; Sql Tables (persisted row, Save disabled) and Sql Columns (FX_Location detail, Column Name combobox focused, nothing typed) runtime tabs open; IDOs and IDO Projects panels open and untouched; no dialog; no unsaved-change prompt. Tabs 0 to 2 not selected.

**Next permitted action (separate authorisation required):** (1) AC-7 check-in decision: one supported Check In of the checked-out IDO, then re-read; (2) AC-8 paired close/reopen of the IDOs and Sql Tables Forms, each with an exact-name readback compared against the pre-close baseline recorded in T13 and T12; (3) IDO-level Decimal precision remains unverified in the IDO grid (T12), though SQL-level precision 2 is now observed.

## T14 — conditional single IDO check-in of FX_InventoryItems (COMPLETE; Check In count 1; AC-7 PASSED at UI level; NO Finish)

Worker session `3efa7704-1855-4d0e-bbfa-f4a0382cf245` · task_message_id `4e28e7b5-f839-4177-9167-d5d8ac4d1b03` · cycle 19. Full detail: `evidence/EXP-134/T14-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list (read-only); tab 3 selected; fresh snapshot | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no modal; Sql Columns panel active with Save disabled and no pending edit | inline snapshot |
| IDOs panel selected by one click on its tab heading (read-only navigation; Sql Columns not closed) | IDOs panel active; row `FX_InventoryItems`, Project `FX_HelloWorldProject01`, Locked By `anton.ramos@3mworks.com.ph`, Revision Num 1, row checkbox checked; Check In enabled, Undo Check Out disabled | `t14-00-idos-panel-fresh-snapshot.yml`, `t14-01-idos-pre-checkin-checkout-state.png` |
| Check In (one click) | Completed; no timeout or stale ref. Immediate `alertdialog`: "Source control integration is currently disabled in the current configuration. The item will not be checked in to source control." (single OK) | `find` output; `evidence/playwright/page-…20-43-07-662Z.yml` |
| Notice OK (one click) | Dismissed; no Save, scope, overwrite or vendor-Form prompt | `evidence/playwright/page-…20-43-14-463Z.yml` |
| Post-check-in fresh readback (no further action) | Revision Num **2**; Locked By **empty**; Check Out **enabled**; Undo Check Out disabled; status `Check Out (IDOs 1 of 1)`; row checkbox unchecked; Save disabled; no dialog; project `FX_HelloWorldProject01`, Access As `G6R`, Caption `oFX_InventoryItems` unchanged | `t14-02-post-checkin-fresh-snapshot.yml`, `t14-02-post-checkin-idos-checked-in-state.png` |
| Properties sub-tab (still displayed, not edited) | Six FX_ business rows visible (FX_Item sequence 1, Key Sequence 1, Required; FX_Description 255; FX_Warehouse 100; FX_QuantityOnHand and FX_ReorderLevel Decimal 12; FX_Location 100) with framework rows below | `t14-01`, `t14-02` PNG |

**AC-7 verdict: PASSED at UI level, qualified.** Checked out before; exactly one successful Check In; the revision moved from 1 to 2 and Locked By cleared. **Qualifier:** the native notice states that source-control integration is disabled, so the item was not checked in to source control. This is a Mongoose-level checkout release only. No database-level or cross-session evidence is claimed.

**Mutation-time authentication (recorded):** the recurring 401 from `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` and two INFO `getSSOToken: Token expired` lines appeared in the console log before the check-in. No session modal, sign-in or visible invalidity was present, so the brief's stop conditions did not apply. The cause remains **unresolved**; the console error count was unchanged at 14 after the check-in.

**What this does NOT establish:** AC-8 close/reopen recovery (not performed; reserved for T15); database-level persistence; runtime CRUD; source-control check-in.

**T14 counts:** Finish **0**; Create Form **0**; **Check In 1**; Undo Check Out **0**; Check Out **0**; Save / New / Delete / Refresh / FiP **0**; criterion entries and F4 **0**; IDOs, Sql Tables and Sql Columns close or reopen **0**; property edits, Property Class lookup, Label String ID edits **0**; record creation, inventory editor Form, metadata unload, FormSync, generated script, direct SQL, browser JavaScript **0**; Session Expired / portal navigation / sign-in **0**; non-FX_ mutation **0**; Designer tabs 0–2 not touched; Ref-not-found / timeouts **0**; fresh-snapshot recovery **0**.

**Acceptance matrix (T14 scope):** AC-1 re-observed; AC-5 retained (property rows visible after check-in; not re-audited); AC-6 unchanged (SUPPORTED at Mongoose SQL-metadata UI level, qualified); **AC-7 PASSED (UI level, qualified)**; AC-8 **not performed** (T15); AC-9 (T14 portion) **PASSED**; AC-10 (T14 portion) evidence written; final matrix and repository change inventory pending.

**Next permitted action (separate authorisation required):** AC-8 paired close/reopen of the IDOs and Sql Tables Forms (T15), with an exact-name readback before and after each close. The IDO baseline is the T14 post-check-in state plus the T12 and T13 readbacks; the Sql Tables baseline is the T13 persisted row and constraints. Then the AC-10 final audit.

## T15 — paired close/reopen persistence check for the IDO and Sql Tables (COMPLETE; AC-8 PASSED at UI level; NO check-in; NO Finish)

Worker session `0ff294ac-6504-443b-813c-3b9d84ef4cd8` · task_message_id `eb133f64-3440-4e3a-a672-52747316ec80`. Full detail: `evidence/EXP-134/T15-checkpoint.md`.

| Step | Result | Evidence |
|---|---|---|
| Tab list (read-only), tab 3 selected, fresh snapshot | Identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no modal; IDOs panel active | inline snapshot |
| Pre-close baselines | IDO: Revision 2, Locked By blank, Check Out enabled, Undo disabled, Tables `FX_InventoryItems`/`fxinv`/Primary Base/Inner, six FX_ properties (Properties read at task start). Sql Tables: one row `dbo`, `PK_FX_InventoryItems`, `IX_FX_InventoryItems_RowPointer`, Save disabled. Sql Columns: 6 of 13 (FX_Location detail) | `t15-01`, `t15-02`, `t15-03` |
| Sql Columns Close Panel (preparatory), once | Closed; no prompt | tool snapshot |
| IDOs Close Panel, once | Closed; find shows panel absent; no prompt | tool snapshot |
| Sql Tables Close Panel, once | Closed; only IDO Projects remained; no prompt | `t15-04` |
| IDOs reopen (Open → IdoCollections → OK, once) | Filter in Place, blank criteria | `t15-05`, `t15-06` |
| IDOs exact-name query (`FX_InventoryItems` typed once, Tab, F4 once) | Criterion visible before F4 (`t15-07`); settled to one row, status `Extends (IDOs 1 of 1)`, FiP removed (`t15-08`) | `t15-07`, `t15-08` |
| IDOs post-reopen Properties (sub-tab click, read-only) | Rows 1–8 match the baseline (FX_Item key 1 and Required; FX_Description 255; FX_Warehouse 100; FX_QuantityOnHand and FX_ReorderLevel Decimal 12; FX_Location 100). Rows 12–13 present in DOM with the same flags; rows 9–11 not re-read visually | `t15-09` |
| Sql Tables reopen (Open → SqlTables → OK; caution alert OK once) | Filter in Place, blank criteria row, no placeholder | `t15-10` |
| Sql Tables exact-name query (criteria cell clicked once; `FX_InventoryItems` typed once; Tab; F4 once) | Before F4: criterion in grid cell (`t15-11`). After F4: one row `FX_InventoryItems` / `dbo`; `Schema (SQL Tables 1 of 1)`; `PK_FX_InventoryItems` (FX_Item) and `IX_FX_InventoryItems_RowPointer`; Save disabled (`t15-12`) | `t15-11`, `t15-12` |
| Sql Columns (Columns… once from the reopened row) | `Column Name (SQL Columns 1 of 13)`; FX_Item detail: Column Id 2, nvarchar, Length 50, not nullable, PK, Key Sequence 1. Grid lengths 50/255/100/12/12/100/128/128; decimal rows 4–5 with Decimal Position 2 (`t15-16`/`t15-17`). Defaults rows 7–13 match T13 | `t15-13`, `t15-14`, `t15-15`, `t15-16`, `t15-17` |
| Sql Columns Close Panel, once | Closed; no prompt | tool snapshot |

**Persistence matrix (pre-close versus post-reopen):** the IDO row count, project, Revision Num 2 and date, Locked By blank, Check Out enabled and Undo disabled, Label String ID, Caption, Access As G6R, Tables row, Properties rows 1–8 and 12–13, the Sql Tables row count, `dbo` schema, both constraints, the Sql Columns count (13), business types and lengths, and the decimal positions for rows 4–5 all match. Not re-verified visually: Properties rows 9–11.

**AC-8 verdict: PASSED at UI level (qualified).** One pre-close and post-reopen pair per Form. The pre-close baseline is UI state in the same session. The result is limited to Mongoose UI-level recovery. No database-level verification was made.

**AC-7 carried, not re-performed:** the Check Out enabled and Undo disabled state after reopen matches the T14 post-check-in state. External source-control integration is disabled (notice recorded in T14); only the Mongoose checkout was released.

**Deviations:** (1) Sql Columns was closed twice (once before the reopens; once after the readback). (2) Decimal Position re-read needed two wheel-scroll corrections (`t15-15` overshoot) and one no-effect wheel; no row was selected. (3) The Extends field appeared white in the Filter in Place view before the query, and greyed after F4; no value changed.

**Console and session (read-only):** page metadata 14 errors and 10 warnings, unchanged. The tool-written console log records the recurring Yggdrasil 401 on the refresh endpoint and two `Token expired` INFO lines (same as T12–T14). It also records 400 Designer-endpoint errors and `unload` notices from the stale Designer tabs; the log does not tag entries to a tab, so these are unattributed. No session modal, sign-in or identity change. The 401 cause remains **unresolved**.

**T15 counts:** Check In / Check Out / Undo / Finish / Save / Create Form / record creation / editor Form / metadata unload / FormSync / generated script / direct SQL / browser JavaScript = **0**. Close Panel actions = **4** (Sql Columns 2; IDOs 1; Sql Tables 1). Open = 2 (IDOs; Sql Tables). Select Form OK = 2. Criterion entries = 2. F4 = 2. Caution alert OK = 1. Screenshots = 17 (`t15-01` to `t15-17`). Ref-not-found / timeouts = 0. Session Expired / sign-in / portal navigation = 0. Designer tabs 0–2 not selected or touched.

**Open items (T16):** the cumulative action audit (AC-9), the final acceptance matrix (AC-1 to AC-10) with passed, failed and qualified status, and the repository change inventory for operator review. Decimal precision at database-catalogue level remains unverified. The 401 cause remains unresolved.

## T16 — final cumulative audit and acceptance matrix (documentation only; COMPLETE; AC-3 pending operator disposition)

Worker session `307d32ce-4432-4097-9d8a-2de56fad8cf6` · task_message_id `e6a111c6-49c6-4a3d-9dcd-e716ce04b7b9` · cycle 22. Full detail: `evidence/EXP-134/T16-checkpoint.md` (matrix, cumulative ledger, deviation disposition, runtime errors, repository inventory, limitations, operator handoff).

| AC | Status | Basis and qualification |
|---|---|---|
| AC-1 | passed | Identity, DEFAULT configuration, User-scope Designer footer and the single existing project observed before the wizard (T4, T5, T6). The Designer scope dialog did not appear on the relaunched tab 0; scope rests on the footer |
| AC-2 | passed | Both exact-name absence results observed in T4 before the wizard (IDOs zero rows; Sql Tables placeholder only). Qualified: no pre-creation same-session positive control (EXP-049 had one). The placeholder interpretation is the operator-approved one. Post-creation exact-name queries returned the object |
| AC-3 | **pending** | Six rows, project, IDO name, alias, precision 2 and blank Property Class and Label String ID all read back before Finish (T9, T10). Physical table name not displayed before Finish (operator-retained; same as EXP-040 T8). Required on FX_Item only, a deliberate deviation from EXP-130 (all six Required) that the operator approved before Finish. Keep pending until the operator dispositions these |
| AC-4 | passed | Controller: one Finish, one Create Form "No", one wizard Close (T11). Native text `Table and IDO created.` observed (`t11-03`). No duplicate creation (IDO 1 of 1; Sql Tables 1 row) |
| AC-5 | passed | IDO readback (T12, re-observed T14, T15): exact name, project `FX_HelloWorldProject01`, base table, alias `fxinv`, six business properties and seven framework rows. UI limits: no IDO-level Decimal precision column; PK shown as Key Sequence |
| AC-6 | passed | Sql Tables and Sql Columns readback (T13, re-observed T15): `dbo.FX_InventoryItems`, PK and RowPointer index, six business columns with the specified types and lengths, decimal positions 2. Mongoose SQL-metadata UI only; no database catalogue query |
| AC-7 | passed | One controller-recorded Check In (T14). Revision 1 → 2; Locked By cleared; Check Out enabled after reopen. Qualified: source-control integration disabled, so only the Mongoose checkout was released |
| AC-8 | passed | Single pre-close and post-reopen pair per Form (T15) with matched baselines and exact-name F4 readbacks. Qualified: same-session UI recovery only; Properties rows 9–11 not re-read visually; no cross-session or database verification |
| AC-9 | passed | Controller counts agree with the worker ledger (see checkpoint section 4): Finish 1; Create Form No 1, Yes 0; wizard Close 1; wizard launch 1; Check In 1; Save 0; Check Out and Undo 0; unload, FormSync, generated script and deploy 0; Property Class lookup 0; Escape in the wizard 0. The 37 typed-entry flags are criteria, filters, wizard fields and one portal search. The T7 guard fault has no written operator acknowledgement (see below) |
| AC-10 | passed | Evidence package complete (checkpoints, PNGs, snapshots, controller audits). The repository inventory is in the T16 checkpoint section 7. Git confinement and the full diff remain the operator's review (no git command run) |

**Audit findings (T16):**

- **Controller records read.** `harness-audit-T7.md`, `T11.md` and `T14.md` were read in full. The other twelve were read through targeted searches (summary lines, key presses, mutation-class clicks, timeouts and errors). Their summary counts are in the checkpoint. Controller error entries total 14: 9 tool-side read or search path errors, 2 T1 timeouts (Session Expired OK, and a full-page screenshot), 3 stale refs (T4 `f1e22`, T8 `e559` and `e881`).
- **Maintenance Form operations (controller).** IDOs closed twice (T12 freshness, T15 pair); Sql Tables closed twice (T13 freshness, T15 pair); Sql Columns closed twice (both in T15). Select Form opens 10; exact-name F4 queries 10; caution alerts 4.
- **Deviations and recoveries.** Section 5 of the checkpoint lists 20 items with disposition. Two need operator attention: (a) the T7 harness guard fault (after the row 2 Data Type Open click) had no written operator disposition; the coordinator dispatched T8, which resolved the dropdown. The controller shows no unrecorded action in between, but the operator should acknowledge the disposition explicitly. (b) The T1 Session Expired OK timed out and was not repeated; T2 recovered the session once with the authorised portal navigation.
- **Runtime errors (unresolved, not asserted harmless).** Permissions-Policy `unload` notices (from T10); HTTP 401 at `yggdrasil…/security/refresh` (from T12, recurring to T15; two `Token expired` INFO lines in T14); HTTP 400 on Designer endpoints (T15 log, not tagged to a tab). The maintenance operations completed and read back correctly; the causes are not established.
- **Documentation-read gaps.** EXP-049 and EXP-071-R2 were searched by content in T16, not read in full (EXP-049 lines 303–356 never read by any EXP-134 task). EXP-039 was not read in T16. The T7 greps of EXP-040 and EXP-049 failed on guessed paths; the T14 greps of EXP-049 failed the same way. The T15 record did not re-read EXP-049 or EXP-071-R2.
- **Evidence inconsistencies (recorded, not replaced).** `t1-13`: the first capture attempt timed out and was not saved; the file `t1-13-session-expired-modal-state.png` exists. `t2-07` was overwritten (the Escape result is in text only). T2 hover element described as "pencil" in the audit and as the wrench in the checkpoint. Several checkpoints use abbreviated `page-…` snapshot names. IDO Revision Date is 10/25/2026 against a 2026-10-26 record date (probably a UTC offset; not verified).

**Limitations carried into the disposition:** no database catalogue verification (direct SQL prohibited); no IDO-level Decimal precision; the physical table name was confirmed only after creation; no pre-creation positive control; same-session UI recovery only; source control disabled; the IDO's Label String ID and Caption `oFX_InventoryItems` were populated automatically, and whether the wizard created a matching string resource is **not verified**; no post-creation Forms-list readback for `FX_InventoryItems` (the Create Form "No" is the evidence); no unfiltered Sql Tables listing to rule out a blank-name row from the abandoned placeholder (no Save was clicked); tenant-wide visibility was not tested from a second user.

**Current application state (last observed T15; no browser action in T16):** IDO `FX_InventoryItems` under `FX_HelloWorldProject01`, Revision 2, checked in (Locked By blank, Check Out enabled), base table `FX_InventoryItems`, alias `fxinv`, six business properties and seven framework rows. SQL table `dbo.FX_InventoryItems` with `PK_FX_InventoryItems` on FX_Item, `IX_FX_InventoryItems_RowPointer` and 13 columns (Mongoose metadata UI). No Form, record, Property Class or editor Form created. Browser end-state items: tab 2 stale Designer may still show the T3 server-event alertdialog; tab 0 Designer shows the unmodified vendor IdoProjects Form; tab 1 Designer shows FX_LoginPortal and FX_BridgeTest (untouched since T5); tab 3 Web Client holds the IDO Projects, IDOs and Sql Tables panels.

**Recommended disposition (operator):** (1) AC-3: accept the table-name limitation and the Required-flag deviation to set it passed, or keep it pending. (2) AC-2: accept the placeholder interpretation and the absence of a pre-creation control, or request a new bounded positive-control task. (3) AC-5 to AC-8: accept as UI-level, qualified. (4) AC-9 and AC-10: accept from the documented evidence; operator git review remains separate. (5) Decide whether to check the `oFX_InventoryItems` string resource, take a Forms-list readback, and close the stale tab 2 Designer. **EXP-134 can be declared complete with operator-accepted qualifications once AC-3 has an operator disposition.** It is not unconditionally accepted by this worker, and EXP-135 has not been started.

## Document change record

- Created `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` (this record; T1).
- Created `evidence/EXP-134/` screenshots `t1-01` to `t1-13` and `evidence/EXP-134/T1-checkpoint.md`.
- T2: created `evidence/EXP-134/T2-checkpoint.md` and screenshots `evidence/EXP-134/t2-01` to `t2-07` (PNG); updated this record (T2 status line, T2 section, knowledge rows, this change record).
- T3: created `evidence/EXP-134/T3-checkpoint.md` and `evidence/EXP-134/t3-01-webclient-tab3-identity-config-explorer.png`; updated this record (T3 status line, T3 section, this change record).
- T4: created `evidence/EXP-134/T4-checkpoint.md` and `evidence/EXP-134/t4-01` to `t4-09` (PNG); updated this record (T4 status line, T4 section, this change record).
- T5: created `evidence/EXP-134/T5-checkpoint.md` and `evidence/EXP-134/t5-01` to `t5-06` (PNG); updated this record (T5 status line, T5 section including the skipped-probe deviation, this change record).
- T6: created `evidence/EXP-134/T6-checkpoint.md` and `evidence/EXP-134/t6-01` to `t6-06` (PNG); updated this record (T6 status line, T6 section, this change record). The browser-tool snapshot and console files under `evidence/playwright/` are tool-written, not worker-authored.
- T7: created `evidence/EXP-134/T7-checkpoint.md` and `evidence/EXP-134/t7-01`, `t7-02` (PNG); updated this record (T7 section, this change record). Stopped at a harness guard blocker with row 2 Data Type dropdown state unknown.
- T8: created `evidence/EXP-134/T8-checkpoint.md` and `evidence/EXP-134/t8-01`, `t8-02` (PNG); updated this record (T8 status line, T8 section, this change record). Stopped at a second stale-ref event with row 4 Decimal Precision uncommitted; wizard open on page 1; Finish not invoked.
- T9: created `evidence/EXP-134/T9-checkpoint.md`, screenshots `evidence/EXP-134/t9-01`, `t9-03`, `t9-06`, `t9-10`, `t9-18`, `t9-27`, `t9-28`, `t9-29` (PNG), and snapshot files `t9-02`, `t9-04`, `t9-05`, `t9-07` to `t9-09`, `t9-11` to `t9-17`, `t9-19` to `t9-26` (YAML); updated this record (current status line, T9 section, this change record). Wizard left open on page 1 with six rows; Finish not invoked.
- T10: created `evidence/EXP-134/T10-checkpoint.md`, screenshots `evidence/EXP-134/t10-01`, `t10-04`, `t10-06` (PNG), snapshot files `t10-02`, `t10-03`, `t10-05` (YAML), and console log `t10-07-console-errors-readonly.log`; updated this record (current status line, prior T9 status line, T10 section, this change record). Next once to page 2; Finish not invoked; wizard left open on page 2.
- T11: created `evidence/EXP-134/T11-checkpoint.md` and screenshots `evidence/EXP-134/t11-01` to `t11-04` (PNG); updated this record (current status line, prior T10 status line, T11 section, this change record). One Finish, one No to Create Form, one native wizard Close; no post-creation readback performed.
- T12: created `evidence/EXP-134/T12-checkpoint.md` and screenshots `evidence/EXP-134/t12-01` to `t12-03` (PNG); updated this record (current status line, prior T11 status line, T12 section, this change record). IDOs panel closed once and reopened once (freshness step); one F4 query; no check-in, no Finish.
- T13: created `evidence/EXP-134/T13-checkpoint.md`, screenshots `evidence/EXP-134/t13-01` to `t13-05` (PNG), and snapshot `evidence/EXP-134/t13-06-sqlcolumns-final-readback-snapshot.yml`; updated this record (current status line, prior T12 status line, T13 section, this change record). Sql Tables panel closed once and reopened once; one exact-name F4 query on Sql Tables; Sql Columns opened once and read; no check-in, no Finish, no Save.
- T14: created `evidence/EXP-134/T14-checkpoint.md` and screenshots `evidence/EXP-134/t14-01-idos-pre-checkin-checkout-state.png`, `t14-02-post-checkin-idos-checked-in-state.png`, and snapshots `t14-00-idos-panel-fresh-snapshot.yml`, `t14-02-post-checkin-fresh-snapshot.yml`; updated this record (current status line, prior T13 status line, T14 section, this change record). One Check In on `FX_InventoryItems`; the source-control notice dismissed once; no Finish, no Save, no close/reopen.
- T15: created `evidence/EXP-134/T15-checkpoint.md` and screenshots `evidence/EXP-134/t15-01` to `t15-17` (PNG); updated this record (current status line, prior T14 status line, T15 section, this change record). Sql Columns, IDOs and Sql Tables panels each closed through their native Close Panel; IDOs and Sql Tables reopened once each with one exact-name F4 query each; Sql Columns opened once for readback. No check-in, Finish, Save or record action.
- T16: created `evidence/EXP-134/T16-checkpoint.md`; updated this record (current status line, prior T15 status line, T16 section, this change record). Documentation only: no browser action, Mongoose mutation, git command or new experiment. Controller audit files `evidence/EXP-134/harness-audit-T1.md` to `T15.md` were read, not modified.
- No other repository file was edited by the worker.
