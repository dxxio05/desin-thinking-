export interface Activity {
  title: string;
}

export interface Career {
  title: string;
  period: string;
}

export interface Profile {
  name: string;
  school: string;
  major: string;
  studentId: string;
  tel: string;
  email: string;
  intro: string;
  photo: string;
  activities: Activity[];
  careers: Career[];
}

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:4000";

export async function fetchProfile(): Promise<Profile> {
  const res = await fetch(`${API_BASE_URL}/api/profile`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`프로필 조회 실패: ${res.status}`);
  }
  return res.json();
}
