# OzReceipt

OzReceipt is both the artifact namespace and the proof object.

As namespace, it names the run and owns the related score, counter, route, gate, and closeout receipts.

As proof object, it records what was claimed, what was verified, what changed, and what remains gated.

## Required Fields

- receipt ID
- goal
- truth state
- approval ceiling
- source of truth
- domain stack
- files changed
- verification evidence
- next gate

When scoring occurs, the receipt must include:

- grade
- score_out_of_10
- threshold
- decision or status
- reason

When a trigger is evaluated, the receipt must include:

- trigger decision
- required trigger score or threshold
- actual score
- triggered result
- skip reason if not triggered

## Rules

- No grade-only evaluations.
- No score receipt = score did not happen.
- No trigger receipt = trigger did not happen.
- Claimed is not verified.
- Committed is not pushed.
- Pushed is not deployed.
