# controller-generated audit (not worker prose)

32 actions, 38 reads; prohibited-tool hits=4; errors=0; turns=78; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","fxords","FX_HelloWorldProject01","FX_OrderNumber","FX_OrderNumBase","FX_CustomerID","FX_Item","FX_Count","FX_sCount","FX_Items"]

Key sequence: [{"order":18,"key":"Tab","result":"ok"},{"order":27,"key":"Tab","result":"ok"},{"order":30,"key":"F4","result":"ok"},{"order":46,"key":"Tab","result":"ok"},{"order":57,"key":"Tab","result":"ok"},{"order":60,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Close Panel Sql Columns (child view close, Save disabled, no dialog) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=IDO Properties Form tab (select to verify clean state before child close) | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Close Panel IDO Properties (child view close, clean) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Close Panel IDOs (parent Form close #1 of the recovery pair) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Form menu (Web Client menu bar) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Form menu > Open menu item | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_type | element=Select Form dialog Filter textbox | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Select Form row IDOs / IdoCollections | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Select Form OK button (IDOs / IdoCollections) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-58-t10-idos-reopened-fresh-filter-in-place-before-criterion.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-58-t10-idos-reopened-fresh-filter-in-place-before-criterion.png | ok |
| 26 | mcp__playwright__browser_type | element=IDO Name criteria textbox (Filter in Place, reopened IDOs) | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-59-t10-idos-FX_Orders-criterion-before-F4-recovery.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-59-t10-idos-FX_Orders-criterion-before-F4-recovery.png | ok |
| 30 | mcp__playwright__browser_press_key | key=F4 | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-60-t10-idos-FX_Orders-settled-after-F4-recovery.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-60-t10-idos-FX_Orders-settled-after-F4-recovery.png | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=IDOs in-Form Properties sub-tab (read-only navigation) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Sql Tables Form tab (select to verify clean before close) | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Close Panel Sql Tables (parent Form close, recovery pair) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Form menu (Web Client menu bar) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Form menu > Open menu item | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_type | element=Select Form dialog Filter textbox | ok |
| 46 | mcp__playwright__browser_press_key | key=Tab | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Select Form row Sql Tables / SqlTables | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Select Form OK button (Sql Tables / SqlTables) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Sql Tables caution alert OK (once, informational) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Table Name criteria combobox (Sql Tables, Filter in Place, recovery) | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_type | element=Table Name criteria combobox (active) | ok |
| 57 | mcp__playwright__browser_press_key | key=Tab | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-61-t10-sqltables-FX_Orders-criterion-before-F4-recovery.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-61-t10-sqltables-FX_Orders-criterion-before-F4-recovery.png | ok |
| 60 | mcp__playwright__browser_press_key | key=F4 | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-62-t10-sqltables-FX_Orders-settled-after-F4-recovery.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-62-t10-sqltables-FX_Orders-settled-after-F4-recovery.png | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=Columns... button (Sql Tables, dbo.FX_Orders, recovery comparison) | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=SQL Columns row 3 FX_Item (view-only selection, recovery) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-63-t10-sqlcolumns-recovery-row3-FX_Item-detail.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-63-t10-sqlcolumns-recovery-row3-FX_Item-detail.png | ok |
| 72 | mcp__playwright__browser_click | element=SQL Columns row 4 FX_Count (view-only selection, recovery) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-64-t10-sqlcolumns-recovery-row4-FX_Count-detail.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-64-t10-sqlcolumns-recovery-row4-FX_Count-detail.png | ok |
| 75 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=Close Panel Sql Columns (child view close, Save disabled, no dialog) | ok |
| 77 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 78 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 79 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |