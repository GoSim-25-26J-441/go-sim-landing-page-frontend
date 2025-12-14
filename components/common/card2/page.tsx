"use client";
import Image from "next/image";
import mark2 from "../../../images/icon/mark2.png";

export type Card2Props = {
  step?: number;
  title?: string;
  description?: string;
  isUnderline?: boolean;
  introduction?: string;
  points?: Points[];
};

export type Points = {
  mainPoints: string;
  subPoints: string;
};

export default function Card2({
  step,
  title,
  description,
  isUnderline = false,
  introduction,
  points,
}: Card2Props) {
  return (
    <div className="h-full flex flex-col p-6 max-w-md mx-auto my-4">
      <div className="shrink-0 mb-6">
        {step && (
          <h2 className="text-base font-normal text-black text-center min-h-5 flex items-center justify-center gap-2">
            {"Step"} <span className="w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold transition-all border border-black">{step}</span>
          </h2>
        )}

        <h2 className="text-sm font-bold text-black text-center min-h-5 flex items-center justify-center my-3">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-xs font-normal text-black/80 text-center min-h-5 flex items-center justify-center">
            {description}
          </p>
        )}

        {!isUnderline && <div className="h-0.5 w-full bg-black mt-2" />}
      </div>

      {introduction && (
        <h1 className="text-md font-normal text-black text-center min-h-4 flex items-center justify-center mb-6">
          {introduction}
        </h1>
      )}

      {/* Points list - takes remaining space */}
      {points && points.length > 0 && (
        <ul className="space-y-4 flex-1 mt-2">
          {points.map((point, index) => (
            <li
              key={`${index}-${point}`}
              className="text-sm text-[#7D7F86] flex flex-row items-start gap-3"
            >
              <div className="shrink-0 w-3 h-3 mt-0.5">
                <Image
                  src={mark2}
                  alt="point icon"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flow grid-flow-col">
                <p className=" text-black font-bold text-xs leading-relaxed">
                  {point.mainPoints}
                </p>
                <p className=" text-black/80 font-normal text-xs leading-relaxed">
                  {point.subPoints}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
