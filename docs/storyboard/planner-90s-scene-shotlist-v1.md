# Planner 90s Scene Shotlist v1

작성일: 2026-05-07
상태: Gate Creative-Studio-7 aligned
용도: 미디어플래너 대상 90초 소개 영상의 scene outline, visual cue, presenter cue, safety cue

## Production Boundary

- 이 문서는 제작 전 shotlist이며 영상 생성 지시서가 아니다.
- 외부 영상 생성 서비스, AI API, TTS, lip-sync, image-to-video 호출을 하지 않는다.
- 실제 내부 화면, 실제 캠페인명, 실제 광고주명, 계정 정보, 성과 수치, 민감 데이터는 사용하지 않는다.
- `AI Influencer/` PNG asset은 read-only reference이며 commit/stage 대상이 아니다.
- Presenter는 실제 인물이 아니라 가상 캐릭터로만 설정한다.

## Tone Direction

- 임원 보고보다 쉽고 실무적이다.
- 친근하지만 가볍지 않다.
- "일이 사라진다"가 아니라 "반복 확인이 줄고 판단 시간이 늘어난다"를 말한다.
- 과장 없이 구체적인 workflow 중심으로 보여준다.

## Scene Shotlist

| Scene | Approx. Duration | Narration | Visual Direction | Presenter Cue | On-screen Text | Safety Cue |
|---:|---:|---|---|---|---|---|
| 1 | 0:00-0:05 | 캠페인 운영에서 반복 확인이 쌓이는 현실 제시 | Abstract task stack: policy, setup, capture, analysis | Presenter는 미등장 또는 small profile | `Too many repeat checks` | 실제 업무 화면 금지 |
| 2 | 0:05-0:08 | 정책, 세팅, 캡처, 결과 정리의 반복 언급 | Task cards가 빠르게 쌓이다가 정렬됨 | Voice only | `Policy / Setup / Capture / Analysis` | dummy label만 사용 |
| 3 | 0:08-0:18 | AdMate 한 문장 소개 | AdMate card가 task stack을 하나의 flow로 정리 | 정면 closeup, calm guide tone | `AI work partner for ad operations` | 플래너 대체 표현 금지 |
| 4 | 0:18-0:31 | Compass가 정책/가이드 근거 확인의 출발점을 정리 | Compass card, brief 조건에서 guide source card로 연결 | 제한적 guide shot 가능, product card가 주 화면 | `Compass: guide source check` | 실제 campaign brief, 실제 정책 전문 금지 |
| 5 | 0:31-0:46 | Sentinel이 세팅 검수와 운영 이상 감지 지원 | Sentinel card, setup validation list와 anomaly signal icon | Voice-over only | `Sentinel: setup + anomaly signal` | 승인 없는 차단/집행 표현 금지 |
| 6 | 0:46-0:58 | Lens가 캡처와 증빙을 보고 가능한 흐름으로 정리 | Sanitized capture tiles, evidence note card | Voice-over only | `Lens: capture with context` | 실제 내부 화면/계정 정보 금지 |
| 7 | 0:58-1:12 | Foresight가 예측/분석 가설 지원 | Foresight card, trend line without numbers, hypothesis note | 차분한 설명, 과장 금지 | `Foresight: hypothesis, not guarantee` | 성과 보장/실제 수치 금지 |
| 8 | 1:12-1:24 | Agent Core가 판단을 다음 기준으로 축적 | Learning loop: judgment -> criteria -> next brief | Voice-over only, optional side reference only | `Judgment becomes next criteria` | 사람 승인 없는 학습 표현 금지 |
| 9 | 1:24-1:30 | 반복 확인은 줄이고 전략과 판단에 집중 | Presenter closeup, soft smile, final title | Soft smile, 짧은 pause | `More time for strategy and judgment` | 가상 presenter 고지 재확인 |

## Scene Detail

### Scene 1-2: Opening

