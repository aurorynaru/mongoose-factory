# controller-generated audit (not worker prose)

60 actions, 24 reads; prohibited-tool hits=0; errors=0; turns=94; key string "FX_ComponentRecoveryLab02" [not an exact_value (informational)] / "FX_SingleButtonLab02" [exact match]; exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_SingleButtonLab02","FX_SingleButton02","Factory Test Button"]

Key sequence: [{"order":28,"key":"Control+a","result":"ok"},{"order":29,"key":"Backspace","result":"ok"},{"order":30,"key":"F","result":"ok"},{"order":31,"key":"X","result":"ok"},{"order":32,"key":"_","result":"ok"},{"order":33,"key":"C","result":"ok"},{"order":34,"key":"o","result":"ok"},{"order":35,"key":"m","result":"ok"},{"order":36,"key":"p","result":"ok"},{"order":37,"key":"o","result":"ok"},{"order":38,"key":"n","result":"ok"},{"order":39,"key":"e","result":"ok"},{"order":40,"key":"n","result":"ok"},{"order":41,"key":"t","result":"ok"},{"order":42,"key":"R","result":"ok"},{"order":43,"key":"e","result":"ok"},{"order":44,"key":"c","result":"ok"},{"order":45,"key":"o","result":"ok"},{"order":46,"key":"v","result":"ok"},{"order":47,"key":"e","result":"ok"},{"order":48,"key":"r","result":"ok"},{"order":49,"key":"y","result":"ok"},{"order":50,"key":"L","result":"ok"},{"order":51,"key":"a","result":"ok"},{"order":52,"key":"b","result":"ok"},{"order":53,"key":"0","result":"ok"},{"order":54,"key":"2","result":"ok"},{"order":59,"key":"Control+a","result":"ok"},{"order":60,"key":"Backspace","result":"ok"},{"order":61,"key":"F","result":"ok"},{"order":62,"key":"X","result":"ok"},{"order":63,"key":"_","result":"ok"},{"order":64,"key":"S","result":"ok"},{"order":65,"key":"i","result":"ok"},{"order":66,"key":"n","result":"ok"},{"order":67,"key":"g","result":"ok"},{"order":68,"key":"l","result":"ok"},{"order":69,"key":"e","result":"ok"},{"order":70,"key":"B","result":"ok"},{"order":71,"key":"u","result":"ok"},{"order":72,"key":"t","result":"ok"},{"order":73,"key":"t","result":"ok"},{"order":74,"key":"o","result":"ok"},{"order":75,"key":"n","result":"ok"},{"order":76,"key":"L","result":"ok"},{"order":77,"key":"a","result":"ok"},{"order":78,"key":"b","result":"ok"},{"order":79,"key":"0","result":"ok"},{"order":80,"key":"2","result":"ok"}]

Spelled strings: [{"text":"FX_ComponentRecoveryLab02","orders":[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],"allOk":true,"exactMatch":null,"matchingValues":[]},{"text":"FX_SingleButtonLab02","orders":[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],"allOk":true,"exactMatch":true,"matchingValues":["FX_SingleButtonLab02"]}]

Flagged tool usage: {}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-01-preflight-webclient-viewport.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-01-preflight-webclient-viewport.png | ok |
| 5 | mcp__playwright__browser_click | element=Close notification (portal banner) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-02-after-banner-close-viewport.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-02-after-banner-close-viewport.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Designer toolbar control (launch, one) | ok |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=OK (Identify Your Editing Scope) | ok |
| 13 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-03-designer-settled-viewport.png | ok |
| 14 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-03-designer-settled-viewport.png | ok |
| 15 | mcp__playwright__browser_tabs | action=select | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Open toolbar button (Select Form, one) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-04-select-form-opened-viewport.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-04-select-form-opened-viewport.png | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Filter By dropdown trigger | ok |
| 22 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Filter By option Name | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 29 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 30 | mcp__playwright__browser_press_key | key=F | ok |
| 31 | mcp__playwright__browser_press_key | key=X | ok |
| 32 | mcp__playwright__browser_press_key | key=_ | ok |
| 33 | mcp__playwright__browser_press_key | key=C | ok |
| 34 | mcp__playwright__browser_press_key | key=o | ok |
| 35 | mcp__playwright__browser_press_key | key=m | ok |
| 36 | mcp__playwright__browser_press_key | key=p | ok |
| 37 | mcp__playwright__browser_press_key | key=o | ok |
| 38 | mcp__playwright__browser_press_key | key=n | ok |
| 39 | mcp__playwright__browser_press_key | key=e | ok |
| 40 | mcp__playwright__browser_press_key | key=n | ok |
| 41 | mcp__playwright__browser_press_key | key=t | ok |
| 42 | mcp__playwright__browser_press_key | key=R | ok |
| 43 | mcp__playwright__browser_press_key | key=e | ok |
| 44 | mcp__playwright__browser_press_key | key=c | ok |
| 45 | mcp__playwright__browser_press_key | key=o | ok |
| 46 | mcp__playwright__browser_press_key | key=v | ok |
| 47 | mcp__playwright__browser_press_key | key=e | ok |
| 48 | mcp__playwright__browser_press_key | key=r | ok |
| 49 | mcp__playwright__browser_press_key | key=y | ok |
| 50 | mcp__playwright__browser_press_key | key=L | ok |
| 51 | mcp__playwright__browser_press_key | key=a | ok |
| 52 | mcp__playwright__browser_press_key | key=b | ok |
| 53 | mcp__playwright__browser_press_key | key=0 | ok |
| 54 | mcp__playwright__browser_press_key | key=2 | ok |
| 55 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-05-positive-control-settled-viewport.png | ok |
| 57 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-05-positive-control-settled-viewport.png | ok |
| 58 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 60 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 61 | mcp__playwright__browser_press_key | key=F | ok |
| 62 | mcp__playwright__browser_press_key | key=X | ok |
| 63 | mcp__playwright__browser_press_key | key=_ | ok |
| 64 | mcp__playwright__browser_press_key | key=S | ok |
| 65 | mcp__playwright__browser_press_key | key=i | ok |
| 66 | mcp__playwright__browser_press_key | key=n | ok |
| 67 | mcp__playwright__browser_press_key | key=g | ok |
| 68 | mcp__playwright__browser_press_key | key=l | ok |
| 69 | mcp__playwright__browser_press_key | key=e | ok |
| 70 | mcp__playwright__browser_press_key | key=B | ok |
| 71 | mcp__playwright__browser_press_key | key=u | ok |
| 72 | mcp__playwright__browser_press_key | key=t | ok |
| 73 | mcp__playwright__browser_press_key | key=t | ok |
| 74 | mcp__playwright__browser_press_key | key=o | ok |
| 75 | mcp__playwright__browser_press_key | key=n | ok |
| 76 | mcp__playwright__browser_press_key | key=L | ok |
| 77 | mcp__playwright__browser_press_key | key=a | ok |
| 78 | mcp__playwright__browser_press_key | key=b | ok |
| 79 | mcp__playwright__browser_press_key | key=0 | ok |
| 80 | mcp__playwright__browser_press_key | key=2 | ok |
| 81 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 82 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-06-target-query-settled-viewport.png | ok |
| 83 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-06-target-query-settled-viewport.png | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 86 | mcp__playwright__browser_click | element=Select Form Cancel button (one) | ok |
| 87 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-07-after-cancel-webclient-viewport.png | ok |
| 89 | mcp__playwright__browser_tabs | action=select | ok |
| 90 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-036-R2/t2-08-designer-final-preflight-viewport.png | ok |
| 91 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-08-designer-final-preflight-viewport.png | ok |
| 92 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-07-after-cancel-webclient-viewport.png | ok |
| 93 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-036-R2\t2-preflight-notes.md | ok |
| 94 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-R2-clean-replay-single-button-caption-recovery.md | ok |
| 95 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-036-R2-clean-replay-single-button-caption-recovery.md | ok |