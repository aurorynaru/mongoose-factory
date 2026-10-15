# controller-generated audit (not worker prose)

11 actions, 21 reads; prohibited-tool hits=0; errors=0; turns=39; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CalcOrderTotal","CalcOrderTotal","Form Script Method","P(FX_Count),P(FX_ItmsCost)","FX_ItemCombobox","FX_CountEdit","135.00","20.97","FX001","FX002","dumbbell","eggs"]

Key sequence: [{"order":19,"key":"Tab","result":"ok"},{"order":30,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t2-pre-change-state-designer.png | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t2-pre-change-state-designer.png | ok |
| 7 | mcp__playwright__browser_click | element=Components tab (Details) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=FX_ItemCombobox row in Components grid | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t2-itemcombobox-selected-before-data-change.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t2-itemcombobox-selected-before-data-change.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Data Change drop-down arrow (FX_ItemCombobox) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=FX_CalcOrderTotal option in Data Change drop-down | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t2-itemcombobox-data-change-readback.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t2-itemcombobox-data-change-readback.png | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_press_key | key=Tab | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t2-itemcombobox-data-change-readback.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t2-itemcombobox-data-change-readback.png | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=FX_CountEdit row in Components grid | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t2-countedit-selected-before-data-change.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t2-countedit-selected-before-data-change.png | ok |
| 27 | mcp__playwright__browser_click | element=Data Change drop-down arrow (FX_CountEdit) | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=FX_CalcOrderTotal option in Data Change drop-down (FX_CountEdit) | ok |
| 30 | mcp__playwright__browser_press_key | key=Tab | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t2-countedit-data-change-readback.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t2-countedit-data-change-readback.png | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_click | element=Designer toolbar Save (native), single invocation | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/designer-save-response.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\designer-save-response.png | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |