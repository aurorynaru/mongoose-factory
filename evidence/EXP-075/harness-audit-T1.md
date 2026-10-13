# controller-generated audit (not worker prose)

15 actions, 14 reads; prohibited-tool hits=2; errors=0; turns=49; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_Address","FX_sAddress","fxhw.FX_Address","FX_Code","FX_Label"]

Key sequence: [{"order":27,"key":"Tab","result":"ok"},{"order":35,"key":"Tab","result":"ok"},{"order":38,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-074-hello-world-part-5-prereq-a-fx-address-column.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md | ok |
| 8 | Glob | (no key/element/filename argument) | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt1.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt5.md | ok |
| 11 | mcp__playwright__browser_tabs | action=list | ok |
| 12 | mcp__playwright__browser_tabs | action=select | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=IDOs tab heading (Form-tab, view only) | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T11-53-32-804Z.yml | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t1-01-idos-tab-clean-before-close.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t1-01-idos-tab-clean-before-close.png | ok |
| 18 | mcp__playwright__browser_click | element=Close Panel IDOs (Form-tab control, clean IDOs Form) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Form menu (toolbar navigation) | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Form menu > Open item | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | Grep | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 27 | mcp__playwright__browser_press_key | key=Tab | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Select Form row Caption IDOs / Name IdoCollections | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t1-02-select-form-dialog-idos-row-selected.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t1-02-select-form-dialog-idos-row-selected.png | ok |
| 32 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_type | element=IDO Name criterion textbox (Filter in Place) | ok |
| 35 | mcp__playwright__browser_press_key | key=Tab | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t1-03-pre-f4-idos-fx-helloworld01-criterion-visible.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t1-03-pre-f4-idos-fx-helloworld01-criterion-visible.png | ok |
| 38 | mcp__playwright__browser_press_key | key=F4 | ok |
| 39 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t1-04-post-f4-idos-one-fx-helloworld01-identity.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t1-04-post-f4-idos-one-fx-helloworld01-identity.png | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Properties sub-tab in IDOs Form (view only) | ok |
| 46 | Grep | (no key/element/filename argument) | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t1-05-baseline-properties-inventory.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t1-05-baseline-properties-inventory.png | ok |
| 50 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t1-06-baseline-properties-inventory-scrolled-end.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t1-06-baseline-properties-inventory-scrolled-end.png | ok |
| 54 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |