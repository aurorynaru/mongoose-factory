# Infor Mongoose source extracts for IDOMTH investigation

These are plain-text extracts from PDFs supplied in this ChatGPT workspace, plus a corrected investigation prompt. The content is laid out to be unpacked at `docs/mongoose/source/` in your own project. ChatGPT cannot directly write to your LLM's local filesystem.

## Contents

- `investigation_prompt_corrected.md` — observed tenant behavior, constraints, and questions (start here).
- `mongoose_admin_2023_taskman_pp65-104.txt` — Infor Mongoose Administration Guide, 2023.x, printed pp. 65–104 (Chapter 5).
- `mongoose_admin_2023_ion_api_pp277-281.txt` — same source, printed pp. 277–281.
- `mongoose_ido_integration_2021_invoke_pp34-36_39-40_134-136.txt` — Infor Mongoose IDO Integration with External Applications, 2021.xx, selected printed pages.
- `mongoose_basics_2021_background_pp93-94.txt` — Infor Mongoose Basics User Guide 10.x (2021), printed pp. 93–94.

## High-value pages

- Mongoose Administration **p. 74**: IDOMTH executable type; site-named configuration requirement stated in the guide.
- **p. 75**: Background Task History and the generic `Error -1` definition.
- **pp. 90–91**: Setting up IDO methods; form task parameters must match method parameters.
- **pp. 92–93**: TaskMan substitution keywords including BG~TASKID~ and BG~REQUSER~.
- **pp. 93–104**: debug messages/troubleshooting (many instructions relate to on-premises).
- **pp. 277–281**: ION API server setup, SSO/non-SSO, and test form.
- Integration 2021 **pp. 34–36**: XML IDO `Invoke` request/response, parameters.
- Integration 2021 **pp. 135–136**: REST `InvokeIDOMethod` request/response example.

## Interpretation guardrails

1. Text was extracted using PyMuPDF with page markers. Table reading order and formatting can differ from the PDFs; consult original PDFs for exact layout.
2. The source PDFs precede the observed **2026-10-28** multi-tenant tenant and may describe on-premises behavior.
3. The data in the prompt are supplied observations, not confirmed Infor product guarantees.
4. Reuse these source extracts only as permitted by your Infor license and confidentiality agreements.

For official current help, see links in the corrected investigation prompt.
