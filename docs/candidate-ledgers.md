# Candidate Ledgers

Route-aware work uses two ledgers:

1. YBR Route Candidate Ledger
2. 200 Upgrade Candidate Ledger

## YBR Route Candidate Ledger

YBR route candidates are scored before upgrade candidates. Each candidate leaves a compact route receipt.

The selected YBR route creates the `route_weighted_scoring_rubric`.

## 200 Upgrade Candidate Ledger

The 200 Upgrade Candidate Ledger is scored against the selected YBR route.

Every upgrade candidate must include:

- candidate_id
- title
- grade
- score_out_of_10
- threshold
- status
- reason_5_words

## A/A+ Candidate Fields

A/A+ candidates also include:

- why_powerful
- route_alignment
- where_applied
- approval_scope_required

## Incorporation Rule

A/A+ candidates are incorporated into the execution plan, prompt, and route package.

They only mutate files when approval scope explicitly permits.

## Receipt Rule

No compact receipt = candidate was not scored.

No richer A/A+ receipt = A/A+ incorporation did not happen.
