import type { Profile } from "@/lib/profile";
import SectionTitle from "./SectionTitle";

export default function Career({ careers }: { careers: Profile["careers"] }) {
  return (
    <section id="career" className="mx-auto mt-24 flex w-full max-w-[1168px] scroll-mt-24 flex-col items-center gap-14 px-5 md:mt-[120px] md:gap-[73px]">
      <SectionTitle>수상 및 외부 경력</SectionTitle>
      <ul className="grid w-full grid-cols-1 gap-12 border border-[#333333] bg-surface px-6 py-12 sm:grid-cols-2 md:px-12 md:py-[60px] lg:grid-cols-4">
        {careers.map((c) => (
          <li key={c.title} className="flex flex-col items-center gap-4 text-center">
            <span className="text-6xl font-bold leading-none text-muted md:text-7xl">{c.period.slice(0, 4)}</span>
            <span className="text-xl font-bold leading-snug text-accent">{c.title}</span>
            <span className="text-sm font-medium text-[#f2f2f2]">{c.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
