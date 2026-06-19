# Examples

Examples are sanitized fixtures that show protocol shape. They do not contain real logs, real users, benchmark outcomes, or deploy results.

Open these first:

1. [agent-drift-recovery](agent-drift-recovery/) for stale-plan, wrong-surface, boundary, and false-completion recovery.
2. [vercel-build-failure](vercel-build-failure/) for basic deep-mode build-failure routing.
3. [bug-cognizant-dashboard-module](bug-cognizant-dashboard-module/) for future-build prediction.
4. [pr-review-routing-split](pr-review-routing-split/) for review/verification/patch separation.
5. [sanitized-gate-runner-receipt](sanitized-gate-runner-receipt/) for gate-runner receipt flow.
6. [sanitized-skill-flow](sanitized-skill-flow/) for route-aware skill-flow ledgers after the `/oz-start` front door.

The scenario examples include: `input.md`, `failure-radar.json`, `countermap.json`, `ybr-route.json`, `ozreceipt.json`, `oz-result.json` (Bug-Cognizant adds `bug-cognizant.json`; Agent Drift Recovery also includes selected-route, route-ledger, upgrade-ledger, and gate-runner fixtures). The two sanitized examples carry their own file sets — markdown receipt fixtures for the gate-runner example, and the route-ledger receipt chain for the skill-flow example; see each README.

The agent-drift-recovery flagship models the current v0.2 receipt shape, including the mandatory `/oz-start` front door, `negative_memory_retrieval` block, `context_fingerprint`, `truth_state_proof`, and the `/oz-result` `failure_inbox_drain`. Older fixtures remain useful, but they are secondary examples and should not be treated as the primary front door for serious goals.
