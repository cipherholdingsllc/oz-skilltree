import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const schemaEntries = await readdir(path.join(root, "schemas"), { withFileTypes: true });
const requiredSchemas = schemaEntries
  .filter((entry) => entry.isFile() && entry.name.endsWith(".schema.json"))
  .map((entry) => `schemas/${entry.name}`)
  .sort();

const requiredByFile = {
  "ozreceipt.json": [
    "receipt_id",
    "status",
    "goal",
    "lane",
    "source_of_truth",
    "repo_context",
    "approval_ceiling",
    "candidate_universe_receipt",
    "failure_radar_mode",
    "top_failure_families",
    "countermap",
    "ybr_route",
    "execution_prompt",
    "stop_conditions",
    "truth_state_updates",
    "files_changed",
    "commands_run",
    "verification",
    "rejected_routes",
    "next_gate"
  ],
  "oz-result.json": [
    "receipt_id",
    "result_id",
    "truth_state_before",
    "truth_state_after",
    "counter_results",
    "negative_memory",
    "future_retrieval_tags",
    "changed_route_if_any",
    "files_changed",
    "commands_run",
    "verification",
    "closed",
    "next_gate"
  ],
  "failure-radar.json": [
    "mode",
    "why_this_mode",
    "top_failure_families",
    "unknowns",
    "first_safe_action",
    "stop_conditions",
    "route_change_triggers"
  ],
  "countermap.json": [
    "countermap_id",
    "mode",
    "max_counters",
    "counters",
    "reserved_counters",
    "exhaustion_protocol"
  ],
  "ybr-route.json": [
    "route_id",
    "selected_route",
    "why_this_route_wins",
    "failure_families_addressed",
    "counters_used_first",
    "counters_reserved",
    "first_safe_action",
    "approval_level",
    "verification_gate",
    "evidence_that_changes_route",
    "stop_condition",
    "next_approval_phrase"
  ],
  "bug-cognizant.json": [
    "xyz",
    "likely_future_builds",
    "integrations",
    "consumers",
    "language_runtime_boundaries",
    "data_state_contracts",
    "extension_points",
    "future_bug_families",
    "refactor_hazards",
    "scale_traps",
    "observability_hooks",
    "verification_hooks",
    "what_not_to_build_yet",
    "recommended_architecture"
  ],
  "oztriage-receipt.json": [
    "receipt_id",
    "primary_producer",
    "secondary_producers",
    "safety_producers",
    "rejected_producers",
    "grade",
    "score_out_of_10",
    "threshold",
    "status",
    "reason"
  ],
  "failure-radar-receipt.json": [
    "receipt_id",
    "mode",
    "grade",
    "score_out_of_10",
    "threshold",
    "status",
    "reason",
    "top_failure_families"
  ],
  "countermap-receipt.json": [
    "receipt_id",
    "mode",
    "counter_budget",
    "all_counters_selected",
    "counters_reserved",
    "counters_not_needed",
    "failure_to_counter_mapping",
    "verification_counters",
    "rollback_counters"
  ],
  "ybr-route-candidate-ledger.json": [
    "ledger_id",
    "why_route_count_was_sufficient",
    "route_candidates"
  ],
  "selected-ybr-route.json": [
    "selected_route",
    "selected_route_id",
    "grade",
    "score_out_of_10",
    "threshold",
    "why_this_route_wins",
    "winning_score_factors",
    "rejected_route_summary",
    "rejected_route_receipts",
    "route_weighted_scoring_rubric",
    "next_gates",
    "stop_conditions",
    "countermap_requirements",
    "gate_runner_implications",
    "receipt_status"
  ],
  "upgrade-candidate-ledger-sample.json": [
    "ledger_id",
    "route_weighted_scoring_rubric",
    "candidate_count_model",
    "sample_candidates"
  ],
  "gate-runner-receipt.json": [
    "receipt_id",
    "selected_route_id",
    "execution_window",
    "grade",
    "score_out_of_10",
    "threshold",
    "status",
    "reason",
    "gates"
  ],
  "ozledger-entry.json": [
    "ledger_entry_id",
    "receipt_id",
    "event_type",
    "truth_state",
    "relationships",
    "next_gate",
    "public_safe"
  ]
};

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const schemaPath of requiredSchemas) {
  const schema = await readJson(schemaPath);
  assert(schema.$schema, `${schemaPath} missing $schema`);
  assert(schema.title, `${schemaPath} missing title`);
  assert(schema.type === "object", `${schemaPath} must declare object root`);
  assert(Array.isArray(schema.required), `${schemaPath} missing required array`);
}

const examplesDir = path.join(root, "examples");
const exampleEntries = await readdir(examplesDir, { withFileTypes: true });
let checked = 0;

for (const entry of exampleEntries.filter((item) => item.isDirectory())) {
  const exampleName = entry.name;
  const examplePath = path.join(examplesDir, exampleName);
  const files = await readdir(examplePath);
  for (const file of files.filter((name) => name.endsWith(".json"))) {
    const data = JSON.parse(await readFile(path.join(examplePath, file), "utf8"));
    const required = requiredByFile[file];
    if (!required) continue;
    for (const key of required) {
      assert(Object.hasOwn(data, key), `${exampleName}/${file} missing ${key}`);
    }
    if (file === "countermap.json") {
      assert(data.max_counters <= 50, `${exampleName}/${file} exceeds countermap-50 cap`);
      assert(Array.isArray(data.counters), `${exampleName}/${file} counters must be an array`);
    }
    if (file === "failure-radar.json") {
      assert(["scan", "standard", "deep", "max"].includes(data.mode), `${exampleName}/${file} has invalid mode`);
    }
    if (file === "ybr-route-candidate-ledger.json") {
      assert(Array.isArray(data.route_candidates), `${exampleName}/${file} route_candidates must be an array`);
      for (const route of data.route_candidates) {
        for (const key of ["route_id", "route_name", "grade", "score_out_of_10", "threshold", "status", "why_rejected_or_selected"]) {
          assert(Object.hasOwn(route, key), `${exampleName}/${file} route candidate missing ${key}`);
        }
      }
    }
    if (file === "upgrade-candidate-ledger-sample.json") {
      assert(Array.isArray(data.sample_candidates), `${exampleName}/${file} sample_candidates must be an array`);
      for (const candidate of data.sample_candidates) {
        for (const key of ["candidate_id", "title", "grade", "score_out_of_10", "threshold", "status", "reason_5_words"]) {
          assert(Object.hasOwn(candidate, key), `${exampleName}/${file} candidate missing ${key}`);
        }
      }
    }
    checked += 1;
  }
}

assert(checked >= 25, `expected at least 25 example JSON files, checked ${checked}`);

console.log(`schemas valid; checked ${requiredSchemas.length} schemas and ${checked} example JSON files`);
