# EXP-006 — Literal Form Caption Persistence Across Documented Coupled Unload (FX_FormPropertyLab03)

Status: **COMPLETE — AC-9 reconciled & confirmed (T9); EXPERIMENT PASS (all AC-1…AC-9 PASS).** T8 final read-only audit artifacts (`33`/`34`) inspected in T9 and confirmed sufficient (no browser re-check, no re-login). `FX_FormPropertyLab03` created (T2); Caption `Form Property Lab Coupled Unload` ordinary-saved clean (T4); closed (T5); `Unload IDO Metadata With Forms` read CHECKED and left unchanged (T5); `Unload All Global Form Objects` invoked exactly once (T6); post-unload reopen in User scope confirmed Caption **PERSISTED** and all comparison properties unchanged (T7). T8 final audit (after a mid-experiment SLO logout, re-logged in via the documented secret flow): Select Form store = **639 records, exactly 8 `FX_` forms, exactly one `FX_FormPropertyLab03`** (Caption `Form Property Lab Coupled Unload` present in the inventory); `Unload IDO Metadata With Forms` re-read **CHECKED** and left unchanged; worktree changes confined to `experiments/EXP-006-…md` + `evidence/EXP-006/` (no recipe/environment/AGENTS.md change). Finding = **observed** (single controlled execution + persistence + final audit; not yet a repeatable/verified recipe).
Date: 2026-10-02
Mode: LEARNING MODE — controlled experiment on a factory-owned `FX_` artifact only.

## Objective

Create a new User-scope classic BuildFromScratch form `FX_FormPropertyLab03` using the verified basic-form recipe (`recipes/forms/create-basic-form.md`), record its baseline Form properties and exact User-scope identity, change **only** its literal Caption to `Form Property Lab Coupled Unload`, save normally, close the Form, leave `Unload IDO Metadata With Forms` unchanged, invoke the documented Form/global-object unload from the supported Form > Definition UI while explicitly permitting incidental IDO-metadata clearing, then reopen exactly the same Form version and verify that the Caption persisted and all recorded comparison properties remained unchanged. Record the exact unload command label rendered by the 2026.09.08 UI as an observation rather than assuming its wording.

In scope: confirm `FX_FormPropertyLab03` does not already exist before mutation; create it in User scope via the recipe; record Form name, ScopeType, ScopeName, Caption, Description, Version, Device Type, Form Type, and Is Master before the Caption edit; change only the Form-level Caption to `Form Property Lab Coupled Unload`; ordinary Designer Save with clean-state confirmation; close the Form through supported UI; read (not change) the `Unload IDO Metadata With Forms` preference; permit incidental IDO-metadata clearing caused by the existing preference; invoke the documented Form/global-object unload via the supported Form > Definition UI; record the exact command label shown by the 2026.09.08 environment; reopen exactly `FX_FormPropertyLab03` (ScopeType=User, same ScopeName); verify Caption persistence and unchanged comparison properties; capture evidence under `evidence/EXP-006/`.

Out of scope: changing the `Unload IDO Metadata With Forms` preference (or any User Preference); determining exactly whether ordinary Form close, the explicit unload, or both trigger IDO-metadata unloading; EXP-004 continuation or any Form-variable work; Translatable String creation, localization, or multilingual Caption behavior; components, bindings, data sources, validators, event handlers, scripts, methods, or expressions; changing any Form property other than Caption; changing editing scope away from User; editing `FX_FormPropertyLab01`, `FX_FormPropertyLab02`, or any non-`FX_` artifact; direct database edits, manual metadata manipulation, or undocumented internal APIs/events; promoting a Caption recipe unless every acceptance check succeeds.

## Starting state / preflight facts (2026-10-02, T1)

- Environment: Mongoose Web Client / Designer **2026.09.08**, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and Designer page title).
- Browser state at preflight start (inspected first; no login performed — session already authenticated): two tabs, the exact end state of EXP-005-R2:
  - Tab 0: Mongoose Web Client (portal), `favoriteContext=FX_FormPropertyLab01`; single form tab **"Form Property Lab"** (`FX_FormPropertyLab01`) open; toolbar clean (Save disabled); no `portal-notification` banner.
  - Tab 1: Web Designer, `WSWebClient/designer/default.aspx?MGForm=FX_FormPropertyLab01` — `FX_FormPropertyLab01` loaded, **clean state** (Save, Regenerate Form, Undo, Redo all disabled).
- **Active editing identity (recorded, not changed): ScopeType = `User`, ScopeName = `anton.ramos@3mworks.com.ph`** — Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (evidence `02`, `09`).
- Designer Properties of the loaded `FX_FormPropertyLab01` (context only, not touched): Name `FX_FormPropertyLab01`, Caption `Form Property Lab`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`.
- **Target form `FX_FormPropertyLab03` does NOT exist** — Select Form full-store scan (638 records) found no exact or case-insensitive match; UI filter searches in both case modes returned 0 rows (method and AC-1 evidence below).
- Existing `FX_` forms (7, store indices in `mgdata` order): `FX_VariableLab01` (279), `FX_TestBlank02` (280), `FX_TestBlank01` (281), `FX_FormPropertyLab02` (282), `FX_ComponentLab02` (283), `FX_ComponentLab01` (284), `FX_FormPropertyLab01` (312).
- Form-count reconciliation: 637 (after EXP-005 T2) → 638 now (+1 = `FX_FormPropertyLab02` created in EXP-005-R2 T2). Consistent; no unexplained artifacts.
- Known from EXP-005-R2 (T4/T5, not re-inspected in T1 — re-inspection is a later task of this experiment): the `Unload IDO Metadata With Forms` User Preference is **ENABLED (checked)** for this user. EXP-006 explicitly permits the incidental IDO-metadata clearing this preference causes; the preference must not be changed.
- No Mongoose artifact was created, modified, or deleted during this preflight. No User Preference was inspected or changed. No unload command was invoked. No form was opened from the Select Form dialog. Editing scope unchanged.

## Preflight method (T1)

1. Inspected repository state: `experiments/` (format references `EXP-005-form-caption-persistence.md`, `EXP-005-R2-…md`), `recipes/forms/create-basic-form.md` (read in full — verified recipe, two successful executions), `environments/current-environment.md`.
2. Inspected current browser state (2 tabs, logged in, end-of-EXP-005-R2 state) — no login performed. Screenshot of Web Client (evidence `01`) and Designer (evidence `02`).
3. In the Web Client (tab 0), clicked **Open** (`mgtoolbarbutton-1101`) → Select Form dialog (window `ext-comp-1135`, grid `grid-1136`, grid view `gridview-1140`, filter text `textfield-1143`, Filter By combo `combo-1145` = `mgdata`/Name, Case Sensitive `mgDlgCbx-1146`, Starts With `mgDlgCbx-1147`).
4. Verified dialog filter state before searching: Filter empty, Filter By = **Name**, **Case Sensitive unchecked**, **Starts With unchecked** (i.e. the dialog's default matching is case-insensitive).
5. **AC-1 existence proof (store-level, authoritative):** scanned the entire Select Form store (all **638** records, field `mgdata`): **0 exact** matches for `FX_FormPropertyLab03`, **0 case-insensitive** matches (`toLowerCase()` comparison); enumerated all 7 `FX_`-prefixed records (indices above); near-miss scan for `formpropertylab` (case-insensitive substring) matched only `FX_FormPropertyLab02` (282) and `FX_FormPropertyLab01` (312).
6. **AC-1 existence proof (UI-level, case-insensitive):** typed `FX_FormPropertyLab03` into the Filter field (Filter By = Name, Case Sensitive **off**) → store reloaded to **0 records** (evidence `03`).
7. **Positive control (UI-level):** filtered `FX_FormPropertyLab` (same mode) → exactly **2 rows**: `FX_FormPropertyLab02` and `FX_FormPropertyLab01` (Caption column shows `Form Property Lab` for 01) — proves the filter mechanism works and that only the 01/02 variants exist (evidence `04`).
8. **UI-level case-sensitive check:** toggled **Case Sensitive on** (see checkbox pitfall in Observations) and re-ran the `FX_FormPropertyLab03` filter → **0 records** (evidence `05`). Restored Case Sensitive to **off** afterwards.
9. Cleared the filter through the UI (focus, select-all, Delete) → full store restored, **638 records**.
10. Scrolled the grid to the `FX_` block and captured it visually (evidence `06`); scrolled further to capture `FX_FormPropertyLab01` listed under its Caption `Form Property Lab` (evidence `07`).
11. Closed the dialog with **Cancel** (native Playwright click); verified the Web Client returned to its original state (single form tab "Form Property Lab", no visible windows) (evidence `08`).
12. Re-verified the Designer tab: URL unchanged (`?MGForm=FX_FormPropertyLab01`), Save/Regenerate Form disabled (clean), scope status bar unchanged (evidence `09`).

## AC-1 evidence — pre-mutation absence of `FX_FormPropertyLab03`

| Check | Method | Result |
|---|---|---|
| Exact match, whole store | Store scan of all 638 records, field `mgdata`, `=== 'FX_FormPropertyLab03'` | **0 matches** |
| Case-insensitive, whole store | Store scan, `mgdata.toLowerCase() === 'fx_formpropertylab03'` | **0 matches** |
| UI filter, case-insensitive (Case Sensitive off, Filter By Name) | Dialog filter `FX_FormPropertyLab03` | **0 rows** (evidence `03`) |
| UI filter, case-sensitive (Case Sensitive on, Filter By Name) | Dialog filter `FX_FormPropertyLab03` | **0 rows** (evidence `05`) |
| Positive control (filter works) | Dialog filter `FX_FormPropertyLab` | **2 rows**: `FX_FormPropertyLab02`, `FX_FormPropertyLab01` (evidence `04`) |
| Visual, `FX_` block | Grid scrolled to the `FX_` block | 6 `FX_` rows visible, no `FX_FormPropertyLab03` (evidence `06`) |
| Visual, `FX_FormPropertyLab01` location | Grid scrolled to Caption-sorted "Form…" region | `FX_FormPropertyLab01` listed under Caption `Form Property Lab` (evidence `07`) |

Case-insensitive matching was explicitly accounted for in three independent ways (store-level `toLowerCase` scan, UI filter with Case Sensitive off, and the positive control), not relied on a single exact-case filter.

## Observations

- **Select Form grid is virtualized in this session** (41 rows rendered of 638; row pitch 24 px; `#gridview-1140` scrollHeight 15312 / clientHeight 271). A programmatic `scrollTop` assignment (alone or with a dispatched `scroll` event) does **not** re-render the row window; a **native mouse-wheel scroll** does. (Contrasts with EXP-005-R2 T1, where the grid was fully rendered and manual `scrollTop` worked — rendering mode appears session/state-dependent.)
- **The Select Form grid is sorted by Caption, descending** (sort arrow on the Caption column; display order differs from store `mgdata` order). Consequently `FX_FormPropertyLab01` (Caption `Form Property Lab`) does not sit next to the other `FX_` rows in the display; it appears in the "Form…" caption region. The store scan (not the display order) is the authoritative existence check.
- **Filter store reload is driven by real input events**: typing + Tab/blur reloads the store; programmatic `textfield.setValue('')` did **not** reload it — the full list was restored only after a real UI clear (focus, select-all, Delete).
- **Case Sensitive checkbox (`mgDlgCbx-1146`) interaction pitfall (new):** the `inputEl` is covered by a `displayEl` span, so a normal Playwright click on the input times out (pointer interception); a click on the `boxLabelEl` did **not** toggle it; a **forced** click on the `inputEl` toggled `checked`/`aria-checked` but left the display class inconsistent; the component's own handler `cb.onBoxClick()` (i.e. `setValue(!checked)`) produced a consistent state and was used for both the ON and the restore-OFF transitions. (Same displayEl-covering pattern as the wizard's Save Template checkbox, but the label-click workaround that worked there did not work here.)
- `Ext.ComponentQuery.query('grid', { root: window })` returned nothing in this build (the `root` option did not filter as expected); direct `Ext.getCmp('grid-1136')` and global queries + `ownerCt` filtering worked.
- `Ext.form.field.Checkbox#isChecked(value)` in this build is a **value matcher**, not a state reader — the checkbox state is the `checked` property (mirrored by `aria-checked` on the inputEl).
- Select Form dialog control IDs this session: window `ext-comp-1135`, grid `grid-1136`, grid view `gridview-1140`, filter text `textfield-1143`, Filter By combo `combo-1145` (value `mgdata` = Name), checkboxes `mgDlgCbx-1146` (Case Sensitive) / `mgDlgCbx-1147` (Starts With) — same IDs as EXP-005-R2.
- No Mongoose artifact was created, modified, or deleted; no User Preference was inspected or changed; no unload was invoked; no form was opened from the dialog; the Select Form dialog was left in its original state (filter empty, both checkboxes off) and closed via Cancel.

## Evidence (under `evidence/EXP-006/`)

- `01-preflight-webclient-state.png` — Web Client at preflight start: signed in, single form tab "Form Property Lab" (`FX_FormPropertyLab01`), toolbar clean, no notification banner.
- `02-preflight-designer-state.png` — Designer at preflight start: `FX_FormPropertyLab01` loaded (tab "Form Property Lab"), Properties (Name `FX_FormPropertyL…`, Caption `Form Property Lab`, Version `User version for us…`, Device Type Default, Form Type Normal, Is Master True), Save/Regenerate/Undo/Redo disabled (clean), status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- `03-select-form-filter-lab03-case-insensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab03`, Filter By Name, Case Sensitive **unchecked** → grid empty (0 records).
- `04-select-form-filter-lab-prefix-two-rows.png` — Select Form dialog, Filter `FX_FormPropertyLab` (positive control) → exactly 2 rows: `FX_FormPropertyLab02` and `FX_FormPropertyLab01` (Caption `Form Property Lab`).
- `05-select-form-filter-lab03-case-sensitive-zero.png` — Select Form dialog, Filter `FX_FormPropertyLab03`, Case Sensitive **checked** → grid empty (0 records).
- `06-select-form-fx-block-visible-no-lab03.png` — Select Form dialog (full list, 638 records) scrolled to the `FX_` block: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_FormPropertyLab02`, `FX_ComponentLab02`, `FX_ComponentLab01` — **no `FX_FormPropertyLab03`**; filter empty, both checkboxes off.
- `07-select-form-lab01-under-caption.png` — Select Form dialog scrolled to the Caption-sorted "Form…" region: `FX_FormPropertyLab01` listed under Caption `Form Property Lab` (between `Form Wizard - Base` and `Form Extensions`).
- `08-webclient-after-dialog-close.png` — Web Client after Cancel: original state restored (single form tab "Form Property Lab", no dialogs).
- `09-designer-unchanged-clean.png` — Designer after preflight: unchanged, `FX_FormPropertyLab01` loaded, clean state, scope status bar unchanged.

## Recipe availability for the next task

`recipes/forms/create-basic-form.md` was read in full during this preflight: status **verified** (EXP-002 + EXP-002-R2, persistence verified across full page reload in both). Key steps for creating `FX_FormPropertyLab03`: Designer tab → **New** (`mgtoolbarbutton-1088`) → Form Wizard Selection (New Form / Category **Classic** / Wizard **BuildFromScratch**, selected via `expand()` + native SVG-tile click) → wizard page 1 Name `FX_FormPropertyLab03` (other defaults untouched) → Next → page 2 **uncheck "Save Template"** (click the label text; the input is covered by a `displayEl` span) → Finish → "Process Completed Successfully" → OK (Finish persists immediately; Save disabled = clean). Session-specific control IDs from EXP-005-R2 T2 (wizard window `formwizard-1408`, expeditor `expeditor-1468`, Save Template `ext-comp-1707`, success dialog `ext-comp-1009`) may drift — resolve at runtime.

## Knowledge state (as of T1)

- `FX_FormPropertyLab03` absent (exact and case-insensitive) in the 638-record Select Form store, and in both UI filter modes: **observed** (T1, three independent methods + positive control).
- Select Form store count 638, reconciled against EXP-005/EXP-005-R2 history: **observed**.
- Select Form grid virtualized in this session; re-render requires native wheel scroll (programmatic `scrollTop` ineffective); grid sorted by Caption descending: **observed** (new).
- Case Sensitive checkbox: `displayEl` covers `inputEl`; label click ineffective; forced input click leaves inconsistent display; `onBoxClick()` is the reliable toggle path: **observed** (new).
- Filter store reload requires real input events (programmatic `setValue` insufficient): **observed** (new).
- `isChecked()` is a value matcher, not a state reader, in this build: **observed** (new).
- Active editing identity ScopeType=User / ScopeName=`anton.ramos@3mworks.com.ph`; Designer clean: **observed** (re-confirmed).
- `Unload IDO Metadata With Forms` preference state: **carried over from EXP-005-R2 (observed there, T4/T5) — to be re-verified read-only in a later task of this experiment before the unload step.**
- Exact unload command label in the 2026.09.08 Form > Definition UI: **unresolved** — must be observed at invocation time, not assumed.

## Open questions / blockers

- None blocking for T1.
- The exact unload command label under Form > Definition in the 2026.09.08 UI is still to be observed (deferred to the unload task; EXP-005-R2 documented the candidate names `Unload Global Form Objects` / `Unload All Global Form Objects` but they were never invoked there).
- The `Unload IDO Metadata With Forms` preference is expected to remain **enabled** (EXP-005-R2 finding); this experiment explicitly permits the resulting incidental IDO-metadata clearing and must not change the preference.
- Whether ordinary Form close, the explicit unload, or both trigger IDO-metadata unloading is **out of scope** and will not be determined by this experiment.

## T2 — Session recovery, form creation, and baseline (2026-10-02)

### T2.0 — Designer session expired; recovered via the Web Client

At the start of T2 the Designer tab (tab 1) still showed `?MGForm=FX_FormPropertyLab01` and looked clean, but clicking **New** (`mgtoolbarbutton-1088`) navigated the tab to `WSWebClient/Default.aspx` and raised a **"Session Expired"** dialog ("Your session has expired."). Dismissing it (OK) redirected the tab to the Designer sign-in page `Default.aspx?mode=designer`.

The sign-in page's **Configuration** combo was **empty**: its store (`/MG.dialogs.SignInDlg.Model`, memory proxy) had 0 items, and the backing `GET /WSWebClient/AppApi/GetConfigs/` returned `{"Success":true,"Payload":[]}`. Attempting **Sign In** with the empty config failed with *"Error retrieving configuration info for Config Group: Default and config name Invalid Configuration Name:"*. The designer session cookie had lapsed while the **Web Client (tab 0) session was still valid** (its form tab "Form Property Lab" was still open and its Open button enabled).

**Recovery (supported path):** the Web Client's **Designer split button** (`mgtoolbarbutton-1126`, tooltip "Open designer in a new window") opens the designer via its controller method `designerClick()` → `this.designer.open(formName)`. Two subtleties were observed and handled:
- The button's click handler dispatches to a controller method (`designerClick`) that is **not** reachable as an Ext component or global; it was invoked via the button's bound `scope` (`Ext.getCmp('mgtoolbarbutton-1126').scope.designerClick()`).
- `designer.open()` first checks `this.wndDesigner` (the previously opened designer window). Because the **old, session-expired designer window was still open (not closed)**, the first invocation only *focused* the stale window and did not open a new one. **Closing the stale designer tab** (and a stray test popup) made `wndDesigner.closed === true`, after which a second `designerClick()` opened a fresh designer window at `designer/Default.aspx?form=FX_FormPropertyLab01` carrying the full portal session context (`configgroup`, `tenant`, `inforSessionId`, `form=FX_FormPropertyLab01`, `mode=designer`).

The fresh designer showed a **lightweight sign-in** (config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` pre-selected, single OK button — no username/password, since the auth cookie was still valid); clicking it loaded the Designer, which then raised the **"Identify Your Editing Scope"** dialog (Scope **User**, User `anton.ramos@3mworks.com.ph`). Confirming **OK** loaded `?MGForm=FX_FormPropertyLab01` in **User** scope. Designer status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. (evidence `10`, `11`.)

> Observation: a lapsed *designer* session does not invalidate the *Web Client* session; the supported recovery is to re-open the designer from the Web Client's Designer split button, which re-establishes the designer session through the live portal context. The stale designer window must be closed first, or `designer.open()` will re-focus it instead of opening a new one.

### T2.1 — Pre-mutation re-check (immediately before creation)

Re-opened the Web Client **Select Form** dialog and re-scanned the full store (field `mgdata`): **638 records, 0 exact and 0 case-insensitive matches** for `FX_FormPropertyLab03`; the same 7 `FX_` forms as T1 (indices 279–284, 312). Confirmed the target still absent immediately before the mutation. (evidence `12`.)

### T2.2 — Creation method (per `recipes/forms/create-basic-form.md`)

1. Designer **New** (`mgtoolbarbutton-1088`) → **Form Wizard Selection** dialog (window `formwizard-1408`).
2. Category combo (`mginfoconexpandable-1426`) → **Classic**; Wizard combo (`mginfoconexpandable-1431`) → **BuildFromScratch** (selected via `combo.select(record)`; both `forceSelection` paths satisfied). (evidence `13`.)
3. OK → **Form Wizard – Build From Scratch** (expeditor `expeditor-1468`). Page 1 **Name** field is the editable combo `mgcombo-1475` (under the "Form Template" group; `forceSelection:false`, `allowBlank:true`); set to **`FX_FormPropertyLab03`** via `setValue`. Other page-1 defaults left untouched: Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source *(empty)*, Query Form *(empty)*, Comments *(empty)*. (evidence `14`.)
4. **Next** → final step (Next became disabled, Finish enabled). The **Save Template** checkbox (`ext-comp-1707`, `data-mgcompnamevalue="SaveTemplateCheckBox"`) was **checked** by default (`aria-checked="true"`, `getValue()=true`); toggled **off** via its own handler `onBoxClick()` → `aria-checked="false"`, `getValue()=false`. (evidence `15`.)
5. **Finish** → **"Process Completed Successfully"** dialog (`ext-comp-1009`) → **OK**. (evidence `16`.)
6. Designer loaded the new form: URL `?MGForm=FX_FormPropertyLab03`. (evidence `17`.)

### T2.3 — Post-creation existence proof (exactly one)

Re-opened the Web Client **Select Form** dialog and scanned the full store: **639 records** (638 + 1), **exactly 1 exact match** for `FX_FormPropertyLab03` (store index 282, record `{mgdata:"FX_FormPropertyLab03", text:"FX_FormPropertyLab03", type:0, id:"extModel214-1929"}`). `FX_`-prefixed forms now number 8: `FX_VariableLab01`(279), `FX_TestBlank02`(280), `FX_TestBlank01`(281), **`FX_FormPropertyLab03`(282)**, `FX_ComponentLab02`(283), `FX_ComponentLab01`(284), `FX_FormPropertyLab02`(312), `FX_FormPropertyLab01`(313). (evidence `18`.)

### T2.4 — Baseline properties of `FX_FormPropertyLab03` (recorded BEFORE any Caption change)

Read from the Designer Properties grid (`formpropertygrid-1135`), "Design" group, while the freshly created form was loaded:

| Property | Value | Read-only |
|---|---|---|
| **Name** | `FX_FormPropertyLab03` | yes |
| **Description** | *(empty)* | no |
| **Caption** | *(empty)* | no |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | yes |
| **Device Type** | `Default` | yes |
| **Form Type** | `Normal` | yes |
| **Is Master** | `True` | yes |

**Exact editing identity:** ScopeType = **`User`**, ScopeName = **`anton.ramos@3mworks.com.ph`** (Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`).

Other property groups present (not part of the comparison set, recorded for completeness): Appearance (Theme Class empty, Background Color empty, Foreground Color `#000000`, Background Image empty, Icon empty); Behavior (Initial Command empty, Script Language `Visual Basic`, Close Box `True`, Minimize/Maximize Box `True`, Filter Form empty); Help (Help Context ID `-1`, Help File Name empty); Layout (Splitter `None`, Pane 0/1 Scroll Bars `As Needed`, Form Pages empty, Unit `Char`, Size `120; 40`, Synchronize FlexLayout attributes `True`).

**Key baseline fact for the persistence check:** the freshly created form's **Caption is empty** — so the later change to the literal `Form Property Lab Coupled Unload` is an unambiguous empty→literal transition, and persistence of that literal across the unload/reopen is the experiment's core assertion.

### T2.5 — T2 evidence (under `evidence/EXP-006/`)

- `10-designer-session-expired-recovery-webclient.png` — Web Client (still signed in) at the moment the Designer session had expired; used as the recovery source.
- `11-designer-session-restored.png` — Fresh Designer after recovery: `FX_FormPropertyLab01` loaded, User scope, clean.
- `12-select-form-lab03-absent-recheck.png` — Select Form dialog, pre-mutation re-check (638 records, no `FX_FormPropertyLab03`).
- `13-wizard-selection-classic-buildfromscratch.png` — Form Wizard Selection: Category **Classic**, Wizard **BuildFromScratch**.
- `14-wizard-page1-name-entered.png` — Wizard page 1: Name `FX_FormPropertyLab03`, other defaults.
- `15-wizard-final-savetemplate-unchecked.png` — Wizard final step: **Save Template unchecked**.
- `16-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish.
- `17-form-created-loaded-in-designer.png` — New form `FX_FormPropertyLab03` loaded in the Designer (`?MGForm=FX_FormPropertyLab03`).
- `18-select-form-lab03-exists-one.png` — Select Form dialog post-creation: 639 records, exactly one `FX_FormPropertyLab03`.

### T2.6 — T2 observations / corrections

- **Designer session expiry is independent of the Web Client session.** The supported recovery is the Web Client Designer split button (`mgtoolbarbutton-1126` → `designerClick()` → `designer.open()`), which re-opens the designer with the live portal session context and re-establishes the designer session (lightweight config-group sign-in + Identify-Your-Editing-Scope). No credentials were re-entered.
- **`designer.open()` re-focuses a still-open stale designer window** instead of opening a new one; the stale window must be closed first (`wndDesigner.closed === true`).
- **The wizard "Save Template" checkbox is checked by default** and must be explicitly unchecked to avoid saving a form template. Its reliable toggle is the component's own `onBoxClick()` (the `inputEl` is a `type="button"` with `role="checkbox"`; state is `aria-checked`/`getValue()`, **not** `isChecked()`/`input.checked`, which read `false` even when checked). This refines the T1 note: for these Mongoose checkbox controls, `aria-checked` + `getValue()` are the authoritative state readers.
- **Wizard Name field** is the editable combo `mgcombo-1475` (not a plain textfield); `setValue()` works (`forceSelection:false`).
- **The "Build From Scratch" wizard is a single scrollable page** (Form Template / Attributes / Properties / Form Pages / Create Background Task / Link Properties), not the two distinct pages the recipe text implies; **Next** validates and disables itself, enabling **Finish**.
- No User Preference was inspected or changed; no unload was invoked; no form other than the new `FX_FormPropertyLab03` was modified; `FX_FormPropertyLab01`/`FX_FormPropertyLab02` untouched.

### T2.7 — Knowledge state updates (as of T2)

- `FX_FormPropertyLab03` **exists, exactly one**, User scope, created via the verified recipe; baseline Caption **empty**: **observed** (T2).
- Designer-session-expiry recovery via Web Client Designer split button (`designerClick`/`designer.open`), including the stale-window re-focus gotcha: **observed** (new).
- Wizard "Save Template" is checked by default; authoritative checkbox state is `aria-checked`/`getValue()` (not `isChecked()`/`input.checked`); reliable toggle is `onBoxClick()`: **observed** (new; refines T1).
- Wizard Name field = editable combo `mgcombo-1475`; "Build From Scratch" wizard is a single scrollable page: **observed** (new).
- `Unload IDO Metadata With Forms` preference state: still **carried over from EXP-005-R2 (observed there) — to be re-verified read-only in the unload task** (not inspected in T2).
- Exact unload command label in the 2026.09.08 Form > Definition UI: **unresolved** — to be observed at invocation time.

## T3 — AC-2 reconciliation (confirm creation, re-capture identity + baseline) (2026-10-02)

Coordinator instruction: reconcile and complete **only** the AC-2 creation/baseline step. Before any mutation, inspect the current Web Client, Designer, Select Form list, and the existing record to determine whether `FX_FormPropertyLab03` was already created in T2; **do not recreate** it if it exists. If exactly one exists, open that exact version and re-capture editing identity + pre-Caption baseline; verify the form is clean and exactly one target exists. Stop before Caption change, before any User-Preference inspection/change, and before Form > Definition / any unload.

### T3.1 — Reconciliation result: form already exists (created in T2); NOT recreated

Inspected live state first (no mutation attempted):
- **Browser tabs:** Tab 0 = Web Client (portal, `favoriteContext=FX_FormPropertyLab01`); Tab 1 = Designer already at `designer/default.aspx?MGForm=FX_FormPropertyLab03` — i.e. the T2-created form was still loaded.
- **Designer (tab 1):** active form tab **`FX_FormPropertyLab03`** (a second tab "Form Property Lab" = `FX_FormPropertyLab01` is also open from the session recovery). Properties grid (`formpropertygrid-1135`) "Design" group shows Name `FX_FormPropertyLab03`. Scope status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- **Select Form store scan (authoritative):** **639 records, exactly 1 exact + 1 case-insensitive match** for `FX_FormPropertyLab03` (store index 282, record `{mgdata:"FX_FormPropertyLab03", text:"FX_FormPropertyLab03", type:0, id:"extModel214-1929"}`). `FX_`-prefixed forms = 8 (279 `FX_VariableLab01`, 280 `FX_TestBlank02`, 281 `FX_TestBlank01`, **282 `FX_FormPropertyLab03`**, 283 `FX_ComponentLab02`, 284 `FX_ComponentLab01`, 312 `FX_FormPropertyLab02`, 313 `FX_FormPropertyLab01`).
- **UI confirmation:** filtered the Select Form dialog to `FX_FormPropertyLab03` → **exactly 1 row** (evidence `19`).

**Conclusion:** `FX_FormPropertyLab03` was already successfully created during T2; exactly one exists. Per the instruction, it was **NOT recreated**. No creation mutation was performed in T3.

### T3.2 — Re-captured editing identity + pre-Caption baseline (matches T2)

Read from the loaded form in the Designer (evidence `20`):

| Property | Value |
|---|---|
| **Name** | `FX_FormPropertyLab03` |
| **ScopeType** | `User` |
| **ScopeName** | `anton.ramos@3mworks.com.ph` |
| **Caption** | *(empty)* |
| **Description** | *(empty)* |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` |
| **Device Type** | `Default` |
| **Form Type** | `Normal` |
| **Is Master** | `True` |

These values are **identical to the T2 baseline** (T2.4) — the form is unchanged since creation.

### T3.3 — Clean-state verification

Designer main toolbar (`mgtoolbarbutton-*`) for the loaded `FX_FormPropertyLab03`: **Save** (`mgtoolbarbutton-1085`) disabled, **Regenerate Form** (`mgtoolbarbutton-1086`) disabled, **Undo** (`mgtoolbarbutton-1106`) disabled, **Redo** (`mgtoolbarbutton-1107`) disabled → **clean, no unsaved changes**. (New/Copy/Delete Form Definition enabled; Align/Make-Same/Space disabled because no component is selected — expected.)

### T3.4 — Minor incident (no mutation)

While confirming the single match, typing `FX_FormPropertyLab03` into the Select Form filter and pressing **Enter** (`submit`) both reloaded the filter **and** triggered an "open" on the grid's default-highlighted first row, `WSFormWizardNewDataXmlToIdo` (a *wizard* entry, not an openable form). This raised an **Error** dialog: *"Unable to load form WSFormWizardNewDataXmlToIdo … The form 'WSFormWizardNewDataXmlToIdo' was not found."* Dismissing it (OK) left the Web Client in its original state (single form tab "Form Property Lab" = `FX_FormPropertyLab01`, no visible windows). **No form was created, modified, or deleted; no mutation occurred.** Lesson: in the Select Form dialog, do not press Enter/submit in the filter field if the goal is only to filter — it can also activate the highlighted row.

### T3.5 — T3 evidence (under `evidence/EXP-006/`)

- `19-t3-select-form-filter-lab03-exactly-one.png` — Select Form dialog filtered to `FX_FormPropertyLab03` → exactly 1 row (confirms exactly one target).
- `20-t3-designer-lab03-loaded-clean-baseline.png` — Designer with `FX_FormPropertyLab03` active: Design group (Name `FX_FormPropertyLab03`, Description empty, Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`), Save disabled (clean), status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T3.6 — T3 knowledge-state updates

- `FX_FormPropertyLab03` exists, **exactly one**, User scope, **clean**, baseline Caption **empty** — re-confirmed in T3 (consistent with T2): **observed**.
- Select Form filter field: pressing Enter/submit can also activate the highlighted row (triggering an open attempt); filter-only intent should avoid Enter: **observed** (new, T3).
- `Unload IDO Metadata With Forms` preference: **not inspected in T3** (out of scope for this step); still carried from EXP-005-R2, to be re-verified read-only in the unload task.
- Exact unload command label: **unresolved** (not opened Form > Definition in T3, per instruction).

### T3.7 — Stopped here (per instruction)

No Caption change; no User Preference inspected or changed; Form > Definition not opened; no unload invoked. `FX_FormPropertyLab01`/`FX_FormPropertyLab02` and all non-`FX_` artifacts untouched. **Next task:** change only the literal Caption to `Form Property Lab Coupled Unload`, ordinary Save (confirm clean), close the Form, read (not change) the `Unload IDO Metadata With Forms` preference, invoke the documented Form > Definition unload (recording its exact 2026.09.08 label), reopen the same version, and verify Caption persistence + unchanged comparison properties.

## T4 — AC-2 baseline (full values) + AC-3 single-property Caption mutation + ordinary Save + clean-state proof (2026-10-02)

Coordinator instruction: read and record the **exact full** baseline for `FX_FormPropertyLab03` (Name, ScopeType, ScopeName, Caption, Description, Version — full even if visually truncated — Device Type, Form Type, Is Master) using supported/read-only UI state or the loaded Designer component/property value (NOT undocumented persistence APIs); capture AC-2 evidence; then change **only** the Form-level Caption to exactly `Form Property Lab Coupled Unload`; ordinary Designer Save; prove the Designer returns to a clean state while the Caption remains the exact literal. **Stop after AC-3** (do not close the Form, do not inspect/change User Preferences, do not open Form > Definition, do not invoke an unload).

### T4.1 — Inspected state first (no mutation)

- Browser tabs: Tab 0 = Web Client (`favoriteContext=FX_FormPropertyLab01`); Tab 1 (current) = Designer at `?MGForm=FX_FormPropertyLab03`.
- Designer: active form tab `FX_FormPropertyLab03` (a second tab "Form Property Lab" = `FX_FormPropertyLab01` also open from T2 session recovery). Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Toolbar before any edit: **Save / Regenerate Form / Undo / Redo all disabled → clean** (form unchanged since T2/T3).

### T4.2 — Exact full baseline (AC-2), read from the loaded property grid store

Read read-only from the loaded Designer property grid component `formpropertygrid-1135` (in-memory UI state of the loaded form; formId 7). This is the loaded component/property value, not a persistence API. The grid visually truncates the Version cell, but the store holds the full value:

| Property | Full value | ro |
|---|---|---|
| **Name** | `FX_FormPropertyLab03` | true |
| **Description** | *(empty)* | false |
| **Caption** | *(empty)* | false (expeditor `WSExpEdCaption`, store `object.string`) |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | true |
| **Device Type** | `Default` | true |
| **Form Type** | `Normal` | true |
| **Is Master** | `True` (boolean) | true |

Editing identity: **ScopeType = `User`**, **ScopeName = `anton.ramos@3mworks.com.ph`** (from the Designer status bar). The full Version string is `User version for user anton.ramos@3mworks.com.ph` (confirmed complete from the store; the grid cell renders it truncated as `User version for us…`). Baseline Caption is **empty**.

### T4.3 — Single-property mutation: Caption only

- The Caption cell's editor is a **free-text combo** `mg-gc-combo2141` (xtype `pgvaluecombobox`, `forceSelection: false`, `editable: true`, 7531-item store of existing translatable strings). Because `forceSelection` is false, a literal not in the list is accepted.
- Typed the literal `Form Property Lab Coupled Unload` into the combo input; verified the field/combo value = exactly `Form Property Lab Coupled Unload`; committed by **blurring** the input (no list item selected).
- Post-commit, the property grid store shows `Design.Caption = "Form Property Lab Coupled Unload"`; `Design.Name` and `Design.Version` unchanged. **No other Form property was touched.**
- After the edit the toolbar became **dirty**: Save=enabled, Regenerate Form=enabled, Undo=enabled, Redo=disabled (a single undoable change = the Caption edit).

### T4.4 — Ordinary Save + clean-state proof (AC-3)

- Clicked the ordinary **Save** toolbar button (`mgtoolbarbutton-1085`) with a real click.
- After the server round-trip (~3 s), toolbar returned to **clean**: **Save=disabled, Regenerate Form=disabled, Undo=disabled, Redo=disabled**.
- **No modal/error window** appeared (no visible `window` components).
- Caption remains exactly `Form Property Lab Coupled Unload` in the grid store.
- Visual confirmation: the form **tab title changed from `FX_FormPropertyLab03` to `Form Property Lab …`** (the Designer now uses the Caption as the tab display title), and the Caption cell renders `Form Property Lab` (truncated display of the full literal).

**AC-3 result: PASS** — Caption changed to the exact literal, ordinary Save completed, Designer returned to a clean state, Caption retained.

### T4.5 — Prior harmless Select Form error (carried from T3)

The earlier benign incident is recorded in **T3.4**: pressing Enter/submit in the Select Form filter also activated the highlighted row `WSFormWizardNewDataXmlToIdo` (a wizard entry), raising a transient "Unable to load form … was not found" error; dismissing it caused **no mutation**. No such side effect occurred in T4 (the Caption combo was committed by blur, not Enter).

### T4.6 — T4 evidence (under `evidence/EXP-006/`)

- `21-t4-baseline-before-caption.png` — Designer, `FX_FormPropertyLab03` active, Design group baseline (Caption empty), Save disabled (clean), scope `User / anton.ramos@3mworks.com.ph`.
- `22-t4-transient-combo-check.png` — Caption editor combo open (empty field + listbox of existing translatable strings) — documents the free-text `pgvaluecombobox` editor.
- `23-t4-caption-entered-pre-save.png` — Caption field = `Form Property Lab Coupled Unload`, pre-save (dirty).
- `24-t4-after-save-clean-caption-persisted.png` — Post-save: tab title now `Form Property Lab …`, Caption cell `Form Property Lab`, Save disabled (clean), all Design values intact.

### T4.7 — T4 knowledge-state updates

- Full Version value for a User-scope form = `User version for user <ScopeName>`; the property grid cell truncates it but the grid **store** holds the full value (read via `formpropertygrid-<id>` store record `Design.Version`): **observed** (new, T4).
- Form-level **Caption** editor = free-text combo `pgvaluecombobox` (`forceSelection:false`, `editable:true`); a literal not in the translatable-string list is accepted; commit by **blur** (avoids Enter-selecting a list item): **observed** (new, T4).
- Setting a Form Caption changes the Designer **tab title** from the Form Name to the Caption (visual persistence cue): **observed** (new, T4).
- Ordinary Designer **Save** of a single Form-property change returns the toolbar to clean (Save/Regenerate/Undo/Redo all disabled) with no dialog: **observed** (T4).
- `FX_FormPropertyLab03` Caption now = `Form Property Lab Coupled Unload` (saved, clean, User scope): **observed** (T4).
- `Unload IDO Metadata With Forms` preference: **not inspected in T4** (out of scope); still carried from EXP-005-R2.
- Exact unload command label: **unresolved** (Form > Definition not opened in T4, per instruction).

### T4.8 — Stopped here (per instruction, after AC-3)

Did **not** close `FX_FormPropertyLab03`; did **not** inspect or change any User Preference; did **not** open Form > Definition; did **not** invoke any unload command. `FX_FormPropertyLab01`/`FX_FormPropertyLab02` and all non-`FX_` artifacts untouched. **Next task:** close `FX_FormPropertyLab03` via supported UI; read (not change) the `Unload IDO Metadata With Forms` preference; invoke the documented Form/global-object unload from the supported Form > Definition UI (recording its exact 2026.09.08 label); reopen exactly `FX_FormPropertyLab03` (ScopeType=User, same ScopeName); verify Caption persistence + unchanged comparison properties.

## T5 — Pre-unload boundary: close Form, read preference (no change), capture unload command label (no invocation) (2026-10-02)

Coordinator instruction: verify `FX_FormPropertyLab03` is clean and saved; close it via supported UI; **read (not change)** the `Unload IDO Metadata With Forms` User Preference; capture the **exact** Form > Definition unload command label rendered by the 2026.09.08 UI **without invoking it**; update the record; **stop** before invoking any unload and before any reopen/persistence verification.

### T5.1 — Verified clean and saved before closing

- Designer (tab 1) had `FX_FormPropertyLab03` active (a second tab "Form Property Lab" = `FX_FormPropertyLab01` was also open from the T2 session recovery).
- Toolbar: **Save / Regenerate Form / Undo / Redo all disabled → clean** (no unsaved changes since the T4 save).
- Caption = `Form Property Lab Coupled Unload` (the form tab title displays the Caption).
- Scope status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

### T5.2 — Closed `FX_FormPropertyLab03` via supported UI

- Clicked the `FX_FormPropertyLab03` form tab's **close** button. Because the form was clean, **no confirmation dialog** appeared.
- The Designer URL changed from `?MGForm=FX_FormPropertyLab03` to `?MGForm=FX_FormPropertyLab01` (the remaining open form). (evidence `25`.)

### T5.3 — Located the Mongoose User Preferences form (not the portal "User Settings")

- Switched to the Web Client (tab 0).
- The **portal** User menu → "User Settings" opens the **Infor OS profile** page (`/settings/profile`) — this is **not** the Mongoose User Preferences; rejected.
- The Mongoose Web Client menus (Explorer, Form, Actions, Edit, View, Window, Help) contain **no** "User Preferences" item; the Window menu offers only "Close All".
- Opened the **Select Form** dialog. With Filter By = **Name**, typing `User Preferences` via Playwright `.fill()` did **not** reload the grid (stale). Changed **Filter By → "Caption & Name"** and retyped via real key events (`page.keyboard.type()`); the grid reloaded to **exactly 1 match**: Name = `UserPreferences`, Caption = `User Preferences`.
- Selected the row and clicked **OK** → the `UserPreferences` form opened (URL `?favoriteContext=UserPreferences`).

### T5.4 — Read (NOT changed) the `Unload IDO Metadata With Forms` preference

- In the `UserPreferences` form, **Behavior** panel: **`Unload IDO Metadata With Forms` = CHECKED (enabled)**.
- Authoritative state (per the T1/T2 checkbox pitfall): `checked: true`, `getValue(): true`, `aria-checked: "true"`.
- **No change was made.** The form toolbar **Save** remained **disabled** (no unsaved changes). (evidence `26`.)

### T5.5 — Closed User Preferences WITHOUT saving

- Closed via the form tab's **close** button (deliberately **not** OK, to avoid any save). **No** "Save changes"/unsaved dialog appeared.
- URL returned to `?favoriteContext=FX_FormPropertyLab01`. Verified no "User Preferences" tab and no save/unsaved prompt remained.

### T5.6 — Captured the exact Form > Definition unload command label (NOT invoked)

- Switched to the Designer (tab 1); opened the **Form** menu → **Definition** submenu.
- The Definition submenu (2026.09.08 UI) contains, in order:
  1. `Design`
  2. `Revert Form Definition`
  3. `Regenerate Form` (disabled)
  4. `Regenerate Form from Cache` (disabled)
  5. `Site Developer Impersonation`
  6. **`Unload All Global Form Objects`** ← the documented Form/global-object unload command
  7. `New`
  8. `Copy`
  9. `Delete`
- **Exact visible label: `Unload All Global Form Objects`** (menu item `f1e15967`, floating menu `#menu-1023`).
- **NOT invoked.** The menu was closed via Escape (×2); verified the menu closed and the Designer returned to a clean state. (evidence `27`.)

### T5.7 — T5 evidence (under `evidence/EXP-006/`)

- `25-t5-lab03-closed-only-lab01-remains.png` — Designer after closing `FX_FormPropertyLab03`: only the "Form Property Lab" (`FX_FormPropertyLab01`) tab remains; URL `?MGForm=FX_FormPropertyLab01`.
- `26-t5-user-prefs-unload-ido-metadata-checked.png` — `UserPreferences` form, Behavior panel: `Unload IDO Metadata With Forms` **CHECKED** (read-only; no change made).
- `27-t5-form-definition-unload-command-label.png` — Form > Definition submenu showing the exact label **`Unload All Global Form Objects`** (not invoked).

### T5.8 — T5 knowledge-state updates

- `Unload IDO Metadata With Forms` preference is **CHECKED (enabled)** for `anton.ramos@3mworks.com.ph` — re-verified read-only in T5 (confirms the EXP-005-R2 finding): **observed** (re-confirmed).
- The Mongoose **User Preferences** form is `UserPreferences` (Caption "User Preferences"), opened via the Select Form dialog; to find it, **Filter By must be "Caption & Name"** (searching by Name alone for "User Preferences" returns 0). It is **not** the portal "User Settings" (the Infor OS profile): **observed** (new, T5).
- The **exact unload command label** in the 2026.09.08 Form > Definition UI is **`Unload All Global Form Objects`** (sibling items: Design, Revert Form Definition, Regenerate Form, Regenerate Form from Cache, Site Developer Impersonation, New, Copy, Delete): **observed** (new, T5) — **resolves** the previously-unresolved label.
- Select Form filter `.fill()` does **not** trigger the grid store reload; real key events (`page.keyboard.type()`) do (refines the T1 "real input events" note): **observed** (new, T5).
- No User Preference was changed; no unload was invoked; no form was created, modified, or deleted.

### T5.9 — Stopped here (per instruction, pre-unload boundary)

Did **not** invoke the `Unload All Global Form Objects` command; did **not** reopen `FX_FormPropertyLab03`; did **not** verify persistence; did **not** change any User Preference. `FX_FormPropertyLab01`/`FX_FormPropertyLab02` and all non-`FX_` artifacts untouched. **Next task:** invoke `Unload All Global Form Objects` from Form > Definition (exact label already captured), then reopen exactly `FX_FormPropertyLab03` (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) and verify the Caption `Form Property Lab Coupled Unload` persisted and all comparison properties (Name, Description, Version, Device Type, Form Type, Is Master) are unchanged.

## T6 — AC-5/AC-6: invoke the documented Form/global-object unload (exactly once) (2026-10-02)

Coordinator instruction: reconcile the pre-unload state; confirm the exact unload label is already evidenced (else re-capture it — do not infer/normalize); confirm `FX_FormPropertyLab03` remains closed (do not reopen); treat the T5 read-only User Preferences evidence as the immediately-pre-unload state (preference checked/enabled, must remain unchanged — do not reopen/modify User Preferences unless strictly necessary); invoke the exact supported unload command **exactly once** via the visible Form > Definition UI (incidental IDO-metadata clearing from the existing enabled preference is explicitly permitted); capture evidence of invocation + successful completion/result; update the record; **stop after AC-6** (no reopen, no post-unload comparison).

### T6.1 — Reconciliation (inspect first)

- **Exact label already evidenced:** re-read `evidence/EXP-006/27-t5-form-definition-unload-command-label.png` — it clearly shows the Form > Definition submenu with the exact label **`Unload All Global Form Objects`**. No re-capture was required to *read* the label (it was re-shown live at invocation time in evidence `29`).
- **Current Designer (tab 1):** `?MGForm=FX_FormPropertyLab01`; only the "Form Property Lab" (`FX_FormPropertyLab01`) tab is open; toolbar **clean** (Save/Regenerate/Undo/Redo all disabled). **`FX_FormPropertyLab03` remains closed** — confirmed; **not reopened**.
- **User Preferences:** NOT reopened or modified in T6. The T5 read-only evidence (`26`) is the immediately-pre-unload state: `Unload IDO Metadata With Forms` = **CHECKED (enabled)**, unchanged.

### T6.2 — Exact unload command label (observed, not inferred)

**`Unload All Global Form Objects`** — Form > Definition submenu (evidence `27`, re-shown at invocation in `29`). Sibling items in order: Design, Revert Form Definition, Regenerate Form (disabled), Regenerate Form from Cache (disabled), Site Developer Impersonation, **Unload All Global Form Objects**, New, Copy, Delete.

### T6.3 — Invocation (exactly once)

- Pre-invocation state captured: evidence `28` (Designer clean on `FX_FormPropertyLab01`) and `29` (Form > Definition submenu with the target item).
- Opened **Form** menu → **Definition** submenu → clicked **`Unload All Global Form Objects`** (menu item `#menuitem-1030-itemEl`) **exactly once**.

### T6.4 — Invocation result / post-command state

- The command **completed silently**: **no confirmation dialog, no error dialog, no notification banner** appeared.
- Post-command: Designer still on `FX_FormPropertyLab01` ("Form Property Lab" tab), toolbar **clean** (Save/Regenerate/Undo/Redo all disabled); the **Toolbox tree re-rendered** (fresh component refs), consistent with the global form objects being unloaded and the designer re-initializing its component metadata.
- Ext runtime check: **0 visible windows** (2 hidden framework windows only); page body text is the normal designer UI (no dialog text).
- Console: **0 errors, 0 warnings**.
- The incidental IDO-metadata clearing caused by the existing enabled `Unload IDO Metadata With Forms` preference is explicitly permitted by the experiment and is the expected effect of this command. (This experiment does **not** determine whether ordinary Form close, this explicit unload, or both trigger IDO-metadata unloading — that is out of scope.)
- Post-command state captured: evidence `30`.

### T6.5 — T6 evidence (under `evidence/EXP-006/`)

- `28-t6-before-unload-designer-state.png` — Designer pre-unload: `FX_FormPropertyLab01` loaded, clean.
- `29-t6-unload-command-about-to-invoke.png` — Form > Definition submenu with `Unload All Global Form Objects` (the item about to be invoked).
- `30-t6-after-unload-completed-clean.png` — Post-command: no dialog, Designer clean, `FX_FormPropertyLab01` still loaded.

### T6.6 — T6 knowledge-state updates

- The documented Form/global-object unload command in the 2026.09.08 Designer is **`Unload All Global Form Objects`** (Form > Definition): **observed** (label captured T5; invoked T6).
- Invoking `Unload All Global Form Objects` completes **silently** (no confirmation, no error, no notification); the Designer stays on the currently-loaded form in a clean state and the Toolbox re-renders: **observed** (new, T6).
- No User Preference was changed in T6 (preference left as T5 observed: `Unload IDO Metadata With Forms` CHECKED): **observed** (re-confirmed).
- Whether this command (vs. ordinary Form close) is what triggers IDO-metadata unloading is **out of scope** and not determined here.

### T6.7 — Stopped here (per instruction, after AC-6)

Did **not** reopen `FX_FormPropertyLab03`; did **not** perform the post-unload property comparison; did **not** change any User Preference; did **not** modify `FX_FormPropertyLab01`/`FX_FormPropertyLab02` or any non-`FX_` artifact. **Next task:** reopen exactly `FX_FormPropertyLab03` (ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) and verify the Caption `Form Property Lab Coupled Unload` persisted and all comparison properties (Name, Description, Version, Device Type, Form Type, Is Master) are unchanged.

## T7 — AC-7/AC-8: post-unload reopen + property comparison (2026-10-02)

Coordinator instruction: reopen exactly `FX_FormPropertyLab03` in User scope via supported UI; prove identity (Form name `FX_FormPropertyLab03`, ScopeType=`User`, same ScopeName as before the edit); read the Form-level properties **without changing them**; compare to the T4 baseline (Caption exactly `Form Property Lab Coupled Unload`, Description empty, Version exactly `User version for user anton.ramos@3mworks.com.ph`, Device Type `Default`, Form Type `Normal`, Is Master `True`); verify the Designer is clean after reopen; capture evidence; update the record; **stop after AC-7/AC-8** (no property change, no User-Preference change, no further unload, no new experiment/replay).

### T7.1 — Inspected state first

- Designer (tab 1) at `?MGForm=FX_FormPropertyLab01`, clean; `FX_FormPropertyLab03` closed (only the "Form Property Lab" tab open). Reopen target confirmed not already open.

### T7.2 — Reopen method (supported UI)

- Opened the Designer **Form** menu → clicked **`FX_FormPropertyLab03`** in the recent-forms list (menu item `#menuitem-1073-itemEl`).
- The Designer loaded it: URL `?MGForm=FX_FormPropertyLab03`; a new form tab titled **"Form Property Lab Coupled Unload"** (the Caption) appeared and became selected. **No scope re-prompt** (reopened in the existing User scope). **No creation or modification** occurred.

### T7.3 — Identity proof

- **Form name:** `FX_FormPropertyLab03` (property grid store `Design.Name`; session formId 18).
- **ScopeType = `User`**, **ScopeName = `anton.ramos@3mworks.com.ph`** (Designer status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`) — the **same ScopeName** recorded before the edit (T4).

### T7.4 — Post-unload property read (read-only) + comparison to T4 baseline

Read read-only from the loaded property grid store `formpropertygrid-1135` (formId 18) — the loaded component/property value, not a persistence API. The grid cell visually truncates Name/Caption/Version; the store holds the full exact values:

| Property | Reopened value (exact, from store) | T4 baseline | Result |
|---|---|---|---|
| Name | `FX_FormPropertyLab03` | `FX_FormPropertyLab03` | UNCHANGED |
| Description | *(empty)* | *(empty)* | UNCHANGED |
| **Caption** | **`Form Property Lab Coupled Unload`** | `Form Property Lab Coupled Unload` | **PERSISTED (unchanged)** |
| Version | `User version for user anton.ramos@3mworks.com.ph` | same | UNCHANGED |
| Device Type | `Default` | `Default` | UNCHANGED |
| Form Type | `Normal` | `Normal` | UNCHANGED |
| Is Master | `True` (boolean) | `True` | UNCHANGED |

**Comparison result: PASS.** The literal Caption `Form Property Lab Coupled Unload` **persisted** across the T6 `Unload All Global Form Objects` invocation + reopen, and every recorded comparison property is unchanged.

### T7.5 — Clean-state verification after reopen

- Designer main toolbar: **Save** disabled, **Regenerate Form** disabled, **Undo** disabled, **Redo** disabled → **clean** (the reopen introduced no unsaved changes).

### T7.6 — T7 evidence (under `evidence/EXP-006/`)

- `31-t7-reopen-lab03-designer-loaded.png` — Designer after reopen: form tab titled "Form Property Lab Coupled Unload" (the Caption), Properties panel, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, toolbar clean.
- `32-t7-lab03-properties-comparison.png` — Properties panel Design group: Name `FX_FormPropertyL…`, Description empty, Caption `Form Property Lab …`, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True` (full exact values per the T7.4 store read).

### T7.7 — T7 knowledge-state updates

- **Core experiment assertion — a User-scope classic form's literal Form Caption persists across an explicit `Unload All Global Form Objects` (Form > Definition) with `Unload IDO Metadata With Forms` enabled, and all comparison Form properties remain unchanged on reopen in the same User scope:** **observed** (single controlled execution; not yet a repeatable/verified recipe).
- Reopening a previously-opened form in the Designer via the **Form menu recent-forms list** reloads it in the current editing scope with **no scope re-prompt** and without creating/modifying anything: **observed** (new, T7).
- The Designer property grid is `formpropertygrid-<id>` (xtype `formpropertygrid`), **not** matched by `Ext.ComponentQuery.query('grid')`; its store holds the full (non-truncated) property values: **observed** (new, T7; refines T4).
- `formId` is a **session-local** identifier (7 in T4, 18 in T7 for the same form) — not a persistent identity; Form Name + scope is the persistent identity: **observed** (new, T7).

### T7.8 — Stopped here (per instruction, after AC-7/AC-8)

Did **not** change Caption or any other property; did **not** change any User Preference; did **not** invoke another unload; did **not** start any new experiment or replay. `FX_FormPropertyLab01`/`FX_FormPropertyLab02` and all non-`FX_` artifacts untouched.

## T8 — AC-9 final read-only audit (2026-10-02)

Coordinator instruction: perform the **final read-only audit** for AC-9. (a) Verify **exactly one** `FX_FormPropertyLab03` exists (and no additional `FX_` form was created); (b) re-check `Unload IDO Metadata With Forms` **read-only** (must remain unchanged/checked); (c) confirm worktree changes are confined to EXP-006 artifacts (no recipe/environment/AGENTS.md change); (d) capture final evidence; (e) finalize the record with a complete acceptance-check table and an explicit Result. **No mutation** of any artifact or preference.

### T8.0 — Session recovery (SLO logout occurred between T7 and T8)

Between T7 (≈01:45) and the start of T8 (≈09:56) the browser session was **logged out** (an environmental SLO sign-out during the idle gap, not caused by the experiment). On resumption:
- Tab 0 = **"Logout Successful"** (`mingle-portal…/session/slo/signoutsuccess?tenantId=<tenant>`); Tab 1 = **"Infor OS Federation Hub Error"** (`ERR_MISSING_TENANT_OR_SESSION`, HTTP 400) — the passive WS-Fed redirect had no tenant/session to route against.
- Direct navigation to the Web Client / portal root / SSO `wsfed` all failed the same way: the SSO federation hub **requires a tenant to route authentication**, and the tenant cannot be typed into a navigation URL (the Playwright MCP substitutes secrets only for **form-field** values, not `goto` URLs — confirmed: a `?tenantId=SECRET_MONGOOSE_TENANT` nav URL kept the literal placeholder and still 403'd).
- **Recovery (supported path):** the logout page's own URL carried the tenant as a query param. It was reused **programmatically without being read or printed** (`new URLSearchParams(location.search).get('tenantId')`) to navigate to the tenant-scoped portal app (`…/<tenant>/c51080bc-…`), which routed to the **"Infor CloudIdentities — Sign In"** form. Username/Password were entered via the documented secret placeholders (`SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD`; the tenant was already in the URL, no tenant field on the form) and **Sign in** was clicked. Login succeeded → **Infor OS Portal** → Mongoose tab → config-group **Sign In** (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` pre-selected) → **Mongoose Web Client** loaded, signed in as `<username> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, toolbar clean (Save disabled).
- A portal warning banner ("The DistributionIFSContactUs group does not have any active users…") intercepted the first menu click and was dismissed before continuing.

> Observation: after an SLO logout, the interactive re-login path is the **tenant-scoped portal app URL** (which routes to the Infor CloudIdentities sign-in form). The tenant can be recovered from the logout page's own `tenantId` query param and reused via JS without exposing it; the passive SSO `wsfed`/`idp/login` endpoints do **not** present a usable login form without a tenant.

### T8.1 — Form inventory reconciliation (exactly one `FX_FormPropertyLab03`; no additions)

Opened the Web Client **Select Form** dialog (Form > Open) and queried the grid store (`grid-1136`) read-only:
- **Total records = 639** (matches the T2/T3 post-creation count; no growth).
- **`FX_`-prefixed forms = exactly 8** (matches the T2/T3 count; **no additional `FX_` form was created**):

| # | Name (`mgdata`) | Caption (`text`) |
|---|---|---|
| 1 | `FX_FormPropertyLab01` | Form Property Lab |
| 2 | **`FX_FormPropertyLab03`** | **Form Property Lab Coupled Unload** |
| 3 | `FX_FormPropertyLab02` | Form Property Lab Replay |
| 4 | `FX_ComponentLab01` | FX_ComponentLab01 |
| 5 | `FX_ComponentLab02` | FX_ComponentLab02 |
| 6 | `FX_TestBlank01` | FX_TestBlank01 |
| 7 | `FX_TestBlank02` | FX_TestBlank02 |
| 8 | `FX_VariableLab01` | FX_VariableLab01 |

- **Exactly one `FX_FormPropertyLab03`** (matched on `mgdata`; its Caption `text` is `Form Property Lab Coupled Unload`, **not** the literal name — consistent with T4/T7).
- **Independent persistence confirmation:** the inventory's Caption column shows `Form Property Lab Coupled Unload` for `FX_FormPropertyLab03` — the T4 literal Caption is present in the live form list, corroborating the T7 property-grid persistence finding from a second, independent surface.
- Visual confirmation: the dialog was filtered (Filter By = **Name**, real key events) to `FX_` → exactly the 8 rows above; then to `UserPreferences` → exactly 1 row. (evidence `33`.)

### T8.2 — `Unload IDO Metadata With Forms` re-check (read-only; unchanged)

Opened the **`UserPreferences`** form (Select Form dialog, Name filter `UserPreferences`, OK) and read the preference **without changing it**:
- **`Unload IDO Metadata With Forms` = CHECKED (enabled)** — unchanged from T5/T6.
- Form toolbar **Save = disabled** (clean; no unsaved changes).
- Closed via the form tab's **close** button (deliberately **not** OK); **no save/unsaved prompt** appeared; Web Client returned to a clean state (Save disabled, no form panel). (evidence `34`.)

### T8.3 — Worktree audit (changes confined to EXP-006 artifacts)

The worktree is **not** a git repository, so the audit was by file modification time (EXP-006 window = 2026-10-02):
- **Modified in the EXP-006 window:** `experiments/EXP-006-literal-form-caption-persistence-across-documented.md` (this record) and `evidence/EXP-006/*` (screenshots `01`–`34`).
- **NOT modified (all predate the EXP-006 window, mtime 2026-09-30):** `AGENTS.md`, `opencode.json`, `environments/current-environment.md`, every file under `recipes/` (including `recipes/forms/create-basic-form.md`), and all other `experiments/EXP-00x-*.md`.
- `evidence/playwright/` = auto-generated Playwright snapshot/console artifacts (shared across experiments, not EXP-006 knowledge content); `tools/learning-harness/` = harness runtime (coordinator/worker transcripts, sqlite) — neither is EXP-006 knowledge content.
- **Conclusion:** worktree changes are confined to EXP-006 artifacts; **no recipe, environment, or AGENTS.md file was modified.**

### T8.4 — T8 evidence (under `evidence/EXP-006/`)

- `33-t8-select-form-fx-inventory.png` — Select Form dialog filtered (Filter By = Name) to `FX_`: exactly 8 `FX_` forms, including `FX_FormPropertyLab03` with Caption `Form Property Lab Coupled Unload`.
- `34-t8-userprefs-unload-pref-checked.png` — `UserPreferences` form: `Unload IDO Metadata With Forms` **CHECKED**, toolbar Save disabled (clean); closed without saving.

### T8.5 — T8 knowledge-state updates

- After an SLO logout, re-login is via the **tenant-scoped portal app URL** → Infor CloudIdentities sign-in form; the tenant is recoverable from the logout page's `tenantId` query param and reusable via JS **without printing it**; the passive SSO `wsfed`/`idp/login` endpoints present no usable login form without a tenant; the Playwright MCP substitutes secrets for **form fields only**, not `goto` URLs: **observed** (new, T8).
- The Select Form store's record shape is `{ mgdata: <form Name>, text: <Caption>, type, leaf, id }`; the authoritative Form **Name** is `mgdata` and the **Caption** is `text` (a form's Caption can differ from its Name, e.g. `FX_FormPropertyLab03` → `Form Property Lab Coupled Unload`): **observed** (new, T8; refines T1/T2 field notes).
- The Select Form "Filter By" combo maps display→field as **Caption→`text`**, **Name→`mgdata`** (set via `combo.setValue('mgdata')`); the filter box is `textfield-1143` and requires real key events to reload the store: **observed** (new, T8; refines T1/T5).
- `FX_FormPropertyLab03` **exactly one**, `FX_` total **8**, store total **639** — re-confirmed at final audit (consistent with T2/T3): **observed** (re-confirmed).
- `Unload IDO Metadata With Forms` **CHECKED**, unchanged through the whole experiment (T5 → T6 → T8): **observed** (re-confirmed).

### T8.6 — Final acceptance-check table

| AC | Requirement | Result | Evidence |
|---|---|---|---|
| AC-1 | `FX_FormPropertyLab03` did not exist before mutation (exact + case-insensitive) | **PASS** | T1 (store scan 638, 0 matches; UI filters; positive control) — `03`–`07` |
| AC-2 | Created exactly one `FX_FormPropertyLab03` in User scope via the recipe; baseline + identity recorded | **PASS** | T2/T3 (639 records, exactly one; baseline Caption empty; ScopeType=User, ScopeName `anton.ramos@3mworks.com.ph`) — `13`–`20` |
| AC-3 | Changed **only** the Form Caption to `Form Property Lab Coupled Unload`; ordinary Save; clean state | **PASS** | T4 (single-property edit; Save; toolbar clean; Caption retained) — `21`–`24` |
| AC-4 | Closed the Form via supported UI | **PASS** | T5 (tab close; no prompt; clean) — `25` |
| AC-5 | Read (not changed) `Unload IDO Metadata With Forms`; captured the exact unload label without invoking | **PASS** | T5 (preference CHECKED, unchanged; label `Unload All Global Form Objects` captured, not invoked) — `26`–`27` |
| AC-6 | Invoked the documented unload **exactly once** via Form > Definition | **PASS** | T6 (`Unload All Global Form Objects` invoked once; completed silently; clean) — `28`–`30` |
| AC-7 | Reopened exactly `FX_FormPropertyLab03` in User scope (same ScopeName) | **PASS** | T7 (reopen via Form menu; ScopeType=User, ScopeName unchanged) — `31` |
| AC-8 | Caption persisted; all comparison properties unchanged | **PASS** | T7 (Caption `Form Property Lab Coupled Unload` persisted; Description/Version/Device Type/Form Type/Is Master unchanged) — `31`–`32` |
| AC-9 | Final read-only audit: exactly one target; preference unchanged; worktree confined to EXP-006; evidence complete | **PASS** | T8 (639 / 8 `FX_` / exactly one `FX_FormPropertyLab03`; preference CHECKED, unchanged; worktree confined; `33`–`34`) |

### T8.7 — Final Result and explicit statements

**Result: PASS.** Every acceptance check (AC-1 … AC-9) passed.

Explicit statements:
- **Exactly one `FX_FormPropertyLab03`** was created and is the **only** `FX_` artifact created or modified by this experiment; it was created in T2 and not recreated (T3). No other `FX_` form (and no non-`FX_` artifact) was created, modified, or deleted.
- **No User Preference was changed.** `Unload IDO Metadata With Forms` was read-only in T5 and T8 and remained **CHECKED (enabled)** throughout; the incidental IDO-metadata clearing it causes was explicitly permitted and is the expected effect of the T6 unload.
- **The exact unload command** rendered by the 2026.09.08 Form > Definition UI is **`Unload All Global Form Objects`** (observed, not assumed), invoked **exactly once** (T6).
- **The literal Caption `Form Property Lab Coupled Unload` persisted** across the unload + reopen (T7 property grid) and is independently present in the T8 Select Form inventory.
- **Worktree changes are confined to EXP-006 artifacts** (`experiments/EXP-006-…md` + `evidence/EXP-006/`); no recipe, environment, or AGENTS.md file was modified.
- **Knowledge trust level: `observed`.** This is a single controlled execution with persistence verification and a final audit — **not** yet a repeatable/`verified` recipe. Promotion to a Caption-persistence recipe is deferred until a repeatable re-execution (a replay) is performed and re-verified.
- **Scope held:** editing scope stayed **User** (`anton.ramos@3mworks.com.ph`) throughout; no scope change; no property other than Caption was changed; no new experiment or replay was started.

## T9 — AC-9 reconciliation & final confirmation (2026-10-02)

Coordinator instruction: reconcile and finish **AC-9 only**. Inspect the existing T8 artifacts (`33`, `34`) and the current record; determine whether T8 already completed the final browser audit (the T8 worker report was truncated in transit); if the existing artifacts prove the AC-9 browser claims, **use them and do NOT repeat the browser checks or log in again**; combine with the completed filesystem audit; finalize AC-9 + the record; re-establish the session **only if** the evidence is genuinely insufficient.

### T9.1 — Inspected existing artifacts (no browser re-check, no re-login)

- **`evidence/EXP-006/33-t8-select-form-fx-inventory.png`** (inspected): Select Form dialog, Filter By = **Name**, Filter = `FX_`, Case Sensitive / Starts With off, showing **exactly 8 rows**: `FX_VariableLab01`, `FX_TestBlank02`, `FX_TestBlank01`, `FX_ComponentLab02`, `FX_ComponentLab01`, `FX_FormPropertyLab02` (Caption "Form Property Lab Replay"), **`FX_FormPropertyLab03` (Caption "Form Property Lab Coupled Unload")**, `FX_FormPropertyLab01` (Caption "Form Property Lab"). Visually proves: exactly 8 `FX_` forms, **exactly one `FX_FormPropertyLab03`**, and the persisted Caption.
- **`evidence/EXP-006/34-t8-userprefs-unload-pref-checked.png`** (inspected): `UserPreferences` form (Behavior panel) with **`Unload IDO Metadata With Forms` CHECKED**; OK/Help present, no dirty indicator. The T8 record (T8.2) documents the toolbar **Save disabled** (clean) and that the form was **closed via tab-close with no save prompt** (no unsaved changes).
- **Current record** (inspected): Status line = EXPERIMENT PASS; T8.6 has the complete AC-1…AC-9 table (all PASS); T8.7 has the final Result + explicit statements + `observed` classification; T8.3 documents the worktree audit (only the EXP-006 record + `evidence/EXP-006/` changed; no recipe/environment/AGENTS.md/other-experiment change).

### T9.2 — Sufficiency determination

The existing T8 artifacts are **sufficient** to prove every AC-9 browser claim:
- Exactly one `FX_FormPropertyLab03` (evidence `33`).
- No additional `FX_` form created by EXP-006 — the 8 `FX_` forms are exactly the T2/T3 post-creation set (evidence `33`).
- `Unload IDO Metadata With Forms` still CHECKED/enabled, no unsaved User Preferences change (evidence `34` + T8.2 clean / close-without-prompt).

Therefore, per the instruction, **no browser re-check was performed and no re-login was done.** The completed filesystem audit (T8.3) already shows no recipe, environment, unrelated experiment, or top-level knowledge file was modified by EXP-006.

### T9.3 — AC-9 finalized; all acceptance checks pass

AC-9 is finalized on the basis of the existing T8 artifacts + the T8.3 filesystem audit. The record's AC-1…AC-9 table (T8.6) stands: **all nine acceptance checks PASS**. Knowledge classification remains **`observed`** (EXP-006 is not a replay). No Form, User Preference, recipe, or unrelated file was modified in T9. **Stopped after AC-9.**