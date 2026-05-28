# Public Release Checklist

Use this before pushing the repository to a public remote.

## Public Failure Atlas Review

- [ ] Raw/internal taxonomy artifacts are absent from this branch.
- [ ] Private/internal taxonomy filenames are absent from this branch.
- [ ] Public source-boundary notes remain visible.
- [ ] Public docs do not imply the private source is included.
- [ ] Public/private classifications are preserved.

## Safety Review

- [ ] No secrets or credentials.
- [ ] No PHI or private patient data.
- [ ] No private implementation details.
- [ ] No collaborator names or personal data.
- [ ] No private absolute paths.
- [ ] No private CipherOS claims in public-facing docs.
- [ ] No private 2OPMD details in public-facing docs.

## Claims Review

- [ ] No benchmark results unless actually run.
- [ ] No zero-bug guarantee.
- [ ] No medical, legal, financial, security, or compliance guarantee.
- [ ] No runtime, dashboard, telemetry, MCP, deploy, or autonomous-agent claim.

## Release Recommendation

If raw/internal artifacts or private provenance paths are needed, prefer one of:

- keep the repo private for now
- remove raw/internal artifacts from the public branch
- publish only sanitized pointers and derived public-safe summaries

Do not push public until this decision is explicit.
