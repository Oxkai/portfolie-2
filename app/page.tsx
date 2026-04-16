"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProofOfWork from "@/components/ProofOfWork";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(to top right, var(--bg-from), var(--bg-to))" }}>
      <section className="w-full  mx-auto flex flex-col items-start gap-3.5 pt-8 px-5 md:pt-14 md:px-38.5">
        <Hero />
        <About />
        <ProofOfWork />
        <Experience />
        <Achievements />
      </section>
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
