// Schema + example validator. Examples are validated AGAINST THE SCHEMA FILES
// (required keys, enum membership, additionalProperties) — never against a
// hand-maintained shadow list, which is how fixture/schema drift previously
// passed CI unseen. Mode names and counter budgets come from
// registry/stable-surfaces.json, the single source of truth.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const registry = await readJson("registry/stable-surfaces.json");

const schemaEntries = await readdir(path.join(root, "schemas"), { withFileTypes: true });
const requiredSchemas = schemaEntries
  .filter((entry) => entry.isFile() && entry.name.endsWith(".schema.json"))
  .map((entry) => `schemas/${entry.name}`)
  .sort();

for (const schemaPath of requiredSchemas) {
  const schema = await readJson(schemaPath);
  assert(schema.$schema, `${schemaPath} missing $schema`);
  assert(schema.title, `${schemaPath} missing title`);
  assert(schema.type === "object", `${schemaPath} must declare object root`);
  assert(Array.isArray(schema.required), `${schemaPath} missing required array`);
}

// Example artifacts with a governing schema: validated from the schema itself.
const schemaByExample = {
  "ozreceipt.json": "schemas/ozreceipt.schema.json",
  "oz-result.json": "schemas/oz-result.schema.json",
  "failure-radar.json": "schemas/failure-radar.schema.json",
  "countermap.json": "schemas/countermap.schema.json",
  "countermap-receipt.json": "schemas/countermap-receipt.schema.json",
  "ybr-route.json": "schemas/ybr-route.schema.json",
  "bug-cognizant.json": "schemas/bug-cognizant.schema.json",
  "gate-runner-receipt.json": "schemas/gate-runner-receipt.schema.json",
  "ozledger-entry.json": "schemas/ozledger-entry.schema.json",
  "selected-ybr-route.json": "schemas/selected-ybr-route.schema.json"
};

// Artifacts with no governing schema yet — hand contracts, explicitly marked.
// Promoting one of these to a real schema should delete its row here.
const handContractByExample = {
  "oztriage-receipt.json": ["receipt_id", "primary_producer", "secondary_producers", "safety_producers", "rejected_producers", "grade", "score_out_of_10", "threshold", "status", "reason"],
  "failure-radar-receipt.json": ["receipt_id", "mode", "grade", "score_out_of_10", "threshold", "status", "reason", "top_failure_families"],
  "ybr-route-candidate-ledger.json": ["ledger_id", "why_route_count_was_sufficient", "route_candidates"],
  "upgrade-candidate-ledger-sample.json": ["ledger_id", "route_weighted_scoring_rubric", "candidate_count_model", "sample_candidates"]
};

function validateAgainstSchema(data, schema, label) {
  for (const key of schema.required) {
    assert(Object.hasOwn(data, key), `${label} missing required ${key} (per schema)`);
  }
  if (schema.additionalProperties === false) {
    for (const key of Object.keys(data)) {
      assert(Object.hasOwn(schema.properties, key), `${label} has key "${key}" not in schema properties`);
    }
  }
  for (const [key, value] of Object.entries(data)) {
    const prop = schema.properties?.[key];
    if (prop?.enum) {
      assert(prop.enum.includes(value), `${label} ${key}="${value}" not in schema enum [${prop.enum.join(", ")}]`);
    }
  }
}

const schemaCache = {};
async function schemaFor(file) {
  const schemaPath = schemaByExample[file];
  if (!schemaPath) return null;
  schemaCache[schemaPath] ??= await readJson(schemaPath);
  return schemaCache[schemaPath];
}

const examplesDir = path.join(root, "examples");
const exampleEntries = await readdir(examplesDir, { withFileTypes: true });
let checked = 0;

for (const entry of exampleEntries.filter((item) => item.isDirectory())) {
  const exampleName = entry.name;
  const examplePath = path.join(examplesDir, exampleName);
  const files = await readdir(examplePath);
  for (const file of files.filter((name) => name.endsWith(".json"))) {
    const label = `${exampleName}/${file}`;
    const data = JSON.parse(await readFile(path.join(examplePath, file), "utf8"));
    const schema = await schemaFor(file);
    if (schema) {
      validateAgainstSchema(data, schema, label);
    } else if (handContractByExample[file]) {
      for (const key of handContractByExample[file]) {
        assert(Object.hasOwn(data, key), `${label} missing ${key} (hand contract — no governing schema yet)`);
      }
    } else {
      continue;
    }
    if (Object.hasOwn(data, "mode")) {
      assert(registry.modes.includes(data.mode), `${label} mode "${data.mode}" not in registry modes`);
    }
    const budget = data.max_counters ?? data.counter_budget;
    if (data.mode && budget !== undefined) {
      const [low, high] = registry.mode_budgets[data.mode];
      assert(budget >= low && budget <= high, `${label} budget ${budget} outside ${data.mode} band ${low}-${high}`);
      assert(budget <= 50, `${label} exceeds countermap-50 cap`);
    }
    if (file === "ybr-route-candidate-ledger.json") {
      for (const route of data.route_candidates) {
        for (const key of ["route_id", "route_name", "grade", "score_out_of_10", "threshold", "status", "why_rejected_or_selected"]) {
          assert(Object.hasOwn(route, key), `${label} route candidate missing ${key}`);
        }
      }
    }
    if (file === "upgrade-candidate-ledger-sample.json") {
      for (const candidate of data.sample_candidates) {
        for (const key of ["candidate_id", "title", "grade", "score_out_of_10", "threshold", "status", "reason_5_words"]) {
          assert(Object.hasOwn(candidate, key), `${label} candidate missing ${key}`);
        }
      }
    }
    checked += 1;
  }
}

assert(checked >= 25, `expected at least 25 example JSON files, checked ${checked}`);

console.log(`schemas valid; checked ${requiredSchemas.length} schemas and ${checked} example JSON files (schema-derived, registry modes/budgets)`);
