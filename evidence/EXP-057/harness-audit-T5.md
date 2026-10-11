# controller-generated audit (not worker prose)

10 actions, 13 reads; prohibited-tool hits=4; errors=0; turns=48; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["FX_Items"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":4}

Errors: []

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_tabs | action=list | ok |
| 2 | mcp__playwright__browser_tabs | action=select | ok |
| 3 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-00-designer-fresh-pre-variables.md | ok |
| 4 | Grep | (no key/element/filename argument) | ok |
| 5 | Grep | (no key/element/filename argument) | ok |
| 6 | Grep | (no key/element/filename argument) | ok |
| 7 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-00-designer-fresh-pre-variables.md | ok |
| 8 | mcp__playwright__browser_click | element=Properties panel Form tab (view state) | ok |
| 9 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-01-designer-form-properties-identity.md | ok |
| 10 | Grep | (no key/element/filename argument) | ok |
| 11 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-01-designer-form-properties-identity.md | ok |
| 12 | Grep | (no key/element/filename argument) | ok |
| 13 | mcp__playwright__browser_click | element=Details panel Variables tab (view state) | ok |
| 14 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-02-variables-tab-unfiltered-inventory.md | ok |
| 15 | Grep | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-02-variables-tab-unfiltered-inventory.md | ok |
| 17 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-057/t5-01-variables-tab-unfiltered-categories-collapsed.png | ok |
| 18 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-01-variables-tab-unfiltered-categories-collapsed.png | ok |
| 19 | mcp__playwright__browser_click | element=Variables grid Expand button (view state) | ok |
| 20 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-03-variables-tab-expanded-all-categories.md | ok |
| 21 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-03-variables-tab-expanded-all-categories.md | ok |
| 22 | Grep | (no key/element/filename argument) | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-03-variables-tab-expanded-all-categories.md | ok |
| 24 | mcp__playwright__browser_click | element=Variables grid Form - Temporary FX_VarTest row (selection only) | ok |
| 25 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-04-fx-vartest-row-selected-definition-readback.md | ok |
| 26 | Grep | (no key/element/filename argument) | ok |
| 27 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-04-fx-vartest-row-selected-definition-readback.md | ok |
| 28 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-057/t5-02-form-temporary-fx-vartest-row-selected-definition-attributes.png | ok |
| 29 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-02-form-temporary-fx-vartest-row-selected-definition-attributes.png | ok |
| 30 | mcp__playwright__browser_click | element=Variables grid Search filter textbox (filter only) | ok |
| 31 | mcp__playwright__browser_type | element=Variables grid Search filter textbox | ok |
| 32 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-05-variables-filter-exact-FX_VarTest.md | ok |
| 33 | Grep | (no key/element/filename argument) | ok |
| 34 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-05-variables-filter-exact-FX_VarTest.md | ok |
| 35 | mcp__playwright__browser_type | element=Variables grid Search filter textbox (positive control) | ok |
| 36 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-06-variables-filter-positive-control-Initial.md | ok |
| 37 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-06-variables-filter-positive-control-Initial.md | ok |
| 38 | mcp__playwright__browser_type | element=Variables grid Search filter textbox (EXP-056 filter string) | ok |
| 39 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-07-variables-filter-VarTest-same-string-as-EXP-056.md | ok |
| 40 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-snapshot-07-variables-filter-VarTest-same-string-as-EXP-056.md | ok |
| 41 | mcp__playwright__browser_type | element=Variables grid Search filter textbox (clear filter) | ok |
| 42 | mcp__playwright__browser_snapshot | filename=evidence/EXP-057/t5-snapshot-08-final-clean-designer-filter-cleared-FX_Items-open.md | ok |
| 43 | Grep | (no key/element/filename argument) | ok |
| 44 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-057/t5-03-final-clean-designer-variables-filter-cleared-FX_Items-open.png | ok |
| 45 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-057\t5-03-final-clean-designer-variables-filter-cleared-FX_Items-open.png | ok |
| 46 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-057\T2D-variables-verification-report.md | ok |
| 47 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md | ok |
| 48 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md | ok |
| 49 | Glob | (no key/element/filename argument) | ok |