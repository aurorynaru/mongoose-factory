# EXP-137 T24 — Final read-only cumulative audit and acceptance matrix

Run `R-20261026-104057-G85J` · task T24 · cycle 28 · worker session `5d6bfeec-dd6f-4217-8e1b-729494d0960a` · task_message_id `044d014a-b682-4ce7-9b43-1542bdf3790b` · 2026-10-26.

Scope of T24: read-only audit. No Mongoose, Designer or Web Client operation was performed. No tab selection, click, keypress, Refresh, Save, check-in, reopen, FormSync, unload or record action. Files were read and this report plus the experiment record were written. **This report does not declare EXP-137 accepted, rejected, blocked or complete.** Final disposition is for operator review.

---

## 1. Inputs read and limits of this audit

| Input | Status in T24 |
|---|---|
| `AGENTS.md` | Read in full. |
| Approved brief (`tools/claude-harness/briefs/`, commits `038832a` draft and `112cc3b` approved) | **Not read.** `tools/` is unreadable by worker instruction. Brief scope was taken from the T24 instruction and the experiment record. |
| Amendment A1 | Read from the experiment record (section "Amendment A1", recorded before T5 mutation). Its authority is the operator's T5 bounded instruction, as recorded there. Not verified against the brief file. |
| Experiment record `experiments/EXP-137-…md` | Read in full (369 lines). |
| T1–T23 evidence | Read in full: T11, T13, T16, T17, T22, T23 markdown; T1 gate summary (grep-level). Other task markdown (T2–T10, T12, T14, T15, T18–T21) was used through the record's per-task operation sections and the controller audits, not re-read line by line. |
| Controller audits `harness-audit-T1…T23.md` | Summary lines, flagged-tool lines and error lines read for every task. Full tables read for T18. Error lines read for T1, T6, T7, T9, T12. |
| Screenshots | Thirteen decisive captures were opened and checked in this audit (listed in §2). Others were not re-viewed; their cited descriptions come from the task markdown. |
| Git / .git | Not accessed (see §9). The worker has no shell in this session. |

---

## 2. Decisive screenshots viewed in T24

| File | Visible content | Proves | Does not prove |
|---|---|---|---|
| `t8-01-data-maintenance-wizard-page1-committed.png` | Wizard page 1: IDO Name `FX_LoginUsers`, IDO Project `FX_HelloWorldProject01`, Table Alias `fxlogin`, MultiView, GridLeft, Default; grid with one blank placeholder row (before entries). | Identifiers entered before property rows. | Property rows. |
| `t9-01-wizard-page1-four-property-rows.png` | Four rows: `FX_Username`, `FX_PasswordHash`, `FX_Role`, `FX_Store`; Data Type `String` ×4; SQL Data Type `nvarchar` ×4; Property Class column empty for all four rows. Row 4 Data Type editor active (value `String`). | Names, String type, nvarchar mapping, empty visible Property Class column. | Lengths, Primary Key, Required (scrolled off). |
| `t9-02-wizard-page1-grid-scrolled-lengths-flags.png` | Property Length 50 / 64 / 50 / 50; Primary Key checked only on `FX_Username`. | Lengths and PK flag on the committed grid. | Required column (see T9 md and `t10-01`). |
| `t10-02-page2-before-finish.png` | Page 2: `Create Scripts` unchecked; message `Click "Finish" to create the database table, IDO and optional form.`; Finish enabled; Next disabled. | Create Scripts unchecked before Finish. | Identifiers and property definitions (not on page 2). |
| `t11-01-create-form-prompt-before-response.png` | Create Form dialog: `Do you want to create a form for FX_LoginUsers?`; Yes focused; No. | Prompt text names the FX_ IDO; captured before response. | Outcome of either answer. |
| `t12-05-idos-fx-loginusers-properties-subtab-readonly.png` | IDOs view, IDO `FX_LoginUsers`, Project `FX_HelloWorldProject01`, Revision 1, Locked By populated, Check In enabled. Properties: FX_Username String 50 Key Seq 1 Required checked; FX_PasswordHash String 64; FX_Role String 50; FX_Store String 50; Property Class blank; nvarchar; then wizard defaults CreatedBy, UpdatedBy, CreateDate, RecordDate, … | IDO identity, project, checked-out state before check-in, four configured properties, system-property presence. | Designer bindings; physical table. |
| `t14-04-sql-columns-fx-loginusers-opened-from-columns-button.png` | Sql Columns: `Column Name (SQL Columns 1 of 11)`; FX_Username selected: Schema `dbo`, Table `FX_LoginUsers`, Data Type `nvarchar`, Length 50, Is Nullable unchecked, Primary Key checked, Key Sequence 1; list shows 11 rows. | Physical column definition for FX_Username; 11 columns total. | Other three business columns (text readback only); catalogue-level verification. |
| `t16-02-post-ok-generated-form-designer.png` | Designer tab `FX_LoginUsers`; Name `FX_LoginUsers`; Caption blank (before A1 step 4); Version `User version for us…`; Form Type Normal; Is Master True; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; GridLeft canvas with four edit boxes. | Generated Form identity, User scope and layout before any Caption change. | Component names and bindings. |
| `t18-04-reopened-form-fx-loginusers-identity-canvas.png` | Reopened Designer: Caption `FX_LoginUsers`; Name `FX_LoginUsers`; ScopeType User / anton.ramos@3mworks.com.ph; four boxes; Save and Undo disabled. | Form identity and User scope after close/reopen in the Designer. | Runtime persistence; bindings. |
| `t17-07-immediate-after-single-save.png` | Toast `Save — Form [FX_LoginUsers] and global object(s) were saved.`; Caption `FX_LoginUsers`; footer User scope. | The one Designer Save ran and reported saving the Form. | Which global objects were saved (not identified by the product). |
| `t13-02-post-checkin-notice-dialog-before-ok.png` | Informational notice: `Source control integration is currently disabled in the current configuration. The item will not be checked in to source control.` One OK. Background IDO: Revision Num 2, Locked By empty, Check Out enabled. | Check-in took effect in the background (Revision 1→2); the notice's source-control wording. | Compilation result (none shown). |
| `t1-03-select-form-fx-loginusers-zero-rows-casefold.png` | Select Form, Filter `fx_loginusers`, Filter By Name, Case Sensitive off: no rows. | Lowercase target: zero rows in the Form list before creation. | The positive control (text only, see §3 AC-1). |
| `t20-03-runtime-fx-loginusers-after-open-before-refresh.png` | Runtime tab `FX_LoginUsers`; starred placeholder row; four empty boxes; red required marker on the fourth box; `(Object 1 of 1)`; Save disabled. | Runtime identity and placeholder-only baseline before insertion. | Zero database rows; field names; bindings. |
| `t23-03-reopened-runtime-immediate-before-refresh.png` | Same placeholder and empty boxes after the T23 reopen; `(Object 1 of 1)`; Save disabled. | The first reopen displayed no saved values (discrepancy). | That no database row exists. |
| `t23-04-reopened-runtime-settled-after-one-refresh.png` | Unstarred row `1` (grid first cell shows the hash); boxes: hash (clipped on screen), `FX-Viewer`, `FX-STORE-01`, `fx_probe` (fourth box has grey background, not interpreted); `(Object 1 of 1)`; Save disabled; Refresh tooltip. | Four values present after one Refresh in the same session. | Cross-session or database durability; bindings; the grey background meaning. |

---

## 3. Acceptance matrix (AC-1 to AC-12)

Status wording below is a proposed supported status for operator review. None is a final pass. "Qualified" means the cited evidence supports the check only with the stated limits.

| AC | Proposed supported status | Decisive evidence | Observation level | Qualifications and unresolved requirements |
|---|---|---|---|---|
| **AC-1** Pre-mutation identity, scope, project and absence | **Supported, qualified** | Account header and DEM configuration in `t12-05`, `t14-04`, `t20-03` (viewed in T24) and `t23-00` (per the T23 markdown). User scope footer in `t16-02`, `t17-07`, `t18-04` (User / anton.ramos@…). Project `FX_HelloWorldProject01`: IDO Projects row `t3-07` (Description `Factory Hello World test project`, Access As `G6R`). Sql Tables: exact `FX_LoginUsers` zero genuine rows with positive control `FX_InventoryItems` (T2, `t2-02`/`t2-04`); lowercase zero rows with positive control `fx_inventoryitems` (T4, `t4-02`/`t4-04`), criterion captured before F4. IDOs: T3 uppercase positive control `FX_InventoryItems` (`t3-02`) and lowercase target `fx_loginusers` zero rows (`t3-03`/`t3-04`), criterion before F4. Select Form: `t1-03` lowercase target zero rows. | Observed, UI-level. Not catalogue- or database-verified. | (a) The Select Form positive control `fx_inventoryeditor` → 1 row is recorded in T1 text only; no saved capture exists. (b) The exact-case Select Form zero-row result is text only. (c) The T1 IDO positive control was not paired with a pre-F4 capture; T3 covers the pairing. (d) T1 contained a parallel browser action block (one `browser_type` with one `Tab`; both returned in order). (e) T14 first FiP state showed 200 unfiltered Sql Table rows with no criteria row (unexplained; not used as absence evidence). |
| **AC-2** Final wizard configuration before Finish | **Supported, qualified (composite)** | `t8-01` (IDO name, project, alias); `t9-01` (four names, String, nvarchar, Property Class column visibly empty); `t9-02` (lengths 50/64/50/50, PK only on FX_Username); T10 page-1 readback table (committed values, row 4 commit, Required on row 1 only; `t10-01`); `t10-02` (Create Scripts unchecked on page 2); T11 pre-Finish guard. | Observed, composite of several captures. | No single capture shows every element. Page 2 shows no identifiers or definitions. Required on FX_Username became checked after the Primary Key click (T9 qualification 1); whether the product sets Required from Primary Key is not established. The wizard's default project before replacement was the non-FX_ value `amoveMock` (T8); it was replaced with `FX_HelloWorldProject01` before Finish. |
| **AC-3** One wizard Finish; completion and created objects | **Supported** | T11: one Finish (succeeded); completion text `Table and IDO created.` (`t11-02`). Identities: IDO `FX_LoginUsers` (T12 `t12-04`, T13 `t13-03`); table `FX_LoginUsers` (T14 `t14-03`). | Observed. The wizard's text is positive for table and IDO creation. | The message does not name the objects; identities are established by readback in the UI, not the database. No second Finish occurred. The wizard's Close click was a UI dismissal (T11). |
| **AC-4** Create Form prompt under A1 | **Supported under A1, qualified** | `t11-01` (prompt captured before response, names `FX_LoginUsers`); T11: one No, zero Yes; `t11-02` settled. | Observed. | The original Yes-route safety gate is withdrawn by Amendment A1. The prompt does not establish Form generation. The No response generated no Form; the Form came from the separate A1 Form Wizard route (T15–T16). |
| **AC-5** Generated Form identity, scope and layout | **Identity and scope supported (qualified); individual bindings unresolved** | `t16-02` (Name `FX_LoginUsers`, Version User, ScopeType User / anton.ramos@…, GridLeft, four boxes); `t18-04` (reopened identity, Caption, User scope); T18 Select Form exact criterion `FX_LoginUsers` → one row `FX_LoginUsers` / `FX_LoginUsers`; `t23-02` (one exact-name row); Primary Collection `FX_LoginUsers` (T16 `t16-03`, T18 `t18-05`). | Observed. | (a) Select Form shows no scope column; uniqueness is within the list shown, not scope-verified by column. (b) Component binding metadata was not read: T19 canvas click failed, and the component tree showed collapsed `Pane (00)` and `Pane (01)` with no expander reference. Runtime and wizard ordering support only a provisional positional mapping, and the required marker on box 4 matches FX_Username (`t20-03`, `t12-05`). This is indirect support, not a binding readback. (c) Only Form-level edit: Caption `FX_LoginUsers` (A1 step 4, T17). (d) Designer Save toast names "global object(s)" without identifying them. |
| **AC-6** IDO project, checkout state and single check-in | **Supported** | T12 `t12-04`: checked out (Check In enabled, Undo disabled, Locked By populated). T13 `t13-00` pre; one Check In; `t13-02` notice; `t13-03` settled: Revision 1→2, Locked By empty, Check Out enabled, row check unchecked. | Observed (UI). | (a) The notice's OK was acknowledged (T13 judgment call, flagged there for coordinator confirmation). (b) The notice says source control is disabled; the check-in is the Mongoose IDO check-in only. (c) Compilation result: not displayed (unresolved compile status). (d) The IDO checkout state was not re-read after T13; the later Form Wizard and Designer Save did not touch the IDO view in the recorded operations. |
| **AC-7** IDO, physical table and column readbacks after reopen | **Partially supported; full pass not established** | IDO metadata: `t12-05` (four configured properties; FX_Username String 50 Key Seq 1 Required; FX_PasswordHash String 64; FX_Role String 50; FX_Store String 50; Property Class blank). Tables tab `t13-03` (FX_LoginUsers / `fxlogin` / Primary Base / Inner). Physical table: `t14-03` (`FX_LoginUsers`, schema `dbo`, constraints `PK_FX_LoginUsers`, `IX_FX_LoginUsers_RowPointer`). Sql Columns: `t14-04` (FX_Username nvarchar 50, Not nullable, Primary Key, Key Sequence 1); T14 text readback for FX_PasswordHash nvarchar 64 (nullable), FX_Role nvarchar 50 (nullable), FX_Store nvarchar 50 (nullable). | Observed, UI-level. Key/required and length agree between IDO and SQL views; no discrepancy seen. | (a) The close-and-reopen condition is not fully met: the IDOs view was not closed and reopened after creation (T12 and T13 read it in the open panel). Sql Tables was reopened once (T14, from the Form-menu recent list). Sql Columns was opened from the Columns button, not closed and reopened. (b) No catalogue or database-level read. (c) The seven wizard system columns (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) are listed but not individually read in T14. |
| **AC-8** Portal route, usable Web Client, runtime open and zero-row baseline | **Partially supported; qualified** | Account and configuration header in `t20-03` and `t23-00`. Runtime open through toolbar Open → Select Form exact criterion → OK (T20, `t20-02`). Target `FX_LoginUsers` tab with starred placeholder, four empty boxes, Save disabled, `(Object 1 of 1)` (`t20-03`). Refresh before entry showed the same state (T20 `t20-04`). | Observed, UI-level. | (a) **Portal-reload route not exercised.** It was conditional ("when necessary") and no session expiry or sign-in occurred. (b) The zero-row baseline is placeholder-only UI evidence. No field-level `fx_probe` criterion was run, because the bindings were unknown. (c) The `(Object 1 of 1)` status text is the same in the placeholder state (`t20-03`) and the one-row state (`t23-04`), so it does not distinguish zero rows from one. (d) No replacement Form was created, and no metadata unload occurred. |
| **AC-9** One fake record, one runtime Save and readback | **Supported, qualified** | T21: four `browser_type` entries (`t21-01`): hash exact, `FX-Viewer`, `FX-STORE-01`, `fx_probe`; one blur-commit click on the read-only status box. T22: `t22-00` pre-Save values validated (hash 64 characters: groups 10·10·10·10·10·10·4, all hexadecimal); one Save click; `t22-01` settled (Save disabled, row changed from placeholder to unstarred `1`, values unchanged, no dialog). T23 readback (`t23-04`): the four values exact after close, reopen and one Refresh. | Observed in one session. The Save commit is supported by the settled state and the post-reopen readback. | (a) The immediate Save toast or response was **not captured** (T22). (b) The commit is UI-level. No database readback. (c) The hash value is the supplied value; the worker did not compute it. (d) No plaintext value was entered or recorded by the worker. (e) Exactly one record, no duplicate. |
| **AC-10** One close, one reopen, same record recovered | **Supported in-session; discrepancy recorded** | T23: `t23-01` close (no prompt; runtime tab gone); `t23-02` Select Form one exact-name row → OK; `t23-03` reopen shows placeholder with empty boxes (**discrepancy**); one Refresh → `t23-04` one unstarred row with the four values. | Observed, same session. | (a) The first reopen did not show the saved row; cause unresolved. (b) Same-session only; not cross-session or database durability. (c) The Refresh is a read-only UI action; the T24 instruction names it as permitted. |
| **AC-11** Cumulative audit reconciliation | **Reconciled in this report; open items disclosed** | §4 (mutations), §5 (artifacts), §6 (controller audit review), §7 (documented events). | Documentary. | Open items are listed in §8 and §11. None is hidden. |
| **AC-12** Repository and application confinement | **Partially reviewed; authoritative Git confinement left to operator** | §9. | Documentary. | No shell or Git tool is available in this session. Git status, diff and source hashes were not computed. Confinement is therefore not claimed as proven. |

---

## 4. Cumulative application mutation reconciliation

| Operation | Brief or A1 authorization | Observed count | Task | Evidence | Result |
|---|---|---|---|---|---|
| Data Maintenance Wizard Finish | exactly 1 | **1** | T11 | `t11-01`, `t11-02`, T11 md | Succeeded. No second Finish. |
| Create Form **Yes** | 0 | **0** | — | — | Not answered. |
| Create Form **No** | exactly 1 (A1) | **1** | T11 | `t11-01`, `t11-02` | Succeeded. |
| Wizard Close (UI dismissal) | not an object mutation | 1 | T11 | T11 md | Disclosed. |
| SQL table `dbo.FX_LoginUsers` | 1 | **1** (wizard message; readback T14) | T11, T14 | `t14-03` | Verified by readback. |
| IDO `FX_LoginUsers` | 1 | **1** (wizard message; readback T12) | T11, T12 | `t12-04`, `t12-05` | Verified by readback. |
| IDO check-in | exactly 1 if checked out | **1** | T13 | `t13-00` to `t13-03` | Revision 1→2. |
| IDO check-out / Undo Check Out | 0 | **0** | — | — | None. |
| Notice OK on check-in | not counted as mutation | 1 | T13 | `t13-02` | Judgment call; flagged. |
| Classic MultiView Form Wizard Finish | exactly 1 (A1 step 3) | **1** | T16 | `t16-00`, `t16-01`, `t16-02` | Succeeded: `Process Completed Successfully`. |
| Save Template checkbox | must remain unchecked | toggled by one label click; final state unchecked | T15 | `t15-13`, `t16-00` | Final state unchecked. No template created. |
| Form Caption commit | 1 (A1 step 4) | **1** | T17 | `t17-06` | `FX_LoginUsers`, committed by blur. Caption dropdown opened twice; no list item selected. |
| Designer Save | exactly 1 (A1 step 5) | **1** | T17 | `t17-07`, `t17-08` | Toast: Form [FX_LoginUsers] and global object(s) saved. |
| Designer close / reopen | verification | 1 / 1 | T18 | `t18-00`, `t18-02`, `t18-04` | Reopened with one exact-name row. |
| Runtime open (initial) | 1 | **1** | T20 | `t20-02`, `t20-03` | Select Form OK. |
| Runtime Refresh before entry | not separately listed | 1 (read-only) | T20 | `t20-04` | Disclosed extra read. |
| Runtime Filter in Place toggles | not listed | 2 (on then off, no criterion) | T20 | `t20-05`, `t20-06` | Restored. |
| Runtime Add/New | 0 | **0** | — | — | None. |
| Typed values into runtime edit boxes | 4 (one per field) | **4** | T21 | `t21-00`, `t21-01` | Four exact values. |
| Runtime record Save | exactly 1 | **1** | T22 | `t22-00`, `t22-01` | Immediate toast not captured. |
| Fake record rows inserted | exactly 1 | **1** | T22 | `t23-04` | One unstarred row, no duplicate. |
| Runtime close | 1 | **1** | T23 | `t23-01` | No prompt. |
| Runtime reopen | 1 | **1** | T23 | `t23-02`, `t23-03` | Select Form OK. |
| Runtime Refresh after reopen | permitted once (T23 instruction) | 1 | T23 | `t23-04` | Read-only. |
| Metadata-cache unload / Unload All Global Form Objects | 0 | **0** | — | T15 (menu item seen, not clicked) | None. |
| FormSync, deployment, publication, import/export | 0 | **0** | — | — | None. |
| Coordinate clicks | 0 unless documented last resort | **0** | all | Audits list no coordinate tool. | None. |
| Browser JavaScript / evaluate / run-code | 0 | **0 recorded** | all | Controller audits T1–T23 list no evaluate or run-code tool call. | Flag unverified (§7). |
| Session recovery or re-authentication | allowance 1 (T5 restart is history) | **0** in T6–T23 | T6–T23 | T19–T23 audits: 0 errors of that class. | None. |
| Escape key | not in Property Class combobox | **1** | T18 | T18 audit order 23 | Used in the Designer Form menu with no combobox active. Disclosed. |
| Enter key | 0 (Caption and inputs) | **0** | all | Audits list no Enter. | None. |
| Non-FX_ application mutation | 0 | **0 recorded** | all | §5 | See §5 items to be identified. |

Action totals from controller audits (flagged tool class, T1–T23): `browser_type` calls total 40 (36 succeeded, 4 failed with no text entered: T1 ×2, T5 ×1, T7 ×1). Each successful `browser_type` maps to a documented text entry in criteria, Select Form, wizard, Caption or runtime value fields. The controller's "prohibited-tool hits" count is a flag tally and is not a finding of prohibited action; the audit header says flagged tools may be allowed by other briefs.

---

## 5. Application artifact inventory and classification

| Artifact | Type | Name and key attributes | Created or changed by | Verification | Classification |
|---|---|---|---|---|---|
| SQL table | Physical table | `dbo.FX_LoginUsers` | Wizard Finish (T11) | T14 `t14-03`: schema dbo; constraints `PK_FX_LoginUsers`, `IX_FX_LoginUsers_RowPointer` (wizard defaults) | Created; FX_-prefixed. |
| SQL columns, business | Physical columns | `FX_Username` nvarchar(50) NOT NULL PK; `FX_PasswordHash` nvarchar(64) NULL; `FX_Role` nvarchar(50) NULL; `FX_Store` nvarchar(50) NULL | Manually configured in wizard (T9) | T14 `t14-04` and text readback | Manually configured. |
| SQL columns, system | Physical columns (wizard-generated) | `CreatedBy`, `UpdatedBy`, `CreateDate`, `RecordDate`, `RowPointer`, `NoteExistsFlag`, `InWorkflow` | Wizard default | Listed in T14 (11 columns total); not individually read | Wizard-generated. |
| IDO | IDO | `FX_LoginUsers`; project `FX_HelloWorldProject01`; alias `fxlogin`; Access As `G6R`; Revision 1 → 2 after check-in | Wizard Finish (T11) | T12 `t12-04`, T13 `t13-03` | Created; FX_-prefixed. |
| IDO properties, configured | IDO properties | `FX_Username` String 50 Key Seq 1 Required; `FX_PasswordHash` String 64; `FX_Role` String 50; `FX_Store` String 50; Property Class blank on all four | Wizard (T9) | T12 `t12-05` | Manually configured. |
| IDO properties, system | IDO properties (wizard-generated) | CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow | Wizard default | T12 `t12-05` | Wizard-generated. |
| **Label String ID / Caption** | String identifier | `oFX_LoginUsers` | **Wizard default, not typed by the worker** (T12 readback) | Not verified as a string-resource object. Precedent: EXP-040 and EXP-041-R2 recorded `oFX_HelloWorld01` as the wizard-generated Label String ID and Caption. | **Open item.** Non-FX_ prefix (`o`). Wizard-generated under an established convention, but its existence as a string resource is unverified. See §11. |
| Form | Classic MultiView Form | `FX_LoginUsers`; Caption `FX_LoginUsers` (A1 Caption); Version User; ScopeType User; ScopeName anton.ramos@3mworks.com.ph; Primary Collection `FX_LoginUsers`; Form Type Normal; Is Master True; GridLeft; Device Default | Form Wizard Finish (T16); Caption and Save (T17) | T16, T17, T18 `t18-04`; Select Form one exact row (T18, `t23-02`) | Created; FX_-prefixed; User scope. |
| Form components | Generated components | Four edit boxes; containers `Pane (00)` and `Pane (01)` | Form Wizard | Visual only (`t16-02`). Names and bindings unread. | Generated; bindings unresolved. |
| Runtime data row | Data row in `FX_LoginUsers` | 1 row: FX_Username `fx_probe`; FX_PasswordHash `1d1fde6df9638dab75a1061542350affcf8a697a2fdee3bf9a1d0e5892609b40`; FX_Role `FX-Viewer`; FX_Store `FX-STORE-01` | Runtime Save (T22) | T23 `t23-04`, same session | Created; the one authorized record. Same-session only. |
| Designer Save scope | Global objects | "global object(s) were saved" (toast, T17) | Designer Save (T17) | Not identified | **Open item.** Identity of any global objects saved is not established. |
| Vendor `IdoCollections` Form | Vendor Form | Active in Designer during T8–T16 with Save disabled and footer User scope | Not edited, not saved | Save disabled at each recorded pre-state | Unchanged as recorded. |
| `amoveMock` project value | Wizard default | Non-FX_ default project name in the wizard (T8) | Not created; replaced before Finish | T8 md; T12 readback shows `FX_HelloWorldProject01` | Not an artifact change. Disclosed. |
| Tool snapshot and console files | Tool output | `evidence/playwright/*` | MCP tooling | Not curated | Not experiment artifacts. |

