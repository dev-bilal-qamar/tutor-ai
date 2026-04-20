"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Features", href: "#features", id: "features" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-80px 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const isLightTheme = theme === "light";

  const navClass = (id: string) =>
    `relative whitespace-nowrap pb-1 text-sm transition-colors duration-200 ${activeId === id
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground"
    }`;

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("hero");
      setMenuOpen(false);
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${isScrolled
        ? isLightTheme
          ? "border-black/10 bg-white/85 backdrop-blur-xl"
          : "border-[#FFFFFF1C] bg-[#0F071C]/85 backdrop-blur-xl"
        : isLightTheme
          ? "border-transparent bg-white/65 backdrop-blur-md"
          : "border-transparent bg-[#0F071C]/60 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4">
        <Link
          href="#hero"
          onClick={(event) => handleSectionClick(event, "hero")}
          className="flex items-center gap-1"
        >
          <Image src="/logo.png" alt="App logo" width={60} height={60} />
          <p className="font-heading text-base font-semibold sm:text-lg">
            Boost TutorAI
          </p>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.id)}
              className={navClass(item.id)}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-[#8B5CD6] transition-transform duration-200 ${activeId === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className={`inline-flex size-10 items-center justify-center rounded-xl border transition-colors duration-200 ${isLightTheme
              ? "border-black/10 bg-black/5 text-black hover:bg-black/10"
              : "border-[#FFFFFF1C] bg-[#1E0E38]/70 text-white hover:bg-[#2B1550]"
              }`}
          >
            {isLightTheme ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </button>
          <Button
            variant="ghost"
            className={`h-10 rounded-xl border px-5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${isLightTheme
              ? "border-black/10 text-black hover:bg-black/5 hover:text-black"
              : "border-[#FFFFFF1C] text-white hover:bg-[#1E0E38] hover:text-white"
              }`}
          >
            Login
          </Button>
          <Button className="btn-primary-gradient h-10 rounded-xl px-5 text-xs font-semibold tracking-[0.12em] uppercase">
            Start for Free
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`inline-flex size-10 items-center justify-center rounded-xl border transition-colors duration-200 lg:hidden ${isLightTheme
            ? "border-black/10 bg-black/5 text-black hover:bg-black/10"
            : "border-[#FFFFFF1C] bg-[#1E0E38]/70 text-white hover:bg-[#2B1550]"
            }`}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t transition-[max-height,opacity] duration-200 lg:hidden ${isLightTheme
          ? "border-black/10 bg-white"
          : "border-[#FFFFFF1C] bg-[#130926]"
          } ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="mx-auto flex w-full max-w-[1280px] flex-col gap-1 px-4 py-4">
          <button
            type="button"
            onClick={toggleTheme}
            className={`mb-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border text-sm font-medium transition-colors ${isLightTheme
              ? "border-black/10 text-black hover:bg-black/5"
              : "border-[#FFFFFF1C] text-white hover:bg-[#1E0E38]"
              }`}
          >
            {isLightTheme ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.id)}
              className={`rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 ${activeId === item.id
                ? isLightTheme
                  ? "bg-black/10 text-black"
                  : "bg-[#1E0E38] text-white"
                : isLightTheme
                  ? "text-black/70 hover:bg-black/5 hover:text-black"
                  : "text-[#D2CFD7] hover:bg-[#1E0E38] hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2">
            <Button
              variant="ghost"
              className={`h-11 w-full rounded-xl border text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${isLightTheme
                ? "border-black/10 text-black hover:bg-black/5 hover:text-black"
                : "border-[#FFFFFF1C] text-white hover:bg-[#1E0E38] hover:text-white"
                }`}
            >
              Login
            </Button>
            <Button className="btn-primary-gradient h-11 w-full rounded-xl text-xs font-semibold tracking-[0.12em] uppercase">
              Start for Free
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
