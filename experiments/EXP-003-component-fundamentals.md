# EXP-003 — Component Fundamentals: Place and Configure Native Components

Status: complete
Date: 2026-09-30
Mode: LEARNING MODE — one controlled mutation (creation of `FX_ComponentLab01` + three native components on it, User scope). No other artifact was created, modified, or deleted. `FX_TestBlank01` / `FX_TestBlank02` were not touched.

## Objective

On a fresh Build-from-Scratch form `FX_ComponentLab01`, create three **native, non-data-bound** components and verify they persist across a session boundary:

- `FX_TitleStatic` — **Static** (label), Caption `Component Fundamentals`
- `FX_ValueEdit` — **Edit**, unbound
- `FX_TestButton` — **Button**, Caption `Test`, **no** event handler

Also learn the mechanics of: placing a component from the Toolbox, the generated-name convention, and editing a component's properties (Name, Caption) in the Properties grid — including *where* those edits actually commit.

Out of scope (per task): IDO/collection, data binding, variables, event handlers, scripts, validators, Property/Component Classes, string resources, subforms, layout containers. No recipe marked `verified` (single execution; verification deferred to a clean replay).

## Starting state

- Environment confirmed matching EXP-002 / EXP-002-R2: Mongoose Web Client/DB **2026.09.08**, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Portal 2026.09.00, user `anton.ramos@3mworks.com.ph`, role **Site Developer**, scope badge DEM.
- Editing scope confirmed **User** for `anton.ramos@3mworks.com.ph` (editing-scope dialog, not inferred from role).
- Existence check: `FX_ComponentLab01` did **not** exist (Select Form grid scan, 633 records, only `FX_TestBlank01`/`FX_TestBlank02` among `FX_*`).
- `FX_ComponentLab01` was created first via the **verified** `recipes/forms/create-basic-form.md` procedure (BuildFromScratch, Classic, Save Template unchecked) — evidence `01`–`10`. The form opened in the Web Designer with the Save button disabled (clean state).

## Method

1. Created `FX_ComponentLab01` (verified recipe) — blank form in the designer.
2. **Placed a Static**: clicked **Static** in the Toolbox tree, then single-clicked the canvas. Component appeared with a generated name.
3. Selected the component; in the **Properties** grid, edited **Name** → `FX_TitleStatic` and **Caption** → `Component Fundamentals` (double-click value cell → type → Enter).
4. **Placed an Edit** (Toolbox → Edit → canvas click); renamed to `FX_ValueEdit`. Left unbound.
5. **Placed a Button** (Toolbox → Button → canvas click); renamed to `FX_TestButton`; set **Caption** → `Test`. Added **no** event handler.
6. **Saved** (toolbar Save).
7. **Crossed the session boundary**: full designer page reload, then reopened the form from the designer **Form** menu.
8. Verified the three persisted components' metadata in the designer (name, type, position, caption).
9. **Runtime check**: opened `FX_ComponentLab01` in the Web Client (Form → Open → Select Form), visually confirmed all three components render; confirmed identity via Help → About This Form.
10. Captured evidence under `evidence/EXP-003/`.

## Observations

### Placing a component from the Toolbox (observed)
- The **Toolbox** is a tree (`toolbox-1109`, numeric ID) of component types under "Framework Components" (Pointer, Barcode, Button, …, Static, Edit, …).
- To place: **click the type row** in the Toolbox, then **single-click an empty spot on the design canvas**. The component is dropped at the click point.
- On placement the component is **auto-selected** and the Properties grid populates for it.
- The placed component receives a **generated name** and a short **itemId**:
  - Static → itemId `lb0`, generated name `static1_USER`, `ctrl` `label` (xtype `mgimagelabel`)
  - Edit → itemId `ed1`, generated name `edit1_USER`, `ctrl` `edit`
  - Button → itemId `bt2`, generated name `button1_USER`, `ctrl` `button`
- **Generated-name convention (observed):** `<typePrefix><perTypeCounter>_USER` — `static1_USER`, `edit1_USER`, `button1_USER`. The counter is per-type (first Static = `static1`, first Edit = `edit1`, first Button = `button1`). The `_USER` suffix reflects the User editing scope.
- Placement also sets a default size per type (Static 160×18, Edit 296×36, Button 114×34) and a form-relative position from the click point.

### Component data model (observed)
- The active designer surface is a `formpaneldesigner-<n>` component. Its `allComponents` map is keyed by **itemId** (`lb0`, `ed1`, `bt2`).
- Each component's definition lives at `allComponents[<itemId>]._privateFields.compDef` with fields: `cn` (name), `ctrl` (type: `label`/`edit`/`button`), `id` (itemId), `L`/`T`/`W`/`H` (form-relative left/top/width/height), `text` (displayed text), `bind`, `albl`, `ttip`, etc.
- Unbound components carry `bind = { Type: 2, ColID: "FM", Name: <itemId> }` (Type 2 / FormMaster = not bound to a data column).

### Editing properties in the Properties grid (observed) — and where it commits
- The **Properties** panel is a `componentpropertygrid-<n>` (tree grid, store `FormComponentProperties`, controller `Designer.view.properties.ComponentPropertyGridController`). Rows are keyed by `propId` (`Design.Name`, `Design.Description`, `Design.Caption`, `Design.Type`, `Design.Shared`, …) across 3 columns: property name (`disp`), value (`value`), and a button column.
- To edit: **double-click the value cell** → an inline editor opens (a text field for Name/Caption) → type → **Enter**.
- **CRITICAL — the edit commits to the SERVER, not the local model.** Each committed edit fires a `GenerateServerEvent` POST (`WSWebClient/Designer/Form/GenerateServerEvent`) with `eventName: "updcompprop"`, `eventSource: <itemId>`, `eventArgs: ["Design.<Prop>", <value>]`. Component placement fires `eventName: "newcomp"` with `eventArgs: [<typeCode>,0,0,0,<x>,<y>,null,"<TypeName>"]` (typeCode observed: Static 0, Edit 1, Button 8).
- The **local `compDef` is a stale cache**: after editing Name/Caption in the grid, `compDef.cn` / `compDef.text` still held the old values (`static1_USER`, `:`) until the form was reloaded. The grid does **not** call the designer's `onUpdateComponentDef` (which is the method that rewrites `compDef` by removing/re-creating the component). So **do not verify a property edit by reading the local `compDef`** — verify via the network event or by reloading.
- The **Save** button (`mgtoolbarbutton-1085`) POSTs `DesignerSession/SaveChanges` with body `{ formId }` only — the actual changes were already streamed to the server via the `GenerateServerEvent` calls; Save finalizes the session. After a successful save the Save button becomes **disabled** (clean state).

### Caption → displayed text (observed)
- Setting a component's **Caption** controls its **displayed text**:
  - Static/label: Caption `Component Fundamentals` rendered as `Component Fundamentals:` (a **trailing colon** is appended to label captions).
  - Button: Caption `Test` rendered as the button face text `Test`.
- The displayed text is stored in `compDef.text` after reload.

### Persistence / rediscovery (observed)
- After a **full designer page reload** (new session), the `?MGForm=` URL param was **dropped** and the designer settled on an empty surface. The form was reopened via the designer **Form** menu (which lists `FX_ComponentLab01` alongside `FX_TestBlank01/02` and the tenant forms) → the "Identify Your Editing Scope" dialog (User) → OK.
- On reopen, all three components persisted with correct metadata:
  - `lb0` `FX_TitleStatic` (label) at (142,199) 160×18, text `Component Fundamentals:`
  - `ed1` `FX_ValueEdit` (edit) at (142,299) 296×36, unbound
  - `bt2` `FX_TestButton` (button) at (142,380) 114×34, text `Test`
- The designer reused the surface id `formpaneldesigner-1382` for the reopened form.

### Runtime (observed)
- Opened in the Web Client via **Form → Open** → Select Form dialog (filter **by Name** = `FX_ComponentLab01`; the default filter field is **Caption**, which does not match a name-only form). The form opened with **no data source and no error**.
- All three components rendered: label `Component Fundamentals:`, an empty Edit textbox, and a `Test` button.
- **Help → About This Form**: Form Name `FX_ComponentLab01`; Version `User for user anton.ramos@3mworks.com.ph`; Original Caption `FX_ComponentLab01` (Name fallback, form Caption empty); no parent form; primary collection; no permanent/user/Ido filters.

### Failures and corrections (observed)
1. **Synthetic DOM click does not trigger the Save toolbar button.** `saveBtn.el.dom.click()` produced no `SaveChanges` request. A **native** click (Playwright `mouse.click` at the button's coordinates, or the click tool) did. Consistent with the EXP-002-R2 finding that synthetic DOM events do not drive Ext handlers (there for window buttons, here for a toolbar button).
2. **`?MGForm=` param is not a reliable opener on a cold designer load.** Navigating to `designer/default.aspx?MGForm=FX_ComponentLab01` on a fresh session loaded an empty designer (param dropped). The reliable opener is the designer **Form** menu.
3. **Select Form default filter is Caption, not Name.** Filtering by the form name required switching the "Filter By" combo from **Caption** to **Name** first.
4. **Local `compDef` misleads.** Reading `compDef.cn`/`compDef.text` right after a grid edit shows stale values; the authoritative state is the server (see `updcompprop` events) and is only reflected locally after a reload.

## Evidence

Screenshots under `evidence/EXP-003/`:
- `01-about-permission.png` — About dialog (user, Site Developer role).
- `02-select-form-existence-check.png` — Select Form before creation (no `FX_ComponentLab01`).
- `03-editing-scope-dialog.png` — Identify Your Editing Scope (User / anton.ramos@3mworks.com.ph).
- `04-form-wizard-selection.png` — Form Wizard Selection (New Form / Classic / BuildFromScratch).
- `05-build-from-scratch-selected.png` — BuildFromScratch selected.
- `06-build-from-scratch-wizard.png` — Wizard page 1 (Name FX_ComponentLab01).
- `07-save-template-page.png` / `08-save-template-unchecked.png` — Save Template unchecked.
- `09-process-completed.png` — "Process Completed Successfully".
- `10-blank-form-in-designer.png` — Blank form in the designer.
- `11-toolbox-static-selected.png` — Static selected in the Toolbox.
- `12-static-placed-generated-name.png` — Static placed, generated name `static1_USER`.
- `13-static-selected-properties.png` — Static selected, Properties grid.
- `14-titlestatic-caption-set.png` — FX_TitleStatic Name + Caption set.
- `15-edit-placed-generated-name.png` — Edit placed, generated name `edit1_USER`.
- `16-button-placed-generated-name.png` — Button placed, generated name `button1_USER`.
- `17-all-three-components-placed.png` — All three components on the canvas.
- `18-form-saved-clean-state.png` — After Save (Save disabled, clean state).
- `19-reopened-persisted-components.png` — Reopened after reload; three components persisted.
- `20-runtime-webclient-three-components.png` — Runtime in Web Client (label, edit, Test button).
- `21-about-this-form.png` — About This Form (name + User version).

Playwright snapshots/console logs: `evidence/playwright/page-*.yml`, `console-*.log`.

## Risks / caveats

- A property-grid edit is **streamed to the server immediately** on commit (Enter); there is no local "pending" state to lose, but there is also no undo of the server-side change from the grid. The toolbar **Undo** is disabled until a change is made in-session.
- The generated `_USER` names are overwritten the moment you rename; if you skip renaming, the form keeps `static1_USER`/`edit1_USER`/`button1_USER`.
- Label captions render with a trailing colon; if an exact string (no colon) is required for a Static, that is a separate concern (not addressed here).
- The `?MGForm=` URL param should not be relied on to open a form in a cold designer session.

## Unknowns

- The full set of `newcomp` `typeCode` values (only Static 0, Edit 1, Button 8 observed).
- Whether the trailing colon on label captions is configurable (site setting / property) or fixed.
- Whether `onUpdateComponentDef` (the local `compDef` rewriter) is ever invoked by normal grid editing in other property categories (Appearance/Behavior/Data Source), or only for structural changes.
- Whether the per-type generated-name counter is scoped per-form, per-session, or per-scope (only first-of-each-type observed).

## Result

`FX_ComponentLab01` was created and populated with three native, non-data-bound components — `FX_TitleStatic` (Static, Caption `Component Fundamentals`), `FX_ValueEdit` (Edit, unbound), `FX_TestButton` (Button, Caption `Test`, no handler) — and **persistence was verified across a full page reload**: all three survived with correct names, types, positions, and captions, and all three render at runtime in the Web Client.

The central learning: **Properties-grid edits commit to the server via `GenerateServerEvent` (`updcompprop`/`newcomp`) immediately on Enter; the in-memory `compDef` is a stale cache that only catches up on reload.** Save (`SaveChanges`) merely finalizes the already-streamed session.

Knowledge states:
- Component placement + property editing + persistence behavior: **observed** (one successful execution, persistence verified by reload/reopen + runtime render). Not yet **verified** — a clean repeatable replay is required before the recipes may be marked verified.
- No **superseded** items.

Recipes produced (status: **observed**):
- `recipes/components/add-component-from-toolbox.md`
- `recipes/components/configure-basic-component.md`

Next (suggested, not done): EXP-003-R2 — clean replay of both component recipes (place + configure each of the three component types from scratch, no recovery) to promote them to **verified**; optionally confirm the generated-name counter and the label-colon behavior are deterministic.