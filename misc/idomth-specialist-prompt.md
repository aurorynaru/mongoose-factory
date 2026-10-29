You are an Infor Mongoose specialist. I need help diagnosing a failed IDOMTH background task in a **multi-tenant cloud (MTC)** Mongoose tenant. Please answer only from what you know or can cite. For every answer, label it **Documented** (give the document title, version and page or URL) or **Inference**, and say whether the source describes **on-premises** or **MTC** behaviour. If you don't know, say so. Please don't fill gaps with guesses.

## Environment (what I know)
- Infor Mongoose Web Client and Web Designer, multi-tenant cloud, opened through the Infor OS portal.
- I don't know the exact product version. I haven't confirmed whether this is a standalone Mongoose tenant or CloudSuite Industrial (CSI). If your answer depends on that, please answer for both.
- I'm a customer administrator. I have **no** server access: no TaskMan host, no Event Viewer, no TaskMan configuration manager.

## Observed facts
1. **RPT background tasks work.** I created a definition in Background Task Definitions: Executable Type RPT, Report Type DATAVIEW, a vendor DataView. A form event handler with Response Type "Run Background Task" submitted it. Background Task History showed "Task Succeeded", a Process ID, and about 11 s of run time. The PDF was written to the IDM file server.
2. **ION from a form script works.** A C# form script calls `IDOClient.Invoke` on `IONAPIMethods.InvokeIONAPIMethod2` and gets HTTP 200 and "Hello World!" back. It passes 13 parameters:
   - 0 SSO = `1`
   - 1 server ID = `1`
   - 2 suite = `WM`
   - 3 verb = `GET`
   - 4 path = `/wmwebservice_rest/v1/feature/helloworld`
   - 5 params = empty
   - 6 content type = empty
   - 7 timeout = `10000`
   - 8 binary = `0`
   - 9–12 = outputs: HTTP code, body, headers, Infobar
   - Note: the IDO Methods form showed this method as an **Extension Class** standard method. I only read parameters 1–7 there (SSO, serverID, APIContext, httpMethod, methodName, methodParams, requestContentType). The count of 13 comes from the working script, not from the metadata screen.
3. **The same call as an IDOMTH background task fails.**
   - Definition: Executable Type **IDOMTH**, Executable Name `IONAPIMethods.InvokeIONAPIMethod2`, Max Concurrent 1, Cross-Site -1.
   - Submitted from a form event handler (Run Background Task):
     `TASKNAME(<my task>)TASKPARMS(1,1,WM,GET,/wmwebservice_rest/v1/feature/helloworld,,,10000,0,,,,) SUCCESSMESSAGE(...)`
   - Background Task History:
     - Return Status = **"Task Failed - Error -1"**
     - Error Message = **empty**
     - Task Messages = **none**
     - Process ID = **empty**
     - Submitted, Started and Completed are all within about 1 s
     - Task Parameters are stored exactly as sent
4. **Vendor IDOMTH definitions** use Executable Name `IDO.Method`, for example `AuditLogs.DeleteAuditLogEntrySp`, `CorInboxEntries.PurgeBodInformationSp`, `WBSnapshots.SnapshotGeneration` and `DatalakeLogs.Schedule`.
   - The vendor launcher for `CorInboxEntries.PurgeBodInformationSp` passes `V(ThruDateOffset),V(NullVar),BG~TASKID~`, which is **3** values.
   - IDO Methods lists that method as a Stored Procedure method with **2** parameters (PurgeDate, Infobar).
5. **What the Mongoose Administration Guide 2023.x says** (it may describe on-premises behaviour):
   - p.74: IDOMTH needs a TaskMan configuration named after the site.
   - p.75: Error -1 should come with an explanation in Error Message.
   - p.91: task parameters "match the IDO method's parameters".
   - pp.92–93: `BG~TASKID~` and `BG~REQUSER~` substitution.
   - pp.93–94: TaskMan debug output goes to the server Event Viewer.
   - pp.277–281: "Use SSO" authenticates with the user's Infor OS / Ming.le session.

## Constraints on any suggested fix
- No custom .NET assemblies or IDO extension class deployments.
- No tenant-wide setting changes (for example Process Defaults "TaskMan options"), unless you explain that they're needed and safe.
- No tokens or credentials in scripts.
- Outbound calls are limited to GET on harmless endpoints.
- Every submit is a separately approved test, so I need answers that let me design **one** decisive next test.

## Questions
1. **Does IDOMTH run at all in MTC?** Does the p.74 "configuration named after the site" requirement apply to multi-tenant cloud, or does Infor's Cloud team provide it? Is there a customer-visible way to check?
2. **Parameter mapping.** How does TaskMan map TASKPARMS onto an IDO method's parameters?
   - Positional or by name?
   - How are empty values handled, and output parameters?
   - What happens when the number of values doesn't match the number of parameters? This is the PurgeBOD 3-vs-2 case.
   - Where must `BG~TASKID~` go?
   - Is my 13-value string correct for `InvokeIONAPIMethod2`?
3. **Are Extension Class methods supported** as IDOMTH executables, or only stored-procedure methods (or methods with a specific signature or return convention)?
4. **What does "Task Failed - Error -1" mean** when Error Message is empty, there are no Task Messages and there's no Process ID? Did it come from TaskMan (dispatch or launch failure) or from the method's return value? Which customer-accessible forms or logs could show more?
5. **SSO in the background.** Does `InvokeIONAPIMethod2` with SSO = 1 work when no interactive user session exists, as with TaskMan? If not, what is the documented route for calling an ION API from a background task in MTC? For example: a non-SSO ION API server with an uploaded `.ionapi` file, `InvokeIONAPIMethodWithToken`, or something else. What are the security implications?
6. **A safe smoke test.** Name one vendor IDO method that is read-only and harmless and that is known to run as IDOMTH. Give its exact signature and the exact TASKPARMS string, so I can confirm that IDOMTH dispatch works here, separately from ION.
7. **Alternatives.** If IDOMTH can't call ION here, what documented, customer-configurable ways are there to call an ION API (or an external HTTP GET) on a schedule or in the background in MTC Mongoose? For example: an SP task, the event system / Event Handlers, ION Workflow / ION Connect, or a scheduled form script. Please mark which are documented for MTC.

## Answer format
- Number your answers 1–7.
- For each answer: give the answer, mark it Documented or Inference, give the source and page or URL, and say whether it applies on-premises or in MTC.
- End with the **single next test** you recommend and what each possible result would prove.
