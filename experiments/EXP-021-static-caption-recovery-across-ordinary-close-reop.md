# EXP-021 — Static Caption Recovery Across Ordinary Close/Reopen

Status: **AWAITING COORDINATOR ACCEPTANCE — AC-1..AC-8 supported by completed worker reports; AC-9 independently reconciled on 2026-10-06 after T9 interruption and T10/T11 shell loops. Static component + exact Caption recovery remains observed (UI-level only). Harness run is still paused.**
Date: 2026-10-06 (preflight executed 2026-10-05 browser-clock)
Mode: LEARNING MODE — new experiment on a new User-scope classic BuildFromScratch Form `FX_StaticCaptionLab01` with exactly one Static component `FX_StaticCaptionStatic`, Caption `Static Caption Close Only`.
Run: R-20261006-004825-suU5 (cycle 0, task T1)
Editing scope: User
Target: `FX_StaticCaptionLab01` (Form), `FX_StaticCaptionStatic` (Static component)
Evidence directory: `evidence/EXP-021/`

## Objective

Observe the path-specific recovery of a saved **Static component Caption** across an ordinary Web Designer Form-tab close followed by Form-menu recent-forms reopen in the same Designer/session context, without page reload or explicit unload. Establishes only UI-level component-Caption recovery across this ordinary close/reopen boundary; no Forms-database durability, cache eviction, backend-session continuity, or Button/Edit behavior is inferred.

## Required reading before mutation (done in T1)

- `experiments/EXP-003-R2-component-fundamentals-replay.md` — replay-verified component placement + Name/Caption editing + persistence (Static Caption `Component Fundamentals` renders with trailing colon at runtime).
- `experiments/EXP-008-R2-clean-replay-form-description-recovery-across-ordi.md` — accepted ordinary close/reopen boundary (Form-tab close control; Designer Form-menu recent-forms reopen; no unload; evidence discipline).
- `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` — replay-verified fresh-dialog Classic + Build from Scratch wizard-selection prefix.
- `experiments/EXP-010-R3-clean-replay-form-caption-recovery-across-ordinary.md` — same-boundary precedent (Form-level Caption) and the UI-filter absence proof method; also documents the `Session Expired` blocker pattern.
- `experiments/EXP-020-button-caption-recovery-across-ordinary-close-reop.md` — prior Button Caption attempt: the Button Caption value-cell editor rendered as a string-resource combobox and rejected the literal (out of scope here; Static is the target).
- `recipes/forms/create-basic-form.md` (verified), `recipes/components/add-component-from-toolbox.md` (verified), `recipes/components/configure-basic-component.md` (verified).

## Starting state / preflight facts (T1)

- Environment: Mongoose Web Client / Designer (config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge), Portal shell 2026.09.00 (per `environments/current-environment.md`).
- Browser state at T1 start (inspected first): two tabs:
  - Tab 0: Mongoose Web Client (portal) — **stale**: Select Form dialog left open with filter `FX_FormPropertyLab13` (0 rows) and a **`Session Expired` / "Your session has expired."** alertdialog (OK button) overlaying it (evidence `02`).
  - Tab 1: Web Designer at `WSWebClient/designer/default.aspx?MGForm=FX_FormPropertyLab13` — `FX_FormPropertyLab13` (EXP-010-R3's lab) open and clean (Save/Regenerate/Undo/Redo disabled); form tabs `FormSync`, `FX_ButtonCaptionLab01`, `Form Property Caption Close Only Replay 2` (= Lab13); status bar `[ ScopeType: User / ScopeName: <user> ]`; Toolbox expanded with `Static` row visible. **Not touched** (evidence `01`).
- **Pre-mutation session establishment (disclosed):** the Web Client AppApi session was expired. Because no target mutation had begun, the documented supported establishment path was used: dismissed the `Session Expired` alert via its OK → the Web Client **config-group Sign In** dialog appeared (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` pre-selected) → clicked OK (no credential fields on this dialog; no credential value read/printed). The Web Client reloaded signed-in (user badge `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, toolbar clean, no windows). This is a pre-mutation establishment, permitted by the coordinator instruction and disclosed.

## Preflight method (T1)

1. Read the required records/recipes above (read-only; none modified).
2. Inspected current browser state (2 tabs as above) — no login performed at inspection time.
3. Pre-mutation session establishment as described above (Web Client Sign In OK).
4. Clicked Web Client **Open** (`mgtoolbarbutton-1101`, native) → **Select Form** dialog (grid `f3e81`, filter textbox `f3e401`/`textfield-1143-inputEl`, Filter By combobox `f3e407`, Case Sensitive `f3e411` off, Starts With `f3e416` off, OK `f3e420`/Cancel `f3e422`). Dialog opened with **empty filter** and the full inventory rendered (live server-backed read — no Session Expired alert).
5. Set **Filter By = Name** (clicked the rendered `Name` option in the opened picker).
6. **Target-absence proof (UI-level, case-insensitive, Name):** typed `FX_StaticCaptionLab01` into the Filter field via real key events (`pressSequentially`, Case Sensitive **off**) → grid body `f3e93` collapsed to **0 rows** (evidence `03`).
7. **Target-absence proof (UI-level, lowercase, case-insensitive):** cleared and typed `fx_staticcaptionlab01` → **0 rows** (evidence `05`).
8. **Positive control (filter works):** cleared and typed `FX_` (same case-insensitive mode) → grid re-rendered **21 rows**: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormVariableLab05`, `FX_FormVariableLab04`, `FX_FormVariableLab03`, `FX_FormVariableLab02`, `FX_FormPropertyLab10`, `FX_FormPropertyLab09`, `FX_FormPropertyLab08`, `FX_FormPropertyLab07`, `FX_FormPropertyLab06`, `FX_FormPropertyLab05`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_ButtonCaptionLab01`, `FX_FormPropertyLab02` (Caption "Form Property Lab Replay"), `FX_FormPropertyLab04` ("Form Property Lab Coupled Unload Replay"), `FX_FormPropertyLab03` ("Form Property Lab Coupled Unload"), `FX_FormPropertyLab01` ("Form Property Lab"), `FX_FormPropertyLab13` ("Form Property Caption Close Only Replay 2"), `FX_FormPropertyLab12` ("Form Property Caption Close Only Replay"), `FX_FormPropertyLab11` ("Form Property Caption Close Only"). **No `FX_StaticCaptionLab01`** among them (evidence `04`).
9. Restored the dialog (filter cleared) and closed via **Cancel** (native click). Web Client verified clean: no dialog, no windows, Save disabled (evidence `06`).
10. Editing scope confirmed **User**: Designer status bar `[ ScopeType: User / ScopeName: <user> ]` (evidence `01`); Web Client user badge (establishment).

## Target-absence evidence — pre-mutation absence of `FX_StaticCaptionLab01`

| Check | Method | Result |
|---|---|---|
| UI filter, case-insensitive (Case Sensitive off, Filter By Name) | Filter `FX_StaticCaptionLab01` | **0 rows** (evidence `03`) |
| UI filter, lowercase (case-insensitive) | Filter `fx_staticcaptionlab01` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Filter `FX_` (case-insensitive) | **21 rows** (full `FX_` inventory, no `FX_StaticCaptionLab01`) (evidence `04`) |

**Counts (UI-filtered, case-insensitive): target `FX_StaticCaptionLab01` = 0; `FX_` inventory = 21 rows.**

Case-insensitive matching accounted for via the Case Sensitive checkbox left **off** plus the lowercase re-check and the positive control. A store-level scan was not used; the UI filter + positive control is the permitted rendered-UI proof (same method as EXP-010-R3).

**Name/Caption ambiguity:** Filter By was set to **Name**; the positive control shows both Caption and Name columns. No row's Name or Caption resembles `FX_StaticCaptionLab01` (the `FX_` inventory is fully enumerated above).

## Repository / worktree starting state (T1)

- Worktree is a git repository. New in this run so far: `evidence/EXP-021/` (screenshots `01`–`06`) and this record file. No prior experiment file, recipe, environment file, or `AGENTS.md` modified.

## Observations

- **Session was expired at T1 start** (Web Client `Session Expired` alert over the stale Select Form dialog); the stale 0-row read was **not** used as absence evidence. After the pre-mutation establishment, the Select Form dialog loaded the full live inventory (server-backed read valid).
- **Select Form filter re-renders on real key events** (`pressSequentially`): `FX_StaticCaptionLab01` → 0 rows; `fx_staticcaptionlab01` → 0 rows; `FX_` → 21 rows. The `fill()` automation path did **not** trigger the re-render (known pitfall; corrected with real key events).
- **Designer tab live and usable** in User scope, clean, with `FX_FormPropertyLab13` active; Toolbox shows the `Static` row. Prior artifacts (`FX_FormPropertyLab13`, `FX_ButtonCaptionLab01`, `FormSync`) present and untouched.
- No Mongoose artifact created/modified/deleted; no User Preference touched; no unload invoked; no form opened from the dialog; no Designer mutation; editing scope stayed **User**.

## Knowledge state (as of T1)

- `FX_StaticCaptionLab01` absent (case-insensitive UI filter 0 rows twice + positive control 21 rows): **observed** (T1).
- Editing scope is **User** (Designer status bar + Web Client badge): **observed** (T1).
- Web Client/Designer live and usable after a disclosed pre-mutation session establishment: **observed** (T1).
- The EXP-021 **Static-Caption-recovery-across-ordinary-close/reopen** procedure remains **unverified** (all mutation steps pending).

## Open questions / blockers

- None blocking. AC-1 (preflight: live usable session, User scope, target absent via supported visible Select Form Name filter + positive control) is **PASS**.
- The Designer tab currently has `FX_FormPropertyLab13` active (prior experiment's lab) — later creation tasks must not modify it.

## T2 — Creation of `FX_StaticCaptionLab01` (AC-2, 2026-10-05 browser-clock)

### T2.1 — Guards re-verified first (read-only; PASS)

- Tabs at T2 start (state inspected before any action): Tab 0 Web Client clean (established in T1); Tab 1 (current) Designer `?MGForm=FX_FormPropertyLab13` — `FX_FormPropertyLab13` open and clean; form tabs FormSync, `FX_ButtonCaptionLab01`, Lab13; status bar `[ ScopeType: User / ScopeName: <user> ]`; toolbar clean (Save/Regenerate/Undo/Redo disabled); no inherited wizard/prompt.
- **Guard 1 — scope (PASS):** status bar `[ ScopeType: User / ScopeName: <user> ]`.
- **Guard 2 — target absence (PASS):** proven in T1 (CI UI filter 0/0 + positive control 21 rows); no intervening creation occurred. Target absent immediately before the mutation.
- **Automation note (correction):** the Designer **Form menu** was found open (computed `visibility: visible`) and intercepted the toolbar click; it was closed by clicking the Form menu button itself (toggle), then **New** was clicked. No menu item was selected; the `Definition` submenu was not opened.

### T2.2 — Creation method (EXP-019-R2 replay-verified prefix + verified basic-form suffix)

1. Designer toolbar **New** (native click) → **fresh "Form Wizard Selection"** dialog: radio **New Form** active, Category and Wizard comboboxes both **empty** (no carried-over values). (evidence `07`.)
2. **Category selection (rendered option, no typing):** clicked the Category dropdown picker → rendered options (Classic "WinStudio classic form wizards" first). Clicked the rendered **Classic** option → Category combobox displays "Classic"; Wizard still empty. (evidence `08`, `09`.)
3. **Wizard selection (rendered option, no typing):** clicked the Wizard dropdown picker → rendered options (Build from Scratch "Plain form without defined components" first). Clicked it → Wizard combobox displays "BuildFromScratch"; Category still "Classic". (evidence `10`, `11`.)
4. **Single OK submission:** clicked the selection dialog **OK** exactly once → **no rejection alert**; first **"Form Wizard - Build From Scratch"** page appeared with **Name empty** (`*` only), Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source/Query Form/Comments empty, Back/Finish disabled, Next enabled.
5. **Name entry:** typed `FX_StaticCaptionLab01` into the Name combo → combo displays `FX_StaticCaptionLab01`; other page-1 defaults untouched (BuildFromScratch / GridLeft / Default / empty). (evidence `12`.)
6. **Next** (native) → Save Template step: checkbox "Save Template" **checked** by default; Next disabled, Finish enabled. (evidence `13`.)
7. **Save Template unchecked:** clicked the visible checkbox display face → checkbox now visibly **unchecked** (accessibility: no `[checked]` state). (evidence `14`.)
8. **Finish** (native, once) → **"Process Completed Successfully"** alertdialog → **OK** (native click on the dialog's OK button). (evidence `15`.)
9. Designer loaded the new form: URL `…&MGForm=FX_StaticCaptionLab01`; form tab **`FX_StaticCaptionLab01`** appeared (4th form tab) and is selected; the FormSync, `FX_ButtonCaptionLab01`, and Lab13 tabs **remain present and untouched**; toolbar **clean** (Save/Regenerate/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `16`.)

### T2.3 — Post-creation identity + untouched Form baseline (read-only, from the loaded property grid)

| Property | Value | Read-only |
|---|---|---|
| **Name** | `FX_StaticCaptionLab01` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |
| **ScopeType** | `User` | — (status bar) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | — (status bar) |

- **Exact editing identity:** ScopeType = **`User`**, ScopeName = the signed-in user (status bar; live value masked by the secrets layer; per `environments/current-environment.md`).
- **Classic/BuildFromScratch creation result:** visible in the wizard flow (Category "Classic", Wizard "BuildFromScratch", wizard page Form Type `BuildFromScratch`, "Process Completed Successfully"); the loaded form's grid Form Type displays `Normal` (the recipe-documented post-creation display).
- **No components yet** — the canvas is blank (Static not yet placed, per task boundary).
- **Designer clean:** Save/Regenerate/Undo/Redo disabled; no visible windows; no dirty state.

### T2.4 — Ordinary-Save accounting

- **No ordinary Designer Save was performed in T2.** The toolbar Save button was never clicked. The only creation-transaction completion was the wizard **Finish → "Process Completed Successfully" → OK** (creation-dialog completion, distinct from the later AC-5 ordinary Designer Save). Finish persisted the form immediately with Save disabled (clean), per the verified recipe.

### T2.5 — T2 evidence (under `evidence/EXP-021/`)

- `07-fresh-wizard-selection-dialog.png` — fresh Form Wizard Selection dialog: New Form radio, Category/Wizard dropdowns empty.
- `08-category-dropdown-options.png` — Category dropdown rendered options (Classic first), before selection.
- `09-category-classic-selected.png` — Category combobox "Classic"; Wizard empty.
- `10-wizard-dropdown-options.png` — Wizard dropdown rendered options (Build from Scratch first); Category "Classic".
- `11-wizard-buildfromscratch-selected.png` — Wizard combobox "BuildFromScratch"; Category "Classic".
- `12-wizard-name-entered.png` — wizard page: Name `FX_StaticCaptionLab01`, Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query/Comments empty.
- `13-save-template-checked-before.png` — Save Template checkbox checked (default) before unchecking.
- `14-save-template-unchecked.png` — Save Template checkbox visibly unchecked; Finish enabled.
- `15-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `16-form-created-loaded-clean.png` — `FX_StaticCaptionLab01` loaded in Designer (`?MGForm=FX_StaticCaptionLab01`), tab selected (4th of 4), prior tabs present, toolbar clean.

### T2.6 — T2 observations / corrections

- **The Designer Form menu can be left open from a prior inspection** and intercepts toolbar clicks; closing it via the menu button itself (toggle) is reliable. No menu item was used.
- **Category/Wizard selected purely from rendered dropdown options via native clicks** (re-confirms the EXP-019-R2 replay-verified prefix in this session).
- **Wizard numeric IDs drifted** this session (formwizard dialog `e78036`, Category combo `mginfoconexpandable-7601`, Wizard combo `mginfoconexpandable-7606`, wizard page `e78243`, Name combo `mgcombo-7639`, Save Template checkbox `e78323`) — resolved at runtime.
- **`fill()` worked on the wizard Name combo** (editable combo) — unlike the Select Form filter field, which required real key events.
- **Save Template unchecked via the visible display-face click** (re-confirms the EXP-010-R3 reliable-toggle finding; no JS toggle used).
- **Finish persisted immediately**; Designer opened the form with Save disabled (clean); no separate Save performed; no second creation attempt.
- No User Preference inspected/changed; no unload invoked; no form other than the new `FX_StaticCaptionLab01` created/modified/deleted; FormSync/`FX_ButtonCaptionLab01`/Lab13 untouched; editing scope stayed **User**.

### T2.7 — Knowledge-state updates

- `FX_StaticCaptionLab01` **created, exactly one**, User scope, via the EXP-019-R2 prefix + verified basic-form suffix with Save Template unchecked; baseline Caption **empty**, Description **empty**: **observed** (T2).
- The composed creation path (prefix + suffix) is **observed** in this run (prefix replay_verified, suffix verified; composition single execution — not classified replay_verified end-to-end).
- The EXP-021 **Static-Caption-recovery-across-ordinary-close/reopen** procedure remains **unverified** (component + Caption + Save + close + reopen pending).

### T2.8 — Stopped here (per instruction)

Did **not** add the Static component; did **not** set any Caption; did **not** perform the experiment's ordinary Designer Save; did **not** close/reopen; did **not** touch FormSync/`FX_ButtonCaptionLab01`/Lab13 or any non-`FX_` artifact; did **not** invoke any unload; did **not** change any User Preference. The target `FX_StaticCaptionLab01` is left **open and clean** for the next task. **Next task:** add exactly one Static `FX_StaticCaptionStatic` (verified toolbox/component procedure) and record the untouched component/Form baseline.

## T3 — One Static component `FX_StaticCaptionStatic` + untouched pre-Caption baseline (AC-3, 2026-10-05 browser-clock)

### T3.1 — Guard re-read (read-only; PASS)

- Tabs at T3 start: Tab 0 Web Client clean; Tab 1 (current) Designer `?MGForm=FX_StaticCaptionLab01`; target tab selected (4th of 4); prior tabs FormSync/`FX_ButtonCaptionLab01`/Lab13 present and untouched.
- Scope `[ ScopeType: User / ScopeName: <user> ]`; toolbar clean (Save/Regenerate/Undo/Redo disabled); no components on the canvas yet; no inherited wizard/prompt. Guard PASS.

### T3.2 — Placement (verified `add-component-from-toolbox.md`)

1. Clicked the **Static** row in the Toolbox tree (under Framework Components) — arms the drop.
2. Single canvas click at an empty canvas point (viewport (420,200) on `formpaneldesigner-8169`, canvas at (258,101) 964×724). The component dropped and became selected; the Component Properties grid populated.
3. Generated identity read from the grid: **Name `static1_USER`**, header `static1_USER (Static)` — matches the verified recipe's generated-name pattern.

### T3.3 — Naming (verified `configure-basic-component.md`)

1. Double-clicked the visible **Name** value cell (`data-mgcompname="Design.Name"`, visible instance at (1715,195) 139×23; a second parked instance at y=-9829 was ignored) → cell entered `mg-underEdit` inline-editor state.
2. Typed `FX_StaticCaptionStatic` (real key events) → **Enter** committed.
3. Post-commit grid read: Name row value cell = **`FX_StaticCaptionStatic`** (accessibility-derived). The panel **header still shows `static1_USER (Static)`** — the known verified-recipe header-lag (header refreshes on reselection, not on commit); not relied on.

### T3.4 — Untouched pre-Caption component baseline (recorded BEFORE any Caption mutation)

Component property grid (Design group + Layout rows), accessibility-derived values:

| Property | Value | Source |
|---|---|---|
| Name | `FX_StaticCaptionStatic` | property grid (accessibility) |
| Type | `Static` | property grid (accessibility) |
| Caption (pre-mutation) | **blank/empty** | property grid (value cell empty) |
| Description | blank | property grid |
| From Device Master | `True` | property grid |
| Unit | `Char` | property grid |
| Size | `20; 1` | property grid |
| Location | `5.5; 20.25` | property grid |
| Glue / Containment / Order | blank | property grid |
| Tab Order | `0` | property grid |

- Collapsed groups present (not expanded, not inspected): Appearance, Behavior, Data Source, Events, Help, Inheritance, Layout, Miscellaneous.
- **Exactly one component** on the form (one Static; no Button/Edit/second Static placed).
- **Rendered-visible vs accessibility-derived:** the component is visibly rendered on the canvas (blank Static at the click point); the property values above are **accessibility/property-grid-derived**, not read from a rendered string. No exact rendered string is claimed.

### T3.5 — Form scoped identity baseline (retained)

Name `FX_StaticCaptionLab01`; Caption empty; Description empty; Version `User version for user <user>`; Device Type `Default`; Form Type `Normal`; Is Master `True`; ScopeType `User`; ScopeName `<user>` (status bar) — unchanged from the T2 baseline table.

### T3.6 — Dirty-state accounting

- After the placement + rename, the toolbar became **dirty** as expected (placement makes the form dirty per the verified recipe). **No ordinary Designer Save was performed in T3** (the toolbar Save button was not clicked). No Caption was touched.

### T3.7 — T3 evidence (under `evidence/EXP-021/`)

- `17-static-placed-renamed-properties.png` — Designer on `FX_StaticCaptionLab01` (User scope bar), selected Static on canvas, Component Properties grid showing Name `FX_StaticCaptionStatic` (header lag noted). Supports: target identity + scope + one Static present. Does not prove persistence (no Save yet).
- `18-ac3-component-baseline-properties.png` — Component property grid baseline rows (Name/Type/Caption blank/Unit/Size/Location/Tab Order). Supports the AC-3 baseline record.

### T3.8 — Observations / corrections

- **Two `Design.Name` value cells exist in the DOM** (one parked at y≈-9829, one visible at (1715,195)); the visible one was targeted by on-screen rect, not by first match.
- **`insertText` + Enter committed the rename** through the open inline editor; the grid store row updated immediately (verified-recipe behavior).
- **Header lag re-confirmed** in this session (header kept `static1_USER (Static)` after commit).
- No User Preference touched; no unload invoked; no Save/Regenerate performed; FormSync/`FX_ButtonCaptionLab01`/Lab13 untouched; scope stayed **User**; no session-establishment action (mutation already begun; none needed).

### T3.9 — Knowledge-state updates

- One Static placed on `FX_StaticCaptionLab01` and renamed to `FX_StaticCaptionStatic` via the verified procedures, pre-Caption Caption **blank**: **observed** (T3).
- EXP-021 Static-Caption close/reopen recovery remains **unverified** (Caption mutation + Save + close + reopen pending).

### T3.10 — Stopped here (per instruction)

Did **not** set the Caption; did **not** Save; did **not** close/reopen; did **not** touch other artifacts. The target is left **open and dirty** (one Static `FX_StaticCaptionStatic`, Caption blank) for the next task (Caption mutation + one ordinary Save).

## T4 — Static Caption mutation to `Static Caption Close Only` (AC-4, 2026-10-05 browser-clock)

### T4.1 — Guard re-read (read-only; PASS)

- Target tab `FX_StaticCaptionLab01` selected; Component tab selected; Component grid active with Name row `FX_StaticCaptionStatic`; Caption row blank.
- Scope `[ ScopeType: User / ScopeName: <user> ]`; toolbar **dirty** as expected from T3 (Save enabled, Regenerate enabled, Undo enabled, Redo disabled); no prompt. Guard PASS.

### T4.2 — Caption editor operation (visible Component property editor, normal interaction)

1. Double-clicked the **visible** Caption value cell (`data-mgcompname="Design.Caption"`, visible instance at (1715,243) 139×24; a parked duplicate ignored) → cell entered `mg-underEdit` inline-editor state (same editor path that committed the T3 rename).
2. Typed `Static Caption Close Only` (real key events) → **Enter** committed.
3. Post-commit grid read (accessibility-derived): Caption row value cell = **`Static Caption Close Only`** (full exact string in the accessibility tree; the visible cell renders it truncated as `Static Caption Clos…` with a dropdown-arrow icon — the exact value is NOT claimed from the rendered crop).
4. **No resource-key substitution occurred:** the literal committed directly through the inline editor (unlike the EXP-020 Button Caption picker-rejection pattern); no picker list was opened or selected.

### T4.3 — Non-Caption comparison properties re-read (equal to AC-3 baseline)

| Property | Post-Caption value | Equal to baseline |
|---|---|---|
| Name | `FX_StaticCaptionStatic` | ✓ |
| Type | `Static` | ✓ |
| Description | blank | ✓ |
| From Device Master | `True` | ✓ |
| Unit | `Char` | ✓ |
| Size | `20; 1` | ✓ |
| Location | `5.5; 20.25` | ✓ |
| Glue / Containment / Order | blank | ✓ |
| Tab Order | `0` | ✓ |

Form-level properties untouched (Form Caption/Description remain empty; no Form property edited). Exactly one component still.

### T4.4 — Dirty-state proof

- Toolbar after the Caption commit: **Save enabled, Regenerate Form enabled, Undo enabled, Redo disabled** — dirty as expected. **No ordinary Designer Save performed in T4** (Save button not clicked).

### T4.5 — T4 evidence (under `evidence/EXP-021/`)

- `19-caption-committed-dirty.png` — inspected: tab `FX_StaticCaptionLab01` selected; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar dirty (Save/Undo enabled); canvas shows the selected Static box at the placement point with **no visible caption text rendered on the canvas**; Component grid shows Name `FX_StaticCaptionSt…` (truncated), Caption cell `Static Caption Clos…` (truncated + dropdown arrow), Type `Static`, From Device Master `True`, Unit `Char`, Size `20; 1`, Location `5.5; 20.25`, Tab Order `0`. Proves: target identity + scope + dirty state + one Static + Caption cell non-empty. Does NOT prove the exact Caption string from the crop (truncated) — exactness comes from the accessibility tree (labeled separately).

### T4.6 — Observations / corrections

- **The Static Caption cell committed the literal via the same inline-editor path as the Name cell** (dblclick → `mg-underEdit` → type → Enter). No string-resource picker rejection occurred for Static (contrast with EXP-020's Button Caption editor behavior — out of scope, not retried).
- **Canvas does not visibly render the Caption text** in the Designer at this state (only the selected component box; accessibility canvas text shows a stray `":"` node). Rendered-visible caption evidence is therefore **not available pre-Save**; exact value evidence is accessibility/property-grid-derived and labeled as such.
- **Caption cell shows a dropdown-arrow icon** (combo-style cell) but the literal committed inline; no selection from a picker was needed.
- No Save/Regenerate performed; no unload; no preference change; other artifacts untouched; scope stayed **User**; no session-establishment action.

### T4.7 — Knowledge-state updates

- Static component Caption committed to exactly `Static Caption Close Only` via the visible property editor, non-Caption baseline unchanged, Designer dirty: **observed** (T4).
- EXP-021 Static-Caption close/reopen recovery remains **unverified** (ordinary Save + close + reopen pending).

### T4.8 — Stopped here (per instruction)

Did **not** Save; did **not** close/reopen; did **not** touch other properties/artifacts. The target is left **open and dirty** (Caption = `Static Caption Close Only`, accessibility-derived exact value) for the next task (exactly one ordinary Designer Save to clean).

## T5 — Exactly ONE ordinary Designer Save + post-Save verification (AC-5, 2026-10-05 browser-clock)

### T5.1 — Pre-Save guard (read-only; PASS)

- Target tab `FX_StaticCaptionLab01` selected; Component tab selected; Component grid active: Name `FX_StaticCaptionStatic`, Caption `Static Caption Close Only` (accessibility-derived).
- Scope `[ ScopeType: User / ScopeName: <user> ]`; toolbar **dirty** (Save/Regenerate/Undo enabled, Redo disabled); no prompt. Guard PASS.

### T5.2 — Ordinary Designer Save (exactly once)

Clicked the toolbar **Save** button once (`#mgtoolbarbutton-1085`, native click). No second Save, no Regenerate, no unload, no reload, no navigation, no JS.

### T5.3 — Post-Save clean-state proof

- Toolbar after Save: **Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled** — Designer returned to a clean saved state.
- Transient Save toast observed in the post-Save accessibility snapshot: **"Form [FX_StaticCaptionLab01] and global object(s) were saved."** (with a Close control) — the ordinary Save confirmation message naming the target Form.
- No error/prompt appeared.

### T5.4 — Post-Save component re-read (accessibility/property-grid-derived)

| Property | Post-Save value | Equal to baseline |
|---|---|---|
| Name | `FX_StaticCaptionStatic` | ✓ |
| Caption | `Static Caption Close Only` | ✓ (saved controlled value) |
| Type | `Static` | ✓ |
| Description | blank | ✓ |
| From Device Master | `True` | ✓ |
| Unit | `Char` | ✓ |
| Size | `20; 1` | ✓ |
| Location | `5.5; 20.25` | ✓ |
| Glue / Containment / Order | blank | ✓ |
| Tab Order | `0` | ✓ |

Form identity unchanged: tab `FX_StaticCaptionLab01`, URL `?MGForm=FX_StaticCaptionLab01`, scope `[ ScopeType: User / ScopeName: <user> ]`. Exactly one component still present.

### T5.5 — Ordinary-Save accounting (explicit)

- **This was the experiment's one and only ordinary Designer Save** (T5.2, single click on the toolbar Save control). No other ordinary Save has been or will be performed in EXP-021. The T2 wizard Finish was a creation-dialog completion, not an ordinary Save.

### T5.6 — T5 evidence (under `evidence/EXP-021/`)

- `20-post-save-clean-saved-toast.png` — inspected: tab `FX_StaticCaptionLab01` selected; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean (Save/Undo greyed); canvas shows the selected Static box (no visible caption text on canvas); Component grid: Name `FX_StaticCaptionSt…` (truncated), Caption `Static Caption Clos…` (truncated + dropdown arrow), Type `Static`, From Device Master `True`, Unit `Char`, Size `20; 1`, Location `5.5; 20.25`, Tab Order `0`. Proves: target identity + scope + clean toolbar + one Static + Caption cell non-empty. Does NOT prove the exact Caption string from the crop (truncated) — exactness is accessibility-derived (labeled separately). The transient Save toast text is recorded from the accessibility snapshot, not from this crop.

### T5.7 — Observations / corrections

- **Save toast names the target Form** ("Form [FX_StaticCaptionLab01] and global object(s) were saved.") — ordinary Save confirmation observed.
- **Canvas still renders no caption text** for the Static in the Designer canvas (selected box only); rendered-visible caption evidence remains unavailable at this stage.
- All non-Caption comparison properties equal the AC-3 baseline; Caption retained; Designer clean.
- No Save performed twice; no Regenerate; no unload; no preference change; other artifacts untouched; scope stayed **User**; no session-establishment action.

### T5.8 — Knowledge-state updates

- Exactly one ordinary Designer Save returned the Designer to clean and retained the component Name/Caption + baseline: **observed** (T5).
- EXP-021 Static-Caption close/reopen recovery remains **unverified** (close + reopen pending).

### T5.9 — Stopped here (per instruction)

Did **not** close/reopen the target; did **not** perform a second Save; did **not** touch other artifacts. The target `FX_StaticCaptionLab01` is left **open and clean** (saved; Caption = `Static Caption Close Only`) for the next task (ordinary Form-tab close).

## T6 — Ordinary Form-tab close of the target (AC-6, 2026-10-05 browser-clock)

### T6.1 — Pre-close guard (read-only; PASS)

- Target tab `FX_StaticCaptionLab01` selected (4th of 4 tabs: FormSync, `FX_ButtonCaptionLab01`, Lab13, target); toolbar clean (Save/Regenerate/Undo/Redo disabled); scope `[ ScopeType: User / ScopeName: <user> ]`; no prompt. Guard PASS.

### T6.2 — Ordinary close (exactly once)

Clicked the target tab's ordinary close control (accessibility button **"closable FX_StaticCaptionLab01"**, the tab-header X) once. No unload invoked, no Regenerate, no preference change, no authentication/session action, no Designer replacement, no reload/navigation.

### T6.3 — Immediate post-close state (observed)

- **The `FX_StaticCaptionLab01` tab is no longer open**: tab list now shows exactly 3 tabs — `FormSync`, `FX_ButtonCaptionLab01`, `Form Property Caption Close Only Replay 2` (Lab13) — with Lab13 becoming the selected tab.
- **Same Designer client/context remains present**: same tab (Tab 1), Designer chrome intact (toolbar, Toolbox, Properties panel, status bar `[ ScopeType: User / ScopeName: <user> ]`); URL now `designer/default.aspx` without the `MGForm` parameter.
- **No unsaved-change prompt or any other unexpected prompt appeared** (the form was saved clean before close; no alert/prompt in the accessibility snapshot or screenshot).
- The other three tabs remain open and untouched.

### T6.4 — Accounting (explicit)

- **This was the experiment's one ordinary target close** (single click on the target tab's close control). **The recent-forms reopen has NOT yet occurred** (next task).

### T6.5 — T6 evidence (under `evidence/EXP-021/`)

- `21-after-close-target-tab-gone-context-intact.png` — inspected: exactly 3 form tabs (FormSync, `FX_ButtonCaptionLab01`, `Form Property Caption Close Only Replay 2` selected); **no `FX_StaticCaptionLab01` tab**; Designer chrome + scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` intact; toolbar clean; no prompt visible. Proves: target closed while same Designer context remains. Does not prove reopen behavior (pending).

### T6.6 — Observations / corrections

- Close of a clean saved form produced **no unsaved-changes prompt** (consistent with the EXP-008-R2 accepted boundary).
- After close, the previously open Lab13 tab became the selected tab; the Designer remained live in User scope.
- No Save performed; no unload; no navigation/reload; other tabs untouched; scope stayed **User**.

### T6.7 — Knowledge-state updates

- Ordinary Form-tab close of the saved clean target leaves the tab closed with the same Designer context intact and no prompt: **observed** (T6).
- EXP-021 Static-Caption close/reopen recovery remains **unverified** (reopen + verification pending).

### T6.8 — Stopped here (per instruction)

Did **not** reopen the target; did **not** touch other tabs/artifacts; did **not** invoke unload/Regenerate/Save. The target is **closed**; the same Designer client remains open with 3 other tabs. **Next task:** reopen `FX_StaticCaptionLab01` via the Designer Form-menu recent-forms path and verify component + Caption recovery.

## T7 — Reopen via Designer Form-menu recent forms (AC-7, 2026-10-05 browser-clock)

### T7.1 — Pre-reopen guard (read-only; PASS)

- Same Designer tab (Tab 1) as before close; URL `designer/default.aspx` (no `MGForm`); tab list = 3 tabs (FormSync, `FX_ButtonCaptionLab01`, Lab13 selected); target closed; scope `[ ScopeType: User / ScopeName: <user> ]`. Guard PASS.

### T7.2 — Reopen method (supported recent-forms path)

1. Clicked the Designer **Form** menu button (top menu bar) → menu opened: `Definition`, `Sign Out`, then recent forms with **`FX_StaticCaptionLab01` as the FIRST recent-forms entry** (then Lab13, `FX_ButtonCaptionLab01`, FormSync, `FX_FormVariableLab05`, …). (evidence `22`.)
2. Clicked the **`FX_StaticCaptionLab01` menuitem** once (native click). No URL navigation, no reload, no new Designer, no authentication/session action, no Save.

### T7.3 — Post-reopen identity verification

- **Visibly reopened:** tab heading **`FX_StaticCaptionLab01`** present and selected (4th tab); URL `…?MGForm=FX_StaticCaptionLab01`.
- **Form property grid (Form tab, accessibility-derived):** Name `FX_StaticCaptionLab01`; Description blank; Caption blank; Version `User version for user <user>`; Device Type `Default`; Form Type `Normal`; Is Master `True` — matches the recorded Form baseline.
- **Scoped identity (status bar, rendered-visible):** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` — ScopeType `User` and the same ScopeName as before close.
- **Same Designer context remains in use** (same browser tab/session; the other 3 tabs still open and untouched).
- Toolbar clean (Save/Regenerate/Undo/Redo disabled) — reopen did not dirty the form.

### T7.4 — Incidental observation (NOT judged for AC-8 yet)

- The canvas now **visibly renders** the Static's caption text **`Static Caption Close Only:`** (with the recipe-documented trailing colon) at the placement point, and the canvas accessibility text node reads `"Static Caption Close Only:"`. Recorded incidentally; the AC-8 Caption-recovery judgment (component identity + exact value comparison against baseline) is deferred to the next task.

### T7.5 — Accounting (explicit)

- **This was the experiment's one recent-forms reopen** (single Form-menu menuitem click). No second reopen, no Save, no unload, no reload/URL navigation.

### T7.6 — T7 evidence (under `evidence/EXP-021/`)

- `22-form-menu-recent-forms-target-first.png` — inspected: Form menu open with `FX_StaticCaptionLab01` as the first recent-forms entry (before the reopen click). Proves the supported recent-forms path offered the target.
- `23-reopened-target-tab-form-grid.png` — inspected: tab `FX_StaticCaptionLab01` selected (4 tabs now); canvas renders `Static Caption Close Only:`; Form grid Name `FX_StaticCaptionLa…` (truncated in crop), Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean. Proves: reopened Form visibly `FX_StaticCaptionLab01` + User scope + same ScopeName + clean context. Limitation: grid Name cell truncated in crop — exact Name from the accessibility tree (labeled separately).

### T7.7 — Observations / corrections

- The recent-forms list surfaced the closed target as the **first** entry; the reopen loaded it with `?MGForm=FX_StaticCaptionLab01`.
- **The canvas now renders the caption text** (`Static Caption Close Only:`) — rendered-visible caption evidence is now available (previously unavailable pre-Save). AC-8 judgment deferred.
- Reopen did not dirty the Designer; no prompts appeared; other tabs untouched; scope stayed **User**.

### T7.8 — Knowledge-state updates

- Reopen of the closed target via the Designer Form-menu recent-forms path in the same context, with Form identity + User scope + same ScopeName verified: **observed** (T7).
- EXP-021 Static-Caption close/reopen recovery remains **unverified** (AC-8 component/Caption verification pending).

### T7.9 — Stopped here (per instruction)

Did **not** judge AC-8 yet (component identity + Caption exact-value comparison deferred); did **not** Save; did **not** touch other artifacts. The target is **reopened, clean**, with the Static visibly rendering `Static Caption Close Only:` on canvas. **Next task (AC-8):** verify component identity `FX_StaticCaptionStatic` and the exact Caption against the recorded baseline, with rendered-visible + accessibility evidence labeled separately.

## T8 — AC-8 read-only verification after reopen (2026-10-05 browser-clock)

### T8.1 — Method (read-only; no mutation)

- Located the rendered Static on the canvas by its caption text node (`mgimagelabel-8361-textEl` at (420,200) 160×18) and clicked it once to **select** the existing component (selection is read-only; no property edited, no Save).
- Component Properties grid re-populated for the selected component; all rows read via the accessibility tree.

### T8.2 — Component identity + Caption verification

- **Component header (rendered-visible):** `FX_StaticCaptionStatic (Static)` — the header refreshed on reselection (verified-recipe behavior), visibly identifying the component Name and Type.
- **Name (accessibility/property-grid-derived):** `FX_StaticCaptionStatic` — exact match to the recorded component identity.
- **Caption (accessibility/property-grid-derived):** `Static Caption Close Only` — **exact match** to the set value (no trailing colon in the stored value).
- **Rendered-visible caption (canvas):** the canvas renders **`Static Caption Close Only:`** inside the selected component box (with the recipe-documented trailing colon added at render time). The canvas accessibility text node reads `"Static Caption Close Only:"`. Rendered-visible evidence captured separately from the exact stored value.

### T8.3 — Non-Caption comparison properties vs AC-3 baseline (all equal)

| Property | Post-reopen value | Baseline | Equal |
|---|---|---|---|
| Type | `Static` | `Static` | ✓ |
| Description | blank | blank | ✓ |
| From Device Master | `True` | `True` | ✓ |
| Unit | `Char` | `Char` | ✓ |
| Size | `20; 1` | `20; 1` | ✓ |
| Location | `5.5; 20.25` | `5.5; 20.25` | ✓ |
| Glue / Containment / Order | blank | blank | ✓ |
| Tab Order | `0` | `0` | ✓ |

Exactly one component on the reopened form (one Static; no Button/Edit/second Static appeared).

### T8.4 — Designer clean-state proof (post-reopen)

- Toolbar: Save/Regenerate Form/Undo/Redo all **disabled** — Designer clean; selection did not dirty the form. No prompts.

### T8.5 — T8 evidence (under `evidence/EXP-021/`)

- `24-ac8-component-selected-caption-rendered.png` — inspected: tab `FX_StaticCaptionLab01` selected (4 tabs); scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Component header **`FX_StaticCaptionStatic (Static)`** (rendered-visible identity); canvas shows the selected Static box rendering **`Static Caption Close Only:`** (rendered-visible caption); Component grid: Name `FX_StaticCaptionSt…` (truncated in crop), Caption `Static Caption Clos…` (truncated + dropdown arrow), Type `Static`, From Device Master `True`, Unit `Char`, Size `20; 1`, Location `5.5; 20.25`, Tab Order `0`; toolbar clean. Proves: reopened Form identity + selected Static identity (header) + caption rendered on canvas + baseline rows visible. Limitation: Name/Caption grid cells truncated in crop — exact strings from the accessibility tree (labeled separately); the rendered canvas text includes the documented trailing colon, which is NOT part of the stored value.

### T8.6 — Observations / corrections

- **Component header refreshed to `FX_StaticCaptionStatic (Static)` on reselection** after reopen — resolving the earlier header-lag caveat with rendered-visible identity.
- **Canvas now renders the caption** (`Static Caption Close Only:`) — rendered-visible Caption recovery evidence available after reopen (was not rendered pre-close).
- All non-Caption properties equal baseline; exactly one component; Designer clean; no mutation performed.

### T8.7 — Knowledge-state updates

- Same Static component `FX_StaticCaptionStatic` present after ordinary close/reopen with Caption exactly `Static Caption Close Only` recovered unchanged (accessibility-derived exact value + rendered-visible canvas text + all non-Caption baseline properties equal): **observed** (T8).
- The EXP-021 procedure (create → Static + Caption → one ordinary Save → ordinary tab close → recent-forms reopen → component-Caption recovery) is **observed** in this run (single execution; not yet classified replay_verified).

### T8.8 — Stopped here (per instruction)

No Save/close/reopen/property change/session action performed. **Experiment sequence complete through AC-8.**

## T9 — AC-9 final audit (read-only; no browser mutation)

### T9.1 — Acceptance table AC-1..AC-8

| AC | Check | Result | Evidence |
|---|---|---|---|
| AC-1 | Preflight: live usable context, User scope, target absent via visible Select Form Name filter + positive control | **PASS** | `01`–`06` (0/0 rows CI + 21-row `FX_` positive control; scope bar) |
| AC-2 | One new User-scope classic BuildFromScratch Form `FX_StaticCaptionLab01`, Save Template unchecked | **PASS** | `07`–`16` (fresh dialog, Classic/BuildFromScratch rendered selections, unchecked checkbox, success dialog, loaded clean) |
| AC-3 | Exactly one Static `FX_StaticCaptionStatic` via verified procedures; untouched pre-Caption baseline recorded | **PASS** | `17`, `18` + T3 baseline table |
| AC-4 | Caption set to exactly `Static Caption Close Only` (only that property); non-Caption baseline equal; dirty as expected | **PASS** | `19` + T4 table (exact value accessibility-derived) |
| AC-5 | Exactly one ordinary Designer Save → clean; component retained | **PASS** | `20` + T5 table (Save toast names target; toolbar clean) |
| AC-6 | One ordinary Form-tab close; tab closed; same context intact; no prompt | **PASS** | `21` + T6 |
| AC-7 | One recent-forms reopen in same context; Form identity Name+ScopeType+ScopeName verified | **PASS** | `22`, `23` + T7 |
| AC-8 | Same Static present with exact Caption recovered; all non-Caption baseline properties equal; rendered-visible + accessibility labeled separately | **PASS** | `24` + T8 (header identity rendered-visible; canvas renders `Static Caption Close Only:`; exact stored value accessibility-derived) |
| AC-9 | One Save, one target close, one recent-forms reopen, no recorded prohibited post-mutation action, repository confined to this record + evidence/EXP-021/ | **PASS — independent audit; coordinator acceptance pending** | `evidence/EXP-021/independent-ac9-reconciliation.md`; completed T5–T8 reports and saved tool histories |

### T9.2 — Action counts (from the record's per-task accounting)

| Action | Count | Where |
|---|---|---|
| Ordinary Designer Save (toolbar Save click) | **1** | T5.2 only |
| Ordinary target Form-tab close | **1** | T6.2 only |
| Designer Form-menu recent-forms reopen | **1** | T7.2 only |
| Wizard Finish (creation transaction) | 1 | T2.8 — creation-dialog completion, not an ordinary Save |
| Reload / URL navigation / Designer replacement | 0 | — |
| Regenerate Form | 0 | — |
| Explicit unload (`Unload All Global Form Objects`) | 0 | never invoked |
| User Preference changes | 0 | none inspected/changed |
| Authentication/session-establishment after first target mutation | 0 | the only establishment (Web Client Sign In OK) was **pre-mutation** and disclosed (T1) |
| Non-FX_ artifact create/modify/delete/Save/Regenerate | 0 | — |
| Button/Edit component creation | 0 | — |
| Form variables/scripts/validators/bindings/IDO metadata edits | 0 | — |

### T9.3 — Repository audit

- `git status --porcelain` (T9): exactly two untracked entries — `experiments/EXP-021-static-caption-recovery-across-ordinary-close-reop.md` and `evidence/EXP-021/`. No tracked file modified; no other new files. **Repository changes confined to the EXP-021 record + evidence directory: PASS.**
- `evidence/EXP-021/` contains exactly 24 screenshots (`01`–`24`), all referenced by the record's task sections.

### T9.4 — Limitations (reported, not inferred)

- Exact Caption/Name strings are accessibility/property-grid-derived; rendered crops truncate grid cells (labeled throughout). The rendered canvas text includes the documented trailing colon (`Static Caption Close Only:`), which is not part of the stored value.
- Component identity across the boundary is established by the same Form + same component Name + equal non-Caption properties (UI-level); no internal object identity was inspected.
- No claim is made about Forms-database durability, cache eviction, backend-session continuity, or Button/Edit behavior (out of scope).
- Audit proof for action counts relies on the record's explicit per-task accounting plus evidence files; the browser was not re-inspected in T9 (not needed; no mutation permitted).

### T9.5 — Final knowledge state

- EXP-021 procedure (create → Static + Caption → one ordinary Save → ordinary close → recent-forms reopen → component-Caption recovery): **observed** (single run, AC-1..AC-8 PASS). Not classified replay_verified (single execution).
- T9 reported AC-9 complete, but its interrupted task could not supply an authoritative final report. Independent repository/tool-history reconciliation on 2026-10-06 supports AC-9; see `evidence/EXP-021/independent-ac9-reconciliation.md`. T10/T11 remain failed shell-loop tasks. Harness acceptance is pending; no additional Mongoose action or replay-verification promotion is authorized by this audit.
