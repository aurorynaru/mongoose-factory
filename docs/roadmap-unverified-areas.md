# Roadmap: the unverified areas, then UI design (drafted 2026-10-27)

Goal: move the five unverified areas in `.claude/skills/mongoose-builder/SKILL.md` to **observed**, and then to **verified**. Then add design-from-reference (operator screenshots) to the skill.

How the plan is built:
- Every area starts with a **read-only survey**: open the forms, record the options, change nothing.
- After that comes the smallest **FX_-only** probe.
- A non-FX_ object is touched only after that, and only with the operator naming it.
- Each experiment ends with a cleanup or revert step, so the rollback route is learned too.

## Operator decisions (2026-10-27)
- Run experiments **directly in a session**, not through the harness.
- Phase A (Form extensions / vendor forms): **not yet**. No approval for the Load/Replace preference or for any vendor form.
- Phase B (Group/Site scope saves): **not yet**.
- Phase C: **survey + export only**. The deployment export of FX_ objects is approved; import/deploy is not.
- Phases D and E: start with the read-only surveys (no approval needed). Any change beyond FX_ objects is asked for separately.

Order now: C1 → D1 → E1 (read-only surveys) → C2 (export).

Sources (all **unverified**): `docs/mongoose/guides/` `form-extensions.md`, `editing-scope-and-versions.md`, `deployment.md`, `rest-and-ion-api-wizards.md`, `background-tasks.md`, `ion-api-integration.md`.

Known environment facts:
- The operator's role is **Site Developer** (`environments/current-environment.md`).
- The Identify Your Editing Scope dialog offers Site (1), Group (2) and User (3).
- The Group list includes CoreFormsAdmin/Developer/EndUser, CoreIDOs, Infor-SystemAdministrator and the APPBUILDER-* groups.

## Phase A: Form extensions and existing (non-FX_) forms
| Exp | What | Touches | Approval needed |
|---|---|---|---|
| A1 | Extend Form wizard on an **FX_** form (FX_HelloWorld01 → FX_HelloWorld01X, User scope). Add one FX_ Static and set Replace Base Form = True. With the user preference **Load/Replace form with extended form** on, opening FX_HelloWorld01 should open the extension; with it off, the base. Read Help › About This Form › warnings. | FX_ form; the operator's user preference | the user preference toggle. With it on, any vendor extension marked Replace Base Form also replaces its base for this user. It is restored at the end. |
| A2 | **User-scope** change to one **vendor form named by the operator**. Steps: baseline (About This Form, properties) → add one FX_ Static → Save (creates a User version) → runtime check → **revert the User version** → confirm the vendor version is back. This is the rollback route every later non-FX_ change relies on. | 1 named vendor form, User version only | the form's name, approved for this task |
| A3 | Form **extension of the same vendor form** (User scope, Replace Base Form). Check it at runtime, then remove the extension's effect (preference off, then the Form Extensions entry or the extension itself). | that vendor form (read), FX_ extension | same form; the Form Extensions form entry |

## Phase B: Group and Site scope saves (tenant-wide)
| Exp | What | Touches | Approval needed |
|---|---|---|---|
| B1 | A new tiny **FX_ScopeProbe** form saved in **Group** scope for one group. Verify it with a viewer in that group. A User version would hide the Group version for the operator, so ScopeProbe never gets one. Revert the Group version. | FX_ form, Group version | Group save; which group; possibly Unload All Global Form Objects |
| B2 | Same, at **Site** scope. Then revert, and confirm the Vendor/none state. | FX_ form, Site version | Site save |

Verification needs a second viewer. The read-only Mock account may *view* the runtime: that is inspection, with no Save. Switching accounts is done by the operator, because the secrets file holds one account.

## Phase C: Deployment and FormSync
| Exp | What | Touches | Approval needed |
|---|---|---|---|
| C1 (EXP-140) | Read-only survey of the **Deployment** form and **FormSync** (if it exists in the cloud): the options and Access As values. Nothing runs. | none | none |
| C2 (EXP-143) | **Export** a package with "forms, selected items and referenced items" for FX_InventoryDashboard. That should include FX_InventoryItems IDO/table, the assets and FX_vInventoryJson. Download the zip and check what it contains locally (View Log plus the file list). | none in the tenant (package only) | the deployment export (AGENTS.md lists deployment as tenant-wide) |
| | **C2 status: blocked.** In mode 2 with Scope User, Refresh returned an empty Available Forms grid (filter `FX_Inventory` and `FX_InventoryDashboard`). Next: probes that save nothing (empty filter, `FX_%`, Vendor scope). Then decide whether a saved FX_ profile row is acceptable. See EXP-143. | | |
| C3 | **Import/deploy**. There is only one tenant, so importing would overwrite the same FX_ objects. Decide after C2 whether this is worth doing, for example on an FX_ copy. | FX_ objects | deploy, later |

## Phase D: REST API wizard and IDO from ION API wizard
| Exp | What | Touches | Approval needed |
|---|---|---|---|
| D1 (EXP-141) | Read-only survey: Runtime Builder categories (are the REST and ExtDatasource wizards designated?), **ION API Servers**, **Object External APIs**. | none | none |
| | **D1 result:** both wizards are already designated as Runtime Builder forms, and the REST wizard opens from Web Client Select Form. ION API server 1 exists with `.ionapi` loaded; its suites are WM and DATAFABRIC. Object External APIs is empty. D2 needs no non-FX_ change; D3 needs a suite choice. | | |
| D2 | REST API Wizard: a **Load Collection** API on FX_InventoryItems, with Operation ID `FX_InventoryItemsLoad`. Check it in Object External APIs and in the Swagger document. Calling it through ION API needs an authorized client, which the operator sets up. Credentials are never stored in the repo. | FX_ API metadata | if the wizard is not designated as a Runtime Builder form, designating it (Form Wizard Categories) is a non-FX_ config change |
| D3 | IDO from ION API wizard: generate an **FX_** IDO from a harmless read-only API, such as Mongoose's own REST API for FX_InventoryItems. It needs an ION API server entry. | FX_ IDO; possibly an ION API Servers row | the server entry, if one is missing |

## Phase E: Background tasks
| Exp | What | Touches | Approval needed |
|---|---|---|---|
| E1 (EXP-142) | Read-only survey: Background Task Definitions (fields, Executable Types), Active Background Tasks, Background Task History. This shows whether TaskMan runs tasks here, from recent successes. | none | none |
| | **E1 result:** History and Active are empty (nothing has ever run). There are 24 vendor definitions; DatabaseSchemaReport = RPT + DATAVIEW is the template. The vendor definition fields are editable, so be careful. | | |
| E2 | An **FX_** background task definition that runs something harmless and read-only over FX_ data. The route is picked from E1. FX_ IDOs have no custom methods, so IDOMTH may need a method first. A DATAVIEW report on FX_InventoryItems is the likely first try. Submit it once, then check Task History. | FX_ task definition; one queued task | none beyond FX_, unless E1 shows a non-FX_ need |

## Phase G (focus, operator 2026-10-27): APIs from C# form scripts, and background tasks
Known so far:
- C# form scripts already call IDOs: `IDOClient.LoadCollection` in `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (EXP-136).
- The documented route to ION APIs is the extension-class methods on the **IONAPIMethods** IDO: `InvokeIONAPIMethod(2)` (SSO), `InvokeIONAPIMethodWithToken`/`InvokeIONAPIWithToken2`, `GetBearerToken(2)`, `GetIONAPIInfo` (`docs/mongoose/guides/ion-api-integration.md`, unverified).
- ION API server 1 exists, with suites WM and DATAFABRIC (EXP-141).
- TaskMan has never run anything here (EXP-142).

Operator decisions (2026-10-27):
- G2/G3: **approved**, read-only **GET** only, against a harmless existing WM/DATAFABRIC method picked after G1. Never POST/PUT/DELETE.
- G4: **approved**, endpoint `https://httpbin.org/get` only.
- Background tasks: **survey only** (G5). G6/G7 (FX_ definition rows, submits) are **not yet** approved.

| Exp | What | Touches | Approval needed |
|---|---|---|---|
| G1 | Read-only: the IONAPIMethods IDO method signatures (IDO/method forms), the methods defined under the WM/DATAFABRIC suites, and the Test ION API Invoke form. | none | none |
| G2 | **Test ION API Invoke** with one harmless existing **GET** method, using SSO. This is the baseline for an Infor API call. | one outbound GET to an Infor API | which method/suite |
| G3 | **FX_ApiProbe** form, C# script: `IDOClient.Invoke("IONAPIMethods", "InvokeIONAPIMethod2", …)` with the same GET. Show the status and the first 2 KB of the response in a form variable/static. | FX_ form + script | same call as G2 |
| G4 | The same form, external API: C# `HttpClient` GET to a harmless public endpoint. Probes: does `System.Net.Http` compile in a form script, and does the cloud tenant allow outbound traffic? | FX_ script; one outbound GET to an external host | the endpoint |
| | **G1–G4 result (EXP-144): observed.** The vendor Test ION API Invoke form returned 200 "Hello World!" (WM `/wmwebservice_rest/v1/feature/helloworld`). The FX_ApiProbe C# script made the same call through `IONAPIMethods.InvokeIONAPIMethod2` (200, "Hello World!"), and an `HttpWebRequest` GET to httpbin returned 200. `HttpWebRequest` was used instead of `HttpClient`; outbound HTTPS is allowed. | | |
| G5 | Read-only: how tasks are **submitted** (Run Background Task event response / BGTaskSubmit, any background queue form). | none | none |
| | **G5 result (EXP-144): observed.** DatabaseSchemaReport: Print → `GenerateReport` → **Run Background Task** `TASKNAME(V(BGTaskName)) TASKPARMS(V(BGTaskParms)) TASKSTATUS(V(BGTaskStatus)) TASKNUMBER(BGTaskNumber) ERRORMESSAGE(mBackEndMessage)`. Scheduling goes through the modal `BackgroundQueue(SETVARVALUES(BGTaskName=…, RunTaskEvent=GenerateReport))`. Server side: `BGTaskDefinitions.BGTaskSubmit` (SP `BGTaskSubmitSp`, 20 parameters). The DataView preview runs synchronously through `WBDataViewResults`. | | |
| G6 | First FX_ background task, the smallest runnable kind (likely RPT+DATAVIEW over FX_InventoryItems, or IDOMTH on an existing harmless method). Submit once, then read Active/History. This proves whether TaskMan runs here. | FX_ BGTaskDefinitions row; one queued task | FX_ row in a vendor table |
| G7 | Background task that calls an API: IDOMTH `IONAPIMethods.InvokeIONAPIMethodWithToken` (no SSO in the background), or another route found in G5/G6. | FX_ task definition | token handling; no credentials in the repo |

## Phase F: UI design from operator screenshots (last)
- Add a playbook `design-from-reference.md`:
  1. Screenshot intake.
  2. Layout inventory: regions, grid, spacing.
  3. Token extraction: colours, type, radii.
  4. Route choice for each region: classic components with a theme, or a Web User Control page.
  5. Build on FX_ objects.
  6. **Side-by-side comparison screenshot**, a difference list, and fixes.
- It is first exercised on the operator's first mock screenshot (a BLD, not an EXP).

## How experiments run
Recommended: run them **directly in a session**, the way BLD-001 ran (Playwright MCP, evidence in `evidence/EXP-NNN/`, record in `experiments/`). It is faster and cheaper than the harness. Each step still has its own approval.
