# EXP-011 T1 read-only diagnostic — GetSessionInfo

Purpose: definitive read-only test of whether the existing Designer Mongoose session is still usable (no navigation, no reload, no re-authentication).

Method: in-page same-origin fetch (credentials: include) to the Designer's own session endpoint, from the live Designer tab (tab 2). No page navigation, reload, login, Sign In/OK, or reauthentication was performed.

```json
{
  "endpoint": "GET https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/AppApi/GetSessionInfo",
  "http_status": 200,
  "response_body_top_level_keys": ["Success", "Message", "Payload"],
  "response_body_length_chars": 152,
  "message_field": "Your session has expired.",
  "credential_values_captured": false
}
```

Interpretation: the Designer's Mongoose backend session has EXPIRED. The rendered form (`FX_FormPropertyLab12`) and the status-bar scope text are stale client-side state from the expired session and are NOT evidence of a live session.

Note: HTTP 200 is the transport status; the application-level payload reports the session as expired. This is the same "Your session has expired." condition observed in EXP-010-R2 when the Designer session lapsed during an idle gap between experiments.