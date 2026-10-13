# EXP-068-R2 — T11 final blocked report (documentation only; zero browser calls)

Run `R-20261013-100215-RmDq`, experiment EXP-068-R2, cycle 12, task T11. Task message `c3ea5d88-cb02-4675-ae8b-33e5c50014a6`, worker session `8144a650-5254-4770-bac0-bc40325571fa`.

**Outcome recommendation: BLOCKED at AC-6's screenshot-evidence criterion. The experiment is NOT accepted overall.** The functional runtime observation (accessibility readback) succeeded; the required visual evidence does not exist. Nothing is replay_verified. All findings are observed or unresolved.

T11 made zero browser calls and zero Mongoose changes. No other file was modified.

## 1. Acceptance matrix

| AC | Status | Decisive evidence | Limit |
| --- | --- | --- | --- |
| AC-1 | Supported | `t1-01`, `t1-02` (identity, clean, 19 components, absence); `t2-02` (tooltip `Edit grid column(s)`); `t2-03` (dialog `Contained Components`, four columns 0–3); `t3-01`, `t3-02`; `t4-01` (dialog before New) | The icon has no accessibility name; the route is coordinate-based. Find `Edit Grid Columns` returns no match. The top Edit menu has no grid item. |
| AC-2 | Supported with a label caveat | `t4-02` (FX_UMGridCol selected); `t4-03` (one new row, index 4, `gridColumn1_USER`); `t5-01`–`t5-03` (rename); `t5-04` (after OK) | The control's tooltip reads `New`, not `Add`. Treating `New` as Add is a candidate_procedure. |
| AC-3 | Supported | `t6-01`, `t6-02` (before binding: Binding Type None); `t6-05`, `t6-07` (Property; `object.FX_UMsDescription`); `t7-01`, `t7-03`; `t8-06` (after reopen) | Caption, Size and Location read from the accessibility tree and the Properties panel. The Properties panel truncates the binding in images. |
| AC-4 | Supported | `t7-02` (native toast); `t7-03` (Save disabled) | The toast is in the screenshot only; it was not in the accessibility tree when checked. |
| AC-5 | Supported (same session) | `t8-01` (pre-close), `t8-02` (closed, no prompt), `t8-03` (Select Form one row), `t8-04` (reopened identity), `t8-05`, `t8-06` (column after FX_UMGridCol with binding) | Same-session close/reopen only. `t8-05` clips the fifth row; the order comes from the accessibility tree. |
| AC-6 | **Screenshot criterion FAILED (not met).** Accessibility functional observation: succeeded. | Runtime close: `t9-02` (no prompt). Reopen: Form > Open > Select Form, OK (`t9-03` identity). Accessibility headers: Item, Description, Cost, Unit of Measure, unnamed fifth header. Values: dumbbell `Each`, eggs `Dozen`, guitar `Each` (§3 below). | No screenshot shows the fifth column or its values (`t9-03`, `t9-04`, `t9-05`, `t10-01`). The scrollbar thumb was not positively identified, so no drag was made in T10. |
| AC-7 | Supported to the extent of the readbacks | Component readbacks in `t1-02`, `t3-01`, `t6-01`, `t7-01`, `t8-05`; action audit (§5); clean final Forms (`t8-04`, `t10-01`) | Not an exhaustive property diff. Only the four originals, the new column, and the Pane (01) component list were read. Server-side state, preferences and objects outside the Form were not audited. |
| AC-8 | Documentation complete; not accepted | This report; the experiment record §0a–§0h and this section; audit §5; inventory §6 | Overall acceptance withheld because AC-6's screenshot criterion is not met. |

## 2. AC-6 — what is and is not established

**Established (accessibility readback, not pixels):**
- The runtime FX_Items Form was closed once (native `Close Panel FX_Items`; no prompt; `t9-02`) and reopened once (Form > Open > Select Form, one row, OK; `t9-03`).
- The grid headers after reopen were Item, Description, Cost, Unit of Measure, and one unnamed fifth header (the new column; its Caption is blank).
- Values in the fifth column: dumbbell `Each`, eggs `Dozen`, guitar `Each`. These match the expected Each, Dozen, Each.
- Record values read in the same pass: dumbbell (`45 pound iron`, `45.00`, `EA`); eggs (`cage free`, `6.99`, `DZ`); guitar (`natural acoustic`, `129.99`, `EA`).

**Not established (visual):**
- No screenshot shows the fifth column or any of its three values. The runtime grid pane is about 90 px wide. `t9-03` shows the Item column clipped to "bell"; `t9-04` (wheel) and `t9-05` (one arrow click) show the same Item column; `t10-01` shows the same clipping.
- The horizontal scrollbar thumb was not positively identified. The accessibility tree exposes no scrollbar or splitter element. In T10 the stop rule applied: no drag, scroll, click, zoom or resize was performed.

**Not claimed:** this report does not state that the runtime behaviour failed. The values agree with the expectation in the accessibility readback. The failure is the required screenshot criterion only.

## 3. Runtime and Designer state

- Runtime FX_Items (Web Client tab): open, clean (Save disabled), record 1 of 3 (dumbbell), status `(Object 1 of 3)`, no dialog (last observed T10, `t10-01`). The Description field holds the Form's default focus with its value `45 pound iron`, unedited.
- Designer FX_Items: User scope, clean at T8 end (Save and Undo disabled after the reopen; `t8-04`). The new column is saved (T7 Save; T8 reopen). Its Properties header showed `FX_UMGridCol (GridColumn)` in the T10 read; no dialog open.

## 4. Original columns, new column, and other components

- Original four (order, Tab, Caption, Binding), read at T1 and re-read after T8 reopen: 1 FX_ItemGridCol `FX_sItem` / `object.FX_Item`; 2 FX_DescriptionGridCol `FX_sDescription` / `object.FX_Description`; 3 FX_CostGridCol `FX_sCost` / `object.FX_Cost`; 4 FX_UMGridCol `FX_sUM` / `object.FX_UM`. All unchanged.
- New column FX_UMsDescriptionGridCol (index 4, after FX_UMGridCol): Type GridColumn; Caption blank; Binding Type `Property`; Binding `object.FX_UMsDescription`; Size `12.5; 5.88235294117647`; Location `0; 0`. Recorded as the defaults at creation and unchanged after binding (T6 pre- and post-binding readbacks; T7 pre-Save; T8 post-reopen).
- Pane (01): 12 components (FX_PictureStatic, FX_RefreshButton, FX_UMsDescriptionEdit, FX_UMsDescriptionStatic, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox), unchanged in the T7 and T8 readbacks.
- Form layout, splitter and preferences: not edited. The T9 wheel and arrow actions were read-only grid scrolling; the T10 inspection performed no action.

## 5. Browser-action reconciliation (exact)

| Task | Browser calls |
| --- | --- |
| T1 | 56 |
| T2 | 11 |
| T3 | 10 |
| T4 | 13 |
| T5 | 17 |
| T6 | 40 |
| T7 | 36 |
| T8 | 45 |
| T9 | 27 |
| T10 | 6 |
| T11 | 0 |
| **Total** | **261** |

Mutation and lifecycle counts (cumulative, T1–T11):

| Operation | Count |
| --- | --- |
| New (`+`) / Add activations (the single Add-candidate) | 1 |
| Edit Grid Columns dialog OK | 1 |
| Edit Grid Columns dialog Cancel (T2, T3) | 2 |
| Edit Grid Columns dialog opened (total) | 3 (the T4 dialog was left open and then confirmed with OK in T5) |
| Column rename | 1 |
| Binding Type selection (`Property`) | 1 |
| Binding selection (`object.FX_UMsDescription`) | 1 |
| Designer Save | 1 |
| Designer close / reopen | 1 / 1 |
| Runtime close / reopen | 1 / 1 |
| Runtime Save | 0 |
| Record edits | 0 |
| Unloads (Web Client / Designer) | 0 / 0 |
| Other component, property, string, preference or object edits | 0 |
| Re-login (session-expiry procedure) | 0 |
| Delete (top toolbar or Components trash) | 0 |
| Undo | 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console or network inspection | 0 |
| Direct URL navigation, refresh, restart | 0 |

Non-mutating view actions (expand, collapse, row selection, menu open and close, one coordinate click on empty canvas to dismiss a menu, one runtime focus click, read-only grid scroll) are counted in the task totals above but are not mutations.

The Edit menu item `Revert Global Object Definition` was never clicked.

## 6. Worker-authored files and inventory

**Experiment record (updated by the worker, this run):** `experiments/EXP-068-R2-hello-world-part-4-section-8b-um-description-grid-column.md`.

**This report (created in T11):** `evidence/EXP-068-R2/T11-final-blocked-report.md`.

**Worker-authored screenshots: 46 PNG files in `evidence/EXP-068-R2/`**, by task: T1 8 (`t1-01` to `t1-08`); T2 4 (`t2-01` to `t2-04`); T3 4 (`t3-01` to `t3-04`); T4 4 (`t4-01` to `t4-04`); T5 4 (`t5-01` to `t5-04`); T6 7 (`t6-01` to `t6-07`); T7 3 (`t7-01` to `t7-03`); T8 6 (`t8-01` to `t8-06`); T9 5 (`t9-01` to `t9-05`); T10 1 (`t10-01`).

**Harness-written (not worker-authored):** `evidence/EXP-068-R2/harness-audit-T1.md` to `harness-audit-T10.md`.

**Tool-written, outside the evidence directory:** `evidence/playwright/` snapshot and console files written by the browser tool.

**Not part of this run's inventory:** `evidence/EXP-068/` (two PNGs and harness audits) and `experiments/EXP-068-hello-world-part-4-section-8b-um-description-grid-column.md`, which belong to the earlier blocked run `R-20261013-094425-Rjnr`. This run did not modify them.

Repository confinement is supported by these inventories. The operator's git review is authoritative.

## 7. Same-session recovery limitation

The Designer close/reopen (T8) and the runtime close/reopen (T9) were both within the same authenticated browser session. They establish recovery in this session only. They do not establish cross-session durability, a database read, or persistence beyond the observed session.

## 8. Final state (end of T11)

- Designer FX_Items: clean, column saved, not closed further after T8. No dialog open.
- Runtime FX_Items: open, clean, record 1 of 3. No dialog open.
- No browser-native dialog or unsaved-change prompt recorded in the last observations.
- No further action is pending in this run. The next decision belongs to the coordinator.

## 9. Preserved unresolved indicators (no causes assigned)

1. Undo accessibility state after the T5 OK read `[disabled]`, while its icon looked active in `t5-04`. Undo later read enabled (T6, T7) and disabled after the T7 Save. Cause not established.
2. The new column's Components-list Data Source cell was blank through T7 and populated after the T8 reopen (`t8-01`, `t8-05`). The display lag's cause is not established.
3. Designer console error count: 2 at the start, 3 from T7 onwards. Not read; cause not established.
4. Web Client console counters: 7 errors and 3 warnings at T9 and T10. Not read; cause not established.
5. The runtime FX_Items Form was already open at the start of T9, although no action in T1–T8 opened it. Cause not established.
6. The Save toast (`t7-02`) was not in the accessibility tree when checked; it is screenshot-only.
7. The first T8 close click resolved to a grid header and was intercepted by the selection adorner; nothing executed.
8. The canvas right-click and hover on the selected grid were intercepted by the selection adorner (T1, T2 route). The T2 route used a coordinate click on the top-left icon.
9. Screenshot name `t1-06-final-state-menu-closed-save-disabled-no-dialog.png` overstates its content: the Edit menu is open in the image.
10. The Edit grid column(s) control is labelled `New` in its tooltip, and the brief called it Add. Equivalence is a candidate_procedure.
11. The fifth header of the runtime grid is unnamed (blank Caption). Observed only.

## 10. Classification

- Observed (one session): the Designer dialog route and layout; the single New activation producing one row at index 4; the rename; OK with no visible response; the binding; the single Save and its toast; the Designer reopen; the runtime reopen; the accessibility values Each, Dozen, Each.
- Candidate procedure: treating the `New` control as Add; auto-assignment of `object._ItemId` when Binding Type is set to Property (observed in EXP-067-R2 and here, then corrected).
- Unresolved: visual evidence of the fifth column; the items in §9.
- Not replay_verified: nothing in this experiment.

## 11. Decisive-evidence matrix for the coordinator

| Question | Evidence | Answer |
| --- | --- | --- |
| Is the column present after the Designer reopen? | `t8-04`, `t8-05`, `t8-06`; accessibility rows in §0f | Yes (same session) |
| Is the column bound to `object.FX_UMsDescription`? | `t6-07`, `t7-03`, `t8-06` | Yes (accessibility readback) |
| Did the runtime show the column with Each, Dozen, Each? | Accessibility values, `t9-03` identity | Yes on accessibility readback; **no screenshot shows it** |
| Is there a visual confirmation of the column? | None | **No** |
| Was the splitter moved? | No action targeted the splitter; T9 and T10 layouts are unchanged in the screenshots | No evidence of movement |

## 12. Recommendation

Mark EXP-068-R2 as **BLOCKED at AC-6's screenshot criterion**, not accepted. The functional readback (dumbbell Each, eggs Dozen, guitar Each) is observed and recorded. The coordinator has two routes:

1. Accept the accessibility readback as the AC-6 evidence and waive the screenshot requirement (an operator decision).
2. Authorise a route that shows the fifth column visually, for example a wider runtime view, or a single scroll with the scrollbar positively identified by its element. Any such action needs its own task.

No further action was taken in T11.
