# Playbook: Forms (wizards, components, bindings, captions, layout)

Knowledge state:
- **verified:** blank Build-from-Scratch form, Toolbox components, Name/Caption, component classes (see `recipes/`).
- **observed:** everything else here (single accepted runs, same-session UI evidence).

Forms are created in **User scope** (the Designer status bar shows `ScopeType: User / ScopeName: <operator>`).

**Group or Site scope** (when the request's final scope says so). Knowledge state: **unverified**; no factory build has saved outside User scope. From the docs only (`docs/mongoose/guides/editing-scope-and-versions.md`, `web-designer.md`):
- it needs **Site Developer** editing permission (check Help › About This Application);
- the scope is set when the Designer opens, or later with Form › Definition › Impersonate;
- before reopening the form under the new scope, close it and refresh the IDO metadata cache. The refresh is a tenant-wide step, so it needs approval too.

Order: build and verify in User scope first. Then, only with the approval from the request or the operator, switch scope, save once, close/reopen, and check the status bar shows the new ScopeType/ScopeName before anything else. Record the steps actually seen, since these are docs-only.
Editing an existing Form the factory doesn't own is covered in `extending-existing-forms.md`. Read it first and get approval.

## Verified recipes (use directly)
- `recipes/forms/create-basic-form.md`: Build-from-Scratch form, no data source.
- `recipes/components/add-component-from-toolbox.md`: Toolbox row → click canvas.
- `recipes/components/configure-basic-component.md`: Name and Caption in the Properties grid.
- `recipes/components/apply-component-class.md`, `recipes/components/clear-component-right-click-menu.md`.

## Pick the wizard
Designer → **New** → Form Wizard Selection. The New Form / Extend Form radios plus Category and Wizard (EXP-041-R2):

**Default: Category Flex** (operator decision, 2026-10-29). Every new Form is a Flex Form unless the request says otherwise; the Flex create steps are in `portal-shell.md` §1. A Flex Form lets a web user control fill the form width; a Normal (Classic) form gave a fixed frame of about 730×540 px (BLD-002). The Classic rows below apply only when the request asks for Classic, or when the operator approves Classic because the needed wizard has no Flex equivalent. Whether a Flex category offers a data (grid + detail) wizard is **unverified**: check the Wizard list once and report what it shows.

| Need | Category / Wizard | Notes |
|---|---|---|
| Blank canvas, e.g. a portal shell or a host for a web user control | Classic / BuildFromScratch | recipe verified |
| Grid + detail on an IDO | Classic / **Multi-View** (Data Source = IDO) | the main route for data forms (EXP-041-R3, 045, 050, 072, 137) |
| New table + IDO (+ optional form) | NewData / Maintenance | see data-layer.md. Answer No to Create Form, then use Multi-View |
| Grid-only (for charts) | Classic grid wizard | see dashboards-and-charts.md (EXP-097) |

Multi-View wizard facts:
- **Name** combobox: **one plain fill**. Key-event typing leaves it uncommitted, so "Value is required for Name" (EXP-041-R2/R3).
- Page 2: pick the properties in order (Include checked). **Uncheck Save Template**, which is checked by default.
- Finish gives "Process Completed Successfully". The Form opens in the Designer, clean, with no Save needed.
- Re-running it on an existing name asks "Form X already exists--replace it?" **twice** (page-1 Next and after Finish). Answer promptly: a prompt left open times out (EXP-082).
- What it generates (EXP-050, 072, 082):
  - Domain-backed properties become **ComboBoxes**.
  - Class defaults pre-fill at runtime (Cost `0.00`).
  - AUTONUMBER shows the next number.
  - Binary properties become a plain Edit that shows nothing. Fix it as described under "Show a picture".
- The Multi-View wizard **sees new IDO properties without an unload**. The Designer binding picker does not (see data-layer.md).

## Select and edit components in the Designer
- A canvas click on a label is caught by the selection adorner. Use **Details › Components grid → Expand → click the row** (EXP-045, 137).
- Properties grid: double-click the value cell, type, then **Enter/Tab** to commit. Each commit streams to the server (`updcompprop`). The local model is stale until a reopen.
- **Geometry:**
  - Toolbox drops produce oversized defaults. Set Layout › **Size** `W; H` and **Location** `Top; Left` explicitly afterwards (Char units) (EXP-062-R4).
  - Standard Static `20; 1`, Edit `37.05; 2`; row spacing is about 2.25.
  - Form canvas default `69; 21`.
  - Place new controls in free areas inside the form rectangle. Read the neighbours' Location first (EXP-076).
- **Type change:**
  - Changing Type in Properties keeps the name and binding.
  - The grid label stays stale until a reopen.
  - Some properties (e.g. **No Colon**) exist only for certain types (Static) (EXP-084).
- **Delete a component:** use the Components-grid **trash** button, which confirms with the component name.
  **Never** use the Designer top-toolbar trash icon. That is **Delete Form Definition**, and Yes has default focus (EXP-062-R2 near miss).
- **Binding:** Binding Type Property, Binding `object.<Property>`.
  If the property is missing from the picker, the metadata needs **Unload All Global Form Objects** in both the Web Client and the Designer. That is tenant-wide, so ask first (EXP-062-R2, 076).
- **Grid columns:** select FormCollectionGrid → **Edit Grid Columns** icon (top-left of the canvas grid) → New (adds a row after the selected one) → set the binding → OK. OK gives no visible response (EXP-068-R2).
- New components get Tab 0. Set the tab order when it matters.

## Captions via string resources (repeatable, observed 4×)
1. Select the Static → Caption value cell → **type the string ID first**, e.g. `FX_sOrderTotal` → Tab.
   Clicking the ellipsis on a blank caption gives "No object name given." (EXP-076).
2. Click the Caption **ellipsis** → "String FX_sX does not exist. Create it?" → **Yes**.
   Answering No times out and creates nothing (EXP-045).
3. The String dialog (OK/Help only) pre-fills e.g. "FX_s Order Total". Replace it with the real text, then **Tab/Enter to commit the cell** before OK. Without the commit, OK can store the default.
4. Designer **Save**. The canvas shows raw IDs until the Form is **closed and reopened**, then resolves.
5. Verify in Edit › String (Global Objects, read-only lookup). The Strings filter needs select-all and retyping.

Literal captions (no string) are fine for quick builds. Statics render a trailing colon.

## Show a picture (Binary property)
Use a **Static** bound to `object.<BinaryProp>`, sized e.g. `20; 9` or `37.05; 9` (EXP-062-R4, 084). Set:
- **No Colon** True;
- **Image and Text** = ImageOnly.

For a Multi-View form:
1. Delete the generated picture Static label.
2. Retype the generated picture Edit to Static.
3. Set its height, then the two properties above.

Import button (EXP-062-R4):
- A Button with a handler `ACTION(Import) COMPONENT(<PictureStatic>)` (Binary Value Action).
- The component selector reads the **saved** definition, so Save before configuring it.

## Save, reopen, verify
- Designer Save gives a toast such as "Form [X] and global object(s) were saved."
- **Reopen in the Designer:** use the **Form menu recent list** or the toolbar **Open** (`data-mgcompname="openButton"`). The Designer Form menu has no Open item. The Designer Select Form may miss a form created in the same session (EXP-072).
- **Closing a dirty form** asks "Do you want to save the form definition?" with Yes (default focus), No, Cancel. Read the labels before clicking.
- **Runtime:** a Web Client Form opened before a Designer Save keeps the old definition. Close it and reopen it, then **Refresh** or F4 (EXP-068-R2).
- **Runtime check:** captions, ComboBox lists, read-only greying (joined, derived and key fields grey out), values per record `(Object n of N)`.
- **Validation:** a domain value outside the list is rejected at Save with "<value> is not a valid <caption>". Free typing is allowed until then (EXP-051).
