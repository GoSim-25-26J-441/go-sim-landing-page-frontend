"use client";

import { useEffect, useRef, useState } from "react";
import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

export type Section1Props = {
  title: string;
  description?: string;
  card?: card[];
};

type card = {
  title?: string;
  description?: string;
  points?: string[];
};

export default function Section1({ title, description, card }: Section1Props) {
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
    <div ref={sectionRef} className="max-w-7xl mx-auto p-8 relative overflow-hidden">
      
      <div className={`section1-content ${isInView ? "section1-content-visible" : ""}`}>
        <div className="section1-title mb-15">
          <div className="section1-title-text">
            <Title title={title} isUnderline={false} description={description} className="mb-2" />
          </div>
          <div className="section1-title-underline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {card?.map((item, index) => (
            <div key={index} className="section1-card" style={{ animationDelay: `${0.2 + index * 0.12}s` }}>
              <Card1
                title={item.title}
                description={item.description}
                isUnderline={true}
                points={item.points}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Title + description: left-to-right reveal */
        .section1-content .section1-title-text {
          clip-path: inset(0 100% 0 0);
        }
        .section1-content-visible .section1-title-text {
          animation: section1-reveal-lr 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes section1-reveal-lr {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        /* Underline: grow left to right */
        .section1-title-underline {
          height: 2px;
          margin-top: 0.5rem;
          background: white;
          transform-origin: left center;
          transform: scaleX(0);
        }
        .section1-content-visible .section1-title-underline {
          animation: section1-underline-grow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
        }
        @keyframes section1-underline-grow {
          to {
            transform: scaleX(1);
          }
        }

        .section1-card {
          opacity: 0;
          transform: translateY(32px);
        }
        .section1-content-visible .section1-card {
          animation: section1-fade-slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes section1-fade-slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
