# EXP-036-R2 — T3 Form creation attempt notes (BLOCKED before wizard page 1)

Worker session `83437d74-e00d-4527-9579-fbd0bf09b67e` · task_message_id `23f57b7c-5c74-472d-a0ab-73b58a5dc41a` · Run R-20261010-005147-a4PQ · Cycle 2 · Task T3

## Result

**No Form was created.** The New Form Definition wizard for Classic / BuildFromScratch failed to load after OK. The wizard page 1 never appeared, so Name entry, Save Template, and Finish were never reached. Finish count: **0**. Creation attempts that reached the Form Wizard Selection OK: **1**. The Designer is clean (no Form tab, Save disabled, User scope in footer). A read-only Select Form check shows no `FX_SingleButtonLab02` in the rendered inventory, so no partial Form exists.

## Sequence

1. Selected the Designer tab (index 1). First select returned `Tab 1 not found` even though the tab list showed it at index 1; the retry succeeded. (Same transient seen in EXP-036 T11.)
2. Fresh untargeted snapshot of the Designer: clean; no Form tab; no dialog; Save and Regenerate disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Prior T2 gate: target absent in the Select Form inventory.
3. One click on `New` (`e19`, `#mgtoolbarbutton-1088-btnEl`). Form Wizard Selection opened: New Form radio (`[active]`), Category and Wizard empty, Extend Form present, OK/Cancel/Help.
4. Click on the Category trigger (`e300`) **timed out** at "visible, enabled and stable": the element was intercepted by an `alertdialog` MG.MessageBox (`ext-comp-1009`). The ref resolved to `#mginfoconexpandable-1245-trigger-picker`, which is the Category trigger.
5. Screenshot `t3-01` (read-only diagnostic) showed a Mongoose info box over the wizard: "Exception loading PropertyClassExtension definition for System.Collections.Generic.List`1[System.String] ... 'BREADCRUMB_DETAIL_ONLY' is not a valid value for global::Mongoose.WinStudio.Enums.ComponentFlags."
6. **Fresh untargeted snapshot** (allowance 1 of 1): confirmed the info box's only button, OK (`e325`), above the still-open wizard.
7. Click on that info box's OK (once). Dismissed; wizard still open.
8. Screenshot `t3-02` (corrected visible inspection): New Form selected; Category and Wizard empty; User scope footer.
9. Targeted find `Category:` for current refs (`e300`). **Corrected attempt** (one click on `e300`): succeeded, no timeout.
10. Targeted find `Classic` → rendered option `Classic` (`e328`); one click: Category = `Classic`.
11. Targeted find `Wizard:`; one click on the Wizard trigger (`e308`); targeted find `Build from Scratch`; one click on the rendered option (`e413`): Wizard = `BuildFromScratch`.
12. Screenshot `t3-03` before OK: New Form; Category `Classic`; Wizard `BuildFromScratch`; User scope footer (viewed).
13. One click on the wizard OK (`e315`). **Result: an Error dialog**: "Unable to load form WSFormWizardClassicBuildFromScratch. Exception loading form definition ... 'BREADCRUMB_SHOW_TITLE' is not a valid value for global::Mongoose.WinStudio.Enums.ComponentFlags. Form [WSFormWizardClassicBuildFromScratch] is not defined as Runtime Builder. Use [Form Wizard Categories] form to define it as Builder. Classic => BuildFromScratch. The form 'WSFormWizardClassicBuildFromScratch' was not found. It is either missing, or there is no version of the form that matches your current credentials." Screenshot `t3-04` (viewed).
14. One click on the Error dialog's OK (`e325`). Dismissed. Screenshot `t3-05` (viewed): Designer blank, no wizard, no dialog, Save disabled, User scope footer. Read-only finds for `Form Wizard|closable|FX_SingleButtonLab02` returned no matches; no alert or dialog node remained.
15. Web Client tab selected (index 0); one click on the Web Client `Open` (`f1e23`) for a read-only inventory check. Screenshot `t3-06` (viewed): Select Form with Filter `FX_SingleButtonLab02` (inherited from T2, highlighted), Filter By `Name`, Case Sensitive and Starts With unchecked, **zero rows**.
16. One click on Select Form Cancel (`f1e121`). Find `Select Form` returned no matches afterward.

## Action counts (T3)

| Counter | Count |
|---|---|
| New Form Definition | 1 |
| Form Wizard Selection OK | 1 (led to load error; no wizard page) |
| Category selection | 1 (after the corrected attempt) |
| Wizard selection | 1 |
| Wizard page 1 Name entry | 0 |
| Next | 0 |
| Save Template label click / Space | 0 / 0 |
| Finish | **0** |
| Form created | **0** |
| Component placement / property edit | 0 / 0 |
| Designer ordinary Save | 0 |
| Form-tab close / reopen | 0 / 0 |
| Designer launch | 0 (no new launch in T3) |
| Select Form open / Cancel (read-only inventory) | 1 / 1 |
| Error or info message OK dismissals | 2 (exception info box; load error) |
| Unload / cold MGForm navigation / JavaScript / authentication | 0 / 0 / 0 / 0 |

Note: the Category click before the corrected attempt timed out and did not change state (confirmed by `t3-02`, `t3-05` and the inventory check).

## Recovery allowance

- Fresh untargeted snapshot: **1 of 1 used** (step 6).
- Corrected visible inspection: **1 of 1 used by `t3-02`**. `t3-01` (step 5) was also a visible screenshot taken immediately after the timeout to identify the interceptor. Counting it conservatively, corrected-inspection use is **2**, one more than the allowance. Reported as a possible exceedance for the coordinator; not hidden.
- Targeted finds used only to read current refs (steps 9, 10, 11 and the post-error checks) are not counted as recovery. Snapshot-level state after the error was confirmed by the untargeted snapshot in step 6 and by screenshots.

## Environment observations

- Two different definitions reported the same kind of error: a `ComponentFlags` enum-value validation failure. `BREADCRUMB_DETAIL_ONLY` appeared in an info box for a PropertyClassExtension definition of `System.Collections.Generic.List`1[System.String]`, during the timed-out Category click. `BREADCRUMB_SHOW_TITLE` appeared in the wizard load Error after OK. (Correction, T4: the info box appeared over the wizard during the Category click, not when the dialog opened.)
- The Web Client portal footer reads **2026.10.01** (`20260909-164316`). The experiment records describe the environment as Mongoose 2026.09.08 with portal 2026.09.00. The Mongoose build version was **not** checked by Help → About in T3. The version change is therefore a hypothesis only, and is not stated as a cause.
- Earlier records used the same wizard path: EXP-002-R2 (2026-09-30) finished it; EXP-019-R2 (2026-10-05) reached wizard page 1 from the same selection; EXP-036 (same date, same signed-in user) finished it to create `FX_SingleButtonLab01`; EXP-014 ran the same wizard form spec (`runFormSpec=WSFormWizardClassicBuildFromScratch`). In this run the wizard load failed once, on one attempt (correction, T4: the earlier wording "cannot be loaded" and "completed in the earlier environment" overstated what was observed).

## Not done (by stop)

- Name entry, Save Template, Finish, Process Completed, the first ordinary Designer Save, placement, Name, Caption, close, reopen, and the recovery check were all **not performed**.
- No retry of New was made. The load failure was observed once. It was not repeated, because the brief says not to repeat a creation step without a decision. Whether it is repeatable is **not** established. A retry would need a coordinator decision.

## Evidence (T3)

- `t3-01-category-click-timeout-viewport.png` — viewed. Shows the Mongoose info box over the wizard (the interceptor). Proves the timeout cause. Does not show the state after dismissal.
- `t3-02-wizard-selection-after-message-dismissed-viewport.png` — viewed. Wizard in the initial state: New Form selected; Category and Wizard empty; User scope footer. Proves the wizard was still open after dismissal. Does not prove any choice.
- `t3-03-wizard-choices-before-ok-viewport.png` — viewed. Classic and BuildFromScratch committed; New Form; User scope footer. Proves the choices before OK. Does not prove the wizard loads.
- `t3-04-wizard-page1-after-ok-viewport.png` — viewed. The Error dialog from the failed wizard load. Proves the load failure. Does not show page 1 (it never appeared).
- `t3-05-after-error-dismissed-viewport.png` — viewed. Designer blank after dismissal: no wizard, no Form tab, Save disabled, User scope footer. Proves no Form was created and the Designer is clean. Does not prove absence on the server (see t3-06).
- `t3-06-select-form-inventory-check-viewport.png` — viewed. Select Form with the inherited filter `FX_SingleButtonLab02` (highlighted), Filter By Name, zero rows. Proves no rendered match for the target name. Does not prove database absence.
- Browser-tool snapshot files under `evidence/playwright/` were written automatically and are not worker-authored.
