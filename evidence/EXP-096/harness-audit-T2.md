# controller-generated audit (not worker prose)

22 actions, 40 reads; prohibited-tool hits=0; errors=0; turns=82; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CalcOrderTotal","FX_ItemGridCol","FX_CountGridCol","FX_ItemCombobox","FX_CountEdit","135.00","20.97","90.00","FX001","FX002","dumbbell","eggs"]

Key sequence: [{"order":16,"key":"Tab","result":"ok"},{"order":27,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-00-designer-start-clean-countgridcol-selected.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-00-designer-start-clean-countgridcol-selected.png | ok |
| 5 | mcp__playwright__browser_click | element=FX_ItemGridCol component row | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-01-itemgridcol-selected-before-change.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-01-itemgridcol-selected-before-change.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Data Change value drop-down trigger (FX_ItemGridCol) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-02-itemgridcol-data-change-dropdown-open.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-02-itemgridcol-data-change-dropdown-open.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=FX_CalcOrderTotal option (Data Change drop-down, FX_ItemGridCol) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-03-itemgridcol-data-change-after-select.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-03-itemgridcol-data-change-after-select.png | ok |
| 16 | mcp__playwright__browser_press_key | key=Tab | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-04-itemgridcol-data-change-committed-tab.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-04-itemgridcol-data-change-committed-tab.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=FX_CountGridCol component row | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-05-countgridcol-selected-before-change.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-05-countgridcol-selected-before-change.png | ok |
| 24 | mcp__playwright__browser_click | element=Data Change value drop-down trigger (FX_CountGridCol) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=FX_CalcOrderTotal option (Data Change drop-down, FX_CountGridCol) | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-06-countgridcol-data-change-committed-tab.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-06-countgridcol-data-change-committed-tab.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=FX_ItemGridCol component row (readback) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-07-readback-itemgridcol-presave.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-07-readback-itemgridcol-presave.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Designer toolbar Save button (native, one-time) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-08-designer-save-response.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-08-designer-save-response.png | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=closable FX_Orders (Form-tab close control) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-09-designer-form-closed-after-save.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-09-designer-form-closed-after-save.png | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Form menu (Designer top menu) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=FX_Orders recent-forms menu item (Designer) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-10-reopened-designer-initial.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-10-reopened-designer-initial.png | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Expand Panel (Details, reopened Designer) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Event Handlers tab (Details, reopened) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-11-reopened-event-handlers-row.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-11-reopened-event-handlers-row.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=FX_CalcOrderTotal handler row (select to expand properties, view only) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-12-reopened-event-handler-params.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-12-reopened-event-handler-params.png | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=Components tab (Details, reopened) | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=Expand button (Components grid, reopened) | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=FX_ItemCombobox component row (reopened readback) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-13-reopened-readback-itemcombobox.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-13-reopened-readback-itemcombobox.png | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_click | element=FX_CountEdit component row (reopened readback) | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-14-reopened-readback-countedit.png | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-14-reopened-readback-countedit.png | ok |
| 71 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_click | element=FX_ItemGridCol component row (reopened readback) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-15-reopened-readback-itemgridcol.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-15-reopened-readback-itemgridcol.png | ok |
| 75 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=FX_CountGridCol component row (reopened readback) | ok |
| 77 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t2-16-reopened-readback-countgridcol.png | ok |
| 78 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t2-16-reopened-readback-countgridcol.png | ok |
| 79 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 80 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md | ok |
| 81 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md | ok |
| 82 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md | ok |