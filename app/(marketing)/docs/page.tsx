/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Section1 from "../../../components/doc/section1/page";



const SECTIONS = [
  { id: "research", label: "Research" },
  { id: "planning", label: "Planning" },
  { id: "apis", label: "APIs" },
  { id: "credits", label: "Credits" }
];

export default function Page() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (sectionId: any) => {
    setActiveSection((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
      {/* Mobile: Horizontal scrolling tabs */}
      <div className="md:hidden sticky top-16 z-40 ">
        <nav className="flex justify-center gap-10 scrollbar-hide my-10 w-full">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => handleSectionToggle(section.id)}
                className={`
                  relative whitespace-nowrap
                  transition-all duration-300 ease-in-out
                  ${isActive 
                    ? " text-white font-bold text-base" 
                    : "text-gray-400 font-normal hover:text-white text-sm"
                  }
                `}
              >
                {section.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Desktop and Mobile Content */}
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-8 px-4 md:px-8">
        {/* Desktop Navigation Sidebar */}
        <nav className="hidden md:flex flex-col justify-center items-start pt-10 md:pt-40 sticky top-24 w-80">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => handleSectionToggle(section.id)}
                className={`
                  relative text-white my-3 px-4 py-2 
                  transition-all duration-300 ease-in-out
                  hover:translate-x-2
                  ${isActive ? "font-bold text-base" : "font-normal text-sm"}
                `}
              >
                {/* Active indicator bar */}
                <span
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-white
                    transition-all duration-300 ease-in-out origin-center
                    ${isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
                  `}
                />
                
                {/* Button text with fade effect */}
                <span
                  className={`
                    block transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}
                  `}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Content Area */}
        <main className="flex-1 w-full flex justify-center items-start pt-6 md:pt-40 pb-20">
          <div
            className={`
              w-full transition-all duration-500 ease-in-out
              ${activeSection 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4 pointer-events-none"
              }
            `}
          >
            {activeSection && (
              <div className="animate-fadeIn">
                <Section1 />
              </div>
            )}
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}