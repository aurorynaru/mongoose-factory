# controller-generated audit (not worker prose)

9 actions, 20 reads; prohibited-tool hits=0; errors=0; turns=47; key string (none); exact mismatches=0

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
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-01-preflight-snapshot.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-02-designer-formless-snapshot.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Form menu in Designer top bar | ok |
| 8 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-03-form-menu-open-snapshot.md | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=FX_SingleButtonLab01 entry in Form menu recent-forms list | ok |
| 11 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-04-post-reopen-snapshot.md | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t9-05-post-reopen-viewport.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-05-post-reopen-viewport.png | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Expand Panel button of Details panel (view-only) | ok |
| 17 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-06-details-expanded-snapshot.md | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Event Handlers tab in Details panel (view-only) | ok |
| 20 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-07-event-handlers-recovered-snapshot.md | ok |
| 21 | Grep | (no key/element/filename argument) | ok |
| 22 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-07-event-handlers-recovered-snapshot.md | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t9-08-event-handlers-recovered-viewport.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-08-event-handlers-recovered-viewport.png | ok |
| 25 | mcp__playwright__browser_click | element=FX_ButtonPromptEvent01 handler group row in Event Handlers list (expand, view-only) | ok |
| 26 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-09-after-group-click-snapshot.md | ok |
| 27 | Grep | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t9-10-event-handlers-expanded-viewport.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-10-event-handlers-expanded-viewport.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Components tab in Details panel (view-only) | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-11-components-recovered-snapshot.md | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-11-components-recovered-snapshot.md | ok |
| 35 | mcp__playwright__browser_click | element=Expand button in Components grid toolbar (view-only) | ok |
| 36 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-12-components-expanded-snapshot.md | ok |
| 37 | Grep | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=FX_SingleButton01 treeitem in Components grid (selection only) | ok |
| 39 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-13-button-selected-snapshot.md | ok |
| 40 | Grep | (no key/element/filename argument) | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-13-button-selected-snapshot.md | ok |
| 42 | Grep | (no key/element/filename argument) | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-13-button-selected-snapshot.md | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t9-14-button-recovered-viewport.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-14-button-recovered-viewport.png | ok |
| 46 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t9-15-final-readonly-snapshot.md | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t9-reopen-verification-notes.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |