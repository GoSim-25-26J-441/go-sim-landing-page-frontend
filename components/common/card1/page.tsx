"use client";
import Image from "next/image";
import mark from "../../../images/icon/mark1.png"

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
    points
}: Card1Props) {
  
    return (
        <div className="p-6 max-w-md mx-auto my-4">
            {title && (
                <h2 className="text-md font-bold text-white">{title}</h2>
            )}

            {description && (
                <p className="mt-2 text-sm font-normal text-white/80">{description}</p>
            )}

            {isUnderline && (
                <div className="mt-4 h-0.5 w-full bg-white" />
            )}

            {points && points.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {points.map((point, index) => (
                        <>
                        <Image src={mark} alt="point icon" width={12} height={12} key={index} className="inline-block mr-2 mb-1"/>
                        <li key={index} className="text-sm text-[#7D7F86]">
                            {point}
                        </li>
                        </>
                    ))}
                </ul>
            )}
        </div>
    );
}