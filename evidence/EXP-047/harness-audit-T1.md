# controller-generated audit (not worker prose)

6 actions, 13 reads; prohibited-tool hits=1; errors=0; turns=27; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UM","FX_UMBase","FX_UMs","FX_Description","FX_sUM"]

Key sequence: [{"order":18,"key":"Tab","result":"ok"},{"order":21,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-046-hello-world-part-2-two-fx-ums-test-records-and-run.md | ok |
| 8 | Glob | (no key/element/filename argument) | ok |
| 9 | mcp__playwright__browser_click | element=Property Classes runtime tab | ok |
| 10 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047/t1-01-preflight-property-classes-fxumbase-baseline.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047\t1-01-preflight-property-classes-fxumbase-baseline.png | ok |
| 13 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP) | ok |
| 14 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047/t1-02-fip-mode-after-one-click-check.png | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047\t1-02-fip-mode-after-one-click-check.png | ok |
| 17 | mcp__playwright__browser_type | element=Class Name criteria textbox (FiP) | ok |
| 18 | mcp__playwright__browser_press_key | key=Tab | ok |
| 19 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047/t1-03-fip-criteria-FX_UM-committed-before-f4.png | ok |
| 20 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047\t1-03-fip-criteria-FX_UM-committed-before-f4.png | ok |
| 21 | mcp__playwright__browser_press_key | key=F4 | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047/t1-04-gate-FX_UM-exact-after-one-f4.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047\t1-04-gate-FX_UM-exact-after-one-f4.png | ok |
| 24 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Filter in Place toolbar button (FiP), positive control | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047/t1-05-fip-reentered-before-positive-control.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047\t1-05-fip-reentered-before-positive-control.png | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-047-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 32 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-047\cleanup-inventory.md | ok |