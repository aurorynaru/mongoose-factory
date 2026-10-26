# controller-generated audit (not worker prose)

29 actions, 35 reads; prohibited-tool hits=3; errors=1; turns=108; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":57,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: ["#14 mcp__playwright__browser_click: ### Error\nError: browserBackend.callTool: Unexpected token \"\" while parsing css selector \"\". Did you mean to CSS.escape it?"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t13-form-creation.md | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\recipes\components\configure-basic-component.md | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-131-first-fx-web-user-control-to-form-script-bridge.md | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-preflight-designer-form-properties-before-component.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-preflight-designer-form-properties-before-component.png | ok |
| 14 | mcp__playwright__browser_click | element=Details panel header (collapsed, bottom of Designer) | error: ### Error Error: browserBackend.callTool: Unexpected token "" while parsing css selector "". Did you mean to CSS.escape it? |
| 15 | mcp__playwright__browser_click | element=Expand Panel button (Details panel, bottom of Designer) | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-details-panel-expanded-components-grid-precheck.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-details-panel-expanded-components-grid-precheck.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T00-59-48-590Z.yml | ok |
| 20 | mcp__playwright__browser_click | element=Components tab in Details panel | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-components-grid-precheck-no-control.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-components-grid-precheck-no-control.png | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=UserControl row in Toolbox (Framework Components) | ok |
| 26 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-usercontrol-placed-auto-named-precommit.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-usercontrol-placed-auto-named-precommit.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T01-00-20-135Z.yml | ok |
| 31 | mcp__playwright__browser_click | element=Name value cell of userControl1_USER in Properties | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-name-editor-open-precommit.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-name-editor-open-precommit.png | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_type | element=Name inline editor (active textbox holding userControl1_USER) | ok |
| 36 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-name-typed-precommit.yml | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Name label cell in Properties (blur to commit) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-name-committed-blur-readback.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-name-committed-blur-readback.png | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Miscellaneous group row in Properties | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T01-01-10-304Z.yml | ok |
| 45 | Grep | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Properties toolbar Expand-all button (first of the two icon buttons) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-properties-expanded-misc-layout-groups.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-properties-expanded-misc-layout-groups.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-after-expand-all.yml | ok |
| 51 | Grep | (no key/element/filename argument) | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-after-expand-all.yml | ok |
| 53 | mcp__playwright__browser_click | element=Specific Attributes group row in Miscellaneous | ok |
| 54 | Grep | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-specific-attributes-row-selected-before-reference-dialog.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-specific-attributes-row-selected-before-reference-dialog.png | ok |
| 57 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-specific-attributes-after-expand-arrow.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-specific-attributes-after-expand-arrow.png | ok |
| 60 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-specific-attributes-after-chevron-click.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-specific-attributes-after-chevron-click.png | ok |
| 63 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-user-control-name-row.yml | ok |
| 64 | Grep | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=User Control Name ellipsis button (Specific Attributes) | ok |
| 66 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-edit-user-control-references-dialog-precommit.png | ok |
| 67 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-edit-user-control-references-dialog-precommit.png | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Control URL combobox Open (dropdown arrow) in Edit User Control References dialog | ok |
| 70 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=FX_Inventory/index.html option in Control URL list | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-edit-user-control-references-url-selected-precommit.png | ok |
| 73 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-edit-user-control-references-url-selected-precommit.png | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_click | element=OK button in Edit User Control References dialog | ok |
| 76 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-after-user-control-references-ok-state.png | ok |
| 77 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-after-user-control-references-ok-state.png | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=OK button of regen information alert (Edit User Control References) | ok |
| 80 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-before-layout-edit.yml | ok |
| 81 | Grep | (no key/element/filename argument) | ok |
| 82 | Grep | (no key/element/filename argument) | ok |
| 83 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-before-layout-edit.yml | ok |
| 84 | mcp__playwright__browser_click | element=Size value cell of FX_InventoryControl (Layout) | ok |
| 85 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-size-editor-open-precommit.png | ok |
| 86 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-size-editor-open-precommit.png | ok |
| 87 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_click | element=Width value cell of FX_InventoryControl (Layout > Size) | ok |
| 89 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 90 | mcp__playwright__browser_type | element=Width inline editor (active textbox, value 25) | ok |
| 91 | mcp__playwright__browser_click | element=Width label cell in Properties (blur to commit) | ok |
| 92 | Grep | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_click | element=Height value cell of FX_InventoryControl (Layout > Size) | ok |
| 94 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_type | element=Height inline editor (active textbox, value 5.882352941176471) | ok |
| 96 | mcp__playwright__browser_click | element=Height label cell in Properties (blur to commit) | ok |
| 97 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-100x30-layout-committed-readback.png | ok |
| 98 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-component-100x30-layout-committed-readback.png | ok |
| 99 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_click | element=User Control Name ellipsis button (read-only reopen for verification) | ok |
| 101 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-edit-user-control-references-reopen-readback.png | ok |
| 102 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-edit-user-control-references-reopen-readback.png | ok |
| 103 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_click | element=Cancel button in Edit User Control References dialog (read-only reopen) | ok |
| 105 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\playwright\t14-snapshot-after-cancel-save-state.yml | ok |
| 106 | Grep | (no key/element/filename argument) | ok |
| 107 | mcp__playwright__browser_click | element=Variables tab in Details panel | ok |
| 108 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-136\t14-variables-tab-after-usercontrol-reference-precheck.png | ok |
| 109 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-variables-tab-after-usercontrol-reference-precheck.png | ok |
| 110 | Grep | (no key/element/filename argument) | ok |
| 111 | Grep | (no key/element/filename argument) | ok |
| 112 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |
| 113 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-web-user-control-component-configuration.md | ok |
| 114 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-136\t14-web-user-control-component-configuration.md | ok |
| 115 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |
| 116 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md | ok |