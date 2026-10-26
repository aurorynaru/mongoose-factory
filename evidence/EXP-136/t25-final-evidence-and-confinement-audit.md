# EXP-136 T25 - Final evidence reconciliation, acceptance matrix and read-only repository audit

Run R-20261026-062909-9GoC, cycle 35, task T25. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User. Account and configuration as recorded in T1-T24 (`anton.ramos@3mworks.com.ph`; `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); not re-observed in T25.

## 1. Outcome and limits of this task

- **EXP-136 is NOT accepted.** Formal acceptance is an operator decision. This document reconciles the evidence; it does not accept the experiment.
- Dispositions after T25: AC-1 to AC-6 and AC-8 to AC-12 carried as passed at their accepted, qualified levels; **AC-7 PENDING**; **AC-13 PENDING** (this file is the reconciliation, not the acceptance).
- **No application interaction in T25.** No browser tool, Designer, Web Client, Refresh, Save, compile, inventory read, IDO or SQL access, script edit or asset edit was performed.
- **Tool limits in T25.** Available tools were Read, Grep, Glob, Edit and Write. No shell was available, so no Git command was run and no SHA-256 value was computed. The Read tool denies the `.git` directory (`File is in a directory that is denied by your permission settings`), so Git HEAD and index could not be read. Repository status below is the harness session-start snapshot (system context), not a fresh computation.
- **Files read in T25:** `AGENTS.md`; the full EXP-136 experiment record; `evidence/EXP-136/t16-single-designer-form-save.md`, `t23-single-coordinate-refresh-runtime-results.md` and `t24-post-test-inventory-source-comparison.md` (full); grep-level excerpts from T15-T21 reports; the controller audits `evidence/EXP-136/harness-audit-T1.md` to `harness-audit-T24.md` (headers, flagged-tool lines and error rows); `assets/FX_Inventory/index.html` and `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (full); the screenshots listed in section 3 (four viewed); `experiments/EXP-135-*.md` and `evidence/EXP-134/T5-checkpoint.md` (existence only).

## 2. Acceptance matrix (AC criteria as written in the brief; not rewritten)

| AC | Disposition after T25 | Decisive evidence | Qualifications and unresolved items | Operator decision that supports the disposition |
| --- | --- | --- | --- | --- |
| AC-1 | Passed (qualified) | `t4-fresh-designer-and-absence-gates.md`; `t4-global-objects-absence-dialog.png`; `t4-web-user-control-assets-absence-dialog.png`; `t6-select-form-dialog-FX_InventoryDashboard-zero-rows.png`; `t8-fresh-designer-after-launch-and-scope.png`; `t11-global-objects-dialog-precreate-absence.png`; `t12-web-user-control-assets-dialog-precreate-root-absence.png` | Identity: header and User footer observed T2-T24; configuration in header. Absence of `FX_vInventoryJson`: unfiltered Global Objects list, positive control `FX_vEcho` (and `FX_vLoginResult` in the sorted window, T11). Absence of `FX_Inventory`: Web Assets root level only, positive controls `FX_Bridge`, `FX_Login`. Absence of `FX_InventoryDashboard`: Select Form exact-name filter, zero rows, positive control `FX_InventoryEditor`. Gates that were incomplete or blocked (T1, T3, T7) are not relied on. | T8: operator accepted the T4 and T6 absence evidence as sufficient, with the root-level and no-filter qualifications. |
| AC-2 | Passed (operator-verified hashes; content re-read in T25; hashes not recomputed) | `assets/FX_Inventory/index.html` (71 lines): line 18 `FX_InvRefresh`, line 42 `In Stock` branch, lines 61-62 `WSForm.invoke("FX_LoadInventoryFromIDO")` then `WSForm.getVarValue("FX_vInventoryJson")`. `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (32 lines): line 12 `FX_LoadInventoryFromIDO`, line 15 `IDOClient.LoadCollection("FX_InventoryItems", properties, "", "", 100)`, lines 21-26 positional mapping, line 29 `ThisForm.Variables("FX_vInventoryJson")` write. | Hashes are operator-supplied (section 7); T25 could not compute them. The HTML was amended after brief approval (D-B, commit `13ac79d`); the earlier `53baed0a...cd21d` version emitted `OK` and is superseded. The C# retains D-A (`ThisForm.Variables`; Global-versus-Form storage unresolved). | D-A and D-B (T11). |
| AC-3 | Passed (qualified) | `t11-global-persistent-variable-creation.md`; `t11-global-objects-after-new-ok-properties.png`; `t11-global-objects-reopened-readback-cancel-pending.png`; `t19-fx-vinventoryjson-global-persistent-properties.png`; `t19-qualified-fresh-designer-ac9-readback.md` | Name exact; Global True; Persistent True; Version User; Value blank; one matching list row on reopen (T11). Design-time storage is supported only by the T16 Save message ("Form [FX_InventoryDashboard] and global object(s) were saved") and by the T19 readback in the same browser session. It is not established by a fresh document load. | None beyond the record. |
| AC-4 | Passed at operator-accepted qualified level; **full-content equality NOT established** | `t12-web-user-control-asset-creation.md`; `t12-web-user-control-asset-saved-readback-reopen.png`; `t19-edit-browser-file-index-html-readonly-readback.png`; `t19-web-asset-index-html-properties-readonly.png` | Token-level correspondence only. No export, hash or byte comparison. The accessibility readback collapses line breaks. The Save message does not itemise the asset. The Edit Browser File OK in T12 raised no error. | Operator acceptance of token-level correspondence (experiment record, T19 and T25 instruction). |
| AC-5 | Passed (qualified) | `t13-form-creation.md`; `t13-wizard-page2-save-template-unchecked-precommit.png`; `t13-caption-after-label-blur-readback.png`; `t13-script-language-visual-csharp-after-blur.png`; `t19-fxinventorydashboard-opened-identity-properties.png`; `t21-select-form-filtered-exact-name.png` | Name `FX_InventoryDashboard`; version User for `anton.ramos@3mworks.com.ph`; Form Type Normal; Caption `FX_InventoryDashboard` (committed by label blur, no Enter); Script Language Visual C#; Save Template unchecked at wizard page 2. "Exactly one": T21 exact-name Select Form returned one row (Filter By Name, Starts With off). T20 returned zero rows before the T21 relaunch (cause not established). In T20 the positive control `FX_Inventory` listed `FX_InventoryEditor` but not `FX_InventoryPrototype01` (cause not established). Version and Caption are clipped in screenshots; text came from readback. | T13 Save-state transitions unexplained. |
| AC-6 | Passed (qualified) | `t14-web-user-control-component-configuration.md`; `t14-component-100x30-layout-committed-readback.png`; `t14-edit-user-control-references-reopen-readback.png`; `t19-components-grid-after-pane-expand.yml`; `t23-post-click-after-3s-viewport.png` | One component, `FX_InventoryControl` (UserControl, Pane 0 Container 0; T16 and T19 Components grids show one row). Use Web Control checked; Control URL `FX_Inventory/index.html`; Web User Control Asset radio selected; Size `100; 30` Char. Runtime geometry: seven columns and three rows fit at the captured viewport (T23). The Designer size was not converted to pixels. User Control Name changed from `V(UserCtrl_userControl1_USER)` (T14-T16) to `V(UserCtrl_FX_InventoryControl)` (T19); cause not established. Form-level `UserCtrl*` variables present (section 4). | None beyond the record. |
| AC-7 | **PENDING (qualified)** | `t15-csharp-form-script-method-installation.md`; `t15-script-editor-compile-result-errors-grid.png` (worker-described); `t19-form-script-compile-errors-grid-readonly.png` (viewed in T25); `t19-form-script-compile-result-expanded-readonly.png`; `t23-single-coordinate-refresh-runtime-results.md` section 7 (functional evidence) | Method installed once and persisted (same session T15; after reopen T19, lines 18-36). Compile Result Output blank; Errors grid shows headers only (`Line`, `Column`, `Error`), no rows. No compile operation was observed; no positive or negative control exists. The brief's element "compilation result is captured" is not met. The T23 rendered result (`Loaded 3 records`) shows that the method ran and that `getVarValue` returned data. That is runtime behaviour, not compiler evidence. See section 10. | Pending operator adjudication (section 10). |
| AC-8 | Passed (observed) | `t16-single-designer-form-save.md`; `t16-before-save-form-identity-save-enabled.png`; `t16-after-single-save-snapshot.yml`; `t16-after-single-save-result-toast-clean-state.png` | One toolbar Save: one `POST .../DesignerSession/SaveChanges` returning 200, body `{"Success":true,"Message":"Form [FX_InventoryDashboard] and global object(s) were saved.","Payload":[]}`. Afterwards Save, Undo and Regenerate Form disabled; no dialog. The toast text is recorded from the accessibility tree and response body only; it is not visible in the viewport capture. Variable and asset creation and commit steps are separate ledger entries (section 5), not Designer Saves. | None beyond the record. |
| AC-9 | Passed (qualified; operator-accepted reload-in-place route) | `t17-fresh-designer-persistence-readback.md` (close; launch failed); `t18-fresh-designer-persistence-readback.md`; `t19-qualified-fresh-designer-ac9-readback.md`; `t19-fxinventorydashboard-opened-identity-properties.png`; `t19-form-script-compile-result-expanded-readonly.png`; `t19-web-user-control-assets-dialog-fx-inventory.png` | The literal route was not achieved. The split-button launch in T17 produced no new Designer, and was not repeated. (The same route did produce one new Designer in T8, before the target Form existed.) The operator accepted an in-place reopen of the saved Form from the recent list in Designer tab 1. Its precedent was corrected from "EXP-135 T5" (not found in the repository) to `evidence/EXP-134/T5-checkpoint.md`, which documents tab re-targeting in place. It does not document document replacement or a server fetch. T19 readbacks came from a Designer document in the same browser session, so client-side caching cannot be excluded. Unexplained: the post-click URL `MGForm=FX_InventoryEditor` on the Web Client tab (T17); tab 1 changed between T17 and T18 with no record of the change. | Operator must confirm or withdraw the reload-in-place qualification (T18 record, item 2). |
| AC-10 | Passed (qualified) | `t20-portal-reload-runtime-dashboard-pre-refresh.md` (F5 with no verified effect; exact Form not listed); `t21-portal-navigation-runtime-dashboard-pre-refresh.md`; `t21-runtime-fx-inventorydashboard-pre-refresh.png`; `t22-pre-refresh-webclient-state.png`; `t23-pre-click-viewport-fresh.png` | The brief asked for one controlled Portal reload. The record shows one F5 on the Web Client (T20; effect not established) and one operator-authorized top-level Portal navigation with a Mongoose relaunch (T21). The Form appeared only after the relaunch. Before the click: header account and configuration, URL `favoriteContext=FX_InventoryDashboard`, enabled Refresh Data, `Not loaded`, four `-` cards, empty table. The frame exposed the button in T21 and no children in T22 and T23 (cause not established). | Operator to accept the T20 F5 plus T21 navigation as the Portal-refresh step, or treat AC-10 as qualified (section 10). |
| AC-11 | Passed (observed; single activation; coordinate-click qualified) | `t23-single-coordinate-refresh-runtime-results.md`; `t23-post-click-after-3s-viewport.png` (viewed in T25); `t23-pre-click-viewport-fresh.png` | One native click at (397, 249). The post-click screenshot shows: header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab `FX_InventoryDashboard`; `Loaded 3 records`; cards 3, 128, 1, 1; FX-ITEM-001 (FX test widget, FX-WH-A, FX-LOC-01, 120, 20, In Stock); FX-ITEM-002 (FX test bracket, FX-WH-A, FX-LOC-02, 8, 10, Low Stock); FX-ITEM-003 (FX test gasket, FX-WH-B, FX-LOC-03, 0, 5, Out of Stock). Save greyed. | Coordinate click, with no accessibility reference for the button. The frame content is evidenced by screenshot only (no DOM text). One run; no repeatability. No database-level evidence. |
| AC-12 | Passed (qualified) | `t24-post-test-inventory-source-comparison.md`; `t24-fxinventoryeditor-post-refresh-readback.png` (viewed in T25); `t24-fxinventoryeditor-record3-detail-readonly.png` (viewed in T25); `t24-fxinventoryeditor-record2-detail-readonly.png` (worker-described) | Same-session UI readback of the runtime `FX_InventoryEditor` collection (one Select Form open, one native collection Refresh, two record selections). Viewed: `(Object 1 of 3)` with FX-ITEM-001 values; `(Object 3 of 3)` with FX-ITEM-003 values; Save greyed. Values match the T9 baseline wherever T9 displayed them and match the T23 dashboard on six properties. | Not a database query. Collection identity `FX_InventoryItems` carried from EXP-135 and not re-read in T24. Field labels inferred from panel order (captions not visible), corroborated by grid-cell order. T9 did not display the descriptions or locations of FX-ITEM-002 and FX-ITEM-003, so they have no baseline. No durability claim. |
| AC-13 | **PENDING** | This file; the experiment record; `evidence/EXP-136/harness-audit-T1.md` to `harness-audit-T24.md` | Ledger and evidence inventory are reconciled here (sections 4-8). Git confinement was not independently verified (no Git read in T25). Hashes not recomputed. Unexplained warnings are listed in section 9, without invented causes. Acceptance requires the operator's final disposition. | Operator review and final disposition. |

## 3. Decisive evidence inventory (images)

Viewed by the T25 auditor:

1. `t23-post-click-after-3s-viewport.png` - shows the account header, the `FX_InventoryDashboard` tab, `Loaded 3 records`, the metrics 3/128/1/1 and the three rows with the stated statuses. **Does not prove** the source records (AC-12), a server-side execution log, or compiler status. Values are read visually from the frame.
2. `t19-form-script-compile-errors-grid-readonly.png` - the Script Editor with the Compile Result panel, Errors tab selected, headers `Line`/`Column`/`Error` and no rows; the method body (lines 18-28, `IDOClient.LoadCollection("FX_InventoryItems", properties, "", "", 100)`) visible; the Designer shows `Char`, `100`, `30` and `V(UserCtrl_FX_Inv...)`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. **Does not prove** that a compile operation ran, that Output contains a result, or that the method compiled. The Output tab is not shown with content.
3. `t24-fxinventoryeditor-post-refresh-readback.png` - `FX_InventoryEditor` selected, `(Object 1 of 3)`, detail values `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`; Save greyed. **Does not prove** field captions or the collection identity.
4. `t24-fxinventoryeditor-record3-detail-readonly.png` - `(Object 3 of 3)`, `FX test gasket`, `FX-LOC-03`, `0.00`, `5.00`, `FX-WH-B`, `FX-ITEM-003`; Save greyed. Same limits.

Worker-described, not re-viewed in T25 (listed so the reviewer can attach them): `t15-script-editor-compile-result-errors-grid.png`; `t16-after-single-save-result-toast-clean-state.png` (the toast text is not visible); `t21-runtime-fx-inventorydashboard-pre-refresh.png`; `t22-pre-refresh-webclient-state.png`; `t23-pre-click-viewport-fresh.png`; `t24-fxinventoryeditor-record2-detail-readonly.png`; `t19-form-script-compile-result-expanded-readonly.png`. The reviewer may need these attached manually.

## 4. Application artifact manifest

| Object | Type and scope | Created (task) | Creation and readback evidence | Current readback | Notes |
| --- | --- | --- | --- | --- | --- |
| `FX_vInventoryJson` | Global variable; Global True; Persistent True; Version User; Value blank | T11 (one New, one dialog OK) | `t11-global-persistent-variable-creation.md` | T19 (Designer) | Named in the T16 Save message as part of "global object(s)". |
| `FX_Inventory/index.html` | Web User Control Asset; Content text/html; Version User; folder `FX_Inventory` created implicitly | T12 (one New OK; one Edit Browser File OK; one Web Assets dialog OK) | `t12-web-user-control-asset-creation.md` | T19 (read-only Edit Browser File; Cancel) | Token-level match to amended committed HTML (`13ac79d`). |
| `FX_InventoryDashboard` | Form; User version for `anton.ramos@3mworks.com.ph`; Classic BuildFromScratch; Form Type Normal; Script Language Visual C#; Caption `FX_InventoryDashboard`; Save Template unchecked; Size 120; 40 | T13 (one wizard Finish) | `t13-form-creation.md` | T19; T21 Select Form (one row) | Saved once (T16). |
| `FX_InventoryControl` | UserControl component on `FX_InventoryDashboard` (Pane 0, Container 0); Use Web Control; Control URL `FX_Inventory/index.html`; Size `100; 30` Char | T14 (one placement; one Name commit; one Control URL OK; one regenerate notice OK, Regenerate not clicked; Width and Height commits) | `t14-web-user-control-component-configuration.md` | T16, T19, T23 (runtime) | Name after Save: `V(UserCtrl_FX_InventoryControl)`. |
| `FX_LoadInventoryFromIDO` | Form Script method in class `FX_InventoryDashboard : FormScript` (namespace `Mongoose.FormScripts`) | T15 (one editor fill; one OK) | `t15-csharp-form-script-method-installation.md` | T19 (lines 18-36); T23 functional | Editor header keeps `using Mongoose.IDO.Protocol;` (absent from committed file; see section 9). |
| Form-level generated variables | `UserCtrl_FX_InventoryControl`, `UserCtrlAsm_FX_InventoryControl`, `UserCtrlUrl_FX_InventoryControl`, and `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_userControl1_USER`; Form - Persistent | Not created by a worker operation | Absent in the T16 same-session Variables view ("Form-level variable category absent"); present in T19 | T19 (Designer) | Origin not established (section 9). Not removed, per brief. |

Existing objects read, opened or listed (no modification recorded):
- `FX_InventoryEditor` (runtime opened in T9 and T24; the Designer tab showed it loaded in T16-T18). Open-only; no Save.
- `IdoCollections` (system Form; opened in T9; closed after a read). A keystroke sequence was typed into the Filter-in-Place criteria cell; its destination is unresolved (section 9).
- `FX_InventoryPrototype01`: observed absent from one filtered list (T20) only.
- Global Objects and Web Assets were listed (`FX_vEcho`, `FX_vLoginResult`, `ccvw_*`; roots `$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi`). No record states that any Mock artifact was opened.
- `FX_InventoryItems` and its three records: read-only (T9 and T24 through `FX_InventoryEditor`); no write.

Save count: **one** ordinary Designer Save (T16), across T1-T24.

## 5. Cumulative application-action ledger (T1-T24)

| Task | Application mutations | Designer, Web Client and lifecycle actions | Source of record |
| --- | --- | --- | --- |
| T1 | None | None | T1 record |
| T2 | None | None | T2 record |
| T3 | None | None (Edit menu did not render; Error dialog left open on tab 1) | T3 record |
| T4 | None | Designer launch (1 click), scope OK (1, pre-set), Edit probe, Global Objects and Web Assets dialogs opened and cancelled; session procedure: Session Expired modal OK (1), top-level navigation to Portal URL (1), beforeunload accepted (1), banner dismissed (1) | T4 record |
| T5 | None | None | Controller audit: 0 actions |
| T6 | None | Mongoose launched from Portal menu (session continuation; no sign-in form); Select Form zero rows; Cancel (1) | T6 record |
| T7 | None | None (stopped; one repository search) | T7 record |
| T8 | None | Designer tab cleanup: 4 tab closes (operator-authorized); Designer launch (1); scope OK (1); Edit probe | T8 record |
| T9 | None (no Save) | Select Form `FX_InventoryEditor` (OK 1); collection Refresh (1, read); `IdoCollections` opened and closed (read); keystrokes typed into IDO Filter-in-Place cell, destination unresolved | T9 record |
| T10 | None | None (repository audit only) | T10 record |
| T11 | `FX_vInventoryJson` created (1 New; 1 dialog OK) | None | T11 record |
| T12 | `FX_Inventory/index.html` created (1 New OK); content committed (1 Edit Browser File OK); Web Assets dialog OK (1, dialog-level) | None | T12 record |
| T13 | `FX_InventoryDashboard` created (1 wizard Finish); Caption committed (1); Script Language changed (1) | None | T13 record |
| T14 | `FX_InventoryControl` placed (1); Name committed (1); Control URL OK (1); Width and Height committed (2); regenerate notice OK (1; no Regenerate) | None | T14 record |
| T15 | `FX_LoadInventoryFromIDO` installed (1 editor OK) | Script Editor opened twice (one OK, one Cancel) | T15 record |
| T16 | None | **One Designer Save** (`SaveChanges` 200, Success true) | T16 record |
| T17 | None | Form tab close (1; no prompt); split-button Designer launch click (1; no Designer produced); screenshot timeout | T17 record |
| T18 | None | Designer F5 (1; effect not established) | T18 record |
| T19 | None | Form reopened from recent list (1); five dialogs cancelled; Script Editor read-only; Edit probe (2); no OK in T19 | T19 record |
| T20 | None | Web Client F5 (1; effect not established); Select Form zero rows; Cancel (1); Form-menu list read | T20 record |
| T21 | None | `beforeunload` accepted (1; empty); banner dismissed (1); Portal navigation menu search and Mongoose launch; top-level Portal navigation (1); Select Form exact row and OK (1); runtime `FX_InventoryDashboard` opened | T21 record |
| T22 | None | Tab selections (3); Designer snapshot (1); one repeated identical snapshot (process deviation) | T22 record |
| T23 | None | **One Refresh Data activation** (native coordinate click) | T23 record |
| T24 | None (no edit, insert, delete or Save) | `FX_InventoryEditor` Select Form OK (1); collection Refresh (1, read; not the dashboard control); record-number selections (2) | T24 record |

Summary of counts from the records: 3 Form-level creations (variable, asset, Form), 1 component, 1 script method, 1 Designer Save, 1 Form close, 1 successful Designer-tab relaunch in T8 (before the target Form existed), 1 failed Designer launch (T17), 1 dashboard Refresh Data activation, 0 inventory writes, 0 runtime Saves, 0 event handlers, 0 Regenerate Form, 0 FormSync, 0 unloads, 0 deployments, 0 cache clearing. Non-FX application mutations: none recorded.

## 6. Browser, session and recovery ledger

- **Session.** One documented session-expiry procedure, begun in T4 and completed in T6 (the session was re-established at visible-identity level). No sign-in form appeared, so no SECRET placeholder was typed in T4, T6 or T21. T21 sign-in count 0. No credential was read, typed or disclosed in any record. T4 controller errors contain a usage-limit message ("You've hit your session limit · resets 8am"); the T4 record states that the task finished as a report after the reset.
- **Reloads and navigations.** F5 on Designer tab (T18, effect not established); F5 on Web Client (T20, effect not established); top-level Portal navigation (T4, session procedure; T21, operator-authorized). `beforeunload` prompts accepted: 2 (T4 and T21; both empty).
- **Keystroke and key presses.** Enter presses: 0 in every record (Caption committed by label blur). Control+A and Backspace used in filter fields only.
- **Browser JavaScript.** 0 in every record. The evaluate and run-code tools were not used.
- **Coordinate click.** 1 (T23, Refresh Data, screenshot-verified).
- **Recovery actions.** Ref-not-found errors: 1 (T4, Portal navigation-menu click; the T4 record states the recovery allowance was then spent and the session step stopped there). Other recoveries recorded as corrected inspections (T1 Form-menu click, corrected attempt succeeded). T22 repeated an identical untargeted snapshot after an empty frame read (process deviation). T23 issued one tab selection and one untargeted snapshot in the same tool block (both non-mutating; process note).
- **Controller-flagged `browser_type` calls.** 21 across T4-T24: T4 1, T6 2, T9 3, T11 1, T12 2, T13 2, T14 3, T15 1, T20 3, T21 2, T24 1. The flagged calls are typed inputs: name fields (`FX_vInventoryJson`, `FX_Inventory/index.html`, the Form name, the component name), the Caption inline input, inline Width and Height values, the Script Editor and Edit Browser File content (permitted per brief: committed C# and HTML source), filter and search fields (Global Objects, Select Form, portal search), and one IDO Filter-in-Place criteria cell (T9). The controller's string capture is empty (`Exact values: []`), so typed strings can be confirmed only from the worker records. **No demonstrated prohibited behaviour.** The one call whose destination is unresolved is the T9 IDO Filter-in-Place keystroke (section 9).
- **Tool and tooling errors (not application failures).**
  - T1: Read of the experiment record before it existed (`File does not exist`); two screenshot timeouts ("fonts loaded", 5 s); Form-menu click locator timeout (corrected attempt succeeded).
  - T4: Open-toolbar click locator timeout (x-mask overlay); Ref e15 not found; session-limit message (section above).
  - T7: Ripgrep search timed out after 20 s.
  - T13: a find and a snapshot exceeded token limits and were saved to tool-result files; a later Grep of one saved file was denied by the permission settings.
  - T14: a browser click failed at CSS-selector parsing (empty selector, "Details panel header").
  - T17: screenshot timeout ("fonts loaded").
  - T18: Grep path guessed as `experiments/EXP-135-fx-inventoryeditor-classic-multiview-form-on-the-existing-fx-inventoryitems-ido.md`; the file does not exist under that name. The actual file is `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md`.
  - T20: Grep path `experiments/EXP-130-*.md` (wildcards are not accepted in the path parameter).
- **Dialogs.** No browser-native dialog was accepted except the two `beforeunload` prompts above. The T14 regenerate notice (in-page, OK) was dismissed without regeneration. No unsaved-change prompt was reported. The Designer tab 1 Error dialog from T3 was closed with the T8 tab cleanup.

## 7. Source comparison and integrity (AC-2)

| Item | Committed path | Present (T25) | Content checked (T25) | Reference SHA-256 in brief (not measured) | Measured in T25 |
| --- | --- | --- | --- | --- | --- |
| HTML | `assets/FX_Inventory/index.html` | Yes; 71 lines | Dashboard (title, heading, `FX_InvRefresh`, four cards, table); line 42 `In Stock` branch; lines 61-62 bridge calls | `e8f162c5b35a07b6f277423e6c0938ba4ef464d69c20cd8ffc87c02537972fb6` (operator-verified at `13ac79d`) | No |
| C# Form Script | `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` | Yes; 32 lines | Namespace `Mongoose.FormScripts`; class `FX_InventoryDashboard : FormScript`; `//<Ref>Newtonsoft.Json.dll</Ref>` (line 6); method `FX_LoadInventoryFromIDO` (line 12); six `FX_*` properties (line 14); `LoadCollection("FX_InventoryItems", ..., "", "", 100)` (line 15); positional mapping (lines 21-26); `ThisForm.Variables("FX_vInventoryJson").Value` (line 29) | `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f` (operator-verified; unchanged) | No |

- Superseded HTML hash `53baed0a...cd21d` (commit `d4b99db`) emitted `OK` for healthy stock; superseded by the amendment `13ac79d` (D-B) with `In Stock`.
- The session-start status snapshot lists no change under `assets/`, so the working copies matched HEAD at that snapshot. This is not a fresh measurement.
- **Source assumptions carried (not tested):** (1) `ThisForm.Variables` for a Global variable (EXP-130 U-1; `docs/mongoose/guides/scripts.md` routes Global variables through `Application.Variables`); retained under D-A; the T23 round trip is one run of evidence. (2) `LoadCollection` argument meanings carried from earlier evidence. (3) Null quantity converted to 0 by `parseFloat(...) || 0` and counted as Out of Stock (no test). (4) Positional mapping by index. (5) No sort; the observed order (FX-ITEM-001, -002, -003) is consistent with primary-key order but not verified. (6) The Mock reference (`evidence/EXP-128/assets/MockInventory_index.html.txt`) emits `In Stock`; the reason the committed file emitted `OK` before the amendment is not recorded.
- Brief reference hashes were operator-supplied values. They are not measured results.

## 8. Repository and Git confinement

- **Git was not read in T25.** No Git command was available, and `.git` is denied to the Read tool. Branch and HEAD values come from the session-start snapshot: branch `claude-harness`; recent commits `13ac79d` (HTML amendment), `c85c51a` (approved brief), `c25d8cc` (draft brief), `d4b99db` (reference sources), `d85a29c` (EXP-135).
- **Session-start status snapshot (not recomputed):**
  - Modified, pre-existing and unrelated to EXP-136: `tools/claude-harness/README.md`, `harness.config.example.json`, `src/cli.ts`, `src/config.ts`, `src/controller/handoff.ts`, `src/controller/machine.ts`, `src/testing/fakes.ts`.
  - Untracked, pre-existing and unrelated to EXP-136: `tools/claude-harness/briefs/EXP-119.brief.json`, `tools/claude-harness/src/usage.ts`, `tools/claude-harness/test/session-policy.test.ts`, `tools/claude-harness/test/usage.test.ts`.
  - Untracked, EXP-136: `evidence/EXP-136/` (directory entry; the snapshot does not enumerate its files) and `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md`.
  - Not in the snapshot: `assets/` (no change). `evidence/playwright/` is ignored by `.gitignore` (lines 10-11, with `.playwright-mcp/`). `evidence/EXP-134/T5-checkpoint.md` is not untracked and is treated as pre-existing (cited as a precedent only).
- **Files written by EXP-136 workers (per the records):** `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md`; the worker-written files under `evidence/EXP-136/` (T1-T25); the controller-generated `evidence/EXP-136/harness-audit-T1.md` to `harness-audit-T24.md` (harness output); tool-generated snapshot and console files under `evidence/playwright/` (ignored by Git). In T25 the worker wrote only this file and the experiment record.
- **Unintended modifications:** none identified in the records. No non-FX application artifact was created, edited, saved or deleted (section 4-5). No Git write was performed in T25 (no Git command available), and none is recorded for EXP-136.
- **Confinement disposition:** consistent with the records at record level. It is **not independently verified** by Git in T25. The operator can confirm with a read-only `git status` and `git diff --stat` in the operator's own shell.

## 9. Warnings and unexplained observations (observed; causes not invented)

- **Console.** The Web Client counter read `21 errors, 10 warnings` at T21, T23 and T24 (unchanged). The 21 error entries are `Permissions policy violation: unload is not allowed in this document` (T23 log: `default-app.js`, `wswebform-app.js`, `yggdrasil-core.js:1409`). The 10 warnings are 8 WidgetLoaderComponent deprecation notices, 1 ApplicationUrlResolver template-URL notice and 1 origin-trial notice (T21). None names the dashboard. The Designer console showed 2 errors of the same class (T8-T19). Causes unverified.
- **Form-level variables.** Six `UserCtrl*` variables appear under Form - Persistent in T19. The T16 same-session readback (after the Save) shows no Form-level category. The change between T16 and T19 is unexplained. Also the `userControl1_USER` variants remain.
- **User Control Name.** `V(UserCtrl_userControl1_USER)` (T14-T16) became `V(UserCtrl_FX_InventoryControl)` by T19. Cause not established.
- **`using Mongoose.IDO.Protocol;`.** Present in the Script Editor header (T15, T19); absent from the committed C# file. The brief asks to preserve the generated header and add only the required usings, so this is not a deviation by the brief's own terms. Origin of the line not established.
- **Page URL `MGForm`.** Lost after the T14 reference OK and not restored (T14-T19). On the Web Client tab, `MGForm=FX_InventoryEditor` appeared after the T17 launch click. Not explained.
- **T13 Save state.** Save disabled immediately after Finish and OK; enabled after the Caption commit. Cause not established.
- **T17 launch.** The split-button click produced no Designer after about 12 s and two tab lists. Candidate causes (blocked popup, silent failure, delayed window) are not verified. The same route produced one Designer in T8.
- **Select Form list.** T20: zero rows for `FX_InventoryDashboard` before the T21 relaunch; the positive control `FX_Inventory` did not list `FX_InventoryPrototype01`. Cause not established.
- **Iframe exposure.** The Refresh Data button was exposed to accessibility in T21 and not in T22 or T23 (the frame exposed no children). Cause not established.
- **T9 IDO keystrokes.** Text was typed into the `IdoCollections` Filter-in-Place criteria cell (`FX_InventoryItems`). The text did not appear in the grid or snapshot, and the destination was not established. The IDO detail fields were empty, Save stayed disabled, no prompt appeared, and the panel was closed without change. The controller flagged the call as `browser_type`. This is the only flagged call with an unresolved destination. No evidence of a change was recorded.
- **T12 dialog title.** The Web Assets dialog title read "Global Objects" while the pane was labelled "Web Assets" (observed, not explained).
- **Descriptions and locations.** Clipped in T9 for FX-ITEM-002 and FX-ITEM-003 (no baseline). Caption and Version clipped in some Designer screenshots.
- **Repository and tool errors.** Section 6 (tool and Grep errors, including the wrong EXP-135 filename in T18 and the wildcard path in T20).

## 10. Operator decisions requested (T25 does not choose among them)

**AC-7 (pending).** Two candidate dispositions, plus the default:
- (a) **Accept the functional runtime evidence as qualified AC-7 proof.** Basis: the T23 rendered result shows the method ran and wrote the variable that `getVarValue` read (`Loaded 3 records`, correct rows). Supplemented by T15 and T19: method installed once, persisted, Errors grid with no rows. Recorded as "operator-accepted qualified; no compiler diagnostic record." T25 does not recommend another blank Compile Result read.
- (b) **Authorize a separately documented affirmative compile check.** The evidence gap is that no compile result has been recorded. One candidate control is the Script Editor's toolbar run control (the play icon at the top left of the editor; not clicked in T15 or T19). The record does not establish whether it compiles only or also executes the method, so the operator should confirm its behaviour from documentation before authorizing it. The current brief does not authorize this step.
- (c) If neither is acceptable, AC-7 remains pending and EXP-136 cannot be accepted in full.

**AC-9.** Confirm or withdraw the reload-in-place qualification. The precedent was corrected from "EXP-135 T5" (not found) to `evidence/EXP-134/T5-checkpoint.md`, which documents tab re-targeting in place and does not prove document replacement or a server fetch. If the literal split-button route is required, a separately authorized fresh launch attempt is the only route, and it has already failed once (T17).

**AC-10.** Accept the T20 F5 (no verified effect) plus the T21 authorized navigation as the Portal-refresh step, or treat AC-10 as qualified only. The brief asked for one controlled Portal reload.

**AC-4.** Accept token-level correspondence (the current qualified level), or require an export or hash comparison if a supported export exists (not established in the record).

**AC-2.** The operator may recompute SHA-256 for both files outside the worker's tools and confirm the reference values in section 7. T25 has not verified them.

**AC-12.** Accept the same-session UI readback (qualified), or require a database- or IDO-level read, which the brief did not authorize.

**T9 keystroke destination.** Accept as unresolved (no evidence of change), or authorize a read-only check that `IdoCollections` and the `FX_InventoryItems` definition are unchanged.

**Form-level `UserCtrl*` variables.** Accept as Mongoose-generated and leave in place (the brief prohibits removal). Origin unresolved.

**Overall.** Final acceptance and the AC-13 disposition are the operator's decision after reviewing sections 2-9.

## 11. Blocker accounting and acceptance readiness

- **Material blockers to full acceptance:** AC-7 (no affirmative compile record); AC-13 (final reconciliation and Git confinement not independently verified); AC-9 (literal split-button route not achieved; its qualification's precedent is unresolved).
- **Qualifications that do not block a qualified pass but should be visible to the reviewer:** AC-10 (count of Portal refresh actions); AC-4 (no full-content equality); AC-5 ("exactly one" from the Web Client list only, after relaunch); AC-6 (runtime geometry at one viewport); AC-11 (one coordinate-click run); AC-12 (UI readback, not database).
- **Credentials and secrets:** no exposure was reported or inferred.
- **Durability:** no durability claim is made. No equivalence to MockInventoryDashboard is claimed.

## 12. Knowledge state

- **Observed (directly supported):** the source files' contents (T25 read); the three created objects and the Form's component, script and Save state (T10-T19); the single Save (T16); the T23 dashboard rendering; the T24 source readback; the controller counts in section 6.
- **Candidate procedure (demonstrated once):** top-level Portal navigation with Mongoose relaunch and Select Form exact-name open (T21); screenshot-verified coordinate click on a runtime control (T23).
- **Replay verified:** none.
- **Unresolved:** the causes listed in section 9; AC-7 compile evidence; Git confinement; the origin of the Form-level `UserCtrl*` variables; the T9 keystroke destination; the reason the committed HTML emitted `OK` before the amendment; `ThisForm.Variables` versus `Application.Variables` for Global storage.

## 13. Evidence gaps that would prevent final acceptance (priority order)

1. AC-7: no affirmative compile record (section 10).
2. AC-13: operator final disposition and independent Git confinement check.
3. AC-9: literal fresh-Designer route not achieved; qualification source unresolved.
4. AC-10: Portal-refresh count differs from the brief's "one controlled Portal reload".
5. AC-2: hashes not recomputed in any session that read the files.
