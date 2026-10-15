# EXP-096 T4 final acceptance report (documentation-only audit)

Date: 2026-10-15. Worker session 9d311245-d28e-4a47-a36d-fe3131ae8547. Task 7eef5cba-d6d1-4ecf-9a97-58e445fb573c (cycle 3, T4).

Scope of this step: documentation only. **Zero browser calls. Zero Mongoose changes.** No verification was performed beyond reading the existing record and controller audits. Findings are observed only. Same-session UI evidence only; no cross-session, database-durability or replay verification is claimed.

## 1. Sources reviewed in T4

- `experiments/EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md`: read in full (T1, T2 and T3 sections).
- `evidence/EXP-096/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`: read in full. These are controller-generated, not worker prose.
- Glob (non-browser, read-only) for `**/harness-audit-T*.md`: the result listed file names for other experiments (EXP-036 to EXP-044 and others). **No other experiment's audit was opened; no other experiment record was read.**
- The worker's own T1 to T3 reports and screenshots were not re-opened in T4. Screenshot evidence cited below was viewed in T1 to T3 and is cited from those records.

## 2. Controller audit validity

| Audit | Header (as printed) | Rows in table | Browser calls | Non-browser calls | Errors | Prohibited-tool hits | Flagged tools |
|---|---|---|---|---|---|---|---|
| T1 | 29 actions, 49 reads | 117 | 78 | 39 | 2 | 0 | none |
| T2 | 22 actions, 40 reads | 82 | 62 | 20 | 0 | 0 | none |
| T3 | 23 actions, 40 reads | 82 | 63 | 19 | 0 | 0 | none |

Definitions (worker inference, verified by the sums): the header "actions" count = element clicks attempted + coordinate clicks + splitter drags + key presses + tab selects. The header "reads" count = tab lists + explicit snapshots + screenshots + finds + waits. All three headers reconcile exactly under this definition (T1: 20+1+1+5+2 = 29; 9+25+14+1 = 49. T2: 20+2 = 22 (plus 0 drags, 0 coordinate clicks; 2 key presses), 1+3+17+19 = 40. T3: 16+5+1+1 = 23 with one tab select; 1+7+17+14+1 = 40).

Limits of the audits (not defects, but they bound what the audits prove):
- The audit column `ok` means the tool call was dispatched and returned natively. It does not show the outcome. Outcomes (prompt text, toasts, values) rest on the screenshots and accessibility readings recorded by the worker.
- The audit records only one key argument per call. It does not record `Read` offset/limit, the tab-select index, or any dialog result.
- "exact mismatches=0" applies only to matching the controller's exact-value list against attempted typed strings. It is not a rendered-state check. The controller marks the key `3` as informational, not an exact value.
- The audit has no entries for application-internal or network activity. Its absence of login-related calls is evidence that no re-login was attempted by a tool call, not proof that none occurred.

## 3. Reconciliation: worker counts against controller counts

Columns: worker-reported value (from the record) against the controller value recomputed from the audit table. "Match" means the same figure; "Match (classified)" means the same event counted under a different label.

| Category | Worker T1 | Controller T1 | Worker T2 | Controller T2 | Worker T3 | Controller T3 | Cumulative (worker) | Cumulative (controller) | Result |
|---|---|---|---|---|---|---|---|---|---|
| Tab list | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 3 | Match |
| Tab select | 2 (index 1, index 0) | 2 (rows 60, 112) | 0 | 0 | 1 (index 1) | 1 (row 2) | 3 | 3 | Match |
| Element clicks attempted | 20 (10 Designer + 10 Web Client, one timed out) | 20 (rows 17-109; row 86 timed out) | 20 | 20 | 16 | 16 | 56 | 56 | Match |
| Element clicks dispatched | 19 (Designer 10 + Web Client 9) | 19 ok | 20 | 20 | 16 | 16 | 55 | 55 | Match (see below) |
| Coordinate click (mouse_click_xy) | 1 (Designer chevron) | 1 (row 45) | 0 | 0 | 0 | 0 | 1 | 1 | Match |
| Clicks "dispatched" (worker headline) | 20 | 20 (19 element + 1 coordinate) | 20 | 20 | 16 | 16 | **56** | **56** | Match (classified) |
| Click timeouts (not dispatched) | 1 (row 86) | 1 (row 86) | 0 | 0 | 0 | 0 | 1 | 1 | Match |
| Splitter drags | 1 (row 91) | 1 (row 91) | 0 | 0 | 1 (row 26) | 1 (row 26) | 2 | 2 | Match |
| Key presses | 5 (ArrowRight, F4, Ctrl+A, "3", Tab) | 5 | 2 (Tab, Tab) | 2 | 5 (F4, Ctrl+A, "3", Tab, F4) | 5 | 12 | 12 | Match |
| Keyboard "typed" entries (Count "3") | 1 | 1 (key "3", row 100) | 0 | 0 | 1 | 1 (key "3", row 32) | 2 | 2 | Match (wording: key press, not a type tool) |
| Data Change drop-down opens | 0 (T1) | 0 | 2 | 2 (rows 9, 24) | 0 | 0 | 2 | 2 | Match |
| Data Change option picks | 0 | 0 | 2 | 2 (rows 13, 26) | 0 | 0 | 2 | 2 | Match |
| Data Change entries | 0 | 0 | 2 | 2 | 0 | 0 | 2 | 2 | Match |
| Data Change corrections | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Match |
| Designer Saves | 0 | 0 | 1 | 1 (row 35) | 0 | 0 | 1 | 1 | Match |
| Designer close/reopen pairs | 0 | 0 | 1 | 1 (close row 39; reopen rows 43-45) | 0 | 0 | 1 | 1 | Match |
| Designer Form-menu opens | 0 | 0 | 1 | 1 (row 43) | 0 | 0 | 1 | 1 | Match |
| Runtime opens | 1 | 1 (row 71) | 0 | 0 | 2 | 2 (rows 6, 62) | 3 | 3 | Match |
| Runtime closes | 2 (pre-open placeholder close + discard) | 2 (rows 62, 105) | 0 | 0 | 2 (discard + final) | 2 (rows 52, 77) | 4 | 4 | Match |
| Runtime F4 presses | 1 | 1 (row 78) | 0 | 0 | 2 | 2 (rows 12, 67) | 3 | 3 | Match |
| Runtime Filter in Place clicks | 1 | 1 (row 75) | 0 | 0 | 2 | 2 (rows 9, 64) | 3 | 3 | Match |
| Runtime row-number clicks (dispatched) | 2 (rows 82, 88) | 2 | 0 | 0 | 3 (rows 18, 23, 73) | 3 | 5 | 5 | Match |
| Runtime row-number click timeouts | 1 (row 86) | 1 | 0 | 0 | 0 | 0 | 1 | 1 | Match |
| Runtime Count cell clicks | 1 (row 96) | 1 | 0 | 0 | 1 (row 30) | 1 | 2 | 2 | Match |
| Runtime Count cell entries | 1 | 1 (rows 99-101) | 0 | 0 | 1 | 1 (rows 31-33) | 2 | 2 | Match |
| Runtime Item cell clicks | 0 | 0 | 0 | 0 | 1 (row 38) | 1 | 1 | 1 | Match |
| Runtime drop-down opens | 0 | 0 | 0 | 0 | 1 (row 43) | 1 | 1 | 1 | Match |
| Runtime drop-down choices | 0 | 0 | 0 | 0 | 1 (eggs, row 47) | 1 | 1 | 1 | Match |
| Prompts answered No | 1 (row 109) | 1 | 0 | 0 | 1 (row 56) | 1 | 2 | 2 | Match |
| Prompts answered Yes / Cancel | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | Match |
| Runtime Saves | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Match |
| Waits | 0 | 0 | 0 | 0 | 1 (2 s) | 1 (counted as a read, row 68) | 1 | 1 | Classification differs (see D4) |
| Explicit `browser_snapshot` | 9 | 9 | 3 | 3 | 7 | 7 | 19 | 19 | Match |
| `browser_find` | 14 | 14 | 19 | 19 | 14 | 14 | 47 | 47 | Match |
| Screenshots | 25 | 25 | 17 | 17 | 17 | 17 | 59 | 59 | Match |
| Errors (browser) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | Match |
| Errors (non-browser) | 1 (Read, record not yet created) | 1 (row 5) | 0 | 0 | 0 | 0 | 1 | 1 | Match |
| Re-logins | 0 | 0 (no login-related call) | 0 | 0 | 0 | 0 | 0 | 0 | Match (absence not provable from the audit alone) |
| Designer Edit-menu clicks | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Match |
| Delete Form Definition / Regenerate Form / Script Editor / unload / checkout / FormSync / deployment | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Match (no matching element name in any audit) |

Result: every functional and action count the record reports is reproduced by the controller audit. The two classification-only differences (D4 waits; the coordinate click folded into the "dispatched" headline) are explained in section 4. Nothing was forced to agree.

## 4. Discrepancies and how they are resolved

| ID | Discrepancy | Source | Resolution | Status |
|---|---|---|---|---|
| D1 | The T1 record states "Two heading-only Grep calls were made first" for EXP-092, and "Two heading-only Grep calls were run over each record" in the T1 deviations. The controller shows **one** Grep per record (rows 9 and 10), plus one Grep over the transcript (row 6). | Record T1 (lines 17, 186) vs audit T1 rows 6, 9, 10 | Controller count adopted. The record is corrected in place with a T4 note. | Corrected; see D2 for the consequence |
| D2 | The T1 record states that the heading-only searches "did not show body content". The search outputs recorded in the T1 worker transcript included non-heading body lines: from EXP-092, the sources bullet "Outcome (operator) sections only: EXP-089 (lines 1025-1068), EXP-090 ..., EXP-091 ..."; from EXP-095, the sources bullet "Outcome (operator) sections only: EXP-093 ... and EXP-094 ..." and a T6 note at line 943 that describes EXP-095's own Outcome-only deviation. The searches also exposed section titles of other sections. | Record T1 (line 186) vs the T1 search outputs | Stated as a T1 reading-scope deviation that is larger than the record described. It is outstanding (see section 5, AC-6, and section 7). | **Outstanding; requires an EXP-096-specific operator decision** |
| D3 | The controller headers ("actions", "reads") are not defined in the audit files. | Audit headers | Definition inferred and verified by exact sums (section 2). | Resolved by inference; operator may confirm the definition |
| D4 | The T3 record lists the 2-second wait under "actions". The controller counts `wait_for` as a read (row 68). | Record T3 vs audit T3 row 68 | Classification only. The cumulative reads (40 in T3) include the wait under the controller definition. No count value differs. | Resolved (classification) |
| D5 | The T1 "clicks dispatched 20" headline includes one coordinate click (`mouse_click_xy`, row 45) and 19 element clicks. The controller splits them. | Record T1 vs audit T1 | Reconciled: 19 element + 1 coordinate = 20 dispatched; 1 element click timed out. Cumulative dispatched = 56 = 55 element + 1 coordinate. | Resolved |
| D6 | The worker records the runtime Count entry as "typed" (once in T1, once in T3). No type tool was used; the audit shows the keyboard key `3` (key press). | Record vs audit key sequence | Reconciled as keyboard entry of "3" through a key press. Brief wording ("type 3") is satisfied by keyboard entry. | Resolved (wording) |
| D7 | The T3 cumulative line "Designer Form-menu opens or tab selects: 0 in T3, 1 cumulative (T2)" omits the T1 Designer tab selection (controller row 112, select index 0). Cumulative tab selects are 3 (T1 2, T3 1). | Record T3 vs audit T1 row 112 | Corrected in the T4 section below. The worker's per-task tab-select counts are correct; only the cumulative Designer line is incomplete. | Resolved (the record's cumulative line is incomplete) |
| D8 | The audit records only `file_path` for every `Read`. The worker's record gives offset/limit values for the transcript (offset 136, limit 14) and for EXP-092 (offset 586, limit 40) and EXP-095 (offset 956, limit 40). These parameters cannot be verified from the audit. | Record T1 vs audit T1 rows 8, 11, 12 | Not a discrepancy between sources; a limit of the audit. The worker's own tool inputs are the only record of the offsets. If no offset was given, the reads would have loaded whole records, which would widen D2. | Open limitation (cannot be resolved from the audits) |
| D9 | The T1 pre-open close (row 62) closed an add-mode placeholder that was already open at T1 start, not a Form the worker opened. It is counted as a runtime close. | Audit T1 row 62 | Counted as stated; it is a close of a pre-existing placeholder. Excluding it would give 3 runtime closes, which would not change any functional finding. | Resolved (counting convention) |
| D10 | The controller records `ok` for dispatch only, so outcome claims (prompt text, toast text, values, the absence of an error) rest on screenshots and accessibility text, not on the audit. | Audit limitation | Outcome claims in the record are tied to specific screenshot files (section 5). | Resolved by evidence linkage |

Additional note from the T4 check of the T1 search outputs: the controller counts reconcile with D1 only if the worker's "two Grep" language is read as "two search operations over the record family (one per record)". The record's text does not say that. It is corrected below.

## 5. Acceptance checks AC-1 to AC-5: decisive evidence, what each establishes, limitations

All paths are repo-relative under `evidence/EXP-096/`. Each screenshot was viewed in T1 to T3.

**AC-1 (sources reviewed; session usable; Designer User scope and clean; handler row; Data Change values before the change).**
- `gate-01-designer-form-tab-initial.png`: FX_Orders in the Form tab; status bar ScopeType User; Save and Undo greyed. Establishes identity, scope and clean state. Does not establish handler or Data Change values.
- `gate-03-event-handler-selected-properties.png`: handler row expanded: Sequence 0, Form Script Method, Disabled false, `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`. Establishes the handler definition. Does not establish compile success (not checked).
- `gate-02-event-handlers-row.png`: collapsed handler row. Supporting only.
- `gate-09-itemcombobox-events-after-chevron.png`: FX_ItemCombobox Data Change = FX_CalcOrderTotal.
- `gate-10-countedit-events.png`: FX_CountEdit Data Change = FX_CalcOrderTotal.
- `gate-11-itemgridcol-events.png` and `gate-12-countgridcol-events.png`: Data Change blank before the change.
- `gate-13-designer-clean-final-t1.png`: clean at T1 end.
- Limitations: source reads are controller-confirmed for the file paths; the Designer Edit-menu server-event state was not inspected (no Edit-menu click in any audit). No server-event error appears in any screenshot. Source reads' offsets are unverifiable (D8).
- Status: **met (observed)**.

**AC-2 (runtime control before any Designer change: baseline; unsaved grid Count 3 once; grid-row and detail-view values; discard by close + No with prompt text).**
- Baselines: `runtime-05-baseline-after-f4.png` (order 1 detail: FX001, 45 pound iron, 45.00, 2, 90.00); `runtime-06-baseline-order2.png` (order 2: FX002, cage free, 6.99, 1, 6.99).
- Layout before drag: `runtime-07-order1-selected-after-row-click.png` (narrow grid). After drag: `runtime-08-splitter-after-drag.png`.
- Entry: `runtime-09-count-cell-clicked.png` (edit mode, "2" selected); `runtime-10-control-after-grid-count-3-unsaved.png` (grid row Count 3, Cost 45.00, Order Total 90.00 visible; detail Count 3, Cost 45.00, Order Total 90.00; unsaved marker). No message visible.
- Prompt: `runtime-11-control-close-prompt.png`: `Do you want to save your changes to primary collection?` (Yes focused, No, Cancel), answered **No** (controller row 109). Result: `runtime-12-after-discard-no.png`.
- Establishes: no recalculation before the Designer change, as shown by the grid row and detail view; discard by No.
- Limitations: one run; the Count 3 entry was made by keyboard; the unsaved state is shown visually; the grid row Order Total is visible in `runtime-10`.
- Status: **met (observed)**.

**AC-3 (Data Change = FX_CalcOrderTotal read back on the grid columns; at most one correction per field; exactly one Designer Save with native response recorded; no error; after one close/reopen Save disabled and four Data Change values and handler row unchanged; Designer clean at end).**
- Set and commit: `t2-03-itemgridcol-data-change-after-select.png` (value chosen, truncated display `FX_CalcOrderTota`); `t2-04-itemgridcol-data-change-committed-tab.png` (FX_ItemGridCol = FX_CalcOrderTotal; Save enabled); `t2-06-countgridcol-data-change-committed-tab.png` (FX_CountGridCol = FX_CalcOrderTotal).
- Pre-save readback: `t2-07-readback-itemgridcol-presave.png`.
- Native Save response: `t2-08-designer-save-response.png`: toast `Save` / `Form [FX_Orders] and global object(s) were saved.`; no error. Controller: one Save click (row 35).
- Close/reopen: `t2-09-designer-form-closed-after-save.png` (no prompt); `t2-10-reopened-designer-initial.png` (Save greyed after reopen).
- Readbacks after reopen: `t2-11-reopened-event-handlers-row.png` and `t2-12-reopened-event-handler-params.png` (handler row unchanged); `t2-13-reopened-readback-itemcombobox.png` (FX_CalcOrderTotal); `t2-14-reopened-readback-countedit.png` (FX_CalcOrderTotal); `t2-15-reopened-readback-itemgridcol.png` and `t2-16-reopened-readback-countgridcol.png` (FX_CalcOrderTotal on both grid columns).
- Corrections: 0 (controller: two option picks, rows 13 and 26, each once).
- Limitations: the persistence is same-session UI readback after one close and reopen. It is not database durability, cross-session persistence or replay. The Designer's Edit-menu server-event state was not inspected. The toast's icon-greyed state is visible in the image.
- Status: **met (observed), same session**.

**AC-4 (runtime grid check: baseline after the discard; unsaved Count 3 then Item eggs once each; grid-row and detail-view values after each; discard by close + No; both orders match baseline after reopen).**
- Baseline after the control discard and after reopen: `t3-04-baseline-order1-populated.png` (detail order 1 = baseline); `t3-05-baseline-order2.png` (order 2 = baseline).
- Splitter: `t3-06-baseline-order1-rechecked-before-layout.png` (narrow) and `t3-07-splitter-after-drag-t3.png` (widened; this is the second and last permitted drag).
- Count 3 unsaved: `t3-08-control-grid-count-3-unsaved-result.png` (grid row Count 3, Cost 45.00, Order Total 135.00; detail Order Total 135.00). Accessibility row confirms `1 FX001 ... 45.00 3 135.00`.
- Item eggs unsaved: `t3-09-item-cell-clicked.png` (cell in edit mode); `t3-10-item-dropdown-open.png` (options dumbbell, eggs, guitar); `t3-11-after-item-eggs-unsaved.png` (grid row Item eggs, cage free, 6.99, Count 3, Order Total 20.97; detail Order Total 20.97). Accessibility row confirms `... cage free 6.99 3 20.97`.
- Prompt: `t3-12-discard-save-prompt.png` (same text as T1; answered **No**, controller row 56).
- After discard: `t3-13-after-discard-no.png`.
- Reopen: `t3-14-reopen-fip-blank-criteria.png`; `t3-15-reopened-baseline-order1-layout.png` (order 1 = baseline, grid narrow again); `t3-16-reopened-order2.png` (order 2 = baseline).
- Final close: `t3-17-final-runtime-closed-clean.png` (Explorer, no dialog).
- Limitations: the Order Total on the grid row was visible in `t3-08` and `t3-11` only after the horizontal scroll that followed Tab; the Item editor was left in edit mode at the discard (no Tab after the drop-down choice); one run. F4 showed a blank redraw in the first screenshot of T3 open 1 (`t3-03`), confirmed by accessibility readings, not a second press.
- Status: **met (observed)**.

**AC-5 (no other Designer change, no Script Editor, no handler edit, no change to FX_ItemCombobox or FX_CountEdit, no grid column layout change, at most one splitter drag per runtime open, no runtime Save, no unload, no checkout action, no Yes answer).**
- Controller audits (all three): no Script Editor, handler "+", handler delete, Delete Form Definition, Regenerate Form, unload, checkout, FormSync or deployment calls; no Yes answers; no runtime Save; no Edit-menu click.
- Designer element calls were limited to the Data Change trigger and option calls on FX_ItemGridCol and FX_CountGridCol (four element calls), the commit keys (two Tabs), one Save, one Form-tab close, one Form-menu/recent-forms pair, and view-only expansions and selections (component rows, handler row, tabs, expanders).
- Splitter drags: one per runtime open where drags occurred (T1 open 1, T3 open 1). The T3 reopen had none. Total 2 (limit reached).
- Limitations: the T1 ArrowRight key press moved focus into an Events value cell; the value was unchanged in `gate-09` (FX_ItemCombobox still FX_CalcOrderTotal). The change of the Designer tree expansion state is a view-state change, not a property change.
- Status: **met (observed)**.

## 6. AC-6 comparison: pre-change control against post-change result

| Surface (same unsaved grid Count 2 to 3 on order 1) | T1 control (before the Designer change) | T3 (after the grid-column Data Change was set and saved) | Evidence |
|---|---|---|---|
| Grid row Count | 3 | 3 | `runtime-10`; `t3-08` |
| Grid row Cost | 45.00 | 45.00 | `runtime-10`; `t3-08` |
| Grid row Order Total | **90.00** | **135.00** | `runtime-10`; `t3-08` (accessibility `... 3 135.00`) |
| Detail Count / Cost | 3 / 45.00 | 3 / 45.00 | `runtime-10`; `t3-08` |
| Detail Order Total | **90.00** | **135.00** | `runtime-10`; `t3-08` |
| Message | none visible | none visible | `runtime-10`; `t3-08` |

Item change (T3 only; no T1 counterpart): grid row Item dumbbell to eggs gave Cost 6.99 and Order Total 20.97 in both views (`t3-11`). This matches the expected 3 x 6.99.

Tutorial expectations: Count 3 expected 135.00 (T1 did not match; T3 matched). Item eggs expected Cost 6.99 and Order Total 20.97 (T3 matched).

**Causal status (required statement).** The difference in Order Total between the T1 control and the T3 post-change result is observed in the before/after sequence. It is **not independently causally isolated**. The only intended intervening change was the grid-column Data Change (FX_CalcOrderTotal on FX_ItemGridCol and FX_CountGridCol) followed by one Designer Save and one Designer close/reopen. The apparent effect of the grid-column Data Change wiring is therefore an inference from sequence. Alternative explanations that this run did not exclude include: (a) the Designer Save or the reopen of the form definition changed runtime behavior independently of the grid-column wiring (for example, by reloading the form script or metadata); (b) the runtime session state differed between the two opens. The consistency of the result with the EXP-095 detail-view behavior (EXP-095 Outcome: Count 2 to 3 gave 135.00 when the handler was on FX_CountEdit) supports the wiring explanation, but EXP-095 is a carried-forward observation, not re-tested here. No further control (for example, clearing the grid-column Data Change and repeating the grid edit) was run, because T4 is documentation-only.

**Persistence status (required statement).** The Designer persistence result is same-session UI readback after one close and reopen (T2). It is not database durability, cross-session persistence or replay verification.

**Server-event condition (required statement).** The Designer Edit-menu server-event condition was not directly inspected in any task. No server-event error text appears in any screenshot from T1 to T3, and no session-expiry modal or sign-in page was observed. The absence of the error in screenshots is an observed absence, not a check of the Edit menu.

## 7. Outstanding deviation (requires an EXP-096-specific decision)

**T1 reading-scope deviation: heading-only searches over EXP-092 and EXP-095 before their Outcome-only reads.** The brief allowed reading only the final Outcome sections of those two records. T1 ran one heading-only search per record (controller rows 9 and 10), before the Outcome-only Read (rows 11 and 12). The search outputs returned some body lines (D2), so the search was broader than heading-only. The record's earlier statement that these searches did not show body content is incorrect and is corrected below.

This deviation is **not waived** by this audit. It must not be waived by transferring the EXP-095 operator waiver. The EXP-095 Outcome waived EXP-095's own deviations (its own three heading-only searches and a stale-ref click), not EXP-096's. The operator must make an explicit EXP-096-specific decision.

Separate, related limitation (D8): the offset and limit of the Outcome-only reads cannot be verified from the audit.

## 8. Cumulative browser action audit (exact counts)

Browser action counts are kept separate from read-only tool calls. Actions change or attempt to change the UI state. Reads do not.

| Category | T1 | T2 | T3 | Cumulative |
|---|---|---|---|---|
| **Browser actions** (header definition) | 29 | 22 | 23 | **74** |
| Element clicks attempted | 20 | 20 | 16 | 56 (55 dispatched, 1 timed out) |
| Coordinate click | 1 | 0 | 0 | 1 |
| Splitter drags | 1 | 0 | 1 | 2 |
| Key presses | 5 | 2 | 5 | 12 |
| Tab selects | 2 | 0 | 1 | 3 |
| **Read-only browser calls** (header definition) | 49 | 40 | 40 | **129** |
| Tab lists | 1 | 1 | 1 | 3 |
| Explicit snapshots | 9 | 3 | 7 | 19 |
| Screenshots | 25 | 17 | 17 | 59 |
| `browser_find` | 14 | 19 | 14 | 47 |
| Waits | 0 | 0 | 1 | 1 |
| **Browser calls total** | 78 | 62 | 63 | **203** |
| **Non-browser calls** (Read, Grep, Glob, Write, Edit) | 39 | 20 | 19 | **78** |
| All tool calls in the three audits | 117 | 82 | 82 | **281** |

Sub-counts (cumulative):
- Clicks dispatched: 56 total = Designer 31 (T1 11 including 1 coordinate; T2 20) + Web Client 25 (T1 9; T3 16). Click timeouts: 1 (T1, Web Client, runtime row-number cell). Total click attempts: 57.
- Designer Data Change entries: 2 (both on grid columns; each one drop-down open and one choice). Corrections: 0. Commit Tabs: 2.
- Designer Saves: 1 (T2; one native toolbar click). Designer close/reopen pairs: 1 (limit 2). Designer Form-tab closes: 1. Designer Form-menu opens: 1. Designer tab selects: 1 (T1 Designer tab select at controller row 112, which the record's cumulative line omitted (D7)).
- Runtime opens: 3 (T1 1; T3 2). Runtime closes: 4 (T1 pre-open placeholder close and discard close; T3 discard close and final close; D9). F4 presses: 3 (T1 1; T3 2). Filter in Place clicks: 3. Splitter drags: 2 (one per runtime open where used). Row-number clicks dispatched: 5 (plus 1 timed out). Count cell clicks: 2. Count cell entries (Ctrl+A, "3", Tab): 2. Item cell clicks: 1. Drop-down opens: 1. Drop-down choices: 1 (eggs). Runtime Saves: 0.
- Prompts answered No: 2 (T1 row 109; T3 row 56). Both: `Do you want to save your changes to primary collection?` Prompts answered Yes: 0. Cancel: 0.
- Errors: 1 browser (T1 click timeout), 1 non-browser (T1 Read of the record before it existed).
- Re-logins: 0 (no session expiry observed; no login call in any audit).

## 9. Worker-written file inventory and confinement

Files written by the worker (repo-relative):
- `experiments/EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md`: created in T1 (Write, controller row 116); edited T1 (Edit, row 117), T2 (three Edits, rows 80-82), T3 (three Edits, rows 80-82), and T4 (this task: status line, T1 correction notes, T4 section).
- `evidence/EXP-096/gate-01-designer-form-tab-initial.png` through `gate-13-designer-clean-final-t1.png`: 13 files.
- `evidence/EXP-096/runtime-01-webclient-after-close-initial.png` through `runtime-12-after-discard-no.png`: 12 files.
- `evidence/EXP-096/t2-00-designer-start-clean-countgridcol-selected.png` through `t2-16-reopened-readback-countgridcol.png`: 17 files.
- `evidence/EXP-096/t3-01-runtime-opened-from-recent.png` through `t3-17-final-runtime-closed-clean.png`: 17 files.
- `evidence/EXP-096/T4-final-acceptance-report.md`: created in T4 (this file).

Total worker-authored files: 1 record + 59 screenshots + 1 report = 61 files (the record is one file, edited many times).

Not worker-authored:
- `evidence/EXP-096/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`: controller-generated.
- `evidence/playwright/page-*.yml` and `evidence/playwright/console-*.log`: written automatically by the browser tool on actions and events. These are **outside the EXP-096 path** (`evidence/playwright/`, not `evidence/EXP-096/`). The worker did not author them directly, but they are repo files produced during the work. Their number was not recorded by the worker and is not listed in the controller audits. The harness/operator should decide whether these tool-written files count as in-scope output. This is an open confinement question, not a finding.

Confinement judgment: from the worker and controller inventories, every worker-authored write is inside the EXP-096 paths (the record and `evidence/EXP-096/`). The only exception is the automatically written browser-tool artifacts above. The controller audits show no `Write` or `Edit` to any other path. Operator git review is authoritative at outcome.

## 10. Final state (as at end of T3; no browser calls in T4)

- Web Client (tab 1): Explorer only. No runtime Form open. No dialog. No unsaved runtime change (the final close showed no prompt; `t3-17`).
- Designer (tab 0): FX_Orders open, User scope, clean at T2 end (Save disabled; `t2-16`, the Save find at T2 end). The Designer was not selected, clicked or saved in T3, and not inspected in T4. Its state is inferred from the T2 end state and the absence of any Designer call in T3. Its component tree had FX_CountGridCol selected at T2 end.
- No unsaved change, no open prompt, no runtime Save, no unload, no checkout action.

## 11. Recommended disposition

**Recommended: ACCEPTED AS OBSERVED, conditional.** The functional evidence supports AC-1 to AC-5 as observed in a single same-session run, and the action audit reconciles with the controller audits (section 3). The recommendation is conditional on all of the following:

1. **Operator decision on the T1 reading-scope deviation (section 7).** An explicit EXP-096-specific decision is required. It must not be taken from the EXP-092 or EXP-095 waivers. Until that decision is made, the record must not be treated as fully within the brief's reading boundary.
2. **Correction of the record's statements on the searches (D1, D2).** This is done in the record (corrections below). The original text is preserved beside the correction.
3. **Operator ruling on tool-written evidence (section 9).** Whether `evidence/playwright/` artifacts count as in-scope output for repository confinement.

Conditions that the disposition must carry forward, which are not resolved by this audit:
- The grid-column Data Change effect is inferred from the before/after sequence, not causally isolated (section 6).
- Persistence is same-session UI readback, not database durability or replay verification.
- The Designer Edit-menu server-event condition was not directly inspected.
- The Outcome-only read offsets cannot be verified from the audits (D8).

This report does not declare the operator's final acceptance. That decision is the operator's.

## 12. Knowledge state (per finding)

- Pre-change control: an unsaved grid Count edit (2 to 3) does not recalculate Order Total (90.00) in the grid row or detail view. State: **observed** (single run).
- Post-change: the same edit recalculates Order Total to 135.00 in both views. State: **observed** (single run). Attribution to grid-column Data Change: **inferred from sequence; not causally isolated** (unresolved causal attribution).
- Unsaved Item change (dumbbell to eggs) updates Item Description, Cost (6.99) and Order Total (20.97) in both views. State: **observed**.
- Data Change set on FX_ItemGridCol and FX_CountGridCol through the Properties drop-down with a Tab commit, one Designer Save, one close/reopen, values unchanged after reopen. State: **observed** (same session).
- Discard by close and No restores both orders after reopen. State: **observed**.
- Widened grid layout does not persist across a runtime close and reopen. State: **observed** (two occurrences: T1 and T3).
- Save prompt text `Do you want to save your changes to primary collection?` with Yes default focus. State: **observed** (four screenshots: `runtime-11`, `t3-12`, and the two answered prompts).
- Replay, cross-session durability and database durability: **not established** by this run.

## 13. Documentation changes in T4

- `evidence/EXP-096/T4-final-acceptance-report.md` (created; this file).
- `experiments/EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md` (edited: status line updated; T1 search-count statements corrected in place with a T4 note; T4 section appended summarizing the reconciliation, the disposition and the open items).

No other file was written. No browser call was made. No Mongoose change was made.
