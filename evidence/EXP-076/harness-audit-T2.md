# controller-generated audit (not worker prose)

16 actions, 39 reads; prohibited-tool hits=1; errors=0; turns=66; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":15,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-01-gate-start-designer-identity-clean.png | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-01-gate-start-designer-identity-clean.png | ok |
| 6 | mcp__playwright__browser_mouse_drag_xy | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-02-after-edit-drop-new-component-selected.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-02-after-edit-drop-new-component-selected.png | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Properties Name value edit1_USER | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-03-edit1-user-name-cell-activated-before-rename.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-03-edit1-user-name-cell-activated-before-rename.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_type | element=Properties Name textbox (edit1_USER, active) | ok |
| 15 | mcp__playwright__browser_press_key | key=Tab | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Binding Type value cell (None) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-04-binding-type-dropdown-opened-before-property.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-04-binding-type-dropdown-opened-before-property.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Binding Type combobox trigger arrow | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Binding Type option Property | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Binding picker trigger (Binding row) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-05-binding-cell-selected-after-property-autoassign.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-05-binding-cell-selected-after-property-autoassign.png | ok |
| 30 | mcp__playwright__browser_click | element=Binding picker arrow (second click, cell now selected) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-06-binding-picker-open-fx_address-not-offered.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-06-binding-picker-open-fx_address-not-offered.png | ok |
| 35 | mcp__playwright__browser_click | element=Binding picker visible arrow control (close list without selecting) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-07-binding-picker-closed-no-selection-unsaved-edit.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-07-binding-picker-closed-no-selection-unsaved-edit.png | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Components tree row FX_LabelStatic (select only) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Components tree row FX_LabelEdit (select only) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Components tree row FX_CodeStatic (select only) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=Components tree row FX_CodeEdit (select only) | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Components tree row FX_AddressEdit (select only) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t2-08-final-state-unsaved-fx_addressedit-binding-readback.png | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t2-08-final-state-unsaved-fx_addressedit-binding-readback.png | ok |
| 64 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 65 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 66 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |