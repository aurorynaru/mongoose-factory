# controller-generated audit (not worker prose)

19 actions, 36 reads; prohibited-tool hits=0; errors=0; turns=59; key string (none); exact mismatches=0

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
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t6-00-designer-fresh-snapshot-pre-close.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-01-pre-close-state.png | ok |
| 6 | mcp__playwright__browser_click | element=closable FX_Orders Form-tab close control | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-02-after-form-close-state.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Designer top-menu Form | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=FX_Orders recent-forms menu item | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-03-reopened-fx-orders-state.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-03-reopened-fx-orders-state.png | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Designer top-menu Edit | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Edit menu item Property Class Extension | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t6-04-global-objects-after-reopen-snapshot.yml | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=FX_Item name cell in Global Objects list (after reopen) | ok |
| 24 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t6-05-FX_Item-selected-after-reopen-snapshot.yml | ok |
| 25 | Grep | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-06-FX_Item-top-name-version-after-reopen.png | ok |
| 27 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-07-FX_Item-four-fields-after-reopen.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-07-FX_Item-four-fields-after-reopen.png | ok |
| 31 | mcp__playwright__browser_click | element=FX_CustomerID name cell in Global Objects list (after reopen) | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-085/t6-08-FX_CustomerID-selected-after-reopen-snapshot.yml | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-09-FX_CustomerID-four-fields-after-reopen.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-09-FX_CustomerID-four-fields-after-reopen.png | ok |
| 36 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-10-FX_CustomerID-scrolled-three-fields-after-reopen.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Global Objects dialog Cancel button (once, after reopen) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Details panel Expand Panel button (view only) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Details Components tab (view only) | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-11-components-grid-after-details-expand.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-11-components-grid-after-details-expand.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Pane (01) tree row in Components grid (view only) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-12-pane01-after-click.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-12-pane01-after-click.png | ok |
| 54 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=FX_ItemCombobox treeitem in Details Components grid | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-13-FX_ItemCombobox-after-reopen-properties.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-13-FX_ItemCombobox-after-reopen-properties.png | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=FX_CustomerIDCombobox treeitem in Details Components grid | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-085/t6-14-FX_CustomerIDCombobox-after-reopen-properties.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-14-FX_CustomerIDCombobox-after-reopen-properties.png | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-085\t6-06-FX_Item-top-name-version-after-reopen.png | ok |
| 68 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md | ok |
| 69 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-085-hello-world-part-5-section-4-fx-orders-property-class-extensions.md | ok |