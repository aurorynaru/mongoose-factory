# EXP-062 — Hello World Part 4 Section 4: Configure picture import UI on the User-scope FX_Items Form

**Current status (final, after T2, 2026-10-11): BLOCKED at AC-2 before any mutation.** T1 (read-only preflight) established the User-scope identity of `FX_Items`, a clean Save-disabled Designer, and a baseline. The required prerequisite **`FX_Picture` (IDO property from EXP-061) is absent from both native Designer binding surfaces inspected** (the Binding dropdown on FX_UMCombobox, and the Edit Property Binding dialog's Property picker). AC-2 **failed** on this prerequisite. AC-3 to AC-12 were **not attempted**. T2 was documentation only (zero browser calls). Nothing in the Form was changed: no deletion, string creation, placement, binding, handler, Primary change, or Save. The cause of the absence is **unresolved** (a stale-metadata explanation is a candidate only). Final report: `evidence/EXP-062/T2-final-blocked-report.md`. T1 detail: `evidence/EXP-062/T1-report.md`. Classification: observed only; nothing is replay_verified.

## Run identity

- Run `R-20261011-231213-E1AR`, cycle 0, task **T1** (read-only preflight and baseline).
- Worker session `9b0b9fe4-1d91-4845-af41-7213db776f76`; task_message_id `fa975f76-19c0-4e4a-bbd4-c47d334fd337`.
- Date 2026-10-11. LEARNING MODE. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
- Brief commits: `49b2b6a` (draft, operator guards added), `6626dd1` (approved).
- Evidence directory `evidence/EXP-062/`. Full T1 report: `evidence/EXP-062/T1-report.md`. Checkpoint (superseded): `evidence/EXP-062/T1-checkpoint.md`.

## Objective (from the brief)

On the existing User-scope FX_Items Form, follow hello-world-pt4.md Section 4 (03:00–05:13): delete only `FX_VarTestEdit`; keep `FX_RefreshButton` (Name) and set its Caption to new string `FX_sImport` (literal `Import`); add one Static `FX_PictureStatic` bound to `FX_Picture` with No Colon True; create one custom event `FX_ImportPicture` (Binary Value Action; Import; FX_PictureStatic); set `FX_RefreshButton` Events > Primary to `FX_ImportPicture`, replacing `FX_Test`; one ordinary Save; close and reopen; read-only runtime check (three records, Import button, empty picture Static). The Import action must not be activated.

## T1 — read-only preflight and baseline (AC-1; AC-2 partial)

- **Gates passed:** tab list (read-only) before any select; tab 0 Designer `MGForm=FX_Items` selected; no sign-in or configuration challenge; no browser dialog; no portal banner; Form tab Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save, Regenerate Form, Undo, and Redo disabled.
- **Components (17 entries; read-only):** Pane (00); FormCollectionGrid; four GridColumns (FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol); Pane (01); eight Static/Edit/ComboBox components (FX_ItemStatic/Edit, FX_DescriptionStatic/Edit, FX_CostStatic/Edit, FX_UMStatic, FX_UMCombobox); **FX_RefreshButton** (PushButton, Tab 0, Caption literal `FX_Refresh`, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`, Events > Primary `FX_Test`); **FX_VarTestEdit** (Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Size `37.05; 2`, Location `12.7222222222222; 30.25`, Tab 0). Exactly one of each. No `FX_PictureStatic`.
- **Handlers:** one group `FX_Test` with two enabled actions: seq 0 Prompt (`PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`); seq 1 Set Values (`SETVARVALUES(FX_VarTest=P(FX_Description))`). No `StdFormRefreshCompleted`. No `FX_ImportPicture`.
- **Variables:** `FX_VarTest` (Form - Temporary; Value `~LIT~()`; Persistent False; Global False). `InitialCommand` (Form - Persistent).
- **FX_sImport absence (read-only Caption dropdown; no create or edit):** not in the sorted string-ID list. The list shows `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM` only. Creation gate would pass for a later task.
- **FX_Picture binding prerequisite — NOT satisfied:** absent from the Designer binding dropdown (FX_UMCombobox) and from the Edit Property Binding dialog's Property picker (both read-only; both dismissed without a value change; the dialog closed with Cancel). The IDO property list in this session ends with `UDFRowPointer`; `FX_Picture` does not appear anywhere in the list.
- **Observed URL change:** after the Cancel click, the Designer tab URL lost its `?MGForm=FX_Items` query; the Form tab, selection, Save-disabled state, and footer scope were unchanged. Cause unresolved.

Screenshots (viewed):
- `evidence/EXP-062/t1-01-designer-initial-identity-scope-save-disabled.png`: identity, scope, Save disabled, FX_VarTestEdit selected.
- `evidence/EXP-062/t1-02-baseline-fx-refreshbutton-selected-caption-unchanged-save-disabled.png`: FX_RefreshButton selected; Caption `FX_Refresh`; Save disabled.
- `evidence/EXP-062/t1-03-final-settled-clean-state-after-binding-dialog-cancel.png`: FX_UMCombobox selected; Binding `object.FX_UM`; Save disabled; no dialog.

## Blocker (stop before mutation)

**`FX_Picture` is not available through the supported Designer binding selection surfaces in this session** (dropdown and Edit Property Binding dialog). EXP-061 reports the property on the IDO. The likely cause is stale cached IDO or global-object metadata loaded in this Designer session (EXP-061 left this question open; the tutorial's narrated step is an unload of global form objects). That is **unverified**; picker filtering of binary properties is not excluded, although the dialog's "Load Just In Time (normally only for large binary data)" checkbox suggests binary binding is a supported option.

Resolution needs an operator decision. Candidate routes all sit outside this task's authority: a global-object or IDO-metadata unload, a Designer relaunch, or an IDO checkout-state change. The worker did not attempt any of them. Next permitted step: none in EXP-062 until the operator decides how the FX_Picture binding becomes visible (or explicitly approves one named route).

## Final acceptance matrix (after T2)

Full matrix, sub-checks, and limits: `evidence/EXP-062/T2-final-blocked-report.md` §§2–6.

| AC | Final status | Evidence and limits |
| --- | --- | --- |
| AC-1 | **Supported (observed)**, with one limit: User-scope edit permission is **inferred** from editable controls, not proven | `t1-01`, `t1-02`, `t1-03`; snapshot `evidence/playwright/page-2026-10-11T15-13-11-696Z.yml` (Version, footer, toolbar) |
| AC-2 | **FAILED** on the binding prerequisite. Other sub-checks supported: one FX_VarTestEdit, one FX_RefreshButton, FX_VarTest, FX_Test with two actions, FX_ImportPicture absent, FX_sImport absent (gate) | `FX_Picture` absent from `evidence/playwright/page-2026-10-11T15-15-17-064Z.yml` (binding dropdown, full list read) and `…15-16-44-478Z.yml` (picker, full list read). Baseline incomplete for Pane (00/01), GridColumn and FormCollectionGrid details, existing Specific Attributes, and most event rows (T2 §3.3). Cause unresolved |
| AC-3 | Not attempted | Held before deletion by the AC-2 failure |
| AC-4 | Not attempted | FX_sImport absence gate observed (`…15-15-48-849Z.yml`); creation not performed |
| AC-5 | Not attempted | Binding prerequisite failed |
| AC-6 | Not attempted | — |
| AC-7 | Not attempted | Current Primary observed as `FX_Test` (`…15-13-34-430Z.yml`) |
| AC-8 | Not attempted | No changes exist to compare |
| AC-9 | Not attempted | Save count 0 |
| AC-10 | Not attempted | Close 0; reopen 0 |
| AC-11 | Not attempted | Runtime interaction 0 |
| AC-12 | **Not satisfied as written.** The T2 report documents the blocked outcome; the evidence for AC-3 to AC-11 does not exist | `T2-final-blocked-report.md` |

## Final Designer state (observed)

Clean. User-scoped `FX_Items` tab; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save, Regenerate Form, Undo, and Redo disabled; no dialog; FX_UMCombobox selected with binding `object.FX_UM` (`t1-03`). The Designer URL lost its `MGForm=FX_Items` query after the binding dialog's Cancel. The cause is unresolved; the Form was not reloaded or reopened by the worker.

## T2 — finalization (documentation only; zero browser calls)

- Wrote `evidence/EXP-062/T2-final-blocked-report.md`: the acceptance matrix, AC-2 binding readbacks, the incomplete-baseline list, the browser audit, the file inventory, and the knowledge states.
- Re-checked the T1 binding readbacks locally: the binding dropdown list was read to its end (`object.UpdatedBy`), and a case-insensitive search found no `FX_Picture` on either binding surface. The only case-insensitive "picture" match was the string ID `sAllPictureFiles` in the Caption listing (not an IDO property).
- Corrected the snapshot count: **20** tool-written snapshot files for the run window, not the 19 stated in the T1 chat report.
- Disclosed deviations: two screenshot timeouts (one more attempt than the one-retry guidance, a rendering timeout, not a locator failure); tool-reported locators that differed from the refs passed (confirmed by resulting UI state); three Escape dismissals; one Cancel on an editing dialog with no commit.

## Mutation and runtime count (cumulative, EXP-062)

Component deletion 0; string creation 0; handler creation 0; Toolbox placement 0; binding, Caption, or Primary change 0; Designer Save 0; Form close 0; Form reopen 0; runtime open or import 0; business-record change 0; IDO checkout, check-in, or undo 0; unload, cache, FormSync, deployment 0; browser navigate or reload by the worker 0; browser JavaScript, console, or network inspection 0.

## Mutations and counts (T1)

- Component deletion 0; string creation 0; Toolbox placement 0; property or binding change 0; handler creation 0; Primary change 0; Save 0; Designer close or reopen 0; runtime interaction 0; business-record change 0; IDO checkout or check-in or undo 0; unload or cache or FormSync 0; browser reload or navigate 0; JavaScript or console or network inspection 0.
- Cancel on the Edit Property Binding dialog 1 (no OK). Escape 3 (dismissals only). Read-only dropdown or picker opens 3. Component row selections 11 (view only).

## Documentation changes

- `experiments/EXP-062-hello-world-part-4-section-4-configure-picture-import-ui.md`: created (this record).
- `evidence/EXP-062/T1-report.md`: created.
- `evidence/EXP-062/T1-checkpoint.md`: created (checkpoint; superseded by T1-report).
- `evidence/EXP-062/T2-final-blocked-report.md`: created in T2 (final matrix, AC-2 readbacks, audit, file inventory).
- `experiments/EXP-062-…md`: updated in T2 (final status, final matrix, Designer state, T2 section).
- Tool-written (not worker-written): 20 snapshot files `evidence/playwright/page-2026-10-11T15-13-11…` to `…15-17-03…` and `evidence/playwright/console-2026-10-11T15-12-29-020Z.log`. Gitignore status unverified; operator git review is authoritative.
- `evidence/EXP-062/t1-01…t1-03` PNG files: created.
- No other repository file was written. `AGENTS.md`, `docs/`, `tools/`, prior experiment records, and recipes were not read for editing or modified.

## Knowledge state

| Finding | State |
| --- | --- |
| Designer identity FX_Items User scope, anton.ramos@3mworks.com.ph; Save disabled; no challenge | observed (one session) |
| 17-entry component inventory; FX_VarTestEdit and FX_RefreshButton singular; geometry and binding readbacks | observed (one session; Pane and GridColumn detail properties not read) |
| FX_RefreshButton Primary `FX_Test`; Caption literal `FX_Refresh` | observed |
| Handler group `FX_Test` with two actions; no FX_ImportPicture | observed |
| FX_VarTest Form - Temporary, `~LIT~()`, Persistent False, Global False | observed |
| `FX_sImport` absent from the Caption string list | observed (one run; cache not checked) |
| `FX_Picture` absent from the Designer binding list and dialog picker | observed (two surfaces, one session); **cause unresolved** |
| Post-Cancel URL query loss | observed; cause unresolved |
| Replay or procedure status | not claimed; nothing replay_verified |

## Open questions

1. Operator decision needed: how the FX_Picture binding becomes visible in the Designer (see Blocker).
2. Explanation for the URL query loss after the dialog Cancel (SPA state versus navigation).
3. Pane and GridColumn detail properties not read (documented limitation).
4. The existing statics' default No Colon state is unknown.
5. The IDO checkout (left checked out by EXP-061) was not re-read in T1.

## Outcome (operator, 2026-10-11)

**Blocked at AC-2. Prerequisite missing; nothing changed** (run R-20261011-231213-E1AR, completed/blocked at cycle 2).
- **Confinement** (operator git review): the only new paths are this record and `evidence/EXP-062/`. `assets/` (the operator's section 5 images) is the operator's own addition.

The Designer (User scope, FX_Items, clean) does **not** list the EXP-061 IDO property `FX_Picture`. It is missing from both binding surfaces inspected: the Binding drop-down and the Edit Property Binding dialog's Property picker. No component was deleted, created or bound; no string, handler or Primary was changed; there was no Save.

Operator reading: the Designer reads cached IDO metadata. EXP-061 added FX_Picture to the IDO after that metadata was loaded, and the tutorial follows the property step with "unload global form objects" (pt4 section 3, step 7). The operator decision to skip that unload is the most likely cause. A second candidate: the change only becomes visible after the IDO is checked in (FX_Items is checked out, by operator decision). Neither has been verified.

Learned (observed): **a new IDO property is not visible to the Designer's binding pickers in the same session without further action.** This contrasts with property classes, which were visible to the IDO wizard while still checked out (EXP-049, EXP-061).

Next: an operator decision. Either (a) one tenant-wide metadata unload as the tutorial does it, or (b) a Check In of the FX_Items IDO. Then replay as EXP-062-R2 with the same brief.
