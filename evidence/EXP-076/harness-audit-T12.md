# controller-generated audit (not worker prose)

9 actions, 18 reads; prohibited-tool hits=1; errors=0; turns=33; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":15,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t12-01-webclient-state-before-runtime-open.png | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t12-01-webclient-state-before-runtime-open.png | ok |
| 8 | mcp__playwright__browser_click | element=Web Client Form menu (top navigation in iframe) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Form menu > Open | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t12-02-form-menu-open-submenu-before-select-form.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t12-02-form-menu-open-submenu-before-select-form.png | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_type | element=Select Form Filter textbox (active; prefilled IdoCollections) | ok |
| 15 | mcp__playwright__browser_press_key | key=Tab | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t12-03-select-form-filter-fx_helloworld01-committed-before-row.png | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Select Form row FX_HelloWorld01 (single click) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Select Form OK button (once) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t12-04-runtime-fx_helloworld01-opened-identity-before-refresh.png | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t12-04-runtime-fx_helloworld01-opened-identity-before-refresh.png | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=Runtime toolbar Refresh button (invoked once) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t12-05-runtime-after-single-refresh-state.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t12-05-runtime-after-single-refresh-state.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Runtime grid row header for record 2 (read-only navigation) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t12-06-runtime-record-2-navigated-fx002-address-presentation.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t12-06-runtime-record-2-navigated-fx002-address-presentation.png | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | Glob | (no key/element/filename argument) | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t12-03-select-form-filter-fx_helloworld01-committed-before-row.png | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\harness-audit-T1.md | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\harness-audit-T11.md | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | Grep | (no key/element/filename argument) | ok |
| 46 | Grep | (no key/element/filename argument) | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | Grep | (no key/element/filename argument) | ok |
| 49 | Grep | (no key/element/filename argument) | ok |
| 50 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-076\T12-final-acceptance-report.md | ok |
| 51 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-076\T12-final-acceptance-report.md | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-076\T12-final-acceptance-report.md | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-076\T12-final-acceptance-report.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-076\T12-final-acceptance-report.md | ok |
| 55 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 57 | Grep | (no key/element/filename argument) | ok |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |