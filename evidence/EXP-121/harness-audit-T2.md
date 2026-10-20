# controller-generated audit (not worker prose)

17 actions, 28 reads; prohibited-tool hits=4; errors=4; turns=51; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticCart","GridOrders","ButtonCheckout","FX_sCheckout"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: ["#13 mcp__playwright__browser_click: ### Error\nError: Ref e557 not found in the current page snapshot. Try capturing new snapshot.","#29 mcp__playwright__browser_type: ### Error\nError: Ref e1842 not found in the current page snapshot. Try capturing new snapshot.","#36 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1836 not found in the current page snapshot. Try capturing new snapshot.","#45 mcp__playwright__browser_snapshot: ### Error\nError: Ref e2132 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-121-hello-world-part-8-phase-4a-cart-page-components.md | ok |
| 3 | mcp__playwright__browser_tabs | action=list | ok |
| 4 | mcp__playwright__browser_tabs | action=select | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Expand Panel button (Details) | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Components tab in Details panel | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-121/t1r-01-recovery-state-after-operator-reload.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-121\t1r-01-recovery-state-after-operator-reload.png | ok |
| 13 | mcp__playwright__browser_click | element=Expand button (Components grid toolbar) | error: ### Error Error: Ref e557 not found in the current page snapshot. Try capturing new snapshot. |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_click | element=Expand button (Components grid toolbar) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_click | element=Edit menu | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=String menu item in Edit menu | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_type | element=Strings filter search textbox in Global Objects | ok |
| 25 | mcp__playwright__browser_click | element=Search icon for Strings filter | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=FX_sHome row in Strings list | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_type | element=Strings filter search textbox in Global Objects | error: ### Error Error: Ref e1842 not found in the current page snapshot. Try capturing new snapshot. |
| 30 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_type | element=Strings filter search textbox in Global Objects | ok |
| 32 | mcp__playwright__browser_click | element=Search icon for Strings filter | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=FX_sCart row in Strings list | ok |
| 35 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1836 not found in the current page snapshot. Try capturing new snapshot. |
| 37 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_type | element=Strings filter search textbox in Global Objects | ok |
| 39 | mcp__playwright__browser_click | element=Search icon for Strings filter | ok |
| 40 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-121/t1r-02-strings-check-fx-scheckout-filter-empty.png | ok |
| 44 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-121\t1r-02-strings-check-fx-scheckout-filter-empty.png | ok |
| 45 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e2132 not found in the current page snapshot. Try capturing new snapshot. |
| 46 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Cancel button in Global Objects dialog | ok |
| 48 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-121/t1r-03-gate-tree-and-cartpage-column-final.png | ok |
| 50 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-121\t1r-03-gate-tree-and-cartpage-column-final.png | ok |
| 51 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-121-hello-world-part-8-phase-4a-cart-page-components.md | ok |
| 52 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-121-hello-world-part-8-phase-4a-cart-page-components.md | ok |
| 53 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-121-hello-world-part-8-phase-4a-cart-page-components.md | ok |