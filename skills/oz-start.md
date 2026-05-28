# /oz-start Skill

Purpose: start a new serious goal and create or draft exactly one OzReceipt.

## Contract

`/oz-start` is the only starter for new serious goals and the only creator of new OzReceipts. It must not silently create multiple receipts.

## Required Pass

1. Create or draft `OzReceipt-{Goal}`.
2. Identify lane, repo/context, source of truth, approval ceiling, and risk notes.
3. Generate an internal 200-candidate universe across F, D, C, B, A, A+.
4. Calibrate using weak and mediocre options so A+ is not inflated.
5. Surface only real A/A+ candidates.
6. Choose Failure Radar mode: `scan`, `standard`, `deep`, or `max`.
7. Build Countermap, up to 50 counters when justified.
8. Run YBR route selection.
9. Produce the safest execution prompt.
10. Hand off to `/oz-result` after execution.

## Output

- receipt path
- mode selected
- top failure families
- countermap
- selected YBR route
- rejected routes
- approval ceiling
- stop conditions
- execution prompt
