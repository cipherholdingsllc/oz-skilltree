// Context fingerprint: deterministic capture of repo, branch, HEAD, dirty
// state, lockfile census, package manager, and node version at task start.
// Embed the output in the OzReceipt at /oz-start. Kills the wrong-repo /
// wrong-branch / dirty-worktree / package-manager-mismatch class at intake.
//
// Usage:
//   node scripts/context-fingerprint.mjs          # markdown block for receipts
//   node scripts/context-fingerprint.mjs --json   # machine-readable (harness use)
import { execFileSync } from "node:child_process";
import { access } from "node:fs/promises";
import path from "node:path";

function git(...args) {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim();
  } catch {
    return "(not a git repository)";
  }
}

async function present(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

const lockfiles = [];
for (const lf of ["package-lock.json", "yarn.lock", "pnpm-lock.yaml", "bun.lockb"]) {
  if (await present(lf)) lockfiles.push(lf);
}

const dirtyLines = git("status", "--porcelain");
const pmByLockfile = {
  "package-lock.json": "npm",
  "yarn.lock": "yarn",
  "pnpm-lock.yaml": "pnpm",
  "bun.lockb": "bun"
};
const fingerprint = {
  captured_at: new Date().toISOString(),
  repo_dir: path.basename(process.cwd()),
  branch: git("rev-parse", "--abbrev-ref", "HEAD"),
  head: git("rev-parse", "--short", "HEAD"),
  dirty_file_count: dirtyLines === "(not a git repository)" ? null : dirtyLines === "" ? 0 : dirtyLines.split("\n").length,
  lockfiles,
  package_manager_signal: lockfiles.length === 1 ? pmByLockfile[lockfiles[0]] : lockfiles.length === 0 ? "none-detected" : "AMBIGUOUS-multiple-lockfiles",
  node_version: process.version
};

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(fingerprint, null, 2));
} else {
  console.log("```yaml");
  console.log("context_fingerprint:");
  for (const [key, value] of Object.entries(fingerprint)) {
    console.log(`  ${key}: ${Array.isArray(value) ? JSON.stringify(value) : value}`);
  }
  console.log("```");
}

// The ambiguity warning fires in BOTH output modes — the package-manager-
// mismatch class is exactly what this script exists to catch, and headless
// harness use (--json) needs the nonzero exit most of all.
if (fingerprint.package_manager_signal.startsWith("AMBIGUOUS")) {
  console.error("warning: multiple lockfiles present — resolve before mutation");
  process.exitCode = 2;
}
