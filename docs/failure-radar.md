# Failure Radar

Failure Radar predicts likely failure families before execution.

## Modes

| Mode | Use |
|---|---|
| `scan` | low-risk prediction |
| `standard` | ordinary repo/docs task |
| `deep` | PR, integration, deployment, package manager, multi-file work, or repeated blocker |
| `max` | production, auth, secrets, privacy, healthcare claims, database, public launch, or cannot-fail mode |

`failure-radar-max` must not be weakened.

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
