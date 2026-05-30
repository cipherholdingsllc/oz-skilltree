# OzTriage

OzTriage is a router, not an executor.

It turns operator intent into a domain stack so that the rest of the run uses the right rubrics, counters, forbidden actions, and verification gates.

## Inputs

- operator intent
- OzReceipt namespace
- public-safe context
- approval ceiling
- source-of-truth notes

## Outputs

- primary producer
- secondary producers
- safety producers
- rejected producers
- score/threshold receipt
- stop conditions

## Producer Selection

| Slot | Meaning |
|---|---|
| primary producer | owns the dominant domain rubric |
| secondary producers | add supporting domain checks |
| safety producers | protect public/private, claims, and approval boundaries |
| rejected producers | plausible producers that were considered and rejected |

## Stop Condition

If producers conflict on source of truth, approval ceiling, or verification gate, OzTriage stops the run until the operator resolves the conflict.

## Receipt Law

No trigger receipt = trigger did not happen.

No OzTriage receipt = producer routing did not happen.
