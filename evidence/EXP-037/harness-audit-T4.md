# controller-generated audit (not worker prose)

11 actions, 18 reads; prohibited-tool hits=0; errors=0; turns=56; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","FX_ButtonPromptEvent01","Factory Test Prompt","Factory Test Button"]

Key sequence: [{"order":14,"key":"ArrowRight","result":"ok"}]

Spelled strings: []

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-01-preflight-designer-snapshot.md | ok |
| 3 | mcp__playwright__browser_tabs | action=select | ok |
| 4 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-02-designer-current-snapshot.md | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-02-designer-current-snapshot.md | ok |
| 7 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-03-designer-current-viewport.png | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-03-designer-current-viewport.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-02-designer-current-snapshot.md | ok |
| 10 | mcp__playwright__browser_click | element=Events property group treeitem in Component property grid | ok |
| 11 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-04-events-expanded-snapshot.md | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-04-events-expanded-snapshot.md | ok |
| 14 | mcp__playwright__browser_press_key | key=ArrowRight | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-05-events-after-arrowright-viewport.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-05-events-after-arrowright-viewport.png | ok |
| 17 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-06-after-arrowright-snapshot.md | ok |
| 18 | Grep | (no key/element/filename argument) | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-06-after-arrowright-snapshot.md | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-06-after-arrowright-snapshot.md | ok |
| 21 | mcp__playwright__browser_click | element=Property toolbar view button (plus icon, expand all groups; unnamed) | ok |
| 22 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-07-after-expand-all-snapshot.md | ok |
| 23 | Grep | (no key/element/filename argument) | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-07-after-expand-all-snapshot.md | ok |
| 25 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-08-events-expanded-primary-viewport.png | ok |
| 26 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-08-events-expanded-primary-viewport.png | ok |
| 27 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-09-events-scrolled-primary-viewport.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-09-events-scrolled-primary-viewport.png | ok |
| 31 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-10-pre-eventhandlers-snapshot.md | ok |
| 32 | Grep | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Event Handlers tab in Details panel | ok |
| 34 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-11-event-handlers-tab-snapshot.md | ok |
| 35 | Grep | (no key/element/filename argument) | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-11-event-handlers-tab-snapshot.md | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-12-event-handlers-tab-viewport.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-12-event-handlers-tab-viewport.png | ok |
| 39 | Grep | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Form tab in Properties panel bottom | ok |
| 41 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-13-form-tab-event-handlers-viewport.png | ok |
| 42 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-13-form-tab-event-handlers-viewport.png | ok |
| 43 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-14-form-tab-pre-layout-snapshot.md | ok |
| 44 | Grep | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=Expand button in Form properties toolbar | ok |
| 46 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-15-form-tab-expanded-snapshot.md | ok |
| 47 | Grep | (no key/element/filename argument) | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-15-form-tab-expanded-snapshot.md | ok |
| 49 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t4-16-form-layout-scrolled-viewport.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-16-form-layout-scrolled-viewport.png | ok |
| 53 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t4-17-final-readonly-snapshot.md | ok |
| 54 | Grep | (no key/element/filename argument) | ok |
| 55 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t4-inventory-notes.md | ok |
| 56 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |
| 57 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |