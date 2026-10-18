# controller-generated audit (not worker prose)

3 actions, 10 reads; prohibited-tool hits=0; errors=1; turns=22; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["StaticSignIn","StaticImage1","StaticCustID2","EditCustID","ButtonSignIn2","FX_sSignIn","FX_sCustomerID","FX_Header","FX_BlueButton","FX_CustomerSignIn.png","Customer ID"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#25 mcp__playwright__browser_snapshot: ### Error\nError: Ref e392 not found in the current page snapshot. Try capturing new snapshot."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\docs\mongoose\transcripts\hello-world-pt7.md | ok |
| 5 | Read | file_path=C:\AI\mongoose-factory\recipes\session\session-expiry-and-stale-designer.md | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\recipes\components\add-component-from-toolbox.md | ok |
| 7 | Glob | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_tabs | action=list | ok |
| 9 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 10 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\harness-audit-T2.md | ok |
| 11 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/recovery-01-current-state-before-any-action.png | ok |
| 12 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\recovery-01-current-state-before-any-action.png | ok |
| 13 | mcp__playwright__browser_click | element=Expand button of Components grid | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t1-01-gate-tree-and-canvas.png | ok |
| 17 | mcp__playwright__browser_click | element=StaticSignIn row in Components tree | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/recovery-02-staticsignin-properties-readonly.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\recovery-02-staticsignin-properties-readonly.png | ok |
| 20 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 21 | mcp__playwright__browser_click | element=StaticImage1 row in Components tree | ok |
| 22 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-111/recovery-03-staticimage1-properties-readonly.png | ok |
| 23 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\recovery-03-staticimage1-properties-readonly.png | ok |
| 24 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-111\t2-21-save-5-after-step-a-staticimage1-named.png | ok |
| 25 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: ### Error Error: Ref e392 not found in the current page snapshot. Try capturing new snapshot. |
| 26 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 27 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |
| 28 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-111-hello-world-part-7-section-8-sign-in-page.md | ok |