# controller-generated audit (not worker prose)

12 actions, 19 reads; prohibited-tool hits=0; errors=3; turns=34; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#18 mcp__playwright__browser_click: ### Error\nError: Ref e614 not found in the current page snapshot. Try capturing new snapshot.","#24 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1399 not found in the current page snapshot. Try capturing new snapshot.","Terminal success: You've hit your session limit · resets 3:10pm (Asia/Singapore)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Form menu button | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=MockInventory recent Form entry | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Details Expand Panel button | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t5-05-mockinventory-components-tree-expanded.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t5-05-mockinventory-components-tree-expanded.png | ok |
| 18 | mcp__playwright__browser_click | element=Details Event Handlers tab | error: ### Error Error: Ref e614 not found in the current page snapshot. Try capturing new snapshot. |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Details Event Handlers tab | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t5-06-mockinventory-event-handlers.png | ok |
| 23 | mcp__playwright__browser_click | element=Details Variables tab | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1399 not found in the current page snapshot. Try capturing new snapshot. |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Variables grid Expand button | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t5-07-mockinventory-variables-expanded.png | ok |
| 29 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t5-08-mockinventory-variables-global-persistent-scrolled.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t5-08-mockinventory-variables-global-persistent-scrolled.png | ok |