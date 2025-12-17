"use client";

import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

const points = {
  part1: [
    "Start with a small system (5–10 services) before modeling a huge architecture.",
    "Keep service names clear and consistent (e.g., orders-service, payments-service).",
    "Use tags (e.g., core, external, experimental) to group services.",
    "Always review the anti-pattern list after making changes.",
    "Save interesting setups as separate versions for comparison.",
  ],
  part2: [
    "Read the full documentation → /docs",
    "See all supported anti-patterns → /docs/patterns",
    "Learn more about simulations → /docs/simulation",
    "Contact us if you're stuck → /contact"
  ]
};

export default function Section3() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <Title title="Tips for a smooth start" isUnderline={true} />
          <Card1 points={points.part1} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <Title title="Next steps" isUnderline={true} />
          <div className="space-y-3 mt-6">
            {points.part2.map((point, index) => (
              <div 
                key={index} 
                className="px-3 py-2 bg-[#1F2937] text-white text-sm font-medium rounded-lg hover:bg-[#1F2937]/80 transition-all cursor-pointer"
              > 
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
} 