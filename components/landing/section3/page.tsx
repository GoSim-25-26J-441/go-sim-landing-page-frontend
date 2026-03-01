"use client";

import { useEffect, useRef, useState } from "react";
import Title from "../../common/tittle/page";
import { ArrowRightToLine, Play } from "lucide-react";
import Card2, { Card2Props } from "../../common/card2/page";

type TitleProps = {
  title: string;
  isUnderline?: boolean;
  description?: string;
};

const steps: Card2Props[] = [
  {
    step: 1,
    title: "Import your architecture",
    description: "Start from YAML, JSON, or a visual tool description.",
    introduction:
      "Upload your microservice definitions or describe your system in natural language.",
    points: [
      {
        mainPoints: "You",
        subPoints:
          "Drag-and-drop YAML/JSON files or paste service config into the chat.",
      },
      {
        mainPoints: "ArcFind",
        subPoints:
          "Parses services, endpoints, databases, and connections into an internal model.",
      },
    ],
  },
  {
    step: 2,
    title: "Design & Visualize",
    description: "See your architecture come to life.",
    introduction:
      "Interactive visual editor with drag-and-drop components and real-time updates.",
    points: [
      {
        mainPoints: "You",
        subPoints:
          "Drag-and-drop YAML/JSON files or paste service config into the chat.",
      },
      {
        mainPoints: "ArcFind",
        subPoints:
          "Parses services, endpoints, databases, and connections into an internal model.",
      },
    ],
  },
  {
    step: 3,
    title: "Analyze & Detect",
    description: "Identify anti-patterns and optimization opportunities.",
    introduction: "AI-powered analysis to catch issues before deployment.",
    points: [
      {
        mainPoints: "You",
        subPoints:
          "Drag-and-drop YAML/JSON files or paste service config into the chat.",
      },
      {
        mainPoints: "ArcFind",
        subPoints:
          "Parses services, endpoints, databases, and connections into an internal model.",
      },
    ],
  },
  {
    step: 4,
    title: "Simulate & Deploy",
    description: "Test performance before going live.",
    introduction: "Run simulations and get deployment-ready configurations.",
    points: [
      {
        mainPoints: "You",
        subPoints:
          "Drag-and-drop YAML/JSON files or paste service config into the chat.",
      },
      {
        mainPoints: "ArcFind",
        subPoints:
          "Parses services, endpoints, databases, and connections into an internal model.",
      },
    ],
  },
];

export default function Section3({ title, description }: TitleProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const currentStep = steps[activeStep];

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
      <div className={`section3-title ${isInView ? "section3-visible" : ""}`}>
        <div className="section3-title-text">
          <Title title={title} isUnderline={false} description={description} className="mb-2" />
        </div>
        <div className="section3-title-underline" />
      </div>
      <div className="relative overflow-hidden bg-[#E5E7EB] rounded-lg pb-10 md:pb-0">
       
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`grid lg:grid-cols-3 gap-10 items-center section3-content ${isInView ? "section3-content-visible" : ""}`}>

            <div className="section3-card">
              <Card2 {...steps[activeStep]} />
            </div>

            <div className="section3-steps flex items-center w-full justify-center">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.step} className="flex items-center">
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        index === activeStep
                          ? "bg-white text-black scale-110"
                          : index < activeStep
                          ? "bg-black text-white"
                          :  "border border-black/40 text-black"
                      }`}
                    >
                      {step.step}
                    </button>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-10 h-0.5 mx-2 ${
                          index < activeStep ? "bg-black" : "bg-black/40"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="section3-video relative w-full h-full flex flex-col justify-center px-4">
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                {/* Video Placeholder - Replace with actual YouTube embed */}
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-all cursor-pointer group">
                      <Play
                        className="w-10 h-10 text-white group-hover:scale-110 transition-transform"
                        fill="white"
                      />
                    </div>
                    <p className="text-white text-sm">
                      Step {currentStep.step} Demo Video
                    </p>
                    <p className="text-white/60 text-xs mt-1">Click to play</p>
                  </div>
                </div>

                {/* Actual YouTube Embed - Uncomment and use your video IDs */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-3">
                      <button className="hover:text-gray-300 transition-colors">
                        <Play className="w-4 h-4" />
                      </button>
                      <span className="text-xs">0:00 / 2:30</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="hover:text-gray-300 transition-colors text-xs">
                        CC
                      </button>
                      <button className="hover:text-gray-300 transition-colors text-xs">
                        HD
                      </button>
                      <button className="hover:text-gray-300 transition-colors text-xs">
                        ⛶
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Caption */}
              <div className="mt-10 pt-10 border-t border-black text-center">
                <p className="flex justify-center items-center text-sm font-bold text-black mb-3">
                  {'Start with your first architecture '}
                  <span className="inline-block mx-1"><ArrowRightToLine size={12}/></span>
                </p>
                <p className="text-xs font-normal text-black/80">
                  {'Create a free account and upload a sample YAML file.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Title + description: left-to-right reveal */
        .section3-title-text {
          clip-path: inset(0 100% 0 0);
        }
        .section3-visible .section3-title-text {
          animation: section3-reveal-lr 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes section3-reveal-lr {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        /* Underline: grow left to right */
        .section3-title-underline {
          height: 2px;
          margin-top: 0.5rem;
          margin-bottom: 2rem;
          background: white;
          transform-origin: left center;
          transform: scaleX(0);
        }
        .section3-visible .section3-title-underline {
          animation: section3-underline-grow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
        }
        @keyframes section3-underline-grow {
          to {
            transform: scaleX(1);
          }
        }
        .section3-center-line-visible {
          animation: section3-line-expand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }
        @keyframes section3-line-expand {
          to {
            transform: scaleY(1);
          }
        }

        /* Steps content: fade in after line */
        .section3-card,
        .section3-steps,
        .section3-video {
          opacity: 0;
          transform: translateY(20px);
        }
        .section3-content-visible .section3-card {
          animation: section3-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }
        .section3-content-visible .section3-steps {
          animation: section3-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
        }
        .section3-content-visible .section3-video {
          animation: section3-fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
        }
        @keyframes section3-fade-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
