# EXP-049 — T4 Sql Tables tab state checkpoint

Run: R-20261011-020822-9Eej, cycle 3, task T4 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
Scope: one selection of the existing Sql Tables runtime tab, one fresh accessibility snapshot after selection. No typing, filtering, F4, query, Save, discard, close, refresh, navigation (other than tab selection), dialog action, Designer change, checkout or check-in, wizard action, or screenshot.

## Inputs read first
- `evidence/EXP-049/T3-webclient-state-checkpoint.md`. It recorded the Web Client on Property Classes (FX_UM) with Sql Tables state unverified.

## Tab state at task start (observed)
- A read-only `browser_tabs list` at task start showed **tab 0 as current** (Designer, `MGForm=IdoPropertyClasses`) and tab 1 (Web Client, portal URL) not current. T3 had left tab 1 selected. The current tab changed between T3 and T4; the cause is not known.
- Before selecting the Sql Tables tab, I took one read-only accessibility snapshot of tab 0 (Designer, IdoPropertyClasses design view, Save disabled). It was used only to confirm identity, and it was not the target surface.
- I then selected tab 1 (`browser_tabs select index=1`, succeeded on the first attempt; navigation only). A read-only `browser_snapshot` followed, showing the Property Classes runtime Form still active (FX_UM, 1 of 1, Save disabled). This snapshot was taken to obtain a current ref, as the browser-task rules require.

## Selection performed (one time, as instructed)
- `browser_click` on the **Sql Tables** runtime tab, ref `f1e105` (from the snapshot above), element description "Sql Tables runtime tab (select tab only)". Result: no error, no dialog. Tool-reported page URL changed to `...favoriteContext=SqlTables...`. The tool output lists the call's generated locator (`getByRole('tab', { name: 'Sql Tables   Close Panel Sql' }).click()`); this is the browser tool's own log of the click, not a script written or run by the worker.
- Post-selection snapshot: saved by the tool to `evidence\playwright\page-2026-10-10T18-21-11-350Z.yml`. Read in full in this step (read-only). It is the one fresh post-selection snapshot.

## Observed Sql Tables state (from the post-selection accessibility snapshot)
- Identity: portal tab `Mongoose` selected; runtime tab `Sql Tables` `[active] [selected]` (`f1e105`); tabpanel `Sql Tables` (`f1e804`). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Other runtime tabs remain open and unselected: Property Classes, IDOs, IDO Projects, Export/Import Strings.
- Global toolbar: **Save `[disabled]`**. Designer buttons present. **System Notes, Documents, Send email for the current object are `[disabled]`**. Export To Excel, Refresh, Filter in Place, New, Delete enabled.
- Grid (the table at top left): one row, row number `1`, gridcell `1` `[selected]`. **Table Name cell: empty. Schema cell: empty. Multi-Site checkbox: not checked.** No value text is exposed in the row's cells.
- Grid status text (region footer): `Table Name (SQL Tables 1 of 1)`.
- Attributes group: Schema combobox **empty**; Table Name combobox **empty**; Multi-Site unchecked.
- Buttons: **Columns... `[disabled]`**; SQL Data Types... enabled; Edit Procedure... enabled; **Update Current Table `[disabled]`**; **New Constraint... `[disabled]`**; **Modify Constraint... `[disabled]`**.
- Constraint grid: header only (Constraint Type, Constraint Name, Unique, Clustered Index, Description), **no rows**.
- No dialog, alert, confirm, prompt, caution message, or authentication element in the snapshot.

## What this establishes, and what it does not
- **Established (accessibility, this snapshot):** the Sql Tables tab is the selected and active runtime tab; one row exists in the grid with blank Table Name and Schema; Save is disabled; no dialog is open; Columns, Update Current Table, and constraint actions are disabled; the constraint grid is empty; the global "System Notes", "Documents", and "Send email" actions are disabled.
- **Interpretation (not proof):** the disabled dependent controls, the blank Table Name and Schema, and the empty constraint grid are consistent with a single blank add-mode insertion placeholder with no saved record selected and no pending edits. The T1-13 and T1-19 captures (read in T2) showed a blue-star marker on that row. **The blue-star marker is not exposed in the accessibility tree**, so the marker was not re-observed in this step. No screenshot was taken, per instructions.
- **Not established:**
  - Whether the row is an unmodified insertion placeholder or contains pending edits. Blank fields and disabled controls are consistent with an unmodified placeholder, but the snapshot does not expose a dirty or edited-row indicator. Save is disabled, which indicates no pending-save state at the toolbar level.
  - Whether a saved SQL table record exists. The snapshot shows `1 of 1` with blank fields, so this step does not distinguish a blank placeholder from a saved record. It does show no table name, so there is no visible saved record identified by name.
  - Any filter or criterion state. No criteria row or active filter text is exposed in the snapshot. The T1 criteria text is not visible, so no FX_Items or FX_HelloWorld01 record is shown.
  - Whether the placeholder would be saved, discarded, or cleared by a Refresh, close, or reopen. Not tested, per instructions.
  - Record counter beyond `1 of 1`.

## Acceptance-check status (no new creation or absence evidence)
- AC-2 (collision gate, dbo.FX_Items): **still not established.** This step did not run a query, and the grid shows no FX_Items record. A placeholder with a blank Table Name is not an absence result. The collision gate needs a separate fresh query with a visible exact-name criterion, a settled result, and a working positive control, as in T1-16.
- AC-1 (preflight, Sql Tables surface): Save disabled, no dialog, identity bar visible. Partially supports clean state. Placeholder status remains interpretive.
- AC-3 through AC-12: not performed in this step.

## Limitations of this inspection
- Single accessibility snapshot; no screenshot; no interaction with the grid cells or Form controls.
- The tab's blue-star marker and any dirty indicator are not exposed in the accessibility tree.
- The tab-selection state at task start was tab 0, not tab 1. The reason is not known; it is an unexplained browser-state change between T3 and T4. The change was handled by selecting tab 1 (navigation only).

## Next permitted action
- Coordinator or operator decision. The state of the blank Sql Tables row is interpretive, not proven as a placeholder. Options:
  1. An operator-authorized visual check (screenshot or visual confirmation) of the Sql Tables row, to confirm the blue-star insertion marker and absence of edits, under a new task.
  2. A new bounded collision-gate task for dbo.FX_Items with a visible exact-name criterion and positive control, run only after the placeholder question is answered.
- Creation remains prohibited. No action is taken by this checkpoint. Nothing was saved, discarded, or cleared.

## Files written in this step
- `evidence/EXP-049/T4-sqltables-state-checkpoint.md` (this file)
- The tool-saved snapshot `evidence\playwright\page-2026-10-10T18-21-11-350Z.yml` was written by the browser tool, not by the worker. It was read in this step.
- No other repository file was written.
