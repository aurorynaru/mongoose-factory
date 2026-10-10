# controller-generated audit (not worker prose)

25 actions, 42 reads; prohibited-tool hits=2; errors=0; turns=74; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_UMs","FX_sItem","FX_sCost","Item","Cost"]

Key sequence: [{"order":12,"key":"Control+a","result":"ok"},{"order":17,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T2-wizard-preparation-report.md | ok |
| 3 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-01-pre-finish-wizard-final-page-state.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-01-pre-finish-wizard-final-page-state.png | ok |
| 7 | mcp__playwright__browser_tabs | action=select | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Web Client toolbar Open button | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 12 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 13 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 14 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 17 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 18 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 19 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Select Form Cancel button | ok |
| 22 | mcp__playwright__browser_tabs | action=select | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-02-designer-wizard-final-page-after-collision-recheck.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-02-designer-wizard-final-page-after-collision-recheck.png | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Wizard Finish button (single invocation) | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-03-finish-completion-notice-Process-Completed-Successfully.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-03-finish-completion-notice-Process-Completed-Successfully.png | ok |
| 31 | mcp__playwright__browser_click | element=Completion notice OK button (single acknowledgement) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-04-post-finish-FX_Items-designer-result-save-disabled.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-04-post-finish-FX_Items-designer-result-save-disabled.png | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Details panel Expand Panel control | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-05-components-grid-expanded-readonly.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-05-components-grid-expanded-readonly.png | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-06-components-grid-scrolled-to-FX_UM-rows.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-06-components-grid-scrolled-to-FX_UM-rows.png | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Components row FX_UMStatic (name cell) | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-07-component-FX_UMStatic-selected-caption-readonly.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-07-component-FX_UMStatic-selected-caption-readonly.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Components row FX_CostStatic (name cell) | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=Components row FX_DescriptionStatic (name cell) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=Components row FX_ItemStatic (name cell) | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_tabs | action=select | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_click | element=Web Client toolbar Open button | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t3-08-select-form-post-creation-inventory-FX_Items-one-row.png | ok |
| 73 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t3-08-select-form-post-creation-inventory-FX_Items-one-row.png | ok |
| 74 | mcp__playwright__browser_click | element=Select Form Cancel button (no Form opened) | ok |
| 75 | mcp__playwright__browser_tabs | action=select | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T3-form-creation-report.md | ok |
| 78 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 79 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 80 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |