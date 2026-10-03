# T5 — Network Save Verification (read-only)

Date: 2026-10-03 (EXP-013 T5, cycle 5, task T5)
Method: Read-only inspection of the browser's retained network request history (Playwright `browser_network_requests` + `browser_network_request`).

## Findings

### Save-related requests

Exactly **ONE** save-related request was found in the retained network history:

| # | Method | URL | Status | Timestamp (response header) |
|---|---|---|---|---|
| 211 | POST | `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/Designer/DesignerSession/SaveChanges` | 200 | Sat, 03 Oct 2026 04:05:14 GMT |

### Request details (request #211)

- **Method:** POST
- **URL:** `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/Designer/DesignerSession/SaveChanges`
- **Content-Type:** `application/json`
- **x-requested-with:** `XMLHttpRequest`
- **x-mg-rvtoken:** present (redacted — contains a session token)
- **Referer `inforSessionId`:** `df74110f-4b39-492d-abac-ddeabf14eb35` (identical to the T2 Designer session)

### Response details (request #211)

- **Status:** 200
- **Content-Type:** `application/json; charset=utf-8`
- **Content-Length:** 102
- **Body:**
  ```json
  {"Success":true,"Message":"Form [FX_FormVariableLab03] and global object(s) were saved.","Payload":[]}
  ```

### Regenerate / second-save check

A filter for `Regenerate|regenerate|Save|save|SaveChanges` across all non-static requests returned **only** request #211. No `RegenerateForm`, no second `SaveChanges`, and no other save-mechanism request was found in the retained history.

## Conclusion

The retained browser network history proves **exactly one** ordinary Designer `SaveChanges` request was made for `FX_FormVariableLab03` during the T2 mutation window, and it succeeded (HTTP 200, `Success: true`). No Regenerate Form or second Save request exists in the history.

## Limitations

- The network history is the browser's **retained** history for the current tab session. If the tab were closed and reopened, this history would be lost. The history was available at the time of this T5 inspection.
- The `x-mg-rvtoken` value is a session token and is **not** reproduced here (no credential exposure).
- The request body (the form definition payload) was not captured in this inspection; only the request headers, response headers, and response body were recorded.