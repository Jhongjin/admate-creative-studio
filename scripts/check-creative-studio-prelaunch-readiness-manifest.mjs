#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const CHECK = "[check-creative-studio-prelaunch-readiness-manifest]";
const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();

const manifestPath = "docs/production/creative-studio-prelaunch-readiness-manifest-v1.md";

const requiredMarkers = [
  "creative-studio-prelaunch-readiness-manifest:v1",
  "contract-version:v1",
  "scope:local-docs-only",
  "disclosure:virtual-presenter",
  "prohibition:no-real-person-employee-customer-advertiser-imitation",
  "prohibition:no-internal-screens-campaign-account-performance-private-data",
  "prohibition:no-media-asset-touch",
  "gate:human-approval-required",
  "prohibition:no-performance-guarantee",
  "prohibition:no-approval-free-autonomous-execution",
  "prohibition:no-provider-account-social-publish-production-action",
  "prohibition:no-persistence-promotion-apply-production-action",
];

const requiredSections = [
  /^# Creative Studio Prelaunch Readiness Manifest v1$/m,
  /^## Contract Version$/m,
  /^## Local Docs-Only Scope$/m,
  /^## Presenter And Identity Boundaries$/m,
  /^## Data And Screen Boundaries$/m,
  /^## Media And Asset Boundaries$/m,
  /^## Human Approval Gates$/m,
  /^## Claims And Autonomy Boundaries$/m,
  /^## Provider, Account, Social, Publish, Production Boundaries$/m,
  /^## Static Checker Contract$/m,
  /^## Readiness Decision$/m,
];

const requiredPackageScripts = {
  "check:creative-studio-prelaunch-readiness":
    "node scripts/check-creative-studio-prelaunch-readiness-manifest.mjs",
  "check:creative-studio-safety-static": "node scripts/check-creative-studio-safety-static.mjs",
  "verify:prelaunch-local":
    "npm run check:creative-studio-prelaunch-readiness && npm run check:creative-studio-safety-static",
};

const requiredPhrases = [
  /AI-generated virtual presenter|가상\s*(?:presenter|캐릭터|인물)/i,
  /not (?:claim to be|represent).*real person|실제 인물/i,
  /employee, customer, advertiser|임직원.*고객.*광고주|employee.*customer.*advertiser/i,
  /internal screens|dashboards|campaign names|account IDs|performance metrics|private data/i,
  /must not read media contents/i,
  /must not .*recurse into `AI Influencer\/`/i,
  /Human approval is required/i,
  /Media generation.*media inspection|media generation, media inspection/i,
  /Asset movement.*staging.*upload|movement, staging, upload/i,
  /Provider\/API\/SaaS calls|provider calls/i,
  /account\/login\/session work|account\/login work|login work/i,
  /Social posting, publishing, persistence, promotion, apply, production/i,
  /must not promise performance|no-performance-guarantee/i,
  /must not describe approval-free autonomous execution|no-approval-free-autonomous-execution/i,
  /does not authorize provider calls/i,
  /does not mean .*approval has been granted/i,
];

const mediaExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".bmp",
  ".tif",
  ".tiff",
  ".svg",
  ".mp4",
  ".mov",
  ".m4v",
  ".avi",
  ".webm",
  ".wav",
  ".mp3",
  ".m4a",
  ".aac",
  ".flac",
  ".ogg",
]);

const binaryLikeExtensions = new Set([
  ...mediaExtensions,
  ".7z",
  ".ai",
  ".bin",
  ".cer",
  ".crt",
  ".dll",
  ".dmg",
  ".doc",
  ".docx",
  ".eot",
  ".exe",
  ".fig",
  ".ico",
  ".iso",
  ".jar",
  ".key",
  ".otf",
  ".p12",
  ".pdf",
  ".pem",
  ".pfx",
  ".pkg",
  ".ppt",
  ".pptx",
  ".psd",
  ".rar",
  ".sketch",
  ".ttf",
  ".woff",
  ".woff2",
  ".xls",
  ".xlsx",
  ".zip",
]);

