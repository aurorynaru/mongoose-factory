# controller-generated audit (not worker prose)

21 actions, 27 reads; prohibited-tool hits=1; errors=0; turns=63; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_ItemCombobox","FX_CustomerIDCombobox","FX_Item","FX_CustomerID","FX_Items","FX_HelloWorld01","FX_Code","StdDetailsAddFind"]

Key sequence: [{"order":29,"key":"Tab","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":47,"key":"Tab","result":"ok"},{"order":55,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Grep | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t3-00-designer-fresh-snapshot-start.yml | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=FX_CustomerIDCombobox treeitem in Details Components grid | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-01-FX_CustomerIDCombobox-inheritance-gate.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-01-FX_CustomerIDCombobox-inheritance-gate.png | ok |
| 12 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-02-FX_CustomerIDCombobox-inheritance-ellipsis-visible.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-02-FX_CustomerIDCombobox-inheritance-ellipsis-visible.png | ok |
| 16 | mcp__playwright__browser_click | element=Edit Property Class Extension ellipsis for FX_CustomerIDCombobox (Inheritance) | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-03-creation-prompt-FX_CustomerID.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-03-creation-prompt-FX_CustomerID.png | ok |
| 20 | mcp__playwright__browser_click | element=Yes button of the FX_CustomerID creation prompt | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t3-04-pce-dialog-after-yes-snapshot.yml | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-05-pce-dialog-after-yes-layout.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-05-pce-dialog-after-yes-layout.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-04-pce-dialog-after-yes-snapshot.yml | ok |
| 26 | mcp__playwright__browser_click | element=Add/Details Form value dropdown arrow in the FX_CustomerID extension dialog | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=FX_HelloWorld01 option in Add/Details Form list | ok |
| 29 | mcp__playwright__browser_press_key | key=Tab | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-06-addform-FX_HelloWorld01-after-tab.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-06-addform-FX_HelloWorld01-after-tab.png | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t3-07-pce-dialog-after-addform-commit-snapshot.yml | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Find Form value dropdown arrow in the FX_CustomerID extension dialog | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=FX_HelloWorld01 option in Find Form list | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-08-findform-FX_HelloWorld01-after-tab.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-08-findform-FX_HelloWorld01-after-tab.png | ok |
| 40 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t3-09-pce-dialog-after-findform-commit-snapshot.yml | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Property value dropdown arrow in the FX_CustomerID extension dialog | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_type | element=Property combobox in the FX_CustomerID extension dialog (list empty) | ok |
| 47 | mcp__playwright__browser_press_key | key=Tab | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-10-property-FX_Code-after-tab.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-10-property-FX_Code-after-tab.png | ok |
| 50 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t3-11-pce-dialog-after-property-commit-snapshot.yml | ok |
| 51 | Grep | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Right-Click Menu value dropdown arrow in the FX_CustomerID extension dialog | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=StdDetailsAddFind option (exact) in Right-Click Menu list | ok |
| 55 | mcp__playwright__browser_press_key | key=Tab | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-12-pce-dialog-all-four-committed-before-OK.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-12-pce-dialog-all-four-committed-before-OK.png | ok |
| 58 | Grep | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=Property Class Extension dialog OK button (FX_CustomerID, once) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t3-13-after-FX_CustomerID-OK-response.png | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t3-13-after-FX_CustomerID-OK-response.png | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md | ok |
| 66 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md | ok |