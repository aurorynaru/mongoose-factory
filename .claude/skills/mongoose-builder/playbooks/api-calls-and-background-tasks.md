# Playbook: API calls from form scripts, and background tasks

Source: EXP-141, EXP-142, EXP-144. Reference build: **FX_ApiProbe** (User scope). Its script is `assets/FX_ApiProbe/FX_ApiProbe.cs.txt`, and the install copy is `FX_ApiProbe.flat.cs.txt`.

## Approval gates
- An outbound call is an action against another system.
  - Approved so far: ION **GET** to a harmless WM method, and `https://httpbin.org/get`.
  - Any other endpoint, and any POST/PUT/DELETE, needs the operator's approval for that call.
- Never put tokens or credentials in scripts, the repo or evidence.
  - The SSO route (`InvokeIONAPIMethod2`) needs none.
- Background tasks: creating a BGTaskDefinitions row or submitting a task needs approval (G6/G7 are not yet approved).

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

## Background tasks: survey **observed**, submitting **unverified** (EXP-142, EXP-144 G5)
- **Definitions:**
  - Background Task Definitions holds 24 vendor rows. Executable Types are SP / RPT / IDOMTH; Report Types are SSRS / DATAVIEW / FORM.
  - The vendor rows are editable. Never type into an existing row.
  - The History and Active Tasks lists were empty: nothing has run yet, so TaskMan is unproven here.
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
- **Planned first probe (G6, needs approval):**
  1. Create an FX_ definition row (RPT + DATAVIEW over FX_InventoryItems).
  2. Add an FX_ button that runs Run Background Task.
  3. Submit once, then read Active Background Tasks and Background Task History.
- **Unverified:** whether TaskMan runs in this cloud tenant. IDOMTH tasks reportedly need a TaskMan configuration named after the site.
