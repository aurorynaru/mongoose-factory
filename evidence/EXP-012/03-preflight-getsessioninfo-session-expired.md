# EXP-012 T1 — Read-only GetSessionInfo diagnostic (Designer tab, pre-mutation)

- When: 2026-10-03, EXP-012 T1 preflight, before any session-establishing action and before any Mongoose artifact mutation.
- How: in-page same-origin `fetch` (credentials: include) from the live Designer tab (tab 2, `WSWebClient/designer/default.aspx?…&MGForm=FX_FormPropertyLab12`) to `GET https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/AppApi/GetSessionInfo`. No navigation, reload, login, Sign In/OK, or reauthentication performed for this check.
- Result:
  - HTTP status: **200**
  - Top-level keys: `Success`, `Message`, `Payload`
  - `Success`: `true`
  - `Message`: **"Your session has expired."**
  - `Payload`: `{"action":"sessionexp","payload":{"msg":"Your session has expired.","buttontext":"OK"}}`
  - Raw body (152 chars): `{"Success":true,"Message":"Your session has expired.","Payload":{"action":"sessionexp","payload":{"msg":"Your session has expired.","buttontext":"OK"}}}`
- Interpretation: the inherited Designer Mongoose session is **EXPIRED / not usable**. The rendered Designer (stale `FX_FormPropertyLab12` form tab, User-scope status bar, clean toolbar) is stale client-side state and is **not** evidence of a live session.
- Consequence: per the EXP-012 T1 instruction, a session must be established through the previously documented supported Web Client/Mongoose sign-in flow before any artifact mutation. This occurred **before any Mongoose artifact mutation**.