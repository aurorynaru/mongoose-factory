# controller-generated audit (not worker prose)

31 actions, 50 reads; prohibited-tool hits=3; errors=0; turns=113; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":35,"key":"Tab","result":"ok"},{"order":56,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-062-R4\T4-fx-simport-string-and-caption-assignment-report.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 5 | mcp__playwright__browser_tabs | action=select | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-01-gate-dirty-fx_addressstatic-selected-caption-blank-before-edit.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-01-gate-dirty-fx_addressstatic-selected-caption-blank-before-edit.png | ok |
| 9 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-02-after-properties-scroll-up-caption-row-location.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-02-after-properties-scroll-up-caption-row-location.png | ok |
| 12 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-03-properties-scrolled-up-caption-search.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-03-properties-scrolled-up-caption-search.png | ok |
| 16 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-04-properties-top-caption-row-visible-check.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-04-properties-top-caption-row-visible-check.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=FX_AddressStatic Properties > Caption value text area (blank) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-05-after-caption-value-click-state-check.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-05-after-caption-value-click-state-check.png | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-06-after-arrow-toggle-list-closed-caption-state.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-06-after-arrow-toggle-list-closed-caption-state.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Caption combobox value text area (blank; FX_AddressStatic) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-07-caption-text-area-clicked-edit-mode-before-typing.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-07-caption-text-area-clicked-edit-mode-before-typing.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_type | element=Caption combobox (active, blank; FX_AddressStatic) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-08-caption-typed-fx_saddress-before-tab-commit.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-08-caption-typed-fx_saddress-before-tab-commit.png | ok |
| 35 | mcp__playwright__browser_press_key | key=Tab | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-09-caption-committed-fx_saddress-after-tab-readback.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-09-caption-committed-fx_saddress-after-tab-readback.png | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Caption ellipsis button (Open Edit Property Dialog) for FX_AddressStatic | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-10-after-caption-ellipsis-click-prompt-state.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-10-after-caption-ellipsis-click-prompt-state.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Yes button of alert 'String FX_sAddress does not exist. Create it?' | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-11-string-dialog-after-yes-initial-value-before-edit.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-11-string-dialog-after-yes-initial-value-before-edit.png | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=String Value cell (value FX_s Address) in String dialog FX_sAddress | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-12-string-value-cell-clicked-editor-state-before-typing.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-12-string-value-cell-clicked-editor-state-before-typing.png | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_type | element=String Value textbox (active; prefill FX_s Address) in String dialog FX_sAddress | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-13-string-value-typed-address-before-tab-commit.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-13-string-value-typed-address-before-tab-commit.png | ok |
| 56 | mcp__playwright__browser_press_key | key=Tab | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-14-string-value-address-committed-before-ok-pre-ok-evidence.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-14-string-value-address-committed-before-ok-pre-ok-evidence.png | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=OK button of String dialog FX_sAddress (after Tab commit; value Address verified) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-15-after-string-ok-caption-fx_saddress-canvas-state.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-15-after-string-ok-caption-fx_saddress-canvas-state.png | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=Edit menu (top navigation) | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=Edit > String menu item | ok |
| 67 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-16-edit-string-view-opened-before-filter.png | ok |
| 68 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-16-edit-string-view-opened-before-filter.png | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-17-edit-string-view-filter-fx_saddress-readback.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-17-edit-string-view-filter-fx_saddress-readback.png | ok |
| 75 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=FX_sAddress row in Global Objects Strings list (single click; read-only selection) | ok |
| 77 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-18-edit-string-readback-fx_saddress-string-value-address.png | ok |
| 78 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-18-edit-string-readback-fx_saddress-string-value-address.png | ok |
| 79 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_click | element=Global Objects dialog Cancel button (read-only close) | ok |
| 81 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-19-after-global-objects-cancel-designer-state.png | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-19-after-global-objects-cancel-designer-state.png | ok |
| 83 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_click | element=FX_AddressEdit row in Components grid (view-only selection) | ok |
| 86 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-20-recheck-fx_addressedit-selected-properties-top.png | ok |
| 87 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-20-recheck-fx_addressedit-selected-properties-top.png | ok |
| 88 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 89 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-21-recheck-fx_addressedit-binding-and-layout-readback.png | ok |
| 90 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-21-recheck-fx_addressedit-binding-and-layout-readback.png | ok |
| 91 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 92 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-22-recheck-fx_addressedit-data-source-scrolled.png | ok |
| 94 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-22-recheck-fx_addressedit-data-source-scrolled.png | ok |
| 95 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 96 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-23-recheck-fx_addressedit-layout-size-location-readback.png | ok |
| 97 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-23-recheck-fx_addressedit-layout-size-location-readback.png | ok |
| 98 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 99 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-24-recheck-fx_addressedit-layout-group-readback.png | ok |
| 100 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-24-recheck-fx_addressedit-layout-group-readback.png | ok |
| 101 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 102 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-25-recheck-fx_addressedit-layout-size-location-bottom.png | ok |
| 103 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-25-recheck-fx_addressedit-layout-size-location-bottom.png | ok |
| 104 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 105 | mcp__playwright__browser_click | element=FX_AddressStatic row in Components grid (view-only selection) | ok |
| 106 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-26-recheck-fx_addressstatic-layout-caption-binding-readback.png | ok |
| 107 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-26-recheck-fx_addressstatic-layout-caption-binding-readback.png | ok |
| 108 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 109 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 110 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t10-27-recheck-fx_addressstatic-layout-size-location-readback.png | ok |
| 111 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t10-27-recheck-fx_addressstatic-layout-size-location-readback.png | ok |
| 112 | Grep | (no key/element/filename argument) | ok |
| 113 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 114 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 115 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |