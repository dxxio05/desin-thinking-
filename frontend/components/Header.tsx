"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "자기소개" },
  { id: "activities", label: "활동내역" },
  { id: "career", label: "수상·경력" },
  { id: "contact", label: "Contact" },
];

export default function Header({ name }: { name: string }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 px-5 py-4 md:px-20 md:py-7">
        <a href="#top" className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {name}
        </a>
        <nav aria-label="주요 메뉴" className="flex flex-wrap gap-x-6 gap-y-2 text-base md:gap-x-10 md:text-lg">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "location" : undefined}
              className={active === n.id ? "text-accent" : "text-foreground"}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
