# Receipt Memory

OzReceipts are the durable memory layer for serious runs.

## What Receipts Prevent

- fake completion
- repeated failed counters
- stale-plan reuse
- route drift
- public/private boundary loss
- collapse of `claimed` into `verified`

## Required Contents

An OzReceipt must include:

- goal
- lane
- source of truth
- candidate universe receipt
- selected Failure Radar mode
- top failure families
- Countermap
- YBR route
- execution prompt
- stop conditions
- truth-state updates
- files changed
- commands run
- verification
- rejected routes
- next gate

## Truth State Rules

Truth states:

`claimed -> observed -> verified -> committed -> pushed -> deployed -> delivered`

Never collapse `claimed` into `verified`. Never collapse `committed` into `pushed`.

## Storage

Real receipts belong in [../wiki/Receipts/](../wiki/Receipts/). Example receipts belong under [../examples/](../examples/).

Do not commit private receipts to a public repo unless they have passed public/private classification and claims-safety review.
