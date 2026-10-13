# controller-generated audit (not worker prose)

13 actions, 19 reads; prohibited-tool hits=1; errors=0; turns=38; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_HelloWorld01","fxcus","FX_CusName","FX_CusAddress","FX_Code","FX_CustomerID","FX_Label","FX_Address"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"},{"order":24,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=FX_Orders runtime Form tab heading | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Close Panel FX_Orders Form-tab control | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Form menu item Open | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Select Form row FX_Orders / FX_Orders | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Select Form OK | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t7-01-runtime-pre-f4-filter-in-place-blank-criteria.png | ok |
| 24 | mcp__playwright__browser_press_key | key=F4 | ok |
| 25 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t7-02-runtime-post-f4-two-records-save-disabled.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t7-02-runtime-post-f4-two-records-save-disabled.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t7-01-runtime-pre-f4-filter-in-place-blank-criteria.png | ok |
| 30 | mcp__playwright__browser_click | element=Runtime grid row header 2 | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-078/t7-03-runtime-record-2-FX002-eggs-count-1.png | ok |
| 33 | mcp__playwright__browser_click | element=Runtime grid row header 1 | ok |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-078\t7-03-runtime-record-2-FX002-eggs-count-1.png | ok |
| 36 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 37 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |