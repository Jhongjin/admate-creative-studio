# AdMate Creative Studio Agent

AdMate Creative Studio Agent는 광고/미디어 업무에서 creative narrative, product explanation, presenter-led video outline을 빠르게 설계하기 위한 초기 repo다. 현재 단계는 구현보다 문서와 구조 세팅이 우선이며, 외부 영상 생성 서비스/API 연동은 범위에서 제외한다.

## 현재 범위

- AdMate 브랜드 메시지와 제품별 설명 구조 정리
- 임원 보고용 5분 영상과 미디어플래너용 1-2분 소개 영상의 톤 분리
- AI presenter를 실제 인물이 아닌 가상 브랜드 캐릭터로 설계
- `AI Influencer/` PNG asset inventory 작성
- 스토리보드, 스크립트, 샷리스트, 제작 체크리스트 관리
- 영상 제작 전 보안, 초상권, 내부자료 노출 방지 기준 수립
- URL-to-video 도구를 초안/무드보드용과 최종 제작 후보로 구분

## 비범위

- 영상 생성 API, SaaS, 자동 업로드, 자동 렌더링 연동
- 실제 인물 imitation, 임직원 likeness, 유명인/공인/고객 모사
- 내부 dashboard, 캠페인명, 광고주명, 계정 정보, 민감 데이터 삽입
- `AI Influencer/` 원본 이미지 수정, 삭제, 이동, 리네이밍

## 폴더 구조

```text
.
├── AGENTS.md
├── README.md
├── AI Influencer/
└── docs/
    ├── references/
    ├── security/
    ├── storyboard/
    └── strategy/
```

## 핵심 문서

- [PRD v1](docs/strategy/AdMate_Creative_Studio_Agent_PRD_v1.md)
- [AI Video Tools Review v1](docs/references/ai-video-tools-review-v1.md)
- [Presenter Persona Guide v1](docs/references/presenter-persona-guide-v1.md)
- [AI Influencer Asset Inventory v1](docs/references/ai-influencer-asset-inventory-v1.md)
- [Executive 5min Storyboard v1](docs/storyboard/executive-5min-storyboard-v1.md)
- [Planner 90s Storyboard v1](docs/storyboard/planner-90s-storyboard-v1.md)
- [Video Production Safety Checklist v1](docs/security/video-production-safety-checklist-v1.md)

## 운영 메모

`AI Influencer/` asset은 AdMate 발표/홍보용 가상 presenter 후보 이미지로만 검토한다. 최종 영상에 사용할 때는 "가상 presenter" 고지, asset 출처 확인, 내부 보안 검수, 법무/브랜드 검토를 거친다.

## 초기 메시지 축

- Executive 5min: AdMate 비전, 4개 product pillar, Agent Core, 성과/로드맵 중심
- Planner 90s: 반복업무 감소, 정책 확인, 검수, 캡처, 예측, 학습 루프 중심
- Presenter: 실제 인물이 아닌 가상 캐릭터로만 사용
- Asset: inventory와 리스크 기록만 수행, 원본 PNG는 read-only 유지
