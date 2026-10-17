# controller-generated audit (not worker prose)

36 actions, 31 reads; prohibited-tool hits=4; errors=1; turns=83; key string "FX_sHome" [exact match]; exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["ButtonSignIn","ButtonHome","ButtonCart","FX_sSignIn","FX_sHome","FX_sCart","Sign In","Home","Cart","FX_BlueButton"]

Key sequence: [{"order":19,"key":"Tab","result":"ok"},{"order":29,"key":"F","result":"ok"},{"order":30,"key":"X","result":"ok"},{"order":31,"key":"_","result":"ok"},{"order":32,"key":"s","result":"ok"},{"order":33,"key":"H","result":"ok"},{"order":34,"key":"o","result":"ok"},{"order":35,"key":"m","result":"ok"},{"order":36,"key":"e","result":"ok"},{"order":48,"key":"Tab","result":"ok"},{"order":60,"key":"Tab","result":"ok"},{"order":74,"key":"Tab","result":"ok"},{"order":79,"key":"Tab","result":"ok"}]

Spelled strings: [{"text":"FX_sHome","orders":[29,30,31,32,33,34,35,36],"allOk":true,"exactMatch":true,"matchingValues":["FX_sHome"]}]

Flagged tool usage: {"browser_type":4}

Errors: ["#20 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1359 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-110-hello-world-part-7-section-7-fx-customer-portal-menu-buttons.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-109-hello-world-part-7-section-6b-fx-customer-portal-main-regions.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 9 | mcp__playwright__browser_tabs | action=list | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Toolbox Button row | ok |
| 12 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-01-placement-buttonhome-tree-canvas.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-01-placement-buttonhome-tree-canvas.png | ok |
| 16 | mcp__playwright__browser_click | element=Properties Name value (button1_USER) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_type | element=Name editor textbox | ok |
| 19 | mcp__playwright__browser_press_key | key=Tab | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1359 not found in the current page snapshot. Try capturing new snapshot. |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Designer Save toolbar button (step A) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-02-saveA-response-buttonhome-name.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-02-saveA-response-buttonhome-name.png | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Properties Caption value cell | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-03-caption-list-open-buttonhome.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-03-caption-list-open-buttonhome.png | ok |
| 29 | mcp__playwright__browser_press_key | key=F | ok |
| 30 | mcp__playwright__browser_press_key | key=X | ok |
| 31 | mcp__playwright__browser_press_key | key=_ | ok |
| 32 | mcp__playwright__browser_press_key | key=s | ok |
| 33 | mcp__playwright__browser_press_key | key=H | ok |
| 34 | mcp__playwright__browser_press_key | key=o | ok |
| 35 | mcp__playwright__browser_press_key | key=m | ok |
| 36 | mcp__playwright__browser_press_key | key=e | ok |
| 37 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-04-caption-typed-FX_sHome-list-open.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-04-caption-typed-FX_sHome-list-open.png | ok |
| 39 | mcp__playwright__browser_click | element=Properties Description row label | ok |
| 40 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=Caption ellipsis button | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Prompt Yes button (FX_sHome) | ok |
| 44 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_click | element=String Value cell (FX_s Home) | ok |
| 46 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_type | element=String Value editor textbox | ok |
| 48 | mcp__playwright__browser_press_key | key=Tab | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-05-string-editor-FX_sHome-value-Home-before-OK.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-05-string-editor-FX_sHome-value-Home-before-OK.png | ok |
| 51 | mcp__playwright__browser_click | element=String editor OK button | ok |
| 52 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_click | element=Designer Save toolbar button (step B) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-06-saveB-response-buttonhome-caption-string.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-06-saveB-response-buttonhome-caption-string.png | ok |
| 56 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_click | element=Theme Class value cell | ok |
| 58 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_click | element=Theme Class list item FX_BlueButton | ok |
| 60 | mcp__playwright__browser_press_key | key=Tab | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-07-theme-class-set-before-saveC.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-07-theme-class-set-before-saveC.png | ok |
| 63 | mcp__playwright__browser_click | element=Designer Save toolbar button (step C) | ok |
| 64 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-08-saveC-response-buttonhome-theme.png | ok |
| 65 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-08-saveC-response-buttonhome-theme.png | ok |
| 66 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Properties Size row (14.25; 1.89) | ok |
| 68 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Properties Size row (14.25; 1.89) | ok |
| 70 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=Width value cell (14.25) | ok |
| 72 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_type | element=Width editor textbox | ok |
| 74 | mcp__playwright__browser_press_key | key=Tab | ok |
| 75 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=Height value cell (1.89) | ok |
| 77 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_type | element=Height editor textbox | ok |
| 79 | mcp__playwright__browser_press_key | key=Tab | ok |
| 80 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-09-size-rows-15-2-before-saveD.png | ok |
| 81 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-09-size-rows-15-2-before-saveD.png | ok |
| 82 | mcp__playwright__browser_click | element=Designer Save toolbar button (step D) | ok |
| 83 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R2/t3-10-saveD-response-buttonhome-size.png | ok |
| 84 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R2\t3-10-saveD-response-buttonhome-size.png | ok |
| 85 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md | ok |
| 87 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md | ok |
| 88 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md | ok |
| 89 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md | ok |
| 90 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md | ok |