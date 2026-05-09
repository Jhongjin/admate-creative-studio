# Scene-level Dummy Visual Spec v1

작성일: 2026-05-07
정렬일: 2026-05-09
Gate: Creative-Studio-8
상태: production input spec, no asset generation
용도: executive 5min / planner 90s 영상의 scene별 mock visual 입력 기준

## Boundary

- 이 문서는 mock visual 입력 기준이며 이미지, 영상, 음성 asset 생성 지시서가 아니다.
- 외부 영상 생성 서비스, AI API, TTS, lip-sync, image-to-video 호출을 하지 않는다.
- 실제 Slack, Supabase, Vercel, 내부 dashboard, DB/API/log, 광고주/캠페인/계정 화면을 사용하지 않는다.
- 실제 광고주명, 캠페인명, 계정 ID, 성과 수치, 예산, 계약 조건, 개인 정보, 내부 URL을 사용하지 않는다.
- `AI Influencer/` PNG는 파일명 reference로만 다루며 열람, 수정, 이동, 삭제, 업로드, stage, commit하지 않는다.
- Canonical scene ID는 executive `E1`-`E15`, planner `P1`-`P9`만 사용한다.

## Global Visual Rules

- Primary frame ratio: 16:9 landscape.
- Optional social cutdown ratio: 9:16 vertical, 별도 승인 전에는 제작하지 않는다.
- 한 frame에는 핵심 caption 1개와 dummy label 3-5개 이하만 둔다.
- 상세 table처럼 보이는 UI도 실제 dashboard가 아니라 abstract card로 표현한다.
- 숫자는 scene에 꼭 필요한 경우에만 mock임을 알 수 있는 placeholder로 쓴다.
- Mock 숫자는 non-performance UI placeholder에만 허용한다. Foresight, ROI, savings, budget, performance frame에서는 별도 승인 전까지 숫자형 claim을 쓰지 않는다.
- URL은 `example.com`, `admate.ai.kr`, `demo.admate.ai.kr`만 허용한다.
- Presenter가 등장하는 frame은 `caption-disclosure-guide-v1.md`의 고지 기준을 따른다.

## Product Handoff Standard

| Product | Canonical Role | Do Not Say |
|---|---|---|
| Compass | 정책/가이드 근거 확인의 출발점을 정리한다. | 전략을 자동 확정한다, 캠페인을 대신 기획한다 |
| Sentinel | 세팅 검수와 운영 이상 감지 신호를 정리한다. | 승인 없이 차단/집행한다, 모든 사고를 완전히 막는다 |
| Lens | 캡처와 증빙을 비식별 기준으로 정리한다. | 실제 내부 화면을 그대로 보여준다 |
| Foresight | 다음 판단을 위한 예측 가설과 분석 관점을 제안한다. | 성과를 보장한다 |
| Agent Core | 권한, 승인, 감사 로그, 학습 후보 기준으로 네 Agent를 연결한다. | 사람 승인 없이 학습하고 집행한다 |

## Executive 5min Scene Spec

| Scene | Time | MVP | Visual Type | Allowed On-screen Text | Allowed Dummy Labels | Presenter Rule | Prohibited |
|---:|---:|---|---|---|---|---|---|
| E1 | 0:00-0:05 | MVP-02 | minimal title/disclosure card | `AI-generated virtual presenter` | `AdMate`, `Overview` | presenter absent or tiny still | internal screen, real employee claim |
| E2 | 0:05-0:15 | MVP-03 | title + thin line transition | `Why AdMate, now?` | `Plan`, `Check`, `Learn` | short still allowed | internal logo wall, real meeting screen |
| E3 | 0:15-0:45 | MVP-03 + MVP-09 | task cards becoming knowledge stack | `Repetitive work + scattered judgment` | `Brief`, `Guide`, `Setup`, `Capture`, `Analysis` | brief presenter shot allowed | real team names, actual task board |
| E4 | 0:45-1:05 | MVP-01 | AdMate ecosystem diagram | `AI Agent-based ad operations platform` | `Compass`, `Sentinel`, `Lens`, `Foresight`, `Agent Core` | voice-over only | internal architecture detail |
| E5 | 1:05-1:22 | MVP-02 + MVP-05 | Compass product card + guide source card | `Compass: guide source check` | `Guide Source`, `Allowed`, `Needs Review` | voice-over only | real policy full text, real brief |
| E6 | 1:22-1:40 | MVP-02 + MVP-06 | Sentinel product card + setup/anomaly checklist | `Sentinel: setup + anomaly signal` | `Pass`, `Needs review`, `Missing item`, `Signal` | voice-over only | real alert log, real campaign setting |
| E7 | 1:40-1:57 | MVP-02 + MVP-07 | Lens card + sanitized proof tiles | `Lens: capture with context` | `What was checked`, `Why it matters`, `Demo proof` | voice-over only | screenshot, account ID |
| E8 | 1:57-2:15 | MVP-02 + MVP-08 | Foresight card + hypothesis note | `Foresight: hypothesis, not guarantee` | `Hypothesis`, `Review next`, `Sample trend` | voice-over only | actual performance metric |
| E9 | 2:15-2:55 | MVP-04 | Agent Core diagram | `Agent Core: execution + memory` | `Execution`, `Memory`, `Approval`, `Audit log` | voice-over only | DB schema, API key, token, internal log |
| E10 | 2:55-3:35 | MVP-03 | 7-step lifecycle loop | `Plan -> Check -> Validate -> Monitor -> Capture -> Analyze -> Learn` | `Plan`, `Check`, `Validate`, `Monitor`, `Capture`, `Analyze`, `Learn` | voice-over only | real campaign date/status |
| E11 | 3:35-3:55 | MVP-09 | knowledge card stack | `Operational knowledge becomes an asset` | `Approved message`, `Review criteria`, `Learning candidate` | brief presenter return allowed | private strategy note, customer name |
| E12 | 3:55-4:10 | MVP-03 | before/after abstract workflow | `Less repetition, better judgment` | `Before`, `After`, `Review ready` | voice-over only | actual saved-hour claim |
| E13 | 4:10-4:25 | MVP-04 + MVP-08 | governance row + ROI frame | `Permission + approval + audit log` | `Permission`, `Approval`, `Audit`, `ROI frame` | voice-over only | real audit log, billing data |
| E14 | 4:25-4:50 | MVP-09 + MVP-10 + MVP-11 | roadmap cards | `Library -> Personalization -> Creative Studio` | `Intelligence Library`, `Report format`, `Storyboard pack` | limited transition shot allowed | real owner, real schedule, budget |
| E15 | 4:50-5:00 | MVP-01 | final message card + disclosure | `Planner judgment stays central` | `Virtual presenter`, `No real data` | closing presenter shot allowed | actual employee identity |

## Planner 90s Scene Spec

| Scene | Time | MVP | Visual Type | Allowed On-screen Text | Allowed Dummy Labels | Presenter Rule | Prohibited |
|---:|---:|---|---|---|---|---|---|
| P1 | 0:00-0:05 | MVP-03 | abstract task stack | `Too many repeat checks` | `Policy`, `Setup`, `Capture`, `Analysis` | absent or tiny still | real task board |
| P2 | 0:05-0:08 | MVP-03 | cards align into flow | `Policy / Setup / Capture / Analysis` | `Policy`, `Setup`, `Capture`, `Analysis` | voice-over only | real workflow screenshot |
| P3 | 0:08-0:18 | MVP-01 | AdMate work partner card | `AI work partner for ad operations` | `Guide`, `Review`, `Evidence`, `Learn` | presenter shot allowed | planner replacement cue |
| P4 | 0:18-0:31 | MVP-05 | Compass source check card | `Compass: guide source check` | `Guide Source`, `Needs Review`, `Allowed` | limited presenter shot allowed | real campaign brief, full policy text |
| P5 | 0:31-0:46 | MVP-06 | Sentinel setup/anomaly checklist | `Sentinel: setup + anomaly signal` | `Pass`, `Missing item`, `Signal`, `Reviewer` | voice-over only | real alert log, auto-execution cue |
| P6 | 0:46-0:58 | MVP-07 | sanitized capture proof tile | `Lens: capture with context` | `What was checked`, `Why it matters`, `Demo proof` | voice-over only | real UI capture, account info |
| P7 | 0:58-1:12 | MVP-08 | hypothesis/trend card | `Foresight: hypothesis, not guarantee` | `Hypothesis`, `Next review`, `Sample trend` | voice-over only | real performance number |
| P8 | 1:12-1:24 | MVP-09 | judgment-to-criteria loop | `Judgment becomes next criteria` | `Judgment`, `Criteria`, `Next brief`, `Learning candidate` | voice-over only, optional side reference | auto-training without review |
| P9 | 1:24-1:30 | MVP-01 | final card + disclosure | `More time for strategy and judgment` | `Virtual presenter`, `No real data` | closing presenter shot allowed | coworker/testimonial feel |

## Caption Safe Area

- 16:9 frame: keep captions inside lower 20% but away from presenter face and product card labels.
- 9:16 optional crop: keep captions between lower 18% and 35%, not over face, hands, or key diagram nodes.
- Disclosure text may appear as a small top or bottom caption, but it must remain readable.
- If a scene has both on-screen copy and subtitle, subtitle takes the lower line and on-screen copy stays inside the main visual card.

## Final Input Checklist

- [ ] Scene ID matches the shotlist.
- [ ] MVP ID is listed in this spec.
- [ ] On-screen text is from the allowed list or approved message library.
- [ ] Dummy labels are limited and do not resemble real dashboard data.
- [ ] No real Slack/Supabase/Vercel/dashboard/DB/API/log screen appears.
- [ ] No real advertiser, campaign, account, performance, budget, contract, personal data appears.
- [ ] Presenter use matches `presenter-scene-asset-map-v1.md`.
- [ ] Asset output, if later generated under an approved gate, is not staged or committed.
