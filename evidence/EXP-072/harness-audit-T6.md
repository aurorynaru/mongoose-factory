# controller-generated audit (not worker prose)

17 actions, 33 reads; prohibited-tool hits=3; errors=2; turns=53; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_OrderNumber","FX_CustomerID","FX_Item","FX_Count","FX_sOrderNumber","FX_sCustomerID","FX_sCount","FX_sItem","Order Number","Customer ID","Count"]

Key sequence: [{"order":26,"key":"Control+a","result":"ok"},{"order":31,"key":"Tab","result":"ok"},{"order":48,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: ["#14 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1711 not found in the current page snapshot. Try capturing new snapshot.","#27 mcp__playwright__browser_type: ### Error\nError: Ref e2543 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t6-00-fresh-snapshot-designer-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-01-designer-preflight-FX_Orders-start.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-01-designer-preflight-FX_Orders-start.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Components row FX_OrderNumberStatic (select) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-02-FX_OrderNumberStatic-selected-caption-initial.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-02-FX_OrderNumberStatic-selected-caption-initial.png | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1711 not found in the current page snapshot. Try capturing new snapshot. |
| 15 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t6-03-fresh-snapshot-caption-row-recovery.yml | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Caption row ellipsis button (FX_OrderNumberStatic) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-04-caption-ellipsis-prompt-observed.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-04-caption-ellipsis-prompt-observed.png | ok |
| 21 | mcp__playwright__browser_click | element=Prompt Yes (once) for FX_sOrderNumber | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-05-string-dialog-generated-before-edit.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-05-string-dialog-generated-before-edit.png | ok |
| 25 | mcp__playwright__browser_click | element=String Value cell (FX_sOrderNumber dialog) | ok |
| 26 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 27 | mcp__playwright__browser_type | element=String Value editor (FX_sOrderNumber) | error: ### Error Error: Ref e2543 not found in the current page snapshot. Try capturing new snapshot. |
| 28 | mcp__playwright__browser_snapshot | filename=evidence/EXP-072/t6-06-fresh-snapshot-string-value-editor-recovery.yml | ok |
| 29 | Grep | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_type | element=Active String Value editor (FX_sOrderNumber dialog) | ok |
| 31 | mcp__playwright__browser_press_key | key=Tab | ok |
| 32 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-07-string-value-committed-before-OK.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-07-string-value-committed-before-OK.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=String dialog OK (once, after verified commit) | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-08-post-OK-designer-state-FX_sOrderNumber-created.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-08-post-OK-designer-state-FX_sOrderNumber-created.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Designer Edit menu (read-only Strings view) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Edit > String menu item (read-only view) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-09-edit-string-readback-FX_sOrderNumber-after-OK.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 48 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 49 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 50 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=FX_sOrderNumber string row (read-only select) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-10-edit-string-readback-FX_sOrderNumber-value.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-10-edit-string-readback-FX_sOrderNumber-value.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Global Objects Cancel (not OK) | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-072/t6-11-final-state-after-cancel-save-pending-not-saved.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-072\t6-11-final-state-after-cancel-save-pending-not-saved.png | ok |
| 61 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 62 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 63 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |