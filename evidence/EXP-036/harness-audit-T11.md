# controller-generated audit (not worker prose)

9 actions, 15 reads; prohibited-tool hits=0; errors=1; turns=32; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#1 mcp__playwright__browser_tabs: ### Error\nError: Tab 1 not found"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=select | error: ### Error Error: Tab 1 not found |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-01-preclose-snapshot.md | ok |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t11-02-preclose-viewport.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-02-preclose-viewport.png | ok |
| 7 | Grep | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=closable FX_SingleButtonLab01 Form-tab close control | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t11-03-after-close-viewport.png | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-04-after-close-snapshot.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-03-after-close-viewport.png | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Form menu in Designer top bar | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-05-form-menu-open-snapshot.md | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=FX_SingleButtonLab01 recent-forms menu item | ok |
| 17 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-06-post-reopen-snapshot.md | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t11-07-post-reopen-viewport.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-07-post-reopen-viewport.png | ok |
| 20 | Grep | (no key/element/filename argument) | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Expand Panel button (Details panel) | ok |
| 23 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-08-details-expanded-snapshot.md | ok |
| 24 | Grep | (no key/element/filename argument) | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-08-details-expanded-snapshot.md | ok |
| 26 | mcp__playwright__browser_click | element=Components tab (Details panel) | ok |
| 27 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-09-components-tab-post-reopen-snapshot.md | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t11-10-components-tab-post-reopen-viewport.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-10-components-tab-post-reopen-viewport.png | ok |
| 30 | Grep | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Expand button (Components grid toolbar) | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-11-components-expanded-snapshot.md | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t11-12-components-expanded-viewport.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-12-components-expanded-viewport.png | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | Grep | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=FX_SingleButton01 row in Components grid | ok |
| 38 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t11-13-button-selected-snapshot.md | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t11-14-button-selected-property-grid-viewport.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-14-button-selected-property-grid-viewport.png | ok |
| 41 | Grep | (no key/element/filename argument) | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t11-13-button-selected-snapshot.md | ok |
| 43 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-single-button-caption-recovery-across-ordinary-des.md | ok |