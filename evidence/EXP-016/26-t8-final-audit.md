# EXP-016 — T8 Final Read-Only Audit Note (cycle 10)

Date: 2026-10-04. Mode: LEARNING MODE, strictly read-only. No Mongoose artifact mutated.

## Final acceptance (AC-1..AC-6)

| AC | Result | Evidence |
|---|---|---|
| AC-1 live session + User scope, no credential exposure | PASS | 00-preflight-initial-webclient-select-form.png, 06-t1-webclient-live-after-signin-ok.png, 09-designer-scope-dialog-user.png, 19-t6-fresh-preflight-webclient-live.png, 20-t6-designer-scope-dialog-user.png |
| AC-2 exactly one FX_FormVariableLab05, User-scoped | PASS | 08-select-form-exactly-one-fxformvariablelab05.png, 09-designer-scope-dialog-user.png, 11-form-open-fxformvariablelab05.png, 21-t6-form-menu-formsync-visible.png |
| AC-3 supported route to an independent saved-Form definition representation | FAIL | 21-t6-form-menu-formsync-visible.png (FormSync reached), 17-formsync-utilities-custom-objects.png (Pseudo Code tab exists in tab bar) — but no representation opened/generated |
| AC-4 representation exposes Form-variable metadata / variable-definition section | FAIL | no variable-metadata surface produced; 17 Filter "Variables" checkbox is a filter parameter, not metadata |
| AC-5 read-only controlled-action audit | PASS | this audit; no prohibited action invoked |
| AC-6 repository/worktree audit | PASS | git status --porcelain: only ?? evidence/EXP-016/ + record; git diff --stat empty; HEAD 837d1499 unchanged |

## Reconciliation of T4 vs T6/T7

- T4 (evidence 13-18) drove FormSync FURTHER than T6/T7 claimed: a Source configuration WAS selectable and WAS selected (16-formsync-source-config-selected.png = G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAU...), and the utilities tab bar incl. Pseudo Code WAS reached (17-formsync-utilities-custom-objects.png).
- T6/T7 "no selectable options" applied only to the re-opened FormSync instance (readonly DropList not populated), not the T4 session.
- The Filter utility was exercised (17, 18) producing a Custom Objects grid (customization tracking, NOT a saved-Form definition view; the "Variables" checkbox is a filter parameter, not metadata content).
- The Pseudo Code TAB was never opened/generated in any cycle; no pseudo-code output produced.

## Controlled-action audit (entire history)

Read-only inspection + FormSync navigation/configuration-selection/Filter browse only. No Form/variable create/edit/delete/rename; no Save/Save As/Regenerate; no runtime execution/preview; no Unload All Global Form Objects/ClearCache/metadata unload/cache-clear; no User Preference change; no Import/Synchronize/Copy/Delete invoked (Delete/Save List/Copy/Script/Export/Import/Compare tabs only seen, never clicked); no non-FX_ artifact modified; no credential value exposed. AC-5 PASS.

## Repository audit

branch exp/EXP-016; HEAD 837d1499e1ecc1e47ed22b6be663cf8fa7b9bf6c; git status --porcelain shows only ?? evidence/EXP-016/ and ?? experiments/EXP-016-discover-supported-saved-form-variable-metadata-re.md; git diff --stat empty. No recipe/AGENTS.md/environment/other-experiment/FX_/non-FX_ artifact modified. AC-6 PASS.

## Net outcome

EXP-016 FAILS AC-3 and AC-4 (no independent saved-Form definition representation exposing Form-variable metadata reached/produced); PASSES AC-1, AC-2, AC-5, AC-6. FormSync Pseudo Code tab exists and is reachable but was never opened/generated. Recorded as failed/blocked, not substituted.
