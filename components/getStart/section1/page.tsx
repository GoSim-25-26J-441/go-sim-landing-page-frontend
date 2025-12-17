"use client";

import Card1 from "../../common/card1/page";
import Title from "../../common/tittle/page";
import MultiStepGuide from "./sub/page";

const data = {
  mainPoints: [
    "A modern browser (Chrome, Edge, Firefox, etc.)",
    "A GO-SIM account (Free plan is enough)",
    "Optional: a YAML/JSON microservice definition, or use our sample file",
  ],
};

export default function Section1() {
  return (
    <div className="py-20">
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <Title title="Tips for a smooth start" isUnderline={true} />
          <Card1 points={data.mainPoints} className="mx-10"/>
        </div>

        <MultiStepGuide />
    </div>
  );
}
