# Creative Studio Hyperframes Storyboard Prompt Pack v1

작성일: 2026-05-09
Gate: CreativeStudio-Hyperframes-PromptPack-1
상태: Creative Studio local rewrite, no render, no asset generation
용도: executive 5min / planner 90s storyboard, scene block, frame QA prompt 기준

## 1. Reference And Rewrite Decision

Design Director handoff reference:

- `D:\Projects\AdMate\admate-design-director\docs\tasks\design_director_hyperframes_creative_studio_handoff_v1.md`
- Source prompt pack: `D:\Projects\AdMate\admate-design-director\docs\prompts\creative-studio-hyperframes-storyboard-prompt-pack-v1.md`
- Source commit: `4e994573a3d1a16dbe1a0bd330c4874b11b60869`
- Source commit message: `docs: add Creative Studio Hyperframes prompt pack`

Local decision:

- Design Director 문서를 그대로 복사하지 않는다.
- Creative Studio repo의 기존 script, shotlist, caption/disclosure, presenter-scene asset map, scene-level dummy visual spec에 맞춰 local prompt pack으로 재작성한다.
- Hyperframes는 외부 구현물이 아니라 storyboard 작성 방식의 참고 개념으로만 사용한다.

## 2. Production Boundary

이 문서는 text-only prompt pack이며 제작 실행 지시서가 아니다.

금지:

- 영상 생성
- render 실행
- image generation
- voiceover, TTS, lip-sync, image-to-video 생성
- 외부 API 호출
- 외부 코드 또는 vendor import
- product 코드 수정
- asset 추가, 복사, 업로드, 이동, 삭제, 수정
- `AI Influencer/` 파일 열람, stage, commit
- 실제 광고주, 캠페인, 계정, 성과 수치, 내부 화면, 개인 정보 사용

허용:

- storyboard prompt 작성
- scene mapping 작성
- scene block schema 작성
- timing, layout, caption, disclosure, presenter cue checklist 작성
- mock visual safety checklist 작성
- frame QA checklist 작성

## 3. What Not To Carry Over From Hyperframes

Hyperframes에서 다음 요소는 Creative Studio repo로 가져오지 않는다.

| 금지 요소 | Creative Studio 처리 |
|---|---|
| code | 어떤 코드도 복사하거나 작성하지 않는다. |
| CLI | 실행 명령, render 명령, build 명령을 작성하지 않는다. |
| render | render workflow는 future production Gate 전까지 금지한다. |
| package | package 설치, dependency, runtime 설정을 추가하지 않는다. |
| catalog | 외부 catalog block이나 template block을 가져오지 않는다. |
| skill | 외부 skill 파일이나 agent skill 구조를 복사하지 않는다. |
| external assets | 외부 이미지, 영상, 음성, template asset을 추가하지 않는다. |

Carry-over 가능한 것은 다음 개념뿐이다.

- scene을 structured source로 다루기
- timing을 먼저 고정하기
- layout을 motion보다 먼저 검토하기
- caption/disclosure를 scene block 안에 포함하기
- frame QA를 제작 전 Gate로 사용하기

## 4. Canonical Creative Studio Baseline

이 prompt pack의 기준 문서는 다음과 같다.

- `docs/scripts/executive-5min-video-script-v1.md`
- `docs/scripts/planner-90s-video-script-v1.md`
- `docs/storyboard/executive-5min-scene-shotlist-v1.md`
- `docs/storyboard/planner-90s-scene-shotlist-v1.md`
- `docs/storyboard/presenter-scene-asset-map-v1.md`
- `docs/production/caption-disclosure-guide-v1.md`
- `docs/production/scene-level-dummy-visual-spec-v1.md`
- `docs/production/mock-visual-pack-plan-v1.md`
- `docs/message-library/admate-approved-message-library-v1.md`
- `docs/message-library/product-one-liners-v1.md`

Canonical product roles:

| Product | Approved Role | Risk To Avoid |
|---|---|---|
| Compass | 정책/가이드 근거 확인의 출발점을 정리한다. | 전략 자동 확정, 캠페인 대행 기획 |
| Sentinel | 세팅 검수와 운영 이상 감지 신호를 정리한다. | 승인 없는 차단/집행, 모든 사고 완전 방지 |
| Lens | 캡처와 증빙을 비식별 기준으로 정리한다. | 실제 내부 화면 그대로 노출 |
| Foresight | 다음 판단을 위한 예측 가설과 분석 관점을 제안한다. | 성과 보장, 실제 수치 기반 약속 |
| Agent Core | 네 Agent를 권한, 승인, 감사 로그, 학습 후보 기준으로 연결한다. | 사람 승인 없는 학습/집행 |

Agent Core 내부 엔진 표현:

- Openclaw: Agent Core 내부의 실행, 연결, workflow engine.
- Hermes: Agent Core 내부의 기억, 학습 후보, 검토, 승인 후 반영 engine.
- Openclaw/Hermes를 외부 제품 또는 별도 홍보 제품처럼 강조하지 않는다.

## 5. Scene Block Schema

모든 storyboard scene은 아래 block schema를 사용한다.

```text
scene_id:
planning_block_id:
video_type:
canonical_source:
timecode:
duration_sec:
scene_role:
viewer_question:
core_message:
approved_message_source:
script_summary:
visual_type:
mock_visual_pack:
layout_frame:
on_screen_text:
caption:
disclosure:
presenter_cue:
presenter_asset_reference:
product_scope:
dummy_data_policy:
safety_risks:
frame_qa:
status:
```

Field 기준:

| Field | 기준 |
|---|---|
| `scene_id` | 기존 shotlist의 `E1-E15` 또는 `P1-P9`를 유지한다. |
| `planning_block_id` | Hyperframes-style grouping용 ID이며 production scene ID를 대체하지 않는다. |
| `canonical_source` | 기준 script/shotlist 문서명을 남긴다. |
| `approved_message_source` | message library 또는 product one-liners 근거를 적는다. |
| `layout_frame` | motion 없는 정지 frame으로 이해 가능한 구성을 적는다. |
| `caption` | caption-disclosure guide의 tone과 길이를 따른다. |
| `disclosure` | presenter, dummy visual, no performance promise, human approval 중 필요한 고지를 적는다. |
| `presenter_asset_reference` | 필요 시 파일명만 적고 이미지를 열거나 복사하지 않는다. |
| `dummy_data_policy` | dummy label, sanitized mock, no real data 기준을 적는다. |
| `frame_qa` | 제작 전 frame QA checklist 결과를 적는다. |

## 6. Executive 5min Scene Mapping

Executive 영상의 production 기준은 E1-E15다. Hyperframes-style 11 block은 planning grouping일 뿐이며, E scene을 삭제하거나 대체하지 않는다.

| Planning Block | Canonical Scene | Time | Purpose | Product Scope | Mock Visual | Presenter Rule |
|---|---|---:|---|---|---|---|
| HF-EX01 | E1-E2 | 0:00-0:15 | 가상 presenter 고지와 핵심 질문 | Platform | MVP-02, MVP-03 | E1은 presenter absent 가능, E2는 짧은 still/reference만 |
| HF-EX02 | E3 | 0:15-0:45 | 반복 업무와 판단 분산 문제 | Platform | MVP-03, MVP-09 | 짧은 presenter shot 가능, internal screen 금지 |
| HF-EX03 | E4 | 0:45-1:05 | AdMate 정의 | Platform, Agent loop | MVP-01 | voice-over only, diagram 중심 |
| HF-EX04 | E5-E8 | 1:05-2:15 | Compass, Sentinel, Lens, Foresight 역할 | Four products | MVP-02, MVP-05, MVP-06, MVP-07, MVP-08 | product card/diagram 중심, presenter 과다 노출 금지 |
| HF-EX05 | E9 | 2:15-2:55 | Agent Core와 내부 엔진 | Agent Core | MVP-04 | voice-over only, 기술 세부/키/로그 금지 |
| HF-EX06 | E10 | 2:55-3:35 | 기획부터 학습까지 운영 loop | Agent loop | MVP-03 | voice-over only |
| HF-EX07 | E11 | 3:35-3:55 | 운영 지식 자산화 | Intelligence Library | MVP-09 | 짧은 presenter return 가능 |
| HF-EX08 | E12 | 3:55-4:10 | 반복 업무 감소 | Workflow value | MVP-03 | voice-over only, 수치 claim 금지 |
| HF-EX09 | E13 | 4:10-4:25 | 권한, 승인, 감사 로그, ROI frame | Governance | MVP-04, MVP-08 | voice-over only, human approval 고지 |
| HF-EX10 | E14 | 4:25-4:50 | Roadmap | Library, Personalization, Creative Studio | MVP-09, MVP-10, MVP-11 | 제한적 transition shot 가능 |
| HF-EX11 | E15 | 4:50-5:00 | Closing | Platform | MVP-01 | soft smile 가능, 가상 presenter 고지 재표기 |

Executive prompt 작성 규칙:

- E1-E15 scene ID를 최종 기준으로 유지한다.
- E5-E8은 하나의 product block으로 묶어 생각할 수 있지만, 각 제품의 timecode와 message는 분리한다.
- Foresight는 성과 보장이 아니라 예측 가설로만 말한다.
- Agent Core는 승인, 감사 로그, 학습 후보 기준을 중심으로 말한다.
- Openclaw/Hermes는 내부 엔진으로 짧게 설명하고 public-facing product처럼 보이지 않게 한다.

## 7. Planner 90s Scene Mapping

Planner 영상의 production 기준은 P1-P9다. Hyperframes-style 8 block은 P1-P2 opening을 하나의 planning block으로 묶는 수준이며, P scene을 삭제하거나 대체하지 않는다.

| Planning Block | Canonical Scene | Time | Purpose | Product Scope | Mock Visual | Presenter Rule |
|---|---|---:|---|---|---|---|
| HF-PL01 | P1-P2 | 0:00-0:08 | 반복 확인 업무가 쌓이는 현실 | Workflow pain | MVP-03 | presenter absent 또는 voice-over only |
| HF-PL02 | P3 | 0:08-0:18 | AdMate 한 문장 소개 | Platform | MVP-01 | presenter shot 가능, 가상 guide tone |
| HF-PL03 | P4 | 0:18-0:31 | Compass: 정책/가이드 근거 확인 | Compass | MVP-05 | 제한적 guide shot 가능, product card 중심 |
| HF-PL04 | P5 | 0:31-0:46 | Sentinel: 세팅 검수와 운영 이상 감지 | Sentinel | MVP-06 | voice-over only, 승인 없는 집행 금지 |
| HF-PL05 | P6 | 0:46-0:58 | Lens: 캡처와 증빙 | Lens | MVP-07 | voice-over only, 실제 capture 금지 |
| HF-PL06 | P7 | 0:58-1:12 | Foresight: 예측 가설과 분석 관점 | Foresight | MVP-08 | voice-over only, 성과 보장 금지 |
| HF-PL07 | P8 | 1:12-1:24 | Agent Core: 판단이 다음 기준으로 축적 | Agent Core | MVP-09 | optional side reference only, loop diagram 중심 |
| HF-PL08 | P9 | 1:24-1:30 | Closing | Platform | MVP-01 | soft smile 가능, 실제 동료/testimonial tone 금지 |

Planner prompt 작성 규칙:

- P1-P9 scene ID를 최종 기준으로 유지한다.
- P1-P2는 8초 opening block으로 묶을 수 있지만 visual beat는 구분한다.
- 플래너 대체, 사람 없이 운영 가능, 자동 학습/집행 표현을 쓰지 않는다.
- 실무 tone을 유지하되 실제 경험담처럼 들리는 1인칭 표현은 피한다.
- final message는 반복 확인 감소와 판단 시간 확보에 둔다.

## 8. Timing Checklist

- [ ] Executive total duration은 5:00 기준을 유지한다.
- [ ] Planner total duration은 1:30 기준을 유지한다.
- [ ] 모든 scene에 start/end time과 duration이 있다.
- [ ] E1 또는 E15에 가상 presenter 고지가 있다.
- [ ] Planner 영상의 가상 presenter 고지는 P1/P2 시작부 또는 P9 종료부에 명확히 표시한다.
- [ ] P3 첫 presenter 등장은 짧은 `AI-generated virtual presenter` caption을 함께 둘 수 있지만, 시작부 또는 종료부 고지를 대체하지 않는다.
- [ ] Planner mock/dummy visual/data 고지는 시작부 또는 종료부에 명확히 표시하고, 실제 화면처럼 보이는 scene에도 필요한 고지를 둔다.
- [ ] E5-E8 product scenes는 각 제품별 timecode를 보존한다.
- [ ] P4-P8 product/Core scenes는 각 제품별 timecode를 보존한다.
- [ ] 한 scene에는 하나의 핵심 message만 둔다.
- [ ] Korean caption은 한 beat에서 읽을 수 있을 만큼 짧다.
- [ ] disclosure가 transition이나 presenter shot에 가려지지 않는다.

## 9. Layout Checklist

- [ ] 먼저 정지 frame으로 이해 가능한 layout을 정의한다.
- [ ] product/Core 설명 장면은 diagram, product card, sanitized mock이 주 화면이다.
- [ ] presenter는 opening, transition, guide, closing 역할로 제한한다.
- [ ] caption이 presenter 얼굴, product card label, 핵심 diagram을 가리지 않는다.
- [ ] 한 frame에 핵심 caption은 1개만 둔다.
- [ ] dummy label은 3-5개 이하로 유지한다.
- [ ] 실제 dashboard처럼 보이는 상세 table이나 log 화면을 만들지 않는다.
- [ ] 16:9 landscape를 primary frame으로 둔다.
- [ ] 9:16 또는 1:1 cutdown은 별도 승인 전 제작하지 않는다.
- [ ] paused frame에서도 message가 이해된다.

## 10. Caption And Disclosure Checklist

Required disclosure options:

- Executive virtual presenter: `본 영상의 presenter는 생성형 AI로 제작한 가상 캐릭터이며 실제 임직원이 아닙니다.`
- Planner virtual presenter: `본 콘텐츠의 presenter는 생성형 AI로 제작한 가상 캐릭터입니다. 실제 인물 또는 임직원을 나타내지 않습니다.`
- Short presenter disclosure: `AI-generated virtual presenter`
- Dummy visual: `화면 예시는 비식별 mock visual입니다.`
- Dummy data: `실제 광고주, 캠페인, 계정, 성과 데이터가 아닙니다.`
- No performance promise: `예측은 성과 약속이 아니라 다음 판단을 위한 가설입니다.`
- Human approval: `최종 판단과 승인은 사람이 수행합니다.`

Caption rules:

- [ ] Caption은 12-24자 권장, 최대 2줄을 넘기지 않는다.
- [ ] 제품명은 `Compass`, `Sentinel`, `Lens`, `Foresight`, `Agent Core`로 쓴다.
- [ ] Openclaw/Hermes는 caption의 주 제품명으로 쓰지 않는다.
- [ ] 실제 광고주, 캠페인, 계정, 성과 수치를 caption에 넣지 않는다.
- [ ] `완전 자동`, `성과 보장`, `AI가 승인 없이 집행`처럼 읽히는 표현을 쓰지 않는다.
- [ ] Foresight 장면에는 가설/관점 표현을 넣는다.
- [ ] Sentinel과 Agent Core 장면에는 사람 승인 또는 governance cue를 넣는다.

## 11. Presenter Cue Checklist

- [ ] Presenter는 실제 인물, 임직원, 고객, 광고주, 유명인처럼 보이거나 말하지 않는다.
- [ ] Presenter는 가상 캐릭터 또는 브랜드 guide로만 설명한다.
- [ ] Executive E4-E10, E12-E13은 presenter face보다 diagram/product card 중심이다.
- [ ] Planner P5-P8은 voice-over 또는 optional side reference 중심이다.
- [ ] Presenter asset은 파일명 reference로만 다루며 이미지를 열거나 복사하지 않는다.
- [ ] Beauty/lipstick, mirror selfie, real street/signage, Lua logo card, back view identity scene은 official scene에서 제외한다.
- [ ] Presenter가 제품 기능을 실제 사용 후기처럼 말하지 않는다.
- [ ] Presenter shot은 caption/disclosure를 가리지 않는다.
- [ ] Closing에서 soft smile은 가능하지만 testimonial tone은 금지한다.

## 12. Mock Visual Safety Checklist

- [ ] 모든 visual은 dummy data, abstract card, diagram, sanitized mock 기준이다.
- [ ] 실제 Slack, Supabase, Vercel, dashboard, DB, API, log 화면을 쓰지 않는다.
- [ ] 실제 광고주, 캠페인, 계정, 예산, 계약, 성과, 개인 정보가 없다.
- [ ] URL은 `example.com`, `admate.ai.kr`, `demo.admate.ai.kr` 외 사용하지 않는다.
- [ ] 수치는 꼭 필요한 경우에도 mock임을 알 수 있는 rounded/sample 값만 사용한다.
- [ ] Lens는 실제 capture output처럼 만들지 않는다.
- [ ] Sentinel은 승인 없는 차단/집행 UI처럼 보이지 않게 한다.
- [ ] Compass는 실제 정책 전문이나 고객 계약 조건을 보여주지 않는다.
- [ ] Foresight는 실제 benchmark/source 또는 성과 약속처럼 보이지 않게 한다.
- [ ] Agent Core는 DB schema, API key, token, internal log를 보여주지 않는다.
- [ ] Asset/media output은 생성, stage, commit하지 않는다.

## 13. Frame QA Checklist

Content QA:

- [ ] Scene ID가 E1-E15 또는 P1-P9와 일치한다.
- [ ] Planning block은 canonical scene을 대체하지 않는다.
- [ ] Product role이 approved message library와 일치한다.
- [ ] Agent Core는 internal orchestration layer로 표현된다.
- [ ] Openclaw/Hermes는 내부 engine으로만 설명된다.

Text QA:

- [ ] Korean caption이 frame 안에 들어간다.
- [ ] On-screen text는 voiceover보다 짧다.
- [ ] 한 화면의 핵심 문구가 1개로 제한된다.
- [ ] 실제 수치, 계정명, 내부 URL처럼 보이는 text가 없다.
- [ ] 금지 표현이 없다.

Visual QA:

- [ ] Layout은 motion 없이도 이해된다.
- [ ] Product card, diagram, mock UI가 실제 내부 화면처럼 보이지 않는다.
- [ ] Presenter가 정보 구조를 가리지 않는다.
- [ ] Mock visual pack ID가 scene-level dummy visual spec과 일치한다.
- [ ] Disclosure가 읽을 수 있는 위치와 크기로 배치된다.

Safety QA:

- [ ] 가상 presenter 고지가 있다.
- [ ] Dummy visual/data 고지가 필요한 scene에 있다.
- [ ] Foresight/ROI 장면에 no performance promise cue가 있다.
- [ ] Sentinel/Agent Core/governance 장면에 human approval cue가 있다.
- [ ] asset, render, image generation, external API 실행으로 이어지는 문구가 없다.

## 14. Executive Text-only Storyboard Prompt

아래 prompt는 text-only storyboard 작성에만 사용한다.

```text
너는 AdMate Creative Studio Agent다.

목표:
Executive 5min 영상 storyboard를 E1-E15 canonical scene 기준으로 작성한다.
Hyperframes-style block은 scene grouping과 frame QA 사고 방식으로만 사용하고, production scene ID를 바꾸지 않는다.

반드시 유지:
- E1-E15 scene ID, timecode, message order
- Compass: 정책/가이드 근거 확인
- Sentinel: 세팅 검수와 운영 이상 감지
- Lens: 캡처와 증빙
- Foresight: 예측 가설과 분석 관점, 성과 보장 아님
- Agent Core: 권한, 승인, 감사 로그, 학습 후보 기준의 orchestration layer
- Openclaw/Hermes는 Agent Core 내부 engine으로만 설명

출력:
1. E1-E15 timing table
2. 각 scene의 scene block
3. on-screen text와 caption
4. disclosure 적용 위치
5. presenter cue와 presenter asset filename reference, 필요한 경우만
6. mock visual pack ID
7. frame QA checklist 결과

금지:
- 영상 생성, render, image generation, 외부 API 호출
- Hyperframes code, CLI, package, catalog, skill, external assets 사용
- 실제 내부 화면, 광고주, 캠페인, 계정, 성과 수치 사용
- AI Influencer 파일 열람, 수정, 이동, stage, commit
- 완전 자동, 성과 보장, 사람 승인 없는 학습/집행 표현
```

## 15. Planner Text-only Storyboard Prompt

아래 prompt는 text-only storyboard 작성에만 사용한다.

```text
너는 AdMate Creative Studio Agent다.

목표:
Planner 90s 영상 storyboard를 P1-P9 canonical scene 기준으로 작성한다.
Hyperframes-style 8 block은 P1-P2 opening을 묶는 planning view로만 사용하고, P scene ID를 바꾸지 않는다.

반드시 유지:
- P1-P9 scene ID, timecode, message order
- 반복 확인 감소와 판단 시간 확보 message
- Compass: 정책/가이드 근거 확인
- Sentinel: 세팅 검수와 운영 이상 감지
- Lens: 캡처와 증빙
- Foresight: 예측 가설과 분석 관점, 성과 보장 아님
- Agent Core: 판단이 다음 기준으로 축적되는 구조, 검토 가능한 학습 후보
- AdMate는 플래너를 대체하지 않는 업무 파트너라는 message

출력:
1. P1-P9 timing table
2. 각 scene의 scene block
3. on-screen text와 caption
4. disclosure 적용 위치
5. presenter cue와 presenter asset filename reference, 필요한 경우만
6. mock visual pack ID
7. frame QA checklist 결과

금지:
- 영상 생성, render, image generation, 외부 API 호출
- Hyperframes code, CLI, package, catalog, skill, external assets 사용
- 실제 내부 화면, 광고주, 캠페인, 계정, 성과 수치 사용
- AI Influencer 파일 열람, 수정, 이동, stage, commit
- 플래너 대체, 완전 자동 운영, 성과 보장, 사람 승인 없는 학습/집행 표현
```

## 16. Frame Spec Prompt

아래 prompt는 이미 승인된 storyboard scene의 text-only still-frame spec을 정리할 때만 사용한다.

```text
너는 AdMate Creative Studio Agent다.

목표:
선택된 scene의 text-only frame spec을 작성한다. 이미지를 생성하지 않고, render하지 않고, 외부 API를 호출하지 않는다.

입력:
- scene_id:
- planning_block_id:
- video_type:
- timecode:
- core_message:
- product_scope:
- mock_visual_pack:

출력:
- frame purpose
- static layout description
- primary on-screen text
- secondary dummy labels
- caption placement
- disclosure placement
- presenter placement, 필요한 경우만
- product card 또는 diagram 요소
- mock data policy
- text overflow risk
- presenter overlap risk
- safety risk
- frame QA checklist result

규칙:
- E/P scene ID를 유지한다.
- layout before motion 원칙만 사용한다.
- 실제 내부 화면, 계정, 광고주, 캠페인, 성과 수치를 쓰지 않는다.
- presenter asset은 파일명 reference로만 다룬다.
- Hyperframes code, CLI, render, package, catalog, skill, external assets는 사용하지 않는다.
```

## 17. Review Output Template

Storyboard 또는 frame spec 검토 결과는 아래 형식을 사용한다.

```text
Gate:
Video type:
Source scene IDs:
Planning block IDs:
Decision:
Total duration:
Scene mapping status:
P0 blockers:
P1 fixes:
Resolved prior findings:
Product role alignment:
Caption/disclosure coverage:
Presenter cue alignment:
Mock visual safety:
Frame QA:
No-touch areas confirmed:
Next Gate:
```

Review output rule:

- Prior findings that are already fixed must be removed from active `P1 fixes` or moved to `Resolved prior findings` so closure notes and readiness findings do not disagree.

Decision values:

- `Pass as text storyboard`
- `Pass with P1 rewrite`
- `Blocked by scene mapping conflict`
- `Blocked by product role conflict`
- `Blocked by safety issue`
- `Ready for frame spec Gate`

Recommended next Gates:

- `Gate CreativeStudio-Hyperframes-Alignment-2`
- `Gate CreativeStudio-Executive-Storyboard-QA-1`
- `Gate CreativeStudio-Planner-Storyboard-QA-1`
- `Gate CreativeStudio-Frame-Spec-1`

## 18. Final Local Prompt Pack Checklist

- [ ] Design Director source path와 commit hash를 기록했다.
- [ ] 원문을 그대로 복사하지 않고 Creative Studio 기준으로 재작성했다.
- [ ] E1-E15와 P1-P9 canonical scene ID를 유지했다.
- [ ] Caption/disclosure guide의 고지 문구와 충돌하지 않는다.
- [ ] Presenter-scene asset map의 등장 범위와 충돌하지 않는다.
- [ ] Scene-level dummy visual spec의 MVP mapping과 충돌하지 않는다.
- [ ] Mock visual pack plan의 actual screen prohibition과 충돌하지 않는다.
- [ ] Approved message library와 product one-liners의 역할 정의를 유지했다.
- [ ] Hyperframes code, CLI, render, package, catalog, skill, external assets를 carry over하지 않았다.
- [ ] 영상, 이미지, 음성, asset, 외부 API 작업을 실행하지 않았다.
