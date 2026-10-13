# EXP-081 — T5 final acceptance report (documentation only)

- Experiment: EXP-081 — Hello World Part 5 Sections 2–3: Label String ID overrides on four FX_Orders properties and Read Only on FX_DerOrderTotal.
- Task: T5 (cycle 4), task_message_id `91f9ce54-7cc4-47e4-bbc5-4b16a700c597`, worker session `67b6c280-9a13-48bd-88ff-0b393b3fe095`, run `R-20261014-015408-hxgu`. Date 2026-10-14.
- Scope of this task: documentation only. **Zero browser calls and zero Mongoose changes in T5.** Files written: this report and the EXP-081 record.
- Classification of every finding: **observed only** (same session; UI and accessibility level). Not database durability. Not an independent product-session replay. **Not** `replay_verified`.

## 1. Recommendation

**ACCEPTED AS OBSERVED, subject to coordinator review.** Every acceptance check AC-1 to AC-5 has observed evidence, and AC-6 is satisfied by this report and the record. The limitations in sections 3, 6 and 9 apply.

## 2. Sources and method

- Reviewed (in the T1–T4 records, which are the primary sources for this report): `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt5.md` lines 94–133 (Sections 2–3 narration and source cautions); the EXP-080-R3, EXP-079, EXP-078, EXP-070 and EXP-076 records, as partially read in T1 (the line ranges are stated in the record).
- Not read in full: the raw transcript excerpt at lines 388–434; later sections of the EXP-080-R3, EXP-079, EXP-078, EXP-070 and EXP-076 records. The FX_sAddress value (`Address`) is taken from the EXP-076 status text, not re-read in Strings during EXP-081.
- Visual evidence is cited through the observed readings the T1–T4 records set out for each screenshot. T5 did not re-inspect the PNG files.
- No separate controller or harness audit file exists under `evidence/EXP-081/`. The audit reconciliation in section 7 is therefore made against the worker's per-task records (T1–T4), with the reconciliation stated explicitly.

## 3. Acceptance matrix

| AC | Status | Exact evidence (repo-relative paths) | Specific observed proof | Limitations |
|---|---|---|---|---|
| **AC-1** Sources reviewed; session usable; fresh IDOs Form; one visible-criterion query returns exactly one FX_Orders checked out to the operator; 17-property inventory and baseline LSID / Read Only of the five targets recorded | **Supported (observed)** | `evidence/EXP-081/t1-01-pre-f4-idos-fx-orders-criterion.png` (pre-F4 criterion); `t1-02-baseline-properties-grid-17-rows-top.png` (identity, checkout, rows 1–8); `t1-03-route-check-properties-grid-scrolled-right.png` (status `Properties 1 of 17`); `t1-04` to `t1-07` (per-target baselines) | Session usable with no modal, sign-in page, banner or session strip. The IDOs Form was closed once (clean) and reopened once through Form > Open > Select Form in Filter in Place. One F4 returned one FX_Orders row, checked, Revision 2, checked out to the operator (Check In and Undo Check Out enabled). The 17-row inventory was read from the accessibility tree (S6). Baselines: FX_CusAddress LSID blank / Read Only checked; FX_DerOrderTotal LSID `FX_sCost` displayed / Read Only unchecked; FX_CusName LSID blank / checked; FX_ItmsDescription LSID blank / checked. | Rows 9–17 are shown only in the accessibility readback; the viewport screenshot shows rows 1–8. The `FX_sCost` provenance is unresolved (section 9). Checkout is the displayed control state, not a database read. |
| **AC-2** One edit route identified and recorded before any edit | **Supported (observed)** | `evidence/EXP-081/t1-03-route-check-properties-grid-scrolled-right.png` (in-form grid after a horizontal scroll; no Label String ID column); `t1-04-route-properties-button-form-idoproperties-detail.png` (the IDO Properties Form and its detail panel with Label String ID and Read Only) | The in-form IDOs grid has 15 headers and no Label String ID column. The blue `Properties` button opened the `IDO Properties` Form, whose detail panel holds Label String ID (Formatting group) and Read Only. The route was recorded in T1 before any edit and used for every edit in T2 and for the read-only checks in T4. | The route edits one property at a time through its detail panel. |
| **AC-3** Label String IDs set by keystrokes and Tab (four entries); Read Only ticked on FX_DerOrderTotal; each readback verified with no message or prompt; nothing else changed | **Supported (observed, pre-Save)** | Entries (before / after, each with one Tab): `t2-03` (row 14 identity), `t2-04` (FX_sAddress committed); `t2-05`, `t2-06` (FX_sOrderTotal committed after Ctrl+A replaced FX_sCost); `t2-07`, `t2-08` (FX_sCustomerName); `t2-09`, `t2-10` (FX_sItemDescription). Read Only: `t2-11` (before, unchecked), `t2-12` (after, checked) | Each readback showed the typed value with no message, prompt or create offer. Dirty markers appeared on rows 1, 3, 5 and 14 only. Focus moved to the Input Mask field after each Tab; it was not edited. "Nothing else changed" is supported for the grid-visible fields of the 17 properties (section 5) and for the non-target fields of the four targets, not for every field of every property. | The first Read Only click (ref `f1e2621`) timed out at "visible, enabled and stable" because a `span` overlay intercepted the pointer. The click did not run (confirmed by a read-only `find`). One corrected click on the visible `Read Only` label ticked the box. Only one effective tick was made. |
| **AC-4** Exactly one toolbar Save with its native response; Save disabled afterwards; the five values shown | **Supported (observed)** | `evidence/EXP-081/t3-01-pre-save-gate-dirty-idoproperties-five-changes-no-modal.png` (pre-Save gate); `t3-02-save-immediate-response-after-single-save.png` (Save result); `t3-03` to `t3-06` (post-Save values); `t3-07` (parent checkout after Save) | One click on the toolbar Save (T3 record; cumulative count 1; not retried). Immediate response: **no visible native message, banner, validation text, prompt, dialog or error**. Afterwards Save is disabled and the four row markers cleared. Post-Save values: FX_sAddress; FX_sOrderTotal with Read Only checked; FX_sCustomerName; FX_sItemDescription. | No visible success message exists in the UI. Completion is inferred from the disabled Save and the cleared markers. No server-side or database read was made. |
| **AC-5** Clean IDOs Form closed once more and reopened once more; one visible-criterion query recovers the five changes; other properties unchanged; still checked out to the operator | **Supported (observed; same session)** | `t4-01-pre-close-child-idoproperties-clean-save-disabled.png` (child Form clean before close); `t4-02-reopened-idos-status-filter-in-place-blank-criterion.png` (reopen, Filter in Place); `t4-03-pre-f4-recovery-idos-fx-orders-criterion.png` (pre-F4); `t4-04-recovered-identity-checkout-after-single-f4.png` (one row, checked out, Revision 2, Tables); `t4-05-recovered-properties-grid-rows-1-8.png` (rows 1–8); `t4-06` to `t4-09` (recovered LSID and Read Only, one per target) | Child IDO Properties closed clean (no prompt). Parent IDOs closed (no prompt). Reopened once through Form > Open > Select Form (`IDOs / IdoCollections`). One visible-criterion FX_Orders query (the second and last target query) returned one checked row, Check In and Undo Check Out enabled, Revision 2, project FX_HelloWorldProject01. Recovered values: FX_sAddress, FX_sOrderTotal (Read Only checked), FX_sCustomerName, FX_sItemDescription (Read Only checked). Save disabled on both Forms. | Same-session UI recovery only. Rows 9–17 are verified by accessibility readback, not by screenshot. Non-target Label String IDs were not individually re-read (section 5). |
| **AC-6** Final report: decisive evidence for AC-1 to AC-5; full audit with exact counts; baseline and recovered values; file inventory; final state | **Satisfied by this report and the record** | This file; `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md` (T1–T5 sections and cumulative audit) | Sections 4–10 below. | Observed only. Confinement is supported by the worker inventory (section 8); operator git review is authoritative. |

## 4. Four-property comparison (Label String ID and Read Only)

Five target values across four properties: the four Label String IDs and the one Read Only tick on FX_DerOrderTotal.

| Property (IDO row) | Baseline, T1 | Pre-Save, T2 (after entry; T3 gate) | Post-Save, T3 | Recovered, T4 |
|---|---|---|---|---|
| FX_CusAddress (14; `fxcus.FX_Address`) | LSID blank; Read Only checked (`t1-07`) | `FX_sAddress`; checked (`t2-04`; `t3-01`) | `FX_sAddress`; checked (`t3-05`) | `FX_sAddress`; checked (`t4-07`) |
| FX_DerOrderTotal (1; Derived, FX_Cost) | LSID `FX_sCost` (displayed); Read Only **unchecked** (`t1-04`) | `FX_sOrderTotal`; **checked** (`t2-06`; `t2-12`; `t3-01`) | `FX_sOrderTotal`; **checked** (`t3-06`) | `FX_sOrderTotal`; **checked** (`t4-06`) |
| FX_CusName (3; `fxcus.FX_Label`) | LSID blank; checked (`t1-05`) | `FX_sCustomerName`; checked (`t2-08`) | `FX_sCustomerName`; checked (`t3-03`) | `FX_sCustomerName`; checked (`t4-08`) |
| FX_ItmsDescription (5; `fxitms.FX_Description`) | LSID blank; checked (`t1-06`) | `FX_sItemDescription`; checked (`t2-10`) | `FX_sItemDescription`; checked (`t3-04`) | `FX_sItemDescription`; checked (`t4-09`) |

