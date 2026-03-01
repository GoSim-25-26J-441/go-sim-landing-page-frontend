"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

class Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.z = Math.random() * 1000;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.vz = (Math.random() - 0.5) * 2;
    this.radius = 2;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
    if (this.z < 0) this.z = 1000;
    if (this.z > 1000) this.z = 0;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) {
    const scale = 1000 / (1000 + this.z);
    const x2d = this.x * scale + (canvasWidth / 2) * (1 - scale);
    const y2d = this.y * scale + (canvasHeight / 2) * (1 - scale);
    const radius = this.radius * scale;

    ctx.beginPath();
    ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * scale})`;
    ctx.fill();
  }
}

const CANVAS_DELAY_MS = 2800;   // Canvas appears when line is vertical in middle
const LINKS_DELAY_MS = 800;     // Links appear after canvas shows

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const router = useRouter();
  const t = useTranslations("HeroSectionInHome");
  const toPath = (r?: string) => (r ? (r.startsWith("/") ? r : `/${r}`) : "/");

  useEffect(() => {
    const t1 = setTimeout(() => setShowCanvas(true), CANVAS_DELAY_MS);
    const t2 = setTimeout(() => setShowLinks(true), CANVAS_DELAY_MS + LINKS_DELAY_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const showLinksRef = useRef(false);
  useEffect(() => {
    showLinksRef.current = showLinks;
  }, [showLinks]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 80;
    const connectionDistance = 150;

    let rafId = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (!w || !h) return;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.clientWidth, canvas.clientHeight));
    }

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.update(w, h);
        p.draw(ctx, w, h);
      }

      if (!showLinksRef.current) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const scale1 = 1000 / (1000 + particles[i].z);
            const scale2 = 1000 / (1000 + particles[j].z);
            const opacity =
              (1 - distance / connectionDistance) *
              0.3 *
              Math.min(scale1, scale2);

            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;

            ctx.moveTo(
              particles[i].x * scale1 + (w / 2) * (1 - scale1),
              particles[i].y * scale1 + (h / 2) * (1 - scale1)
            );

            ctx.lineTo(
              particles[j].x * scale2 + (w / 2) * (1 - scale2),
              particles[j].y * scale2 + (h / 2) * (1 - scale2)
            );

            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

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

  const DASHBOARD =
    process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3001";
  const returnTo = "/";

  const signUpUrl = new URL("/signup", DASHBOARD);
  signUpUrl.searchParams.set("returnTo", returnTo);

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden relative">
      {/* Line: horizontal across, left & right shrink to middle, then vertical line */}
      <div className="hero-line-wrap">
        <div className="hero-line-left" />
        <div className="hero-line-right" />
        <div className="hero-line-vertical" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-10 lg:py-0">
          {/* Left - canvas fades in after delay */}
          <div
            className={`relative h-80 sm:h-[400px] lg:h-[560px] transition-opacity duration-1000 ${
              showCanvas ? "opacity-100" : "opacity-0"
            }`}
          >
            <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
          </div>

          {/* Right - text. Line is in hero-line-wrap (section level). */}
          <div className="flex flex-col justify-between space-y-8 pl-4 md:pl-10 h-full relative">
            <div>
              <h1 className="hero-title text-5xl lg:text-8xl font-bold text-white mb-2">
                {t("title")}
              </h1>
              <p className="hero-desc text-xs font-normal text-white/80 tracking-wider">
                {t("description")}
              </p>
            </div>

            <div>
              <p className="hero-intro text-sm font-normal text-white leading-relaxed max-w-xl">
                {t("intro")}
              </p>

              <div className="flex flex-col gap-4 my-10 text-xs font-bold w-55 max-w-sm hero-buttons">
                <button
                  onClick={() => go(signUpUrl.toString())}
                  className="hero-btn hero-btn-1 px-6 py-3 bg-[#E5E7EB] text-[#1F2937] rounded-lg hover:bg-[#E5E7EB]/90 transition-all transform w-full"
                >
                  {t("button1Name")}
                </button>
                <button
                  onClick={() => router.push("/pricing")}
                  className="hero-btn hero-btn-2 px-6 py-3 bg-[#7D7F86] text-white rounded-lg hover:bg-[#7D7F86]/80 transition-all w-full"
                >
                  {t("button2Name")}
                </button>
              </div>

              <p className="hero-request text-[10px] font-normal text-white/60">
                {t("requestText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Left half shrinks right-to-center, right half shrinks left-to-center, then vertical line */
        .hero-line-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .hero-line-left {
          position: absolute;
          left: 0;
          top: 50%;
          width: 50vw;
          height: 2px;
          margin-top: -1px;
          background: rgba(255, 255, 255, 0.95);
          transform-origin: right center;
          animation: hero-line-shrink 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }

        .hero-line-right {
          position: absolute;
          right: 0;
          top: 50%;
          width: 50vw;
          height: 2px;
          margin-top: -1px;
          background: rgba(255, 255, 255, 0.95);
          transform-origin: left center;
          animation: hero-line-shrink 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }

        @keyframes hero-line-shrink {
          0%, 15% {
            opacity: 1;
            transform: scaleX(1);
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
          50%, 100% {
            opacity: 1;
            transform: scaleX(0);
          }
        }

        .hero-line-vertical {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 2px;
          height: 80vh;
          margin-left: -1px;
          margin-top: -40vh;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.95) 20%,
            rgba(255, 255, 255, 0.95) 80%,
            rgba(255, 255, 255, 0.2)
          );
          transform-origin: center center;
          animation: hero-line-vertical 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }

        @keyframes hero-line-vertical {
          0%, 52% {
            opacity: 0;
            transform: scaleY(0);
          }
          53% {
            opacity: 1;
            transform: scaleY(0);
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.5));
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))
              drop-shadow(0 0 40px rgba(255, 255, 255, 0.25));
          }
        }

        @media (max-width: 1023px) {
          .hero-line-left,
          .hero-line-right {
            animation: hero-line-shrink-mobile 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          }
          .hero-line-vertical {
            animation: none;
            display: none;
          }
        }

        @keyframes hero-line-shrink-mobile {
          0% {
            opacity: 0;
            transform: scaleX(0.3);
          }
          100% {
            opacity: 1;
            transform: scaleX(1);
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
          }
        }

        /* Canvas and text appear when line is vertical in middle (~2.8s). */
        .hero-title {
          opacity: 0;
          transform: translateY(24px);
          animation: fade-slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) 2.9s forwards;
        }

        .hero-desc {
          opacity: 0;
          transform: translateY(16px);
          animation: fade-slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 3.2s forwards;
        }

        .hero-intro {
          opacity: 0;
          transform: translateY(16px);
          animation: fade-slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 3.5s forwards;
        }

        .hero-btn {
          opacity: 0;
          transform: translateX(-48px);
        }

        .hero-btn-1 {
          animation: slide-from-line 0.8s cubic-bezier(0.4, 0, 0.2, 1) 4s forwards;
        }

        .hero-btn-2 {
          animation: slide-from-line 0.8s cubic-bezier(0.4, 0, 0.2, 1) 4.2s forwards;
        }

        .hero-request {
          opacity: 0;
          transform: translateY(8px);
          animation: fade-slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 4.5s forwards;
        }

        @keyframes slide-from-line {
          from {
            opacity: 0;
            transform: translateX(-48px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
