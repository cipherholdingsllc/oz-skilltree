# Receipts — Boundary Note

Real OzReceipts live in private vaults, never in this public repository. The root `receipts/` path is gitignored except `receipts/fixtures/`.

Public receipt material lives in three sanctioned places:

- [examples/](../../examples/) — sanitized worked-example fixtures
- [field-receipts/](../../field-receipts/) — sanitized real-use receipts, published in batches after `npm run check:private` and operator review
- `receipts/fixtures/` — schema-valid fixtures for tooling tests

Naming for private-vault receipts: `OzReceipt-{short-goal}-{YYYY-MM-DD}.md`.