FX_CustomerID is not a target. Its label comes from class FX_CustomerID (`FX_sCustomerID`, EXP-070) and was not changed; it was not re-read as a property-level value in EXP-081.

Note on the displayed `FX_sCost`: the T1 detail panel shows `FX_sCost` on FX_DerOrderTotal before any change. Whether it is stored on the property or inherited from class FX_Cost is **unresolved** (section 9).

## 5. Seventeen-property reconciliation

- **Four targeted properties:** FX_CusAddress, FX_DerOrderTotal, FX_CusName, FX_ItmsDescription.
- **Thirteen non-targeted properties:** FX_OrderNumber, FX_CustomerID, FX_Item, FX_ItmsCost, FX_Count, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow, FX_ItmsPicture.

What was compared (T1 baseline against T4 recovered, accessibility readback of the IDO Properties grid and the IDOs Properties grid):

- For all 13 non-targeted properties: name, sequence, property class, property type, column name, data type, length, column type, Read Only, Required and Read Only Record were unchanged. The T4 record tabulates these fields. Rows 1–8 are also visible in `t4-05`; rows 9–17 are accessibility readback only.
- For the three non-derived targets (FX_CusAddress, FX_CusName, FX_ItmsDescription): the same grid fields were unchanged. Their Label String IDs changed as intended.
- For FX_DerOrderTotal: the Read Only tick changed as intended. The other compared fields are listed in section 6.
- Result: 16 of 17 properties show no change in the compared grid fields, and FX_DerOrderTotal's only change is the Read Only tick.

What was **not** compared:

- Label String IDs of the 13 non-targeted properties were not individually re-read after the Save. One exception: FX_OrderNumber's Label String ID `FX_sOrderNumber` was seen incidentally in the T1 IDO Properties grid readback, and was not re-read after the Save.
- The detail-panel attributes of the non-targeted properties (for example Input Mask, Justify, Default Value, Domain fields, Upper Case, Validators) were not examined, so no claim is made about them.
- The Upper Case, Pseudo Key and Property Value columns were not part of the T4 tabulated comparison.

The complete 17-row set is therefore: the 13 non-targeted properties with grid-field comparisons only, plus the four targeted properties with the Label String ID and Read Only values in section 4 and the grid-field comparisons above.

## 6. FX_DerOrderTotal (Derived) attributes

- Property type: Derived. Property class: FX_Cost. Sequence: 0. Expression: `FX_Count * FX_ItmsCost` (accessibility readback in T1, T2, T3 and T4; clipped in the grid screenshots).
- Data: Decimal, Length 18, Decimal Position 2, Default Value `0`, Column Data Type `decimal`. Required unchecked. Read Only Record unchecked.
- These compared non-target attributes were unchanged across T1, T2 (`t2-11`), T3 (`t3-06`) and T4 (`t4-06`).
- Only the Label String ID (`FX_sCost` to `FX_sOrderTotal`) and Read Only (unchecked to checked) changed, both as intended.

## 7. Browser action audit: reconciliation (T1–T4, cumulative; T5 = zero)

Per-task counts are taken from each task's record. T5 made zero browser calls. There is no separate controller audit file, so the reconciliation is against the T1–T4 records themselves. The per-task figures reconcile with one another and with the screenshot files on disk (35 PNGs: t1-01 to t1-07, t2-01 to t2-12, t3-01 to t3-07, t4-01 to t4-09).

