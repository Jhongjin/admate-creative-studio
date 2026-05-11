# Creative Studio Storyboard QA 6 Frame Spec Acceptance Checklist v1

Date: 2026-05-11
Status: document-only checklist
Scope: executive 5min and planner 90s frame-spec acceptance criteria

## Purpose

This gate converts the current production hold into a concrete document-review
checklist. It does not approve any media generation, render workflow, image
generation, video generation, audio generation, TTS, lip-sync, presenter clip,
asset operation, product code change, or vendor workflow.

## Inputs Reviewed

Referenced document baselines:

- `docs/tasks/2026-05-10_creative_studio_storyboard_qa_4_frame_spec_table_draft_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_5_production_hold_decision_v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/video-production-safety-gate-v1.md`
- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`

This gate did not open, inspect, stage, transform, or use any media asset.

## Acceptance Checklist

Each executive scene `E1` through `E15` and planner scene `P1` through `P9`
should be accepted only when all applicable items are true.

Required for every scene:

- scene id is canonical and not replaced by Hyperframes-style grouping
- visual description is document-level only
- no real advertiser, account, campaign, customer, employee, billing, audit,
  dashboard, log, DB, API, or operational data is required
- no generated image/video/audio/render is required to judge basic safety
- no external code, package, CLI, render workflow, template, catalog block,
  skill file, vendor asset, or third-party workflow carry-over is required
- no `AI Influencer/` asset access or operation is required

Required when a scene looks like UI, dashboard, evidence, proof, or data:

- `Sanitized mock visual` label is specified
- source state is described as mock/sanitized, not real operational evidence
- internal system names, table names, raw API labels, and raw logs are absent

Required when a scene implies review, execution, governance, approval, or
automation:

- `Human approval remains required` or equivalent wording is specified
- no fully autonomous execution claim is present
- no unapproved Sentinel blocking, publishing, provider action, or account
  mutation is implied

Required when a scene includes Foresight, ROI, forecast, or performance:

- `Hypothesis, not guarantee` or equivalent wording is specified
- no guaranteed uplift, savings, efficiency, ROI, conversion, spend, or delivery
  claim is present
- no real performance metric or customer result is required

Required when a virtual presenter appears:

- presenter use matches the scene-level map
- presenter is framed as a virtual guide, not a real employee, customer,
  advertiser, colleague, or testimonial
- opening or closing disclosure covers the virtual presenter for the variant
- presenter does not imply personal endorsement or operational authority

## Variant-Level Requirements

Executive 5min:

- `E1` or `E15` includes full virtual presenter disclosure
- `E4`, `E9`, `E10`, and `E13` retain human approval/governance language
- `E8` and ROI-related parts of `E13` retain no-performance-guarantee language
- Lens/Foresight/Compass/Sentinel scenes remain product explanations, not
  claims of autonomous replacement

Planner 90s:

- `P1` or `P2` includes start disclosure, or `P9` includes closing disclosure
- `P3` presenter appearance does not replace start/end disclosure
- `P5` and `P8` retain human approval language
- `P7` retains hypothesis/no-guarantee language
- all UI-like scenes use sanitized mock labels

## Rejection Conditions

Reject the frame spec and keep production on hold if any scene requires:

- generated media to determine whether it is safe
- real screenshots from Slack, Supabase, Vercel, DB tools, dashboards, logs,
  accounts, billing, contracts, budgets, or performance systems
- `AI Influencer/` asset access, staging, transformation, copy, move, upload,
  delete, or commit
- real presenter/employee/customer/advertiser/testimonial framing
- performance guarantee or quantified productivity claim without approved
  evidence
- external Hyperframes code, package setup, CLI, render workflow, catalog block,
  skill file, vendor asset, or template
- product code, package, dependency, lockfile, script, or production prompt
  changes

## Allowed Next Step

Allowed:

- document-only scene row refinement
- caption/disclosure text tightening
- dummy visual label tightening
- approval criteria refinement
- preparing an explicit human approval request for a controlled non-production
  frame mock pass

Not allowed:

- any media generation or rendering
- any asset access or transformation
- any product implementation work
- any vendor/API/model execution

## No-Touch Confirmation

This gate did not perform:

- image, video, audio, TTS, lip-sync, or render generation
- media export or final assembly
- `AI Influencer/` asset access, staging, transform, copy, move, upload, delete,
  or commit
- product code changes
- package, dependency, or lockfile changes
- external code or vendor carry-over
- production traffic
- secret, env, token, cookie, credential, session, or signed URL output

## Verification

Run:

```text
git diff --check -- docs/tasks/2026-05-11_creative_studio_storyboard_qa_6_frame_spec_acceptance_checklist_v1.md
```

Run a secret-like scan against this document and confirm no credential-like
value is present.

## Result

Result: DOCUMENT-ONLY CHECKLIST READY

Production and media generation remain on hold. A controlled non-production
frame mock pass still requires separate explicit human approval.
