# Creative Studio Storyboard QA 7 Scene Row Acceptance Matrix Plan v1

Date: 2026-05-11
Status: document-only acceptance matrix plan
Scope: canonical executive 5min and planner 90s scene-row acceptance matrix

## Purpose

This plan defines the next safe storyboard QA queue after scene-row refinement:
a document-only acceptance matrix for canonical executive rows `E1` through
`E15` and planner rows `P1` through `P9`.

This plan does not authorize rendering, image generation, video generation,
audio generation, TTS, lip-sync, presenter clip creation, asset inspection,
asset modification, final assembly, product code edits, external Hyperframes
code import, external vendor import, or external render workflow execution.

## Inputs

Use these document baselines only:

- `docs/tasks/2026-05-10_creative_studio_storyboard_qa_4_frame_spec_table_draft_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_5_production_hold_decision_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_6_frame_spec_acceptance_checklist_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_scene_row_refinement_plan_v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/video-production-safety-gate-v1.md`
- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`

Do not open, inspect, copy, transform, stage, upload, delete, or commit media
assets while completing this matrix.

## Matrix Columns

The acceptance matrix should use these columns:

| Column | Acceptance expectation |
| --- | --- |
| Scene | Canonical `E1`-`E15` or `P1`-`P9`; no merged or vendor-style row ids |
| Scene purpose | Matches the storyboard purpose without expanding production scope |
| Fixture expectation | Document-only mock, abstract card, title, diagram, proof tile, or loop |
| Caption/disclosure check | Required primary disclosure or short caption is named |
| Dummy visual check | Mock/sanitized/non-operational label is required where UI-like |
| Presenter check | Presenter cue is absent, voice-over, still, limited guide shot, or closeup only |
| Approval check | Human approval/governance cue is required for action-implying rows |
| Performance check | No-guarantee cue is required for forecast, ROI, saving, or impact rows |
| Data safety check | Real customer, advertiser, account, metric, log, DB, API, budget, billing, and audit data are excluded |
| Status | `PASS`, `FAIL`, or `NEEDS CLARIFICATION` |
| Reviewer note | Unresolved wording or placement questions only |

`PASS` means the row can be judged from documents only. Any need for generated
media, rendered frames, real assets, product code, external vendor code, or real
operational data is an automatic `FAIL`.

## Shared Acceptance Rules

Every row must satisfy these criteria:

- The canonical scene id remains unchanged.
- The row is reviewable using documents only.
- The fixture expectation is a dummy, sanitized, abstract, or non-operational
  visual description.
- Presenter wording frames the presenter as a virtual guide only.
- No real employee, customer, advertiser, colleague, operator, testimonial, or
  account owner is implied.
- No autonomous publishing, blocking, account mutation, optimization,
  training, or approval-free execution is implied.
- No guaranteed uplift, ROI, savings, efficiency, conversion, performance, or
  delivery claim is implied.
- No real dashboard, Slack, Supabase, Vercel, DB, API, log, billing, contract,
  budget, audit, campaign, account, or performance source is required.

## Executive 5min Acceptance Matrix Plan

| Scene | Scene purpose | Fixture expectation | Caption/disclosure check | Dummy visual check | Presenter check | Approval check | Performance check |
| --- | --- | --- | --- | --- | --- | --- | --- |
| E1 | Opening title and virtual presenter disclosure | Minimal title/disclosure card | Full virtual presenter disclosure required | No UI-like fixture | Absent preferred; tiny non-identifying still only if needed | No action cue needed | No performance cue needed |
| E2 | Set up why AdMate matters now | Title setup card | Optional short virtual presenter cue if presenter appears | No internal source visual | Optional short still only | No action cue needed | No performance cue needed |
| E3 | Show repeated work and scattered judgment | Abstract operation cards | Concise problem caption | `Sanitized mock visual` if cards look UI-like | Optional short shot only | No action cue needed | No quantified workload claim |
| E4 | Define AdMate as an AI Agent operating platform | Ecosystem diagram | Platform definition caption | Sanitized diagram label | Voice-over only | Human approval cue if automation is implied | No autonomy or outcome claim |
| E5 | Explain Compass guide-source checking | Compass card and policy/source mock | Source-check caption | `Sanitized mock visual` required | Voice-over only | No action cue needed | No performance cue needed |
| E6 | Explain Sentinel setup QA and anomaly signal | Sentinel checklist/signal mock | Setup QA caption | `Sanitized mock visual` required | Voice-over only | `Human approval remains required` required | No performance cue needed |
| E7 | Explain Lens sanitized proof capture | Proof tile mock | Evidence context caption | `Sanitized mock visual` required | Voice-over only | No action cue needed | No real proof or account evidence |
| E8 | Explain Foresight hypothesis framing | Hypothesis card | Hypothesis caption | Sanitized card label | Voice-over only | No action cue needed | `Hypothesis, not guarantee` required |
| E9 | Explain Agent Core, Openclaw, Hermes | Agent Core diagram | Governance/execution/memory caption | Sanitized diagram label | Voice-over only | Human approval/governance cue required | No operational authority claim |
| E10 | Show 7-step lifecycle loop | Lifecycle loop diagram | Lifecycle caption | Sanitized loop label | Voice-over only | Human approval cue if action is implied | No real campaign dates or status |
| E11 | Show reusable knowledge/criteria | Knowledge card stack | Reusable criteria caption | Sanitized card label | Optional short return only | No action cue needed | No customer/private strategy claim |
| E12 | Show before/after workflow | Abstract before/after workflow | Repetition reduction caption | Sanitized workflow label | Voice-over only | No action cue needed | No saved-hour or efficiency number |
| E13 | Summarize governance, approval, audit, ROI frame | Governance row | Governance caption | Sanitized governance label | Voice-over only | Human approval/governance cue required | No ROI promise; no real audit log |
| E14 | Preview roadmap areas | Roadmap cards | Future direction caption | Sanitized roadmap label | Optional transition shot only | No action cue needed | No real schedule, budget, or owner |
| E15 | Closing title and presenter disclosure | Final title/close | Closing virtual presenter disclosure required | No UI-like fixture | Approved closeup only | No action cue needed | No replacement or outcome claim |

Executive row status should remain blocked from any mock-frame work unless each
row has complete caption/disclosure, dummy visual, presenter, approval,
performance, and data-safety checks.

## Planner 90s Acceptance Matrix Plan

| Scene | Scene purpose | Fixture expectation | Caption/disclosure check | Dummy visual check | Presenter check | Approval check | Performance check |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | Show repeated checks accumulating | Abstract task stack | Opening disclosure or setup cue | `Sanitized mock visual` if task-like | Absent or tiny non-identifying still only | No action cue needed | No workload metric |
| P2 | Align policy, setup, capture, result tasks | Task cards into flow | Flow caption | Sanitized/dummy labels required | Voice-over only | No action cue needed | No performance cue needed |
| P3 | Position AdMate as work partner | Work partner card | AI work partner caption | No UI-like fixture | Approved guide shot only | No action cue needed | No planner replacement claim |
| P4 | Explain Compass source checking | Compass source mock | Source-check caption | `Sanitized mock visual` required | Limited presenter allowed | No action cue needed | No real campaign brief |
| P5 | Explain Sentinel setup and anomaly signal | Sentinel checklist mock | Setup/signal caption | `Sanitized mock visual` required | Voice-over only | `Human approval remains required` required | No unapproved execution claim |
| P6 | Explain Lens proof with context | Sanitized proof tile | Sanitized proof caption | `Sanitized mock visual` required | Voice-over only | No action cue needed | No real internal screen/account |
| P7 | Explain Foresight hypothesis | Hypothesis card | Hypothesis caption | Sanitized card label | Voice-over only | No action cue needed | `Hypothesis, not guarantee` required |
| P8 | Show judgment becoming criteria | Judgment-to-criteria loop | Criteria loop caption | Sanitized loop label | Voice-over only; optional side reference only | Human approval cue required | No unreviewed auto-training |
| P9 | Closing title and presenter disclosure | Final title/close | Closing virtual presenter disclosure required | No UI-like fixture | Approved closeup only | No action cue needed | No coworker or testimonial framing |

Planner row status should remain blocked from any mock-frame work unless each
row has complete caption/disclosure, dummy visual, presenter, approval,
performance, and data-safety checks.

## Fixture Expectations

Allowed fixture references are document-only descriptions:

- title card
- disclosure card
- abstract operation cards
- product card
- sanitized source mock
- sanitized checklist mock
- sanitized proof tile
- hypothesis card
- governance row
- lifecycle or judgment loop diagram
- roadmap card
- final title card

Forbidden fixture sources:

- generated images, rendered stills, generated video, audio, TTS, lip-sync, or
  presenter clips
- real screenshots or exports from internal systems
- real advertiser, campaign, account, budget, billing, audit, dashboard, log,
  DB, API, performance, or customer data
- `AI Influencer/` asset files or derivative assets
- external Hyperframes code, packages, templates, catalog blocks, vendor assets,
  render workflows, CLIs, or examples
- product code, prompt files, scripts, package files, lockfiles, configuration,
  or dependencies

## Caption And Disclosure Checks

Use approved caption/disclosure intent only:

| Condition | Required check |
| --- | --- |
| Opening or closing presenter disclosure | Full Korean virtual presenter disclosure for the variant |
| Presenter appears in a row | Short `AI-generated virtual presenter` cue may be used but cannot replace full disclosure |
| UI-like card, mock, proof, source, checklist, loop, or diagram | `Sanitized mock visual` or equivalent mock/non-operational label |
| Sentinel, Agent Core, governance, approval, or action-implying row | `Human approval remains required` or equivalent approval cue |
| Foresight, ROI, savings, forecast, efficiency, or impact row | `Hypothesis, not guarantee` or equivalent no-guarantee cue |

Reject vague labels such as `sample`, `demo`, `draft`, `placeholder`, or
`example` when they are not paired with sanitized, mock, and non-operational
wording.

## Presenter Checks

Allowed presenter cues:

- absent
- voice-over only
- tiny non-identifying still
- optional short still
- limited guide shot
- optional transition shot
- approved closeup for opening or closing disclosure

Reject any row where the presenter:

- appears as a real employee, customer, advertiser, colleague, planner, operator,
  reviewer, influencer, or testimonial source
- claims personal experience, account ownership, customer results, operational
  authority, approval authority, or product execution authority
- replaces the required opening or closing virtual presenter disclosure
- weakens human approval or no-guarantee cues

## Status Rules

Use these status definitions:

- `PASS`: all matrix checks are complete and the row is document-reviewable.
- `FAIL`: generated media, assets, product code, real data, external vendor
  output, or unsafe claims are needed or implied.
- `NEEDS CLARIFICATION`: the right concept is present, but wording, placement,
  label type, or presenter cue needs a document-only clarification.

Any `FAIL` or `NEEDS CLARIFICATION` row keeps production and mock-frame work on
hold for that row.

## Forbidden Actions

This queue explicitly forbids:

- rendering or render workflow execution
- image generation
- video generation
- audio generation
- TTS generation
- lip-sync generation
- presenter clip generation
- asset creation, asset edits, asset transforms, asset copies, asset staging,
  asset uploads, or asset deletion
- `AI Influencer/` asset access or modification
- product code edits
- prompt, script, package, dependency, lockfile, or configuration edits
- external Hyperframes code, package, template, catalog block, vendor asset,
  workflow, CLI, or example import
- real operational data collection or export
- committing or pushing changes

## Next Safe Gate

Next gate: `Creative-Studio-Storyboard-QA-8 Row Status Freeze Request`.

Allowed in the next gate:

- document-only final row statuses
- reviewer notes for blocked rows
- a human approval request for any controlled non-production frame mock pass

Not allowed in the next gate without separate explicit approval:

- any mock frame generation
- any media generation or rendering
- any asset operation
- any product implementation work
- any external vendor/API/model execution

## No-Touch Confirmation

This plan did not perform and does not authorize:

- image, video, audio, TTS, lip-sync, presenter, or render generation
- media export or final assembly
- `AI Influencer/` asset access, staging, transform, copy, move, upload, delete,
  or commit
- product code changes
- package, dependency, lockfile, script, prompt, or configuration changes
- external Hyperframes code or vendor carry-over
- production traffic
- secret, env, token, cookie, credential, session, or signed URL output

## Verification

Run:

```text
git diff --check -- docs/tasks/2026-05-11_creative_studio_storyboard_qa_7_scene_row_acceptance_matrix_plan_v1.md
```

Run a secret-like scan against this document and confirm no credential-like
value is present.

Expected changed path:

```text
docs/tasks/2026-05-11_creative_studio_storyboard_qa_7_scene_row_acceptance_matrix_plan_v1.md
```

## Result

Result: DOCUMENT-ONLY ACCEPTANCE MATRIX PLAN READY

Production, media generation, asset operations, product code edits, and external
Hyperframes/vendor imports remain on hold.
