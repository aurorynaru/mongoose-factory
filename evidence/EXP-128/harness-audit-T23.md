# controller-generated audit (not worker prose)

13 actions, 19 reads; prohibited-tool hits=0; errors=4; turns=40; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: [{"order":31,"key":"Control+a","result":"ok"},{"order":32,"key":"Backspace","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: ["#22 mcp__playwright__browser_snapshot: Error: result (75,308 characters across 1,220 lines) exceeds maximum allowed tokens. Output has been saved to C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-factory\\af626cf8-9f1a-43d5-bf7f-37011369ca51\\tool-results\\mcp-playwright-browser_snapshot-1792917825028.txt.\nFormat: Plain text\n- For targeted searches (find a line, locate a string): use grep on the file directly.\n- For analysis or summarization that requires reading the full content: read C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-fact… (1213 chars)","#23 Grep: Permission to read C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-factory\\af626cf8-9f1a-43d5-bf7f-37011369ca51\\tool-results\\mcp-playwright-browser_snapshot-1792917825028.txt has been denied.","#28 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e214 not found in the current page snapshot. Try capturing new snapshot.","#34 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e24 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginIDO-metadata.txt | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginPortal-form-script.cs.txt | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_tabs | action=list | ok |
| 6 | mcp__playwright__browser_tabs | action=select | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu button | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=IDOs recent Form menu entry | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t23-01-idocollections-open-before-filter.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t23-01-idocollections-open-before-filter.png | ok |
| 14 | mcp__playwright__browser_click | element=close control of IDOs Form tab | ok |
| 15 | mcp__playwright__browser_tabs | action=select | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Form navigation button in Mongoose runtime | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=IDOs recent entry in runtime Form menu | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Filter in Place button in runtime IDOs Form | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: Error: result (75,308 characters across 1,220 lines) exceeds maximum allowed tokens. Output has been saved to C:\Users\juara\.claude\projects\C--AI-mongoose-factory\af626cf8-9f1a-43d5-bf7f-37011369ca51\tool-results\mcp-playwright-browser_snapshot-1792917825028.txt. Format: Plain text - For targeted searches (find a line, locate a string): use grep on the file directly. - For analysis or summarization that requires reading the full content: read C:\Users\juara\.claude\projects\C--AI-mongoose-fact… (1213 chars) |
| 23 | Grep | (no key/element/filename argument) | error: Permission to read C:\Users\juara\.claude\projects\C--AI-mongoose-factory\af626cf8-9f1a-43d5-bf7f-37011369ca51\tool-results\mcp-playwright-browser_snapshot-1792917825028.txt has been denied. |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t23-02-runtime-idos-after-filter-in-place-click.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t23-02-runtime-idos-after-filter-in-place-click.png | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e214 not found in the current page snapshot. Try capturing new snapshot. |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=IDO Name criteria textbox in runtime IDOs Form (Filter in Place active) | ok |
| 31 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 32 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e24 not found in the current page snapshot. Try capturing new snapshot. |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Close Panel IDOs tab control in runtime | ok |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_tabs | action=select | ok |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 42 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 43 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |