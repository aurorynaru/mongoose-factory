# controller-generated audit (not worker prose)

15 actions, 18 reads; prohibited-tool hits=2; errors=1; turns=42; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_DerOrderTotal","FX_Cost","FX_Count","FX_ItmsCost","FX_Count * FX_ItmsCost"]

Key sequence: [{"order":25,"key":"Tab","result":"ok"},{"order":33,"key":"Tab","result":"ok"},{"order":36,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#4 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 5 | Glob | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt5.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-079-hello-world-part-5-section-2b-fx-orders-items-join.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_tabs | action=list | ok |
| 13 | mcp__playwright__browser_tabs | action=select | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=IDOs Form tab heading (view only) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Close Panel IDOs (Form-tab control, clean Form) | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Form menu | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Form menu > Open | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 25 | mcp__playwright__browser_press_key | key=Tab | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Select Form row IDOs / IdoCollections | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Select Form OK | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_type | element=IDO Name criterion textbox (Filter in Place) | ok |
| 33 | mcp__playwright__browser_press_key | key=Tab | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t1-01-pre-f4-idos-fx-orders-criterion.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080\t1-01-pre-f4-idos-fx-orders-criterion.png | ok |
| 36 | mcp__playwright__browser_press_key | key=F4 | ok |
| 37 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t1-02-post-f4-identity-and-tables-view.png | ok |
| 40 | mcp__playwright__browser_click | element=IDO Properties sub-tab (in-form view, not the Properties button) | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t1-03-baseline-inventory-properties-rows-1-to-8.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080\t1-03-baseline-inventory-properties-rows-1-to-8.png | ok |
| 44 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-080/t1-04-baseline-inventory-properties-rows-9-to-16.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080\t1-04-baseline-inventory-properties-rows-9-to-16.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-080\t1-02-post-f4-identity-and-tables-view.png | ok |
| 49 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 51 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-080-hello-world-part-5-section-3-fx-orders-derived-order-total.md | ok |