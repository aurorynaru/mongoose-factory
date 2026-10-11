# EXP-052 T8 — Clean Designer Form close and one reopen; Initial Command recovery (AC-8), cycle 7

Run `R-20261011-122156-AVGD`, task T8, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `eda39431-ba9f-4e97-a705-176adae526f1`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-8 supported with limits (same-session UI). The clean Designer FX_Items Form tab was closed once through its native close control; the tab was removed with no unsaved-change prompt. The same User-scoped Form was reopened once through the Designer Form menu recent-forms entry. The recovered Form shows Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`, Initial Command `Refresh`, unchanged comparison properties, and Save and Undo disabled. No Initial Command edit, Save, runtime action, or scope change was performed. Stopped for coordinator review before AC-9.**

## Pre-close prerequisites (fresh snapshot, tab 0; read-only)

- Tab 0 Designer selected; Form tab `FX_Items` (`?MGForm=FX_Items`) selected.
- Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True.
- Initial Command `Refresh` (accessibility text `Refresh`; screenshot `t8-01`).
- Save disabled; Undo disabled.
- Comparison properties match the T2/T7 baseline: Script Language Visual Basic; Close Box True; Minimize/Maximize Box True; Filter Form blank; Enable Advanced Filter False; Help Context ID -1; Help File Name blank; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Unit Char; Size 69; 21; Synchronize FlexLayout True.
- Status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- No dialog, no open list, no session challenge, no pending mutation.
- Prerequisites met.

## Close (once)

- Action: the Form tab's native close control `closable FX_Items` (`e247`), one click. No retry.
- Immediate result: the Designer URL dropped `?MGForm=FX_Items` (now `.../designer/default.aspx`).
- Fresh snapshot: Form tablist empty (no `FX_Items` tab; `tab` element absent); canvas and Properties panel empty; Save and Undo disabled; status bar still User scope. No dialog. No unsaved-change prompt.
- Screenshot `t8-02` (viewed): canvas empty; no FX_Items tab; toolbars greyed; status bar User scope. Proves the Form tab was removed and no prompt is visible. Does not prove the saved definition itself (that is the reopen check).

## Reopen (once)

- Action 1: Designer `Form` navigation button (`e3`), one click. Screenshot `t8-03` (viewed) showed the Form menu: `Definition`, `Sign Out`, then `FX_Items` as the first entry after the separator, followed by `Sql Tables`, `IDOs`, `Property Classes`, `Export/Import Strings`, `IDO Projects`, `FX_UMs`, `FX_HelloWorld01`, `Data Maintenance Wizard`, `Runtime Builder Selection`. Menu items expose no accessible names; `FX_Items` was identified from this screenshot and the menu order (the same entry used in T2 and EXP-050 T7).
- Action 2: click the `FX_Items` recent-forms entry (`e736`), one click.
- Immediate result: the Designer URL returned to `?MGForm=FX_Items`; the tab `FX_Items` is selected (`e766`, close control `closable FX_Items` `e768`).
- No Select Form dialog, no scope dialog, no unload warning, no prompt.

## Recovered identity and property state (fresh snapshot; screenshot `t8-04`)

| Property | Recovered value | Pre-close value | Match |
| --- | --- | --- | --- |
| Name | `FX_Items` | `FX_Items` | yes |
| Version | `User version for user anton.ramos@3mworks.com.ph` | same | yes |
| Device Type / Form Type / Is Master | Default / Normal / True | same | yes |
| Description / Caption | blank / blank | blank / blank | yes |
| **Initial Command** | **`Refresh`** | **`Refresh`** | **yes** |
| Script Language | Visual Basic | Visual Basic | yes |
| Close Box / Minimize/Maximize Box | True / True | True / True | yes |
| Filter Form / Enable Advanced Filter | blank / False | blank / False | yes |
| Help Context ID / Help File Name | -1 / blank | -1 / blank | yes |
| Splitter / Splitter Position | Vertical / 11 | Vertical / 11 | yes |
| Pane 0 / Pane 1 Scroll Bars | Never / As Needed | Never / As Needed | yes |
| Unit / Size / Synchronize FlexLayout | Char / 69; 21 / True | same | yes |
| Save / Undo | disabled / disabled | disabled / disabled | yes |
| Status bar | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | same | yes |

Screenshot `t8-04` (viewed): Designer tab `FX_Items`; Properties panel Name `FX_Items`; Version `User version for us…` (full text from accessibility); Behavior expanded with Initial Command `Refresh`; Script Language, Close Box, Min/Max, and the rest visible; Save and Undo greyed; status bar User scope. Proves the recovered identity, Initial Command value, and clean state. Does not prove the database contents, and does not show the full Version text.

Observation (design-time canvas): the design-time preview shows empty grey business inputs and no starred row. Before the close (`t8-01`, and in T7) the preview showed a starred placeholder row, Cost `0.00`, and white inputs. The Properties values are unchanged; the difference is in the designer's own canvas rendering after reopen. Cause not established; not a property difference.

Behavior group: the Behavior rows were already expanded on recovery. No expand action was needed or taken in T8.

## Non-events in T8

- Designer Form close 1 (native tab control); Designer Form reopen 1 (Form menu recent-forms entry).
- Initial Command selection 0; property edit 0; Designer Save 0; Save retries 0 (cumulative Designer Save stays 1 from T7).
- Runtime (Web Client) interactions 0; runtime Refresh 0; F4 0; Filter-in-Place 0; query 0; runtime Save 0; Delete 0; New 0.
- Scope changes 0; scope dialog interactions 0; unload-warning acceptances 0; Select Form dialogs 0.
- Prompts answered 0; dialogs 0; session challenges 0; timeouts 0; ref-not-found 0; portal banner dismissals 0.
- Browser tab selects 1 (tab 0 at start); tab list 1 (start).

## Counts (T8)

- Clicks 3: close 1; Form menu 1; recent-forms entry 1.
- Key presses 0. Fills 0. Finds 0.
- Content snapshots 4: pre-close; post-close; Form menu (depth 4); recovered. Auto-generated snapshot files returned with action results are not counted as inspections.
- Screenshots 4: `t8-01` (pre-close), `t8-02` (closed), `t8-03` (menu, read-only), `t8-04` (recovered).
- Tab list 1; tab select 1 (to tab 0 at the start of T8).

## Reconciled cumulative counts (EXP-052 to date)

| Action | Count | Task |
| --- | --- | --- |
| Runtime clean close (baseline cycle) | 1 | T3 |
| Runtime reopen (Open > Select Form, baseline) | 1 | T3 |
| Manual toolbar Refresh | 1 | T4 |
| Filter-in-Place query 1: Item `d*` | 1 | T5 |
| Filter-in-Place query 2: Cost `>5` with UM `DZ` | 1 | T6 |
| Cost `>5` attempts | 1 | T6 |
| Runtime clean close before Designer phase | 1 | T7 |
| Initial Command mutation (blank → `Refresh`) | 1 | T7 |
| Designer Save | 1 | T7 |
| Designer Form close (native tab control) | 1 | T8 |
| Designer Form reopen (recent-forms) | 1 | T8 |
| Final runtime reopen (AC-9) | 0 | pending |

Preserved data: no business-field edits, record adds, or deletes in T8; no FX_UMs change. Runtime was not touched in T8.

## Lifecycle boundary notes

- Designer close and reopen were same-session UI actions in one worker session. Not cross-session. Not a metadata unload, cache reset, or FormSync.
- The reopen used the Form menu recent-forms entry, the same native path as EXP-050 T7 and EXP-052 T2.

## Limits

- Same session, UI only. No database read; the recovered Initial Command shows the Form's Designer state after reopen, not an independent database value.
- The FX_Items entry was identified by screenshot (menu items have no accessible names).
- The design-time canvas rendering differs after reopen (see observation); the Properties values do not.
- The Version text is truncated visually; full text from accessibility.

## Final browser state

- Tab 0 (Designer): FX_Items Form (User version) open after reopen; clean (Save and Undo disabled); Initial Command `Refresh`; no dialog; no open list.
- Tab 1 (Web Client): not acted on in T8. The FX_Items runtime tab remains closed (closed in T7). No runtime Form open.
- No browser-native dialog. No unsaved-change prompt.

## Next permitted action (for coordinator review)

Stop per the T8 instruction. AC-9 (final runtime reopen with no Refresh, F4, or Filter-in-Place) needs explicit coordinator authorization. The runtime is currently closed; AC-9 would be a single Open > Select Form with no query after it.

## Files written by the worker (T8)

- `evidence/EXP-052/T8-designer-close-and-reopen-initial-command-persistence-report.md` (this report)
- `evidence/EXP-052/t8-01-designer-pre-close-clean-initial-command-refresh.png` (viewed)
- `evidence/EXP-052/t8-02-designer-closed-fx-items-tab-absent-no-prompt.png` (viewed)
- `evidence/EXP-052/t8-03-designer-form-menu-open-before-reopen-readonly.png` (viewed)
- `evidence/EXP-052/t8-04-designer-recovered-FX_Items-initial-command-refresh-save-disabled.png` (viewed)
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot files written by the browser tool during T8, including `page-2026-10-11T04-37-34-800Z.yml`, `page-2026-10-11T04-37-42-274Z.yml`, `page-2026-10-11T04-37-50-556Z.yml`.
