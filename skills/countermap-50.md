# Countermap-50 Skill

Purpose: build the counter plan before mutation.

Counters preserve the 16 raw counter family IDs and group operator-facing counters by:

- prevention
- diagnostic
- repair
- verification
- rollback
- escalation
- human-escalation
- source-of-truth
- environment
- branch/commit
- public/private
- negative-memory

## Counter Rules

- Use diagnostic counters before destructive repair.
- Preserve `use_when`, `do_not_use_when`, `expected_signal`, and `side_effect_risk`.
- Cap at 50 counters unless explicitly approved.
- Record result status during `/oz-result`.
