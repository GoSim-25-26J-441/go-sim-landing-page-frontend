"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "../../common/tittle/page";
import mark1 from "../../../images/icon/mark1.png";
import type { Points } from "../../common/card2/page";

type Part = {
  part1?: Points[];
  part2?: Points[];
};

export type Section4Props = {
  title?: [string, string];   
  points?: [Part, Part];    
};

function PointsList({
  title,
  items,
}: {
  title?: string;
  items?: Points[];
}) {
  return (
    <div className="max-w-7xl p-6 md:p-0 mb-10">
      <ul className="space-y-4 flex-1 mt-2">
        {title && (
          <div className="section4-title-block mb-10">
            <Title title={title} isUnderline={false} className="mb-2" />
            <div className="section4-title-underline" />
          </div>
        )}

        {items?.map((point, index) => (
          <li
            key={`${index}-${point.mainPoints}-${point.subPoints}`}
            className="text-sm text-[#7D7F86] flex flex-row items-start gap-3"
          >
            <div className="shrink-0 w-3 h-3 mt-0.5">
              <Image
                src={mark1}
                alt="point icon"
                width={16}
                height={16}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flow grid-flow-col">
              <p className="text-white font-bold text-xs leading-relaxed">
                {point.mainPoints}
              </p>
              <p className="text-white/80 font-normal text-xs leading-relaxed">
                {point.subPoints}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section4({ title, points }: Section4Props) {
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
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:px-0 section4-grid ${isInView ? "section4-visible" : ""}`}>
        <div className="section4-left">
          <PointsList title={title?.[0]} items={points?.[0]?.part1} />
        </div>
        <div className="section4-right">
          <PointsList title={title?.[1]} items={points?.[1]?.part2} />
        </div>
      </div>

      <style jsx>{`
        /* Both parts: come from left to right (clip-path reveal) */
        .section4-left {
          clip-path: inset(0 100% 0 0);
        }
        .section4-right {
          clip-path: inset(0 100% 0 0);
        }
        .section4-visible .section4-left {
          animation: section4-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .section4-visible .section4-right {
          animation: section4-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
        }
        @keyframes section4-reveal-lr {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        /* Underline after topic: width grow left to right (global - element is in PointsList) */
        :global(.section4-title-underline) {
          display: block;
          height: 2px;
          width: 0;
          margin-top: 0.5rem;
          background: white;
        }
        .section4-visible :global(.section4-title-underline) {
          animation: section4-underline-grow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }
        @keyframes section4-underline-grow {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
