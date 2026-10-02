# EXP-001 — Environment Fingerprint

Status: complete (read-only)
Date: 2026-09-29
Mode: LEARNING MODE — READ-ONLY. No Mongoose artifact was created, modified, saved, or deleted.

## Objective

Fingerprint the live Infor Mongoose demo environment through the browser (Playwright MCP) to establish:
- Product/portal/Mongoose versions and the signed-in user/role.
- How the Mongoose app is hosted (portal shell vs iframe vs new tab).
- Browser/tab/window behavior when opening the Web Client and the Web Designer.
- How forms are searched and opened.
- Stable navigation methods and selectors for future experiments.
- Potential risks and unknowns.

No reusable recipe is produced by this experiment (per scope).

## Starting state

- `environments/current-environment.md` held only `base_url` + `environment_type: demo`.
- Prior evidence (2026-09-29) recorded a login failure ("invalid username or password"); this run logged in successfully via `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD`.
- Working dir `C:\AI\mongoose-factory`; Playwright MCP persistent profile `C:\AI\mongoose-playwright-profile`; secrets `C:\AI\mongoose-secrets\demo.env`; snapshots/logs under `evidence\playwright\`.

## Method

1. Navigate to `base_url`, log in with secret placeholders.
2. Fingerprint the portal shell (version, scope badge, user, nav menu, About dialog).
3. Open the Mongoose app; record how it is hosted (portal tab + cross-origin iframe).
4. Inspect the Web Client (menus, toolbar, Explorer, Form menu, Select Form dialog) via the Ext JS API inside the iframe.
5. Exercise the Designer entry points (main button and split button) to observe tab/window behavior.
6. Open an existing form (G6RItems) in design mode, capture the Web Designer UI and its About/version, then close without saving.
7. Record evidence screenshots under `evidence/EXP-001/`.

## Observations

### Hosting / browser structure (observed)
- The shell is **Infor OS Portal** (not a standalone Web Client). Mongoose is one of many portal apps.
- Apps open as **portal tabs** within a single browser tab; each app's UI is a **cross-origin iframe**.
- Mongoose Web Client iframe name: `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87`; host `mgapse1ap.mtmgf.se1.mongoosepaas.io`; context `WSWebClient/`.
- The **Web Designer opens in a NEW browser tab** at `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/default.aspx?MGForm=<form>` — it is NOT rendered inside the portal iframe.

### Versions (observed)
- Portal: Infor OS Portal 2026.09.00; IDS 1.16.22; `inforOSPortalVersion`/`inforWorkspaceVersion` = 2026.09.00.
- Mongoose (Designer About): "Infor Mongoose Application Development Framework 2026.09.08"; Application database 2026.09.08; Form definitions database 2026.09.08; "Mongoose Web Client 2026.09.08".
- Browser Chrome 154; locale en-US; theme Light; timezone (UTC+08:00) Kuala Lumpur, Singapore.

### User / role (observed)
- Anton Ramos (anton.ramos@3mworks.com.ph), userId 8bc2e949-2681-4642-a33b-b2b821da865b.
- Portal flags: isSystemAdministrator / isContentAdministrator / isContentPublisher all true.
- Mongoose role (Designer About): **Site Developer**; "edits create user versions for user anton.ramos@3mworks.com.ph".

### Form search / open (observed)
- Toolbar **Open** (`mgtoolbarbutton-1101`) and **Form > Open** both open the "Select Form" dialog.
- Select Form dialog: Caption + Name grid; Filter textbox (`textfield-1143`), Filter By combo (`combo-1145`, default Caption), Case Sensitive / Starts With checkboxes, OK/Cancel/Help.
- The Filter textbox does **not** live-filter the grid. A form is opened by **double-clicking its row** (Playwright native dblclick).
- Pressing Enter in the filter activates the selected/first row (can trigger load errors on wizard-type forms, e.g. `WSFormWizardNewDataXmlToIdo`).

### Designer behavior (observed)
- Main Designer button (`mgtoolbarbutton-1125`) → NEW-form flow in the same iframe: "Identify Your Editing Scope" → "Runtime Builder Selection" → "Data Maintenance Wizard".
- Designer split button (`mgtoolbarbutton-1126`) → opens the **Web Designer in a new browser tab**, loading the current form (G6RItems) in design mode.
- Web Designer UI: menus Form/Edit/View/Help; left Toolbox (Framework Components); center canvas; right Properties (Design: Name, Description, Caption, Version, Device Type, Form Type, Is Master, + Appearance/Behavior/Help/Layout). On open it shows "Identify Your Editing Scope".
- G6RItems in design mode: Device Type Default, Form Type Normal, Is Master True, Version "User version for us…".

### Stable selectors / navigation (observed)
- Portal: `PORTAL-ROOT`, `#osp-web-main`, `portal-environment-tag` (scope badge).
- Web Client iframe: `iframe[name="mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87"]`; drive via `page.frame({name})` + Ext JS `Ext.getCmp(...)`.
- Web Client toolbar/menu component IDs are documented in `environments/current-environment.md` (e.g. `mgtoolbarbutton-1101` Open, `-1125`/`-1126` Designer, `mgmenubutton-1023` Form, `expandExplorer`, `actionsButton`).
- Select Form dialog: `textfield-1143` (filter), `button-1149` (OK), `button-1150` (Cancel).
- Designer tab: `designer-main-1018`, `mainToolbarMenu-menu-trigger`, `textfield-1114` (toolbox search).
- Caveat: numeric Ext component IDs are session-stable but may change between sessions; prefer named IDs and role/text where possible.

## Evidence

Screenshots under `evidence/EXP-001/`:
- `01-portal-landing.png` — portal after login.
- `02-about-dialog.png` — portal About (versions).
- `03-navigation-menu.png` — nav menu (workspaces/applications).
- `04-mongoose-webclient-signin.png` — Web Client sign-in (config combo).
- `05-config-group-dropdown.png` — config group option.
- `06-webclient-loaded.png` — Web Client loaded (menus/toolbar/Explorer).
- `07-form-menu.png` — Form menu.
- `08-select-form-dialog.png` — Select Form dialog.
- `09-editing-scope-dialog.png` — Identify Your Editing Scope.
- `10-runtime-builder-selection.png` — Runtime Builder Selection.
- `11-select-form-stuck.png` — Select Form dialog parked off-screen (Ext hide at y=-10000).
- `12-form-loaded.png` — G6RItems form in runtime mode.
- `13-designer-scope.png` — Runtime Builder Selection with scope line.
- `14-category-dropdown.png` — Runtime Builder Selection (Category/Runtime Builder).
- `15-web-designer.png` — **Web Designer in a new tab** (Toolbox/Properties/scope dialog).
- `16-designer-about.png` — Designer About (versions + Site Developer role).
- `17-designer-form-surface.png` — G6RItems in design mode (Properties: Device Type/Form Type/Is Master/Version).

Playwright snapshots/console logs: `evidence/playwright/page-*.yml`.

## Browser / tab / window behavior (answer)

- Portal apps (including Mongoose Web Client) open as **portal tabs in the same browser tab**; content is a cross-origin iframe. No new browser tab/window for the Web Client.
- The **Web Designer opens in a NEW browser tab** (`WSWebClient/designer/default.aspx`), triggered by the Designer split button (`mgtoolbarbutton-1126`). The new-form wizard flow (main Designer button) stays inside the Web Client iframe.

## Risks / caveats

- Opening a form in design mode starts a temporary design session (a "user version" context). It was closed **without saving**, so no persistent artifact is expected; however, persistence was not independently re-verified (see Unknowns).
- The Select Form dialog filter does not live-filter; rely on row double-click.
- Synthetic DOM click/dblclick events do not drive Ext selection; use Playwright native clicks.
- Hidden Ext windows sit at `top:-10000px`; visibility checks must use `getBoundingClientRect().y > 0`.
- The Select Form dialog's form list varied between observations (6 tenant G6R* forms vs a longer list including system forms); list content appears scope/folder dependent and was not fully reconciled.

## Unknowns

- Whether opening-then-closing the designer without saving left any transient user-version record on the server (not re-verified to stay read-only).
- Full inventory of available forms and their folder/scope placement.
- Exact Mongoose product/CSI build string beyond "2026.09.08".
- Whether the Designer split button always targets the current form, or offers a menu in other states.

## Result

Environment fingerprinted successfully. Key facts captured and recorded in `environments/current-environment.md`:
- Shell = Infor OS Portal 2026.09.00; Mongoose app = 2026.09.08 (Web Client + DBs).
- Mongoose Web Client runs in a cross-origin portal-tab iframe; **Web Designer opens in a new browser tab**.
- Signed-in user = Anton Ramos, Mongoose role = Site Developer (user-scope edits).
- Form open path and Designer entry points mapped with stable component IDs.

Knowledge states: all findings above are **observed** (directly executed this session). Nothing is yet **verified** (no repeatable/persistence-verified procedure). No **superseded** items.

Next (suggested, not done): a small controlled EXP-002 to create an `FX_`-prefixed artifact in User scope, save, close/reopen, and verify persistence — which would also resolve the designer-cleanup unknown.