# Creative Studio Storyboard QA Scene Row Refinement Plan v1

Date: 2026-05-11
Status: document-only refinement plan
Scope: scene-row approval criteria for executive 5min and planner 90s storyboard QA

## Purpose

This plan defines how to refine and approve each storyboard QA scene row after
the frame-spec acceptance checklist. It remains a documentation task only.

This document does not authorize image generation, video generation, render
generation, audio generation, TTS, lip-sync, presenter clip creation, final
assembly, `AI Influencer/` asset access, external vendor execution, or product
code changes.

## Inputs

Use these document baselines only:

- `docs/tasks/2026-05-10_creative_studio_storyboard_qa_4_frame_spec_table_draft_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_5_production_hold_decision_v1.md`
- `docs/tasks/2026-05-11_creative_studio_storyboard_qa_6_frame_spec_acceptance_checklist_v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/video-production-safety-gate-v1.md`
- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`

Do not inspect, open, copy, transform, stage, upload, delete, or commit media
assets while completing this refinement.

## Scene Row Approval Criteria

Each executive scene row `E1` through `E15` and planner scene row `P1` through
`P9` is approvable only when the row can be reviewed without generated media or
real operational data.

Required row fields:

- canonical scene id
- scene purpose
- visual type
- caption or disclosure requirement
- dummy visual label requirement
- presenter cue
- approval cue
- performance cue
- data safety boundary
- pass/fail result
- reviewer note

Approve a row only when:

- the row keeps its canonical scene id and does not merge unrelated scenes
- the visual can be described as a document-level mock or abstract frame
- no real advertiser, account, campaign, customer, employee, budget, billing,
  audit, dashboard, log, DB, API, token, credential, or performance source is
  required
- no generated image, video, audio, render, TTS, lip-sync, presenter clip, or
  final assembly is required to judge the row
- no `AI Influencer/` asset operation is required
- no external Hyperframes code, package, CLI, render workflow, catalog block,
  skill file, vendor asset, or template is carried into the repo
- no product code, dependency, lockfile, script, prompt, or configuration
  change is needed

## Disclosure And Dummy Visual Labels

Use exact label intent consistently across all scene rows:

| Row condition | Required label or cue |
| --- | --- |
| presenter appears or is introduced | `AI-generated virtual presenter` |
| UI, dashboard, evidence, proof, source, workflow, or data-like visual | `Sanitized mock visual` |
| Sentinel, Agent Core, governance, approval, or action-implying visual | `Human approval remains required` |
| Foresight, ROI, forecast, performance, savings, or impact visual | `Hypothesis, not guarantee` |

Full virtual presenter disclosure must be present in the opening or closing
window for both variants. Short scene-row labels may reference the same concept,
but they do not replace the required full disclosure.

Reject a row if it uses vague labels such as `sample`, `demo`, `draft`,
`placeholder`, or `example` without also stating that the visual is sanitized,
mock, and non-operational where required.

## Presenter Cue Consistency

Presenter cues must make the presenter a virtual guide only.

Allowed:

- absent
- voice-over only
- optional short still
- limited guide shot
- approved closeup for opening or closing disclosure

Required consistency checks:

- presenter cue matches the frame-spec table for the scene
- presenter does not appear as a real employee, customer, advertiser,
  colleague, influencer, reviewer, testimonial giver, or operator
- presenter does not claim personal experience, customer results, account
  ownership, operational authority, or approval authority
- presenter disclosure is covered at variant level even when a scene row uses a
  short cue
- presenter return shots do not weaken human approval or no-guarantee cues

## Pass/Fail Checks

Mark each row as `PASS`, `FAIL`, or `NEEDS CLARIFICATION`.

`PASS` requires:

- all required row fields are complete
- labels match the row condition
- presenter cue is consistent with the scene map
- approval cue is present for action-implying scenes
- no-guarantee cue is present for performance-implying scenes
- data safety boundary excludes real internal or customer material
- review can be completed using documents only

`FAIL` applies if the row:

- requires generated media, rendered frames, asset access, or external vendor
  output to judge safety
- uses real or plausibly real operational screens, data, logs, dashboards,
  account names, advertiser names, budgets, billing, audit records, contracts,
  performance metrics, or private strategy
- frames the presenter as a real person or testimonial source
- implies fully autonomous execution, blocking, publishing, account mutation, or
  approval-free operation
- includes a performance guarantee, ROI promise, quantified productivity claim,
  or forecast presented as fact
- depends on product code, package, dependency, lockfile, script, prompt, or
  configuration changes

`NEEDS CLARIFICATION` applies if the row:

- names the right cue but leaves placement unclear
- uses a visual type that could be mistaken for real product evidence
- allows presenter presence but does not define whether it is voice-over, still,
  limited guide shot, or closeup
- references approval, automation, ROI, or evidence without enough safety text

## Row Refinement Workflow

1. Review the executive rows `E1` through `E15`.
2. Review the planner rows `P1` through `P9`.
3. For each row, fill missing label, presenter, approval, performance, and data
   safety details using document-only wording.
4. Mark the row `PASS`, `FAIL`, or `NEEDS CLARIFICATION`.
5. Keep production on hold for any row that is not `PASS`.
6. Record unresolved questions as reviewer notes instead of resolving them with
   generated media or asset inspection.

## Next Safe Gate

Next gate: `Creative-Studio-Storyboard-QA-7 Scene Row Acceptance Matrix`.

Allowed in the next gate:

- document-only matrix of `E1` through `E15` and `P1` through `P9`
- final row-level pass/fail status
- missing caption, label, presenter cue, approval cue, and performance cue notes
- explicit list of rows still blocked from any mock frame work
- preparation of a separate human approval request for a controlled
  non-production frame mock pass

Not allowed in the next gate:

- media generation or rendering
- presenter clip generation
- `AI Influencer/` asset access or transformation
- product code or package changes
- external vendor, model, render, or API execution
- real operational data collection

## No-Touch Confirmation

This plan did not perform and does not authorize:

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
git diff --check -- docs/tasks/2026-05-11_creative_studio_storyboard_qa_scene_row_refinement_plan_v1.md
```

Run a secret-like scan against this document and confirm no credential-like
value is present.

Expected changed path:

```text
docs/tasks/2026-05-11_creative_studio_storyboard_qa_scene_row_refinement_plan_v1.md
```

## Result

Result: DOCUMENT-ONLY REFINEMENT PLAN READY

Production and media generation remain on hold. Scene rows may move next to a
document-only acceptance matrix, but any controlled non-production frame mock
pass still requires separate explicit human approval.
