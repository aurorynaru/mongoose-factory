# Task: convert Infor Mongoose 2026.x documentation pages into Markdown files

I'm building a private knowledge base for an AI assistant that reviews work on
Infor Mongoose (version 2026.09.08, Web Client and Web Designer). I need selected
pages from Infor's public online documentation saved as Markdown files, one file per
topic, so the assistant can read and quote the exact wording later.

## Rules (all required)

1. **Keep Infor's original wording.** Change formatting only: headings, lists, tables,
   code blocks, bold and italic. Do not summarize, shorten, reword, reorder steps,
   merge steps or "improve" anything. If a sentence is unclear, copy it as it is.
2. **Never fill gaps from memory.** If you can't open a page, or part of it doesn't
   load, write `[NOT RETRIEVED: <url> — <reason>]` in its place and carry on. Do not
   reconstruct the content from general knowledge. A missing page is fine; an
   invented one is not.
3. **Keep step lists, tables, field names, menu paths, property names and code samples
   exact**, including capitalization and spacing (e.g. "Build from Scratch", "IDO",
   "Form Script Method"). Use numbered lists for numbered steps. Put code, scripts and
   expressions in fenced code blocks. If a table can't be rebuilt cleanly, copy its
   text row by row instead of guessing the layout.
4. **Images don't carry over.** Where a page has an image, screenshot or diagram, write
   a one-line placeholder such as `[Image: Web Designer toolbar]` using the image's
   caption or alt text if there is one.
5. **Within each file, keep the pages in the order listed below**, which follows the
   guide's table of contents. Start each page with a level-2 heading (`##`) using the
   page's own title, followed by a `Source:` line with that page's URL.
6. **Skip the site's navigation, menus, breadcrumbs, footers, "Related topics" boxes
   and feedback widgets.** Keep only the page's main content. Keep links that appear
   in the text, as Markdown links.
7. **Start every file with this header block**, filled in:

   ```markdown
   # <Topic title>

   > Guide: <guide name>, Infor Mongoose 2026.x
   > Source: <URL of the first page in the file>
   > Saved: <today's date, YYYY-MM-DD>
   > Trust: unverified (Infor documentation; not yet confirmed in this environment)
   > Conversion: formatting only, original wording. Pages not retrieved: <list, or "none">
   ```

8. **Use exactly the file names given below.**

## Output

If you can write files, save each one as `docs/mongoose/guides/<file name>`.
Otherwise, output each file as its own fenced Markdown code block, preceded by a line
with its file name. Do the files in the order below. If you run out of space, stop at
the end of a complete file and tell me which file to continue from.

At the end, give a short status table: file name, pages converted, pages not
retrieved (with URLs), and anything that didn't convert cleanly (tables, code, images).

## Pages to convert

Two guides. Build each URL by joining the base and the page file name.

- **Base A**, *Infor Mongoose Application and Form Development*:
  `https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/`
- **Base C**, *Infor Mongoose Core Extensibility Guide*:
  `https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/`

Example: Base A + `wik1708998460833.html` =
`https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/wik1708998460833.html`

### Priority 1 (do these first)

**1. `web-designer.md`**: Using the Web Designer (Base A)
- `wik1708998460833.html` Using the Web Designer
- `fem1496284600424.html` About the Web Designer
- `msh1571640457824.html` About the Web Designer toolbar
- `gdq1496286152826.html` Use of the Web Designer
- `sxs1496286631314.html` Launching the Web Designer
- `emh1496287167894.html` Modifying an existing form
- `xul1496288205534.html` Creating a form in the Web Designer
- `ina1496291804411.html` Creating a bound component in the Web Designer
- `oxw1496346301650.html` Creating global objects in the Web Designer
- `dds1496348939665.html` Creating a Background Color object
- `tlj1496349619879.html` Creating a Component Class object
- `fou1496360378991.html` Importing an Image object
- `vgb1496360908513.html` Creating a Property Class Extension object
- `sgm1496361233787.html` Creating a Script object
- `uoy1496361680193.html` Creating a Shortcut Menu object
- `wyy1496368191904.html` Creating a String object
- `tgj1556505418020.html` Creating a Theme object

**2. `build-from-scratch-form.md`** (Base A)
- `isi1501810350675.html` Creating a Build from Scratch form (Web Designer)

**3. `ido-collection-on-form.md`** (Base A)
- `lsm1454148019049.html` Adding an IDO collection to a form

**4. `collections.md`**: Working with collections (Base A)
- `hkd1710463091518.html` Working with collections
- `lsm1454148020905.html` About forms with collections
- `lsm1454148021046.html` About forms with subcollections
- `bgp1614901558305.html` About collection attributes/properties
- `lsm1454148021186.html` Binding collections to a form
- `bew1615180408286.html` Binding of components
- `lsm1454148021436.html` Saving one row per transaction
- `mod1589530987187.html` Enabling pagination on a primary collection
- `dqp1589534854150.html` Enabling pagination on a subcollection
- `lsm1454148021576.html` About refreshing collections
- `lsm1454148021639.html` Query form filters
- `lsm1454148021717.html` Creating a query form filter
- `lsm1454148021841.html` Editing a query form filter
- `lsm1454148022013.html` Tip: Create filters that prompt users for value input

**5. `form-events.md`**: Form events and event handlers (Base A)
- `udt1710823677133.html` Form events and event handlers
- `lsm1454148022481.html` About the form event model
- `lsm1454148022653.html` About form event handlers
- `lsm1454148022809.html` About standard form events
- `lsm1454148022949.html` About custom form events
- `lsm1454148023089.html` Working with form event handlers
- `lsm1454148023230.html` Form event handler response types (this overview page only;
  the individual response types go in file 8)

**6. `portal-shell-forms.md`**: Portal-type shell forms (Base A)
- `lsm1454148018659.html` Portal-type shell forms
- `lsm1454148018737.html` Creating a portal-type shell form
- `lsm1454148018971.html` Creating the form variable for a portal-type form

**7. `form-control.md`**: Form Control (Base C)
- `lsm1454147708525.html` About Form Control
- `lsm1454147708728.html` Form Control tasks
- `lsm1454147708884.html` Checking out objects
- `lsm1454147709056.html` Displaying and maintaining checked-out objects
- `lsm1454147709399.html` Checking in objects
- `lsm1454147709555.html` Getting objects
- `lsm1454147709726.html` Unlocking objects
- `lsm1454147709898.html` Archiving objects
- `lsm1454147710054.html` Restoring objects

### Priority 2

**8. `form-event-response-types.md`** (Base A)
- Every child page listed under "Form event handler response types"
  (`lsm1454148023230.html`) in the guide's left-hand table of contents, in menu
  order: about 28 pages, from "Add entry to the Audit Log response type" to
  "Timer response type". Not the overview page itself (it's in file 5).

**9. `components.md`**: Working with components (Base A)
- `aai1717101804884.html` Working with components
- `lsm1454148024743.html` Types of components
- `cur1717118354110.html` Framework Components

**10. `component-bindings.md`** (Base A)
- `twf1717716552258.html` About collection data bindings
- `lsm1454148034805.html` Binding components to collections or properties
- `lsm1454148021498.html` Referencing collections bound to forms or grids
- `lsm1454148034961.html` Binding components to variables
- `lsm1454148035132.html` Binding a component to a variable
- `lsm1454148035304.html` Setting data bindings for a component

**11. `scripts.md`** (Base A)
- `lsm1454148040187.html` About scripts in Mongoose-based applications
- `lsm1454148040358.html` About strong data types
- `lsm1454148040514.html` Referencing variables in WinStudio scripts
- `atm1601017723754.html` About script editing in the Web Designer using Visual Studio
- `lsm1454148040670.html` Configuring a script editor
- `lsm1454148040842.html` About the native script editor

**12. `variables.md`** (Base A)
- `lsm1454148044414.html` About variables
- `lsm1454148044570.html` Creating, copying, editing, or deleting variables

**13. `master-derived-forms.md`** (Base A)
- `lsm1454148018129.html` Designing derived forms
- `lsm1454148018191.html` Managing master and derived forms
- `lsm1454148018269.html` Sharing components between master and derived forms

**14. `idos.md`** (Base C)
- `lsm1454147697855.html` About IDOs
- `lsm1454147698026.html` About extending and replacing IDOs

**15. `application-event-system.md`** (Base C)
- `bqb1500867558215.html` About the Application Event System
- `yku1500869259962.html` Basic components of the Application Event System
- `vaf1500871352539.html` Advantages of the Application Event System

**16. `form-extensions.md`** (Base C)
- `laf1525402966322.html` About extending and replacing forms
- `wnb1525255725051.html` Using the Form Extensions form

## Do not convert

Design Mode pages (Windows client), Responsive Form Builder, IDS forms, report forms,
Runtime Builder, themes and deployment. They are outside the current scope.
