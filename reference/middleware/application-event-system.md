# The Application Event System (AES)

State: **unverified** in this environment (see [README.md](README.md)).

The AES attaches declarative logic to things that happen in the middle tier: a row saved, a
property changed, a background task finished, a custom event fired. It is **not** the same as
form events. Form event handlers run in the client, inside the form runtime. AES handlers run in
the IDO runtime, so they fire for REST calls too.

| | Form event handlers | AES handlers |
|---|---|---|
| Runs in | The client (Web Client form runtime) | The IDO runtime |
| Fired by | UI events: `StdFormLoaded`, `<Component>_Clicked`, value changes | Framework IDO events, custom events, event triggers, schedules |
| Reached by REST? | **No** | **Yes** |
| Bridge | A form event response of type *Generate Application Event* fires an AES event | |

Source: `on-prem: repeated`.

---

## 1. Building blocks

| Concept | What it is |
|---|---|
| **Application event** | A named occurrence. Framework events include the `IdoOn*` and `IdoPost*` families. A custom event is any name you choose. |
| **Event handler** | Says "when event X happens on object Y under conditions Z, run these actions". One event can have many handlers. |
| **Event action** | One step in a handler: an integer `Sequence`, an `ActionType`, and a `Parameters` body in the AES expression language. Actions run in sequence, with conditional jumps. |

**Before or after the commit:**

| Family | Timing | Use for |
|---|---|---|
| `IdoOnItemInsert` / `Update` / `Delete` | **Before** commit, inside the IDO transaction | Validation and blocking. A failure rolls back the user's save. Only these support the suspend/approval pattern. |
| `IdoPostItemInsert` / `Update` / `Delete` | **After** commit | Side effects such as notifications and downstream work. The save has already happened. |

**Insert and Update never both fire on one save.** To test an update handler, the change must be
a separate save from the row's creation. Other framework events include `IdoPreLoadCollection`,
`IdoPostLoadCollection`, and `BGTaskComplete`.

Source: `on-prem: repeated`.

## 2. Scoping a handler

Source: `on-prem: repeated`.

| Field | Effect |
|---|---|
| Applies-to objects | The handler fires only for the listed IDOs. These are comma-separated with no spaces. |
| Applies-to sites | Fires only in the listed sites. Blank means all. |
| Applies-to initiators | Fires only for the listed initiators, such as `Form.<FormName>`. **Blank lets REST, script, and background changes through.** Set it to restrict a handler to saves made from one form. |
| Triggering property | Fires only when that property is in the modified set. |
| Active / Suspend / Obsolete | Master switch, soft pause, and tombstone. |

`AccessAs` is stamped from the creator's development identity. You cannot delete handlers owned by
another `AccessAs`. Sequence around them instead.

When a handler is built over REST, two properties on the `EventHandlers` IDO behave unexpectedly.
The *applies-to objects* property is read-only; the writable property bound to the same column is
`IDOCollections`. `Sequence` cannot be null on insert. `on-prem: observed`

---

## 3. The payload-delta trap: `P()` is the request, not the row

Source: `on-prem: repeated`. This is the most common cause of "the handler ran but did nothing".

`P("X")` on the firing row returns a value **only if `X` is in the update payload**, meaning it was
sent as `Modified: true` or it is a key. Unmodified properties come back empty even though the
committed row has a value. A database trigger sees the whole row, but an AES handler sees only the
delta.

- **Never gate on `P("SomeProperty") = ""`** for a property you don't expect in the modified set.
  That condition is true on nearly every save.
- To read unmodified properties, or the **old** value of the property being changed, load the same
  IDO for the current key at the top of the handler and read `P(OldRow, 1, "X")`. On `IdoOn*`
  events, `P("X")` is the pending new value and the loaded row still holds the committed one.
  There is no previous-value token.
- `PROPERTYMODIFIED("X")` tests the modified set. `PROPERTYAVAILABLE("X")` tests whether the
  property is in the payload at all.
- A **triggering property** guarantees that the property you read is present.
- Write conditions so that a missing value **fails open**, not into the side effect.

## 4. Expression-language notes

Source: `on-prem: observed`.

- `LIKE` uses `*` as the wildcard, not `%`: `LIKE "*-OP"`.
- A bare numeric literal on the right of an operator is a parse error. Write `1 + V(Idx)`, not
  `V(Idx) + 1`.
- Every property you reference from a loaded collection must be in that load's
  `PROPERTIES(...)` list, or parsing fails with `Unknown Property`.
- Condition operands appear to **short-circuit**. A broken reference in a later clause can stay
  hidden while an earlier clause is true. This is inferred from behavior, not documented.
- Prove a new expression at runtime before relying on it. Use a throwaway handler on an `FX_`
  object that writes a marker, then read the action states (§6).

---

## 5. Published revisions: what actually executes

Source: `vendor-doc` for the revision model
([About application event handler revisions](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgsdug_mg/nnp1501064517561.html)).
The consequences are `on-prem: observed`.

The runtime does not execute the handler rows you edit. When an event fires after its handlers or
actions changed, the system **copies them into a read-only revision**, and that revision governs
execution until the next one. Runs already in progress keep the revision they started with.

What that meant in practice:

- **The first firing after an edit can still behave like the old version.** The firing creates the
  new revision. Verify a change with **two** test firings before concluding it failed.
- **Edit the design-time handler, never a revision.** The revision copy is read-only by design.
  Changing it at the database level corrupts history and publishes nothing.
- **A brand-new handler can need more than a firing.** On-premises, a handler inserted directly as
  metadata didn't run until a revision was explicitly created *and* the IDO metadata cache was
  discarded. Whether a handler created through the Event Handlers form needs the same steps was
  not tested.
- **Diagnostics follow the revision.** Run history is linked to revisions, so a query that joins
  run history to the editable handler rows comes back empty.
- The metadata cache sits on top of this. See `caches-and-runtime-state.md`. When an edited
  handler behaves like its previous version, the cause is usually caching, not logic.

---

## 6. Diagnostics

Source: `on-prem: repeated`.

| Form | IDO | Use |
|---|---|---|
| Event Status | `EventStates` | Per-event run history, success or failure, and Infobar text |
| Event Handler Status | `EventHandlerStates` | Per-handler runs. You can retry a failed one here. |
| Event Action States | `EventActionStates` | Per-action execution counts. **Shows where the flow stopped.** |
| Event Queue | `EventQueues` | Pending asynchronous work. A backlog points to an Event Service problem. |

- **Successful runs are not kept by default.** Turn on the process default *Keep Successful
  Events* before debugging, or a handler that ran and did nothing leaves no trace. **Turn it back
  off afterwards**, because successful-run records pile up quickly.
- In a "succeeded but did nothing" run, `EventActionStates.TimesExecuted = 0` marks the actions the
  flow skipped. The first one is where the jump went wrong.
- **A synchronous handler that fails rejects the user's save.** After any AES change, query event
  states for failures rather than waiting for complaints. Users may only see a generic save error.
- To reproduce vanilla behavior, use **Session Access As** to restrict a session to core and base
  application handlers. Clearing *Active* or setting *Suspend* disables a single handler without
  deleting it.
- **Handlers add permission dependencies.** A handler that touches another IDO makes every caller
  of the triggering save need rights on that IDO too. See `ido-rest-api.md` §8.
