"use client";

import { useColors } from "@/hooks/useColors";

const mono = "var(--font-geist-mono, 'Geist Mono', monospace)";

const jobs = [
  {
    company: "Capx",
    location: "Remote",
    badge: null,
    role: "Full-Stack Engineer Intern",
    bullets: [
      "Led end-to-end development of fizzylabs.ai as primary engineer — prompt-to-generation pipeline, real-time data flows.",
      "Engineered n8n automation pipelines for marketing workflows and cross-channel content distribution.",
      "Implemented Solidity presale contracts deployed on mainnet with token distribution and on-chain payment logic.",
    ],
    stack: ["NEXT.JS", "CONVEX", "SOLIDITY", "N8N"],
    period: "Aug 2025 – Jan 2026",
  },
  {
    company: "Miracle",
    location: "Remote",
    badge: null,
    role: "Frontend Developer Intern",
    bullets: [
      "Developed frontend of a cross-platform trading app in React Native for Android & iOS.",
      "Integrated WebSocket-based real-time market data streams and backend APIs.",
      "Managed client-side state synchronization under continuous live trading data flow.",
      "Built and maintained the company website.",
    ],
    stack: ["REACT NATIVE", "TYPESCRIPT", "WEBSOCKETS"],
    period: "Dec 2025 – Jan 2026",
  },
  {
    company: "Blocsoc IITR",
    location: "Roorkee",
    badge: null,
    role: "Core Member",
    bullets: [
      "Developed blockchain applications and led product design for multiple web3 projects.",
      "Won Based India 2024, Anon Aadhaar track at ETHIndia, and Arbitrum track at ETHGlobal.",
    ],
    stack: ["SOLIDITY", "RUST", "REACT"],
    period: "Mar 2024 – Present",
  },
];

export default function Experience() {
  const c = useColors();

  return (
    <div className="flex flex-col items-start gap-8 md:gap-12.25 w-full pt-5 pb-20 md:pb-39">

      {/* Section label */}
      <div className="flex flex-row items-center gap-4.25 w-full">
        <span
          className="text-[10px] leading-4.25 tracking-[1.2px] font-normal"
          style={{ fontFamily: mono, color: c.tertiary }}
        >
          EXPERIENCE
        </span>
         <div className="flex-1 h-px" style={{ backgroundColor: c.border }} />
      </div>

      {/* Rows */}
      <div className="flex flex-col items-start w-full">
        {jobs.map(({ company, location, badge, role, bullets, stack, period }) => (
          <div
            key={company}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full pt-5 pb-5 md:pt-7.5 md:pb-8.25 border-t"
            style={{ borderColor: c.border }}
          >
            {/* Left: company info */}
            <div className="w-full md:w-45 flex flex-col items-start gap-1.75 md:shrink-0">
              <div className="flex flex-col items-start gap-[3px]">
                <span
                  className="text-[13px] leading-6 font-normal"
                  style={{ fontFamily: mono, color: c.primary }}
                >
                  {company}
                </span>
                <span
                  className="text-[11px] leading-4.75 font-normal"
                  style={{ fontFamily: mono, color: c.secondary }}
                >
                  {location}
                </span>
              </div>
              {badge && (
                <div
                  className="flex items-center justify-center w-full px-2 py-0.75 border rounded-[1px]"
                  style={{ borderColor: c.tertiary }}
                >
                  <span
                    className="text-[10px] leading-4.25 font-normal"
                    style={{ fontFamily: mono, color: c.tertiary }}
                  >
                    {badge}
                  </span>
                </div>
              )}
            </div>

            {/* Middle: role + bullets + stack */}
            <div className="flex flex-col items-start gap-2 flex-1">
              <span
                className="w-full text-[13px] leading-6 font-normal"
                style={{ fontFamily: mono, color: c.primary }}
              >
                {role}
              </span>
              <div className="flex flex-col items-start gap-1 w-full pb-[5px]">
                {bullets.map((b, i) => (
                  <div key={i} className="flex flex-row items-start gap-2 w-full">
                    <div className="w-[5px] pt-[9px] shrink-0">
                      <div className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: c.tertiary }} />
                    </div>
                    <span
                      className="flex-1 text-[12px] leading-4.75 font-normal"
                      style={{ fontFamily: mono, color: c.secondary }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap items-center gap-1.5 w-full">
                {stack.map((s) => (
                  <div
                    key={s}
                    className="flex flex-row items-center gap-1.25 px-2 py-0.75 border rounded-[1px]"
                    style={{ borderColor: c.tertiary }}
                  >
                    {/* <div className="w-2.75 h-2.75" /> */}
                    <span
                      className="text-[10px] leading-2.5 tracking-[0.6px] font-normal"
                      style={{ fontFamily: mono, color: c.tertiary }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: period */}
            <div className="w-full md:w-40 flex flex-col items-start py-0 md:py-1 md:shrink-0">
              <div className="flex justify-start md:justify-end items-center w-full">
                <span
                  className="text-[10px] leading-4.25 tracking-[0.6px] font-normal"
                  style={{ fontFamily: mono, color: c.secondary }}
                >
                  {period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
