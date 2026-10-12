# EXP-067-R2 — T2 report: Web Client Unload All Global Form Objects (one invocation)

Run `R-20261013-011002-lSgL`, cycle 1, task T2. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `0d473097-4324-4d51-9dae-e89beee32f46`. Date 2026-10-13. Editing scope User.

**Outcome: the Web Client `Unload All Global Form Objects` was invoked exactly once. No visible response (no dialog, no message). The Web Client is clean. The Designer was not operated on and remains open, clean, on FX_Items (User scope).** No Designer unload, no Designer close/reopen, no component change, no Save, no preference change.

## 1. Preconditions (fresh, before the unload)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, not selected). Tab 1 = Web Client (`favoriteContext=UserPreferences` URL, current).
- Tab 1 selected; snapshot (untargeted) confirmed the Web Client: Explorer view; **no runtime Form tab open** (no FX_Items runtime Form, no IDOs tab). Therefore: no dirty runtime Form; no clean FX_Items runtime Form to close. No Session Expired modal; no portal banner.
- Identity header: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Preference `Unload IDO Metadata With Forms`: **not re-read in T2** (T2 scope). It was read as `[checked]` in T1 (`t1-05`) and not changed since; the T1 close was Close Window (no OK). The preference gate therefore rests on the T1 reading.

## 2. Menu label (re-observed before the click)

- Path: Form (menu) → Definition (submenu, hover).
- Submenu items, observed: `Designer`, `Runtime Builder...`, **`Unload All Global Form Objects`**, `Site Developer Impersonation`.
- Form menu state: `Close and Save Changes` and `Close and Cancel Changes` disabled (no runtime Form active).
- Evidence: `t2-01-webclient-definition-submenu-unload-label-before-invoke.png` (viewed; label visible).

## 3. Invocation (count 1)

- One click on `Unload All Global Form Objects` (menu item f1e146). **Not retried.** No other unload or cache action.

## 4. Visible response (verbatim)

- **No visible response.** The menu closed. No dialog, alert, toast, confirmation or message text appeared. The post-action snapshot (untargeted) shows only the Explorer view and no modal.
- Evidence: `t2-02-webclient-after-unload-invoked-visible-response.png` (viewed: Explorer; empty content area; no dialog; Form menu closed).
- Limitation: a silent completion is observed only at the UI level. Whether the server-side unload completed is not observable here.

## 5. Post-operation state

- **Web Client:** tab 1, Explorer, no runtime Form, no dialog. Form menu closed. Clean.
- **Designer (tab 0), read-only check after selecting the tab:** `Save` disabled; `Regenerate Form` disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; tab heading `FX_Items`; Components grid shows the same rows as T1 (FX_RefreshButton selected in the grid). Evidence: `t2-03-designer-fx_items-state-after-webclient-unload-clean.png` (viewed: Save and Undo greyed; FX_Items heading; User footer). The Designer was **not** clicked, edited or closed.
- Tab 0 is currently the selected tab (Designer). No dialog open.

## 6. Counts

**T2 explicit browser calls: 15.** Tab lists 1; tab selects 2; snapshots 2 (both untargeted); finds 4 (`Definition`, `Unload All Global Form Objects`, `Save`, `ScopeType`); clicks 2 (Form menu; the unload invocation); hover 1 (Definition submenu); screenshots 3 (`t2-01`, `t2-02`, `t2-03`); key presses, typed entries, waits, wheel 0.

**Cumulative T1 + T2 explicit browser calls: 68** (T1 53 + T2 15). Cumulative: tab lists 3; tab selects 4; snapshots 7 (5 untargeted, 2 targeted); finds 26; clicks 18; hover 1; screenshots 9.

| Operation (cumulative T1 + T2) | Count |
| --- | --- |
| Preference reads | 1 (T1; unchanged; not re-read in T2) |
| Preference changes | 0 |
| **Web Client unloads (Unload All Global Form Objects)** | **1** (T2) |
| **Designer unloads** | **0** |
| Designer Save | 0 |
| Designer close / reopen | 0 / 0 |
| Designer Form open (FX_Items, from recent-forms, T1) | 1 (baseline; not a close/reopen) |
| Runtime Form close / reopen | 0 / 0 |
| Toolbox drops | 0 |
| Component add / delete / rename / property change | 0 / 0 / 0 / 0 |
| Record edits / runtime Save | 0 / 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console, network inspection | 0 |
| Direct URL navigation / refresh / restart / session re-login | 0 / 0 / 0 / 0 |
| Dialogs answered | 1 (T1: Designer scope OK) |

## 7. Worker-written file inventory (T2)

- `evidence/EXP-067-R2/T2-webclient-unload-report.md` (created; this file).
- `evidence/EXP-067-R2/t2-01-webclient-definition-submenu-unload-label-before-invoke.png` (created).
- `evidence/EXP-067-R2/t2-02-webclient-after-unload-invoked-visible-response.png` (created).
- `evidence/EXP-067-R2/t2-03-designer-fx_items-state-after-webclient-unload-clean.png` (created).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: T2 status and sections).
- Cumulative from T1 (unchanged in T2): the record (created in T1); `evidence/EXP-067-R2/T1-preflight-report.md`; `t1-01` … `t1-06` PNGs.
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:17–17:18 UTC, including `page-2026-10-12T17-17-30-911Z.yml`, `…17-17-35-671Z.yml`, `…17-17-46-945Z.yml`, and the console log `console-2026-10-12T17-17-23-322Z.log`, `…17-17-23-323Z.log`). Not read. The harness and operator git review are authoritative.

## 8. Assessment for the next task

- The Web Client unload is recorded as done (count 1). The Designer unload is **not** done (count 0). The Web Client is clean.
- The Designer FX_Items Form is open, User scope, clean (Save and Undo disabled). A close with no unsaved-changes prompt is expected but has not been observed.
- **Next Designer close and unload is safe in principle:** the Form is clean, so closing it should not prompt. The Designer unload must be invoked only with the FX_Items Form closed. Re-observe the Designer `Form > Definition > Unload All Global Form Objects` label before the click.
- Unresolved: whether the Web Client unload completed server-side (no response observed); the Designer toolbar `Open` route (not observed in T1 or T2; the Designer Form menu used recent-forms).
