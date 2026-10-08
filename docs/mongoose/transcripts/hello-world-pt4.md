# Infor Mongoose — Hello World Training — Part 4 of 8

> **Document type:** Agent reference / tutorial extraction with the complete operator-supplied transcript  
> **Video:** Mongoose Hello World, Part 4 (video URL not supplied with this transcript)  
> **Speaker (per transcript):** Caitlin Porter, Mongoose Enablement Team  
> **Source:** Operator-provided timestamped transcript; video footage, UI labels, and database state not independently verified  
> **Coverage:** 00:00–17:19 (last supplied timestamp)  
> **Version applicability:** Historical tutorial with unconfirmed publication/version; do **not** assume UI or metadata behavior matches Mongoose 2026.x  
> **Series context:** Continues the `Items`, `UMs`, `Customer` and `Hello World` project from Parts 1–3. This document covers **Part 4 only**.

## How an agent should use this file

1. Read **Concepts**, **Demonstrated workflow**, **Reference data**, and **Source limitations** to learn how the tutorial sequences table, IDO, form, event, theme and property-class changes.
2. Use the **Full supplied transcript** as the original source evidence. Timestamps locate *spoken narration*, **not independently confirmed UI click times**.
3. **Do not execute this tutorial as a factory task.** Follow the current `AGENTS.md`, operator-approved experiment brief, exact target identity, live UI evidence, and lifecycle/verification requirements.
4. **Factory-specific constraint:** only authorized `FX_`-prefixed artifacts may be created or changed, with **User** editing scope for permitted form work. The tutorial uses unprefixed `Items`, `Orders`, global classes/theme, database structures and **Site Default** scope; these are **not authorized** by this reference file.
5. Changes to **SQL tables, IDOs, property classes, property-class extensions, themes and User Preferences** can affect objects beyond one User-scoped test form. Treat each as **separately permissioned**, not implicitly allowed merely because it appears in a tutorial.
6. A tutorial's narrated Save or runtime demonstration is **not** proof of metadata persistence after an approved ordinary close/reopen, explicit unload, Designer relaunch, or another experiment boundary.
7. Never silently repair speech-to-text ambiguities by guessing exact property names, spelling, color encodings, parameter syntax, join directions, or objects to delete.

## Part 4 learning goals

- Extend an existing **Items** application table with a binary `Picture` column using the **SQL Tables** core form.
- Define a reusable binary **Picture property class** and bind an IDO property to the new database column.
- Bind a **Static** component to binary data and use a custom **Binary Value Action → Import** event from a button.
- Define an application **Theme**, create a reusable **Button** theme class, and apply the class to a form component.
- Add an **IDO table join** from Items to Units of Measure, expose a joined description as an IDO property, and display it on a form and grid.
- Observe **property-class extension** metadata, its **Details / Add / Find** right-click menu, and how a component-level property can override it.
- Define domain-backed property classes for **Customer ID** and **Item**, and an order-number class using a spoken auto-number substitution keyword.
- Create an **Orders** data source/form with the New Data Maintenance wizard and inspect the narrated default-number and domain-list behavior.

## Dependencies carried forward from Parts 1–3

| Tutorial dependency | Origin / narrated state | Qualification for agents |
| --- | --- | --- |
| `Hello World` IDO project | Part 1 | Demo-only; do not create/change this unprefixed project in the factory |
| `Customer` IDO/table/form | Part 1; ID and Name from tutorial | Not confirmed in active tenant; Part 4 domain references this data source |
| `UMs` IDO/table/form | Part 2; UM code and Description | Narrator's table/IDO spelling is sometimes inconsistent in ASR |
| `Items` IDO/table/form | Part 2; Item, Description, Cost, UM | Not a factory-approved target; Part 4 modifies both schema and form |
| `Item Base` property class | Part 2; String length 20, SQL character type | Used as base for Part 4 `Item` class |
| `UM` property class/domain | Part 2; domain to UM values | Later drives combo box and property-class extension |
| Items form button | Part 3; previously assigned custom `Test` event | Part 4 narrates repositioning and repurposing a button; exact button identity must be observed |
| Extra edit component | Part 3 introduced an Edit bound to a form variable | Part 4 says delete “our edit component” but does not identify it precisely |
| Image assets folder | Mentioned in Part 4 as previously downloaded | Not supplied; images and exact paths are unknown |
| Designer scope | Tutorial selects **Site Default** | Factory form editing was scoped to **User**; do not switch scope as an unstated prerequisite |

## Conceptual object relationships — tutorial model only

```text
EXISTING ITEM IMAGE
  Items SQL table
    └── Picture  [varbinary, length=-1, nullable]
           ↓ bound column
  Items IDO
    └── Picture  [Bound property; Picture property class]
           ↓ property binding
  Items form
    ├── Static Picture  [Static component; Bound to Picture]
    └── Import button  [Primary Event: Import Picture]
           ↓
       Event handler [Binary Value Action: Import → Static Picture]
           ↓
       user chooses file → row modified → Save writes binary value

UNIT OF MEASURE JOIN
  Items table [UM] ── join: UM = UM ──► UMs table [UM, Description]
       ↓ IDO joined-table reference
  Items IDO [joined UMs.Description property]
       ↓
  Items form [Edit + grid column bound to joined description]

INHERITANCE / DRILL-DOWN
  UM property class → Property-class extension [Details/Add/Find menu]
       ↓ inherited by
  UM-bound combo box
       ↑ component-level Right-Click Menu can override extension

ORDERS FACILITY
  Customer ID class ────────► Orders.Customer ID [domain: Customer]
  Item class (from Item Base) ► Orders.Item [domain: Items]
  Order Num Base class ─────► Orders.Order Number [AUTO NUMBER syntax narrated]
  Long Integer/default=1 ──► Orders.Count
       ↓ New Data Maintenance wizard
  Orders SQL table + Orders IDO + Orders form
```

This is an editorial dependency map of the **narrated** procedure, not a verified data dictionary, database diagram, or assurance that the named entities currently exist.

## Demonstrated workflow (historical tutorial; **not** an autonomous execution script)

### 1. Extend Items SQL table with Picture — 00:18–01:32

**Demonstration:**

1. In runtime, open the **SQL Tables** core form; narrator says to accept an `OK` prompt (prompt text not supplied).
2. Filter **Table Name** to **Items**, then press **F4**.
3. Choose **Columns**, then **New**.
4. Create a column called **Picture**, with **Data Type = Var Binary**, **Is Nullable = checked**, and **Length = -1**.
5. **Save** the record and close the relevant forms.

**Expected narrated result:** the existing Items table has a nullable binary column intended for image bytes. The narrator says length `-1` means **unlimited**; treat that as the tutorial's terminology, not a measured storage capacity or independently checked DDL.

**Boundary:** Changes to SQL table definitions are **schema mutations**. Do not alter real `Items` or any table without explicit schema authorization, a disposable target, and an approved rollback/evidence plan. A form User scope does not automatically authorize database schema changes.

### 2. Define a reusable Picture property class — 01:32–02:13

**Demonstration:**

1. Open the **IDO Property Classes** core form (speech-to-text says `ideoproperty classes`).
2. Exit Filter-in-Place and create a class named **Picture**.
3. Set **Data Type = Binary**, **Length = -1**, **Column Data Type = Var Binary**.
4. Set **Binary Format = PNG**.
5. **Save**, close the form, and choose **Form → Definition → Unload [All] Global Form Objects** as narrated.

**Expected narrated result:** a reusable property class describes the binary field metadata. The transcript varies the command wording, so agents must rely on the exact currently visible menu label rather than invent it.

**Boundary:** Class creation and explicit unload are distinct, potentially broad metadata operations; neither is implicitly approved for an FX_ User-scope experiment.

### 3. Publish Picture as a bound Items IDO property — 02:13–03:00

**Demonstration:**

1. Open **IDO Collections**, filter to **Items** with **F4**.
2. Choose **New Property** and keep the wizard's default **Bound** property type.
3. In **Bind To**, choose the new **Picture** table column.
4. Accept the default property name **Picture**.
5. Select the **Picture** property class.
6. Verify the wizard displays inherited data and SQL column types; click **Finish**.
7. Close the form and unload global form objects as the tutorial directs.

**Expected narrated result:** `Items.Picture` IDO property is bound to the table column and inherits metadata from the Picture class. This is narrated, not a confirmed metadata dump.

### 4. Add image display + import event to Items form — 03:00–05:13

**Demonstration:**

1. Launch Designer from runtime; the instructor selects **Site Default** (not an approved factory scope).
2. Open **Items**. The narrator says to **delete “our edit component”**, then reposition an existing button to the right. **The exact edit component is not identified; do not delete any component by inference.**
3. Set the button **Caption** to a label-string identifier pronounced `s import` and create its string value using the **Caption ellipsis**.
4. Drag a **Static** component to the right of the input fields to display the image.
5. Set **Data Source → Binding Type = Property** and bind to **Picture**.
6. For the Static component, set **Miscellaneous → Specific Attributes → No Colon = True**.
7. Rename it to the narrated **Static Picture**, following the instructor's general component-type prefix convention.
8. **Save**.
9. In **Details → Event Handlers**, add a custom event named **Import Picture**.
10. Set handler **Response Type = Binary Value Action**.
11. In **Parameters**, choose **Action Type = Import** and specify **Static Picture** as the component holding the bound binary value.
12. Select the button; in **Events**, set **Primary Event = Import Picture**.
13. **Save** the form.

**Expected narrated behavior:** clicking the button launches a file-selection dialog, then imports bytes into the binary-bound component/property. The literal metadata identifier of `Static Picture`/`Import Picture`, the ellipsis parameter choices and the deletion target need fresh UI confirmation.

**Boundary:** This step builds on a button created for **Part 3**, but changing its event could change or erase its previous demonstration behavior. Reuse is a *tutorial sequence*, **not** a factory directive to change any existing non-FX_ button.

### 5. Test imports and save Item images — 05:13–05:51

**Demonstration:**

1. Return to runtime and reopen **Items**.
2. Click the **Import** button; narrator expects a local file chooser.
3. Select the tutorial's **Bike** image from a downloaded **Hello World assets** folder.
4. Observe the **orange diamond** narrator describes as the modified-row marker.
5. Use the runtime **Save** to persist the imported binary value.
6. Repeat for the other **three** item entries using tutorial-provided images, then save.

**Expected narrated result:** each item receives an image and the binary data persists in the table after Save. **No images, file paths, actual database bytes, or runtime screenshots were supplied.** Part 2's source explicitly names only three Item rows but says four exist; Part 4 again assumes four. Do not manufacture the missing record or assets.

**Boundary:** The file chooser may involve local filesystem state, and saving runtime records is database mutation; these require explicit experiment authorization and test data.

### 6. Build a Theme and reusable Blue Button class — 05:51–07:29

**Demonstration:**

1. Return to Designer and choose **Edit Themes**.
2. Create a theme named **Hello World**; open **Edit** for that theme.
3. In the **Form Component** tree, select **Button**.
4. Type **Blue Button** into **Class Name** and press **Add**. The tree refreshes.
5. Re-select **Button → Blue Button**, then the **Normal** state category.
6. Set **Background Color** to the narrated literal **`#FF5CC6C7`**.
7. For **Foreground Color**, open the ellipsis/picker, choose **Solid** and leave the default **White**.
8. Confirm and **Save** the theme.
9. Close Designer, return to runtime, open **View → User Preferences → Layout**, and select the **Hello World** theme; confirm with **OK**.
10. Reopen Designer; select the Import button, expand **Appearance**, and choose **Blue Button** as its theme class.
11. Observe the styling and **Save**.

**Expected narrated result:** the button uses the reusable theme class; the presenter says this styling will also be used later in the store portal.

**Source precision:** The spoken background entry includes **eight hexadecimal digits after `#`**, not the usual six-digit example; do not reinterpret channel order or replace it with an inferred RGB color. Actual Theme/Theme Class identifiers, renderer output, and preference application are unverified.

**Boundary:** Both **theme metadata** and **User Preferences** can have cross-form effects. Switching/closing/reopening Designer is a lifecycle boundary. Do not modify them simply to set up a different test.

### 7. Join Items to the Units of Measure table — 07:29–09:18

**Demonstration:**

1. In runtime, open **IDO Collections** and filter **IDO Name = Items** using **F4**.
2. Open the **Tables** subform and select **New Table**.
3. Choose the **UMs** table; enter alias **UMs**.
4. Add join condition **UMs.UM = Items.UM** (editorial expression of the spoken relationship: “um equals items um”).
5. Confirm the join with **Add** and **OK**, then close the tables subform.
6. In **New Property**, use **Bound** and choose the **Description** column from the joined UMs table, which appears alongside base-table columns.
7. Prefix the new IDO property name with the **UMs** alias, as recommended by the speaker, to distinguish joined properties.
8. **Finish**, close the forms, and unload global form objects.

**Expected narrated result:** Items IDO can expose description data from the referenced UM row. The narrator says the request/response flow is still IDO-runtime mediated; the IDO runtime now generates a join in its SQL (10:41–11:04).

**Source precision:** The name is rendered conceptually as **`UMsDescription`** in this reference. Its **exact saved spelling/case is not supplied in the transcript**. The actual direction and cardinality of the SQL join, null semantics, and generated SQL are not shown.

### 8. Display joined description on Items form and grid — 09:18–11:04

**Demonstration:**

1. In Designer, close **Items**, explicitly unload global form objects, then reopen the form, per the narration.
2. Add **Static** beneath the Unit of Measure field, named **Static Description**; Caption is a label-string reference pronounced `s description`.
3. Add **Edit** next to it, named **Edit Description**.
4. For the edit: **Data Source → Binding Type = Property**, then bind to the newly joined UMs Description IDO property.
5. Select the form's **Grid**; choose **Edit Grid Columns**.
6. Select the last column, click **Add**, and name the new column the narrator describes as **UM Description Grid Col**.
7. Set the grid column **Data Source → Binding Type = Property**, binding it to the same joined UMs Description property.
8. **Save** the form, return to runtime, and reopen Items.
9. Navigate different Item records; narrator observes that Description changes with the selected record.
10. Change an Item's Unit of Measure; narrator says the joined description **does not update until Save**. Validators/component classes are mentioned as a possible future topic, **not implemented here**.

**Expected narrated result:** the form and grid display a related UM description. **This is not evidence of instantaneous refresh or live validation on UM changes.**

**Boundary:** Explicit unload and multiple component creations are separate operations. An agent must not automatically bundle them into one experiment, nor treat an unloaded, reopened form as permission to resume after an unexpected session interruption.

### 9. Configure UM property-class extension and drill-down right-click menu — 11:04–13:12

**Demonstration:**

1. Select the **UM combo box** in Designer.
2. In **Inheritance**, open **Edit Property Class Extensions** using the ellipsis.
3. The instructor accepts a prompt asking to create the extension.
4. Under **Behavior → Add Details and Find Form**, select the existing **UMs** form for both **Add Details Form** and **Find Form**.
5. Select/type **UM** as the associated Property.
6. Set **Right-Click Menu** to the standard **Details / Add / Find** menu.
7. Confirm and **Save**; return to runtime and right-click the UM combo box.
8. **Negative narrated observation:** the intended context menu does **not** appear.
9. Return to Designer; select the same combo box and examine **Behavior**.
10. Observe a **standard default Right-Click Menu defined directly at the component level**.
11. Clear that component-level menu property and **Save**.
12. Reopen in runtime and right-click: narrator says the property-class-extension menu now appears.

**Inheritance lesson:** a lower-level/specific component setting can override a class-extension setting. The tutorial's absence-then-presence result is especially important: **merely configuring an extension is insufficient to prove it is effective when component overrides exist.**

**Boundary:** Clearing an inherited or explicit context-menu setting can change behavior. Do not remove a current component property unless the experiment explicitly approves this operation on an identified `FX_` component, and capture both previous values and negative/positive behavior.

### 10. Create property classes for Orders — 13:12–14:56

The instructor creates three classes using **IDO Property Classes**, then closes and unloads global form objects.

| Narrated class | Metadata set in tutorial | Uses / qualifications |
| --- | --- | --- |
| **Customer ID** | Data Type **String**; Length **50**; Label String ID pronounced `s id`; Domain IDO **Customer**; Domain Property **ID**; Additional List Property **Name** | SQL Column Data Type is missing at first; the wizard supplies it later. Exact string ID spelling and domain object's final stored name are not visually confirmed. |
| **Item** | Base Class **Item Base**; Domain IDO **Items**; Domain Property **Item**; Additional List Property **Description** | Inherits base-class metadata; Part 4 later overrides property Length to **50** on Orders. |
| **Order Num Base** | Data Type **Long Integer**; Default Value narrated as **AUTO NUMBER open-parentheses close-parentheses**; Column Data Type **Int**; Label String ID pronounced `s order number`; Justify **Right** | A plausible transcription is `AUTONUMBER()`, **but exact entered syntax is not verified by the supplied text**. |

**Narrated purpose:** domain lists supply available Customers/Items and built-in selection behavior; the order number expression is said to calculate the next value considering database records and unsaved collection data. The transcript offers **no concurrency test, SQL/locking behavior, uniqueness guarantee, or persisted implementation detail**.

### 11. Generate Orders table, IDO, and form — 14:56–16:34

**Demonstration:**

1. In Designer, explicitly unload global form objects (the presenter has also just unloaded in runtime).
2. Select **New Form Definition → Category: New Data → Wizard: Maintenance**.
3. Set **IDO Name = Orders**, **IDO Project = Hello World**, **Table Alias = Ords**.
4. Enter the properties below, then **Next → Finish** to generate table and IDO.
5. Choose **Yes** when prompted to create a form.
6. In **New Form Wizard**, accept default screens and selected properties.
7. Rearrange the fields as **Order Number**, **Customer ID**, **Item**, **Count**.
8. For Item, narrator notices its caption is undefined and sets a label reference pronounced `s item`.
9. **Next → Finish** to generate Orders form.

**Orders property specification as spoken:**

| Property | Property class | Additional settings / narrated caveats |
| --- | --- | --- |
| **Order Number** | **Order Num Base** | **Primary Key = checked**, **Required = checked**; inherits type/default/label from the class |
| **Customer ID** | **Customer ID** | **Required = checked**; explicitly set SQL Column Data Type to a value transcribed “end varchar,” possibly **NVARCHAR**, but **not verified** |
| **Item** | **Item** | Override inherited Length to **50**, **Required = checked** |
| **Count** | *(none narrated)* | Data Type **Long Integer**; Label String ID pronounced `s count`; Default Value **1** |

**Expected narrated result:** the wizard creates an Orders SQL table, Orders IDO, and Orders form with the specified fields. The transcript does **not** spell out final SQL constraints, table schema, component names, index structure, or post-creation identity/scope evidence. Do not infer a fully functioning commercial checkout process from this tutorial form.

### 12. Inspect and populate Orders at runtime — 16:34–17:04

**Demonstration:**

1. Switch to runtime and open **Orders**.
2. The narrator says the form opens in **Add** mode and **Order Number = 1** initially.
3. The **Customer ID** and **Item** fields each display a list source inherited from their domain-backed classes.
4. Add **a couple of order records**. The narrator reports the order number increasing by 1 each time.
5. **Save**.

**Expected narrated result:** the demonstration shows default-number generation and dropdown lookup behavior for the sample dataset. It does **not** establish that numbers are unique across parallel sessions, that the default is always 1, or that a persisted identity generator has been independently verified.

### 13. Recap / transition to Part 5 — 17:04–17:19

Part 4 ends after creating a basic Orders facility. The Part 5 **preview only** mentions more property-class extensions/drill-downs, validators, derived properties, and form script. **Do not import those as Part 4 completed procedures.**

## Reference data — compact agent lookup

### Database / IDO entities touched in the video

| Layer | Name (narrated) | Change or connection |
| --- | --- | --- |
| SQL table | Items | Add `Picture` / varbinary / length -1 / nullable |
| Property class | Picture | Binary, -1, varbinary, PNG |
| IDO | Items | Add bound Picture; add UM joined table; add bound UMs description |
| Form | Items | Add binary Static, import button event, joined Description edit and grid column, UM context-menu behavior |
| Theme | Hello World | Add Button / Blue Button class with Normal background and foreground |
| Property-class extension | UM-bound component's class extension | UMs Add Details / Find forms; standard Details/Add/Find right-click menu |
| Property classes | Customer ID, Item, Order Num Base | Domain lookups; auto-number default |
| SQL table + IDO + form | Orders / alias `Ords` | Order Number, Customer ID, Item, Count |

### Event and visual styling values

| Setting | Transcript value | Certainty / note |
| --- | --- | --- |
| Event | `Import Picture` (spoken) | Exact stored identifier unverified |
| Handler response | `Binary Value Action` | Narrated UI label |
| Handler action | `Import` | File selection expected |
| Handler component | `Static Picture` | Bound to `Items.Picture`; exact stored name unverified |
| Button Primary Event | `Import Picture` | Replaces prior button behavior in tutorial |
| Static component `No Colon` | `True` | Narrated Miscellaneous / Specific Attributes option |
| Theme / class | `Hello World` / Button / `Blue Button` | Tutorial-wide theme; not factory-scoped |
| Theme state | `Normal` | Narrated category |
| Background color | `#FF5CC6C7` | Preserve **exact narrated token**; encoding not validated |
| Foreground | Solid White | Via color-picker dialog |
| UM context menu | Standard Details / Add / Find | Hidden by component-level override until it is cleared |

### Property class and Orders schema quick reference

| Class / field | Data / SQL type | Length / precision | Default | Other |
| --- | --- | --- | --- | --- |
| Picture class | Binary / Var Binary | -1 | — | PNG format |
| Customer ID class | String / unspecified in class | 50 | — | Domain Customer.ID; list Name |
| Item class | Inherit Item Base | Base 20; Orders override 50 | — | Domain Items.Item; list Description |
| Order Num Base class | Long Integer / Int | not stated | Spoken `AUTO NUMBER()` | Justify Right |
| Orders.Order Number | Inherited | not stated | Inherited expression | PK, Required |
| Orders.Customer ID | Inherited String / SQL type transcribed “end varchar” | 50 from class | — | Required |
| Orders.Item | Inherited Item Base | 50 override | — | Required |
| Orders.Count | Long Integer | not stated | 1 | Label string `s count` spoken |

## Small, safe learning hypotheses (not approved or completed experiments)

| Concept worth investigating | Possible isolated check **only with separate approval** | Decisive observations |
| --- | --- | --- |
| Binary class / IDO metadata inheritance | Read-only inspect approved FX_ metadata first; do not create schema to make the example work | Exact object identities and inherited attributes in UI |
| Import event can populate a binary-bound component | On a permitted disposable FX_ form and test-only data **after** storage/handler authorization | Before/after binding, actual file selector, dirty-row marker, saved value, permitted lifecycle checks |
| Theme class styling flows into form controls | First perform read-only inspection; any theme/preferences mutations need separate explicit approval | Theme identity, class, state, component selection, before/after and restore behavior |
| IDO joined property displays reference data | Read-only inspect a safe existing joined property or approve an isolated FX_ IDO experiment | Exact join definition, property binding, display value and update timing |
| Component-level right-click menu overrides inherited extension | Independently inspect exact current values; only mutate a named FX_ component if permitted | Negative case with override present; positive case with override absent, after verified Save/reopen |
| Order-number expression populates an initial value | Inspect syntax and available documentation in an approved disposable setup | Literal expression, uniqueness assumptions clearly bounded, saved values; avoid parallel-order claims |

**Do not use this table as a task queue or a collection of steps to combine.** Any blocked factory topic stays blocked until an explicitly approved, separately documented method resolves its prerequisites.

## Agent validation / evidence checklist (for independently authorized work only)

- [ ] Read the active `AGENTS.md` and approved brief; enumerate precisely which form, component, database, IDO, property-class, theme, or preference edits are allowed.
- [ ] Identify the current tenant, environment, session and exact form **Name + ScopeType + ScopeName**; preserve approved **User** scope.
- [ ] Confirm all created/modified artifacts satisfy the `FX_` policy. Do not touch tutorial's unprefixed `Items`, `Orders`, `UMs`, `Customer`, global classes or theme on the assumption that the tutorial authorizes them.
- [ ] Treat SQL schema, global metadata, user preferences and runtime record Saves as separate high-impact actions requiring explicit approval.
- [ ] Capture before-and-after UI screenshots/snapshots with actual property-grid labels; do not rely on normalized transcript spellings as stored identifiers.
- [ ] For a binary import, distinguish click/open dialog, file chosen, dirty marker, runtime Save, reopened record data and persisted binary representation; a dirty marker alone is not proof of database Save.
- [ ] For a theme, record the current theme preference before any approved change, and the observed effect on the exact component; do not infer color-channel interpretation from the source token.
- [ ] For a join, record base table, joined table, alias, join columns, property binding and actual update timing; do not infer live recalculation when the video says it updates after Save.
- [ ] For property-class extensions, record the negative test (menu absent) and the observed component-level override **before** deciding whether the class extension itself is defective.
- [ ] For orders, distinguish default expression evaluation, list population, new record creation, Save, and subsequent re-open; do not claim concurrency-safe numbering or server-side validation without evidence.
- [ ] For each independently approved mutation, use the lifecycle required by its own brief: one small operation → verify → Save → ordinary close/reopen (where authorized) → verify persistence → record evidence.
- [ ] Never silently switch to Site Default, authenticate, unload objects, reload, launch a replacement Designer, recreate state, delete a component or patch SQL as unapproved recovery.
- [ ] If the UI differs from the transcript, an artifact is missing, or session state is not safely accessible, record an honest blocker. Use statuses such as **observed**, **replay_verified**, or **blocked** only when supported by that experiment's evidence.

## Source limitations and transcription notes

- The user supplied **only timestamped text**, not the actual video, screenshots, downloaded image assets, SQL tables, IDO metadata or visible UI control values. All workflows above are **narrated steps**.
- The ASR transcript alternates between `ideo`, `IDO`, `ums`, and other spoken spellings. Editorial sections normalize likely concepts for readability, but the complete raw text below is preserved.
- The `SQL Tables` prompt accepted with `OK` at 00:55 is not described. Its significance cannot be inferred.
- The exact identity of the **Edit** component deleted at 03:13 is not supplied. No agent should select a deletion target from context alone.
- The template assumes an existing button from Part 3, but does not give a unique component identifier or exact caption string syntax.
- Literal metadata strings pronounced `s import`, `s description`, `s id`, `s item`, `s count`, and `s order number` might be names with or without capitalization/word breaks. **Do not invent exact saved IDs.**
- The phrase “length -1 means unlimited” is speaker-provided terminology; the transcript does not show generated SQL, storage limits or validation of permitted data size.
- The color token is narrated as **`#FF5CC6C7`**. It has 8 hexadecimal digits; actual editor color semantics are not observed.
- The Items-to-UMs join is narrated but lacks emitted SQL and a full property-definition screenshot. The conceptual joined field `UMsDescription` is **not a verified literal saved name**.
- The form edit displaying joined description is said **not to update until Save** after a UM change. The tutorial does not implement immediate-update validators in this part.
- The property-class extension menu is **initially absent** despite having been configured; the narrator resolves it by removing a *component-level* override. This negative observation must not be omitted from conclusions.
- The order-number default is spoken as “AUTO NUMBER open parentheses close parentheses”; `AUTONUMBER()` is a plausible compact notation, **not validated source text**. No concurrent-save guarantees are provided.
- The Customer ID column data type is transcribed “end varchar” at 15:35. Although it sounds like `NVARCHAR`, no on-screen value is supplied; treat the SQL type as **unconfirmed**.
- Part 2 explicitly names **three** Item records but says **four** were created. Part 4 assumes a bike image plus three additional items. The missing identity and the images are not provided.
- No current Mongoose 2026.x instance, repository, Designer session, or experiment evidence was accessed or changed to produce this educational Markdown.

## Full supplied transcript (unaltered wording, timestamps retained)

The following appendix contains the complete Part 4 transcript exactly as supplied, with line endings normalized only. Apparent transcription errors or unclear utterances remain untouched.

```text
[0:00] hi there this is caitlin porter from the mongoose enablement team welcome to part four of the
[0:04] mongoose hello world training series in today's video we are going to extend our application
[0:09] further by building onto our existing items table we will get started on working with themes
[0:14] and theme classes and we'll create our orders facility that will allow users to place orders
[0:18] in our store portal in this first part we want to allow the users to add an image of their item
[0:23] on the items form to do so we will first have to manually add a column to our items table
[0:29] then we will need to add it as a property onto our ido and finish up by adding it to our items
[0:34] form we will also utilize the event system so users can import an image from a button
[0:41] up to this point we have used the new data maintenance wizard to create our tables forms
[0:45] and ideos but in real development you will often work from existing objects mongoose has
[0:50] several core forms that allow you to manually add columns and properties to existing objects
[0:55] let's start by opening the sql tables core form and select ok when you receive
[1:00] this prompt let's filter to our items table type in items in the table name and hit f4
[1:09] once you filter to your table hit the columns button to view the columns on the table
[1:14] hit the new icon from the toolbar to add a new column
[1:17] let's name this field picture give it a data type of var binary and check the is nullable checkbox
[1:26] let's give this a length of negative 1 which in mongoose means unlimited
[1:32] go ahead and save your record and close the forms next we want to create a picture property class
[1:38] that can be used throughout our application let's do so by opening the ideoproperty classes form
[1:44] exit filter in place mode and let's add the following property class name the class
[1:50] picture give it a data type of binary a length of negative 1 a column data type of var binary
[2:00] and under the binary format field select png save and close the form and let's unload the
[2:08] global form objects by going to form definition unload global form objects
[2:13] next we want to add this as a property to our ido go to form open and search
[2:18] for idos to open our ideo collections form type in items for the ideo name and hit f4 to filter
[2:27] hit the new property button at the top to add a new property there are several different types
[2:31] of properties that you can use in this case we're going to use the default which is bound and hit
[2:36] next in the bind to list select our picture column the property name will default to picture
[2:43] and let's select our picture property class that we just created you can see that the data type
[2:48] and column data type are now being inherited from the property class hit finish to create
[2:53] our property let's close the form and unload the global form objects from form definition
[3:00] now let's add a button to our items form that will allow the user to import an image
[3:06] click the design mode toolbar icon to open the designer select site default for our editing scope
[3:13] let's open our items form let's remove our edit component since we no longer need it
[3:19] click on the component and hit the delete key next i'm going to reposition my button to the
[3:24] right of the screen click on the component and drag it to the right let's give our button a
[3:28] caption select the component and type in s import in the caption field on the properties panel hit
[3:36] the ellipsis to create the string value let's grab a static component that will display our picture
[3:42] in the toolbox on the left select the static component and draw it on the form to the right
[3:47] of your fields let's bind this to our picture property expand the data source section and select
[3:55] property for the binding type and select our picture property for the by need field
[4:02] by default all static components include a colon at the end to remove this colon scroll
[4:06] down to the miscellaneous section under specific attributes set no colon to true
[4:13] scroll to the top of the properties panel and let's rename our component to static picture
[4:18] we consider it a best practice to always name your components and prefix them with component type
[4:23] save the form and let's create an event that will import an image into the picture property
[4:28] expand the details pane at the bottom and select the event handlers tab
[4:33] hit the new icon at the bottom to create a new event let's name this event import picture
[4:39] hit ok and scroll down to response type and let's select binary value
[4:44] action click the ellipsis on the parameters field and let's set the action type to import now
[4:51] select the static picture for our component that's bound to the binary value property
[4:57] hit ok and let's change the primary event on our button to use our custom event
[5:02] select our button component and expand the events section on the properties panel
[5:08] set the primary event to import picture save the form and now we're ready to test this out in
[5:13] runtime mode switch back to the runtime mode tab and reopen your form now we are ready to import an
[5:19] image onto our item select the import button you should see a dialog asking you to select the file
[5:25] select the bike image that's located in the hello world assets folder that you downloaded
[5:29] from the portal you can tell this row is modified by this orange diamond on the left
[5:35] at this point pressing save will save the binary value back into the database
[5:39] continue on adding images for the other three remaining items all of these images are located
[5:45] in the hello world assets folder when you're done importing the images remember to save in this next
[5:51] part let's create a theme and theme classes that can style our button and use them throughout our
[5:56] application switch back to the design mode tab and let's edit the themes by going to edit themes
[6:03] hit the new button at the bottom to create a new theme let's name it hello world then select the
[6:09] edit button on the top right to edit that theme select button on the left under form component
[6:16] then on the bottom where it says class name type in blue button and hit add this will add
[6:21] a theme class to the button after you hit add the tree will refresh re-select your button
[6:27] and then select your blue button class select normal state under categories
[6:32] let's give our button a background color of pound ff5cc6c7 and then our foreground color use the
[6:41] ellipsis this will open the color picker let's select solid and let's leave the default as white
[6:47] hit okay this will set the text color to white and the background color blue hit ok and save
[6:53] your changes we now need to apply our theme to the application close the designer and go back
[6:59] to runtime mode go to view user preferences and go to the layout tab on the left select
[7:06] our hello world theme hit ok now let's reopen the designer hit the designer icon from the toolbar
[7:14] then select our button component and expand the appearance section under the properties panel
[7:19] select our blue button theme class then you should be able to see your button being styled with the
[7:24] theme class that we created we will use this theme class going forward when we build our store portal
[7:29] for now save your changes okay let's move on to another ideo capability mongoose allows us
[7:35] to join and utilize data from multiple tables our items facility has a reference to units of measure
[7:41] but in cases like this you'll often want to display other fields from that reference
[7:45] in this particular case in addition to the two character unit of measure code we'd also like to
[7:50] show the unit a measure description on our items form to do this we want to create a join from our
[7:55] items table to our unit of measure table switch back to the runtime mode tab and let's open our
[8:00] ido collections form type in items for our ido name and hit f4 to filter then select the tables
[8:07] button at the bottom and then select the new table button at the top to add a new table reference
[8:13] for our table name select our um's table give it a table alias of ums and below we can select
[8:20] the columns for the join select um equals items um and then hit the add button to add it below
[8:32] click ok to create the join and then close the ideo tables form
[8:37] now we want to create a new property on our items ideo that will publish access to the description
[8:41] column join from the um's table click the new property button leave the default of bounds
[8:47] selected and hit next drop the list of columns we can bind to and now notice that we not only
[8:53] see columns on the primary base table which is the items table but now we also see the columns
[8:57] from the ums table select the um's description column and let's prefix our property name with ums
[9:05] we consider a best practice to use the table alias as a prefix for properties that are bound
[9:09] to join tables click finish let's now close the forms and unload all the global form objects
[9:18] now let's add our new property to our items form switch back to the design mode tab and
[9:23] close your items form and then unload all the global form objects reopen the form
[9:29] grab a static component from the toolbox and draw it on your form just under the
[9:33] unit of measure field rename the component to static description give it a caption of s
[9:40] description then grab an edit component from our toolbox and draw it to the right of our static
[9:46] rename the component to edit description and then expand the data source section set the binding
[9:52] type to property and let's bind it to our new um's description field we also want to add our
[9:58] property to the grid select the grid component and hit the edit grid columns button in the top left
[10:05] select the last column and then hit the add button to add it at the end rename this grid column
[10:10] um description grid call expand the data source section and set the binding type to property and
[10:17] let's select our um's description for the binding hit ok and save your form switch back to the
[10:24] runtime mode tab and reopen your items form now if we switch through records you'll notice that the
[10:30] description updates with each item if you change the unit measure the description isn't updated
[10:36] until you save it we could use mongoose validators and component classes to change its functionality
[10:41] but for now we're just going to move on let's look at what just happened with our new table join
[10:46] [ __ ] sent a load collection request in the form of an xml to the ido runtime service the ido
[10:52] runtime service processed that xml and converted it to a sql statement that included a table join
[10:59] the results were then sent back to mongoose which returned the description for the unit of measure
[11:04] field to provide drill down from the items to unit measure table we'll use a property class
[11:09] extension remember that property class extensions are another level of the inheritance model
[11:14] suppose i want my user to be able to right click on the unit of measure field and be able to
[11:18] drill into it to do so we'll use our property class extension to set the right-click menu
[11:24] switch back to the design mode tab and select our unit of measure combo box
[11:29] scroll down to inheritance in the properties panel and expand it click on the ellipsis for the edit
[11:34] property class extensions field it will prompt you asking if you want to create the property class
[11:40] extension say yes expand the behavior section and under the add details and find form section
[11:46] we can specify the form for the user to drill into select our um's form for both the add
[11:51] details form as well as the find form then select or type in um as our property then scroll down to
[11:58] the right-click menu field and select the standard details add find menu click ok and save your form
[12:05] then reopen the form in runtime mode now when we right-click on our unit of measure field
[12:11] we should see our custom right-click menu however we don't why is this because our right-click menu
[12:17] is here on the property class extension level it's possible that it's being overwritten either
[12:22] on the component class level or on the component level since we haven't created a component class
[12:26] it's a safe bet that it's being overridden here on the component level so let's check that out
[12:32] go back to the design mode tab and reselect our um combobox component expand the behavior section
[12:39] and as you can see there's a standard default right-click menu defined on the component level
[12:43] let's clear this right-click menu and save it let's reopen our form to test it
[12:49] now that there isn't anything assigned on the component level our property class
[12:52] extension should dictate our right-click menu right-click on the um combo box and now we see
[12:57] our right-click menu that we assigned on the property class extension mongoose now has the
[13:02] metadata for providing things like drill down when the user selects details for example this
[13:06] functionality will automatically be applied to any components that are bound to the um property class
[13:12] close the items form and let's switch gears we haven't built anything to allow
[13:16] our customers to actually place an order in our store so let's finish up by building an
[13:21] orders facility before that let's create some property classes that we can use for it open
[13:25] the ido property classes form hit the filter and place icon to exit filter in place mode then hit
[13:32] new from the toolbar let's name this first class customer id let's give it a data type of string
[13:38] a length of 50 a label string id of sid and for the domain ido let's provide the customer table
[13:45] for domain property select id and additional list properties select name let's add another class
[13:54] and let's name this one item let's use a base class on this one so we can inherit attributes
[14:00] select our item base property class for the domain ido select items for the domain property select
[14:08] item and for additional list properties select description let's add one more class hit new from
[14:14] the toolbar and name this one order num base give it a data type of long integer and in the default
[14:22] value field type in all caps auto number open parentheses close parentheses autonumber is a
[14:28] win studio substitution keyword which it resolves by querying the next order number from the table
[14:34] as well as any other data in the collection that hasn't yet been saved to the database set the
[14:38] column data type to int and give it a label string id of s order number and set justify to write
[14:45] save and close your form make sure to unload the global form objects from form definition
[14:51] switch back to the design mode tab and make sure you unload the global form objects there as well
[14:56] next let's use the new data maintenance wizard to create our new orders facility select the new
[15:00] form definition icon from the toolbar and select new data for the category and maintenance for the
[15:06] wizard name our ido orders and let's use our hello world project give it a table alias of ords let's
[15:14] add properties below the first one being order number let's use our order num base property class
[15:20] for this property this will automatically inherit the data attributes that we need
[15:24] go ahead and check the primary key and required fields hit the add row button to
[15:29] add another property let's name this one customer id and let's use our customer id property class
[15:35] since this property class is missing a sql data type set it to end varchar and then check the
[15:40] required field add another row and let's name this one item let's use our item property class
[15:48] let's override the length here and set it to 50 instead let's also set this field to be required
[15:54] let's add one more row and let's name this one count set the data type to long integer give it
[16:00] a label string id of s count and let's set the default value to 1. hit next and then finish to
[16:06] create your table and ido select yes to create our orders form this will launch the new form wizard
[16:11] let's accept the defaults and hit next let's leave the selected properties as is and hit next use the
[16:18] buttons on the right to rearrange the properties on your form i'm going to set it to order number
[16:22] customer id item and then count i also notice that my caption is not defined for my item
[16:28] go ahead and set the caption for item as s item hit next and then finish to create your form let's
[16:34] switch back to the runtime mode tab and let's open our form there our form will automatically
[16:39] open in add mode notice that our order number is defaulting to 1. this is because it's using
[16:44] the autonumber keyword which will automatically increment the value by 1. notice that the id and
[16:49] item fields both have their associated list source attached to them this is because we use the domain
[16:54] ido information in the property classes that we created go ahead and add a couple records onto
[16:59] your orders table notice that the order number increments by one each time when you're finished
[17:04] hit save well that wraps up part 4. in part 5 we will build onto our orders facility by adding
[17:10] more property class extensions to support drill downs we will also start building in validations
[17:15] creating derived properties and we'll even add in some form script to our form for more
[17:19] tutorials and documentation check out the mongoose portal at mongoose.infor.com thanks for watching
```
