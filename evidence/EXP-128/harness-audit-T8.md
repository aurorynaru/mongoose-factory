# controller-generated audit (not worker prose)

16 actions, 25 reads; prohibited-tool hits=0; errors=2; turns=51; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#40 mcp__playwright__browser_click: ### Error\nError: Ref e1879 not found in the current page snapshot. Try capturing new snapshot.","#49 mcp__playwright__browser_click: ### Error\nError: Ref e1751 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t5-06-mockinventory-event-handlers.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t5-07-mockinventory-variables-expanded.png | ok |
| 8 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Designer Edit menu button | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t5-09-mockinventory-form-script-editor-rendered.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t5-09-mockinventory-form-script-editor-rendered.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockInventory-form-script.cs.txt | ok |
| 18 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockInventory-form-script.cs.txt | ok |
| 19 | mcp__playwright__browser_click | element=Script Editor Cancel button | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=MockInventory Form-tab close control | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Save prompt No button | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Form menu button | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=MockInventoryDashboard recent Form entry | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Details Expand Panel button | ok |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Primary Collection row (dashboard) | ok |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Details Components tab (dashboard) | error: ### Error Error: Ref e1879 not found in the current page snapshot. Try capturing new snapshot. |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Details Components tab (dashboard) | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Components grid Expand button (dashboard) | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-01-mockinventorydashboard-components-tree.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-01-mockinventorydashboard-components-tree.png | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 49 | mcp__playwright__browser_click | element=MockInventoryDashboard Form-tab close control | error: ### Error Error: Ref e1751 not found in the current page snapshot. Try capturing new snapshot. |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=MockInventoryDashboard Form-tab close control | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |