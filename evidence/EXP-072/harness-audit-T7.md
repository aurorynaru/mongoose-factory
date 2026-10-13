# controller-generated audit (not worker prose)

16 actions, 29 reads; prohibited-tool hits=2; errors=0; turns=45; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_OrderNumber","FX_CustomerID","FX_Item","FX_Count","FX_sOrderNumber","FX_sCustomerID","FX_sCount","FX_sItem","Order Number","Customer ID","Count"]

Key sequence: [{"order":23,"key":"Control+a","result":"ok"},{"order":25,"key":"Tab","result":"ok"},{"order":41,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t7-00-fresh-snapshot-designer-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-01-designer-preflight-FX_Orders-dirty-start.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-01-designer-preflight-FX_Orders-dirty-start.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Components row FX_CustomerIDStatic (select; read-only) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-02-FX_CustomerIDStatic-selected-caption-initial.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-02-FX_CustomerIDStatic-selected-caption-initial.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Caption row ellipsis button (FX_CustomerIDStatic) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-03-caption-ellipsis-prompt-observed.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-03-caption-ellipsis-prompt-observed.png | ok |
| 17 | mcp__playwright__browser_click | element=Prompt Yes (once) for FX_sCustomerID | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-04-string-dialog-generated-before-edit.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-04-string-dialog-generated-before-edit.png | ok |
| 21 | mcp__playwright__browser_click | element=String Value cell (FX_sCustomerID dialog) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 24 | mcp__playwright__browser_type | element=Active String Value editor (FX_sCustomerID dialog) | ok |
| 25 | mcp__playwright__browser_press_key | key=Tab | ok |
| 26 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-05-string-value-committed-before-OK.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-05-string-value-committed-before-OK.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=String dialog OK (once, after verified commit) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-06-post-OK-designer-state-FX_sCustomerID-created.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-06-post-OK-designer-state-FX_sCustomerID-created.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Designer Edit menu (read-only Strings view) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Edit > String menu item (read-only view) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 41 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 42 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 43 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=FX_sCustomerID string row (read-only select) | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-07-edit-string-readback-FX_sCustomerID-value.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-07-edit-string-readback-FX_sCustomerID-value.png | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Global Objects Cancel (not OK) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t7-08-final-state-after-cancel-save-pending-not-saved.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t7-08-final-state-after-cancel-save-pending-not-saved.png | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 57 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |