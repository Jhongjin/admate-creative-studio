#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const CHECK = "[check-creative-studio-safety-static]";
const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();

const requiredSafetyDocs = [
  ".gitignore",
  "AGENTS.md",
  "README.md",
  "docs/security/video-production-safety-checklist-v1.md",
  "docs/production/video-production-safety-gate-v1.md",
  "docs/presenter/presenter-usage-boundary-v1.md",
  "docs/production/lua-instagram-launch-pack-v1.md",
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

const markerGroups = [
  {
    name: "virtual presenter disclosure",
    terms: [
      /가상\s*(presenter|캐릭터|인물)/i,
      /AI[- ]?generated virtual creator/i,
      /virtual creator/i,
      /실제 인물(?:이| 또는)? (?:아닌|아닙니다)/,
    ],
  },
  {
    name: "no real-person/employee/customer/advertiser imitation",
    terms: [
      /실제 인물.*imitation.*금지/i,
      /실제 인물.*임직원.*고객.*광고주/,
      /실제 직원.*실제 고객/,
      /임직원 likeness/i,
      /voice clone.*금지/i,
    ],
  },
  {
    name: "no internal screens/campaign/account/performance/budget/private data",
    terms: [
      /내부 (?:화면|dashboard|자료)/i,
      /캠페인명.*계정.*예산/,
      /성과 (?:수치|지표|데이터)/,
      /민감 정보/,
      /private dashboard/i,
      /고객 개인정보/,
    ],
  },
  {
    name: "AI Influencer read-only/no stage/no upload",
    terms: [
      /AI Influencer\/.*read-only/i,
      /AI Influencer\/.*(?:stage|commit|업로드|upload)/i,
      /수정,\s*삭제,\s*이동,\s*리네이밍/,
      /원본 PNG.*(?:read-only|변경하지 않았다)/i,
    ],
  },
  {
    name: "human approval/final judgment",
    terms: [
      /최종 판단과 승인은 사람이/,
      /human approval/i,
      /owner review/i,
      /법무.*브랜드.*보안 review/,
      /사람 승인 기반/,
    ],
  },
  {
    name: "no performance guarantee/fully autonomous approval-free execution",
    terms: [
      /성과 보장.*(?:없|금지|아니|제거|Stop)/i,
      /보장이 아니라/,
      /무승인.*(?:학습|집행|실행)/,
      /완전 자동 운영/,
      /승인 없이.*(?:자동|집행)/,
    ],
  },
];

const stopPhraseChecks = [
  {
    name: "real employee/customer/advertiser claim",
    pattern:
      /(저는\s*AdMate\s*운영팀|실제\s*(?:임직원|직원|고객|광고주\s*담당자|미디어플래너|인플루언서)(?:입니다|로\s*설정|처럼\s*활동)|실제\s*캠페인을\s*운영해보니)/i,
  },
  {
    name: "performance guarantee",
    pattern: /(성과(?:\s*개선)?을?\s*보장(?:합니다|한다)|ROI를?\s*보장|guaranteed\s*(?:performance|roi)|performance\s*guarantee)/i,
  },
  {
    name: "approval-free autonomous execution",
    pattern:
      /(승인\s*없이\s*(?:자동으로\s*)?(?:집행|실행|학습|운영)|완전\s*자동\s*운영|approval[- ]?free|fully autonomous)/i,
  },
  {
    name: "actual dashboard/screenshot/private data",
    pattern:
      /(실제\s*(?:내부\s*)?(?:dashboard|대시보드|운영\s*화면|screenshot|스크린샷|캠페인|계정|고객\s*데이터|성과\s*데이터|budget|예산|private\s*data))/i,
  },
];

const safetyContextPattern =
  /(금지|비범위|avoid|prohibited|not allowed|stop condition|중단|없다|아니다|아닙니다|아니라|하지 않는다|사용하지 않는다|포함하지 않는다|노출하지 않는다|쓰지 않는다|넣지 않는다|제거|보장이 아니라|처럼 들리는|처럼 보인다|처럼 읽히는|같은|검수 없이|stage,\s*commit|no positive claim|reject|unapproved|mock|dummy|비식별|sanitized|고지|확인|체크|리스크|조건|gate|review|reviewer|approval|required|실제 .*아닌|not .*guarantee|not real|does not|does not represent)/i;

const errors = [];

function relPath(...parts) {
  return path.join(repoRoot, ...parts);
}

function normalizeGitPath(filePath) {
  return filePath.replaceAll("\\", "/");
}

function readText(relativePath) {
  return readFileSync(relPath(relativePath), "utf8");
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

    if (normalized === "AI Influencer" || normalized.startsWith("AI Influencer/")) {
      errors.push(`${label} includes read-only asset path: ${normalized}`);
    }

    if (mediaExtensions.has(extension)) {
      errors.push(`${label} includes media output/asset path: ${normalized}`);
    }
  }
}

function checkRequiredMarkers() {
  const corpus = requiredSafetyDocs
    .filter((relativePath) => existsSync(relPath(relativePath)))
    .map((relativePath) => readText(relativePath))
    .join("\n\n");

  for (const group of markerGroups) {
    if (!group.terms.some((term) => term.test(corpus))) {
      errors.push(`missing required safety marker: ${group.name}`);
    }
  }
}

function checkGitIgnoreSafety() {
  const gitignore = readText(".gitignore");
  for (const marker of [
    "AI Influencer/",
    "*.png",
    "*.jpg",
    "*.jpeg",
    "*.webp",
    "*.gif",
    "*.mp4",
    "*.mov",
    "*.wav",
    "*.mp3",
  ]) {
    if (!gitignore.includes(marker)) {
      errors.push(`.gitignore missing generated media safety marker: ${marker}`);
    }
  }
}

function trackedTextFiles() {
  const tracked = gitZ(["ls-files", "-z"]);
  return tracked.filter((filePath) => {
    const normalized = normalizeGitPath(filePath);
    if (normalized === "AI Influencer" || normalized.startsWith("AI Influencer/")) {
      return false;
    }

    const basename = path.basename(normalized);
    const extension = path.extname(normalized).toLowerCase();
    return extension === ".md" || extension === ".mjs" || basename === "AGENTS.md" || basename === "README.md";
  });
}

function isAllowedSafetyContext(lines, index) {
  const start = Math.max(0, index - 8);
  const end = Math.min(lines.length, index + 9);
  const context = lines.slice(start, end).join("\n");
  return safetyContextPattern.test(context);
}

function checkStopPhrases() {
  for (const filePath of trackedTextFiles()) {
    const text = readText(filePath);
    const lines = text.split(/\r?\n/);

    lines.forEach((line, index) => {
      for (const check of stopPhraseChecks) {
        if (check.pattern.test(line) && !isAllowedSafetyContext(lines, index)) {
          errors.push(`${filePath}:${index + 1} contains unsafe claim (${check.name})`);
        }
      }
    });
  }
}

for (const docPath of requiredSafetyDocs) {
  if (!existsSync(relPath(docPath))) {
    errors.push(`missing required safety source: ${docPath}`);
  }
}

checkRequiredMarkers();
checkGitIgnoreSafety();
checkChangedPathSafety(parsePorcelainStatus(), "working tree or index");
checkChangedPathSafety(gitZ(["diff", "--cached", "--name-only", "-z"]), "staged diff");
checkStopPhrases();

if (errors.length > 0) {
  console.error(`${CHECK} failed`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`${CHECK} ok`);
