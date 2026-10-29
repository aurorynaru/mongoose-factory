# EXP-147: Read-only checks before the next IDOMTH test

Status: **observed (read-only).** Nothing was submitted, saved or changed.

Approval (operator, 2026-10-28): "yes go ahead". The approval covers two read-only checks:
- (a) Background Task History, looking for built-in IDOMTH runs that succeeded;
- (b) `UserNames.GetUserAttributes` in IDO Methods.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`01`).

## Results
- **(a) Background Task History, unfiltered** (blank filter, then Execute in Place; `03`): **only 2 rows**.
  - Task 2: FX_IonHelloTask, IDOMTH, Task Failed - Error -1.
  - Task 1: FX_SchemaProbe, RPT, Task Succeeded.
  - No built-in task has a history row visible to this account, IDOMTH or any other type.
  - Our first task got number 1. That suggests (inference) that no background task has run in this tenant before EXP-145, or at least none that this account can see.
  - **So no built-in IDOMTH success exists to learn from.** Whether IDOMTH works here can't be settled without a submit.
  - `03` also shows the Task 2 history row has Logical Folder Name `IdmFileServer_Reports` filled in, although no file was produced and Process ID is empty.
- **(b) `UserNames.GetUserAttributes`** (`04`):
  - Method Type **Stored Procedure - Standard Method**; Stored Procedure `GetUserAttributesSp`; not Transactional; no description.
  - Parameters, all VARIANT, in sequence:
    1. Username
    2. EditLevel
    3. SuperUserFlag
    4. FormGroupName
    5. Infobar
  - The form doesn't show the direction of each parameter, or what the SP does inside. "Read-only" is inferred from the name only.
  - It's the same method type as the built-in IDOMTH executables, for example `CorInboxEntries.PurgeBodInformationSp` (EXP-146). `InvokeIONAPIMethod2` is an Extension Class method instead.
- **Infor docs checked (CSI 2026.10, public):**
  - "Setting up IDO methods" (`dco1541666601157`): IDOMTH setup; parameters must match the method's parameters. It says nothing about a site-named configuration and nothing about on-premises versus cloud.
  - "InvokeIONAPIMethod2 ION API method" (`hla0965372315874`): confirms the 13 parameters, from 0 SSO to 12 Infobar. The code signature also has `idoContext` and `ionapiPassword`. Nothing about TaskMan.
  - "GetBearerToken2 ION API method" (`plp9708475423462`): "exchanges the current Ming.le session for an OAuth token when SSO is enabled, or falls back to the resource owner password flow when SSO is not available."

## Pitfalls
- The Select Form filter field kept the previous text, and the new typing was appended to it. Clear it with Ctrl+A, Delete before typing.
- The IDO Methods output-properties grid starts an empty ★ row by itself. The form closed without a save prompt when nothing was typed there.

## Evidence (`evidence/EXP-147/`)

| File | Shows |
|---|---|
| `01` | Account and an empty Web Client |
| `02` | BGTaskHistory opened in filter mode |
| `03` | **Unfiltered history: 2 rows (Tasks 1 and 2 only)**, with the Task 2 detail |
| `04` | **GetUserAttributes: SP standard method, 5 parameters** |
| `05` | Both forms closed, with no save prompt |
