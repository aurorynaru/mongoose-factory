# EXP-057 T2B — read-only saved-handler verification of the recovered FX_Items Designer Form (AC-3)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 2. The task header reads `task=T3`; the bounded instruction is **T2B** (read-only handler verification, no runtime work). The bounded instruction was followed.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `1d92c011-56b8-4e93-8d3f-ae9c40fc52cb`.
Date: 2026-10-11. Browser tab 0 (Designer) only. Tab 1 (runtime) was not selected or touched.

**Outcome: AC-3 observed.** On the recovered FX_Items Designer Form (opened in T2A, not reopened here), the Event Handlers grid shows exactly one `StdFormRefreshCompleted` group with two actions: sequence 0 Prompt with Message Text `Hello World`, OK as the only checked response, Disabled false; and sequence 1 Set Values with `SETVARVALUES(FX_VarTest=P(FX_Description))`, Disabled false. Initial Command reads `Refresh`. Save remained disabled throughout. Two Parameters dialogs were opened for readback and closed with Cancel. No value was committed.

## 1. Identity and clean state at start (`t3-snapshot-00`)

- Tab list before any selection: tab 0 Designer (current), tab 1 Mongoose portal. `browser_tabs select 0` succeeded.
- Form tab: one, selected, heading `FX_Items`.
- Properties > Design: Version `User version for user anton.ramos@3mworks.com.ph` (snapshot; truncated on screen).
- Footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save, Regenerate Form, Undo, Redo: `[disabled]`. No dialog. Designer console 3 errors (unchanged).
- Properties > Behavior > Initial Command: value `Refresh` (readback; `t3-snapshot-00`).
- Result: identity and clean state match the T2A recovery and the EXP-056 baseline.

## 2. Navigation and view-state changes (no metadata change)

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | `browser_find` "Details" (read-only) | — | Details panel found collapsed |
| 2 | Click `Expand Panel` (view state) | Details panel | Expanded; tabs Collections (default), Components, Event Handlers, Variables, Design View Size visible |
| 3 | Click `Event Handlers` tab (view state) | Details tablist | Selected |
| 4 | Click grid toolbar `Expand` (view state, labelled) | Event Handlers grid | Group expanded; rows 0 and 1 displayed |
| 5 | Click row 0 `Sequence` cell `0` (row selection; not editable) | Prompt row | Selected; Properties Event Handler detail pane populated |
| 6 | Click `Open Edit Property Dialog` (Parameters) for row 0 | Prompt Parameters | "Event Handler Parameters" dialog opened (read-only) |
| 7 | Click dialog `Cancel` | Prompt Parameters | Closed; nothing committed (snapshot `t3-snapshot-06`: no dialog) |
| 8 | Click row 1 `Sequence` cell `1` (row selection) | Set Values row | Selected |
| 9 | Click `Open Edit Property Dialog` (Parameters) for row 1 | Set Values Parameters | "Event Handler Parameters" dialog opened (read-only) |
| 10 | Click dialog `Cancel` | Set Values Parameters | Closed; nothing committed (snapshot `t3-snapshot-09`: no dialog) |

Not done: any text entry; any OK button; any Save, Regenerate, Undo, Redo; any add, delete, copy, reorder, or enable/disable; any change to StdFormRefreshCompleted, its sequence, event name, or enabled state; the Components tab; the Variables tab; any runtime action.

Note: the Details panel and grid expansion are presentation state. The T2A snapshot showed the Details panel collapsed; it is expanded now.

## 3. Handler grid readback (AC-3)

Evidence: `t3-snapshot-03-event-handlers-after-expand.md` (lines 293–310); `t3-02` / `t3-01`.

| Item | Observed | EXP-056 reference | Match |
| --- | --- | --- | --- |
| Handler groups | One group, `StdFormRefreshCompleted` (single group cell; no second group) | EXP-056 T8 `t8-snapshot-05`: one group | Match |
| Action count in group | 2 (sequence 0, sequence 1) | EXP-056 T8: 2 | Match |
| Sequence 0 Response Type | `Prompt` | EXP-056 T8: Prompt | Match |
| Sequence 0 Disabled | `false` | EXP-056 T1: `Disabled false` | Match |
| Sequence 0 Response Parameters (grid) | `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` | EXP-056 T1/T8: identical | Match |
| Sequence 1 Response Type | `Set Values` | EXP-056 T8: Set Values | Match |
| Sequence 1 Disabled | `false` | EXP-056 T8: `Disabled false` | Match |
| Sequence 1 Response Parameters (grid) | `SETVARVALUES(FX_VarTest=P(FX_Description))` | EXP-056 T8 `t8-snapshot-05`: identical | Match (exact string) |

Screenshot: `t3-01-handler-grid-one-group-two-actions.png` — shows the Event Handlers grid with one `StdFormRefreshCompleted` group, rows 0 (Prompt, false, `PROMPT(Hello World) ICON(DEFAULT) RESP…`) and 1 (Set Values, false, `SETVARVALUES(FX_VarTest=P(FX_Description))`). Save greyed. User footer. It proves the grid state at that moment. It does not show the full Prompt string (truncated in the grid column) and does not show the Parameters dialog contents.

## 4. Native Parameters readback — sequence 0 Prompt (read-only, Cancelled)

Evidence: `t3-snapshot-04-row0-prompt-selected-readback.md`; `t3-snapshot-05-row0-parameters-dialog-readback.md`; `t3-02-row0-prompt-parameters-dialog-readback-before-cancel.png`.

- Property tree for row 0 (`t3-snapshot-04`): Sequence `0`; Disabled `False`; Response Type `Prompt`; Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (full, untruncated).
- "Event Handler Parameters" dialog (`t3-snapshot-05`, screenshot `t3-02`):
  - General: Error Message blank; Success Message blank; Only When Current Collection Is `<all collections>`; Only When Platform Is blank; Keep blank; Ignore Failure, Message as Toast?, Disabled — all unchecked.
  - Message Text `Hello World` (exact).
  - Caption blank. Prompt When blank. "Stop event handlers if expression is true" unchecked.
  - Icon: info (blue i) radio selected in the screenshot, consistent with `ICON(DEFAULT)`. (The accessibility tree does not expose the radio checked state; the icon identity is from the screenshot only.)
  - Responses: **OK** checked, Event To Generate blank, Default Button radio on OK (screenshot). Yes, No, Abort, Retry, Ignore, Cancel: unchecked.
  - Result: exact match to `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
- Closed with Cancel (`t3-snapshot-06`): no dialog remains; the FX_Items Form remains selected; Save disabled.

## 5. Native Parameters readback — sequence 1 Set Values (read-only, Cancelled)

Evidence: `t3-snapshot-07-row1-set-values-selected-readback.md`; `t3-snapshot-08-row1-set-values-parameters-dialog.md`; `t3-03-row1-set-values-parameters-dialog-readback-before-cancel.png`.

- Property tree for row 1 (`t3-snapshot-07`): Sequence `1`; Disabled `False`; Response Type `Set Values`; Parameters `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- "Event Handler Parameters" dialog (`t3-snapshot-08`, screenshot `t3-03`):
  - Variables textbox: `FX_VarTest=P(FX_Description)` (exact).
  - Components textbox: blank. Properties textbox: blank.
  - Do not mark output targets modified?: unchecked. Disabled: unchecked.
  - Keep combobox: focused but empty (not typed into).
  - Result: exact match to the summary `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- Closed with Cancel (`t3-snapshot-09`): no dialog remains; Save disabled.

Note: the Variables list and the pair dialog (`…` buttons) were not opened, because the single-line Variables textbox already shows the full assignment. The Value side `P(FX_Description)` is read as part of that textbox.

## 6. Final clean state (`t3-snapshot-09`, `t3-04`)

- No dialog. Form tab `FX_Items` selected. Save, Regenerate Form, Undo, Redo `[disabled]`.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Event Handlers grid: group `StdFormRefreshCompleted`; row 1 selected (highlight). Event To Handle pane: Event `StdFormRefreshCompleted`, Sequence `1`, Disabled `False`.
- Screenshot `t3-04-final-clean-designer-handler-grid-after-cancels.png`: shows the handler grid, Event To Handle pane, Initial Command `Refresh`, greyed Save, User footer, and no dialog. It proves the clean non-editing state. It does not prove the saved state beyond this Designer session.

## 7. Comparison with EXP-056 T8–T10

- Exact matches (grid and readback): one group `StdFormRefreshCompleted`; two actions; sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`; Initial Command `Refresh`; ScopeType User; ScopeName `anton.ramos@3mworks.com.ph`.
- Newly established in this session (the EXP-056 T8 limit "sequence-0 Parameters not re-opened post-Save" is addressed here): the full sequence 0 Parameters readback (Message Text `Hello World`; OK the only checked response; icon info by screenshot).
- Not re-read: the EXP-056 T8 Parameters-level readback of sequence 1 (EXP-056 read it pre-Save in T5/T7). Here it is read as its Set Values Variables textbox.
- Unavailable fields (not exposed by the accessibility tree): the icon radio checked state (screenshot only), the Default Button combobox value in the Prompt dialog, and the Keep combobox value (empty by screenshot; not confirmed in the tree).
- Disabled flag: EXP-056 T1 and T8 recorded `Disabled false` for both rows; this session matches on both rows (grid and property tree).

## 8. Counts (T2B)

- Tab lists 1 (before the first select). Tab selects 1 (tab 0; succeeded).
- Saved snapshots 10 (`t3-snapshot-00` … `-09`). Read-only `browser_find` calls 2 ("Details" and "Event Handlers"). Read-only greps/reads: several.
- Screenshots 4 (`t3-01`, `t3-02`, `t3-03`, `t3-04`).
- Clicks 9 (Details Expand 1; Event Handlers tab 1; grid Expand 1; row 0 select 1; row 0 Parameters open 1; row 0 dialog Cancel 1; row 1 select 1; row 1 Parameters open 1; row 1 dialog Cancel 1). Timeouts 0. Browser-reference errors 0. Fresh recovery snapshots used 0.
- Typing 0; key presses 0; hover 0.
- Designer Save 0; Regenerate 0; Undo 0; Redo 0; Form close or reopen 0; handler actions added, changed, reordered, or removed 0; StdFormRefreshCompleted changed 0; parameter commits 0 (both dialogs Cancelled).
- Components tab 0; Variables tab 0; FX_Refresh 0; runtime tab interaction 0; diagnostics, preferences, FormSync, cache, SQL, scripts, reauthentication 0.
- Portal banner dismissals 0 (none visible).

## 9. Acceptance (T2B / AC-3 scope)

| AC | Status | Basis |
| --- | --- | --- |
| AC-2 (recovered and scoped; Save disabled; no error dialog) | Supported (carried from T2A; re-confirmed at the start of T2B) | `t3-snapshot-00` (identity, Save disabled, no dialog); `evidence/EXP-057/T2A-recovery-report.md` |
| **AC-3** Initial Command Refresh; exactly one StdFormRefreshCompleted group; sequence 0 Prompt with original Hello World and OK configuration; sequence 1 Set Values with exact summary; handler grid and native parameter readback captured without edit | **Supported (observed, single session)** | Sections 3–6. Grid: `t3-snapshot-03`, `t3-01`. Prompt readback: `t3-snapshot-04`, `-05`, `t3-02`. Set Values readback: `t3-snapshot-07`, `-08`, `t3-03`. Clean state: `t3-snapshot-09`, `t3-04`. Limits: the icon and Keep fields are screenshot-only; the Prompt and Set Values Parameters dialogs were opened and cancelled (read-only) — no commit. |
| AC-4 Component inventory and FX_VarTestEdit | **Not tested in T2B** (reserved by instruction) | — |
| AC-5 Variables tab check | **Not tested in T2B** (reserved by instruction) | — |
| AC-6 to AC-11 | **Not tested** | Later tasks (runtime and reconciliation). |

## 10. Limits

- Observed in one Designer session on a Form recovered in T2A. No cross-session, server-side, or independent database persistence is claimed.
- The Parameters dialogs were opened with the Designer's native control and closed with Cancel. Cancel is non-committing in the observed state (no change appeared in the grid afterwards: row 0 and row 1 remain `PROMPT(…)` and `SETVARVALUES(…)` in `t3-snapshot-09`). This is an observation, not a guarantee of server state.
- The truncated Version in the screenshot was read from the snapshot.
- The Designer URL changed from `...?MGForm=FX_Items` to `.../designer/default.aspx` after the first Parameters Cancel, while the Form stayed open. The cause was not established. No navigation was typed or issued by the worker.
- The expression `P(FX_Description)` was not evaluated here; runtime evaluation is T3/T4 work.

## 11. Blockers

None for T2B.

## 12. Files written (T2B)

- `evidence/EXP-057/T2B-handler-verification-report.md` (this report)
- Snapshots: `evidence/EXP-057/t3-snapshot-00-designer-fresh-pre-handler-check.md`, `t3-snapshot-01-details-expanded-tabs.md`, `t3-snapshot-02-event-handlers-grid.md`, `t3-snapshot-03-event-handlers-after-expand.md`, `t3-snapshot-04-row0-prompt-selected-readback.md`, `t3-snapshot-05-row0-parameters-dialog-readback.md`, `t3-snapshot-06-after-parameters-cancel-state.md`, `t3-snapshot-07-row1-set-values-selected-readback.md`, `t3-snapshot-08-row1-set-values-parameters-dialog.md`, `t3-snapshot-09-final-clean-designer-after-cancels.md`
- Screenshots: `evidence/EXP-057/t3-01-handler-grid-one-group-two-actions.png`, `t3-02-row0-prompt-parameters-dialog-readback-before-cancel.png`, `t3-03-row1-set-values-parameters-dialog-readback-before-cancel.png`, `t3-04-final-clean-designer-handler-grid-after-cancels.png`
- Tool-generated (gitignored, not worker-authored): `evidence/playwright/page-2026-10-11T09-27-*`, `09-28-*`, `09-29-*`.
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (updated: status and T2B section).
