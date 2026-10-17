# controller-generated audit (not worker prose)

24 actions, 48 reads; prohibited-tool hits=4; errors=4; turns=78; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["ButtonSignIn","ButtonHome","ButtonCart","FX_sSignIn","FX_sHome","FX_sCart","Sign In","Home","Cart","FX_BlueButton"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: ["#36 mcp__playwright__browser_click: ### Error\nError: Ref e2405 not found in the current page snapshot. Try capturing new snapshot.","#37 mcp__playwright__browser_snapshot: ### Error\nError: Ref e2047 not found in the current page snapshot. Try capturing new snapshot.","#43 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1981 not found in the current page snapshot. Try capturing new snapshot.","#50 mcp__playwright__browser_snapshot: ### Error\nError: Ref e2 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-110-hello-world-part-7-section-7-fx-customer-portal-menu-buttons.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-109-hello-world-part-7-section-6b-fx-customer-portal-main-regions.md | ok |
| 9 | mcp__playwright__browser_tabs | action=list | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=closable FX_CustomerPortal Form-tab close control | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Form menu | ok |
| 18 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=FX_CustomerPortal recent-forms menu entry | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_click | element=Details Expand Panel | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Details Components tab | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_click | element=Components grid Expand button | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=ButtonSignIn row in Components tree | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=ButtonHome row in Components tree | error: ### Error Error: Ref e2405 not found in the current page snapshot. Try capturing new snapshot. |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e2047 not found in the current page snapshot. Try capturing new snapshot. |
| 38 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_click | element=ButtonHome row in Components tree | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1981 not found in the current page snapshot. Try capturing new snapshot. |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=ButtonCart row in Components tree | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R3/t3-01-reopened-canvas-and-components-tree.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R3\t3-01-reopened-canvas-and-components-tree.png | ok |
| 50 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e2 not found in the current page snapshot. Try capturing new snapshot. |
| 51 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_click | element=Edit menu | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 56 | mcp__playwright__browser_click | element=Edit menu String item | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 60 | mcp__playwright__browser_click | element=Global Objects filter search icon | ok |
| 61 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 62 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 63 | mcp__playwright__browser_click | element=Global Objects filter search icon | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_click | element=FX_sSignIn row in Global Objects grid | ok |
| 67 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 68 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 69 | mcp__playwright__browser_click | element=Global Objects filter search icon | ok |
| 70 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 71 | mcp__playwright__browser_click | element=FX_sHome row in Global Objects grid | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_type | element=Global Objects Strings filter textbox | ok |
| 74 | mcp__playwright__browser_click | element=Global Objects filter search icon | ok |
| 75 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 76 | mcp__playwright__browser_click | element=FX_sCart row in Global Objects grid | ok |
| 77 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-110-R3/t3-02-strings-check-fx-scart-cart.png | ok |
| 79 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-110-R3\t3-02-strings-check-fx-scart-cart.png | ok |
| 80 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_click | element=Global Objects Cancel button | ok |
| 82 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 83 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 84 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 85 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |
| 87 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md | ok |