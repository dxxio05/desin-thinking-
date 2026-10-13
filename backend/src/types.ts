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
