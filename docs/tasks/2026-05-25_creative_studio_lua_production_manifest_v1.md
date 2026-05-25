# 루아 제작 전 매니페스트 v1

작성일: 2026-05-25 (KST 기준)
대상 큐: 2026-05-25 Creative Studio Lua
대상 폴더: `D:\Projects\AdMate\admate-creative-studio\AI Influencer`
문서 역할: 이미지/영상 제작 전에 볼 인덱스와 체크리스트

## 0. 작업 경계

- 이 문서는 제작 전 정리 문서다.
- 외부 API 호출, 영상 생성 코드 작성, 실제 이미지 생성, 계정 생성, 게시 작업은 하지 않는다.
- `AI Influencer/`의 PNG 원본은 수정, 삭제, 이동, 압축, 리네임하지 않는다.
- 기존 PNG는 루아의 얼굴, 의상, 표정, 톤을 맞추기 위한 읽기 전용 참고 이미지로만 본다.
- 실제 공개물에는 필요한 경우 새로 만든 안전한 예시 화면을 사용한다.
- 세부 문안과 제작 프롬프트는 기존 문서를 따르고, 이 문서는 최종 실행 순서를 빠르게 확인하는 용도다.

## 1. 현재 에셋 상태

- 현재 확인된 PNG는 총 27개다.
- 기본 portrait still은 17개, vertical storyboard 후보는 10개다.
- 가장 안정적인 방향은 아이보리 셔츠/블라우스, 차분한 정면 또는 소프트 스마일, 밝은 비식별 실내 배경이다.
- 루아는 AdMate를 설명하는 AI 가상 인물이다.
- 실제 임직원, 고객, 광고주 담당자, 외부 인플루언서처럼 다루지 않는다.
- 공개물에는 `AI virtual creator` 또는 동등한 한국어 고지를 넣는다.
- 내부 화면, 고객명, 캠페인명, 성과 수치, 계정 정보는 어떤 형태로도 노출하지 않는다.

## 2. 바로 사용 가능한 에셋 그룹

| 그룹 | 파일 예시 | 쓰임 | 사용 기준 |
|---|---|---|---|
| Primary profile | `lua_brand_safe_profile_v1_ivory_shirt.png` | 첫 게시, 프로필, 표지 참고 | AI 고지를 함께 넣고, 실제 직원처럼 소개하지 않는다. |
| Master face | `lua_master_face_v1.png` | 얼굴 기준점, 정면 참고 | 새 headshot 제작 시 정체성 기준으로만 우선 사용한다. |
| Soft smile | `lua_smile_v1_soft_window_blouse.png` | 친근한 마무리 컷 참고 | 표정은 안전하나 의상 일관성을 확인한다. |
| Ivory angle | `lua_angle_left_v1_ivory_blouse.png`, `lua_angle_right_v1_ivory_blouse.png` | 3/4 shot, 사무실 장면 참고 | 측면 컷은 보조 장면 성격으로 쓴다. |
| Vertical intro/smile | `lua_video_01_scene_01_window_closeup.png`, `lua_video_01_scene_04_soft_smile.png` | Reels 분위기 보드, 9:16 crop 참고 | 최종 영상에는 새 사무실 예시 컷을 별도 제작한다. |

## 3. 주의 또는 보류 에셋 그룹

| 그룹 | 파일 예시 | 판단 | 이유 |
|---|---|---|---|
| Mirror selfie | `lua_mirror_selfie_v1_apartment_fullbody.png`, `lua_mirror_selfie_v1_apartment_alt.png` | 보류 | 개인 계정, 사적 공간, 셀피 톤이 강하다. |
| Lipstick / beauty | `lua_beauty_lipstick_v1_closeup.png`, `lua_video_01_scene_03_lipstick_hand.png` | 공개물 제외 권장 | 화장품 후기나 beauty endorsement처럼 보일 수 있다. |
| Hannam street | `lua_fullbody_v1_hannam_street_blouse_charcoal_pants.png` | 직접 사용 금지 | 실제 장소나 상호처럼 보이는 표식이 있다. |
| Back view | `lua_back_view_v1_window_blouse_alt.png`, `lua_back_view_v1_window_knit.png` | 보조 참고 | 얼굴 식별이 약하고 캐릭터 기준점으로 쓰기 어렵다. |
| Logo card | `lua_video_01_scene_05_logo_card.png`, `lua_video_01_scene_05_logo_card_alt.png` | 재제작 필요 | `Lua AI Lifestyle Muse` 문구가 AdMate 방향과 맞지 않는다. |
| Cream knit | `lua_angle_left_v1_cream_knit_alt.png`, `lua_side_profile_left_v1_window_knit.png` | 제한 | AdMate 공식 설명 톤보다 lifestyle 느낌이 강하다. |

## 4. 첫 인스타 포스팅 추천안

### 추천 방향

- 첫 게시물은 제품 설명보다 루아의 정체성 고지를 먼저 한다.
- 포맷은 4:5 feed 1장 우선, 9:16 Reel cover를 함께 준비한다.
- 이미지는 새 profile headshot을 제작하고, 기존 PNG는 정체성 참고 이미지로만 쓴다.
- 배경은 밝은 generic office 또는 비식별 창가 실내로 둔다.
- 화면 안에는 `AI virtual creator` 라벨과 `Lua by AdMate` 정도만 넣는다.
- 얼굴, 눈, 입을 텍스트로 가리지 않는다.

### 권장 게시 문안

```text
안녕하세요, 루아입니다.
저는 AdMate를 설명하기 위해 생성형 AI로 제작한 AI virtual creator예요. 실제 인물 또는 임직원이 아닙니다.

앞으로 광고 운영의 반복 확인, 검수, 캡처, 학습 흐름을 차분하게 소개할게요.
최종 판단은 언제나 사람이 합니다.
```

### 첫 게시 전 확인

- [ ] caption 첫 2줄 안에 AI 가상 인물 고지가 있다.
- [ ] 이미지 안에도 `AI virtual creator` 라벨이 보인다.
- [ ] 실제 제품 화면, 고객 데이터, 계정 정보가 없다.
- [ ] 루아가 실제 직원의 자기소개처럼 말하지 않는다.
- [ ] Hashtag는 5~6개 안에서 `#AdMate`, `#루아`, `#AIvirtualcreator`, `#광고운영`, `#AI에이전트` 중심으로 둔다.
- [ ] Meta/Instagram의 AI 관련 표시 항목은 사용자가 게시 전에 직접 확인한다.

## 5. 향후 AdMate 소개 영상 콘셉트

목표는 루아가 AdMate의 운영 흐름을 차분히 소개하는 30초 Reels다.
제품 화면은 실제 화면이 아니라 비식별 예시 화면으로만 만든다.

| 구간 | 장면 | 핵심 메시지 |
|---:|---|---|
| 0-3초 | 루아 closeup 또는 고지 card | `AI-generated virtual creator` |
| 3-6초 | generic office desk | 광고 운영은 반복 확인과 판단이 함께 움직인다. |
| 6-10초 | Compass mock card | 먼저 확인할 기준을 정리한다. |
| 10-14초 | Sentinel checklist | 세팅과 이상 신호를 다시 본다. |
| 14-18초 | Lens capture note | 필요한 기록을 비식별 기준으로 남긴다. |
| 18-23초 | Foresight hypothesis | 예측은 성과 약속이 아니라 다음 판단의 가설이다. |
| 23-27초 | Agent Core loop | 네 Agent가 하나의 운영 흐름으로 이어진다. |
| 27-30초 | 루아 soft smile | 최종 판단은 사람이 한다. |

영상 톤은 실무 안내에 가깝게 둔다.
성과 보장, 자동 승인, 사람 없는 운영처럼 들리는 문장은 쓰지 않는다.

## 6. 제작 전 사용자가 결정해야 할 항목

- [ ] 루아를 AdMate 공식 계정의 AI 가상 인물로 쓸지, 별도 Lua 계정으로 분리할지 정한다.
- [ ] 계정명, handle, profile bio의 최종 문구를 정한다.
- [ ] 첫 게시를 1장 이미지로 시작할지, 3장 carousel로 시작할지 정한다.
- [ ] profile image와 feed cover에 들어갈 `Lua by AdMate` 표기 범위를 정한다.
- [ ] AdMate 로고, 색상, product name 사용 범위를 정한다.
- [ ] Instagram AI 표시 항목을 실제 게시 화면에서 어떻게 적용할지 확인한다.
- [ ] 댓글/DM에서 루아가 답할 수 있는 범위와 사람이 답해야 하는 범위를 정한다.
- [ ] 영상 제작 시 사용할 음악, 폰트, 템플릿의 사용권을 확인한다.
- [ ] 최종 파일명, 제작 프롬프트 요약, 출처 메모, 확인 결과를 어디에 기록할지 정한다.

## 7. 안전 기준

- 루아는 AI 가상 인물임을 숨기지 않는다.
- 루아를 실제 사람, 직원, 고객, 광고주 담당자, 외부 인플루언서처럼 보이게 하지 않는다.
- 실제 직원의 경험담, 고객 사례, 광고주 후기처럼 읽히는 1인칭 문장을 쓰지 않는다.
- 내부 화면, 실제 dashboard, Slack, GitHub, DB, API log, 결제 화면, 로그인 화면은 노출하지 않는다.
- 고객명, 광고주명, 캠페인명, 계정 ID, 예산, 성과 수치, 이메일, 전화번호, 주소를 쓰지 않는다.
- 계약 내용, 가격 조건, 미공개 기능, 내부 일정, 파트너 정보는 쓰지 않는다.
- 문서, 사원증, 화이트보드, 건물 표식, 거리 표지판, 제3자 브랜드 로고가 보이지 않게 한다.
- 모든 차트와 화면은 숫자 없는 설명용 예시 화면으로 만든다.
- Foresight는 성과 보장이나 ROI 약속처럼 설명하지 않는다.
- Sentinel은 승인 없이 집행하거나 자동으로 차단하는 기능처럼 설명하지 않는다.
- Agent Core는 모든 데이터를 자유롭게 연결하는 내부 구조도처럼 보여주지 않는다.
- 최종 판단과 게시 책임은 사람이 가진다는 문장을 유지한다.

## 8. 다음 실행 순서

1. 이 매니페스트로 이번 제작 범위가 맞는지 확인한다.
2. 첫 게시 포맷을 `4:5 단일 feed` 또는 `3장 carousel` 중 하나로 정한다.
3. 루아 profile headshot 제작 요청에 사용할 정체성 참고 이미지를 고른다.
4. `AI virtual creator` 고지 문구와 profile bio 문구를 확정한다.
5. `Disclosure card`를 먼저 만들고, 이후 모든 제작물의 기준으로 둔다.
6. Product card set은 Compass, Sentinel, Lens, Foresight, Agent Core 순서로 만든다.
7. Office routine용 mock desk와 over-shoulder dashboard 컷을 별도로 만든다.
8. 영상은 disclosure open을 가장 먼저 고정하고, 나머지 장면을 붙인다.
9. 각 산출물에서 배경, 손, 얼굴, 텍스트 깨짐, 실제 정보 노출 여부를 확인한다.
10. 게시 전 caption, alt text, hashtag, AI 표시 항목을 사용자가 최종 확인한다.
11. 실제 게시 또는 예약 게시 작업은 사용자가 직접 수행한다.

## 9. 참고 문서

- `docs/tasks/2026-05-23_creative_studio_lua_asset_planning_result_v1.md`
- `docs/references/ai-influencer-asset-inventory-v1.md`
- `docs/production/lua-instagram-launch-pack-v1.md`
- `docs/prompts/lua-office-admate-shot-prompt-pack-v1.md`
