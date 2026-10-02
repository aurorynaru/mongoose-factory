# EXP-005 — Form Caption Persistence

Status: **COMPLETE — PERSISTENCE VERIFIED** — Caption `Form Property Lab` persisted through close/reopen in an independently reopened Designer (User scope). All acceptance checks passed.
Date: 2026-10-01
Mode: LEARNING MODE — controlled experiment on a factory-owned `FX_` artifact only.

## Objective

Create one new **User-scope** classic **BuildFromScratch** form `FX_FormPropertyLab01` using the verified form-creation recipe (`recipes/forms/create-basic-form.md`), change **only** its Form-level **Caption** property to the known value `Form Property Lab`, save through the ordinary supported Designer Save path, close the Designer, independently reopen the same User-scope form, and verify that the Caption value persists.

In scope:

- Create `FX_FormPropertyLab01` in User scope via `recipes/forms/create-basic-form.md`.
- Inspect the fresh Form-level Properties of `FX_FormPropertyLab01`.
- Change only the Form Caption property to `Form Property Lab`.
- Use the ordinary supported Designer Save operation.
- Close and independently reopen `FX_FormPropertyLab01`.
- Verify the persisted Caption in the reopened Designer.
- Capture evidence under `evidence/EXP-005/`.

Out of scope: form variables / EXP-004 continuation; component bindings or data sources; event handlers, validators, scripts, or methods; Global Objects; persistent variables or `Global=True` experiments; changing any Form property other than Caption; adding components (unless the verified creation procedure itself requires them); editing any non-`FX_` artifact; writing a reusable recipe before persistence succeeds.

## Starting state / preflight facts (2026-10-01, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08** (Designer About: Application database 2026.09.08, Form definitions database 2026.09.08), Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Signed-in user: `anton.ramos@3mworks.com.ph` (role **Site Developer** per Designer About).
- Web Client reachable: portal SSO login succeeded; Mongoose app opened as a portal tab; Web Client Sign In dialog confirmed with config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar in clean state (no form loaded).
- Web Designer reachable: opened in a separate browser tab (`WSWebClient/designer/Default.aspx`); "Identify Your Editing Scope" dialog appeared and was confirmed (session-level confirmation only).
- **Editing scope: ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph`** — observed both in the scope dialog (Scope: User, User: anton.ramos@3mworks.com.ph) and in the designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- **Target form `FX_FormPropertyLab01` does NOT exist**: Select Form dialog store scan (`grid-1136`, **636** records) found no exact or case-insensitive match. Existing `FX_` forms (5, contiguous store indices 279–283): `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_ComponentLab02`, `FX_ComponentLab01`.
- Form-count reconciliation: 633 after EXP-002-R2 → 636 now (+3 = `FX_ComponentLab01`/`FX_ComponentLab02` from EXP-003, `FX_VariableLab01` from EXP-004).
- Designer state at end of preflight: clean (no form loaded; Save and Regenerate Form disabled; no unsaved changes).
- No Mongoose artifact was created, modified, or deleted during this preflight.
- Preflight evidence (written under `evidence/EXP-005/`):
  - `01-preflight-webclient-loaded.png` — Web Client loaded and signed in, no form open.
  - `02-preflight-select-form-fx-rows.png` — Select Form dialog scrolled to the `FX_` rows (5 existing `FX_` forms; no `FX_FormPropertyLab01`).
  - `03-preflight-designer-scope-dialog.png` — "Identify Your Editing Scope": Scope=User, User=anton.ramos@3mworks.com.ph; status bar `ScopeType: User`.
  - `04-preflight-designer-about.png` — Designer About: 2026.09.08, config group, Site Developer.

## T2 — Form creation (2026-10-01)

### Method (followed `recipes/forms/create-basic-form.md`)

1. Re-verified pre-mutation state: Select Form store scan (`grid-1136`, 636 records) — `FX_FormPropertyLab01` still absent.
2. Designer (tab 1, scope status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`): clicked **New** (`mgtoolbarbutton-1088`, "New Form Definition").
3. Form Wizard Selection dialog: Type = New Form, **Category = Classic**, **Wizard = BuildFromScratch** (custom `mginfoconexpandable` combos; selected via dropdown tiles).
4. Build From Scratch wizard page 1: Name = `FX_FormPropertyLab01` (Form Type = BuildFromScratch, Layout = GridLeft, Device = Default, Data Source empty) → Next.
5. Page 2: **unchecked "Save Template"** (checked by default; its input is covered by a `displayEl` span, so the label text was clicked — direct input click times out) → Finish.
6. "Process Completed Successfully" dialog → OK. Designer URL became `...&MGForm=FX_FormPropertyLab01`; form tab `FX_FormPropertyLab01` loaded with Save disabled (clean state).
7. Read fresh Form-level Properties from `formpropertygrid-1135` via Ext.
8. Persistence cross-check in Web Client (tab 0): Select Form store now **637** records (636 → 637, exactly +1, no template artifact); `FX_FormPropertyLab01` present (type 0, caption falls back to name because Caption is empty).

### Observations — fresh Form-level Properties (pre-change state)

| Property | Value | Read-only |
|---|---|---|
| Design.Name | `FX_FormPropertyLab01` | yes |
| Design.Description | `""` (empty) | no |
| **Design.Caption** | **`""` (empty)** — expeditor `WSExpEdCaption`, store `object.string` | no |
| Design.Version | `User version for user anton.ramos@3mworks.com.ph` | yes |
| Design.Device Type | `Default` | yes |
| Design.Form Type | `Normal` | yes |
| Design.Is Master | `True` | yes |

Plus Appearance / Behavior / Help / Layout property groups (collapsed). Created form has `formId=153`. Form pane list shows one default pane ("Pane (00)"); no components, variables, or data sources were added.

### T2 compliance

- Scope stayed User throughout (status bar in all screenshots).
- No Form property was changed; Caption is still empty.
- No components/variables/bindings/data sources/events/scripts/methods added.
- No alternate save mechanism used; no non-`FX_` artifact touched.

### T2 evidence (under `evidence/EXP-005/`)

- `05-form-wizard-selection.png` — wizard selection: New Form / Category=Classic / Wizard=BuildFromScratch.
- `06-build-from-scratch-wizard.png` — wizard page 1 with Name `FX_FormPropertyLab01`.
- `07-save-template-page.png` — wizard page 2, Save Template unchecked.
- `08-process-completed.png` — "Process Completed Successfully" dialog.
- `09-form-created-in-designer.png` — form loaded in Designer; Properties panel shows empty Caption; status bar `ScopeType: User`.

## T3 — Caption change, unsaved (2026-10-01)

### Method

1. Verified pre-change state in the loaded Designer session: Caption = `""`, all other Design properties identical to T2 fresh state; Save disabled (clean).
2. Double-clicked the Caption value cell in the Properties grid → cell editor opened.
3. **Editor type observed:** the Caption value cell uses a `pgvaluecombobox` (editable combo, `forceSelection:false`, `allowBlank:true`) whose store holds **7531 predefined resource-key entries** (e.g. `ApplyFullTextIndexScriptQuestion`, `Collection Name`, …). Free text is allowed, but pressing Enter while the dropdown is active selects the highlighted list item instead of committing typed text.
4. **Failure + correction:** first attempt typed `Form Property Lab` then pressed Enter → combo committed the first list item `ApplyFullTextIndexScriptQuestion` (wrong value, unsaved). Corrected in the still-open editor: select-all, re-typed `Form Property Lab`, then blurred by clicking the Caption label cell (no Enter).
5. Committed value verified in the property grid store and cell DOM.

### Before/after — Design.Caption

| | Value |
|---|---|
| Before (T2 fresh state) | `""` (empty) |
| After (T3, unsaved) | `Form Property Lab` |

### Unchanged-property comparison (T2 fresh → T3, all Design.* properties)

| Property | T2 (before) | T3 (after) | Changed? |
|---|---|---|---|
| Name | `FX_FormPropertyLab01` (ro) | `FX_FormPropertyLab01` (ro) | no |
| Description | `""` | `""` | no |
| **Caption** | `""` | **`Form Property Lab`** | **yes (only change)** |
| Version | `User version for user anton.ramos@3mworks.com.ph` (ro) | unchanged (ro) | no |
| Device Type | `Default` (ro) | `Default` (ro) | no |
| Form Type | `Normal` (ro) | `Normal` (ro) | no |
| Is Master | `True` (ro) | `True` (ro) | no |

### Unsaved-changes state (observed, nothing saved)

- Toolbar: **Save enabled**, **Undo enabled**, Regenerate Form enabled, Redo disabled (all were disabled in the clean T2 state).
- No Save / Regenerate / alternate save mechanism was invoked; the change exists only in the Designer session.
- Live UI reflection: the form tab/canvas title switched from `FX_FormPropertyLab01` to `Form Property Lab` immediately after commit (tab shows Caption when set, falls back to Name when Caption is empty — observed).
- Property description box (bottom of Properties panel) shows `Caption` for the selected row.
- Scope unchanged: status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T3 evidence (under `evidence/EXP-005/`)

- `10-caption-changed-unsaved.png` — Designer with canvas/tab title "Form Property Lab"; Properties panel: Name `FX_FormPropertyL…`, Caption `Form Property Lab` (selected), Version/Device Type/Form Type/Is Master unchanged; status bar ScopeType User.

## T4 — Ordinary Designer Save (2026-10-01)

### Method

1. Verified pre-save state in the loaded session: Caption = `Form Property Lab` (unsaved from T3), Save and Undo enabled (dirty state), scope `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
2. Clicked the ordinary **Save** toolbar button in the Designer (the only save path used; Regenerate Form and all alternate mechanisms were NOT used).
3. Waited for completion; inspected for dialogs and toolbar state.

### Post-save observations

- **Save completed silently** — no confirmation dialog, no error dialog, no visible window appeared (unlike the creation wizard, which showed "Process Completed Successfully").
- Caption still displays exactly `Form Property Lab` (property grid store, cell DOM, and canvas/tab title all agree).
- All other Design properties unchanged: Name `FX_FormPropertyLab01` (ro), Description `""`, Version `User version for user anton.ramos@3mworks.com.ph` (ro), Device Type `Default` (ro), Form Type `Normal` (ro), Is Master `True` (ro).
- **Designer returned to clean saved state**: Save **disabled**, Undo **disabled**, Redo **disabled**, Regenerate Form **disabled** — identical to the clean T2 state.
- Scope unchanged: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Form remains loaded in the same Designer session (not closed, not reopened); no further property or artifact changes made.

### T4 evidence (under `evidence/EXP-005/`)

- `11-after-save-clean.png` — post-save Designer: canvas/tab title "Form Property Lab"; Properties panel Caption `Form Property Lab` (selected), all other Design values unchanged; Save/Undo disabled (clean state); status bar ScopeType User.

## T5 — Close / independent reopen / persistence verification (2026-10-01)

### Method

1. Confirmed clean saved state in the T4 Designer session (Caption `Form Property Lab`, Save disabled) — `12-before-close-clean.png`.
2. **Closed the Designer browser tab completely** (the in-memory Designer session was discarded).
3. In the surviving Web Client: **Open (Select Form)** → set Filter By = **Name**, filter `FX_FormPropertyLab01` → exactly 1 row → selected the row → **OK**.
   - Pitfall observed: pressing Enter in the filter box triggered the dialog's open action on the *previously selected* row (a stale vendor form `WSFormWizardNewDataXmlToIdo`), which failed to load with an error dialog ("not defined as Runtime Builder … was not found"). No artifact was created or modified; the error was dismissed and the dialog was reopened, the row explicitly selected, and the **OK button** used instead of Enter.
4. The form opened in the Web Client; its tab title displayed **"Form Property Lab"** (the Caption).
5. Clicked the Web Client **Designer** toolbar button → a **fresh Designer tab** opened (`designer/default.aspx`, no MGForm parameter) → "Identify Your Editing Scope" dialog (Scope: User, User: anton.ramos@3mworks.com.ph) confirmed → the Designer then **auto-loaded the Web Client's current form** (URL became `?MGForm=FX_FormPropertyLab01`).
6. Inspected the freshly loaded Form-level Properties (UI + `formpropertygrid-1135` store).

### Persistence result — PASS

| Property | Saved state (T4) | Reopened Designer (T5) | Match |
|---|---|---|---|
| Name | `FX_FormPropertyLab01` (ro) | `FX_FormPropertyLab01` (ro) | yes |
| Description | `""` | `""` | yes |
| **Caption** | **`Form Property Lab`** | **`Form Property Lab`** | **yes — persisted** |
| Version | `User version for user anton.ramos@3mworks.com.ph` (ro) | unchanged (ro) | yes |
| Device Type | `Default` (ro) | `Default` (ro) | yes |
| Form Type | `Normal` (ro) | `Normal` (ro) | yes |
| Is Master | `True` (ro) | `True` (ro) | yes |

- Reopened scope confirmed: scope dialog (Scope=User, User=anton.ramos@3mworks.com.ph) and status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Reopened Designer in clean state (Save/Undo/Redo/Regenerate disabled) — no unsaved changes were introduced; no property was edited during T5.

### Notable observations

- **Web Client form tab shows the Caption** ("Form Property Lab"), not the form name — the persisted Caption is reflected in the Web Client too.
- **Select Form dialog "Caption" column showed the form name** (`FX_FormPropertyLab01`) rather than the Caption in this long-lived Web Client session (record fields: only `mgdata`/`text`); most likely a stale client-side form list (session predates the Caption change). The authoritative persisted value was confirmed in the fresh Designer.
- Fresh Designer opened via the Web Client Designer button loads the Web Client's current form automatically after the scope confirmation (no manual form selection inside the Designer was needed).

### T5 evidence (under `evidence/EXP-005/`)

- `12-before-close-clean.png` — Designer clean saved state before close.
- `13-webclient-form-opened.png` — Web Client with the form opened via Select Form; tab title "Form Property Lab".
- `14-reopened-persisted-caption.png` — independently reopened Designer: tab/canvas "Form Property Lab"; Properties: Name `FX_FormPropertyL…`, **Caption `Form Property Lab`**, Version/Device Type/Form Type/Is Master unchanged; status bar ScopeType User; Save disabled (clean).

## Scope

- Editing scope: **User** (ScopeName `anton.ramos@3mworks.com.ph`) — must not be changed during the experiment.
- Target artifact: `FX_FormPropertyLab01` (User scope, BuildFromScratch, no data source, no components).
- Evidence directory: `evidence/EXP-005/`.

## Acceptance checks — ALL PASSED

1. ✅ `FX_FormPropertyLab01` created in User scope via the verified recipe (Select Form count 636 → 637; no template artifact) — T2.
2. ✅ Fresh Form-level Properties inspected and recorded exactly as expected (Name `FX_FormPropertyLab01`, Caption empty, Version "User version for user anton.ramos@3mworks.com.ph", Device Type Default, Form Type Normal, Is Master True) — T2.
3. ✅ Only the Caption property changed, to `Form Property Lab`; no other Form property altered — T3 (unchanged-property comparison table).
4. ✅ Ordinary Designer Save completed (silently) and Save/Undo returned to disabled (clean state) — T4.
5. ✅ Designer closed (tab closed) and the form independently reopened via Web Client Select Form + Designer button (fresh designer load) — T5.
6. ✅ In the reopened Designer, persisted Caption = `Form Property Lab`, with Name and Version unchanged — T5 (UI + store verification).
7. ✅ Evidence screenshots exist under `evidence/EXP-005/` for: pre-change state (09), changed property (10), successful save (11), close/reopen (12–13), and the independently reopened persisted state (14).