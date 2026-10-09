# controller-generated audit (not worker prose)

2 actions, 4 reads; prohibited-tool hits=0; errors=0; turns=13; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t8-01-preflight-designer-snapshot.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t8-02-preflight-baseline-viewport.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t8-02-preflight-baseline-viewport.png | ok |
| 7 | mcp__playwright__browser_click | element=Button row in Toolbox (Framework Components) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t8-03-button-armed-before-placement-viewport.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t8-03-button-armed-before-placement-viewport.png | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 12 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |