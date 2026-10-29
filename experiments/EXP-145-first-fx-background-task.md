# EXP-145: First FX_ background task (G6)

Status: **observed**. One successful run on 2026-10-28, with persistence readback and the task history checked. **TaskMan runs background tasks in this cloud tenant.**

Approval (operator, 2026-10-28), verbatim: "Yes, create the FX_SchemaProbe row in Background Task Definitions and submit it once."
- The task was submitted exactly once.
- No recurrence was scheduled.
- G7 (a task that calls an API) is not approved.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header). The Designer was in User scope.

The Claude Code permission classifier blocked the first attempt, under the generic "continue" ("Modify Shared Resources"). The run then waited for the explicit approval above.

## Objects created (cleanup list)
1. **BGTaskDefinitions row `FX_SchemaProbe`.** It is tenant-wide, in a vendor table.

   | Field | Value |
   |---|---|
   | Executable Type | RPT |
   | Report Type | DATAVIEW |
   | Executable Name | `Database Schema Report` (vendor DataView, unchanged) |
   | Max Concurrent | 20 |
   | Cross-Site | -1 |
   | Description | "EXP-145 probe: does TaskMan run tasks here? Read-only schema report on FX_InventoryItems." |

2. **FX_ApiProbe User version** (it already existed, from EXP-144), with two additions:
   - **Event handler `FX_RunSchemaProbe`**, Response Type **Run Background Task**, parameters:
     `TASKNAME(FX_SchemaProbe)TASKPARMS(FX_InventoryItems,FX_InventoryItems,1,) SUCCESSMESSAGE(FX_SchemaProbe submitted)`
   - **Button `FX_BGButton`**, caption "Run BG task", Primary = `FX_RunSchemaProbe`.
3. **Run output:**
   - one Background Task History row, Task Number 1;
   - one report PDF on IdmFileServer, under `\Reports\anton.ramos@…\…` (logical folder `IdmFileServer_Reports`).

Cleanup is pending the operator's decision. To clean up:
- delete the definition row;
- remove the button and handler (or the whole FX_ApiProbe User version).

It is not yet known whether history rows and IDM files can or should be purged; ActiveBGTasksPurgeUtility exists.

## Results
- **Definition:** saved, then re-found by an exact-name Filter in Place after close/reopen (`03`, `04`).
- **Handler + button:** saved. After a full Designer reload and reopen, the handler and its parameters were still there (`10`, `12`, `13`). The button showed at runtime (`14`).
- **Submit (one click on "Run BG task"):**
  - The SUCCESSMESSAGE dialog "FX_SchemaProbe submitted" appeared (`15`).
  - The Web Client then **opened a Report Viewer tab on its own**: `IDORequestService/ReportServer.aspx?TaskHistoryRowPointer=<guid>…`. It showed "Waiting for the report to complete…" and then rendered the PDF `DatabaseSchemaReport_<guid>.pdf` (`16`, `17`).
  - The PDF is "Database Schema Report-ReportOutput": header page, then the FX_InventoryItems columns, indexes and types (2 pages, footer DEFAULT / account).
- **Background Task History** (`18`), from Filter in Place on Task Name `FX_SchemaProbe`:

  | Field | Value |
  |---|---|
  | Task Number | 1 |
  | Initiator | `Form.FX_ApiProbe` |
  | Return Status | **Task Succeeded** |
  | Task Server | RGJU-I9DPAFZ-SV |
  | Error Message | empty |
  | Submitted / Started / Completed | 10/28/2026 2:16:21 AM / 2:16:22 AM / 2:16:33 AM, as displayed (about 1 s queue, 11 s run) |
  | Task Type | RPT |
  | Executable | Database Schema Report |
  | Report Type | DATAVIEW |
  | Process ID | 16,792 |
  | Server Name | IdmFileServer |
  | Task Parameters | `FX_InventoryItems,FX_InventoryItems,1,` |

  The History times and the PDF header time (10/27 10:16:30 PM) are in different time zones. Which zone each one uses was not established.

## Procedure learned
1. **Definition:**
   - Open Background Task Definitions; it starts in filter mode or shows the auto new row.
   - Fill a new row: Task Name `FX_…`, Executable Type, Report Type and Executable Name, copying a vendor row of the same kind.
   - Save.
2. **Launcher:** in any FX_ form, add a handler with Response Type **Run Background Task**. In its Parameters dialog, fill the "Edit Background Task Name And Parameters" section:
   - Task Name (combo, lists the definitions);
   - Task Parameters (comma list, the same order as the DataView/report inputs);
   - optional Task Status, Task Number, Profile Parameters.
   The General tab's Success Message is useful as submit feedback.
3. **Wire it:** point a button's Primary at the handler, then Save. A new runtime opens the form and the click submits.
4. **Read the result:**
   - Background Task History (`BGTaskHistory`) → Actions › Filter › Execute in Place with the Task Name.
   - For RPT tasks, the Report Viewer tab also opens by itself.

## Deviations and pitfalls
- **The `FX%` wildcard does not match in Filter in Place** on BGTaskDefinitions. The baseline `01` (empty) is weak. Filter on the exact name instead.
- When a filter returns nothing, the form **auto-starts an unsaved new row (★)**. Don't type into it unless you're creating; close with No.
- **Active Background Tasks** cannot be inserted into (New is greyed out). Tasks must be submitted.
- The Actions › Filter submenu position differs per form. Take a screenshot first.
- **A button dropped from the Toolbox came out huge** (Size 94.9 × 9.17) and overlaps the result box in FX_ApiProbe. It is cosmetic and was left as is.
- **Select Form:** pressing Enter right after typing a filter opened the *selected* (old) row, so FX_ApiProbe opened a second time. Wait for the list to refresh, then double-click the row.
- Active Background Tasks was **not** re-read after the run. History shows Completed + Task Succeeded, so the task is no longer active (inferred).

## Evidence (`evidence/EXP-145/`)

| File | Shows |
|---|---|
| `01` | FX% filter: empty (weak baseline), with the unsaved auto row |
| `02`, `03`, `04` | FX_SchemaProbe filled, saved, and re-found by exact name after reopen |
| `05` | Active Background Tasks before the run: empty, New disabled |
| `06`–`10` | Designer: FX_ApiProbe, the Run Background Task parameters dialog (empty, then filled), handler set, then saved |
| `11`, `12` | FX_BGButton properties, then saved |
| `13` | After the Designer reload: the handler persisted |
| `14` | Runtime FX_ApiProbe with the "Run BG task" button |
| `15` | "FX_SchemaProbe submitted" dialog |
| `16`, `17` | Report Viewer PDF, pages 1 and 2 (FX_InventoryItems schema) |
| `18` | **Background Task History: Task Succeeded**, times, task server, parameters |

## State left
- **Web Client:** FX_ApiProbe is open (runtime). BGTaskHistory was closed; the Report Viewer tab was closed.
- **Designer:** FX_ApiProbe is open in User scope, saved.
- **Tenant:** the objects listed above. Nothing is scheduled or recurring.
