# Caches and Runtime State

State: **unverified** in this environment (see [README.md](README.md)).

The usual symptom here is "I changed it, the change is saved, and I still see the old behavior".
At least three layers can serve stale definitions: the IDO metadata cache, the form and
global-object cache, and the user's own runtime form changes. This factory's records already
treat the form object cache and the IDO metadata cache as distinct. The vendor docs agree.

---

## 1. What the vendor documents

Source: `vendor-doc`
([Maintaining or discarding the local metadata cache](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgaug_mg/lsm1454147668479.html),
[About the IDO metadata cache](https://docs.infor.com/ism/2026.x/en-us/ismolh/mgwsolh_mg/wlj1495237624588.html),
[Refreshing the Metadata Cache, CSI 10](https://docs.infor.com/csi/10.x/en-us/csbiolh/mgsdug_cl_sl/bcv1502099199943.html)).

- Clients cache IDO metadata and forms metadata locally, per configuration and per user.
- An administrator can discard the IDO cache for a configuration in Configuration Manager. On
  CSI 10 this is **Discard Cache** on the Utilities tab. It changes the configuration's
  "last changed" timestamp, so users' IDO metadata caches clear **at their next sign-in**.
- **Form > Definition > Unload** form and global objects clears the form-side cache.
  **It does not unload IDO metadata** unless the user preference to unload IDO metadata along with
  global objects is on. The factory has already observed that preference in this environment.
- Restarting the IDO Runtime service on the application server also refreshes metadata. That is
  only possible on-premises.

---

## 2. The IDO metadata cache, headless

Source: `on-prem: observed`. The core `IdoProjects` IDO exposes cache methods that the UI buttons
appear to wrap. This is **unverified** in the cloud, and a tenant user may lack execute rights.

| Method | Parameters | Scope |
|---|---|---|
| `DiscardMetadataCache` | none | The whole IDO metadata cache |
| `DiscardFarmMetadataCache` | `infobar` | Farm-wide |
| `DiscardFarmMetadataCacheReloadAppDomain` | `reloadAppDomain`, `infobar` | Farm-wide, plus an application-domain reload |
| `DiscardFarmMetadataCacheReloadAppDomain2` | `reloadAppDomain`, `infobar`, `configName` | The same, for one configuration |
| `SetObjectsMetadataDirty` | `Infobar` | IDO metadata only. Behavior undocumented and untested by us. |
| `SetFormsMetadataDirty` | `Infobar` | Forms metadata only. Behavior undocumented and untested by us. |

```
POST /invoke/IdoProjects?method=DiscardMetadataCache      body: []
```

What we saw:

- **There is no per-IDO discard.** Every option is global, farm-wide, or per-configuration.
- **New properties need an explicit discard.** After adding a property, by import or any other
  route, runtime calls kept answering "Property ... not found" until `DiscardMetadataCache` ran.
- **Edited event handlers picked up changes after about two minutes** without a discard. A brand-new
  handler did not. See `application-event-system.md` §5.
- **A discard does not drop idle sessions.** In a controlled on-premises test, every idle signed-in
  session kept its connection identity and its heartbeat across a parameterless discard.
- **A discard can disrupt long-running work in flight.** People repeatedly reported "connection
  closed" errors when the cache was discarded while a long interactive server operation was
  running. They then had to restart that operation. This is `on-prem: field report` and was never
  instrumented. The rule we follow is about what is running, not the time of day: **don't discard
  while long-running operations are in flight.**
- The application-domain reload variants are the riskiest because a reload drops in-memory state.
  We have not exercised them.

**Clients may not see a change until they reconnect.** Long-lived clients, especially headless
.NET integrations, kept stale metadata for up to a day after a change. Restarting the IDO Runtime
service made the change land immediately. `on-prem: observed`

---

## 3. The order that works for a new field

Source: `on-prem: repeated`.

1. Impact the user field onto the table, with UET and **Impact Schema**.
2. Add the bound IDO property, usually on a replace-extender. Bump `RevisionNo` where needed.
3. **Discard the IDO metadata cache.** Skipping this step is the classic "property doesn't exist"
   dead end.
4. Bind the form component to the **explicit** property, `object.Uf_X`. See
   `ido-metadata-and-discovery.md` §6 for why not the implicit form.
5. Save the form, unload form and global objects with the IDO-metadata preference on, and reopen
   the form.

---

## 4. Runtime changes and Revert Runtime Changes

Source: `vendor-doc` for the procedure
([Reverting form changes made in runtime mode, CSI 10](https://docs.infor.com/csi/10.x/de-de/csbiolh/mgaug_cl_sl/lsm1454147676155.html)).
The rest is `on-prem: repeated`.

Users can personalize forms at runtime, for example grid column layout and sizes. Those changes
are saved per user. The vendor procedure is to open the form in Runtime Mode, click **Revert
Runtime Changes** on the main toolbar, and confirm. The form closes, reverts to the default
version, and reopens. This factory's environment shows that toolbar button.

From helping users with misbehaving forms on-premises:

- The reset that has been reliable is to click **Revert Runtime Changes** until the button
  disappears or greys out, because more than one layer may need reverting. Then close the form,
  unload form and global objects, and reopen it.
- It cleared forms that ignored edits, lines that would not save, and visibly corrupted form
  state.
- **Deploying form metadata wipes users' saved runtime layouts.** Each user re-saves their
  layout once after a deploy. Users take that for a bug unless someone warns them.
- A per-user layout cannot be set on someone else's behalf, because it is that user's data. A
  repeatable filtered view for many users belongs in a saved, shared report or data view, not in
  someone's personal layout.

For the factory: before a persistence experiment, check whether the signed-in user has runtime
changes on the target form. A personal runtime layer can mask or mimic the effect being measured.
