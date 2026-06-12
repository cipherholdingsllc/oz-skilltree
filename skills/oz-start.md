# /oz-start Skill

Purpose: start a new serious goal and create or draft exactly one OzReceipt.

## Contract

`/oz-start` is the only starter for new serious goals and the only creator of new OzReceipts. It must not silently create multiple receipts.

## Required Pass

1. Create or draft `OzReceipt-{Goal}`.
2. Capture the context fingerprint (`node scripts/context-fingerprint.mjs`) into the receipt.
3. Run the negative-memory retrieval gate (mandatory — see below).
4. Identify lane, repo/context, source of truth, approval ceiling, and risk notes.
5. Generate an internal 200-candidate universe across F, D, C, B, A, A+.
6. Calibrate using weak and mediocre options so A+ is not inflated.
7. Surface only real A/A+ candidates.
8. Choose Failure Radar mode: `scan`, `standard`, `standard+`, `deep-lite`, `deep`, or `max`.
9. Build Countermap, up to 50 counters when justified.
10. Run YBR route selection.
11. Produce the safest execution prompt.
12. Hand off to `/oz-result` after execution.

## Negative-Memory Retrieval Gate (mandatory)

Memory that is written but never read is dead weight. Before mode selection, search prior receipts and negative memory for traps matching the current lane, stack, and task type, and record the result in the receipt's `negative_memory_retrieval` block: what was searched, and the hits. **"Searched, no hits" is valid evidence. A receipt with no retrieval block fails the gate — halt and run it.** Surfaced traps feed Failure Radar ranking directly.

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
