# controller-generated audit (not worker prose)

15 actions, 22 reads; prohibited-tool hits=1; errors=0; turns=53; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CalcOrderTotal","CalcOrderTotal","Form Script Method","P(FX_Count),P(FX_ItmsCost)","FX_ItemCombobox","FX_CountEdit","135.00","20.97","FX001","FX002","dumbbell","eggs"]

Key sequence: [{"order":8,"key":"Control+a","result":"ok"},{"order":10,"key":"Tab","result":"ok"},{"order":37,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t5-start-fresh-snapshot-web-client.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-start-baseline-order1.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-start-baseline-order1.png | ok |
| 7 | mcp__playwright__browser_click | element=Runtime detail-view Count field (order 1) | ok |
| 8 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 9 | mcp__playwright__browser_type | element=Runtime detail-view Count field (order 1), selected content | ok |
| 10 | mcp__playwright__browser_press_key | key=Tab | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-after-count-3-unsaved-order1.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-after-count-3-unsaved-order1.png | ok |
| 13 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t5-after-count-3-snapshot.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Item combobox drop-down (Open) button on order 1 | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=eggs option in Item drop-down | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-after-item-eggs-unsaved-order1.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-after-item-eggs-unsaved-order1.png | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t5-after-item-eggs-snapshot.md | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Close Panel FX_Orders (runtime Form-tab close control) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-save-prompt-before-answering.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-save-prompt-before-answering.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=No button in save prompt (do not save) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-after-no-discard-explorer.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-after-no-discard-explorer.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Web Client Form menu (top navigation) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=FX_Orders recent-forms menu item (Web Client Form menu) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Filter in Place toolbar button (Web Client) | ok |
| 37 | mcp__playwright__browser_press_key | key=F4 | ok |
| 38 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t5-reopened-runtime-snapshot.md | ok |
| 39 | Grep | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-reopened-order1-after-discard.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-reopened-order1-after-discard.png | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Order row 2 row-number cell (grid row-number pane) | ok |
| 44 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t5-reopened-order2-snapshot.md | ok |
| 45 | Grep | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-reopened-order2-after-discard.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-reopened-order2-after-discard.png | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_click | element=Close Panel FX_Orders (runtime, clean close) | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t5-final-runtime-closed-clean.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t5-final-runtime-closed-clean.png | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |