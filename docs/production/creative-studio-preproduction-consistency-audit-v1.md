# Creative Studio Pre-production Consistency Audit v1

작성일: 2026-05-07
Gate: Creative-Studio-6
상태: pre-production consistency audit
범위: 문서 간 정합성 검토 only

## 2026-06-08 Command Center Recheck

이 감사 문서의 `Production Blockers`는 2026-05-07 기준의 historical
blocker 목록이다. 2026-06-08 KST Command Center 재점검에서는 후속
Gate Creative-Studio-8 aligned 문서들이 아래 정렬을 반영한 것으로
확인했다.

- `executive-5min-storyboard-v1.md`와 `planner-90s-storyboard-v1.md`는
  현재 script, scene-shotlist, presenter scene map, scene-level dummy visual
  spec, caption disclosure guide를 기준 문서로 참조한다.
- Product/Core 장면은 presenter face time보다 product card, diagram,
  sanitized mock 중심으로 정렬되어 있다.
- Compass는 정책/가이드 근거 확인의 출발점, Sentinel은 세팅 검수와 운영
  이상 감지 신호로 구분하는 handoff wording이 반영되어 있다.
- `scene-level-dummy-visual-spec-v1.md`가 scene별 dummy visual, caption,
  disclosure 입력 기준을 제공한다.

현재 상태는 docs-only alignment recheck 통과이며, 이 결과는 media
generation, mock frame generation, presenter test clip, TTS/lip-sync,
image-to-video, external provider PoC, upload, publish, promotion, production
use를 승인하지 않는다.

## Audit Boundary

- 영상 생성, 이미지 생성, TTS, lip-sync, image-to-video, 외부 API 호출은 수행하지 않았다.
- `AI Influencer/` PNG는 파일명과 개수만 확인했고 이미지는 열지 않았다.
- 이미지, 영상, 음성 asset을 수정, 삭제, 이동, 리네이밍, 압축, 업로드하지 않았다.
- 실제 광고주명, 캠페인명, 계정 정보, 성과 수치, 내부 화면 정보를 추가하지 않았다.
- commit, push, stage 작업은 수행하지 않는다.

## Reviewed Documents

- `docs/message-library/admate-approved-message-library-v1.md`
- `docs/message-library/executive-reporting-message-bank-v1.md`
- `docs/message-library/media-planner-message-bank-v1.md`
- `docs/message-library/product-one-liners-v1.md`
- `docs/scripts/executive-5min-video-script-v1.md`
- `docs/scripts/planner-90s-video-script-v1.md`
- `docs/storyboard/executive-5min-storyboard-v1.md`
- `docs/storyboard/executive-5min-scene-shotlist-v1.md`
- `docs/storyboard/planner-90s-storyboard-v1.md`
- `docs/storyboard/planner-90s-scene-shotlist-v1.md`
- `docs/storyboard/presenter-scene-asset-map-v1.md`
- `docs/presenter/presenter-asset-usage-plan-v1.md`
- `docs/presenter/presenter-usage-boundary-v1.md`
- `docs/presenter/presenter-voice-tone-guide-v1.md`
- `docs/production/mock-visual-pack-plan-v1.md`
- `docs/production/video-production-safety-gate-v1.md`
- `docs/security/video-production-safety-checklist-v1.md`

## Asset Filename Check

`AI Influencer/` contains 27 PNG files.

Representative referenced files exist by filename:

- `lua_brand_safe_profile_v1_ivory_shirt.png`
- `lua_master_face_v1.png`
- `lua_smile_v1_soft_window_blouse.png`
- `lua_video_01_scene_01_window_closeup.png`
- `lua_video_01_scene_04_soft_smile.png`
- `lua_side_profile_left_v1_window_blouse_alt.png`

No image was opened or visually inspected in this audit.

## Executive 5min Script And Shotlist Consistency

Status: pass with presenter-map revision needed.

