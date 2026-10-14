# controller-generated audit (not worker prose)

11 actions, 20 reads; prohibited-tool hits=0; errors=0; turns=38; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_ItemCombobox","FX_CustomerIDCombobox","FX_Item","FX_CustomerID","FX_Items","FX_HelloWorld01","FX_Code","StdDetailsAddFind"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t4-00-designer-fresh-snapshot-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-01-designer-start-state-before-readback.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Designer top-menu Edit | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Edit menu item Property Class Extension | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-02-global-objects-dialog-opened.png | ok |
| 12 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t4-03-global-objects-dialog-snapshot.yml | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=FX_Item row name cell in Global Objects Property Class Extensions list | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-04-FX_Item-selected-global-objects-screen.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-04-FX_Item-selected-global-objects-screen.png | ok |
| 17 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t4-05-FX_Item-selected-properties-snapshot.yml | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-06-FX_Item-readback-four-fields.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-06-FX_Item-readback-four-fields.png | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=FX_CustomerID row name cell in Global Objects Property Class Extensions list | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t4-07-FX_CustomerID-selected-properties-snapshot.yml | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-07-FX_CustomerID-selected-properties-snapshot.yml | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-08-FX_CustomerID-readback-four-fields.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-08-FX_CustomerID-readback-four-fields.png | ok |
| 30 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-09-FX_CustomerID-readback-scrolled-three-fields.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-09-FX_CustomerID-readback-scrolled-three-fields.png | ok |
| 33 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-09-FX_CustomerID-readback-scrolled-four-fields.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-09-FX_CustomerID-readback-scrolled-four-fields.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Global Objects dialog Cancel button (once) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t4-10-after-global-objects-cancel-state.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t4-10-after-global-objects-cancel-state.png | ok |
| 42 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md | ok |
| 43 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md | ok |