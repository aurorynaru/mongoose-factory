# controller-generated audit (not worker prose)

10 actions, 18 reads; prohibited-tool hits=0; errors=1; turns=37; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#28 mcp__playwright__browser_snapshot: ### Error\nError: Ref e811 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 4 | mcp__playwright__browser_tabs | action=list | ok |
| 5 | mcp__playwright__browser_tabs | action=select | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Form menu button | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=MockInventory recent Form entry in Form menu | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-01-mockinventory-opened.png | ok |
| 12 | mcp__playwright__browser_click | element=Details panel Expand Panel button | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Primary Collection: MockInventory row in Collections tree | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Properties grid Expand button for Collection properties | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-02-mockinventory-collections-properties.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-02-mockinventory-collections-properties.png | ok |
| 20 | mcp__playwright__browser_click | element=Options group row in collection properties | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-03-mockinventory-collection-options-check.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-03-mockinventory-collection-options-check.png | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e811 not found in the current page snapshot. Try capturing new snapshot. |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-04-mockinventory-blocked-console-rise.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-04-mockinventory-blocked-console-rise.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-01-mockinventory-opened.png | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |