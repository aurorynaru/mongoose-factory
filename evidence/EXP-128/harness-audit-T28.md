# controller-generated audit (not worker prose)

1 actions, 11 reads; prohibited-tool hits=0; errors=4; turns=17; key string (none); exact mismatches=0

This records attempted tool calls and native results, not rendered-state proof or acceptance. Flagged tools may be allowed by other briefs. Strings are attempted printable runs, not inferred textbox contents.

Exact values: ["MockLoginPortal","MockInventory","MockLoginIDO"]

Key sequence: []

Spelled strings: []

Flagged tool usage: {}

Errors: ["#8 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#9 mcp__playwright__browser_take_screenshot: ### Error\nTimeoutError: browserBackend.callTool: Timeout 5000ms exceeded.\nCall log:\n\u001b[2m  - taking page screenshot\u001b[22m\n\u001b[2m  - waiting for fonts to load...\u001b[22m\n\u001b[2m  - fonts loaded\u001b[22m","#11 mcp__playwright__browser_snapshot: Error: result (85,221 characters across 1,476 lines) exceeds maximum allowed tokens. Output has been saved to C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-factory\\04aed0f9-ad9c-43e3-8288-bd0c0a599798\\tool-results\\mcp-playwright-browser_snapshot-1792920913176.txt.\nFormat: Plain text\n- For targeted searches (find a line, locate a string): use grep on the file directly.\n- For analysis or summarization that requires reading the full content: read C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-fact… (1213 chars)","#12 Grep: Permission to read C:\\Users\\juara\\.claude\\projects\\C--AI-mongoose-factory\\04aed0f9-ad9c-43e3-8288-bd0c0a599798\\tool-results\\mcp-playwright-browser_snapshot-1792920913176.txt has been denied."]

Audit limitations: []

| Order | Tool | Key argument | Result |
| --- | --- | --- | --- |
| 1 | Read | file_path=C:\AI\mongoose-factory\AGENTS.md | ok |
| 2 | Grep | (no key/element/filename argument) | ok |
| 3 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginIDO-metadata.txt | ok |
| 4 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\MockLoginPortal-form-script.cs.txt | ok |
| 5 | mcp__playwright__browser_tabs | action=list | ok |
| 6 | Read | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |
| 7 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 8 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t28-00-designer-baseline.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 9 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t28-00-designer-baseline.png | error: ### Error TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded. Call log: [2m  - taking page screenshot[22m [2m  - waiting for fonts to load...[22m [2m  - fonts loaded[22m |
| 10 | mcp__playwright__browser_tabs | action=select | ok |
| 11 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | error: Error: result (85,221 characters across 1,476 lines) exceeds maximum allowed tokens. Output has been saved to C:\Users\juara\.claude\projects\C--AI-mongoose-factory\04aed0f9-ad9c-43e3-8288-bd0c0a599798\tool-results\mcp-playwright-browser_snapshot-1792920913176.txt. Format: Plain text - For targeted searches (find a line, locate a string): use grep on the file directly. - For analysis or summarization that requires reading the full content: read C:\Users\juara\.claude\projects\C--AI-mongoose-fact… (1213 chars) |
| 12 | Grep | (no key/element/filename argument) | error: Permission to read C:\Users\juara\.claude\projects\C--AI-mongoose-factory\04aed0f9-ad9c-43e3-8288-bd0c0a599798\tool-results\mcp-playwright-browser_snapshot-1792920913176.txt has been denied. |
| 13 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 14 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 15 | mcp__playwright__browser_find | (no key/element/filename argument) | ok |
| 16 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 17 | mcp__playwright__browser_snapshot | (no key/element/filename argument) | ok |
| 18 | mcp__playwright__browser_take_screenshot | filename=evidence/EXP-128/t28-01-idos-state-observed-gate-not-met.png | ok |
| 19 | Read | file_path=C:\AI\mongoose-factory\evidence\EXP-128\t28-01-idos-state-observed-gate-not-met.png | ok |
| 20 | Edit | file_path=C:\AI\mongoose-factory\experiments\EXP-128-mock-inventory-portal-read-only-study.md | ok |