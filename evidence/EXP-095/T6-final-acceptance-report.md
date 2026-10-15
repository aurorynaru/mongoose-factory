# EXP-095 T6: final acceptance report (documentation-only; zero browser calls)

Date: 2026-10-15. Worker session 6b03803b-35a8-4bda-a4a0-d561ba556c64. Task T6 of run R-20261015-111043-84uH.

Scope of this task: review of the EXP-095 experiment record, the worker evidence captured in T1 to T5, the controller-generated audit files `harness-audit-T1.md` to `harness-audit-T5.md` in this directory, and the worker-written file inventories. No browser tool, no Mongoose change, no compile inspection, no runtime action, and no Designer or Web Client interaction was performed in T6. Earlier screenshots were viewed in their own tasks (T1 to T5); they were not re-opened in T6, so every visual statement below refers to the T1 to T5 viewings recorded in the experiment record.

## 1. Recommendation

**ACCEPTED AS OBSERVED, with the qualifications in section 9.** Every acceptance check (AC-1 to AC-5) has direct evidence in this directory, and no check failed. The qualifications limit what may be claimed; they do not contradict the observations. BLOCKED was considered and rejected: no required step is missing, no prohibited action is evidenced, and the one procedural deviation (the T3 stale-ref click) had no observed effect and is documented in section 6.

What this acceptance does **not** establish: that the script compiles (the Compile Result Errors tab was never opened); that the handler alone caused the recalculation; cross-session or database-level durability; or a repeatable recalculation procedure.

## 2. Controller audit reconciliation (exact counts)

The five controller files give, per task, an "actions" and a "reads" total, and a per-row table of every attempted tool call with its native result. The files do not define "actions" or "reads". I inferred the definitions from the rows: **actions** = tab select, element clicks (including coordinate clicks), wheel, key presses and typed entries; **reads** = tab list, snapshots, finds and screenshot calls. With those definitions, every header total reproduces exactly from its own row table (checked for all five tasks), so the inferred definitions are consistent with the audit. This is an inference, not a documented definition.

| Task | Controller header (actions / reads / flagged / errors) | Rows: select + clicks + coord + wheel + keys + type | Rows: list + snapshot + find + screenshot |
|---|---|---|---|
| T1 | 29 / 55 / 2 (browser_type) / 1 (non-browser Read) | 1 + 21 + 4 + 1 + 0 + 2 = 29 | 1 + 2 + 28 + 24 = 55 |
| T2 | 11 / 21 / 0 / 0 | 1 + 8 + 0 + 0 + 2 + 0 = 11 | 1 + 1 + 12 + 7 = 21 |
| T3 | 12 / 22 / 0 / 1 (browser click, failed) | 1 + 10 + 1 + 0 + 0 + 0 = 12 | 1 + 2 + 10 + 9 = 22 |
| T4 | 7 / 15 / 0 / 0 | 1 + 5 + 0 + 0 + 1 + 0 = 7 | 1 + 3 + 4 + 7 = 15 |
| T5 | 15 / 22 / 1 (browser_type) / 0 | 1 + 10 + 0 + 0 + 3 + 1 = 15 | 1 + 5 + 8 + 8 = 22 |

"Exact mismatches = 0" appears in all five headers. "Key string (none)" and "Spelled strings: []" appear in all five; no string was typed that the audit could not account for.

### 2.1 Cumulative totals (T1 to T5)

| Category | T1 | T2 | T3 | T4 | T5 | Total |
|---|---|---|---|---|---|---|
| Tab list (read) | 1 | 1 | 1 | 1 | 1 | 5 |
| Tab select (action) | 1 | 1 | 1 | 1 | 1 | 5 |
| Snapshot calls (read) | 2 | 1 | 2 | 3 | 5 | 13 |
| Find calls (read) | 28 | 12 | 10 | 4 | 8 | 62 |
| Screenshot calls (read) | 24 | 7 | 9 | 7 | 8 | 55 |
| Element clicks attempted (action) | 21 | 8 | 10 | 5 | 10 | 54 |
| — of which failed (no effect) | 0 | 0 | 1 | 0 | 0 | 1 |
| Coordinate clicks (action) | 4 | 0 | 1 | 0 | 0 | 5 |
| Mouse wheel (action) | 1 | 0 | 0 | 0 | 0 | 1 |
| Key presses (action) | 0 | 2 (Tab) | 0 | 1 (F4) | 3 (Ctrl+A, Tab, F4) | 6 |
| Typed entries (action) | 2 | 0 | 0 | 0 | 1 | 3 |
| **Interactive actions** | **29** | **11** | **12** | **7** | **15** | **74** |
| **Read-only inspection calls** | **55** | **21** | **22** | **15** | **22** | **135** |

Interactive actions of 74 = 54 element clicks attempted (53 succeeded, 1 failed) + 5 coordinate clicks + 1 wheel + 6 key presses + 3 typed entries + 5 tab selects. Read-only inspection calls of 135 = 5 tab lists + 13 snapshots + 62 finds + 55 screenshot calls.

**Screenshot writes versus distinct filenames:** 55 screenshot writes produced 50 distinct PNG filenames, so 5 earlier writes were overwritten (section 5). In addition, 9 snapshot files were written by the snapshot tool into `evidence/EXP-095/` (T3 1, T4 3, T5 5), so the distinct evidence files written through the browser tools number 59 (50 PNG and 9 Markdown snapshots).

### 2.2 Designer and runtime counts (exact, controller-derived)

| Item | Count | Controller rows (task, row) |
|---|---|---|
| Script Editor opens (pencil click) | 1 | T1 row 61 |
| Script Editor closed by Cancel | 1 | T1 row 69 |
| Script Editor OK / Run / Download / Help / text clicks | 0 / 0 / 0 / 0 / 0 | none in any task |
| Handler New (`+` in the Event Handlers grid) | 1 | T1 row 77 |
| Handler name, Type and Parameters corrections | 0 | each entry appears once (T1 rows 86/87, 102/106, 114/116, 118) |
| Data Change entries (drop-down choice) | 2 (FX_ItemCombobox, FX_CountEdit) | T2 rows 13/15 and 27/29; each followed by one Tab commit (T2 rows 19, 30) |
| Data Change corrections | 0 | none |
| Designer Save clicks | 1 | T2 row 35 |
| Designer Save retries | 0 | none |
| Designer close (Form-tab control) | 1 successful | T3 row 9 (row 6 failed, see section 6) |
| Designer reopen (recent-forms) | 1 | T3 row 17 |
| Designer close/reopen pairs | 1 (limit 2) | T3 |
| Designer prompts seen | 0 | T3 row 10 screenshot shows no dialog |
| Designer tab selected in T4 and T5 | 0 | tab list and select show tab 1 used; snapshot URLs in T4 and T5 are the portal page |
| Runtime FX_Orders opens (recent-forms) | 2 | T4 row 12; T5 row 34 |
| Runtime FX_Orders closes | 2 (1 discard with No, 1 clean) | T5 rows 24 and 49 |
| Runtime Filter in Place toggles | 2 | T4 row 16; T5 row 36 |
| Runtime F4 presses | 2 | T4 row 19; T5 row 37 |
| Runtime row-number selections | 3 | T4 rows 24 and 29; T5 row 43 |
| Runtime Count entries (value 3) | 1 | T5 row 9 (typed entry, authorised) |
| Runtime Item selections (eggs) | 1 | T5 row 18 (drop-down opened at row 16) |
| Runtime Saves | 0 | no Save click at runtime |
| Prompts answered No | 1 (text in section 4) | T5 row 28 |
| Prompts answered Yes | 0 | none |
| Re-logins | 0 | no sign-in action in any row; no session-expiry text seen |
| Unloads, checkout actions, FormSync, deployment | 0 | none in any row |
| Navigate, JavaScript evaluate, console, network calls | 0 | none in any row |
| Record writes (non-browser) | 9 (1 Write in T1, 2 Edit in each of T2 to T5) | T1 row 124; T2 rows 40/41; T3 rows 45/46; T4 rows 33/34; T5 rows 52/53 |

## 3. Typed entries (reconciliation of the browser_type flags)

The controller flags `browser_type` in T1 (2) and T5 (1). The flags are not violations; the brief authorised each entry:

- **T1 row 87**: `FX_CalcOrderTotal` typed into the `Name:` combobox of the New Event Handler dialog. The brief allows typing the event name once if it is not offered in the list. The drop-down (T1 row 82, `new-handler-name-dropdown-open.png`) showed standard `Std*` entries and no visible FX_ entry, so the name was typed once. The list may be virtualised, so the absence is not proof that the name is not offered.
- **T1 row 118**: `P(FX_Count),P(FX_ItmsCost)` entered in the Parameters text field. The brief requires this entry.
- **T5 row 9**: `3` entered in the runtime Count field, once, after Ctrl+A selected the field content (row 8). The brief requires one entry of 3. The entry was made with the typed-entry tool, which fills the field rather than sending one keystroke; the value read back as 3.

No typed text went into the Script Editor. The controller shows no type action while the editor was open (T1 rows 61 to 69), and the Compile Result step used only a view click and Cancel. The brief's prohibition ("never type into the editor text") is therefore not contradicted. T2 and T3 and T4 had no typed entries; Data Change was set from the drop-down list both times, as instructed.

## 4. Acceptance checks

### AC-1: sources, session, Designer gate, Compile Result (met)

- **Sources reviewed before browser interaction:** the controller order shows AGENTS.md, the transcript (via Grep and Read), the two recipes, the saved form script, the EXP-093 Outcome section and the EXP-094 Outcome section, all before the first browser call (T1 row 15). The read-scope caveat for the two records is in section 9, item 8.
- **Session usable:** T1 snapshot (row 17) with no sign-in or expiry text.
- **Designer in User scope and clean:** status bar `ScopeType: User` and Save/Undo `[disabled]`, in `gate-designer-form-clean.png` (visual) and the T1 snapshot (accessibility).
- **Script Language Visual Basic:** Form properties, `gate-designer-form-clean.png` (visual).
- **No handler rows:** `gate-event-handlers-grid-before.png` (visual: empty grid).
- **Data Change blank on both components before the change:** `gate-itemcombobox-events-before.png` and `gate-countedit-events-before.png` (visual: Primary, Data Change, Lose Focus, Gain Focus blank; Drag and Drop 0 events).
- **Compile Result recorded verbatim:** Output tab selected, **Output area empty** (`compile-result-panel-expanded.png`, visual). The Errors tab was **not opened**, so compile errors, if any, were not inspected. The Script Editor content still contained `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)` at line 14 (`script-editor-opened-before-compile-result.png`, visual).
- **Editor left with Cancel, Designer still clean:** T1 row 69 (Cancel, once); Save `[disabled]` afterwards (`after-script-editor-cancel-designer-state.png`, visual; accessibility find at T1 row 72).

### AC-2: one handler, two Data Change values, one Designer Save (met)

- **Handler created once:** New clicked once (T1 row 77). Event name `FX_CalcOrderTotal` (typed once, row 87); Response Type `Form Script Method` (selected once from the list, rows 102/106); Parameters method `CalcOrderTotal` (selected once, rows 114/116); parameters `P(FX_Count),P(FX_ItmsCost)` (typed once, row 118); dialogs confirmed with OK (rows 91 and 121). Corrections: 0.
- **Handler row read back (T1):** group `FX_CalcOrderTotal`; Sequence 0; Response Type `Form Script Method`; Disabled `false`; Response Parameters `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))` (`handler-row-readback-after-parameters-ok.png`, visual). Parameters dialog before OK: `parameters-dialog-before-ok.png` (visual: filled dialog, other fields default). The blank pre-fill state was overwritten (section 5).
- **Data Change = `FX_CalcOrderTotal` on FX_ItemCombobox:** chosen from the drop-down (row 15, first list entry), Tab commit (row 19). Readback: accessibility combobox value `FX_CalcOrderTotal`; visual `t2-itemcombobox-data-change-readback.png` (post-Tab image shows the full value; the pre-Tab image showed `FX_CalcOrderTotal` truncated as `FX_CalcOrderTota`, and that image was overwritten).
- **Data Change = `FX_CalcOrderTotal` on FX_CountEdit:** chosen from the drop-down (row 29), Tab commit (row 30). Readback `FX_CalcOrderTotal` (`t2-countedit-data-change-readback.png`, visual; accessibility confirmed).
- **Exactly one Designer Save:** one click (T2 row 35). Native response, verbatim, toast titled `Save`: **`Form [FX_Orders] and global object(s) were saved.`** (`designer-save-response.png`, visual). No error, dialog or prompt. Immediately after: Save and Undo `[disabled]` (accessibility, T2 row 37).
- **At most one correction per field:** satisfied (0 corrections in T1 and T2).

### AC-3: same-session close/reopen readbacks (met, same session only)

- **Close:** one successful Form-tab close (T3 row 9). No prompt appeared (`t3-after-close-prompt-check.png`, visual: blank workspace, no dialog). One intercepted click preceded it (section 6).
- **Reopen:** recent-forms `FX_Orders` (T3 row 17). Save and Undo `[disabled]` (`t3-reopened-designer-readback.png`, visual; find at T3 row 44 for the final state).
- **Handler row after reopen:** group expanded with one click (T3 row 27); row Sequence 0, Form Script Method, Disabled false, `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))` (`t3-reopened-event-handler-row.png`, visual, expanded image).
- **Data Change after reopen:** FX_ItemCombobox `FX_CalcOrderTotal` (`t3-reopened-itemcombobox-data-change.png`, visual); FX_CountEdit `FX_CalcOrderTotal` (`t3-reopened-countedit-data-change.png`, visual). Primary, Lose Focus and Gain Focus blank on both; Drag and Drop 0 events.
- **Designer clean at the end of T3:** Save and Undo `[disabled]` (T3 row 44 find). **No Designer observation exists after T3:** T4, T5 and T6 did not select or inspect the Designer tab (section 2.2). The final Designer state is therefore the last state observed at T3, not a later observation.
- Designer close/reopen pairs used: 1 of 2 allowed; no restoration pair was needed.

### AC-4: runtime baseline, unsaved Count and Item, prompt, No, reopened orders (met, same session)

**Baseline (T4 row 1 onward; T5 start, rows 3 to 6):** order 1 detail FX001, Factory test one, `1 Factory Street`, dumbbell, `45 pound iron`, 45.00, Count 2, Order Total 90.00 (visual: `t4-runtime-baseline-order1.png`; `t5-start-baseline-order1.png`). Order 2 detail FX002, Factory test two, `2 Factory Street`, eggs, `cage free`, 6.99, Count 1, Order Total 6.99 (visual: `t4-runtime-baseline-order2.png`). Grid rows (accessibility): `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00` and `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99`.

**Count 2 to 3, unsaved (T5 rows 7 to 10):**
- Detail view (visual, `t5-after-count-3-unsaved-order1.png`): **Count 3; Cost 45.00; Order Total 135.00.** The row shows the unsaved marker, and the runtime Save became enabled (no click on it).
- Grid row 1 (accessibility, `t5-after-count-3-snapshot.md`): `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 3 135.00`.
- Message or error: **none** (no dialog or toast in the screenshot or the snapshot).

**Item dumbbell to eggs, still unsaved (T5 rows 16 to 18):**
- Detail view (visual, `t5-after-item-eggs-unsaved-order1.png`): **Item eggs; Item Description cage free; Cost 6.99; Count 3; Order Total 20.97.**
- Grid row 1 (accessibility, `t5-after-item-eggs-snapshot.md`): `1 FX001 Factory test one 1 Factory Street eggs cage free 6.99 3 20.97`.
- Message or error: **none.**

**Discard (T5 rows 24 to 28):**
- Form-tab close (`Close Panel FX_Orders`) clicked once. Prompt captured before answering (`t5-save-prompt-before-answering.png`, visual; accessibility `alertdialog`). **Exact text: `Do you want to save your changes to primary collection?`** Title: `Infor Mongoose Application Development Framework - FX_Orders`. Buttons: `Yes` (focused by default), `No`, `Cancel`.
- Answered **No**, once (row 28; button click, Enter not pressed). Result: dialog closed, Explorer empty, no FX_Orders Form open (`t5-after-no-discard-explorer.png`, visual). Yes was not answered.

**Reopen and comparison (T5 rows 32 to 47):**
- Recent-forms `FX_Orders` (row 34), Filter in Place (row 36), F4 once (row 37), blank criteria.
- Order 1 detail (visual, `t5-reopened-order1-after-discard.png`): FX001, Factory test one, `1 Factory Street`, dumbbell, `45 pound iron`, 45.00, Count 2, Order Total 90.00. Grid row (accessibility, `t5-reopened-runtime-snapshot.md`): `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00`. **Matches the baseline.**
- Order 2 selected by its row-number cell (row 43). Detail (visual, `t5-reopened-order2-after-discard.png`): FX002, Factory test two, `2 Factory Street`, eggs, `cage free`, 6.99, Count 1, Order Total 6.99. Grid row (accessibility, `t5-reopened-order2-snapshot.md`): `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99`. **Matches the baseline.**

**Final clean close (T5 row 49):** closed once; no prompt appeared (`t5-final-runtime-closed-clean.png`, visual: Explorer, no FX_Orders Form).

Observed behaviour, same session only: the displayed Order Total changed to 135.00 on the unsaved Count change and to 20.97 on the unsaved Item change, before any Save. Whether the stored value changed was not tested (no Save, no reload). See section 9 on attribution.

### AC-5: restrictions (met, from the controller rows)

- No Designer change beyond: one handler New, two Data Change entries, one Save. Other Designer actions were view-state only (panel expand, tab select, grid row selection, Properties tab selection, one Events group expansion).
- No script edit: no click or typed entry in the Script Editor (section 2.2).
- No grid-column event; no other component event. The only component events in the controller are FX_ItemCombobox and FX_CountEdit Data Change.
- No runtime Save: no click on the runtime Save; the only runtime keystrokes were Ctrl+A (in the Count field), Tab and F4.
- No unload, checkout, FormSync, deployment, navigate, JavaScript evaluate, console or network call (section 2.2).
- No Run, Download or Help click (the Script Editor buttons were OK, Cancel, Help and Download in the dialog; only Cancel was clicked).
- No Yes answer (section 2.2).
- No click on the Designer top-toolbar Delete or Regenerate Form. Designer toolbar Delete was not clicked.
- Re-logins: 0. No sign-in step appears in any row.

### AC-6: final report completeness

This section, sections 2 and 5 to 8, and the experiment record's T6 section cover AC-6: decisive evidence for AC-1 to AC-5, exact action counts (section 2), Script Editor opens and how each was left (section 2.2), handler New 1, field entries and corrections (section 2.2 and section 3), Data Change entries 2, Designer Saves 1, Designer close/reopen pairs 1, runtime opens, closes, F4 presses and row-number selections (section 2.2), prompts answered No with the exact text (AC-4), errors (section 6), re-logins 0, the worker-written file inventory (section 7) and the final state (section 8).

## 5. Overwritten screenshots (T1 to T3)

Five intermediate images were overwritten by a later write to the same filename. They are **not preserved**; only the final image of each name exists. Their content is described here from the worker records only:

| Filename | Writes (controller row) | Lost intermediate | Surviving image | Lost image described as |
|---|---|---|---|---|
| gate-itemcombobox-events-before.png (T1) | rows 40, 44, 48 | rows 40 and 44 | row 48 (Events expanded, Data Change blank) | Row 40: FX_ItemCombobox selected, Events group collapsed. Row 44: group selected but not expanded. Worker's own description. |
| parameters-dialog-before-ok.png (T1) | rows 111, 119 | row 111 | row 119 (filled dialog) | Row 111: blank Parameters dialog before filling (fields recorded in the record, not as an image). |
| t2-itemcombobox-data-change-readback.png (T2) | rows 16, 20 | row 16 | row 20 (post-Tab, full value) | Row 16: pre-Tab, value shown truncated as `FX_CalcOrderTota`. |
| t3-reopened-event-handler-row.png (T3) | rows 24, 28 | row 24 | row 28 (expanded) | Row 24: handler group collapsed after reopen (row hidden). |

Count: 3 (T1) + 1 (T2) + 1 (T3) = 5 lost intermediate images. The T1 gate-itemcombobox loss is two images, and the parameters loss is one. The surviving filenames are the final states the record describes.

## 6. T3 intercepted close-control click

- **What happened (controller row 6):** click on element `FX_Orders Form-tab close control (closable FX_Orders)`, ref `aria-ref=e253`. The timeout error (5000 ms) reads: `locator resolved to <div ... role="columnheader" id="rownumberer-1912">` and `2 × waiting for element to be visible, enabled and stable ... <div id="compadorner-1977"> intercepts pointer events ... retrying click action`. The error text in the audit is truncated at 1731 characters.
- **Effect:** Playwright retries the click until its actionability checks pass; a click that is intercepted is not dispatched. The audit therefore supports "no dispatched click" for this call. Two observations corroborate: the post-timeout snapshot (T3 row 7) shows FX_Orders still open with Save and Undo `[disabled]`, and the next close (row 9, `e247`) closed FX_Orders once, with no prompt. No second close was performed, so the "close once" rule was not broken.
- **Ref provenance (corrected here):** the worker's T3 record said `e253` came from the start-of-task snapshot. That is **wrong**. The T3 start-of-task snapshot showed the closable control as `e247`. `e253` came from the **T2** closing snapshot (T2 snapshot listed `button "closable FX_Orders" [ref=e253]`). The record's T3 section has been corrected in place.
- **Assessment:** this is a **recovery-rule deviation** (the brief says to use only the current snapshot's refs and never reuse old ones), with no observed Designer or runtime effect. It is not an enumerated prohibition: the brief's prohibitions on extra closes, Saves, prompt answers and unloads are not triggered, and the single successful close and the fresh-snapshot inspection before the second click follow the brief's "inspect the postcondition before retrying" rule. Whether the coordinator classes it as a violation is the coordinator's decision; this report does not classify it as a prohibition violation.
- **Recovery:** one fresh untargeted snapshot (T3 row 7, saved to `t3-fresh-snapshot-before-close.md`), then the current `e247` (row 9). This matches the brief's allowance.

## 7. Worker-written and controller-generated file inventory

### 7.1 Worker-written files (repo-relative)

Experiment record (one file; created T1 by Write, then updated by Edit in T2 to T5 and again in T6):
- `experiments/EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md`

PNG screenshots, 50 distinct filenames under `evidence/EXP-095/` (55 writes):
- T1 (21): `gate-designer-form-clean.png`, `gate-event-handlers-grid-before.png`, `gate-components-grid-before.png`, `scratch-components-pane00-expanded.png`, `scratch-components-pane01-expanded.png`, `gate-itemcombobox-events-before.png`, `gate-countedit-events-before.png`, `gate-form-selected-before-script-editor.png`, `script-editor-opened-before-compile-result.png`, `compile-result-panel-expanded.png`, `after-script-editor-cancel-designer-state.png`, `new-handler-form-after-new-click.png`, `new-handler-name-dropdown-open.png`, `new-handler-form-after-name-typed.png`, `handler-row-after-name-ok.png`, `handler-properties-response-expanded.png`, `scratch-handler-properties-after-scroll.png`, `response-type-dropdown-open.png`, `handler-response-type-after-select.png`, `parameters-dialog-before-ok.png`, `handler-row-readback-after-parameters-ok.png`
- T2 (6): `t2-pre-change-state-designer.png`, `t2-itemcombobox-selected-before-data-change.png`, `t2-itemcombobox-data-change-readback.png`, `t2-countedit-selected-before-data-change.png`, `t2-countedit-data-change-readback.png`, `designer-save-response.png`
- T3 (8): `t3-pre-close-gate-designer-clean.png`, `t3-after-close-prompt-check.png`, `t3-form-menu-open.png`, `t3-reopened-designer-readback.png`, `t3-reopened-event-handler-row.png`, `t3-components-grid-after-reopen.png`, `t3-reopened-itemcombobox-data-change.png`, `t3-reopened-countedit-data-change.png`
- T4 (7): `t4-web-client-start-state.png`, `t4-form-menu-open-web-client.png`, `t4-after-recent-forms-open-fx-orders.png`, `t4-filter-in-place-mode-blank-criteria.png`, `t4-after-f4-grid-rows.png`, `t4-runtime-baseline-order2.png`, `t4-runtime-baseline-order1.png`
- T5 (8): `t5-start-baseline-order1.png`, `t5-after-count-3-unsaved-order1.png`, `t5-after-item-eggs-unsaved-order1.png`, `t5-save-prompt-before-answering.png`, `t5-after-no-discard-explorer.png`, `t5-reopened-order1-after-discard.png`, `t5-reopened-order2-after-discard.png`, `t5-final-runtime-closed-clean.png`

Accessibility snapshot Markdown files written by the snapshot tool into `evidence/EXP-095/` (9 files):
- T3: `t3-fresh-snapshot-before-close.md`
- T4: `t4-fresh-snapshot-web-client-start.md`, `t4-runtime-baseline-snapshot.md`, `t4-runtime-order2-snapshot.md`
- T5: `t5-start-fresh-snapshot-web-client.md`, `t5-after-count-3-snapshot.md`, `t5-after-item-eggs-snapshot.md`, `t5-reopened-runtime-snapshot.md`, `t5-reopened-order2-snapshot.md`

This report (written in T6):
- `evidence/EXP-095/T6-final-acceptance-report.md`

Total worker-written repository files across T1 to T6: 1 experiment record + 50 PNG + 9 snapshot Markdown + 1 T6 report = **61 distinct files** under the EXP-095 paths.

### 7.2 Controller-generated files in `evidence/EXP-095/` (not worker-written)

- `harness-audit-T1.md` to `harness-audit-T5.md` (controller audits used for section 2).

### 7.3 Tool-generated files outside `evidence/EXP-095/` (not worker-written)

The Playwright MCP wrote a page snapshot file per browser action under `evidence/playwright/` (`page-*.yml`) and console logs (`console-*.log`). These are tool side effects outside the EXP-095 path. Operator git review remains authoritative for repository confinement; the worker did not run git.

### 7.4 Reads of files outside the EXP-095 paths (not writes)

Read-only: `AGENTS.md`, `docs/mongoose/transcripts/hello-world-pt6.md`, `docs/mongoose/scripts/FX_Orders-form-script.vb`, `recipes/components/apply-component-class.md`, `recipes/session/session-expiry-and-stale-designer.md`, the Outcome sections of EXP-093 and EXP-094, and one tool-generated `evidence/playwright/page-*.yml` snapshot (T1 row 22). The T1 controller also logs one **failed** Read of `experiments/EXP-095-...md` before the record existed (error: file does not exist). The worker's T1 record did not report this error.

## 8. Final state

- **Designer (tab 0):** FX_Orders, User scope, **clean** at the last observation (end of T3): Save and Undo `[disabled]`; handler `FX_CalcOrderTotal` (Sequence 0, Form Script Method, Disabled false, `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`); Data Change `FX_CalcOrderTotal` on FX_ItemCombobox and FX_CountEdit; Lose Focus and Gain Focus blank on both. Not observed in T4, T5 or T6.
- **Web Client (tab 1):** Explorer shell with **no FX_Orders Form open**; no prompt, menu or dialog open (`t5-final-runtime-closed-clean.png`, visual).
- **Designer Saves:** 1. **Handler New:** 1. **Data Change entries:** 2. **Designer close/reopen pairs:** 1. **Runtime Saves:** 0. **Prompts answered:** 1 No (text in section 4), 0 Yes.
- **Browser tabs:** 2 (Designer and portal); the portal tab was the active tab at the end of T5.

## 9. Qualifications for disposition

1. **Compile success is not established.** The Compile Result Output was empty; the Errors tab was never opened. The runtime Count and Item results show that the Order Total changed, which is consistent with the method running, but that is an inference, not a compile check.
2. **Attribution is not isolated.** The handler and the two Data Change values were set together, in the same session, before the runtime checks. No control run (for example, the same runtime steps without the Data Change values) was made. The recalculation cannot be attributed to the handler alone.
3. **Recalculation is observed once, in one session.** The record does not claim a repeatable procedure. AGENTS.md requires repeatable execution and persistence verification before a procedure is verified.
4. **Durability is same-session only.** The close/reopen (T3) and the discard/reopen (T5) were in the same browser session. No cross-session or database-level durability is claimed.
5. **Grid-row values are accessibility-only.** The runtime grid pane shows only the Order Number column on screen, so every grid-row value (Count, Cost and Order Total in the grid) comes from the accessibility tree row text. Visual confirmation applies to the detail view only (section 10).
6. **The T3 stale-ref click** (section 6) is a recovery-rule deviation with no observed effect. The record's earlier provenance statement was wrong and is corrected.
7. **Five screenshots were overwritten** (section 5). Their intermediate content is not preserved.
8. **Read-scope for the Outcome sections.** The controller records the file path only, not the offset or limit. The worker's T1 tool inputs (as recorded in the session) used offset 1010 for EXP-093 and offset 264 for EXP-094, each without a limit, which reads only the Outcome section to end of file, and offset 113 with limit 23 for the transcript Section 3. The T1 controller also logs three Grep calls over the EXP-093 and EXP-094 records (headings only, pattern `^## |^### |Outcome`); these returned heading lines and line numbers for the whole record, which goes slightly beyond "Outcome sections only". Disclosed here; no body text beyond the Outcome sections was recorded.
9. **Snapshot target not logged.** The worker's T1 record says one snapshot was "targeted (dialog)". The controller logs no target argument for it (T1 row 81), so the controller can neither confirm nor contradict that description.
10. **Tab index not logged.** The controller logs `action=select` without the index. Tab 1 use in T4 and T5 is corroborated by the snapshot page URLs (portal page); tab 0 use in T1 to T3 by the Designer page URL.
11. **Action definitions are inferred** (section 2): the controller headers do not define "actions" or "reads", but the inferred definitions reproduce all five headers exactly.
12. **Screenshot content versus call success.** A controller "ok" means the tool returned without error; it does not show rendered state. Rendered-state statements in this report come from the worker's viewings of the PNG files in T1 to T5.
13. **Designer state after T3 is unobserved.** The final Designer state is the last observation at T3. Operator confirmation of the Designer's clean state would close this gap.
14. **Non-browser reads and the T1 error.** One Read failed in T1 (the record did not yet exist). Not a browser action; the worker's T1 record did not mention it.

## 10. Visual versus accessibility evidence (what each confirms)

- **Visually confirmed (screenshot viewed in the task that captured it):** every detail-view value listed in AC-4, the exact prompt text, the save toast text, the handler row (Sequence, Response Type, Disabled, Response Parameters), the Data Change value on both components after the Tab commit (post-Tab image), the Designer gate (User scope, Save/Undo disabled, Visual Basic, empty grid, Data Change blank), the Compile Result Output panel (empty), and the post-discard and reopened detail views.
- **Accessibility-only (no visual confirmation):** the grid-row values for both orders at each step (the runtime grid pane clips them on screen). The handler row is visible in the T1 readback, the T2 pre-change screenshot and the T3 expanded screenshot. The Data Change text in the T2 pre-Tab image is truncated visually; its full value comes from the accessibility tree and from the post-Tab image.
- **Not established by any evidence:** the stored (server-side) values after each step; the compile status of the script; the handler's effect in isolation.

## 11. Non-claims (explicit)

- The handler alone did not establish the recalculation (section 9.2).
- The script was not shown to compile (section 9.1).
- No cross-session or database-level durability is claimed (section 9.4).
- No replay or repeatable procedure is claimed (section 9.3).
- The stored value after the unsaved Count and Item changes was not checked.

## 12. Missing audit sources (where a count cannot be exact)

No count in this report had to be estimated. The following are not in the audit and are therefore not reported as exact: the tab index for each select; the target argument of snapshot calls; the offset and limit of Read calls; the full text of the T3 error beyond 1731 characters; and the rendered content of any tool result. The record's earlier approximate T1 find count (about 28) is now exact (28), per the controller row table.
