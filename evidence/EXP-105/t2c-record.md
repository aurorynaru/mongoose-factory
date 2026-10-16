# EXP-105 T2 completion (from the existing unsaved placement): Name, Theme Class, one Save, default-attribute read, Cancel

Run: R-20261016-114004-XV8X, task message 59aa9522-a7ca-4148-9592-57d5e037b6c3 (header labelled T5; the bounded instruction limited this task to completing brief T2 only, so T3 and T4 were not started). Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457.

Operator context (not independent evidence): the operator stated the exact-value guard was corrected at its source and authorized one plain fill of FlexLayoutHeader.

## Sources reread before the first browser call

AGENTS.md; hello-world-pt7.md lines 145-163 (Section 4, 05:16-07:31 heading); recipes/components/add-component-from-toolbox.md; recipes/session/session-expiry-and-stale-designer.md; Outcome (operator) sections of EXP-103-R3 (line 392) and EXP-065 (line 731); the EXP-105 record; evidence/EXP-105/t2b-record.md.

## Sequence (this task)

1. `browser_tabs` list (succeeded): tab 0 Web Client; tab 1 Designer, MGForm=FX_CustomerPortal.
2. `browser_tabs` select index 1 (succeeded).
3. Untargeted snapshot: FX_CustomerPortal active; ScopeType User; Save enabled (unsaved placement); Name editor active on `flexLayout1_USER`; tree Region00: header > flexLayout1_USER > Region00: UNKNOWN0; Region01: main; Region02: footer. Screenshot `t2c-gate-01-inherited-state-name-editor-active.png`.
4. `browser_type` into the active Name textbox (ref e698) with `FlexLayoutHeader`, one fill, no submit. **Succeeded; no hook denial.**
5. `browser_press_key` Tab. Untargeted snapshot: Properties Name value = FlexLayoutHeader; tree row = FlexLayoutHeader (under Region00: header, with Region00: UNKNOWN0 beneath). Screenshot `t2c-name-02-flexlayoutheader-after-tab.png`. The Properties header combo still read `flexLayout1_USER (FlexLayout)`.
6. Reselect (one allowed): click the FlexLayoutHeader Components row (ref e798). Screenshot `t2c-name-03-reselected-properties-header.png`. **The Properties header combo still read `flexLayout1_USER (FlexLayout)` after the reselect: lag observed and not corrected further.** Name value and tree both read FlexLayoutHeader.
7. Untargeted snapshot; click Appearance row (ref e624); row selected but not expanded. Targeted snapshot (e625) and one untargeted snapshot were taken to find a working expander; no change made.
8. Properties toolbar "Expand" icon (ref e550, a named control; expands all Properties groups; no value changed). Screenshot `t2c-appearance-02-after-properties-expand.png` shows Appearance > Theme Class.
9. Untargeted snapshot; click the Theme Class dropdown trigger (ref e907). The list opened with one option, FX_BlueBackground. Screenshot `t2c-theme-01-list-opened.png`.
10. Untargeted snapshot; click option FX_BlueBackground (ref e1476). Tab key pressed. Screenshot `t2c-theme-02-after-tab.png`: Theme Class displays `FX_BlueBackgroun` (truncated by the column width); the accessibility tree reads `FX_BlueBackground`.
11. Untargeted snapshot; **one Designer Save** (toolbar Save, ref e16). Response: native toast "Form [FX_CustomerPortal] and global object(s) were saved." Save icon greyed afterwards. Screenshot `t2c-save-01-after-single-save.png`. Post-save snapshot: Save `[disabled]`, Undo `[disabled]`. (The toast text says "global object(s)"; no worker-created global object was intended. Observed only.)
12. Untargeted snapshot. Hover the 5th canvas adorner icon (ref e265): no tooltip seen. Screenshot `t2c-adorner-01-hover-icon5.png`.
13. Hover the 1st canvas adorner icon (ref e262, DOM id `flexlayouteditadorner-…`): tooltip **"Edit FlexLayout Attributes"** confirmed. Screenshot `t2c-adorner-02-hover-edit-icon1.png`.
14. Click the same icon once (ref e262). The FlexLayout dialog opened. Screenshot `t2c-attrs-01-dialog-default-open.png`.
15. Untargeted snapshot; click the Regions row 0 ID cell (ref e1595) to select the region (no edit). Screenshot `t2c-attrs-02-region0-selected-default.png`.
16. Untargeted snapshot; open the Alignment list once (ref e1710). Screenshot `t2c-attrs-03-alignment-list-open.png`.
17. Untargeted snapshot; close the Alignment list by clicking the Regions row 0 ID cell (ref e1595), **no option chosen**. Screenshot `t2c-attrs-04-alignment-list-closed-no-change.png`: Alignment still `Top`.
18. Untargeted snapshot; open the Pack list once (ref e1721). Screenshot `t2c-attrs-05-pack-list-open.png`.
19. Close the Pack list by clicking the Regions row 0 ID cell (ref e1595), **no option chosen**. Screenshot `t2c-attrs-06-pack-list-closed-no-change.png`: Pack still `Start`.
20. Untargeted snapshot; **Cancel once** (ref e1647). Dialog closed. Screenshot `t2c-attrs-07-after-cancel-save-state.png`: Save and Undo greyed; Form open (FX_CustomerPortal, ScopeType User); no dialog open; Properties now shows the Form (no component selected); the Components tree is collapsed to Pane (00) after the dialog closed; the canvas header strip is filled teal.
21. Stopped at the end of T2.

