# Recipe: Create a Basic Build-from-Scratch Form

Status: **verified** (two successful executions — EXP-002 and EXP-002-R2 — with persistence verified across a full page reload in both; see Verification)
Category: forms
Environment: Mongoose 2026.09.08 demo (see `environments/current-environment.md`)
Source experiment: `experiments/EXP-002-create-basic-form.md`
Verification replay: `experiments/EXP-002-R2-create-basic-form-replay.md`

## Purpose

Create the simplest possible classic Mongoose form — a **Build-from-Scratch** form with no data source, no components — in **User scope**, under a given `FX_`-prefixed name.

## Preconditions

- Signed in to the portal; Mongoose app open as a portal tab; Web Client loaded (config group `..._MONGOOSE_DEM_DEFAULT`).
- Editing scope is **User** for the signed-in user (confirm via the "Identify Your Editing Scope" dialog when it appears; do not infer scope from the Site Developer role).
- The target form name does not already exist (check via Select Form dialog grid store scan).
- Dismiss any `portal-notification` banner first (`portal-notification button`) — it intercepts pointer events over the iframe.

## Steps

1. **Open the Web Designer** (separate browser tab): in the Web Client iframe, click the **Designer split button** (`mgtoolbarbutton-1126`). A new tab opens at `WSWebClient/designer/default.aspx` (no `MGForm` param when no form is loaded).
   - If "Identify Your Editing Scope" appears, confirm **User** scope for the signed-in user (OK).
2. **Start the wizard**: in the designer toolbar, click **New** (`mgtoolbarbutton-1088`, "New Form Definition"). The **"Form Wizard Selection"** dialog opens.
3. **Pick the wizard**: in the dialog select radio **New Form**, Category **Classic**, Wizard **BuildFromScratch** ("Plain form without defined components"), then OK.
4. **Fill the wizard** (`expeditor`) — it has two pages:
    - Page 1: Name: `<FX_...>` (e.g. `FX_TestBlank01`); Form Type: `BuildFromScratch`; Form Layout: `GridLeft`; Device Type: `Default`; Data Source: leave empty; Query Form / Comments: leave empty. Click **Next** (Finish is disabled on this page).
    - Page 2: **Uncheck "Save Template"** (checked by default; unchecking avoids creating a template artifact).
5. **Finish** → "Process Completed Successfully" → OK.
   - Finish **persists the form immediately**; the designer opens the form (`?MGForm=<name>`) with the Save button disabled (clean state). No further save is needed.
6. **Close** the designer tab (no prompt in clean state).

## Verification

1. In the Web Client, click **Open** (`mgtoolbarbutton-1101`) → Select Form dialog.
2. The grid is **virtualized** (~43 rows rendered). Find the target record's index in the store (`Ext.getCmp('<grid id>').store`), then scroll the `.x-grid-view` element: `scrollTop = index * rowHeight - 100`.
3. **Double-click the row** (Playwright native dblclick) to open the form. Do **not** click OK with filter text — OK activates the first/selected row, it does not filter.
4. Confirm identity/scope via **Help → About This Form**: expect Form Name = `<name>`, Version = "User for user <signed-in user>".
5. (Optional, stronger) Reopen in the Web Designer via the Designer split button; expect URL `?MGForm=<name>` and Properties: Name, Version "User version for user <user>", Device Type Default, Form Type Normal, Is Master True.

## Known pitfalls

- "Build from Scratch" is **not** in the Web Client's main Designer button flow (that flow only offers Runtime Builder categories ExtDatasource/FormBuilder/REST). It is only in the Web Designer's New → Form Wizard Selection.
- Select Form **OK activates a row** (first row if none selected) — wizard-type system forms then fail to load ("not defined as Runtime Builder"). Always double-click the intended row.
- Numeric Ext component IDs drift between sessions (e.g. `textfield-1148` → `textfield-1143`). Resolve dialog controls at runtime by container + role/text.
- `Ext.ComponentManager.each`/`.items` do not iterate in this build; use `Ext.getCmp` / `Ext.ComponentQuery`.
- Hidden Ext windows park at `top:-10000px`; check visibility with `getBoundingClientRect().y > 0`.
- The form's Caption is empty by default; the runtime form list shows the Name as the caption (fallback).
- Synthetic DOM clicks (`el.dom.click()`) do not trigger Ext **window button** handlers either (observed on the About This Form and scope dialogs) — an unclosed modal dialog leaves its mask intercepting all toolbar clicks. Use native Playwright clicks or `win.close()`.

## Evidence

EXP-002: `evidence/EXP-002/06-form-wizard-selection.png`, `08-build-from-scratch-wizard.png`, `10-process-completed.png`, `11-form-created-in-designer.png`, `13-reopened-form-runtime.png`, `14-about-this-form.png`, `15-designer-reopen-properties.png`.

EXP-002-R2: `evidence/EXP-002-R2/04-form-wizard-selection.png`, `05-build-from-scratch-selected.png`, `06-build-from-scratch-wizard.png`, `07-save-template-page.png`, `08-process-completed.png`, `09-form-created-in-designer.png`, `10-select-form-rediscovery.png`, `11-reopened-form-runtime.png`, `12-about-this-form.png`, `13-designer-reopen-properties.png`.

## Verification status

Status **verified** on the basis of two successful executions, both with persistence verified across a full portal page reload (session boundary):

- **EXP-002** (`experiments/EXP-002-create-basic-form.md`, 2026-09-30): created `FX_TestBlank01`; Select Form count 631 → 632; reopened in Web Client (About This Form: name + "User for user anton.ramos@3mworks.com.ph") and in the Web Designer (unchanged Properties).
- **EXP-002-R2** (`experiments/EXP-002-R2-create-basic-form-replay.md`, 2026-09-30): clean replay of this recipe created `FX_TestBlank02` with no rediscovery of the procedure and no recovery action affecting the mutation; Select Form count 632 → 633 (exactly one new record — no template artifact); same runtime identity/scope/version and designer Properties as EXP-002.

Applicability (do not generalize beyond this evidence): this verification applies to the observed **Mongoose 2026.09.08 demo environment** (`environments/current-environment.md`, tenant `G6R8LJ9Q4E8C2Z8Y_DEM`, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) and to **User scope** for the signed-in user `anton.ramos@3mworks.com.ph` (Site Developer role). Behavior in other environments, scopes (Site Default/Group), or product versions is not covered by this verification.

Replay notes (non-procedural): synthetic DOM clicks do not trigger Ext window button handlers (use native Playwright clicks or `win.close()`); numeric Ext component IDs drift between sessions (resolve at runtime by container + role/text); the `portal-notification` banner must be closed after a reload before interacting with the Web Client.