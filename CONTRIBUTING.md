# Contributing

`oz-skilltree` is docs-first, schema-backed, and boundary-aware. Contributions should improve failure prediction, routing, receipt quality, or verification discipline without creating runtime bloat.

## Ground Rules

- Preserve Apache-2.0.
- Keep raw/internal taxonomy artifacts out of the public-safe branch.
- Do not collapse source material into derived interpretation.
- Preserve the 42 stable failure families and 16 stable counter family IDs.
- Preserve public/private classification.
- Do not claim benchmark results unless the benchmark was actually run.
- Do not add runtime activation, agents, MCP servers, dashboards, telemetry, or deployment systems.
- Do not add private implementation details, secrets, PHI, private patient data, collaborator names, or unsupported product claims.

## Change Shape

Prefer small, reviewable changes:

- update docs before adding new docs
- update schemas when examples change
- update examples when command or receipt behavior changes
- run `npm test` before proposing a change

## Public Failure Atlas Changes

The private Failure Atlas source exists outside this public-safe branch. Do not add raw/internal taxonomy artifacts or private provenance paths to this branch.

Future public notes must use the public naming layer under `research/public-failure-atlas/` and must preserve the public/private boundary.

## Pull Request Checklist

- [ ] Source/raw/derived hierarchy preserved
- [ ] Truth states remain distinct
- [ ] Approval ladder remains intact
- [ ] Schemas parse
- [ ] Links pass
- [ ] Private leak check passes
- [ ] No benchmark or runtime claims added
