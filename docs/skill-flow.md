# Skill Flow

`oz-skilltree` is not a mono-goal tool. It is a route-aware protocol for turning operator intent into a scored, verified execution package.

## Public Flow

```text
Operator Intent
  -> Context Fingerprint + Negative-Memory Retrieval Gate
  -> OzTriage
  -> Domain Producers
  -> Failure Radar
  -> Countermap
  -> YBR Route Candidate Ledger
  -> Selected YBR Route
  -> Route-Weighted Scoring Rubric
  -> 200 Upgrade Candidate Ledger
  -> Gate Runner Execution Window
  -> OzReceipt
  -> OzLedger / Receipt Graph
  -> OzResult Closeout
```

## Stage Contracts

| Stage | Consumes | Emits | Receipt proof |
|---|---|---|---|
| Operator Intent | goal, constraints, approval ceiling | intent packet | OzReceipt namespace |
| Fingerprint + Retrieval Gate | repo state, prior receipts, negative memory | context fingerprint, retrieval block ("no hits" is valid; missing block halts) | OzReceipt blocks |
| OzTriage | intent packet, public-safe context | selected domain stack | OzTriage receipt |
| Domain Producers | domain stack | rubrics, failure maps, counters, evidence rules, forbidden actions, gates | domain producer receipt |
| Failure Radar | producer packets, goal, context | scored failure families | failure-radar receipt |
| Countermap | failure families, mode, producer counters | selected/reserved/not-needed counters | countermap receipt |
| YBR Route Candidate Ledger | failure radar, countermap, producer gates | route candidates | ybr_route_candidate_receipt |
| Selected YBR Route | route candidate ledger | selected route and rejected-route summary | selected_ybr_route_receipt |
| Route-Weighted Scoring Rubric | selected route | scoring weights for upgrades | route_weighted_scoring_rubric receipt |
| 200 Upgrade Candidate Ledger | selected route and rubric | scored candidate ledger | upgrade candidate receipts |
| Gate Runner Execution Window | A/A+ plan package and approval ceiling | safest execution window | gate-runner receipt |
| OzReceipt | all receipts and execution evidence | proof object | OzReceipt |
| OzLedger / Receipt Graph | durable public-safe receipts | indexed graph node | ledger entry |
| OzResult Closeout | verification and counter outcomes | truth-state update | OzResult receipt |

## Public Boundary

This public flow is a protocol surface. Private/internal source material is not included in this repository, and this repo does not implement a runtime database, telemetry system, agent framework, or autonomous executor.
