# EXP-139 T9 - Final evidence, action and confinement audit

Run R-20261027-014540-dC5I, cycle 10, task T9, 2026-10-27. **Audit only.** No browser operation, navigation, authentication, form interaction, asset interaction, fill, Save, Refresh data activation or filter activation was performed in T9. Sources: the experiment record, the T1-T8 worker summaries, the controller-generated `evidence/EXP-139/harness-audit-T1.md` to `harness-audit-T8.md` (controller tool-call tables; authoritative for call order), and the saved screenshots listed in section 9 (read as image files, not inferred from filenames). Git was not accessed (workers have no Git access by design).

**Not declared:** experiment acceptance, blocked status or replay verification. Operator review is required.

---

## 1. Result of the audit (summary)

- The application outcome sequence is reconciled: one asset full-content fill, one Edit Browser File OK, one Web Assets OK, one ordinary Designer Save, one Form close and reopen, one runtime portal reload, one runtime Form open, one Refresh data activation and one Needs reorder filter activation. Every count matches the controller tables (section 3).
- Screenshot inspection supports: the T7 populated runtime state (three rows, classifications, headline, legend, totals, status) and the T4 Save notice with no Form clause and the T6/T7 pre-refresh state (viewed in T9); the T8 filtered state (exactly two rows, FX-ITEM-001 absent) was viewed in T8. Details in section 9.
- **AC-3 is not met as written:** the Save notice reads `Global object(s) were saved.`, not the expected `Form [FX_InventoryDashboard] and global object(s) were saved.`. Pending operator disposition.
- **Per-action tab selection was not evidenced for most inputs in T1, T2, T4 and T5** (controller order, section 6). This is a compliance gap against the brief's rule. No wrong-tab action was reported or established by the saved screenshots.
- AC-8 and AC-9 are supported with qualifications (sections 7 and 8). Repository confinement is assessed from reported writes only; the operator's Git review is authoritative.

---

## 2. Evidence inventory (repository files, as reported by the workers and the controller)

### 2.1 Worker summaries and experiment record
| File | Task | Status |
|---|---|---|
| `evidence/EXP-139/T1-preflight-summary.md` | T1 | written (worker) |
| `evidence/EXP-139/T2-session-recovery-summary.md` | T2 | written (worker) |
| `evidence/EXP-139/T3-preflight-summary.md` | T3 | written (worker) |
| `evidence/EXP-139/T4-asset-fill-and-designer-save-summary.md` | T4 | written (worker) |
| `evidence/EXP-139/T5-persistence-readback-summary.md` | T5 | written (worker) |
| `evidence/EXP-139/T6-runtime-baseline-summary.md` | T6 | written (worker) |
| `evidence/EXP-139/T7-runtime-refresh-summary.md` | T7 | written (worker) |
| `evidence/EXP-139/T8-needs-reorder-filter-summary.md` | T8 | written (worker) |
| `evidence/EXP-139/T9-final-cumulative-audit.md` | T9 | this file |
| `experiments/EXP-139-fx-inventorydashboard-dark-theme-asset-replacement.md` | T1-T9 | created in T1; edited by every task (documentation) |

### 2.2 Controller-generated audits (not worker prose)
`evidence/EXP-139/harness-audit-T1.md` through `harness-audit-T8.md`. Each records the tool name, key argument, result and order for every call in its task. The header counts (for example "33 actions, 26 reads") are the controller's own tallies and were not reproducible from the tables without the controller's classification; this audit uses the table rows.

### 2.3 Screenshots (per task)
| Task | Files |
|---|---|
| T1 | `t1-01-designer-fx-inventorydashboard-opened-readonly.png`, `t1-02-designer-tab-after-session-expired-ok-signin-dialog.png` |
| T2 | `t2-01` to `t2-06` (six files) |
| T3 | `t3-01` to `t3-10` (ten files) |
| T4 | `t4-01-designer-precondition-fx-inventorydashboard-clean.png`, `t4-02-edit-browser-file-baseline-expX136-before-fill.png` (**filename typo, see 4.2**), `t4-03-edit-browser-file-after-single-fill-before-ok.png`, `t4-04-after-edit-browser-file-ok-web-assets-open.png`, `t4-05-after-web-assets-ok-designer-pre-save.png`, `t4-06-after-single-designer-save-response-and-clean-state.png` |
| T5 | `t5-01-designer-fx-inventorydashboard-reopened-from-recent-clean.png`, `t5-02-edit-browser-file-readback-persisted-before-cancel.png`, `t5-03-after-both-cancels-designer-clean-no-save.png` |
| T6 | `t6-01-web-client-after-portal-reload-header.png`, `t6-02-runtime-fx-inventorydashboard-pre-refresh-initial-state.png` |
| T7 | `t7-00-pre-refresh-tab0-fresh-state.png`, `t7-01-pre-refresh-tab0-reselected-fresh-before-click.png`, `t7-02-after-single-refresh-click-populated-summary-table.png` |
| T8 | `t8-01-pre-filter-tab0-runtime-three-records.png`, `t8-02-after-single-needs-reorder-click-two-rows.png` |

Total screenshots: 2 + 6 + 10 + 6 + 3 + 2 + 3 + 2 = **34**.

### 2.4 Tool-written files (not worker-authored)
Snapshots and console logs written by the MCP tool under `evidence/playwright/` (for example `page-2026-10-26T17-46-06-291Z.yml`, `page-2026-10-26T18-20-07-986Z.yml`, `console-2026-10-26T18-16-10-380Z.log`). Their count was not enumerated in T9 and none was read in T9.

---

## 3. Cumulative action ledger (T1 to T8, controller order)

Row numbers refer to the controller tables in `harness-audit-Tn.md`. "Select" means `browser_tabs action=select`.

### T1 (controller rows 1-24)
- Read-only: list tabs; select tab 1 (row 8); snapshots; finds (one invalid-regex error at row 18, no effect).
- Row 10: click Designer Form menu. Row 12: click `FX_InventoryDashboard` in the recent-forms list. Result: `Session Expired` modal (`t1-01`); Form **not** confirmed open.
- Row 17: click the modal's **OK** once (standing session-expiry authorization). Result: Mongoose configuration Sign In page in the Designer tab with an invalid-configuration error (`t1-02`).
- No navigation, no typing, no sign-in, no Save, no fill. The expired Designer tab was left for T2.

### T2 (controller rows 1-51)
- Row 6: **browser tab close** of the expired Designer tab (tab 1). The worker summary records one close.
- Row 10: **top-level navigation** of the retained tab 0 to the portal URL `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (recovery navigation). Row 11: `beforeunload` dialog accepted once.
- Row 14: portal banner (DistributionIFSContactUs) closed with its own ×, once.
- Row 18: portal navigation menu opened, once. Row 23: `browser_type` of `Mongoose` into the portal navigation search (**controller-flagged `browser_type`**). Row 25: Mongoose OS result clicked once.
- Row 28: configuration Sign In clicked once with the default configuration kept (no credential field typed).
- Row 36: hover on the second Designer button (tooltip only). Row 39: click "Open designer in a new window" once. Row 40: new Designer tab selected. Row 42: scope dialog OK once (User retained).
- Result: Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; fresh Designer `ScopeType: User` (`t2-06`).

### T3 (controller rows 1-81)
- Read-only: Designer tab 1 selected (row 7); Form menu (row 8); click `FX_InventoryDashboard` in recent list (row 15) → **Form opened** (User version).
- Edit menu (row 21); Web User Control Assets (row 24); folder `FX_Inventory` clicked (row 30); ArrowRight keyboard expansion (row 36, non-mutating); `index.html` selected (row 40).
- Row 47: **Open Edit Property Dialog** for Content (read-only inspection). Row 54: **Edit Browser File Cancel** once. Row 60: **Web Assets Cancel** once. No OK pressed.
- Row 66: tab 0 selected; row 67 screenshot `t3-10` (header).
- Controller: prohibited hits 0, errors 0, flagged tools none.

### T4 (controller rows 1-50)
- Row 1 list; Read of the flat source and recipe; Grep rows 5-10 (**rows 6 and 7 failed**: `Path does not exist: experiments\EXP-136-*.md` and `EXP-138-*.md`; non-mutating). Row 11: select tab 1 (the **only** select in T4).
- Rows 14-21: Edit menu, Web User Control Assets, folder click, ArrowRight (row 19, non-mutating), `index.html` click.
- Row 23: Open Edit Property Dialog (Content) → Edit Browser File dialog opened. Row 25 screenshot `t4-02` (baseline, EXP-136 content).
- Row 26: editor clicked once. Row 27: **Control+a** once. Row 28: **`browser_type` once, full-content fill** (controller-flagged `browser_type`; the only one in T4).
- Row 30: screenshot `t4-03` (after fill, before OK). Pre-OK readback was by accessibility value (in the worker summary, not a screenshot of the start; see 9).
- Row 31: **Edit Browser File OK** once. Row 35: **Web Assets OK** once.
- Row 39: **toolbar Save** once (**the only ordinary Designer Save**). Row 41: screenshot `t4-06` of the response.
- Controller: prohibited hits 1 (the flagged `browser_type`, which is the intended fill), errors 2 (the Greps above).

### T5 (controller rows 1-36)
- Row 2: select tab 1 (the only select in T5 before the screenshots).
- Row 4: click FX_InventoryDashboard Form-tab close (**Form close**, no prompt). Row 9: click the recent-list item → **Form reopen**.
- Rows 12-21: Edit menu, Web User Control Assets, folder, ArrowRight (row 17), `index.html`, Open Edit Property Dialog (Content) — read-only.
- Rows 22-27: finds reading the editor value; row 28 screenshot `t5-02`.
- Row 30: **Edit Browser File Cancel** once. Row 34: **Web Assets Cancel** once. Row 36: screenshot `t5-03`.
- Controller: prohibited hits 0, errors 0.

### T6 (controller rows 1-88)
- Row 3: select tab 0. Row 5: **top-level navigation of tab 0 to the portal URL** (the T6 runtime-verification portal reload). Row 6: `beforeunload` dialog accepted once.
- Rows 11-22: banner × once (row 11); portal navigation menu (row 14); search textbox click (row 17); **`browser_type` `Mongoose` (row 19; flagged)**; `Mongoose` result (row 22).
- Rows 32-35: Form menu (row 32); **Form > Open** (row 35).
- Row 39: **`browser_type` into the Select Form Filter (row 39; flagged)**, value `FX_InventoryDashboard`. Row 44: **End** key once (grid refresh; no submit).
- Row 47: Select Form row clicked once. Row 50: Select Form **OK** once → **runtime Form opened**.
- Row 55: screenshot `t6-02`. Row 58: console read (error level). Row 29: screenshot `t6-01` (header).
- Controller: prohibited hits 2 (both flagged `browser_type`), errors 0. No Refresh data, no filter click, no runtime Save, no Designer action.

### T7 (controller rows 1-27)
- Row 2: select tab 0. Row 4: `find` for "Refresh data" (no match). Rows 3, 5, 8: snapshots (frame with no children).
- Row 6: screenshot `t7-00` (**not immediately preceded by a select**; see section 6). Row 10: screenshot `t7-01` after select (row 9).
- Row 13: **`browser_mouse_click_xy` at (990, 219)** — the single **Refresh data** activation (last-resort coordinate fallback). Row 14: passive wait.
- Row 16: screenshot `t7-02` after select (row 15).
- Controller: prohibited hits 0, errors 0.

### T8 (controller rows 1-21)
- Row 2: select tab 0. Row 3: snapshot. Row 4: select tab 0. Row 5: screenshot `t8-01` (see section 6 on ordering).
- Row 7: select tab 0. Row 8: **`browser_mouse_click_xy` at (482, 414)** — the single **Needs reorder** filter activation (last-resort coordinate fallback). Row 9: select tab 0. Row 10: screenshot `t8-02`.
- Controller: prohibited hits 0, errors 0. No other filter, no Refresh data, no Save.

### Chronological totals of application-affecting operations
| Operation | Count | Task / controller row |
|---|---|---|
| Session Expired modal OK | 1 | T1 row 17 |
| Expired Designer browser tab closed | 1 | T2 row 6 |
| Top-level navigation to portal URL | **2** (one recovery, one runtime reload) | T2 row 10; T6 row 5 |
| `beforeunload` dialog accepted | 2 | T2 row 11; T6 row 6 |
| Portal banner dismissals (own ×) | 2 | T2 row 14; T6 row 11 |
| Portal menu opened | 2 | T2 row 18; T6 row 14 |
| Portal search `Mongoose` typed (`browser_type`) | 2 | T2 row 23; T6 row 19 |
| Mongoose launched from portal search | 2 | T2 row 25; T6 row 22 |
| Configuration Sign In button clicked (default configuration kept; no credential typed) | 1 | T2 row 28 |
| "Open designer in a new window" click | 1 | T2 row 39 |
| Designer scope dialog OK (User) | 1 | T2 row 42 |
| Designer Form opens from recent list | 2 (T3 row 15; T5 row 9 reopen) | T3, T5 |
| Designer Form close (tab close button) | 1 | T5 row 4 |
| Asset Content dialog opened (read-only, Cancelled) | 2 (T3 row 47; T5 row 21) | T3, T5 |
| Asset Content dialog opened for the single fill | 1 | T4 row 23 |
| Editor click, Ctrl+A | 1 each | T4 rows 26, 27 |
| **Full-content fill (`browser_type`)** | **1** | T4 row 28 |
| **Edit Browser File OK** | **1** | T4 row 31 |
| **Web Assets OK** | **1** | T4 row 35 |
| **Ordinary Designer Save** | **1** | T4 row 39 |
| Edit Browser File Cancel | 2 (T3 row 54; T5 row 30) | T3, T5 |
| Web Assets Cancel | 2 (T3 row 60; T5 row 34) | T3, T5 |
| Runtime Form opened (Form > Open > Select Form) | 1 | T6 rows 35-50 |
| Select Form filter typed; End key; row click; OK | 1 each | T6 rows 39, 44, 47, 50 |
| **Refresh data activation (coordinate)** | **1** | T7 row 13 |
| **Needs reorder filter activation (coordinate)** | **1** | T8 row 8 |
| Other filter activations (All, Out of Stock, search) | 0 | — |
| Runtime Save | 0 | — |
| Designer Save (other than T4) | 0 | — |
| `FX_InventoryItems` edit / insert / delete | 0 | — (no audit row touches it) |
| Browser JavaScript / evaluate / run-code tool calls | 0 in any controller table | — |
| Credentials typed | 0 (the only `browser_type` values were the portal search text, the Select Form filter text and the asset fill) | — |

Note: the MCP wrapper lines "Ran Playwright code" in tool output are generated by the tool, not authored by the worker (each worker summary says so).

---

## 4. Budget reconciliation

| Budget | Allowed | Used | Evidence | Unexplained difference |
|---|---|---|---|---|
| Full-content fill | 1 | **1** | T4 row 28 (`browser_type`, the only one in T4); `t4-03` | None |
| Edit Browser File OK | 1 | **1** | T4 row 31 | None |
| Web Assets OK | 1 | **1** | T4 row 35 | None |
| Ordinary Designer Save | 1 | **1** | T4 row 39; `t4-06` | None (the response wording is an open issue, not a count issue) |
| Runtime-verification portal reload | 1 | **1** | T6 row 5 (navigate) + row 6 (beforeunload accepted) | None |
| T2 recovery navigation (separate from the runtime reload) | authorized separately | 1 | T2 row 10 | See 4.1 |
| Refresh data | 1 | **1** | T7 row 13 (coordinate) | None |
| Needs reorder filter | 1 | **1** | T8 row 8 (coordinate) | None |
| Asset Cancels (read-only) | not counted | 2 + 2 | T3 rows 54, 60; T5 rows 30, 34 | None |

### 4.1 Portal navigation reconciliation
Two top-level navigations went to the same portal URL: T2 (the authorized session recovery) and T6 (the runtime-verification reload). The brief says the runtime reload is separate from the T2 recovery navigation, and the controller agrees (two distinct rows, two tasks). **However**, the standing session-expiry rule says to navigate "that tab" (the tab where the modal or sign-in appeared) once. In T2 the expired tab was **closed** (row 6) and the navigation was made on the **retained tab 0** (row 10). The T2 summary cites an "operator's cycle-2 recovery authorization" that is not in the repository and was not read in T9. Whether this matches the authorized step is **for operator adjudication**.

### 4.2 Unexplained or unexpected counts
- **Two failed Grep calls in T4** (rows 6-7: non-existent path patterns `experiments\EXP-136-*.md` and `EXP-138-*.md`). Non-mutating. Recorded as errors, not as successful reads.
- **One invalid-regex `browser_find` call in T1** (row 18). No effect.
- **Filename typo** `evidence/EXP-139/t4-02-edit-browser-file-baseline-expX136-before-fill.png` ("expX136" should read "exp136"). An evidence filename error, not an additional Mongoose object. **Left untouched** (not renamed or deleted; no delete tool available).
- **Two `browser_type` calls in T6 and one in T2** that are not the asset fill: the portal search (`Mongoose`, both tasks) and the Select Form filter (T6). These are UI text inputs on the route the brief specifies ("Mongoose from the portal navigation search", "Form > Open") and do not write data. They are reported as controller flags, not as application mutations.
- **Keyboard inputs** not in the brief's named list: ArrowRight (T3 row 36, T4 row 19, T5 row 17; tree expansion), Ctrl+A (T4 row 27; select-all in the fill editor before the single fill), End (T6 row 44; grid refresh in the Select Form filter). None submits a dialog; none writes data.
- **Coordinate clicks** (T7 row 13, T8 row 8): permitted only as the AGENTS.md last resort. Recorded with coordinates and the preceding screenshot.

---

## 5. Controller tool flags and errors (complete)

| Task | Prohibited-tool hits (controller) | Flagged tool usage | Errors (controller) |
|---|---|---|---|
| T1 | 0 | none | 1: `browser_find` invalid regular expression (row 18; no effect) |
| T2 | 1 | `browser_type` 1 (portal search, row 23) | 0 |
| T3 | 0 | none | 0 |
| T4 | 1 | `browser_type` 1 (the intended single fill, row 28) | 2: Grep path lookups (rows 6, 7) |
| T5 | 0 | none | 0 |
| T6 | 2 | `browser_type` 2 (portal search row 19; Select Form filter row 39) | 0 |
| T7 | 0 | none | 0 |
| T8 | 0 | none | 0 |

No evaluate or run-code tool call appears in any table. The `deny_browser_javascript` policy itself is not visible in the tables (see section 10).

---

## 6. Tab-selection compliance (brief rule: select the intended tab before every screenshot or input)

The controller order was compared with the worker reports. Where they differ, both are recorded.

| Task | Controller order (immediately-preceding select) | Worker report | Assessment |
|---|---|---|---|
| T1 | One select (row 8) at the start; screenshot t1-01 (row 13), recent-list click (row 12), modal OK (row 17) and screenshot t1-02 (row 20) are **not** immediately preceded by a select (about 5 items) | Summary says "Tab selection (tab 1) before screenshots and inputs: Succeeded"; the per-action gaps are not disclosed | **Not compliant** in controller order; not disclosed as a gap |
| T2 | Selects at rows 3, 7 and 40 only; most screenshots, clicks, the navigation, the `beforeunload` accept and the type actions are **not** immediately preceded by a select (about 15 items) | No per-action claim; the summary does not disclose the gaps | **Not compliant** in controller order; not disclosed |
| T3 | A select immediately precedes every screenshot, click, key and finds that act (checked rows 7-69) | Consistent | **Compliant** in controller order |
| T4 | **One** select (row 11) before a sequence of about 18 inputs and screenshots (folder click, index click, Content dialog open, editor click, Ctrl+A, the **full-content fill**, both OK clicks, the **Save**, and screenshots t4-02 to t4-06) | The T4 summary does not record per-action selects and does not disclose these gaps; the T5 summary later observed that T4 selected tab 1 "before its first snapshot only" | **Not compliant** for the mutations in controller order. The screenshots show the Designer tab, so no wrong-tab action is evidenced |
| T5 | One select (row 2) at the start; the Form close (row 4), reopen click (row 9), the Edit/Web Assets clicks, the Cancels (rows 30, 34) and screenshots t5-01 to t5-03 are **not** immediately preceded by a select (about 14 items) | Disclosed as an omission (T5 summary, "Tab-selection account") | **Not compliant**, disclosed |
| T6 | Selects precede almost every input and screenshot (rows 8-58). Exceptions: the **navigation** (row 5, preceded by a select at row 3 and a snapshot) and the **`beforeunload` accept** (row 6) | Disclosed: the `beforeunload` accept had no separate select; "several selects were issued in the same tool-call block as their inputs, so their order was not guaranteed" | Controller order is **sequential** (select before input). The worker's "same block" statement conflicts with the controller order; both recorded. Exceptions as listed |
| T7 | Select precedes the coordinate click (row 12) and screenshot t7-01 (row 9) and t7-02 (row 15). **Exception:** screenshot t7-00 (row 6) follows snapshots only | Disclosed (t7-00 had no immediately preceding select) | **One gap**, disclosed |
| T8 | Controller order: select (row 4) **before** screenshot t8-01 (row 5); selects precede the click (row 7) and t8-02 (row 9) | Worker report says the select for t8-01 "was issued in the same parallel block" as the screenshot, so completion was not sequenced | Controller order and worker report **conflict** for t8-01. Both recorded; the screenshot shows tab 0 (Mongoose) in the foreground |

**Consequence.** The brief's per-action tab-selection rule was **not evidenced** for the T1, T2, T4 and T5 inputs and screenshots, and T6 has two exceptions. No wrong-tab screenshot or input is established: each saved screenshot shows the intended tab's content (section 9). The worker reports do not claim perfect compliance, but T1, T2 and T4 did not disclose the per-action gaps. The operator should treat tab-selection compliance for the mutations in T4 (the fill, OK, OK and Save) as **unverified in sequence**, though the outcomes were observed in the correct Designer tab.

---

## 7. Acceptance matrix (AC-1 to AC-9)

Status uses the experiment record's terms. "Qualified" means the stated limitations apply. No check is declared failed; AC-3 is pending operator disposition because it is not met as written.

| AC | Status | Observed | Evidence paths (method) | Limitations |
|---|---|---|---|---|
| **AC-1** | **Passed (T3)** | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; `FX_InventoryDashboard` User version (title bar, Version `User version for us…`); asset `FX_Inventory/index.html`, Content `text/html`, Version `User version for user …`; EXP-136 content (FX_InvRefresh, four metric cards) | `t3-01`, `t3-03`, `t3-06` (snapshot), `t3-07`, `t3-09`, `t3-10`. Method: screenshots plus accessibility readback of the editor value. T9 did not view `t3-01`, `t3-03`, `t3-06`, `t3-07`, `t3-09` or `t3-10` as images | Version and Name truncated in the Properties grid; identity from title bar, footer and menu. Editor readback collapses line breaks |
| **AC-2** | **Passed (T4), qualified** | One fill; pre-OK readback shows `<!DOCTYPE html>`, `../$app/scripts/UserControl.js`, redesign markers (FX_InvHeadline, FX_InvFilters, FX_InvGauge), `WSForm.invoke("FX_LoadInventoryFromIDO"` and `WSForm.getVarValue("FX_vInventoryJson"` inside `load()`, end `</script> </body> </html>`; no FX_InvCards. Edit Browser File OK once (row 31); Web Assets OK once (row 35); no error text | Accessibility readback (T4 summary item 7); `t4-03` viewed in T9: shows the **end** of the editor (`});` … `</script>`, `</body>`, `</html>`) with the File and Content Type fields, consistent with the end readback. `t4-04` and `t4-05` not viewed in T9 | **Start of content (`<!DOCTYPE html>`) is not shown by any image.** Discrepancy: the T4 summary describes `t4-03` as the "top of the editor"; the image shows the bottom. SHA-256 **not recomputed** (no shell); byte identity not established; line breaks collapsed in the readback |
| **AC-3** | **Pending operator disposition (not met as written)** | Exactly one ordinary Save (row 39) with FX_InventoryDashboard active. Response: `Save` / `Global object(s) were saved.` (info, no error). **Expected `Form [FX_InventoryDashboard] and global object(s) were saved.` not shown.** Post-Save: Save disabled, Undo disabled, no dialog | `t4-06` viewed in T9: notice text as stated; footer `ScopeType: User`; Save and Undo greyed; FX_InventoryDashboard tab visible | The reason for the wording difference is **not established**. The Form-definition clause is absent; T9 does not interpret it as Form serialization. No second Save may be performed |
| **AC-4** | **Passed (T5), qualified** | After ordinary close (row 4) and reopen (row 9), read-only readback shows FX_InvHeadline, FX_InvFilters (All / Needs reorder / Out of Stock), FX_InvSearch, FX_InvGauge markup, "No stock loaded yet. Select Refresh data." row, both bridge calls, `</html>`; no FX_InvCards. Name, Content `text/html`, Version `User version for user …` | `t5-01` (reopen, clean); `t5-02` viewed in T9: File `FX_Inventory/index.html`, Content Type `text/html`, editor at the end; `t5-03` (both Cancels, clean). The content markers are from the accessibility readback, not visible in `t5-02` | Content presence only; not byte or SHA-256 verified. Ordinary close/reopen is a weak persistence boundary and does not prove uncached server serialization. The Web Assets dialog may read the Designer session's copy |
| **AC-5** | **Passed (T6-T7)** | After one portal reload and runtime open, pre-refresh state: heading `Inventory`, status `Not loaded`, button `Refresh data`, empty-table text `No stock loaded yet. Select Refresh data.`; header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t6-02` and `t7-00` viewed in T9: both show the header, FX_InventoryDashboard title, Inventory, Not loaded, Refresh data, the empty-table text, empty gauge and placeholders. `t6-01` and `t7-01` not viewed in T9 | Single runtime portal reload (row 5). The frame's accessibility text was exposed in T6 and not in T7 or T8 (see section 10) |
| **AC-6** | **Passed on screenshot evidence (T7), qualified** | After one Refresh data activation (coordinate click at (990, 219), row 13): headline `2 of 3 items need reordering.`; legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`; `128 units on hand in 3 items, 2 warehouses`; status `Loaded 3 records at 02:16 AM`; rows FX-ITEM-003 (0 / reorder 5 / Out of Stock), FX-ITEM-002 (8 / reorder 10 / Low Stock), FX-ITEM-001 (120 / reorder 20 / In Stock), in that order | `t7-02` viewed in T9: confirms each of the above, the filter counts `All 3`, `Needs reorder 2`, `Out of Stock 1`, and the three rows with warehouse and location values FX-WH-B/FX-LOC-03, FX-WH-A/FX-LOC-02, FX-WH-A/FX-LOC-01 | Visual reading only; the frame's text was not in the accessibility tree before or after the click. The result is one runtime read through the Form's IDO load, per the committed Form Script (section 7.1) |
| **AC-7** | **Passed on screenshot evidence (T8), qualified** | After one Needs reorder activation (coordinate click at (482, 414), row 8): `Needs reorder 2` active; exactly FX-ITEM-003 (0 / 5 / Out of Stock) and FX-ITEM-002 (8 / 10 / Low Stock) in that order; FX-ITEM-001 absent; summary unchanged | `t8-01` (pre) and `t8-02` (post): viewed as images in T8 earlier in this worker session; **not re-viewed in T9**. T8 reading confirmed the filter state and the two rows | Visual only. No accessibility readback. Backend non-change inferred from the unchanged summary and load timestamp, not read back |
| **AC-8** | **Supported with qualifications** (section 8) | No inventory data written, no Form Script, component, variable, layout or other asset changed (by the reported action set); no `FX_InventoryItems` action in any controller table; runtime values match the EXP-135 baseline | Controller tables T1-T8 (sections 3 and 5); experiment record ledger; the committed Form Script's `LoadCollection` read (EXP-136 record) | Observed confinement of the actions performed, not an independent backend or database readback. The Save notice names "global object(s)" without listing them. See section 8 |
| **AC-9** | **Reconciled in this audit (documentation); confinement pending operator Git review** | Every fill, OK, Cancel, Save, close, reopen, portal reload, Refresh and filter activation is listed with its controller row (sections 3 and 4); changed objects and the evidence inventory are listed (sections 2 and 11) | This file; the experiment record | Repository confinement is assessed from the reported writes and controller tables only. Git was not accessed. The operator's Git review is authoritative |

### 7.1 Basis for the runtime data claim (AC-6, AC-8)
The committed Form Script source `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (described in the EXP-136 record, lines 12-15 and 29) calls `IDOClient.LoadCollection("FX_InventoryItems", …, 100)` and writes `ThisForm.Variables("FX_vInventoryJson")`. The Refresh path therefore reads the IDO collection and writes a Form variable. This is **the committed design, not a verified runtime trace**: T9 did not read the running Form Script, and no tool reports the IDO query. The T7 values match the EXP-135 baseline, which is the basis for "unchanged data" in AC-6 and AC-8.

---

## 8. AC-8 and AC-9 assessment (detail)

**AC-8 (no other object changed; FX_InventoryItems unchanged).**
- *Observed (action confinement):* the controller tables for T1-T8 contain no action that edits a Form Script, component, variable, layout, caption, handler, asset other than `FX_Inventory/index.html`, `FX_InventoryItems`, `FX_InventoryEditor`, the FX_Login assets, `FX_LoginPortal` or `FX_LoginUsers`. The only content-changing action is the T4 fill, followed by OK. Read-only asset opens were cancelled (T3, T5). The Designer Form tab was closed and reopened (T5), not edited.
- *Observed (values):* the T7 and T8 runtime values equal the EXP-135 committed baseline (FX-ITEM-001 120/20 FX-WH-A FX-LOC-01; FX-ITEM-002 8/10 FX-WH-A FX-LOC-02; FX-ITEM-003 0/5 FX-WH-B FX-LOC-03). These are screenshot readings.
- *Not independently verified:* that the rows themselves were unchanged in the database (no IDO or database readback was permitted); that the Save wrote only the asset. The Save notice says "Global object(s) were saved." without enumeration. The Designer was clean before the fill (`t4-01`, Save disabled), which suggests the asset was the only pending global change, but this is an inference, not a verified statement of what was written.
- *Not verified:* whether the Save touched any other stored object. `deny_browser_javascript` could not be verified.

**Conclusion for AC-8:** supported as observed action confinement and matching runtime values, with the backend non-mutation and the Save's written set **not independently verified**. Stronger integrity evidence than this does not exist in the record.

**AC-9 (final audit).** This file reconciles every fill, OK, Cancel, Save, close, reopen, portal reload, Refresh and filter activation to a controller row, lists the changed objects (section 11), and inventories the evidence (section 2). Limitations: the controller's own header tallies were not reproducible from its tables; some worker reports and controller tables disagree on call order (section 6); the confinement is assessed from reports, not Git.

---

## 9. Screenshot review

Images inspected as image files in T9 (not inferred from names). The first three rows (`t7-02`, `t6-02`, `t7-00`, `t4-06`, `t4-03`, `t5-02`) were viewed in T9. `t8-01` and `t8-02` were viewed as images in T8 earlier in this worker session and are listed here for completeness, not re-viewed in T9:

| File | What it shows | What it does NOT prove |
|---|---|---|
| `t7-02-after-single-refresh-click-populated-summary-table.png` | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_InventoryDashboard runtime; `Loaded 3 records at 02:16 AM`; headline `2 of 3 items need reordering.`; legend `1 Out of Stock`, `1 Low Stock`, `1 In Stock`; `128 units on hand in 3 items, 2 warehouses`; filter counts All 3 / Needs reorder 2 / Out of Stock 1; rows FX-ITEM-003 (FX-WH-B, FX-LOC-03, 0, reorder at 5, Out of Stock), FX-ITEM-002 (FX-WH-A, FX-LOC-02, 8, reorder at 10, Low Stock), FX-ITEM-001 (FX-WH-A, FX-LOC-01, 120, reorder at 20, In Stock) | That the click caused the change (the change is shown by `t7-00`/`t7-01` pre-state); the accessibility tree; stored bytes; backend query |
| `t8-01-pre-filter-tab0-runtime-three-records.png` | Same populated state before the filter; `All 3` active; `Needs reorder 2` | That the click was made |
| `t8-02-after-single-needs-reorder-click-two-rows.png` | `Needs reorder 2` highlighted; exactly two rows FX-ITEM-003 then FX-ITEM-002; FX-ITEM-001 absent; summary and timestamp unchanged | Backend non-change; accessibility readback |
| `t6-02-runtime-fx-inventorydashboard-pre-refresh-initial-state.png` | Header; FX_InventoryDashboard; Inventory; Not loaded; Refresh data; headline `Refresh to load the latest stock levels.`; empty gauge; legend placeholders `- Out of Stock` etc.; filter group All/Needs reorder/Out of Stock; `No stock loaded yet. Select Refresh data.` | Stored asset bytes; any post-refresh behaviour |
| `t7-00-pre-refresh-tab0-fresh-state.png` | Same pre-refresh state as `t6-02`, with header | That the click landed (see `t7-02`) |
| `t4-06-after-single-designer-save-response-and-clean-state.png` | Notice `Save` / `Global object(s) were saved.` (info); footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; FX_InventoryDashboard tab; Save and Undo greyed; no dialog | That the Form definition was or was not saved; that the server persisted the asset |
| `t4-03-edit-browser-file-after-single-fill-before-ok.png` | Edit Browser File dialog: File `FX_Inventory/index.html`, Content Type `text/html`; the editor scrolled to its **end** (`});` … `</script>`, `</body>`, `</html>`) | The **start** of the content (which is in the accessibility readback only). **Note:** the T4 summary describes this image as showing the top of the editor; it shows the end |
| `t5-02-edit-browser-file-readback-persisted-before-cancel.png` | Same dialog and end region as `t4-03` after reopen | The redesign markers in the middle or start (accessibility readback only) |

Images **not** inspected in T9 (their content is taken from the worker summaries only): `t1-01`, `t1-02`, `t2-01` to `t2-06`, `t3-01` to `t3-10`, `t4-01`, `t4-02`, `t4-04`, `t4-05`, `t5-01`, `t5-03`, `t6-01`, `t7-01`.

Observation: `t4-03` and `t5-02` show the same viewport (editor at the end), so `t5-02` adds no new visual content beyond `t4-03`.

---

## 10. Unresolved observations (preserved; not investigated in T9)

1. **Runtime frame accessibility exposure differed:** T6 reported accessibility references for the runtime Web User Control; T7 and T8 found the frame with no children. Cause **unresolved**.
2. **`unload` permissions-policy console errors** (five, error level, T6 row 58): cause **unresolved**. T7 and T8 did not re-read the console messages (T7 reported the counter unchanged at 5 errors, 10 warnings).
3. **Stored asset bytes and SHA-256 equivalence** of the installed content with `assets/FX_Inventory/index.flat.html` were **not independently established**. The SHA-256 was operator-supplied and not recomputed (no shell).
4. **Ordinary Designer close/reopen** is a weak persistence boundary (AC-4 qualification).
5. **`deny_browser_javascript`** could not be set or read by any worker. The controller tables show no evaluate or run-code call. This is **observed absence in the tables, not verification of the policy setting**. The "Ran Playwright code" lines are the MCP wrapper's own output.
6. **Save notice wording** (`Global object(s) were saved.` without the Form clause): **unresolved**.
7. **Tab-selection compliance** (section 6): not evidenced for T1, T2, T4 and T5 inputs; T6 exceptions; T7 `t7-00`; T8 call-order conflict.
8. **Whether the T2 recovery navigation matched the standing session-expiry rule** (section 4.1): operator adjudication.

---

## 11. Changed-object inventory (reported)

| Object | Change | Task | Basis |
|---|---|---|---|
| `FX_Inventory/index.html` (Web User Control Asset, User version) — **content only** | Replaced by one full-content fill of `assets/FX_Inventory/index.flat.html` (EXP-136 page removed) | T4 | Controller rows 28, 31, 35; T4 summary; `t4-03` |
| Designer global objects saved by the ordinary Save | The Save reported `Global object(s) were saved.` The asset is the only change the workers identified; the notice does not list the saved objects | T4 | Controller row 39; `t4-06`; inference from `t4-01` (Save disabled before the fill) is not verified |
| `FX_InventoryDashboard` Form (Script, UserControl, layout, Caption, handlers, Form variables) | **No change reported** | — | Controller tables; no Form edit action |
| `FX_vInventoryJson` variable definition, `FX_LoadInventoryFromIDO` method | **No change reported**. The Refresh path writes the Form variable at runtime (committed design) | — | Section 7.1 |
| `FX_InventoryItems` (table, IDO, rows), `FX_InventoryEditor` | **No change reported**; no action touched them | — | Controller tables |
| FX_Login assets, `FX_LoginPortal`, `FX_LoginUsers` | **No change reported** | — | Controller tables |
| Mock objects, `FX_InventoryPrototype01`, IdoCollections, `$app` assets | **No change reported**; the Web Assets folder list was viewed, not changed | — | `t3-04` (folder list) per T3 summary |
| Other Web User Control Assets or folders | **No create, rename or delete** reported | — | Controller tables |
| Runtime data (`FX_InventoryItems` rows) | **Not changed by any reported action** (one runtime IDO load per the committed design) | T7 | Section 7.1 |
| Runtime Web Client state | Refresh data (one) and the filter (one) are page-level or runtime reads | T7, T8 | Controller rows 13, 8 |

---

## 12. Repository confinement (assessed from reports; Git authoritative)

**Files written by workers (reported):** the experiment record; `evidence/EXP-139/T1-…md` to `T9-…md` (nine summaries, T9 included); the 34 screenshots in section 2.3; tool-written snapshots and console logs under `evidence/playwright/` (tool output). The controller also wrote `evidence/EXP-139/harness-audit-T1.md` to `harness-audit-T8.md`.

**Files read in T1-T9 (for reference only):** `AGENTS.md`; `experiments/EXP-136-…md`; `experiments/EXP-138-…md`; `recipes/session/session-expiry-and-stale-designer.md`; `assets/FX_Inventory/index.flat.html`; `experiments/EXP-135-…` (values, via T7); `experiments/EXP-130-…md` (Grep, read-only); `evidence/EXP-139/*`; screenshots.

**Limitation:** no Git status, diff or shell was available to the workers. The harness's before/after Git state is the authoritative confinement record. The operator's Git review at outcome is authoritative. Nothing in the reports indicates a write outside `evidence/EXP-139/`, `experiments/EXP-139-…md` or the unchanged FX_ application objects described above. A `tools/` path was not read by the workers (the brief forbids it).

---

## 13. Final browser state (as reported by T8; not accessed in T9)

- Tab 0: Mongoose Web Client, FX_InventoryDashboard open at runtime, populated (three records), `Needs reorder` filter active, two rows shown, no dialog, no session prompt (T8 report, `t8-02`).
- Tab 1: Designer, FX_InventoryDashboard open, clean, footer `ScopeType: User`, as last observed in T5/T6 (not touched in T7 or T8).
- No dialog open. No unsaved changes reported.

---

## 14. Operator-adjudication questions

1. **AC-3:** Accept the Save notice `Global object(s) were saved.` (without the Form clause) as meeting AC-3, or treat AC-3 as not met and require a further action? (No second Save may be performed in this experiment.)
2. **Tab-selection compliance:** Accept the T1, T2, T4 and T5 gaps (section 6) as a procedural deviation, or record them as failures against the brief's rule? T6 and T8 conflict between controller order and worker reports.
3. **T2 recovery navigation:** Did the navigation of the retained tab 0 (with the expired tab closed) satisfy the standing session-expiry rule, which says to navigate "that tab"?
4. **Runtime frame accessibility** (T6 vs T7/T8): is further investigation wanted? Not pursued in this experiment.
5. **Persistence sufficiency:** is ordinary close/reopen plus the runtime view enough for AC-4 and AC-5, or is a stronger boundary (byte or SHA-256 comparison, server-side readback) required? No further application action is authorized.
6. **Filename typo** `t4-02-edit-browser-file-baseline-expX136-before-fill.png`: keep or remove (not renamed or deleted by any worker).
7. **Save scope:** does the operator's review of the harness or Git diff show any object other than `FX_Inventory/index.html` written by the T4 Save?
8. **AC-6 and AC-7 visual-only:** is screenshot evidence sufficient, or is an accessibility or backend readback required?
9. **`deny_browser_javascript`:** can the operator confirm the policy setting from the harness configuration, since no worker could read it?
10. **Acceptance:** EXP-139 is **not** accepted, blocked or replay-verified in this audit. Acceptance is the operator's decision.

---

## 15. Stale experiment-record entries

The experiment record contains earlier status blocks and open items that were superseded by T4-T8 (for example, the pre-T4 "AC-1 passed; next step is the fill" item and the "runtime portal reload budget is not yet used" item). T9 marks them as superseded in the record rather than deleting them.
