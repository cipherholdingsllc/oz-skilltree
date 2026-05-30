# YBR Route Selection

YBR maps possible routes before upgrade scoring.

For complex goals, YBR should identify up to 20 route candidates. For simpler goals, fewer routes are allowed only when `why_route_count_was_sufficient` is recorded.

YBR route candidates must be scored before the 200 upgrade candidates. The selected YBR route creates the `route_weighted_scoring_rubric`.

## YBR RECEIPT LAW

- No YBR route receipt = that route was not evaluated.
- No selected-route receipt = route was not selected.
- No rejected-route receipt = route was not rejected.
- No `route_weighted_scoring_rubric` = upgrade scoring is not route-aware.

## Route Candidate Fields

Every `ybr_route_candidate_receipt` must include:

- route_id
- route_name
- grade
- score_out_of_10
- threshold
- status: selected, rejected, reserved, or needs_recheck
- score_reason
- reason_5_words
- failure_risk
- reversibility
- verification_strength
- time_to_value
- scope_fit
- counter_coverage
- producer_alignment
- why_rejected_or_selected
- receipt_status

## Selected Route Fields

Every `selected_ybr_route_receipt` must include:

- selected_route: true
- selected_route_id
- grade
- score_out_of_10
- threshold
- why_this_route_wins
- winning_score_factors
- rejected_route_summary
- rejected_route_receipts
- route_weighted_scoring_rubric
- next_gates
- stop_conditions
- countermap_requirements
- gate_runner_implications
- receipt_status
