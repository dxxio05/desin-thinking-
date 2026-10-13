import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getProfile } from "../src/profileRepository.js";

export async function handleProfile(method: string | undefined, res: VercelResponse): Promise<void> {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN ?? "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  res.status(200).json(await getProfile());
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  await handleProfile(req.method, res);
}
