# Creative Studio Storyboard QA 4 Frame Spec Table Draft v1

Date: 2026-05-10
Status: document-only draft
Scope: frame-spec evidence table for executive and planner storyboards

## Purpose

This draft turns the frame-spec evidence plan into a first review table for the
current executive 5min and planner 90s storyboards.

It is not a media production brief. It does not authorize image generation,
video generation, rendering, TTS, lip-sync, `AI Influencer/` asset handling, or
external vendor execution.

## Evidence Field Legend

- `caption/disclosure`: primary disclosure or caption requirement.
- `mock label`: whether sanitized mock labeling is required.
- `approval cue`: whether human approval language is required.
- `performance cue`: whether no-performance-promise language is required.
- `presenter`: whether presenter may appear.
- `data safety`: required data boundary.

## Executive 5min Frame Spec Table

| Scene | Visual Type | caption/disclosure | mock label | approval cue | performance cue | presenter | data safety |
| --- | --- | --- | --- | --- | --- | --- | --- |
| E1 | title/disclosure card | full virtual presenter disclosure | no | no | no | absent or tiny still | no internal screen |
| E2 | title setup | optional short virtual presenter cue | no | no | no | optional short still | no company/internal source |
| E3 | abstract operation cards | concise problem caption | yes if UI-like | no | no | optional short shot | dummy labels only |
| E4 | ecosystem diagram | platform definition caption | yes | yes if automation implied | no | voice-over only | no auto-execution claim |
| E5 | Compass product card | source-check starting point | yes | no | no | voice-over only | no real brief/policy full text |
| E6 | Sentinel checklist/signal | setup QA caption | yes | required | no | voice-over only | no unapproved blocking/execution |
| E7 | Lens proof tiles | evidence context caption | required | no | no | voice-over only | no real UI capture/account |
| E8 | Foresight hypothesis card | hypothesis framing | yes | no | required | voice-over only | no real performance/forecast guarantee |
| E9 | Agent Core diagram | governance/execution/memory caption | yes | required | no | voice-over only | no DB/API/log details |
| E10 | lifecycle loop | lifecycle caption | yes | required if action implied | no | voice-over only | no real campaign dates/status |
| E11 | knowledge cards | reusable criteria caption | yes | no | no | optional short return | no customer/private strategy |
| E12 | abstract before/after workflow | repetition reduction caption | yes | no | no quantified claim | voice-over only | no saved-hour/efficiency number |
| E13 | governance row | permission/approval/audit/ROI frame | yes | required | required for ROI | voice-over only | no real audit/billing data |
| E14 | roadmap cards | future direction caption | yes | no | no | optional transition shot | no real schedule/budget/owner |
| E15 | final title/close | closing virtual presenter disclosure | no | no | no | approved closeup | no real employee identity |

## Planner 90s Frame Spec Table

| Scene | Visual Type | caption/disclosure | mock label | approval cue | performance cue | presenter | data safety |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | abstract task stack | opening disclosure or setup cue | yes if UI-like | no | no | absent or tiny still | no real task board |
| P2 | task cards align into flow | flow caption | yes | no | no | voice-over only | dummy labels only |
| P3 | AdMate work partner card | AI work partner caption | no | no | no | approved guide shot | no planner replacement claim |
| P4 | Compass source mock | source-check caption | required | no | no | limited presenter allowed | no real campaign brief |
| P5 | Sentinel checklist | setup/signal caption | required | required | no | voice-over only | no unapproved execution |
| P6 | Lens proof tile | sanitized proof caption | required | no | no | voice-over only | no real internal screen/account |
| P7 | Foresight hypothesis card | hypothesis caption | yes | no | required | voice-over only | no real metric/guarantee |
| P8 | judgment loop | criteria loop caption | yes | required | no | voice-over only | no unreviewed auto-training |
| P9 | final title/close | closing virtual presenter disclosure | no | no | no | approved closeup | no coworker/testimonial framing |

## Required Captions To Carry Forward

Use approved wording from the caption disclosure guide:

- `AI-generated virtual presenter`
- `Sanitized mock visual`
- `Human approval remains required`
- `Hypothesis, not guarantee`

Full Korean virtual presenter disclosure must appear at the opening or closing
window for both executive and planner variants.

## Required Rejection Checks

Reject a frame spec if it contains:

- real advertiser, campaign, account, customer, employee, billing, audit, or
  dashboard data
- raw DB/API/log payloads
- token, cookie, secret, credential, signed URL, session, or env value
- external Hyperframes code, package setup, CLI, render workflow, catalog
  block, skill file, or vendor asset
- unapproved presenter use outside the scene map
- Foresight performance guarantee
- Sentinel or Agent Core unapproved automation/execution claim

## QA Result

Document-layer status: PASS AS DRAFT

The table preserves:

- executive `E1`-`E15`
- planner `P1`-`P9`
- caption/disclosure requirements
- presenter boundaries
- mock visual safety
- human approval and no-performance-promise cues

Production status: NOT AUTHORIZED

This table is a planning artifact. It does not authorize media generation or
asset operations.

## Verification Plan

Run:

```text
git diff --check -- docs/tasks/2026-05-10_creative_studio_storyboard_qa_4_frame_spec_table_draft_v1.md
```

Then confirm:

```text
git status --short
```

## No-Touch Confirmation

This gate did not perform:

- image, video, audio, TTS, lip-sync, or render generation
- `AI Influencer/` asset access or staging
- product code changes
- dependency changes
- external code/vendor import
- production traffic
- secret/env/token/cookie/session output

## Next Gate

`Creative-Studio-Storyboard-QA-5 Production Hold Decision`

Decide whether the next step should remain document-only or request explicit
approval for a controlled non-production frame mock pass. Do not generate media
without that separate approval.
