# EXP-105 T2 continuation (Name entry retry): BLOCKED again by the PreToolUse hook; no change made

Run: R-20261016-114004-XV8X, task message 666e2f49-84d9-4c7b-8d5d-e0336d3663e7 (header labelled T4; the bounded instruction limited this task to continuing T2 from the existing unsaved placement, so only T2 was attempted). Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457.

Operator context (not independent evidence): the operator reported removing `header` from the exact-value guard, because it falsely matched the substring "Header" in FlexLayoutHeader, and accepted the existing placement.

## Sources reread before the first browser call

AGENTS.md; hello-world-pt7.md lines 145-163 and transcript 05:16-06:31 (Section 4 heading 05:16-07:31); recipes/components/add-component-from-toolbox.md; recipes/session/session-expiry-and-stale-designer.md; Outcome (operator) sections of EXP-103-R3 (line 392) and EXP-065 (line 731); the EXP-105 record; evidence/EXP-105/t2-record.md.

## Sequence (this task)

1. `browser_tabs` list: succeeded (tab 0 Web Client; tab 1 Designer, MGForm=FX_CustomerPortal).
2. `browser_tabs` select index 1: succeeded.
3. `browser_snapshot` (untargeted, fresh) = the one fresh inspection of this task. Observed:
   - FX_CustomerPortal tab selected; ScopeType User (status bar).
   - Toolbar: Save enabled (no disabled attribute), Undo enabled.
   - Components tree (flat rows; parent confirmed visually in step 5): Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header; flexLayout1_USER (FlexLayout, Pane 0, Container flexlayoutPane_FX_CustomerPortal); Region00: UNKNOWN0; Region01: main; Region02: footer.
   - Properties: component combo `flexLayout1_USER (FlexLayout)`; Design > Name value shows `flexLayout1_USER` (the Name gridcell is selected); an **active textbox (ref e698) with the value `flexLayout1_USER`** is open.
4. Screenshot `t2b-gate-01-unsaved-placement-name-editor-open.png`: Name editor open with `flexLayout1_USER` highlighted; tree shows flexLayout1_USER indented under Region00: header and Region00: UNKNOWN0 beneath it; Save and Undo icons active; ScopeType User.
5. `browser_type` into e698 with `FlexLayoutHeader` (one fill, no submit, as briefed). **Blocked by the PreToolUse hook again:** `PreToolUse:mcp__playwright__browser_type hook error: Exact value required: header. Preserve its spelling and case.` No value was entered. The call was not retried, and no keystroke, Tab, or substitute text was used to route around the guard.
6. `browser_find` for `flexLayout1_USER` (read-only; the one corrected visible inspection): the editor textbox (ref e698) still reads `flexLayout1_USER`; the tree and Properties are unchanged. Not a snapshot; used only to confirm the editor state, not for refs.
7. Stopped. No Save, no Undo, no Cancel/Escape, no Theme Class, no default-attribute inspection, no Regions work, no readback.

## Current state (checkpoint)

- Designer: FX_CustomerPortal open, ScopeType User, dirty (unsaved placement). Save and Undo enabled.
- Component: flexLayout1_USER (FlexLayout), a child of Region00: header, with an auto-created child Region00: UNKNOWN0. Root regions header, main and footer unchanged.
- Name editor: open, text `flexLayout1_USER` unchanged. FlexLayoutHeader not entered.
- Dialogs/menus: the Name editor is an in-place editor, not a modal dialog. No Mongoose modal open.
- Unsaved change is intentionally left in place: discarding it (Undo/Cancel) or saving it (Save) under a blocked guard is outside this task's authority.

## Blocker and options for the operator

The hook still treats the exact value `header` as required for the typed text, even though the operator removed it from the guard. The guard appears to be evaluated against the typed value or the field context in a way the worker cannot see. The worker will not retry, bypass, or substitute.

Options for the operator (the worker will not choose):
(a) Fix the hook configuration, then start a new T2 task: fresh snapshot; the Name editor is still open (inspect it first, do not replay the blocked call).
(b) Authorize a resolution for the unsaved placement: for example, Escape the editor and Save the placement as `flexLayout1_USER` (then rename later), or one Undo to remove the placement and restart T2.
(c) Set the Name by a different permitted route the operator specifies.

## Action counts (this task only)

- Tab listings: 1 (succeeded). Tab selections: 1 (succeeded, index 1).
- Browser snapshots: 1 (untargeted, succeeded).
- Browser find (read-only, not used for refs): 1.
- Screenshots: 1 (`t2b-gate-01-unsaved-placement-name-editor-open.png`).
- Reference clicks: 0. Coordinate clicks: 0. Toolbox selections: 0. Canvas placement clicks: 0. Undo: 0. Drag: 0.
- Name entries: 0 successful; 1 attempt blocked by the hook (`browser_type`). Name corrections: 0.
- Theme Class entries: 0. List opens: 0. Dialog opens: 0. Cancel: 0. OK: 0.
- Designer Saves: 0. Regenerate: 0. Region adds/edits: 0. Form opens/closes: 0 / 0.
- Prompts or dialogs answered: 0. Hook errors: 1 (this task). Server-event errors: 0. Session expiry or re-login: 0 / 0.
- Navigation, refresh, Chrome or MCP restart: 0.

## Cumulative EXP-105 totals (all worker tasks so far, including the earlier blocked attempt)

- Tab listings: 5 (2 failed in T1 attempt 1; 3 succeeded). Tab selections: 3.
- Browser snapshots: 8 (1 failed in T1 attempt 1; 7 succeeded, all untargeted except one targeted in T2 attempt 3). Find (read-only): 1.
- Screenshots: 9.
- Reference clicks: 7 (T1 attempt 2: 5; T2 attempt 3: 2). Coordinate clicks: 1 (canvas placement). Total clicks: 8.
- Toolbox selections: 1. Canvas placement clicks: 1. Components placed: 1 (flexLayout1_USER, under Region00: header).
- Form opens: 1. Form closes: 0.
- Undo: 0. Saves: 0. Name entries: 0 successful; 2 blocked by the hook (T2 attempt 3 and this task), both on the same browser_type call with the same value. Corrections: 0. Theme Class entries: 0.
- Dialog opens: 0. Cancel: 0. OK: 0. Region adds/edits: 0. List opens: 0. Regenerate: 0.
- Hook errors: 2. Server-event errors: 0. Re-logins: 0. Navigation/refresh/restart/drag: 0.
- Prompts or dialogs answered: 0.

## Screenshots (what each proves and does not prove)

- `t2b-gate-01-unsaved-placement-name-editor-open.png`: Name editor open with flexLayout1_USER; tree shows flexLayout1_USER under Region00: header with Region00: UNKNOWN0 beneath; Save and Undo active; ScopeType User. Proves the checkpoint state. Does not prove any name entry or persistence.

## Files written (this task)

- `evidence/EXP-105/t2b-record.md` (created)
- `evidence/EXP-105/t2b-gate-01-unsaved-placement-name-editor-open.png` (created)
- `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (updated)

Tool-generated (Playwright MCP output, not worker file writes): `evidence/playwright/` page snapshot files written by the tool for this task's snapshot and find results, and console log `console-2026-10-16T04-17-19-316Z.log`, `console-2026-10-16T04-17-19-317Z.log`.
