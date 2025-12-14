"use client";

import { useState } from "react";
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
  const currentStep = steps[activeStep];

  return (
    <div className="max-w-full mx-auto mb-20">
      <Title
        title={title}
        isUnderline={true}
        description={description}
        className={"max-w-6xl mx-10 md:mx-auto"}
      />
      <div className="bg-[#E5E7EB] w-full pb-10 md:pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-center">

            <Card2 {...steps[activeStep]} />

            <div className="flex items-center w-full justify-center">
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

            <div className="relative w-full h-full flex flex-col justify-center px-4">
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
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
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
    </div>
  );
}
