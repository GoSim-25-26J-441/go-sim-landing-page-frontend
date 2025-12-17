"use client";

import Title from "../../common/tittle/page";

type SubSectionProps = {
  title: string;
  description: string;
};

function SubSection({ title, description }: SubSectionProps) {
  return (
    <div className="flex flex-col my-5 w-full gap-3">
      <h1 className="text-sm font-bold text-white">{title}</h1>
      <h1 className="text-xs font-normal text-white/80 leading-relaxed">{description}</h1>
    </div>
  );
}

export default function Section7() {
  return (
    <section className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Title title="Built for learning and real-world design" isUnderline />

      <div className="flex flex-col md:flex-row gap-4 justify-around">
        <SubSection
          title="For students & researchers"
          description="Learn microservices with realistic tooling, generate figures for reports, and experiment with patterns and countermeasures."
        />

        {/* ✅ Mobile: horizontal line */}
        <div className="block md:hidden relative w-full h-px overflow-hidden">
          <div className="absolute inset-0 bg-white animate-grow-center-x" />
        </div>

        {/* ✅ Desktop: vertical line */}
        <div className="hidden md:block relative w-2 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white animate-grow-center-y" />
        </div>

        <SubSection
          title="For engineers & teams"
          description="Review architectures, catch issues early, and explain complex designs using graphs and simulations instead of static diagrams."
        />
      </div>
      <style jsx>{`
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
