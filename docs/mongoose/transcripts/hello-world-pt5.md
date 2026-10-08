# Infor Mongoose — Hello World Training — Part 5 of 8

> **Document type:** Agent reference / tutorial extraction with the complete operator-supplied transcript  
> **Video:** Mongoose Hello World, Part 5 (video URL not supplied with this transcript)  
> **Speaker (per transcript):** Caitlin Porter, Mongoose Enablement Team  
> **Source:** Operator-provided timestamped narration; video footage, exact UI metadata, and runtime state not independently verified  
> **Coverage:** 00:00–20:21 (last supplied timestamp)  
> **Version applicability:** Historical tutorial with unspecified release/date. **Do not assume that its labels or behavior are identical in Mongoose 2026.x.**  
> **Series context:** Follows Part 4, which built the `Orders` IDO/table/form and property-class-backed Customer/Item fields. This document covers **Part 5 only**.

## How an agent should use this file

1. Treat **Demonstrated workflow**, **Reference data**, and **Expected observations** as a *learning reference*, not an instruction to alter a live tenant.
2. Keep the **Full supplied transcript** available for source verification; timestamps identify narration segments, not confirmed click timing. The source is automatically transcribed and contains possible recognition errors.
3. Before operating, read the active `AGENTS.md` and approved experiment brief. Confirm authorized environment, target name, exact User scope, UI identity, allowed lifecycle transitions, and evidence locations. Nothing here grants mutation authority.
4. **Factory-specific protection:** create or modify only expressly approved `FX_` artifacts. The tutorial edits unprefixed `Orders`, `Customer`, `Items`, globally reusable validators/classes, and uses **Site Default** scope. **Do not execute these operations against those names in the autonomous factory.**
5. IDO joins, derived properties, validators, component classes, property-class extensions, and **replacing an existing form** are distinct metadata mutations with different scope and risks. Request approval for each controlled learning experiment; do not lump the whole lesson into one trial.
6. **Replacement is destructive:** at 06:37–07:49 the instructor explicitly replaces an existing Orders form. Never replace an existing core, shared, or preexisting `FX_` form unless the approved brief specifically authorizes replacement of that exact artifact and states preservation/recovery requirements.
7. A working runtime demonstration does not prove persistence. When permitted, independently check Save, clean/dirty state, ordinary close/reopen, identity and scope, and only those additional cache/lifecycle transitions the brief allows. Do not use **Regenerate Form**, **Unload All Global Form Objects**, or a new Designer session as automatic troubleshooting.
8. The values and identifiers below are reproduced or normalized from *speech*. Never silently resolve ambiguous `cus`/`cuss`/`cust`, `der`/`dir`/`dur`, validator syntax, or component-class parameters without direct UI evidence.

## Part 5 learning goals

- Join the `Orders` IDO to `Customer` and `Items` tables, and expose selected joined columns as IDO properties.
- Derive an order-total IDO property by multiplying order count by joined item cost, while recognizing its read-only nature.
- Configure property-class extensions for Item and Customer ID details/add/find navigation.
- Explore the **Classic → Multi-View** form wizard and understand why **replacement** must be specially controlled.
- Display joined data, a derived total, and an item image on an Orders form.
- Distinguish joined-field updates **after Save** from immediate updates triggered by validators.
- Create reusable **In Collection** validators with output targets such as `%1` and `%2`.
- Package validators, immediate validation, and IDO collection list sources into reusable **Component Classes**.
- Pass output-binding parameters to both standalone combo boxes and corresponding grid columns.

## Prerequisites and dependencies from Parts 1–4

| Demo object or prerequisite | Why Part 5 needs it | Verification / safety note |
| --- | --- | --- |
| `Hello World` IDO project and `Customer` IDO/table/form | Customer lookup, joins, and customer drill-down | Existence and current names not verified; never mutate unprefixed demo/core objects in the factory |
| `Items` IDO/table/form | Item joins, item cost/description/image, and item drill-down | Part 4 added an image property and imported tutorial assets |
| `Orders` IDO/table/form | Target of joins, derived property, form reconstruction, and validator/component-class inheritance | Created in Part 4; unprefixed and therefore **not** an approved factory mutation target |
| `Orders.Customer ID`, `Orders.Item`, `Orders.Count` | Join keys and calculation input | Verify exact IDO property identifiers if later testing a disposable clone |
| `Customer ID` and `Item` property classes | Existing domain lists and basis of new property-class extensions | Part 4 created these globally reusable classes |
| `Cost` and `Picture` property classes | Inherited metadata for joined fields and total/image | Cost class from Part 2; Picture class from Part 4 |
| Sample Customer, Item, Order rows | Allows joined fields and calculations to display | Not supplied as database records; values cannot be invented |
| Site Default scope | Scope selected in the video | Conflicts with the factory's approved User-scope form-learning work |

## Concepts and object relationships (narrated model, not tenant proof)

```text
                    Customer table [ID, Name, Address]
                       ↑ join Orders.Customer ID = Customer.ID
                       │
Orders base table ─────┼──► Orders IDO ──► Orders form / grid
[Order Number,        │    ├── customer joined fields [alias Cus]
 Customer ID,          │    ├── item joined fields     [alias Itms]
 Item, Count]          │    └── derived order total = Count * joined Item Cost
                       │
                       ↓ join Orders.Item = Items.Item
                    Items table [Item, Description, Cost, Picture]

Customer ID / Item property classes
           └── property-class extensions: Details / Add / Find right-click behavior

Reusable In Collection validators
  Customer ID validator ──► %1: Name, %2: Address
  Item validator        ──► %1: Description, %2: Cost
           ↓
Reusable Component Classes
  [validator + %1,%2 forwarding + Validate Immediately + IDO list source]
           ↓
  Orders Customer ID and Item combo boxes + corresponding grid columns
           ↓
  outputs update when values change, before a row is saved (as narrated)
```

**Important distinction:** a **joined/derived property** obtains its value through IDO queries; an **In Collection validator with output mappings** is introduced to populate related fields immediately when a user changes a selection. The transcript describes both mechanisms but provides no capture of actual generated SQL or validator payloads.

## Demonstrated workflow — historical tutorial, **not** an autonomous runbook

### 1. Join Orders to Customer and Items — 00:28–01:44

**Narrated steps:**

1. From runtime, open **IDO Collections**, enter `Orders` as the IDO Name, and press **F4** to filter.
2. Choose **Tables → New Table**, select the **Customer** table, and enter table alias **`Cus`** (as heard in narration).
3. Construct a join condition matching **Customer.ID** to **Orders.Customer ID**; click **Add**, then **OK**.
4. Add another joined table: **Items**, alias **`Itms`**.
5. Construct a join condition matching **Items.Item** to **Orders.Item**, then **Add** and **OK**.

**Expected narrated result:** two joined-table references become part of the Orders IDO so the collection can publish related Customer and Item fields.

**Precision note:** The transcript says “id equals orders customer id” and “item equals orders item”; the qualified versions above are editorial representations of those relationships, **not captured SQL text**. Confirm actual table/column names, join direction, and key cardinality in the UI before any approved test.

### 2. Bind selected joined columns and assign property attributes — 01:44–03:33

**Narrated steps:**

1. On the joined **Customer** table, select **Bind Properties** (transcribed “buying properties”). Keep **Name** and **Address** only.
2. Use **Massage Property Names** and apply a customer-table alias prefix. The ASR alternates **`cus`**, **`cuss`**, and **`cust`**; exact generated identifier spelling is **not established** by the transcript.
3. Click **Finish**, then on the joined **Items** table use **Bind Properties** and keep **Description**, **Cost**, and **Picture** only.
4. In **Massage Property Names**, apply **`Itms`** as the alias/prefix; click **OK → Finish**.
5. Assign or override properties as narrated:
   - Joined customer **Address** → Label String ID `s address`.
   - Joined item **Cost** → Property Class **Cost**.
   - Joined item **Description** → Label String ID `s item description`.
   - Joined customer **Name** → Label String ID `s customer name`.
   - Joined item **Picture** → Property Class **Picture**.
   - Base **Customer ID** property → Label String ID `s customer id`.
6. **Save** and close the relevant IDO property/tables forms.

**Expected narrated result:** the Orders IDO exposes Customer.Name, Customer.Address, Items.Description, Items.Cost, and Items.Picture as separate joined properties, inheriting/overriding metadata where specified.

**Ambiguity:** Later component-class output mappings use spoken names like `custname`, `cuss address`, `itms description`, and `itms cost`. **Do not assume spaces, capitalization or alias spelling are literal metadata keys.** Inspect the saved property list if attempting an independent, authorized experiment.

### 3. Add a derived order-total property — 03:33–05:05

**Narrated steps:**

1. In **IDO Collections → New Property**, choose **Derived** (rather than Bound); select **Next**.
2. Name the new property using the narrator's **`Der`-prefix convention**; the transcript renders the specific name as “dur order total” / “dir order total.”
3. Assign the existing **Cost** property class; the tutorial expects data type inheritance.
4. Enter a derived expression described as **Count multiplied by joined Item Cost**. The literal speech is “count space asterisk space itms cost.”
5. Select **Finish**; open the IDO's **Properties** list, select the new derived property, and override **Label String ID** with `s order total` (to replace the Cost class's inherited label).
6. Check **Read Only**, then **Save** and close the IDO property and collection forms.
7. The tutorial directs **Form → Definition → Unload All Global Form Objects**.

**Expected narrated result:** each Order obtains a calculated total from its quantity and corresponding item's cost; a derived property is treated as read-only.

**Source cautions:**

- The presenter says derived expressions are evaluated as SQL SELECT expressions, and **property names are case sensitive**. This is a tutorial claim, not a separately verified SQL capture.
- The accurate saved property name/expression require direct UI inspection. **`DerOrderTotal`**, `Der_OrderTotal`, `Count * ItmsCost`, etc., are *examples of possible spellings*, **not supplied facts**. Do not instantiate one by guess.
- A multiplication expression is illustrative; the source gives no rounding, currency conversion, tax, discount, or null-handling rules.

### 4. Configure Customer and Item property-class drill-downs — 05:05–06:32

**Narrated steps:**

1. Enter Designer and select **Site Default** in the tutorial (not factory-authorized).
2. Open the **Orders** form and select the **Item** combo box.
3. Navigate to **Inheritance → Edit Property Class Extension** using the ellipsis; respond **Yes** to create it.
4. Under **Behavior → Add Details and Find Form**, select the **Items** form for both fields and set the target **Property = Item**.
5. Select the **Standard Details Add Find** right-click menu, then **OK**.
6. Select the **Customer ID** combo box and similarly create a property-class extension; use **Customers** form for **Add Details** and **Find**, target **Property = ID**, and the same right-click menu.
7. **Save** and close the Orders form.

**Expected narrated result:** reusable metadata for navigation from an Item/Customer ID field to the associated detail/add/find form.

**Boundary:** A property-class extension can propagate to other consumers of a class. Such an extension must be tested as an independently approved scope-wide metadata change, not as a harmless component-only edit.

### 5. Rebuild the Orders form with Classic → Multi-View (**replacement**) — 06:32–08:15

**Narrated steps:**

1. In Designer, select **New Form Definition**.
2. Set **Category = Classic** and **Wizard = Multi-View**.
3. Choose the **existing Orders form** as form name and **Orders IDO** as Data Source.
4. The wizard explicitly prompts to **replace an existing form**; the instructor accepts and later confirms replacement a second time.
5. Add joined and derived properties to the selected-property list: Customer Address, Customer Name, Item Description, Item Cost, Item Picture, and derived Order Total.
6. Reorder fields to roughly: **Order Number → Customer ID → Customer Name → Customer Address → Item → Item Description → Item Cost → Count → Order Total → Item Picture**.
7. Finish the wizard and accept replacement.
8. To allow inheritance of the right-click menu, remove the default **component-level Right-Click Menu** from the **Customer ID** and **Item** combo boxes; **Save**, reopen in runtime, and inspect menus.

**Expected narrated result:** replacement form displays both base and joined/derived properties, and property-class-extension right-click menus appear because the component-level override was cleared.

**Highest-risk step of Part 5:** **Do not replace** an existing form during factory learning unless a specific brief expressly authorizes replacement of a **disposable, uniquely identified `FX_` form** and preservation of any preexisting definition. Create a new disposable form in a separate future experiment instead where possible. Replacement can erase prior form layout, events and test evidence; the narrated tutorial does not provide a rollback plan.

### 6. Inspect joined fields, order total, and image display — 08:15–10:38

**Narrated steps:**

1. Open the rebuilt Orders form in runtime; add an order and **Save**.
2. After Save, observe that joined Customer/Item fields populate and the derived Order Total calculates.
3. In Designer, remove the extra **Item Picture Static** label component; move the Image-bound **Edit** component to the right, change its **Type = Static**, enlarge it, and set **Miscellaneous → No Colon = True**.
4. Create any missing caption strings through a Caption ellipsis prompt.
5. Use **Regenerate Form** (the presenter describes this as a way to apply some changes that otherwise require Save/close/reopen).
6. In runtime, notice that the image displays an unwanted caption.
7. In Designer, either remove the caption or choose **Data Source → Formatting → Image and Text = Image Only**.
8. **Save** and reopen in runtime. Observe image display while moving through orders.
9. Optionally use **Ctrl** to multi-select components and the toolbar's positioning controls to align them; Save once satisfied.

**Expected narrated result:** the form displays joined data, calculated totals, and picture content without a visible image caption.

**Boundary:** The identity of “Item Picture Static” vs. “Item Picture Edit” and the retained component's type are explicitly described, but exact component Name properties are not provided. **Do not delete a component by inferred identity.** Regenerate Form is a special lifecycle action; do not use it unless the active experiment explicitly permits it.

### 7. Explain the need for immediate validation and output mapping — 10:38–11:21

The instructor observes that **joined properties update after Save**. For an unsaved change to Customer ID or Item, the goal is to populate associated name/address or description/cost fields **immediately**, before Save. The tutorial introduces a reusable **Validator** plus **Component Class** for this behavior, including list-source data to support selections without a new DB round trip.

**Distinguish the goals:**

- **In Collection validator:** check whether a selected key exists and retrieve additional related values.
- **Output mapping:** write related results into target form properties or components, using positional targets `%1`, `%2` rather than one hard-coded form.
- **Component Class:** package the validator, forwarding parameters, list source, and `Validate Immediately = True` for reuse.
- **List Source / Columns to Display:** fetch more properties than the user sees; the hidden extra fields can support output mapping when a drop-down value is chosen.

### 8. Create Customer ID In Collection validator — 11:21–13:06

**Narrated steps:**

1. In Designer, select **Edit → Validators → New**; give the validator a name spoken as **Customer ID**.
2. Set **Type = In Collection**, then open the **Parameters** ellipsis.
3. Set **IDO = Customer**.
4. Configure output properties under **Set Prop / Properties** (wording as transcribed):
   - Output **Target = `%1`**, **Value = Name**.
   - Output **Target = `%2`**, **Value = Address**.
5. Under **In Collection Only**, set the lookup **Property = ID**.
6. Set the narrated error message field to **`m is not a valid`**; its exact special-message syntax, punctuation, and intended trailing parameters are **unconfirmed**.
7. Confirm dialogs back to the editor.

**Expected narrated result:** a reusable validator checks a Customer ID against the Customer IDO and outputs Name and Address through two positional targets.

**Do not assume:** output target syntax is case-insensitive, that the error string is complete, or that `%1`/`%2` refer to literal component names. Their meaning depends on the component-class parameter binding at the use site.

### 9. Create reusable Customer ID Component Class — 13:06–15:08

**Narrated steps:**

1. Choose **Edit → Component Class → New**; name it **Customer ID**.
2. Under **Data Source → Validation → Validators**, add the Customer ID validator.
3. On that validator's **Parameters** control, enter the positional forwarding sequence **`%1,%2`** (the narrator says “percent 1 comma percent 2”).
4. Set **Validate Immediately = True**.
5. Under **List Source**, set **Type = IDO Collection** and **IDO = Customer**.
6. Choose list-source **Properties = ID, Name, Address**, but **Columns to Display = ID, Name** only. Address remains available to support the output process without being displayed.
7. Confirm, save/close the editor as narrated, and unload global form objects.

**Expected narrated result:** component-class consumers can use a Customer dropdown and populate both Name and Address immediately when configured with targets.

**Why list source matters:** the narration says a drop-down selection may use cached/list data instead of making another server query, so the list source needs **Address** available even if only **ID** and **Name** are visible. Treat this as a narrated explanation, not a performance measurement.

### 10. Apply Customer ID class to Orders combo box and grid column — 15:08–16:22

**Narrated steps:**

1. Reopen the **Orders** form in Designer.
2. Select the **Customer ID** combo box.
3. Under **Inheritance**, choose **Component Class = Customer ID**.
4. Under **Component Class Parameters**, supply the target for **Customer Name** first, then **Customer Address**. Source speech resembles `custname, cuss address` but exact IDs must be read from the bound Orders IDO properties.
5. Select the grid, open **Edit Grid Columns**, and assign the **same Customer ID component class** and **same two target parameters** to its **Customer ID grid column**.
6. **Save**, reopen the Orders form in runtime, change Customer ID, and observe the Customer Name and Address values update **before Save** in both the detail form and grid.

**Expected narrated result:** the component class supports both component and grid-column reuse.

**Failure mode:** a mismatch between the IDO's saved joined property names and the passed parameter text could prevent output assignment. Record the actual names from the property list; do not auto-correct one from the transcript.

### 11. Create Item In Collection validator — 16:22–17:31

**Narrated steps:**

1. In Designer choose **Edit → Validator → New**; name it **Item**.
2. Set **Type = In Collection** and **IDO = Items**.
3. Under **In Collection Only → Property**, select **Item**.
4. Configure two **Set Prop** outputs:
   - **Target = `%1`**, **Value = Description**.
   - **Target = `%2`**, **Value = Cost**.
5. Set the error message field to the spoken **`m is not a valid`** (exact syntax unverified); confirm.

**Expected narrated result:** the validator checks item membership and exposes Description/Cost via positional outputs.

### 12. Build Item Component Class and assign to form/grid — 17:31–19:24

**Narrated steps:**

1. Use **Edit → Component Class → New**; name it **Item**.
2. Under **Data Source → Validation → Validators**, add the **Item** validator; pass **`%1,%2`**.
3. Set **Validate Immediately = True**.
4. Under **List Source**, set **Type = IDO Collection**, **IDO = Items**.
5. Set **Properties = Item, Description, Cost**.
6. Under **Columns to Display**, show **Item, Description**; keep **Cost** available but not visible in the dropdown.
7. Select the Orders **Item** combo box and assign **Component Class = Item**.
8. For **Component Class Parameters**, provide the actual Orders joined Item Description target first and joined Item Cost second (source resembles `itms description, itms cost`).
9. Apply the same class and parameters to the **Item** grid column.
10. Save the form.

**Expected narrated result:** choosing an Item in either UI location immediately fills its Description and Cost output targets.

### 13. Runtime test, unload and Part 6 handoff — 19:24–20:21

**Narrated steps:**

1. In runtime, **close Orders** and choose **Form → Definition → Unload All Global Form Objects**.
2. Reopen Orders; choose an Item in the detail view and inspect whether description/cost populate immediately.
3. Expand the grid using its splitter and change an Item in a row; inspect whether description/cost update.
4. Part 6 preview: the instructor plans a **chart**, **form script attached to an event**, importing images, and further **theme work** for the store portal.

**Expected narrated result:** immediate population works in both the detail combo box and grid column, whereas the earlier joined-field-only behavior required Save.

**Boundary:** A narrated test result is not acceptance evidence for the factory. If an approved experiment involves cache unload, track it as an explicit operation; do not infer it is a required prerequisite to all class changes.

## Reference data — compact lookup

### Joins and derived property

| Item | Source value / description | Confirm before using |
| --- | --- | --- |
| Primary IDO | `Orders` | Existing, unprefixed demo IDO |
| Customer joined table | `Customer`, alias spoken `Cus` | Join: Customer.ID = Orders.Customer ID |
| Items joined table | `Items`, alias spoken `Itms` | Join: Items.Item = Orders.Item |
| Customer bound joined fields | Name, Address | Saved property prefix varies between `cus`, `cuss`, `cust` in ASR |
| Items bound joined fields | Description, Cost, Picture | Alias `Itms` spoken consistently, exact capitalization unverified |
| Derived property prefix | `Der` (as stated best practice) | Specific property recognized variously `dur`/`dir` order total |
| Derived expression | Count × Item Cost (`count * itms cost` in speech) | Exact property-token syntax/case unknown; requires UI evidence |
| Derived class | Cost | Then override Label String ID to `s order total` |
| Derived attribute | Read Only = checked | Narrator describes derived values as inherently read-only |
| Drill-down destination (Customer ID) | Customers form, Property `ID` | Details/Add and Find; standard Details Add Find menu |
| Drill-down destination (Item) | Items form, Property `Item` | Same menu and inherited override interaction |

### Validators, component classes and list sources

| Configuration | Customer ID | Item |
| --- | --- | --- |
| Validator / Component Class name | `Customer ID` | `Item` |
| Validator Type | `In Collection` | `In Collection` |
| Referenced IDO | `Customer` | `Items` |
| Lookup property | `ID` | `Item` |
| Output `%1` | `Name` | `Description` |
| Output `%2` | `Address` | `Cost` |
| Validator-to-class params | `%1,%2` | `%1,%2` |
| Class Validate Immediately | `True` | `True` |
| List source Type | `IDO Collection` | `IDO Collection` |
| List source properties | `ID`, `Name`, `Address` | `Item`, `Description`, `Cost` |
| Columns to display | `ID`, `Name` | `Item`, `Description` |
| Consumer targets | Orders joined Customer Name, Customer Address | Orders joined Item Description, Item Cost |
| Applied on | Customer ID combo box **and** grid column | Item combo box **and** grid column |
| Expected runtime behavior | Change Customer ID → name/address update before save | Change Item → description/cost update before save |

### Sequence-sensitive observations to preserve

| Event / state | What the narrator says | What it *does not* prove |
| --- | --- | --- |
| IDO join saved | Joined fields accessible from Orders IDO | The join works in every tenant or under all row cardinalities |
| Runtime Order Save | Joined fields and derived total appear | Immediate updates on unsaved changes |
| Right-click component menu removed | Inherited Details/Add/Find menu appears | All other inherited metadata behaves identically |
| Change selected Customer/Item with component class | Related output fields update immediately | Correctness for typed invalid input, empty value, or unsaved/offline data |
| Change selection in grid | Same outputs update in grid | Persistence after full Designer close/reopen or server cache boundary |
| Unload All Global Form Objects | New metadata becomes usable in narrated demo | Permission to clear global objects during another test |

## Controlled learning ideas — **proposals only, not approved tests**

These are examples of how a coordinator might split the tutorial into **one narrow capability per future experiment** without touching the tutorial's shared objects:

1. **Read-only discovery:** inspect whether the 2026.x Designer exposes derived-property, validator, and component-class concepts with the same field names. Do not mutate anything.
2. **Component-class metadata visibility:** only if independently approved and safely scoped, create a dedicated `FX_` test object and inspect its class metadata. Verify Save/close/reopen; avoid depending on joined IDs or global side effects.
3. **Output mapping behavior:** in a separately authorized disposable environment, observe one In Collection validator with one output target. Expand to a second output only after the first case is evidenced.
4. **Form replacement risk:** prefer **reviewing** the wizard on an authorized disposable identity without confirming replacement. Do not execute the replace operation as a routine educational step.

These proposals **do not supersede blocked findings**. In particular, previous factory experiments exposed variable-definition recovery failures; nothing in the Part 5 tutorial validates or repairs those failures, and Part 5's validator parameters are not the same mechanism as a Part 3 form variable.

## Agent verification / evidence checklist (use only inside an approved experiment)

- [ ] Approved scope, tenant/session, editing privilege, and test target identity explicitly recorded *before* mutation.
- [ ] Target names and object types are approved; created/modified artifacts meet the `FX_` mutation rule.
- [ ] Baseline screenshots/snapshots identify the exact Form, IDO, property/class, and visible editing scope.
- [ ] Only **one** bounded change made; no unapproved form replacement, schema change, global class/theme edit, cache clear, or regenerate.
- [ ] Property/validator names copied from actual UI, not guessed from ASR text.
- [ ] Save result observed and documented; changes compared to baseline.
- [ ] If authorized, ordinary close/reopen performed once, then object identity/scope and changed metadata independently rechecked.
- [ ] For validator tests, capture actual selector input and target outputs *before Save*, then distinguish this from downstream Save results.
- [ ] For grid tests, separately capture grid-column class settings and runtime output behavior.
- [ ] If a prompt, authentication boundary, missing Designer, or other blocker appears, stop at the prescribed boundary; do not improvise a recovery workflow.
- [ ] Evidence linked in the experiment record with observations separated from assumptions and limitations.

## Source limitations / transcription ambiguities

- This is **only the transcript** provided by the operator. The spoken actions, screenshots, exact properties, UI success toasts, and database values were not independently checked against the video.
- The transcript repeatedly renders **IDO** as “ideo”, **Bind Properties** as “buying properties,” and **Derived** as “drive.” Editorial section labels normalize terminology without claiming a verbatim UI reading.
- Customer joined-property prefix appears as **`cus`**, **`cuss`**, and **`cust`**; an actual IDO property name must be inspected, not assumed.
- Derived-property identifier appears in speech-to-text as **`dur order total`**, **`dir order total`**; the speaker recommends a `der` prefix. Exact metadata naming remains unverified.
- The transcript sometimes renders component/class names with spaces. Mongoose IDO property identifiers may not literally contain those spaces; any unspaced forms mentioned above are **not confirmations of actual identifiers**.
- The narrated **`m is not a valid`** error message may represent a message-string reference, partial message token, or ASR truncation. Do not treat it as confirmed, functional validation syntax.
- The exact **Derived Expression**, **Set Prop** assignment layout, **component-class parameter** identifier spellings, and data-source binding choices are not visible in the supplied text.
- The wizard prompts **twice** to replace Orders. The source does not address preservation, rollback, shared-form impact, or the safer 2026.x workflow.
- Several runtime claims (“immediate”, “after Save”, “right-click menu appears”) are presenter-narrated, not independent tests with attached logs or screenshots.
- All global class/validator, IDO and Site Default edits are tutorial actions; they are **not** automatically permitted for the current factory.
- Part 6 is previewed but not covered here. Do not merge its chart/script/theme procedures into Part 5.

## Full supplied transcript (unaltered wording, timestamps retained)

The block below preserves the operator's transcript text without spelling cleanup. Timestamps are caption timestamps; spacing/line segmentation reflect the supplied source rather than verified video frames.

```text
[0:00] this is caitlin porter from the mongoose enablement team welcome to part 5 of the
[0:03] mongoose hello world training series in part 4 we updated our items facility with the ability
[0:09] to import a picture and we created the orders facility which we used to create some orders
[0:14] in today's video we will extend the orders table further by joining it with tables and adding
[0:18] property class extensions to support drill downs we will create a drive field for a calculation
[0:23] and we'll expand on the inheritance model by building out component classes and validators
[0:28] that can be reused throughout our application let's start by joining a few tables open the
[0:34] ido collections form from the list of recently used forms the form will open up and filter in
[0:40] place mode type in orders in the ideo name and hit f4 to filter to it click the tables button
[0:47] and then click new table this will allow us to create a table join or a reference to existing
[0:53] tables in the table name drop down select our customer table and give it a table alias of cus
[1:00] and finally let's set our join condition let's set it to id equals orders customer id
[1:10] hit the add button and then hit ok then select the new table button again this time let's create
[1:16] a join to our items table select items from the table name drop-down give it a table alias of itms
[1:25] and for the join condition select item equals orders
[1:33] item hit add and then ok with the customer table selected click the buying properties button
[1:44] deselect all of the columns except for address and name and then hit the massage
[1:50] property names button let's prefix these two property names with the prefix cuss click ok
[1:58] and when you return you'll see that it renamed our properties cuss name and cus address
[2:06] click finish and now you'll see our two properties that were added to the orders ido let's do
[2:11] the same for the items table close the ideal properties form and then select your items table
[2:18] then click the buying properties button deselect everything except for description cost and picture
[2:25] and then hit the massage property names button and let's prefix these properties with itms
[2:34] hit ok and then hit finish to create the properties on our orders ido
[2:39] now let's add some attributes to those properties we just added
[2:43] select cusp address and give it a label string id of s address
[2:49] then select our items costs property and assign it our cost property class
[2:55] select items description and give it a label string id of s item description
[3:04] then select cust name and give it a label string id of s customer name
[3:12] select the item's picture property and let's
[3:15] assign it the picture property class that we created earlier
[3:21] lastly select the customer id property and change the label string id to s customer id
[3:29] once you're done adding your attributes save and close the form
[3:33] go ahead and close the ido tables form as well so far all of the ido properties we've used have been
[3:39] bound to columns on tables but properties can also be calculations input to server side update logic
[3:46] or relationships to other ideos select the new property button then select derived hit next
[3:52] and let's name our property dur order total we consider it a best practice to always prefix your
[3:57] derived fields with der let's assign it the cost property class that we created earlier once you
[4:03] select the property class it should automatically inherit the data type let's type in our expression
[4:08] below type in count space asterisk space itms cost this will multiply the count by the item
[4:20] cost properties to calculate our order total these expressions are evaluated as sql select statements
[4:26] and property names in the expressions are case sensitive hit finish to create your property
[4:31] let's add a label string id to our newly created property hit the properties button to see all
[4:36] the properties on that ido select the dir order total property that we just created and change the
[4:42] label string id to s order total as you can see because we are inheriting the cost property class
[4:49] it automatically inherited the cost label this change will override that label
[4:53] because this is a derived property this property is inherently read-only so go ahead and check the
[4:59] read-only checkbox save your changes and close the ido properties form as well as the ido's form
[5:05] then unload all the global form objects from form definition next let's create property class
[5:11] extensions for the item and customer id property classes to enable them to have drill downs this
[5:17] is the same process we went through in part 4 so this should look familiar let's enter design mode
[5:22] by hitting the design mode icon from the toolbar set the editing scope to site default and hit ok
[5:28] then open your orders form from the list of recently used forms
[5:32] once the form opens select the item combo box on the right expand the inheritance section
[5:39] click the ellipsis on edit property class extension
[5:42] select yes when it asks you if you want to create the property class extension
[5:46] expand the behavior section and then expand the add details section set the add details and the
[5:52] fine forms to both our items form set the property to item and then in the right-click menu below
[5:59] set it to standard details add find hit ok let's do the same thing for our customer id field
[6:06] click on the customer id combo box and expand the inheritance section click on the ellipsis for the
[6:11] edit property class extensions and select yes to create it set the add details and the find forms
[6:17] to our customers form set the property to id then scroll down to the right-click menu and set it to
[6:25] standard details add find [Music] hit ok then save and close your form now that we have added
[6:32] more properties to our orders ideo i want to recreate my orders form with the new properties
[6:37] instead of having to manually add each one to do this i'm going to replace our old orders form
[6:42] with a new one using the new form wizard while in design mode select the new form definition
[6:47] icon from the toolbar for the category select classic and for the wizard select multi-view
[6:56] for the name select our existing orders form for the data source select our orders ido
[7:02] hit next and when it asks you if you want to replace your existing form hit ok now
[7:07] let's add some of our new properties that we created onto our new form click on cusp address
[7:12] and add it using the arrow button in the middle continue on by adding cust name items description
[7:20] items cost items picture and dur order total then hit next i'm going to use the buttons
[7:29] on the right to reposition the fields on my form i'm going to start with order number followed by
[7:34] customer id test name cuss address item items description items costs count dur order total
[7:43] and then items picture at the end hit next then finish and say ok to replace the form
[7:49] now we want to test our property class extensions that we created previously however i remember
[7:54] that mongoose defaults a right click menu on the component level let's make sure before we test
[7:58] it that we remove that component level menu with your orders form open in design mode select your
[8:03] customer id combo box and remove the right-click menu under the behavior section of the properties
[8:08] panel do the same for the item combo box save your form and then reopen it in runtime mode
[8:15] you'll notice now if you right-click on any one of those fields the right-click menu is
[8:19] inheriting properly go ahead and add an order so we can see our bound properties working properly
[8:26] go ahead and create an order so we can see our bound properties in action
[8:31] you'll notice that once you hit save all of the join properties will display the correct data
[8:37] you can also see our derived field der order total calculating the total order amount now
[8:43] that everything here looks in order let's make a few more changes to the form itself switch
[8:47] back to the design mode tab click on the item picture static and hit the delete key to delete
[8:53] the component since we're just displaying a picture i only want the edit component
[8:57] drag the item picture edit to the right of the fields and change the type to static
[9:03] grab the corner and drag it out to make it bigger and since static labels automatically come with a
[9:09] colon at the end let's remove it by scrolling down to miscellaneous in the properties panel
[9:14] and set no colon to true i also noticed that some of my labels don't have string values
[9:20] go ahead and create any missing strings by selecting the ellipsis on the caption field
[9:25] and selecting yes to create them then hit the regenerate form button on the toolbar
[9:31] some form changes require you to save close and reopen the form to see those changes
[9:36] you can use this button to do that switch back to the runtime mode tab and reopen our form so
[9:42] we can see our changes hit refresh to query the data and you can see that our picture property
[9:48] is displaying a caption which we don't want so let's hop back over to design mode to remove this
[9:56] select our items picture edit and you can either remove the caption in the caption field or you
[10:02] can scroll down to data source under formatting and set the image and text property to image only
[10:08] hit save and then reopen the form in runtime mode to see the change we just made
[10:13] and just like that we were able to remove the caption from our image property and as
[10:17] we cycle through our orders all of our joined and derived properties are updating accordingly
[10:23] organize the form components until you have something that you're happy with you can hold ctrl
[10:27] to select multiple items and use the positioning icons from the toolbar to align it with other
[10:32] components on the form once you found something you're happy with go ahead and save your form
[10:38] when it comes to using join properties you'll notice that the value will only update after save
[10:44] sometimes though you want it to automatically update once you select an item
[10:49] let's say the user changes the customer id we want it to automatically update the customer
[10:54] name and address immediately before save to do so we can utilize a validator and a
[10:59] component class to do this switch back to the design mode tab and select edit
[11:05] validators validators are global objects that can be used in multiple ways
[11:11] they can be set up to validate a value as well as return output values to the form for functions
[11:16] like displaying associated descriptions or setting downstream component defaults select
[11:21] the new icon to add a new validator and let's name this customer id change the type to in collection
[11:30] and then click the ellipsis on the parameters field set the ido to our customer idle
[11:37] then select ellipsis for the set prop field below it for an in collection validator like
[11:43] this mongoose will format a where clause comparing the values based on the current component's value
[11:49] versus the column's value mongoose executes a database query with an in collection validator
[11:54] so if other values are needed from the table it's an efficient time to get them during this query
[11:59] in our case along with the validations we want to bring back the customer name and customer address
[12:04] fields and place those onto the form select the ellipsis besides the properties field
[12:09] and then hit new for the target type in percent 1 and for the value select name from the drop list
[12:18] in this scenario we are using position parameters instead of name parameters by not hardwiring the
[12:23] target we're able to reuse this on multiple forms by passing in the component name wherever we're at
[12:29] hit ok and then hit new to add another set the target to percent 2 and select address
[12:36] for the value then select ok until you get back to the validator parameters modal
[12:43] then under the in collection only section click the ellipsis next to the property field
[12:49] and let's select our id property then hit ok then in the error message field type in m is
[12:56] not a valid this is a standard mongoose error message that we can use click ok until you get
[13:01] back to the form with our validator built let's add a list source and some other attributes and
[13:06] then package it up into a component class so it can be reused within our application
[13:12] use the edit menu to browse global objects let's select component class
[13:17] click the new icon at the bottom and let's name our component class customer id scroll down and
[13:23] under the data source section expand validation and click the ellipsis in the validators field
[13:29] click the add button at the bottom and add the customer id validator that we just created
[13:35] we need to pass the percent 1 and percent 2 parameters to the validator
[13:39] doing this will effectively pass whatever was passed to the component class straight through to
[13:43] the validator with the validator selected click on the parameters button at the bottom enter
[13:49] percent 1 comma percent 2 and click ok back to the component class properties window then
[13:56] set validate immediately to true the last thing we need to define on our component class is a list
[14:02] source we're inheriting a list of id and name from the customerid property class but the customer
[14:08] id validator we created has an output of both the customer name property and address property
[14:13] by default for efficiency when the user selects a value from the drop down as opposed to typing
[14:18] a value in mongoose avoids making an actual round trip to query from the database assuming that the
[14:23] list entries are all valid values we need a list source that includes not only the id and name but
[14:28] also the address in the list source click the ellipsis next to the list source field for type
[14:34] select ido collection then select our customer ido click on the ellipsis next to the properties field
[14:42] add the id name and address properties then hit ok we don't want to show the address field we
[14:50] just want to have it available for our validator so click the columns to display button hold shift
[14:56] to select the id and name properties then hit ok hit ok until you return back to the home screen
[15:03] then save your form close it and unload all the global form objects with our validator and list
[15:08] source nicely packaged up into a component class we can use this on our orders form reopen the
[15:14] orders form from the list of most recently used forms and select the customer id combo box expand
[15:21] the inheritance section and select the component class customer id which contains our validator and
[15:25] list source in the component class parameters field below type in custname comma space cuss
[15:33] address which will receive our customer name and customer address properties
[15:38] since we also have an id grid column let's apply the same component class to the grid column as
[15:43] well select the grid component then select the edit grid columns button in the top left
[15:48] select the customer id grid column expand the inheritance section and assign it our customer
[15:53] id component class then pass in the cust name and cuss address parameters below click ok and
[16:00] save your form let's reopen this form in runtime mode so we can test it out now when you select a
[16:06] different customer the customer name and address will immediately output thanks to our validator
[16:13] we can also test this in our grid click on the grid splitter and drag it to expand you'll notice
[16:18] once we change the id that both the customer name and address will update there as well
[16:22] now let's repeat what we just did to the item combo box flip back to the design mode tab click
[16:29] edit validator and hit the new icon from the bottom let's name this validator item then hit ok
[16:38] change the type to ink collection and then select the ellipsis for the parameters field
[16:44] select our items ido [Music] click the ellipsis for the property field and select item
[16:51] then hit ok then select the ellipsis for the set prop field click the ellipsis on the properties
[16:58] field and then hit new this time we want to bring back the item description and item cost
[17:04] so for target type in percent 1 and then select description for the value hit ok and then hit new
[17:11] to add a second for the target type in percent 2 and then select cost for the value hit ok hit ok
[17:18] until you return back to the validator properties for the error message type in m is not a valid
[17:25] then hit ok now that the item validator is created let's package this up into a component class
[17:31] to make it reusable select edit component class from the menu then hit the new icon on the bottom
[17:37] and let's name this item then hit ok expand the data source section and then scroll
[17:43] down to validation and click the ellipsis on validators let's add our item validator here
[17:50] select the item validator and then hit the parameters button at the bottom
[17:55] type in percent one comma percent two and then hit hit ok again to return back to the component
[18:01] class properties set validate immediately to true then click the ellipsis for the list source field
[18:09] set the type to ido collection and then select our items ideo [Music]
[18:15] click the properties ellipsis and let's add item description and cost then hit ok
[18:24] select the columns to display ellipsis and hold shift to select item and description
[18:30] then hit ok hit ok to return back to the component class properties
[18:37] click ok to return back to the main screen and now let's apply our component class to our item combo
[18:43] box click the item combo box component and expand the inheritance section select item from the list
[18:51] for the component class parameters type an itms description comma itms cost to pass in
[18:58] our description and cost properties let's apply that same component class to our grid column
[19:03] select the grid component and select the edit grid columns button in the top left corner select the
[19:08] item grid column then expand the inheritance section select our item component class and
[19:14] pass in the same parameters itms description comma itms cost then hit ok and save your form
[19:24] let's test this switch back over to the runtime mode tab close your form and unload all the global
[19:29] form objects from form definition then reopen your form from the list of recently used forms
[19:35] select an item from the list and notice that the item description and costs will immediately update
[19:41] let's do the same to our grid column expand it by dragging the splitter
[19:45] and change the item you'll notice that the description and cost change here as well
[19:52] and that wraps up part 5. in part 6 we will learn how to create a chart
[19:57] and we'll touch on creating a form script and attaching it to an event we will also start laying
[20:01] the groundwork for our store portal by importing images and expanding on our theme for more
[20:07] tutorials and documentation check out the mongoose portal at mongoose.m4.com thanks for watching
[20:21] you
```
