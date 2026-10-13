# controller-generated audit (not worker prose)

23 actions, 36 reads; prohibited-tool hits=4; errors=0; turns=70; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":13,"key":"Tab","result":"ok"},{"order":38,"key":"Tab","result":"ok"},{"order":43,"key":"Tab","result":"ok"},{"order":58,"key":"Tab","result":"ok"},{"order":63,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-01-pre-change-dirty-fx_addressedit-name-binding-readback.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-01-pre-change-dirty-fx_addressedit-name-binding-readback.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Properties Type value cell (Edit) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Type combobox trigger arrow | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Type option MultilineEdit (Multi-Line Edit) | ok |
| 13 | mcp__playwright__browser_press_key | key=Tab | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-02-type-set-multilineedit-readback-layout-visible.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-02-type-set-multilineedit-readback-layout-visible.png | ok |
| 19 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-03-properties-scrolled-to-layout-group-before-size.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-03-properties-scrolled-to-layout-group-before-size.png | ok |
| 22 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-03-properties-scrolled-to-layout-group-before-size.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-03-properties-scrolled-to-layout-group-before-size.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Properties Size row treeitem (expand) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-04-size-row-expanded-or-not-visible-check.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-04-size-row-expanded-or-not-visible-check.png | ok |
| 31 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-04-size-row-expanded-or-not-visible-check.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-04-size-row-expanded-or-not-visible-check.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Properties Width value cell (75) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_type | element=Width editor (active, value 75) | ok |
| 38 | mcp__playwright__browser_press_key | key=Tab | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Properties Height value cell (21.111...) | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_type | element=Height editor (active, value 21.111...) | ok |
| 43 | mcp__playwright__browser_press_key | key=Tab | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Properties Location row treeitem (expand) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-05-size-set-37-05-by-4-location-row-before-location-edit.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-05-size-set-37-05-by-4-location-row-before-location-edit.png | ok |
| 49 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-06-location-expand-check.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-06-location-expand-check.png | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Properties Top value cell (15.5) | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_type | element=Top editor (active, value 15.5) | ok |
| 58 | mcp__playwright__browser_press_key | key=Tab | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Properties Left value cell (30.25) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_type | element=Left editor (active, value 30.25) | ok |
| 63 | mcp__playwright__browser_press_key | key=Tab | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t6-07-fx_addressedit-geometry-committed-canvas-placement.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t6-07-fx_addressedit-geometry-committed-canvas-placement.png | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 70 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |