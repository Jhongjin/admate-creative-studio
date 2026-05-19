# Lua Instagram Launch Pack v1

작성일: 2026-05-19
대상 repo: `D:\Projects\AdMate\admate-creative-studio`
원본 asset folder: `D:\Projects\AdMate\admate-creative-studio\AI Influencer`
캐릭터: `lua` / `루아`, 20대 중후반 한국 여성형 AI virtual creator
상태: Instagram launch production pack, documentation only

## 0. 작업 경계

- 이 문서는 첫 Instagram launch 제작과 게시 준비를 위한 실행 패키지다.
- 실제 계정 생성, 로그인, 2FA, 휴대폰 인증, profile 적용, 게시 클릭, 댓글/DM 대응, 광고/비즈니스 계정 연결은 사용자가 직접 수행한다.
- `AI Influencer/` 원본 PNG는 read-only reference로만 사용한다. 수정, 이동, 삭제, 리네임, 압축, stage, commit하지 않는다.
- 루아는 실제 인물, 임직원, 고객, 광고주 담당자, 외부 인플루언서가 아니다. AdMate를 설명하기 위해 생성형 AI로 제작한 virtual creator로만 다룬다.
- 모든 office, dashboard, product visual은 sanitized mock이다. 실제 사무실, 실제 내부 화면, 실제 캠페인, 실제 계정, 실제 고객 데이터는 사용하지 않는다.

## 1. 공통 제작 기준

### 1.1 Required Disclosure

게시물별 caption 첫 2줄 안에 아래 중 하나를 넣는다.

- `루아는 AdMate를 설명하기 위해 생성형 AI로 제작한 AI virtual creator입니다.`
- `본 콘텐츠의 루아는 실제 인물 또는 임직원이 아닌 AI-generated virtual creator입니다.`
- 짧은 영상 내 라벨: `AI-generated virtual creator`

Mock UI, dashboard, product card가 보이는 게시물에는 아래 고지를 caption 또는 이미지 하단 라벨에 추가한다.

- `화면 예시는 비식별 mock visual입니다.`
- `실제 광고주, 캠페인, 계정, 성과 데이터가 아닙니다.`

Foresight 또는 예측 관련 게시물에는 아래 고지를 넣는다.

- `예측은 성과 약속이 아니라 다음 판단을 위한 가설입니다.`

Sentinel, Agent Core, 운영 흐름 게시물에는 아래 고지를 넣는다.

- `최종 판단과 승인은 사람이 수행합니다.`

### 1.2 Hashtag Set

기본 세트는 6개 이하로 제한한다.

- Core: `#AdMate`, `#루아`, `#AIvirtualcreator`, `#광고운영`, `#AI에이전트`
- Product optional: `#마케팅테크`, `#미디어플래닝`, `#업무자동화`
- 금지: 성과 보장, 투자 수익, 특정 고객/매체/브랜드명을 직접 연상시키는 hashtag

### 1.3 Asset Reference Rule

기존 PNG는 identity, crop, expression reference로만 기록한다. 외부 업로드 또는 편집용 원본으로 쓰려면 별도 승인과 manifest 기록이 필요하다.

가장 안전한 기존 후보:

- `lua_brand_safe_profile_v1_ivory_shirt.png`
- `lua_master_face_v1.png`
- `lua_smile_v1_soft_window_blouse.png`
- `lua_angle_left_v1_ivory_blouse.png`
- `lua_angle_right_v1_ivory_blouse.png`
- `lua_video_01_scene_01_window_closeup.png`
- `lua_video_01_scene_04_soft_smile.png`

제한 또는 제외 후보:

- `lua_fullbody_v1_hannam_street_blouse_charcoal_pants.png`: 실제 장소/상호처럼 보이는 표지가 있어 공개물 직접 사용 금지
- `lua_mirror_selfie_v1_apartment_fullbody.png`, `lua_mirror_selfie_v1_apartment_alt.png`: private apartment/selfie tone으로 launch grid 제외
- `lua_beauty_lipstick_v1_closeup.png`, `lua_beauty_lipstick_v1_hand_alt.png`, `lua_video_01_scene_03_lipstick_hand.png`, `lua_video_01_scene_03_lipstick_hand_alt.png`: beauty endorsement 오인 위험으로 제외
- `lua_video_01_scene_05_logo_card.png`, `lua_video_01_scene_05_logo_card_alt.png`: `Lua AI Lifestyle Muse` 문구가 AdMate와 불일치하므로 재제작 필요

## 2. 첫 9-grid 게시 순서

Instagram profile grid는 최신 게시물이 좌상단에 배치된다. 아래 표의 `실제 게시 순서`대로 게시하면 최종 3x3은 `최종 grid 위치` 기준으로 보인다.

| 실제 게시 순서 | 최종 grid 위치 | Post ID | Format | 주제 |
|---:|---|---|---|---|
| 1 | 3행 3열 | LIG-09 | 4:5 feed 또는 carousel | Agent Core: 네 Agent를 하나의 운영 loop로 |
| 2 | 3행 2열 | LIG-08 | 4:5 feed | Office routine: 사무실에서 AdMate를 쓰는 장면 |
| 3 | 3행 1열 | LIG-07 | Carousel | Foresight: 다음 판단을 위한 예측 가설 |
| 4 | 2행 3열 | LIG-06 | Carousel | Lens: 캡처와 기록 흐름 |
| 5 | 2행 2열 | LIG-05 | Carousel | Sentinel: 세팅 검수와 이상 신호 |
| 6 | 2행 1열 | LIG-04 | Carousel | Compass: 정책/가이드 근거 확인 출발점 |
| 7 | 1행 3열 | LIG-03 | 4:5 feed 또는 carousel | AI라서 먼저 밝힙니다 |
| 8 | 1행 2열 | LIG-02 | Carousel | AdMate는 무엇을 돕나요? |
| 9 | 1행 1열 | LIG-01 | Reel cover 또는 4:5 feed | 안녕하세요, 루아입니다 |

## 3. 첫 9-grid 제작 상세

### LIG-01. 안녕하세요, 루아입니다

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 9번째, 최종 grid 1행 1열 |
| Format | 4:5 feed 우선, 9:16 Reel cover도 동시 제작 |
| 화면 구성 | 루아 정면 headshot. 밝은 generic office 또는 무표식 창가 배경. 상단 작은 라벨 `AI virtual creator`, 하단 `Lua by AdMate`. 얼굴은 중앙 상단 60% 안에 두고 텍스트는 얼굴/눈/입을 가리지 않는다. |
| Caption 초안 | `안녕하세요, 루아입니다.\n저는 AdMate를 설명하기 위해 생성형 AI로 제작한 AI virtual creator예요. 실제 인물 또는 임직원이 아닙니다.\n\n앞으로 광고 운영의 반복 확인, 검수, 캡처, 학습 흐름을 차분하게 소개할게요. 최종 판단과 승인은 언제나 사람이 수행합니다.` |
| Alt text | `밝은 사무실 분위기에서 아이보리 셔츠를 입은 루아 AI virtual creator가 정면을 바라보는 프로필 이미지. 실제 인물이 아닌 생성형 AI 캐릭터임을 알리는 문구가 함께 배치되어 있다.` |
| Disclosure | Caption 2번째 줄에 AI virtual creator 고지. 이미지 상단에 `AI virtual creator`. |
| CTA | `먼저 궁금한 AdMate 흐름을 댓글로 남겨주세요.` |
| Hashtag | `#AdMate #루아 #AIvirtualcreator #광고운영 #AI에이전트` |
| 기존 파일 후보 | `lua_brand_safe_profile_v1_ivory_shirt.png`, `lua_master_face_v1.png`, `lua_smile_v1_soft_window_blouse.png` |
| 필요한 asset/부족컷 | 공식 profile headshot 1:1, 4:5, 9:16 cover crop. Generic office 배경 재제작 필요. |

### LIG-02. AdMate는 무엇을 돕나요?

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 8번째, 최종 grid 1행 2열 |
| Format | Carousel 6장 |
| 화면 구성 | Slide 1: AdMate overview title card. Slide 2: 반복 확인 업무 card. Slide 3: 판단 근거 card. Slide 4: Compass/Sentinel/Lens/Foresight product cards. Slide 5: Agent Core loop. Slide 6: AI virtual creator 및 mock visual disclosure. |
| Caption 초안 | `AdMate는 광고 운영의 반복 업무를 AI Agent 흐름으로 정리하는 플랫폼입니다.\n루아는 이를 설명하기 위한 AI virtual creator이며, 화면은 비식별 mock visual입니다.\n\n기획, 운영, 검수, 캡처, 학습까지 이어지는 흐름을 하나씩 풀어볼게요. AdMate는 사람의 판단을 대체하지 않고, 판단에 필요한 근거를 더 잘 남기도록 돕습니다.` |
| Alt text | `AdMate의 광고 운영 흐름을 소개하는 6장짜리 carousel. Compass, Sentinel, Lens, Foresight, Agent Core가 각각 카드 형태로 표시되어 있고 실제 데이터가 아닌 mock visual이라고 설명한다.` |
| Disclosure | Slide 6와 caption 첫 문단에 AI virtual creator, sanitized mock visual 고지. |
| CTA | `광고 운영에서 가장 자주 반복되는 확인 업무는 무엇인가요?` |
| Hashtag | `#AdMate #AI에이전트 #광고운영 #미디어플래닝 #업무자동화` |
| 기존 파일 후보 | 루아 얼굴은 필요 시 `lua_brand_safe_profile_v1_ivory_shirt.png`를 작은 profile badge reference로만 사용 |
| 필요한 asset/부족컷 | Product overview card set, Agent Core loop diagram, AdMate-approved visual token. |

### LIG-03. AI라서 먼저 밝힙니다

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 7번째, 최종 grid 1행 3열 |
| Format | 4:5 feed 또는 3-slide carousel |
| 화면 구성 | 정적인 disclosure card. 배경은 ivory/white, charcoal text, 작은 Lua profile icon. 핵심 문장 `루아는 실제 인물이 아닙니다`. 보조 문장 `AI-generated virtual creator for AdMate`. |
| Caption 초안 | `루아는 실제 인물이 아닙니다.\nAdMate를 설명하기 위해 생성형 AI로 제작한 AI virtual creator입니다.\n\n실제 임직원, 고객, 광고주 담당자, 외부 인플루언서를 나타내지 않습니다. 공개 콘텐츠에는 실제 내부 화면이나 고객 데이터를 사용하지 않고, 필요한 경우 sanitized mock visual만 사용합니다.` |
| Alt text | `루아가 실제 인물이 아니라 생성형 AI로 제작한 가상 캐릭터임을 설명하는 단순한 안내 카드. AdMate 설명용 AI virtual creator라는 문구가 보인다.` |
| Disclosure | 게시물 자체가 disclosure. Caption 첫 2줄에 명시. |
| CTA | `이 계정에서는 투명하게 고지하고, 승인된 mock visual만 사용합니다.` |
| Hashtag | `#AdMate #루아 #AIvirtualcreator #AI투명성 #광고운영` |
| 기존 파일 후보 | `lua_brand_safe_profile_v1_ivory_shirt.png`를 작게 넣는 badge reference 가능 |
| 필요한 asset/부족컷 | Disclosure card template, highlight cover와 같은 visual language. |

### LIG-04. Compass: 먼저 확인할 기준

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 6번째, 최종 grid 2행 1열 |
| Format | Carousel 5장 |
| 화면 구성 | Slide 1: `Compass`. Slide 2: dummy brief card. Slide 3: policy/guide source card. Slide 4: `Allowed / Needs review / Missing context` checklist. Slide 5: human review note. |
| Caption 초안 | `Compass는 브리프를 정책/가이드 근거 확인의 출발점으로 바꿉니다.\n루아는 AI virtual creator이며, 화면 예시는 비식별 mock visual입니다.\n\n캠페인을 대신 기획하거나 전략을 자동 확정하는 것이 아니라, 사람이 먼저 확인해야 할 목표, 채널, 제약 조건과 근거 출처를 정리하는 흐름입니다.` |
| Alt text | `Compass를 설명하는 carousel. 브리프가 정책과 가이드 근거 확인 카드로 정리되고, 사람이 검토할 항목이 체크리스트 형태로 표시된다. 실제 캠페인 데이터는 없다.` |
| Disclosure | Caption 첫 문단에 AI virtual creator 및 mock visual 고지. Slide 5에 `Human review required`. |
| CTA | `브리프를 받으면 가장 먼저 확인하는 기준은 무엇인가요?` |
| Hashtag | `#AdMate #Compass #광고운영 #미디어플래닝 #AI에이전트` |
| 기존 파일 후보 | `lua_angle_left_v1_ivory_blouse.png`, `lua_angle_right_v1_ivory_blouse.png`를 presenter side reference로 사용 가능 |
| 필요한 asset/부족컷 | Dummy brief card, policy/guide source card, over-shoulder mock dashboard crop. |

### LIG-05. Sentinel: 세팅 검수와 이상 신호

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 5번째, 최종 grid 2행 2열 |
| Format | Carousel 5장 |
| 화면 구성 | Slide 1: `Sentinel`. Slide 2: setup checklist. Slide 3: `Needs review` signal card. Slide 4: approval gate card. Slide 5: `최종 판단은 사람이`. |
| Caption 초안 | `Sentinel은 세팅 검수와 운영 이상 감지 신호를 정리하는 운영 안전 Agent입니다.\n루아는 AI virtual creator이며, 화면은 실제 계정이 아닌 sanitized mock visual입니다.\n\n모든 리스크를 제거하거나 승인 없이 집행하는 기능으로 설명하지 않습니다. Sentinel은 누락 가능성, 승인 필요 항목, 다시 봐야 할 신호를 사람이 검토할 수 있게 정리합니다.` |
| Alt text | `Sentinel 소개 carousel. 세팅 검수 체크리스트, 검토 필요 신호, 승인 gate 카드가 mock visual로 표시되어 있다. 최종 판단은 사람이 수행한다는 문구가 보인다.` |
| Disclosure | Caption 첫 문단에 mock visual 고지. Slide 5에 human approval 고지. |
| CTA | `운영 세팅에서 놓치기 쉬운 항목은 무엇인가요?` |
| Hashtag | `#AdMate #Sentinel #광고운영 #업무자동화 #AI에이전트` |
| 기존 파일 후보 | 루아 이미지 없이 product card 중심 권장. 필요 시 `lua_brand_safe_profile_v1_ivory_shirt.png`를 작은 icon reference로만 사용 |
| 필요한 asset/부족컷 | Setup checklist mock, approval gate card, non-real signal card. |

### LIG-06. Lens: 캡처와 기록 흐름

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 4번째, 최종 grid 2행 3열 |
| Format | Carousel 5장 |
| 화면 구성 | Slide 1: `Lens`. Slide 2: sanitized capture tile. Slide 3: `What was checked`. Slide 4: `Why it matters`. Slide 5: `실제 내부 화면을 그대로 노출하지 않습니다`. |
| Caption 초안 | `Lens는 운영 과정의 캡처와 기록 흐름을 정리합니다.\n루아는 AI virtual creator이며, 모든 화면 예시는 비식별 mock visual입니다.\n\n실제 내부 화면, 광고주명, 캠페인명, 계정 정보는 공개 콘텐츠에 사용하지 않습니다. Lens는 필요한 근거를 안전한 기준으로 남기고, 나중에 다시 확인할 수 있는 맥락으로 정리하는 흐름을 설명합니다.` |
| Alt text | `Lens 소개 carousel. 가짜 capture tile과 확인 항목, 캡처 기록 메모가 카드로 정리되어 있으며 실제 내부 화면이나 고객 데이터가 아니라고 고지한다.` |
| Disclosure | Caption 첫 문단 및 Slide 5에 dummy visual/data 고지. |
| CTA | `캡처 기록을 남길 때 가장 중요한 맥락은 무엇인가요?` |
| Hashtag | `#AdMate #Lens #광고운영 #캡처기록 #AI에이전트` |
| 기존 파일 후보 | product card 중심. Presenter 보조 reference는 `lua_side_profile_left_v1_window_blouse_alt.png` |
| 필요한 asset/부족컷 | Sanitized capture tile, capture note card, no-real-screen visual. |

### LIG-07. Foresight: 다음 판단을 위한 가설

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 3번째, 최종 grid 3행 1열 |
| Format | Carousel 5장 |
| 화면 구성 | Slide 1: `Foresight`. Slide 2: trend shape with no real metrics. Slide 3: hypothesis note. Slide 4: next action options. Slide 5: `Hypothesis, not guarantee`. |
| Caption 초안 | `Foresight는 성과를 약속하지 않고 다음 판단을 위한 예측 가설과 분석 관점을 제안합니다.\n루아는 AI virtual creator이며, 차트와 수치는 실제 성과 데이터가 아닌 mock visual입니다.\n\n핵심은 자동 예산 최적화나 성과 보장이 아닙니다. 실행 결과를 회고하고 다음 브리프와 검수 기준의 학습 후보로 되돌리는 흐름입니다.` |
| Alt text | `Foresight 소개 carousel. 실제 수치가 없는 추세 모양, 가설 메모, 다음 판단 후보가 표시되고 성과 보장이 아니라는 문구가 함께 있다.` |
| Disclosure | Caption 첫 문단에 AI, mock data 고지. Slide 5에 `Hypothesis, not guarantee`. |
| CTA | `다음 액션을 정할 때 어떤 근거가 가장 도움이 되나요?` |
| Hashtag | `#AdMate #Foresight #광고운영 #AI에이전트 #분석` |
| 기존 파일 후보 | `lua_smile_v1_soft_window_blouse.png`를 closing thumbnail reference로 사용 가능 |
| 필요한 asset/부족컷 | No-number trend card, hypothesis note card, learning candidate card. |

### LIG-08. Office routine: 사무실에서 AdMate를 쓰는 장면

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 2번째, 최종 grid 3행 2열 |
| Format | 4:5 feed, 9:16 Story crop 추가 |
| 화면 구성 | 루아가 generic office desk에서 노트북을 바라보는 over-shoulder 또는 3/4 shot. 화면에는 `Demo Brief`, `Needs review`, `Mock Dashboard` 같은 dummy label만 보인다. 책상에는 로고 없는 노트, 펜, 컵. 사원증, 주소, 화이트보드, 실제 브랜드 로고 금지. |
| Caption 초안 | `사무실에서 AdMate를 설명하는 루아의 첫 routine 컷입니다.\n루아는 실제 인물이 아닌 AI virtual creator이며, 화면은 실제 제품 화면이 아닌 sanitized mock visual입니다.\n\nAdMate를 사용하는 콘셉트는 브리프 확인, 검수 기준 정리, 캡처 기록, 다음 판단의 가설을 차례로 보여주는 방향입니다.` |
| Alt text | `밝고 비식별화된 사무실 책상에서 루아 AI virtual creator가 노트북의 mock dashboard를 바라보는 장면. 화면에는 실제 데이터가 아닌 demo label만 보인다.` |
| Disclosure | Caption 첫 문단에 AI virtual creator 및 sanitized mock visual 고지. 이미지 하단 작은 라벨 `Sanitized mock visual`. |
| CTA | `office routine 영상에서는 어떤 장면을 먼저 보고 싶나요?` |
| Hashtag | `#AdMate #루아 #AIvirtualcreator #광고운영 #오피스루틴` |
| 기존 파일 후보 | `lua_angle_left_v1_ivory_blouse.png`, `lua_angle_right_v1_ivory_blouse.png`, `lua_video_01_scene_02_side_window.png`를 pose/reference로만 사용 |
| 필요한 asset/부족컷 | Sanitized office desk, over-shoulder mock dashboard, generic laptop screen, no real office details. |

### LIG-09. Agent Core: 하나의 운영 loop

| 항목 | 내용 |
|---|---|
| 실제 게시 순서 | 1번째, 최종 grid 3행 3열 |
| Format | 4:5 feed 또는 carousel 4장 |
| 화면 구성 | 중앙 `Agent Core`, 주변에 Compass, Sentinel, Lens, Foresight card. 하단에 `권한`, `승인`, `감사 로그`, `학습 후보` 네 governance pill. 실제 architecture diagram처럼 보이는 DB/API/log detail은 금지. |
| Caption 초안 | `Agent Core는 Compass, Sentinel, Lens, Foresight를 하나의 운영 loop로 연결하는 orchestration layer입니다.\n루아는 AI virtual creator이며, diagram은 실제 내부 구조가 아닌 설명용 mock visual입니다.\n\n권한, 승인, 감사 로그, 학습 후보 검토를 전제로 AI Agent 운영이 분산되지 않도록 묶는 개념입니다. 사람 개입 없이 모든 데이터를 자유롭게 연결한다는 의미가 아닙니다.` |
| Alt text | `Agent Core를 중심으로 Compass, Sentinel, Lens, Foresight가 연결된 단순한 운영 loop diagram. 권한, 승인, 감사 로그, 학습 후보라는 governance label이 표시되어 있다.` |
| Disclosure | Caption 첫 문단에 AI virtual creator 및 mock diagram 고지. Diagram 하단 `Human approval remains required`. |
| CTA | `AdMate의 네 Agent 중 가장 먼저 더 자세히 볼 주제를 골라주세요.` |
| Hashtag | `#AdMate #AgentCore #AI에이전트 #광고운영 #업무자동화` |
| 기존 파일 후보 | 루아 이미지 없이 diagram 중심 권장 |
| 필요한 asset/부족컷 | Agent Core loop diagram, product card set, governance pill set. |

## 4. 루아 사무실/AdMate 사용 영상 P0 Shot List

권장 길이: 30초 Reels. 모든 scene은 9:16 기준으로 먼저 제작하고, 필요 시 4:5 feed crop을 별도 검수한다.

| Scene | Duration | Framing | Prompt brief | Safety note | Mock UI rule | Caption placement |
|---|---:|---|---|---|---|---|
| V01. Disclosure open | 0-3s | 루아 closeup 또는 clean title card, 얼굴 중앙 | 루아가 밝은 generic office에서 카메라를 바라보는 calm opening. `AI-generated virtual creator` 라벨 포함 | 실제 인물/임직원 오인 방지. 시작 3초 안에 고지 | UI 없음 | 상단 좌측 작은 라벨, 하단 1줄 `실제 인물이 아닌 AI virtual creator` |
| V02. Office setup | 3-6s | 3/4 medium shot, desk와 laptop 일부 | 루아가 정돈된 office desk에 앉아 노트북을 여는 장면 | 실제 사무실, 사원증, 주소, 로고, 화이트보드 금지 | 노트북 화면은 흐릿한 abstract card 또는 `Mock Dashboard`만 | 하단 safe area `광고 운영은 반복 확인과 판단이 함께 움직입니다` |
| V03. Compass | 6-10s | Over-shoulder, laptop screen 40%, 루아 측면 30% | `Demo Brief`가 `Policy / Guide / Needs review` card로 정리되는 mock UI | 실제 brief, 정책 전문, 고객명 금지 | 허용 text: `Demo Brief`, `Guide Source`, `Needs review`, `Human check` | 우측 하단 `Compass: 근거 확인 출발점` |
| V04. Sentinel | 10-14s | Screen insert 또는 hand near trackpad | Setup checklist와 signal card가 등장 | 손 artifact 검수. 승인 없이 차단/집행처럼 보이지 않게 | 허용 text: `Setup check`, `Missing item`, `Needs review`, `Approval gate` | 하단 `Sentinel: 세팅 검수`와 작은 `Human approval required` |
| V05. Lens | 14-18s | Clean screen insert, capture tile closeup | Capture note card가 `What was checked`와 `Why it matters`로 정리됨 | 실제 화면 캡처처럼 보이지 않게 abstract tile 사용 | 허용 text: `Sanitized capture`, `Checked item`, `Capture note`, `No real account data` | 하단 `Lens: 비식별 기준으로 기록` |
| V06. Foresight | 18-23s | 루아 profile + floating chart card | 숫자 없는 trend shape와 hypothesis note | 성과 보장, ROI 보장, 자동 예산 최적화 표현 금지 | 허용 text: `Hypothesis`, `Next review`, `Learning candidate`, 숫자 없음 | 상단 또는 우측 `Hypothesis, not guarantee` |
| V07. Agent Core loop | 23-27s | Full-screen product loop diagram | Compass, Sentinel, Lens, Foresight가 Agent Core로 연결 | 실제 architecture, DB/API/log detail 금지 | 허용 text: `Permission`, `Approval`, `Audit log`, `Learning candidate` | 중앙 하단 `Agent Core: 하나의 운영 loop` |
| V08. Closing | 27-30s | 루아 soft smile closeup, product loop faint background | 루아가 카메라를 보며 calm closing | 실제 직원 후기처럼 말하지 않음 | UI는 background abstract만 | 하단 `최종 판단은 사람이 합니다` + 작은 `AI-generated virtual creator` |

## 5. 게시 전 체크리스트

### 5.1 AI-generated Virtual Creator 고지

- [ ] Profile bio에 루아가 AI virtual creator이며 실제 인물이 아님을 표시했다.
- [ ] 첫 9-grid 중 최소 LIG-01, LIG-03에 명확한 AI disclosure가 있다.
- [ ] 영상/Reels는 시작 3-5초 안에 `AI-generated virtual creator` 또는 동등한 한국어 고지가 있다.
- [ ] Caption 첫 2줄 안에 AI virtual creator 고지가 필요한 게시물에 들어갔다.
- [ ] 실제 임직원, 고객, 광고주 담당자처럼 보이는 직함이나 경험담을 쓰지 않았다.

### 5.2 Meta AI Info UI 확인

- [ ] Instagram 게시 UI에서 AI 생성 또는 AI로 수정된 콘텐츠 관련 `AI info`/label 항목을 사용자가 직접 확인한다.
- [ ] Platform UI에서 요구하는 disclosure toggle, label, 안내 항목이 있으면 사용자가 직접 적용한다.
- [ ] Organic post와 광고/boosted post의 AI disclosure 기준이 다를 수 있음을 별도 확인한다.

### 5.3 저작권, 음원, 폰트, 템플릿

- [ ] 사용 이미지, 영상, 음악, 효과음, 폰트, 템플릿의 사용권을 확인했다.
- [ ] 제3자 브랜드 로고, 상표, 간판, 제품, 화면이 노출되지 않는다.
- [ ] 생성 도구 약관상 commercial/social posting이 가능한지 확인했다.
- [ ] Prompt, source note, 생성 도구, 승인 상태를 manifest에 기록했다.

### 5.4 내부정보 비노출

- [ ] 실제 내부 화면, dashboard, Slack, GitHub, Vercel, DB/API/log, 광고 계정, 결제 화면을 쓰지 않았다.
- [ ] 실제 고객명, 광고주명, 캠페인명, 계정 ID, 예산, 성과 수치, 이메일, 전화번호, 주소를 쓰지 않았다.
- [ ] 노트북 화면, 화이트보드, 문서, 사원증, 건물 표식, 위치 정보가 식별되지 않는다.
- [ ] Mock UI text는 `Demo`, `Sample`, `Placeholder`, `Needs review`, `Human check` 수준으로 제한했다.

### 5.5 최종 승인

- [ ] Brand owner가 루아 캐릭터 사용, profile, tone, hashtag를 승인했다.
- [ ] Product owner가 AdMate/Agent 설명 문구를 승인했다.
- [ ] Legal/security owner가 AI disclosure, 내부정보 비노출, 저작권 리스크를 검토했다.
- [ ] Account owner가 실제 게시 전 최종 파일, caption, alt text, hashtag, AI label 상태를 확인했다.

## 6. 사용자 직접 수행 항목

아래 항목은 자동화하거나 대리 수행하지 않는다.

| 항목 | 사용자 직접 수행 이유 |
|---|---|
| Instagram handle 사용 가능 여부 확인 | 실제 플랫폼 UI에서만 사용 가능성을 확정할 수 있다. |
| Instagram 계정 생성 | 약관 동의, 이메일/휴대폰 인증, 계정 소유권 확인이 필요하다. |
| 로그인, 2FA, 휴대폰 인증 | 보안 코드와 인증 정보는 사용자만 입력한다. |
| 비밀번호, recovery code, session, cookie 관리 | repo, 문서, prompt, issue, commit message에 절대 저장하지 않는다. |
| Profile photo, name, bio, link 적용 | 계정 owner 권한과 최종 승인 책임이 필요하다. |
| Meta AI info UI 확인과 적용 | 플랫폼 UI의 최신 disclosure 흐름은 사용자가 직접 확인한다. |
| 실제 게시 클릭, 예약 게시, 삭제, 수정 | 공개 배포 행위이며 최종 승인 책임이 있다. |
| 댓글/DM 중 민감 문의 대응 | 고객정보, 법무, 브랜드 리스크가 있어 승인된 응답 범위가 필요하다. |
| 광고/비즈니스 계정 연결 | Meta Business, 결제, ad account, Page 권한이 필요하다. |
| Boost, paid partnership, brand collaboration 전환 | 광고/협찬 표기, GenAI transparency, 제품 claim 검토가 별도로 필요하다. |

## 7. 제작 Handoff

첫 제작 batch는 아래 순서로 요청한다.

1. `Profile headshot`: LIG-01, profile image, highlight cover source
2. `Disclosure card`: LIG-03, Story/Highlight reusable
3. `Product card set`: LIG-02, LIG-04~LIG-07, LIG-09
4. `Sanitized office desk`: LIG-08와 영상 V02
5. `Over-shoulder mock dashboard`: 영상 V03~V05
6. `Agent Core loop diagram`: LIG-09와 영상 V07

Prompt 상세는 `docs/prompts/lua-office-admate-shot-prompt-pack-v1.md`를 사용한다.
