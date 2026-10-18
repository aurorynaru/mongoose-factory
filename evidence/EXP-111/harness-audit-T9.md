# controller-generated audit (not worker prose)

38 actions, 44 reads; prohibited-tool hits=4; errors=2; turns=101; key string "FX_sSignIn" [exact match]; exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticSignIn","StaticImage1","StaticCustID2","EditCustID","ButtonSignIn2","FX_sSignIn","FX_sCustomerID","FX_Header","FX_BlueButton","FX_CustomerSignIn.png","Customer ID"]

Key sequence: [{"order":25,"key":"Tab","result":"ok"},{"order":37,"key":"F","result":"ok"},{"order":38,"key":"X","result":"ok"},{"order":39,"key":"_","result":"ok"},{"order":40,"key":"s","result":"ok"},{"order":41,"key":"S","result":"ok"},{"order":42,"key":"i","result":"ok"},{"order":43,"key":"g","result":"ok"},{"order":44,"key":"n","result":"ok"},{"order":45,"key":"I","result":"ok"},{"order":46,"key":"n","result":"ok"},{"order":64,"key":"Tab","result":"ok"},{"order":79,"key":"Tab","result":"ok"},{"order":86,"key":"Tab","result":"ok"},{"order":99,"key":"Tab","result":"ok"}]

Spelled strings: [{"text":"FX_sSignIn","orders":[37,38,39,40,41,42,43,44,45,46],"allOk":true,"exactMatch":true,"matchingValues":["FX_sSignIn"]}]

Flagged tool usage: {"browser_type":4}

Errors: ["#81 mcp__playwright__browser_snapshot: ### Error\nError: Ref e2045 not found in the current page snapshot. Try capturing new snapshot.","#102 mcp__playwright__browser_click: ### Error\nError: Ref e2736 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md | ok |
| 9 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 12 | mcp__playwright__browser_tabs | action=list | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-01-precheck-region02-tree-before-buttonsignin2.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-01-precheck-region02-tree-before-buttonsignin2.png | ok |
| 16 | mcp__playwright__browser_click | element=Button row in Toolbox | ok |
| 17 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-02-button-placed-after-editcustid-tree-and-canvas.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-02-button-placed-after-editcustid-tree-and-canvas.png | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Name value cell (button1_USER) of new PushButton | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_type | element=Name textbox (active, value button1_USER) | ok |
| 25 | mcp__playwright__browser_press_key | key=Tab | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-03-buttonsignin2-name-check-before-save-1.png | ok |
| 28 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-03-buttonsignin2-name-check-before-save-1.png | ok |
| 29 | mcp__playwright__browser_click | element=Save button in Designer toolbar (T4 Save #1) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-04-save-1-after-step-a-buttonsignin2-named.png | ok |
| 31 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-04-save-1-after-step-a-buttonsignin2-named.png | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Caption value cell of ButtonSignIn2 (not the ellipsis) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-05-caption-field-open-before-typing.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-05-caption-field-open-before-typing.png | ok |
| 37 | mcp__playwright__browser_press_key | key=F | ok |
| 38 | mcp__playwright__browser_press_key | key=X | ok |
| 39 | mcp__playwright__browser_press_key | key=_ | ok |
| 40 | mcp__playwright__browser_press_key | key=s | ok |
| 41 | mcp__playwright__browser_press_key | key=S | ok |
| 42 | mcp__playwright__browser_press_key | key=i | ok |
| 43 | mcp__playwright__browser_press_key | key=g | ok |
| 44 | mcp__playwright__browser_press_key | key=n | ok |
| 45 | mcp__playwright__browser_press_key | key=I | ok |
| 46 | mcp__playwright__browser_press_key | key=n | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-06-caption-list-typed-FX_sSignIn-before-description-click.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-06-caption-list-typed-FX_sSignIn-before-description-click.png | ok |
| 49 | mcp__playwright__browser_click | element=Description row label (leave Caption field without Tab) | ok |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-07-caption-fx_ssignin-committed-save-enabled.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-07-caption-fx_ssignin-committed-save-enabled.png | ok |
| 53 | mcp__playwright__browser_click | element=Save button in Designer toolbar (T4 Save #2) | ok |
| 54 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-08-save-2-after-step-b-caption-fx_ssignin.png | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-08-save-2-after-step-b-caption-fx_ssignin.png | ok |
| 56 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=Theme Class combobox arrow of ButtonSignIn2 | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-09-theme-class-list-open.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-09-theme-class-list-open.png | ok |
| 61 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_click | element=FX_BlueButton option in Theme Class list | ok |
| 64 | mcp__playwright__browser_press_key | key=Tab | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-10-theme-class-fx_bluebutton-after-tab.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-10-theme-class-fx_bluebutton-after-tab.png | ok |
| 67 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Data Source group label (collapse, view-only) | ok |
| 70 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-11-properties-scrolled-to-layout-size.png | ok |
| 73 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-11-properties-scrolled-to-layout-size.png | ok |
| 74 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=Width value cell (14.25) of ButtonSignIn2 | ok |
| 77 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_type | element=Width textbox (active, value 14.25) | ok |
| 79 | mcp__playwright__browser_press_key | key=Tab | ok |
| 80 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e2045 not found in the current page snapshot. Try capturing new snapshot. |
| 82 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 83 | mcp__playwright__browser_click | element=Height value cell (1.89) of ButtonSignIn2 | ok |
| 84 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_type | element=Height textbox (active, value 1.89) | ok |
| 86 | mcp__playwright__browser_press_key | key=Tab | ok |
| 87 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 88 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 89 | mcp__playwright__browser_click | element=Save button in Designer toolbar (T4 Save #3) | ok |
| 90 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-12-save-3-after-step-c-theme-fx_bluebutton-size-20-1_5.png | ok |
| 91 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-12-save-3-after-step-c-theme-fx_bluebutton-size-20-1_5.png | ok |
| 92 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 93 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-13-buttonsignin2-margin-dialog-before-ok.png | ok |
| 94 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-13-buttonsignin2-margin-dialog-before-ok.png | ok |
| 95 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 96 | mcp__playwright__browser_click | element=Margin value cell in FlexLayout dialog (ButtonSignIn2) | ok |
| 97 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 98 | mcp__playwright__browser_type | element=Margin textbox (active, empty) | ok |
| 99 | mcp__playwright__browser_press_key | key=Tab | ok |
| 100 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-14-buttonsignin2-margin-0-1-0-1-before-ok.png | ok |
| 101 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-14-buttonsignin2-margin-0-1-0-1-before-ok.png | ok |
| 102 | mcp__playwright__browser_click | element=OK button in FlexLayout dialog (ButtonSignIn2 Margin) | error: ### Error Error: Ref e2736 not found in the current page snapshot. Try capturing new snapshot. |
| 103 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 104 | mcp__playwright__browser_click | element=OK button in FlexLayout dialog (ButtonSignIn2 Margin) | ok |
| 105 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 106 | mcp__playwright__browser_click | element=Save button in Designer toolbar (T4 Save #4) | ok |
| 107 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t4-15-save-4-after-step-d-margin-buttonsignin2.png | ok |
| 108 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t4-15-save-4-after-step-d-margin-buttonsignin2.png | ok |
| 109 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 110 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 111 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 112 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 113 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |