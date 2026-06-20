# Presenter Usage Boundary v1

작성일: 2026-05-07
상태: Gate Creative-Studio-1 draft
용도: AI presenter와 AI Influencer asset의 사용 가능 범위, 금지 범위, review gate 정의

## 기본 선언

AdMate presenter는 실제 인물 imitation이 아니라 AdMate 설명을 위한 가상 브랜드 캐릭터다. presenter는 실제 직원, 임원, 고객, 광고주 담당자, 외부 인플루언서로 설정하지 않는다.

## 2026-06-08 Lua Influencer Mode

루아는 AdMate 전용 presenter가 아니라 Instagram 중심으로 활동하는 AI
influencer / AI virtual creator 모드로도 운영될 수 있다. YouTube도 같은
컨셉을 공유할 수 있다.

Lua influencer mode에서 허용되는 큰 콘텐츠 축:

- 일상,
- 뷰티,
- 음식,
- office routine,
- 관심사와 브랜드/서비스 소개 활동.

Nasmedia AdMate는 루아의 broader channel activity 중 하나의 브랜드/서비스
소개 콘텐츠로 다룬다. AdMate 콘텐츠에서도 루아를 실제 임직원, AdMate
운영자, 실제 고객, 광고주 담당자, 실제 외부 인플루언서로 설정하지 않는다.

Lua influencer mode는 아래를 승인하지 않는다:

- 실제 사람 인플루언서처럼 오인되는 운영,
- 실제 사용 후기나 실제 캠페인 경험 증언,
- AI disclosure 없는 게시,
- 계정 로그인, 업로드, 게시, 댓글/DM 대응 자동화,
- media generation/provider upload/publish without separate approval.

## 사용 가능 범위

| 범위 | 허용 여부 | 조건 |
|---|---|---|
| 내부 임원 보고 영상 | 허용 | 가상 presenter 고지, 민감 정보 제거, 안전 checklist 통과 |
| 미디어플래너 교육 영상 | 허용 | dummy scenario 사용, 실제 계정/캠페인 화면 금지 |
| 제품 소개 moodboard | 허용 | 외부 서비스 업로드 없이 내부 reference로만 사용 |
| 외부 홍보 콘텐츠 | 조건부 | 브랜드, 법무, 보안 review 후 사용 |
| 실제 캠페인 운영 화면 설명 | 금지 | 내부 화면과 민감 데이터 노출 위험 |
| 실제 인물 clone 또는 voice clone | 금지 | imitation 및 권리 리스크 |

## AI Influencer Asset Boundary

- `AI Influencer/` PNG는 read-only reference다.
- 이미지 수정, 삭제, 이동, 리네이밍, 압축을 하지 않는다.
- commit 대상에 포함하지 않는다.
- 외부 영상 생성 서비스, TTS, lip-sync, image-to-video 도구에 업로드하지 않는다.
- 내부 문서에서는 파일명, 분류, 리스크, 사용 후보만 기록한다.

## Recommended Asset Use

### 우선 후보

- `lua_brand_safe_profile_v1_ivory_shirt.png`: 가장 안정적인 presenter profile 후보.
- `lua_master_face_v1.png`: master face reference 후보.
- `lua_smile_v1_soft_window_blouse.png`: 부드러운 closing expression 후보.

### 보류 후보

- mirror selfie 계열: private/UGC tone이 강해 공식 보고 영상에 부적합할 수 있다.
- lipstick/beauty 계열: 특정 제품 endorsement처럼 보일 수 있다.
- Hannam street fullbody: 실제 장소/상호처럼 보이는 배경 리스크가 있다.
- Lua logo card 계열: AdMate brand와 불일치하므로 최종 title card로 쓰지 않는다.

## 필수 고지 기준

### 영상 내

- 시작 5초 이내 또는 종료 credit에 가상 presenter 고지를 넣는다.
- social short처럼 context가 짧은 형식은 영상 내 caption을 권장한다.
- 내부 교육 영상도 고지를 생략하지 않는다.

### 문서/description

- script 문서, storyboard 문서, 배포 description 중 최소 1곳에 고지를 남긴다.
- 외부 공개 콘텐츠는 영상 내 고지와 description 고지를 함께 사용한다.

권장 문구:

`본 콘텐츠의 presenter는 AdMate 설명을 위해 생성형 AI로 제작한 가상 캐릭터입니다. 실제 인물 또는 임직원을 나타내지 않습니다.`

Lua influencer mode 권장 문구:

`루아는 생성형 AI로 제작한 AI virtual influencer이며 실제 인물 또는 임직원을 나타내지 않습니다.`

## 금지 역할 설정

- AdMate 임직원
- 특정 부서 담당자
- 실제 광고주 담당자
- 실제 고객
- 실제 미디어플래너 선배
- 외부 유명인, 공인, influencer
- 실제 사용 후기를 말하는 증언자

## 금지 script 패턴

- "저는 AdMate 운영팀의 담당자입니다."
- "제가 실제 캠페인을 운영해보니..."
- "이 광고주의 실제 성과를 보면..."
- "AI가 승인 없이 자동으로 집행합니다."
- "성과 개선을 보장합니다."
- "이 화면은 실제 내부 운영 화면입니다."

## 허용 script 패턴

- "저는 AdMate 설명을 위한 가상 presenter입니다."
- "이 예시는 비식별 mock 기준으로 설명합니다."
- "최종 판단과 승인은 사람이 수행합니다."
- "AdMate는 반복 업무를 줄이고 판단 근거를 정리합니다."
- "성과 예측은 보장이 아니라 다음 판단을 위한 가설입니다."

## Review Gate

### Script Gate

- [ ] 실제 인물 또는 직원처럼 보이는 표현이 없다.
- [ ] 성과 보장, 완전 자동화, 무승인 집행 표현이 없다.
- [ ] 광고주명, 캠페인명, 계정 정보, 내부 화면 설명이 없다.
- [ ] 가상 presenter 고지가 포함되어 있다.

### Visual Gate

- [ ] `AI Influencer/` 원본 PNG를 변경하지 않았다.
- [ ] 실제 사무실, 모니터, 문서, 사원증, 개인정보가 보이지 않는다.
- [ ] 배경이 generic studio 또는 sanitized mock이다.
- [ ] 의상은 ivory shirt/blouse 중심으로 일관된다.
- [ ] mirror selfie, beauty product, real street sign은 공식본에서 제외했다.

### Release Gate

- [ ] 내부 공유 전 owner review를 통과했다.
- [ ] 외부 공개 전 브랜드, 법무, 보안 review를 통과했다.
- [ ] 생성형 AI presenter 고지가 영상과 description에 남아 있다.
- [ ] 사용 asset 목록과 source note를 내부 문서에 기록했다.

## Stop Conditions

다음 중 하나라도 해당하면 제작 또는 배포를 중단한다.

- presenter가 실제 직원이나 실제 고객처럼 들린다.
- 실제 광고주, 캠페인, 계정, 성과 수치가 보인다.
- AI가 사람 승인 없이 학습하거나 집행하는 것처럼 보인다.
- 실제 인물의 얼굴, 음성, 말투를 모사하려는 의도가 있다.
- `AI Influencer/` PNG 또는 영상/음성/image asset이 commit 대상에 포함된다.
