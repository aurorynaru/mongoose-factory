# EXP-054 — T2 read-only verification of the native Component Events interface (stopped; blocker)

Run `R-20261011-141742-hPB0`, experiment EXP-054, cycle 2, task T2.
Worker session `b76e9367-15ac-4098-9ead-d6800dc663e9`, task_message_id `0cb69233-b176-4657-8dda-dbda1b17b525`.
Date 2026-10-11. Editing scope User. Target Form `FX_Items`.

**Result: STOPPED before the Events inspection.** The required Form-tab confirmation (Initial Command = Refresh) could not be re-verified in this task because the Properties panel's Form tab click timed out at "visible, enabled and stable", and the one corrected visible inspection did not produce a successful click. No component was selected, no property group was expanded, no picker was opened, and nothing was changed. The Events interface is therefore **not verified in this session**.

## What was done (in order)

1. Read-only repository review: `evidence/EXP-037/t4-inventory-notes.md` (T4 inventory, Events group, expand-all control, ArrowRight anomaly) and `evidence/EXP-037/t6-primary-assignment-notes.md` (T6 Primary picker, Enter commit, post-commit state).
2. Tab selection `index 0` → error `Tab 0 not found` (tab 0 was already the current Designer; the tab list showed `0: (current)`). No state change.
3. Fresh untargeted snapshot (`#1`). Designer FX_Items heading; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate, Undo, Redo disabled; Details panel on Components tab; Properties panel on Component tab with `FX_UMGridCol (GridColumn)` selected (left from T1); 13 components and two panes unchanged.
4. One click on the Properties panel **Form** tab (ref `e966`, view control, to re-read Initial Command). Result: `TimeoutError: waiting for element to be visible, enabled and stable`. The locator resolved to `tab-1189` (`aria-selected="false"`). Treated as a suspected rendering/environment blocker. The click did not execute (the Properties tab stayed on Component).
5. Fresh untargeted snapshot (`#2`, the single recovery snapshot). Same state; the Form tab still `e966`.
6. Screenshot `t2-01` attempt → `TimeoutError ... waiting for fonts`. No file written.
7. Corrected visible inspection: `tabs select 0` (succeeded), then screenshot `t2-01` (succeeded, `evidence/EXP-054/t2-01-preflight-designer-properties-before-any-selection.png`). The screenshot shows the Form tab visible at the bottom right of the Properties panel, but the click on it was not retried, because the allowance (one fresh snapshot and one corrected visible inspection) is now consumed.

## Stop decision

The brief requires Initial Command = Refresh to be confirmed in this task, and the Form tab is the only surface that shows it. That postcondition is unverified in T2, so the brief's stop rule applies. Initial Command was last verified in T1 (`t1-01`, `page-2026-10-11T06-18-27-955Z`; screenshot shows `Initial Command Refresh`). No change to it has been made by any step since. T2 does not re-establish it.

## Events interface: documented control labels (EXP-037, not observed in EXP-054)

These come from the EXP-037 evidence and are recorded as documentation. They were **not** re-observed in this EXP-054 Designer session.

| Control | Documented label or form (EXP-037) | Source |
| --- | --- | --- |
| Component property expand-all | Unnamed toolbar button with a plus icon in the Component property panel. Accessibility name empty. In the EXP-054 T1 snapshot it is the first of the two unnamed buttons in the Properties toolbar (`e814` in the T2 snapshot), with collapse (minus) as the second (`e815`). In the screenshot it is the blue plus at about (1806, 152). | `t4-inventory-notes.md` anomaly 3 |
| Named expander (Form panel) | `Expand` named control (`e1252` in EXP-037 T4). | `t4-inventory-notes.md` anomaly 3 |
| Events group | Row labelled `Events`. A single click on the row only selects it (EXP-037 T4 anomaly 1). Expansion needs the expand-all control. | `t4-inventory-notes.md` anomaly 1 |
| Events > Primary | Row `Primary` with a value cell containing a picker arrow and a `Open Edit Property Dialog` button (treeitem `Primary`). | `t6-07-component-properties-snapshot.md` lines 598–605 |
| Primary picker | Opens a list; `FX_ButtonPromptEvent01` was the first option in EXP-037 (a Form-specific custom event), followed by `Std…` events (`StdAppLaunchInbox`, `StdAppLaunchTasks`, `StdCurComp…`). | `t6-primary-assignment-notes.md` step 2 |
| Commit | Enter after clicking an option (EXP-037 T6). The value shows as a committed cell, not an editor. | `t6-primary-assignment-notes.md` step 4 |
| Other Events rows | Data Change, Lose Focus, Gain Focus (blank), Drag From Events and Drop On Events (`0 event(s)`). | `t4-inventory-notes.md` lines 17–22 |
| Event Handlers view | Details tab `Event Handlers` (view control). | `t4-inventory-notes.md` |

Important: the EXP-037 Primary picker options and the custom-event entry were on EXP-037's own Form (`FX_SingleButtonLab01`) and on a Button. For the EXP-054 FX_Items Form, there is no existing Button, and the picker's option list for FX_Items has not been seen. Whether an existing Static or Edit exposes a Primary row at all is unknown.

## Readiness for the separately authorized Button addition

**Not established.** Three things are unresolved:
1. Initial Command re-verification (blocked in T2).
2. Whether the expand-all control expands the FX_Items component Events group in this session (not attempted).
3. Whether the Primary picker lists `StdFormRefresh` (not attempted; a Button is required to see the Primary row).

The EXP-037 evidence shows the mechanism worked in a prior Form. That is a candidate procedure, not a verified one for FX_Items.

## Actions and counts (T2)

| Item | Count |
| --- | --- |
| Tab select (index 0) | 2 (1 `Tab 0 not found` error; 1 success) |
| Fresh untargeted snapshots | 2 (task start; the recovery snapshot) |
| Clicks | 1 attempted (Form tab), not executed (timeout) |
| Screenshots | 2 attempted (1 timeout on fonts; 1 saved `t2-01`) |
| Component selections | 0 |
| Expand-all or group expansions | 0 |
| Picker opens | 0 |
| Property or component edits | 0 |
| Designer Save | 0 |
| Close / reopen | 0 |
| Diagnostics open / change | 0 |
| Runtime action | 0 |
| Browser JavaScript / run-code | 0 |
| Authentication | 0 |

Recovery allowance: fresh snapshot 1 of 1 used (`#2`); corrected visible inspection 1 of 1 used (`t2-01`). Stop applied.

## State at stop

- Designer tab 0 (current): FX_Items heading, User scope bar, Save disabled, Regenerate disabled, Undo/Redo disabled, Components tab selected, Properties panel on Component tab with `FX_UMGridCol` selected (the T1 state). No dialog. No pending prompt. Nothing unsaved.
- Web Client tab 1: not touched in T2. Runtime FX_Items tab open (from T1; not changed).
- Diagnostics: not touched. General Enabled still OFF as in T1.

## Evidence (worker-authored)

- `evidence/EXP-054/T2-events-interface-readonly-verification-report.md` (this report).
- `evidence/EXP-054/t2-01-preflight-designer-properties-before-any-selection.png` — viewed. Shows: FX_Items heading; Save greyed; Components grid with the FormCollectionGrid and four GridColumn rows; Properties panel on the Component tab (`FX_UMGridCol (GridColumn)`, Name `FX_UMGridCol`, Caption `FX_sUM`, Type `GridColumn`) with collapsed Appearance, Behavior, Data Source, Events, Help, Inheritance, Layout, Miscellaneous groups; the Form and Component tabs at the bottom right (Form tab not clicked); User scope bar. Does **not** show: Initial Command (Form tab not shown), Events expansion (not expanded), any Button.

Tool-generated (not worker-authored): the `page-*.yml` snapshots and console files written by the browser tool for this window under `evidence/playwright/` (gitignored).

## Documentation changes

- `experiments/EXP-054-hello-world-part-3-section-5-fx-items-native-refre.md` (T2 section and status).
