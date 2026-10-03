# EXP-014 — T6 close/reopen observed result (negative: variable NOT recovered)

Captured 2026-10-03, cycle 6, task T6. One ordinary Form-tab close, one reopen via the Designer Form-menu recent-forms path. No repair attempted.

## 1. Pre-close re-inspection (all T5 facts re-confirmed)

- Form-tab open: heading `FX_FormVariableLab04` + `closable FX_FormVariableLab04` control.
- Status bar `[ ScopeType: User / ScopeName: <username> ]`.
- Variables fields (evidence `24`): Name=FX_CloseReopenRetentionVar, Description empty, Value=Seed-Close-D, Persistent=True, Global=False, Version=User version for user <username> — identical to AC-3 baseline (evidence `19`).
- Designer clean: Save/Regenerate Form/Undo/Redo disabled.
- Request history: exactly **one** `SaveChanges` (#111, 200) — no second Save.
- Evidence: `25-pre-close-clean-open-form.png`.

## 2. Close (exactly once, ordinary Form-tab close control)

- Clicked the Form-tab `closable FX_FormVariableLab04` control once.
- **No unsaved-change prompt appeared** (expected; Designer was clean).
- Post-close: Form-tab tablist empty (no Form open); toolbar Save/Regenerate disabled. Evidence: `26-after-close-no-form-open.png`.

## 3. Reopen (exactly once, Designer Form-menu recent-forms path)

- Opened the Designer **Form** menu; recent-forms list showed `FX_FormVariableLab04` (first), `FX_FormVariableLab03`, `FX_FormVariableLab02`, … (evidence `27-form-menu-recent-forms.png`).
- Clicked `FX_FormVariableLab04` once. URL gained `&MGForm=FX_FormVariableLab04`.
- Reopen load request: `#115 POST /Designer/Form/GetFormDesigner` body `{"form":"FX_FormVariableLab04","deviceId":""}` → 200.
- Response payload (evidence `32`): `name=FX_FormVariableLab04`, `caption=FX_FormVariableLab04`, **`scopeType:3`**, **`uaFormName:"Custom_form"`**, `instId:162`, `"components":[]`, and **no variable payload — no mention of `FX_CloseReopenRetentionVar` anywhere in the response**.

## 4. Post-reopen identity proof

- Form-tab heading `FX_FormVariableLab04` + close control present (Form open again).
- Status bar `[ ScopeType: User / ScopeName: <username> ]` → ScopeType=User, ScopeName matches baseline.
- Form Properties (evidence `28`): Name=`FX_FormVariableLab04`, Version=`User version for user <username>` (User-customized version), Device Type=Default, Form Type=Normal, Is Master=True.
- Network: `scopeType:3` + `uaFormName:"Custom_form"` corroborate the intended User-scoped customized version.

## 5. Post-reopen Variables comparison — NEGATIVE

- Details panel was collapsed after reopen; expanded (read-only) and opened the Variables tab.
- Group tree (evidence `29`): only the three group headers `Form - Persistent`, `Global - Persistent`, `Global - Temporary`; **zero variable rows**.
- Property tree (evidence `30`): **empty** (`[]`).
- Screenshot: `31-post-reopen-variables-tab-EMPTY.png`.
- **`FX_CloseReopenRetentionVar` is MISSING after reopen.** Every AC-3 field comparison: baseline value vs (absent) → Name, Description, Value, Persistent, Global, Version all FAIL (variable absent).
- Designer clean after reopen (Save/Regenerate/Undo/Redo disabled); 0 console errors.

## 6. Prohibited-action audit (T6)

Since Form creation began, through T6: no login, no Sign In/OK, no deliberate reauthentication, no logout, no browser restart/session replacement, no preferences action, no metadata/global-object/cache operation, no runtime Form execution, no alternate save path, **no second Save** (still exactly one `SaveChanges` #111). No repair attempted; no second reopen.

## 7. AC-2 evidence file enumeration (T3)

Creation with Save Template unchecked + immediate exactly-one live Select Form inventory:
- `07-wizard-selection-classic-buildfromscratch.png`
- `08-wizard-page1-name.png`
- `09-wizard-page2-save-template-checked.png`
- `10-wizard-page2-save-template-unchecked.png`
- `11-process-completed-successfully.png`
- `12-form-created-in-designer.png`
- `13-select-form-exactly-one-after-creation.png`

## 8. Provisional AC statuses

- AC-2 (creation + exactly-one live inventory): **PROVEN** (evidence 07–13 + network `FormsApi/GetForm` creation).
- AC-6 (ordinary close while clean): **PROVEN** (evidence 25, 26; no unsaved-change prompt).
- AC-7 (reopen via recent-forms path + identity Name/ScopeType/ScopeName): **PROVEN** (evidence 27, 28, 32; scopeType:3/Custom_form + status bar).
- AC-8 (post-reopen variable-definition field comparison vs saved baseline): **FAILED — observed negative**; the variable definition was NOT recovered at the UI level after close/reopen.
- AC-9 (no prohibited session/save/lifecycle actions): **PROVEN** (audits in evidence 23 and 33).
