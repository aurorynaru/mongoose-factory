# controller-generated audit (not worker prose)

43 actions, 58 reads; prohibited-tool hits=0; errors=7; turns=113; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#60 mcp__playwright__browser_click: ### Error\nError: Ref e1731 not found in the current page snapshot. Try capturing new snapshot.","#64 mcp__playwright__browser_click: ### Error\nError: Ref e1736 not found in the current page snapshot. Try capturing new snapshot.","#68 mcp__playwright__browser_click: ### Error\nError: Ref e1741 not found in the current page snapshot. Try capturing new snapshot.","#72 mcp__playwright__browser_click: ### Error\nError: Ref e1746 not found in the current page snapshot. Try capturing new snapshot.","#73 mcp__playwright__browser_click: ### Error\nError: Ref e5 not found in the current page snapshot. Try capturing new snapshot.","#74 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1 not found in the current page snapshot. Try capturing new snapshot.","#78 mcp__playwright__browser_click: ### Error\nError: Ref e5 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 4 | mcp__playwright__browser_tabs | action=list | ok |
| 5 | mcp__playwright__browser_tabs | action=select | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Form menu button | ok |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=MockInventoryDashboard recent Form entry | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Details Expand Panel button | ok |
| 12 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=userControl1_USER tree row in Components | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Data Source property group in Properties | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Properties toolbar Expand all button | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-02-mockinventorydashboard-usercontrol-properties.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-02-mockinventorydashboard-usercontrol-properties.png | ok |
| 25 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Specific Attributes row in Properties | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-03-usercontrol-specific-attributes-row.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-03-usercontrol-specific-attributes-row.png | ok |
| 32 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-04-specific-attributes-after-coordinate-click.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-04-specific-attributes-after-coordinate-click.png | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=User Control Name ellipsis button | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-05-dashboard-user-control-references-dialog.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-05-dashboard-user-control-references-dialog.png | ok |
| 41 | mcp__playwright__browser_click | element=Edit User Control References Cancel button | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_click | element=Details Event Handlers tab | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-06-dashboard-event-handlers.png | ok |
| 47 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-06-dashboard-event-handlers.png | ok |
| 48 | mcp__playwright__browser_click | element=Event Handlers grid Expand button | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-07-dashboard-event-handlers-expanded.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-07-dashboard-event-handlers-expanded.png | ok |
| 51 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Details Variables tab | ok |
| 53 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_click | element=Variables grid Expand button | ok |
| 55 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-08-dashboard-variables-form-persistent.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-08-dashboard-variables-form-persistent.png | ok |
| 58 | mcp__playwright__browser_click | element=fds_SC2 variable row | ok |
| 59 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_click | element=InitialCommand variable row | error: ### Error Error: Ref e1731 not found in the current page snapshot. Try capturing new snapshot. |
| 61 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_click | element=InitialCommand variable row | ok |
| 63 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=UserCtrl_userControl1_USER variable row | error: ### Error Error: Ref e1736 not found in the current page snapshot. Try capturing new snapshot. |
| 65 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=UserCtrl_userControl1_USER variable row | ok |
| 67 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_click | element=UserCtrlAsm_userControl1_USER variable row | error: ### Error Error: Ref e1741 not found in the current page snapshot. Try capturing new snapshot. |
| 69 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_click | element=UserCtrlAsm_userControl1_USER variable row | ok |
| 71 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_click | element=UserCtrlUrl_userControl1_USER variable row | error: ### Error Error: Ref e1746 not found in the current page snapshot. Try capturing new snapshot. |
| 73 | mcp__playwright__browser_click | element=Designer Edit menu button | error: ### Error Error: Ref e5 not found in the current page snapshot. Try capturing new snapshot. |
| 74 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1 not found in the current page snapshot. Try capturing new snapshot. |
| 75 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=UserCtrlUrl_userControl1_USER variable row | ok |
| 77 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_click | element=Designer Edit menu button | error: ### Error Error: Ref e5 not found in the current page snapshot. Try capturing new snapshot. |
| 79 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_click | element=Designer Edit menu button | ok |
| 81 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_click | element=Form Script menu item | ok |
| 84 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t6-09-dashboard-form-script-editor-open.png | ok |
| 85 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-09-dashboard-form-script-editor-open.png | ok |
| 86 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 89 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 90 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 91 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 92 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 94 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 96 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 97 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 98 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 99 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 101 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 102 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 103 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 105 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockInventoryDashboard-form-script.cs.txt | ok |
| 106 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockInventoryDashboard-form-script.cs.txt | ok |
| 107 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t6-10-dashboard-form-script-editor-tail.png | ok |
| 108 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 109 | mcp__playwright__browser_click | element=Cancel button of the Script Editor | ok |
| 110 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 111 | mcp__playwright__browser_click | element=closable MockInventoryDashboard Form-tab close control | ok |
| 112 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 113 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 114 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 115 | Grep | (no key/element/filename argument) | ok |
| 116 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 117 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t6-10-dashboard-form-script-editor-tail.png | ok |
| 118 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 119 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |