# Creative-Studio-7 Preproduction Alignment Plan v1

Date: 2026-05-09
Status: document-only gate plan before any generation work
Scope: preproduction alignment checks for executive 5min and planner 90s Creative Studio storyboards

## Gate Purpose

This gate defines the checks required before any Creative Studio generation work begins. It is a planning and review document only. It does not authorize image generation, video generation, audio generation, TTS, lip-sync, asset staging, account data use, or external vendor/code execution.

The intended output of this gate is an alignment decision and a follow-up document-only patch plan, not generated media.

## Local Docs Inspected

The following local docs are present and are the review basis for this plan:

- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`
- `docs/storyboard/presenter-scene-asset-map-v1.md`
- `docs/message-library/media-planner-message-bank-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/prompts/creative-studio-hyperframes-storyboard-prompt-pack-v1.md`

## Hard Prohibitions

Creative-Studio-7 must explicitly forbid all of the following:

- Image, video, or audio generation.
- TTS, lip-sync, voice cloning, mouth animation, or synthetic narration rendering.
- Opening, staging, uploading, modifying, moving, deleting, or committing any `AI Influencer/` asset.
- Use of real advertiser, campaign, account, platform, customer, employee, internal screen, billing, audit, or performance data.
- Use of real account IDs, campaign IDs, tokens, API keys, secrets, logs, screenshots, dashboards, or database details.
- External Hyperframes code, CLI, package, catalog, skill, vendor service, hosted renderer, or external asset dependency.
- Any production step that creates or transforms media assets.

## Canonical Scene Alignment Checks

Check that all future preproduction materials preserve the canonical scene IDs, time order, and message order from the local storyboards and production specs.

Executive 5min:

- E1: opening title/disclosure, no internal screen.
- E2: "Why AdMate, now?" setup, no real company/internal source.
- E3: repeated work and scattered judgment, dummy labels only.
- E4: AdMate ecosystem definition as AI Agent-based ad operations platform.
- E5: Compass role as policy/guide source-check starting point.
- E6: Sentinel role as setup QA and anomaly signal, without unapproved blocking or execution.
- E7: Lens role as sanitized capture/evidence context, without real UI capture.
- E8: Foresight role as hypothesis and analysis perspective, without performance guarantee.
- E9: Agent Core diagram with execution, memory, approval, and audit-log concepts, without internal architecture details.
- E10: seven-step lifecycle loop, without real campaign dates or account status.
- E11: operational knowledge as reusable criteria, without customer/private strategy notes.
- E12: less repetition and better judgment, without saved-hour or efficiency claims.
- E13: governance row for permission, approval, audit log, and ROI frame, without real audit or billing data.
- E14: roadmap cards for Intelligence Library, report personalization, and Creative Studio, without real schedule, budget, or owner.
- E15: closing message and presenter disclosure, without actual employee identity.

Planner 90s:

- P1: repeat-check reality with abstract task stack, no real task board.
- P2: policy/setup/capture/analysis flow labels, dummy labels only.
- P3: AdMate as AI work partner for ad operations, not planner replacement.
- P4: Compass guide source check, without real campaign brief or full policy text.
- P5: Sentinel setup and anomaly checklist, without auto-execution cue.
- P6: Lens sanitized proof tile, without real UI capture or account info.
- P7: Foresight hypothesis/trend card, without real performance number.
- P8: judgment-to-criteria loop, without auto-training or learning without review.
- P9: final card and disclosure, without coworker/testimonial feel.

## Caption And Disclosure Checks

- Confirm virtual presenter disclosure appears within the opening or closing disclosure windows defined by the caption guide.
- Confirm a short `AI-generated virtual presenter` caption is available when a presenter first appears prominently, without replacing the required full disclosure.
- Confirm mock/dummy disclosure is visible where visuals could otherwise be mistaken for real screens or real data.
- Confirm no-performance-promise language is present for Foresight and ROI-related scenes.
- Confirm human-approval language is present for Sentinel, Agent Core, governance, and learning-loop scenes.
- Confirm captions do not cover presenter face, product card labels, or key diagram nodes.
- Confirm captions remain short, readable, and limited to one core caption per frame where possible.

Required wording references to preserve:

- Virtual presenter: `AI-generated virtual presenter`
- Dummy visual: `Sanitized mock visual`
- Human approval: `Human approval remains required`
- Performance disclaimer: Foresight proposes hypotheses and analysis perspectives; it does not guarantee results.

## Mock And Dummy Safety Checks

- Use only abstract cards, diagrams, sanitized mock visuals, and dummy labels.
- Keep dummy labels generic and limited; avoid realistic dashboards, IDs, budgets, spend, conversion, ROAS, CPA, CTR, revenue, billing, or account fields.
- If any number is unavoidable in later documents, mark it as sample/rounded/mock and do not make it resemble actual performance.
- Ensure product cards, diagrams, and mock UI cannot be mistaken for internal tools or third-party platform screenshots.
- Keep `AI Influencer/` references as filenames only when needed for planning; do not open or manipulate those assets.

## Presenter Cue Checks

- Presenter is a virtual guide only, never an actual employee, colleague, planner, customer, advertiser, executive, or testimonial speaker.
- Executive presenter use remains limited to E1-E3, E11, and E14-E15, with E5-E10 and E12-E13 led by diagrams/product cards.
- Planner presenter use remains limited to P3, P4, and P9, with P5-P8 led by product cards, proof tiles, hypothesis cards, and loop diagrams.
- Presenter placement must not obscure captions, disclosures, or product information.
- Presenter asset references remain filename-only planning references.

## Product Role Wording Checks

Compass:

- Allowed: policy/guide source-check starting point; helps organize criteria for human review.
- Forbidden: automatically confirms strategy, replaces planning judgment, or uses customer contract/policy full text.

Sentinel:

- Allowed: setup QA, missing-item review, approval-needed items, anomaly signals.
- Forbidden: blocks, launches, pauses, or executes campaigns without human approval; prevents all incidents.

Foresight:

- Allowed: hypotheses, trend interpretation, analysis perspectives, next-review suggestions.
- Forbidden: guaranteed performance, actual benchmarks, source claims, or deterministic forecasts.

Human approval and performance disclaimer:

- Keep final judgment and approval with humans.
- State or imply that performance-related outputs are hypotheses and analysis aids, not promised outcomes.

## Gate Review Steps

1. Compare future Creative Studio preproduction artifacts against E1-E15 and P1-P9 canonical scene IDs.
2. Check every scene for caption/disclosure coverage and safe placement.
3. Check every scene for mock/dummy safety and absence of real advertiser/account/performance data.
4. Check presenter usage against the presenter scene asset map.
5. Check Compass, Sentinel, and Foresight wording against the allowed/forbidden product-role language above.
6. Check that human approval and no-performance-promise disclaimers are present where required.
7. Confirm no generation, rendering, TTS/lip-sync, AI Influencer asset handling, or external Hyperframes code/vendor usage occurred.

## Exit Criteria

- All referenced source docs remain document-only inputs.
- E1-E15 and P1-P9 alignment checks are complete.
- Caption/disclosure, mock/dummy safety, presenter cue, product wording, human approval, and performance disclaimer checks are documented.
- No generated media or asset operations were performed.
- No staged files exist after validation.

## Next Gate Suggestion

Creative-Studio-8 document-only alignment patch.

The next gate should patch only planning/storyboard/prompt text required to resolve alignment gaps found by this gate. It should continue to forbid media generation, TTS/lip-sync, AI Influencer asset opening/staging/uploading, real advertiser/account/performance data, and external Hyperframes code/vendor usage.

## Validation Plan

Run these checks after writing this file:

```powershell
git diff --check -- docs/tasks/2026-05-09_creative_studio_7_preproduction_alignment_plan_v1.md
```

Targeted secret-like scan:

```powershell
Select-String -Path docs/tasks/2026-05-09_creative_studio_7_preproduction_alignment_plan_v1.md -Pattern 'sk-[A-Za-z0-9_-]+','api[_-]?key\s*[:=]','secret\s*[:=]','token\s*[:=]','password\s*[:=]','AKIA[0-9A-Z]{16}' -CaseSensitive
```

Staged files check:

```powershell
git diff --cached --name-only
```
