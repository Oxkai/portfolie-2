"use client";

import { useColors } from "@/hooks/useColors";

const mono = "var(--font-geist-mono, 'Geist Mono', monospace)";
const serif = "var(--font-instrument-serif, serif)";

const items = [
  {
    num: "01",
    title: "EthGloble Agentic Ethereum",
    sub: "arbitrum best project track winner - $2,000, Collosseum",
    year: "2025",
  },
  {
    num: "02",
    title: "EthIndia",
    sub: "Best Use of Anon Aadhaar - $2,500, Tollchain",
    year: "2024",
  },
  {
    num: "03",
    title: "Base India Finalist",
    sub: "Finalist - 3.125 ETH, Neom",
    year: "2024",
  },
];

export default function Achievements() {
  const c = useColors();

  return (
    <div className="flex flex-col items-start gap-8 md:gap-12 w-full pt-5 pb-20 md:pb-39">

      {/* Section label */}
      <div className="flex flex-row items-center gap-4.25 w-full">
        <span
          className="text-[10px] leading-4.25 tracking-[1.2px] font-normal"
          style={{ fontFamily: mono, color: c.tertiary }}
        >
          THINGS I&apos;M PROUD OF
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: c.border }} />
      </div>

      {/* Rows */}
      <div className="flex flex-col items-start w-full">
        {items.map(({ num, title, sub, year }) => (
          <div
            key={num}
            className="flex flex-row items-start justify-between w-full h-auto py-4 md:h-22 md:py-5.5 border-t"
            style={{ borderColor: c.border }}
          >
            <span
              className="w-11 italic text-[18px] leading-7.75 font-normal shrink-0"
              style={{ fontFamily: serif, color: c.tertiary }}
            >
              {num}
            </span>
            <div className="flex flex-col items-start gap-0.75 flex-1 px-3 md:px-6">
              <span
                className="w-full text-[13px] leading-5.5 font-normal"
                style={{ fontFamily: mono, color: c.primary }}
              >
                {title}
              </span>
              <span
                className="w-full text-[12px] leading-4.75 font-normal"
                style={{ fontFamily: mono, color: c.secondary }}
              >
                {sub}
              </span>
            </div>
            <div className="flex items-center justify-center h-6.25">
              <span
                className="text-[11px] leading-4.75 font-normal"
                style={{ fontFamily: mono, color: c.secondary }}
              >
                {year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
