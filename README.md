# oz-skilltree

v0.1 Edition:

Failure-aware execution protocol for AI-assisted software engineering.

<p align="center">
<strong>frame → generate → score → receipt</strong><br>
<strong>predict → counter → pathfind → route</strong><br>
<strong>build → verify → close → receipt</strong><br>
<strong>retrieve → refine → improve</strong>
</p>

<p align="center"><strong>AI speed with senior-engineer foresight.</strong></p>

`oz-skilltree` is a docs-first, schema-backed protocol for AI-assisted software work. It helps an operator predict likely failures, choose a safe route, verify the result, and leave an auditable receipt.

Core promise: **Predict failure. Route safely. Prove the result. Leave a receipt.**

## Start Here

- [Architecture map](docs/architecture-map.md)
- [Skill flow](docs/skill-flow.md)
- [Route-aware /oz-start](docs/oz-start.md)
- [YBR route selection](docs/ybr-route-selection.md)
- [Candidate ledgers](docs/candidate-ledgers.md)
- [Domain producers](docs/domain-producers.md)
- [Scoring rubric](docs/scoring-rubric.md)
- [Countermap receipts](docs/countermap-receipts.md)
- [Receipt graph](docs/receipt-graph.md)
- [Sanitized skill-flow example](examples/sanitized-skill-flow/)
- [Sanitized gate-runner example](examples/sanitized-gate-runner-receipt/)
- [Release checklist](RELEASE.md)

## What Is oz-skilltree?

`oz-skilltree` is an operating protocol, not a runtime. It gives AI coding workflows a structured loop for:

- defining source of truth before mutation
- predicting failure families before edits
- selecting counters before repair
- choosing routes with YellowBrickRoad
- preserving truth states honestly
- closing serious work with OzReceipts

The repository is intentionally plain: Markdown docs, JSON schemas, examples, wiki pages, and lightweight Node validation scripts.

## Why AI Coding Agents Fail

AI coding agents tend to fail when execution outruns evidence. Common patterns:

- wrong repo, worktree, branch, or package boundary
- stale plan reuse after new evidence appears
- false green builds or stale deploy status
- skipped acceptance criteria or weak verification
- overbroad edits that solve one issue and create another
- public/private boundary mistakes
- completion summaries that collapse `claimed` into `verified`

`oz-skilltree` turns those failure modes into predictable routing work.

## Protocol Loop

| Step | Question | Output |
|---|---|---|
| frame | What is the goal, lane, source of truth, and approval ceiling? | OzReceipt draft |
| generate | What weak, mediocre, good, and strong routes exist? | calibrated candidate universe |
| score | Which routes are real A/A+ options? | route candidates |
| receipt | What durable memory container owns this run? | OzReceipt |
| predict | What can fail? | Failure Radar |
| counter | What prevents, diagnoses, repairs, verifies, or rolls back failure? | Countermap |
| pathfind | Which viable path fits the evidence? | Pathfinder notes |
| route | Which route wins on safety, reversibility, scope, and proof? | YBR route |
| build | What changes inside the route? | files and commands |
| verify | What is actually proved? | truth-state update |
| close | What did we learn? | `/oz-result` |
| retrieve | What should future work reuse or avoid? | tags and negative memory |

Start with [docs/protocol.md](docs/protocol.md) or the Obsidian entry point at [wiki/Home.md](wiki/Home.md).

## Command Map

| Command | Job | Receipt behavior |
|---|---|---|
| `/oz-start` | Start a serious goal, create/draft one OzReceipt, select mode, counters, and route | only command that creates new OzReceipts |
| `/oz` | One-response upgrade, repair, comparison, compression, judgment, or pathfinding pass | continuation-only; halts without one active receipt |
| `/oz-result` | Closeout and truth-state update | attaches to one active receipt or halts |
| `/bug-cognizant` | Future-build-aware architecture prediction | does not create receipts; hands serious work to `/oz-start` |

If no active OzReceipt exists, continuation-only work halts with `NO_ACTIVE_OZRECEIPT`. If multiple active receipts exist, it halts with `AMBIGUOUS_ACTIVE_OZRECEIPT`.

Command docs: [commands/](commands/). Skill docs: [skills/](skills/).

## Receipt Memory

OzReceipts are the memory layer. They record:

- goal, lane, repo/context, source of truth, and approval ceiling
- candidate universe summary
- selected Failure Radar mode
- top failure families
- Countermap and YBR route
- stop conditions and rejected routes
- files changed and commands run
- verification evidence
- truth-state movement
- negative memory and future retrieval tags

See [docs/receipt-memory.md](docs/receipt-memory.md) and [wiki/templates/ozreceipt.md](wiki/templates/ozreceipt.md).

## Public Failure Atlas

`oz-skilltree` is informed by a source-locked Failure Atlas maintained outside the public-safe branch.

This repository does not include raw/internal taxonomy artifacts. It includes public-safe protocol surfaces, schemas, examples, and boundary notes derived from that research discipline.

Open:

- [research/public-failure-atlas/PUBLIC_FAILURE_ATLAS_OVERVIEW.md](research/public-failure-atlas/PUBLIC_FAILURE_ATLAS_OVERVIEW.md)
- [research/public-failure-atlas/PUBLIC_SOURCE_BOUNDARY.md](research/public-failure-atlas/PUBLIC_SOURCE_BOUNDARY.md)
- [research/public-failure-atlas/PUBLIC_DERIVATION_NOTE.md](research/public-failure-atlas/PUBLIC_DERIVATION_NOTE.md)

Derived docs must preserve:

- 42 stable failure families
- 16 stable counter family IDs
- `failure-radar-max`
- `countermap-50`
- full YBR route schema
- OzReceipt and `/oz-result` schemas
- public/private classification
- stop conditions and no-runtime boundaries

## Examples

Examples are sanitized fixtures. They do not include fake logs, fake users, fake benchmark results, or fake deploy outcomes.

| Example | Shows |
|---|---|
| [vercel-build-failure](examples/vercel-build-failure/) | deep-mode build-failure routing without deploy claims |
| [bug-cognizant-dashboard-module](examples/bug-cognizant-dashboard-module/) | future-build architecture prediction before implementation |
| [pr-review-routing-split](examples/pr-review-routing-split/) | separating PR review, verification, and optional patch work |

Each example includes input, selected Failure Radar mode, Countermap, YBR route, receipt, and `/oz-result`.

## Schemas

Schemas live in [schemas/](schemas/):

- OzReceipt
- `/oz-result`
- Failure Radar
- Countermap
- YBR route
- Bug-Cognizant
- Failure Atlas metadata

Run all local checks:

```sh
npm test
```

## Benchmarks

The benchmark plan is methodology-only. It explains how to compare baseline Claude/Codex workflows against `oz-skilltree`-augmented workflows using solve rate, wrong-file edits, blocked-loop count, verification quality, and regression risk.

No benchmark results are claimed. See [benchmarks/README.md](benchmarks/README.md).

## Public-Safety / Source-Lock Note

This public-safe branch intentionally excludes raw/internal taxonomy artifacts from both files and branch history. Before pushing to a public GitHub repo, run a manual public-safety review and confirm that only public-safe protocol surfaces, summaries, schemas, examples, and boundary notes are present.

Use [docs/public-release-checklist.md](docs/public-release-checklist.md) before release.

## Non-Goals

`oz-skilltree` is not:

- an autonomous agent
- a runtime, app, server, dashboard, MCP, or telemetry system
- a deployment tool
- a benchmark-result claim
- a security, compliance, medical, legal, or financial guarantee
- a zero-bug guarantee
- a replacement for human approval on high-risk work

Deferred unless explicitly approved later: OzLedger activation, Hermes activation, Ollama/Qwen local-model workflows, AI Cities / Vibe-to-Verified public export lane, and runtime activation.

## Roadmap

1. Keep the protocol docs small, navigable, and boundary-aware.
2. Collect real, sanitized OzReceipts from representative coding tasks.
3. Calibrate failure-family ranking against actual receipts.
4. Strengthen examples and schema fixtures without claiming benchmark results.
5. Prepare a public-safe release by removing or sanitizing internal raw artifacts if required.
