# AdMate Creative Studio Agent PRD v1

작성일: 2026-05-06
상태: 초기 문서 세팅
범위: 전략/문서/스토리보드 중심, 구현 제외

## 1. 목적

AdMate Creative Studio Agent는 AdMate의 제품 가치, 광고 운영 메시지, 사례형 설명을 영상과 발표 자료로 빠르게 구조화하는 내부 creative planning assistant다. 이 repo의 첫 단계 목표는 영상 생성 자체가 아니라, 안전한 presenter 기준과 스토리보드, 스크립트, 샷리스트, 제작 체크리스트, 제품 설명 구조, asset 사용 정책을 정리하는 것이다.

## 2. 대상 시청자

### 임원 보고용 5분 영상

- 목적: AdMate Creative Studio Agent의 전략적 가치, 리스크 관리 방식, 내부 활용 가능성을 빠르게 판단하게 한다.
- 톤: 차분함, 근거 중심, 경영진 보고형.
- 메시지: 생산성 향상보다 "일관된 브랜드 설명, 안전한 제작 통제, 반복 가능한 영상 커뮤니케이션 체계"를 강조한다.

### 미디어플래너용 1-2분 소개 영상

- 목적: 플래너가 자신의 업무 흐름 안에서 어디에 쓸 수 있는지 즉시 이해하게 한다.
- 톤: 실무적, 빠른 예시 중심, 친근하지만 과장 없는 톤.
- 메시지: 브리프 정리, 메시지 각도 탐색, 보고용 스크립트 초안, 비식별 creative mock 설명을 강조한다.

## 3. 핵심 문제

- AdMate 제품 설명이 상황별로 달라져 메시지 일관성이 흔들릴 수 있다.
- 캠페인/광고주/내부 화면을 그대로 쓰면 보안 리스크가 커진다.
- AI presenter asset을 사용할 경우 실제 임직원 또는 실제 인물처럼 오인될 수 있다.
- URL-to-video 도구는 빠르지만 page scraping, 저작권, 브랜드 통제, 개인정보 노출 리스크가 있다.
- 임원용 영상과 플래너용 영상은 길이와 톤이 달라 하나의 스토리보드로 해결하기 어렵다.

## 4. 제품 방향

AdMate Creative Studio Agent는 다음 4개 역할로 정의한다.

1. Message Architect: AdMate의 제품별 설명 구조와 audience별 톤을 정리한다.
2. Storyboard Planner: 임원 보고용과 플래너 소개용 영상 흐름을 분리 설계한다.
3. Presenter Safety Reviewer: AI presenter의 사용 가능 범위, 고지 방식, 일관성 기준을 점검한다.
4. Asset Librarian: `AI Influencer/` asset을 변경하지 않고 inventory와 사용 리스크를 관리한다.

## 5. 사용자 작업 흐름

1. 사용자가 audience, 목적, 영상 길이를 지정한다.
2. Agent가 메시지 hierarchy를 제안한다.
3. Agent가 보안상 사용할 수 없는 정보와 대체 표현을 표시한다.
4. Agent가 storyboard, scene note, script beat를 작성한다.
5. Agent가 AI presenter 사용 기준과 "가상 presenter" 고지 문구를 붙인다.
6. 최종 제작 전 사람이 브랜드/법무/보안 checklist를 확인한다.

## 6. 콘텐츠 구조

### AdMate 브랜드 메시지

- 한 줄 메시지: AdMate는 광고 운영 아이디어를 안전하고 일관된 creative narrative로 바꾸는 업무형 AI studio다.
- 보조 메시지: 내부 데이터를 노출하지 않고도, 제품 가치와 캠페인 논리를 audience별 영상/발표 구조로 정리한다.
- 금지 메시지: 자동으로 최종 광고 소재를 보장한다, 성과를 예측한다, 내부 화면을 그대로 영상화한다, 실제 인물이 말하는 것처럼 만든다.

