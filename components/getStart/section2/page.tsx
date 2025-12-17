"use client";

import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";

const points = [
    "Sample 1: E-commerce microservices (API Gateway, Orders, Payments, Inventory, Users)",
    "Sample 2: Streaming service (Ingest, Encoding, Catalog, Billing)"
]

export default function Section2() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <Title
        title="Try ArcFind with a sample architecture"
        isUnderline={true}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 gap-4">
        <div className="flex flex-col justify-start gap-2">
          <p className="text-sm font-normal leading-relaxed">
            {
              "New to microservices or just testing the tool? Load a built-in sample project to explore GO-SIM without any setup."
            }
          </p>

          <Card1 points={points}/>
        </div>

        <button
              onClick={() => ''}
              className="px-6 py-2 mr-10 bg-[#1F2937] text-white text-xs font-bold rounded-lg hover:bg-[#1F2937]/80 transition-all transform"
            >
              {"Load sample project"}
            </button>
      </div>
    </div>
  );
}
