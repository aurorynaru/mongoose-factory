# controller-generated audit (not worker prose)

7 actions, 15 reads; prohibited-tool hits=1; errors=0; turns=41; key string "F" [EXACT MISMATCH]; exact mismatches=1

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","Factory Test Button"]

Key sequence: [{"order":28,"key":"Escape","result":"ok"},{"order":34,"key":"F","result":"ok"}]

Spelled strings: [{"text":"F","orders":[34],"allOk":true,"exactMatch":false,"matchingValues":[]}]

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-01-preflight-designer-snapshot.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-02-preplacement-armed-viewport.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-02-preplacement-armed-viewport.png | ok |
| 7 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-03-after-placement-click-viewport.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-03-after-placement-click-viewport.png | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-04-after-placement-snapshot.md | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-04-after-placement-snapshot.md | ok |
| 13 | mcp__playwright__browser_click | element=Name value cell in Design property grid (button1_USER) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-05-name-editor-open-viewport.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-05-name-editor-open-viewport.png | ok |
| 16 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-06-name-editor-snapshot.md | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=Name inline editor (active textbox with button1_USER) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-07-after-name-commit-viewport.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-07-after-name-commit-viewport.png | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-08-pre-caption-snapshot.md | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Caption value cell in Design property grid (empty; not the string picker button) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-09-after-caption-dblclick-viewport.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-09-after-caption-dblclick-viewport.png | ok |
| 26 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-10-caption-dropdown-open-snapshot.md | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_press_key | key=Escape | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-11-after-escape-viewport.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-11-after-escape-viewport.png | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-12-caption-focused-snapshot.md | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-12-caption-focused-snapshot.md | ok |
| 34 | mcp__playwright__browser_press_key | key=F | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t9-13-caption-first-char-viewport.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t9-13-caption-first-char-viewport.png | ok |
| 37 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t9-14-settled-state-snapshot.md | ok |
| 38 | Grep | (no key/element/filename argument) | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |