# EXP-105 T3 continuation (regions completed in the open dialog, OK, one Designer Save)

Run: R-20261016-114004-XV8X. Task message 8e4121d2-0349-46ad-b90b-393cee67e909 (cycle 10, task T7). Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457.
Scope: T3 only (region configuration, Regions grid before OK, OK once, one Designer Save). T4 (close and reopen readback) was NOT started.

## Sources and gate

- Sources were read at the start of this task before the first browser action of this task (AGENTS.md, hello-world-pt7.md Section 4 lines 145-163, the two recipes, the Outcome sections of EXP-103-R3 and EXP-065, this experiment record, and the prior T3 record). Part of this task ran before a context summary; that part is described from the carried summary, not from a re-read.
- Gate (`t3b-gate-01`, taken before this continuation's edits): FX_CustomerPortal open; dialog open with Type HorizontalBox; two regions (index 0 UNKNOWN0 1 Flex; index 1 UNKNOWN1_USER 1 Flex, selected); Save disabled.

## Pre-compaction part of this task (carried from the summary; exact counts not recoverable)

- Region 0 (index 0): ID changed to `header`; Alignment changed to `Middle` by one option click (ref e1806). Length, Unit, Orientation and Pack were not itemized in the carried summary; they had been Length 1, Unit Flex, Orientation Horizontal, Pack Start at the time of the gate capture.
- Region 1 (index 1): ID changed to `user` (confirmed in the grid).
- Region 1 Alignment list opened once (trigger ref e2010); the list was left open at the handoff.
- Screenshots in this part: `t3b-gate-01-dialog-open-two-regions-uncommitted.png`, `t3b-region0-01-id-header-alignment-middle.png`.

## Post-compaction part of this task (exact)

1. Alignment option `Middle` clicked (ref e2075). Next snapshot: region 1 Alignment shows `Middle` (committed when the next row was clicked).
2. Pack trigger clicked (ref e2021). No list opened (no option list in the next snapshot); the click only committed the Alignment editor.
3. Pack trigger arrow clicked (ref e2150). Pack list opened: options Start (selected), Center, End.
4. Pack `End` option clicked (ref e2214). Snapshot: region 1 Pack shows `End`.
5. Default Margin value cell clicked (ref e2176). No editor opened (no textbox active in the next snapshot).
6. Default Margin value cell clicked again (ref e2314). Textbox editor opened (active textbox).
7. One `browser_type` fill `1,0,0,0` into the Default Margin editor, then one Tab key press. Snapshot: Default Margin shows `1,0,0,0`; the editor closed.
8. Region 1 screenshot `t3c-region1-01-all-values-entered.png` (dialog element).
9. Region 0 row clicked in the Regions grid (ref e1938) to re-verify it. Snapshot: region 0 Properties: ID `header`, Length 1, Unit Flex, Orientation Horizontal, Alignment Middle, Pack Start, Minimum/Maximum Length and Default Margin blank.
10. Region 0 screenshot `t3c-region0-01-selected-before-ok.png` (dialog element).
11. Regions grid screenshot before OK `t3c-regions-grid-before-ok.png` (grid element): rows `0 header 1 Flex` and `1 user 1 Flex`.
12. OK clicked once (ref e1524). Snapshot: the FlexLayout dialog is closed; no error text or dialog visible; Form tab active. No OK toast was captured.
13. One Designer Save clicked once (toolbar ref e2572). Toast: "Form [FX_CustomerPortal] and global object(s) were saved." Screenshot `t3c-save-01-after-designer-save.png`: toast visible; toolbar Save icon greyed (not confirmed in the accessibility tree; no snapshot taken after the Save).

## Field values (as displayed; region 1 from the snapshot after step 7; region 0 from the snapshot after step 9)

| Field | Region 0 (index 0) | Region 1 (index 1) |
| --- | --- | --- |
| ID | header | user |
| Length | 1 | 1 |
| Unit | Flex | Flex |
| Orientation | Horizontal | Horizontal |
| Alignment | Middle | Middle |
| Pack | Start | End |
| Default Margin | blank | 1,0,0,0 |

Type stayed HorizontalBox (unchanged). Region count stayed 2. No region was added, deleted or reordered in this continuation. Region Index 0 in the dialog Design group is the FlexLayout's own property, unchanged.

## Action counts

Post-compaction part of this task (exact):
- Tab listings 0; tab selections 0 (the tab was already selected; no tab tool call in this part).
- Untargeted snapshots 4 (after steps 1, 2, 3 and 12). Targeted snapshots 6 (region grid/dialog: 1 on ref e1507, 5 on the dialog ref e1248). Find 0.
- Screenshots 4 (steps 8, 10, 11, 13). The Read tool was used on 4 saved PNGs for visual checks (not browser actions).
- Clicks by reference 9: Alignment option 1; Pack trigger 2 (one produced no list); Pack option 1; Default Margin cell 2 (one produced no editor); Regions row select 1; OK 1; Designer Save 1.
- Coordinate clicks 0. Undo 0. Hovers 0. Drag 0.
- Text entries 1 (Default Margin, one fill). Tab key presses 1. Corrections 0.
- List opens 1 (Pack). List choices 1 (End).
- Dialog exits: OK 1; Cancel 0.
- Designer Saves 1 (response toast observed).
- Region adds 0; region deletes 0; region reorders 0; region field entries 3 (region 1: Alignment 1, Pack 1, Default Margin 1), corrections 0. Region 0 field entries were in the pre-compaction part.
- Prompts or dialogs answered 0. Hook errors 0 in this part. Server-event errors 0. Session expiry 0; re-login 0.
- Navigation, refresh, Chrome or MCP restart 0. Form opens/closes 0/0. Regenerate 0. Check-out or FormSync actions 0.

Pre-compaction part of this task (approximate; not verifiable from the carried summary): screenshots 2 (`t3b-gate-01`, `t3b-region0-01`); clicks at least 2 (Alignment option e1806, Alignment trigger e2010); text entries at least 2 (ID `header`, ID `user`); snapshots not itemized.

Cumulative through this task: carried totals from `evidence/EXP-105/t3-record.md` (tab listings 7; tab selections 5; snapshots 27 succeeded plus 1 hook-blocked; find 1; screenshots 31; reference clicks 24; coordinate clicks 1; dialog opens 2; region adds 1; Designer Saves 1; OK 0; Undo 0; Form opens 1; closes 0; hook errors 3) plus this task's exact post-compaction counts above plus the approximate pre-compaction items. The Designer Saves total is now 2 (T2 1; this task 1). OK total is now 1. Dialog opens total is unchanged at 2 (the T3 dialog opened in the prior attempt and was kept open into this task; this task did not reopen it).

## Files written by this continuation

- `evidence/EXP-105/t3c-record.md` (this file)
- `evidence/EXP-105/t3c-region1-01-all-values-entered.png`
- `evidence/EXP-105/t3c-region0-01-selected-before-ok.png`
- `evidence/EXP-105/t3c-regions-grid-before-ok.png`
- `evidence/EXP-105/t3c-save-01-after-designer-save.png`
- `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (updated)
- Pre-compaction in this task (carried): `evidence/EXP-105/t3b-gate-01-dialog-open-two-regions-uncommitted.png`, `evidence/EXP-105/t3b-region0-01-id-header-alignment-middle.png`

Tool-generated files (Playwright MCP output, not worker writes): `evidence/playwright/` snapshot and click result files and console logs for this task.

## Screenshots (what each proves and does not prove)

- `t3c-region1-01-all-values-entered.png`: dialog with region 1 selected in Properties: Alignment Middle, Pack End, Default Margin 1,0,0,0 visible; Orientation Horizontal partly visible; ID user, Length 1 and Unit Flex scrolled above the visible area (verified in the snapshot, not in this image). Grid shows rows 0 header and 1 user. Proves the region 1 entries as displayed before OK. Does not prove persistence.
- `t3c-region0-01-selected-before-ok.png`: grid row 0 (header, 1 Flex) selected and highlighted; Properties: Orientation Horizontal (partly cut off), Alignment Middle, Pack Start, Default Margin blank. Proves region 0's values as displayed before OK. ID `header` and Length/Unit are verified in the snapshot only.
- `t3c-regions-grid-before-ok.png`: Regions grid: `0 | header | 1 Flex` and `1 | user | 1 Flex`. Proves the grid before OK. Does not show Orientation, Alignment or Pack (those are in the other captures).
- `t3c-save-01-after-designer-save.png`: Save toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save icon greyed; Form tab with FX_CustomerPortal in the Properties panel; Components tree collapsed to Pane (00). Proves the Save response toast. Does not prove that the saved regions survive a reload (T4 not run). The status bar shows the ScopeName (User scope); not reproduced here.

## Limits and unresolved items

- No OK toast was captured; OK's effect is observed only as the dialog closing with no error visible.
- The Save state was read from the screenshot (greyed icon), not from the accessibility tree (no snapshot after the Save).
- The Components tree is collapsed after the dialog closed; the nested FlexLayout under Region00: header was not re-expanded in this task (T4 readback will check it).
- Pre-compaction counts are approximate, as stated above.
- Not verified: persistence after close and reopen (T4); the root regions header, main and footer after the save (T4).

## Next permitted action

T4 (ordinary close of FX_CustomerPortal through the Form tab, reopen via the Form menu recent-forms entry, readback of FlexLayoutHeader and both regions, root regions check, Cancel, Form open and clean). Not started in this task; the next task begins with a fresh snapshot and a read-only check.
