# controller-generated audit (not worker prose)

16 actions, 24 reads; prohibited-tool hits=3; errors=0; turns=48; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMs","FX_UM","FX_UMBase","FX_Description","FX_sDescription","fxum","FX_HelloWorldProject01"]

Key sequence: [{"order":8,"key":"Control+a","result":"ok"},{"order":9,"key":"Backspace","result":"ok"},{"order":24,"key":"Tab","result":"ok"},{"order":28,"key":"F4","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":41,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Open toolbar button inner (f1e26, label Open) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 8 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 9 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 10 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Sql Tables row Caption cell (SqlTables) | ok |
| 13 | mcp__playwright__browser_click | element=Select Form OK button (verified label OK) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=OK button of Sql Tables caution alertdialog (verified label OK) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t4-01-sqltables-opened-via-select-form-after-caution-ok.png | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-01-sqltables-opened-via-select-form-after-caution-ok.png | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=SQL Tables grid criteria row 1 Table Name cell (grid, not Attributes combo) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_type | element=SQL Tables grid criteria combobox (Table Name, criteria row) - positive control | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t4-02-sqltables-positive-control-criterion-committed-before-F4.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-02-sqltables-positive-control-criterion-committed-before-F4.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_press_key | key=F4 | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t4-03-sqltables-positive-control-FX_HelloWorld01-after-F4.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-03-sqltables-positive-control-FX_HelloWorld01-after-F4.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Filter in Place toolbar button (current ref f1e32) | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t4-04-sqltables-fip-reentered-criteria-editor-state.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-04-sqltables-fip-reentered-criteria-editor-state.png | ok |
| 36 | mcp__playwright__browser_type | element=SQL Tables grid criteria combobox (Table Name, criteria row) - target FX_UMs | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t4-05-sqltables-FX_UMs-criterion-committed-before-F4.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-05-sqltables-FX_UMs-criterion-committed-before-F4.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_press_key | key=F4 | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t4-06-sqltables-FX_UMs-after-single-F4-settled.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-06-sqltables-FX_UMs-after-single-F4-settled.png | ok |
| 44 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t4-sqltables-collision-gate-observations.md | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-044\cleanup-inventory.md | ok |