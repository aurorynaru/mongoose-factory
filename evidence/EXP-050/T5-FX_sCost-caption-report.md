# EXP-050 T5 — FX_sCost caption string (only FX_sCost); FX_sItem reconfirmed read-only

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 4 · task T5
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `72b5f02e-9c06-481e-ba82-c4450a0cc658`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (existing working record, updated).

**Outcome:** exactly one new string resource was created: `FX_sCost` = `Cost`. The prompt named the exact ID, the value was committed before OK, and the independent Edit > String read shows `FX_sCost` = `Cost`. `FX_sItem` = `Item` was reconfirmed read-only, and `FX_sDescription` = `Description` and `FX_sUM` = `Unit of Measure` were read without edit. No Designer Save, close/reopen, runtime open, component edit, or edit to any existing string occurred.

**State:** the FX_Items Designer remains open in User scope with pending changes (two new strings). Save was not pressed.

## Preflight

| Check | Observed | Evidence |
| --- | --- | --- |
| Designer tab | `FX_Items` tab selected next to vendor `Property Classes` | `t5-01-pre-mutation-pending-FX_sItem-state.png` |
| Scope | Status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t5-01` |
| Save | enabled (pending FX_sItem change from T4) | `t5-01`; find `button "Save"` |
| Undo | icon visibly active in the screenshot; the accessibility tree reported `[disabled]` in this snapshot. Recorded as a discrepancy, not resolved (see below) | `t5-01`; find |
| Dialogs or prompts | none open; no authentication challenge | find |
| FX_CostStatic selected | Components row, tab 9, Pane 1 | `t5-02-FX_CostStatic-selected-caption-FX_sCost-before-mutation.png` |
| Caption before mutation | `FX_sCost` (Properties Caption, accessibility `FX_sCost`) | `t5-02`; snapshot |

Caption confirmed as the exact `FX_sCost` reference before the ellipsis was opened.

## Mutation sequence

| # | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Caption ellipsis (FX_CostStatic), once | Prompt `String FX_sCost does not exist. Create it?` (Yes focused; No). The String dialog stood behind it | `t5-03-caption-prompt-String-FX_sCost-does-not-exist.png` |
| 2 | Yes, once | String dialog: Name `FX_sCost`; generated default String Value `FX_s Cost`; Description blank; Version `User version for user an…` | `t5-04-String-dialog-FX_sCost-default-value-before-edit.png` |
| 3 | Click the String Value grid cell (opens editor) | Editor active with `FX_s Cost` | find (textbox active) |
| 4 | Control+a in the editor | (no separate capture) | — |
| 5 | Attempted plain type `Cost` against ref `e1251` | **Timed out.** The ref resolved to the read-only Property Description textarea, not the editor; "element is not editable". Nothing was typed into that element. Recorded as a targeting error | error log |
| 6 | Fresh snapshot of the String dialog | Editor still active, text `FX_s Cost`; Name `FX_sCost` unchanged | snapshot |
| 7 | Corrected attempt: type `Cost` into the active editor (its own ref, `e1250`) | Editor text set to `Cost` | find |
| 8 | Tab (commit the cell editor) | String Value grid cell reads `Cost`, out of edit mode; focus on the next cell | `t5-05-String-dialog-FX_sCost-value-Cost-committed-before-OK.png`; find (`gridcell "Cost"`) |
| 9 | OK, once (only after step 8 was verified) | Dialog closed; no alert; Save still enabled | `t5-06-after-String-OK-FX_sCost-designer-state.png` |

### Mutation accounting

- New String resources created: **1** (`FX_sCost`), by one Yes.
- OK on a String dialog: **1** (step 9), pressed only after the commit was visible.
- Yes answers: **1**. No answers: **0**.
- Type actions that reached the editor: **1** (the corrected step 7). The earlier failed type (step 5) did not change any element; the error was a timeout before any input.
- Caption ellipsis clicks: **1**.
- Other strings edited or created: **0**. `FX_sItem`, `FX_sDescription`, and `FX_sUM` were only read.

Note on step 5: the failed attempt did not repeat the same action. A fresh snapshot (step 6) then a single corrected action (step 7) followed the browser-recovery rule.

## Independent verification (Edit > String, read-only)

| String | Exact ID | Stored displayed value | Evidence |
| --- | --- | --- | --- |
| FX_sCost | `FX_sCost` (one row for the filter) | `Cost` | `t5-07-Edit-String-readonly-FX_sCost-value-Cost.png` |
| FX_sItem (reconfirmed, not edited) | `FX_sItem` (one row) | `Item` | `t5-08-Edit-String-readonly-FX_sItem-reconfirmed-Item.png` |
| FX_sDescription (not edited) | `FX_sDescription` (one row) | `Description` | read via accessibility row text (`String Value` = `Description`); no PNG |
| FX_sUM (not edited) | `FX_sUM` (one row) | `Unit of Measure` | read via accessibility row text (`String Value` = `Unit of Measure`); no PNG |

The Global Objects dialog was cancelled after these reads (no OK). The reads show the Designer's client view for this session, not a database value.

## Component caption and canvas state after the change

- FX_CostStatic Properties Caption after the change: `FX_sCost` (reference unchanged).
- Canvas label above the FX_Cost field: still `FX_sCost:` (raw ID), not `Cost`. Recorded as-is per the brief (no refresh or workaround).
- Canvas label above FX_Item: still `FX_sItem*` (raw ID), consistent with T4.
- Canvas labels for Description and Unit of Measure: resolved text, unchanged.

Interpretation (not established): the labels may refresh only after an ordinary Designer Save or a reopen. This is the same unresolved pattern noted in T4.

## Designer state after the mutation

| Item | Reading | Source |
| --- | --- | --- |
| Form | FX_Items tab selected; vendor Property Classes tab not selected | `t5-09` |
| Scope | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t5-09` status bar |
| Save | enabled (pending changes: FX_sItem and FX_sCost) | `t5-09` screenshot (enabled icon); find `button "Save"` |
| Undo | accessibility: `[disabled]`; screenshot: icon visibly active | find vs `t5-09` |
| Dialogs | none open (String and Global Objects closed) | find |

**Accessibility vs visual discrepancy:** the Undo state reads disabled in the accessibility tree and visibly active in the screenshot. The same discrepancy appeared in T4. Undo was not pressed. The Save reading is consistent (enabled in the screenshot, and the find in this task did not report it as disabled). Neither reading is resolved here.

## Counts (T5)

| Operation | Count |
| --- | --- |
| Caption ellipsis clicks | 1 |
| Yes answers | 1 |
| No answers | 0 |
| String Value editor opened | 1 |
| Text entries that reached the editor | 1 (`Cost`) |
| Timed-out text entries | 1 (targeting error; no input) |
| Tab commits | 1 |
| String dialog OK | 1 |
| String resources created | 1 (`FX_sCost`) |
| `FX_sItem` created or edited | 0 (read only) |
| `FX_sDescription` or `FX_sUM` created, edited, or opened for editing | 0 (read only) |
| Edit > String opened (read-only) | 1 |
| Strings filter entries (key events) | 4 (`FX_sCost`, `FX_sItem`, `FX_sDescription`, `FX_sUM`) |
| Row selections (Global Objects, read-only) | 4 |
| Cancel (Global Objects) | 1 |
| Designer Save (ordinary) | **0** |
| Close or reopen of FX_Items | 0 |
| Web Client runtime open | 0 |
| Component, binding, or layout edits | 0 |
| Browser-reference errors | 1 (the `e1251` targeting timeout, recovered via one fresh snapshot and one corrected action) |
| Browser timeouts | 1 (same event) |
| Portal banner dismissals | 0 |
| JavaScript or evaluate by the worker | 0 |
| Screenshots (worker-saved PNG) | 9 (`t5-01` to `t5-09`) |

## Acceptance status (T5 scope)

| AC | T5 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-5 (FX_sCost part) | **PASS** for the creation sequence: prompt names exact ID; value committed before OK; Edit > String shows exact ID and value. With FX_sItem from T4, the two intended resources are now both established. | `t5-03`, `t5-05`, `t5-07`, `t5-08` | Client view, not a database read. Canvas still shows raw IDs |
| AC-6 | **Read-only PASS**: FX_sDescription = `Description`, FX_sUM = `Unit of Measure` in the Edit > String view. Not edited | accessibility rows | No PNG for these two reads; no edit action on either string |
| AC-7 (partial) | FX_CostStatic Caption `FX_sCost` confirmed before mutation and after | `t5-02`, `t5-09` | Binding, order, and canvas display are not re-verified in T5 |
| AC-8 | Not performed | — | Save is the next task's step |
| AC-1 to AC-4, AC-9 to AC-11 | Not in T5 scope | — | — |

## Unresolved observations

1. **Canvas text after OK (FX_sItem and FX_sCost).** Both labels still show raw IDs after their strings were created. May update after the ordinary Save or a reopen. Not established. No refresh or workaround was attempted.
2. **Undo accessibility vs visual state.** Accessibility disabled; screenshot icon active. Unresolved (same as T4).
3. **Targeting error at step 5.** A stale editor ref was used (it resolved to the Property Description textarea). Recovered with one fresh snapshot and one corrected action. Cause: the active editor's ref differed from the grid cell ref I had taken before the Control+a press.
4. **Global Objects scope.** The Strings list shows no scope column. Only the client view was read.

## Repository changes (T5)

- Written: `evidence/EXP-050/T5-FX_sCost-caption-report.md` (this report).
- Written: `evidence/EXP-050/t5-01` to `t5-09` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (status line and T5 section).
- Not written: any other repository file.

## Next permitted action

No further action is authorised by T5. The Designer holds two pending string changes (`FX_sItem`, `FX_sCost`) and no ordinary Save has been performed. The next step needs an explicit instruction for the single ordinary Designer Save, then the close and reopen, then the runtime open. The Save result must be inspected before any further action; no second Save is planned.
