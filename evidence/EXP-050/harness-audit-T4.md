# controller-generated audit (not worker prose)

14 actions, 22 reads; prohibited-tool hits=2; errors=0; turns=45; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_Item","FX_Description","FX_Cost","FX_UM","FX_UMs","FX_sItem","FX_sCost","Item","Cost"]

Key sequence: [{"order":16,"key":"Control+a","result":"ok"},{"order":18,"key":"Tab","result":"ok"},{"order":32,"key":"Control+a","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-01-pre-mutation-designer-FX_Items-state.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-01-pre-mutation-designer-FX_Items-state.png | ok |
| 5 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Properties Caption ellipsis button (FX_ItemStatic) | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-02-caption-prompt-String-FX_sItem-does-not-exist.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-02-caption-prompt-String-FX_sItem-does-not-exist.png | ok |
| 10 | mcp__playwright__browser_click | element=Prompt Yes button (single answer for FX_sItem) | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-03-String-dialog-FX_sItem-default-value-before-edit.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-03-String-dialog-FX_sItem-default-value-before-edit.png | ok |
| 14 | mcp__playwright__browser_click | element=String dialog String Value cell (FX_sItem) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 17 | mcp__playwright__browser_type | element=String Value editor (active, FX_sItem) | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-04-String-dialog-FX_sItem-value-Item-committed-before-OK.png | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-04-String-dialog-FX_sItem-value-Item-committed-before-OK.png | ok |
| 22 | mcp__playwright__browser_click | element=String dialog OK button (FX_sItem, once) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-05-after-String-OK-FX_sItem-designer-state.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-05-after-String-OK-FX_sItem-designer-state.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Designer Edit menu | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Edit menu String item | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Global Objects Strings filter textbox | ok |
| 32 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 33 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 34 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Global Objects Strings row FX_sItem | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-06-Edit-String-readonly-FX_sItem-value-Item.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-06-Edit-String-readonly-FX_sItem-value-Item.png | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Global Objects Cancel button (no changes) | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-050/t4-07-after-Global-Objects-cancel-canvas-and-save-state.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-050\t4-07-after-Global-Objects-cancel-canvas-and-save-state.png | ok |
| 43 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T4-FX_sItem-caption-report.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-050\T4-FX_sItem-caption-report.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |