# Benchmarks

`oz-skilltree` should be compared against baseline Claude/Codex workflows on SWE-bench-style tasks and repo-local debugging tasks.

## Evaluation Shape

Run the same task twice where practical:

1. baseline agent workflow
2. oz-skilltree-augmented workflow using `/oz-start`, Failure Radar, Countermap, YBR, and `/oz-result`

## Metrics

- solve rate
- wrong-file edits
- blocked-loop count
- verification quality
- regression risk
- truth-state accuracy
- route reversibility
- receipt completeness

## Evidence Rules

- Do not claim results without stored task receipts.
- Keep task selection and exclusions visible.
- Separate observed evidence from interpretation.
- Record failed counters and negative memory.
- Include enough reproduction detail for a reviewer to inspect the claim.

This repository currently claims no benchmark results.
