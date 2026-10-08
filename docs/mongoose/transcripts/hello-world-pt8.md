# Infor Mongoose — Hello World Training — Part 8 of 8

> **Document type:** AI-agent knowledge reference and narrated demonstration extraction, with complete operator-supplied timecoded transcript.  
> **Video:** Mongoose Hello World, Part 8 (the URL for this specific video was not supplied).  
> **Speaker (per transcript):** Caitlin Porter, Mongoose Enablement Team.  
> **Coverage:** 00:00–23:34 (last transcript timestamp).  
> **Source quality:** Supplied automatic speech-to-text captions. The video frames, on-screen property labels, event editor panels, images, target forms, and runtime outcome were **not independently inspected**.  
> **Version applicability:** Historical Mongoose/WinStudio training; current Mongoose 2026.x Web Designer may expose different names, scopes, constraints, or capabilities.  
> **Dependencies:** Continues the `Customer Portal` Flex Form from Part 7; assumes the `Items` secondary IDO collection, `Orders` primary IDO collection, existing products, prior visual theme classes, and imported image resources.  
> **Execution status:** Documentation only; **no tenant objects created, edited, saved, or runtime-tested** by creating this file.

## Instructions for AI agents using this file

1. **Knowledge is not execution authorization.** This explains a recorded tutorial; it is not a directive to implement it. Before any mutation, read `AGENTS.md`, the active harness brief, the relevant verified recipes, the experiment-specific scope/name/acceptance criteria, and the latest evidence. The operator—not this file—authorizes changes.
2. **Do not copy Site Default or unprefixed object names into factory experiments.** The training uses the existing `Customer Portal` form created with **Site Default** editing scope in Part 7 and unprefixed `Items Tile`, events, and controls. In factory learning mode, modify or create **only explicitly authorized `FX_`-prefixed artifacts**, using the **approved scope** (earlier tests used User scope). Do not replace, repurpose, or mutate shared production/core objects.
3. **Existing IDOs and global resources are prerequisites, not free-to-create dependencies.** The lesson refers to `Orders`, `Items`, `Header`, `Blue Button`, `shoppingcart.png`, and other earlier assets. Those were narrated in Parts 1–7, **not verified** in the target tenant. Do not change core IDOs, themes, image library records, or shared form objects without explicit separate permission, even if your *new* form is `FX_`-prefixed.
4. **Treat sign-in as demonstration UI, NOT authentication.** Here, pressing the sign-in button refreshes Items and changes `Page=2`. `Customer ID` being nonempty does not establish identity, credential verification, authorization, or row-level isolation. Never expose another person's Orders or create an order on behalf of a customer based only on this mechanism.
5. **Verify all form-variable lifecycle behavior independently.** This lesson uses variables `Customer ID`, `Page`, and `Count`; the prior Mongoose factory experiments found variable retention/reopen anomalies. Binding a control or setting values during a live session does not prove variable-definition persistence. Do not assume that a regenerated or reopened form retains definitions.
6. **Do not normalize speech-to-text uncertainties into verified property names.** The narration says “account” where `Count` appears intended, “standard form safe” near checkout, “tile and attribute,” and “enable win/visible win.” Preserve the original transcript in its own section. Confirm **exact UI labels, identifiers, spellings, property bindings, and event selections** before trying them in the live Designer.
7. **Treat lifecycle and event sequencing as distinct boundaries.** This lesson asks for Save, Close, Unload All Global Form Objects, Regenerate Form, reopening in runtime, and an asynchronous Generate Event option. These are *not interchangeable*. The documented `Post Event Asynchronously` selection does not by itself demonstrate transactional ordering, atomicity, retry safety, or persistence.
8. **No speculative recovery.** If a named IDO, variable, method, event, binding, Tile option, or resource is missing, record a blocker. Do not navigate, authenticate, reload, regenerate, repeat mutation, or edit a different object to make the tutorial “work” unless the approved experiment explicitly permits that.
9. **Acceptance means observable evidence.** A timestamped instruction is not proof of a persisted change. Distinguish *narrated intended configuration*, *observed UI*, *Save success*, *ordinary close/reopen recovery*, and *live runtime behavior*; claim only what was independently confirmed under the current test.

## Learning objectives and end-of-series outcome

- Know what a **Tile Form** is and how an Items tile can render each record of the Items IDO inside a Grid container.
- Understand **Secondary Collection Refresh** on a sign-in button and its limits.
- Bind `Count` to a form variable and add a **cart button with image and text**.
- Lay out a cart page with a Grid bound to the **Primary Orders collection** and a checkout button.
- Implement *narrated* page switching with a `Page` variable and **Visible When** conditions (sign-in=1, home=2, cart=3).
- Understand the distinction between **Visible When** and **Enabled When** conditions.
- Trace the **Add to Cart** event chain: make Orders current → new Orders row → set item/count/customer on that row; connect Grid drag-source and button drop-target events.
- Recognize **Standard Form Save** as the checkout action and separate a local saved-order demonstration from actual retail payment processing.
- Identify additional topics explicitly **mentioned, not taught**: .NET IDO extension classes, subcollections, parent/child forms, application events, ION and integrations, KPI/Data Views, breakpoints, security policies.

## Prerequisites and object dependency map

