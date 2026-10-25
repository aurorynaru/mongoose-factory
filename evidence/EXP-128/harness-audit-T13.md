# controller-generated audit (not worker prose)

21 actions, 30 reads; prohibited-tool hits=0; errors=3; turns=60; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#15 mcp__playwright__browser_snapshot: ### Error\nError: Ref e523 not found in the current page snapshot. Try capturing new snapshot.","#29 mcp__playwright__browser_click: ### Error\nError: Ref e5 not found in the current page snapshot. Try capturing new snapshot.","#32 mcp__playwright__browser_snapshot: ### Error\nError: Ref e286 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 5 | mcp__playwright__browser_tabs | action=select | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Form menu button | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=MockLoginIDO recent-form menu item | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Details Expand Panel control | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Expand button of Collections tree | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e523 not found in the current page snapshot. Try capturing new snapshot. |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Primary Collection: MockLogin tree row | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Components tab in Details | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=FormCollectionGrid tree row in Components | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Event Handlers tab in Details | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Variables tab in Details | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Edit menu button | error: ### Error Error: Ref e5 not found in the current page snapshot. Try capturing new snapshot. |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e286 not found in the current page snapshot. Try capturing new snapshot. |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t10-01-mockloginido-form-script-editor.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t10-01-mockloginido-form-script-editor.png | ok |
| 39 | mcp__playwright__browser_click | element=Cancel button of Script Editor (MockLoginIDO) | ok |
| 40 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginIDO-form-script.cs.txt | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Form menu button | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=IDOs menu item in Form menu | ok |
| 46 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t10-02-designer-idos-idocollections-form.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t10-02-designer-idos-idocollections-form.png | ok |
| 49 | mcp__playwright__browser_click | element=closable IDOs Form-tab close control | ok |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Collections tab in Details | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t10-03-mockloginido-details-collections.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t10-03-mockloginido-details-collections.png | ok |
| 54 | mcp__playwright__browser_click | element=closable MockLoginIDO Form-tab close control | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=No button of the save-form-definition prompt | ok |
| 58 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 59 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginIDO-metadata.txt | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 61 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 62 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 63 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |