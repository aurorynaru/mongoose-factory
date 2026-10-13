# EXP-080-R3 — T7 final acceptance report (documentation only; zero browser calls)

- Experiment: EXP-080-R3 — Hello World Part 5 Section 3: add the derived property FX_DerOrderTotal to the FX_Orders IDO (replay after top-level session recovery).
- Record: `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md`.
- Task T7, cycle 6, task_message_id `09976aef-a6c2-4d4f-b8cb-23078042340f`, worker session `17038d93-b668-4325-9ded-f316a7af0e1f`, run `R-20261014-012652-2b2E`. Date 2026-10-14.
- Scope: review the record, the T1–T6 decisive evidence, the worker-written-file inventories, and the controller audit files `evidence/EXP-080-R3/harness-audit-T1.md` to `harness-audit-T6.md`. No browser call, no Mongoose change, no query, no wizard, no Save, no Finish, no authentication, no new screenshot.
- Classification: **OBSERVED ONLY**. Not replay_verified. No database durability and no expression correctness are claimed.

## 1. Summary

| AC | Status | Basis |
|---|---|---|
| AC-1 | Supported (observed; UI and accessibility level) | T1 session recovery; T2 baseline |
| AC-2 | Supported (observed; UI level) | T3 configuration; T4 single Finish |
| AC-3 | Supported (observed; UI level) | T4 post-Finish; T5 and T6 gate readbacks |
| AC-4 | Supported (observed; one query, after the T5 reopen) | T5 recovery; T6 reopen (not re-queried) |
| AC-5 | Consolidated in this report and the record; two actual close/reopen pairs; two target queries | Section 6 |

Recommendation (coordinator's decision): **ACCEPTED AS OBSERVED**, with the limitations in Section 7. All five acceptance checks have observed evidence. None is replay_verified, and none rests on database or expression evaluation.

## 2. Acceptance matrix

### AC-1 — Session, fresh IDOs Form, one visible-criterion query, Tables view, 16-property baseline, no Derived property

| Element | Evidence | Observation | Qualification |
|---|---|---|---|
| Starting session | T1 record section; `t1-session-recovery-web-client-loaded.png` | The tab showed the portal "Logout Successful" page, not the R2 refused-connection page. The permitted portal navigation led to the top-level Infor CloudIdentities Sign In. Username and password placeholders were entered once each; Sign in clicked once. The Mongoose app was opened from the portal Applications menu (search `Mongoose`). The Web Client loaded in the app frame with no configuration Sign In and no Session Expired modal. | The cause of the T1 sign-out was not established. The R2 embedded-frame refusal was not reproduced, because sign-in was done at the top level only. |
| Leftover wizard or prompt | T1 record section | None present at T1 start | — |
| Fresh IDOs Form (T2) | T2 record section; `t2-01` | The IDOs Form was not open at T2 start, so it was opened once through Form > Open > Select Form (`IDOs / IdoCollections`). Filter in Place was confirmed from the status bar before typing. This is an **initial opening, not a close/reopen pair**. | — |
| Visible-criterion query (F4 #1, T2) | `t2-01` (pre-F4), `t2-02` (post-F4) | One row `FX_Orders`, checked; Revision Num 2; Revision Date 10/13/2026; Locked By the operator account (matches the identity bar); Check In and Undo Check Out enabled; Save disabled. | Checkout is interpreted from Locked By and the enabled controls, not a database read. The Revision Date is not explained (it is not today's date). |
| Tables view | `t2-02` | Three entries: FX_HelloWorld01 / fxcus / Secondary / Left Outer / `fxcus.[FX_Code] = fxords.[FX_CustomerID]`; FX_Items / fxitms / Secondary / Left Outer / `fxitms.[FX_Item] = fxords.[FX_Item]`; FX_Orders / fxords / Primary Base / Inner. | — |
| 16-property baseline | `t2-03` (rows 1–8), `t2-04` (rows 9–16) | Rows 1–16 recorded (FX_OrderNumber through FX_ItmsPicture). FX_ItmsCost is class FX_Cost, Decimal, 18, decimal. Every row reads Bound to Column. | Read Only mapping (first checkbox column) inferred from the EXP-075 and EXP-078 mapping. |
| FX_DerOrderTotal and Derived absent | `t2-03`, `t2-04`; accessibility readback; `browser_find` "Derived" and "DerOrder" (no matches, per T2 record) | No Derived row; no 17th row | — |

### AC-2 — One wizard; Derived; Tab-committed name; FX_Cost inherited; expression; one Finish with its response

| Element | Evidence | Observation | Qualification |
|---|---|---|---|
| One wizard opening | T3 record; controller audit `harness-audit-T3.md` (row 10) | New Property clicked once | — |
| Page 1 (before choice) | `t3-01` | Bound selected by default; Derived, Unbound, Subcollection listed; Finish disabled | — |
| Derived chosen | T3 record; `harness-audit-T3.md` rows 14–16 | The Derived radio click timed out ("element is outside of the viewport"; the locator resolved and was reported visible, enabled and stable). A read-only snapshot showed no change. The visible Derived label click selected Derived (radio checked, Bound unchecked, status bar `Derived`). Next clicked once. | Suspected environment issue (second recurrence; the first was EXP-080 T2). Cause not established. |
| Page 2 before entry | `t3-02` | Property Name required and empty; Property Class empty (no inherit box); Data Type and Column Data Type with unchecked inherit boxes and empty combos; Length and Decimal empty; Expression unchecked with an empty text area; Finish enabled; Next disabled | — |
| Property Name typed and Tab-committed | `t3-03`; `harness-audit-T3.md` rows 22–24 (click, browser_type, Tab) | The field reads `FX_DerOrderTotal`; focus moved to Property Class; **no prompt or message** | Typed with keystrokes and `slowly` as recorded by the worker. The controller audit records the key and argument names but not the `slowly` flag. One run. The EXP-080 required-value prompt did not recur. |
| Class FX_Cost selected | `t3-04`; `harness-audit-T3.md` rows 28, 30 | Property Class `FX_Cost`. Data Type inherit ticked: Decimal, Length 18, Decimal 2. Column Data Type inherit ticked: `decimal`. Expression inherit ticked, box disabled. | The Decimal position 2 is an inherited wizard value (see Section 8). |
| Expression inherit untick | T3 record; `harness-audit-T3.md` rows 34 (error), 36 (label click, ok) | The checkbox click was intercepted by an overlay span (`ext-comp-1449-displayEl`). A label-text click unticked it: the snapshot shows the box unchecked and the expression box enabled. Data Type and Column Data Type inherit boxes stayed ticked. | Overlay interception is a suspected environment issue; cause not established. |
| Expression entry and readback | `t3-05`; `harness-audit-T3.md` rows 38–40 (click, browser_type, mouse click at (600, 620)) | Expression reads `FX_Count * FX_ItmsCost`; committed by a click on the blank Property Attributes area (not Tab, not Enter); no validation message or prompt | Red spell-check underline in `t3-05` is the browser's marker, not a Mongoose message. The expression's correctness is not evaluated. |
| Configured state before Finish | `t3-05`; `t4-01` | All values as above; Finish enabled, not pressed (T3); re-checked at the T4 gate with the same values | — |
| One Finish with response | T4 record; `t4-01`, `t4-02`; `harness-audit-T4.md` row 7 | Finish clicked once. Response: no dialog, alert, message or prompt; wizard closed; status bar `New Property (IDOs 1 of 1)` | — |

### AC-3 — Clean post-Finish Form; exactly one new Derived property; 16 baseline unchanged; checkout retained; Save zero

| Element | Evidence | Observation | Qualification |
|---|---|---|---|
| Form clean after Finish | `t4-02`; T4 record | Save disabled; no dialog | — |
| Save count | `harness-audit-T4.md` (no Save call) | **Zero Saves** | — |
| New row | `t4-02` row 1; `t5-04` row 1; `t6-01` (rows 8–15 visible; 17 total at gate) | FX_DerOrderTotal; sequence 0; class FX_Cost; Property Type Derived; Column Name blank; Decimal 18 decimal; Read Only unchecked; Required unchecked; Key Sequence blank | Sequence 0 is observed, not interpreted (the brief did not set one; the tutorial does not specify one). |
| Expression visible in grid | `t4-02` (clipped to `FX_C…`); accessibility readback at T4 | `FX_Count * FX_ItmsCost` in the Property Value position | Clipped visually; full text from the accessibility readback only (Section 8). |
| 16 baseline unchanged | `t4-03` (rows 10–17), `t4-04` (rows 8–15), `t4-02` (rows 1–8); T4 readback vs T2 | Names, sequences, classes, types, columns, lengths, column types and checkboxes unchanged row for row | — |
| Total count | `t4-03` (no 18th row); `t5-05` (no 18th row) | 17 | — |
| Checkout retained | `t4-02` (Check In enabled; Locked By operator); T5 gate and `t5-03` | Still checked out to the operator | Observed after Finish and after the T5 reopen. Not re-observed after T6 (no query). |
| Revision | `t4-02`; `t5-03` | Revision Num 2 and Revision Date 10/13/2026 unchanged after the property addition | The mechanism is unexplained (EXP-061 recorded the same). |

### AC-4 — T5 clean close/reopen; visible-criterion F4 query; recovered 17-property inventory; checkout state

| Element | Evidence | Observation | Qualification |
|---|---|---|---|
| Clean pre-close state (T5) | `t5-01`; `harness-audit-T5.md` rows 4, 6 | Save greyed; checked out; 17 rows; no dialog | — |
| Close (T5) | `harness-audit-T5.md` row 6 | Closed via the Form-tab control; no prompt | — |
| Reopen (T5) | `harness-audit-T5.md` rows 8–14 | Form menu > Open > Select Form row `IDOs / IdoCollections` > OK | — |
| Filter in Place (T5) | T5 record; `harness-audit-T5.md` row 15 (snapshot) | Status bar `Filter in Place`; IDO Name criterion blank | — |
| Pre-F4 criterion (T5) | `t5-02`; `harness-audit-T5.md` rows 16–17 (type, Tab) | IDO Name `FX_Orders`; echo row; Filter in Place | — |
| F4 query (T5; target query 2 of 2) | `harness-audit-T5.md` row 20 (F4); `t5-03` | One row `FX_Orders`, checked; Revision 2; Revision Date 10/13/2026; Locked By the operator account; Check In and Undo Check Out enabled; Save disabled; three Tables entries | Same session; UI level. |
| Recovered inventory (17 rows) | `t5-04` (rows 1–8), `t5-06` (rows 8–15), `t5-05` (rows 10–17); accessibility readback at T5 step 26 | 16 baseline rows unchanged; exactly one FX_DerOrderTotal (Derived; FX_Cost; sequence 0; Decimal 18 decimal; column type decimal; Read Only and Required unchecked); no duplicate; no row 18 | `t5-05` shows rows 10–17; row 9 is in `t5-06`. |
| Expression (recovered) | Accessibility readback of the Property Value cell (T5 step 26) | `FX_Count * FX_ItmsCost` | Supported by readback and inferred column mapping, not an unclipped screenshot or detail view. |
| Decimal position 2 (recovered) | Not re-read after recovery | — | Observed in the T3 wizard only (Section 8). |

**Distinction required by the brief:** the T5 recovery is the only evidence of the recovered 17-property state. It was taken after the first reopen and one F4 query.

### AC-5 — Consolidated report, audit, pairs, queries, inventories, confinement, final state

The consolidated counts are in Section 5. The record's T5 and T6 sections carry the per-task audits. Controller audits confirmed the per-task counts, with two corrections to the T6 entries (Section 5).

## 3. The two actual close/reopen pairs and the T2 opening (explicit distinction)

| Event | Task | Type | Count |
|---|---|---|---|
| IDOs Form opened once, with no prior close (no IDOs tab was open at T2 start) | T2 | **Initial fresh opening** | 1 (not a pair) |
| Clean close (Form-tab control) then reopen (Form > Open > Select Form) | T5 | **Actual close/reopen pair 1** | 1 pair |
| Clean close (Form-tab control) then reopen (Form > Open > Select Form) | T6 | **Actual close/reopen pair 2** | 1 pair |

Total actual close/reopen pairs: **2**. The T2 opening is not counted as a pair.

**The T6 second reopening was not followed by a query.** The T6 reopen shows Filter in Place with a blank IDO Name criterion. The T5 recovery evidence was therefore **not independently reverified after T6**. Checkout ownership, Revision, Tables and inventory were not re-read after the second reopen; their last observation is T5 (checked out, 17 rows).

## 4. Target queries

| Query | Task | Key | Result |
|---|---|---|---|
| Target query 1 (baseline) | T2 | F4 once after the criterion `FX_Orders` (committed by Tab) | One row, checked out to the operator |
| Target query 2 (recovery) | T5 | F4 once after the criterion `FX_Orders` (committed by Tab), after the first reopen | One row, checked out; 17 properties recovered |
| Target queries total | — | — | **2** (T6 made none; the brief forbade a third) |

## 5. Reconciled cumulative browser-action audit (T1–T6)

Source: each task's record section, checked against the controller audits `harness-audit-T1.md` to `harness-audit-T6.md`. Counts below are the reconciled totals.

| Measure | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
|---|---|---|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 | 0 | 0 | 0 | 0 | 0 | **0 / 0 / 0** |
| Portal navigation (permitted step) | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Top-level sign-in: username / password / Sign in | 1 / 1 / 1 | 0 | 0 | 0 | 0 | 0 | **1 / 1 / 1** |
| Mongoose app-open clicks | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Configuration sign-in | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Portal banner dismissals (own × control) | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Session-expiry re-logins (1 allowed per task) | 1 | 0 | 0 | 0 | 0 | 0 | **1** (T1 only) |
| Proactive re-login | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Leftover prompts answered Yes / wizard Cancel / Session Expired OK | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0** |
| New Property wizard opened | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Derived choice | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Next navigation | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Property Name typed / Tab commit | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | 0 / 0 | **1 / 1** |
| Class lookup selection (FX_Cost) | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Expression inherit untick | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Expression typed / commit click | 0 | 0 | 1 / 1 | 0 | 0 | 0 | **1 / 1** |
| **Finish** | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| **Save** | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| IDOs initial fresh opening (no prior close) | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| IDOs clean close (Form-tab control) | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| IDOs reopen after a close (Select Form OK) | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| **Actual close/reopen pairs** | 0 | 0 | 0 | 0 | 1 | 1 | **2** |
| Select Form OK (all openings) | 0 | 1 | 0 | 0 | 1 | 1 | **3** |
| **Target F4 queries** | 0 | 1 | 0 | 0 | 1 | 0 | **2** |
| FX_DerOrderTotal additions | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Existing-property, other IDO, table-entry modifications | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Strings, property classes, SQL, Forms, runtime records | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser JavaScript / console / network (worker-authored) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Refresh / restart / direct URL (other than the portal step) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **6 / 6** |
| Snapshots (untargeted / targeted) | 6 / 0 | 5 / 0 | 10 / 0 | 2 / 0 | 6 / 0 | 3 / 0 | **32 / 0** |
| `browser_find` (successful / errored) | 2 / 1 | 5 / 0 | 1 / 0 | 0 / 0 | 2 / 0 | 3 / 0 | **13 / 1** |
| Element clicks (successful / failed) | 4 / 0 | 5 / 0 | 8 / 2 | 1 / 0 | 6 / 0 | 5 / 0 | **29 / 2** |
| Coordinate mouse clicks | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| `browser_type` (flagged; all permitted entries) | 3 | 1 | 2 | 0 | 1 | 0 | **7** |
| Key presses: Tab / F4 / Enter / Escape | 0 / 0 / 0 / 0 | 1 / 1 / 0 / 0 | 1 / 0 / 0 / 0 | 0 | 1 / 1 / 0 / 0 | 0 | **3 / 2 / 0 / 0** |
| Mouse moves / wheel / waits | 0 / 0 / 1 | 1 / 1 / 0 | 0 / 0 / 0 | 1 / 2 / 0 | 1 / 2 / 0 | 0 | **3 / 5 / 1** |
| Screenshots | 1 | 4 | 5 | 4 | 6 | 2 | **22** |
| Timeouts | 0 | 0 | 2 | 0 | 0 | 0 | **2** (both T3) |
| Ref-not-found / native dialogs / fresh-snapshot allowance | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

Corrections to the record made during T7 (controller audit is authoritative):
- T6 element clicks: recorded as 6; the controller audit (`harness-audit-T6.md` rows 6, 8, 10, 12, 14) shows **5**. The T6 record had also described a Form-menu call "included in the six"; that was an error. No Properties sub-tab click was made in T6.
- T6 `browser_find`: recorded as 2; the controller audit (rows 9, 11, 13) shows **3** (`Open`, `IdoCollections`, `IdoCollections`).
- Cumulative element clicks therefore read **29 / 2** (not 30 / 2), and cumulative `browser_find` reads **13 / 1** (not 12 / 1).
- The `browser_type` count of 7 includes the two credential placeholders (T1), one portal navigation-menu search entry `Mongoose` (T1, not a Mongoose artifact), the IDO Name criterion (T2 and T5), and the Property Name and expression entries (T3). The controller audits flag these as `browser_type`; the flag does not indicate a violation, and the brief permitted each entry.

Controller audit tallies (not used as totals): the `harness-audit-T*.md` header lines give tool-call totals and "prohibited-tool hits" (T1 3, T3 2, T5 1, T2 1, T4 0, T6 0). These hits are the flagged `browser_type` calls above, which the controller marks "may be allowed by other briefs". Errors: T1 1 (my argument error on `browser_find`), T3 2 (the Derived radio and the expression checkbox timeouts). Exact mismatches: 0 in every audit.

## 6. Worker-written-file inventory (complete)

Repository files written by the worker (T1–T7):

| File | Created or edited | Task |
|---|---|---|
| `experiments/EXP-080-R3-hello-world-part-5-section-3-fx-orders-derived-order-total.md` | Created (T1); edited T2–T6 (status headers, sections, count tables); edited T7 (status header, T7 pointer, superseded notes, and the T6 count corrections) | T1–T7 |
| `evidence/EXP-080-R3/t1-session-recovery-web-client-loaded.png` | Created | T1 |
| `evidence/EXP-080-R3/t2-01-pre-f4-idos-fx-orders-criterion.png` | Created | T2 |
| `evidence/EXP-080-R3/t2-02-post-f4-identity-and-tables-view.png` | Created | T2 |
| `evidence/EXP-080-R3/t2-03-baseline-inventory-properties-rows-1-to-8.png` | Created | T2 |
| `evidence/EXP-080-R3/t2-04-baseline-inventory-properties-rows-9-to-16.png` | Created | T2 |
| `evidence/EXP-080-R3/t3-01-wizard-page1-bound-default-before-derived.png` | Created | T3 |
| `evidence/EXP-080-R3/t3-02-wizard-page2-derived-before-any-entry.png` | Created | T3 |
| `evidence/EXP-080-R3/t3-03-committed-property-name-no-prompt.png` | Created | T3 |
| `evidence/EXP-080-R3/t3-04-class-fx-cost-selected-inherited-types.png` | Created | T3 |
| `evidence/EXP-080-R3/t3-05-configured-wizard-before-finish-not-pressed.png` | Created | T3 |
| `evidence/EXP-080-R3/t4-01-pre-finish-configured-wizard-gate-passed.png` | Created | T4 |
| `evidence/EXP-080-R3/t4-02-post-finish-immediate-idos-properties-view.png` | Created | T4 |
| `evidence/EXP-080-R3/t4-03-post-finish-inventory-rows-9-to-17.png` (shows rows 10–17; row 9 is in `t4-04`) | Created | T4 |
| `evidence/EXP-080-R3/t4-04-post-finish-inventory-row-9-scroll-check.png` | Created | T4 |
| `evidence/EXP-080-R3/t5-01-pre-close-clean-idos-form-17-rows.png` | Created | T5 |
| `evidence/EXP-080-R3/t5-02-pre-f4-recovery-idos-fx-orders-criterion.png` | Created | T5 |
| `evidence/EXP-080-R3/t5-03-recovered-identity-and-tables-view.png` | Created | T5 |
| `evidence/EXP-080-R3/t5-04-recovered-inventory-rows-1-to-8.png` | Created | T5 |
| `evidence/EXP-080-R3/t5-05-recovered-inventory-rows-9-to-17.png` (shows rows 10–17; row 9 is in `t5-06`) | Created | T5 |
| `evidence/EXP-080-R3/t5-06-recovered-inventory-row-9-scroll-check.png` | Created | T5 |
| `evidence/EXP-080-R3/t6-01-pre-close-clean-idos-form-17-rows.png` | Created | T6 |
| `evidence/EXP-080-R3/t6-02-reopened-idos-filter-in-place-blank-criterion-final-state.png` | Created | T6 |
| `evidence/EXP-080-R3/T7-final-acceptance-report.md` (this file) | Created | T7 |

Totals: screenshots 22 (T1 1, T2 4, T3 5, T4 4, T5 6, T6 2); worker-written repository documents 2 (the record and this report) — the record counted once.

Files in `evidence/EXP-080-R3/` that the **controller** wrote (not worker-authored; listed for completeness): `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md`, `harness-audit-T6.md`.

Tool-written snapshot, console and log files under `evidence\playwright\` (for example `page-2026-10-13T17-27-13-759Z.yml` through `page-2026-10-13T17-46-01-011Z.yml`, and `console-2026-10-13T17-27-05-464Z.log` through `console-2026-10-13T17-45-37-338Z.log`) are wrapper output. They sit outside the EXP-080-R3 path and are a known confinement limitation.

## 7. Confinement assessment

- The controller audits (`harness-audit-T1.md` to `T6.md`) list every file-tool call. Write and Edit calls targeted only the EXP-080-R3 record. Screenshot calls targeted only `evidence/EXP-080-R3/`. Read, Grep and Glob calls were read-only and targeted the EXP-080-R3 record and evidence, the AGENTS.md file, the EXP-080 and EXP-080-R2 records, the EXP-079, EXP-078, EXP-061 and EXP-048 records, and the transcript. No audit row shows a write outside the EXP-080-R3 paths.
- The worker inventory (Section 6) lists no repository file outside the EXP-080-R3 record and `evidence/EXP-080-R3/`. The EXP-080 and EXP-080-R2 records and their evidence were read only.
- Limitations: the tool-written `evidence\playwright\` files sit outside the EXP-080-R3 path (wrapper output). No shell or git command was run, so git status was not checked. The **operator git review remains authoritative**.

## 8. Limitations

1. **The T5 recovery was NOT independently re-verified after T6.** T6 was a second clean close/reopen with a blank criterion and no query.
2. **Expression text** (`FX_Count * FX_ItmsCost`) is supported by the accessibility readback of the grid's Property Value cell, and the cell-to-expression mapping is inferred from column position. The grid visibly clips it to `FX_C…`. No unclipped screenshot or detail view was taken (none was opened, to avoid an edit).
3. **Decimal position 2** was observed in the wizard (T3, inherited from FX_Cost). It was not re-read after recovery.
4. **Expression correctness is not evaluated.** Nothing was run; this is UI-level only. Database durability is not established by same-session UI recovery.
5. **Sequence 0** for the new property is observed but not interpreted.
6. **Revision Num 2 and Revision Date 10/13/2026** did not change after the property addition. The mechanism is unexplained (EXP-061 recorded the same). The Revision Date does not match today's date.
7. **Read Only mapping** (first checkbox column) is inferred from the EXP-075 and EXP-078 records and the column order, not from a labelled read.
8. **Checkout ownership** is inferred from Locked By and the enabled Check In and Undo Check Out controls, not a database read.
9. **Environment issues (suspected, unexplained):** the Derived radio click timed out "outside of the viewport" (EXP-080 T2 and this run); the expression inherit checkbox click was intercepted by an overlay span. Both were worked around by a label-text click.
10. **The Property Name Tab-commit prompt** from EXP-080 did not recur in this run (one run). The operator's EXP-080 diagnosis is unverified.
11. **The T1 sign-out cause** was not established. The R2 SSO refusal was not reproduced.
12. **Tool-reported console counts** (for example 24 errors, then 50) were not inspected; console inspection was out of scope.
13. **The Designer tab (tab 0)** was listed but never selected, snapshotted or inspected in any task. Its state is unknown.
14. **The Label String ID and Read Only overrides** (EXP-081) and the unload were not performed, as the brief required.
15. **The `browser_type` flag** in the controller audits marks permitted entries, not violations.

## 9. Final browser state (accurate as of T6; T7 made no browser call)

- Web Client tab 1 (Mongoose, `favoriteContext=IdoCollections`) is the selected tab.
- The IDOs Form is open, in **Filter in Place** (status bar), with the IDO Name criterion **blank**. No FX_Orders row is selected or displayed. Save is disabled. No dialog, prompt, wizard or session warning is open.
- **Checkout was last observed in T5** (FX_Orders checked out to the operator, Revision 2, Locked By the operator account, 17 properties). It was **not newly established in T6**, because T6 ran no query.
- The Designer tab (tab 0) was listed only; not selected, inspected or changed.

## 10. Recommendation

ACCEPTED AS OBSERVED, with the limitations in Section 8. Every acceptance check (AC-1 to AC-5) has observed evidence in the record and the screenshots listed in Section 6. This is a coordinator decision. The experiment is **not** classified as replay_verified, and no database durability or expression correctness is claimed.
