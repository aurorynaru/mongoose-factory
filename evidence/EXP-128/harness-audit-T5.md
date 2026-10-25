# controller-generated audit (not worker prose)

7 actions, 15 reads; prohibited-tool hits=0; errors=2; turns=31; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#18 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e895')\u001b[22m\n\u001b[2m    - locator resolved to <a tabindex=\"0\" role=\"button\" hidefocus=\"on\" id=\"button-2200\" unselectable=\"on\" aria-label=\"Expand\" componentid=\"button-2200\" class=\"x-btn x-unselectable x-box-item x-btn-default-small\">…</a>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, enabled and stable\u001b[22m\n\u001b[2m    - element is visible, ena… (5118 chars)","#20 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=e895')\u001b[22m\n\u001b[2m    - locator resolved to <a tabindex=\"0\" role=\"button\" hidefocus=\"on\" id=\"button-2200\" unselectable=\"on\" aria-label=\"Expand\" componentid=\"button-2200\" class=\"x-btn x-unselectable x-box-item x-btn-default-small\">…</a>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, enabled and stable\u001b[22m\n\u001b[2m    - element is visible, ena… (5891 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-05-mockinventory-collections-options-state-resumed.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-05-mockinventory-collections-options-state-resumed.png | ok |
| 8 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-06-mockinventory-components-tree.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-06-mockinventory-components-tree.png | ok |
| 13 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | filename=C:\AI\mongoose-factory\evidence\playwright\t4-components-snapshot-check.yml | ok |
| 16 | Grep | (no key/element/filename argument) | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Components grid Expand button | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e895')[22m [2m    - locator resolved to <a tabindex="0" role="button" hidefocus="on" id="button-2200" unselectable="on" aria-label="Expand" componentid="button-2200" class="x-btn x-unselectable x-box-item x-btn-default-small">…</a>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, enabled and stable[22m [2m    - element is visible, ena… (5118 chars) |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Components grid Expand button | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=e895')[22m [2m    - locator resolved to <a tabindex="0" role="button" hidefocus="on" id="button-2200" unselectable="on" aria-label="Expand" componentid="button-2200" class="x-btn x-unselectable x-box-item x-btn-default-small">…</a>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, enabled and stable[22m [2m    - element is visible, ena… (5891 chars) |
| 21 | mcp__playwright__browser_click | element=Details Event Handlers tab | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-07-mockinventory-event-handlers.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-07-mockinventory-event-handlers.png | ok |
| 25 | mcp__playwright__browser_click | element=Details Variables tab | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-128\t4-08-mockinventory-variables-empty-grid.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t4-08-mockinventory-variables-empty-grid.png | ok |
| 29 | mcp__playwright__browser_click | element=MockInventory Form-tab close control | ok |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 32 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 33 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 34 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |