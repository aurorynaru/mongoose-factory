# IDO Metadata and Discovery

State: **unverified** in this environment (see [README.md](README.md)).

An IDO (Intelligent Data Object) is a **metadata-defined object**, not a table wrapper. Its
definition lives in the Objects metadata, and that metadata is itself exposed through IDOs. So an
agent with read access to a handful of meta-IDOs can discover every IDO, property, method,
parameter, and backing table, through the same API it uses for data.

---

## 1. Anatomy of an IDO

Source: `on-prem: repeated`. The numeric codes are `on-prem: observed` and have not been
cross-checked with vendor docs.

| Part | What it is | Where to read it |
|---|---|---|
| **Tables** | Exactly one *primary base* table, plus optional *secondary* tables joined inner or left outer with a join expression. | `IdoTables` (`TableName`, `TableAlias`, `TableType`, `JoinType`, `JoinText`). `TableType` `3` = primary base and `0` = secondary. |
| **Properties** | *Bound* to a column of one of the IDO's tables, *derived* from a SQL expression, or a *subcollection* (a one-to-many link to a child IDO by key properties). | `IdoProperties` (`PropertyName`, `DataType`, `ColumnName`, `ColumnTableAlias`, `PropertyClass`, `IsReadOnly`). Derived properties have `ColumnName = null`. |
| **Methods** | A stored-procedure method, a .NET extension-class method, or a *custom load method* that replaces the normal load. | `IdoMethods` (`CollectionName`, `MethodName`, `MethodType`). `MethodType` `0` = stored procedure, `1` = custom load method, `2` = extension class. |
| **Method parameters** | Positional, typed, input, output, or both. | `IdoMethodParameters` (`Sequence`, `ParameterName`, `DataType`, `SpDataType`, `SpDataLength`, `SpDataScale`, `InputFlag`, `OutputFlag`). |

Property-name traps on the meta-IDOs. Each one costs a failed call. Source: `on-prem: repeated`.

- `IdoProperties` uses `PropertyName` and `ColumnName`. It does not use `PropName` or `BoundColumn`.
- `IdoMethods` may have **no** `StoredProcedure` property. Asking for it returns
  `Property StoredProcedure not found`. Filter on `MethodName` instead.
- `IdoMethodParameters` has **no** `Direction` property. Use `InputFlag` and `OutputFlag`. A
  parameter with both set to `1` is IN/OUT.
- `IsReadOnly` is `"1"` for read-only properties. Writable ones show `null` or `"0"`.

---

## 2. Discovery workflow

Source: `on-prem: repeated`. All of these are plain LoadCollection calls; see `ido-rest-api.md`.

1. **Find the IDO.**
   - By name: `/load/IdoCollections?properties=CollectionName,AccessAs&filter=CollectionName LIKE N'%User%'&recordcap=10`
   - By a method or procedure name you already know: filter `IdoMethods` on `MethodName LIKE N'%<name>%'`.
   - By table: filter `IdoTables` on `TableName = N'<table>'`. You usually want the IDO where
     that table is the primary base, `TableType = 3`.
2. **Confirm it.** Load three rows with no `properties` list and look at real data.
3. **List the properties** from `IdoProperties`, and map SQL columns to property names with
   `ColumnName`.
4. **List the methods** from `IdoMethods`.
5. **Get each method's exact signature** from `IdoMethodParameters`, ordered by `Sequence`. It is
   the only reliable way to build an Invoke array.
6. **Find primary keys** before any update or delete. `SqlColumns` exposes `isPrimaryKey` and
   `primaryKeyPosition`. A compound key such as item + currency + effective date + site warns you
   that a filter on one column is broader than it looks.

**Core or custom.** On CSI, `IdoCollections.AccessAs` reads `BaseSyteLine` for delivered
application IDOs and is empty for implementation-added ones. Core Mongoose objects carry the
framework's own value. In the factory's environment, compare what `AccessAs` shows on a
known-core IDO against an `FX_` one.

---

## 3. IDOs, tables, and views (CloudSuite Industrial)

Source: `on-prem: repeated`. This is CSI application convention, not core Mongoose.

- CSI stores multi-site data in tables named `<name>_mst`, each carrying a site column. The object
  the application reads is usually a **view** named `<name>`. The view filters `<name>_mst` to the
  current session's site. **An IDO maps to the view, not to `_mst`.**
- Because of that, `IdoTables` shows `itemprice` while `SqlColumns` lists `itemprice_mst`. Add
  `_mst` when you look up columns or keys in `SqlColumns`, or you get zero rows.
- A raw table the framework doesn't know about cannot back an IDO. The framework keeps a table
  catalog, `AppTable`, and an IDO built over an unregistered table shows no backing tables.

## 4. Site context in the IDO layer

Source: `on-prem: repeated`.

- A REST token is issued **per configuration**. On CSI a configuration usually fixes the session's
  site, so every load, update, and event in that session is scoped to it. Multi-site work means one
  token per configuration. The `site` name that some tooling uses for this argument is really the
  configuration name.
- Most site-keyed IDOs **stamp the site themselves** on insert. Don't send a site property unless
  the IDO requires it.
- **Multi-site "all sites" IDOs are the exception.** CSI's `*Alls` family spans sites by design and
  needs the site supplied explicitly.
- **Event handlers can run without a default site.** A handler that copies the session site into an
  inserted row can get an empty value when the Event Service runs it in a background session. The
  insert then fails intermittently with "SiteRef cannot be null". Let the IDO stamp the site, or
  take it from a loaded source row.

---

## 5. Extenders: `Extends` and `ReplaceFlag`

Source: `on-prem: repeated`.

A custom IDO can **extend** a delivered one. The `ReplaceFlag` decides what callers see.

| `ReplaceFlag` | Behavior |
|---|---|
| `1` (extend and replace) | The runtime serves the extender **wherever the base name is requested**. It inherits the base's tables, properties, and methods, and adds or overrides its own. There is effectively one per base. Callers keep using the base name and still get the extra properties. |
| `0` (additive) | Only clients that load the extender **by its own name** see its additions. Requests for the base IDO are unaffected. There can be several. |

Consequences:

- **Authorization checks the base name** when the base resolves through a replace-extender. Yet the
  error text names the extender, as in *"User requires [Read] privilege for <ExtenderName>"*. Grant
  read on the **base** IDO.
- **Chains exist.** An extender can extend another extender. A replace chain starts at the base,
  not at a sibling additive extender. So a replace-extender does **not** inherit a sibling
  `ReplaceFlag = 0` extender's additions unless it extends that sibling directly.
- **Bump `RevisionNo` on every link of the chain you changed**, together with any label strings
  you added. A partial bump can leave clients serving a stale layer that looks current.
- **A property must exist on the IDO the collection actually loads.** A form whose collection binds
  to the base cannot see a property that exists only on an *additive* extender. Check the form's
  collection binding before declaring a property missing.

`ObjCollections` (`CollectionName`, `Extends`, `ReplaceFlag`) shows the relationship. Whether that
IDO is readable in a cloud tenant is **unverified**.

---

## 6. User fields (UET) and how they reach IDO properties

Source: `vendor-doc` for the UET model
([Extending application database tables](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgsdug_mg/lsm1454147727090.html)).
The IDO and form behavior below is `on-prem: repeated`.

Mongoose extends delivered tables with **User Extended Tables (UET)**. You define **user fields**,
group them into **user classes**, relate a class to a table, and then run the **Impact Schema**
form. That form applies the change to every affected database and updates the multi-site views.
User field columns are named `Uf_*`.

**Impacting a field puts a column on the table. It does not add an IDO property.** That gap causes
most UET confusion:

- After impact, `SqlColumns` shows the column, but `IdoProperties` for the IDO does not. A load
  or update naming it fails with `property [Uf_X] does not exist in [Y] IDO`. That is a missing
  property, not a typo.
- To use it over REST or in event handlers, **add a bound property to the IDO**, usually on a
  replace-extender. Give it a real label, then **discard the IDO metadata cache** (see
  `caches-and-runtime-state.md`). Until the flush, runtime calls keep saying the property does not
  exist even though the metadata row is there.

**Implicit versus explicit binding on forms.** A form component can bind a UET column without any
IDO property by using the implicit form `object.<tableAlias>Uf_<field>`. The field then appears to
work on the form. Two different failures follow:

| Situation | Symptom |
|---|---|
| The column is bound **twice**: implicitly on the form, and as an explicit IDO property | New-row saves fail with SQL error 264, *"The column name 'Uf_X' is specified more than once in the SET clause or column list of an INSERT"*. An IDO-level `DefaultValue` on the property makes it fire on every insert. |
| The column is bound **zero times** at the property layer: implicit on the form, with no property on the IDO the form's collection loads | **Silent discard.** The control accepts input, the save succeeds, and the value is gone on refresh. Nothing throws. |

The fix for both is to bind the component to the explicit property, `object.Uf_X`. Create the
property and rebind the form **together**, or you swap the silent failure for the loud one. When
you add explicit properties, check every form that touches those columns for implicit bindings.

An IDO-level `DefaultValue` on a UET-backed property can also make older .NET IDO clients send the
column twice, even after every form is fixed. The REST API did not reproduce it.
`on-prem: observed`

**Two kinds of "user" columns on CSI tables.** Besides `Uf_*`, many delivered tables carry generic
vendor-shipped columns such as `charfld1`, `decifld1`, and `logifld`. Implementations repurpose
them with no self-describing name. When you hunt for where a form stores a value, search both
families. The fastest way to tell them apart is a row recently saved through the form.
`on-prem: observed`

---

## 7. Moving IDO definitions: export and import

Source: `on-prem: observed`. The methods are on the core `IdoCollections` IDO. The cloud
behavior is **unverified**.

The IDO Export and Import wizards are thin forms over two IDO methods, so they can be driven
headless:

| Wizard | Method |
|---|---|
| Export | `IdoCollections.GenerateXml` takes 9 parameters: `serverName`, `collectionList`, `propertyClassList`, `customAssemblyList`, `idoOption` (0 none, 1 all, 2 selected), `propertyClassOption`, `customAssemblyOption`, `resultXml` (IN/OUT, index 7), and `infobar`. |
| Import | `IdoCollections.ImportFromXmlString` takes 5 parameters: `inputXml`, `collectionList`, `propertyClassList`, `customAssemblyList`, and `infobar`. A `...ConvertToLocalAccessAs` variant adds a trailing `localAccessAs`. |

- `serverName` is the IDO's *server* or project. Read it from `IdoCollections.ServerName` for each
  IDO.
- The result is an `<ObjectStudioExport>` document with one `<IDODefinition>` per IDO.
- **Scope `collectionList` on import.** An empty list imports and replaces every definition in the
  document.
- **Import replaced existing IDOs reliably, but silently did nothing when creating a new one.** It
  returned `Success: true` and wrote no rows. Always confirm an import by loading
  `IdoCollections` afterward.
- **Import does not flush the metadata cache.** Without a separate discard, the change sits in the
  database and the runtime never serves it.

---

## 8. Where forms live, and smaller metadata traps

- **Forms metadata may share one database with application data.** Infor describes three logical
  databases: Objects for IDO definitions, Forms for form specifications, and Application for data.
  It adds that current and cloud implementations typically combine them into one all-in-one
  database. `vendor-doc`
  ([About Mongoose-based applications](https://docs.infor.com/mg/2026.09/en-us/mongooseolh/mgwsolh_mg/lsm1454148008769.html))
  On CSI 10 on-premises, the form tables and the string table were inside the application database,
  and an older standalone forms database was left over and unused. `on-prem: observed` This lines
  up with EXP-016's FormSync script, which addresses `Forms` rows by `Name`, `ScopeType`, and
  `ScopeName`.
- **"No scope" in string metadata is the literal text `[NULL]`**, not SQL NULL, at least in the
  string table. `on-prem: observed`
- **`sys.columns.max_length` is bytes, not characters.** For `nvarchar`, divide by two, so
  `max_length = 510` means `nvarchar(255)`. This only matters with SQL catalog access, but it
  doubles every width when you copy a column definition into a user field or IDO property.
  `on-prem: repeated`
- **A licensing error can be a compile error.** See `ido-rest-api.md` §8.
