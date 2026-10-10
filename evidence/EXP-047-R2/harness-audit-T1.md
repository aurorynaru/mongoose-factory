# controller-generated audit (not worker prose)

18 actions, 28 reads; prohibited-tool hits=4; errors=0; turns=54; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UM","FX_UMBase","FX_UMs","FX_Description","FX_sUM"]

Key sequence: [{"order":14,"key":"Control+a","result":"ok"},{"order":15,"key":"Backspace","result":"ok"},{"order":26,"key":"Tab","result":"ok"},{"order":28,"key":"F4","result":"ok"},{"order":39,"key":"Tab","result":"ok"},{"order":42,"key":"F4","result":"ok"},{"order":50,"key":"Tab","result":"ok"},{"order":52,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-047-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 4 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-00-preflight-explorer-no-runtime-tabs.png | ok |
| 7 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-00-preflight-explorer-no-runtime-tabs.png | ok |
| 9 | Grep | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Toolbar Open button (inner) in Mongoose Explorer | ok |
| 11 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Select Form Filter textbox | ok |
| 14 | mcp__playwright__browser_press_key | key=Control+a | ok |
| 15 | mcp__playwright__browser_press_key | key=Backspace | ok |
| 16 | mcp__playwright__browser_type | element=Select Form Filter textbox | ok |
| 17 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-01-select-form-propertyclass-filter.png | ok |
| 19 | mcp__playwright__browser_click | element=Select Form row Caption cell Property Classes | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Select Form OK button | ok |
| 22 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 23 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-02-property-classes-opened-via-select-form-fip-blank.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-02-property-classes-opened-via-select-form-fip-blank.png | ok |
| 25 | mcp__playwright__browser_type | element=Property Classes Class Name criteria textbox (Filter in Place) | ok |
| 26 | mcp__playwright__browser_press_key | key=Tab | ok |
| 27 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-03-baseline-fip-criteria-FX_UMBase-before-f4.png | ok |
| 28 | mcp__playwright__browser_press_key | key=F4 | ok |
| 29 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-04-baseline-FX_UMBase-after-f4.png | ok |
| 31 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 32 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-04-baseline-FX_UMBase-after-f4.png | ok |
| 33 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 34 | mcp__playwright__browser_click | element=Toolbar Filter in Place (FiP) button | ok |
| 35 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 36 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-05-fip-reentered-retains-FX_UMBase-before-gate.png | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-05-fip-reentered-retains-FX_UMBase-before-gate.png | ok |
| 38 | mcp__playwright__browser_type | element=Property Classes Class Name criteria textbox (Filter in Place) | ok |
| 39 | mcp__playwright__browser_press_key | key=Tab | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-06-gate-fip-criteria-FX_UM-before-f4.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-06-gate-fip-criteria-FX_UM-before-f4.png | ok |
| 42 | mcp__playwright__browser_press_key | key=F4 | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-07-gate-FX_UM-after-f4-settled.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-07-gate-FX_UM-after-f4-settled.png | ok |
| 46 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 47 | mcp__playwright__browser_click | element=Toolbar Filter in Place (FiP) button | ok |
| 48 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 49 | mcp__playwright__browser_type | element=Property Classes Class Name criteria textbox (Filter in Place) | ok |
| 50 | mcp__playwright__browser_press_key | key=Tab | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-08-positive-control-fip-criteria-FX_UMBase-before-f4.png | ok |
| 52 | mcp__playwright__browser_press_key | key=F4 | ok |
| 53 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t1-09-positive-control-FX_UMBase-after-f4-settled.png | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-09-positive-control-FX_UMBase-after-f4-settled.png | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 58 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-01-select-form-propertyclass-filter.png | ok |
| 59 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-03-baseline-fip-criteria-FX_UMBase-before-f4.png | ok |
| 60 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-08-positive-control-fip-criteria-FX_UMBase-before-f4.png | ok |
| 61 | Glob | (no key/element/filename argument) | ok |
| 62 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 63 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 64 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 65 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 66 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 67 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t1-evidence-summary.md | ok |