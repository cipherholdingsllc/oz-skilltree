# Receipt Completeness

Receipt completeness is scored out of 10.

## Minimum Viable Receipt

Score target: `6/10`

Must include:

- goal
- truth state
- source of truth
- selected mode or producer stack
- next gate
- stop condition

## Full Receipt

Score target: `9/10` or higher

Adds:

- score_out_of_10 where scoring occurs
- threshold
- decision/status
- reason
- selected counters
- selected route
- rejected route summary
- files changed
- verification evidence
- negative memory
- future retrieval tags

## Failed Gate Receipt

Must include:

- gate ID
- expected evidence
- actual evidence
- failure reason
- stop condition
- next gate

## Skipped Trigger Receipt

Must include:

- trigger name
- required_trigger_score or threshold
- actual_score
- triggered: false
- skip_reason

## Countermap Receipt Completeness

Must include selected counters, reserved counters, not-needed counters, and failure-to-counter mapping.

## YBR Route Receipt Completeness

Must include route ID, grade, score_out_of_10, threshold, status, reason, and why rejected or selected.

## Ledger Entry Completeness

Must include receipt ID, event type, evidence reference, relationship edges, and next gate.
