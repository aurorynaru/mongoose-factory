# controller-generated audit (not worker prose)

32 actions, 44 reads; prohibited-tool hits=5; errors=1; turns=68; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UMs","FX_UM","FX_UMBase","FX_Description","FX_sDescription","fxum","FX_HelloWorldProject01"]

Key sequence: [{"order":23,"key":"Control+a","result":"ok"},{"order":24,"key":"Backspace","result":"ok"},{"order":33,"key":"Tab","result":"ok"},{"order":40,"key":"Tab","result":"ok"},{"order":43,"key":"F4","result":"ok"},{"order":55,"key":"Control+a","result":"ok"},{"order":56,"key":"Backspace","result":"ok"},{"order":70,"key":"Tab","result":"ok"},{"order":74,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":5}

Errors: ["#32 mcp__playwright__browser_type: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e2007')\u001b[22m\n\u001b[2m    - locator resolved to <input size=\"1\" type=\"text\" tabindex=\"-1\" role=\"textbox\" maxlength=\"80\" data-ref=\"inputEl\" autocomplete=\"off\" readonly=\"readonly\" aria-readonly=\"true\" aria-required=\"false\" id=\"mgedit-2452-inputEl\" componentid=\"mgedit-2452\" name=\"mgedit-2452-inputEl\" aria-labelledby=\"mgedit-2452-labelEl\" data-mgcompnamevalue=\"CollectionNameEdit\" cl… (1168 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_click | element=IDOs tab heading (tab navigation only) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-01-idos-clean-state-before-close.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-01-idos-clean-state-before-close.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Close Panel IDOs (verified label) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-02-after-IDOs-form-tab-closed-no-prompt.png | ok |
| 10 | mcp__playwright__browser_click | element=Sql Tables tab heading (tab navigation only) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-03-sqltables-clean-state-before-close.png | ok |
| 13 | mcp__playwright__browser_click | element=Close Panel Sql Tables (verified label) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-04-after-SqlTables-form-tab-closed-no-prompt.png | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_tabs | action=list | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Open toolbar button inner (f1e26, label Open) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 23 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 24 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 25 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=IDOs row Caption cell (IdoCollections) | ok |
| 28 | mcp__playwright__browser_click | element=Select Form OK button (verified label OK) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_type | element=IDO Name criteria textbox (Filter in Place) - exact FX_UMs | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e2007')[22m [2m    - locator resolved to <input size="1" type="text" tabindex="-1" role="textbox" maxlength="80" data-ref="inputEl" autocomplete="off" readonly="readonly" aria-readonly="true" aria-required="false" id="mgedit-2452-inputEl" componentid="mgedit-2452" name="mgedit-2452-inputEl" aria-labelledby="mgedit-2452-labelEl" data-mgcompnamevalue="CollectionNameEdit" cl… (1168 chars) |
| 33 | mcp__playwright__browser_press_key | key=Tab | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-05-idos-reopened-readonly-criterion-after-fill-refused.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-05-idos-reopened-readonly-criterion-after-fill-refused.png | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Filter in Place toolbar button (corrected inspection, f1e38) | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_type | element=IDO Name criteria textbox (Filter in Place, after corrected inspection) - exact FX_UMs | ok |
| 40 | mcp__playwright__browser_press_key | key=Tab | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-06-idos-FX_UMs-criterion-committed-before-F4.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-06-idos-FX_UMs-criterion-committed-before-F4.png | ok |
| 43 | mcp__playwright__browser_press_key | key=F4 | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-07-idos-FX_UMs-after-single-F4-recovered.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-07-idos-FX_UMs-after-single-F4-recovered.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Properties sub-tab heading (IDO detail tab navigation) | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-08-idos-recovered-FX_UMs-properties-baseline.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-08-idos-recovered-FX_UMs-properties-baseline.png | ok |
| 51 | mcp__playwright__browser_click | element=Open toolbar button inner (f1e26, label Open) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 55 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 56 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 57 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 58 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=Sql Tables row Caption cell (SqlTables) | ok |
| 60 | mcp__playwright__browser_click | element=Select Form OK button (verified label OK) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=OK button of Sql Tables caution alertdialog (verified label OK) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-09-sqltables-reopened-fip-blank-criteria-after-caution-ok.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-09-sqltables-reopened-fip-blank-criteria-after-caution-ok.png | ok |
| 67 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_type | element=SQL Tables grid criteria combobox (Table Name, criteria row) - exact FX_UMs | ok |
| 70 | mcp__playwright__browser_press_key | key=Tab | ok |
| 71 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-10-sqltables-FX_UMs-criterion-committed-before-F4.png | ok |
| 72 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-10-sqltables-FX_UMs-criterion-committed-before-F4.png | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_press_key | key=F4 | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-11-sqltables-FX_UMs-after-single-F4-recovered.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-11-sqltables-FX_UMs-after-single-F4-recovered.png | ok |
| 77 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=Columns... button (read-only column view for FX_UMs) | ok |
| 80 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-12-sqlcolumns-recovered-FX_UMs-column-grid.png | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-12-sqlcolumns-recovered-FX_UMs-column-grid.png | ok |
| 82 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-044/t12-13-final-state-after-recovery-reads.png | ok |
| 86 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-13-final-state-after-recovery-reads.png | ok |
| 87 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-recovery-and-reconciliation-observations.md | ok |
| 88 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-recovery-and-reconciliation-observations.md | ok |
| 89 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-recovery-and-reconciliation-observations.md | ok |
| 90 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\cleanup-inventory.md | ok |
| 91 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-044\cleanup-inventory.md | ok |
| 92 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-044\t12-recovery-and-reconciliation-observations.md | ok |
| 93 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 94 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 95 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 96 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 97 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 98 | Glob | (no key/element/filename argument) | ok |