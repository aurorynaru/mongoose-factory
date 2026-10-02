# EXP-005-R2 — Clean Replay: Literal Form Caption Persistence (FX_FormPropertyLab02)

Status: **T5 COMPLETE — AC-6 re-verified in fresh worker context: `Unload IDO Metadata With Forms` User Preference is ENABLED (checked) → AC-6 FAILED / REPLAY BLOCKED at the unload step; STOPPED BEFORE ANY UNLOAD, form not reopened**
Date: 2026-10-01
Mode: LEARNING MODE — controlled replay in a fresh worker context. Controlled mutations so far: creation of `FX_FormPropertyLab02` (T2) and its Caption change + Save (T3). No other artifact was created, modified, or deleted.
Purpose: Clean replay of the EXP-005 caption-persistence procedure on a **new** form `FX_FormPropertyLab02`, with the documented form-object unload (`Form > Definition > Unload Global Form Objects` / `Unload All Global Form Objects`) as the required form-definition cache boundary instead of a fresh application session.

## Objective

Create a new User-scope classic BuildFromScratch form `FX_FormPropertyLab02` using the verified basic-form recipe (`recipes/forms/create-basic-form.md`), change **only** its Form-level **Caption** to the literal value `Form Property Lab Replay`, save through the ordinary Designer Save operation, close the form, verify that the User Preference `Unload IDO Metadata with Forms` is **not** enabled, then invoke the documented Form > Definition > Unload Global Form Objects (or Unload All Global Form Objects) command as the required form-definition cache boundary. Reopen exactly the form version identified by Form name + ScopeType=User + the same ScopeName/user ID and verify that Caption persisted while all recorded comparison properties remained unchanged.

In scope: create `FX_FormPropertyLab02` (User scope) via the recipe; confirm non-existence before mutation; record Form name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, Is Master before the Caption edit; change only Caption to `Form Property Lab Replay`; ordinary Designer Save; close; inspect (not change) the `Unload IDO Metadata with Forms` User Preference and proceed only if it is not enabled; invoke the documented unload command; reopen the exact form version (ScopeType=User, same ScopeName); verify persisted Caption and unchanged comparison properties; capture evidence under `evidence/EXP-005-R2/`.

Out of scope: EXP-004 continuation / Form-variable persistence; Global Object creation or modification; component bindings or data sources; adding components; event handlers, validators, scripts, methods, expressions; Translatable String-object creation or localization; changing any Form property other than Caption; changing editing scope away from User; editing `FX_FormPropertyLab01` or any non-`FX_` artifact; direct database edits or manual metadata manipulation; undocumented internal events/APIs; changing the `Unload IDO Metadata with Forms` preference; clearing IDO metadata; using a fresh session as a substitute for the documented unload; promoting a reusable Caption recipe unless every replay acceptance check passes.

## Starting state / preflight facts (2026-10-01, T1)

- Browser already logged in (no re-login needed). Two tabs open at preflight start — the exact end state of EXP-005:
  - Tab 0: Mongoose Web Client (portal), `FX_FormPropertyLab01` open (`favoriteContext=FX_FormPropertyLab01`), tab title "Form Property Lab".
  - Tab 1: Web Designer, `WSWebClient/designer/default.aspx?MGForm=FX_FormPropertyLab01` — `FX_FormPropertyLab01` loaded, **clean state** (Save disabled, Regenerate Form disabled, Undo/Redo disabled).
- Environment (from Designer page title + prior EXP-005 fingerprint): Mongoose Web Client / Designer **2026.09.08**, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- **Active editing identity (recorded, not changed): ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph`** — observed in the Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `04`).
- Designer Properties of the loaded `FX_FormPropertyLab01` (context only, not touched): Name `FX_FormPropertyLab01`, Caption `Form Property Lab`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Target form `FX_FormPropertyLab02` does NOT exist** — Select Form full-store scan, 637 records, zero exact or case-insensitive matches (method below).
- Existing `FX_` forms (6, contiguous store indices 279–284): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab01` (282), `FX_ComponentLab02` (283), `FX_ComponentLab01` (284).
- Form-count reconciliation: 636 (EXP-005 preflight) → 637 now (+1 = `FX_FormPropertyLab01` created in EXP-005 T2). Consistent; no unexplained artifacts.
- No Mongoose artifact was created, modified, or deleted during this preflight. No preference was changed. No unload was invoked. Editing scope unchanged.

## Preflight method

1. Inspected repository state: `experiments/`, `recipes/forms/create-basic-form.md`, `experiments/EXP-005-form-caption-persistence.md` (procedure and format reference), prior replay record format (`EXP-002-R2`).
2. Inspected current browser state (2 tabs, logged in, end-of-EXP-005 state) — no login performed.
3. Screenshot of the Designer end state (evidence `01`).
4. In the Web Client (tab 0), clicked **Open** (`mgtoolbarbutton-1101`) → Select Form dialog (window `ext-comp-1135`, grid `grid-1136`, grid view `gridview-1140`).
5. Observed the dialog opened with a **remembered filter** from EXP-005 T5 (Filter = `FX_FormPropertyLab01`, Filter By = `Name`/`mgdata`) → store showed only 1 record. Screenshot `02`.
6. Cleared the filter through the UI (focus filter field `textfield-1143`, select-all, Delete) → store reloaded to the full list, **637 records**.
7. Scanned the **entire store** (all 637 records, field `mgdata`): no exact `FX_FormPropertyLab02`, no case-insensitive match; enumerated all `FX_`-prefixed records (6, indices 279–284).
8. Scrolled the grid to the `FX_` rows (`.x-grid-view` scrollTop = 6596; row pitch ≈ 24 px) and captured the visible `FX_` rows (evidence `03`).
9. Closed the dialog with **Cancel** (native Playwright click — see observations) and returned to the Designer tab.
10. Re-verified Designer state and recorded the scope status bar (evidence `04`).

## Observations

- **Existence proof**: full-store scan of all 637 Select Form records found no `FX_FormPropertyLab02` (exact or case-insensitive). Visual confirmation: the `FX_` block (indices 279–284) contains exactly the 6 known `FX_` forms and no `FX_FormPropertyLab02` (evidence `03`).
- **Select Form dialog remembers its filter** across dialog close/reopen within the same Web Client session: it reopened with the EXP-005 T5 filter (`FX_FormPropertyLab01` / Name) still applied, showing 1 record. The filter is cleared by editing the Filter field (store reloads on change; no separate Filter button exists — dialog buttons are OK / Cancel / Help only).
- **Grid rendering differs from the recipe's description in this session**: all 637 rows were present in the DOM (`table.x-grid-item` rows; scroller is the `.x-grid-view` element itself, scrollHeight 15288 / clientHeight 271 ≈ 24 px per row) — i.e. not virtualized here, whereas the recipe describes a virtualized grid (~43 rendered rows). The store scan is authoritative either way; the recipe's virtualized-scroll guidance may be session/state-dependent.
- `gridview.scrollTo(277, 'st')` did **not** position row 277 at the top (view ended at the top of the list); manual `scrollTop` on the `.x-grid-view` element worked and was used for the screenshot.
- **Synthetic DOM click on the dialog's Cancel button did not close the dialog** (known Ext pitfall); a native Playwright click on the same `a.x-btn` element closed it. Consistent with the documented pitfall that synthetic DOM events do not drive Ext window buttons.
- Select Form dialog control IDs this session: window `ext-comp-1135`, grid `grid-1136`, grid view `gridview-1140`, filter text `textfield-1143`, Filter By combo `combo-1145` (value `mgdata` = Name), checkboxes `mgDlgCbx-1146` / `mgDlgCbx-1147` (Case Sensitive / Starts With, both unchecked).
- Designer remained in clean state throughout (Save/Regenerate/Undo/Redo disabled); `FX_FormPropertyLab01` was not modified.

## Evidence (under `evidence/EXP-005-R2/`)

- `01-preflight-designer-end-of-EXP-005-state.png` — Designer at preflight start: `FX_FormPropertyLab01` loaded (tab/canvas "Form Property Lab"), Properties (Name `FX_FormPropertyL…`, Caption `Form Property Lab`, Version `User version for us…`, Device Type Default, Form Type Normal, Is Master True), Save disabled (clean), status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `02-preflight-select-form-filtered-state.png` — Select Form dialog reopened with the remembered EXP-005 T5 filter (Filter `FX_FormPropertyLab01`, Filter By Name) → 1 record only.
- `03-preflight-select-form-fx-rows.png` — Select Form dialog, filter cleared (full list, 637 records), scrolled to the `FX_` block: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab01`, `FX_ComponentLab02`, `FX_ComponentLab01` — **no `FX_FormPropertyLab02`**.
- `04-preflight-designer-scope-status.png` — Designer scope status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` and clean toolbar state.

## T2 — Form creation (2026-10-01)

### Pre-mutation re-check (passed)

- Browser state inspected first (fresh conversation does not reset Mongoose state): same two tabs as T1 (Web Client with `FX_FormPropertyLab01` open; Designer with `FX_FormPropertyLab01` loaded, clean state, scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`). No login needed.
- No `portal-notification` banner present.
- Select Form dialog (window `ext-comp-1135`, grid `grid-1136`): filter empty, full store **637 records**; scan found **no `FX_FormPropertyLab02`** (exact or case-insensitive); same 6 `FX_` forms at indices 279–284 as T1. Dialog closed via Cancel (native click).

### Method (followed `recipes/forms/create-basic-form.md` as written)

1. Designer tab: clicked **New** (`mgtoolbarbutton-1088`, "New Form Definition") → **"Form Wizard Selection"** dialog (window `formwizard-1408` — same ID as EXP-002-R2).
2. **Wizard selection**: radio **New Form** (`mgradio-1417`, already checked by default; `mgradio-1418` = "Extend Form" unchecked). Category and Wizard are `mginfoconexpandable` combos whose dropdowns render **SVG tiles** (`div.mg-tile.x-combo-list-item`, `data-recordindex`):
   - Category (`mginfoconexpandable-1426`, boundlist `boundlist-1445`): 7 categories — Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST. Clicked the **Classic** tile (recordindex 0).
   - Wizard (`mginfoconexpandable-1431`, boundlist `boundlist-1449`): 7 Classic wizards — BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile. Clicked the **BuildFromScratch** tile (recordindex 0).
   - Note: clicking the combo container/triggerWrap did not open the dropdown; the component's `expand()` API opened it, then a native tile click selected. (Tile click is the UI selection; `expand()` only opened the picker.)
   - OK (`mgformbutton-1434`) → **"Form Wizard - Build From Scratch"** dialog (window `expeditor-1468` — same ID as EXP-002-R2).
3. **Wizard page 1** (defaults verified, only Name changed):
   - Name (`mgcombo-1475`): typed `FX_FormPropertyLab02`
   - Form Type (`mgcombo-1489`): `BuildFromScratch` (default, untouched)
   - Form Layout (`mgcombo-1494`): `GridLeft` (default, untouched)
   - Device Type (`mgcombo-1499`): `Default` (default, untouched)
   - Data Source (`mgcombo-1504`): empty (untouched); Query Form (`mgedit-1509`): empty; Comments (`mgedit-1514`): empty
   - Next (`mgformbutton-1711`) — Finish was disabled on page 1, as the recipe documents.
4. **Wizard page 2**: **"Save Template" checkbox checked by default** (`ext-comp-1707`, same ID as EXP-002-R2) → **unchecked by clicking the label text** (the documented pitfall: the input is covered by a `displayEl` span). Verified `checked=false`.
5. **Finish** (`mgformbutton-1712`) → **"Process Completed Successfully"** dialog (window `ext-comp-1009`, OK button) → OK.
6. **Finish persisted immediately**: Designer URL became `...?MGForm=FX_FormPropertyLab02`; a new form tab `FX_FormPropertyLab02` appeared (selected) alongside the existing `Form Property Lab` tab; **Save disabled, Regenerate Form disabled** (clean state). No separate Save was performed.

### Observations — fresh Form-level Properties of `FX_FormPropertyLab02` (untouched, pre-Caption-edit baseline)

Read from `formpropertygrid-1135` store (formId **166**) + UI:

| Property | Value | Read-only |
|---|---|---|
| Design.Name | `FX_FormPropertyLab02` | yes |
| Design.Description | `""` (empty) | no |
| **Design.Caption** | **`""` (empty)** — store `object.string`, expeditor `WSExpEdCaption` | no |
| Design.Version | `User version for user anton.ramos@3mworks.com.ph` | yes |
| Design.Device Type | `Default` | yes |
| Design.Form Type | `Normal` | yes |
| Design.Is Master | `True` | yes |

Plus Appearance / Behavior / Help / Layout property groups (collapsed, not inspected further). The observed empty Caption is recorded as **this form's observed initial value**, not asserted as a universal default.

### Identity / scope recorded

- **ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `08`); same identity as T1; scope not changed.
- Form identity: Name `FX_FormPropertyLab02`, formId 166, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.

### Persistence cross-check in Web Client (read-only)

- Select Form store: **637 → 638** (exactly +1 — **no template artifact** created, consistent with Save Template being unchecked).
- `FX_FormPropertyLab02` present at store index 282 (type 0; Caption column shows the name fallback because Caption is empty; recId `extModel214-1291`).
- `FX_` block now: `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab02` (282), `FX_ComponentLab02` (283), `FX_ComponentLab01` (284). Note: `FX_FormPropertyLab01` moved from index 282 to 312 in the list order after the insertion (list reordering only; no artifact impact).
- Dialog closed via Cancel (native click); no form was opened from the dialog.

### T2 compliance

- Creation followed the verified recipe without rediscovery of the semantic procedure and **without any recovery action affecting the mutation** (single Finish click succeeded on the first attempt; the only workaround was opening the picker via `expand()` because a plain container click did not open it — a picker-opening mechanic, not a procedure change).
- Scope stayed User throughout (status bar in all screenshots).
- No Form property was changed; Caption is still empty. No Save invoked. No components/variables/bindings/data sources/events/scripts/methods added. No template artifact. No non-`FX_` artifact touched. No preference changed. No unload invoked.

### T2 evidence (under `evidence/EXP-005-R2/`)

- `05-form-wizard-selection.png` — Form Wizard Selection dialog: New Form selected, Category/Wizard empty before selection.
- `06-build-from-scratch-wizard.png` — wizard page 1: Name `FX_FormPropertyLab02`, Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source empty; Finish disabled.
- `07-save-template-page.png` — wizard page 2: Save Template checked by default (before unchecking).
- `08-form-created-in-designer.png` — Designer after creation: new tab `FX_FormPropertyL…` selected; Properties: Name `FX_FormPropertyL…`, Caption empty, Version `User version for us…`, Device Type Default, Form Type Normal, Is Master True; Save disabled (clean); status bar `ScopeType: User`.
- `09-select-form-rediscovery.png` — Web Client Select Form (full list, 638 records) scrolled to the `FX_` block: `FX_FormPropertyLab02` present; no template artifact.

## T3 — Caption change + ordinary Designer Save (2026-10-01)

### Pre-edit state (verified in the loaded session)

- Designer tab active: `?MGForm=FX_FormPropertyLab02`; form tab `FX_FormPropertyLab02` selected; clean state (Save, Regenerate Form, Undo, Redo all disabled).
- Store read of `formpropertygrid-1135` Design group matched the T2 baseline exactly: Name `FX_FormPropertyLab02` (ro), Description `""`, **Caption `""`**, Version `User version for user anton.ramos@3mworks.com.ph` (ro), Device Type `Default` (ro), Form Type `Normal` (ro), Is Master `True` (ro).
- Scope status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### Method

1. Property grid rows are `table.x-grid-item` in treeview `treeview-1148`; the Caption row is `#treeview-1148-record-440` (cells: label / value / spacer).
2. **Double-clicked the Caption value cell** (2nd `td`) → cell editor opened: an editable combo `mg-gc-combo2140` (same editor family as EXP-005 T3's `pgvaluecombobox`; the property description box at the bottom showed `Caption`).
3. **Typed `Form Property Lab Replay`** into the editor input (`#mg-gc-combo2140-inputEl`); verified the editor held exactly that value.
4. **Committed by blur, not Enter** (EXP-005 T3 correction: Enter while the combo dropdown is active commits the highlighted list item instead of the typed text) — clicked the Caption **label** cell (1st `td`). Editor closed; no Enter pressed.
5. Verified the committed value in the property grid store and the dirty toolbar state (Save enabled).
6. **Clicked the ordinary Save toolbar button (`mgtoolbarbutton-1085`) exactly once.** No alternate save mechanism used.

### Before/after — Design.Caption

| | Value |
|---|---|
| Before (T2 baseline) | `""` (empty) |
| After (T3, committed) | `Form Property Lab Replay` |

### Unchanged-property comparison (T2 baseline → T3, all Design.* properties)

| Property | T2 (before) | T3 (after, post-save) | Changed? |
|---|---|---|---|
| Name | `FX_FormPropertyLab02` (ro) | `FX_FormPropertyLab02` (ro) | no |
| Description | `""` | `""` | no |
| **Caption** | `""` | **`Form Property Lab Replay`** | **yes (only change)** |
| Version | `User version for user anton.ramos@3mworks.com.ph` (ro) | unchanged (ro) | no |
| Device Type | `Default` (ro) | `Default` (ro) | no |
| Form Type | `Normal` (ro) | `Normal` (ro) | no |
| Is Master | `True` (ro) | `True` (ro) | no |

### Unsaved-changes state (observed, immediately pre-Save)

- Toolbar: **Save enabled**, Undo enabled (both were disabled in the clean T2 state); form tab/canvas title switched from `FX_FormPropertyLab02` to `Form Property Lab …` immediately after commit (tab shows Caption when set — same live reflection as EXP-005 T3).
- Scope unchanged: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### Post-save observations (clean saved state proven)

- **Save completed silently** — no confirmation dialog, no error dialog, no visible window (same as EXP-005 T4).
- **Designer returned to clean saved state**: Save **disabled**, Regenerate Form **disabled**, Undo **disabled**, Redo **disabled** — identical to the clean T2 state. No pending Caption edit.
- Re-read of the same Form-level properties after Save: Caption `Form Property Lab Replay`; Name, Description, Version, Device Type, Form Type, Is Master all unchanged (table above).
- Scope unchanged: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Form remains loaded in the same Designer session (not closed, not reopened); no further property or artifact changes made.

### T3 compliance

- Only the Caption property was changed; no other Form property altered; no components/variables/bindings/data sources/events/scripts/methods added.
- Ordinary Designer Save invoked exactly once; no alternate save mechanism.
- Scope stayed User throughout. No preference inspected or changed. No unload invoked. No non-`FX_` artifact touched.

### T3 evidence (under `evidence/EXP-005-R2/`)

- `10-caption-changed-unsaved.png` — pre-Save: Properties panel Caption row selected showing `Form Property Lab …` (store value exactly `Form Property Lab Replay`), Name `FX_FormPropertyL…`, Version/Device Type/Form Type/Is Master unchanged; tab title switched to Caption; Save enabled (dirty); status bar `ScopeType: User`.
- `11-after-save-clean.png` — post-Save: same property values (Caption `Form Property Lab …`); Save/Undo/Redo/Regenerate disabled (clean state); status bar `ScopeType: User`.

## T4 — Close form + read-only preference inspection (2026-10-01)

### Pre-close state verification (clean/saved confirmed before closing)

- Designer tab active: `?MGForm=FX_FormPropertyLab02`; form tab `FX_FormPropertyLab02` (title "Form Property Lab Replay") selected.
- Store read of `formpropertygrid-1135` Design group: Name `FX_FormPropertyLab02`, Description `""`, **Caption `Form Property Lab Replay`**, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True` — identical to the T3 post-save state.
- Toolbar: Save **disabled**, Regenerate Form **disabled** (Undo/Redo disabled per snapshot) → clean saved state; no unsaved edits.
- Scope status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### Method

1. **Closed the form** by clicking the **close button on the `FX_FormPropertyLab02` form tab** (native Playwright click on the tab's "closable FX_FormPropertyLab02" button). No further Form edits were made.
2. **No prompt appeared** (expected for a clean state — no "save changes?" dialog). The `FX_FormPropertyLab02` tab disappeared; the Designer fell back to the previously loaded `FX_FormPropertyLab01` (URL `?MGForm=FX_FormPropertyLab01`, single tab "Form Property Lab"). Evidence `13`.
3. Switched to the Web Client tab. Explored the Web Client menu bar for the supported User Preferences path: **Edit** menu (Designer, Paste Rows…, Find/Replace Value In Collection, Sort Collection, binary-data items — no preferences entry), **Form** menu (Open, Close and Save/Cancel Changes, Export to File, Definition, Sign Out, open-forms list — no preferences entry), **View** menu → **"User Preferences..."** found.
4. Clicked **View > User Preferences...** → **"User Preferences" dialog** opened (window with OK / Help buttons and a Close Window button).
5. **Read the preference without changing it**: the checkbox **"Unload IDO Metadata With Forms" is CHECKED (enabled)**.
6. Closed the dialog via its **Close Window** button (not OK) — no preference value was changed or saved. Web Client returned to `favoriteContext=FX_FormPropertyLab01`.

### Preference finding (blocking)

| Preference | State observed |
|---|---|
| **Unload IDO Metadata With Forms** | **CHECKED (enabled)** |

Other preferences visible in the same dialog (context only, none touched): Show Configuration Name On Caption (checked), Prompt to Save Form Splitter Changes (unchecked), Prompt to Save Grid Changes (checked), Prompt to Save Flex Layout Changes (checked), Prompt to Save DataView Layout Changes (unchecked), Include Grid Column Headers Copying to Clipboard (checked), Show All Forms in Forms List (unchecked), Disable Form Aliases For Session (unchecked), Display Captions in Most Recently Used forms list (checked), Load/Replace form with extended form (checked), User Data Record Cap `-1`, User List Record Cap `-1`, Language `<User Default Language Setting>`, Wildcard Character `*`, SQL Characters to Pass Through In Filtering `[]`, ENTER key behaves like TAB key (unchecked).

### Consequence — replay BLOCKED at the unload step

Per the experiment rules: *"If `Unload IDO Metadata with Forms` is enabled, stop and mark the replay blocked before invoking Unload Global Form Objects or Unload All Global Form Objects."*

- **No unload command was invoked** (neither `Unload Global Form Objects` nor `Unload All Global Form Objects`).
- **The IDO metadata cache was not cleared.**
- **`FX_FormPropertyLab02` was NOT reopened** after close.
- The preference was **not changed** (dialog closed via Close Window, read-only inspection only).
- The final persistence verification (Caption persistence across the documented form-object unload boundary) **cannot be completed in this replay while the preference is enabled** — with the preference enabled, form unload behavior differs from the documented procedure's precondition, so the acceptance check would not be a valid test of the documented boundary.

### T4 compliance

- Form closed after clean-state confirmation; no further Form edits.
- Preference inspected read-only via the supported UI (Web Client **View > User Preferences...**); value recorded; **not changed**.
- Stopped immediately upon finding the preference enabled — no unload invoked, form not reopened, no other artifact touched.
- No non-`FX_` artifact created/modified/deleted. No IDO metadata cleared. No new session used as a substitute.

### T4 evidence (under `evidence/EXP-005-R2/`)

- `12-user-pref-unload-ido-metadata-checked.png` — User Preferences dialog (Web Client View > User Preferences...): the **"Unload IDO Metadata With Forms" checkbox is CHECKED (enabled)**; OK/Help buttons and Close Window visible; no control focused for editing.
- `13-designer-after-form-close.png` — Designer after closing the `FX_FormPropertyLab02` tab: single remaining form tab "Form Property Lab" (`FX_FormPropertyLab01`), no prompt shown on close (clean state).

## T5 — AC-6 preference re-verification in fresh worker context (2026-10-01)

### Pre-check (fresh conversation does not reset Mongoose state)

- Browser state inspected first: Tab 0 = Web Client (`favoriteContext=FX_FormPropertyLab01`); Tab 1 = Designer `?MGForm=FX_FormPropertyLab01` with a single form tab "Form Property Lab" (`FX_FormPropertyLab01`, clean state — Save/Regenerate/Undo/Redo disabled). `FX_FormPropertyLab02` is **not** loaded (consistent with the T4 close). No prompt, no pending state.

### Method (read-only, supported UI)

1. Web Client: **View > User Preferences...** → "User Preferences" dialog opened.
2. Located the control: label **"Unload IDO Metadata With Forms"** = `#ext-comp-1460-boxLabelEl`; its checkbox component is `#ext-comp-1460` (class `x-form-item ... mg-ckbox`); the checkbox input element is `#ext-comp-1460-inputEl` with `role=checkbox`.
3. **State read two independent ways (no change made):**
   - Accessibility tree: `checkbox "Unload IDO Metadata With Forms" [checked]`.
   - DOM attribute: `#ext-comp-1460-inputEl` → **`aria-checked="true"`**.
4. Closed the dialog via **Close Window** (not OK) — preference **not changed**, no value saved. Web Client returned to `favoriteContext=FX_FormPropertyLab01`.

### AC-6 determination

| AC-6 check | Result |
|---|---|
| `Unload IDO Metadata with Forms` enabled? | **YES — ENABLED (checked)** |
| AC-6 outcome | **FAILED / BLOCKING** |

The preference is enabled for the current user (`anton.ramos@3mworks.com.ph`), re-confirmed in this fresh worker context (T4 and T5 agree). Per the experiment rules, the replay is **blocked at the unload step**: no `Unload Global Form Objects` / `Unload All Global Form Objects` command was invoked, no IDO metadata was cleared, and `FX_FormPropertyLab02` was not reopened or edited.

### T5 evidence (under `evidence/EXP-005-R2/`)

- `14-user-pref-unload-ido-metadata-verified-checked.png` — User Preferences dialog (re-opened in T5): the **"Unload IDO Metadata With Forms" checkbox is CHECKED (enabled)**; dialog closed via Close Window without any change.

## Stopped here (per coordinator instruction)

T5 complete: AC-6 re-verified read-only in a fresh worker context — `Unload IDO Metadata With Forms` is **enabled** → **AC-6 FAILED / BLOCKING**. Stopped **before invoking any unload command and before reopening the form**. **Not yet done** (cannot proceed while the preference is enabled, per experiment rules): invoking the documented Form > Definition unload command; reopening the exact form version; final persistence verification. Any continuation requires a coordinator decision on the blocking preference (this experiment must not change it).

## Knowledge state (as of T4)

- Caption of `FX_FormPropertyLab02` changed to `Form Property Lab Replay` and saved via the ordinary Designer Save (silent; Save/Undo/Redo/Regenerate all disabled afterwards = clean saved state); all other Design properties unchanged: **observed** (persistence across the unload boundary still to be verified in later tasks).
- Caption cell editor is an editable combo (`mg-gc-combo2140` this session; `pgvaluecombobox` family in EXP-005); typed free text commits correctly **only when committed by blur** (clicking the label cell) — Enter risks committing a highlighted resource-key list item: **observed** (re-confirms EXP-005 T3 correction; no failure occurred this replay because the blur-commit path was used from the start).
- Property grid rows are addressable as `#treeview-1148-record-<n>` tables (Caption row = record 440 for this form); double-click on the value `td` opens the cell editor: **observed** (new, session-specific IDs).
- `FX_FormPropertyLab02` created in User scope via the verified recipe; Select Form count 637 → 638 (exactly +1, no template artifact); identity formId 166, Version "User version for user anton.ramos@3mworks.com.ph": **observed** (persistence across the unload boundary still to be verified in later tasks).
- Untouched baseline of `FX_FormPropertyLab02`: Name `FX_FormPropertyLab02`, Caption `""` (observed initial value for this form), Description `""`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`: **observed**.
- Active editing identity ScopeType=User / ScopeName=`anton.ramos@3mworks.com.ph`: **observed** (re-confirmed at T2).
- Form Wizard Selection Category/Wizard combos open via the component `expand()` API and select via native click on the SVG tile (`div.mg-tile[data-recordindex]`); a plain container/triggerWrap click does not open the picker: **observed** (new).
- Wizard window/checkbox IDs are stable across replays (`formwizard-1408`, `expeditor-1468`, `ext-comp-1707`, `ext-comp-1009`); page-1 control IDs matched EXP-002-R2 exactly (`mgcombo-1475/1489/1494/1499/1504`, `mgedit-1509/1514`, `mgformbutton-1710..1714`): **observed** (re-confirms).
- Finish persists immediately (Save disabled after OK on "Process Completed Successfully"); new form tab appears and is selected: **observed** (re-confirms recipe).
- Select Form dialog remembers its filter across reopen within a session; clearing the Filter field reloads the full store: **observed** (T1).
- Select Form grid fully rendered (non-virtualized) in this session; scroller is `.x-grid-view`; `gridview.scrollTo(index,'st')` unreliable here: **observed** (T1; contradicts the recipe's virtualized-grid description in this session).
- Synthetic DOM click fails on Select Form dialog buttons; native Playwright click works: **observed** (re-confirms documented pitfall).
- Supported UI path to User Preferences in the Web Client: **View > User Preferences...** opens a "User Preferences" dialog (OK / Help / Close Window). The Edit and Form menus contain no preferences entry: **observed** (new).
- The `Unload IDO Metadata With Forms` preference **exists in this environment and is ENABLED (checked)** for the current user (`anton.ramos@3mworks.com.ph`): **observed** (read-only inspection, T4; **re-confirmed in a fresh worker context at T5** via both the accessibility tree `[checked]` and the DOM `#ext-comp-1460-inputEl` `aria-checked="true"`). This **blocks** the EXP-005-R2 unload step per the experiment rules (AC-6 FAILED).
- User Preferences dialog checkbox controls are Ext `div[role=checkbox]` (e.g. `#ext-comp-1460-inputEl`) with `aria-checked` reflecting state — **not** native `input[type=checkbox]` (a `querySelectorAll('input[type=checkbox]')` scan returns 0 in this frame); the label element is `#<compId>-boxLabelEl`: **observed** (new, T5).
- Closing a Designer form tab in a **clean** state shows **no prompt** and the Designer falls back to the next loaded form (URL `?MGForm=<next form>`): **observed** (T4).
- Web Client menu contents (this session): Edit = Designer, Paste Rows Append/Overwrite, Find/Repeat Find/Replace Value In Collection, Sort Collection, Import/Export/Delete Binary Data; Form = Open, Close and Save Changes, Close and Cancel Changes, Export to File, Definition, Sign Out, then open-forms list; View = Explorer (checkbox), User Preferences..., Inbox, Report Output Files, Tasks, System Notes, Activate Next Collection, Home Cursor, pane toggles, Diagnostic Log/Trace: **observed** (new).

## Open questions / blockers

- **BLOCKING (T4, re-confirmed T5):** The `Unload IDO Metadata With Forms` User Preference is **enabled (checked)** for the current user. Per the experiment rules, the replay is **blocked at the unload step** — the documented unload command must not be invoked while the preference is enabled, and this experiment must not change the preference. A coordinator decision is required to continue (e.g., authorize a preference change outside this experiment's scope, or accept a modified/deferred replay). Until then, the final persistence verification (Caption persistence across the documented form-object unload boundary) **cannot be completed**.
- Pending (deferred, blocked by the above): invoking the documented unload command; reopening the exact form version; final persistence verification.
- Exact menu path and command name still to be confirmed at invocation time: `Form > Definition > Unload Global Form Objects` vs `Unload All Global Form Objects` (not yet invoked).