## Name and Theme Class (as displayed)

- Name: Properties Name value = `FlexLayoutHeader`; Components tree row = `FlexLayoutHeader` (under Region00: header). **Properties header combo = `flexLayout1_USER (FlexLayout)`: lag observed after the Tab, after one reselect, and after the Save; not resolved within this task.**
- Theme Class: `FX_BlueBackground` (accessibility tree); the visible column shows `FX_BlueBackgroun` (truncated).
- Corrections: none needed for Name or Theme Class.

## Default attributes (read-only, observed in the dialog after the Save)

- Type: HorizontalBox (unchanged; not edited). Auto Size: False. Region Index: 0. Margin: empty.
- Region count: 1. Regions grid row 0: index 0, ID UNKNOWN0, Length 1 Flex.
- Region 0 Properties as displayed: ID `UNKNOWN0`; Length `1`; Unit `Flex`; Orientation `Horizontal`; Alignment `Top`; Pack `Start`; Minimum Length: blank; Maximum Length: blank; Default Margin: blank.
- Alignment options (list opened once, nothing chosen): `Top`, `Middle`, `Stretch`. **Middle exists.**
- Pack options (list opened once, nothing chosen): `Start`, `Center`, `End`. **End exists.**
- Properties > Layout > Flex Attributes summary (root Properties panel, observed in the snapshot): `Type: HorizontalBox Regions: - 00: UNKNOWN0 Index: 0 Target: header`.
- No attribute was changed. Cancel was used once. No OK was clicked.

## Regions (T3): not performed

The dialog's region set was read (one region, UNKNOWN0). No region was added, edited or removed. T3 starts with the operator's next instruction.

## Screenshots (what each proves and does not prove)

- `t2c-gate-01-inherited-state-name-editor-active.png`: FX_CustomerPortal open; ScopeType User; Save enabled from the unsaved placement; tree shows flexLayout1_USER under Region00: header with Region00: UNKNOWN0; Name editor active with the original value. Proves the inherited state. Does not prove the Name entry.
- `t2c-name-02-flexlayoutheader-after-tab.png`: Properties Name value FlexLayoutHeader; tree row FlexLayoutHeader; Properties header still `flexLayout1_USER (FlexLayout)`. Proves the Name value and the tree label; shows the header lag. Does not prove persistence.
- `t2c-name-03-reselected-properties-header.png`: after one reselect the header still lags. Proves the lag persisted after reselect.
- `t2c-appearance-01-expanded-properties.png`: Appearance row selected, not expanded (before the expand-all). Proves a no-change state. Does not show Theme Class values.
- `t2c-appearance-02-after-properties-expand.png`: Appearance expanded; Theme Class combo visible with an empty value before the list was used. Proves the control location.
- `t2c-theme-01-list-opened.png`: the Theme Class list with one option, FX_BlueBackground. Proves the available list at that moment. Does not prove the selection.
- `t2c-theme-02-after-tab.png`: Theme Class shows FX_BlueBackgroun (truncated); Name FlexLayoutHeader. Proves the entry; the truncation means the full text is only confirmed by the accessibility tree.
- `t2c-save-01-after-single-save.png`: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save icon greyed; Name FlexLayoutHeader; Theme Class FX_BlueBackgroun. Proves the Save response and the clean state after the Save. Does not prove persistence across a reload (that is the T4 readback).
- `t2c-adorner-01-hover-icon5.png`: no tooltip on the 5th icon. Proves only that the 5th icon is not the attributes control.
- `t2c-adorner-02-hover-edit-icon1.png`: tooltip "Edit FlexLayout Attributes" on the 1st icon. Proves the control identity.
- `t2c-attrs-01-dialog-default-open.png`: FlexLayout dialog: Type HorizontalBox; Region Index 0; one region UNKNOWN0 1 Flex. Proves the default attributes at dialog open.
- `t2c-attrs-02-region0-selected-default.png`: region 0 selected; Properties ID UNKNOWN0, Length 1, Unit Flex, Orientation Horizontal, Alignment Top, Pack Start; Minimum Length onward below the scroll (read from the snapshot). Proves the visible values.
- `t2c-attrs-03-alignment-list-open.png`: Alignment list open with Top, Middle, Stretch. Proves the Alignment options.
- `t2c-attrs-04-alignment-list-closed-no-change.png`: Alignment closed; value Top. Proves no change.
- `t2c-attrs-05-pack-list-open.png`: Pack list open with Start, Center, End. Proves the Pack options.
- `t2c-attrs-06-pack-list-closed-no-change.png`: Pack closed; value Start. Proves no change.
- `t2c-attrs-07-after-cancel-save-state.png`: dialog closed; Save and Undo greyed; Form open and clean. Proves the exit state for this task.

## Action counts (this task only)

- Tab listings: 1 (succeeded). Tab selections: 1 (succeeded).
- Browser snapshots: 13 untargeted, 1 targeted (e625). All succeeded. Find calls: 0.
- Screenshots: 17.
- Clicks by reference: 13 = Components row reselect (e798) 1; Appearance row (e624) 1; Properties toolbar Expand (e550) 1; Theme Class trigger (e907) 1; Theme Class option (e1476) 1; Designer Save (e16) 1; canvas adorner Edit icon (e262) 1; region row select (e1595) 1; Alignment trigger (e1710) 1; Alignment list close via region row (e1595) 1; Pack trigger (e1721) 1; Pack list close via region row (e1595) 1; dialog Cancel (e1647) 1.
- Coordinate clicks: 0 in this task.
- Hovers: 2 (e265: no tooltip; e262: tooltip confirmed).
- Name entries: 1 successful (one plain fill). Name corrections: 0.
- Theme Class entries: 1 (option click). Theme Class corrections: 0.
- Tab key presses: 2 (after Name; after Theme Class).
- List opens: 3 (Theme Class, Alignment, Pack); list closes without choosing: 2 (Alignment, Pack). Option chosen in Alignment or Pack: 0.
- Canvas placement clicks: 0. Toolbox selections: 0. Undo clicks: 0. Drag: 0.
- Designer Saves: 1 (response: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled afterward).
- Dialog opens: 1. Dialog exits: 1 (Cancel). OK clicks: 0.
- Region adds: 0. Region edits: 0.
- Form opens: 0. Form closes: 0.
- Prompts or dialogs answered: 0.
- Hook errors: 0 in this task.
- Server-event errors: 0. Session expiry or re-login: 0 / 0.
- Navigation, refresh, Chrome or MCP restart: 0.

## Cumulative totals (all EXP-105 worker tasks, including the earlier blocked attempts)

These totals add this task to the prior record's totals (`experiments/EXP-105-…md`, cumulative after attempt 4). The prior totals are carried from that record and were not re-derived here.

- Tab listings: 6 (2 failed in T1 attempt 1; 4 succeeded). Tab selections: 4.
- Browser snapshots: 22 (1 failed in attempt 1; 21 succeeded, including 2 targeted, 1 in attempt 3 and 1 in this task). Find calls: 1.
- Screenshots: 26.
- Clicks by reference: 20 (prior 7 + this task 13). Coordinate clicks: 1 (canvas placement). Total clicks: 21.
- Toolbox selections: 1. Canvas placement clicks: 1. Components placed: 1 (flexLayout1_USER, now named FlexLayoutHeader).
- Name entries: 1 successful (this task), plus 2 earlier attempts blocked by the PreToolUse hook. Name corrections: 0.
- Theme Class entries: 1 successful; corrections: 0.
- Designer Saves: 1 (this task).
- Dialog opens: 1 (this task). Dialog exits: Cancel 1.
- Undo: 0. OK: 0. Region adds: 0. Region edits: 0.
- Form opens: 1. Form closes: 0.
- Hook errors: 2 (both earlier). Server-event errors: 0. Re-logins: 0.

## Final state (observed at the end of this task)

- FX_CustomerPortal open; ScopeType User; Save disabled; Undo disabled; no dialog or menu open.
- Component: FlexLayoutHeader (Type FlexLayout), a child of Region00: header, with Region00: UNKNOWN0 beneath it. Theme Class FX_BlueBackground. One region (UNKNOWN0, 1 Flex, Horizontal, Top, Start). Not yet set to header/user per T3.
- Root regions: Region00: header, Region01: main, Region02: footer (unchanged; not edited).
- Properties header combo still displays `flexLayout1_USER (FlexLayout)` (observed lag).
- The Components tree is collapsed to Pane (00) after the dialog closed; Details panel expanded.

## Limits

- Same-session UI observations only. The Save is observed by the toast and the greyed Save icon; persistence across reload or reopen is not proven here (T4 readback is needed).
- The canvas header strip turned teal after the Save. The teal fill is observed; the worker did not confirm which component's background it is.
- Region read-back was taken from the open dialog, not after a reopen.

## Files written (this task)

- `evidence/EXP-105/t2c-record.md` (created)
- `evidence/EXP-105/t2c-gate-01-inherited-state-name-editor-active.png`
- `evidence/EXP-105/t2c-name-02-flexlayoutheader-after-tab.png`
- `evidence/EXP-105/t2c-name-03-reselected-properties-header.png`
- `evidence/EXP-105/t2c-appearance-01-expanded-properties.png`
- `evidence/EXP-105/t2c-appearance-02-after-properties-expand.png`
- `evidence/EXP-105/t2c-theme-01-list-opened.png`
- `evidence/EXP-105/t2c-theme-02-after-tab.png`
- `evidence/EXP-105/t2c-save-01-after-single-save.png`
- `evidence/EXP-105/t2c-adorner-01-hover-icon5.png`
- `evidence/EXP-105/t2c-adorner-02-hover-edit-icon1.png`
- `evidence/EXP-105/t2c-attrs-01-dialog-default-open.png`
- `evidence/EXP-105/t2c-attrs-02-region0-selected-default.png`
- `evidence/EXP-105/t2c-attrs-03-alignment-list-open.png`
- `evidence/EXP-105/t2c-attrs-04-alignment-list-closed-no-change.png`
- `evidence/EXP-105/t2c-attrs-05-pack-list-open.png`
- `evidence/EXP-105/t2c-attrs-06-pack-list-closed-no-change.png`
- `evidence/EXP-105/t2c-attrs-07-after-cancel-save-state.png`

Tool-generated (Playwright MCP output, not worker writes): `evidence/playwright/` snapshot and find-result files written for this task, and console log `evidence/playwright/console-2026-10-16T04-23-00-255Z.log` (written at the tab listing).
