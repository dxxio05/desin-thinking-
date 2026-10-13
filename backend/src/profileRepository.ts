import type { Profile } from "./types.js";
import profileData from "./data/profile.json" with { type: "json" };

/**
 * 프로필 데이터 접근 계층.
 * v1은 JSON 파일에서 읽는다. DB(Neon Postgres) 도입 시 이 함수의 구현만 교체하면
 * API 응답 형식(Profile)은 그대로 유지된다.
 */
export async function getProfile(): Promise<Profile> {
  return profileData as Profile;
}
