# Release Checklist

Use this checklist before pushing public changes, tagging a release, or changing the default branch.

## Pre-Push Checks

Run:

```sh
npm test
npm run validate:schemas
npm run check:links
npm run check:private
git status --short
```

The working tree should be clean after the release commit.

## Public-Safety Checks

- No raw/internal taxonomy artifacts.
- No private taxonomy filenames.
- No private absolute paths.
- No secrets or credentials.
- No private receipts or private message content.
- No collaborator names or private personal data.
- No private implementation strategy.
- No unsupported benchmark results.
- No fake metrics, fake badges, fake telemetry, or implied runtime.

## Doctrine + CI Notes

- Mode doctrine version: v0.2 (six-mode). Doctrine changes follow the amendment rule in CONTRIBUTING.md (doctrine + its test in the same commit).
- Branch protection should require the CI workflow (`.github/workflows/ci.yml`) on the public branch.
- The local pre-push leak check is mandatory, not optional: run `npm run check:private` (plus your gitignored `scripts/check-private-leaks.local.mjs` extension patterns) before any push. CI runs only the public-safe patterns; private literals enforce locally by design.

## Branch Notes

- Publish from the public-safe branch only.
- Do not push local `main` unless the operator explicitly approves a clean-history rename or replacement plan.
- Do not force push as part of ordinary release work.
- Do not change the GitHub default branch unless the target branch has passed the public-safety checks.

## Release Rule

A release is not ready until the public tree, public branch history, README, examples, and validation scripts all agree about what the repo is: a protocol, schema, examples, and receipt discipline package.
