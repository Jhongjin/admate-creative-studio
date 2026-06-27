# AdMate 발표자료 v2 실제 화면 확보 요청 목록

목적: 임원 보고용 deck에 사용할 실제 AdMate UI, demo/anonymized data, Lens synthetic output, 다이어그램 제작 요청을 플랫폼별로 정리한다.

## 1. 화면 확보 공통 기준

- 내부 임원 보고용이므로 mock만 사용하지 않고 실제 AdMate 제품 UI를 우선 사용한다.
- 기본값은 `실제 UI + demo/mock/anonymized data`다.
- 실제 광고주명, 캠페인명, 예산, 성과 수치를 쓰는 경우 `restricted real case 후보`로 별도 표시하고 Commander 승인을 받는다.
- 계정 ID, email, token, API key, 매체 계정 식별자, 개인정보는 내부용이어도 절대 노출하지 않는다.
- 외부 공유 가능성을 고려해 실명 버전과 익명화 버전을 분리할 수 있게 한다.
- 외부 매체 화면은 실제 운영 계정 캡처가 아니라 Lens synthetic output 또는 승인된 샘플 이미지를 우선 사용한다.
- Foresight 차트는 sanitized mock 또는 익명화된 집계 예시를 기본으로 한다.
- Agent Core/Hermes는 실제 민감 로그보다 권한, 승인, 기록, 학습 후보 흐름을 보여주는 UI 또는 다이어그램 중심으로 구성한다.

## 2. 요청 목록

| 플랫폼 | 필요한 화면 | 담당 에이전트/소유 repo | 사용 목적 | 권장 데이터 처리 방식 | 데이터 민감도 등급 | 캡처/제작 시 주의사항 |
|---|---|---|---|---|---|---|
| Compass | 출처 인용이 보이는 답변 화면 | Compass agent / `admate-compass` | Slide 6 기준 확인 예시 | 실제 UI + demo policy question + anonymized/source-safe reference | `internal_anonymized` | 정책 판단 확정처럼 보이지 않게 하고, 심사 통과 보장 표현을 제거한다. |
| Sentinel Monitoring | alert/monitoring dashboard 또는 조치 필요 항목 화면 | Sentinel agent / `admate-agent-core` | Slide 6 이상 징후와 조치 필요 항목 예시 | 실제 UI + demo/anonymized monitoring data | `internal_anonymized` | 실시간/즉시/항상 감지처럼 보이는 문구를 숨기고, 사용자명·계정 ID를 마스킹한다. |
| Sentinel Prelaunch | 미디어믹스 비교/사전 검수 결과 화면 | Sentinel agent / `admate-agent-core` | Slide 6 사전 검수 예시 | 실제 UI + Google/Meta 중심 demo setup | `internal_anonymized` | 독립 제품명처럼 보이지 않게 하고, 최적 미디어믹스 추천이나 예산 배분 추천처럼 보이는 문구를 제거한다. |
| Lens | YouTube synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 증빙 이미지 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 실제 운영 계정 화면을 쓰지 않고, 계정/캠페인/광고주 식별자를 제거한다. |
| Lens | GDN synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 매체 지면형 증빙 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 결과 이미지가 실제 매체 지면처럼 보이는지 품질을 우선 확인한다. |
| Lens | Naver synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 국내 매체 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 매체 UI/브랜드 사용 권한과 내부 공유 범위를 확인한다. |
| Lens | Kakao synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 국내 매체 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 실제 광고주 소재, 랜딩 URL, 계정 식별자가 보이지 않게 한다. |
| Foresight | 예측/벤치마크/시나리오 화면 | Foresight agent / `admate-foresight` | Slide 7 다음 계획 검토 기준 예시 | sanitized mock 또는 익명화된 집계 예시 | `internal_anonymized` | 성과 보장, 정확한 예측, 최적 예산 추천처럼 보이는 문구와 차트 라벨을 제거한다. |
| Agent Core | 승인, 실행 요청, 기록 흐름 화면 또는 다이어그램 | Sentinel/Openclaw agent / `admate-agent-core` | Slide 8 공통 운영 레이어 설명 | 실제 UI 가능 시 anonymized demo, 없으면 다이어그램 | `internal_anonymized` | 승인 없는 실행처럼 보이지 않게 하고, audit trail에 사용자명/email/token이 보이지 않게 한다. |
| Openclaw / Slack Ops | Slack 알림·승인·operator action 흐름 화면 | Openclaw/Slack Ops agent / `admate-agent-core` | Slide 8 보조 패널 또는 appendix | 실제 Slack UI는 채널명, 사용자명, email, 캠페인명 마스킹 | `internal_anonymized` | 민감한 채널명, DM, 멘션, 토큰, 외부 고객 정보가 보이지 않게 한다. |
| Hermes | 학습 후보와 승인된 기준 축적 흐름 화면 또는 다이어그램 | Hermes agent / `admate-agent-core` | Slide 8 학습 후보 흐름 설명 | 실제 UI 가능 시 anonymized demo, 없으면 다이어그램 | `internal_anonymized` | 자동 학습이나 즉시 기준 변경처럼 보이지 않게 한다. |

## 3. Restricted real case 후보

아래 항목은 설득력이 필요할 때만 검토한다. 기본 deck에는 anonymized/demo data를 우선 사용한다.

| 후보 | 사용 가능 위치 | 필요한 이유 | 민감도 | Commander 확인 |
|---|---|---|---|---|
| 실제 광고주 운영 전후의 반복 검토 항목 변화 | Slide 9 또는 appendix | 운영 품질 개선의 맥락을 보여주기 위함 | `internal_restricted_real_case` | 필요 |
| 실제 캠페인 기반 Foresight 벤치마크 집계 | Slide 7 또는 appendix | 다음 계획 검토 기준의 현실감을 높이기 위함 | `internal_restricted_real_case` | 필요 |
| 실제 운영 승인/audit 흐름 사례 | Slide 8 또는 appendix | 통제 가능한 확장의 설득력을 높이기 위함 | `internal_restricted_real_case` | 필요 |

제한 조건:

- 실명 버전은 Commander 승인 후 내부 보고 전용으로만 사용한다.
- 외부 공유 가능성이 있는 deck에는 익명화 버전만 사용한다.
- 광고주명, 캠페인명, 예산, 성과 수치, 계정 식별자는 기본적으로 제거한다.
- 제한적 실명 사용이 필요한 경우에도 token, API key, email, 개인정보, 매체 계정 식별자는 절대 노출하지 않는다.
