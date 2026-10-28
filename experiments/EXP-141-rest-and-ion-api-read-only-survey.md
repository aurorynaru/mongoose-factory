# EXP-141: REST API and ION API wizards, read-only survey

Status: **complete** (read-only; nothing saved, generated or created). 2026-10-27, run directly in the session (Playwright MCP). Roadmap item D1 (`docs/roadmap-unverified-areas.md`).
Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header, visible in every screenshot below).

## Objective
Before D2/D3, find out:
- which REST/ION forms exist;
- whether the wizards are designated as Runtime Builder forms;
- whether an ION API server is configured;
- whether any external APIs are already defined.

Change nothing.

## Observations
### ION-related forms (Web Client Open › Select Form, filter `IonApi` / `ION`)
- WSFormWizardIDOFromIONAPI ("IDO From ION API Wizard")
- WidgetIONAPItoIDOWizard ("ION API to IDO Wizard")
- IONAPIServers
- IONAPISuites
- IONAPIMethods
- IONAPISearchCriteria
- IONAPITestInvoke ("Test ION API Invoke")

The names were read from the Select Form grid in the session. The saved `select-form-ionapi.txt` was truncated at capture and does **not** contain them.

### ION API Servers (`IONAPIServers`), `01-ion-api-servers.png`
- One server row, **ID 1**:
  - Server URL `https://mingle-ionapi.se1.inforcloudsuite.com`
  - STS URL `https://mingle-sso.se1.inforcloudsuite.com/inforsts/wstrust/idp`
  - Token URL `https://mingle-sso.se1.inforcloudsuite.com/as/token.oauth2`
- **".ionapi exists" is checked**; "Private Key Exists" is unchecked.
- Suites: **Infor WMS (WM)** and **Infor Data Fabric (DATAFABRIC)**.
- Closed with no prompt.

### REST API Wizard (`WSFormWizardRestApi`), `02-rest-api-wizard.png`, `03-rest-api-wizard-actions.png`
- **It opens directly from Web Client Open › Select Form.** No Runtime Builder entry is needed.
- Page 1 has two sections:
  - **IDO Swagger Document**: IDO Name* (combo), Document Description.
  - **API Attributes**: Action* (combo), Operation ID*, Operation Description.
- Buttons: Back / Next / Finish / Cancel / Help.
- **Action list:** Get Property Information, Invoke Method, **Load Collection**, Update Collection.
- Nothing was entered. Cancel showed "Are you sure you want to cancel? All data entered will be lost." with a single **Yes** button. Yes closed the wizard.
- The IDO Name list was **not** opened, so it is unproven whether FX_InventoryItems appears in it.

### Object External APIs (`ObjectExternalAPIs`), `04-object-external-apis.png`
- **The collection is empty**: no external APIs are defined in this tenant.
- Like Deployment, the form auto-starts an unsaved new row (`*1`). Its Endpoints grid has a default "Get Property Info… / GET" row.
- Header fields: Collection Name (read-only), Document Description, plus an **Endpoints** button.
- Endpoint grid columns: Operation ID, Operation Type, Operation Description, Method, Properties, Bookmark, Filter, Is Distinct, Load Collection Type, Order By, Post Query Command, Read Only, …
- Closed with no prompt. Nothing was saved.
- A related form, `ObjectExternalAPIEndpoints` ("Object External API Endpoints"), also exists. It was not opened.

### Form Wizard Categories (`WSFormWizardCategories`), `05`, `06`, `08`–`11`
- It opens in **Filter in Place** mode.
- Enter in the Category field did **not** execute the filter (`06`). **Actions › Filter › Execute in Place** did (`08`): it loaded 7 categories, all Access As `Core`, with the fields greyed out (read-only vendor rows).
- **Categories seen:** Classic, ExtDataSource, Flex, IDS, New Data, REST, plus one more not identified.
- **REST category** (`09`):
  - wizard **APIGenerator**, Form **WSFormWizardRestApi**, Access As Core;
  - **Runtime Builder checked**.
- **ExtDatasource category** (`10`, `11`):
  - Data Lake Wizard (DatalakeWizard → WSFDataLakeIDOWizard), Runtime Builder checked;
  - **IDO From ION API Wizard** (IDOFromIONAPIWizard → **WSFormWizardIDOFromIONAPI**), **Runtime Builder checked**.
- Closed with no prompt.

## What this means for the roadmap
- **D2 needs no non-FX_ configuration change.** The REST wizard is already designated and opens from the Web Client. The remaining D2 artifacts are FX_ API metadata (Operation ID `FX_InventoryItemsLoad`).
  - Open question: does Finish write an Object External APIs row keyed by the IDO name (`FX_InventoryItems`)? It most likely does. If so, it is a new row in a vendor metadata table, but for an FX_ object. Treat it like other FX_ metadata.
  - Calling the generated API through ION needs an authorized ION API client. The operator sets that up outside Mongoose. No credentials go into the repo.
- **D3 has its prerequisites in place.**
  - ION API server 1 exists with an `.ionapi` file loaded, so the IDO From ION API wizard needs **no new server row**.
  - The only suites available are WMS and Data Fabric. A harmless read-only source would be a Data Fabric metadata/list endpoint, or Mongoose's own REST API if a suite for it is added (that would be a non-FX_ row, so ask first).
  - The suite choice must be made with the operator.

## Process lessons
- **Filter in Place forms:** run the query with **Actions › Filter › Execute in Place**. Enter in an empty field did not run it. Add this to `browser-and-session.md`.
- **Wizard Cancel:** the confirmation dialog has a single default-focus **Yes**. That is safe when nothing was entered.
- **Auto-started rows:** forms such as Object External APIs and Deployment open with an unsaved `*1` row. Closing the tab without Save left nothing behind in both cases (no prompt).

## Not done / not proven
- The IDO Name list of the REST wizard and the wizard's later pages were not opened.
- WidgetIONAPItoIDOWizard, IONAPIMethods, IONAPITestInvoke, ObjectExternalAPIEndpoints and the 7th category tile were not opened.
- Nothing proves that the ION API server credentials actually authenticate. Only the flags were read.
- `07-form-wizard-categories-after-filter.png` (the Actions › Filter submenu) was captured and then deleted by mistake. Nothing decisive was in it; `08` shows the result.

## Evidence (`evidence/EXP-141/`)
- `01-ion-api-servers.png`: server row 1, URLs, flags, suites.
- `02-rest-api-wizard.png`: wizard page 1, empty, with the account header.
- `03-rest-api-wizard-actions.png`: the Action list open.
- `04-object-external-apis.png`: the empty collection with the auto-started unsaved row.
- `05-form-wizard-categories.png`: the form in Filter in Place mode.
- `06-form-wizard-categories-loaded.png`: after Enter (still empty; the filter did not run).
- `08-form-wizard-categories-executed.png`: after Execute in Place (Classic category, 1 of 7).
- `09-rest-category.png`: REST / APIGenerator / WSFormWizardRestApi / Runtime Builder checked.
- `10-extdatasource-category.png`: ExtDatasource with the Data Lake Wizard.
- `11-ido-from-ion-api-wizard-entry.png`: IDOFromIONAPIWizard / WSFormWizardIDOFromIONAPI / Runtime Builder checked.
- `select-form-ionapi.txt`: truncated capture (no form names; see above).

Knowledge state: **observed** (one read of each form).
