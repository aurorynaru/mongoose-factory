# FX Mongoose pages

Web pages (HTML/CSS/JS) and C# form scripts that run inside Infor Mongoose Forms as Web User Controls.
Every page can also run on your own machine with test data, so you can design and debug it without Mongoose.

## Quick start

Needs **Node.js 18 or newer** and nothing else (no `npm install`).

```
cd assets
npm run preview
```

Open <http://127.0.0.1:8765/>. It lists every app; click one to open it. Edit a file, then reload the page.
Another port: `npm run preview -- 9000`. Stop with Ctrl+C.

The browser console (F12) shows a `[FX_<App>]` line for every server call: method, arguments, time taken and result.

## Request builder (ask Claude for a new build or a change)

With the preview running, open <http://127.0.0.1:8765/_request/index.html> (also linked from the home page).

- **New build:** the build-request form, sections 1 to 9. Section 4 shows only the blocks for the build types you tick.
- **Targeted change:** pick an app and the page suggests Targets (its files, its form script) and Wheres (C# methods,
  page sections). These are read from the files in this folder, not from Mongoose, so the live version may differ.
- The prompt on the right updates as you type. Red items are required. Orange items are worth a look but won't block you.
  Click an item to jump to its field. On wide screens the section list on the left shows the same status per section.
- **Copy prompt** and paste it into Claude Code in the factory repo, or **Download .md** to keep or share it.
  **Clear form** asks for a second click before it clears.
- **A blank means "ask me":** Claude asks about it before building and never fills it in by guessing.
- Your draft is kept in this browser only (nothing is sent anywhere; the server is read-only).

The page writes the same text as the skill templates (`build-request-prompt.md`, `change-request-prompt.md` in the
`mongoose-builder` skill). If a template changes, update `buildPrompt()` / `changePrompt()` in `_request/app.js`.

## Using other agents and models (OpenCode etc.)

The prompt is plain text, so it works with any coding agent. In the factory repo, OpenCode picks up the same setup
(checked against the OpenCode docs, 2026-10-29; not yet run end to end in OpenCode):

- **Rules:** OpenCode reads `AGENTS.md` (the safety rules and build mode).
- **Skills:** it finds `.claude/skills/<name>/SKILL.md`, so `mongoose-builder` and `mongoose-dx` load as they do in Claude Code.
- **Browser:** `opencode.json` starts the same Playwright MCP server with the same `--secrets` file, so the
  `SECRET_MONGOOSE_*` placeholders work unchanged. Keep the secrets file outside the repo.
- **Not shared:** Claude Code's own memory notes. The rules they hold are also written in the skills.

Which model for which job:

| Job | Model |
|---|---|
| Fill in a request, edit `index.html` / `app.css` / `app.js` with the preview, `npm run flat`, small C# edits | any model |
| Browser builds in the tenant (Designer saves, read-backs, installs) | your strongest model, with reasoning on |

Build mode is long and strict: one change, read back, Save, check scope, never guess a name, stop before any non-FX_
object. Heavily compressed or small models tend to skip read-backs or invent names. Watch the first few builds.

The safety rules are instructions to the agent, not enforced permissions. Keep agent permissions tight (for example,
no `git push`), and check every Designer save until you trust the model.

## How the preview works

- The server (`tools/serve.js`) serves the app folders **as they are**. You open the real `index.html`, not a copy.
- In Mongoose, a page loads `../$app/scripts/UserControl.js`, which gives it `WSForm` (calls to the Form's C# script).
  That file only exists inside the tenant. Locally, the server answers it with the app's own `preview/stub.js`,
  a fake `WSForm` that returns test data in the same shape as the C# script.
- An app without `preview/stub.js` still opens, but shows its "open this page inside the Form" message.
- The server listens on 127.0.0.1 only, so nobody else on the network can reach it.

## Folder layout

```
assets/
  package.json            npm run preview / npm run flat
  tools/serve.js          local preview server
  tools/flat.js           writes the flush-left install copies
  _request/               request builder page (fills the build / change prompt templates)
  _template/              copy this to start a new app
  FX_<App>/
    index.html            markup only
    app.css               all styles (colours and sizes as variables at the top)
    app.js                all behaviour
    FX_<App>.cs.txt       the Form's C# script (one file)
    *.flat.*              install copies: generated, pasted into Mongoose
    preview/stub.js       fake WSForm with test data (preview only, never installed)
```

Older apps (`FX_ASNPortal`, `FX_Inventory`, `FX_ApiPage`) still keep their CSS and JS inside `index.html`.

## Start a new app

1. Copy `_template/` to `FX_<App>/` (the name must start with `FX_`).
2. Rename `FX_App.cs.txt` to `FX_<App>.cs.txt`, then replace `FX_App` / `FX_vAppResult` with your Form name and result variable in `FX_<App>.cs.txt`, `app.js` and `preview/stub.js`.
3. Run `npm run preview` and open the app.
4. For each new server action: add a public method to the C# script, call it from `app.js` with `callServer("FX_Method", [args], done)`, and add a matching fake method to `preview/stub.js`.

## Code layout (keep it easy to read and debug)

- **`index.html`:** markup only. No `<style>`, no inline scripts, no `style=` or `onclick=` attributes.
- **`app.css`:** tokens in `:root` first, then one commented section per page area.
- **`app.js`:** one IIFE with `"use strict"`, then in order:
  1. Config: named constants, with a note on where each value comes from.
  2. State: one `state` object.
  3. Helpers: `log()`, `setStatus()`, `el()`.
  4. Server bridge: `callServer()`, the only code that touches `WSForm`.
  5. One section per feature.
  6. Wiring: event listeners, then start-up inside `MG.onReady`.
- **C# script (`FX_<App>.cs.txt`):** one file, in order:
  1. Header.
  2. Config.
  3. Page actions: one public method each, input checked first, one `try/catch`.
  4. Feature helpers.
  5. Outside services.
  6. Result writers.

  Error messages say what failed and what to do next.

## Install into Mongoose

1. `npm run flat -- FX_<App>` writes `index.flat.html`, `app.flat.css`, `app.flat.js` and `FX_<App>.flat.cs.txt`.
   Mongoose's Script Editor stores each line with a length limit, so the pasted code must be flush-left.
2. Paste each flat file into its Web User Control Asset (`FX_<App>/index.html`, `app.css`, `app.js`) and the form
   script into the Form's Script Editor, then Save. `preview/stub.js` is never installed.
3. Open the Form in the Web Client and test it there. A working local preview does not prove the tenant behaves the same.

The full step-by-step procedure (Designer clicks, readback checks, evidence) is in the factory's
`mongoose-builder` skill: `playbooks/web-user-controls.md`.

## Rules for everyone editing

- Object names start with `FX_`. Never edit Mongoose's own assets (`$app`, `mongoose`, `soho*`).
- **No secrets or tenant details in any file:** no passwords, tokens, emails, tenant IDs, server names or full warehouse database names.
  Assets are readable by any tenant user with asset access, and this folder is shared.
- Stubs use made-up test data only. Never paste real customer or order data into `preview/stub.js`.
- Change the source files (`index.html`, `app.css`, `app.js`, `*.cs.txt`), then regenerate the flat copies with
  `npm run flat`. Never edit a `*.flat.*` file by hand.
