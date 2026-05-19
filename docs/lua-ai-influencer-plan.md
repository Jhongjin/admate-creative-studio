# Lua AI Influencer Production And Instagram Operations Plan

작성일: 2026-05-19
대상 repo: `D:\Projects\AdMate\admate-creative-studio`
대상 asset directory: `D:\Projects\AdMate\admate-creative-studio\AI Influencer`
캐릭터명: `lua` / `루아`
상태: Creative Studio producer/copy/operations planning draft

## 0. 작업 경계

- 이 문서는 기획, 운영, 카피, 검수 계획이다. 이미지, 영상, 음성 asset을 생성하거나 외부 도구에 업로드하지 않았다.
- `AI Influencer/` 원본 PNG는 read-only reference로만 다룬다. 수정, 삭제, 이동, 리네이밍, 압축, stage, commit하지 않는다.
- 루아는 실제 인물, 임직원, 고객, 광고주 담당자, 외부 인플루언서가 아니라 AdMate 설명을 위한 생성형 AI 기반 가상 캐릭터다.
- Instagram 비밀번호, 2FA 코드, 휴대폰 인증, session, cookie, token, env, secret, credential 값은 문서화하거나 repo에 저장하지 않는다.
- 실제 게시, 계정 연결, 광고 계정 연결, 최종 승인 등 권한이 필요한 작업은 사용자가 직접 수행한다.

## 1. Repo 감사 요약

기존 repo는 영상 제작보다 안전한 creative planning과 AI presenter asset 검토를 우선하는 문서형 repo다.

| 영역 | 확인 파일 | 현재 역할 |
|---|---|---|
| repo 운영 원칙 | `README.md`, `AGENTS.md` | 외부 API/영상 생성 제외, 실제 인물 imitation 금지, `AI Influencer/` read-only 원칙 명시 |
| asset inventory | `docs/references/ai-influencer-asset-inventory-v1.md` | 27개 PNG 파일명, 용도, brand-safe 판단, 리스크 기록 |
| persona 기준 | `docs/references/presenter-persona-guide-v1.md` | Lua는 실험명이며 공식 캐릭터명 사용에는 브랜드 승인 필요 |
| 사용 경계 | `docs/presenter/presenter-usage-boundary-v1.md` | AI presenter 허용/금지 범위, review gate, stop condition 정의 |
| asset 활용 | `docs/presenter/presenter-asset-usage-plan-v1.md`, `docs/storyboard/presenter-scene-asset-map-v1.md` | executive/planner 영상에서 presenter 등장 범위와 회피 asset 정의 |
| 톤/카피 | `docs/presenter/presenter-voice-tone-guide-v1.md`, `docs/message-library/*` | 차분한 업무형 설명, 성과 보장/무승인 자동화/실제 직원 오인 표현 금지 |
| 고지/안전 | `docs/production/caption-disclosure-guide-v1.md`, `docs/security/video-production-safety-checklist-v1.md` | 가상 presenter 고지, dummy visual/data 고지, human approval 기준 |

현재 repo에는 Instagram 계정 운영까지 연결하는 단일 실행 계획 문서가 없어, 본 문서를 신규 생성했다.

## 2. Asset Directory 감사

### 2.1 파일 구성

- 총 PNG: 27개
- 일반 portrait/reference still: 17개
- vertical video scene 후보: 10개
- 주요 해상도:
  - 1122x1402, ratio 0.800: 대부분의 portrait/reference still
  - 1024x1536, ratio 0.667: street fullbody 1개
  - 941x1672, ratio 0.563: 9:16 vertical video scene 후보
- 공통 스타일: 20대 중후반 한국 여성형, 긴 다크 브라운 헤어, ivory/cream 상의, soft window light, apartment/studio/urban street 배경

### 2.2 기존 이미지 세트가 커버하는 용도, 각도, 스타일

| 그룹 | 파일 예시 | 커버 용도 | 각도/프레이밍 | 스타일 판단 | 운영 판단 |
|---|---|---|---|---|---|
| Master/profile closeup | `lua_master_face_v1.png`, `lua_brand_safe_profile_v1_ivory_shirt.png` | 프로필, 얼굴 기준점, intro/outro reference | 정면 closeup | 창가 실내, 차분한 business casual | 가장 안정적. 공식 프로필 후보로 우선 검토 |
| Soft closeup/expression | `lua_closeup_v1_soft_window_blouse_alt.png`, `lua_smile_v1_soft_window_blouse.png` | 친근한 closing, planner guide tone | 정면 closeup, soft smile | 밝고 부드러운 presenter tone | social/영상 outro 후보. 과한 influencer tone은 피함 |
| Left/right angle | `lua_angle_left_v1_ivory_blouse.png`, `lua_angle_right_v1_ivory_blouse.png`, knit variants | 3/4 motion reference, B-roll | 좌/우 3/4 | blouse는 업무형, knit는 lifestyle | blouse 계열은 보조 사용 가능. knit는 내부 moodboard 중심 |
| Side profile | `lua_side_profile_left_v1_window_blouse_alt.png`, `lua_side_profile_left_v1_window_knit.png` | side narration, 전환 B-roll | 좌측 profile | 창가/도시 배경 | identity 기준으로는 약하므로 product scene 보조용 |
| Back/support | `lua_back_view_v1_window_blouse_alt.png`, `lua_back_view_v1_window_knit.png` | transition, moodboard | back view | 얼굴 식별 없음 | 최종 외부물보다 내부 reference용 |
| Fullbody/wardrobe | `lua_fullbody_v1_hannam_street_blouse_charcoal_pants.png` | 의상, 자세, 전신 reference | 전신 street shot | ivory blouse, charcoal pants | 실제 장소/상호성 텍스트가 보여 공개물에는 부적합 |
| Mirror selfie | `lua_mirror_selfie_v1_apartment_fullbody.png`, `lua_mirror_selfie_v1_apartment_alt.png` | wardrobe reference, casual post mood | mirror fullbody/selfie | private apartment, UGC tone | 실제 인물 계정처럼 보일 위험. 공식 AdMate 계정 톤에서는 제한 |
| Beauty/lipstick | `lua_beauty_lipstick_v1_closeup.png`, `lua_video_01_scene_03_lipstick_hand.png` | beauty moodboard, hand reference | 제품을 든 closeup | 화장품 endorsement처럼 보임 | AdMate 제품 설명과 거리 있음. launch grid에서는 제외 |
| Vertical video scenes | `lua_video_01_scene_01_window_closeup.png`, `lua_video_01_scene_04_soft_smile.png` | Reels/Stories intro, outro reference | 9:16 portrait | 창가 실내, soft social video | planner/social short 후보. disclosure와 crop 안전영역 필요 |
| Logo card | `lua_video_01_scene_05_logo_card.png`, `lua_video_01_scene_05_logo_card_alt.png` | title/end card concept | 9:16 text card | `Lua AI Lifestyle Muse` | AdMate와 불일치. disclosure 아이디어만 참고하고 재제작 필요 |

### 2.3 현재 asset 강점

- 얼굴 기준점과 profile closeup은 충분하다.
- ivory shirt/blouse, dark hair, calm expression이 반복되어 루아의 기본 identity를 만들기 좋다.
- 3/4, side, back, fullbody가 있어 image-to-video 또는 shot planning reference로 쓸 수 있는 각도 폭이 있다.
- 9:16 vertical 후보가 있어 Reels/Stories/short intro mood를 잡기 쉽다.

### 2.4 현재 asset 부족 영역

- AdMate 사무실에서 제품을 사용하는 장면이 없다.
- 노트북, 책상, 회의실, generic office, mock dashboard, product card와 함께 등장하는 컷이 없다.
- 정식 Instagram launch에 필요한 square, 4:5 feed, 9:16 cover variation이 체계적으로 없다.
- 브랜드 승인된 AdMate title card, profile badge, highlight cover가 없다.
- 손/키보드/노트/태블릿 등 업무 소품 컷은 부족하고, lipstick/beauty 컷은 용도 불일치다.
- 현재 배경은 private apartment, 도시 창가, street sign이 많아 공개물에는 비식별 배경 재제작이 필요하다.

## 3. 루아 캐릭터/톤

### 3.1 캐릭터 정의

- 이름: 루아 / Lua
- 설정: 20대 중후반 한국 여성형 AI virtual creator
- 역할: AdMate의 광고 운영 흐름을 쉽게 설명하는 가상 guide
- 관계: AdMate 직원, 고객, 실제 플래너가 아니라 제품 설명용 virtual presenter
- 핵심 태도: 차분함, 또렷함, 실무적 친절함, 과장 없는 자신감

### 3.2 금지 설정

- 실제 AdMate 임직원 또는 운영팀 담당자 설정
- 실제 캠페인을 운영해본 사람의 후기처럼 말하는 1인칭 증언
- 특정 광고주, 고객, 캠페인 성과를 직접 경험한 듯한 표현
- 외부 인플루언서, 유명인, 특정 실존 인물의 외모/말투 imitation
- "AI가 사람 승인 없이 운영한다", "성과를 보장한다"는 메시지

### 3.3 톤 가이드

| 상황 | 권장 톤 | 예시 |
|---|---|---|
| profile/bio | 투명하고 짧게 | `AdMate를 설명하는 AI virtual creator, 루아입니다.` |
| product intro | 업무형 안내 | `브리프가 들어오면 먼저 확인할 기준을 정리합니다.` |
| Reels hook | 가볍지만 과장 없이 | `광고 운영에서 반복 확인이 많은 순간, 이렇게 정리해볼 수 있어요.` |
| safety disclosure | 명확하게 | `저는 생성형 AI로 제작한 가상 캐릭터입니다.` |
| CTA | 승인/판단 존중 | `최종 판단은 사람이 하고, AdMate는 근거 정리를 돕습니다.` |

## 4. 이미지 품질 체크 기준

### 4.1 Technical QC

- [ ] 해상도와 비율이 채널 용도에 맞는다: feed 4:5, square 1:1, Reels/Stories 9:16.
- [ ] 얼굴이 crop safe area 안에 있고 subtitle, sticker, CTA에 가려지지 않는다.
- [ ] 눈, 치아, 귀, 손가락, 손톱, 머리카락, 옷깃 artifact가 없다.
- [ ] 피부 질감이 과도하게 plastic하거나 실제 인물 사진 도용처럼 보이지 않는다.
- [ ] 배경에 읽을 수 있는 주소, 상호, 사원증, 내부 화면, 문서, 개인정보가 없다.
- [ ] 텍스트가 있으면 오탈자, 깨짐, pseudo-language, 비승인 로고가 없다.
- [ ] 파일명, prompt log, source note, review status가 asset manifest에 남아 있다.

### 4.2 Character Consistency QC

- [ ] 나이대는 20대 중후반으로 유지된다.
- [ ] 얼굴형, 눈매, 코/입 비율, 헤어 컬러와 길이가 shot 간 동일 인물로 보인다.
- [ ] 의상은 ivory shirt/blouse, charcoal/black bottom 중심으로 통일된다.
- [ ] 표정은 neutral, calm, soft smile 범위를 벗어나지 않는다.
- [ ] beauty pose, selfie pose, dating/lifestyle influencer tone이 과하게 들어가지 않는다.

### 4.3 Brand And Safety QC

- [ ] 가상 인물임을 숨기지 않는다.
- [ ] 실제 직원, 고객, 광고주 담당자처럼 보이는 직함/상황을 부여하지 않는다.
- [ ] 실제 AdMate 내부 화면 대신 sanitized mock visual만 사용한다.
- [ ] 성과 보장, 자동 집행, 무승인 학습으로 오해될 문구가 없다.
- [ ] 제3자 브랜드, 상표, 음악, 사진, 폰트, 장소성이 확인되지 않은 asset은 공개물에서 제외한다.

## 5. 부족 컷 리스트

아래 컷은 신규 제작 또는 별도 sourcing이 필요하다. 기존 `AI Influencer/` PNG를 수정하지 않고, 새 산출물은 별도 승인된 위치와 manifest에 기록한다.

| 우선순위 | 필요 컷 | 권장 비율 | 용도 | 핵심 조건 |
|---:|---|---|---|---|
| P0 | 루아 공식 profile headshot | 1:1, 4:5 | Instagram profile, press/profile card | ivory shirt, generic bright office, AI disclosure copy 별도 준비 |
| P0 | AdMate office desk closeup | 4:5, 9:16 | 첫 9-grid, 제품 소개 Reels | 노트북 화면은 sanitized mock, 실제 UI/계정 금지 |
| P0 | 루아가 AdMate mock dashboard를 보는 over-shoulder | 9:16 | 사무실/제품 소개 영상 | 화면 텍스트는 dummy product card만 |
| P0 | product card 5종 | 1:1, 4:5 | Compass/Sentinel/Lens/Foresight/Agent Core carousel | 승인 one-liner 사용, 실제 데이터 없음 |
| P1 | keyboard/notebook/brief hand detail | 4:5 | 업무 루틴 post, B-roll | 손 artifact 엄격 검수, 브랜드 없는 소품 |
| P1 | meeting room wide shot with no people | 16:9, 9:16 | 영상 배경, roadmap scene | 사원증, 화이트보드, 화면, 좌석표 금지 |
| P1 | 루아 explaining gesture | 9:16 | Reels speaking frame | 손/입 모양 artifact 검수 |
| P1 | soft smile outro | 9:16, 4:5 | closing, pinned intro | 기존 smile reference와 face consistency 유지 |
| P1 | highlight cover set | 1:1 | Profile highlights | `Intro`, `AdMate`, `Office`, `Glossary`, `AI Note` |
| P2 | behind-the-scenes style board card | 4:5 | 투명성 post | prompt/safety process를 설명하되 tool secret 비노출 |

## 6. 스타일 보드

### 6.1 Visual Direction

- 키워드: calm Korean office, soft daylight, practical AI work guide, clean desk, non-luxury business casual
- 인물: dark brown long hair, natural makeup, ivory shirt/blouse, minimal earrings, neutral or soft smile
- 공간: generic office, bright meeting room, clean desk, abstract product wall, no real company secrets
- 소품: laptop with sanitized mock UI, notebook, pen, phone with blank/generic screen, coffee cup without brand
- 피해야 할 것: bedroom/private apartment emphasis, mirror selfie, lipstick/beauty product, street signage, luxury influencer styling, over-glam retouching

### 6.2 Palette And Typography

- Base: ivory, white, warm gray, charcoal
- Accent: AdMate approved brand color가 있으면 우선 적용. 없으면 muted blue/green 정도로 product category만 구분
- Text: 짧은 Korean label, English product name 유지
- 금지: `Lua AI Lifestyle Muse`처럼 AdMate와 분리된 별도 브랜드명, 과한 lifestyle muse tone

### 6.3 Content Pillars

| Pillar | 역할 | 예시 주제 |
|---|---|---|
| 루아 소개 | AI virtual creator 투명성 | `루아는 실제 인물이 아닙니다`, `AI presenter로 설명합니다` |
| AdMate 101 | 제품을 쉬운 말로 설명 | `Compass는 어디서 시작할까`, `Lens는 왜 캡처를 남길까` |
| Office Routine | 사무실에서 AdMate를 쓰는 흐름 | `브리프 확인`, `검수 기준`, `증빙 정리` |
| Safety Notes | 브랜드/보안 기준 | `실제 데이터 대신 mock`, `최종 승인은 사람` |
| Monthly Recap | 운영 학습 | `이번 달 자주 나온 질문`, `다음 콘텐츠 예고` |

## 7. 프롬프트/레퍼런스 관리

### 7.1 Manifest 필드

새 asset, prompt, reference는 하나의 manifest에 남긴다. 권장 위치는 `docs/references/lua-asset-manifest-v1.md` 또는 운영 단계에서 별도 asset 관리 시트다.

| 필드 | 내용 |
|---|---|
| ID | `LUA-YYYYMMDD-###` |
| 요청 목적 | profile, feed, reel cover, story, office video 등 |
| 사용 채널 | Instagram feed, Reels, Stories, internal video 등 |
| reference 파일명 | 기존 PNG 파일명만 기록. 원본 이동/수정 금지 |
| prompt 요약 | 공개 가능한 수준의 prompt 요약 |
| negative prompt 요약 | 금지 요소, safety 요소 |
| 생성 도구/모델 | 사용한 도구명과 버전. 계정/API token은 기록 금지 |
| seed/settings | 공개 가능한 생성 설정 |
| 라이선스/source note | tool 약관, 사용권, 제3자 asset 출처 |
| QC 결과 | pass, revise, reject |
| 승인자/일자 | brand, legal, security, final owner |
| 공개 여부 | internal only, approved public, archived |

### 7.2 Reference 사용 규칙

- 기존 PNG는 identity/style reference로만 사용하고 외부 업로드는 사전 승인 없이는 금지한다.
- 실제 인물 사진, 임직원 사진, 고객 사진, 유명인 reference는 사용하지 않는다.
- prompt 안에 secret, internal URL, 고객명, 캠페인명, account ID를 넣지 않는다.
- prompt와 결과물을 분리 보관하고, 최종 게시 caption과 disclosure를 함께 기록한다.

## 8. Instagram 계정/프로필 설계

### 8.1 계정 포지션

- 계정 성격: AdMate를 설명하는 AI virtual creator account
- 핵심 약속: 광고 운영 흐름을 더 쉽고 안전하게 설명한다.
- 오해 방지: 실제 사람/직원/고객이 아니라는 점을 profile, 첫 게시물, highlight에 반복 고지한다.

### 8.2 Handle 후보

사용 가능 여부는 사용자가 Instagram에서 직접 확인한다.

- `lua.admate`
- `admate.lua`
- `lua.by.admate`
- `admate.ai.lua`
- `lua.virtual.admate`

### 8.3 Name/Bio 초안

Name 후보:

- `Lua | AdMate AI Guide`
- `루아 | AdMate AI Guide`
- `Lua by AdMate`

Bio 후보:

```text
AdMate를 설명하는 AI virtual creator, 루아입니다.
실제 인물이 아닌 생성형 AI 캐릭터예요.
광고 운영, 검수, 캡처, 학습 흐름을 쉽게 기록합니다.
```

짧은 bio:

```text
AI virtual creator for AdMate
실제 인물이 아닌 가상 캐릭터
광고 운영 흐름을 쉽게 설명합니다
```

### 8.4 Highlight 구성

| Highlight | 목적 | Cover |
|---|---|---|
| `Intro` | 루아가 가상 캐릭터임을 고지 | 루아 profile icon 또는 disclosure card |
| `AdMate` | 제품 한 줄 소개 | AdMate product card |
| `Office` | 사무실 사용 흐름 | desk/laptop icon |
| `Glossary` | Compass/Sentinel/Lens/Foresight 설명 | product initial icon |
| `AI Note` | 생성형 AI 투명성, 안전 원칙 | AI disclosure mark |

## 9. 첫 9-grid 구성

Instagram grid는 최신 게시물이 앞에 보이므로, 아래 9번부터 1번 순서로 게시하면 최종 grid가 의도에 가까워진다. 실제 게시 클릭은 사용자가 직접 수행한다.

| Grid 위치 | 게시 순서 | Format | 주제 | Visual | Caption 핵심 |
|---:|---:|---|---|---|---|
| 1 | 9 | Reel or 4:5 feed | `안녕하세요, 루아입니다` | official profile headshot | AI virtual creator disclosure, AdMate guide 소개 |
| 2 | 8 | Carousel | `AdMate는 무엇을 돕나요?` | product overview card | 반복 업무를 줄이고 판단 근거를 남김 |
| 3 | 7 | 4:5 feed | `AI라서 먼저 밝힙니다` | disclosure card | 실제 인물/직원이 아님 |
| 4 | 6 | Carousel | `Compass` | brief to policy card | 정책/가이드 근거 확인의 출발점 |
| 5 | 5 | Carousel | `Sentinel` | checklist card | 세팅 검수와 운영 이상 신호 |
| 6 | 4 | Carousel | `Lens` | sanitized capture card | 비식별 캡처와 증빙 흐름 |
| 7 | 3 | Carousel | `Foresight` | hypothesis card | 성과 약속이 아닌 다음 판단의 가설 |
| 8 | 2 | 4:5 feed | `Office routine` | 루아 at sanitized office desk | 실제 데이터 없이 mock으로 설명 |
| 9 | 1 | 4:5 feed | `Agent Core` | loop diagram | 네 Agent를 하나의 운영 흐름으로 연결 |

### 첫 9-grid 카피 원칙

- 각 caption 첫 2줄 안에 핵심 메시지와 disclosure를 배치한다.
- 제품 post에는 실제 데이터, 실제 캠페인명, 성과 수치를 넣지 않는다.
- hashtag는 과도하게 넓히지 않는다. 예: `#AdMate`, `#AIvirtualcreator`, `#광고운영`, `#AI에이전트`
- 댓글 유도는 질문형으로 가볍게 한다. 예: `광고 운영에서 가장 자주 반복되는 확인 업무는 무엇인가요?`

## 10. 첫 게시물 패키지

### Package A. Launch Reel

- 길이: 12-20초
- Visual: 루아 profile closeup, office desk, AdMate product cards, disclosure card
- 영상 내 고지: 시작 3초 이내 `AI-generated virtual creator`
- Caption 초안:

```text
안녕하세요, 루아입니다.
저는 AdMate를 설명하기 위해 생성형 AI로 제작한 가상 캐릭터예요. 실제 인물 또는 임직원이 아닙니다.

앞으로 광고 운영의 반복 업무, 검수, 캡처, 학습 흐름을 더 쉽게 설명해볼게요.
최종 판단과 승인은 언제나 사람이 합니다.
```

### Package B. AdMate 101 Carousel

- Slide 1: `AdMate는 AI Agent 기반 광고 운영 자동화 플랫폼입니다`
- Slide 2: `반복 업무는 줄이고`
- Slide 3: `운영자의 판단은 더 잘 남기고`
- Slide 4: `Compass, Sentinel, Lens, Foresight`
- Slide 5: `Agent Core가 하나의 흐름으로 연결`
- Slide 6: `실제 데이터가 아닌 sanitized mock으로 설명합니다`

### Package C. Transparency Post

- Format: 4:5 feed 또는 carousel 3장
- 목적: 루아가 AI virtual creator임을 명확히 고지
- Caption 핵심:
  - 루아는 생성형 AI 캐릭터
  - 실제 직원/고객/광고주가 아님
  - 공개물은 mock visual과 승인된 메시지만 사용
  - 최종 판단과 승인은 사람이 수행

### Package D. Stories

- Story 1: `Lua is live` plus AI disclosure
- Story 2: `What is AdMate?` short one-liner
- Story 3: Poll: `어떤 업무 설명이 먼저 궁금한가요?` options `검수`, `캡처`, `예측 가설`
- Story 4: `Actual posting and account actions are human-approved`

## 11. 월간 운영 루틴

### 11.1 Weekly Rhythm

| 요일 | 작업 | 산출물 | Owner |
|---|---|---|---|
| 월 | content planning | 다음 2주 topic list, 위험 소재 제외 | producer/copy worker |
| 화 | asset/copy draft | caption, carousel outline, needed cuts | creative worker |
| 수 | QC/review | visual, copy, disclosure, brand safety checklist | reviewer/owner |
| 목 | scheduling prep | 게시 파일명, caption final, alt text, story sequence | operator |
| 금 | user publish/monitor | 실제 게시, 댓글 확인, insight snapshot | 사용자/계정 owner |

### 11.2 Monthly Cycle

1. 월초: 콘텐츠 캘린더와 제품 pillar 비중 확정
2. 1주차: 루아 profile/office routine post
3. 2주차: Compass/Sentinel 중심 교육형 carousel
4. 3주차: Lens/Foresight 중심 evidence/learning post
5. 4주차: Agent Core, recap, Q&A, 다음 달 topic teaser
6. 월말: insight review, 댓글/DM 리스크 검토, asset gap 재정리, prompt manifest 정리

### 11.3 운영 KPI

- 안전 KPI: disclosure 누락 0건, 실제 데이터 노출 0건, 미승인 게시 0건
- 콘텐츠 KPI: 저장, 공유, profile visit, website click, product post completion rate
- 학습 KPI: 반복 질문 유형, 다음 콘텐츠로 전환된 댓글/DM topic 수
- 품질 KPI: revise/reject 사유, face consistency failure 수, caption correction 수

## 12. AdMate 사무실/제품 소개 영상 로드맵

### 12.1 목표

루아가 sanitized office에서 AdMate를 사용하는 흐름을 보여주되, 실제 사무실, 실제 화면, 실제 계정, 실제 고객 데이터를 노출하지 않는다.

### 12.2 30초 Reels 로드맵

| Time | Scene | Visual | Copy |
|---:|---|---|---|
| 0-3s | Disclosure | title card plus 루아 closeup | `AI-generated virtual creator` |
| 3-7s | Office setup | 루아 at generic desk | `광고 운영은 반복 확인과 판단이 함께 움직입니다.` |
| 7-12s | Compass | mock brief to policy card | `Compass가 먼저 확인할 기준을 정리합니다.` |
| 12-17s | Sentinel | checklist card | `Sentinel은 세팅과 이상 신호를 점검합니다.` |
| 17-22s | Lens | sanitized capture card | `Lens는 근거를 비식별 기준으로 남깁니다.` |
| 22-27s | Foresight | hypothesis chart, no numbers | `Foresight는 다음 판단의 가설을 제안합니다.` |
| 27-30s | Closing | 루아 soft smile plus Agent Core loop | `최종 판단은 사람이 합니다.` |

### 12.3 60-90초 Product Intro 로드맵

- Opening: 루아가 가상 캐릭터임을 고지
- Problem: 반복 확인, 정책/가이드, 검수, 캡처, 회고가 분산되는 상황
- Product flow: Compass -> Sentinel -> Lens -> Foresight -> Agent Core
- Office visual: 모두 sanitized mock, no real dashboard
- Closing: `AdMate는 미디어플래너를 대체하지 않고, 판단에 필요한 근거를 정리합니다.`

### 12.4 제작 전 blocker

- [ ] AdMate brand-approved visual tokens 확보
- [ ] office/mock UI frame spec 확정
- [ ] 루아 공식 profile/office 컷 생성 및 QC 완료
- [ ] disclosure 문구와 caption placement 승인
- [ ] legal/brand/security review 완료
- [ ] 사용 음악, 폰트, 영상 template 라이선스 확인
- [ ] 계정 owner가 최종 게시 승인

## 13. 사용자 직접 수행 작업

아래 항목은 자동화하거나 대리 수행하지 않는다. 사용자가 직접 로그인된 기기와 공식 UI에서 처리한다.

| 항목 | 사용자 직접 수행 이유 |
|---|---|
| Instagram 계정 생성 | 휴대폰/이메일 인증, 서비스 약관 동의, 계정 소유권이 필요 |
| 로그인, 2FA, 휴대폰 인증 | 인증정보와 보안 코드는 사용자만 입력 |
| 비밀번호, token, cookie, session, recovery code 입력 | repo나 문서에 절대 저장/공유하지 않음 |
| Instagram handle 사용 가능 여부 확인 | 실제 플랫폼 UI에서만 확정 가능 |
| Profile photo, bio, link 최종 적용 | 계정 owner 권한 필요 |
| 게시물 업로드와 실제 게시 클릭 | 공개 배포 행위이므로 final approval 필요 |
| 댓글/DM 답변 중 민감한 문의 처리 | 브랜드/법무/고객정보 리스크가 있음 |
| 광고/비즈니스 계정 연결 | Meta Business, payment, page 권한, ad account 소유권이 필요 |
| 광고/브랜드 협업 전환 승인 | Meta 광고용 GenAI 투명성 기준, 협찬/광고 표기, 브랜드 세이프티 검토가 별도로 필요 |
| 최종 승인 | 브랜드, 법무, 보안, 제품 owner 승인 필요 |

## 14. 투명성, 권리, 브랜드 세이프티 체크리스트

### 14.1 AI 생성/가상 인물 투명성

- [ ] Meta Newsroom 기준을 반영해, Instagram/Facebook/Threads에서 AI 생성 또는 AI로 변경된 콘텐츠에는 `AI info` 라벨/정보가 붙을 수 있음을 운영 문서에 기록한다.
- [ ] 산업 표준 AI 신호가 감지되거나 사용자가 AI 생성임을 직접 공개하는 경우 라벨/정보가 제공될 수 있으므로, 게시 전 플랫폼 UI의 AI disclosure 항목을 사용자가 직접 확인한다.
- [ ] profile bio에 AI virtual creator임을 표시한다.
- [ ] 첫 게시물과 pinned/intro 성격 게시물에 실제 인물이 아님을 명시한다.
- [ ] Reels/영상에는 시작 또는 종료에 AI-generated virtual creator 고지를 넣는다.
- [ ] photorealistic image/video/audio, 특히 실제 인물처럼 보이는 루아 컷은 운영 문서와 게시 설명 모두에 `AI-generated virtual presenter` 또는 동등한 한국어 고지를 넣는다.
- [ ] 게시 caption, 영상 내 자막, profile/highlight 중 최소 2곳에서 루아가 실제 인물이 아님을 확인할 수 있게 한다.

### 14.2 초상/저작권

- [ ] 실제 인물, 임직원, 고객, 유명인 reference를 사용하지 않았다.
- [ ] 제3자 이미지, 음악, 폰트, template, logo, 장소, 상표의 사용권을 확인했다.
- [ ] 기존 PNG의 생성 출처와 사용 가능 범위를 내부적으로 기록했다.
- [ ] 실제 장소명, 상호, 간판, 도로명, 건물명을 공개물에서 제거하거나 사용하지 않는다.
- [ ] 루아가 특정 상품을 추천, 사용 후기, endorsement하는 것처럼 보이지 않는다.

### 14.3 브랜드 세이프티

- [ ] AdMate는 사람의 최종 판단을 대체한다고 말하지 않는다.
- [ ] 성과 개선, ROI, 오류 방지를 보장하지 않는다.
- [ ] 실제 캠페인, 광고주, 계정, 내부 화면, 예산, 성과 수치를 쓰지 않는다.
- [ ] AI가 승인 없이 자동 집행/학습한다고 표현하지 않는다.
- [ ] 댓글/DM 답변은 승인된 message library 범위 안에서만 한다.
- [ ] 광고, 협찬, 브랜드 협업 콘텐츠로 전환할 경우 organic post 기준만으로 승인하지 않고 별도 광고/브랜드 세이프티 review를 연다.

### 14.4 Security And Credential Hygiene

- [ ] secret, env, token, cookie, session, password, recovery code, 2FA code를 문서, prompt, issue, commit message에 쓰지 않는다.
- [ ] 계정 설정 화면, 광고 계정 화면, 결제 화면, Business Manager 화면을 캡처하지 않는다.
- [ ] 외부 AI 도구에 내부 문서, private URL, 계정 정보, 고객 자료를 입력하지 않는다.
- [ ] 게시 전 `git diff --check`와 민감정보 키워드 검색을 수행한다.

### 14.5 Ads And Brand Collaboration Gate

- [ ] 게시물을 boost, sponsored post, paid partnership, brand collaboration, ad creative로 전환할지 여부를 사용자가 직접 승인한다.
- [ ] 광고 소재에 생성형 AI로 만들었거나 크게 수정한 이미지/영상이 포함되는지 확인한다.
- [ ] 광고 소재에 AI-generated photorealistic human이 포함되는 경우, Meta 광고 상품의 AI 라벨/투명성 기준을 별도로 검토한다.
- [ ] Meta의 광고용 GenAI 투명성 기준은 organic post의 AI disclosure와 별도 gate로 취급한다.
- [ ] 브랜드 협업 문구, 협찬/광고 표기, 제품 claim, 비교 claim, 성과 claim은 brand/legal owner가 승인한다.
- [ ] 광고 계정, payment, Business Manager, Pixel, audience, campaign setting은 사용자 또는 계정 owner가 공식 UI에서 직접 처리한다.

## 15. 참고한 외부 기준

정책과 플랫폼 기능은 변할 수 있으므로, 실제 게시 직전 사용자가 Instagram/Meta 공식 UI에서 최신 상태를 재확인한다.

- Meta, AI-generated/manipulated media labeling approach: https://about.fb.com/ko/news/2024/04/our-approach-to-labeling-ai-generated-content-and-manipulated-media/
- Meta, AI-generated/manipulated media labeling approach: https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/
- Meta, GenAI transparency for ads products: https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/
- Meta, labeling AI-generated images on Facebook, Instagram and Threads: https://about.fb.com/news/2024/02/labeling-ai-generated-images-on-facebook-instagram-and-threads/
- Instagram Help, professional accounts overview: https://www.facebook.com/help/instagram/138925576505882
- Instagram Help, connecting a professional Instagram account to a Facebook Page: https://www.facebook.com/help/instagram/402748553849926

## 16. 다음 액션

1. 사용자 승인: 루아를 AdMate 공식/준공식 AI virtual creator로 사용할지 결정
2. 사용자 승인: handle 후보와 bio 방향 선택
3. 제작 준비: 부족 컷 P0부터 생성 계획 확정
4. 운영 준비: first 9-grid의 게시 순서, caption, disclosure final review
5. 계정 owner 실행: 계정 생성, 인증, profile 적용, 실제 게시
