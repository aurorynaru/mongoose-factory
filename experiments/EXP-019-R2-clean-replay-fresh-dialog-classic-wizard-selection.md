# EXP-019-R2 — Clean Replay: Fresh-Dialog Classic Wizard Selection

Status: **REPLAY SUCCESS** — the complete coupled fresh-dialog + untyped two-dropdown + single-OK selection sequence reproduced in this independent replay; the first Build-from-Scratch wizard page appeared with Name still empty. Stopped before name entry / advancement / artifact creation.
Run: R-20261005-213313-uTgv (cycles 1–9, tasks T1–T7)
Editing scope: User
Target: (none) — no artifact created
Evidence directory: evidence/EXP-019-R2
Source experiment: `experiments/EXP-019-visible-dropdown-classic-wizard-selection.md`
Recipe read before interaction: `recipes/forms/create-basic-form.md` (status verified)

## Objective

Independently replay the EXP-019 visible wizard-selection procedure in User scope. Establish that the inherited EXP-019 first Build-from-Scratch wizard page is still unfilled and has produced no artifact; cancel that page through its visible Cancel control as preflight cleanup only. Then open one fresh Form Wizard Selection dialog through the Web Designer New Form Definition path, select Category Classic through its rendered dropdown option, select Build from Scratch / Plain form without defined components through its rendered dropdown option, type nothing into either dropdown, and submit the selection dialog exactly once. Verify that the first Build-from-Scratch wizard page appears again, then stop before entering a name, advancing, finishing, saving, or creating any artifact.

## Starting state (inherited, verified in T1)

- Live Web Designer session already available (no login/reauthentication needed to inspect); tab at `WSWebClient/designer/default.aspx`.
- Editing scope visibly **User**: scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Loaded form: **FormSync** (Properties: Name=FormSync, Version "Vendor Default vers…", Is Master True).
- Clean state: Save and Regenerate Form buttons disabled; Undo/Redo disabled; no dirty-state prompt.
- Inherited first "Form Wizard - Build From Scratch" page present (dialog ref e876), **Name field visibly empty** (only the required `*` marker; combobox had no value), Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query Form/Comments empty.
- No alert, permission prompt, entered value, unexpected mutation, or partially created artifact. (Note: unlike EXP-019's baseline, no "No wizard form selected." alert was present at this session start.)

## Method (exact replay sequence, T1–T6)

1. **T1 (read-only preflight):** Read the EXP-019 record and the verified basic-form recipe before browser interaction. Fresh snapshot confirmed the inherited first Build-from-Scratch page still present with Name empty, FormSync loaded, User scope, clean, no prompts. Evidence: `00-inherited-state-wizard-page.png`.
2. **T2 (preflight cleanup):** Fresh snapshot re-confirmed the state unchanged. One native Playwright click on the wizard's visible **Cancel** control. Cancel produced its normal visible cancellation-confirmation alertdialog "Are you sure you want to cancel? All data entered will be lost." (Yes/No) — the standard visible continuation of Cancel, not an unrelated/dirty-state prompt and not an internal-mechanism claim. Confirmed **Yes** once to complete the permitted Cancel. Fresh inspection: no wizard / Form Wizard Selection / other creation wizard / alert remained. Designer still live in User scope, FormSync still loaded behind, Save/Regenerate/Undo/Redo disabled (clean), no dirty/permission/auth prompt. Evidence: `01-cancel-confirmation-prompt.png`, `02-after-cancel-no-wizard.png`.
3. **T3 (open fresh dialog):** One native click on the Designer toolbar **New** ("New Form Definition") button. Exactly one fresh "Form Wizard Selection" dialog opened (ref e956) with radio **New Form** active and **both Category and Wizard comboboxes empty** (not yet committed). No unexpected prompt. Evidence: `03-fresh-wizard-selection-dialog.png`.
4. **T4 (Category selection):** One native click on the Category dropdown picker opened the rendered options list: **Classic** ("WinStudio classic form wizards"), ExtDataSource, Flex, Form Builder, IDS, New Data, REST. Captured the rendered Classic option before selection. One native click on the rendered **Classic** option (no typing/key input). Category combobox then displays "Classic"; Wizard dropdown remained closed and empty. Evidence: `04-category-dropdown-options.png`, `05-category-classic-selected.png`.
5. **T5 (Wizard selection):** One native click on the Wizard dropdown picker opened the rendered options: **Build from Scratch** ("Plain form without defined components"), Detail-Only, Grid-Only, Multi-View, Query, Report, Tile. Captured the rendered Build from Scratch option before selection. One native click on it (no typing/key input). Wizard combobox then displays "BuildFromScratch" (the clicked option's display label); Category still "Classic". Evidence: `06-wizard-dropdown-options.png`, `07-wizard-buildfromscratch-selected.png`.
6. **T6 (single submission):** Fresh snapshot confirmed Category=Classic, Wizard=BuildFromScratch unchanged, no prompt. One native click on the selection dialog **OK** button, exactly once. Result: **no rejection alert** (contrast EXP-018's "No wizard form selected."); the first "Form Wizard - Build From Scratch" page appeared (ref e1163) with **Name still visibly empty** (only `*`), Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query Form/Comments empty, Back/Finish disabled, Next/Cancel/Help enabled. Evidence: `08-first-wizard-page-after-ok.png`.

## Observations

- The Cancel of the inherited wizard page is a two-step visible interaction: Cancel → its own cancellation-confirmation ("All data entered will be lost", Yes/No) → Yes. This confirmation is the normal visible continuation of the permitted Cancel.
- The fresh dialog opened with both dropdowns empty (no carried-over values).
- Both Category (Classic) and Wizard (Build from Scratch) were selected purely from rendered dropdown options via native clicks; nothing was typed into either combobox.
- Exactly one OK submission; the first Build-from-Scratch wizard page appeared with Name still empty.
- No errors occurred during the replay submission; no rejection alert appeared after OK.

## Explicit non-occurrences

No Form name entry, no Next, no Finish, no Save, no Regenerate, no artifact creation, no authentication recovery/reauthentication, no alternate selection strategy, and no second OK submission occurred. No reload/navigate/close-reopen was used to recover. No dropdown was typed into. No unexpected alert/prompt was dismissed or bypassed.

## Verification

- Acceptance postcondition met: the first "Form Wizard - Build From Scratch" page visibly appeared in this independent replay before any name entry or advancement, with Name still empty.
- Saving, close/reopen persistence, and artifact durability are **not applicable** — this replay intentionally stops before Form creation.

## Result

- The **complete coupled** fresh-dialog + untyped two-dropdown + single-OK selection sequence is promoted to **replay_verified** (it reproduced in this independent replay).
- **Unresolved by design:** which constituent action (dialog recreation, Category selection, Wizard selection, or their combination) was decisive relative to EXP-018's rejection. Not investigated; internal stores/framework internals out of scope. No attribution is made to any single constituent action; the fresh-dialog recreation and untyped two-dropdown selection remain coupled.
- Excluded claims: persistence, Form creation, internal-cause, database-state, and single-action causal attribution.

## Evidence files

- evidence/EXP-019-R2/00-inherited-state-wizard-page.png — inherited first Build-from-Scratch page present, Name empty (`*` only), FormSync panel + User scope bar visible. Supports starting-state preflight.
- evidence/EXP-019-R2/01-cancel-confirmation-prompt.png — Cancel's cancellation-confirmation ("Are you sure you want to cancel? All data entered will be lost." Yes/No) over the still-open wizard, Name empty, FormSync + User scope visible. Supports that Cancel initiated and its normal confirmation appeared.
- evidence/EXP-019-R2/02-after-cancel-no-wizard.png — after Cancel+Yes: no wizard/selection/alert; FormSync form panel visible (Name=FormSync, Version "Vendor Default vers…", Is Master True), User scope bar. Supports cleanup removed the wizard and Designer remains live/User/FormSync-loaded. Clean state (Save/Regenerate disabled) corroborated by the paired toolbar snapshot.
- evidence/EXP-019-R2/03-fresh-wizard-selection-dialog.png — freshly opened "Form Wizard Selection" dialog, "New Form" radio selected, Category and Wizard dropdowns visibly empty. Supports the fresh-dialog precondition.
- evidence/EXP-019-R2/04-category-dropdown-options.png — Category dropdown rendered with Classic ("WinStudio classic form wizards") first, before selection; Wizard still empty. Supports the rendered-Classic-option precondition.
- evidence/EXP-019-R2/05-category-classic-selected.png — Category combobox visibly "Classic"; Wizard dropdown visibly empty/unchanged; no prompt. Supports Category-selected postcondition.
- evidence/EXP-019-R2/06-wizard-dropdown-options.png — Wizard dropdown rendered with Build from Scratch ("Plain form without defined components") first; Category "Classic"; Wizard field still empty. Supports the rendered-Build-from-Scratch-option precondition.
- evidence/EXP-019-R2/07-wizard-buildfromscratch-selected.png — Wizard combobox visibly "BuildFromScratch"; Category still "Classic"; no prompt. Supports Wizard-selected postcondition with Category preserved.
- evidence/EXP-019-R2/08-first-wizard-page-after-ok.png — decisive: first "Form Wizard - Build From Scratch" page with Name empty (`*` only), Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, empty Data Source/Query Form/Comments, Back/Finish disabled, Next/Cancel/Help enabled; FormSync panel + User scope bar visible. Supports the acceptance postcondition (first wizard page appeared, no rejection alert). Does NOT prove persistence or artifact creation.

## Final UI state

Designer tab at `WSWebClient/designer/default.aspx`; first "Form Wizard - Build From Scratch" page open with Name still empty; FormSync form panel behind it (Save disabled, clean); scope bar User. The wizard page was left open and untouched — no further interaction.

## Knowledge state per finding

- Inherited first wizard page present, Name empty, FormSync loaded, User scope, clean, no prompt: **observed**.
- Cancel of the wizard page requires its visible cancellation-confirmation (Yes/No); confirming Yes removes the wizard leaving a clean User-scope Designer with FormSync loaded: **observed**.
- Fresh "Form Wizard Selection" dialog opens via the Designer New Form Definition path with New Form radio active and both dropdowns empty: **observed**.
- Rendered Category Classic option selectable by native click → Category "Classic": **observed**.
- Rendered Build from Scratch option selectable by native click → Wizard "BuildFromScratch": **observed**.
- Single OK submission on the fresh untyped two-dropdown sequence → first Build-from-Scratch wizard page appears (no rejection): **observed**.
- COMPLETE coupled procedure (cancel inherited page → reopen New Form Definition → select Category and Wizard from rendered dropdown options only → OK once → first wizard page appears): **replay_verified** (this independent replay; coupled, no single-action attribution).
- Which constituent action was decisive relative to EXP-018: **unresolved** (by design; not investigated).

## Open questions / blockers

- No blocker in this replay.
- Unresolved (by design): causal attribution among the coupled actions; internal stores out of scope.
- The first wizard page remains open with Name empty; no artifact was created and no form was saved.
