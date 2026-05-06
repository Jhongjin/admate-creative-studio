# Video Production Safety Checklist v1

작성일: 2026-05-06
목적: AdMate 관련 AI presenter/영상 제작 전 보안, 초상권, 브랜드, 내부자료 노출 리스크를 줄인다.

## 1. Asset Handling

- [ ] `AI Influencer/` 원본 PNG를 수정, 삭제, 이동, 리네이밍하지 않았다.
- [ ] asset은 가상 presenter 후보로만 사용한다.
- [ ] 실제 인물 imitation, 임직원 likeness, 유명인/공인 모사를 요청하지 않았다.
- [ ] reference asset을 외부 AI 도구에 업로드하기 전 승인 절차를 확인했다.
- [ ] final 영상에는 asset 출처와 생성형 AI 사용 여부를 내부 문서에 기록했다.

## 2. Presenter Disclosure

- [ ] 영상 시작 또는 종료에 "가상 presenter" 고지를 넣었다.
- [ ] 영상 description 또는 내부 배포 문서에도 고지했다.
- [ ] presenter에게 실제 직책, 실명, 부서, 고객명, 광고주 담당자 역할을 부여하지 않았다.
- [ ] presenter가 실제 경험담, 고객 후기, 임직원 발언을 증언하는 형식이 아니다.

권장 문구:

`본 영상의 presenter는 생성형 AI로 제작한 가상 캐릭터이며 실제 임직원이 아닙니다.`

## 3. Script Safety

- [ ] 광고주명, 캠페인명, 계정명, 계약명, 실제 budget이 없다.
- [ ] 내부 성과 수치, 전환율, ROAS, CPM, CPC 등 민감 지표가 없다.
- [ ] 고객 개인정보, segment 정보, raw audience data가 없다.
- [ ] 법적/성과 보장처럼 들리는 과장 문구를 제거했다.
- [ ] "자동으로 성과를 보장한다"는 메시지가 없다.
- [ ] 출처가 확인되지 않은 경쟁사/시장 claim을 넣지 않았다.

## 4. Visual Safety

- [ ] 실제 사무실, 회의실, 사원증, 좌석표, 화이트보드, 모니터 화면이 보이지 않는다.
- [ ] 내부 dashboard나 campaign report screenshot을 사용하지 않았다.
- [ ] 배경의 거리 표지, 상점명, 아파트/건물명, 로고가 식별되지 않는다.
- [ ] 제품 소품이 실제 브랜드 endorsement처럼 보이지 않는다.
- [ ] 자막과 화면 텍스트는 모두 dummy 또는 approved copy다.

## 5. URL-to-video Safety

- [ ] 입력 URL은 공개 페이지 또는 승인된 dummy page다.
- [ ] 내부 문서, private dashboard, advertiser report URL을 입력하지 않았다.
- [ ] tool output script를 사람이 다시 검토했다.
- [ ] page에서 자동 추출된 가격, claim, 이미지, 로고의 사용 권리를 확인했다.
- [ ] URL-to-video 결과물은 초안/무드보드로만 취급했다.

## 6. Image-to-video Consistency QA

- [ ] 얼굴형, 눈매, 헤어라인, 피부톤이 shot 간 유지된다.
- [ ] 의상은 ivory shirt/blouse 중심으로 통일된다.
- [ ] 손, 입, 치아, 귀걸이, 제품 소품에 artifact가 없다.
- [ ] 배경이 매 scene에서 AdMate corporate tone과 맞는다.
- [ ] vertical crop이 자막, 얼굴, 손을 어색하게 자르지 않는다.

## 7. Review Gate

내부 공유 전:

- [ ] 기획자 self-check 완료
- [ ] 보안 담당 또는 owner review 완료
- [ ] 브랜드 tone review 완료
- [ ] 민감 정보 scan 완료

외부 공개 전:

- [ ] 법무/컴플라이언스 review 완료
- [ ] 브랜드 final approval 완료
- [ ] 생성형 AI 고지 확인
- [ ] platform별 caption/description 확인
- [ ] final source와 export 파일 보관 위치 기록

## 8. Stop Conditions

다음 중 하나라도 해당하면 제작 또는 배포를 중단한다.

- 실제 인물처럼 보이도록 특정인을 reference했다.
- 내부 자료가 화면/자막/script에 포함됐다.
- 고객/광고주가 식별될 수 있다.
- URL-to-video가 비공개 URL을 사용했다.
- AI presenter가 실제 직원 발언처럼 보인다.
- final review 없이 외부 배포하려 한다.
