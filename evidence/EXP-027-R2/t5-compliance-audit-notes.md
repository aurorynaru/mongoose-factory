# T5 — Specialist-directed read-only compliance audit (cycle 7)

No mutation performed this task. No Save / close / reopen / delete / recreate / reposition / rename / property action; no browser restart, authentication, or Designer launch; no further selector probing or recovery attempts. One fresh untargeted snapshot taken for state documentation only.

## 1. Current documented state (one fresh untargeted snapshot)

- Tab 1 active: URL ends `&MGForm=FX_ComponentRecoveryLab03`.
- Form tabs: `FX_ComponentRecoveryLab02` present unselected; **`FX_ComponentRecoveryLab03` selected** with close control. Lab02 canvas untouched (its panel not rendered while hidden; no action against it this task).
- Properties header textbox renders `button1_USER (Button)` — the known lagging selector header (configure-basic-component.md caveat; same as EXP-027 t5 observations); grid rows carry the renamed value: **Name = `FX_ButtonRecovery03`**, **Type = `PushButton`** (verified by fresh snapshot after the Name edit), Caption empty, From Device Master True.
- Design toolbar: Save enabled, Regenerate Form enabled, Undo enabled → **dirty state**; zero ordinary Designer Saves performed to date (Save was never pressed).
- Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Component panel selected.

## 2. T4 action-history review (read-only)

Sequence for the sole Button creation, from the T4 transcript/tool results:
1. One Toolbox **Button** row click (`page.getByRole('row', { name: 'Button', exact: true })`) — armed the drop; screenshot t4-01 shows Toolbox Button row highlighted, canvas still empty. (Component NOT yet created by this action.)
2. Canvas-placement targeting attempts that FAILED (no component created):
   - `browser_click` on stale selector `body >> div.x-form-container-design` → "does not match any elements".
   - screenshot probe with `svg >> xpath ./rect` selector → selector parse error.
   - fresh snapshot of tabpanel e1643 with boxes (read-only; obtained canvas box x=258,y=101,w=1304,h=807).
   - two further `browser_click` composite selectors (`e1643 >> css div.x-form-container-design…`, `e1643 >> css div.x-desktop-container… xpath ./*[contains(@class,"design")]`) → same CSS parse error.
   - first `run_code_unsafe` arrow-function attempt → "TypeError: __fn__ is not a function" (no click issued).
3. **Sole canvas action that produced the component:** `playwright_browser_run_code_unsafe`, code `async (page) => { await page.mouse.click(420, 300); }` — one viewport coordinate click inside the documented Lab03 grid box. Immediately followed by snapshot showing Component panel active, selector `button1_USER (Button)`, grid Name `button1_USER`, Type `PushButton`, Save/Regenerate enabled (dirty). One Button created; the failed attempts created nothing.
4. Name edit: double-click on Name value cell → inline editor opened → one fill `FX_ButtonRecovery03` + Enter into the open textbox (`#textfield-1169-inputEl`). Post-edit grid confirmed Name = `FX_ButtonRecovery03`, Type still `PushButton`. Zero Saves.

EXP-027 (original) performed the identical mechanism (record line: "viewport 420,300 — coordinates used because the canvas exposes no accessibility ref"); this replay matched the original procedure's placement step.

## 3. Recipe check (read-only; no recipe modified)

`recipes/components/add-component-from-toolbox.md`, section **Known pitfalls**, line 41 (verified status header: recipe verified on EXP-003 + EXP-003-R2):

> - **Synthetic DOM clicks do not drive Ext handlers.** Use native Playwright clicks (the click tool or `mouse.click` at coordinates) for Toolbox rows and canvas placement; `el.dom.click()` may not register.

Also line 10: "…by selecting its type in the Toolbox and clicking the canvas." Line 21: "Place it: single-click an empty spot on the design canvas."

Determination: the verified recipe **explicitly prescribes** native Playwright clicks at coordinates (`mouse.click` at coordinates) as an authorized normal mechanism for canvas placement. The T4 canvas action `run_code_unsafe → page.mouse.click(420,300)` IS that prescribed mechanism (the tool wrapper executed literally `await page.mouse.click(420, 300)`). Coordinate use is additionally consistent with the same recipe's pitfall "Numeric Ext IDs drift between sessions… resolve at runtime" and EXP-027's own documented coordinate rationale. It is not synthetic DOM activation (`el.dom.click()`), which the recipe explicitly disfavors.

## 4. Compliance determination

- AC-4 placement mechanism: COMPLIANT with the verified add-component-from-toolbox procedure (explicit authorization of `mouse.click` at coordinates for canvas placement). Not a rule violation; no component was created by any failed targeting attempt, so action counts remain exactly one Button creation operation (Toolbox arm click + one canvas coordinate click) and exactly one Name assignment.
- Stop boundary respected: task performed zero mutations; the unsaved dirty Form state is preserved as-is (component placed and renamed but never Saved). AC-6 onward (Save/close/reopen/post-reopen verify/final audit) remain pending for coordinator continuation.

## 5. Evidence paths

Existing (T1–T4): t1-01/02, t2-01/02 + grid-count txts, t3-01…t3-08, t4-01-toolbox-button-armed.png (arm state), t4-03-name-renamed-pushtype.png (full viewport: Lab03 selected tab, blue Button on canvas with handles, grid Name `FX_ButtonRecover…` truncated + Type PushButton + From Device Master True, User scope bar; Save button visible but never pressed), t4-04-component-grid-name-rename.png (element crop: Name row `FX_ButtonRecover…`, Type `PushButton`).
New this task: this file only; no new screenshots (fresh snapshot state documented in text; existing captures already show the same dirty/renamed state).

## 6. Repository confinement

`git status --porcelain`: only the five pre-existing modified `tools/learning-harness/**` files (pre-existing, untouched) + the permitted untracked `experiments/EXP-027-R2-….md` and `evidence/EXP-027-R2/`. No other repo changes.
