# Protocol

`oz-skilltree` exists because AI coding agents fail when they lack failure prediction, route selection, counter planning, source-of-truth discipline, and receipt memory.

## Loop

```text
frame -> retrieve -> generate -> score -> receipt
predict -> counter -> pathfind -> route
build -> verify -> close -> receipt
drain -> refine -> improve
```

## Operating Contract

1. Start serious goals with `/oz-start`.
2. Draft exactly one active OzReceipt and capture the context fingerprint into it.
3. Run the negative-memory retrieval gate — "searched, no hits" is valid evidence; a missing retrieval block is a halt.
4. Identify lane, repo/context, source of truth, approval ceiling, and risk notes.
5. Generate a calibrated candidate universe before treating anything as A/A+.
6. Select Failure Radar mode (retrieval hits feed family ranking).
7. Build Countermap before mutation.
8. Select a YellowBrickRoad route.
9. Execute only inside the route and approval ceiling.
10. Verify before truth-state promotion — each truth state carries its proof contract.
11. Close with `/oz-result`, draining the failure inbox.

## Route Discipline

YBR chooses the route with the best evidence, reversibility, safety, verification, and scope fit.

Required route fields:

- `route_id`
- `selected_route`
- `why_this_route_wins`
- `failure_families_addressed`
- `counters_used_first`
- `counters_reserved`
- `first_safe_action`
- `approval_level`
- `verification_gate`
- `evidence_that_changes_route`
- `stop_condition`
- `next_approval_phrase`

## Stop Conditions

Stop when:

- source of truth is missing or conflicted
- public/private boundary is unclear
- approval ceiling is exceeded
- verification cannot be performed
- route evidence changes materially
- runtime/app creation would be required
- raw/internal taxonomy artifacts would need editing or inclusion
