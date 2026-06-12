# Failure Radar Skill

Purpose: predict likely failure families before execution.

## Modes

Mode doctrine version: v0.2 (six-mode). Budgets and full trigger table: [../docs/failure-radar.md](../docs/failure-radar.md).

| Mode | Use |
|---|---|
| `scan` | low-risk prediction |
| `standard` | ordinary repo/docs task |
| `standard+` | first proof-test, deployment blocker, high round-trip-cost task |
| `deep-lite` | incomplete evidence or unclear state without full contradiction |
| `deep` | PR, integration, deployment, package manager, multi-file, repeated blocker |
| `max` | production, auth, secrets, privacy, healthcare claims, database, public launch, cannot-fail mode |

## Required Output

- selected mode
- why this mode
- why not lower mode when relevant
- top failure families
- evidence basis per family
- public/private classification
- unknowns
- first safe action
- stop conditions
- route change triggers

`failure-radar-max` must not be weakened.
