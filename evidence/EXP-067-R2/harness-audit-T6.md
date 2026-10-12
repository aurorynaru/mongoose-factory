# controller-generated audit (not worker prose)

26 actions, 49 reads; prohibited-tool hits=5; errors=1; turns=83; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items","FX_UMsDescriptionStatic","FX_UMsDescriptionEdit","FX_UMsDescription","FX_sDescription"]

Key sequence: [{"order":14,"key":"Tab","result":"ok"},{"order":32,"key":"Tab","result":"ok"},{"order":37,"key":"Tab","result":"ok"},{"order":51,"key":"Tab","result":"ok"},{"order":56,"key":"Tab","result":"ok"},{"order":63,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":5}

Errors: ["#43 mcp__playwright__browser_snapshot: ### Error\nError: Ref e2534 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-067-R2/t6-01-pre-static-drop-state-dirty-edit-present-static-absent.png | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-067-R2\t6-01-pre-static-drop-state-dirty-edit-present-static-absent.png | ok |
| 5 | mcp__playwright__browser_mouse_drag_xy | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-067-R2/t6-02-post-static-drop-auto-named-canvas-and-components.png | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-067-R2\t6-02-post-static-drop-auto-named-canvas-and-components.png | ok |
| 8 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_click | element=Name value cell in Properties (static1_USER) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_type | element=Name editor textbox (active, value static1_USER) | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_click | element=Location value text in Properties (static1 → FX_UMsDescriptionStatic) | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 20 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-067-R2/t6-03-static-layout-location-expansion-check.png | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-067-R2\t6-03-static-layout-location-expansion-check.png | ok |
| 22 | mcp__playwright__browser_click | element=Location expand caret in Layout group (FX_UMsDescriptionStatic) | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_click | element=Location value text in Properties (FX_UMsDescriptionStatic) | ok |
| 26 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Top value text in Location (FX_UMsDescriptionStatic) | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_type | element=Top editor textbox (active, value 11.055555555555555) | ok |
| 32 | mcp__playwright__browser_press_key | key=Tab | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Left value text in Location (FX_UMsDescriptionStatic) | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_type | element=Left editor textbox (active, value 42.75) | ok |
| 37 | mcp__playwright__browser_press_key | key=Tab | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_click | element=Size value text in Layout group (FX_UMsDescriptionStatic) | ok |
| 40 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 41 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e2534 not found in the current page snapshot. Try capturing new snapshot. |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | mcp__playwright__browser_click | element=Size value text in Layout group (FX_UMsDescriptionStatic), second attempt | ok |
| 47 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 48 | mcp__playwright__browser_click | element=Width value text in Size (FX_UMsDescriptionStatic) | ok |
| 49 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 50 | mcp__playwright__browser_type | element=Width editor textbox (active, value 87.5) | ok |
| 51 | mcp__playwright__browser_press_key | key=Tab | ok |
| 52 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 53 | mcp__playwright__browser_click | element=Height value text in Size (FX_UMsDescriptionStatic) | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_type | element=Height editor textbox (active, value 16.666666666666668) | ok |
| 56 | mcp__playwright__browser_press_key | key=Tab | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | mcp__playwright__browser_click | element=Caption dropdown arrow in Properties (FX_UMsDescriptionStatic) | ok |
| 59 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 60 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-067-R2/t6-04-caption-dropdown-lists-fx_sdescription-before-select.png | ok |
| 61 | mcp__playwright__browser_click | element=FX_sDescription option in Caption dropdown | ok |
| 62 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 63 | mcp__playwright__browser_press_key | key=Tab | ok |
| 64 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 65 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-067-R2/t6-05-static-configured-properties-and-canvas-caption-resolution.png | ok |
| 66 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-067-R2\t6-05-static-configured-properties-and-canvas-caption-resolution.png | ok |
| 67 | mcp__playwright__browser_snapshot | filename=evidence/EXP-067-R2/t6-06-full-snapshot-components-list-readback.yml | ok |
| 68 | Grep | (no key/element/filename argument) | ok |
| 69 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 70 | mcp__playwright__browser_click | element=FX_UMsDescriptionEdit treeitem in Components grid | ok |
| 71 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 73 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_click | element=FX_UMsDescriptionStatic treeitem in Components grid | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 78 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 79 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-067-R2/t6-07-final-both-components-target-area-dirty-unsaved.png | ok |
| 80 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-067-R2\t6-07-final-both-components-target-area-dirty-unsaved.png | ok |
| 81 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 82 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-067-R2\T6-static-drop-and-configuration-report.md | ok |
| 83 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md | ok |
| 84 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md | ok |
| 85 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md | ok |
| 86 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md | ok |