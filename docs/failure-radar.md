# Failure Radar

Failure Radar predicts likely failure families before execution.

## Modes

Mode doctrine version: **v0.2 (six-mode)**.

| Mode | Use | Counter budget |
|---|---|---|
| `scan` | low-risk prediction | 3–5 |
| `standard` | ordinary repo/docs task | 10–15 |
| `standard+` | first proof-test, deployment blocker, high round-trip-cost task, or important experiment | 15–20 |
| `deep-lite` | incomplete evidence or unclear deployment/debug state without full contradiction | 20–25 |
| `deep` | PR, integration, deployment, package manager, multi-file work, or repeated blocker | 25–35 |
| `max` | production, auth, secrets, privacy, healthcare claims, database, public launch, or cannot-fail mode | 35–50 |

`failure-radar-max` must not be weakened. Mode selection may be driven by an internal counter-budget algorithm maintained with the private source; the published contract is the band names, triggers, and budgets above.

## Output

Failure Radar should produce:

- selected mode
- why this mode
- why not lower mode when relevant
- top failure families
- confidence and evidence basis per family
- public/private classification
- unknowns
- first safe action
- stop conditions
- route-change triggers

## Counter Handoff

Failure Radar hands predicted families to Countermap-50. Countermap should preserve the 16 stable counter family IDs and group operator-facing counters by prevention, diagnostic, repair, verification, rollback, escalation, source-of-truth, environment, branch/commit, public/private, and negative-memory families.
