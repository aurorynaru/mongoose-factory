# BLD-004 evidence

See `builds/BLD-004-slither-portal.md` for the authoritative build status and
explanations of all inspected screenshots.

- `01-local-host.png` / `02-local-guest.png`: local WebGL game and shared room
  leaderboard. Two-player state agreement was additionally checked via read-only
  diagnostics; the other snake was outside the camera in these captures.
- `03-local-invalid-code.png`: invalid code rejected with a visible message.
- `04-designer-user-scope.png`: operator User scope at entry.
- `05-flex-wizard.png` through `08-form-created.png`: Flex Basic wizard and new
  empty FX_SlitherPortal. No UserControl or persistence verification yet.
- `09-asset-created.png`: selected new FX_Slither/index.html template, text/html,
  User version. The large content fill later timed out; saved content is unknown.
- `form-absence.yml`, `asset-absence.yml`: pre-create collision checks.
- `new-asset-template.yml`: default content before replacement.

All nine PNGs have been opened and inspected. The attempted error capture
`10-large-asset-editor-state.png` failed and is not evidence. No tenant runtime or
close/reopen acceptance checks have passed. No credential values are recorded here.

After operator reload:
- `10-after-operator-reload.png` (inspected): responsive Designer with reopened
  FX_SlitherPortal, Flex / User version and empty regions. Proves empty shell persistence.
- `after-operator-reload-assets.yml`: saved asset folder/file present.
- `after-reload-asset-template.yml`: file still has default empty HTML template;
  generated game did not persist. No game runtime or UserControl acceptance check yet.
