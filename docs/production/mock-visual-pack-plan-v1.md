# Mock Visual Pack Plan v1

작성일: 2026-05-07
상태: Gate Creative-Studio-5 draft
용도: 실제 내부 데이터 노출 없이 executive 5min / planner 90s 영상에 사용할 mock visual 유형 정의

## Production Boundary

- 이 문서는 mock visual 제작 기준이며 이미지/영상/음성 asset 생성 지시서가 아니다.
- 실제 Slack, Supabase, Vercel, 내부 DB/API/log, 광고주/캠페인/계정 화면을 사용하지 않는다.
- 실제 성과 수치, 계정 ID, 내부 URL, API key, token, 개인 정보, 광고주명을 사용하지 않는다.
- 모든 화면은 abstract card, diagram, dummy table, sanitized mock으로만 구성한다.
- `AI Influencer/` PNG와 기타 이미지/영상/음성 asset은 stage 또는 commit 대상에 포함하지 않는다.

## Safe Dummy Data Standard

| 항목 | 허용 값 | 금지 |
|---|---|---|
| 광고주명 | `Sample Brand`, `Demo Client` | 실제 광고주명, 실제 브랜드명 |
| 캠페인명 | `Demo Campaign`, `Sample Launch` | 실제 캠페인명, 내부 프로젝트명 |
| 계정 ID | 표시하지 않음 | 실제 account id, platform id, ad account |
| 수치 | rounded/mock only: `~20%`, `1.2x`, `Sample score 82` | 실제 ROAS, CPM, CPC, 매출, 예산 |
| 날짜 | 예시 날짜: `2026-05-01`, `Q2 sample` | 실제 campaign 기간, 계약 기간 |
| URL | `example.com`, `admate.ai.kr`, `demo.admate.ai.kr` | 실제 내부 URL, private dashboard URL |
| 사용자명 | `Planner A`, `Reviewer`, `Owner` | 실제 임직원명, 고객명 |

## Mock Visual Pack Types

| Pack ID | Visual Type | 목적 | 허용 구성 | 금지 구성 |
|---|---|---|---|---|
| MVP-01 | AdMate ecosystem diagram | AdMate 전체 구조 설명 | Compass, Sentinel, Lens, Foresight, Agent Core card | 실제 시스템 URL, DB table, internal architecture detail |
| MVP-02 | Product cards | 4개 제품 역할 설명 | 제품명, one-liner, icon-style card | 실제 product screenshot, 실제 계정 데이터 |
| MVP-03 | Campaign lifecycle loop | 기획부터 학습까지 loop 설명 | `Plan -> Check -> Review -> Monitor -> Capture -> Analyze -> Learn` | 실제 campaign status, 실제 일정 |
| MVP-04 | Agent Core diagram | Openclaw/Hermes 역할 설명 | execution, memory, approval, audit log role card | API key, token, DB schema, internal logs |
| MVP-05 | Policy source card mock | 정책 확인 출발점 설명 | `Policy Source`, `Allowed`, `Needs Review`, dummy text | 실제 매체 정책 전문, 고객 계약 조건 |
| MVP-06 | Validation result mock | Sentinel 사전 검수/운영 감지 설명 | `Pass`, `Needs review`, `Missing item`, sample checklist | 실제 오류 로그, 실제 캠페인 설정 |
| MVP-07 | Capture proof mock | Lens 캡처/증빙 설명 | dummy capture tile, `What was checked`, `Why it matters` | 실제 화면 캡처, 계정 ID, 광고주명 |
| MVP-08 | Benchmark/report mock | Foresight 예측/분석 설명 | trend shape, hypothesis note, rounded mock score | 실제 성과 수치, 실제 benchmark source |
| MVP-09 | Intelligence Library knowledge card mock | 운영 지식 자산화 설명 | approved message, review criteria, source status | 실제 내부 노하우, 고객명, 비공개 문서 |
| MVP-10 | Report personalization mock | audience별 보고 구조 설명 | Executive / Planner / Owner output cards | 실제 수신자 이름, 내부 조직도 |
| MVP-11 | Creative Studio storyboard mock | 후속 Creative Studio 설명 | script, storyboard, shotlist card | 실제 생성 영상, 외부 API result |

## Executive 5min Scene Mapping

| Executive Scene | Script Section | Recommended Mock Pack | Visual Direction | Safety Note |
|---:|---|---|---|---|
| E1 | Opening disclosure | MVP-02 minimal title style | AdMate title + virtual presenter disclosure | No internal screen |
| E2 | "왜 지금 AdMate인가" | MVP-03 simplified loop | scattered task cards becoming a loop | Dummy labels only |
| E3 | 반복 업무와 판단 분산 | MVP-03 + MVP-09 | task stack and knowledge card contrast | No real team names |
| E4 | AdMate 정의 | MVP-01 | ecosystem diagram with 4 products and Agent Core | No internal architecture detail |
| E5 | Compass | MVP-02 + MVP-05 | Compass card linked to policy source card | No real brief |
| E6 | Sentinel | MVP-02 + MVP-06 | Sentinel card with validation checklist | No real validation logs |
| E7 | Lens | MVP-02 + MVP-07 | Lens card with sanitized proof tiles | No screenshots |
| E8 | Foresight | MVP-02 + MVP-08 | hypothesis card with no real numbers | No performance guarantee |
| E9 | Agent Core | MVP-04 | Agent Core center, Openclaw execution, Hermes memory | No DB/API/log details |
| E10 | 운영 loop | MVP-03 | 7-step lifecycle loop | No campaign date |
| E11 | 운영 지식 자산화 | MVP-09 | knowledge cards stacking into library | No private docs |
| E12 | 반복 업무 절감 | MVP-03 | before/after abstract workflow density | No actual saved-hour claim |
| E13 | 승인/감사 로그/ROI | MVP-04 + MVP-08 | governance and ROI frame | No real audit log |
| E14 | Roadmap | MVP-09 + MVP-10 + MVP-11 | Intelligence Library, report personalization, Creative Studio cards | No roadmap date/owner |
| E15 | Closing | MVP-01 minimal | final message card | Re-show AI presenter disclosure |

## Planner 90s Scene Mapping

| Planner Scene | Script Section | Recommended Mock Pack | Visual Direction | Safety Note |
|---:|---|---|---|---|
| P1 | 반복 확인 현실 | MVP-03 | task stack cards | No real task board |
| P2 | 반복 label 정렬 | MVP-03 | cards align into flow | Dummy labels only |
| P3 | AdMate 소개 | MVP-01 | AdMate work partner card | No "planner replacement" cue |
| P4 | Compass / 정책 확인 | MVP-05 | policy starting point card | No real policy/legal text |
| P5 | Sentinel / 사전 검수, 운영 감지 | MVP-06 | checklist and signal icon | No real alert logs |
| P6 | Lens / 캡처, 증빙 | MVP-07 | capture proof tile with dummy note | No real UI capture |
| P7 | Foresight / 예측, 분석 | MVP-08 | hypothesis and trend shape | No real performance number |
| P8 | Agent Core / 판단 축적 | MVP-09 | judgment becomes criteria loop | Learning candidate, not auto-training |
| P9 | Closing | MVP-01 minimal | final card and disclosure | Virtual presenter disclosure |

## Actual Screen Prohibition

다음은 모든 Gate에서 사용 금지다.

- 실제 Slack channel, DM, workspace, user profile
- Supabase dashboard, table editor, auth screen, query result
- Vercel dashboard, deployment log, env var screen
- 내부 DB/API/log 화면
- GitHub private issue/PR 내용, token, secret, CI log 중 민감 내용
- 실제 광고주, 캠페인, 계정, creative asset 관리 화면
- 실제 성과 수치, 예산, 계약 조건, invoice, billing
- 실제 임직원명, 고객명, 이메일, 전화번호, 사원증

## Visual Text Rules

- 한 화면에 핵심 문구는 1개만 사용한다.
- 세부 텍스트는 `Sample`, `Demo`, `Placeholder`, `Needs review` 같은 dummy label로 제한한다.
- 숫자는 real metric처럼 보이지 않게 rounded/mock only로 표기한다.
- URL은 `example.com`, `admate.ai.kr`, `demo.admate.ai.kr`만 사용한다.
- 자막과 mock visual text가 서로 충돌하지 않게 한다.

## Follow-up Gate Inputs

다음 Gate로 넘어가기 전 이 문서의 pack ID를 기준으로 요청을 작성한다.

- Mock UI image generation: MVP ID, scene ID, allowed dummy text만 전달한다.
- Storyboard frame generation: scene ID, visual type, safety note를 함께 전달한다.
- Presenter test clip: presenter asset reference, disclosure, background rule을 함께 전달한다.
- Final video assembly: approved script, shotlist, asset map, safety gate pass 여부를 확인한다.
