# controller-generated audit (not worker prose)

14 actions, 27 reads; prohibited-tool hits=2; errors=0; turns=44; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_UM","FX_UMBase","FX_UMs","FX_Description","FX_sUM"]

Key sequence: [{"order":9,"key":"Tab","result":"ok"},{"order":14,"key":"Tab","result":"ok"}]

Spelled strings: []

Flagged tool usage: {"browser_type":2}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 3 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-00-pre-new-baseline-FX_UMBase-browse-checked-out.png | ok |
| 4 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-00-pre-new-baseline-FX_UMBase-browse-checked-out.png | ok |
| 6 | mcp__playwright__browser_click | element=Toolbar New button (Property Classes runtime) | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_type | element=Class Name textbox of the new add-mode row | ok |
| 9 | mcp__playwright__browser_press_key | key=Tab | ok |
| 10 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 11 | mcp__playwright__browser_type | element=Base Class combobox of the new row | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-01-base-class-FX_UMBase-typed-before-commit.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-01-base-class-FX_UMBase-typed-before-commit.png | ok |
| 14 | mcp__playwright__browser_press_key | key=Tab | ok |
| 15 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-02-base-class-FX_UMBase-after-tab-commit.png | ok |
| 16 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 17 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-02-base-class-FX_UMBase-after-tab-commit.png | ok |
| 18 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 19 | mcp__playwright__browser_click | element=Base Class Open (dropdown) button | ok |
| 20 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=Base Class list option FX_UMBase | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-03-base-class-FX_UMBase-selected-from-list.png | ok |
| 23 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-03-base-class-FX_UMBase-selected-from-list.png | ok |
| 25 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 26 | mcp__playwright__browser_click | element=Domain IDO Name Open (dropdown) button | ok |
| 27 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 28 | mcp__playwright__browser_click | element=Domain IDO list option FX_UMs | ok |
| 29 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 30 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-04-domain-ido-FX_UMs-selected.png | ok |
| 31 | mcp__playwright__browser_click | element=Domain Property Open (dropdown) button | ok |
| 32 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 33 | mcp__playwright__browser_click | element=Domain Property list option FX_UM | ok |
| 34 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 35 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-05-domain-property-FX_UM-selected.png | ok |
| 36 | mcp__playwright__browser_click | element=Domain List Properties Open (dropdown) button | ok |
| 37 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 38 | mcp__playwright__browser_click | element=Domain List Properties list option FX_Description | ok |
| 39 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 40 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-06-pre-save-all-five-configured-values.png | ok |
| 41 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-06-pre-save-all-five-configured-values.png | ok |
| 42 | mcp__playwright__browser_click | element=Toolbar Save button (Property Classes runtime) | ok |
| 43 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-047-R2/t2-07-post-save-settled-single-save.png | ok |
| 44 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 45 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 46 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-07-post-save-settled-single-save.png | ok |
| 47 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 49 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 50 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md | ok |
| 51 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-evidence-summary.md | ok |
| 52 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-04-domain-ido-FX_UMs-selected.png | ok |
| 53 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-047-R2\t2-05-domain-property-FX_UM-selected.png | ok |