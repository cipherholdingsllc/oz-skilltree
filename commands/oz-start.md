# /oz-start

Start a new serious goal and create or draft one OzReceipt.

## Halt If

- source of truth is missing
- approval ceiling is unclear for risky work
- public/private boundary is unclear
- another active receipt would make this ambiguous
- the negative-memory retrieval gate has not been run (no `negative_memory_retrieval` block in the receipt)

## Required Output

Use [../wiki/templates/ozreceipt.md](../wiki/templates/ozreceipt.md): capture the context fingerprint, run the negative-memory retrieval gate ("searched, no hits" is valid; missing block is not), select Failure Radar mode, build Countermap, select YBR route, and produce the safest execution prompt. If an open receipt has a handoff brief or checkpoints, load them first — see [oz-handoff.md](oz-handoff.md) and [../docs/session-continuity.md](../docs/session-continuity.md).
