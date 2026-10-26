# EXP-136 T16 - single ordinary Designer Save of Form `FX_InventoryDashboard` (Save only; no close, reopen, Portal reload or runtime action)

Run R-20261026-062909-9GoC, cycle 21, task T16. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User, account `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Scope

- One ordinary Designer toolbar Save of the loaded Form `FX_InventoryDashboard` (User version), the only application mutation in T16.
- Read-only same-session checks after the Save: toolbar state, Components, Variables (Global - Persistent expanded), Event Handlers, network and console reads.
- Not done (by brief): close or reopen of the Form or Designer, fresh Designer launch, Portal reload, runtime open, Refresh Data, Regenerate Form, FormSync, unload, deployment, cache clearing, any variable, asset, component, Caption, Script Language or script change, any event configuration, Enter presses, browser JavaScript authored by the worker, credentials typed or read, session recovery.

## 2. Carried T15 state (unchanged by T16)

- FX_LoadInventoryFromIDO installed once in the generated C# Form Script class (T15). Compile Result Output blank; Errors grid headers only, no rows. T15 classified this as NOT affirmative compile proof.
- No Designer Save before T16. Save and Undo enabled (pending) at the end of T15.

## 3. Preflight (observed before the Save)

| Check | Observed | Evidence |
| --- | --- | --- |
| Tabs | List (read-only): tab 0 Web Client (`favoriteContext=FX_InventoryEditor`); tab 1 Designer (`designer/Default.aspx`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`, no `MGForm` parameter) | tab list result (this task) |
| Selected tab | Tab 1 selected after the list (succeeded first time) | tab select result |
| Snapshot | One fresh untargeted snapshot taken after selection; no ref errors | `evidence/EXP-136/t16-preflight-designer-snapshot.yml` |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot; `t16-before-save-form-identity-save-enabled.png` |
| Form identity | Heading `FX_InventoryDashboard`; Name `FX_InventoryDashb…` (clipped); Version `User version for us…` (clipped); Device Type Default; Form Type Normal; Is Master True | screenshot |
| Caption | Find on the Form properties tree: gridcell `FX_InventoryDashboard` (exact text by accessibility; the viewport shows clipped `FX_InventoryDasht…`) | `browser_find` result (this task); screenshot |
| Script Language | `Visual C#` (listbox value; the Properties pane label also reads `Script Language`) | snapshot; screenshot |
| Components | `Pane (00)` > `FX_InventoryControl`, Type `UserControl`, Pane 0, Container 0; exactly one row | snapshot; screenshot |
| Save state | `button "Save"` without `[disabled]` (enabled); Undo and Regenerate Form enabled | snapshot lines 10-18 (`e15`/`e16`, `e19`) |
| Dialog or prompt | None open; alert containers empty; no session modal, sign-in form or banner | snapshot; screenshot |
| Console | `2 errors, 0 warnings` (same as before T16) | page header |

Gates passed: User scope, the expected configuration, the loaded Form identity, Caption and Script Language, a single UserControl and an enabled Save. T16 proceeded.

## 4. The single Save (observed)

- Action: one click on the toolbar Save button (`button "Save"`, snapshot ref `e16` from the fresh preflight snapshot). The tool echoed its generated Playwright locator (`#mgtoolbarbutton-1085-btnEl`); the worker authored no JavaScript. Count: 1. No double-click, no keyboard save, no alternate route.
- Network (read-only list, filter `SaveChanges|DesignerSession`): exactly one request, `[POST] …/WSWebClient/Designer/DesignerSession/SaveChanges => [200]`.
- Response body (read-only, request 1): `{"Success":true,"Message":"Form [FX_InventoryDashboard] and global object(s) were saved.","Payload":[]}`.
- Native notification in the accessibility tree (post-Save snapshot): `Save` / `Form [FX_InventoryDashboard] and global object(s) were saved.` with a toast Close control. The text is NOT visible in the viewport screenshot `t16-after-single-save-result-toast-clean-state.png` (the toast had already left the viewport or faded); the text is recorded from the accessibility tree and the response body only.
- No confirmation, regeneration, discard, conflict or overwrite prompt appeared. No error, compile diagnostic or validation message appeared in the page. The response Payload is empty.

## 5. After the Save (observed; read-only)

| Check | Observed | Evidence |
| --- | --- | --- |
| Toolbar Save | `button "Save" [disabled]` | `evidence/EXP-136/t16-after-single-save-snapshot.yml` lines 10-11; viewport screenshot shows the Save disk icon greyed |
| Undo and Regenerate Form | `[disabled]` | same snapshot lines 12-13 and 52-53; Undo icon greyed in screenshot |
| Form identity | Heading `FX_InventoryDashboard`; Script Language `Visual C#`; Form Type Normal; scope footer `User / anton.ramos@3mworks.com.ph` | `t16-after-single-save-result-toast-clean-state.png`; `t16-after-save-details-variables-tab-readonly.png` |
| Components | One row `FX_InventoryControl`, UserControl, Pane 0 (Components grid, same as before the Save) | `t16-after-single-save-result-toast-clean-state.png` |
| Variables (Global - Persistent expanded; Form-level category absent) | Global - Persistent list shows `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FX_vEcho`, `FX_vInventoryJson` (list continues below the visible area); Global - Temporary category present, collapsed; no Form-level variable category | `t16-after-save-details-variables-tab-readonly.png` (collapsed); `t16-after-save-variables-global-persistent-expanded-readonly.png` (expanded) |
| Event Handlers | Grid headers `Sequence`, `Response Type`, `Disabled`, `Response Parameters`; no rows | `t16-after-save-event-handlers-tab-readonly.png` |
| Console | `2 errors, 0 warnings`; both errors are `Permissions policy violation: unload is not allowed in this document` (one at `res/Designer/app.js?_dc=20261002150145:1`, one at `Scripts/yggdrasil-core.js:1409`). Count unchanged from before the Save; no new error or warning | console read (warning level returned `Total messages: 2 (Errors: 2, Warnings: 0)`) |
| Dialog or prompt | None open | snapshot and screenshots |

## 6. Interpretation

- AC-8 (one ordinary Designer Form Save): supported. The network list shows one SaveChanges POST returning 200; the response body reports Success true for the Form and global objects; the toolbar Save is disabled afterwards with the clean state (Undo and Regenerate Form also disabled); no dialog is open.
- The Save message names the Form and "global object(s)". It does not list the Web User Control Asset separately, so the asset's persistence is not established by this message. It is left to the fresh-Designer readback (AC-9).
- The Save success is NOT compile evidence. The response payload is empty and no compile diagnostic appeared, but the Errors grid was not reopened and no compile attempt was observed. AC-7 remains PENDING (qualified) exactly as after T15.
- The Save does not resolve the carried T14/T13 items: the `User Control Name` expression (`V(UserCtrl_userControl1_USER)`), the Page URL lost `MGForm`, the T13 Save-state transition, and Global-versus-Form storage of `ThisForm.Variables`. None was changed. The Save produced no visible change in these items within the Designer surface that was inspected.

## 7. Mutation and browser ledger (T16)

Mutations:
- Designer Save: 1 (one POST `DesignerSession/SaveChanges`, 200, Success true).
- Variables, assets, components, Caption, Script Language, script methods, events, Regenerate Form, FormSync, unload, deployment, cache clearing: 0.
- Form close or reopen: 0. Designer launch: 0. Portal reload: 0. Runtime open or Refresh activation: 0.
- Enter presses: 0. Browser JavaScript authored by the worker: 0. Credentials typed or read: 0. Session recoveries: 0. Prompts or dialogs accepted: 0.

View-only actions (no content change):
- Tab list: 1. Tab select: 1 (tab 1).
- Snapshots: 2 worker-saved (`t16-preflight-designer-snapshot.yml`, `t16-after-single-save-snapshot.yml`); tool-saved snapshots under `evidence/playwright/` (page-…-01-18-16/25/34) by the browser tool.
- Finds: 5 (`Caption`, `saved`, `Variables`, `Global - Persistent`, `Event Handlers`).
- Details tab clicks: 2 (Variables, Event Handlers); Global - Persistent category expand: 1.
- Screenshots: 6 (listed in section 8).
- Network reads: 2 (filtered list; one response body). Console reads: 1 (warning level).

## 8. Evidence files (T16)

Written by the worker or the tool, repository-relative under `evidence/EXP-136/`:
- `t16-single-designer-form-save.md` (this file)
- `t16-preflight-designer-snapshot.yml` (pre-Save snapshot; toolbar Save enabled, Components, Caption/Script Language identity)
- `t16-before-save-form-identity-save-enabled.png` (Form identity, Caption (clipped), Visual C#, one FX_InventoryControl UserControl, User footer, Save icon enabled; proves the pre-Save state, not the stored definition)
- `t16-after-single-save-snapshot.yml` (post-Save snapshot; Save, Undo and Regenerate Form `[disabled]`; toast node `Form [FX_InventoryDashboard] and global object(s) were saved.`)
- `t16-after-single-save-result-toast-clean-state.png` (post-Save viewport: Save and Undo icons greyed; Form identity, Components and footer unchanged; the toast text is NOT visible in this capture)
- `t16-after-save-details-variables-tab-readonly.png` (Variables tab; Global categories collapsed; no Form-level category)
- `t16-after-save-variables-global-persistent-expanded-readonly.png` (Global - Persistent expanded: `FX_vInventoryJson` visible in the list; list continues below the viewport)
- `t16-after-save-event-handlers-tab-readonly.png` (Event Handlers grid, no rows)
- Tool-saved snapshots under `evidence/playwright/` (`page-2026-10-26T01-18-16-350Z.yml`, `page-2026-10-26T01-18-25-433Z.yml`, `page-2026-10-26T01-18-34-957Z.yml`, `page-2026-10-26T01-18-00-273Z.yml`) and console log `evidence/playwright/console-2026-10-26T01-17-37-406Z.log` (tool-written).

## 9. Acceptance checkpoint after T16

| AC | Status after T16 | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted); re-observed | Scope footer, configuration title, Form identity (T16 preflight) |
| AC-2 | Carried: passed at operator-verified hash level (not recomputed by the worker) | No source read in T16 |
| AC-3 | Carried: supported at same-session level; `FX_vInventoryJson` re-observed under Global - Persistent (T16) | Settings (Global/Persistent) not re-read in T16; design-time serialization not inferred |
| AC-4 | Carried: operator-accepted (qualified; token-sequence, not byte equality) | No asset action in T16 |
| AC-5 | Carried: in-session passed (qualified); T16 re-confirms Name, heading, Script Language Visual C# and User scope | Version and Caption clipped in screenshots; Caption text by accessibility find |
| AC-6 | Carried: same-session passed (qualified); T16 Components grid shows one FX_InventoryControl UserControl | Use Web Control, Control URL and size not re-read in T16 (carried from T14) |
| AC-7 | **PENDING (qualified)** | Save success does not establish compile success; no compile diagnostics visible; Errors grid not reopened in T16; the T15 empty-grid question stays open |
| AC-8 | **PASSED (observed)** | One POST SaveChanges 200 Success true; Save disabled afterwards with clean state; no dialog |
| AC-9 | PENDING | No close or fresh-Designer readback in T16 |
| AC-10 to AC-13 | Not evaluated | Later stages |

## 10. Limitations

- The success toast text was read from the accessibility tree and the response body; it is not visible in the viewport captures.
- The Save response does not itemise the Web User Control Asset or confirm compilation.
- The Designer page URL still has no `MGForm` parameter (carried from T14); the visible heading identifies the Form.
- Pre-existing console errors (the two `unload` Permissions-Policy violations) are unexplained and unchanged; no cause is asserted.

## 11. Unresolved items carried (not changed by T16)

- `User Control Name` expression `V(UserCtrl_userControl1_USER)` (pre-rename name); behaviour after Save not verified.
- Page URL lost `&MGForm=` after the T14 reference OK; cause not established.
- T13 Save-state transition (disabled after Finish, enabled after Caption, unexplained).
- Global-versus-Form storage of `ThisForm.Variables("FX_vInventoryJson")` (EXP-130 U-1).
- AC-7 compile question (empty Errors grid versus no positive or negative control).

## 12. Decisions for the coordinator

1. Accept AC-8 as passed (observed) on the basis of section 6.
2. AC-7 remains pending: decide whether a same-session Errors-grid reopen (read-only) is authorized, or whether the operator accepts the empty grid, or whether a positive/negative control is needed.
3. AC-9 needs separate authorization: one ordinary Form close, one fresh Designer launch through the Web Client split-button route, and read-only readbacks of Form identity, Caption, Script Language, UserControl properties, FX_LoadInventoryFromIDO, FX_vInventoryJson Global/Persistent and FX_Inventory/index.html.
