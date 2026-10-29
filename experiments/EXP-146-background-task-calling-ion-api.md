# EXP-146: Background task that calls an ION API (G7)

Status: **done, result negative.** The IDOMTH task ran on TaskMan and returned **Task Failed - Error -1** with no message. The cause is not established, and the single approved submit is used up.

Approval (operator, 2026-10-28):
- "G7 first": start with a read-only survey of IDOMTH requirements;
- then create an FX_ IDOMTH definition that runs an ION **GET** to the WM helloworld endpoint;
- submit it **once**;
- **stop before any token or ION API setup change**.

The FX_SchemaProbe objects from EXP-145 are kept, as the operator decided.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Designer is in User scope.

## Survey (read-only)
- **Vendor IDOMTH definitions** (`01`–`04`): there are 18 IDOMTH rows. Their Executable Name is **`IDO.Method`**, with no ProgID. Examples:
  - `AuditLogs.DeleteAuditLogEntrySp`
  - `UserLoginInformations.PurgeUserLoginInformationSp`
  - `CorInboxEntries.PurgeBodInformationSp`
  - `WBSnapshots.SnapshotGeneration`
  - `DatalakeLogs.Schedule`

  Report Type and Paper Size are disabled for IDOMTH. Max Concurrent is 1 or 20; Cross-Site is -1.
- **Vendor launcher PurgeBODInformation** (`05`, `06`). It was opened read-only in the Designer, Vendor Default version, and closed without a save prompt.
  - Process event:
    - Run Script `SetDateOffset(...)`;
    - then **Run Background Task** `TASKNAME(V(BGTaskName))TASKPARMS(V(BGTaskParms))TASKSTATUS(V(BGTaskStatus))TASKNUMBER(BGTaskNumber) ERRORMESSAGE(mBackEndMessage)`.
  - The variable `BGTaskParms` = `V(ThruDateOffset),V(NullVar),BG~TASKID~`. This is a positional comma list, including the substitution keyword `BG~TASKID~`.
- **Method signature** (`07`): `CorInboxEntries.PurgeBodInformationSp` is a Stored Procedure method with **2** parameters (PurgeDate, Infobar). The launcher sends **3** values.
  - So the mapping from TASKPARMS to the method's parameters is **not a strict 1:1 count**. Extra values seem to be tolerated, or the SP has more parameters than the IDO metadata (unverified).
- **`IONAPIMethods.InvokeIONAPIMethod2`** (`08`) is an Extension Class standard method. Its parameters are SSO, serverID, APIContext, httpMethod, methodName, methodParams, requestContentType, … 13 in total (EXP-144).
- **Not checked, and not checkable from the UI:** whether the cloud TaskMan has the "configuration named after the site" that the documentation says IDOMTH needs. The run will show it.

## Plan
1. **Definition** (BGTaskDefinitions): `FX_IonHelloTask`, Executable Type IDOMTH, Executable Name `IONAPIMethods.InvokeIONAPIMethod2`, Max Concurrent 1, Cross-Site -1. Save, then re-filter by the exact name.
2. **FX_ApiProbe:** handler `FX_RunIonTask`, Response Type Run Background Task, parameters `TASKNAME(FX_IonHelloTask)TASKPARMS(1,1,WM,GET,/wmwebservice_rest/v1/feature/helloworld,,,10000,0,,,,)`.
   - That is 13 positional values: 9 inputs and 4 empty output slots.
   - SUCCESSMESSAGE `FX_IonHelloTask submitted`.
   - Button `FX_BGIonButton`. Save, then reload to verify.
3. **Run:** click once, then read Background Task History (Return Status, Error Message, Task Messages).
4. **What a success would and wouldn't prove:** History shows only the method's return status and messages. The HTTP code and body are output parameters and are not stored. So "Task Succeeded" proves that TaskMan ran the IDOMTH extension method. It does not by itself prove a 200 from ION. Record exactly what is visible.

## Objects created (cleanup list)
1. **BGTaskDefinitions row `FX_IonHelloTask`** (tenant-wide, in a vendor table):
   - IDOMTH, Executable Name `IONAPIMethods.InvokeIONAPIMethod2`;
   - Max Concurrent 1, Cross-Site -1;
   - Description "EXP-146 probe: …".
2. **FX_ApiProbe User version:**
   - handler `FX_RunIonTask`: Run Background Task, `TASKNAME(FX_IonHelloTask)TASKPARMS(1,1,WM,GET,/wmwebservice_rest/v1/feature/helloworld,,,10000,0,,,,) SUCCESSMESSAGE(FX_IonHelloTask submitted)`;
   - button `FX_BGIonButton` "Run ION BG task", Primary FX_RunIonTask. It came out oversized again and sits below the result box.
3. **Run output:** one Background Task History row, Task Number 2.

## Results
- **Definition:** saved (`11`), then re-found by exact name after close/reopen (`12`). The baseline before creation was empty (`09`).
  - Typing `IDOMTH` into Executable Type did **not** take. It had to be picked from the dropdown list (`10`).
- **Handler + button:** saved (`14`, `16`). After a full Designer reload and reopen, Primary = FX_RunIonTask and both handler parameter strings were read back exactly (`17`). The button is in the runtime form (`18`).
- **Submit:** one click on "Run ION BG task" (accessibility ref).
  - The SUCCESSMESSAGE alert "FX_IonHelloTask submitted" appeared in the accessibility tree but **was not visible in the screenshot** (`19`). It was dismissed with OK.
  - No Report Viewer tab opened; that is expected for IDOMTH.
- **Background Task History** (`20`, `21`):

  | Field | Value |
  |---|---|
  | Task Number | 2 |
  | Task Type | IDOMTH |
  | Executable | `IONAPIMethods.InvokeIONAPIMethod2` |
  | Initiator | `Form.FX_ApiProbe` |
  | Task Server | RGJU-I9DPAFZ-SV |
  | Submitted / Started / Completed | 2:36:00 / 2:36:01 / 2:36:01 AM, as displayed |
  | **Return Status** | **Task Failed - Error -1** |
  | Error Message | empty |
  | Task Messages | none |
  | Process ID | empty (the RPT task had 16,792) |
  | Task Parameters | stored exactly as sent |

## What this shows and doesn't show
- **Shown:**
  - TaskMan picks up an IDOMTH task from the cloud tenant and dispatches it within about 1 s.
  - It fails right away with -1 and gives no diagnostic text.
- **Not established:** which layer failed. Candidates:
  1. TaskMan can't run IDOMTH here: the "configuration named after the site" is missing.
  2. The positional TASKPARMS mapping onto the 13-parameter extension method is wrong, for example the empty output slots or the parameter count.
  3. `InvokeIONAPIMethod2` with SSO=1 has no user session or bearer token in the background, so the call fails and the method returns -1.
  4. The method returned non-zero because of an HTTP/ION failure.
- **No HTTP evidence either way.** No ION call is visible from here.

## Suggested next probe (needs approval; nothing more was submitted)
**One IDOMTH submit of a trivially safe method** to separate candidate 1 from candidates 2–4.
- For example, a read-only IONAPIMethods info method with simple string parameters, or a vendor no-op.
- If it succeeds, IDOMTH works here, and the -1 belongs to the ION call or the parameter mapping. The likely route is then a token-based call (`InvokeIONAPIMethodWithToken`), which needs the operator's decision on token handling.
- If it fails the same way, IDOMTH itself is blocked in this tenant. API calls in the background would then need another route, such as a C# form script driven by an event, or an SP/RPT route.

## Evidence (`evidence/EXP-146/`)

| File | Shows |
|---|---|
| `01`–`04` | Vendor IDOMTH definitions (`IDO.Method` format) |
| `05`, `06` | PurgeBODInformation launcher: Run Background Task parameters, and BGTaskParms = `V(ThruDateOffset),V(NullVar),BG~TASKID~` |
| `07` | `CorInboxEntries.PurgeBodInformationSp`: 2 parameters |
| `08` | `IONAPIMethods.InvokeIONAPIMethod2`: Extension Class, parameters 1–7 visible |
| `09`–`12` | FX_IonHelloTask: baseline, filled, saved, reopened |
| `13`, `14` | Run Background Task parameters, then handler saved |
| `15`–`17` | Button properties, saved, and after Designer reload (Primary persisted) |
| `18`, `19` | Runtime form; after the click (the alert is not rendered in the image) |
| `20`, `21` | **History: Task Failed - Error -1**, with no messages |

## State left
- **Web Client:** FX_ApiProbe is open. History was closed.
- **Designer:** FX_ApiProbe is open in User scope, saved.
- **Tenant:** the objects above. Nothing is scheduled; the task is not re-queued.
