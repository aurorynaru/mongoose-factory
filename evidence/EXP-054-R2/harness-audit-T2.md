# controller-generated audit (not worker prose)

25 actions, 23 reads; prohibited-tool hits=2; errors=0; turns=85; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_RefreshButton","FX_Refresh","StdFormRefresh"]

Key sequence: [{"order":22,"key":"Enter","result":"ok"},{"order":29,"key":"Escape","result":"ok"},{"order":41,"key":"Enter","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t2-snapshot-00-fresh-start-designer.md | ok |
| 3 | Grep | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=FormCollectionGrid row in Components grid | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-11T06-49-01-937Z.yml | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=FX_ItemEdit row in Components grid | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-01-FX_ItemEdit-caption-C-expression-readonly.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-01-FX_ItemEdit-caption-C-expression-readonly.png | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Button row in Toolbox (Framework Components) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-02-toolbox-Button-armed-before-canvas-click.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-02-toolbox-Button-armed-before-canvas-click.png | ok |
| 15 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-03-after-single-canvas-click-Button-placed-generated-name.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-03-after-single-canvas-click-Button-placed-generated-name.png | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Name value cell of button1_USER in Properties | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_type | element=Name inline editor of button1_USER | ok |
| 22 | mcp__playwright__browser_press_key | key=Enter | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-04-after-Name-commit-FX_RefreshButton.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-04-after-Name-commit-FX_RefreshButton.png | ok |
| 25 | Grep | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Caption value text area (left portion, not dropdown arrow) of button1_USER / FX_RefreshButton | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-05-caption-double-click-check-after-arrow-target.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-05-caption-double-click-check-after-arrow-target.png | ok |
| 29 | mcp__playwright__browser_press_key | key=Escape | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-06-after-Escape-resource-list-closed-caption-state.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-06-after-Escape-resource-list-closed-caption-state.png | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t2-snapshot-caption-editor-check.md | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-07-caption-left-text-double-click-state.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-07-caption-left-text-double-click-state.png | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_type | element=Caption combobox editor of FX_RefreshButton (literal, not resource) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-08-caption-typed-FX_Refresh-before-Enter.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-08-caption-typed-FX_Refresh-before-Enter.png | ok |
| 41 | mcp__playwright__browser_press_key | key=Enter | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-09-caption-FX_Refresh-committed-after-Enter.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-09-caption-FX_Refresh-committed-after-Enter.png | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-11T06-50-25-901Z.yml | ok |
| 46 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-10-events-group-scrolled-into-view-before-primary-edit.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-10-events-group-scrolled-into-view-before-primary-edit.png | ok |
| 49 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-11-primary-dropdown-opened-state.png | ok |
| 51 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-11-primary-dropdown-opened-state.png | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_click | element=Option StdFormRefresh (exact) in Primary event picker | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-12-primary-StdFormRefresh-selected-before-commit-check.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-12-primary-StdFormRefresh-selected-before-commit-check.png | ok |
| 56 | Grep | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=FX_UMCombobox row in Components grid (selection only, to re-read stored values) | ok |
| 58 | Grep | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=FX_RefreshButton row in Components grid (re-select to re-read committed values) | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-13-reselected-FX_RefreshButton-committed-properties-readback.png | ok |
| 61 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-13-reselected-FX_RefreshButton-committed-properties-readback.png | ok |
| 62 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-14-reselected-FX_RefreshButton-Events-Primary-readback.png | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-14-reselected-FX_RefreshButton-Events-Primary-readback.png | ok |
| 65 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-14-reselected-FX_RefreshButton-Events-Primary-readback.png | ok |
| 68 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-14-reselected-FX_RefreshButton-Events-Primary-readback.png | ok |
| 69 | mcp__playwright__browser_snapshot | filename=evidence/EXP-054-R2/t2-snapshot-preservation-check-before-save-NOT-SAVED.md | ok |
| 70 | Grep | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-15-preservation-components-grid-top-after-scroll-up.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-15-preservation-components-grid-top-after-scroll-up.png | ok |
| 75 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 76 | Grep | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-16-preservation-components-grid-Pane00-after-reexpand.png | ok |
| 78 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-16-preservation-components-grid-Pane00-after-reexpand.png | ok |
| 79 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 80 | Grep | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 82 | Grep | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-054-R2/t2-17-final-unsaved-state-Form-tab-Initial-Command-Refresh-NOT-SAVED.png | ok |
| 84 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\t2-17-final-unsaved-state-Form-tab-Initial-Command-Refresh-NOT-SAVED.png | ok |
| 85 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\T2-button-placement-and-configuration-unsaved-report.md | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\T2-button-placement-and-configuration-unsaved-report.md | ok |
| 87 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-054-R2\T2-button-placement-and-configuration-unsaved-report.md | ok |
| 88 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md | ok |
| 89 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md | ok |