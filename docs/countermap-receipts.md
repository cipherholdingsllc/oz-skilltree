# Countermap Receipts

Countermap is not a vibe list. If there is no explicit counter list, Countermap did not happen.

## Required Sections

- counter budget
- selected counters
- reserved counters
- not-needed counters
- failure-to-counter mapping
- verification counters
- rollback counters
- stop conditions

## Counter Budget

Counter budgets scale with risk:

| Mode | Budget |
|---|---:|
| scan | 3–5 |
| standard | 10–15 |
| standard+ | 15–20 |
| deep-lite | 20–25 |
| deep | 25–35 |
| max | 35–50 |

Single source of truth: `registry/stable-surfaces.json` (`mode_budgets`), mirrored in [failure-radar.md](failure-radar.md). Mode doctrine version: v0.2 (six-mode).

The budget is a ceiling, not a target. More counters are useful only when they improve safety, diagnosis, verification, rollback, or route selection.

## Compact Example

| Counter | Type | Failure addressed | Expected signal |
|---|---|---|---|
| `repo-root-check` | diagnostic | wrong repo or worktree | root and branch confirmed |
| `link-check` | verification | broken public navigation | link checker passes |
| `private-scan` | verification | public/private boundary drift | scanner passes |
| `rollback-note` | rollback | overbroad doc change | exact files can be reverted |

## Receipt Rule

Record counter outcomes in `/oz-result`. A failed counter is not wasted work; it is negative memory for the next route.
