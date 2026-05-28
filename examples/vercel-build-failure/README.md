# Vercel Build Failure Example

This fixture shows a deep-mode build-failure route without inventing logs, deploys, or outcomes.

## Files

- [input.md](input.md) - operator input
- [failure-radar.json](failure-radar.json) - selected mode and likely failure families
- [countermap.json](countermap.json) - counters selected before repair
- [ybr-route.json](ybr-route.json) - route selection
- [ozreceipt.json](ozreceipt.json) - receipt shape
- [oz-result.json](oz-result.json) - closeout shape

## Selected Failure Radar Mode

`deep`

Reason: build failures can involve package manager drift, wrong working directory, and false green verification.

## Route Summary

Inspect repo and package authority, reproduce the build locally, then patch only the proven failing surface.

## Boundary

This example does not claim a real Vercel deploy, real logs, or benchmark outcome.
