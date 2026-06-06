# Creative Studio Prelaunch Readiness Manifest v1

작성일: 2026-06-06 KST
상태: local/docs-only prelaunch readiness contract
용도: Creative Studio prelaunch 상태를 machine-checkable manifest로 기록하고, 사람 승인 없이는 제작/계정/배포/운영 단계로 넘어가지 못하게 고정한다.

<!-- creative-studio-prelaunch-readiness-manifest:v1 -->

## Contract Version

<!-- contract-version:v1 -->

- Manifest ID: `creative-studio-prelaunch-readiness-manifest`
- Version: `v1`
- Static guard: `scripts/check-creative-studio-prelaunch-readiness-manifest.mjs`
- Scope date: 2026-06-06 KST

## Local Docs-Only Scope

<!-- scope:local-docs-only -->

이 manifest는 local repository의 문서와 dependency-free static checker만 다룬다. 이 문서는 production readiness approval이 아니며, media generation, media inspection, asset movement/staging/upload, provider calls, account/login work, social posting, publishing, persistence, promotion, apply, production use를 승인하지 않는다.

Allowed local activity:

- Markdown safety/readiness 문서 작성과 검토
- Dependency-free Node static checker 실행
- Git path/name 기반 static validation

Out of scope without explicit human approval:

- Image, video, audio, caption burn-in, TTS, lip-sync, render, or media generation
- Media contents inspection or asset quality review
- Asset move, copy, rename, delete, compress, stage, upload, or distribution
- Provider/API calls, SaaS calls, account/login/session work, or credential/env use
- Social posting, publishing, persistence, promotion, apply, production execution, or production-data use

## Presenter And Identity Boundaries

<!-- disclosure:virtual-presenter -->
<!-- prohibition:no-real-person-employee-customer-advertiser-imitation -->

Creative Studio presenter concepts must be disclosed as AI-generated virtual presenter or virtual brand character. The presenter must not claim to be, resemble, imitate, or be positioned as a real person, employee, customer, advertiser, public figure, creator, or operator.

Required disclosure meaning:

- Presenter is a virtual character, not a real person.
- Presenter does not represent an AdMate employee, customer, advertiser, agency worker, influencer, or public figure.
- Voice clone, likeness imitation, testimonial framing, and real-person roleplay are not approved.

## Data And Screen Boundaries

<!-- prohibition:no-internal-screens-campaign-account-performance-private-data -->

Creative Studio drafts, scripts, captions, storyboards, mock visuals, and readiness notes must not include actual internal screens, dashboards, screenshots, campaign names, advertiser names, account IDs, budget, performance metrics, private data, credentials, logs, contracts, invoices, billing data, or non-public strategy.

Allowed examples must remain dummy, sanitized, rounded, and clearly non-production. No actual dashboard, campaign, account, performance, customer, advertiser, or private data may be used.

## Media And Asset Boundaries

<!-- prohibition:no-media-asset-touch -->

This manifest and its static checker must not read media contents or recurse into `AI Influencer/`. No image, video, audio, binary, generated asset, or `AI Influencer/` path may be modified, moved, deleted, copied, inspected, staged, uploaded, generated, or committed as part of this contract.

The checker may inspect Git path names only to reject unsafe changed or staged paths. A passing static check is not permission to touch media assets.

## Human Approval Gates

<!-- gate:human-approval-required -->

Human approval is required before any step that leaves local docs-only readiness. Approval must be explicit, task-specific, and recorded outside this manifest before any of the following:

- Media generation, render, TTS, lip-sync, caption burn-in, or media inspection
- Asset movement, staging, upload, distribution, or repository inclusion
- Provider/API/SaaS calls or account/login/session work
- Use of credentials, environment files, internal systems, or production data
- Social posting, publishing, persistence, promotion, apply, production execution, or production use

Required reviewer domains before external or production-facing use:

- Owner approval
- Brand review
- Legal/privacy review
- Security review
- Platform/channel approval when social or publishing is involved

## Claims And Autonomy Boundaries

<!-- prohibition:no-performance-guarantee -->
<!-- prohibition:no-approval-free-autonomous-execution -->

Creative Studio materials must not promise performance, ROI, conversion lift, risk elimination, or guaranteed outcomes. Forecasts and product claims must be framed as hypotheses, workflow support, or decision support.

Creative Studio materials must not describe approval-free autonomous execution. Final judgment, operational approval, publishing approval, and production responsibility remain with humans.

## Provider, Account, Social, Publish, Production Boundaries

<!-- prohibition:no-provider-account-social-publish-production-action -->
<!-- prohibition:no-persistence-promotion-apply-production-action -->

This manifest does not authorize provider calls, media-generation calls, account access, login work, social posting, publishing, persistence, promotion, apply, production changes, production execution, or production-data processing.

Any request that would perform those actions must stop and require explicit human approval before proceeding.

## Static Checker Contract

The static checker must:

- Validate this manifest exists and contains the required contract markers.
- Fail if working-tree or staged Git paths include `AI Influencer/`, media, binary-like asset, or local env/credential paths.
- Avoid reading media contents.
- Avoid recursing into `AI Influencer/`.
- Remain dependency-free and runnable with local Node.

## Readiness Decision

Status: local/docs-only readiness manifest recorded.

This status means the static documentation contract exists. It does not mean media, account, provider, social, publishing, persistence, promotion, apply, production, legal, privacy, brand, platform, or security approval has been granted.
