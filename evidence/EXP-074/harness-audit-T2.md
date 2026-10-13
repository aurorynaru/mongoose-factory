# controller-generated audit (not worker prose)

14 actions, 17 reads; prohibited-tool hits=3; errors=0; turns=50; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_Address","nvarchar","FX_Code","FX_Label"]

Key sequence: [{"order":33,"key":"Control+a","result":"ok"},{"order":34,"key":"Delete","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Sql Tables tab heading | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-01-inherited-sqltables-target-identity-clean.png | ok |
| 8 | mcp__playwright__browser_click | element=Sql Columns tab heading | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=New toolbar button (Sql Columns) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_type | element=Column Name combobox (new unsaved row) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Data Type Open trigger (list) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-02-data-type-list-opened.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-02-data-type-list-opened.png | ok |
| 19 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-03-data-type-list-scrolled.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-03-data-type-list-scrolled.png | ok |
| 23 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-04-data-type-list-n-section-search.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-04-data-type-list-n-section-search.png | ok |
| 26 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-05-data-type-list-n-section-scroll.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-05-data-type-list-n-section-scroll.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=Data Type combobox (list open, prefix filter) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-06-data-type-prefix-nvar-filtered-list.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-06-data-type-prefix-nvar-filtered-list.png | ok |
| 33 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 34 | mcp__playwright__browser_press_key | key=Delete | ok |
| 35 | mcp__playwright__browser_type | element=Data Type combobox (list open, slow prefix entry) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t2-07-data-type-nvarchar-typed-list-state.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-07-data-type-nvarchar-typed-list-state.png | ok |
| 38 | Grep | (no key/element/filename argument) | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T10-04-14-369Z.yml | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T10-04-14-369Z.yml | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | Grep | (no key/element/filename argument) | ok |
| 46 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t2-01-inherited-sqltables-target-identity-clean.png | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |