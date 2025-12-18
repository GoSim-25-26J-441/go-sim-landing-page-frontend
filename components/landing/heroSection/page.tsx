"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {useTranslations} from "next-intl";

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

const Herosection = {
  title: "ArcFind",
  description: "Micro-service Architecture & Performance Assistant",
  intro:
    "Design, analyze, and simulate your microservice architecture before you deploy. Detect anti-patterns, visualize graphs, and estimate performance in one place.",
  button1Name: "Get Started Free",
  button2Name: "View Pricing",
  requestText: "No credit card required | Built for students & engineers",
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();
  const t = useTranslations("HeroSectionInHome");

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

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-10 lg:py-0">
          {/* Left */}
          <div className="relative h-80 sm:h-[400px] lg:h-[560px]">
            <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between space-y-8 pl-10 h-full relative overflow-hidden">
            <div
              className="absolute left-0 w-0.5 bg-white animate-grow-center"
              style={{ height: "100%" }}
            ></div>

            <div>
              <h1 className="text-5xl lg:text-8xl font-bold text-white mb-2">
                {t("title")}
              </h1>
              <p className="text-xs font-normal text-white/80 tracking-wider">
                {t("description")}
              </p>
            </div>

            <div>
              <p className="text-sm font-normal text-white leading-relaxed max-w-xl">
                {t("intro")}
              </p>

              <div className="flex flex-col gap-4 my-10 text-xs font-bold w-55 max-w-sm">
                <button
                  onClick={() => router.push("/get-started")}
                  className="px-6 py-3 bg-[#E5E7EB] text-[#1F2937] rounded-lg hover:bg-[#E5E7EB]/90 transition-all transform w-full"
                >
                  {t("button1Name")}
                </button>
                <button
                  onClick={() => router.push("/pricing")}
                  className="px-6 py-3 bg-[#7D7F86] text-white rounded-lg hover:bg-[#7D7F86]/80 transition-all w-full"
                >
                  {t("button2Name")}
                </button>
              </div>

              <p className="text-[10px] font-normal text-white/60">
                {t("requestText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grow-center {
          from {
            height: 0%;
            opacity: 0;
          }
          to {
            height: 100%;
            opacity: 1;
          }
        }
        .animate-grow-center {
          animation: grow-center 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
