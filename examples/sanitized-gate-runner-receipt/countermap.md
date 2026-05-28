# Countermap Receipt

## Counter Budget

Mode: `standard`

Budget: 8 counters

## Selected Counters

| Counter ID | Type | Failure addressed | Expected signal |
|---|---|---|---|
| `docs-index-check` | diagnostic | public navigation gap | docs index names first reads |
| `example-index-check` | diagnostic | example discoverability gap | examples index names scenario and files |
| `claim-evidence-scan` | verification | unsupported claim drift | no benchmark or runtime claims |
| `private-boundary-scan` | verification | private boundary drift | no private paths or private material |
| `schema-check` | verification | artifact shape drift | schema validation passes |
| `link-check` | verification | broken links | link check passes |
| `rollback-note` | rollback | overbroad docs patch | exact changed files are known |

## Reserved Counters

- `manual-github-render-review`
- `branch-default-check`

## Not-Needed Counters

- deploy verification
- package publish dry run
- runtime smoke test

## Failure-To-Counter Mapping

| Failure | Counters |
|---|---|
| public navigation gap | `docs-index-check`, `example-index-check`, `link-check` |
| unsupported claim drift | `claim-evidence-scan` |
| private boundary drift | `private-boundary-scan` |
| false completion | `schema-check`, `link-check`, `manual-github-render-review` |

## Rollback

If verification fails, revert the docs patch and leave the receipt open with the failing counter result.
