# Forward Gate

The Forward Gate is the judgment layer **upstream of `/oz-start`**: it decides
whether work deserves a receipt at all, before any protocol machinery spins
up. Run it when the best next move is unclear — a go/no-go call, competing
paths, an overbuild concern, or an idea that is exciting but unproven.

Skip it when the next action is already obvious. Gating the obvious is
ceremony, and ceremony is a failure mode here.

> Provenance: distilled from the WizardOZ method (same org), absorbed into
> oz-skilltree when that repo was retired. Identity-free by design: this is
> a public-safe decision rule, not private context or hidden memory.

## Three Tests

| Test | Question | Fail signal |
|---|---|---|
| Direction Fit | Does this preserve the stated direction? | It chases a seductive tangent, changes the product, or reframes the goal without permission |
| Decision Leverage | Does this materially improve the next move? | Interesting, but nothing about what happens next changes |
| Execution Readiness | Is this ready enough to act on safely? | Missing constraints, acceptance criteria, source grounding, or an implementation path |

## Five Outputs — mapped to protocol actions

Use exactly one:

| Output | When | Protocol action |
|---|---|---|
| `proceed` | All three tests pass | Open the mission with `/oz-start` (retrieval gate, mode, counters, route) |
| `plan_first` | Direction and leverage pass; execution needs sequencing | Draft the execution package; `/oz-start` when it is ready to act on |
| `ask_one_question` | One missing answer would materially change the work | Ask the single highest-leverage question; no receipt yet |
| `defer` | Valid idea, wrong timing or cost | Record it as negative memory or a tagged backlog note — retrievable by a future `/oz-start` retrieval gate; no receipt |
| `reject` | Unsafe, off-scope, redundant, or misleading | State why; record the reason so the retrieval gate surfaces it if the idea returns |

`defer` and `reject` are not dead ends — they are write-side entries for the
retrieval gate. An idea rejected with a recorded reason cannot silently
return next quarter wearing a new name.

## Anti-patterns

- Running the gate on tiny obvious edits (ceremony).
- Listing options without choosing one output.
- Choosing `proceed` because the idea is exciting rather than because all
  three tests pass — excitement is a symptom, not a credential.
- Using the gate to relitigate a direction the operator has already set.

Related: [oz-start.md](oz-start.md) · [ybr-route-selection.md](ybr-route-selection.md) (tactical route selection *inside* an opened mission — the gate decides whether to open one).
