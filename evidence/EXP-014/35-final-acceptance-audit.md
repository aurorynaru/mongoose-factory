# EXP-014 — T7 final read-only audit + acceptance table (cycle 7)

Strictly read-only: no Mongoose mutation, no Save, no close/reopen, no reauthentication, no preferences, no cache/unload operation, no Form logic.

## 1. Final live-state re-inspection (post-reopen negative persists)

- Designer Tab 1, same session `4909ea8d-…`; URL carries `&MGForm=FX_FormVariableLab04`.
- Form-tab heading `FX_FormVariableLab04` + close control → intended Form OPEN.
- Status bar `[ ScopeType: User / ScopeName: <username> ]` → User scope.
- Toolbar: `Save`/`Regenerate Form`/`Undo`/`Redo` all disabled → Designer CLEAN.
- Details > Variables group tree (evidence `34-final-audit-variables-groups.md`): only `Form - Persistent`, `Global - Persistent`, `Global - Temporary` headers; **zero variable rows**; page-wide search for `FX_CloseReopenRetentionVar` → no matches.
- Screenshot: `34-final-audit-variables-empty.png`.
- No repair attempted.

## 2. Evidence directory audit (36 files)

T1: `01`–`06`. T3: `07`–`14`. T4: `15`–`16`. T5: `17`–`23`. T6: `24`–`33`. T7: `34` (two files).

### T3 (07–14) precise mapping

| File | Proves |
|---|---|
| 07-wizard-selection-classic-buildfromscratch.png | classic BuildFromScratch wizard selection |
| 08-wizard-page1-name.png | wizard page 1 with Name `FX_FormVariableLab04` |
| 09-wizard-page2-save-template-checked.png | Save Template checkbox state BEFORE unchecking (contrast shot) |
| 10-wizard-page2-save-template-unchecked.png | **Save Template unchecked** before completion |
| 11-process-completed-successfully.png | successful creation (process completed) |
| 12-form-created-in-designer.png | clean created Form open in Designer |
| 13-select-form-exactly-one-after-creation.png | **immediate live Select Form exactly-one** case-insensitive `FX_FormVariableLab04` while Web Client live, before variable mutation |
| 14-variables-tab-empty.png | empty Variables state before variable creation |

Corroboration: `FormsApi/GetForm` request body `runFormSpec=WSFormWizardClassicBuildFromScratch` (creation, not save); `16-reconciliation-state.md` and `23-save-evidence-and-baseline-comparison.md` document the audit.

## 3. Prohibited-action audit (final, since creation began)

No login / Sign In-OK / deliberate reauthentication / logout / browser restart / session replacement; no preferences dialog action; no metadata/global-object/cache-clearing operation; no runtime Form execution; no alternate save path; exactly one ordinary Save total (`SaveChanges` #111 → 200 Success:true); one close; one reopen. Record text matches of prohibited patterns are scope statements and negative audits only (verified by pattern scan). **AC-9 clean.**

## 4. Repository / worktree final audit (AC-11)

- `git status --porcelain`: `?? evidence/EXP-014/` and `?? experiments/EXP-014-form-variable-definition-recovery-across-ordinary-.md` only.
- `git diff --stat`: empty — no tracked file modified.
- HEAD unchanged (`fb6c318`). No recipe, AGENTS.md, environment, other experiment file, existing FX_ artifact, or non-FX_ artifact touched. **AC-11 PASS.**

## 5. Knowledge-state audit

Every EXP-014 finding is classified **observed** only; nothing is `verified` or `replay_verified` (original experiment). **PASS.**

## 6. FINAL ACCEPTANCE TABLE

| AC | Result | Evidence (repo-relative) |
|---|---|---|
| AC-1 live session + liveness + User scope + target absent pre-mutation | PASS | evidence/EXP-014/01,02,03,04,06; record T1 section |
| AC-2 exactly-one creation, Save Template unchecked, immediate live exactly-one inventory | PASS | evidence/EXP-014/07,08,09,10,11,12,13 (+ network GetForm runFormSpec) |
| AC-3 pre-Save baseline: exactly one variable, Global=False, Persistent=True, Value=Seed-Close-D, all fields recorded | PASS | evidence/EXP-014/17,18,19 |
| AC-4 exactly one ordinary Save, success evidence, Designer clean | PASS | evidence/EXP-014/23 (SaveChanges #111 → 200 Success:true) |
| AC-5 immediate post-Save: exactly one variable, all fields = AC-3 baseline | PASS | evidence/EXP-014/20,21,22 |
| AC-6 closed exactly once via Form-tab close control while clean, no prompt, not open | PASS | evidence/EXP-014/25,26 |
| AC-7 reopened exactly once via Form-menu recent-forms path; Name/ScopeType/ScopeName identity | PASS | evidence/EXP-014/27,28,32 (scopeType:3, uaFormName Custom_form) |
| AC-8 post-reopen: exactly one variable with fields = baseline | **FAIL** | evidence/EXP-014/29,30,31,32,33,34 — zero variables after reopen |
| AC-9 no prohibited session/save/lifecycle actions since creation began | PASS | audits in evidence/EXP-014/23,33 + final scan (this file) |
| AC-10 record limits finding to observed UI-level non-recovery; disclaims runtime/cache/durability/provenance/cross-session | PASS | record T6 Knowledge-state paragraph |
| AC-11 changes confined to EXP-014 record + evidence/EXP-014/ | PASS | git audit above |

**Outcome: BLOCKED — AC-8 failed (observed negative), not an execution-procedure failure.**
