# Bug-Cognizant Dashboard Module Example

This fixture shows Bug-Cognizant as a future-build architecture lens before implementation.

## Files

- [input.md](input.md) - operator input
- [bug-cognizant.json](bug-cognizant.json) - future-build surface map
- [failure-radar.json](failure-radar.json) - selected mode and likely failure families
- [countermap.json](countermap.json) - counters selected before implementation
- [ybr-route.json](ybr-route.json) - route selection
- [ozreceipt.json](ozreceipt.json) - receipt shape
- [oz-result.json](oz-result.json) - closeout shape

## Selected Failure Radar Mode

`standard`

Reason: the task is architecture prediction, not mutation, but future boundary errors are plausible.

## Route Summary

Use Bug-Cognizant as a planning lens, then require `/oz-start` before implementation.

## Boundary

Bug-Cognizant does not create receipts by itself and does not implement the module.
