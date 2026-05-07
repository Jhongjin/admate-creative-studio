# Presenter Scene Asset Map v1

작성일: 2026-05-07
상태: Gate Creative-Studio-4 draft
용도: executive 5min / planner 90s 영상 scene별 presenter asset reference mapping

## Mapping Rules

- 이 문서는 파일명 기반 reference map이다. 이미지 파일을 이동, 수정, 복사, 업로드하지 않는다.
- `usage type`은 `still`, `reference`, `presenter shot`, `voice-over only`, `background avoid` 중 하나 이상으로 표기한다.
- 실제 제작 전에는 `video-production-safety-checklist-v1.md`와 `presenter-usage-boundary-v1.md`를 함께 확인한다.
- Presenter가 실제 직원 또는 실제 플래너처럼 보이지 않도록 모든 영상에 가상 presenter 고지를 넣는다.

## Asset Legend

| Asset | Short Label | Default Usage |
|---|---|---|
| `lua_brand_safe_profile_v1_ivory_shirt.png` | Brand-safe profile | primary presenter still/reference |
| `lua_master_face_v1.png` | Master face | face consistency reference |
| `lua_smile_v1_soft_window_blouse.png` | Soft smile | closing expression reference |
| `lua_video_01_scene_01_window_closeup.png` | Vertical intro closeup | planner intro reference |
| `lua_video_01_scene_04_soft_smile.png` | Vertical soft smile | planner closing reference |
| `lua_side_profile_left_v1_window_blouse_alt.png` | Side profile | optional B-roll reference |
| `none` | No presenter asset | diagram/product card only |

## Executive 5min Scene Map

| Scene ID | Script Section | Recommended Asset | Usage Type | Safety Note |
|---:|---|---|---|---|
| E1 | 0:00-0:05 Opening disclosure | none | voice-over only, background avoid | Minimal title card; presenter can be absent while disclosure appears |
| E2 | 0:05-0:15 "왜 지금 AdMate인가" | `lua_brand_safe_profile_v1_ivory_shirt.png` | still, presenter shot reference | Short appearance only; do not imply actual executive/employee |
| E3 | 0:15-0:45 반복 업무와 판단 분산 | `lua_brand_safe_profile_v1_ivory_shirt.png` | presenter shot reference | Generic studio background only; no internal screens |
| E4 | 0:45-1:05 AdMate 정의 | `lua_master_face_v1.png` | reference | Face consistency check; product definition uses diagram as primary visual |
| E5 | 1:05-1:22 Compass | none | voice-over only | Product card and brief-to-path diagram should lead |
| E6 | 1:22-1:40 Sentinel | none | voice-over only | Use policy/setup checklist cards, not presenter closeup |
| E7 | 1:40-1:57 Lens | none | voice-over only, background avoid | No real capture/UI screenshot |
| E8 | 1:57-2:15 Foresight | none | voice-over only | No performance numbers; no guarantee cue |
| E9 | 2:15-2:55 Agent Core / Openclaw / Hermes | none | voice-over only | Technical diagram only; no internal DB/API/key/log screenshots |
| E10 | 2:55-3:35 운영 loop | none | voice-over only | Loop diagram only; avoid overusing presenter |
| E11 | 3:35-3:55 운영 지식 자산화 | `lua_brand_safe_profile_v1_ivory_shirt.png` | presenter shot reference | Short return to presenter; keep tone calm |
| E12 | 3:55-4:10 반복 업무 절감 | none | voice-over only | Use abstract before/after workflow, no numeric claims |
| E13 | 4:10-4:25 승인/감사 로그/ROI | none | voice-over only | Governance icons only; no actual audit log screenshot |
| E14 | 4:25-4:50 Roadmap | `lua_brand_safe_profile_v1_ivory_shirt.png` | reference, limited presenter shot | Roadmap cards should be main visual |
| E15 | 4:50-5:00 Closing | `lua_smile_v1_soft_window_blouse.png` | still, presenter shot reference | Soft smile allowed; re-show AI presenter disclosure |

## Planner 90s Scene Map

| Scene ID | Script Section | Recommended Asset | Usage Type | Safety Note |
|---:|---|---|---|---|
| P1 | 0:00-0:05 반복 확인 현실 | none | voice-over only | Task stack cards; no internal task board |
| P2 | 0:05-0:08 반복 label 정렬 | none | voice-over only | Dummy labels only |
| P3 | 0:08-0:18 AdMate 한 문장 소개 | `lua_video_01_scene_01_window_closeup.png` | reference, presenter shot | Friendly guide tone; include virtual presenter disclosure nearby |
| P4 | 0:18-0:31 Compass / 정책 확인 출발점 | `lua_brand_safe_profile_v1_ivory_shirt.png` | reference, limited presenter shot | Do not show real campaign brief |
| P5 | 0:31-0:46 Sentinel / 사전 검수, 운영 감지 | none | voice-over only | Product card and checklist visual lead |
| P6 | 0:46-0:58 Lens / 캡처, 증빙 | none | voice-over only, background avoid | No real capture or account UI |
| P7 | 0:58-1:12 Foresight / 예측, 분석 | none | voice-over only | No performance numbers or guaranteed outcome |
| P8 | 1:12-1:24 Agent Core / 판단 축적 | `lua_side_profile_left_v1_window_blouse_alt.png` | reference only, optional side shot | Optional only; check background and identity consistency |
| P9 | 1:24-1:30 Closing | `lua_video_01_scene_04_soft_smile.png` | reference, presenter shot | Soft smile allowed; avoid coworker/testimonial feel |

## Background Avoid Map

| Asset Group | Avoid In | Reason |
|---|---|---|
| Beauty/lipstick scenes | Executive all scenes, Planner official scenes | Product endorsement / beauty ad confusion |
| Mirror selfie scenes | Executive all scenes, Planner all scenes | Private UGC tone, phone reflection, actual-person feel |
| Hannam street fullbody | External/public scenes | Real place/signage risk |
| Lua logo card | All AdMate-branded scenes | Brand mismatch with AdMate |
| Back view scenes | Presenter identity scenes | Weak identity and low brand clarity |

## Usage Type Definitions

- `still`: still frame or static presenter visual candidate.
- `reference`: visual consistency reference only; not a production asset instruction.
- `presenter shot`: a planned presenter appearance, subject to separate production and review.
- `voice-over only`: presenter may narrate but visual should be product card, diagram, or sanitized mock.
- `background avoid`: do not use the source background as-is.

## Final Review Checklist

- [ ] Scene map uses only file names as references and does not stage assets.
- [ ] Executive video uses presenter briefly, mostly in opening/closing and selected transitions.
- [ ] Planner video uses presenter as guide, not as actual colleague or employee.
- [ ] Product scenes prioritize diagrams and product cards over presenter face time.
- [ ] Beauty/lipstick, mirror selfie, street sign, Lua logo card assets are excluded from official scenes.
- [ ] AI-generated virtual presenter disclosure appears in both executive and planner videos.
- [ ] No real internal screen, campaign, advertiser, account, or performance data appears.
