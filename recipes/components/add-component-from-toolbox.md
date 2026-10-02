# Recipe: Add a Native Component from the Toolbox

Status: **verified** (two independent successful executions — EXP-003 and clean replay EXP-003-R2 — with persistence verified across a full page reload in both; see Verification status)
Category: components
Environment: Mongoose 2026.09.08 demo (see `environments/current-environment.md`)
Source experiments: `experiments/EXP-003-component-fundamentals.md`, `experiments/EXP-003-R2-component-fundamentals-replay.md`

## Purpose

Place a single **native, non-data-bound** component (e.g. Static, Edit, Button) onto an open classic form in the Web Designer, by selecting its type in the Toolbox and clicking the canvas.

## Preconditions

- A form is already open in the **Web Designer** (e.g. created via `recipes/forms/create-basic-form.md`), with the design canvas visible and the **Toolbox** panel expanded.
- Editing scope is **User** for the signed-in user (confirm via the "Identify Your Editing Scope" dialog if it appears).
- The form is in a clean or in-progress state; you are allowed to modify it (it is a factory `FX_`-prefixed form).

## Steps

1. **Select the component type** in the **Toolbox** tree (under "Framework Components"): click the row for the desired type (e.g. **Static**, **Edit**, **Button**).
2. **Place it**: single-click an empty spot on the design canvas. The component is dropped at the click point and becomes the selected component; the **Properties** grid populates for it.
3. **Note the generated identity** (for renaming / referencing):
   - The component gets a short **itemId** (e.g. `lb0`, `ed1`, `bt2`) and a **generated name** of the form `<typePrefix><perTypeCounter>_USER` (e.g. `static1_USER`, `edit1_USER`, `button1_USER`).
   - Read these from the Properties grid **Name** row, or from the designer model: `Ext.getCmp('<formpaneldesigner id>').allComponents[<itemId>]._privateFields.compDef` → `cn` (name), `ctrl` (type), `id` (itemId), `L/T/W/H` (position/size).
4. (Optional) Repeat steps 1–3 for additional components. Place them at distinct canvas points so they do not overlap.

## What happens under the hood (observed)

- Placement fires a `GenerateServerEvent` POST (`WSWebClient/Designer/Form/GenerateServerEvent`) with `eventName: "newcomp"`, `eventArgs: [<typeCode>,0,0,0,<x>,<y>,null,"<TypeName>"]` where `<x>/<y>` are form-relative and `<TypeName>` is the Toolbox name (Static/Edit/Button). Observed typeCodes: Static 0, Edit 1, Button 8.
- The component is **not data-bound** by default: `compDef.bind = { Type: 2, ColID: "FM", Name: <itemId> }`.

## Verification

1. Immediately after placement, confirm the component is selected and the Properties grid shows its **Name** (the generated `<...>_USER` name) and **Type**.
2. Confirm the server event was sent: a `newcomp` `GenerateServerEvent` request appears in the network log for the new itemId.
3. (Stronger) **Save** the form, reload the designer page, reopen the form (designer **Form** menu), and confirm the component is present in `allComponents` with the expected `ctrl` and position.

## Known pitfalls

- **Click the canvas, not the Toolbox, to place.** Selecting the type only arms the drop; the component is created by the subsequent canvas click.
- **Synthetic DOM clicks do not drive Ext handlers.** Use native Playwright clicks (the click tool or `mouse.click` at coordinates) for Toolbox rows and canvas placement; `el.dom.click()` may not register.
- **Numeric Ext IDs drift between sessions** (e.g. `toolbox-1109`, `formpaneldesigner-1382`). Resolve the designer surface and Toolbox at runtime by xtype/role, not by hard-coded numeric id.
- The generated name is a placeholder; rename it (see `configure-basic-component.md`) or it stays `<typePrefix><n>_USER`.
- Placing a component makes the form **dirty** (Save button becomes enabled). Save to persist.

## Evidence

EXP-003: `evidence/EXP-003/11-toolbox-static-selected.png`, `12-static-placed-generated-name.png`, `15-edit-placed-generated-name.png`, `16-button-placed-generated-name.png`, `17-all-three-components-placed.png`.

EXP-003-R2 (clean replay): `evidence/EXP-003-R2/09-static-placed-generated-name.png`, `11-all-three-components-placed.png`, `13-reopened-persisted-components.png`.

## Verification status

Status **verified** on the basis of two independent successful executions (EXP-003 and clean replay EXP-003-R2, both 2026-09-30): in each run, three component types (Static, Edit, Button) were each placed from the Toolbox and all three persisted across a full page reload with correct type, size, and position. The replay reproduced the procedure with **no recovery**, and the generated names (`static1_USER`/`edit1_USER`/`button1_USER`), itemIds (`lb0`/`ed1`/`bt2`), default sizes (160×18 / 296×36 / 114×34), and `newcomp` typeCodes (0/1/8) were **identical** in both runs.

Applicability (do not generalize beyond this evidence): verified in the **Mongoose 2026.09.08 demo environment** (`environments/current-environment.md`, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) in **User scope** for `anton.ramos@3mworks.com.ph` (Site Developer), on classic BuildFromScratch forms, for the Static/Edit/Button component types. Other environments, scopes, product versions, wizards, or component types are not covered.