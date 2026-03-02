"use client";

import Image from "next/image";
import logo from "../images/logo/logo.png";

export default function Loading() {
  return (
    <div className="min-h-dvh grid place-items-center bg-linear-to-b from-black/10 to-black">
      <div className="loading-content">
        <div className="loading-logo-wrap">
          <Image src={logo} alt="GO-SIM Logo" width={52} height={52} priority />
        </div>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>

      <style jsx>{`
        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
        .loading-logo-wrap {
          animation: spin-glow 1.6s linear infinite;
        }

        @keyframes spin-glow {
          0% {
            transform: rotate(0deg);
            filter: drop-shadow(0 0 12px rgba(148, 163, 184, 0.35));
          }
          50% {
            transform: rotate(180deg);
            filter: drop-shadow(0 0 24px rgba(148, 163, 184, 0.6));
          }
          100% {
            transform: rotate(360deg);
            filter: drop-shadow(0 0 12px rgba(148, 163, 184, 0.35));
          }
        }

        .loading-bar {
          width: 80px;
          height: 3px;
          background: rgba(148, 163, 184, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-bar-fill {
          height: 100%;
          width: 40%;
          background: white;
          border-radius: 2px;
          animation: loading-slide 1.2s ease-in-out infinite;
        }

        @keyframes loading-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }
      `}</style>
    </div>
  );
}
