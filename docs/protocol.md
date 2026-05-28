# Protocol

`oz-skilltree` exists because AI coding agents fail when they lack failure prediction, route selection, counter planning, source-of-truth discipline, and receipt memory.

## Loop

```text
frame -> generate -> score -> receipt
predict -> counter -> pathfind -> route
build -> verify -> close -> receipt
retrieve -> refine -> improve
```

## Operating Contract

1. Start serious goals with `/oz-start`.
2. Draft exactly one active OzReceipt.
3. Identify lane, repo/context, source of truth, approval ceiling, and risk notes.
4. Generate a calibrated candidate universe before treating anything as A/A+.
5. Select Failure Radar mode.
6. Build Countermap before mutation.
7. Select a YellowBrickRoad route.
8. Execute only inside the route and approval ceiling.
9. Verify before truth-state promotion.
10. Close with `/oz-result`.

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
