# Lua Office AdMate Shot Prompt Pack v1

작성일: 2026-05-19
대상 repo: `D:\Projects\AdMate\admate-creative-studio`
원본 asset folder: `D:\Projects\AdMate\admate-creative-studio\AI Influencer`
상태: image generation prompt pack, documentation only

## 0. 공통 경계

- 이 문서는 이미지/영상 asset 추가 제작을 요청하기 위한 prompt pack이다. 실제 생성, 업로드, 계정 인증, 게시를 수행하지 않는다.
- `AI Influencer/` PNG는 read-only identity/style reference다. 수정, 이동, 삭제, 리네임, 압축 금지.
- 루아는 실제 인물, 임직원, 고객, 광고주 담당자, 유명인, 외부 인플루언서를 imitate하지 않는다.
- 실제 사무실, 실제 내부 화면, 실제 제품 화면, 실제 고객 데이터, 실제 브랜드 상표, 주소, 사원증, 화이트보드, 문서, 계정 정보는 넣지 않는다.
- 모든 dashboard, chart, card, text는 sanitized mock visual로만 만든다.
- Prompt 안에 secret, token, cookie, internal URL, 고객명, 캠페인명, 계정 ID, 성과 수치, 개인 정보를 넣지 않는다.

## 1. 공통 Character Lock

아래 character lock을 모든 루아 등장 prompt 앞에 붙인다.

```text
Lua, a Korean female AI virtual creator in her late 20s, calm and practical expression, long dark brown hair, natural makeup, ivory shirt or ivory blouse, charcoal or black minimal business casual styling, soft daylight, professional but not luxury, not a real person, not an employee, not a celebrity, not an influencer imitation
```

권장 identity reference:

- `lua_brand_safe_profile_v1_ivory_shirt.png`
- `lua_master_face_v1.png`
- `lua_smile_v1_soft_window_blouse.png`
- `lua_angle_left_v1_ivory_blouse.png`
- `lua_angle_right_v1_ivory_blouse.png`

Avoid reference:

- lipstick/beauty product scenes
- mirror selfie scenes
- Hannam street fullbody scene
- existing `Lua AI Lifestyle Muse` logo card

## 2. 공통 Negative Prompt

```text
real person imitation, celebrity likeness, employee portrait, customer portrait, client logo, third-party trademark, visible brand logo, office ID badge, address, street sign, readable whiteboard, confidential document, real dashboard screenshot, real ad account, real campaign name, real customer data, budget number, performance metric, email address, phone number, API key, token, password, login screen, payment screen, social media UI, Slack UI, GitHub UI, Vercel UI, database console, distorted hands, extra fingers, garbled text, pseudo-language, beauty endorsement, lipstick product, luxury influencer styling, bedroom selfie, mirror selfie
```

## 3. Mock UI Text Rules

허용 text만 사용한다. 생성 도구가 글자를 정확히 만들기 어렵다면 text 없는 card로 생성하고, 텍스트는 후반 편집에서 별도 삽입한다.

허용 text:

- `AdMate`
- `Compass`
- `Sentinel`
- `Lens`
- `Foresight`
- `Agent Core`
- `Demo Brief`
- `Mock Dashboard`
- `Sanitized mock visual`
- `Guide Source`
- `Needs review`
- `Human check`
- `Approval gate`
- `Sanitized capture`
- `Capture note`
- `Hypothesis`
- `Learning candidate`
- `AI-generated virtual creator`

금지 text:

- 실제 고객명, 광고주명, 캠페인명, 매체명
- 실제 성과 수치, 예산, 계정 ID, 내부 URL
- 실제 임직원명, 이메일, 전화번호, 주소
- `guaranteed`, `auto approved`, `no human review`, `real dashboard`, `real client`

## 4. Prompt Pack

### P0-01. Profile Headshot

| 항목 | 내용 |
|---|---|
| 용도 | Instagram profile, LIG-01 feed, Reel cover, highlight source |
| 비율 | 1:1, 4:5, 9:16 safe crop |
| Positive prompt | `Lua, a Korean female AI virtual creator in her late 20s, calm and practical expression, long dark brown hair, natural makeup, ivory shirt, clean generic bright office background with no readable text, soft daylight, professional profile headshot, direct eye contact, neutral soft smile, realistic but clearly created as a virtual brand character, minimal composition, no accessories except small neutral earrings, high detail, clean skin texture, editorial corporate portrait` |
| Negative prompt add-on | `no real employee badge, no company office signage, no customer logo, no beauty product, no private apartment, no mirror selfie, no street sign` |
| Composition | 얼굴과 어깨 중심. 눈은 상단 1/3 근처. Background는 식별 불가능한 밝은 office blur. 텍스트 삽입 공간은 상단 좌측 또는 하단. |
| Safety note | 실제 직원 portrait처럼 보이지 않도록 caption/profile에 AI virtual creator 고지 필수. |
| Output names | `lua_profile_headshot_p0_square_v1`, `lua_profile_headshot_p0_feed45_v1`, `lua_profile_headshot_p0_reel916_v1` |

### P0-02. Sanitized Office Desk

| 항목 | 내용 |
|---|---|
| 용도 | LIG-08, 영상 V02 office setup, Story background |
| 비율 | 4:5, 9:16, 16:9 optional |
| Positive prompt | `generic modern Korean office desk, soft daylight, clean laptop with abstract blurred cards on screen, notebook, pen, unbranded coffee cup, neutral warm gray and white interior, no people, no readable documents, no company logos, no address, no ID badge, calm practical work atmosphere, realistic photography, clean composition, safe empty space for captions` |
| Negative prompt add-on | `no actual office name, no whiteboard writing, no employee badge, no real dashboard, no ad platform UI, no customer documents, no brand logos, no street view signs` |
| Composition | 노트북은 30-40% 크기, 화면은 abstract card만. Desk 위 document는 blank 또는 blurred. Caption safe area는 하단 20%. |
| Safety note | 실제 사무실처럼 특정 회사/위치가 식별되지 않아야 한다. |
| Output names | `lua_sanitized_office_desk_feed45_v1`, `lua_sanitized_office_desk_reel916_v1` |

### P0-03. Over-Shoulder Mock Dashboard

| 항목 | 내용 |
|---|---|
| 용도 | LIG-08, 영상 V03~V05 |
| 비율 | 9:16 우선, 4:5 crop |
| Positive prompt | `Lua, a Korean female AI virtual creator in her late 20s, long dark brown hair, ivory blouse, seated at a generic office desk, over-the-shoulder view looking at a laptop, laptop shows an abstract sanitized mock dashboard with simple cards and no real data, soft daylight, professional calm office scene, no readable private information, no real product screenshot, realistic cinematic vertical frame` |
| Mock UI brief | 화면에는 후반 편집 기준으로 `Demo Brief`, `Guide Source`, `Needs review`, `Human check` card만 넣는다. 생성 단계에서는 글자를 흐리게 두어도 된다. |
| Negative prompt add-on | `no real dashboard screenshot, no ad account, no customer names, no performance metrics, no budget, no login screen, no ID badge, no visible office logo, no address, no whiteboard text` |
| Composition | 루아의 얼굴은 측면/후면 일부만, laptop screen은 전체 frame의 35-45%. 화면 text가 너무 작거나 깨지면 후반 overlay로 처리. |
| Safety note | 실제 제품 화면처럼 보이지 않도록 `Sanitized mock visual` 라벨을 후반 편집에서 추가한다. |
| Output names | `lua_over_shoulder_mock_dashboard_reel916_v1`, `lua_over_shoulder_mock_dashboard_feed45_v1` |

### P0-04. Product Card Set

| 항목 | 내용 |
|---|---|
| 용도 | LIG-02, LIG-04~LIG-07, LIG-09 carousel |
| 비율 | 1:1, 4:5 |
| Positive prompt | `clean product card set for AdMate AI Agent platform, five separate cards named Compass, Sentinel, Lens, Foresight, Agent Core, ivory white background, charcoal typography placeholder, restrained muted blue and green accents, thin line icons, flat professional interface style, no gradients, no real screenshots, no customer data, no metrics, no logos except AdMate wordmark if approved, spacious layout for Korean text overlay` |
| Card content | Compass: `근거 확인 출발점`; Sentinel: `세팅 검수`; Lens: `비식별 캡처 기록`; Foresight: `예측 가설`; Agent Core: `운영 loop`. 한 카드당 1개 메시지만. |
| Negative prompt add-on | `no actual UI screenshot, no database schema, no API logs, no account IDs, no campaign data, no real brand logos, no performance guarantee` |
| Composition | 각 card는 개별 산출물과 5-card overview 두 가지로 제작. Text는 후반 편집을 우선한다. |
| Safety note | Foresight card에는 `Hypothesis, not guarantee`를 별도 버전으로 만든다. Agent Core card에는 `Human approval remains required`를 별도 버전으로 만든다. |
| Output names | `admate_product_cards_set_square_v1`, `admate_product_cards_set_feed45_v1`, `admate_agent_core_loop_feed45_v1` |

### P0-05. Disclosure Card

| 항목 | 내용 |
|---|---|
| 용도 | LIG-03, Story, Highlight `AI Note` |
| 비율 | 4:5, 9:16, 1:1 |
| Positive prompt | `minimal disclosure card for an AI virtual creator named Lua by AdMate, ivory white background, charcoal text placeholder, small circular profile icon placeholder, clean editorial layout, professional social media card, safe area for Korean headline, no decorative clutter, no real portrait required` |
| Required overlay text | `루아는 실제 인물이 아닙니다`, `AI-generated virtual creator`, `Sanitized mock visual only` |
| Negative prompt add-on | `no legal fine print wall, no fake certification badge, no government seal, no Meta logo, no third-party logo` |
| Composition | Headline 1개, subcopy 2줄 이하, 하단 작은 AdMate label. |
| Safety note | Disclosure를 흐리거나 장식처럼 숨기지 않는다. |
| Output names | `lua_disclosure_card_feed45_v1`, `lua_disclosure_card_story916_v1`, `lua_ai_note_highlight_cover_v1` |

### P0-06. Highlight Covers

| 항목 | 내용 |
|---|---|
| 용도 | Instagram profile highlights |
| 비율 | 1:1 |
| Positive prompt | `set of five minimal Instagram highlight covers for AdMate Lua AI virtual creator, clean ivory background, charcoal line icons, restrained muted accent colors, labels Intro, AdMate, Office, Glossary, AI Note, professional product education style, no gradients, no photos, no brand clutter` |
| Cover labels | `Intro`, `AdMate`, `Office`, `Glossary`, `AI Note` |
| Negative prompt add-on | `no fake badges, no app store icons, no third-party logos, no platform logos, no unreadable tiny text` |
| Composition | 각 cover는 icon 1개 + label 1개. 원형 crop에서 icon과 label이 잘리지 않도록 중앙 70% 안에 배치. |
| Safety note | `AI Note` cover는 투명성 고지 highlight로 연결한다. |
| Output names | `lua_highlight_intro_v1`, `lua_highlight_admate_v1`, `lua_highlight_office_v1`, `lua_highlight_glossary_v1`, `lua_highlight_ai_note_v1` |

## 5. Video Shot Prompt Briefs

아래 brief는 `docs/production/lua-instagram-launch-pack-v1.md`의 P0 shot list와 연결된다.

| Scene | Prompt brief | Required overlay | Negative focus |
|---|---|---|---|
| V01 Disclosure open | `Lua in generic office, calm closeup, soft daylight, direct camera, professional virtual presenter opening` | `AI-generated virtual creator` | real employee, real office logo |
| V02 Office setup | `Lua seated at sanitized desk, opening laptop, clean generic office, no readable documents` | `Sanitized mock visual` | ID badge, address, whiteboard, real screen |
| V03 Compass | `over-shoulder laptop mock cards, Demo Brief becomes Guide Source and Needs review` | `Compass: 근거 확인 출발점` | real brief, real policy text |
| V04 Sentinel | `abstract setup checklist and approval gate cards, hand near trackpad` | `Human approval required` | automatic approval, no human review |
| V05 Lens | `sanitized capture tile and capture note cards, abstract UI` | `No real account data` | actual screenshot, account ID |
| V06 Foresight | `Lua side profile with floating hypothesis card and trend shape without numbers` | `Hypothesis, not guarantee` | ROI guarantee, real metrics |
| V07 Agent Core | `full-screen loop diagram connecting Compass Sentinel Lens Foresight to Agent Core` | `Human approval remains required` | DB/API/log architecture detail |
| V08 Closing | `Lua soft smile closeup, faint product loop background, calm ending` | `최종 판단은 사람이 합니다` | employee testimonial, customer story |

## 6. QC Checklist For Generated Assets

- [ ] 루아가 20대 중후반 한국 여성형 AI virtual creator로 일관되게 보인다.
- [ ] 실제 인물, 임직원, 고객, 유명인 imitation처럼 보이지 않는다.
- [ ] 손, 손가락, 눈, 치아, 귀, 머리카락, 옷깃 artifact가 없다.
- [ ] 배경에 주소, 상호, 사원증, 화이트보드, 문서, 실제 화면, 제3자 브랜드가 없다.
- [ ] Dashboard는 실제 제품 screenshot이 아니라 abstract/sanitized mock으로 보인다.
- [ ] Text는 깨짐, pseudo-language, real-looking ID, real-looking metric이 없다.
- [ ] Caption safe area가 얼굴, 눈, 입, 주요 card를 가리지 않는다.
- [ ] 각 산출물은 manifest에 purpose, prompt summary, source note, QC result, approval status를 기록한다.
