import Image from "next/image";
import type { Profile } from "@/lib/profile";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="mx-auto flex w-full max-w-[1264px] flex-wrap items-center justify-between gap-12 px-5 pt-10 md:gap-x-[60px] md:px-10 md:pt-[60px]">
      <div className="flex flex-[1_1_320px] flex-col gap-9">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            안녕하세요,
            <br />
            {profile.name}입니다
          </h1>
          <p className="text-lg font-medium leading-relaxed text-muted">
            데이터 분석과 MIS에 관심이 많은
            <br />
            {profile.school} {profile.major} 학생
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a href="#contact" className="inline-flex h-[42px] w-[143px] items-center justify-center bg-accent text-sm font-medium text-background hover:text-background hover:brightness-110">
            연락하기
          </a>
          <a href="#about" className="inline-flex h-[42px] w-[143px] items-center justify-center border border-[#f2f2f2] bg-background text-sm font-medium">
            더 알아보기
          </a>
        </div>
      </div>
      <div className="relative flex aspect-square w-[650px] max-w-full flex-none items-center justify-center rounded-full border border-[#202020] bg-[#1e1d1d]/20">
        <div className="relative h-[92%] w-[92%] overflow-hidden rounded-full border border-[#4f4f4f] bg-[#1e1d1d]">
          <Image
            src={profile.photo}
            alt={`${profile.name} 프로필 사진`}
            fill
            priority
            sizes="(min-width: 768px) 600px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
