"use client";

import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Section5Props = {
  title: string;
  description: string;
  buttonsVisible: boolean;
  button1Name?: string;
  button2Name?: string;
  button1Route?: string;
  button2Route?: string;
  isLinkAvailable?: boolean;
  linkName?: string;
  linkRoute?: string;
};

export default function ButtonSet({
  title,
  description,
  buttonsVisible = true,
  isLinkAvailable,
  button1Name,
  button1Route,
  button2Name,
  button2Route,
  linkName,
  linkRoute,
}: Section5Props) {


  const router = useRouter()
  const toPath = (r?: string) =>
  r ? (r.startsWith("/") ? r : `/${r}`) : "/";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40">
      <div className="flex flex-col justify-around md:flex-row w-full gap-8">
        {/* Left */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-sm text-white/60">{description}</p>
        </div>

        {/* ✅ Mobile: horizontal line */}
        <div className="block md:hidden relative w-full h-px overflow-hidden">
          <div className="absolute inset-0 bg-white/80 animate-grow-center-x" />
        </div>

        {/* ✅ Desktop: vertical line */}
        <div className="hidden md:block relative w-px overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white/80 animate-grow-center-y" />
        </div>

        {buttonsVisible && (
          <div className="flex flex-col justify-start gap-6">
            <button onClick={() => router.push(toPath(button1Route))} className="px-6 py-3 bg-[#E5E7EB] text-black text-sm font-bold rounded-lg hover:bg-[#E5E7EB]/80 transition-all transform">
              {button1Name}
            </button>
            <button  onClick={() => router.push(toPath(button2Route))} className="px-6 py-3 bg-[#0F172A] text-[#D9D9D9] text-sm font-semibold rounded-lg hover:bg-[#0F172A]/80 transition-all">
              {button2Name}
            </button>
            {isLinkAvailable && (
              <Link href={toPath(linkRoute)} className="flex underline items-center text-sm font-bold text-white mt-3 ml-1">
                {linkName}
                <span className="inline-block mx-1">
                  <ArrowRightToLine size={12} />
                </span>
              </Link>
            )}
          </div>
        )}
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
