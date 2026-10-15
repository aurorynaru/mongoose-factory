# controller-generated audit (not worker prose)

23 actions, 40 reads; prohibited-tool hits=0; errors=0; turns=69; key string "3" [not an exact_value (informational)]; exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CalcOrderTotal","FX_ItemGridCol","FX_CountGridCol","FX_ItemCombobox","FX_CountEdit","135.00","20.97","90.00","FX001","FX002","dumbbell","eggs"]

Key sequence: [{"order":12,"key":"F4","result":"ok"},{"order":31,"key":"Control+a","result":"ok"},{"order":32,"key":"3","result":"ok"},{"order":33,"key":"Tab","result":"ok"},{"order":67,"key":"F4","result":"ok"}]

Spelled strings: [{"text":"3","orders":[32],"allOk":true,"exactMatch":null,"matchingValues":[]}]

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Form menu (Web Client) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=FX_Orders recent-forms menu item | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-01-runtime-opened-from-recent.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-02-filter-in-place-blank-criteria.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-02-filter-in-place-blank-criteria.png | ok |
| 12 | mcp__playwright__browser_press_key | key=F4 | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-03-baseline-after-f4.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-03-baseline-after-f4.png | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-04-baseline-order1-populated.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-04-baseline-order1-populated.png | ok |
| 18 | mcp__playwright__browser_click | element=Row number cell 2 (order 2, visible locked side) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-05-baseline-order2.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-05-baseline-order2.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Row number cell 1 (order 1, visible locked side) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-06-baseline-order1-rechecked-before-layout.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-06-baseline-order1-rechecked-before-layout.png | ok |
| 26 | mcp__playwright__browser_mouse_drag_xy | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-07-splitter-after-drag-t3.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-07-splitter-after-drag-t3.png | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Order 1 grid row Count cell (value 2) | ok |
| 31 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 32 | mcp__playwright__browser_press_key | key=3 | ok |
| 33 | mcp__playwright__browser_press_key | key=Tab | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-08-control-grid-count-3-unsaved-result.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-08-control-grid-count-3-unsaved-result.png | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Order 1 grid row Item cell (dumbbell) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-09-item-cell-clicked.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-09-item-cell-clicked.png | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Item drop-down Open button (order 1 grid row) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-10-item-dropdown-open.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-10-item-dropdown-open.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=eggs option in Item drop-down (order 1 grid row) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-11-after-item-eggs-unsaved.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-11-after-item-eggs-unsaved.png | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Close Panel FX_Orders (runtime, discard path) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-12-discard-save-prompt.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-12-discard-save-prompt.png | ok |
| 56 | mcp__playwright__browser_click | element=No button (save prompt, discard T3) | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-13-after-discard-no.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-13-after-discard-no.png | ok |
| 59 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Form menu (Web Client) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=FX_Orders recent-forms menu item | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-14-reopen-fip-blank-criteria.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-14-reopen-fip-blank-criteria.png | ok |
| 67 | mcp__playwright__browser_press_key | key=F4 | ok |
| 68 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-15-reopened-baseline-order1-layout.png | ok |
| 72 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-15-reopened-baseline-order1-layout.png | ok |
| 73 | mcp__playwright__browser_click | element=Row number cell 2 (order 2, visible locked side) | ok |
| 74 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-16-reopened-order2.png | ok |
| 75 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-16-reopened-order2.png | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_click | element=Close Panel FX_Orders (final clean close) | ok |
| 78 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-096/t3-17-final-runtime-closed-clean.png | ok |
| 79 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-096\t3-17-final-runtime-closed-clean.png | ok |
| 80 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md | ok |
| 81 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md | ok |
| 82 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md | ok |