| Source object or concept | Source in series | Used in Part 8 | What must be checked before execution |
| --- | --- | --- | --- |
| `Customer Portal` Flex Form | Part 7 | Existing form to extend | Exact name + scope + scope owner; never replace non-`FX_` source form |
| Primary collection: `Orders` IDO | Parts 4–5; attached in Part 7 | Cart grid, new records, checkout | Collection ID/identity, writable permissions, safe test dataset |
| Secondary collection: `Items` IDO | Parts 2–4; attached in Part 7 | Items grid, Tile Form, drag payload | Identity, available properties, supported refresh and row selection behavior |
| Existing `Grid Items` | Part 7 | Tile-host grid and drag source | Currently bound to Secondary; component name confirmed in Designer |
| Flex Layout `Buttons` regions `count` and `cart` | Part 7 | Count editor and Add to Cart button | Existing region order/orientation; no blind recreation |
| Flex Layout `Main` regions `sign in page`, `home page`, `cart page` | Part 7 | Conditional visibility | Identify exact region properties in current version |
| `Customer ID` form variable | Bound in Part 7, definition not shown | Sign-in entry, header, menu Enable When, order property | **Definition, initialization, persistence, and authentication NOT proven** |
| `Header` and `Blue Button` theme classes | Parts 4/6 | Item label, cart and checkout controls | Shared theme present and supported; do not create/overwrite without authorization |
| `shoppingcart.png` | Asset name stated here | Button bitmap | Binary asset not supplied or examined |
| Product pictures and test items | Parts 2/4 | Tile and cart demonstration | Test rows and pictures not present in uploaded captions |

### Expected UI/data flow (narrated design, not deployed system)

```text
Customer Portal [Flex Form]
  Primary Collection   -> Orders IDO
  Secondary Collection -> Items IDO
  Header               -> Current Customer ID variable (unverified definition)
  Main -> Menu          -> Sign In / Home / Cart navigation buttons
        -> Sign-In Page [Visible When Page == 1]
              Edit Customer ID [variable binding]
              Button Sign In 2 -> Sign In Btn: refresh secondary Items
                               -> set Page = 2
        -> Home Page [Visible When Page == 2]
              Grid Items [secondary Items; Tile Form = Items Tile; Always]
                 Drag From: Add To Cart
              Edit Count [Count variable, default 1]
              Button Add To Cart [shoppingcart.png; Drop On: Add To Cart]
        -> Cart Page [Visible When Page == 3]
              Grid Orders [primary Orders; read-only display]
              Button Checkout -> Standard Form Save
  Form Pre-Display -> Page = 1
  Menu navigation: Sign In -> Page = 1; Home -> Page = 2; Cart -> Page = 3

Add To Cart event handlers (narrated order):
  1. Collection Make Current [primary Orders]
  2. Collection New          [primary Orders]
  3. Generate Event          [Set New Cart Entry; Post Event Asynchronously checked]
       Primary.Item        <- Secondary.Item
       Primary.Count       <- V(Count)
       Primary.Customer ID <- V(Customer ID)
```

**Important:** The chart is a tutorial architecture reconstruction. It does not establish that the exact event names, collection indexes, async behavior, security protections, or component properties work as drawn in a Mongoose 2026.x tenant.

## Demonstrated workflow — historical reference, **not an authorized execution runbook**

### Phase 1 — Create an Items Tile Form (00:22–03:25)

**Narrated operation:** From Web Designer, close `Customer Portal`, select **New Form Definition → Classic → Tile**, and set the new form name to `Items Tile` with `Items` as its IDO. Keep **Picture** as the selected generated property; complete the wizard. Tile Forms are described as embeddable record presentations hosted in a container such as a Grid.

**Configuration stated in transcript:**

| Element | Narrated property | Narrated value / action |
| --- | --- | --- |
| Tile Form | Width / Height | `40` / `4` (UI units not independently confirmed) |
| Generated Picture components | Remove Static Picture label | Delete generated Picture Static component |
| Generated Picture Edit | Component Type | Convert to `Static` |
| Picture component | Name | `Static Picture` |
| Picture component | Image and Text | `Image Only` |
| Picture component | No Colon | `True` |
| Picture component | Geometry | Resize into square, place on left |
| Item name Static | Name / Theme | `Static Item` / `Header` |
| Item name Static | Binding | Property `Item` |
| Item name Static | Justification / W × H | Left / `27 × 1.5`; No Colon = True |
| Description Static | Name | `Static Item Description` |
| Description Static | Binding | Property `Description` |
| Description Static | Justification / W × H | Left / `20 × 1.5`; No Colon = True |
| Cost Static | Name | `Static Cost` |
| Cost Static | Binding | Property `Cost` |
| Cost Static | Justification / W × H | Right / `8 × 1.5`; No Colon = True |

**Narrated boundary:** Save, ordinary close, then **Unload All Global Form Objects**. No persistent recovery check is shown. For an approved factory experiment, validate the first save and exact post-close recovery under its permitted lifecycle.

### Phase 2 — Display Tiles in the Items Grid (03:25–04:47)

1. Reopen `Customer Portal` and select the existing **Grid Items** bound to Secondary Items (from Part 7).
2. Under the Grid's **Miscellaneous** properties, set its **Tile Form** reference to `Items Tile`.
3. Set the nearby Tile setting to `Always` (the ASR says “tile and attribute”; exact property label must be read in Designer).
4. Create event `Sign In Btn` with response/action **Collection Refresh**; in parameters, choose **Secondary Collection**.
5. Select `Button Sign In 2` (the inner sign-in button, distinct from the left menu `Button Sign In`) and assign its **Primary Event** to `Sign In Btn`.
6. Save and reopen in runtime. The narrator types `Customer ID = 1` and clicks the sign-in button; Items tiles are said to appear.

**Expected demonstration result:** The secondary Items collection loads and Grid Items renders each row via the Tile Form. This is only data-refresh behavior. **It is not a validated customer login.** Do not infer an authenticated identity or a user-restricted query.

### Phase 3 — Count and Add-to-Cart controls (04:47–06:39)

| Component (narrated name) | Placement | Settings |
| --- | --- | --- |
| `Static Count` | `Flex Layout Buttons` → `count` region | Caption `S Count` (transcript text rendered “s count”); create caption string if needed |
| `Edit Count` | `count` region | Binding Type `Variable`, variable `Count`; justification Left; width `7`, height `1.5` |
| `Button Add To Cart` | `cart` region | Caption `S Add To Cart`; Theme Class `Blue Button`; Bitmap `shoppingcart.png`; Image and Text `Horizontal Image Text`; width `20`, height `1.5` |

**Narrated boundary:** Regenerate the Form to preview the new controls. This section does **not** yet add the cart event behavior; that appears at 16:54 onward.

### Phase 4 — Construct cart view and Checkout button (06:39–09:53)

The Cart Page is the third region prepared in Part 7. Add these components:

| Component | Source / binding | Dimensions / behavior |
| --- | --- | --- |
| `Static Cart` | Caption `S Cart`, theme class `Header`, centered | Width `20`; height `1.5` |
| `Grid Orders` | Binding Type `Primary Collection`, binding left at source default (“objects” in narration) | Width `35`; height `15` |
| `Button Checkout` | Caption `S Checkout`, theme `Blue Button` | Width `20`; height `1.5`; component margin `10,0,10,0` (left,top,right,bottom) |

Regenerate, then edit `Grid Orders` columns:

| Column name as spoken | Binding Type | Property binding |
| --- | --- | --- |
| `Grid Col Ord Num` | Property | `Order Number` |
| `Grid Col Item` | Property | `Item` |
| `Grid Col Count` | Property | `Count` (**ASR says “account property” — verify**) |
| `Grid Col Cust ID` | Property | `Customer ID` |

The instructor then sets a Grid Behavior field transcribed as **“read only disable” = True**, and regenerates. Because the exact property name is uncertain and “read only” vs “disabled” could have opposite usability semantics, inspect the rendered property label and effective runtime interaction. Do not apply a guessed property.

### Phase 5 — Page variable and Visible When (09:53–12:16)

1. Add handler for the standard form event **Standard Form Pre-Display** (as pronounced), Response Type **Set Values**.
2. Add a form variable called `Page` with value `1`.
3. Open **Flex Layout Main** → **Edit Flex Layout Attributes** and configure these **region** conditions:

| Layout region | Visible When expression (meaning) | Visible in Design Mode |
| --- | --- | --- |
| Sign-In Page | Variable `Page` **equals literal `1`** | True |
| Home Page | Variable `Page` **equals literal `2`** | True |
| Cart Page | Variable `Page` **equals literal `3`** | True |

This section emphasizes **region visibility**, not just individual component visibility. As narrated, the form opens on sign-in and subsequent variable changes swap visible regions. The UI property is transcribed “visible win”; likely **Visible When**, but verify before execution. 

### Phase 6 — Navigation and Enabled When (12:16–16:54)

**Create page-setting events:**

| Event | Response | Set Values change | Trigger |
| --- | --- | --- | --- |
| `Sign In Btn2` | Set Values | `Page = 1` | Left menu `Button Sign In` |
| `Home Btn` | Set Values | `Page = 2` | Left menu `Button Home` |
| `Cart Btn` | Set Values | `Page = 3` | Left menu `Button Cart` |

**Distinct inner sign-in action:** The existing inner button `Button Sign In 2` already has a `Sign In Btn` event that refreshes Secondary Items (Phase 2). The instructor adds **another handler** to that event to set `Page = 2`. This is necessary for the narrated “enter ID → sign in → show home tiles” sequence. Do **not** overwrite the refresh handler when adding the Page handler.

**Count initialization:** In the `Edit Count` variable binding dialog, set the initial value of variable `Count` to `1`. The presence of a default is narrated; scope/persistence and exact setter semantics are not verified.

**Menu eligibility:** Set **Enabled When** on all three left menu buttons to a comparison equivalent to `Customer ID != ""` (variable value vs blank literal; the narrator says “less than or greater than”). After reopening, the menu is described as disabled while Customer ID is empty and enabled after it is populated.

**Security caveat:** This tests only whether a variable contains text. It is **not a credential check**, not an authorization gate, not a per-customer data filter, and not a secure session design. The supplied transcript does not establish whether the field can be changed without completing the inner sign-in event.

### Phase 7 — Cart event pipeline and drag-and-drop (16:54–21:04)

**Event A: `Set New Cart Entry`** — Type/Response `Set Values`. Parameters configure three **Primary Orders collection property values**:

| Target | Source value | Spoken substitution / special notes |
| --- | --- | --- |
| Primary `Item` | `Item` from the **Secondary Items** collection | Narrator notes a `2` prefix indicates Secondary source; exact UI representation must be confirmed |
| Primary `Count` | Form variable `Count` | `V(Count)` substitution keyword (ASR says “account” in several lines) |
| Primary `Customer ID` | Form variable `Customer ID` | `V(Customer ID)` as described; verify precise variable/property identifiers and any spaces |

**Event B: `Add To Cart`** — multiple event handlers under one event name, created in the following narrated sequence:

1. **Collection Make Current**; choose **Primary Collection**.
2. **Collection New**; choose **Primary Collection**, creating a new Orders row.
3. **Generate Event** → `Set New Cart Entry`; select **Post Event Asynchronously**. The instructor describes this as firing only after earlier steps succeed. **That guarantee is not independently validated here** and should not be interpreted as evidence of serialized execution, atomicity, or transaction safety.

**Connect drag and drop:**

- **Grid Items → Events → Drag From Events:** Add `Add To Cart`.
- **Button Add To Cart → Events → Drop On Events:** Add `Add To Cart`.
- Both ends are configured with the **same event name** in the demonstration.

**Important verification gaps:** The tutorial does not demonstrate how a source row is selected across drag/drop, how a discarded/error event is handled, whether unsaved cart additions survive form reopen, or how duplicated drops are prevented. Do not assume primary collection focus, row identity, field substitution, or asynchronous outcomes are correct without runtime evidence.

### Phase 8 — Checkout and runtime walkthrough (21:04–21:50)

- Assign **`Standard Form Save`** to `Button Checkout` as Primary Event. The ASR renders this once as **“standard form safe”**; do not treat “safe” as a real event name without Designer evidence.
- Save and reopen the portal in runtime; enter sample Customer ID `1`, press the inner Sign-In button, drag one Item tile to the cart button, open Cart via the menu, observe a new row for the item with count `1`, and press Checkout.
- The narrator states this saves the order row to the database; the supplied material has no independent post-commit DB record or read-back evidence.
- The instructor demonstrates shrinking the browser and describes flex layout adaptation. The transcript supplies **no viewport dimensions or breakpoint acceptance data**.

**Do not call this a commercial checkout integration.** No payment method, payment authorization, stock deduction, customer authentication, totals verification, or order-header/line model is shown here. This is a training application that saves basic Orders rows.

### Phase 9 — Additional capabilities named but not demonstrated (21:50–23:34)

| Mentioned topic | Narrator's framing | This source proves |
| --- | --- | --- |
| .NET IDO extension classes | Add code to IDO layer | Existence claimed; no steps or code |
| Browser, subform, user components, barcode | Other UI components | Named, not configured |
| Data Views and KPIs | In-place BI and graphical indicators | Named, not implemented |
| Parent/child subcollections | Models such as Order Headers / Lines | Named, not built |
| Parent/child forms | Extend a parent Form while inheriting changes | Named, not demonstrated |
| Application event system | Server-side rules, workflow, integrations | Named, not demonstrated |
| ION, ION API, Data Lake, IDM | Integration ecosystem | Named, no endpoints or examples |
| Built-in report writer | Generate reports | Named, not demonstrated |
| Responsive breakpoints | Design for different device sizes | Named, not tested |
| Security policies | Form/IDO, field and row security | Named, not configured |

## Quick-reference tables for AI retrieval

### Video-to-capability timestamps

| Timestamp | Topic / key search terms |
| --- | --- |
| 00:22–03:25 | `Classic -> Tile`, Items Tile, picture conversion, Static Item/Description/Cost |
| 03:25–04:47 | Grid Items Tile Form, Always, Sign In Btn, Collection Refresh Secondary |
| 04:47–06:39 | Count variable, Edit Count, shoppingcart.png, Add To Cart button |
| 06:39–09:53 | Cart layout, Grid Orders, Checkout, Primary collection, grid columns |
| 09:53–12:16 | Standard Form Pre-Display, Set Values Page=1, Visible When 1/2/3 |
| 12:16–16:54 | Sign In Btn2 / Home Btn / Cart Btn, Enabled When, Count=1 |
| 16:54–18:54 | Set New Cart Entry, Primary vs Secondary, V(Count), V(Customer ID) |
| 18:54–21:04 | Collection Make Current/New/Generate Event; Drag From / Drop On |
| 21:04–21:50 | Standard Form Save, runtime checkout, responsive view |
| 21:50–23:34 | Additional Mongoose features only mentioned |

### Special tokens and expressions (narrated, verify in target UI)

| Expression / setting | Tutorial intent | Important verification |
| --- | --- | --- |
| `Page = 1`, `2`, `3` | Select sign-in/home/cart region | Is the variable defined when conditions evaluate? |
| `Visible When` | Toggle Flex region based on Page | UI label, condition serialization, successful rerender |
| `Visible in Design Mode = True` | Keep regions editable while condition may be false | Designer behavior may differ by version |
| `Enabled When` for Customer ID nonempty | Disable/enable menu buttons | **Not security or actual authentication** |
| `V(Count)` | Copy Count variable to new Orders Count | Variable type, exact name, current value |
| `V(Customer ID)` | Copy customer selection to new Orders Customer ID | Spaces/name/identity, validated ID, row authorization |
| `Post Event Asynchronously` | Schedule Set New Cart Entry from Add To Cart | Do not assume ordering, rollback, or guaranteed durable completion |
| `Standard Form Save` | Persist currently inserted Orders rows | Confirm after Save + safe reload/query |

## Sequence-sensitive source ambiguities and contradictions

1. **“Account” vs `Count`** — captions repeatedly say “account variable/property” (05:34, 09:20, 18:16–18:28), but surrounding steps name `Edit Count`, `Count`, and `V(Count)`. **Likely ASR**, not verified. The operator should inspect video frames or Designer metadata before encoding exact identifiers.
2. **“Standard Form Safe” vs Save** — 21:09 transcribes “safe.” Context explicitly describes checkout saving orders. Treat exact event label as **to be verified**.
3. **“Tile and attribute”** — 03:44 says “tile and attribute to always.” It could describe Tile When or another Grid property; **do not invent** the property's UI name.
4. **“Enable Win / Visible Win”** — likely “Enabled When / Visible When”; spoken source alone does not prove exact 2026 property-grid label.
5. **`Customer ID` binding precondition** — Part 7 binds to a `Customer ID` variable but does not narrate defining it first; Part 8 uses it across expressions and saves. The construction/persistence/validation of this variable is **not shown**.
6. **Sign-in button distinction** — **left menu** `Button Sign In` runs Page=1, while **sign-in panel** `Button Sign In 2` refreshes Items then Page=2. Treat them as distinct components despite similar wording.
7. **Asynchronous generate action** — the narrator states it fires only if earlier actions succeed, but no controlled failure or ordering test is shown. This is **tutorial assertion, not proven guarantee**.
8. **Grid Orders read-only/disabled setting** — caption says “read only disable to true”; exact semantic may mean “Read-only/Disabled” or differently named property. Confirm with UI snapshot.
9. **Existing Form vs new Tile Form** — Part 8 closes and reopens the previously created portal; the new Tile Form is created separately. It does not regenerate a brand-new portal from the wizard.
10. **Sign-in security gap** — nonempty Customer ID is sufficient for UI navigation in the demo; this is not tenant authentication or customer-level authorization.
11. **Product and asset dependencies** — `shoppingcart.png`, `Header` class, Images, and Products rows are referenced but no files or runtime screenshots accompany the supplied transcript.
12. **No screenshot verification** — some exact dimensions, actions, collection names, and visual results are stated orally only.
13. **Term “zero training”** — the narrator's “xero training” is speech recognition; the intent is a self-explanatory consumer UI, not a specified security or UX compliance requirement.

## Controlled learning proposals — NOT approved experiments

These are **possible future narrowly scoped learning questions**, not permission to execute. Pick **exactly one** only through the active harness review and unique experiment ID, and never depend on a blocked test as if verified.

| Small question | Isolated candidate operation | Evidence and acceptance signal | Dependency / risk |
| --- | --- | --- | --- |
| Tile Form basic save/reopen | New `FX_` User-scoped tile shell with one approved static component; one Save + ordinary close/reopen | Identity/scope; component existence before Save, after Save, after reopen | Confirm Tile wizard available; no core form mutation |
| Grid's Tile Form setting | Add one Tile Form reference to an approved isolated `FX_` Grid whose source already exists | Property before Save and after allowed lifecycle; runtime tile rendering if separately approved | Requires a verified safe test IDO and Tile |
| Region `Visible When` persistence | On one isolated `FX_` Flex Form change one region condition and Save | Exact serialized condition, recovery, and visible behavior | Avoid unverified Page variables; prepare prerequisites first |
| Drop-zone metadata only | Apply one matched Drag From / Drop On event string on two `FX_` components | Editor property retained after Save and reopen | **Do not** insert rows or run cart action in metadata-only test |
| Event chain ordering | On an independently authorized test-only collection examine 1 event sequencing step | Event log and exact collection identity; no unintended records | Async vs sync requires separate experiment designs and approvals |

**Acceptance discipline for approved trials:** establish session and Designer state *before* mutation; capture a fresh rendered state; verify target `FX_` name and User scope; perform exactly the approved action; Save once when permitted; confirm clean state; close/reopen only by allowed path; verify identity plus property after reopening; preserve screenshots/DOM snapshots/logs; record actual outcome as observed, replay-verified, or blocked without claiming unsupported success.

## Suggested evidence capture checklist (only with approved scope)

- [ ] Preflight: session authenticated, correct tenant/client/version and target `FX_` object.
- [ ] Exact Designer scope, Form name, Collection identity, and relevant component/region name.
- [ ] Snapshot of input property grid before change and after change; event type/name/parameters exact.
- [ ] Save confirmation and clean/dirty marker status; no unauthorised regeneration or unload.
- [ ] Ordinary close/reopen or explicit unload evidence **only if** the experiment prescribes it.
- [ ] If runtime tested, compare expected vs actual Tile contents, Page visibility, Count value, and navigation.
- [ ] If insert/save tested, use disposable rows in approved isolated source; verify durable read-back by a separate query and record keys.
- [ ] Capture async or collection-operation diagnostics if used, including event order and exceptions.
- [ ] Preserve negative evidence when the UI disagrees with the tutorial and stop at the blocker.

## End-of-series operator takeaway

Across Parts 1–8, this training progresses from **project and IDO/table creation → property classes/domains → queries/events/variables → images/themes/joins → derived values/validators/component classes → form scripts/charts → Flex Portal layout → Tile/variable-driven cart UI**. This is a *learning reference*, not a validated recipe for automatically rebuilding the whole app in Mongoose 2026.x. A real application also needs authorization, transaction behavior, order ownership, and verified persistence that the source does not show.

## Source limitations and attribution

All specific historical tutorial actions and timestamps below are derived from the **operator-provided** captions. ASR may contain misheard words, casing, run-together names, or omitted on-screen code/controls. The documentation does not attest to actual visual appearance or successful execution in the user tenant. No external documentation was used to supply missing details. The timestamped captions are preserved exactly as provided, except for operating-system newline normalization.

## Full supplied transcript (verbatim operator text, timestamps retained)

```text
[0:00] hi there this is caitlin porter from the mongoose enablement team welcome to part 8 of the mongoose
[0:05] hello world training series in this final video we'll continue building out our xero training
[0:10] customer portal we'll also get you introduced to tile forms and dynamic actions within mongoose
[0:17] let's pick up where we left off with our customer portal form in the previous video
[0:22] we added our items grid but instead of making this a standard grid i want to make it more visual by
[0:26] displaying a picture of the item alongside it in order to do this i want to utilize a tile form
[0:33] tile forms are essentially embeddable forms with limited capabilities and they must be
[0:37] displayed within a container such as our grid the information on each tile is taken from a single
[0:43] record of the ido collection that's bound to that grid these are a great tool for displaying key
[0:48] information succinctly let's close our customer portal form and click the new form definition
[0:54] icon from the toolbar for the category select classic and for the wizard select tile select ok
[1:02] and let's name our form items tile set the data source to our items ido
[1:08] then hit next let's remove all of the selected properties except for our picture
[1:12] property then hit next hit next again and then hit finish to create your tile form
[1:19] let's get started by resizing the form navigate to the layout section in the properties panel
[1:25] and set the width to 40 and the height to 4. click on the picture static component and delete it
[1:34] select the picture edit component and change the type to static then rename it to static picture
[1:41] scroll down to the formatting section and set the image and text property to image only
[1:47] then scroll down to the miscellaneous section and set no colon equal to true
[1:53] resize the component and shape it into a square then move it to the left of the tile form
[1:58] grab another static component from the toolbox and drop it in the top right section of the form
[2:03] rename the component to static item and set the theme class to header
[2:08] set the justification to left and under binding type set it to property click on the binding
[2:14] drop list and select item set the width to 27 and the height to 1.5 then set no colon equal to true
[2:24] grab another static component from the toolbox and draw it underneath our item static
[2:29] rename it to static item description set the justification to left
[2:38] for the binding type set it to property and select the description property
[2:43] under the layout section set the width to 20 and the height to 1.5 then set no colon equal to true
[2:51] grab one more static component from the toolbox and draw it to the right of our item description
[2:58] rename it to static cost set the justification to right set the binding type to property
[3:06] select our cost property under the binding field in the layout section set the width to 8 and the
[3:13] height to 1.5 then set no colon equal to true rearrange the components on the form till you
[3:18] find something that you like then save the form close it and unload all the global form objects
[3:25] now let's apply our tile form to the grid on our customer portal form open our customer portal form
[3:31] and select the grid items component scroll down to the miscellaneous section of the properties panel
[3:37] and set the tile form property to our new form items tile then directly below that set the
[3:44] tile and attribute to always now in order to see the items in our grid we need to refresh
[3:49] the item's collection expand the details pane at the bottom and navigate to the event handlers tab
[3:56] and let's add a new event hit the new icon on the bottom left name our event sign in btn
[4:03] set the type to collection refresh and then click the ellipsis on the parameters field
[4:12] for the collection drop list select our secondary collection then hit ok we want
[4:18] this event to fire when the user signs in with their customer id select the button sign in to
[4:24] component and navigate to the events section set the primary event here to our sign in btn event
[4:32] now we're ready to test this out let's save our form and reopen it in the runtime mode tab
[4:37] test this out by entering a customer id of 1 and then hit the sign in button you'll see once
[4:43] you hit the sign in button the collection will refresh and we'll see a list of items in the grid
[4:47] using our new items tile form next let's add our account field and cart button so users can add
[4:54] items to their cart grab a static component from the toolbox and drop it into the count region of
[5:00] flex layout buttons then grab an edit component from the toolbox and drop it into the same region
[5:09] next grab a button component from the toolbox and drop it into the cart
[5:13] region of flex layout buttons re-select the first static and let's rename it to static
[5:19] count give it a caption of s count and create the string if it hasn't yet been created
[5:26] then select the edit component and rename it to edit count set the justification to left
[5:34] and let's bind it to our account variable for the binding type set it to variable
[5:41] and click the ellipsis for the binding
[5:45] specify count as the variable name and then hit ok set the width of this field to 7 and the
[5:55] height to 1.5 then select the button component and rename it to button add to cart give it a
[6:02] caption of s add to cart and create the string value assign it a theme class of blue button
[6:12] and let's also assign it a bitmap file so it displays the text and an image
[6:18] for the bitmap file select shoppingcart.png set the image and text attribute to horizontal
[6:25] image text this will lay out the image and then the text horizontally on the button
[6:31] then set the size to 20 wide and the height to 1.5 let's pause here and regenerate our form so
[6:39] we can see our changes with the home page region finished let's start moving on to the cart page
[6:45] we'll build out a cart page where users can view and save their orders
[6:49] grab a static component from the toolbox and drop it into the cart page region of flex layout main
[6:57] let's rename it to static cart give it a caption of s cart assign the header theme class
[7:07] set the justification to center
[7:11] and then set the width to 20 and the height to 1.5 next let's grab a grid component from the toolbox
[7:19] place it into the same region rename this to grid orders and let's set the binding type on this
[7:28] to primary collection and leave the default of objects in the binding field set the width to 35
[7:36] and the height to 15. now let's grab a button component from the toolbox
[7:41] and place it in the same region rename it to button checkout and give it a caption of
[7:49] s checkout create the string if it hasn't yet been created
[7:56] let's assign it a theme class of blue button
[8:00] then set the width to 20 and the height to 1.5 now since the alignment of this
[8:07] region is set to stretch i don't want the button to stretch too wide across the screen
[8:13] so i'm going to set a margin on the component itself click on the edit flex attributes button
[8:19] and set the margin to 10 comma 0 comma 10 comma 0. this will set 10 character units
[8:26] to the left and right of the button hit ok and now since we just found our grid
[8:32] we need to regenerate the form so we can bind some grid columns hit the regenerate form button from
[8:37] the toolbar and when the form opens back up click on our grid orders component and then hit the
[8:43] edit grid columns button in the top left corner add two more grid columns using the icon below
[8:49] re-select the first grid column and rename it to grid call ord num set the binding type
[8:57] to property and bind it to our order number property select the second grid column and
[9:04] rename it to grid call item set the binding type to property and bind it to our item property
[9:13] select the third grid column and rename it to grid call count set the binding type to property
[9:20] and let's bind it to our account property
[9:24] select the last column and rename it grid call cust id set the binding type to property
[9:31] and bind it to our customer id property select ok and then reselect our grid orders
[9:39] we want to set this to read only so expand the behavior section and set read only disable to true
[9:47] go ahead and regenerate your form here and let's move on to creating the navigation
[9:53] we want to add in functionality to our buttons that allow the user to click between the pages
[9:58] to achieve this we're going to use the enable win attribute from the properties panel
[10:03] this will allow us to create a conditional expression that will evaluate automatically
[10:06] anytime the value in that expression changes we're going to use a variable to achieve this
[10:12] we want to start by creating our variable when the form opens and setting it to the
[10:16] sign in page expand the details pane and select the event handlers tab hit new on the bottom
[10:24] and let's use one of the standard mongoose events standard form pre-display
[10:29] change the type to set values then click the ellipsis next to the parameters field
[10:38] click the ellipsis next to the variables field and then hit new
[10:42] let's name our variable page and give it a value of 1. then hit ok until you get back
[10:48] to the home screen now we want to set some visible when conditions on each of our pages
[10:54] select the flex layout main component then hit the edit flex layout attributes button [Music]
[11:03] click the sign in page region and scroll down to the behavior section [Music]
[11:10] hit the ellipsis on the visible when field here is where we can build our conditional statement
[11:16] select the new button and set the value type to variable value then give it a value of page
[11:24] then hit ok we want page to be equal to and then hit the edit value for the right value
[11:30] value type to be literal and the value to be 1. then hit ok we just built a conditional statement
[11:37] that will only make this region visible when the variable page is equal to one just below
[11:42] that set visible and design mode to true next grab our visible win statement and copy it
[11:49] then select our home page region and then paste in our statement into the visiblewin attribute
[11:55] here change the value from 1 to 2 that way this region only displays when the variable value is
[12:01] equal to 2. set visible and design mode equal to true next select the cart page region and
[12:08] paste it there as well here change the value to 3 and set visible and design mode to true
[12:16] select ok and next let's create some events on our buttons that will set
[12:21] our page variable value let's add a new event from the details pane
[12:25] hit the new icon at the bottom and let's name this event sign in btn2
[12:32] hit ok and change the type to set values then hit the ellipsis on the parameters field
[12:45] hit the ellipsis next to the variables field and then hit new
[12:49] set the target equal to page and the value equal to one then hit ok until you return back to the
[12:56] home screen expand the sign in button to event and select the event handler we just created
[13:03] hit the copy button at the bottom and then rename this event to home btn
[13:10] under the parameters field change the value of 1 to 2. then hit the copy button again
[13:18] and let's rename this event to cart btn under the parameters field change the variable value
[13:26] from 2 to 3. now that we have our events created let's attach them to the buttons
[13:32] collapse the details pane and select our sign in button on the left scroll down to the events
[13:38] section on the properties panel and let's set the primary event on this button to sign in btn2
[13:47] then select the home button and assign the primary event here to home btn [Music]
[13:55] lastly select the cart button and set the primary event to cart btn
[14:02] now we also want to set the page variable after a user logs in with their customer id
[14:08] so let's set this on the sign in button here click the button sign in to component and
[14:14] then click the ellipsis on the primary event that's defined on the component
[14:19] here let's add an event hit ok let's set the type to set values
[14:27] click the ellipsis for the parameters field and then click the variables ellipsis hit new
[14:36] set the target to our page variable and set the value to 2 so it shows our homepage region
[14:44] hit ok until you return back to the home screen let's also set an initial value on
[14:49] the count variable so it will default to 1. click on the edit count component and click
[14:55] the ellipsis on the binding attribute set the initial value on that variable to 1 then hit ok
[15:05] we also want to set some dynamic actions on the menu buttons that only enable them when the
[15:10] customer has signed in with their customer id we can use the customer id variable to achieve this
[15:17] click on the sign in button from the menu and under the behavior section
[15:22] click on the ellipsis to the right of the enabled win attribute
[15:28] here is where we can build our enabled win condition hit the edit value button
[15:34] for the left value field set the value type to variable value and set the value to customer id
[15:47] then hit ok change the operator to less than or greater than and then hit the edit value
[15:55] for the right value change the value type to literal and leave the value blank then hit ok
[16:02] this condition is saying that only enable this component when customer id is not equal to null
[16:09] hit okay until you get back to the home screen and then repeat this same process
[16:13] with the home and cart buttons from the menu using the same condition statement
[16:21] once you're done save your form and let's reopen it in the runtime mode tab notice now when you
[16:28] open the form that all of the menu buttons are disabled because no customer has logged in
[16:34] let's go ahead and log in with our customer id of one and then click the sign in button
[16:39] remember the sign in button is refreshing the collection and setting the page variable to two
[16:44] and because we have a customer id variable populated all of our menu buttons are now enabled
[16:50] you can see our customer id variable in the top right corner
[16:54] next we want to add in functionality to allow the user to drag an item from the grid onto the cart
[16:59] button in order to add it to their cart in order to do that we first need to create some events
[17:06] hop back over into the design mode tab and let's add a new event name this event set new cart entry
[17:16] set the event type to set values and then select the parameters ellipsis we want to set the values
[17:23] for the properties on the primary collection to do this select the ellipsis on the properties field
[17:29] then select new for the target value let's select our item property from the primary collection
[17:36] we want to substitute this with the item value from our secondary collection click the ellipsis
[17:41] on the value field for the type select property value then select our secondary collection for the
[17:50] value select our item property then hit ok until you get back to the edit set property values modal
[17:58] this is saying set our item property on the primary collection to our item property on
[18:03] the secondary collection when you see that it's prefixed with the 2 that means it's coming from
[18:08] the secondary collection next let's set the count property to our variable count hit the new button
[18:16] set the target to our account property and leave the primary collection as a collection for target
[18:22] type in capital v open paren count close paren this will substitute our account
[18:28] property with the count variable hit ok and let's add one more hit the new button
[18:35] and this time let's set our customer id equal to our variable customer id
[18:40] select customer id for the target type in v open paren customer id close paren for the value
[18:47] then hit ok hit ok until you get back to the home screen and let's add another event hit the new
[18:54] icon in the bottom left and let's name this event add to cart hit ok and then change the event type
[19:01] to collection make current then click the ellipsis for the parameters field let's set the collection
[19:08] to our primary collection hit ok and let's add another event handler to our add to cart event
[19:15] hit the new icon select our add to cart event then hit ok change the event handler type to collection
[19:23] new then hit the ellipsis for the parameters field and select our primary collection hit ok
[19:30] and let's add one more event handler to our add to cart event click the new icon select our add to
[19:36] cart event and change the event type to generate event click the ellipsis for the parameters field
[19:44] and select our event set new cart entry check the box that says post event asynchronously
[19:51] this means that this event will only fire if the first events fire successfully
[19:56] hit ok to return to the home screen so what did we just build
[20:00] we started by creating an event that would set the focus onto the primary collection
[20:05] following that we did a collection new which would insert a new row into the primary collection
[20:10] then we generated our set new cart entry event which sets all the property values
[20:15] from the secondary collection to the primary collection anytime you add a new item to the cart
[20:21] it'll run this event and add a new row each time now that we have our events created let's
[20:26] add them to the components on our form select our grid items and expand the events section
[20:32] select the ellipsis on the drag from events property
[20:35] and select our add to cart event then hit the add button and then hit ok
[20:42] now select the add to cart button and click the ellipsis on the drop on
[20:46] events property select our add to cart event here as well and then hit the add button then hit ok
[20:55] in order to have a successful drag and drop event there must be one matching event name
[20:59] shared between the two components in this case it's our add to cart event that is linking them
[21:04] lastly we need a way to save our order click on the checkout button and let's set the
[21:09] primary event to a standard mongoose event of standard form safe now we're ready to test it
[21:16] save your form and let's reopen it in the runtime mode tab sign in with our customer id of one
[21:24] and let's grab an item and drag it to our cart then to view your cart hit the cart button
[21:31] and now you can see that our bike was added with a count of 1. we can save our order to
[21:35] the database by hitting the checkout button which is running our standard form save event
[21:41] and because we built this as a flex form you can see if
[21:44] you shrink the browser that the form will automatically adjust to the viewing size
[21:50] there's a lot of concepts that we didn't have a chance to dive deep into with this series
[21:54] and there's much more you can learn these concepts include adding code into the ido layer via
[22:00] net ido extension classes other components like browsers subforms user components barcodes
[22:07] data views and kpis are available providing in-place business intelligence you can create
[22:13] key performance indicator graphical displays that can be added to any form multiple collections like
[22:19] parent child that we call sub collections these are useful for order headers and order lines
[22:24] for example parent child forms which allow you to extend off a form for modifications without
[22:29] affecting the parent form changes to the parent form automatically cascade to the child forms this
[22:35] is a great tool for creating application specific templates that can be used across numerous forms
[22:40] with a single point of maintenance the application event system which is a major subsystem for adding
[22:45] server-side logic without writing code allowing you to set rules for automation workflow and
[22:51] integration leveraging ido's in a wide range of options mongoose also integrates with ion ion api
[22:59] data lake and idm reports and mongoose can easily be generated using its built-in report writer
[23:06] responsive breakpoints allow you to design for different devices when used in conjunction
[23:10] with flex forms allowing you to create your core logic once as the form adapts to different devices
[23:16] mongoose has security where you can set policies at the security role or user level for forms and
[23:21] idos policies can also be set at the field and row levels well that wraps up the hello
[23:28] world series your next step is to check out the mongoose fundamental series additional training
[23:34] and documentation can be found on the mongoose portal at mongoose.m4.com thanks for watching

```
