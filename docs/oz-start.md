# /oz-start

`/oz-start` opens a mission.

It is route-aware, not just upgrade-aware. Its job is to establish the safest useful execution package before mutation.

## Order

1. Create or draft the OzReceipt namespace.
2. Capture the context fingerprint into the receipt.
3. Run the negative-memory retrieval gate (mandatory; "no hits" recorded is valid, a missing block is a halt).
4. Run OzTriage.
5. Select Domain Producers.
6. Run Failure Radar (retrieval hits feed family ranking).
7. Build Countermap.
8. Run YBR route selection.
9. Create the selected route and route-weighted scoring rubric.
10. Generate the 200 Upgrade Candidate Ledger.
11. Incorporate A/A+ candidates into the plan, prompt, and route package.
12. Hand the safe window to Gate Runner.

## Mutation Boundary

`/oz-start` does not mutate files unless approval scope permits. A/A+ candidates are plan inputs until approval allows writes.

## Candidate Scale

Public examples may use compact candidate samples. Real complex goals may require full 200 candidate consideration.

## Receipt Laws

- No score receipt = score did not happen.
- No trigger receipt = trigger did not happen.
- No YBR route receipt = that route was not evaluated.
- No selected-route receipt = route was not selected.
- No `route_weighted_scoring_rubric` = upgrade scoring is not route-aware.
