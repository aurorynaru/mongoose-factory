# EXP-053 T4 — Native Diagnostic Log sequence after the controlled FX_Items opening

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 3, task T4. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `b43f90e2-8664-4734-9a4e-4a5b34455766`. Date 2026-10-11. Target Form `FX_Items` (User-scoped). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

Source of the sequence: the **accessibility snapshot of the Log Messages grid**, saved as `evidence/EXP-053/t4-04-settled-accessibility-snapshot-runtime-and-log.md` (tool-generated file). The grid's DOM contains all 20 rows. The rendered panel shows only about six rows at a time; the wheel scroll attempt did not move the view (`t4-05`), so the visual view is partial and is not the source of this list.

Context of the rows: the Log Messages grid was **cleared once** (T3, `t3-07`) and was empty before this controlled opening. The rows below are therefore the only rows in the grid after the clear. The immediate post-open accessibility snapshot (an untargeted snapshot taken right after the OK click; returned inline, not saved to a file) already contained all 20 rows. The settled snapshot (after 3 s, no action) contained the same 20 rows.

## Part A — Verbatim native rows (display order, as shown in the grid)

Columns in the grid: Time | Source | Type | Message. Source is `WinStudio` and Type is `Diagnostics` for every row. Timestamps carry milliseconds only; no date is displayed.

| # | Time (as displayed) | Message (verbatim native text) |
| --- | --- | --- |
| 1 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormPredisplay, starting processing, IDO collection object` |
| 2 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormPredisplay, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 3 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormInitCompleted, starting processing, IDO collection object` |
| 4 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormInitCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 5 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormRefresh, starting processing, IDO collection object` |
| 6 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormGetBoundValues, starting processing, IDO collection object` |
| 7 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdFormGetBoundValues, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 8 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdObjectRefresh, starting processing, IDO collection object` |
| 9 | 05:22:07.945 | `FormEvent (FX_Items): Event name StdObjectRefresh, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 10 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdObjectSelectCurrentCompleted, starting processing, IDO collection object` |
| 11 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdObjectSelectCurrentCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 12 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdObjectRefreshCompleted, starting processing, IDO collection object` |
| 13 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdObjectRefreshCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 14 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormLoadBoundValues, starting processing, IDO collection object` |
| 15 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormLoadDerivedValues, starting processing, IDO collection object` |
| 16 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormLoadDerivedValues, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 17 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormLoadBoundValues, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 18 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormRefreshCompleted, starting processing, IDO collection object` |
| 19 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormRefreshCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 20 | 05:22:07.976 | `FormEvent (FX_Items): Event name StdFormRefresh, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |

Counts from the native grid: 20 rows total; 9 rows at 05:22:07.945; 11 rows at 05:22:07.976. Event names appearing: StdFormPredisplay, StdFormInitCompleted, StdFormRefresh (rows 5 and 20), StdFormGetBoundValues, StdObjectRefresh, StdObjectSelectCurrentCompleted, StdObjectRefreshCompleted, StdFormLoadBoundValues (rows 14 and 17), StdFormLoadDerivedValues (rows 15 and 16), StdFormRefreshCompleted (rows 18 and 19). Every row names `FX_Items` in its message (native Form context).

Rows with `EventHandler (...)` text: **none.** Every event reports `num handlers for event 0, num executed 0`.

## Part B — Worker interpretation (not native text)

1. **Attribution.** All 20 rows are between 05:22:07.945 and 05:22:07.976, appear after the clear and before any other action in this task, and each names `FX_Items`. The worker considers them attributable to the controlled FX_Items opening. This rests on the log's own `FX_Items` name and on the sequence of actions. It is an inference, not a native causal link.
2. **Refresh correspondence.** Rows 5 (`StdFormRefresh, starting processing`) and 20 (`StdFormRefresh, result 0`) bracket the window in which the other events occur. The Form's Initial Command is `Refresh` (EXP-052; Designer identity confirmed in T1). The brief's transcript (section 4) narrates "the standard form refresh event being called because we set our initial command to refresh". The worker notes that the **event name** `StdFormRefresh` matches the narrated name. The worker does not claim that Initial Command caused this event. The log does not state the trigger.
3. **Load events.** Rows 6–9 (`StdFormGetBoundValues`, `StdObjectRefresh`), 10–13 (`StdObjectSelectCurrentCompleted`, `StdObjectRefreshCompleted`), and 14–17 (`StdFormLoadBoundValues`, `StdFormLoadDerivedValues`) occur within the Refresh bracket by display order. Their names suggest collection and value loading. The log text does not say what they loaded. The worker records the names and order only.
4. **Event handlers.** No `EventHandler` rows appear. Each event reports `num handlers for event 0`. This is consistent with no handler being attached to these events on FX_Items. It is not proof of handler configuration. The Diagnostics "Event Handler Include" option was ON (T2 verification), so the absence of handler rows is observed with that option on.
5. **Timestamps.** The two timestamp values (.945 and .976) are displayed as-is. The worker does not infer durations or processing times from them beyond the displayed 31 ms difference between the two groups. The display shows no date, so the rows are not dated.
6. **Unattributable rows.** None observed in this window. No row mentions another Form, the User Preferences dialog, or the Select Form dialog. Rows from the T2 preference session were removed by the single clear before this opening (T3).
7. **Completeness limit.** The worker can only report rows present in the grid's DOM at the snapshots taken. Entries not rendered by the panel, or entries written outside the grid, are not visible to the worker. The list is therefore "all rows in the Log Messages grid at the time of snapshot", not a complete server-side trace.

## Part C — Relationship to the controlled interval

- Clear: performed once (T3), before the opening. The grid was empty immediately before (`t3-07`).
- Opening: one Open > Select Form > OK sequence (T4). The first row is timestamped 05:22:07.945. No row precedes it in the grid.
- Immediate state after OK (`t4-02`): 20 rows present; runtime status `Description (Object 1 of 3)`.
- Settled state after 3 s, no action (`t4-03`, `t4-04`): the same 20 rows; no additional rows.
- No further operation (Refresh, F4, Filter-in-Place, Get More Rows, Save, edit, or clear) was performed after the opening.

Classification: rows in Part A are **verbatim native diagnostic content**. Part B items are **worker interpretation**. Observed only. Not replay_verified. No cross-session, database, or complete server-side trace claim.
