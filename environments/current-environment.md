# Current Mongoose Environment

base_url: https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/
environment_type: demo
tenant: G6R8LJ9Q4E8C2Z8Y_DEM
scope_indicator: DEM (portal `<portal-environment-tag>` amber badge, display-only, no scope switcher)

Last fingerprinted: 2026-09-30 (EXP-002)

## Product / versions (observed)

| Component | Version | Source |
|---|---|---|
| Infor OS Portal (shell) | 2026.09.00 (20260724-165348, 20260724-164130, 1060, 1578, 726) | Portal About dialog |
| inforOSPortalVersion / inforWorkspaceVersion | 2026.09.00 | Web Client iframe URL params |
| IDS | 1.16.22 | Portal About dialog |
| Mongoose Web Client (runtime) | 2026.09.08 | Designer About dialog |
| Mongoose Application database | 2026.09.08 | Designer About dialog |
| Mongoose Form definitions database | 2026.09.08 | Designer About dialog |
| Browser | Chrome 154 | Portal About dialog |
| Language / locale | en-US | iframe URL params |
| Theme | Light (inforThemeColor=default) | iframe URL params |
| Timezone | (UTC+08:00) Kuala Lumpur, Singapore (Asia/Singapore) | iframe URL params |

Note: Portal shell reports 2026.09.00; the Mongoose app (Web Client + Designer) reports 2026.09.08.

## Portal shell (Infor OS Portal)

- Web Components + Shadow DOM. Root: `PORTAL-ROOT`, main: `#osp-web-main`.
- Apps open as **portal tabs** inside the same browser tab; each app's content is a cross-origin iframe.
- Top bar: app grid, workspace tabs (System Administrator, API Gateway, test, Mongoose), scope badge `DEM`, `+` (add app), user menu, layout toggle.
- Navigation menu (hamburger): Workspaces (System Administrator, User, test), Bookmarks (empty), Applications (OS, Inbox, Document Management, Process Intelligence, Birst, CloudSuite WMS, Content Catalog). No "designer" entry; "Mongoose" app found via menu search.

## Mongoose app registration (as seen by the portal)

- LogicalId: `lid://infor.mongoose.mongoose`
- siteId: `c51080bc-3191-4598-9894-39e1b84f8e87`
- Host: `mgapse1ap.mtmgf.se1.mongoosepaas.io`
- Context: `WSWebClient/`
- Config group: `G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM`
- Portal tab URL: `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/c51080bc-3191-4598-9894-39e1b84f8e87`
- Web Client iframe name: `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`
- Web Client runtime URL (iframe): `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/WSWebForm.aspx?...&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM&tenant_config_group=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM&MGForm=<form>`

## Signed-in user

- Display name: Anton Ramos
- Email / login: anton.ramos@3mworks.com.ph
- userId: 8bc2e949-2681-4642-a33b-b2b821da865b
- Portal flags: isSystemAdministrator=true, isContentAdministrator=true, isContentPublisher=true
- Mongoose role (Designer About): **Site Developer** — "edits create user versions for user anton.ramos@3mworks.com.ph"

## Mongoose Web Client (runtime)

- Ext JS application inside the cross-origin iframe. Heading: "Infor Mongoose Application Development Framework".
- Sign-in: `configCombo` had a single option `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Menu bar: Explorer, Form, Actions, Edit, View, Window, Help (+ user badge).
- Toolbar (componentid → label):
  - `mgtoolbarbutton-1101` Open, `-1102` Save, `-1103` Close and Save Changes, `-1104` Close and Cancel Changes, `-1105` New, `-1106` Delete, `-1107` Refresh, `-1108` Refresh Current, `-1109` FiP (Filter in Place), `-1110` Work Flow, `-1111` First, `-1112` Previous, `-1113` Next, `-1114` Last, `-1115` Get More Rows, `-1116` Find a value for the field, `-1119` System Notes, `-1120` Documents, `-1122` Export To Excel, `-1123` DataView, `-1124` DataSearch, `-1125` Designer (main), `-1126` Designer (split), `-1127` Revert Runtime Changes, `-1128` Help Current Form
- Menu buttons: `expandExplorer` (Explorer), `mgmenubutton-1023` (Form), `actionsButton` (Actions), `mgmenubutton-1057` (Edit), `mgmenubutton-1070` (View), `mgmenubutton-1089` (Window), `mgmenubutton-1093` (Help).
- Explorer tree roots: My Folders, Master Explorer, Public Folders, User Folders.
- Form menu: Open, Close and Save Changes, Close and Cancel Changes, Export to File, Device Types, Definition, Sign Out, + recently used forms.
- Select Form dialog (Form > Open / toolbar Open): grid with Caption + Name columns; Filter textbox `textfield-1143`; Filter By combo `combo-1145` (default Caption); Case Sensitive `mgDlgCbx-1146`; Starts With `mgDlgCbx-1147`; OK `button-1149`, Cancel `button-1150`, Help `button-1151`.
  - Observed: the Filter textbox does NOT live-filter the grid. Open a form by double-clicking its row.
- Designer entry points:
  - Main Designer button (`mgtoolbarbutton-1125`): launches the NEW-form flow in the same iframe — "Identify Your Editing Scope" → "Runtime Builder Selection" → "Data Maintenance Wizard".
  - Designer split button (`mgtoolbarbutton-1126`): opens the **Web Designer in a new browser tab** (`WSWebClient/designer/default.aspx?MGForm=<current form>`), loading the current form in design mode.

## Web Designer

- Opens in a **separate browser tab** (not inside the portal iframe): `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/default.aspx`.
- Title: "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)".
- Menu bar: Form, Edit, View, Help.
- Layout: left Toolbox panel ("Search Toolbox" + "Framework Components"), center design canvas, right Properties panel (Design tab: Name, Description, Caption, Version, Device Type, Form Type, Is Master, + Appearance/Behavior/Help/Layout; Form/Component tabs).
- On open it shows an "Identify Your Editing Scope" dialog (Scope, User/Group).
- Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` + `en-US` + "powered by Infor".
- Component IDs: `designer-main-1018`, `mainToolbarMenu-menu-trigger`, `mgtoolbarbutton-1084..1108`, `textfield-1114` (toolbox search).
- Toolbox "Framework Components" (observed): Pointer, Barcode, Browser, Button, Calendar, Chart, CheckBox, ComboBox, DataView, DateCombo, Diagram, DropList, Edit, FlexLayout, FormPage, Gauge, Grid, GroupBox, HyperLinkButton, Inficon, Infor Chart, List, MenuItem, MultiLineEdit, NoteBook, Process Intelligence, RadioButton, Static, SubForm, ToolbarButton, Tree, UserControl.

## Dialogs / flows (observed)

- Identify Your Editing Scope: Scope combo (Site Default=1, User=3, Group=2); Group combo (8 groups: CoreFormsAdmin/Developer/EndUser, CoreIDOs, Infor-SystemAdministrator, APPBUILDER-Administrator/Designer/User); User combo (~30 users).
- Runtime Builder Selection: Category combo (ExtDatasource, FormBuilder, REST); Runtime Builder combo for FormBuilder (DataMaintenance, DataView, Report, ResponsiveForm); scope line; OK/Cancel.
- Data Maintenance Wizard (new form): IDO Name, IDO Project Name (default HelloWorld), Table Alias, Form Type (MultiView), Form Layout (GridLeft), Device Type (Default); Multi-Site Options (Site Split, Table Name, View Name); field grid (Name, Property Class, Data Type, SQL Data Type, Property Length, Decimal Precision, Primary Key, Required, Label String ID, Default Value); Add/Delete Row, Get Database Schema; Back/Next/Finish/Cancel/Help.
- **Form Wizard Selection** (Web Designer toolbar New `mgtoolbarbutton-1088` "New Form Definition"): radio "New Form", Category combo (incl. **Classic**), Wizard combo (incl. **BuildFromScratch** = "Plain form without defined components"). This is the ONLY path to Build-from-Scratch forms — the Web Client main Designer button flow (Runtime Builder Selection) does not offer it.
- **BuildFromScratch wizard** (`expeditor`): Name, Form Type (BuildFromScratch), Form Layout (GridLeft), Device Type (Default), Data Source (empty), Query Form, Comments; **"Save Template" checkbox is checked by default** (uncheck to avoid creating a template); Back/Next/Finish/Cancel/Help. **Finish persists the form immediately** (no separate save; Save button disabled = clean state). Created form: Form Type Normal, Is Master True, Version "User version for user <user>", Caption empty (runtime list falls back to Name).

## Observed forms

- Select Form dialog listed 6 tenant forms (G6R prefix): G6RUMs, G6RShipmentLookupProbe, G6RShipmentLookupPortal, G6RReceivingPortal, G6RItems, G6RIdoCollectionSearch. (An earlier observation showed a longer list including system forms such as "XML to IDO Wizard"; list content appears scope/folder dependent — not fully reconciled.)
- Form menu recent forms: G6RReceivingPortal, Sql Tables, G6RShipmentLookupPortal, G6RShipmentLookupProbe, Test ION API Invoke, Form Wizard - Grid Only, User Class Report, UET Copy Field, Suspended Updates, Specify Form Run Options.
- G6RItems (opened in design mode): DataMaintenance form; Properties → Name G6RItems, Device Type Default, Form Type Normal, Is Master True, Version "User version for us…".
- `FX_TestBlank01` (created by EXP-002, 2026-09-30): Build-from-Scratch form, User scope for anton.ramos@3mworks.com.ph, Form Type Normal, Is Master True, no data source/components. Persistence verified across full page reload (Select Form count 631 → 632; reopened in Web Client + Web Designer).

## Automation notes

- Use Playwright MCP; secrets via `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD` (auto-substituted, never stored here).
- Web Client is a cross-origin iframe: drive it via `page.frame({ name: 'mongoose_46_…' })` and the Ext JS API (`Ext.getCmp('mgtoolbarbutton-1101')`, etc.).
- Ext auto-generated component IDs (`mgtoolbarbutton-XXXX`, `button-XXXX`) are stable within a session but may change between sessions; named IDs (`expandExplorer`, `actionsButton`) are more stable.
- Synthetic DOM `dblclick`/`click` events do NOT trigger Ext row selection — use Playwright native clicks on the row element.
- Hidden Ext windows are parked at `top:-10000px` (visibility check must use `getBoundingClientRect().y > 0`, not just `offsetParent`).
- Select Form grid is **virtualized** (~43 rows rendered); scroll the `.x-grid-view` element (`scrollTop = index * rowHeight - 100`). `grid.getViewport()` is not a function in this build.
- Select Form **OK button activates the first/selected row** — it does NOT apply the filter text. Wizard-type system forms (e.g. `WSFormWizardNewDataXmlToIdo`) then fail to load at runtime.
- Numeric Ext IDs drift **between sessions** (e.g. Select Form dialog `textfield-1148`/`grid-1141`/`ext-comp-1140` → `textfield-1143`/`grid-1136`/`ext-comp-1135` after reload). Resolve at runtime by container + role/text.
- `Ext.ComponentManager.each`/`.items` do not iterate in this build (manager uses `all`); use `Ext.getCmp` / `Ext.ComponentQuery`.
- Portal `portal-notification` banner (e.g. "The DistributionIFSContactUs group does not have any active users...") can cover the iframe after a reload and intercept all pointer events — close via `portal-notification button` before interacting with the Web Client.