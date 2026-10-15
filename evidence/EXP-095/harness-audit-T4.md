# controller-generated audit (not worker prose)

7 actions, 15 reads; prohibited-tool hits=0; errors=0; turns=34; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CalcOrderTotal","CalcOrderTotal","Form Script Method","P(FX_Count),P(FX_ItmsCost)","FX_ItemCombobox","FX_CountEdit","135.00","20.97","FX001","FX002","dumbbell","eggs"]

Key sequence: [{"order":19,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t4-fresh-snapshot-web-client-start.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-web-client-start-state.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-web-client-start-state.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Web Client Form menu (top navigation) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-form-menu-open-web-client.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-form-menu-open-web-client.png | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=FX_Orders recent-forms menu item (Web Client Form menu) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-after-recent-forms-open-fx-orders.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-after-recent-forms-open-fx-orders.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Filter in Place toolbar button (Web Client) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-filter-in-place-mode-blank-criteria.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-filter-in-place-mode-blank-criteria.png | ok |
| 19 | mcp__playwright__browser_press_key | key=F4 | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-after-f4-grid-rows.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-after-f4-grid-rows.png | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t4-runtime-baseline-snapshot.md | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Order row 2 row-number cell (grid) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-runtime-baseline-order2.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-runtime-baseline-order2.png | ok |
| 27 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t4-runtime-order2-snapshot.md | ok |
| 28 | Grep | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Order row 1 row-number cell (grid) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t4-runtime-baseline-order1.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t4-runtime-baseline-order1.png | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |