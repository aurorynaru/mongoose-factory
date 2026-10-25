# controller-generated audit (not worker prose)

10 actions, 10 reads; prohibited-tool hits=1; errors=0; turns=32; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: [{"order":24,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginIDO-metadata.txt | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginPortal-form-script.cs.txt | ok |
| 7 | mcp__playwright__browser_tabs | action=list | ok |
| 8 | mcp__playwright__browser_tabs | action=select | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_tabs | action=select | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Form menu in Web Client Mongoose frame | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=IDOs recent entry in Form menu | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t27-01-idos-initial-state.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t27-01-idos-initial-state.png | ok |
| 20 | mcp__playwright__browser_click | element=IDO Name textbox (empty, gate passed) | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_type | element=IDO Name textbox (empty, gate passed) | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_press_key | key=F4 | ok |
| 25 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t27-02-mockloginido-query-result.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t27-02-mockloginido-query-result.png | ok |
| 29 | mcp__playwright__browser_click | element=Close Panel IDOs tab close control | ok |
| 30 | mcp__playwright__browser_tabs | action=select | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 35 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |