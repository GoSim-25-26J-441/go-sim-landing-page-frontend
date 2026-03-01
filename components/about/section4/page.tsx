"use client";

import { useEffect, useRef, useState } from "react";
import Card3 from "../../common/card3/page";
import Title from "../../common/tittle/page";

const points = [
  {
    title: "Design Input Processing Model",
    subTitle: "Design Input Processing",
    introduction:
      "Import microservice definitions from YAML/JSON or start from a natural language description in chat. GO-SIM parses services, endpoints, and data stores into a consistent internal model so you can work at the architecture level instead of raw files.",
  },
  {
    title: "Architecture Model & Anti-Pattern Detection (AMG & APD)",
    subTitle: "Architecture Model & Anti-Pattern Detection",
    introduction:
      "GO-SIM builds an interactive graph of services, calls, and databases. On top of that graph, it detects common microservice anti-patterns like chatty calls, cycles, god services, shared database writes, cross-DB reads, and tight coupling.",
  },
  {
    title: "Real-Time System Simulation",
    subTitle: "Real-Time System Simulation",
    introduction:
      "Configure traffic levels, latency, and failure scenarios, then let GO-SIM simulate how your architecture behaves. Explore bottlenecks, critical paths, and potential failure points without touching a live environment.",
  },
  {
    title: "Architecture Analysis & Suggestions",
    subTitle: "Architecture Analysis & Suggestions",
    introduction:
      "Review metrics such as estimated latency, throughput, and resource cost. Compare different architecture versions and get suggestions on where to simplify, decouple, or harden your design.",
  },
];

export default function Section4() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setIsInView(true); },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} className={`flex flex-col justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 about-s4 ${isInView ? "about-s4-visible" : ""}`}>
      <div className="about-s4-title">
        <Title title="Core capabilities" isUnderline={false} className="mb-2" />
        <div className="about-s4-underline" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-0">
        {points.map((point, index) => (
          <div key={index} className={`about-s4-card flex flex-col md:flex-row items-center`} style={{ animationDelay: `${index * 0.15}s` }}>
            {/* Card */}
            <Card3
              title={point.title}
              subTitle={point.subTitle}
              introduction={point.introduction}
            />

            {/* Line separator - show only if not the last item */}
            {index < points.length - 1 && (
              <>
                {/* Mobile: horizontal line */}
                <div className="block md:hidden w-full h-px my-6 overflow-hidden relative">
                  <div className="absolute inset-0 h-px bg-white animate-grow-center-x" />
                </div>

                {/* Desktop: vertical line */}
                <div className="hidden md:block w-px h-full mx-6 overflow-hidden relative min-h-[400px]">
                  <div className="absolute inset-0 w-px bg-white animate-grow-center-y" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .about-s4-title :global(h1) { clip-path: inset(0 100% 0 0); }
        .about-s4-visible .about-s4-title :global(h1) {
          animation: about-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s4-underline {
          height: 2px; width: 0; margin-top: 0.5rem; margin-bottom: 2rem; background: white; display: block;
        }
        .about-s4-visible .about-s4-underline {
          animation: about-underline 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        .about-s4-card { opacity: 0; transform: translateY(24px); }
        .about-s4-visible .about-s4-card {
          animation: about-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes about-reveal-lr { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-underline { to { width: 100%; } }
        @keyframes about-fade-up { to { opacity: 1; transform: translateY(0); } }
        @keyframes grow-center-y {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        @keyframes grow-center-x {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        .animate-grow-center-y {
          transform-origin: center;
          animation: grow-center-y 1.2s ease-out forwards;
        }
        .animate-grow-center-x {
          transform-origin: center;
          animation: grow-center-x 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}