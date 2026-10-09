# controller-generated audit (not worker prose)

4 actions, 10 reads; prohibited-tool hits=0; errors=0; turns=17; key string (none); exact mismatches=0

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
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t2-01-preflight-webclient-viewport.png | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t2-02-preflight-snapshot-boxes.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-01-preflight-webclient-viewport.png | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Close notification (DistributionIFSContactUs portal banner) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t2-03-preflight-after-banner-close.png | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t2-04-preflight-snapshot-after-banner-close.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-03-preflight-after-banner-close.png | ok |
| 11 | Grep | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Designer split button (Open designer in a new window), Web Client toolbar | ok |
| 13 | mcp__playwright__browser_tabs | action=select | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t2-05-designer-snapshot-after-launch.md | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t2-06-designer-launch-viewport.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-06-designer-launch-viewport.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-05-designer-snapshot-after-launch.md | ok |
| 18 | mcp__playwright__browser_click | element=OK button on Identify Your Editing Scope dialog (Scope User) | ok |
| 19 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t2-07-designer-settled-snapshot.md | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t2-08-designer-settled-viewport.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-08-designer-settled-viewport.png | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-preflight-notes.md | ok |
| 24 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-preflight-notes.md | ok |
| 25 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t2-preflight-notes.md | ok |
| 26 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 27 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |