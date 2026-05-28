# /oz-result Skill

Purpose: close out an active OzReceipt with evidence.

## Active Receipt Rules

- One open receipt: attach to it.
- Multiple open receipts: halt and request receipt ID.
- No open receipt: suggest `/oz-start`.

## Always Update

- truth state
- counter attempt log
- counter results
- negative memory
- future retrieval tags
- changed route if any
- files changed
- commands run
- verification evidence

Close only when the verified threshold is met, no unresolved stop condition remains, and completeness score passes.
