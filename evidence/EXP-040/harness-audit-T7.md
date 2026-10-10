# controller-generated audit (not worker prose)

20 actions, 37 reads; prohibited-tool hits=3; errors=0; turns=53; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_HelloWorldProject01","FX_Code","FX_Label"]

Key sequence: [{"order":26,"key":"Tab","result":"ok"},{"order":39,"key":"Tab","result":"ok"},{"order":53,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 3 | mcp__playwright__browser_click | element=Blank original first row, Name cell (above FX_Code) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/41-t7-blank-row1-selected-before-delete.png | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\41-t7-blank-row1-selected-before-delete.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Delete Row button (single row, not Delete All Rows) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/42-t7-after-single-delete-row-settled.png | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t7-snapshot-after-single-delete-row.yml | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\42-t7-after-single-delete-row-settled.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t7-snapshot-after-single-delete-row.yml | ok |
| 13 | mcp__playwright__browser_click | element=Data Type cell for FX_Code row | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/43-t7-data-type-cell-opened-fx-code.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Data Type combo Open button for FX_Code row | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/44-t7-data-type-list-opened-fx-code.png | ok |
| 19 | mcp__playwright__browser_click | element=String option in Data Type list | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/45-t7-fx-code-data-type-string-selected.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Property Length cell for FX_Code row | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/46-t7-fx-code-property-length-cell-opened.png | ok |
| 25 | mcp__playwright__browser_type | element=Property Length editor for FX_Code row | ok |
| 26 | mcp__playwright__browser_press_key | key=Tab | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/47-t7-fx-code-length-30-committed.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Primary Key checkbox for FX_Code row | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/48-t7-fx-code-primary-key-clicked.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\48-t7-fx-code-primary-key-clicked.png | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Add Row button (once, for FX_Label) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/49-t7-after-single-add-row-for-fx-label.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_type | element=Name editor for new FX_Label row | ok |
| 39 | mcp__playwright__browser_press_key | key=Tab | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/50-t7-fx-label-name-committed.png | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Data Type cell for FX_Label row | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Data Type combo Open button for FX_Label row | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=String option in Data Type list (FX_Label) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/51-t7-fx-label-data-type-string-selected.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Property Length cell for FX_Label row | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_type | element=Property Length editor for FX_Label row | ok |
| 53 | mcp__playwright__browser_press_key | key=Tab | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/52-t7-fx-label-length-100-committed.png | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t7-snapshot-field-grid-fx-code-fx-label.yml | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/53-t7-field-grid-settled-two-rows.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\53-t7-field-grid-settled-two-rows.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t7-snapshot-field-grid-fx-code-fx-label.yml | ok |
| 60 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-040/54-t7-field-grid-scrolled-right-hidden-columns.png | ok |
| 63 | mcp__playwright__browser_snapshot | filename=evidence/EXP-040/t7-snapshot-field-grid-after-horizontal-scroll.yml | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\54-t7-field-grid-scrolled-right-hidden-columns.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t7-snapshot-field-grid-after-horizontal-scroll.yml | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 68 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 69 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-040\t1-evidence-index.md | ok |