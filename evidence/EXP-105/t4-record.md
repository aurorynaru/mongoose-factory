# EXP-105 T4 (ordinary close, recent-forms reopen, read-only readback)

Run: R-20261016-114004-XV8X. Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457. Task message 330655f5-8708-4831-bf2d-1a55711e429b (cycle 11, task T8). Instruction: execute only brief T4. T4 is the last step of this brief's EXP-105 sequence; no further step was performed.

## Sources and gate

- Sources reread before the first browser action of this task: AGENTS.md (full); docs/mongoose/transcripts/hello-world-pt7.md lines 145-163 (the Section 4 heading reads 05:16-07:31; steps 1-3 are the 05:16-06:31 part); recipes/components/add-component-from-toolbox.md; recipes/session/session-expiry-and-stale-designer.md; Outcome (operator) sections only of EXP-103-R3 (line 392) and EXP-065 (line 731); evidence/EXP-105/t3c-record.md.
- Process qualification: the EXP-105 experiment record was NOT reread before the first browser action of this task. It was reread and then edited at the update step, after the readback. Its content was otherwise in working context from prior tasks.
- The worker session transcript was not read in this task.
- Prior-task qualification (audit, for operator review): during the T7 task (T3 continuation), before a context summary, the worker attempted a Grep of the worker session transcript file to recover pre-compaction counts. Permission was denied. The worker did not retry. Pre-compaction counts for that task remain approximate (see the cumulative section).
- Gate (before any mutation or navigation of the Form): tab listing (tab 0 Web Client, tab 1 Designer); tab 1 selected; untargeted snapshot: FX_CustomerPortal tab selected; ScopeType User; Save disabled; Undo disabled; no dialog; no menu; Components tree collapsed to Pane (00). Capture `t4-pre-close-01-clean-form-state.png` (viewed): Save and Undo greyed, ScopeType User, no dialog.

## Close (ordinary, Form-tab control)

- Clicked the FX_CustomerPortal tab's closable control (ref e247 from the gate snapshot). One click.
- No save prompt appeared. The next snapshot showed no dialog, an empty tab list, and the page URL without the MGForm parameter. Prompt texts recorded: none.

## Reopen (Form menu, recent-forms entry)

- Form menu button clicked once (ref e3). A fresh snapshot showed the menu with the recent-forms entries (FX_CustomerPortal, FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items). A find for "FX_CustomerPortal" was used only as a read-only confirmation; the click ref came from the snapshot (ref e519).
- Recent-forms entry FX_CustomerPortal clicked once. Select Form OK was not used.
- Result: tab FX_CustomerPortal selected; ScopeType User; Save disabled; Properties Name `FX_CustomerPortal`; Form Type Flex; Device Type Default; no dialog.
- The Details panel had been collapsed by the close and reopened by one Details Expand Panel click (layout only). The Details tab then opened on Collections; one click on the Components tab, then one click on the Components Expand control.
- Components tree (expanded): see the hierarchy below.

## Components tree after reopen (observed)

Captured `t4-reopen-02-components-tree-expanded.png` and `t4-reopen-03-components-tree-scrolled.png` (after one ordinary wheel scroll of the tree). Indentation is read from these images because the accessibility rows are flat.

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal   (FlexLayout)            [root]
    Region00: header                                         [root region 0]
      FlexLayoutHeader                (FlexLayout; Pane 0; Container flexlayoutPane_FX_CustomerPortal; Tab 0)
        Region00: header                                     [nested region index 0]
        Region01: user                                       [nested region index 1]
    Region01: main                                           [root region 1]
    Region02: footer                                         [root region 2]
```

- Exactly one FlexLayoutHeader, under root Region00: header.
- Nested regions in index order: `Region00: header`, then `Region01: user`.
- Root regions are unchanged in name and order: Region00: header, Region01: main, Region02: footer. Their attributes (Type VerticalBox, the header/main/footer sizes) were not opened or re-read in T4 (the brief excludes the root attributes); the observation is names and order only.
- Limit: a light highlight on the `Region01: user` row appeared in one tree capture while the pointer rested over the tree (hover state; it was not a selection). In `t4-reopen-05-edit-adorner-tooltip-hover.png` the selected row is FlexLayoutHeader and Region01: user is not highlighted.

## FlexLayoutHeader Properties after reopen (observed; no change made)

Selected by its Components row (ref e909, one click). Captured `t4-reopen-04-properties-name-and-theme-class.png`.

- Properties header combo: `FlexLayoutHeader (FlexLayout)`. The earlier `flexLayout1_USER (FlexLayout)` discrepancy did not recur in this reopen (no discrepancy observed).
- Design > Name: `FlexLayoutHeader`.
- Type: `FlexLayout`; From Device Master: True.
- Appearance > Theme Class: `FX_BlueBackground` (the screenshot truncates it to `FX_BlueBackgroun`; the accessibility tree reads `FX_BlueBackground`).
- Layout > Flex Attributes (accessibility text): `Type: HorizontalBox Regions: - 00: header - 01: user Index: 0 Target: header`.

## Canvas Edit control and dialog (read-only)

- Hovered the canvas adorner icon of FlexLayoutHeader (ref e1040 from the snapshot; DOM id `flexlayouteditadorner-…`). Find confirmed the tooltip text `Edit FlexLayout Attributes` (accessibility tooltip ref e1768). Capture `t4-reopen-05-edit-adorner-tooltip-hover.png` shows the designer with that hover; the tooltip itself is not visible in the image (it is confirmed by the accessibility find, not by the picture).
- Clicked the same control once (ref e1040). The FlexLayout dialog opened for FlexLayoutHeader (the root FlexLayout attributes were not opened).
- Dialog Design group: Type `HorizontalBox`; Auto Size `False`; Region Index `0`; Margin blank.
- Regions grid: two rows: `0 | header | 1 Flex` and `1 | user | 1 Flex`.

### Region index 0 (read-only, row selected by its Index cell, ref e1867)

Captured `t4-region0-01-index0-header-selected.png` (viewed; shows the row selected and ID, Length, Unit, Orientation, Alignment, Pack; Minimum Length starts at the bottom edge; Default Margin is below the visible area and was read from the snapshot).

| Field | Observed | Expected | Match |
| --- | --- | --- | --- |
| ID | header | header | yes |
| Length | 1 | 1 | yes |
| Unit | Flex | Flex | yes |
| Orientation | Horizontal | Horizontal | yes |
| Alignment | Middle | Middle | yes |
| Pack | Start | Start | yes |
| Minimum Length | blank | not specified | n/a |
| Maximum Length | blank | not specified | n/a |
| Default Margin | blank | blank | yes |

### Region index 1 (read-only, row selected by its Index cell, ref e1876)

Captured `t4-region1-01-index1-user-selected.png` (viewed; shows ID, Length, Unit, Orientation, Alignment and Pack through the Pack row; Default Margin below the visible area). Then one wheel scroll of the Properties grid (pointer over the grid; no click) and `t4-region1-02-index1-user-properties-scrolled.png` (viewed; shows Orientation (partly), Alignment Middle, Pack End, Minimum Length blank, Maximum Length blank, Default Margin `1,0,0,0`). ID, Length and Unit are above the scrolled view and were read from the snapshot.

| Field | Observed | Expected | Match |
| --- | --- | --- | --- |
| ID | user | user | yes |
| Length | 1 | 1 | yes |
| Unit | Flex | Flex | yes |
| Orientation | Horizontal | Horizontal | yes |
| Alignment | Middle | Middle | yes |
| Pack | End | End | yes |
| Minimum Length | blank | not specified | n/a |
| Maximum Length | blank | not specified | n/a |
| Default Margin | `1,0,0,0` | `1,0,0,0` | yes |

- Regions grid (both rows, read-only): `t4-regions-grid-readback.png` (viewed): `0 header 1 Flex`; `1 user 1 Flex` (row 1 selected).
- No value differed from the expected values. No correction was made.
- The dialog's Undo control was disabled, so no uncommitted edit existed.

## Cancel and final state

- Clicked Cancel once (ref e1930). The next snapshot showed no dialog; Save disabled; Undo disabled; no menu; FX_CustomerPortal tab selected; ScopeType User.
- Components tree: collapsed again to Pane (00) after the dialog closed (the same behaviour seen after earlier dialog exits). The expanded hierarchy above was observed before the dialog.
- Capture `t4-final-01-clean-state-after-cancel.png` (viewed): FX_CustomerPortal open; Save and Undo greyed; ScopeType User; no dialog.

## Observations that limit the claims

- Persistence is observed across a Designer close and reopen in the same browser session. This is not cross-session, not database-level, and not runtime evidence.
- The Components hierarchy comes from screenshots (flat accessibility rows); the nested row labels show the regions as `Region00: header` and `Region01: user`.
- Root region attributes were not opened (out of T4 scope); only names and order were observed.
- The tooltip was confirmed by find, not by the image.
- Two `Ref not found` errors occurred; each was followed by one fresh untargeted snapshot. Details in the action counts.

## Action counts (T4 only, exact)

- Tab listings 1; tab selections 1 (index 1, succeeded).
- Untargeted snapshots 13 succeeded (including 2 recovery snapshots after a ref error). Targeted snapshots 4 succeeded (two with bounding boxes on the Components tree and Properties tree; two on the dialog). Find 2 (read-only confirmations; no ref was taken from find output).
- Screenshots 10 captured. Screenshot attempts failing with `Ref not found`: 2 (no file written).
- Reference clicks 11: Form-tab close 1; Form menu button 1; recent-forms entry FX_CustomerPortal 1; Details Expand Panel 1; Components tab 1; Components Expand 1; FlexLayoutHeader row 1; canvas Edit FlexLayout Attributes adorner 1; Regions row 0 index cell 1; Regions row 1 index cell 1; dialog Cancel 1.
- Hovers 1 (canvas adorner, tooltip confirmed). Mouse moves 2 (pointer positioning for wheel scrolling only; not clicks). Mouse wheel scrolls 2 (Components tree; Properties grid).
- Coordinate clicks 0. Drag 0.
- Dialog opens 1; dialog exits: Cancel 1; OK 0.
- Designer Saves 0. Undo 0. Regenerate 0. Text entries 0. Tab key presses 0. List opens 0. Region adds 0; region edits 0; corrections 0.
- Form closes 1 (no prompt); Form reopens 1 (recent-forms; Select Form OK not used).
- Prompts or dialogs answered 0; prompt texts recorded: none.
- Hook errors 0. Server-event errors 0. Ref-not-found errors 2 (both recovered with one fresh untargeted snapshot each).
- Session expiry 0; re-login 0. Navigation, refresh, Chrome or MCP restart 0. Checkout, FormSync, deployment, unload, runtime actions 0.

## Cumulative EXP-105 audit (carried figures with T4 added)

Carried figures are from the recorded counts in `evidence/EXP-105/t3c-record.md` and `t3-record.md` and the experiment record. Items marked "approximate" come from the pre-compaction part of the T7 task and are not reconciled.

| Item | Carried through T3 continuation | T4 (exact) | Cumulative | Status |
| --- | --- | --- | --- | --- |
| Tab listings | 7 | 1 | 8 | carried + exact |
| Tab selections | 5 | 1 | 6 | carried + exact |
| Snapshots (succeeded) | 27 (through T3 attempt) + 10 (T3 continuation post-compaction, exact) | 17 | 54, plus unitemized T3 continuation pre-compaction snapshots | **unreconciled** (pre-compaction snapshots not itemized) |
| Snapshots (hook-blocked) | 3 | 0 | 3 | carried |
| Find | 1 (plus 0 in T3 continuation) | 2 | 3 | carried + exact |
| Screenshots (succeeded) | 31 (through T3 attempt) + 2 pre-compaction (approximate, `t3b-*`) + 4 post-compaction | 10 | 47 | the 2 pre-compaction are carried, not re-verified |
| Reference clicks | 24 (through T3 attempt) + 9 post-compaction (exact) + at least 2 pre-compaction (approximate) | 11 | 44 + at least 2 approximate | **unreconciled** (pre-compaction part approximate) |
| Coordinate clicks | 1 (canvas placement, T2) | 0 | 1 | exact |
| Toolbox selections | 1 | 0 | 1 | exact |
| Canvas placement clicks | 1 | 0 | 1 | exact |
| Name entries | 1 successful; 2 hook-blocked (earlier) | 0 | 1 successful | carried |
| Theme Class entries | 1 | 0 | 1 | carried |
| Designer Saves | 2 (T2 1; T3 continuation 1) | 0 | 2 | exact per records |
| OK clicks | 1 (T3 continuation) | 0 | 1 | exact per records |
| Dialog opens | 2 (T2 1; T3 attempt 1); the T3 continuation kept the open dialog | 1 | 3 | carried + exact |
| Dialog exits | Cancel 1 (T2); OK 1 (T3 continuation) | Cancel 1 | Cancel 2; OK 1 | carried + exact |
| Region adds | 1 (T3 attempt) | 0 | 1 | carried |
| Region field entries | region 0 (pre-compaction, approximate) + region 1 (3 post-compaction, exact) | 0 | at least 3 | **unreconciled** for region 0 |
| Undo clicks | 0 | 0 | 0 | exact |
| Form opens | 1 (T1) | 0 (reopen 1) | 2 | exact (T1 and T4) |
| Form closes | 0 | 1 | 1 | exact |
| Prompts answered | 0 | 0 | 0 | exact |
| Hook errors | 3 | 0 | 3 | carried |
| Server-event errors | 0 | 0 | 0 | exact |
| Ref-not-found errors | not itemized in the carried records | 2 | 2 (T4 only) | **unreconciled** for earlier tasks |
| Re-logins | 0 | 0 | 0 | exact |

- Denied transcript read (qualification): see the Sources section above. Its only effect was that the pre-compaction counts remain approximate.

## Worker-written files (this task)

- `evidence/EXP-105/t4-record.md` (created)
- `evidence/EXP-105/t4-pre-close-01-clean-form-state.png`
- `evidence/EXP-105/t4-reopen-02-components-tree-expanded.png`
- `evidence/EXP-105/t4-reopen-03-components-tree-scrolled.png`
- `evidence/EXP-105/t4-reopen-04-properties-name-and-theme-class.png`
- `evidence/EXP-105/t4-reopen-05-edit-adorner-tooltip-hover.png`
- `evidence/EXP-105/t4-region0-01-index0-header-selected.png`
- `evidence/EXP-105/t4-region1-01-index1-user-selected.png`
- `evidence/EXP-105/t4-region1-02-index1-user-properties-scrolled.png`
- `evidence/EXP-105/t4-regions-grid-readback.png`
- `evidence/EXP-105/t4-final-01-clean-state-after-cancel.png`
- `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (updated)

Tool-generated (Playwright MCP output, not worker writes): snapshot `.yml` files under `evidence/playwright/` and console log files for this task.

## Final state

- FX_CustomerPortal open and clean in User scope; Save and Undo disabled; no dialog or menu open; Components tree collapsed to Pane (00).
- No unsaved change. No prompt open.

## Next permitted action

None in this brief. T4 is the last step of the brief for EXP-105. The operator decides what follows (for example, a cross-session or runtime check, or cleanup of the EXP-103-R3, EXP-102 and EXP-105 changes), which this worker did not perform.
