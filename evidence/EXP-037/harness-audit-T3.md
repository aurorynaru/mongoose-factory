# controller-generated audit (not worker prose)

7 actions, 12 reads; prohibited-tool hits=0; errors=0; turns=32; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","FX_ButtonPromptEvent01","Factory Test Prompt","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-01-preflight-designer-snapshot.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-02-designer-preflight-snapshot.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Form menu in Designer top bar | ok |
| 7 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-03-form-menu-open-snapshot.md | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t3-04-form-menu-recent-list-viewport.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-04-form-menu-recent-list-viewport.png | ok |
| 11 | mcp__playwright__browser_click | element=FX_SingleButtonLab01 entry in Form menu recent-forms list | ok |
| 12 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-05-after-recent-select-snapshot.md | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-05-after-recent-select-snapshot.md | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t3-06-form-opened-viewport.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-06-form-opened-viewport.png | ok |
| 16 | mcp__playwright__browser_click | element=Expand Panel button of Details panel | ok |
| 17 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-07-details-expanded-snapshot.md | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Components tab in Details panel | ok |
| 20 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-08-components-tab-snapshot.md | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Expand button in Components grid toolbar | ok |
| 23 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-09-components-expanded-snapshot.md | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-09-components-expanded-snapshot.md | ok |
| 25 | mcp__playwright__browser_click | element=FX_SingleButton01 treeitem in Components grid | ok |
| 26 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t3-10-button-selected-snapshot.md | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-10-button-selected-snapshot.md | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t3-11-button-selected-property-grid-viewport.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-11-button-selected-property-grid-viewport.png | ok |
| 30 | Grep | (no key/element/filename argument) | ok |
| 31 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t3-baseline-notes.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |