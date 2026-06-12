# /oz-handoff

Compress one active OzReceipt into a context-budgeted brief that any fresh session, terminal, or tool can pick up.

## Receipt Selection

- one open receipt: attach to it
- multiple open receipts: halt and request receipt ID
- no open receipt: nothing to hand off; suggest `/oz-start`

## Brief Contract

Write the brief to `receipts/handoffs/<receipt_id>.md` (private vault; this path is gitignored in the public repo). The brief must contain:

- goal, lane, and approval ceiling
- current truth state and its proof status (a state without proof is reported one rung lower)
- last verified action and its evidence
- next gate and stop conditions
- context fingerprint block (`node scripts/context-fingerprint.mjs`)
- open failure-inbox entries carried forward, if any

## Resume

A fresh session running `/oz-start` that detects an open receipt with a handoff brief loads the brief before any new action. Crash recovery (no brief written) resumes from the receipt plus the latest checkpoint instead — see [docs/session-continuity.md](../docs/session-continuity.md).
