# EXP-014 — T4 read-only reconciliation (no Mongoose mutation)

Captured 2026-10-03, cycle 4, task T4. Strictly observational: no Form/variable mutation, no Save, no close/reopen, no reauthentication, no preferences, no unload/cache action, no runtime Form logic.

## Browser / tab state

- Tab 0: portal Mongoose Web Client app — UI shell live (user badge `<username> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree). No Select Form dialog currently open.
- Tab 1 (Designer): `WSWebClient/designer/Default.aspx`, `inforSessionId=…~4909ea8d-8f55-4d58-94eb-11b574f3a28d` — same Designer session as T1/T3.

## Designer state (live snapshot)

- **FX_FormVariableLab04 is OPEN** in the Designer: Form-tab shows heading `FX_FormVariableLab04` with close control (`closable FX_FormVariableLab04`).
- **Scope confirmed:** status bar `[ ScopeType: User / ScopeName: <username> ]` — intended User scope.
- **Form Properties (visible):** Name=`FX_FormVariableLab04`; Description=empty; Caption=empty; Version=`User version for user <username>`; Device Type=`Default`; Form Type=`Normal`; Is Master=`True`; Appearance/Behavior/Help/Layout sections present.
- **Details > Variables tab open.** Variables tree: exactly **one** variable under `Form - Persistent`: `FX_CloseReopenRetentionVar`. `Global - Persistent` and `Global - Temporary` groups are empty.
- **Variable definition fields (visible):** Name=`FX_CloseReopenRetentionVar`; Description=empty; **Value=EMPTY**; Persistent=`True`; Global=`False`; Version=`User version for user <username>`.
- **Designer dirtiness:** toolbar `Save` button is ENABLED (not disabled); `Undo`/`Redo` disabled. Consistent with an unsaved in-session change (the variable creation) pending.

## Network / request history evidence (no ordinary Save occurred)

- Designer tab requests (non-static): `DesignerSession/Initialize`, `GetSiteDevScopeInfo`, `SetSiteDevScopeInfo`, `FormWizard/GetFormWizard`, `FormsApi/GetForm` (#91 — body `runFormSpec":"WSFormWizardClassicBuildFromScratch"` = wizard form creation, not a save), `Designer/Form/GetFormDesigner`, `Designer/FormObject/GetObjectDesigner`, plus `GenerateServerEvent` traffic. **No Designer save endpoint appears anywhere.**
- Web Client tab requests (non-static): `FormsApi/GetExplorerFolder`, `FormsApi/GetAllForms` ×2 (Select Form inventory loads). **No save-type request.**
- **Conclusion: no ordinary Designer Save has occurred after variable creation.**

## Evidence files actually present (15 files, verified byte sizes)

| File | Bytes | Origin |
|---|---|---|
| 01-preflight-webclient-signed-in.png | 26534 | T1 |
| 02-select-form-positive-control-usersmaint.png | 35840 | T1 |
| 03-select-form-target-filter-empty.png | 35156 | T1 |
| 04-designer-scope-dialog-user.png | 66854 | T1 |
| 05-git-baseline.md | 1554 | T1 |
| 06-select-form-full-store-scan-target-absent.md | 1554 | T1 |
| 07-wizard-selection-classic-buildfromscratch.png | 70377 | T3 |
| 08-wizard-page1-name.png | 86649 | T3 |
| 09-wizard-page2-save-template-checked.png | 67772 | T3 |
| 10-wizard-page2-save-template-unchecked.png | 67697 | T3 |
| 11-process-completed-successfully.png | 68887 | T3 |
| 12-form-created-in-designer.png | 95045 | T3 |
| 13-select-form-exactly-one-after-creation.png | 36834 | T3 |
| 14-variables-tab-empty.png | 97511 | T3 |
| 15-reconcile-designer-variables-tab.png | 106731 | T4 (this task) |

T3 reached: wizard selection → wizard page 1 (name) → page 2 Save Template unchecked → process completed → Form created in Designer → Select Form exactly-one after creation → Variables tab empty → variable created (visible live now). T3 did NOT reach: setting Value, ordinary Save, post-Save verification, close, reopen.

## Repository state

- `git status --porcelain`: only `?? evidence/EXP-014/` and `?? experiments/EXP-014-…md`; HEAD `fb6c318` unchanged. No tracked file modified.

## Reconciled resumable position

1. Form creation: DONE (exactly one, User scope, open in Designer).
2. Post-creation exactly-one inventory: DONE (evidence 13, Web Client live at that moment).
3. Variable creation: DONE (exactly one, Global=False, Persistent=True).
4. Value=Seed-Close-D: NOT DONE (Value currently empty).
5. Ordinary Designer Save: NOT DONE.
6. Close/reopen: NOT DONE.

## Next safe permitted action

Resume in the open Designer Variables tab: set `FX_CloseReopenRetentionVar` Value to `Seed-Close-D`, record the full pre-Save baseline, then perform exactly one ordinary Designer Save and verify.
