# Schemas

Schemas define the expected shape of protocol artifacts and examples.

Open these first:

1. [ozreceipt.schema.json](ozreceipt.schema.json)
2. [oz-result.schema.json](oz-result.schema.json)
3. [failure-radar.schema.json](failure-radar.schema.json)
4. [countermap.schema.json](countermap.schema.json)
5. [ybr-route.schema.json](ybr-route.schema.json)

Supporting schemas:

- [bug-cognizant.schema.json](bug-cognizant.schema.json)
- [failure-atlas.schema.json](failure-atlas.schema.json) for public Failure Atlas metadata and source-boundary flags
- [domain-producer-receipt.schema.json](domain-producer-receipt.schema.json)
- [scoring-receipt.schema.json](scoring-receipt.schema.json)
- [countermap-receipt.schema.json](countermap-receipt.schema.json)
- [ybr-route-candidate.schema.json](ybr-route-candidate.schema.json)
- [selected-ybr-route.schema.json](selected-ybr-route.schema.json)
- [upgrade-candidate.schema.json](upgrade-candidate.schema.json)
- [gate-runner-receipt.schema.json](gate-runner-receipt.schema.json)
- [ozledger-entry.schema.json](ozledger-entry.schema.json)
- [oz-start-ledger.schema.json](oz-start-ledger.schema.json)

Validate with:

```sh
npm run validate:schemas
```
