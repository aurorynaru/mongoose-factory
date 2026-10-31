# Background Tasks (TaskMan)

State: **unverified** in this environment (see [README.md](README.md)).

Mongoose runs utilities, reports, and long processes asynchronously through **TaskMan**, the
background task service. Every task is defined once on the Background Task Definitions form, and
each run is a queue row that becomes a history row.

| IDO | Role |
|---|---|
| `BGTaskDefinitions` | Task definitions, plus the `BGTaskSubmit` method |
| `ActiveBGTasks` | Tasks queued or running now |
| `BGTaskHistories` | Finished runs: status, error message, and the exact parameters used |
| `ProcessErrorLogs` | Detailed error lines for a failed task |

Source: `vendor-doc` for the roles. `BGTaskSubmit` submits to TaskMan and returns the task-history
row pointer. Tasks go into the active queue as READY unless submitted WAITING, and TaskMan ignores
rows that are not READY or RUNNING.
([Objects used in or by reports](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgwsolh_mg/xno1482439522221.html),
[Modifying forms to submit tasks to the background queue](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgaug_mg/lsm1454147668807.html))
A task's executable can itself be an IDO method, written `IDO.Method` with executable type
`IDOMTH`. Its task parameters must then match the method's parameters.

---

## 1. Submitting: `BGTaskDefinitions.BGTaskSubmit`

Source: `on-prem: repeated`. The 20-position signature should be confirmed with
`IdoMethodParameters` in this environment before first use.

```
POST /invoke/BGTaskDefinitions?method=BGTaskSubmit
```

The body is a 20-position array. Every position must be present, with `null` for unused ones.

| Index | Name | Direction | Typical value |
|---|---|---|---|
| 0 | `TaskName` | in | The task's name, case-sensitive |
| 1 | `TaskParms1` | in | The task-specific parameter string, see §2 |
| 2 | `TaskParms2` | in | usually `null` |
| 3 | `Infobar` | out | `null`. It returns error text. |
| 4 | `TaskID` | out | `null`. It returns the task number. **Save it.** |
| 5–6 | status code, string table | in | `null` |
| 7 | `RequestingUser` | in | The submitting user |
| 8 | `PrintPreview` | in | `0`. It is a byte, so `false` fails. |
| 9 | `TaskHistoryRowPointer` | out | `null` |
| 10 | `PreviewInterval` | out | `null` |
| 11–19 | scheduling fields | in | all `null` for "run now" |

```json
["TASK_NAME","TASK_PARMS1",null,null,null,null,null,"REQUESTING_USER",0,
 null,null,null,null,null,null,null,null,null,null,null]
```

`ReturnValue "16"` means the task name exists but its parameters failed validation. Read
`Parameters[3]`. *"Task Name is invalid"* means the name doesn't match exactly.

---

## 2. `TaskParms1` has no universal schema

Source: `on-prem: repeated`.

Each task defines its own parameter string. Three styles show up:

| Style | Example shape | Typical use |
|---|---|---|
| Positional, comma-delimited | `,,,,T,T,C,MESSAGE,,,` | Utilities |
| `SETVARVALUES(...)` named pairs | `SETVARVALUES(NewId=<guid>,PostThroughVar=2026-02-28 00:00:00.000,Parm_Site=<site>)` | Reports and posting routines |
| Literals with runtime tokens | `~LIT~(<value>),E,,0,1,BG~TASKID~,1` | On-demand reports. `BG~TASKID~` is filled in at run time. |

**How to learn any task's format:** read its history. Someone has almost always run it before.

```
GET /load/BGTaskHistories?properties=TaskName,TaskParms1,TaskParms2,CompletionStatus,CompletionDate
    &filter=TaskName LIKE N'<task>%'&orderby=CompletionDate DESC&recordcap=5
```

If there is no history, run the task once from its form, then read the history row it left.

`SETVARVALUES` details:

- Generate a **fresh GUID** per submission for any `NewId`-style key.
- A site parameter must match the token's site.
- Send empty values as `Key=`. Don't leave the key out.
- Dates use the SQL Server form `YYYY-MM-DD HH:MM:SS.mmm`.

---

## 3. Polling for completion

Source: `on-prem: repeated`.

1. **Still running?** Load `ActiveBGTasks` with `filter=TaskNumber = <TaskID>`. Empty `Items`
   means the task has left the queue.
2. **How did it end?** Load `BGTaskHistories` with the same filter. `CompletionStatus` `"0"` means
   success and `"-1"` means failure. On failure, read `TaskErrorMsg`.
3. **Why did it fail?** Load `ProcessErrorLogs` with the same filter.

Poll every few seconds. The history row appears only when the task finishes.

**Background tasks run in their own sessions.** On-premises, those sessions showed up as
service-type connections and were reaped a minute or two after the task ended. If a session or
connection "disappears" near a maintenance action, check the task history for a run that just
finished before blaming the action. `on-prem: observed`
