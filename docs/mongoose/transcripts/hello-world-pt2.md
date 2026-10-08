# Infor Mongoose — Hello World Training — Part 2 of 8

> **Document type:** Agent reference / training extraction with a complete source transcript  
> **Video:** Mongoose Hello World, Part 2 (video URL not supplied with this transcript)  
> **Speaker (per supplied transcript):** Caitlin Porter, Mongoose Enablement Team  
> **Source:** Operator-provided timestamped transcript; video images and narration not independently checked  
> **Coverage:** 00:00–12:19 (last supplied timestamp)  
> **Version applicability:** The tutorial's publication date/version is not established; the illustrated behavior must **not** be assumed equivalent to Infor Mongoose 2026.x  
> **Series context:** Builds on the Customer table, IDO, form, and `Hello World` IDO project introduced in Part 1. This is **Part 2 only**, not instructions from Parts 3–8.

## How an agent should use this file

1. Use the **Concepts**, **Demonstrated workflow**, and **Reference data** sections to learn what the narrator demonstrates and to draft *proposals* for bounded tests.
2. Consult the **Full supplied transcript** for evidence and timestamps. The timings refer to narration lines, **not verified click times**.
3. This is **training reference material, not an executable runbook or operator approval**. The tutorial creates application schema, classes, IDOs, and records and alters metadata. Follow the active project's `AGENTS.md`, experiment brief, permissions, and explicit operator authorization before any action.
4. In the autonomous Mongoose factory, only explicitly authorized **`FX_`-prefixed artifacts** may be created/changed; the approved Designer editing scope is **User**, while the video uses **Site Default**. Do **not** literally create or mutate the tutorial's `UMBase`, `UM`, `Items`, etc., or change Site Default/global objects on the basis of this file.
5. Treat every capability, menu path, and expected result here as **demonstrated or described in the historical tutorial**, **not replay-verified in the current tenant**. A visible Save message is not proof of recovery after close/reopen or after cache unload.
6. Use an *approved*, minimal, controlled experiment to isolate a single feature and capture fresh before/after evidence. Do not execute this entire tutorial as a bundled experiment.

## Part 2 learning goals

- Understand Mongoose **property-class inheritance**: reusable metadata with downstream inheritance and selective overrides.
- Distinguish a component's own value (`Length = 0` in the demonstration) from an **effective inherited** value (`Length = 50` from the IDO property).
- Explore **IDO Property Classes**, their datatype/SQL column-type settings, and class reuse in the **New Data → Maintenance** wizard.
- Build a two-level Units of Measure property-class structure: a base type and a refined class with an **IDO domain**.
- Understand how a domain IDO and domain property can support a **dropdown list** and **runtime validation** for an Items form.
- Observe how default values, caption-string resolution, caching, and generated form controls interact with these definitions.

## Prerequisites carried forward from Part 1

The Part 2 narration assumes that Part 1 has already established the following **demo** objects:

| Dependency | What the transcript presupposes | Authority / scope note |
| --- | --- | --- |
| `Hello World` | An IDO project used to group the examples | Demo name only; not an approved factory target |
| Customer form and IDO | A Customer IDO property `ID` with String length **50** and a generated form | Do not assume it exists in the current tenant |
| Designer | Able to switch from runtime to Designer | Demo selects **Site Default** on first entry; do not copy in factory |
| Runtime navigation | Form Open / My Folders and Filter-in-Place | Creating shortcuts changes a user's customization state |
| Metadata cache | The demo uses **Form → Definition → Unload All Global Form Objects** | Cache unloads must be independently authorized and recorded |

The source provides **no evidence** of these prerequisites existing in the operator's current environment.

## Concepts and terms taught in Part 2

| Term | Meaning in the tutorial | Timestamp |
| --- | --- | --- |
| Property class | Reusable definition of property attributes (e.g., type, length, label string) | 00:17–00:44, 02:18–02:33 |
| Inheritance | Attributes from a class/property flow to derived classes/properties/components unless locally overridden | 00:34–00:44, 01:44–02:18 |
| Component-level length | The selected Customer ID control visibly has `Length = 0` under Data Type | 01:30–01:49 |
| Effective inherited length | Its inheritance details expose **50** from the IDO property; the demo discusses overriding with **200** | 01:49–02:18 |
| IDO Property Classes form | Runtime form for defining/reusing property-class metadata | 02:38–03:05 |
| Column data type | SQL-facing data type choice associated with a property class; the audio renders `nvarchar` and `varchar` imperfectly | 03:19–03:50, 07:17–07:38 |
| Domain IDO / Domain Property | IDO and field used as the source of a property class's allowed list values | 06:24–07:02 |
| Additional List Properties | Supplementary fields (the example uses Description) returned from the domain list source | 06:55–07:02 |
| Override indicator | Asterisks next to fields identify locally overridden/inherited attributes, according to narrator | 07:02 |
| Combo box generation | Wizard-generated component for `UM` property due to inherited domain metadata | 09:50–10:06 |
| Domain validation | Saving a value absent from the domain list is demonstrated as producing an invalid-item error | 10:06–10:24 |
| Label string value | Text resolved from a label string ID after creation through the Caption ellipsis | 05:48–06:06, 09:35–09:50 |
| Cache unload | Explicit refresh after class changes so newly defined metadata is available | 03:50–04:08, 07:38–07:52 |

## Conceptual inheritance and binding chain

The following is an **editorial representation** of dependencies described in the narration, not a verified reverse-engineered schema.

```text
UM Base property class
  - String; length 10; SQL column type (narrated "nvar char")
  - Label string ID (narrated "s-u-m")
  │
  ├── UM property on the UMs IDO
  │     └── UMs form: UM-bound editor inherits attributes/label
  │
  └── UM property class (derived from UM Base)
        - Adds Domain IDO = UMs
        - Domain Property = UM
        - Additional List Properties = Description
        └── UM property on Items IDO
              └── Items form: generated combo box + domain validation

Item Base property class ───► Items IDO.Item
Cost property class ────────► Items IDO.Cost

UMs IDO/UMs table:  EA = Each; DZ = Dozen
Items IDO/Items table: Item, Description, Cost, UM
```

**Important nuance:** There are three related but distinct definitions named or described as `UM`: the **base property class** (`UM Base`), the **derived property class** (`UM`), and a **property named `UM`** in IDOs. Agents must identify the *kind of object* as well as its name before proposing changes.

## Demonstrated workflow (historical tutorial; **not** an autonomous execution script)

### 1. Inspect existing ID field and inherited length — 00:50–02:18

**Demonstration:**

1. Open the existing Customer form in design mode. The tutorial initially chooses **Site Default** when prompted for edit scope; that choice belongs only to the video.
2. Select the ID edit component bound to the `ID` property.
3. Under the properties panel, expand **Data Source**, and observe the property binding to the IDO.
4. Expand **Data Type**: the component-level **Length** is visibly `0` in the narration.
5. Under **Inheritance**, click the ellipsis and observe the inherited **Length = 50**.
6. The narrator explains that specifying `Length = 200` at component level **could override** the inherited 50 without modifying the IDO property. She instead proceeds to create a class; the transcript does **not** establish that she actually changed the component to 200.

**Agent inspection hypothesis:** A component may display a zero/default local setting while an effective constraint is inherited. Never infer the effective maximum length from the local property alone.

### 2. Define an `UM Base` property class — 02:18–04:08

**Demonstration:**

1. Return to the runtime tab. In **My Folders**, use **New Shortcut** to add the **IDO Property Classes** form, then open it.
2. Use Filter-in-Place, choose **New**, and create a class narrated as **`um base`**, meaning *unit of measure base*.
3. Enter the attributes below, then **Save**.
4. The narrator closes the form and calls **Form → Definition → Unload All Global Form Objects** to refresh cached metadata.

| Property-class field | Narrated value | Certainty |
| --- | --- | --- |
| Name | `UM Base` (spoken `um base`) | Exact stored spacing/case **unverified** |
| Data Type | String | Explicit |
| Length | `10` | Explicit |
| Column Data Type | Spoken `nvar char`, apparently NVARCHAR | **Confirm actual UI identifier**; speech-to-text is imperfect |
| Label String ID | Spoken `s-u-m` | Exact characters/case **unverified** |

**List lookup technique demonstrated:** A dropdown initially fetches up to 200 items, according to the speaker. Typing a prefix (`nvar`) with `*` and invoking its arrow is described as filtering matching values. She also mentions typing the prefix and pressing **F2** for an implied wildcard. The exact interaction should be verified against the current UI rather than treated as a universal shortcut.

**Agent boundary:** Creating a property class and shortcut affects persistent metadata/preferences; cache unload is an additional stateful action. **None is authorized** merely by possessing this training note.

### 3. Create Units of Measure IDO/table/form — 04:08–06:06

**Demonstration:**

1. In Designer, choose **New Form Definition → New Data → Maintenance**.
2. Enter an IDO named in speech as **`ums`**, IDO project **`Hello World`**, and table alias **`ums`**.
3. Define the first property `UM` from the newly defined **UM Base property class**. Observe inherited data type, length, and label string.
4. Set `UM` as **Primary Key** and **Required**.
5. Add `Description` as String, length **50**, label string ID spoken **`s description`**.
6. **Next → Finish**; when prompted to create a form, choose **Yes**.
7. Proceed through the form wizard using the shown default properties; move `UM` to the top; **Next → Finish**.
8. In design mode, select the UM label and open the **Caption** ellipsis. Create its string value as **Unit of Measure**; click **OK → Save**.
9. Return to runtime and open the new form; the narrator says the caption now appears correctly.

**Expected narrated observations:** The UM property inherits attributes from UM Base; the form can show the resolved `Unit of Measure` label after string creation.

**Source does not establish:** The exact generated SQL table/form name, whether the wizard's defaults are the same in Mongoose 2026.x, or recovery of these changes across a fresh Designer session.

### 4. Populate the Units of Measure domain source — 06:06–06:24

The narrator inserts and saves these two example records in the UMs form:

| UM code | Description |
| --- | --- |
| `EA` | `Each` |
| `DZ` | `Dozen` |

These are **demonstrated test records**, not instructions to insert rows in an existing or production table.

### 5. Derive the `UM` property class and attach an IDO domain — 06:24–07:08

**Demonstration:**

1. Return to **IDO Property Classes** and create a new class narrated as **`um`**.
2. Set its **Base Class** to `UM Base`, inheriting type, length, and label string ID.
3. Set **Domain IDO** to the UMs IDO created earlier.
4. Set **Domain Property** to `UM`.
5. Set **Additional List Properties** to `Description`.
6. Observe asterisks beside the domain fields; the narrator identifies these as overriding inherited attributes.

**Expected effect as described:** `UM` values on downstream items can use the UMs IDO as the selectable/validated list, with `Description` available as additional list data.

**Transcript limitation:** The narration moves immediately to creating further classes. It does **not** explicitly narrate a Save after defining these domain fields; do not invent an observed Save boundary for this step.

### 6. Define `Item Base` and `Cost` classes; refresh metadata — 07:08–07:52

The video describes creating two additional classes:

| Property-class field | `Item Base` | `Cost` |
| --- | --- | --- |
| Name | Spoken `item base` | `cost` |
| Data Type | String | Decimal |
| Length | `20` | `18` |
| Decimal Precision | — | `2` |
| Default Value | — | `0` |
| Column Data Type | Narrated `varchar` (audio imperfect) | Decimal |
| Label String ID | Spoken `s item` | Spoken `s cost` |

**Demonstration:** Use **New** to create classes, set the attributes, save, close the form, and invoke **Form → Definition → Unload All Global Form Objects** again.

**Important agent distinction:** A numeric cost's precision and default should be verified at the correct inheritance level; do not conflate a displayed default with proof it has been materialized in the table.

### 7. Create Items IDO/table/form — 07:52–09:50

**Demonstration:**

1. In Designer, choose **New Form Definition → New Data → Maintenance**.
2. Specify IDO name spoken as **`items`**, project **`Hello World`**, and table alias **`itms`**.
3. Add the properties in the table below.
4. **Next → Finish**, then accept **Create Form? → Yes**.
5. In the form wizard, accept the default property selection; move `Item` to the top and `Description` directly below it; proceed to **Finish**.
6. In design mode, resolve the uncreated `Item` and `Cost` caption string values via each component's **Caption → ellipsis**, then **Save** the form.

| Items property | Definition in narration | Source confidence |
| --- | --- | --- |
| `Item` | Uses `Item Base` class; inherits String, length **20**, column type, label string ID; **Primary Key**, **Required** | Explicit |
| `Description` | String, length **150**, label string ID spoken `s description` | Explicit |
| `Cost` | Uses `Cost` property class: Decimal, length **18**, precision **2**, default **0**, SQL Decimal | Explicit across 07:30–07:38 and 08:46–09:00 |
| `UM` | Uses the derived `UM` class with domain IDO and list metadata | Explicit |

**Expected observation:** After generation, `UM` is represented by a combo box rather than a free-text editor (see next step).

### 8. Observe domain-driven combo box and invalid-item validation — 09:50–10:41

**Demonstration:**

1. Switch to runtime and open the generated Items form.
2. Observe a **combo box** bound to the `UM` property, rather than a normal edit component.
3. Attempt to create an item with a **UM value not present** in the Units of Measure list.
4. Attempt to save; the narrator expects an error communicating **invalid item / invalid selection**.
5. The narrator attributes both selection and validation to inherited **domain information** on the property class.

**Evidence interpretation:** The transcript states the expected invalid-value error but does not include the full exact message. Do not assert a precise error code or literal message based on this text alone. Do not save deliberately invalid production test records.

### 9. Review inherited cost/default and insert demo items — 10:41–12:14

The narrator observes that `Cost` inherits **Decimal** type and **default 0**. She then directs the viewer to add Items test data and save.

| Item code | Description | Cost as narrated | UM code |
| --- | --- | --- | --- |
| `dumbbell` | `45 pound iron` | `45` dollars | `EA` |
| `guitar` | `natural acoustic` | `129.99` | `EA` |
| `eggs` | `cage free` | Spoken **`699`**; likely formatting ambiguity, **do not assume 6.99 or 699.00** | `DZ` |

**Source inconsistency:** At **12:07**, the narrator says to save **“all four records”**, yet only **three** specific item records are named in the provided Part 2 segment. She also earlier suggests attempting an invalid item. The transcript does **not** identify a fourth valid row or prove the test invalid item was saved. **Do not invent a fourth record** or silently normalize the price of eggs.

### 10. Transition — 12:14–12:19

Part 3 is previewed as covering **querying** and a first look at the **event system**. This file does not infer Part 3 operations.

## Reference data — compact agent lookup

### Property classes

| Class (spoken name) | Base class | Data Type | Length | SQL type | Other fields | Purpose |
| --- | --- | --- | --- | --- | --- | --- |
| `UM Base` | Not specified | String | 10 | Narrated like `nvarchar` | Label ID spoken `s-u-m` | Shared UM type/label |
| `UM` | `UM Base` | Inherited | Inherited | Inherited | Domain IDO `UMs`; domain property `UM`; additional property `Description` | Allowed UM codes / list source |
| `Item Base` | Not specified | String | 20 | Narrated like `varchar` | Label ID spoken `s item` | Shared item identifier |
| `Cost` | Not specified | Decimal | 18 | Decimal | Precision 2; default 0; label ID spoken `s cost` | Monetary-like cost field |

### Generated data definitions

| Narrated IDO | Alias | Fields | Records |
| --- | --- | --- | --- |
| `UMs` | `ums` | `UM` (PK, required, from UM Base), `Description` (String 50) | `EA / Each`, `DZ / Dozen` |
| `Items` | `itms` | `Item` (PK, required, from Item Base), `Description` (String 150), `Cost` (from Cost), `UM` (from UM) | Three explicitly named records; final narration says four |

Names and string IDs are **search hints**, not verified exact identifiers. Confirm case, underscores, class object names, generated names, and ownership/scope against the *actual UI* before any approved changes.

## Safe agent hypotheses derived from the tutorial

The following are **learning hypotheses**, not completed tests or authorization:

| Hypothesis | Minimal read-only observation or separately approved controlled test | What would count as evidence |
| --- | --- | --- |
| A component can inherit a property-defined length even when local Length is zero | Inspect a pre-existing, authorized FX_ form and its component's Data Type / Inheritance UI | Screenshots and exact Name/Scope, local value versus inherited value |
| Class reuse propagates datatype/length/label metadata | In a new explicitly approved FX_ experiment, create only the allowed test artifacts and test one inheritance attribute | Before/after property-class selection and inherited field values |
| Domain metadata causes a combo box or selection list | Use an isolated approved FX_ form/property experiment without touching core IDOs | Selected property class/domain and generated component Type evidence |
| Invalid values are rejected by a domain-backed list | Use only disposable FX_ test data if schema/data mutation is explicitly authorized | Recorded input, save attempt, exact error and post-state |
| Metadata cache affects visibility of new classes | Observe preference/current state; use explicit unload **only** if experiment authorizes it | Before/unload/after state with timestamps; no hidden boundary crossings |

**Do not combine these into one experiment.** Any class/IDO/table creation may exceed the present `FX_`-form-only learning permissions, even if the object is prefixed. If the scope is not approved, document the hypothesis instead of mutating.

## Agent validation checklist (for independently authorized experiments only)

- [ ] Read the active `AGENTS.md`, experiment brief, scope authorization, and session constraints **before** touching the app.
- [ ] Confirm the tenant, connected Web Client and Designer, intended identity/scope, and authorized FX_ artifact names.
- [ ] Classify each step as **read-only UI inspection**, **User preference/shortcut mutation**, **form mutation**, **global property-class/IDO mutation**, **database schema mutation**, **test-data mutation**, or **cache/session operation**.
- [ ] Keep **Site Default** and tutorial global data modifications out of a User-scoped FX_-only experiment unless separately authorized; do not change scope to make a feature work.
- [ ] Separate demonstrated claims from current-environment verified facts.
- [ ] If approved, perform exactly the bounded operation, record the property/component source identity and the observed inherited versus local values.
- [ ] Record the actual state immediately after Save; do not equate Save confirmation with post-reopen persistence.
- [ ] Follow only the allowed lifecycle: ordinary close/reopen, explicit unload, restart, and reauthentication are **different** experiment boundaries.
- [ ] If the UI is missing, blocked, or unexpected, record the blocker; do not change permissions, preferences, cache, or scope as an improvised workaround.
- [ ] Preserve screenshots, snapshots, field values, exact labels/error text, timestamps, and before/after evidence in the prescribed experiment directory.

## Source limitations and transcription notes

- This document's source is a **speech-to-text transcript**, not a video frame or verified UI recording. The narrator repeatedly says `IDO` but the supplied transcription uses `ideo`; editorial sections normalize this to **IDO**.
- The transcript speaks class names like `um base`, `item base`, and label-string identifiers like `s-u-m`. Their **exact spelling, spaces, capitalization and punctuation cannot be safely recovered from narration alone**.
- SQL types are pronounced/transcribed as `nvar char` and `end varchar`. The editorial references **NVARCHAR/VARCHAR as likely readings**, **not as independently verified UI strings**.
- The text calls the UMs object `ums`, the table alias `ums`, and the Items alias `itms`. These are spoken values; the precise generated object names remain unspecified.
- The demonstration's **`Length = 0`** refers to a local component-level field; **`Length = 50`** refers to an inherited value. Do not treat them as conflicting measurements.
- The narrator mentions a possible **200-character local override** for the Customer ID control, but does not narrate actually applying that override.
- The exact invalid-domain error string was not supplied. The transcript describes it in general terms.
- **Eggs cost `699`** and the **“four records” versus three named entries** are genuine source ambiguities. They are intentionally **not corrected**.
- The tutorial shows **Site Default** and global metadata edits. This differs from the factory's approved **User** scope/FX_-only experiment model. Behavior and available controls may differ in Mongoose 2026.x.
- No current-environment Designer, API, table, form or IDO state was inspected when preparing this note.

## Full supplied transcript (unaltered wording, timestamps retained)

The following is preserved from the operator's attached Part 2 transcript, except for line-ending normalization. Transcription mistakes and unresolved numbers are deliberately retained.

```text
[0:00] hi there this is caitlin porter from the mongoose enablement team welcome to part
[0:04] two of the mongoose hello world training series in this video we'll be going over the mongoose
[0:10] ideo capabilities and introduce the inheritance model so what exactly is the inheritance model
[0:17] mongoose provides the capabilities to create classes that hold properties characteristics
[0:22] and attributes that can be reused this allows for a single point of maintenance for the fundamental
[0:27] data types with proper planning this can create a much more efficient and consistent application
[0:34] there are many levels at which you can inherit these classes and they can be overwritten at
[0:38] various levels this model allows us to inherit a base class and refine it keeping our refinements
[0:44] exclusive to a specific level in today's video we will dive deeper into this using the inheritance
[0:50] model within our application in part one we created a customer's form a customer's table and a
[0:57] customer's ido which provided access to the table on that ido we created a property called id and
[1:04] assigned it a length of 50. to view the attributes of that field let's open the customer form in
[1:09] design mode click the design mode icon from the toolbar to open up the designer in a separate tab
[1:16] if this is the first time you've entered design mode you will be asked to identify your editing
[1:20] scope for this demo we will always be developing at the site default level select site default
[1:25] and hit ok let's open our customers form from the menu and you should see it in the list of
[1:30] recently used forms select the id edit component that is bound to id property we would expect this
[1:36] to have a length of 50. expand the data source section from the properties panel on the right
[1:41] and you can see that the component is bound to the id property on our ido
[1:44] once you expand data type you can see that the length is listed as zero now if you scroll down
[1:49] to the inheritance section click the ellipsis to view the attributes inherited from the property
[1:57] here you should be able to see your length of 50 that is being inherited from the property
[2:02] the zero that we saw earlier was the length that was defined at the component level
[2:07] if we wanted to we could define a length of say 200 here and would overwrite the length of 50
[2:12] assigned at the property level without changing the property definition instead of changing this
[2:18] at the component level let's create a property class that we can use as a foundation to build
[2:22] other property classes the best practice is to use property classes whenever possible and that
[2:28] involves some proper planning of your data model because property classes are metadata it's simple
[2:33] to adjust them as you develop navigate back to the runtime mode tab and let's create a new
[2:38] explorer shortcut right click on my folders and create new shortcut search for property classes
[2:46] and select the ideo property classes form expand your my folders and double-click your property
[2:53] classes to open the property classes form after the form opens hit the filter and place icon
[3:00] and then new to add a new property class go ahead and shrink the explorer to give us a
[3:05] little more real estate name our property class um base short for unit of measure
[3:11] give it a data type of string and a length of 10. drop the column data type list by default
[3:19] this will only query the first 200 items rather than scrolling through this list looking for what
[3:24] we want we should use the in-place filtering type in nvar and use the wildcard which is an asterisk
[3:31] and then hit the arrow by typing this it will only query the items in the list that start with nbar
[3:38] we can do this even quicker by typing nvar and hitting the f2 key doing this will imply there
[3:43] is an asterisk select nvar char for our column data type and give it a label string id of s-u-m
[3:50] then hit save for efficiency mongoose has caching of metadata at both the app server
[3:56] and the client to be sure our new property class shows up as available close the form and
[4:01] unload all the global form objects by selecting form definition unload all global form objects
[4:08] the next thing we should do is build the pieces to enable us to designate a unit of measure for
[4:12] an item in our app for example we want to have the option to say these eggs are x dollars
[4:17] a dozen or that these bikes are x dollars each navigate back to the design mode tab
[4:24] and click the new form definition icon from the toolbar the category select new data
[4:29] and for the wizard select maintenance ok and this will launch the new data maintenance wizard
[4:35] go ahead and give our ido a name of ums let's use our hello world project and give it a table alias
[4:42] of ums i want to add a property below type in um for the name and find your um base property
[4:47] class that we just created once you select the class you will see that it automatically sets
[4:51] the data type length and label string because it is inheriting that from the property class put
[4:56] this property to be the primary key and make it required add another row name this one description
[5:02] give it a data type of string a length of 50 and set the label string id to s description
[5:09] like next and then finish and select yes when it asks you if you want to create a form
[5:16] once the new form wizard opens hit next accepting the defaults here you can specify what properties
[5:22] you want to include on your form let's leave the defaults and hit next here you can reposition
[5:27] fields in your form by using the arrows on the right i'm going to move my um field to the top
[5:32] once you're done positioning your fields hit next and finish to create your form once the form opens
[5:37] in design mode you'll notice that our um string is being inherited from our property class if you
[5:43] were to change the string value on the um-based property class that change would cascade down to
[5:48] our um's form since it's a new string we'll need to create it click on the label component and on
[5:54] the caption field to the right click the ellipsis give it a string value of unit of measure hit ok
[6:00] and hit save jump back to the runtime mode tab and let's open our new form
[6:06] notice now that our label is showing the correct string value that we just created the form will
[6:12] automatically open in add mode let's add two records the first being ea description of each
[6:18] and the second being dz description of dozen hit save from the toolbar we're now going to create
[6:24] another property class that will use our um's ido to pull a list of the unit of measures that are
[6:29] available in our um's table open our ido property classes form and let's create a new property class
[6:35] called um let's use our um base for the base class which will inherit the data type length
[6:42] and label string id value any of those attributes that are being inherited from the base class can
[6:47] be overwritten here to give it a list source go to the domain ido field and select our um ido for the
[6:55] domain property select um and for additional list properties select description notice the
[7:02] asterisks next to the domain fields this indicates that we are overriding the inherited attributes
[7:08] let's create two more property classes that we can use in our application
[7:12] hit the new icon from the toolbar and let's name our first class item base
[7:17] give it a data type of string a length of 20 select the column data to end varchar
[7:24] and give it a label string id of s item add another row and let's name this one cost
[7:30] give it a data type of decimal a length of 18 a decimal precision of 2 a default value of 0
[7:38] decimal for the column data type and a label string id of s cost hit saved and let's clear
[7:45] the cache close the form and select form definition unload all global form objects
[7:52] now we want to create our items table ideo and form let's go back to the design mode tab and
[7:58] click the new form definition icon select new data for the category and maintenance for the wizard
[8:04] click ok to launch the new data maintenance wizard let's name this items and place it in our hello
[8:10] world ideo project give it a table alias of itms let's add some properties hit the add row button
[8:17] and let's add one called item let's select our item base property class that we just created
[8:24] this should inherit the data type the length the column data type as well as the label string id
[8:29] let's make this property the primary key as well as required
[8:34] let's add another property hit the add row button and let's name this one description
[8:39] give it a data type of string a length of 150 and a label string id of s description hit the add row
[8:46] button to add another property let's name this one cost let's use our cost property class that
[8:53] we just created and you can see it will inherit all the attributes included in that property class
[9:00] let's add one more property let's name this one um and let's assign it our um property class that we
[9:06] previously created hit next and finish and select yes when it asks you if you want to create a form
[9:13] now the new form wizard will open let's accept the defaults and hit next
[9:18] let's leave the properties that it defaulted to and hit next i want to rearrange the properties
[9:23] on my form to do so i'm going to move the item to the top and the description just under that
[9:30] once i'm done with that i'm going to hit next and finish to create my form
[9:35] once the form opens you'll notice that the item and cost strings need to be created
[9:40] i'm going to go ahead and click on the components select the ellipsis from the caption field
[9:45] and give them both a string value once i'm done with that i'm going to save my form
[9:50] let's go back to the runtime mode tab and open our newly created items form
[9:56] notice that mongoose has created a combobox component bound to the um property instead of
[10:01] an edit this is because we have inherited domain information which mongoose uses to provide a list
[10:06] source for the component try creating a new entry with an invalid unit of measure when you go to
[10:13] save your record you should get an error message saying that you selected an invalid item this is
[10:18] because we use a property class that has a domain ido list which has built-in validation to make
[10:24] sure the user selects an item from the list source list sources and validations are more examples of
[10:30] runtime inheritance at work we could go all the way back to the property class level and add
[10:35] additional units of measure or modify our existing two and the form will automatically update you can
[10:41] also notice that our cost property is inheriting the decimal data type with a default value of zero
[10:48] what did we just build let's take a quick look we began by creating the property class um base
[10:54] where we assigned the label string id sum then we created another property class
[10:59] named um which was derived from um base which means it inherited the label string id sum
[11:06] on this level we added the ido domain information which allowed us to have a drop list of items and
[11:11] validation from the um's table next we created the property um which was derived from um base
[11:19] meaning that again the label string id sum was inherited after our um's form was created
[11:26] an edit component that was bound to the um property inherited that same label string id
[11:32] before we finish up let's add some data to our items table switch back to runtime mode
[11:38] and add three more entries the first being dumbbell with a description of 45 pound iron
[11:44] a cost of 45 dollars and a unit a measure of ea add another row this time
[11:50] name it guitar with the description of natural acoustic costs 129.99 and a unit of measure of ea
[12:00] add one more record this time name it eggs with a description of cage free a cost of 699
[12:07] and unit of measure dz once you're done adding your four records hit save in part three we'll
[12:14] be exploring querying and take our first look at the event system for more tutorials and
[12:19] documentation check out the mongoose portal at mongoose.infor.com thanks for watching
```

---

**Series documentation convention:** This is a standalone `mongoose-hello-world-part-02.md`. Parts 3–8 require their own source material. Keep **Concepts → Demonstrated workflow → Reference data → Agent safeguards → Full transcript** as separate layers, and preserve unresolved audio/spelling ambiguities instead of inventing details.
