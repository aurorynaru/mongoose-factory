# EXP-139 - FX_InventoryDashboard: Replace the FX_Inventory/index.html Web User Control Asset with the Dark-Theme Redesign

**Operator decision (2026-10-27, after the T9 final audit): ACCEPTED, QUALIFIED.** Run `R-20261027-014540-dC5I` completed as accepted at cycle 12. The worker ran on the operator's second Claude account, because the first account's weekly limit was used up.
- **Changed object (for cleanup):** only the content of the existing User-version Web User Control Asset `FX_Inventory/index.html`. It now holds the dark-theme dashboard from `assets/FX_Inventory/index.flat.html` (commit `657720d`, the same page as `index.html` `d8ff7a0`). No Form, Form Script, component, variable or inventory row was changed.
- **Runtime proof** (the operator viewed `t6-02`, `t7-02` and `t8-02` directly):
  - Before Refresh: heading Inventory, status Not loaded, Refresh data, empty-table text.
  - After one Refresh data: headline `2 of 3 items need reordering.`; legend 1 Out of Stock / 1 Low Stock / 1 In Stock; `128 units on hand in 3 items, 2 warehouses`; rows FX-ITEM-003 (0, Out of Stock, hazard gauge), FX-ITEM-002 (8 of 10, Low Stock), FX-ITEM-001 (120, In Stock).
  - Needs reorder filter: exactly FX-ITEM-003 and FX-ITEM-002.
  - Account header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` throughout.
- **Answers to the T9 questions** (sent as the operator note):
  - AC-3 is met: `Global object(s) were saved.` is the correct notice when only a global asset changes. The EXP-136 wording included Form changes.
  - The tab-selection gaps are a procedural deviation, not a failure.
  - The T2 recovery followed the operator-authorized route.
  - Persistence and screenshot evidence are sufficient for a UI asset.
  - The script policy is confirmed: zero evaluate and run_code calls in `harness-audit-T1`…`T9`.
- **Confinement:** checked by the operator with `git status`. The only new files are `evidence/EXP-139/` (52 files) and this record.
- **Qualifications:**
  - T1 hit a Designer session expiry; one recovery (T2) closed the expired tab and opened a fresh Designer, with no credential typed.
  - Refresh data and the filter were clicked by coordinates (T6 saw frame refs; T7 and T8 did not; unexplained).
  - The readback is content-presence only, not a byte comparison.
  - Each result was observed once.
- **Worker context (first run with `freshSessionAboveTokens` 100000):**
  - Fresh sessions started at about 41–43K.
  - Task end context: T1 124K, T2 123K, T3 148K, T4 181K, T5 194K, T6 153K, T7 111K, T8 84K, T9 234K.
  - T9 continued T8's session because T8 ended under 100K.

**Current status (after T9, run R-20261027-014540-dC5I, cycle 10, task T9; final evidence, action and confinement audit, no browser action): application actions reconciled against the controller tables. Budgets used: full-content fill 1/1; Edit Browser File OK 1/1; Web Assets OK 1/1; ordinary Designer Save 1/1; runtime-verification portal reload 1/1 (separate from the T2 recovery navigation); Refresh data 1/1; Needs reorder filter 1/1. AC-1, AC-2, AC-4, AC-5, AC-6 and AC-7 passed (AC-2, AC-4, AC-6 and AC-7 qualified). **AC-3 is pending operator disposition, not met as written:** the Save notice was `Global object(s) were saved.` without the expected `Form [FX_InventoryDashboard]` clause. AC-8 and AC-9 are supported with qualifications. No check is declared failed. Per-action tab-selection was not evidenced in T1, T2, T4 and T5 (controller order), with exceptions in T6, T7 and T8; see `evidence/EXP-139/T9-final-cumulative-audit.md`, section 6. Operator adjudication items are in that file, section 14. EXP-139 is NOT accepted, blocked or replay-verified; acceptance is an operator decision. Final audit: `evidence/EXP-139/T9-final-cumulative-audit.md`.**

**Superseded status (after T7, run R-20261027-014540-dC5I, cycle 8, task T7; single runtime Refresh data activation): AC-5 PASSED and AC-6 PASSED (on screenshot evidence; the Web User Control frame exposed no accessibility text). Exactly ONE Refresh data activation was performed, by a coordinate click at (990, 219) after the frame showed no accessibility reference (AGENTS.md last resort, recorded in `evidence/EXP-139/T7-runtime-refresh-summary.md`). Observed in `t7-02`: headline `2 of 3 items need reordering.`; legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`; `128 units on hand in 3 items, 2 warehouses`; status `Loaded 3 records at 02:16 AM`; rows FX-ITEM-003 (0 / reorder 5 / Out of Stock), FX-ITEM-002 (8 / reorder 10 / Low Stock), FX-ITEM-001 (120 / reorder 20 / In Stock), matching the EXP-135 baseline. No error, dialog or session prompt appeared. AC-7 (Needs reorder filter click) NOT yet evaluated: at most ONE filter click remains, reserved for the next task. Refresh data allowance: 1 of 1 used; no further activation. Budgets: fill 1/1 used; ordinary Designer Save 1/1 used; portal reload 1 used. EXP-139 is NOT accepted (formal acceptance is an operator decision). Tab-selection gap in T7: the screenshot `t7-00` had no tab-select immediately before it (disclosed).**

Earlier status (after T6, run R-20261027-014540-dC5I, cycle 7, task T6; runtime portal reload and pre-refresh baseline): AC-5 PARTIALLY ESTABLISHED. One top-level portal reload (beforeunload accepted once), Mongoose launched from the portal navigation search, and FX_InventoryDashboard opened at runtime through Form > Open (Select Form filter, row, OK). The account header reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The redesigned page is visible before Refresh with heading Inventory, status Not loaded, button Refresh data, the empty-table text `No stock loaded yet. Select Refresh data.`, the filter group and the search box (`t6-02`). Refresh data was NOT activated, no filter was clicked, and the Designer was not touched. AC-6 to AC-9 are not yet evaluated. Brief inconsistency for the coordinator: the bounded instruction step 5 says "Select Refresh data" but step 6 says "Do NOT click Refresh data in T6"; step 6 was followed. Tab-selection gaps: the beforeunload dialog was accepted without a separate select, and several selects were batched with their inputs (disclosed). Budgets after T6: fill 1/1 used; ordinary Designer Save 1/1 used; portal reload 1 used (no further reload without new authorization); Refresh data 1 remaining; Needs reorder filter at most 1 remaining. See `evidence/EXP-139/T6-runtime-baseline-summary.md`. EXP-139 is NOT accepted (formal acceptance is an operator decision).**

Earlier status (after T5, run R-20261027-014540-dC5I, cycle 6, task T5; read-only persistence check): AC-4 PASSED, qualified. After an ordinary close and reopen of FX_InventoryDashboard from the recent-forms list, the read-only Edit Browser File readback of `FX_Inventory/index.html` still shows the redesign (FX_InvHeadline, FX_InvFilters with All / Needs reorder / Out of Stock, FX_InvSearch, FX_InvGauge markup, the "No stock loaded yet" row, both WSForm bridge calls and the closing tags; no FX_InvCards), with Name `FX_Inventory/index.html`, Content `text/html`, Version `User version for user …`. Qualifications: content presence through the accessibility value, not a byte or SHA-256 comparison; ordinary close/reopen does not independently prove uncached server serialization. Both asset dialogs were cancelled once each; the Designer is clean (Save disabled); nothing was saved. The T4 Save-response discrepancy (`Global object(s) were saved.` without the Form clause) is retained and remains unresolved. Tab-selection compliance: a single tab select at the start of T5; no separate select before the later screenshots and inputs (recorded as an omission). See `evidence/EXP-139/T5-persistence-readback-summary.md`. Runtime steps (portal reload, runtime open, Refresh Data, filter click) are NOT performed and need a separate coordinator decision. Budgets: full-content fill 1 of 1 used; ordinary Designer Save 1 of 1 used; runtime portal reload, Refresh Data and filter click remain available. EXP-139 is NOT accepted (formal acceptance is an operator decision).**

Earlier status (after T4, run R-20261027-014540-dC5I, cycle 5, task T4; single asset fill and one ordinary Designer Save): the one full-content fill of `FX_Inventory/index.html` was performed with the flush-left source; the readback before OK showed the redesign start, middle and end; Edit Browser File OK and Web Assets OK were each pressed once without error; one ordinary Designer Save was performed with FX_InventoryDashboard active and returned `Global object(s) were saved.` (the brief's expected `Form [FX_InventoryDashboard] and global object(s) were saved.` was NOT shown; unresolved). Post-Save Designer state is clean (Save disabled). Persistence (close/reopen readback, AC-4), the portal reload, the runtime open, Refresh Data and the filter click are NOT yet performed. Budgets consumed: one full-content fill and one ordinary Designer Save (both used). Remaining: one runtime portal reload, one Refresh Data activation, at most one Needs reorder filter click. EXP-139 is NOT accepted (formal acceptance is an operator decision). See `evidence/EXP-139/T4-asset-fill-and-designer-save-summary.md`.**

Earlier status (after T3, run R-20261027-014540-dC5I, cycle 3, task T3; AC-1 read-only preflight): AC-1 PASSED. Account anton.ramos@3mworks.com.ph, configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT, Designer User scope, FX_InventoryDashboard loaded as the User version, and FX_Inventory/index.html (Content text/html, Version User) holding the EXP-136 page (FX_InvRefresh, four metric cards). Two read-only dialogs were cancelled; no content was changed, nothing was saved, and the runtime was not touched. The content fill, Designer Save, reopen, portal reload, runtime open, Refresh Data and filter click are NOT yet performed. Budgets preserved: one full-content fill, one ordinary Designer Save, one runtime Refresh Data activation, at most one Needs reorder filter click. EXP-139 is NOT accepted (formal acceptance is an operator decision).**

Earlier status (after T2): session RE-ESTABLISHED; AC-1 not yet performed.
Earlier status (after T1): BLOCKED at the session gate; preflight not completed.

## Objective

Replace the content of the existing Web User Control Asset `FX_Inventory/index.html` (created in EXP-136 T12) with the committed flush-left redesign `assets/FX_Inventory/index.flat.html` (commit `657720d`; operator-supplied SHA-256 `52e6ccd2aa293f61579cb5140501f68667c7613d6490cc3bf64b60874382a9d6`, not recomputed by the worker; same page as `assets/FX_Inventory/index.html` at commit `d8ff7a0` with leading whitespace removed).

Route (EXP-136 T12 precedent): Designer Edit > Web User Control Assets > `FX_Inventory/index.html` Content edit dialog > click in editor, Ctrl+A > one full-content fill > read back start and end before OK > Edit Browser File OK once > Web Assets dialog OK once. Then one ordinary Designer Save with `FX_InventoryDashboard` active, a Designer close and reopen readback, one portal reload, one runtime open, one Refresh Data activation and at most one `Needs reorder` filter click.

Brief commits: draft `eb44780`, approved `de4f4c2`. The brief itself lives under `tools/` and was not read by the worker, as instructed.

## Scope

- In scope: the content of the existing `FX_Inventory/index.html` only.
- Out of scope: the `FX_InventoryDashboard` Form Script, its `FX_InventoryControl` UserControl, layout, Caption, event handlers, the `FX_vInventoryJson` variable definition, `FX_InventoryItems` (table, IDO, rows), `FX_InventoryEditor`, all FX_Login assets, `FX_LoginPortal`, `FX_LoginUsers`, Mock objects, `FX_InventoryPrototype01`, the vendor IdoCollections Form and the built-in `$app` assets.
- Editing scope: User. Account `anton.ramos@3mworks.com.ph`. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## Acceptance checks (AC-1 to AC-9)

| AC | Subject | Status after T1 |
|---|---|---|
| AC-1 | Pre-mutation evidence: account, configuration, User scope, `FX_InventoryDashboard` User version, existing `FX_Inventory/index.html` (Content text/html, Version User) with EXP-136 content | **Passed (T3).** Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t3-10`); footer User scope (`t3-01`, `t3-09`); FX_InventoryDashboard title bar and Version `User version for us...` (`t3-03`, Name and Version truncated); asset Name, Content `text/html`, Version `User version for user …` (`t3-06`); EXP-136 content read-only (FX_InvRefresh, four metric cards, `t3-07`). See `evidence/EXP-139/T3-preflight-summary.md`. |
| AC-2 | One full-content fill of the flush-left source; readback start and end before OK; no leftover EXP-136 markup; Edit Browser File OK and Web Assets OK once each | **Passed (T4), qualified.** One fill (Ctrl+A first). Pre-OK readback (accessibility value, `t4-03`): start `<!DOCTYPE html>` and `../$app/scripts/UserControl.js`; redesign markers `FX_InvHeadline`, `FX_InvFilters`, `FX_InvGauge`; `WSForm.invoke("FX_LoadInventoryFromIDO"` and `WSForm.getVarValue("FX_vInventoryJson"` at source lines 342-343; end `</script> </body> </html>`; no `FX_InvCards` or metric-card markup. Edit Browser File OK once (dialog closed, no error); Web Assets OK once (dialog closed). **Qualified:** SHA-256 not recomputed (no shell); byte identity not established; accessibility readback collapses line breaks. |
| AC-3 | One ordinary Designer Save with `FX_InventoryDashboard` active; response and clean post-Save state | **Pending operator disposition (T9): not met as written.** `t4-06` viewed in T9 confirms the notice `Global object(s) were saved.` without the Form clause. One ordinary Save with FX_InventoryDashboard active. Response `Global object(s) were saved.` (info, no error). The expected `Form [FX_InventoryDashboard] and global object(s) were saved.` was **not** shown; unresolved (interpretation: Form definition unchanged). Clean post-Save state (`t4-06`): Save disabled, Undo disabled, no dialog. Server persistence not yet verified (AC-4). |
| AC-4 | After close and reopen, read-only readback still shows the redesign and Version User | **Passed (T5), qualified.** Form tab closed (ordinary close, no prompt) and reopened from the Form menu recent list (`t5-01`: FX_InventoryDashboard, User version, Save disabled, User footer). Web Assets > `FX_Inventory/index.html`: Name, Content `text/html`, Version `User version for user …`. Content Edit dialog read-only (`t5-02`, File and Content Type; editor scrolled to the end). Accessibility readback shows FX_InvHeadline, FX_InvFilters (All / Needs reorder / Out of Stock), FX_InvSearch, FX_InvGauge markup, the "No stock loaded yet" row, both bridge calls and `</html>`; no FX_InvCards. Both cancels once each; Designer clean (`t5-03`). **Qualified:** content presence only (no byte or SHA-256 check); ordinary close/reopen is a weak persistence boundary and does not prove uncached server serialization; the T4 Save clause remains unresolved. |
| AC-5 | After one portal reload, runtime `FX_InventoryDashboard` shows heading `Inventory`, status `Not loaded`, button `Refresh data`, empty-table text `No stock loaded yet. Select Refresh data.` | **Passed (T7).** Pre-refresh baseline from T6 (`t6-01` header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; `t6-02` redesign with Inventory, Not loaded, Refresh data, the empty-table text), re-confirmed in T7 before the input (`t7-00`, `t7-01`). The single Refresh data activation followed (one coordinate click at (990, 219); see AC-6). |
| AC-6 | One Refresh Data activation renders the expected summary and three rows | **Passed on screenshot evidence (T7).** One activation (coordinate click, no accessibility reference for the frame button). `t7-02` shows: headline `2 of 3 items need reordering.`; legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`; `128 units on hand in 3 items, 2 warehouses`; status `Loaded 3 records at 02:16 AM`; rows FX-ITEM-003 (0, reorder 5, Out of Stock), FX-ITEM-002 (8, reorder 10, Low Stock), FX-ITEM-001 (120, reorder 20, In Stock) in that order. **Qualified:** visual reading only; the frame's text was not exposed to the accessibility tree before or after the click. |
| AC-7 | At most one `Needs reorder` filter click shows FX-ITEM-003 and FX-ITEM-002 | **Passed on screenshot evidence (T8).** One Needs reorder activation (coordinate click at (482, 414), recorded fallback: the frame exposed no accessibility reference). `t8-02` shows `Needs reorder 2` active and exactly two rows in order: FX-ITEM-003 (0, reorder 5, Out of Stock) and FX-ITEM-002 (8, reorder 10, Low Stock); FX-ITEM-001 absent; summary unchanged. **Qualified:** visual reading only; no accessibility readback; backend non-change inferred from the unchanged load timestamp and summary. |
| AC-8 | No other object changed; `FX_InventoryItems` unchanged (read-only observation only) | **Supported with qualifications (T9).** The controller tables for T1-T8 show no action on any object other than `FX_Inventory/index.html` content (fill, OK, OK, Save) and no `FX_InventoryItems` action. Runtime values equal the EXP-135 baseline (`t7-02`, `t8-02`, screenshot readings). **Qualified:** observed action confinement only; no backend or database readback; the Save notice does not list the saved global objects. See `evidence/EXP-139/T9-final-cumulative-audit.md`, sections 7-8. |
| AC-9 | Final audit reconciling every action, changed objects and evidence inventory | **Reconciled in T9 (documentation).** Every fill, OK, Cancel, Save, close, reopen, portal reload, Refresh data and filter activation is mapped to a controller row in `evidence/EXP-139/T9-final-cumulative-audit.md` (sections 3-4). Changed objects: `FX_Inventory/index.html` content only (section 11). Evidence inventory: 34 screenshots and 9 worker summaries (section 2). **Qualified:** confinement assessed from reports; the operator's Git review is authoritative. |

## Task log

### T1 - Read-only preflight (2026-10-27)

Summary: `evidence/EXP-139/T1-preflight-summary.md`.

- Records and sources read before any browser action: `AGENTS.md`; EXP-136 status and T12, T16, T19 and T20-T23 checkpoints; EXP-138 status and Amendment A1 (T3 truncation lesson); `recipes/session/session-expiry-and-stale-designer.md`; `assets/FX_Inventory/index.flat.html` (382 lines, read in full).
- Tab list (read-only): tab 0 Web Client (runtime `FX_LoginPortal`, EXP-138 state); tab 1 Designer (`MGForm=FX_LoginPortal`). Tab 1 selected. Tab 0 not touched.
- Designer before the task's open: `FX_LoginPortal` active, User scope, Save disabled, clean.
- Form menu recent list contained `FX_InventoryDashboard`. Clicking it produced a `Session Expired` modal (`t1-01`); the Form was not confirmed open.
- Session-expiry procedure: modal OK clicked once. The tab then showed a Mongoose `Sign In` page with an empty password and an empty configuration, and the error `Error retrieving configuration info ... Invalid Configuration Name: G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-02`). The one permitted navigation was not used, because the rule applies only when no sign-in form appears in the tab. Sign-in in the Designer tab was not performed (stale-Designer recipe: re-login in the Designer is forbidden; operator reloads it).
- The Designer tab was left on the sign-in page for the coordinator, with nothing saved or changed.

### T2 - Session recovery (cycle 2, 2026-10-27)

Summary: `evidence/EXP-139/T2-session-recovery-summary.md`.

- Expired Designer (tab 1, Sign In page with the configuration error, `t2-01`) closed once. No credential typed in it.
- Retained portal tab (tab 0): one top-level navigation to the portal URL (the one recovery navigation). A `beforeunload` dialog was accepted once. The portal loaded to the System Administrator workspace with a live session ("Welcome back, Anton"); no CloudIdentities sign-in form appeared, so no credential was entered in T2.
- Portal banner (DistributionIFSContactUs) dismissed once with its ×. Portal navigation menu → search `Mongoose` → `Mongoose OS` clicked once.
- Mongoose configuration Sign In (combobox already `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, kept) clicked once. Web Client header verified (`t2-04`): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, no Form open.
- The toolbar control with tooltip "Open designer in a new window" (second Designer button; hover confirmed the tooltip, `t2-05`) clicked once. A fresh Designer opened as tab 1 with the Identify Your Editing Scope dialog (User). OK clicked once (User retained).
- Fresh Designer footer (`t2-06`): `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no Form open; Save disabled; no dialog.
- Stopped after verification. FX_InventoryDashboard not opened; no asset access; no fill; no Save; no runtime action; no further navigation or reload.
- Repository writes (T2): `evidence/EXP-139/T2-session-recovery-summary.md`; screenshots `evidence/EXP-139/t2-01-…png` to `t2-06-…png`; this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T3 - AC-1 read-only preflight (cycle 3, 2026-10-27)

Summary: `evidence/EXP-139/T3-preflight-summary.md`.

- Tabs listed; tab 1 (Designer) selected: no Form open, no dialog, Save disabled, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (`t3-01`). No session-expiry or sign-in dialog.
- `FX_InventoryDashboard` opened from the Form menu recent list (User version). Title bar `FX_InventoryDashboard`; Properties Version `User version for us...` (`t3-02`, `t3-03`). No Save.
- Edit > Web User Control Assets opened. Folder `FX_Inventory` expanded (keyboard ArrowRight on the selected tree row; its expander had no accessibility reference). Only child: `index.html`. Properties: Name `FX_Inventory/index.html`, Content `text/html`, Version `User version for user …` (`t3-04` to `t3-06`).
- Content edit dialog (Edit Browser File) opened for read-only inspection. The EXP-136 content was read from the editor's accessibility value (no scrolling, typing or JavaScript): FX_InvRefresh "Refresh Data", FX_InvStatus "Not loaded", four cards (FX_InvTotalItems, FX_InvTotalUnits, FX_InvLowStock, FX_InvOutOfStock), 7-column table, FX_InvTableBody, render/load script calling WSForm.invoke("FX_LoadInventoryFromIDO") and WSForm.getVarValue("FX_vInventoryJson"), ends `</html>` (`t3-07`).
- Edit Browser File **Cancel** (once): dialog closed, no change (`t3-08`). Web Assets dialog **Cancel** (once): dialog closed; Designer clean, Save disabled (`t3-09`).
- Web Client header read (`t3-10`): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Tab 1 left in the foreground.
- Observation: after the Edit Browser File Cancel, the tab URL no longer carried `MGForm=FX_InventoryDashboard`; the Form stayed displayed (title bar, Properties). Form identity was taken from the UI, not the URL.
- Repository writes (T3): `evidence/EXP-139/T3-preflight-summary.md` (new); screenshots `evidence/EXP-139/t3-01-…png` to `t3-10-…png`; this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T4 - single asset fill and one ordinary Designer Save (cycle 5, 2026-10-27)

Summary: `evidence/EXP-139/T4-asset-fill-and-designer-save-summary.md`.

- Preconditions (`t4-01`): tab 1 selected; FX_InventoryDashboard the only Form tab; User version; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled; no dialog. Committed source `assets/FX_Inventory/index.flat.html` read in full (382 lines) before any browser mutation; SHA-256 operator-supplied, not recomputed.
- Web Assets route: Edit > Web User Control Assets; folder `FX_Inventory` expanded (ArrowRight); `index.html` selected (Content `text/html`, Version `User version for user …`); Content edit dialog opened. Baseline readback = EXP-136 page (no `FX_InvHeadline`); stop condition not met (`t4-02`, filename typo `expX136`).
- Editor clicked once; `Control+a` once; **one full-content fill** of the flat source (`browser_type` with the complete text, no slow typing). Readback before OK (`t4-03`): start, redesign markers, both WSForm calls and end `</html>` present; EXP-136 markup absent. Accessibility-based, not byte-verified.
- **Edit Browser File OK** once: dialog closed, no error (`t4-04`). **Web Assets OK** once: dialog closed (`t4-05`).
- **One ordinary Designer Save** (toolbar Save, one click) with FX_InventoryDashboard active. Response: `Save` / `Global object(s) were saved.` (`t4-06`). The expected `Form [FX_InventoryDashboard] and global object(s) were saved.` was not shown; flagged. No error text. Post-Save: Save and Undo disabled, no dialog.
- Stopped after the Save observation: no close, reopen, Designer reload, portal navigation, runtime open, Refresh Data or filter click.
- Repository writes (T4): `evidence/EXP-139/T4-asset-fill-and-designer-save-summary.md` (new); screenshots `evidence/EXP-139/t4-01-…png` to `t4-06-…png`; this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T5 - read-only persistence verification, AC-4 (cycle 6, 2026-10-27)

Summary: `evidence/EXP-139/T5-persistence-readback-summary.md`.

- Tab list (read-only), then tab 1 selected once; fresh snapshot: FX_InventoryDashboard the only Form, User version, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save and Undo disabled, no dialog. `deny_browser_javascript`: no tool in this session sets or reads it; no browser JavaScript was run.
- Form closed via its tab close button (ordinary route): no prompt, Save disabled. Form reopened from the Form menu recent list (`t5-01`): FX_InventoryDashboard, Version `User version for user …`, Form Type Normal, Save and Undo disabled, User footer.
- Edit > Web User Control Assets; folder `FX_Inventory` selected and expanded; `index.html` selected: Name `FX_Inventory/index.html`, Content `text/html`, Version `User version for user …`.
- Content Edit dialog opened for read only. No click in the editor, no Ctrl+A, no typing, no OK. Readback by accessibility value (content presence, not byte-verified): redesign present (FX_InvHeadline, FX_InvFilters with All / Needs reorder / Out of Stock, FX_InvSearch, FX_InvGauge markup, "No stock loaded yet. Select Refresh data." row, `WSForm.invoke("FX_LoadInventoryFromIDO"` and `WSForm.getVarValue("FX_vInventoryJson"` in `load()`, document start with the UserControl.js include, end `</script> </body> </html>`). `FX_InvCards` absent. Screenshot `t5-02` (File, Content Type, editor scrolled to the end).
- Edit Browser File **Cancel** once (dialog closed, no error). Web Assets **Cancel** once (dialog closed). Snapshot and screenshot `t5-03`: FX_InventoryDashboard open, Save and Undo disabled, no dialog.
- Not performed: fill, OK, Designer Save, runtime, portal navigation, Refresh Data, filter click, coordinate clicks, changes to tab 0.
- Tab-selection omission: no separate tab-select before the T5 screenshots and inputs after the first selection (the tab list showed tab 1 as current each time). Earlier tasks' per-action compliance is not verifiable from this session and is not asserted.
- Repository writes (T5): `evidence/EXP-139/T5-persistence-readback-summary.md` (new); `evidence/EXP-139/t5-01-…png` to `t5-03-…png` (new); this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T6 - runtime portal reload and pre-refresh baseline, AC-5 partial (cycle 7, 2026-10-27)

Summary: `evidence/EXP-139/T6-runtime-baseline-summary.md`.

- Tab list (read-only); tab 0 (Web Client) selected; fresh snapshot: Web Client, no Form open, header `<SECRET_MONGOOSE_USERNAME> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Tab 1 (Designer) not touched.
- ONE top-level navigation to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`. A `beforeunload` dialog appeared and was accepted once. The portal loaded to the System Administrator workspace with a live session; no Session Expired modal and no CloudIdentities sign-in form.
- Portal banner `DistributionIFSContactUs` dismissed once with its × (its "here" link not clicked).
- Portal navigation: menu opened once; search `Mongoose` typed once; `Mongoose` result (OS) clicked once. This is in-portal navigation, not a second reload.
- No configuration Sign In control appeared, so no Sign In click. Header verified by screenshot `t6-01`: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no Form open.
- Form > Open (Form menu clicked once; Open clicked once). Select Form dialog: Filter filled once with `FX_InventoryDashboard` (the grid did not refresh); one `End` key press in the focused filter field refreshed the grid to one row; row clicked once; OK clicked once. Runtime Form opened (tab URL `favoriteContext=FX_InventoryDashboard`).
- Pre-refresh state (`t6-02`, accessibility tree): heading `Inventory`; status `Not loaded`; button `Refresh data`; headline `Refresh to load the latest stock levels.`; empty gauge; legend placeholders; filter group `Show items` (All pressed, Needs reorder, Out of Stock); search box; table row `No stock loaded yet. Select Refresh data.`. No populated row. The Web User Control exposed accessibility references, so no coordinate click was needed.
- Console error-level read (read-only): 5 errors, all `Permissions policy violation: unload is not allowed` from Mongoose scripts. The earlier portal page showed 0 errors; cause not established.
- Not performed: Refresh data activation; any filter click; runtime Save; Designer action; second navigation or reload; Sign In; coordinate clicks; browser JavaScript; credential entry.
- Brief inconsistency: bounded instruction step 5 ("Select Refresh data") versus step 6 ("Do NOT click Refresh data in T6"). Step 6 was followed.
- Tab-selection gaps (disclosed): the `beforeunload` acceptance had no separate select immediately before it; several selects were issued in the same tool-call block as their inputs, so their order was not guaranteed. Every following tab list and screenshot showed tab 0 as the current foreground Web Client; no wrong-tab input is observed.
- Repository writes (T6): `evidence/EXP-139/T6-runtime-baseline-summary.md` (new); `evidence/EXP-139/t6-01-web-client-after-portal-reload-header.png` (new); `evidence/EXP-139/t6-02-runtime-fx-inventorydashboard-pre-refresh-initial-state.png` (new); this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T7 - single runtime Refresh data activation, AC-5 and AC-6 (cycle 8, 2026-10-27)

Summary: `evidence/EXP-139/T7-runtime-refresh-summary.md`.

- Tab list (read-only); tab 0 (Web Client) selected; fresh snapshot: FX_InventoryDashboard open at runtime, pre-refresh (Inventory, Not loaded, Refresh data, No stock loaded yet). Screenshot `t7-00`: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Accessibility check for the Refresh data button: `find` "Refresh data" returned no matches; two untargeted snapshots and one snapshot targeted at the frame (`f1e89`) showed the Web User Control frame with no children. The T6 report had stated that the frame exposed references; this difference is recorded and not explained.
- Coordinate fallback (AGENTS.md last resort): screenshot `t7-01` confirmed the button at about x 925-1055, y 200-237; tab 0 re-selected separately; **one** click at **(990, 219)**. Refresh data activations: **1**.
- Passive wait 4 s; tab 0 selected; screenshot `t7-02`: populated summary and table as in the status block above. Console counter unchanged at 5 errors, 10 warnings; no dialog; no error text.
- Values match the EXP-135 baseline (FX-ITEM-001 120/20 FX-WH-A FX-LOC-01; FX-ITEM-002 8/10 FX-WH-A FX-LOC-02; FX-ITEM-003 0/5 FX-WH-B FX-LOC-03). The status labels are dashboard output; the status rule itself was not verified.
- Not performed: a second Refresh data activation; any filter click (Needs reorder, Out of Stock, All, search); runtime Save; portal reload; Form reopen; Designer action; asset inspection; any change to FX_InventoryItems or any other object.
- Tab-selection compliance: a separate tab-select preceded the coordinate click and the post-click screenshot. Gap: `t7-00` had no tab-select immediately before it (tab 0 was the foreground tab throughout; disclosed).
- Repository writes (T7): `evidence/EXP-139/T7-runtime-refresh-summary.md` (new); `evidence/EXP-139/t7-00-pre-refresh-tab0-fresh-state.png`, `t7-01-pre-refresh-tab0-reselected-fresh-before-click.png`, `t7-02-after-single-refresh-click-populated-summary-table.png` (new); this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T8 - single Needs reorder filter activation, AC-7 (cycle 9, 2026-10-27)

Summary: `evidence/EXP-139/T8-needs-reorder-filter-summary.md`.

- Tab list (read-only); tab 0 selected; fresh snapshot: FX_InventoryDashboard open at runtime, populated, no dialog, no session prompt, frame `f1e89` with no children. Pre-filter screenshot `t8-01`: `Loaded 3 records at 02:16 AM`, headline `2 of 3 items need reordering.`, legend 1/1/1, `128 units on hand in 3 items, 2 warehouses`, filter counts `All 3` (active) / `Needs reorder 2` / `Out of Stock 1`, three rows in the EXP-135 order.
- Accessibility check: the fresh untargeted snapshot showed no actionable reference for the filter button. The T7 `find`/iframe loop was not repeated. Coordinate fallback (AGENTS.md last resort): centre of the `Needs reorder 2` button at **(482, 414)**, taken from `t8-01`.
- Tab 0 selected separately immediately before the click; **one** click at (482, 414). Filter activations: **1**. Post-click: tab 0 selected separately; screenshot `t8-02`: `Needs reorder 2` active; exactly two rows FX-ITEM-003 (0 / reorder 5 / Out of Stock) and FX-ITEM-002 (8 / reorder 10 / Low Stock); FX-ITEM-001 absent; summary unchanged (`Loaded 3 records at 02:16 AM`, the same headline, legend and totals).
- Not performed: a second filter activation; All, Out of Stock or search activation; Refresh data activation; runtime Save; portal reload; Form reopen or close; Designer action (tab 1 untouched); asset inspection; session recovery; any change to FX_InventoryItems or any other object.
- Tab-selection compliance: tab 0 was selected separately before the click and before `t8-02`. **Deviation (disclosed):** the tab-select for `t8-01` was issued in the same parallel block as that screenshot, so its completion was not sequenced before the capture; tab 0 was the correct foreground tab in `t8-01`.
- Repository writes (T8): `evidence/EXP-139/T8-needs-reorder-filter-summary.md` (new); `evidence/EXP-139/t8-01-pre-filter-tab0-runtime-three-records.png`, `t8-02-after-single-needs-reorder-click-two-rows.png` (new); this record. Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### T9 - final evidence, action and confinement audit (cycle 10, 2026-10-27)

Summary: `evidence/EXP-139/T9-final-cumulative-audit.md`.

- No browser operation, navigation, authentication, form interaction, asset interaction, fill, Save, Refresh data or filter activation in T9. The Designer and Web Client were not accessed.
- Sources: this record; T1-T8 worker summaries; controller tables `evidence/EXP-139/harness-audit-T1.md` to `harness-audit-T8.md` (authoritative for call order); screenshots viewed as image files in T9 (`t7-02`, `t6-02`, `t7-00`, `t4-06`, `t4-03`, `t5-02`); `t8-01` and `t8-02` were viewed in the T8 pass of this worker session and were not re-viewed in T9. Git not accessed.
- Reconciled counts: fill 1, Edit Browser File OK 1, Web Assets OK 1, ordinary Designer Save 1, runtime-verification portal reload 1 (separate from the T2 recovery navigation), Refresh data 1, Needs reorder filter 1. Cancels: Edit Browser File 2 and Web Assets 2 (read-only inspections, T3 and T5).
- Discrepancies recorded (not resolved): (a) **tab selection** not evidenced immediately before most inputs and screenshots in T1, T2, T4 and T5 (controller order); T4 did not disclose it; (b) T6 controller order is sequential (select before input) while the T6 report says the selects shared a block with their inputs; (c) T8 controller order is sequential for `t8-01` while the T8 report says parallel; (d) T4 summary describes `t4-03` as the top of the editor, but the image shows the end; (e) the T2 recovery navigation was made on the retained tab 0 after the expired tab was closed, whereas the standing rule says to navigate "that tab"; (f) Grep path errors in T4 (two) and an invalid-regex `browser_find` in T1 (one), non-mutating; (g) `browser_type` flags: T2 one (portal search), T4 one (the intended fill), T6 two (portal search and Select Form filter).
- Changed objects reported: `FX_Inventory/index.html` content only. No other object change is reported. Designer global objects saved by the T4 Save are not enumerated by the notice (see the audit, section 11).
- Acceptance: AC-1, AC-2, AC-4, AC-5, AC-6 and AC-7 passed (qualified as recorded). AC-3 pending operator disposition (not met as written). AC-8 and AC-9 supported with qualifications. No check declared failed.
- Documentation changes (T9): `evidence/EXP-139/T9-final-cumulative-audit.md` (new); this record (status, AC rows, this entry, superseded labels on earlier status and open-item lines).

### Mutation ledger (cumulative through T8)

- T8 adds: Needs reorder filter activations 1 (coordinate click, the recorded last-resort fallback). Tab selections as listed in the T8 summary.
- T8 zero: Refresh data activations 0; other filter clicks 0; runtime Saves 0; portal navigations 0; reloads 0; Form opens or closes 0; Designer actions 0; Designer Saves 0; content fills 0; Edit Browser File OK 0; Web Assets OK 0; browser JavaScript 0; credentials typed or read 0; session recovery 0; `FX_InventoryItems` rows, Form Script, components, variables and other assets changed 0.
- Changed objects across the experiment: `FX_Inventory/index.html` content only (T4 fill). Runtime Refresh data (T7) and Needs reorder filter (T8) are client-side or runtime reads; neither edited data.
- Cumulative budgets after T8: fills 1 of 1 used; ordinary Designer Saves 1 of 1 used; portal reloads 1 used; Refresh data 1 of 1 used; Needs reorder filter click 1 of 1 used. No further application action is authorized in this experiment without a new operator decision.

### Mutation ledger (cumulative through T7)

- T7 adds: Refresh data activations 1 (coordinate click, the permitted last resort); tab selections as listed in the T7 summary.
- T7 zero: filter clicks 0; runtime Saves 0; portal navigations 0; reloads 0; Form opens or closes 0; Designer actions 0; Designer Saves 0; content fills 0; Edit Browser File OK 0; Web Assets OK 0; browser JavaScript 0; credentials typed or read 0; session recovery 0; `FX_InventoryItems` rows, Form Script, components, variables and other assets changed 0.
- Changed objects: `FX_Inventory/index.html` content only (T4 fill). T7 changed nothing.
- Cumulative budgets after T7: fills 1 of 1 used; ordinary Designer Saves 1 of 1 used; portal reloads 1 used; Refresh data 1 of 1 used (no further activation); Needs reorder filter click at most 1 remaining (reserved for the next task).

### Mutation ledger (cumulative through T6)

- T6 adds: top-level portal navigations 1 (the permitted runtime-verification reload); `beforeunload` accepted 1; portal banner dismissals 1; portal menu opens 1; portal search typed 1; Mongoose launches from the portal search 1; Form menu opens 1; Form > Open 1; Select Form filter fill 1; `End` key presses 1; Select Form row clicks 1; Select Form OK 1; runtime Form opens 1.
- T6 zero: configuration Sign In clicks 0; Refresh data activations 0; runtime filter clicks 0; runtime Saves 0; Designer actions 0; Designer Saves 0; content fills 0; Edit Browser File OK 0; Web Assets OK 0; coordinate clicks 0; browser JavaScript 0; credentials typed or read 0; `FX_InventoryItems` rows and other objects changed 0.
- Changed objects: `FX_Inventory/index.html` content only (T4 fill). T6 changed nothing.
- Cumulative budgets after T6: fills 1 of 1 used; ordinary Designer Saves 1 of 1 used; portal reloads 1 used (no further reload without new authorization); Refresh data 1 remaining; Needs reorder filter at most 1 remaining.

### Mutation ledger (cumulative through T5)

- T5 adds: Form close 1 (ordinary tab close); Form reopen 1 (recent list); Web Assets dialog open 1; Content edit dialog opened read-only 1; Edit Browser File Cancel 1; Web Assets Cancel 1; tree selections 2; keyboard expansion 1.
- T5 zero: Edit Browser File OK 0; Web Assets OK 0; Ctrl+A 0; editor clicks 0; content fills 0; Designer Saves 0; portal navigations 0; reloads 0; runtime opens 0; Refresh Data 0; filter clicks 0; runtime Saves 0; coordinate clicks 0; browser JavaScript 0; credentials typed or read 0.
- Changed objects: `FX_Inventory/index.html` content only (T4 fill). T5 changed nothing.
- Cumulative budgets after T5: fills 1 of 1 used; ordinary Designer Saves 1 of 1 used; runtime portal reload, Refresh Data (one) and Needs reorder filter click (at most one) remain available, pending a separate coordinator decision.
- Carried forward for the final audit: the T4 controller's browser_type flag corresponds to the single intended full-content fill; two failed Grep path lookups in T4 were non-mutating; the misnamed `t4-02-…expX136…png` remains (not deleted or renamed).

### Mutation ledger (cumulative through T4)

- Changed objects: `FX_Inventory/index.html` content only (the redesign source). No other object changed by the worker (Form Script, UserControl, layout, Caption, handlers, `FX_vInventoryJson`, `FX_LoadInventoryFromIDO`, FX_InventoryItems rows, FX_InventoryEditor, FX_Login assets, FX_LoginPortal, FX_LoginUsers, Mock objects, FX_InventoryPrototype01, IdoCollections, `$app` assets).
- T4 counts: full-content fills 1; Ctrl+A 1; editor click 1; Edit Browser File OK 1; Web Assets OK 1; ordinary Designer Save 1; Edit Browser File Cancel 0; Web Assets Cancel 0; Form opens 0; closes 0; reopens 0; Designer reloads 0; portal navigations 0; runtime opens 0; Refresh Data 0; filter clicks 0; runtime saves 0; browser JavaScript 0; coordinate clicks 0; credentials typed or read 0.
- Cumulative budgets after T4: fills 1 of 1 used; ordinary Designer Saves 1 of 1 used; runtime portal reload 1 remaining; Refresh Data 1 remaining; Needs reorder filter click at most 1 remaining.
- Repository writes (T4) also include an evidence filename typo (`t4-02-…expX136…png`); no delete tool was available to remove it.
- `deny_browser_javascript`: **unverified** (no tool in this session sets or reads it).

### Mutation ledger (cumulative through T1)

- Designer Save 0; fills 0; OK on editing dialogs 0; Cancel 0; Form opens confirmed 0; Form closes 0; reopens 0; portal reloads 0; runtime opens 0; Refresh Data activations 0; filter clicks 0; runtime Saves 0.
- Components, variables, assets, Captions, events, Form Script, `FX_InventoryItems` rows: 0 changed.
- Session: modal OK 1; sign-in attempts 0; navigations 0; credentials typed 0; credential values read or recorded 0.
- Browser JavaScript authored by the worker: 0. `deny_browser_javascript`: **unverified** (no tool in this environment sets or reads it; the same status as EXP-138 T1).
- Repository writes (T1): `experiments/EXP-139-fx-inventorydashboard-dark-theme-asset-replacement.md` (new, this record); `evidence/EXP-139/T1-preflight-summary.md` (new); `evidence/EXP-139/t1-01-designer-fx-inventorydashboard-opened-readonly.png` (screenshot; shows the Session Expired modal over FX_LoginPortal); `evidence/EXP-139/t1-02-designer-tab-after-session-expired-ok-signin-dialog.png` (screenshot; shows the Mongoose sign-in page). Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

### Mutation ledger (cumulative through T2)

- T3 (read-only) adds: Form opens 1 (`FX_InventoryDashboard`, User version); asset Content editor opened and cancelled 1 (read-only); Web Assets dialog Cancel 1; tree selections 2; keyboard tree expansion 1.
- T3 zero: content fills 0; Edit Browser File OK 0; Web Assets OK 0; Designer Saves 0; closes 0; reopens 0; portal reloads 0; runtime opens 0; Refresh Data activations 0; filter clicks 0; runtime Saves 0; navigations 0; browser JavaScript 0; sign-in attempts 0; credentials typed 0.
- Cumulative remaining budgets after T3: one full-content fill; one ordinary Designer Save; one runtime Refresh Data activation; at most one Needs reorder filter click (unchanged).
- Changed objects so far: none (the asset content is still the EXP-136 page).

- T1 totals unchanged, plus T2: Designer tab closes 1 (expired tab); top-level portal navigations 1 (recovery); reloads 0; `beforeunload` dialog accepted 1; banner dismissals 1; configuration Sign In clicks 1; Designer opened from the Web Client 1; scope dialog OK 1.
- Form opens 0 (FX_InventoryDashboard not opened); asset accesses 0; fills 0; Designer Saves 0; runtime Refresh Data 0; filter clicks 0; runtime Saves 0.
- Credentials typed 0; credential values read or recorded 0; browser JavaScript 0.
- Remaining budgets (unused): one full-content fill; one ordinary Designer Save; one runtime Refresh Data activation; at most one Needs reorder filter click.

## Knowledge state

- FX_InventoryDashboard opened as the User version from the Form menu recent list, and FX_Inventory/index.html read read-only (Content text/html, Version User, EXP-136 content): **observed** (one execution, T3).
- Web User Control Asset content readable through the Edit Browser File editor's accessibility value (no edit): **observed** (T3).
- Keyboard ArrowRight expands a Web Assets folder when its expander has no accessibility reference: **observed** (T3; non-mutating).
- Session recovery through a top-level portal navigation followed by the portal's Mongoose launch, the default-configuration sign-in and "Open designer in a new window" (fresh Designer with User scope): **observed** (one execution, T2).
- Session expiry on a Designer recent-list Form open (on the current tab state): **observed** (one execution).
- Post-OK state is a Mongoose configuration sign-in page in the Designer tab (not the Infor CloudIdentities form): **observed** (one execution).
- Source file structure (line positions of the bridge calls, `<!DOCTYPE html>` and the UserControl include): **observed** (read; not byte-compared).
- Web User Control Asset content replaced through one full-content fill in the Edit Browser File editor (Ctrl+A, then one fill), with the readback before OK checked through the accessibility value: **observed** (one execution, T4).
- Edit Browser File OK then Web Assets OK closes both dialogs without error: **observed** (one execution, T4).
- Designer toolbar Save with FX_InventoryDashboard active returned `Global object(s) were saved.` (not the brief's `Form [...] and global object(s)` text) and left Save disabled: **observed** (one execution, T4; the reason for the missing Form clause is **unresolved**).
- Persisted asset content after an ordinary Form close and reopen, by accessibility readback (content presence; Name, Content text/html, Version User): **observed** (one execution, T5). Qualified: not byte-verified; does not independently prove uncached server serialization.
- Portal top-level reload, portal-search launch of Mongoose, and Form > Open > Select Form (filter, row, OK) opening FX_InventoryDashboard at runtime with the redesign present before Refresh: **observed** (one execution, T6).
- Redesign visible in the runtime Web User Control before Refresh (`t6-02`): **observed** (one execution, T6). Served to a fresh runtime session, stronger than the Designer readback, but not byte-verified.
- Select Form filter: a programmatic fill did not refresh the grid; one `End` key press did: **observed** (one execution, T6).
- Runtime Web User Control accessibility references available (no coordinate fallback): **observed** at T6, but **contradicted at T7**: the frame exposed no children to `find` or to untargeted and targeted snapshots, so the Refresh data button was activated by a recorded coordinate click. Reason **unresolved**.
- Single Refresh data activation by coordinate click at (990, 219) after a fresh screenshot showing the button: **observed** (one execution, T7).
- Runtime dashboard after one Refresh data activation shows headline `2 of 3 items need reordering.`, legend 1/1/1, `128 units on hand in 3 items, 2 warehouses`, status `Loaded 3 records at 02:16 AM` and three rows in the stated order with the EXP-135 values: **observed** by screenshot only (one execution, T7). Not verified through the accessibility tree.
- Needs reorder filter activated once by coordinate click at (482, 414) after a fresh screenshot showing the button: the summary shows exactly FX-ITEM-003 and FX-ITEM-002, FX-ITEM-001 absent: **observed** by screenshot only (one execution, T8). Not verified through the accessibility tree; backend non-change inferred, not read back.
- Runtime frame accessibility exposure in T8: no actionable reference for the filter button in a fresh snapshot, matching T7 and differing from T6: **observed** (T8); the T6/T7 difference remains **unresolved**.
- Error-level console messages `Permissions policy violation: unload is not allowed` (5 at T6): **observed**; cause **unresolved**, not attributed to the dashboard asset.
- Server-side serialization of the asset content independent of the Designer session: **unverified**.
- Form-definition clause of the Save response (`Form [FX_InventoryDashboard] and global object(s) were saved.`): **unresolved** (T4 showed only `Global object(s) were saved.`; T5 did not request another Save).
- SHA-256 of `index.flat.html`: **unverified** (operator-supplied; the worker has no shell).
- `deny_browser_javascript` policy: **unverified** (no tool in this session sets or reads it).
- (Superseded: earlier T1 status.) Account header, FX_InventoryDashboard User version and existing asset content: **observed** at T3 (read-only), see the T3 knowledge entry above.
- Per-action tab-selection compliance: **not evidenced** for T1, T2, T4 and T5 inputs and screenshots in controller order; T6, T7 and T8 have the exceptions recorded in the T9 audit, section 6. **observed** (controller tables, T9).
- Save notice `Global object(s) were saved.` (T4 `t4-06`, viewed in T9): **observed**; the cause of the missing Form clause remains **unresolved**.
- Screenshot `t4-03` shows the editor's end, not its start as the T4 summary states: **observed** (T9).

## Open items and next permitted action

- After T9 (current): the final audit is complete (`evidence/EXP-139/T9-final-cumulative-audit.md`). No application action is authorized. Operator adjudication is requested on: AC-3 (Save notice without the Form clause); tab-selection compliance in T1, T2, T4 and T5 and the T6/T8 call-order conflicts; whether the T2 recovery navigation met the standing rule; the runtime frame accessibility difference T6 vs T7/T8; the `unload` console errors; the stored-content and SHA-256 equivalence (not established); whether ordinary close/reopen is sufficient persistence evidence; the misnamed `t4-02-…expX136…png` (not renamed or deleted); and final Git confinement. EXP-139 is NOT accepted, blocked or replay-verified.
- (Superseded by T9.) After T8: AC-7 passed on screenshot evidence. The single Needs reorder filter activation is consumed; no further application action is authorized. AC-8 (no other object changed) and AC-9 (final audit) are the remaining checks; AC-8 is supported by the ledger (only `FX_Inventory/index.html` content changed) and AC-9 is reconciled in the ledger above. Operator review items: (1) the Save response's missing `Form [FX_InventoryDashboard]` clause (unresolved); (2) the frame's accessibility exposure differed between T6 and T7/T8 (unresolved); (3) cause of the `unload` permissions-policy console errors (unresolved); (4) misnamed `t4-02-…expX136…png` (not renamed or deleted); (5) tab-selection gaps in T5, T6, T7 (step 5 of T7 screenshot) and T8 (`t8-01` parallel select); (6) `deny_browser_javascript` unverified; (7) whether ordinary close/reopen plus the runtime view is sufficient persistence evidence; (8) AC-6 and AC-7 are visual-only. EXP-139 is NOT accepted and no replay is claimed; formal acceptance is an operator decision.
- After T7: AC-5 and AC-6 passed (AC-6 on screenshot evidence). The single Refresh data activation is consumed. Next: the operator or coordinator decides whether the single Needs reorder filter click (AC-7; expected FX-ITEM-003 and FX-ITEM-002 only) is performed; it is client-side and changes no data. AC-8 and AC-9 remain for the final audit. Open items for operator review: (1) the Save response's missing `Form [FX_InventoryDashboard]` clause (unresolved); (2) the frame's accessibility exposure changed between T6 and T7 (unresolved); (3) cause of the `unload` permissions-policy console errors (unresolved); (4) misnamed `t4-02-…expX136…png`; (5) tab-selection gaps in T5, T6 and T7; (6) `deny_browser_javascript` unverified; (7) whether ordinary close/reopen plus the runtime view is sufficient persistence evidence. EXP-139 is NOT accepted (formal acceptance is an operator decision).
- Before T7 (superseded): AC-5 partially established (pre-refresh state verified at runtime; Refresh data deferred). Next: a coordinator decision on the single Refresh data activation (AC-6) and at most one Needs reorder filter click (AC-7). The worker must first resolve the step 5 / step 6 conflict in the T6 brief (whether Refresh data is performed); no second portal reload is permitted without new operator authorization. Open items for operator review: (1) the Save response's missing `Form [FX_InventoryDashboard]` clause (unresolved); (2) whether ordinary close/reopen plus the runtime view is sufficient persistence evidence; (3) `deny_browser_javascript` unverified; (4) misnamed `t4-02-…expX136…png`; (5) tab-selection gaps in T5 and T6; (6) the runtime console `unload` permissions-policy errors (cause unresolved).
- Before T6 (superseded): AC-4 passed (qualified). The runtime steps were then pending a coordinator decision; T6 has since performed the portal reload and runtime open (see above). Before any runtime step, the worker should first confirm the Designer tab is clean (Form open or closed, no dialog, Save disabled). Open items for operator review: (1) the Save response's missing `Form [FX_InventoryDashboard]` clause (unresolved); (2) whether ordinary close/reopen is sufficient persistence evidence or a stronger boundary is wanted; (3) the unverified `deny_browser_javascript` setting; (4) the misnamed `t4-02-…expX136…png` screenshot; (5) per-action tab-selection omission in T5 and the unverifiable compliance in T1–T4.
- Do not fill, Save or navigate again in this experiment without a new operator decision. The fill and the Save budgets are exhausted.
- The fill and the Save are both used; neither may be repeated in this experiment without a new operator decision.
- (Superseded, pre-T4.) AC-1 passed (T3). The next step was the single full-content fill of `assets/FX_Inventory/index.flat.html` into `FX_Inventory/index.html`, which the brief places under AC-2. It needs a separate authorization from the coordinator because T3 was read-only. Before it: a fresh snapshot of the Designer tab (tab 1: FX_InventoryDashboard open, Save disabled, no dialog); the EXP-136 page is still in the asset. The worker has not verified the operator-supplied SHA-256 of `index.flat.html`.
- (Superseded, pre-T4.) The runtime portal reload budget is not yet used by T2 (T2 used one recovery navigation only). Whether a later runtime portal reload is needed, and whether the runtime route needs its own authorization, is for the coordinator to confirm.
- (Superseded, pre-T4.) The content fill, Save, reopen, portal reload and runtime steps remained unauthorized until AC-1 passed in a later task.
- Replay verification and experiment acceptance: **not claimed** (operator review).
