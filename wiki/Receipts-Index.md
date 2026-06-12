# Receipts Index

Back to [[Home]].

Real OzReceipts live in private vaults — never in this public repo (`receipts/` is gitignored except fixtures). Sanitized receipts are published in batches through [field-receipts](../field-receipts/). See [[Receipts/README|the boundary note]].

## Open Receipts

No active receipt is shipped with this starter repo.

## Example Receipts

- [Vercel build failure](../examples/vercel-build-failure/ozreceipt.json)
- [Bug-Cognizant dashboard module](../examples/bug-cognizant-dashboard-module/ozreceipt.json)
- [PR review routing split](../examples/pr-review-routing-split/ozreceipt.json)

## Rule

Every serious run starts with `/oz-start` and ends with `/oz-result`.

If no active OzReceipt exists, continuation work halts with `NO_ACTIVE_OZRECEIPT`. If multiple active receipts exist, it halts with `AMBIGUOUS_ACTIVE_OZRECEIPT`.
