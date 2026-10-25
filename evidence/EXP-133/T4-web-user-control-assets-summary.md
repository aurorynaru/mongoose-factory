# EXP-133 T4 — Web User Control assets (FX_Login/index.html, FX_Login/script/app.js)

Date: 2026-10-25 (task window)
Scope: User (`ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`); Version `User version for user anton.ramos@3mworks.com.ph`.
Active Form: `FX_LoginPortal` (Designer tab), Script Language `Visual C#` (T3 change, still uncommitted by an ordinary Save), Save enabled (dirty) at the end; no Save clicked.
Second tab `FX_BridgeTest` left open, untouched.

## Pre-mutation inventory (t4-00)

- Edit > Web User Control Assets > Global Objects dialog, Web Assets top level: `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`.
- No `FX_Login` folder at the top level (exact name, and no case-variant seen in the list). The `FX_Login` folder and its children were absent before creation.
- `FX_Bridge`, `$app`, `mongoose`, `sohoComponents`, `sohoxi` were not expanded or edited.

## Source-review gate

- Approved guidance re-read in this task: `docs/mongoose/guides/user-control.md` lines 200–221 (`WSForm.getVarValue(variableName, callbackFn)`, one-parameter callback) and 247–269 (`WSForm.invoke(methodName, [parameter1[,...]], callbackFn)`, callback optional). The two-string-argument call `WSForm.invoke("FX_ProcessLogin", username, password, cb)` is therefore consistent with the documented pattern. Runtime behaviour is not verified.

## Asset creation and commits

1. **FX_Login/index.html** — Global Objects `+` New, Name `FX_Login/index.html`, OK (t4-01, t4-02). This created the top-level folder `FX_Login` with child `index.html` (Mongoose path behaviour, same as EXP-131 `FX_Bridge/index.html`).
   - Template before edit (t4-06): Mongoose default HTML with `<script type="text/javascript" src="../$app/scripts/UserControl.js">` in the head and an empty body.
   - Pre-commit source (t4-07; readback via find): full content replaced; one `<input type="text" id="FX_LoginUsername">`, one `<input type="password" id="FX_LoginPassword">`, one `<button type="button" id="FX_LoginSignIn">Sign in</button>`, one `<div id="FX_LoginResult">`, dependency `../$app/scripts/UserControl.js` unchanged, FX-owned `<script src="script/app.js">`, inline `<style>` block (no stylesheet asset).
   - Edit Browser File OK: one commit (asset content).
2. **FX_Login/script/app.js** — `+` New, Name `FX_Login/script/app.js`, OK (t4-08, t4-09). Created the nested folder `script` with child `app.js`.
   - Template before edit (t4-12): Mongoose default HTML scaffold (the file was created with HTML content, content type `text/javascript`); replaced in full.
   - Pre-commit source (t4-13; readback via find): see source below.
   - Edit Browser File OK: one commit (asset content).

## app.js committed source (as read back, t4-13 / t4-17)

```
(function () {
  var MIN_USERNAME_LENGTH = 3;
  var MIN_PASSWORD_LENGTH = 6;
  var usernameInput = document.getElementById("FX_LoginUsername");
  var passwordInput = document.getElementById("FX_LoginPassword");
  var signInButton = document.getElementById("FX_LoginSignIn");
  var resultElement = document.getElementById("FX_LoginResult");
  signInButton.addEventListener("click", function () {
    var username = usernameInput.value.trim();
    var password = passwordInput.value;
    if (username.length < MIN_USERNAME_LENGTH) {
      resultElement.textContent = "Username must be at least 3 characters.";
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      resultElement.textContent = "Password must be at least 6 characters.";
      return;
    }
    WSForm.invoke("FX_ProcessLogin", username, password, function () {
      WSForm.getVarValue("FX_vLoginResult", function (value) {
        resultElement.textContent = value;
      });
    });
  });
})();
```

Line-level behaviour (source structure only; no runtime invalid submission was exercised):
- Trimmed username shorter than 3 characters: writes a fixed nonsensitive message to `FX_LoginResult` and returns before `WSForm.invoke`.
- Password shorter than 6 characters (not trimmed): same, fixed message, returns before `WSForm.invoke`.
- Valid input: `WSForm.invoke("FX_ProcessLogin", username, password, callback)`; callback calls `WSForm.getVarValue("FX_vLoginResult", cb)` and assigns the single returned value with `textContent`.
- Neither username nor password is logged, alerted, or stored in a variable.

## Post-commit readback (same session)

- Parent Global Objects OK (one, dialog-level, commits staged asset edits per the EXP-131/EXP-132 precedent; no Form Save). Designer remained FX_LoginPortal, Script Language Visual C#, User scope (t4-15).
- Reopened Edit > Web User Control Assets (read-only):
  - `index.html` (t4-16): File `FX_Login/index.html`, Content Type `text/html`, full committed source matches the pre-commit capture. Closed with Cancel.
  - `app.js` (t4-17): File `FX_Login/script/app.js`, Content Type `text/javascript`, full committed source matches. Closed with Cancel.
  - Global Objects closed with Cancel (read-only).
- Tree after commit (t4-04, t4-11, t4-14): `FX_Login` contains `script` (containing `app.js`) and `index.html`. Exactly two `FX_` asset files; no CSS, third asset or unrelated asset added. `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi` untouched.

## Final state (t4-18)

- Designer: FX_LoginPortal (Name), Version User, Script Language Visual C#, Components not changed (no component was inserted), Variables root shows only the Global groups (no FX_vLoginResult, no UserCtrl variable).
- Save: enabled (dirty; Save accessibility ref present without `[disabled]`). Not clicked.
- Status bar: `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- Console footer: 2 errors, 0 warnings (unchanged from T3 baseline on every snapshot in T4).

## Observations to carry forward

- The page URL lost its `&MGForm=FX_LoginPortal` parameter after the first asset commit. The Designer tab still displayed FX_LoginPortal (Name, Version, tree) in every later capture. Recorded as an observed URL-only change; not a Form identity change. Relevant to T5 (the close/reopen path should use the supported recent-forms route, not the URL).
- Two Mongoose-created folder nodes (`FX_Login`, `script`) were produced by the path-name `New` behaviour; they are containers for the two requested files, not separate assets.

## What this does and does not establish

- Establishes (single run, observed): both files exist under the User-scoped Web Assets tree with the stated relative references and the committed source above; the asset editor retained them after the parent dialog OK and a read-only reopen in the same session.
- Does not establish: browser execution of the scripts; that `script/app.js` loads from `index.html` at runtime; that `WSForm.invoke` / `getVarValue` work; compile success; Save persistence; cross-session durability; Global variable resolution (EXP-130 U-1).
