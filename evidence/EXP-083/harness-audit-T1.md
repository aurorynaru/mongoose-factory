# controller-generated audit (not worker prose)

11 actions, 17 reads; prohibited-tool hits=1; errors=1; turns=41; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_sCustomerName","Customer Name","FX_sItemDescription","Item Description","FX_sOrderTotal","Order Total","90.00","6.99"]

Key sequence: [{"order":26,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#3 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-072-hello-world-part-4-section-11b-fx-orders-form.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-078-hello-world-part-5-section-1-2a-fx-orders-customer-join.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-081-hello-world-part-5-section-2-3-fx-orders-label-overrides.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt5.md | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_tabs | action=list | ok |
| 14 | mcp__playwright__browser_tabs | action=select | ok |
| 15 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t1-01-designer-start.yml | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\snapshot-t1-01-designer-start.yml | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t1-01-designer-start-fx-orders-open-user-clean.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t1-01-designer-start-fx-orders-open-user-clean.png | ok |
| 19 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Edit > String menu item | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t1-02-global-objects-dialog.yml | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\snapshot-t1-02-global-objects-dialog.yml | ok |
| 25 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 26 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 27 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t1-02-edit-string-filter-fx_s-before-cancel.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t1-02-edit-string-filter-fx_s-before-cancel.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=FX_sAddress string row (select only) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t1-03-edit-string-fx_sAddress-positive-control-value.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t1-03-edit-string-fx_sAddress-positive-control-value.png | ok |
| 34 | mcp__playwright__browser_click | element=Global Objects Cancel button | ok |
| 35 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t1-03-after-global-objects-cancel.yml | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=FX_CusNameStatic row (select only, read Caption) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=FX_ItmsDescriptionStatic row (select only, read Caption) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=FX_DerOrderTotalStatic row (select only, read Caption) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t1-04-fx-orders-open-captions-read-clean-before-stop.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t1-04-fx-orders-open-captions-read-clean-before-stop.png | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |