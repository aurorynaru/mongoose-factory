# controller-generated audit (not worker prose)

2 actions, 4 reads; prohibited-tool hits=0; errors=0; turns=12; key string (none); exact mismatches=0

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
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t6-01-preflight-wizard-page2-snapshot.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_click | element=Save Template label text (wizard page 2) | ok |
| 6 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t6-02-after-label-click-snapshot.md | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t6-03-after-label-click-viewport.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t6-03-after-label-click-viewport.png | ok |
| 10 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 11 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |