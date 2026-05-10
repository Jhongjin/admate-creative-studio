# Creative Studio Storyboard QA 1 Execution Checklist v1

Date: 2026-05-10
Status: document-only QA checklist
Scope: executive 5min and planner 90s storyboard QA before any production work

## Purpose

This checklist defines the review gate that must pass before Creative Studio
work moves from planning documents into any media production step.

It is intentionally document-only. It does not authorize image generation,
video generation, rendering, TTS, lip-sync, asset staging, external vendor
execution, or product code changes.

## Source Documents

Use these local documents as the QA basis:

- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`
- `docs/storyboard/presenter-scene-asset-map-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/prompts/creative-studio-hyperframes-storyboard-prompt-pack-v1.md`

## Executive 5min QA

The executive video must preserve `E1` through `E15` as canonical scene IDs.
Hyperframes-style planning blocks may group scenes, but they must not replace
or renumber the canonical executive scene list.

Check:

- `E1` includes opening title/disclosure and no internal screen.
- `E4` defines AdMate as an AI Agent-based ad operations platform.
- `E5` through `E8` keep Compass, Sentinel, Lens, and Foresight roles distinct.
- `E9` shows Agent Core as governance, execution, memory, approval, and audit
  infrastructure without exposing internal DB/API/log details.
- `E10` keeps the lifecycle loop abstract and free of real campaign data.
- `E13` includes governance language for permission, approval, audit log, and
  ROI frame without real audit or billing data.
- `E15` closes with presenter disclosure and does not imply a real employee.

## Planner 90s QA

The planner video must preserve `P1` through `P9` as canonical scene IDs.
Hyperframes-style planning blocks may group the opening or product-role scenes,
but they must not replace the canonical planner scene list.

Check:

- `P1` and `P2` show repeated operational checks with dummy labels only.
- `P3` frames AdMate as a work partner, not as a planner replacement.
- `P4` through `P7` keep Compass, Sentinel, Lens, and Foresight roles distinct.
- `P8` describes judgment becoming reusable criteria without implying
  unreviewed auto-training or campaign execution.
- `P9` includes closing disclosure and avoids coworker or testimonial framing.

## Caption And Disclosure QA

Check:

- The virtual presenter disclosure appears at the start or the end.
- Presenter-first-appearance captions do not replace the full disclosure.
- Mock or dummy visual labels appear where a frame could be mistaken for a real
  dashboard, platform screen, report, or internal tool.
- Foresight scenes avoid performance guarantees and deterministic claims.
- Sentinel and Agent Core scenes keep human approval language visible.
- Captions do not cover presenter faces, product card labels, or diagram nodes.

## Presenter Cue QA

Check:

- Presenter is a generated virtual guide, not a real employee, customer,
  coworker, planner, or testimonial speaker.
- Executive presenter use remains limited to the storyboard-approved scenes.
- Planner presenter use remains limited to the storyboard-approved scenes.
- Product-role scenes stay led by product cards, diagrams, proof tiles, or
  hypothesis cards instead of presenter closeups.
- Presenter asset references remain filename-only planning references.

## Mock Visual Safety QA

Check:

- Use abstract cards, diagrams, sanitized mock visuals, and dummy labels only.
- Do not use real advertiser, campaign, account, customer, employee, billing,
  audit, dashboard, log, or performance data.
- Do not use realistic IDs, URLs, tokens, credentials, account names, budgets,
  spend, ROAS, CPA, CTR, revenue, or billing rows.
- If a sample number is required in a later approved document, it must be
  explicitly labeled sample, rounded, and non-operational.
- No `AI Influencer/` asset may be opened, staged, moved, transformed, or
  committed by this QA gate.

## Forbidden Carry-Over

Do not carry over from Hyperframes or any external reference:

- executable code
- package setup
- CLI commands
- render workflow
- catalog blocks
- vendor assets
- skill files
- external templates
- generated media outputs

## Pass Criteria

Pass only if:

- `E1`-`E15` and `P1`-`P9` remain canonical.
- Caption, disclosure, presenter cue, and mock visual checks are documented.
- Product-role wording stays within allowed Compass, Sentinel, Lens, Foresight,
  and Agent Core boundaries.
- No generation, rendering, code change, asset operation, or external vendor
  execution occurred.
- No staged image, video, audio, or `AI Influencer/` file exists.

## Fail Criteria

Fail if any planning artifact:

- renumbers or replaces canonical scene IDs
- uses real operational data
- implies automated campaign execution without human approval
- presents Foresight output as a guaranteed result
- treats a virtual presenter as a real person
- requires media generation, asset handling, or external render execution

## Verification Plan

Run:

```text
git diff --check -- docs/tasks/2026-05-10_creative_studio_storyboard_qa_1_execution_checklist_v1.md
```

Then confirm:

```text
git status --short
```

The only expected new file for this gate is this document.

## No-Touch Confirmation

This gate must not perform:

- image, video, audio, TTS, lip-sync, or render generation
- `AI Influencer/` asset access or staging
- product code changes
- dependency changes
- external code/vendor import
- production traffic
- secret/env/token/cookie/session output

## Next Gate

`Creative-Studio-Storyboard-QA-2 Read-Only Alignment Review`

Run the checklist against the current executive and planner storyboards and
record pass/fail findings without generating media or modifying assets.
