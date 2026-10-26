# EXP-138 T4 - corrective source check (read-only, before any browser action)

Source: `assets/FX_Login/FX_LoginPortal.flat.cs.txt` (commit `d31502a`).
Operator-supplied SHA-256: `ecb871dec163605fae96db19cc3eb514e041c16477883a4f712efbd8d55ad981` (not recomputed; the worker has no shell).

| Check | Method | Result |
|---|---|---|
| Exists | Read | Yes |
| Line count | Grep `^` count | 43 |
| Leading whitespace | Grep `^[ \t]` count | 0 lines |
| Longest line | Grep `^.{107,}$` and `^.{106}$` | No line over 106 characters; one line of exactly 106 (line 24, `bool match = stored != null && string.Equals(...)`) |
| Logic and tokens | Read and compared with committed `assets/FX_Login/FX_LoginPortal.cs.txt` | Same class, usings, namespace, signature `public string FX_ProcessLogin(string username, string password)`, `FX_LoginUsers` lookup on `FX_Username` / `FX_PasswordHash`, six result codes, `ThisForm.Variables("FX_vLoginResult").Value = code`, `FX_Sha256Hex` helper. Differences: `props` extracted to a variable (line 18); match split across lines 24-25. |

Interpretation: the flat file is the operator-designated corrective source (Amendment A1). It was not substituted or reconstructed by the worker.
