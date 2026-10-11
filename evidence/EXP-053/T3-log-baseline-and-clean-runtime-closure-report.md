# EXP-053 T3 — Diagnostic Log initial state, clean inherited runtime closure, and one clear (cleared-log baseline)

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 2, task T3. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `e40c9d64-e698-47f1-88d1-8f56693ace2b`. Date 2026-10-11. Target Form `FX_Items` (User-scoped). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

**Result: T3 complete. The inherited FX_Items runtime tab was verified clean and closed once through its native tab control (tab absent afterwards). The native Diagnostic Log was cleared exactly once (tooltip "Clear"), and the log is visibly empty afterwards. The controlled FX_Items opening was NOT performed (out of T3 scope).** Diagnostics preferences were not changed: General > Enabled remains ON (set in T2); Events and Event Handler Include remain ON. Restoration (AC-8) is still pending.

Classification: **observed only** (single session, UI and accessibility). Not replay_verified. No causal, cross-session, or database claim.

## 1. Pre-action state (fresh snapshot, Web Client tab 1 selected)

- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in, configuration screen, portal banner, or challenge.
- Runtime tab `FX_Items` (heading `FX_Items`, `Close Panel FX_Items` f1e101) selected. Three rows: `1` dumbbell / 45 pound iron / 45.00 / EA (current), `2` eggs / cage free / 6.99 / DZ, `3` guitar / natural acoustic / 129.99 / EA.
- Runtime toolbar Save disabled (f1e28). No dirty indicator, no dialog, no unsaved-change prompt. The Description input carried form focus (no typing by the worker).
- Screenshot `t3-01` (viewed): FX_Items title, three rows, dumbbell detail inputs, Save greyed. Proves the visible clean state at this moment. Does not prove database content.

## 2. Diagnostic Log: initial visible state (before the clear)

Opened through the native menu: View > `Diagnostic Log` (menu item f1e274, an unchecked checkbox item before the click; checked afterwards). The log opened as a DevTools panel in the lower part of the Web Client frame, with tabs Logs, Variables, Log Messages, Console.

- **Logs tab:** empty (tree with no rows; `t3-02`).
- **Log Messages tab:** not empty. Before the clear it held **36 rows** (timestamp cells counted in the saved accessibility snapshot `t3-04`). All 36 rows are **inherited from the T2 preference session, not from EXP-053's controlled test.** The rows are native, displayed as Time / Source / Type / Message (Source `WinStudio`, Type `Diagnostics`).

Native entries visible before the clear (verbatim from the accessibility snapshot `t3-04`; order as displayed):

| # | Time (as displayed) | Message (verbatim native text) |
| --- | --- | --- |
| 1 | 05:15:41.163 | `EventHandler (StdFormExitOk): Execution complete, rc 0` |
| 2 | 05:15:41.163 | `EventHandler (StdFormExitOk): About to execute, raw response SetDisableFormAliasesForSession(), interpreted response SetDisableFormAliasesForSession()` |
| 3 | 05:15:41.163 | `EventHandler (StdFormExitOk): Execution complete, rc 0` |
| 4 | 05:15:41.163 | `FormEvent (UserPreferences): Event name StdFormClose, starting processing, IDO collection object` |
| 5 | 05:15:41.163 | `FormEvent (UserPreferences): Event name StdFormClose, result 0, num handlers for event 0, num executed 0, default handler ignored False, IDO collection object` |
| 6 | 05:15:41.163 | `FormEvent (UserPreferences): Event name StdFormExitOk, result 0, num handlers for event 4, num executed 4, default handler ignored False, IDO collection` |
| 7–36 | 05:15:49.512 (30 rows) | `VarValue (…): Changing from … to …, VariableType=Form Persistent=…` entries for variables including `StdCurFormPage`, `StdLastFormPage`, `lse_ThemesVar`, `UpdateExistingViewVar`, `categoryListVar`, `VSDownloadVersionValue` (verbatim in `t3-04`) |

