# EXP-142: Background tasks, read-only survey

Status: **complete** (read-only; nothing saved, submitted or created). 2026-10-27, run directly in the session (Playwright MCP). Roadmap item E1 (`docs/roadmap-unverified-areas.md`).
Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header, visible in every screenshot).

## Objective
Before E2, find out:
- which background-task forms exist;
- the definition fields and executable/report types;
- whether TaskMan has run anything in this tenant.

Change nothing.

## Observations
### Forms (Web Client Open › Select Form, filter `BGTask`)
- ActiveBGTasks ("Active Background Tasks")
- ActiveBGTasksPurgeUtility ("Active Background Tasks Purge Utility")
- BGTaskDefinitions ("Background Task Definitions")
- BGTaskDefinitionsQuery
- BGTaskHistory ("Background Task History")
- BGTaskHistoryQuery

### Background Task History (`BGTaskHistory`), `01`, `02`
- It opens in **Filter in Place** mode. Actions › Filter › Execute in Place loaded **zero records** (`02`: grid empty, fields greyed).
- **No background task has run in this tenant**, or at least none visible to this account.
- Header fields: Task Number, Task Description, User Name, Initiator, Return Status, Task Server, Error Message, Submitted / Started / Completed.
- Tabs: **Task Details** (Task Name, Task Type, Process ID, Executable, Report Type, Server Name, Logical Folder Name, File Server Path, Task Parameters), **Task Messages**, **Report Data Attributes**.

### Background Task Definitions (`BGTaskDefinitions`), `03`, `04`
- It opens in Filter in Place mode.
- **Fields:**
  - Task Name, Task Description;
  - Executable Name*, Executable Type*, Exclusive;
  - Report Type, Paper Size;
  - Max Concurrent*, Max Concurrent Cross-Site*, Isolation Level.
- **Buttons:** Excluded Tasks…, Cross-Site Excluded Tasks…, Report Options…, Report Data Attributes. There is also a Workflow Summary grid (Event Name / Event Handler Count).
- **Executable Type list:** `SP`, `RPT`, `IDOMTH`.
- **Report Type list:** `SSRS`, `DATAVIEW`, `FORM`. Read in Filter in Place mode; nothing was picked.
- Execute in Place loaded **24 vendor definitions**:
  - DatabaseSchemaReport, DeleteAuditLogs, DeleteTriggerMessageLogs, ManualReplication, ManualReplicationQueue, PerformLoadTestingFromConfig…, PurgeBodInformation, PurgeInboxOutBoxEntries, PurgeNextKeysSp, PurgeUserLoginInformation;
  - QuickDictionaryReport, RegenerateInsertUpdateTrigge…, RemoveOrphanedSessions, ReplDocInboxOutboxPurgeUtil…, ReplDocManualRequestUtilityS…, RepRowShadowValDelUtil, RestoreInboxOutBoxEntries, ScheduleLocalizeDatalake;
  - UserAuthorizationReport, UserClassReport, UserFieldsReport, UserIndexReport, WBEmailGeneration, WBSnapshotGeneration.
- **Template for a DataView task** (row 1, `04`): **DatabaseSchemaReport**:
  - Executable Name `Database Schema Report`;
  - Executable Type **RPT**;
  - Report Type **DATAVIEW**;
  - Max Concurrent 20, Max Concurrent Cross-Site -1, not Exclusive.
- **Warning:** the vendor definition fields are **editable** (white, not greyed). One stray keystroke followed by Save would change a vendor row. In E2, create the FX_ row with New and touch nothing else.
- Closed with no prompt, no dialog afterwards.

### Active Background Tasks (`ActiveBGTasks`), `05`
- It loads directly, without Filter in Place. **Empty.**
- Fields: Task Number, Task Name, Status, Task Type, Task Server, User Name, Initiator, Task Parameters.
- Closed.

## What this means for the roadmap (E2)
- The likely FX_ route is a **new definition `FX_InventoryItemsReport`**:
  - Executable Type **RPT**, Report Type **DATAVIEW**;
  - Executable Name = the name of an **FX_ DataView** over FX_InventoryItems. That DataView must exist first, unless an existing FX_ form DataView can be used.
- The DATAVIEW route is the closest analogue to the vendor `DatabaseSchemaReport`.
- **Unknowns:**
  - **TaskMan:** there is no history at all, so it is unproven that TaskMan processes tasks in this cloud tenant. E2's first submit is the real test. A task stuck in Active, or an error in History, is a valid result to record.
  - **Submitting:** how a task is submitted (from the form's Actions, a Background Queue form or the DataView) is not yet surveyed.
  - **Storage:** whether an FX_ definition row counts as FX_ metadata. It is a new row in a vendor table, named FX_. The roadmap already treats E2 as "none beyond FX_". Mention it when asking.
- `IDOMTH` needs a custom IDO method, and FX_ IDOs have none. `SP` needs an FX_ stored procedure; creating one is a schema-level object. Both are later options.

## Not done / not proven
- The Excluded Tasks / Report Options / Report Data Attributes dialogs, the Query forms and the Purge Utility were not opened.
- The Paper Size and Isolation Level lists were not read.
- An empty History is not proof that TaskMan is broken. It only means nothing has run.

## Evidence (`evidence/EXP-142/`)
- `01-bgtask-history-open.png`: History in Filter in Place mode.
- `02-bgtask-history-loaded.png`: after Execute in Place; no records.
- `03-bgtask-definitions-open.png`: the Definitions field layout (Filter in Place).
- `04-bgtask-definitions-loaded.png`: 24 definitions; DatabaseSchemaReport = RPT/DATAVIEW; the vendor fields are editable.
- `05-active-bgtasks.png`: Active Background Tasks, empty.

Knowledge state: **observed** (one read).
