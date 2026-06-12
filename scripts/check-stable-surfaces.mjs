// Stable-surface guard: fails if any registered public surface (mode, command,
// skill, schema file, or count claim) is renamed, deleted, or silently dropped.
// Stable IDs are a published promise; this converts that promise from
// discipline into a check.
import { readFile, access } from "node:fs/promises";

const registry = JSON.parse(await readFile("registry/stable-surfaces.json", "utf8"));
const failures = [];

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

for (const group of ["commands", "skills", "schema_files"]) {
  for (const file of registry[group]) {
    if (!(await exists(file))) failures.push(`missing ${group} surface: ${file}`);
  }
}

const radarDoc = await readFile("docs/failure-radar.md", "utf8");
const radarSchema = await readFile("schemas/failure-radar.schema.json", "utf8");
for (const mode of registry.modes) {
  if (!radarDoc.includes(`\`${mode}\``)) failures.push(`mode \`${mode}\` missing from docs/failure-radar.md`);
  if (!radarSchema.includes(`"${mode}"`)) failures.push(`mode "${mode}" missing from failure-radar schema enum`);
}

for (const file of registry.count_claims.claim_files) {
  const text = await readFile(file, "utf8");
  for (const claim of registry.count_claims.claim_strings) {
    if (!text.includes(claim)) failures.push(`count claim "${claim}" missing from ${file}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`stable surfaces intact; ${registry.commands.length} commands, ${registry.skills.length} skills, ${registry.schema_files.length} schemas, ${registry.modes.length} modes, count claims present`);
