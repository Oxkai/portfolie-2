"use client";

import { useColors } from "@/hooks/useColors";

const mono = "var(--font-geist-mono, 'Geist Mono', monospace)";

const stackItems = ["SOLIDITY", "RUST", "TYPESCRIPT", "PYTHON", "C++", "NEXT.JS", "REACT NATIVE", "FOUNDRY", "ETHERS.JS", "CONVEX", "FIGMA", "FRAMER", "SPLINE", "N8N", "THE GRAPH", "DOCKER"];

export default function About() {
  const c = useColors();

  return (
    <div className="flex flex-col items-start gap-5 w-full pt-5 pb-16 md:pb-39">

      {/* About block */}
      <div
        className="flex flex-col items-start gap-10.75 w-full h-auto md:h-49.25 border-b pb-6 md:pb-0"
        style={{ borderColor: c.border }}
      >

        {/* Label row */}
        <div className="flex flex-row items-center gap-4.25 w-full">
          <span
            className="text-[10px] leading-4.25 tracking-[1.2px] font-normal"
            style={{ fontFamily: mono, color: c.tertiary }}
          >
            ABOUT
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: c.border }} />
        </div>

        {/* Bio paragraphs */}
        <div className="flex flex-col items-start gap-4.5 w-full md:w-195">
          <p
            className="w-full text-[13px] leading-6 font-normal"
            style={{ fontFamily: mono, color: c.secondary }}
          >
Hey, I’m Ajay — a 3rd-year Mathematics and Computing undergraduate at IIT Roorkee, currently working as a blockchain developer at BlocSoc IITR.          </p>
          <p
            className="w-full text-[13px] leading-6 font-normal"
            style={{ fontFamily: mono, color: c.secondary }}
          >
Interested in networking protocols, distributed systems, and blockchain fundamentals with a focus on DeFi — exploring protocols, building, and learning through hackathons.          </p>
        </div>
      </div>

      {/* Stack block */}
      <div className="flex flex-col items-start gap-3 w-full">
        <span
          className="w-full text-[10px] leading-4.25 tracking-[1.2px] font-normal"
          style={{ fontFamily: mono, color: c.tertiary }}
        >
          STACK
        </span>

        <div className="flex flex-row flex-wrap items-center gap-1.5 w-full">
          {stackItems.map((item) => (
            <div
              key={item}
              className="flex flex-row items-center gap-1.25 px-2 py-0.75 border rounded-[1px]"
              style={{ borderColor: c.border }}
            >
              {/* <div className="w-2.75 h-2.75" /> */}
              <span
                className="text-[10px] leading-2.5 tracking-[0.6px] font-normal"
                style={{ fontFamily: mono, color: c.tertiary }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
