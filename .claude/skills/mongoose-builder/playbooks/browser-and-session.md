# Playbook: Browser driving, Designer launch, session expiry

Sources:
- `recipes/session/session-expiry-and-stale-designer.md` (observed).
- `tools/claude-harness/protocol/worker-preamble.md`: standing rules from about 140 runs.
- `environments/current-environment.md`.

## Environment
- **Portal:** `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`. Open Mongoose from the portal menu by searching `Mongoose`.
  - Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- **Web Client:** a cross-origin iframe inside the portal tab.
- **Designer:** a separate browser tab, `WSWebClient/designer/default.aspx?MGForm=<form>`. Open it from the Web Client's Designer split button ("Open designer in a new window"), not the wrench ("Runtime Builder…").
- **Account check (every task):**
  - Web Client header: `<user> | <config>`.
  - Designer status bar: `[ ScopeType: User / ScopeName: <user> ]`.
  - If it is the read-only Mock account and the task mutates anything, stop.

## Tooling
- **Preferred:** Playwright MCP with the secrets file (`.mcp.json`) for login placeholders. Claude in Chrome is the fallback, using the operator's own signed-in Chrome.
- **Selector order:** role/name, then label, then visible text, then component name (`data-mgcompname`), then generated IDs. Coordinates are a last resort.
  - Coordinates are needed for: canvas adorners, Select File buttons, grid scroll arrows, and controls inside Web User Control iframes.
- **One browser action at a time.** Read-only calls can run in parallel.
- **Tabs:**
  - List tabs before the first select. Chrome doesn't render background tabs, so select a tab before clicking or screenshotting in it.
  - With Playwright, `browser_tabs list` must come before `select` in a fresh session (EXP-054).
- **Snapshots:**
  - Refs go stale. After "Ref not found", take one fresh snapshot and do one corrected attempt. If that fails, stop and report.
  - Designer pages and open Caption lists can produce huge snapshots. Use targeted snapshots of the panel.
- **No browser JavaScript for mutations.** Read-only `evaluate` is acceptable only when the operator allows it. Never bypass the UI through internal stores.
- **Inputs:**
  - Wizard Name comboboxes take one plain **fill**.
  - Select Form and Strings filters need **key-by-key typing**, then Tab/End.
  - String-ID Caption comboboxes need key-by-key typing, then leave by clicking another row.
  - Checkboxes are often covered by a span. Click the **label**.
  - ExtJS combos aren't `<select>`: open the list and click the option.
- **Filter in Place forms** (they open with an empty query, "Filter in Place" in the status bar): run the query with **Actions › Filter › Execute in Place**. Enter in an empty field did not run it (EXP-141).
- **Auto-started rows:** some forms (Deployment, Object External APIs) open with an unsaved `*1` row. Closing the tab without Save leaves nothing behind (EXP-140/141).
- **Open forms:**
  - Web Client: toolbar Open → Select Form (filter Name, key events, double-click the row).
  - Designer: toolbar Open (`data-mgcompname="openButton"`) or the **Form menu recent list**. The Designer Form menu has no Open item.

## Safety controls
- **Designer top-toolbar trash = Delete Form Definition.** Never click it. If its dialog appears, click **No**; Yes has default focus.
- Prompts with default-focus Yes ("Do you want to save the form definition?") need the button label read before clicking.
- Dismiss Infor portal notification banners with their × only.
- End every task with no open native dialogs and no unsaved-change prompts.

## Session expiry (about hourly) and stale Designer
- **Symptoms:**
  - "Session Expired" modal, "Logout Successful" card, or the Infor sign-in page.
  - In the Designer: "The server event processing returned an error…".
  - The console shows `GenerateServerEvent` redirected to `wsfed?wa=wsignin1.0` / CORS.
- **Re-login:**
  1. Navigate the **top-level** tab to the portal URL.
  2. On CloudIdentities, type `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD` (`SECRET_MONGOOSE_TENANT` only if there is a tenant field). Click Sign in once.
  3. Open Mongoose and keep the default config.
  - **Never sign in inside the embedded frame** (mingle-sso refuses to be framed).
  - If Playwright can't click Sign in, ask the operator to sign in manually.
- **Designer recovery:** a Designer loaded before the expiry stays broken. Reload the Designer tab (or open a fresh Designer from the Web Client). Unsaved work is lost.
- **Before redoing anything, inspect.** Saves made before the expiry survive. Never blindly replay.
- **Avoid losing work:** save after every small step and keep sessions short. Re-login proactively when the "Your session is about to expire" strip shows.

## Evidence habits (from AGENTS.md)
- **Where:** screenshots go in `evidence/<BLD-or-EXP-id>/<step>-<what>.png`.
  - Take them at: entering a new designer, before risky mutations, after create, after save, after reopen, and on errors.
- **What to record:** for each decisive screenshot, note what it shows (identity, scope, values) and what it doesn't prove.
- **Long editor content** (assets, scripts): save it with `browser_snapshot { target, filename }` instead of pasting it into the record, and compare it with `tools/compare-readback.js` (see `web-user-controls.md`).
- **Credentials:** never capture them. If a screenshot shows a filled sign-in form, delete it unopened.

## Evidence levels (operator decision, 2026-10-29)
The request sets the level. When it says nothing, use **full**.

- **full** (default; required for production-ready builds and for any build that gets a guide):
  - everything in **light**, plus one screenshot for each user-visible step someone would need to repeat the build: each wizard page, each dialog, each Designer property change, each runtime state checked;
  - name the files in step order (`NN-<what>.png`) so they can be used as guide pictures;
  - for each screenshot, the build record notes what it shows.
- **light** (only when the request says `Evidence: light`; for small or throwaway FX_ changes):
  - only the AGENTS.md minimum: first entry into a new Designer workflow, the before state (rollback baseline) of anything being changed, right after create, after Save, after close/reopen, the runtime result, and every error;
  - the text readbacks don't change: rollback baselines and `tools/compare-readback.js` checks are still required;
  - a light build has no step pictures, so a pictured guide can't be made from it later without redoing the steps. Say this in the plan when a light build may go to production.

## Build guide (PDF or Word, when the request asks for one)
- **Source:** `docs/builds/BLD-NNN-<slug>/guide.md`, using the screenshots in `evidence/BLD-NNN/`. Export it to `guide.pdf` (pdf skill) or `guide.docx` (docx skill) in the same folder, whichever the request names.
- **Contents:**
  - purpose and who uses it;
  - the objects (Form, IDO, table, asset, script, variables) and how they connect;
  - prerequisites and approvals;
  - numbered build steps, each with its screenshot;
  - how to check it works (the acceptance checks);
  - rollback;
  - known limits and open questions.
- **Pictures:**
  - use only screenshots that were taken and opened (inspected) for this build;
  - never describe a picture that wasn't looked at;
  - if a step has no picture, say so in the guide.
- **Sensitive content:** before a picture goes in, check it for emails, account names, warehouse/database IDs, tokens or credentials. Crop or mask it, or leave it out and say so. Name every masked or left-out picture in the build record.
- **Accuracy:** the guide follows the build record. It marks steps by knowledge state (verified / observed / unverified) and doesn't present an observed step as verified.
