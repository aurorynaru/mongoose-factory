# T1 Preflight — GetSessionInfo session-liveness check on inherited Designer session (read-only)

Date: 2026-10-03 (EXP-013 T1, cycle 1, task T1)
Context: First action after browser-state inspection. Run from the carried-over classic Designer tab (Tab 3) rendering `FX_FormVariableLab02` (EXP-012 leftover, left open and dirty by the EXP-012 T4 blocker). No mutation performed.

## Method

Read-only in-page same-origin `GET` to the Designer tab's own `AppApi/GetSessionInfo` endpoint (the same canonical session-liveness check used in EXP-012 T1/T4). No mutation; no credential value read/printed.

```
GET https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/AppApi/GetSessionInfo?_dc=<timestamp>
headers: Accept: application/json, text/plain, */*
credentials: include
```

## Response

```
HTTP 200 (elapsed ~200 ms)
{"Success":true,"Message":"Your session has expired.","Payload":{"action":"sessionexp","payload":{"msg":"Your session has expired.","buttontext":"OK"}}}
```

## Interpretation

- The inherited Designer session (Tab 3, `inforSessionId` `…~2f25ffee-6dc7-4b05-af0b-db5aaaf6427`) is **EXPIRED** / not usable.
- Per the EXP-012 T1/T4 finding, a rendered Designer + status-bar scope text are **NOT** proof of a live session; the `GetSessionInfo` result is authoritative. The rendered `FX_FormVariableLab02` (with its unsaved `FX_PersistentRetentionVar` variable) and the `[ ScopeType: User / ScopeName: <username> ]` status bar (evidence `01`) are **stale artifacts** of the expired session.
- The Web Client tab (Tab 0) is independently **logged out** (portal SLO "Logout Successful" page; evidence `02`).
- **Consequence:** the inherited Mongoose/Web Client session is **not live**. Per the EXP-013 T1 instruction, the session must be established via the supported flow **now, before any artifact mutation**.