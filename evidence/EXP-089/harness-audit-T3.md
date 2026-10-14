# controller-generated audit (not worker prose)

49 actions, 72 reads; prohibited-tool hits=2; errors=0; turns=142; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CustomerIDCombobox","FX_CustomerIDGridCol","FX_CustomerID","FX_CusName,FX_CusAddress","FX002","Factory test two","2 Factory Street","FX001","Factory test one","1 Factory Street"]

Key sequence: [{"order":44,"key":"ArrowRight","result":"ok"},{"order":73,"key":"ArrowRight","result":"ok"},{"order":116,"key":"Control+a","result":"ok"},{"order":121,"key":"Control+a","result":"ok"},{"order":131,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-089/t3-00-designer-fresh-snapshot-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-01-designer-start-identity-scope-clean.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-01-designer-start-identity-scope-clean.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=FX_Orders recent-forms entry (Form menu) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-02-fx-orders-opened-via-recent-forms-clean.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-02-fx-orders-opened-via-recent-forms-clean.png | ok |
| 15 | mcp__playwright__browser_click | element=Edit menu | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Validator menu item | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-03-validator-dialog-opened-before-select.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-03-validator-dialog-opened-before-select.png | ok |
| 22 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=FX_CustomerID validator row | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-04-validator-FX_CustomerID-readback-type-params-error.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-04-validator-FX_CustomerID-readback-type-params-error.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Global Objects Cancel button (validator readback) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Edit menu (for Component Class) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Component Class menu item | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=FX_CustomerID component class row | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-05-component-class-FX_CustomerID-selected-before-expand.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-05-component-class-FX_CustomerID-selected-before-expand.png | ok |
| 43 | mcp__playwright__browser_click | element=Data Source group row (Component Class properties) | ok |
| 44 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-06-component-class-after-data-source-expand-attempt.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-06-component-class-after-data-source-expand-attempt.png | ok |
| 48 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-07-component-class-data-source-expanded-list-source.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-07-component-class-data-source-expanded-list-source.png | ok |
| 52 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Validation group row (Component Class properties) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-08-component-class-validation-row-selected.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-08-component-class-validation-row-selected.png | ok |
| 58 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-09-component-class-FX_CustomerID-readback-validators-validate-immediately-list-source.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-09-component-class-FX_CustomerID-readback-validators-validate-immediately-list-source.png | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=Global Objects Cancel button (component class readback) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=Details Expand Panel button | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Components tab (Details panel) | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-10-details-components-tab-state.png | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-10-details-components-tab-state.png | ok |
| 71 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_click | element=Pane (01) tree row (Components grid) | ok |
| 73 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-11-components-pane01-after-arrowright.png | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-11-components-pane01-after-arrowright.png | ok |
| 77 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=FX_CustomerIDCombobox row (Components grid) | ok |
| 80 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-12-FX_CustomerIDCombobox-before-properties-readback.png | ok |
| 83 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-12-FX_CustomerIDCombobox-before-properties-readback.png | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 86 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-13-FX_CustomerIDCombobox-groups-expanded-before-assignment.png | ok |
| 89 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-13-FX_CustomerIDCombobox-groups-expanded-before-assignment.png | ok |
| 90 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 91 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 92 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 94 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 96 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-14-components-pane00-expand-attempt.png | ok |
| 97 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-14-components-pane00-expand-attempt.png | ok |
| 98 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 99 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_click | element=FX_CustomerIDGridCol row (Components grid) | ok |
| 101 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-15-FX_CustomerIDGridCol-properties-before-assignment.png | ok |
| 102 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-15-FX_CustomerIDGridCol-properties-before-assignment.png | ok |
| 103 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 105 | mcp__playwright__browser_tabs | action=select | ok |
| 106 | mcp__playwright__browser_snapshot | filename=evidence/EXP-089/t3-16-webclient-fresh-snapshot-baseline-start.yml | ok |
| 107 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 108 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-17-webclient-state-before-baseline.png | ok |
| 109 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-17-webclient-state-before-baseline.png | ok |
| 110 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 111 | mcp__playwright__browser_click | element=Form menu (Web Client runtime) | ok |
| 112 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 113 | mcp__playwright__browser_click | element=Form > Open menu item (runtime) | ok |
| 114 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 115 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 116 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 117 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 118 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 119 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-18-runtime-select-form-filter-FX_Orders-before-ok.png | ok |
| 120 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-18-runtime-select-form-filter-FX_Orders-before-ok.png | ok |
| 121 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 122 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 123 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-19-runtime-select-form-filter-FX_Orders-slow-typed.png | ok |
| 124 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-19-runtime-select-form-filter-FX_Orders-slow-typed.png | ok |
| 125 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 126 | mcp__playwright__browser_click | element=Select Form OK button (runtime FX_Orders) | ok |
| 127 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 128 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 129 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-20-runtime-FX_Orders-opened-filter-in-place-blank-criteria.png | ok |
| 130 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-20-runtime-FX_Orders-opened-filter-in-place-blank-criteria.png | ok |
| 131 | mcp__playwright__browser_press_key | key=F4 | ok |
| 132 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-21-runtime-baseline-after-F4-order1.png | ok |
| 133 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-21-runtime-baseline-after-F4-order1.png | ok |
| 134 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 135 | mcp__playwright__browser_click | element=Order 2 row-number cell (runtime grid) | ok |
| 136 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-22-runtime-baseline-order2-detail-view.png | ok |
| 137 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-22-runtime-baseline-order2-detail-view.png | ok |
| 138 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 139 | mcp__playwright__browser_tabs | action=select | ok |
| 140 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 141 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 142 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t3-23-FX_CustomerIDGridCol-inheritance-before-assignment.png | ok |
| 143 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t3-23-FX_CustomerIDGridCol-inheritance-before-assignment.png | ok |
| 144 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 145 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 146 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 147 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |