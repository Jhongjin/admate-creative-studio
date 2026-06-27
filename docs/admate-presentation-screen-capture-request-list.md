# AdMate 발표자료 v2 실제 화면 확보 요청 목록

목적: 임원 보고용 deck에 사용할 실제 AdMate UI, demo/anonymized data, Lens synthetic output, 다이어그램 제작 요청을 플랫폼별로 정리한다.

## 1. 화면 확보 공통 기준

- 내부 임원 보고용이므로 mock만 사용하지 않고 실제 AdMate 제품 UI를 우선 사용한다.
- 기본값은 `실제 UI + demo/mock/anonymized data`다.
- Restricted real case는 메인 deck 기본값으로 사용하지 않는다.
- 실제 광고주명, 캠페인명, 예산, 성과 수치, 계정 ID, email, token, API key, 개인정보, 매체 계정 식별자는 내부용이어도 노출하지 않는다.
- 실제 사례가 필요한 경우에도 Commander 승인 전에는 appendix 후보로만 유지한다.
- 외부 공유 가능성을 고려해 실명 버전과 익명화 버전을 분리할 수 있게 한다.
- 외부 매체 화면은 실제 운영 계정 캡처가 아니라 Lens synthetic output 또는 승인된 샘플 이미지를 우선 사용한다.
- Foresight 차트는 sanitized mock 또는 익명화된 집계 예시를 기본으로 한다.
- Agent Core/Hermes는 실제 민감 로그보다 권한, 승인, 기록, 학습 후보 흐름을 보여주는 UI 또는 다이어그램 중심으로 구성한다.

## 2. 메인 슬라이드 우선 확보 화면

| 우선순위 | 플랫폼 | 필요한 화면 | 담당 에이전트/소유 repo | 사용 목적 | 권장 데이터 처리 방식 | 데이터 민감도 등급 | 캡처/제작 시 주의사항 |
|---:|---|---|---|---|---|---|---|
| 1 | Compass | 출처 인용이 보이는 답변 화면 | Compass agent / `admate-compass` | Slide 6 기준 확인 대표 화면 | 실제 UI + demo policy question + anonymized/source-safe reference | `internal_anonymized` | 정책 판단 확정처럼 보이지 않게 하고, 심사 통과 보장 표현을 제거한다. |
| 2 | Sentinel Monitoring | alert/monitoring dashboard 또는 조치 필요 항목 화면 | Sentinel agent / `admate-agent-core` | Slide 6 운영자가 봐야 할 위험 신호와 조치 필요 항목 화면 | 실제 UI + demo/anonymized monitoring data | `internal_anonymized` | 실시간/즉시/항상 감지처럼 보이는 문구를 숨기고, 사용자명·계정 ID를 마스킹한다. |
| 3 | Lens | 대표 Lens synthetic evidence card 1개 | Lens agent / `admate-lens` | Slide 7 보고에 활용할 증빙 대표 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 실제 운영 계정 화면을 쓰지 않고, 계정/캠페인/광고주 식별자를 제거한다. |
| 4 | Foresight | benchmark/forecast card 1개 | Foresight agent / `admate-foresight` | Slide 7 다음 계획 검토 기준 대표 예시 | sanitized mock 또는 익명화된 집계 예시 | `internal_anonymized` | 성과 보장, 정확한 예측, 최적 예산 추천처럼 보이는 문구와 차트 라벨을 제거한다. |
| 5 | Agent Core / Hermes | 권한, 승인, 기록, 학습 후보 governance diagram | Sentinel/Openclaw/Hermes agent / `admate-agent-core` | Slide 8 공통 운영 레이어와 기준 축적 흐름 설명 | 다이어그램 우선, 실제 UI 사용 시 anonymized demo | `internal_anonymized` | 사람 검토 없는 실행이나 검토 없는 기준 반영처럼 보이지 않게 한다. |

## 3. Appendix 후보 화면

| 후보 | 플랫폼 | 필요한 화면 | 담당 에이전트/소유 repo | 사용 목적 | 권장 데이터 처리 방식 | 데이터 민감도 등급 | 캡처/제작 시 주의사항 |
|---|---|---|---|---|---|---|---|
| Appendix 후보 | Sentinel Prelaunch | 미디어믹스 비교/사전 검수 결과 상세 화면 | Sentinel agent / `admate-agent-core` | Slide 6 질의 대응 또는 appendix 세부 설명 | 실제 UI + Google/Meta 중심 demo setup | `internal_anonymized` | 독립 제품명처럼 보이지 않게 하고, 최적 미디어믹스 추천이나 예산 배분 추천처럼 보이는 문구를 제거한다. |
| Appendix 후보 | Lens | YouTube synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 appendix 매체별 증빙 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 실제 운영 계정 화면, 계정/캠페인/광고주 식별자를 제거한다. |
| Appendix 후보 | Lens | GDN synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 appendix 매체별 증빙 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 결과 이미지가 실제 매체 지면처럼 보이는지 품질을 우선 확인한다. |
| Appendix 후보 | Lens | Naver synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 appendix 국내 매체 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 매체 UI/브랜드 사용 권한과 내부 공유 범위를 확인한다. |
| Appendix 후보 | Lens | Kakao synthetic capture 결과 예시 | Lens agent / `admate-lens` | Slide 7 appendix 국내 매체 예시 | Lens synthetic output 또는 승인된 샘플 이미지 | `internal_anonymized` | 실제 광고주 소재, 랜딩 URL, 계정 식별자가 보이지 않게 한다. |
| Appendix 후보 | Openclaw / Slack Ops | Slack 알림·승인·operator action 흐름 화면 | Openclaw/Slack Ops agent / `admate-agent-core` | Slide 8 appendix 또는 매우 작은 익명화 보조 예시 | 실제 Slack UI는 채널명, 사용자명, email, 캠페인명 마스킹 | `internal_anonymized` | 민감한 채널명, DM, 멘션, 토큰, 외부 고객 정보가 보이지 않게 한다. |

## 4. Restricted real case appendix 후보

아래 항목은 메인 deck 기본값으로 사용하지 않는다. Commander 승인 전에는 appendix 후보로만 유지한다.

| 후보 | 사용 가능 위치 | 필요한 이유 | 민감도 | Commander 확인 |
|---|---|---|---|---|
| 실제 광고주 운영 전후의 반복 검토 항목 변화 | Appendix 후보 | 운영 품질 개선의 맥락을 보여주기 위함 | `internal_restricted_real_case` | 필요 |
| 실제 캠페인 기반 Foresight 벤치마크 집계 | Appendix 후보 | 다음 계획 검토 기준의 현실감을 높이기 위함 | `internal_restricted_real_case` | 필요 |
| 실제 운영 승인/audit 흐름 사례 | Appendix 후보 | 통제 가능한 확장의 설득력을 높이기 위함 | `internal_restricted_real_case` | 필요 |

제한 조건:

- 실명 버전은 Commander 승인 후 내부 보고 전용으로만 사용한다.
- 외부 공유 가능성이 있는 deck에는 익명화 버전만 사용한다.
- 광고주명, 캠페인명, 예산, 성과 수치, 계정 식별자는 기본적으로 제거한다.
- 제한적 실명 사용이 필요한 경우에도 token, API key, email, 개인정보, 매체 계정 식별자는 절대 노출하지 않는다.
