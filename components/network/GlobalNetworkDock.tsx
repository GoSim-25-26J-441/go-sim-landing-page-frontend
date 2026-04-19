"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NetworkCanvas from "./NetworkCanvas";

function isHomePath(pathname: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  return p === "/";
}

export default function GlobalNetworkDock() {
  const pathname = usePathname();
  const [heroInView, setHeroInView] = useState(true);

  const home = isHomePath(pathname);

  useEffect(() => {
    if (!home) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeroInView(false);
      return;
    }

    const el = document.getElementById("landing-home-hero");
    if (!el) {
      setHeroInView(false);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        setHeroInView(e.isIntersecting);
      },
      { threshold: 0.08, rootMargin: "0px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [home, pathname]);

  const showDocked = !home || !heroInView;
  if (!showDocked) return null;

  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-0 z-5 w-1/2 max-w-[50vw] opacity-[0.52] sm:opacity-[0.6]"
      aria-hidden
    >
      <NetworkCanvas
        connectionsEnabled
        canvasClassName="h-full w-full"
        className="h-full w-full"
        particleCount={64}
        connectionDistance={140}
      />
    </div>
  );
}
