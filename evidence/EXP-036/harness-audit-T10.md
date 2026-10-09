# controller-generated audit (not worker prose)

5 actions, 10 reads; prohibited-tool hits=1; errors=0; turns=15; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t10-01-preflight-snapshot.md | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t10-02-preflight-viewport.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t10-02-preflight-viewport.png | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t10-03-after-caption-dblclick-viewport.png | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t10-04-after-caption-dblclick-snapshot.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t10-03-after-caption-dblclick-viewport.png | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_type | element=Caption editor (active combobox, Design property grid) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t10-05-post-caption-commit-viewport.png | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t10-06-post-caption-commit-snapshot.md | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t10-05-post-caption-commit-viewport.png | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t10-06-post-caption-commit-snapshot.md | ok |
| 18 | mcp__playwright__browser_click | element=Save toolbar button (Designer) | ok |
| 19 | mcp__playwright__browser_network_requests | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t10-07-after-save-viewport.png | ok |
| 21 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t10-08-after-save-snapshot.md | ok |
| 22 | mcp__playwright__browser_network_request | (no key/element/filename argument) | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t10-07-after-save-viewport.png | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 26 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |