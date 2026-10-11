# EXP-052 T7 — Clean runtime close, Initial Command `Refresh` mutation, one Designer Save (AC-7), cycle 6

Run `R-20261011-122156-AVGD`, task T7, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `1f4630d6-c223-4ca9-9ee3-a331d9c52cc2`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-7 supported with limits. One clean runtime close (the eggs-only result, Save disabled, no prompt). Designer identity re-verified (Name `FX_Items`, User version for anton.ramos@3mworks.com.ph, status bar ScopeType User / ScopeName anton.ramos@3mworks.com.ph). Initial Command changed from blank to `Refresh` through the native list (one selection), committed with one Tab. Other comparison properties unchanged. One ordinary Designer Save: native notification `Form [FX_Items] and global object(s) were saved`; afterwards Save and Undo disabled; Initial Command `Refresh`. Designer demonstrably clean. Stopped for coordinator review. Not done: Designer close or reopen, runtime reopen, any runtime query.**

## Pre-close runtime gate (fresh snapshot, tab 1)

- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab `FX_Items`; no dialog; no portal banner; no authentication challenge.
- Result: one unstarred row `eggs / cage free / 6.99 / DZ` (`gridcell "1"`, current); detail inputs Item `eggs` (greyed), Description `cage free` (focused), Cost `6.99`, UM `DZ`.
- Status `Description (Object 1 of 1)`; Save disabled; Filter-in-Place mode exited (no criteria row; toolbar enabled; no filter icon in the tab title). No starred or placeholder row.
- Prerequisites met.

## Runtime close (once)

- Action: `Close Panel FX_Items` (`f1e101`), the tab's own close control, one click.
- Result (fresh snapshot): tab list shows only the Designer tab 0 and the portal tab 1; runtime tab removed; form toolbar disabled (Save, New, Delete, Refresh, FiP, Get More Rows, and others disabled); no dialog; no unsaved-change prompt; no authentication challenge.
- No data operation was performed during the transition.

## Designer identity and baseline (fresh snapshot, tab 0; read-only)

Tab 0 selected; Designer `FX_Items` Form tab selected (`?MGForm=FX_Items`). No scope dialog present.

| Property | Observed before change | T2 baseline | Match |
| --- | --- | --- | --- |
| Name | `FX_Items` | `FX_Items` | yes |
| Version | `User version for user anton.ramos@3mworks.com.ph` | same | yes |
| Status bar | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | same | yes |
| Save / Undo | disabled / disabled | disabled / disabled | yes |
| Initial Command | blank (no value) | blank | yes |
| Description, Caption | blank | blank | yes |
| Device Type / Form Type / Is Master | Default / Normal / True | same | yes |
| Script Language | Visual Basic | Visual Basic | yes |
| Close Box / Minimize/Maximize Box | True / True | True / True | yes |
| Filter Form / Enable Advanced Filter | blank / False | blank / False | yes |
| Help Context ID / Help File Name | -1 / blank | -1 / blank | yes |
| Splitter / Splitter Position | Vertical / 11 | Vertical / 11 | yes |
| Pane 0 / Pane 1 Scroll Bars | Never / As Needed | Never / As Needed | yes |
| Unit / Size / Synchronize FlexLayout | Char / 69; 21 / True | same | yes |

Screenshot `t7-01` (viewed): Designer `FX_Items` tab; Name `FX_Items`; Version `User version for us…`; Initial Command blank with dropdown; Save and Undo greyed; status bar User scope. Proves the pre-mutation identity and clean state. Does not show the full Version text (accessibility only).

## Initial Command mutation

1. Dropdown arrow on the Initial Command value cell (`e533`), one click. Native option list opened.
2. Scoped snapshot of the list: exactly five options, in order `Refresh`, `Filter`, `FilterInPlace`, `Add`, `Event <eventname>`. Same as T2. The exact `Refresh` option is offered.
3. Click the `Refresh` option (`e736`), one click. List closed. The combobox read `Refresh`.
4. Screenshot `t7-02` (viewed): Initial Command shows `Refresh` with the editor still focused; Save and Undo still greyed at this moment (the value was not yet committed).
5. Commit: one `Tab` key press to move focus out of the editor (no value typed). No other interaction.
6. Screenshot `t7-03` and snapshot (viewed): Initial Command `Refresh`; Save enabled (`e747`); Undo enabled; the other comparison properties unchanged (values as in the table above).

Pre-Save state (`t7-03`): Save enabled; Undo enabled; Initial Command `Refresh`; identity unchanged. The Save enablement is the only visible dirty signal; it is treated as the commit signal, not as proof of persistence.

## Designer Save (once)

- Action: Designer toolbar `Save` (`e747`), one click. No retry.
- Immediate result (`t7-04`, viewed): a native notification `Save — Form [FX_Items] and global object(s) were saved.` appeared top-right. Save and Undo icons greyed. Initial Command `Refresh`. Status bar User scope. No alert, error, or validation message.
- Settled (3 s wait, then fresh snapshot; `t7-05`, viewed): Save disabled (`e15`, `[active]` on the button); Undo disabled; Initial Command value `Refresh`; Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; comparison properties unchanged (list above). The notification is no longer shown in `t7-05`.
- Designer state: demonstrably clean (Save and Undo disabled, no dialog, no open list, no pending edit visible).

Note on the notification: it names global objects and the Form. It does not by itself prove the Form was persisted to the database; it is the native save result. Persistence across a close and reopen is for T8 (AC-8), not T7.

## Acceptance AC-7 mapping

- Only Initial Command was changed: yes (one list selection; no other property edited; the Tab moved focus only).
- Exact `Refresh` option offered and selected through the native list: yes.
- Value committed before Save: yes (Save and Undo enabled after commit; `t7-03`).
- Exactly one ordinary Designer Save: yes (one click; no retry).
- Save completed without error: yes (native notification; no error text).
- Designer visibly clean after Save: yes (`t7-05`, Save and Undo disabled).
- Form identity and comparison-property baseline preserved: yes (accessibility comparison above; `t7-01`, `t7-03`, `t7-05`).
- AC-7 status: **supported with limits.** Limits below.

## Limits

- Same session, UI only. No database read; no cross-session persistence evidence in T7. The post-Save state is the same-session UI state.
- The Version text is truncated visually; the full text comes from accessibility.
- The Tab used to commit the editor moved focus to the adjacent value cell, which is visibly highlighted in `t7-03` and `t7-05`. No value was changed by that focus move (comparison values unchanged).
- The notification text names global objects and the Form; whether it implies a database write beyond the Form is not established.
- The blank pre-change Initial Command value is not explained (no default established); the change is from blank to `Refresh`.

## Non-events in T7

- Runtime close 1 (once; clean; no prompt).
- Initial Command selection 1 (`Refresh`); Initial Command mutations 1 (single property).
- Designer Save 1; Save retries 0.
- Designer Form close 0; Designer reopen 0 (not performed in T7 by instruction).
- Runtime reopen 0; runtime query 0; runtime Refresh 0 (cumulative 1 from T4); F4 0 in T7; Filter-in-Place 0 in T7.
- Runtime Save 0; Delete 0; New 0; runtime edit or add mode 0.
- Scope dialog interactions 0. Unload-warning acceptances 0. Prompts answered 0. Dialogs 0. Session challenges 0.
- Timeouts 0. Ref-not-found 0. Portal banner dismissals 0.

## Counts (T7)

- Tab select 2 (tab 1 to confirm runtime; tab 0 to Designer). Tab list 2.
- Clicks 4: runtime close 1; Initial Command arrow 1; `Refresh` option 1; Designer Save 1. The commit was a Tab key press (counted under key presses).
- Key presses 1 (`Tab`, commit).
- Waits 1 (3 s, after Save).
- Content snapshots 7 (runtime pre-close; runtime post-close; Designer pre-change; scoped list; post-selection; post-commit; post-settle). (T10 audit correction: the earlier report said 8 and listed a "post-Save" snapshot that was not separately taken; the Save result was read from the screenshot t7-04 and the settled snapshot.) Auto-generated snapshot files returned with action results are not counted as inspections.
- Finds 1 (`Refresh` in the option list).
- Screenshots 5: `t7-01` (pre-mutation baseline), `t7-02` (Refresh selected before commit), `t7-03` (after commit, pre-Save), `t7-04` (immediate post-Save), `t7-05` (settled post-Save).

## Reconciled cumulative counts (EXP-052 to date)

| Action | Count | Task |
| --- | --- | --- |
| Runtime clean close (native control), baseline cycle | 1 | T3 |
| Runtime reopen (Open > Select Form), baseline | 1 | T3 |
| Manual toolbar Refresh | 1 | T4 |
| Filter-in-Place query 1: Item `d*` | 1 | T5 |
| Filter-in-Place query 2: Cost `>5` with UM `DZ` | 1 | T6 |
| Cost `>5` attempts | 1 | T6 |
| Runtime clean close before Designer phase | 1 | T7 |
| Initial Command mutation (to `Refresh`) | 1 | T7 |
| Designer Save | 1 | T7 |
| Designer Form close / reopen | 0 / 0 | pending T8 |
| Final runtime reopen (AC-9) | 0 | pending |

Preserved data: no business-field edits, no record add or delete, no FX_UMs change. No data operation during the transition.

## Final browser state

- Tab 0 (Designer): FX_Items Form (User version) open, clean (Save and Undo disabled), Initial Command `Refresh`, no open list, no dialog.
- Tab 1 (Web Client): the runtime FX_Items tab was closed in T7; the Web Client now shows the portal tab with an empty Mongoose form area and the form toolbar disabled. No FX_Items runtime open.
- No browser-native dialog. No unsaved-change prompt.

## Next permitted action (for coordinator review)

Stop per the T7 instruction. Not authorized in T7: closing the Designer Form tab, reopening the Designer Form (AC-8), and the final runtime reopen (AC-9). Those need explicit authorization. The runtime is currently closed, so the AC-9 step would be an Open > Select Form without any query.

## Files written by the worker (T7)

- `evidence/EXP-052/T7-initial-command-refresh-mutation-and-designer-save-report.md` (this report)
- `evidence/EXP-052/t7-01-designer-pre-mutation-baseline-identity-initial-command-blank-clean.png` (viewed)
- `evidence/EXP-052/t7-02-designer-initial-command-selected-refresh-before-commit.png` (viewed)
- `evidence/EXP-052/t7-03-designer-initial-command-refresh-after-commit-focus-moved-pre-save.png` (viewed)
- `evidence/EXP-052/t7-04-designer-post-save-immediate-state.png` (viewed)
- `evidence/EXP-052/t7-05-designer-post-save-settled-clean-refresh.png` (viewed)
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T7, including `evidence/playwright/console-2026-10-11T04-34-54-147Z.log`, `page-2026-10-11T04-34-58-494Z.yml`, `page-2026-10-11T04-35-09-988Z.yml`, `page-2026-10-11T04-35-14-825Z.yml`, `page-2026-10-11T04-35-33-211Z.yml`, and `page-2026-10-11T04-35-40-813Z.yml`.
