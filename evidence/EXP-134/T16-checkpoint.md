# EXP-134 T16 checkpoint: final cumulative audit, acceptance matrix and operator handoff (documentation only)

Run R-20261026-031627-MXfT · cycle 22 · task T16 · worker session `307d32ce-4432-4097-9d8a-2de56fad8cf6` · task_message_id `e6a111c6-49c6-4a3d-9dcd-e716ce04b7b9`. Date 2026-10-26.

Scope of this task: documentation only. No browser action, no Mongoose mutation, no git command, no new experiment. Files written: this checkpoint and the experiment record `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` (T16 status, T16 section, change record).

---

## 1. Result

- **No acceptance check failed.** Nine checks are passed and AC-3 is pending. AC-3's pending state is the operator disposition of the pre-Finish table-name visibility limitation that the operator already retained, plus the operator-approved Required-flag difference from EXP-130.
- **Object state (as last observed in T15; not re-read in T16):** IDO `FX_InventoryItems` under `FX_HelloWorldProject01`, base table `FX_InventoryItems`, alias `fxinv`, six FX_ business properties, Revision Num 2, checked in (Locked By blank, Check Out enabled). SQL table `dbo.FX_InventoryItems` with primary key on `FX_Item`, a RowPointer index and 13 columns, as shown in the Mongoose SQL metadata UI.
- **Controller audit corroborates the worker record.** The `harness-audit-T1.md` to `harness-audit-T15.md` files (controller-generated, under `evidence/EXP-134/`) show exactly one Finish, one Create Form "No", one wizard Close, one Check In and no Save, Check Out, Undo, unload, FormSync or generated-script control in any task.
- **Recommendation:** EXP-134 remains **pending operator disposition** (AC-3, plus the qualifications in section 8). The worker does not declare unconditional acceptance and does not begin EXP-135.

## 2. Sources read in T16 (and documentation-read gaps)

| Source | Read in T16 | Gap |
|---|---|---|
| `AGENTS.md` | Full | None |
| Experiment record `experiments/EXP-134-…md` | Full (lines 1–606, in two reads) | None |
| Checkpoints `evidence/EXP-134/T1-checkpoint.md` to `T15-checkpoint.md` | All fifteen, in full | None |
| Controller audits `evidence/EXP-134/harness-audit-T1.md` to `T15.md` | T7, T11 and T14 in full. The other twelve through targeted searches (summary line, key presses, mutation-class clicks, timeouts, errors, typed-entry flags). Full tables for T1–T6, T8–T10, T12, T13 and T15 not read line by line | Row-level reading of twelve audits was by search, not in full. Their summary counts and every mutation-class row found by search are reported below |
| `experiments/EXP-049-…md` | Targeted content search for absence, placeholder, F4, Create Scripts, Table Name, Check In and precision terms; excerpts read | **Not a full read.** Lines 303–356 (the T18 audit) were never read by any EXP-134 task |
| `experiments/EXP-071-R2-…md` | Targeted content search; excerpts read | **Not a full read** (1988 lines). Later sections not read |
| `experiments/EXP-040-…md` | Targeted content search (split button, Table Name combobox, precedent for the pre-Finish table-name limitation at its line 277, Access As) | Not a full read |
| `experiments/EXP-039-…md` | **Not read in T16.** Cited in the record as an IDO-project precedent | Not read by T16. Earlier tasks did not record a full read either |
| `evidence/EXP-130/MockInventory-ido-definition.txt` | Rows 1–14 read (reference only; MockInventory itself not inspected) | None |
| `evidence/EXP-134/*.png` | Read visually: `t11-03` (wizard completion) and `t15-08` (IDO after reopen). Others described from checkpoints | Remaining decisive PNGs were not re-viewed in T16 |

**Procedure-level finding from the EXP-049 and EXP-071-R2 reads.** EXP-049 gated the Sql Tables and IDOs queries with a same-session positive control (T5: `FX_HelloWorld01` returned one record; T6: an IDO positive control returned one IDO). EXP-134 ran no same-session positive control before creation, because the brief excluded a fresh Filter-in-Place re-entry. EXP-071-R2 reproduces the EXP-134 pattern: an IDOs zero-row grid with no placeholder, and a Sql Tables add-mode placeholder for the same zero-row outcome. Its record treats the placeholder as the zero-row pattern, not a saved record, and records the difference as an unexplained observation. The EXP-134 absence results are therefore **observed procedures with a precedent**, not verified controls.

## 3. Final acceptance matrix

Status vocabulary: `passed`, `failed`, `pending`, `not_applicable` only. Qualifications appear in the notes column, not as statuses.

| AC | Status | Observed result | Evidence | Limitations and notes | Recommended disposition |
|---|---|---|---|---|---|
| AC-1 | passed | Identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` read in the Web Client; Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; `FX_HelloWorldProject01` one row (Access As `G6R`). Gates passed (T4, T5) before the wizard was opened (T6) | `t1-01`, `t1-02`, `t1-09`, `t1-10`; `t2-02`, `t2-05`; `t4-01`, `t4-09`; `t5-04`; `t6-01`, `t6-02` | The T1 Designer was stale and the T1 session expired, so the T1 result does not carry over. The T5 Designer was a relaunched tab 0 whose original blank state was lost; the scope dialog did not appear there, so scope rests on the footer. Designer scope and liveness were re-observed in T6 and T10–T11 footers | Accept |
| AC-2 | passed | IDOs criterion `FX_InventoryItems` then F4 gave zero rows (no placeholder); Sql Tables criterion then F4 gave only the blue-star add-mode placeholder (blank Table Name and Schema), status `Schema (SQL Tables 1 of 1)`, Save disabled. Both were observed in T4 before the wizard (T6) and Finish (T11) | T4: `t4-02`, `t4-03`, `t4-05`, `t4-06`; T1: `t1-04`, `t1-05`, `t1-07`, `t1-08` | No same-session positive control before creation (EXP-049 had one; the EXP-071-R2 excerpts read in T16 do not describe one). The Sql Tables placeholder interpretation is the one the operator approved for this task. The EXP-071-R2 record shows the same placeholder pattern. The T12, T13 and T15 exact-name queries for the same name returned the object once it existed, which supports the query method but is not a pre-creation control. Absence was not re-run immediately before Finish (T4 to T11 in the same Web Client session, with no expiry observed) | Accept with the interpretation and absence of a pre-creation control stated |
| AC-3 | pending | Pre-Finish: project `FX_HelloWorldProject01`, IDO name `FX_InventoryItems`, alias `fxinv`, six rows: FX_Item String 50 (PK, Required); FX_Description String 255; FX_Warehouse String 100; FX_QuantityOnHand Decimal 12 precision 2; FX_ReorderLevel Decimal 12 precision 2; FX_Location String 100. Property Class and Label String ID blank on all six. Create Scripts unchecked (page 2). No seventh row | `t9-26` (snapshot), `t9-27` to `t9-29`; `t10-03` (snapshot), `t10-04`, `t10-05`, `t10-06` | (1) The physical table name `dbo.FX_InventoryItems` was not displayed before Finish. The Table Name field was disabled and blank, so it is inferred from the IDO name. This is the operator-retained qualification; the same limitation is documented in EXP-040 T8. (2) Required is checked on FX_Item only. This differs from the EXP-130 reference, where all six business rows are Required. The difference was operator-approved before Finish (T11). (3) Precision 2 is read from accessibility text for rows 4 and 5; the Property Class column is clipped in screenshots. (4) Row 1 is clipped at the top edge in screenshots. (5) In the T9 readback, row 6's Data Type combobox stayed active until T10 closed it | Operator disposition: accept the table-name limitation and the Required deviation to set AC-3 to passed. If not accepted, keep pending |
| AC-4 | passed | Controller: one Finish (T11 audit row 12, `e504`), one "No" to the Create Form prompt (row 15), no Yes, one wizard Close (row 19). Native text `Table and IDO created.` observed. Post-creation: IDO list shows `FX_InventoryItems` as 1 of 1 (T12) and the Sql Tables list shows one row (T13), so no duplicate | `t11-02` (prompt), `t11-03` (wizard completion; read visually in T16), `t11-04` (Designer after Close) | The completion text is the wizard's own message, not a readback. Whether the Create Form decline left any Form object was not checked by an exact-name Forms query (see section 8) | Accept |
| AC-5 | passed | IDO `FX_InventoryItems`, project `FX_HelloWorldProject01`, base table `FX_InventoryItems`, alias `fxinv` (Primary Base, Inner). Six business properties with names, Data Type, Length, Column Type, FX_Item Key Sequence 1 and Required. Seven framework rows (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) | T12: `t12-02`, `t12-03`; T14: `t14-01`, `t14-02`; T15 (post-reopen): `t15-08`, `t15-09` | UI limits, recorded explicitly: no Decimal precision column in the IDO Properties grid; primary key is shown only as Key Sequence; `dbo` schema not shown in the IDO view; Column Type comes from IDO metadata, not the SQL catalogue; rows 9–11 not re-read visually after the reopen | Accept |
| AC-6 | passed | Sql Tables: `dbo` / `FX_InventoryItems`, `PK_FX_InventoryItems` (FX_Item), `IX_FX_InventoryItems_RowPointer`. Sql Columns: FX_Item nvarchar 50, primary key, Key Sequence 1, not nullable; FX_Description nvarchar 255; FX_Warehouse nvarchar 100; FX_QuantityOnHand decimal, Length 12, Decimal Position 2; FX_ReorderLevel decimal, Length 12, Decimal Position 2; FX_Location nvarchar 100. 13 columns in total, seven of them framework columns | T13: `t13-02`, `t13-03` to `t13-06`; T15 (post-reopen): `t15-12`, `t15-13`, `t15-16`, `t15-17` | Mongoose SQL-metadata UI, not an independent database query (direct SQL is prohibited). `decimal(12,2)` is the UI convention (Length 12, Decimal Position 2). Is Nullable and Column Id were not read for the seven framework columns | Accept |
| AC-7 | passed | Pre-check-in: Revision Num 1, Locked By `anton.ramos@3mworks.com.ph`, Check In enabled. Controller: one Check In (T14 row 22) and one notice OK (row 24). Post-check-in: Revision Num 2, Locked By blank, Check Out enabled, Undo disabled, status `Check Out (IDOs 1 of 1)`. Unchanged after the T15 reopen | `t14-00` (snapshot), `t14-01` (PNG, pre), `t14-02` (snapshot and PNG, post); `t15-08` | The native notice says source-control integration is disabled, so the Mongoose checkout was released but nothing was checked in to source control. The notice was not captured as an image | Accept as UI-level, qualified |
| AC-8 | passed | Single pre-close and post-reopen pair per Form. Both closed by native Close Panel with no prompt (`t15-04`). Reopened through Open → Select Form; exact-name F4 queries each returned one row. Post-reopen values match the pre-close baseline: IDO Revision 2, Locked By blank, Tables row, Properties rows 1–8; Sql Tables row, both constraints, 13 Sql Columns, decimal positions 2 | `t15-01`, `t15-02`, `t15-03` (pre-close); `t15-04`; `t15-06` to `t15-09` (IDO); `t15-10` to `t15-12` (Sql Tables); `t15-13` to `t15-17` (Sql Columns) | UI-level recovery in the same Web Client session only. Not independent database verification and not cross-session durability. The pre-close Properties baseline is accessibility text (no screenshot). Properties rows 9–11 were not re-read visually. Sql Columns was closed twice in T15 (preparatory and final). Earlier freshness close and reopen steps (T12 IDOs, T13 Sql Tables) are not counted as the AC-8 pair | Accept as UI-level, qualified |
| AC-9 | passed | Controller counts (section 4): Finish 1; Create Form No 1 and Yes 0; wizard Close 1; wizard launch 1; Check In 1; Save clicks 0; Check Out, Undo, Revert, Delete and Designer New-Data clicks 0 beyond the single launch; unload, FormSync, generated-script and deploy controls 0; no editor Form; no record creation; no non-FX_ creation or mutation. All 37 typed-entry flags are explained (criteria, Select Form filters, wizard fields, and one portal menu search). Deviations and recoveries are enumerated in section 5 | `evidence/EXP-134/harness-audit-T1.md` to `T15.md`; worker checkpoints T1–T15 | Worker counts were reconstructed from checkpoints and agree with the controller records for every mutation-class operation. `tools/` is unreadable by instruction, so the harness database and brief-level ledger were not checked. Operator may cross-check if desired. The Label String ID `oFX_InventoryItems` on the IDO was populated automatically (section 8) | Accept |
| AC-10 | passed | This checkpoint carries the final matrix, the cumulative ledger and the repository and evidence inventory (section 7). Evidence exists for preflight, pre-Finish, creation, IDO readback, SQL readback, check-in and close/reopen | This file; `experiments/EXP-134-…md`; `evidence/EXP-134/` | The worker did not run git status, diff or any other git command (instruction). Git confinement and the complete repository diff remain the operator's authoritative review. Several evidence gaps and inconsistencies are listed in section 7 | Accept the evidence package. Operator review of git confinement is separate |

**Machine-readable summary**

```json
{"AC-1":"passed","AC-2":"passed","AC-3":"pending","AC-4":"passed","AC-5":"passed","AC-6":"passed","AC-7":"passed","AC-8":"passed","AC-9":"passed","AC-10":"passed"}
```

No check is `failed`. The T1 gate failure, the stale Designer and the T1 expiry are superseded by the T2–T5 recovery and the T4 gates. They are recorded in section 5, not as failed acceptance checks.

## 4. Cumulative action ledger (T1 to T15)

**Controller summary per task** (from the `harness-audit-T*.md` header lines; "actions" and "reads" are the controller's own fields and are not comparable across tasks):

| Task | Actions | Reads | Flagged hits (all `browser_type`) | Errors | Turns |
|---|---|---|---|---|---|
| T1 | 37 | 53 | 6 | 4 | 105 |
| T2 | 16 | 26 | 1 | 0 | 53 |
| T3 | 2 | 4 | 0 | 0 | 14 |
| T4 | 25 | 35 | 6 | 3 | 76 |
| T5 | 8 | 15 | 0 | 0 | 41 |
| T6 | 13 | 19 | 2 | 0 | 40 |
| T7 | 14 | 14 | 3 | 2 | 38 |
| T8 | 24 | 11 | 6 | 2 | 57 |
| T9 | 23 | 31 | 5 | 1 | 93 |
| T10 | 4 | 9 | 0 | 0 | 29 |
| T11 | 4 | 9 | 0 | 0 | 23 |
| T12 | 12 | 16 | 2 | 0 | 38 |
| T13 | 20 | 17 | 2 | 0 | 61 |
| T14 | 4 | 8 | 0 | 2 | 26 |
| T15 | 34 | 57 | 4 | 0 | 107 |

**Mutation-class and maintenance operations.** "Controller" means a row in the audit files. "Worker" means the checkpoint count. Where both exist they agree.

| Operation | Controller | Worker | Tasks and notes |
|---|---|---|---|
| Wizard launch (Designer New → Form Wizard Selection → Category `NewData`, Wizard `Maintenance`, OK) | 1 | 1 | T6 rows 19, 23, 25, 27, 29, 33 |
| Wizard Next | 1 | 1 | T10 row 24 (page 1 to page 2) |
| Wizard Add Row, successful | 5 | 5 | T7 row 32 (row 2); T8 rows 22 and 37 (rows 3, 4); T9 rows 23 and 61 (rows 5, 6). Row 1 is the wizard's starter row |
| Wizard Add Row, failed | 1 | 1 | T8 row 20, "Ref e559 not found", no observed effect; retry succeeded. No seventh row exists |
| Wizard Finish | **1** | 1 | T11 row 12 only |
| Create Form response | No 1, Yes 0 | 1 / 0 | T11 row 15 only |
| Wizard Close | 1 | 1 | T11 row 19 only |
| Wizard Back, Cancel, Save | 0 | 0 | — |
| Second wizard launch | 0 | 0 | — |
| IDO Check In | **1** | 1 | T14 row 22 only |
| Notice OK (source-control informational) | 1 | 1 | T14 row 24 |
| Check Out, Undo Check Out | 0 | 0 | — |
| Save (any Form) | 0 | 0 | No Save click in any audit |
| Delete, Revert, New Form or Copy | 0 | 0 | — |
| Property Class lookup or combobox opened | 0 | 0 | T7 row 5 (worker-described): one Tab moved focus into the Property Class editor without opening it. Controller shows no Property Class click |
| Escape pressed | 1 | 1 | T2 row 46 in the Designer Edit menu (no effect). None in the wizard |
| Enter pressed | 0 | 0 | — |
| Tab pressed in the wizard | 1 | 1 | T7 row 16 only (Name editor → Property Class focus) |
| Designer split-control clicks | 3 | 3 | T1 row 104 (session expired); T2 row 34 (new Designer tab); T5 row 21 (tab 0 navigated) |
| Session Expired modal OK | 2 attempts | 2 | T1 row 110, timed out (not confirmed); T2 row 6, succeeded |
| Portal navigation (authorised) | 1 | 1 | T2 row 10 (portal URL); beforeunload dialog accepted once (T2 row 11) |
| Portal banner dismissed (×) | 1 | 1 | T2 row 15 |
| Select Form opens | 10 | 10 | T1 3, T4 3, T12 1, T13 1, T15 2 |
| Exact-name F4 queries | 10 | 10 | T1 3, T4 3, T12 1, T13 1, T15 2 |
| Caution alert OK (Sql Tables) | 4 | 4 | T1 row 57, T4 row 42, T13 row 31, T15 row 71 |
| Maintenance Form Close Panel | 6 | 6 | IDOs: T12 row 8, T15 row 23 (2). Sql Tables: T13 row 19, T15 row 25 (2). Sql Columns: T15 rows 21 and 111 (2) |
| Maintenance Form reopen (Open → Select Form) | 4 | 4 | IDOs: T12, T15. Sql Tables: T13, T15 |
| Designer Edit-menu probes | several | several | T1 row 95 (OK on stale error); T2 probe and close; T5 probe and close |
| Browser `browser_type` (flagged) | 37 | — | T1 6, T2 1, T4 6, T6 2, T7 3, T8 6, T9 5, T12 2, T13 2, T15 4. Each is a criterion entry, Select Form filter, wizard field or value, or the single portal menu search (T2). None is a prohibited mutation |
| Ref-not-found errors | 3 | 3 | T4 (`f1e22`, recovered with one fresh snapshot); T8 (`e559`, Add Row; `e881`, row 4 Data Type) |
| Browser timeouts | 2 | 2 | T1: row 110 (Session Expired OK) and row 111 (full-page screenshot) |
| Metadata unload, FormSync, generated script, deploy | 0 | 0 | — |
| Records created, edited or deleted; inventory editor Form | 0 | 0 | — |
| Non-FX_ object created or mutated | 0 | 0 | The wizard default project `amoveMock` was replaced in the lookup before any creation (T6) |
| Browser JavaScript, evaluate, run-code, direct SQL, internal APIs | 0 | 0 | Controller: no such tool calls recorded |

**Controller error entries (14 total):** 9 are read or search errors on paths that did not exist (T1 rows 3 and 96; T4 rows 6 and 7; T7 rows 4 and 5; T9 row 6; T14 rows 7 and 10). These are tool-side lookup errors, not Mongoose actions. 5 are browser-side (2 timeouts in T1, 3 stale refs in T4 and T8).

## 5. Deviations, errors and recovery: disposition

| # | Task | Item | Scope and evidence | Affects | Disposition |
|---|---|---|---|---|---|
| 1 | T1 | Designer tab 0 Edit menu returned a server-event error (stale Designer). The split-button click raised a Session Expired modal. The modal OK timed out | Controller rows 95, 104, 110, 111. `t1-12`, `t1-13`. No mutation | AC-1 (superseded) | Recorded. Cause unresolved. Superseded by T2 recovery and T4–T5 gates |
| 2 | T2 | Session recovery: modal OK (succeeded); one portal URL navigation after a beforeunload dialog accepted once; portal banner dismissed once; portal menu search `Mongoose` typed once | Controller rows 6, 10, 11, 15, 17. Checkpoint T2 | AC-1 (session health) | Authorised by the standing session-expiry rule. No credential typed. Not a Mongoose artifact |
| 3 | T2 | Wrong-control hover (tooltip "Runtime Builder…"). The worker's audit description calls the element "pencil icon". The T2 checkpoint says the wrench | Controller row 31 (description); `t2-03`. Hover only, no click | None | Element-description inconsistency recorded. No effect |
| 4 | T2 | Escape pressed to close the Designer Edit menu. It did not close the menu; a second Edit click did | Controller row 46 | None | Recorded. Designer Edit menu only |
| 5 | T2–T3 | The T2 "new Designer" tab was absent in T3. Tab 2 kept a stale FX_LoginPortal Designer with an open server-event error alertdialog | T3 checkpoint. The tab 2 error dialog was not dismissed in any later task | None on AC. End-state item | Unresolved. Stale tab 2 may still hold the error dialog. Operator decision |
| 6 | T5 | Edit-menu probe on the original tab 0 was skipped in error. The split launch navigated tab 0 (count unchanged) | T5 checkpoint, deviation section | AC-1 (qualified) | Recorded. Liveness shown on the relaunched state only |
| 7 | T4 | Ref `f1e22` not found. Recovered with one fresh snapshot | Controller row 54 | None | Within the recovery allowance |
| 8 | T7 | Tab from the Name editor moved focus to the Property Class editor. Not opened; no Escape or Enter | Controller row 16 | None (Property Class not set) | Recorded deviation; Property Class stayed blank in every later readback |
| 9 | T7 | Harness PostToolUse guard reported "Guard completion failed; preserve the action reservation and stop" after the row 2 Data Type dropdown Open click (controller row 37). The worker stopped with the dropdown state unknown | T7 checkpoint. Controller shows no action after row 37 except reads and file writes | AC-9 (no unknown action) | No written operator disposition is recorded. The coordinator dispatched T8, which resolved the dropdown (`String`). **The operator should acknowledge this disposition explicitly.** |
| 10 | T8 | Ref `e559` (Add Row) not found, no observed effect. Retry succeeded (rows 3 and 4 then exist) | Controller rows 20, 22 | AC-9 (no duplicate row; T10 found exactly six) | Resolved; no duplicate |
| 11 | T8 | Ref `e881` (row 4 Data Type cell) not found after precision `2` was typed. Precision left uncommitted; recovery allowance exhausted | Controller row 54 | AC-3 (resolved in T9) | Resolved in T9: precision committed and read back as 2 |
| 12 | T9 | Row 4 precision committed through the Length cell (opened a Length editor, closed by a second click, value unchanged). Rows 5 and 6 names typed into the already-active Name editor after Add Row, without the Name-cell click the brief named. Row 6 Data Type combobox left active | T9 checkpoint, deviations | AC-3 (none; readbacks verified) | Recorded minor deviations |
| 13 | T10 | Click on row 6 SQL Data Type cell opened an editable combobox (brief assumed read-only). Closed by a row-header click; value unchanged (`nvarchar`) | T10 checkpoint | AC-3 (none) | Recorded |
| 14 | T11 | Finish once, Create Form "No" once, wizard Close once. No retry | Controller rows 12, 15, 19 | AC-4 | Clean |
| 15 | T12, T13 | Freshness close and reopen of the IDOs (T12) and Sql Tables (T13) before the AC-8 pair. Not counted as the AC-8 pair | Controller rows T12 8/10/16; T13 19/21/29 | AC-8 (not affected) | Recorded |
| 16 | T12–T13 | HTTP 401 from `yggdrasil…/security/refresh` first appeared during the T12 IDOs reopen and recurred in T13–T15 | Checkpoints T12–T15; console logs | Runtime health (section 6) | Unresolved cause; see section 6 |
| 17 | T14 | Panel selection (IDOs tab click) with Sql Columns active. Sql Columns and Sql Tables were not closed | Controller row 15 | None | Recorded |
| 18 | T15 | Sql Columns closed twice (before and after the reopen). Decimal Position re-read needed two wheel corrections (one overshoot, one no-op); no row selected | Controller rows 21, 111; wheel rows 97–107 (hover, move, wheel) | AC-8 (not affected) | Recorded |
| 19 | T15 | Extends field displayed white in Filter in Place before F4 and grey after. Value blank both times | T15 checkpoint | None | Rendering difference only |
| 20 | T15 | Pre-close IDO Properties baseline taken from accessibility text, with no screenshot | T15 checkpoint | AC-8 (qualified) | Recorded limitation |

**Procedural documentation gaps (affect AC-9 completeness, not the mutation counts):** the T7 record says EXP-040 and EXP-049 were grepped and read. The controller shows both Grep calls failed on guessed paths (rows 4 and 5); later greps succeeded, but their targets are not logged. The T8 record says EXP-040 and EXP-049 were searched by content, not read in full. The T14 record says EXP-049 was not reached (rows 7 and 10 failed). The T15 record says EXP-049 and EXP-071-R2 were not re-read. None of these gaps changes an observed Mongoose result. They are recorded as qualifications to the procedural basis, not as violations of an acceptance check.

## 6. Runtime errors: reconciliation (causes unresolved)

| Error | Where and when | What is known | What is not established | Distinct from |
|---|---|---|---|---|
| Permissions-Policy `unload is not allowed in this document` | `WSWebClient/res/Designer/app.js` and `WSWebClient/Scripts/yggdrasil-core.js:1409`; reported from T10 onward; 13 of the 14 error entries at T12 | Browser policy notices present in every task since T10; their text names no wizard or IDO action | Whether they have any effect on the operations; why the scripts call `unload` | Application errors. The unloads did not coincide with any maintenance action in the record |
| HTTP 401 at `yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` | First at T12 during the IDOs reopen; present in T13, T14 (before the check-in) and T15 logs. Two INFO lines `getSSOToken: Token expired` (T14) | No session modal, sign-in form or identity change was shown in any task. The T14 check-in and the T15 reopens succeeded and the UI loaded the data | Whether the 401 is a failed token refresh, a benign background call or a symptom of a stale token. Whether the server-side check-in was authorised by a refreshed token. The revision change (1 → 2) and the Locked By clearing are UI-visible evidence that the server applied the check-in, not proof of its authorisation | The successful operations in section 4 |
| HTTP 400 for `…/WSWebClient/Designer/Form/GenerateServerEvent`, `GetFormDesigner` and `DesignerSession/GetEditMenuState` | T15 console log; not tagged to a tab. The stale tab 0–2 Designers were not selected in T15. The T1 stale-Designer server-event error is the same class | The T15 maintenance Forms loaded and queried normally | Which Designer tab produced each 400, and whether it is related to the stale Designer or to the T1 expiry | Maintenance queries (which succeeded) |

**Assertion discipline.** None of these errors is asserted as harmless or fatal. The record supports the statement that the observed Mongoose maintenance operations completed and read back correctly. It does not establish why the errors occurred.

## 7. Repository and evidence inventory (AC-10)

**Source of the inventory.** The worker did not run git status (instruction). The working-tree listing below comes from the git status snapshot provided at the start of this conversation and from directory listings. It is not a current git diff. Authoritative git confinement is the operator's review.

**A. Experiment-authored (EXP-134 worker chain)**

| Path | Status at T16 start | Notes |
|---|---|---|
| `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` | Untracked (snapshot) | Written and edited in T1–T15; edited again in T16 |
| `evidence/EXP-134/T1-checkpoint.md` to `T15-checkpoint.md` | Untracked (directory) | Worker-authored checkpoints |
| `evidence/EXP-134/T16-checkpoint.md` | Written in T16 | This file |
| `evidence/EXP-134/t1-01` to `t15-17` (PNG) | Untracked (directory) | Worker-saved screenshots (count not re-verified in T16) |
| `evidence/EXP-134/*.yml` (for example `t9-02-…`, `t13-06-…`, `t14-00-…`) | Untracked | Worker-saved accessibility snapshots |
| `evidence/EXP-134/t10-07-console-errors-readonly.log` | Untracked | Worker-saved console extract |

Brief commits, which are not worktree changes: `fa04d02` (draft brief) and `f0c499a` (approved brief).

**B. Controller-generated (automatic, not worker prose)**

- `evidence/EXP-134/harness-audit-T1.md` to `harness-audit-T15.md`. These record attempted tool calls and results. The file header says they are not rendered-state proof or acceptance.

**C. Tool-written browser evidence (automatic)**

- `evidence/playwright/` snapshot YAML and console logs for each task, including files named `page-2026-10-25T20-…` and `console-2026-10-25T20-…`. Several checkpoints reference these by an abbreviated name (for example `page-…20-34-46-016Z.yml`). The exact filenames were not enumerated in T16. An operator wanting exact paths should list the directory.

**D. Pre-existing working-tree changes (not EXP-134; origin not verified by this worker)**

From the session-start git status snapshot: modified `tools/claude-harness/README.md`, `harness.config.example.json`, `src/cli.ts`, `src/config.ts`, `src/controller/handoff.ts`, `src/controller/machine.ts`, `src/testing/fakes.ts`; untracked `tools/claude-harness/briefs/EXP-119.brief.json`, `tools/claude-harness/src/usage.ts`, `tools/claude-harness/test/session-policy.test.ts`, `tools/claude-harness/test/usage.test.ts`.

**E. Application objects (Mongoose, not repository files)**

Recorded in section 9 and in the experiment record's object list. These are not repository changes.

**Missing or inconsistent evidence (recorded, not replaced):**

1. `t1-13`: the first capture attempt (`…-after-OK-timeout.png`) timed out and was not saved. The image `t1-13-session-expired-modal-state.png` exists. The modal text is not legible in it.
2. `t2-07`: the filename was reused. The first capture (menu open after Escape) was overwritten. The Escape result is recorded in text only.
3. The T14 source-control notice was not captured as an image (accessibility text only).
4. The T1 Designer server-event error was not captured as an image.
5. The T15 pre-close IDO Properties grid has no screenshot.
6. Abbreviated references (for example `page-…20-34-46-016Z.yml`) appear in T9, T13, T14 and T15 checkpoints instead of exact filenames.
7. EXP-134 T2 checkpoint: the hover element described as "wrench" in the checkpoint and as "pencil icon" in the audit (section 5, row 3).
8. The IDO Revision Date is shown as `10/25/2026` while the records are dated 2026-10-26. The record's UTC tool timestamps are `2026-10-25T20:xx`. The likely cause is time-zone offset. Not verified.

## 8. Known limitations

1. **No independent database verification.** Direct SQL is prohibited. All SQL readbacks are Mongoose metadata UI. `decimal(12,2)` is the UI convention.
2. **Decimal precision at the catalogue level is unverified.** The IDO grid has no precision column. Precision 2 is observed in Sql Columns (Decimal Position) and in the wizard.
3. **Physical table name before Finish was not displayed** (AC-3). The table was confirmed only after creation, in the Sql Tables UI.
4. **Absence gates had no same-session positive control before creation** (AC-2). The EXP-049 record had one (T5, T6). The EXP-071-R2 excerpts read in T16 do not describe one. Post-creation exact-name retrieval supports the query method.
5. **Same-session recovery only** (AC-8). No cross-session durability or runtime CRUD is claimed.
6. **Source control was disabled.** Only the Mongoose checkout was released. No source-control check-in occurred.
7. **The IDO carries `Label String ID` and `Caption` `oFX_InventoryItems`,** populated automatically (T12 onward). The brief forbade inventing required Label String IDs for the properties, and the property Label String IDs are blank. Whether a string resource named `oFX_InventoryItems` exists was not checked, and the worker did not create one. **Operator should check whether the wizard created a string resource.**
8. **No Forms-list readback for `FX_InventoryItems` was taken after creation.** The Create Form "No" response is the evidence that no editor Form was requested. Its non-creation was not verified by an exact-name Forms query.
9. **No unfiltered Sql Tables listing was taken.** The blank add-mode placeholder from T1/T4 was closed in T13 without a Save (no Save click in any audit). The post-creation queries filtered on the exact name, so the absence of any other blank-name row was not directly checked.
10. **Tenant-wide classification is by the AGENTS.md scope extension, not tested.** EXP-071-R2 recorded that SQL table and IDO visibility may be configuration-wide and that its own check did not test this. EXP-134 did not test visibility from a second user.
11. **No record data was queried or changed** (CRUD is out of scope).
12. **Browser end-state items:** tab 1 Designer holds FX_LoginPortal and FX_BridgeTest (not touched since T5). Tab 0 Designer holds the vendor IdoProjects Form in design view (unmodified; not saved). Tab 2 stale Designer may still hold the T3 server-event alertdialog. Tab 3 Web Client holds the IDO Projects, IDOs and Sql Tables panels. No unsaved-change prompt was observed at the end of T15.

## 9. Current application state (as last observed in T15; not re-read in T16)

| Object | State |
|---|---|
| IDO `FX_InventoryItems` | Project `FX_HelloWorldProject01`; Revision Num 2; Revision Date 10/25/2026; Locked By blank; Check Out enabled; Undo disabled; Access As `G6R`; Label String ID and Caption `oFX_InventoryItems` |
| IDO Tables | `FX_InventoryItems`, alias `fxinv`, Primary Base, Inner |
| IDO Properties | FX_Item (seq 1, Key Sequence 1, Required, String 50, nvarchar); FX_Description (String 255); FX_Warehouse (String 100); FX_QuantityOnHand (Decimal 12, decimal); FX_ReorderLevel (Decimal 12, decimal); FX_Location (String 100). Seven framework rows |
| SQL table `dbo.FX_InventoryItems` | Schema `dbo`; `PK_FX_InventoryItems` (FX_Item); `IX_FX_InventoryItems_RowPointer` |
| SQL columns | 13: six business columns (types and lengths as above; decimal positions 2 on rows 4 and 5) and seven framework columns |
| Forms | No FX_InventoryItems Form requested (Create Form "No"). None created by the worker |
| Records | None created, edited or deleted |
| Property Classes, validators, component classes, caption strings (other than the auto `oFX_InventoryItems` reference), derived properties, joins, additional IDOs | None created by the worker |

**Created application objects for cleanup (AGENTS.md "record every created object"):** SQL table `dbo.FX_InventoryItems` and its generated constraints and index; IDO `FX_InventoryItems` with its Tables row, six business properties and seven framework properties; IDO revision 2 from one check-in; the auto-populated Label String ID reference `oFX_InventoryItems`. The table alias `fxinv` was approved. No other object was created.

## 10. Operator handoff

**Recommended dispositions**

1. **AC-3 (pending):** accept the pre-Finish table-name limitation (operator-retained; same as EXP-040 T8) and the Required-flag deviation from EXP-130 (operator-approved before Finish). Once accepted, AC-3 can be set to passed.
2. **AC-2:** accept the placeholder interpretation (operator-approved for this task) and the absence of a pre-creation positive control. If a control is wanted, it needs a new bounded authorisation, because the brief excluded a fresh Filter-in-Place re-entry.
3. **AC-5 to AC-8:** accept as UI-level, qualified. Note the precision and database-catalogue limits.
4. **AC-9:** accept from the documented evidence. The controller records in `evidence/EXP-134/harness-audit-T*.md` agree with the worker counts. The T7 guard disposition needs an explicit operator acknowledgement (section 5, row 9).
5. **AC-10:** accept the evidence package. Git confinement and the full repository diff remain the operator's review.

**Items the operator should check or decide**

- Whether the wizard created a string resource `oFX_InventoryItems` for the IDO label (section 8, item 7).
- Whether a Forms-list readback for `FX_InventoryItems` is wanted (section 8, item 8).
- Whether to close the stale tab 2 Designer and its server-event alertdialog (section 8, item 12).
- The unresolved runtime items in section 6 (HTTP 401, Permissions-Policy `unload`, HTTP 400 Designer endpoints). They are recorded as unresolved, not as harmless.
- Whether EXP-134 is declared complete. My recommendation: **complete with operator-accepted qualifications, once AC-3 has an operator disposition.** The worker does not declare unconditional acceptance. EXP-135 has not been started.

**Next permitted action:** none in the worker chain for EXP-134. Any further readback or cleanup needs a new authorisation.

## 11. Files written in T16

- `evidence/EXP-134/T16-checkpoint.md` (this file, new)
- `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` (T16 status line, T16 section, change record)

No browser action, Mongoose mutation, git command, recipe, AGENTS.md or other experiment file was changed.
