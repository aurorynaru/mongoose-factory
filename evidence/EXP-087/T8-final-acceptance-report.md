# EXP-087 — T8 final acceptance report (documentation-only audit)

Experiment: EXP-087 — Hello World Part 5 Sections 7–8: FX_CustomerID In Collection validator
Run: R-20261014-151624-Qgjt · cycle 6 · task T8 · task_message_id `ecb7ddb0-abef-4c68-8f8f-91b2c34e2bb9` · worker session `f44c4b57-1cb1-4edd-a2ba-cc165c61b056`
Date: 2026-10-14
Method: documentation review only. **Zero browser calls and zero Mongoose changes in T8.** Sources: the EXP-087 record, the evidence files in `evidence/EXP-087/`, and the controller-generated audits `evidence/EXP-087/harness-audit-T1.md` … `harness-audit-T7.md`. Non-browser tools used: Read, Grep, Glob, and Write/Edit for documentation only.

## 1. Recommendation

**ACCEPTED AS OBSERVED**, with the conditions in section 8. Every acceptance check AC-1 to AC-4 is supported by existing evidence. Nothing here supports a claim of database durability, runtime validation behaviour, the runtime text of `mIsNotAValid`, or replay verification.

Two count corrections are made in this report (section 5). They change the cumulative browser-call total from the worker-reported 208 to a harness-reconciled 210. The change is explained, not silent.

## 2. Final state (as last observed, T6)

- FX_Orders is the selected Form tab; footer `ScopeType: User`; toolbar Save, Regenerate Form, Undo and Redo disabled; no dialog or prompt open. Evidence: `t6-07-after-readback-Cancel-final-state.png` (observed frame; the accessibility find in the same step returned the same state).
- Validator read back after the close/reopen (`t6-06`): Name `FX_CustomerID`; Version `User version`; Type `In Collection`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid`; Description and Edit in-line Script blank.
- Designer clean after the single Save (`t5-07`). The Form was closed once and reopened once in T6 (`t6-02`, `t6-05`).

## 3. Acceptance checks

### AC-1 — Sources reviewed; session usable; User scope clean; dialog layout recorded; FX_CustomerID absent

| Requirement | Supporting evidence (repo-relative) | Observed | Limitation |
| --- | --- | --- | --- |
| Sources reviewed | Record, "Sources reviewed" tables in T1 and T2 (AGENTS.md; tutorial Section 8 and transcript 10:38–13:06; global-objects guide sections; ido-development validator section; EXP-085 partial; EXP-069-R4 outcome; EXP-078 columns) | Read in T1 before any browser interaction | EXP-085 read in part (about 320 of 1331 lines); recorded as a limitation in T1 |
| Session usable | `evidence/EXP-087/g0-00-designer-fresh-snapshot-start.yml`; `harness-audit-T1.md` (errors 0) | Session live; no sign-in or expiry in T1–T6; re-logins 0 | — |
| Designer in User scope, clean, FX_Orders open | `g0-01-designer-fx-orders-start-state.png` | Heading FX_Orders; footer `ScopeType: User`; Save and Undo greyed | The frame shows the footer and toolbar, not the Validators list |
| Edit > Validator dialog layout recorded | `g0-02-validator-dialog-readonly-list.png`; `t2-02-validator-list-FG-slice-before-New.png` | `Global Objects` dialog; `Validators` list with search box; list controls `+` (New), copy and trash; `Properties` pane with search and Undo/Redo; OK / Cancel / Help | The `+`, copy and trash buttons are unlabelled in the accessibility tree; identified by position (the New prompt that followed confirmed `+`) |
| FX_CustomerID absent before creation | `t2-02-validator-list-FG-slice-before-New.png` (screenshot); `g0-03` (accessibility read of F–G, see limitation); record T1 and T2 gate sections | No FX_CustomerID row; `FullTextIndexNameValidator` is followed directly by `GE` | Client list view, not a database read. The T1 F–G slice has accessibility evidence only (`g0-03` is misnamed and shows D–E). The T2 screenshot is the screenshot evidence for the F–G slice |

Verdict: **AC-1 supported (with the stated limits).**

### AC-2 — One New; Type In Collection; Parameters; outputs; In Collection Only Property; Error Message; Tab commits; dialog confirmations; no message creation

| Requirement | Supporting evidence | Observed | Limitation |
| --- | --- | --- | --- |
| Created once through the list `+` (New) | `t2-03-after-New-name-prompt.png`, `t2-04-name-prompt-FX_CustomerID-before-OK.png`, `t2-05-new-validator-property-sheet.png`; `harness-audit-T2.md` row 17 (`+` click, one) | One New; name prompt OK once; new row `FX_CustomerID` | `+` identified by position |
| Name committed by Tab, then prompt OK once | `t2-04` (name after Tab, before OK); `harness-audit-T2.md` rows 20–21, 25 | Name `FX_CustomerID`; prompt OK once | — |
| Type In Collection (list, Tab) | `t2-06-type-list-open.png`, `t2-07-type-In-Collection-after-Tab.png`; `harness-audit-T2.md` rows 30–34 | Type `In Collection` after Tab | — |
| IDO FX_HelloWorld01 (list, Tab) | `t3-03-IDO-after-arrow-click.png`, `t3-04-IDO-FX_HelloWorld01-after-Tab.png`; `harness-audit-T3.md` rows 11–15 | IDO combobox `FX_HelloWorld01` after Tab | The list was reached by clicking the dropdown arrow (no accessibility ref); the first click on the field only focused it |
| Output %1 = FX_Label (New once; Target typed; Value from list; Tab; OK once) | `t3-07`, `t3-08`, `t3-09-SetProp-output1-before-OK.png`, `t3-10`; `harness-audit-T3.md` rows 23–46 | Target `%1`; Value `FX_Label`; OK once; list row `%1=FX_Label` | — |
| Output %2 = FX_Address (New once; Target typed; Value from list; Tab; OK once) | `t3-11`, `t3-12-SetProp-output2-before-OK.png`, `t3-13-SetProp-list-two-outputs.png`; `harness-audit-T3.md` rows 49–61 | Target `%2`; Value `FX_Address`; OK once; two list rows | — |
| Set Prop list and editor confirmations | `t3-14-SetProp-editor-properties-after-list-OK.png`, `t3-15-parameters-after-SetProp-OK.png`; `harness-audit-T3.md` rows 64, 67 | Edit Set Values Properties `%1=FX_Label,%2=FX_Address`; Set Prop `SETP(%1=FX_Label,%2=FX_Address)` | These two OKs were not preceded by a Tab: no field was in edit (the list and the editor were confirmed, not a text field). This is an interpretation |
| In Collection Only Property FX_Code (picker, Tab, picker OK once) | `t3-16-InCollectionOnly-Property-picker-open.png`, `t3-17-…-FX_Code-before-OK.png`, `t3-18-parameters-after-Property-picker-OK.png`; `harness-audit-T3.md` rows 71–78 | Property `FX_Code` | — |
| Parameters dialog OK once | `t3-18`; `harness-audit-T3.md` row 83 | Parameters string shown after OK | No Tab directly before this OK; the picker value was Tab-committed in the picker |
| Error Message mIsNotAValid chosen from the Designer's list, Tab, verify | `t4-02-error-message-dropdown-open.png`, `t4-03-error-message-mIsNotAValid-after-Tab.png`; `harness-audit-T4.md` rows 8–15 | Error Message `mIsNotAValid` (`mIsNotAValid` is an existing identifier in the list) | The list contains identifiers such as `mIsNotAValid%1` and `m%1IsNotAValid%2`; the exact literal was chosen. The runtime text was not inspected |
| Global Objects OK once | `t4-04-after-GlobalObjects-OK-save-state.png`; `harness-audit-T4.md` row 19 | Dialog closed with no prompt; Save became enabled | — |
| No message or string created; no No answer needed | `harness-audit-T1..T7` (no click on any No or Yes control; no string dialog recorded); record string-prompt counts | String prompts 0; No answers 0; strings created 0 | Based on the worker's observations and the controller's click list |
| Each committed with Tab before OK | Tab rows in `harness-audit-T2.md` (rows 21, 34), `harness-audit-T3.md` (rows 15, 33, 42, 52, 58, 75), `harness-audit-T4.md` (row 14) | 9 Tab commits covering name, Type, IDO, Target ×2, Value ×2, Property picker and Error Message | See the two OK limitations above |

Verdict: **AC-2 supported.** Every field value was verified visually or through accessibility before its OK. The stop rule for string prompts was never triggered.

### AC-3 — Readback matches; exactly one Designer Save; native response

| Requirement | Supporting evidence | Observed | Limitation |
| --- | --- | --- | --- |
| Pre-Save readback matches expected values | `t5-04-readback-FX_CustomerID-selected.png`; `harness-audit-T6.md` rows 16–27 (resume of T5, labelled T6 by its header) | Name, Version `User version`, Type `In Collection`, Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`, Error Message `mIsNotAValid`; Description and Edit in-line Script blank | The Parameters cell is clipped in the frame; the full text is from accessibility (`FX_HelloWorld01( PRO…` in the image). The ellipsis was not opened because the full value was established from accessibility |
| Readback closed with Cancel | `t5-05-after-readback-Cancel-state.png`; `harness-audit-T6.md` row 22 | Dialog closed; Designer dirty and unchanged | — |
| Exactly one Designer Save, native response | `t5-06-after-single-Save-response.png`; `harness-audit-T6.md` row 25 (single click on the toolbar Save) | Toast title `Save`, text **`Global object(s) were saved.`**, with a Close control; no alert or dialog | The toast is an in-page notification, not a prompt. It is a UI acknowledgement, not independent database durability |
| Clean state after Save | `t5-07-after-save-clean-state.png` | Toast cleared; Save, Regenerate Form and Undo disabled; FX_Orders selected; User scope; no dialog | Observed in the same session |
| Save retries | `harness-audit-T6.md` (one Save click; no second) | 0 retries | — |

Verdict: **AC-3 supported** for the in-session readback and one Save. Whether the stored definition persists is answered only weakly by AC-4 (section 3, AC-4).

### AC-4 — Clean Form closed once and reopened once; reopened readback matches AC-3; no component or other validator changed

| Requirement | Supporting evidence | Observed | Limitation |
| --- | --- | --- | --- |
| Clean pre-close state | `t6-01-preclose-clean-state.png`; `harness-audit-T7.md` rows 3–6 | FX_Orders; User; Save and Undo disabled; no dialog | — |
| Closed once through the Form-tab control | `t6-02-after-Form-tab-close.png`; `harness-audit-T7.md` row 7 (single click on `closable FX_Orders`) | Form tab gone; no discard or unsaved-change prompt | — |
| Reopened once through the Form menu recent-forms entry | `t6-04-form-menu-open-recent-forms.png`; `t6-05-reopened-FX_Orders-clean-state.png`; `harness-audit-T7.md` row 17 | Recent-forms entry `FX_Orders` clicked once; Form reopened in User scope with Save and Undo disabled | Identity read from heading, tab and footer; the URL gained `MGForm=FX_Orders` |
| Reopened readback matches AC-3 | `t6-06-reopened-readback-FX_CustomerID-selected.png`; `harness-audit-T7.md` rows 30–33 | Same values as the pre-Save readback on every property (Parameters verbatim from accessibility) | A weak persistence boundary: an ordinary close and reopen in the same browser session. It is not independent database durability |
| Cancel after reopened readback | `t6-07-after-readback-Cancel-final-state.png`; `harness-audit-T7.md` row 35 | Dialog closed; Designer clean | — |
| No FX_Orders component changed | Harness action lists (no click on any component row, property, or Delete/Regenerate control in T1–T6); `harness-audit-T7.md` | No component edit recorded | Based on the action list; no component-level diff was taken |
| No other validator changed | Harness action lists (only `FX_CustomerID` selected in every readback) | No other validator selected or edited | Not verified against a pre-state of the full Validators list |

Verdict: **AC-4 supported, with the stated limits.** The reopened readback is Designer UI evidence only.

## 4. Non-browser exceptions and tool flags (distinguished from browser mutation failures)

| Item | Where recorded | What it was | Browser mutation failure? |
| --- | --- | --- | --- |
| T3 oversized inspection-result error | `harness-audit-T3.md` error entry `#23` (the record numbers it as call 19 of T3); record T4 reconciliation | A read-only `browser_find` whose output (67,222 characters) exceeded the tool's output limit. The output was saved to a tool-results file outside the repository. The worker did not read that file | **No.** It did not click, type, press a key or change Mongoose state. Its effect was checked by later finds and screenshots (`t3-09`, `t3-10`, `t3-12`–`t3-19`) |
| T5 failed documentation Edit, then successful correction | `harness-audit-T6.md` row 34 (failed) and row 36 (succeeded); record T6 reconciliation | An `Edit` on the EXP-087 record failed with "String to replace not found" because the anchor text was not unique. The retry with a different anchor succeeded | **No.** It was a file-edit error. No browser action was repeated and no Mongoose state changed |
| T5 pre-pause stop | `harness-audit-T5.md` errors list: "Terminal success: You've hit your session limit · resets 5pm" | The usage-limit pause after the two pre-pause reads (tab list and snapshot). The coordinator's bounded instruction recorded it | **No.** It is the expected usage-limit pause |
| "Prohibited-tool hits" on `browser_type` | `harness-audit-T2.md` (`browser_type` 1, prohibited-tool hits 1); `harness-audit-T3.md` (`browser_type` 2, hits 2) | The harness flags `browser_type` as a flagged tool. The EXP-087 brief denies evaluate and run-code tools; it does not deny typing into rendered fields, and it requires typing for the Name and the Target fields. Each typed value was a required field value, and `exact mismatches = 0` in every audit | **No.** The flag classifies the tool; the audit notes that "flagged tools may be allowed by other briefs". The worker treats the three typed entries as brief-required field entries, and flags them here for the coordinator's review |

## 5. AC-5 — Cumulative audit, counting reconciliation, and Cancel reconciliation

### 5.1 Per-task browser-call totals: worker record versus harness audit

| Task | Worker-reported (record) | Harness audit (controller) | Difference and cause |
| --- | --- | --- | --- |
| T1 | 19 (6 actions + 13 reads implied) | 6 actions + 13 reads = **19** (`harness-audit-T1.md`) | None |
| T2 | 35 | 14 actions + 21 reads = **35** (`harness-audit-T2.md`) | None |
| T3 | 76 | 28 actions + 49 reads = **77** (`harness-audit-T3.md`) | **+1.** The record omitted a read-only `browser_find` made immediately after the first click on the IDO combobox (harness row 8). The find returned the Form tab text. The record's find count (27) should be 28 |
| T4 | 18 | 5 actions + 13 reads = **18** (`harness-audit-T4.md`) | None |
| T5 pre-pause | 2 | 0 actions + 2 reads = **2** (`harness-audit-T5.md`) | None |
| T5 resume | 27 | 8 actions + 19 reads = **27** (`harness-audit-T6.md`, labelled T6 by its header) | None |
| T6 | 31 | 10 actions + 22 reads = **32** (`harness-audit-T7.md`, labelled T7 by its header) | **+1.** The record omitted a read-only `browser_find` between the reopen and the depth-4 snapshot (harness row 11: the Form menu no-match check). The record's table has 31 rows, which is one short |
| **Total** | **208** (as reported in the record and the coordinator's brief) | **210** (71 actions + 139 reads) | **+2**, both read-only finds (T3 +1, T6 +1). No mutation, key press, or ref click differs |

Cross-checks that agree with the harness:
- Actions: T1 6, T2 14, T3 28, T4 5, T5 pre-pause 0, T5 resume 8, T6 10 = **71**.
- Reads: T1 13, T2 21, T3 49, T4 13, T5 pre-pause 2, T5 resume 19, T6 22 = **139**.
- 71 + 139 = **210**.
- The worker's tab selects (1 per task), tab lists, screenshots, ref clicks, Tab commits (9), typed entries (3) and Cancel clicks (3) all agree with the harness rows.

The record's per-task tables are **not rewritten**. The corrected totals are recorded here, and the record's status header points to this section.

### 5.2 Required audit items (harness-verified where a row exists)

| Item | Count | Harness evidence |
| --- | --- | --- |
| Validators created | **1** (`FX_CustomerID`) | Single name prompt OK (`harness-audit-T2.md` row 25) |
| Validators-list New uses | **1** | Single `+` click (`harness-audit-T2.md` row 17). Never repeated |
| Set Prop output New uses | **2** | `harness-audit-T3.md` rows 28 and 49 (both in the Edit Set Property Values list) |
| Set Prop outputs | **2** (`%1`=`FX_Label`; `%2`=`FX_Address`) | Two list rows; `harness-audit-T3.md` rows 46, 61 (output OKs) |
| Dialog OK clicks | **8** | Name prompt (T2, row 25) 1; Set Prop output OKs (T3, rows 46, 61) 2; Set Property Values list OK (row 64) 1; Edit Set Values OK (row 67) 1; property picker OK (row 78) 1; Parameters OK (row 83) 1; Global Objects OK (T4, row 19) 1 = **8** |
| Global Objects OK | **1** | `harness-audit-T4.md` row 19 |
| Tab commits | **9** | T2 rows 21, 34 (2); T3 rows 15, 33, 42, 52, 58, 75 (6); T4 row 14 (1) |
| String or message prompts | **0** | No string or message dialog in any audit; the Error Message list was used without creating anything |
| String or message prompt answers (No) | **0** | No click on a No control in any audit |
| Contingency corrections | **0** | No correction edit; `exact mismatches = 0` in every audit |
| Designer Saves | **1** | `harness-audit-T6.md` row 25 (single native Save click) |
| Save retries | **0** | One click only |
| Designer Form close | **1** | `harness-audit-T7.md` row 7 |
| Designer Form reopen | **1** | `harness-audit-T7.md` row 17 (recent-forms entry) |
| Component changes | **0** | No component-row, property, caption, layout or Delete/Regenerate click in any audit |
| Runtime actions | **0** | Tab 1 (Mongoose portal) was listed but never selected or interacted with; no runtime Form opened |
| Checkout actions | **0** | No Check Out, Check In or Undo Check Out control in any audit |
| Re-logins | **0** | No session-expiry modal or sign-in page; the session-expiry procedure was not invoked |
| Browser errors (inspection results) | **1** | T3 oversized find (section 4) |
| Failed browser mutations | **0** | None. Every mutating call in the audits returned `ok` |

### 5.3 Cancel reconciliation (independent of the worker's summaries)

| Task | Cancel clicks in the harness audit | Which dialog | Result |
| --- | --- | --- | --- |
| T1 | 1 (`harness-audit-T1.md` row 37) | Validators `Global Objects` (read-only layout) | No change |
| T2 | 0 | — | — |
| T3 | 0 | — | — |
| T4 | 0 | — | — |
| T5 resume | 1 (`harness-audit-T6.md` row 22) | Validators `Global Objects` (readback) | No change |
| T6 | 1 (`harness-audit-T7.md` row 35) | Validators `Global Objects` (reopened readback) | No change |
| **Total** | **3** | | |

OK-count reconciliation: 8 dialog OKs (section 5.2) + 3 Cancels = 11 confirmation or dismissal clicks on dialogs. Every OK followed a Tab-committed field or a verified selection (section 3, AC-2).

### 5.4 Harness and task-header accounting

- Harness audit files are named by the task header the controller received, not by the bounded instruction:
  - `harness-audit-T5.md` = the pre-pause T5 turn (2 reads, usage limit).
  - `harness-audit-T6.md` = the T5 **resume** (its bounded instruction was "resume T5"; its header said `task=T6`, task_message_id `2e72b715…`).
  - `harness-audit-T7.md` = the **T6** close/reopen (its bounded instruction was "T6"; its header said `task=T7`, task_message_id `5a73ed8e…`).
- No extra execution is claimed for any mismatch. The T5 resume and the T6 work each ran once. The T5 pre-pause turn was counted once (2 reads). The T6 record's two-row discrepancy is the read-only find described in 5.1.
- This T8 task header matches its instruction (`task=T8`, cycle 6).

## 6. Worker-written file inventory (cumulative)

Repository files written by the worker for EXP-087 (created or edited):

| Category | Files | Count |
| --- | --- | --- |
| EXP-087 record (created in T1; edited in T2–T8) | `experiments/EXP-087-hello-world-part-5-section-8-fx-customerid-in-collection-validator.md` | 1 |
| Evidence, T1 | `g0-00-designer-fresh-snapshot-start.yml`; `g0-01`–`g0-04` PNG | 5 |
| Evidence, T2 | `t2-00-designer-fresh-snapshot-start.yml`; `t2-01`–`t2-08` PNG | 9 |
| Evidence, T3 | `t3-00-start-fresh-snapshot.yml`; `t3-01`–`t3-19` PNG | 20 |
| Evidence, T4 | `t4-00-start-fresh-snapshot.yml`; `t4-01`–`t4-04` PNG | 5 |
| Evidence, T5 | `t5-00-start-fresh-snapshot.yml`; `t5-01-resume-fresh-snapshot.yml`; `t5-02`–`t5-07` PNG | 8 |
| Evidence, T6 | `t6-00-start-fresh-snapshot.yml`; `t6-03-after-close-fresh-snapshot.yml`; `t6-01`, `t6-02`, `t6-04`–`t6-07` PNG | 8 |
| Evidence, T8 | `T8-final-acceptance-report.md` (this report, new) | 1 |
| **Total worker-written repository files for EXP-087** | | **57** |

Notes on the inventory:
- The `.yml` evidence files are accessibility snapshots written by the browser tool at the worker's `filename` request. They are worker-requested evidence, not logs.
- The PNG files are screenshots written by the browser tool at the worker's request.
- The worker wrote no other repository file and did not run git. Git review is authoritative for repository confinement.
- Not worker-written and excluded from the count:
  - `evidence/EXP-087/harness-audit-T1.md` through `harness-audit-T7.md` (seven files): controller-generated audits (each begins "controller-generated audit (not worker prose)").
  - `evidence/playwright/` (the browser tool's own page snapshots and console logs for the session; not enumerated here).
  - The tool-results file for the T3 oversized output, saved under the worker's Claude session folder outside the repository.

## 7. Final state

- Browser: tab 0 Designer, FX_Orders selected, `ScopeType: User`, clean (Save, Regenerate Form, Undo and Redo disabled), no dialog or prompt open. Tab 1 (portal) was never selected.
- Validator: `FX_CustomerID` with the values in section 2.
- Mongoose: one validator created; no component, other validator, IDO, property class, runtime or checkout change observed. No regeneration, cache, FormSync or deployment action.
- T8 itself: no browser call, no Mongoose change.

## 8. Conditions, limitations and non-claims

1. **Totals.** The reconciled cumulative browser-call total is **210** (harness audits). The worker-reported 208 is superseded by 210 because two read-only finds (one in T3, one in T6) were omitted from the worker's tables. No mutation differs. If the operator's harness audit differs, the harness is authoritative.
2. **Persistence.** The close/reopen in T6 is a weak persistence boundary: an ordinary Form close and reopen in the same browser session, read back through the Designer UI. It is not independent database durability, not server-side verification, and not replay verification.
3. **Runtime.** No runtime validation was run. The runtime text of `mIsNotAValid` (whether it renders as "m is not a valid") is **unverified**. The worker chose the identifier from the Designer's own list, which shows the identifier exists in the catalogue; it does not show its text.
4. **Parameters text.** The full Parameters value is established from the accessibility tree. The screenshots clip the cell (`FX_HelloWorld01( PRO…`). The ellipsis was not opened.
5. **Set Prop confirmations.** The Set Property Values list OK and the Edit Set Values OK were not preceded by a Tab. Those dialogs contained no field in edit; this is an interpretation of the dialog states, supported by the worker's visual checks.
6. **Collection for Target.** Left at its default `primary collection` for both outputs; the brief did not require a change.
7. **Other validators.** The worker did not edit any other validator. This was not checked against a pre-state of the full Validators list.
8. **Component class and FX_Orders components.** Not started (Sections 9–10 are later experiments).
9. **Flagged tool (`browser_type`).** Three typed entries (name, %1, %2) are flagged by the harness. They were brief-required field entries; the controller notes flags may be allowed by other briefs. The coordinator should confirm the classification.
10. **Usage limit.** The pre-pause stop at the session limit is recorded; no action was repeated after it.

## 9. Knowledge state (all findings observed only)

| Finding | State |
| --- | --- |
| FX_CustomerID absent before creation; Edit > Validator dialog layout recorded | observed |
| One Validators-list New, name committed by Tab, prompt OK once; new row and default property sheet | observed |
| Type In Collection; IDO FX_HelloWorld01; outputs `%1`=`FX_Label`, `%2`=`FX_Address`; In Collection Only Property `FX_Code`; Error Message `mIsNotAValid` (list pick) | observed |
| Parameters string `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )` (accessibility) | observed |
| Pre-Save readback matches; Cancel leaves dirty state | observed |
| One native Save with `Global object(s) were saved.`; Designer clean afterwards | observed |
| One clean Form close and one recent-forms reopen; reopened readback matches | observed (weak persistence boundary) |
| Counts: 210 browser calls (harness), 208 (worker-reported; superseded) | observed (harness-reconciled) |
| Database durability of the saved validator | **unresolved** (not verifiable from Designer readbacks) |
| Runtime validation behaviour of FX_CustomerID; runtime text of `mIsNotAValid` | **unverified** |
| Replay verification of this procedure | **not claimed**; nothing is replay_verified |

## 10. Open questions for the coordinator

1. Confirm the reconciled total (210) against the operator's harness audit.
2. Confirm the classification of the `browser_type` flag (three brief-required entries).
3. Decide whether a later experiment should verify persistence beyond the Designer UI (for example a server-side or runtime check). That is outside EXP-087 and was not started.
