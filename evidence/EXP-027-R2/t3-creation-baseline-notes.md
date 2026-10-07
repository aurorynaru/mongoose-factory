# EXP-027-R2 — T3 creation of FX_ComponentRecoveryLab03 + untouched baseline (replay of verified procedure)

Run R-20261007-173418-s6vM cycle 3, task T3. Date: 2026-10-07.

## Pre-action inspection

Fresh conversation boundary: re-inspected first — tab 1 Designer clean (Save/Regenerate/Undo/Redo disabled), `FX_ComponentRecoveryLab02` open with Button selector `FX_ButtonRecovery02 (Button)`, User scope bar, no dialogs. Creation postcondition for the target did NOT exist → proceeded.

## Exact sequence executed in the existing Designer only (no launch, no auth)

1. One native click on toolbar **New** (`#mgtoolbarbutton-1088`) → exactly one fresh "Form Wizard Selection" dialog: radio **New Form** active; Category and Wizard comboboxes EMPTY. Evidence t3-01 inspected (dialog over the still-open Lab02 canvas).
2. EXP-019-R2 replay-verified prefix: one click on the Category picker (`mginfoconexpandable-2099-trigger-picker`) → options rendered **Classic** first ("WinStudio classic form wizards") — t3-02 inspected. One native click on the rendered Classic option (visible-text targeting; no typing) → combobox = `Classic` (find-result).
3. One click on the Wizard picker (`mginfoconexpandable-2104-trigger-picker`) → options rendered **Build from Scratch** first ("Plain form without defined components") with Category visibly "Classic" — t3-03 inspected. One native click on the rendered option (visible-text targeting; no typing) → Wizard combobox = `BuildFromScratch` (find-result).
4. t3-04 inspected: pre-OK dialog shows radio New Form, Category "Classic", Wizard "BuildFromScratch". Exactly one OK click. No rejection alert; first "Form Wizard - Build From Scratch" page appeared with Name empty (`*` only), Form Type BuildFromScratch, Form Layout GridLeft, Data Source/Query Form/Comments empty, Back/Finish disabled, Next enabled (snapshot).
5. One fill of `FX_ComponentRecoveryLab03` into the wizard Name combobox input (`#mgcombo-2137-inputEl`). Omission/correction recorded: first type attempt targeted the wrong ref (trigger wrap → "not an input", no effect); corrected one attempt on the input element committed. find-result: Name combobox = `FX_ComponentRecoveryLab03`. t3-05 inspected: page 1 with Name filled, defaults untouched; Lab02 form-tab still visible top-center.
6. One native click **Next** → page 2 (wizard same dialog): checkbox "Save Template" rendered `[checked]` (default).
7. Uncheck: first click attempt on the checkbox input ref timed out — the `ext-comp-2369-displayEl` span intercepts pointer events (same pitfall EXP-027 recorded; call log shows retries without effect). One corrected native click on the visible display box (`#ext-comp-2369-displayEl`) → find-result: checkbox "Save Template" `[active]` WITHOUT `[checked]`. t3-06 inspected: **empty/unchecked checkbox** visibly rendered beside "Save Template", Finish enabled.
8. Exactly one creation action: one native click **Finish** → alertdialog "Process Completed Successfully" (t3-07 inspected) → one OK. Wizard closed; Designer tab URL gained `&MGForm=FX_ComponentRecoveryLab03` (same tab, same session id).

## Untouched clean baseline (post-creation, before any component action; no ordinary Save performed)

Fresh snapshot + t3-08 inspected:
- Form-tab tablist now shows BOTH tabs: `FX_ComponentRecoveryLab02` (unselected, close control intact) and **`FX_ComponentRecoveryLab03` selected** with its own "closable FX_ComponentRecoveryLab03" control. Lab02 canvas band visible but untouched; no property change to it.
- Target canvas rendered EMPTY (red-bordered grid, no components visible). Rendered absence recorded WITHOUT claiming complete component cardinality.
- Properties panel on **Form** tab; grid rows (accessibility read): Name=`FX_ComponentRecoveryLab03`; Description empty; Caption cell empty (string-resource picker button present, unused); Version=`User version for user <signed-in user>`; Device Type `Default`; Form Type `Normal`; Is Master `True`; groups Appearance/Behavior/Help/Layout unexpanded.
- Design toolbar Save / Regenerate Form / Undo / Redo all DISABLED → clean state (Finish persisted per the verified recipe; no additional ordinary Save performed in this task).
- Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` — ScopeType=User, ScopeName=current user.

## Action counts (T3)

New clicks 1; selection-dialog OKs 1; wizard Next 1; Finish 1; success-OK 1; checkbox uncheck clicks: one intercepted attempt (no effect) + one effective corrected click (documented pitfall); Name fills: one effective. Forms created: exactly ONE (`FX_ComponentRecoveryLab03`). Components placed: zero. Ordinary Saves: zero. Closes/reopens of any Form: zero. Lab02 left open/clean/untouched (verified by tablist presence + no property actions).

## Preservation facts

Same Designer client retained (tab 1 URL only changed `MGForm` param; same session id). Inherited `FX_ComponentRecoveryLab02` remains open, clean, untouched. Web Client tab 0 not touched in this task. No authentication performed.
