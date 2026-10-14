# controller-generated audit (not worker prose)

18 actions, 30 reads; prohibited-tool hits=1; errors=0; turns=50; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_CustomerID","%1,%2","True","IDO Collection","FX_HelloWorld01","FX_Code","FX_Label","FX_Address"]

Key sequence: [{"order":22,"key":"Tab","result":"ok"},{"order":39,"key":"Tab","result":"ok"},{"order":52,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-00-gate-inherited-FX_CustomerID-before-Validators.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t2-08-property-sheet-validation-expanded.png | ok |
| 7 | mcp__playwright__browser_click | element=Validators Open Edit Property Dialog ellipsis | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-01-validators-editor-layout-empty-before-Add.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-01-validators-editor-layout-empty-before-Add.png | ok |
| 12 | mcp__playwright__browser_click | element=Add (+) button, leftmost in Validators editor toolbar | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-02-validators-plus-opened-New-name-prompt-cancelled.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-01-validators-editor-layout-empty-before-Add.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-02-validators-plus-opened-New-name-prompt-cancelled.png | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Dropdown arrow of New prompt Name combobox (view only) | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=FX_CustomerID option in validator picker list | ok |
| 22 | mcp__playwright__browser_press_key | key=Tab | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-03-add-validator-picker-FX_CustomerID-before-OK.png | ok |
| 25 | mcp__playwright__browser_click | element=OK button of validator picker prompt (FX_CustomerID selected) | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=FX_CustomerID row cell in Validators editor grid | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-04-validators-editor-FX_CustomerID-row-selected.png | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-04-validators-editor-FX_CustomerID-row-selected.png | ok |
| 31 | mcp__playwright__browser_hover | element=Cube-icon button, bottom toolbar of Validators editor (candidate Parameters) | ok |
| 32 | mcp__playwright__browser_click | element=Cube-icon button, bottom toolbar of Validators editor (Parameters control, once) | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-05-validator-Parameters-dialog-initial-layout.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-05-validator-Parameters-dialog-initial-layout.png | ok |
| 37 | mcp__playwright__browser_click | element=Parameters text box (empty, top field) | ok |
| 38 | mcp__playwright__browser_type | element=Parameters text box | ok |
| 39 | mcp__playwright__browser_press_key | key=Tab | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-06-validator-Parameters-%1-%2-before-OK.png | ok |
| 42 | mcp__playwright__browser_click | element=OK button of validator Parameters dialog | ok |
| 43 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-07-validators-editor-FX_CustomerID-%1-%2-before-OK.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-07-validators-editor-FX_CustomerID-%1-%2-before-OK.png | ok |
| 46 | mcp__playwright__browser_click | element=OK button of Validators editor (once) | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Validate Immediately dropdown arrow | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=True option in Validate Immediately dropdown | ok |
| 52 | mcp__playwright__browser_press_key | key=Tab | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-088/t3-08-validate-immediately-True-after-Tab.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-088\t3-08-validate-immediately-True-after-Tab.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md | ok |
| 58 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md | ok |