# Playbook: Forms (wizards, components, bindings, captions, layout)

Knowledge state:
- **verified:** blank Build-from-Scratch form, Toolbox components, Name/Caption, component classes (see `recipes/`).
- **observed:** everything else here (single accepted runs, same-session UI evidence).

Forms are created in **User scope** (the Designer status bar shows `ScopeType: User / ScopeName: <operator>`).

**Group or Site scope** (when the request's final scope says so). Knowledge state: **Site Default observed** (BLD-017
FX_ServiceDesk, BLD-018 FX_ServiceDeskLogin + FX_ServiceDesk re-save; two Forms, persistence and runtime checked);
**Group unverified**. A Site save and Unload All Global Form Objects are tenant-wide: approval first.

Order: build and verify in User scope first. Then, only with the approval from the request or the operator:
1. Close the Form. Form › Definition › **Site Developer Impersonation** → "Identify Your Editing Scope" → Scope list
   (*Site Default / User / Group*) → click **Site Default** (the User field disappears) → OK → notice "You may want to
   unload all global objects…" → OK. Status bar `ScopeType: Site`.
2. Form › Definition › **Unload All Global Form Objects**.
3. Open the Form (Form menu recent list). "Warning: Form X is not locked… design anyway?" → Yes; on Save "…save
   anyway?" → Yes (BLD-017). Properties › Version shows **Site Default version**.
4. Make the change and Save. **Each scope version is its own copy:** a change made in User scope is not in the Site
   version. Check everything at Site, including Details › Event Handlers (BLD-018: handlers added in User scope after
   the first Site save were missing at Site and had to be added again).
5. **Every global object the Form uses needs its own Site version:** Web User Control Assets (each file) and global
   variables. The Form save doesn't carry them. Create each at Site (Edit › Web User Control Assets / Edit › Variable →
   + → same name → fill → OK → Save). A Site Form whose asset is missing at runtime shows
   `{"Success": false, "Message": "Error processing metadata request: path not found"}` in the page area (BLD-017,
   BLD-018).
6. Close → unload → reopen → read everything back at Site (Version, script, assets with `compare-readback.js`,
   variables Persistent/Global True).
7. **Back to User:** close the Form → Impersonation → Scope **User** → the User field comes up **empty**: type the
   operator's account (`SECRET_MONGOOSE_USERNAME` placeholder) → Tab → OK → unload. Check `ScopeType: User` and that the
   status bar's ScopeName matches the Web Client header (compare in code; don't print either).
- After a Site save, the operator's own User version can disappear or stay; it overrides the Site version for them
  only. Remove leftover User versions (approved) so the operator sees what everyone sees (`extending-existing-forms.md`
  § Rollback options).
- A Designer relaunch can inherit the last scope (BLD-017): check the status bar before any work.
- Getting a User-only Form to open at Site the first time took the operator several rounds of scope switch + unload
  (BLD-018, operator's report; the exact sequence is unverified).
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
- Page 2: pick the properties in order (Include checked). Every IDO property is pre-selected on the right; to leave
  one out (e.g. a password hash or token on a temporary admin Form), click it in the right list (`li.x-list:visible`)
  and press **`<`** (`[data-mgcompnamevalue="RemovePushButton"]`; there is a second `<` for groups) (BLD-018, observed).
- Last page: **uncheck Save Template**, which is checked by default (click its label; read `aria-checked` back).
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
- **A new Form** isn't listed in the Web Client's Select Form until the portal tab is reloaded (BLD-007, BLD-015,
  BLD-018; observed many times). Accept the beforeunload prompt.
- **Remove a User version** (factory-owned Form, or an approved one): Form › Definition › **Revert Form Definition** →
  "Warning: found customized global object(s)… remove the User version for user … of form X?" → OK. The next scope's
  version (Site/Vendor) shows again; a Form that exists **only** in User scope is gone (BLD-018, observed). Never use
  the toolbar trash (Delete Form Definition).
- **Delete data rows** (fake test data only, approved): Web Client → select the row → toolbar Delete → "Selected records
  will be permanently deleted upon Save." → OK → Save → Refresh → check the count dropped by one; stop on any other
  prompt. Save a before-readback as text first (BLD-017, BLD-018; observed).
- **Runtime check:** captions, ComboBox lists, read-only greying (joined, derived and key fields grey out), values per record `(Object n of N)`.
- **Validation:** a domain value outside the list is rejected at Save with "<value> is not a valid <caption>". Free typing is allowed until then (EXP-051).