Non-FX_ artifacts: none are recorded as created, changed or deleted by the worker. Two items need operator identification: the `oFX_LoginUsers` string identifier, and the global objects covered by the Designer Save.

Existing FX_ objects: no edit, save, check-in or delete is recorded for FX_InventoryEditor, FX_InventoryDashboard, FX_InventoryItems, FX_LoginPortal, FX_ProcessLogin or any other existing FX_ Form or IDO. The only existing-object linkage is the new IDO's membership in the existing project `FX_HelloWorldProject01`, which the brief authorized. FX_InventoryPrototype01 is not recorded as opened in any task.

---

## 6. Controller audit review

| Task | Flagged tool classes | Errors recorded | Reconciliation to the record |
|---|---|---|---|
| T1 | `browser_type` 9 | 2: `CollectionNameEdit` read-only timeout (`f1e430`); Sql Tables criteria cell "Element is not an input" | Both recorded in T1 deviations. One parallel block recorded. |
| T2 | `browser_type` 2 | 0 | Criteria only. |
| T3 | `browser_type` 4 | 0 | Criteria and Select Form filter only. |
| T4 | `browser_type` 2 | 0 | Criteria only. |
| T5 | `browser_type` 1 | 1: stale ref `f1e325`, no text entered | Interrupted task, history. Audit issues: 2 (malformed event; no terminal event). |
| T6 | none | 1: screenshot timeout | Recorded as a timeout. |
| T7 | `browser_type` 1 | 3: screenshot timeout; stale ref `f1e32` on FiP click; `browser_type` timeout on read-only `CollectionNameEdit` | Recorded. |
| T8 | `browser_type` 2 | 0 | Name and alias entries. |
| T9 | `browser_type` 8 | 2: Grep path not found (read-only); stale ref `e934` | Recorded. Two `browser_mouse_wheel` scroll actions (not clicks) are in the audit but not in the T9 record's counts. Disclosed here. |
| T10 | none | 0 | Clean. |
| T11 | none | 0 | Clean. |
| T12 | `browser_type` 1 | 2: snapshot too large (saved to a tool-results file); Grep read of that tool-results file **denied by permission** | The denied read is not mentioned in the T12 record. Disclosed here. No state effect. |
| T13 | none | 0 | Clean. |
| T14 | `browser_type` 1 | 1: stale FiP ref | Recorded. |
| T15 | `browser_type` 1 | 0 | Form Wizard Name entry only. |
| T16 | none | 0 | Clean. |
| T17 | `browser_type` 1 | 0 | Caption literal only. |
| T18 | `browser_type` 1 | 1: Designer toolbar hover timeout (no state change) | Recorded. Escape recorded. |
| T19 | none | 1: canvas click timeout (overlay `compadorner-3503` intercepted) | Recorded. No state change. |
| T20 | `browser_type` 2 | 0 | Select Form filter entries. |
| T21 | `browser_type` 4 | 0 | Four runtime values. |
| T22 | none | 0 | One Save click. |
| T23 | none | 0 | Clean. |

