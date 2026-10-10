# controller-generated audit (not worker prose)

12 actions, 17 reads; prohibited-tool hits=2; errors=0; turns=30; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_HelloWorldProject01","FX_Code","FX_Label"]

Key sequence: [{"order":5,"key":"F4","result":"ok"},{"order":20,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 3 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_type | element=IDO Name criteria textbox | ok |
| 5 | mcp__playwright__browser_press_key | key=F4 | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/64-t10-idos-fip-fx_helloworld01-f4-post-finish.png | ok |
| 7 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t10-snapshot-idos-fip-fx_helloworld01-post-finish.yml | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\64-t10-idos-fip-fx_helloworld01-f4-post-finish.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t10-snapshot-idos-fip-fx_helloworld01-post-finish.yml | ok |
| 10 | mcp__playwright__browser_click | element=Properties tab in IDO detail | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/65-t10-ido-properties-tab-fx_helloworld01.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\65-t10-ido-properties-tab-fx_helloworld01.png | ok |
| 14 | mcp__playwright__browser_click | element=Sql Tables tab | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/66-t10-sql-tables-tab-selected-before-query.png | ok |
| 17 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_type | element=Table Name criteria combobox | ok |
| 20 | mcp__playwright__browser_press_key | key=F4 | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/67-t10-sql-tables-fx_helloworld01-exact-f4-result.png | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t10-snapshot-sql-tables-fx_helloworld01-f4.yml | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\67-t10-sql-tables-fx_helloworld01-exact-f4-result.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t10-snapshot-sql-tables-fx_helloworld01-f4.yml | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=No button in Sql Tables value-change prompt (keep value) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/68-t10-sql-tables-after-value-prompt-declined-no.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=No button in Sql Tables save-changes prompt (decline save) | ok |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_network_requests | filename=evidence/EXP-040/t10-network-requests-after-sql-yes-misclick.txt | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/69-t10-current-state-after-misclicked-save-prompt-yes.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\68-t10-sql-tables-after-value-prompt-declined-no.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\69-t10-current-state-after-misclicked-save-prompt-yes.png | ok |
| 38 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t1-evidence-index.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |