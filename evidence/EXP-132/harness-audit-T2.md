# controller-generated audit (not worker prose)

48 actions, 34 reads; prohibited-tool hits=11; errors=0; turns=143; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":14,"key":"Delete","result":"ok"},{"order":21,"key":"End","result":"ok"},{"order":25,"key":"End","result":"ok"},{"order":29,"key":"End","result":"ok"},{"order":33,"key":"End","result":"ok"},{"order":55,"key":"End","result":"ok"},{"order":59,"key":"End","result":"ok"},{"order":63,"key":"End","result":"ok"},{"order":67,"key":"End","result":"ok"},{"order":71,"key":"End","result":"ok"},{"order":75,"key":"End","result":"ok"},{"order":118,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":11}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T1-preflight-summary.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-01-web-client-account-header.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-01-web-client-account-header.png | ok |
| 7 | mcp__playwright__browser_click | element=Form menu button in Web Client Explorer navigation | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Open menu item (Select Form) under Form menu | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-25T14-19-59-430Z.yml | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-02-select-form-dialog-filter-FX_Bridge.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-02-select-form-dialog-filter-FX_Bridge.png | ok |
| 14 | mcp__playwright__browser_press_key | key=Delete | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-03-select-form-dialog-full-inventory-after-clear.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-03-select-form-dialog-full-inventory-after-clear.png | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-04-select-form-filter-Mock-result.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-04-select-form-filter-Mock-result.png | ok |
| 21 | mcp__playwright__browser_press_key | key=End | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-05-select-form-filter-Mock-after-End.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-05-select-form-filter-Mock-after-End.png | ok |
| 24 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 25 | mcp__playwright__browser_press_key | key=End | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-06-select-form-filter-InventoryPrototype-after-End.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-06-select-form-filter-InventoryPrototype-after-End.png | ok |
| 28 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 29 | mcp__playwright__browser_press_key | key=End | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-07-select-form-filter-FX_CustomerPortal-positive-control.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-07-select-form-filter-FX_CustomerPortal-positive-control.png | ok |
| 32 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 33 | mcp__playwright__browser_press_key | key=End | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-08-select-form-filter-vEcho-no-form-names.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-08-select-form-filter-vEcho-no-form-names.png | ok |
| 36 | mcp__playwright__browser_click | element=Cancel button in Select Form dialog | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-09-web-client-after-select-form-cancel.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-09-web-client-after-select-form-cancel.png | ok |
| 39 | mcp__playwright__browser_tabs | action=select | ok |
| 40 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-131-first-fx-web-user-control-to-form-script-bridge.md | ok |
| 43 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox (residual view filter) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-10-designer-variables-filter-cleared-form-level.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-10-designer-variables-filter-cleared-form-level.png | ok |
| 46 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-11-designer-variables-grid-scrolled-global-persistent.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-11-designer-variables-grid-scrolled-global-persistent.png | ok |
| 51 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-12-designer-variables-grid-scrolled-to-end-global-persistent.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-12-designer-variables-grid-scrolled-to-end-global-persistent.png | ok |
| 54 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox | ok |
| 55 | mcp__playwright__browser_press_key | key=End | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-13-designer-variables-filter-positive-control-ccvw_PrinterName.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-13-designer-variables-filter-positive-control-ccvw_PrinterName.png | ok |
| 58 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox | ok |
| 59 | mcp__playwright__browser_press_key | key=End | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-14-designer-variables-filter-vEcho-global-and-form.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-14-designer-variables-filter-vEcho-global-and-form.png | ok |
| 62 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox | ok |
| 63 | mcp__playwright__browser_press_key | key=End | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-15-designer-variables-filter-midstring-control-Printer.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-15-designer-variables-filter-midstring-control-Printer.png | ok |
| 66 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox | ok |
| 67 | mcp__playwright__browser_press_key | key=End | ok |
| 68 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-16-designer-variables-filter-Echo.png | ok |
| 69 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-16-designer-variables-filter-Echo.png | ok |
| 70 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox | ok |
| 71 | mcp__playwright__browser_press_key | key=End | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-17-designer-variables-filter-vInventoryJson-positive-control.png | ok |
| 73 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-17-designer-variables-filter-vInventoryJson-positive-control.png | ok |
| 74 | mcp__playwright__browser_type | element=Designer Details Variables Search Properties textbox (view filter clear) | ok |
| 75 | mcp__playwright__browser_press_key | key=End | ok |
| 76 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-18-designer-global-persistent-neighbours-FX_vEcho-position.png | ok |
| 79 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-18-designer-global-persistent-neighbours-FX_vEcho-position.png | ok |
| 80 | mcp__playwright__browser_click | element=Components tab in Designer Details panel | ok |
| 81 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-19-designer-components-tab-FX_BridgeControl.png | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-19-designer-components-tab-FX_BridgeControl.png | ok |
| 83 | Grep | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_click | element=Component tab in bottom Properties panel | ok |
| 85 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-20-designer-component-properties-FX_BridgeControl.png | ok |
| 86 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-20-designer-component-properties-FX_BridgeControl.png | ok |
| 87 | Grep | (no key/element/filename argument) | ok |
| 88 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-25T14-23-12-628Z.yml | ok |
| 89 | mcp__playwright__browser_click | element=Open Edit Property Dialog button for User Control Name (FX_BridgeControl) | ok |
| 90 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-21-user-control-references-dialog-readonly.png | ok |
| 91 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-21-user-control-references-dialog-readonly.png | ok |
| 92 | Grep | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_click | element=Cancel button in Edit User Control References dialog (read-only) | ok |
| 94 | Grep | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_click | element=Form tab in bottom Properties panel | ok |
| 96 | Grep | (no key/element/filename argument) | ok |
| 97 | Grep | (no key/element/filename argument) | ok |
| 98 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-25T14-23-38-027Z.yml | ok |
| 99 | mcp__playwright__browser_click | element=Blue pencil button in Form Properties toolbar (Script Editor, read-only use) | ok |
| 100 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-22-form-script-editor-readonly-FX_Echo-original.png | ok |
| 101 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-22-form-script-editor-readonly-FX_Echo-original.png | ok |
| 102 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t2-23-form-script-editor-readonly-snapshot.md | ok |
| 103 | Grep | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_click | element=Compile Result panel header (expand view only) | ok |
| 105 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-24-form-script-editor-compile-result-expanded-readonly.png | ok |
| 106 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-24-form-script-editor-compile-result-expanded-readonly.png | ok |
| 107 | Grep | (no key/element/filename argument) | ok |
| 108 | mcp__playwright__browser_click | element=Cancel button in Script Editor (read-only; no change) | ok |
| 109 | Grep | (no key/element/filename argument) | ok |
| 110 | mcp__playwright__browser_click | element=Edit menu in Designer top navigation | ok |
| 111 | Grep | (no key/element/filename argument) | ok |
| 112 | mcp__playwright__browser_click | element=Web User Control Assets menu item under Edit | ok |
| 113 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-25-web-user-control-assets-global-objects-dialog.png | ok |
| 114 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-25-web-user-control-assets-global-objects-dialog.png | ok |
| 115 | Grep | (no key/element/filename argument) | ok |
| 116 | mcp__playwright__browser_click | element=FX_Bridge folder tree item in Global Objects Web Assets (expand only) | ok |
| 117 | Grep | (no key/element/filename argument) | ok |
| 118 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 119 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-26-global-objects-FX_Bridge-folder-expanded.png | ok |
| 120 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-26-global-objects-FX_Bridge-folder-expanded.png | ok |
| 121 | mcp__playwright__browser_snapshot | filename=evidence/EXP-132/t2-27-global-objects-snapshot-before-index-html-select.md | ok |
| 122 | Grep | (no key/element/filename argument) | ok |
| 123 | mcp__playwright__browser_click | element=index.html tree item under FX_Bridge in Global Objects (select only) | ok |
| 124 | Grep | (no key/element/filename argument) | ok |
| 125 | mcp__playwright__browser_click | element=Open Edit Property Dialog for Content of FX_Bridge/index.html (read-only, Cancel after) | ok |
| 126 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-28-edit-browser-file-FX_Bridge-index-html-readonly.png | ok |
| 127 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-28-edit-browser-file-FX_Bridge-index-html-readonly.png | ok |
| 128 | Grep | (no key/element/filename argument) | ok |
| 129 | mcp__playwright__browser_click | element=Cancel button in Edit Browser File dialog (read-only; no text changed) | ok |
| 130 | Grep | (no key/element/filename argument) | ok |
| 131 | mcp__playwright__browser_click | element=Cancel button in Global Objects dialog (no changes made) | ok |
| 132 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-132/t2-29-designer-after-readonly-closures-clean.png | ok |
| 133 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-132\t2-29-designer-after-readonly-closures-clean.png | ok |
| 134 | Grep | (no key/element/filename argument) | ok |
| 135 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 136 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-source-readback.md | ok |
| 137 | Grep | (no key/element/filename argument) | ok |
| 138 | Grep | (no key/element/filename argument) | ok |
| 139 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-source-readback.md | ok |
| 140 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-preflight-completion-summary.md | ok |
| 141 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-132\T2-preflight-completion-summary.md | ok |
| 142 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |
| 143 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md | ok |