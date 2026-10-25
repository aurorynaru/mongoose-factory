# EXP-135 — FX_InventoryEditor Creation and Three Test Inventory Records

**Current status (after T12, run R-20261026-051803-zOUZ, cycle 15): observed complete at the Web Client UI level, pending operator acceptance review. EXP-135 is NOT accepted.** The runtime Form was closed once (clean) and reopened once through Select Form by exact name. One Refresh returned exactly three unstarred committed rows, FX-ITEM-001, FX-ITEM-002, and FX-ITEM-003, and all 18 business-field values matched the brief. Save stayed disabled, and no dialog appeared. The final acceptance matrix, action audit, mutation inventory, and recovery accounting are in `evidence/EXP-135/final-audit-acceptance-matrix.md`. The T12 readback is in `evidence/EXP-135/t12-runtime-close-reopen-readback.md`. Limitations: the readbacks are one-session UI reads, not database-level, not cross-session, and not replay. The AC-2 property types are carried forward from EXP-134 by operator decision. The Caption Save was an operator-authorized AC-6 exception. These items remain unresolved: the "global object(s)" save-notification identity, the origin of the T5 full-text-index prompt (not applied), the origin of the T9 beforeunload dialog, and the console errors and warnings (15 and 10, not investigated).

**Earlier status (after T11, run R-20261026-051803-zOUZ, cycle 14): all three records committed at the Web Client UI level, each with one Save.** Record 2 (FX-ITEM-002) and record 3 (FX-ITEM-003) were entered one at a time, each with one New, one Save, and one Refresh readback. After the record-3 Refresh the runtime shows exactly three unstarred rows (`(Object 1 of 3)`), each with six exact values, Save disabled. Record 2 was verified before record 3 began. The runtime Form is left open and clean. No runtime close or reopen has occurred. The readbacks are same-session UI only, not database-level. AC-8 is supported at UI level. AC-9 (runtime close and reopen, 18 values) and the final AC-10 audit remain for T12. EXP-135 is **not** accepted. Details: `## T11 — Records 2 and 3 runtime entry and committed readbacks` below and `evidence/EXP-135/t11-records2-3-runtime-commit.md`.

**Earlier status (after T10, run R-20261026-051803-zOUZ, cycle 13): record 1 (FX-ITEM-001) committed at the Web Client UI level, with one Save.** The six fields were mapped to their properties before typing (Find Value In Collection preselection). One toolbar Save, no retry. One Refresh read back exactly one row with all six exact values (`FX test widget` / `FX-LOC-01` / `120.00` / `20.00` / `FX-WH-A` / `FX-ITEM-001`), Save disabled, `(Object 1 of 1)`. The runtime is left open and clean. Records 2 and 3 are not started, and no runtime close/reopen has occurred. The readback is same-session UI only, not database-level. AC-8 (full three-record set), AC-9, and AC-10 are not evaluated. EXP-135 is **not** accepted. Details: `## T10 — Record 1 runtime entry and committed readback` below and `evidence/EXP-135/t10-record1-runtime-commit.md`.

**Earlier status (after T9, run R-20261026-051803-zOUZ, cycle 12): zero-row runtime gate PASSED with a stated limitation.** After one authorized Portal navigation (three clean system panels closed as the operator allowed) and a fresh Mongoose launch, FX_InventoryEditor was listed by exact name (positive control FX_HelloWorld01 listed too). It was opened once and refreshed once. The only grid row is the uncommitted add-mode placeholder (starred, blank); no committed record was returned. The Form is left open and clean in the Web Client tab 3. No New, field entry, Save, insertion, or runtime close/reopen. The T8 "not listed" result is superseded: the T8 list was stale. AC-8 to AC-10 are not evaluated. EXP-135 is **not** accepted. Details: `## T9 — Portal navigation, runtime open, zero-row gate` below and `evidence/EXP-135/t9-runtime-open-zero-row-gate.md`.

**Earlier status (after T8, run R-20261026-051803-zOUZ, cycle 10): BLOCKED before runtime open. FX_InventoryEditor is not listed in the Web Client Select Form list.** The runtime open was attempted once through Select Form (toolbar Open). Exact-name lookup `FX_InventoryEditor` returned 0 rows, and the `FX_` prefix list (which includes the control FX_HelloWorld01) did not include it. The dialog was cancelled. No Form was opened, no Refresh, no record, no Finish, no Designer action. The zero-row gate (AC-3/AC-7) is not evaluated, and AC-8 to AC-10 are not evaluated. The Designer state from T7 is unchanged and was not inspected in T8. Likely cause (unverified): the Web Client Form list is cached from before creation, and EXP-002 found a Designer-created Form only after a full portal page reload. Resolving this needs a separate authorization for a reload or a fresh session, and the Form's server-side persistence is not yet separately confirmed. EXP-135 is **not** accepted. Details: `## T8 — Runtime open attempt (blocked)` below and `evidence/EXP-135/t8-runtime-open-blocked-not-in-select-form.md`.

**Earlier status (after T7, run R-20261026-051803-zOUZ, cycle 9): Designer close/reopen readback PASSED (AC-5 and AC-6 supported in this Designer session).** One Form-tab close (clean, no prompt) and one reopen through Form menu > recent forms (`FX_InventoryEditor`) recovered the same User-scoped version: Name and Caption `FX_InventoryEditor`, Primary Collection `FX_InventoryItems`, grid `FormCollectionGrid` with six GridColumns and six Edit/Static pairs bound to `object.FX_*`, Save and Undo disabled. The operator's AC-6 qualification stands: the one Caption-only Designer Save (T6) was operator-authorized, and the generic "global object(s)" save notification is unresolved as to additional object identity. AC-7 to AC-10 are not evaluated: no runtime open, no record inserts. EXP-135 is **not** accepted. Details: `## T7 — Designer close/reopen readback` below and `evidence/EXP-135/t7-designer-close-reopen-readback.md`.

**Earlier status (after T6, run R-20261026-051803-zOUZ, cycle 8): Caption corrected and saved once; close/reopen readback PENDING.** The Form-level Caption was committed to the exact value `FX_InventoryEditor` (label-cell commit, no Enter, no suggestion picked). One ordinary Designer Save was invoked and succeeded (save notification "Form [FX_InventoryEditor] and global object(s) were saved."; Save disabled afterwards). AC-5 is supported in-session; AC-6 is not met until one Designer close and one supported recent-forms reopen are read back. AC-7 to AC-10 are not evaluated. No runtime open, no record inserts, no Finish, no reopen. EXP-135 is **not** accepted. Details: `## T6 — Caption recovery and single Save` below and `evidence/EXP-135/t6-caption-recovery-and-single-save.md`.

**Earlier status (after T5, run R-20261026-051803-zOUZ, cycle 6): BLOCKED on the Caption correction. The Form-level Caption was committed to the WRONG value `ApplyFullTextIndexScriptQuestion` (a string-resource pick), the Designer is dirty (Save enabled), and NO Designer Save was invoked.** The operator-authorized AC-6 qualification (one Save for the Caption correction) is **not yet exercised**. A full-text-index script banner is pending and was not applied. Operator disposition required before any further Caption edit, Save, or close. EXP-135 is **not** accepted. Details: `## T5 — Caption correction (blocked)` below and `evidence/EXP-135/t5-caption-correction-blocked.md`.

**Earlier status (after T4, run R-20261026-051803-zOUZ, cycle 4, read-only): FX_InventoryEditor definition partly verified.** Bindings are observed: the grid has six GridColumns `object.FX_*`, and the Static/Edit pairs have six Edits `object.FX_*`, with primary collection `FX_InventoryItems`. **The Caption is still blank, so AC-5 is not met.** Setting it needs a Form-only edit and one ordinary Designer Save, which is a decision for the operator (T4 section). Save is disabled and no Caption, Save, close/reopen, runtime open, or record insertion has occurred. EXP-135 is **not** accepted. Details: `## T4 — Read-only definition verification` below and `evidence/EXP-135/t4-definition-readback.md`.

**Earlier status (after T3, cycle 3): FX_InventoryEditor CREATED by one wizard Finish.** The Form exists in User scope, bound to FX_InventoryItems with six FX_ properties included. Its Caption is blank, which the wizard does not set, so AC-5 is not yet met. Designer Save is disabled. Component bindings are not yet read. No Designer Save, close/reopen, runtime open, or record insertion has occurred. EXP-135 is **not** accepted. Details: `## T3 — Wizard creation` below and `evidence/EXP-135/t3-wizard-creation.md`.

**Earlier status (after T2, cycle 2): Designer isolation PASS.** The vendor IdoProjects Form was closed once from Designer tab 0 with no save; tab 0 now shows no Form, Save disabled, User scope footer. AC-2 IDO property types remain unresolved, so creation has not started. EXP-135 is **not** accepted. Details: `## T2 — Designer isolation` below and `evidence/EXP-135/t2-designer-isolation.md`.

**Earlier status (after T1, cycle 0): PAUSED at AC-2 (partial).** The Select Form collision gate passed for the visible inventory. The IDO property-type gate could not be run through a permitted read-only surface, so the experiment stopped before any application mutation. No Finish, no Form creation, no Designer Save, no runtime Form open, and no inventory record was created. AC-3 to AC-10 are not evaluated. EXP-135 is **not** accepted, and EXP-136 was not started. Details: `evidence/EXP-135/t1-preflight-gates.md`.

Date: 2026-10-26. Run: `R-20261026-051803-zOUZ` · task T1 · cycle 0 · worker session `219de60e-870c-44ef-baa5-e1d9b28d5593` · task_message_id `11afabaf-30bc-4d83-b3cf-eea4624b0d71`.
Mode: LEARNING MODE. FX_-only scope (AGENTS.md, 2026-10-10). Forms stay in User editing scope.
Brief commits: `3f48ba6` (draft), `9197f7c` (approved).
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Account header `anton.ramos@3mworks.com.ph`.

## Objective (brief, summarised)

Create one User-scope Classic Multi-View maintenance Form `FX_InventoryEditor` (Caption `FX_InventoryEditor`) bound to the existing IDO `FX_InventoryItems` (project `FX_HelloWorldProject01`), with a grid and Static/Edit pairs for six properties: FX_Item, FX_Description, FX_Warehouse, FX_QuantityOnHand, FX_ReorderLevel, FX_Location. Then, only after the Form checks pass, insert three fake records (FX-ITEM-001, -002, -003) through the Form's runtime, one Save each, and read them back after a runtime close and reopen.

## Sources read before any browser action

- `AGENTS.md`: full (LEARNING MODE; FX_ scope extension; safety; browser automation and recovery; evidence rules).
- `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md`: lines 300–335 (section 1 end, section 2 Forms, section 3 Components, section 4 Collections and IDO bindings). Sections 5–23 not read.
- `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md`: status header and T1–T9 read (lines 1–329 of 641). T10–T16 not read in T1. Qualifications taken from the header (AC-3 pre-Finish table-name visibility; Required flag on FX_Item only; SQL types at metadata-UI level; session recovery; relaunched Designer; one-off guard fault) and from commit `02883c2`.
- `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md`: first 447 lines read plus grep of wizard page, Save Template, and component-table lines (T3 to T5). Wizard route: Designer New → Form Wizard Selection → New Form, Classic, Multi-View, OK; page 1 (Name, Data Source, Form Type, Form Layout, Device Type); page 2 Properties — Primary Collection; page 3 property order and attributes; final page Save Template and Finish. Component table (T5): GridColumn and Static/Edit pairs bound to `object.<property>`.
- `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md`: first 493 lines read. Runtime behaviour: the Form opens in add mode and needs Refresh to load rows; Save toolbar; `(Object n of N)` status; Close Panel then Open → Select Form → OK (activate row) to reopen.
- `recipes/session/session-expiry-and-stale-designer.md`: full. Not edited.
- `recipes/forms/create-basic-form.md`: full (Build-from-Scratch route; Select Form OK activates a row, so use Cancel to close without opening). Not edited.

No prior EXP-135 record existed. This record was created in T1.

## T9 — Portal navigation, runtime open, zero-row gate (run R-20261026-051803-zOUZ, cycle 12, worker session `1a629cda-63d0-4073-9d1d-fdd83a6bd23b`)

Operator instruction (cycle 12): one authorized Portal navigation of tab 3, runtime discovery, and zero-row verification only. Detail: `evidence/EXP-135/t9-runtime-open-zero-row-gate.md`.

