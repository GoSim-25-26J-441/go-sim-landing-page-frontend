"use client";

import { useEffect, useRef, useState } from "react";
import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

const data = [
  {
    title: "Architecture graph view",
    description:
      "Navigate through services, inspect call paths, and highlight dependencies. The graph helps you see how requests move through your system and where data flows might become risky.",
    point: [
      "Filter by service, database, or tag.",
      "Highlight paths between two services.",
      "Export diagrams for documentation.",
    ],
  },
  {
    title: "Anti-pattern insights",
    description:
      "GO-SIM lists all detected anti-patterns with severity, location, and explanation, so you can quickly understand why something is risky.",
    point: [
      "See issues like 'Chatty calls from Service A to Service B'.",
      "Jump directly from a pattern entry to the graph location.",
      "Read short explanations and suggestions for improvement.",
    ],
  },
  {
    title: "Simulation & metrics",
    description:
      "Configure load scenarios and review estimated latency, throughput, and error rates at a glance.",
    point: [
      "Choose workload intensity and failure scenarios.",
      "View summary metrics and time-series charts.",
      "Compare results between different architecture designs.",
    ],
  },
  {
    title: "Chat with your architecture",
    description:
      "Ask questions like you would in ChatGPT, but about your system design.",
    point: [
      "Show me bottlenecks in this architecture.",
      "Where do I have shared databases?",
      "Which services depend on Service X?",
    ],
  },
];

type FeatureCardProps = {
  title: string;
  description: string;
  point: string[];
};

function FeatureCard({ title, description, point }: FeatureCardProps) {
  return (
    <div className="h-full flex flex-col bg-[#111827] border border-white rounded-xl hover:white/50 transition-all hover:shadow-xl">
      <div className="w-full h-[300px] aspect-video bg-linear-to-br from-slate-700 to-slate-800 rounded-t-xl mb-6 flex items-center justify-center">
        <span className="text-slate-500 text-sm">Feature Preview</span>
      </div>

      <div className="flex- flex-row justify-center w-full h-[50%] items-center p-3">
        
        <h3 className="text-sm font-bold text-white mb-3 text-center">
          {title}
        </h3>

        <p className="text-xs font-normal text-gray-400 mb-3 leading-relaxed text-center">
          {description}
        </p>

        <div className="mt-2 h-0.5 w-full bg-white mb-3" />


        <Card1 points={point} />
      </div>
    </div>
  );
}

export default function Section6() {
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
    <section ref={ref} className={`relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 about-s6 ${isInView ? "about-s6-visible" : ""}`}>
      <div className="about-s6-title">
        <Title title="Explore the product" isUnderline={false} className="mb-2" />
        <div className="about-s6-underline" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {data.map((feature, index) => (
          <div key={index} className="about-s6-card" style={{ animationDelay: `${index * 0.1}s` }}>
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            point={feature.point}
          />
          </div>
        ))}
      </div>

      <style jsx>{`
        .about-s6-title :global(h1) { clip-path: inset(0 100% 0 0); }
        .about-s6-visible .about-s6-title :global(h1) {
          animation: about-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s6-underline {
          height: 2px; width: 0; margin-top: 0.5rem; margin-bottom: 2rem; background: white; display: block;
        }
        .about-s6-visible .about-s6-underline {
          animation: about-underline 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        .about-s6-card { opacity: 0; transform: translateY(24px); }
        .about-s6-visible .about-s6-card {
          animation: about-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes about-reveal-lr { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-underline { to { width: 100%; } }
        @keyframes about-fade-up { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}
