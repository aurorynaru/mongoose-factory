# controller-generated audit (not worker prose)

21 actions, 30 reads; prohibited-tool hits=0; errors=2; turns=67; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticSignIn","StaticImage1","StaticCustID2","EditCustID","ButtonSignIn2","FX_sSignIn","FX_sCustomerID","FX_Header","FX_BlueButton","FX_CustomerSignIn.png","Customer ID"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#26 mcp__playwright__browser_click: ### Error\nError: Ref e1333 not found in the current page snapshot. Try capturing new snapshot.","#69 mcp__playwright__browser_click: ### Error\nError: Ref e519 not found in the current page snapshot. Try capturing new snapshot."]

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
| 10 | mcp__playwright__browser_tabs | action=list | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Expand Panel button for Details (view only) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Components tab in Details panel (view only) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_click | element=Components grid Expand button (view only) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-01-new-baseline-reopened-tree-and-canvas.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-01-new-baseline-reopened-tree-and-canvas.png | ok |
| 21 | mcp__playwright__browser_click | element=StaticSignIn row in Components tree (selection only) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-02-staticsignin-properties-readback.png | ok |
| 25 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-02-staticsignin-properties-readback.png | ok |
| 26 | mcp__playwright__browser_click | element=Properties toolbar expand-all control (view only) | error: ### Error Error: Ref e1333 not found in the current page snapshot. Try capturing new snapshot. |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Properties toolbar expand-all control (view only) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-03-staticsignin-properties-expanded-readback.png | ok |
| 30 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-03-staticsignin-properties-expanded-readback.png | ok |
| 31 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-04-staticsignin-layout-misc-readback.png | ok |
| 33 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-04-staticsignin-layout-misc-readback.png | ok |
| 34 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-04-staticsignin-layout-misc-readback.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-04-staticsignin-layout-misc-readback.png | ok |
| 38 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-04-staticsignin-layout-misc-readback.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-04-staticsignin-layout-misc-readback.png | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Specific Attributes sub-group label (double-click to expand, view only) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-05-staticsignin-misc-no-colon-readback.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-05-staticsignin-misc-no-colon-readback.png | ok |
| 46 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-05-staticsignin-misc-no-colon-readback.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-05-staticsignin-misc-no-colon-readback.png | ok |
| 49 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-06-staticsignin-margin-dialog-readback-before-cancel.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-06-staticsignin-margin-dialog-readback-before-cancel.png | ok |
| 53 | mcp__playwright__browser_click | element=Cancel button in FlexLayout dialog (StaticSignIn margin readback) | ok |
| 54 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=Components grid Expand button (view only) | ok |
| 57 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=StaticImage1 row in Components tree (selection only) | ok |
| 59 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-07-staticimage1-properties-readback.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-07-staticimage1-properties-readback.png | ok |
| 61 | mcp__playwright__browser_mouse_move_xy | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_mouse_wheel | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t6-07-staticimage1-properties-readback.png | ok |
| 64 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-07-staticimage1-properties-readback.png | ok |
| 65 | mcp__playwright__browser_mouse_click_xy | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 67 | mcp__playwright__browser_click | element=Cancel button of FlexLayout dialog (StaticImage1 Margin) | ok |
| 68 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_click | element=Expand button of Components grid | error: ### Error Error: Ref e519 not found in the current page snapshot. Try capturing new snapshot. |
| 70 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 71 | Grep | (no key/element/filename argument) | ok |
| 72 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 73 | mcp__playwright__browser_take_screenshot | filename=C:\AI\mongoose-factory\evidence\EXP-111\t6-08-final-state-after-margin-cancel.png | ok |
| 74 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t6-08-final-state-after-margin-cancel.png | ok |
| 75 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 76 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 77 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |