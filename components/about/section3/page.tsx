"use client";

import { useEffect, useRef, useState } from "react";
import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

const points = [
  "Turn YAML/JSON into an architecture graph.",
  "Automatically detect dangerous patterns like chatty calls and god services.",
  "Simulate workloads to understand latency, throughput, and cost.",
];

export default function Section3() {
  const ref = useRef<HTMLDivElement>(null);
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
    <div ref={ref} className={`flex flex-col justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 about-s3 ${isInView ? "about-s3-visible" : ""}`}>
      <div className="about-s3-title">
        <Title title="What is ArcFind?" isUnderline={false} className="pb-0 mb-2" />
        <div className="about-s3-underline" />
      </div>
      <h2 className="about-s3-desc my-2 text-sm font-normal text-white/80 leading-relaxed">
        {"GO-SIM is a web-based tool that helps you design, inspect, and stress-test microservice architectures. It turns your service definitions into an interactive graph, detects architecture anti-patterns, and runs simulations to estimate performance and cost."}
      </h2>
      <div className="about-s3-cards">
        <Card1 points={points} />
      </div>

      <style jsx>{`
        .about-s3-title :global(h1) { clip-path: inset(0 100% 0 0); }
        .about-s3-visible .about-s3-title :global(h1) {
          animation: about-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s3-underline {
          height: 2px; width: 0; margin-top: 0.5rem; background: white; display: block;
        }
        .about-s3-visible .about-s3-underline {
          animation: about-underline 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        @keyframes about-reveal-lr { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-underline { to { width: 100%; } }
        .about-s3-desc, .about-s3-cards { opacity: 0; transform: translateY(20px); }
        .about-s3-visible .about-s3-desc {
          animation: about-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
        }
        .about-s3-visible .about-s3-cards {
          animation: about-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
        }
        @keyframes about-fade-up { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}