const localEnvBasenames = new Set([
  ".env",
  ".env.development",
  ".env.local",
  ".env.production",
  ".env.staging",
  ".env.test",
]);

const errors = [];

function relPath(relativePath) {
  return path.join(repoRoot, relativePath);
}

function normalizeGitPath(filePath) {
  return filePath.replaceAll("\\", "/");
}

function isAiInfluencerPath(filePath) {
  const normalized = normalizeGitPath(filePath);
  return normalized === "AI Influencer" || normalized.startsWith("AI Influencer/");
}

function isLocalEnvPath(filePath) {
  const normalized = normalizeGitPath(filePath);
  const basename = path.basename(normalized);
  return localEnvBasenames.has(basename) || (basename.startsWith(".env.") && basename !== ".env.example");
}

function gitZ(args) {
  const output = execFileSync("git", args, {
    cwd: repoRoot,
    encoding: "buffer",
  });
  return output.toString("utf8").split("\0").filter(Boolean);
}

function parsePorcelainStatus() {
  const records = gitZ(["status", "--porcelain=v1", "-z"]);
  const paths = [];

  for (let i = 0; i < records.length; i += 1) {
    const record = records[i];
    if (record.length < 4) continue;

    const status = record.slice(0, 2);
    const filePath = record.slice(3);
    paths.push(filePath);

    if (status.includes("R") || status.includes("C")) {
      i += 1;
      if (records[i]) paths.push(records[i]);
    }
  }

  return paths;
}

function checkChangedPathSafety(paths, label) {
  for (const filePath of paths) {
    const normalized = normalizeGitPath(filePath);
    const extension = path.extname(normalized).toLowerCase();

    if (isAiInfluencerPath(normalized)) {
      errors.push(`${label} includes AI Influencer path: ${normalized}`);
    }

    if (mediaExtensions.has(extension)) {
      errors.push(`${label} includes media output/asset path: ${normalized}`);
    }

    if (binaryLikeExtensions.has(extension)) {
      errors.push(`${label} includes binary-like asset path: ${normalized}`);
    }

    if (isLocalEnvPath(normalized)) {
      errors.push(`${label} includes local env/credential path: ${normalized}`);
    }
  }
}

function checkManifest() {
  if (!existsSync(relPath(manifestPath))) {
    errors.push(`missing readiness manifest: ${manifestPath}`);
    return;
  }

  const text = readFileSync(relPath(manifestPath), "utf8");

  for (const marker of requiredMarkers) {
    if (!text.includes(marker)) {
      errors.push(`manifest missing required marker: ${marker}`);
    }
  }

  for (const section of requiredSections) {
    if (!section.test(text)) {
      errors.push(`manifest missing required section: ${section.source}`);
    }
  }

  for (const phrase of requiredPhrases) {
    if (!phrase.test(text)) {
      errors.push(`manifest missing required contract phrase: ${phrase.source}`);
    }
  }
}

function checkPackageScripts() {
  const packageJsonPath = relPath("package.json");
  if (!existsSync(packageJsonPath)) {
    errors.push("missing package entrypoint manifest: package.json");
    return;
  }

  let packageJson;
  try {
    packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  } catch (error) {
    errors.push(`package.json is not valid JSON: ${error.message}`);
    return;
  }

  for (const [scriptName, expectedCommand] of Object.entries(requiredPackageScripts)) {
    if (packageJson.scripts?.[scriptName] !== expectedCommand) {
      errors.push(`package.json script ${scriptName} must be: ${expectedCommand}`);
    }
  }
}

checkManifest();
checkPackageScripts();
checkChangedPathSafety(parsePorcelainStatus(), "working tree or index");
checkChangedPathSafety(gitZ(["diff", "--cached", "--name-only", "-z"]), "staged diff");

if (errors.length > 0) {
  console.error(`${CHECK} failed`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`${CHECK} ok`);
