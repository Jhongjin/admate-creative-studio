# Caption Disclosure Guide v1

작성일: 2026-05-07
정렬일: 2026-05-09
Gate: Creative-Studio-8
상태: caption and disclosure guideline aligned with narration scripts, no asset generation
용도: executive 5min / planner 90s 영상의 가상 presenter 고지, dummy data 고지, caption tone 기준

## Boundary

- 이 문서는 caption과 disclosure 문구 기준이며 영상, 이미지, 음성 asset을 생성하지 않는다.
- 외부 영상 생성 서비스, AI API, TTS, lip-sync, image-to-video 호출을 하지 않는다.
- 실제 광고주명, 캠페인명, 계정 정보, 성과 수치, 내부 화면 정보를 caption에 넣지 않는다.
- `AI Influencer/` PNG는 파일명 reference로만 다루며 열람, 수정, 이동, 삭제, 업로드, stage, commit하지 않는다.
- Canonical scene ID는 executive `E1`-`E15`, planner `P1`-`P9`만 사용한다.

## Required Disclosure Messages

필수 guard는 presenter, mock, performance, human approval 네 범주로 관리한다.

### Virtual Presenter

내부 임원 보고용:

`본 영상의 presenter는 생성형 AI로 제작한 가상 캐릭터이며 실제 임직원이 아닙니다.`

미디어플래너 교육/소개용:

`본 콘텐츠의 presenter는 생성형 AI로 제작한 가상 캐릭터입니다. 실제 인물 또는 임직원을 나타내지 않습니다.`

짧은 caption:

`AI-generated virtual presenter`

### Dummy Visual And Data

기본 고지:

`화면 예시는 비식별 mock visual입니다.`

데이터 고지:

`실제 광고주, 캠페인, 계정, 성과 데이터가 아닙니다.`

짧은 caption:

`Sanitized mock visual`

### No Performance Promise

기본 고지:

`예측은 성과 약속이 아니라 다음 판단을 위한 가설입니다.`

짧은 caption:

`Hypothesis, not guarantee`

### Human Approval

기본 고지:

`최종 판단과 승인은 사람이 수행합니다.`

짧은 caption:

`Human approval remains required`

## Guard Requirements

| Guard | Applies To | Required Protection |
|---|---|---|
| Presenter guard | `E1`-`E3`, `E11`, `E14`-`E15`, `P3`-`P4`, `P9` | 가상 presenter 고지를 시작 5초 이내 또는 종료 credit에 표시하고, 실제 임직원/동료/고객처럼 보이는 역할을 만들지 않는다. |
| Mock guard | UI-like diagram, product card, proof tile, source/checklist mock | 실제 내부 화면, 광고주, 캠페인, 계정, 성과 데이터처럼 보이지 않도록 dummy label과 sanitized mock임을 표시한다. |
| Performance guard | `E8`, `E13`, `P7` and any ROI/performance frame | Foresight와 ROI 표현은 성과 약속이 아니라 예측 가설과 분석 관점임을 고지한다. |
| Human approval guard | `E6`, `E9`, `E13`, `P5`, `P8` | Sentinel, Agent Core, governance 표현은 최종 판단과 승인이 사람에게 남아 있음을 고지한다. |

## Placement Rules

- Virtual presenter disclosure는 영상 시작 5초 이내 또는 종료 credit에 표시한다.
- Presenter가 처음 크게 등장하는 scene에는 짧은 caption `AI-generated virtual presenter`를 함께 둘 수 있다.
- 외부 공개 또는 짧은 social cutdown은 시작부와 description 양쪽에 고지를 둔다.
- Dummy visual/data 고지는 mock UI 또는 diagram이 실제 화면처럼 보일 위험이 있는 scene에 사용한다.
- No performance promise 고지는 Foresight scene 또는 성과/ROI frame에서 사용한다.
- Human approval 고지는 Sentinel, Agent Core, governance scene에서 사용한다.

## Korean Caption Tone

- 간결하고 보고 가능한 문장으로 쓴다.
- 한 caption은 12-24자 권장, 최대 2줄을 넘기지 않는다.
- 한 화면에는 핵심 caption 1개만 둔다.
- 제품명은 영어 원문을 유지한다: `Compass`, `Sentinel`, `Lens`, `Foresight`, `Agent Core`.
- 실제 사례처럼 들리는 1인칭 표현을 쓰지 않는다.
- 과장형, 후기형, influencer tone을 피한다.

## Approved Caption Bank

### Platform

- `AI Agent 기반 광고 운영`
- `기획부터 학습까지 연결`
- `반복 업무는 줄이고`
- `판단 근거는 남기고`

### Compass

- `Compass: 근거 확인 출발점`
- `정책/가이드 근거 확인`
- `브리프 조건 정리`

### Sentinel

- `Sentinel: 세팅 검수`
- `운영 이상 신호 확인`
- `승인 기준을 앞단에`

### Lens

- `Lens: 증빙 흐름 정리`
- `캡처에 맥락을 더함`
- `비식별 기준으로 기록`

### Foresight

- `Foresight: 예측 가설`
- `성과 약속이 아닌 가설`
- `다음 판단을 위한 관점`

### Agent Core

- `Agent Core: 실행과 기억`
- `권한과 감사 로그 기반`
- `판단이 다음 기준으로`

### Closing

- `Planner judgment stays central`
- `전략과 판단에 더 집중`
- `최종 판단은 사람이`

## Prohibited Caption Patterns

- `완전 자동 운영`
- `성과를 보장합니다`
- `AI가 승인 없이 집행`
- `실제 내부 화면`
- `실제 광고주 데이터`
- `실제 임직원이 설명`
- `제가 실제 캠페인을 운영해보니`
- `모든 사고를 막습니다`

## Scene-level Disclosure Matrix

| Scene Type | Required Caption | Optional Caption |
|---|---|---|
| Opening title | Virtual presenter disclosure | `AI-generated virtual presenter` |
| Product cards | Product approved caption | `Sanitized mock visual` |
| Compass source mock | Dummy visual/data disclosure if UI-like | `정책/가이드 근거 확인` |
| Sentinel checklist/signal | Human approval caption | `운영 이상 신호 확인` |
| Lens proof tile | Dummy visual/data disclosure | `비식별 기준으로 기록` |
| Foresight trend/hypothesis | No performance promise caption | `Hypothesis, not guarantee` |
| Agent Core diagram | Human approval or governance caption | `권한과 감사 로그 기반` |
| Closing | Virtual presenter disclosure if not shown at opening | `Planner judgment stays central` |

## Review Checklist

- [ ] 가상 presenter 고지가 시작 또는 종료에 있다.
- [ ] Mock visual/data 고지가 실제 화면처럼 보이는 scene에 있다.
- [ ] Foresight와 ROI 관련 scene에 성과 약속 아님 기준이 있다.
- [ ] Sentinel과 Agent Core scene에 사람 승인 기준이 있다.
- [ ] Caption이 실제 광고주, 캠페인, 계정, 성과 수치를 포함하지 않는다.
- [ ] Caption이 실제 직원, 고객, 광고주 담당자처럼 보이는 역할을 만들지 않는다.
- [ ] Caption과 subtitles가 서로 겹치거나 얼굴/핵심 diagram을 가리지 않는다.
