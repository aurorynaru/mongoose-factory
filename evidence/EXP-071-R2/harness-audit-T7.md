# controller-generated audit (not worker prose)

14 actions, 27 reads; prohibited-tool hits=1; errors=1; turns=53; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","fxords","FX_HelloWorldProject01","FX_OrderNumber","FX_OrderNumBase","FX_CustomerID","FX_Item","FX_Count","FX_sCount","FX_Items"]

Key sequence: [{"order":18,"key":"Tab","result":"ok"},{"order":21,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#8 mcp__playwright__browser_snapshot: ### Error\nError: Ref f1e102 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-36-t7-wizard-completion-state-before-native-close.png | ok |
| 5 | mcp__playwright__browser_click | element=Wizard native Close button (single invocation) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_tabs | action=select | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref f1e102 not found in the current page snapshot. Try capturing new snapshot. |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=IDOs Form tab (Web Client Form-tab bar) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-37-t7-idos-form-state-before-criterion.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-37-t7-idos-form-state-before-criterion.png | ok |
| 13 | mcp__playwright__browser_click | element=Filter in Place toolbar button (IDOs Form) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-38-t7-idos-filter-in-place-field-state-on-entry.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-38-t7-idos-filter-in-place-field-state-on-entry.png | ok |
| 17 | mcp__playwright__browser_type | element=IDO Name criteria textbox (Filter in Place, IDOs Form) | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-39-t7-idos-FX_Orders-criterion-before-F4.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-39-t7-idos-FX_Orders-criterion-before-F4.png | ok |
| 21 | mcp__playwright__browser_press_key | key=F4 | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-40-t7-idos-FX_Orders-settled-after-F4.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-40-t7-idos-FX_Orders-settled-after-F4.png | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=IDOs Form Properties sub-tab (in-Form) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-41-t7-idos-properties-subtab-grid.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-41-t7-idos-properties-subtab-grid.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-42-t7-idos-properties-grid-scrolled-right-default-label.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-42-t7-idos-properties-grid-scrolled-right-default-label.png | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=IDO Properties grid row 4 FX_Count (view-only row selection) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-43-t7-idos-properties-row4-FX_Count-selected.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-43-t7-idos-properties-row4-FX_Count-selected.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=IDOs toolbar Properties button (opens IDO Properties view) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-44-t7-ido-properties-form-view-detail.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-44-t7-ido-properties-form-view-detail.png | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=IDO Properties list row 2 FX_CustomerID (view-only selection) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-45-t7-ido-properties-row2-FX_CustomerID-detail.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-45-t7-ido-properties-row2-FX_CustomerID-detail.png | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=IDO Properties list row 3 FX_Item (view-only selection) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-46-t7-ido-properties-row3-FX_Item-detail-length50.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-46-t7-ido-properties-row3-FX_Item-detail-length50.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=IDO Properties list row 4 FX_Count (view-only selection) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-071-R2/r2-47-t7-ido-properties-row4-FX_Count-detail-default1.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-071-R2\r2-47-t7-ido-properties-row4-FX_Count-detail-default1.png | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |