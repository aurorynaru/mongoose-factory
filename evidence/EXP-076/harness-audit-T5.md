# controller-generated audit (not worker prose)

18 actions, 28 reads; prohibited-tool hits=1; errors=0; turns=53; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":30,"key":"Tab","result":"ok"},{"order":47,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Designer toolbar Open button (accessible name Design) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Select Form row FX_HelloWorld01 (Caption) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t5-01-designer-reopened-fx_helloworld01-identity-clean-before-components.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t5-01-designer-reopened-fx_helloworld01-identity-clean-before-components.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Details Expand Panel button | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Details tab Components | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_mouse_drag_xy | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t5-02-after-single-edit-drop-new-edit-selected.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t5-02-after-single-edit-drop-new-edit-selected.png | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Properties Name value cell edit1_USER | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_type | element=Properties Name textbox (edit1_USER, active) | ok |
| 30 | mcp__playwright__browser_press_key | key=Tab | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Binding Type value cell (None) | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Binding Type combobox trigger arrow | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Binding Type option Property | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Binding picker trigger (Binding row) - first click selects cell | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Binding picker trigger arrow (second click, cell now selected) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t5-03-binding-picker-open-object-fx_address-offered-before-select.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t5-03-binding-picker-open-object-fx_address-offered-before-select.png | ok |
| 45 | mcp__playwright__browser_click | element=Binding picker option object.FX_Address | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_press_key | key=Tab | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t5-04-after-select-binding-object-fx_address-readback-form-dirty.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t5-04-after-select-binding-object-fx_address-readback-form-dirty.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |