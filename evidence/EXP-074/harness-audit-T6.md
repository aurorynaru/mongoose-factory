# controller-generated audit (not worker prose)

15 actions, 27 reads; prohibited-tool hits=1; errors=0; turns=55; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_Address","nvarchar","FX_Code","FX_Label"]

Key sequence: [{"order":15,"key":"Tab","result":"ok"},{"order":18,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button, once | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-01-after-fip-click-unfiltered-state.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-01-after-fip-click-unfiltered-state.png | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button - single corrective re-entry | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Grid Table Name criteria cell (criteria row, not the Attributes combobox) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_type | element=Grid Table Name criteria combobox (active criteria editor) | ok |
| 15 | mcp__playwright__browser_press_key | key=Tab | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-02-pre-f4-table-name-criterion-FX_HelloWorld01.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-02-pre-f4-table-name-criterion-FX_HelloWorld01.png | ok |
| 18 | mcp__playwright__browser_press_key | key=F4 | ok |
| 19 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-03-post-f4-one-dbo-fx-helloworld01-row.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-03-post-f4-one-dbo-fx-helloworld01-row.png | ok |
| 23 | mcp__playwright__browser_click | element=Columns... button (Sql Tables, once) - read-only inventory open | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-04-recovered-columns-initial-view-status-10.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-04-recovered-columns-initial-view-status-10.png | ok |
| 28 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-05-recovered-columns-scroll1-datatype-systemtype.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-05-recovered-columns-scroll1-datatype-systemtype.png | ok |
| 32 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-06-recovered-columns-scroll2-length-decimal-default.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-06-recovered-columns-scroll2-length-decimal-default.png | ok |
| 35 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-07-recovered-columns-scroll3-iscomputed-columnid.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-07-recovered-columns-scroll3-iscomputed-columnid.png | ok |
| 38 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-08-recovered-columns-scroll4-nullable-pk-keyseq.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-08-recovered-columns-scroll4-nullable-pk-keyseq.png | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Row header 10 (FX_Address) - view-only row selection, no edit | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-09-recovered-fx-address-detail-column-id-11.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-09-recovered-fx-address-detail-column-id-11.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Sql Tables tab heading (view-only parent check) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-074/t6-10-parent-sqltables-clean-after-recovered-inventory.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-074\t6-10-parent-sqltables-clean-after-recovered-inventory.png | ok |
| 53 | Grep | (no key/element/filename argument) | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 57 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 59 | Grep | (no key/element/filename argument) | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |