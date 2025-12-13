import Link from "next/link";
import Image from "next/image";

import mark1 from "../../images/icon/mark1.png";
import emailIcon from "../../images/icon/email.png";
import faqIcon from "../../images/icon/faq.png";
import formIcon from "../../images/icon/form.png";
import linkedinIcon from "../../images/icon/linkedin.png";
import githubIcon from "../../images/icon/github.png";

type Section = {
  title: string;
  variant: "product" | "arrow";
  items: { href: string; label: string }[];
};

const SECTIONS: Section[] = [
  {
    title: "Product",
    variant: "product",
    items: [
      { href: "/", label: "Overview" },
      { href: "/features", label: "Features" },
      { href: "/docs", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Resources",
    variant: "arrow",
    items: [
      { href: "/docs", label: "Docs & guides" },
      { href: "/research", label: "Research summary" },
      { href: "/examples", label: "Sample architectures" },
      { href: "/faq", label: "FAQ" },
      { href: "https://github.com", label: "GitHub" },
    ],
  },
];

// contact + social rendered from data (keeps JSX clean)
const CONTACTS = [
  {
    href: "mailto:hello@arcfind.dev",
    label: "hello@arcfind.dev",
    icon: emailIcon,
  },
  { href: "/contact", label: "Contact form", icon: formIcon },
  { href: "/support", label: "Support", icon: faqIcon },
];

const SOCIALS = [
  { href: "https://github.com", label: "GitHub", icon: githubIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: linkedinIcon },
];

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white">
      {/* Top Banner */}
      <div className="border-b-2 border-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex md:justify-end justify-center items-center gap-4">
          <p className="text-sm font-medium">
            Stay in control of your mobile services.
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-white">
              ArcFind
            </h2>
            <p className="text-xs w-[80%] font-thin text-white/80 leading-relaxed text-justify mb-4">
              Microservice architecture, anti-pattern detection, and performance
              simulation in one place.
            </p>
            <p className="text-xs font-semibold leading-relaxed">
              Built as a final-year research project at SLIIT to help teams
              reason about microservice performance before deployment.
            </p>
            <p className="text-[9px] text-white/50 mt-4">
              Backend in Go, powered by Neo4j, PostgreSQL, and Next.js.
            </p>
          </div>

          {/* Product + Resources */}
          {SECTIONS.map((sec) => (
            <div key={sec.title}>
              <h3 className="text-white font-semibold pb-3 mb-4 text-xs uppercase tracking-wider border-b border-white">
                {sec.title}
              </h3>
              <ul className="space-y-3">
                {sec.items.map(({ href, label }) => {
                  const content = (
                    <>
                      <Image
                        src={mark1}
                        alt=""
                        width={12}
                        height={12}
                        className="mr-2"
                      />
                      <span>{label}</span>
                    </>
                  );

                  return (
                    <li key={`${sec.title}:${label}`}>
                      {isExternal(href) ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Contact + Follow */}
          <div>
            <h3 className="text-white font-semibold pb-3 mb-4 text-xs uppercase tracking-wider border-b border-white">
              Contact
            </h3>
            <ul className="space-y-3 mb-8">
              {CONTACTS.map(({ href, label, icon }) => {
                const content = (
                  <>
                    <Image
                      src={icon}
                      alt=""
                      width={12}
                      height={12}
                      className="mr-2"
                    />
                    <span>{label}</span>
                  </>
                );
                return (
                  <li key={label}>
                    {isExternal(href) ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <h3 className="text-white font-semibold pb-3 mb-4 text-xs uppercase tracking-wider border-b border-white">
              Follow
            </h3>
            <ul className="space-y-3">
              {SOCIALS.map(({ href, label, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    aria-label={label}
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={12}
                      height={12}
                      className="mr-2"
                    />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-gray-500">
            <span>© {year} GO-SIM. All rights reserved.</span>
            <span className="text-gray-600">
              Built as a research project at SLIIT.
            </span>
            <nav className="flex gap-4">
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms
              </Link>
              <span className="text-gray-700" aria-hidden="true">
                ●
              </span>
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy
              </Link>
              <span className="text-gray-700" aria-hidden="true">
                ●
              </span>
              <Link
                href="/cookies"
                className="hover:text-gray-300 transition-colors"
              >
                Cookie policy
              </Link>
              <span className="text-gray-700" aria-hidden="true">
                ●
              </span>
              <span className="text-gray-600">EN</span>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
