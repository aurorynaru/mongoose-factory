# EXP-010-R3 — Clean Replay: Form Caption Recovery Across Ordinary Close/Reopen (FX_FormPropertyLab13)

Status: **IN PROGRESS — preflight (T3) done; AC-1 proven.** Target `FX_FormPropertyLab13` proven absent (case-insensitive UI filter + positive control). No mutation performed. Creation/baseline/Caption/Save/close/reopen pending in later tasks.
Date: 2026-10-05
Mode: LEARNING MODE — independent replay of the EXP-010 Form-**Caption**-recovery-across-**ordinary-Web-Designer-Form-tab-close/reopen** procedure on a **new** User-scope classic BuildFromScratch Form `FX_FormPropertyLab13`.
Run: `R-20261005-235851-rw3E` (cycle 3, task T3), started 2026-10-05.
Editing scope: User
Target: `FX_FormPropertyLab13`
Evidence directory: `evidence/EXP-010-R3/`

## Objective

Independently replay the EXP-010 procedure on `FX_FormPropertyLab13`: prove the target absent, create exactly one target using the verified basic-form recipe (Save Template unchecked), record the untouched Form-property baseline, change only the Form-level Caption to exactly `Form Property Caption Close Only Replay 2`, perform exactly one ordinary Designer Save to a demonstrably clean state, close the target through its ordinary Web Designer Form-tab close control, deliberately reopen the exact same User-scoped version through the supported Designer Form-menu recent-forms path, and verify the Caption recovers unchanged while every recorded comparison property remains equal to baseline. Establishes only **UI-level Caption recovery across this ordinary Form-tab close/reopen boundary** within the same Web Designer client instance and same authenticated session; not proof of Forms-database provenance, cache eviction, IDO-metadata unloading, or any stronger lifecycle/session boundary.

## Required reading before mutation (done in T3)

- `experiments/EXP-010-form-caption-recovery-across-ordinary-web-designer.md` — the original Caption Save→Form-tab close→Form-menu recent-forms reopen boundary (FX_FormPropertyLab11). Procedure: create via recipe (Save Template unchecked); baseline Caption empty; Caption→literal; one ordinary Save (toolbar Save, no Regenerate, no second Save) → clean; close via the Form-tab `x-tab-closeEl` (no unsaved-change prompt when clean); reopen via Designer **Form menu** recent-forms entry (native click on the recent-forms menu item, no direct URL/reload); verify Caption recovered + all comparison properties equal baseline.
- `experiments/EXP-010-R2-clean-replay-form-caption-recovery-across-ordinary.md` — prior replay (FX_FormPropertyLab12), **BLOCKED** because a pre-mutation Mongoose Sign In/OK session-establishment violated the no-login prohibition. Its successful Caption/save/close/reopen behavior is preserved as **observed corroborating evidence only**, not a valid replay. Confirms the same boundary procedure and the Form-menu recent-forms reopen path.
- `experiments/EXP-019-visible-dropdown-classic-wizard-selection.md` — fresh-dialog + untyped two-dropdown (Classic, Build from Scratch) selection, single OK → first Build-from-Scratch page (Name empty). Single attempt (observed).
- `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` — **replay_verified** prefix: cancel inherited wizard (Cancel→"All data entered will be lost" Yes/No→Yes), open fresh Form Wizard Selection (New Form radio, both dropdowns empty), select Category **Classic** and Wizard **Build from Scratch** from rendered dropdown options only (no typed values), OK once → first Build-from-Scratch page with Name empty, no rejection.
- `recipes/forms/create-basic-form.md` — verified basic-form creation suffix: New → wizard page 1 Name `<FX_...>` (Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query/Comments empty) → Next → uncheck "Save Template" (checked by default) → Finish → "Process Completed Successfully" → OK; Finish persists immediately, Save disabled = clean. Pitfalls: Select Form OK activates a row (double-click to open); numeric Ext IDs drift; Caption empty by default (list shows Name fallback).

## Starting state / preflight facts (2026-10-05, T3)

- Environment: Mongoose Web Client / Designer (config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge), Portal shell 2026.09.00 (per `environments/current-environment.md`).
- Browser state at preflight (inspected first; **no login performed — session already authenticated**): two tabs:
  - Tab 0: **Mongoose Web Client (portal)**, signed in — no login form; toolbar clean (Open enabled, Save disabled); form tabs `FX_FormVariableLab05` (active) and `FormSync` present (leftovers from prior experiments, not touched).
  - Tab 1: **Web Designer tab** at `WSWebClient/designer/default.aspx?MGForm=FX_ButtonCaptionLab01` — `FX_ButtonCaptionLab01` (EXP-020's lab artifact) open, Component tab selected, a Button component `FX_CaptionButton` Caption panel visible. **Not touched** in this preflight.
- Editing scope: **User** — Web Client navigation badge `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Designer status bar `[ ScopeType: User / ScopeName: <user> ]` (confirmed in the T2 recovery inspection).
- No inherited creation wizard/dialog/prompt present at preflight (no cancel needed). No auth/session-recovery prompt. No dirty-state prompt.
- **Target `FX_FormPropertyLab13` does NOT exist** — proven via Select Form UI filter (see below).

## Preflight method (T3)

1. Read the five required sources above (read-only; none modified).
2. Inspected current browser state (2 tabs as above) — no login performed.
3. Selected the Web Client tab (tab 0); confirmed live/authenticated (portal shell rendered, Mongoose iframe active, no login form, Save disabled).
4. Clicked Web Client **Open** (`mgtoolbarbutton-1101`, native) → **Select Form** dialog (grid `f3e130`, filter textbox `f3e450`/`textfield-1143-inputEl`, Filter By combobox `f3e456`="Name", Case Sensitive checkbox `f3e460`, Starts With `f3e465`, OK `f3e469`/Cancel `f3e471`/Help `f3e473`). Dialog opened with empty filter → full store rendered (virtualized). (evidence `01`.)
5. **Target-absence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab13` into the Filter field via real key events (`pressSequentially`, Case Sensitive **off**) → grid re-rendered to **0 rows** (grid node collapsed to empty). (evidence `03`.)
6. **Positive control (filter works):** cleared the filter, typed `FX_FormPropertyLab` (same case-insensitive mode) → grid re-rendered to **12 rows**: `FX_FormPropertyLab10`, `09`, `08`, `07`, `06`, `05`, `02` (Caption "Form Property Lab Replay"), `04` ("Form Property Lab Coupled Unload Replay"), `03` ("Form Property Lab Coupled Unload"), `01` ("Form Property Lab"), `12` ("Form Property Caption Close Only Replay"), `11` ("Form Property Caption Close Only"). **No `FX_FormPropertyLab13`** among them. (evidence `04`.)
7. Restored the dialog (filter cleared, Case Sensitive off, Starts With off) and closed via **Cancel** (`f3e471`, native). Web Client verified clean: no dialog, tabs unchanged, Save disabled. (evidence `05`.)

## Target-absence evidence — pre-mutation absence of `FX_FormPropertyLab13`

| Check | Method | Result |
|---|---|---|
| UI filter, case-insensitive (Case Sensitive off) | Filter `FX_FormPropertyLab13` | **0 rows** (evidence `03`) |
| Positive control (filter works) | Filter `FX_FormPropertyLab` (case-insensitive) | **12 rows**: Lab01–Lab12, no Lab13 (evidence `04`) |

**Counts (UI-filtered, case-insensitive): target `FX_FormPropertyLab13` = 0; `FX_FormPropertyLab*` family = 12 (Lab01–Lab12).**

Case-insensitive matching accounted for via the Case Sensitive checkbox left **off** (default) and the positive control returning the full Lab01–Lab12 family. A store-level `Ext.getCmp().store` scan (used in EXP-010/EXP-010-R2) was **not** used here because JavaScript/evaluate/run-code is prohibited in this experiment; the UI filter + positive control is the permitted rendered-UI proof.

**Name/Caption ambiguity:** the positive control shows the Lab family's Name column (Lab01–Lab12) and Caption column (Name fallback for empty-Caption forms; literal Captions for Lab01–Lab04, Lab11, Lab12). No row's Name or Caption resembles `FX_FormPropertyLab13`. No ambiguity for the target.

## Repository / worktree starting state (T3)

- Worktree is a git repository. New in this run so far: `evidence/EXP-010-R3/` (screenshots `01`–`05`) and this record file. No prior experiment file, recipe, environment file, or `AGENTS.md` modified.

## Observations

- **Session already authenticated** — Web Client portal tab signed in (user badge, DEM badge, Mongoose app loaded); no login/logout/SLO performed or needed.
- **The Designer tab carries a prior experiment's artifact** (`FX_ButtonCaptionLab01`, EXP-020's lab) open on its Component tab with a Button Caption panel. This is residue from a prior experiment, **not** from EXP-010-R3; it was not touched. No EXP-010-R3 mutation is visible.
- **Select Form filter re-renders the grid on real key events** (`pressSequentially`): typing `FX_FormPropertyLab13` collapsed the grid to 0 rows; typing `FX_FormPropertyLab` re-rendered 12 rows. Confirms the filter mechanism functions and the target is absent.
- **Select Form OK activates a row, not a filter** (re-confirmed recipe pitfall): an earlier OK with the target filter text set activated the first unfiltered row (`WSFormWizardNewDataXmlToIdo`) and raised a benign "Unable to load form ... not defined as Runtime Builder ... form not found" error alertdialog; dismissing its OK closed the dialog. No form opened, no artifact created.
- No Mongoose artifact created/modified/deleted; no User Preference opened/changed/saved; no unload invoked; no form opened from the dialog; no Designer mutation; editing scope stayed **User**.

## Knowledge state (as of T3)

- `FX_FormPropertyLab13` absent (case-insensitive UI filter 0 rows + positive control 12 rows Lab01–Lab12): **observed** (T3).
- Editing scope is **User** (Web Client badge + Designer status bar): **observed** (T2 recovery inspection + T3).
- Web Client/Designer live and usable, no session-establishment/recovery required: **observed** (T2 recovery inspection + T3).
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure remains **unverified** for this replay (creation + baseline + Caption + Save + close + reopen pending).

## Open questions / blockers

- None blocking. AC-1 (preflight: live usable session, User scope, target absent) is proven.
- The Designer tab currently has `FX_ButtonCaptionLab01` open (prior artifact) — later creation tasks must not modify it.
- Next task: create exactly one `FX_FormPropertyLab13` (User scope, classic BuildFromScratch) via the EXP-019-R2 fresh-dialog prefix + verified basic-form suffix, then record the untouched baseline.

## T4 — Creation of `FX_FormPropertyLab13` + untouched baseline (2026-10-05)

Coordinator instruction (T4): create exactly one User-scope classic BuildFromScratch Form `FX_FormPropertyLab13` using the EXP-019-R2 fresh-dialog visible-selection prefix + verified basic-form suffix, then capture the untouched baseline. No Caption mutation, no Save after edit.

### T4.1 — Guards re-verified first (no mutation)

- Tabs at T4 start (fresh conversation; state inspected before any action): Tab 0 Web Client clean; Tab 1 (current) Designer `?MGForm=FX_ButtonCaptionLab01` — `FX_ButtonCaptionLab01` (EXP-020's lab) open on its Component tab, a Button Caption panel visible. **Not touched.**
- **Guard 1 — scope (PASS):** Designer status bar `[ ScopeType: User / ScopeName: <user> ]`; toolbar clean (Save/Regenerate/Redo disabled; New enabled); no inherited wizard/prompt.
- **Guard 2 — target absence (PASS):** proven in T3 (UI filter `FX_FormPropertyLab13` → 0 rows; positive control `FX_FormPropertyLab` → 12 rows Lab01–Lab12). Target still absent immediately before the mutation.

### T4.2 — Creation method (EXP-019-R2 fresh-dialog prefix + verified basic-form suffix)

1. Designer toolbar **New** (`e19`, native click) → **fresh "Form Wizard Selection"** dialog (`e32147`): radio **New Form** active, Category combobox (`e32163`) and Wizard combobox (`e32171`) both **empty** (no carried-over values). (evidence `06`.)
2. **Category selection (rendered option, no typing):** clicked the Category dropdown picker (`e32164`) → rendered options list: **Classic** ("WinStudio classic form wizards"), ExtDataSource, Flex, Form Builder, IDS, New Data, REST. (evidence `07`.) Clicked the rendered **Classic** option (`e32185`) → Category combobox displays "Classic"; Wizard still empty. (evidence `08`.)
3. **Wizard selection (rendered option, no typing):** clicked the Wizard dropdown picker (`e32172`) → rendered options: **Build from Scratch** ("Plain form without defined components"), Detail-Only, Grid-Only, Multi-View, Query, Report, Tile. (evidence `09`.) Clicked the rendered **Build from Scratch** option (`e32270`) → Wizard combobox displays "BuildFromScratch"; Category still "Classic". (evidence `10`.)
4. **Single OK submission:** clicked the selection dialog **OK** (`e32179`) exactly once → **no rejection alert**; first **"Form Wizard - Build From Scratch"** page (`e32354`) appeared with **Name empty** (`*` only), Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type/Data Source empty, Query Form/Comments empty, Back/Finish disabled, Next/Cancel/Help enabled. (evidence `11`.)
5. **Name entry:** typed `FX_FormPropertyLab13` into the Name combo (`mgcombo-6813-inputEl`). Screenshot confirms Name `FX_FormPropertyLab13`, Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source/Query Form/Comments empty. (evidence `12`.)
6. **Next** (`e32424`, native) → advanced to the Save Template step: checkbox "Save Template" **checked** by default (`e32434`), Next disabled, Finish enabled. (evidence `13`.)
7. **Save Template unchecked:** clicked the checkbox display face (`e32436`) → checkbox now visibly **unchecked** (empty box). (evidence `14`.)
8. **Finish** (`e32426`, native, once) → **"Process Completed Successfully"** alertdialog (`e954`) → **OK** (`e1607`, native). (evidence `15`.)
9. Designer loaded the new form: URL `…&MGForm=FX_FormPropertyLab13`; form tab **`FX_FormPropertyLab13`** appeared (3rd form tab) and is selected; the `FX_ButtonCaptionLab01` and `FormSync` tabs **remain present and untouched**; toolbar **clean** (Save/Regenerate/Undo/Redo disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `16`.)

### T4.3 — Untouched Form-property baseline (recorded BEFORE any Caption mutation)

Read read-only from the loaded Designer property grid (Design group expanded):

| Property | Full value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab13` | yes |
| **Caption** | *(empty)* | no |
| **Description** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: <user> ]` (evidence `16`, `17`; live value masked by the secrets layer in tool output; ScopeName is the signed-in user per `environments/current-environment.md`).

**Key baseline fact for the persistence check:** the freshly created form's **Caption is empty** (recorded from the grid, not assumed) — the later change to the literal `Form Property Caption Close Only Replay 2` will be an unambiguous empty→literal transition. (Description is also empty and remains an unchanged comparison property.)

Other property groups present (not part of the comparison set, recorded for completeness): Appearance, Behavior, Help, Layout (collapsed; not inspected further).

### T4.4 — Post-creation cleanliness + no-earlier-FX_-edit proof

- **Designer clean after the creation workflow:** toolbar Save/Regenerate/Undo/Redo all **disabled**; no visible windows; URL `?MGForm=FX_FormPropertyLab13`; active form tab `FX_FormPropertyLab13`. (evidence `16`, `17`.)
- **No earlier `FX_` Form edited:** the pre-existing `FX_ButtonCaptionLab01` and `FormSync` tabs remain present and untouched; the toolbar (which reflects the active form and would be enabled by any unsaved edit) is clean.

### T4.5 — T4 evidence (under `evidence/EXP-010-R3/`)

- `06-fresh-wizard-selection-dialog.png` — fresh Form Wizard Selection dialog: New Form radio, Category/Wizard dropdowns empty.
- `07-category-dropdown-options.png` — Category dropdown rendered options (Classic first).
- `08-category-classic-selected.png` — Category combobox "Classic"; Wizard empty.
- `09-wizard-dropdown-options.png` — Wizard dropdown rendered options (Build from Scratch first).
- `10-wizard-buildfromscratch-selected.png` — Wizard combobox "BuildFromScratch"; Category "Classic".
- `11-first-wizard-page-name-empty.png` — first Build-from-Scratch page, Name empty (`*` only).
- `12-wizard-name-entered.png` — Name `FX_FormPropertyLab13`, defaults (BuildFromScratch/GridLeft/Default/empty); scope bar User.
- `13-save-template-checked-before.png` — Save Template checkbox checked (default) before unchecking.
- `14-save-template-unchecked.png` — Save Template checkbox visibly unchecked; Finish enabled.
- `15-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `16-form-created-loaded-clean.png` — `FX_FormPropertyLab13` loaded in Designer (`?MGForm=FX_FormPropertyLab13`), tab selected, other tabs present, toolbar clean.
- `17-baseline-properties-design-group.png` — Designer Properties Design group: Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T4.6 — T4 observations / corrections

- **The Form Wizard Selection dialog is xtype `formwizard`** (not an Ext window); numeric IDs drifted this session (`formwizard` window `e32147`, Category combo `e32163`, Wizard combo `e32171`, OK `e32179`, wizard expeditor page `e32354`, Name combo `mgcombo-6813`, Save Template checkbox `ext-comp-7045`/`e32434`) — resolved at runtime, never assumed.
- **Category and Wizard were selected purely from rendered dropdown options via native clicks**; nothing typed into either combobox (re-confirms the EXP-019-R2 replay_verified prefix).
- **The Save Template checkbox's `inputEl` click timed out** because the `displayEl` span intercepts pointer events; clicking the visible display face (`e32436`, the "Save Template" label) toggled it reliably to unchecked (re-confirms the reliable-toggle finding; no JS `onBoxClick()` used).
- **Finish persisted immediately**; the Designer opened the form with Save disabled (clean); no separate Save performed.
- No User Preference inspected/changed; no unload invoked; no form other than the new `FX_FormPropertyLab13` created/modified/deleted; `FX_ButtonCaptionLab01`/`FormSync` and all other artifacts untouched; editing scope stayed **User**.

### T4.7 — T4 knowledge-state updates

- `FX_FormPropertyLab13` **created, exactly one**, User scope, ScopeName `anton.ramos@3mworks.com.ph`, via the EXP-019-R2 fresh-dialog prefix + verified basic-form suffix with Save Template unchecked; baseline Caption **empty**, Description **empty**: **observed** (T4).
- Full pre-Caption baseline (Name/Caption(empty)/Description(empty)/Version/Device Type/Form Type/Is Master/ScopeType/ScopeName) as tabled in T4.3: **observed** (T4).
- The composed creation path (EXP-019-R2 prefix + basic-form suffix) is **not** classified replay_verified end-to-end; the prefix is replay_verified (EXP-019-R2) and the suffix is verified (recipe/EXP-002), but the composition is a single execution here.
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure remains **unverified** (creation + baseline only so far).

### T4.8 — Stopped here (per instruction, after creation + baseline)

Did **not** change the Caption or any other Form property; did **not** Save after any property edit; did **not** touch `FX_ButtonCaptionLab01`/`FormSync` or any prior artifact; did **not** invoke any unload; did **not** open/change/save any User Preference; did **not** close the target; did **not** close/relaunch the Designer. The target `FX_FormPropertyLab13` is **left open and clean** for the next task. **Next task (T5):** change **only** the Form-level Caption to exactly `Form Property Caption Close Only Replay 2`, perform exactly one ordinary Designer Save to clean, and verify the Designer returns to a clean state with the Caption retained.

## T5 — Form-level Caption mutation attempt (2026-10-05) — **BLOCKED at the Caption commit**

### T5.1 — Guard re-read (read-only; PASS)

Re-read the open target before any mutation. Identity/scope/cleanliness/baseline all match the T4 baseline:

| Property | Value | Matches T4 baseline |
| --- | --- | --- |
| Name | `FX_FormPropertyLab13` | ✓ |
| Description | *(empty)* | ✓ |
| Caption | *(empty)* | ✓ |
| Version | `User version for user anton.ramos@3mworks.com.ph` | ✓ |
| Device Type | `Default` | ✓ |
| Form Type | `Normal` | ✓ |
| Is Master | `True` | ✓ |
| ScopeType / ScopeName | `User` / `anton.ramos@3mworks.com.ph` | ✓ |

Designer tab `FX_FormPropertyLab13` selected; toolbar clean (Save/Regenerate/Undo/Redo all disabled). Guard PASS. (evidence `18-t5-pre-mutation-guard-pass.png`.)

### T5.2 — Caption editor operation attempts (all failed to commit the literal)

The Form-level Caption value cell (`data-mgcompname="Design.Caption"`, gridcell `e32479`) is a free-text combo editor (`pgvaluecombobox`, `forceSelection:false`, `editable:true`) — the same editor family proven in EXP-005/EXP-005-R2/EXP-006. Its visible content is the dropdown-arrow icon (`.mg-arrow-cell-icon`); double-clicking the value cell opens the editable combo whose picker lists the 7531 predefined translatable-string resource keys.

Attempts, in order:
1. Double-clicked the value cell → resolved to `.mg-arrow-cell-icon` dblclick → opened the combo **picker listbox** (huge resource-key list). Pressed Escape to close without selecting. (No commit.)
2. Attempted to type into the bottom description `textbox e501` → element is `readonly="readonly"` textarea → **not editable** (wrong target).
3. Clicked the blue action button on the Caption row (`e32485`) → navigated the page URL from `?MGForm=FX_FormPropertyLab13` to `default.aspx` and raised an alert **"No object name given."** (dismissed with OK). No Caption commit; target tab remained selected.
4. Double-clicked the value cell again → combo picker open (empty input box + open listbox, evidence `20`). Typed the literal `Form Property Caption Close Only Replay 2` into the focused value cell via `pressSequentially` on `#ext-25432` (submit=false, no Enter). This produced **6 repeated `TypeError: Cannot read properties of null (reading 'data')` at `ctor.onKeySpace`** in the console — the combo's key handler errored on the space characters. The typed literal did **not** land in the combo input. (evidence `21-caption-combo-typed.png`.)

### T5.3 — Postcondition after the failed mutation (read-only)

- Caption value cell `e32479` remains **empty** (`[active] [selected]`, no text).
- Toolbar **clean**: Save **disabled**, Regenerate Form **disabled**, Undo **disabled**, Redo **disabled** — no edit committed, no dirty state.
- Target tab `FX_FormPropertyLab13` still selected; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- No Save performed. No property other than the (failed) Caption touched. `FX_ButtonCaptionLab01`/`FormSync` untouched.

### T5.4 — Blocker statement

The controlled Caption literal `Form Property Caption Close Only Replay 2` could **not** be committed through the supported visible Caption combo editor in this session. The combo's key handler threw `TypeError ... onKeySpace` on the space characters of the literal, and the value cell remained empty. The Designer stayed clean (no partial/dirty state), so no unintended value was committed and no Save was performed.

This is a **specialist-defined failure condition** at the Caption mutation (AC-4 equivalent): the literal cannot be committed via the same visible Caption value-cell editor. Per the experiment rules, I stopped after one corrected inspection + one corrected attempt and preserved the observations; I did not replay the typing further, did not use JS/evaluate to force the value, and did not use any hidden store/internal API.

### T5.5 — Evidence (under `evidence/EXP-010-R3/`)

- `18-t5-pre-mutation-guard-pass.png` — Designer on `FX_FormPropertyLab13`, User scope, Design group baseline (Name `FX_FormPropertyL…`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), toolbar clean.
- `19-caption-editor-ambiguous-state.png` — Caption row with dropdown-arrow value cell + blue action button; bottom "Caption / Caption" description box; combo not yet open.
- `20-caption-row-after-dblclick.png` — Caption combo editor open: empty input box in the value cell + open picker listbox of resource keys (`ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, `Collection Name`, … `fAppBuilder`).
- `21-caption-combo-typed.png` — After `pressSequentially` of the literal: value cell shows only the dropdown arrow (input empty), picker closed; console logged 6 `onKeySpace` TypeErrors.
- Console log `evidence/playwright/console-2026-10-05T12-21-56-280Z.log` lines 1–66: repeated `TypeError: Cannot read properties of null (reading 'data')` at `ctor.onKeySpace` during the typing attempt.

### T5.6 — Knowledge-state updates

- Form-level Caption value-cell editor = free-text `pgvaluecombobox` (re-confirms EXP-005/EXP-005-R2/EXP-006): **observed**.
- In THIS session, typing a literal containing spaces into the Caption combo via `pressSequentially` triggered `onKeySpace` TypeErrors and did not commit; the value cell stayed empty and the Designer stayed clean: **observed** (single attempt; not a verified procedure).
- The EXP-010 **Caption-recovery-across-ordinary-Form-tab-close/reopen** procedure remains **unverified** for EXP-010-R3: the Caption mutation (AC-4) is **BLOCKED**; AC-5 (Save) and the close/reopen recovery (AC-6+) were **not reached**.

### T5.7 — Stopped here (per rules, after one corrected attempt + inspection)

Did **not** perform a Save (no committed edit to save). Did **not** close/reopen the target. Did **not** use JS/evaluate, hidden stores, or internal APIs to force the Caption value. Did **not** modify `FX_ButtonCaptionLab01`/`FormSync` or any non-`FX_` artifact. The target `FX_FormPropertyLab13` remains **open, clean, Caption empty**.

## T6 — Bounded Caption-entry retry: literal committed by blur (2026-10-05) — AC-4 **PASS**

### T6.1 — Guard re-read (read-only; PASS)

Re-verified before mutation: target tab `FX_FormPropertyLab13` selected; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Design group baseline Name `FX_FormPropertyLab13`, Description empty, Caption value cell `e32479` empty (arrow-icon only, no text), Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`; toolbar clean (Save/Regenerate/Undo/Redo disabled); no prompt. Guard PASS. (evidence `22-t6-guard-pass.png`.)

### T6.2 — Open the rendered Caption editor (supported interaction)

Double-clicked the Caption value cell content (`e32482`, resolves to `.mg-arrow-cell-icon`) → the editable combo editor opened: an empty text-entry box in the value cell + open dropdown/resource listbox. (evidence `23-t6-caption-editor-open.png`.)

### T6.3 — Focus + type (no Enter)

Native-clicked exactly once inside the editable input element `#mg-gc-combo25452-inputEl` (the empty text-entry area, left of the dropdown arrow; the click log shows the cell is `mg-underEdit` and the input is `aria-readonly="false"`, `aria-autocomplete="list"`). Typed `Form Property Caption Close Only Replay 2` via `pressSequentially` (submit=false, **no Enter**).

### T6.4 — Visible inspection before commit (PASS)

The accessibility snapshot of the active combobox `e32563` reported **`text: Form Property Caption Close Only Replay 2`** — the complete exact literal is held in the rendered input. (The narrow visible box clipped the left portion, showing the tail `...lose Only Replay 2`, but the accessibility text value is authoritative and exact.) No `onKeySpace` TypeErrors recurred during this attempt (the prior T5 errors were from a different, unfocused targeting path). No resource key substituted/highlighted/committed. (evidence `24-t6-caption-input-typed.png`.)

### T6.5 — Commit by blur (click Caption label cell)

Native-clicked the visible Caption **label** cell (treeitem `e32476` → `#ext-25431`) to move focus away and commit by blur. No Enter pressed.

### T6.6 — Post-commit re-read (PASS)

- Ordinary Caption property row `e32479` now shows exactly `Form Property Caption Close Only Replay 2` (gridcell → generic `e32481`).
- Designer became **dirty** as expected: Save **enabled**, Regenerate Form **enabled**, Undo **enabled**, Redo **disabled** (single undoable change = the Caption edit).
- The Form-tab heading now displays `Form Property Caption Close Only Replay 2` (Caption is the tab display name).
- No Save performed in this task. No other property changed. `FX_ButtonCaptionLab01`/`FormSync` untouched. (evidence `25-t6-caption-committed-dirty.png`.)

### T6.7 — Evidence (under `evidence/EXP-010-R3/`)

- `22-t6-guard-pass.png` — Designer on `FX_FormPropertyLab13`, User scope, Design baseline (Caption empty), toolbar clean.
- `23-t6-caption-editor-open.png` — Caption combo editor open: empty text-entry box + open resource-key picker.
- `24-t6-caption-input-typed.png` — After typing (no Enter): input holds the literal (visible tail `...lose Only Replay 2`; accessibility text confirms full exact literal); picker open.
- `25-t6-caption-committed-dirty.png` — After blur-commit: Caption row `Form Property Cap…` (full exact literal per accessibility tree), Form-tab heading `Form Property Caption Close Only Replay 2`, Save enabled (dirty).

### T6.8 — Knowledge-state updates

- Form-level Caption literal committed successfully via: double-click value cell → native-click inside the editable input `#mg-gc-comboNNNN-inputEl` → `pressSequentially` literal (no Enter) → commit by blur (click Caption label cell). The accessibility combobox `text` is the authoritative read of the held value. This is the EXP-005/EXP-005-R2/EXP-006 blur-commit path, re-confirmed in this session: **observed**.
- The prior T5 `onKeySpace` TypeErrors were tied to an unfocused/incorrect targeting path; focusing the actual combo input element resolved the commit. Not a verified procedure yet (single execution).
- EXP-010-R3 AC-4 (Caption = exactly `Form Property Caption Close Only Replay 2`, single edit, dirty state): **PASS** (T6). AC-5 (one ordinary Save) and the close/reopen recovery (AC-6+) remain **pending**.

### T6.9 — Stopped here (per instruction: no Save in this task)

Did **not** Save, close/reopen, Regenerate, unload, reload, change preferences, or use JS/evaluate/hidden stores/internal APIs. The target `FX_FormPropertyLab13` is left **open, dirty (Caption = `Form Property Caption Close Only Replay 2`)** for the next task (ordinary Save to clean).

## T7 — Exactly ONE ordinary Designer Save + full post-Save verification (2026-10-05) — AC-5 **PASS**

### T7.1 — Pre-Save guard check (read-only; PASS)

- Target identity: selected tab heading `Form Property Caption Close Only Replay 2`, closable button `FX_FormPropertyLab13` → Name `FX_FormPropertyLab13` ✓.
- Form-level Caption value cell `e32479` → generic `e32481` = exactly `Form Property Caption Close Only Replay 2` ✓.
- Editing scope: status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (matches T4 baseline) ✓.
- Designer **dirty**: Save enabled, Regenerate Form enabled, Undo enabled, Redo disabled ✓.
- No unexpected prompt/state present ✓. Guard PASS. (evidence `26-t7-pre-save-dirty-guard.png`.)

### T7.2 — Ordinary Designer Save (exactly once)

Clicked the toolbar Save button once (`#mgtoolbarbutton-1085`). No second Save, no Regenerate, no unload, no reload, no navigation, no JS.

### T7.3 — Post-Save clean-state verification

Toolbar after Save: **Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled** — Designer returned to a clean saved state ✓.

### T7.4 — Post-Save full comparison-property re-read (supported visible Form properties UI)

| Property | Post-Save value | Matches T4 baseline / saved Caption |
| --- | --- | --- |
| Name | `FX_FormPropertyLab13` | ✓ |
| Caption | `Form Property Caption Close Only Replay 2` (cell `e32481`) | ✓ (saved controlled value) |
| Description | *(empty)* | ✓ (T4 baseline) |
| Version | `User version for user anton.ramos@3mworks.com.ph` | ✓ (T4 baseline) |
| Device Type | `Default` | ✓ |
| Form Type | `Normal` | ✓ |
| Is Master | `True` | ✓ |
| ScopeType | `User` | ✓ |
| ScopeName | `anton.ramos@3mworks.com.ph` | ✓ |

All non-Caption comparison properties equal the T4 baseline; Caption equals the saved controlled value; Designer clean. No unexpected prompt/error. AC-5 PASS. (evidence `27-t7-post-save-clean-caption.png`.)

### T7.5 — Evidence (under `evidence/EXP-010-R3/`)

- `26-t7-pre-save-dirty-guard.png` — Pre-Save: tab heading `Form Property Caption Close Only Replay 2`, Design group (Caption `Form Property Cap…`), User scope bar, toolbar dirty (Save enabled).
- `27-t7-post-save-clean-caption.png` — Post-Save: tab heading `Form Property Caption Close Only Replay 2`, Design group (Name `FX_FormPropertyL…`, Description empty, Caption `Form Property Cap…`, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), User scope bar, toolbar clean (Save/Undo/Redo greyed).

### T7.6 — Knowledge-state updates

- Exactly one ordinary Designer Save on the dirty Caption edit returned the Designer to a clean state and retained the Caption + all baseline comparison properties: **observed** (single execution).
- EXP-010-R3 AC-5 (one ordinary Save → clean, Caption + comparison properties retained): **PASS** (T7). The close/reopen recovery (AC-6+) remains **pending**.

### T7.7 — Stopped here (per instruction: no close/reopen in this task)

Did **not** close/reopen the target, Regenerate, unload, reload, change preferences, or use JS/evaluate/hidden stores/internal APIs. The target `FX_FormPropertyLab13` is left **open and clean** (Caption = `Form Property Caption Close Only Replay 2`) for the next task (ordinary Form-tab close).

## T8 — Ordinary Form-tab close of the target + close-boundary verification (2026-10-05) — AC-6 **PASS**

### T8.1 — Pre-close guard check (read-only; PASS)

- Target identity: selected tab heading `Form Property Caption Close Only Replay 2`, closable button `FX_FormPropertyLab13` → Name `FX_FormPropertyLab13` ✓.
- Form-level Caption value cell `e32479` → generic `e32481` = exactly `Form Property Caption Close Only Replay 2` ✓.
- Editing scope: status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (same as saved T7 state) ✓.
- Designer **clean**: Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled ✓.
- No unexpected prompt/state present ✓. Guard PASS. (evidence `28-t8-pre-close-clean-guard.png`.)

### T8.2 — Ordinary Form-tab close (exactly once)

Clicked ONLY the ordinary close control for the target Form tab — the tab's `closable FX_FormPropertyLab13` button — exactly once. No browser-tab close, no direct URL navigation, no reload, no unload, no User Preferences, no Regenerate, no new/replacement Designer.

### T8.3 — Close-boundary observation (postcondition)

- **Target no longer open**: the Designer tablist now contains only `FormSync` and `FX_ButtonCaptionLab01`; the `FX_FormPropertyLab13` tab is removed. The previously-active tab `FX_ButtonCaptionLab01` became the active tab; the Designer URL moved from `default.aspx` to `?MGForm=FX_ButtonCaptionLab01`.
- **No unsaved-change / authentication / conflict / unexpected prompt appeared** (no alertdialog in the post-close snapshot; the close of a clean form produced no prompt).
- **Same usable session**: same Designer tab/window, same scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, no session-establishment/recovery action required.
- **No other artifact modified by this action**: the only interaction was the single click on the target's close control. The active tab `FX_ButtonCaptionLab01` (a prior experiment's artifact) was already open and untouched; its toolbar Save/Undo enabled state is a pre-existing property of that tab, not caused by the close of the clean target. (evidence `29-t8-post-close-target-gone.png`.)

### T8.4 — Evidence (under `evidence/EXP-010-R3/`)

- `28-t8-pre-close-clean-guard.png` — Pre-close: tab heading `Form Property Caption Close Only Replay 2`, closable `FX_FormPropertyLab13`, Design group (Caption `Form Property Cap…`), User scope bar, toolbar clean (Save/Undo/Redo greyed).
- `29-t8-post-close-target-gone.png` — Post-close: tablist shows only `FormSync` + `FX_ButtonCaptionLab01` (selected); `FX_FormPropertyLab13` tab absent; URL `?MGForm=FX_ButtonCaptionLab01`; User scope bar; no prompt.

### T8.5 — Knowledge-state updates

- Ordinary Form-tab close of the clean saved target removed the target tab with **no unsaved-change prompt**, keeping the same session and not modifying other artifacts: **observed** (single execution; re-confirms EXP-008/EXP-010 close behavior).
- EXP-010-R3 AC-6 (ordinary Form-tab close, no unsaved-change prompt): **PASS** (T8). AC-7 (recent-forms reopen + recovery verification) remains **pending**.

### T8.6 — Stopped here (per instruction: do not reopen in this task)

Did **not** reopen the target, Regenerate, unload, reload, change preferences, or use JS/evaluate/hidden stores/internal APIs. The target `FX_FormPropertyLab13` is now **closed** (not open in Designer). **Next task (T9):** reopen exactly `FX_FormPropertyLab13` through the supported Designer Form-menu recent-forms path and verify Caption + comparison-property recovery.

## T9 — Reopen via Form-menu recent-forms path + recovery verification (2026-10-05) — AC-7 **PASS**

### T9.1 — Reopen path (supported Designer Form-menu recent-forms)

Reopened exactly `FX_FormPropertyLab13` through the supported Designer **Form-menu recent-forms** path (the `Form` menu button `e3` → recent-forms list → select `FX_FormPropertyLab13`). No direct URL navigation, no reload, no new Designer instance, no Regenerate, no unload, no JS/evaluate/hidden stores/internal APIs.

### T9.2 — Reopen postcondition (read-only verification)

- **Target reopened**: current Designer URL `…/designer/default.aspx?MGForm=FX_FormPropertyLab13`; selected tab heading `Form Property Caption Close Only Replay 2`, closable button `Form Property Caption Close Only Replay 2` → Name `FX_FormPropertyLab13` ✓.
- **Caption recovered**: Design-group Caption row value cell `e77957` = exactly `Form Property Caption Close Only Replay 2` (the controlled saved value) ✓.
- **Comparison properties recovered unchanged** (equal to T4 baseline):

| Property | Recovered value | Match |
| --- | --- | --- |
| Name | `FX_FormPropertyLab13` | ✓ |
| Description | (empty) | ✓ |
| Caption | `Form Property Caption Close Only Replay 2` | ✓ |
| Version | `User version for user <user>` | ✓ |
| Device Type | `Default` | ✓ |
| Form Type | `Normal` | ✓ |
| Is Master | `True` | ✓ |

- **Reopened target clean**: toolbar Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled ✓ (no dirty state after reopen).
- **Editing scope**: status bar `[ ScopeType: User / ScopeName: <user> ]` ✓.
- **No unexpected prompt/error** appeared on reopen ✓.

### T9.3 — Evidence (under `evidence/EXP-010-R3/`)

- `30-t9-form-menu-open.png` — Form-menu recent-forms selection of `FX_FormPropertyLab13`.
- `31-t9-reopened-caption-recovered.png` — Reopened target: tab heading `Form Property Caption Close Only Replay 2`, Design group (Name `FX_FormPropertyL…`, Description empty, Caption `Form Property Cap…`, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), User scope bar, toolbar clean (Save/Undo/Redo greyed).

### T9.4 — Knowledge-state updates

- Reopening the closed, saved target through the supported Form-menu recent-forms path recovered the Form-level Caption (`Form Property Caption Close Only Replay 2`) and all baseline comparison properties unchanged, with the reopened Designer clean: **observed** (single execution; re-confirms EXP-010 recovery behavior).
- EXP-010-R3 AC-7 (recent-forms reopen + Caption + comparison-property recovery): **PASS** (T9). The full Save → Form-tab close → recent-forms reopen recovery boundary is now **PASS** end-to-end for this replay (T7 AC-5 + T8 AC-6 + T9 AC-7).

### T9.5 — Stopped here

Did **not** perform a second Save, Regenerate, unload, reload, preference change, or JS/evaluate/hidden-store/internal-API action. The target `FX_FormPropertyLab13` is left **open and clean** (Caption = `Form Property Caption Close Only Replay 2`). **Next task (T10):** final read-only inventory/repository audit to close the experiment.

## T10 — Final read-only audit (2026-10-05) — **BLOCKED** (AC-8 inventory proof unresolved)

### T10.1 — Read-only actions attempted (no mutation)

1. Re-inspected live Designer (tab 1): target `FX_FormPropertyLab13` reopened, selected tab heading `Form Property Caption Close Only Replay 2`, toolbar clean (Save/Regenerate/Undo/Redo disabled), scope bar `[ ScopeType: User / ScopeName: <user> ]` — reopened target confirmed clean and recovery evidence intact (no change made).
2. Opened the Web Client (tab 0) **Open** toolbar button (`mgtoolbarbutton-1101`, native) → **Select Form** dialog (window `f3e127`, grid `f3e130`, filter textbox `f3e450`, Filter By `f3e456`="Name", Case Sensitive `f3e460` off, Starts With `f3e465` off, OK `f3e469`/Cancel `f3e471`).
3. Typed `FX_FormPropertyLab13` into the Filter field via real key events (`pressSequentially`, Case Sensitive **off** = case-insensitive). Grid body `f3e142` rendered **empty (0 rows)**.

### T10.2 — BLOCKER: session-expired prompt + inventory read invalid

- The screenshot for the filtered inventory (`32-t10-select-form-filter-lab13-one-row.png`) shows a **`Session Expired` / "Your session has expired."** alert dialog (OK button) overlapping the Select Form dialog, and the Select Form grid showing **0 rows** for `FX_FormPropertyLab13`.
- **Contradiction:** the target was created and saved in this replay (T4/T7) and is currently open in the Designer (tab 1), so the Select Form inventory should show **exactly 1** match. A 0-row read is therefore **not** a valid inventory result — the expired session invalidated the Web Client store read.
- **Prohibition honored:** the `Session Expired` prompt was **NOT** dismissed/bypassed; **no** Sign In / session-establishment / re-authentication action was performed; **no** reload, unload, preference change, new Designer, Regenerate, direct-URL reopen, or JS/evaluate/run-code was used. The prompt was left untouched.
- Consequence: the AC-8 "exactly one case-insensitive `FX_FormPropertyLab13` exists" inventory proof **cannot be established** in this audit. Per the instruction, the unresolved AC is reported rather than claimed complete.

### T10.3 — Repository audit (read-only; PASS)

- `git status --short`: only two untracked paths — `evidence/EXP-010-R3/` and `experiments/EXP-010-R3-clean-replay-form-caption-recovery-across-ordinary.md`. No tracked file modified; no recipe, environment file, `AGENTS.md`, or prior experiment record changed.
- `git log --oneline -5`: HEAD `78068d8 harness: context/briefs update`; no experiment commit made.
- Repository confinement to the EXP-010-R3 record + `evidence/EXP-010-R3/` is **established**.

### T10.4 — Controlled-action audit (record-based; PASS)

- Tested sequence recorded in T7→T8→T9: exactly **one ordinary Designer Save** (T7, `#mgtoolbarbutton-1085`) → **ordinary target Form-tab close** (T8, single click on the target's `closable FX_FormPropertyLab13` tab button) → **same-session Designer Form-menu recent-forms reopen** (T9, `Form` menu recent-forms entry). No second Save, no Regenerate, no explicit unload, no reload, no preference change, no new/replacement Designer, no direct-URL reopen.

### T10.5 — Final acceptance table (KICKOFF AC-1..AC-8)

| AC | Check | Result | Evidence |
|---|---|---|---|
| **AC-1** | Preflight: live usable session, User scope, no recovery required, target absent (CI filter + positive control) | **PASS** | `01`–`05`; T3 |
| **AC-2** | Exactly one User-scope classic BuildFromScratch `FX_FormPropertyLab13`, Save Template unchecked, open/clean | **PASS** | `06`–`17`; T4 |
| **AC-3** | Untouched baseline recorded (Name, Caption, Description, Version, Device Type, Form Type, Is Master, ScopeType, ScopeName) | **PASS** | `17`; T4 baseline table |
| **AC-4** | Only Form-level Caption changed to exactly `Form Property Caption Close Only Replay 2`; one ordinary Save → clean; non-Caption props unchanged | **PASS** | `18`–`27`; T5/T6/T7 |
| **AC-5** | Closed through ordinary Form-tab close control, no unsaved-change/unexpected prompt, no reload/unload/pref-change/session-replacement/new Designer | **PASS** | `28`, `29`; T8 |
| **AC-6** | Reopened via supported Designer Form-menu recent-forms path in same session; same User-scoped Form by Name+ScopeType+ScopeName | **PASS** | `30`, `31`; T9 |
| **AC-7** | Post-reopen Caption exactly `Form Property Caption Close Only Replay 2`, Designer clean, all comparison props unchanged from AC-3/AC-4 | **PASS** | `31`; T9 comparison table |
| **AC-8** | Final audit: exactly-one CI inventory proof + sequence + no prohibited action + repo confinement | **UNRESOLVED** | repo confinement + sequence PASS; **exactly-one inventory proof UNRESOLVED** due to `Session Expired` prompt invalidating the Select Form read (`32`, `33`) |

### T10.6 — Outcome and knowledge state

- **EXP-010-R3 outcome: BLOCKED (not accepted).** AC-1..AC-7 PASS; **AC-8 UNRESOLVED** — the final exactly-one case-insensitive inventory proof could not be established because a `Session Expired` prompt appeared during the read-only audit and the Select Form store read returned an invalid 0 rows. The prompt was not bypassed and no session-establishment action was taken.
- **No `replay_verified` promotion.** Because AC-8 is unresolved, the EXP-010 ordinary Form-level Caption close/reopen procedure is **NOT** classified `replay_verified` by this run. It remains **`candidate_procedure`** on the strength of the accepted original EXP-010 observation; this R3's semantic behavior (AC-1..AC-7) is preserved as **observed** but the run is non-accepted due to the audit-time session expiry.
- EXP-010-R2 remains **corroborating, non-qualifying** evidence. No database durability, cache eviction, unload behavior, or causal mechanism is inferred.

### T10.7 — Evidence (under `evidence/EXP-010-R3/`)

- `32-t10-select-form-filter-lab13-one-row.png` — Select Form dialog with Filter `FX_FormPropertyLab13` (Case Sensitive off): grid **0 rows** + overlapping `Session Expired` alert. Proves the inventory read was invalid; does **not** prove exactly-one.
- `33-t10-blocker-session-expired-prompt.png` — `Session Expired` / "Your session has expired." alert dialog (OK button) in the Web Client; blocker left untouched.

### T10.8 — Stopped here (blocked)

No mutation, no prompt dismissal, no session-establishment, no reload/unload/Regenerate/preference-change/new-Designer/direct-URL/JS. The reopened target `FX_FormPropertyLab13` remains open and clean in the Designer (tab 1); the `Session Expired` prompt in the Web Client (tab 0) is left untouched for the coordinator to resolve.
