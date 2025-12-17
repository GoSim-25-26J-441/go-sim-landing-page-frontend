"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import github from '../../../images/icon/github.png'
import linkedin from '../../../images/icon/linkedinIcon.png'

export default function ContactHelpSection() {
  const contactLinks = [
    { label: "Docs & Guides", arrow: true, href: "/docs" },
    { label: "FAQ", arrow: true, href: "/faq" },
    { label: "Report a bug", arrow: true, href: "/report/bug" },
    { label: "View pricing", arrow: true, href: "/pricing" },
    { label: "Research summary", arrow: true, href: "/research" },
  ];

  return (
    <section className="text-white">
      <div className="max-w-xl  flex flex-row gap-6">
        {/* Direct Contact Section */}
        
        <div className="w-1 bg-white animate-grow-center-y" />

        <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-1">{'Direct contact'}</h2>
          <div className="h-px w-full bg-white mb-6"></div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">{'Email:'}</span>{" "}
              <a
                href="mailto:support@gosim.dev"
                className="text-white hover:text-blue-300 font-normal transition-colors"
              >
                {'support@gosim.dev'}
              </a>
            </p>
            <p>
              <span className="font-semibold">{'For general questions:'}</span>{" "}
              <a
                href="mailto:hello@gosim.dev"
                className="text-white hover:text-blue-300 font-normal transition-colors"
              >
                {'hello@gosim.dev'}
              </a>
            </p>
            <p>
              <span className="font-semibold">{'For academic / research:'}</span>{" "}
              <a
                href="mailto:research@gosim.dev"
                className="text-white hover:text-blue-300 font-normal transition-colors"
              >
                {'research@gosim.dev'}
              </a>
            </p>
          </div>
        </div>

        {/* Fastest Way to Get Help Section */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold mb-1">{'The fastest way to get help'}</h2>
           <div className="h-px bg-white mb-6"></div>
          <p className="text-sm text-white/80">
            {'Depending on what you need, these links might be quicker than email.'}
          </p>

          <div className="space-y-3 mt-4 w-[70%]">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex py-1 px-3 justify-center items-center gap-2 text-sm bg-[#0F172A] text-white hover:text-blue-300 rounded-sm"
              >
                <span>{link.label}</span>
                {link.arrow && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
                <span className="text-white/80">/</span>
                <span className="text-white/80">
                  {link.href.split("/").pop()}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* About GO-SIM Section */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold">{'About GO-SIM'}</h2>
          <div className="h-px bg-white mb-6"></div>

          <p className="text-[12px] text-white leading-relaxed">
            {
              "GO-SIM is a microservice architecture analysis and simulation tool, built as a final-year research project at SLIIT. If you're an academic, researcher, or collaborator, feel free to mention this in your message so we can route it accordingly."
            }
          </p>
        </div>

        {/* Stay Connected Section */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{'Stay connected'}</h2>
          <div className="h-px bg-white mb-6"></div>

          <div className="flex flex-col justify-start gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-2 px-12 justify-center items-center gap-2 text-sm bg-[#0F172A] text-white hover:text-blue-300 rounded-sm"
            >
              <Image
                  src={github}
                  alt="point icon"
                  width={15}
                  height={15}
                  className="object-contain"
                />
              <span className="text-sm font-semibold">{'GitHub'}</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex py-2 px-12 justify-center items-center gap-2 text-sm bg-[#0F172A] text-white hover:text-blue-300 rounded-sm"
            >
              <Image
                  src={linkedin}
                  alt="point icon"
                  width={15}
                  height={15}
                  className="object-contain"
                />
              <span className="text-sm font-semibold">{'LinkedIn'}</span>
            </a>
          </div>
        </div>
        </div>
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
        .animate-grow-center-y {
          transform-origin: center;
          animation: grow-center-y 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
