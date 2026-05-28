# /oz Skill

Purpose: one-response upgrade, judgment, repair, compression, comparison, or pathfinding pass.

## Contract

`/oz` is continuation-only.

- If no active OzReceipt exists, halt with `NO_ACTIVE_OZRECEIPT` and tell the operator to invoke `/oz-start`.
- If multiple active receipts exist, halt with `AMBIGUOUS_ACTIVE_OZRECEIPT` and request the receipt ID.
- Do not silently create receipts.

## Use For

- upgrade a prompt or repo instruction
- repair vague AI output
- compare routes
- compress a handoff
- run Pathfinder against candidate paths
- strengthen public-safety and proof discipline

## Output

- upgraded artifact or judgment
- assumptions
- source-of-truth notes
- risk notes
- next gate
