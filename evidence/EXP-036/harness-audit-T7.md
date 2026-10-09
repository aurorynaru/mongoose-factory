# controller-generated audit (not worker prose)

5 actions, 9 reads; prohibited-tool hits=0; errors=0; turns=31; key string (none); exact mismatches=0

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
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t7-01-preflight-wizard-page2-snapshot.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t7-02-preflight-before-finish-viewport.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-02-preflight-before-finish-viewport.png | ok |
| 7 | mcp__playwright__browser_click | element=Finish button (wizard page 2) | ok |
| 8 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t7-03-after-finish-snapshot.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-03-after-finish-snapshot.md | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-03-after-finish-snapshot.md | ok |
| 12 | mcp__playwright__browser_click | element=OK button (Process Completed Successfully alert) | ok |
| 13 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t7-04-form-created-snapshot.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-04-form-created-snapshot.md | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t7-05-form-created-viewport.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-05-form-created-viewport.png | ok |
| 18 | mcp__playwright__browser_click | element=Expand Panel button (Details panel) | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t7-06-details-expanded-baseline-snapshot.md | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-06-details-expanded-baseline-snapshot.md | ok |
| 22 | mcp__playwright__browser_click | element=Components tab (Details panel) | ok |
| 23 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t7-07-components-tab-baseline-snapshot.md | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-07-components-tab-baseline-snapshot.md | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t7-08-components-baseline-viewport.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t7-08-components-baseline-viewport.png | ok |
| 28 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 29 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 30 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |