# EXP-031 T2 — positive-control Cancel/reopen sequence notes (AC-2)

Run: R-20261007-200942-NcTj, cycle 3, task T2. Date: 2026-10-07.
Zero Mongoose mutations this task besides permitted filter input + dialog Cancel/Open. Designer tab untouched; no Form opened/closed/saved/created; OK/Enter never pressed; no row activated.

## §A Start-state guard (no lifecycle change since T1)

Fresh untargeted snapshot at task start matched the T1 baseline exactly: same two tabs/URLs (`favoriteContext=FX_ComponentRecoveryLab03` tab 0, Designer `&MGForm=FX_ComponentRecoveryLab03` tab 1); Select Form dialog open; textbox `FX_ButtonTypeRecoveryLab01`; Filter By=Name; Case Sensitive unchecked; Starts With unchecked; grid one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02`. Guard PASS.

## §B Sequence (exact counts)

1. ONE filter-setting operation: typed exactly `FX_ComponentRecoveryLab02` into the active textbox (Playwright fill on `#textfield-1143-inputEl` in the mongoose iframe). No Enter/OK.
2. Settled pre-Cancel evidence captured: accessibility facts (`t2-precancel-dialog-facts.txt`: textbox exact `FX_ComponentRecoveryLab02`, combobox `Name`, both checkboxes unchecked, grid one row) + inspected screenshot `t2-01-precancel-positive-control-filter.png` (filter renders truncated `…omponentRecoveryLab02`; Case Sensitive/Starts With boxes visibly empty; Filter By dropdown "Name"; row visible; OK/Cancel/Help not pressed).
3. ONE ordinary Cancel click on the dialog's Cancel button -> `find "Select Form"` = none: dialog dismissed, non-activating (no form opened; toolbar unchanged).
4. ONE supported reopen: click on Web Client toolbar **Open** -> fresh untargeted settled snapshot shows `dialog "Select Form"` present again.
5. CORRECTED VISIBLE INSPECTION (authorized allowance), BEFORE any further filter/settings input, of the reopened dialog subtree: textbox active with exact `FX_ComponentRecoveryLab02`; combobox `Name`; checkbox "Case Sensitive" unchecked; checkbox "Starts With" unchecked; grid exactly ONE row: Caption/Name both `FX_ComponentRecoveryLab02`. OK/Cancel/Help present, not pressed.
6. Rendered screenshot of reopened state captured: `t2-02-reopened-retained-positive-control.png` (inspected).

Counts this task: filter-setting operations = 1; tested Cancels = 1; tested reopens (Open) = 1; OK/Enter = 0; recovery inspections used = one fresh untargeted snapshot + one corrected visible subtree inspection (both settled, no ambiguity); further filter input after reopen = 0. No final dismissal Cancel performed per instruction (dialog left OPEN as found).

## §C AC-2 result: PASS

Retention leg: filter text AND settings exactly retained across ordinary Cancel + reopen (`FX_ComponentRecoveryLab02` / Name / unchecked / unchecked), inspected BEFORE any further input.
Rendered-row leg: after the tested reopen the dialog's settled visible grid shows exactly one row with Name exactly `FX_ComponentRecoveryLab02` — the expected exact row established from a fresh reopened dialog instance (a new Open issued a new dialog; per accepted EXP-030 T2 evidence, stale rows only persist on fill-without-reopen).

Limitation (honest): because the pre-Cancel grid already displayed this same single row, text+rendered-row evidence cannot fully separate "dialog genuinely re-applied the filter to a fresh server query" from "reopened dialog re-inherited prior rendered content"; full separation would require a two-value discriminating comparison, which is the natural role of the AC-4 absence-probe sequence (a filter whose rows were never pre-rendered), gated next task.

## §D Network audit (corroboration only; limitation)

`t2-network-audit.txt`: filtered non-static list identical to T1's (#155–#256, latest GetAllForms #256 = EXP-030 T1's recorded index). The network panel evidently RESET at the session navigation boundary, so no post-T1 request detail is naturally available this task; ZERO SaveChanges among visible requests. This file was saved instead of a response body (a targeted body fetch returned the list form only); treated strictly as corroboration of clean state, not proof of refresh.

## §E End state

Tab 0: Web Client with Select Form dialog OPEN showing retained filter `FX_ComponentRecoveryLab02`, Filter By=Name, Case Sensitive unchecked, Starts With unchecked, one settled row `FX_ComponentRecoveryLab02`; Lab03 runtime panel open; toolbar clean (Save disabled). Tab 1 Designer at Lab03 untouched. No prompts/dirty state anywhere.
