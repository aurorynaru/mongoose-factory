# controller-generated audit (not worker prose)

12 actions, 20 reads; prohibited-tool hits=0; errors=3; turns=40; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticPicture","StaticItem","StaticItemDescription","StaticCost","FX_ItemsTile"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#19 mcp__playwright__browser_snapshot: ### Error\nError: Ref e1125 not found in the current page snapshot. Try capturing new snapshot.","#25 mcp__playwright__browser_click: ### Error\nError: Ref e1641 not found in the current page snapshot. Try capturing new snapshot.","#30 mcp__playwright__browser_click: ### Error\nError: Ref e1666 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | mcp__playwright__browser_click | element=FX_ItemsTile tab close control | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_click | element=Form menu | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_click | element=Form menu recent-forms entry FX_ItemsTile | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Details Expand Panel control (view-only) | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_click | element=Details Components tab (view-only) | ok |
| 13 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_click | element=Components grid Expand control (view-only) | ok |
| 15 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-116/t6-01-reopened-canvas-full-tree-form-properties.png | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-116\t6-01-reopened-canvas-full-tree-form-properties.png | ok |
| 18 | mcp__playwright__browser_click | element=StaticPicture row (Components tree) | ok |
| 19 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e1125 not found in the current page snapshot. Try capturing new snapshot. |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-116/t6-02-StaticPicture-properties-readback.png | ok |
| 22 | mcp__playwright__browser_click | element=StaticItem row (Components tree) | ok |
| 23 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-116/t6-03-StaticItem-properties-readback.png | ok |
| 25 | mcp__playwright__browser_click | element=StaticItemDescription row (Components tree) | error: ### Error Error: Ref e1641 not found in the current page snapshot. Try capturing new snapshot. |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=StaticItemDescription row (Components tree) | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-116/t6-04-StaticItemDescription-properties-readback.png | ok |
| 30 | mcp__playwright__browser_click | element=StaticCost row (Components tree) | error: ### Error Error: Ref e1666 not found in the current page snapshot. Try capturing new snapshot. |
| 31 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 32 | mcp__playwright__browser_click | element=StaticCost row (Components tree) | ok |
| 33 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-116/t6-05-StaticCost-properties-readback.png | ok |
| 35 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-116\t6-02-StaticPicture-properties-readback.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-116\t6-03-StaticItem-properties-readback.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-116\t6-04-StaticItemDescription-properties-readback.png | ok |
| 38 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-116\t6-05-StaticCost-properties-readback.png | ok |
| 39 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |
| 40 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |
| 41 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |
| 42 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |
| 43 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |
| 44 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |
| 45 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-116-hello-world-part-8-phase-1b-fx-itemstile-components.md | ok |