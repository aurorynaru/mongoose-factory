# EXP-045 — Cleanup inventory (final; reconciled in T17)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · final documentation audit T17 · cycle 22 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `5fd052eb-ec36-401b-af4d-fb0d0ea1921d`.
Date: 2026-10-10.

This file was rewritten in T17 (documentation only: no browser calls, no Mongoose action, no artifact change). The former heading "after T1" is replaced. Per-task entries (T1–T15) are kept in chronological order. The T11 entry, which previously sat after T15, is moved to its place between T10 and T12. Corrections are labelled **T17 correction**. Historical entries are otherwise kept as recorded.

---

## 1. Final inventory (AC-12)

### 1.1 Objects created by EXP-045

| Object | Final recorded state | Created or reused | Stored value | Tenant-wide implication | Evidence |
|---|---|---|---|---|---|
| Form `FX_UMs` (User scope) | Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; ScopeType User / ScopeName `anton.ramos@3mworks.com.ph`; Primary Collection `FX_UMs`; Save disabled after the single Designer Save (T13) and after reopen (T14) | **Created once** (one Finish, T3). Reopened in T14, not recreated | n/a | None beyond a User-scope Form | `t3-09`, `t3-10`, `t3-11`, `t13-04`, `t14-04`, `t15-02` |
| String `FX_sUM` | Name `FX_sUM`; String Value `Unit of Measure` in the Global Objects client view (read T12, T13, T14) | **Created** by the T9 Yes answer (absent in the T8 Strings list; created state inferred from sequence, see §4). Value corrected in T12 | Generated default `FX_s UM` (T9 to T11); `Unit of Measure` from T12 | Tenant-wide FX_ string resource. Scope and version not independently verified (see §4) | `t8-03`, `t9-02`, `t9-03`, `t11-02`, `t12-02`, `t12-03`, `t13-01`, `t14-07` |
| String `FX_sDescription` | Name `FX_sDescription`; String Value `Description` in the Global Objects client view (read T11, T13, T14) | **Created** by the T10 Yes answer (absent in the T8 Strings list; created state inferred from sequence) | Generated default `FX_s Description` replaced with `Description` before OK; stored `Description` | Tenant-wide FX_ string resource. Scope and version not independently verified | `t8-05`, `t10-05`, `t10-06`, `t10-07`, `t10-08`, `t11-03`, `t13-02`, `t14-08` |
| Template | None | **0** templates (Save Template unchecked, T2) | — | — | `t2-08`, `t3-08` |

Net created: **one** User-scope Form and **two** tenant-wide string resources. Nothing reused. No other artifact was created.

### 1.2 Pre-existing objects (not created; not intentionally changed)

| Object | Last recorded state | EXP-045 action on it | Limit |
|---|---|---|---|
| IDO `FX_UMs` (project `FX_HelloWorldProject01`) | Revision 2; Revision Date 10/10/2026; Locked By empty (checked in); Access As `G6R`; properties `FX_UM` (on FX_UMBase, key sequence 1, required) and `FX_Description` (String, 50) | Read only in T1 (`t1-04`). The Form's data source and the T15 runtime read it. No check-out, check-in or save recorded | Not re-read after T1. EXP-045 does not establish the final revision |
| Property Class `FX_UMBase` | Revision 1; Locked By `anton.ramos@3mworks.com.ph` (checked out since EXP-044); Label String ID `FX_sUM` | Read only in T1 (`t1-05`). Not checked in, out or saved by EXP-045 | Not re-read after T1. The checked-out state is pre-existing. Check-in is a separate operator decision |
| Project `FX_HelloWorldProject01` | Not opened | None recorded | Its name is seen only in the IDO's Project Name column (T1) |
| Vendor Form `IdoPropertyClasses` | Save disabled and no dialog at T1 (`t1-01`). Displayed again after the FX_UMs tab closed in T14 (Save disabled; `t14-02`) | None recorded. No edit, save or Undo | Save disabled shows no pending change; it does not prove the final stored revision |
| Form `FX_HelloWorld01` | Used only as the Select Form positive control (`t1-02`, `t3-01`) | None recorded. Not opened in the Designer | — |
| SQL tables and columns | Not inspected | No action recorded | — |
| Form data rows | None entered, edited or deleted (no record action in any task; the T15 runtime grid was not edited) | None recorded | The runtime indicator `Unit of Measure (Object 1 of 1)` (T15) is not a stored-record count |
| Web Client runtime tabs | `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns` were open from earlier experiments. `ExportImportStrings` was opened and closed in T1 with no change | View state only | — |

### 1.3 Final UI state (last recorded; T17 made no browser call)

- **Designer tab:** `FX_UMs` Form tab reopened in T14. User scope; Save disabled; Undo disabled; no dialog; URL `designer/default.aspx`; `FX_DescriptionStatic` selected; Details panel expanded on Components. The vendor `IdoPropertyClasses` design view was displayed after the T14 close and was not edited.
- **Web Client tab:** runtime `FX_UMs` tab selected and read-only (T15). Fields empty; Save disabled; no dialog; no record entered. The leftover runtime tabs listed in §1.2 are also open.
- No browser-native dialog and no unsaved-change prompt was recorded in T14 or T15.
- The state above is the last recorded state. It was not re-observed in T16 or T17.

### 1.4 Tenant-wide implications

- `FX_sUM` and `FX_sDescription` are tenant-wide FX_ string resources under the AGENTS.md scope extension. They remain in the tenant unless a separate, authorized action removes them.
- No other string, IDO, Property Class, project, SQL object, template or vendor Form was created, changed or deleted by EXP-045 as far as the records show.
- **No cleanup was performed in T17.** Deleting either string, deleting the Form, or checking in `FX_UMBase` would each need separate authorization.

---

## 2. Chronological entries (T1–T15)

### T1 entry (cycle 0, preflight and collision gate)

- **Created:** none. The Form `FX_UMs` was not authorized in T1 and the wizard was not opened. No template, string, IDO, IDO project, Property Class, SQL table or column, or data row.
- **Existing objects (observed, not changed):** IDO `FX_UMs` (project `FX_HelloWorldProject01`), Revision 2, checked in (carried from EXP-044). Property Class `FX_UMBase`, Revision 1, checked out to the operator account (carried from EXP-044), Label String ID `FX_sUM`. Vendor Form `IdoPropertyClasses` design view with Save disabled. Form `FX_HelloWorld01` used as a positive control only.
- **Runtime and Designer state:** Web Client runtime tabs `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns` left open. `ExportImportStrings` opened and closed without change. Designer: vendor view; no wizard; no dialog.
- **Tenant-wide implications:** none created in T1.

### T2 entry (cycle 1, wizard stopped before Finish)

- **Created:** none. Finish was not pressed. No template, string, IDO, IDO project, Property Class, SQL table, column or data row.
- **Pending (in the open wizard only, uncommitted):** Name `FX_UMs`; Data Source `FX_UMs`; default properties `FX_UM` and `FX_Description`, with `FX_UM` moved above `FX_Description`; Save Template unchecked. These were wizard-session values, not saved objects.
- **Changed:** none in metadata. The vendor `IdoPropertyClasses` view was not edited or saved.
- **Checked out / checked in:** none.
- **Browser state at stop:** Designer on the wizard's final page with Finish enabled and not pressed. Web Client untouched.

### T3 entry (cycle 2, one Finish)

- **Created:** **one** User-scope Form `FX_UMs` (Designer `?MGForm=FX_UMs`; Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Default; Form Type Normal), by **one** Finish (not retried). Observed in the Designer and once in the Select Form inventory (one row). This is a visible-UI observation, not a database read.
- **Templates created:** 0 (Save Template unchecked).
- **Strings created or changed:** 0. No Caption dialog was opened. The labels showed the raw IDs `FX_sUM` and `FX_sDescription` as text.
- **Changed existing objects:** none. IDO `FX_UMs`, Property Class `FX_UMBase`, project `FX_HelloWorldProject01`, SQL table and vendor `IdoPropertyClasses` were not edited, saved, checked in or checked out.
- **Pending changes at end:** Designer Save disabled. No unsaved-change prompt.
- **Browser state at stop:** Designer on the `FX_UMs` Form tab (User scope, Save disabled). Web Client on `Property Classes`; Select Form closed with Cancel.

### T4 entry (cycle 3, read-only label-component inspection)

- **Created:** none. The Form from T3 is still the only created object.
- **Strings created or changed:** 0. No Caption dialog was opened.
- **Changed:** none in metadata. The Details panel was expanded (view change). The `Pane (00)` tree row was selected (selection only).
- **Interaction failure:** a canvas click on the FX_UM label timed out (5 s) because it was intercepted by a design adorner. One recovery snapshot and one corrected inspection followed. No mutation resulted.
- **Browser state at stop:** Designer on `FX_UMs` (Details expanded, Components tab, `Pane (00)` selected); no dialog.

### T5 entry (cycle 5, component identity and first Caption dialog)

- **Created:** none. Only the T3 Form.
- **Strings created or changed:** 0. The Caption ellipsis for `FX_UMStatic` was opened once and raised `String FX_sUM does not exist. Create it?` (Yes / No). It was **not answered** in T5 (unanswered at stop).
- **Strings observed (not created):** the product reported `FX_sUM` as not existing. The value was not read.
- **Changed:** none. Components grid Expand (view change); `FX_UMStatic` row selection only.
- **Browser state at stop:** Designer on `FX_UMs` with the prompt open and unanswered (Yes focused / No); the String dialog behind it shows OK / Help only.

### T6 entry (cycle 7, prompt declined with No; STOPPED)

- **Created:** none intended. The prompt raised in T5 was declined once with **No**. The product then showed `Timeout expired waiting for response.` (in-page alert). The mechanism is not established.
- **Strings:** no string created by intent. `Yes` was not pressed. Whether the No click created or partly wrote `FX_sUM` was **not established in T6**. T8 later showed no `FX_sUM` row (see §4).
- **Changed:** none in metadata. Save and Undo disabled at the last read. The Designer URL changed from `?MGForm=FX_UMs` to `designer/default.aspx` after the No click (cause not established).
- **Browser state at stop:** Designer on `FX_UMs`; alert open and unanswered.

### T7 entry (cycle 8, timeout alert acknowledged once)

- **Created:** none.
- **Strings:** none created or changed. OK was clicked once on the informational alert. No Caption dialog was opened.
- **Changed:** none in metadata. Save and Undo disabled after OK.
- **Browser state at stop:** Designer on `FX_UMs` (User scope); URL still `designer/default.aspx`; no dialog.

### T8 entry (cycle 9, read-only String lookup)

- **Created:** none.
- **Strings created or changed:** 0. The Edit menu `String` item opened the `Global Objects` dialog. The Strings filter was used read-only (`FX_sUM`, `FX_sDescription`, `FX_`, and the positive controls `Collection` and `_`). The dialog was closed with **Cancel**. OK, +, copy, trash, New, Add and Delete were not clicked.
- **Strings observed:** `FX_sUM` and `FX_sDescription` have no rows in this list (positive controls matched). No `FX_`-prefixed string is visible. This is a client view, not a database read.
- **Changed:** none in metadata.
- **Browser state at stop:** Designer on `FX_UMs`, `FX_UMStatic` selected; no dialog or menu open.

### T9 entry (cycle 11, Yes on the FX_sUM prompt; STOPPED before commit)

- **Created:** the Yes answer created the tenant-wide string resource `FX_sUM` with the generated default value `FX_s UM`. **T17 note:** the creation is inferred from sequence (absent at T8; present with `FX_s UM` at T11). It was not timed and not independently verified. The T9 wording "possibly created ... UNRESOLVED" is resolved to this inference. See §4.
- **Strings intended:** `FX_sUM` = `Unit of Measure`. Not achieved in T9. `FX_sDescription` not touched.
- **Changed:** none in metadata. Save and Undo disabled. `FX_UMStatic` Caption still `FX_sUM`.
- **Browser state at stop:** the `FX_sUM` String dialog was left open with the pre-filled value `FX_s UM` (OK / Help only; not committed).

### T10 entry (cycle 13, editor edit and OK for both strings; no Designer Save)

> **SUPERSEDED (T17) for FX_sUM.** The T10 entry claimed that `FX_sUM` was committed with the value `Unit of Measure` and was retained. That claim is **not supported**. In T10 the value was verified in the editor before OK. No stored-value read took place in T10. T11 read the stored value as `FX_s UM`. T12 corrected it and read `Unit of Measure`. The T10 retention claim is withdrawn. The T10 `FX_sDescription` entry is not affected by this supersession; its stored value was read as `Description` in T11.

- **Created (tenant-wide string resources):**
  - `FX_sUM`: created by the T9 Yes (see T9 entry). In T10 the editor value was changed from `FX_s UM` to `Unit of Measure` and OK was clicked once. **Superseded:** not retained as `Unit of Measure` at T10 (T11 read `FX_s UM`).
  - `FX_sDescription`: created by the T10 Yes answer. Generated default `FX_s Description` replaced with `Description` before one OK. Stored value read as `Description` in T11.
- **Reused:** none. Both were absent at T8.
- **Strings created or changed (count):** 2 created (one in T9, one in T10). String dialog OK clicks in T10: 2. Yes answers in T10: 1 (`FX_sDescription`). The `FX_sUM` Yes was in T9.
- **Verification status at end of T10:** not read. Edit > String verification was deferred to T11.
- **Changed:** Form `FX_UMs` components' Caption references were not changed (still `FX_sUM` and `FX_sDescription`). The Designer's toolbar Save became enabled after the OKs. No Designer Save was pressed.
- **Browser state at stop:** Designer on `FX_UMs`, `FX_DescriptionStatic` selected, no dialog, Save enabled.

### T11 entry (cycle 14, read-only verification; STOPPED, no Designer Save)

- **Created:** none in T11.
- **Strings (read-only verification in Edit > String, Global Objects, Strings filter):**
  - `FX_sDescription`: stored Name `FX_sDescription`; String Value **`Description`** (matches).
  - `FX_sUM`: stored Name `FX_sUM`; String Value **`FX_s UM`** (does not match `Unit of Measure`). The T10 edit was not reflected in the stored value. Cause not established.
- **Changed:** none. Global Objects closed with Cancel.
- **Pending changes at end:** Designer Save enabled (not pressed). Undo disabled (accessibility).
- **Tenant-wide implications:** `FX_sUM` exists tenant-wide with stored value `FX_s UM`. `FX_sDescription` exists with `Description`.
- **Browser state at stop:** Designer on `FX_UMs`, no dialog, Save enabled (not pressed).

### T12 entry (cycle 16, operator-authorized FX_sUM correction; no Designer Save)

- **Created:** none. No new string was created in T12.
- **Strings changed (1):** `FX_sUM` String Value changed from `FX_s UM` to **`Unit of Measure`** (one cell edit committed with Tab; one OK). Verified read-only in Edit > String (Global Objects, filter `FX_sUM`, one row, Name `FX_sUM`, String Value `Unit of Measure`, Description blank). Global Objects closed with Cancel.
- **Strings not touched:** `FX_sDescription` (last read T11 as `Description`).
- **Tenant-wide implications:** `FX_sUM` reads `Unit of Measure` in the Global Objects view. Persistence beyond that client view is not established.
- **Changed:** `FX_sUM` string value only. No component, binding, layout or Form property changed. Save remained enabled (pending from T10).
- **Browser state at stop:** Designer on `FX_UMs`, `FX_UMStatic` selected, no dialog, Save enabled (not pressed).

### T11 entry placement note

The T11 entry above sits in its chronological position (between T10 and T12). In the earlier file it was placed after T15. **T17 correction** (placement only).

### T13 entry (cycle 17, pre-Save verification and ONE ordinary Designer Save)

- **Created:** none. No string created in T13.
- **Strings verified read-only (Edit > String, Global Objects, Cancel once):** `FX_sUM` = `Unit of Measure`; `FX_sDescription` = `Description`. One row each; Description blank.
- **Designer Save:** **one** ordinary toolbar Save. Immediate result: Save disabled; no alert; no dialog. Persistence across reopen was not yet verified at T13.
- **Changed:** Designer Form `FX_UMs` saved (both caption associations; the Form otherwise unchanged).
- **Pending changes at end:** none observed.
- **Browser state at stop:** Designer on `FX_UMs`, `FX_DescriptionStatic` selected, Save disabled, no dialog.

### T14 entry (cycle 18, ordinary close and reopen; read-only recovery)

- **Created:** none. The Form from T3 was reopened, not recreated. No string created.
- **Closed and reopened:** the FX_UMs Form tab was closed once with its own close control (no prompt). The Designer then showed the vendor `IdoPropertyClasses` view. The Form was reopened once through the Designer Form menu's single `FX_UMs` entry. The Select Form dialog was **not** used (deviation recorded).
- **Recovered and verified (Designer and Global Objects client view):** Form `FX_UMs`, User version, User scope, Primary Collection `FX_UMs`; `FX_UMStatic` Caption `FX_sUM`; `FX_DescriptionStatic` Caption `FX_sDescription`; bindings `object.FX_UM` and `object.FX_Description`; `FX_UM` above `FX_Description`. Strings: `FX_sUM` = `Unit of Measure`; `FX_sDescription` = `Description`.
- **Display observation:** the canvas showed raw IDs before close (T13) and literal captions after reopen. Cause not established.
- **Interaction failure:** the second Form-menu click returned ref-not-found after Escape. One recovery snapshot followed. No mutation.
- **Changed:** none. Save and Undo disabled at the last read. Only view state changed.
- **Browser state at stop:** Designer on `FX_UMs` (User scope), Save disabled, Undo disabled, no dialog, URL `designer/default.aspx`.

### T15 entry (cycle 19, optional read-only Web Client runtime open)

- **Created:** none. No Form, string, template, record or metadata created or changed.
- **Runtime open:** `FX_UMs` opened once from the Web Client Select Form (filter `FX_UMs`, one row, OK once). Runtime captions observed: `Unit of Measure` above `Description`. No record entered or saved; Save disabled.
- **Tenant-wide implications:** none new. The runtime open read the existing IDO and string resources; it did not alter them.
- **Changed:** none. The Web Client runtime tab `FX_UMs` is open (read-only). The other leftover runtime tabs are unchanged.
- **Browser state at stop:** Web Client tab selected; runtime `FX_UMs` open and read-only; no dialog.

---

## 3. Corrections to the earlier inventory (T17)

1. The title "(after T1)" and the "Created in T1" section are replaced by the final title and §1 (the final inventory).
2. T11 entry moved from after T15 to its chronological position between T10 and T12.
3. T10 entry's claim that `FX_sUM` was committed and retained with `Unit of Measure` is labelled **SUPERSEDED**. See §4.
4. T9 entry's "possibly created / UNRESOLVED" is replaced by the inference recorded in §4 (creation by the Yes answer, not independently timed).

---

## 4. FX_sUM and FX_sDescription: creation and value history (T17 reconciliation)

| Task | Event | Observed | Stored-value status |
|---|---|---|---|
| T5 | Caption on `FX_UMStatic`; prompt `String FX_sUM does not exist. Create it?` raised | Prompt unanswered | Not read |
| T6 | Prompt answered **No** | Timeout alert; no visible `FX_sUM` row found later (T8) | Not read; no creation by intent |
| T8 | Strings filter `FX_sUM` / `FX_sDescription` | Both empty; positive controls matched (`t8-03`, `t8-05`) | Absent in client view |
| T9 | Prompt `String FX_sUM does not exist. Create it?` (`t9-02`); answered **Yes** | Editor shows `FX_s UM` (`t9-03`); not committed | Creation inferred from sequence |
| T10 | Editor value changed to `Unit of Measure`; OK once (`t10-02`, `t10-03`). Also `FX_sDescription`: prompt (`t10-05`), Yes, default `FX_s Description`, value `Description`, OK once (`t10-06` to `t10-08`) | Pre-OK values verified in the editor. No stored-value read in T10 | `FX_sUM`: **not demonstrated**; retention claim **SUPERSEDED**. `FX_sDescription`: not read until T11 |
| T11 | Global Objects read | `FX_sUM` = **`FX_s UM`** (`t11-02`); `FX_sDescription` = `Description` (`t11-03`) | Stored `FX_s UM` |
| T12 | Cell edit to `Unit of Measure`, Tab commit (`t12-02`), one OK; Global Objects read (`t12-03`) | `FX_sUM` = **`Unit of Measure`** | Stored `Unit of Measure` (client view) |
| T13 | Global Objects reads (`t13-01`, `t13-02`) | `FX_sUM` = `Unit of Measure`; `FX_sDescription` = `Description` | Client view |
| T14 | Global Objects reads (`t14-07`, `t14-08`) | Same values | Client view |

What this table does and does not establish:

- **Creation of both strings:** the prompt text (`t9-02`, `t10-05`) shows the product reported the ID as absent before each Yes. The Strings list (`t8-03`, `t8-05`) shows the IDs absent before EXP-045 created them. Each string is listed after its Yes. **The exact moment of creation is not independently timed.** No read occurred between the T9 Yes and the T10 OK, and none between the T10 Yes and the T10 OK.
- **T6 No click:** the later T9 prompt still said the ID did not exist (`t9-02`), and the T8 list had no row. This is consistent with the No click not creating `FX_sUM`. The mechanism of the T6 timeout is not established.
- **T10 mismatch (mechanism unresolved):** T10 verified the editor value before OK and did not read the stored value. T11 read `FX_s UM`. The T12 correction committed the cell with Tab before OK and read `Unit of Measure`. **Candidate explanation (not established):** the T10 OK committed before the grid-cell edit was committed. This rests on one corrected and one uncorrected run. `FX_sDescription` was committed in T10 without a Tab and stored correctly, so the candidate does not explain both results. Other candidates from T11 (a stale client copy; an edit that did not reach the record) are not excluded or confirmed.
- **Scope and version:** the Global Objects Properties pane shows a truncated Version value for each string (`User version for user an…`). That field is not a scope indicator, and the full value was not read. Tenant-wide exposure rests on the AGENTS.md FX_ scope extension, not on a visible scope check. Neither string's scope or version is independently verified.

### Caption references (both exact)

- `FX_UMStatic` (label bound to `object.FX_UM` through `FX_UMEdit`): Caption `FX_sUM` → value `Unit of Measure`.
- `FX_DescriptionStatic` (label bound to `object.FX_Description` through `FX_DescriptionEdit`): Caption `FX_sDescription` → value `Description`.

---

## 5. Operation summary (cross-reference)

The full operation reconciliation, prompts, recoveries, save and close/reopen results, and last browser state are in `evidence/EXP-045/t17-final-evidence-matrix.md`.
