# Playbook: Login portal pattern and security notes

Knowledge state: **observed** (EXP-133, 137, 138). This is an **application-level demo login** (a user table
with SHA-256 hashes). It is **not** Mongoose or Infor authentication and is no substitute for it.

## What exists
- **Data:** SQL table + IDO `FX_LoginUsers` (alias `fxlogin`).
  - Columns: `FX_Username` (PK, String 50), `FX_PasswordHash` (String 64), `FX_Role`, `FX_Store`.
  - Built with the NewData/Maintenance wizard, answering No to Create Form (EXP-137).
- **Form:** Form `FX_LoginUsers` for maintenance (Classic Multi-View).
- **Portal:** `FX_LoginPortal`, a BuildFromScratch Form in Visual C#.
  - UserControl `FX_LoginControl` → asset `FX_Login/index.html` + `app.js`.
  - Global variable `FX_vLoginResult`.
- **Script:** `assets/FX_Login/FX_LoginPortal.flat.cs.txt`.
  - `FX_ProcessLogin(username, password)` loads the user by name (with escaping) and compares the SHA-256 hex.
  - It sets `FX_vLoginResult` to `ok` / `invalid` / `unknown` / `empty` / `missing` / `error`.
- **Client:** `app.js` validates input (username ≥ 3, password ≥ 6), calls `WSForm.invoke("FX_ProcessLogin", u, p, cb)`, then reads `getVarValue("FX_vLoginResult")`.
- **Runtime-proven results (EXP-138):** `ok`, `invalid` and `unknown`, all with fake fixtures.

## Rules when building login or role features
- **Test data:** use fake fixture users only (e.g. `fx_probe`). Never type real credentials into custom forms.
- **What the page shows:** only result codes. Mask passwords and keep them out of screenshots.
- **Hashing:** an unsalted SHA-256 is demo-grade. For anything real, add a per-user salt and a slow KDF, or better, rely on Mongoose/Infor identity and Mongoose security (groups, form/IDO permissions). See `docs/mongoose/guides/security-and-permissions.md` (**unverified**).
- **Permissions:** never disable Mongoose security or authorization to make a feature work (AGENTS.md).
- **Mongoose sign-in (operator's session):** use the Playwright secret placeholders `SECRET_MONGOOSE_USERNAME` / `SECRET_MONGOOSE_PASSWORD` at the **top-level** CloudIdentities page only. Embedded-frame sign-in fails (browser-and-session.md).
