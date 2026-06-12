// Structural eval harness v0 — unit tests for the doctrine's structure.
// Honest scope: these are STRUCTURAL assertions (surfaces exist, gates are
// documented everywhere they must be, sizes hold the ratchet). Semantic
// scenario evals arrive when the receipt corpus matures. A doctrine edit that
// breaks one of these checks must change the fixture in the same commit with
// rationale (amendment rule, CONTRIBUTING.md).
import { readFile, stat } from "node:fs/promises";

const failures = [];
const passes = [];

async function text(file) {
  return readFile(file, "utf8");
}

function check(name, condition, detail) {
  if (condition) passes.push(name);
  else failures.push(`${name}: ${detail}`);
}

// E1 — six-mode doctrine present in docs and all mode-bearing schemas
const registry = JSON.parse(await text("registry/stable-surfaces.json"));
const radarDoc = await text("docs/failure-radar.md");
for (const mode of registry.modes) {
  check(`E1 mode ${mode} in docs`, radarDoc.includes(`\`${mode}\``), "missing from docs/failure-radar.md");
}
for (const schemaFile of [
  "schemas/failure-radar.schema.json",
  "schemas/ozreceipt.schema.json",
  "schemas/countermap.schema.json",
  "schemas/countermap-receipt.schema.json"
]) {
  const schema = await text(schemaFile);
  for (const mode of registry.modes) {
    check(`E1 mode "${mode}" in ${schemaFile}`, schema.includes(`"${mode}"`), "enum missing mode");
  }
}

// E2 — README carries the verifiable quickstart and no usage-claim language
const readme = await text("README.md");
check("E2 README quickstart", readme.includes("npm test"), "60-second verification missing");
for (const claim of [/users? report/i, /\bsaved \d+/i, /in practice it caught/i, /testimonial/i]) {
  check(`E2 README no usage claim ${claim}`, !claim.test(readme), "usage-claim language found");
}

// E3 — retrieval gate documented on every oz-start surface
for (const file of ["skills/oz-start.md", "commands/oz-start.md", "docs/oz-start.md"]) {
  const body = await text(file);
  check(`E3 retrieval gate in ${file}`, /negative.memory retrieval/i.test(body), "retrieval gate language missing");
}

// E4 — failure-inbox drain documented on every oz-result surface
for (const file of ["skills/oz-result.md", "commands/oz-result.md"]) {
  const body = await text(file);
  check(`E4 inbox drain in ${file}`, /inbox/i.test(body), "failure-inbox drain missing");
}

// E5 — proof contracts specified for the load-bearing truth states
const truthStates = await text("wiki/Truth-States.md");
for (const state of ["verified", "pushed", "deployed"]) {
  check(`E5 proof contract for ${state}`, truthStates.includes(`\`${state}\``) && /proof contract/i.test(truthStates), "proof contract spec missing");
}

// E6 — size ratchet on always-load protocol surfaces
const budgets = JSON.parse(await text("tests/mode-budgets.json"));
for (const [file, budget] of Object.entries(budgets.budgets)) {
  const { size } = await stat(file);
  check(`E6 ratchet ${file}`, size <= budget, `${size} bytes exceeds budget ${budget}`);
}

// E7 — receipts boundary present in .gitignore
const gitignore = await text(".gitignore");
check("E7 receipts boundary", gitignore.includes("receipts/") && gitignore.includes("!receipts/fixtures/"), "receipts boundary missing from .gitignore");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`structural evals passed; ${passes.length} assertions green`);
