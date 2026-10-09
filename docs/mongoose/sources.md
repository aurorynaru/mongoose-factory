# Mongoose documentation sources

Index of external Infor documentation for the specialist and coordinator.

**Trust:** every source here is **unverified** under AGENTS.md. Documentation describes
the product in general; verified recipes and experiment records describe this
environment. When they disagree, the records win and the disagreement is worth an
experiment.

**Handling:** Infor's PDFs carry a confidentiality notice limiting use to licensed work.
Link to them; do not commit copies of the PDFs. Video transcripts are kept for
private reference only; this repository must stay private while it holds them.

Source precedence for any claim:
1. Verified recipes and records (`recipes/`, `experiments/`)
2. Observed records
3. Documentation below (unverified)
4. Model knowledge (unverified)

## Primary: form development (current scope)

| Source | Version | Covers | Notes |
|---|---|---|---|
| [Infor Mongoose Application and Form Development](https://docs.infor.com/csi/10.x/en-us/csbiolh/mgwsolh_cl_sl/default.html) | CSI 10.x | Design Mode and Web Designer, New Form Wizard, form types (MultiView, Grid Only, Query, Report, Tile, Flex), components and properties, data binding, IDO collections, events and event handlers, form scripts, validators, global objects, **portals**, master/derived forms, themes, deployment, WinStudio API, diagnostics | Main reference for the current learning scope |
| [Infor Mongoose Core Development Guide](https://docs.infor.com/csi/10.x/es-es/csbiolh/mgsdug_cl_sl/default.html) | CSI 10.x | IDOs (create, extend, replace, properties, methods), tables and joins, **form control (checkout, check-in, locking)**, application event system, schema, DataViews, DataSearch, form extensions | `es-es` URL, but the content was reported as English |
| [Application Development with Mongoose](https://developer.infor.com/tutorials/application-development-with-mongoose) | Not stated | 8-module tutorial: forms with data, IDO properties, events, manual modifications, table joins, scripting, responsive Flex design, navigation | Developer portal. Module 7 (responsive Flex) is outside the current scope |
| [Infor Mongoose - Hello World pt. 1 of 8](https://www.youtube.com/watch?v=oHZ493u-snM) (video series, Infor YouTube channel) | Not stated | Video companion to the 8-module Hello World tutorial above (match assumed from title and module count, not yet confirmed) | Models can't watch video. Transcripts go in `transcripts/` (see below) |

Transcripts for parts 1–8:
- `transcripts/hello-world-pt<N>.md`: structured, model-friendly versions written by GPT,
  each ending with the full supplied transcript. Use these first.
- `transcripts/raw/raw-hello-world-pt<N>.txt`: the original timestamped transcripts.
  When a step, spelling or name matters, check it here; the structured versions are
  paraphrases and can contain rewriting errors.

They describe Infor's demo environment (Site Default scope, non-FX_ names), not this one,
so they rank with documentation (unverified) and never authorize an action.

## Secondary: background and later topics

| Source | Version | Covers | Notes |
|---|---|---|---|
| [Infor Mongoose Basics User Guide](https://docs.infor.com/csi/10.x/fr-fr/csbiolh/mgbaug_cl_sl/default.html) | CSI 10.x | End-user navigation, form types, records, **filtering and sorting**, collections, workspaces, reports, workflows | No Web Designer, IDO, event, script or portal content. Relevant to Select Form filtering experiments |
| [Infor Mongoose Basic Concepts User Guide](https://docs.infor.com/csi/9.00.x/en-us/useradminlist/mg_Basic_Concepts_User_Guide_42978.pdf) | 9.00 (2014) | Explorer, keyboard navigation and shortcuts, forms, fields, records, collections, filters, wildcards, caps | Older release. Its keyboard material may differ from the web client |
| [Mongoose IDO Development Guide](https://support.infor.com/esknowbase/root/DLPublic/33343/Mongoose900-IDODevelopmentGuide.pdf) | 9.00 | IDO .NET API, LoadCollection and UpdateCollection, IDO extension classes, custom methods, event handlers, debugging | Server-side .NET code; beyond the current browser-only scope |
| [Infor Mongoose Creating and Customizing Reports](https://docs.infor.com/csi/9.00.x/en-us/useradminlist/ReportingGuide_32998.pdf) | 9.00 (2013) | Report definitions from stored procedures or IDOs, deployment, TaskMan, building a report criteria form | Later topic |

## Navigation hubs (links to other guides, little content of their own)

- [CloudSuite Industrial help library](https://docs.infor.com/csi/10.x/es-es/csbiolh/default.html?helpcontent=tzh1598607376046.html) (CSI 10.x, Spanish locale): administrator, user and developer guide index.
- [Factory Track (M3) library](https://docs.infor.com/factorytrack/2026.10/en-us/ftm3olh/default.html?helpcontent=ezc1598609317633.html) (2026.10): links to Mongoose Administration, Basics and Core Extensibility guides.

## Local copies: read these first

`guides/` holds **35 Markdown files (341 pages)** converted from the Infor Mongoose
2026.x online guides, listed in [guides/INDEX.md](guides/INDEX.md). Conversion kept
Infor's wording (formatting only) and was checked against the saved source pages; each
page keeps its `Source:` URL. Source metadata reports release 2026.07 under the 2026.x
URLs. Trust: **unverified**. The conversion is faithful, but behaviour in this
environment is not confirmed.

Three section pages had no article body and carry `[NOT RETRIEVED]` markers in
`guides/ido-extension-classes.md`; their sub-pages are converted.

Guides covered: Application and Form Development, Core Extensibility, Administration,
IDO Integration with External Applications, IDO Development. Converted with the tool in
`C:\AI\getData` (conversion report: `artifacts/completion-report.md` there).

Known gap: no standalone reference for `UserControl.js` was found.

## Mongoose 2026.x guides (match this environment)

Library: https://docs.infor.com/mg/2026.x/en-us/mongooseolh/default.html
(guides: `mgwsolh_mg` Application and Form Development, `mgsdug_mg` Core Extensibility,
`mgbaug_mg` Basics, `mgaug_mg` Administration, `config_mgt_mg` / `config_mgt_gl_mg`
configuration management). Each guide's `default.html` holds its full table of contents.

### Original conversion list (done: superseded by `guides/INDEX.md`)

Base A = `https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgwsolh_mg/`
Base C = `https://docs.infor.com/mg/2026.x/en-us/mongooseolh/mgsdug_mg/`
"Section" means the page plus its child pages in that guide's table of contents.
Titles come from the guides' navigation; page contents were not reviewed yet.

Priority 1:

| Topic | Page |
|---|---|
| Using the Web Designer (section: about, toolbar, launching, modifying a form, creating a form, bound components, global objects) | A + `wik1708998460833.html` |
| Creating a Build from Scratch form (Web Designer) | A + `isi1501810350675.html` |
| Adding an IDO collection to a form | A + `lsm1454148019049.html` |
| Working with collections (section: binding collections and components, refreshing, query form filters) | A + `hkd1710463091518.html` |
| Form events and event handlers (section: event model, standard/custom events, working with handlers, response types) | A + `udt1710823677133.html` |
| Portal-type shell forms (section: creating one, its form variable) | A + `lsm1454148018659.html` |
| Form Control: about, checking out, checking in, unlocking | C + `lsm1454147708525.html`, `lsm1454147708884.html`, `lsm1454147709399.html`, `lsm1454147709726.html` |

Priority 2:

| Topic | Page |
|---|---|
| Working with components (section), Framework Components | A + `aai1717101804884.html`, `cur1717118354110.html` |
| Binding components to collections or properties | A + `lsm1454148034805.html` |
| About scripts; script editing in the Web Designer | A + `lsm1454148040187.html`, `atm1601017723754.html` |
| Variables | A + `lsm1454148044414.html` |
| Managing master and derived forms | A + `lsm1454148018191.html` |
| About IDOs; extending and replacing IDOs | C + `lsm1454147697855.html`, `lsm1454147698026.html` |
| Application Event System (overview only) | C + `bqb1500867558215.html` |
| Extending and replacing forms | C + `laf1525402966322.html` |

Not converted (out of current scope): Design Mode (Windows client) pages, Responsive
Form Builder, IDS forms, Report forms, Runtime Builder, themes, deployment.

## Finding more guides

[docs.infor.com search](https://docs.infor.com/en-us/search) with the product filter
**Infor Mongoose** and language **en-us** lists Mongoose's own releases (2025.x,
2026.x, 2026.10) and titles such as the *Infor Mongoose Core Extensibility Guide*. The
search page needs a browser, so a person (or the worker in a scoped task) has to use it;
WebFetch can't. Add the 2026.x guides here as you find them (this environment runs 2026.09.08).

## Open questions

- Environment version is known: **Mongoose 2026.09.08** (Web Client, application and
  form-definition databases; Designer About dialog, recorded by EXP-002 in
  `environments/current-environment.md`). Prefer **Infor Mongoose 2026.x** guides from
  docs.infor.com. The CSI 10.x guides above are related but older; treat 9.00-era
  behaviour as historical until an experiment confirms it.
- English (`en-us`) versions of the `es-es` and `fr-fr` URLs have not been checked.
