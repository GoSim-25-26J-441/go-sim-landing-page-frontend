"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../../images/logo/logo.png";
import profile from "../../images/icon/profile.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <nav className="mx-auto max-w-8xl h-20 px-4 sm:px-6 lg:px-8 grid grid-cols-3 items-center">
        <div>
          <Link href="/" aria-label="GO-SIM Home">
            <Image src={logo} alt="GO-SIM Logo" width={32} height={32} />
          </Link>
        </div>

        {/* Desktop - Centered with full space */}
        <div className="hidden md:flex items-center justify-center overflow-visible relative">

          <div className="relative w-full max-w-4xl h-16 flex items-center justify-center">
            <ul className="relative w-full h-full flex items-center justify-center">
              {links.map((l, index) => {
                const currentIndex = links.findIndex(
                  (x) => x.href === pathname
                );
                const total = links.length;
                let distance = index - currentIndex;
                if (distance > total / 2) distance -= total;
                if (distance < -total / 2) distance += total;
                const absDistance = Math.abs(distance);
                if (absDistance > 2) return null;

                const translateX = distance * 150;
                const styles = [
                  { opacity: 1, size: "text-lg", scale: 1 },
                  { opacity: 0.7, size: "text-base", scale: 0.92 },
                  { opacity: 0.35, size: "text-sm", scale: 0.85 },
                ][Math.min(absDistance, 2)];

                return (
                  <li
                    key={l.href}
                    className="absolute left-1/2 top-1/2 -translate-y-1/2"
                    style={{
                      transform: `translateX(calc(-50% + ${translateX}px)) scale(${styles.scale})`,
                      opacity: styles.opacity,
                      transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
                      zIndex: 10 - absDistance,
                    }}
                  >
                    <Link
                      href={l.href}
                      className={`font-medium whitespace-nowrap block ${
                        styles.size
                      } transition-colors ${
                        pathname === l.href
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 justify-end">
          <div className="flex items-center gap-2 px-4 py-2">
            <Link
              href="/login"
              className="text-sm font-bold text-gray-300 hover:text-white"
            >
              Sign In
            </Link>
            <Image src={profile} alt="Profile" width={20} height={20} />
          </div>
          <Link
            href="/get-started"
            className="px-4 py-2 text-sm font-bold text-[#1F2937] bg-[#E5E7EB] hover:bg-[#E5E7EB]/80 rounded-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          className="md:hidden p-2 text-gray-300 hover:text-white col-start-3 justify-self-end"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* ... mobile menu ... */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === l.href
                    ? "text-blue-400 bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-4 space-y-2 border-t border-white/10">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-center"
              >
                Log in
              </Link>
              <Link
                href="/get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg text-center border border-white/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
