"use client";

import { useState } from "react";
import { useColors } from "@/hooks/useColors";

function NavLink({ label, href, c }: { label: string; href: string; c: ReturnType<typeof useColors> }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className="relative text-[11px] leading-4.75 tracking-[0.66px] font-normal"
      style={{ fontFamily: mono, color: c.primary }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-px origin-left transition-transform duration-150 ease-in-out"
        style={{
          width: "100%",
          backgroundColor: c.primary,
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </a>
  );
}

const mono = "var(--font-geist-mono, 'Geist Mono', monospace)";
const serif = "var(--font-instrument-serif, serif)";

export default function Hero() {
  const c = useColors();

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 w-full">
      {/* Left column */}
      <div className="flex flex-col items-start gap-4.5 flex-1 w-full">

        {/* Status row */}
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7ADC9E] shrink-0" />
          <span
            className="flex-1 text-[11px] leading-4.75 tracking-[1.1px] uppercase font-normal"
            style={{ fontFamily: mono, color: c.secondary }}
          >
            Blockchain developer — Roorkee, IN
          </span>
        </div>

        {/* Name + bio + links */}
        <div className="flex flex-col items-start w-full pb-6">

          {/* Name */}
          <div className="pb-5 md:pb-7">
            <span
              className="text-[52px] leading-[1.1] tracking-[-1.5px] md:text-[83px] md:leading-20.75 md:tracking-[-2.49px] font-normal"
              style={{ fontFamily: serif, color: c.primary }}
            >
              0xkai
            </span>
          </div>

          {/* Bio */}
          <div className="flex flex-row items-center w-full pb-6 md:pb-10">
            <p
              className="flex-1 text-[13px] leading-5.75 font-normal"
              style={{ fontFamily: mono, color: c.secondary }}
            >
Interested in DeFi and blockchain infrastructure, with a strong focus on distributed systems, networking protocols, consensus mechanisms, and low-level stuff.            </p>
          </div>

          {/* Links */}
          <div className="flex flex-row items-center gap-4 md:gap-6 py-2.5">
            {[
              { label: "EMAIL", href: "mailto:ajay_mo@ma.iitr.ac.in" },
              { label: "GITHUB", href: "https://github.com/Oxkai" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/ajay-odedra-b26923283/" },
              { label: "X", href: "https://x.com/0xkai_1" },
            ].map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} c={c} />
            ))}
          </div>
        </div>
      </div>

      {/* Right column — image/media placeholder */}
      <div className="hidden md:block flex-1 h-80 shrink-0" />
    </div>
  );
}
