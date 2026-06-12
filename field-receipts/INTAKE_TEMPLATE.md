# Field Receipt Intake

```yaml
intake_id:
date:
provenance: live-receipt | session-transcript | reconstructed-from-operator-recall
task_type: debug | deploy | integrate | refactor | build | review | other
stack_summary:            # languages/tools, no private project names
mode_used: scan | standard | standard+ | deep-lite | deep | max
```

## What the protocol caught

Which failure families fired, which counters were used, and what would likely have happened without them. Ranges and operator estimates are fine; invented precision is not.

## What the protocol got wrong or slowed down

Mandatory. Friction notes, false positives, overhead that didn't pay for itself, steps that were skipped and why. A receipt without this section is incomplete.

## Estimated time impact

Operator-estimated range (e.g. "20–60 minutes saved" or "added 10 minutes for no catch"). State the basis for the estimate.

## Sanitization checklist

- [ ] No names, employers, or identifying details
- [ ] No private paths, repos, or project names
- [ ] `npm run check:private` passes with this file present
- [ ] Operator reviewed and approved for publication
