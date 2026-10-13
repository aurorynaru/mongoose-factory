# controller-generated audit (not worker prose)

13 actions, 17 reads; prohibited-tool hits=1; errors=0; turns=34; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_HelloWorld01","fxcus","FX_CusName","FX_CusAddress","FX_Code","FX_CustomerID","FX_Label","FX_Address"]

Key sequence: [{"order":19,"key":"Tab","result":"ok"},{"order":22,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Tables sub-tab of IDOs Form | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Close Panel IDOs Form-tab control | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Form menu | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Form menu item Open | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Select Form row IDOs / IdoCollections | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Select Form OK | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=IDO Name criterion textbox | ok |
| 19 | mcp__playwright__browser_press_key | key=Tab | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t6-01-pre-f4-recovery-idos-fx-orders-criterion.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t6-01-pre-f4-recovery-idos-fx-orders-criterion.png | ok |
| 22 | mcp__playwright__browser_press_key | key=F4 | ok |
| 23 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t6-02-recovered-tables-view-two-entries-join.png | ok |
| 26 | mcp__playwright__browser_click | element=Properties sub-tab of IDOs Form | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t6-03-recovered-properties-inventory-rows-1-8.png | ok |
| 29 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t6-04-recovered-properties-inventory-scrolled-rows-6-13.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t6-02-recovered-tables-view-two-entries-join.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t6-04-recovered-properties-inventory-scrolled-rows-6-13.png | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 35 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |