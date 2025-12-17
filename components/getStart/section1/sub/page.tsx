"use client";

import Image from "next/image";
import mark from "../../../../images/icon/mark1.png";

const steps = [
  {
    number: 1,
    title: "Create your account",
    subtitle:
      "Click 'Get Started' in the top-right corner of this page. After creating and verifying your account, you'll be redirected to the dashboard.",
    points: [
      "Choose a password and basic profile details.",
      "You'll land on the Free plan, which is enough for your first project.",
    ],
  },
  {
    number: 2,
    title: "Create your first project",
    subtitle:
      "From the dashboard, click 'New project' to enter a simple or large architecture.",
    points: [
      "Project name – e.g., E-commerce Microservices.",
      "Description – optional, a short note about the system.",
      "Tags – e.g. PYP, Demo, Production, Experiment.",
    ],
    note: "Each project can contain one or more architectures over time (versions).",
  },
  {
    number: 3,
    title: "Import your architecture",
    subtitle: "Choose how you want to bring your architecture into view.",
    points: [
      {
        title: "Upload YAML/JSON",
        desc: "Drag-and-drop or select your service definition files.",
      },
      {
        title: "Paste configuration",
        desc: "If you have the definition directly as text, paste it.",
      },
      {
        title: "Describe in chat",
        desc: "Type a natural description such as:",
        example:
          "I have 5 services: API Gateway, Orders, Payments, Inventory, and Notifications. Orders talks to PostgreSQL DB. Inventory uses MongoDB.",
      },
    ],
    footer:
      "ArcFind parses services, endpoints, and connections into an internal architecture model.",
  },
  {
    number: 4,
    title: "Explore the architecture graph",
    subtitle:
      "After uploading your input, GO-SIM will show you an interactive graph of services and data stores.",
    points: [
      "Hover over nodes to see service names and types.",
      "Click edges to see which service calls which, and on what path.",
      "Use filters (by service, database, or tag) to simplify the view.",
    ],
    note: "This is your visual model of the system, used for both pattern detection and simulation.",
  },
  {
    number: 5,
    title: "Detect anti-patterns and run a basic simulation",
    subsections: [
      {
        title: "Subsection A – Anti-pattern detection",
        points: [
          "Click the 'Patterns' → 'Analysis' tab.",
          "Review the list of detected issues, such as:",
          "• Chatty calls between services",
          "• God services with too many responsibilities",
          "• Cyclic calls or loops",
          "• Shared database writes",
          "Click on each to highlight it on the graph.",
        ],
      },
      {
        title: "Subsection B – Simple simulation",
        points: [
          "Go to the 'Simulation' tab.",
          "Choose a basic scenario:",
          "• Requests per second (RPS)",
          "• Latency distribution for each service",
          "Run the simulation to see:",
          "• Estimated overall latency",
          "• Basic bottlenecks and throughput forecasts",
        ],
      },
    ],
    footer:
      "Don't worry about tuning everything perfectly at first. The goal is just to see how the tool works.",
  },
];

const HIGHLIGHT = [
  "'Get Started'",
  "'New project'",
  "Project name",
  "Description",
  "Tags",
  "which service calls which",
  "bottlenecks",
  "Simulation",
  "Analysis",
  "Patterns"
] as const;

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, terms: readonly string[]) {
  const termSet = new Set(terms.map((t) => t.toLowerCase()));
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");

  return text.split(pattern).map((chunk, i) =>
    termSet.has(chunk.toLowerCase()) ? (
      <span key={i} className="font-bold text-white">
        {chunk}
      </span>
    ) : (
      <span key={i}>{chunk}</span>
    )
  );
}

export default function MultiStepGuide() {
  return (
    <section className="max-w-8xl  text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-center items-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 -right-2 w-0.5 h-full bg-white"></div>
              )}

              {/* Step Header */}
              <div className="mb-6 text-center px-8">
                <div className="text-sm text-gray-400 mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-base font-bold mb-3">{step.title}</h3>
                {step.subtitle && (
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {highlightText(step.subtitle, HIGHLIGHT)}
                  </p>
                )}
              </div>

              <div className="flex justify-center items-center w-[90%] h-px bg-white/80" />

              {/* Step Content */}
              <div className="flex-1 space-y-4 p-10">
                {step.points && (
                  <ul className="space-y-4">
                    {step.points.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start gap-2 text-xs text-gray-300"
                      >
                        <Image
                          src={mark}
                          alt="point icon"
                          width={15}
                          height={15}
                          className="object-contain"
                        />
                        <div className="flex-1">
                          {typeof point === "string" ? (
                            <span>{highlightText(point, HIGHLIGHT)}</span>
                          ) : (
                            <>
                              <strong className="text-white">
                                {point.title}
                              </strong>
                              {point.desc && (
                                <p className="text-gray-400 mt-1">
                                  {point.desc}
                                </p>
                              )}
                              {point.example && (
                                <p className="text-blue-300 italic mt-2 pl-4 border-l-2 border-blue-500/30">
                                  {point.example}
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {step.subsections && (
                  <div className="space-y-6">
                    {step.subsections.map((sub, sIndex) => (
                      <div key={sIndex}>
                        <h4 className="text-sm font-bold text-white mb-3">
                          {sub.title}
                        </h4>
                        <ul className="space-y-3">
                          {sub.points.map((point, pIndex) => (
                            <li
                              key={pIndex}
                              className="flex items-start gap-2 text-xs text-white/80"
                            >
                              {!point.startsWith("•") && (
                                <Image
                                  src={mark}
                                  alt="point icon"
                                  width={15}
                                  height={15}
                                  className="object-contain"
                                />
                              )}
                              <span>{highlightText(point, HIGHLIGHT)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {step.note && (
                  <p className="text-xs text-white/80  mt-4 pt-4 border-t border-gray-800">
                    {step.note}
                  </p>
                )}

                {step.footer && (
                  <p className="text-xs text-white/80 mt-4">{step.footer}</p>
                )}
              </div>

              {/* Horizontal Line - Mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden w-full h-px bg-white/50 my-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
