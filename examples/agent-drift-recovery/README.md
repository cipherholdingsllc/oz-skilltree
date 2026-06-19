# Agent Drift Recovery Example

This fixture shows how `oz-skilltree` handles a common AI coding-agent failure: a stale plan starts editing the wrong surface after repo state, branch state, and verification evidence diverge.

The route starts with `/oz-start`, captures context fingerprint, records negative-memory retrieval, predicts likely drift failures, selects a safer YellowBrickRoad route, limits mutation scope, verifies only what is proven, and closes with truth-state proof.

## Scenario

Goal: fix a failing dashboard smoke test without touching private/internal material, unrelated package boundaries, or unverified dependency surfaces.

A prior agent plan suggested editing a dashboard shell component. Current evidence shows the failure may be in routing behavior instead. The protocol must stop stale-plan reuse, inspect current source of truth, and permit only a targeted patch after evidence narrows the failing surface.

## Receipt Chain

1. [`input.md`](input.md) defines the sanitized request and approval ceiling.
2. [`failure-radar.json`](failure-radar.json) selects `deep` mode for stale-plan, branch/context, boundary, and false-completion risk.
3. [`countermap.json`](countermap.json) maps the first counters to repo truth, negative memory, public/private boundary, and verification evidence.
4. [`ybr-route-candidate-ledger.json`](ybr-route-candidate-ledger.json) compares candidate routes before scoring upgrades.
5. [`selected-ybr-route.json`](selected-ybr-route.json) records the route choice and rejected alternatives.
6. [`ybr-route.json`](ybr-route.json) converts the selected route into the execution contract.
7. [`upgrade-candidate-ledger-sample.json`](upgrade-candidate-ledger-sample.json) shows scoped implement-now upgrades and rejected overbuild.
8. [`gate-runner-receipt.json`](gate-runner-receipt.json) opens a bounded execution window.
9. [`ozreceipt.json`](ozreceipt.json) records `/oz-start` context, retrieval, route, verification, and truth-state proof.
10. [`oz-result.json`](oz-result.json) closes with the verified proof and future retrieval tags.

## Selected Failure Radar Mode

`deep`

Reason: this task combines stale-plan risk, branch/context ambiguity, wrong-surface edit risk, public/private boundary risk, overbroad patch risk, and false-completion risk.

## Route Summary

Do not patch from the stale plan. Fingerprint repo state, run negative-memory retrieval, identify the current failing surface, quarantine private paths, run the smallest reproducible verification, patch only the proven boundary, and promote truth state only when proof exists.

## Boundary

This is a sanitized fixture. It does not include private paths, real users, real logs, fake benchmark outcomes, deploy claims, production incidents, or field-receipt claims.
