# EXP-144: ION API and external API calls from a C# form script (G1–G4), plus the start of the background-task submission survey (G5)

Status:
- **G1–G4: observed.** One successful run each, with Save → reload/reopen → runtime check.
- **G5: complete** (read-only survey; finished 2026-10-28). Nothing was saved or submitted.

Run on 2026-10-27, directly in the session (Playwright MCP). G5 was finished on 2026-10-28.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Designer was in User scope, as its status bar showed.

Approvals (operator, 2026-10-27):
- ION API: **GET only**, against a harmless WM method.
- External API: `https://httpbin.org/get` only.
- Background tasks: **survey only**. No FX_ definition rows and no submits.

## Objects created (all FX_, User scope)
- Form **FX_ApiProbe** (User version), with these components:
  - `FX_ResultEdit` (MultiLineEdit);
  - `FX_IonButton` ("Call ION", primary event `FX_CallIon`);
  - `FX_HttpButton` ("Call httpbin", primary event `FX_CallHttp`).
- Form script: Visual C#, source in `assets/FX_ApiProbe/FX_ApiProbe.cs.txt`; the install copy is `FX_ApiProbe.flat.cs.txt`.
- Event handlers:
  - `FX_CallIon` → Form Script Method `FX_CallIonHello()`;
  - `FX_CallHttp` → Form Script Method `FX_CallHttpbin()`.
- **Cleanup:** delete the FX_ApiProbe User version. Nothing else was created.

## Results
- **G1/G2:** the vendor Test ION API Invoke form called WM `/wmwebservice_rest/v1/feature/helloworld` and got 200 / "Hello World!" (`07`). The vendor wiring was read and never saved (`09`–`15`):
  - the call is `IONAPIMethods.InvokeIONAPIMethod2` with 13 parameters;
  - the outputs are at indexes 9 (code), 10 (body), 11 (headers) and 12 (infobar).
- **G3 (C# → ION):**
  - The script builds an `InvokeRequestData` (IDO `IONAPIMethods`, method `InvokeIONAPIMethod2`) with the parameters `"1","1","WM","GET",<path>,"","","10000","0"` followed by 4 × `IDONull.Value`, then calls `IDOClient.Invoke(req)`.
  - The Script Editor compiled it: "Built with 0 errors" (`24`).
  - At runtime (`33`): **Code 200, Infobar OK, Content "Hello World!"**.
- **G4 (C# → external HTTP):**
  - The script uses `HttpWebRequest` GET to `https://httpbin.org/get`. It compiles in partial trust.
  - At runtime (`34`): **Code 200** and the httpbin JSON. So outbound HTTPS from form scripts is allowed in this cloud tenant.
  - The `origin` field is the tenant's egress IP. It appears in screenshots 34–36 and is deliberately not written down here.
- **G5 (read-only, complete). How a form submits a background task.** The full handler text is in `dbschemareport-handlers.txt`.
  - The Designer's Response Type list includes **Run Background Task**. The full list was read: it also includes Method Call, Form Script Method, Execute EXE or other program, and others.
  - Web Client forms **BackgroundQueue** and **EventQueue** exist (`35`).
  - **The vendor launcher DatabaseSchemaReport** (Vendor Default version) was opened in the Designer, read and closed **without a save prompt** (`37`–`40`):
    - **Print** button → primary event `GenerateReport`, which has two steps:
      0. **Run Background Task** with `TASKNAME(V(BGTaskName)) TASKPARMS(V(BGTaskParms)) TASKSTATUS(V(BGTaskStatus)) TASKNUMBER(BGTaskNumber) ERRORMESSAGE(mBackEndMessage)`;
      1. Run Script `ReportSubmitted()`.
    - **Variables:** form variable `BGTaskName` = `DatabaseSchemaReport` (the BGTaskDefinitions task name). `BGTaskParms` = `V(TableStarting),V(TableEnding),V(DisplayHeader),V(Parm_Site)`, a comma list built from the form's own variables.
    - **Scheduling:** `RunBackgroundQueue` → Run Form as Modal Child `BackgroundQueue( SETVARVALUES(BGTaskName=V(BGTaskName), RunTaskEvent=GenerateReport) )`. The queue dialog collects the schedule, then fires the parent's `GenerateReport` event.
    - **Preview** does **not** use a task. `PreviewReport` → Run Form `WBDataViewResults( SETVARVALUES(DataViewName=Database Schema Report, InputParameter1..4=…) )`. This is a synchronous route that is useful for testing a DataView before making it a task.
    - **Other handlers:** RunGetOptions, RunStoreOptions and SelectPrinter open the GetOptions, StoreOptions and ReportOptions modal forms.
  - **Server side:** `BGTaskDefinitions.BGTaskSubmit` is a Stored Procedure method (SP `BGTaskSubmitSp`, transactional) with 20 VARIANT parameters (`41`, `42a`, `42`). They start TaskName, TaskParms1, TaskParms2, Infobar, TaskID, TaskStatusCode, StringTable, RequestingUser, PrintPreview… and continue with the Sched* fields.
    - So a C# form script could also submit a task with `IDOClient.Invoke("BGTaskDefinitions", "BGTaskSubmit", …)`. This is **unverified**; G6 is not approved.
  - **The BackgroundQueue form at runtime** (`43`) is a scheduling dialog:
    - Recurrence: Once / Daily / Weekly / Monthly / Monthly Relative. Occurs Once At date and time, and Delete When Complete (default on).
    - Frequency: once or every N hours, with start and end times.
    - Recurrence Range: start date, and end date or No End Date.
    - Its **OK** button submits (through the parent's RunTaskEvent), so it was closed with × (`44`). Nothing was submitted.
  - **G6 plan (needs approval):**
    1. Create an FX_ definition row (RPT + DATAVIEW, like DatabaseSchemaReport).
    2. Create an FX_ form whose button runs **Run Background Task** with `TASKNAME(FX_…)` and an empty TASKPARMS.
    3. Submit once, then read Active Background Tasks and Background Task History.

## Designer quirks found (add to the skill playbook)
- **Event Handler Name combo:** clicking OK with the mouse can drop the last typed character (`FX_CallIo`). Pressing **Enter** in the Name field kept the full name. Check the name afterwards; it can be fixed in the property grid's Event field.
- **Form Script Method:** Parameters "…" → *Edit Script Name* lists the compiled script's public methods. Pick one and click OK.
- **Response Type list:** the options are `table.mg-list-table td` cells. Use scrollIntoView on the option, then click it.
- **Designer degradation:** after the client errors (visibilityMode/parentNode) pile up, dialogs open off-screen and dropdowns stop opening. Recover as follows:
  1. Save what is good.
  2. Reload the Designer tab (accept beforeunload).
  3. Choose Scope User → OK.
  4. Reopen the form from the Form-menu recent list.
- **Script insertion:** `page.keyboard.insertText(<flush-left source>)` into the Script Editor didn't create duplicate braces. Then compile with ▶ and expand Compile Result.
- **A new form isn't in the Web Client Select Form list until the Web Client page is reloaded** (same as EXP-002).

## Evidence (`evidence/EXP-144/`)

| Files | What they show |
|---|---|
| `01`–`08` | G1/G2 |
| `09`–`15` | Vendor wiring, read-only |
| `16`–`21` | Form create, reopen, components |
| `22`–`23` | Script Editor template, then the inserted source |
| `24` | Compiled with 0 errors |
| `25` | Script saved |
| `26`–`28` | ION handler, then saved |
| `29` | After the Designer reload: FX_CallIon persisted |
| `30`–`31` | httpbin handler; both handlers saved |
| `32`–`34` | Runtime open, ION result, httpbin result |
| `35`–`36` | G5 Select Form reads |
| `37` | DatabaseSchemaReport in the Designer, Vendor Default version, User scope status bar |
| `38`–`39` | Its event handlers (list, then expanded). The parameter text is truncated in the image; the full text is in `dbschemareport-handlers.txt` |
| `39a`–`39b` | Variables BGTaskName = DatabaseSchemaReport, BGTaskParms = comma list of V(...) |
| `40` | PrintButton → Primary event GenerateReport |
| `41`, `42a`, `42` | IDO Methods: BGTaskDefinitions.BGTaskSubmit → BGTaskSubmitSp, parameters 1–7, 8–14, 14–20 (row 19 is hidden by a tooltip) |
| `43` | BackgroundQueue runtime (scheduling dialog) |
| `44` | After closing it with ×: empty Web Client, nothing submitted |

## State left (2026-10-28)
- **Designer:** no form open (DatabaseSchemaReport was closed without a save prompt). User scope, operator account.
- **Web Client:** no forms open.
  - The earlier Deployment tab (with its unsaved auto row) and the FX_ApiProbe runtime tab were gone after the portal session refreshed overnight. The Deployment row was never saved.
  - IDO Methods and BackgroundQueue were opened read-only and closed.
- **Cleanup done:** the `tmp-*.png` files and `evidence/playwright/insert-apiprobe.js` were deleted.
- **Still in the tenant:** the FX_ApiProbe User version, kept for G6/G7 and as a reference build.
