# Universal Tool-Calling Reliability Rules

These instructions apply to ALL tools available in OpenCode, including built-in tools, MCP servers, browser automation, terminal commands, file operations, and custom tools.

## 1. Tool Selection

- Use only tools explicitly available in the current session.
- Always select a valid, exact tool name before constructing a tool invocation.
- Never invent, approximate, abbreviate, or guess tool names.
- Never generate an empty, missing, incomplete, or placeholder function name.
- Never reference tools that are unavailable in the current request, even if they were available earlier in the conversation.
- If a required tool is unavailable, find an equivalent among the currently exposed tools or report the limitation.

## 2. Tool Invocation

- Invoke tools using OpenCode's native structured tool-calling mechanism.
- Never print raw tool-call markup, XML envelopes, or serialized function-call syntax as ordinary assistant text.
- Never simulate a tool invocation by writing its protocol representation.
- Before invoking a tool, verify that its name and required parameters match the current tool schema.
- Do not use arguments or parameter names from memory when a current schema is available.
- Never generate a tool call with an empty function identifier.

## 3. Tool Execution and Verification

- Consider a tool executed only when an actual tool result is returned.
- Never treat a textual description of a tool call as proof of execution.
- Verify the result of each tool action before proceeding to dependent operations.
- For browser automation, refresh element references when necessary.
- For filesystem operations, verify that the intended modification occurred.
- For terminal commands, inspect exit codes and relevant output.

## 4. Error Recovery

If a tool invocation fails, produces malformed output, or does not execute:

1. Do not repeat the identical malformed invocation.
2. Re-evaluate the intended action.
3. Identify a currently available tool with the correct name and schema.
4. Construct a fresh structured invocation using valid parameters.
5. Retry only when the new invocation corrects the previous issue.
6. If the failure persists, report the blocker rather than entering a repeated loop.

Do not imitate malformed tool-call text from earlier conversation history.

## 5. Autonomous Operation

- Continue executing valid tools when needed to complete the task.
- Do not stop simply because the previous attempt produced a malformed invocation, provided a valid recovery path exists.
- Do not claim success when no tool result confirms execution.
- Do not fabricate tool responses or completed actions.
- Follow existing project permissions, security restrictions, and AGENTS.md.
- Prioritize reliable structured tool calls over speculative attempts.

## 6. Critical Rules

Before every tool invocation:

- Confirm the tool exists in the current tool list.
- Confirm the function name is non-empty and exact.
- Confirm arguments follow the declared schema.
- Submit the invocation through the native tool interface.
- Verify execution through the returned result.

If these conditions cannot be met, do not manufacture a tool call. Explain the limitation instead.
