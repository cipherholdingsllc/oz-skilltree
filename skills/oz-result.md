# /oz-result Skill

Purpose: close out an active OzReceipt with evidence.

## Active Receipt Rules

- One open receipt: attach to it.
- Multiple open receipts: halt and request receipt ID.
- No open receipt: suggest `/oz-start`.

## Always Update

- truth state (with its proof contract — a state without proof is recorded one rung lower)
- counter attempt log
- counter results
- negative memory
- future retrieval tags
- changed route if any
- files changed
- commands run
- verification evidence

## Failure-Inbox Drain (mandatory)

Drain the session failure inbox before close: every pending entry is classified as (a) evidence for an existing failure family, (b) a candidate new-family observation, or (c) explicitly-marked noise. Close is blocked while unclassified entries remain, unless they are carried forward with a stated reason. See [../docs/session-continuity.md](../docs/session-continuity.md).

Close only when the verified threshold is met, no unresolved stop condition remains, the inbox is drained, and completeness score passes.
