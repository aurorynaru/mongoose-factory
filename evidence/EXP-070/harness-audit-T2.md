# controller-generated audit (not worker prose)

21 actions, 26 reads; prohibited-tool hits=4; errors=0; turns=46; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_CustomerID","FX_Item","FX_OrderNumBase","FX_ItemBase","FX_HelloWorld01","FX_Code","FX_Label","FX_Items","FX_Description","FX_sCustomerID","FX_sOrderNumber"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"},{"order":21,"key":"Tab","result":"ok"},{"order":25,"key":"F2","result":"ok"},{"order":28,"key":"Tab","result":"ok"},{"order":31,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-070/t2-00-preflight-FX_ItemBase-browse-before-New.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-070\t2-00-preflight-FX_ItemBase-browse-before-New.png | ok |
| 9 | mcp__playwright__browser_click | element=New toolbar button in Property Classes Form | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-070/t2-01-after-single-New-blank-pending-row.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-070\t2-01-after-single-New-blank-pending-row.png | ok |
| 13 | mcp__playwright__browser_type | element=Class Name textbox in Property Classes (new row 2) | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Data Type Open button in Property Classes row 2 | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=String option in Data Type list | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_type | element=Length textbox in Property Classes row 2 | ok |
| 21 | mcp__playwright__browser_press_key | key=Tab | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Column Data Type Open button in Property Classes row 2 | ok |
| 24 | mcp__playwright__browser_type | element=Column Data Type combobox in Property Classes row 2 | ok |
| 25 | mcp__playwright__browser_press_key | key=F2 | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=nvarchar option in Column Data Type list | ok |
| 28 | mcp__playwright__browser_press_key | key=Tab | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=Label String ID textbox in Property Classes row 2 | ok |
| 31 | mcp__playwright__browser_press_key | key=Tab | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Domain IDO Name Open button in Property Classes row 2 | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=FX_HelloWorld01 option in Domain IDO Name list | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Domain Property Open button in Property Classes row 2 | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=FX_Code option in Domain Property list | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Domain List Properties Open button in Property Classes row 2 | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=FX_Label option in Domain List Properties list | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-070/t2-02-FX_CustomerID-configured-pre-save-view1.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-070\t2-02-FX_CustomerID-configured-pre-save-view1.png | ok |
| 48 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-070-hello-world-part-4-section-10-orders-property-classes.md | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-070-hello-world-part-4-section-10-orders-property-classes.md | ok |