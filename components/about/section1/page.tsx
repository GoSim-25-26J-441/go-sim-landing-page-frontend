"use client";

import { useEffect, useRef, useState } from "react";

type Section1Props = {
  leftTitle: string;
  rightTitle: string;
  className?: string;
};

export default function Section1({
  leftTitle,
  rightTitle,
  className,
}: Section1Props) {
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
    <section ref={ref} className={className}>
      <div className={`flex flex-col md:flex-row md:items-baseline justify-center gap-5 about-s1 ${isInView ? "about-s1-visible" : ""}`}>
        <h2 className="about-s1-left text-2xl lg:text-5xl font-bold text-white leading-tight">
          {leftTitle}
        </h2>

        {/* Mobile: horizontal line */}
        <div className="block md:hidden relative w-full h-px overflow-hidden my-2">
          <div className={`absolute inset-0 bg-white/80 about-s1-line-x ${isInView ? "about-s1-line-x-visible" : ""}`} />
        </div>

        {/* Desktop: vertical line */}
        <div className="hidden md:block relative w-px h-10 overflow-hidden mx-2">
          <div className={`absolute inset-y-0 left-0 w-0.5 bg-white/80 about-s1-line-y ${isInView ? "about-s1-line-y-visible" : ""}`} />
        </div>

        <h2 className="about-s1-right text-xl lg:text-3xl font-normal text-white leading-tight">
          {rightTitle}
        </h2>
      </div>

      <style jsx>{`
        .about-s1-left { clip-path: inset(0 100% 0 0); }
        .about-s1-right { clip-path: inset(0 0 0 100%); }
        .about-s1-visible .about-s1-left {
          animation: about-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .about-s1-visible .about-s1-right {
          animation: about-reveal-rl 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }
        .about-s1-line-y { transform: scaleY(0); }
        .about-s1-line-y-visible {
          animation: about-line-y 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        .about-s1-line-x { transform: scaleX(0); }
        .about-s1-line-x-visible {
          animation: about-line-x 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        @keyframes about-reveal-lr { to { clip-path: inset(0 0 0 0); } }
        @keyframes about-reveal-rl { to { clip-path: inset(0 0 0 0); } }
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
