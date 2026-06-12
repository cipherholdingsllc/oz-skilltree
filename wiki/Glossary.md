# Glossary

Back to [[Home]].

| Term | Meaning |
|---|---|
| OzReceipt | durable run record for a serious goal |
| Failure Radar | failure-family prediction pass |
| Countermap-50 | ordered counter plan, capped at 50 unless approved |
| YellowBrickRoad | route selector |
| Pathfinder | comparison lens for viable routes |
| Truth state | proof status of a claim or result |
| Approval ceiling | maximum allowed action level |
| Negative memory | recorded trap to avoid repeating |
| Retrieval gate | mandatory search of prior receipts/negative memory at `/oz-start`; "no hits" recorded is valid, a missing block is a halt |
| Context fingerprint | deterministic repo/branch/HEAD/lockfile capture stamped into a receipt at task start |
| Proof contract | the evidence a truth state requires; a state without proof reports one rung lower |
| Failure inbox | append-only log of every error/retry/correction at the moment it occurs, drained at `/oz-result` |
| Checkpoint | receipt state delta written after each truth-state move so a crash costs at most one step |
| Handoff brief | receipt-scoped resume brief at a deterministic path, consumable by any fresh session |
| Mode doctrine version | version stamp on the Failure Radar mode set (current: v0.2 six-mode) |
| Public source boundary | release-safe boundary between public protocol docs and private source research |
