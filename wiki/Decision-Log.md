# Decision Log

Back to [[Home]].

## 2026-05-28

- Initialized public-ready protocol repo.
- Created public-safe protocol branch that excludes raw/internal taxonomy artifacts from branch history.
- Added Public Failure Atlas boundary notes under `research/public-failure-atlas/`.
- Deferred runtime activation, OzLedger activation, internal automation layers, local-model workflows, and external export lanes.

## 2026-06-12

- Adopted six-mode Failure Radar doctrine v0.2 (adds `standard+` and `deep-lite`); modes and counter budgets are registry-guarded (`registry/stable-surfaces.json`).
- Attached proof contracts to truth states ("no proof = one rung lower").
- Made negative-memory retrieval a mandatory `/oz-start` gate ("searched, no hits" is valid; a missing block is a halt).
- Moved real receipts, checkpoints, handoffs, and failure inboxes behind the private-vault boundary; the public repo ships fixtures only.
- Added context-fingerprint pre-flight, session failure inbox with blocking drain, `/oz-handoff`, stable-surface guard, structural eval harness, size ratchet, CI, and DCO.
- Re-derived example validation from the schema files; re-baselined example budgets into v0.2 bands.
