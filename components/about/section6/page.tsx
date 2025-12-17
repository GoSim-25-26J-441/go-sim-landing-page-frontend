"use client";
import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

const data = [
  {
    title: "Architecture graph view",
    description:
      "Navigate through services, inspect call paths, and highlight dependencies. The graph helps you see how requests move through your system and where data flows might become risky.",
    point: [
      "Filter by service, database, or tag.",
      "Highlight paths between two services.",
      "Export diagrams for documentation.",
    ],
  },
  {
    title: "Anti-pattern insights",
    description:
      "GO-SIM lists all detected anti-patterns with severity, location, and explanation, so you can quickly understand why something is risky.",
    point: [
      "See issues like 'Chatty calls from Service A to Service B'.",
      "Jump directly from a pattern entry to the graph location.",
      "Read short explanations and suggestions for improvement.",
    ],
  },
  {
    title: "Simulation & metrics",
    description:
      "Configure load scenarios and review estimated latency, throughput, and error rates at a glance.",
    point: [
      "Choose workload intensity and failure scenarios.",
      "View summary metrics and time-series charts.",
      "Compare results between different architecture designs.",
    ],
  },
  {
    title: "Chat with your architecture",
    description:
      "Ask questions like you would in ChatGPT, but about your system design.",
    point: [
      "Show me bottlenecks in this architecture.",
      "Where do I have shared databases?",
      "Which services depend on Service X?",
    ],
  },
];

type FeatureCardProps = {
  title: string;
  description: string;
  point: string[];
};

function FeatureCard({ title, description, point }: FeatureCardProps) {
  return (
    <div className="h-full flex flex-col bg-[#111827] border border-white rounded-xl hover:white/50 transition-all hover:shadow-xl">
      <div className="w-full h-[300px] aspect-video bg-linear-to-br from-slate-700 to-slate-800 rounded-t-xl mb-6 flex items-center justify-center">
        <span className="text-slate-500 text-sm">Feature Preview</span>
      </div>

      <div className="flex- flex-row justify-center w-full h-[50%] items-center p-3">
        
        <h3 className="text-sm font-bold text-white mb-3 text-center">
          {title}
        </h3>

        <p className="text-xs font-normal text-gray-400 mb-3 leading-relaxed text-center">
          {description}
        </p>

        <div className="mt-2 h-0.5 w-full bg-white mb-3" />


        <Card1 points={point} />
      </div>
    </div>
  );
}

export default function Section6() {
  return (
    <section className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Title title="Explore the product" isUnderline />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {data.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            point={feature.point}
          />
        ))}
      </div>
    </section>
  );
}
