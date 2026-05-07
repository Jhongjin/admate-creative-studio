# Video Production Safety Gate v1

작성일: 2026-05-07
상태: Gate Creative-Studio-5 draft
용도: mock visual, storyboard frame, presenter test clip, final assembly 이전의 안전 검수 기준

## Gate Principle

AdMate Creative Studio의 영상 제작은 "빠른 생성"보다 "민감 정보 비노출, 실제 인물 오인 방지, 사람 승인 기반 운영 메시지 유지"가 우선이다. 어떤 후속 제작 작업도 이 safety gate를 통과하기 전에는 진행하지 않는다.

## Global Stop Conditions

다음 중 하나라도 발견되면 제작을 중단한다.

- 실제 내부 화면, Slack, Supabase, Vercel, DB/API/log가 보인다.
- 실제 광고주명, 캠페인명, 계정 ID, 성과 수치, 예산, 계약 정보가 포함된다.
- Presenter가 실제 임직원, 고객, 광고주 담당자, 실제 인플루언서처럼 보인다.
- "완전 자동 운영", "성과 보장", "사람 승인 없는 학습/집행"처럼 들리는 표현이 있다.
- `AI Influencer/` PNG 또는 image/video/audio asset이 git stage 대상에 포함된다.
- 외부 영상/AI API 호출, asset upload, TTS/lip-sync/image-to-video 호출이 승인 없이 진행된다.

## Gate 0: Document Readiness

후속 제작 전 다음 문서가 최신인지 확인한다.

- `docs/scripts/executive-5min-video-script-v1.md`
- `docs/storyboard/executive-5min-scene-shotlist-v1.md`
- `docs/scripts/planner-90s-video-script-v1.md`
- `docs/storyboard/planner-90s-scene-shotlist-v1.md`
- `docs/presenter/presenter-asset-usage-plan-v1.md`
- `docs/storyboard/presenter-scene-asset-map-v1.md`
- `docs/production/mock-visual-pack-plan-v1.md`
- `docs/security/video-production-safety-checklist-v1.md`

Pass criteria:

- [ ] Script와 shotlist가 같은 scene 구조를 사용한다.
- [ ] 각 scene에 visual direction과 safety cue가 있다.
- [ ] 가상 presenter disclosure가 포함되어 있다.
- [ ] 실제 캠페인/광고주/계정/성과 정보가 없다.

## Gate 1: Mock UI Image Generation

목적: 실제 화면 없이 safe mock visual을 만든다.

Input allowed:

- Scene ID
- Mock visual pack ID: MVP-01 to MVP-11
- Allowed dummy labels
- Color/layout direction
- Safety note

Input prohibited:

- 실제 screenshot
- 실제 Slack/Supabase/Vercel/DB/API/log
- 실제 광고주/캠페인/계정명
- 실제 성과 수치
- API key, token, internal URL

Pass criteria:

- [ ] 모든 text가 dummy 또는 approved copy다.
- [ ] URL은 `example.com`, `admate.ai.kr`, `demo.admate.ai.kr` 중 하나다.
- [ ] 계정 ID는 표시하지 않는다.
- [ ] 수치는 rounded/mock only다.
- [ ] output이 이미지 asset이면 commit/stage하지 않는다.

## Gate 2: Storyboard Frame Generation

목적: scene별 visual frame을 만들되 내부 정보와 실제 인물 오인을 방지한다.

Pass criteria:

- [ ] Scene ID가 shotlist와 일치한다.
- [ ] Frame 안에 실제 내부 화면이 없다.
- [ ] Presenter가 등장하면 가상 캐릭터 고지가 영상 또는 description에 포함된다.
- [ ] Product diagram이 실제 아키텍처나 DB/API 구조를 노출하지 않는다.
- [ ] Frame output asset은 git stage하지 않는다.

## Gate 3: Presenter Test Clip

목적: presenter tone, expression, disclosure, background safety를 짧게 확인한다.

Input allowed:

- Presenter role: virtual presenter only
- Approved script excerpt
- Generic studio/background instruction
- Asset filename as reference note only

Input prohibited:

- 실제 인물 reference
- 실제 직원/고객/광고주 역할 설정
- 실제 voice clone
- `AI Influencer/` 원본 PNG upload without approval
- 내부 화면 합성

Pass criteria:

- [ ] Presenter가 실제 직원처럼 자기소개하지 않는다.
- [ ] "저는 AdMate 운영팀 담당자입니다" 같은 문장이 없다.
- [ ] 배경에 문서, 모니터, 사원증, 개인정보가 없다.
- [ ] 의상, 표정, 말투가 presenter guide와 일치한다.
- [ ] Test clip asset은 git stage하지 않는다.

## Gate 4: Final Video Assembly

목적: approved script, safe mock visual, presenter disclosure를 결합한다.

Pass criteria:

- [ ] Final cut은 approved script 또는 승인된 수정본을 사용한다.
- [ ] 모든 frame이 mock visual pack 기준을 통과했다.
- [ ] Presenter disclosure가 시작 또는 종료에 있다.
- [ ] 성과 보장, 완전 자동 운영, 무승인 학습/집행 표현이 없다.
- [ ] 내부 화면, 실제 이름, 계정, URL, 성과 수치가 없다.
- [ ] Export video/audio/image asset은 repo에 commit하지 않는다.

## Review Checklist by Audience

### Executive 5min

- [ ] 경쟁력, 운영 지식 자산화, 안전한 AI 운영, 비용/ROI 관리가 중심이다.
- [ ] Product 설명보다 governance와 운영 체계를 강조한다.
- [ ] Presenter는 opening/closing 또는 짧은 transition 중심이다.
- [ ] Product section은 diagram/product card가 중심이다.

### Planner 90s

- [ ] "반복 확인이 줄고 판단 시간이 늘어난다"가 중심이다.
- [ ] 실제 동료/선배처럼 말하지 않는다.
- [ ] Policy check, pre-check, capture proof, forecast hypothesis가 구체적으로 보인다.
- [ ] 최종 판단과 승인은 사람이 한다는 메시지가 남아 있다.

## Sensitive Information Scan

제작 전후 다음 항목을 수동으로 확인한다.

- [ ] 사람 이름, 이메일, 전화번호, ID
- [ ] 광고주명, 캠페인명, 브랜드명, 계약명
- [ ] 계정 ID, platform ID, pixel ID, dataset name
- [ ] URL, API endpoint, dashboard 주소
- [ ] API key, token, secret, env var
- [ ] 실적 수치, 예산, invoice, billing
- [ ] Slack channel, Supabase table, Vercel deployment log

## Safe Dummy Data Appendix

Allowed:

- `Sample Brand`
- `Demo Client`
- `Demo Campaign`
- `Planner A`
- `Reviewer`
- `Owner`
- `example.com`
- `admate.ai.kr`
- `demo.admate.ai.kr`
- `Sample score 82`
- `~20%`
- `1.2x`
- `2026-05-01`

Not allowed:

- 실제 광고주명
- 실제 캠페인명
- 실제 계정 ID
- 실제 내부 URL
- 실제 성과 수치
- 실제 임직원명 또는 고객명

## Git Safety Before Commit

문서 커밋 전 다음을 확인한다.

```powershell
git diff --check
git status --short --ignored
git diff --cached --name-only
```

반드시 통과해야 하는 조건:

- [ ] `AI Influencer/`는 ignored 상태다.
- [ ] `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.mp4`, `.mov`, `.wav`, `.mp3`가 staged에 없다.
- [ ] 문서 파일만 staged 상태다.
- [ ] secret pattern scan에 실제 key/token/credential이 없다.
- [ ] large file scan에 5MB 초과 staged 파일이 없다.

## Approval Record Template

```text
Gate:
Date:
Reviewer:
Audience: Executive / Planner / External / Internal
Scene IDs:
Mock Visual Pack IDs:
Presenter disclosure checked: yes/no
Sensitive information checked: yes/no
Asset staged: no
Decision: pass / revise / stop
Notes:
```
