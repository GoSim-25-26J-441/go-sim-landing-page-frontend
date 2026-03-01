"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import image1 from "../../../images/screenshots/image1.png";
import image2 from "../../../images/screenshots/image2.png";
import image3 from "../../../images/screenshots/image3.png";

export default function Section2() {
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
    <section ref={ref} className="w-full flex justify-center items-center py-16">
      <div className={`relative w-full max-w-6xl mx-auto perspective-1000 flex justify-center about-s2 ${isInView ? "about-s2-visible" : ""}`}>
          <div className="about-s2-img translate-x-1/3 w-[90%] md:w-[85%] z-10 transform scale-95 opacity-60">
            <Image src={image1} alt="Dashboard 3" width={500} height={500} className="object-cover" />
          </div>

          <div className="about-s2-img -translate-y-1/3 w-[92%] md:w-[90%] z-20 transform scale-80 opacity-100">
            <Image src={image2} alt="Dashboard 2" width={500} height={500} className="object-cover" />
          </div>

          <div className="about-s2-img -translate-x-1/3 w-[95%] md:w-[95%] z-30">
            <Image src={image3} alt="Dashboard 1" width={500} height={500} className="object-cover" />
          </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .about-s2-img {
          opacity: 0;
        }
        .about-s2-visible .about-s2-img:nth-child(1) {
          animation: about-s2-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .about-s2-visible .about-s2-img:nth-child(2) {
          animation: about-s2-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
        }
        .about-s2-visible .about-s2-img:nth-child(3) {
          animation: about-s2-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
        }
        @keyframes about-s2-fade {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
