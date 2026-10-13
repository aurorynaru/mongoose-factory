# controller-generated audit (not worker prose)

16 actions, 18 reads; prohibited-tool hits=2; errors=2; turns=42; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_HelloWorld01","fxcus","FX_CusName","FX_CusAddress","FX_Code","FX_CustomerID","FX_Label","FX_Address"]

Key sequence: [{"order":24,"key":"Tab","result":"ok"},{"order":31,"key":"Tab","result":"ok"},{"order":34,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#4 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#38 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e1461 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 5 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt5.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md | ok |
| 11 | mcp__playwright__browser_tabs | action=list | ok |
| 12 | mcp__playwright__browser_tabs | action=select | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=IDOs Form tab heading | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Close Panel IDOs (Form tab control) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Form menu | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Form menu item Open | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Select Form row IDOs / IdoCollections | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Select Form OK | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=IDO Name criterion textbox | ok |
| 31 | mcp__playwright__browser_press_key | key=Tab | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t1-01-pre-f4-idos-fx-orders-criterion.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t1-01-pre-f4-idos-fx-orders-criterion.png | ok |
| 34 | mcp__playwright__browser_press_key | key=F4 | ok |
| 35 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Properties sub-tab of IDOs Form | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e1461 not found in the current page snapshot. Try capturing new snapshot. |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t1-02-baseline-properties-inventory.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t1-02-baseline-properties-inventory.png | ok |
| 42 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t1-03-baseline-properties-inventory-scrolled-end.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t1-03-baseline-properties-inventory-scrolled-end.png | ok |
| 46 | mcp__playwright__browser_click | element=Tables sub-tab of IDOs Form | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t1-04-baseline-tables-view.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t1-04-baseline-tables-view.png | ok |
| 49 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 51 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |