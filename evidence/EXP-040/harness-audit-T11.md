# controller-generated audit (not worker prose)

18 actions, 24 reads; prohibited-tool hits=2; errors=0; turns=52; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_HelloWorldProject01","FX_Code","FX_Label"]

Key sequence: [{"order":28,"key":"Tab","result":"ok"},{"order":29,"key":"F4","result":"ok"},{"order":39,"key":"Tab","result":"ok"},{"order":40,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/70-t11-step1-fresh-state-before-error-inspection.png | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\70-t11-step1-fresh-state-before-error-inspection.png | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/71-t11-step1-hover-error-badge-row1.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\71-t11-step1-hover-error-badge-row1.png | ok |
| 8 | mcp__playwright__browser_click | element=Refresh toolbar button (SQL Tables, discard pending change) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/72-t11-step2-after-refresh-click.png | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=No button in SQL Tables save-changes prompt (discard, do not save) | ok |
| 13 | mcp__playwright__browser_network_requests | filename=evidence/EXP-040/t11-network-requests-after-step2-no.txt | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/73-t11-step2-settled-after-no-discard.png | ok |
| 18 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t11-snapshot-step2-settled-after-no.yml | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\73-t11-step2-settled-after-no-discard.png | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/74-t11-step3-fip-mode-grid-criteria-identification.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\74-t11-step3-fip-mode-grid-criteria-identification.png | ok |
| 25 | mcp__playwright__browser_click | element=Grid criteria Table Name cell (row 1, Table Name column) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_type | element=Grid criteria Table Name editor (criteria row) | ok |
| 28 | mcp__playwright__browser_press_key | key=Tab | ok |
| 29 | mcp__playwright__browser_press_key | key=F4 | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/75-t11-step3-customer-grid-criteria-f4-result.png | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t11-snapshot-step3-customer-f4-settled.yml | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\75-t11-step3-customer-grid-criteria-f4-result.png | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Grid criteria Table Name cell (criteria row) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_type | element=Grid criteria Table Name editor (criteria row) | ok |
| 39 | mcp__playwright__browser_press_key | key=Tab | ok |
| 40 | mcp__playwright__browser_press_key | key=F4 | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/76-t11-step4-fx_helloworld01-grid-criteria-f4-result.png | ok |
| 42 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t11-snapshot-step4-fx_helloworld01-f4-settled.yml | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\76-t11-step4-fx_helloworld01-grid-criteria-f4-result.png | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Columns... button (read-only view for FX_HelloWorld01) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/77-t11-step4-sql-columns-view-opened.png | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\77-t11-step4-sql-columns-view-opened.png | ok |
| 49 | mcp__playwright__browser_click | element=Row number 2 (FX_Label) in Sql Columns list | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/78-t11-step4-sql-columns-fx_label-detail.png | ok |
| 51 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t11-snapshot-step4-sql-columns-after-fx_label-select.yml | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\78-t11-step4-sql-columns-fx_label-detail.png | ok |
| 53 | Grep | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Row number 3 (CreatedBy) in Sql Columns list | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/79-t11-step4-sql-columns-createdby-system-detail.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\79-t11-step4-sql-columns-createdby-system-detail.png | ok |
| 57 | Grep | (no key/element/filename argument) | ok |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 59 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t1-evidence-index.md | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |