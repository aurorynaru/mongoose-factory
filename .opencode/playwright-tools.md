# Playwright MCP Tool Rules

When using Playwright MCP:

1. Use only tools actually available in the current OpenCode tool definitions.
2. Never invent or approximate tool names.
3. Never emit raw <tool_call> XML as a substitute for calling an executable tool.
4. For double-clicking, use `playwright_browser_click` with `doubleClick: true`.
5. Do not call `playwright_browser_doubleClick`; that is not a valid Playwright MCP tool.
6. Call `playwright_browser_snapshot` when an element reference may be stale.
7. Use element references from the latest snapshot.
8. If a tool is missing, use an available equivalent or report the problem.
9. Verify that every browser action actually executed before proceeding.
10. Do not repeat a failed tool call without changing the approach.
