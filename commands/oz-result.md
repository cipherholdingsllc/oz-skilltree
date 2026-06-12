# /oz-result

Close out one active OzReceipt.

## Receipt Selection

- one open receipt: attach to it
- multiple open receipts: halt and request receipt ID
- no open receipt: suggest `/oz-start`

## Closeout

Update truth state (with proof contract), counters, negative memory, future tags, changed files, commands run, verification evidence, rejected routes, and next gate. Drain the failure inbox: classify every pending entry or carry it forward with a reason — close is blocked otherwise. See [../docs/session-continuity.md](../docs/session-continuity.md).
