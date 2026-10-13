// 로컬 개발용 서버: Vercel Function(api/profile.ts)과 같은 핸들러를 http://localhost:4000 에서 제공한다.
import { createServer } from "node:http";
import { GET, OPTIONS } from "./api/profile";

const port = Number(process.env.PORT ?? 4000);

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");
  if (pathname !== "/api/profile") {
    res.writeHead(404, { "Content-Type": "application/json" }).end('{"error":"Not Found"}');
    return;
  }
  const handler = req.method === "OPTIONS" ? OPTIONS : req.method === "GET" ? GET : null;
  if (!handler) {
    res.writeHead(405).end();
    return;
  }
  const response = await handler();
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
}).listen(port, () => console.log(`backend dev server: http://localhost:${port}/api/profile`));
