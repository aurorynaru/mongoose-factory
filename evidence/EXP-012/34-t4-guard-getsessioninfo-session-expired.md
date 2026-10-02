# T4 Guard — GetSessionInfo session-liveness check (read-only)

Date: 2026-10-03 (T4, cycle 9, task T8)
Context: Pre-Save read-only guard for T4. Run from the live classic Designer tab (Tab 3) on `FX_FormVariableLab02`, before any Save.

## Method

Read-only in-page same-origin `GET` to the Designer tab's own `AppApi/GetSessionInfo` endpoint (the same canonical session-liveness check used in T1). No mutation; no credential value read/printed.

```
GET https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/AppApi/GetSessionInfo?_dc=<timestamp>
headers: Accept: application/json, text/plain, */*
credentials: include
```

## Response

```
HTTP 200
{"Success":true,"Message":"Your session has expired.","Payload":{"action":"sessionexp","payload":{"msg":"Your session has expired.","buttontext":"OK"}}}
```

## Interpretation

- The session-liveness check reports **`"Your session has expired."`**
- Per the T1 finding, a rendered Designer + status-bar scope text are **NOT** proof of a live session; the `GetSessionInfo` result is authoritative. The rendered `FX_FormVariableLab02` + `[ ScopeType: User / ScopeName: <user> ]` status bar (evidence `33`) are **stale artifacts** of the expired session.
- The session **expired after mutation began** (the Form was created in T2 and the variable in T3).

## Consequence (per T4 instruction + AGENTS.md)

- T4 instruction: "If any guard fails or the session has expired, **STOP without Save** and record the blocker."
- AGENTS.md / task Prohibited: "if the session expires after mutation begins, **stop and record the blocker**"; session establishment is allowed **only before** the first mutation, so it **cannot** be re-established now.
- **Action taken: STOPPED without Save.** No Save, no Regenerate, no close/reopen, no session re-establishment, no other mutation. The single ordinary Designer Save for T4 was **NOT** performed.