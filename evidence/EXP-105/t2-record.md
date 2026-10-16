# EXP-105 T2 (placement, Name) record: BLOCKED after placement, Name not entered

Run: R-20261016-114004-XV8X, cycle 3 task message 144e461c-039b-44af-96d4-bbc34ed279bb (bounded instruction: T2 placement, Name, Theme Class, one Save, read-only default attributes). Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457.

## Sources reread before the first browser call

AGENTS.md; hello-world-pt7.md lines 145-163 and transcript 05:16-06:31 (lines 145-163 contain the 05:16-07:31 Section 4 heading); recipes/components/add-component-from-toolbox.md; recipes/session/session-expiry-and-stale-designer.md; Outcome (operator) sections of EXP-103-R3 (line 392) and EXP-065 (line 731); the EXP-105 record; t1b-gate-record.md.

## Sequence

1. `browser_tabs` list: succeeded (tab 0 Web Client, tab 1 Designer with MGForm=FX_CustomerPortal in the URL).
2. `browser_tabs` select index 1: succeeded.
3. `browser_snapshot` (untargeted): FX_CustomerPortal active; Save and Undo disabled; Components tree Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header, Region01: main, Region02: footer; ScopeType User. Gate screenshot `t2-gate-01-form-clean-components-tree.png`.
4. Click the Toolbox "FlexLayout" row (ref e141, from the step-3 snapshot). The row is highlighted. Screenshot `t2-toolbox-01-flexlayout-row-selected.png`.
5. Canvas placement click by coordinates (400, 135), inside the header strip above the first dotted divider (strip about y=100 to y=172), away from the edges. This is the only canvas placement click. Coordinate click count: 1. No drag.
6. Components tree after placement (screenshot `t2-placement-02-components-tree-after-click.png`): `flexlayoutPane_FX_CustomerPortal` > `Region00: header` > **`flexLayout1_USER` (Type FlexLayout, Pane 0)** indented directly under Region00: header, with an auto-created child `Region00: UNKNOWN0`. The Container column for the new row reads flexlayoutPane_FX_C... (the pane). Region01: main and Region02: footer remain at root level. Save became enabled (dirty). The canvas shows the nested FlexLayout's icon strip at the top-left of the header row.
7. Properties after placement: component combo reads `flexLayout1_USER (FlexLayout)`; Design > Name = flexLayout1_USER; Type = FlexLayout; From Device Master = True.
8. `browser_snapshot` (untargeted, fresh): confirmed the same tree and Properties; Save enabled, Undo enabled.
9. Click the Properties Design > Name value cell (ref e848). An active textbox (ref e976) appeared containing `flexLayout1_USER`.
10. `browser_type` into ref e976 with text `FlexLayoutHeader` (one fill, no submit). **Blocked by a PreToolUse hook: `Exact value required: header. Preserve its spelling and case.`** No value was entered. The call was not retried. No keystroke workaround was used.
11. `browser_snapshot` targeted to e976 (the one fresh inspection): textbox [active] value still `flexLayout1_USER`.
12. Screenshot `t2-name-01-editor-open-hook-blocked.png`: Name editor open with `flexLayout1_USER` highlighted; Components tree unchanged; Save and Undo enabled.

## Stopped here (blocker)

- The Name editor is still open on the new component with its original value (no change made).
- The placement is an unsaved change. Save is enabled. No Save was made, and per the brief no Save is made after an error.
- Undo was NOT used. Its authorization covers only removing a misplaced component or stopping when FX_BlueBackground is missing; neither applies, and the placement itself is correct.
- Theme Class, default-attribute inspection, Cancel, Regions (T3) and readback (T4) were not performed.
- The hook message is ambiguous: the value required for this field is FlexLayoutHeader per the brief, but the hook asks for `header`, which is the region ID used in T3, not the component name. The operator should decide how the hook is configured or whether to type the name manually. The worker did not guess or bypass it.

## Observations (observed, same session)

- Placement by one Toolbox selection and one coordinate click created exactly one FlexLayout, as a child of Region00: header, as the brief requires.
- The new component's generated name is `flexLayout1_USER`, Type `FlexLayout`.
- The new FlexLayout auto-creates one nested region, `Region00: UNKNOWN0`. The brief's Regions step (T3) will need to handle this region.
- The Components-tree rows are flat in the accessibility snapshot; the parent was confirmed from indentation in the screenshot, not from the snapshot.

## Action counts (this task only)

- Tab listings: 1 (success). Tab selections: 1 (success).
- Browser snapshots: 3 (2 untargeted, 1 targeted to e976). All succeeded.
- Screenshots: 4 (gate, Toolbox selection, placement tree, Name editor).
- Clicks by reference: 2 (Toolbox FlexLayout row 1; Name value cell 1).
- Coordinate clicks: 1 (canvas placement at 400,135). Canvas placement clicks: 1.
- Toolbox selections: 1.
- Undo clicks: 0.
- Name entries: 0 successful; 1 attempt blocked by hook. Name corrections: 0. Theme Class entries: 0.
- List opens: 0. Dialog opens: 0. Cancel clicks: 0. OK clicks: 0.
- Designer Saves: 0. Regenerate: 0. Region adds/edits: 0.
- Form opens/closes: 0 / 0 (this task). Component selections beyond the placed one: 0.
- Prompts or dialogs answered: 0. Hook errors: 1 (the blocked type call).
- Server-event errors: 0. Session expiry/re-login: 0. Navigation/refresh/Chrome or MCP restart: 0.
- Drag operations: 0.

## Screenshots (what each proves and does not prove)

- `t2-gate-01-form-clean-components-tree.png`: FX_CustomerPortal open, Save/Undo greyed, ScopeType User, Components tree with the three root regions. Proves the pre-placement gate. Does not prove the Form was clean before this task by any save record.
- `t2-toolbox-01-flexlayout-row-selected.png`: the FlexLayout Toolbox row is highlighted. Proves the selection. Does not prove the placement.
- `t2-placement-02-components-tree-after-click.png`: flexLayout1_USER (FlexLayout) indented under Region00: header, with Region00: UNKNOWN0 under it; Save enabled; Properties name flexLayout1_USER. Proves the placement location and that the change is unsaved. Does not prove persistence.
- `t2-name-01-editor-open-hook-blocked.png`: Name editor open with flexLayout1_USER unchanged. Proves the blocked state. Does not prove any name entry.

## Files written (this task)

- `evidence/EXP-105/t2-record.md` (created)
- `evidence/EXP-105/t2-gate-01-form-clean-components-tree.png` (created)
- `evidence/EXP-105/t2-toolbox-01-flexlayout-row-selected.png` (created)
- `evidence/EXP-105/t2-placement-02-components-tree-after-click.png` (created)
- `evidence/EXP-105/t2-name-01-editor-open-hook-blocked.png` (created)
- `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (updated)

Tool-generated (Playwright MCP output, not worker file writes): `evidence/playwright/page-2026-10-16T04-00-10-088Z.yml`, `page-2026-10-16T04-00-19-073Z.yml`, `page-2026-10-16T04-00-45-079Z.yml`; console logs `console-2026-10-16T03-59-56-707Z.log`, `console-2026-10-16T03-59-56-708Z.log`.
