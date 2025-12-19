"use client";

import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Section5Props = {
  title?: string;
  description?: string;
  buttonsVisible: boolean;
  button1Name?: string;
  button2Name?: string;
  button1Route?: string;
  button2Route?: string;
  isLinkAvailable?: boolean;
  linkName?: string;
  linkRoute?: string;
  className?: string;
  buttonClass?: string;
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
  className,
  buttonClass,
}: Section5Props) {
  const router = useRouter();
  const toPath = (r?: string) => (r ? (r.startsWith("/") ? r : `/${r}`) : "/");

  const go = (route?: string) => {
    if (!route) return;

    const normalized = route.replace(
      /^([a-z][a-z0-9+\-.]*):\/(?!\/)/i,
      "$1://"
    );

    try {
      const url = new URL(normalized);
      window.location.assign(url.toString());
      return;
    } catch {
      router.push(toPath(route));
    }
  };

  const toHref = (r?: string) => {
    if (!r) return "/";
    if (r.startsWith("http://") || r.startsWith("https://")) return r;
    if (r.startsWith("#")) return r; // same-page hash
    return r.startsWith("/") ? r : `/${r}`; // internal route
  };

  const onHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (!linkRoute?.startsWith("#")) return;

  const id = linkRoute.slice(1);
  const el = document.getElementById(id);

  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // ✅ do nothing (stay on this page)
    e.preventDefault();
  }
};

  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ${className}`}
    >
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
          <div className="absolute inset-0 bg-white animate-grow-center-x" />
        </div>

        {/* ✅ Desktop: vertical line */}
        <div className="hidden md:block relative w-2 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white animate-grow-center-y" />
        </div>

        {buttonsVisible && (
          <div className="flex flex-col justify-start gap-6">
            <button
              onClick={() => go(button1Route)}
              className="px-6 py-3 bg-[#E5E7EB] text-black text-sm font-bold rounded-lg hover:bg-[#E5E7EB]/80 transition-all transform"
            >
              {button1Name}
            </button>
            <button
              onClick={() => go(button2Route)}
              className={`px-6 py-3 bg-[#0F172A] text-[#D9D9D9] text-sm font-semibold rounded-lg hover:bg-[#0F172A]/80 transition-all ${buttonClass}`}
            >
              {button2Name}
            </button>
            {isLinkAvailable && (
              <Link
                href={toHref(linkRoute)} onClick={onHashClick}
                className="flex underline items-center text-sm font-bold text-white mt-3 ml-1"
              >
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