- **Pre-navigation (passed).** The three system panels were read for Save state: Sql Tables (Save and Update Current Table disabled), IDO Projects (Save disabled), IDOs (Save disabled); no dialogs. Panel tab headings were selected for the read; no edits. (`t9-01`)
- **Navigation (once).** Tab 3 navigated once to the operator Portal URL (`mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`). One `beforeunload` dialog (empty message) accepted once. The three system panels closed as anticipated. No application save or discard prompt.
- **Authentication.** No sign-in page; no session-expiry modal; **no recovery used**.
- **Portal and launch.** Portal banner (DistributionIFSContactUs) dismissed once. The click used the banner's accessible button, not a separate × control; the URL did not change. Navigation menu opened; search `Mongoose`; result Mongoose OS clicked once. Mongoose Web Client loaded (header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
- **Select Form.** Opened once. Positive control `FX_HelloWorld01`: 1 row. Target `FX_InventoryEditor` (Name, case-insensitive): **1 row**, Caption and Name `FX_InventoryEditor`. (`t9-03`) OK once. Cancel 0.
- **Runtime open.** Once. Tab heading `FX_InventoryEditor`; URL `favoriteContext=FX_InventoryEditor`. Before Refresh: starred blank row, `(Object 1 of 1)`.
- **Refresh (once).** After the Refresh: the same single starred blank row; six inputs blank; `(Object 1 of 1)`; Save disabled. (`t9-04`)
- **Zero-row reading.** The starred row is the add-mode placeholder. A committed row is not starred, and a committed row cannot have blank FX_Item (String 50 primary key, Required, EXP-134). EXP-042-R3 shows the same display for zero saved rows, and its post-Refresh state with committed rows lost the star. Recorded as **zero committed rows, observed in one session**.
- **Limitations.** The star is read from the screenshot; the grid columns are collapsed in the GridLeft layout; the FiP filter was not explicitly inspected; the `(Object 1 of 1)` count is not a record count; single session; not database-level; not cross-session.
- **Counts.** Navigation 1; beforeunload accepted 1; auth recovery 0; banner dismissal 1; Select Form open 1; OK 1; Cancel 0; runtime open 1; Refresh 1; New 0; field edits 0; runtime Saves 0; insertions 0; runtime close 0; runtime reopen 0; Designer tabs 0–2 not selected or saved; vendor or non-FX_ Form action 0; Finish 0; IDO or metadata action 0; worker-authored browser JavaScript 0.
- **Acceptance (T9).** AC-1 supported for the Web Client header after navigation (Designer footer not re-observed). AC-2 presence check: exact name listed once, positive control listed once (presence, not absence). AC-3 and AC-7 zero-row gate **supported with the limitation above**. AC-8 to AC-10 not evaluated.
- **T8 supersession.** The T8 "not listed" result was from a stale Select Form list. T9 shows the Form listed after a fresh Portal navigation and launch, which is consistent with the T8 stale-list hypothesis (one run; not separately proven) and observes that a fresh Web Client load lists the server-side Form (not database-level).
- **Next (separately authorized).** Record 1 (FX-ITEM-001). Do not start without a fresh authorization, a fresh snapshot, and confirmation that the runtime is still clean with zero committed rows.

## T12 — Runtime close/reopen readback and final audit (run R-20261026-051803-zOUZ, cycle 15, worker session `e66eac16-9efa-4e9d-acf5-dff12f4b7176`)

Operator instruction (cycle 15): the pre-close gate, one runtime close, one exact-name reopen, one fresh Refresh, read-only row readback, and the final audit. No New, edit, Save, insert, Designer action, or second close/reopen. Detail: `evidence/EXP-135/t12-runtime-close-reopen-readback.md`.

- **Pre-close gate (passed).** Tab 3 selected after one list. Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_InventoryEditor runtime; Save disabled; no dialog; `(Object 3 of 3)`; three unstarred rows with keys FX-ITEM-001, -002, -003. (`t12-01`)
- **Runtime close (once).** Form tab `Close Panel` clicked once. No prompt. Main area empty; toolbar disabled. (`evidence/playwright/page-2026-10-25T22-13-36-074Z.yml`)
- **Reopen (once).** Toolbar Open, Select Form filter `FX_InventoryEditor` (one row: Name and Caption `FX_InventoryEditor`). The row was activated by a click on its Name cell, then OK once. Reopened tab heading `FX_InventoryEditor`; before Refresh, one blank add-mode row, `(Object 1 of 1)`.
- **Fresh collection (one Refresh).** Three unstarred rows with six values each; `(Object 1 of 3)`; Save disabled; no placeholder row.
- **18-value readback.** FX-ITEM-001: `FX test widget` / `FX-LOC-01` / `120.00` / `20.00` / `FX-WH-A` / `FX-ITEM-001`. FX-ITEM-002: `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002`. FX-ITEM-003: `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`. All 18 values match exactly (row 1 from the post-Refresh snapshot and `t12-02`; rows 2 and 3 from the row-selected `t12-03` and `t12-04` and their snapshots). Stored-value comparisons: 8.00 is below 10.00 (FX-ITEM-002); 0.00 is below 5.00 (FX-ITEM-003). No dashboard status or colour logic exists or is claimed.
- **Final state.** Runtime Form open, clean, row 3 selected, Save disabled, no open dialog. Designer tabs 0–2 untouched; no vendor or non-FX_ Form action.
- **Counts (T12).** Runtime close 1; reopen 1 (Select Form OK); Refresh 1; Select Form row activation click 1; row-indicator selections 2; New 0; Save 0; edits 0; second close/reopen 0; Designer action 0; vendor or non-FX_ Form action 0; Finish 0; Portal navigation or reload 0; browser typing 0; worker-authored browser JavaScript 0; ref-not-found 0; recovery snapshots 0; session-expiry recovery 0. Screenshots 4 (`t12-01` to `t12-04`).
- **Cumulative (T1–T12, reconciled).** Wizard Finish 1. Designer ordinary Save 1 (Caption-only, operator-authorized, AC-6 exception). Designer close 1 and reopen 1. Runtime record Saves 3 (T10 1, T11 2). Runtime New 2 (T11). Runtime close 1 and reopen 1 (T12). Runtime Refresh 5 (T9 1, T10 1, T11 2, T12 1). Select Form opens 4 (T1 cancelled, T8 cancelled, T9 OK, T12 OK; the T11 cumulative line omitted T1's open). Committed FX_InventoryItems rows (UI level) 3.
- **Acceptance (T12).** AC-9 supported at UI level, one session. AC-10 supported with qualifications in `evidence/EXP-135/final-audit-acceptance-matrix.md`. The full AC-1 to AC-10 matrix is in that file, not repeated here.
- **Limitations.** One-session UI readback, not database-level, not cross-session, not replay. The grid's right-hand columns are hidden in GridLeft; rows 2 and 3 were read from the accessibility text and the row-selected detail. The console showed 15 errors and 10 warnings, not investigated.
- **Next.** No further worker action in EXP-135. Operator acceptance review is needed. Items for disposition: AC-2 property-type carry-forward (or a separate read-only IDO schema readback); the "global object(s)" save-notification identity; the T5 full-text-index prompt origin; the T9 beforeunload origin; the console errors and warnings; the `evidence/playwright/` ignore status for operator Git review.

## T11 — Records 2 and 3 runtime entry and committed readbacks (run R-20261026-051803-zOUZ, cycle 14, worker session `a1e18a23-ebab-4843-bff0-9d157fe188cb`)

Operator instruction (cycle 14): records 2 and 3 only, sequentially, with a verification gate between them. No runtime close or reopen (reserved for T12). Detail: `evidence/EXP-135/t11-records2-3-runtime-commit.md`.

- **Pre-task (passed).** Tab 3 selected after one list. Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_InventoryEditor runtime; Save disabled; `(Object 1 of 1)`; FX-ITEM-001 committed with six expected values. (`t11-01`)
- **Mapping.** The T10 mapping was reused (input 1 FX_Description, 2 FX_Location, 3 FX_QuantityOnHand, 4 FX_ReorderLevel, 5 FX_Warehouse, 6 FX_Item). The Find dialog was not re-run per input. The positional check and Refresh readback place each value in its expected column. Limitation recorded in the evidence file.
- **Record 2 (FX-ITEM-002).** New once: `(Object 2 of 2)`, row 1 unchanged. Six values entered: `FX test bracket` / `FX-LOC-02` / `8.00` / `10.00` / `FX-WH-A` / `FX-ITEM-002`. Pre-Save (`t11-02`) showed all six. Save once: Save disabled, star gone (`t11-03`). Refresh once: two unstarred rows, six values each, `(Object 1 of 2)` (`t11-04`). Row 2 detail (`t11-05`): six values, Save disabled, `(Object 2 of 2)`.
- **Record 3 (FX-ITEM-003).** Started only after record 2 passed. New once: `(Object 3 of 3)`, rows 1 and 2 unchanged. Six values entered: `FX test gasket` / `FX-LOC-03` / `0.00` / `5.00` / `FX-WH-B` / `FX-ITEM-003`. Pre-Save (`t11-06`) showed all six. Save once: Save disabled, star gone (`t11-07`). Refresh once: three unstarred rows, six values each, `(Object 1 of 3)` (`t11-08`). Row 3 detail (`t11-09`): six values, Save disabled, `(Object 3 of 3)`.
- **Committed state after T11.** Three distinct committed FX_Item keys: FX-ITEM-001, FX-ITEM-002, FX-ITEM-003. Numeric values as entered: 8.00 under 10.00 for FX-ITEM-002; 0.00 under 5.00 for FX-ITEM-003 (no status logic implemented or claimed).
- **Counts (T11).** Runtime New 2. Runtime Save 2 (one per record; no retry, no ambiguity). Runtime Refresh 2. Row-indicator selections 2 (read-only). Fills 12; Tab commits 12. Screenshots 9. Runtime close or reopen 0. Designer action 0. Vendor or non-FX_ Form action 0. Finish 0. SQL, IDO, FormSync, unload, Portal navigation or reload 0. Worker-authored browser JavaScript 0. Dialogs 0. Ref-not-found 0. Session-expiry recovery 0. Fresh-snapshot recovery allowance 0.
- **Cumulative counts, T1 to T11 (from prior records and this task).** Wizard Finish 1. Designer ordinary Save 1 (Caption-only, T6). Designer close and reopen 1 (T7). Vendor IdoProjects Form close without save 1 (T2). Select Form open 2 (T8 cancelled, T9 OK). Portal navigation 1 (T9). Runtime Form open 1 (T9). Runtime Refresh 4 (T9 1, T10 1, T11 2). Runtime New 2 (T11). Runtime successful record Saves 3 (T10 1, T11 2). Runtime close and reopen 0 (T12 to perform once). Committed FX_InventoryItems rows (UI level) 3.
- **Acceptance (T11).** AC-1 supported for this task. AC-8 supported at UI level for all three records (one Save each; six-value Refresh readback; no duplicate; no fourth record). AC-2, AC-3, AC-7 and AC-4 to AC-6 carried from earlier tasks. AC-9 not evaluated (T12). AC-10 partial (T12 final audit).
- **Limitations.** The readbacks are one-session collection reads after one Refresh per record; `(Object n of N)` is a UI count, not a database count. The grid right-hand columns are hidden in the GridLeft layout, so row-by-row values were read from the accessibility snapshot and the row detail screenshots. The Web Client console showed 15 errors and 10 warnings throughout, unchanged, not investigated.
- **Next (T12, separately authorized).** Runtime close once, reopen once, fresh supported collection retrieval (expect exactly three rows), six-value readback for each of 18 values, one grid overview, detail evidence, and the final AC-9 and AC-10 audit. The runtime is currently open, clean, with row 3 selected and Save disabled.

## T10 — Record 1 runtime entry and committed readback (run R-20261026-051803-zOUZ, cycle 13, worker session `e651b638-2862-4b1c-be7d-c6b4255f7ac1`)

Operator instruction (cycle 13): record 1 only (FX-ITEM-001). Detail: `evidence/EXP-135/t10-record1-runtime-commit.md`.

- **Pre-entry (passed).** Tab 3 selected after one list. Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_InventoryEditor runtime; Save disabled; `(Object 1 of 1)`; one blank starred placeholder; six blank inputs; no populated key. (`t10-01`)
- **Field mapping (verified before typing).** Each input was clicked, then Edit > Find Value In Collection read the preselected Property; each dialog closed with Cancel (no search). Input 1 = FX_Description; 2 = FX_Location; 3 = FX_QuantityOnHand; 4 = FX_ReorderLevel; 5 = FX_Warehouse; 6 (required `*`) = FX_Item. The mapping agrees with the T7 Designer Edit positions.
- **Entry.** Plain fills and Tab commits: `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`. No normalization. Pre-Save snapshot and `t10-02` show all six values exactly and Save enabled.
- **Save (once).** Toolbar Save clicked once. Post-Save: Save disabled, star gone, key greyed, `(Object 1 of 1)`, no alert or prompt. (`t10-03`) No retry; no ambiguity to resolve.
- **Committed readback (one Refresh).** One row with all six exact values; no star; Save disabled; `(Object 1 of 1)`. (`t10-04`) Same-session UI readback; not a database read.
- **Counts.** Runtime Saves 1 (record 1). New 0. Records 2–3 0. Runtime close/reopen 0. Refresh 1 (read). Edits or deletes of committed rows 0. Designer action 0. Vendor or non-FX_ Form action 0. Finish 0. SQL, IDO, FormSync, unload, Portal navigation or reload 0. Worker-authored browser JavaScript 0. Dialogs 0. Ref-not-found 0. Session-expiry recovery 0.
- **Acceptance (T10).** AC-1 supported for this task. AC-3/AC-7 zero-row state carried from T9 (re-observed as placeholder). AC-8 supported for record 1 at UI level only. AC-8 for records 2–3, AC-9, and AC-10 not evaluated.
- **Limitations.** The Refresh readback is one session and the UI status count is not a database count. The mapping relies on the Find-dialog preselection (EXP-042-R3 method); the focused-input link is inferred.
- **Next (separately authorized).** Record 2 (FX-ITEM-002) requires a fresh operator authorization and a fresh clean check of the runtime with one committed row. The runtime Form stays open and clean.

## T8 — Runtime open attempt (BLOCKED; run R-20261026-051803-zOUZ, cycle 10, worker session `1a629cda-63d0-4073-9d1d-fdd83a6bd23b`)

Operator instruction (cycle 10): runtime open and authoritative empty-data check only; no Designer, record, or vendor-Form action. Detail: `evidence/EXP-135/t8-runtime-open-blocked-not-in-select-form.md`.

- **Identity and session (passed).** Tab list, then tab 3 select. Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No Session Expired modal. (`t8-01`)
- **Prior open Forms (preserved).** IDO Projects, IDOs, and Sql Tables panels still present after the task. Sql Tables selected, showing `FX_InventoryItems` / `dbo` / PK `PK_FX_InventoryItems`. (`t8-01`, `t8-02`)
- **Select Form (opened once, via the toolbar Open button).** Filter `FX_InventoryEditor` (Name; Case Sensitive and Starts With unchecked; typed slowly, after Ctrl+A cleared the leftover `helloworld` filter). Result: **0 rows**, rechecked after a 3-second wait.
- **Positive control.** Filter `FX_` (same options). The grid reloaded with FX_ Forms, including `FX_HelloWorld01`. **FX_InventoryEditor was not in the list.** Its sorted slot (between FX_HelloWorld01 and FX_Items) is empty.
- **Cancel (once).** Dialog closed. No Form opened. (`t8-02`)
- **Not performed (by the T8 instruction).** No Form opened, no OK, no Refresh, no New or field entry, no record Save or insert, no runtime close or reopen, no portal reload or navigation, no Designer selection/save/close, no vendor Form action, no browser JavaScript (worker-authored), no Finish or wizard, no IDO or metadata action.
- **Counts.** Runtime Form opens 0; Select Form opens 1 (cancelled); Refresh 0; record inserts 0; Designer saves 0; navigations or reloads 0; ref-not-found errors 0; recovery 0; session expiry 0.
- **Acceptance (T8).** AC-1 identity and session supported for this task. AC-2 collision: exact-name lookup 0 rows and FX_ list without FX_InventoryEditor. The Form the runtime needs is not listed, so the route is blocked; the lookup is not treated as success. AC-3 and AC-7 not evaluated. AC-8 to AC-10 not evaluated.
- **Interpretation (unverified).** Probable stale Web Client Form list (loaded before the T3 creation). Precedent: EXP-002 found a Designer-created Form in Select Form only after a full portal page reload (`experiments/EXP-002-create-basic-form.md` lines 33–34, 63). The alternative, that the Form was not persisted server-side, is not excluded: the T6 save notification argues against it, but T7 readback was Designer-side only.
- **Blocker and decision needed.** (1) Operator authorization for one full portal page reload of tab 3 (or a fresh session) to refresh the Form list. A reload closes the three vendor panels in the Web Client; no data or Designer change results. (2) If it still does not appear after a reload, a server-side persistence check is needed (operator disposition). T9 (runtime open) must not start until the Form is listed by exact name, with the FX_HelloWorld01 positive control shown.
- **Next (separately authorized).** Runtime open of exactly FX_InventoryEditor, zero-row check, then the three inserts with one Save each (AC-7 to AC-10).

## T7 — Designer close/reopen readback (run R-20261026-051803-zOUZ, cycle 9, worker session `470ab126-901c-4b6b-8c09-ab242257308a`)

Operator instruction (cycle 9): verification only. Detail: `evidence/EXP-135/t7-designer-close-reopen-readback.md`.

- **Pre-close (clean).** Tab 0 with FX_InventoryEditor as the only Form; Name and Caption `FX_InventoryEditor`; Version `User version for user anton.ramos@3mworks.com.ph`; footer User scope; Save and Undo disabled. (`t7-01`)
- **Close (once).** Clicked the Form-tab close button. No prompt. Tab 0 shows no Form; Save greyed. (`t7-02`)
- **Reopen (once).** Form menu > recent forms > `FX_InventoryEditor` (the first recent entry). IDO Projects, a vendor Form, was not clicked. Reopened with URL `MGForm=FX_InventoryEditor`. (`t7-03`, `t7-04`)
- **Readback.** Primary Collection `FX_InventoryItems`. Grid `FormCollectionGrid`, six GridColumns bound to `object.FX_Description`, `object.FX_Location`, `object.FX_QuantityOnHand`, `object.FX_ReorderLevel`, `object.FX_Warehouse`, `object.FX_Item`. Six Edits, each paired with a Static (blank captions, accepted), bound to the same six properties. Save and Undo disabled after reopen. Caption `FX_InventoryEditor`. (`t7-05`, `t7-06`; bindings from accessibility text where the screenshot clips.)
- **View-only actions.** Expanded the collapsed Details panel, selected the Components tab, and expanded the component tree. No Form change.
- **Counts.** Designer ordinary Save 0 in T7 (single Save remains the T6 Caption save). Close 1. Reopen 1. Property edits 0. Finish 0. Runtime 0. Records 0. Vendor, non-FX_, tabs 1/2: 0. Database script 0. Worker-authored browser JavaScript 0. Ref-not-found 0.
- **Acceptance (T7).** AC-5 supported (Caption, IDO, grid, six bindings). AC-6 supported for this Designer session (close, reopen, clean state). AC-7 to AC-10 not evaluated.
- **Qualifications retained.** (1) Operator-authorized AC-6 qualification: the one Caption-only Designer Save in T6. (2) The T6 save notification's "global object(s)" wording is unresolved as to additional object identity; no unrelated object is inferred as changed. (3) Full-text index banner origin and disappearance remain unresolved; not clicked. (4) This is Designer-side persistence only, not cross-session durability and not replay.
- **Next (separately authorized).** Web Client runtime: open exactly FX_InventoryEditor, confirm zero rows, then three inserts with one Save each (AC-7 to AC-10). The reopened Designer tab 0 is left clean.

## T6 — Caption recovery and single Save (run R-20261026-051803-zOUZ, cycle 8, worker session `470ab126-901c-4b6b-8c09-ab242257308a`)

Operator-authorized (cycle 8): one Caption-only correction, one conditional ordinary Designer Save, and a no-save close fallback only if the correction failed. The correction succeeded, so the success branch ran; the fallback was not used. Detail: `evidence/EXP-135/t6-caption-recovery-and-single-save.md`.

- **Pre-edit (matched the inherited state).** Only Form loaded in Designer tab 0: FX_InventoryEditor, User scope footer `anton.ramos@3mworks.com.ph`. Caption `ApplyFullTextIndexScriptQuestion`; Save enabled; full-text index banner visible; six `object.FX_*` bindings and six Static/Edit pairs unchanged from T4. (`t6-01`)
- **Caption edit.** Clicked the Caption value cell (inline combobox opened), Control+A, typed the literal `FX_InventoryEditor` (uncommitted; `t6-02`), then committed by clicking the Caption label cell. No Enter, no resource suggestion. The committed Caption gridcell reads `FX_InventoryEditor` exactly and the banner was no longer visible. (`t6-03`)
- **Single ordinary Designer Save.** Invoked once. Result: save notification "Form [FX_InventoryEditor] and global object(s) were saved."; toolbar Save and Undo disabled. (`t6-04`)
- **Not performed (by design).** No Designer close, no reopen, no runtime open, no record insert, no Finish, no tabs 1 or 2, no vendor or non-FX_ Form, no database script, no banner click.
- **Counts.** Caption commits 1 (correct value); Enter 0; Designer Save 1 (succeeded); Designer close/reopen 0; Finish 0; runtime 0; records 0; banner clicks 0; component/binding/IDO edits 0; worker-authored browser JavaScript 0.
- **Acceptance (T6).** AC-5 supported in-session (Caption exact; bindings unchanged from T4); not yet confirmed after close/reopen. AC-6 not met (close/reopen pending). AC-7 to AC-10 not evaluated.
- **Limitations.** The save notification's "global object(s)" wording is generic; the included global objects were not identified. The full-text index banner's disappearance was not explained. The T5 wrong value was never saved and was superseded before any save. The "No object name given." alert did not recur because the Edit Property Dialog button was not used.
- **Next (separately authorized).** One ordinary Designer close of the clean FX_InventoryEditor tab and one supported recent-forms reopen; read back Caption, bound IDO, grid, six bindings, User scope, and Save disabled. Runtime work waits for that readback.

## T5 — Caption correction (BLOCKED; run R-20261026-051803-zOUZ, cycle 6, worker session `5be699f8-f84b-49a5-a525-89738db9be1b`)

Operator-authorized AC-6 qualification (cycle 6): the wizard originally left the Form clean, but one ordinary Designer Save was authorized for the required Caption correction. **That Save was not performed.** Detail: `evidence/EXP-135/t5-caption-correction-blocked.md`.

- **Pre-edit (passed).** Only Form loaded: FX_InventoryEditor (tab 0). Version `User version for user anton.ramos@3mworks.com.ph`; footer User scope. Name `FX_InventoryEditor`; Caption blank; Save disabled. (`t5-01`)
- **Attempt 1 (no edit).** Caption "Open Edit Property Dialog" button → alert "No object name given." OK dismissed once. Caption unchanged; Save disabled. (`t5-02`)
- **Attempt 2 (wrong commit).** Caption value cell opened a dropdown of string-resource IDs (`FX_InventoryEditor` not among the options). Typed the literal `FX_InventoryEditor` (uncommitted; displayed correctly in `t5-04`), then pressed Enter once. **Result: the Caption committed `ApplyFullTextIndexScriptQuestion`** (the first highlighted dropdown option). Save became enabled. (`t5-05`)
- **Unexplained banner (not applied).** "The system has identified a script that will create a full-text index on a selected number of tables. Do you want to apply the script?" Not clicked (it would run a DB-level script, out of scope).
- **Stopped.** No second Caption edit, no Save, no close/reopen, no runtime, no records, no tabs 1/2, no vendor Form. Per brief: a wrong commit plus an unexplained prompt is a stop, not a retry.
- **Counts.** Caption commits 1 (wrong value); Designer ordinary Save **0**; close/reopen 0; Finish 0; runtime 0; records 0; vendor/non-FX_ 0; component/binding/collection/IDO edits 0; recovery snapshots/finds: oversize outputs 2 (no state change), ref-not-found 0.
- **Limitation.** The value-cell click used a generic locator (`.mg-arrow-cell-icon` first match). The opened dropdown is the Caption editor, but the element was not selected by ref.
- **Acceptance (T5).** AC-5 Caption **not met** (wrong value committed, bindings unchanged from T4). AC-6 **not evaluated** (no Save; Designer dirty). AC-7 to AC-10 not evaluated.
- **Next (operator disposition).** Options in the evidence file: (1) authorize a second Caption commit with a corrected value, then one Save; (2) authorize a discard of the pending change (close without save) and re-verify clean state; (3) decide on the full-text index banner (must not be applied in this experiment). Do not Save the current state.

## T4 — Read-only definition verification (run R-20261026-051803-zOUZ, cycle 4, worker session `5be699f8-f84b-49a5-a525-89738db9be1b`)

Scope: read-only Designer inspection of tab 0 (`FX_InventoryEditor`, User scope). Detail: `evidence/EXP-135/t4-definition-readback.md`.

- **Carry-forward review (EXP-134).** T12 (lines 453–482) explicitly records IDO `FX_InventoryItems`, project `FX_HelloWorldProject01`, alias `fxinv`, and the six business properties with types (FX_Item String 50 key 1 Required; FX_Description String 255; FX_Warehouse String 100; FX_QuantityOnHand and FX_ReorderLevel Decimal 12; FX_Location String 100). T13 gives SQL `decimal(12,2)`. The types and project membership are **carried forward** (operator decision, cycle 2), not re-observed in EXP-135. The six names were re-observed on the EXP-135 wizard (T3).
- **Identity and scope.** Tab 0 shows `FX_InventoryEditor`, Version `User version for user anton.ramos@3mworks.com.ph`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save disabled (`find` result).
- **Collection.** Details > Collections: `Primary Collection: FX_InventoryItems`.
- **Grid.** `FormCollectionGrid` (Grid, Data Source `objects`, Pane 0, Tab 0), six GridColumns: `FX_ItemGridCol` → `object.FX_Item`; `FX_DescriptionGridCol` → `object.FX_Description`; `FX_WarehouseGridCol` → `object.FX_Warehouse`; `FX_QuantityOnHandGridCol` → `object.FX_QuantityOnHand`; `FX_ReorderLevelGridCol` → `object.FX_ReorderLevel`; `FX_LocationGridCol` → `object.FX_Location`. **Met.**
- **Static/Edit pairs.** Pane 1, Tabs 7–18: six Edits `FX_<Prop>Edit` → `object.FX_<Prop>`, one per business property, each paired with a Static `FX_<Prop>Static` with no data binding. **Met.** The wizard-generated pattern matches EXP-041-R3 (`experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` lines 569–582).
- **Caption.** Form Caption **blank**. The Static caption of `FX_ItemStatic` is also blank (sampled; the other five were not read individually; all six labels appear blank on the canvas). EXP-041-R3 line 835 records the same blank-caption pattern as observed without a known cause. **AC-5 Caption not met.**
- **Caption / Save conflict (operator disposition).** The wizard left the Form clean. A Caption edit would need one ordinary Designer Save. AC-6 permits zero Saves if the Form is clean and one only if the wizard left permitted unsaved changes. T4 did not edit the Caption. Recommendation: authorize exactly one Caption-only Designer Save on FX_InventoryEditor. The blank Static labels are outside the stated ACs and should be recorded, not fixed here.
- **Counts (T4).** Tab list 1; tab select 1 (succeeded); fresh snapshots 6; targeted finds 5; UI-state clicks 4 (Details expand, Components tab, tree expand, one Static row selection); Caption or component edit 0; ordinary Designer Save 0; close/reopen 0; Finish 0; wizard 0; runtime open 0; record inserts 0; vendor/non-FX_ Form 0; Designer tabs 1–2 0; Web Client tab 3 0; prohibited application actions 0.
- **Acceptance (T4 scope).** AC-5 partial (bindings met; Caption not met). AC-1 and AC-2 partial (carried). AC-4 carried from T3. AC-6 to AC-10 not evaluated.
- **Next permitted action.** Operator disposition on the Caption Save (section Caption / Save conflict). Then the Designer save/close/reopen (AC-6) if authorized. The runtime steps wait for AC-6.

## T3 — Wizard creation (run R-20261026-051803-zOUZ, cycle 3, worker session `affb961f-8cd1-434c-90c8-e3b993b1da6a`)

Operator decision (cycle 2): EXP-134 T10/T12 readbacks accepted as the FX_InventoryItems schema evidence. Vendor IDOs Form not opened. Name-collision result from T1 not repeated (no session expiry or material change).

- **Route:** Designer New → Form Wizard Selection (New Form; Category `Classic`; Wizard `MultiView`) → OK. Page 1: Name `FX_InventoryEditor` (one plain fill); Form Type `MultiView`; Layout `GridLeft`; Device `Default`; Data Source `FX_InventoryItems`. Next → page 2 (six FX_ properties already in the Primary Collection list). Next → page 3 (six rows, Include checked, Caption cells blank). Next → final page (Save Template checked; unchecked by one label click).
- **Pre-Finish:** all brief settings matched (`t3-05`). Save Template unchecked. Scope footer User.
- **Finish:** invoked **once**. Result: `Process Completed Successfully`; OK acknowledged once. Designer opened `FX_InventoryEditor` (`MGForm=FX_InventoryEditor`).
- **Post-Finish (`t3-06`):** Properties Name `FX_InventoryEditor`; **Caption blank**; Version `User version for us…`; Form Type `Normal`. Canvas shows a grid and six label/edit pairs (binding names not read). Save **disabled** (clean). Footer User scope.
- **Counts:** Finish 1; Designer ordinary Save 0; close/reopen 0; runtime open 0; records 0; vendor or non-FX_ Form interaction 0; Designer tabs 1/2 untouched; Web Client untouched; prohibited application actions 0; ref errors, timeouts, and session expiry 0.
- **Open for the next task:** (a) Caption `FX_InventoryEditor` (a Form-only Properties edit; needs one ordinary Designer Save, which AC-6 permits); (b) read the six Static/Edit and grid bindings (AC-5); (c) close/reopen (AC-6) and runtime work only afterwards.
- **Supports:** AC-4 (pre-Finish configuration and one Finish with the intended Form created). **Does not support:** AC-5 (Caption blank; bindings not read), AC-6, AC-7 to AC-10.

## T2 — Designer isolation (run R-20261026-051803-zOUZ, cycle 2, worker session `affb961f-8cd1-434c-90c8-e3b993b1da6a`)

Operator authorization (T2 bounded instruction): one ordinary close of the clean vendor IdoProjects Form on Designer tab 0 with no save, or use an already-empty User-scope Designer after a liveness probe. No wizard, Finish, Designer Save, IDO inspection through vendor Forms, or record creation in T2.

- **Pre-close (tab 0):** Form `IdoProjects` (Caption `fIDOProjects`, Version `Vendor Default version`), Save disabled, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, no prompt. `t2-01-designer-tab0-pre-close-idoprojects.png`.
- **Route:** the Form-tab close control (`closable IDO Projects`), invoked once. No Save, Revert, Delete, or Edit-menu probe. No save/discard prompt appeared.
- **Post-close (tab 0):** Form tablist empty, canvas blank, Properties empty, Save disabled, footer still User scope for `anton.ramos@3mworks.com.ph`, no prompt. `t2-02-designer-tab0-post-close.png`.
- **Not touched:** Designer tabs 1 and 2 (not selected or inspected; their Form contents remain unknown); Web Client tab 3.
- **Counts:** Designer Form close 1; Save, Revert, Delete, wizard, Finish, record, SQL, FormSync, unload, and browser-JavaScript actions 0; prohibited actions 0; ref errors, timeouts, and session expiry 0.
- **Supports:** the Designer-isolation precondition for the next task. **Does not support:** AC-2 property types, AC-3 to AC-10, or any claim about tabs 1 and 2.

## Gates (T1)

| Gate | Result | Evidence |
|---|---|---|
| AC-1 account, User scope, configuration, session, baseline | **PASS-LIMITED** (see `evidence/EXP-135/t1-preflight-gates.md`) | `t1-01` (header), `t1-02` (Designer footer), snapshots |
| AC-2 collision (Select Form, Name filter) | **PASS for the visible inventory.** Exact `FX_InventoryEditor` → 0 rows; infix `inventoryeditor` → 0 rows; positive controls `FX_HelloWorld01` exact (C1) and `helloworld` lowercase infix (C3) → 1 row each | Dialog snapshot excerpts in the T1 evidence file |
| AC-2 IDO property types (six properties, types, PK, alias) | **NOT SUPPORTED by a permitted surface — PAUSE.** The only surface showing IDO property types is the vendor IDOs Form, which the brief forbids opening. The Form wizard lists names only. The Sql Tables Form (already open) shows the table `FX_InventoryItems`, `dbo`, PK `PK_FX_InventoryItems` on FX_Item; its Columns dialog was not opened | `t1-02`, Sql Tables snapshot; EXP-134 readback carried forward, not re-read |
| AC-3 zero-row data state | Not evaluated (runtime read follows creation) | — |

## Blocker and operator decisions required

1. **AC-2 property types.** A permitted read-only surface for the six types is not available. Options: (a) authorize one read-only view of the already-open IDOs tab (no edit, no save, no close) as an explicit exception to the non-FX_ rule for this gate; (b) accept the EXP-134 T12/T13 readback as AC-2 type evidence, carried forward and not re-read; (c) other.
2. **Designer tab 0 holds a non-FX_ Form.** The vendor IdoProjects Form is loaded there (Save greyed; footer User scope). The brief forbids saving a Designer session while a non-FX_ Form is loaded and forbids closing unrelated Forms. A wizard-created FX_ Form opened in that Designer would share the session with it. Options: (a) the operator closes that clean vendor tab, or relaunches a fresh User-scope Designer with no non-FX_ Form before the wizard; (b) authorize one ordinary close of that clean vendor tab, with no save.

Once these are decided, the next bounded task can resume at the AC-2 gate and proceed through the wizard route (one Finish; pre-Finish checks on Caption, six property rows, User scope, Save Template unchecked).

## Action inventory (T1)

- Finish / wizard launch / wizard page actions: **0**. Form open / close / reopen: **0**. Designer Save / New / Copy / Delete / Regenerate / Designer click: **0**.
- Select Form dialog: opened **1**; filter queries **5** (C1, T1, T2, C2, C3); Cancel **1**; OK **0**.
- Create Form / table / IDO / IDO project / property / global object / script: **0**.
- Records inserted, edited, or deleted: **0**.
- Metadata unload / FormSync / deployment / direct SQL: **0**.
- Browser JavaScript, evaluate, run-code (worker-authored): **0**.
- Session Expired modal, navigation, sign-in, credential entry: **0**.
- Recovery: no Ref error, no timeout, no recovery snapshot.
- Screenshots: 2 (`t1-01`, `t1-02`).

## Mutation inventory

None. No application object or data was created, changed, saved, or deleted in T1.

## Acceptance matrix (T1)

| AC | Status | Evidence |
|---|---|---|
| AC-1 | PASS-LIMITED | `t1-01`, `t1-02`, T1 evidence file |
| AC-2 | PARTIAL — PAUSED (collision PASS; types NOT SUPPORTED by a permitted surface) | T1 evidence file (dialog snapshots); `t1-02` |
| AC-3 | Not evaluated | — |
| AC-4 | Not evaluated (no Finish) | — |
| AC-5 | Not evaluated | — |
| AC-6 | Not evaluated | — |
| AC-7 | Not evaluated | — |
| AC-8 | Not evaluated | — |
| AC-9 | Not evaluated | — |
| AC-10 | Not evaluated (T1 audit only: zero mutations, zero prohibited actions) | T1 evidence file |

## Evidence (under `evidence/EXP-135/`)

| File | Shows | Does not prove |
|---|---|---|
| `t1-01-webclient-identity-initial-state.png` | Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; three open vendor Forms (IDO Projects, IDOs, Sql Tables); Sql Tables row `FX_InventoryItems` / `dbo`, PK `PK_FX_InventoryItems`, index `IX_FX_InventoryItems_RowPointer` | IDO property types; the Designer state; anything about the new Form |
| `t1-02-designer-tab0-user-scope-footer-initial.png` | Designer tab 0 with the vendor IdoProjects Form (Name `IdoProjects`, Version `Vendor Default version`); footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save greyed | Designer liveness beyond the rendered state (no Edit probe); tabs 1 and 2 |
| `t1-preflight-gates.md` (worker-authored) | Gate results, Select Form dialog snapshot excerpts (C1, T1, T2, C2, C3), action counts, decisions needed | Database absence; scope-complete absence; IDO types |

## Repository confinement

- Session-start git status (taken as the baseline; Bash was not available, so no git command was run): branch `claude-harness`; HEAD `9197f7c`; pre-existing modified files under `tools/claude-harness/` and untracked `tools/claude-harness/briefs/EXP-119.brief.json`, `tools/claude-harness/src/usage.ts`, and two `tools/claude-harness/test/` files. None were touched in T1.
- Files written in T1: `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` (this record, created); `evidence/EXP-135/t1-01-webclient-identity-initial-state.png`; `evidence/EXP-135/t1-02-designer-tab0-user-scope-footer-initial.png`; `evidence/EXP-135/t1-preflight-gates.md`.
- Not written: AGENTS.md, recipes, EXP-130, EXP-134, EXP-041-R3, EXP-042-R3, tools, memory, other experiments.

## Knowledge state

| Finding | State |
|---|---|
| Select Form Name filter, key-event entry, case-insensitive lowercase infix: `helloworld` returns `FX_HelloWorld01` | observed (one session; `evidence/EXP-135/t1-preflight-gates.md`) |
| `FX_InventoryEditor` absent from the visible Select Form inventory (exact and lowercase infix) | observed (one session; visible inventory only; no scope column) |
| Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | observed (`t1-01`) |
| Designer footer User scope for `anton.ramos@3mworks.com.ph` with vendor IdoProjects Form loaded | observed (`t1-02`) |
| `dbo.FX_InventoryItems` / PK `PK_FX_InventoryItems` shown in the already-open Sql Tables Form | observed (`t1-01`) |
| IDO property types of `FX_InventoryItems` | **unresolved** in T1 (EXP-134 readback carried forward, not re-read) |
| Multi-View wizard route, page structure and Finish behaviour | candidate_procedure from EXP-041-R3 (single run, accepted with limits); not re-observed in T1 |
| Designer session constraint with a loaded non-FX_ Form | **unresolved** (operator decision needed) |
| Empty `FX_InventoryItems` data state | carried from EXP-134 (not yet checked in the FX_ runtime) |

## Open questions and next permitted action

1. Operator decision on AC-2 property types (options above).
2. Operator decision on the Designer tab 0 vendor Form (options above).
3. After both decisions: resume at AC-2 (identity and types), then AC-3 and the creation phase. No Finish until all pre-Finish gates pass.
