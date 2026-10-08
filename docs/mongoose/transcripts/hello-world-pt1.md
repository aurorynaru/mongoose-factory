# Infor Mongoose — Hello World Training — Part 1 of 8

> **Document type:** Agent reference / training extraction with a complete source transcript  
> **Video:** [Infor Mongoose — Hello World, Part 1](https://www.youtube.com/watch?v=oHZ493u-snM)  
> **Speaker (per supplied transcript):** Caitlin Porter, Mongoose Enablement Team  
> **Source:** Operator-provided timestamped transcript; transcription not independently verified against video  
> **Coverage:** 00:00–10:16 (last provided timestamp)  
> **Version applicability:** Video version/date not established; do **not** assume its UI matches Mongoose 2026.x exactly  
> **Series:** Part 1 only. Other seven parts are not included or inferred.

## How an agent should use this file

1. Use the **Concepts**, **Demonstrated workflow**, and **Reference data** sections for learning, task planning, and identifying UI elements.
2. Use the **Full supplied transcript** at the end as the evidence source when a step, spelling, or timestamp is in doubt. Timestamps indicate where narration starts, not necessarily when a click actually occurred.
3. **This document is not authorization to perform changes.** The training video demonstrates privileged and persistent actions. Before acting, follow the project's actual `AGENTS.md`, operator approvals, current experiment brief, and environment-specific rules.
4. **For the current autonomous Mongoose factory:** preserve its `FX_`-only mutation rule and approved **User** edit scope. The video uses **Site Default**, changes editing/security settings, and creates non-`FX_` objects; those demo actions are **not authorized merely because they are described here**.
5. Treat every procedural instruction below as **shown/described in the video**, not as independently replay-verified for the current tenant. An agent may use it as a hypothesis for a separately approved controlled experiment, never as proof that a change will persist.

## Part 1 learning goals

- Recognize Mongoose as Infor's metadata-driven application framework.
- Understand how Forms, Intelligent Data Objects (**IDOs**), and relational database tables relate.
- Find and open standard forms through **Form Open** or **Explorer**; use **Filter-in-Place**.
- Learn the role of **IDO Projects** and metadata cache unloading.
- Understand the new-data maintenance workflow that creates a table and IDO, followed by a form.
- See how a form component type, position, size, and caption string are edited.
- Identify the **SQL Tables** and **IDO Collections** forms for inspection.

## Concepts and terms taught in Part 1

| Term | Meaning in the tutorial | Video reference |
| --- | --- | --- |
| Mongoose | Infor's metadata-driven application development framework, supporting largely declarative/low-code applications | 00:23–01:13 |
| Form | User-interface definition whose components can bind to an IDO's properties | 06:38–07:35, 09:02–09:13 |
| IDO | *Intelligent Data Object*; business object with properties that link to data-table columns | 03:58–04:09, 08:56–09:07 |
| IDO Project | Logical grouping of IDOs; the demo creates `Hello World` | 03:30–04:27 |
| Filter-in-Place | Query mode for entering field-level criteria; **F4** executes the shown filter | 02:37–02:50 |
| Explorer | Form navigation with **Master Explorer** and user shortcuts under **My Folders** | 02:16–02:29 |
| Web Designer | Browser-based designer shown in its own tab | 05:14–05:26 |
| Site Default | Editing scope selected in the *video*; **not** permission to use it in this project's experiments | 05:21 |
| New Data Maintenance wizard | Flow demonstrated for creating the database table and IDO, then offering to create a form | 05:26–07:05 |
| Label string ID | Reference such as the narrated `s Address` that needs an associated string value to render as a friendly caption | 08:01–08:25 |
| Unload IDO Metadata With Forms | User preference shown for reducing stale metadata during development | 04:36–05:09 |

## Demonstrated workflow (historical tutorial; not an execution order for an autonomous agent)

### 1. Open Mongoose and a standard form — 01:45–02:50

**Demonstration:**

1. Start with a Mongoose cloud environment accessible from **Infor Mingle**.
2. Select **Mongoose** from the Mingle app switcher; the tutorial clicks **OK** for the default tenant.
3. Open the **Users** form either from **Form Open** or through **Explorer → Master Explorer → All Forms**.
4. Enter the user's email in the **User Name** field while the form is in **Filter-in-Place** mode.
5. Use the filter toolbar icon or **F4** to execute the search.

**Evidence to look for:** selected Users record after filter. Opening/navigating is generally observational; a login/tenant selection must still follow the approved session boundary.

### 2. Modify demo-user permissions — 02:58–03:20

**The video demonstrates (privileged mutation):** changing the selected user's editing permission from **Basic** to **Site Developer**, checking **Super User**, and saving.

**Agent rule:** **Do not perform this security mutation on the basis of the video.** It targets an existing user record and is outside the factory's `FX_`-only mutation boundary. Existing environment permissions must be established independently and treated as prerequisites, not changed as a workaround.

### 3. Create an IDO Projects shortcut and project — 03:30–04:27

**The video demonstrates:**

1. Under **Explorer → My Folders**, right-click and choose **New Shortcut**.
2. Choose the **IDO Projects** form and open the new shortcut.
3. Query existing projects using Filter-in-Place / **F4**.
4. Choose the toolbar **New** action, observe a **blue star** denoting a new grid row, enter project name **`Hello World`**, then **Save**.

**Agent rule:** Creating `Hello World` is a demonstration, not a permitted mutation target for the current FX-only project. The shortcut is also a personal-setting mutation, not merely navigation.

### 4. Review metadata unloading — 04:36–05:09

**The video demonstrates:**

1. **View → User Preferences**, and check **Unload IDO Metadata With Forms**.
2. Confirm with **OK**.
3. **Form → Definition → Unload All Global Form Objects**.

**Intent explained by the speaker:** forms/IDOs may be cached between sessions; unloading helps refresh development metadata.

**Agent rule:** Both changing the preference and executing the unload are stateful actions. Do not do either unless the active experiment explicitly allows it. Preserve existing preference state and record any approved cache-unload boundary because it can affect persistence tests.

### 5. Start the Designer / maintenance wizard — 05:14–05:37

**The video demonstrates:** opening **Designer** from the runtime toolbar into a new tab; choosing **Site Default** edit scope; choosing the **New Form Definition** toolbar action; selecting **New Data** as the category and **Maintenance** as the wizard.

**Agent rule:** `Site Default` is specific to this tutorial. For factory experiments, retain approved **User** scope; do not substitute a scope merely to make the wizard available.

### 6. Specify customer IDO/table fields — 05:43–06:32

The wizard inputs spoken in the transcript are:

| Setting | Demo value | Certainty |
| --- | --- | --- |
| IDO name | `customer` | Spoken; exact generated object naming/case not independently verified |
| IDO project | `Hello World` | Spoken |
| Table alias | `cust` | Spoken |
| Property 1 | `ID`: String, length **50**, **Primary Key**, **Required = Yes** | Explicit |
| Property 2 | `Name`: String, length **100** | Explicit |
| Property 3 | `Address`: String, length **150** | Explicit |
| Label string IDs | Narrated as **`s ID`**, **`s Name`**, **`s Address`** | **Spoken transcription only**; validate actual spelling/case from screen before using literal identifiers |

**The tutorial then uses Next → Finish.** The narrator says the wizard creates the table and IDO.

**Agent rule:** Creation of a database table/IDO is persistent schema modification. It is **not** an approved FX-only form experiment and must not be performed from this document alone.

### 7. Create the form from the data source — 06:38–07:05

**The video demonstrates:**

1. At **Create Form?**, choose **Yes**.
2. Use the just-created IDO/data source.
3. Proceed through the new-form wizard using the shown defaults.
4. Click **Finish**, then acknowledge the successful-completion notification and close the background wizard.
5. Observe the form open in **design mode** in a browser tab.

**Unspecified by transcript:** exact form definition name, precise generated SQL table name, all wizard defaults, and required permissions for this action in Mongoose 2026.x. Do not invent these values.

### 8. Reposition/change the address control — 07:09–07:35

**The video demonstrates:**

1. Select both the **static label** component and **edit** component associated with Address.
2. Move them toward the bottom of the form.
3. Select the Address edit control and change its **Type** to **Multi-Line Edit**.
4. Resize the Address editor using its corner drag handle.
5. **Save**; the speaker reports an **objects were saved** confirmation.

**Observable outcome described:** the Address editor is a larger multiline input toward the bottom of the design. The transcript alone does not establish whether that layout persists through a later session restart.

### 9. Open in runtime and insert test rows — 07:40–08:01

**The video demonstrates:** returning to the runtime browser tab, opening the generated form via **Form Open**, observing **Add Mode** because the form initially has no rows, adding unspecified test records through **New**, and saving.

**Unspecified by transcript:** actual test values, count of rows, exact generated form name, and durable runtime persistence evidence. Do not invent sample customer data.

### 10. Resolve the Address caption string — 08:01–08:25

**The video demonstrates:**

1. The Address label initially appears as its unresolved string identifier (narrated as `s address`).
2. Return to design mode; select the Address label.
3. In the **Caption** field, open its **ellipsis** control.
4. Confirm creation of the string value, accept the default **Address** text or choose custom text, then **OK** and **Save**.
5. Return to runtime and reopen the form; the friendly caption is now displayed.

**Key distinction:** setting a caption's string ID and creating the *string value* it resolves to are separate steps in the narrated workflow.

### 11. Inspect underlying objects — 08:32–10:05

**The video demonstrates:**

- **SQL Tables** form: filter to the generated table, then **Columns** to inspect its schema; it can also be used to modify columns, keys, indexes and column attributes (the transcript describes these capabilities but does not demonstrate making those edits here).
- **IDO Collections** form: filter to the IDO, then **Properties** to inspect property-to-table-column mappings; the transcript describes potential references/new properties/attribute edits.

**Architecture described by the speaker:**

```text
App database      → customer table/columns
Objects database  → customer IDO/properties (associated with table columns)
Forms database    → form metadata / components bound to an IDO collection

At runtime: Form controls ↔ IDO properties ↔ underlying table columns
```

This is the tutorial's explanatory model, not a verified inventory of the operator's current deployment.

## Agent validation checklist (for independently authorized experiments only)

- [ ] Confirm current runtime tenant, Designer session, edit scope, and authorized artifact naming before any mutation.
- [ ] Distinguish a **video-demonstrated action** from a **locally verified recipe**.
- [ ] For an approved operation, record a before-state observation and exactly what changed.
- [ ] After an approved Save, capture visible identity, scope, properties, and clean-state evidence.
- [ ] If the experiment requires close/reopen persistence, complete *only the approved lifecycle* and recheck the same identity/scope; do not treat a save confirmation alone as persistence proof.
- [ ] Record failures and UI mismatches without changing permissions, scope, preferences, or cache state to work around them.
- [ ] Never create/modify non-`FX_` objects in the autonomous learning environment.

## Source limitations and transcription notes

- The raw source is a **speech-to-text transcript**, not a screen capture or verified click log. It repeatedly renders **IDO** as `ideo` / `ideal`, and **Filter-in-Place** as `filter and place`; procedural headings above normalize those terms for retrieval only.
- The spoken label string IDs' **exact characters and case** cannot be established from the transcript alone; `s ID` / `s Name` / `s Address` are source-faithful spoken approximations.
- The video shows **Site Default** scope, whereas factory experiments use **User** scope. Behavior can therefore differ even if the menus look similar.
- The video mentions Part 2 will explore additional IDO functionality (10:11), and later training will involve Items and Orders (08:41). No additional steps from Parts 2–8 have been assumed.

## Full supplied transcript (unaltered wording, timestamps retained)

The text below is retained **verbatim aside from line-ending normalization**, including speech-recognition mistakes and missing punctuation. Use it to check what was actually supplied; the training notes above are an editorial extraction, not a replacement.

```text
[0:00] hi there this is caitlin porter from the mongoose enablement team
[0:03] welcome to part one of the mongoose hello world training series my goal today is to provide you
[0:09] with some hands-on training and get you comfortable with working inside mongoose
[0:14] in this training series we will be building a simple consumer ui application
[0:18] that allows users to select items and add them to their shopping cart
[0:23] so what exactly is mongoose mongoose is infor's application development framework
[0:32] with its metadata-driven model applications can be built with very minimal or no code it allows
[0:38] for rapid development of applications that use relational databases these apps can range
[0:44] from large enterprise software applications to small web portals mongoose enables you
[0:50] to build any combination of high productivity back-ends or beautiful consumer user interfaces
[0:57] users can extend and adapt the application to a virtually unlimited extent to fit their business
[1:02] needs most of the logic is stored as metadata instead of code which makes any user extensions
[1:08] automatically upgradeable applications within mongoose can be easily upgraded and deployed in
[1:13] the cloud here is an example of a large enterprise software application built with mongoose
[1:19] this application utilizes an accordion menu for navigation
[1:23] which allows users to navigate to different areas of the application it also has advanced filtering
[1:28] capabilities and a high productivity grid that allows you to navigate through different employees
[1:35] another example is our mongoose portal this is an example of a small web portal
[1:40] with zero training ui that allows users to access videos and documentation built
[1:45] entirely with mongoose for this tutorial series it is required that you have access to a mongoose
[1:50] cloud environment within mingle for these videos we'll be using the mongoose web designer
[1:56] to access it select mongoose from the app switcher within mingle
[2:03] click ok to log into the default tenant let's start by opening the user's form which is a core
[2:10] form provided by mongoose there are a few ways to open a form the first is by using form open
[2:16] and filtering to the form that you want to open alternatively you can use the explorer in the
[2:23] explorer you can either use the master explorer or you can create your own shortcuts under my folders
[2:29] expand all forms and you can browse to the user's form and double-click to open when the form opens
[2:37] it will default to filter in place mode this mode allows you to type in filter criteria into any
[2:43] field on the form let's filter to your user type in your email address into the user name field
[2:50] to execute that filter hit the filter and place icon from the toolbar or you can press f4 we want
[2:58] to now set the editing permission for our user by default this will be set to basic this particular
[3:03] editing level only allows our user to open and modify existing forms as their own user version
[3:09] of a form in this demo we also want to have super user privileges so we can open mongoose core forms
[3:15] to do so check the super user checkbox at the top and let's change our editing
[3:20] permissions to be site developer to save your changes click the save icon from the toolbar
[3:30] we're going to be using a form named ideoprojects frequently so let's create a shortcut to that form
[3:35] scroll to the top of the explorer and collapse the master explorer click on my folders and
[3:41] right click and do new shortcut navigate to the ido projects form and click ok [Music]
[3:54] if you expand the my folders you'll see the ideal projects as a shortcut and you can double
[3:58] click it to open this form is used to create an ideo project which is a logical grouping
[4:03] of business objects called intelligent data objects or otherwise known as idos
[4:09] query the projects from filter and place mode by pressing f4 or clicking the toolbar icon as before
[4:17] create a new ido project by selecting the new icon from the toolbar
[4:23] notice a blue star will appear in the new row that was inserted into the grid this means that
[4:27] it is a new record name the project hello world and then click the save icon from the toolbar
[4:36] let's open our user preferences from the menu select view user preferences check the box that
[4:43] says unload ideo metadata with forms mongoose uses cache files containing metadata for forms and idos
[4:51] that can persist between sessions to allow for faster form opening during development
[4:56] activities the user will frequently need to unload the global objects to get the most recent metadata
[5:01] select ok and then to unload the objects navigate to the menu form definition
[5:09] unload all global form objects to clear the cache let's get started creating a form to
[5:14] do so we need to open the designer click the toolbar icon to open the designer in a new tab
[5:21] for this demo we're going to edit at the site default level select site default and hit ok
[5:26] select the new form definition icon from the toolbar to open up the new form wizard
[5:31] once the form wizard opens select new data as the category and maintenance as a wizard to open the
[5:37] new data maintenance wizard this wizard will essentially create our table ido and form all
[5:43] in one step give our ido a name of customer we're going to use our ido project that we just created
[5:51] give it a table alias of cust next let's add the properties below hit the add row
[5:57] button to add three properties the first one is going to be id with a data type of string
[6:03] a length of 50 set it as the primary key set required to yes and set the label string id to s
[6:11] id then add name with a data type of string a length of 100 and a label string id of s name
[6:23] lastly let's add address data type of string length 150 and a label string id of s address
[6:32] then hit next and finish once this process completes the table and the ido have been created
[6:38] along with our table and ideo we want a form when you get this create form prompt click yes to
[6:43] create our customer form this will launch the new form wizard this will allow us to create a form on
[6:49] top of our data source go ahead and use the data source we just created using the defaults hit next
[6:55] and step through the wizard accepting the defaults when you reach the end hit finish once the form
[7:00] has been created you should get a notification saying the process completed successfully hit ok
[7:05] and close the new data maintenance wizard in the background now you should see your form is opened
[7:09] in design mode in a separate tab in your browser i want to reposition my address field to the bottom
[7:14] i'm going to highlight both the static and the edit component and move it towards the bottom
[7:20] i want to change the component type on address click on the component
[7:24] and change the type to multi-line edit i also want to make this field a little bit bigger i'm going
[7:30] to click on the component and drag the corner out to make it bigger go ahead and click save on
[7:35] the toolbar and you should get a message saying that the objects were saved let's open the form
[7:40] in runtime mode by switching back to our runtime tab and opening the form from the form open menu
[7:47] the form should open in add mode since we don't have any data
[7:50] go ahead and enter in some test data so we have this for use in our application later on
[7:56] you can use the new button on the toolbar to add each record once you're done adding your data you
[8:01] can hit the save icon notice on our form that the address still says s address this is because it's
[8:07] a new string and it needs to be created go back to design mode and click on the label on the
[8:13] caption field you should see an ellipsis click on the ellipsis and say yes to create the string
[8:18] value accept the default address or create your own custom string value once you hit ok and save
[8:25] you can navigate back to runtime mode and reopen your form to see the newly created string value
[8:32] let's review what we just did we first created an ideo project named hello world
[8:37] this is a great tool for organizing and grouping together all of our idos
[8:41] we will utilize this more later on when we build our items and orders ideos as well we then use the
[8:46] new data maintenance wizard to create our customer table and columns these tables are stored in the
[8:51] app database inside mongoose once the table was created the new data maintenance wizard
[8:56] created our customer ido which holds all the properties that link to the columns on the table
[9:02] these ido's are stored in the objects database in mongoose lastly we created a form using the form
[9:07] wizard that uses our customers ido as a primary collection this allows us to bind our components
[9:13] to properties on the ido all the forms metadata is stored in the forms database in mongoose you can
[9:20] access all of the tables and ido's directly from within mongoose to view the table we just created
[9:25] open the sql tables form type in the name of your table and hit the filter icon from the toolbar
[9:32] if you click on the columns button you can see all of the columns on our table you can use this
[9:37] form to set table keys and indexes add or remove columns or to change any attributes on the columns
[9:44] you can also use the ido collections form to modify your idos to view the idea we
[9:49] just created open the ideal collections form type in the name of your ido and hit the filter icon
[9:55] if you click on the properties button you can see a list of all the properties on the ido
[10:00] these properties link directly to the columns on the table here you can add references to other
[10:05] tables create additional properties or modify existing property attributes well that's it
[10:11] for part one in part two we're going to explore more features of the mongoose ideo functionality
[10:16] for more information check out the mongoose portal at mongoose.infor.com thanks for watching
```

---

**Series documentation convention:** `mongoose-hello-world-part-01.md` is self-contained. Create `part-02` through `part-08` only from their own videos/transcripts, maintaining the same **Concepts → Demonstrated workflow → Reference data → Agent rules → Full transcript** distinction.
