# EXP-002 — Create a Basic Build-from-Scratch Form

Status: complete
Date: 2026-09-30
Mode: LEARNING MODE — one controlled mutation (creation of `FX_TestBlank01`, User scope). No other artifact was created, modified, or deleted.

## Objective

Create the simplest possible classic **Build-from-Scratch** form named `FX_TestBlank01` in the Mongoose 2026.09.08 demo environment (User scope), then verify:
- the form appears in the form list after a full page reload (crossed session boundary),
- it can be reopened in the Web Client,
- its identity/scope/version (Help → About This Form),
- its definition can be reloaded in the Web Designer from the server.

Out of scope (per task): IDO/collection, components, variables, handlers, scripts, custom strings, Explorer entries, Property/Component Classes, validators, Portal metadata. No recipe marked `verified` (verification deferred to a clean replay with `FX_TestBlank02`).

## Starting state

- Environment confirmed matching EXP-001: Portal 2026.09.00, Mongoose Web Client/DB 2026.09.08, Ext 5.1.2.748, user `anton.ramos@3mworks.com.ph`, Mongoose role **Site Developer**, scope badge DEM.
- Editing permission confirmed via About dialog ("Currently logged in as anton.ramos@3mworks.com.ph, Site Developer").
- Editing scope confirmed: **User**, scope target `anton.ramos@3mworks.com.ph` (not inferred from the Site Developer permission).
- Existence check: `FX_TestBlank01` did **not** exist — Select Form grid scanned, 631 records, zero `FX_*` entries (only 7 G6R* tenant forms + system forms).

## Method

1. Confirmed environment/permission/scope (About dialog, editing-scope dialog).
2. Existence check for `FX_TestBlank01` via Select Form dialog (grid store scan).
3. Explored creation entry points:
   - Web Client main Designer button (`mgtoolbarbutton-1125`) → "Identify Your Editing Scope" → "Runtime Builder Selection" (categories ExtDatasource/FormBuilder/REST only — **no Build from Scratch here**).
   - Web Designer (new browser tab, via Designer split button `mgtoolbarbutton-1126`) → toolbar **New** (`mgtoolbarbutton-1088`, "New Form Definition") → **"Form Wizard Selection"** dialog → radio **New Form** → Category **Classic** → Wizard **BuildFromScratch** ("Plain form without defined components").
4. Created the form via the BuildFromScratch wizard.
5. Verified the created form in the designer (URL param, Properties).
6. Closed the form tab and the designer tab; reloaded the portal page (crossed session boundary).
7. Rediscovered `FX_TestBlank01` via the Select Form dialog in the reloaded Web Client; opened it by double-clicking its row.
8. Verified identity/scope/version via Help → About This Form.
9. Reopened the form in the Web Designer (Designer split button) to confirm the definition loads from the server; checked Properties; closed the designer tab without saving.
10. Captured evidence screenshots under `evidence/EXP-002/`.

## Observations

### Creation entry point (observed)
- "Build from Scratch" is **not** reachable from the Web Client's main Designer button flow (that flow only offers Runtime Builder categories ExtDatasource/FormBuilder/REST).
- It is reachable only via the **Web Designer** (separate browser tab): toolbar **New** → **Form Wizard Selection** dialog.
- Form Wizard Selection dialog: radio "New Form" (vs other options), Category combo (**Classic** selected), Wizard combo (**BuildFromScratch** = "Plain form without defined components").

### BuildFromScratch wizard (observed)
- Wizard container `expeditor-1287` (numeric ID, session-dependent).
- Fields: **Name** (`mgcombo-1294`), **Form Type** (`mgcombo-1308`, value BuildFromScratch), **Form Layout** (`mgcombo-1313`, GridLeft), **Device Type** (`mgcombo-1318`, Default), **Data Source** (`mgcombo-1323`, left empty), Query Form (`mgedit-1328`), Comments (`mgedit-1333`).
- A **"Save Template"** checkbox (checked by default) was **unchecked** — we did not want to create a reusable template.
- Navigation: Back/Next/Finish/Cancel/Help (`mgformbutton-1529..1533`).
- **Finish** → dialog "Process Completed Successfully" (`ext-comp-1009`, OK `button-1013`).
- **Finish persists the form automatically**: after creation the designer showed the form with `?MGForm=FX_TestBlank01` in the URL and the Save toolbar button (`mgtoolbarbutton-1085`) was **disabled** (clean state — nothing further to save).

### Created form properties (observed, designer)
- Name: `FX_TestBlank01`
- Version: "User version for user anton.ramos@3mworks.com.ph"
- Device Type: Default
- Form Type: **Normal**
- Is Master: True
- Caption: (empty)

### Persistence / rediscovery (observed)
- After closing the designer and a **full portal page reload** (new session), the Select Form grid count went **631 → 632** and contained exactly one new record: `FX_TestBlank01` (mgdata `FX_TestBlank01`, id `extModel214-16`).
- The runtime form list shows Caption = `FX_TestBlank01` even though the designer Caption property is empty (the list falls back to the form name).
- The Select Form grid is **virtualized** (~43 rows rendered at a time); the scrollable element is the `.x-grid-view` node (e.g. `gridview-1140`), scrolled via `scrollTop = index * rowHeight - 100`. `Ext.getCmp(grid).getViewport` is not a function in this build.
- Double-clicking the row (Playwright native dblclick) opened the form in the Web Client: URL gained `?favoriteContext=FX_TestBlank01`, the Actions menu appeared, no errors.
- **Help → About This Form** (menu item `helpAboutThisFormMenu`; handler invoked as `item.scope[item.itemId.replace(/Menu$/,'Click')]()`):
  - Form Name: `FX_TestBlank01`
  - Version: "User for user anton.ramos@3mworks.com.ph"
  - Original Caption: `FX_TestBlank01`
  - No parent form; current collection is primary collection; no permanent/user/Ido filters.
- Reopening in the **Web Designer** (Designer split button → scope dialog OK) loaded the definition from the server: URL `designer/default.aspx?MGForm=FX_TestBlank01`, Properties identical to creation time (Name/Version/Device Type/Form Type/Is Master). Designer tab closed without saving (clean state, no prompt).

### Failures and corrections (observed)
1. **Select Form OK ≠ filter.** Clicking OK with text in the Filter box did **not** filter the grid; it **activated the first row** (`WSFormWizardNewDataXmlToIdo`), producing: "Unable to load form WSFormWizardNewDataXmlToIdo. Form [WSFormWizardNewDataXmlToIdo] is not defined as Runtime Builder... The form ... was not found." Recovery: dismissed the error (OK), reopened the dialog, scrolled the virtualized grid to the target row, and double-clicked it.
2. **`portal-notification` banner intercepts pointer events.** After the page reload, the Infor OS notification banner ("The DistributionIFSContactUs group does not have any active users...") covered the iframe and blocked toolbar clicks. Recovery: close it via `portal-notification button` before interacting with the Web Client.
3. **Numeric Ext IDs drift between sessions.** The Select Form dialog controls were `textfield-1148`/`grid-1141`/`ext-comp-1140` in the first session and `textfield-1143`/`grid-1136`/`ext-comp-1135` after reload. Resolve control IDs at runtime (by dialog container + role/text), do not hard-code them.
4. `Ext.ComponentManager.each`/`.items` do not iterate in this build (manager uses `all`); use `Ext.getCmp(id)` / `Ext.ComponentQuery` instead.

## Evidence

Screenshots under `evidence/EXP-002/`:
- `01-about-permission.png` — About dialog (user, Site Developer role).
- `02-select-form-existence-check.png` — Select Form grid before creation (no FX_*).
- `03-editing-scope-dialog.png` — Identify Your Editing Scope (User / anton.ramos@3mworks.com.ph).
- `04-runtime-builder-selection.png` — Web Client Designer flow (no Build from Scratch here).
- `05-designer-scope-dialog.png` — Web Designer scope dialog.
- `06-form-wizard-selection.png` — Form Wizard Selection dialog (New Form / Classic / BuildFromScratch).
- `07-build-from-scratch-selected.png` — BuildFromScratch wizard selected.
- `08-build-from-scratch-wizard.png` — Wizard page (Name FX_TestBlank01, Form Type BuildFromScratch, Layout GridLeft, Device Default).
- `09-save-template-page.png` — Save Template checkbox (unchecked).
- `10-process-completed.png` — "Process Completed Successfully".
- `11-form-created-in-designer.png` — Form open in designer, Properties (Name/Version/Device/Form Type/Is Master).
- `12-error-first-row-activation.png` — Error from OK activating first row (WSFormWizardNewDataXmlToIdo).
- `13-reopened-form-runtime.png` — FX_TestBlank01 reopened in Web Client after reload.
- `14-about-this-form.png` — About This Form (name + User version for anton.ramos@3mworks.com.ph).
- `15-designer-reopen-properties.png` — Designer reload of the definition, Properties unchanged.

Playwright snapshots/console logs: `evidence/playwright/page-*.yml`.

## Risks / caveats

- Creation via the wizard is a **single Finish click** that persists immediately; there is no separate save step and no undo. Name the form deliberately (`FX_` prefix) before Finish.
- The "Save Template" checkbox is **checked by default** — leaving it on would also create a reusable template artifact.
- The Select Form dialog's OK button activates a row; never rely on it to apply the filter text.
- The portal notification banner can silently block all iframe interactions after a reload.
- Wizard-type system forms (e.g. `WSFormWizardNewDataXmlToIdo`) fail to load at runtime; they are design-time only.

## Unknowns

- Whether the unchecked "Save Template" default is configurable (site setting) or always default-on.
- What the other Form Wizard Selection radio options (besides "New Form") and non-Classic categories offer (not explored — out of scope).
- Whether a Build-from-Scratch form with an empty Caption always falls back to its Name in the runtime list (observed once).
- Whether repeated open/close of the designer without saving accumulates any transient user-version records on the server (clean state observed locally; server side not inspected).

## Result

`FX_TestBlank01` was created as a classic Build-from-Scratch form in **User scope** for `anton.ramos@3mworks.com.ph`, and persistence was verified across a full page reload:
- present in the Select Form list (631 → 632 records),
- reopenable in the Web Client (About This Form: name + "User for user anton.ramos@3mworks.com.ph"),
- definition reloadable in the Web Designer from the server with unchanged Properties.

Knowledge states:
- Creation procedure + persistence behavior: **observed** (one successful execution, persistence verified by close/reopen). Not yet **verified** — a clean repeatable replay with `FX_TestBlank02` is required before the recipe may be marked verified.
- No **superseded** items.

Recipe produced: `recipes/forms/create-basic-form.md` (status: **observed**).

Next (suggested, not done): EXP-003 — clean replay of the recipe to create `FX_TestBlank02` from scratch (no recovery steps), to promote the recipe to **verified**; optionally compare `FX_TestBlank01` vs `FX_TestBlank02` to confirm determinism.