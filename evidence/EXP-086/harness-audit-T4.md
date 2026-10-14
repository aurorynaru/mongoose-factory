# controller-generated audit (not worker prose)

14 actions, 24 reads; prohibited-tool hits=0; errors=0; turns=45; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_ItemCombobox","FX_CustomerIDCombobox","StdDefault","StdDetailsAddFind","FX_Items","dumbbell","45 pound iron","FX_HelloWorld01","FX001"]

Key sequence: [{"order":22,"key":"F4","result":"ok"},{"order":30,"key":"Escape","result":"ok"},{"order":39,"key":"Escape","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-086/t4-00-webclient-fresh-snapshot-before-close.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-086/t4-01-runtime-before-close-state.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-086\t4-01-runtime-before-close-state.png | ok |
| 7 | mcp__playwright__browser_click | element=Close Panel FX_Orders runtime tab control | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Form menu in Mongoose Web Client menu bar | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Form menu Open item | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=FX_Orders row in Select Form dialog | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Select Form dialog OK button | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-086/t4-02-runtime-reopened-initial-mode.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-086\t4-02-runtime-reopened-initial-mode.png | ok |
| 20 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP) | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_press_key | key=F4 | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-086/t4-03-runtime-after-f4-loaded-order-1.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-086\t4-03-runtime-after-f4-loaded-order-1.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Item combobox (dumbbell) on order 1 in runtime FX_Orders | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-086/t4-04-runtime-item-combobox-menu-after-change.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-086\t4-04-runtime-item-combobox-menu-after-change.png | ok |
| 30 | mcp__playwright__browser_press_key | key=Escape | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Customer ID combobox (FX001) on order 1 in runtime FX_Orders | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-086/t4-05-runtime-customerid-combobox-menu-after-change.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-086\t4-05-runtime-customerid-combobox-menu-after-change.png | ok |
| 39 | mcp__playwright__browser_press_key | key=Escape | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-086/t4-06-runtime-final-state-after-dismissal.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-086\t4-06-runtime-final-state-after-dismissal.png | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md | ok |