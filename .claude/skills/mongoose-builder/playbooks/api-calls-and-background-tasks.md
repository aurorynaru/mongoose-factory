# Playbook: API calls from form scripts, and background tasks

Source: EXP-141, EXP-142, EXP-144, EXP-149. Reference build: **FX_ApiProbe** (User scope). Its script is `assets/FX_ApiProbe/FX_ApiProbe.cs.txt`, and the install copy is `FX_ApiProbe.flat.cs.txt`.

## Approval gates
- An outbound call is an action against another system.
  - Approved so far: ION **GET** to a harmless WM method, and `https://httpbin.org/get`.
  - Any other endpoint, and any POST/PUT/DELETE, needs the operator's approval for that call.
- Never put tokens or credentials in scripts, the repo or evidence.
  - The SSO route (`InvokeIONAPIMethod2`) needs none.
- Background tasks: creating a BGTaskDefinitions row, submitting a task or scheduling recurrence each needs the operator's approval, given for that row or that submit. G6 was approved for a single submit (EXP-145). G7 is not approved.

## Infor ION API from a C# form script: **observed** (EXP-144 G3)
- **Server:** ION API server 1 exists, with suites WM and DATAFABRIC (EXP-141).
- **Baseline:** test the call first in the vendor form **Test ION API Invoke** (`IONAPITestInvoke`). Read it only; never save it.
- **The call:**
  ```csharp
  InvokeRequestData req = new InvokeRequestData();
  req.IDOName = "IONAPIMethods";
  req.MethodName = "InvokeIONAPIMethod2";
  // 0 SSO "1", 1 serverId "1", 2 suite "WM", 3 verb "GET", 4 path, 5 params "", 6 content type "",
  // 7 timeout ms "10000", 8 binary "0", then outputs 9 code, 10 body, 11 headers, 12 infobar
  foreach (string p in new[] { "1", "1", "WM", "GET", "/wmwebservice_rest/v1/feature/helloworld", "", "", "10000", "0" }) req.Parameters.Add(p);
  for (int i = 0; i < 4; i++) req.Parameters.Add(IDONull.Value);
  InvokeResponseData res = IDOClient.Invoke(req);
  // res.Parameters[9].Value = HTTP code, [10] = body, [12] = infobar
  ```
- **Result:** 200, Infobar OK, "Hello World!".
- **Usings:** `Mongoose.IDO.Protocol`, `Mongoose.Scripting`. The class is `FX_X : FormScript` in namespace `Mongoose.FormScripts`.

## External HTTP from a C# form script: **observed** (EXP-144 G4)
- `HttpWebRequest` GET compiles in the form-script sandbox and works at runtime (200). The cloud tenant allows outbound HTTPS.
- `HttpClient` was **not** tried.
- Wrap the call in try/catch. Show the result as `ex.GetType().Name + ": " + ex.Message`, and clip the body to around 2 KB before putting it in a component.
- The response may reveal the tenant's egress IP (httpbin `origin`). Don't copy it into records.

## Showing results
- `ThisForm.Components["FX_ResultEdit"].Value = text;` writes to a MultiLineEdit.

## Calling an API from a web page (JS → C# → API): **observed** (EXP-149)
- JS never calls the API itself. A page button runs `WSForm.invoke("FX_CallX", cb)`. The C# method makes the call and writes the result to a **Global** variable with `ThisForm.Variables("FX_vApiResult").Value = text`. The callback then reads it with `WSForm.getVarValue("FX_vApiResult", cb)`.
- No token or credential reaches the browser.
- Reference: asset `assets/FX_ApiPage/index.html` (status line, 20 s timeout, `WSForm` guard), control `FX_ApiPageControl` on FX_ApiProbe.
- Both ION helloworld (200, "Hello World!") and httpbin (200) worked from the page.
- Mask `origin` before display (`FX_HideOrigin`).
- Wiring a page to a form: `web-user-controls.md`.
- **Unverified:** error display for a failing endpoint.
- **WM REST GET with a path from the page: observed (EXP-150).**
  - `FX_CallWmGet(path)`: the verb is fixed to GET in C#, and the path is checked.
  - Spec: `docs/Api-Gateway/SCE-WM-REST-API.json`.
  - The `{warehouse}` path parameter is the facility's full **`db_name`** from `GET /enterprise/facilities` (`<tenant>_<resource>_wmwhseN`). The bare `wmwhseN` gives 500 "Schema … invalid or not authorized".
  - The facilities response exposes internal DB server names. Don't screenshot it or copy it into records.
- **WM order list: observed (EXP-151).**
  - Endpoint: `POST /{wh}/bodlist/showshipmentorderlist?serialkey=S&recordcount=N`, with an empty `MethodParams` and no body. The operator approved this one POST.
  - It returns a JSON array of orders whose serialkey is in **(S, S+N]**. That is a serial-key *range*, not N rows, so pages can be short or empty where orders were deleted.
  - Step S by N. An empty range answers **404 `{"message":"No records found"}`**. Treat that as empty, and end after a few empty ranges.
  - Each order is about 6 KB and includes contact data. Cap the page size (25), and render chosen columns only.
  - Reference: `FX_ListShipments` (C#) plus the "Shipment orders" section of FX_ApiPage.
- **`InvokeIONAPIMethod2` parameter 5 (`MethodParams`) is a JSON array of `RestMethodParameter`: `[{"Name":..,"Value":..,"Type":"path"|"query"|"body"}]`. Observed in EXP-152 through the Test ION API Invoke form.**
  - Passing `{}` fails: "Cannot deserialize … requires a JSON array" (EXP-151).
  - `path` fills a `{name}` placeholder in the path, so the path can keep `{warehouse}`.
  - `query` adds a query parameter.
  - **`body`**: Value = the JSON *string*, and Content Type (parameter 6) = `application/json`. This created WM ASNs with `POST /{wh}/advancedshipnotice` (200, 20 times).
  - From C#: same array, **observed** (BLD-002 runtime). `FX_GenerateAsn` in `assets/FX_ASNPortal/FX_ASNPortal.cs.txt` built the array with `JObject`/`JArray`, posted with `application/json`, and WM created ASN 0000000414.
- **Json.NET dates in form scripts (BLD-002, observed).**
  - `JArray.Parse` / `JObject.Parse` turn ISO date strings into `DateTime`. `(string)token` then prints them in the server culture, e.g. "10/13/2026 11:00:00", not the ISO text.
  - To pass WM dates through unchanged, read with a `JsonTextReader` that has `DateParseHandling = DateParseHandling.None` (helper `FX_ParseJson` in FX_ASNPortal.cs.txt).
- **Script Editor rejected `using System.IO;` (BLD-002, observed once).** Adding that line gave "Cannot Save – the class name has changed (did you paste in the wrong script?)" on ▶. The fully qualified `new System.IO.StringReader(...)` with no new `using` compiled. Prefer fully qualified names over new `using` lines until the rule is understood.
  - Samples: `docs/Api-Gateway/samples/`.
- **WM ASNs (EXP-152), wmwhse1:**
  - list: `POST /{wh}/bodlist/showadvanceshipnoticelist` (query `serialkey`, `recordcount`). It leaves out `ext_udf_str*` and `suppliercode`.
  - read: `GET /{wh}/advancedshipnotice/{receiptkey}` and `GET /{wh}/advancedshipnotice/externreceiptkey/{key}`.
  - create: `POST /{wh}/advancedshipnotice` with a ReceiptDTO body. WM assigns the receiptkey. If externreceiptkey is omitted, WM sets it to `WMS<receiptkey>`.
  - The test ASNs `FXTEST-0001…0020` are still in WM.
- **WM item lookup (BLD-002, observed):** `GET /{wh}/items/{sku}/{owner}` from C# (`FX_FindSku` in FX_ASNPortal.cs.txt). `MNSSKU1`/`MINISO` returned a SkuDTO with `descr` "Miniso SKU1". An unknown SKU was treated as not found: the code accepts 404 or an empty body, and the exact status WM sent was not logged.
  - The WM spec in this repo has **no list-all-items endpoint**, so a SKU picker must be typed in and checked, or must come from another source.

## Wiring a button to a script method (Designer): **observed**
1. **Script:** Form › Script Editor. Insert the flush-left source with `page.keyboard.insertText(...)`; typing it would auto-close braces.
2. **Compile:** click ▶, then expand Compile Result and look for "Built with 0 errors".
3. **Save.**
4. **Handler:** Details › Event Handlers › `+` → type the name and press **Enter**. Clicking OK can drop the last character, so check the name afterwards.
5. **Type:** in the property grid, set Response › Type to **Form Script Method**. The options are `table.mg-list-table td` cells; scroll the option into view, then click it.
6. **Method:** Parameters "…" → Edit Script Name and Parameters → the Name list shows the compiled public methods → OK.
7. **Button:** set the button's Events › Primary to the handler name.
8. **Persist:** Save, then reload the Designer and reopen the form to read it back.
9. **Runtime:** a new form only shows in the Web Client's Select Form after the Web Client page is reloaded.

## Background tasks: survey and submitting **observed** (EXP-142, EXP-144 G5, EXP-145 G6)
- **TaskMan runs tasks in this cloud tenant** (EXP-145).
  - An RPT+DATAVIEW task went from submitted to "Task Succeeded" in about 12 s, on task server `RGJU-I9DPAFZ-SV`.
  - The PDF was written to IdmFileServer (`IdmFileServer_Reports`).
- **Definitions:**
  - Background Task Definitions holds 24 vendor rows. Executable Types are SP / RPT / IDOMTH; Report Types are SSRS / DATAVIEW / FORM.
  - The vendor rows are editable. Never type into an existing row.
  - **Filter in Place does not treat `%` as a wildcard.** Filter on the exact Task Name.
  - An empty result auto-starts an unsaved new row (★).
- **Proven submit route (EXP-145):**
  1. **New definition row:** Task Name `FX_…`, Executable Type RPT, Report Type DATAVIEW, Executable Name `<DataView name>`, Max Concurrent 20, Cross-Site -1. Save, then re-filter by the exact name.
  2. **FX_ form handler:** Response Type **Run Background Task**. In Parameters, the "Edit Background Task Name And Parameters" section has Task Name (combo of definitions), Task Parameters (comma list in the DataView's input order), Task Status, Task Number and Profile Parameters. Add a Success Message on the General tab.
     Result: `TASKNAME(FX_SchemaProbe)TASKPARMS(FX_InventoryItems,FX_InventoryItems,1,) SUCCESSMESSAGE(FX_SchemaProbe submitted)`.
  3. **Button:** Primary = the handler. Save, then reload the Designer to confirm. Click it once at runtime.
  4. **What you see:** the success message, then (RPT only) a **Report Viewer tab opens by itself** (`IDORequestService/ReportServer.aspx?TaskHistoryRowPointer=…`). It waits, then shows the PDF.
  5. **Read the result:** Background Task History (`BGTaskHistory`, Select Form filter `BGTask`) → Actions › Filter › Execute in Place on Task Name. It shows Return Status, Submitted/Started/Completed, Initiator `Form.<form>`, Task Server, Process ID, parameters and the file server path.
- **Active Background Tasks** is read-only: New is disabled.
- **Pattern from vendor DatabaseSchemaReport:**
  - **Run now:** the button event runs **Run Background Task** with
    `TASKNAME(V(BGTaskName)) TASKPARMS(V(BGTaskParms)) TASKSTATUS(V(BGTaskStatus)) TASKNUMBER(BGTaskNumber) ERRORMESSAGE(mBackEndMessage)`,
    then a Run Script step to confirm.
    - `BGTaskName` is a form variable that holds the definition's Task Name.
    - `BGTaskParms` is a comma list such as `V(A),V(B)`.
  - **Schedule:** Run Form as Modal Child `BackgroundQueue( SETVARVALUES(BGTaskName=V(BGTaskName), RunTaskEvent=<the run-now event>) )`.
    - BackgroundQueue is the dialog for Once / Daily / Weekly / Monthly scheduling. Its **OK** fires the parent's run-now event.
  - **Preview without a task:** Run Form `WBDataViewResults( SETVARVALUES(DataViewName=<name>, InputParameter1=...) )`.
- **Server method:** `BGTaskDefinitions.BGTaskSubmit` (SP `BGTaskSubmitSp`), with 20 parameters: TaskName, TaskParms1, TaskParms2, Infobar, TaskID, TaskStatusCode, …, Sched*.
  - Calling it from C# through `IDOClient.Invoke` should be possible, but is **unverified**.
- **IDOMTH (EXP-146):**
  - The Executable Name is `IDO.Method` (vendor examples: `AuditLogs.DeleteAuditLogEntrySp`, `WBSnapshots.SnapshotGeneration`).
  - Pick Executable Type **from the dropdown**; typed text doesn't take.
  - Vendor launchers pass TASKPARMS as a positional comma list and may add `BG~TASKID~`. The value count need not equal the method's parameter count.
  - **IDOMTH `IONAPIMethods.InvokeIONAPIMethod2` (SSO=1) failed** with "Task Failed - Error -1", no message and no Process ID. TaskMan did dispatch it. The cause is not isolated.
  - **A vendor SP method (`UserNames.GetUserAttributes`, no ION) fails the same way** (EXP-148), on a different task server. So **IDOMTH itself fails in this MTC tenant**, independent of ION/SSO. The likely cause is that IDOMTH dispatch isn't provisioned; this is for Infor Support.
  - EXP-147: Background Task History held no earlier vendor task runs, so there is no successful IDOMTH baseline here.
  - **Don't build features on IDOMTH here.** Calling ION from a background task is **not working**. Use the form-script route (synchronous) until a background route is proven.
- **Still unverified:**
  - recurring schedules through BackgroundQueue;
  - whether any IDOMTH task succeeds here (reportedly it needs a TaskMan configuration named after the site);
  - SP tasks;
  - submitting from C# through `BGTaskSubmit`;
  - a task that calls an API (G7);
  - purging history rows or report files.
