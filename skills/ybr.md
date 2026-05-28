# YellowBrickRoad Skill

Purpose: choose the route with the best evidence, reversibility, safety, verification, and scope fit.

YBR is the route selector. Pathfinder is the comparison lens used when multiple viable routes exist.

## Required Route Schema

```yaml
route_id:
selected_route:
why_this_route_wins:
failure_families_addressed: []
counters_used_first: []
counters_reserved: []
first_safe_action:
approval_level:
verification_gate:
evidence_that_changes_route: []
stop_condition:
next_approval_phrase:
```

## Required Narrative

- selected route
- rejected routes
- why the selected route wins
- next gate
- stop condition