- Visual은 실제 dashboard가 아니라 단순한 card stack으로 구성한다.
- Task label은 `Policy`, `Setup`, `Capture`, `Analysis` 정도로만 표시한다.
- 소리/모션이 있다면 alert 과잉 느낌보다 차분한 정렬감으로 처리한다.

### Scene 3: AdMate 한 문장 소개

- Presenter가 처음 등장한다.
- 말투는 "선배 플래너의 경험담"이 아니라 가상 guide의 안내형이어야 한다.
- On-screen text는 짧게 유지하고, narration에서 플랫폼 정의를 말한다.

### Scene 4: Compass

- Compass는 브리프와 운영 조건에서 정책/가이드 근거 확인의 출발점을 잡는 역할로 표현한다.
- Compass가 전략을 자동 확정하거나 캠페인을 대신 기획한다고 말하지 않는다.

### Scene 5: Sentinel

- Sentinel은 세팅 검수와 운영 이상 감지의 연결을 보여준다.
- "모든 사고를 막는다"가 아니라 "미리 확인할 신호를 정리한다"로 말한다.
- 최종 판단과 승인은 사람이 한다는 cue를 narration 또는 safety note에 남긴다.

### Scene 6: Lens

- 캡처/증빙은 실제 내부 화면 대신 sanitized capture tile로 표현한다.
- `What was checked`, `Why it matters` 같은 dummy note를 사용할 수 있다.
- 계정 ID, 광고주명, 캠페인명, 성과 수치는 금지한다.

### Scene 7: Foresight

- 숫자 없는 trend shape 또는 hypothesis card를 사용한다.
- 예측은 성과 보장이 아니라 다음 액션을 위한 분석 관점으로 표현한다.
- 실제 report screenshot은 사용하지 않는다.

### Scene 8: Agent Core

- 운영자 판단이 다음 기준으로 쌓이는 구조를 loop로 보여준다.
- 학습은 자동/무제한이 아니라 검토 가능한 후보로 표현한다.
- 권한과 승인 기준을 전제로 한다.

### Scene 9: Closing

- Presenter는 soft smile 정도로만 마무리한다.
- "AdMate가 대신합니다"가 아니라 "AdMate가 준비를 돕습니다"로 끝낸다.
- 짧은 가상 presenter 고지를 다시 넣을 수 있다.

## Presenter Cue Detail

| Cue | 사용 위치 | 기준 |
|---|---|---|
| Friendly neutral | Scene 3 | 친근하지만 influencer tone 금지 |
| Practical guide | Scene 4 | Compass handoff를 짧게 안내하고 product card가 주 화면 |
| Voice-only product guide | Scene 5-8 | Sentinel, Lens, Foresight, Agent Core 정보가 주 화면 |
| Calm caution | Scene 5, 7, 8 | 승인, 가설, 학습 경계 강조 |
| Soft close | Scene 9 | 과장 없는 마무리 |

## Safety Checklist

- [ ] `AI Influencer/` 원본 PNG를 수정, 삭제, 이동하지 않았다.
- [ ] image/video/audio asset을 git stage하지 않았다.
- [ ] 실제 내부 화면, 계정 정보, 광고주명, 캠페인명이 없다.
- [ ] 성과 보장, 완전 자동 운영, 사람 승인 없는 집행 표현이 없다.
- [ ] Presenter가 실제 임직원이나 실제 플래너처럼 말하지 않는다.
- [ ] 영상 시작 또는 종료에 가상 presenter 고지가 있다.

## Cutdown 후보

### 60초 버전

- Scene 1-2를 5초로 합친다.
- Compass/Sentinel/Lens/Foresight를 각 8초로 줄인다.
- Agent Core와 Closing을 10초로 합친다.

### 30초 teaser

- Opening, AdMate 정의, Sentinel/Lens/Foresight quick cards, Closing만 사용한다.
- 세부 제품 설명보다 "반복 확인이 줄고 판단 시간이 늘어난다"를 강조한다.
