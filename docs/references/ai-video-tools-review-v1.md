# AI Video Tools Review v1

작성일: 2026-05-06
목적: AdMate 영상 기획 단계에서 사용할 수 있는 AI 영상 도구 범주와 리스크를 정리한다. 이 문서는 도구 연동 구현 지시서가 아니다.

## 결론 요약

- URL-to-video 도구는 빠른 초안, 무드보드, 메시지 구조 실험에는 유용하지만 최종 제작용으로 바로 쓰기 어렵다.
- Presenter/avatar 도구는 script-to-talking-head에는 강하지만 실제 인물 오인, consent, 음성/얼굴 권리 검토가 핵심이다.
- Image-to-video 도구는 `AI Influencer/` reference의 움직임 실험에는 맞지만, 얼굴/의상/손/배경 일관성 drift가 발생할 수 있다.
- AI presenter, TTS, lip-sync 도구는 추후 검토 대상으로만 정리한다.
- AdMate의 현재 단계에서는 외부 서비스 가입, API 호출, asset 업로드 없이 수동 평가, 보안 검토, storyboard 검증까지만 진행한다.

## 도구 범주별 판단

| 범주 | 예시 | 좋은 용도 | 최종 제작 적합도 | 주요 리스크 |
|---|---|---|---|---|
| URL-to-video | Creatify, Pictory, ProductVids.ai, URL to Video 계열 | 공개 landing page를 빠르게 영상 초안으로 변환, product page 기반 moodboard | 낮음-중간. 사람 검수와 재편집 필요 | URL scraping, 원문 오해, 가격/브랜드 정보 노출, 저작권, 과장 문구 |
| Product video generator | Arcads, ProductVids.ai | 제품 이미지 기반 짧은 social cut moodboard | 중간. 제품 단독 영상에는 유용 | 제품 형태 왜곡, 사용 장면 과장, 브랜드 톤 불일치 |
| Image-to-video generation | Runway, Luma Dream Machine, Pika 계열 | reference 이미지로 움직임, 카메라, 분위기 실험 | 중간. 최종에는 shot별 QA 필요 | 얼굴 drift, 손/입 모양 오류, 의상 변화, 배경 생성 오류 |
| AI avatar/presenter | Synthesia, HeyGen 계열 | script narration, talking-head draft, 내부 교육 초안 | 중간-높음. consent와 disclosure가 전제 | 실제 인물 오인, voice/likeness 권리, deepfake misuse |
| Editing/compositing | 일반 NLE, motion graphics tool | 사람이 통제하는 최종 편집, 자막, disclaimer, brand polish | 높음 | 편집자가 내부 자료를 잘못 넣는 human error |

## URL-to-video 사용 기준

### 초안/무드보드용으로 허용 가능한 경우

- 공개적으로 배포해도 되는 제품/브랜드 소개 페이지를 입력한다.
- 페이지 안에 가격, 고객명, 계약 조건, 비공개 roadmap이 없다.
- 결과물은 메시지 각도와 shot rhythm 참고용으로만 쓴다.
- output script를 사람이 다시 쓰고, overclaim을 제거한다.

### 최종 제작용으로 부적합한 경우

- 내부 dashboard, campaign report, 광고주 자료, 계정별 성과 페이지를 입력해야 하는 경우.
- AI가 page copy를 그대로 긁어와 최종 자막/나레이션으로 쓰는 경우.
- 가상 presenter가 실제 고객 후기나 임직원 발언처럼 보이는 경우.
- 브랜드 검수 없이 바로 social/posting에 쓰려는 경우.

## AI presenter reference 사용 기준

`AI Influencer/` asset을 영상 reference로 쓸 때는 다음을 모두 만족해야 한다.

- 얼굴: 눈매, 얼굴형, 헤어라인, 피부톤이 shot 간 유지된다.
- 의상: executive 영상은 ivory shirt/blouse 계열로 통일한다. cream knit, mirror selfie, beauty lipstick 컷은 moodboard 후보로 제한한다.
- 배경: 실제 사무실, 실제 거리 표지, identifiable apartment처럼 보이는 요소는 제거 또는 generic background로 대체한다.
- 표정: 과한 beauty/UGC 톤보다 calm, neutral, confident smile을 우선한다.
- 고지: 영상 내 또는 description에 "본 presenter는 생성형 AI로 제작한 가상 캐릭터"라는 문구를 남긴다.

## 도구별 참고 메모

### Creatify

공식 문서는 URL-to-video, avatar, product video API를 제공한다고 설명한다. AdMate에서는 API 연동 없이 공개 dummy URL 기반 초안 검토용으로만 본다. 최종 제작 전에는 script, caption, claims를 모두 사람이 다시 확인해야 한다.

### Pictory

URL, homepage, product page, blog post를 영상으로 변환하는 흐름을 제공한다. 내부 문서 요약이나 공개 article repurposing에는 유용할 수 있으나, AdMate 내부 campaign page를 넣는 방식은 금지한다.

### ProductVids.ai

제품 URL에서 이미지와 설명을 추출해 product video를 만드는 도구로 소개된다. AdMate 본체 소개보다 광고 소재 moodboard나 product-specific 실험에 가까우며, 자동 추출 정보의 정확성과 권리 검토가 필요하다.

### Runway / Luma / Pika 계열

Image-to-video 또는 text-to-video 실험에 적합하다. `AI Influencer/` reference를 넣는 경우 얼굴, 의상, 배경의 shot consistency를 수동 QA해야 한다. API 연동은 현재 범위 밖이다.

### Synthesia / avatar 계열

Business presenter 영상에는 상대적으로 구조가 맞지만, likeness consent와 governance가 핵심이다. AdMate에서는 실제 인물 clone이 아니라 stock/synthetic 또는 자체 가상 캐릭터만 검토한다.

## 추후 검토로만 남길 영역

- AI presenter 생성: synthetic stock avatar 또는 자체 가상 캐릭터만 후보로 둔다.
- TTS: 실제 임직원 음성 clone은 금지하고, 브랜드 승인된 synthetic voice만 검토한다.
- Lip-sync: 최종 영상 전 입 모양, 발음, 자막 싱크를 사람이 QA한다.
- API: 현재 repo에는 API key, upload script, automation, batch generation 구조를 만들지 않는다.
- Upload: `AI Influencer/` asset을 외부 서비스에 업로드하는 행위는 별도 승인 전 금지한다.

## 권장 운영 방식

1. 기획 단계: PRD, storyboard, script beat를 먼저 확정한다.
2. 무드보드 단계: URL-to-video 또는 image-to-video를 공개/dummy 소재로만 테스트한다.
3. 내부 검수: 보안, 초상권, 과장 표현, 가상 presenter 고지를 확인한다.
4. 최종 제작: 사람이 통제하는 편집 workflow에서 자막, disclaimer, brand graphic을 확정한다.
5. 배포 승인: 외부 공개 전 brand/legal/security approval을 받는다.

## 참고한 공개 자료

접속일: 2026-05-06

- Runway Gen-4 도움말: https://help.runwayml.com/hc/en-us/articles/37327109429011-Creating-with-Gen-4-Video
- Runway API models guide: https://docs.dev.runwayml.com/guides/models/
- Luma Dream Machine: https://www.luma-ai.com/luma-dream-machine/
- Creatify API docs: https://docs.creatify.ai/
- Creatify URL-to-video feature: https://creatify.design/features/url-to-video
- Pictory URL-to-video: https://pictory.ai/url-to-video
- ProductVids.ai: https://productvids.ai/
- Arcads product videos: https://www.arcads.io/product-videos
- Synthesia AI governance: https://www.synthesia.io/ai-governance
- Synthesia personal avatars docs: https://docs.synthesia.io/docs/personal-avatars
