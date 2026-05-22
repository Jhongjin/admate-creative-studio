# Lua Asset Planning Result v1

작성일: 2026-05-23
대상 폴더: `D:\Projects\AdMate\admate-creative-studio\AI Influencer`
상태: read-only inventory and planning review

## 1. 결론

- 현재 폴더에는 PNG 27개가 있고 영상 파일은 없다.
- 모든 PNG는 루아의 얼굴, 표정, 의상, 세로 영상 무드보드 reference로는 충분하다.
- 바로 공개물에 쓰기 좋은 후보는 정면/소프트 스마일/아이보리 셔츠 계열이다.
- mirror selfie, lipstick, street sign, `Lua AI Lifestyle Muse` 로고 카드는 공개물보다는 내부 moodboard 또는 재제작 reference로 제한한다.
- 첫 Instagram 게시와 향후 AdMate 소개 영상에는 기존 이미지를 그대로 쓰기보다, 기존 컷을 identity reference로 삼아 `generic office`, `sanitized mock visual`, `AI virtual creator` 고지가 포함된 신규 컷을 만드는 편이 안전하다.

기존 상세 문서는 유지한다.

- `docs/references/ai-influencer-asset-inventory-v1.md`
- `docs/production/lua-instagram-launch-pack-v1.md`
- `docs/prompts/lua-office-admate-shot-prompt-pack-v1.md`

## 2. Asset Inventory Readback

| 그룹 | 파일 수 | 대표 파일 | 해상도 | 판단 |
|---|---:|---|---|---|
| Master / identity | 1 | `lua_master_face_v1.png` | 1122x1402 | 얼굴 기준점으로 우선 사용 |
| Brand-safe profile | 1 | `lua_brand_safe_profile_v1_ivory_shirt.png` | 1122x1402 | 프로필/첫 게시 후보 |
| Left/right angle | 4 | `lua_angle_left_v1_ivory_blouse.png` | 1122x1402 | 3/4 reference로 유용 |
| Side / back profile | 4 | `lua_side_profile_left_v1_window_blouse_alt.png` | 1122x1402 | B-roll reference, 얼굴 기준은 약함 |
| Closeup / smile | 2 | `lua_smile_v1_soft_window_blouse.png` | 1122x1402 | friendly outro 후보 |
| Beauty / lipstick | 2 | `lua_beauty_lipstick_v1_closeup.png` | 1122x1402 | AdMate 공개물에서는 제외 권장 |
| Fullbody / street | 1 | `lua_fullbody_v1_hannam_street_blouse_charcoal_pants.png` | 1024x1536 | 장소/상호처럼 보이는 배경 주의 |
| Mirror selfie | 2 | `lua_mirror_selfie_v1_apartment_fullbody.png` | 1122x1402 | 개인 계정처럼 보여 공식 톤에는 제한 |
| Vertical storyboard still | 10 | `lua_video_01_scene_01_window_closeup.png` | 941x1672 | Reels/Stories 무드보드에 적합 |

## 3. Style Board

### 루아 기본 인상

- 20대 중후반 한국 여성형 AI virtual creator.
- 긴 다크 브라운 헤어, 자연스러운 메이크업, 차분한 표정.
- 아이보리 셔츠/블라우스와 차콜 팬츠 계열이 AdMate 설명용 톤에 가장 맞다.
- 창가 자연광과 밝은 실내 배경이 안정적이다.

### 시각 방향

- 키워드: calm office, practical AI guide, soft daylight, business casual, clean desk.
- 배경: 실제 사무실이 아닌 generic office, 무표식 회의실, 비식별 노트북 화면.
- 색감: ivory, warm white, soft gray, charcoal, muted blue/green product accent.
- 텍스트: 짧은 한국어 label + 제품명은 Compass, Sentinel, Lens, Foresight, Agent Core 유지.

### 피해야 할 방향

- beauty product endorsement처럼 보이는 lipstick 컷.
- bedroom/private apartment처럼 보이는 mirror selfie.
- 실제 장소 또는 상호가 읽히는 street 컷.
- `Lua AI Lifestyle Muse`처럼 AdMate와 분리된 별도 브랜드 톤.
- 실제 직원 후기처럼 읽히는 1인칭 경험담.

## 4. Missing Shot List

| 우선순위 | 필요한 컷 | 용도 | 제작 기준 |
|---:|---|---|---|
| P0 | 공식 profile headshot 1:1, 4:5, 9:16 | Instagram profile, 첫 게시, Reel cover | 아이보리 셔츠, generic office, 얼굴 safe crop |
| P0 | disclosure card | 첫 9-grid, Highlight `AI Note` | `루아는 실제 인물이 아닙니다`를 숨기지 않음 |
| P0 | AdMate product card set | Compass/Sentinel/Lens/Foresight 소개 | 실제 데이터 없는 카드형 mock visual |
| P0 | office desk with sanitized laptop | office routine post, 영상 V02 | 화면은 `Mock Dashboard` 수준, 실제 UI 금지 |
| P0 | over-shoulder mock dashboard | AdMate 사용/소개 영상 | 루아는 측면/후면, 화면은 비식별 카드 |
| P1 | keyboard/notebook hand detail | 업무 루틴 B-roll | 손 artifact, 브랜드 소품, 문서 노출 검수 |
| P1 | explaining gesture shot | Reels speaking frame | 손/입 모양 artifact 확인 |
| P1 | Agent Core loop diagram | Agent Core 설명 | DB/API/log처럼 보이는 내부 구조 표현 금지 |
| P1 | highlight cover set | Instagram profile 정리 | Intro, AdMate, Office, Glossary, AI Note |

## 5. First Instagram Post

첫 게시물은 제품 설명보다 정체성 고지를 먼저 하는 편이 안전하다.

### 권장 포맷

- 4:5 feed 1장과 9:16 Reel cover를 함께 준비.
- 이미지: `lua_brand_safe_profile_v1_ivory_shirt.png` 또는 `lua_master_face_v1.png`를 identity reference로 한 신규 profile headshot.
- 이미지 내 라벨: `AI virtual creator`.
- 하단 작은 문구: `Lua by AdMate`.

### Caption 초안

```text
안녕하세요, 루아입니다.
저는 AdMate를 설명하기 위해 생성형 AI로 제작한 AI virtual creator예요. 실제 인물 또는 임직원이 아닙니다.

앞으로 광고 운영에서 반복되는 정책 확인, 세팅 점검, 캡처 기록, 성과 예측을 차분하게 소개할게요.
최종 판단과 승인은 언제나 사람이 수행합니다.
```

### Alt Text 초안

```text
밝은 비식별 사무실 분위기에서 아이보리 셔츠를 입은 루아 AI virtual creator가 정면을 바라보는 프로필 이미지. 실제 인물이 아닌 생성형 AI 캐릭터임을 알리는 문구가 함께 배치되어 있다.
```

### Hashtag

`#AdMate #루아 #AIvirtualcreator #광고운영 #AI에이전트`

## 6. Future AdMate Intro Video Concept

### 목적

루아가 AdMate를 사용하는 장면을 통해 네 플랫폼이 하나의 운영 과정으로 연결된다는 점을 보여준다. 실제 내부 화면, 실제 광고주명, 실제 캠페인명, 실제 성과 수치는 쓰지 않는다.

### 30초 Reels 구성

| Time | Scene | 화면 | 핵심 문구 |
|---:|---|---|---|
| 0-3s | Disclosure open | 루아 closeup 또는 clean title card | `AI-generated virtual creator` |
| 3-6s | Office setup | generic desk, 노트북 열기 | `광고 운영은 반복 확인과 판단이 함께 움직입니다.` |
| 6-10s | Compass | Demo Brief -> Guide Source 카드 | `먼저 확인할 기준을 정리합니다.` |
| 10-14s | Sentinel | setup checklist, Needs review 카드 | `세팅과 이상 신호를 점검합니다.` |
| 14-18s | Lens | sanitized capture tile | `캡처 기록을 안전하게 남깁니다.` |
| 18-23s | Foresight | 숫자 없는 trend/hypothesis 카드 | `다음 판단의 가설을 제안합니다.` |
| 23-27s | Agent Core | 네 제품 연결 diagram | `하나의 운영 기억으로 연결합니다.` |
| 27-30s | Closing | 루아 soft smile | `최종 판단은 사람이 합니다.` |

### 제작 안전 기준

- 영상 시작 3초 안에 루아가 AI virtual creator임을 고지한다.
- 모든 화면은 `sanitized mock visual`로 만든다.
- 실제 dashboard, Slack, GitHub, DB, 계정, 결제, 내부 URL 화면을 넣지 않는다.
- 성과 보장, 자동 승인, 사람 없는 운영처럼 들리는 문구를 쓰지 않는다.

## 7. 사용자 확인 필요

- 루아를 AdMate 공식 또는 준공식 AI virtual creator로 사용할지.
- 계정명과 handle 후보.
- Instagram에 실제 게시할 채널이 AdMate 공식 계정인지 별도 Lua 계정인지.
- 첫 게시를 1장 이미지로 시작할지, 3장 carousel로 시작할지.
- AdMate brand token, 로고 사용 범위, 고지 문구 최종안.
