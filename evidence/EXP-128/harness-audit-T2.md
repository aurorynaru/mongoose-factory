# controller-generated audit (not worker prose)

35 actions, 58 reads; prohibited-tool hits=0; errors=4; turns=122; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#4 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e3')\u001b[22m\n\u001b[2m    - locator resolved to <a tabindex=\"0\" role=\"button\" hidefocus=\"on\" id=\"button-1020\" unselectable=\"on\" aria-haspopup=\"true\" aria-owns=\"menu-1021\" componentid=\"button-1020\" class=\"x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-btn-over\">…</a>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, en… (521 chars)","#6 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e3')\u001b[22m\n\u001b[2m    - locator resolved to <a tabindex=\"0\" role=\"button\" hidefocus=\"on\" id=\"button-1020\" unselectable=\"on\" aria-haspopup=\"true\" aria-owns=\"menu-1021\" componentid=\"button-1020\" class=\"x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-btn-over\">…</a>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, en… (521 chars)","#7 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#35 mcp__playwright__browser_snapshot: ### Error\nError: Ref e625 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Form menu button in Designer menu bar | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e3')[22m [2m    - locator resolved to <a tabindex="0" role="button" hidefocus="on" id="button-1020" unselectable="on" aria-haspopup="true" aria-owns="menu-1021" componentid="button-1020" class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-btn-over">…</a>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, en… (521 chars) |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Form menu button in Designer menu bar | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e3')[22m [2m    - locator resolved to <a tabindex="0" role="button" hidefocus="on" id="button-1020" unselectable="on" aria-haspopup="true" aria-owns="menu-1021" componentid="button-1020" class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small x-btn-over">…</a>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, en… (521 chars) |
| 7 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-01-designer-form-menu-timeout-state.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 8 | mcp__playwright__browser_tabs | action=select | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Form menu button in Designer menu bar | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-23T03-18-17-084Z.yml | ok |
| 14 | mcp__playwright__browser_click | element=MockLoginPortal recent-forms entry in Designer Form menu | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-01-designer-mockloginportal-opened.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-01-designer-mockloginportal-opened.png | ok |
| 18 | mcp__playwright__browser_click | element=Expand Panel button of Details panel | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Expand button of Collections property grid | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-02-mockloginportal-details-collections.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-02-mockloginportal-details-collections.png | ok |
| 24 | mcp__playwright__browser_click | element=Primary Collection treeitem in Details Collections | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-03-mockloginportal-primary-collection-props.png | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-03-mockloginportal-primary-collection-props.png | ok |
| 28 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-04-mockloginportal-primary-collection-props-scrolled.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-04-mockloginportal-primary-collection-props-scrolled.png | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Options property group in Primary Collection properties | ok |
| 34 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e625 not found in the current page snapshot. Try capturing new snapshot. |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=Components tab in Details panel | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-05-mockloginportal-components-tree.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-05-mockloginportal-components-tree.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Expand button of Components grid | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-06-mockloginportal-components-expanded.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-06-mockloginportal-components-expanded.png | ok |
| 46 | mcp__playwright__browser_click | element=userControl1_USER row in Components tree | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-07-mockloginportal-usercontrol1-properties.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-07-mockloginportal-usercontrol1-properties.png | ok |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_click | element=Expand all button in Properties toolbar | ok |
| 52 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-08-mockloginportal-usercontrol1-properties-expanded.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-08-mockloginportal-usercontrol1-properties-expanded.png | ok |
| 54 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-09-mockloginportal-usercontrol1-properties-scrolled.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-09-mockloginportal-usercontrol1-properties-scrolled.png | ok |
| 58 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-10-mockloginportal-usercontrol1-properties-bottom.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-10-mockloginportal-usercontrol1-properties-bottom.png | ok |
| 61 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-11-mockloginportal-usercontrol1-properties-miscellaneous.png | ok |
| 63 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-11-mockloginportal-usercontrol1-properties-miscellaneous.png | ok |
| 64 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_click | element=Extension Properties ellipsis button (Miscellaneous) for userControl1_USER | ok |
| 66 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-12-mockloginportal-usercontrol1-extension-properties-dialog.png | ok |
| 67 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-12-mockloginportal-usercontrol1-extension-properties-dialog.png | ok |
| 68 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_click | element=Cancel button of Edit Extension Properties dialog | ok |
| 71 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_click | element=Specific Attributes group under Miscellaneous (expandable) | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-13-mockloginportal-usercontrol1-specific-attributes.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-13-mockloginportal-usercontrol1-specific-attributes.png | ok |
| 75 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-14-mockloginportal-usercontrol1-specific-attributes-expanded.png | ok |
| 77 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-14-mockloginportal-usercontrol1-specific-attributes-expanded.png | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 80 | mcp__playwright__browser_click | element=Ellipsis button of User Control Name row in Specific Attributes | ok |
| 81 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-15-mockloginportal-usercontrol1-user-control-reference-dialog.png | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-15-mockloginportal-usercontrol1-user-control-reference-dialog.png | ok |
| 83 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_click | element=Cancel button of Edit User Control References dialog | ok |
| 86 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 87 | mcp__playwright__browser_click | element=Event Handlers tab in Details panel | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-16-mockloginportal-event-handlers.png | ok |
| 89 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-16-mockloginportal-event-handlers.png | ok |
| 90 | mcp__playwright__browser_click | element=Variables tab in Details panel | ok |
| 91 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-17-mockloginportal-variables.png | ok |
| 92 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-17-mockloginportal-variables.png | ok |
| 93 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 94 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 95 | mcp__playwright__browser_click | element=Expand button of Variables grid | ok |
| 96 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-18-mockloginportal-variables-expanded.png | ok |
| 97 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-18-mockloginportal-variables-expanded.png | ok |
| 98 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 99 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 100 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 101 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 102 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 103 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_click | element=UserCtrl_userControl1_USER form variable row | ok |
| 105 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-19-mockloginportal-form-variable-selected.png | ok |
| 106 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-19-mockloginportal-form-variable-selected.png | ok |
| 107 | mcp__playwright__browser_click | element=UserCtrlAsm_userControl1_USER form variable row | ok |
| 108 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 109 | mcp__playwright__browser_click | element=UserCtrlUrl_userControl1_USER form variable row | ok |
| 110 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-20-mockloginportal-form-variable-urlvar-selected.png | ok |
| 111 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-20-mockloginportal-form-variable-urlvar-selected.png | ok |
| 112 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 113 | mcp__playwright__browser_click | element=closable MockLoginPortal Form-tab close control | ok |
| 114 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 115 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t2-21-designer-after-mockloginportal-close.png | ok |
| 116 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t2-21-designer-after-mockloginportal-close.png | ok |
| 117 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 118 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 119 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 120 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 121 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 122 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |