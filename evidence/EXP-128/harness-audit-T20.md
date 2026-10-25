# controller-generated audit (not worker prose)

9 actions, 18 reads; prohibited-tool hits=0; errors=1; turns=39; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#29 mcp__playwright__browser_snapshot: ### Error\nError: Ref e341 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t19-audit-reconciliation.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 5 | mcp__playwright__browser_tabs | action=list | ok |
| 6 | mcp__playwright__browser_tabs | action=select | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Edit menu button in Designer menu bar | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Web User Control Assets menu item | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t20-01-global-objects-tree-top-level.png | ok |
| 14 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=UserControl.js treeitem under $app/scripts | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t20-02-usercontrol-js-selected-properties-check.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t20-02-usercontrol-js-selected-properties-check.png | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=scripts folder treeitem under $app | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=UserControl.js treeitem under $app/scripts (corrected re-select) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t20-03-usercontrol-js-after-corrected-reselect.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t20-03-usercontrol-js-after-corrected-reselect.png | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e341 not found in the current page snapshot. Try capturing new snapshot. |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Cancel button of Global Objects dialog | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t20-04-designer-final-state-after-cancel.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t20-04-designer-final-state-after-cancel.png | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 38 | Grep | (no key/element/filename argument) | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 42 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | Glob | (no key/element/filename argument) | ok |