# controller-generated audit (not worker prose)

1 actions, 5 reads; prohibited-tool hits=0; errors=2; turns=10; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","FX_ButtonPromptEvent01","Factory Test Prompt","Factory Test Button"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#4 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#7 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e23')\u001b[22m\n\u001b[2m    - locator resolved to <div role=\"button\" tabindex=\"-1\" aria-label=\"Open\" id=\"mgtoolbarbutton-1100\" data-mgcompname=\"openButton\" componentid=\"mgtoolbarbutton-1100\" class=\"x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small\">…</div>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, enabled and stab… (507 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t10-01-preflight-snapshot.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t10-01-preflight-snapshot.md | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t10-02-webclient-preflight-viewport.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-037/t10-02-webclient-preflight-viewport.png | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t10-02-webclient-preflight-viewport.png | ok |
| 7 | mcp__playwright__browser_click | element=Open toolbar button in Web Client (Select Form, ordinary route) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e23')[22m [2m    - locator resolved to <div role="button" tabindex="-1" aria-label="Open" id="mgtoolbarbutton-1100" data-mgcompname="openButton" componentid="mgtoolbarbutton-1100" class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small">…</div>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, enabled and stab… (507 chars) |
| 8 | mcp__playwright__browser_snapshot | filename=evidence/EXP-037/t10-03-after-open-timeout-snapshot.md | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-037\t10-runtime-gate-notes.md | ok |
| 11 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md | ok |