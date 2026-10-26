# controller-generated audit (not worker prose)

0 actions, 4 reads; prohibited-tool hits=0; errors=1; turns=6; key string (none)

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: []

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#6 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m"]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-137-fx-loginusers-login-data-layer-wizard-generated-fo.md | ok |
| 2 | Glob | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-137\harness-audit-T5.md | ok |
| 4 | mcp__playwright__browser_tabs | action=list | ok |
| 5 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 6 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-137/t6-00-restored-session-idos-panel-viewport.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 7 | mcp__playwright__browser_console_messages | (no key/element/filename argument) | ok |
| 8 | Write | file_path=C:\AI\mongoose-factory\evidence\EXP-137\T6-recovery-checkpoint.md | ok |