# The IDO REST API (Version 2)

State: **unverified** in this environment (see [README.md](README.md)).

The IDO REST API is the HTTP face of `IDORequestService`. It is the same middleware the Web Client
uses. A form Save and an `UpdateCollection` call reach the same IDO, the same validation, and the
same Application Event System handlers. Infor documents twelve Version 2 generic endpoints:
LoadCollection, UpdateCollection, InvokeIDOMethod, FireAESEvent, GetPropertyInformation,
GetConfigurations, GetSecurityToken, GetDocumentObjects, DownloadDocumentObject,
UploadDocumentObject, DownloadFileStream and UploadFileStream.
([Version 2 generic API endpoints](https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgiiea/ima1576737932037.html))

Version 1 endpoints still exist under a different URL structure. Everything below is Version 2.

---

## 1. Two ways in: direct, or through ION API

Source: `vendor-doc` for the headers and token types. The URL shapes are partly `on-prem: repeated`.

| | Direct (typical on-premises) | Through ION API (the documented cloud path) |
|---|---|---|
| Base URL | `https://<app-server>/IDORequestService/ido` | The ION API gateway host plus a tenant and suite prefix in front of `/IDORequestService/ido`. The exact prefix is **not verified** for this tenant. |
| `Authorization` header | The raw Mongoose security token from GetSecurityToken | An OAuth 2.0 bearer token issued by ION API |
| `X-Infor-MongooseConfig` header | Not needed. The token already names the configuration. | **Required.** It names the configuration on the application server. |

Every call needs the `Authorization` header except GetConfigurations and GetSecurityToken.
([LoadCollection](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/dwn1576796415221.html),
[Get IDO Swagger Document](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/pko1658298056899.html))

Notes for this factory's environment:

- The vendor Swagger page's example `basePath` is `/<TENANT>/<MONGOOSE_SUITE>/IDORequestService/ido/...`.
  That shape fits a gateway path, but this tenant's actual value is **unverified**.
- A community answer says the configuration value is visible on the Mongoose sign-in screen and in
  Help > About, usually as `<TENANT>_MONGOOSE_<ENV>_DEFAULT`
  ([Infor developer community](https://community.developer.infor.com/discussion/446/what-is-x-infor-mongooseconfig)).
  The config group recorded in `environments/current-environment.md` has exactly that shape.
  Treat that match as a lead, not a fact.
- Getting an ION API OAuth client usually means an admin creates a backend-service client in ION
  API and downloads its credentials file. That process belongs to ION API, not Mongoose. It was
  **not verified** for this tenant, and the credentials must never be committed here.

### Direct token (on-premises)

Source: `vendor-doc` for the route. Our header-based variant is `on-prem: repeated`.

```
GET /token/{config}
```

The vendor docs list a path form and a header form. The header form is recommended when a
credential contains special characters. The response is `{ "Message", "Success", "Token" }`.

- The token goes into `Authorization` **as-is**. It has **no** `Bearer ` prefix. `on-prem: repeated`
- PowerShell's `Invoke-RestMethod` rejects the raw token as a malformed `Authorization` value. Use
  `curl.exe` or another client that passes the header through unparsed. `on-prem: repeated`
- One token survives many calls, including many Invokes. Authenticate once and reuse it. Older
  community notes say Invoke destroys the session. That did not hold on current CSI 10 releases,
  which ran 13 Invokes on one token. `on-prem: observed`

---

## 2. LoadCollection: `GET /load/{ido}`

Source: `vendor-doc` ([LoadCollection](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/dwn1576796415221.html)).

| Query parameter | Meaning |
|---|---|
| `properties` | Comma-separated property names. `*` means all non-subcollection properties. Omitted or blank returns all. |
| `filter` | A SQL-like WHERE expression. Only `GETDATE()` and `DATEADD()` are allowed as functions. Aggregates, `GROUP BY`, `HAVING`, and subqueries raise `IllegalFilterException`. |
| `orderby` | Comma-separated properties, with optional `DESC` after any of them. |
| `recordcap` | `-1` returns 200 rows, `0` returns all rows, and `N` returns N rows. |
| `distinct` | Returns only distinct combinations of the requested properties. |
| `clm`, `clmparam` | Runs a named custom load method with comma-separated parameters. |
| `loadtype`, `bookmark` | Paging. `loadtype` is `FIRST`, `NEXT`, `PREV` or `LAST`. Pass back the `Bookmark` from the previous response. |
| `pqc` | A method run once per result row after the query. |
| `readonly` | When true, rows come back **without** `_ItemId`, so they cannot be updated or deleted later. |

The response is `{ "Items": [...], "Bookmark", "MoreRowsExist", "Success", "Message" }`.

Practical rules. Source: `on-prem: repeated`.

- **Wrap string literals as `N'...'`** and URL-encode the filter: `filter=Username%20LIKE%20N'FX%25'`.
- **Cap discovery loads** at about `recordcap=10`. Use `recordcap=0` only with a narrow filter.
  If you omit `recordcap` you get 200 rows, which looks complete and isn't. Check `MoreRowsExist`.
- **Ask for `_ItemId` if you will update or delete later.** It is the row identity for
  UpdateCollection, and you cannot recover it without loading again.
- **IDO names are case-sensitive.** Casing is not standardized, so two names that differ only by
  case can be separate IDOs. Confirm the spelling in `IdoCollections` first.
- **`/load` is GET.** `/invoke` and `/update` are POST. Using the wrong verb returns `405`.

---

## 3. InvokeIDOMethod: `POST /invoke/{ido}?method={method}`

Source: `vendor-doc` for the route and body shape
([InvokeIDOMethod](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/cxe1576868620363.html)).
The rules are `on-prem: repeated`.

The body is a **bare JSON array** of positional parameters. It is not wrapped in an object.

```bash
curl -s -X POST "$BASE/invoke/UserNames?method=GetUserAttributes" \
  -H "Authorization: $TOKEN" -H "Content-Type: application/json" \
  -d '["someuser",null,null,null,null]'
```

```json
{ "Message": null, "Success": true, "Parameters": ["someuser","2","1","",""], "ReturnValue": "0" }
```

- **Positions are everything.** Get the count and order from `IdoMethodParameters` (see
  `ido-metadata-and-discovery.md`). A short array is a parse error, and a shifted one quietly
  passes values into the wrong slots.
- **Output parameters come back in place.** Send `null` for output-only slots and read
  `Parameters[i]` at the same index. `Sequence` in `IdoMethodParameters` is 1-based, so the
  index is `Sequence - 1`.
- **`ReturnValue` `"0"` means success.** On CSI application methods, `"16"` is a validation
  failure, and the text sits in the output parameter usually named `Infobar`. `Success: false` with
  a `Message` is an API-level failure such as permissions or parsing.
- **Byte and boolean parameters take `0` or `1`**, never `false` or `true`. A JSON boolean fails
  with `IDOValueType.GetValue: failed to parse normalized string [false], Type = Byte`.
- **Methods are stored procedures or .NET extension classes.** The caller cannot tell from the API.
  Infor keeps moving logic from stored procedures into extension classes. Once a procedure has
  moved, calling it directly in SQL fails with *"You may not call this '<name>' as it has been
  converted to custom assembly application method."* The IDO method keeps the same name and
  signature, which is why the IDO layer is the stable interface. This only matters on-premises,
  where direct SQL is possible.

---

## 4. UpdateCollection: `POST /update/{ido}`

Source: `vendor-doc` for the shape, action codes, and locking enum
([UpdateCollection](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/rrd1576802617893.html)).
The rules are `on-prem: repeated`.

```json
{
  "Changes": [
    {
      "Action": 2,
      "ItemId": "<_ItemId from a prior load>",
      "Properties": [
        { "Name": "UserDesc", "Value": "FX test user", "Modified": true, "IsNull": false }
      ],
      "UpdateLocking": 1
    }
  ]
}
```

| Field | Values |
|---|---|
| `Action` | `1` Insert, `2` Update, `4` Delete |
| `ItemId` | For update and delete, the `_ItemId` from a load, without the underscore. For insert, Infor's example uses `PBT=[<table>]`, and an empty string also works. If it is empty on an update, key properties identify the row and optimistic locking is not used. |
| `UpdateLocking` | `0` Row, `1` Property |
| `?refresh=true` | Returns post-save values in `RefreshItems` |

The response is `{ "Message", "Success", "RefreshItems" }`.

- **Send only what changes, and mark it `Modified: true`.** The IDO writes, validates, and fires
  events on the modified set only. That set is also what event handlers can see; see
  `application-event-system.md`.
- **All values are strings**, so send `"42"`, not `42`. To clear a field, send `IsNull: true`
  with `Value: null`.
- **Dates use the `"YYYYMMDD HH:MM:SS.mmm"` form**, for example `"20260331 00:00:00.000"`, not
  ISO 8601. Filters and parameter strings use the SQL Server form `2026-03-31 00:00:00.000`.
- **Fixed-width `CHAR` keys may need exact padding.** Some CSI key columns are right-justified
  with leading spaces. If an insert links to the wrong parent or to nothing, check the column type.
- **Load first, then delete.** Load with the same filter and a small cap. Check the rows, then
  delete by their `ItemId`s.
- **An open form shows stale data** after an API update until the record is refreshed or the
  form is reopened. The write did apply, so don't repeat it.
- **Some properties are ignored on insert** because post-save logic computes them. Insert without
  them, load the new row's `_ItemId`, and set them in a second `Action: 2` call.

---

## 5. FireAESEvent: `POST /aes/{eventname}`

Source: `vendor-doc` for the route and body
([FireAESEvent](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/zzz1576869775308.html)).
The pitfalls are `on-prem: observed`.

This fires a named Application Event System event. Every subscribed handler runs, and output
parameters come back in the response.

```json
[
  { "Name": "Num1",     "Value": "120", "Return": false },
  { "Name": "Num2",     "Value": "5",   "Return": false },
  { "Name": "Quotient",                 "Return": true  }
]
```

- Use it for **custom** events. Framework events such as `IdoOnItemUpdate` fire by themselves on
  saves.
- It is the only REST primitive that runs **several steps inside one server-side session**. That
  makes it the escape hatch for the session-identity trap in §7.
- **A parameter name typo is silent.** The handler just sees an empty value.
- **Read output parameters by `Name`, not by position.** `Infobar` comes back even if you did not
  ask for it.
- `Success: true` means the handlers were dispatched and run. It does not mean every handler did
  what you hoped, so check `Infobar`.

---

## 6. Smaller endpoints

| Endpoint | Route | Source | Notes |
|---|---|---|---|
| GetPropertyInformation | `GET /info/{ido}` | `on-prem: observed` for the route | Returns keys, property types, lengths, read-only and required flags, label string IDs, and subcollections with their link-by columns in one call. `Success: false` was seen next to a full payload, so trust the presence of `Properties`/`Keys` over the flag. |
| GetConfigurations | `GET /configurations` | `vendor-doc` that it needs no auth. The route is `on-prem: observed`. | Lists configuration names. It takes an optional `configgroup` query parameter. |
| IDO Swagger | `GET /dynamic/api-docs-collection/{ido}` | `vendor-doc` ([page](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgiiea/pko1658298056899.html)) | Generates a Swagger document for one IDO. |
| Health | `GET /IDORequestService/Ping.aspx` | `on-prem: repeated` | `200` means IIS, the request service, and the IDO runtime are all up. `503` means the IDO runtime is down. This is probably not reachable through the cloud gateway. |

---

## 7. The trap that returns success and does nothing: SQL session identity

Source: `on-prem: observed`, reproduced over REST and through a separate client.

The token persists across calls. The **server-side database session does not.** Each REST request
can land on a different pooled database connection with a different session identity.

So any method that **stages work in a session-keyed table** and expects a *later* call to process
it cannot be driven as separate REST calls. On CSI, a multi-step shipping-confirmation sequence
showed this exactly. The first method staged rows. The second ran in a new session, found nothing,
and returned `Success: true` with zero records processed. The cleanup call then deleted nothing.

- Never trust a success response from a staged multi-call sequence. Confirm it with an
  independent read of the business result.
- Run the sequence in one server-side unit instead: a custom IDO method, or an AES event fired
  with `POST /aes/{eventname}` whose handler performs the steps.

---

## 8. Permissions

Source: `on-prem: repeated`.

- REST calls are authorized against **IDOs**, not forms. The user needs object authorization on
  each IDO, and a license module that covers it. A user who can open a form may still fail
  on the IDO behind it.
- **Keep introspection and data access on different users.** A discovery user needs read and
  execute on the meta-IDOs only: `IdoCollections`, `IdoProperties`, `IdoMethods`,
  `IdoMethodParameters`, `IdoTables`, `IdoPropertyClasses`, `SqlTables`, `SqlColumns`,
  `SqlTableKeys`, `BGTaskDefinitions`, `ActiveBGTasks`, `BGTaskHistories`, and
  `ProcessErrorLogs`. It needs no business-data IDOs.
- **"User is not licensed for `<IDO>`" does not always mean licensing.** A compile-time fault in
  one of the IDO's derived-property expressions surfaced with that message. One example was an
  unqualified column reference that shadows the property's own name. If you can see the IDO in
  the catalog but cannot load it, check its derived expressions.
- **Errors name the IDO, not the reason for the call.** An event handler that loads or updates a
  second IDO makes every caller need rights on that second IDO too. Users see a permission error
  naming an IDO they never touched. Check for a recently added handler before blaming the client.
