# controller-generated audit (not worker prose)

20 actions, 34 reads; prohibited-tool hits=2; errors=1; turns=60; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_CustomerPortal","FX_SetNewCartEntry","FX_AddToCart","FX_CustomerID","FX_Count"]

Key sequence: [{"order":24,"key":"Tab","result":"ok"},{"order":38,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: ["#57 mcp__playwright__browser_snapshot: ### Error\nError: Ref e11 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=FX_SetNewCartEntry row 0 Response Type cell (select row) | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Parameters Open Edit Property Dialog ellipsis | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Event Handler Parameters Properties ellipsis | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Edit Set Property Values New button | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Edit Set Property Value Pair Target Open list arrow | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_click | element=Target list option FX_Count | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_click | element=Edit Set Property Value Pair Value textbox | ok |
| 23 | mcp__playwright__browser_type | element=Edit Set Property Value Pair Value textbox | ok |
| 24 | mcp__playwright__browser_press_key | key=Tab | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Edit Set Property Value Pair OK (FX_Count pair) | ok |
| 27 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Edit Set Property Values New button (second new pair) | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_click | element=Edit Set Property Value Pair Target Open list arrow (CustomerID pair) | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Target list option FX_CustomerID | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_click | element=Edit Set Property Value Pair Value textbox (CustomerID pair) | ok |
| 37 | mcp__playwright__browser_type | element=Edit Set Property Value Pair Value textbox (CustomerID pair) | ok |
| 38 | mcp__playwright__browser_press_key | key=Tab | ok |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_click | element=Edit Set Property Value Pair OK (FX_CustomerID pair) | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_take_screenshot | element=Edit Set Property Values list with three pairs before OK; filename=evidence/EXP-126/t3-01-three-pairs-list-before-ok.png | ok |
| 43 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-126\t3-01-three-pairs-list-before-ok.png | ok |
| 44 | mcp__playwright__browser_click | element=Edit Set Property Values list OK | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Event Handler Parameters OK | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_take_screenshot | element=Event Handlers panel with FX_SetNewCartEntry three-pair Response Parameters before Save; filename=evidence/EXP-126/t3-02-handler-row-before-save.png | ok |
| 49 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-126\t3-02-handler-row-before-save.png | ok |
| 50 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 52 | mcp__playwright__browser_click | element=Designer toolbar Save (one save for T3) | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_take_screenshot | element=Save confirmation toast (Form FX_CustomerPortal saved); filename=evidence/EXP-126/t3-03-save-toast.png | ok |
| 56 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-126\t3-03-save-toast.png | ok |
| 57 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e11 not found in the current page snapshot. Try capturing new snapshot. |
| 58 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 59 | mcp__playwright__browser_take_screenshot | element=Designer toolbar after Save (Save disabled); filename=evidence/EXP-126/t3-04-save-state-after.png | ok |
| 60 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md | ok |
| 61 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md | ok |
| 62 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md | ok |
| 63 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-126-hello-world-part-8-phase-7-add-to-cart-handlers-drag-drop.md | ok |