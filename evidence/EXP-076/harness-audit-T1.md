# controller-generated audit (not worker prose)

28 actions, 40 reads; prohibited-tool hits=4; errors=2; turns=98; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_HelloWorld01","FX_AddressStatic","FX_AddressEdit","FX_Address","FX_sAddress","Address"]

Key sequence: [{"order":30,"key":"Tab","result":"ok"},{"order":86,"key":"Tab","result":"ok"},{"order":94,"key":"Control+a","result":"ok"},{"order":99,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: ["#4 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#27 mcp__playwright__browser_find: ### Error\nProvide only one of \"text\" or \"regex\", not both."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | Glob | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-041-R3-hello-world-part-1-form-creation-replay.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt5.md | ok |
| 13 | Grep | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_tabs | action=list | ok |
| 15 | mcp__playwright__browser_tabs | action=select | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-01-designer-start-state-before-form-close.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-01-designer-start-state-before-form-close.png | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=closable FX_Orders (Form-tab close control) | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Designer toolbar Open button (accessible name Design) | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-02-select-form-dialog-opened-from-toolbar-open.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-02-select-form-dialog-opened-from-toolbar-open.png | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | error: ### Error Provide only one of "text" or "regex", not both. |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_type | element=Select Form Filter textbox (pre-filled FX_Orders) | ok |
| 30 | mcp__playwright__browser_press_key | key=Tab | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=Select Form row FX_HelloWorld01 (Caption and Name) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-03-fx_helloworld01-designer-opened-identity-user-scope-clean.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-03-fx_helloworld01-designer-opened-identity-user-scope-clean.png | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Details Expand Panel button | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Details tab Components | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-04-components-tab-before-expand.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-04-components-tab-before-expand.png | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 45 | Grep | (no key/element/filename argument) | ok |
| 46 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T12-28-24-203Z.yml | ok |
| 47 | mcp__playwright__browser_click | element=Components row FX_LabelStatic | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_click | element=Components row FX_LabelEdit | ok |
| 51 | Grep | (no key/element/filename argument) | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T12-29-09-028Z.yml | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T12-29-09-028Z.yml | ok |
| 54 | mcp__playwright__browser_click | element=Components row FX_CodeStatic | ok |
| 55 | Grep | (no key/element/filename argument) | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T12-29-21-233Z.yml | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T12-29-21-233Z.yml | ok |
| 58 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-05-baseline-fx_codestatic-properties-caption-check.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-05-baseline-fx_codestatic-properties-caption-check.png | ok |
| 60 | mcp__playwright__browser_click | element=Components row FX_CodeEdit | ok |
| 61 | Grep | (no key/element/filename argument) | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-13T12-29-45-626Z.yml | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=Properties panel Form tab | ok |
| 66 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Form properties Layout group | ok |
| 68 | Grep | (no key/element/filename argument) | ok |
| 69 | Grep | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-06-form-properties-layout-readback.png | ok |
| 71 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-06-form-properties-layout-readback.png | ok |
| 72 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_click | element=Designer Edit menu | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=Edit menu item String | ok |
| 80 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-07-edit-string-view-fx_saddress-absent.png | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-07-edit-string-view-fx_saddress-absent.png | ok |
| 82 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_type | element=Global Objects Strings search textbox | ok |
| 84 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 85 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 86 | mcp__playwright__browser_press_key | key=Tab | ok |
| 87 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 88 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 89 | Grep | (no key/element/filename argument) | ok |
| 90 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 91 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 92 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 93 | mcp__playwright__browser_click | element=Global Objects Strings search textbox | ok |
| 94 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 95 | mcp__playwright__browser_type | element=Global Objects Strings search textbox | ok |
| 96 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 97 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-08-edit-string-view-filter-address-no-fx_saddress.png | ok |
| 98 | mcp__playwright__browser_click | element=Global Objects Strings search textbox | ok |
| 99 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 100 | mcp__playwright__browser_type | element=Global Objects Strings search textbox | ok |
| 101 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-09-edit-string-view-filter-fx_s-list-no-fx_saddress.png | ok |
| 102 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-09-edit-string-view-filter-fx_s-list-no-fx_saddress.png | ok |
| 103 | mcp__playwright__browser_click | element=Global Objects Cancel button | ok |
| 104 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 105 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 106 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-076/t1-10-final-clean-state-after-string-cancel.png | ok |
| 107 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-076\t1-10-final-clean-state-after-string-cancel.png | ok |
| 108 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 109 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |
| 110 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md | ok |