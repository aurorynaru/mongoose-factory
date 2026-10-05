# EXP-019 — Visible-Dropdown Classic + Wizard Selection (Fresh Dialog)

Status: **SUCCESS (single attempt)** — the fresh-dialog, untyped, two-dropdown selection sequence was accepted and the first Build-from-Scratch wizard page appeared. Stopped before name entry / page advancement / artifact creation.
Run: R-20261005-212205-UYB7 (cycle 0, task T1)
Editing scope: User
Target: (none) — no artifact created
Evidence directory: evidence/EXP-019

## Objective

Test a distinct end-to-end visible interaction path for the prerequisite that blocked EXP-018: fresh dialog + native rendered selection of both Category and Wizard, without typed dropdown values. Cancel the previously used Form Wizard Selection dialog after the permitted preflight, open a fresh selection dialog, choose Classic and then Build from Scratch from their rendered dropdown options, and submit the selection dialog once. Observe whether the first Build-from-Scratch wizard page appears, then stop before name entry, page advancement, or artifact creation.

## Comparison to EXP-018

EXP-018 (BLOCKED) typed "BuildFromScratch" into the wizard combobox, then clicked the rendered "Build from Scratch" dropdown option and committed Category via its dropdown — and still received "No wizard form selected." EXP-018 also left the same dialog/alert in place when this session began. What is new here is the **complete fresh-dialog sequence with no typed values**: alert dismissed, used dialog cancelled, a freshly opened dialog with both dropdowns empty, then Classic and Build from Scratch selected purely from rendered options, then one OK submission. Dialog recreation and the untyped two-dropdown selection vary **together**; this is not single-variable causal isolation. A success establishes only that this visible sequence was accepted in this attempt; it cannot identify whether reopening, Category selection, Wizard reselection, or their combination was decisive.

## Sequence (observed)

1. Read recipe `recipes/forms/create-basic-form.md` and `experiments/EXP-018-...md` before browser interaction.
2. Baseline inspection (fresh snapshot): Designer tab at `WSWebClient/designer/default.aspx?MGForm=FormSync`; FormSync form loaded; Save button **disabled** (clean); scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; a **Form Wizard Selection** dialog open with radio "New Form", Category combobox displaying "Classic", Wizard combobox displaying "BuildFromScratch"; an **alertdialog** "Infor Mongoose Application Development Framework - Form Wizard Selection" body "No wizard form selected." with active OK. No partially completed creation wizard present. Evidence: 00-baseline-wizard-dialog-alert.png.
3. Clicked the alert's visible OK (dismissal of the known "No wizard form selected." alert — permitted preflight).
4. Clicked the visible **Cancel** on the existing Form Wizard Selection dialog. Postcondition verified: no wizard dialog remained (search for "Form Wizard Selection" → no matches); tab URL became `designer/default.aspx` (no MGForm param). Evidence: 01-after-cancel-no-dialog.png.
5. Clicked Designer **New** ("New Form Definition") once. A **fresh** "Form Wizard Selection" dialog opened (new ref e668) with radio "New Form" active and **both Category and Wizard comboboxes empty** (no displayed values). Evidence: 02-fresh-wizard-dialog-empty-dropdowns.png.
6. Opened the Category dropdown via its rendered caret (native click on the picker control). Rendered options list observed: Classic ("WinStudio classic form wizards"), ExtDataSource, Flex, Form Builder, IDS, New Data, REST. Evidence: 03-category-dropdown-options.png.
7. Clicked the rendered **Classic** option. Combobox then displays "Classic". Evidence: 04-category-classic-selected.png.
8. Opened the Wizard dropdown via its rendered caret. Rendered options observed: Build from Scratch ("Plain form without defined components"), Detail-Only, Grid-Only, Multi-View, Query, Report, Tile. Evidence: 05-wizard-dropdown-options.png.
9. Clicked the rendered **Build from Scratch** option. Wizard combobox then displays "BuildFromScratch" (the display label of the clicked option; nothing was typed). Evidence: 06-wizard-buildfromscratch-selected.png.
10. Clicked the selection dialog **OK** exactly once. Result: **no rejection alert**; a new dialog **"Form Wizard - Build From Scratch"** appeared — the first wizard page — with instruction text "Select a form template or enter a new form name...", Name field (empty, required `*`), Form Type: BuildFromScratch, Form Layout: GridLeft, Device Type: Default, Data Source/Query Form/Comments empty, and buttons Back (disabled) / Next / Finish (disabled) / Cancel / Help. Evidence: 07-after-ok-result.png, 08-first-wizard-page.png.
11. **Stopped** at the first wizard page. No name entered, no Next/Finish clicked, nothing saved, no artifact created.

## Final UI state

Designer tab at `WSWebClient/designer/default.aspx` (no MGForm param); "Form Wizard - Build From Scratch" first page open with empty Name field; FormSync form panel behind it (Save disabled, clean); scope bar User. The wizard page was left open and untouched — no cancel/close performed (not required by the brief).

## Evidence files

- evidence/EXP-019/00-baseline-wizard-dialog-alert.png — baseline: used Form Wizard Selection dialog (Category "Classic", Wizard "BuildFromScratch" displayed) + "No wizard form selected." alert with OK; FormSync loaded; scope bar User. Supports preflight (session live, scope User, clean loaded form, no partial wizard) and the EXP-018 residue state.
- evidence/EXP-019/01-after-cancel-no-dialog.png — after alert OK + Cancel: no wizard dialog; FormSync panel visible, Save disabled. Supports that the used dialog was cancelled and state remained clean.
- evidence/EXP-019/02-fresh-wizard-dialog-empty-dropdowns.png — freshly opened Form Wizard Selection dialog, "New Form" radio selected, Category and Wizard dropdowns visibly **empty**. Supports the fresh-dialog precondition (no carried-over values).
- evidence/EXP-019/03-category-dropdown-options.png — Category dropdown rendered with Classic first among options. Supports the rendered-option precondition for Category.
- evidence/EXP-019/04-category-classic-selected.png — Category combobox visibly shows "Classic" after clicking the rendered option. Supports Category selection state.
- evidence/EXP-019/05-wizard-dropdown-options.png — Wizard dropdown rendered with "Build from Scratch — Plain form without defined components" first. Supports the rendered-option precondition for Wizard.
- evidence/EXP-019/06-wizard-buildfromscratch-selected.png — Wizard combobox visibly shows "BuildFromScratch" after clicking the rendered option (Category still "Classic"). Supports Wizard selection state before submission.
- evidence/EXP-019/07-after-ok-result.png — viewport after the single OK submission: "Form Wizard - Build From Scratch" dialog present, no alert. Supports acceptance of the selection.
- evidence/EXP-019/08-first-wizard-page.png — decisive: first wizard page fully visible — title "Form Wizard - Build From Scratch", Name field empty with `*`, Form Type "BuildFromScratch", Form Layout "GridLeft", Device Type "Default", Back/Finish disabled, Next/Cancel/Help enabled. Proves the first wizard page appeared; does NOT prove any persistence or cause attribution.

## Knowledge state per finding

- Baseline residue state (EXP-018's dialog + alert still present at session start): **observed**.
- Alert dismissal via visible OK, then Cancel of the used dialog: **observed**.
- Fresh dialog opens with both dropdowns empty: **observed**.
- Rendered dropdown options for Category (Classic) and Wizard (Build from Scratch) selectable by native clicks: **observed**.
- Single OK submission on the fresh untyped sequence → first Build-from-Scratch wizard page appears (no rejection): **observed** (single attempt; not replay-verified).
- Candidate procedure: "dismiss pending alert → Cancel used selection dialog → reopen New → select Category and Wizard from rendered dropdown options only → OK once" is a **candidate_procedure** for the wizard-selection prerequisite; it does not supersede the verified EXP-002 recipe and its causal variable is unidentified.

## Open questions / blockers

- No blocker in this attempt. Unresolved (by design): which element of the combined sequence (dialog recreation, Category dropdown selection, Wizard dropdown selection, or the combination) was decisive for acceptance vs EXP-018's rejection. Not investigated; internal stores out of scope.
- The first wizard page remains open in the session; no artifact was created and no form was saved.