| Script Section | Script Time | Shotlist Scene | Shotlist Time | Result |
|---|---:|---|---:|---|
| Opening Title | 0:00-0:15 | E1-E2 | 0:00-0:15 | Pass. Shotlist cleanly splits disclosure and opening question. |
| 왜 AdMate인가 | 0:15-0:45 | E3 | 0:15-0:45 | Pass. Message matches repetitive work and scattered judgment. |
| AdMate 정의 | 0:45-1:05 | E4 | 0:45-1:05 | Pass. Platform definition and no-full-automation cue align. |
| 4개 제품 | 1:05-2:15 | E5-E8 | 1:05-2:15 | Pass. Compass, Sentinel, Lens, Foresight are split correctly. |
| Agent Core | 2:15-2:55 | E9 | 2:15-2:55 | Pass. Openclaw/Hermes are internal engine roles. |
| 운영 Loop | 2:55-3:35 | E10 | 2:55-3:35 | Pass. Seven-step lifecycle matches. |
| 회사 경쟁력 | 3:35-4:25 | E11-E13 | 3:35-4:25 | Pass. Knowledge asset, repetition reduction, governance/ROI are covered. |
| Roadmap | 4:25-4:50 | E14 | 4:25-4:50 | Pass. Intelligence Library, personalization, Creative Studio are covered. |
| Closing | 4:50-5:00 | E15 | 4:50-5:00 | Pass. Planner judgment remains central and presenter disclosure is repeated. |

Mismatch note:

- `executive-5min-scene-shotlist-v1.md` includes presenter cues in product and Agent Core scenes, such as E5-E9.
- `presenter-scene-asset-map-v1.md` marks E5-E10 mostly as `voice-over only`.
- Recommended resolution: make product/Core scenes diagram-led with voice-over only, or update the asset map if presenter shots are intentionally required. For safety, the stricter asset map direction is preferred.

## Planner 90s Script And Shotlist Consistency

Status: pass with product-role clarification needed.

| Script Section | Script Time | Shotlist Scene | Shotlist Time | Result |
|---|---:|---|---:|---|
| 반복 확인 업무 현실 | 0:00-0:08 | P1-P2 | 0:00-0:08 | Pass. Opening is split into task stack and card alignment. |
| AdMate 한 문장 소개 | 0:08-0:18 | P3 | 0:08-0:18 | Pass. AI work partner message aligns. |
| Compass | 0:18-0:31 | P4 | 0:18-0:31 | Pass with note. Both describe policy/condition starting point. |
| Sentinel | 0:31-0:46 | P5 | 0:31-0:46 | Pass. Pre-check and monitoring align. |
| Lens | 0:46-0:58 | P6 | 0:46-0:58 | Pass. Capture and evidence flow align. |
| Foresight | 0:58-1:12 | P7 | 0:58-1:12 | Pass. Hypothesis, not guarantee, is consistent. |
| Agent Core | 1:12-1:24 | P8 | 1:12-1:24 | Pass. Judgment becomes criteria / learning candidate aligns. |
| Closing | 1:24-1:30 | P9 | 1:24-1:30 | Pass. Strategy and judgment focus aligns. |

Mismatch note:

- `media-planner-message-bank-v1.md` assigns policy check mostly to Sentinel.
- `planner-90s-video-script-v1.md`, `planner-90s-scene-shotlist-v1.md`, and `mock-visual-pack-plan-v1.md` assign policy starting point to Compass, then pre-check and monitoring to Sentinel.
- Recommended resolution: define the handoff as `Compass = policy/condition starting point` and `Sentinel = validation, approval, and monitoring signal`, or rewrite the planner message bank to match the current script.

## Mock Visual Pack Coverage

Status: pass.

MVP-01 through MVP-11 cover all current executive and planner production needs.

| Need | Covered By | Result |
|---|---|---|
| AdMate ecosystem / platform definition | MVP-01 | Pass |
| Product role cards | MVP-02 | Pass |
| Campaign lifecycle loop / task stack | MVP-03 | Pass |
| Agent Core / Openclaw / Hermes | MVP-04 | Pass |
| Compass policy starting point | MVP-05 | Pass |
| Sentinel validation / monitoring | MVP-06 | Pass |
| Lens capture proof | MVP-07 | Pass |
| Foresight hypothesis / report mock | MVP-08 | Pass |
| Knowledge asset / Intelligence Library | MVP-09 | Pass |
| Audience-specific reporting | MVP-10 | Pass |
| Creative Studio storyboard/script/shotlist | MVP-11 | Pass |

Coverage gap before visual production:

- The pack defines visual categories, but not a scene-level visual spec with exact frame ratio, allowed on-screen text, disclosure placement, caption safe area, and maximum text density.
- This is not a document-readiness blocker, but it is a production blocker for mock frame generation.

## Presenter Asset Usage Consistency

Status: mostly pass with appearance-scope conflict.

Consistent items:

- Both `presenter-asset-usage-plan-v1.md` and `presenter-scene-asset-map-v1.md` use `lua_brand_safe_profile_v1_ivory_shirt.png` as the primary brand-safe reference.
- Both keep `lua_master_face_v1.png` as consistency reference.
- Both use soft smile assets only for closing or limited friendly guide moments.
- Both exclude beauty/lipstick, mirror selfie, street/fullbody, and Lua logo card groups from official AdMate scenes.
- Both require virtual presenter disclosure and read-only asset handling.

Conflict items:

- Executive product scenes: shotlist E5-E9 include presenter cues, but the asset map says those scenes should be voice-over only or diagram-led.
- Planner scenes: `presenter-asset-usage-plan-v1.md` allows limited presenter use in Scene 4-6, while the scene asset map uses presenter for P4 only and voice-over only for P5-P6.
- Planner P5 has a shotlist presenter cue (`단정한 eye contact`) while the asset map says `none / voice-over only`.

Recommended resolution:

- Treat `presenter-scene-asset-map-v1.md` as the stricter safety source for presenter appearance.
- Update the shotlists to say `voice-over only` for product-heavy scenes unless a specific presenter frame is later approved.

## Approved Message Library Consistency

Status: pass with one role-ownership revision.

Aligned message areas:

- Primary platform definition: `AI Agent 기반 광고 운영 자동화 플랫폼`.
- Human role: AdMate supports planners and does not replace them.
- Foresight framing: hypothesis / analysis perspective, not performance guarantee.
- Agent Core framing: orchestration, permission, audit log, workflow, learning loop.
- Safety framing: virtual presenter, no real advertiser/campaign/account/performance/internal-screen exposure.

Revision needed:

- The policy-check role shifts between Compass and Sentinel across message docs.
- `media-planner-message-bank-v1.md` says Sentinel separates policy checks and prohibited-expression review.
- Current planner script and shotlist say Compass organizes the policy/constraint starting point.
- Recommended canonical wording:
  - Compass: `브리프와 운영 조건을 읽고 정책/제약 확인의 출발점을 정리한다.`
  - Sentinel: `정책/검수 기준과 승인 필요 항목을 기준으로 사전 검수와 운영 감지 신호를 정리한다.`

## Forbidden Expression Scan

Status: pass for narrative use.

The following sensitive phrases appear, but they are used as negations, safety boundaries, review checklist items, or prohibited examples:

- `완전 자동화`
- `성과 보장`
- `승인 없이`
- `실제 임직원`
- `실제 직원`
- `실제 내부 화면`
- `실제 광고주`
- `실제 캠페인`

No positive claim was found that says:

- AdMate fully automates all operations.
- AdMate guarantees performance.
- AI learns or executes without approval.
- The presenter is an actual employee, customer, advertiser, or planner.
- Real internal screens, accounts, advertisers, campaign names, or performance numbers will be shown.

Production caution:

- Because some scripts intentionally say phrases like `완전 자동화가 아니라` and `성과를 보장하지 않고`, a simple keyword-only legal/security review may still flag them.
- If the release target is external, consider replacing risky keyword phrases with softer alternatives:
  - `핵심은 자동 집행이 아니라, 검토 가능한 운영 기준을 만드는 것입니다.`
  - `성과를 약속하는 것이 아니라, 다음 판단을 위한 가설을 제안합니다.`

## Additional Pre-production Specs Needed

Needed before any frame, clip, or final assembly work:

1. Scene-level dummy visual spec
   - Scene ID
   - MVP pack ID
   - aspect ratio
   - frame layout
   - exact allowed on-screen text
   - allowed dummy labels
   - prohibited visual elements
   - caption safe area

2. Caption and disclosure guide
   - Korean disclosure text
   - English short caption if needed
   - opening/closing placement
   - lower-third rules
   - subtitle line length
   - whether `AI-generated virtual presenter` appears in every presenter shot or only first/last frame

3. Final voice delivery sheet
   - voice tone guide already exists, but production still needs scene-level pace, pause, emphasis, and pronunciation notes.
   - This should not include voice cloning or TTS provider instructions until a later approved production gate.

## Pass Items

- Executive script and shotlist times align.
- Planner script and shotlist times align.
- MVP-01 through MVP-11 cover the current scene needs.
- Presenter file references are filename-only and do not require opening images.
- AI presenter is consistently treated as a virtual character, not an employee or real person.
- Asset handling rules consistently say no edit, no move, no upload, no stage, no commit.
- Safety gate and security checklist align with script and mock visual boundaries.

## Inconsistency Items

| ID | Severity | Area | Finding | Recommended Fix |
|---|---|---|---|---|
| CS6-01 | High | Storyboard docs | `executive-5min-storyboard-v1.md` and `planner-90s-storyboard-v1.md` still reflect older Creative Studio Agent / generic pillar framing, while current scripts and shotlists use AdMate product Agent framing. | Update or mark legacy storyboard drafts as superseded by the script + scene-shotlist pair. |
| CS6-02 | High | Presenter appearance | Product-heavy scenes have presenter cues in shotlists but voice-over-only guidance in the scene asset map. | Make product/Core scenes diagram-led and align presenter cues to the asset map. |
| CS6-03 | Medium | Product role messaging | Policy-check ownership shifts between Compass and Sentinel in planner-facing message docs. | Adopt explicit Compass-to-Sentinel handoff wording. |
| CS6-04 | Medium | Production spec | Mock visual pack covers categories but not frame-level production specs. | Create scene-level dummy visual spec before mock frame generation. |
| CS6-05 | Low | Keyword QA | Forbidden phrases appear in negated/guardrail contexts. | Keep for internal review, or rephrase for external release to reduce false-positive flags. |

## Recommended Documents To Revise

1. `docs/storyboard/executive-5min-storyboard-v1.md`
2. `docs/storyboard/planner-90s-storyboard-v1.md`
3. `docs/storyboard/executive-5min-scene-shotlist-v1.md`
4. `docs/storyboard/planner-90s-scene-shotlist-v1.md`
5. `docs/storyboard/presenter-scene-asset-map-v1.md`
6. `docs/message-library/media-planner-message-bank-v1.md`
7. `docs/production/mock-visual-pack-plan-v1.md`

## Production Blockers

Do not proceed to mock frame generation, presenter test clip, or final assembly until these are resolved:

- Blocker 1: Decide whether the current production source is script + scene-shotlist, and either update or supersede the older storyboard files.
- Blocker 2: Align presenter appearance rules between shotlists and scene asset map.
- Blocker 3: Resolve Compass/Sentinel policy-check handoff wording for planner-facing content.
- Blocker 4: Create scene-level dummy visual and caption/disclosure specs.

## Next Gate Recommendation

Recommended next gate: Gate Creative-Studio-7 document alignment patch.

Scope:

- Update legacy storyboard docs to match current script/shotlist structure.
- Align presenter cues to `presenter-scene-asset-map-v1.md`.
- Add canonical Compass/Sentinel handoff wording to message library and planner script notes.
- Add a scene-level dummy visual spec appendix without generating any image/video/audio asset.

Not recommended yet:

- Mock image generation
- Storyboard frame generation
- Presenter test clip
- TTS/lip-sync/image-to-video
- Any external video tool PoC
