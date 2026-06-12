import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignoreDirs = new Set([".git", "node_modules"]);

const secretPatterns = [
  /-----BEGIN (RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bsk-[A-Za-z0-9_-]{20,}\b/,
  /\bghp_[A-Za-z0-9_]{20,}\b/,
  /\bAIza[0-9A-Za-z_-]{20,}\b/,
  /\b(password|passwd|api_key|secret|token)\s*=\s*['"][^'"]+['"]/i
];

const privatePathPatterns = [
  /\/Users\/ciphercowork\//,
  /\/Users\/[^/\s]+\/Documents\/2opmd\//i,
  /\bCipherOS\b/,
  /\b2OPMD\b/
];

const unsafePublicPatterns = [
  /private patient data/i,
  /patient record/i,
  /collaborator names/i,
  /unsupported performance claim/i,
  /guarantees zero bugs/i
];

// Local extension hook: private literal patterns live in a gitignored file so
// the denylist itself can never leak. CI runs public-safe categories only;
// the local file is the mandatory pre-push layer (see RELEASE.md).
try {
  const local = await import("./check-private-leaks.local.mjs");
  secretPatterns.push(...(local.secretPatterns ?? []));
  privatePathPatterns.push(...(local.privatePathPatterns ?? []));
  unsafePublicPatterns.push(...(local.unsafePublicPatterns ?? []));
  console.log("local leak-pattern extension loaded");
} catch {
  // no local extension present; public-safe patterns only
}

const policyLinePattern = /\b(do not|must not|should not|not a|not be|no |without|prohibit|forbid|reject|avoid|does not)\b/i;

const files = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    if (entry.isFile()) files.push(full);
  }
}

function isTextFile(file) {
  return /\.(md|json|mjs|gitignore|txt)$/i.test(file) || path.basename(file) === "package.json";
}

await walk(root);

const failures = [];

for (const file of files.filter(isTextFile)) {
  const rel = path.relative(root, file);
  const text = await readFile(file, "utf8");
  for (const pattern of secretPatterns) {
    if (pattern.test(text)) failures.push(`${rel} matched secret pattern ${pattern}`);
  }
  const lines = text.split(/\r?\n/);
  for (const pattern of privatePathPatterns) {
    lines.forEach((line, index) => {
      const context = lines.slice(Math.max(0, index - 10), index + 1).join("\n");
      const isScannerRule = rel === "scripts/check-private-leaks.mjs";
      if (pattern.test(line) && !policyLinePattern.test(context) && !isScannerRule) {
        failures.push(`${rel}:${index + 1} matched private path/internal-source pattern ${pattern}`);
      }
    });
  }
  for (const pattern of unsafePublicPatterns) {
    lines.forEach((line, index) => {
      const context = lines.slice(Math.max(0, index - 10), index + 1).join("\n");
      const isScannerRule = rel === "scripts/check-private-leaks.mjs";
      if (pattern.test(line) && !policyLinePattern.test(context) && !isScannerRule) {
        failures.push(`${rel}:${index + 1} matched unsafe public phrase ${pattern}`);
      }
    });
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`private leak check passed; scanned ${files.length} files`);