### 4개 product pillar

아직 공식 제품명이 확정되지 않았으므로, 초기 문서에서는 다음 4개 product pillar로 설명한다. 실제 제품명과 순서는 approved message library 작성 시 교체한다.

| Pillar | 임원 보고 메시지 | 플래너 소개 메시지 |
|---|---|---|
| Policy Check | 광고/브랜드 정책 리스크를 제작 전 단계에서 줄인다. | 정책 확인과 금지 표현 점검 시간을 줄인다. |
| Review & QA | 검수 기준을 반복 가능한 운영 체계로 만든다. | 소재/문구/화면 검수 checklist를 빠르게 만든다. |
| Capture & Evidence | 산출물과 판단 근거를 남겨 보고 가능성을 높인다. | 캡처, 변경사항, 검수 메모를 누락 없이 정리한다. |
| Forecast & Learning Loop | 성과 가설과 학습 루프를 연결해 다음 실행으로 이어간다. | 예측, 회고, 다음 액션을 같은 흐름 안에서 본다. |

### Agent Core

Agent Core는 네 product pillar를 하나의 제작 흐름으로 묶는 중심 계층이다.

- Brief Intake: 캠페인 목적, audience, 채널, 제약을 정리한다.
- Message Mapping: 제품/서비스 장점, 고객 pain point, proof point를 계층화한다.
- Storyboard Builder: 임원용/실무자용 영상 흐름을 자동 구조화한다.
- Shotlist & Production Checklist: scene별 화면, 자막, presenter cue, 안전 점검 항목을 관리한다.
- Presenter Layer: 가상 presenter 톤과 고지 문구를 적용한다.
- Safety Review: 내부자료, 초상권, 상표, 오인 가능성을 release 전에 점검한다.

## 7. AI presenter 원칙

- presenter는 가상 캐릭터로만 사용한다.
- 캐릭터가 임직원, 고객, 광고주 담당자, 실제 인플루언서처럼 보이도록 명명하거나 연출하지 않는다.
- 영상 시작 또는 종료, description, 내부 검수 문서에 "가상 presenter" 고지를 남긴다.
- `AI Influencer/` 이미지는 reference 후보이며 최종 모델 학습, API 업로드, 외부 배포에는 별도 승인이 필요하다.
- persona 이름 "Lua"는 asset 실험명으로 취급한다. AdMate 공식 캐릭터명으로 쓰려면 브랜드 승인 절차가 필요하다.

## 8. 보안/컴플라이언스 요구사항

- 내부 dashboard, 계정 정보, 캠페인명, 광고주명, 실적 숫자, 예산, 계약 조건은 영상에 사용하지 않는다.
- 사무실 배경 합성 시 실제 내부 공간, 직원 얼굴, 회의실 화면, 화이트보드, 출입증, 좌석표, 파일명이 보이지 않아야 한다.
- URL-to-video 입력 URL은 공개 페이지 또는 승인된 dummy page만 허용한다.
- AI 영상 도구에 민감한 script, 내부 자료, 고객 자료를 입력하지 않는다.
- 외부 공개물은 브랜드, 법무, 보안 review를 모두 통과해야 한다.

## 9. 성공 기준

- 임원용 5분 영상과 플래너용 90초 영상의 목적/톤/구성이 명확히 분리된다.
- AI presenter asset inventory가 파일 변경 없이 완성된다.
- 모든 영상 문서가 "실제 인물 아님" 고지 기준을 포함한다.
- URL-to-video 도구의 용도가 초안/무드보드인지 최종 후보인지 분명히 구분된다.
- secret scan 또는 이에 준하는 민감 정보 검색을 통과한다.

## 10. 다음 단계 후보

- AdMate 제품별 approved message library 작성
- dummy campaign dataset과 sanitized UI mock 기준 정의
- presenter voice/tone script guide 작성
- 영상 제작 도구 PoC checklist 작성, API 연동 없이 수동 테스트만 허용
