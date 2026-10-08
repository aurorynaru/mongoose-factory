# Infor Mongoose — Hello World Training — Part 7 of 8

> **Document type:** AI-agent reference / tutorial extraction, with the complete operator-supplied transcript.  
> **Video:** Mongoose Hello World, Part 7 (video URL not provided with this transcript).  
> **Speaker (per transcript):** Caitlin Porter, Mongoose Enablement Team.  
> **Source quality:** Automatically transcribed, timestamped narration supplied by the operator. Video frames, screenshots, existing app objects, theme/image assets, and live Designer results were **not** independently examined.  
> **Coverage:** 00:00–19:28 (last supplied timestamp); the substantive lesson ends around 18:55.  
> **Version applicability:** Historical tutorial. The factory's Mongoose 2026.x screens, editable scopes, property labels, layout behavior, and persistence must be verified independently.  
> **Series context:** Uses the Orders and Items IDOs from Parts 1–5 and theme/image assets described in Part 6. Part 8 is expected to introduce Tile Forms and continue the portal; Part 7 does **not** finish the shopping-cart workflow.

## Instructions for AI agents using this file

1. **Knowledge, not authorization.** This documents what the tutorial narrates. It is not a command to build the `Customer Portal` form or modify the tenant. For actual work, first read the repository `AGENTS.md`, the specific approved experiment brief, and applicable findings/recipes. Follow the active harness instructions for scope, names, authentication, checkpoints, evidence, and stop conditions.
2. **Never silently use Site Default.** The instructor chooses **Site Default** at 00:50. The factory's earlier controlled tests used **User** editing scope and **`FX_`-prefixed** artifacts. Any new mutation must target exactly the approved `FX_` object in its approved scope. Do not create or replace the unprefixed historical `Customer Portal` or change an existing user/application form by inference.
3. **Respect dependencies.** The lesson assumes the `Orders` and `Items` IDOs, `Hello World` theme, `Blue Background`, `Blue Button`, `White Header`, and `Header` theme classes, plus image assets such as `customericon.png` and `customersignin.png`. Availability is described by narration, **not verified in the user's environment**. Do not create or overwrite shared Theme/Image/global objects to satisfy a missing dependency without a separate approval.
4. **Form lifecycle transitions are explicit.** The narrator uses **Regenerate Form** repeatedly and says it saves, closes, and reopens the form. In the autonomous factory this may cross a restricted lifecycle boundary; use it only when approved. Do not substitute regeneration for an ordinary Save or ordinary close/reopen when the experiment calls for a specific one.
5. **Do not invent missing variable definitions or event logic.** This part **binds** controls to `Customer ID` as a variable, but does **not** demonstrate creating or initializing that variable. Parts 1–6 as provided do not establish a persistent `Customer ID` variable. The lesson also does not implement actual login verification, sign-in navigation, cart mutation, item drag/drop, or checkout. Those are future intentions, not capabilities shown working here.
6. **Observe scope of claims.** The instructor says Flex Forms can be responsive, but the transcript provides no phone/tablet/browser screenshots, breakpoint test results, or completed runtime validation. Preserve this as a *tutorial claim*, not a proven factory outcome.
7. **Naming and layout details need exact UI evidence.** Spoken labels (`Static Cust ID`, `Flex Layout Main`, `Sign In Page`, etc.) are descriptive; the exact generated component identifiers/case cannot be proved from narration. The instructor mixes **form units**, **flex units**, **character units**, and component **width/height**. Record the exact UI field and unit rather than assuming interchangeability.
8. **No opportunistic recovery.** Do not navigate/authenticate/relaunch Designer, unload global objects, change editing scope, create collections, regenerate, or save to recover a failed check unless the current approved task explicitly permits that transition. Stop, capture evidence, and report a blocker instead.

## Learning objectives

- Understand **Flex Form → Basic** and the purpose of Flex Layout as nested containers with horizontal/vertical regions.
- Distinguish **region order and layout Type** from **child Orientation, Align, Pack, Length, Unit, Max Length, and Margin**.
- Create the *narrated metadata layout* of a three-view portal (sign-in, home, cart) with shared header, menu, and footer.
- Bind a new form's **Primary Collection** to Orders and **Secondary Collection** to Items; understand why the instructor regenerates the form after changing collections.
- Reuse global theme classes and imported images on Static, Button, and Flex Layout components, without assuming they are available or safe to mutate.
- Recognize that Part 7 ends immediately after binding an **Items grid** to the secondary collection. Navigation logic, tiles, drag-and-drop, order persistence, and finished cart are **not taught yet**.

## Prerequisites from earlier videos

| Narrated dependency | Used here | Boundary / what is not established |
| --- | --- | --- |
| Mongoose runtime + Web Designer | Open Designer and create Flex → Basic form | Exact 2026.x UI workflow not validated from this transcript |
| `Orders` IDO | Primary Collection of Customer Portal | IDO presence/name/scope not checked |
| `Items` IDO | Secondary Collection and Home-grid data source | Collection contents and runtime loading not shown |
| `Hello World` theme | Supplies styling from Part 6 | Shared/global mutations are not authorized by the tutorial |
| `Blue Background` Flex Layout theme class | Header and Footer backgrounds | Must exist in the target environment; narration uses prior-created class |
| `White Header` Static class | Portal title and customer-ID display | Theme inheritance appearance not visually verified here |
| `Header` Static class | Sign-In title and Home title | Only previously narrated configuration known |
| `Blue Button` Button class | Menu and Sign-In buttons | Originates from Part 4 |
| Imported image resource `customericon.png` | Header customer icon | Name narrated; no image file attached |
| Imported image resource `customersignin.png` | Sign-In-page image | Name narrated; no image file attached |
| Variable `Customer ID` | Display and entry bindings | **Variable creation/initialization NOT shown in Part 7** |

## Flex Layout concepts explained in the video — 01:05–03:03

| Concept | Explanation from narration | Practical caution |
| --- | --- | --- |
| Flex Form | A form that uses Flex Layout containers to render child components and adapt to different viewing environments | Responsiveness is claimed, not device-tested in supplied material |
| Flex Layout component | Container with regions, potentially nested in regions of another Flex Layout | Region count/order and child placement must be verified after UI edits |
| Horizontal Box | Regions arranged left-to-right | This is about **region arrangement**, not child orientation |
| Vertical Box | Regions arranged top-to-bottom | Used for the root layout and Home container |
| Fixed / form unit | Narrator describes fixed character/form-unit region lengths | Unit/property wording needs current-UI confirmation |
| Flex unit | Relative allocation of available space; e.g., 1 flex or 5 flex | Actual responsive distribution depends on other sizes/constraints |
| Child Orientation | Horizontal, Vertical, or Fill, depending on region | Do not confuse it with the containing Flex Layout's Box Type |
| Align | Cross-axis child alignment: left/center/right/stretch for vertically oriented region; top/middle/bottom/stretch for horizontally oriented region | Narrator's “a line” is likely speech-to-text for Align |
| Pack | Main-axis placement: start/center/end | Independent from Align |
| Margin order | **Left, Top, Right, Bottom** (e.g., `1,0,0,0`) | Values are narrated in character units; do not transpose to CSS conventions |
| Max Length | Restricts how wide a named region can stretch | Applied to Home (50) and Cart (65), not to every region |

### Structural map (tutorial target, not observed runtime)

```text
Customer Portal [Flex Form, unit=Character]
  Collections:
    Primary   = Orders IDO
    Secondary = Items IDO

  Root Flex Layout [Vertical Box]
    header [4 form units; Fill]
      Flex Layout Header [Blue Background; two horizontal child regions]
        header [1 flex; Horizontal, Align Middle, Pack Start]
          Static Header [portal title]
        user [1 flex; Horizontal, Align Middle, Pack End]
          Static Cust Icon [customericon.png]
          Static Cust ID [Variable: Customer ID]
    main [1 flex; Fill]
      Flex Layout Main [six regions as narrated; arrangement type not explicitly edited]
        menu [20 form units; Vertical, Center, Start]
          Button Sign In; Button Home; Button Cart
        spacer1 [1 flex]
        sign in page [5 flex; Vertical, Center, Start]
          Static Sign In; Static Image 1; Static Cust ID 2;
          Edit Cust ID; Button Sign In 2
        home page [5 flex; Fill; Max Length 50]
          Flex Layout Home [Vertical Box]
            header [4 form units; Horizontal, Middle, Center]
              Static Home
            spacer [1 form unit]
            grid [2 flex; Fill]
              Grid Items [binds to Items secondary collection]
            spacer2 [1 form unit]
            buttons [1 flex; Fill]
              Flex Layout Buttons [three regions]
                count [1 flex; Horizontal, Top, End]
                spacer [1 form unit]
                cart [1 flex; Horizontal, Top, Start]
        cart page [5 flex; Vertical, Stretch, Start; Max Length 65]
          [no cart components added in Part 7]
        spacer2 [1 flex]
    footer [2 form units; Fill]
      Flex Layout Footer [Blue Background]
```

**Map caveat:** The video does not explicitly set the **Flex Layout Main** box Type, so do not assert an observed stored Type. The six-region layout comes from narrated configuration. The `count`/`cart` regions are **empty placeholders** at the end of Part 7.

## Demonstrated workflow — historical reference, not an authorized execution plan

### 1. Choose the Flex Form wizard — 00:44–03:27

1. Open Web Designer using the toolbar Designer icon.
2. The narrator chooses **Site Default** scope (factory use **not authorized**).
3. Select **New Form Definition**.
4. Category = **Flex**; Wizard = **Basic**; select OK.
5. After the Flex Layout explanation, enter the demo form name **Customer Portal**.
6. Select **Character** for the Form Unit instead of Pixel.
7. Select Next → Finish and observe the new form in Designer.

**Narrated postcondition:** Basic Flex Form exists with an automatically provided Flex Layout component. **No factory persistence evidence is supplied.**

### 2. Add Orders / Items collections — 03:27–04:10

1. Open the bottom **Details → Collections** tab.
2. Set **Primary Collection = Orders** IDO; the tutorial receives a prompt to regenerate.
3. Instead of immediately regenerating, use **New** in Collections to add the **Secondary Collection = Items** IDO.
4. Acknowledge the second prompt and select **Regenerate Form** from the toolbar.
5. Instructor describes Regenerate as Save + Close + Reopen, needed after adding collections and sometimes after UI changes.

**Verification target for an independently approved test:** Both collection entries still reference the intended IDOs after the permitted lifecycle transition. **Do not claim either binding persisted based only on the video text.**

### 3. Configure root header / main / footer regions — 04:10–05:16

Select the automatically created Flex Layout. Open **Edit Flex Layout Attributes**, or **Properties → Layout → Flex Attributes → (…)**. Change root **Type = Vertical Box** and configure:

| Region index | ID | Length | Unit | Orientation |
| --- | --- | ---: | --- | --- |
| 0 | `header` | 4 | Form | Fill |
| 1 | `main` | 1 | Flex | Fill |
| 2 | `footer` | 2 | Form | Fill |

Select OK. This supplies the page's full-height structural skeleton, with the main area flexible between fixed-sized top/bottom regions (conceptual interpretation).

### 4. Add nested header layout and portal title — 05:16–07:31

1. Add a Flex Layout to root `header`.
2. Narrated component name = **Flex Layout Header**; Theme Class = **Blue Background**.
3. In **Edit Flex Layout Attributes**, add a second region (two total) and set:

| Region ID | Length / Unit | Child Orientation | Align | Pack | Margin |
| --- | --- | --- | --- | --- | --- |
| `header` | 1 Flex | Horizontal | Middle | Start | Unspecified at region level |
| `user` | 1 Flex | Horizontal | Middle | End | `1,0,0,0` |

4. Add a Static component into the nested `header` region.
5. Narrated component name = **Static Header**; Caption resource = `s customer portal` (spoken string-ID convention; exact UI identifier unverified).
6. Use caption ellipsis to create the localized string value, as narrated.
7. Theme Class = **White Header**; Justification = Left; Width = **40**; Height = **1.5**; **No Colon = True**.
8. **Regenerate Form** (tutorial transition).
9. To add spacing only to this Static, open that component's **Edit Flex Layout Attributes** and set **Margin = `2,0,0,0`**.

**Expected narration:** Styled title occupies header area; component-level margin adds two characters to the left. Actual pixels/screenshots not supplied.

### 5. Add customer icon and customer-ID display in header — 07:31–08:51

Add two Static components to the `user` region of Flex Layout Header:

| Setting | Static Cust Icon | Static Cust ID |
| --- | --- | --- |
| Component type | Static | Static |
| Image / Bitmap File | `customericon.png` | Not specified |
| Theme Class | Not specified | White Header |
| Data binding | Not specified | Binding Type = Variable; `Customer ID` |
| Justification | Right | Left |
| Width | 4 | 10 |
| Height | 1.5 | 1.5 |
| No Colon | True | True |

Regenerate the form. The instructor observes a **customer icon** and an **empty static display** intended to show the customer ID later.

**Hard limitation:** `Customer ID` variable is referred to by name but is **not defined or populated** in this lesson. Empty display is not proof of a working sign-in flow. Due to the factory's previous variable-retention anomalies, never infer Save/reopen persistence from successful binding selection alone.

### 6. Footer and main-region container — 08:51–10:54

1. Add a Flex Layout to root `footer`.
2. Name it **Flex Layout Footer**, Theme Class = **Blue Background**; regenerate.
3. Add another Flex Layout into root `main`, named **Flex Layout Main**.
4. Open its attributes; the narrator says **six regions** are needed and instructs adding five to the existing region.
5. Configure the six regions in the following order:

| Order | Region ID | Length / unit | Orientation | Align | Pack | Margin | Max Length |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `menu` | 20 Form | Vertical | Center | Start | `0,1,0,1` | Not specified |
| 2 | `spacer1` | 1 Flex (default) | Not specified | — | — | — | — |
| 3 | `sign in page` | 5 Flex | Vertical | Center | Start | Not specified | — |
| 4 | `home page` | 5 Flex | Fill | — | — | Not specified | **50** |
| 5 | `cart page` | 5 Flex | Vertical | Stretch | Start | `0,1,0,1` | **65** |
| 6 | `spacer2` | 1 Flex (default) | Not specified | — | — | — | — |

6. Select OK.

**Source fidelity note:** No explicit instruction appears to set the **Flex Layout Main Type** to Horizontal Box or Vertical Box. The earlier general explanation says Flex Layouts default to Horizontal Box, but this is not independent proof of the stored value here. Record the current UI setting if testing in 2026.x.

### 7. Add menu navigation buttons — 10:54–12:08

Add three Button components to the `menu` region of Flex Layout Main:

| Narrated name | Caption string ID | Theme Class | Width | Height | Notes |
| --- | --- | --- | ---: | ---: | --- |
| Button Sign In | `s sign in` | Blue Button | **2** | **15** | Values are spoken **Height 15, Width 2**; possibly reversed in narration; do not “fix” without visual evidence |
| Button Home | `s home` | Blue Button | 15 | 2 | Caption string created through ellipsis |
| Button Cart | `s cart` | Blue Button | 15 | 2 | Caption string created through ellipsis |

Create the caption strings using their ellipsis controls as narrated, then regenerate.

**Important:** No click events, navigation commands, visibility conditions, or page switching for these three buttons are assigned in Part 7. They are *visual menu placeholders* at this point.

### 8. Build the Sign-In page components — 12:08–15:24

Place the components into the `sign in page` region in the order described:

| Narrated component | Type / configuration | Width × Height | Other settings |
| --- | --- | --- | --- |
| `Static Sign In` | Static, Caption `s sign in`; Theme Class `Header` | 20 × 1.5 | Justification Center; No Colon True; margin `0,1,0,1` |
| `Static Image 1` | Static, Bitmap File `customersignin.png` | 21 × 8 | No Colon True; margin `0,1,0,1` |
| `Static Cust ID 2` | Static, Caption `s customer id` | 20 × 1.5 | Justification Center; No Colon True |
| `Edit Cust ID` | Edit; Justification Center; Binding Type Variable; `Customer ID` | 20 × 1.5 | Variable predefinition not shown |
| `Button Sign In 2` | Button; Caption `s sign in`; Theme Class `Blue Button` | 20 × 1.5 | Margin `0,1,0,1`; no event handler assigned in this lesson |

Sequence:

1. Draw the components and set the properties above.
2. Use caption ellipsis actions to create any indicated string resources; do not assume `s sign in` must be duplicated if it already exists.
3. Narrator says regeneration **might** be needed to see some changes; record whether this transition is approved before using it.
4. Set the indicated **individual component margins** using Edit Flex Attributes.
5. **Save** when the sign-in page layout is complete.

**Not implemented here:** Customer credential check, customer-ID lookup, authentication/security, button event binding, filling the header customer-ID display, or making other pages conditional on sign-in. Do not describe this static page as a secure login system.

### 9. Build Home nested Flex Layout — 15:24–16:54

1. In the `home page` region, add a Flex Layout called **Flex Layout Home**. The narrator notes it fills its parent because that region has Orientation = Fill.
2. Open its attributes and set **Type = Vertical Box**.
3. Add **four regions** to the initial one, for five regions total, in this order:

| Region | Length / unit | Orientation | Align | Pack |
| --- | --- | --- | --- | --- |
| `header` | 4 Form | Horizontal | Middle | Center |
| `spacer` | 1 Form | Not specified | — | — |
| `grid` | 2 Flex | Fill | — | — |
| `spacer2` | 1 Form | Not specified | — | — |
| `buttons` | 1 Flex | Fill | — | — |

Select OK. This creates the structural Home header, collection grid, and a lower controls area.

### 10. Add nested buttons-area regions — 16:54–17:59

1. Add another Flex Layout into Home's `buttons` region, named **Flex Layout Buttons**.
2. Add **two regions** to the initial one to make three:

| Region | Length / unit | Orientation | Align | Pack |
| --- | --- | --- | --- | --- |
| `count` | 1 Flex | Horizontal | Top | End |
| `spacer` | 1 Form | Not specified | — | — |
| `cart` | 1 Flex | Horizontal | Top | Start |

3. Select OK.

**No count editor, add-to-cart button, drag/drop handler, or cart logic is inserted in these regions in Part 7.** The regions are preparation for Part 8.

### 11. Add Home title and bind Items grid — 17:59–18:55

1. Into Home `header`, draw Static **Static Home**: Caption `s home`, Theme Class `Header`, Justification Center, Width **20**, Height **1.5**, **No Colon = True**.
2. Into Home `grid`, draw a Grid named **Grid Items**.
3. Set grid **Binding Type = Secondary Collection**.
4. Use the Binding ellipsis to select the previously configured **Items** secondary collection.
5. Select OK, then **Regenerate Form** (narrated tutorial lifecycle operation).
6. The narrator stops the construction here and previews Tile Forms and completion in Part 8.

**Claim limit:** The transcript says the grid is bound, but provides no grid-column definition, item listing screenshots, tile design, data-load command, UI navigation event, responsive testing, or verified runtime shopping behavior.

## Configuration quick reference for agents

### Collections, resources, and dependencies

| Target | Field/value | Source timestamp |
| --- | --- | --- |
| Demo form | `Customer Portal`, Flex → Basic; Form Unit = Character | 00:50–03:27 |
| Primary Collection | Orders IDO | 03:27–03:40 |
| Secondary Collection | Items IDO | 03:45–04:10 |
| Header/Footer theme class | Blue Background | 05:20–05:34; 08:51–09:03 |
| Title/ID theme class | White Header | 06:38–07:00; 08:07–08:38 |
| Menu and Sign-In button class | Blue Button | 11:06–12:01; 14:09–14:34 |
| Sign-In/Home title theme class | Header | 12:14–12:43; 17:59–18:26 |
| Header icon | Bitmap File `customericon.png` | 07:31–08:07 |
| Sign-In artwork | Bitmap File `customersignin.png` | 12:43–13:08 |
| Customer-ID data input/display | Variable `Customer ID` | 08:07–08:46; 13:49–14:09 |
| Items collection display | Grid Items → Secondary Collection → Items | 18:26–18:55 |

### Layout length and margin conventions

- **Units are not interchangeable:** form-region length (e.g. 4 **Form**), relative weight (e.g. 5 **Flex**), and component dimensions (e.g. Width 20 / Height 1.5) appear in different UI fields. The transcript does not establish conversion rules across them.
- **Margin ordering:** `Left,Top,Right,Bottom`; `1,0,0,0` means one character left, `2,0,0,0` two left, `0,1,0,1` one top and bottom, according to narration.
- **Root layout:** Vertical Box; fixed Header/Footer and flexible Main.
- **Nested Home layout:** Vertical Box; Header / Spacer / Grid / Spacer / Buttons.
- **Missing UI details:** Exact constraints behind `Max Length`, minimum length, overflow/scroll behavior, mobile viewport result, default child orientation for spacer regions, and actual Grid Items columns are not supplied.

## Sequence-sensitive checks / source ambiguities

1. **Variable creation is absent.** Binding the two header/sign-in components to `Customer ID` is shown in words; defining a valid form variable or proving its persistence is not.
2. **No sign-in implementation.** The “Customer Sign-In” page has text, images, Edit, and Button only. Do not misreport customer authentication, identity verification, or access control.
3. **Part 7 does not finish the portal.** The narrator explicitly says Tile Forms and finishing Customer Portal are Part 8 topics. Cart contents, drag/drop and visibility switching are not yet supplied.
4. **Button Sign In dimensions appear inverted.** The transcript says *Height = 15, Width = 2* for the first menu button; the two following menu buttons use Width = 15, Height = 2. Preserve this discrepancy rather than substituting a guessed correction.
5. **Source speech-recognition errors:** `mongus` (Mongoose), `idle` (IDO), `flicks` (Flex), `a line` (Align), `pac` (Pack), and `mongoose.m4.com` (closing narration). These remain unmodified in the appendix.
6. **Exact string resource spelling:** “s customer portal”, “s customer id”, “s sign in”, “s cart”, and “s home” are spoken; exact capitalization/compact IDs must be recovered from verified metadata rather than assumed.
7. **Component naming ambiguity:** `Static Cust ID` vs `Static Cust ID 2` are different roles; do not bind the Sign-In text label to the variable by mistake. One static renders a string caption; another static displays the variable; one edit captures it.
8. **Main layout type:** No explicit switch of **Flex Layout Main** Type is narrated. Avoid claiming a stored Horizontal Box setting without an observed control value.
9. **Regeneration:** The instructor invokes this many times and describes Save/Close/Reopen. A controlled persistence experiment must distinguish those lifecycle transitions from ordinary Save and ordinary close/reopen.
10. **Assets not supplied:** `customericon.png` and `customersignin.png` are named in narration, but their bytes and actual library presence are unavailable here. Do not import replacements or overwrite an existing library entry by guesswork.
11. **No live verification:** The user supplied transcript, not UI screenshots or runtime evidence, so all expected state descriptions above are based on narration only.

## Controlled learning experiments — suggestions only; not approved to execute

Choose **one small capability** per authorized experiment, with an `FX_` artifact, User scope where approved, fresh preflight, precise lifecycle steps, and evidence:

1. **Flex wizard discovery (read-only):** verify whether the current Designer exposes **Flex → Basic** and **Pixel/Character** form units; stop without creating a form.
2. **Region attributes read-only inspection:** on an already-authorized `FX_` Flex Layout, record current **Type, regions, Length/Unit, Orientation, Align, Pack, Margin** controls. No mutation unless separately authorized.
3. **Single region-property persistence:** approve one change on a disposable `FX_` Flex Layout; Save, inspect clean state, ordinarily close/reopen, verify same Form Name and User scope, and report whether the property recovered.
4. **Secondary collection discovery:** read-only inspect Collection picker and Binding Type choices, without changing the active target or regenerating the form.
5. **Variable-binding discovery:** only if approved as a **new isolated experiment**; do not treat it as a workaround for previously blocked form-variable tests, and do not assume `Customer ID` exists.

The list is **not** a queued batch. Never execute all five from reading this file.

## Suggested evidence and acceptance rubric (for separately approved tests)

- **Preflight:** capture signed-in session/tenant/config environment; permitted Designer and Web Client tabs; target Form Name, ScopeType, ScopeName, state and approved `FX_` identity; confirm no existing object will be replaced.
- **Before change:** full form/layout hierarchy, region IDs/count/order, selected control label, exact properties/unit fields, collection identities, and a screenshot or reliable UI snapshot.
- **Operation:** change only what the approved brief says; record the exact UI path and any prompts. Do not normalize inferred settings in place of observed ones.
- **After change:** verify changed property and no unrelated mutations, Save status when allowed, and explicit error/success message.
- **Persistence:** only when authorized, perform the exact allowed ordinary close/reopen or regeneration transition, and verify restored Form **Name + ScopeType + ScopeName** and the specific property/collection binding again.
- **Runtime:** only if authorized, inspect actual rendering and event/variable state; record screen size and data rows when making any responsiveness or grid claims.
- **Outcome:** use **observed / replay_verified / blocked / not tested** based on collected evidence; no acceptance checks pass because a historical narrator describes a result.

## Source limitations

This file was derived **only from the operator-provided automatic transcript**. No frames, screenshots, image assets, IDO metadata export, saved form definitions, or runtime results were supplied. Interpret the tabulated values as transcript extraction, not verified current Mongoose 2026.x instructions. The original wording and timestamps are retained without editorial correction below.

## Full supplied transcript (verbatim operator text, timestamps retained)

```text
[0:00] hi there this is caitlin porter from the mongus enablement team welcome to part 7
[0:05] of the mongoose hello world training series in the previous videos we have leveraged the
[0:09] powerful productivity user interface for building out the data model and ui for our store we could
[0:15] run our app right now from the browser but the ui currently requires some orientation from our users
[0:21] in this video we'll get you started with building out a zero training portal for our store
[0:26] this portal will consist of three different screens the first will be
[0:29] a customer sign-in page where they can sign in with their customer id
[0:33] the second will be a home page where they can add items to their cart by dragging and dropping and
[0:39] then third will be a cart view where they can view all of the items that they added to their cart
[0:44] okay let's get started hit the designer icon from the toolbar to open up the web designer
[0:50] let's set the editing scope to site default then hit ok select the new form definition icon from
[0:56] the toolbar and for the category select flex and for the wizard select basic then hit ok
[1:05] let's pause for a second and go over the basics of flex forms and flex layout components
[1:10] flex forms use flex layout components to render all other components allowing you
[1:14] to create forms that are dynamically responsive to the viewing environment this allows you to
[1:19] create a single form that fits in the browser tablet or mobile device all simultaneously
[1:25] a flex layout component is a container component which is used to flexibly house other components
[1:31] each flex layout component can be divided into different horizontal or vertical regions and
[1:36] each region can contain multiple child components you can even nest flex layout components inside
[1:42] regions of other flex layout components you can nest these components as many levels deep as
[1:46] you need to accomplish your form design with the flex layout component you can group the regions
[1:52] horizontally or vertically horizontal boxes will arrange the regions horizontally from left to
[1:57] right and vertical boxes will arrange the regions vertically from top to bottom the length and units
[2:04] attributes control the individual length of each region of a flex layout component length can be
[2:09] expressed in fixed character units or expressed as flex units which are equal portions of the total
[2:15] available width or most often they can be combined to create fixed and flexible regions within a form
[2:23] the orientation attribute specifies how the components should be arranged within a region
[2:27] the pack and align attributes work together to position the child components
[2:32] when the flex layout region is vertically oriented use a line to position the child
[2:36] components at the left center right or to stretch them to fill the entire width of the region
[2:42] use pack to position the child components at the start center or end of the region
[2:47] when the flex layout region is horizontally oriented use a line to position the child
[2:52] components at the top middle bottom or to stretch them to fill the entire height of the region
[2:58] use pac to position the child components at the start center or end of the region now
[3:03] that we know the basics with flex forms and flex layout components let's keep going in building our
[3:08] first flex form select ok and when the form wizard opens name the form customer portal
[3:15] for the unit you have the option to select between pixel or character for the purposes of this demo
[3:21] let's select character and then hit next hit finish to create your form after the form opens
[3:27] let's add some collections to the form expand the details pane at the bottom and under the
[3:33] collections tab select primary collection and set it to our orders idle you should get a prompt
[3:40] telling you to regenerate your form we need to add another collection to the form so we'll do this
[3:45] after hit the new icon from the bottom and for the secondary collection let's set it to our items ido
[3:53] hit ok at the second prompt and now we can regenerate a form using the icon from the toolbar
[3:58] this will save the form close it and reopen it all in one step this step is necessary whenever a new
[4:04] collection is added to the form sometimes you'll also have to use this when you make ui changes
[4:10] next let's utilize flex layout components to layout our form select the flex layout component
[4:15] that was automatically added to our form and then select the edit flex layout attributes button at
[4:20] the top left corner the flex layout attributes can also be accessed from the properties panel under
[4:25] layout flex attributes by clicking the ellipsis by default the flex layout component arranges
[4:31] the regions horizontally let's change this so they arrange vertically change the type to vertical box
[4:37] select the index region 0 and let's give it an id of header let's assign it a length of four
[4:46] let's use form units and let's set the orientation to fill
[4:53] then select index one and let's rename it to main let's give it a length of 1 a unit of flex
[5:01] and an orientation of fill lastly select the region index 2 and let's rename it to footer
[5:09] give it a length of two form units and set the orientation to fill
[5:16] then hit ok next let's build the header for our form
[5:20] grab another flex layout component and drop it into the header region with our new component
[5:25] still selected let's rename this to flex layout header then set the theme class to blue background
[5:34] next select the edit flex layout attributes button in the top left corner we're going to split this
[5:41] up into two regions so add another region below using the icon rename the first region to header
[5:48] give it a length of one flex set the orientation to horizontal align it to the middle and pack set
[5:56] it to start then select the second region let's give it an id of user give it a length of one
[6:02] flex unit and set the orientation to horizontal set the alignment to middle and the pack to end
[6:11] let's also set a margin here set the margin equal to one comma zero comma zero comma zero
[6:17] the margin is defined as left top right bottom in that order so our default margin will set one
[6:25] character to the left and this applies to all of the components within that region hit ok and now
[6:31] grab a static component from the toolbox and drop it into the header region of flex layout header
[6:38] rename the component to static header give it a caption of s customer portal hit the ellipsis
[6:45] to create the string and then let's add a theme class of white header set the justification to
[6:53] left scroll down to the layout section and set the width to 40 and the height to 1.5
[7:00] then under miscellaneous set no colon to true to see those changes regenerate the form from the
[7:06] icon on the toolbar now i want to add some spacing to the left of the static component we just added
[7:13] click on the component and then hit the edit flex layout attributes button this
[7:18] allows us to set a margin on just one component instead of all of the components within a region
[7:24] set the margin to two comma zero comma zero comma zero to add two characters at the left
[7:31] next grab two more static components and drop them both into the user region of flex layout header
[7:38] select the first static component and rename it to static cust icon give it a bitmap file of
[7:46] customericon.png this should be one of the images that you imported in one of the earlier videos
[7:54] set the justification to right and scroll down to the layout section and set the width to 4
[8:00] and the height to 1.5 then set no colon at the bottom to true select the second
[8:07] component and give it a name of static cust id let's set the theme class of white header
[8:16] set the justification to left and let's bind this to a variable set the binding type to variable
[8:25] and then in the binding field click the ellipsis set it to customer id then hit ok
[8:32] scroll down to the layout section and set the width to 10 and the height to 1.5 set no colon
[8:38] to true to see your changes regenerate the form now you can see our customer icon image and an
[8:46] empty static component that will be bound to our customer id variable later on let's build our
[8:51] footer now grab another flex layout component from the toolbox and drop it into the footer region
[8:57] rename the component flex layout footer and then assign it the blue background theme class
[9:03] once you're done with that regenerate the form to see your changes
[9:06] now grab another flex layout component and drop it into the main region
[9:11] rename it to flex layout main then click the edit flex layout attributes button in the top left
[9:16] corner we need a total of six regions so click the new icon on the bottom and add five new regions
[9:25] click region 1 and let's rename it to menu give it a length of 20 form units an orientation of
[9:31] vertical and alignment of center and a pack of start let's set the margin on this to zero
[9:38] comma one comma zero comma one select the second region and rename it to spacer one
[9:46] leave the default which is one flex select region 3 and rename it to sign in page give it a length
[9:53] of 5 flex units set the orientation to vertical set the alignment to center and set the pack
[10:01] to start select region 4 and let's rename this to home page give it a length of 5 flex
[10:10] and set the orientation to fill select the 5th region and let's rename this to cart page give it
[10:16] a length of 5 flex set the orientation to vertical the alignment to stretch the pack to start and set
[10:28] the default margin to 0 comma 1 comma zero comma one select the last region and rename it to spacer
[10:35] two leave the default of one flex now let's some maximum lengths on our regions so they don't
[10:41] stretch too wide across the screen reselect our home page region and set the maximum length to 50.
[10:49] select the cart page region and set the maximum length to 65.
[10:54] once you're done with that hit ok now let's create our menu on the left grab three button components
[11:00] and place them into the menu region of flex layout main select the first component and rename it to
[11:06] button sign in give it a caption of s sign in and create the string by clicking the ellipsis
[11:15] give it a theme class of blue button and then under the layout section
[11:20] set the height to 15 and the width to 2. select the second button and rename it to button home
[11:28] give it a caption of s home and create the string value set the theme class to blue button
[11:36] and then under the layout section set the width to 15 and the height to two select the last button
[11:44] and let's rename it to button cart give it a caption of s cart and then create the string value
[11:53] assign it the theme class blue button and under the layout section set the width to 15
[12:01] and the height to 2. then regenerate your form to see your changes next let's build all the
[12:08] customer sign in page where they can sign in with their customer id grab a static component from the
[12:14] tool box and drop it into the sign in page region of flex layout main rename it to static sign in
[12:23] give it a caption of s sign in set the theme class to header set the justification to center
[12:34] and then set the width to 20 and the height to 1.5 set no colon equal to true
[12:43] grab another static component from the toolbox and drop it into the same region
[12:49] let's name this component static image 1 and let's assign it the bitmap file of customersignin.png
[13:00] set the width to 21 and the height to 8. then set no colon equal to true grab another static
[13:08] component from the toolbox and drop it into the same region let's name this component static
[13:15] cust id 2 and give it a caption of s customer id click the ellipsis to create the string
[13:24] set the justification to center and then set the width to 20 and the height to 1.5
[13:33] set no colon equal to true now let's grab an edit component and drop it into the same region
[13:41] rename the component edit cust id and set the justification to center
[13:49] we also want to bind this to our customer id variable so for the binding type field
[13:55] select variables and click the ellipsis for the binding type in customer id
[14:03] set the width to 20 and the height to 1.5
[14:09] now grab a button component from the toolbox and place it in the same region let's rename this
[14:15] button sign in 2. give it a caption of s sign in and for the theme class select blue button
[14:27] on the size set the width to 20 and the height to 1.5 you might need to regenerate your form
[14:34] here to see your changes select the static sign-in component and hit the edit flex attributes button
[14:41] let's set a margin here set the margin equal to 0 comma 1 comma 0 comma 1
[14:48] and then hit ok select the static image 1 component and let's set a margin there as
[14:53] well click on the component and select the edit flex attributes button set the margin
[14:59] here to 0 comma 1 comma 0 comma 1. then hit ok let's do the same for the sign in button
[15:07] click on the component and hit the edit flicks attributes button set the margin here to zero
[15:12] comma one comma zero comma one then hit ok this will apply a margin of one character at the top
[15:19] and one character at the bottom for the components that we specified now that we have our sign in
[15:24] page complete let's go ahead and save and move on to the home page the home page will be where users
[15:30] can view and add items to their cart start by grabbing a flex layout component from the tool box
[15:36] and dropping it into the home page region of flex layout main rename it flex layout home
[15:44] because this region is set to fill notice that our new flex layout component fills up
[15:48] the entire region with flex layout home still selected click the edit flex attributes button
[15:56] change the type to vertical box and then using the new icon on the bottom left
[16:01] add four regions select the first region and rename it to header give it a length of four
[16:08] form units set the orientation to horizontal set the alignment to middle and the pack to center
[16:20] select the second region and let's rename this to spacer set the length as one form unit
[16:28] select region 3 and let's rename this to grid give it a length of 2 flex and set the orientation to
[16:37] fill then select the fourth region and rename this to spacer2 give it a length of one form unit
[16:47] then select the last region and rename it to buttons give it a length of one flex and set
[16:54] the orientation to fill hit ok and then grab another flex layout component from the toolbox
[17:02] and drop it into the buttons region of flex layout home
[17:06] rename it to flex layout buttons then select the edit flex attributes button in the top left corner
[17:14] using the new icon in the bottom left add two regions
[17:21] select the first region and rename it to count give it a length of one flex
[17:28] and set the orientation to horizontal set the alignment to top and the pack
[17:34] to end select the second region and rename it to spacer give it a length of one form unit
[17:43] then select the third region and rename it to cart give it a length of one flex set the
[17:50] orientation to horizontal and the alignment to top and then set the pack to start hit ok and
[17:59] then grab a static component from the toolbox and drop it into the header region of flex layout home
[18:06] rename it to static home give it a caption of s home set the theme class to header set the
[18:15] justification to center and give it a width of 20 and a height of 1.5 then set no colon to true
[18:26] next grab a grid component from the toolbox and drop it into the grid region of flex layout home
[18:33] rename it to grid items set the binding type to secondary collection
[18:40] and click on the ellipsis for binding select our secondary collection which is items
[18:47] then hit ok and then regenerate your form let's stop here and wrap up what we've done so far
[18:55] we got you introduced to flex forms and flex layout components and got you started building
[19:00] out our consumer end user interface for the customer portal in the next video we'll introduce
[19:06] you to tile forms and we'll wrap up the series by completing our customer portal form for more
[19:12] tutorials and documentation check out the mongoose portal at mongoose.m4.com thanks for watching
[19:28] you
```
