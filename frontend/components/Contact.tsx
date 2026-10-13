import type { Profile } from "@/lib/profile";
import SectionTitle from "./SectionTitle";
import { InfoItem } from "./About";
import { MailIcon, PhoneIcon } from "./Icons";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="mx-auto mt-24 flex w-full max-w-[1168px] scroll-mt-24 flex-col items-center gap-14 px-5 md:mt-[120px] md:gap-[70px]">
      <SectionTitle>Contact</SectionTitle>
      <div className="flex flex-wrap justify-center gap-x-[120px] gap-y-12">
        <InfoItem icon={<MailIcon />} label="이메일"><a href={`mailto:${profile.email}`}>{profile.email}</a></InfoItem>
        <InfoItem icon={<PhoneIcon />} label="전화"><a href={`tel:${profile.tel}`}>{profile.tel}</a></InfoItem>
      </div>
      <a href={`mailto:${profile.email}`} className="inline-flex h-[42px] w-[143px] items-center justify-center bg-accent text-sm font-medium text-background hover:text-background hover:brightness-110">
        메일 보내기
      </a>
    </section>
  );
}
