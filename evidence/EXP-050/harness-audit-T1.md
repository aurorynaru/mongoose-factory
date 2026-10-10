# controller-generated audit (not worker prose)

39 actions, 51 reads; prohibited-tool hits=8; errors=0; turns=110; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_UMs","FX_sItem","FX_sCost","Item","Cost"]

Key sequence: [{"order":19,"key":"Control+a","result":"ok"},{"order":25,"key":"Control+a","result":"ok"},{"order":40,"key":"Control+a","result":"ok"},{"order":42,"key":"F4","result":"ok"},{"order":73,"key":"Control+a","result":"ok"},{"order":79,"key":"Control+a","result":"ok"},{"order":85,"key":"Control+a","result":"ok"},{"order":95,"key":"Control+a","result":"ok"},{"order":103,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":8}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_tabs | action=list | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-01-webclient-preflight-initial-state.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-01-webclient-preflight-initial-state.png | ok |
| 15 | mcp__playwright__browser_click | element=Web Client toolbar Open button | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 19 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 20 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 21 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-02-select-form-positive-control-FX_UMs-settled.png | ok |
| 24 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 25 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 26 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 27 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-03-select-form-target-FX_Items-exact-settled-zero-rows.png | ok |
| 30 | mcp__playwright__browser_click | element=Select Form Cancel button | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=IDOs runtime tab | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-04-webclient-idos-tab-state-before-query.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-04-webclient-idos-tab-state-before-query.png | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=IDOs toolbar Filter in Place button | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=IDOs IDO Name criteria textbox | ok |
| 40 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 41 | mcp__playwright__browser_type | element=IDOs IDO Name criteria textbox | ok |
| 42 | mcp__playwright__browser_press_key | key=F4 | ok |
| 43 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-05-idos-FX_Items-exact-query-settled.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-05-idos-FX_Items-exact-query-settled.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=IDO Properties runtime tab | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-06-ido-properties-FX_Items-four-business-properties-readonly.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-06-ido-properties-FX_Items-four-business-properties-readonly.png | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=IDO Properties grid FX_Cost row name cell | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-07-ido-properties-FX_Cost-row-readonly.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-07-ido-properties-FX_Cost-row-readonly.png | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=IDO Properties grid FX_UM row name cell | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-08-ido-properties-FX_UM-row-readonly.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-08-ido-properties-FX_UM-row-readonly.png | ok |
| 61 | mcp__playwright__browser_tabs | action=select | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-09-designer-preflight-vendor-IdoPropertyClasses-save-disabled.png | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-09-designer-preflight-vendor-IdoPropertyClasses-save-disabled.png | ok |
| 65 | mcp__playwright__browser_click | element=Designer Edit menu | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Edit menu String item | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-10-global-objects-strings-dialog-initial.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-10-global-objects-strings-dialog-initial.png | ok |
| 72 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 73 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 74 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 75 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-11-strings-filter-FX_sItem-settled.png | ok |
| 77 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-11-strings-filter-FX_sItem-settled.png | ok |
| 78 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 79 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 80 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 81 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-12-strings-filter-FX_sCost-settled.png | ok |
| 83 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-12-strings-filter-FX_sCost-settled.png | ok |
| 84 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 85 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 86 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 87 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-13-strings-filter-FX_sDescription-settled.png | ok |
| 89 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-13-strings-filter-FX_sDescription-settled.png | ok |
| 90 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 91 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sDescription | ok |
| 92 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-14-strings-FX_sDescription-row-selected-value.png | ok |
| 93 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-14-strings-FX_sDescription-row-selected-value.png | ok |
| 94 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 95 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 96 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 97 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 98 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 99 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sUM | ok |
| 100 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-15-strings-FX_sUM-row-selected-value.png | ok |
| 101 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-15-strings-FX_sUM-row-selected-value.png | ok |
| 102 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 103 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 104 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 105 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 106 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-16-strings-positive-control-Collection-Name-settled.png | ok |
| 107 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-16-strings-positive-control-Collection-Name-settled.png | ok |
| 108 | mcp__playwright__browser_click | element=Global Objects Cancel button | ok |
| 109 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 110 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t1-17-designer-after-global-objects-cancel.png | ok |
| 111 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t1-17-designer-after-global-objects-cancel.png | ok |
| 112 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T1-preflight-and-gates-report.md | ok |
| 113 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 114 | mcp__playwright__browser_tabs | action=list | ok |