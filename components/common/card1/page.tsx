"use client";
import Image from "next/image";
import mark from "../../../images/icon/mark1.png";

type Card1Props = {
  title?: string;
  description?: string;
  isUnderline?: boolean;
  points?: string[];
};

export default function Card1({
  title,
  description,
  isUnderline = false,
  points,
}: Card1Props) {
  return (
    <div className="h-full flex flex-col">
      <div className="shrink-0 mb-6">
        {title && (
          <h2 className="text-sm font-bold text-white text-center min-h-5 flex items-center justify-center">
            {title}
          </h2>
        )}

        {description && (
          <p className="mt-2 text-xs font-normal text-white/80 text-center min-h-5 flex items-center justify-center">
            {description}
          </p>
        )}

        {isUnderline && <div className="h-0.5 w-full bg-white mt-4" />}
      </div>

      {points && points.length > 0 && (
        <ul className="space-y-4 flex-1">
          {points.map((point, index) => (
            <li
              key={`${index}-${point}`}
              className="text-sm text-[#7D7F86] flex flex-row items-start gap-3"
            >
              <div className="shrink-0 w-3 h-3 mt-0.5">
                <Image
                  src={mark}
                  alt="point icon"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex-1 text-white/80 font-normal text-xs leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}