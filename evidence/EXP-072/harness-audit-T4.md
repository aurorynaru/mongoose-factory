# controller-generated audit (not worker prose)

25 actions, 37 reads; prohibited-tool hits=3; errors=0; turns=59; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_OrderNumber","FX_CustomerID","FX_Item","FX_Count","FX_sOrderNumber","FX_sCustomerID","FX_sCount","FX_sItem","Order Number","Customer ID","Count"]

Key sequence: [{"order":19,"key":"Tab","result":"ok"},{"order":26,"key":"Control+a","result":"ok"},{"order":28,"key":"Tab","result":"ok"},{"order":64,"key":"Control+a","result":"ok"},{"order":66,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t4-00-fresh-snapshot-designer-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-01-designer-preflight-start.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-01-designer-preflight-start.png | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-02-toolbar-open-icon-hover-tooltip-check.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-02-toolbar-open-icon-hover-tooltip-check.png | ok |
| 13 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-03-after-toolbar-open-click.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-03-after-toolbar-open-click.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=Select Form filter textbox | ok |
| 19 | mcp__playwright__browser_press_key | key=Tab | ok |
| 20 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-04-select-form-FX_Orders-settled-before-open.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-04-select-form-FX_Orders-settled-before-open.png | ok |
| 23 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Select Form filter textbox | ok |
| 26 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 27 | mcp__playwright__browser_type | element=Select Form filter textbox | ok |
| 28 | mcp__playwright__browser_press_key | key=Tab | ok |
| 29 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-05-select-form-FX_prefix-list-readonly-check.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-05-select-form-FX_prefix-list-readonly-check.png | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-06-select-form-FX_prefix-list-scrolled-readonly.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-06-select-form-FX_prefix-list-scrolled-readonly.png | ok |
| 37 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-07-select-form-FX_prefix-list-after-FX_Items-readonly.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-07-select-form-FX_prefix-list-after-FX_Items-readonly.png | ok |
| 40 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-08-select-form-FX_prefix-list-bottom-readonly.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-08-select-form-FX_prefix-list-bottom-readonly.png | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Designer Select Form Cancel button | ok |
| 45 | mcp__playwright__browser_tabs | action=list | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_tabs | action=select | ok |
| 48 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t4-09-webclient-fresh-snapshot-crosscheck.yml | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Web Client Form menu button | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Web Client Form > Open menu item | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-10-webclient-select-form-FX_Orders-row-crosscheck-settled.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-10-webclient-select-form-FX_Orders-row-crosscheck-settled.png | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=Web Client Select Form Cancel button | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_tabs | action=select | ok |
| 61 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=Designer Select Form filter textbox | ok |
| 64 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 65 | mcp__playwright__browser_type | element=Designer Select Form filter textbox | ok |
| 66 | mcp__playwright__browser_press_key | key=Tab | ok |
| 67 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-11-designer-select-form-FX_Orders-second-attempt-settled.png | ok |
| 69 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-11-designer-select-form-FX_Orders-second-attempt-settled.png | ok |
| 70 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=Designer Select Form Cancel button (second attempt) | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t4-12-designer-final-state-FX_Orders-not-opened.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t4-12-designer-final-state-FX_Orders-not-opened.png | ok |
| 75 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 77 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |