# EXP-054-R2 — T7 Diagnostic Log sequence after the single FX_Refresh activation

Run `R-20261011-144135-Rh6I`, experiment EXP-054-R2, cycle 6, task T7. Worker session `e06da36c-ce9e-4db0-9a72-8fcea6f51ed0`, task_message_id `a7c4b0be-cdf1-42f2-b1cd-5fce40cd8256`.

This file has two parts. **Part A is verbatim native contents** copied from the accessibility snapshot of the Log Messages grid (`evidence/playwright/page-2026-10-11T07-08-01-119Z.yml`, immediately after the click; the settled snapshot `evidence/EXP-054-R2/t7-06-settled-after-3s-accessibility-snapshot-runtime-and-log.md` contains the same 16 rows). **Part B is worker interpretation**, kept separate.

Context for Part A: the grid was cleared once (one Clear click, tooltip `Clear`) and was verified visibly empty (`t7-03`, `t7-04`) before the single FX_Refresh activation. No runtime opening, refresh, or record load occurred after the clear. The first grid row is therefore the first row produced after the clear.

## Part A — verbatim native rows (display order, top to bottom)

Columns in the grid: Time | Source | Type | Message. Source for all rows: `WinStudio`. Type for all rows: `Diagnostics` (the accessibility column reads `Diagnostics`; the visible column is truncated to `Diagnost...`).

| # | Time (verbatim) | Message (verbatim) |
| --- | --- | --- |
| 1 | 07:08:00.855 | `FormEvent (FX_Items): Event name StdFormRefresh, starting processing, IDO collection object` |
| 2 | 07:08:00.855 | `FormEvent (FX_Items): Event name StdFormGetBoundValues, starting processing, IDO collection object` |
| 3 | 07:08:00.855 | `FormEvent (FX_Items): Event name StdFormGetBoundValues, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 4 | 07:08:00.855 | `FormEvent (FX_Items): Event name StdObjectRefresh, starting processing, IDO collection object` |
| 5 | 07:08:00.855 | `FormEvent (FX_Items): Event name StdObjectRefresh, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 6 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdObjectSelectCurrentCompleted, starting processing, IDO collection object` |
| 7 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdObjectSelectCurrentCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 8 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdObjectRefreshCompleted, starting processing, IDO collection object` |
| 9 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdObjectRefreshCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 10 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormLoadBoundValues, starting processing, IDO collection object` |
| 11 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormLoadDerivedValues, starting processing, IDO collection object` |
| 12 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormLoadDerivedValues, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 13 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormLoadBoundValues, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 14 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormRefreshCompleted, starting processing, IDO collection object` |
| 15 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormRefreshCompleted, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 16 | 07:08:00.949 | `FormEvent (FX_Items): Event name StdFormRefresh, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |

Rows 1–6 are also visible in the native viewport (`t7-07-settled-after-3s-runtime-and-log-first-rows.png`, viewed). Rows 7–16 are visible only in the accessibility tree; the grid was not scrolled (no view action on the log was taken, to keep the interval free of extra interaction).

Summary of verbatim facts (no interpretation):
- 16 rows in total; all have Source `WinStudio`, Type `Diagnostics`, and message prefix `FormEvent (FX_Items)`.
- Event names in display order: StdFormRefresh (start), StdFormGetBoundValues (start, result), StdObjectRefresh (start, result), StdObjectSelectCurrentCompleted (start, result), StdObjectRefreshCompleted (start, result), StdFormLoadBoundValues (start), StdFormLoadDerivedValues (start, result), StdFormLoadBoundValues (result), StdFormRefreshCompleted (start, result), StdFormRefresh (result).
- Timestamps present: `07:08:00.855` (5 rows: 1–5) and `07:08:00.949` (11 rows: 6–16). Millisecond resolution only; no date displayed.
- Handler counts: every result row reads `num handlers for event 0, num executed 0, default handler ignored False`.
- EventHandler rows: **none** in the Log Messages grid.
- Messages were not truncated in the accessibility text (each full message is shown above).

## Part B — worker interpretation (not native text)

1. **StdFormRefreshCompleted appeared:** rows 14 and 15 (start and result) at 07:08:00.949, verbatim event name `StdFormRefreshCompleted`.
2. **StdFormRefresh appeared:** row 1 (starting processing, 07:08:00.855) and row 16 (result 0, 07:08:00.949). Both are the event name `StdFormRefresh`.
3. **Attribution:** these rows were produced after the log clear and after the single FX_Refresh click, during the interval with no other operation by this worker. Attribution to the click is by timing and by the FX_Items name only. No isolated causation is claimed (per the brief).
4. **Missing relative to the EXP-053 open sequence:** EXP-053 opened the Form and recorded `StdFormPredisplay` and `StdFormInitCompleted` rows; neither appears here. This is consistent with no Form open having occurred in this interval (the Form was already open). This is an observed difference, not an explanation.
5. **Status label change:** the runtime status textbox changed from `Description (Object 1 of 3)` (before the click) to `FX_Refresh (Object 1 of 3)` (after the click). This reflects the focused control; the record count indicator `Object 1 of 3` is unchanged.
6. **Event-handler execution:** no EventHandler row appeared and every result row reports `num handlers for event 0` and `num executed 0`. This worker does **not** infer that no handler exists or ran; the displayed fields are the only evidence.
7. **Timing:** the rows span 94 ms (07:08:00.855 to 07:08:00.949). Milliseconds only; the dates of these rows are not displayed.
8. **Preference-application timing limitation (EXP-053 discussion):** not triggered. FormEvent rows did appear after the single activation (with Enabled ON from T6). The candidate timing limitation is therefore **not needed** to explain missing rows in this test. It remains unresolved as a general claim.
9. **Ambiguity:** none of the 16 rows names a handler, script, or prompt. Whether the `StdFormRefresh` rows correspond to the Button's Primary Event is **not established** by the log text alone; the name match and timing are the only evidence (cross-session causation not claimed).
10. **Inaccessible rows:** none observed; all 16 rows were readable in the accessibility tree.
