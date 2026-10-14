# controller-generated audit (not worker prose)

30 actions, 51 reads; prohibited-tool hits=2; errors=0; turns=80; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CustomerIDCombobox","FX_CustomerIDGridCol","FX_CustomerID","FX_CusName,FX_CusAddress","FX002","Factory test two","2 Factory Street","FX001","Factory test one","1 Factory Street"]

Key sequence: [{"order":21,"key":"Tab","result":"ok"},{"order":31,"key":"Tab","result":"ok"},{"order":46,"key":"Tab","result":"ok"},{"order":53,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-089/t4-00-designer-fresh-snapshot-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-01-designer-start-fx-orders-user-clean.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-01-designer-start-fx-orders-user-clean.png | ok |
| 8 | mcp__playwright__browser_click | element=FX_CustomerIDCombobox row (Components grid) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-02-FX_CustomerIDCombobox-selected-before-assignment.png | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-03-FX_CustomerIDCombobox-inheritance-BEFORE-assignment.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-03-FX_CustomerIDCombobox-inheritance-BEFORE-assignment.png | ok |
| 14 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Component Class value dropdown (FX_CustomerIDCombobox Inheritance) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-04-FX_CustomerIDCombobox-component-class-list-open.png | ok |
| 20 | mcp__playwright__browser_click | element=FX_CustomerID option in Component Class list | ok |
| 21 | mcp__playwright__browser_press_key | key=Tab | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-05-FX_CustomerIDCombobox-component-class-after-tab.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-05-FX_CustomerIDCombobox-component-class-after-tab.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Component Class Parameters value cell (FX_CustomerIDCombobox) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-06-FX_CustomerIDCombobox-parameters-cell-clicked.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-06-FX_CustomerIDCombobox-parameters-cell-clicked.png | ok |
| 30 | mcp__playwright__browser_type | element=Component Class Parameters inline text input (FX_CustomerIDCombobox) | ok |
| 31 | mcp__playwright__browser_press_key | key=Tab | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-07-FX_CustomerIDCombobox-parameters-after-tab-committed.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-07-FX_CustomerIDCombobox-parameters-after-tab-committed.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=FX_CustomerIDGridCol row (Components grid) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-08-FX_CustomerIDGridCol-inheritance-BEFORE-assignment.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-08-FX_CustomerIDGridCol-inheritance-BEFORE-assignment.png | ok |
| 40 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Component Class dropdown (FX_CustomerIDGridCol Inheritance) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=FX_CustomerID option in Component Class list (GridCol) | ok |
| 46 | mcp__playwright__browser_press_key | key=Tab | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-09-FX_CustomerIDGridCol-component-class-after-tab.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-09-FX_CustomerIDGridCol-component-class-after-tab.png | ok |
| 50 | mcp__playwright__browser_click | element=Component Class Parameters value cell (FX_CustomerIDGridCol) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_type | element=Component Class Parameters inline text input (FX_CustomerIDGridCol) | ok |
| 53 | mcp__playwright__browser_press_key | key=Tab | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-10-FX_CustomerIDGridCol-parameters-after-tab-committed.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-10-FX_CustomerIDGridCol-parameters-after-tab-committed.png | ok |
| 57 | mcp__playwright__browser_click | element=Designer native toolbar Save (single invocation) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-11-designer-save-native-response-and-state.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-11-designer-save-native-response-and-state.png | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=FX_Orders Form-tab close control (closable FX_Orders) | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-12-designer-after-close-once-no-prompt.png | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=Form menu (reopen via recent forms) | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_click | element=FX_Orders recent-forms entry (reopen) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-13-reopened-FX_Orders-identity-user-clean.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-13-reopened-FX_Orders-identity-user-clean.png | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_click | element=Details Expand Panel button (reopened Form) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_click | element=Components tab (Details panel, reopened Form) | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-14-reopened-components-tab-state.png | ok |
| 78 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-14-reopened-components-tab-state.png | ok |
| 79 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-15-reopened-components-pane01-expanded.png | ok |
| 83 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-15-reopened-components-pane01-expanded.png | ok |
| 84 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 86 | mcp__playwright__browser_click | element=FX_CustomerIDGridCol row (Components grid, reopened) | ok |
| 87 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-16-reopened-FX_CustomerIDGridCol-inheritance-after-save-reopen.png | ok |
| 89 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 90 | mcp__playwright__browser_click | element=FX_CustomerIDCombobox row (Components grid, reopened) | ok |
| 91 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 92 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t4-17-reopened-FX_CustomerIDCombobox-inheritance-after-save-reopen.png | ok |
| 93 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-17-reopened-FX_CustomerIDCombobox-inheritance-after-save-reopen.png | ok |
| 94 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-12-designer-after-close-once-no-prompt.png | ok |
| 95 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-04-FX_CustomerIDCombobox-component-class-list-open.png | ok |
| 96 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t4-16-reopened-FX_CustomerIDGridCol-inheritance-after-save-reopen.png | ok |
| 97 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 98 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 99 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 100 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 101 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |