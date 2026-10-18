# controller-generated audit (not worker prose)

11 actions, 19 reads; prohibited-tool hits=3; errors=2; turns=39; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticSignIn","StaticImage1","StaticCustID2","EditCustID","ButtonSignIn2","FX_sSignIn","FX_sCustomerID","FX_Header","FX_BlueButton","FX_CustomerSignIn.png","Customer ID"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":3}

Errors: ["#32 mcp__playwright__browser_type: ### Error\nError: Ref e1781 not found in the current page snapshot. Try capturing new snapshot.","#40 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1769 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | Glob | (no key/element/filename argument) | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md | ok |
| 13 | mcp__playwright__browser_tabs | action=list | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_tabs | action=select | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t1-01-gate-tree-and-canvas.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t1-01-gate-tree-and-canvas.png | ok |
| 21 | mcp__playwright__browser_click | element=Edit menu button in Designer top navigation | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_click | element=String menu item in Edit menu | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_type | element=Global Objects search textbox | ok |
| 28 | mcp__playwright__browser_click | element=Search icon of Strings filter | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=FX_sSignIn row in Strings grid | ok |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_type | element=Global Objects search textbox (Strings) | error: ### Error Error: Ref e1781 not found in the current page snapshot. Try capturing new snapshot. |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_type | element=Global Objects search textbox (Strings) | ok |
| 35 | mcp__playwright__browser_click | element=Search icon of Strings filter | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 37 | mcp__playwright__browser_click | element=FX_sCustomerID row in Strings grid | ok |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/t1-02-string-check-fx-scustomerid-value.png | ok |
| 40 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1769 not found in the current page snapshot. Try capturing new snapshot. |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_click | element=Cancel button of Global Objects dialog | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t1-02-string-check-fx-scustomerid-value.png | ok |
| 45 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 46 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |