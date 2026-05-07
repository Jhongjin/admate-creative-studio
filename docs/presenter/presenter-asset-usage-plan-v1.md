# Presenter Asset Usage Plan v1

작성일: 2026-05-07
상태: Gate Creative-Studio-4 draft
용도: `AI Influencer/` PNG asset을 임원용/플래너용 영상에서 안전하게 사용하는 기준

## Safety Boundary

- 이 문서는 asset usage plan이며 이미지 편집, 영상 생성, 외부 AI API 호출 지시서가 아니다.
- `AI Influencer/` PNG는 read-only reference로만 사용한다.
- 이미지 수정, 삭제, 이동, 리네이밍, 압축, 업로드를 하지 않는다.
- 이미지/영상/음성 asset은 git stage 또는 commit 대상에 포함하지 않는다.
- Presenter는 실제 인물 imitation이 아니라 AdMate 설명을 위한 가상 브랜드 캐릭터다.
- 실제 내부 화면, 캠페인명, 광고주명, 계정 정보, 성과 수치, 민감 데이터는 사용하지 않는다.

## Usage Principle

AI presenter는 영상의 중심 인물이 아니라 메시지를 안정적으로 안내하는 가상 설명자다. 임원용 영상에서는 opening과 closing에 짧게 등장하고, 제품 설명 구간은 diagram과 product card를 중심으로 구성한다. 플래너용 영상에서는 친근한 guide 역할을 하되 실제 동료나 실제 직원처럼 보이지 않도록 disclosure와 제한된 연출을 유지한다.

## Representative Candidate Assets

| Asset | 분류 | 권장 사용 | 사용 방식 | Safety Note |
|---|---|---|---|---|
| `lua_master_face_v1.png` | master face, closeup | 얼굴 기준점, consistency reference | reference, still 후보 | 실제 인물처럼 보일 수 있으므로 가상 presenter 고지 필수 |
| `lua_brand_safe_profile_v1_ivory_shirt.png` | brand-safe profile, closeup | 임원용/플래너용 primary presenter | still, presenter shot reference | 가장 안정적이나 배경은 generic 처리 필요 |
| `lua_smile_v1_soft_window_blouse.png` | soft smile closeup | closing, soft handoff | still, expression reference | 표정은 절제해 사용하고 과한 influencer tone 금지 |
| `lua_video_01_scene_01_window_closeup.png` | video scene candidate, closeup | planner intro 또는 vertical cutdown reference | reference only | vertical crop, 배경 비식별 확인 필요 |
| `lua_video_01_scene_04_soft_smile.png` | video scene candidate, soft smile | planner closing 또는 social short reference | reference only | 의상/얼굴 continuity 확인 필요 |
| `lua_side_profile_left_v1_window_blouse_alt.png` | side profile | B-roll 느낌의 side narration 후보 | reference only | side-only라 identity 기준으로는 약함 |

## 보류/금지 후보

| Asset Group | 파일 예시 | 판단 | 이유 |
|---|---|---|---|
| Beauty/lipstick | `lua_beauty_lipstick_v1_closeup.png`, `lua_video_01_scene_03_lipstick_hand.png` | 보류 | 화장품 endorsement 또는 beauty ad처럼 보일 수 있음 |
| Mirror selfie/private UGC | `lua_mirror_selfie_v1_apartment_fullbody.png`, `lua_mirror_selfie_v1_apartment_alt.png` | 보류 | private apartment, phone selfie, UGC tone이 강함 |
| Street/fullbody with real place cue | `lua_fullbody_v1_hannam_street_blouse_charcoal_pants.png` | 보류 | 실제 장소/상호처럼 보이는 표지가 있어 공개 영상 위험 |
| Logo card mismatch | `lua_video_01_scene_05_logo_card.png`, `lua_video_01_scene_05_logo_card_alt.png` | 금지 | `Lua AI Lifestyle Muse`가 AdMate brand와 불일치 |
| Back view/support only | `lua_back_view_v1_window_blouse_alt.png`, `lua_back_view_v1_window_knit.png` | 제한 | 얼굴 기준이 없고 presenter identity가 약함 |
| Cream knit variants | `lua_angle_left_v1_cream_knit_alt.png`, `lua_angle_right_v1_cream_knit_alt.png` | 제한 | corporate tone보다 lifestyle tone이 강함 |

## Executive 5min Usage

### Recommended Role

- Opening disclosure 또는 "왜 AdMate인가" 질문 구간에 짧게 등장한다.
- AdMate 정의, 회사 경쟁력, closing에서만 presenter shot을 제한적으로 사용한다.
- Compass/Sentinel/Lens/Foresight 설명은 presenter보다 product card와 diagram 중심으로 구성한다.
- Agent Core, Openclaw, Hermes 설명은 technical diagram으로 처리하고 presenter는 voice-over 중심으로 둔다.

### Recommended Assets

- Primary: `lua_brand_safe_profile_v1_ivory_shirt.png`
- Face consistency: `lua_master_face_v1.png`
- Closing expression: `lua_smile_v1_soft_window_blouse.png`

### Avoid

- 과한 감정 표현, influencer pose, beauty product scene.
- mirror selfie 또는 실제 장소가 보이는 fullbody scene.
- 실제 임원/직원처럼 직함을 부여하는 연출.
- presenter가 제품 전체를 "직접 운영해본 사람"처럼 말하는 1인칭 경험담.

## Planner 90s Usage

### Recommended Role

- 친근한 guide로 등장하되 실제 동료나 실제 선배 플래너처럼 보이지 않게 한다.
- Scene 3의 AdMate 소개, Scene 4-6의 업무 시나리오 설명, Scene 9 closing에 제한적으로 사용한다.
- 정책 확인, 세팅 검수, 캡처/증빙, 예측/분석 구간은 product card와 workflow card를 중심으로 보여준다.
- 시작 또는 종료에 가상 presenter 고지를 유지한다.

### Recommended Assets

- Primary: `lua_brand_safe_profile_v1_ivory_shirt.png`
- Planner intro reference: `lua_video_01_scene_01_window_closeup.png`
- Planner closing reference: `lua_video_01_scene_04_soft_smile.png`
- Optional side reference: `lua_side_profile_left_v1_window_blouse_alt.png`

### Avoid

- "제가 실제 캠페인을 운영해보니" 같은 실제 경험담 표현.
- UGC selfie, lipstick scene, private room emphasis.
- 실제 광고주 화면이나 내부 운영 화면을 함께 배치하는 합성.

## Background Rules

- Generic studio, abstract office, sanitized mock background만 사용한다.
- 실제 사무실, 모니터, 문서, 사원증, 회의실 화면, 화이트보드, Slack/DB/API 화면은 금지한다.
- 도시 창밖 또는 거리 배경은 장소 식별 가능성을 확인한다.
- 최종 영상에서는 asset 원본 배경을 그대로 사용하는 대신 비식별 background 기준으로 다시 검수한다.

## Wardrobe and Expression Rules

- Ivory shirt/blouse 계열을 우선한다.
- Cream knit는 moodboard 또는 internal reference에만 제한한다.
- Lipstick, mirror selfie, street fashion tone은 공식 보고/교육 영상에서 제외한다.
- 표정은 neutral, calm, soft smile 범위로 제한한다.
- closing에서만 soft smile을 사용하고, product 설명 구간에서는 과한 감정 표현을 피한다.

## Required Pre-production Checks

- [ ] 실제 인물 또는 실제 직원으로 오인될 가능성을 검토했다.
- [ ] 가상 presenter disclosure가 영상 시작 또는 종료에 있다.
- [ ] 배경에 내부 화면, 캠페인명, 광고주명, 계정 정보, 성과 수치, 문서, 개인정보가 없다.
- [ ] 의상과 표정이 AdMate corporate tone과 일관된다.
- [ ] beauty/lipstick, mirror selfie, street sign, non-AdMate logo card가 사용되지 않았다.
- [ ] `AI Influencer/` 원본 PNG를 수정, 삭제, 이동, 리네이밍하지 않았다.
- [ ] 이미지/영상/음성 asset을 git stage하지 않았다.

## Stop Conditions

다음 중 하나라도 해당하면 제작 또는 배포를 중단한다.

- Presenter가 실제 임직원, 고객, 광고주 담당자처럼 보인다.
- Presenter가 실제 경험담이나 실제 캠페인 운영 후기를 말한다.
- 원본 asset 또는 변형 asset이 commit 대상에 들어간다.
- 배경에 실제 내부 정보나 실제 장소/상호가 보인다.
- 영상 설명에서 AI-generated virtual presenter임을 알 수 없다.
