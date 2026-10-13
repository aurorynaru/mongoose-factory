# controller-generated audit (not worker prose)

7 actions, 5 reads; prohibited-tool hits=1; errors=0; turns=22; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX001","FX002","dumbbell","eggs","FX_OrderNumber","FX_CustomerID","FX_Item","FX_Count"]

Key sequence: [{"order":15,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Customer ID combobox Open toggle | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=FX001 option in Customer ID list | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Item combobox Open toggle | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=dumbbell option in Item list | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_type | element=Count textbox | ok |
| 15 | mcp__playwright__browser_press_key | key=Tab | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-073\row1-fx001-dumbbell-count2-settled.png | ok |
| 19 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-073\T2-row1-accessibility-readbacks.md | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md | ok |
| 21 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md | ok |
| 22 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md | ok |