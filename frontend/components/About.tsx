import type { ReactNode } from "react";
import type { Profile } from "@/lib/profile";
import SectionTitle from "./SectionTitle";
import { BookIcon, HashIcon, MailIcon, PhoneIcon, SchoolIcon, UserIcon } from "./Icons";

export function InfoItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[18px]">
      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-surface text-accent">{icon}</div>
      <div className="flex flex-col items-center gap-[3px] text-center text-lg">
        <span className="font-bold">{label}</span>
        <span className="break-all">{children}</span>
      </div>
    </div>
  );
}

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="mx-auto mt-24 flex w-full max-w-[1168px] scroll-mt-24 flex-col items-center gap-14 px-5 md:mt-[120px] md:gap-[70px]">
      <SectionTitle>자기소개</SectionTitle>
      <p className="max-w-[760px] whitespace-pre-line text-center text-lg leading-[1.8]">{profile.intro}</p>
      <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <InfoItem icon={<UserIcon />} label="이름">{profile.name}</InfoItem>
        <InfoItem icon={<SchoolIcon />} label="학교">{profile.school}</InfoItem>
        <InfoItem icon={<BookIcon />} label="전공">{profile.major}</InfoItem>
        <InfoItem icon={<HashIcon />} label="학번">{profile.studentId}</InfoItem>
        <InfoItem icon={<PhoneIcon />} label="Tel"><a href={`tel:${profile.tel}`}>{profile.tel}</a></InfoItem>
        <InfoItem icon={<MailIcon />} label="E-Mail"><a href={`mailto:${profile.email}`}>{profile.email}</a></InfoItem>
      </div>
    </section>
  );
}
