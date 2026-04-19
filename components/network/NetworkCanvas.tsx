"use client";

import { useEffect, useRef, useState } from "react";

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

type NetworkCanvasProps = {
  connectionsEnabled: boolean;
  /** When true, stop the animation loop while the canvas is off-screen (saves work when a docked copy is active). */
  suspendWhenOutOfView?: boolean;
  className?: string;
  canvasClassName?: string;
  particleCount?: number;
  connectionDistance?: number;
};

export default function NetworkCanvas({
  connectionsEnabled,
  suspendWhenOutOfView = false,
  className = "",
  canvasClassName = "",
  particleCount = 80,
  connectionDistance = 150,
}: NetworkCanvasProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const connectionsRef = useRef(connectionsEnabled);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    connectionsRef.current = connectionsEnabled;
  }, [connectionsEnabled]);

  useEffect(() => {
    if (!suspendWhenOutOfView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
      },
      { threshold: 0, rootMargin: "80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [suspendWhenOutOfView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (suspendWhenOutOfView && !inView) {
      return;
    }

    const particles: Particle[] = [];
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

    const seedParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.clientWidth, canvas.clientHeight));
      }
    };

    seedParticles();

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.update(w, h);
        p.draw(ctx, w, h);
      }

      if (!connectionsRef.current) {
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

    const onResize = () => {
      resize();
      seedParticles();
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, [particleCount, connectionDistance, suspendWhenOutOfView, inView]);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} className={canvasClassName} />
    </div>
  );
}
