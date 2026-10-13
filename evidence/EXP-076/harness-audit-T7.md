# controller-generated audit (not worker prose)

21 actions, 28 reads; prohibited-tool hits=5; errors=1; turns=58; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"},{"order":27,"key":"Tab","result":"ok"},{"order":32,"key":"Tab","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":42,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":5}

Errors: ["#57 Edit: <tool_use_error>No changes to make: old_string and new_string are exactly the same.</tool_use_error>"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t7-01-initial-state-dirty-fx_addressedit-configured-no-addressstatic.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t7-01-initial-state-dirty-fx_addressedit-configured-no-addressstatic.png | ok |
| 7 | mcp__playwright__browser_mouse_drag_xy | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t7-02-after-single-static-drop-new-static-selected.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t7-02-after-single-static-drop-new-static-selected.png | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Properties Name value cell static1_USER | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_type | element=Name editor (active, static1_USER) | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t7-03-committed-name-fx_addressstatic-properties-layout-before-size.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t7-03-committed-name-fx_addressstatic-properties-layout-before-size.png | ok |
| 19 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t7-04-layout-group-visible-before-size-edit.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t7-04-layout-group-visible-before-size-edit.png | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Properties Width value cell (56.25) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_type | element=Width editor (active, 56.25) | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Properties Height value cell (22.22) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_type | element=Height editor (active, 22.22...) | ok |
| 32 | mcp__playwright__browser_press_key | key=Tab | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Properties Top value cell (16.61) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_type | element=Top editor (active, 16.61) | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Properties Left value cell (11.5) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_type | element=Left editor (active, 11.5) | ok |
| 42 | mcp__playwright__browser_press_key | key=Tab | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t7-05-expanded-location-size-readbacks-fx_addressstatic.png | ok |
| 46 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t7-05-expanded-location-size-readbacks-fx_addressstatic.png | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Components tree row FX_AddressStatic (reselect) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Components tree row FX_AddressEdit (reselect, view only) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t7-06-canvas-both-address-components-target-rectangles.png | ok |
| 54 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t7-06-canvas-both-address-components-target-rectangles.png | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 57 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | error: <tool_use_error>No changes to make: old_string and new_string are exactly the same.</tool_use_error> |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |