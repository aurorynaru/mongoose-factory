# controller-generated audit (not worker prose)

18 actions, 36 reads; prohibited-tool hits=0; errors=0; turns=58; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CustomerIDCombobox","FX_CustomerIDGridCol","FX_CustomerID","FX_CusName,FX_CusAddress","FX002","Factory test two","2 Factory Street","FX001","Factory test one","1 Factory Street"]

Key sequence: [{"order":24,"key":"F4","result":"ok"},{"order":54,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-089/t5-00-webclient-fresh-snapshot-start.yml | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-01-runtime-start-state-before-close.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-01-runtime-start-state-before-close.png | ok |
| 7 | mcp__playwright__browser_click | element=Close Panel FX_Orders (runtime tab close control) | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-02-runtime-after-first-close-clean.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-02-runtime-after-first-close-clean.png | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Form menu (runtime) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Form > Open menu item (runtime) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-03-select-form-picker-FX_Orders-before-ok.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-03-select-form-picker-FX_Orders-before-ok.png | ok |
| 18 | mcp__playwright__browser_click | element=Select Form OK button (runtime FX_Orders reopen) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-04-runtime-reopened-add-mode-before-fip.png | ok |
| 21 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button (runtime) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-05-runtime-filter-in-place-blank-criteria-before-F4.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-05-runtime-filter-in-place-blank-criteria-before-F4.png | ok |
| 24 | mcp__playwright__browser_press_key | key=F4 | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-06-runtime-baseline-after-F4-order1-pre-change.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-06-runtime-baseline-after-F4-order1-pre-change.png | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-07-customer-id-dropdown-open-columns-rows.png | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-07-customer-id-dropdown-open-columns-rows.png | ok |
| 33 | mcp__playwright__browser_click | element=FX002 option in Customer ID drop-down list (runtime) | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-08-detail-view-after-FX002-chosen-before-any-save.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-08-detail-view-after-FX002-chosen-before-any-save.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Close Panel FX_Orders (runtime tab close control, dirty) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-09-save-prompt-before-answering.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-09-save-prompt-before-answering.png | ok |
| 42 | mcp__playwright__browser_click | element=No button on save prompt (discard, answered once) | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-10-runtime-after-No-closed-discard.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-10-runtime-after-No-closed-discard.png | ok |
| 46 | mcp__playwright__browser_click | element=Form menu (runtime, reopen after discard) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Form > Open menu item (runtime, reopen) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Select Form OK button (reopen after discard) | ok |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-11-reopened-add-mode-after-discard.png | ok |
| 53 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button (reopen after discard) | ok |
| 54 | mcp__playwright__browser_press_key | key=F4 | ok |
| 55 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-12-reopened-after-discard-order1-after-F4.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-12-reopened-after-discard-order1-after-F4.png | ok |
| 58 | mcp__playwright__browser_click | element=Order 2 row-number cell (runtime grid, reopened) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-13-reopened-after-discard-order2-detail.png | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\t5-13-reopened-after-discard-order2-detail.png | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=Close Panel FX_Orders (runtime final close, clean) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-089/t5-14-runtime-final-clean-close.png | ok |
| 66 | Glob | (no key/element/filename argument) | ok |
| 67 | Grep | (no key/element/filename argument) | ok |
| 68 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-089\harness-audit-T4.md | ok |
| 69 | Grep | (no key/element/filename argument) | ok |
| 70 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 71 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 72 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |
| 73 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-089-hello-world-part-5-section-10-apply-fx-customerid-component-class.md | ok |