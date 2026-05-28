import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignoreDirs = new Set([".git", "node_modules"]);
const markdownFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    if (entry.isFile() && entry.name.endsWith(".md")) markdownFiles.push(full);
  }
}

function stripAnchor(link) {
  const hashIndex = link.indexOf("#");
  return hashIndex === -1 ? link : link.slice(0, hashIndex);
}

await walk(root);

const failures = [];
const linkPattern = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(linkPattern)) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("mailto:")) continue;
    const target = stripAnchor(raw);
    if (!target) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!resolved.startsWith(root)) {
      failures.push(`${path.relative(root, file)} links outside repo: ${raw}`);
      continue;
    }
    try {
      await stat(resolved);
    } catch {
      failures.push(`${path.relative(root, file)} has missing link: ${raw}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`doc links valid; checked ${markdownFiles.length} markdown files`);
