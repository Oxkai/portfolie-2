"use client";

import { useColors } from "@/hooks/useColors";

const mono = "var(--font-geist-mono, 'Geist Mono', monospace)";
const serif = "var(--font-instrument-serif, serif)";

const links = [
  { label: "email", href: "mailto:ajay_mo@ma.iitr.ac.in" },
  { label: "github", href: "https://github.com/Oxkai" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ajay-odedra-b26923283/" },
  { label: "x", href: "https://x.com/0xkai_1" },
];

export default function Footer() {
  const c = useColors();

  return (
    <footer
      className="w-full border-t px-5 py-8 md:px-19 md:py-12 mx-auto"
      style={{ borderColor: c.border }}
    >
      {/* Mobile layout */}
      <div className="flex flex-row justify-between  md:hidden items-end">
         <span
          className="text-[36px] leading-9 tracking-[-0.72px] italic font-normal"
          style={{ fontFamily: serif, color: c.primary }}
        >
          0xkai.me
        </span>

       

        <div className="flex flex-col items-end gap-3">
          <div className="flex flex-col items-end gap-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] leading-6 font-normal"
                style={{ fontFamily: mono, color: c.primary }}
              >
                {label}
              </a>
            ))}
          </div>
          

          <span
            className="text-[10px] leading-4.25 tracking-[0.6px] font-normal text-right"
            style={{ fontFamily: mono, color: c.secondary }}
          >
            New Delhi, IN
          </span>
        </div>
        
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-row justify-between items-end">
        <span
          className="text-[40px] leading-10 tracking-[-0.8px] italic font-normal"
          style={{ fontFamily: serif, color: c.primary }}
        >
          0xkai.me
        </span>

        <div className="flex flex-col items-end gap-3 w-57.75 shrink-0">
          <div className="flex flex-col items-end w-full">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="w-full text-right text-[11px] leading-6 font-normal"
                style={{ fontFamily: mono, color: c.primary }}
              >
                {label}
              </a>
            ))}
          </div>

          <span
            className="w-full text-right text-[10px] leading-4.25 tracking-[0.6px] font-normal"
            style={{ fontFamily: mono, color: c.secondary }}
          >
            New Delhi, IN — Available worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}
