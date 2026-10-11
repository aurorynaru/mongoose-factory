# EXP-053 T1 — Read-only preflight and Diagnostics original-value baseline

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 0, task T1. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `77291ffd-3c9c-4912-9d47-e07ea6c3d696`. Date 2026-10-11. Editing scope User. Target Form `FX_Items` (User-scoped).

**Result: T1 complete and stopped for coordinator review before any preference mutation.** No preference was changed. No OK was pressed. The Diagnostic Log was not opened, cleared, or otherwise touched. FX_Items was not opened, closed, queried, or edited. No Designer change, Save, or runtime data action was performed.

Classification of every finding in this report: **observed only** (single session, UI and accessibility evidence). Not replay_verified. No cross-session, database, or causal claim.

## 1. Read-only preflight (AC-1)

| Item | Observed (direct) | Evidence |
| --- | --- | --- |
| Web Client identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (DEM configuration, as displayed) | `t1-01`, `t1-06` |
| Web Client runtime tab | `FX_Items` tab open and selected (tab heading `FX_Items`, `Close Panel FX_Items` present). Three rows: `1` dumbbell / 45 pound iron / 45.00 / EA (current), `2` eggs / cage free / 6.99 / DZ, `3` guitar / natural acoustic / 129.99 / EA. Status `Description (Object 1 of 3)`. Save greyed. | `t1-01`, snapshot of tab region |
| Runtime clean state | Save disabled; no unsaved-change prompt; no dialog; no portal banner; no authentication or sign-in challenge. Description input shows focus with its text selected (form-applied focus; no typing was performed by the worker). | `t1-01` |
| Designer tab | `FX_Items` tab selected. Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True. Properties > Behavior > **Initial Command = `Refresh`**. Toolbar Save and Undo greyed. Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No dialog. | `t1-07`; Designer snapshot |
| Inherited state | Consistent with the EXP-052 end state (runtime open with three rows; Designer FX_Items User-scoped, Initial Command `Refresh`). | EXP-052 record, T9 section |
| Authentication | No sign-in, configuration, or challenge screen. No credential was read or typed. | all screenshots |

Tab state at the start: index 0 = Designer (`MGForm=FX_Items`), index 1 = Web Client (`favoriteContext=FX_Items`). The Designer tab was the selected tab at the start of T1. Tab 1 was selected for inspection and tab 0 was selected again at the end of T1, so the Designer is the selected tab at the end.

**Inherited runtime FX_Items is still open** (EXP-052 left it open). It was not closed in T1, as instructed.

## 2. Diagnostics User Preferences — original-value inventory (AC-2)

Path: Web Client `View > User Preferences...` > category list item `Diagnostics`. The Diagnostics page has four tabs: General, Form, IDO Collections, Others. Each tab was captured by screenshot and by accessibility snapshot before any mutation. **No option was clicked; all values are read, not changed.** Original values below are the values visibly established in this session. Nothing was assumed from defaults.

Authorized for EXP-053 (three options): **General > Enabled** (Diagnostics Enable), **Form > Events**, **Form > Event Handler > Include**. All other options are not authorized and must be preserved.

### 2a. General tab (`t1-02`)

| Option | Original value (visible) | Authorized? | Accessibility ref |
| --- | --- | --- | --- |
| Enabled | **Unchecked (off)** | **Yes — Diagnostics Enable** | f1e444 |
| System Information | Unchecked (off) | No | f1e449 |
| Security | Unchecked (off) | No | f1e454 |

### 2b. Form tab (`t1-03`)

The accessibility tree does not name the group that contains each checkbox. Several names repeat (`Initialization` ×3, `Dependent Notification` ×2, `Include` ×2). Each checkbox below was mapped to its visual group in `t1-03` and cross-checked by count (16 checkboxes in the tree, 16 in the screenshot) and by checked state (only Events, Event Handler Include, and Variable Value Changed are checked in both). The ref-to-group mapping is a worker inference from accessibility order plus visual layout; it is consistent in every checked state.

| Group (visual heading) | Option | Original value (visible) | Authorized? | Ref |
| --- | --- | --- | --- | --- |
| (top level) | Initialization | Unchecked | No | f1e475 |
| (top level) | **Events** | **Checked (on)** | **Yes — Form tab Events** | f1e480 |
| Call Details | Scripts | Unchecked | No | f1e485 |
| Call Details | IDO Methods | Unchecked | No | f1e490 |
| Call Details | Form Server | Unchecked | No | f1e495 |
| Component | Initialization | Unchecked | No | f1e500 |
| Component | To/From Source | Unchecked | No | f1e505 |
| Component | List Building | Unchecked | No | f1e510 |
| Component | To/From Control | Unchecked | No | f1e515 |
| Component | User Interaction | Unchecked | No | f1e520 |
| Component | Dependent Notification | Unchecked | No | f1e525 |
| Event Handler | **Include** | **Checked (on)** | **Yes — Event Handler Include** | f1e530 |
| Validator | Include | Unchecked | No (different group from Event Handler Include) | f1e535 |
| Variable | Initialization | Unchecked | No | f1e540 |
| Variable | Value Changed | **Checked (on)** | No (preserve) | f1e545 |
| Variable | Dependent Notification | Unchecked | No | f1e550 |

### 2c. IDO Collections tab (`t1-04`)

All seven unchecked (off): Initialization (f1e556), Commands (f1e561), Update Overview (f1e566), Load Overview (f1e571), Update Values (f1e576), Load Values (f1e581), Dependent Notification (f1e586). None authorized.

### 2d. Others tab (`t1-05`)

Interpreter group, all six unchecked (off): Overview (f1e595), Scripts (f1e600), Components (f1e605), Variables (f1e610), Properties (f1e615), Others (f1e620). None authorized.

### 2e. Totals and the three authorized options

- Diagnostics checkboxes inventoried: **32** (General 3, Form 16, IDO Collections 7, Others 6). No scroll bar or hidden content was observed on any tab.
- Checked at baseline: **Events** (Form), **Event Handler Include** (Form), **Value Changed** (Form > Variable). All others unchecked.
- Authorized option states at baseline:
  - Diagnostics **Enabled**: **OFF** (unchecked). Requires change to the operator-requested ON state.
  - Form **Events**: **ON** (already checked).
  - Event Handler **Include**: **ON** (already checked).

Not inventoried: the Behavior, Layout, and Event System categories. The dialog opened on the Behavior category's General tab (options such as Show Configuration Name On Caption, Prompt to Save ..., Unload IDO Metadata With Forms, record caps, Language). These are not Diagnostics options; they were not clicked or changed in T1.

## 3. Actions in T1 (browser, in order)

1. Tab list.
2. Snapshot, Designer tab (untargeted).
3. Tab select 1 (Web Client).
4. Snapshot, Web Client (untargeted).
5. Screenshot `t1-01`.
6. Click View menu (`f1e16`).
7. Find `User Preferences` (read-only).
8. Click `User Preferences...` (`f1e241`).
9. Snapshot (untargeted; General tab).
10. Click `Diagnostics` category (`f1e426`); category selection only.
11. Snapshot (untargeted).
12. Screenshot `t1-02`.
13. Click Form tab (`f1e436`).
14. Snapshot, dialog (targeted `f1e276`).
15. Screenshot `t1-03`.
16. Click IDO Collections tab (`f1e438`).
17. Screenshot `t1-04`.
18. Snapshot, dialog (targeted).
19. Click Others tab (`f1e440`).
20. Screenshot `t1-05`.
21. Snapshot, dialog (targeted).
22. Click `Close Window` (X, `f1e278`) to dismiss the dialog without OK. No edits had been made, so nothing was discarded.
23. Snapshot, Web Client region (targeted `f1e96`), confirming runtime tab unchanged.
24. Screenshot `t1-06`.
25. Tab select 0 (Designer).
26. Screenshot `t1-07`.

Counts: browser calls 26; clicks 7 (View, User Preferences, Diagnostics category, Form tab, IDO Collections tab, Others tab, Close Window); tab selects 2; tab list 1; content snapshots 8 (4 untargeted, 4 targeted); screenshots 7; finds 1.
Typing 0; key presses 0; checkbox clicks 0; OK 0; Cancel 0; Save 0; Refresh 0; F4 0; Filter-in-Place 0; Get More Rows 0; New 0; Delete 0; Diagnostic Log open 0; Diagnostic Log clear 0; FX_Items open 0; FX_Items close 0; Designer actions 0; preference changes 0; prompts answered 0; dialogs accepted 0; ref-not-found 0; timeouts 0. The `Ran Playwright code` lines in tool outputs are the browser tool's own generated locator snippets for each UI action; the worker did not write or inject any script.

## 4. Screenshots (native capture, reviewed)

| File | Shows | Does NOT prove |
| --- | --- | --- |
| `evidence/EXP-053/t1-01-webclient-preflight-runtime-FX_Items-open.png` | Web Client identity bar (DEM configuration); runtime FX_Items with rows 1–3; status `Description (Object 1 of 3)`; Save greyed; no dialog. | The database contents; that the rows were loaded by any particular action. |
| `evidence/EXP-053/t1-02-diagnostics-baseline-General-tab-before-any-change.png` | Diagnostics > General: Enabled, System Information, Security, all unchecked. | Persistence of these values beyond the current session. |
| `evidence/EXP-053/t1-03-diagnostics-baseline-Form-tab-before-any-change.png` | Diagnostics > Form: group headings Call Details, Component, Event Handler, Validator, Variable; top-level Events checked; Event Handler Include checked; Validator Include unchecked; Variable Value Changed checked; all other boxes unchecked. | Any runtime effect of these settings. |
| `evidence/EXP-053/t1-04-diagnostics-baseline-IDO-Collections-tab-before-any-change.png` | IDO Collections: seven options, all unchecked. | Any runtime effect. |
| `evidence/EXP-053/t1-05-diagnostics-baseline-Others-tab-before-any-change.png` | Others > Interpreter: six options, all unchecked. | Any runtime effect. |
| `evidence/EXP-053/t1-06-webclient-after-preferences-closed-no-change.png` | Dialog closed; runtime FX_Items unchanged (three rows, Save greyed, identity bar). | That no preference was saved (the dialog was dismissed via its X without OK). |
| `evidence/EXP-053/t1-07-designer-FX_Items-Initial-Command-Refresh-readonly.png` | Designer FX_Items: Name, User version, Initial Command `Refresh`, Save greyed, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. | Form persistence beyond this session. |

All images were opened and checked for relevant content before citation (identity, scope, control labels, and state are visible).

## 5. Tool-generated browser files (not worker-authored)

Written by the browser tool during T1 under `evidence/playwright/`: `console-2026-10-11T05-11-13-242Z.log`, `page-2026-10-11T05-11-23-805Z.yml`, `page-2026-10-11T05-11-28-732Z.yml`, `page-2026-10-11T05-11-33-707Z.yml`, `page-2026-10-11T05-11-42-051Z.yml`, `page-2026-10-11T05-11-57-367Z.yml`, `page-2026-10-11T05-12-03-980Z.yml`, `page-2026-10-11T05-12-15-418Z.yml`. These are automatically generated and separately identified; they were not authored by the worker.

## 6. Recommendations to the coordinator (for the mutation step, not executed)

1. **Only one value needs to change.** Diagnostics Enabled is OFF and must become ON. **Events** and **Event Handler Include** are already ON. The transcript's steps ("check", "check", "check") imply ON for all three, so the two already-ON options need no click. Please confirm the operator-requested states are ON for all three before the mutation step. If the operator wants them re-applied, that is a no-op.
2. **Identify checkboxes by group, not by name.** Use `t1-03`'s group layout. Do not click `Include` or `Initialization` by name alone (duplicates exist). Verify each click by screenshot before OK.
3. **Restore plan (if the mutation proceeds):** restore Enabled to unchecked. Events and Include are restored only if they are changed. Read back all 32 values after OK and after restoration.
4. **Refresh-before-apply watch.** The operator's timing note applies: if the Diagnostic Log shows no Form event entries after the controlled opening, stop for review. Do not refresh the browser.
5. **Runtime tab.** Its clean state (Save greyed, no prompt, three rows) was observed in T1 and is unchanged. The description focus does not indicate a pending edit. Close it only in the controlled step, after re-checking.

## 7. Limits

- Single session, UI and accessibility observation only. No database or server-side read.
- Original values are as displayed in the Web Client, not as stored. Mapping of accessibility refs to visual groups is a worker inference (see 2b).
- No Diagnostic Log content was observed in T1. Inherited log state is unknown.
- No runtime Form event or diagnostic message was observed; no causal claim is made.
- The EXP-052 T9 runtime-opening report was read for the inherited state; its observations were not re-verified in T1 beyond the current runtime screenshot.
