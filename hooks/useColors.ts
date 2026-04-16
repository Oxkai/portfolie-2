"use client";

import { useEffect, useState } from "react";
import { light, dark } from "@/constants/color";

export function useColors() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const read = () =>
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");

    read();

    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark ? dark : light;
}
