# controller-generated audit (not worker prose)

16 actions, 17 reads; prohibited-tool hits=1; errors=1; turns=44; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_Address","FX_sAddress","fxhw.FX_Address","FX_Code","FX_Label"]

Key sequence: [{"order":22,"key":"Tab","result":"ok"},{"order":25,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#46 Edit: <tool_use_error>String to replace not found in file.\nString: **Earlier status (after T3, 2026-10-13; one Check Out</tool_use_error>"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Close Panel IDOs (Form-tab control, clean IDOs Form, FX_HelloWorld01) | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Form menu (toolbar navigation) | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu > Open item | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Select Form row Caption IDOs / Name IdoCollections | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-01-select-form-idos-row-selected-before-ok.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-01-select-form-idos-row-selected-before-ok.png | ok |
| 13 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Filter By dropdown option "Name" (current value, closes list by selection without change) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-02-select-form-after-misclick-recovery-filter-by-name-before-ok.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-02-select-form-after-misclick-recovery-filter-by-name-before-ok.png | ok |
| 19 | mcp__playwright__browser_click | element=Select Form OK button (dialog toolbar) | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_type | element=IDO Name criterion textbox (Filter in Place, IDOs Form) | ok |
| 22 | mcp__playwright__browser_press_key | key=Tab | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-03-pre-f4-idos-fx-helloworld01-criterion-visible-recovery.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-03-pre-f4-idos-fx-helloworld01-criterion-visible-recovery.png | ok |
| 25 | mcp__playwright__browser_press_key | key=F4 | ok |
| 26 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-04-recovered-identity-checkout-state-after-f4.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-04-recovered-identity-checkout-state-after-f4.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Properties sub-tab in recovered IDOs Form (view only) | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-05-recovered-properties-left-columns-top.png | ok |
| 36 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-06-recovered-properties-right-columns-bottom-fx-address.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-06-recovered-properties-right-columns-bottom-fx-address.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-05-recovered-properties-left-columns-top.png | ok |
| 41 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-075/t4-07-recovered-properties-right-columns-top-rows-1-2.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-075\t4-07-recovered-properties-right-columns-top-rows-1-2.png | ok |
| 44 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-075\T4-report.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-075\T4-report.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | error: <tool_use_error>String to replace not found in file. String: **Earlier status (after T3, 2026-10-13; one Check Out</tool_use_error> |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |