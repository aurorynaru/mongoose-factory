# controller-generated audit (not worker prose)

52 actions, 65 reads; prohibited-tool hits=2; errors=1; turns=130; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Item","%1,%2","True","IDO Collection","FX_Items","FX_Description","FX_Cost","1,2","FX_ItemCombobox","FX_ItemGridCol","FX_ItmsDescription,FX_ItmsCost"]

Key sequence: [{"order":24,"key":"Tab","result":"ok"},{"order":38,"key":"Tab","result":"ok"},{"order":48,"key":"Tab","result":"ok"},{"order":61,"key":"Tab","result":"ok"},{"order":71,"key":"Tab","result":"ok"},{"order":76,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#3 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1207 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1207 not found in the current page snapshot. Try capturing new snapshot. |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Edit menu in Designer top navigation | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Component Class menu item under Edit | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-gate-component-class-open.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-gate-component-class-open.png | ok |
| 11 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-gate-component-class-list-fx.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-gate-component-class-list-fx.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=New (+) button, leftmost in Component Classes list toolbar | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-new-name-prompt.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-new-name-prompt.png | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_type | element=Name textbox in New prompt | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-new-name-entered-before-ok.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-new-name-entered-before-ok.png | ok |
| 27 | mcp__playwright__browser_click | element=OK button in New name prompt | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Validators ellipsis (Open Edit Property Dialog) | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=+ (add validator) button in Validators editor toolbar | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Name combobox dropdown arrow in Validators New prompt | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=FX_Item option in validator picker listbox | ok |
| 38 | mcp__playwright__browser_press_key | key=Tab | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-validator-new-fx-item-before-ok.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-validator-new-fx-item-before-ok.png | ok |
| 41 | mcp__playwright__browser_click | element=OK button in Validators New prompt | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=FX_Item row in Validators grid | ok |
| 44 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Parameters (cube) button in Validators editor toolbar | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_type | element=Parameters text box in validator Parameters dialog | ok |
| 48 | mcp__playwright__browser_press_key | key=Tab | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-validator-parameters-percent1-percent2-before-ok.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-validator-parameters-percent1-percent2-before-ok.png | ok |
| 51 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=OK button in validator Parameters dialog | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-validators-editor-after-params.png | ok |
| 54 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-validators-editor-after-params.png | ok |
| 55 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=OK button in Validators editor | ok |
| 57 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=Validate Immediately value dropdown arrow in Global Objects Properties | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=True option in Validate Immediately dropdown | ok |
| 61 | mcp__playwright__browser_press_key | key=Tab | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=List Source ellipsis (Open Edit Property Dialog) | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Type combobox Open button in List Source dialog | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_click | element=IDO Collection option in Type list | ok |
| 71 | mcp__playwright__browser_press_key | key=Tab | ok |
| 72 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_click | element=IDO combobox Open button in List Source dialog | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_click | element=FX_Items option in IDO list | ok |
| 76 | mcp__playwright__browser_press_key | key=Tab | ok |
| 77 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_click | element=Properties ellipsis in List Source dialog | ok |
| 79 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_click | element=FX_Item option in available properties list | ok |
| 82 | mcp__playwright__browser_click | element=Add button in Edit Property Specifications | ok |
| 83 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_click | element=FX_Description option in available properties list | ok |
| 85 | mcp__playwright__browser_click | element=Add button in Edit Property Specifications | ok |
| 86 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_click | element=FX_Cost option in available properties list | ok |
| 88 | mcp__playwright__browser_click | element=Add button in Edit Property Specifications | ok |
| 89 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-properties-fx_item-fx_description-fx_cost-before-ok.png | ok |
| 90 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-properties-fx_item-fx_description-fx_cost-before-ok.png | ok |
| 91 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 92 | mcp__playwright__browser_click | element=OK button in Edit Property Specifications | ok |
| 93 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 94 | mcp__playwright__browser_click | element=Columns to Display ellipsis in List Source dialog | ok |
| 95 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 96 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 97 | mcp__playwright__browser_click | element=FX_Item option in Columns to Display list | ok |
| 98 | mcp__playwright__browser_click | element=FX_Description option in Columns to Display list | ok |
| 99 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-columns-to-display-before-ok.png | ok |
| 101 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-columns-to-display-before-ok.png | ok |
| 102 | mcp__playwright__browser_click | element=OK button in Select Columns to Display dialog | ok |
| 103 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-list-source-dialog-before-ok.png | ok |
| 105 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-list-source-dialog-before-ok.png | ok |
| 106 | mcp__playwright__browser_click | element=OK button in Edit List Source Specifications | ok |
| 107 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 108 | mcp__playwright__browser_click | element=OK button in Global Objects dialog | ok |
| 109 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-after-global-objects-ok.png | ok |
| 110 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-after-global-objects-ok.png | ok |
| 111 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 112 | mcp__playwright__browser_click | element=Edit menu in Designer top navigation | ok |
| 113 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 114 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 115 | mcp__playwright__browser_click | element=Component Class menu item under Edit | ok |
| 116 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 117 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 118 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 119 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 120 | mcp__playwright__browser_click | element=FX_Item row in Component Classes list | ok |
| 121 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 122 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-class-readback.png | ok |
| 123 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-class-readback.png | ok |
| 124 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 125 | mcp__playwright__browser_click | element=Cancel button in Global Objects readback dialog | ok |
| 126 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 127 | mcp__playwright__browser_click | element=Save button in Designer top toolbar | ok |
| 128 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 129 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-091/t2-save1-response.png | ok |
| 130 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-091\t2-save1-response.png | ok |
| 131 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-091-hello-world-part-5-section-12-fx-item-component-class-and-assignment.md | ok |
| 132 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-091-hello-world-part-5-section-12-fx-item-component-class-and-assignment.md | ok |