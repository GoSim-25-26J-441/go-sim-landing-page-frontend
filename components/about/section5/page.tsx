"use client";

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

  return (
    <section className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20">
      <Title title="From definition to insight in four steps" isUnderline />

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-8 lg:hidden mt-12">
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
        className="hidden lg:block relative mt-12"
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
