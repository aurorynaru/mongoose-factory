# T1 Preflight — GetSessionInfo reports "expired" while the form workflow is live (read-only)

Date: 2026-10-03 (EXP-013 T1, cycle 1, task T1)
Context: After the session was re-established and the Web Client **Select Form** had loaded the **full 649-form inventory** (evidence `09`) and the Designer scope dialog had returned **Scope: User** (evidence `08`), a read-only `GetSessionInfo` check was re-run from **both** the Designer tab and the Web Client iframe to see whether the AppApi session now reported live.

## Method

Read-only in-page same-origin `GET` to `AppApi/GetSessionInfo` (the same canonical endpoint used in EXP-012 T1/T4 and in this preflight's evidence `03`), run twice:
1. From the **Designer** tab (Tab 4, the live classic Designer established via the split-button).
2. From inside the **Web Client** iframe `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87` (the `mgapse1ap.mtmgf.se1.mongoosepaas.io` origin where the AppApi session lives).

```
GET https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/AppApi/GetSessionInfo?_dc=<timestamp>
headers: Accept: application/json; version=1.0.0
credentials: include
```

## Responses (both identical)

```
HTTP 200
{"Success":true,"Message":"Your session has expired.","Payload":{"action":"sessionexp","payload":{"msg":"Your session has expired.","buttontext":"OK"}}}
```

- From the **Designer** tab (Tab 4): `Message = "Your session has expired."`
- From the **Web Client** iframe (Tab 0): `Message = "Your session has expired."`

## Interpretation

- At this moment the form workflow is **demonstrably live**: the Web Client **Select Form** loaded the **full 649-form inventory** (server-backed form-store round-trip succeeded; evidence `09`, `13`) and the Designer **scope dialog** returned **Scope: User** (evidence `08`), with the Designer status bar showing `[ ScopeType: User / ScopeName: <username> ]` (evidence `12`).
- Yet `GetSessionInfo` **still reports "Your session has expired."** from **both** the Designer and the Web Client contexts.
- **Refinement of the EXP-012 finding:** EXP-012 observed a *transient* "expired" state immediately after sign-in that "recovered" once the Designer session was established — but that recovery was measured by the **Select Form** loading the inventory, not by `GetSessionInfo`. EXP-013 shows that **even after the form workflow is fully functional, `GetSessionInfo` can continue to report "expired."**
- **Conclusion:** `GetSessionInfo` (AppApi) is **not a reliable liveness indicator** for the form-designer workflow. It is reliable in the **"definitely dead"** direction (a genuinely expired session + logged-out Web Client, as at this preflight's start — evidence `03`), but it is **not** a valid **"definitely live"** gate. The **authoritative liveness check is a server-backed form operation** — the **Select Form inventory load** (and, for the Designer, the scope dialog / recent-forms menu). A `GetSessionInfo` "expired" response **must not** be treated as proof that a live, working session is unusable.
- **No mutation** was performed; no credential value was read/printed.