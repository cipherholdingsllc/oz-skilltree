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
- approval ceiling
- repo context with context fingerprint
- negative-memory retrieval block (mandatory at start; "searched, no hits" is valid)
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
- negative memory and future retrieval tags
- next gate

## Truth State Rules

Truth states:

`claimed -> observed -> verified -> committed -> pushed -> deployed -> delivered`

Never collapse `claimed` into `verified`. Never collapse `committed` into `pushed`. Each state above `claimed` carries a proof contract — a state recorded without its proof is reported one rung lower (see [../wiki/Truth-States.md](../wiki/Truth-States.md)).

## Storage

Real receipts live in private vaults — never in this public repository (`receipts/` is gitignored except `receipts/fixtures/`). Example receipts live under [../examples/](../examples/); sanitized field receipts are published in batches through [../field-receipts/](../field-receipts/) after passing `npm run check:private` and operator review.
