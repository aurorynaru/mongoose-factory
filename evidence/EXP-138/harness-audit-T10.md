# controller-generated audit (not worker prose)

31 actions, 11 reads; prohibited-tool hits=0; errors=0; turns=53; key string "fx_nobody" [not an exact_value (informational)] / "fx-probe-only" [not an exact_value (informational)]

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: [{"order":11,"key":"Control+a","result":"ok"},{"order":14,"key":"f","result":"ok"},{"order":15,"key":"x","result":"ok"},{"order":16,"key":"_","result":"ok"},{"order":17,"key":"n","result":"ok"},{"order":18,"key":"o","result":"ok"},{"order":19,"key":"b","result":"ok"},{"order":20,"key":"o","result":"ok"},{"order":21,"key":"d","result":"ok"},{"order":22,"key":"y","result":"ok"},{"order":26,"key":"Control+a","result":"ok"},{"order":29,"key":"f","result":"ok"},{"order":30,"key":"x","result":"ok"},{"order":31,"key":"-","result":"ok"},{"order":32,"key":"p","result":"ok"},{"order":33,"key":"r","result":"ok"},{"order":34,"key":"o","result":"ok"},{"order":35,"key":"b","result":"ok"},{"order":36,"key":"e","result":"ok"},{"order":37,"key":"-","result":"ok"},{"order":38,"key":"o","result":"ok"},{"order":39,"key":"n","result":"ok"},{"order":40,"key":"l","result":"ok"},{"order":41,"key":"y","result":"ok"}]

Spelled strings: [{"text":"fx_nobody","orders":[14,15,16,17,18,19,20,21,22],"allOk":true,"exactMatch":null,"matchingValues":[]},{"text":"fx-probe-only","orders":[29,30,31,32,33,34,35,36,37,38,39,40,41],"allOk":true,"exactMatch":null,"matchingValues":[]}]

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-01-pre-signin3-runtime-gate-invalid-displayed.png | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-01-pre-signin3-runtime-gate-invalid-displayed.png | ok |
| 6 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 7 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-02-frame-scrolled-up-username-password-positions.png | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-02-frame-scrolled-up-username-password-positions.png | ok |
| 10 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-03-username-focused-ctrl-a-selected-before-replace.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-03-username-focused-ctrl-a-selected-before-replace.png | ok |
| 14 | mcp__playwright__browser_press_key | key=f | ok |
| 15 | mcp__playwright__browser_press_key | key=x | ok |
| 16 | mcp__playwright__browser_press_key | key=_ | ok |
| 17 | mcp__playwright__browser_press_key | key=n | ok |
| 18 | mcp__playwright__browser_press_key | key=o | ok |
| 19 | mcp__playwright__browser_press_key | key=b | ok |
| 20 | mcp__playwright__browser_press_key | key=o | ok |
| 21 | mcp__playwright__browser_press_key | key=d | ok |
| 22 | mcp__playwright__browser_press_key | key=y | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-04-username-fx_nobody-verified-before-password-edit.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-04-username-fx_nobody-verified-before-password-edit.png | ok |
| 25 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-05-password-focused-ctrl-a-selected-before-replace.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-05-password-focused-ctrl-a-selected-before-replace.png | ok |
| 29 | mcp__playwright__browser_press_key | key=f | ok |
| 30 | mcp__playwright__browser_press_key | key=x | ok |
| 31 | mcp__playwright__browser_press_key | key=- | ok |
| 32 | mcp__playwright__browser_press_key | key=p | ok |
| 33 | mcp__playwright__browser_press_key | key=r | ok |
| 34 | mcp__playwright__browser_press_key | key=o | ok |
| 35 | mcp__playwright__browser_press_key | key=b | ok |
| 36 | mcp__playwright__browser_press_key | key=e | ok |
| 37 | mcp__playwright__browser_press_key | key=- | ok |
| 38 | mcp__playwright__browser_press_key | key=o | ok |
| 39 | mcp__playwright__browser_press_key | key=n | ok |
| 40 | mcp__playwright__browser_press_key | key=l | ok |
| 41 | mcp__playwright__browser_press_key | key=y | ok |
| 42 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-06-username-fx_nobody-password-replaced-masked-before-signin-click.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-06-username-fx_nobody-password-replaced-masked-before-signin-click.png | ok |
| 44 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-07-pre-click-signin-visible-fresh-location-check.png | ok |
| 46 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-07-pre-click-signin-visible-fresh-location-check.png | ok |
| 47 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-138/t10-08-after-single-signin-fx_nobody-fx-probe-only-result-text.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-138\t10-08-after-single-signin-fx_nobody-fx-probe-only-result-text.png | ok |
| 51 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-138\T10-third-signin-summary.md | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |
| 54 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-138-fx-loginportal-hashed-fx-loginusers-lookup.md | ok |