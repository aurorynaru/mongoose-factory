# EXP-049 — Hello World Part 2: Create FX_Items SQL Table and IDO Using Property Classes

**Current status (after T18): FINAL EVIDENCE AUDIT WRITTEN (documentation only; no browser action in T18). Proposed outcome: OBSERVED WITH DOCUMENTED LIMITS, NOT fully accepted. Partial: AC-1 (Site Developer capability unverified), AC-3 (FX_sDescription resource unverified), AC-10 (after reopen only FX_Item's definition re-read in detail), AC-12 (preservation not independently demonstrated). Not replay_verified. Full matrix: `evidence/EXP-049/T18-final-evidence-audit.md`. Awaiting coordinator decision.**

(Earlier status, after T17): SQL TABLE dbo.FX_Items RECOVERED after ordinary same-session Sql Tables / Sql Columns close and reopen (AC-11 supported at same-session UI level; NOT replay_verified; NOT database-level). Sql Columns then Sql Tables closed via native Form-tab Close (absent from the Form-tab list); Sql Tables reopened once via Select Form (row Sql Tables / SqlTables); one FX_Items criterion in the Table Name criteria cell, one F4: dbo.FX_Items real record (PK_FX_Items, IX_FX_Items_RowPointer), Save disabled. Columns opened once: FX_Item nvarchar 20 not nullable PK seq 1; FX_Description nvarchar 150 nullable; FX_Cost decimal 18/2 nullable, SQL default blank; FX_UM nvarchar 10 nullable; system columns distinguished. A caution alertdialog was accepted once (informational). Audit (AC-12) not performed. Awaiting coordinator review.**

(Earlier status, after T16: IDO FX_Items RECOVERED after ordinary same-session IDOs Form close/reopen (AC-10 supported at same-session UI level; NOT replay_verified; NOT database-level). From the reopened Form, one Filter-in-Place transition (from record view to criteria), one IDO Name criterion FX_Items, one F4: one record, project FX_HelloWorldProject01, alias fxitms (Primary Base), revision 2, label/caption oFX_Items, checked-in indicators (checkbox cleared, Locked By blank, Check Out offered). IDO Properties: 11 rows; FX_Item detail read (FX_ItemBase, String 20, nvarchar, Required, FX_sItem). FX_Cost and FX_UM detail and the FX_UM domain relationship were not re-read in T16 (carried from T12). AC-11 (SQL close/reopen) not attempted. Awaiting coordinator review.**

(Earlier status, after T15: IDOs ordinary close/reopen PARTIALLY completed. IDO Properties and IDOs Form-tabs were closed with their native Close controls (confirmed absent from the Form-tab list), and the IDOs Form was reopened once via Select Form (IdoCollections). The fresh exact-name recovery query for FX_Items was NOT completed: the criteria field was read-only (CollectionNameEdit) after a stale-reference timeout, and the allowance was exhausted. AC-10 NOT established; checked-in state after reopen NOT observed. SQL close/reopen (AC-11) not started. Awaiting coordinator direction.**

(Earlier status, after T14: IDO FX_Items CHECKED IN once (AC-8 supported at same-session UI level). Before: checked out to the operator (checkbox checked; Locked By operator; Check In enabled; Undo Check Out disabled). Action: one native Check In on FX_Items only; an informational source-control notice ("integration disabled; the item will not be checked in to source control") was acknowledged with OK. After: checkbox cleared; Locked By blank; Revision Num 2; Check Out now the applicable action. AC-10 (IDO close-and-reopen) and AC-11 (SQL close-and-reopen) still PENDING. Reopen confirmation of the checked-in state not yet performed.**

(Earlier status, after T13: SQL TABLE dbo.FX_Items CONFIRMED in the native SQL Tables Form (real record; schema dbo; Columns and constraint actions enabled; Save disabled). SQL Columns (observed same session): FX_Item nvarchar 20, Is Nullable unchecked, Primary Key checked (Key Sequence 1); FX_Description nvarchar 150 (nullable); FX_Cost decimal 18 scale 2 (nullable, no SQL default); FX_UM nvarchar 10 (nullable). System columns and index (RowPointer, IX_FX_Items_RowPointer) distinguished. AC-9 supported at same-session UI level. AC-11 (close-and-reopen recovery), AC-10 (IDO recovery), and AC-8 (check-in decision) PENDING. No check-in or save performed.**

(Earlier status, after T12: IDO FX_Items VISIBLE in the IDOs runtime Form (observed, same-session UI level): one record, project FX_HelloWorldProject01, alias fxitms, four business properties bound to FX_ItemBase / (none) / FX_Cost / FX_UM with the expected Required and label values, and the FX_UMs domain relationship on FX_UM. The IDO shows as checked out to the operator (row checkbox checked; Check In enabled; Undo Check Out DISABLED, unexplained). No check-in performed. The wizard was closed with its own Close button. SQL Tables / SQL Columns NOT yet inspected (dbo.FX_Items unverified). IDO close-and-reopen recovery (AC-10) not performed. Awaiting coordinator review.**

(Earlier status, after T11: WIZARD COMPLETED. One Finish, one Next, one Create Form "No". The wizard reported "Table and IDO created." (wizard's own message; NOT yet verified in the IDOs or SQL Tables/SQL Columns runtime Forms). Post-creation verification (AC-7 to AC-11), the conditional check-in decision (AC-8), and the AC-12 audit are PENDING a separately authorised task. The wizard is left open at its completion state (Close not pressed). FX_UMs domain relationship is not wizard-exposed (earlier record only); FX_sDescription resource remains unverified; physical table name/schema dbo unverified.**

(Earlier status, after T10: NOT CREATED. Data Maintenance wizard OPEN and staged with ALL FOUR business properties configured and visible (FX_Item/FX_ItemBase/PK/Required; FX_Description/String/150/FX_sDescription; FX_Cost/FX_Cost/Decimal/18/2/0/decimal/FX_sCost; FX_UM/FX_UM/String/10/nvarchar/FX_sUM). Finish NOT invoked; awaiting coordinator decision. The FX_UMs domain relationship is not exposed in the wizard grid (earlier property-class record only). FX_sDescription resource remains unverified.**

(Earlier status, after T9: NOT CREATED. Data Maintenance wizard OPEN and staged: identity values, property 1 (FX_Item / FX_ItemBase / PK / Required) and property 2 (FX_Description / String / 150 / FX_sDescription) verified; property 3 (FX_Cost) named but has NO property class (T9 stopped on a non-tab-related click timeout caused by a leftover active editor overlay); property 4 NOT configured. Finish NOT invoked.**

(Earlier status, after T8: NOT CREATED. Data Maintenance wizard OPEN and staged (identity values and property 1 only). Finish NOT invoked.)

(Earlier status, after T7: NOT CREATED. Pre-wizard checkpoint only.) The collision gates for both `dbo.FX_Items` (SQL) and the `FX_Items` IDO passed in the same session at UI level (T5, T6). The wizard has NOT been opened, and no object has been created, saved, or checked in or out. AC-1 and AC-3 remain qualified or pending, and AC-4 through AC-12 are unperformed. Classification: **observed only (single session, UI level). NOT replay_verified.** Nothing here establishes database durability, cross-session persistence, or physical column types.

## Run identity and record provenance

- Run `R-20261011-020822-9Eej`. Cycle 1 (T1–T2), cycle 2 (T3), cycle 3 (T4), cycle 5 (T5), cycle 6 (T6), cycle 7 (T7). Cycle 4 is not recorded in the handoff notes.
- T1 worker session `fea9354c-2a73-4fde-8173-559e596ad25d` (per the handoff). T2–T7 worker session `7856326a-2d49-49d2-933b-fb1f1b88c8ea`.
- Date: 2026-10-11 (system date). Mongoose Revision Date values read `10/10/2026`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (observed in T1 and T2 on the Designer surface only). Site Developer capability: **not verified** in the native UI.
- Mode: LEARNING MODE, FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User.
- **Record provenance:** this record did not exist at the start of T1 or at T2 (glob `experiments/*` ended at EXP-048). It was created by the T7 worker, as instructed in the T7 bounded instruction, from the operator-approved objective, scope, prohibitions and AC-1 to AC-12 supplied in the task brief. The brief text is reproduced in the sections below; it was not re-derived.
- Evidence directory: `evidence/EXP-049/`. Browser-tool snapshot and console files are in `evidence/playwright/` (written by the tool, not the worker).

## Operator-approved objective (verbatim summary of the brief)

Using only the supported Mongoose Web Designer New Form Definition > New Data > Maintenance wizard, create exactly one `dbo.FX_Items` SQL table and one `FX_Items` IDO in the existing `FX_HelloWorldProject01` project, with table alias `fxitms`. Configure exactly four properties in order:

1. `FX_Item` using `FX_ItemBase`, inheriting String, Length 20, Column Data Type nvarchar, Label String ID `FX_sItem`; Primary Key and Required enabled.
2. `FX_Description`, Data Type String, Length 150, Label String ID `FX_sDescription`.
3. `FX_Cost` using `FX_Cost`, inheriting Decimal, Length 18, Decimal Position 2, Default Value 0, Column Data Type decimal, Label String ID `FX_sCost`.
4. `FX_UM` using `FX_UM`, inheriting FX_UMBase String, Length 10, nvarchar; FX_UMs domain relationship, Domain Property `FX_UM`, Domain List Properties `FX_Description`.

Require the wizard's native Property Class lookup to resolve all three referenced classes without metadata unloading. Prove both target objects absent and all dependencies available before creation. Verify the complete wizard configuration before invoking Finish exactly once. Decline the optional Create Form prompt (`No`). If the new IDO is left checked out, perform exactly one check-in of `FX_Items` only. Then close and reopen the IDOs and SQL Tables/SQL Columns runtime Forms to recover and compare the definitions. Preserve every existing object and checkout state.

**Out of scope:** an FX_Items Multi-View application Form (EXP-050); Form components, captions, scripts or runtime behaviour; any change to FX_UMs, FX_UMBase, FX_UM, FX_ItemBase or FX_Cost definitions, relationships or checkout states; any string resource; FX_HelloWorldProject01 or unrelated IDOs; application records; additional properties, relationships, defaults, validators or indexes; schema synchronization, deployment, metadata unloading, direct SQL.

**Prohibited (key items):** non-FX_ artifacts; other experiments or replays; credentials; invoking Finish more than once or retrying an ambiguous Finish; accepting the Create Form prompt (must answer `No`); additional Save outside the documented wizard workflow; any metadata lifecycle action other than the single conditional FX_Items check-in; browser JavaScript, internal APIs, scripts or direct SQL; re-authentication or browser refresh to overcome a failed prerequisite; proceeding past a collision-gate ambiguity or a missing/conflicting class.

## Acceptance-check status (after T7; SUPERSEDED by the T18 reconciliation)

The table below is the T7 pre-wizard snapshot, kept for history. Its "NOT PERFORMED" rows for AC-4 to AC-12 are out of date. The current reconciled matrix is in the T18 section and in `evidence/EXP-049/T18-final-evidence-audit.md` section 1.

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Preflight | **PENDING (qualified).** Authenticated Mongoose session and DEM identity bar observed (T1, T2, T4–T7). Save observed disabled on each Form snapshot taken in T2–T7 (not every Form was inspected in T1). No sign-in, session-expired or configuration prompt observed in T2–T7. Designer footer `ScopeType: User` observed on the Designer surface (T2). | `T1-00-preflight-initial-state.png`; `T1-23-designer-scope-confirmed-IdoPropertyClasses-design-view.png`; `T2-recovery-inspection-checkpoint.md`; `T3-webclient-state-checkpoint.md`; `T7-01-exportimportstrings-state-before-lookup.png` | Site Developer capability not verified. The Sql Tables runtime tab still holds an **unsaved insertion placeholder row** (blue star, blank Table Name and Schema) and a retained FiP criterion `FX_Items` from T5 (last observed T5; not re-inspected in T7). Under AC-1 "no pending unrelated changes" this needs an operator decision (see Open decisions). |
| **AC-2** Collision gate | **SUPPORTED at same-session UI level (both gates).** SQL: T5, positive control `FX_HelloWorld01` returned one record (schema dbo, PK and IX constraints); target `FX_Items` returned no data row, only a blue-star placeholder. IDO: T6, positive control `FX_HelloWorld01` returned one record (project `FX_HelloWorldProject01`, Revision 2, alias `fxhw`); target `FX_Items` returned zero rows. | `T5-01`..`T5-04` PNGs and `T5-sqltables-collision-gate.md`; `T6-01`..`T6-04` PNGs and `T6-idos-collision-gate.md` | Same session, UI level only. Not an independent database query. The IDO Name and Table Name criteria match mode (exact or contains) is not stated by the UI. The SQL criterion does not filter by schema. Results rest on the grid and detail fields, with the blue-star marker verified only in screenshots (not in the accessibility tree). |
| **AC-3** Dependency gate | **PARTIALLY SUPPORTED (qualified).** FX_HelloWorldProject01 available and selectable in IDO Projects (T1-21). FX_ItemBase String / 20 / nvarchar / FX_sItem (T1-03). FX_Cost Decimal / 18 / 2 / default 0 / decimal / FX_sCost (T1-05, T1-00). FX_UM String / 10 / nvarchar / FX_sUM, Base FX_UMBase, domain FX_UMs / FX_UM / FX_Description (T1-24, and the T3 accessibility snapshot). | `T1-21`, `T1-03`, `T1-05`, `T1-24`; `T2`/`T3` checkpoints | **FX_sDescription NOT VERIFIED.** The Export/Import Strings Form was opened (T7). Its Filter in Place is disabled, there is no String Name criterion, and the grid shows one blank insertion row. No supported read-only lookup was available, and Preview/Export were not used because they are not read-only lookups. Per the brief this is conditional ("verified if its resource lookup is accessible"). Checkout states (FX_ItemBase, FX_Cost, FX_UM, FX_UMBase checked out to the operator) observed and unchanged. The FX_UMBase checkout is inherited from the earlier EXP-047/048 records. |
| **AC-4** Wizard identity | **NOT PERFORMED.** Wizard not opened. | — | — |
| **AC-5** Property configuration | **NOT PERFORMED.** | — | — |
| **AC-6** Single wizard completion | **NOT PERFORMED.** No Finish, no Create Form response. | — | — |
| **AC-7** IDO post-creation baseline | **NOT PERFORMED.** | — | — |
| **AC-8** Conditional IDO check-in | **NOT PERFORMED.** No lifecycle action taken. | — | — |
| **AC-9** SQL post-creation baseline | **NOT PERFORMED.** | — | — |
| **AC-10** IDO recovery | **NOT PERFORMED.** | — | — |
| **AC-11** SQL recovery | **NOT PERFORMED.** | — | — |
| **AC-12** Preservation and final audit | **PARTIAL.** Collision gates reconciled (AC-2). Lifecycle counts per task are below. No wizard, Finish, Create Form, check-in or checkout action in T1–T7. Preservation of checkout states is observed in screenshots only, not independently verified. | Section "Action counts" below; per-task records | Observed only. No repository change other than EXP-049-owned documentation. The repository working tree was not inventoried in T7 (outside scope); unverified working-tree state from the session start (`git status`: modified files under `tools/learning-harness/` and `harness.config.example.json`, and untracked `evidence/EXP-049/`) is disclosed but was not changed. |

## Task history (T1–T7)

| Task | Cycle | Purpose | Outcome |
| --- | --- | --- | --- |
| **T1** | 0 | Full brief attempt: preflight, collision gates, dependency reads, and an attempted wizard path. | **Stopped at the 150-turn limit** with no terminal report. Controller audit (`evidence/EXP-049/harness-audit-T1.md`): 52 browser actions, 71 reads, 2 read errors (EXP-049 record path not found), 12 `browser_type` calls, 8 Tab and 8 F4 presses, 1 audit issue. The audit records **no** wizard open, field entry, Finish, Save, Create Form response, check-in or check-out. The typed text is not recorded in the audit, so the content of each `browser_type` is unverified. Left in state: IdoPropertyClasses Designer open (tab 0); Sql Tables placeholder row and retained `FX_Items` criterion (observed later); FX_UM Property Classes view (tab 1, T1-24). |
| **T2** | 1 | Read-only recovery inspection of T1. | Confirmed the record was missing and that the wizard was not opened. Single snapshot of the Designer (tab 0), settled: Save disabled, no dialog. Two screenshot attempts timed out (not saved). Read T1 captures: positive controls worked; IDO FX_Items query showed an empty grid with no visible criterion (ambiguous); Sql Tables FX_Items query showed a blank insertion placeholder. Checkpoint: `T2-recovery-inspection-checkpoint.md`. |
| **T3** | 2 | Read-only Web Client state. | `browser_tabs select index=1` failed once with "Tab 1 not found" (the list had shown it); one corrected select succeeded. One snapshot of tab 1: Property Classes active on FX_UM; Save disabled; no dialog. The Sql Tables tabpanel was not in the accessibility tree, so its placeholder state could not be established without interacting with it. Checkpoint: `T3-webclient-state-checkpoint.md`. |
| **T4** | 3 | Select the Sql Tables tab; inspect state only. | The current tab was tab 0 at start; tab 1 was selected, then the Sql Tables tab was clicked once. Snapshot: one blank row, Table Name and Schema empty, Save disabled, no dialog. Blue-star marker not in the accessibility tree. Checkpoint: `T4-sqltables-state-checkpoint.md`. |
| **T5** | 5 | SQL Tables collision gate (two FiP queries). | Positive control `FX_HelloWorld01` returned one record; target `FX_Items` returned only a blank blue-star placeholder. **SQL portion of AC-2 passed (same-session UI).** Found a retained `FX_Items` criterion from T1 in the FiP criteria row; replaced it (Control+A, then type). Report: `T5-sqltables-collision-gate.md`. |
| **T6** | 6 | IDOs collision gate (two FiP queries). | Positive control `FX_HelloWorld01` returned one IDO with project `FX_HelloWorldProject01` and alias `fxhw`; target `FX_Items` returned zero rows. **IDO portion of AC-2 passed (same-session UI).** Found a retained `FX_Items` criterion from T1 in the IDO Name criterion; replaced it. Report: `T6-idos-collision-gate.md`. |
| **T7** | 7 | Final pre-wizard dependency checkpoint and this record. | Read-only FX_sDescription lookup attempt on the Export/Import Strings Form: **unavailable** (Filter in Place disabled; no String Name criterion); recorded as unverified. Not performed: wizard, Finish, Save, New, check-in, checkout, Designer change, Form close. Record created here. |

## Evidence index (paths, observed content, and limits)

**T1 (25 PNG + audit):** `evidence/EXP-049/T1-00` to `T1-24` PNGs and `harness-audit-T1.md`. Key captures: `T1-00-preflight-initial-state.png` (FX_Cost Property Classes, Locked By operator, checked out); `T1-03` (FX_ItemBase: String 20 nvarchar FX_sItem, checked out); `T1-05` (FX_Cost: Decimal 18 2 default 0 decimal FX_sCost, checked out); `T1-09` (IDO positive control FX_HelloWorld01, project FX_HelloWorldProject01, alias fxhw); `T1-11` (IDO FX_Items query, empty grid, no criterion visible, **ambiguous**; superseded by T6); `T1-12`/`T1-13` (Sql Tables caution alert, then blank placeholder); `T1-16` (SQL positive control FX_HelloWorld01, schema dbo, PK and IX); `T1-19` (SQL FX_Items query, blue-star placeholder, **not an absence result on its own**; superseded by T5); `T1-21` (IDO Projects FX_HelloWorldProject01 exists); `T1-23` (Designer scope User on IdoPropertyClasses design view); `T1-24` (Web Client FX_UM, checked out, Save greyed). Not inspected in T2: T1-01, T1-02, T1-04, T1-06, T1-07, T1-08, T1-10, T1-14, T1-15, T1-17, T1-18, T1-20, T1-22.

**T2:** `T2-recovery-inspection-checkpoint.md`. The T2 screenshot `T2-00-recovery-current-browser-state.png` was **not saved** (two timeouts).

**T3:** `T3-webclient-state-checkpoint.md` (no screenshot taken).

**T4:** `T4-sqltables-state-checkpoint.md`. Tool-saved snapshot `evidence/playwright/page-2026-10-10T18-21-11-350Z.yml`.

**T5:** `T5-01-sqltables-positive-control-criterion-FX_HelloWorld01-before-F4.png` (criterion in FiP row); `T5-02-sqltables-positive-control-FX_HelloWorld01-after-F4-settled.png` (record row with arrow, schema dbo, enabled dependent buttons, PK and IX constraint rows); `T5-03-sqltables-target-criterion-FX_Items-before-F4.png` (criterion `FX_Items`); `T5-04-sqltables-target-FX_Items-after-F4-settled.png` (blue-star placeholder, empty fields, disabled dependent buttons, no constraint rows); `T5-sqltables-collision-gate.md`.

**T6:** `T6-01-idos-positive-control-criterion-FX_HelloWorld01-before-F4.png` (criterion in detail field; echo row with blank project and revision); `T6-02-idos-positive-control-FX_HelloWorld01-after-F4-settled.png` (record `FX_HelloWorld01`, project `FX_HelloWorldProject01`, label `oFX_HelloWorld01`, revision 2, Tables row alias `fxhw`, Check Out enabled); `T6-03-idos-target-criterion-FX_Items-before-F4.png` (criterion `FX_Items`; echo row with blank fields); `T6-04-idos-target-FX_Items-after-F4-settled.png` (empty grid, blank detail, Save greyed); `T6-idos-collision-gate.md`.

**T7:** `T7-01-exportimportstrings-state-before-lookup.png` (Export mode, Source `en-US`, Target blank, one blue-star blank row, Preview and Export buttons, Filter in Place greyed, Save greyed, status `Export (Export/Import Strings 1 of 1)`).

**Browser-tool files (not EXP-049 files):** `evidence/playwright/page-2026-10-10T18-21-11-350Z.yml` (T4), `page-...18-25-18-650Z.yml`, `...18-25-42-126Z.yml`, `...18-25-51-420Z.yml`, `...18-26-03-123Z.yml` (T5), `...18-28-19-642Z.yml`, `...18-28-25-167Z.yml`, `...18-28-50-277Z.yml`, `...18-29-09-646Z.yml` (T6), `...18-32-00-141Z.yml` (T7), and console logs `evidence/playwright/console-2026-10-10T18-*.log`.

## Observations that need a decision (not explained)

1. **Recurring tab-0 selection.** At the start of T4, T5, T6 and T7, `browser_tabs list` showed tab 0 (the Designer, `MGForm=IdoPropertyClasses`) as current, though the previous task had left tab 1 selected. Tab 1 was selected again each time. **The cause is not known.** No worker action changed the selection between tasks.
2. **Delete enabled on the target result.** On the IDOs Form, the toolbar Delete button was disabled on the positive control (T6-02 snapshot) and enabled on the target result (T6-04 snapshot) and again at the start of T7. The IDO grid had no record. **Delete was never pressed** (action counts across T5–T7: 0), and the reason for its enabled state is **not established**. The Sql Tables toolbar also showed Delete enabled.
3. **Retained FiP criteria.** Both T5 and T6 found the criterion from T1 still in place when Filter in Place was opened (SQL `FX_Items`; IDO `FX_Items`). This retention behaviour is observed, not explained.
4. **Sql Tables insertion placeholder.** A blank blue-star row (T1-13, T1-19, T4, T5-04) persists on the Sql Tables tab. It is not a saved record. Save has been disabled in every observation. Its state after T5 was not re-inspected in T7.
5. **Typed text in T1 unrecorded.** The T1 audit does not record the strings typed into the 12 `browser_type` calls. Treat T1's typed values as unverified.
6. **Tool-reported snapshot and screenshot timeouts.** T2 had two screenshot timeouts on tab 0 (`fonts loaded` then timeout). Later screenshots succeeded.
7. **Ambiguous T1 absence results superseded.** `T1-11` and `T1-19` were not conclusive absence results. They are superseded by T5 and T6, which passed.

## Action counts (T1–T7, controller-attributable where stated)

| Category | T1 (audit) | T2–T7 (worker counts) |
| --- | --- | --- |
| Wizard opened | 0 | 0 |
| Finish | 0 | 0 |
| Create Form response | 0 | 0 |
| Save (any) | 0 | 0 |
| New | 0 | 0 |
| Delete | 0 | 0 |
| Check In / Check Out / Undo Check Out | 0 | 0 |
| Close / reopen of runtime Forms | 0 (Select Form opens: 4) | 0 |
| Filter in Place opens | several (T1 audit; see audit rows 22, 35, 45, 55, 76, 96, 117) | 4 (T5: 2; T6: 2) |
| FiP criterion entries | 12 `browser_type` calls (flagged; criteria and Select Form filters) | 4 (T5: 2; T6: 2), plus 1 Select-All (T5) |
| F4 query runs | 8 F4 presses (T1) | 4 (T5: 2; T6: 2) |
| Screenshots saved | 25 (T1) | T2: 0 (2 timeouts); T3: 0; T4: 0; T5: 4; T6: 4; T7: 1 |

## Decisions required before any wizard task

1. **AC-1 pending decision:** whether the unsaved Sql Tables insertion placeholder and its retained `FX_Items` criterion may remain while the wizard is used. Clearing or saving them is an operator decision and was not done.
2. **FX_sDescription (AC-3):** either accept the conditional wording of AC-3 (verified only if the lookup is accessible), or identify a supported read-only route (for example, a native String Name criterion on another Form). Preview and Export were deliberately not used.
3. **Site Developer capability** is not verified. Confirm the expected capability, or accept it as unverified.
4. **Delete enabled indication, tab-0 reversion, and the Designer tab (tab 0, IdoPropertyClasses)**: these are observations, not blockers; the operator may decide whether to close the Designer.

## Prerequisite verdict (after T7)

- **Collision gates (AC-2):** both passed, same-session UI level.
- **Dependencies (AC-3):** displayed metadata for FX_HelloWorldProject01, FX_ItemBase, FX_Cost and FX_UM matches the brief. FX_sDescription is unverified.
- **Preflight (AC-1):** qualified. Unsaved Sql Tables placeholder remains (decision 1 above).

**Verdict: the prerequisites do not yet fully permit the wizard task.** They would permit it if the coordinator or operator accepts two qualifications: the AC-3 conditional treatment of FX_sDescription, and the retained Sql Tables placeholder under AC-1. This is a coordinator decision. The wizard was not opened in T7, and no subsequent task has been authorized by this record.

## T8 — Wizard preflight, identity and property 1 (wizard OPEN, stopped for coordinator review)

- Scope: open the Data Maintenance wizard by the EXP-044 route; set IDO Name, Table Alias; configure property 1 only (FX_Item, FX_ItemBase, Primary Key, Required). No Finish, no Next, no Save, no Create Form response, no check-in or checkout, no Designer edit, no Cancel.
- Route (EXP-044): Designer toolbar New → Form Wizard Selection (New Form active; Category New Data; Wizard Maintenance) → OK → Data Maintenance Wizard page 1. The first two Designer `New` clicks timed out (element not visible/stable); the Designer tab was selected explicitly, then one corrected click succeeded.
- Identity on page 1: IDO Name `FX_Items` (typed). IDO Project Name `FX_HelloWorldProject01` (pre-populated by the wizard; its lookup was not opened). Table Alias `fxitms` (typed). SQL table name is **derived** from the IDO name: the Table Name field is read-only with Site Split unchecked, so a typed entry was refused and nothing was entered. Schema `dbo` is not shown on any page before Finish, so it remains unverified.
- Property 1 (verified in the grid before stopping): Name `FX_Item`; Property Class `FX_ItemBase` (chosen from the native lookup, which listed FX_Cost, FX_ItemBase and FX_UM); Data Type `String`; SQL Data Type `nvarchar`; Property Length `20`; Primary Key checked; Required checked (ticked automatically by Primary Key, as EXP-044 recorded); Label String ID `FX_sItem`.
- Counts: wizard opened 1; Form Wizard Selection OK 1; Finish 0; Next/Back 0; Cancel 0; Create Form 0; Save 0; check-in/checkout 0; Designer edit 0; plain entries 3 (IDO Name, Table Alias, Name); refused entry 1 (Table Name, nothing entered); lookup selections 1.
- Evidence: `evidence/EXP-049/T8-01-wizard-page1-identity-and-property1-staged.png`, `evidence/EXP-049/T8-02-wizard-property1-verified-before-stop.png`, `evidence/EXP-049/T8-snapshot-after-name-entry.yml`, and `evidence/EXP-049/T8-wizard-preflight-property1-checkpoint.md`. The wizard is still open on the Designer tab (tab 0). It was deliberately not cancelled, since Cancel raises a discard prompt and the task asked for the wizard to stay as-is.
- Corrections recorded: the first screenshot (T8-01) showed the property Name cell still blank; the Name was entered afterwards and verified. The T8-02 screenshot does not show the PK/Required/Label columns (scrolled out of view), so those are verified in the accessibility snapshot.
- AC status after T8: AC-2 unchanged (SQL and IDO passed, same-session UI). AC-4 partly (route and identity visible; project not selected through its lookup; schema dbo unverified). AC-5 partial (property 1 only; properties 2 to 4 not configured; the lookup listed all three classes). AC-1 unchanged (Designer clean; Site Developer not verified). AC-3 FX_sDescription still unverified. AC-6 to AC-12 not performed.
- Open for coordinator: (a) whether a new task may configure properties 2 to 4; (b) whether the staged wizard may remain open; (c) the earlier decisions on the Sql Tables placeholder, the FX_sDescription lookup, and Site Developer capability.

## T9 — Properties 2 to 3 (partial; STOPPED on a non-tab-related timeout; wizard OPEN)

- Scope: keep T8 identity and property 1; configure property 2 (FX_Description, String, 150, FX_sDescription); configure property 3 (FX_Cost via native lookup). No Finish, Next, Back, Cancel, Save, Create Form, check-in or checkout, Designer edit, or close/reopen.
- Property 2 (verified in the grid): Name `FX_Description`; Data Type `String` (native list); SQL Data Type `nvarchar` (auto); Length `150`; Primary Key and Required unchecked; Label String ID `FX_sDescription` (typed into the combobox, not confirmed against a resource list); Default Value and Decimal Precision left blank.
- Property 3: Name `FX_Cost` typed. The Property Class selection **was not made**: the click on the row 3 class cell timed out, intercepted by an active grid-cell editor overlay (the row 1 Property Class combobox, `mgcombo-3499`). The brief treats a non-tab-related timeout as an immediate stop, so no retry was made. The row 3 class editor is left open and blank.
- Property 4: not added.
- Property 1 (unchanged): FX_Item / FX_ItemBase / String / nvarchar / 20 / PK checked / Required checked / FX_sItem.
- Identity (unchanged): IDO Name `FX_Items`; IDO Project `FX_HelloWorldProject01`; Table Alias `fxitms`; Site Split unchecked; Table Name empty and read-only.
- Counts: Add Row 2; typed entries 4 (Name x2, Length x1, Label x1); Data Type list selection 1; class lookup selections 0 in T9; PK/Required clicks 0; intercepted click 1 (no retry); Finish 0; Next/Back 0; Cancel 0; Create Form 0; Save 0; check-in/checkout 0; Designer edits 0.
- Evidence: `evidence/EXP-049/T9-wizard-four-property-precommit.md` (matrix, counts, limits), `T9-00` to `T9-05` snapshots (YAML), `T9-06-wizard-stop-state-row3-class-intercepted.png`.
- AC status after T9: AC-5 **not met** (property 3 incomplete; property 4 absent). AC-4 supported at this stage. AC-6 not performed. AC-1, AC-2, AC-3 unchanged (AC-3 FX_sDescription still unverified).
- Open for coordinator: authorize a follow-up task to clear the leftover row 1 editor overlay by an approved supported action, complete property 3 (FX_Cost lookup and inherited values), and configure property 4 (FX_UM and the FX_UMs domain relationship) before any Finish.

## T10 — Properties 3 and 4; four-property pre-Finish verification (wizard OPEN, Finish NOT invoked)

- Scope: complete property 3 (FX_Cost via the row's own active editor Open control) and add property 4 (FX_UM via the same mechanism); verify all four rows; no Finish, Next, Save, Cancel, Create Form, check-in, checkout, Designer edit, or Sql Tables touch.
- Property 3: class selected from the native lookup (`FX_Cost`, the option at the row's own Open control). Resolved to FX_Cost with Data Type `Decimal`, SQL Data Type `decimal`, Length 18, Decimal Precision 2, Default Value 0, Label `FX_sCost`, PK and Required unchecked. Matches the established definition (T1-00, T1-05, EXP-048).
- Property 4: one Add Row, Name `FX_UM`, class selected from the native lookup (`FX_UM`; FX_UMBase also listed, not selected). Resolved to FX_UM with String, SQL Data Type `nvarchar`, Length 10, Label `FX_sUM`, PK and Required unchecked. Matches the established definition (T1-24, T3).
- Domain relationship (FX_UMs / FX_UM / FX_Description): **not a column in the wizard property grid, so not wizard-verified**; supported only by the earlier property-class record. Stated as such in the T10 report.
- Exactly four business rows in order; no fifth property; no relationship assigned in the wizard.
- Identity unchanged: IDO Name `FX_Items`, project `FX_HelloWorldProject01`, alias `fxitms`, Site Split unchecked, Table Name empty and read-only.
- Counts: lookup opens 2 (own Open control each); class selections 2; Add Row 1; typed entries 1 (`FX_UM`); Tab commits 5; screenshots 3; timeouts 0; scroll attempts 2 (wheel no effect; arrow click partly scrolled); Finish 0; Next/Back 0; Cancel 0; Create Form 0; Save 0; check-in/checkout 0; Designer edits 0; close/reopen 0.
- Limits: the Property Class column is clipped in the one post-scroll screenshot (`T10-08`); full class names are in the accessibility snapshots. The SQL Data Type editor of row 4 is left active (value `nvarchar`, nothing typed). FX_sDescription is typed, not resource-verified. Schema `dbo` is not visible before Finish.
- Evidence: `evidence/EXP-049/T10-four-property-precommit-verification.md` (full matrix, counts, metadata comparison, unexposed fields, pre-Finish assessment), `T10-00` to `T10-09` snapshots, `T10-06`/`T10-07`/`T10-08` screenshots.
- AC status after T10: AC-5 **met at the wizard grid level** (four intended properties in order; lookup resolved all three classes), with the FX_UM domain relationship qualified as earlier-record only. AC-4 met for identity (schema dbo unverified until Finish). AC-3 FX_sDescription still unverified. AC-6 to AC-12 not performed.
- Pre-Finish assessment: ready for a coordinator decision on Finish. Finish must not be invoked without that authorization.

## T11 — Controlled wizard completion (single Finish; Create Form declined)

- Pre-Finish: row-4 SQL Data Type editor committed with Tab (`nvarchar`, unchanged). Four business rows re-verified: FX_Item/FX_ItemBase/String/nvarchar/20/PK+Required/FX_sItem; FX_Description/no class/String/nvarchar/150/FX_sDescription; FX_Cost/FX_Cost/Decimal/decimal/18/2/0/FX_sCost; FX_UM/FX_UM/String/nvarchar/10/FX_sUM. Identity on page 1: FX_Items, FX_HelloWorldProject01, fxitms; Site Split unchecked; Table Name empty read-only.
- Next (once): page 1 → last page (Create Scripts unchecked, Finish enabled). No prompt, no validation.
- Finish (once): alertdialog "Do you want to create a form for FX_Items?" (Create Form prompt, expected).
- No (once): prompt closed; wizard message **"Table and IDO created."**; Back/Next/Finish disabled; Close enabled (not pressed).
- Counts: Finish 1; Next 1; Create Form No 1; Yes 0; Cancel 0; Close 0; Save 0; New 0; check-in/checkout 0; Designer edits 0; property-class edits 0; Tab commits 1; screenshots (worker) 2.
- Not performed (out of T11 scope): IDOs or SQL Tables runtime verification; close/reopen; recovery queries; check-in decision; AC-12 audit. The completion message is the wizard's own report only.
- Evidence: `evidence/EXP-049/T11-wizard-completion.md` (full counts, pre-Finish matrix, native results, qualifications); `T11-00`, `T11-01` snapshots; `T11-02` (last page before Finish), `T11-03` (completion) screenshots; tool-saved `evidence/playwright/page-2026-10-10T18-50-49-893Z.yml`, `page-2026-10-10T18-51-06-826Z.yml`, `page-2026-10-10T18-51-13-476Z.yml`.
- AC status after T11: AC-6 **supported at wizard-completion level** (one Finish; one No to the Create Form prompt; "Table and IDO created." observed; no FX_Items application Form created by the worker). AC-4 supported (identity on page 1 pre-Next). AC-5 supported at grid level (four rows; FX_UM domain relationship qualified). AC-7 to AC-11 **pending** post-creation verification. AC-8 **pending** (checkout state of FX_Items unknown). AC-12 partial.
- Observed: creation is the wizard's report, not yet a verified runtime or SQL state. Not replay_verified. No physical database durability claimed.

## T12 — Wizard closed; created IDO verified (read-only; no check-in)

- Wizard: closed once with its own Close button (completed state "Table and IDO created."; no discard prompt). No Cancel, Finish, Next, Create Form response.
- IDOs runtime Form (existing tab): one native Filter-in-Place query, criterion `FX_Items` (re-entered, F4 once). Result: **one** FX_Items row (checked checkbox; Locked By operator; Revision 1; 10/10/2026). Detail: Project `FX_HelloWorldProject01`; Label/Caption `oFX_Items`; Access G6R. Tables sub-grid: `FX_Items | fxitms | Primary Base | Inner`. Save disabled.
- Checkout indication (native display): row checkbox checked; **Check In enabled; Undo Check Out disabled**. Consistent with checkout to the operator, but the disabled Undo is unexplained (the checked-out Property Classes showed both enabled). Not interpreted further; no check-in performed (AC-8 decision pending).
- IDO Properties runtime Form opened from the IDOs `Properties` button (new tab, left open). 11 property rows: four business (FX_Item, FX_Description, FX_Cost, FX_UM) and seven system (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow). Business rows: Bound to Column; alias fxitms; sequence 1–4; Pseudo Key unchecked (no IDO-level PK flag). FX_Item: FX_ItemBase, String 20, nvarchar, Required checked, FX_sItem. FX_Description: no class, String 150, nvarchar, Required unchecked, FX_sDescription. FX_Cost: FX_Cost, Decimal 18, precision 2, default 0, decimal, Required unchecked, FX_sCost. FX_UM: FX_UM, String 10, nvarchar, Required unchecked, FX_sUM, **Domain IDO FX_UMs / Domain Property FX_UM / Domain List Properties FX_Description** (first observation of the domain relationship on the created IDO).
- Counts: wizard Close 1; Finish/Next/Back/Cancel 0; Create Form response 0 (this task); tab select 1 (+1 IDOs tab click); FiP open 1; criterion entry 1; F4 1; runtime Form opened 1 (IDO Properties); row selections (view) 2; check-in/checkout 0; Save/New/Delete 0; SQL Tables/Columns 0.
- Evidence: `evidence/EXP-049/T12-created-ido-verification.md`; `T12-00` to `T12-01` snapshots (YAML); `T12-02` (criterion before F4), `T12-03` (settled IDO), `T12-04` (IDO Properties rows), `T12-05` (FX_Cost row), `T12-06` (FX_UM row) screenshots.
- AC status after T12: AC-7 **supported at same-session UI level** (display values; qualified as IDO-level). AC-4, AC-5 supported (earlier). AC-6 supported at wizard level (T11). AC-8 **pending** (check-in decision; Undo disabled unexplained). AC-9, AC-10, AC-11 **not performed**. AC-12 partial.
- Open items: Undo Check Out state; IDO Properties tab left open; PK not an IDO flag (SQL step); match mode of the IDO criterion; FX_sDescription resource unverified.

## T13 — Post-creation SQL table and columns verification (read-only; no check-in)

- Sql Tables: Filter in Place once, criterion `FX_Items` (re-entered over the retained pre-creation T5 criterion), F4 once. Result: one real record, Table Name `FX_Items`, Schema `dbo`, row-arrow marker (not a blue star); Columns... enabled; New/Modify Constraint enabled; Update Current Table disabled; Save disabled. Constraints: `PK_FX_Items` (Primary Key, description `FX_Item`) and `IX_FX_Items_RowPointer` (Index, description `RowPointer`).
- Sql Columns (Columns... opened once; read-only detail views): FX_Item Column Id 2, nvarchar, Length 20, Is Nullable unchecked, Primary Key checked, Key Sequence 1, Default blank. FX_Description Column Id 3, nvarchar, Length 150, Is Nullable checked, PK unchecked. FX_Cost Column Id 4, decimal, Length 18, Decimal Position 2, Is Nullable checked, PK unchecked, Default blank (IDO default 0 is not an SQL column default). FX_UM Column Id 5, nvarchar, Length 10, Is Nullable checked, PK unchecked, Default blank. RowPointer Column Id 10, RowPointerType over uniqueidentifier, Is Nullable unchecked, Default `newid()` (system). CreatedBy, UpdatedBy, CreateDate, RecordDate, NoteExistsFlag, InWorkflow listed as system but not opened.
- Counts: Sql Tables runtime tab click 1; FiP open 1; criterion entry 1; F4 1; Columns... 1; Columns row selections 4 (view only); screenshots 7; Save/New/Delete/Refresh 0; constraint actions 0; checkout/check-in 0; wizard 0; SQL writes 0.
- Evidence: `evidence/EXP-049/T13-created-sql-table-and-columns-verification.md`; screenshots `T13-01` to `T13-07`; snapshot `T13-00` plus tool-saved snapshots.
- AC status after T13: AC-9 **supported at same-session UI level** (identity; intended business columns, types, lengths, precision and scale; FX_Item primary key and not nullable; system columns and index distinguished; nullability of the other three recorded as displayed). AC-11 **not performed** (the first post-creation SQL inspection, not close-and-reopen recovery). AC-8 and AC-10 still pending.
- Findings: FX_Cost has no SQL default while the IDO shows default 0 (inherited/explicit display difference, unresolved). FX_Description, FX_Cost and FX_UM are nullable on the SQL side; the spec does not require otherwise, so this is recorded and not treated as a defect.
- Runtime state left in place: Sql Tables and Sql Columns tabs open and clean (Save disabled, no dialog); IDO Properties tab open from T12.

## T14 — Conditional check-in of FX_Items only (one native Check In)

- Preconditions (observed): IDOs runtime Form; one record IDO Name `FX_Items`, project `FX_HelloWorldProject01`, Tables entry `FX_Items` alias `fxitms` (Primary Base); row checkbox checked; Locked By operator; Check In enabled; Undo Check Out disabled (not used); Save disabled; no dialog.
- Action: Check In once (no retry, no timeout). Response: informational alertdialog "Source control integration is currently disabled in the current configuration. The item will not be checked in to source control." acknowledged with OK once. No other prompt.
- Post-action (settled): row checkbox cleared; Locked By blank; Revision Num 1 to 2; button Check Out enabled; Undo Check Out disabled; project, label, caption and Tables entry unchanged; Save disabled.
- Counts: Check In 1; notice OK 1; Undo/Check Out 0; Save/New/Delete/Refresh 0; close/reopen 0; property-class, string, SQL and column changes 0; wizard 0; SQL/JS/unload 0; screenshots 2.
- Evidence: `evidence/EXP-049/T14-fx-items-conditional-checkin.md`; `T14-01` (precondition), `T14-02` (post-action) screenshots; `T14-00` snapshot; tool snapshots `page-...19-00-30-382Z.yml`, `...19-00-39-803Z.yml`, `...19-00-48-168Z.yml`.
- AC status after T14: AC-8 **supported at same-session UI level** (one check-in; resulting checked-in state; no property class or other IDO touched). Qualified: no reopen or database-level confirmation; the disabled Undo Check Out state before the action remains unexplained. AC-10 and AC-11 **pending** (reserved). AC-12 partial.
- Runtime state left: IDOs tab active (Check Out button shown; no dialog); Sql Columns, Sql Tables and IDO Properties tabs open and untouched.

## T15 — IDOs ordinary close/reopen (partial; recovery query NOT completed)

- Close: IDO Properties (native Form-tab Close, once) then IDOs (native Form-tab Close, once). Both removed from the Form-tab list; no dialog or unsaved-change prompt; Save disabled. Screenshot `T15-01`.
- Reopen: Open toolbar → Select Form (filter corrected from the stale `ExportImportStrings` to `IdoCollections`; row IDOs / IdoCollections; OK once). IDOs Form reopened (`favoriteContext=IdoCollections`), Save disabled, no dialog.
- Recovery query: NOT completed. Filter in Place reference timed out on the disabled System Notes button (stale ref; one fresh snapshot). The second FiP click succeeded, but the IDO Name criteria field (`CollectionNameEdit`) is read-only and refused the `FX_Items` entry; it held the retained `ABDataServices`. One corrected inspection did not expose an editable criterion. Stopped without retry; no F4.
- Counts: Form-tab close 2; Select Form open 1 (filter edit 1; row 1; OK 1); FiP clicks 2; stale-ref timeout 1; read-only refusal 1; fresh snapshots 2; criterion entries 0; F4 0; recovery queries 0; check-in/checkout 0; Save/New/Delete 0; wizard 0; SQL/property/string changes 0.
- Evidence: `evidence/EXP-049/T15-ido-close-reopen-persistence.md`; `T15-00` (precheck YAML), `T15-01` (closed-state screenshot), `T15-02`, `T15-03`, `T15-04` (YAML); tool snapshots `page-...19-02-57-505Z.yml` to `...19-04-02-828Z.yml`.
- AC status after T15: AC-10 **NOT established**. The reopen is confirmed but no recovered record was observed, so project, alias, property definitions and checked-in state after reopen remain unverified. AC-11 **not performed** (reserved). AC-8 unchanged from T14 (not re-verified).
- Open items: the read-only criteria field after reopen (possible state or layout difference; not established); the stale `ABDataServices` criterion on the reopened Form; the unexplained Undo Check Out state; the still-open Sql Tables / Sql Columns / Property Classes tabs.

## T16 — IDO recovery from the reopened IDOs Form (ordinary same-session close/reopen)

- Initial mode (record view, not criteria): IDOs grid unfiltered (361 IDOs); detail populated for ABDataServices (a loaded record, not a criterion); Save disabled; no dialog.
- One Filter in Place transition (f1e34). Fresh snapshot: criteria row present; IDO Name textbox active with no readonly attribute in the snapshot; record detail cleared. Criteria mode treated as established by the combined indicators.
- Query: IDO Name FX_Items entered once; pre-F4 screenshot; F4 once; settled: one record.
- Recovered: IDO FX_Items; Project FX_HelloWorldProject01; Table FX_Items alias fxitms (Primary Base); Revision 2; Label/Caption oFX_Items; Access G6R; Locked By blank; row checkbox not checked; Check Out enabled; Undo Check Out disabled (not used as evidence).
- IDO Properties (Properties button, once; read-only): 11 rows (4 business, 7 framework); FX_Item detail read (IDO FX_Items, alias fxitms, Bound to Column, Column FX_Item, FX_ItemBase, String 20, nvarchar, Required checked, FX_sItem, sequence 1). FX_Description, FX_Cost and FX_UM rows listed; their detail and the FX_UM domain relationship were not re-read in T16 (carried from T12).
- Counts: FiP click 1; criterion entry 1; F4 1; recovery queries 1; Properties click 1; fresh snapshots 3; stale ref not found 1 (not retried); check-in/checkout 0; Save/New/Delete/Refresh 0; Form close/reopen in T16 0; SQL actions 0; wizard 0.
- Evidence: `evidence/EXP-049/T16-ido-reopen-recovery.md`; `T16-00`, `T16-02`, `T16-04` (YAML); `T16-01`, `T16-03`, `T16-05`, `T16-06` (PNG).
- AC status after T16: AC-10 **supported at same-session ordinary Form close/reopen level** (qualified; not replay_verified; not database-level). AC-8 checked-in state **re-observed** after reopen (no new lifecycle action). AC-11 **not attempted** (reserved). AC-12 partial.
- Unresolved: the reason the criteria field was read-only in T15 and editable in T16 (inference only; the specialist consultation reference was not available to read); the unexplained disabled Undo Check Out; FX_Cost and FX_UM detail and FX_UM domain relationship not re-read in T16.

## T17 — SQL Tables and SQL Columns ordinary close/reopen (AC-11)

- Close: Sql Columns (native Form-tab Close, first), then Sql Tables (second). Both absent from the Form-tab list; no dialog; Save disabled. IDOs and IDO Properties untouched.
- Reopen: Sql Tables, once, via Open → Select Form (filter corrected from IdoCollections to SqlTables; row Sql Tables / SqlTables; OK once). A known informational caution alertdialog ("Please be very careful using these forms") was accepted once with OK.
- Mode: after the caution, grid blank row, detail empty, filter icon and "Filter in Place" status (read as criteria state; inference). Filter in Place not clicked again. The Table Name criteria cell was clicked once and became an active combobox.
- Query: criterion `FX_Items` entered once; Tab; F4 once; settled: one real record, dbo.FX_Items (Schema dbo; Multi-Site unchecked; PK_FX_Items = Primary Key / FX_Item; IX_FX_Items_RowPointer = Index / RowPointer; Columns and constraint buttons enabled; Update Current Table disabled; Save disabled).
- Columns... opened once: 11 rows (4 business + 7 framework). FX_Item: Column Id 2, nvarchar 20, Is Nullable unchecked, Primary Key checked, key sequence 1, default blank. FX_Cost: Column Id 4, decimal 18, scale 2, nullable, PK unchecked, default blank (the IDO default 0 is not an SQL default). FX_UM: Column Id 5, nvarchar 10, nullable, PK unchecked, default blank. FX_Description: nvarchar 150 nullable (grid row; T13 detail stands).
- Counts: Form-tab close 2; Select Form open 1 (filter edits 1, row 1, OK 1); caution OK 1; Filter in Place clicks 0; criteria cell click 1; criterion entry 1; F4 1; recovery queries 1; Columns... 1; column selections 3; Save/New/Delete/Refresh/constraint actions 0; check-in/checkout 0; wizard 0; SQL writes 0.
- Evidence: `evidence/EXP-049/T17-sql-close-reopen-persistence.md`; `T17-00`, `T17-01`, `T17-02`, `T17-03`, `T17-06` (YAML); `T17-04`, `T17-05`, `T17-07`, `T17-08`, `T17-09`, `T17-10` (PNG).
- AC status after T17: AC-11 **supported at same-session ordinary Form close/reopen level** (qualified; not replay_verified; not database-level; not cross-session). AC-9 re-observed after reopen. AC-12 not performed (final audit reserved).
- Open: the Sql Tables mode reading is an inference from filter icon and status; FX_Description and RowPointer detail not re-read in T17; the SQL FX_Cost default is blank while the IDO shows 0.
- Runtime state left: Sql Tables and Sql Columns tabs open and clean; IDOs and IDO Properties tabs open and untouched.

## T18 — Final evidence audit (documentation only)

- **Scope:** repository reads and documentation writes only. No browser action, no Mongoose product control, no Form opened, closed, saved or checked, no query. The browser is as left at the end of T17 and was not re-observed in T18.
- **Written:** `evidence/EXP-049/T18-final-evidence-audit.md` (AC-1 to AC-12 matrix against the brief's wording, object inventory, reconciled counts, evidence index, limitations and classification). This record: current status line added; the T7 acceptance table marked superseded; this section added; next action replaced; change record extended.
- **Reconciled counts (controller audits):** Finish 1 (`harness-audit-T11.md` row 13); Create Form No 1 (row 16), Yes 0; wizard Next 1 (row 9); wizard Close 1 (`harness-audit-T12.md` row 5); FX_Items Check In 1 (`harness-audit-T14.md` row 11) and source-control notice OK 1 (row 14); Save 0; property-class checkout or check-in 0; application Forms created 0. IDOs: close 2 and reopen 1 (T15, the recovery query did not complete); recovery query 1 successful (T16, no close or reopen). SQL: close 2 and reopen 1 (T17, Sql Tables); recovery query 1 successful (T17).
- **Flagged `browser_type` calls (harness "prohibited-tool" flag, per audit):** T1 12; T5 2; T6 2; T8 4; T9 4; T10 1; T12 1; T13 1; T15 2; T16 1; T17 2. The worker records describe them as filter, criterion or field entries.
- **Reconciled AC status (detail in the audit):**

| AC | T18 status | Limit |
| --- | --- | --- |
| AC-1 | PARTIAL | Site Developer capability not verified; T1 editing-scope dialog OK disclosed |
| AC-2 | PASSED (same-session UI) | Both gates with positive controls; not a database query |
| AC-3 | PARTIAL | FX_sDescription resource not verified (lookup not accessible) |
| AC-4 | PASSED (identity and route) | Schema dbo confirmed only after Finish |
| AC-5 | PASSED (grid level) | FX_UM domain relationship not a wizard column; carried from the class record |
| AC-6 | PASSED | One Finish, one No, "Table and IDO created." |
| AC-7 | PASSED (same-session UI) | Displayed values, not stored values |
| AC-8 | PASSED (Mongoose-native, same session) | Source-control integration disabled; Undo Check Out disabled state unexplained |
| AC-9 | PASSED (same-session UI) | Nullability of three business columns and blank FX_Cost SQL default recorded, not judged |
| AC-10 | PARTIAL | Record, project, alias and checked-in state recovered; only FX_Item's definition re-read in detail |
| AC-11 | PASSED (same-session ordinary close/reopen) | Not database-level, not cross-session |
| AC-12 | PARTIAL | Preservation supported by action records, not an independent read-back; working tree unverified |

- **Proposed outcome:** OBSERVED WITH DOCUMENTED LIMITS. Not fully accepted, because AC-1, AC-3, AC-10 and AC-12 are partial as written. Not replay_verified. No physical database durability, cross-session persistence or replay verification is claimed.
- **Unresolved findings:** Site Developer capability; FX_sDescription resource existence; the unexplained disabled Undo Check Out on FX_Items (and the enabled state on the checked-out Property Classes); FX_Cost IDO default 0 against a blank SQL default; nullability of FX_Description, FX_Cost and FX_UM (AC-9 specified only FX_Item); FX_UM domain relationship not re-read after reopen; the T15 read-only criteria field against the T16 editable one; the Delete button shown enabled after the T6 target query (not pressed).

## Next permitted action

No further experiment task is authorised by this record. Coordinator decisions needed: (a) accept EXP-049 as observed with documented limits, or keep it qualified until Site Developer capability and the FX_sDescription resource are verified through a supported read-only route; (b) whether the operator wants the open runtime Forms (IDO Properties, IDOs, Sql Tables, Sql Columns) and the Designer tab closed. The wizard was already closed in T12 (its own Close button), so no wizard action remains. No check-in, checkout or further creation is authorised.

## Earlier next-action note (superseded by T11)

A new, separately authorized task only, after the operator decisions above. The wizard route (New Form Definition > New Data > Maintenance) should be taken from the EXP-044 record at that time, because it was not re-read in T7. The sequence of AC-4 to AC-12 follows the brief unchanged. Creation remains prohibited until the coordinator decides otherwise.

## Document change record (this record's own edits)

- Created `experiments/EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md` (T7).
- Edited `evidence/EXP-049/T6-idos-collision-gate.md` (T7): resolved the T6-01 screenshot note, and corrected two toolbar New-button statements in T6 (already applied in the T6 turn).
- Created `evidence/EXP-049/T7-01-exportimportstrings-state-before-lookup.png` and `evidence/EXP-049/T7-*` documentation (this record is the T7 checkpoint).
- T18: created `evidence/EXP-049/T18-final-evidence-audit.md`; edited this record (current status line, T7 table superseded note, T18 section, next action). No other file was written by T18.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-020822-9Eej, completed/accepted in cycle 25, all 18 worker tasks used). Observed only, not replay-verified.

Waived by the user (2026-10-11):
- **AC-1:** Site Developer capability was not observed directly; the successful wizard run demonstrates it.
- **AC-3:** FX_sDescription was not re-read; EXP-045 verified it as "Description".
- **AC-10:** after the reopen, only FX_Item was re-read in detail. All four properties are listed, and their columns were re-verified in Sql Columns (AC-11).
- **AC-12:** preservation was not independently demonstrated.

The coordinator re-issued EXPERIMENT_COMPLETE with these checks marked passed, each with its limitation noted.

Created, tenant-wide, for later cleanup:
- **IDO `FX_Items`:** project FX_HelloWorldProject01, alias fxitms. Properties:
  - FX_Item: FX_ItemBase, Key Sequence 1, Required;
  - FX_Description: String 150, FX_sDescription;
  - FX_Cost: FX_Cost;
  - FX_UM: FX_UM.

  Checked in once (T14).
- **SQL table `dbo.FX_Items`:** PK_FX_Items and IX_FX_Items_RowPointer, plus Mongoose system columns. Business columns:

  | Column | Type | Nullable | Notes |
  |---|---|---|---|
  | FX_Item | nvarchar(20) | No | Primary key |
  | FX_Description | nvarchar(150) | Yes | |
  | FX_Cost | decimal(18,2) | Yes | SQL default blank |
  | FX_UM | nvarchar(10) | Yes | |

It took one Finish ("Table and IDO created.") and a No to Create Form (T11). Both objects were recovered after an ordinary close/reopen (T15–T17).

Operator screenshot review:
- `T16-06`: after the reopen, IDO Properties of FX_Items lists FX_Item, FX_Description, FX_Cost, FX_UM and the 7 system properties. FX_Item shows Property Class FX_ItemBase, Bound to Column, alias fxitms, String/20/nvarchar/FX_sItem and `*Required`.
- `T17-08`: after the reopen, Sql Columns of dbo.FX_Items: FX_Item is nvarchar(20), not nullable, Primary Key, Key Sequence 1. The four business columns are listed first.

Operator decisions during the run:
1. **T1 turn limit:** T1 hit the 150-turn limit after its browser work was finished. The resume made the coordinator order a documentation-only continuation.
2. **T8 timeouts:** two were background-tab timeouts, resolved by tab selection; one was a refused type into the read-only Table Name, with no text entered. They were reviewed and judged harmless.
3. **Read-only Table Name:** with Site Split unchecked, Table Name is read-only and empty, and the table name is derived from the IDO name on Finish (EXP-044 precedent). dbo.FX_Items was confirmed after Finish.
4. **T9 grid-editor intercept:** the row-1 Property Class editor intercepted the row-3 cell click, then moved to row 3. One such intercept per cell is allowed, with a fresh-snapshot check.
5. **Worker-task limit:** raised from 12 to 18.

Learned (observed):
1. **No cache unload needed:** the wizard Property Class lookup lists newly created, still checked-out property classes (FX_Cost, FX_ItemBase, FX_UM) without a metadata unload. This is the second observation (first: EXP-044).
2. **Inheritance reaches SQL:** the wizard creates SQL columns from the inherited property-class types (nvarchar 20, decimal 18,2, nvarchar 10).
3. **No SQL default from the class:** FX_Cost's property-class Default Value 0 does **not** become a SQL column default (the default is blank). Any runtime default must come from the IDO or property class. This is the tutorial's "verify at the correct inheritance level" caution, observed.
4. **Grid editor intercept:** in the wizard grid, an active cell editor can intercept the next cell click. The editor then moves to the clicked cell, and selection proceeds through that editor's Open control.
5. **Table name derived:** with Site Split unchecked, the wizard's Table Name is read-only and derived from the IDO name.

Limits:
- Only the same session, at the UI level.
- No database read.
- All four FX_ property classes are still checked out.

Next in Part 2 (section 7, second half): the FX_Items Form via the EXP-045 Classic Multi-View route, FX_Item above FX_Description, caption strings FX_sItem and FX_sCost (Caption ellipsis route, with an explicit cell commit before OK). Then section 8: the combo box for FX_UM and invalid-domain validation.
