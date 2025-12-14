"use client";

import Image from "next/image";
import logo from "../images/logo/logo.png";

export default function Loading() {
  return (
    <div className="min-h-dvh grid place-items-center bg-linear-to-b from-black/10 to-black">
      <div className="relative">
        <Image 
          src={logo} 
          alt="GO-SIM Logo" 
          width={50} 
          height={50} 
          className="animate-float-rotate" 
        />
      </div>
      
      <style jsx>{`
        @keyframes float-rotate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(-5px) rotate(-5deg);
          }
        }
        .animate-float-rotate {
          animation: float-rotate 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}