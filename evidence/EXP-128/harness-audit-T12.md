# controller-generated audit (not worker prose)

10 actions, 15 reads; prohibited-tool hits=0; errors=2; turns=32; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#21 mcp__playwright__browser_click: ### Error\nError: Ref e653 not found in the current page snapshot. Try capturing new snapshot.","#25 mcp__playwright__browser_snapshot: ### Error\nError: Ref e341 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Variable menu item | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t9-01-global-variables-dialog-list.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t9-01-global-variables-dialog-list.png | ok |
| 12 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t9-02-global-variables-dialog-list-scrolled-end.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t9-02-global-variables-dialog-list-scrolled-end.png | ok |
| 17 | mcp__playwright__browser_click | element=vInventoryJson row in Global Objects Variables grid | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Parm_Site row (orange, expected Global - Temporary) in Global Objects Variables grid | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=SiteFormName row in Global Objects Variables grid | error: ### Error Error: Ref e653 not found in the current page snapshot. Try capturing new snapshot. |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=SiteFormName row in Global Objects Variables grid | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e341 not found in the current page snapshot. Try capturing new snapshot. |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Cancel button of Global Objects (Variables) dialog | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-128\global-variables-inventory.txt | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-128\global-variables-inventory.txt | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 35 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |