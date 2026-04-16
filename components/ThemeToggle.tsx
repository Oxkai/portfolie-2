"use client";

import { useEffect, useState } from "react";
import { light, dark as darkColors } from "@/constants/color";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored === "dark";
    setIsDark(dark);
    setMounted(true);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  }

  const c = isDark ? darkColors : light;

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed right-4 top-6.5 md:right-10 md:top-8 z-9998 p-2 -m-2"
      style={{ background: "none", border: "none", touchAction: "manipulation" }}
    >
      {/* Pill track */}
      <div
        className="relative flex items-center transition-colors duration-300"
        style={{
          width: 48,
          height: 28,
          borderRadius: 999,
          border: `1px solid ${c.secondary}`,
          padding: 3,
        }}
      >
        {/* Knob */}
        <div
          className="flex items-center justify-center transition-all duration-300"
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: isDark ? darkColors.primary : light.primary,
            transform: isDark ? "translateX(20px)" : "translateX(0px)",
            flexShrink: 0,
          }}
        >
          {/* Icon */}
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              backgroundColor: isDark ? light.primary : darkColors.primary,
              maskImage: `url(/svg/${isDark ? "moon" : "sun"}.svg)`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskImage: `url(/svg/${isDark ? "moon" : "sun"}.svg)`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </button>
  );
}
