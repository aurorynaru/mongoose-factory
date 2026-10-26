# EXP-136 T18 - authorized Designer-session recovery and read-only AC-9 persistence check (STOPPED at the fresh-session gate)

Run R-20261026-062909-9GoC, cycle 25, task T18. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User, account `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- The existing Designer tab (tab 1) was observed in a changed state: it now has `FX_InventoryEditor` loaded, and its URL carries `MGForm=FX_InventoryEditor`. T17 had left the Designer with no loaded Form.
- One ordinary browser reload was performed (F5 key press on the Designer tab, operator-authorized conditional reload). **No visible effect of that reload was established.** The Designer looked identical before and after: same loaded Form, same URL, no Identify Your Editing Scope dialog.
- The fresh-session gate (T18 steps 6-8) therefore was NOT met. Per steps 9 and 33 (stop at the first material blocker), the worker stopped. `FX_InventoryDashboard` was NOT opened and the persistence readbacks (steps 11-26) were NOT performed.
- **AC-9 remains PENDING (not passed; not failed).** No Form, variable, asset, component or script persistence was re-read in a demonstrably fresh Designer.
- No Save, no Form creation or open by the worker, no component, script, variable, asset, Caption, event or Form-property change, no Portal reload, no runtime open, no Refresh, no inventory read, no session recovery, no second reload.

## 2. Preparation and source discrepancy

- Read: `AGENTS.md`, `evidence/EXP-136/t16-single-designer-form-save.md`, `evidence/EXP-136/t17-fresh-designer-persistence-readback.md`, and the EXP-136 record (T17 checkpoint).
- The brief and operator handoff cite an "EXP-135 T5" observation that the Web Client Designer split button can reload an existing Designer window in place. **That observation could not be located in the repository.** `evidence/EXP-135/t5-*` (`t5-caption-correction-blocked.md`, `t5-01` to `t5-05`) and the EXP-135 experiment record T5 section document the Caption correction, not Designer launch or reload behaviour. Searches of `experiments/` and `evidence/EXP-135/` for split-button, reload, reuse and in-place wording found only: EXP-002 and EXP-003 (a full Designer reload dropped the `MGForm` parameter and left the Designer empty), EXP-010 (a Form-menu reopen updated the URL in place without a document reload), and EXP-013 (a reload produced the Identify Your Editing Scope dialog). The accepted "reload-in-place" qualification therefore rests on an unlocated source and is treated as unverified here.

## 3. Session identification (read-only)

- Tab list (before any tab selection, first list of the task): tab 0 Web Client (`favoriteContext=FX_InventoryEditor`, current before selection); tab 1 Designer (`WSWebClient/designer/Default.aspx`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Tab 1 URL carried `MGForm=FX_InventoryEditor`. The inforSessionId parameter was present; its value is not recorded here.
- Tab 1 selected after the list (succeeded first time). One fresh untargeted snapshot: `evidence/EXP-136/t18-designer-tab1-fresh-snapshot-pre-action.yml`.

## 4. Observed Designer state before any T18 action

| Check | Observed | Evidence |
| --- | --- | --- |
| Loaded Form | Heading and tab `FX_InventoryEditor` (selected); not `FX_InventoryDashboard` | snapshot; `t18-designer-pre-reload-state-FX_InventoryEditor-loaded.png` |
| Form properties | Name `FX_InventoryEditor`; Caption `FX_InventoryEditor`; Version `User version for user anton.ramos@3mworks.com.ph`; Form Type `Normal`; Is Master `True`; Script Language `Visual Basic`; Size `69; 21` | snapshot; screenshot |
| Form contents | Canvas shows a six-row Static/Edit layout; no UserControl or `FX_InventoryControl` pane visible in the Designer | screenshot |
| Save state | `Save` disabled; `Regenerate Form` disabled; `Undo` and `Redo` disabled | snapshot lines 10-13, 52-55 |
| Scope | Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot line 594; screenshot |
| Dialog | None; alert containers empty | snapshot |
| Console | `2 errors, 0 warnings`; both are `unload` Permissions-Policy violations, the same two previously recorded | page header; console read |

Comparison with the earlier records:
- T16 (after the one Save): the Designer URL had no `MGForm` parameter and `FX_InventoryDashboard` was loaded.
- T17 (after the close): no Form loaded, empty canvas and Properties, Save disabled, User footer. T17 did not record the tab-1 URL after the launch click.
- T18 (first snapshot): `MGForm=FX_InventoryEditor` in the URL and `FX_InventoryEditor` loaded.

The worker took no action in tab 1 between T17's post-close observation and this first T18 snapshot. The Web Client launch click in T17 was the only Designer-related action in that interval. The T17 record does not show when the tab-1 change occurred, so that link is an inference, not a verified sequence. The loaded `FX_InventoryEditor` is an existing user Form that the worker did not open. It is clean and was not modified.

## 5. Pre-reload gate (steps 5-7)

- No Identify Your Editing Scope dialog appeared, so no scope selection was made. The footer already showed User / `anton.ramos@3mworks.com.ph`, and the configuration title showed `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Reload positively established from visible evidence: **not established.** The change in tab 1 (MGForm added, a different Form loaded) shows the Designer was driven by a request the worker did not make, but it does not show whether the document itself reloaded. The T17 record and the EXP-135 T5 citation do not resolve it.
- Gate before reload: Save disabled, Undo disabled, no dialog, no unsaved change. The reload was therefore permitted by the operator's conditional authorization.

## 6. The single ordinary reload (step 7)

- Action: one `browser_press_key` F5 with tab 1 selected and the pre-reload state recorded. Count: 1. No other reload, navigation or launch was performed.
- Wait 8 s, then one tab list (2 lists total in the task). Tab 1 still current; URL still carries `MGForm=FX_InventoryEditor`; tab 0 unchanged.
- Post-reload snapshot (tool-written): `evidence/playwright/page-2026-10-26T01-31-08-284Z.yml`. Same loaded Form `FX_InventoryEditor`, same tab and heading identifiers, `Save` disabled, same User footer, no dialog. The Form Properties show the same values as before.
- Post-reload screenshot: `evidence/EXP-136/t18-designer-post-single-reload-state.png`. Visually identical to the pre-reload screenshot.
- Console read after the reload (warning level, scoped to the current page): `Total messages: 2 (Errors: 2, Warnings: 0)`; the same two `unload` errors. This read does not distinguish a reload from no reload.

Interpretation (not proof):
- No positive evidence of a document reload was observed. Two observations argue against an effective full reload: the `MGForm` parameter was retained (EXP-003 recorded that a full reload dropped it and left the Designer empty), and no Identify Your Editing Scope dialog appeared (EXP-013 recorded that a reload produced it).
- The reload's effect is therefore **not established**. Either the key press did not reload the document, or a reload produced no observable change. The two cases are not distinguished by the available observations.

## 7. Stop decision

- Step 8 requires the reload to be recorded as the qualified fresh-session route. It cannot be recorded that way: the reload effect is not demonstrated.
- Step 9 and the stop rule (step 33) apply: the reload did not establish a fresh Designer, and no second reload or launch is authorized. The worker stopped here.
- Not performed: the Edit-menu liveness probe (step 10); opening `FX_InventoryDashboard` through the Form menu or recent-forms (step 11); Form identity and property readback (steps 12-13); Components and UserControl readback (steps 14-16); the Form Script editor and Compile Result readback (steps 17-20); the `FX_vInventoryJson` Global/Persistent readback (steps 21-22); the `FX_Inventory/index.html` asset readback (steps 23-26).
- Re-opening `FX_InventoryDashboard` in this same Designer would be a same-session readback. It would not satisfy AC-9's fresh-Designer requirement, so the worker did not do it.

## 8. Side effect to disposition

- The Designer tab 1 now has `FX_InventoryEditor` loaded (clean, Save disabled, not modified, not saved). The worker did not open it; it appeared after the T17 Web Client launch click. The coordinator should decide whether to close it with one ordinary clean close in a later authorized task.

## 9. Mutation and browser ledger (T18)

Mutations:
- Designer Saves: 0.
- Form creation, open or close by the worker: 0 (the FX_InventoryEditor load was not a worker action).
- Variable, asset, component, Caption, Script Language, script method and event changes: 0.
- Designer reloads: 1 (F5 key press; effect not established).
- Designer launches: 0 (the T17 click was not repeated).
- Portal reloads, runtime opens, Refresh activations, inventory reads: 0.
- Regenerate Form, FormSync, global-object unload, IDO-metadata unload, deployment, cache clearing: 0.
- Enter presses: 0. Browser JavaScript authored by the worker: 0. Credentials typed or read: 0. Session recoveries: 0. Dialogs accepted or dismissed: 0.

View-only actions:
- Tab lists: 2. Tab selects: 1 (tab 1).
- Snapshots: 2 (one worker-saved, one tool-saved after the reload).
- Screenshots: 2 (`t18-designer-pre-reload-state-FX_InventoryEditor-loaded.png`, `t18-designer-post-single-reload-state.png`).
- Console reads: 2 (one before the reload, one after; both warning-level; both returned the same two `unload` errors).
- Waits: 1 (8 s).
- Reads of repository records: as listed in section 2.

## 10. Evidence files (T18)

- `evidence/EXP-136/t18-fresh-designer-persistence-readback.md` (this file)
- `evidence/EXP-136/t18-designer-tab1-fresh-snapshot-pre-action.yml`: pre-action snapshot; `FX_InventoryEditor` loaded; Save disabled; User footer; MGForm in the URL (as shown in section 3).
- `evidence/EXP-136/t18-designer-pre-reload-state-FX_InventoryEditor-loaded.png`: viewport before the reload. Proves the loaded Form is `FX_InventoryEditor` (Caption, Visual Basic, Normal, Is Master True), the User footer and Save greyed. Does NOT prove any `FX_InventoryDashboard` state, and does NOT prove a reload.
- `evidence/playwright/page-2026-10-26T01-31-08-284Z.yml`: tool-written post-reload snapshot; same state as above.
- `evidence/EXP-136/t18-designer-post-single-reload-state.png`: viewport after the single reload; visually identical to the pre-reload capture. Proves the Designer state did not visibly change; does NOT prove the reload occurred.

## 11. Acceptance status after T18

| AC | Status after T18 | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted) | T18 re-observed the User footer and the configuration title. The account header was not re-read on this tab. |
| AC-2 | Carried: passed at operator-verified hash level (not recomputed) | No source read in T18 |
| AC-3 | Carried: same-session supported (T11, T16); fresh readback NOT performed | Steps 21-22 not reached |
| AC-4 | Carried: operator-accepted (qualified; token-level, not byte equality) | Steps 23-26 not reached |
| AC-5 | Carried: same-session passed (qualified); fresh identity NOT re-read | Steps 11-13 not reached |
| AC-6 | Carried: same-session passed (qualified); fresh component readback NOT performed | Steps 14-16 not reached |
| AC-7 | **PENDING (qualified)** | No Compile Result reopened; Save success is not compile evidence |
| AC-8 | PASSED (observed, T16) | One Save; success response; disabled Save afterward |
| AC-9 | **PENDING (not passed; not failed)** | Fresh-Designer gate not met: the reload's effect is not established; the Form was not reopened; no saved-definition readback in a fresh Designer |
| AC-10 to AC-13 | Not evaluated | Later stages; no Portal reload or runtime action authorized in T18 |

## 12. Open questions and decisions for the coordinator

1. **Fresh-session route for AC-9.** Options: (a) a new authorized task with one further split-button launch attempt, after a recorded pre-check of the Web Client tab; (b) an explicitly authorized full Portal or Web Client reload, which the brief reserves for a later stage; (c) accept a same-session Form-menu reopen of `FX_InventoryDashboard` for read-only readback, with AC-9 qualified as same-session. Recommendation: (c) to recover the readbacks, paired with (a) if the operator needs a true fresh Designer.
2. **Operator-accepted qualification.** The reload-in-place qualification was accepted on the basis of an EXP-135 T5 observation that the worker could not locate in the repository. The operator should confirm the source or withdraw the qualification.
3. **Loaded Form `FX_InventoryEditor`** in Designer tab 1: disposition (ordinary clean close in a later task, or leave as is).
4. **AC-7 compile question** remains open (carried from T15/T16).
5. Carried unresolved items (unchanged): `User Control Name` `V(UserCtrl_userControl1_USER)`; the Page URL without `MGForm`; the T13 Save-state transition; Global-versus-Form storage of `ThisForm.Variables("FX_vInventoryJson")`; the cause of the T17 launch non-appearance; the `MGForm` parameter appearing on the Web Client URL after the T17 click; the two `unload` Permissions-Policy console errors (unexplained, pre-existing).

## 13. Next permitted action

Coordinator decision on the fresh-session route (section 12, item 1) and on the loaded `FX_InventoryEditor` (item 3). No further Designer reload, launch, Form open, Save or Portal action is authorized by T18.
