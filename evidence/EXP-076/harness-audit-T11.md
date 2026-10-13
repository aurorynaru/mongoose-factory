# controller-generated audit (not worker prose)

21 actions, 51 reads; prohibited-tool hits=1; errors=0; turns=68; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-01-pre-save-dirty-identity-both-address-components-in-grid.png | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-01-pre-save-dirty-identity-both-address-components-in-grid.png | ok |
| 6 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-02-pre-save-fx_addressstatic-name-type-caption-readback.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-02-pre-save-fx_addressstatic-name-type-caption-readback.png | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=FX_AddressEdit row in Components grid (selection only) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-03-pre-save-fx_addressedit-name-type-readback.png | ok |
| 14 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-04-pre-save-fx_addressedit-layout-size-location-binding-readback.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-03-pre-save-fx_addressedit-name-type-readback.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-04-pre-save-fx_addressedit-layout-size-location-binding-readback.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Designer top-toolbar Save button (native; invoked once) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-05-after-single-native-save-clean-state-check.png | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-05-after-single-native-save-clean-state-check.png | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=closable FX_HelloWorld01 Form-tab close control (clean after Save; once) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-06-after-single-form-tab-close-no-prompt-state.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-06-after-single-form-tab-close-no-prompt-state.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Designer toolbar Open button (accessible name Design; opens Select Form) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-07-select-form-dialog-after-toolbar-open.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Select Form grid row FX_HelloWorld01 (single click) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Select Form OK button (once) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-08-reopened-fx_helloworld01-identity-user-scope-clean.png | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-08-reopened-fx_helloworld01-identity-user-scope-clean.png | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Details panel Expand Panel button (view toggle) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-09-reopened-components-grid-expanded-all-rows.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-09-reopened-components-grid-expanded-all-rows.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Details > Components tab (view only) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-10-reopened-components-tab-rows-visible.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-10-reopened-components-tab-rows-visible.png | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Components tree row Pane (01) (expand) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-11-pane01-expand-attempt-state.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-11-pane01-expand-attempt-state.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Components grid Expand button (expands all panes; view only) | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-12-reopened-components-expanded-grid-rows.png | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=FX_AddressEdit row in Components grid after reopen (selection only) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-13-reopened-fx_addressedit-name-type-readback.png | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-13-reopened-fx_addressedit-name-type-readback.png | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=FX_AddressStatic row in Components grid after reopen (selection only) | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-14-reopened-fx_addressstatic-caption-type-geometry-readback.png | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Edit menu (top navigation) | ok |
| 70 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=Edit > String menu item | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_click | element=FX_sAddress row in Global Objects Strings list (selection only) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-15-reopened-edit-string-fx_saddress-value-address-readback.png | ok |
| 80 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-15-reopened-edit-string-fx_saddress-value-address-readback.png | ok |
| 82 | mcp__playwright__browser_click | element=Global Objects dialog Cancel button (read-only close) | ok |
| 83 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t11-16-final-state-after-string-cancel-save-disabled-no-dialog.png | ok |
| 85 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-16-final-state-after-string-cancel-save-disabled-no-dialog.png | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 87 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 88 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t11-14-reopened-fx_addressstatic-caption-type-geometry-readback.png | ok |
| 89 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 90 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 91 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |