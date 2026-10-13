// 로컬 개발용 서버: Vercel Function(api/profile.ts)과 같은 핸들러를 http://localhost:4000 에서 제공한다.
import { createServer } from "node:http";
import type { VercelResponse } from "@vercel/node";
import { handleProfile } from "./api/profile.js";

const port = Number(process.env.PORT ?? 4000);

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");
  if (pathname !== "/api/profile") {
    res.writeHead(404, { "Content-Type": "application/json" }).end('{"error":"Not Found"}');
    return;
  }
  // Vercel 응답 헬퍼(status/json)를 http.ServerResponse 위에 얹는다.
  const vres = res as unknown as VercelResponse;
  vres.status = (code: number) => {
    res.statusCode = code;
    return vres;
  };
  vres.json = (body: unknown) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(body));
    return vres;
  };
  await handleProfile(req.method, vres);
}).listen(port, () => console.log(`backend dev server: http://localhost:${port}/api/profile`));
