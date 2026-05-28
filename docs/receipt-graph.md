# Receipt Graph

Receipts become graph nodes over time. The goal is not hidden memory or telemetry; it is durable, inspectable run history that helps future work avoid repeated mistakes.

## Node Types

- goal
- receipt
- producer
- failure family
- counter
- route
- gate
- decision
- commit
- PR

## Edge Types

| Edge | Meaning |
|---|---|
| `predicts` | Failure Radar predicts a family for a goal |
| `counters` | a counter addresses a failure family |
| `verifies` | evidence supports a truth-state movement |
| `blocks` | a stop condition prevents continuation |
| `resolves` | a gate or result closes a failure |
| `supersedes` | newer evidence replaces an older decision |
| `derives_from` | a public summary or example derives from a protocol surface |
| `triggered_by` | a route change follows new evidence |

## Public Boundary

Raw/internal research artifacts are excluded from this repo. Public receipts should be sanitized before publication and must not include private paths, secrets, private message content, or private implementation strategy.

## Why This Matters

A single run can be correct and still fail to teach the next run. The graph shape preserves what failed, what countered it, what verified it, and what should change next time.
