# Executive 5min Scene Shotlist v1

작성일: 2026-05-07
상태: Gate Creative-Studio-7 aligned
용도: 임원 보고용 5분 영상의 scene outline, visual cue, presenter cue, safety cue

## Production Boundary

- 이 문서는 제작 전 shotlist이며 영상 생성 지시서가 아니다.
- 외부 영상 생성 서비스, AI API, TTS, lip-sync, image-to-video 호출을 하지 않는다.
- 실제 내부 화면, 실제 캠페인명, 실제 광고주명, 계정 정보, 성과 수치, 민감 데이터는 사용하지 않는다.
- `AI Influencer/` PNG asset은 read-only reference이며 commit/stage 대상이 아니다.
- Presenter는 실제 인물이 아니라 가상 캐릭터로만 설정한다.

## Presenter Direction

- 권장 reference: `lua_brand_safe_profile_v1_ivory_shirt.png`
- 보조 reference: `lua_master_face_v1.png`, `lua_smile_v1_soft_window_blouse.png`
- 의상: ivory shirt/blouse 중심
- 배경: generic studio, abstract office, 비식별 mock background
- 표정: neutral confidence, closing에서만 soft smile
- 등장 범위: opening, problem transition, knowledge asset transition, roadmap transition, closing으로 제한
- product/Core 설명 장면: presenter 얼굴보다 product card, diagram, sanitized mock 중심
- 금지: mirror selfie, lipstick/beauty product, 실제 거리 표지, 내부 사무실 화면

## Scene Shotlist

| Scene | 시간 | Narration Beat | Visual Cue | Presenter Cue | On-screen Copy | Safety Cue |
|---:|---:|---|---|---|---|---|
| 1 | 0:00-0:05 | 가상 presenter 고지 | Minimal title card, AdMate Creative Studio Agent | Presenter 미등장 또는 small profile still | `AI-generated virtual presenter` | 시작 5초 내 고지 |
| 2 | 0:05-0:15 | "왜 지금 AdMate인가" 질문 | Dark-on-light title, thin line animation | 정면 closeup 전환 준비 | `Why AdMate, now?` | 실제 회사 로고 외 내부자료 없음 |
| 3 | 0:15-0:45 | 반복 업무와 판단 분산 문제 | Abstract operation cards: brief, policy, review, capture, analysis | 차분한 정면 eye contact | `Repetitive work + scattered judgment` | dummy text만 사용 |
| 4 | 0:45-1:05 | AdMate 정의 | Platform map: AI Agent-based ad operations | Voice-over 중심, face consistency reference only | `AI Agent-based ad operations platform` | 완전 자동 운영 표현 금지 |
| 5 | 1:05-1:22 | Compass: 정책/가이드 근거 확인 | Compass card, guide source path, policy source mock | Voice-over only | `Compass: guide source check` | 실제 캠페인 brief, 실제 정책 전문 금지 |
| 6 | 1:22-1:40 | Sentinel: 세팅 검수와 운영 이상 감지 | Sentinel card, setup validation checklist, anomaly signal icon | Voice-over only | `Sentinel: setup + anomaly signal` | 세팅 사고 "완전 방지", 승인 없는 차단/집행 표현 금지 |
| 7 | 1:40-1:57 | Lens 소개 | Lens card, sanitized capture/evidence tiles | Voice-over only | `Lens: capture with context` | 실제 UI capture 금지 |
| 8 | 1:57-2:15 | Foresight 소개 | Foresight card, hypothesis and learning loop | Voice-over only | `Foresight: hypothesis, not guarantee` | 성과 보장 표현 금지 |
| 9 | 2:15-2:55 | Agent Core, Openclaw, Hermes | Core diagram: Agent Core center, Openclaw execution, Hermes memory | Voice-over only | `Agent Core: execution + memory` | 내부 아키텍처 세부/키/DB 노출 금지 |
| 10 | 2:55-3:35 | 운영 loop | Horizontal loop: 기획 -> 정책/가이드 근거 확인 -> 세팅 검수 -> 운영 이상 감지 -> 캡처/증빙 -> 성과 분석 -> 학습 | Voice-over only | `Plan -> Check -> Validate -> Monitor -> Capture -> Analyze -> Learn` | 실제 숫자/계정명 없음 |
| 11 | 3:35-3:55 | 운영 지식 자산화 | Knowledge card stack, approved criteria library | 정면 closeup 재등장 | `Operational knowledge becomes an asset` | 실제 노하우/고객명 금지 |
| 12 | 3:55-4:10 | 반복 업무 절감 | Before/after workflow density, no numbers | Voice-over only | `Less repetition, better judgment` | 절감 수치 사용 금지 |
| 13 | 4:10-4:25 | 승인/감사 로그/ROI | Governance row: permission, approval, audit log, ROI frame | Voice-over only | `Permission + approval + audit log` | ISMS/권한은 원칙으로만 표현 |
| 14 | 4:25-4:50 | Roadmap | Three cards: Intelligence Library, Report personalization, Creative Studio | 제한적 presenter transition 가능, roadmap cards가 주 화면 | `Library -> Personalization -> Creative Studio` | 실제 일정/예산/owner 없음 |
| 15 | 4:50-5:00 | Closing | Presenter closeup, soft smile, final title | Soft smile, 짧은 pause | `Planner judgment stays central` | 실제 직원 오인 방지 고지 재표기 |

## Visual System

### Color and Layout

- 차분한 executive tone을 위해 high-contrast neutral background를 사용한다.
- 제품 카드는 Compass, Sentinel, Lens, Foresight를 구분하되 전체는 AdMate tone으로 통일한다.
- 내부 화면처럼 보이는 detailed dashboard는 만들지 않는다.
- 모든 화면 텍스트는 approved sentence bank 또는 dummy label만 사용한다.

### Diagram Rules

- 운영 loop는 7단계로 고정한다.
- Agent Core diagram은 기술 세부 대신 역할 관계만 보여준다.
- Openclaw/Hermes는 내부 엔진으로 작게 표기하고, 별도 제품 title scene을 만들지 않는다.
- Roadmap은 방향성으로만 표시하고 실제 일정, 예산, 실명 owner를 넣지 않는다.

## Presenter Cue Detail

| Cue | 사용 위치 | 기준 |
|---|---|---|
| Neutral eye contact | Scene 2-3, Scene 11 | 신뢰감 중심, 짧게 사용 |
| Limited transition shot | Scene 14 | roadmap cards가 주 화면이고 presenter는 연결 역할만 수행 |
| Voice-only with diagram | Scene 4-10, Scene 12-13 | product/Core 정보량이 많은 구간에서 얼굴 과노출 방지 |
| Soft smile | Closing | 과한 홍보 톤 없이 마무리 |

## Shot Safety Checklist

- [ ] Scene 1 또는 Scene 15에 가상 presenter 고지가 있다.
- [ ] 모든 UI는 abstract card 또는 sanitized mock이다.
- [ ] 실제 내부 dashboard, Slack, DB, API, token, 계정 화면이 없다.
- [ ] 실제 광고주명, 캠페인명, 계정명, 성과 수치가 없다.
- [ ] `AI Influencer/` 원본 PNG를 수정, 삭제, 이동하지 않았다.
- [ ] image/video/audio asset을 git stage하지 않았다.
- [ ] presenter가 실제 직원, 임원, 고객처럼 말하지 않는다.

## Cutdown 후보

### 3분 버전

- Scene 5-8 제품 설명을 각 8초로 줄인다.
- Scene 11-13 회사 경쟁력 설명을 하나의 governance slide로 합친다.

### 60초 teaser

- Opening, AdMate 정의, 4개 제품 카드, Agent Core, Closing만 사용한다.
- Openclaw/Hermes는 언급하지 않고 Agent Core로만 묶는다.

## Review Notes

- 영상 제작 전 script와 shotlist를 함께 검수한다.
- 실제 asset을 사용할 경우 `presenter-usage-boundary-v1.md`와 `video-production-safety-checklist-v1.md`를 재확인한다.
- 외부 공개 전 브랜드, 법무, 보안 review를 거친다.
