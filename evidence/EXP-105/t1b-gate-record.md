# EXP-105 T1 gate (second attempt, read-only): FX_CustomerPortal open and clean

Run: R-20261016-114004-XV8X, task message f15e7859-2d36-4bf5-877f-e0a3022c23f1 (header labelled T2; bounded instruction limited this task to T1 gate inspection, so only T1 was performed). Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457.

Operator context (not independent evidence): the operator reported that the unresponsive Portal tab was restored and that both tabs answered a read-only CDP check, and that the Designer had been reloaded and FX_CustomerPortal closed. The worker verified the state itself below.

## Sources reread before the first browser call

AGENTS.md; `docs/mongoose/transcripts/hello-world-pt7.md` lines 145-163 (Section 4, 05:16-07:31 heading); `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; Outcome (operator) sections of EXP-103-R3 (line 392) and EXP-065 (line 731) only; the EXP-105 record and the prior T1 failure file.

## Browser sequence (this task)

1. `browser_tabs` list: succeeded. Tab 0 = Mongoose Web Client (portal URL). Tab 1 = Infor Mongoose Application Development Framework, Designer (`mode=designer`, configgroup G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM).
2. `browser_tabs` select index 1: succeeded (Designer tab current).
3. `browser_snapshot` (untargeted, fresh): Designer with an empty canvas, empty Properties, Save and Undo disabled, status bar ScopeType User. No Form tab open. Screenshot `t1b-gate-01-designer-fresh-screenshot.png`.
4. Click the Form menu button (ref e3, from snapshot 3). The menu opened and its snapshot listed recent forms, including FX_CustomerPortal (ref e296), FX_FlexProbe01, FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items.
5. Click the FX_CustomerPortal recent-form entry (ref e296, from the menu snapshot). This is the one allowed open. Select Form OK was not used.
6. `browser_snapshot` (untargeted, fresh): FX_CustomerPortal tab selected (heading FX_CustomerPortal); Properties Design > Name = FX_CustomerPortal, Form Type = Flex, Device Type = Default; Save and Undo disabled; Regenerate Form disabled; status bar ScopeType User. Screenshot `t1b-gate-02-form-opened-canvas.png`.
7. Click the Details "Expand Panel" button (ref e336). Details panel opened on the Collections tab.
8. Click the Details "Components" tab (ref e452). Tree showed only a collapsed "Pane (00)" row. Screenshot `t1b-gate-03-details-components-collapsed.png`.
9. Click the Components toolbar "Expand" button (ref e530). This expands the tree without selecting a component. The tree is now expanded. Screenshot `t1b-gate-04-components-tree-expanded.png`.

No component was selected. The coordinate-based expander arrow beside "Pane (00)" was not used; the named Expand button was used instead.

## Gate findings (observed, same session)

- Session: usable. No "Session Expired" modal, sign-in page, or server-event error was seen. The Web Client tab (tab 0) was not interacted with.
- Scope: status bar reads "ScopeType: User" with the signed-in user as ScopeName (the name is redacted in the snapshot as SECRET_MONGOOSE_USERNAME; not transcribed here).
- Form identity: Designer tab heading and Properties Name both read FX_CustomerPortal; Form Type Flex.
- Clean: Save disabled; Undo disabled (both in the snapshot and in the toolbar icon state of `t1b-gate-02`).
- Dialogs: none open. The Form menu was closed by the recent-form selection.
- Components tree (`t1b-gate-04`): Pane (00) > flexlayoutPane_FX_CustomerPortal (Type FlexLayout, Pane 0, Tab 0) > Region00: header, Region01: main, Region02: footer. The three region rows have no child components.
- Canvas header location: the canvas shows the form's root FlexLayout with two dotted dividers in the 02 screenshot (one at about y=172 and one at about y=789 in the viewport). The header row is the strip above the first divider (about y=100 to y=172 in that viewport). The footer row lies below the second divider.
- Limitation: after the Details panel was expanded (step 7), the canvas viewport was reduced; in `t1b-gate-03` and `t1b-gate-04` only the first divider and the header row are visible, and the footer row is below the viewport. The footer's presence is confirmed by the tree (Region02: footer), not visually in this capture. The Details panel was left expanded (UI layout only; not a Form change).

## Screenshots (what each proves and does not prove)

- `t1b-gate-01-designer-fresh-screenshot.png`: Designer with no Form open (empty canvas, empty Properties), Save/Undo disabled, ScopeType User. Proves the pre-open state. Does not prove the Form list contents beyond the menu snapshot.
- `t1b-gate-02-form-opened-canvas.png`: FX_CustomerPortal open as the active tab; Properties Name FX_CustomerPortal, Form Type Flex; canvas with the header row above the first dotted divider and a second divider lower. Proves Form identity, scope and the clean toolbar. Does not prove the Components tree (Details collapsed in this capture).
- `t1b-gate-03-details-components-collapsed.png`: Details panel on the Components tab with the Pane (00) row collapsed. Proves the panel state before expansion. Does not show child rows.
- `t1b-gate-04-components-tree-expanded.png`: Components tree expanded: Pane (00), flexlayoutPane_FX_CustomerPortal, Region00: header, Region01: main, Region02: footer; Save and Undo icons greyed. Proves the root-region names and that no component is selected in this view. Does not show the footer on the canvas.

## Acceptance check status

- AC-1 (gate): **met for this session** (sources reread; session usable; User scope; FX_CustomerPortal open and clean with Save disabled; root regions header, main, footer in the tree; header region located above the first divider). Limitation: the footer is not visible on the canvas in this capture.

## Action counts (this task only)

- Tab listings: 1 (success). Tab selections: 1 (success, index 1).
- Browser snapshots (untargeted): 2 (both fresh, used for refs).
- Screenshots: 4 (no mutation).
- Clicks: 5 total = Form menu button 1; recent-form entry FX_CustomerPortal 1; Details Expand Panel 1; Details Components tab 1; Components Expand button 1.
- Form opens: 1 (through the Form menu recent-forms entry). Form closes: 0. Form reopen count: 0 (the one allowed reopen was the open above, since the Form was not open at gate start).
- Coordinate clicks: 0. Undo clicks: 0. Toolbox selections: 0. Canvas placement clicks: 0. Component selections: 0. Name/Theme Class entries: 0. List opens: 0. Dialog opens: 0. Region adds/edits: 0. OK clicks: 0. Designer Saves: 0. Regenerate: 0. Prompts or dialogs: 0. Server-event errors: 0. Session expiry/re-login: 0 (not observed). Navigation, refresh, Chrome/MCP restart: 0.
- Console: the tool reported "2 errors, 0 warnings" on each page header; the console was not inspected (prohibited).

## Next permitted action

T2 (place the FlexLayout from the Toolbox into Region00: header, rename, Theme Class) is not performed in this task. The next step is a new T2 task that begins with a fresh snapshot and this gate.
