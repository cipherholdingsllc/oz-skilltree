# Architecture Map

`oz-skilltree` is not a mono-goal tool. It is a routing protocol that turns operator intent into a scoped, evidence-backed execution window.

## Public Flow

```text
operator intent
  -> OzReceipt namespace
  -> OzTriage
  -> domain producer stack
  -> failure-radar score receipt
  -> countermap receipt
  -> YBR full-road map
  -> gate-runner execution window
  -> gate receipts
  -> /oz-result closeout
  -> receipt graph memory
```

## Components

| Component | Job | Output |
|---|---|---|
| operator intent | states the goal, constraints, and desired outcome | goal contract |
| OzReceipt namespace | names the durable artifact space for the run | receipt ID and file scope |
| OzTriage | assigns the domain stack and risk mode | producer stack |
| domain producers | supply rubrics, failure maps, counters, evidence requirements, forbidden actions, and verification gates | producer packets |
| Failure Radar | predicts failure families and produces a scored receipt | score receipt |
| Countermap | lists explicit selected, reserved, and not-needed counters | countermap receipt |
| YBR | maps the full road, rejected routes, approval ceiling, and next gate | full-road receipt |
| gate-runner | executes the safest verified execution window | gate receipts |
| `/oz-result` | records closeout, truth-state movement, and negative memory | result receipt |
| receipt graph | connects runs over time | reusable memory |

## Boundary

This public architecture map describes protocol surfaces only. It does not define a runtime, agent framework, telemetry system, dashboard, or autonomous execution service.
