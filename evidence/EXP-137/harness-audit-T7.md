# controller-generated audit (not worker prose)

3 actions, 4 reads; prohibited-tool hits=1; errors=3; turns=11; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#3 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#7 mcp__playwright__browser_click: ### Error\nError: Ref f1e32 not found in the current page snapshot. Try capturing new snapshot.","#11 mcp__playwright__browser_type: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e180')\u001b[22m\n\u001b[2m    - locator resolved to <input size=\"1\" type=\"text\" tabindex=\"-1\" role=\"textbox\" maxlength=\"80\" data-ref=\"inputEl\" autocomplete=\"off\" readonly=\"readonly\" aria-readonly=\"true\" aria-required=\"false\" id=\"mgedit-1225-inputEl\" componentid=\"mgedit-1225\" name=\"mgedit-1225-inputEl\" aria-labelledby=\"mgedit-1225-labelEl\" data-mgcompnamevalue=\"CollectionNameEdit\" cla… (1174 chars)"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t7-00-idos-panel-pre-criterion-viewport.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\operator-01-webclient-account-header-after-restart.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\operator-02-designer-user-scope-idocollections-after-restart.png | ok |
| 6 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | error: ### Error Error: Ref f1e32 not found in the current page snapshot. Try capturing new snapshot. |
| 8 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\playwright\page-2026-10-26T13-55-43-913Z.yml | ok |
| 11 | mcp__playwright__browser_type | element=IDO Name criteria textbox (IDOs panel, Filter in Place active) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e180')[22m [2m    - locator resolved to <input size="1" type="text" tabindex="-1" role="textbox" maxlength="80" data-ref="inputEl" autocomplete="off" readonly="readonly" aria-readonly="true" aria-required="false" id="mgedit-1225-inputEl" componentid="mgedit-1225" name="mgedit-1225-inputEl" aria-labelledby="mgedit-1225-labelEl" data-mgcompnamevalue="CollectionNameEdit" cla… (1174 chars) |
| 12 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-137\T7-exact-name-idos-check.md | ok |
| 13 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 14 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |