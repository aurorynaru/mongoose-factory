# Infor CSI / Mongoose 2026 Multi-Tenant — IDOMTH Failure Investigation

Act as a senior Infor Mongoose/CSI TaskMan and IDO specialist. Use primary 2026.x Infor documentation when possible. Do not assume behavior documented only for on-premises applies to a multi-tenant tenant.

## Hard constraints

- Environment: Infor CloudSuite Industrial / Mongoose **multi-tenant cloud**, observation date **2026-10-28**.
- There is **no custom .NET IDO method or extension assembly** involved.
- The executable tested is Infor's **vendor-provided standard extension-class method** `IONAPIMethods.InvokeIONAPIMethod2` (not a custom wrapper).
- This was a **test call**, not an established production integration.
- **Do not suggest deploying custom .NET assemblies, custom IDO extension classes, or on-premises service/configuration changes** as an actionable fix. Such changes are outside our scope.
- Do not request or include tenant IDs, account email addresses, configuration names, credentials, or `.ionapi` contents.

## Observed facts (do not overwrite these with assumptions)

1. A vendor DataView `Database Schema Report` submitted via a form's `Run Background Task` response ran as `RPT + DATAVIEW` and finished **Task Succeeded** in approximately **12 seconds**. Background Task History shows **Process ID 16,792**, with a PDF written to **IdmFileServer**. Therefore **RPT/TaskMan execution works** in this tenant. This does **not** establish that IDOMTH works.
2. IDOMTH task definition:
   - Executable Type: `IDOMTH`
   - Executable Name: `IONAPIMethods.InvokeIONAPIMethod2`
   - Vendor **extension-class standard** IDO method
   - IDO metadata shows **13 VARIANT parameters**, reported as: SSO, serverID, APIContext, httpMethod, methodName, methodParams, requestContentType, timeout, binary, followed by **4 output positions**.
   - Exact submitted `TASKPARMS`:
     ```
     1,1,WM,GET,/wmwebservice_rest/v1/feature/helloworld,,,10000,0,,,,
     ```
   - This comma-separated string contains **13 positional fields** (indices 0–12); the last four are empty.
   - Result: `Task Failed - Error -1`.
   - Started and Completed timestamps show the **same second**.
   - Error Message: **empty**.
   - Task Messages: **empty**.
   - Process ID: **empty**.
3. The same `InvokeIONAPIMethod2` invocation using **SSO=1**, ION API Server **1**, suite/API context **WM**, and HTTP **GET** to `/wmwebservice_rest/v1/feature/helloworld` succeeded interactively from a **C# form script** using `IDOClient.Invoke`. Result: **HTTP 200** and `Hello World!`. This proves the endpoint and interactive method call work, NOT that SSO works in the TaskMan runtime.
4. A shipped vendor Background Task Definition is:
   - Task name: `PurgeBodInformation`
   - Executable type: `IDOMTH`
   - Executable name: `CorInboxEntries.PurgeBodInformationSp`
   - Its visible IDO method metadata shows **two parameters**, `PurgeDate` and `Infobar`.
   - Its launcher form passes:
     ```
     V(ThruDateOffset),V(NullVar),BG~TASKID~
     ```
     That is apparently **three values for two metadata parameters**. This discrepancy is observed and unresolved. Do **not** infer that all IDOMTH calls require an extra TaskID argument without documentation or reproduction.
5. There are **18 vendor IDOMTH task definitions** in the tenant. Before these tests, **none had Background Task History records**. No vendor IDOMTH execution has yet been demonstrated.
6. **No custom .NET assemblies / IDO extension classes can be deployed** under the current scope.

## Questions to investigate, in order

### A. Can IDOMTH dispatch at all in this tenant?
1. What precise TaskMan execution branch is used for `IDOMTH`, compared with `RPT + DATAVIEW`? Does a blank Process ID mean anything for IDOMTH, or might successful IDOMTH executions also have no Process ID?
2. Does a same-second `Task Failed - Error -1`, with no Error Message or Task Messages, suggest dispatch/configuration failure, parameter binding failure, authorization error, or method return status? Provide **evidence**, not just guesses.
3. Can a multi-tenant CSI TaskMan instance run IDOMTH as documented? Does it require special cloud provisioning, a site-named configuration, or a mapped configuration? Which portions of Infor's configuration guidance are on-premises-only?
4. Which customer-visible diagnostics can identify the failing stage? Which details must Infor Cloud Support inspect?

### B. TASKPARMS vs IDO method signature
1. Are `TASKPARMS` values mapped to IDOMTH parameters positionally, and how are blank fields handled?
2. Must output `VARIANT` parameters be represented as empty placeholders?
3. Is `Infobar` automatically appended by TaskMan or must it occupy a position in TASKPARMS?
4. What exactly happens to `BG~TASKID~`? Is it merely substituted in-place, stripped, used as a TaskMan control field, or passed as an IDO argument?
5. **Explain or experimentally distinguish** the vendor `PurgeBodInformationSp` launcher with 3 TASKPARMS values versus 2 visible method parameters. Consider that form metadata and effective server signature may differ, or that some arguments may be consumed by the background subsystem; do not assume one explanation.
6. Could the direct `InvokeIONAPIMethod2` signature be incompatible with TaskMan's IDOMTH conversion, return-code, or output conventions despite working through `IDOClient.Invoke`?

### C. ION API authentication — only *after* dispatch is proven
1. Does `SSO=1` from `IONAPIMethods.InvokeIONAPIMethod2` have a valid Ming.le session when invoked under IDOMTH? Provide official evidence or clearly classify as unverified.
2. If unattended SSO is not supported, is `SSO=0` with a configured ION API Server supported for this exact vendor method? What non-SSO grant/credential requirements apply in MTC?
3. When and how can vendor `GetBearerToken2` plus the appropriate token-based invoke method be used **without a custom .NET extension**?
4. Do not propose an architecture requiring assembly deployment. Consider no-code Mongoose form events, permitted scripts, AES, or vendor methods only if supported by evidence.
5. Preserve the fact that the interactive GET returns HTTP 200, while the background task has no captured HTTP response.

### D. Safe, concrete tests
1. Propose a **read-only vendor-supplied** IDOMTH smoke test available in CSI 2026. Verify IDO method signature and exact TASKPARMS; avoid destructive purge/posting methods.
2. Prioritize tests that isolate dispatch/argument mapping from ION authentication.
3. For each test, list the exact task definition, TASKPARMS, expected success evidence, failure interpretation, and what a blank PID does or does not mean.
4. If a suggested method is not proven IDOMTH-compatible, label it as a **candidate**, not "known-good."
5. Provide an actionable **Infor Support incident description** containing no tenant-identifying or credential information.

## Source material

Local extracted Infor document sections under `docs/mongoose/source/`:

- `mongoose_admin_2023_taskman_pp65-104.txt` — Infor Mongoose Administration Guide 2023.x, TaskMan and background tasks, printed pp. 65–104.
- `mongoose_admin_2023_ion_api_pp277-281.txt` — same, ION API configuration, pp. 277–281.
- `mongoose_ido_integration_2021_invoke_pp34-36_39-40_134-136.txt` — Infor Mongoose IDO Integration with External Applications, Invoke/REST examples.
- `mongoose_basics_2021_background_pp93-94.txt` — Infor Mongoose Basics, background tasks.

Current documentation:

- https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgaug_mg/zrk1541564076963.html
- https://docs.infor.com/csi/2026.10/en-us/csbiolh/mgaug_cl_sl/dco1541666601157.html
- https://docs.infor.com/csi/2026.10/en-us/csbiolh/mgaug_cl_sl/plp9708475423462.html
- https://docs.infor.com/csi/2026.10/en-us/csbiolh/mgaug_cl_sl/hla0965372315874.html

Cite exact document edition, printed page number, or URL for every important product claim. The older PDF chapters may describe on-premises behavior and are **not automatically authoritative for MTC 2026**.

## Required response format

1. Evidence table: observed fact vs documented behavior vs hypothesis vs next test.
2. Highest-priority root cause hypotheses, emphasizing IDOMTH dispatch and parameter handling **before SSO**.
3. Explanation of the 2-parameter / 3-value vendor example, with explicit uncertainty if unresolved.
4. Minimal safe smoke test using vendor methods only.
5. Cloud-supported, no-custom-assembly options for unattended ION calls.
6. Specific information to request from Infor Support, without tenant secrets.

Do not claim that the `-1` is definitely the method return code or definitely an SSO failure. Do not claim a missing Process ID proves dispatch failed.
