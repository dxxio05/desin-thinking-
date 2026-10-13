import type { ReactNode } from "react";
import type { Profile } from "@/lib/profile";
import SectionTitle from "./SectionTitle";
import { ChartIcon, HeartIcon, LandmarkIcon, TheaterIcon } from "./Icons";

const ICONS: ReactNode[] = [
  <ChartIcon key="c" size={46} strokeWidth={1.5} />,
  <TheaterIcon key="t" size={46} strokeWidth={1.5} />,
  <LandmarkIcon key="l" size={46} strokeWidth={1.5} />,
  <HeartIcon key="h" size={46} strokeWidth={1.5} />,
];

export default function Activities({ activities }: { activities: Profile["activities"] }) {
  return (
    <section id="activities" className="mx-auto mt-24 flex w-full max-w-[1168px] scroll-mt-24 flex-col items-center gap-14 px-5 md:mt-[120px] md:gap-[100px]">
      <SectionTitle>학교 활동내역</SectionTitle>
      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-[60px]">
        {activities.map((a, i) => (
          <li
            key={a.title}
            className="relative flex min-h-[200px] flex-col justify-between gap-7 bg-surface p-8 md:p-[50px]"
          >
            <span className="text-accent">{ICONS[i % ICONS.length]}</span>
            <span className={`text-2xl font-medium leading-snug md:text-[28px] ${i === 0 ? "text-foreground" : "text-muted"}`}>
              {a.title}
            </span>
            {i === 0 && <div className="absolute inset-x-0 bottom-0 h-[5px] bg-accent" />}
          </li>
        ))}
      </ul>
    </section>
  );
}
