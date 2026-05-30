# Scoring Rubric

Scoring is a routing aid, not truth.

Every grade must include:

- `score_out_of_10`
- `threshold`
- `decision` or `status`
- `reason`

## Thresholds

| Grade | Score range | Default handling |
|---|---:|---|
| A+ | 9.75-10.00 | incorporate if approval scope permits |
| A | 9.35-9.74 | incorporate if aligned and safe |
| A- | 9.00-9.34 | consider if useful and low-risk |
| below A- | below 9.00 | omit, defer, or reject unless explicitly requested |

## Inputs

- impact
- safety
- verification strength
- reusability
- public-safety fit
- implementation risk
- complexity penalty
- confidence

Confidence is a gate, not a substitute for evidence.

## Route-Aware Rule

Upgrade scoring is route-aware only when a selected YBR route has produced a `route_weighted_scoring_rubric`.

No `route_weighted_scoring_rubric` = upgrade scoring is not route-aware.
