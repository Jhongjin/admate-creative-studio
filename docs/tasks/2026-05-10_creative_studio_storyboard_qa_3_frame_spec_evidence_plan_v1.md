# Creative Studio Storyboard QA 3 Frame Spec Evidence Plan v1

Date: 2026-05-10
Status: document-only evidence plan
Scope: frame-spec evidence requirements before media generation

## Purpose

The Storyboard QA 2 read-only review passed at the document layer. The next
required step before any media production is a frame-spec evidence plan.

This gate defines how future frame specs must prove caption placement,
presenter usage, dummy visual labeling, human approval language, and
no-performance-promise language before any image, video, audio, render, TTS, or
lip-sync work is approved.

## Boundary

This gate is document-only. It does not:

- generate images, video, audio, TTS, lip-sync, or renders
- open, stage, transform, upload, move, or delete `AI Influencer/` assets
- create storyboard images or frame screenshots
- call external video, image, model, vendor, or render services
- change product code, packages, dependencies, or prompts used by production
- use real advertiser, account, campaign, employee, billing, dashboard, log, or
  performance data

## Evidence Required Per Scene

Each future frame spec must include:

- canonical scene ID
- intended duration or time range
- primary visual type
- presenter presence rule
- caption/disclosure text
- caption placement
- dummy/mock visual label placement when needed
- human approval cue when needed
- no-performance-promise cue when needed
- safe data declaration
- forbidden-data review result
- reviewer decision

These fields are planning evidence. They are not media assets.

## Executive Evidence Checklist

For `E1` through `E15`, future frame specs must prove:

- `E1`: opening disclosure appears within the approved opening window.
- `E4`: AdMate platform definition is diagram/card-led and does not imply fully
  autonomous campaign operation.
- `E5`: Compass role is source-check starting point, not final strategy
  approval.
- `E6`: Sentinel role includes human approval and does not imply unapproved
  campaign blocking or execution.
- `E7`: Lens proof tiles are sanitized and not real product captures.
- `E8`: Foresight is hypothesis/analysis only, not a performance promise.
- `E9`: Agent Core diagram avoids internal DB/API/log exposure.
- `E13`: governance frame uses abstract permission/approval/audit/ROI language.
- `E15`: closing disclosure does not imply a real employee presenter.

All other executive scenes must also prove absence of real advertiser, account,
campaign, billing, dashboard, log, and performance data.

## Planner Evidence Checklist

For `P1` through `P9`, future frame specs must prove:

- `P1` or `P2`: opening disclosure or approved opening cue is present.
- `P3`: AdMate is an AI work partner, not a planner replacement.
- `P4`: Compass source-check copy stays within approved product language.
- `P5`: Sentinel frame includes human approval or review framing.
- `P6`: Lens proof visual is sanitized and non-operational.
- `P7`: Foresight frame includes no-performance-promise framing.
- `P8`: judgment-to-criteria loop avoids unreviewed auto-training or execution.
- `P9`: closing disclosure is present if the opening did not carry the full
  required disclosure.

Planner frame specs must keep presenter use limited to approved scenes and
must not create a coworker, employee, customer, or testimonial impression.

## Caption Placement Evidence

Future frame specs should record placement as one of:

- `top-left`
- `top-right`
- `bottom-left`
- `bottom-right`
- `center-lower`
- `safe-title-area`
- `not-applicable`

Placement is acceptable only if the caption does not cover:

- presenter face
- product card labels
- key diagram nodes
- disclosure text
- mock visual labels
- navigation or callout labels needed for comprehension

## Mock Visual Evidence

For any UI-like scene, frame specs must include:

- whether the visual is abstract, diagram, product card, proof tile, source
  mock, checklist mock, or hypothesis card
- dummy label text
- sanitized mock label placement
- confirmation that no real screenshot is used
- confirmation that no real advertiser, account, campaign, customer, employee,
  billing, dashboard, log, or performance data appears

If a frame could be mistaken for a real internal tool or third-party platform,
the frame must fail until the visual is simplified or labeled.

## Presenter Evidence

Frame specs must record:

- presenter present: yes/no
- presenter role: virtual guide only
- presenter scene source: filename-only planning reference if needed
- face visibility: none, small, medium, close
- disclosure coverage: full disclosure or short cue
- employee/testimonial risk: pass/fail

The frame spec must fail if the presenter is described as an actual employee,
planner, customer, advertiser, executive, or colleague.

## Forbidden Output Markers

Frame specs and QA notes must not contain:

- real advertiser or campaign names
- real account, customer, billing, audit, or dashboard identifiers
- credentials, tokens, cookies, API keys, session values, signed URLs, or env
  values
- raw DB/API/log payloads
- real performance metrics or ROI claims
- external Hyperframes code, packages, CLI commands, catalog blocks, skill
  files, vendor assets, or render workflows

## Pass Criteria

Pass only if:

- every canonical scene has a frame-spec evidence row
- disclosure and captions have explicit placement decisions
- mock visual labels are present where needed
- human approval and no-performance-promise cues are present where required
- presenter use stays within approved scenes and roles
- no frame spec requires generated media to judge basic safety
- no asset, render, code, or vendor operation occurs in this gate

## Stop Conditions

Stop before production if:

- any frame requires real operational data
- any caption/disclosure placement is undecidable without generated output
- any presenter cue reads like a real employee or testimonial
- Foresight or ROI frames imply guaranteed outcomes
- Sentinel or Agent Core frames imply unapproved automated execution
- a proposed workflow requires opening or transforming `AI Influencer/` assets
- external render, image, video, TTS, or lip-sync tools become necessary

## Verification Plan

Run:

```text
git diff --check -- docs/tasks/2026-05-10_creative_studio_storyboard_qa_3_frame_spec_evidence_plan_v1.md
```

Then confirm:

```text
git status --short
```

Expected changed file:

```text
docs/tasks/2026-05-10_creative_studio_storyboard_qa_3_frame_spec_evidence_plan_v1.md
```

## Next Gate

`Creative-Studio-Storyboard-QA-4 Frame Spec Table Draft`

Create the first document-only frame-spec evidence table for `E1`-`E15` and
`P1`-`P9`. Do not generate media, open assets, call render tools, or modify
product code.
