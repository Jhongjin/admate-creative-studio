# Creative Studio Storyboard QA 12 Controlled Frame Mock Row Plan v1

Date: 2026-05-11
Status: document-only controlled frame mock row plan
Scope: text-only row-by-row planning table for executive `E1`-`E15` and
planner `P1`-`P9`

## Purpose

This document follows QA 11 and defines a row-by-row planning table for a future
controlled non-production frame mock pass. It uses only document baselines and
does not authorize any non-text work.

This row plan does not create, inspect, open, generate, render, assemble,
export, stage, upload, delete, or commit any media, asset, `AI Influencer/`
file, product code, package, script, config, external vendor output, external
model output, or operational data.

## Document Baselines

Use only these existing documents as baselines:

- `docs/tasks/2026-05-10_creative_studio_storyboard_qa_4_frame_spec_table_draft_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_5_production_hold_decision_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_6_frame_spec_acceptance_checklist_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_7_scene_row_acceptance_matrix_plan_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_8_row_status_freeze_request_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_9_row_status_freeze_approval_result_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_10_controlled_frame_mock_planning_request_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_11_controlled_frame_mock_planning_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_scene_row_refinement_plan_v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/video-production-safety-gate-v1.md`
- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`

## Row Plan Rules

Every row below is text-only. The `Allowed text fixture type` column describes
the kind of future mock that may be planned, not generated.

Shared blocked dependencies for every row:

- media generation
- still image generation
- video generation
- audio generation
- TTS generation
- lip-sync generation
- presenter generation
- rendering or render workflow execution
- media export, preview assembly, or final assembly
- screenshot capture
- asset access, inspection, copy, transform, staging, upload, delete, or commit
- `AI Influencer/` access, inspection, copy, transform, staging, upload, delete,
  or commit
- product code edits
- prompt, package, script, lockfile, dependency, build, or config edits
- external vendor, API, model, Hyperframes, CLI, template, catalog, workflow,
  or example use
- real operational data access or use

Approval needed before any non-text work:

```text
Separate explicit human approval naming the row IDs, permitted non-text action,
allowed fixture scope, storage location, validation plan, and no-touch
boundaries.
```

## Executive 5min Row Plan

| Scene | Planned mock purpose | Allowed text fixture type | Required labels | Blocked dependencies | Approval needed before non-text work |
| --- | --- | --- | --- | --- | --- |
| E1 | Prove the opening can carry title and virtual presenter disclosure without real identity. | Text-only title/disclosure card plan. | Full virtual presenter disclosure; no real identity. | Shared blocked dependencies; no presenter asset access. | Human approval naming `E1` and any permitted frame or presenter action. |
| E2 | Prove the setup can explain why AdMate matters without internal sources. | Text-only title setup card plan. | Optional short virtual presenter cue only if presenter appears. | Shared blocked dependencies; no internal screen or company source. | Human approval naming `E2` and any permitted non-text title/frame action. |
| E3 | Prove repeated work can be shown as abstract non-operational cards. | Text-only abstract operation card plan. | `Sanitized mock visual` if UI-like; no workload metric. | Shared blocked dependencies; no task board or real team data. | Human approval naming `E3` and any permitted mock-frame action. |
| E4 | Prove the ecosystem diagram avoids automation overclaim. | Text-only sanitized ecosystem diagram plan. | `Sanitized mock visual`; platform definition caption; `Human approval remains required`. | Shared blocked dependencies; no architecture, execution, or vendor diagram import. | Human approval naming `E4` and any permitted diagram/frame action. |
| E5 | Prove Compass can be framed as source-check support. | Text-only sanitized product/source card plan. | `Sanitized mock visual`; source-check caption. | Shared blocked dependencies; no real brief, policy text, or source payload. | Human approval naming `E5` and any permitted source-card mock action. |
| E6 | Prove Sentinel setup and signal review keep human control visible. | Text-only sanitized checklist/signal plan. | `Sanitized mock visual`; `Human approval remains required`. | Shared blocked dependencies; no real alert, setting, or blocking action. | Human approval naming `E6` and any permitted checklist/frame action. |
| E7 | Prove Lens proof context can be explained without real capture output. | Text-only sanitized proof tile plan. | `Sanitized mock visual`; evidence context caption. | Shared blocked dependencies; no screenshots, account IDs, captures, or assets. | Human approval naming `E7` and any permitted proof-tile action. |
| E8 | Prove Foresight remains hypothesis-framed. | Text-only hypothesis card plan. | `Hypothesis, not guarantee`; no real metric. | Shared blocked dependencies; no performance, forecast, ROI, or trend data. | Human approval naming `E8` and any permitted hypothesis-frame action. |
| E9 | Prove Agent Core governance/memory can be shown without internals. | Text-only sanitized governance diagram plan. | `Sanitized mock visual`; governance/execution/memory caption; `Human approval remains required`. | Shared blocked dependencies; no DB, API, log, key, or internal architecture detail. | Human approval naming `E9` and any permitted governance-diagram action. |
| E10 | Prove the lifecycle loop can be shown without campaign status. | Text-only sanitized lifecycle loop plan. | `Sanitized mock visual`; lifecycle caption; `Human approval remains required`. | Shared blocked dependencies; no real campaign date, status, or workflow output. | Human approval naming `E10` and any permitted lifecycle-frame action. |
| E11 | Prove reusable criteria can be visualized safely. | Text-only sanitized knowledge card plan. | `Sanitized mock visual`; reusable criteria caption. | Shared blocked dependencies; no customer strategy or private knowledge content. | Human approval naming `E11` and any permitted knowledge-card action. |
| E12 | Prove before/after workflow can avoid quantified claims. | Text-only abstract before/after workflow plan. | `Sanitized mock visual`; repetition reduction caption; `Human approval remains required`; no quantified performance cue. | Shared blocked dependencies; no saved-hour, productivity, or efficiency number. | Human approval naming `E12` and any permitted workflow-frame action. |
| E13 | Prove governance, approval, audit, and ROI framing stays safe. | Text-only sanitized governance row plan. | `Human approval remains required`; `Hypothesis, not guarantee` for ROI. | Shared blocked dependencies; no real audit, billing, ROI, or permission data. | Human approval naming `E13` and any permitted governance/ROI-frame action. |
| E14 | Prove roadmap direction can stay abstract. | Text-only sanitized roadmap card plan. | `Sanitized mock visual`; future direction caption. | Shared blocked dependencies; no real schedule, budget, owner, or committed roadmap. | Human approval naming `E14` and any permitted roadmap-frame action. |
| E15 | Prove the close can preserve presenter disclosure and planner judgment. | Text-only final title/close card plan. | Closing virtual presenter disclosure; no employee identity. | Shared blocked dependencies; no presenter asset access or testimonial framing. | Human approval naming `E15` and any permitted closeup/frame action. |

## Planner 90s Row Plan

| Scene | Planned mock purpose | Allowed text fixture type | Required labels | Blocked dependencies | Approval needed before non-text work |
| --- | --- | --- | --- | --- | --- |
| P1 | Prove repeated checks can be shown without real task data. | Text-only abstract task stack plan. | `Sanitized mock visual` if task-like; no workload metric. | Shared blocked dependencies; no real task board. | Human approval naming `P1` and any permitted task-stack frame action. |
| P2 | Prove policy, setup, capture, and analysis can align as dummy flow cards. | Text-only sanitized task-card flow plan. | `Sanitized mock visual`; flow caption; `Human approval remains required`; dummy labels only. | Shared blocked dependencies; no real workflow screenshot or operational source. | Human approval naming `P2` and any permitted flow-card action. |
| P3 | Prove AdMate is framed as a work partner, not planner replacement. | Text-only work partner card plan. | AI work partner caption; virtual guide framing. | Shared blocked dependencies; no presenter asset access or replacement claim. | Human approval naming `P3` and any permitted guide/frame action. |
| P4 | Prove Compass source checking can be shown with sanitized evidence. | Text-only sanitized source mock plan. | `Sanitized mock visual`; source-check caption. | Shared blocked dependencies; no campaign brief or policy full text. | Human approval naming `P4` and any permitted source-mock action. |
| P5 | Prove Sentinel setup and signal review keep approval visible. | Text-only sanitized checklist plan. | `Sanitized mock visual`; `Human approval remains required`. | Shared blocked dependencies; no alert log or auto-execution cue. | Human approval naming `P5` and any permitted checklist-frame action. |
| P6 | Prove Lens proof can be framed as context only. | Text-only sanitized proof tile plan. | `Sanitized mock visual`; sanitized proof caption. | Shared blocked dependencies; no internal screen, account, capture, or media asset. | Human approval naming `P6` and any permitted proof-tile action. |
| P7 | Prove Foresight remains a hypothesis with no outcome guarantee. | Text-only hypothesis card plan. | `Hypothesis, not guarantee`; no real performance number. | Shared blocked dependencies; no metric, benchmark, forecast, or trend data. | Human approval naming `P7` and any permitted hypothesis-frame action. |
| P8 | Prove judgment-to-criteria loop keeps review control explicit. | Text-only sanitized judgment loop plan. | `Sanitized mock visual`; judgment-to-criteria loop caption; `Human approval remains required`. | Shared blocked dependencies; no auto-training, unreviewed learning, or real criteria. | Human approval naming `P8` and any permitted loop-frame action. |
| P9 | Prove closing disclosure avoids coworker or testimonial framing. | Text-only final title/close card plan. | Closing virtual presenter disclosure; no testimonial framing. | Shared blocked dependencies; no presenter asset access or real identity. | Human approval naming `P9` and any permitted closeup/frame action. |

## Dummy Fixture Boundaries

Allowed text fixtures may use:

- canonical product names: `Compass`, `Sentinel`, `Lens`, `Foresight`,
  `Agent Core`
- generic dummy labels from the scene-level dummy visual spec
- approved safety cues: `AI-generated virtual presenter`, `Sanitized mock
  visual`, `Human approval remains required`, `Hypothesis, not guarantee`
- visibly non-operational labels such as `Guide Source`, `Needs Review`,
  `Demo proof`, `Approval`, `Hypothesis`, `Review next`, and `Learning
  candidate`

Text fixtures must not use:

- real advertiser, customer, employee, account, campaign, audience, budget,
  billing, contract, audit, dashboard, log, DB, API, metric, performance,
  forecast, or operational data
- real names, emails, customer quotes, testimonials, private strategy, personal
  data, internal URLs, source media filenames, asset paths, storage paths, raw
  provider output, raw source payloads, credentials, sessions, signed URLs, or
  private links

## Row Review Checklist

Before any future non-text approval request, every row must answer:

- Is the scene ID still frozen in QA 9?
- Is the planned fixture type text-only and sanitized?
- Are all required labels named explicitly?
- Does the row avoid real or real-looking operational data?
- Does the row avoid presenter identity, testimonial, employee, customer, or
  influencer framing?
- Does the row preserve human approval language where action is implied?
- Does the row preserve no-guarantee language where performance is implied?
- Are blocked dependencies listed and still blocked?
- Does the next step require separate explicit human approval?

## No-Touch Confirmation

This document did not perform and does not authorize:

- image, video, audio, TTS, lip-sync, presenter, or render generation
- media export, preview assembly, final assembly, screenshot capture, or visual
  evidence creation
- media or asset access, inspection, staging, transform, copy, move, upload,
  delete, or commit
- `AI Influencer/` access, inspection, staging, transform, copy, move, upload,
  delete, or commit
- product code changes
- package, dependency, lockfile, script, prompt, build, or configuration changes
- external vendor, API, model, Hyperframes, CLI, template, catalog, workflow, or
  example use
- production traffic
- real operational data access or use
- secret, env, token, cookie, credential, session, private URL, or signed URL
  output
- commit or push

## Verification

Run:

```text
git diff --check -- docs/tasks/2026-05-11_creative_studio_storyboard_qa_12_controlled_frame_mock_row_plan_v1.md
```

Run a focused secret-like scan against this document and confirm no
credential-like value is present.

Expected changed path:

```text
docs/tasks/2026-05-11_creative_studio_storyboard_qa_12_controlled_frame_mock_row_plan_v1.md
```

## Result

Result: DOCUMENT-ONLY CONTROLLED FRAME MOCK ROW PLAN READY

All non-text work remains blocked unless separately and explicitly approved by
a human with named row IDs and permitted scope.
