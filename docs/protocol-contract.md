# Protocol Contract

## Core Promise

Predict failure. Route safely. Prove the result. Leave a receipt.

## Command Contract

- `/oz-start` is the only starter for new serious goals and the only creator of new OzReceipts.
- `/oz` is the one-response upgrade, judgment, repair, compression, comparison, or pathfinding pass.
- `oz-skilltree` is continuation-only. If no active OzReceipt exists, halt with `NO_ACTIVE_OZRECEIPT`.
- If multiple active receipts exist, halt with `AMBIGUOUS_ACTIVE_OZRECEIPT`.
- `/oz-result` is closeout only.
- No silent receipt creation.

## Truth States

Truth states are ordered but not automatically promoted:

`claimed -> observed -> verified -> committed -> pushed -> deployed -> delivered`

Never collapse `claimed` into `verified`. Never collapse `committed` into `pushed`. Never claim benchmark results unless actually run.

## Approval Ladder

| Level | Meaning |
|---|---|
| L0 | inspect |
| L1 | draft |
| L2 | write file |
| L3 | run local command |
| L4 | stage |
| L5 | commit |
| L6 | push |
| L7 | send/publish/deploy |
| L8 | destructive/credential/production-data action |
