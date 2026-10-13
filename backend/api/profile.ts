import { getProfile } from "../src/profileRepository";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export async function GET(): Promise<Response> {
  const profile = await getProfile();
  return Response.json(profile, {
    headers: {
      ...CORS_HEADERS,
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}

export function OPTIONS(): Response {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
