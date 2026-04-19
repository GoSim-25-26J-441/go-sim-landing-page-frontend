"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../../images/logo/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const TOP_REVEAL_PX = 52;
const SCROLL_SHOW_AT_TOP = 56;
/** Horizontal offset between nav items (px); wide track uses same spread as before middle layout. */
const NAV_LINK_SPREAD_PX = 120;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [desktopNavHidden, setDesktopNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTicking = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setNavReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDesktopNavHidden(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const isDesktop = () => mq.matches;

    const onScroll = () => {
      if (!isDesktop()) {
        setDesktopNavHidden(false);
        return;
      }
      if (scrollTicking.current) return;
      scrollTicking.current = true;
      requestAnimationFrame(() => {
        scrollTicking.current = false;
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        if (y < SCROLL_SHOW_AT_TOP) {
          setDesktopNavHidden(false);
          return;
        }
        if (delta > 5) setDesktopNavHidden(true);
        else if (delta < -5) setDesktopNavHidden(false);
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDesktop()) return;
      if (e.clientY < TOP_REVEAL_PX) setDesktopNavHidden(false);
    };

    const onMqChange = () => {
      if (!mq.matches) setDesktopNavHidden(false);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    mq.addEventListener("change", onMqChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  const DASHBOARD =
    process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3001";
  const returnTo = "/";

  const logInUrl = new URL("/", DASHBOARD);
  logInUrl.searchParams.set("returnTo", returnTo);

  return (
    <>
      {desktopNavHidden && (
        <div
          aria-hidden
          className="pointer-events-auto fixed top-0 right-0 left-0 z-60 hidden h-16 cursor-default md:block"
          onMouseEnter={() => setDesktopNavHidden(false)}
        />
      )}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out md:will-change-transform ${
          desktopNavHidden ? "md:pointer-events-none md:-translate-y-full" : ""
        }`}
      >
        <div className="pointer-events-auto px-3 pt-3 md:px-5 md:pt-4">
          <nav className="relative mx-auto flex h-13 max-w-6xl flex-row justify-between items-center gap-2 px-2 md:h-14 md:max-w-6xl md:gap-3 md:rounded-full md:px-4 ">
            <div className="flex flex-row w-full">
              <div className="nav-logo flex shrink-0 items-center pl-1 md:min-w-12 md:pl-0">
                <Link
                  href="/"
                  aria-label="GO-SIM Home"
                  className="flex rounded-xl p-1.5 ring-1 ring-transparent transition"
                >
                  <Image
                    src={logo}
                    alt="GO-SIM Logo"
                    width={30}
                    height={30}
                    className="size-[30px]"
                  />
                </Link>
              </div>

              {/* Desktop — fills space between logo & CTAs (full width like centered era), anchored from the left */}
              <div className="relative hidden min-h-0 min-w-0 flex-1 justify-start md:flex md:pl-1">
                <div className="relative h-11 w-[70%] min-w-0 max-w-none overflow-hidden rounded-full bg-black/25 px-1 ring-1 ring-white/6 md:h-12">
                  <ul className="absolute inset-0 flex items-center justify-center">
                    {links.map((l, index) => {
                      // Fixed: Check if current pathname matches or starts with the link href
                      const isActive =
                        pathname === l.href ||
                        (l.href !== "/" && pathname.startsWith(l.href));
                      let currentIndex = links.findIndex((x) => {
                        return (
                          pathname === x.href ||
                          (x.href !== "/" && pathname.startsWith(x.href))
                        );
                      });

                      // If no match found (user is on a page not in nav), default to Home (index 0)
                      if (currentIndex === -1) {
                        currentIndex = 0;
                      }

                      const total = links.length;
                      let distance = index - currentIndex;
                      if (distance > total / 2) distance -= total;
                      if (distance < -total / 2) distance += total;
                      const absDistance = Math.abs(distance);
                      if (absDistance > 2) return null;

                      const translateX = distance * NAV_LINK_SPREAD_PX;
                      const styles = [
                        { opacity: 1, size: "text-[0.95rem]", scale: 1 },
                        { opacity: 0.72, size: "text-sm", scale: 0.94 },
                        { opacity: 0.38, size: "text-xs", scale: 0.88 },
                      ][Math.min(absDistance, 2)];

                      return (
                        <li
                          key={l.href}
                          className="nav-link-item pointer-events-auto absolute top-1/2 left-1/2"
                          style={{
                            transform: navReady
                              ? `translate(calc(-50% + ${translateX}px), -50%) scale(${styles.scale})`
                              : "translate(-50%, -50%) scale(0.7)",
                            opacity: navReady ? styles.opacity : 0,
                            transition:
                              "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDelay: navReady
                              ? `${absDistance * 0.06}s`
                              : "0s",
                            zIndex: 10 - absDistance,
                          }}
                        >
                          <Link
                            href={l.href}
                            className={`block whitespace-nowrap font-medium tracking-tight transition-colors duration-200 ${
                              styles.size
                            } ${
                              isActive
                                ? "rounded-full bg-white/12 px-3 py-1.5 text-white ring-1 ring-white/15"
                                : "rounded-full px-3 py-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
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
            </div>

            {/* Desktop CTAs */}
            <div className="nav-ctas hidden shrink-0 items-center justify-end gap-2 md:flex md:pr-0.5">
              <Link
                href={logInUrl.toString()}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold text-zinc-300 transition-colors duration-200 hover:bg-white/6 hover:text-white"
              >
                <span
                  className="nav-signin-dot size-2 shrink-0 rounded-full bg-emerald-400"
                  aria-hidden
                />
                Sign In
              </Link>
              <Link
                href="/get-started"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 active:scale-[0.98]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="ml-auto flex size-10 items-center justify-center  text-zinc-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={20} strokeWidth={2} />
              ) : (
                <Menu size={20} strokeWidth={2} />
              )}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="animate-slideDown mt-2 overflow-hidden rounded-2xl border border-white/8 bg-zinc-950/75 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden">
              <div className="px-4 py-6">
                <nav className="mb-6 space-y-1">
                  {links.map((l) => {
                    const isActive =
                      pathname === l.href ||
                      (l.href !== "/" && pathname.startsWith(l.href));
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-white/10 text-white ring-1 ring-white/10"
                            : "text-zinc-400 hover:bg-white/6 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {l.label}
                          {isActive ? (
                            <span className="size-1.5 shrink-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
                          ) : null}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                  <a
                    href={logInUrl.toString()}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-center text-sm font-semibold text-zinc-300 transition hover:bg-white/6 hover:text-white"
                  >
                    <span
                      className="nav-signin-dot size-2 shrink-0 rounded-full bg-emerald-400"
                      aria-hidden
                    />
                    Log in
                  </a>
                  <Link
                    href="/get-started"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl bg-white py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 active:scale-[0.99]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          /* Logo: fade + slide from left */
          .nav-logo {
            opacity: 0;
            transform: translateX(-12px);
            animation: nav-fade-slide 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s
              forwards;
          }

          /* CTAs: fade + slide from right */
          .nav-ctas {
            opacity: 0;
            transform: translateX(16px);
            animation: nav-fade-slide 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s
              forwards;
          }

          @keyframes nav-fade-slide {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.2s ease-out;
          }

          .nav-signin-dot {
            animation: nav-signin-blink 1.2s ease-in-out infinite;
          }

          @keyframes nav-signin-blink {
            0%,
            100% {
              opacity: 1;
              box-shadow:
                0 0 0 0 rgb(52 211 153 / 0.55),
                0 0 10px rgb(52 211 153 / 0.45);
            }
            50% {
              opacity: 0.3;
              box-shadow:
                0 0 0 0 rgb(52 211 153 / 0.15),
                0 0 4px rgb(52 211 153 / 0.2);
            }
          }
        `}</style>
      </header>
    </>
  );
}
