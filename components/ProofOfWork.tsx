"use client";

import { useState } from "react";
import { useColors } from "@/hooks/useColors";

const mono = "var(--font-geist-mono, 'Geist Mono', monospace)";
const serif = "var(--font-instrument-serif, serif)";

const projects = [
  {
    num: "01",
    name: "Orbital",
    desc: "Full implementation of Paradigm's Orbital paper — an N-dimensional CFMM where liquidity lives on a sphere surface, not a curve. Tick-based concentration for capital efficiency gains up to 15x in the 5-asset case. Solidity + Python, fuzz-tested with Foundry.",
    tag: "CFMM · Multi-asset pools · Solidity",
    stack: ["SOLIDITY", "PYTHON"],
    links: [{ label: "github", href: "https://github.com/Oxkai/orbital" }, { label: "paper", href: "https://www.paradigm.xyz/2025/06/orbital" }],
    border: "border-b md:border-r md:border-b",
  },
  {
    num: "02",
    name: "EVM from Scratch",
    desc: "Ethereum Virtual Machine in Rust — 140 opcodes, stateful account model with balances, storage and contract code. Stack-based execution consistent with the Yellow Paper.",
    tag: "EVM · 140 opcodes · Yellow Paper",
    stack: ["RUST"],
    links: [{ label: "github", href: "" }],
    border: "border-b",
  },
  {
    num: "03",
    name: "Colosseum",
    desc: "Trustless on-chain agent competition with betting on Arbitrum Stylus — game state management, verifiable move validation, and deterministic payout settlement in Rust.",
    tag: "Arbitrum Stylus · Agent arena · Rust",
    stack: ["RUST", "REACT"],
    links: [{ label: "github", href: "https://github.com/18aaddy/Agentic-Ethereum" }],
    border: "border-b md:border-r md:border-b",
  },
  {
    num: "04",
    name: "Fizzy",
    desc: "AI platform for UI, logo and visual asset generation — 8,000+ users. Prompt refinement pipeline, real-time workflows at 10–12s latency via Convex, Stripe billing.",
    tag: "Next.js · Convex · 8k+ users",
    stack: ["NEXT.JS", "CONVEX", "GEMINI"],
    links: [{ label: "website", href: "https://www.fizzylabs.ai" }],
    border: "border-b",
  },
  {
    num: "05",
    name: "Miracle",
    desc: "Cross-platform trading app frontend in React Native — WebSocket-based real-time market data, client-side state sync under live trading data flow. Shipped on iOS & Android.",
    tag: "React Native · WebSockets · Trading",
    stack: ["REACT NATIVE", "TYPESCRIPT"],
    links: [{ label: "website", href: "https://www.miracletrade.com" }, { label: "app store", href: "https://apps.apple.com/in/app/miracle-trading-reimagined/id6757129362" }],
    border: "border-b md:border-r md:border-t md:border-b-0",
  },
  {
    num: "06",
    name: "ProxyFox",
    desc: "Pay-per-use API proxy with HTTP 402-style gating — on-chain payment verification, request interception, and automated payment flows for API integration.",
    tag: "HTTP 402 · On-chain payments · API",
    stack: ["NEXT.JS", "TYPESCRIPT"],
    links: [{ label: "github", href: "https://github.com/Oxkai/ProxyFox" }],
    border: "border-b md:border-t md:border-b-0",
  },
];

export default function ProofOfWork() {
  const [hoveredNum, setHoveredNum] = useState<string | null>(null);
  const c = useColors();

  return (
    <div className="flex flex-col items-start gap-8 md:gap-12 w-full pt-5 pb-20 md:pb-39">

      {/* Section label */}
      <div className="flex flex-row items-center gap-4.25 w-full">
        <span
          className="text-[10px] leading-4.25 tracking-[1.2px] font-normal"
          style={{ fontFamily: mono, color: c.tertiary }}
        >
          PROOF OF WORK
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: c.border }} />
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {projects.map((p) => {
          const isHovered = hoveredNum === p.num;
          return (
            <div
              key={p.num}
              onMouseEnter={() => setHoveredNum(p.num)}
              onMouseLeave={() => setHoveredNum(null)}
              role="button"
              className={`relative flex flex-col items-start gap-3.75 p-5 md:p-9.5 min-h-60 md:min-h-72 overflow-visible ${p.border}`}
              style={{
                backgroundColor: c.surfaceAlt,
                borderColor: c.border,
              }}
            >
              {/* Hover background overlay — fades independently so theme changes are instant */}
              <span
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                  backgroundColor: c.surface,
                  opacity: isHovered ? 1 : 0,
                }}
              />

              {/* Animated top border sweeps left→right on hover */}
              <span
                className="pointer-events-none absolute top-0 left-0 h-px z-10 origin-left transition-transform duration-500 ease-out"
                style={{
                  width: "100%",
                  backgroundColor: c.primary,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                }}
              />

              {/* Header: number + github links */}
              <div className="relative z-10 flex flex-row justify-between items-start w-full">
                <span
                  className="text-[10px] leading-4.25 tracking-[1.2px] font-normal"
                  style={{ fontFamily: mono, color: c.tertiary }}
                >
                  {p.num}
                </span>
                <div className="flex flex-row items-center  gap-2.75">
                  {p.links.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="flex flex-row justify-center items-center gap-0.75">
                      <span
                        className="text-[11px] leading-4.75 font-normal"
                        style={{ fontFamily: mono, color: c.tertiary }}
                      >
                        {l.label}
                      </span>
                      <div className="flex items-end" style={{ paddingTop: 1 }}>
                        <span
                          style={{
                            display: "inline-block",
                            width: 6,
                            height: 6,
                            backgroundColor: c.tertiary,
                            maskImage: "url(/svg/arrow-external.svg)",
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            WebkitMaskImage: "url(/svg/arrow-external.svg)",
                            WebkitMaskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            transform: isHovered ? "translate(1px, -1px)" : "translate(0px, 0px)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="relative z-10 flex flex-col items-start gap-2.5 w-full flex-1">
                <span
                  className="w-full text-[22px] leading-6.5 tracking-[-0.66px] font-normal"
                  style={{ fontFamily: serif, color: c.primary }}
                >
                  {p.name}
                </span>
                <p
                  className="w-full text-[12px] leading-5 font-normal flex-1"
                  style={{ fontFamily: mono, color: c.secondary }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-row flex-wrap items-center gap-1.5 pt-1.75 pb-0.75">
                  {p.stack.map((s) => (
                    <div
                      key={s}
                      className="flex flex-row items-center gap-1.25 px-2 py-0.75 border rounded-[1px]"
                      style={{ borderColor: c.border }}
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
                <span
                  className="text-[11px] leading-4.75 font-normal"
                  style={{ fontFamily: mono, color: c.tertiary }}
                >
                  {p.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
