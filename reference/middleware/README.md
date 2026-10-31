# Middleware Reference: IDOs, the IDO REST API, Background Tasks, Events, Caches

This folder is an imported **reference**, not a set of factory recipes. It describes the Mongoose
layer underneath the Web Client and Web Designer: IDO collections, the IDO REST API, IDO metadata,
background tasks, the Application Event System, and the caches that decide when a change becomes
visible. The factory's experiments so far stop at the form layer. Forms bind to IDO collections, so
most form behavior eventually depends on this layer.

## Knowledge state: everything here starts as `unverified`

AGENTS.md says that information from documentation, another model, or previous assumptions starts
as **unverified**. This folder follows that rule. Nothing here has been executed in the factory's
environment, so every claim is `unverified` here until an `EXP-NNN` record observes it.

Each section also carries a **Source** line saying where the claim comes from:

| Source tag | Meaning |
|---|---|
| `vendor-doc` | Checked against the Infor Mongoose online help on 2026-10-16. The page is linked. |
| `on-prem: observed` | Seen at least once on the contributor's on-premises installation. |
| `on-prem: repeated` | Seen many times on that installation, across releases and environments. |
| `on-prem: field report` | Reported repeatedly by people in production use. It was never instrumented. |

An on-premises observation does not count toward `observed` or `verified` in this repository. It
only tells an experiment designer what is worth testing and what is likely to go wrong.

## Where this knowledge comes from, and how far it travels

The contributor runs **Infor CloudSuite Industrial 10 (Syteline) on Mongoose, on-premises**. That
means Windows servers, IIS, the IDO Runtime Service, and SQL Server, all under its own administration.
This factory targets **Infor's multi-tenant cloud**: Mongoose PaaS behind the Infor OS Portal,
recorded in `environments/current-environment.md`. Four differences matter most:

1. **Authentication and URLs.** On-premises clients call `IDORequestService` directly with a
   Mongoose security token. In the cloud, the documented path goes through the **ION API gateway**
   with an OAuth 2.0 bearer token and an `X-Infor-MongooseConfig` header. See `ido-rest-api.md`.
2. **No database access.** Most on-premises knowledge was confirmed by reading SQL Server directly.
   A cloud tenant has no such access. This folder leaves out SQL-level procedures and keeps only
   what is reachable through IDOs, forms, or the REST API.
3. **Application content.** CloudSuite Industrial adds thousands of application IDOs (the `SL*`
   family) on top of core Mongoose. Examples here prefer **core** IDOs such as `UserNames`,
   `IdoCollections`, and `BGTaskDefinitions`. CSI-only examples are labelled.
4. **Release cadence.** The factory's environment reports Mongoose 2026.09.08. The on-premises
   material comes from CSI 10 releases. Infor's cloud ships monthly, so details can differ.

## Files

| File | What it covers |
|---|---|
| [ido-rest-api.md](ido-rest-api.md) | Token and ION authentication, LoadCollection, InvokeIDOMethod, UpdateCollection, AES events, property info, configurations |
| [ido-metadata-and-discovery.md](ido-metadata-and-discovery.md) | IDO anatomy, the self-describing meta-IDOs, tables and views, extenders, Access As, user fields (UET) and how they reach IDO properties, metadata traps |
| [background-tasks.md](background-tasks.md) | Submitting background tasks, parameter-string styles, polling active tasks and history |
| [application-event-system.md](application-event-system.md) | Events, handlers, actions, scoping, the payload-delta trap, published revisions, diagnostics |
| [caches-and-runtime-state.md](caches-and-runtime-state.md) | IDO metadata cache, form object cache, user-scoped runtime changes, Revert Runtime Changes |
| [candidate-experiments.md](candidate-experiments.md) | Small read-only experiments that could move claims here to `observed` |

## How to use this with the factory

- Treat each claim as a **hypothesis for an experiment**, not as a step to execute.
- Promote a claim by writing an `EXP-NNN` record that observes it in this environment. Then cite
  that record next to the claim, or move the procedure into `recipes/`.
- When an experiment contradicts a claim, mark the claim `superseded` and link the experiment.
  Do not delete it. The contradiction is useful to the next reader.
- Every middleware write must still follow AGENTS.md: `FX_` artifacts only, no production data,
  scope checked before mutation.

## Attribution

Contributed by **Velocity Flow Technologies** (Salina, Kansas) from our private
**syteline-harness** repository, authored by **Brice Thrower**.

syteline-harness began on 2026-02-10 as a set of reference documents for AI agents working the
Syteline IDO REST API. It covered authentication, load/invoke/update, metadata discovery,
background tasks, and production gotchas, under its original name `syteline-ido-api-agent-docs`.
It was later renamed and grew into a full engineering workbench. As of 2026-10-16 it has
196 commits and 17 numbered reference guides of about 38,000 words.

The repository stays private because it carries our own business logic, customizations, and
system details alongside the generic reference material. What appears here is only the generic
Mongoose and CloudSuite Industrial knowledge, rewritten for this repository's conventions. Every
customer-specific object, name, host, and process was removed.
