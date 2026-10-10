# controller-generated audit (not worker prose)

25 actions, 42 reads; prohibited-tool hits=6; errors=2; turns=82; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_ItemBase","FX_Cost","FX_sItem","FX_sCost","FX_UMBase","FX_UM"]

Key sequence: [{"order":17,"key":"Tab","result":"ok"},{"order":20,"key":"F4","result":"ok"},{"order":32,"key":"Tab","result":"ok"},{"order":34,"key":"F4","result":"ok"},{"order":46,"key":"Tab","result":"ok"},{"order":49,"key":"F4","result":"ok"},{"order":58,"key":"Tab","result":"ok"},{"order":59,"key":"F4","result":"ok"},{"order":67,"key":"Tab","result":"ok"},{"order":70,"key":"F4","result":"ok"},{"order":78,"key":"Tab","result":"ok"},{"order":79,"key":"F4","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":6}

Errors: ["#4 Read: File does not exist. Note: your current working directory is C:\\AI\\mongoose-factory.","#27 mcp__playwright__browser_click: ### Error\nError: Ref f1e38 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Glob | (no key/element/filename argument) | ok |
| 2 | mcp__playwright__browser_tabs | action=list | ok |
| 3 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | error: File does not exist. Note: your current working directory is C:\AI\mongoose-factory. |
| 5 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-047-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md | ok |
| 8 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md | ok |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-preflight-initial-state.png | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-preflight-initial-state.png | ok |
| 12 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-01-fip-entered-retained-criteria-FX_UM.png | ok |
| 15 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-01-fip-entered-retained-criteria-FX_UM.png | ok |
| 16 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 17 | mcp__playwright__browser_press_key | key=Tab | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-02-baseline-criteria-FX_UMBase-before-f4.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-02-baseline-criteria-FX_UMBase-before-f4.png | ok |
| 20 | mcp__playwright__browser_press_key | key=F4 | ok |
| 21 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-03-baseline-FX_UMBase-after-f4-settled.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-03-baseline-FX_UMBase-after-f4-settled.png | ok |
| 24 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | mcp__playwright__browser_click | element=Filter in Place toolbar button | error: ### Error Error: Ref f1e38 not found in the current page snapshot. Try capturing new snapshot. |
| 28 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 29 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 30 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 31 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 32 | mcp__playwright__browser_press_key | key=Tab | ok |
| 33 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-04-baseline-criteria-FX_UM-before-f4.png | ok |
| 34 | mcp__playwright__browser_press_key | key=F4 | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-05-baseline-FX_UM-after-f4-settled.png | ok |
| 36 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-05-baseline-FX_UM-after-f4-settled.png | ok |
| 37 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 39 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-06-baseline-FX_UM-settled-recheck.png | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-06-baseline-FX_UM-settled-recheck.png | ok |
| 41 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 42 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 43 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 46 | mcp__playwright__browser_press_key | key=Tab | ok |
| 47 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-07-gate-FX_ItemBase-criteria-before-f4.png | ok |
| 48 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-07-gate-FX_ItemBase-criteria-before-f4.png | ok |
| 49 | mcp__playwright__browser_press_key | key=F4 | ok |
| 50 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 51 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-08-gate-FX_ItemBase-after-f4-settled.png | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-08-gate-FX_ItemBase-after-f4-settled.png | ok |
| 53 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 54 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 55 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 56 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 57 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 58 | mcp__playwright__browser_press_key | key=Tab | ok |
| 59 | mcp__playwright__browser_press_key | key=F4 | ok |
| 60 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 61 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-09-positive-control-FX_UMBase-after-gate-f4-settled.png | ok |
| 62 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-09-positive-control-FX_UMBase-after-gate-f4-settled.png | ok |
| 63 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 64 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 65 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 66 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 67 | mcp__playwright__browser_press_key | key=Tab | ok |
| 68 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-10-gate-FX_Cost-criteria-before-f4.png | ok |
| 69 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-10-gate-FX_Cost-criteria-before-f4.png | ok |
| 70 | mcp__playwright__browser_press_key | key=F4 | ok |
| 71 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 72 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-11-gate-FX_Cost-after-f4-settled.png | ok |
| 73 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-11-gate-FX_Cost-after-f4-settled.png | ok |
| 74 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 75 | mcp__playwright__browser_click | element=Filter in Place toolbar button | ok |
| 76 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 77 | mcp__playwright__browser_type | element=Class Name criteria textbox | ok |
| 78 | mcp__playwright__browser_press_key | key=Tab | ok |
| 79 | mcp__playwright__browser_press_key | key=F4 | ok |
| 80 | mcp__playwright__browser_wait_for | (no key/element/filename argument) | ok |
| 81 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-048/T1-12-positive-control-FX_UM-after-FX_Cost-gate-f4-settled.png | ok |
| 82 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-048\T1-12-positive-control-FX_UM-after-FX_Cost-gate-f4-settled.png | ok |
| 83 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 84 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 85 | mcp__playwright__browser_tabs | action=list | ok |
| 86 | mcp__playwright__browser_snapshot | filename=evidence/EXP-048/T1-final-form-accessibility-FX_UM.yml | ok |
| 87 | Glob | (no key/element/filename argument) | ok |
| 88 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t1-evidence-summary.md | ok |
| 89 | Edit | file_path=C:\AI\mongoose-factory\evidence\EXP-048\t1-evidence-summary.md | ok |
| 90 | Write | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 91 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 92 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |
| 93 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-048-hello-world-part-2-two-property-classes-with-one-s.md | ok |