# EXP-079 — Final acceptance report (T10: documentation and evidence reconciliation)

- Experiment: EXP-079, Hello World Part 5 Section 2b: join `FX_Items` (alias `fxitms`) to the `FX_Orders` IDO; add `FX_ItmsDescription`, `FX_ItmsCost` (class `FX_Cost`), `FX_ItmsPicture` (class `FX_Picture`).
- Run `R-20261014-001840-dvg8`, cycle 10, task T10. Worker session `5e7b913c-9fe5-4bcb-bcb0-2693179b7aa7`, task_message_id `5b817958-f0de-4b13-b303-f40cdd4c018f`. Date 2026-10-14.
- T10 scope: documentation and evidence reconciliation only. **Zero browser calls. Zero Mongoose changes. No query, no Designer inspection.** T10 wrote this report and updated only the EXP-079 record.
- Sources read in T10: the EXP-079 record (all sections); the screenshot evidence (27 PNGs, each viewed when captured in its task); the nine controller-generated `harness-audit-T1.md` … `harness-audit-T9.md` files in `evidence/EXP-079/`.
- Basis of all statements: same-session UI and accessibility readbacks only. **Nothing here is database durability, server-side join validity, or replay verification.**

## 1. Recommendation

**ACCEPTED AS OBSERVED**, with the limitations in sections 4 and 6 and the worker-count corrections in section 5. Every acceptance criterion (AC-1 to AC-6) is supported by at least one existing screenshot plus accessibility readback. AC-7 is satisfied by this report and the record, subject to the operator's review of the corrections.

Two departures from the brief's wording are disclosed rather than hidden:
- **AC-6** was supported with **no runtime close** (the runtime Form was absent after the T4 session recovery). The brief's "close/reopen" is therefore a reopen only.
- The brief's AC-7 template says "two target queries". **Three** FX_Orders IDO target queries were run (T1, T5, T8). The third was operator-approved in T8 as the final recovery query.

## 2. Acceptance matrix

Screenshot paths are repository-relative under `evidence/EXP-079/`. "Viewed" means the image was opened and inspected in its task.

| AC | Requirement (brief) | Existing evidence | Observed postcondition | Limitations |
|---|---|---|---|---|
| **AC-1** | Fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders checked out to the operator; identity, revision, Tables (fxcus, fxords) and complete 13-property inventory recorded; FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture, fxitms absent. | `t1-01-pre-f4-idos-fx-orders-criterion.png` (pre-F4 criterion; viewed); `t1-02-baseline-identity-tables-view.png` (identity and two-entry Tables; viewed); `t1-03-baseline-properties-inventory-rows-top.png` (rows 1–8; viewed); `t1-04-baseline-properties-inventory-rows-end.png` (rows 6–13; viewed). Also the T1 section of the record. | One FX_Orders row after one F4. Project FX_HelloWorldProject01; Revision Num 2; Revision Date 10/13/2026; Locked By the operator; Check In and Undo Check Out enabled; Save disabled. Tables: `FX_HelloWorld01 / fxcus / Secondary / Left Outer / fxcus.[FX_Code] = fxords.[FX_CustomerID]` and `FX_Orders / fxords / Primary Base / Inner`. 13 properties (6 business + 7 system). FX_ItmsDescription, FX_ItmsCost, FX_ItmsPicture and any fxitms entry absent. | Same session. Locked By clipped in the image (full value from accessibility). Read Only Record column off-screen in the images (accessibility only). Revision Date 10/13/2026 is not today's date; mechanism unexplained. |
| **AC-2** | One IDO Table Wizard: Table Name `FX_Items` (typed, Tab-committed), alias `fxitms`, Secondary, Left Outer, join `fxitms.FX_Item = fxords.FX_Item`; one OK; Tables lists exactly fxcus, fxitms, fxords. | `t2-01-pre-new-table-baseline-tables-view.png` (before New Table; viewed); `t2-02-new-table-dialog-before-ok.png` (dialog before OK; viewed: Table Name `FX_Items`, alias `fxitms`, Secondary, Left Outer, join `fxitms.[FX_Item] = fxords.[FX_Item]`); `t2-03-tables-view-after-ok-three-entries.png` (three entries; viewed). | One New Table; Table Name readback `FX_Items` after one Tab with no message; alias `fxitms` after one Tab; builder Add produced the join text; one OK with no message. Tables now: FX_HelloWorld01/fxcus (unchanged), FX_Items/fxitms (Secondary, Left Outer, `fxitms.[FX_Item] = fxords.[FX_Item]`), FX_Orders/fxords (Primary Base, Inner). Status `New Table (IDOs 1 of 1)`. | Client-side readback only. Join text is the builder's bracketed form. Server-side validity not established. |
| **AC-3** | Three New Property wizards, one Finish each: FX_ItmsDescription → fxitms.FX_Description (no class; String 150 nvarchar); FX_ItmsCost → fxitms.FX_Cost, class FX_Cost (Decimal 18/2 decimal); FX_ItmsPicture → fxitms.FX_Picture, class FX_Picture (Binary -1 varbinary). Types, inherit checkboxes, responses recorded. | Wizard before Finish: `t3-02-wizard-itmsdescription-before-finish.png` (viewed); `t6-01-wizard-itmscost-before-finish.png` (viewed: Bind To `fxitms.FX_Cost`, class FX_Cost, Decimal, Length 18, Decimal 2, decimal, inherit checked); `t7-01-wizard-itmspicture-before-finish.png` (viewed: Bind To `fxitms.FX_Picture`, class FX_Picture, Binary, Length -1, varbinary, inherit checked). | FX_ItmsDescription: Property Class blank; Data Type String 150; column nvarchar. Finish once; no message (T3). FX_ItmsCost: class FX_Cost selected once; Finish once; no message (T6). FX_ItmsPicture: class FX_Picture selected once (exact entry; look-alike `G6RPiture` present and not selected); Finish once; no message (T7). | Length -1 and Decimal Position 2 were visible **only in the pre-Finish wizard**; they are not visible in any post-Finish grid. The unlabelled grey lower "Inherit from Property Class" control (T6, T7) is checked and unidentified. |
| **AC-4** | After the Finishes the Form is clean; exactly three new properties with recorded bindings, classes, types, sequences and Read Only; 13 originals unchanged; still checked out to the operator. | Post-Finish: `t3-03-post-finish-inventory-14-rows-itmsdescription.png` (viewed); `t6-02-post-finish-inventory-15-rows-upper.png` (viewed) and `t6-03-post-finish-inventory-15-rows-lower.png` (viewed); `t7-02-post-finish-inventory-16-rows-upper.png` (viewed) and `t7-03-post-finish-inventory-16-rows-lower.png` (viewed). Recovered: `t8-03`, `t8-04` (viewed). | Save disabled after every Finish (no ordinary Save performed; Save budget 0 of 1 used). Header in each: Revision Num 2, Check In enabled, operator. 16 Bound rows after T7. New rows: FX_ItmsDescription (seq 2, String 150 nvarchar, Read Only); FX_ItmsCost (seq 3, FX_Cost, Decimal 18, decimal, Read Only); FX_ItmsPicture (seq 12, FX_Picture, Binary, varbinary, Read Only). Original 13 match T1 row for row (accessibility readback). | Grid does not show Length -1 (FX_ItmsPicture) or Decimal Position (FX_ItmsCost). Read Only Record column off-screen in images. "Clean" rests on the disabled Save control, not on a database read. |
| **AC-5** | Clean IDOs Form closed once more and reopened once more; one visible-criterion query recovers FX_Orders with three Tables entries and both joins, and the 16-property inventory. | Pre-F4 (recovery): `t8-01-pre-f4-recovery-idos-fx-orders-criterion.png` (viewed; status `Filter in Place`; echo row). Recovered: `t8-02-recovered-identity-and-tables-view.png` (viewed); `t8-03-recovered-inventory-upper-rows-1-8.png` (viewed); `t8-04-recovered-inventory-lower-rows-9-16.png` (viewed). | Close: no prompt. Reopen through Form > Open > Select Form (exact `IDOs / IdoCollections`). One F4 returned one FX_Orders: Revision Num 2, operator checkout (Check In and Undo Check Out enabled), Save disabled. Tables: three entries with both joins. 16 Bound rows equal to baseline plus the three additions. | Same session only. Not database durability. Two-row Select Form result recurred (unexplained). The second recovery was an operator-authorized target query; the T5 Form opening (no close) is a separate, operator-approved step. |
| **AC-6** | Runtime Form after one close/reopen and one blank-criteria query shows exactly 1 / FX001 / dumbbell / 2 and 2 / FX002 / eggs / 1; Save disabled; nothing changed. | Pre-F4: `t9-01-runtime-pre-f4-blank-criteria-filter-in-place.png` (viewed; status `Filter in Place`; criteria blank; Save greyed). Post-F4: `t9-02-runtime-post-f4-two-rows-result.png` (viewed). `t9-03-runtime-two-rows-grid-scrolled-columns.png` (viewed; grid did not scroll; adds no evidence). | Runtime close: **0** (the Form was absent after the T4 session recovery; the conditional close did not apply). Reopen: one (Select Form, exact `FX_Orders / FX_Orders`). FiP: one (visible control). F4: one. Status after query `Customer ID (Object 1 of 2)`; two row headers 1 and 2; Save disabled; no field edited. Row 1 values (1 / FX001 / dumbbell / 2) visible in the detail panel. Row 2 values (2 / FX002 / eggs / 1) by accessibility readback. | **Row 1 is visually supported; row 2 is accessibility-only.** The grid's data columns are clipped at this window width; the horizontal wheel scroll had no effect. The screenshot does not independently show row 2's complete details. Close half of "close/reopen" not performed (see section 1). |
| **AC-7** | Final report gives decisive evidence for AC-1 to AC-6; complete action audit with exact counts; baseline and recovered inventories; file inventory; final state. | This report (sections 2–7); the record (T1–T10 sections; cumulative audit). | Audit reconciled from the nine harness logs (section 5). Inventories in section 6. Final state in section 7. | Findings are observed only. Repository confinement is supported by worker and harness inventories; operator git review is authoritative. |

### 2.1 Baseline and recovered inventories (for AC-1, AC-4, AC-5)

| # | Property | Seq | Class | Binding | Key | Data Type / Length / Column Type | Read Only | Required |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_OrderNumber | 1 | FX_OrderNumBase | FX_OrderNumber | 1 | class-bound | no | yes |
| 2 | FX_CusName | 2 | — | fxcus.FX_Label | 0 | String / 100 / nvarchar | yes | no |
| 3 | FX_CustomerID | 2 | FX_CustomerID | FX_CustomerID | 0 | class-bound | no | yes |
| 4 | **FX_ItmsDescription** (T3) | 2 | — | fxitms.FX_Description | 0 | String / 150 / nvarchar | yes | no |
| 5 | FX_Item | 3 | FX_Item | FX_Item | 0 | class-bound / 50 | no | yes |
| 6 | **FX_ItmsCost** (T6) | 3 | FX_Cost | fxitms.FX_Cost | 0 | Decimal / 18 / decimal | yes | no |
| 7 | FX_Count | 4 | — | FX_Count | 0 | Long Integer / int | no | no |
| 8 | CreatedBy | 5 | — | CreatedBy | 0 | String / 128 / UsernameType | yes | no |
| 9 | UpdatedBy | 6 | — | UpdatedBy | 0 | String / 128 / UsernameType | yes | no |
| 10 | CreateDate | 7 | — | CreateDate | 0 | Date / CurrentDateType | yes | no |
| 11 | RecordDate | 8 | — | RecordDate | 0 | Date / CurrentDateType | yes | no |
| 12 | RowPointer | 9 | — | RowPointer | 0 | GUID / RowPointerType | yes | no |
| 13 | FX_CusAddress | 10 | — | fxcus.FX_Address | 0 | String / 150 / nvarchar | yes | no |
| 14 | NoteExistsFlag | 10 | — | NoteExistsFlag | 0 | Byte / FlagNyType | no | no |
| 15 | InWorkflow | 11 | — | InWorkflow | 0 | Byte / FlagNyType | no | no (Read Only Record yes) |
| 16 | **FX_ItmsPicture** (T7) | 12 | FX_Picture | fxitms.FX_Picture | 0 | Binary / (blank in grid; -1 in wizard) / varbinary | yes | no |

Baseline (T1) was 13 rows (rows 1–13 above without 4, 6 and 16). Recovered (T8) is 16 rows, with the original 13 matching T1 row for row (accessibility readback), and the three additions present once each.

## 3. Join and Tables reconciliation

| Stage | Tables entries | Joins |
|---|---|---|
| T1 baseline | 2: FX_HelloWorld01/fxcus (Secondary, Left Outer); FX_Orders/fxords (Primary Base, Inner) | fxcus.[FX_Code] = fxords.[FX_CustomerID] |
| T2 after OK | 3 | adds fxitms.[FX_Item] = fxords.[FX_Item] |
| T5, T8 recovered | 3 | both joins unchanged |

## 4. Evidence limitations (preserved)

1. **Stored FX_Cost decimal position 2 and FX_Picture length -1 are not independently proven.** Both appear only in the pre-Finish wizard readbacks (`t6-01`, `t7-01`). The recovered grid has no decimal-position column and shows Length blank for FX_ItmsPicture.
2. **The lower inheritance checkbox** (unlabelled grey panel below the Length/Decimal row, checked in T6 and T7) is unidentified. Nothing is claimed about its meaning.
3. **Row 2 of the runtime result** is accessibility-only; the screenshots do not show its complete details. Row 1 is visually supported (detail panel).
4. **Server-side join validity**, **database durability**, and **replay verification** are not established. All results are same-session UI and accessibility observations.
5. **Select Form two-row behaviour:** the filter `IdoCollections` returned `G6RIdoCollectionSearch` and `IDOs / IdoCollections` in T1, T5, T8 and T9. The cause is unexplained; the exact row was always selected.
6. **Revision Date 10/13/2026** (not today's date) and its mechanism are unexplained.
7. **Session expiry (T4)** removed the open Forms. The FX_ItmsDescription state, checkout and Tables view were not re-read until T5. T5 re-read them as unchanged.
8. **Session-warning alert (T9)** was present in the Mongoose frame and intercepted a click. It was dismissed once with its own close control. It was not a Session Expired modal.
9. **Lookup enumeration:** the Property Class and Bind To lookups were read through the rows returned by the find tool, not by complete list enumeration, except the `G6RPiture` look-alike recorded in T7.

### 4.1 Duplicate property sequence values (recorded, not changed; renumbering out of scope)

| Sequence value | Rows sharing it | Count |
|---|---|---|
| 2 | FX_CusName, FX_CustomerID, FX_ItmsDescription | 3 |
| 3 | FX_Item, FX_ItmsCost | 2 |
| 10 | FX_CusAddress, NoteExistsFlag | 2 |

All other sequence values (1, 4–9, 11, 12) are unique.

## 5. Action audit reconciliation (harness-derived, authoritative)

Counts below are taken from the nine controller-generated harness audits. Worker-prose counts that differ are listed in section 5.2.

### 5.1 Browser tool calls by task (harness)

| Category | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | **Total** |
|---|---|---|---|---|---|---|---|---|---|---|
| Tab list | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **9** |
| Tab select | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **9** |
| Snapshot (explicit) | 1 | 4 | 2 | 5 | 3 | 1 | 1 | 3 | 3 | **23** |
| Find | 3 | 3 | 1 | 1 | 2 | 2 | 2 | 1 | 1 | **16** |
| Click (ok / failed) | 7 / 0 | 10 / 0 | 6 / 0 | 5 / 1 | 5 / 0 | 7 / 0 | 7 / 0 | 6 / 0 | 6 / 1 | **59 / 2 (61)** |
| Type | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **11** |
| Key Tab | 2 | 2 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | **7** |
| Key F4 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | **4** |
| Wait | 1 | 0 | 0 | 2 | 1 | 0 | 0 | 1 | 1 | **6** |
| Mouse move | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | **6** |
| Wheel | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | **6** |
| Screenshot | 4 | 3 | 3 | 0 | 4 | 3 | 3 | 4 | 3 | **27** |
| Navigate | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Handle dialog | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| **Browser calls per task** | 25 | 26 | 15 | 19 | 22 | 18 | 18 | 22 | 22 | **187** |

T10 made **zero** browser calls (not in the table).

### 5.2 Worker-prose counts corrected by the harness

| Item | Worker prose said | Harness shows | Used in this report |
|---|---|---|---|
| T1 clicks | 8 (including a "Tables sub-tab (view)" click) | 7 (no Tables click) | **7** |
| T1 snapshots | 5 untargeted + 5 targeted (T1 section); 1 (T1 cumulative row) | 1 | **1** |
| T1 "ref-not-found" error (guessed ref `f1e1461`) | 1 | 0 browser errors; the only T1 harness error is a non-browser Read of a path that did not yet exist | **0 (unsupported; retract)** |
| T2 snapshot split | 3 untargeted + 1 targeted | 4 snapshot calls, none with a recorded argument | **4 total; split unverifiable** |
| T3 snapshots | 3 | 2 (the post-Finish read was inline output of the Finish click) | **2** |
| Key presses in cumulative audit | "11 / 0 / 0" read as Tab | Tab 7, F4 4 (11 total) | **Tab 7, F4 4** |
| Snapshot total (cumulative) | 23 untargeted + 1 targeted = 24 | 23 | **23** |

Other worker counts (T2 clicks 10; T4 clicks 5 + 1 failed and snapshots 5; T5 clicks 5; T6 and T7 clicks 7; T8 clicks 6; T9 clicks 6 + 1 failed; all finds; types; screenshots; waits; mouse and wheel) match the harness.

### 5.3 Lifecycle and task-level totals (AC-7 items)

| Item | Count | Harness evidence |
|---|---|---|
| Checkout management (Check Out, Check In, Undo Check Out) | **0 / 0 / 0** | No harness row names these. FX_Orders checked out to the operator throughout (Revision 2). |
| New Table | **1** (T2) | T2 row 9 |
| Table wizard OK | **1** (T2) | T2 row 34 |
| Builder Add | 1 (T2) | T2 row 30 |
| New Property openings (successful) | **3** (T3, T6, T7) | T3 row 8; T6 row 4; T7 row 4 |
| New Property click that did not open the wizard | **1** (T4; timed out) | T4 row 6, error. Disclosed: the brief caps openings at three; this attempt opened nothing. |
| Finish | **3** (T3, T6, T7; one each) | T3 row 21; T6 row 19; T7 row 19 |
| Class selections | **2** (FX_Cost in T6; FX_Picture in T7) | T6 row 15; T7 row 15 |
| Ordinary Save | **0** | No Save click in any harness row. Form clean after each Finish. |
| IDOs close/reopen pairs | **2** | Pair 1: T1 (close row 21; reopen rows 23–33). Pair 2: T8 (close row 4; reopen rows 6–12). |
| IDOs Form opening without a close (operator-approved) | **1** (T5) | T5 rows 4–11. The Form had been lost in the T4 session recovery, so this was not a pair. |
| FX_Orders IDO target F4 queries | **3** (T1, T5, T8) | T1 row 39; T5 row 19; T8 row 18. The brief's "two" plus the third operator-authorized final recovery query. |
| Runtime Form close | **0** | Absent after T4 recovery (T9 gate). Conditional close not applicable. |
| Runtime Form open | **1** (T9) | T9 row 16 (Select Form OK); row 14 (exact row). |
| Runtime Filter in Place activation | **1** (T9) | T9 row 18 |
| Runtime blank-criteria F4 | **1** (T9) | T9 row 22 |
| Re-login (session-expiry procedure) | **1** (T4) | T4: modal OK (row 8); portal navigate once (row 15) with one beforeunload dialog accepted (row 16); portal banner close (row 21); portal app search and open (rows 23–27). No credential typed. |
| Portal banner dismissals | **2** | T4 row 21 (DistributionIFSContactUs banner, intercepting context); T9 row 5 (session-warning alert, intercepting the Form-menu click). |
| Click timeouts | **2** | T4 row 6 (New Property; the harness excerpt is truncated and does not name the blocking element; a Session Expired modal was found on the next snapshot); T9 row 4 (Form menu; the harness error names the portal session-warning strip as the intercepting element). |
| String, property-class edit, SQL, Form or runtime-record change | **0** | No such action in any harness row. Class selections were selections only. |
| Designer interaction | **0** | Tab 0 (Designer) was never selected, clicked, typed in or captured. Exception disclosed: a T2 `browser_snapshot` (row 3) ran before tab 1 was selected, while tab 0 was current; the T2 record discloses it as read-only and the harness logs it as a snapshot with no argument. |
| Unloads, cache, FormSync, deployment, regeneration | **0** | None in any harness row |
| Direct navigation URL | **1** | T4 row 15 (portal URL; the session-expiry procedure's permitted step) |
| Browser refresh / restart | **0** | None |
| Browser JavaScript / evaluate / run-code / console / network | **0** | None |
| Native dialogs | **1** (T4 beforeunload leave-page; accepted; the Form was clean) | T4 row 16 |
| Ref-not-found errors | **0** | None in the harness logs |
| Screenshots | **27** | Harness screenshot rows equal the 27 PNGs in `evidence/EXP-079/` |

### 5.4 Property additions and change accounting

- Properties added: **3** (FX_ItmsDescription in T3; FX_ItmsCost in T6; FX_ItmsPicture in T7). No other property, join, table entry, IDO attribute or Form change was made.
- Tables entries added: **1** (FX_Items / fxitms).
- Saves: **0**. Save budget (0 or 1) unused.

## 6. Worker-written and tool-generated file inventory (T1–T10)

### 6.1 Worker-written files (repository-relative)

| Path | Created or modified | Task(s) |
|---|---|---|
| `experiments/EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md` | created (T1); modified in T1–T10 | T1–T10 |
| `evidence/EXP-079/t1-01-pre-f4-idos-fx-orders-criterion.png` | created | T1 |
| `evidence/EXP-079/t1-02-baseline-identity-tables-view.png` | created | T1 |
| `evidence/EXP-079/t1-03-baseline-properties-inventory-rows-top.png` | created | T1 |
| `evidence/EXP-079/t1-04-baseline-properties-inventory-rows-end.png` | created | T1 |
| `evidence/EXP-079/t2-01-pre-new-table-baseline-tables-view.png` | created | T2 |
| `evidence/EXP-079/t2-02-new-table-dialog-before-ok.png` | created | T2 |
| `evidence/EXP-079/t2-03-tables-view-after-ok-three-entries.png` | created | T2 |
| `evidence/EXP-079/t3-01-pre-wizard-baseline-inventory-13-rows.png` | created | T3 |
| `evidence/EXP-079/t3-02-wizard-itmsdescription-before-finish.png` | created | T3 |
| `evidence/EXP-079/t3-03-post-finish-inventory-14-rows-itmsdescription.png` | created | T3 |
| `evidence/EXP-079/t5-01-pre-f4-idos-fx-orders-criterion.png` | created | T5 |
| `evidence/EXP-079/t5-02-identity-and-tables-view-after-f4.png` | created | T5 |
| `evidence/EXP-079/t5-03-recovered-inventory-upper-rows-1-8.png` | created | T5 |
| `evidence/EXP-079/t5-04-recovered-inventory-lower-rows-6-14.png` | created | T5 |
| `evidence/EXP-079/t6-01-wizard-itmscost-before-finish.png` | created | T6 |
| `evidence/EXP-079/t6-02-post-finish-inventory-15-rows-upper.png` | created | T6 |
| `evidence/EXP-079/t6-03-post-finish-inventory-15-rows-lower.png` | created | T6 |
| `evidence/EXP-079/t7-01-wizard-itmspicture-before-finish.png` | created | T7 |
| `evidence/EXP-079/t7-02-post-finish-inventory-16-rows-upper.png` | created | T7 |
| `evidence/EXP-079/t7-03-post-finish-inventory-16-rows-lower.png` | created | T7 |
| `evidence/EXP-079/t8-01-pre-f4-recovery-idos-fx-orders-criterion.png` | created | T8 |
| `evidence/EXP-079/t8-02-recovered-identity-and-tables-view.png` | created | T8 |
| `evidence/EXP-079/t8-03-recovered-inventory-upper-rows-1-8.png` | created | T8 |
| `evidence/EXP-079/t8-04-recovered-inventory-lower-rows-9-16.png` | created | T8 |
| `evidence/EXP-079/t9-01-runtime-pre-f4-blank-criteria-filter-in-place.png` | created | T9 |
| `evidence/EXP-079/t9-02-runtime-post-f4-two-rows-result.png` | created | T9 |
| `evidence/EXP-079/t9-03-runtime-two-rows-grid-scrolled-columns.png` | created | T9 |
| `evidence/EXP-079/T10-final-acceptance-report.md` | created (this file) | T10 |

Worker-written totals: **1 experiment record** (created once, modified in each task) + **27 PNG screenshots** + **1 report** = **29 distinct files**. No T4 screenshot exists (no capture was taken in T4). No T10 screenshot exists (no browser calls).

### 6.2 Controller-generated files in `evidence/EXP-079/` (not worker-authored)

`harness-audit-T1.md` through `harness-audit-T9.md` (nine files). Used in this report as the authoritative action log.

### 6.3 Tool-generated temporary files (not worker-authored; not EXP-079 evidence)

Playwright MCP snapshot (`page-*.yml`) and console (`console-*.log`) files written under `evidence\playwright\` during T1–T9. Read as readbacks only. They were not individually counted.

### 6.4 Repository confinement

Worker writes in T1–T10 went only to the EXP-079 experiment record and `evidence/EXP-079/`. The harness Edit and Write rows in T1–T9 name only the EXP-079 record. No other repository file was written, edited or deleted by the worker. Operator git review is authoritative.

## 7. Final product state

As of the T9 final observation (T10 made no browser calls, so this state is not re-observed):

- **IDOs Form** (Mongoose Web Client, tab 1): open, **clean** (Save disabled), IDO `FX_Orders`, Revision Num 2, **checked out to the operator** (Check In and Undo Check Out enabled), **16 Bound properties**, on the Properties sub-tab.
- **FX_Orders runtime Form**: open beside the IDOs tab, **clean, Save disabled**, Filter in Place active, showing the two rows (status `Customer ID (Object 1 of 2)`).
- **Focus**: the Customer ID combobox in the runtime Form holds keyboard focus with its text selected. It was left unchanged.
- **Dialogs**: none open at the T9 final observation. The session-warning banner was dismissed once in T9 and may reappear.
- **Designer tab**: not touched in T1–T10.
- **Mongoose data**: three properties added; one Tables entry added; no other change.

## 8. Deviations (complete list)

1. **Runtime close not performed (0).** The runtime Form was absent after the T4 session recovery. The conditional close did not apply, and no close/reopen pair was manufactured. AC-6 is supported on reopen only.
2. **Third FX_Orders target query.** The brief's AC-7 template says two. Three were run: T1, T5 (operator-authorized second, after the session expiry), and T8 (operator-authorized final recovery query).
3. **Additional IDOs Form opening (T5)** without a close, after the T4 session expiry (operator-approved). It is not a close/reopen pair.
4. **Timed-out New Property click (T4).** The wizard did not open. It is counted as an attempt, not an opening, in this report.
5. **Intercepted Form-menu click (T9).** Timed out, cleared by dismissing the session-warning banner.
6. **Session expiry (T4)** and the one permitted portal navigation, with one beforeunload dialog accepted (the Form was clean).
7. **Inadvertent read-only Designer snapshot (T2, row 3)**, disclosed by the worker before any Designer interaction.
8. **Worker-count corrections** in section 5.2 (T1 clicks and snapshots; the unsupported T1 ref-not-found claim; T3 snapshots; the Tab/F4 breakdown; the snapshot total).
9. **Record structure.** The record's sections are not in strict chronological order: the T9 and T8 sections sit above the T7 section, and several "Acceptance status" and inventory sub-sections were added at non-adjacent points. The T7 section heading was restored in T10. Content is complete; the ordering is documented in the record's T10 section.

## 9. Knowledge state (per finding)

| Finding | State |
|---|---|
| FX_Orders checked out to the operator at Revision 2 before the change | observed (T1, T2, T5, T8) |
| Baseline Tables two entries; joined `fxcus` Secondary Left Outer | observed (T1) |
| FX_Items / fxitms secondary Left Outer join; join text `fxitms.[FX_Item] = fxords.[FX_Item]`; three entries | observed (T2, T5, T8) |
| FX_ItmsDescription: Bound to fxitms.FX_Description; no class; String 150 nvarchar | observed (T3; recovered T5, T8) |
| FX_ItmsCost: Bound to fxitms.FX_Cost; class FX_Cost; Decimal 18 decimal as displayed; decimal position 2 shown pre-Finish only | observed (T6; pre-Finish readback); decimal position **unresolved** as stored |
| FX_ItmsPicture: Bound to fxitms.FX_Picture; class FX_Picture; Binary varbinary as displayed; length -1 shown pre-Finish only | observed (T7); length **unresolved** as stored |
| Exact class selected (FX_Picture not G6RPiture) | observed (T7 readback) |
| Original 13 properties unchanged | observed (T1 baseline vs T8 recovered; accessibility readback) |
| 16 properties after T7; 16 after recovery | observed (T7; T8) |
| Save disabled throughout; no ordinary Save | observed (all tasks) |
| Blank-criteria runtime: row 1 1 / FX001 / dumbbell / 2 | observed (visual, T9) |
| Blank-criteria runtime: row 2 2 / FX002 / eggs / 1 | observed (accessibility readback only, T9); not visually confirmed |
| Runtime close not performed (absent after T4) | observed (T9 gate) |
| Session expiry in T4; re-login via procedure, no credential typed | observed (T4) |
| Select Form two-row result for `IdoCollections` | observed (recurring); cause **unresolved** |
| Revision Date 10/13/2026 mechanism | **unresolved** |
| Lower inheritance checkbox meaning | **unresolved** |
| Duplicate sequence values 2 (×3), 3 (×2), 10 (×2) | observed; not changed (out of scope) |
| Server-side join validity; database binding; durability; replay | **not established; not claimed** |

No finding is classified replay_verified. No database durability is claimed.

## 10. Final statement

EXP-079 supports, as observed in the same session, the join `FX_Items` / `fxitms` and the three properties `FX_ItmsDescription`, `FX_ItmsCost` and `FX_ItmsPicture` on the `FX_Orders` IDO, with the recovered state and the runtime rows. Acceptance recommendation: **ACCEPTED AS OBSERVED**, subject to the operator's review of the section 5.2 corrections and the section 4 limitations.
