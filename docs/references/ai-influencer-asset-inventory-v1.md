# AI Influencer Asset Inventory v1

작성일: 2026-05-06
대상 폴더: `AI Influencer/`
원칙: PNG 파일은 수정, 삭제, 이동, 리네이밍하지 않았다. 이 문서는 read-only inventory다.

## 전체 요약

- 총 PNG: 27개
- 기본 portrait still: 17개
- vertical video scene 후보: 10개
- 주요 캐릭터 실험명: `lua`
- 주요 톤: 젊은 여성형 가상 presenter, ivory/cream 상의, soft window light, apartment/studio/urban street 배경
- 가장 안전한 후보군: `lua_brand_safe_profile_v1_ivory_shirt.png`, `lua_master_face_v1.png`, `lua_smile_v1_soft_window_blouse.png`
- 최종 영상 전 보정 필요 후보군: mirror selfie, lipstick/beauty product, Hannam street, logo card

## 분류 기준

- Master face: 얼굴 기준점으로 쓸 수 있는 정면 reference.
- Closeup: 대화형 presenter, script reading, intro/outro에 쓸 수 있는 얼굴 중심 컷.
- Side profile / angle: B-roll 또는 motion reference에 적합한 측면/3/4 컷.
- Full body: wardrobe, posture, standing presenter reference.
- Video scene candidate: 9:16 vertical shot 또는 storyboard scene에 바로 대응되는 후보.
- Support only: 얼굴 기준점으로 쓰기 어렵거나 final asset으로 쓰기 전에 재검토가 필요한 컷.

## Inventory

| 파일명 | 크기 | 분류 | 사용 후보 | Brand-safe 판단 | 주요 리스크 |
|---|---:|---|---|---|---|
| `lua_master_face_v1.png` | 1122x1402 | Master face, closeup | 얼굴 기준점, executive intro | 높음 | 실제 인물처럼 보일 수 있어 AI 고지 필수, apartment/window 배경 |
| `lua_brand_safe_profile_v1_ivory_shirt.png` | 1122x1402 | Closeup, primary profile | 가장 안정적인 presenter 후보 | 높음 | 실제 직원 오인 가능성, 실내 배경 generic 처리 필요 |
| `lua_closeup_v1_soft_window_blouse_alt.png` | 1122x1402 | Closeup | planner/executive intro 보조 컷 | 중간-높음 | blouse와 shirt 차이, private room 느낌 |
| `lua_smile_v1_soft_window_blouse.png` | 1122x1402 | Closeup, expression | closing smile, friendly planner tone | 중간-높음 | 표정/의상 일관성 확인 필요 |
| `lua_angle_left_v1_ivory_blouse.png` | 1122x1402 | Side profile / angle | 3/4 motion reference | 중간 | angle 전환 시 얼굴 drift 확인 필요 |
| `lua_angle_left_v1_cream_knit_alt.png` | 1122x1402 | Side profile / angle | soft lifestyle moodboard | 중간 | knit 의상은 corporate tone과 다소 거리 있음 |
| `lua_angle_right_v1_ivory_blouse.png` | 1122x1402 | Side profile / angle | 3/4 motion reference | 중간 | blouse/shirt 혼용 시 wardrobe continuity 저하 |
| `lua_angle_right_v1_cream_knit_alt.png` | 1122x1402 | Side profile / angle | moodboard 보조 | 중간-낮음 | knit, apartment tone, final에는 제한 |
| `lua_side_profile_left_v1_window_blouse_alt.png` | 1122x1402 | Side profile | side narration, looking-out B-roll | 중간-높음 | 도시 창밖 배경, side view만으로 얼굴 기준 약함 |
| `lua_side_profile_left_v1_window_knit.png` | 1122x1402 | Side profile | lifestyle B-roll | 중간 | knit 의상과 profile-only reference 한계 |
| `lua_back_view_v1_window_blouse_alt.png` | 1122x1402 | Support only, body/back | transition B-roll | 낮음-중간 | 얼굴 없음, 캐릭터 식별 약함, interior 배경 |
| `lua_back_view_v1_window_knit.png` | 1122x1402 | Support only, body/back | lifestyle moodboard | 낮음 | 얼굴 없음, knit 의상, final 사용성 낮음 |
| `lua_fullbody_v1_hannam_street_blouse_charcoal_pants.png` | 1024x1536 | Full body | wardrobe/posture reference | 중간 | `HANNAM SEOUL` 등 실제 장소/상호처럼 보이는 표지, public release 전 제거 필요 |
| `lua_mirror_selfie_v1_apartment_fullbody.png` | 1122x1402 | Full body, support | wardrobe reference | 낮음-중간 | mirror selfie가 personal/UGC 톤, phone/room 반사 |
| `lua_mirror_selfie_v1_apartment_alt.png` | 1122x1402 | Support, mirror selfie | moodboard | 낮음 | private apartment 느낌, executive 영상에는 부적합 |
| `lua_beauty_lipstick_v1_closeup.png` | 1122x1402 | Closeup, product/beauty | beauty ad moodboard | 낮음-중간 | 특정 화장품/후기처럼 오인, AdMate corporate message와 거리 |
| `lua_beauty_lipstick_v1_hand_alt.png` | 1122x1402 | Closeup, product/hand | hand/product motion reference | 낮음-중간 | 손/제품 artifact, 상품 endorsement 오인 |
| `lua_video_01_scene_01_window_closeup.png` | 941x1672 | Video scene candidate, closeup | vertical intro scene | 중간 | 9:16 scene consistency, 실내 배경 비식별 필요 |
| `lua_video_01_scene_01_window_closeup_alt.png` | 941x1672 | Video scene candidate, closeup | vertical intro alt | 중간 | alt간 얼굴/의상 차이 확인 필요 |
| `lua_video_01_scene_02_side_window.png` | 941x1672 | Video scene candidate, side profile | vertical side B-roll | 중간 | side-only shot, 배경 식별 가능성 |
| `lua_video_01_scene_02_side_window_alt.png` | 941x1672 | Video scene candidate, side profile | vertical side alt | 중간 | profile drift, window/city background |
| `lua_video_01_scene_03_lipstick_hand.png` | 941x1672 | Video scene candidate, product/hand | beauty/lifestyle moodboard | 낮음 | lipstick product claim/endorsement 오인 |
| `lua_video_01_scene_03_lipstick_hand_alt.png` | 941x1672 | Video scene candidate, product/hand | beauty/lifestyle alt | 낮음 | 손/제품/얼굴 일관성 drift 가능 |
| `lua_video_01_scene_04_soft_smile.png` | 941x1672 | Video scene candidate, closeup/expression | friendly close, planner outro | 중간-높음 | vertical crop와 의상 continuity 확인 |
| `lua_video_01_scene_04_soft_smile_alt.png` | 941x1672 | Video scene candidate, closeup/expression | soft smile alt | 중간 | alt간 표정/얼굴 차이 확인 |
| `lua_video_01_scene_05_logo_card.png` | 941x1672 | Video scene candidate, logo card | title/end card concept | 조건부 | `Lua AI Lifestyle Muse`가 AdMate와 불일치, final에는 rebrand 필요 |
| `lua_video_01_scene_05_logo_card_alt.png` | 941x1672 | Video scene candidate, logo card | title/end card alt | 조건부 | `Created with generative AI` 고지는 유용하나 브랜드명 재검토 필요 |

## 추천 reference set

### Executive 5min

- Primary face: `lua_brand_safe_profile_v1_ivory_shirt.png`
- Backup face: `lua_master_face_v1.png`
- Friendly outro: `lua_smile_v1_soft_window_blouse.png`
- Avoid: lipstick, mirror selfie, Hannam street, Lua logo card

### Planner 90s

- Primary face: `lua_brand_safe_profile_v1_ivory_shirt.png`
- Motion reference: `lua_video_01_scene_01_window_closeup.png`, `lua_video_01_scene_04_soft_smile.png`
- Optional B-roll: side profile window scenes
- Avoid unless clearly marked as moodboard: lipstick/beauty product scenes

## 리스크 메모

- 초상권: 실제 인물 imitation은 아니지만 photorealistic한 젊은 여성형 얼굴이므로, 항상 가상 캐릭터 고지와 내부 출처 확인이 필요하다.
- 일관성: shirt, blouse, knit, lipstick, street, mirror selfie가 섞이면 하나의 presenter가 아니라 여러 lifestyle 컷처럼 보일 수 있다.
- 의상: ivory shirt/blouse가 가장 AdMate corporate tone에 맞다. cream knit와 beauty blouse는 외부 공식 영상에서는 제한한다.
- 배경: apartment, city window, Hannam street는 실제 장소처럼 보인다. 내부 사무실 합성 시에는 모든 화면/문서/얼굴/로고를 제거한 generic background만 허용한다.
- 표정: neutral, soft smile은 안전하다. beauty pose와 lipstick holding은 product endorsement나 광고 모델처럼 보일 수 있다.
- 브랜드: `Lua AI Lifestyle Muse`는 현재 AdMate 브랜드와 별개다. 최종 영상에는 AdMate-approved title card로 교체해야 한다.
