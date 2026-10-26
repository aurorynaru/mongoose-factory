# controller-generated audit (not worker prose)

7 actions, 13 reads; prohibited-tool hits=2; errors=0; turns=27; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":6,"key":"Tab","result":"ok"},{"order":10,"key":"F4","result":"ok"},{"order":16,"key":"Tab","result":"ok"},{"order":20,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t2-00-sql-tables-pre-criteria-state.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t2-00-sql-tables-pre-criteria-state.png | ok |
| 5 | mcp__playwright__browser_type | element=Sql Tables grid first-row Table Name criteria combobox (nested in grid, not Attributes panel) | ok |
| 6 | mcp__playwright__browser_press_key | key=Tab | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t2-01-sql-tables-criterion-fx-inventoryitems-pre-f4.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t2-01-sql-tables-criterion-fx-inventoryitems-pre-f4.png | ok |
| 10 | mcp__playwright__browser_press_key | key=F4 | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t2-02-sql-tables-fx-inventoryitems-post-f4.png | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button in Sql Tables panel | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_type | element=Sql Tables grid criteria-row Table Name combobox (nested in grid, not Attributes panel), currently holding prior FX_InventoryItems value | ok |
| 16 | mcp__playwright__browser_press_key | key=Tab | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t2-03-sql-tables-criterion-fx-loginusers-pre-f4.png | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t2-03-sql-tables-criterion-fx-loginusers-pre-f4.png | ok |
| 20 | mcp__playwright__browser_press_key | key=F4 | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t2-04-sql-tables-fx-loginusers-post-f4.png | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t2-04-sql-tables-fx-loginusers-post-f4.png | ok |
| 24 | mcp__playwright__browser_console_messages | filename=evidence/EXP-137/t2-console-errors-after-sql-tables-check.txt | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\T1-preflight-gate-summary.md | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t2-console-errors-after-sql-tables-check.txt | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t2-02-sql-tables-fx-inventoryitems-post-f4.png | ok |
| 30 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-137\T2-sql-tables-collision-check.md | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |