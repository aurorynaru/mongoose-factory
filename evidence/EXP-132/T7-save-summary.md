# EXP-132 T7 - one ordinary Designer Form Save (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=9`, `task=T7`, `worker_session_id=7a4b413d-0f87-4b92-af5d-f379eb67f28c`, `task_message_id=6a12289a-ff04-4be6-a20f-95eed8380e75`.

## 1. Outcome

- **One ordinary Designer Form Save was activated** on the top toolbar `Save` control (not Regenerate Form, Save As, FormSync or Global Objects OK). It was not repeated.
- **Result (observed):** Save is `[disabled]` afterwards; a Mongoose notification reads "Form [FX_BridgeTest] and global object(s) were saved." No modal dialog and no error notification appeared. Designer console stayed at 2 errors / 0 warnings; Web Client console stayed at 44 messages (3 errors / 10 warnings).
- **Designer state after T7:** FX_BridgeTest open, `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Save and Undo disabled, no dialog, no runtime Form open.
- **Not done (by instruction):** no close/reopen; no runtime activation; no edit to FX_vEcho, FX_Echo, FX_Bridge/index.html or FX_BridgeControl; no Designer Variables tree check; no Regenerate, Delete, FormSync, metadata or cache operation.
- **AC-6 status:** pending. The Save alone does not establish persistence. The close/reopen readback of the variable metadata, C# source, HTML, control reference and Save-disabled state is a separate authorized task.

## 2. Gates before Save (observed)

| Gate | Observation | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (find on iframe banner) | tab 1 find |
| Web Client console | Total 44 (Errors 3, Warnings 10) | tab 1 console read |
| Web Client runtime tabs | Only tab 1 (Mongoose home) and tab 0 (Designer); no runtime FX_BridgeTest tab | tab list |
| Designer identity and scope | Title `FX_BridgeTest`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | snapshot; `T7-01` |
| Save before click | enabled (no `[disabled]` on `button "Save"`), as expected from T4-T6 | snapshot; find; `T7-01` |
| Dialogs before click | none (no dialog in the Designer tree) | snapshot |
| Designer console before click | 2 errors / 0 warnings | snapshot footer |
| Components grid before click | FX_BridgeControl (UserControl, Pane 0, Container 0) only under Pane (00) | `T7-01` |

Cause of the Save-enabled state before this click: **unresolved** (not inferred).

## 3. The Save activation (single)

- One click on the top toolbar `Save` button, from a fresh snapshot (`e16`). The tool returned without an error. Its generated code line referenced an element id (`#ext-element-127`) that the harness produced; no worker-written JavaScript was used.
- Designer Form Saves: **1**.

## 4. Post-Save inspection (observed)

- `find "Save"`: toolbar `button "Save" [disabled]`.
- Notification toast (top right): "Save — Form [FX_BridgeTest] and global object(s) were saved." It has its own Close control. It is a transient notification, not a modal dialog. It was left in place, not clicked.
- `T7-02`: Save and Undo icons greyed; FX_BridgeTest title; FX_BridgeControl selected; status bar User scope.
- Designer console (error-level read): Total 2, Errors 2, Warnings 0.
- Web Client console (error-level read): Total 44, Errors 3, Warnings 10 (unchanged).
- `find "ScopeType: User"`: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

## 5. What the Save does and does not establish

- **Observed:** the Designer accepted one Save and returned to a Save-disabled state with a "saved" notification that names FX_BridgeTest and "global object(s)".
- **Not established:** that FX_vEcho, the FX_Echo source or the FX_Bridge/index.html content persisted server-side. Those require the close/reopen readback in the next authorized task.
- **Not established:** whether the Save notification's "global object(s)" wording covers FX_vEcho specifically. It is a Mongoose message only.
- **Not established:** that the compile of the revised FX_Echo succeeded. No Compile Result was opened in T7.
- **Unresolved:** the cause of the pre-Save enabled state (T4 Global Objects commit, T5 script commit, T6 asset commit, or a combination).
- **Unresolved (carried):** FX_vEcho absence from the Designer Details > Variables tree after T4 (not re-read in T7; expected to be answered by the later reopen readback).

## 6. Browser action and read totals (T7, worker tool-call log)

- **Actions: 6.** Tab selects 5 (0, 1, 0, 1, 0); clicks 1 (the Designer Save). Key presses 0; typed text 0; browser JavaScript 0.
- **Reads: 11.** Tab lists 1; snapshots 2; finds 3; screenshots 2; console reads 3. Image reads of `T7-01` and `T7-02` were local file reads, not browser reads.
- **Recovery usage:** ref-not-found errors 0. Fresh untargeted snapshot 0/1; corrected inspection 0/1. Allowance not used.
- **Mutation accounting:** Designer Form Save 1; Form close/reopen 0; runtime open 0; FX_BridgeButton activation 0; variable, script, asset or component edits 0; Regenerate, Delete, FormSync, metadata, cache, IDO, database operations 0.
- **Ledger note:** this count is the worker's own tool-call log. It is not reconciled with the controller audit (not available to the worker). The earlier discrepancies recorded in `T5-script-edit-summary.md` and `T6-asset-edit-summary.md` are not changed here.

## 7. Evidence files written (T7)

- `evidence/EXP-132/T7-01-designer-pre-save-identity-scope-save-enabled.png` - Designer before the Save. Shows FX_BridgeTest in the title, `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` in the status bar, the Save icon active, Undo/Redo greyed, the FX_BridgeControl UserControl row (Pane 0, Container 0) selected, and no dialog. Proves the pre-Save identity and scope. Does not prove which change made Save enabled, and does not prove the Form-level or Global definitions.
- `evidence/EXP-132/T7-02-designer-after-single-save-result.png` - Designer after the one Save. Shows the Save toast "Form [FX_BridgeTest] and global object(s) were saved.", the Save icon greyed, Undo greyed, FX_BridgeTest title and User scope in the status bar. Proves the in-session post-Save UI state and the toast text. Does not prove server-side persistence or a clean reload; that is the close/reopen task.
- `evidence/EXP-132/T7-save-summary.md` - this file.
- Tool-generated only (not written by the worker): `evidence/playwright/page-2026-10-25T15-*.yml` and `console-*.log` files.
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` - status paragraph updated and a T7 section appended.

## 8. Acceptance checks (T7 view)

- **AC-1:** re-confirmed for T7 (account header, User scope, FX_BridgeTest identity, dialogs, consoles, no runtime tab).
- **AC-2:** not re-run in T7 (baselines stand from T2 to T6).
- **AC-3:** not re-performed in T7. T4 metadata readback stands as observed. Persistence after Save is unverified until close/reopen.
- **AC-4:** not re-read in T7. Compile unresolved.
- **AC-5:** not re-read in T7. The T6 pre-commit readback and the FX_BridgeControl reference stand.
- **AC-6:** **pending.** The single Save is done and the Designer shows Save disabled in the same session. The close/reopen readback is not performed and no persistence claim is made.
- **AC-7 to AC-8:** not started (by instruction). No runtime Form is open.
- **AC-9:** the final manifest remains open.

## 9. Knowledge state (T7)

- The single ordinary Designer Form Save returned the Designer to Save-disabled with a "saved" notification: **observed** (same session).
- Server-side persistence of FX_vEcho, FX_Echo and FX_Bridge/index.html after the Save: **unresolved** (close/reopen task).
- Cause of the pre-Save Save-enabled state: **unresolved**.
- Compile of the revised FX_Echo: **unresolved**.
- Runtime resolution of `ThisForm.Variables("FX_vEcho")` and `WSForm.getVarValue("FX_vEcho")` for a Global variable (EXP-130 U-1): **unresolved**.
- Replay verification: **not claimed**.
