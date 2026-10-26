# controller-generated audit (not worker prose)

3 actions, 4 reads; prohibited-tool hits=1; errors=1; turns=13; audit issues=2; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: []

Spelled strings: []

Flagged tool usage: {"browser_type":1}

Errors: ["#14 mcp__playwright__browser_type: ### Error\nError: Ref f1e325 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: ["Malformed/truncated event at line 89","No terminal event; audit may be partial"]

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Grep | (no key/element/filename argument) | ok |
| 4 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 5 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 6 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 7 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 8 | mcp__playwright__browser_click | element=IDOs panel tab | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | mcp__playwright__browser_click | element=Filter in Place (FiP) toolbar button | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 12 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t5-00-idos-fip-stale-criterion-before-exact-name.png | ok |
| 13 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\t5-00-idos-fip-stale-criterion-before-exact-name.png | ok |
| 14 | mcp__playwright__browser_type | element=IDO Name criteria textbox (Filter in Place, IDOs) | error: ### Error Error: Ref f1e325 not found in the current page snapshot. Try capturing new snapshot. |