# Domain Producers

`oz-skilltree` avoids one mono-goal interface because software work fails differently across domains. A documentation polish task, release task, deployment task, and skill-creation task should not share the same rubric, forbidden actions, counters, or verification gates.

## Model

Operator-defined goal is intent assignment.

OzReceipt name is the artifact namespace.

OzTriage assigns the domain stack.

Domain producers act as execution and rubric adapters. They supply:

- task-specific rubric
- expected failure map
- selected counters
- evidence requirements
- forbidden actions
- verification gates
- route-change triggers
- stop conditions

## Public Producer Categories

| Producer | Use | Typical proof |
|---|---|---|
| GitProducer | branch, diff, commit, and push discipline | clean status, exact diff, commit SHA |
| VercelDeployProducer | deployment-oriented verification without assuming success | build/deploy logs, target project, runtime probe |
| PublicRepoReleaseProducer | public repository readiness | default branch, README, license, safety scan |
| SkillCreationProducer | skill-doc packaging and validation | manifest/doc checks, example invocation |
| DocumentationProducer | docs structure, links, clarity, and public navigation | link check, rendered path review |
| ClaimsSafetyProducer | public claim discipline and evidence boundaries | claim/evidence map, removed unsupported claims |

## Rule

If the producer stack is unclear, stop before editing. The safest route depends on the domain stack.
