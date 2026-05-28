# PR Review Routing Split Example

This fixture shows how to separate review judgment, local verification, and optional patch work.

## Files

- [input.md](input.md) - operator input
- [failure-radar.json](failure-radar.json) - selected mode and likely failure families
- [countermap.json](countermap.json) - counters selected before patching
- [ybr-route.json](ybr-route.json) - route selection
- [ozreceipt.json](ozreceipt.json) - receipt shape
- [oz-result.json](oz-result.json) - closeout shape

## Selected Failure Radar Mode

`deep`

Reason: PR review can mix findings, edits, verification, branch state, and merge readiness.

## Route Summary

Review first, verify second, patch only if findings are reproducible and in scope.

## Boundary

This example does not claim a real PR, real test outcome, or merge readiness.
