# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code를 위한 프로젝트 가이드입니다. 제품 요구사항은 `PRD.md`를 참고하세요.

## 프로젝트 개요
개인 Portfolio 사이트(임재정). 여러 하위 페이지 없이, **하나의 긴 페이지를 스크롤**하며 모든 콘텐츠를 보는 원 페이지 웹사이트입니다. Vercel에 배포합니다.

## 원본 자료
- 요구사항: `실습/docs/Profile_요구사항.txt`
- 프로필 이미지: `실습/docs/프로필사진.png`
- Figma 파일: `실습/docs/Portfolio (Community).fig`
- 디자인 참고(Figma): https://www.figma.com/design/isMqGYYV6k9IWap1589ORk/Portfolio--Community-?node-id=0-1&p=f&t=47WdNGMriZQpG8xD-0

## 기술 스택
Vercel 배포가 가능해야 하며 Java 관련 기술은 사용하지 않습니다.

| 영역 | 기술 |
|------|------|
| Frontend (`frontend/`) | Next.js (App Router) + TypeScript + Tailwind CSS |
| Backend (`backend/`) | Vercel Functions (Node.js / TypeScript), `GET /api/profile` |
| Database (예정) | Vercel Marketplace Postgres (Neon). 1차 버전에서는 연동하지 않음 |

## 디렉터리 구조 (목표)
```
design-thinking/
├── CLAUDE.md
├── PRD.md
├── 실습/docs/          # 원본 요구사항·이미지·Figma
├── frontend/           # Next.js 앱 (UI)
│   ├── app/
│   ├── components/     # 섹션별 컴포넌트
│   └── public/         # 프로필 이미지 등 정적 파일
└── backend/            # API (Vercel Functions)
    ├── api/profile.ts
    └── src/            # 데이터 접근 계층(repository)
```

## 명령어
프로젝트를 생성한 뒤 각 디렉터리에서 실행합니다.
- 개발 서버: `npm run dev`
- 빌드: `npm run build`
- 린트: `npm run lint`
- 배포: `vercel` (미리보기), `vercel --prod` (운영)

## 필수 제약
- 단순 HTML 파일로 개발하지 않는다. 향후 DB 연동이 가능한 구조여야 한다.
- Frontend와 Backend를 분리해서 개발한다.
- 원 페이지 형식(앵커 스크롤)으로 개발하고, 별도 하위 페이지 라우트를 만들지 않는다.
- Java 관련 소스·도구는 사용하지 않는다.
- Vercel에 배포 가능한 기술만 사용한다.

## 개발 규칙
- UI 텍스트는 한국어를 기본으로 한다.
- 프로필 데이터(이름, 활동내역, 경력 등)는 컴포넌트에 하드코딩하지 않고 Backend API에서 받아 렌더링한다. 데이터 접근은 `backend/src`의 repository 계층에 두어, 나중에 JSON 파일에서 DB로 교체해도 API 응답 형식이 바뀌지 않게 한다.
- 컴포넌트는 섹션 단위(Hero, About, Activities, Awards 등)로 나눈다.
- 비밀 값은 환경변수로 관리하고 커밋하지 않는다. (`.env*`는 `.gitignore`)
- 전화번호·이메일 등 개인정보는 데이터 파일 한 곳에서만 관리한다. 요구사항의 값은 임시일 수 있으므로 공개 전에 사용자에게 확인한다.
- 디자인은 Figma 참고 파일을 따른다. `.fig`는 바이너리이므로 Figma에서 열어 색상·폰트·간격을 확인한다.