Worker interpretation (not native text): rows 1–6 carry the `UserPreferences` form name and `StdFormExitOk`/`StdFormClose` event names at 05:15:41.163. The worker's OK click on the Diagnostics preference dialog produced a snapshot file timestamped 05-15-41-429 (`evidence/playwright/page-2026-10-11T05-15-41-429Z.yml`), so these rows are most likely produced by the T2 OK and dialog close. Rows 7–36 at 05:15:49.512 align in time with the T2 read-only reopen (`page-2026-10-11T05-15-49-844Z.yml`). Both correlations are by timestamp only; no causal claim is made.

Limit: the log's own panel-visibility state before this task is not established beyond the menu checkbox (unchecked before the click). Whether the log collected while hidden is not established.

Screenshots of the initial state:
- `t3-02` (`evidence/EXP-053/t3-02-diagnostic-log-initial-visible-state-before-clear.png`): **the View menu was still open** and covered the upper-right area; the DevTools Logs tab is visibly empty. Proves the Logs tab was empty and the log was open. Does not show the Log Messages rows (that is `t3-03`).
- `t3-03` (`evidence/EXP-053/t3-03-diagnostic-log-Log-Messages-tab-initial-state.png`): Log Messages tab with the rows above (first six visible: 05:15:41.163). Shows the first rows only; the rest is in the accessibility snapshot.
- `t3-04` (`evidence/EXP-053/t3-04-diagnostic-log-Log-Messages-initial-accessibility-snapshot.md`): full accessibility snapshot, source for the 36 rows. Browser-tool-generated snapshot saved at the worker's request.

Menu dismissal: the View menu was closed with one Escape key press (no selection made). The menu's own "Explorer" and "Diagnostic Log" checkboxes were not changed by the Escape.

## 3. Inherited runtime FX_Items closure (once)

- Gate before closing (all satisfied): tab FX_Items selected; Save disabled (f1e28); three rows; no dirty indicator; no pending prompt; no dialog. The FX_Items Designer tab was not touched.
- **Close (one native click):** `Close Panel FX_Items` (f1e101), the tab's own control. No prompt or dialog appeared.
- Postcondition: `find` for `FX_Items` in the Web Client returns **no matches**; the form area is empty; the form toolbar is greyed (`t3-05`, and the post-close accessibility snapshot). The Log Messages list in the post-close snapshot still contains 36 rows, the same count as before the close, with no row mentioning `FX_Items` (`page-2026-10-11T05-19-22-146Z.yml`). So **no new Log Messages rows were visible after the close** as rendered. Whether the close produced entries that the panel does not render is not established.

## 4. Diagnostic Log clear (exactly once)

- Identification before any click: the DevTools toolbar's X-shaped button (ref f1e282) was hovered. Its tooltip reads **`Clear`** (`find` on `tooltip` returned `tooltip [ref=f1e729]: Clear`). The button has no accessible name in the tree; the tooltip is the disambiguating evidence.
- **Clear (one native click, f1e282).** No second clear was issued.
- Postcondition: the Log Messages grid has **no child rows** (`t3-06` screenshot: column headers Time / Source / Type / Message only, no rows; `t3-07` accessibility snapshot: `grid [ref=f1e331]` with no children). The log is visibly empty.

## 5. Cleared-log baseline evidence

- `t3-05` (`evidence/EXP-053/t3-05-after-runtime-FX_Items-close-tab-absent.png`): post-close state, FX_Items tab absent (form area empty, toolbar greyed), DevTools Log Messages still showing pre-clear rows (the first six, 05:15:41.163, are visible; the full 36-row count comes from the accessibility snapshot). Proves tab absence and the pre-clear log content, not the cleared state.
- `t3-06` (`evidence/EXP-053/t3-06-diagnostic-log-cleared-baseline-after-one-clear.png`): cleared Log Messages grid, no rows, Clear button focused. Proves the visible cleared state.
- `t3-07` (`evidence/EXP-053/t3-07-diagnostic-log-cleared-baseline-accessibility-snapshot.md`): accessibility snapshot of the cleared grid with no rows. Browser-tool-generated snapshot saved at the worker's request.

## 6. What T3 did not do (explicit)

- FX_Items was **not opened**. No Select Form, no OK, no row activation.
- No Refresh, F4, Filter-in-Place, Get More Rows, New, Delete, runtime Save, or any collection load.
- No Designer action, Save, Initial Command change, or entry into Designer.
- **No preference inspection or change.** The User Preferences dialog was not reopened, because opening it would write new log entries and contaminate the cleared baseline for T4. Enabled remains ON as set in T2 (last verified in T2 read-only reopen).
- No browser reload, navigation, reauthentication, or tab selection change other than selecting tab 1 at the start.
- The DevTools panel remains open. No obstruction of the toolbar Open button was observed (the Open button `f1e25` is enabled in the post-clear snapshot). The brief's hide/minimize action was not needed and was not taken.

## 7. Action audit (T3)

- Browser actions: 
  - Clicks 5 (View menu; Diagnostic Log menu item; Log Messages tab; runtime tab close; Clear button).
  - Hover 1 (Clear button, tooltip read).
  - Key press 1 (Escape, menu dismissal).
  - Tab selects 1 (tab 1 at the start).
  - Tab list 1.
- Clears of the Diagnostic Log: **1** (the permitted one). Confirmation of Diagnostics preferences: 0. Preference changes: 0.
- Runtime closes of FX_Items: **1**. Runtime openings: 0. Collection loads: 0. Runtime data mutations: 0.
- Designer actions: 0. Saves: 0.
- Snapshots: 6 worker-issued (5 untargeted, of which 2 were saved to file as `t3-04` and `t3-07`; 1 targeted to the DevTools region).
- Screenshots: 7 (`t3-01` to `t3-07`).
- Finds: 4 (`Diagnostic`, `Log Messages`, `FX_Items` post-close, `tooltip` after the hover). Read-only.
- Timeouts: 0. Ref-not-found: 0. Errors: 0. Prompts or dialogs accepted: 0. Browser evaluate or run-code: 0.
- Tool-generated files (not worker-authored) under `evidence/playwright/` for the T3 window: `console-2026-10-11T05-18-19-866Z.log`, `page-2026-10-11T05-18-28-468Z.yml`, `page-2026-10-11T05-18-32-259Z.yml`, `page-2026-10-11T05-18-45-283Z.yml`, `page-2026-10-11T05-19-10-488Z.yml`, `page-2026-10-11T05-19-22-146Z.yml`, `page-2026-10-11T05-19-26-347Z.yml`.

## 8. Limitations and open items

- The 36 pre-clear rows are inherited from T2 preference interactions. They are cleared and are not EXP-053 controlled-test evidence. Their attribution to the T2 OK and reopen is timestamp correlation only.
- The runtime close produced no visible rows in the rendered Log Messages list. Whether it produced entries the panel does not render is not established.
- The clear removes all rows, so no pre-clear snapshot of the T2 rows can be re-read from the live panel. The preserved copy is `t3-04`.
- The Clear button was identified by its tooltip only. Its exact native function beyond the tooltip label is not independently established, though the grid emptied after the single click.
- Logs tab emptiness and Log Messages content are separate native views; this report makes no claim about Variables or Console tabs.

## 9. Final browser state

- Web Client tab 1 selected. Identity DEM. FX_Items runtime tab **absent**. Form area empty; form toolbar greyed.
- Diagnostic Log panel **open**, Log Messages tab selected, **cleared** (no rows).
- Preferences: Enabled ON, Events ON, Event Handler Include ON (unchanged since T2).
- Designer tab 0 untouched (FX_Items User-scoped, Initial Command `Refresh`, per T1).
- No dialog, prompt, or banner. Stable.

## 10. Next permitted action

- The controlled FX_Items opening (T4) requires coordinator authorization. The log has been cleared once and is empty. Per the brief, no further clear is permitted in the controlled test.
- Restoration (AC-8: Enabled to Off) is still required at the end of the experiment.
