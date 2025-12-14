"use client";

import Image from "next/image";
import Title from "../../common/tittle/page";
import mark1 from "../../../images/icon/mark1.png";
import type { Points } from "../../common/card2/page";

type Part = {
  part1?: Points[];
  part2?: Points[];
};

export type Section4Props = {
  title?: [string, string];   
  points?: [Part, Part];    
};

function PointsList({
  title,
  items,
}: {
  title?: string;
  items?: Points[];
}) {
  return (
    <div className="max-w-7xl p-6 md:p-0 mb-10">
      <ul className="space-y-4 flex-1 mt-2">
        {title && <Title title={title} isUnderline={true} className="mb-10" />}

        {items?.map((point, index) => (
          <li
            key={`${index}-${point.mainPoints}-${point.subPoints}`}
            className="text-sm text-[#7D7F86] flex flex-row items-start gap-3"
          >
            <div className="shrink-0 w-3 h-3 mt-0.5">
              <Image
                src={mark1}
                alt="point icon"
                width={16}
                height={16}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flow grid-flow-col">
              <p className="text-white font-bold text-xs leading-relaxed">
                {point.mainPoints}
              </p>
              <p className="text-white/80 font-normal text-xs leading-relaxed">
                {point.subPoints}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section4({ title, points }: Section4Props) {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        <PointsList title={title?.[0]} items={points?.[0]?.part1} />
        <PointsList title={title?.[1]} items={points?.[1]?.part2} />
      </div>
    </div>
  );
}
