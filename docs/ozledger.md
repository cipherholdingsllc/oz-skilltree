# OzLedger

OzLedger is the public-safe append-only receipt ledger concept.

It is not a runtime database in this public repo. It is not deployed telemetry. It is not a hidden memory system.

## What It Records

When public-safe, OzLedger records:

- receipt IDs
- gate receipts
- producer selections
- counter outcomes
- YBR routes
- selected routes
- rejected routes
- decisions
- commits and PRs
- OzResult closeouts

## Relationship To Receipt Graph

OzLedger is the append-only list. The receipt graph is the relationship view across entries.

Ledger entry:

```text
receipt_id -> event -> evidence -> next_gate
```

Graph relationship:

```text
failure family -> counter -> route -> gate -> result
```

## Public/Private Boundary

Only public-safe receipt summaries belong in this repository. Private receipts, private paths, private message content, secrets, and unpublished internal strategy stay out.

## Receipt Law

No ledger entry = durable receipt was not indexed.
