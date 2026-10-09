# controller-generated audit (not worker prose)

55 actions, 15 reads; prohibited-tool hits=0; errors=3; turns=81; audit issues=1; key string "FX_ComponentRecoveryLab02" [EXACT MISMATCH] / "FX_SingleButtonLab01" [exact match]; exact mismatches=1

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab01","FX_SingleButton01","Factory Test Button"]

Key sequence: [{"order":19,"key":"Control+a","result":"ok"},{"order":20,"key":"Backspace","result":"ok"},{"order":21,"key":"F","result":"ok"},{"order":22,"key":"X","result":"ok"},{"order":23,"key":"_","result":"ok"},{"order":24,"key":"C","result":"ok"},{"order":25,"key":"o","result":"ok"},{"order":26,"key":"m","result":"ok"},{"order":27,"key":"p","result":"ok"},{"order":28,"key":"o","result":"ok"},{"order":29,"key":"n","result":"ok"},{"order":30,"key":"e","result":"ok"},{"order":31,"key":"n","result":"ok"},{"order":32,"key":"t","result":"ok"},{"order":33,"key":"R","result":"ok"},{"order":34,"key":"e","result":"ok"},{"order":35,"key":"c","result":"ok"},{"order":36,"key":"o","result":"ok"},{"order":37,"key":"v","result":"ok"},{"order":38,"key":"e","result":"ok"},{"order":39,"key":"r","result":"ok"},{"order":40,"key":"y","result":"ok"},{"order":41,"key":"L","result":"ok"},{"order":42,"key":"a","result":"ok"},{"order":43,"key":"b","result":"ok"},{"order":44,"key":"0","result":"ok"},{"order":45,"key":"2","result":"ok"},{"order":51,"key":"Control+a","result":"ok"},{"order":52,"key":"Backspace","result":"ok"},{"order":53,"key":"F","result":"ok"},{"order":54,"key":"X","result":"ok"},{"order":55,"key":"_","result":"ok"},{"order":56,"key":"S","result":"ok"},{"order":57,"key":"i","result":"ok"},{"order":58,"key":"n","result":"ok"},{"order":59,"key":"g","result":"ok"},{"order":60,"key":"l","result":"ok"},{"order":61,"key":"e","result":"ok"},{"order":62,"key":"B","result":"ok"},{"order":63,"key":"u","result":"ok"},{"order":64,"key":"t","result":"ok"},{"order":65,"key":"t","result":"ok"},{"order":66,"key":"o","result":"ok"},{"order":67,"key":"n","result":"ok"},{"order":68,"key":"L","result":"ok"},{"order":69,"key":"a","result":"ok"},{"order":70,"key":"b","result":"ok"},{"order":71,"key":"0","result":"ok"},{"order":72,"key":"1","result":"ok"}]

Spelled strings: [{"text":"FX_ComponentRecoveryLab02","orders":[21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"allOk":true,"exactMatch":false,"matchingValues":[]},{"text":"FX_SingleButtonLab01","orders":[53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72],"allOk":true,"exactMatch":true,"matchingValues":["FX_SingleButtonLab01"]}]

Flagged tool usage: {}

Errors: ["#4 mcp__playwright__browser_click: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - waiting for locator('aria-ref=f1e23')\u001b[22m\n\u001b[2m    - locator resolved to <div role=\"button\" tabindex=\"-1\" aria-label=\"Open\" id=\"mgtoolbarbutton-1101\" data-mgcompname=\"openButton\" componentid=\"mgtoolbarbutton-1101\" class=\"x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small\">…</div>\u001b[22m\n\u001b[2m  - attempting click action\u001b[22m\n\u001b[2m    - waiting for element to be visible, enabled and stab… (507 chars)","#5 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#77 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m"]

Audit limitations: ["No terminal event; audit may be partial"]

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-01-designer-state-before-select-form.md | ok |
| 3 | Grep | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=Open toolbar button (Web Client, Select Form) | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - waiting for locator('aria-ref=f1e23')[22m [2m    - locator resolved to <div role="button" tabindex="-1" aria-label="Open" id="mgtoolbarbutton-1101" data-mgcompname="openButton" componentid="mgtoolbarbutton-1101" class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-small">…</div>[22m [2m  - attempting click action[22m [2m    - waiting for element to be visible, enabled and stab… (507 chars) |
| 5 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t3-02-open-click-timeout-state.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 6 | mcp__playwright__browser_tabs | action=list | ok |
| 7 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-03-fresh-untargeted-snapshot-allowance.md | ok |
| 8 | Grep | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Open toolbar button (Web Client, Select Form) - corrected attempt | ok |
| 10 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-04-select-form-opened-snapshot.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t3-04-select-form-opened-snapshot.md | ok |
| 12 | mcp__playwright__browser_click | element=Filter By dropdown arrow (Select Form) | ok |
| 13 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-05-filter-by-dropdown-open.md | ok |
| 14 | Grep | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Name option in Filter By listbox | ok |
| 16 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-06-filter-by-name-selected-snapshot.md | ok |
| 17 | Grep | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Filter textbox (Select Form) | ok |
| 19 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 20 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 21 | mcp__playwright__browser_press_key | key=F | ok |
| 22 | mcp__playwright__browser_press_key | key=X | ok |
| 23 | mcp__playwright__browser_press_key | key=_ | ok |
| 24 | mcp__playwright__browser_press_key | key=C | ok |
| 25 | mcp__playwright__browser_press_key | key=o | ok |
| 26 | mcp__playwright__browser_press_key | key=m | ok |
| 27 | mcp__playwright__browser_press_key | key=p | ok |
| 28 | mcp__playwright__browser_press_key | key=o | ok |
| 29 | mcp__playwright__browser_press_key | key=n | ok |
| 30 | mcp__playwright__browser_press_key | key=e | ok |
| 31 | mcp__playwright__browser_press_key | key=n | ok |
| 32 | mcp__playwright__browser_press_key | key=t | ok |
| 33 | mcp__playwright__browser_press_key | key=R | ok |
| 34 | mcp__playwright__browser_press_key | key=e | ok |
| 35 | mcp__playwright__browser_press_key | key=c | ok |
| 36 | mcp__playwright__browser_press_key | key=o | ok |
| 37 | mcp__playwright__browser_press_key | key=v | ok |
| 38 | mcp__playwright__browser_press_key | key=e | ok |
| 39 | mcp__playwright__browser_press_key | key=r | ok |
| 40 | mcp__playwright__browser_press_key | key=y | ok |
| 41 | mcp__playwright__browser_press_key | key=L | ok |
| 42 | mcp__playwright__browser_press_key | key=a | ok |
| 43 | mcp__playwright__browser_press_key | key=b | ok |
| 44 | mcp__playwright__browser_press_key | key=0 | ok |
| 45 | mcp__playwright__browser_press_key | key=2 | ok |
| 46 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-07-positive-control-settled-snapshot.md | ok |
| 48 | Grep | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t3-08-positive-control-settled-viewport.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t3-08-positive-control-settled-viewport.png | ok |
| 51 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 52 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 53 | mcp__playwright__browser_press_key | key=F | ok |
| 54 | mcp__playwright__browser_press_key | key=X | ok |
| 55 | mcp__playwright__browser_press_key | key=_ | ok |
| 56 | mcp__playwright__browser_press_key | key=S | ok |
| 57 | mcp__playwright__browser_press_key | key=i | ok |
| 58 | mcp__playwright__browser_press_key | key=n | ok |
| 59 | mcp__playwright__browser_press_key | key=g | ok |
| 60 | mcp__playwright__browser_press_key | key=l | ok |
| 61 | mcp__playwright__browser_press_key | key=e | ok |
| 62 | mcp__playwright__browser_press_key | key=B | ok |
| 63 | mcp__playwright__browser_press_key | key=u | ok |
| 64 | mcp__playwright__browser_press_key | key=t | ok |
| 65 | mcp__playwright__browser_press_key | key=t | ok |
| 66 | mcp__playwright__browser_press_key | key=o | ok |
| 67 | mcp__playwright__browser_press_key | key=n | ok |
| 68 | mcp__playwright__browser_press_key | key=L | ok |
| 69 | mcp__playwright__browser_press_key | key=a | ok |
| 70 | mcp__playwright__browser_press_key | key=b | ok |
| 71 | mcp__playwright__browser_press_key | key=0 | ok |
| 72 | mcp__playwright__browser_press_key | key=1 | ok |
| 73 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-09-target-query-settled-snapshot.md | ok |
| 75 | Grep | (no key/element/filename argument) | ok |
| 76 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036\t3-09-target-query-settled-snapshot.md | ok |
| 77 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036/t3-10-target-query-zero-match-viewport.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 78 | Grep | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_click | element=Cancel button (Select Form, non-activating) | ok |
| 80 | mcp__playwright__browser_snapshot | filename=evidence/EXP-036/t3-11-post-cancel-snapshot.md | ok |
| 81 | Grep | (no key/element/filename argument) | ok |
| 82 | Glob | (no key/element/filename argument) | ok |