# Examples

Examples are sanitized fixtures that show protocol shape. They do not contain real logs, real users, benchmark outcomes, or deploy results.

Open these first:

1. [vercel-build-failure](vercel-build-failure/) for deep-mode build routing.
2. [bug-cognizant-dashboard-module](bug-cognizant-dashboard-module/) for future-build prediction.
3. [pr-review-routing-split](pr-review-routing-split/) for review/verification/patch separation.
4. [sanitized-gate-runner-receipt](sanitized-gate-runner-receipt/) for gate-runner receipt flow.
5. [sanitized-skill-flow](sanitized-skill-flow/) for route-aware `/oz-start`, route ledgers, and OzLedger entry shape.

The three scenario examples (1–3) each include: `input.md`, `failure-radar.json`, `countermap.json`, `ybr-route.json`, `ozreceipt.json`, `oz-result.json` (Bug-Cognizant adds `bug-cognizant.json`). The two sanitized examples carry their own file sets — markdown receipt fixtures for the gate-runner example, and the route-ledger receipt chain for the skill-flow example; see each README.

The vercel-build-failure flagship models the current v0.2 receipt shape, including the mandatory `negative_memory_retrieval` block, `context_fingerprint`, `truth_state_proof`, and the `/oz-result` `failure_inbox_drain`. The other fixtures predate those blocks (they remain schema-valid; the blocks are doctrine-mandatory for real runs).
