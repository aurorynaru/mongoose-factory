# EXP-066-R2 — T7 report: AC-6 only: FX_Items runtime Form closed once and reopened once; dumbbell, eggs, guitar verified read-only (observed only)

- Run `R-20261012-234530-k6cU`, cycle 6, task **T7**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `9774f482-f054-4ea2-bd6f-5714b6e5a287`.
- Browser evidence timestamps 2026-10-12T16:08–16:10 (tool names). LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: AC-6 SUPPORTED (observed; UI and accessibility level).** The FX_Items runtime Form was closed once (clean; no prompt) and reopened once through Form > Open > Select Form, with the exact row `FX_Items` / `FX_Items` confirmed before OK. After reopen the Form loaded its data directly (`Object 1 of 3`, dumbbell). Records 2 (eggs) and 3 (guitar) were loaded by ordinary row navigation, each with its position and identifying value captured. Save stayed disabled throughout; no dirty indicator; no record field was edited. The reopened runtime Form and the IDOs Form are both open and clean. **No record edit, runtime Save, IDO Save, wizard, checkout action or unload was performed.**

## 1. Tabs and gate

- Tab list (read-only), before the first tab selection: tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`), shown **current**; tab 1 = Web Client (`favoriteContext=IdoCollections`).
- Tab 0 was **not acted on**: not selected, clicked, typed in, snapshotted or screenshotted.
- Tab 1 selected once (succeeded). Fresh untargeted snapshot.
- Gate (reopened IDOs form, before any runtime action): IDOs tab for FX_Items; Save disabled; no wizard; no dialog; IDO Name `FX_Items`; Revision 2 / 10/10/2026; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Tables: FX_Items/fxitms/Primary Base/Inner and FX_UMs/fxum/Secondary/Left Outer with join `fxum.[FX_UM] = fxitms.[FX_UM]`. The IDOs form was **not** acted on.

## 2. Runtime baseline (before close)

- The inherited runtime tab (`FX_Items`) was selected by a click on its tab heading (view navigation only; the IDOs tab was not closed).
- Snapshot (T7 baseline): `Description (Object 1 of 3)`; toolbar **Save disabled**; record 1 dumbbell / `45 pound iron` / `45.00` / `EA`; grid rows 1 dumbbell, 2 eggs, 3 guitar. No dialog.
- Screenshot `t7-01-runtime-baseline-before-close-object-1-of-3.png` (viewed; shows Object 1 of 3, dumbbell fields, Save greyed, no dirty indicator).

## 3. Close the runtime Form (one invocation)

- One click on `Close Panel FX_Items` (the runtime Form tab's own close control). Not retried.
- Clean close: **no unsaved-change prompt, no dialog**. The runtime tab was removed. The IDOs tab became the only Form and remained open and clean (Save disabled; `t7-02`, viewed).

## 4. Reopen the runtime Form (one route)

- Form menu clicked (1). Its submenu showed `Open`, `Close and Save Changes` and further items. The **`Close and Save Changes`** item was **not** clicked.
- `Open` clicked (1). The Select Form dialog opened (`t7-03`) with the filter pre-filled `IdoCollections` and the `IDOs / IdoCollections` row highlighted.
- **Filter change (1 type action):** the filter was changed to `FX_Items` (one entry). The first attempt used a stale ref (`f1e1`, the page body) and failed with `Element is not an <input>` (no text entered; no state change). One fresh untargeted snapshot was taken (recovery allowance: 1 used); the correct filter textbox ref (`f1e754`) was then used once.
- **End key (1):** pressed once, so the grid refreshed (the EXP-066 T1 observation that the list refreshes after End). Settled 2 s. Screenshot `t7-04` (viewed): exactly **one row**, Caption `FX_Items` / Name `FX_Items`, highlighted.
- Accessibility readback of the dialog before OK: the grid row `FX_Items` / `FX_Items` is the only data row; the filter reads `FX_Items`.
- **Identity confirmed before OK:** the only row is the exact `FX_Items` Form (Name `FX_Items`); no similarly named Form appeared.
- **OK (1):** clicked once. The dialog closed; the URL became `favoriteContext=FX_Items`; the FX_Items runtime tab became active. No second OK; no retry.

## 5. Settle and baseline after reopen

- Settle 3 s. Screenshot `t7-05` (viewed): the runtime Form **loaded its records directly** (no Filter in Place state): `Description (Object 1 of 3)`; record 1 dumbbell / `45 pound iron` / `45.00` / `EA`; the Description field holds focus with its text highlighted (not edited). Save disabled. Grid rows 1 dumbbell, 2 eggs, 3 guitar visible.
- Accessibility readback of the grid (grid rows, unchanged): `dumbbell` / `45 pound iron` / `45.00` / `EA`; `eggs` / `cage free` / `6.99` / `DZ`; `guitar` / `natural acoustic` / `129.99` / `EA`. Record count shown: 3.

## 6. Read-only record navigation (three records)

Navigation was done by one click on the **record-number cell** of the row (the grid's own row selector). No field was typed into, no Save or record-level command was used.

| Step | Action | Position status | Identifying value (record fields) | Evidence |
|---|---|---|---|---|
| Record 1 (baseline after reopen) | none (loaded on open) | `Description (Object 1 of 3)` | Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; UoM `EA` | `t7-05` (viewed) |
| Record 2 | click record cell `2` (1) | `(Object 2 of 3)` | Item `eggs`; Description `cage free`; Cost `6.99`; UoM `DZ` | `t7-06` (viewed) |
| Record 3 | click record cell `3` (1) | `(Object 3 of 3)` | Item `guitar`; Description `natural acoustic`; Cost `129.99`; UoM `EA` | `t7-07` (viewed) |
| Return to record 1 | click record cell `1` (1) | `Description (Object 1 of 3)` | Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; UoM `EA` | `t7-08` (viewed) |

- Record 2 showed a picture (a cut-out image of a dog-like shape fragment) in the picture area; record 3 showed a second picture; record 1 showed the puppy image (the baseline). The pictures are the FX_Picture binary column content, displayed as observed. Their content is not interpreted further.
- The values match the EXP-051 / EXP-052 documented records (`dumbbell / 45 pound iron / 45.00 / EA`; `eggs / cage free / 6.99 / DZ`; `guitar / natural acoustic / 129.99 / EA`) and the EXP-061 T6 read-only values. Surrogate identifiers were not visible and were not read.
- Save stayed **disabled** at every step (snapshots after each navigation; `find` for Save/dirty/modified/unsaved at the end returned only the disabled Save button). No dirty indicator.
- No Filter in Place state occurred after reopen (the Form loaded its data on open). No speculative query action was used.

## 7. Final state

- The FX_Items runtime Form is **open, clean and on Object 1 of 3** (dumbbell). Save disabled. No dialog. No unsaved-change prompt.
- The IDOs Form for FX_Items is **open and clean** (behind the runtime tab; Save disabled; Revision 2; Locked By the operator; not acted on in T7 beyond the gate read).
- Tab 0 (Web Designer): not acted on.
- No browser-native dialog.

## 8. Action audit (T7, exact counts)

| Action | T7 count | Notes |
|---|---|---|
| Browser tab list (read-only) | 1 | before the first tab selection; tab 0 reported current |
| Browser tab select | 1 | tab 1 (Web Client); succeeded (the runtime tab selection is a click, counted in clicks) |
| Browser snapshot calls (explicit) | 8 | gate; after runtime select; after runtime close; post-reopen recovery (stale-ref recovery snapshot, 1 of allowance); post-reopen gate; before record 2; before record 3; before return to record 1 (and a final Save-state find separately) |
| Finds | 3 | `Open` in the Form menu (1); `Open` (2nd menu read before the runtime reopen) (1); Save/dirty/unsaved status at the end (1) |
| Clicks | 9 | runtime tab select (1); runtime Close Panel (1); Form menu (1); `Open` menu item (1); Select Form OK (1); record 2 cell (1); record 3 cell (1); return record 1 cell (1); stale-ref attempt not a click |
| Typed entries | 1 | `FX_Items` into the Select Form Filter (one entry) — the failed `browser_type` on a stale ref (`f1e1`) was rejected with no input and is counted in the error line below |
| Failed actions | 1 | `browser_type` on stale ref `f1e1` (body element) rejected: `Element is not an <input>` (no state change) |
| Key presses | 1 | End (one), to refresh the Select Form list |
| F4 presses | 0 | — |
| Enter / Tab key presses | 0 / 0 | — |
| Mouse moves / wheel | 0 / 0 | — |
| Waits | 7 | 2 s after runtime select; 2 s after close; 2 s after filter/End; 3 s after reopen OK; 2 s after record 2; 2 s after record 3; 2 s after return to record 1 |
| Screenshot calls | 8 | `t7-01` to `t7-08`, one call each (8 unique PNG files). The first `t7-01` read failed only because the path was given in absolute form; the file was re-read from its returned path. Not an extra capture. |
| Dialogs answered | 1 | Select Form OK (in-form dialog) |
| Ref-not-found / timeouts | 1 / 0 | one stale-ref failure (see Failed actions); recovered with one fresh snapshot |
| Fresh-snapshot recovery allowance used | 1 | after the stale-ref failure |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |
| **FX_Items runtime close** | **1** | own Form-tab close (`Close Panel FX_Items`); clean |
| **FX_Items runtime reopen** | **1** | Form > Open > Select Form (exact `FX_Items` / `FX_Items` row); OK once |
| Record navigation (row cell clicks) | 3 | record 2, record 3, return to record 1 |
| Runtime record edits | 0 | no field typed into; no Save |
| Runtime Save | 0 | — |
| IDO Collections close / reopen | 0 / 0 (T7) | not repeated (brief) |
| New Table / New Property / Finish / builder Add / wizard OK / Save (IDO) | 0 | — |
| Check-in / undo checkout / second checkout | 0 / 0 / 0 | — |
| Designer actions | 0 | tab 0 listed as current only |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |

Total explicit browser calls (T7): tab list 1; tab select 1; snapshots 8; finds 3; clicks 9; type 2 (1 successful, 1 failed on a stale ref); key press 1; waits 7; screenshots 8 = **40**.

### Cumulative (T1–T7), exact

| Action | T1 | T2 | T3 | T4 | T5 | T6 | T7 | Total |
|---|---|---|---|---|---|---|---|---|
| New Table invoked | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Table Name Tab commit | 0 | 1 | 0 | 0 | 0 | 0 | 0 | **1** |
| Table Alias Tab commit | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Builder Add | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Typed join text | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Wizard OK (table) | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Table entries added | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **1** (FX_UMs / fxum) |
| New Property wizard invoked | 0 | 0 | 0 | 1 | 0 | 0 | 0 | **1** |
| Finish | 0 | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Save (IDO) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Properties added | 0 | 0 | 0 | 0 | 1 | 0 | 0 | **1** (FX_UMsDescription) |
| Check-in / undo checkout | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| IDO Collections close / reopen | 0 | 0 | 0 | 0 | 0 | 1 / 1 | 0 | **1 / 1** |
| Runtime FX_Items close / reopen | 0 | 0 | 0 | 0 | 0 | 0 | 1 / 1 | **1 / 1** |
| Runtime record edits / runtime Save | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0 / 0** |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Explicit browser calls | 20 | 17 | 38 | 25 | 20 | 35 | 40 | **195** |

## 9. Worker-written file inventory (cumulative, T1–T7)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created at T1; updated at T2–T7).
- `evidence/EXP-066-R2/T1-report.md`, `T2-report.md`, `T3-report.md`, `T4-report.md`, `T5-report.md`, `T6-report.md`, `T7-report.md` (this file).
- Screenshots:
  - T1: `t1-01-webclient-initial-state-idos-reused.png`; `t1-02-idos-FX_Items-after-f4-settled.png` (misnamed: Filter in Place state); `t1-03-idos-FX_Items-query-settled-identity-tables.png` (misnamed: identity and rows 1–8); `t1-04-ido-tables-baseline-one-entry.png`; `t1-05-final-state-idos-checked-out-save-disabled.png`.
  - T2: `t2-01-pre-new-table-tables-view-one-entry.png`; `t2-02-new-table-wizard-opened-blank-defaults.png`; `t2-03-table-name-typed-before-tab.png`; `t2-04-table-name-after-tab-commit.png`.
  - T3: `t3-01-wizard-precheck-before-alias.png`; `t3-02-alias-fxum-after-tab.png`; `t3-03-builder-first-column-list-open.png`; `t3-04-builder-table-name-list-open.png`; `t3-05-builder-second-column-list-open.png`; `t3-06-wizard-builder-configured-before-add.png`; `t3-07-join-text-after-builder-add.png`; `t3-08-tables-view-after-ok.png`.
  - T4: `t4-01-tables-panel-two-entries-before-close.png`; `t4-02-new-property-wizard-page1-initial.png`; `t4-03-wizard-page2-initial-before-bind.png`; `t4-04-bind-to-list-open.png`; `t4-05-bind-to-fxum-committed-autofill-before-rename.png`; `t4-06-wizard-configured-before-finish.png`.
  - T5: `t5-01-wizard-page2-pre-finish-config.png`; `t5-02-finish-immediate-response-idos-tab.png`; `t5-03-post-finish-tables-subtab.png`; `t5-04-post-finish-property-inventory-rows-9-13.png` (view showed rows 6–13); `t5-05-post-finish-property-inventory-rows-1-5-new-row.png` (view showed rows 1–8).
  - T6: `t6-01-pre-close-idos-clean-13-properties-checked-out.png`; `t6-02-post-close-idos-tab-closed-runtime-tab-active.png`; `t6-03-form-open-submenu-before-select-form.png`; `t6-04-idos-reopened-via-select-form-initial.png`; `t6-05-idos-exact-query-f4-settled.png`; `t6-06-reopened-properties-upper-rows-1-8.png`; `t6-07-reopened-properties-lower-rows-6-13.png`; `t6-08-reopened-tables-inventory-two-entries.png`.
  - T7: `t7-01-runtime-baseline-before-close-object-1-of-3.png`; `t7-02-post-runtime-close-idos-only.png`; `t7-03-select-form-dialog-before-filter-change.png`; `t7-04-select-form-filtered-fx-items-before-ok.png`; `t7-05-runtime-reopened-settled-initial.png`; `t7-06-runtime-record-2-eggs-object-2-of-3.png`; `t7-07-runtime-record-3-guitar-object-3-of-3.png`; `t7-08-runtime-final-clean-back-to-object-1-of-3.png`.
- Tool-written (not worker-authored; outside the EXP-066-R2 path; reported in tool outputs): `evidence/playwright/` files from this task, including `console-2026-10-12T16-08-40-295Z.log`, `console-2026-10-12T16-08-40-296Z.log`, and page snapshots `page-2026-10-12T16-08-45-230Z.yml` through `page-2026-10-12T16-10-02-476Z.yml` (the full set is not enumerated). The harness and the operator's git review are authoritative.

## 10. Decisive evidence for each of the three records (what each capture proves and does not)

- **Record 1 — dumbbell** (`t7-05`, `t7-08`; viewed): proves `Object 1 of 3` with Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, UoM `EA`, Save disabled, after the reopen and again after the return navigation. Does not prove the database row.
- **Record 2 — eggs** (`t7-06`; viewed): proves `(Object 2 of 3)` with Item `eggs`, Description `cage free`, Cost `6.99`, UoM `DZ`, the row-2 cell highlighted, and a picture rendered in the picture area. Does not prove the picture's content.
- **Record 3 — guitar** (`t7-07`; viewed): proves `(Object 3 of 3)` with Item `guitar`, Description `natural acoustic`, Cost `129.99`, UoM `EA`, the row-3 cell highlighted, and a picture rendered. Does not prove the picture's content.
- Also `t7-04` (viewed): the Select Form filtered to one `FX_Items` / `FX_Items` row before OK. Supports the exact-identity requirement. `t7-02` (viewed): the post-close state with only the IDOs Form (clean). `t7-03` (viewed): the Select Form dialog before the filter change.

Limitations: UI and accessibility level; the record values are read from the visible fields and the grid readback, not the database; surrogate identifiers were not visible and were not read; Save-state checks are UI-level; the picture contents are not interpreted.

## 11. Acceptance status (T7)

- **AC-6: SUPPORTED (observed; UI and accessibility level).** The FX_Items runtime Form was closed once (clean; no prompt) and reopened once (exact `FX_Items` / `FX_Items` row confirmed before OK). Dumbbell, eggs and guitar load and were each read by ordinary record navigation with their position (`Object 1 of 3`, `2 of 3`, `3 of 3`) and identifying values. The Form is clean (Save disabled; no dirty indicator) and remains open. No record edit and no runtime Save were performed.
  - Limits: the record values match the EXP-051 / EXP-052 / EXP-061 T6 readings but are not a database read; pictures not interpreted.
- AC-1 to AC-5: supported (T1–T6).
- AC-7: no other change in T7 (see §8).
- AC-8: partial. This task stops after AC-6 verification, as instructed. The final AC-7 / AC-8 acceptance report is reserved for a separate documentation-only task.

## 12. Blockers and open questions

- **No blocker in T7.** One stale-ref `browser_type` attempt on the Select Form filter failed without changing state; it was recovered with one fresh untargeted snapshot and one corrected ref (within the recovery allowance).
- Open: whether the saved values in the database match the visible readback (not checked; UI only).
- Open (carried): the alias `fxum` for FX_UMsDescription is not shown in the Properties grid; the Length 50 (joined) vs 150 (base); the shared sequence 2. Observed; not changed; not resolved in T7.

## 13. Final UI state

- Tab 1 (Web Client) selected. Two Forms are open and clean:
  - **FX_Items runtime** (active): `Description (Object 1 of 3)`, record 1 dumbbell, Save disabled, no dirty indicator, no dialog.
  - **IDOs** for FX_Items (behind it): Revision 2 / 10/10/2026, Locked By the operator, Check In and Undo Check Out enabled, Save disabled, Tables with two entries.
- No browser-native dialog; no unsaved-change prompt.
- Tab 0 (Web Designer): not acted on.

## 14. Next permitted step

Stop after AC-6. The final AC-7 / AC-8 acceptance report is reserved for a separate documentation-only task. No further browser action is authorised by T7.
