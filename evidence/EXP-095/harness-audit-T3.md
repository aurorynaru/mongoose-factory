# controller-generated audit (not worker prose)

12 actions, 22 reads; prohibited-tool hits=0; errors=1; turns=46; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Orders","FX_CalcOrderTotal","CalcOrderTotal","Form Script Method","P(FX_Count),P(FX_ItmsCost)","FX_ItemCombobox","FX_CountEdit","135.00","20.97","FX001","FX002","dumbbell","eggs"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#6 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e253')\u001b[22m\n\u001b[2m    - locator resolved to <div tabindex=\"-1\" role=\"columnheader\" id=\"rownumberer-1912\" componentid=\"rownumberer-1912\" class=\"x-column-header mg-rownumberer x-column-header-align-left x-box-item x-column-header-default x-unselectable x-column-header-first x-column-header-last\">…</div>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    2 × waiting for element to … (1731 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-pre-close-gate-designer-clean.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-pre-close-gate-designer-clean.png | ok |
| 6 | mcp__playwright__browser_click | element=FX_Orders Form-tab close control (closable FX_Orders) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e253')[22m [2m    - locator resolved to <div tabindex="-1" role="columnheader" id="rownumberer-1912" componentid="rownumberer-1912" class="x-column-header mg-rownumberer x-column-header-align-left x-box-item x-column-header-default x-unselectable x-column-header-first x-column-header-last">…</div>[22m [2m  - attempting click action[22m [2m    2 × waiting for element to … (1731 chars) |
| 7 | mcp__playwright__browser_snapshot | filename=evidence/EXP-095/t3-fresh-snapshot-before-close.md | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=FX_Orders Form-tab close control (closable FX_Orders button) | ok |
| 10 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-after-close-prompt-check.png | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-after-close-prompt-check.png | ok |
| 12 | mcp__playwright__browser_click | element=Form menu (top navigation) | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-form-menu-open.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-form-menu-open.png | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=FX_Orders menu item in Form menu recent forms | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-reopened-designer-readback.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-reopened-designer-readback.png | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Details panel Expand Panel control | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Event Handlers tab (Details) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-reopened-event-handler-row.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-reopened-event-handler-row.png | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=FX_CalcOrderTotal group row in handler grid (expand toggle) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-reopened-event-handler-row.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-reopened-event-handler-row.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Components tab (Details) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-components-grid-after-reopen.png | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-components-grid-after-reopen.png | ok |
| 35 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=FX_ItemCombobox row in Components grid | ok |
| 38 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-reopened-itemcombobox-data-change.png | ok |
| 39 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-reopened-itemcombobox-data-change.png | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=FX_CountEdit row in Components grid | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-095/t3-reopened-countedit-data-change.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-095\t3-reopened-countedit-data-change.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-095-hello-world-part-6-section-3-fx-orders-calc-order-total-event.md | ok |