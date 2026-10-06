# EXP-021-R4 — Clean Replay: Static Caption Recovery Across Ordinary Close/Reopen

Status: **IN PROGRESS — AC-1 PASS (T3); mutation steps pending.**
Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-141521-OdOc` (cycle 0 T1 aborted; cycle 1 T2 recovery; cycle 2 T3 AC-1 completion)
Mode: LEARNING MODE
Editing scope: User
Target: `FX_StaticCaptionLab04` (Form), `FX_StaticCaptionStatic04` (Static component)
Evidence directory: `evidence/EXP-021-R4/`

## Objective

Independently replay accepted EXP-021 on a new User-scope classic BuildFromScratch Form with one named Static component. Capture a pre-Caption baseline, change only Caption to exactly `Static Caption Close Only Replay 4`, perform exactly one ordinary Designer Save to clean, close the target Form tab exactly once, reopen exactly once via Designer Form-menu recent forms in the same Designer/client context, and verify the same Form recovers the Static with the exact Caption and unchanged recorded comparison properties. Require rendered Static canvas text after reopen as corroborating display evidence, recorded separately from the exact Caption property; a trailing colon does not make the Caption comparison fail. No Colon state and the cause of rendering differences remain unproven. Claims are UI-level recovery across this tested weak close-only boundary only — no Forms-database durability, serialization, cache-eviction, unload, or internal-instance claim.

## Required reading before mutation (done in T1, read-only; none modified)

- `experiments/EXP-021-static-caption-recovery-across-ordinary-close-reo.md` — accepted precedent (Static Caption recovery across ordinary close/reopen; Save toast; canvas renders Caption only after reopen with trailing colon; accessibility-derived exact values).
- `experiments/EXP-021-R2-clean-replay-static-caption-recovery-across-ordina.md` — blocked replay checkpoint (record-provenance and loop lessons).
- `experiments/EXP-003-R2-component-fundamentals-replay.md` — replay-verified Static placement + Name/Caption editing + persistence; label trailing colon; header-lag caveat.
- `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` — replay-verified fresh-dialog Classic + BuildFromScratch wizard-selection prefix.
- `recipes/forms/create-basic-form.md` (verified), `recipes/components/add-component-from-toolbox.md` (verified), `recipes/components/configure-basic-component.md` (verified).

## Worker-context freshness (recorded before any target mutation)

- This EXP-021-R4 worker context is a fresh OpenCode/worker session created by the harness run `R-20261006-141521-OdOc` (tasks T1 aborted, T2 recovery, T3 AC-1). It is **distinct from the EXP-021 worker session** `ses_ef3088c9dffeVXzKs7W2YEdQa9` recorded in the EXP-021 record.
- Freshness was NOT obtained by replacing the Designer/browser client: the same inherited two-tab browser client (portal/Web Client tab + Web Designer tab with `FX_StaticNoColonLab01` open) is preserved throughout.
- No `replay_verified` promotion is claimed by this worker; the procedure remains observed/unverified until the full lifecycle reproduces in this fresh context.

## Starting state / inherited state (T1 inspection + T2 recovery, read-only)

- Browser: two tabs. Tab 0: portal with Web Client iframe, signed in (user badge `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), Web Client toolbar Save disabled (clean). Tab 1: Web Designer `…&MGForm=FX_StaticNoColonLab01` — the **inherited EXP-022 lab remains open and dirty**: toolbar Save/Regenerate Form/Undo enabled, Redo disabled; Component panel selected with component header `static1_USER (Static)`; component grid Name `FX_StaticNoColonStatic01`, Caption `Static No Colon Test` (truncated in crop); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Evidence `01`, `03`. **Untouched** — not saved, closed, discarded, or modified; the No Colon property was not inspected or investigated.
- The Web Client **Select Form dialog** was left open by the aborted T1 (with a remembered filter); it is an inventory dialog, not a dirty-Form/uncommitted-dialog state, and is preserved open throughout this task.
- Aborted-T1 interruption accounting (from saved tool history, not replayed): typed `FX_` over the remembered filter (22 rows, evidence `02`), then a malformed append `FX_FX_StaticCaptionLab04` (0 rows — NOT used as absence evidence), then NUL chars, then partial Backspaces. T2 observed the field had since become empty (full inventory). T3 re-cleared with real Backspace key events and ran the two authorized filters.
- Repository at T2: only `evidence/EXP-021-R4/` untracked; record file absent (`new_record=true` expected); no tracked file modified. No Mongoose target mutation occurred in T1/T2.

## AC-1 preflight (T3, 2026-10-06) — PASS

1. **Designer guard (read-only, one fresh snapshot + one bounded status-bar inspection):** Tab 1 shows form tab `FX_StaticNoColonLab01` selected with its ordinary close control; toolbar dirty (Save/Regenerate Form/Undo enabled, Redo disabled) — inherited dirty state recorded, untouched. Status bar rendered-visible: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` → **Editing Scope = User** (evidence `03`).
2. **Positive control (filter works, same mode):** Select Form dialog, Filter By = **Name**, Case Sensitive **unchecked**, Starts With unchecked; filter `FX_StaticNoColonLab01` typed via real key events → grid re-rendered **exactly 1 row**: Caption `FX_StaticNoColonLab01`, Name `FX_StaticNoColonLab01` (evidence `04`).
3. **Target zero (exact, case-insensitive):** cleared the filter (real Backspace key events), typed exactly `FX_StaticCaptionLab04` → grid body rendered **0 rows** (no row elements; evidence `05`).
4. Dialog left open, filter = `FX_StaticCaptionLab04`, 0 rows; no OK/Cancel clicked; no row activated; no form opened; no authentication/session action (session live throughout); no Designer mutation; no unload; no preference change; `FX_StaticNoColonLab01` and the open dialog preserved.

**Counts (UI-filtered, case-insensitive): target `FX_StaticCaptionLab04` = 0; positive control `FX_StaticNoColonLab01` = 1.**

Case-insensitive matching accounted for by the Case Sensitive checkbox left **off** plus the positive control proving the filter mechanism live-renders on real key events. UI filter + positive control is the permitted rendered-UI proof (same method as EXP-021 / EXP-010-R3 / EXP-022); no store-level scan used.

## Evidence (under `evidence/EXP-021-R4/`)

- `01-inherited-state-staticnocollab01-open.png` — (aborted T1) Designer with `FX_StaticNoColonLab01` open, dirty toolbar, component grid.
- `02-ac1-positive-control-fx-prefix-22-rows.png` — (aborted T1) Select Form filter `FX_`, 22 rows (no `FX_StaticCaptionLab04`); corroborating inventory control.
- `snapshot-select-form-dialog.txt` — (aborted T1) dialog snapshot with remembered filter `FX_StaticNoColonLab01` (1 row).
- `03-ac1-inherited-dirty-noColonLab01-scope-user.png` — inspected: form tab `FX_StaticNoColonLab01`; toolbar Save/Undo enabled (dirty); component grid Name `FX_StaticNoColonS…`, Caption `Static No Colon Tes…` (truncated), Type `Static`, From Device Master `True`, Justification `Right`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Proves: inherited lab open + dirty + User scope. Does not prove anything about No Colon (not investigated) or the target.
- `04-ac1-positive-control-noColonLab01-1row.png` — inspected: Select Form, Filter `FX_StaticNoColonLab01`, Filter By Name, Case Sensitive unchecked, exactly 1 matching row. Proves the filter mechanism live-renders (positive control).
- `05-ac1-target-zero-FX_StaticCaptionLab04.png` — inspected: Select Form, Filter `FX_StaticCaptionLab04`, Filter By Name, Case Sensitive unchecked, **zero rows** rendered. Proves UI-level target absence at this inspection time. Does not prove whole-database cardinality or persistence.

## Knowledge state (as of T3)

- Inherited `FX_StaticNoColonLab01` open + dirty + User scope, preserved untouched: **observed** (T2/T3).
- `FX_StaticCaptionLab04` absent (CI Name filter 0 rows + positive control 1 row): **observed** (T3).
- Editing scope **User** (Designer status bar rendered-visible): **observed** (T3).
- Worker-context freshness distinct from EXP-021: **observed** (harness fact + EXP-021 record session id).
- EXP-021-R4 Static-Caption close/reopen recovery procedure: **unverified** (creation, Static, Caption, Save, close, reopen pending).

## Open questions / blockers

- None blocking. AC-1 fully satisfied: live usable session (no establishment needed), visible User editing scope, target absence via supported visible Select Form Name filter + positive control.
- Next permitted action: create `FX_StaticCaptionLab04` via the verified fresh-dialog Classic/BuildFromScratch wizard prefix + basic-form suffix (Save Template unchecked), preserving the inherited dirty lab and the open Select Form dialog.

## T4 — Creation of `FX_StaticCaptionLab04` (AC-2, 2026-10-06)

### T4.1 — Guards re-verified first (read-only; PASS)

- One fresh untargeted snapshot of Tab 1 (Designer): form tab `FX_StaticNoColonLab01` selected with close control; toolbar **dirty** (Save/Regenerate Form/Undo enabled, Redo disabled) — inherited dirty state re-confirmed and left untouched; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no wizard/prompt inherited.
- Guard 1 — scope: **User** (status bar). Guard 2 — target absence: proven in T3 (0-row CI Name filter + 1-row positive control); no intervening creation. Target absent immediately before the mutation.

### T4.2 — Creation method (EXP-019-R2 replay-verified prefix + verified basic-form suffix; composition not claimed replay_verified)

1. Native click Designer toolbar **New** → **fresh "Form Wizard Selection"** dialog: radio **New Form** active, Category and Wizard comboboxes **empty** (evidence `06`).
2. **Category (rendered option, no typing):** Category dropdown picker opened → rendered options (Classic "WinStudio classic form wizards" first) (evidence `07`); clicked rendered **Classic** → combobox displays "Classic" (evidence `08`).
3. **Wizard (rendered option, no typing):** Wizard dropdown picker opened → rendered options (Build from Scratch "Plain form without defined components" first) (evidence `09`); clicked it → combobox displays "BuildFromScratch"; Category still "Classic" (evidence `10`).
4. **Single OK submission** → no rejection alert; first **"Form Wizard - Build From Scratch"** page appeared with Name empty (`*` only), Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source/Query Form/Comments empty, Back/Finish disabled, Next enabled.
5. **Name entry:** Name combo set to exactly `FX_StaticCaptionLab04` (fill worked on the editable combo, per verified pitfall notes); other page-1 defaults untouched (evidence `11`).
6. **Next** → Save Template step: checkbox "Save Template" **checked** by default (evidence `12`).
7. **Save Template unchecked:** first click on the checkbox input ref **timed out with the display-face span intercepting pointer events**; postcondition inspected once — still `[checked]` (no effect); corrected attempt: native click on the display-face element (`#ext-comp-2234-displayEl`) → checkbox now **unchecked** (accessibility: no `[checked]` state) (evidence `13`).
8. **Finish** (native, once) → **"Process Completed Successfully"** alertdialog → **OK** (native click) (evidence `14`).
9. Designer loaded the new form: URL now `…&MGForm=FX_StaticCaptionLab04`; form tab **`FX_StaticCaptionLab04`** appeared (2nd form tab) and is selected; the `FX_StaticNoColonLab01` tab **remains present and untouched**; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed (evidence `15`).

### T4.3 — Post-creation identity + untouched Form baseline (read-only, loaded property grid)

| Property | Value | Source |
|---|---|---|
| **Name** | `FX_StaticCaptionLab04` | property grid (accessibility, full value; crop truncates `FX_StaticCaptionLa…`) |
| **Description** | *(empty)* | property grid |
| **Caption** | *(empty)* | property grid |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | property grid (accessibility; crop `User version for us…`) |
| **Device Type** | `Default` | property grid |
| **Form Type** | `Normal` | property grid |
| **Is Master** | `True` | property grid |
| **ScopeType** | `User` | status bar (rendered-visible) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | status bar (rendered-visible) |

- **Exact editing identity proven on three agreeing surfaces:** form tab heading `FX_StaticCaptionLab04`, URL `MGForm=FX_StaticCaptionLab04`, property grid Name; scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` rendered-visible.
- **Classic/BuildFromScratch creation result:** visible in the wizard flow; loaded grid Form Type displays `Normal` (recipe-documented post-creation display).
- **No components** — canvas blank (Static not yet placed, per task boundary).
- **Designer clean:** Save/Regenerate Form/Undo/Redo disabled; no visible windows; no dirty state.

### T4.4 — Ordinary-Save accounting (explicit)

- **No ordinary Designer Save was performed in T4.** The toolbar Save button was never clicked. The only creation-transaction completion was wizard **Finish → "Process Completed Successfully" → OK** (creation-dialog completion, distinct from the later experiment ordinary Save). Finish persisted the form immediately with Save disabled (clean), per the verified recipe.

### T4.5 — T4 evidence (under `evidence/EXP-021-R4/`)

- `06-fresh-wizard-selection-dialog.png` — fresh Form Wizard Selection dialog: New Form radio, Category/Wizard dropdowns empty. Supports the fresh-dialog precondition.
- `07-category-dropdown-options.png` — Category dropdown rendered options (Classic first), before selection. Supports the rendered-Classic-option precondition.
- `08-category-classic-selected.png` — Category combobox "Classic"; Wizard empty. Supports Category-selected postcondition.
- `09-wizard-dropdown-options.png` — Wizard dropdown rendered options (Build from Scratch first); Category "Classic". Supports the rendered-Build-from-Scratch-option precondition.
- `10-wizard-buildfromscratch-selected.png` — Wizard combobox "BuildFromScratch"; Category "Classic". Supports Wizard-selected postcondition.
- `11-wizard-name-entered.png` — wizard page: Name `FX_StaticCaptionLab04`, Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query/Comments empty. Supports exact-Name + untouched defaults before Finish.
- `12-save-template-checked-before.png` — Save Template checkbox checked (default) before unchecking. Supports the deliberate-uncheck record.
- `13-save-template-unchecked.png` — Save Template checkbox visibly unchecked; Finish enabled. Supports the Save-Template-unchecked precondition before Finish.
- `14-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish. Supports the creation-transaction success.
- `15-form-created-loaded-clean.png` — inspected: both form tabs visible (`FX_StaticNoColonLab01` unselected, `FX_StaticCaptionLab04` selected); blank canvas; Form property grid Name `FX_StaticCaptionLa…` (truncated in crop), Description/Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean (Save/Undo greyed). Proves: target Form visibly loaded + User scope + same ScopeName + clean state + no components + prior lab tab preserved. Limitation: Name/Version grid cells truncated in crop — exact strings from the accessibility tree (labeled separately).

### T4.6 — Observations / corrections

- **Save Template checkbox display-face click** was required (input-ref click timed out with interception; postcondition re-inspected once before the corrected attempt — no blind retry). Matches the verified EXP-010-R3/EXP-021/EXP-022 finding.
- **`fill()` worked on the wizard Name combo** (editable combo) — consistent with verified notes.
- Wizard numeric IDs drifted this session (selection dialog `e1498`, Category combo `mginfoconexpandable-1964`, Wizard combo `mginfoconexpandable-1969`, wizard page `e1705`, Name combo `mgcombo-2002`, Save Template checkbox `ext-comp-2234`) — resolved at runtime.
- No User Preference touched; no unload invoked; no Regenerate; no form other than the new `FX_StaticCaptionLab04` created/modified/deleted; `FX_StaticNoColonLab01` and the open Web Client Select Form dialog untouched; editing scope stayed **User**; no session-establishment action (mutation already begun; none needed).

### T4.7 — Knowledge-state updates

- `FX_StaticCaptionLab04` **created, exactly one**, User scope (ScopeName `anton.ramos@3mworks.com.ph`), via the fresh-dialog Classic/BuildFromScratch prefix + verified basic-form suffix with Save Template unchecked; baseline Caption **empty**, Description **empty**; loaded clean with no components: **observed** (T4).
- The composed creation path is **observed** in this run (prefix replay_verified in EXP-019-R2; suffix verified recipe; single execution of the composition — not classified replay_verified end-to-end).
- EXP-021-R4 Static-Caption close/reopen recovery remains **unverified** (Static + Caption + Save + close + reopen pending).

### T4.8 — Stopped here (per instruction)

Did **not** place any component; did **not** set any Caption; did **not** perform an ordinary Designer Save; did **not** close/reopen; did **not** touch any other artifact. The target `FX_StaticCaptionLab04` is left **open and clean** for the next task (Static placement + rename + pre-Caption baseline). **Next task:** AC-3 — add exactly one Static `FX_StaticCaptionStatic04` via the verified toolbox/configure procedures and capture the pre-Caption baseline.

## T5 — Static placement + rename + pre-Caption baseline (AC-3, 2026-10-06)

### T5.0 — Fresh worker context (harness fact)

- Harness run `R-20261006-141521-OdOc`, cycle 4, task T5: fresh worker context distinct from EXP-021 (same freshness fact as T1–T4; freshness NOT obtained by replacing the Designer/browser client — same Designer tab, same session id `…0a319988-7980-4412-943d-4397dcb07eca`).

### T5.1 — Preflight (read-only; PASS)

- Recipes read before mutation: `add-component-from-toolbox.md` (verified), `configure-basic-component.md` (verified).
- Inherited visible state: `FX_StaticCaptionLab04` selected and **clean** (Save/Regenerate/Undo/Redo disabled); `FX_StaticNoColonLab01` tab present, unselected, untouched; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialogs open; canvas blank (no components).
- Toolbox tree inspected: "Static" row present under Framework Components (no search used).

### T5.2 — Exactly one Static creation operation (verified recipe steps 1–2)

1. **Toolbox selection:** native click on Toolbox tree row **Static** (armed the drop; no component created by this click alone).
2. **Canvas placement:** single native click on an empty canvas spot of the selected `FX_StaticCaptionLab04` panel (resolved to `#formcontainer-2377`). Postcondition inspected once: **Component** tab became selected, grid header `static1_USER (Static)`, toolbar became **dirty** (Save/Regenerate Form enabled) — placement registered.
- **Creation action count: exactly one** (one Toolbox type-selection + one canvas click; no repeat, no retry). No other component created.

### T5.3 — Rename attempt to `FX_StaticCaptionStatic04` (verified configure recipe, Name row — NOT committed)

3. Component already selected (grid header `static1_USER (Static)`). **Double-clicked the Name value cell** (`static1_USER`) → cell entered under-edit state (`x-grid-cell-selected`, `mg-underEdit`, `aria-selected="true"`).
4. **Typed** `FX_StaticCaptionStatic04` into the cell via `pressSequentially` (fill rejected: cell is a `td`, not an input/contenteditable).
5. **Committed with Enter** → **TypeError: Cannot read properties of null (reading 'data') at ctor.onKeyEnter** (Designer app.js) — the Ext onKeyEnter handler threw; the Name value cell still displays `static1_USER` (accessibility + screenshot). **Rename NOT committed.**
- Postcondition inspected once after the failed Enter: Name row still `static1_USER`, cell still `[active][selected]` (under-edit); grid header still `static1_USER (Static)`. No retry attempted (per recovery rule: one fresh inspection + one corrected attempt, then blocker).

### T5.4 — Exact pre-Caption comparison baseline (read-only, component Properties grid, Component tab selected)

**Baseline captured at the generated name `static1_USER`** (rename pending — see T5.3 blocker). Grid header: `static1_USER (Static)`.

| Property | Baseline value |
|---|---|
| Name | `static1_USER` (generated; rename to `FX_StaticCaptionStatic04` pending — T5.3 blocker) |
| Description | *(empty)* |
| **Caption** | *(empty)* — pre-Caption baseline |
| Type | `Static` |
| From Device Master | `True` |
| Theme Class | *(empty)* |
| Background Color | *(empty)* |
| Foreground Color | `#000000` |
| Bitmap File Name | *(empty)* |
| Font | *(empty)* |
| Justification | `Right` |
| Read-Only/Disable | `False` |
| Tab Read-Only Field | `False` |
| Hidden | `False` |
| No Tab Stop | `False` |
| Auto Complete | `False` |
| Binding Type | `None` |
| Binding | *(empty)* |
| Required | `False` |
| To Be Determined | `False` |
| Upper or Lower Case | `Mixed` |
| Default Value | *(empty)* |
| Help Context ID | `0` |
| Set Class From | `This Component's Attribute` |
| Layout Unit | `Char` |
| Layout Size | `20; 1` |
| Layout Location | `22.4444444444444; 81.5` |
| Tab Order | `0` |
| Drag From Events | `0 event(s)` |
| Drop On Events | `0 event(s)` |

- Group headers (Design/Appearance/Behavior/…/Layout/Miscellaneous) and empty expandable rows (Add/Details and Find Form, Events, Validation, Formatting, Inheritance, etc.) recorded as present; no values changed.
- **No Colon property: not inspected, not searched, not changed, not inferred** (per instruction).
- **Rendered canvas text (separate corroboration only):** the placed Static renders as a selected box; at this stage the canvas/grid accessibility showed a bare `":"` text node near the panel — recorded literally, **not** analyzed against the Caption property and **not** used for any No Colon inference. Caption property baseline remains *(empty)*.

### T5.5 — Dirty-state checkpoint (expected from creation/configuration)

- After placement + Name edit, toolbar **dirty**: Save and Regenerate Form enabled (Undo enabled, Redo disabled) — expected dirty state from component creation/configuration. **No Save performed** (per instruction).

### T5.6 — Evidence (under `evidence/EXP-021-R4/`)

- `16-toolbox-static-selected.png` — Toolbox with Static row selected before placement. Supports the type-selection step.
- `17-static-placed-baseline.png` — inspected: form tabs (`FX_StaticNoColonLab01` unselected, `FX_StaticCaptionLab04` selected); selected Static component box on canvas; Properties grid header `static1_USER (Static)` with Name `static1_USER`, Caption empty, Type `Static`, From Device Master `True`, Foreground Color `#000000`, Justification `Right`, Read-Only/Disable/Hidden/No Tab Stop/Auto Complete `False`; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar dirty (Save enabled). Proves: placement + selection + User scope + dirty state. Limitation: pre-rename state (Name still `static1_USER`).
- `18-static-component-grid-baseline.png` — inspected: grid header `static1_USER (Static)`; Name `static1_USER`; Caption empty; Type `Static`; From Device Master `True`; Theme Class/Background Color empty; Foreground Color `#000000`; Justification `Right`; Behavior flags `False`. Supports the pre-rename grid baseline (all values except Name).
- `19-name-cell-underedit-blocker.png` — inspected: grid header `static1_USER (Static)`; Name value cell `static1_USER` highlighted (under-edit, no typed text rendered); Caption empty; Type `Static`; From Device Master `True`; Justification `Right`; toolbar dirty (Save enabled); scope bar visible. Proves: rename did NOT commit (Name still `static1_USER`) and the cell remained under-edit after the Enter error. Limitation: the console TypeError itself is not visible in the image (recorded separately from the console log).

### T5.7 — Observations / corrections

- Placement registered on first attempt (no retry); Component tab auto-selected; grid populated immediately.
- Rename commit via Enter **failed with a Designer-internal TypeError** (`ctor.onKeyEnter` null `data`); the typed text never rendered in the cell and the Name value stayed `static1_USER`. Recovery rule honored: one fresh inspection + one corrected inspection, then blocker — no retry, no reload, no navigation.
- Numeric Ext IDs drifted this session (component grid `e749`-family, formcontainer `#formcontainer-2377`) — resolved at runtime.
- No Save, no close/reopen, no Regenerate, no authentication, no preference change; `FX_StaticNoColonLab01` and unrelated state untouched.

### T5.8 — Knowledge-state updates

- Static placement on `FX_StaticCaptionLab04` via the verified toolbox procedure: **observed** (T5; single execution — procedure itself remains verified from EXP-003/EXP-003-R2).
- One Static exists in the open `FX_StaticCaptionLab04` with pre-Caption Caption **empty** and generated Name `static1_USER`: **observed** (T5).
- **Rename to `FX_StaticCaptionStatic04` NOT achieved** (Enter commit threw a Designer TypeError): **unresolved** (T5 blocker).
- EXP-021-R4 Static-Caption close/reopen recovery remains **unverified** (Name + Caption + Save + close + reopen pending).

### T5.9 — Stopped here (per instruction)

Did **not** change Caption; did **not** Save; did **not** close/reopen; did **not** alter any other property after the baseline. Target left **open and dirty** (Save enabled) with the single Static selected, Name still `static1_USER` (rename pending). **Next task:** AC-4 — set Caption to exactly `Static Caption Close Only Replay 4`, then exactly one ordinary Designer Save.

## T5.10 — BLOCKER (AC-3 not fully satisfied)

- **Blocker:** the verified Name-edit commit (double-click → type → Enter) threw `TypeError: Cannot read properties of null (reading 'data')` in `ctor.onKeyEnter` (Designer app.js); the Name value cell still displays `static1_USER` and the cell remains in the under-edit state. The required component name `FX_StaticCaptionStatic04` is therefore **not established**.
- Per the recovery rule, only one fresh inspection and one corrected inspection were performed after the failure; no retry, reload, navigation, Save, or close/reopen was attempted.
- Partial results preserved: exactly one Static placed (generated name `static1_USER`), full pre-Caption baseline captured at that name, dirty state recorded, `FX_StaticNoColonLab01` and unrelated state untouched.
- **AC-3 acceptance checks:** Static creation operation (exactly one) — satisfied; component visibly verified — satisfied (as `static1_USER`); exact pre-Caption baseline — satisfied (at generated name); **component named exactly `FX_StaticCaptionStatic04` — NOT satisfied (blocker)**.
- Coordinator decision needed: whether to authorize a corrected rename attempt (e.g., re-open the cell editor differently) in a follow-up task, or to stop this replay.

## T6 — ALT+E rename route for AC-3 (2026-10-06) — BLOCKED

### T6.0 — Fresh worker context (harness fact)

- Harness run `R-20261006-141521-OdOc`, cycle 6, task T6: fresh worker context distinct from EXP-021; same Designer/browser client preserved (session id `…0a319988-7980-4412-943d-4397dcb07eca`).

### T6.1 — Preflight (read-only)

- One fresh snapshot: `FX_StaticCaptionLab04` selected, Component tab selected, grid header `static1_USER (Static)`, Name value cell still highlighted (leftover under-edit state from the failed T5 Enter), toolbar **dirty** (Save/Regenerate enabled), scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, `FX_StaticNoColonLab01` tab present untouched, canvas Static selected. No dialogs.

### T6.2 — ALT+E route (bounded)

1. **Made the rendered Name property row current:** single native click on the rendered Name-row textbox (accessibility: `textbox "Name"`, ref e920) — no value typed.
2. **ALT+E invoked exactly once** (`keyboard.press('Alt+E')`).
3. **Required immediate postcondition inspected once (accessibility):** no new rendered property-value editor appeared; only the pre-existing Name-row textbox became `[active]`; no OK/confirm control rendered anywhere.
4. **One corrected inspection (screenshot `20`):** viewport shows the Properties grid unchanged — Name cell `static1_USER` highlighted, Caption empty, Type `Static`, From Device Master `True`, Justification `Right`, Behavior flags `False`; **no rendered editor, no popup, no OK/confirm control** visible; toolbar dirty; scope bar visible.

### T6.3 — Result: AC-3 rename route BLOCKED

- ALT+E produced **no visibly rendered property-value text editor** for Name. Per instruction, no other editing mechanism was attempted; no further retries.
- State preserved: Static `static1_USER` still selected, Caption still empty, all T5 baseline properties unchanged (verified unchanged in screenshot `20`), toolbar still dirty, `FX_StaticNoColonLab01` and unrelated state untouched, no Save/close/reopen/Regenerate performed.

### T6.4 — Evidence

- `20-after-alt-e-no-editor.png` — inspected: full Designer viewport after ALT+E; Properties grid with Name `static1_USER` (highlighted, no editor), Caption empty, Type `Static`, From Device Master `True`, Justification `Right`, Behavior flags `False`; no rendered editor/popup/OK control anywhere in the viewport; toolbar dirty; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; both form tabs visible. Proves: the ALT+E postcondition (rendered Name editor) did NOT appear; supports the blocker claim. Limitation: proves absence within the visible viewport only; an off-screen editor cannot be ruled out by this crop, but none is rendered in the accessibility tree either.

### T6.5 — Knowledge-state updates

- ALT+E as a route to a rendered Name property-value editor: **not observed** in this environment (blocked; no claim about what ALT+E does — only that no editor rendered).
- Rename to `FX_StaticCaptionStatic04`: **unresolved** (both the verified inline Enter mechanism and the ALT+E route failed to produce a committed rename / rendered editor).
- EXP-021-R4 close/reopen recovery remains **unverified**.

### T6.6 — Stopped here (per instruction)

No Caption change, no Save, no close/reopen, no Regenerate, no authentication, no preference change, no other property mutated. **AC-3 remains NOT satisfied** (component name still `static1_USER`). Coordinator decision needed: authorize a different bounded rename mechanism, or stop this replay.
