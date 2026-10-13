# controller-generated audit (not worker prose)

28 actions, 39 reads; prohibited-tool hits=5; errors=1; turns=63; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_OrderNumber","FX_CustomerID","FX_Item","FX_Count","FX_sOrderNumber","FX_sCustomerID","FX_sCount","FX_sItem","Order Number","Customer ID","Count"]

Key sequence: [{"order":21,"key":"Control+a","result":"ok"},{"order":23,"key":"Tab","result":"ok"},{"order":39,"key":"Control+a","result":"ok"},{"order":47,"key":"Control+a","result":"ok"},{"order":55,"key":"Control+a","result":"ok"},{"order":63,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":5}

Errors: ["#78 Edit: <tool_use_error>String to replace not found in file.\nString: | Clicks (successful / failed) | **11 / 0** (Components row `e775` 1; ellipsis 1; prompt Yes 1; String Value cell 1; String dialog OK 1; Edit menu 1; String menu item 1; Strings filter ×4 (one per readback) 4; readback rows ×4 (`e2952`, `e3004`, `e3056`, `e3108`) 4 — the row clicks are counted in the 4 entries below; Global Objects Cancel 1) — reconciled as 11 successful clicks below | **86 / 2** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 1… (3191 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t8-00-fresh-snapshot-designer-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-01-designer-preflight-dirty-start.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-01-designer-preflight-dirty-start.png | ok |
| 7 | mcp__playwright__browser_click | element=Components row FX_CountStatic (read-only select) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-02-FX_CountStatic-selected-caption-initial.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-02-FX_CountStatic-selected-caption-initial.png | ok |
| 11 | mcp__playwright__browser_click | element=Caption row ellipsis button (FX_CountStatic) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-03-caption-ellipsis-prompt-observed.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-03-caption-ellipsis-prompt-observed.png | ok |
| 15 | mcp__playwright__browser_click | element=Prompt Yes (once) for FX_sCount | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-04-string-dialog-generated-before-edit.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-04-string-dialog-generated-before-edit.png | ok |
| 19 | mcp__playwright__browser_click | element=String Value cell (FX_sCount dialog) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 22 | mcp__playwright__browser_type | element=Active String Value editor (FX_sCount dialog) | ok |
| 23 | mcp__playwright__browser_press_key | key=Tab | ok |
| 24 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-05-string-value-committed-before-OK.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-05-string-value-committed-before-OK.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=String dialog OK (once, after verified commit of Count) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-06-post-OK-designer-state-FX_sCount-created-save-enabled.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-06-post-OK-designer-state-FX_sCount-created-save-enabled.png | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Designer Edit menu (read-only Strings view) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Edit > String menu item (read-only view) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 39 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 40 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 41 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=FX_sOrderNumber string row (read-only select) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-07-readback-FX_sOrderNumber-value.png | ok |
| 46 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 47 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 48 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 49 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=FX_sCustomerID string row (read-only select) | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-08-readback-FX_sCustomerID-value.png | ok |
| 54 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 55 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 56 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 57 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=FX_sCount string row (read-only select) | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-09-readback-FX_sCount-value.png | ok |
| 62 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 63 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 64 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 65 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=FX_sItem string row (read-only select) | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-10-readback-FX_sItem-value-unchanged.png | ok |
| 70 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-10-readback-FX_sItem-value-unchanged.png | ok |
| 71 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_click | element=Global Objects Cancel (not OK) | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t8-11-final-state-after-cancel-dirty-save-not-pressed.png | ok |
| 75 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t8-11-final-state-after-cancel-dirty-save-not-pressed.png | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 77 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 78 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | error: <tool_use_error>String to replace not found in file. String: \| Clicks (successful / failed) \| **11 / 0** (Components row `e775` 1; ellipsis 1; prompt Yes 1; String Value cell 1; String dialog OK 1; Edit menu 1; String menu item 1; Strings filter ×4 (one per readback) 4; readback rows ×4 (`e2952`, `e3004`, `e3056`, `e3108`) 4 — the row clicks are counted in the 4 entries below; Global Objects Cancel 1) — reconciled as 11 successful clicks below \| **86 / 2** (T1 11/0; T2 19/1; T3 5/0; T4 7/0; T5 1… (3191 chars) |
| 79 | Grep | (no key/element/filename argument) | ok |
| 80 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 82 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 83 | Grep | (no key/element/filename argument) | ok |