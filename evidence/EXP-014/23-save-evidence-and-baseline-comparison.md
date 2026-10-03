# EXP-014 — T5 ordinary Designer Save: network evidence + AC-3 baseline + post-Save comparison

Captured 2026-10-03, cycle 5, task T5. One ordinary Designer Save via the Designer toolbar **Save** button. No Regenerate Form, no alternate save path.

## 1. Pre-Save reconciliation (T5 re-inspection, before mutation)

All T4 reconciliation facts re-confirmed live in the Designer (Tab 1, session `4909ea8d-…`):
- `FX_FormVariableLab04` OPEN (Form-tab heading + `closable FX_FormVariableLab04` control present).
- Status bar `[ ScopeType: User / ScopeName: <username> ]` → intended User scope.
- Variables tab: exactly one variable `FX_CloseReopenRetentionVar` under `Form - Persistent`; `Global - Persistent` / `Global - Temporary` groups empty.
- Fields: Name=`FX_CloseReopenRetentionVar`, Description=empty, **Value=EMPTY**, Persistent=`True`, Global=`False`, Version=`User version for user <username>`.
- Designer dirty: toolbar `Save` enabled.
- No post-variable ordinary Save yet (no `SaveChanges` request in history at that point).

## 2. Value edit (supported Variables property-grid interaction)

- Selected the `Value` property row cell (state `mg-underEdit`), typed `Seed-Close-D` into the row's edit textbox, committed with Enter.
- Post-commit cell state: `x-grid-cell-selected x-grid-item-focused`, text=`Seed-Close-D`.
- Evidence: `17-before-value-edit-variables-tab.png`, `18-ac3-pre-save-baseline-variables-tab.png`.

## 3. AC-3 pre-Save baseline (every visible variable-definition field)

From `19-ac3-pre-save-baseline-dom.md` (Variables property tree, pre-Save):

| Field | Value |
|---|---|
| Name | FX_CloseReopenRetentionVar |
| Description | (empty) |
| Value | Seed-Close-D |
| Persistent | True |
| Global | False |
| Version | User version for user <username> |

Group tree pre-Save: `Form - Persistent` → exactly one row `FX_CloseReopenRetentionVar`; `Global - Persistent` and `Global - Temporary` empty.

## 4. Ordinary Designer Save — network evidence

- Exactly **one** save-type request in the Designer tab history:
  - `#111 POST /WSWebClient/Designer/DesignerSession/SaveChanges` → **HTTP 200**
  - Request body: `{"formId":159}`
  - Response body: `{"Success":true,"Message":"Form [FX_FormVariableLab04] and global object(s) were saved.","Payload":[]}`
- Save request count: **1**. Status: **200, Success:true**.
- No other save endpoint, no Regenerate Form invocation.

## 5. Designer returned clean (post-Save)

Toolbar after Save: `Save` **disabled**, `Regenerate Form` **disabled**, `Undo`/`Redo` disabled. Designer clean.

## 6. Post-Save baseline comparison (before any close)

From `21-post-save-variables-dom.md` (identical DOM read of the same Variables property tree):

| Field | Pre-Save (AC-3) | Post-Save | Match |
|---|---|---|---|
| Name | FX_CloseReopenRetentionVar | FX_CloseReopenRetentionVar | YES |
| Description | (empty) | (empty) | YES |
| Value | Seed-Close-D | Seed-Close-D | YES |
| Persistent | True | True | YES |
| Global | False | False | YES |
| Version | User version for user <username> | User version for user <username> | YES |

Group tree post-Save (`22-post-save-variable-groups.md`): `Form - Persistent` → exactly one `FX_CloseReopenRetentionVar`; other groups empty. **Exactly one experiment variable remains.**

## 7. Prohibited-action audit (T5)

No login / Sign In-OK / reauthentication / logout / session replacement / browser restart; no preferences opened/changed/saved; no metadata/global-object unload or cache-clearing; no runtime Form execution; no alternate save; no second Save; no close/reopen performed in T5.

## 8. AC-2 evidence (T3 files proving creation + exactly-one live inventory)

- `07-wizard-selection-classic-buildfromscratch.png` — wizard selection (classic BuildFromScratch)
- `08-wizard-page1-name.png` — wizard page 1, Name `FX_FormVariableLab04`
- `09-wizard-page2-save-template-checked.png` / `10-wizard-page2-save-template-unchecked.png` — Save Template unchecked before completion
- `11-process-completed-successfully.png` — wizard process completed successfully
- `12-form-created-in-designer.png` — Form created/open in Designer
- `13-select-form-exactly-one-after-creation.png` — Web Client Select Form showing exactly one `FX_FormVariableLab04` while Web Client live (AC-2)
- Network corroboration: `FormsApi/GetForm` request body `runFormSpec=WSFormWizardClassicBuildFromScratch` (creation, not save).
