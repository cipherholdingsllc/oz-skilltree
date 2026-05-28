import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const requiredSchemas = [
  "schemas/ozreceipt.schema.json",
  "schemas/oz-result.schema.json",
  "schemas/failure-radar.schema.json",
  "schemas/countermap.schema.json",
  "schemas/bug-cognizant.schema.json",
  "schemas/failure-atlas.schema.json",
  "schemas/ybr-route.schema.json"
];

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
    checked += 1;
  }
}

assert(checked >= 16, `expected at least 16 example JSON files, checked ${checked}`);

console.log(`schemas valid; checked ${requiredSchemas.length} schemas and ${checked} example JSON files`);
