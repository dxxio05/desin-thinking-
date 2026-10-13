# PRD: 개인 Portfolio 사이트

## 1. 배경 및 목표
서울시립대학교 경영학부 임재정의 활동과 경력을 소개하는 개인 Portfolio 사이트를 만든다. 하위 페이지 이동 없이 한 페이지를 스크롤하며 모든 내용을 볼 수 있어야 한다. 향후 Database 연동과 Vercel 배포를 전제로 Frontend와 Backend를 분리한다.

## 2. 대상 사용자
- 채용 담당자, 인턴·공모전 심사자
- 동아리·학과 동료 및 후배
- 프로필을 공유받은 일반 방문자

## 3. 범위
**포함**
- 원 페이지 Portfolio UI (Figma 참고 디자인)
- 프로필 데이터를 제공하는 Backend API
- Vercel 배포

**제외 (1차 버전)**
- Database 실제 연동 (구조만 준비)
- 로그인, 관리자 화면, 방명록 등 쓰기 기능
- 다국어 지원

## 4. 페이지 구성 (스크롤 순서)
| 순서 | 섹션 | 내용 |
|------|------|------|
| 1 | Hero | 이름 임재정, 프로필 이미지(`실습/docs/프로필사진.png`), 한 줄 소개 |
| 2 | 개인정보 | 이름 임재정 / 학교 서울시립대학교 / 전공 경영학부 / 학번 199526000 / Tel 010-0000-0000 / E-Mail limjj157@naver.com |
| 3 | 자기소개 | 아래 본문 참고 |
| 4 | 학교 활동내역 | 시립대경영정보연구회 2기 회장 · 중앙 동아리 연극반 10기 연출 담당 · 경영학부 학생회 부회장 · 경영학부 사람사랑 소모임 창립멤버 |
| 5 | 주요 수상 및 외부 경력 | (주)원스텝 인턴 2025.01~2025.07 · 2025 KOICA 글로벌 서포터즈 참여 2025.08 · 2026 서울시립대학교 해커톤 경진대회 3위 입상 2026.07 · 대한민국 모두의 창업 2기 프로젝트 지원 2026.09 |
| 6 | Contact / Footer | 이메일, 전화 |

**자기소개 본문**
> 안녕하세요!
> 서울시립대학교에서 경영학을 전공 중인 95학번 임재정 입니다.
> 데이터 분석과 MIS에 관심이 많아 시경연에서 2기 회장으로 활발히 활동하고 있습니다.
> 긍정적인 에너지와 논리적 사고로 팀의 성장을 돕는 인재입니다!!

## 5. 기능 요구사항
- FR-1. 상단 고정 내비게이션이 각 섹션 앵커로 스크롤 이동한다. 부드러운 스크롤을 적용한다.
- FR-2. 현재 보고 있는 섹션이 내비게이션에 표시된다.
- FR-3. 프로필 데이터는 `GET /api/profile`로 조회하여 렌더링한다.
- FR-4. 활동내역과 경력은 목록 형태이며, 경력은 기간을 함께 표시한다.
- FR-5. 이메일은 `mailto:`, 전화번호는 `tel:` 링크로 제공한다.
- FR-6. 모바일, 태블릿, 데스크톱에서 레이아웃이 깨지지 않는다.

## 6. 비기능 요구사항
- Vercel에 배포 가능한 기술 스택을 사용한다.
- Java 관련 기술은 사용하지 않는다.
- 접근성: 이미지 대체 텍스트, 키보드 탐색, 충분한 색상 대비.
- SEO: title, description, Open Graph 메타데이터.
- 성능: Lighthouse Performance 90 이상을 목표로 한다. 이미지는 최적화한다.

## 7. 기술 아키텍처
```
[Browser] → [Frontend: Next.js + TS + Tailwind]
                   │  fetch GET /api/profile
                   ▼
            [Backend: Vercel Functions (Node/TS)]
                   │  repository 계층
                   ▼
   v1: JSON 데이터 파일  →  향후: Postgres (Neon)
```
- Frontend: `frontend/`, Backend: `backend/`로 분리한다.
- Backend는 repository 계층을 통해 데이터를 읽으므로, DB 도입 시 API 응답 형식은 유지된다.

## 8. 데이터 모델 (`Profile` 응답)
```json
{
  "name": "임재정",
  "school": "서울시립대학교",
  "major": "경영학부",
  "studentId": "199526000",
  "tel": "010-0000-0000",
  "email": "limjj157@naver.com",
  "intro": "…",
  "photo": "/profile.png",
  "activities": [{ "title": "시립대경영정보연구회 2기 회장" }],
  "careers": [{ "title": "(주)원스텝 인턴", "period": "2025.01 ~ 2025.07" }]
}
```
향후 DB 테이블 초안: `profile`, `activity`, `career` (activity와 career는 `profile_id` 외래키, `sort_order` 포함).

## 9. 디자인
- 참고: `실습/docs/Portfolio (Community).fig` 및 Figma 링크 (CLAUDE.md 참고).
- 여러 페이지로 나누지 않고 하나의 긴 페이지에서 스크롤하며 보는 방식.
- 색상, 폰트, 간격은 Figma에서 확인하여 Tailwind 설정에 반영한다.

## 10. 배포
- Vercel 프로젝트에 Frontend를 배포하고, Backend는 Vercel Functions로 배포한다.
- 환경변수는 Vercel 프로젝트 설정에서 관리한다.
- Preview 배포로 확인한 뒤 Production으로 승격한다.

## 11. 마일스톤
1. 디자인 분석: Figma에서 레이아웃과 디자인 토큰 추출
2. 프로젝트 세팅: `frontend/`, `backend/` 생성, 데이터 JSON 작성
3. 구현: 섹션별 UI, `/api/profile`, 내비게이션
4. 배포: Vercel Preview, Production
5. 확장: Database 연동

## 12. 확인이 필요한 사항
- 학번 `199526000`이 95학번 및 2025~2026년 경력과 맞지 않아 보인다. 확인이 필요하다.
- 전화번호 `010-0000-0000`은 임시 값으로 보인다. 공개 여부와 실제 값을 확인한다.
- 학번, 전화, 이메일을 사이트에 공개할지 확인한다.
- `.fig` 파일은 Figma에서 직접 열어 디자인 값을 확인해야 한다.
