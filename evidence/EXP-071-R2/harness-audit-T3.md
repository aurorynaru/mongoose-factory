# controller-generated audit (not worker prose)

8 actions, 12 reads; prohibited-tool hits=0; errors=0; turns=21; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","fxords","FX_HelloWorldProject01","FX_OrderNumber","FX_OrderNumBase","FX_CustomerID","FX_Item","FX_Count","FX_sCount","FX_Items"]

Key sequence: [{"order":5,"key":"Tab","result":"ok"},{"order":8,"key":"Tab","result":"ok"},{"order":18,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_press_key | key=Tab | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-20-t3-row1-state-before-class-selection.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-20-t3-row1-state-before-class-selection.png | ok |
| 8 | mcp__playwright__browser_press_key | key=Tab | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Row 1 Property Class cell (blank) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Row 1 Property Class Open button | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Property Class list item FX_OrderNumBase | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-21-t3-row1-after-explicit-FX_OrderNumBase-selection.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-21-t3-row1-after-explicit-FX_OrderNumBase-selection.png | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Row 1 Primary Key checkbox (FX_OrderNumber) | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-22-t3-row1-FX_OrderNumber-configured-flags.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-22-t3-row1-FX_OrderNumber-configured-flags.png | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 26 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |