"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useColors } from "@/hooks/useColors";

export default function Cursor() {
  const c = useColors();
  const mx = useMotionValue(-20);
  const my = useMotionValue(-20);
  const [, setHovered] = useState(false);

  const x = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.6 });
  const y = useSpring(my, { stiffness: 300, damping: 28, mass: 0.6 });

  const size = useSpring(6, { stiffness: 400, damping: 28 });
  const opacity = useSpring(1, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const enter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button']")) {
        setHovered(true);
        size.set(22);
        opacity.set(0.10);
      }
    };

    const leave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button']")) {
        setHovered(false);
        size.set(6);
        opacity.set(1);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    window.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
      window.removeEventListener("mouseout", leave);
    };
  }, [mx, my, size, opacity]);

  return (
    <motion.div
      style={{
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: c.primary,
        opacity,
        pointerEvents: "none",
        zIndex: 9999,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
