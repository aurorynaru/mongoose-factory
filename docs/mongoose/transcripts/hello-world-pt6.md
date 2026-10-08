# Infor Mongoose — Hello World Training — Part 6 of 8

> **Document type:** Agent reference / tutorial extraction with the complete operator-supplied transcript  
> **Video:** Mongoose Hello World, Part 6 (video URL not provided with this transcript)  
> **Speaker (per transcript):** Caitlin Porter, Mongoose Enablement Team  
> **Source:** Operator-provided, automatically transcribed timestamped narration; screenshots, the displayed form script, assets, and runtime behavior were **not** provided or independently verified  
> **Coverage:** 00:00–15:58 (last supplied timestamp)  
> **Version applicability:** Historical Mongoose tutorial. UI labels, allowed scopes, form scripting, and component behaviors require verification for Mongoose Web Designer 2026.x.  
> **Series context:** Follows Part 5 (Orders IDO joins, a derived order-total property, validators, and component classes). Prepares for Part 7 (store/customer portal, flex forms, and responsive layouts).

## How an AI agent should use this file

1. Read this as **reference material**, not authorization to perform operations on a tenant. The historical tutorial demonstrates one end-to-end sequence; the autonomous factory uses independently approved, narrowly scoped experiments.
2. Read the current repository `AGENTS.md`, the active approved brief, and existing experiment findings **before doing any Mongoose work**. Follow their permission, naming, scope, lifecycle, authentication, evidence, and stop rules even when the transcript describes another procedure.
3. The instructor uses **Site Default** scope and unprefixed objects such as `Orders`, `Orders Chart`, and `Hello World`. **Do not change those tutorial objects or use Site Default in the factory by inference.** Only create/change the exact approved `FX_` target(s), at the authorized scope. If a global object cannot be safely isolated or its scope cannot be verified, do not mutate it.
4. Global **Image** and **Theme** libraries and existing form scripts can affect other forms/users. A theme or image import is **not automatically safe** because its name begins with `FX_`: obtain explicit approval for the object type and its impact; never overwrite an existing image/theme without authorization.
5. **Crucial missing evidence:** At 01:27–01:58, the video displays a **Visual Basic form-script method on screen** and instructs viewers to type it. The supplied transcript **does not include the code**. This file therefore supplies **no executable replacement code**, no invented method signature, and no claim of exact script compatibility. Obtain the on-screen code or an independently documented method before attempting a reproduction.
6. Distinguish a narrated **runtime observation** (for example, a calculated value updating immediately) from verified form/script **persistence**. Approved tests should separately inspect Save, clean state, correct form identity/scope, ordinary close/reopen, and any specifically allowed subsequent lifecycle transitions.
7. Do not automatically use **Unload All Global Form Objects**, **Regenerate Form**, change user preferences/scope, create an extra Designer session, or authenticate to recover a blocked experiment. Such steps are separate transitions requiring authorization under the current brief.
8. Do not silently correct possible speech-to-text errors (`dir`/`der`, “foreign wizard,” “update collection XML,” class names, etc.). For exact executable identifiers, use confirmed UI metadata or the video image, not narration alone.

## Part 6 learning goals

- Understand the difference between the Part 5 SQL-derived order total (narrated as updating on Save) and a form-script-driven, immediate display update.
- Learn where Mongoose exposes a form's **script language** and built-in **Edit Form Script** entry point.
- Connect a **Form Script Method** response handler to a custom event, then attach it to **Data Change** triggers on both form components and grid columns.
- Create a **Classic → Grid Only** form and bind a **Chart** component to an IDO collection.
- Hide a supporting grid while leaving the chart as the visible data representation.
- Recognize the **Image** library as a separate Forms-database resource, with import/export and overwrite implications.
- Extend a named theme with reusable **Flex Layout** and **Static** theme classes, including a form-level font.
- Capture the tutorial's recap of architectural and metadata concepts introduced in Parts 1–5, without confusing it with new Part 6 actions.

## Prerequisites and dependencies from Parts 1–5

| Tutorial prerequisite | Part 6 use | Evidence / safety boundary |
| --- | --- | --- |
| `Orders` IDO, table, and form | Existing order count, selected item, joined item cost, order-total display | Tutorial object is not an approved `FX_` mutation target |
| Order data already present | Runtime Refresh and chart display | Real rows/values not supplied in the transcript |
| `Count`, joined Items cost, and derived order total | Inputs/result of the calculated amount | Exact internal property names are **not proved** by transcript; earlier transcripts vary among `dir`, `dur`, and `der` |
| Part 5 Item component class and validator | Item selection updates description/cost before Save | Timing matters to new event calculation; no ordering or numeric null-handling proven |
| Existing grid on Orders form | Grid-column Data Change events | Requires independent configuration; standalone components do not imply grid-column inheritance |
| `Hello World` theme created in Part 4 | Theme expanded with font and new component classes | Theme modifications may be application-wide/global |
| Three `Hello World` graphics assets from Mongoose portal | Images imported to form image library | **Neither the asset files nor their filenames** were supplied |
| Web Client runtime and Web Designer | Runtime tests, Designer editing | Video uses Site Default; factory permissions/scope differ |

## Conceptual map — tutorial claims, not a tested implementation

```text
Orders IDO/collection
  ├─ Count property -------------------┐
  ├─ joined Items Cost property -------┼──> Form script method [exact code absent]
  │                                   │          │
  │                                   └──────────┤ invoked by custom Calc Order Total event
  └─ order-total display <------------------------┘

Event triggers: standalone Item.Data Change and Count.Data Change
                plus Item/Count grid-column Data Change

Orders Chart form ─> Orders IDO query ─> hidden debug grid
                                    └─ Chart [order number labels; derived total data]

Forms image library ─> three imported portal assets [file names absent]

Hello World theme
  ├─ Form: font family = Tahoma
  ├─ Flex Layout / Blue Background: background #FF5CC6C7 [normalized from speech]
  └─ Static / White Header: 16 pt, bold, white text
         Static / Header: 16 pt, bold
```

The transcript attributes immediate recalculation to **events plus a script**, and chart rendering to **IDO-bound chart metadata**. It does **not** supply implementation code, SQL output, diagnostic log traces, screenshots, or an import manifest.

## Demonstrated workflow — historical tutorial, **not an autonomous execution plan**

### 1. Reopen Orders and identify the recalculation problem — 00:27–01:01

**Narrated sequence:**

1. Log in/open Mongoose and reopen **Orders** from the recent forms list.
2. Select **Refresh** to query records.
3. Observe that the **derived** order total introduced in Part 5 only changes after Save, according to the instructor.
4. Identify the desired change: recalculate as soon as **Count** or **Item** changes, rather than waiting for a row Save.
5. Open Designer from the toolbar and, **in the tutorial**, select **Site Default** scope.

**Expected narrated observation:** Orders data appears and the total's refresh timing is the reason to introduce a form script.

**Agent caution:** This is a problem statement and historical scope choice, not approval to edit the existing Orders form. Do not assume that a derived SQL property is directly writable in the version under test. Verify the actual form's data flow before proposing a compatible method.

### 2. Choose form-script language and add a method — 01:07–02:05

**Narrated sequence:**

1. In Designer, with the Orders form open, expand the form **Behavior** section.
2. Locate **Script Language**; narrator says **Visual Basic** is the default and **C#** is available.
3. Leave **Visual Basic** selected for the tutorial.
4. Use the **pencil icon → Edit Form Script** to open the built-in editor.
5. Replace the `methods go here` placeholder with **code shown visually in the video**, which is **not included** in the transcript.
6. Narrator describes the method as accepting **order Count** and **Items Cost** as parameters, converting values to decimals, multiplying, then updating the displayed/order-total property.
7. Select **OK**, return to Designer, and **Save**.

**Only source-supported conceptual expression:**

```text
Order total concept = Count × Joined Item Cost
Inputs described: Count, Items Cost
Output described: updated total property displayed on Orders form
Exact script text: NOT AVAILABLE FROM TRANSCRIPT
Exact method signature, return type, assignment API, error handling: NOT AVAILABLE
```

**Hard stop for an agent:** Do **not** generate a VB method from memory and claim it was extracted from this tutorial. Exact APIs, permitted property writes, decimal conversion behavior, handling of blank/null values, and current Designer script support must be established independently before any controlled test. The displayed code could be captured from a user-supplied screenshot of roughly **01:27–01:58**.

### 3. Define Calc Order Total event and attach to form Data Change — 02:05–03:43

**Narrated sequence:**

1. Open **Details → Event Handlers → New**.
2. Name the custom event/handler **`Calc Order Total`** (name normalized to readable words; exact stored identifier unverified).
3. Set **Response Type = Form Script Method**.
4. Open **Parameters (…)**, choose the form-script method narrated as **`Calc Order Total`** from the name list.
5. Supply the two substitution arguments described in narration:

   ```text
   P(Count),P(ItmsCost)
   ```

   **Notation warning:** This is a **readability normalization** of spoken “p open parentheses count … comma … itms cost.” It is **not evidence** of the exact case, spaces, qualified property names, or string that appeared in the dialog. Part 5 uses varying transcribed names for the joined property.
6. For the standalone **Item combo box**, set its **Data Change** event to the new calculation event.
7. Do the same for the standalone **Count edit** component.
8. Save, reopen in runtime, Refresh, and change Count or Item.

**Expected narrated observation:** the order total updates immediately after a data change, before Save.

**Verification notes:** Inspect the actual response handler's resolved method, parameter order, property bindings, and event association separately. Preserve a before-change and after-change value for evidence; do not claim persistence or committed database updates merely because the display changed.

### 4. Connect the event to corresponding grid columns — 03:43–04:16

**Narrated sequence:**

1. Return to Designer and select the **grid** on Orders.
2. Open **Edit Grid Columns**.
3. Select the **Item** grid column and assign **Data Change → Calc Order Total**.
4. Select the **Count** grid column and assign the same event.
5. Click **OK**, Save, reopen in runtime, and test changes from within the grid.

**Expected narrated observation:** the total now recalculates for changes made through either the form's individual controls **or** the corresponding grid columns.

**Agent caution:** A form-level component's trigger configuration should not be presumed to propagate automatically to the grid. Avoid combining the two into one acceptance criterion if learning them separately would be safer.

### 5. Create Orders Chart via Classic → Grid Only — 04:25–05:33

**Narrated sequence:**

1. In Designer, close Orders.
2. Choose **New Form Definition**.
3. Set **Category = Classic** and **Wizard = Grid Only**.
4. Use the tutorial name **`Orders Chart`** and select the **Orders IDO** as the data source.
5. Accept wizard defaults and Finish.
6. The created form contains a grid spanning the form. In the video this grid is a **temporary diagnostic aid** for the chart.
7. Resize/reposition the grid toward the bottom.
8. Select the form properties and set **Initial Command = Refresh**, so the collection is queried upon opening.

**Expected narrated observation:** a grid-only form bound to Orders exists in Designer and is configured to query the collection automatically.

**Agent caution:** Creating a form and setting an initial command are separate changes when designing controlled learning experiments. The unprefixed tutorial form name is for reference only.

### 6. Add an IDO-bound Chart component and hide the supporting grid — 05:33–06:44

**Narrated sequence:**

1. Drag a **Chart** component from the Toolbox onto the new form.
2. With the chart selected, open **Data Source**.
3. Set **Binding Type = Chart**.
4. Open the chart **Binding (…)** dialog.
5. Add the derived order-total field (spoken as “dir order total”) to **Chart Data**.
6. Select **Order Number** as the property used for **X-axis labels**.
7. Accept other chart defaults and close the dialog.
8. Select the backing grid and set **Behavior → Hidden = True**.
9. Save, switch to runtime, and open Orders Chart.

**Expected narrated observation:** a graphical representation of the Orders values displays when the form opens; the grid does not visibly occupy the presentation.

**Important limitations:** Transcript does **not** specify chart type, aggregation, series settings, numeric formatting, exact axis labels, color palette, screenshot, or dataset. Do **not** fabricate a bar/line chart choice or sample values. It also does not establish that hiding the grid preserves all chart updates in every Mongoose release; test only if approved.

### 7. Import three pictures into the Mongoose image library — 06:44–07:40

**Narrated sequence:**

1. Back in Designer, close the Orders Chart form.
2. Select **Edit → Image** (wording as transcribed) to open the image library/dialog.
3. Click **New** and import **three image files** from the **Hello World graphics** folder mentioned as available on the Mongoose portal.
4. Observe that images saved in this library belong to the **Forms database** and can be transported with forms, according to the narrator.
5. The dialog also offers **Import** (which can **overwrite** an existing library image) and **Export**.
6. Click **OK** and Save changes.

**Expected narrated observation:** three new image-library resources become available for the subsequent store portal.

**Evidence gap / mutation boundary:** The transcript does **not** identify the filenames, dimensions, formats, actual image content, or exact metadata object names. No files were attached. Importing into shared image metadata is **not authorized** by merely learning this procedure. Never choose an existing image for overwrite in a factory experiment without specific operator approval.

### 8. Extend the Hello World theme for the portal — 07:34–09:36

**Narrated sequence:**

1. Select **Edit → Theme**, choose the existing **Hello World** theme, and click **Edit**.
2. Select the **Form** node and set **Font Family = Tahoma**; the speaker says descendants inherit this by default.
3. Under **Form → Flex Layout**, add theme class **`Blue Background`**; because the tree refreshes, navigate back and reselect it.
4. Set **Background Color** to the spoken value corresponding to **`#FF5CC6C7`**, pending confirmation from the video UI or theme editor.
5. Under **Static**, add a class named **`White Header`**. After the tree refreshes, reselect the class.
6. Set **Font Size = 16**, **Bold = True**, and **Normal State → Foreground = Solid White**.
7. Under **Static**, add another class named **`Header`**, reselect it, and set **Font Size = 16** and **Bold = True**.
8. Select **OK** until back at the form, then Save.

**Expected narrated observation:** the existing theme now has the named reusable classes and form-level font configuration for the future portal.

**Agent caution:** Class names are normalized from spoken words; capitalization, spacing, stored keys, exact `#FF5CC6C7` confirmation, and inherited property values require UI evidence. The transcript does not show these new classes applied to a portal component in Part 6; that is deferred to the later video. Editing an application/theme-level object may affect other forms and is outside ordinary User-scope form experiments unless separately authorized.

### 9. Recap of Parts 1–6 and Part 7 preview — 09:36–15:58

The remainder of the narrated lesson summarizes prior material and introduces no further specific Part 6 creation steps. Preserve these points as a **knowledge map**, not as permission to rerun the earlier tutorials:

| Part | Narrated knowledge carried forward |
| --- | --- |
| 1 | Explorer shortcuts/security, IDO Projects and export grouping, preferences/metadata unload, and a new Customer table/IDO/form via New Data Maintenance |
| 2 | Inheritance and reusable IDO Property Classes; Units of Measure and Items facilities |
| 3 | IDO runtime requests and SQL-backed querying, filters, Initial Command options, diagnostics, standard/custom events, runtime variables, substitution keywords |
| 4 | Manual SQL column plus IDO-property creation; binary image import; first theme; table joins; property-class extensions and right-click details; new Orders facility |
| 5 | Orders joins, read-only derived calculations, customer/item drill-downs, validators with output properties, reusable Component Classes |
| 6 | Form Script Method and Data Change event triggers; Chart component; Forms image library; reusable Flex Layout/Static theme classes |

**Next Part 7:** build a store/customer portal form using **Flex Forms** and **Flex Layout** components to create responsive layouts. Part 6 does not yet demonstrate the portal construction.

## Reference data — agent lookup

### Form script / event mapping

| Role | Narrated setting | Confidence / note |
| --- | --- | --- |
| Target form | Orders | Demo reference only; not factory-safe |
| Script language | Visual Basic (default in video's environment) | Narrated; do not generalize across all 2026 builds |
| Script editor | Pencil icon → Edit Form Script | Narrated UI path |
| Actual method source code | **Absent** | Shown on screen only; must be obtained separately |
| Intended formula | Count multiplied by joined Item Cost | Conceptual only |
| Event name | Calc Order Total | Normalized from narration; exact metadata name unverified |
| Response type | Form Script Method | Narrated |
| Input placeholders | `P(Count)`, `P(ItmsCost)` (illustrative spelling) | Exact property identifier/casing unverified |
| Standalone triggers | Item combo box: Data Change; Count edit: Data Change | Narrated |
| Grid triggers | Item column: Data Change; Count column: Data Change | Narrated |
| Test | Change Count or Item; total updates before Save | Narrated runtime observation, not independently verified |

### Orders Chart definition

| Setting | Narrated value |
| --- | --- |
| New-form category / wizard | Classic / Grid Only |
| Demo form name | Orders Chart |
| Data source | Orders IDO |
| Initial Command | Refresh |
| Added component | Chart |
| Chart binding type | Chart |
| Chart data | Derived order total (exact identifier unverified) |
| X-axis label | Order Number |
| Grid | Hidden = True after chart setup |
| Chart type / scale / plot design | Not specified |

### Global image resources and theme metadata

| Object/type | Narrated configuration | Caveat |
| --- | --- | --- |
| Forms image library | Three files from Hello World graphics folder | Assets and filenames not supplied; risk of overwriting existing entries |
| Theme | Hello World | Existing shared/demo theme; do not edit in autonomous factory by default |
| Form base font | Tahoma | Applied in theme editor |
| Flex Layout class | Blue Background; background `#FF5CC6C7` | Hex normalized from spoken value; UI not verified |
| Static class | White Header; 16, bold, solid white text | Unit and precise style property labels need UI confirmation |
| Static class | Header; 16, bold | Foreground left unspecified in narration |

## Sequence-sensitive observations and open questions

1. **Script code missing:** a claim that an agent can faithfully reproduce the event/script from this transcript alone would be false. The on-screen code needs a screenshot/transcription or an independent, supported API source.
2. **Derived property and script interaction:** the tutorial says a derived SQL field updates after Save but a script updates the visible total immediately. That does not prove the script modifies a derived IDO property persistently; distinguish **display** from **database state**.
3. **Event order:** when Item changes, the Part 5 validator also updates Items Cost; the transcript does not establish which handler runs first or whether the script receives the refreshed cost under all circumstances.
4. **Exact spellings:** `
`CalcOrderTotal` / `DerOrderTotal`, joined Item Cost, and chart fields must be confirmed against real metadata. Descriptive names in this guide are not precise UI proof.
5. **Chart rendering:** the transcript reports successful display but provides no image or dataset. Do not invent graph appearance or validation percentages.
6. **Resource scope:** themes and library images can be shared/global; ordinary User-scoped Form permissions alone do not establish isolation.
7. **Image import choice:** **New** is described for creating files; **Import** is described as capable of overwriting. Do not mistake the two for universally safe equivalents.
8. **Cache and lifecycle:** unlike Part 5's cache-unload demonstrations, this lesson does not authorize doing such transitions during an unrelated blocked experiment.
9. **Historical labels:** available wizard categories, form scripting language, and event-edit screens may differ in 2026.x. Use fresh UI observation rather than hardcoded assumptions.

## Controlled learning experiment ideas — **proposals only, not approved work**

Choose **one small test at a time**, subject to the active harness brief; these are *independent* learning possibilities, not a sequential batch:

- **Read-only discovery:** On an approved disposable User-scoped `FX_` form, inspect whether the current Designer exposes **Script Language** and **Edit Form Script**. Record the exact UI labels and leave everything unchanged.
- **Chart discovery:** Read-only inspect the current **Chart** Toolbox component and available binding properties. Do not create the historical `Orders Chart` form or assume the Orders IDO is approved.
- **Event mapping:** On a separately approved single `FX_` component/form, test whether one permitted **Data Change** trigger retains its event selection through Save and ordinary close/reopen. Do not depend on the absent form script.
- **Theme-class discovery:** Read-only check whether the theme editor supports Form, Flex Layout, and Static class nodes. No theme mutation, global import, or scope change.
- **Image-library discovery:** Read-only inspect existing image-library UI options without opening a mutation path or overwriting objects.

**Do not** treat any of these as a workaround to previously blocked variable/script/persistence experiments. A new topic must have its own approved ID, target, stop conditions, and evidence plan.

## Evidence / acceptance guidance (only for approved experiments)

- Capture **preflight**: tenant/configuration identity, signed-in editing permission, Form Name + ScopeType + ScopeName, source object, current form clean/dirty status, and exact approved target.
- Capture **before-change**: relevant displayed property/control binding, event name/method availability, theme/image identifiers when applicable, and existing state that must not be overwritten.
- Make **only** the operation stated in the approved brief. No unrequested image import, global theme change, regeneration, cache clearing, Designer session replacement, or authentication.
- Capture **after-change**: exact stored names/property values and any warnings/errors; Save only if specifically authorized.
- Inspect **runtime behavior** only when the brief allows moving from Designer to runtime; record actual changed values and event/diagnostic evidence where available.
- If close/reopen is an approved acceptance step, verify recovered **name + scope + identity**, not just that something similarly named appears.
- Label findings accurately: **observed**, **replay_verified**, **blocked**, or **not tested** as supported by the experiment evidence. An observed value is not a validated global capability.
- Record any discrepancy between tutorial narration and Mongoose 2026.x instead of silently compensating with an extra action.

## Source limitations and transcription ambiguities

- **The most important missing artifact is the actual form script** displayed around **01:27–01:58**. The transcript describes its purpose but does not contain its source code, nor a screenshot.
- **No YouTube URL or screenshots for Part 6** were provided; the document is grounded in the supplied text, not a reviewed recording.
- **No asset bundle** was provided for the three images to be imported. The transcript supplies neither individual filenames nor their content.
- The speaker refers to `dir order total` and `itms cost` in spoken transcription. Earlier tutorials used variations of `der`/`dur` and joined-table alias names. **Do not treat any variation as confirmed exact-case metadata**.
- The spoken `pound ff5cc 6c7` is editorially represented as `#FF5CC6C7`, which is consistent with the Part 4 theme example, but exact color-entry text remains unverified from Part 6 visuals.
- A late recap says a response is an “update collection XML”; this may be narration/ASR error or imprecise shorthand. No protocol capture was supplied.
- The text is an **automatic transcript** with occasional words such as “foreign wizard” where the intended UI term appears to be **form wizard**. The complete original wording follows unedited.
- The video mentions a default **VB** form-script language and optional **C#**; it does not show supported scripting libraries or configuration capabilities of the current deployment.

## Full supplied transcript (unaltered wording, timestamps retained)

The following block reproduces the **operator-provided narration exactly in wording and timestamp order**, including speech-recognition mistakes and incomplete phrases. Documentation above is a structured interpretation, not a replacement for this primary text.

```text
[0:00] hi there this is caitlin porter from the mongoose enablement team welcome to part 6 of the mongoose
[0:05] hello world training series in part 5 we built our property class extensions and component
[0:10] classes that will be reused later on when we build our store portal in today's video we will
[0:16] introduce form scripts and we'll build a chart to display key data we'll also lay some groundwork
[0:22] for our store portal which includes importing images and expanding on our theme let's start
[0:27] by opening mongoose and reopening our orders form from the list of most recently used forms
[0:33] hit refresh to query the data in the previous video we created an order total using a derived
[0:39] field the problem with this is that it only updates after save what if we want it to update
[0:44] immediately after we change the count we can use a form script to achieve this while mongoose
[0:50] promotes development with minimal coding we're still able to add code in a variety of locations
[0:56] click the designer icon from the toolbar to open our orders form in design mode
[1:01] set the editing scope to site default and hit ok then hit ok again
[1:07] after the form opens expand the behavior section in the properties panel
[1:12] you'll notice here you have the option to select the script language of the form the default is
[1:17] visual basic but you have the option to change it to c sharp here let's leave it as the default
[1:22] of visual basic and let's open the built-in script editor by clicking the pencil icon in
[1:27] the top of the properties panel and hitting edit form script highlight the methods go here section
[1:33] and let's replace it with the following script this method is first passing in the order count
[1:38] and item costs as parameters into the method it will then change it to a decimal format and will
[1:44] perform the calculation once the calculation is complete it will update the property on the form
[1:50] take a second to pause the video here and type out this script on your form
[1:58] once you're done hit ok to return to your form and then hit save now we want to create an event
[2:05] that will trigger that form script whenever the item is changed or the count is changed let's
[2:10] first create our event open the details pane and then navigate to the event handlers tab
[2:15] click the new button at the bottom let's name our event handler calc order total then hit ok
[2:23] expand the response section and let's change the type to form script method
[2:30] then click on the ellipsis next to the parameters field to select our script
[2:35] under name hit the drop list and you should see a list of all the scripts attached to the form
[2:40] select our calc order total script
[2:45] now we need to pass in the parameters that the method needs type in p open parentheses count
[2:51] close parentheses comma p open parenthesis itms cost close parentheses this will pass in our count
[2:59] and cost properties to the method hit ok and now we need to attach our event to something
[3:05] we want to run this whenever the count or item is changed so select our item combo box expand the
[3:13] events section in the properties panel and since we want to trigger this on data change click the
[3:17] data change drop down and select our event there we also want to trigger the same event whenever
[3:23] the count is changed so click your count edit and set the data change event to calc order total
[3:28] save your form and let's reopen it in runtime mode to test it out hit refresh to query the data then
[3:35] try changing the count or the item and notice that the order total will now update immediately
[3:43] now let's make sure we apply the same event to the grid columns as well switch back to the design
[3:48] mode tab select the grid component and click the edit grid columns button navigate to the item
[3:54] grid column and under the events section select our calc order total for the data change event
[4:01] do the same for the count grid column as well hit ok and save your form reopen the form in the
[4:08] runtime mode tab and test this out by changing the count or the item from the grid column
[4:16] now that we have covered most of the basics when it comes to developing the back end of
[4:20] an application let's switch gears and learn more about designing and developing the user interface
[4:25] mongoose has many components that allow us to build graphic-oriented uis
[4:30] in this next part let's build a basic chart that will display key data from our orders table
[4:35] switch back to the design mode tab and close your orders form hit the new form definition icon from
[4:40] the toolbar to open up the foreign wizard selector select classic for the category and grid only for
[4:46] the wizard then hit ok let's name it orders chart and let's use our orders ido for the data source
[4:55] hit next then step through the wizard accepting the defaults and then hit finish
[5:01] when the form opens we see that since we chose grid only mode for the form type
[5:05] we only have a grid which spans the entire length of the form the grid is
[5:09] only for debugging in this case so after we get everything set up we're going to hide it
[5:13] for now let's shrink the grid by selecting it and clicking and dragging the corner in
[5:19] then we can reposition the grid anywhere on our form i'm going to move mine towards the bottom
[5:25] click on the form tab at the bottom of the properties panel and let's set the
[5:28] initial command to refresh so it queries the orders immediately when it opens
[5:33] then go to the toolbox grab a chart component and draw it onto your form
[5:40] next let's bind some data to the chart so it has something to display
[5:44] with the chart still selected expand the data source section in the properties panel
[5:49] set the binding type to chart then select the ellipsis next to the binding field to specify the
[5:54] chart's settings for the chart data at the bottom select dir order total and add it to the right
[6:01] then select order number as our property for the x axis labels there are many other
[6:06] chart settings that you can set here in the chart settings dialog however we're just going to leave
[6:11] the defaults for now hit ok to return to the form now let's hide our grid select the grid component
[6:18] expand the behavior section in the properties panel and set hidden to true
[6:23] save your form and let's test it out switch back to the runtime mode tab and open your form and
[6:30] just like that when the form opens we now have a graphical representation of our orders data
[6:36] there are many other types of charts and gauges that mongoose supplies that you
[6:39] can use to display key data you can even use it to create dashboards in your application
[6:44] in the next video we're going to build out our store portal but before we do that let's import
[6:49] the images and create the theme classes that we'll need for the portal switch back to the
[6:54] design mode tab and close your order's chart form then select edit image to open the images dialog
[7:02] you can use this dialog to import images to the forms database this makes it possible to transport
[7:08] the image file with the form and eliminates the need to call the image from an external location
[7:13] select the new button and import the three images that are included in the hello world
[7:18] graphics folder this folder can be found on the mongoose portal
[7:22] the import button will allow you to overwrite an existing image in the library you can also
[7:27] use the export button to export any image hit ok and save your changes next let's create some
[7:34] theme classes in our hello world theme that we can use when we're building out our store portal
[7:40] select edit then theme and select hello world hit the edit button in the top right
[7:49] i want to start by setting a font at the form level so every component on the form will inherit
[7:54] this font select the form tree element and for the font family select or type in tahoma next
[8:02] i want to set a theme class for the flex layout component that will set the background color blue
[8:07] to do so drill into the form tree element and then select flex layout
[8:12] give it a class name at the bottom blue background and then hit add
[8:17] once you hit add the tree will refresh so you'll have to go back into the component and select it
[8:22] reselect blue background and let's set the background color type in pound ff5cc
[8:30] 6c7 or select the ellipsis to pick color from the style editor hit ok and next let's create
[8:39] a static class click on the static component below and let's add a class called white header
[8:47] after you hit add the tree will refresh navigate back to your white header class
[8:53] set the font size to 16 and set bold equal to true then select normal state from the categories
[9:02] and let's set the foreground color click the ellipsis hit solid and let's accept a default
[9:08] of white hit okay let's add one more class to the static component select static then add the
[9:15] class name header after you hit add the tree will refresh again navigate back to your header class
[9:24] set the font size to 16 and set bold to true
[9:30] once you're done hit ok until you get back to your form and then save your changes
[9:36] before we wrap up let's stop and take a look back at everything we have covered up until now
[9:42] in part one we touched on navigating using the explorer menu the explorer allows for custom
[9:47] shortcuts and folders that can group together forms you can also use it to set what forms
[9:52] you want to open automatically when a user logs into the system these folders can utilize the
[9:58] built-in security to only allow certain users or groups access to select folders
[10:03] we created an ido project that was used to group together all of our idos this can be
[10:08] used in conjunction with the ido export wizard to export all of the ideos in a particular project
[10:14] we reviewed how to access the user preferences window and talked about unloading the ido
[10:19] metadata with forms here is where the user can set the application theme as well
[10:25] we got started with development by building out the customers facility using the new
[10:28] data maintenance wizard this created our table ido and form all in one step
[10:35] we then started some basic development on our customers form using the mongoose web designer
[10:42] in part two we got you introduced to the inheritance model which is one of the key
[10:46] principles of the mongoose framework this allows us to create reusable classes that
[10:51] can be used throughout an application with a single point of maintenance
[10:55] we got started building property classes that held various data attributes those attributes
[11:00] were inherited when we applied them to our unit of measure and items facilities
[11:05] we then built onto our application using the new data maintenance wizard by creating our unit and
[11:10] measure facility followed by our items facility in part three we briefly covered the flow of
[11:16] data in mongoose how when refresh is clicked an xml is sent to the ido runtime service
[11:22] where it's processed and sent to sql and returned in the form of an update collection xml
[11:27] this is all handled instinctively by mongoose and requires no setup from the user
[11:32] we covered the basics on filtering in mongoose and how to use a wildcard character a less than or
[11:38] greater than to filter specific criteria as well as how to combine filters we explore the different
[11:44] types of initial command actions that can control what happens when the form opens we also learn how
[11:50] to turn on specific diagnostics messages in our user preferences and view the diagnostics panel
[11:55] in action as events were triggered on the form we also got started working with the event system and
[12:02] how to intercept some of the standard mongoose events as well as creating our own custom event
[12:08] lastly we introduce variables which are mechanisms for storing data needed at runtime
[12:13] we introduce a mongoose substitution keyword to store a property value into our variable
[12:18] these substitution keywords are interpreted by mongoose when the event was triggered
[12:24] in part 4 we introduced how to add a column and property to an existing table
[12:28] previously we use the new data maintenance wizard to create these but doing it manually allows us to
[12:33] make changes to existing tables and idos we use the sql tables core form to add our new picture
[12:39] column and then the ideo properties core form to add the picture property to our item's ido
[12:45] next we worked with our new binary picture property to import an image for each of our items
[12:50] we created an event that utilized the standard binary value action import event
[12:55] we also created our hello world theme and applied it from the user preferences window
[13:00] we also created our first theme class that styled our import button
[13:04] we use the ideo collections core form to create a table join this allowed us to create a join
[13:09] property from the unit of measure table to the items table next we created our first property
[13:15] class extension which are types of global objects that can override ido property classes
[13:21] this allowed us to create a right-click menu so the user can drill down to the unit a measure form
[13:26] lastly we created some property classes that were used when we created our orders facility
[13:32] with the use of property classes this made creating our orders facility
[13:35] fast and consistent by inheriting the data attributes straight from the property classes
[13:40] in part 5 we expanded on our orders facility by joining it with our items and customers tables
[13:46] this allowed us to create join properties from those tables onto the orders ido
[13:52] we also created our first derived property which is an unbound sql expression used to perform
[13:57] calculations sub queries or calls to sql functions we use this to calculate our total order cost
[14:05] then we created right-click menus for drilling into the customers and items forms using property
[14:10] class extensions these extensions will inherit anywhere that property class is being used
[14:16] we introduce validators and how they can be used to not only validate the values of a component
[14:21] but to also set the customer name and address immediately upon data change
[14:26] and we followed that up by introducing component classes another type of global object that lets
[14:31] us bundle together sets of attributes this allowed us to package up our validator along
[14:36] with a list source into a reusable component class and in today's video we got you introduced
[14:42] to form scripts in mongoose we were able to create a script that performed a calculation
[14:47] and then updated the property we then attached that script to a custom event and triggered it
[14:52] on the data change event we started working with a chart component and used this to display key data
[14:58] in our orders table then we got you familiar with the mongoose image library
[15:02] and how it can be used to import images to the forms database this makes it possible to transport
[15:08] image files with the form and eliminates the need to call the image from an external location
[15:14] lastly we laid some of the groundwork that will be used in the last part of this series
[15:19] we built out some theme classes that will be used when we build out our customer portal
[15:24] that wraps up today's video in the next video we'll get you started on
[15:28] building out our customer portal form we'll introduce you to flex
[15:32] forms and flex layout components which are necessary to create responsive forms
[15:37] for more tutorials and documentation check out the mongoose portal at mongoose.infor.com thanks for
[15:43] watching
[15:58] you
```
