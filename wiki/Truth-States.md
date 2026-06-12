# Truth States

Back to [[Home]].

Truth states:

1. `claimed`
2. `observed`
3. `verified`
4. `committed`
5. `pushed`
6. `deployed`
7. `delivered`

## Rules

- `claimed` is not `verified`.
- `observed` is not `verified`.
- `committed` is not `pushed`.
- `pushed` is not `deployed`.
- Benchmark results require actual benchmark evidence.

## Proof Contracts

Each truth state above `claimed` carries a machine-checkable proof contract. **A state recorded without its proof is reported one rung lower.** This converts the truth ladder from an honor system into a checkable contract.

| State | Required proof |
|---|---|
| `observed` | what was observed and where (file, output, surface) |
| `verified` | the verification command + exit code, with an output excerpt |
| `committed` | commit SHA |
| `pushed` | remote ref evidence (push output or `git ls-remote` line) |
| `deployed` | deployed artifact hash matching HEAD SHA, or deploy ID + status output |
| `delivered` | operator/recipient acknowledgment reference |

Receipts record proof in the `truth_state_proof` object (see `schemas/ozreceipt.schema.json`).

Related:

- [[Receipts-Index]]
- [[Approval-Ladder]]
