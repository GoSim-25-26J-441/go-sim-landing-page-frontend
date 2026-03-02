"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";
import { ArrowRightToLine } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Import",
    point: [
      "Upload YAML/JSON or describe your architecture in chat.",
      "GO-SIM parses services, endpoints, and dependencies.",
    ],
  },
  {
    step: 2,
    title: "Visualize",
    point: [
      "See an interactive graph of services, calls, and data stores.",
      "Filter by service, database, or boundary.",
    ],
  },
  {
    step: 3,
    title: "Inspect",
    point: [
      "Highlight anti-patterns and follow warning badges in the graph.",
      "Drill down into chat explanations and pattern details.",
    ],
  },
  {
    step: 4,
    title: "Simulate",
    point: [
      "Run scenarios and see how performance and cost might change.",
      "Export metrics and diagrams for your reports.",
    ],
  },
];

type StepCardProps = {
  title: string;
  step: number;
  point: string[];
};

function StepCard({ title, step, point }: StepCardProps) {
  return (
    <div className="h-full flex flex-col w-full justify-center my-10">
      <div className="shrink-0 mb-6">
        <div className="text-xl font-base text-white text-center flex justify-center items-center gap-2 mb-3">
          <span>Step</span>
          <span className="font-bold">{step}</span>
        </div>

        <h2 className="text-md font-bold text-white mb-4 text-center">
          {title}
        </h2>

        <div className="w-full h-px bg-white/80 animate-grow-center-x" />
      </div>

      <Card1 points={point} />

      <style jsx>{`
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
        .animate-grow-center-x {
          transform-origin: left;
          animation: grow-center-x 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default function Section5() {
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
    <section ref={ref} className={`relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20 about-s5 ${isInView ? "about-s5-visible" : ""}`}>
      <div className="about-s5-title">
        <Title title="From definition to insight in four steps" isUnderline={false} className="mb-2" />
        <div className="about-s5-underline" />
      </div>

      {/* Mobile: stacked */}
      <div className="about-s5-steps flex flex-col gap-8 lg:hidden mt-12">
        {steps.map((s) => (
          <StepCard
            key={s.step} 
            title={s.title}
            step={s.step}
            point={s.point}
          />
        ))}
      </div>

      {/* Desktop: staircase layout */}
      <div
        className="about-s5-steps hidden lg:block relative mt-12"
        style={{ height: "800px" }}
      >
        {steps.map((s, index) => (
          <div
            key={s.step}
            className="absolute"
            style={{
              top: `${index * 180}px`,
              left: `${index * 25}%`,
              width: "350px",
              maxWidth: "350px",
            }}
          >
            <StepCard title={s.title} step={s.step} point={s.point} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .about-s5-title :global(h1) { clip-path: inset(0 100% 0 0); }
        .about-s5-visible .about-s5-title :global(h1) {
          animation: about-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s5-underline {
          height: 2px; width: 0; margin-top: 0.5rem; margin-bottom: 2rem; background: white; display: block;
        }
        .about-s5-visible .about-s5-underline {
          animation: about-underline 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        .about-s5-steps { opacity: 0; transform: translateY(24px); }
        .about-s5-visible .about-s5-steps {
          animation: about-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }
        @keyframes about-reveal-lr { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-underline { to { width: 100%; } }
        @keyframes about-fade-up { to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <Link
        href={""}
        className="flex justify-end underline items-center text-sm font-bold text-white mt-10"
      >
        {"View a sample project"}
        <span className="inline-block mx-1">
          <ArrowRightToLine size={12} />
        </span>
      </Link>
    </section>
  );
}
