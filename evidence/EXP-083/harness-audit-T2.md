# controller-generated audit (not worker prose)

31 actions, 46 reads; prohibited-tool hits=4; errors=0; turns=90; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_sCustomerName","Customer Name","FX_sItemDescription","Item Description","FX_sOrderTotal","Order Total","90.00","6.99"]

Key sequence: [{"order":18,"key":"Tab","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":55,"key":"Tab","result":"ok"},{"order":68,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t2-01-designer-fresh-start.yml | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=FX_CusNameStatic treeitem in Components grid | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t2-02-caption-row-fx_cusnamestatic.yml | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\snapshot-t2-02-caption-row-fx_cusnamestatic.yml | ok |
| 10 | mcp__playwright__browser_click | element=FX_CusNameStatic Caption ellipsis button | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-01-prompt-string-fx_scustomername-does-not-exist.png | ok |
| 13 | mcp__playwright__browser_click | element=Yes button on FX_sCustomerName create prompt | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=String Value cell in String dialog | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_type | element=String Value editor in String dialog (active) | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-02-string-dialog-fx_scustomername-value-committed-before-ok.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-02-string-dialog-fx_scustomername-value-committed-before-ok.png | ok |
| 22 | mcp__playwright__browser_click | element=String dialog OK button | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=FX_ItmsDescriptionStatic treeitem in Components grid | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t2-03-caption-row-fx_itmsdescriptionstatic.yml | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\snapshot-t2-03-caption-row-fx_itmsdescriptionstatic.yml | ok |
| 29 | mcp__playwright__browser_click | element=FX_ItmsDescriptionStatic Caption ellipsis button | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-03-prompt-string-fx_sitemdescription-does-not-exist.png | ok |
| 32 | mcp__playwright__browser_click | element=Yes button on FX_sItemDescription create prompt | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=String Value cell in String dialog (FX_sItemDescription) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_type | element=String Value editor in String dialog (active, FX_sItemDescription) | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-04-string-dialog-fx_sitemdescription-value-committed-before-ok.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-04-string-dialog-fx_sitemdescription-value-committed-before-ok.png | ok |
| 41 | mcp__playwright__browser_click | element=String dialog OK button (FX_sItemDescription) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=FX_DerOrderTotalStatic treeitem in Components grid | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t2-04-caption-row-fx_derordertotalstatic.yml | ok |
| 46 | Grep | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=FX_DerOrderTotalStatic Caption ellipsis button | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-05-prompt-string-fx_sordertotal-does-not-exist.png | ok |
| 50 | mcp__playwright__browser_click | element=Yes button on FX_sOrderTotal create prompt | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=String Value cell in String dialog (FX_sOrderTotal) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_type | element=String Value editor in String dialog (active, FX_sOrderTotal) | ok |
| 55 | mcp__playwright__browser_press_key | key=Tab | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-06-string-dialog-fx_sordertotal-value-committed-before-ok.png | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-06-string-dialog-fx_sordertotal-value-committed-before-ok.png | ok |
| 59 | mcp__playwright__browser_click | element=String dialog OK button (FX_sOrderTotal) | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_click | element=Edit menu button | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=Edit > String menu item | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_snapshot | filename=evidence/EXP-083/snapshot-t2-05-global-objects-strings-grid.yml | ok |
| 66 | Grep | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 68 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 69 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-07-edit-string-readback-fx_s-list-after-create.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-07-edit-string-readback-fx_s-list-after-create.png | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_click | element=FX_sCustomerName string row in Strings list (select only) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-08-edit-string-readback-fx_scustomername-value.png | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_click | element=FX_sItemDescription string row in Strings list (select only) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-09-edit-string-readback-fx_sitemdescription-value.png | ok |
| 80 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_click | element=FX_sOrderTotal string row in Strings list (select only) | ok |
| 82 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-083/t2-10-edit-string-readback-fx_sordertotal-value.png | ok |
| 84 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-10-edit-string-readback-fx_sordertotal-value.png | ok |
| 85 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 86 | mcp__playwright__browser_click | element=Global Objects Cancel button | ok |
| 87 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 88 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-01-prompt-string-fx_scustomername-does-not-exist.png | ok |
| 89 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-03-prompt-string-fx_sitemdescription-does-not-exist.png | ok |
| 90 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-05-prompt-string-fx_sordertotal-does-not-exist.png | ok |
| 91 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-08-edit-string-readback-fx_scustomername-value.png | ok |
| 92 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-083\t2-09-edit-string-readback-fx_sitemdescription-value.png | ok |
| 93 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |
| 94 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-083-hello-world-part-5-section-6a-fx-orders-strings-and-runtime-check.md | ok |