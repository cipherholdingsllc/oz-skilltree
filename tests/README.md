# Tests

This repo uses lightweight Node scripts instead of a test framework.

Run:

```sh
npm test
```

Coverage (`npm test` composes all five):

- schema-derived fixture validation (required keys, enums, additionalProperties, registry modes and budget bands)
- Markdown link checks
- private leak and public-risk phrase checks (plus the gitignored local-extension layer)
- stable public surface guard ([../registry/stable-surfaces.json](../registry/stable-surfaces.json))
- structural evals and the size ratchet ([mode-budgets.json](mode-budgets.json) lives in this folder)

The scripts live in [../scripts/](../scripts/).
