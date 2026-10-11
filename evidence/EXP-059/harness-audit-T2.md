# controller-generated audit (not worker prose)

17 actions, 33 reads; prohibited-tool hits=2; errors=0; turns=54; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Picture"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"},{"order":58,"key":"Escape","result":"ok"},{"order":63,"key":"Control+a","result":"ok"},{"order":64,"key":"Delete","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-00-start.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-01-webclient-start.md | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-01-start-sqlcolumns-state.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-01-start-sqlcolumns-state.png | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Toolbar New button (Sql Columns active form) | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-02-after-new-once.md | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-02-after-new-once.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-02-after-new-once.png | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_type | element=Sql Columns detail Column Name combobox (new row) | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-03-name-entered.md | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-snapshot-03-name-entered.md | ok |
| 18 | mcp__playwright__browser_click | element=Sql Columns detail Data Type combobox (new row) | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-04-datatype-list-open.md | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-03-datatype-list-open.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-03-datatype-list-open.png | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Data Type combobox Open button (Sql Columns new row) | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-05-datatype-list-after-open.md | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-04-datatype-list-after-open.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-04-datatype-list-after-open.png | ok |
| 28 | Grep | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-06-datatype-list-scrolled.md | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-05-datatype-list-scrolled.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-05-datatype-list-scrolled.png | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-07-datatype-list-scrolled-2.md | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-06-datatype-list-scrolled-2.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-06-datatype-list-scrolled-2.png | ok |
| 45 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-08-datatype-list-scrolled-3.md | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-07-datatype-list-scrolled-3.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-07-datatype-list-scrolled-3.png | ok |
| 50 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_type | element=Sql Columns Data Type combobox (new row, list open) | ok |
| 54 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-09-datatype-typed-varbin.md | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-08-datatype-typed-varbin.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-08-datatype-typed-varbin.png | ok |
| 57 | Grep | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_press_key | key=Escape | ok |
| 59 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-10-after-escape.md | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-09-after-escape.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-09-after-escape.png | ok |
| 62 | Grep | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 64 | mcp__playwright__browser_press_key | key=Delete | ok |
| 65 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-11-datatype-cleared.md | ok |
| 66 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-10-datatype-cleared.png | ok |
| 67 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-10-datatype-cleared.png | ok |
| 68 | Grep | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_snapshot | filename=evidence/EXP-059/t2-snapshot-12-readback-after-hscroll.md | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-059/t2-11-readback-after-hscroll.png | ok |
| 73 | Grep | (no key/element/filename argument) | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-11-readback-after-hscroll.png | ok |
| 75 | Grep | (no key/element/filename argument) | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-059\t2-snapshot-12-readback-after-hscroll.md | ok |
| 77 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-059\T2-add-column-unsaved-report.md | ok |
| 78 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md | ok |
| 79 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-059-hello-world-part-4-section-1-add-nullable-fx-pictu.md | ok |