| Operation | T1 | T2 | T3 | T4 | T5 | Cumulative |
|---|---|---|---|---|---|---|
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 | **0 / 0 / 0** |
| Label String ID entries (keystroke + Tab) | 0 | 4 | 0 | 0 | 0 | **4** |
| Read Only ticks (effective) | 0 | 1 | 0 | 0 | 0 | **1** |
| Read Only click that timed out (did not run) | 0 | 1 | 0 | 0 | 0 | **1** |
| Toolbar Save | 0 | 0 | 1 | 0 | 0 | **1** |
| IDOs Form close / reopen pairs | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | 0 | **2 pairs** (T1 fresh-Form; T4 recovery) |
| IDO Properties Form opened / closed | 1 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 0 | **2 opened / 1 closed** |
| Target F4 queries (FX_Orders) | 1 | 0 | 0 | 1 | 0 | **2** (no extra authorized query used) |
| Select Form dialogs answered (OK) | 1 | 0 | 0 | 1 | 0 | **2** |
| Strings created | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer tab interactions (click, type, key, screenshot) | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer read-only snapshot (inadvertent, see section 8) | 0 | 1 | 0 | 0 | 0 | **1** (read-only; no interaction) |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins (session-expiry procedure) | 0 | 0 | 0 | 0 | 0 | **0** |
| Portal navigation / sign-in | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser JavaScript / evaluate / run-code / console / network / direct URL / refresh / restart | 0 | 0 | 0 | 0 | 0 | **0** |
| `browser_tabs` list / select | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 0 | **4 / 4** |
| Snapshots, untargeted / targeted | 7 / 0 | 3 / 1 | 0 / 0 | 2 / 0 | 0 | **12 / 1** |
| `browser_find` | 2 | 12 | 10 | 16 | 0 | **40** |
| Element clicks, successful / failed | 10 / 0 | 11 / 1 | 6 / 0 | 12 / 0 | 0 | **39 / 1** |
| Coordinate clicks | 1 | 0 | 0 | 0 | 0 | **1** (T1 grid scroll) |
| `browser_type` | 1 | 4 | 0 | 1 | 0 | **6** (all `slowly` true) |
| Key presses: Tab / F4 / Control+a | 1 / 1 / 0 | 4 / 0 / 1 | 0 / 0 / 0 | 1 / 1 / 0 | 0 | **6 / 2 / 1** |
| Waits | 1 | 0 | 0 | 1 | 0 | **2** |
| Screenshots | 7 | 12 | 7 | 9 | 0 | **35** |
| Ref-not-found / native dialogs | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | **0 / 0** |
| Timeouts | 0 | 1 | 0 | 0 | 0 | **1** (the Read Only click) |
| Fresh-snapshot recovery allowance used | 0 | 1 of 1 | 0 | 0 | 0 | **1 of 1** (exhausted in T2) |

Reconciliation notes:

- Four Label String ID entries, one effective Read Only tick, one timed-out click, one Save, two IDOs close/reopen pairs, two target F4 queries and two IDO Properties openings (one close) match the brief's counts.
- The Read Only tick is counted once. The timed-out click that did not run is counted separately and is not a change.
- Zero checkout-management actions, zero strings created, zero Designer mutations, zero unloads and zero re-logins.
- T5 added zero browser calls.

## 8. Deviations, non-changes and misclassifications avoided

These events are recorded so they are not mistaken for Mongoose changes.

1. **T2 inadvertent read-only Designer snapshot.** The first untargeted snapshot ran while tab 0 (Mongoose Designer, FX_HelloWorld01 Form) was the current tab. It was read-only: no click, type, key or screenshot on tab 0. It is counted as a read-only observation, not as a Designer action. The Designer state was not changed, and the tab was not selected in EXP-081.
2. **T2 timed-out Read Only click.** The click on ref `f1e2621` timed out because an overlay span intercepted the pointer. It did not run (confirmed by a read-only `find`: the checkbox was still unchecked). The corrected attempt on the visible `Read Only` label ticked the box. Only that one tick is an effective change.
3. **T2 inspection-recovery allowance.** T2 used its one fresh untargeted snapshot after the timeout, one read-only `find` to confirm the checkbox state, and one corrected click. The allowance (1 of 1) is exhausted. No further snapshot-based recovery was made in T3 or T4, and none is needed for the result.
4. **T2 denied read.** A `Grep` attempt to read a harness-persisted snapshot file (the oversized output of the post-timeout snapshot) was denied by the permission system. It had no browser effect and is not counted as a browser action. The snapshot itself was read from the tool output.
5. **T4 documentation Edit error.** During T4 documentation, an `Edit` call with identical old and new strings returned "No changes to make". It wrote nothing and is a documentation tool event, not a Mongoose action.
6. **T4 record corrections (made in T5).** The T4 record's final-state paragraph said the IDO Properties Form was open with row 14 (FX_CusAddress) current, and implied the IDOs tab was active. The T4 screenshots show the last row selected was **row 5 (FX_ItmsDescription)** (`t4-09`, status `Property Name (Properties 5 of 17)`), and the **IDO Properties** tab was the active tab. The T4 AC-5 row said "the 16 other properties unchanged". The correct statement is: the 13 non-targeted properties are unchanged in the compared grid fields, and the other three targets' Label String IDs changed intentionally. Both corrections are in the record. No other experiment, source or repository file was changed.
7. **Read-only checks in T4 changed no field.** Row selections in T4 (rows 14, 3 and 5) were navigation only.

## 9. Scope of conclusions and unresolved items

- **Same-session UI recovery only.** The recovered values were read from the same Mongoose session after close/reopen. No database read was made. No database durability is claimed.
- **No independent product-session replay.** Nothing was re-executed from a fresh session or environment. **Not** `replay_verified`.
- **Three requested Label String IDs refer to strings intentionally not created in EXP-081:** `FX_sOrderTotal`, `FX_sCustomerName` and `FX_sItemDescription`. They are to be created with the Section 5 Form work. **No create offer was observed** on Tab at entries 2–4 (T2) or on the toolbar Save (T3). Their later runtime resolution is **unverified**. The IDO Properties grid accepted the typed identifiers, but the existence of the strings was not checked in the Strings view during EXP-081.
- **FX_sAddress** exists per the EXP-076 record (value `Address`); this was not re-read in Strings during EXP-081. The FX_CusAddress Label String ID accepted `FX_sAddress` with no prompt.
- **Provenance of the original displayed `FX_sCost` on FX_DerOrderTotal is unresolved.** It was displayed before any change. It is not established whether it was a stored property value or inherited from class FX_Cost.
- **Save result.** No visible success message exists. The Save completing is inferred from the disabled Save and the cleared markers. The recovery query is the first independent UI read after the Save, and its values match the post-Save readbacks.
- **Revision Date 10/13/2026** on the 2026-10-14 session is unchanged across tasks; its mechanism is not established.
- **Designer tab (tab 0)** was not inspected beyond the one inadvertent read-only snapshot in T2, and it was not acted on. Its state is left for the coordinator.

## 10. Final browser state (as T4 observed; T5 made no browser calls)

- Web Client tab (tab 1) is the selected tab. The Designer tab (tab 0) was not selected, clicked or captured by T3–T5.
- **Both Forms are clean.** Save is disabled on both. No unsaved-change marker is present.
- **IDO Properties** is the active tab. Its last current row was **row 5, FX_ItmsDescription** (`t4-09`). Its detail shows Label String ID `FX_sItemDescription` and Read Only checked.
- **IDOs** is open behind it, clean. Its Properties sub-tab is selected, and **FX_Orders is still checked out to the operator** (Check In and Undo Check Out enabled; Revision 2; project FX_HelloWorldProject01).
- No dialog, modal, prompt or session-expiry condition is present.

## 11. Worker-written-file inventory (all tasks)

Worker-authored EXP-081 files (repo-confined):

- `experiments/EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md`: created in T1; edited in T2, T3, T4 and T5 (T4 corrections; T5 status and section).
- `evidence/EXP-081/T5-final-acceptance-report.md`: created in T5 (this file).
- `evidence/EXP-081/t1-01-pre-f4-idos-fx-orders-criterion.png` through `t1-07-baseline-FX_CusAddress-detail-label-and-read-only.png`: 7 PNG files (T1).
- `evidence/EXP-081/t2-01-…` through `t2-12-…`: 12 PNG files (T2).
- `evidence/EXP-081/t3-01-…` through `t3-07-…`: 7 PNG files (T3).
- `evidence/EXP-081/t4-01-…` through `t4-09-…`: 9 PNG files (T4).

Total worker-authored repository files for EXP-081: 37 (one record, one T5 report, 35 PNG files).

Not worker-authored (tool-generated, under `evidence\playwright\` in the repository): snapshot (`.yml`) and console (`.log`) files written by the browser tool on browser events during T1–T4. They were read only as tool readbacks, and they are outside the EXP-081 path. Their number was not enumerated.

Outside the repository: one harness-persisted tool-result file holding the oversized T2 snapshot output, stored in the session's tool-results folder. It was not read as evidence, and the denied `Grep` in T2 was not a read.

No file under another experiment, `AGENTS.md`, tutorial sources, recipes, or any other repository path was written by the worker. Operator git review is authoritative for repository confinement.

## 12. Acceptance summary

| AC | Result |
|---|---|
| AC-1 | Supported (observed) |
| AC-2 | Supported (observed) |
| AC-3 | Supported (observed, pre-Save) |
| AC-4 | Supported (observed; no visible native success message) |
| AC-5 | Supported (observed; same-session UI recovery) |
| AC-6 | Satisfied by this report and the EXP-081 record |

**Recommendation: ACCEPTED AS OBSERVED, subject to coordinator review.** Not `replay_verified`. No database durability claimed.
