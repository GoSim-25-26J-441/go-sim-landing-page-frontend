"use client";

import { useEffect, useRef, useState } from "react";
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
    <section ref={ref} className={`flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 about-s7 ${isInView ? "about-s7-visible" : ""}`}>
      <div className="about-s7-title">
        <Title title="Built for learning and real-world design" isUnderline={false} className="mb-2" />
        <div className="about-s7-underline" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-around">
        <div className="about-s7-left">
        <SubSection
          title="For students & researchers"
          description="Learn microservices with realistic tooling, generate figures for reports, and experiment with patterns and countermeasures."
        />
        </div>

        {/* Mobile: horizontal line */}
        <div className={`block md:hidden relative w-full h-px overflow-hidden about-s7-line-x ${isInView ? "about-s7-line-x-visible" : ""}`}>
          <div className="absolute inset-0 bg-white" />
        </div>

        {/* Desktop: vertical line */}
        <div className={`hidden md:block relative w-2 overflow-hidden about-s7-line ${isInView ? "about-s7-line-visible" : ""}`}>
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white" />
        </div>

        <div className="about-s7-right">
        <SubSection
          title="For engineers & teams"
          description="Review architectures, catch issues early, and explain complex designs using graphs and simulations instead of static diagrams."
        />
        </div>
      </div>
      <style jsx>{`
        .about-s7-title :global(h1) { clip-path: inset(0 100% 0 0); }
        .about-s7-visible .about-s7-title :global(h1) {
          animation: about-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s7-underline {
          height: 2px; width: 0; margin-top: 0.5rem; margin-bottom: 2rem; background: white; display: block;
        }
        .about-s7-visible .about-s7-underline {
          animation: about-underline 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        .about-s7-left { clip-path: inset(0 0 0 100%); }
        .about-s7-right { clip-path: inset(0 100% 0 0); }
        .about-s7-visible .about-s7-left {
          animation: about-expand-left 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s7-visible .about-s7-right {
          animation: about-expand-right 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
        }
        .about-s7-line > div { transform: scaleY(0); transform-origin: center; }
        .about-s7-line-visible > div {
          animation: about-line-y 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        .about-s7-line-x > div { transform: scaleX(0); transform-origin: center; }
        .about-s7-line-x-visible > div {
          animation: about-line-x 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        @keyframes about-reveal-lr { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-underline { to { width: 100%; } }
        @keyframes about-expand-left { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-expand-right { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-line-y { to { transform: scaleY(1); } }
        @keyframes about-line-x { to { transform: scaleX(1); } }
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
