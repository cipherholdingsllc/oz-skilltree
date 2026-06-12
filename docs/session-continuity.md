# Session Continuity

Three mechanisms keep protocol state alive across interruptions: the failure inbox, checkpoints, and handoff briefs. Together they close the three capture leaks: failures with no open receipt vanish, silently-fixed mid-session failures vanish, and crashes vanish with their state.

Boundary rule: this document specifies formats. Real inbox files, checkpoints, and handoff briefs from actual work live in private vaults, never in this public repository. `receipts/` is gitignored here except `receipts/fixtures/`.

## 1 · Failure Inbox (append-only)

Every error, retry, or correction gets logged the moment it occurs — receipt open or not. Silent fixes are the highest-frequency data points and the first thing memory loses.

Location: `receipts/failure-inbox.md` (private vault). Entry format, one line each:

```
- ts: <ISO8601> | what: <error/retry/correction in one clause> | fix: <what resolved it, or "unresolved"> | classified: pending
```

Drain protocol: `/oz-result` must drain the inbox at close — every `classified: pending` entry becomes (a) evidence for an existing failure family, (b) a candidate new family observation, or (c) noise, explicitly marked. Close is blocked while unclassified entries remain unless they are explicitly carried forward with a reason.

## 2 · Checkpoints

After every truth-state movement or risky action, append a delta line so an unintentional session termination costs at most one step.

Location: `receipts/checkpoints/<receipt_id>.md` (private vault). Delta format:

```
- ts: <ISO8601> | truth: <state> | did: <last completed action> | next: <intended next action>
```

Resume procedure at `/oz-start`: if an open receipt has a checkpoint file, load the receipt, the latest checkpoint delta, and a fresh context fingerprint (`node scripts/context-fingerprint.mjs`) before any new action.

## 3 · Handoff Briefs

A handoff brief is receipt-scoped, written at a deterministic path, and consumable by any session, terminal, or tool. See [commands/oz-handoff.md](../commands/oz-handoff.md).

Trigger modes:

| Trigger | What happens |
|---|---|
| close | deliberate handoff; brief written intentionally |
| park | receipt status moves to `blocked`; brief states the unblock condition |
| crash | no brief exists; resume from receipt + latest checkpoint + fresh fingerprint |

Location: `receipts/handoffs/<receipt_id>.md` (private vault). A brief must contain: goal, lane, truth state with proof status, last verified action, next gate, stop conditions, and a context fingerprint block.
