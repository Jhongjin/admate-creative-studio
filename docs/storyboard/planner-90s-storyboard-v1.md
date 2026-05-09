# Planner 90s Storyboard v1

작성일: 2026-05-06
정렬일: 2026-05-09
상태: Gate Creative-Studio-8 aligned
목적: 미디어플래너가 AdMate를 반복 확인을 줄이고 판단 시간을 늘려주는 AI 업무 파트너로 이해하게 한다.

## 기준 문서

이 문서는 다음 최신 제작 기준과 정렬한다.

- `docs/scripts/planner-90s-video-script-v1.md`
- `docs/storyboard/planner-90s-scene-shotlist-v1.md`
- `docs/storyboard/presenter-scene-asset-map-v1.md`
- `docs/production/mock-visual-pack-plan-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/caption-disclosure-guide-v1.md`

## 톤

- 실무적이고 빠르지만 과장하지 않는다.
- "일이 사라진다"가 아니라 "반복 확인이 줄고 판단 시간이 늘어난다"를 중심에 둔다.
- 예시는 모두 dummy label, abstract card, sanitized mock으로 구성한다.
- Presenter는 실제 동료, 선배 플래너, 임직원이 아니라 가상 guide다.

## Canonical Scene ID 범위

- Planner 90초 영상은 `P1`-`P9`를 canonical scene ID로 사용한다.
- Scene ID, 시간, presenter rule은 `presenter-scene-asset-map-v1.md`와 `scene-level-dummy-visual-spec-v1.md`의 `P1`-`P9` 행과 일치해야 한다.

## 핵심 메시지

AdMate는 미디어플래너를 대체하지 않는다. Compass는 정책/가이드 근거 확인의 출발점을 정리하고, Sentinel은 세팅 검수와 운영 이상 감지 신호를 정리한다. Lens는 캡처와 증빙을 비식별 기준으로 정리하고, Foresight는 성과를 약속하지 않고 다음 판단을 위한 예측 가설과 분석 관점을 제안한다. Agent Core는 운영자의 판단이 다음 기준으로 돌아오도록 연결한다.

## Scene Plan

| Scene | 시간 | 화면 | 메시지 | Presenter | 안전 메모 |
|---:|---:|---|---|---|---|
| P1 | 0:00-0:05 | Abstract task stack | 반복 확인이 쌓이는 현실 | 미등장 또는 small profile | 실제 업무 화면 금지 |
| P2 | 0:05-0:08 | Task cards align into flow | 정책, 세팅, 캡처, 결과 정리의 반복 | voice-over only | dummy label only |
| P3 | 0:08-0:18 | AdMate work partner card | 반복 확인을 줄이고 판단에 집중하게 돕는다 | friendly guide shot | 플래너 대체 표현 금지 |
| P4 | 0:18-0:31 | Compass card + policy/guide source mock | Compass는 정책/가이드 근거 확인의 출발점을 정리한다 | limited presenter shot 가능 | 실제 campaign brief 금지 |
| P5 | 0:31-0:46 | Sentinel card + setup validation/anomaly signal | Sentinel은 세팅 검수와 운영 이상 감지 신호를 정리한다 | voice-over only | 승인 없는 차단/집행 표현 금지 |
| P6 | 0:46-0:58 | Sanitized capture proof tiles | Lens는 캡처와 증빙을 비식별 기준으로 정리한다 | voice-over only | 실제 내부 화면/계정 정보 금지 |
| P7 | 0:58-1:12 | Foresight hypothesis card | Foresight는 예측 가설과 분석 관점을 제안한다 | voice-over only | 성과 보장/실제 수치 금지 |
| P8 | 1:12-1:24 | Judgment-to-criteria loop | Agent Core는 판단이 다음 기준으로 쌓이게 한다 | voice-over only, optional side reference | 사람 승인 없는 학습 표현 금지 |
| P9 | 1:24-1:30 | Presenter closeup + final title | 반복 확인은 줄이고 전략과 판단에 집중 | closing soft smile | 가상 presenter 고지 재확인 |

## Presenter Direction

- Primary reference: `lua_brand_safe_profile_v1_ivory_shirt.png`
- Intro reference: `lua_video_01_scene_01_window_closeup.png`
- Closing reference: `lua_video_01_scene_04_soft_smile.png`
- Optional side reference: `lua_side_profile_left_v1_window_blouse_alt.png`
- Presenter는 P3, P4, P9에만 제한적으로 사용한다. P8의 side reference는 선택 사항이며 장면의 주 화면은 loop diagram이다.
- P5-P8 product/Core 설명은 product card, checklist, proof tile, hypothesis card, loop diagram이 주 화면이다.
- 금지: 실제 동료/선배처럼 말하는 1인칭 경험담, mirror selfie, lipstick/beauty scene, 실제 내부 화면 합성.

## Script Direction

### Opening

캠페인 운영에서 가장 피곤한 순간은 큰 판단보다 반복 확인이 쌓일 때다. AdMate는 이런 반복 확인을 줄이고, 플래너가 더 중요한 판단에 집중하게 돕는 AI Agent 기반 광고 운영 플랫폼이다.

### Product Flow

Compass는 정책/가이드 근거 확인의 출발점을 정리한다. Sentinel은 세팅 검수와 운영 이상 감지 신호를 정리한다. Lens는 캡처와 증빙을 비식별 기준으로 정리한다. Foresight는 성과를 약속하지 않고 다음 판단을 위한 예측 가설과 분석 관점을 제안한다.

### Agent Core And Closing

Agent Core는 이 흐름을 하나로 연결한다. 플래너가 내린 판단은 한 번 쓰고 사라지는 메모가 아니라 다음 브리프와 검수 기준으로 돌아오는 학습 후보가 된다. AdMate는 플래너를 대체하지 않고, 판단에 필요한 기준과 근거를 더 빠르게 준비하는 업무 파트너다.

## On-screen Copy 후보

- `Too many repeat checks`
- `AI work partner`
- `Compass: guide source check`
- `Sentinel: setup + anomaly signal`
- `Lens: capture with context`
- `Foresight: hypothesis, not guarantee`
- `Judgment becomes criteria`
- `More time for strategy and judgment`

## 필수 고지

`본 콘텐츠의 presenter는 생성형 AI로 제작한 가상 캐릭터입니다. 실제 인물 또는 임직원을 나타내지 않습니다.`

## 길이 변형

- 60초 버전: P1-P2를 합치고 Compass/Sentinel/Lens/Foresight를 각 8초로 줄인다.
- 90초 버전: planner workflow, product handoff, safety cue를 균형 있게 포함한다.
- 120초 버전: 각 product card에 dummy checklist와 example caption을 1개씩 추가한다.

## 금지 요소

- 실제 광고주명, 캠페인명, 계정 정보, 성과 수치
- 실제 내부 dashboard, Slack, DB/API/log 화면
- 플래너 대체, 완전 자동 운영, 성과 보장 표현
- 사람 승인 없는 학습/집행 표현
- 실제 직원, 실제 플래너, 실제 고객처럼 보이는 presenter 설정
