# Portfolio (임재정)

원 페이지 Portfolio. 요구사항은 `실습/PRD.md`, 규칙은 `실습/CLAUDE.md` 참고.

## 로컬 실행
```bash
cd backend  && npm install && npm run dev   # http://localhost:4000/api/profile
cd frontend && npm install && npm run dev   # http://localhost:3000
```
Frontend는 `API_BASE_URL`(기본 `http://localhost:4000`)로 Backend를 호출합니다.

## Vercel 배포 (프로젝트 2개)
1. `backend/` 를 Root Directory로 지정해 배포 → `https://<backend>.vercel.app/api/profile`
2. `frontend/` 를 Root Directory로 지정하고 환경변수 `API_BASE_URL=https://<backend>.vercel.app`, `NEXT_PUBLIC_SITE_URL=<frontend 도메인>` 설정 후 배포
