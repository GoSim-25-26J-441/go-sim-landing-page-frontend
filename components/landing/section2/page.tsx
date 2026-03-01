"use client";

import { useEffect, useRef, useState } from "react";
import Card1 from "../../common/card1/page";

export type Section2Pros = {
  titles: string[];
  description: string[];
  parts: { title?: string; description?: string; points?: string[] }[];
};

export default function Section2({ titles, description, parts }: Section2Pros) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mb-20">
      <div className={`grid lg:grid-cols-3 gap-8 lg:gap-6 section2-grid ${isInView ? "section2-visible" : ""}`}>
        <div className="section2-left">
          <Card1 points={parts[0].points} />
        </div>
        
        <div className="section2-center flex flex-col lg:flex-row lg:border-x-2 border-y-2 lg:border-y-0 border-white items-center justify-around py-8 lg:py-0 lg:px-8">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-xl lg:text-2xl font-bold text-white">{titles[0]}</h1>
            <p className="text-xs lg:text-[8px] font-normal text-white/80 mt-1">{description[0]}</p>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white lg:mx-10">{"&"}</h1>
          
          <div className="text-center lg:text-right flex-1">
            <h1 className="text-xl lg:text-2xl font-bold text-white">{titles[1]}</h1>
            <p className="text-xs lg:text-[8px] font-normal text-white/80 mt-1">{description[1]}</p>
          </div>
        </div>
        
        <div className="section2-right">
          <Card1 points={parts[1].points} />
        </div>
      </div>

      <style jsx>{`
        /* Expand from center: left grows center→left, right grows center→right */
        .section2-left {
          clip-path: inset(0 0 0 100%);
        }
        .section2-right {
          clip-path: inset(0 100% 0 0);
        }
        .section2-center {
          opacity: 0;
        }

        .section2-visible .section2-left {
          animation: section2-expand-left 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .section2-visible .section2-center {
          animation: section2-expand-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }
        .section2-visible .section2-right {
          animation: section2-expand-right 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes section2-expand-left {
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes section2-expand-right {
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes section2-expand-center {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}