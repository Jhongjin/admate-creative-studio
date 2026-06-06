# AGENTS.md

이 repo는 AdMate Creative Studio Agent의 초기 문서, 전략, 스토리보드, AI presenter asset 검토를 관리한다. 현재 단계의 우선순위는 코드 구현이 아니라 제품 방향, 보안 기준, asset inventory, 영상 스토리 구조를 안전하게 정리하는 것이다.

## 작업 원칙

- 영상 생성 서비스 또는 외부 API 연동 코드를 추가하지 않는다.
- 실제 인물, 임직원, 고객, 광고주, 유명인, 사망자, 공인처럼 보이게 만드는 imitation 작업을 금지한다.
- AI presenter는 항상 가상 인물 또는 브랜드 캐릭터로만 설계한다.
- 회사 내부 화면, 캠페인명, 광고주명, 계정 정보, 예산, 성과 지표, 계약 정보, 개인 정보, 비공개 전략 자료를 문서와 영상 초안에 노출하지 않는다.
- `AI Influencer/` 폴더의 PNG asset은 read-only reference로만 다룬다. 수정, 삭제, 이동, 압축, 리네이밍을 하지 않는다.
- 이미지 관련 작업은 inventory, 분류, 리스크 메모, 사용 기준 수립까지만 허용한다.
- URL-to-video 도구는 초안, 무드보드, 메시지 구조 검토용으로만 평가한다. 최종 제작 기준으로 채택하려면 별도 보안, 법무, 브랜드 검토가 필요하다.

## 문서 구조

- `README.md`: repo 개요와 운영 방식
- `docs/strategy/AdMate_Creative_Studio_Agent_PRD_v1.md`: 제품 요구사항 초안
- `docs/references/ai-video-tools-review-v1.md`: AI 영상 도구 검토 기준
- `docs/references/presenter-persona-guide-v1.md`: 가상 presenter persona와 사용 기준
- `docs/references/ai-influencer-asset-inventory-v1.md`: `AI Influencer/` PNG asset inventory
- `docs/storyboard/executive-5min-storyboard-v1.md`: 임원 보고용 5분 영상 스토리보드
- `docs/storyboard/planner-90s-storyboard-v1.md`: 미디어플래너용 90초 소개 영상 스토리보드
- `docs/security/video-production-safety-checklist-v1.md`: 영상 제작 안전 체크리스트
- `docs/production/creative-studio-prelaunch-readiness-manifest-v1.md`: prelaunch local/docs-only readiness와 human approval gates

## 검증 체크

문서 변경 후 가능한 경우 다음을 실행한다.

```powershell
node scripts\check-creative-studio-prelaunch-readiness-manifest.mjs
node scripts\check-creative-studio-safety-static.mjs
git diff --check
git status --short
```

Secret scan은 repo에 전용 스크립트가 있으면 그것을 우선 사용한다. 현재 초기 세팅 단계에서는 전용 스크립트가 없을 수 있으므로, 최소한 토큰/키 패턴 검색과 git diff 확인을 수행한다.

## 톤과 언어

문서는 기본적으로 한국어로 작성한다. 외부 도구명, 파일명, API명, 제품명은 원문 표기를 유지한다. 임원 보고용 문서는 간결하고 신뢰감 있게, 플래너용 문서는 실무 흐름이 즉시 보이게 작성한다.
