# Public Source Boundary

This file defines the public branch boundary for Failure Atlas material.

## Boundary Statement

The private Failure Atlas source exists and is source-locked outside this public branch. This branch does not include raw/internal taxonomy artifacts, private source-lock files, or private provenance paths.

Public docs may describe the protocol surfaces influenced by the private source, but they must not imply that the private source is included here.

## Public Rules

- Do not include raw/internal taxonomy files.
- Do not reuse private/internal taxonomy filenames.
- Do not expose private provenance paths.
- Do not downgrade private/internal classifications.
- Do not claim the taxonomy is exhaustive.
- Do not claim `oz-skilltree` guarantees zero bugs.
- Do not claim benchmark results unless actually run and documented.

## Branch History Rule

The public-safe branch must be created without raw/internal taxonomy artifacts in its history. Deleting such files after committing them is not sufficient for public release.
