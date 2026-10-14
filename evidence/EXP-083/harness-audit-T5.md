# controller-generated audit (not worker prose)

11 actions, 21 reads; prohibited-tool hits=1; errors=0; turns=44; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_sCustomerName","Customer Name","FX_sItemDescription","Item Description","FX_sOrderTotal","Order Total","90.00","6.99"]

Key sequence: [{"order":16,"key":"Tab","result":"ok"},{"order":29,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t5-01-webclient-start-fresh.yml | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-01-webclient-start-usable-before-open.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-01-webclient-start-usable-before-open.png | ok |
| 8 | mcp__playwright__browser_click | element=Web Client Form menu button | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Web Client Form menu > Open item | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-02-select-form-dialog-before-fx_orders-choice.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-02-select-form-dialog-before-fx_orders-choice.png | ok |
| 15 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 16 | mcp__playwright__browser_press_key | key=Tab | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-03-select-form-filter-fx_orders-one-row.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-03-select-form-filter-fx_orders-one-row.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Select Form row FX_Orders caption cell | ok |
| 21 | mcp__playwright__browser_click | element=Select Form OK button (one click) | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t5-02-runtime-fx-orders-after-open.yml | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-04-runtime-fx_orders-opened-before-f4-mode.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-04-runtime-fx_orders-opened-before-f4-mode.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button on FX_Orders runtime | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-05-runtime-fx_orders-after-fip-criteria-blank.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-05-runtime-fx_orders-after-fip-criteria-blank.png | ok |
| 29 | mcp__playwright__browser_press_key | key=F4 | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-06-runtime-after-f4-blank-criteria-query-result.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-06-runtime-after-f4-blank-criteria-query-result.png | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t5-03-runtime-after-f4-row1-fields.yml | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\snapshot-t5-03-runtime-after-f4-row1-fields.yml | ok |
| 35 | mcp__playwright__browser_click | element=Runtime grid row-number cell 2 (navigate to order 2) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-07-runtime-order-2-fields.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-07-runtime-order-2-fields.png | ok |
| 38 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t5-04-runtime-order-2-fields.yml | ok |
| 39 | Grep | (no key/element/filename argument) | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Close Panel FX_Orders runtime tab (one click) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t5-08-runtime-fx_orders-after-close-once-no-prompt.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t5-08-runtime-fx_orders-after-close-once-no-prompt.png | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |