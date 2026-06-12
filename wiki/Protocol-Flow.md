# Protocol Flow

Back to [[Home]].

`frame -> retrieve -> generate -> score -> receipt -> predict -> counter -> pathfind -> route -> build -> verify -> close -> receipt -> drain -> refine -> improve`

## Flow

1. `/oz-start` frames the goal, creates or drafts the receipt, captures the context fingerprint, and runs the mandatory negative-memory retrieval gate ("searched, no hits" is valid; a missing block is a halt).
2. Failure Radar predicts failure families.
3. Countermap-50 selects counters before mutation.
4. Pathfinder compares viable routes when needed.
5. YellowBrickRoad selects the route.
6. Execution stays inside the approval ceiling.
7. Verification moves truth states.
8. `/oz-result` drains the failure inbox, records proof contracts, and closes or leaves the receipt open.
