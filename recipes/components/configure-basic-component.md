# Recipe: Configure a Basic Component (Name / Caption)

Status: **verified** (two independent successful executions — EXP-003 and clean replay EXP-003-R2 — with persistence verified across a full page reload in both; see Verification status)
Category: components
Environment: Mongoose 2026.09.08 demo (see `environments/current-environment.md`)
Source experiments: `experiments/EXP-003-component-fundamentals.md`, `experiments/EXP-003-R2-component-fundamentals-replay.md`

## Purpose

Set the basic identifying properties of a placed native component in the Web Designer — its **Name** and **Caption** — using the Properties grid, and confirm the change actually persists.

## Preconditions

- A component is already placed on an open form and is **selected** (its properties are shown in the Properties grid). See `add-component-from-toolbox.md`.
- Editing scope is **User** for the signed-in user.
- The target is a factory `FX_`-prefixed form.

## Steps

1. **Select the component** on the canvas (single-click it) so the Properties grid shows its properties. The grid header shows `<current name> (<Type>)`.
2. **Set the Name**:
   - In the Properties grid, locate the **Name** row (under the **Design** group, `propId` `Design.Name`).
   - **Double-click its value cell** → an inline text editor opens → select-all, type the new name (e.g. `FX_TitleStatic`) → press **Enter**.
3. **Set the Caption** (the displayed text):
   - Locate the **Caption** row (`propId` `Design.Caption`).
   - **Double-click its value cell** → inline editor → type the caption (e.g. `Component Fundamentals` for a Static, `Test` for a Button) → **Enter**.
   - Use a **literal** caption. Do **not** use the adjacent button (string-resource picker) unless a string resource is intended.
4. **Save** the form (toolbar **Save**, `mgtoolbarbutton-1085`) to finalize the session.

## What happens under the hood (observed) — read this before verifying

- Each committed edit (Enter) fires a `GenerateServerEvent` POST with `eventName: "updcompprop"`, `eventSource: <itemId>`, `eventArgs: ["Design.<Prop>", <value>]` (e.g. `["Design.Name","FX_TitleStatic"]`, `["Design.Caption","Component Fundamentals"]`).
- **The edit commits to the SERVER immediately.** The in-memory `compDef` (`allComponents[<itemId>]._privateFields.compDef`) is a **stale cache** and is *not* updated by the grid edit — it still shows the old name/text until the form is reloaded. **Do not verify a Name/Caption edit by reading the local `compDef`.**
- The **Caption** becomes the component's **displayed text** (`compDef.text` after reload): a Static/label renders the caption with a **trailing colon** (`Component Fundamentals:`); a Button renders the caption as its face text (`Test`).
- **Save** (`mgtoolbarbutton-1085`) POSTs `DesignerSession/SaveChanges` with body `{ formId }` only — the changes were already streamed via `updcompprop`; Save finalizes the session and disables the Save button (clean state).

## Verification

1. **Network (authoritative, immediate):** after each Enter, confirm a `GenerateServerEvent` with `updcompprop` and the expected `["Design.<Prop>", <value>]` was sent for the component's itemId.
2. **Grid (immediate, display-only):** the Properties grid **value cell** updates right away (this reflects the store, not the model). The header `<name> (<Type>)` may **lag** and not refresh until the component is reselected (observed in EXP-003-R2) — do not rely on the header to confirm a rename.
3. **Persistence (strong):** Save → reload the designer page → reopen the form (designer **Form** menu) → read `allComponents[<itemId>]._privateFields.compDef`: `cn` equals the new Name and `text` reflects the Caption (label gets the trailing colon).
4. **Runtime (strongest):** open the form in the Web Client and confirm the component displays the Caption text.

## Known pitfalls

- **Don't trust the local `compDef` right after an edit** — it is stale. Verify via the `updcompprop` network event or after a reload.
- **Synthetic DOM clicks do not drive Ext handlers.** Open the cell editor and commit with real keyboard input (double-click to edit, `Enter` to commit); drive the Save button with a native click (`el.dom.click()` on the Save button did **not** fire `SaveChanges` in EXP-003).
- **The Caption cell editor can be a combobox** (for string resources) in some builds; type the literal value and press Enter — do not pick a resource.
- **Label captions render with a trailing colon.** If an exact no-colon string is required for a Static, that is a separate, unverified concern.
- **The `Design.Type` grid value is a display label, not the model `ctrl`.** A button shows `PushButton` in the grid (Toolbox row `Button`) while the model `ctrl` is `button`. Match on the model `ctrl` when you need the programmatic type.
- **Numeric Ext IDs drift** (e.g. `componentpropertygrid-1165`). Resolve the grid at runtime by xtype/role; find rows by `propId` in the store (`grid.store.findRecord('propId','Design.Name')`).
- Renaming does not change the **itemId** (`lb0`/`ed1`/`bt2`); the itemId is the stable key in `allComponents`.

## Evidence

EXP-003: `evidence/EXP-003/13-static-selected-properties.png`, `14-titlestatic-caption-set.png`, `19-reopened-persisted-components.png`, `20-runtime-webclient-three-components.png`.

EXP-003-R2 (clean replay): `evidence/EXP-003-R2/10-titlestatic-name-caption-set.png`, `13-reopened-persisted-components.png`, `14-runtime-webclient-three-components.png`.

## Verification status

Status **verified** on the basis of two independent successful executions (EXP-003 and clean replay EXP-003-R2, both 2026-09-30): in each run, Name and Caption were set for a Static, an Edit (Name only), and a Button; all persisted across a full page reload and rendered correctly at runtime. The replay reproduced the procedure with **no recovery**, and the `updcompprop` commit behavior, the stale-`compDef` caveat, the label trailing colon, and the Save (`SaveChanges` `{ formId }`) finalization were all identical in both runs.

Applicability (do not generalize beyond this evidence): verified in the **Mongoose 2026.09.08 demo environment** (`environments/current-environment.md`, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) in **User scope** for `anton.ramos@3mworks.com.ph` (Site Developer), on classic BuildFromScratch forms, for the Static/Edit/Button component types (Name + Caption properties). Other environments, scopes, product versions, wizards, component types, or property categories are not covered.