"use client";

import { useEffect, useRef, useState } from 'react';

export default function Section5() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 md:pb-60"
    >
      
        <div className="flex flex-row w-full gap-8 items-center">
          
          {/* Left Side - Text */}
          <div className="text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
              {'Ready to stress-test your architecture before production ?'}
            </h2>
            <p className="text-sm text-white/60">
              {'Create your first project in minutes and let ArcFind find the risks for you.'}
            </p>
          </div>

          {/* Center - Animated Vertical Line */}
          <div className="hidden lg:block relative h-32 w-px overflow-hidden">
            <div 
              className={`absolute left-0 top-0 w-px bg-white transition-all duration-1000 ease-out ${
                isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
              }}
            ></div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <button className="px-6 py-3 bg-[#E5E7EB] text-black text-sm font-bold rounded-lg hover:bg-[#E5E7EB]/80 transition-all transform ">
             {'Get Started Free'}
            </button>
            <button className="px-6 py-3 bg-[#0F172A] text-[#D9D9D9] text-sm font-semibold rounded-lg hover:bg-[#0F172A]/80 transition-all">
              {'Explore the Dashboard'}
            </button>
          </div>

        </div>

        {/* Mobile - Horizontal Line (shows on mobile instead of vertical) */}
        <div className="lg:hidden my-8 relative h-px overflow-hidden">
          <div className="absolute inset-0 h-px bg-white/20"></div>
          <div 
            className={`absolute top-0 left-0 h-px bg-white transition-all duration-1000 ease-out ${
              isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          ></div>
        </div>
     
    </section>
  );
}