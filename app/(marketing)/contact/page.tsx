"use client";

import { useEffect, useRef, useState } from "react";
import ButtonSet from "../../../components/common/buttonSet/page";
import Card1 from "../../../components/common/card1/page";
import Title from "../../../components/common/tittle/page";
import ContactHelpSection from "../../../components/contact/contactHelpSection/page";
import ContactForm from "../../../components/contact/form/page";

const points = [
    "New user? Start with the Getting started guide.",
    "Working on a thesis or FYP? Check the Research summary for technical details.",
    "Reporting a bug? Include browser, steps to reproduce, and screenshots when possible.",
  ];

export default function Page() {
  const formRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const [formInView, setFormInView] = useState(false);
  const [beforeInView, setBeforeInView] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          const id = (e.target as HTMLElement).dataset.section;
          if (id === "form") setFormInView(true);
          if (id === "before") setBeforeInView(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    const f = formRef.current;
    const b = beforeRef.current;
    if (f) ob.observe(f);
    if (b) ob.observe(b);
    return () => ob.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ButtonSet
        buttonsVisible={false}
        title={"Contact us"}
        description={
          "Questions about GO-SIM, your account, or the research? We’d love to hear from you."
        }
        className="pb-10 md:pb-40"
      />
      <div
        ref={formRef}
        data-section="form"
        className={`flex flex-col md:flex-row justify-center items-start contact-form-row ${formInView ? "contact-form-visible" : ""}`}
      >
        <div className="contact-form-left">
          <ContactForm />
        </div>
        <div className="contact-form-right">
          <ContactHelpSection />
        </div>
      </div>

      <div
        ref={beforeRef}
        data-section="before"
        className={`flex flex-col justify-center item-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-0 pb-40 contact-before ${beforeInView ? "contact-before-visible" : ""}`}
      >
        <div className="contact-before-title">
          <Title title="Before you contact us" isUnderline={false} className="mb-2" />
          <div className="contact-before-underline" />
        </div>
        <div className="contact-before-cards">
          <Card1 points={points} />
        </div>
      </div>

      <style jsx>{`
        /* Form + Help: expand from center */
        .contact-form-left {
          clip-path: inset(0 0 0 100%);
        }
        .contact-form-right {
          clip-path: inset(0 100% 0 0);
        }
        .contact-form-visible .contact-form-left {
          animation: contact-expand-left 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .contact-form-visible .contact-form-right {
          animation: contact-expand-right 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
        }
        @keyframes contact-expand-left {
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes contact-expand-right {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        /* Before: title left-to-right, underline grow, cards fade up */
        .contact-before-title :global(h1) {
          clip-path: inset(0 100% 0 0);
        }
        .contact-before-visible .contact-before-title :global(h1) {
          animation: contact-reveal-lr 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes contact-reveal-lr {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        .contact-before-underline {
          height: 2px;
          width: 0;
          margin-top: 0.5rem;
          margin-bottom: 2rem;
          background: white;
          display: block;
        }
        .contact-before-visible .contact-before-underline {
          animation: contact-underline-grow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        @keyframes contact-underline-grow {
          to {
            width: 100%;
          }
        }

        .contact-before-cards {
          opacity: 0;
          transform: translateY(24px);
        }
        .contact-before-visible .contact-before-cards {
          animation: contact-cards-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
        }
        @keyframes contact-cards-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
