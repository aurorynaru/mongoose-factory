# EXP-018 — Button Caption Recovery Across Ordinary Close/Reopen

Status: **BLOCKED** at the wizard-selection prerequisite (cycle 2). AC-2 (Form creation) cannot be reached.
Run: R-20261005-202128-FhnC
Editing scope: User
Target: FX_ComponentPropertyLab01 (Form), FX_PersistButton (Button component)
Evidence directory: evidence/EXP-018

## Objective

Create exactly one new User-scoped classic BuildFromScratch Form named FX_ComponentPropertyLab01, add exactly one Button component named FX_PersistButton, set only its Caption to the literal `Component Persistence Button`, ordinary-save once, close via the Designer Form-tab close control, reopen via the supported Form-menu recent-forms path, and verify the exact Button identity and Caption are recovered unchanged. Tests only Button Caption recovery across this ordinary close/reopen path.

## Acceptance checks (intended)

- AC-1: Read-only preflight — live usable session, User editing scope, FX_ComponentPropertyLab01 absent.
- AC-2: Exactly one new User-scoped classic BuildFromScratch Form FX_ComponentPropertyLab01 created via the verified basic-form recipe.
- AC-3: Exactly one Button component FX_PersistButton added via the verified component procedure.
- AC-4: Only FX_PersistButton Caption set to exactly `Component Persistence Button`.
- AC-5: Exactly one ordinary Designer Save to a demonstrably clean state.
- AC-6: Close via the supported Designer Form-tab close control.
- AC-7: Reopen via the supported Designer Form-menu recent-forms path.
- AC-8: Exact Button identity and Caption recovered unchanged after reopen.
- AC-9: Decisive visible evidence under evidence/EXP-018/ (pre-Save and post-reopen).

## Cycle 0 (T1) — preflight and wizard-selection attempt

### Preflight (read-only) — PASSED

- Live usable session: Web Client portal tab loaded; user toolbar button shows the signed-in user with config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Target absence: the FormSync Custom Objects grid (User scope) lists FX_ComponentLab01/02, FX_FormPropertyLab01–12, FX_FormVariableLab02–05, FX_TestBlank01/02, FX_VariableLab01 and others — **FX_ComponentPropertyLab01 is absent**.
- Editing scope: User (Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` after confirming the "Identify Your Editing Scope" dialog with OK).

### Designer open — PASSED

- Opened Web Designer via the Web Client Designer split button; new tab at `WSWebClient/designer/default.aspx` (no MGForm param). After scope OK, URL became `?MGForm=FormSync` (the previously active form).
- Scope bar confirmed User.

### Wizard selection — BLOCKED

- Clicked Designer **New** (`mgtoolbarbutton-1088`). "Form Wizard Selection" dialog opened.
- Radio "New Form" already active. Category combobox set to "Classic". Wizard combobox typed "BuildFromScratch".
- Clicking the wizard dialog OK produced alert: **"No wizard form selected."**
- Re-typing/committing the wizard value produced alert: **"@@# is not a valid Wizard. Do you want to change the value now?"** — the typed value was stored as an invalid placeholder.
- After committing Category via its dropdown and re-opening the wizard dropdown, the dropdown visibly displayed one option: **"Build from Scratch — Plain form without defined components"** (screenshot 04). Clicking that option then OK again still produced **"No wizard form selected."**
- The wizard combobox's internal value read back as "BuildFromScratch", but the dialog's wizard validation continued to reject the selection.

## Cycle 2 (T2) — single fresh read-only inspection

Performed exactly ONE fresh read-only page snapshot of the visible Designer tab plus one screenshot. No clicks, no OK, no Category/Wizard change, no alert dismissal, no Ext/internal/DOM inspection.

### OBSERVED facts (visibly established by this inspection)

- Current tab: Designer tab at `WSWebClient/designer/default.aspx?MGForm=FormSync` (FormSync form loaded as the open form; this is the pre-existing FormSync form, not a target artifact).
- A **"Form Wizard Selection"** dialog is visible (ref e503) with: radio "New Form" (selected), "Category:" combobox, "Wizard:" combobox, radio "Extend Form", and OK/Cancel/Help buttons. The Category and Wizard combobox **displayed text values are not rendered in the accessibility snapshot** at this depth (the combobox value cells are collapsed).
- An **alertdialog** titled "Infor Mongoose Application Development Framework - Form Wizard Selection" is visible over the dialog, body text: **"No wizard form selected."**, with an active **OK** button (ref e560).
- Scope bar visible: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Designer Save button is **disabled** (clean state for the loaded FormSync form).
- Screenshot `evidence/EXP-018/05-fresh-inspection-wizard-dialog-alert.png` shows: the Form Wizard Selection dialog with "New Form" radio selected, the alert "No wizard form selected." with OK, and the FormSync form panel behind it. It does NOT show the Category/Wizard combobox committed values (collapsed in this view).

### GUESSES / UNVERIFIED explanations (clearly labeled)

- GUESS (unverified): The wizard combobox autocomplete/registry list may be populated lazily and the typed value "BuildFromScratch" may not match the wizard's internal registry key, so the dialog's wizard validation rejects it. NOT confirmed; not investigated further per instruction.
- GUESS (unverified): The verified EXP-002 recipe worked in this environment, so a supported selection path likely exists; the specific mechanism that failed here is not established by visible evidence.
- These are explicitly NOT claims; no internal store/registry inspection was performed in cycle 2.

## Blocker

The wizard-selection prerequisite (selecting the BuildFromScratch wizard in the Form Wizard Selection dialog) could not be completed via the supported visible controls in this session. The dialog repeatedly reports "No wizard form selected." despite the wizard dropdown visibly offering "Build from Scratch". Per the cycle-2 instruction, no further recovery or browser action was taken.

**AC-2 cannot be reached.** EXP-018 is ready to complete **BLOCKED**.

## Evidence files

- evidence/EXP-018/00-baseline-webclient-formsync-list.png — Web Client FormSync Custom Objects grid; shows FX_ComponentPropertyLab01 absent among User-scoped forms. Supports AC-1 (target absence). Does not prove scope by itself.
- evidence/EXP-018/01-form-wizard-selection-dialog.png — Form Wizard Selection dialog open. Supports that the wizard flow was entered.
- evidence/EXP-018/02-wizard-dropdown-options.png — wizard dropdown opened (option text not legible in this capture).
- evidence/EXP-018/03-wizard-dialog-state.png — "No wizard form selected." alert over the wizard dialog.
- evidence/EXP-018/04-wizard-dropdown-empty-blocker.png — wizard dropdown visibly showing "Build from Scratch — Plain form without defined components" while combobox shows "BuildFromScratch".
- evidence/EXP-018/05-fresh-inspection-wizard-dialog-alert.png — cycle-2 fresh inspection: Form Wizard Selection dialog + "No wizard form selected." alert visible; scope bar User.

## Knowledge state per finding

- Preflight (session live, scope User, target absent): **observed**.
- Designer open + scope confirmation: **observed**.
- Wizard selection via Form Wizard Selection dialog (BuildFromScratch): **unresolved / blocked** — repeated "No wizard form selected." rejection; no verified supported path established in this session.
- Button component + Caption + Save + close/reopen recovery: **not reached** (AC-2 prerequisite blocked).

## Open questions / blockers

- Blocker: wizard-selection prerequisite cannot be completed via supported visible controls in this session; "No wizard form selected." persists.
- Unresolved: why the visibly-offered "Build from Scratch" wizard option is rejected by the dialog's wizard validation (not investigated per instruction; would require internal inspection which is out of scope).
- No target artifact was created; no FX_ artifact was mutated; no non-FX_ artifact was touched.
