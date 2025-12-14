"use client";

import Card1 from "../../common/card1/page";

export type Section2Pros = {
  titles: string[];
  description: string[];
  parts: { title?: string; description?: string; points?: string[] }[];
};

export default function Section2({ titles, description, parts }: Section2Pros) {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
        <Card1 points={parts[0].points} />
        
        <div className="flex flex-col lg:flex-row lg:border-x-2 border-y-2 lg:border-y-0 border-white items-center justify-around py-8 lg:py-0 lg:px-8">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-xl lg:text-2xl font-bold text-white">{titles[0]}</h1>
            <p className="text-xs lg:text-[8px] font-normal text-white/80 mt-1">{description[0]}</p>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white lg:mx-10">{"&"}</h1>
          
          <div className="text-center lg:text-right flex-1">
            <h1 className="text-xl lg:text-2xl font-bold text-white">{titles[1]}</h1>
            <p className="text-xs lg:text-[8px] font-normal text-white/80 mt-1">{description[1]}</p>
          </div>
        </div>
        
        <Card1 points={parts[1].points} />
      </div>
    </div>
  );
}