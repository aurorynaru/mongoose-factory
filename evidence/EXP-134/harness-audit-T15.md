# controller-generated audit (not worker prose)

34 actions, 57 reads; prohibited-tool hits=4; errors=0; turns=107; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":38,"key":"Tab","result":"ok"},{"order":47,"key":"Tab","result":"ok"},{"order":50,"key":"F4","result":"ok"},{"order":65,"key":"Tab","result":"ok"},{"order":79,"key":"Tab","result":"ok"},{"order":82,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T12-checkpoint.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T13-checkpoint.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T14-checkpoint.md | ok |
| 6 | mcp__playwright__browser_tabs | action=list | ok |
| 7 | mcp__playwright__browser_tabs | action=select | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Tables sub-tab in IDOs panel | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-01-idos-pre-close-tables-subtab-baseline.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-01-idos-pre-close-tables-subtab-baseline.png | ok |
| 13 | mcp__playwright__browser_click | element=Sql Tables panel tab | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-02-sqltables-pre-close-baseline.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-02-sqltables-pre-close-baseline.png | ok |
| 17 | mcp__playwright__browser_click | element=Sql Columns panel tab | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-03-sqlcolumns-pre-close-state.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-03-sqlcolumns-pre-close-state.png | ok |
| 21 | mcp__playwright__browser_click | element=Close Panel Sql Columns button | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Close Panel IDOs | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Close Panel Sql Tables | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-04-after-both-panel-closes-ido-projects-only.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=toolbar Open button | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-05-select-form-dialog-for-idos-reopen.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-05-select-form-dialog-for-idos-reopen.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_type | element=Select Form filter textbox | ok |
| 38 | mcp__playwright__browser_press_key | key=Tab | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Select Form row IDOs IdoCollections | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-06-idos-reopened-fresh-before-criterion.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-06-idos-reopened-fresh-before-criterion.png | ok |
| 46 | mcp__playwright__browser_type | element=IDO Name criterion textbox | ok |
| 47 | mcp__playwright__browser_press_key | key=Tab | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-07-idos-criterion-before-F4.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-07-idos-criterion-before-F4.png | ok |
| 50 | mcp__playwright__browser_press_key | key=F4 | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-08-idos-reopened-settled-after-F4.png | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-08-idos-reopened-settled-after-F4.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Properties sub-tab in IDOs | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-09-idos-reopened-properties-readback.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-09-idos-reopened-properties-readback.png | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=toolbar Open button | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_type | element=Select Form filter textbox | ok |
| 65 | mcp__playwright__browser_press_key | key=Tab | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Select Form row Sql Tables SqlTables | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 70 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=Sql Tables caution alert OK | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-10-sqltables-reopened-fresh-before-criterion.png | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-10-sqltables-reopened-fresh-before-criterion.png | ok |
| 75 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=Table Name criteria cell in grid blank row | ok |
| 77 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_type | element=Table Name grid criteria combobox | ok |
| 79 | mcp__playwright__browser_press_key | key=Tab | ok |
| 80 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-11-sqltables-criterion-before-F4.png | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-11-sqltables-criterion-before-F4.png | ok |
| 82 | mcp__playwright__browser_press_key | key=F4 | ok |
| 83 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-12-sqltables-reopened-settled-after-F4.png | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-12-sqltables-reopened-settled-after-F4.png | ok |
| 86 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_click | element=Columns... button on Sql Tables | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-13-sqlcolumns-reopened-readback.png | ok |
| 89 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 90 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-13-sqlcolumns-reopened-readback.png | ok |
| 91 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 92 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 94 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 96 | mcp__playwright__browser_hover | element=FX_QuantityOnHand Column Name cell (hover only) | ok |
| 97 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 98 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-14-sqlcolumns-reopened-scrolled-right-decimal.png | ok |
| 99 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-14-sqlcolumns-reopened-scrolled-right-decimal.png | ok |
| 100 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 101 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 102 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-15-sqlcolumns-reopened-wheel-right-decimal-check.png | ok |
| 103 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-15-sqlcolumns-reopened-wheel-right-decimal-check.png | ok |
| 104 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 105 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-16-sqlcolumns-reopened-decimal-position-column.png | ok |
| 106 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-16-sqlcolumns-reopened-decimal-position-column.png | ok |
| 107 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 108 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-134/t15-17-sqlcolumns-reopened-decimal-position-column-2.png | ok |
| 109 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-134\t15-17-sqlcolumns-reopened-decimal-position-column-2.png | ok |
| 110 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 111 | mcp__playwright__browser_click | element=Close Panel Sql Columns button | ok |
| 112 | Grep | (no key/element/filename argument) | ok |
| 113 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 114 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T15-checkpoint.md | ok |
| 115 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T15-checkpoint.md | ok |
| 116 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T15-checkpoint.md | ok |
| 117 | Grep | (no key/element/filename argument) | ok |
| 118 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md | ok |
| 119 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md | ok |
| 120 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md | ok |
| 121 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md | ok |
| 122 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-134\T15-checkpoint.md | ok |