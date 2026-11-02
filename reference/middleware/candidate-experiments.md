# Candidate Experiments

These are suggestions for bounded experiments that could move claims in this folder from
`unverified` to `observed`. Each one is **read-only** unless it says otherwise. They are written
to fit AGENTS.md: one small operation, evidence for every claim, `FX_` artifacts only. None of them
has been run. The coordinator and specialist decide whether, when, and in what form.

| # | Claim to test | Read-only? | Outline |
|---|---|---|---|
| C-1 | The `X-Infor-MongooseConfig` value equals the configuration shown in Help > About | Yes | Screenshot Help > About in the Web Client and compare it with the config group in `environments/current-environment.md`. Record any difference. No API call is needed. |
| C-2 | Meta-IDOs are readable and self-describing in this tenant | Yes | From whatever IDO-browsing surface the Web Client offers, read one core IDO such as `UserNames`. Record its tables, properties, and methods. Note which property names exist, against `ido-metadata-and-discovery.md` §1. |
| C-3 | An `FX_` form's primary collection names its backing IDO | Yes | Open an existing IDO-bound `FX_` form in the Web Designer and record the collection binding in `<Name>:<IDO>` form. Compare a component's `object.<Property>` binding with that IDO's property list. |
| C-4 | Form unload leaves IDO metadata cached unless the preference is on | Yes, the preference is already set | Compare the existing User Preferences evidence with the vendor statement in `caches-and-runtime-state.md` §1. This only needs a record, not new browser work. |
| C-5 | Background task history exposes the parameters each run used | Yes | Open the background task history surface. Pick one finished system task and record its name, status, and parameter string, against `background-tasks.md` §2. Do not submit anything. |
| C-6 | Revert Runtime Changes behaves as the vendor describes | **No**. It changes the user's own runtime layer on an `FX_` form. | On an `FX_` form, make one runtime layout change, save it, revert it, and verify the form reopens without the change. |
| C-7 | The REST API is reachable through ION API for this tenant | Depends | This needs an ION API client set up by an administrator. It is outside the browser-only scope until someone decides otherwise. The first call should be a read: `GET /load/UserNames?properties=Username&recordcap=1`. |

Whatever these show, record the result. A result that contradicts the reference is as valuable
as one that confirms it. Mark the affected claim `superseded` and link the experiment.