No audit records `browser_evaluate`, `run-code`, `browser_mouse_click_xy` or `browser_drop`. The T16 and T17 records mention tool-generated `Ran Playwright code` wrapper blocks. Those are tool output, not worker-authored code.

---

## 7. Documented events and deviations (explicit)

1. **T13 source-control notice.** Immediate response to Check In: `Source control integration is currently disabled in the current configuration. The item will not be checked in to source control.` OK acknowledged once (judgment call). The Mongoose check-in itself is evidenced by Revision 1→2 and Locked By cleared.
2. **T17 generic global-object toast.** `Form [FX_LoginUsers] and global object(s) were saved.` The global objects are not identified. Same wording as EXP-135 T6.
3. **T19 binding readback blocked.** The canvas click failed on overlay interception; the Components tree showed collapsed Pane (00) and (01) with no expander reference. No binding was read. Direct control-to-property binding verification remains **unresolved, not failed and not passed**.
4. **T22 immediate Save toast not captured.** The settled state shows Save disabled and an unstarred row, which supports a committed Save. The toast or validation response is unknown.
5. **T23 initial reopen placeholder.** The first reopen showed no saved values; one Refresh showed the row. Cause unresolved. This is recorded and not repaired.
6. **Historical permissions-policy console messages.** Console counters in the records are inconsistent: 21 errors and 10 warnings at T2–T4; 2 errors and 0 warnings at T10–T11; 3 errors and 2 warnings from T12 to T23. The error text is permissions-policy `unload` messages in the T2 export. No record explains the change in count, and the T12 record says so. Not investigated. Not treated as passing or failing evidence.
7. **`worker_tool_policy.deny_browser_javascript` flag.** The worker cannot read or set it. The controller audits show no evaluate or run-code call, and the worker authored no browser JavaScript. The flag remains **unverified**; the operator must confirm it.
8. **Designer Escape (T18).** One Escape press with the Designer Form menu open; no combobox was active. The prohibition covers Escape within the Property Class combobox only. Disclosed.
9. **Wheel scrolls (T9).** Two mouse-wheel scroll actions over the wizard grid, to reveal Required and Label columns. Not clicks; no value changed.
10. **T1 parallel block.** One `browser_type` and one `Tab` were issued in one block, against the parallel-action rule. Both returned in order; the snapshot confirmed the result.
11. **T12 denied read.** A Grep read of a tool-results file was denied by permission. No state effect. No retry was recorded.
12. **T14 FiP anomaly.** The first Sql Tables FiP state showed 200 unfiltered rows with no criteria row. Unexplained. Not used as absence evidence; the criterion pass (`t14-03`) is the one relied on.
13. **FX_InventoryEditor runtime tab (T1).** T1 records that an FX_InventoryEditor runtime tab (3 rows, clean) and an FX_InventoryDashboard tab were open before T1 and were not touched. Later Web Client snapshots (T20 onward) show only IDOs, Sql Tables, Sql Columns and FX_LoginUsers tabs. No close action on FX_InventoryEditor is recorded. Cause unexplained. This is a UI-panel observation, not an artifact change.
14. **Wizard default project `amoveMock`.** Non-FX_ default in the wizard (T8). Replaced before Finish. No object of that name was touched.
15. **Caption dropdown (T17).** The Caption value cell opened the string-resource dropdown twice. No list item was selected. The commit was by label blur. No Enter was pressed.
16. **Save Template checkbox (T15).** Toggled by one label click to unchecked. Final state unchecked, as the brief required.
17. **Runtime Refresh before entry (T20).** One read-only Refresh before any entry. Disclosed as an extra UI action.
18. **Stale-ref and timeout events.** Stale refs: T5 (interrupted), T7, T9, T14 (one each). Timeouts: screenshot T6 and T7; read-only type T1 and T7; hover T18; canvas click T19. Each was recorded with its recovery or with no state change.
19. **Session history.** T5 was interrupted by a machine restart that ended Chrome, Playwright MCP and the worker process. The operator restored the environment and signed in manually. No session expiry, sign-in or automatic recovery occurred during T6–T23.

---

## 8. Requirements that remain unresolved (not failed, not silently passed)

| Requirement | Status | Why |
|---|---|---|
| Direct Designer control-to-property binding (AC-5, binding part) | **Unresolved** | T19 read failed. Mapping is provisional from wizard order, layout order and the required marker. |
| Cross-session persistence | **Unresolved** | Only same-session readbacks (T23). |
| Database-level durability or catalogue state of the row | **Unresolved** | No direct database readback is authorized or performed. |
| Immediate Save response (AC-9) | **Unresolved** | Toast not captured (T22). |
| First-reopen placeholder cause (AC-10) | **Unresolved** | Observed once; not repeated. |
| IDO and Form compilation status | **Unresolved** | IDO check-in showed the source-control notice only. No compile message was displayed for the wizard, check-in or Form. |
| Close-and-reopen of IDO and Sql metadata views (AC-7) | **Partially met** | IDOs view not closed and reopened; Sql Tables reopened once. |
| Portal-reload route (AC-8) | **Not exercised** | Conditional; not needed in this session. |
| Identity of global objects saved by Designer Save | **Unresolved** | Product toast names no object. |
| `oFX_LoginUsers` string identifier | **Unresolved** | Wizard default; its existence as a string resource is not verified. |
| `deny_browser_javascript` | **Unverified** | Worker cannot read the flag. |
| Console counter variation | **Unexplained** | Records disagree; not investigated. |
| Git confinement and source hashes (AC-12) | **Pending operator** | No Git or shell access in this session. |
| Grey background on the fourth runtime box | **Uninterpreted** | Recorded in T22 and T23. |

---

## 9. Repository and application confinement (AC-12)

- **Worker-written files in T24:** this report `evidence/EXP-137/T24-final-audit-acceptance-matrix.md` (new) and the experiment record `experiments/EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md` (T24 status and section added). No other file was written in T24.
- **Earlier EXP-137 documentation and evidence (T1–T23, per the records):** the experiment record and `evidence/EXP-137/` markdown and screenshots listed in the T23 handoff (48 markdown files in `evidence/EXP-137/`; PNG and text captures listed in the handoff; the PNG listing exceeded the search tool's display cap, so the total is not recounted here). Tool-generated files under `evidence/playwright/` are not curated.
- **Brief commits:** `038832a` (draft) and `112cc3b` (approved), per the record.
- **Git:** no authoritative `git status`, `git diff` or source-hash recomputation was performed. The worker has no shell in this session and did not access `.git` internals, change permissions or use another identity. The start-of-conversation Git snapshot in the session context lists EXP-137 paths as untracked (`evidence/EXP-137/`, `experiments/EXP-137-…md`) and also lists modified and untracked files under `tools/claude-harness/`. This worker did not write any `tools/` file in EXP-137 and does not attribute those changes to EXP-137. Final Git confinement is **pending operator review** and is not claimed as proven.
- **Application confinement:** from the recorded operations, the only mutations were the FX_LoginUsers table, IDO, Form and one data row, plus the FX_HelloWorldProject01 membership that the new IDO requires. The two open items in §5 (the `oFX_` string identifier and the Designer Save's global objects) must be identified before confinement is accepted.

---

## 10. Key findings (observed, with qualifications)

1. The wizard created the table and IDO, positively reported `Table and IDO created.`, and the readbacks match the configured definitions. **Observed.**
2. The generated Form is `FX_LoginUsers`, User scope, with one exact-name Select Form row after reopen. **Observed.**
3. The IDO was checked out before the check-in, and is checked in after exactly one check-in (Revision 1→2). **Observed.**
4. One fake record was saved once and recovered after one close, one reopen and one Refresh, in the same session. The first reopen showed no saved values. **Observed, with a discrepancy.**
5. The physical SQL definitions agree with the IDO definitions for the key, required flag and string lengths. **Observed, UI-level.**
6. Binding of each runtime box to its IDO property is **not verified**. The round trip is consistent positionally.

---

## 11. Operator-decision items

1. **Form binding readback (AC-5).** Accept the deferral with the qualified positional and required-marker evidence, or authorize a new read-only route. T19 failed on the canvas. Any new route must be separately authorized.
2. **Same-session persistence versus durability (AC-10).** Accept same-session persistence as the stated level, or require a separate database-level or cross-session check (outside this experiment as written).
3. **Save response (AC-9).** Accept the settled-state evidence, or record the Save response as unresolved.
4. **`oFX_LoginUsers` string identifier.** Confirm that the wizard-generated `oFX_` label convention (precedent EXP-040, EXP-041-R2) is acceptable under the FX_ boundary, and whether its string-resource object should be checked.
5. **Designer Save global objects.** Decide whether the unidentified "global object(s)" must be identified before acceptance.
6. **AC-7 close/reopen.** Accept the readbacks as satisfying AC-7, or require a supported close and reopen of the IDOs view.
7. **AC-8 portal route.** Accept that the conditional portal-reload route was not needed, or require it.
8. **First-reopen placeholder (AC-10).** Accept as an unexplained observation, or authorize a separately scoped read-only repeat (a new action, which this audit does not perform).
9. **Compilation status.** Decide whether a compile result is required; none was displayed.
10. **T13 notice OK.** Confirm the judgment call.
11. **Console counter variation and the T12 denied read.** Accept as disclosed, or investigate in a separate task.
12. **`deny_browser_javascript`.** Operator to verify the flag in the policy.
13. **Git confinement and source hashes.** Operator to run and review.
14. **FX_InventoryEditor runtime tab absence (T1 to T20).** Accept as UI-panel state, or investigate.

---

## 12. Proposed qualified disposition (for operator review; not a declaration)

**Proposed:** *Operator review: qualified partial support; not accepted.*

- **Supported, qualified:** AC-1, AC-2, AC-3, AC-4 (under A1), AC-5 identity and scope, AC-6, AC-9, AC-10 (same session), AC-11 reconciliation.
- **Partially supported:** AC-5 bindings (unresolved), AC-7 (close and reopen condition), AC-8 (portal route not exercised; zero-row baseline is placeholder-only UI evidence).
- **Pending operator:** AC-12 (Git confinement), and the open items in §8 and §11.

Basis: the table, the IDO, the User-scope Form and one same-session round-trip of one fake record are each supported by observed UI readbacks. Binding, cross-session persistence, database-level state, compile status and the two identification items remain open, and no further application mutation is justified for EXP-137 in T24.

---

## 13. HARNESS-style summary of T24 actions

- Actions performed: file reads (AGENTS.md, experiment record, T11/T13/T16/T17/T22/T23 markdown, T1 summary grep, controller audits, 13 screenshots); grep and glob searches; one write (this report); one edit (experiment record).
- Browser actions in T24: **0**. Tab selections: 0. Clicks: 0. Keys: 0. Saves: 0. Refreshes: 0. Reopens or closes: 0. Check-ins: 0. Wizard or Form actions: 0. Unload, FormSync, deployment: 0. Coordinate clicks: 0. Worker-authored JavaScript: 0.
- Application objects created or modified in T24: **0**.
- Knowledge state: see the record's T24 section. Nothing is `replay_verified`.
